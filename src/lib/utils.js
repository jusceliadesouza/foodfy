module.exports = {
  date(timestamp) {
    const date = new Date(timestamp);

    const year = date.getUTCFullYear();
    const month = `0${date.getUTCMonth() + 1}`.slice(-2);
    const day = `0${date.getUTCDate()}`.slice(-2);

    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const miliseconds = date.getMilliseconds();

    return {
      day,
      month,
      year,
      iso: `${year}-${month}-${day}`,
      isoCompleted: `${year}-${month}-${day} ${hour}:${minutes}:${seconds}.${miliseconds}`,
      birthay: `${day}/${month}`,
      format: `${day}/${month}/${year}`,
    };
  },
};
