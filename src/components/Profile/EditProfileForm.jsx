import { useState, useEffect, useContext } from 'react'
import { useParams } from "react-router-dom"
import { Form, Button } from 'react-bootstrap'
import profileService from '../../services/profile.service'
import uploadService from '../../services/upload.service'
import { AuthContext } from '../../context/auth.context'


const EditProfileForm = ({ closeModal, refreshProfile }) => {

    const [profileForm, setProfileForm] = useState({
        email: "",
        flightHours: "",
        aboutMe: "",
        img: ""
    })

    const { user, isLoading } = useContext(AuthContext)
    const [loadingImage, setLoadingImage] = useState(false)
    const { user_id } = useParams()

    useEffect(() => {
        user && loadProfile()
    }, [user])

    const loadProfile = () => {
        profileService
            .getProfile(user_id)
            .then(({ data }) => setProfileForm(data))
            .catch(err => console.log(err))
    }

    const handleInputChange = e => {
        const { name, value } = e.target
        setProfileForm({
            ...profileForm,
            [name]: value
        })
    }

    const uploadProfileImage = e => {

        setLoadingImage(true)

        const uploadData = new FormData()
        uploadData.append('imageData', e.target.files[0])

        uploadService
            .uploadImage(uploadData)
            .then(({ data }) => {
                setLoadingImage(false)
                setProfileForm({ ...profileForm, imageURL: data.cloudinary_url })
            })
            .catch(err => console.log(err))
    }

    function handleSubmit(e) {

        e.preventDefault()
        profileService
            .editProfile(user_id, profileForm)
            .then(() => {
                closeModal()
                refreshProfile()
            })
            .catch(err => console.log('Error en actualización de perfil', err))
    }

    return (
        <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" value={profileForm.email} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Horas de vuelo</Form.Label>
                <Form.Control type="number" name="flightHours" value={profileForm.flightHours} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Sobre mí</Form.Label>
                <Form.Control as="textarea" rows={4} type="text" name="aboutMe" value={profileForm.aboutMe} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Foto de perfil</Form.Label>
                <Form.Control type="file" name='imageURL' onChange={uploadProfileImage} disabled={loadingImage} />
            </Form.Group>

            <Button variant="dark" type="submit" style={{ width: '100%' }}>
                {loadingImage ? 'Espere...' : 'Editar perfil'}
            </Button>

        </Form>
    )
}
export default EditProfileForm