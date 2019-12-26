import PhotoSchema from '../photoSchema';
import mongoose from 'mongoose';

export default mongoose.model('Photo', PhotoSchema);