// Access Modifiers Exercises - private

/*
Exercise 1 - Bank Account

Create a 'BankAccount' class with the following behavior:

- Private field balance.
- Public methods to deposit, withdraw and check balance.
- The withdraw method should prevent withdrawals greater than the current balance.

*/

import { v4 as uuidv4 } from 'uuid'

class BankAccount {
    private balance: number = 0
    name: string

    constructor(name: string) {
        this.name = name
    }

    deposit(amount: number) {
        if (amount <= 0) {
            return this.formatResponse("The amount to be deposited must be a positive number", 400, new Date())
        }
        this.balance += amount
        const result = {
            name: this.name,
            amount: amount,
            currentBalance: this.balance
        }
        return this.formatResponse(JSON.stringify(result), 200, new Date())
    }

    withdraw(amount: number) {
        if (amount > this.balance) {
            return this.formatResponse("Insufficient balance", 400, new Date())
        }
        this.balance -= amount
        const result = {
            name: this.name,
            amount: amount,
            currentBalance: this.balance
        }
        return this.formatResponse(JSON.stringify(result), 200, new Date())
    }

    checkBalance() {
        const result = {
            name: this.name,
            currentBalance: this.balance
        }
        return this.formatResponse(JSON.stringify(result), 200, new Date())
    }

    private formatResponse(text: string, statusCode: number, time: Date) {
        type Response = {
            success: boolean,
            data?: any,
            error?: any
        }
        const response: Response = {
            success: statusCode === 200
        }

        if (statusCode === 200) {
            response.data = JSON.parse(text)
        } else {
            response.error = text
        }

        return JSON.stringify({
            id: uuidv4(),
            statusCode: statusCode,
            time: time,
            result: response
        })
    }
}
console.log("=============================")
console.log("Result - Exercise 1")
const account = new BankAccount("Alef Souza")
console.log(account.deposit(200))
console.log(account.deposit(1700))
console.log(account.withdraw(150))
console.log(account.checkBalance())
console.log("=============================")


// school grade management

/*
Create a Student class with the following requirements:

- Private field to store student data.

- Public method for adding school grades.

- Public method for issuing bimonthly notes.

- Public method to remove a note.

- Public method to update a note.
*/

interface Person {
    firstName: string,
    lastName: string,
    email?: string
}

interface Student extends Person {
    gradeLevel: number,
    class_id: string | null
}

interface Teacher extends Person {
    hireDate: Date
}

type Class = {
    year: number,
    gradeLevel: number
}

type Subject = {
    name: string,
    gradeLevel: number
}

type ClassSubjectTeacherYear = {
    subject_id: string,
    class_id: string,
    teacher_id: string
}

type Grade = {
    student_id: string,
    class_id: string,
    subject_id: string,
    bimonthly: number,
    grade: number
}

type DataSchool = {
    student: Record<string, Student>,
    teacher: Record<string, Teacher>,
    class: Record<string, Class>,
    subject: Record<string, Subject>,
    classSubjectTeacherYear: Record<string, ClassSubjectTeacherYear>,
    grade: Record<string, Grade>
}

