import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Tf = (props) => (
  <SvgIcon {...props}>
    
  <defs>
    <path d="M0-21l12.344 37.99-32.316-23.48h39.944l-32.316 23.48z" id="a"/>
  </defs>
  <path d="M0 0h640v480H0z"/>
  <path d="M0 0h292.8v196.8H0z"/>
  <path d="M0 0h96v192H0z"/>
  <path d="M192 0h96v192h-96z"/>
  <path d="M426 219.6l15.45 24.6h43.95V330l-33-51.6-44.4 70.8h21.6l22.8-40.8 46.8 84 46.8-84 22.8 40.8h21.6L546 278.4 513 330v-47.4h19.8l14.7-23.4H513v-15h43.95l15.45-24.6H426zm51.6 105h-48v16.8h48zm91.2 0h-48v16.8h48z"/>
  <use height="100%" width="100%"  x="416" y="362" transform="scale(1.2)"/>
  <use height="100%" width="100%"  x="371" y="328" transform="scale(1.2)"/>
  <use height="100%" width="100%"  x="461" y="328" transform="scale(1.2)"/>
  <use height="100%" width="100%"  x="333" y="227" transform="scale(1.2)"/>
  <use height="100%" width="100%"  x="499" y="227" transform="scale(1.2)"/>

  </SvgIcon>
);
Tf = pure(Tf);
Tf.displayName = 'Tf';

export default Tf;
