import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Pe = (props) => (
  <SvgIcon {...props}>
    
  <g fill-rule="evenodd" fillOpacity="1">
    <path d="M212.875 0h213.95v480h-213.95z"/>
    <path d="M0 0h212.875v480H0zM425.163 0H640v480H425.162z"/>
  </g>

  </SvgIcon>
);
Pe = pure(Pe);
Pe.displayName = 'Pe';

export default Pe;
