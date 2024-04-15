import React, { useState } from "react";
import "../settings/settings.scss";
import PersonIcon from "@mui/icons-material/Person";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Personal from "./Personal";
import Doc from "./Doc";
import Support from "./Support";
import AssetInfo from "./AssetInfo";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("personal");

  const handleToggle = (tabName) => {
    setActiveTab(tabName);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "personal":
        return <Personal />;
      case "assertinfo":
        return <AssetInfo />;
      case "documentation":
        return <Doc />;
      case "support":
        return <Support />;
      default:
        return null;
    }
  };

  return (
    <div className="settings">
      <div className="left">
        <div
          className={`grid-setting ${
            activeTab === "personal" ? "active-tab" : ""
          }`}
          onClick={() => handleToggle("personal")}
        >
          <div className="icon-setting">
            <PersonIcon className="icon-setting" />
          </div>
          <div className="title-setting">
            <h6>Personal information</h6>
          </div>
        </div>
        <div
          className={`grid-setting ${
            activeTab === "assertinfo" ? "active-tab" : ""
          }`}
          onClick={() => handleToggle("assertinfo")}
        >
          <div className="icon-setting">
            <ReceiptLongIcon className="icon-setting" />
          </div>
          <div className="title-setting">
            <h6>Asset Info</h6>
          </div>
        </div>
        <div
          className={`grid-setting ${
            activeTab === "documentation" ? "active-tab" : ""
          }`}
          onClick={() => handleToggle("documentation")}
        >
          <div className="icon-setting">
            <AutoStoriesIcon className="icon-setting" />
          </div>
          <div className="title-setting">
            <h6>Documentation</h6>
          </div>
        </div>
        <div
          className={`grid-setting ${
            activeTab === "support" ? "active-tab" : ""
          }`}
          onClick={() => handleToggle("support")}
        >
          <div className="icon-setting">
            <HelpOutlineIcon className="icon-setting" />
          </div>
          <div className="title-setting">
            <h6>Support</h6>
          </div>
        </div>
      </div>

      <div className="right">{renderTabContent()}</div>
    </div>
  );
};

export default Settings;
