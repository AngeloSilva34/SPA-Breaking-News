import z from 'zod'

export const signinSchema = z.object({
    email: z.string().toLowerCase().pipe(z.email({message: 'E-mail inválido'})),
    password: z.string().min(6, {message: 'A senha deve ter no mínimo 6 caracteres'}).max(72, {message: 'A senha deve ter no máximo 30 caracteres'})
})