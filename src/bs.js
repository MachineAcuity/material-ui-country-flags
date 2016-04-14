import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Bs = (props) => (
  <SvgIcon {...props}>
    
  <defs>
    <clipPath id="a">
      <path fillOpacity=".67" d="M-12 0h640v480H-12z"/>
    </clipPath>
  </defs>
  <g fill-rule="evenodd" clip-path="url(#a)" transform="translate(12)">
    <path d="M968.53 480H-10.45V1.77h978.98z"/>
    <path d="M968.53 344.48H-10.45V143.3h978.98z"/>
    <path d="M968.53 480H-10.45V320.59h978.98zm0-318.69H-10.45V1.9h978.98z"/>
    <path d="M-10.913 0c2.173 0 391.71 236.82 391.71 236.82l-392.8 242.38L-10.916 0z"/>
  </g>

  </SvgIcon>
);
Bs = pure(Bs);
Bs.displayName = 'Bs';

export default Bs;
