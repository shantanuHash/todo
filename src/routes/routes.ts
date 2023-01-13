import express from "express";

import {reqFilter} from './middleware';

import {insert} from '../controllers/task';
import {fetch} from '../controllers/task';
import {fetched} from '../controllers/task';
import {edit} from '../controllers/task';
import {remove} from '../controllers/task';
const router = express.Router();

router.post('/insert',reqFilter,insert);
router.get('/fetch',fetch);
router.get('/fetch/:id',fetched);
router.put('/edit',edit);
router.delete('/delete',remove);

export{
    router
}