const numberService = require('../services/numberService');

const processNumber = (req, res) => {
    const { number } = req.body;
    if (typeof number !== 'number' || number < 1 || number > 25) {
        return res.status(400).send({ error: 'Input must be a number between 1 and 25.' });
    }

    try {
        const message = numberService.processNumber(number);
        res.send({ message });
    } catch (error) {
        res.status(403).send({ message: error.message });
    }
};

const listNumbers = (req, res) => {
    const result = numberService.listNumbers();
    res.send(result);
};

module.exports = {
    processNumber,
    listNumbers
};
