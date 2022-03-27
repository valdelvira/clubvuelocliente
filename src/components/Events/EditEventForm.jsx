import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import eventService from "../../services/event.service"
import { Form, Button } from 'react-bootstrap'
import uploadService from "../../services/upload.service"
import './EditEvent.css'


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

    )
}
export default EditEventForm