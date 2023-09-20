import {NavLink,Outlet} from 'react-router-dom';
import Navigation_Bar from '../components/NavigationBar';

export default function RootLayout(){
    return(
        <div className='root-layout'>
            <Navigation_Bar></Navigation_Bar>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}