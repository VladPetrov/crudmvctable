using Domain;
using Microsoft.AspNetCore.Mvc;
using WebApp.Extensions;
using WebApp.Model;
using WebApp.Model.GenericMvc;

namespace WebApp.Controllers
{
    public class MvcController : Controller
    {
        protected void SaveToSession<T>(SessionKeys key, T value)
        {
            if (value != null)
            {
                HttpContext.Session.Set(GetSessionKey(key), value); 
            }
        }

        protected void RemoveFromSession(SessionKeys key)
        {
            HttpContext.Session.Remove(GetSessionKey(key));
        }
        
        protected T GetFromSession<T>(SessionKeys key, T defaultVal = default(T))
        {
            return HttpContext.Session.Get<T>(GetSessionKey(key), defaultVal);
        }

        private string GetSessionKey(SessionKeys key)
        {
            return GetType().Name.ToSessionKey(key);
        }

        protected ViewResult GetView(OperationResult model)
        {
            return GetView(null, model);
        }

        protected ViewResult GetView(string viewName, OperationResult model)
        {
            if (!model.Success)
            {
                ModelState.AddModelError("", model.Message);
            }
            return View(viewName, model.Success);
        }

        protected ViewResult GetView<TData>(OperationResult<TData> model)
        {
            return GetView(null, model);
        }

        protected ViewResult GetView<TData>(string viewName, OperationResult<TData> model)
        {
            if (!model.Success)
            {
                ModelState.AddModelError("", model.Message);
            }
            return View(viewName, model.Data);
        }

        protected PartialViewResult GetPartialView<TData>(string viewName, OperationResult<TData> model)
        {
            if (!model.Success)
            {
                ModelState.AddModelError("", model.Message);
            }
            return PartialView(viewName, model.Data);
        }
    }
}