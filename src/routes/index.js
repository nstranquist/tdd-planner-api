import express from 'express';
import { HomeController } from '../controllers';
import { messagesPage, addMessage } from '../controllers/messages';
import { modifyMessage } from '../middleware';

const indexRouter = express.Router();

const homeController = new HomeController();

indexRouter.get('/', homeController.indexPage);
indexRouter.get('/messages', messagesPage);
indexRouter.post('/messages', modifyMessage, addMessage);

export default indexRouter;
