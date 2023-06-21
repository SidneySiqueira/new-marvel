export const formattedDate = (date: string | number | Date) => {
    const data = new Date(date),
        week = data.getDay(),
        day = data.getDate().toString().padStart(2, "0"),
        month = data.getMonth(),
        year = data.getFullYear();
    const semana = new Array(6);
    semana[0] = "Sun";
    semana[1] = "Mon";
    semana[2] = "Twe";
    semana[3] = "Wed";
    semana[4] = "Thu";
    semana[5] = "Fry";
    semana[6] = "Sat";
    const mes = new Array(12);
    mes[0] = "Jan";
    mes[1] = "Feb";
    mes[2] = "Mar";
    mes[3] = "Apr";
    mes[4] = "May";
    mes[5] = "Jun";
    mes[6] = "Jul";
    mes[7] = "Aug";
    mes[8] = "Sep";
    mes[9] = "Oct";
    mes[10] = "Nov";
    mes[11] = "Dez";
    return `${semana[week]},${day} of ${mes[month]}, ${year}`;
};