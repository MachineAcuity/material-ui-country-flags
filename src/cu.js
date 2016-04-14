import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Cu = (props) => (
  <SvgIcon {...props}>
    
  <defs>
    <clipPath id="a">
      <path fillOpacity=".67" d="M-32 0h682.67v512H-32z"/>
    </clipPath>
  </defs>
  <g fill-rule="evenodd" clip-path="url(#a)" transform="translate(30) scale(.94)">
    <path d="M-32 0h768v512H-32z"/>
    <path d="M-32 102.4h768v102.4H-32zm0 204.8h768v102.4H-32z"/>
    <path d="M-32 0l440.69 255.67L-32 511.01V0z"/>
    <path d="M161.75 325.47l-47.447-35.432-47.214 35.78 17.56-58.144-47.13-35.904 58.306-.5 18.084-57.97 18.472 57.836 58.305.077-46.886 36.243 17.948 58.016z"/>
  </g>

  </SvgIcon>
);
Cu = pure(Cu);
Cu.displayName = 'Cu';

export default Cu;
