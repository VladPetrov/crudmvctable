using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;
using OfficeOpenXml.FormulaParsing.Excel.Functions.Math;

namespace DAL.Model
{
    public class DeliveryAddress
    {
        public string Name { get; set; }

        public string StreetAndNumber { get; set; }

        public string City { get; set; }

        [ForeignKey(nameof(Country))]
        public long CountryId { get; set; }

        public virtual Country Country { get; set; }
    }
}
