import { Card, Button, Col, Stack } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import profileService from '../../services/profile.service'

const UserCard = ({ _id, name, lastname, email, refreshProfiles, role }) => {

    const deleteProfile = id => {
        profileService
            .deleteProfile(id)
            .then(()=>refreshProfiles())
            .catch(err => console.log(err))
    }

    const changeRole = (id, role) => {
 
        profileService
            .editRoleProfile(id, {role})
            .then(() => refreshProfiles())
            .catch(err => console.log(err))
    }

    return (
        <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title><Link to={`/profile/${_id}`}>{name }{ lastname }</Link></Card.Title>
                    <Card.Text>
                        { email } <br/>Tipo de usuario: {role}
                    </Card.Text>
                        <Stack gap={3}>
                            <Button variant="danger" onClick={() => deleteProfile(_id) }>Eliminar</Button>
                            {
                                role === 'ADMIN' ?
                                <Button variant="warning" onClick={() => changeRole(_id,'USER' ) }>Hacer usuario</Button>
                                :
                                <Button variant="warning" onClick={() => changeRole(_id, 'ADMIN' ) }>Hacer administrador</Button>
                            }
                        </Stack>
                </Card.Body>
            </Card>
        </Col>
    )
}
export default UserCard