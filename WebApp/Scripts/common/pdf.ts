import * as pdfjslib from 'pdfjs-dist';
import { PDFJSStatic } from 'pdfjs-dist';
const PDFJS = (<any>pdfjslib) as PDFJSStatic;

PDFJS.disableWorker = true;
// TODO: url
PDFJS['GlobalWorkerOptions'].workerSrc = '/lib/pdf-js/pdf.worker.min.js';

export class Pdf
{
    public static convertPdfToImgBase64(documentLink: string): Promise<string | null>
    {
        return new Promise(resolve =>
        {
            PDFJS.getDocument(documentLink).then(pdf =>
            {
                pdf.getPage(1).then((page) =>
                {
                    const scale = 1.5;
                    const viewport = page.getViewport(scale);

                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');
                    canvas.height = viewport.height;
                    canvas.width = viewport.width;

                    const renderContext = {
                        canvasContext: ctx,
                        viewport: viewport
                    };

                    page.render(renderContext).then(() =>
                    {
                        ctx.globalCompositeOperation = 'destination-over';
                        ctx.fillStyle = '#fff';
                        ctx.fillRect(0, 0, canvas.width, canvas.height);
                        const imgSrc = canvas.toDataURL();
                        canvas.remove();

                        resolve(imgSrc);
                    });
                });
            }, (error: any) => {
                if (error && 'status' in error && error.status === 400)
                {
                    resolve(null);
                }
            });
        });
    }
}