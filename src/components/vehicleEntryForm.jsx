// import React, { useState } from "react";

// const VehicleEntryForm = ({ tripId, onSubmit }) => {
//   const [formData, setFormData] = useState({
//     vehicleInKm: "",
//     cratesIn: "",
//     iceBoxIn: "",
//     gelPodIn: "",
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
//     const entryData = { ...formData, tripId };
//     onSubmit(entryData);
//     alert("✅ Vehicle Entry recorded successfully!");
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
//         backgroundColor: "#ebebedff",
//       }}
//     >
//       <h2 style={{ textAlign: "center", color: "black" }}>🚚 Vehicle Entry Form</h2>

//       <label><strong>Vehicle In Km:</strong></label>
//       <input type="number" name="vehicleInKm" placeholder="Enter return km reading" value={formData.vehicleInKm} onChange={handleChange} required />
//       <br /><br />

//       <label><strong>Crates In:</strong></label>
//       <input type="number" name="cratesIn" placeholder="Enter number of crates returned" value={formData.cratesIn} onChange={handleChange} required />
//       <br /><br />

//       <label><strong>Ice Box In:</strong></label>
//       <input type="number" name="iceBoxIn" placeholder="Enter number of ice boxes returned" value={formData.iceBoxIn} onChange={handleChange} required />
//       <br /><br />

//       <label><strong>Gel Pod In:</strong></label>
//       <input type="number" name="gelPodIn" placeholder="Enter number of gel pods returned" value={formData.gelPodIn} onChange={handleChange} required />
//       <br /><br />

//       <label><strong>Odometer Photo:</strong></label>
//       <input type="file" name="odometerPhoto" accept="image/*" onChange={handleChange} required />
//       <br /><br />

//       <button type="submit" style={{ background: "blue", color: "white", padding: "10px", border: "none", borderRadius: "5px" }}>
//         Submit Entry
//       </button>
//     </form>
//   );
// };

// export default VehicleEntryForm;

// import React, { useState } from "react";

// const VehicleEntryForm = ({ tripId, onSubmit }) => {
//   const [formData, setFormData] = useState({
//     tripId,
//     vehicleInKm: "",
//     cratesIn: "",
//     iceBoxIn: "",
//     gelPodIn: "",
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
//     <div style={{ border: "1px solid gray", padding: "20px", marginTop: "20px" }}>
//       <h2 style={{ textAlign: "center", color: "black" }}>🚚 Vehicle Entry Form</h2>
//       <form onSubmit={handleSubmit}>
//         <label>Vehicle In Km:</label>
//         <input type="number" name="vehicleInKm" value={formData.vehicleInKm} onChange={handleChange} required />

//         <label>Crates In:</label>
//         <input type="number" name="cratesIn" value={formData.cratesIn} onChange={handleChange} required />

//         <label>Ice Box In:</label>
//         <input type="number" name="iceBoxIn" value={formData.iceBoxIn} onChange={handleChange} required />

//         <label>Gel Pod In:</label>
//         <input type="number" name="gelPodIn" value={formData.gelPodIn} onChange={handleChange} required />

//         <label>Odometer Photo:</label>
//         <input type="file" name="odometerPhoto" onChange={handleChange} accept="image/*" />

//         <button type="submit" style={{ marginTop: "10px" }}>Submit Entry</button>
//       </form>
//     </div>
//   );
// };

// export default VehicleEntryForm;


import React, { useState } from "react";

const VehicleEntryForm = ({ tripId, onSubmit }) => {
  const [formData, setFormData] = useState({
    tripId,
    vehicleInKm: "",
    cratesIn: "",
    iceBoxIn: "",
    gelPodIn: "",
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
      <h2 style={{ textAlign: "center", color: "black" }}>🚚 Vehicle Entry Form</h2>
      <form onSubmit={handleSubmit}>
        <label>Vehicle In Km:</label>
        <input type="number" name="vehicleInKm" value={formData.vehicleInKm} onChange={handleChange} required />

        <label>Crates In:</label>
        <input type="number" name="cratesIn" value={formData.cratesIn} onChange={handleChange} required />

        <label>Ice Box In:</label>
        <input type="number" name="iceBoxIn" value={formData.iceBoxIn} onChange={handleChange} required />

        <label>Gel Pod In:</label>
        <input type="number" name="gelPodIn" value={formData.gelPodIn} onChange={handleChange} required />

        <label>Odometer Photo:</label>
        <input type="file" name="odometerPhoto" onChange={handleChange} accept="image/*" />

        <button type="submit" style={{ marginTop: "10px" }}>Submit Entry</button>
      </form>
    </div>
  );
};

export default VehicleEntryForm;
