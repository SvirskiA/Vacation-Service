import moment from "moment";

const getFormattedDate = (date) => {
  return moment(date).format("D MMM YYYY");
};

export default getFormattedDate;