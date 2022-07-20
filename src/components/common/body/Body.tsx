import React from "react";
import "./body.css"
import { Link } from 'react-router-dom'
import { nav } from '../../data/Data'

const Body = () => {
    return (
        <>
<div className='topbarContainer'>
<div className='topbarContainerNav'>
    <div className='navLeft'>
        <ul>
            <li>House</li>
            <li>Office Space</li>
            <li>Flats and Apartments</li>
            <li>Lands</li>
            <li>Semi Detached Bungalow</li>
            <li>Semi Detached Duplex</li>
            <li>Ware house</li>
            <li>Mini Flat</li>
            <li>Shop in Mall</li>
        </ul>
     </div>
     <div className='navRight'>
          <Link to="/filter">
                <div className='filterElements'>
                    <span className='filterLabel'>Filters</span>
                </div>
            </Link>
     </div>
</div>
</div>
        </>
      )
    }
    
    export default Body