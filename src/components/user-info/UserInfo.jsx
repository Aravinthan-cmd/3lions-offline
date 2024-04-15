import React from 'react'
import './user-info.scss'
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';

const UserInfo = ({ user }) => {
    return (
        <div className='user-info'>
            <div className="user-info__img">
                <AccountCircleTwoToneIcon />
            </div>
            <div className="user-info__name">
                <span>{user.name}</span>
            </div>
        </div>
    )
}

export default UserInfo
