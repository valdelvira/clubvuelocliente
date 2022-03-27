import { Container, Row, Col } from 'react-bootstrap'
import MeteoWindy from '../../components/MeteoWindy/MeteoWindy'
import './MeteoPage.css'

const MeteoPage = () => {
    return (
        <Container className='meteoContainer'>
            <h1 className='center'>Meteo</h1>
            <hr />
            <Row className='meteo-container'>
                <Col >
                    <h3>TopMeteo</h3>
                    <p>En <a href='https://vfr.topmeteo.eu/en-gb/' target="_blank">TopMeteo</a> (inglés) encontrarás mucha información imprescindible para la práctica de deportes aéreos como el vuelo a vela o el ala delta.</p>
                    <h3>AEMET</h3>
                    <p>La Agencia Estatal de Meteorología, mediate su servicio <a href="http://ama.aemet.es/" target="_blank">AMA</a> (Autoservicio Meteorológico Aeronáutico), publica información muy útil para cualquier piloto.</p>
                    <iframe className='aemet' name="iframe_aemet_id33044" width="100%" height="100%" tabIndex="0" id="iframe_aemet_id33044" src="https://www.aemet.es/es/eltiempo/prediccion/municipios/mostrarwidget/lillo-id45084?w=g3p01111111ohmffffffw547z296x4f86d9t95b6e9r1s8n2" frameBorder="0" scrolling="no"></iframe>
                </Col>
                <Col>
                    <h3 className='center'>Windy</h3>
                    <MeteoWindy className="windyAPI" />
                </Col>
            </Row>
        </Container>
    )
}

export default MeteoPage
