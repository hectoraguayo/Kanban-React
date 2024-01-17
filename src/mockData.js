import { v4 as uuidv4 } from "uuid"

const mockData = [
    {
        id: uuidv4(),
        title: "To Do 📋",
        tasks: [
            {
                id: uuidv4(),
                title: "Study Javascript"
            },
            {
                id: uuidv4(),
                title: "Study Python"
            },
            {
                id: uuidv4(),
                title: "Study React"
            }

        ]
    },
    {
        id: uuidv4(),
        title: "In Progress ✏️",
        tasks: [
            {
                id: uuidv4(),
                title: "Course Javascript"
            },
            {
                id: uuidv4(),
                title: "Course Python"
            },
            {
                id: uuidv4(),
                title: "Course React"
            },
        ]
    },
    {
        id: uuidv4(),
        title: "Done ✔️",
        tasks: [
            {
                id: uuidv4(),
                title: "Course Javascript"
            },
            {
                id: uuidv4(),
                title: "Course React"
            },
        ]
    },
];

export default mockData