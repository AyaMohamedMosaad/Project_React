

import { Button, Container, Dropdown, DropdownButton, Form, FormControl, Nav, Navbar } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import "./NavBarStyle.css"
import image1 from './9.ico'
export function MyNavbar() {

    return (

        <>




            <Nav className="container-fluid bg-grey">

                <Navbar.Brand href="#home">
                    <img src={image1} className="image" />
                </Navbar.Brand>
                <div className="cont">
                    <Nav.Item>
                        <Nav.Link > <NavLink to="/home" className="anchor">Home</NavLink></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link> <NavLink to="/albums" className="anchor">Albums</NavLink></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link> <NavLink to="/form" className="anchor">Form</NavLink></Nav.Link>
                    </Nav.Item>
                </div>

              <div className="contDrop">
                <DropdownButton variant="p-3 mb-2 bg-light text-dark" id="dropdown-item-button"  title="All Albums">
                    <Dropdown.ItemText >Dropdown item text</Dropdown.ItemText>
                    <Dropdown.Item as="button">Action</Dropdown.Item>
                    <Dropdown.Item as="button">Another action</Dropdown.Item>
                    <Dropdown.Item as="button">Something else</Dropdown.Item>
                </DropdownButton>

                </div>
            </Nav>












        </>
    )
}