using System.Collections.Generic;

namespace Test.GenericInfrastructure
{
    internal static class GenericInfrastructureDataInitializer
    {
        public static void Init(GenericInfrastructureContext context)
        {
            context.Users.AddRange(new List<User>
            {
                new User
                {
                    FirstName = "Vasia",
                    LastName = "Shushkin",
                    Email = "valis@gmail.com",
                    Adress = new Adress{ Street = "Dunina"},
                    Accounts =
                        new List<Account>
                        {
                            new Account
                            {
                                AccountNumber = 2346,
                                BankName = "VUB"
                            }
                        }
                },

                new User
                {
                    FirstName = "Sergey",
                    LastName = "Ankin",
                    Email = "serg@gmail.com",
                    Adress = new Adress{ Street = "Marzinkevicha"},
                    Accounts =
                        new List<Account>
                        {
                            new Account
                            {
                                AccountNumber = 142,
                                BankName = "VTB"
                            },
                            new Account
                            {
                                AccountNumber = 231875,
                                BankName = "Tatra Bank"
                            }
                        }
                },

                new User
                {
                    FirstName = "Indy",
                    LastName = "Wainshtaine",
                    Email = "indy@gmail.com",
                    Adress = new Adress{ Street = "Dunina"},
                },
            });

            context.SaveChanges();
        }
    }
}
