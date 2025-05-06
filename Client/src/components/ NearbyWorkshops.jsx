import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import FlyToMarker from "./FlyToMarker";

// Fix default marker icon issue in Leaflet
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl,
    shadowUrl: iconShadow,
});
L.Marker.prototype.options.icon = DefaultIcon;

const workshops = [
    {
        name: "STARYA MOBILITY PRIVATE LIMITED",
        address: "10th Main, Near Ram Mandir, Opp. to Canara Bank, 4th Block, Rajajinagar, Bengaluru - 10",
        contact: "+91 98765 43210",
        email: "info@starya.in",
        rating: 4.5,
        lat: 12.9912,
        lng: 77.5521,
         website: "https://sunmobility.com",
    },
    {
        name: "Loop Moto",
        address: "123 Green Street, Electronics City, Bengaluru - 560100",
        contact: "+91 87654 32109",
        email: "support@loopmoto.com",
        rating: 4.2,
        lat: 12.8382,
        lng: 77.6710,
        website: "https://sunmobility.com",
    },
    {
        name: "doReal Motors",
        address: "45 Prime Road, Whitefield, Bengaluru - 560066",
        contact: "+91 99887 66554",
        email: "contact@dorealmotors.com",
        rating: 4.0,
        lat: 12.9692,
        lng: 77.7499,
        website: "https://sunmobility.com",
    },
    {
        name: "GoGreenBOV",
        address: "89 Eco Park, MG Road, Bengaluru - 560001",
        contact: "+91 88990 11223",
        email: "info@gogreenbov.com",
        rating: 4.3,
        lat: 12.9751,
        lng: 77.6033,
        website: "https://sunmobility.com",
    },
    {
        name: "Northway Motorsport",
        address: "Gat No. 534, Near Shree Hospital, Narhe, Pune - 411041",
        contact: "+91 99229 12345",
        email: "info@northwaymotorsports.com",
        rating: 4.7,
        lat: 18.4568,
        lng: 73.8253,
        website: "https://sunmobility.com",
    },
    {
        name: "E-Trio Automobiles",
        address: "Plot No. 66, Phase 3, IDA Cherlapally, Hyderabad - 500051",
        contact: "+91 80088 00006",
        email: "hello@etrio.in",
        rating: 4.4,
        lat: 17.4985,
        lng: 78.6062,
        website: "https://sunmobility.com",
    },
    {
        name: "Altigreen Propulsion Labs",
        address: "Survey No. 36/2, Yelahanka, Bengaluru - 560063",
        contact: "+91 99801 23456",
        email: "contact@altigreen.com",
        rating: 4.6,
        lat: 13.1153,
        lng: 77.5964,
        website: "https://sunmobility.com",
    },
    {
        name: "Raviteja Retrofitting Services",
        address: "1-2-34, New Monda Market, Secunderabad - 500003",
        contact: "+91 99874 56342",
        email: "raviteja.evretrofitting@gmail.com",
        rating: 4.1,
        lat: 17.4401,
        lng: 78.4983,
        website: "https://sunmobility.com",
    },
    {
        name: "E-Bike India",
        address: "Plot No. 14, Sector 23, Turbhe, Navi Mumbai - 400705",
        contact: "+91 98200 14221",
        email: "support@ebikeindia.in",
        rating: 4.3,
        lat: 19.0707,
        lng: 73.0169,
        website: "https://sunmobility.com",
    },
    {
        name: "Ather Energy Service Center",
        address: "Sector 63, Noida - 201301",
        contact: "+91 98765 12345",
        email: "service@atherenergy.com",
        rating: 4.8,
        lat: 28.6144,
        lng: 77.3746,
        website: "https://sunmobility.com",
    },
    {
        name: "Tadpole",
        address: "2-B-4F. R&I PARK,IIT Delhi, IIT Campus, Hauz Khas New Delhi, Delhi 110016",
        contact: "+91 11 4445 6803",
        email: "Hello@tadpoleprojects.com",
        rating: 4.8,
        lat: 28.545718,
        lng: 77.1927679,
        website: "https://sunmobility.com",
    },
    {
        name: "etrio",
        address: "4th Floor, Purva Summit, Whitefields HITEC City, Hyderabad, Telangana-500081",
        contact: "+91 7428091566",
        email: "hello@etrio.in",
        rating: 4.8,
        lat: 17.448,
        lng: 78.391,
        website: "https://sunmobility.com",
    },
    {
        name: "SUN MOBILITY PRIVATE LIMITED",
        address: "No.25, Doddanekundi Industrial Area, Mahadevapura post, Whitefield Main Road, Bangalore, Karnataka, India, 560048  ",
        contact: "1800 309 5090",
        email: "info@sunmobility.com",
        rating: 4.8,
        lat: 12.992978,
        lng: 77.706709,
        website: "https://sunmobility.com",
    },
    {
        name: "SUN MOBILITY PRIVATE LIMITED",
        address: "Faridabad-Sector-29-Bhoor-Colony ",
        contact: "1800 309 5090",
        email: "info@sunmobility.com",
        rating: 4.8,
        lat: 28.428083,
        lng: 77.322527,
        website: "https://sunmobility.com",
    },
    {
        name: "SUN MOBILITY PRIVATE LIMITED",
        address: "IOCL-Faridabad-Narain-Service-Station ",
        contact: "1800 309 5090",
        email: "info@sunmobility.com",
        rating: 4.8,
        lat: 28.424505,
        lng: 77.309214,
        website: "https://sunmobility.com",
    },
    {
        name: "SUN MOBILITY PRIVATE LIMITED",
        address: "FDB_IOC_Chaudhary Auto service ",
        contact: "1800 309 5090",
        email: "info@sunmobility.com",
        rating: 4.8,
        lat: 17.448,
        lng: 78.391,
        website: "https://sunmobility.com",
    },
];

