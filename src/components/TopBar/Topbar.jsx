import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import './Topbar.css'

function Topbar() {
    return (  
        <div className="TopBar">
            <div className="TopBarWrroper">
                <div className="TopLogo">IUST</div>
                <div className="TopRight">

                    <div className='TopBarIcon'>
                     <NotificationsNoneIcon></NotificationsNoneIcon>
                     <span className='Top-Bar-Icon-Number'>2</span>
                    </div>

                    <div className='TopBarIcon'>
                     <LanguageIcon></LanguageIcon>
                     <span className='Top-Bar-Icon-Number'>2</span>
                    </div>

                    <div className='TopBarIcon'>
                     <SettingsIcon></SettingsIcon>
                    </div>
                    <img className='TopBar-img' src="./logo512.png" alt="" />
                </div>
            </div>
        </div>
    );
}

export default Topbar;