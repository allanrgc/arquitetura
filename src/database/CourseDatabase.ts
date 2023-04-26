import { CourseDB } from "../models/Course";
import { BaseDatabase } from "./BaseDatabase";

export class CourseDatabase extends BaseDatabase{
    public static TABLE_COURSES = "courses"

    public async findCourse(q: string | undefined){
        let coursesDB

        // const videosDB: TVideoDB[] = await BaseDatabase
        // .connection(VideoDatabase.TABLE_VIDEOS)
        if (q) {
            const result: CourseDB[] = await BaseDatabase
                .connection(CourseDatabase.TABLE_COURSES)
                .where("name", "LIKE", `%${q}%`)

            coursesDB = result
        } else {
            const result: CourseDB[] = await BaseDatabase
                .connection(CourseDatabase.TABLE_COURSES)

            coursesDB = result
        }

        return coursesDB
    }

    public findCoursesById = async (input: any) => {
        const {id} = input

        const [ coursesDB ]: CourseDB[] | undefined[] = await BaseDatabase
        .connection(CourseDatabase.TABLE_COURSES)
        .where({ id })

        return coursesDB
    }
    public async findCourseById(id: string) {
        const [ courseDB ]: CourseDB[] | undefined[] = await BaseDatabase
            .connection(CourseDatabase.TABLE_COURSES)
            .where({ id })

        return courseDB
    }

    public async insertCourse(newCourseDB: CourseDB) {
        await BaseDatabase
            .connection(CourseDatabase.TABLE_COURSES)
            .insert(newCourseDB)
    }

    public async editCourse(idToEdit: string, courseDB: CourseDB){
        await BaseDatabase
        .connection(CourseDatabase.TABLE_COURSES)
        .update(courseDB)
        .where({ id: idToEdit })
    }
    public async deleteCourseById(idToDelete: string) {
        await BaseDatabase
          .connection(CourseDatabase.TABLE_COURSES)
          .delete()
          .where({ id: idToDelete })
      }
}