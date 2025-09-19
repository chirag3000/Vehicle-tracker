// const express = require("express");
// const router = express.Router();
// const fs = require("fs");
// const path = require("path");
// const { exportExcel } = require("../utils/excel");

// // Single source of truth for file path
// const TRIPS_FILE = path.join(__dirname, "../data/trips.json");

// // --- Helper functions ---

// const readTrips = () => {
//   if (!fs.existsSync(TRIPS_FILE)) return [];
//   const data = fs.readFileSync(TRIPS_FILE, "utf-8");
//   if (!data) return [];
//   try {
//     return JSON.parse(data);
//   } catch (err) {
//     console.error("Invalid JSON in trips.json", err);
//     return [];
//   }
// };

// const saveTrips = (trips) => {
//   fs.writeFileSync(TRIPS_FILE, JSON.stringify(trips, null, 2));
// };

// // --- Routes ---

// // Submit Exit Form
// router.post("/exit", (req, res) => {
//   try {
//     const trips = readTrips();
//     const exitData = { ...req.body, entryData: null, tripId: Date.now() };
//     trips.push(exitData);
//     saveTrips(trips);
//     res.json({ message: "Exit recorded", tripId: exitData.tripId });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// // Submit Entry Form
// router.post("/entry/:tripId", (req, res) => {
//   try {
//     const trips = readTrips();
//     const { tripId } = req.params;
//     const index = trips.findIndex((t) => t.tripId === parseInt(tripId));
//     if (index === -1) return res.status(404).json({ message: "Trip not found" });

//     trips[index].entryData = req.body;
//     saveTrips(trips);
//     res.json({ message: "Entry recorded" });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// // Get form status for a driver
// router.get("/status/:driverEmail", (req, res) => {
//   try {
//     const trips = readTrips();
//     const activeTrip = trips.find(
//       (t) => t.driverEmail === req.params.driverEmail && !t.entryData
//     );
//     res.json({ activeTrip: activeTrip || null });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// // Export all trips to Excel
// router.get("/export", async (req, res) => {
//   try {
//     const trips = readTrips();
//     const buffer = await exportExcel(trips);
//     res.setHeader(
//       "Content-Disposition",
//       "attachment; filename=Vehicle_Tracker.xlsx"
//     );
//     res.setHeader(
//       "Content-Type",
//       "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
//     );
//     res.send(buffer);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// module.exports = router;



const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");
const multer = require("multer");
const { exportExcel } = require("../utils/excel");

// --- Paths ---
const TRIPS_FILE = path.join(__dirname, "../data/trips.json");
const UPLOADS_DIR = path.join(__dirname, "../uploads");

// Ensure uploads folder exists
if (!fs.existsSync(UPLOADS_DIR)) fs.mkdirSync(UPLOADS_DIR);

// --- Multer setup for file uploads ---
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, UPLOADS_DIR),
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});
const upload = multer({ storage });

// --- Helper functions ---
const readTrips = () => {
  if (!fs.existsSync(TRIPS_FILE)) return [];
  const data = fs.readFileSync(TRIPS_FILE, "utf-8");
  if (!data) return [];
  try {
    return JSON.parse(data);
  } catch (err) {
    console.error("Invalid JSON in trips.json", err);
    return [];
  }
};

const saveTrips = (trips) => {
  fs.writeFileSync(TRIPS_FILE, JSON.stringify(trips, null, 2));
};

// --- Routes ---

// Exit form with image upload
router.post("/exit", upload.single("odometerPhoto"), (req, res) => {
  try {
    const trips = readTrips();
    const exitData = {
      ...req.body,
      odometerPhoto: req.file ? `/uploads/${req.file.filename}` : null,
      entryData: null,
      tripId: Date.now(),
    };
    trips.push(exitData);
    saveTrips(trips);
    res.json({ message: "Exit recorded", tripId: exitData.tripId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// Entry form with image upload
router.post("/entry/:tripId", upload.single("odometerPhoto"), (req, res) => {
  try {
    const trips = readTrips();
    const { tripId } = req.params;
    const index = trips.findIndex((t) => t.tripId === parseInt(tripId));
    if (index === -1) return res.status(404).json({ message: "Trip not found" });

    trips[index].entryData = {
      ...req.body,
      odometerPhoto: req.file ? `/uploads/${req.file.filename}` : null,
    };
    saveTrips(trips);
    res.json({ message: "Entry recorded" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// Get form status for a driver
router.get("/status/:driverEmail", (req, res) => {
  try {
    const trips = readTrips();
    const activeTrip = trips.find(
      (t) => t.driverEmail === req.params.driverEmail && !t.entryData
    );
    res.json({ activeTrip: activeTrip || null });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// Serve uploaded images
router.use("/uploads", express.static(UPLOADS_DIR));

// Export all trips to Excel
router.get("/export", async (req, res) => {
  try {
    const trips = readTrips();
    const buffer = await exportExcel(trips);
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=Vehicle_Tracker.xlsx"
    );
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.send(buffer);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
