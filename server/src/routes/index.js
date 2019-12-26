import UserRoute from '../api/user'
import GalleryRoute from '../api/gallery'

export default app => {
    app.use('/users', UserRoute);
    app.use('/gallery', GalleryRoute);
  };