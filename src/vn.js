import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Vn = (props) => (
  <SvgIcon {...props}>
    
  <defs>
    <clipPath id="a">
      <path fillOpacity=".67" d="M-85.334 0h682.67v512h-682.67z"/>
    </clipPath>
  </defs>
  <g fill-rule="evenodd" clip-path="url(#a)" transform="translate(80.001) scale(.9375)">
    <path d="M-128 0h768v512h-768z"/>
    <path d="M349.59 381.05l-89.576-66.893-89.137 67.55 33.152-109.77-88.973-67.784 110.08-.945 34.142-109.44 34.873 109.19 110.08.144-88.517 68.423 33.884 109.53z"/>
  </g>

  </SvgIcon>
);
Vn = pure(Vn);
Vn.displayName = 'Vn';

export default Vn;
