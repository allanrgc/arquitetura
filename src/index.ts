import express, { Request, Response } from 'express'
import cors from 'cors'
import { CourseController } from './controller/CourseController'
import { courseRouter } from './router/courseRouter'

const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003, () => {
    console.log(`Servidor rodando na porta ${3003}`)
})

// const courseController = new CourseController()

app.get("/ping", async (req: Request, res: Response) => {
    try {
        res.status(200).send({ message: "Pong!" })
    } catch (error) {
        console.log(error)

        if (req.statusCode === 200) {
            res.status(500)
        }

        if (error instanceof Error) {
            res.send(error.message)
        } else {
            res.send("Erro inesperado")
        }
    }
})

app.use("/courses", courseRouter)

// app.post("/courses", async (req: Request, res: Response) => {
//     try {
//         const { id, titulo, duracao } = req.body

//         if (typeof id !== "string") {
//             res.status(400)
//             throw new Error("'id' deve ser string")
//         }

//         if (typeof titulo !== "string") {
//             res.status(400)
//             throw new Error("'ownerId' deve ser string")
//         }
//         if (typeof duracao !== "number") {
//             res.status(400)
//             throw new Error("'ownerId' deve ser number")
//         }

//         // const [ courseDBExists ]: TCourseDB[] | undefined[] = await BaseDatabase.con("accounts").where({ id })
//         const courseDatabase = new courseDatabase()
//         const coursesDBExists = await coursesDatabase.findCoursesById(id)

//         if (courseDBExists) {
//             res.status(400)
//             throw new Error("'id' já existe")
//         }

//         const newCourse = new Course(
//             id,
//             titulo,
//             duracao,
//             new Date().toISOString()
//         )

//         const newCourseDB: TCourseDB = {
//             id: newCourse.getId(),
//             titulo: newCourse.getTitulo(),
//             duracao: newCourse.getDuracao(),
//             created_at: newCourse.getCreatedAt()
//         }

//         // await db("accounts").insert(newAccountDB)
//         await courseDatabase.insertCourse(newCourseDB)

//         res.status(201).send(newCourseDB)
//     } catch (error) {
//         console.log(error)

//         if (req.statusCode === 200) {
//             res.status(500)
//         }

//         if (error instanceof Error) {
//             res.send(error.message)
//         } else {
//             res.send("Erro inesperado")
//         }
//     }
// })