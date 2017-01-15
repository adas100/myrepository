var airports = {};

// oceania
airports.mel = { name: "Melbourne - Tullamarine", coords: {lat: -37.6733, lng: 144.8433} };
airports.bne = { name: "Brisbane", coords: {lat: -27.3842, lng: 153.1175} };
airports.ool = { name: "Gold Coast - Coolangatta", coords: {lat: -28.1644, lng: 153.5047} };
airports.akl = { name: "Auckland", coords: {lat: -37.0081, lng: 174.7917} };
airports.chc = { name: "Christchurch", coords: {lat: -43.4894, lng: 172.5344} };
airports.nan = { name: "Nadi", coords: {lat: -17.7553, lng: 177.4433} };
airports.syd = { name: "Sydney - Kingsford Smith", coords: {lat: -33.9461, lng: 151.1772} };
airports.cns = { name: "Cairns", coords: {lat: -16.8858, lng: 145.7553} };
airports.cbr = { name: "Canberra", coords: {lat: -35.3067, lng: 149.1950} };
airports.zqn = { name: "Queenstown", coords: {lat: -45.0211, lng: 168.7392} };

// asia
airports.sin = { name: "Singapore - Changi", coords: {lat: 1.3592, lng: 103.9894} };
airports.ccu = { name: "Kolkata - Netaji Subhas Chandra Bose", coords: {lat: 22.6547, lng: 88.4467} };
airports.dmk = { name: "Bangkok - Don Mueang", coords: {lat: 13.6811, lng: 100.7472} };
airports.del = { name: "Delhi - Indira Gandhi", coords: {lat: 28.5686, lng: 77.1122} };
airports.dxb = { name: "Dubai", coords: {lat: 25.2528, lng: 55.3644} };
airports.auh = { name: "Abu Dhabi", coords: {lat: 24.4331, lng: 54.6511} };
airports.amm = { name: "Amman - Queen Alia", coords: {lat: 31.7225, lng: 35.9933} };
airports.sgn = { name: "Ho Chi Minh City - Tan Son Nhat", coords: {lat: 10.8189, lng: 106.6519} };
airports.han = { name: "Hanoi - Noi Bai", coords: {lat: 21.2211, lng: 105.8072} };
airports.dad = { name: "Da Nang", coords: {lat: 16.0439, lng: 108.1994} };
airports.nrt = { name: "Tokyo - Narita", coords: {lat: 35.7653, lng: 140.3856} };
airports.hkg = { name: "Hong Kong - Chek Lap Kok", coords: {lat: 22.3089, lng: 113.9147} };
airports.lko = { name: "Lucknow", coords: {lat: 26.7606, lng: 80.8894} };
airports.asr = { name: "Kayseri", coords: {lat: 38.7703, lng: 35.4956} };
airports.adb = { name: "Izmir - Adnan Menderes", coords: {lat: 38.2925, lng: 27.1569} };
airports.nav = { name: "Nevsehir - Kapadokya", coords: {lat: 38.7719, lng: 34.5344} };
airports.dps = { name: "Denpasar - Ngurah Rai", coords: {lat: -8.7481, lng: 115.1672} };
airports.kix = { name: "Osaka - Kansai", coords: {lat: 34.4272, lng: 135.2442} };

// north america
airports.hnl = { name: "Honolulu", coords: {lat: 21.3178, lng: -157.9203} };
airports.sfo = { name: "San Francisco", coords: {lat: 37.6189, lng: -122.3753} };
airports.jfk = { name: "New York - JFK", coords: {lat: 40.6400, lng: -73.7786} };
airports.dca = { name: "Washington - National", coords: {lat: 38.8514, lng: -77.0378} };
airports.las = { name: "Las Vegas - McCarran", coords: {lat: 36.0800, lng: -115.1522} };
airports.lax = { name: "Los Angeles", coords: {lat: 33.9428, lng: -118.4092} };
airports.hsh = { name: "Las Vegas - Henderson", coords: {lat: 35.9728, lng: -115.1344} };
// changed grand canyon west code from 1g4 to gcw
airports.gcw = { name: "Peach Springs - Grand Canyon West", coords: {lat: 35.9861, lng: -113.8169} };

// europe
airports.fco = { name: "Rome - Fiumicino", coords: {lat: 41.8044, lng: 12.2508} };
airports.ist = { name: "Istanbul - Ataturk", coords: {lat: 40.9761, lng: 28.8139} };
airports.mad = { name: "Madrid - Barajas", coords: {lat: 40.4936, lng: -3.5667} };
airports.cdg = { name: "Paris - Charles de Gaulle", coords: {lat: 49.0097, lng: 2.5478} };
airports.txl = { name: "Berlin - Tegel", coords: {lat: 52.5597, lng: 13.2878} };
airports.lhr = { name: "London - Heathrow", coords: {lat: 51.4775, lng: -0.4614} };
airports.ams = { name: "Amsterdam - Schiphol", coords: {lat: 52.3089, lng: 4.7639} };
airports.bcn = { name: "Barcelona - El Prat", coords: {lat: 41.2969, lng: 2.0783} };
airports.vce = { name: "Venice - Marco Polo", coords: {lat: 45.5053, lng: 12.3519} };

