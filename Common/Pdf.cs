using System;
using System.IO;
using iTextSharp.text;
using iTextSharp.text.pdf;

namespace Common
{
    public static class Pdf
    {
        public static Stream GetFirstPageStream(Stream sourceStream)
        {
            using (var copySourceStream = new MemoryStream())
            {
                sourceStream.CopyTo(copySourceStream);

                sourceStream.Position = 0;
                copySourceStream.Position = 0;

                using (var reader = new PdfReader(copySourceStream))
                {
                    if (reader.NumberOfPages < 1)
                    {
                        throw new Exception("Pdf is empty.");
                    }

                    using (var document = new Document(reader.GetPageSizeWithRotation(1)))
                    using (var memoryStream = new MemoryStream())
                    using (var pdfCopyProvider = new PdfCopy(document, memoryStream))
                    {
                        document.Open();

                        var importedPage = pdfCopyProvider.GetImportedPage(reader, 1);
                        pdfCopyProvider.AddPage(importedPage);

                        document.Close();
                        reader.Close();

                        return new MemoryStream(memoryStream.ToArray());
                    }
                }
            }
        }

        public static bool IsPdf(string fileName)
        {
            var fileExtension = Path.GetExtension(fileName).ToLower();

            return fileExtension == ".pdf";
        }
    }
}
