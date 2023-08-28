import React, { useState } from "react";
import MyContext from "./MyContext";
import { setStringAsync } from 'expo-clipboard';

const MyProvider = ({children}) => {
    const [value, setValue] = useState('');
    const [selected, setSelected] = useState(0);
    const [str, setStr] = useState('');
  
  const data = [
    {key: 0, value:'0'},
    {key:8, value:'8 Caracteres'},
    {key:16, value:'16 Caracteres'},
    {key:24, value:'24 Caracteres'},
    {key:32, value:'32 Caracteres'},
    {key:40, value:'40 Caracteres'},
  ]

  const gerarString = (characters, word) => {
    var randonString = '';
    var characteres = 'abcdefghijklmnopqrstuvxwyzABCDEFGHIJKLMNOPQRSTUVXWYZ0123456789@#$%!&*';
    var i = 0;
    if ((word.length === 0) && (parseInt(characters) === 0)) {
        do {
            randonString += characteres.charAt(Math.floor(Math.random() * characteres.length))
            i ++;
        } while ( i < 8);
    } else if ((word.length === 0) && (parseInt(characters) !== 0)) {
        do {
            randonString += characteres.charAt(Math.floor(Math.random() * characteres.length))
            i ++;
        } while (i < parseInt(characters));
    } else if ((word.length !== 0) && (parseInt(characters) === 0)) {
        do {
            randonString += word.charAt(Math.floor(Math.random() * word.length))
            i ++;
        } while (i < word.length);
    } else {
        do {
            randonString += word.charAt(Math.floor(Math.random() * word.length))
            i ++;
        } while (i < characters);
    }
    setStr(randonString);
  };

  const copyClipboard = async () => {
      await setStringAsync(str)
  };

    return (
        <MyContext.Provider
        value={{ value, setValue, selected, setSelected, data, str, setStr, gerarString, copyClipboard}}
        >
            {children}
        </MyContext.Provider>
    )
}

export default MyProvider;