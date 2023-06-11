import {Navbar, Container, Nav} from "react-bootstrap";
import "../style/style.css"

const Navigasi = () => {
    return(
        <div>
            <Navbar className="p-3">
                <Container>
                    <Navbar.Brand className="text-secondary navbarbrand">ZEINPORTOFOLIO</Navbar.Brand>
                    <Nav>
                        <Nav.Link className="navlink text-danger">Home</Nav.Link>
                        <Nav.Link className="navlink text-secondary">About</Nav.Link>
                        <Nav.Link className="navlink text-secondary">Service</Nav.Link>
                        <Nav.Link className="navlink text-secondary">Portofolio</Nav.Link>
                        <Nav.Link className="navlink text-secondary">Resume</Nav.Link>
                        <Nav.Link className="navlink text-secondary">Blog</Nav.Link>
                        <Nav.Link className="navlink text-secondary">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>     
    )
}

export default Navigasi;