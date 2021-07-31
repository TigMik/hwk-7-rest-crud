let students = [
    {
        id: 1,
        name: "Jack",
        technology: "Node"
    },
    {
        id: 2,
        name: "Joe",
        technology: "Angular"
    },
    {
        id: 3,
        name: "John",
        technology: "React"
    }
]


export const getStudents = (req, res) => {
    res.send(students);
}

export const getStudent = (req, res) => {
    const { id } = req.params;

    const student = students.find(student => student.id === Number(id));

    if (student) {
        res.send(student);
        res.sendStatus(200);
    } else {
        res.sendStatus(404);
    }
}

export const createStudent = (req, res) => {
    const data = req.body;
    const { name, technology } = data;

    const student = {
        id: Date.now(),
        name,
        technology
    }

    students.push(student);
    // res.send(students)
    res.sendStatus(201);
}

export const updateStudent = (req, res) => {
    const { id } = req.params
    const { technology } = req.body

    const student = students.find( student => student.id === Number(id));
    if (student) {
        student.technology = technology;
        res.sendStatus(200);
    } else {
        res.sendStatus(404);
    } 
}

export const deleteStudent = (req, res) => {
    const { id } = req.params;

    students = students.filter(student => student.id !== Number(id));
    res.sendStatus(200);
}







