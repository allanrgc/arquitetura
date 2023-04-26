import z from "zod"

export interface EditCourseInputDTO{
    idToEdit: string,
        id?: string,
        name?: string,
        lessons?: number
}

export interface EditCourseOutputDTO{
    message: string,
      course: {
        id: string,
        name: string,
        lessons: number,
        createdAt: string
      }
    }

    export const EditCourseSchema = z.object({
        idToEdit: z.string(),
        id: z.string().min(1).optional(),
        name: z.string().min(2).optional(),
        lessons: z.number().positive().min(0).gt(0).optional() 
    }).transform(data => data as EditCourseInputDTO)