import React, { useEffect, useState } from 'react';
import './App.css';
import Bio from './components/Bio'
import Title from './components/Title';
import Projects from './components/Projects';
import {ThemeProvider} from './contexts/ThemeContext'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Footer from './components/Footer'


function App() {
  const [githubData, setGitHubData] = useState({})
  const [reposData, setReposData] = useState([])
  useEffect(() => {
    fetchData("https://api.github.com/users/Mily26", setGitHubData);
    fetchData("https://api.github.com/users/Mily26/repos", setReposData);
  },[])

  async function fetchData(url, setter) {
    const getData = await fetch(url)
    const json = await getData.json()

    setter(json)

  }

  const reposToShow = ["agency", "ClimaApp", "react-courflix", "devblog", "memory", "reading", "pokedex"]
  const reposUrl = {
    agency: "https://agency-roan.vercel.app/",
    ClimaApp: "https://clima-app.vercel.app/",
    "react-courflix": "https://react-courflix.vercel.app/",
    devblog: "https://devblog-delta.vercel.app/",
    memory: "https://memory-omega.vercel.app/",
    reading: "https://reading-lemon.vercel.app/",
    pokedex: "https://pokedex-rust-eight.vercel.app/"
  }

  reposData.forEach(repo => repo.vercelUrl = reposUrl[repo.name])

  const contextData = {
    info: githubData,
    repos: reposData.filter((repo) => reposToShow.indexOf(repo.name) !== -1)
  };



  return (
    <ThemeProvider value={contextData}>
      <Navbar />
      <Title />
      <Bio />
      <Projects />
      <Skills />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
