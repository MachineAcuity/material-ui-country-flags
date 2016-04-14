import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Th = (props) => (
  <SvgIcon {...props}>
    
  <g fill-rule="evenodd">
    <path d="M0 0h640v480H0z"/>
    <path d="M0 162.544h640v160.003H0z"/>
    <path d="M0 .042h640v82.5H0zM0 400.003h640v80H0z"/>
  </g>

  </SvgIcon>
);
Th = pure(Th);
Th.displayName = 'Th';

export default Th;
