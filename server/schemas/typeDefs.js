const { gql } = require("apollo-server-express")

const typeDefs = gql`
type Auth {
    token: String!
    user: User
    dealer: Dealer
    inventory: Inventory
    car: Car
}

type User {
    _id: ID!
    firstName: String!
    lastName: String!
    email: String! 
    vechiles: [Inventory]
}

type Dealer {
    _id: ID!
    location: String!
    storeNumber: Int!
    phoneNumber: String!
    email: String
    vechiles: [Inventory]
}

type Inventory {
    _id: ID!
    name: String!
    cars: [Car]
}

type Car {
    _id: ID!
    year: Int!
    make: String!
    model: String!
    trim: String!
    price: Int!
    type: String
    images: [String]
    mileage: Int!
    mpg: String!       
    vin: String

}

input newInventory {
    name; String!
}

input newCar {
    year: Int!
    make: String!
    model: String!
    trim: String!
    price: Int!
    type: String
    images: [String]
    mileage: Int!
    mpg: String!
    vin: String
}

input updateCar {
    year: Int
    make: String
    model: String
    trim: String
    price: Int
    type: String
    images: [String]
    mileage: Int
    mpg: String
    vin: String
}

type Query {
    user(_id: ID!): User!
    getUsers: [User]
    dealer(_id: ID!): Dealer!
    getDealers: [Dealer]
    inventory(_id: ID!): Inventory!
    getCar(_id: ID!): Car
    getCars: [Car]
}

type Mutation {
    userLogin(email: String!, password: String!): Auth
    createUser(email: String!, firstName: String!, lastName: String!, password: String!): Auth
    deleteUser(_id: ID!): Auth

    dealerLogin(storeNumber: Number!, password: String!): Auth
    createDealer(location: String!, storeNumber: Int!, phoneNumber: String!, email: String, password: String!): Auth
    deleteDealer(_id: ID!): Auth

    createInventory(inventoryId: ID!, input: newInventory!): Inventory
    updateInventory(_id: ID!, input: newInventory!): Inventory
    deleteInventory(_id: ID!): Inventory

    createCar(inventory:Id!, input newCar!): Car
    updateCar(_Id: ID!, input: updateCar!): Car
    deleteCar(_id: ID!)

}



`

module.exports = typeDefs;