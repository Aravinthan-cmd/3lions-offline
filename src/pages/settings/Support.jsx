import React from 'react'
import '../settings/support.scss'
import GroupsIcon from '@mui/icons-material/Groups';
import PublicIcon from '@mui/icons-material/Public';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import CallIcon from '@mui/icons-material/Call';

const Support = () => {
  return (
    <div className='support'>
        <div className="header_support">
            <h3>Contact Us</h3>
            <GroupsIcon className='icon'/>
        </div>
        <div className="body_support">
            <h5>Customer Support</h5>
            <textarea className='input'/>
            <button className='submit_btn'>Submit</button>
        </div>
        <div className="footer_support">
            <div className="web hov">
                <PublicIcon />
                <a href='https://xyma.org.in/'>www.xyma.in</a>
            </div>
            <div className="mail hov">
                <AttachEmailIcon />
                <p>info@xyma.in</p>
            </div>
            <div className="phone hov">
                <CallIcon />
                <p>+91-9442949347</p>
            </div>
        </div>
    </div>
  )
}

export default Support