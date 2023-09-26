export default class User{
    constructor(name_str,id_nr,country,job,role)
    {
        this.name = name_str;
        this.id = id_nr;
        this.origin = country;
        this.job = job;
        this.role = role;
        this.listEvents = [];
    }

    GetEvents()
    {
        return this.listEvents;
    }
    
    SetEvents(events)
    {
        if(Array.isArray(events))
        {
            this.listEvents = this.listEvents.concat(events);
        }
        else
        {
            throw new Error("Input must be an array");
        }
    }

}