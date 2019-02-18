using System.Collections.Generic;

namespace Test.Table
{
    internal static class TableFilterTestDataInitializer
    {
        public static void Init(TableTestContext context)
        {
            context.Users.AddRange(new List<User>
            {
                new User
                {
                    FirstName = "Vasia",
                    LastName = "A",
                    Email = "valis@gmail.com",
                    IsAdmin = true,
                    Adress = new Adress{ Street = "Dunina"},
                    Accounts =
                        new List<Account>
                        {
                            new Account
                            {
                                AccountNumber = 12312,
                                BankName = "BSB"
                            }
                        }
                },

                new User
                {
                    FirstName = "Sergey",
                    LastName = "B",
                    Email = "serg@gmail.com",
                    IsAdmin = false,
                    Adress = new Adress{ Street = "Marzinkevicha"},
                    Accounts =
                        new List<Account>
                        {
                            new Account
                            {
                                AccountNumber = 142,
                                BankName = "VTB"
                            }
                        }
                }
            });

            context.SaveChanges();
        }
    }
}
