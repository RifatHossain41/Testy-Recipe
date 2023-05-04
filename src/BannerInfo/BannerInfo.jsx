import React from 'react';

const BannerInfo = (props) => {
  const {_id, name} = props.info
  return (
    <div>
      <h2>{name}</h2>
    </div>
  );
};

export default BannerInfo;