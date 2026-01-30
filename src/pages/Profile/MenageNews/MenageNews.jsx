import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";

import { AddNewsContainer } from "./MenageNewsStyled";
import { Input } from "../../../components/Input/Input";
import { Button } from "../../../components/Button/Button";
import { ErrorSpan } from "../../../components/Navbar/NavbarStyled";

import { newsSchema } from "../../../schemas/newsSchema";

import { createNews, deleteNews, editNews, getNewsById } from "../../../services/newsServices";

export function ManageNews() {
    const { action, id } = useParams()
    const navigate = useNavigate()

    const {
        register: registerNews,
        handleSubmit: handleRegisterNews,
        formState: { errors: errorsRegisterNews },
        setValue
    } = useForm({ resolver: zodResolver(newsSchema) })

    async function registerNewsSubmit(data) {
        try {
            await createNews(data)
            navigate("/profile")
        } catch (err) { console.error(err) }
    }

    async function editNewsSubmit(data) {
        try {
            await editNews(data, id)
            navigate("/profile")
        } catch (err) { console.error(err) }
    }

    async function deleteNewsSubmit() {
        try {
            await deleteNews(id)
            navigate("/profile")
        } catch (err) { console.error(err) }
    }

    async function newsById(id) {
        try {
            const { data } = await getNewsById(id)
            setValue("title", data.title)
            setValue("banner", data.banner)
            setValue("text", data.text)
        } catch (err) { console.error(err) }
    }

    useEffect(() => {
        if (action === "edit" || action === "delete") {
            newsById(id)
        }
    }, [])

    return (
        <AddNewsContainer>
            <h2>{action === "add" ? "Adicionar" : action === "edit" ? "Atualizar" : "Apagar"} notícia</h2>
            <form
                onSubmit={
                    action === 'add'
                        ? handleRegisterNews(registerNewsSubmit)
                        : action === 'edit'
                            ? handleRegisterNews(editNewsSubmit)
                            : handleRegisterNews(deleteNewsSubmit)

                }
            >
                <Input
                    type="text"
                    placeholder="Título"
                    name="title"
                    register={registerNews}
                    disabled={action === "delete"}
                />
                {errorsRegisterNews.title && (
                    <ErrorSpan>{errorsRegisterNews.title.message}</ErrorSpan>
                )}

                <Input
                    type="text"
                    placeholder="Link da imagem"
                    name="banner"
                    register={registerNews}
                    disabled={action === "delete"}
                />
                {errorsRegisterNews.banner && (
                    <ErrorSpan>{errorsRegisterNews.banner.message}</ErrorSpan>
                )}

                <Input
                    type="text"
                    placeholder="Texto"
                    name="text"
                    register={registerNews}
                    isInput={false}
                    disabled={action === "delete"}
                />
                {errorsRegisterNews.text && (
                    <ErrorSpan>{errorsRegisterNews.text.message}</ErrorSpan>
                )}

                <Button
                    type="submit"
                    text={action === "add" ? "Adicionar" : action === "edit" ? "Atualizar" : "Apagar"}
                />
            </form>
        </AddNewsContainer>
    )
}