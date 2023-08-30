import express, { json } from 'express';
import 'express-async-errors';

import cookieSession from 'cookie-session';
import { currentUserRouter } from './routes/currentUser';
import { signinRouter } from './routes/signin';
import { signoutRouter } from './routes/signout';
import { signupRouter } from './routes/signup';
import { errorHandler } from './middlewares/errorHandler';
import { NotFoundError } from './errors/notFoundError';

const app = express();
app.set('trust proxy', true); // proxy used
app.use(json());
app.use(
  cookieSession({
    signed: false,
    // secure: true,
  }),
);

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

app.all('*', () => {
  throw new NotFoundError();
});
app.use(errorHandler);

export default app;
