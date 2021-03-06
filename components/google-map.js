import React from "react";
import { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const googleMap = () => {
  const googlemap = useRef(null);
  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_API_KEY,
      version: "weekly",
    });
    let map;
    let marker;
    loader.load().then(() => {
      const google = window.google;

      var myLatlng = new google.maps.LatLng(
        50.76523578109976,
        -2.021310941005347
      );

      map = new google.maps.Map(googlemap.current, {
        center: myLatlng,
        zoom: 12,
      });

      marker = new google.maps.Marker({
        position: myLatlng,
        title: "Jo Darley and Co Location",
      });

      marker.setMap(map);
    });
  });

  return <div id="map" ref={googlemap} />;
};

export default googleMap;
