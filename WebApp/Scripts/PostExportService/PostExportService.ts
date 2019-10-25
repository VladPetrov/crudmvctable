import { TableService } from "../TableService/tableService";
import { Subscription } from "rxjs";


class ExportRequest
{
    public ids: (number|string)[] = [];
}

export class PostExportService
{
    private static _instance: PostExportService;

    public static instance(service: TableService, url: string): PostExportService
    {
        if (this._instance)
        {
            this._instance.subscription.unsubscribe();
        }

        this._instance = new PostExportService(service, url);

        return this._instance;
    }

    private readonly $editButton: JQuery<HTMLElement>;

    private readonly tableService: TableService;

    private readonly url: string;
    
    private readonly editButtonClass: string = "exportPost";

    private subscription: Subscription;

    private ids: (number|string)[] = [];

    constructor(service: TableService, url: string)
    {
        this.tableService = service;
        this.$editButton = $(`#${this.tableService.containerName} .${this.editButtonClass}`);
        this.$editButton.prop("disabled", true);
        this.url = url;
        
        this.subscription = service.rowsSelectManager.onSelectedRows.subscribe(ids =>
        {
            this.ids = ids;

            if (this.ids && this.ids.length)
            {
                this.$editButton.prop("disabled", false);
            } else
            {
                this.$editButton.prop("disabled", true);
            }
        });

        this.$editButton.click(e =>
        {
            this.doExport();
        });
    }

    private doExport(): void
    {
        if (!(this.ids && this.ids.length))
        {
            return;
        }

        this.sendRequest();
    }

    private sendRequest(): void
    {
        const request = this.createRequest();
         
        const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() 
        {
            let filename = "export.pdf";
            let disposition = xhttp.getResponseHeader('Content-Disposition');

            if (disposition && disposition.indexOf('attachment') !== -1) 
            {
                var filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
                var matches = filenameRegex.exec(disposition);
                if (matches != null && matches[1]) 
                {
                    filename = matches[1].replace(/['"]/g, '');
                }
            }
                        
            if (xhttp.readyState === 4 && xhttp.status === 200) 
            {
                const downloadUrl = window.URL.createObjectURL(xhttp.response);
                let a = document.createElement('a');
                a.href = downloadUrl;
                a.download = filename;
                a.style.display = 'none';
                document.body.appendChild(a);
                a.click();

                setTimeout(function () 
                { 
                    URL.revokeObjectURL(downloadUrl);
                    document.body.removeChild(a);
                }, 100); // cleanup
            }
        };
        
        xhttp.open("POST", this.url);
        xhttp.setRequestHeader("Content-Type", "application/json");
        
        xhttp.responseType = 'blob';
        xhttp.send(JSON.stringify(request));
    } 
  

    private createRequest(): ExportRequest
    {
        return {
            ids: this.ids
        };
    }
}