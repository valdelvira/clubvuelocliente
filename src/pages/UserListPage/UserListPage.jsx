import { Container, Row } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import profileService from '../../services/profile.service'
import UsersList from './../../components/UsersList/UsersList'
import LoadingSpinner from './../../components/LoadingSpinner/LoadingSpinner'

function UserListPage() {
    const [usersList, setUserList] = useState([])
    useEffect(() => { loadUserList() }, [])

    const loadUserList = () => {

        profileService
            .getAllProfiles()
            .then(({ data }) => setUserList(data))
            .catch(err => console.log(err))
    }
    return (
        <>
            <Container>
                <h1>Gestión de usuarios</h1>
                <Row>
                    { !usersList.length ? <LoadingSpinner /> : <UsersList usersList={usersList} refreshProfiles={loadUserList}/>}
                </Row>
            </Container>
        </>
    )
}

export default UserListPage