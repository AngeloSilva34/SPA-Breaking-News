import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../Context/UserContext"
import Cookies from "js-cookie"

import { ProfileAvatar, ProfileBackground, ProfileContainer, ProfileHeader, ProfileUser, ProfileIconEdit, ProfileActions, ProfileIconAdd, ProfileNews } from "./ProfileStyled"
import { Card } from '../../components/Card/Card'
import { Link } from "react-router-dom"

import { getNewsByUser } from "../../services/newsServices"
import { userLogged } from "../../services/userServices"

export function Profile() {
    const { user, setUser } = useContext(UserContext)
    const [news, setNews] = useState()

    async function findAllNewsByUser() {
        const newsResponse = await getNewsByUser()
        setNews(newsResponse.data.results)
    }

        async function findUserLogged() {
        try {
            const response = await userLogged()
            setUser(response.data)

        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        findAllNewsByUser()

        if(Cookies.get('refreshUser')) {
            findUserLogged()
            Cookies.remove('refreshUser')
        }
    }, [])

    return (
        <ProfileContainer>

            <ProfileHeader>

                <ProfileIconEdit >
                    <Link to="/menage-profile" style={{ color: '#0bade3' }}>
                        <i className="bi bi-pencil-square" ></i>
                    </Link>
                </ProfileIconEdit>

                <ProfileBackground src={user.background} alt='Plano de fundo do usuário.' />

                <ProfileUser >
                    <ProfileAvatar src={user.avatar} alt='Foto do usuário.' />
                    <h2>{user.name}</h2>
                    <h3>{user.username}</h3>
                </ProfileUser>

                <ProfileActions>
                    <Link to="/manage-news/add/news">
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
