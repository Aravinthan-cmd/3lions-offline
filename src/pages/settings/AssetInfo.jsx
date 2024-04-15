import React from "react";
import "../settings/assertinfo.scss";

const AssetInfo = () => {
  return (
    <div className="assertinfo">
      <div className="header_assert">
        <h3>Assert Information</h3>
        <div className="map"></div>
      </div>
      <div className="body_assert">
        <div className="type">
          <h5>Asset Type</h5>
          <input type="text" disabled value="3 Lions" />
        </div>
        <div className="location">
          <h5>Asset Location</h5>
          <input type="text" disabled value="/" />
        </div>
      </div>
      <div className="footer_assert">
        <button className="assert_btn">Download</button>
      </div>
    </div>
  );
};

export default AssetInfo;
