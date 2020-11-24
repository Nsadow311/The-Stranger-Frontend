import './App.css';
import { Switch, Route } from 'react-router-dom' 
import { LandingPage, DashboardPage, MenuPage} from './pages';
import { useDisclosure } from '@chakra-ui/core';
import { SideDrawer } from './components/SideDrawer'
import { NavigationBar } from './components';

import React from 'react';

function App() {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
    const props = { isOpen, onOpen, onClose, btnRef }

    return (
        <>
        <NavigationBar {...props} />
          <SideDrawer {...props} />
          <Switch>
              <Route
              component={LandingPage}
              exact={true}
              path="/"
              />
              <Route
              component={MenuPage}
              exact={true}
              path="/menu"
              />
              <Route
              component={DashboardPage}
              exact={true}
              path="/dashboard/:id"
              />
          </Switch>
        </>
    )
}


export default App;