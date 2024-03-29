window.onload = function () { 
}

var map;
var markers = [];
var infoWindow;

function initMap() {
    var losAngeles = {
        lat: 34.063380,
        lng: -118.358080
    };
    map = new google.maps.Map(document.getElementById('map'), {
        center: losAngeles,
        zoom: 11,
        mapTypeId: 'roadmap',
    });
    infoWindow = new google.maps.InfoWindow();
    searchStores();
}

function searchStores() {
    var foundStores = [];
    var zipCode = document.getElementById('zip-code-input').value;
    if (zipCode) {
        for (var store of stores) {
            var postal = store['address']['postalCode'].substring(0, 5);
            if (postal == zipCode) {
                foundStores.push(store);
            }
        }
    }
    else {
        foundStores = stores;
    }
    clearLocations()
    displayStores(foundStores);
    showStoresMarkres(foundStores);
    setOnClickListener();
}

function clearLocations() {
    infoWindow.close();
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
    }
    markers.length = 0;
}


function setOnClickListener() {
    var storeElements = document.querySelectorAll('.store-container');
    storeElements.forEach(function (elem, index) {
        elem.addEventListener('click', function () {
            new google.maps.event.trigger(markers[index], 'click');
        })
    })
}


function displayStores(stores) {
    var storesHtml = '';
    for (var [index, store] of stores.entries()) {
        var address = store['addressLines'];
        var phone = store['phoneNumber'];

        storesHtml += `
        <div class="store-container">
            <div class="store-address">
                <ul>
                    <li>${address[0]}</li>
                    <li>${address[1]}</li>
                    <li class="store-number">${phone}</li>
                    <div class="circle">${index + 1}
                    </div>
                </ul>

            </div>

        </div>
    `
        document.querySelector('.stores-list').innerHTML = storesHtml;
        console.log(store);

    }

}


function showStoresMarkres(stores) {
    var bounds = new google.maps.LatLngBounds();
    for (var [index, store] of stores.entries()) {
        var latlng = new google.maps.LatLng(
            store["coordinates"]["latitude"],
            store["coordinates"]["longitude"]);
        var name = store["name"];
        var address = store["addressLines"][0];
        var openStatusText = store["openStatusText"];
        var phoneNumber = store["phoneNumber"];
        bounds.extend(latlng);
        createMarker(latlng, name, address, openStatusText, phoneNumber, index + 1)
    }

    map.fitBounds(bounds);
}
function createMarker(latlng, name, address, openStatusText, phoneNumber, index) {
    var html = `
            <div class="store-info-window">
                <div class="store-info-name">
                    ${name}
                </div>
                <div class="store-info-status">
                    ${openStatusText}
                </div>
                <div class="store-info-address">
                    <div class="circle-1">
                        <a href="http://maps.google.com/maps?q=${latlng}&ll=${latlng}&z=17" target="_blank" style="color: white;">
                            <i class="fas fa-location-arrow"></i>
                        </a>
                    </div>
                    ${address}
                </div>
                <div class="store-info-phone">
                    <div class="circle-2">
                        <i class="fas fa-phone-alt"></i>
                    </div>
                    ${phoneNumber}
                </div>
            </div>
        `
    var marker = new google.maps.Marker({
        map: map,
        position: latlng,
        label: index.toString()
    });
    google.maps.event.addListener(marker, 'click', function () {
        infoWindow.setContent(html);
        infoWindow.open(map, marker);
    });
    markers.push(marker);

}
