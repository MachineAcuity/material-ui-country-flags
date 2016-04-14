import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Mv = (props) => (
  <SvgIcon {...props}>
    
  <g fill-rule="evenodd">
    <path d="M640 480H0V0h640z"/>
    <path d="M410.48 91.74C237.41 141.38 262.07 367.72 424.29 385c-256.94 49.22-293.5-318.86-13.81-293.26z"/>
    <path d="M0 0h640v60H0zM0 420h640v60H0z"/>
    <path d="M.001 0h60v457.03h-60zM580 0h60v457.03h-60z"/>
  </g>

  </SvgIcon>
);
Mv = pure(Mv);
Mv.displayName = 'Mv';

export default Mv;
