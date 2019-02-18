using System;

namespace WebApp.Extensions
{
    public static class ControllerExtensions
    {
        public static string ToControllerName(this string controller, bool throwIfWrongName = true)
        {
            if (string.IsNullOrEmpty(controller))
            {
                throw new ArgumentException("Controller name is empty");
            }

            if (throwIfWrongName && !controller.Contains("Controller"))
            {
                throw new ArgumentException($"Controller name '{controller}' is incorrect");
            }

            return controller.Replace("Controller", "");
        }

        

        public static string ToViewComponentName(this string component)
        {
            if (string.IsNullOrEmpty(component))
            {
                throw new ArgumentException("Component name is empty");
            }

            if (!component.Contains("ViewComponent"))
            {
                throw new ArgumentException($"Controller name '{component}' is incorrect");
            }

            return component.Replace("ViewComponent", "");
        }
    }
}
