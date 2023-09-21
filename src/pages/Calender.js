import { Grid, List } from "@mui/material";
import CalenderDay from "../components/CalenderDay";

export default function Calender(date)
{   
        
    let firstDay = new Date(date.getFullYear(), (date.getMonth() -1), 1 ).getDay();
    let numOfDays = new Date(date.getFullYear(), date.getMonth(), 0 ).getDate(); 
    
    for(let i = 0; i < 6; i++)
    {
        for(let n = 0; n < 7; n++)
        {
        }
    }

        return (
        <Grid container>
            <Grid>
                
            </Grid>

        </Grid>
        );
}