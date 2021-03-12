import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import HeaderOption from './HeaderOption'

// Material UI Icons
import HomeIcon from '@material-ui/icons/Home'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import ChatIcon from '@material-ui/icons/Chat'
import NotificationsIcon from '@material-ui/icons/Notifications'

function Header() {
    return (
        <div className = 'header'>
            <div className="header__left">
                <img src="https://www.flaticon.com/svg/vstatic/svg/1409/1409945.svg?token=exp=1615564809~hmac=0710a65fdf8e1b00ae00d4ffad28c4ad" alt=""/>

                <div className="header__search">
                    <SearchIcon />
                    <input type="text"/>
                </div>
            </div>

            <div className="header__right">
            <HeaderOption Icon={HomeIcon} title='Home' />
            <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
            <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
            <HeaderOption Icon={ChatIcon} title='Messaging' />
            <HeaderOption Icon={NotificationsIcon} title='Notifications' />
            <HeaderOption avatar='https://i.postimg.cc/yYTqxCbK/IMG-20200602-181236.jpg' title='Me' />
            </div>
        </div>
    )
}

export default Header
