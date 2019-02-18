import { Subject } from 'rxjs';
import * as $ from "jquery";

export class CheckBoxContainer
{
    private checkBox: HTMLInputElement;

    private changeAction: () => void;

    constructor(checkBox: HTMLInputElement, changeAction: () => void)
    {
        this.checkBox = checkBox;

        this.changeAction = changeAction;

        $(checkBox).change(e =>
        {
            this.changeAction();
        });
    }

    public set(): void
    {
        this.checkBox.checked = true;
    }

    public reset(): void
    {
        this.checkBox.checked = false;
    }

    public isSelected()
    {
        return this.checkBox.checked;
    }

    public getRowId(): number
    {
        return $(this.checkBox).closest('tr').data('id');
    }
}

export class RowsSelectManager
{
    public onSelectedRows: Subject<number[]> = new Subject();

    private containers: CheckBoxContainer[] = [];

    private doEmit: boolean = true;

    constructor(containerSelector: string)
    {
        let checkBoxes: JQuery<HTMLInputElement> = $(`#${containerSelector} .row-select`);

        for (var i = 0; i < checkBoxes.length; i++)
        {
            this.containers.push(new CheckBoxContainer(checkBoxes[i], () => this.changeAction()));
        }

        $(`#${containerSelector} .tableSelectAll`).on('click',
            (event: Event) =>
            {
                event.preventDefault();
                this.selectAll();
            });

        $(`#${containerSelector} .tableDeselectAll`).on('click',
            (event: Event) =>
            {
                event.preventDefault();
                this.resetAll();
            });
    }

    private selectAll(): void
    {
        this.doEmit = false;
        this.containers.forEach(x => x.set());
        this.doEmit = true;
        this.changeAction();
    }

    private resetAll(): void
    {
        this.doEmit = false;
        this.containers.forEach(x => x.reset());
        this.doEmit = true;
        this.changeAction();
    }

    private changeAction()
    {
        if (this.doEmit)
        {
            const ids: number[] = this.containers.filter(x => x.isSelected()).map(x => x.getRowId());
            this.onSelectedRows.next(ids);
        }
    }
}