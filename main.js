let latitude = 35.84103141025623, longitude = -78.87174146261907
mapboxgl.accessToken = 'pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA';

var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: [longitude, latitude],
    zoom: 9.5
})


var img1 = document.querySelector("#art")
var marker1 = new mapboxgl.Marker({
    element: img1
})
.setLngLat([-78.70139619712992, 35.80989404438833])
.addTo(map)

var img2 = document.querySelector("#duke")
var marker2 = new mapboxgl.Marker({
    element: img2
})
.setLngLat([-78.93129499837328, 36.00203321427028])
.addTo(map)

var img3 = document.querySelector("#lake")
var marker3 = new mapboxgl.Marker({
    element: img3
})
.setLngLat([-79.03623572896204, 35.71142017654417])
.addTo(map)

var img4 = document.querySelector("#farm")
var marker4 = new mapboxgl.Marker({
    element: img4
})
.setLngLat([-78.87006752073937, 35.827302764780256])
.addTo(map)

var img5 = document.querySelector("#science")
var marker5 = new mapboxgl.Marker({
    element: img5
})
.setLngLat([-78.64210121854964, 35.78330955373747])
.addTo(map)

map.addControl(
    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken, 
        mapboxgl: mapboxgl
    })
)

map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true
        },

        trackUserLocation: true
    })
)