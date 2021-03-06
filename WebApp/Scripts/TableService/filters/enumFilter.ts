﻿import { ITableFilterCreator, TableService } from "./filtersCommon";
import { TableFilter } from "../tableServiceCommon";
import { getFilterValue, getFilterFieldId } from "./common";

export class EnumFilterCreator //implements ITableFilterCreator
{
    public static registerFilters(service: TableService): void
    {
        const inputs$ = $(`#${service.containerName} .enumFilter`);

        for (var i = 0; i < inputs$.length; i++)
        {
            this.register(inputs$[i], service);
        }
    }

    private static register(input: HTMLElement, service: TableService): void
    {
        const input$ = $(input);
        const value = getFilterValue(input$);
        const fieldId = getFilterFieldId(input$);

        if (value != null)
        {
            const filter = TableFilter.enumFilter(fieldId, value);
            service.upsertFilter(filter);
            input$.val(value);
        }

        input$.change(e =>
        {
            const val = input$.find(":selected").val();

            if (val)
            {
                const filter = TableFilter.enumFilter(fieldId, val.toString());
                service.upsertFilter(filter);
            }
            else
            {
                service.removeFilter(fieldId);
            }

            service.filterData();
        });
    }
}