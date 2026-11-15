import students from "./student.js";
import config from "./config.js";

// console.log(students)
console.log(`${config.appName} | PORT : ${config.port}| ENVIRONMENT ${config.environment}`)

const displayData=(stud) => {
    console.log(
        `ID:${stud.id} | NAME:${stud.name} | AGE:${stud.age} | COURSE : ${stud.course}`
    )
}

students.forEach(displayData)