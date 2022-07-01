import React from 'react'
import Footer from '../../components/Footer'
import NavBar from '../../components/NavBar'
import SideBar from '../../components/SideBar'
import { Contuiner } from './element'

const Spotify = () => {
  return (
    <>
        <Contuiner>
            <div className="sidebar">
                <SideBar/>
            </div>
            <div className="body">
                <div className="navbar">
                <NavBar/>

                </div>
                <div className="bodypost">body</div>
            </div>
            <div className="footer">
            <Footer/>

            </div>
        </Contuiner>
    </>
    )
}

export default Spotify