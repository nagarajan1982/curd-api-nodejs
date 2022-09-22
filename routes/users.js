import express from 'express';
import uuid4 from "uuid4";

const router = express.Router();

const users = [];
router.get('/', (req, res) => {
    res.send(users);
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const foundUser = users.find((user) => user.id === id);
    res.send(user);
});

router.post('/', (req, res) => {
    const user = req.body;
    const userId = uuid4();
    const userWithId = {...user, id: userId} //... spread operator

    users.push(userWithId);
    res.send(`User with the name ${user.firstName} has been added to the DB`)
});


export default router;