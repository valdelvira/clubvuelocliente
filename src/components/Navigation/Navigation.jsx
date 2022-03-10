import './Navigation.css'
import { Navbar, Container, Nav, Image, NavDropdown, Modal } from 'react-bootstrap'
import { useState, useContext } from "react"
import { NavLink } from 'react-router-dom'
import LoginForm from '../LoginForm/LoginForm'
import { AuthContext } from './../../context/auth.context'
import logo from './images/logo.png'



const Navigation = () => {

    const [showModal, setShowModal] = useState(false)
    const { isLoggedIn, user, logOutUser } = useContext(AuthContext)

    const handleModalClose = () => setShowModal(false)
    const handleModalOpen = () => setShowModal(true)

    return (
        <>
            <Navbar bg="light" variant="light" className='navigator' sticky='top' expand="lg">
                <Container>
                    <NavLink to="/">
                        <Image src={logo} />
                    </NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className='justify-content-end' id="basic-navbar-nav">
                        <Nav>
                            <NavDropdown title="Akaflieg Madrid" id="navbarScrollingDropdown">
                                <NavLink to="/what-is">
                                    <NavDropdown.Item as="span">¿Qué es un Akaflieg?</NavDropdown.Item>
                                </NavLink>
                                <NavLink to="/projects">
                                    <NavDropdown.Item as="span">Proyectos</NavDropdown.Item>
                                </NavLink>
                                <NavLink to="/sponsors">
                                    <NavDropdown.Item as="span">Sponsors</NavDropdown.Item>
                                </NavLink>
                                <NavLink to="/contact">
                                    <NavDropdown.Item as="span">Contacto</NavDropdown.Item>
                                </NavLink>
                            </NavDropdown>

                            <NavLink to="/meteo">
                                <Nav.Link as="span">Meteo</Nav.Link>
                            </NavLink>

                            <NavLink to="/news">
                                <Nav.Link as="span">Noticias</Nav.Link>
                            </NavLink>

                            <NavLink to="/events">
                                <Nav.Link as="span" >Eventos</Nav.Link>
                            </NavLink>
                            {
                                user?.role === 'ADMIN' ?

                                    <NavLink to="/profile">
                                        <Nav.Link as="span" >Usuarios</Nav.Link>
                                    </NavLink>
                                    :
                                    null
                            }

                            {
                                !isLoggedIn ?
                                    <>
                                        <NavLink to="/signup">
                                            <Nav.Link as="span" >Registrarse</Nav.Link>
                                        </NavLink>
                                        <Nav.Link onClick={handleModalOpen} > Iniciar sesión</Nav.Link>

                                    </>
                                    :
                                    <>
                                        <NavLink to={`/profile/${user?._id}`}>
                                            <Nav.Link as="span">¡Hola, {user?.username}!</Nav.Link>
                                        </NavLink>
                                        <Nav.Link as="span" onClick={logOutUser}>Cerrar sesión</Nav.Link>
                                    </>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
            <div className='sign-in-modal'>

                <Modal show={showModal} onHide={handleModalClose} size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title>Acceso a usuarios</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <LoginForm closeModal={handleModalClose} />
                    </Modal.Body>
                </Modal>
            </div>

        </>
    )
}

export default Navigation