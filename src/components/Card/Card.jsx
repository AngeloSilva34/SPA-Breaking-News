import { CardBody, CardContainer, CardFooter } from './CardStyled'
import TextLimited from '../TextLimit/TextLimit'

export function Card({ news }) {
    return (
        <CardContainer>
            <CardBody>
                <div>
                    <h2>{news.title}</h2>
                    <img src={news.banner} alt="News banner" />
                </div>
                <TextLimited text={news.text} limit = {150} />
            </CardBody>

            <CardFooter>
                <div>
                    <i className="bi bi-hand-thumbs-up"></i>
                    <span>{news.likes.length}</span>
                </div>

                <div>
                    <i className="bi bi-chat"></i>
                    <span>{news.comments.length}</span>
                </div>
            </CardFooter>
        </CardContainer>
    )
}
