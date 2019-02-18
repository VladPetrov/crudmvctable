import { TableService } from "./filtersCommon";
import { TableFilter } from "../tableServiceCommon";
import { getFilterValue, getFilterFieldId } from "./common";

export class StringFilterCreator //implements ITableFilterCreator
{
    public static registerFilters(service: TableService): void
    {
        const inputs$ = $(`#${service.containerName} .stringFilter`);

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
            const filter = TableFilter.stringFilter(fieldId, value);
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
                    const filter = TableFilter.stringFilter(fieldId, input$.val().toString().replace('\\', ''));
                    service.upsertFilter(filter);
                    service.filterData();
                }
            });
    }
}