export class ClearSearch
{
    public static register(input: HTMLElement, callback: () => void): void {
        const clearClass: string = 'clear_input';
        const focusAfterClear: boolean = true;
        const linkText: string = '&times;';

        const divClass = clearClass + '_div';
        var $this = $(input);

        if (!$this.parent().hasClass(divClass)) {
            $this.wrap(`<div style='position: relative;' class='${divClass}'>${$this.html()}</div>`);

            $this.after(
                `<a style='position: absolute; cursor: pointer;' class='${clearClass}'>${linkText}</a>`);
        }

        var btn = $this.next(); 

        function clearField() {
            $this.val('').change();

            triggerBtn();

            if (focusAfterClear) {
                $this.focus();
            }

            if (typeof (callback) === "function") {
                callback();
            }

            console.log(input);
        }

        function triggerBtn() {
            if (inputHasText()) {
                btn.show();
            } else {
                btn.hide();
            }
            applyButtonCss();
        }

        function inputHasText() {
            return $this.val().toString().replace(/^\s+|\s+$/g, '').length > 0;
        }

        function applyButtonCss() {
            const width = $this.outerWidth();
            const height = $this.outerHeight();

            btn.css({
                top: height / 2 - btn.height() / 2,
                left: width - btn.width() - 10
            });
        }

        btn.on('click', clearField);
        $this.on('keyup keydown change focus', triggerBtn);

        $(document as any).ready(() => {
            triggerBtn();
        });
    }
}

export function clearSearch()
{
    
}