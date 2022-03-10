import UserMessage from "../../components/UserMessage/UserMessage"
import { Container, Button, Row, Col, Card } from 'react-bootstrap'
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
            <UserMessage />
            <div className="mb">
                <section className="hero parallax">
                    <Row >
                        <Col>
                            <br /><br />
                            <h1>Club de Vuelo UPM Akaflieg Madrid</h1>
                            <p>La primera asociación universitaria en España dedicada a la ingeniería del vuelo a vela</p>
                            <button className="btn-effect center"><span>Sobre Nosotros!</span></button>

                        </Col>
                    </Row>

                </section>
            </div>

            <Container >
                <section className="newsSection">
                    <Row>
                        <Col className="newsTitle">Noticias</Col>
                    </Row>
                    <Row>
                        <Col >
                            <Card className="newsCard">
                                <Card.Img src={news1} />
                                <Card.Body >
                                    <Card.Title className="center blue">Sommertreffen 2019</Card.Title>
                                    <Card.Text >
                                        12 Sep , 2019
                                        <br />
                                        Desde el Club de Vuelo, entre muchas otras cosas, buscamos fomentar la cultura aeronáutica a través nuestra participación y organización de actividades</Card.Text>
                                    <Link to={`/news/`}>
                                        <Button>Leer más</Button>
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
                                        16 Mar , 2019
                                        <br />
                                        Como ya empieza a ser tradición, este año hemos vuelto a participar en la reunión de Akafliegs organizada en Alemania todos los veranos, ¡esta vez como
                                    </Card.Text>
                                    <Link to={`/news/`}>
                                        <Button >Leer más</Button>
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
                                        13 Mar , 2019
                                        <br />
                                        A medida que avanzábamos en los proyectos, se hacia más y más evidente la necesidad de poder fabricar distintos moldes y piezas para los proyectos, por lo que</Card.Text>
                                    <Link to={`/news/`}>
                                        <Button>Leer más</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>
                </section>
                <section className="prices">

                    <div className="prices-title">
                        <Row>
                            <h2 className="center ">Nuestros precios</h2>

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
                                    <h3>Remolque en nuestra Pawnee</h3>
                                    <div>
                                        Llegado a este punto te preguntarás cómo vuelan estos aviones si no tienen motor... Para ello necesitamos que otro avión nos remolque y todo esto cuesta 36€ más.                                    </div>
                                </div>
                            </div>
                        </Col>


                    </Row>
                </section>

                <section>
                    <Row><h2 classNameName="center mb">Redes Sociales</h2></Row>
                    <Row>
                        <Col classNameName="facebook"><Facebook></Facebook></Col>

                        <Col classNameName="twitter"><Twitter></Twitter></Col>
                    </Row>
                </section>

            </Container>
        </>
    )
}

export default IndexPage