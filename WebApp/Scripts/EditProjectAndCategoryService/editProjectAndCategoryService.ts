import { TableService } from "../TableService/tableService";
import { Subscription } from "rxjs";
import { ModalService } from "../modalService/modalService";
import { Xhr } from "../common";

class EditRequest
{
    public transactionIds: number[] = [];
    public projectId: string;
    public categoryId: string;
}

export class EditProjectAndCategoryService
{
    private static instance: EditProjectAndCategoryService;

    public static getInstance(service: TableService, url: string): EditProjectAndCategoryService
    {
        if (this.instance)
        {
            this.instance.subscription.unsubscribe();
        }

        this.instance = new EditProjectAndCategoryService(service, url);

        return this.instance;
    }

    private readonly $editButton: JQuery<HTMLElement>;

    private readonly modalService: ModalService;

    private readonly tableService: TableService;

    private readonly url: string;

    private readonly editViewId: string = "projectAndCategoryEditView";

    private readonly editButtonClass: string = "editProjectAndCategory";

    private subscription: Subscription;

    private ids: number[] = [];

    constructor(service: TableService, url: string)
    {
        this.tableService = service;
        this.$editButton = $(`#${this.tableService.containerName} .${this.editButtonClass}`);
        this.$editButton.prop("disabled", true);
        this.modalService = new ModalService(this.editViewId);
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
            this.doEdit();
        });

        this.formListening();
    }

    private doEdit(): void
    {
        if (!(this.ids && this.ids.length))
        {
            return;
        }

        this.modalService.showPage();
    }

    private formListening(): void
    {
        $(`#${this.editViewId} form`).on('submit',
            (event: Event) =>
            {
                event.preventDefault();

                const request = this.createRequest($(<any>event.currentTarget));

                Xhr.requestJson('POST',
                    this.url,
                    request,
                    response =>
                    {
                        this.modalService.closePage();
                        this.tableService.refresh();
                    });
            });
    }

    private createRequest($form: JQuery): EditRequest
    {
        const formValues = $form.serializeArray();

        return {
            transactionIds: this.ids,
            projectId: this.getFormVal(formValues, "ProjectId"),
            categoryId: this.getFormVal(formValues, "CategoryId")
        };
    }

    private getFormVal(formValues: JQuery.NameValuePair[], name: string): string
    {
        const val = formValues.find(x => x.name === name).value;

        if (!val)
        {
            return '0';
        }

        return val;
    }
}