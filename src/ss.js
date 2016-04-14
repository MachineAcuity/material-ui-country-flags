import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Ss = (props) => (
  <SvgIcon {...props}>
    
  <title>
    Flag of South Sudan
  </title>
  <path d="M0 6.72h12.8V9.6H0z"/>
  <path d="M0 2.88h12.8v3.84H0z"/>
  <path d="M0 0h12.8v2.88H0z"/>
  <path d="M0 3.36h12.8v2.88H0z"/>
  <path d="M0 0l8.314 4.8L0 9.6z"/>
  <path d="M4.014 3.897L1.235 4.8l2.779.903-1.717-2.364v2.922z"/>

  </SvgIcon>
);
Ss = pure(Ss);
Ss.displayName = 'Ss';

export default Ss;
