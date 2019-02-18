using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace Domain.List
{
    public class DomainList<T> : IList<T> where T : DomainBase
    {
        private List<T> List { get; }

        private IReadOnlyList<string> InitialGuids { get; }

        private List<T> FilteredList => List.Where(x => x.ChangeType != ChangeType.Deleted).ToList();

        public DomainList(params T[] items):this(items.ToList()){}

        public DomainList(IEnumerable<T> items)
        {
            List = items.ToList();

            List.Where(x => x.IsNew).ToList().ForEach(x => x.ChangeType = ChangeType.Added);

            InitialGuids = List.Where(x => !x.IsNew).Select(x => x.Guid).ToList();
        }

        public IDomainMapingList<T> GetMappingList()
        {
            return new DomainMappingList<T>(List);
        }

        public IEnumerator<T> GetEnumerator()
        {
            return FilteredList.GetEnumerator();
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            return GetEnumerator();
        }

        public void Add(T item)
        {
            if (!FilteredList.Contains(item)) 
            {
                EvaluateType(item);
                List.Add(item);
            }
        }

        public void Clear()
        {
            FilteredList.ForEach(x =>
            {
                if (IsInitialItem(x))
                {
                    x.ChangeType = ChangeType.Deleted;
                }
                else
                {
                    List.Remove(x);
                }
            });
        }

        public bool Contains(T item)
        {
            return FilteredList.Contains(item);
        }

        public void CopyTo(T[] array, int arrayIndex)
        {
            var filterd = array.Where(x => FilteredList.Contains(x)).ToList();

            filterd.ForEach(EvaluateType);

            FilteredList.CopyTo(filterd.ToArray(), arrayIndex);
        }

        public bool Remove(T item)
        {
            if (!Contains(item))
            {
                return false;
            }
           
            if (IsInitialItem(item))
            {
                item.ChangeType = ChangeType.Deleted;
            }
            else
            {
                List.Remove(item);
            }

            return true;
        }

        public int Count => FilteredList.Count;

        public bool IsReadOnly => false;

        public int IndexOf(T item)
        {
            return FilteredList.IndexOf(item);
        }

        public void Insert(int index, T item)
        {
            if (FilteredList.Contains(item))
            {
                return;
            }

            EvaluateType(item);

            FilteredList.Insert(index, item);
        }

        public void RemoveAt(int index)
        {
            var item = FilteredList[index];

            if (InitialGuids.Contains(item.Guid))
            {
                item.ChangeType = ChangeType.Deleted;
            }
            else
            {
                List.Remove(item);
            }
        }

        public T this[int index]
        {
            get => FilteredList[index];
            set => Insert(index, value);
        }

        public void Update(T item)
        {
            if (FilteredList.Contains(item))
            {
                item.ChangeType = !item.IsNew ? ChangeType.Modified : ChangeType.Added;
            }
        }

        public void Upsert(T item)
        {
            if (FilteredList.Contains(item))
            {
                Update(item);
            }
            else
            {
                Add(item);
            }
        }

        private bool IsInitialItem(T item)
        {
            return InitialGuids.Contains(item.Guid);
        }

        private void EvaluateType(T item)
        {
            item.ChangeType = IsInitialItem(item) ? ChangeType.UnChanged : ChangeType.Added;
        }
    }
}
