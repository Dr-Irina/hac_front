import React from 'react'
import Menu from './components/Menu'
import Berpi from './components/images/Berpi.mp4'

import Camera from './components/Camera.js'


const App = () => {
  return (
      <div style={{height: '100%'}} className={'allPage'}>
          <div className={'LeftMenu'}>
              <Menu className={'vertical left fixed'} style={{height: '100%'}}/>
          </div>
          <div className={'RightAllItem'}>
              {/*    <Camera/>*/}
              <video autoPlay loop muted>
                  <source src={'images/Berpi.mp4'}/>
              </video>
          </div>
      </div>
  )
}

export default App
