import React, {useState} from "react";
import {HashRouter} from "react-router-dom";
import {connect} from "react-redux";
import {ChangeFillServiceContext} from '../change-fill-service-context';
import {FillServiceProvider} from '../fill-service-context';
import Header from "../header";
import PageWrapper from "../page-wrapper";
import ErrorBoundary from "../error-boundary";
import ShortFillService from "../../services/short-fill-service";
import LongFillService from "../../services/long-fill-service";

import './app.css';


const App = ({fillServiceType}) => {
    // const [fillObj, setFillService] = useState({type:'short', service: new ShortFillService()});
    const [fillService, setFillService] = useState(new ShortFillService());
    const changeFillService = (fillServiceType) => {
        let tmpService;

        switch (fillServiceType) {
            case 'short': {
                tmpService = ShortFillService;
                break;
            }
            case 'long': {
                tmpService = LongFillService;
                break;
            }
            default: {
                tmpService = ShortFillService;
            }
        }

        if(!(fillService instanceof tmpService)) {
            setFillService(new tmpService());
        }
    };

    // useEffect(() => {
    //     changeFillService(fillServiceType);
    // }, [fillServiceType, fillService]);

    return (
        <ChangeFillServiceContext.Provider value={changeFillService}>
            <FillServiceProvider value={fillService}>
                <ErrorBoundary>
                    <HashRouter>
                        <Header />
                        <PageWrapper />
                    </HashRouter>
                </ErrorBoundary>
            </FillServiceProvider>
        </ChangeFillServiceContext.Provider>
    );
};
const mapStateToProps = (state) => {
    return {
        fillServiceType: state.fillService
    };
}

export default connect(mapStateToProps)(App);
