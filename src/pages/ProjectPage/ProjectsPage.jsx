import { Container, Row, Col, Image } from "react-bootstrap"
import raspberryImg from './img/Raspberry.jpeg'
import proj1photo1 from './img/plane1.jpeg'
import quijote2 from './img/quijote2.jpeg'
import proj1photo2 from './img/plane2.jpeg'
import proj1photo3 from './img/plane3.jpeg'
import proj1photo4 from './img/plane4.jpeg'
import proj1photo5 from './img/plane5.jpeg'
import proj1photo6 from './img/plane6.jpeg'
import proj1photo7 from './img/planePart1.jpeg'
import plane from './img/avion.png'
import './ProjectsPage.css'



const ProjectsPage = () => {
    return (
        <div className="container-projects">
            <Container >
                <h1>Proyectos</h1>
                <hr />
                <article>
                    <h2>Proyecto «Quijote»</h2>
                    <br />
                    <h4>MAD-1 «Rocinante»</h4>

                    <p>No ha pasado mucho desde la creación de la sección Akaflieg Madrid del Club de Vuelo pero y, sin embargo, tras un año de pruebas con proyectos más sencillos, este año comenzamos un proyecto mucho más grande y ambicioso que los demás: ¡nuestro primer avión! La influencia de otros compañeros de estudios en Alemania en diferentes Akaflieg nos ha inspirado y dado fuerzas e ilusión para intentar comenzar nuestra propia aventura como futuros ingenieros aeroespaciales.</p>
                    <Image src={plane} className="photoplane"></Image>
                    <p>Así, en colaboración con el RACT (Real AeroClub de Toledo) y la Universidad Politécnica de Madrid, comenzaremos este año a dar los primeros pasos en el diseño de nuestro primer velero, MAD-1 «Rocinante», el que esperamos que pueda servirnos como plataforma para nuevos experimentos y diseños y, por supuesto, para seguir volando.</p>

                    <p>Antes de nada, os explicaremos el origen de su nombre. Como muchos pensaréis, se trata de una idea un tanto alocada, tanto que el nombre del modelo, MAD-1, no solo es una abreviatura de “Madrid”, sino que también es un juego de palabaras por su significado en inglés (loco). Por otra parte, su apodo, “Rocinante”, recuerda al personaje literario “Don Quijote”, por ser el caballo que lo llevaba de un lado a otro sobre La Mancha (lugar donde principalmente volamos, por cierto). En resumen, un homenaje a nuestra procedencia y a la personalidad del personaje que, a su manera, también luchaba por sus sueños bajo cualquier circunstancia.</p>
                    <Row>
                        <Col xs={8}>
                            <h4>Diseño preliminar</h4>
                            <p>Lo primero que debíamos elegir es el tipo de avión que queremos y, dadas nuestras necesidades y la información a la que teníamos acceso, decidimos que un avión de entrenamiento con dos plazas y veinte metros de envergadura sería un buen comienzo.</p>
                            <p>Con esto en mente, empezamos a utilizar herramientas como <a href="https://web.mit.edu/drela/Public/web/xfoil/">XFoil</a>, <a href="http://www.xflr5.tech/xflr5.htm">XFLR5</a> o <a href="http://web.mit.edu/drela/Public/web/avl/">AVL</a> para determinar las características principales de nuestro avión. Usando datos de otros aviones similares como referencia llegamos a la primera iteración de nuestro «Rocinante», quedando algo parecido a esto:</p>
                        </Col>
                        <Col>
                            <Image src={quijote2}></Image>
                        </Col>
                    </Row>
                </article>
                <hr />
                <article>
                    <h2>Plataforma de ensayos en vuelo</h2>
                    <br />
                    <p>
                        <Row>
                            <p>Con este proyecto esperamos diseñar un sistema capaz de registrar información sobre la posición de la aeronave y el aire que la rodea. En concreto, intentaremos utilizar estos datos para detectar la presencia de corrientes de aire ascendente, lo que nos permitiría desarrollar algoritmos que prolonguen la autonomía de vehículos aéreos tales como RPAS.</p>
                        </Row>
                        <Row>
                            <Col>
                                <Image Style={`width:300px`} src={raspberryImg}></Image>

                            </Col>
                            <Col xs={9}>
                                <p>El sistema está compuesto por un módulo central que, empleando una Raspberry Pi 3 model B, coordina y almacena la información de vuelo obtenida mediante una IMU (GY-80) y otros sensores situados en dos pods laterales sobre las alas. Estos pods transmiten los datos obtenidos mediante un emisor BTLE HM-10.</p>
                                <p>
                                    Los datos obtenidos serán analizados empleando programas como Matlab, con los que podremos visualizar la trayectoria seguida por el avión gracias a la información que nos proporcione la IMU.
                                </p>
                            </Col>
                        </Row>
                        <Row>

                        </Row>
                    </p>
                </article>
                <hr />
                <article>
                    <h2>Simulador de vuelo a vela</h2>
                    <br />
                    <section>
                        <Row>
                            <Col xs={6}>

                                <p className="relato">"25 de julio de 2012 a las 17.30h locales. La aeronave matriculada como EC-GND se dispone a aterrizar por la cabecera 10 del Aeródromo de la Mancha. Cuando se encuentra en el tramo de viento en cola notifica que vuela muy alto y que realizará otro circuito. Tras terminar éste último y estimar que su posición es demasiado baja, aborta el aterrizaje en la pista, tomando fuera de campo, resultando ileso el piloto pero quedando la aeronave muy dañada."</p>
                                <p>Esta historia daba comienzo a uno de los primeros proyectos del Club: la rehabilitación de un planeador Grob G102 Astir CS para servir como simulador de vuelo a vela. Una vez analizamos los restos del avión, separamos la parte delantera del fuselaje y procedimos a la reparación del morro, el cual había recibido un fuerte impacto.</p>
                            </Col>
                            <Col>
                                <Image Style={`width:300px`} src={proj1photo1}></Image>
                            </Col>
                            <Col>
                                <Image Style={`width:220px`} src={proj1photo2}></Image>
                            </Col>
                        </Row>
                    </section>
                    <section>
                        <Row>
                            <Col>
                                <Image src={proj1photo3} className="arreglo"></Image>
                                <Image src={proj1photo4} className="arreglo"></Image>
                            </Col>
                            <Col xs={7}>
                                <p>Fueron necesarias muchas horas de trabajo, lijando y dando forma a la nueva fibra de vidrio, pero el resultado final fue inmejorable.</p>
                                <p>Una vez que el avión (o lo que queda de él) hubo recuperado su apariencia original, llegó la hora de añadir la electrónica. Como este cockpit no iba a volver a volar, todos los mandos debían ser sustituidos por sensores capaces de detectar los inputs del piloto, creando una interfaz con el software del simulador. Así, procedimos a instalar los diferentes potenciómetros encargados de medir las deflexiones de alerones, profundidad y timón, además del uso de los aerofrenos. Todas estas señales se redirigieron al servidor donde se estaba ejecutando el software, finalizando así la primera fase de desarrollo de este proyecto.</p>
                            </Col>
                        </Row>
                    </section>
                    <section>
                        <p>Como segunda etapa, el proyecto continúa con la adición de dos motores eléctricos capaces de mover el cockpit, mejorando la sensación de realismo desde dentro del simulador, aunque tendremos que esperar algunos meses todavía para ver los resultados definitivos.</p>
                        <Row>
                            <Col>
                                <Image src={proj1photo5} className="simulador"></Image>
                            </Col>
                            <Col>
                                <Image src={proj1photo6} className="simulador"></Image>
                            </Col>
                            <Col>
                                <Image src={proj1photo7} className="simulador"></Image>
                            </Col>
                        </Row>
                    </section>
                </article>
            </Container>
        </div>
    )
}
export default ProjectsPage