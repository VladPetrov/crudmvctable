﻿import { ITableFilterCreator, TableService } from "./filtersCommon";
import { TableFilter, TableFilterOperator } from "../tableServiceCommon";
import { getFilterValue, getFilterFieldId } from "./common";


export class ValueObjectFilterCreator //implements ITableFilterCreator
{
    public static registerFilters(service: TableService): void
    {
        const inputs$ = $(`#${service.containerName} .valueObjectFilter`);

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
            const filter = this.getFilter(fieldId, value.toString());
            service.upsertFilter(filter);
            input$.val(value);
        }

        input$.change(e =>
        {
            const val = input$.find(":selected").val();

            if (val)
            {
                const filter = this.getFilter(fieldId, val.toString());
                service.upsertFilter(filter);
            }
            else
            {
                service.removeFilter(fieldId);
            }

            service.filterData();
        });
    }

    private static getFilter(fieldId: string, val: string): TableFilter
    {
        if (val.match(/[a-zA-Z]/)) //if id is guid or str
        {
            return  new TableFilter(fieldId, 'string', val.trim(), TableFilterOperator.Equal);
        }
        else
        {
            return TableFilter.numberFilter(fieldId, val);
        }
    }
}