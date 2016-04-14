import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Sn = (props) => (
  <SvgIcon {...props}>
    
  <g fill-rule="evenodd" stroke-width="1pt">
    <path d="M-.006 0h213.328v480H-.006z"/>
    <path d="M213.322 0H426.65v480H213.322z"/>
    <path d="M426.65 0h213.328v480H426.65z"/>
  </g>
  <path d="M342.047 218.852h71.73l-56.627 43.556 20.762 69.314-56.627-43.569-56.627 41.588 20.762-67.333-56.627-43.556h69.844l22.648-71.295z"/>

  </SvgIcon>
);
Sn = pure(Sn);
Sn.displayName = 'Sn';

export default Sn;
