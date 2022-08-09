import bodyParser from "body-parser";
import express from "express";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/", (req, res) => {
    let guessedWord = req.body.guessedWord;
    let hiddenWord = req.body.hiddenWord;

    let splitGuessedWord = guessedWord.split("");
    let splitHiddenWord = hiddenWord.split("");

    let colorArray = [];
    let indexColorError = [];
    let usedIndexHiddenWord = new Set();
    let array = [];

    splitGuessedWord.map((guessedLetter, i) => {
        if (guessedLetter === splitHiddenWord[i]) {
            colorArray[i] = "G";
        } else {
            colorArray[i] = "B";
            indexColorError = [...indexColorError, i];
        }
    });

    for (let i = 0; i < indexColorError.length; i++) {
        for (let j = 0; j < indexColorError.length; j++) {
            if (
                splitGuessedWord[indexColorError[i]] ===
                splitHiddenWord[indexColorError[j]]
            ) {
                usedIndexHiddenWord.add(j);

                array = [...usedIndexHiddenWord];

                for (let k = 0; k < array.length; k++) {
                    colorArray[indexColorError[k]] = "Y";
                }
            }
        }
    }

    console.log(
        `${colorArray[0]}${colorArray[1]}${colorArray[2]}${colorArray[3]}${colorArray[4]}`
    );
    console.log(colorArray);

    res.status(200).json({
        ihave: `${colorArray[0]}${colorArray[1]}${colorArray[2]}${colorArray[3]}${colorArray[4]}`,
        correct: "BYBBB",
    });
});

app.listen(5000);
