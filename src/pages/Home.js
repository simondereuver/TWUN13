import Background from '../components/Background';
import Footer from '../components/Footer';
import SidePanel from '../components/Sidepanel';
import { SidepanelDataHome } from '../components/SidepanelData';

export default function Home()
{
    return(
        <>
        <SidePanel SideData={SidepanelDataHome}></SidePanel>
        <Background/>
        <Footer/>
        </>
    )
}