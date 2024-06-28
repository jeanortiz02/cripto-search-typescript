import { z } from "zod";


export const CurrencyShema = z.object({
    code: z.string(),
    name: z.string(),
})

export const CryptoCurrencyResponseSchema = z.object({
    CoinInfo: z.object({
        FullName : z.string(),
        Name: z.string(),
    })
})

export const CryproCurrenciesResponseSchema = z.array(CryptoCurrencyResponseSchema);