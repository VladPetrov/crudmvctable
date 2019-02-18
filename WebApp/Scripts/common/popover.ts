import * as $ from "jquery";

export class Popover
{
    private $targets: JQuery<EventTarget>[] = [];

    public static templatePreview(fileDownloadLink: string): string
    {
        return `
            <div class="content preview">
                <div class="img"></div>
                <div class="buttons">
                    <a role="button" class="btn btn-outline-primary btn-sm" href="${fileDownloadLink}">Download</a>
                </div>
            </div>
        `;
    }

    public static templateEditIcon(): JQuery<HTMLElement>
    {
        return $(`<div class="content edit-note"><i class="flaticon-edit-1"></i></div>`);
    }

    constructor(private readonly container: JQuery<HTMLElement>) {}

    public startListening(callback?: ($target: JQuery<EventTarget>) => void): void
    {
        this.container.on('mouseenter', (event: Event) =>
        {
            const $target = $(<any>event.currentTarget);

            this.$targets.push($target);

            if (callback)
            {
                callback($target);
            }
        });

        this.container.on('mouseleave', () =>
        {
            this.closeTemplate();
        });
    }

    public showTemplate($target: JQuery<EventTarget>, template: string | JQuery<HTMLElement>): void
    {
        $target
            .append(template)
            .children(':last')
            .hide()
            .fadeIn(200);
    }

    private closeTemplate(): void
    {
        this.$targets.forEach($target =>
        {
            $target.children(':last').fadeOut(200, function(this: any)
            {
                $(this).remove();
            });
        });

        this.$targets = [];
    }
}
