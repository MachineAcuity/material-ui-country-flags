import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Nl = (props) => (
  <SvgIcon {...props}>
    
  <g fill-rule="evenodd" stroke-width="1pt" transform="scale(1.25 .9375)">
    <rect rx="0" ry="0" height="509.76" width="512"/>
    <rect rx="0" ry="0" height="169.92" width="512" y="342.08"/>
    <path d="M0 0h512v169.92H0z"/>
  </g>

  </SvgIcon>
);
Nl = pure(Nl);
Nl.displayName = 'Nl';

export default Nl;
