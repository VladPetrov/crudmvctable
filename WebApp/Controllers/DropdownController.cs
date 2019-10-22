using DAL.Model;
using DAL.Repositories;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;
using System.Linq.Expressions;
using Domain;
using Microsoft.AspNetCore.Authorization;

namespace WebApp.Controllers
{
    [Authorize]
    public class DropdownController : Controller
    {
        private IValueObjectRepository<ValueObject, long> ValueObjectRepository { get; }

        public DropdownController(IValueObjectRepository<ValueObject, long> valueObjectRepository)
        {
            ValueObjectRepository = valueObjectRepository;
        }

        [HttpPost]
        public JsonResult GetProjectsByEntities(long id)
        {
            return FilterItems<Project>(id, x => x.Entities.Select(y => y.LeftLinkId).Contains(id));
        }

        private JsonResult FilterItems<T>(long id, Expression<Func<T, bool>> predicate) where T : EntityBase
        {
            var items = id > 0 ? ValueObjectRepository.GetItems<T>(predicate) : ValueObjectRepository.GetItems<T>(x => true);

            return Json(items);
        } 
    }
}