import React, { Component } from 'react'
import { BrowserRouter, Route, Routes} from "react-router-dom";
import { Container } from 'react-bootstrap'
import Header from './header'
import Landing from './landing'
import If from './common/if';
import { FIELDS, HEADERS, PAGES, basePath } from '../constants';
import Coding from './coding';
import Platform from './coding/platform';
import Problem from './coding/problem';
import GMAT from './gmat';
import Section from './gmat/section';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            [FIELDS.page]: PAGES.LANDING
        }
    }

    componentDidMount() {
        if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
			document.body.classList.add("dark-mode")
		}
		else {
			document.body.classList.add("light-mode")
		}
		window.matchMedia('(prefers-color-scheme: dark)')
			.addEventListener('change', event => {
				if(event.matches) {
					document.body.classList.add("dark-mode")
					document.body.classList.remove("light-mode")
				}
				else {
					document.body.classList.add("light-mode")
				document.body.classList.remove("dark-mode")
			}
		});
    }

    onChange = (field, value) => {
        this.setState({
            [field]: value
        })
    }

    render() {
        const {page} = this.state;

        return (
            <BrowserRouter>
				<Routes>
					<Route
						exact
						path={basePath+"/"}
						element={<Landing/>}
					/>
					<Route
                        exact
						path={basePath+`/${PAGES.CODING}`}
						element={<Coding/>}
					/>
                    <Route
                        path={basePath+`/${PAGES.CODING}/:platform`}
                        element={<Platform/>}
                    />
                    <Route
                        path={basePath+`/${PAGES.CODING}/:platform/:problem`}
                        element={<Problem/>}
                    />
                    <Route
                        exact
                        path={basePath+`/${PAGES.GMAT}`}
                        element={<GMAT/>}
                    />
                    <Route
                        exact
                        path={basePath+`/${PAGES.GMAT}/:section`}
                        element={<Section/>}
                    />
				</Routes>
			</BrowserRouter>
        )
    }
}