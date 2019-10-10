import { OrderDirection } from '../tableServiceCommon';
import { TableService } from './sortCommon';
import { TableOrder } from '../tableServiceCommon';
import { SortInfo } from '../tableServiceCommon';
import { getFilterFieldId } from "../filters/common";

export class SortCreator
{
    public static ascClass: string = 'ascSort';
    public static descClass: string = 'descSort';

    public static registerSorts(service: TableService)
    {
        const labels$ = $(`#${service.containerName} .tableSort`);

        for (var i = 0; i < labels$.length; i++)
        {
            this.registerSort(labels$[i], service);
        }
    }

    private static registerSort(label: HTMLElement, service: TableService): void
    {
        const lable$ = $(label);
        const fieldId = getFilterFieldId(lable$);
        const direction = this.getDirection(lable$);

        const sort = new TableOrder(fieldId);
        
        lable$.css('cursor', 'pointer');
        lable$.wrap(`<div class='noselect' style='cursor: pointer; display: flex'></div>`);
        lable$.after(`<div arrowPalceholder style="margin-left: 5px"></div>`);

        const container$ = lable$.parent();
        const arrowContainer$ = container$.children('[arrowPalceholder]');

        if (direction)
        {
            const cssClass: string = direction === OrderDirection.Asc ? SortCreator.ascClass : SortCreator.descClass;
            arrowContainer$.addClass(cssClass);
        }

        this.register(fieldId, arrowContainer$, service);

        container$.on('click',
            e =>
            {
                if (arrowContainer$.hasClass(SortCreator.ascClass))
                {
                    arrowContainer$.removeClass(SortCreator.ascClass);
                    arrowContainer$.addClass(SortCreator.descClass);

                    sort.direction = OrderDirection.Desc;
                }
                else if (arrowContainer$.hasClass(SortCreator.descClass))
                {
                    arrowContainer$.removeClass(SortCreator.descClass);
                    arrowContainer$.addClass(SortCreator.ascClass);

                    sort.direction = OrderDirection.Asc;
                }
                else
                {
                    arrowContainer$.addClass(SortCreator.descClass);

                    sort.direction = OrderDirection.Desc;
                }

                service.upsertSort(sort);

                service.filterData();
            });
    }

    private static register(fieldId: string, arrowContainer: JQuery, service: TableService): void
    {
        const resetCallback = () =>
        {
            if (arrowContainer.hasClass(SortCreator.ascClass))
            {
                arrowContainer.removeClass(SortCreator.ascClass);
            }

            if (arrowContainer.hasClass(SortCreator.descClass))
            {
                arrowContainer.removeClass(SortCreator.descClass);
            }
        };

        const info: SortInfo = {
            fieldId: fieldId,
            callBack: resetCallback
        };

        service.registerSort(info);
    }

    private static getDirection(label$:JQuery): OrderDirection | null
    {
        return label$.data("sort-direction");
    }
}