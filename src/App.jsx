import Header from './components/Header/Header';
import SearchBox from './components/searchbox/SearchBox';
import ResultBox from './components/ResultBox/ResultBox';
import React, { useState } from 'react';
import './App.css';

let App = () => {
    const [HeaderText, setHeaderText] = useState({
        text: 'Search It!',
        input: true,
    });

    const [inputValue, setResultBox] = useState({
        result: '',
    });

    const HandleInputChange = (inputText) => {
        setHeaderText((prevState) => ({
            ...prevState,
            input: !inputText,
        }));
        setResultBox((prev) => ({
            ...prev,
            result: inputText,
        }));
    };

    return (
        <>
            <Header headTitle={HeaderText.text} input={HeaderText.input} />
            <SearchBox HandleInputChange={HandleInputChange} />
            <ResultBox inputValue={inputValue.result} />
        </>
    );
};

export default App;
