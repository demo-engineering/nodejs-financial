const _ = require("lodash");
const {faker} = require("@faker-js/faker");
const moment = require("moment");


const users = []

_.times(5, (index) => {
    users.push({
        id: faker.datatype.number(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        Transactions: _.times(8, (accountIndex) => {
            return {
                id: faker.datatype.number(),
                amount: faker.finance.amount(100),
                createdAt: faker.date.past(1)
            }
        }),
        Accounts: _.times(1, (accountIndex) => {
            return {
                index: accountIndex + 1,
                type: _.sample(['checking', 'saving']),
                status: 'open', // 'open', 'closed'
                balance: faker.finance.amount()
            }
        })
    })
})

module.exports = {
    users
}
