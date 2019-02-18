using Common.Configuration;
using DAL.Model;
using Domain.Message;
using JetBrains.Annotations;

namespace DAL.DbManagers.Seeds
{
    [UsedImplicitly]
    public class MessageSeed : AbstractSeed
    {
        public MessageSeed(DataBase context) : base(context, SeedType.TestData, 1)
        {
        }

        protected override void DoSeed()
        {
            for (int i = 0; i < 75; i++)
            {
                var message = new Message
                {
                    Text = $"test message {i}",
                    IsViewed = i % 2 == 0,
                    Number = i,
                    Type = i % 3 == 0 ? MessageType.QueueList : MessageType.Log
                };

                for (int j = 0; j < 15; j++)
                {
                    message.SubMessages.Add(new SubMessage
                    {
                        Text = $"test message {j}",
                        IsViewed = j % 2 == 0,
                        Number = j,
                    });
                }

                Context.Add(message);
            }
        }
    }
}
