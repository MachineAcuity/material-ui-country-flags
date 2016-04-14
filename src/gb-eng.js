import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let GbEng = (props) => (
  <SvgIcon {...props}>
    
  <path d="M0 0h640v480H0z"/>
  <path d="M281.6 0h76.8v480h-76.8z"/>
  <path d="M0 201.6h640v76.8H0z"/>

  </SvgIcon>
);
GbEng = pure(GbEng);
GbEng.displayName = 'GbEng';

export default GbEng;
