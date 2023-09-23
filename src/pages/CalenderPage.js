
import Calender from "./Calender";
let test = new Date("2021-04-21");
export default function CalenderPage(){
    return(
    <div>
        {Calender(test)}
    </div>
    )
}