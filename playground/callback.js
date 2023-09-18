export const testingGeocode = (location, callback) => {
    setTimeout(() => {
        const data = {
            location,
            latitude: 1024.323,
            longitude: -234.44,
        };

        callback(data);
    }, 2000);
};

geocode("Santa Fe", (data) => {
    console.log(
        `You're in ${data.location}, latitude: ${data.latitude}, longitude: ${data.longitude}`
    );
});

const add = (num1, num2, callback) => {
    setTimeout(() => {
        callback(num1 + num2);
    }, 1000);
};

add(1, 2, (suma) => {
    console.log(suma);
});
