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

        Xhr.requestJson('POST',
            this.url,
            request,
            response =>
            {
                
            });                
    }

    private createRequest(): ExportRequest
    {
        return {
            ids: this.ids
        };
    }
}