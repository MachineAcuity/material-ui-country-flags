import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Se = (props) => (
  <SvgIcon {...props}>
    
  <defs>
    <clipPath id="a">
      <path fillOpacity=".67" d="M-53.421 0h682.67v512h-682.67z"/>
    </clipPath>
  </defs>
  <g clip-path="url(#a)" transform="translate(50.082) scale(.9375)">
    <g fill-rule="evenodd" stroke-width="1pt">
      <path d="M-121.103.302h256V205.1h-256zM-121.103 307.178h256v204.8h-256z"/>
      <path d="M-121.103 204.984h256v102.4h-256z"/>
      <path d="M133.843.01h102.4v511.997h-102.4z"/>
      <path d="M232.995 205.013h460.798v102.4H232.995z"/>
      <path d="M236.155 307.208h460.797v204.799H236.155zM236.155.302h460.797V205.1H236.155z"/>
    </g>
  </g>

  </SvgIcon>
);
Se = pure(Se);
Se.displayName = 'Se';

export default Se;
