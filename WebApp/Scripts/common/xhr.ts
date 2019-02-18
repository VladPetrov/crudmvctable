
export class Xhr
{
    public static requestHtml(type: "POST" | "GET" | "PUT", url: string, request: any, responseAction: (response: any) => void)
    {
        this.request(type, url, 'HTML', request, responseAction);
    }

    public static requestJson(type: string, url: string, request: any, responseAction: (response: any) => void)
    {
        this.request(type, url, 'json', request, responseAction);
    }

    public static request(type: string, url: string, dataType: 'HTML' | 'json', request: any, responseAction: (response: any) => void)
    {
        $.ajax({
            type: type,
            url: url,
            data: JSON.stringify(request),
            contentType: "application/json; charset=utf-8",
            dataType: dataType,
            cache: false,
            success: response =>
            {
                responseAction(response);
            },
            error: (xhr, status, error) =>
            {
                console.log(error);
            }
        });
    }
}