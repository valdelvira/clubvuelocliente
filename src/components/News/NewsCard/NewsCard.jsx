import { Card, Button, Col, Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import './NewsCard.css'

const NewsCard = ({ _id, title, description, imgURL }) => {
    return (
        <Container className="news-card">
            <Col>
                <div class="a-box ">
                    <div class="img-container ">
                        <div class="img-inner">
                            <div class="inner-skew">
                                <img src={imgURL} />
                            </div>
                        </div>
                    </div>
                    <div class="text-container">
                        <h3>{title}</h3>
                        <div>
                            {description?.substring(0, 200)}
                        </div>
                        <Link to={`/news/${_id}`}>
                            <Button variant="primary">Leer más</Button>
                        </Link>
                    </div>
                </div>
            </Col>
        </Container>
    )
}
export default NewsCard