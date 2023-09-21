import {Outlet} from 'react-router-dom';
import NavigationBar from '../components/Navigationbar';

export default function RootLayout(){
    return(
        <div className='root-layout'>
            <NavigationBar></NavigationBar>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}