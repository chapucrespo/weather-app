import request from "postman-request";

export const geocode = (address, callback) => {
    const url = `http://api.positionstack.com/v1/forward?access_key=0c7c5f04de6aeaa3df97946c70ba12a2&query=${address}`;

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback(error);
        } else if (response.body?.error) {
            callback(response.body?.error);
        } else {
            const { data } = response.body;
            callback(undefined, {
                latitude: data[0].latitude,
                longitude: data[0].longitude,
                city: data[0].label,
            });
        }
    });
};
