import express from 'express'
//import translations, yup will use translations from this file
import './shared/services/TranslationsYup'
import { router } from './routes'
import 'dotenv/config'


const server = express()

server.use(express.json())

server.use(router)

export { server }
