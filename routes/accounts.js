const express = require('express');
const {users} = require("../global-data");
const router = express.Router();

router.get('/', function (req, res) {
    const userId = req.get('userId');

    const user = users.find(u => u.id === userId);

    if (_.isEmpty(user.Accounts.length)) {
        return res.status(404)
    }

    return res.json(user.Accounts);
});

router.get('/:id', function (req, res) {
    const userId = req.get('userId');
    const accountId = req.params.id;

    const user = users.find(u => u.id === userId);
    const account = user.Accounts.find(account => account.id === accountId)

    return res.json(account);
});

router.delete('/:id/close', function (req, res) {
    const userId = req.get('userId');
    const accountId = req.params.id;

    const user = users.find(u => u.id === userId);
    const account = user.Accounts.find(account => account.id === accountId)

    if (account.balance > 0) {
        return res.status(400).json({
            message: 'You cannot close this account because it still has funds on it.'
        })
    }

    return res.json(account);
});

router.patch('/:id/add-funds', function (req, res) {
    const userId = req.get('userId');

    const accountId = req.params.id;
    const amount = req.body.amount;

    const user = users.find(u => u.id === userId);
    const account = user.Accounts.find(account => account.id === accountId)

    account.balance += amount;

    return res.json(201).json({
        message: 'Funds have been successfully added to your account'
    })
});

module.exports = router;
