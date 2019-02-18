import { Xhr } from '../common/xhr';


interface IModalOptions
{
    backdrop: boolean;
    keyboard: boolean;
    focus: boolean;
    show: boolean;
}

export class ModalService
{
    private modal: JQuery;

    private container: JQuery;

    private readonly options: IModalOptions = {
        backdrop: true,
        keyboard: false,
        focus: true,
        show: false
    }

    constructor(modalId: string)
    {
        this.modal = $(`#${modalId}`);
        (this.modal as any).modal(this.options);
        this.container = this.modal.find('.modal-body');
    }

    public showPage(url: string = null): void
    {
        this.showPageInternal(url, "True");
    }

    public closePage(): void
    {
        (this.modal as any).modal('hide');
    }

    public registerButton(buttonId: string)
    {
        var button = $(`#${buttonId}`);
        var url = button.attr('url');
        var isActionlink = button.attr('isActionlink');

        button.on('click',
            e =>
            {
                this.showPageInternal(url, isActionlink);
            });
    }

    private showPageInternal(url: string, isActionlink: string): void
    {
        if (isActionlink === 'True')
        {
            if (url)
            {
                this.loadContent(url);
            }

            this.show();
            
        } else
        {
            this.closePage();
        }
    }

    private show(): void
    {
        (this.modal as any).modal('show');
        (this.modal as any).modal('handleUpdate');
    }

    private loadContent(url: string)
    {
        Xhr.requestHtml("GET",
            url,
            {},
            response =>
            {
                this.container.empty();
                this.container.html(response);
            });
    }
}