const dataSchool: DataSchool = {
    student: {
        "2025001": {
            firstName: "Laura",
            lastName: "Santos",
            email: "laura.santos@gmail.com",
            gradeLevel: 3,
            class_id: "EDF201303"
        },
        "2025002": {
            firstName: "Caio",
            lastName: "Victor",
            email: "caio.victor@gmail.com",
            gradeLevel: 2,
            class_id: "MEC201402"
        }
    },
    teacher: {
        "125": {
            firstName: "Soarez",
            lastName: "Fernando",
            email: "soarez.fernando@gmail.com",
            hireDate: new Date(2008, 12, 9)
        },
        "138": {
            firstName: "Alex",
            lastName: "Silva",
            email: "alex.silva@gmail.com",
            hireDate: new Date(2009, 12, 12)
        },
        "141": {
            firstName: "Bruno",
            lastName: "Henrique",
            email: "bruno.henrique@gmail.com",
            hireDate: new Date(2010, 12, 12)
        },
        "142": {
            firstName: "Gabriel",
            lastName: "Santos",
            email: "gabriel.santos@gmail.com",
            hireDate: new Date(2011, 12, 12)
        },
        "178": {
            firstName: "Fernando",
            lastName: "Guimarães",
            email: "fernando.guimaraes@gmail.com",
            hireDate: new Date(2012, 12, 12)
        },
        "189": {
            firstName: "Thiago",
            lastName: "Pereira",
            email: "thiago.pereira@gmail.com",
            hireDate: new Date(2013, 12, 12)
        }
    },
    class: {
        "EDF201303": {
            year: 2015,
            gradeLevel: 3
        },
        "MEC201402": {
            year: 2015,
            gradeLevel: 2
        }
    },
    subject: {
        "EDF029": {
            name: "Mecânica dos sólidos II",
            gradeLevel: 3
        },
        "EDF030": {
            name: "Concreto Armado I",
            gradeLevel: 3
        },
        "EDF031": {
            name: "Estruturas III",
            gradeLevel: 3
        },
        "MEC025": {
            name: "Fundição I",
            gradeLevel: 2
        },
        "MEC026": {
            name: "Usinagem I",
            gradeLevel: 2
        },
        "MEC027": {
            name: "Desenho Técnico II",
            gradeLevel: 2
        }
    },
    classSubjectTeacherYear: {
        "1024": {
            subject_id: "EDF029",
            class_id: "EDF201303",
            teacher_id: "125"
        },
        "1025": {
            subject_id: "EDF030",
            class_id: "EDF201303",
            teacher_id: "138"
        },
        "1026": {
            subject_id: "EDF031",
            class_id: "EDF201303",
            teacher_id: "141"
        },
        "1027": {
            subject_id: "MEC025",
            class_id: "MEC201402",
            teacher_id: "142"
        },
        "1028": {
            subject_id: "MEC026",
            class_id: "MEC201402",
            teacher_id: "178"
        },
        "1029": {
            subject_id: "MEC027",
            class_id: "MEC201402",
            teacher_id: "189"
        }
    },
    grade: {
        "7894": {
            student_id: "2025001",
            class_id: "EDF201303",
            subject_id: "EDF029",
            bimonthly: 1,
            grade: 10
        },
        "7895": {
            student_id: "2025001",
            class_id: "EDF201303",
            subject_id: "EDF030",
            bimonthly: 1,
            grade: 9.8
        },
        "7896": {
            student_id: "2025001",
            class_id: "EDF201303",
            subject_id: "EDF031",
            bimonthly: 1,
            grade: 9
        },
        "7897": {
            student_id: "2025001",
            class_id: "EDF201303",
            subject_id: "EDF029",
            bimonthly: 2,
            grade: 10
        },
        "7898": {
            student_id: "2025001",
            class_id: "EDF201303",
            subject_id: "EDF030",
            bimonthly: 2,
            grade: 9.9
        },
        "7899": {
            student_id: "2025001",
            class_id: "EDF201303",
            subject_id: "EDF031",
            bimonthly: 2,
            grade: 7
        },
        "7900": {
            student_id: "2025001",
            class_id: "EDF201303",
            subject_id: "EDF029",
            bimonthly: 3,
            grade: 9.7
        },
        "7901": {
            student_id: "2025001",
            class_id: "EDF201303",
            subject_id: "EDF030",
            bimonthly: 3,
            grade: 10
        },
        "7902": {
            student_id: "2025001",
            class_id: "EDF201303",
            subject_id: "EDF031",
            bimonthly: 3,
            grade: 10
        },
        "7906": {
            student_id: "2025002",
            class_id: "MEC201402",
            subject_id: "MEC025",
            bimonthly: 1,
            grade: 6.9
        },
        "7907": {
            student_id: "2025002",
            class_id: "MEC201402",
            subject_id: "MEC026",
            bimonthly: 1,
            grade: 7
        },
        "7908": {
            student_id: "2025002",
            class_id: "MEC201402",
            subject_id: "MEC027",
            bimonthly: 1,
            grade: 9
        },
        "7909": {
            student_id: "2025002",
            class_id: "MEC201402",
            subject_id: "MEC025",
            bimonthly: 2,
            grade: 5
        },
        "7910": {
            student_id: "2025002",
            class_id: "MEC201402",
            subject_id: "MEC026",
            bimonthly: 2,
            grade: 8
        },
        "7911": {
            student_id: "2025002",
            class_id: "MEC201402",
            subject_id: "MEC027",
            bimonthly: 2,
            grade: 7.4
        },
        "7912": {
            student_id: "2025002",
            class_id: "MEC201402",
            subject_id: "MEC025",
            bimonthly: 3,
            grade: 8.7
        },
        "7913": {
            student_id: "2025002",
            class_id: "MEC201402",
            subject_id: "MEC026",
            bimonthly: 3,
            grade: 6.5
        },
        "7914": {
            student_id: "2025002",
            class_id: "MEC201402",
            subject_id: "MEC027",
            bimonthly: 3,
            grade: 10
        }
    }
}

