// FlyToMarker.jsx
import { useMap } from "react-leaflet";
import { useEffect } from "react";

const FlyToMarker = ({ lat, lng }) => {
    const map = useMap();

    useEffect(() => {
        if (lat && lng) {
            map.flyTo([lat, lng], 14); // Smooth zoom to the location
        }
    }, [lat, lng, map]);

    return null;
};

export default FlyToMarker;
