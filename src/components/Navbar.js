import React from 'react';
import {Navbar} from 'react-bootstrap';

export default function NavBar() {
    return (
        <Navbar bg="light">
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Navbar.Brand href="#About">Tienda Online</Navbar.Brand>
        <Navbar.Brand href="#Contact">Contacto</Navbar.Brand>
      </Navbar>
    )
}
