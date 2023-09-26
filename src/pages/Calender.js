import CalenderDay from "../components/CalenderDay";
import CalenderGrid from "../components/CalenderGrid";
import User from '../components/User';
import Event from '../components/Event';
import SidePanel from '../components/Sidepanel';
import {SidepanelDataCalender} from '../components/SidepanelData';

export default function Calender(eventData)
{  
    let date = "hello";
    let loc = "home";
    var d = new Date();
    let t = "08.00"
    const persons = ["John", "Alice","BitchBoy","Fucktard"];
    var event = new Event(d,loc,t,persons);
    var person = new User("Jacob","2","Swedjen","Test","Retarded");
    person.listEvents.push(event);

    return (
        <div>
            <SidePanel SideData={SidepanelDataCalender}/>
            <CalenderGrid day = {d} user = {person}></CalenderGrid>
        </div>
    )

}