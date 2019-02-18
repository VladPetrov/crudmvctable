import { TableService } from "../TableService/tableService";
import { Xhr } from "../common";


export class DragAndDropFileUploader
{
    private service: TableService;
    private postUrl: string;

    constructor(postUrl: string, service: TableService)
    {
        this.service = service;
        this.postUrl = postUrl;

        $("html").on("dragover",
            function(event)
            {
                event.preventDefault();
                event.stopPropagation();
                $(this).addClass('dragging');
            });

        $("html").on("dragleave",
            function(event)
            {
                event.preventDefault();
                event.stopPropagation();
                $(this).removeClass('dragging');
            });

        $("html").on("drop",
            event =>
            {
                event.preventDefault();
                event.stopPropagation();
            });
    }

    public startListening()
    {
        const inputs$ = $(`#${this.service.containerName} tr`);

        for (var i = 0; i < inputs$.length; i++)
        {
            this.register(inputs$[i]);
        }
    }

    private register(row: HTMLElement)
    {
        const row$ = $(row);

        row$.on('dragover', false)
            .on('drop',
                event =>
                {
                    const idVal = row$.data("id");

                    if (idVal)
                    {
                        event.preventDefault();

                        var files = (event.originalEvent as any).dataTransfer.files;

                        var formData = new FormData();
                        formData.append('files', files[0]);
                        formData.append('transactionId', idVal); //todo hardcoded val

                        this.sendData(formData);
                    }                
                });
    }

    //private sendData(formData: FormData): void
    //{
    //    Xhr.request("POST", this.postUrl, "json", formData, () => this.service.refresh());
    //}

    private sendData(formData: FormData): void
    {
        $.ajax({
            url: this.postUrl,
            type: "POST",
            data: formData as any,
            cache: false,
            contentType: false,
            processData: false,
            success: e =>
            {
                this.service.refresh();
            },
            error: e =>
            {
                console.log(e);
            }
        });
    }
}