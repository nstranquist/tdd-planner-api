import log from '../lib/logger';

const projectsController = () => ({
  index: (req, res) => res.status(200).json({
    message: 'Welcome to projects page'
  }),
  createProject: (req, res) => {
    log('req body:', req.body);
    return res.status(200).json({
      message: 'You tried to post'
    });
  },
  removeProject: (req, res) => {
    const projectId = req.params.id;
    log('projectId:', projectId);
    // remove project

    return res.status(204).json({
      message: 'Project removed successfully'
    });
  },
  modifyProject: (req, res) => {
    const projectId = req.params.id;
    log('projectId:', projectId);
    // remove project

    return res.status(204).json({
      message: 'Project modified successfully'
    });
  }
});

export default projectsController;
