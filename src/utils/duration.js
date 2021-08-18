const duration = (start, end) => {
    return (Date.parse(end) - Date.parse(start)) / 60 / 60 / 24 / 1000 + 1;
  };

export default duration;