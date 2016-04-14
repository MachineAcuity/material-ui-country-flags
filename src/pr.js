import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Pr = (props) => (
  <SvgIcon {...props}>
    
  <defs>
    <clipPath id="a">
      <path fillOpacity=".67" d="M-37.298 0h682.67v512h-682.67z"/>
    </clipPath>
  </defs>
  <g fill-rule="evenodd" clip-path="url(#a)" transform="translate(34.967) scale(.9375)">
    <path d="M-37.298 0h768v512h-768z"/>
    <path d="M-37.298 102.4h768v102.4h-768zM-37.298 307.2h768v102.4h-768z"/>
    <path d="M-37.298 0l440.69 255.67-440.69 255.34V0z"/>
    <path d="M156.45 325.47l-47.447-35.432-47.214 35.78 17.56-58.144-47.128-35.904 58.305-.5L108.61 173.3l18.472 57.835 58.305.077-46.886 36.243 17.947 58.016z"/>
  </g>

  </SvgIcon>
);
Pr = pure(Pr);
Pr.displayName = 'Pr';

export default Pr;
