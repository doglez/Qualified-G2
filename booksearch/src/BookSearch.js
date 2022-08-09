import React from "react";

class BookSearch extends React.Component {
    constructor(props) {
        super(props);
        const fields = ["author", "title", "country", "language", "year"];
        this.state = {
            fields: fields.reduce((a, e) => {
                a[e] = "";
                return a;
            }, {}),
        };
    }

    matchesBook(book) {
        const { fields } = this.state;

        console.log(fields);

        return info;
    }

    handleChange(evt, name) {
        let data = evt.target.value;
        this.setState((state) => ({
            ...state,
            fields: {
                ...state.fields,
                [name]: data,
            },
        }));
    }

    render() {
        return (
            <div className="book-search-container">
                <div className="search-box">
                    {Object.keys(this.state.fields).map((e) => (
                        <label key={e}>
                            {e}
                            <input
                                autoComplete="off"
                                value={this.state.fields[e]}
                                className={e}
                                onChange={(evt) => this.handleChange(evt, e)}
                            />
                        </label>
                    ))}
                </div>
                <div className="books">
                    {this.props.books
                        .filter((e) => this.matchesBook(e))
                        .map((e, i) => (
                            <div key={e.title + i} className="book">
                                {Object.entries(e).map(([k, v]) => (
                                    <div key={k} className="book-detail-row">
                                        <span className="book-detail-key">
                                            {k}
                                        </span>
                                        <span className="book-detail-val">
                                            {v}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        ))}
                </div>
            </div>
        );
    }
}

export default BookSearch;
