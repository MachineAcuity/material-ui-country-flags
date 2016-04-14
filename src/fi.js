import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Fi = (props) => (
  <SvgIcon {...props}>
    
  <defs>
    <clipPath id="a">
      <path fillOpacity=".67" d="M-19.45 0h682.67v512H-19.45z"/>
    </clipPath>
  </defs>
  <g fill-rule="evenodd" clip-path="url(#a)" transform="translate(18.23) scale(.94)" stroke-width="1pt">
    <path d="M-105.62 325.66h249.35V512h-249.35z"/>
    <path d="M143.57 0h149.94v512H143.57z"/>
    <path d="M-105.62 186.18h897.67v139.64h-897.67z"/>
    <path d="M-105.62.003h249.35v186.34h-249.35zM293.35 325.66h498.7V512h-498.7zm0-325.658h498.7v186.34h-498.7zM-105.62 325.66h249.35V512h-249.35z"/>
    <path d="M143.57 0h149.94v512H143.57z"/>
    <path d="M-105.62.003h249.35v186.34h-249.35zM293.35 325.66h498.7V512h-498.7zm0-325.658h498.7v186.34h-498.7z"/>
  </g>

  </SvgIcon>
);
Fi = pure(Fi);
Fi.displayName = 'Fi';

export default Fi;
