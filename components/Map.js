import { useState, useEffect } from "react";
import * as L from "leaflet";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import styled from "styled-components";

const positions = [
  {
    id: "1",
    name: "Key",
    lat: 52.520008,
    long: 13.404954,
    location: "Berlin",
    status: "Lost",
  },
  {
    id: "2",
    name: "Headphones",
    lat: 53.564922,
    long: 10.00392,
    location: "Hamburg",
    status: "Lost",
  },
  {
    id: "3",
    name: "Teapot",
    lat: 52.520308,
    long: 13.408254,
    location: "Berlin",
    status: "Lost",
  },
  {
    id: "4",
    name: "Lighter",
    lat: 53.551086,
    long: 9.993682,
    location: "Hamburg",
    status: "Lost",
  },
  {
    id: "5",
    name: "Batteries",
    lat: 48.76738,
    long: 9.205591,
    location: "Stuttgart",
    status: "Lost",
  },
  {
    id: "6",
    name: "Compass",
    lat: 48.516252,
    long: 9.149923,
    location: "Stuttgart",
    status: "Lost",
  },
  {
    id: "7",
    name: "Bottle",
    lat: 48.474338,
    long: 8.936196,
    location: "Rottenburg am Neckar",
    status: "Lost",
  },
  {
    id: "8",
    name: "Camera",
    lat: 51.31271,
    long: 9.479746,
    location: "Kassel",
    status: "Lost",
  },
  {
    id: "9",
    name: "Backpack",
    lat: 48.135124,
    long: 11.581981,
    location: "München",
    status: "Lost",
  },
  {
    id: "10",
    name: "Camera Lens",
    lat: 51.339695,
    long: 12.373075,
    location: "Leipzig",
  },
  {
    id: "11",
    name: "Lollipop",
    lat: 51.481468,
    long: 51.481468,
    location: "Halle",
    status: "Lost",
  },
  {
    id: "12",
    name: "Band Aid",
    lat: 50.356548,
    long: 7.59942,
    location: "Koblenz",
    status: "Lost",
  },
  {
    id: "13",
    name: "Kids Bike",
    lat: 52.357235,
    long: 9.751259,
    location: "Hannover",
    status: "Lost",
  },
  {
    id: "14",
    name: "Camera",
    lat: 50.827847,
    long: 50.827847,
    location: "Chemnitz",
    status: "Found",
  },
  {
    id: "15",
    name: "Backpack",
    lat: 51.058833,
    long: 13.728651,
    location: "Dresden",
    status: "Found",
  },
  {
    id: "16",
    name: "Diamonds",
    lat: 50.122427,
    long: 8.685281,
    location: "Frankfurt am Main",
    status: "Found",
  },
  {
    id: "17",
    name: "One Shoe",
    lat: 50.060754,
    long: 8.237295,
    location: "Wiesbaden",
    status: "Found",
  },
  {
    id: "18",
    name: "Ring",
    lat: 52.02379,
    long: 8.550192,
    location: "Bielefeld",
    status: "Found",
  },
  {
    id: "19",
    name: "Key",
    lat: 53.061355,
    long: 8.791523,
    location: "Bremen",
    status: "Found",
  },
  {
    id: "20",
    name: "Keyboard",
    lat: 52.268493,
    long: 8.076874,
    location: "Osnabrück",
    status: "Found",
  },
  {
    id: "21",
    name: "Shoe",
    lat: 52.379393,
    long: 13.09791,
    location: "Potsdam",
    status: "Found",
  },
  {
    id: "22",
    name: "Handshoe",
    lat: 53.626806,
    long: 11.402587,
    location: "Schwerin",
    status: "Found",
  },
  {
    id: "23",
    name: "Camera",
    lat: 53.850987,
    long: 10.683004,
    location: "Lübeck",
    status: "Found",
  },
  {
    id: "24",
    name: "Football",
    lat: 54.308592,
    long: 10.133887,
    location: "Kiel",
    status: "Found",
  },
  {
    id: "25",
    name: "Golden Coins",
    lat: 53.537206,
    long: 8.621178,
    location: "Bremerhaven",
    status: "Found",
  },
  {
    id: "26",
    name: "Golden Jewelry",
    lat: 48.720324,
    long: 11.466339,
    location: "Ingolstadt",
    status: "Found",
  },
];

const greenIcon = L.icon({
  iconUrl: "leaf-green.png",
  shadowUrl: "leaf-shadow.png",

  iconSize: [38, 95],
  shadowSize: [50, 64],
  iconAnchor: [22, 94],
  shadowAnchor: [4, 62],
  popupAnchor: [-3, -76],
});

const goldIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

function LocationMarker() {
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  useEffect(() => {
    map.locate();
  }, [map]);

  return (
    position && (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    )
  );
}

export default function Map() {
  return (
    <StyledMapContainer center={[51.235095, 9.682075]} zoom={6} scrollWheelZoom>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {positions.map((position) => {
        return (
          <Marker
            key={position.id}
            position={[position.lat, position.long]}
            icon={goldIcon}
          >
            <Popup>
              <a href={`/details/found/${position.id}`}>
                {position.status}:{position.name}
              </a>
            </Popup>
          </Marker>
        );
      })}

      <LocationMarker />
    </StyledMapContainer>
  );
}

const StyledMapContainer = styled(MapContainer)`
  height: 60rem;
  width: 40rem;
  margin: 0 auto;
  border-radius: 2rem;
`;
