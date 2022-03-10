import { useContext, useState } from 'react'
import { Card, Container, Button, Row, Col, Image, Modal } from 'react-bootstrap'

import { AuthContext } from '../../context/auth.context'
import EditProfileForm from './EditProfileForm'

import './Profile.css'


const Profile = ({ username, imageURL, aboutMe, flightHours, email, refreshProfile }) => {

    const { user } = useContext(AuthContext)
    const [showModal, setShowModal] = useState(false)

    const handleModalClose = () => setShowModal(false)
    const handleModalOpen = () => setShowModal(true)

    return (
        <Container className='profile-page'>
            <Row>
                <Col className='grey'>

                    <div class="container ">
                        <div class="avatar-flip">
                            <img src={imageURL} height="150" width="150" />
                            <img src="https://media4.giphy.com/media/WGqaq4lbMeh1e/giphy.gif?cid=ecf05e47lykkh2htnceccqwsftfc1vbzhbt7pxk07meank8c&rid=giphy.gif&ct=g" height="150" width="150" />
                        </div>
                        <h2>Perfil de {username}</h2>
                        <hr />
                        <p>Sobre mí : {aboutMe}</p>
                        <p>Email : {email}</p>
                        <p>Horas de vuelo : {flightHours}</p>
                        <Button className='bg-blue' onClick={handleModalOpen}>Editar</Button>
                    </div>

                </Col>

            </Row>
            <Modal className='' show={showModal} onHide={handleModalClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Editar perfil</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditProfileForm closeModal={handleModalClose} refreshProfile={refreshProfile} />
                </Modal.Body>
            </Modal>
        </Container >

    )
}

export default Profile