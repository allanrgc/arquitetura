import { Request, Response } from "express"
import { CourseBusiness } from "../business/CourseBusiness"
import { CourseDatabase } from "../database/CourseDatabase"
import { BaseError } from "../errors/BaseError"
import { ZodError } from "zod"
import { EditCourseSchema } from "../dtos/editCourse.dto"

export class CourseController {
    constructor(
        private courseBusiness: CourseBusiness
    ) {}
    public getCourses = async (req: Request, res: Response) => {
        try {
            const q = req.query.q as string | undefined

            // const courseBusiness = new CourseBusiness()
            const output = await this.courseBusiness.getCourses(q)
    
            res.status(200).send(output)
        } catch (error) {
            console.log(error)
    
            if (error instanceof BaseError){
                res.status(error.statusCode).send(error.message)
            } else {
                res.send("Erro inesperado")
            }
        }
    }
    public createCourse = async (req: Request, res: Response) => {
        try {
            const input = {
                id: req.body.id,
                name: req.body.name,
                lessons: req.body.lessons
            }

            // const courseBusiness = new CourseBusiness()
            const output = await this.courseBusiness.createCourse(input)

            res.status(201).send(output)
        } catch (error) {
            console.log(error)
    
            if (error instanceof BaseError){
                res.status(error.statusCode).send(error.message)
            } else {
                res.send("Erro inesperado")
            }
        }
    }
    public editCourse = async (req: Request, res: Response) => {
        try {
            const input = EditCourseSchema.parse({
                idToEdit: req.params.id,
                id: req.params.id,
                name: req.params.name,
                lessons: req. params.lessons
            })

            // const courseBusiness = new CourseBusiness()
            const output = await this.courseBusiness.editCourse(input)

            res.status(200).send(output)
        } catch (error) {
            console.log(error)

      if(error instanceof ZodError){
        res.status(400).send(error.issues)
      } else {
        res.status(500).send("Erro inesperado")
      }
        }
    }
    public deleteCourse = async (req: Request, res: Response) => {
        try {
    
          const input = {
            idToDelete: req.params.id
          }
    
          const output = await this.courseBusiness.deleteCourse(input)
    
          res.status(200).send(output)
        } catch (error) {
          console.log(error)
    
          if (error instanceof BaseError) {
            res.status(error.statusCode).send(error.message)
          } else {
            res.status(500).send("Erro inesperado")
          }
        }
      }
}