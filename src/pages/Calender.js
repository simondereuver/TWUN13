import CalenderDay from "../components/CalenderDay";
import CalenderGrid from "../components/CalenderGrid";

export default function Calender({event})
{  
    let date = "hello";
    let loc = "home";
    let d = new Date();
    let t = "08.00"
    const persons = ["John", "Alice","BitchBoy","Fucktard"];
    return (
        <div>
            <CalenderGrid day = {d}/>
            <CalenderDay day = {date} location={loc} time = {t} attendies={persons}/>
        </div>
    )

}