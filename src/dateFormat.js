import * as moment from "moment";


const dateFormat = (dateString, format='MMMM Do YYYY, h:mm:ss a') => {
    return moment(dateString).format(format);
};

export default dateFormat;