# Simple Banking API

This project is a small API that simulates a banking system API for accounts creation and money transfers. 

### General Guidelines
- This project is about a small financial application.
- The users could create their own accounts.
- A user could have only two types of accounts: Saving and Checking.
    -   The user can only have one checking account.
    -   The user can only have one saving account.
- The users can transfer money to other accounts.

### Your assignment:

-   Create a new transfer endpoint that enables users to transfer money to other accounts.
    -   The users can only transfer money from checking-to-checking accounts.
-   The users could create their own deposits, but they should be approved by the system admins to be acknowledged.
-   The users have 3 free transfers per week. After the users reach the limit, the “Bank/App” should charge 2% of transfer fees on transaction amount.
    -   e.g. Transaction amount of US$ 1,000.00. The transfer fee should be US$ 20.00.
-   The user can only close an account if there’s no money in there.

Feel free to change anything on the project that you would like.

### Endpoint list:

####  Users
```
# Creates a new user
POST /api/users

# creates a new account for the user
POST /api/users/create-account
```
####  Accounts
```

# Get all user's accounts
GET /api/my-accounts

# get details about user's account
GET /api/my-accounts/{id}

# Closes the account 
DELETE /api/my-accounts/{accountId}

# Adds funds to an existing account
POST /api/my-accounts/{accountId}/add-funds
```

####  Transfers

```
# Transfer money from source to target account. (Needs validation and charge transfers fee.)
POST /api/transfer/{sourceAccountId}/{targetAccountId}
```




## Project Setup

Run `npm install` to get all project dependencies installed on your local environment.

## Development server

Run `npm start` for a dev server. Navigate to http://localhost:3000/. The app will automatically reload if you change any of the source files since the project uses _nodemon_.


