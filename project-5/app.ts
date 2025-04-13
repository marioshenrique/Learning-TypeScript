// Function exercises  in TypeScript

// 2 - Creating an Authentication System

/*

- The system must verify that a username and password are valid.
- Use an array to store registered users.
- Authentication must be done by comparing the input data with  registered data.

*/

type authenticateParams = {
    username: string,
    password: string
}

type Credentials = {
    username: string,
    password: string
}

type DataUpdate = {
    isAdmin?: boolean,
    isSuperUser?: boolean
}

type checkPermissionsParams = {
    username: string
}

type updateUserParams = {
    credentials: Credentials
    username_to_update: string,
    data: DataUpdate
}

type deleteUserParams = {
    credentials: Credentials
    username_to_delete: string
}

type registerUserParams = {
    username: string,
    password: string
}

type ReturnAuth = {
    success: boolean,
    status: 200 | 201 | 401 | 403 | 404 | 409 | 500,
    message: string | null,
    data: any | null
}

type UserSystem = {
    username: string,
    password: string,
    isAdmin: boolean,
    isSuperUser: boolean
}

const users: UserSystem[] = [
    {
        username: "mario",
        password: "admin",
        isAdmin: true,
        isSuperUser: true
    }
]

const permissions = {
    deleteUser: {
        isAdmin: false,
        isSuperUser: true
    },
    updateUser: {
        isAdmin: false,
        isSuperUser: true
    }
}

function returnErrorAuth(error: any): ReturnAuth {
    return {
        success: false,
        status: 500,
        message: error instanceof Error ? error.message : error,
        data: null
    }
}

function authenticate(params: authenticateParams): ReturnAuth {
    try {
        const authenticated_user = users.find(user => user.username === params.username && user.password === params.password)
        if (authenticated_user) {
            return {
                success: true,
                status: 200,
                message: null,
                data: {
                    isAdmin: authenticated_user.isAdmin,
                    isSuperUser: authenticated_user.isSuperUser
                }
            }
        } else {
            return {
               success: false,
               status: 401,
               message: "Incorrect username or password.",
               data: null
            }
        }
    } catch (error) {
        return returnErrorAuth(error)
    }
}

function registerUser(params: registerUserParams): ReturnAuth {
    try {
        const user = users.find(user => user.username === params.username)
        if (user) {
            return {
                success: false,
                status: 409,
                message: `Username ${params.username} already exists.`,
                data: null
            }
        } else {
            users.push({
                username: params.username,
                password: params.password,
                isAdmin: false,
                isSuperUser: false
            })
            return {
                success: true,
                status: 201,
                message: null,
                data: null
            }
        }
    } catch (error) {
        return returnErrorAuth(error)
    }
}

function deleteUser(params: deleteUserParams): ReturnAuth {
    try {
        const auth = authenticate({
            username: params.credentials.username,
            password: params.credentials.password
        })
        if (auth.success === true) {
            if (permissions.deleteUser.isSuperUser === auth.data.isSuperUser) {
                const userToRemove = users.findIndex(user => user.username === params.username_to_delete)
                if (userToRemove !== -1) {
                    users.splice(userToRemove, 1)
                    return {
                        success: true,
                        status: 200,
                        message: null,
                        data: null
                    }
                }
                else {
                    return {
                        success: false,
                        status: 404,
                        message: `Username ${params.username_to_delete} not found.`,
                        data: null
                    }
                }
            }
            else if (permissions.deleteUser.isAdmin === auth.data.isAdmin) {
                const userToRemove = users.findIndex(user => user.username === params.username_to_delete)
                if (userToRemove !== -1) {
                    users.splice(userToRemove, 1)
                    return {
                        success: true,
                        status: 200,
                        message: null,
                        data: null
                    }
                }
                else {
                    return {
                        success: false,
                        status: 404,
                        message: `Username ${params.username_to_delete} not found.`,
                        data: null
                    }
                }
            }
            else {
                return {
                    success: false,
                    status: 403,
                    message: "Unauthorized",
                    data: null
                }
            }
        } else {
            return {
                success: false,
                status: 401,
                message: "Incorrect access credentials.",
                data: null
            }
        }
    } catch (error) {
        return returnErrorAuth(error)
    }
}

