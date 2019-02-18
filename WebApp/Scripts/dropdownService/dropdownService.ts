import { Xhr } from '../common/xhr';


class DropdownListItem
{
    public id: number;
    public name: string;
}

export class DropdownService
{
    private readonly url: string;

    public constructor(url: string)
    {
        this.url = url;
    }

    public listen(mainDropdownSelector: string, childDropdownSelector: string): void
    {
        const mainDropdown: JQuery<HTMLElement> = $(`#${mainDropdownSelector}`);
        const childDropdown: JQuery<HTMLElement> = $(`#${childDropdownSelector}`);

        if (this.getSelectedOptionValue(mainDropdown))
        {
            this.render(mainDropdown, childDropdown);
        }

        mainDropdown.on("change", (event: any) => this.render(mainDropdown, childDropdown));
    }

    private render(mainDropdown: JQuery<HTMLElement>, childDropdown: JQuery<HTMLElement>): void
    {
        const mainSelectedId: number = this.getSelectedOptionValue(mainDropdown);
        
        Xhr.requestJson("POST", `${this.url}/${mainSelectedId}`, {}, (items: DropdownListItem[]) => this.populateDropdown(childDropdown, items));
    }

    private populateDropdown(dropdown: JQuery<HTMLElement>, items: DropdownListItem[]): void
    {
        const id: number = this.getSelectedOptionValue(dropdown);

        dropdown.empty();

        dropdown.append(this.createEmptyOption());

        items.forEach((x: DropdownListItem) =>
        {
            var selected: boolean = x.id == id; // yes I need ==!!

            dropdown.append(this.createOption(x.name, x.id, selected));
        });
    }

    private getSelectedOptionValue(dropdown: JQuery<HTMLElement>): number
    {
        return dropdown.val() as number;
    }

    private createEmptyOption(): JQuery<HTMLElement>
    {
        const option: JQuery<HTMLElement> = $("<option></option>").attr("value", "").text("--Select Value--"); //todo use value from string constants

        return option;
    }

    private createOption(text: string, value: number, selected: boolean = false): JQuery<HTMLElement>
    {
        const option: JQuery<HTMLElement> = $("<option></option>").attr("value", value).text(text);

        if (selected)
        {
            option.attr("selected", "selected");
        }

        return option;
    }
}