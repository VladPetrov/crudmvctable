using System;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using BLL;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace WebApp.Filters
{
    public class ExceptionActionResult : IActionResult
    {
        private Exception Exception { get; }

        public ExceptionActionResult(Exception exception)
        {
            Exception = exception;
        }

        public async Task ExecuteResultAsync(ActionContext context)
        {
            var message = DomainExceptionHandler.Handle(Exception);

            var json = JsonConvert.SerializeObject(message);

            var response = context.HttpContext.Response;

            response.ContentType = new MediaTypeHeaderValue("application/json").ToString();
            response.StatusCode = StatusCodes.Status200OK;

            await response.WriteAsync(json, Encoding.ASCII);
        }
    }
}
