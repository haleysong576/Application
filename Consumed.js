const mongoose = require('mongoose');


const PostSchema = mongoose.Schema( {
    food: {
        type: String,
        required: true
    },
    Amount: {
        type: String, 
        required: true
    }
});
mongoose.pluralize(null);
module.exports = mongoose.model('consumed', PostSchema);
