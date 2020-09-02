import express from 'express';
import { HomeController } from '../controllers';

const indexRouter = express.Router();

const homeController = new HomeController();

indexRouter.get('/', homeController.indexPage);

export default indexRouter;
