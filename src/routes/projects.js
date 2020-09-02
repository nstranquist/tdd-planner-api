import express from 'express';
import { ProjectsController } from '../controllers';

const projectsRouter = express.Router();

const projectsController = new ProjectsController();

projectsRouter.get('/', projectsController.index);
projectsRouter.post('/', projectsController.createProject);
projectsRouter.delete('/:id', projectsController.removeProject);
projectsRouter.put('/:id', projectsController.modifyProject);

export default projectsRouter;
