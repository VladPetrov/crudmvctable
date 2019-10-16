using System;
using System.Collections.Generic;
using System.Linq;
using Common;
using JetBrains.Annotations;
using Newtonsoft.Json;


namespace Domain
{
    public class OperationResult
    {
        [JsonIgnore]
        public bool Success => Code == OperationCode.Ok || Code == OperationCode.Warnings;

        [NotNull] public string Message { get; }

        [CanBeNull] public string StackTrace { get; }

        public OperationCode Code { get; }
        
        protected OperationResult([NotNull] string message, OperationCode code, string stackTrace = null)
        {
            Message = message;
            Code = code;
            StackTrace = stackTrace;
        }
        private static OperationResult Create([NotNull] string message, OperationCode code, string stackTrace)
        {
            return new OperationResult(message, code);
        }

        public OperationResult<TData> ToEmpty<TData>()
        {
            return OperationResult<TData>.Create(default(TData), Message, Code, StackTrace);
        }

        public OperationResult<TData> SetData<TData>(TData data)
        {
            return OperationResult<TData>.Create(data, Message, Code);
        }

        #region static
        public static OperationResult Ok()
        {
            return Create("OK", OperationCode.Ok, null);
        }

        public static OperationResult Error([NotNull] string message)
        {
            return Create(message, OperationCode.GeneralError, null);
        }

        public static OperationResult Error([NotNull] string message, OperationCode code, string stackTrace = null)
        {
            return Create(message, code, stackTrace);
        }

        public static OperationResult Error([NotNull] Exception e)
        {
            return Create(e.Message, OperationCode.GeneralError, e.StackTrace);
        }

        public static OperationResult Error([NotNull] Exception e, [NotNull] string message)
        {
            return Create(message, OperationCode.GeneralError, e.StackTrace);
        }

        public static OperationResult UnhandledError([NotNull] string message)
        {
            return Create(message, OperationCode.UnhandledError, null);
        }

        public static OperationResult UnhandledError([NotNull] Exception e)
        {
            return Create(e.Message, OperationCode.UnhandledError, e.StackTrace);
        }

        public static OperationResult UnhandledError([NotNull] Exception e, [NotNull] string message)
        {
            return Create(message, OperationCode.UnhandledError, e.StackTrace);
        }
        #endregion
    }
    
    public class OperationResult<TData> : OperationResult
    {
        protected OperationResult([CanBeNull] TData data, [NotNull] string message, OperationCode code, string stackTrace) : base(message, code, stackTrace)
        {
            Data = data;
        }

        [CanBeNull]
        public TData Data { get; }
        
        protected internal static OperationResult<TData> Create([CanBeNull] TData data, [NotNull] string message, OperationCode code, string stackTrace = null)
        {
            return new OperationResult<TData>(data, message, code, stackTrace);
        }
    }

    public sealed class UpsertResult<TData> : OperationResult<TData> //where TData : DomainBase
    {
        public IReadOnlyCollection<string> Warnings => _warnings.AsReadOnly();

        private List<string> _warnings = new List<string>();
        
        private UpsertResult([CanBeNull] TData data, 
                             [NotNull] string message, 
                             OperationCode code,
                             string stackTrace,
                             [NotNull] IEnumerable<string> warnings)
            :base(data, message, code, stackTrace)
        {
            _warnings = warnings.ToList();
        }

        public void AddWarning([NotNull] string warning)
        {
            _warnings.Add(warning);
        }

        public void AddWarning(IEnumerable<string> warning)
        {
            _warnings.AddRange(warning);
        }

        public static UpsertResult<TData> Ok([CanBeNull] TData data)
        {
            return Create(data, "OK", OperationCode.Ok, null, new List<string>());
        }

        public static UpsertResult<TData> Ok([CanBeNull] TData data, [NotNull] string message)
        {
            return Create(data, message, OperationCode.Ok, null);
        }

        public static UpsertResult<TData> Ok([CanBeNull] TData data, [NotNull] string message, [NotNull] IEnumerable<string> warnings)
        {
            return Create(data, message, OperationCode.Ok, null, warnings);
        }

        public new static UpsertResult<TData> Error([NotNull] string message, TData data = default(TData))
        {
            return Create(data, message, OperationCode.GeneralError, "");
        }

        public new static UpsertResult<TData> Error(Exception e)
        {
            return Create(default(TData), e.Message, OperationCode.GeneralError, e.StackTrace);
        }

        public new static UpsertResult<TData> UnhandledError(string message)
        {
            return Create(default(TData), message, OperationCode.UnhandledError, null);
        }

        public new static UpsertResult<TData> UnhandledError(Exception e)
        {
            return Create(default(TData), e.Message, OperationCode.UnhandledError, e.StackTrace);
        }

        public static UpsertResult<TData> Create([CanBeNull] TData data, 
                                                 [NotNull] string message,
                                                 OperationCode code,
                                                 string stackTrace,
                                                 IEnumerable<string> warnings = null)
        {
            return new UpsertResult<TData>(data, message, code, stackTrace, warnings ?? new List<string>());
        }
    }

    public static class OperationResultExtensions
    {
        public static OperationResult<DeleteResult.DeleteResult> ToOperationResult(this DeleteResult.DeleteResult deleteResult)
        {
            var code = deleteResult.Success ? OperationCode.Ok : OperationCode.EntityWithExternalReferencesCanNotBeDeleted;

            return OperationResult<DeleteResult.DeleteResult>.Create(deleteResult, deleteResult.GetErrorMessage(), code);
        }
    }
}