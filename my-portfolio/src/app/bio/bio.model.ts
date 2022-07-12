export class Bio {
    public imagePath: string;
    public name: string;
    public job: string;
    public school: string;
    public description: string;
    
    constructor(imagePath: string, name: string, job: string, location: string, desc: string) {
        this.imagePath = imagePath;
        this.name = name;
        this.job = job;
        this.school = location;
        this.description = desc;
    }
}