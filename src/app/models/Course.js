const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongoose_delete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String },
    description: { type: String },
    image: { type: String },
    slug: { type: String, slug: "name", unique: true },  //them unique de tranh trung slug >>> neu trung se tu them shortId vao sau
    videoId: { type: String },
    // createdAt: { type: Date, default: Date.now },
    // updatedAt: { type: Date, default: Date.now }
  }, {
    timestamps: true  //tu ver 4 tro di mongoose tu tao createAt va updateAt
  });
// Add plugin
mongoose.plugin(slug)
Course.plugin(mongoose_delete, { overrideMethods: true, deletedAt: true })

module.exports = mongoose.model('Course', Course);