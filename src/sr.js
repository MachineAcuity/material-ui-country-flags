import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Sr = (props) => (
  <SvgIcon {...props}>
    
  <path d="M.1 0h640v480H.1z"/>
  <path d="M.1 96h640v288H.1z"/>
  <path d="M.1 144h640v192H.1z"/>
  <path d="M320 153.167l56.427 173.666-147.73-107.33h182.605l-147.73 107.33z"/>

  </SvgIcon>
);
Sr = pure(Sr);
Sr.displayName = 'Sr';

export default Sr;
