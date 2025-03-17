const Transaction = require("../models/transaction")

const transaction =  async (req, res) => {
    try {
        const data = await Transaction.find({ _id: req.params.id });
        if (data.length === 0) {
            return res.status(404).json({ message: "No transaction details" });
        }

        res.status(200).json(data);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
module.exports = transaction;

