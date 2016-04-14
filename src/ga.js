import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Ga = (props) => (
  <SvgIcon {...props}>
    
  <g fill-rule="evenodd">
    <path d="M640 480H0V0h640z"/>
    <path d="M640 160.003H0V0h640z"/>
    <path d="M640 480H0V319.997h640z"/>
  </g>

  </SvgIcon>
);
Ga = pure(Ga);
Ga.displayName = 'Ga';

export default Ga;
