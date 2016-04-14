import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Gl = (props) => (
  <SvgIcon {...props}>
    
  <defs>
    <clipPath id="a">
      <path fillOpacity=".67" d="M-62.883 0h682.67v512h-682.67z"/>
    </clipPath>
  </defs>
  <g fill-rule="evenodd" clip-path="url(#a)" transform="translate(58.95) scale(.94)">
    <path d="M661.1 512h-766.65V0H661.1z"/>
    <path d="M661.1 512h-766.65V256.45H661.1zM347.57 255.85c0-86.577-70.184-156.766-156.763-156.766-86.576 0-156.765 70.185-156.765 156.765"/>
    <path d="M347.57 255.75c0 86.577-70.184 156.766-156.763 156.766-86.576 0-156.765-70.185-156.765-156.765"/>
  </g>

  </SvgIcon>
);
Gl = pure(Gl);
Gl.displayName = 'Gl';

export default Gl;
