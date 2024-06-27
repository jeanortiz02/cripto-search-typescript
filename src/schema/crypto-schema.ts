import { z } from "zod";


export const CurrencyShema = z.object({
    code: z.string(),
    name: z.string(),
})