import React from 'react';
import {HashRouter} from 'react-router-dom';
import Header from "../header";
import PageWrapper from "../page-wrapper";
import ErrorBoundary from "../error-boundary";

import './app.css';


const App = () => {
    return (
        <React.Fragment>
            <ErrorBoundary>
                <HashRouter>
                    <Header />
                    <PageWrapper />
                </HashRouter>
            </ErrorBoundary>
        </React.Fragment>
    );
};

export default App;
