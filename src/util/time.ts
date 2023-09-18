export const getTimeDifferenceSentence = (targetDate: Date) => {
  const currentDate = new Date();
  const timeDifferenceMilliseconds =
    targetDate.getMilliseconds() - currentDate.getMilliseconds();

  if (timeDifferenceMilliseconds < 0) {
    return "Event is Over";
  }

  const secondsDifference = Math.floor(timeDifferenceMilliseconds / 1000);
  const minutesDifference = Math.floor(secondsDifference / 60);
  const hoursDifference = Math.floor(minutesDifference / 60);
  const daysDifference = Math.floor(hoursDifference / 24);

  if (daysDifference > 0) {
    return `in ${daysDifference} ${daysDifference === 1 ? "day" : "days"}`;
  } else if (hoursDifference > 0) {
    return `in ${hoursDifference} ${hoursDifference === 1 ? "hour" : "hours"}`;
  } else if (minutesDifference > 0) {
    return `in ${minutesDifference} ${
      minutesDifference === 1 ? "minute" : "minutes"
    }`;
  } else {
    return `in ${secondsDifference} ${
      secondsDifference === 1 ? "second" : "seconds"
    }`;
  }
};
