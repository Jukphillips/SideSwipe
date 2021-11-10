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
    storeNumber: Number!
    phoneNumber: Number!
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
    year: Number!
    make: String!
    model: String!
    trim: String!
    price: Number!
    type: String!
    images: [String]
    mileage: Number!
    mpg: String!       
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




`

module.exports = typeDefs;