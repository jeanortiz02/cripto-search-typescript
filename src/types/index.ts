import { z } from "zod"
import { CurrencyShema, CryptoCurrencyResponseSchema, PairSchema, CryptoPriceSchema } from "../schema/crypto-schema"



export type Currency = z.infer<typeof CurrencyShema>
export type CryptoCurrency = z.infer<typeof CryptoCurrencyResponseSchema>
export type Pair = z.infer<typeof PairSchema>
export type cryptoPrice = z.infer<typeof CryptoPriceSchema>