import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import Cookies from 'js-cookie'

import { Button } from "../../components/Button/Button"
import { ErrorSpan } from "../../components/Navbar/NavbarStyled"
import { Input } from "../../components/Input/Input"
import { AuthContainer, Section } from "./AuthenticationStyled"

import { signinSchema } from "../../schemas/signinSchema"
import { signupSchema } from "../../schemas/signupSchema"
import { signin, signup } from "../../services/userServices"

function Authentication() {
    //logar
    const {
        register: registerSignin,
        handleSubmit: handleSubmitSignin,
        formState: { errors: errorsSignin }
    } = useForm({ resolver: zodResolver(signinSchema) })

    //cadastrar
    const {
        register: registerSignup,
        handleSubmit: handleSubmitSignup,
        formState: { errors: errorsSignup }
    } = useForm({ resolver: zodResolver(signupSchema) })

    const navigate = useNavigate()

    async function inHandleSubmit(data) {
        try {
            const response = await signin(data)
            console.log(response)
            Cookies.set('token', response.data, {expires: 1})
            navigate('/')

        } catch(err){
            console.log(err)
        }
    }

    async function upHandleSubmit(data) {
        try{
            const response = await signup(data)
            Cookies.set('token', response.data.token, {expires: 1})
            navigate('/')

        } catch (err){console.log(err)}
    }


    return <AuthContainer>
        <Section type='signin'>
            <h2>Entrar</h2>
            <form onSubmit={handleSubmitSignin(inHandleSubmit)} >

                <Input type="email" placeholder="E-mail" name="email" register={registerSignin} ></Input>
                {errorsSignin.email && <ErrorSpan> {errorsSignin.email.message} </ErrorSpan>}

                <Input type="password" placeholder="Senha" name="password" register={registerSignin} ></Input>
                {errorsSignin.password && <ErrorSpan> {errorsSignin.password.message} </ErrorSpan>}

                <Button type="submit" text="Entrar" ></Button>
            </form>
        </Section>


        <Section type='signup'>
            <h2>Cadastrar</h2>
            <form onSubmit={handleSubmitSignup(upHandleSubmit)}>

                <Input type="text" placeholder="Nome" name="name" register={registerSignup} ></Input>
                {errorsSignup.name && <ErrorSpan> {errorsSignup.name.message} </ErrorSpan>}

                <Input type="email" placeholder="E-mail" name="email" register={registerSignup} ></Input>
                {errorsSignup.email && <ErrorSpan> {errorsSignup.email.message} </ErrorSpan>}

                <Input type="password" placeholder="Senha" name="password" register={registerSignup} ></Input>
                {errorsSignup.password && <ErrorSpan> {errorsSignup.password.message} </ErrorSpan>}

                <Input type="password" placeholder="Confirmar senha" name="confirmPassword" register={registerSignup} ></Input>
                {errorsSignup.confirmPassword && <ErrorSpan> {errorsSignup.confirmPassword.message} </ErrorSpan>}

                <Button type="submit" text="Cadastrar" ></Button>
            </form>
        </Section>
    </AuthContainer>
}

export {
    Authentication
}