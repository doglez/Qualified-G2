const mongoose = require("mongoose");

const express = require("express");
const bodyParser = require("body-parser");

const User = require("./models/user");
const Album = require("./models/album");
const Purchase = require("./models/purchase");

// TODO code the API
const app = express();
mongoose.connect("mongodb://localhost:27017/db_test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// parse application/json app.use(bodyParser.json())

app.post("/albums", async (req, res) => {
    const album = await Album.create(req.body);

    res.status(200).json({
        data: album,
    });
});

app.get("/albums", async (req, res) => {
    const albums = await Album.find();

    res.status(200).json({
        data: albums,
    });
});

app.get("/albums/:id", async (req, res) => {
    const album = await Album.findById(req.params.id);

    res.status(200).json({
        data: album,
    });
});

app.put("/albums/:id", async (req, res) => {
    const album = await Album.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });

    res.status(200).send(album.title);
});

app.delete("/albums/:id", async (req, res) => {
    await Album.findById(req.params.id);
    await Album.collection.drop();

    res.status(204).json();
});

app.post("/purchases", async (req, res) => {
    const user = await User.find({ name: req.body.user.name });
    const album = await Album.find({ title: req.body.album.title });
    // console.log(user[0]._id);
    // console.log(album[0]._id);

    const purchase = await Purchase.create({
        user: user[0]._id,
        album: album[0]._id,
    });

    const data = await Purchase.findById(purchase.id)
        .populate({
            path: "user",
            select: "name",
        })
        .populate({
            path: "album",
            select: "title",
        });

    res.status(200).json({
        data: data,
    });
});

app.listen(3000);

module.exports = app;
