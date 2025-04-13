// Class Exercises

// Banking System

/*
Create a 'BankAccount' class with the following behavior:

- accountNumber (string): the unique identifier for the account
- cardholderName (string): the name of the account holder

Impelemts:

- A constructor that sets the cardholder's name
- A method 'createAccount()' that generates a unique account number and registers the account in a central database
- A method 'deposit()' to add funds, validating that the deposit amount is positive
- A method 'withdraw()' to substract funds, validating that the amount is positive and within the available balance
- A method 'consult' to return the current account date, including balance

*/

import { v4 as uuidv4 } from 'uuid'

type Account = {
    accountNumber: string,
    cardholderName: string,
    balance: number
}

type DepositParams = {
    amount: number
}

type WithdrawParams = {
    amount: number
}

type GenerateResponse = {
    success: boolean,
    status: number,
    data?: any,
    message?: string
}

type ResponseDefault = {
    uuid: string;
    time: Date;
    success: boolean;
    status: number;
    data?: any;
    message?: string;
}

let DATABASE: Account[] = []

function generateResponseDefault(params: GenerateResponse): ResponseDefault {
    return {
        uuid: uuidv4(),
        time: new Date(),
        success: params.success,
        status: params.status,
        data: params.data,
        message: params.message
    }
}

function GenerateFormattedNumber(): string {
    const part1 = Math.floor(100000 + Math.random() * 900000)
    const part2 = Math.floor(Math.random() * 10)
    return `${part1}-${part2}`
}


class BankAccount {
    accountNumber!: string;
    cardholderName: string;

    constructor(cardholderName: string) {
        this.cardholderName = cardholderName;
    }

    createAccount(): ResponseDefault {
        let accountNumber: string
        let checkAccountNumber: Account | undefined
        let count = 1
        do {
            accountNumber = GenerateFormattedNumber()
            checkAccountNumber = DATABASE.find(account => account.accountNumber === accountNumber)
            count += 1
        } while (checkAccountNumber && count < 4)
            
        if (checkAccountNumber) {
            return generateResponseDefault({
                success: false,
                status: 500,
                message: "Internal Server Error."
            })
        } else {
            this.accountNumber = accountNumber
            DATABASE.push({
                accountNumber: this.accountNumber,
                cardholderName: this.cardholderName,
                balance: 0
            })
            return generateResponseDefault({
                success: true,
                status: 201
            })
        }
    }

    consult(): ResponseDefault {
        try {
            const accountInfo = DATABASE.find(account => account.accountNumber === this.accountNumber)
            if (accountInfo) {
                return generateResponseDefault({
                    success: true,
                    status: 200,
                    data: accountInfo
                })
            } else {
                return generateResponseDefault({
                    success: false,
                    status: 404,
                    message: "Account not found."
                })
            }
        } catch (error) {
            return generateResponseDefault({
                success: false,
                status: 500,
                message: error instanceof Error ? error.message : String(error)
            })
        }
    }

    deposit(body: DepositParams): ResponseDefault {
        if (body.amount > 0) {
            const accountData = DATABASE.find(account => account.accountNumber === this.accountNumber)
            if (accountData) {
                Object.assign(accountData, {balance: accountData.balance + body.amount})
                return generateResponseDefault({
                    success: true,
                    status: 201
                })
            } else {
                return generateResponseDefault({
                    success: false,
                    status: 404,
                    message: "Account not found."
                })
            }
        } else {
            return generateResponseDefault({
                success: false,
                status: 400,
                message: "Invalid deposit amount."
            })
        }
    }

    withdraw(body: WithdrawParams): ResponseDefault {
        if (body.amount > 0) {
            const accountData = DATABASE.find(account => account.accountNumber === this.accountNumber)
            if (accountData) {
                if (accountData.balance >= body.amount) {
                    Object.assign(accountData, {balance: accountData.balance - body.amount})
                    return generateResponseDefault({
                        success: true,
                        status: 201
                    })
                } else {
                    return generateResponseDefault({
                        success: false,
                        status: 400,
                        message: "Insufficient balance for this operation."
                    })
                }
            } else {
                return generateResponseDefault({
                    success: false,
                    status: 404,
                    message: "Account not found."
                })
            }
        } else {
            return generateResponseDefault({
                success: false,
                status: 400,
                message: "Invalid withdrawal amount."
            })
        }
    }
}

// Create acccount 1
const account1 = new BankAccount("Ana Lis Gonçalves")
account1.createAccount()

// Create account 2
const account2 = new BankAccount("Diego dos Santos Lins")
account2.createAccount()

// Checking current 'Account 1' information
console.log("--------- Account 1: consult ----------------")
console.log(account1.consult())

// Checking current 'Account 2' information
console.log("--------- Account 2: consult ----------------")
console.log(account2.consult())

// Deposit in 'Account 1'
console.log("--------- Account 1: deposit ----------------")
console.log(account1.deposit({amount: 1500.99}))

// Deposit in 'Account 2' 
console.log("--------- Account 2: deposit ----------------")
console.log(account2.deposit({amount: 980.99}))

// Withdraw in 'Account 1'
console.log("--------- Account 1: withdraw ----------------")
console.log(account1.withdraw({amount: 500.99}))

// Withdral in 'Account 2' 
console.log("--------- Account 2: withdraw ----------------")
console.log(account2.withdraw({amount: 200.99}))

// Checking current 'Account 1' information
console.log("--------- Account 1: consult ----------------")
console.log(account1.consult())

// Checking current 'Account 2' information
console.log("--------- Account 2: consult ----------------")
console.log(account2.consult())
