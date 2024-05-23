export const formatDate = (date: Date) => {
  const formattedDate: string = new Date(date).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  });

  return formattedDate;
};

export const formatTime = (date: Date) => {
  const options = {
    hour: "2-digit" as const,
    minute: "2-digit" as const,
    hour12: false,
  };

  const formattedTime: string = date.toLocaleTimeString("id-ID", options);

  return formattedTime;
};
