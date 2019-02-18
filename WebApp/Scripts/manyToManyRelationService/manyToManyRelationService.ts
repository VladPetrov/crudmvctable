import {
    ManyToManyRelationRequest,
    ManyToManySaveViewModel,
    ManyToManySaveAction
} from './manyToManyRelationServiceCommon';
import { Xhr } from '../common/xhr';

export class ManyToManyRelationService
{
    private containerName: string;

    private leftEntityId: number;

    private url:string;

    constructor(leftEntityId: number, containerName: string, url: string)
    {
        this.leftEntityId = leftEntityId;
        this.url = url;
        this.containerName = containerName;
    }

    private initiallyChecked: string [] = [];

    private itemsToAdd: ManyToManySaveViewModel[] = [];

    private itemsToDelete: ManyToManySaveViewModel[] = [];

    public registerCheckbox(selector: string, id:number)
    {
        const checkBox = $(`#${selector}`);

        if (checkBox.is(":checked"))
        {
            this.initiallyChecked.push(selector);
        }

        checkBox.change((e) =>
        {
            if (checkBox.is(":checked"))
            {
                if (!this.initiallyChecked.find(x => x === selector))
                {
                    this.addItem(id);
                }

                const deletedItem = this.itemsToDelete.find(x => x.id === id);

                if (deletedItem)
                {
                    const index = this.itemsToDelete.indexOf(deletedItem);
                    this.itemsToDelete.splice(index, 1);
                }
            }
            else
            {
                if (this.initiallyChecked.find(x => x === selector))
                {
                    this.delItem(id);
                }

                const addedItem = this.itemsToAdd.find(x => x.id === id);

                if (addedItem)
                {
                    const index = this.itemsToAdd.indexOf(addedItem);
                    this.itemsToAdd.splice(index, 1);
                }
            }
        });
    }

    public save(): void
    {
        const request = this.createRequest();

        Xhr.requestHtml("POST", this.url, request, response => $(`#${this.containerName}`).html(response));
    }

    private addItem(id: number)
    {
        const item = new ManyToManySaveViewModel(id, ManyToManySaveAction.Add);
        this.itemsToAdd.push(item);
    }

    private delItem(id: number)
    {
        const item = new ManyToManySaveViewModel(id, ManyToManySaveAction.Delete);
        this.itemsToDelete.push(item);
    }

    private createRequest() : ManyToManyRelationRequest
    {
        const request = new ManyToManyRelationRequest(this.leftEntityId);
        request.items = request.items.concat(this.itemsToAdd);
        request.items = request.items.concat(this.itemsToDelete);
        return request;
    }
}