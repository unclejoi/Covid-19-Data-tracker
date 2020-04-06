import L from 'leaflet';

const iconPerson = new L.Icon({
    iconUrl: require('./pin.svg'),
    iconRetinaUrl: require('./pin.svg'),
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(10,20),
});

export { iconPerson };