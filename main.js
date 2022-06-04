let latitude, longitude, destination;

$(document).ready(function () {
	alert("Please allow the device to know your location!")
	initGeolocation();
})

function initGeolocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(success);
	}
	else {
		alert("Sorry, your browser does not support geolocation services.");
	}
}

$(function () {
	$("#navigate-button").click(function () {
		window.location.href = `ar_weather.html?source=${latitude};${longitude}&destination=${destination[1]};${destination[0]}`
	})
})

function success(position) {
	longitude = position.coords.longitude;
	latitude = position.coords.latitude


mapboxgl.accessToken="pk.eyJ1Ijoic3ViaG9taXRhIiwiYSI6ImNsNDA0NmVxYTA3Nmkzb3FsaXFnbHZhZjAifQ.mM_Byds5XcuQ-O368hVw6A"
var map=new mapboxgl.Map({
    container:"map",
    style: 'mapbox://styles/mapbox/streets-v11',
    center:[longitude,latitude],
    zoom:16
})

//amberFort
var img1 = document.querySelector("#amber")
var marker1 = new mapboxgl.Marker({
    element:img1
})
.setLngLat([75.8513, 26.9855])
.addTo(map);

//IndiaGate
var img2 = document.querySelector("#gate")
var marker2 = new mapboxgl.Marker({
    element:img2
})
.setLngLat([77.2295, 28.6129])
.addTo(map);

//LotusTemple
var img3 = document.querySelector("#lotus")
var marker3 = new mapboxgl.Marker({
    element:img3
})
.setLngLat([77.2588, 28.5535])
.addTo(map);


map.addControl(
    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl:mapboxgl
    })
    
)
}