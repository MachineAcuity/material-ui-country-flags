import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Zz = (props) => (
  <SvgIcon {...props}>
    
  <path fill-rule="evenodd" d="M0 478h640v2H0zm0-319h640v2H0zm0 160h640v2H0z"/>
  <path d="M0 0h2v480H0zm638 0h2v480h-2zM319 0h2v480h-2z"/>
  <path fill-rule="evenodd" d="M0 0h640v2H0zm0 239h640v2H0z"/>

  </SvgIcon>
);
Zz = pure(Zz);
Zz.displayName = 'Zz';

export default Zz;
