export default class Skill {
    image: string;
    label: string;
    url: string;
    position: string;
    time: string;

    constructor(label: string, position: string, time: string, url: string, image: string) {
        this.image = image;
        this.label = label;
        this.url = url;
        this.position = position;
        this.time = time;
    }

}