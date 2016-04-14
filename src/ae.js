import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Ae = (props) => (
  <SvgIcon {...props}>
    
  <g clip-path="url(#a)" fill-rule="evenodd" transform="matrix(1.3333 0 0 1 -85.333 0)">
    <path d="M0 0h192v512H0z"/>
    <path d="M192 340.06h576V512H192z"/>
    <path d="M192 172.7h576v169.65H192z"/>
    <path d="M192 0h576v172.7H192z"/>
  </g>

  </SvgIcon>
);
Ae = pure(Ae);
Ae.displayName = 'Ae';

export default Ae;
