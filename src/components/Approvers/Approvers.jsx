import React from "react";

import approvedImg from "../../public/assets/img/approved.svg";
import JohnSmithImg from "../../public/assets/img/John Smith.png";
import KatrinBrownImg from "../../public/assets/img/Katrin Brown.png";
import WillMcConnelImg from "../../public/assets/img/Will McConnel.png";
import MikeSmithImg from "../../public/assets/img/Mike Smith.png";

import "./Approvers.scss";

const Approvers = ( {vacation} ) => {
  const isApproved = vacation.status.toLowerCase().includes("approved");
  const isSickLive = vacation.type.toLowerCase().includes("sick");

  return (
    <div className="approversWrapper">
      <p className="approversHeading">
        {!isApproved && !isSickLive && "Current approver(s)"}
        {isApproved && !isSickLive && "Already approved"}
        {!isApproved && isSickLive && "Notified users"}
      </p>
      <div className="approver">
        <img
          src={isApproved ? approvedImg : JohnSmithImg}
          className="approverImg"
          alt="approver"
        />
        <div className="textData">
          <p className="approverName">John Smith</p>
          {isApproved && (
            <p className="approverComment">Comments: Have a nice vacation!</p>
          )}
        </div>
      </div>
      {!isApproved && !isSickLive && (
        <p className="approversHeading">"Next approver(s)"</p>
      )}
      <div className="approver">
        <img
          src={isApproved ? approvedImg : WillMcConnelImg}
          className="approverImg"
          alt="approver"
        />
        <div className="textData">
          <p className="approverName">Will McConnel</p>
        </div>
      </div>
      <div className="approver">
        <img
          src={isApproved ? approvedImg : MikeSmithImg}
          className="approverImg"
          alt="approver"
        />
        <div className="textData">
          <p className="approverName">Mike Smith</p>
        </div>
      </div>
      <p className="approversHeading">Documents registration (final step)</p>
      <div className="approver">
        <img
          src={isApproved ? approvedImg : KatrinBrownImg}
          className="approverImg"
          alt="approver"
        />
        <div className="textData">
          <p className="approverName">Katrin Brown</p>
        </div>
      </div>
    </div>
  );
};

export default Approvers;
