import React from 'react';
import GeoStyle from './Geo.module.css';

const Geo = (props) => {
  const { address } = props;
  return (
    <div className={GeoStyle.container}>
      <h5 className='orange'>GEO</h5>
      <div> LAT: {(address) ? (address.geo.lat) : (null)} </div>
      <div> LNG: {(address) ? (address.geo.lng) : (null)} </div>
    </div>
  )
}

export default Geo;
