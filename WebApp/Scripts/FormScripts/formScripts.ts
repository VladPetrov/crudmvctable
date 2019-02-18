import * as $ from "jquery";

$.noConflict();

export class FormScripts
{
    constructor(private selector: string){}

    public run(): void
    {
        const $form = $(`#${this.selector}`).closest("form");

        this.setDatePicker($form);
    }

    private setDatePicker($form:JQuery):void
    {
        this.setDatePickerForInputs($form.find('input[type=datetime]'));
        this.setDatePickerForInputs($form.find('input[type=datetime-local]'));
    }

    private setDatePickerForInputs($inputs: JQuery): void
    {
        console.log($inputs[0]);

        $inputs.datepicker({
            todayHighlight: true,
            orientation: "bottom left",
            templates: {
                leftArrow: '<i class="la la-angle-left"></i>',
                rightArrow: '<i class="la la-angle-right"></i>'
            }
        });
    }
}