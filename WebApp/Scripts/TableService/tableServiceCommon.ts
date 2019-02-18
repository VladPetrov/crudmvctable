

export type TableColumnType = 'string' | 'boolean' | 'date' | 'number' | 'enum' | 'currency';

export enum TableFilterOperator
{
    Equal = 0,
    NotEqual = 1,
    StartsWith = 2,
    Contains = 3,
    DoesNotContain = 4,
    EndsWith = 5,
    GreaterThanOrEqual = 6,
    GreaterThan = 7,
    LessThanOrEqual = 8,
    LessThan = 9
}

export class TableFilter
{
    public group: string;
    public encrypted: boolean = false;
    public fieldId: string;
    public type: TableColumnType;
    public value: any;
    public operator: TableFilterOperator = TableFilterOperator.Equal;

    constructor(fieldId: string,
        type: TableColumnType,
        value?: any,
        operator: TableFilterOperator = TableFilterOperator.Equal)
    {
        this.fieldId = fieldId;
        this.type = type;
        this.value = value;
        this.operator = operator;
    }

    public toJSON(): any
    {
        return {
            group: this.group,
            encrypted: this.encrypted,
            fieldId: this.fieldId,
            type: this.type,
            value: this.value,
            operator: this.operator
        };
    }

    public static stringFilter(filedId: string, val: string): TableFilter
    {
        return new TableFilter(filedId, 'string', val.trim(), TableFilterOperator.Contains);
    }

    public static boolFilter(filedId: string, val: string): TableFilter
    {
        return new TableFilter(filedId, 'boolean', val);
    }

    public static enumFilter(filedId: string, val: string): TableFilter
    {
        return new TableFilter(filedId, 'enum', val);
    }

    public static numberFilter(filedId: string, val: string): TableFilter
    {
        return new TableFilter(filedId, 'number', val);
    }

    public static dateFilter(filedId: string, val: string, operator: TableFilterOperator = TableFilterOperator.Equal):
        TableFilter
    {
        return new TableFilter(filedId, 'date', val, operator);
    }

    public static startDateFilter(filedId: string, val: string): TableFilter
    {
        const filter = TableFilter.dateFilter(filedId, val, TableFilterOperator.GreaterThanOrEqual);
        filter.group = createStartDateFilterGroup(filedId);
        return filter;
    }

    public static endDateFilter(filedId: string, val: string): TableFilter
    {
        const filter = TableFilter.dateFilter(filedId, val, TableFilterOperator.LessThanOrEqual);
        filter.group = createEndDateFilterGroup(filedId);
        return filter;
    }
}

export enum OrderDirection
{
    Asc = 1,
    Desc = 2
}

export class TableOrder
{
    public fieldId: string;
    public direction?: OrderDirection;

    constructor(fieldId: string)
    {
        this.fieldId = fieldId;
    }
}

export class TableRequest
{
    public filters: TableFilter[] = [];

    public orders: TableOrder[] = [];

    public itemsPerPage: number;
}

export class SortInfo
{
    public fieldId: string;
    public callBack: () => void;
}

const dateRangeFilterStartDateName: string = "startFilter";
const dateRangeFilterEndDateName: string = "endFilter";

function createStartDateFilterGroup(fieldId: string)
{
    return `${fieldId}_${dateRangeFilterStartDateName}`;
}

function createEndDateFilterGroup(fieldId: string)
{
    return `${fieldId}_${dateRangeFilterEndDateName}`;
}