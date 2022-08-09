import React from "react";
import BookSearch from "./BookSearch";
import booksD from "./sample_data/books.json";

/* Changes made to this file will not affect your tests.
 * This file is used to control the behavior of the web preview.
 */

const books = booksD;

const App = (props) => {
    return (
        <div id="app">
            <BookSearch books={books} />
        </div>
    );
};

export default App;
