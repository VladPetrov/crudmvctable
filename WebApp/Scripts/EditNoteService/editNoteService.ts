import * as $ from "jquery";
import { TableService } from "../TableService/tableService";
import { ModalService } from "../modalService/modalService";
import { Popover, Xhr } from "../common";

export class EditNoteService
{
    private readonly modalId = 'edit-note';
    private readonly noteInputName = 'note';

    private readonly editNoteLink: string;
    private readonly tableService:TableService;

    private popover: Popover;

    private modalService: ModalService;
    private transactionId: number;

    constructor(editNoteLink: string, tableService: TableService)
    {
        this.editNoteLink = editNoteLink;
        this.tableService = tableService;
    }

    public startListening(): void
    {
        this.formListening();

        this.modalService = new ModalService(this.modalId);

        const $container = $(`#${this.tableService.containerName} .custom-popover.note`);
        this.popover = new Popover($container);

        this.popover.startListening(($target: JQuery<EventTarget>) =>
        {
            const $template = Popover.templateEditIcon();

            $template.on('click', (event: Event) =>
            {
                const $target = $(<any>event.currentTarget);
                const text = $target.parent().text();
                const $find = $target.closest('tr');
                this.transactionId = $find.data('id');

                this.modalService.showPage();

                const $noteInput = $(`#${this.modalId} textarea[name='${this.noteInputName}']`);
                $noteInput.val(text);
            });
            
            this.popover.showTemplate($target, $template);
        });
    }

    private formListening(): void
    {
        $(`#${this.modalId} form`).on('submit', (event: Event) =>
        {
            event.preventDefault();

            const $target = $(<any>event.currentTarget);
            const formValues = $target.serializeArray();
            const note = formValues.find(x => x.name === this.noteInputName);

            if (note)
            {
                const request = {
                    transactionId: this.transactionId,
                    note: note.value
                };

                Xhr.requestJson('POST', this.editNoteLink, request, response =>
                {
                    this.modalService.closePage();

                    this.tableService.refresh();
                });
            }
        });
    }
}