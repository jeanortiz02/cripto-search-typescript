import { z } from "zod"
import { CurrencyShema, CryptoCurrencyResponseSchema } from "../schema/crypto-schema"



export type Currency = z.infer<typeof CurrencyShema>
export type CryptoCurrency = z.infer<typeof CryptoCurrencyResponseSchema>