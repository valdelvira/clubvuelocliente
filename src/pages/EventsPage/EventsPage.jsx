import { Row, Container, Modal, Button, Col } from "react-bootstrap"
import { useEffect, useState, useContext } from "react"
import eventService from "../../services/event.service"
import EventForm from "../../components/Events/EventForm"
import EventList from '../../components/Events/EventList'
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner'
import { AuthContext } from '../../context/auth.context'

import './EventsPage.css'


const EventsPage = () => {

    const [events, setEvents] = useState([])
    const [showModal, setShowModal] = useState(false)

    const { user } = useContext(AuthContext)
    const handleModalFormClose = () => setShowModal(false)
    const handleModalFormOpen = () => setShowModal(true)

    useEffect(() => {
        loadEvents()
    }, [])

    const loadEvents = () => {
        eventService
            .getEvents()
            .then(({ data }) => setEvents(data))
            .catch(err => console.log(err))
    }

    return (
        <Container className="mt-4 events-page">
            <Row className=" mb-5">
                <Col md={8}>
                    <h1 className="center">Eventos</h1>
                </Col>
                <Col md="auto">
                    {user?.role === 'ADMIN' && <Button className="bg-blue " onClick={handleModalFormOpen}>Crear evento</Button>}
                </Col>
            </Row>
            <Row>
                {!events.length ? <LoadingSpinner /> : <EventList events={events} refreshEvents={loadEvents} />}
            </Row>

            <Modal show={showModal} onHide={handleModalFormClose} size="lg">

                <Modal.Title>Crea un evento</Modal.Title>

                <Modal.Body>
                    <EventForm closeModal={handleModalFormClose} refreshEvents={loadEvents} />
                </Modal.Body>

            </Modal>
        </Container>
    )
}
export default EventsPage