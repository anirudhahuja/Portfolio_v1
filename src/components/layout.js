import React from 'react'
import Header from './header'
import AboutPage from '../pages/about'
import PortfolioPage from '../pages/portfolio'
import ContactPage from '../pages/contact'
import Animation from '../utils/animation'

const Layout = (props) => {
    return (
        <div>
            <Animation />
            {props.children}
            <Header />
            <AboutPage />
            <PortfolioPage />
            <ContactPage />
        </div>
    )
}

export default Layout