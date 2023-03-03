const PrettyDate = ({ date }) => {
  if (date == null) {
    return "Date unknown";
  }
  let str = date.slice(0, 10);
  return str;
};

export default PrettyDate;
