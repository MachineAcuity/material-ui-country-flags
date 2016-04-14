import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Hu = (props) => (
  <SvgIcon {...props}>
    
  <g fill-rule="evenodd">
    <path d="M640.006 479.994H0V0h640.006z"/>
    <path d="M640.006 479.994H0V319.996h640.006z"/>
    <path d="M640.006 160.127H0V.13h640.006z"/>
  </g>

  </SvgIcon>
);
Hu = pure(Hu);
Hu.displayName = 'Hu';

export default Hu;
