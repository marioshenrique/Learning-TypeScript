// Function exercises  in TypeScript

// 1 - Creating a simple API with traditional functions

/*
Create a set traditional functions to simulate a product API. The API must allow:

- Add a product to stock
- Remove a product from stock by id
- List all products
- Get a product by id
- Update a product by id

Rules:

- Each product has an id, name and price.
- The stock will be stored in an array.

*/

// Development

type UpdateProductParams = {
    id: number,
    name?: string
    price?: number
}

type ListProductParams = {
    id: number
}

type RemoveProductParams = {
    id: number
}

type AddProductParams = {
    name: string, 
    price: number
}

type Product = {
    id: number,
    name: string,
    price: number
}

type ReturnAPI = {
    success: boolean,
    status: 200 | 201 | 404 | 500,
    message: string | null,
    data: any | null
}

function ReturnError(error: any): ReturnAPI {
    return {
        success: false,
        status: 500,
        message: error instanceof  Error ? error.message : String(error),
        data: null
    }
}

const store: Product[] = []

function addProduct(body: AddProductParams): ReturnAPI {
    try {
        store.push({
            id: store.reduce((maxId, product) => Math.max(maxId, product.id), 0) + 1,
            name: body.name,
            price: body.price
        })
    } catch (error) {
        return ReturnError(error)
    }

    return {
        success: true,
        status: 201,
        message: null,
        data: null
    }
}

function removeProduct(body: RemoveProductParams): ReturnAPI {
    try {
        const indexToRemove = store.findIndex(product => product.id === body.id)
        if (indexToRemove !== -1) {
            store.splice(indexToRemove, 1)
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
                message: `Product with id ${body.id} was not found in database.`,
                data: null
            }
        }
    } catch (error) {
        return ReturnError(error)
    }
}

function listProduct(body: ListProductParams): ReturnAPI {
    try {
        const product = store.find(product => product.id === body.id)
        if (product) {
            return {
                success: true,
                status: 200,
                message: null,
                data: product
            }
        } else {
            return {
                success: false,
                status: 404,
                message: `Product with id ${body.id} was not found in database.`,
                data: null
            }
        }
    } catch (error) {
        return ReturnError(error)
    }
}

function listProducts(): ReturnAPI {
    try {
        return {
            success: true,
            status: 200,
            message: null,
            data: store
        }
    }  catch (error) {
        return ReturnError(error)
    }
}

function updateProduct(body: UpdateProductParams): ReturnAPI {
    try {
        const indexToUpdate = store.findIndex(product => product.id === body.id)
        if (indexToUpdate !== -1) {
            if (body.name) {
                store[indexToUpdate].name = body.name
            }
            if (body.price) {
                store[indexToUpdate].price = body.price
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
                message: `Product with id ${body.id} was not found in database.`,
                data: null
            }
        }
    } catch (error) {
        return ReturnError(error)
    }
}

// First scenario

// Add a product
console.log("Add a product")
console.log(addProduct(
    {
        name: "Product A",
        price: 1234
    }
))

// List all products
console.log("List all products")
console.log(listProducts())

// Get a product by id
console.log("Get a product by id")
console.log(listProduct(
    {
        id: 1
    }
))

// Update a product by id
console.log("Update a product by id")
console.log(updateProduct(
    {
        id: 1,
        name: "Product A updated",
        price: 1499
    }
))

console.log("Get a product updated by id")
console.log(listProduct(
    {
        id: 1
    }
))

// Remove a product from stock by id
console.log("Remove a product from stock by id")
console.log(removeProduct(
    {
        id: 1
    }
))

// Get a product that doesn't exist by id
console.log("Get a product by id to check if product was removed")
console.log(listProduct(
    {
        id: 1
    }
))

// Remove a product, which does not exist, by id
console.log("Trying to remove a product, which does not exist, by id.")
console.log(removeProduct(
    {
        id: 1
    }
))

// Update a product, which does not exist, by id
console.log("Trying to update a product, which does not exist, by id.")
console.log(updateProduct(
    {
        id: 1
    }
))
