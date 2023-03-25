import { useEffect, useState } from 'react'
import WhoIam from './WhoIam'
import './App.css'
import Navbar from './components/Navbar'
import Projects from './Projects'
import LoadingPage from './LoadingPage'
import CustomAlert from './components/CustomAlert'

function App() {

	return (
    	<div className="App">
			<CustomAlert message="Thank you for visiting my website! Please note that my portfolio is currently under construction, but we hope you found everything else you were looking for. Trying to finish it as soon as possible." />
			<Navbar />
			<WhoIam />
			<Projects />
    	</div>
	)
}

export default App
