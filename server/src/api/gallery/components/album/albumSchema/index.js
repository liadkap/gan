import { Schema } from 'mongoose'

const AlbumSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    coverUrl: {
        type: String,
        required: true
    }
});


export default AlbumSchema;