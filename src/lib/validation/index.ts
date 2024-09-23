import * as z from "zod"
export const SignUpValidation = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters" }),
    username: z.string().min(2, { message: "Username has to be at least 3 characters"}).max(50, { message: "Username cannot be more than 50 characters"}),
    email: z.string().email(),
    password: z.string().min(7, { message: "Password must be at least 7 characters"}),
  })

export const SigninValidation = z.object({
  email: z.string().email(),
  password: z.string().min(7, { message: "Password must be at least 7 characters"}),
})

export const PostValidation = z.object({
  caption: z.string().min(5).max(2200),
  file: z.custom<File[]>(),
  location: z.string().min(2).max(100),
  tags: z.string()
})