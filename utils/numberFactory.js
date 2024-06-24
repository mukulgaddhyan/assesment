const FileManager = require('./fileManager');

class Handler {
    handle(number) {
        throw new Error('Method not implemented');
    }
}

class HandlerA extends Handler {
    handle(number) {
        const fileManager = FileManager.getInstance();
        fileManager.saveNumberToFile(number * 7, 'A');
    }
}

class HandlerB extends Handler {
    handle(number) {
        const fileManager = FileManager.getInstance();
        fileManager.saveNumberToFile(number * 7, 'B');
    }
}

class HandlerC extends Handler {
    handle(number) {
        const fileManager = FileManager.getInstance();
        fileManager.saveNumberToFile(number * 7, 'C');
    }
}

class HandlerD extends Handler {
    handle(number) {
        const fileManager = FileManager.getInstance();
        fileManager.saveNumberToFile(number * 7, 'D');
    }
}

class NumberFactory {
    getHandler(number) {
        const multipliedNumber = number * 7;

        if (multipliedNumber > 140) {
            return new HandlerA();
        } else if (multipliedNumber > 100) {
            return new HandlerB();
        } else if (multipliedNumber > 60) {
            return new HandlerC();
        } else {
            return new HandlerD();
        }
    }
}

module.exports = new NumberFactory();
