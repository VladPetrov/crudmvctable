export class InstancesContainer
{
    private instances: { [name: string]: any } = {};

    public instance(name: string): any
    {
        const inst = this.instances[name];

        if (!inst)
        {
            console.log(`Instance with name '${name}' was not found`);
        }

        return inst;
    }

    public initService(name:string, func:() => any)
    {
        const inst = this.instances[name];

        if (!inst)
        {
            this.instances[name] = func();
        }
    }
}

export class SingleToneBase
{
    protected static instancesContainer: InstancesContainer = new InstancesContainer();
    
    public static initService(name: string, func: () => any): void
    {
        this.instancesContainer.initService(name, func);
    }

    public static instance(name: string): any
    {
        return this.instancesContainer.instance(name);
    }
}
