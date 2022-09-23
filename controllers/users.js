
import uuid4 from "uuid4";

let users = [];

export const getUsers = (req, res) => {
    res.send(users);
}

export const getUserById = (req, res) => {
    const { id } = req.params;
    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser);
}

export const createUser = (req, res) => {
    const user = req.body;
    const userId = uuid4();
    const userWithId = {...user, id: userId} //... spread operator

    users.push(userWithId);
    res.send(`User with the name ${user.firstName} has been added to the DB`)
}

export const deleteUserById = (req, res) => {
    const { id } = req.params;
    users = users.filter((user) => user.id !== id);
    res.send(`User with the id ${id} has been deleted`);
}

export const patchUser = (req, res) => {
    const { id } = req.params;

    const {firstName, lastName, age } = req.body;
    const userToBeUpdated = users.find((user) => user.id === id);

    if (firstName) userToBeUpdated.firstName = firstName;
    if (lastName) userToBeUpdated.lastName = lastName;
    if (age) userToBeUpdated.age = age;

    res.send(`User with the id ${id} has been updated`);
}