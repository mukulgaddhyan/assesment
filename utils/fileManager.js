const fs = require('fs');

class FileManager {
    constructor() {
        this.files = {
            A: 'fileA.txt',
            B: 'fileB.txt',
            C: 'fileC.txt',
            D: 'fileD.txt'
        };

        this.initializeFiles();
    }

    initializeFiles() {
        for (let key in this.files) {
            if (!fs.existsSync(this.files[key])) {
                fs.writeFileSync(this.files[key], '');
            }
        }
    }

    areAllFilesPopulated() {
        for (let key in this.files) {
            if (fs.readFileSync(this.files[key], 'utf8').trim() === '') {
                return false;
            }
        }
        return true;
    }

    saveNumberToFile(number, fileKey) {
        fs.appendFileSync(this.files[fileKey], number + '\n');
    }

    listNumbers() {
        const result = {};
        for (let key in this.files) {
            result[key] = fs.readFileSync(this.files[key], 'utf8').trim().split('\n').filter(Boolean).map(Number);
        }
        return result;
    }

    static getInstance() {
        if (!FileManager.instance) {
            FileManager.instance = new FileManager();
        }
        return FileManager.instance;
    }
}

module.exports = FileManager;
