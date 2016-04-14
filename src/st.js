import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let St = (props) => (
  <SvgIcon {...props}>
    
  <defs>
    <clipPath id="a">
      <path fillOpacity=".67" d="M0 0h682.67v512H0z"/>
    </clipPath>
  </defs>
  <g clip-path="url(#a)" fill-rule="evenodd" transform="scale(.9375)">
    <path d="M0 0h1024v504.3H0z"/>
    <path d="M0 0h1024v146.29H0zM0 365.71h1024V512H0z"/>
    <path d="M.708 0c1.417 0 255.29 253.03 255.29 253.03L-.002 512 .707 0z"/>
    <g stroke-width="1pt">
      <path d="M411.966 268.686l-31.97-23.896 39.499.04 12.174-38.705 12.173 38.705 39.5-.029-31.977 23.885 12.236 38.687-31.938-23.942-31.938 23.937zM215.048 268.686l-31.971-23.896 39.5.04 12.173-38.705 12.174 38.705 39.5-.029-31.977 23.885 12.235 38.687-31.938-23.942-31.937 23.937z"/>
    </g>
  </g>

  </SvgIcon>
);
St = pure(St);
St.displayName = 'St';

export default St;
