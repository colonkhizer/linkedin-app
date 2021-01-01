import React , {useState , useEffect} from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../features/counter/userSlice';
import { auth } from '../firebase';
import Brightness4Icon from '@material-ui/icons/Brightness4';

function Header() {

    const user = useSelector(selectUser)
    console.log(user)

    const [seed, setSeed] = useState("");
    const [theme , setTheme] = useState('Light');
    const [themeIcon , setThemeIcon] = useState(false);
    const dispatch = useDispatch()

    const body = document.body

    const icon = themeIcon ? <BrightnessHighIcon/> : <Brightness4Icon/>

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, []);

    useEffect(() => {

        const existingPreference = localStorage.getItem("theme");
        if(existingPreference){
            if(existingPreference === 'Dark'){
                setTheme('Light');
                setThemeIcon(true);
                body.classList.add('dark-mode')
            } else if(existingPreference === 'Light') {
                setTheme('Dark');
                setThemeIcon(false)
                body.classList.remove('dark-mode')
              }
            }
            else  {
              localStorage.setItem("theme", "Light");
            }

    }, []);


    const toggleTheme = () => {
        if(theme === 'Light'){
            setTheme('Dark')
            setThemeIcon(false)
            body.classList.remove('dark-mode')
            localStorage.setItem("theme", "Light");
        } else {
            setThemeIcon(true)
            setTheme('Light')
            body.classList.add('dark-mode')
            localStorage.setItem("theme", "Dark");
        }
        console.log('reaching')
    }

    const logoutFromApp = () => {
        dispatch(logout())
        auth.signOut()
    }

    return ( !user ? (

       ""
    ) :  <div className="header">
    <div className="header__left">
            <img src="https://image.flaticon.com/icons/png/512/174/174857.png" alt=""/>
            <div className="header__search">
                <SearchIcon/>
                <input type="text"/>
            </div>
    </div>

    <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home"/>
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
        <HeaderOption Icon={ChatIcon} title="Messaging"/>
        <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
        <HeaderOption onClick={logoutFromApp} avatar={user?.photoURL} title={user?.displayName}/>
        {/* <HeaderOption Icon={icon} title={theme} click={toggleTheme}/> */}
        <div className="headerOption" onClick={toggleTheme}>
            { icon }
            <h3 className="headerOption__title">
                {theme}
            </h3>
        </div>
    </div>
</div>
    )
}

export default Header
