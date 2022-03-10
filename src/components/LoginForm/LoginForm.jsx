import { useState, useContext } from "react"
import { Form, Button, Alert, Stack } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import authService from "../../services/auth.service"
import { AuthContext } from './../../context/auth.context'

import './LoginForm.css'

const LoginForm = ({ closeModal }) => {

    const [LoginForm, setLoginForm] = useState({
        email: "",
        password: ""
    })

    const { storeToken, authenticateUser } = useContext(AuthContext)
    const [show, setShow] = useState(false)

    const navigate = useNavigate()

    const handleInputChange = e => {
        const { name, value } = e.target
        setLoginForm({
            ...LoginForm,
            [name]: value
        })
    }

    function handleSubmit(e) {

        e.preventDefault()

        authService
            .login(LoginForm)
            .then(({ data }) => {
                storeToken(data.authToken)
                authenticateUser()
                navigate('/')
                closeModal()
            })
            .catch(err => {
                setShow(true)
                console.log('Error en inicio sesion', err)
            })
    }

    return (
        <div className="login-form">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-4">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" value={LoginForm.email} onChange={handleInputChange} />
                </Form.Group>

                <Form.Group className="mb-4">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" name="password" value={LoginForm.password} onChange={handleInputChange} />
                </Form.Group>
                <Stack gap={4}>
                    <Button className="bg-blue">Acceder</Button>
                    {
                        show && <Alert variant="danger">Usuario o contraseña incorrecta</Alert>
                    }
                </Stack>
            </Form>
        </div >
    )
}
export default LoginForm