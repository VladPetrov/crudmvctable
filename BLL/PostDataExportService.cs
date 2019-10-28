﻿using BLL.Infrastructure;
using Common.Extensions;
using DAL.Infrastructure;
using Domain.Files;
using Domain.Post;
using System;
using System.Collections.Generic;
using System.Linq;
using Common;

namespace BLL
{
    public class PostDataExportService : IPostDataExportService
    {
        private IPostRepository Repository { get; }

        public PostDataExportService(IPostRepository repository)
        {
            Repository = repository;
        }
        
        public FileDownloadable ExportPost(IEnumerable<string> ids, string exportBy)
        {
            var (headers, dataRows) = ParseData(Repository.Export(ids));

            return Pdf.CreatePdf(headers, dataRows, "post export", $"post export {DateTime.Now.ToShortDateString()}", exportBy);
        }

        private (List<string> headers, List<List<string>> data) ParseData(IEnumerable<PostDto> data)
        {
            var headers = new List<string>();

            var type = typeof(PostDto);

            headers.Add(type.GetProperty(nameof(PostDto.DeliveredDate))?.GetDisplayName());
            headers.Add(type.GetProperty(nameof(PostDto.Sender))?.GetDisplayName());
            headers.Add(type.GetProperty(nameof(PostDto.RecipientFirm))?.GetDisplayName());
            headers.Add("Address");
            headers.Add(type.GetProperty(nameof(PostDto.Type))?.GetDisplayName());

            var dataInRows = data.Select(item => new List<string>
            {
                item.DeliveredDate.ToString(DateTimeContext.DateFormat), 
                item.Sender,
                item.RecipientFirm,
                GetAddress(item),
                item.Type.GetDisplayName()
            }).ToList();

            return (headers, dataInRows);
        }

        private static string GetAddress(PostDto dto)
        {
            return new AddressBuilder(dto.ClientName, dto.Country,  dto.City, dto.StreetAndNumber, dto.PostalCode).GetAddress();
        }
    }
}
