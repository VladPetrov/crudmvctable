﻿using BLL.Infrastructure;
using DAL.Infrastructure;
using Domain.Category;

namespace BLL
{
    public class SubCategoryService : GenericCrudServise<SubCategoryDisplay, SubCategoryDomain>, ISubCategoryService
    {
        public SubCategoryService(ISubCategoryRepository repository) : base(repository)
        {
        }
    }
}
