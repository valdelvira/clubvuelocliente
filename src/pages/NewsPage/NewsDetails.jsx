import { Button, Container, Row, Stack, Image, Col } from 'react-bootstrap'
import newsServices from '../../services/news.service'
import { AuthContext } from '../../context/auth.context'
import { useState, useEffect, useContext } from 'react'
import CommentForm from '../../components/News/CommentForm/CommentForm'
import './NewsDetails.css'
import { useParams, Link, useNavigate } from 'react-router-dom'


function NewsDetails() {
    const [theNew, setTheNew] = useState([])
    const { user } = useContext(AuthContext)
    const { _id } = useParams()
    const navigate = useNavigate()
    useEffect(() => { loadNews() }, [])

    const deleteTheNews = () => {
        newsServices
            .deleteTheNews(_id)
            .then(() => navigate('/news'))
            .catch(err => console.log(err))
    }

    const deleteComment = (comment_id) => {

        newsServices
            .deleteComment(comment_id, _id)
            .then(() => loadNews())
            .catch(err => console.log(err))
    }

    const putEditNews = () => {
        newsServices
            .putEditNews(_id)
            .then(() => navigate('/news'))
            .catch(err => console.log(err))
    }

    const loadNews = () => {

        newsServices
            .getTheNew(_id)
            .then(({ data }) => setTheNew(data))
            .catch(err => console.log(err))
    }
    return (
        <>
            <Container className="containerNews single-news">
                <Row>
                    <Col sm={8}>
                        <Image src={theNew.imgURL} alt={theNew.title} className="imageNews" />
                        <h1>{theNew.title}</h1>

                        <section>{theNew.description}</section>
                        <Stack className='mb-3' gap={3}>
                            {user?.role === 'ADMIN' && <Link className='btn btn-warning' style={{ width: '30%' }} to={`/news/${theNew._id}/edit`}>Editar</Link>}
                            {user?.role === 'ADMIN' && <Button variant="danger" style={{ width: '30%' }} onClick={deleteTheNews}>Borrar</Button>}
                        </Stack>

                    </Col>
                    <Col sm={4} className="second-column">
                        <div>
                            <CommentForm newsId={theNew._id} loadNews={loadNews} />
                        </div>
                        <div className='commentsNews'>
                            {
                                theNew.comments?.map(elem => {
                                    return (
                                        <span className="my-4" key={elem._id}>
                                            <p className='ownerComment'>Escrito por {elem.owner?.name}:</p>
                                            <q> {elem.comment}</q>
                                            {user?.role === 'ADMIN' && <Button className="my-4 buton-eliminar" variant="danger" style={{ width: '40%' }} onClick={() => deleteComment(elem._id)}>Borrar comentario</Button>}
                                        </span>)
                                })
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )


}

export default NewsDetails