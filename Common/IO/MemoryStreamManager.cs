using Microsoft.IO;

namespace Common.IO
{
    public static class MemoryStreamManager
    {
        /// <summary>
        /// http://www.philosophicalgeek.com/2015/02/06/announcing-microsoft-io-recycablememorystream/
        /// </summary>
        public static readonly RecyclableMemoryStreamManager Manager;

        static MemoryStreamManager()
        {
            Manager = new RecyclableMemoryStreamManager();
        }
    }
}
