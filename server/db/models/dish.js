var mongoose = require('mongoose');

var dishSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true
    },
    ingredients: [String],
    spiciness: {
        type: Number,
        min: 1,
        max: 5
    },
    description: String,
    //available dishes 
    price: Number,
    quantity: Number,
    tags: [{
        type: mongoose.Schema.ObjectId,
        ref: 'Tag'
    }],
    picture: {
        type: String,
        default: 'http://mazwo.com/wp-content/uploads/2014/08/question-mark-made-of-food.jpg'
    }
});

//@params: tags: [String]
dishSchema.statics.findByTags = function(tags){
    return Dish.find({}).populate('tags', null, { name: { $in: tags } }).exec()
        .then(function(dishes){
            return dishes;
        })
        .then(null, function(err){
            throw err.message;
        });

}

mongoose.model('Dish', dishSchema);