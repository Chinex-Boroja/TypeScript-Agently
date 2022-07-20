import React from 'react'
import "./header.css"

const Header = () => {
  return (
    <>
        <header>
            <div className='container flex'>
                <div className='logo'>
                  <img src='./assets/icons/logo.svg' alt=''/>
                </div>
                <div className='input'></div>
                {/* <div className='flex'>
                  <ul className='flex'>
                    {nav.map((list, index) => (
                      <li key={index}>
                        <Link to={list.path}>
                          {list.text}</Link>
                      </li>
                    ))}
                  </ul>
                </div> */}
                
                <div className='frame'>
                  <div className='typo'>Own a Property ?</div>
                    {/* <span></span> Own a Property ? */}
                    <div className='icon'>
                      <img src='./assets/icons/avatar.svg' alt='avatar'/>
                    </div>
                    <div className='caret__down'>
                      <img src='./assets/icons/arrowdown.svg' alt='arrowdown'/>
                    </div>
                </div>
            </div>
            <div className='line'>
            </div>
        </header>
    </>
  )
}

export default Header