import './Footer.css'
import { Container, Row, Col } from 'react-bootstrap'
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
                            <li><Link to="/about-us">Sobre nosotros</Link></li>
                            <li><Link to="/projects">Proyectos</Link></li>
                            <li><Link to="/sponsors">Sponsors</Link></li>
                            <li><Link to="/contact">Contactar</Link></li>
                        </ul>
                    </Col>
                    <Col>
                        <ul>
                            <li><Link to="/what-is">¿Qué es un Akaflieg?</Link></li>
                            <li><Link to="/meteo">Meteo</Link></li>
                            <li><Link to="/news">Noticias</Link></li>
                            <li><Link to="/events">Eventos</Link></li>
                        </ul>
                    </Col>
                    <Col>

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
                    <Col>
                        <br />
                        <div className="fb-like" data-href="https://www.facebook.com/clubvueloupm" data-width="" data-layout="standard" data-action="like" data-size="large" data-share="false">
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