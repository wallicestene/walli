import React from 'react'
import "./Player.css"
import Sidebar from './SideBar'
import Body from './Body'
import Footer from './Footer'
const Player = ({spotify}) => {
  return (
    <div className="player">
      <div className="player-body">
      {/* SideBar */}
      <Sidebar/>
      <Body spotify={spotify}/>
      {/* body */}
      </div>
     
    <Footer spotify={spotify    }/>
      {/*footer  */}
    </div>
  )
}

export default Player