export class Recipe {

    // Declare properties
    public name: string;
    public description: string;
    public imagePath: string;


    // Define constructor
    constructor(name: string, desc: string, imagePath: string) {
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath
    }

}
