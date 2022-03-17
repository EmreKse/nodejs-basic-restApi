var Users = require('../data/kullaniciDB.json');
const {v4:uuidv4} = require('uuid');
const {writeFile} = require('../utils');

const findAll = () => {
    return new Promise((res, reject) => {
        res(Users);
    })
}

const findById = (id) => {
    return new Promise((res, reject) => {
        const user = Users.find(u => u.id === id);
        res(user);
    })
}

const create = (user) => {
    return new Promise((res, reject) => {
        const newUser = {id:uuidv4(),...user};
        Users.push(newUser);
        writeFile('./data/kullaniciDB.json', Users);
        res(newUser);
    })
}

const update = (id, user) => {
    return new Promise((res, reject) => {
        const index = Users.findIndex((u) => u.id === id);
        Users[index] = {id, ...user};

        writeFile('./data/kullaniciDB.json', Users);
        res(Users[index]);

    })
}

const deleteById = (id) => {
    return new Promise((res, reject) => {
        const users = Users.filter((u) => u.id !== id);

        writeFile('./data/kullaniciDB.json', users);
        res();

    })
}

module.exports = {
    findAll,
    findById,
    create,
    update,
    deleteById
}