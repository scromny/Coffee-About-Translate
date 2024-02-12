import React from 'react';
import './App.scss';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Our from './Components/Our/Our';
import Lorem from './Components/Lorem/Lorem';
import Center from './Components/Center/Center';
import Footer from './Components/footer/footer';

function App() {

  const [lang, setLang] = React.useState('uz')

  return (
    <>
    <Header lang={lang} setLang={setLang}/>
    <Hero lang={lang} setLang={setLang}/>
    <Our lang={lang} setLang={setLang}/> 
    <Lorem lang={lang} setLang={setLang}/>
    <Center lang={lang} setLang={setLang}/>
    <Footer lang={lang} setLang={setLang}/>
    </>
  )
}

export default App;