import express from "express";

import {reqFilter} from './middleware';

import {check_token} from '../auth/token_validation';

import {signup} from '../controllers/login';
import {login} from '../controllers/login';
import {logout} from '../controllers/login';

import {dashboard} from '../controllers/dashboard';

import {insert} from '../controllers/task';
import {fetch} from '../controllers/task';
import {fetched} from '../controllers/task';
import {edit} from '../controllers/task';
import {remove} from '../controllers/task';

const router = express.Router();

router.post('/signup',signup);
router.post('/login',login);
router.get('/logout',logout);

router.get('/dashboard',dashboard);

router.post('/insert',check_token,reqFilter,insert);
router.get('/fetch',check_token,fetch);
router.get('/fetch/:id',check_token,fetched);
router.put('/edit',check_token,edit);
router.delete('/delete',check_token,remove);

export{
    router
}