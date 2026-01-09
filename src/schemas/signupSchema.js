import z from 'zod'

export const signupSchema = z.object({
    name: z
        .string()
        .min(3, { message: 'Seu nome deve ter no mínimo 3 letras' })
        .max(255, { message: 'Seu nome deve ter no máximo 255 letras' })
        .transform((name) =>
            name.trim().toLocaleLowerCase()
                .replace(/(^\w|\s\w)/g, (m) => m.toUpperCase())
                .replace(/\s+/g, ' ')
        ),

    email: z
        .string()
        .toLowerCase()
        .pipe(z.email({ message: 'E-mail inválido' })),

    password: z
        .string()
        .min(6, { message: 'A senha deve ter no mínimo 6 caracteres' })
        .max(72, { message: 'A senha deve ter no máximo 72 caracteres' }),

    confirmPassword: z
        .string()
        .min(6, { message: 'A senha deve ter no mínimo 6 caracteres' })
        .max(72, { message: 'A senha deve ter no máximo 72 caracteres' })
})
.refine((data) => data.password === data.confirmPassword, {
    message: 'As senhas não correspondem',
    path: ['confirmPassword']
})