import {Route, Switch, useLocation} from "react-router-dom";
import {HomePage, TablePage} from "../pages";
import React from "react";

const PageWrapper = () => {
    let location = useLocation();

    return (
        <div className="card-body">
            <Switch location={location}>
                <Route exact path="/" children={<HomePage />} />
                <Route strict path="/table/:dataLength(short|long)/:pageIndex([\d]+)?" children={<TablePage />} />
            </Switch>
        </div>
    );
};

export default PageWrapper;