// africa
airports.nbo = { name: "Nairobi - Jomo Kenyatta", coords: {lat: -1.3192, lng: 36.9278} };
airports.tip = { name: "Tripoli", coords: {lat: 32.6636, lng: 13.1589} };
airports.cmn = { name: "Casablanca - Mohammed V", coords: {lat: 33.3675, lng: -7.5900} };
airports.lxr = { name: "Luxor", coords: {lat: 25.6711, lng: 32.7067} };
airports.uas = { name: "Samburu - Buffalo Spring", coords: {lat: 0.5333, lng: 37.5333} };
airports.cai = { name: "Cairo", coords: {lat: 30.1219, lng: 31.4056} };
airports.bko = { name: "Bamako - Modiba Keita", coords: {lat: 12.5336, lng: -7.9500} };
airports.abs = { name: "Abu Simbel", coords: {lat: 22.3758, lng: 31.6117} };
airports.wil = { name: "Nairobi - Wilson", coords: {lat: -1.3217, lng: 36.8147} };

var map, icon_filled, icon_filled_05, icon_filled_01, flights = [], airport_markers = {};

function newflight(path) {
  var geodesicPoly = new google.maps.Polyline({
    strokeColor: '#990033',
    strokeOpacity: 1.0,
    strokeWeight: 1,
    geodesic: true,
    map: map
  });

  flights.push({path: path, polygon: geodesicPoly});
  geodesicPoly.setPath([airports[path[0]].coords, airports[path[1]].coords]);
}

function newairport(location, id) {
  var marker = new google.maps.Marker({
    position: location,
    map: map,
    id: id,
    icon: icon_filled_05
  });

  airport_markers[marker.id] = marker;

  google.maps.event.addListener(marker, 'mouseover', function (event) {
    for (var id in airport_markers) {
      airport_markers[id].setIcon(icon_filled_01);
    }

    this.setIcon(icon_filled);
    var this_airport_name = airports[this.id].name;
    var connects = [];

    for (var i=0; i < flights.length; i++) {
      if (this.id == flights[i].path[0]) {
        airport_markers[flights[i].path[1]].setIcon(icon_filled);
        connects.push(airports[flights[i].path[1]].name);
        flights[i].polygon.setOptions({
                strokeOpacity : 1.0
            });
      } else if (this.id == flights[i].path[1]) {
        airport_markers[flights[i].path[0]].setIcon(icon_filled);
        connects.push(airports[flights[i].path[0]].name);
        flights[i].polygon.setOptions({
                strokeOpacity : 1.0
            });
      } else {
        flights[i].polygon.setOptions({
                strokeOpacity : 0.1
            });
      }
    }
    connects.sort();

    var infobox = document.getElementById("infobox");
    infobox.getElementsByTagName("h2")[0].innerHTML = this_airport_name;

    var ul = document.createElement("ul");
    for (var i=0; i < connects.length; i++) {
      var li = document.createElement("li");
      li.innerHTML = connects[i];
      ul.appendChild(li)
    }
    var p = infobox.getElementsByTagName("p")[0];
    while (p.hasChildNodes()) {
      p.removeChild(p.lastChild);
    }
    p.appendChild(ul);

    infobox.style.visibility = "visible";
  });

  google.maps.event.addListener(marker, 'mouseout', function (event) {
    for (var id in airport_markers) {
      airport_markers[id].setIcon(icon_filled_05);
    }

    for (var i=0; i < flights.length; i++) {
      flights[i].polygon.setOptions({
              strokeOpacity : 1.0
          });
    }

    var infobox = document.getElementById("infobox");
    infobox.style.visibility = "hidden";
  });
}

