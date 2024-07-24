import { Link, NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

function NavigationBar() {
    return (
    <nav >
        {/* <Link to="/add-customers">Add Customers</Link>
        <Link to="customers">Customers</Link> */}
      <Navbar  bg='success'  expand='lg'>
        <Navbar.Brand href="/">E-Commerce App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link as={NavLink} to="/" activeclassname="active">
                    Home
                </Nav.Link>
                <Nav.Link as={NavLink} to="/exercise" activeclassname="active">
                    Exercsises
                </Nav.Link>
            </Nav>
        </Navbar.Collapse>

      </Navbar>
    </nav>
    )
}

export default NavigationBar;