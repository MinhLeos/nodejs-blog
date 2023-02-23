module.exports = {
    multipleMongooseToObject: function (mongooseArray) {
        return mongooseArray.map(data => data.toObject())
    },
    mongooseToObject: function(mongodbObject) {
        return mongodbObject ? mongodbObject.toObject() : mongodbObject;
    }
}
