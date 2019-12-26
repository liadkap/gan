import UserRoute from '../user'

export default app => {
    app.use('/users', UserRoute);
  };