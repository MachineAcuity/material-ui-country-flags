import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Bd = (props) => (
  <SvgIcon {...props}>
    
  <path d="M0 0h640v480H0z"/>
  <circle cx="280" cy="240" r="160"/>

  </SvgIcon>
);
Bd = pure(Bd);
Bd.displayName = 'Bd';

export default Bd;
