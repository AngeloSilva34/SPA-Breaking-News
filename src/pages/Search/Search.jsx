import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getSearchNews } from "../../services/newsServices"
import { Card } from "../../components/Card/Card"
import { ContainerResults, SearchNews, TextResults } from "./SearchStyled"

export default function Search() {
    const { title } = useParams()
    const [news, setNews] = useState([])

    async function search() {
        try {
            const newsSearch = await getSearchNews(title)
            setNews(newsSearch.data.results)
            console.log(newsSearch.data.results)

        } catch (err) {
            console.log(err)
            setNews([])
        }
    }

    useEffect(() => {
        search()
    }, [title])

    return <ContainerResults>
        <TextResults>
            <span>
                {news.length ?
                `Encontramos ${news.length} ${news.length > 1 ? 'resultados' : 'resultado'} para: ` :
                `Não encontramos resultados para: `}
                <h2>{title}</h2>
            </span>
        </TextResults>

        <SearchNews>
            {news.map((item) => (
                <Card
                    key={item.id}
                    title={item.title}
                    text={item.text}
                    banner={item.banner}
                    likes={item.likes}
                    comments={item.comments}
                />
            ))}
        </SearchNews>
    </ContainerResults>
}