const getFormattedTime = (date) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const [year, month, day] = date.split("-");

  return `${day} ${months[parseInt(month) - 1]} ${year}`;
};

export {getFormattedTime}