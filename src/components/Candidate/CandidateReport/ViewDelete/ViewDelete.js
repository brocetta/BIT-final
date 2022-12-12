import React, { useContext } from "react";
import DataContext from "../../../../utils/context";
import deleteReport from "../../../../utils/deleteReport";
import "./ViewDelete.scss";

const ViewDelete = ({ report, clickModal, setReportId }) => {
  const { data } = useContext(DataContext);
  const deleteAndRefreshReports = () => {
    deleteReport(report.id)
    .then(res => {
      if(res.status >= 200 && res.status < 400)
        data.setRefreshReports(!data.refreshReports)
    })
  };
  
  return (
    <div className="view-delete">
      <button>
        <svg
          onClick={() => {
            clickModal(true);
            setReportId(report.id);
          }}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="black"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </button>

      <button onClick={deleteAndRefreshReports}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="black"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};

export default ViewDelete;
