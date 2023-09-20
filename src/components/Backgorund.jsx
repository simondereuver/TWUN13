import './background.css';
import SidePanel from './Sidepanel';

const Background = () => {
    return ( 
        <div className="backgroundImg">
            <div>
                <h2 className="msg">"This is the best thing ever" - My land lord</h2>
            </div>
            <SidePanel></SidePanel>

        </div>
     );
}

export default Background;