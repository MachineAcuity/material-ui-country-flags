import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Mg = (props) => (
  <SvgIcon {...props}>
    
  <g stroke-width="1pt" fill-rule="evenodd">
    <path d="M213.33 0H640v240H213.33z"/>
    <path d="M213.33 240H640v240H213.33z"/>
    <path d="M0 0h213.33v480H0z"/>
  </g>

  </SvgIcon>
);
Mg = pure(Mg);
Mg.displayName = 'Mg';

export default Mg;
