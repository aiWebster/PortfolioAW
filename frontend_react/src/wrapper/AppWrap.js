import React from 'react'
import {NavigationDots, SocialMedia} from '../components'
const AppWrap = (Component, idName,classNames) => function HOC() {
  return (
    <div id={idName} className = {`app__container ${classNames}`}>
        <SocialMedia/>

        <div className="app__wrapper app__flex">
            <Component />

            <div className='copywrite' >
                <p className='p-text'>@2024 AIDAN</p>
                <p className='p-text'>All rights reserved</p>

            </div>
        </div>
        <NavigationDots active={idName}/>
    </div>
  )
}

export default AppWrap