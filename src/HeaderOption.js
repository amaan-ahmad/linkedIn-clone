import React from 'react'
import './HeaderOption.css'
import { Avatar } from '@material-ui/core'

function HeaderOption({avatar, Icon, title}) {
    return (
        <div className = 'headerOption'>
        {/* If I pass in an Icon, render Icon as component. */}
            {Icon && <Icon className = 'headerOption__icon' />}
            {avatar && (
                <Avatar className='headerOption__icon' src={avatar} />
            )}
            <h3 className = 'headerOption__title'>{title}</h3>
        </div>
    )
}

export default HeaderOption
