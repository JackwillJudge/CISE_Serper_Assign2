import React from "react";
import SEPractices from "../articledata/SEPractices";
import EvidenceLevel from "../articledata/EvidenceLevel";
import Claim from "../articledata/Claim";

const practiceOptionItems = SEPractices.map((SEPractice) => (
  <option key={SEPractice.practice}>{SEPractice.practice}</option>
));
const evidenceOptionItems = EvidenceLevel.map((EvidenceLevel) => (
  <option key={EvidenceLevel.evidenceLevel}>
    {EvidenceLevel.evidenceLevel}
  </option>
));
const claimOptionItems = Claim.map((Claim) => (
  <option key={Claim.claim}>{Claim.claim}</option>
));

const Dropdown = () => {
  return (
    <div>
      <select>
        <option value="">Select an SE Practice </option>
        {practiceOptionItems}
      </select>
      <select>
        <option value="">Select a claim</option>
        {claimOptionItems}
      </select>
      <select>
        <option value="">Select an Evidence Level</option>
        {evidenceOptionItems}
      </select>
    </div>
  );
};
export default Dropdown;
