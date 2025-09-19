// import React, { useState } from "react";
// import VehicleExitForm from "./vehicleExitForm";
// import VehicleEntryForm from "./vehicleEntryForm";
// import {
//   checkDriverStatus,
//   submitExitForm,
//   submitEntryForm,
//   exportExcel,
// } from "../services/api";

// const VehicleTracker = () => {
//   const [driverEmail, setDriverEmail] = useState("");
//   const [activeTrip, setActiveTrip] = useState(null);
//   const [submittedExit, setSubmittedExit] = useState(false);

//   const handleEmailSubmit = async (e) => {
//     e.preventDefault();
//     if (!driverEmail) return;
//     const status = await checkDriverStatus(driverEmail);
//     setActiveTrip(status.activeTrip);
//   };
// // const handleEmailSubmit = async (e) => {
// //   e.preventDefault();
// //   const response = await axios.get(`/api/trips/status/${email}`);
// //   if (response.data.activeTrip) {
// //     setActiveTrip(response.data.activeTrip);
// //     setShowEntryForm(true);
// //   } else {
// //     setShowExitForm(true);
// //   }
// // };


//   const handleExitSubmit = async (data) => {
//     const res = await submitExitForm(data);
//     setActiveTrip({ tripId: res.tripId });
//     setSubmittedExit(true);
//   };

//   const handleEntrySubmit = async (data) => {
//     await submitEntryForm(activeTrip.tripId, data);
//     alert("Entry submitted successfully!");
//     setActiveTrip(null);
//     setSubmittedExit(false);
//   };

//   return (
//     <div style={{ padding: "20px" , color: "black"}}>
//       <h1 style={{ textAlign: "center" }}>🚛 Vehicle Tracker App</h1>

//       {/* Driver Email */}
//       {!activeTrip && !submittedExit && (
//         <form onSubmit={handleEmailSubmit} style={{ textAlign: "center", marginBottom: "20px" }}>
//           <input
//             type="email"
//             placeholder="Enter your email"
//             value={driverEmail}
//             onChange={(e) => setDriverEmail(e.target.value)}
//             required
//           />
//           <button type="submit" style={{ marginLeft: "10px" }}>Check Status</button>
//         </form>
//       )}

//       {/* Show Exit Form if no active trip */}
//       {!activeTrip && driverEmail && (
//         <VehicleExitForm driverEmail={driverEmail} onSubmit={handleExitSubmit} />
//       )}

//       {/* Show Entry Form if active trip exists */}
//       {activeTrip && (
//         <VehicleEntryForm tripId={activeTrip.tripId} onSubmit={handleEntrySubmit} />
//       )}

//       {/* Export Excel button */}
//       <div style={{ textAlign: "center", marginTop: "20px" }}>
//         <button
//           onClick={exportExcel}
//           style={{
//             padding: "10px 20px",
//             backgroundColor: "orange",
//             color: "white",
//             fontSize: "16px",
//             border: "none",
//             borderRadius: "5px",
//             cursor: "pointer",
//           }}
//         >
//           Export All Trips to Excel
//         </button>
//       </div>
//     </div>
//   );
// };

// export default VehicleTracker;


import React, { useState } from "react";
import VehicleExitForm from "./vehicleExitForm";
import VehicleEntryForm from "./vehicleEntryForm";
import {
  checkDriverStatus,
  submitExitForm,
  submitEntryForm,
  exportExcel,
} from "../services/api";

const VehicleTracker = () => {
  const [driverEmail, setDriverEmail] = useState("");
  const [activeTrip, setActiveTrip] = useState(null);
  const [showExitForm, setShowExitForm] = useState(false);
  const [showEntryForm, setShowEntryForm] = useState(false);

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    if (!driverEmail) return;

    try {
      // Call backend to check if driver has an active trip
      const status = await checkDriverStatus(driverEmail);

      if (status.activeTrip) {
        setActiveTrip(status.activeTrip);
        setShowEntryForm(true);
        setShowExitForm(false);
      } else {
        setShowExitForm(true);
        setShowEntryForm(false);
        setActiveTrip(null);
      }
    } catch (err) {
      console.error("Error checking driver status:", err);
      alert("Unable to check status. Please try again.");
    }
  };

  const handleExitSubmit = async (data) => {
    try {
      const res = await submitExitForm(data);
      setActiveTrip({ tripId: res.tripId });
      setShowExitForm(false);
      setShowEntryForm(true);
    } catch (err) {
      console.error("Error submitting exit form:", err);
      alert("Failed to submit exit form. Try again.");
    }
  };

  const handleEntrySubmit = async (data) => {
    try {
      await submitEntryForm(activeTrip.tripId, data);
      alert("Entry submitted successfully!");
      setActiveTrip(null);
      setShowEntryForm(false);
      setShowExitForm(false);
      setDriverEmail(""); // reset email
    } catch (err) {
      console.error("Error submitting entry form:", err);
      alert("Failed to submit entry form. Try again.");
    }
  };

  return (
    <div style={{ padding: "20px", color: "black" }}>
      <h1 style={{ textAlign: "center" }}>🚛 Vehicle Tracker App</h1>

      {/* Driver Email */}
      {!showExitForm && !showEntryForm && (
        <form
          onSubmit={handleEmailSubmit}
          style={{ textAlign: "center", marginBottom: "20px" }}
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={driverEmail}
            onChange={(e) => setDriverEmail(e.target.value)}
            required
          />
          <button type="submit" style={{ marginLeft: "10px" }}>
            Submit
          </button>
        </form>
      )}

      {/* Show Exit Form */}
      {showExitForm && driverEmail && (
        <VehicleExitForm driverEmail={driverEmail} onSubmit={handleExitSubmit} />
      )}

      {/* Show Entry Form */}
      {showEntryForm && activeTrip && (
        <VehicleEntryForm tripId={activeTrip.tripId} onSubmit={handleEntrySubmit} />
      )}

      {/* Export Excel button */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button
          onClick={exportExcel}
          style={{
            padding: "10px 20px",
            backgroundColor: "orange",
            color: "white",
            fontSize: "16px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Export All Trips to Excel
        </button>
      </div>
    </div>
  );
};

export default VehicleTracker;
