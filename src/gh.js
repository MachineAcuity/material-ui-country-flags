import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Gh = (props) => (
  <SvgIcon {...props}>
    
  <path d="M0 0h640v480H0z"/>
  <path d="M0 0h640v320H0z"/>
  <path d="M0 0h640v160H0z"/>
  <path d="M320 160l51.987 160-136.104-98.885h168.234L268.013 320z"/>

  </SvgIcon>
);
Gh = pure(Gh);
Gh.displayName = 'Gh';

export default Gh;
