import {Schema, model, models} from "mongoose";

const ArticleSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'Users',
    },
    prompt: {
        type: String,
        required: [true, 'Prompt is required...'],
    },
    tag: {
        type: String,
        required: [true, 'Tag is required...'],
},
});

const Article = models.Article || model('Article', ArticleSchema);

export default Article;