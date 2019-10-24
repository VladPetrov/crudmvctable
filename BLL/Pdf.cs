using Common;
using Common.Extensions;
using Common.IO;
using Domain.Files;
using JetBrains.Annotations;
using System.Collections.Generic;
using iText.Kernel.Geom;
using iText.Kernel.Pdf;
using iText.Layout;
using iText.Layout.Element;
using iText.Layout.Properties;

namespace BLL
{
    public static class Pdf
    {
        public static FileDownloadable CreatePdf([NotNull] List<string> headers, [NotNull] List<List<string>> rows, [NotNull] string title, [NotNull] string fileName, [NotNull] string author)
        {
            byte[] bytes;

            using (var stream = MemoryStreamManager.Manager.GetStream("CreatePdf"))
            {
                var writer = new PdfWriter(stream);
                var pdf = new PdfDocument(writer);
                

                using (var doc = new Document(pdf, PageSize.A4.Rotate()))
                {
                    Paragraph p;

                    p = new Paragraph($"Title: {title}");
                    p.SetMarginBottom(10f);
                    doc.Add(p);

                    p = new Paragraph($"User: {author}");
                    p.SetMarginBottom(10f);
                    doc.Add(p);

                    p = new Paragraph($"Export Date: {DateTimeContext.Now.ToLongDateString()}");
                    p.SetMarginBottom(10f);
                    doc.Add(p);

                    var table = new Table(headers.Count);
                    table.SetWidth(UnitValue.CreatePercentValue(100));

                    headers.ForEach(x =>
                    {
                        var header = new Cell();
                        header.Add(new Paragraph(x).SetBold().SetItalic());
                        table.AddHeaderCell(header);
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
