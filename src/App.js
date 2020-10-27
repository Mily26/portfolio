import React, { useEffect, useState } from 'react';
import './App.css';
import Bio from './components/Bio'
import Title from './components/Title';
import Projects from './components/Projects';
import {ThemeProvider} from './contexts/ThemeContext'
import Navbar from './components/Navbar'


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

  const reposToShow = ["agency", "ClimaApp", "courflix", "devblog", "memory", "reading"]

  const contextData = {
    info: githubData,
    repos: reposData.filter((repo) => reposToShow.indexOf(repo.name) != -1)
  };



  return (
    <ThemeProvider value={contextData}>
      <Navbar />
      <Title />
      <Bio />
      <Projects />
    </ThemeProvider>
  );
}

export default App;