class SchoolGradeManagement {
    private student_id: string

    constructor(student_id: string) {
        this.student_id = student_id
    }

    createNewGrade(class_id: string, subject_id: string, bimonthly: number, grade: number) {

        if (!(class_id === dataSchool.student[this.student_id].class_id)) {
            return this.formatResponse("The student is not enrolled in the class indicated.", 400)
        }

        const matchClassSubjectTeacherYear = Object.entries(dataSchool.classSubjectTeacherYear).find(
            ([id, entry]) => entry.subject_id === subject_id && entry.class_id === class_id
        )

        if (!matchClassSubjectTeacherYear) {
            return this.formatResponse("The class provided is not associated with the class informed.", 400)
        }

        const matchGrade = Object.entries(dataSchool.grade).find(
            ([id, entry]) => entry.class_id === class_id && entry.student_id === this.student_id && entry.subject_id === subject_id && entry.bimonthly === bimonthly
        )

        if (matchGrade) {
            return this.formatResponse("The operation could not be completed because a note already exists.", 400)
        }
        
        const newId = JSON.stringify(this.generateId(dataSchool.grade))

        dataSchool.grade[newId] = {
            student_id: this.student_id,
            class_id: class_id,
            subject_id: subject_id,
            bimonthly: bimonthly,
            grade: grade
        }
        return this.formatResponse(JSON.stringify(dataSchool.grade[newId]), 200)
    }

    removeGrade(class_id: string, subject_id: string, bimonthly: number) {
        if (!(class_id === dataSchool.student[this.student_id].class_id)) {
            return this.formatResponse("The student is not enrolled in the class indicated.", 400)
        }

        const matchClassSubjectTeacherYear = Object.entries(dataSchool.classSubjectTeacherYear).find(
            ([id, entry]) => entry.subject_id === subject_id && entry.class_id === class_id
        )

        if (!matchClassSubjectTeacherYear) {
            return this.formatResponse("The class provided is not associated with the class informed.", 400)
        }

        const matchGrade = Object.entries(dataSchool.grade).find(
            ([id, entry]) => entry.class_id === class_id && entry.student_id === this.student_id && entry.subject_id === subject_id && entry.bimonthly === bimonthly
        )

        if (matchGrade) {
            delete dataSchool.grade[matchGrade[0]]
            return this.formatResponse(JSON.stringify(matchGrade[1]), 200)
        } else {
            return this.formatResponse("There is no associated note", 400)
        }
    }

    updateGrade(class_id: string, subject_id: string, bimonthly: number, grade: number) {
        if (!(class_id === dataSchool.student[this.student_id].class_id)) {
            return this.formatResponse("The student is not enrolled in the class indicated.", 400)
        }

        const matchClassSubjectTeacherYear = Object.entries(dataSchool.classSubjectTeacherYear).find(
            ([id, entry]) => entry.subject_id === subject_id && entry.class_id === class_id
        )

        if (!matchClassSubjectTeacherYear) {
            return this.formatResponse("The class provided is not associated with the class informed.", 400)
        }

        const matchGrade = Object.entries(dataSchool.grade).find(
            ([id, entry]) => entry.class_id === class_id && entry.student_id === this.student_id && entry.subject_id === subject_id && entry.bimonthly === bimonthly
        )

        if (matchGrade) {
            dataSchool.grade[matchGrade[0]].grade = grade
            return this.formatResponse(JSON.stringify(dataSchool.grade[matchGrade[0]]), 200)
        } else {
            return this.formatResponse("There is no associated note", 400)
        }
    }

