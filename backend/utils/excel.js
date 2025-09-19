// const ExcelJS = require("exceljs");

// const exportExcel = async (trips) => {
//   const workbook = new ExcelJS.Workbook();
//   const worksheet = workbook.addWorksheet("Trips");

//   // Columns
//   worksheet.columns = [
//     { header: "Trip ID", key: "tripId", width: 15 },
//     { header: "Driver Email", key: "driverEmail", width: 25 },
//     { header: "Warehouse", key: "warehouse", width: 15 },
//     { header: "Date", key: "date", width: 15 },
//     { header: "Vehicle Type", key: "vehicleType", width: 20 },
//     { header: "Vendor", key: "vendor", width: 20 },
//     { header: "Vehicle Out Km", key: "vehicleOutKm", width: 15 },
//     { header: "Driver Name", key: "driverName", width: 20 },
//     { header: "Driver Number", key: "driverNumber", width: 20 },
//     { header: "DA Name", key: "daName", width: 20 },
//     { header: "DA Number", key: "daNumber", width: 20 },
//     { header: "Crates Out", key: "cratesOut", width: 10 },
//     { header: "Ice Box Out", key: "iceBoxOut", width: 10 },
//     { header: "Gel Pod Out", key: "gelPodOut", width: 10 },
//     { header: "Vehicle In Km", key: "vehicleInKm", width: 15 },
//     { header: "Crates In", key: "cratesIn", width: 10 },
//     { header: "Ice Box In", key: "iceBoxIn", width: 10 },
//     { header: "Gel Pod In", key: "gelPodIn", width: 10 },
//   ];

//   // Rows
//   trips.forEach((trip) => {
//     worksheet.addRow({
//       tripId: trip.tripId,
//       driverEmail: trip.driverEmail,
//       warehouse: trip.warehouse,
//       date: trip.date,
//       vehicleType: trip.vehicleType,
//       vendor: trip.vendor,
//       vehicleOutKm: trip.vehicleOutKm,
//       driverName: trip.driverName,
//       driverNumber: trip.driverNumber,
//       daName: trip.daName,
//       daNumber: trip.daNumber,
//       cratesOut: trip.cratesOut,
//       iceBoxOut: trip.iceBoxOut,
//       gelPodOut: trip.gelPodOut,
//       vehicleInKm: trip.entryData?.vehicleInKm || "",
//       cratesIn: trip.entryData?.cratesIn || "",
//       iceBoxIn: trip.entryData?.iceBoxIn || "",
//       gelPodIn: trip.entryData?.gelPodIn || "",
//     });
//   });

//   return workbook.xlsx.writeBuffer();
// };

// module.exports = { exportExcel };

// ---simpler version of link
// const ExcelJS = require("exceljs");

// const exportExcel = async (trips) => {
//   const workbook = new ExcelJS.Workbook();
//   const worksheet = workbook.addWorksheet("Vehicle Trips");

//   // Define columns
//   worksheet.columns = [
//     { header: "Trip ID", key: "tripId", width: 15 },
//     { header: "Driver Email", key: "driverEmail", width: 25 },
//     { header: "Warehouse", key: "warehouse", width: 15 },
//     { header: "Date", key: "date", width: 15 },
//     { header: "Vehicle Type", key: "vehicleType", width: 15 },
//     { header: "Vendor", key: "vendor", width: 20 },
//     { header: "Vehicle Out Km", key: "vehicleOutKm", width: 15 },
//     { header: "Driver Name", key: "driverName", width: 20 },
//     { header: "Driver Number", key: "driverNumber", width: 15 },
//     { header: "DA Name", key: "daName", width: 20 },
//     { header: "DA Number", key: "daNumber", width: 15 },
//     { header: "Crates Out", key: "cratesOut", width: 12 },
//     { header: "Ice Box Out", key: "iceBoxOut", width: 12 },
//     { header: "Gel Pod Out", key: "gelPodOut", width: 12 },
//     { header: "Exit Odometer Photo", key: "exitPhoto", width: 40 },
//     { header: "Entry Vehicle In Km", key: "vehicleInKm", width: 15 },
//     { header: "Entry Crates In", key: "cratesIn", width: 12 },
//     { header: "Entry Ice Box In", key: "iceBoxIn", width: 12 },
//     { header: "Entry Gel Pod In", key: "gelPodIn", width: 12 },
//     { header: "Entry Odometer Photo", key: "entryPhoto", width: 40 },
//   ];

