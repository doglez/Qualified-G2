import React, { useState } from "react";

const DynamicInput = () => {
    const [inputFields, setInputFields] = useState([]);

    const addFields = () => {
        let newfield = "";
        setInputFields([...inputFields, newfield]);
    };

    const handleChanceInput = (index, event) => {
        let data = [...inputFields];
        data[index] = event.target.value;
        setInputFields(data);
    };

    const upFields = (inputField, index) => {
        if (index !== 0) {
            let data = [...inputFields];
            let originalUp = inputField;
            data[index] = inputFields[index - 1];
            data[index - 1] = originalUp;
            setInputFields(data);
            document.getElementById(index - 1).focus();
        } else {
            document.getElementById(index).focus();
        }
    };

    const downFields = (inputField, index) => {
        if (index !== inputFields.length - 1) {
            let data = [...inputFields];
            let originalUp = inputField;
            data[index] = inputFields[index + 1];
            data[index + 1] = originalUp;
            setInputFields(data);
            document.getElementById(index + 1).focus();
        } else {
            document.getElementById(index).focus();
        }
    };

    const removeFields = (index) => {
        let data = [];
        for (let j = 0; j < inputFields.length; j++) {
            if (j !== index) {
                data = [...data, inputFields[j]];
            }
        }
        setInputFields(data);
        if (index === inputFields.length) {
            document.getElementById(index - 1).focus();
        } else if (index === 0) {
            document.getElementById(index).focus();
        } else if (index === inputFields.length - 1) {
            document.getElementById(index - 1).focus();
        } else {
            document.getElementById(index).focus();
        }
    };

    return (
        <>
            <button data-testid="add-row" onClick={addFields}>
                +
            </button>
            {inputFields.map((inputField, index) => (
                <div key={index}>
                    <input
                        id={index}
                        autoFocus
                        name={index}
                        data-testid="row-input"
                        value={inputField}
                        onChange={(e) => handleChanceInput(index, e)}
                    />
                    <button
                        data-testid="row-down"
                        onClick={() => upFields(inputField, index)}
                    >
                        Up
                    </button>
                    <button
                        data-testid="row-up"
                        onClick={() => downFields(inputField, index)}
                    >
                        Down
                    </button>
                    <button
                        data-testid="row-delete"
                        onClick={() => removeFields(index)}
                    >
                        x
                    </button>
                </div>
            ))}
        </>
    );
};

export default DynamicInput;
