import React from 'react'
import { appContext } from './appContext';
import { useContext, useState } from 'react'

import './App.css';
import Body from './components/Body';
import Head from './components/Head';




function App() {


  const [clicked, setClicked] = useState(false)

  const handleChatClick = (data) => {
    console.log(data)
    setClicked(true)
  }

  return (

    <appContext.Provider
      value={{
        handleChatClick,
        clicked
        // productsList,
        // isLoading
      }}

    >

      <>
        <Head />
        <Body />
      </>
    </appContext.Provider>

  );
}

export default App;
