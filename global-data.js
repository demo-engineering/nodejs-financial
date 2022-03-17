const _ = require("lodash");
const {faker} = require("@faker-js/faker");


const users = []

_.times(5, (index) => {
    users.push({
        id: index + 1,
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
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