function updateUser(params: updateUserParams): ReturnAuth {
    try {
        const auth = authenticate({
            username: params.credentials.username,
            password: params.credentials.password
        })
        if (auth.success === true) {
            if (permissions.updateUser.isSuperUser === auth.data.isSuperUser) {
                const userToUpdate = users.findIndex(user => user.username === params.username_to_update)
                if (userToUpdate !== -1) {
                    if (params.data.isAdmin) {
                        users[userToUpdate].isAdmin = params.data.isAdmin
                    } 
                    else if (params.data.isSuperUser) {
                        users[userToUpdate].isSuperUser = params.data.isSuperUser
                    }
                    return {
                        success: true,
                        status: 200,
                        message: null,
                        data: null
                    }
                } else {
                    return {
                        success: false,
                        status: 404,
                        message: `Username ${params.username_to_update} not found.`,
                        data: null
                    }
                }
            }
            else if (permissions.updateUser.isAdmin === auth.data.isAdmin) {
                const userToUpdate = users.findIndex(user => user.username === params.username_to_update)
                if (userToUpdate !== -1) {
                    if (params.data.isAdmin) {
                        users[userToUpdate].isAdmin = params.data.isAdmin
                    } 
                    else if (params.data.isSuperUser) {
                        users[userToUpdate].isSuperUser = params.data.isSuperUser
                    }
                    return {
                        success: true,
                        status: 200,
                        message: null,
                        data: null
                    }
                } else {
                    return {
                        success: false,
                        status: 404,
                        message: `Username ${params.username_to_update} not found.`,
                        data: null
                    }
                }
            } else {
                return {
                    success: false,
                    status: 403,
                    message: "Unauthorized",
                    data: null
                }
            }
        } else {
            return {
                success: false,
                status: 401,
                message: "Incorrect access credentials.",
                data: null
            }
        }
    } catch (error) {
        return returnErrorAuth(error)
    }
}

function checkPermissions(params: checkPermissionsParams): ReturnAuth {
    try {
        const userCheck = users.find(user => user.username === params.username)
        if (userCheck) {
            return {
                success: true,
                status: 200,
                message: null,
                data: {
                    username: userCheck.username,
                    isAdmin: userCheck.isAdmin,
                    isSuperUser: userCheck.isSuperUser
                }
            }
        } else {
            return {
                success: false,
                status: 404,
                message: `Username ${params.username} not found.`,
                data: null
            }
        }
    } catch (error) {
        return returnErrorAuth(error)
    }
}

// first scenario

// Register User normal
console.log("Register user normal ------------------")

console.log(registerUser({
    username: "agda",
    password: "normal999"
}))

console.log(checkPermissions({
    username: "agda"
}))
// Register an administrator user
console.log("Register as administrator user ----------------")

console.log(registerUser({
    username: "loki",
    password: "admin"
}))

console.log(updateUser({
    credentials: {
        username: "mario",
        password: "admin"
    },
    username_to_update: "loki",
    data: {
        isAdmin: true
    }
}))

console.log(checkPermissions({
    username: "loki"
}))

// Register an super user
console.log("Register an super user ------------------------")

console.log(registerUser({
    username: "kira",
    password: "superuserkira"
}))

console.log(updateUser({
    credentials: {
        username: "mario",
        password: "admin"
    },
    username_to_update: "kira",
    data: {
        isSuperUser: true
    }
}))

console.log(checkPermissions({
    username: "kira"
}))

// Delete a user
console.log("Delete a user ------------------")

console.log(deleteUser({
    credentials: {
        username: "loki",
        password: "admin"
    },
    username_to_delete: "agda"
}))

console.log(deleteUser({
    credentials: {
        username: "mario",
        password: "admin"
    },
    username_to_delete: "agda"
}))
