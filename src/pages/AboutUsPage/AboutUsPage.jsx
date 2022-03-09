import { Container, Row, Col, Image } from "react-bootstrap"
import './AboutUsPage.css'
import photo1 from './images/image1.jpeg'
import photo2 from './images/image2.jpeg'
import logo from './images/logo.png'
import photo3 from './images/image3.jpeg'
import photo4 from './images/image4.jpeg'
import photo5 from './images/image5.jpeg'


const AboutUsPage = () => {
    return (
        <Container className="aboutCointainer">
            <h1>Sobre nosotros</h1>
            <hr />
            <h5>"If flying were the language of man, soaring would be its poetry."</h5>
            <Image src={logo} className="logo"></Image>
            <div className="firstPara">
                <p>Club de Vuelo y Akaflieg basados en la Escuela Técnica Superior de Ingeniería Aeronáutica y del Espacio de la UPM.</p>

                <p>Abiertos a toda la UPM.</p>

                <p>Realizamos proyectos de ingeniería relacionados con el vuelo a vela como miembros del <a href="https://idaflieg.de/" target="_blank">Idaflieg</a>.</p>

                <p>Flota de dos planeadores propios.</p>

                <p>Realizamos mantenimiento en colaboración con el Real Aeroclub de Toledo, centro EASA part. 145.</p>

                <p>Participamos en campeonatos, teniendo en el Club pilotos que han ganado trofeos en ellos.</p>

                <p>Difundimos la cultura aeronáutica de todas las formas posibles.</p>

                <p>Colaboramos con el <a href="https://www.aeroclubdetoledo.com/contentts/" target="_blank">Real Aeroclub de Toledo</a>, <a href="https://www.sillasvoladoras.com/" target="_blank">Las Sillas Voladoras</a> y <a href="http://ulmescueladevuelo.es/" target="_blank">ULM Escuela de Vuelo</a>.</p>
            </div>
            <hr />
            <Row>
                <Col>
                    <p>El Club de Vuelo Aeronáuticos nace en 2010 en las escuelas de ingeniería aeronáutica de la UPM,
                        resucitando al club homónimo que tuvo actividad en los años 90. Somos un grupo de apasionados de la aviación en general.
                        Formado principalmente por estudiantes de Ingeniería Aeroespacial, el club está abierto a todos los centros de la UPM.
                        Por otra parte, entre los miembros del club, también contamos con pilotos profesionales ejerciendo en línea aérea e instrucción
                        en vuelo así como ingenieros trabajando en mantenimiento, consultoría, etc.</p>
                    <p>Nuestros principales objetivos son el desarrollo de proyectos aeronáuticos y la divulgación del vuelo deportivo, por lo que, entre
                        las actividades principales del club se encuentran:</p>
                    <ul>
                        <li>Desarrollo de proyectos de ingeniería</li>
                        <li>Competición de vuelo a vela</li>
                        <li>Mantenimiento de aeronaves</li>
                        <li>Simulación aérea</li>
                        <li>Promoción de la aviación</li>
                    </ul>
                </Col>
                <Col>
                    <Image src={photo1} className="image"></Image>
                </Col>

            </Row>
            <p>Actualmente puede considerarse que el Club de Vuelo UPM se divide en dos secciones. Por un lado, podemos encontrar una parte llamada igual que el club, y por otra el “Akaflieg Madrid”</p>
            <p>La sección “Club de Vuelo” está compuesta por todos los miembros del club. En ella se desarrollan todas las actividades que tienen que ver con los objetivos de divulgación aeronáutica,
                como la organización de eventos, así como la competición en campeonatos, y la simulación aérea.</p>
            <Row>
                <Col>
                    <Image src={photo2} className="images2"></Image>
                </Col>

                <Col>

                    <p>El “Akaflieg Madrid” lo compone un pequeño grupo de miembros del club. Es la parte encargada del mantenimiento de las aeronaves, así como del desarrollo de diversos proyectos de ingeniería.
                        Esta sección surge con el objetivo de imitar a los clubes de vuelo universitarios alemanes, llamados Akaflieg.</p>
                    <p>El club de vuelo dispone de 2 planeadores, uno biplaza, Schleicher K7, y otro monoplaza, Akaflieg Braunschweig SB-5B, ambos basados en el aeródromo de Lillo.</p>
                    <p>Como parte del objetivo de promover la aeronáutica, siempre tratamos de volar con un coste bajo, asequible para estudiantes. Esto lo logramos gracias al trabajo y esfuerzo de los integrantes del club,
                        facilitando el vuelo de los demás. De este modo, no solo logramos un cierto grado de autogestión, sino también una formación muy valiosa en las distintas disciplinas que conlleva la actividad de vuelo
                        (mantenimiento, instrucción, trámites administrativos, etc.). Aquellos socios que no poseen licencia, pueden volar con otro socio cualificado para ello, con el que aprenden y disfrutan del arte del vuelo.</p>
                </Col>
            </Row>
            <hr />
            <Row>
                <Col>
                    <Image src={photo3} className='planes'></Image>
                </Col>
                <Col>
                    <Image src={photo4} className="planes"></Image>
                </Col>
                <Col>
                    <Image src={photo5} className="planes"></Image>
                </Col>
            </Row>
        </Container >
    )
}



export default AboutUsPage