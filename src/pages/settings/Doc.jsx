import React from 'react'
import '../settings/doc.scss'
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import AdfScannerIcon from '@mui/icons-material/AdfScanner';

const Doc = () => {
  return (
    <div className='document'>
        <div className="header_doc">
            <h3>Documentation</h3>
        </div>
        
        <div className="body_doc">
            <div className="top">
                <div className="icon-1">
                    <MenuBookIcon className='icon'/>
                    <h4>User Menual</h4>
                </div>
                <div className="icon-2">
                    <CropOriginalIcon className='icon'/>
                    <h4>Schematic</h4>
                </div>
            </div>
            <div className="bottom_doc">
                <AdfScannerIcon className='icon'/>
                <h4>Document</h4>
            </div>
        </div>
    </div>
  )
}

export default Doc