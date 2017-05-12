import thunkMiddleware from 'redux-thunk' ;
import logger from 'redux-logger'


//import { logger } from './custom/logger';
export const middleware =     [
    logger ,thunkMiddleware
];
