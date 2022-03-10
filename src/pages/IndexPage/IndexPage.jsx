import UserMessage from "../../components/UserMessage/UserMessage"
import { Container, Button, Row, Col, Image, Card, NavLink } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './IndexPage.css'
import Facebook from "../../components/Facebook/Facebook"
import Twitter from "../../components/Twitter/Twitter"
import news1 from './img/imgNoticia1.jpeg'
import news2 from './img/imgNoticia2.jpeg'
import news3 from './img/imgNoticia3.jpeg'
import k7plane from './img/K7.jpeg'
import SB5 from './img/SB_5.jpeg'
import pawnee from './img/pawnee.jpeg'



const IndexPage = () => {


    return (
        <>
            <div className="index-page">

                <div className="mb">
                    <section className="hero parallax">
                        <Row >
                            <Col>
                                <br /><br /><br /><br />
                                <h1 className="center">Club de Vuelo UPM</h1>
                                <h2 className="center">Akaflieg Madrid</h2>
                                <p>La primera asociación universitaria en España dedicada a la ingeniería del vuelo a vela</p>
                                <button className="btn-effect center conocenos"> <Link style={{ color: "white" }} to={`/about-us`}>Conócenos</Link></button>


                            </Col>
                        </Row>

                    </section>
                </div>
                <Container >
                    <section className="newsSection">
                        <Row>
                            <Col className="newsTitle ">Noticias</Col>
                        </Row>
                        <hr />
                        <Row>
                            <Col >
                                <Card className="newsCard">
                                    <Card.Img src={news1} />
                                    <Card.Body >
                                        <Card.Title className="center blue">Sommertreffen 2019</Card.Title>
                                        <Card.Text >
                                            <span className="center">12 Sep , 2019</span>
                                            Desde el Club de Vuelo, entre muchas otras cosas, buscamos fomentar la cultura aeronáutica a través nuestra participación y organización de actividades</Card.Text>
                                        <Link to={`/news`}>
                                            <Button className="bg-blue center">Leer más</Button>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col >
                                <Card className="newsCard">
                                    <Card.Img src={news2} />
                                    <Card.Body className="">
                                        <Card.Title className="center blue">Cursillo ATC IVAO</Card.Title>
                                        <Card.Text>
                                            <span className="center">16 Mar , 2019</span>
                                            Como ya empieza a ser tradición, este año hemos vuelto a participar en la reunión de Akafliegs organizada en Alemania todos los veranos, ¡esta vez como
                                        </Card.Text>
                                        <Link to={`/news`}>
                                            <Button className="bg-blue center">Leer más</Button>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col >
                                <Card className="newsCard">
                                    <Card.Img src={news3} />
                                    <Card.Body className="">
                                        <Card.Title className="center blue">Impresora 3D</Card.Title>
                                        <Card.Text>
                                            <span className="center">13 Mar , 2019</span>
                                            A medida que avanzábamos en los proyectos, se hacia más y más evidente la necesidad de poder fabricar distintos moldes y piezas para los proyectos, por lo que</Card.Text>
                                        <Link to={`/news`}>
                                            <Button className="bg-blue center">Leer más</Button>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </Col>

                        </Row>
                    </section >
                    <section className="prices">

                        <div className="prices-title">
                            <Row>
                                <h2 className="center ">Nuestros precios</h2>
                                <hr />

                                <p className="center ">Cuando salimos a volar, ser miembro de nuestro Akaflieg tiene muchas ventajas.</p>
                            </Row>
                        </div>
                        <Row>
                            <Col>
                                <div className="a-box ">
                                    <div className="img-container ">
                                        <div className="img-inner">
                                            <div className="inner-skew">
                                                <img src={k7plane} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-container">
                                        <h3>Vuelo en K7</h3>
                                        <div>
                                            El primer avión del club fue nuestro planeador "old-school", Alexander Schleicher K7 Rhönadler. Tiene espacio para dos personas, así que si quieres volar acompañado solo te costará 0.20€/min.
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col>

                                <div className="a-box">
                                    <div className="img-container">
                                        <div className="img-inner">
                                            <div className="inner-skew">
                                                <img src={SB5} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-container">
                                        <h3>Vuelo en SB-5</h3>
                                        <div>
                                            Si por el contrario prefieres volar solo en nuestro avión monoplaza de la Akaflieg Braunschweig, SB-5 Danzig, te costará <strong>0.30€/min</strong>.                                    </div>
                                    </div>
                                </div>
                            </Col>


                            <Col>

                                <div className="a-box">
                                    <div className="img-container">
                                        <div className="img-inner">
                                            <div className="inner-skew">
                                                <img src={pawnee} />
                                            </div>
                                        </div>

                                    </div>
                                    <div className="text-container">
                                        <div>
                                            Llegado a este punto te preguntarás cómo vuelan estos aviones si no tienen motor... Para ello necesitamos que otro avión nos remolque y todo esto cuesta 36€ más.
                                        <div className="text-container">
                                            <h3>Remolque en nuestra Pawnee</h3>
                                            <div>
                                                Llegado a este punto te preguntarás cómo vuelan estos aviones si no tienen motor... Para ello necesitamos que otro avión nos remolque y todo esto cuesta 36€ más.                                    </div>

                                        </div>
                                    </div>
                                </div>
                                </div>

                            </Col >
                        </Row >

                        <div className="prices-info">
                            <Row>
                                <h3 className="center">Tarifas</h3>
                                <hr />
                                <p className="center">Actualizadas a Septiembre de 2018</p>

                                <Col>
                                    <div className="prices-card">

                                        <p className="blue center">Cuotas anuales:</p>
                                        <ul >
                                            <li className="center">Cuota anual miembro no egresado de nuevo ingreso: 10€</li>
                                            <li className="center">Cuota anual miembro no egresado: 15€</li>
                                            <li className="center">Cuota anual miembro egresado y/o no UPM: 40€</li>
                                        </ul>
                                    </div>

                                </Col>
                                <Col >
                                    <div className="prices-card">
                                        <p className="blue center">Tarifas vuelo:</p>
                                        <ul>
                                            <li className="center">Minuto de vuelo socios no Akaflieg en K7: 0,20 €/min*</li>
                                            <li className="center">Minuto de vuelo socios no Akaflieg en SB-5: 0,30 €/min*</li>
                                            <li className="center">Minuto de vuelo socios Akaflieg: 0€/min</li>
                                            <li className="center">Precio remolque a motor (500m): 36€</li>
                                        </ul>
                                    </div>
                                </Col>

                            </Row>
                        </div>
                    </section >

                    <section>

                        <h2 className="center">Redes Sociales</h2>
                        <hr />
                        <Row>
                            <Col className="facebook"><Facebook ></Facebook></Col>

                            <Col className="twitter"><Twitter></Twitter></Col>
                        </Row>
                    </section >

                </Container >
            </div >
        </>
    )
}

export default IndexPage