    getNotes(class_id: string) {
        const matchNotes = Object.entries(dataSchool.grade).filter(
            ([id, entry]) => entry.class_id === class_id && entry.student_id === this.student_id
        )

        if (matchNotes) {
            const dataStudent = dataSchool.student[this.student_id]
            const data = {
                name: `${dataStudent.firstName} ${dataStudent.lastName}`,
                class: class_id,
                year: dataSchool.class.year,
                notes: {} as Record<string, any>
            }
            for (let i = 1; i < 5; i++) {
                data.notes[`B${i}`] = {}
                const matchNotesBimonthly = Object.entries(dataSchool.grade).filter(
                    ([id, entry]) => entry.bimonthly === i && entry.class_id === class_id && entry.student_id === this.student_id
                )
                if (matchNotesBimonthly) {
                    for (const item of matchNotesBimonthly) {
                        const subjectId = item[1].subject_id
                        const subjectName = dataSchool.subject[subjectId].name
                        data.notes[`B${i}`][subjectId] = {
                            subject: subjectName,
                            grade: item[1].grade
                        }
                    }
                }
            }
            return this.formatResponse(JSON.stringify(data), 200)
        } else {
            console.log("erro")
        }
    }

    private generateId(object: Record<string, any>): number {
        const ids = Object.keys(object).map(id => parseInt(id, 10))
        const maxId = ids.length > 0 ? Math.max(...ids) : 0
        const newId = maxId + 1
        return newId
    }

    private formatResponse(text: string, statusCode: number) {
        type Response = {
            success: boolean,
            data?: any,
            error?: any
        }
        const response: Response = {
            success: statusCode === 200
        }

        if (statusCode === 200) {
            response.data = JSON.parse(text)
        } else {
            response.error = text
        }

        return JSON.stringify({
            id: uuidv4(),
            statusCode: statusCode,
            time: new Date(),
            result: response
        })
    }
}

console.log("=============================")
console.log("Result - Exercise 2")
const school = new SchoolGradeManagement("2025001")
console.log(school.createNewGrade("EDF201303", "EDF029", 4, 5.5))
console.log(school.updateGrade("EDF201303", "EDF029", 4, 10))
console.log(school.removeGrade("EDF201303", "EDF029", 4))
console.log(school.updateGrade("EDF201303", "EDF029", 4, 10))
console.log(school.getNotes("EDF201303"))
console.log("=============================")

// Access Modifiers Exercises - private

// Exercise 3 - protected fields

class Animal {
    protected specie: string

    constructor(specie: string) {
        this.specie = specie
    }
}

class Dog extends Animal {
    name: string

    constructor(specie: string, name: string) {
        super(specie)
        this.name = name
    }

    describeSpecie(): void {
        console.log(`Specie: ${this.specie}`)
    }
}
console.log("Exercise 3 -----------------")
const dog = new Dog("Pitbull", "Loki")
dog.describeSpecie()

class Animal2 {
    constructor(protected specie: string) {}
}

class Dog2 extends Animal2 {
    constructor(specie: string, public name: string) {
        super(specie)
    }

    describeSpecie(): void {
        console.log(`Specie: ${this.specie}`)
    }
}

const dog2 = new Dog2("Shiuaua", "Frioile")
dog2.describeSpecie()

// Exercise 4 - protected methods

class User {
    protected createMessage(nome: string): string {
        return `Welcome ${nome}!`
    }
}

class Admin extends User {
    saluteAdmin(name: string): void {
        console.log(`${this.createMessage(name)} you are an admin!`)
    }
}

console.log("Exercise 4 --------------")
const admin = new Admin()
admin.saluteAdmin("Mario")

// Exercise 5 - protected constructor

// Exercise 5 - protected constructor

class Worker {
    protected constructor(public name: string) {}
}

class Musiciam extends Worker {
    constructor(name: string, public position: string) {
        super(name)
    }
}

const musiciam = new Musiciam("Mario", "Developer")
console.log("Exercise 5 ---------------")
console.log(musiciam.name)
console.log(musiciam.position)
musiciam.name = "Henrique"
musiciam.position = "Engineer"
console.log(musiciam.name)
console.log(musiciam.position)