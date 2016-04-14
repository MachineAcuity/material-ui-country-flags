import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let La = (props) => (
  <SvgIcon {...props}>
    
  <defs>
    <clipPath id="a">
      <path fillOpacity=".67" d="M0 0h640v480H0z"/>
    </clipPath>
  </defs>
  <g fill-rule="evenodd" clip-path="url(#a)">
    <path d="M-40 0h720v480H-40z"/>
    <path d="M-40 119.26h720v241.48H-40z"/>
    <path d="M423.42 239.998a103.419 103.419 0 1 1-206.838 0 103.419 103.419 0 1 1 206.837 0z"/>
  </g>

  </SvgIcon>
);
La = pure(La);
La.displayName = 'La';

export default La;