//   // Fill rows
//   trips.forEach((trip) => {
//     worksheet.addRow({
//       tripId: trip.tripId,
//       driverEmail: trip.driverEmail,
//       warehouse: trip.warehouse || "",
//       date: trip.date || "",
//       vehicleType: trip.vehicleType || "",
//       vendor: trip.vendor || "",
//       vehicleOutKm: trip.vehicleOutKm || "",
//       driverName: trip.driverName || "",
//       driverNumber: trip.driverNumber || "",
//       daName: trip.daName || "",
//       daNumber: trip.daNumber || "",
//       cratesOut: trip.cratesOut || "",
//       iceBoxOut: trip.iceBoxOut || "",
//       gelPodOut: trip.gelPodOut || "",
//       exitPhoto: trip.odometerPhoto ? { text: "View Image", hyperlink: trip.odometerPhoto } : "",
//       vehicleInKm: trip.entryData?.vehicleInKm || "",
//       cratesIn: trip.entryData?.cratesIn || "",
//       iceBoxIn: trip.entryData?.iceBoxIn || "",
//       gelPodIn: trip.entryData?.gelPodIn || "",
//       entryPhoto: trip.entryData?.odometerPhoto ? { text: "View Image", hyperlink: trip.entryData.odometerPhoto } : "",
//     });
//   });

//   // Format hyperlink cells
//   worksheet.eachRow((row, rowNumber) => {
//     if (rowNumber === 1) return; // skip header
//     ["O", "T"].forEach((col) => { // O = exitPhoto, T = entryPhoto
//       const cell = row.getCell(col);
//       if (cell.value && cell.value.hyperlink) {
//         cell.font = { color: { argb: "FF0000FF" }, underline: true }; // blue underline
//       }
//     });
//   });

//   const buffer = await workbook.xlsx.writeBuffer();
//   return buffer;
// };

// module.exports = { exportExcel };


const ExcelJS = require("exceljs");
const path = require("path");

const exportExcel = async (trips) => {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("Vehicle Trips");

  // Define columns
  worksheet.columns = [
    { header: "Trip ID", key: "tripId", width: 15 },
    { header: "Driver Email", key: "driverEmail", width: 25 },
    { header: "Warehouse", key: "warehouse", width: 15 },
    { header: "Date", key: "date", width: 15 },
    { header: "Vehicle Type", key: "vehicleType", width: 15 },
    { header: "Vendor", key: "vendor", width: 20 },
    { header: "Vehicle Out Km", key: "vehicleOutKm", width: 15 },
    { header: "Driver Name", key: "driverName", width: 20 },
    { header: "Driver Number", key: "driverNumber", width: 15 },
    { header: "DA Name", key: "daName", width: 20 },
    { header: "DA Number", key: "daNumber", width: 15 },
    { header: "Crates Out", key: "cratesOut", width: 12 },
    { header: "Ice Box Out", key: "iceBoxOut", width: 12 },
    { header: "Gel Pod Out", key: "gelPodOut", width: 12 },
    { header: "Exit Odometer Photo", key: "exitPhoto", width: 40 },
    { header: "Entry Vehicle In Km", key: "vehicleInKm", width: 15 },
    { header: "Entry Crates In", key: "cratesIn", width: 12 },
    { header: "Entry Ice Box In", key: "iceBoxIn", width: 12 },
    { header: "Entry Gel Pod In", key: "gelPodIn", width: 12 },
    { header: "Entry Odometer Photo", key: "entryPhoto", width: 40 },
  ];

  // Fill rows
  trips.forEach((trip) => {
    worksheet.addRow({
      tripId: trip.tripId,
      driverEmail: trip.driverEmail,
      warehouse: trip.warehouse || "",
      date: trip.date || "",
      vehicleType: trip.vehicleType || "",
      vendor: trip.vendor || "",
      vehicleOutKm: trip.vehicleOutKm || "",
      driverName: trip.driverName || "",
      driverNumber: trip.driverNumber || "",
      daName: trip.daName || "",
      daNumber: trip.daNumber || "",
      cratesOut: trip.cratesOut || "",
      iceBoxOut: trip.iceBoxOut || "",
      gelPodOut: trip.gelPodOut || "",
      exitPhoto: trip.odometerPhoto
        ? { text: "View Image", hyperlink: `http://localhost:5000${trip.odometerPhoto}` }
        : "",
      vehicleInKm: trip.entryData?.vehicleInKm || "",
      cratesIn: trip.entryData?.cratesIn || "",
      iceBoxIn: trip.entryData?.iceBoxIn || "",
      gelPodIn: trip.entryData?.gelPodIn || "",
      entryPhoto: trip.entryData?.odometerPhoto
        ? { text: "View Image", hyperlink: `http://localhost:5000${trip.entryData.odometerPhoto}` }
        : "",
    });
  });

  // Format hyperlink cells
  worksheet.eachRow((row, rowNumber) => {
    if (rowNumber === 1) return; // skip header
    ["O", "T"].forEach((col) => { // O = exitPhoto, T = entryPhoto
      const cell = row.getCell(col);
      if (cell.value && cell.value.hyperlink) {
        cell.font = { color: { argb: "FF0000FF" }, underline: true };
      }
    });
  });

  const buffer = await workbook.xlsx.writeBuffer();
  return buffer;
};

module.exports = { exportExcel };
