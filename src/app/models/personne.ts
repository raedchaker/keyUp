export class Personne {
    constructor(
    public  id: number = 0 ,
    public  name: string = '',
    public  firstName: string = '',
    public  job: string='',
    public  cin: string='',
    public  age: number=20,
    public path:string='',
){
    this.age = age;
    this.name = name;
    this.firstName = firstName;
    this.job = job;
    this.cin = cin;
    this.id = id;
    this.path = path;
}
}
