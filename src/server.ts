//@ts-ignore
import {swapBot} from "dandao"
import { DOTENV } from "./constants";

DOTENV

new swapBot({
    token: process.env.TELEGRAM_BOT_TOKEN,
    adminName: "whoami",
    chainIds: [1],
    dbData: {
        host: "127.0.0.1",
        user: "dandao",
        password: "12345678",
        port: 3306,
        database: "dandao"
    }
})
