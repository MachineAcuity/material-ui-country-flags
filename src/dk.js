import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Dk = (props) => (
  <SvgIcon {...props}>
    
  <path d="M0 0h640.1v480H0z"/>
  <path d="M205.714 0h68.57v480h-68.57z"/>
  <path d="M0 205.714h640.1v68.57H0z"/>

  </SvgIcon>
);
Dk = pure(Dk);
Dk.displayName = 'Dk';

export default Dk;
