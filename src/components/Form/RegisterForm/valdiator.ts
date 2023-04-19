import { z } from "zod";

export const registerSchema = z
  .object({
    name: z.string().min(1, "O nome é obrigatório"),
    email: z.string().email("O e-mail é obrigatório"),
    password: z
      .string()
      .min(8, "Senha mínima de 8 caracteres")
      .regex(/(?=.*?[A-Z])/, "É necessário ao menos uma letra maiúscula")
      .regex(/(?=.*?[a-z])/, "É necessário ao menos uma letra minúscula")
      .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número")
      .regex(/(?=.*?[!@#$%^&*()_+,])/, "É necessário pelo menos um símbolo"),
    confirm: z.string().min(1, "Confirme sua senha"),
  })

  .refine(({ password, confirm }) => confirm === password, {
    message: "A senha e a confirmação devem ser iguais",
    path: ["confirm"],
  });
