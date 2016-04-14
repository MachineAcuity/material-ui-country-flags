import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Cf = (props) => (
  <SvgIcon {...props}>
    
  <defs>
    <clipPath id="a">
      <path fillOpacity=".67" d="M-12.355 32h640v480h-640z"/>
    </clipPath>
  </defs>
  <g clip-path="url(#a)" fill-rule="evenodd" transform="translate(12.355 -32)">
    <path d="M-52 32h719.29v118.94H-52z"/>
    <path d="M-52 391.65h719.29V512H-52z"/>
    <path d="M-52 271.3h719.29v120.35H-52z"/>
    <path d="M-52 150.94h719.29v120.35H-52z"/>
    <path d="M247.7 32.474h119.88v479.53H247.7z"/>
    <path d="M99.253 137.653L67.837 115.93l-31.314 21.937 10.87-36.717-30.457-23.118 38.14-.968 12.49-36.22 12.702 36.113 38.173.732-30.284 23.288"/>
  </g>

  </SvgIcon>
);
Cf = pure(Cf);
Cf.displayName = 'Cf';

export default Cf;
