import './MeteoWindy.css'
import { Container } from 'react-bootstrap';

import useScript from './useScriptHook'

// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const MeteoWindy = () => {

    var L = window.L;
    var windyInit = window.windyInit;


    const status1 = useScript('https://unpkg.com/leaflet@1.4.0/dist/leaflet.js')
    const status2 = useScript("https://api.windy.com/assets/map-forecast/libBoot.js")

    const options = {
        key: 'IZd7hCFpSvtoCtbSkoJENO0MdLJFsUuO',
        verbose: true,
        lat: 39.716361347655884,
        lon: - 3.3161177261788315,
        zoom: 5
    }

    windyInit(options, windyAPI => {

        const { map } = windyAPI;

        L.popup()
            .setLatLng([39.716361347655884, - 3.3161177261788315])
            .setContent('Aeródromo de Lillo')
            .openOn(map);
    })

    return (
        <Container>
            <div id="windy" style={{
                width: '50%',
                height: '600px'
            }}
            ></div>
        </Container>

    )
}

export default MeteoWindy