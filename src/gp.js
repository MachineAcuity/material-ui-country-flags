import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Gp = (props) => (
  <SvgIcon {...props}>
    
  <g fill-rule="evenodd" stroke-width="1pt">
    <path d="M0 0h640v480H0z"/>
    <path d="M0 0h213.337v480H0z"/>
    <path d="M426.662 0H640v480H426.662z"/>
  </g>

  </SvgIcon>
);
Gp = pure(Gp);
Gp.displayName = 'Gp';

export default Gp;
