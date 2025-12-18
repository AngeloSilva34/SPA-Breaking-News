import { useState, useEffect } from "react";

import { Card } from "../../components/Card/Card";
import Navbar from "../../components/Navbar/Navbar";
import { HomeBody } from "./HomeStyled";
import { getAllNews } from "../../services/newsServices";

export default function Home() {

    const [news, setNews] = useState([])

    async function findAllNews() {
        const response = await getAllNews()
        setNews(response.data.results)
    }

    useEffect(() => {
        findAllNews()
    }, [])

    return (
        <>
            <Navbar />
            <HomeBody>
                {news.map((item, index) => <Card key={index} news={item} />)}
            </HomeBody>
        </>
    )
}
