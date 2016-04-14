import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Id = (props) => (
  <SvgIcon {...props}>
    
  <g fill-rule="evenodd" stroke-width="1pt">
    <path d="M0 0h639.958v248.947H0z"/>
    <path d="M0 240h639.958v240H0z"/>
  </g>

  </SvgIcon>
);
Id = pure(Id);
Id.displayName = 'Id';

export default Id;
