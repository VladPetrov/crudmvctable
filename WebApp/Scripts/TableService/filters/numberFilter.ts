import { TableService } from "./filtersCommon";
import { TableFilter } from "../tableServiceCommon";
import { getFilterValue, getFilterFieldId } from "./common";


export class NumberFilterCreator //implements ITableFilterCreator
{
    public static registerFilters(service: TableService): void
    {
        const inputs$ = $(`#${service.containerName} .numberFilter`);

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
            const filter = TableFilter.numberFilter(fieldId, value);
            service.upsertFilter(filter);
            input$.val(value);
        }

        (input$ as any).clearSearch(() =>
        {
            service.removeFilter(fieldId);
            service.filterData();
        });

        input$.on('keyup',
            e =>
            {
                if (e.which === 13)
                {
                    const filter = TableFilter.numberFilter(fieldId, input$.val().toString());
                    service.upsertFilter(filter);
                    service.filterData();
                }
            });
    }
}