// Distance helper function
const getDistance = (lat1, lng1, lat2, lng2) => {
    const toRad = (value) => (value * Math.PI) / 180;
    const R = 6371;
    const dLat = toRad(lat2 - lat1);
    const dLng = toRad(lng2 - lng1);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRad(lat1)) *
        Math.cos(toRad(lat2)) *
        Math.sin(dLng / 2) *
        Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
};

const NearbyWorkshops = () => {
    const [selectedWorkshop, setSelectedWorkshop] = useState(null);
    const [userLocation, setUserLocation] = useState(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setUserLocation({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                });
            },
            (error) => {
                console.error("Error getting user location:", error);
            }
        );
    }, []);

    const sortedWorkshops = userLocation
        ? [...workshops]
            .map((w) => ({
                ...w,
                distance: getDistance(userLocation.lat, userLocation.lng, w.lat, w.lng),
            }))
            .sort((a, b) => a.distance - b.distance)
        : workshops;


    return (
        <div className="flex h-screen">
            {/* Left Side - Workshop List */}
            <div className="w-1/2 p-6 overflow-y-auto bg-gray-900 text-white flex flex-col space-y-4">
                {sortedWorkshops.map((w, index) => (
                    <div
                        key={index}
                        className="w-full p-4 bg-gray-800 rounded-lg shadow cursor-pointer hover:bg-gray-700"
                        onClick={() => setSelectedWorkshop(w)}
                    >
                        <h3 className="text-xl font-semibold">{w.name}</h3>
                        <p className="text-sm text-gray-300">{w.address}</p>
                        <p className="text-sm">📞 {w.contact}</p>
                        <p className="text-sm">📧 {w.email}</p>
                        <p className="text-sm">⭐ {w.rating} / 5</p>
                        {userLocation && w.distance && (
                            <p className="text-sm">📍 {w.distance.toFixed(2)} km away</p>
                        )}
                        {w.website && (
                            <a
                                href={w.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:underline text-sm"
                                onClick={(e) => e.stopPropagation()} // So it doesn't trigger map fly
                            >
                                🔗 Visit Website
                            </a>
                        )}
                    </div>
                ))}
            </div>

            {/* Right Side - Map */}
            <div className="w-1/2" style={{ height: "100vh" }}>
                {userLocation && (
                    <MapContainer
                        center={[userLocation.lat, userLocation.lng]}
                        zoom={12}
                        className="h-full w-full z-0"
                    >
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />

                        {selectedWorkshop && (
                            <FlyToMarker lat={selectedWorkshop.lat} lng={selectedWorkshop.lng} />
                        )}

                        <Marker position={[userLocation.lat, userLocation.lng]}>
                            <Popup>You are here</Popup>
                        </Marker>

                        {workshops.map((w, i) => (
                            <Marker key={i} position={[w.lat, w.lng]}>
                                <Popup>
                                    <strong>{w.name}</strong>
                                    <br />{w.address}
                                    <br />{w.contact}
                                </Popup>
                            </Marker>
                        ))}
                    </MapContainer>
                )}
            </div>
        </div>
    );

};

export default NearbyWorkshops;
