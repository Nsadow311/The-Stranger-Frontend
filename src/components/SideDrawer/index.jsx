import React from 'react';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from "@chakra-ui/core";
  import './sidedrawer.css'

export const SideDrawer = ({
    isOpen,
    onOpen,
    onClose,
    btnRef,

}) => {
    return (
    <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef }>
    <DrawerOverlay />
    <DrawerContent>
        <DrawerHeader className="drawer-header">
            <span>Menu</span>
        <DrawerCloseButton className="drawer-close-btn" />
        </DrawerHeader>
    </DrawerContent>    
    </Drawer>
    
    )
}


   
