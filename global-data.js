const _ = require("lodash");
const {faker} = require("@faker-js/faker");
const moment = require("moment");

const users = []
const fundsToBeApproved = [];

_.times(5, (index) => {

    const userTransactions = _.times(8, (accountIndex) => {
        return {
            id: faker.datatype.number(),
            amount: faker.finance.amount(100),
            createdAt: faker.date.past(1)
        }
    });

    const userAccounts = _.times(1, (accountIndex) => {
        return {
            index: accountIndex + 1,
            type: _.sample(['checking', 'saving']),
            status: 'open', // 'open', 'closed'
            balance: faker.finance.amount()
        }
    })

    users.push({
        id: faker.datatype.number(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        Transactions: userTransactions,
        Accounts: userAccounts,
    })

})

module.exports = {
    users,
    fundsToBeApproved
}
