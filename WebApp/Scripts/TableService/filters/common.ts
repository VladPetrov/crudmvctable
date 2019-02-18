import * as $ from "jquery";

export const filterValueAttribute = 'filter-value';
export const filterFieldIdAttribute = 'field-id';

export function getFilterValue(input$: JQuery<HTMLElement>):any
{
    return input$.data(filterValueAttribute);
}

export function getFilterFieldId(input$: JQuery<HTMLElement>):any
{
    return input$.data(filterFieldIdAttribute);
}