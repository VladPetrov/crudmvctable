using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using NUnit.Framework;

namespace Test.Pdf
{
    [TestFixture]
    public class PdfExportTest
    {
        private List<string> _headrers => new List<string>
        {
            "Header1",
            "Header2",
        };

        private List<List<string>> _data => new List<List<string>>
        {
            new List<string>{"column 1 1", "column 1 2"},
            new List<string>{"column 2 1", "column 2 2"},
        };

        [Test]
        public void Export()
        {
            var file = BLL.Pdf.CreatePdf(_headrers, _data, "test doc", "pdfTest", "NUnit.Framework");

            var path = Path.Combine(Directory.GetCurrentDirectory(), file.Name);

            File.WriteAllBytes(path, file.Content);

            Assert.IsTrue(File.Exists(path));
        }
    }
}
