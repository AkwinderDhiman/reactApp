import React from 'react';
import './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggler from '../SideDrawer/DrawerToggler/DrawerToggler';

const toolbar = (props) => (
    <header className="Toolbar" >
        <DrawerToggler clicked={props.drawerTogglerClicked}/>
        <div className='LogoToolbar'>
            <Logo />
        </div>
        <nav className='DesktopOnly'>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;