import React from "react";
class Nav extends  React.Component {
    render(){
        return(
            <>
            <div id='bg4'>
            <div className='nav1inner'>
                <img alt='mobile' src="accets/mobile.webp"></img>
            </div>
            <div  className='nav1inner'>

                <h1 id='nav1innerh1'>Save$$$<br></br>With offers on demand</h1>
                <img className='bg4img' src='https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg'></img>
                <img className='bg4img' src='https://w7.pngwing.com/pngs/462/120/png-transparent-iphone-google-play-android-get-started-now-button-electronics-text-logo-thumbnail.png'></img>
                <p id='nav1innerp'>Apple and the Apple logo are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc. Google Play is a trademark of Google Inc. Terms apply.</p>
            </div>
            </div>
            <div id='nav2'>
                <span>TM & Copyright 2024 Burger King Company LLC. All Rights Reserved.
                </span><a id='nav2a'>| 
                Do Not Sell Or Share My Personal Information</a>
            </div>
           
            </>
        )
    }
}
export  default Nav;
