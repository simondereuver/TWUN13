import CalenderDay from "../components/CalenderDay";
import Background from '../components/Background';
import Footer from '../components/Footer';
import { SidepanelDataHome } from '../components/SidepanelData';
import SidepanelOpen from "../components/SidepanelOpen";

export default function Home()
{
    return(
        <>
        <SidepanelOpen SideData={SidepanelDataHome}></SidepanelOpen>
        <Background/>
        <Footer/>
        </>
    )
}