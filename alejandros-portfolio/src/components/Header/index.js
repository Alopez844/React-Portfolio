import React, {Component} from 'react';
import {Route, Redirect, HashRouter} from "react-router-dom";
import Nav from '../Nav';
import About from '../About';
import Portfolio from '../Portfolio';

class Header extends Component {
    render() {
        return (
            <HashRouter>
                <div className='row Header' id='header'>
                    <a href='link to github page'><img src='../../assets/portfolio-logo.png' alt='logo' class='icon' id='logo'/></a>    
                    <Nav/>
                </div>

                <div className='content'>
                    <Route exact path='/' render={() => (<Redirect to='/portfolio'/>)}/>
                    <Route path='/portfolio' component={Portfolio}/>
                    <Route path='/about' component={About}/>
                    <Route path='/contact' component={Contact}/>
                    <Route path='/resume' component={Resume}/>
                </div>

            </HashRouter>
        )
    }
}

export default Header;