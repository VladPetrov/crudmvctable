import { TableService } from "./filtersCommon";
import { IRangeFilterCreator } from './filtersCommon';
import { StringConstant } from "../../common";
import { Options } from 'daterangepicker';
import * as moment from 'moment';
import { TableFilter } from '../tableServiceCommon';
import { getFilterFieldId } from "./common";

export class DateRangeCreator //implements IRangeFilterCreator
{
    public static registerFilters(service: TableService): void
    {
        const inputs$ = $(`#${service.containerName} .dateRangeFilter`);

        for (var i = 0; i < inputs$.length; i++)
        {
            this.register(inputs$[i], service);
        }
    }

    private static register(input: HTMLElement, service: TableService): void
    {
        const input$ = $(input);
        const fieldId = getFilterFieldId(input$);
        const startDateValue: string = input$.data('filter-start-value');
        const endDateValue: string = input$.data('filter-end-value');

        let start: moment.Moment | null = null;
        let end: moment.Moment | null = null;

        if (startDateValue && endDateValue)
        {
            start = moment(startDateValue, StringConstant.dateFormat);
            end = moment(endDateValue, StringConstant.dateFormat);

            input$.val(startDateValue + ' - ' + endDateValue);

            this.updateFilters(service, fieldId, startDateValue, endDateValue);
        }
        else
        {
            start = moment().subtract(29, 'days');
            end = moment();
        }

        let options = this.createOptions(start, end);

        input$.prop('readonly', true);
        input$.css({ "min-width": "175px" });

        input$.daterangepicker(options);

        input$.on('apply.daterangepicker',
            (ev, picker) =>
            {
                const startDate = picker.startDate.format(StringConstant.dateFormat);
                const endDate = picker.endDate.format(StringConstant.dateFormat);

                input$.val(startDate + ' - ' + endDate);

                this.updateFilters(service, fieldId, startDate, endDate);
                service.filterData();
            });

        input$.on('cancel.daterangepicker',
            (ev, picker) =>
            {
                input$.val('');
                service.removeFilter(fieldId);
                service.filterData();
            });
    }

    private static updateFilters(service: TableService, fieldId: string, start: string, end: string): void
    {
        service.upsertFilter(TableFilter.startDateFilter(fieldId, start));
        service.upsertFilter(TableFilter.endDateFilter(fieldId, end));
    }

    private static createOptions(start?: moment.Moment, end?: moment.Moment): Options
    {
        const options: Options = {
            startDate: start,
            endDate: end,
            autoUpdateInput: false,
            ranges: {
                'Today': [moment(), moment()],
                'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                'Last 30 Days': [moment().subtract(29, 'days'), moment()],
                'This Month': [moment().startOf('month'), moment().endOf('month')],
                'Last Month': [
                    moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')
                ]
            },

            buttonClasses: ['m-btn btn'],
            applyButtonClasses: 'btn-primary',
            cancelButtonClasses: 'btn-secondary',
            locale: {
                format: StringConstant.dateFormat,
                cancelLabel: 'Clear'
            }
        };

        return options;
    }
}