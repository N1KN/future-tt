import React from 'react';
import { FillServiceConsumer } from '../fill-service-context';

const withFillService = () => (Wrapped) => {

  return (props) => {
    return (
      <FillServiceConsumer>
        {
          (fillService) => {
            return (<Wrapped {...props} fillService={fillService}/>);
          }
        }
      </FillServiceConsumer>
    );
  }
};

export default withFillService;
