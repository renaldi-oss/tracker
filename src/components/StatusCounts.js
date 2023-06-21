import React from "react";

const StatusCounts = ({ jobsList }) => {

  const counts = {
    rejectedCount: 0,
    interviewedCount: 0,
    technicalCount: 0,
    offerCount: 0
  };
  jobsList.forEach(job => {
    if (job.app_status === "Rejected") {
      counts.rejectedCount++;
    } else if (job.app_status === "Interviewed") {
      counts.interviewedCount++;
    } else if (job.app_status === "Technical") {
      counts.technicalCount++;
    } else if (job.app_status === "Offer") {
      counts.offerCount++;
    }
  });
  return (
    <div className="status-counts">
      <h1 className="statuses">Rejected: {counts.rejectedCount}</h1>
      <h1 className="statuses">Interviewed: {counts.interviewedCount}</h1>
      <h1 className="statuses">Technical: {counts.technicalCount}</h1>
      <h1 className="statuses">Offer: {counts.offerCount}</h1>
    </div>
  );
};
export default StatusCounts;