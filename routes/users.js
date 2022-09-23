import express from 'express';
import { getUsers, getUserById, createUser, patchUser, deleteUserById } from '../controllers/users';

const router = express.Router();

router.get('/', getUsers);

router.get('/:id', getUserById);

router.delete('/:id', deleteUserById);

router.patch('/:id',patchUser);

router.post('/', createUser);


export default router;