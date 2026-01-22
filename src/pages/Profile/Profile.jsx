import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../Context/UserContext"

import { ProfileAvatar, ProfileBackground, ProfileContainer, ProfileHeader, ProfileUser, ProfileIconEdit, ProfileActions, ProfileIconAdd, ProfileNews } from "./ProfileStyled"
import { Card } from '../../components/Card/Card'
import { Link } from "react-router-dom"

import { getNewsByUser } from "../../services/newsServices"

export function Profile() {
    const { user } = useContext(UserContext)
    const [news, setNews] = useState()

    async function findAllNewsByUser() {
        const newsResponse = await getNewsByUser()
        console.log(newsResponse.data.results)
        setNews(newsResponse.data.results)
    }

    useEffect(() => {
        findAllNewsByUser()
    }, [])

    return (
        <ProfileContainer>

            <ProfileHeader>

                <ProfileIconEdit >
                    <i className="bi bi-pencil-square" ></i>
                </ProfileIconEdit>

                <ProfileBackground src={user.background} alt='Plano de fundo do usuário.' />

                <ProfileUser >
                    <ProfileAvatar src={user.avatar} alt='Foto do usuário.' />
                    <h2>{user.name}</h2>
                    <h3>{user.username}</h3>
                </ProfileUser>

                <ProfileActions>
                    <Link to="/manage-news/add">
                        <ProfileIconAdd>
                            <i className="bi bi-plus-circle"></i>
                        </ProfileIconAdd>
                    </Link>

                </ProfileActions>

            </ProfileHeader>

            <ProfileNews>
                {news ? (
                    news.map((item) => {
                        return (
                            <Card
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                text={item.text}
                                banner={item.banner}
                                likes={item.likes}
                                comments={item.comments}
                                actions={true}
                            />
                        );
                    })
                ) : (
                    <h3>Você ainda não criou nenhuma noticia...</h3>
                )}
            </ProfileNews>

        </ProfileContainer>
    )
}
