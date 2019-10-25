import { TableService } from "../TableService/tableService";
import { Subscription } from "rxjs";
import { Xhr } from "../common";

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

        // Xhr.requestJson('POST',
        //     this.url,
        //     request,
        //     response =>
        //     {
                
        //     });   
        $.ajax({
            type: "POST",
            url: this.url,
            data: JSON.stringify(request),
            contentType: "application/json; charset=utf-8",
            error: function(request, status, error){console.log(error)},
            success: function(response, status, xhr) {
                // check for a filename
                var filename = "";
                var disposition = xhr.getResponseHeader('Content-Disposition');
                if (disposition && disposition.indexOf('attachment') !== -1) {
                    var filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
                    var matches = filenameRegex.exec(disposition);
                    if (matches != null && matches[1]) filename = matches[1].replace(/['"]/g, '');
                }
        
                var type = xhr.getResponseHeader('Content-Type');
                var blob = new Blob([response], { type: type });
        
                if (typeof window.navigator.msSaveBlob !== 'undefined') {
                    // IE workaround for "HTML7007: One or more blob URLs were revoked by closing the blob for which they were created. These URLs will no longer resolve as the data backing the URL has been freed."
                    window.navigator.msSaveBlob(blob, filename);
                } else {
                    var URL = window.URL || (window as any).webkitURL;
                    var downloadUrl = URL.createObjectURL(blob);
        
                    if (filename) {
                        // use HTML5 a[download] attribute to specify filename
                        var a = document.createElement("a");
                        // safari doesn't support this yet
                        if (typeof a.download === 'undefined') {
                            window.location = downloadUrl;
                        } else {
                            a.href = downloadUrl;
                            a.download = filename;
                            document.body.appendChild(a);
                            a.click();
                        }
                    } else {
                        window.location = downloadUrl;
                    }
        
                    setTimeout(function () { URL.revokeObjectURL(downloadUrl); }, 100); // cleanup
                }
            }
        });             
    }

    private createRequest(): ExportRequest
    {
        return {
            ids: this.ids
        };
    }
}