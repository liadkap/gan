import AlbumSchema from '../albumSchema';
import mongoose from 'mongoose';

export default mongoose.model('Album', AlbumSchema);