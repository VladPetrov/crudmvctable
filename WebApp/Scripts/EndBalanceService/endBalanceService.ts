import { Xhr } from "../common";
import { TableService } from "../tableService/tableService";
import { Subscription } from "rxjs";


export class EndBalanceService
{
    private static subscription: Subscription;

    public static subscribeToTable(service: TableService, url: string, containerId: string): void
    {
        if (this.subscription)
        {
            this.subscription.unsubscribe();
        }

        this.subscription = service.onFilterTable.subscribe(request =>
        {
            Xhr.requestHtml("GET",
                url,
                {},
                response =>
                {
                    const container = $(`#${containerId}`);

                    container.animate({ 'opacity': 0 },
                        400,
                        () =>
                        {
                            container.html(response).animate({ 'opacity': 1 }, 400);
                        });
                });
        });
    }
}