export default class Skill {
    image: string;
    label: string;
    url: string;
    color: string;
    description: string;

    constructor(label: string, url: string, image: string, description: string) {
        this.image = image;
        this.label = label;
        this.url = url;
        this.description = description;
    }

}