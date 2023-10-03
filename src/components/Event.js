export default class Event{
    constructor(_date,_location,_time,_attendies)
    {
        this.date = _date;
        this.location = _location;
        this.time = _time;
        this.attendees = Array.isArray(_attendies) ? _attendies : [];
    }
}