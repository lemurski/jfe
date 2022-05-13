import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import React, { useMemo } from 'react';
import { useState, useEffect } from 'react';

export default function Map() {

    const {isLoaded} = useLoadScript({googleMapsApiKey: 'AIzaSyAWGI0P9GY0B2ZmfCmCN0cKgQyt4FoTJZ0'})

    function Sheet() {
        const center = useMemo(() => ({ lat: 51.92776, lng: 15.4947}),[])
        return (
            <GoogleMap zoom={17} center={center} mapContainerClassName='w-full h-full'>
                <Marker position={center} />
            </GoogleMap>
        )
    }

    if (!isLoaded) {
        return (
            <div>Loading...</div>
        )
    }
    else {
        return (
            <Sheet />
        )
    }

}