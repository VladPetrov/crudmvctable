import { Subject } from 'rxjs';
import {
    TableFilter,
    TableOrder,
    TableRequest,
    SortInfo
} from './tableServiceCommon';
import {
    StringFilterCreator,
    EnumFilterCreator,
    ValueObjectFilterCreator,
    NumberFilterCreator,
    BoolFilterCreator,
    DateRangeCreator
} from './filters';
import { extendClearSearch } from './clearSearch';
import { Xhr, SingleToneBase } from '../common';
import { SortCreator } from './sort/sortCreator';
import { RowsSelectManager } from './rowsSelect/rowsSelect';

extendClearSearch();

export class TableService extends SingleToneBase
{
    public onFilterTable: Subject<TableRequest> = new Subject();

    public containerName: string;

    private filterUrl: string;

    private refreshUrl: string;

    private itemsPerPage: number;

    private filters: TableFilter[] = [];

    private sorts: TableOrder[] = [];

    private sortsInfo: SortInfo[] = [];

    public rowsSelectManager: RowsSelectManager;

    constructor(containerName: string, url: string, refreshUrl: string, itemsPerPage: number)
    {
        super();
        this.containerName = containerName;
        this.filterUrl = url;
        this.refreshUrl = refreshUrl;
        this.itemsPerPage = itemsPerPage;
    }

    public startListeningToEvents(): void
    {
        StringFilterCreator.registerFilters(this);
        NumberFilterCreator.registerFilters(this);
        DateRangeCreator.registerFilters(this);
        ValueObjectFilterCreator.registerFilters(this);
        BoolFilterCreator.registerFilters(this);
        EnumFilterCreator.registerFilters(this);

        SortCreator.registerSorts(this);

        this.rowsSelectManager = new RowsSelectManager(this.containerName);
    }

    public refresh(): void
    {
        Xhr.requestHtml("GET", this.refreshUrl, {}, response => this.processResponse(response, null));
    }

    public upsertFilter(filter: TableFilter): void
    {
        var index = this.filterIndex(filter.fieldId, filter.group);

        if (index < 0 && filter.value)
        {
            this.filters.push(filter);
        } else if (index >= 0)
        {
            if (filter.value)
            {
                this.filters.splice(index, 1, filter);
            } else
            {
                this.filters.splice(index);
            }
        }
    }

    public removeFilter(field: string)
    {
        let index: number;

        while ((index = this.filterIndex(field)) >= 0)
        {
            this.filters.splice(index);
        }
    }

    public registerSort(info: SortInfo)
    {
        this.sortsInfo.push(info);
    }

    public upsertSort(sort: TableOrder): void
    {
        this.sorts.length = 0;

        if (sort.direction)
        {
            this.sorts.push(sort);
        }

        this.sortsInfo.filter(x => x.fieldId !== sort.fieldId).forEach(x => x.callBack());
    }

    public filterData(): void
    {
        const request = this.getTableRequest();

        Xhr.requestHtml("POST", this.filterUrl, request, response => this.processResponse(response, request));
    }

    private getTableRequest(): TableRequest
    {
        const filters = this.filters.filter(x => x.value);
        const orders = this.sorts.filter(x => x.direction);

        return {
            filters: filters,
            orders: orders,
            itemsPerPage: this.itemsPerPage
        };
    }

    private processResponse(response: any, request: TableRequest = null)
    {
        if (request)
        {
            this.onFilterTable.next(request);
        }

        this.resetService();

        $(`#${this.containerName}`).html(response);
    }

    private resetService(): void
    {
        //this.filters = [];
        //this.sorts = [];
        this.sortsInfo = [];
        //this.onFilterTable.complete();
    }

    private filterIndex(field: string, groupName: string = null): number
    {
        const existingFilter =
            this.filters.find(x => x.fieldId === field && (groupName == null || x.group === groupName));

        if (!existingFilter)
        {
            return -1;
        }

        return this.filters.indexOf(existingFilter);
    }
}