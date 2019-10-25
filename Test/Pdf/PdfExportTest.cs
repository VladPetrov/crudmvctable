﻿using NUnit.Framework;
using System.Collections.Generic;
using System.IO;

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

        private string FileName => "test doc";

        [Test]
        public void Export()
        {
            var fileInfo = new FileInfo(Path.Combine(Directory.GetCurrentDirectory(), $"{FileName}.pdf"));

            if (fileInfo.Exists)
            {
                fileInfo.Delete();
            }

            var file = BLL.Pdf.CreatePdf(_headrers, _data, "test doc", "pdfTest", "NUnit.Framework");

            var path = Path.Combine(Directory.GetCurrentDirectory(), file.Name);

            File.WriteAllBytes(path, file.Content);

            Assert.IsTrue(File.Exists(path));
        }
    }
}