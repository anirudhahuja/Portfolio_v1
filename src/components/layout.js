import React from 'react'
import Header from './header'
import AboutPage from '../pages/about'
import PortfolioPage from '../pages/portfolio'
import ContactPage from '../pages/contact'


const Layout = (props) => {
    return (
        <div>
            <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1.0" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            {/* <Animation /> */}
            {props.children}
            <Header />
            <AboutPage />
            <PortfolioPage />
            <ContactPage />
        </div>
    )
}

export default Layout