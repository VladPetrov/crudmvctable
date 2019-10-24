﻿using DAL.Model;
using Domain.Files;
using System;
using System.IO;
using System.Linq;
using AutoMapper;
using Common.Extensions;
using DAL.Extensions;
using DAL.Infrastructure;
using Domain.DeleteResult;
using Microsoft.EntityFrameworkCore;
using Optional.Unsafe;
using File = DAL.Model.File;

namespace DAL.Repositories
{
    public class FileRepository : BaseRepository<DataBase, long>, IFileRepository
    {
        private ITransactionManager TransactionManager { get; }

        public FileRepository(DataBase context, ITransactionManager transactionManager) : base(context)
        {
            TransactionManager = transactionManager;
        }

        public FileDomain GetById(long id)
        {
            return Context.Files
                .FindOptional(id)
                .SomeOrEntityNotFoundException()
                .Do(e => Context.Entry(e).GetDatabaseValues())
                .Map(Mapper.Map<FileDomain>)
                .ValueOrFailure();
        }

        public FileDomain SaveFile(FileDomain doamin, Stream stream)
        {
            using (stream)
            {
                var file = Mapper.Map<File>(doamin);

                file.BinaryData = new BinaryData{ Content = GetBytes(stream) };

                Context.Files.Add(file);

                Context.SaveChanges();

                return Mapper.Map<FileDomain>(file);
            }
        }

        public BinaryDataDomain GetBinary(long fileId)
        {
            return Context.Binaries
                .Single(x => x.FileId == fileId)
                .AsOptional()
                .SomeOrEntityNotFoundException()
                .Do(e => Context.Entry(e).GetDatabaseValues())
                .Map(Mapper.Map<BinaryDataDomain>)
                .ValueOrFailure();
        }

        public DeleteResult Delete(long id)
        {
            return ReferenceChecker
                .Check(id)
                .OnDelete(() =>
                {
                    Context.Files
                        .FindOptional(id)
                        .MatchSome(file =>
                        {
                            TransactionManager.DoInTransaction(() =>
                            {
                                var binary = Context.Binaries.Single(x => x.FileId == file.Id);
                                Context.Binaries.Remove(binary);
                                Context.Files.Remove(file);
                                Context.SaveChanges();
                            });
                        });
                });
        }

        private byte[] GetBytes(Stream stream)
        {
            using (MemoryStream ms = new MemoryStream())
            {
                stream.CopyTo(ms);
                return ms.ToArray();
            }
        }
    }
}