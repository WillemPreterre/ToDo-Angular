export class ToDo {
    id: number;
    title: string;
    description: string;
    date: Date;

    constructor(toDo) {
        this.id  = toDo.id;
        this.title = toDo.title;
        this.description = toDo.description;
        this.date = toDo.date
    }
}   