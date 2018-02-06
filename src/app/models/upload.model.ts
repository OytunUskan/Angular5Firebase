export class Upload {
    $key: string;
    file: File;
    url: string;
    progress: number;
    createdOn: Date = new Date();
    name: string;
    description: string;

    constructor(file: File, description: string) {
        this.file = file;
        this.description = description;
    }
}