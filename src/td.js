import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Td = (props) => (
  <SvgIcon {...props}>
    
  <g fill-rule="evenodd" fillOpacity="1">
    <path d="M0 0h213.97v480H0z"/>
    <path d="M426.03 0H640v480H426.03z"/>
    <path d="M213.97 0h212.06v480H213.97z"/>
  </g>

  </SvgIcon>
);
Td = pure(Td);
Td.displayName = 'Td';

export default Td;
