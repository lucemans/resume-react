export default class Skill {
    image: string;
    label: string;
    url: string;
    color: string;

    constructor(label: string, url: string, image: string, color = 'white') {
        this.image = image;
        this.label = label;
        this.url = url;
        this.color = color;
    }

}