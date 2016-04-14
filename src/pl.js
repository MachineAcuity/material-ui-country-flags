import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Pl = (props) => (
  <SvgIcon {...props}>
    
  <g fill-rule="evenodd">
    <path d="M640 480H0V0h640z"/>
    <path d="M640 480H0V240h640z"/>
  </g>

  </SvgIcon>
);
Pl = pure(Pl);
Pl.displayName = 'Pl';

export default Pl;