function initMap() {
  icon_filled = {
    path: google.maps.SymbolPath.CIRCLE,
    strokeColor: '#990033',
    strokeOpacity: 0.0,
    strokeWeight: 0,
    fillColor: '#990033',
    fillOpacity: 1.0,
    scale: 3 //pixels
  };

  icon_filled_05 = {
    path: google.maps.SymbolPath.CIRCLE,
    strokeColor: '#990033',
    strokeOpacity: 0.0,
    strokeWeight: 0,
    fillColor: '#990033',
    fillOpacity: 0.5,
    scale: 3 //pixels
  };

  icon_filled_01 = {
    path: google.maps.SymbolPath.CIRCLE,
    strokeColor: '#990033',
    strokeOpacity: 0.0,
    strokeWeight: 0,
    fillColor: '#990033',
    fillOpacity: 0.1,
    scale: 3 //pixels
  };

  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 45.000, lng: 0.000},
    zoom: 4,
    streetViewControl: false
  });

  var bounds = new google.maps.LatLngBounds();
  for (var id in airports) {
    bounds.extend(airports[id].coords);
    newairport(airports[id].coords, id);
  }
  map.fitBounds(bounds);
  // map.setZoom(map.getZoom()-1);

  retro = [
            {
              elementType: 'geometry',
              stylers: [{color: '#ebe3cd'}]
            },
            {
              elementType: 'labels.text.fill',
              stylers: [{visibility: "off"}] // stylers: [{color: '#523735'}]
            },
            {
              elementType: 'labels.text.stroke',
              stylers: [{visibility: "off"}] // stylers: [{color: '#f5f1e6'}]
            },
            {
              featureType: 'administrative',
              elementType: 'geometry.stroke',
              stylers: [{color: '#c9b2a6'}]
            },
            {
              featureType: 'administrative.land_parcel',
              elementType: 'geometry.stroke',
              stylers: [{color: '#dcd2be'}]
            },
            {
              featureType: 'administrative.land_parcel',
              elementType: 'labels.text.fill',
              stylers: [{visibility: "off"}] // stylers: [{color: '#ae9e90'}]
            },
            {
              featureType: 'landscape.natural',
              elementType: 'geometry',
              stylers: [{color: '#dfd2ae'}]
            },
            {
              featureType: 'poi',
              elementType: 'geometry',
              stylers: [{color: '#dfd2ae'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{visibility: "off"}] // stylers: [{color: '#93817c'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry.fill',
              stylers: [{color: '#a5b076'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{visibility: "off"}] // stylers: [{color: '#447530'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#f5f1e6'}]
            },
            {
              featureType: 'road.arterial',
              elementType: 'geometry',
              stylers: [{color: '#fdfcf8'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#f8c967'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#e9bc62'}]
            },
            {
              featureType: 'road.highway.controlled_access',
              elementType: 'geometry',
              stylers: [{color: '#e98d58'}]
            },
            {
              featureType: 'road.highway.controlled_access',
              elementType: 'geometry.stroke',
              stylers: [{color: '#db8555'}]
            },
            {
              featureType: 'road.local',
              elementType: 'labels.text.fill',
              stylers: [{color: '#806b63'}]
            },
            {
              featureType: 'transit.line',
              elementType: 'geometry',
              stylers: [{color: '#dfd2ae'}]
            },
            {
              featureType: 'transit.line',
              elementType: 'labels.text.fill',
              stylers: [{color: '#8f7d77'}]
            },
            {
              featureType: 'transit.line',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#ebe3cd'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'geometry',
              stylers: [{color: '#dfd2ae'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry.fill',
              stylers: [{color: '#b9d3c2'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#92998d'}]
            }
          ];
  map.setOptions({styles: retro});

  var paths = [
                ["mel", "sin"],
                ["mel", "dmk"],
                ["sin", "ccu"],
                ["sin", "del"],
                ["ccu", "del"],
                ["sin", "lhr"],
                ["dmk", "ccu"],
                ["sin", "mel"],
                ["dmk", "mel"],
                ["fco", "sin"],
                ["del", "lko"],
                ["dmk", "bne"],
                ["bne", "mel"],
                ["mel", "syd"],
                ["syd", "ool"],
                ["sin", "dxb"],
                ["dxb", "mel"],
                ["dxb", "cai"],
                ["cai", "nbo"],
                ["nbo", "dxb"],
                ["mel", "auh"],
                ["auh", "ist"],
                ["ist", "ams"],
                ["ams", "ist"],
                ["ist", "amm"],
                ["amm", "tip"],
                ["tip", "fco"],
                ["fco", "ist"],
                ["ist", "fco"],
                ["ist", "asr"],
                ["ist", "adb"],
                ["nav", "ist"],
                ["fco", "cmn"],
                ["cmn", "mad"],
                ["mad", "bcn"],
                ["bcn", "mad"],
                ["mad", "cmn"],
                ["cmn", "cdg"],
                ["cdg", "bko"],
                ["bko", "cdg"],
                ["lxr", "abs"],
                ["uas", "wil"],
                ["cdg", "txl"],
                ["txl", "lhr"],
                ["lhr", "auh"],
                ["auh", "mel"],
                ["cdg", "vce"],
                ["mel", "sgn"],
                ["sgn", "han"],
                ["han", "dad"],
                ["dad", "sgn"],
                ["sgn", "mel"],
                ["mel", "dps"],
                ["dps", "mel"],
                ["mel", "ool"],
                ["ool", "mel"],
                ["syd", "mel"],
                ["mel", "cbr"],
                ["cbr", "mel"],
                ["cns", "mel"],
                ["ool", "cns"],
                ["mel", "hnl"],
                ["hnl", "sfo"],
                ["sfo", "jfk"],
                ["jfk", "dca"],
                ["dca", "las"],
                ["las", "lax"],
                ["hsh", "gcw"],
                ["1g4", "hsh"],
                ["lax", "syd"],
                ["syd", "mel"],
                ["mel", "akl"],
                ["akl", "zqn"],
                ["chc", "akl"],
                ["akl", "nan"],
                ["nan", "syd"],
                ["syd", "mel"],
                ["mel", "sin"],
                ["sin", "kix"],
                ["nrt", "hkg"],
                ["hkg", "sin"],
                ["sin", "mel"],
              ];
  for (var i=0; i < paths.length; i++) {
    newflight(paths[i]);
  }
}
