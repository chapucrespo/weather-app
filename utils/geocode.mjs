import request from "postman-request";

export const geocode = (address, callback) => {
    const url = `http://api.positionstack.com/v1/forward?access_key=0c7c5f04de6aeaa3df97946c70ba12a2&query=${address}`;

    request({ url: url, json: true }, (error, response) => {
        const { data } = response.body;
        if (error || data.length == 0) {
            callback(error ? 'An error ocurred, try again' : `We couldn't find the location, try again`);
        } else {
            console.log('else')
            callback(undefined, {
                latitude: data[0].latitude,
                longitude: data[0].longitude,
                city: data[0].label,
            });
        }
    });
};
