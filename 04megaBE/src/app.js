import express from 'express'

// here we are trying to handle different type of request that might be recieved from the frontend to the server.
app.use(cors({
   origin: process.env.CORS_ORIGIN,
}))

app.use(express.json({ limit: "16kb" }))

app.use(express.urlencoded({ extended: true, limit: "16kb" }))

app.use(express.static("public"))

app.use(cookieParser())


export const app = express();