import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import Connexion from './components/Connexion'
import Error from './components/Error'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const Root = () => (
	<>
		<Router>
			<Switch>
				<Route exact path="/" component={Connexion} />
				<Route path="/pseudo/:pseudo" component={App} />
				<Route component={Error}></Route>
			</Switch>
		</Router>
	</>
)

const rootElement = document.getElementById('root')
ReactDOM.render(
	<React.StrictMode>
		<Root />
	</React.StrictMode>,
	rootElement
)
