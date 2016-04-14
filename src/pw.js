import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Pw = (props) => (
  <SvgIcon {...props}>
    
  <defs>
    <clipPath id="a">
      <path fillOpacity=".67" d="M-70.28 0h640v480h-640z"/>
    </clipPath>
  </defs>
  <g fill-rule="evenodd" clip-path="url(#a)" transform="translate(70.28)" stroke-width="1pt">
    <path d="M-173.44 0h846.32v480h-846.32z"/>
    <path d="M335.633 232.117a135.876 130.111 0 1 1-271.752 0 135.876 130.111 0 1 1 271.752 0z"/>
  </g>

  </SvgIcon>
);
Pw = pure(Pw);
Pw.displayName = 'Pw';

export default Pw;
