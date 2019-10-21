using System.Collections.Generic;
using Common;

namespace BLL.EmailRenderEngine
{
    public class EmailRenderer<T> where T : class
    {
        private T Context { get; }

        private EmailRendererConfig<T> Config { get; }

        public IEnumerable<string> GetTags() => Config.GetTags();

        public EmailRenderer(T context)
        {
            Defensive.AssertNotNull(context, "Email context cant be null");

            Context = context;

            Config = EmailRendererConfigFactory.GetConfigForContext<T>();
        }

        public string ProcessEmailTemplate(string email)
        {
            var tags = new List<string>(); //todo get tags without brackets '[]' from email using RegEx example of teg: [UserName] or [UserEmail]

            foreach (var tag in tags)
            {
                var value = Config.GetTagValue(tag, Context);

                email = email.Replace($"[{tag}]", value);
            }

            return email;
        }
    }
}
