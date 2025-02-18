import React, { useEffect } from 'react'
import { NavigationDots } from '../components'

const AppWrap = (Component, idName, classNames) => function HOC() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id={idName} className={`app__container ${classNames}`}>
      <div className='app__wrapper app__flex'>
        <Component />
      </div>
      <NavigationDots active={idName} />
    </div>
  )
}

export default AppWrap
