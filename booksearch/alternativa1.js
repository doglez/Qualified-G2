import React, { useState } from "react";

const BookSearch = (props) => {
    const fields = ["author", "title", "country", "language", "year"];
    const [infoBook, setInfoBook] = useState({
        author: "",
        title: "",
        country: "",
        language: "",
        year: "",
    });

    const matchesBook = (book) => {
        return Object.entries(book).some(
            ([k, v]) =>
                !infoBook[k] ||
                v
                    .toString()
                    .toLowerCase()
                    .includes(fields[k].trim().toLowerCase())
        );
    };

    const handleChange = (evt, name) => {
        let data = { ...infoBook, [name]: evt.target.value };
        setInfoBook(data);
    };

    return (
        <div className="book-search-container">
            <div className="search-box">
                <label key="author">
                    author
                    <input
                        autoComplete="off"
                        value={infoBook.author}
                        className="author"
                        onChange={(evt) => handleChange(evt, "author")}
                    />
                </label>
                <label key="title">
                    title
                    <input
                        autoComplete="off"
                        value={infoBook.title}
                        className="title"
                        onChange={(evt) => handleChange(evt, "title")}
                    />
                </label>
                <label key="country">
                    country
                    <input
                        autoComplete="off"
                        value={infoBook.country}
                        className="country"
                        onChange={(evt) => handleChange(evt, "country")}
                    />
                </label>
                <label key="language">
                    language
                    <input
                        autoComplete="off"
                        value={infoBook.language}
                        className="language"
                        onChange={(evt) => handleChange(evt, "language")}
                    />
                </label>
                <label key="year">
                    year
                    <input
                        autoComplete="off"
                        value={infoBook.year}
                        className="year"
                        onChange={(evt) => handleChange(evt, "year")}
                    />
                </label>
            </div>
            <div className="books">
                {props.books
                    .filter((e) => matchesBook(e))
                    .map((e, i) => (
                        <div key={e.title + i} className="book">
                            {Object.entries(e).map(([k, v]) => (
                                <div key={k} className="book-detail-row">
                                    <span className="book-detail-key">{k}</span>
                                    <span className="book-detail-val">{v}</span>
                                </div>
                            ))}
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default BookSearch;
