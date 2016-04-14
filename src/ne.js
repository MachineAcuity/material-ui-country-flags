import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Ne = (props) => (
  <SvgIcon {...props}>
    
  <path d="M0 0h640v480H0z"/>
  <path d="M0 0h640v320H0z"/>
  <path d="M0 0h640v160H0z"/>
  <circle cx="320" cy="240" r="68"/>

  </SvgIcon>
);
Ne = pure(Ne);
Ne.displayName = 'Ne';

export default Ne;
