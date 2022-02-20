
//console.log(L)
var map = L.map('map').setView([0, 0], 1);
//setview([latitude,longitude],zoom initialize)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

var myIcon = L.icon({
  iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/International_Space_Station.svg/1280px-International_Space_Station.svg.png',
  iconSize: [38, 32],
});


let marker = L.marker([0, 0], { icon: myIcon }).addTo(map)


const fetchSpaceStationDetails=async()=>{

const res =await fetch('https://api.wheretheiss.at/v1/satellites/25544') //this API gives coordinates of Space station
const data= await res.json()
const{
  latitude,longitude
}=data
//console.log(latitude,longitude)
marker.setLatLng([latitude,longitude])
}

setInterval(fetchSpaceStationDetails,1000)


// L.marker([51.5, -0.09]).addTo(map) //marker to add marker for specific lat and long
// L.marker([10, -1]).addTo(map)
// .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
// .openPopup();

