import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import eventService from "../../services/event.service"
import { Form, Button, Container } from 'react-bootstrap'
import uploadService from "../../services/upload.service"
<<<<<<< HEAD
import './EditEvent.css'

=======
import './EditEventForm.css'
>>>>>>> 8594c9fd7b3061a5f0f250fc02f3ff93d397582c

const EditEventForm = () => {

    const [eventForm, setEventForm] = useState({
        title: "",
        description: "",
        imgURL: ""
    })

    const { id } = useParams()
    const navigate = useNavigate()
    const [loadingImage, setLoadingImage] = useState(false)


    useEffect(() => {
        loadEvent()
    }, [])

    const loadEvent = () => {
        eventService
            .getEditEvent(id)
            .then(({ data }) => {
                setEventForm(data)
            })
            .catch(err => console.log(err))
    }

    const handleInputChange = e => {
        const { name, value } = e.target
        setEventForm({
            ...eventForm,
            [name]: value
        })
    }

    const uploadNewImage = e => {

        const uploadData = new FormData()
        uploadData.append('imageData', e.target.files[0])

        uploadService
            .uploadImage(uploadData)
            .then(({ data }) => {
                setEventForm({ ...eventForm, imgURL: data.cloudinary_url })
            })
            .catch(err => console.log(err))
    }

    function handleSubmit(e) {

        e.preventDefault()

        eventService
            .editEvent(id, eventForm)
            .then(() => {
                navigate('/events')
            })
            .catch(err => console.log("Error en actualización de evento", err))
    }

    return (
<<<<<<< HEAD
        <Form onSubmit={handleSubmit} className="edit-form" >
            <Form.Group className="mb-3">
                <Form.Label className="text-edit-event">Título del evento</Form.Label>
                <Form.Control type="text" name="title" value={eventForm?.title} onChange={handleInputChange} />
            </Form.Group>
            <hr />
            <Form.Group className="mb-3">
                <Form.Label className="text-edit-event">Descripción</Form.Label>
                <Form.Control type="text" name="description" value={eventForm?.description} onChange={handleInputChange} />
            </Form.Group>
            <hr />
            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label className="text-edit-event">Foto del evento</Form.Label>
                <Form.Control type="file" name='imgURL' onChange={uploadNewImage} />
            </Form.Group>

            <Button className="bg-blue" disabled={loadingImage}>{loadingImage ? 'Espere...' : 'Editar evento'}</Button>
        </Form >
=======
        <Container className="editFormEvent">
            <Form onSubmit={handleSubmit} >
                <Form.Group className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" name="title" value={eventForm?.title} onChange={handleInputChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" name="description" value={eventForm?.description} onChange={handleInputChange} />
                </Form.Group>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Foto del evento</Form.Label>
                    <Form.Control type="file" name='imgURL' onChange={uploadNewImage} />
                </Form.Group>

                <Button variant="dark" type="submit" style={{ width: '30%' }} disabled={loadingImage}>{loadingImage ? 'Espere...' : 'Editar evento'}</Button>
            </Form >
        </Container>
>>>>>>> 8594c9fd7b3061a5f0f250fc02f3ff93d397582c

    )
}
export default EditEventForm