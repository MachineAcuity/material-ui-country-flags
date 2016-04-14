import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Za = (props) => (
  <SvgIcon {...props}>
    
  <defs>
    <clipPath id="a">
      <path fillOpacity=".67" d="M-71.873-.012h682.68v512.01h-682.68z"/>
    </clipPath>
  </defs>
  <g clip-path="url(#a)" transform="translate(67.379 .011) scale(.93748)">
    <g fill-rule="evenodd" stroke-width="1pt">
      <path d="M-71.878 407.837V104.428l225.832 151.627-225.832 151.793z"/>
      <path d="M82.217 512.121l253.538-170.644h360.372v170.644H82.217z"/>
      <path d="M65.917.062l630.19.013v170.672H335.735S69.295-1.626 65.917.062z"/>
      <path d="M-71.878 64.075v40.329L153.954 256.03-71.878 407.823v40.327l284.44-192.12-284.44-191.955z"/>
      <path d="M-71.878 64.075V.062h94.891l301.313 203.88h371.778v104.261H324.326L23.013 512.053h-94.89V448.15l284.439-192.12-284.44-191.955z"/>
      <path d="M23.013.062h59.194l253.538 170.673h360.372v33.207H324.339L23.025.062zM23.013 512.121h59.194l253.538-170.644h360.372v-33.206H324.339L23.025 512.12z"/>
    </g>
  </g>

  </SvgIcon>
);
Za = pure(Za);
Za.displayName = 'Za';

export default Za;
