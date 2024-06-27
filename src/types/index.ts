import { z } from "zod"
import { CurrencyShema } from "../schema/crypto-schema"



export type Currency = z.infer<typeof CurrencyShema>