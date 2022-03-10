import './Footer.css'
import { Container, Row, Col } from 'react-bootstrap'
import LoginForm from '../LoginForm/LoginForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <div className='contFooter'>
            <Container>
                <Row>
                    <Col>
                        <ul>
                            <li><a href="/about-us">Sobre nosotros</a></li>
                            <li><a href="/projects">Proyectos</a></li>
                            <li><a href="/sponsors">Sponsors</a></li>
                            <li><a href="/contact">Contactar</a></li>
                        </ul>
                    </Col>
                    <Col>
                        <ul>
                            <li><a href="/what-is">¿Qué es un Akaflieg?</a></li>
                            <li><a href="/meteo">Meteo</a></li>
                            <li><a href="/news">Noticias</a></li>
                            <li><a href="/events">Eventos</a></li>
                        </ul>
                    </Col>
                    <Col></Col>
                    <Col>
                        <div className="fb-like" data-href="https://www.facebook.com/clubvueloupm" data-width="" data-layout="standard" data-action="like" data-size="large" data-share="false"></div>
                        <div className="wrapper">
                            <div className="icon facebook">
                                <div className="tooltip">Facebook</div>
                                <a href="https://www.facebook.com/clubvueloupm" target="_blank">
                                    <span><FontAwesomeIcon icon={faFacebook} /></span>
                                </a>
                            </div>
                            <div className="icon twitter">
                                <div className="tooltip">Twitter</div>
                                <a href="https://twitter.com/vueloupm" target="_blank">
                                    <span><FontAwesomeIcon icon={faTwitter} /></span>
                                </a>
                            </div>
                            <div className="icon instagram">
                                <div className="tooltip">Instagram</div>
                                <a href="https://www.instagram.com/clubvueloupm/" target="_blank">
                                    <span><FontAwesomeIcon icon={faInstagram} /></span>
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <hr></hr>
            <p> © Akaflieg Madrid 2010-2022 - Todos los derechos reservados</p>
            <p>Desarrollado por Diego Valdelvira, Miguel Ortega y Mario Díaz</p>
        </div >
    )
}

export default Footer