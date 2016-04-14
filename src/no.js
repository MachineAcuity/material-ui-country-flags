import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let No = (props) => (
  <SvgIcon {...props}>
    
  <path d="M0 0h640v480H0z"/>
  <path d="M180 0h120v480H180z"/>
  <path d="M0 180h640v120H0z"/>
  <path d="M210 0h60v480h-60z"/>
  <path d="M0 210h640v60H0z"/>

  </SvgIcon>
);
No = pure(No);
No.displayName = 'No';

export default No;
