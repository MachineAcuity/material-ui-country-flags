import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Gw = (props) => (
  <SvgIcon {...props}>
    
  <defs>
    <clipPath id="a">
      <path fillOpacity=".67" d="M0 77.588h503.67v377.75H0z"/>
    </clipPath>
  </defs>
  <g fill-rule="evenodd" clip-path="url(#a)" transform="matrix(1.27 0 0 1.27 0 -98.59)">
    <path d="M159.45-60.328h375.7v327.84h-375.7z"/>
    <path d="M207.32 258.67H512v253.07H207.32z"/>
    <path d="M0 0h207.32v512H0z"/>
    <path d="M160.61 325.58l-55.86-39.888-55.587 40.28 20.674-65.457-55.485-40.42 68.645-.563 21.29-65.258 21.748 65.108 68.645.086-55.2 40.8 21.13 65.312z"/>
  </g>

  </SvgIcon>
);
Gw = pure(Gw);
Gw.displayName = 'Gw';

export default Gw;
