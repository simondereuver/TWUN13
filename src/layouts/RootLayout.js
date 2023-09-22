import {Outlet} from 'react-router-dom';
import NavigationBar from '../components/Navigationbar';
import Scheduling from '../components/SchedulingPopup';

export default function RootLayout(){
    return(
        <div className='root-layout'>
            <Scheduling/>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}