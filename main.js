import inquirer from "inquirer";
class student {
    id;
    name;
    coursesEnrolled;
    feesAmount;
    constructor(id, name, coursesEnrolled, feesAmount) {
        this.id = id;
        this.name = name;
        this.coursesEnrolled = coursesEnrolled;
        this.feesAmount = feesAmount;
    }
}
let baseId = 10000;
let studentId;
"";
let continueEnrollment = true;
let students = [];
do {
    let action = await inquirer.prompt({
        type: "list",
        name: "ans",
        message: "please select an option:\n",
        choices: ["Enroll a student", "Show student status"]
    });
    if (action.ans === "Enroll a student") {
        let studentName = await inquirer.prompt({
            type: "input",
            name: "ans",
            message: "please Enter your name;"
        });
        let trimmedstudentName = (studentName.ans).trim().toLowerCase();
        let studentNamecheck = students.map(obj => obj.name);
        if (studentNamecheck.includes(trimmedstudentName) === false) {
            if (trimmedstudentName !== "") {
                baseId++;
                studentId = "STID" + baseId;
                console.log("\n\tyour account has been created");
                console.log(`Welcome, ${studentNamecheck}!`);
                let cource = await inquirer.prompt({
                    type: "list",
                    name: "ans",
                    message: "please select a cource",
                    choices: ["IT", "English", "Cooking"]
                });
                let courceFees = 0;
                switch (cource.ans) {
                    case "IT":
                        courceFees = 5000;
                        break;
                    case "English":
                        courceFees = 500;
                        break;
                    case "Cooking":
                        courceFees = 200;
                        break;
                }
                let courceConfirm = await inquirer.prompt({
                    type: "confirm",
                    name: "ans",
                    message: "Do you want to Enroll in this cource"
                });
                if (courceConfirm.ans === true) {
                    let Student = new student(studentId, trimmedstudentName, [cource.ans], courceFees);
                    students.push(Student);
                    console.log("You have Enroll in this cource");
                }
            }
            else {
                console.log("invalid Name");
            }
        }
        else {
            console.log("This name is already exists");
        }
    }
    else if (action.ans === "Show student status") {
        if (student.length !== 0) {
            let studentNamescheck = students.map(e => e.name);
            let selectedStudent = await inquirer.prompt({
                type: "list",
                name: "ans",
                message: "please select name",
                choices: studentNamescheck
            });
            let foundStudent = students.find(Student => Student.name === selectedStudent.ans);
            console.log("student information");
            console.log(foundStudent);
            console.log("\n");
        }
        else {
            console.log("Record is empty");
        }
    }
    let userConfirm = await inquirer.prompt({
        type: "confirm",
        name: "ans",
        message: "Do you want to continue?"
    });
    if (userConfirm.ans === false) {
        continueEnrollment = false;
    }
} while (continueEnrollment);
