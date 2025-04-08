import { z } from "zod"

export const createUserFormSchema = z.object({
  first_name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  last_name: z.string().min(2, "Sobrenome deve ter pelo menos 2 caracteres"),
  status: z.enum(["active", "inactive"]),
  register_on: z.string()
})

export type CreateUserFormData = z.infer<typeof createUserFormSchema> 