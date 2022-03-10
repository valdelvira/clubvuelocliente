import { Col, Container, Row, Image } from 'react-bootstrap'
import './SponsorsPage.css'
import upm from './images/upm.jpeg'
import etsiae from './images/etsiae.png'
import rat from './images/rat.jpeg'

const SponsorsPage = () => {


    return (
        <Container className='containerSponsors'>
            <h1>Sponsors</h1>
            <hr />
            <p>Sin la ayuda de otras organizaciones, el desarrollo de nuestros proyectos sería imposible.</p>
            <br />
            <h3>Patrocinadores principales</h3>
            <p>Son los más comprometidos con nuestra actividad y con los que mantenemos un contacto más cercano. Nos permiten utilizar sus instalaciones y nos facilitan sus herramientas y conocimientos.</p>
            <h5>Universidad Politécnica de Madrid – ETSIAE</h5>
            <Row>
                <Col md={{ span: 5, offset: 1 }}>
                    <Image src={upm} className="sponsors" ></Image>
                </Col>
                <Col md={{ span: 3, offset: 1 }}>
                    <Image src={etsiae} className="sponsors2" ></Image>
                </Col>
            </Row>
            <p>Como asociación universitaria perteneciente a la UPM y, más en concreto, a la Escuela Técnica Superior de Ingeniería Aernonáutica y del Espacio, su apoyo es muy importante para nosotros, ayudándonos con un local, participación en eventos, financiación y herramientas especializadas.</p>
            <h5>Real Aeroclub de Toledo</h5>
            <Row>
                <Col md={{ span: 3, offset: 5 }}>
                    <Image src={rat} className="sponsors"></Image>
                </Col>
            </Row>
            <p>Nuestra supervivencia sería imposible sin el acuerdo con el Real Aeroclub de Toledo: nos forman como pilotos, en operaciones de pista y también en cuestiones de mantenimiento y reparacion de aeronaves, de forma práctica y teórica. Por otra parte, también nos prestan sus aviones e instalaciones.</p>
            <hr />
            <hr />
            <h3>Apóyanos</h3>
            <p>Para ayudarnos a mantener el club, los proyectos y la innovación en el sector de la aviación puedes colaborar de muchas maneras. Nuestro grupo está formado por estudiantes universitarios, aspirantes a ingenieros y graduados, con muchas ganas de aprender y trabajar. Tu aportación contribuirá en nuestra formación profesional. Además, dará a tu empresa visibilidad en círculos universitarios en los que quizás no la conozcan. Por supuesto, aparecerá como patrocinador en nuestros proyectos.</p>
            <br />
            <Row>
                <Col>
                    <h5>Patrocinio</h5>
                    <p>Puedes patrocinarnos financieramente, con apoyo logístico o mediante la donación de material. Será publicitado en todos los medios que posee el club (campus, página web, redes sociales y aviones) y podrá darse a conocer en las diferentes ferias y eventos (AirSim Meeting, AULA, Sommertreffen…) en las que participamos a lo largo del año.</p>
                </Col>
                <Col>
                    <h5>Donación de material</h5>
                    <p>Cuando hablamos de aviación se tiende a pensar en el uso de elementos complejos como la fibra de carbono. No obstante, tan imprescindibles son estos como los más básicos, ya sean tornillos, lubricante, sensores o cascos para seguridad. </p>
                    <p>Toda donación es bienvenida, ya que somos una asociación sin ánimo de lucro.</p>
                </Col>
                <Col>
                    <h5>Donación económica</h5>
                    <p>Al ser un club perteneciente a una universidad, recibimos un pequeño donativo anual por parte de la misma para continuar con la investigación y desarrollo de los proyectos. No obstante, esta es en ocasiones escasa para la compra de los materiales necesarios. Agradecemos mucho las donaciones monetarias.</p>
                </Col>
            </Row>
        </Container>
    )
}
export default SponsorsPage