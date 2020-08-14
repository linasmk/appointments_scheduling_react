/* ===== App Dependencies ===== */
const moment = jest.requireActual("moment");

/* ========== Code ========== */
export default (timestamp = 0) => {
  return moment(timestamp);
};
