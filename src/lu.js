import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Lu = (props) => (
  <SvgIcon {...props}>
    
  <g fill-rule="evenodd" fillOpacity="1">
    <path d="M0 0h640v160.683H0z"/>
    <path d="M0 160.683h640V321.55H0z"/>
    <path d="M0 321.55h640v158.448H0z"/>
  </g>

  </SvgIcon>
);
Lu = pure(Lu);
Lu.displayName = 'Lu';

export default Lu;
