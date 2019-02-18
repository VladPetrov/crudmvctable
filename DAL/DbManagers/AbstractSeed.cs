using System;
using System.Collections.Generic;
using System.Linq;
using Common;
using Common.Configuration;
using DAL.Model;
using Microsoft.EntityFrameworkCore;

namespace DAL.DbManagers
{
    public interface ISeed
    {
        SeedType Type { get; }
        int Sequence { get; }
        void Seed();
    }

    public abstract class AbstractSeed : ISeed
    {
        public SeedType Type { get; }

        public int Sequence { get; }

        protected DataBase Context { get; }

        public AbstractSeed(DataBase context, SeedType type, int sequence)
        {
            Type = type;
            Context = context;
            Sequence = sequence;
        }

        public void Seed()
        {
            Log.Logger().Information("Seed type {type}, Sequence {Sequence} is starting...", Type.ToString(), Sequence);

            var seedName = GetType().Name;

            if (Context.Seeds.All(x => x.Name != seedName))
            {
                try
                {
                    Context.DoInTransaction(() =>
                    {
                        Log.Logger().Information("Seed type {type}, Sequence {Sequence} started", Type.ToString(), Sequence);

                        DoSeed();

                        Context.Add(new Seed {Name = seedName });

                        Context.SaveChanges();

                        Log.Logger().Information("Seed type {type}, Sequence {Sequence} finished successfully", Type.ToString(), Sequence);
                    });
                }
                catch (Exception e)
                {
                    Log.Logger().Error(e, "Seed type {type}, Sequence {Sequence} failed", Type.ToString(), Sequence);
                    throw;
                }
            }
            else
            {
                Log.Logger().Information("Seed type {type}, Sequence {Sequence} is present in DB", Type.ToString(), Sequence);
            }
        }

        protected abstract void DoSeed();

        protected int AddEntity<TEntity>(DbSet<TEntity> dbSet, List<TEntity> items, Func<TEntity, string> trackBy = null) where TEntity : class 
        {
            if (trackBy != null)
            {
                items.ForEach(i =>
                {
                    var value = trackBy(i).ToLower();
                    if (dbSet.Select(trackBy).All(x => x.ToLower() != value))
                    {
                        dbSet.Add(i);
                    }
                });
            }
            else
            {
                dbSet.AddRange(items);
            }
           
            return Context.SaveChanges();
        }

        protected int AddEntity<TEntity>(DbSet<TEntity> dbSet, List<TEntity> items, Func<TEntity, long> trackBy = null) where TEntity : class
        {
            if (trackBy != null)
            {
                items.ForEach(i =>
                {
                    var value = trackBy(i);
                    if (dbSet.Select(trackBy).All(x => x != value))
                    {
                        dbSet.Add(i);
                    }
                });
            }
            else
            {
                dbSet.AddRange(items);
            }

            return Context.SaveChanges();
        }
    }
}
