import { CardBody, CardContainer, CardFooter, CardHeader } from './CardStyled'
import TextLimit from '../TextLimit/TextLimit'
import { Link, Links } from 'react-router-dom'

export function Card({ top, title, text, likes, comments, banner, actions = false, id }) {
    return (
        <CardContainer>
            <CardBody>
                <div>
                    <CardHeader top={top}>
                        {actions &&
                            <span>
                                <Link to={`/manage-news/edit/${id}`} style={{ textDecoration: 'none' }} >
                                    <i className="bi bi-pencil-square" />
                                </Link>
                                <Link to={`/manage-news/delete/${id}`} style={{ textDecoration: 'none' }} >
                                    <i className="bi bi-trash3" />
                                </Link>
                            </span>
                        }
                        <h2>{title}</h2>
                        <TextLimit text={text} limit={150} />
                    </CardHeader>

                    <CardFooter>
                        <section>
                            <i className="bi bi-hand-thumbs-up"></i>
                            <span>{likes?.length}</span>
                        </section>

                        <section>
                            <i className="bi bi-chat"></i>
                            <span>{comments?.length}</span>
                        </section>
                    </CardFooter>

                </div>
                <img src={banner} alt="News banner" />
            </CardBody>


        </CardContainer>
    )
}
