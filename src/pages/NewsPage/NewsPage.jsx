import { Button, Container, Modal, Row, Col } from 'react-bootstrap'
import CreateNew from '../../components/News/CreateNew/CreateNew'
import newsServices from '../../services/news.service'
import { AuthContext } from '../../context/auth.context'
import { useState, useEffect, useContext } from 'react'
import NewsList from '../../components/News/NewsList/NewsList'
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner' 

function ListNews() {
    const [news, setNews] = useState([])
    const [showModal, setShowModal] = useState(false)

    useEffect(() => { loadNews() }, [])

    const { isLoggedIn, user, logOutUser } = useContext(AuthContext)
    const handleModalClose = () => setShowModal(false)
    const handleModalOpen = () => setShowModal(true)

    const loadNews = () => {

        newsServices
            .getAllNews()
            .then(({ data }) => setNews(data))
            .catch(err => console.log(err))
    }
    return (
        <>
            <Container className="mt-4">
                <Row className=" mb-5 justify-content-space-between">
                    <Col md={8}>
                        <h1>Noticias</h1>
                    </Col>
                    <Col md="auto">
                        { user?.role === 'ADMIN' && <Button  className="justify-content-end" onClick={ handleModalOpen }>+ Crear noticia</Button> }
                    </Col>
                </Row>
                <Row>
                    { !news.length ? <LoadingSpinner /> : <NewsList news={news} />}
                </Row>
            </Container>
            <Modal show={showModal} onHide={handleModalClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Crear noticia</Modal.Title>
                </Modal.Header >
                <Modal.Body>
                    <CreateNew />
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ListNews