// import React, { useState } from "react";

// const VehicleExitForm = ({ onSubmit }) => {
//   const [formData, setFormData] = useState({
//     warehouse: "",
//     date: new Date().toISOString().split("T")[0],
//     vehicleType: "",
//     vendor: "",
//     vehicleOutKm: "",
//     driverName: "",
//     driverNumber: "",
//     daName: "",
//     daNumber: "",
//     cratesOut: "",
//     iceBoxOut: "",
//     gelPodOut: "",
//     odometerPhoto: null,
//   });

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setFormData({
//       ...formData,
//       [name]: files ? files[0] : value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const exitData = {
//       ...formData,
//       tripId: Date.now(), // Unique identifier for this trip
//     };
//     onSubmit(exitData);
//     alert("✅ Vehicle Exit recorded successfully!");
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       style={{
//         marginTop: "20px",
//         padding: "20px",
//         border: "1px solid #ccc",
//         borderRadius: "10px",
//         maxWidth: "600px",
//         marginLeft: "auto",
//         marginRight: "auto",
//         backgroundColor: "#f9f9f9",
//       }}
//     >
//       <h2 style={{ textAlign: "center", color: "black" }}>🚛 Vehicle Exit Form</h2>

//       <label><strong>Warehouse:</strong></label>
//       <select name="warehouse" value={formData.warehouse} onChange={handleChange} required>
//         <option value="">-- Select Warehouse --</option>
//         <option value="Noida">Noida</option>
//         <option value="Gurgaon">Gurgaon</option>
//       </select>
//       <br /><br />

//       <label><strong>Date:</strong></label>
//       <input type="date" name="date" value={formData.date} readOnly />
//       <br /><br />

//       <label><strong>Vehicle Type:</strong></label>
//       <select name="vehicleType" value={formData.vehicleType} onChange={handleChange} required>
//         <option value="">-- Select Vehicle Type --</option>
//         <option value="Micropod EV">Micropod EV</option>
//         <option value="Tata ace">Tata ace</option>
//         <option value="Tata ace EV">Tata ace EV</option>
//         <option value="Bolero">Bolero</option>
//       </select>
//       <br /><br />

//       <label><strong>Vendor:</strong></label>
//       <input type="text" name="vendor" placeholder="Enter vendor name" value={formData.vendor} onChange={handleChange} required />
//       <br /><br />

//       <label><strong>Vehicle Out Km:</strong></label>
//       <input type="number" name="vehicleOutKm" placeholder="Enter starting km reading" value={formData.vehicleOutKm} onChange={handleChange} required />
//       <br /><br />

//       <label><strong>Driver Name:</strong></label>
//       <input type="text" name="driverName" placeholder="Enter driver's name" value={formData.driverName} onChange={handleChange} required />
//       <br /><br />

//       <label><strong>Driver Number:</strong></label>
//       <input type="text" name="driverNumber" placeholder="Enter driver's number" value={formData.driverNumber} onChange={handleChange} required />
//       <br /><br />

//       <label><strong>DA Name:</strong></label>
//       <input type="text" name="daName" placeholder="Enter DA's name" value={formData.daName} onChange={handleChange} required />
//       <br /><br />

//       <label><strong>DA Number:</strong></label>
//       <input type="text" name="daNumber" placeholder="Enter DA's number" value={formData.daNumber} onChange={handleChange} required />
//       <br /><br />

//       <label><strong>Crates Out:</strong></label>
//       <input type="number" name="cratesOut" placeholder="Enter number of crates" value={formData.cratesOut} onChange={handleChange} required />
//       <br /><br />

//       <label><strong>Ice Box Out:</strong></label>
//       <input type="number" name="iceBoxOut" placeholder="Enter number of ice boxes" value={formData.iceBoxOut} onChange={handleChange} required />
//       <br /><br />

//       <label><strong>Gel Pod Out:</strong></label>
//       <input type="number" name="gelPodOut" placeholder="Enter number of gel pods" value={formData.gelPodOut} onChange={handleChange} required />
//       <br /><br />

//       <label><strong>Photo of Odometer:</strong></label>
//       <input type="file" name="odometerPhoto" accept="image/*" onChange={handleChange} required />
//       <br /><br />

//       <button type="submit" style={{ background: "green", color: "white", padding: "10px", border: "none", borderRadius: "5px" }}>
//         Submit Exit
//       </button>
//     </form>
//   );
// };

// export default VehicleExitForm;


// import React, { useState } from "react";

// const VehicleExitForm = ({ onSubmit, driverEmail }) => {
//   const [formData, setFormData] = useState({
//     tripId: Date.now(),
//     driverEmail,
//     warehouse: "",
//     date: new Date().toISOString().slice(0, 10),
//     vehicleType: "",
//     vendor: "",
//     vehicleOutKm: "",
//     driverName: "",
//     driverNumber: "",
//     daName: "",
//     daNumber: "",
//     cratesOut: "",
//     iceBoxOut: "",
//     gelPodOut: "",
//     odometerPhoto: null,
//   });

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (files) {
//       setFormData({ ...formData, [name]: files[0] });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(formData);
//   };

//   return (
//     <div style={{ border: "1px solid gray", padding: "20px", marginTop: "20px", color: "black" }}>
//       <h2 style={{ textAlign: "center", color: "black" }}>🚚 Vehicle Exit Form</h2>
//       <form onSubmit={handleSubmit}>
//         <label>Warehouse:</label>
//         <select name="warehouse" value={formData.warehouse} onChange={handleChange} required>
//           <option value="">Select</option>
//           <option value="Noida">Noida</option>
//           <option value="Gurgaon">Gurgaon</option>
//         </select>

//         <label>Date:</label>
//         <input type="date" name="date" value={formData.date} readOnly />

//         <label>Vehicle Type:</label>
//         <select name="vehicleType" value={formData.vehicleType} onChange={handleChange} required>
//           <option value="">Select</option>
//           <option value="Micropod EV">Micropod EV</option>
//           <option value="Tata ace">Tata ace</option>
//           <option value="Tata ace EV">Tata ace EV</option>
//           <option value="Bolero">Bolero</option>
//         </select>

//         <label>Vendor:</label>
//         <input type="text" name="vendor" value={formData.vendor} onChange={handleChange} required />

//         <label>Vehicle Out Km:</label>
//         <input type="number" name="vehicleOutKm" value={formData.vehicleOutKm} onChange={handleChange} required />

//         <label>Driver Name:</label>
//         <input type="text" name="driverName" value={formData.driverName} onChange={handleChange} required />

//         <label>Driver Number:</label>
//         <input type="text" name="driverNumber" value={formData.driverNumber} onChange={handleChange} required />

//         <label>DA Name:</label>
//         <input type="text" name="daName" value={formData.daName} onChange={handleChange} required />

//         <label>DA Number:</label>
//         <input type="text" name="daNumber" value={formData.daNumber} onChange={handleChange} required />

//         <label>Crates Out:</label>
//         <input type="number" name="cratesOut" value={formData.cratesOut} onChange={handleChange} required />

//         <label>Ice Box Out:</label>
//         <input type="number" name="iceBoxOut" value={formData.iceBoxOut} onChange={handleChange} required />

//         <label>Gel Pod Out:</label>
//         <input type="number" name="gelPodOut" value={formData.gelPodOut} onChange={handleChange} required />

//         <label>Odometer Photo:</label>
//         <input type="file" name="odometerPhoto" onChange={handleChange} accept="image/*" />

//         <button type="submit" style={{ marginTop: "10px" }}>Submit Exit</button>
//       </form>
//     </div>
//   );
// };

// export default VehicleExitForm;


import React, { useState } from "react";

const VehicleExitForm = ({ onSubmit, driverEmail }) => {
  const [formData, setFormData] = useState({
    tripId: Date.now(),
    driverEmail,
    warehouse: "",
    date: new Date().toISOString().slice(0, 10),
    vehicleType: "",
    vendor: "",
    vehicleOutKm: "",
    driverName: "",
    driverNumber: "",
    daName: "",
    daNumber: "",
    cratesOut: "",
    iceBoxOut: "",
    gelPodOut: "",
    odometerPhoto: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) setFormData({ ...formData, [name]: files[0] });
    else setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    onSubmit(data);
  };

  return (
    <div style={{ border: "1px solid gray", padding: "20px", marginTop: "20px" }}>
      <h2 style={{ textAlign: "center", color: "black" }}>🚚 Vehicle Exit Form</h2>
      <form onSubmit={handleSubmit}>
        <label>Warehouse:</label>
        <select name="warehouse" value={formData.warehouse} onChange={handleChange} required>
          <option value="">Select</option>
          <option value="Noida">Noida</option>
          <option value="Gurgaon">Gurgaon</option>
        </select>

        <label>Date:</label>
        <input type="date" name="date" value={formData.date} readOnly />

        <label>Vehicle Type:</label>
        <select name="vehicleType" value={formData.vehicleType} onChange={handleChange} required>
          <option value="">Select</option>
          <option value="Micropod EV">Micropod EV</option>
          <option value="Tata ace">Tata ace</option>
          <option value="Tata ace EV">Tata ace EV</option>
          <option value="Bolero">Bolero</option>
        </select>

        <label>Vendor:</label>
        <input type="text" name="vendor" value={formData.vendor} onChange={handleChange} required />

        <label>Vehicle Out Km:</label>
        <input type="number" name="vehicleOutKm" value={formData.vehicleOutKm} onChange={handleChange} required />

        <label>Driver Name:</label>
        <input type="text" name="driverName" value={formData.driverName} onChange={handleChange} required />

        <label>Driver Number:</label>
        <input type="text" name="driverNumber" value={formData.driverNumber} onChange={handleChange} required />

        <label>DA Name:</label>
        <input type="text" name="daName" value={formData.daName} onChange={handleChange} required />

        <label>DA Number:</label>
        <input type="text" name="daNumber" value={formData.daNumber} onChange={handleChange} required />

        <label>Crates Out:</label>
        <input type="number" name="cratesOut" value={formData.cratesOut} onChange={handleChange} required />

        <label>Ice Box Out:</label>
        <input type="number" name="iceBoxOut" value={formData.iceBoxOut} onChange={handleChange} required />

        <label>Gel Pod Out:</label>
        <input type="number" name="gelPodOut" value={formData.gelPodOut} onChange={handleChange} required />

        <label>Odometer Photo:</label>
        <input type="file" name="odometerPhoto" onChange={handleChange} accept="image/*" />

        <button type="submit" style={{ marginTop: "10px" }}>Submit Exit</button>
      </form>
    </div>
  );
};

export default VehicleExitForm;
