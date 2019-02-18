using System;
using System.IO;
using System.IO.Compression;

namespace BLL
{
    public class Archive : IDisposable
    {
        private readonly ZipArchive _archive;
        private readonly string _filePath;
        private Stream _stream;

        public Archive(string fileName)
        {
            _filePath = Path.Combine(Path.GetTempPath(), $"{fileName}.zip");
            _archive = new ZipArchive(File.Create(_filePath), ZipArchiveMode.Create);
        }

        public void AddFile(string fileName, Stream stream)
        {
            var zipArchiveEntry = _archive.CreateEntry(fileName, CompressionLevel.Fastest);

            using (var zipStream = zipArchiveEntry.Open())
            {
                stream.CopyTo(zipStream);
            }
        }

        public void AddFile(string fileName, string path)
        {
            _archive.CreateEntryFromFile(path, fileName);
        }

        public Stream GetStream()
        {
            _archive.Dispose();
            _stream = File.OpenRead(_filePath);
            return _stream;
        }

        public byte[] GetBytes()
        {
            _archive.Dispose();
            return File.ReadAllBytes(_filePath);
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        private bool _disposed;

        protected void Dispose(bool disposing)
        {
            if (_disposed)
            {
                return;
            }

            _disposed = true;

            if (disposing)
            {
                _archive?.Dispose();
                _stream?.Dispose();

                if (File.Exists(_filePath))
                {
                    File.Delete(_filePath);
                }
            }
        }
    }
}
