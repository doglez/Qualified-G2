const mongoose = require("mongoose");

const userSchema = mongoose.Schema({ name: String });
userSchema.set("toJSON", {
    virtuals: true,
    versionKey: false,
});
userSchema.set("toObject", {
    virtuals: true,
    versionKey: false,
});
const User = mongoose.model("User", userSchema);

module.exports = User;
