import React, {Component} from 'react'
import Navigation from '../navigation/navigation.component'
import Footer from '../footer/footer'
import ColorSwitcher from '../colorSwitcher/ColorSwitcher'
import BackToTop from '../backtotop/backToTop'


class Layout extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <ColorSwitcher/>
                {this.props.children}
                <BackToTop/>
                <Footer />
            </div>
        )
    }
}

export default Layout;