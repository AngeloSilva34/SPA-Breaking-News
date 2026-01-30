import z from "zod";

export const  profileSchema = z.object({
    name: z
        .string()
        .min(3, {message: "Nome curto demais"})
        .max(255, { message: 'Seu nome deve ter no máximo 255 letras' }),

    avatar: z
        .string()
        .trim()
        .min(1, {message: "O link não pode ser vazio"})
        .pipe(
            z.url({
                message: "URL inválida",
                protocol: /^https$/
            })
        ),

    background: z
        .string()
        .trim()
        .min(1, { message: "O link não pode ser vazio"})
        .pipe(
            z.url({
                message: "URL inválida",
                protocol: /^https$/
            })
        ),

    email: z
        .string()
        .trim()
        .toLowerCase()
        .min(1, {message: "E-mail não pode ser vazio"})
        .max(320, {message: "E-mail longo demais"})
        .pipe(z.email({ message: 'E-mail inválido' }))
})