window.onload = function() {
    initialize();
}

function initialize() {
    var latlng = new google.maps.LatLng(54.7142836, 25.2992373);
    var latlng2 = new google.maps.LatLng(54.8866851, 23.9273562);
    var latlng3 = new google.maps.LatLng(54.9139418, 23.9867546);
    var latlng4 = new google.maps.LatLng(54.9111168, 23.8456838);

    var myOptions = {
        zoom: 16,
        center: latlng
    };

    var myOptions2 = {
        zoom: 16,
        center: latlng2
    };

    var myOptions3 = {
        zoom: 16,
        center: latlng3
    };

    var myOptions4 = {
        zoom: 16,
        center: latlng4
    };

    var map = new google.maps.Map(document.getElementById("map"), myOptions);
    var map2 = new google.maps.Map(document.getElementById("map2"), myOptions2);
    var map3 = new google.maps.Map(document.getElementById("map3"), myOptions3);
    var map4 = new google.maps.Map(document.getElementById("map4"), myOptions4);

    var myMarker = new google.maps.Marker({
        position: {
            lat: 54.7142836,
            lng: 25.2992373
        },
        map: map,
    });

    var myMarker2 = new google.maps.Marker({
        position: {
            lat: 54.8866851,
            lng: 23.9273562
        },
        map: map2,
    });

    var myMarker3 = new google.maps.Marker({
        position: {
            lat: 54.9139418,
            lng: 23.9867546
        },
        map: map3,
    });

    var myMarker4 = new google.maps.Marker({
        position: {
            lat: 54.9111168,
            lng: 23.8456838
        },
        map: map4,
    });

}

google.maps.event.addDomListener(window, 'load', initialize);
