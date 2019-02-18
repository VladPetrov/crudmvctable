import { TableService } from "../tableService";

export interface ITableFilterCreator
{
    registerFilter(service: TableService, inputId: string, fieldId: string, value: string): void
}

export interface IRangeFilterCreator
{
    registerFilter(service: TableService, inputId: string, fieldId: string, startDateValue: string, endDateValue: string): void
}

export { TableService};