
export class User {
    public _id: string;
    public first: string = "";
    public last: string = "";
    public email: string = "";
    public password: string = "";
    public confirm: string ="";
    public created_at: Date = new Date();
    public updated_at: Date = new Date();
    constructor(){}
}
