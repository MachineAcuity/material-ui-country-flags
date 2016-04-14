import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Vc = (props) => (
  <SvgIcon {...props}>
    
  <g fill-rule="evenodd">
    <path d="M0 0h640v480H0z"/>
    <path d="M490 0h150v480H490z"/>
    <path d="M0 0h150v480H0z"/>
    <path d="M259.26 129.95l-46.376 71.391 44.748 74.391 43.82-73.735-42.192-72.046zM380.54 129.95l-46.376 71.391 44.748 74.391 43.82-73.735-42.192-72.046zM319.28 227.34l-46.376 71.391 44.748 74.391 43.82-73.735-42.192-72.046z"/>
  </g>

  </SvgIcon>
);
Vc = pure(Vc);
Vc.displayName = 'Vc';

export default Vc;
