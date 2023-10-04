export default function EventList(person)
{
    console.log("This is length in func",person);
    return(
        <div>
            <ul>
            </ul>
        </div>
    )
}

/* <ul className={`list_of_events ${person.listEvents.length > 5 ? 'scrollable' : ''}`}>
                {person.EventList.map((person, index) => (
                <li key={index}>{person}</li> */