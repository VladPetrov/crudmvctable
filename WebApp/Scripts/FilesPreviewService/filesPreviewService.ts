//import { Pdf, Popover } from '../common';
//import * as $ from "jquery";

//export class FilesPreviewService
//{
//    private popover: Popover;

//    constructor(
//        private readonly tableContainerId: string,
//        private readonly fileLink: string,
//        private readonly documentLink: string
//    ) {}

//    public startListening(): void
//    {
//        const container = $(`#${this.tableContainerId} .custom-popover.preview`);
//        this.popover = new Popover(container);

//        this.popover.startListening(($target: JQuery<EventTarget>) =>
//        {
//            const fileId = $target.data('file-id');
//            const fileDownloadLink = this.fileLink + `/${fileId}`;

//            this.popover.showTemplate($target, Popover.templatePreview(fileDownloadLink));

//            const documentLink = this.documentLink + `/${fileId}`;

//            Pdf.convertPdfToImgBase64(documentLink).then(imgBase64 =>
//            {
//                if (imgBase64 !== null)
//                {
//                    $target.find('.img').html(`<img/>`);
//                    $target.find('img').attr('src', imgBase64);
//                }
//                else
//                {
//                    console.log('null');
//                }
//            });
//        });
//    }
//}