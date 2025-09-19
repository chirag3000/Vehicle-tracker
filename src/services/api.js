import axios from "axios";

const API_BASE = "http://localhost:5000/api/trips";

export const checkDriverStatus = async (email) => {
  const res = await axios.get(`${API_BASE}/status/${email}`);
  return res.data;
};

export const submitExitForm = async (data) => {
  const res = await axios.post(`${API_BASE}/exit`, data);
  return res.data;
};

export const submitEntryForm = async (tripId, data) => {
  const res = await axios.post(`${API_BASE}/entry/${tripId}`, data);
  return res.data;
};

export const exportExcel = async () => {
  const res = await axios.get(`${API_BASE}/export`, {
    responseType: "blob",
  });
  const url = window.URL.createObjectURL(new Blob([res.data]));
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", "Vehicle_Tracker.xlsx");
  document.body.appendChild(link);
  link.click();
};
