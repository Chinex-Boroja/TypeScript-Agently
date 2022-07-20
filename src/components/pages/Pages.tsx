import React from 'react'
import Header from '../common/header/Header'
import Body from '../common/body/Body'
import {
  BrowserRouter as Router, Routes, Route} from 'react-router-dom'

const Pages = () => {
  return (
    <>
      <Router>
        <Header/>
        <Body/>
        <Routes>

        </Routes>
      </Router>
    </>
  )
}

export default Pages