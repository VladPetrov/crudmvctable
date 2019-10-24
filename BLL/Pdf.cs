using Common;
using Common.Extensions;
using Common.IO;
using Domain.Files;
using iTextSharp.text;
using iTextSharp.text.pdf;
using JetBrains.Annotations;
using System.Collections.Generic;

namespace BLL
{
    public static class Pdf
    {
        private static FileDownloadable CreatePdf([NotNull] List<string> columns, [NotNull] List<List<string>> rows, [NotNull] string title, [NotNull] string fileName, [NotNull] string author)
        {
            byte[] bytes;

            using (var stream = MemoryStreamManager.Manager.GetStream("CreatePdf"))
            {
                using (var doc = new Document(PageSize.A4.Rotate()))
                {
                    //Pdf Writer is closed when Document is closed
                    var writer = PdfWriter.GetInstance(doc, stream);

                    doc.Open();

                    Paragraph p;

                    p = new Paragraph($"Title: {title}") {SpacingAfter = 10f};
                    doc.Add(p);

                    p = new Paragraph($"User: {author}") {SpacingAfter = 10f};
                    doc.Add(p);

                    p = new Paragraph($"Export Date: {DateTimeContext.Now.ToLongDateString()}") {SpacingAfter = 20f};
                    doc.Add(p);

                    var table = new PdfPTable(columns.Count);
                    table.HeaderRows = 1;
                    table.WidthPercentage = 100f;

                    columns.ForEach(x =>
                    {
                        var header = new PdfPCell(new Phrase(x)) {HorizontalAlignment = 1};
                        table.AddCell(header);
                    });

                    rows.ForEach(x => x.ForEach(y => table.AddCell(y)));

                    doc.Add(table);

                    writer.Flush();

                    bytes = stream.GetBuffer();
                }
            }

            return new FileDownloadable($"{fileName}.pdf".ToFileName(), "application/pdf", bytes);
        }
    }
}
