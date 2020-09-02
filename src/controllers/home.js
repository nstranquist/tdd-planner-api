import { testEnv } from '../settings';

const homeController = () => ({
  indexPage: (req, res) => res.status(200).json({
    message: testEnv
  })
});

export default homeController;
