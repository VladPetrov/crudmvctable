using System.Collections.Generic;

namespace Test.Table
{
    internal static class TableOrderTestDataInitializer
    {
        public static void Init(TableTestContext context)
        {
            context.Users.AddRange(new List<User>
            {
                new User
                {
                    FirstName = "B",
                    LastName = "G",
                    Email = "serg@gmail.com",
                    IsAdmin = true,
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
                },

                new User
                {
                    FirstName = "A",
                    LastName = "E",
                    Email = "valis@gmail.com",
                    IsAdmin = false,
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
                    FirstName = "A",
                    LastName = "F",
                    Email = "serg@gmail.com",
                    Adress = new Adress{ Street = "Marzinkevicha"},
                    IsAdmin = true,
                    Accounts =
                        new List<Account>
                        {
                            new Account
                            {
                                AccountNumber = 142,
                                BankName = "VTB"
                            }
                        }
                },
            });

            context.SaveChanges();
        }
    }
}
