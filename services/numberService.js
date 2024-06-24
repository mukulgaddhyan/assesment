const FileManager = require('../utils/fileManager');
const numberFactory = require('../utils/numberFactory');

const processNumber = (number) => {
    const fileManager = FileManager.getInstance();
    
    if (fileManager.areAllFilesPopulated()) {
        throw new Error('All files already have a number.');
    }

    const handler = numberFactory.getHandler(number);
    handler.handle(number);
    
    return 'Number processed successfully.';
};

const listNumbers = () => {
    const fileManager = FileManager.getInstance();
    return fileManager.listNumbers();
};

module.exports = {
    processNumber,
    listNumbers
};
