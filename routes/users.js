const express = require('express');
const {users} = require("../global-data");
const router = express.Router();

router.get('/', function (req, res, next) {
    return res.json(users)
});

router.post('/', function (req, res, next) {
    const newUser = {
        id: users.length + 1,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        Accounts: []
    };

    return res.json(newUser)
});

router.post('/create-account', function (req, res, next) {
    const userId = req.get('userId')

    const user = users.find(u => u.id === userId);

    const newAccount = {
        index: user.Accounts.length + 1,
        type: req.body.type,
        balance: 0
    };

    user.Accounts.push(newAccount)

    return res.json(newAccount);
});

module.exports = router;
