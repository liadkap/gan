import { Schema } from 'mongoose';
import AlbumSchema from '../../album/albumSchema'

const PhotoSchema = new Schema({
    album: [AlbumSchema],
    url: {
        type: String,
        required: true
    },
    tags: [String]
});


export default PhotoSchema;