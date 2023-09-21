import SidePanel from "../components/Sidepanel";
import CalenderDay from "../components/CalenderDay";
import Background from '../components/Backgorund';
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