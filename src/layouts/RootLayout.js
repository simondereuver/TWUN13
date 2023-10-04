import {Outlet} from 'react-router-dom';
import NavigationBar from '../components/NavigationBar/Navigationbar';

export default function RootLayout(){
    return(
        <div className='root-layout'>
            <main>
            <NavigationBar/>
                <Outlet/>
            </main>
        </div>
    )
}