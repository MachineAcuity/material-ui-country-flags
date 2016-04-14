import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Mu = (props) => (
  <SvgIcon {...props}>
    
  <g fill-rule="evenodd" fillOpacity="1">
    <path d="M0 360h640v120H0z"/>
    <path d="M0 120h640v120H0z"/>
    <path d="M0 0h640v120H0z"/>
    <path d="M0 240h640v120H0z"/>
  </g>

  </SvgIcon>
);
Mu = pure(Mu);
Mu.displayName = 'Mu';

export default Mu;
