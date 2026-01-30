import { useForm } from "react-hook-form"
import { useContext} from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import Cookies from "js-cookie"

import { UserContext } from "../../../Context/UserContext"
import { editPerfil } from "../../../services/userServices"
import { profileSchema } from "../../../schemas/profileSchema"

import { MenageProfileContainer } from "./MenageProfileStyled"
import { Input } from "../../../components/Input/Input"
import { ErrorSpan } from "../../../components/Navbar/NavbarStyled"
import { Button } from "../../../components/Button/Button"
import { useNavigate } from "react-router-dom"

export function MenageProfile() {
    const { user } = useContext(UserContext)
    const navigate = useNavigate()

    const {
        register: registerProfile,
        handleSubmit: handleRegisterProfile,
        formState: { errors: errorsRegisterProfile }
    } = useForm({ resolver: zodResolver(profileSchema),
        values: {
            name: user?.name || "",
            avatar: user?.avatar || "",
            background: user?.background || "",
            email: user?.email || ""
        }
    })

    async function editProfile(data) {
        const response = await editPerfil(data)
        console.log(response.data.message)
        Cookies.set('refreshUser', true)
        navigate('/profile')
    }

    return (
        <MenageProfileContainer>
            <h2>Editar perfil</h2>
            <form
                onSubmit={handleRegisterProfile(editProfile, (errors) => console.log("Erros do Zod:", errors))}
            >
                <h4 >Nome</h4>
                <Input
                    type="text"
                    placeholder="Nome"
                    name="name"
                    register={registerProfile}
                />
                {errorsRegisterProfile.name && (
                    <ErrorSpan>{errorsRegisterProfile.name.message}</ErrorSpan>
                )}

                <h4 >Imagem de perfil</h4>
                <Input
                    type="text"
                    placeholder="Link da imagem de perfil"
                    name="avatar"
                    register={registerProfile}
                />
                {errorsRegisterProfile.avatar && (
                    <ErrorSpan>{errorsRegisterProfile.avatar.message}</ErrorSpan>
                )}

                <h4 >Imagem de Fundo</h4>
                <Input
                    type="text"
                    placeholder="Link da imagem de fundo"
                    name="background"
                    register={registerProfile}
                />
                {errorsRegisterProfile.background && (
                    <ErrorSpan>{errorsRegisterProfile.background.message}</ErrorSpan>
                )}

                <h4 >Email</h4>
                <Input
                    type="text"
                    placeholder="E-mail"
                    name="email"
                    register={registerProfile}
                />
                {errorsRegisterProfile.email && (
                    <ErrorSpan>{errorsRegisterProfile.email.message}</ErrorSpan>
                )}

                <Button
                    type="submit"
                    text="Atualizar"
                />
            </form>
        </MenageProfileContainer>
    )
}