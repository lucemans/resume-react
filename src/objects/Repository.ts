export default class Repository {
    label: string;
    url: string;
    description: string;

    constructor(label: string, description: string, url: string) {
        this.label = label;
        this.url = url;
        this.description = description;
    }

}