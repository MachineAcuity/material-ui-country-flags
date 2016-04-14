import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Jp = (props) => (
  <SvgIcon {...props}>
    
  <defs>
    <clipPath id="a">
      <path fillOpacity=".67" d="M-88.001 32h640v480h-640z"/>
    </clipPath>
  </defs>
  <g fill-rule="evenodd" clip-path="url(#a)" transform="translate(88.001 -32)" stroke-width="1pt">
    <path d="M-128 32h720v480h-720z"/>
    <ellipse rx="194.93" ry="194.93" transform="translate(-168.44 8.618) scale(.76554)" cy="344.05" cx="523.08"/>
  </g>

  </SvgIcon>
);
Jp = pure(Jp);
Jp.displayName = 'Jp';

export default Jp;
