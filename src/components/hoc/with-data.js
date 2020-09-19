import React, { Component } from 'react';
import Preloader from '../preloader';
import ErrorIndicator from '../error-indicator';

const withData = () => (WrappedComponent) => {
    return class extends Component {
        // componentDidMount() {
        //     const {fetchData} = this.props;
        //
        //     if(fetchData) {
        //         fetchData();
        //         console.log('Hello');
        //     }
        // }

        render() {
            const {hasLoading, hasError, ...otherProps} = this.props;

            if (hasLoading) {
                return <Preloader />;
            }

            if (hasError) {
                return <ErrorIndicator />;
            }

            return <WrappedComponent {...otherProps} />;
        }
    };
};

export default withData;
