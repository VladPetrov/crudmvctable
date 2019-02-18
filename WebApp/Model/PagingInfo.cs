using System;

namespace WebApp.Model
{
    public class PagingInfo
    {
        public int Filtered { get; }
        public int ItemsPerPage { get; }
        public int CurrentPage { get; }
        public int TotalPages { get; }
        public int StartPage { get; }
        public int EndPage { get; }

        public PagingInfo(int currentPage, int filtered, int itemsPerPage)
        {
            CurrentPage = currentPage;
            Filtered = filtered;
            ItemsPerPage = itemsPerPage;

            TotalPages = (int) Math.Ceiling((decimal) Filtered / ItemsPerPage);

            var startPage = currentPage - 5;
            var endPage = currentPage + 4;

            if (startPage <= 0)
            {
                endPage -= (startPage - 1);
                startPage = 1;
            }

            if (endPage > TotalPages)
            {
                endPage = TotalPages;

                if (endPage > 10)
                {
                    startPage = endPage - 9;
                }
            }

            StartPage = startPage;
            EndPage = endPage;
        }

        public int PreviousPage => CurrentPage == 1 ? 1 : CurrentPage - 1;
        public int NextPage => CurrentPage == TotalPages ? CurrentPage : CurrentPage + 1;
        public int LastPage => TotalPages;
        public int FirstPage => 1;
    }
}