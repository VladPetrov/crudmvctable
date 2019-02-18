

export class ManyToManyRelationRequest
{
    public leftEntityId: number;

    public items: ManyToManySaveViewModel[] = [];

    constructor(leftEntityId: number)
    {
        this.leftEntityId = leftEntityId;
    }
}

export class ManyToManySaveViewModel
{
    public action: ManyToManySaveAction;

    public id: number;

    constructor(id: number, action: ManyToManySaveAction)
    {
        this.id = id;
        this.action = action;
    }
}

export enum ManyToManySaveAction
{
    Add = 1,
    Delete = 2
}