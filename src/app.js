// import logger from 'morgan';
import express from 'express';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import indexRouter from './routes/index';
import projectsRouter from './routes/projects';

const app = express();

app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/v1', indexRouter);

app.use('/v1/projects', projectsRouter);

// This is our error handler
// Error handlers have 4 arguments, the first being the error
// Must come last, after every app.use() has been called
app.use((err, req, res) => {
  res.status(400).json({ error: err.stack });
});

export default app;
