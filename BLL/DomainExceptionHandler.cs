using System;
using Common.Exceptions;
using Domain;
using Microsoft.EntityFrameworkCore;

namespace BLL
{
    public static class DomainExceptionHandler
    {
        public static OperationResult Handle(Exception e)
        {
            OperationResult result;

            switch (e)
            {
                case EntityNotFoundException notFound:
                    result = OperationResult.Error(notFound.Message, OperationCode.NotFound);
                    break;
                case DbUpdateConcurrencyException updateException:
                    result = OperationResult.Error("Data was deleted by another user", OperationCode.DataWasEditedByEnotherUser);
                    break;
                default:
                    result = OperationResult.UnhandledError(e);
                    break;
            }

            return result;
        }
    }
}
