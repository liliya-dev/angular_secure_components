export const formatDate = (date: number) => {
  const monthNames = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
  const dateObject = new Date(date);

  const getDateProperty = (dateFunction) => {
    const property = `${dateObject[dateFunction]()}`.length < 2 ? `0${dateObject[dateFunction]()}` : `${dateObject[dateFunction]()}`;
    return property;
  }

  let hours: string | number = +getDateProperty('getHours');
  hours = hours % 12;
  hours = hours ? hours : 12;
  hours = hours < 10 ? `0${hours}` : `${hours}`
  const ampm = +hours >= 12 ? 'PM' : 'AM';
  const minutes = getDateProperty('getMinutes');
  const seconds = getDateProperty('getSeconds');
  const day = getDateProperty('getDate');
  const month = monthNames[dateObject.getMonth()];
  const year = getDateProperty('getFullYear');
  const dateString = `${month} ${day}, ${year} \n ${hours}:${minutes}:${seconds} ${ampm}`;
  
  return dateString;
}