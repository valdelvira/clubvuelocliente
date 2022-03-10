import { Container, Row, Col } from 'react-bootstrap'
import ContactForm from '../../components/ContactForm/ContactForm'
import Map from "../../components/Map/Map"
import './ContactPage.css'


function ContactPage() {

    const locationSede = {
        address: 'Plaza del Cardenal Cisneros 3, 28040 (Madrid)',
        lat: 40.44121632974322,
        lng: -3.724392058129775,
    }

    const locationAerodromo = {
        address: 'Aeródromo Municipal, Ctra. el Romeral, s/n, 45870 Lillo, Toledo',
        lat: 39.71695537824837,
        lng: -3.3158674423294583,
    }

    return (
        <Container className='contactContainer'>
            <Row className="justify-content-md-center">

                <h2>¿Dónde estamos?</h2>
                <Col md={6}>
                    <section>
                        <h5>Lunes – Viernes</h5>
                        <p className='location'>Pza. Cardenal Cisneros 3, 28040 Madrid</p>
                        <p> Nuestro local se encuentra en la Escuela Técnica Superior de Ingeniería Aeroespacial (ETSIAE) de la UPM, Plaza del Cardenal Cisneros 3, 28040 (Madrid).</p>
                        <ul>
                            <li>Líneas de metro: 6 (Moncloa, Ciudad Universitaria), y 3 (Moncloa).</li>
                            <li>Líneas EMT: 82, 132, 46, 83, 133, 160, 161, 162, G y U.</li>
                        </ul>
                        <p> Nos puedes visitar en el local 164 (debajo de cafetería).</p>

                    </section>
                </Col>
                <Col md={6}>
                    <section>
                        <h5>Fines de semana</h5>
                        <p className='location'>Aeródromo Municipal. Ctra. el Romeral s/n, 45870 Lillo, Toledo</p>
                        <p>Sin embargo, nuestros aviones están en el aeródromo de Lillo, Toledo, a una hora aproximadamente desde Madrid. Es aquí donde el club realiza toda su actividad de vuelo y la mayor parte de las tareas de mantenimiento.</p>
                    </section>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Map location={locationSede} zoomLevel={17} />
                </Col>
                <Col>
                    <Map location={locationAerodromo} zoomLevel={17} />
                </Col>
            </Row>
            <h1>Contacta con nosotros</h1>

            <Row className="justify-content-md-center">
                <Col md={5}>
                    <p>Si tienes cualquier duda, mándanos un e-mail y trataremos de responderte lo antes posible.</p>
                    <ContactForm />
                </Col>
            </Row>

        </Container>
    )
}

export default ContactPage