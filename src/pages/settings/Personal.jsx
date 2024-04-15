import React from 'react';
import '../settings/personal.scss';
import logo from '../../assets/images/xyma.png';


const Personal = () => {
  return (
    <div className='personal'>
        <div className="header">
            <h3>Personal Information</h3>
            <img src={logo} alt='xyma_logo' style={{width: '130px'}}/>
        </div>
        <div className="body-personal">
            <div className="top">
                <div className="name"><h4>Name</h4>
                    <input type='text' disabled value='xyma'/>
                </div>
                <div className="email"><h4>Email</h4>
                <input type='text' disabled value='info@xyma.in'/>
                </div>
            </div>
            <div className="bottom">
                <div className="customer">
                    <h5>Customer</h5>
                    <input type='text' disabled value='XYCU1'/>
                </div>
                <div className="contact">
                    <h5>Contact_No</h5>
                    <input type='text' disabled value='+91-9442949347'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Personal