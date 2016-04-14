import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Bq = (props) => (
  <SvgIcon {...props}>
    
  <path d="M0 0h6.4v4.8H0z"/>
  <path d="M0 0h6.4v3.2H0z"/>
  <path d="M0 0h6.4v1.6H0z"/>

  </SvgIcon>
);
Bq = pure(Bq);
Bq.displayName = 'Bq';

export default Bq;
