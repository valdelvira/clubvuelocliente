import { Card, Button, Col, Modal, Stack, Container } from "react-bootstrap"
import { useState, useContext, useEffect } from "react"
import '../../pages/EventsPage/EventsPage.css'
import eventService from "../../services/event.service"
import { AuthContext } from "../../context/auth.context"
import { Navigate, Link } from 'react-router-dom'
import './EventCard.css'


const EventCard = ({ title, description, imgURL, participants, _id, refreshEvents }) => {
    const [showModal, setShowModal] = useState(false)

    const { isLoggedIn, user } = useContext(AuthContext)

    const handleModalClose = () => setShowModal(false)
    const handleModalOpen = () => setShowModal(true)


    const deleteEvent = () => {
        eventService
            .deleteEvent(_id)
            .then(() => {
                handleModalClose()
                refreshEvents()
            })
            .catch(err => console.log(err))
    }

    const joinEvent = () => {
        eventService
            .joinEvent(_id)
            .then(() => {
                handleModalClose()
                refreshEvents()
            })
            .catch(err => console.log(err))
    }
    const popEvent = (quit_id) => {
        eventService
            .quitEvent(_id, quit_id)
            .then(() => {
                handleModalClose()
                refreshEvents()
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <Col key={_id}>
                <Card className='EventCard' style={{ width: '18rem' }}>
                    <Card.Img src={imgURL} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <Button variant="primary" onClick={handleModalOpen}>Detalles</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Modal show={showModal} onHide={handleModalClose} size="lg" >

                    <Container>
                <Modal.Title>Detalles del evento</Modal.Title>

                <Modal.Body>
                    <Card style={{ width: '20 rem' }}>
                        <Card.Img src={imgURL} />
                        <Card.Body>
                            <Card.Title  key={_id}>{title}</Card.Title>
                            <Card.Text>
                                {description}
                                <hr/>
                                {
                                    participants.some(elem => elem?._id === user?._id) ? 
                                    <Button variant="warning" onClick={()=>popEvent(user?._id)}>Anular</Button>
                                    :
                                    <Button variant="primary" onClick={joinEvent}>Unirse</Button>
                                }
                                <hr></hr>
                                <span className="big">Listado de participantes</span>
                               
                                {
                                    isLoggedIn ?
                                    participants && participants.map(elem => {

                                        return (
                                            <>
                                                <span  key={elem?._id} className="participantCard">
                                                    <img src={elem?.imageURL} className="userPhoto" alt="user image"/>
                                                    <span>{elem?.name} {elem?.lastname}
                                                    { user?.role === 'ADMIN' && <Button variant="warning" onClick={()=>popEvent(elem?._id)}>Anular</Button> }
                                                    </span>
                                                </span>
                                                <hr/>
                                            </>
                                        )
                                    })
                                    :
                                    null
                                }
                            </Card.Text>
                            <Stack gap={3}>
                                { user?.role === 'ADMIN' && <Button variant="danger" onClick={deleteEvent}>Borrar evento</Button> }
                                <Link to={`/events/${_id}/edit`}>
                                    { user?.role === 'ADMIN' && <Button variant="warning">Editar </Button> }
                                </Link>
                            </Stack>
                        </Card.Body >
                    </Card >
                </Modal.Body >
                    </Container>

            </Modal >
        </>
    )
}
export default EventCard