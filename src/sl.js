import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Sl = (props) => (
  <SvgIcon {...props}>
    
  <g fill-rule="evenodd" fillOpacity="1">
    <path d="M0 320.344h640V480H0z"/>
    <path d="M0 160.688h640v159.656H0z"/>
    <path d="M0 0h640v160.688H0z"/>
  </g>

  </SvgIcon>
);
Sl = pure(Sl);
Sl.displayName = 'Sl';

export default Sl;
