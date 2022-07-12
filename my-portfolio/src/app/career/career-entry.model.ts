export class CareerEntry {
    public company: string;
    public position: string;
    public years: [string, string];
    public description: string;
    public imagePath: string;

    constructor(company: string, position: string, years: [string, string], descr: string, imagePath: string) {
        this.company = company;
        this.position = position;
        this.years = years;
        this.description = descr;
        this.imagePath = imagePath;
    }
}