export interface CourseDB {
    id: string,
    name: string,
    lessons: number,
    created_at: string
}
export class Course{
    //ATRIBUTOS (características, informações, dados)
    // id: string
    // titulo: string
    // email: string
    // password: string
    // createdAt: string

    //METODOS (ações, comportamento, funções)
    constructor(
        public id: string,
        public name: string,
        public lessons: number,
        public createdAt: string
    ){ /*this.id = id this.titulo = titulo */}

    
    public getId(): string{
        return this.id
    }
     public setId(newId: string): void{
        this.id = newId
     }
     public getName(): string{
        return this.name
    }
     public setName(newName: string): void{
        this.name = newName
     }
     public getLessons(): number{
        return this.lessons
     }
     public setLessons(newLessons: number): void{
        this.lessons = newLessons
     }
     public getCreatedAt(): string {
        return this.createdAt
    }

    public setCreatedAt(value: string): void {
        this.createdAt = value
    }
}

// Instanciar usuários
// const user1 = new Course("c010", "HTML", 4, "25/04/2023")
