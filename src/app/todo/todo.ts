export class Todo {
    constructor(
        public id: string = '',
        public name: string = '',
        public content: string = ''
    ){
        this.content = content;
        this.name = name;
        this.id = id;
    }
}
