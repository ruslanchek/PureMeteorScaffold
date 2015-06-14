App.Map = function(options){
    var _options = _.extend({
        center: [0, 0],
        zoom: 3,
        layer: 'street',
        containerId: 'map',
        imagePath: '/packages/bevanhunt_leaflet/images'
    }, options);

    L.Icon.Default.imagePath = _options.imagePath;

    var map = null;

    var layers = {
        street: {
            url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
            options: {
                attribution: '&copy; 2015 Fortyfour'
            }
        },
        esri: {
            url: 'http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
            attribution: '&copy; 2015 Fortyfour'
        },
        hydraFull: {
            url: 'http://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png',
            attribution: '&copy; 2015 Fortyfour'
        },
        openSeaMap: {
            url: 'http://tiles.openseamap.org/seamark/{z}/{x}/{y}.png',
            attribution: '&copy; 2015 Fortyfour'
        },
        mapbox: {
            url: 'http://{s}.tiles.mapbox.com/v3/MapBox.pk.eyJ1IjoicnVzbGFuY2hlayIsImEiOiJFWURfVkJjIn0/{z}/{x}/{y}.png',
            attribution: '&copy; 2015 Fortyfour',
            subdomains: 'abcd'
        }
    };

    var markers = {};
        cluster = new L.MarkerClusterGroup({
            showCoverageOnHover: false,
            removeOutsideVisibleBounds: true,
            iconCreateFunction: function(cluster) {
                return new L.DivIcon({ 
                    html: '<div class="map-cluster">' + cluster.getChildCount() + '</div>' 
                });
            }
        });

    function createMap(){
        map = L.map(_options.containerId);
        map.setView(_options.center, _options.zoom);
    }

    function createPopup(data){
        var compiled = _.template('<div class="map-popup">' +
                                    '<div class="title">' +
                                        '<a href="/offers/<%= id %>"><%= address %></a>' +
                                    '</div>' +
                                    '<div class="picture">' +
                                        '<span class="loading"></span>' + 
                                        '<a href="/offers/<%= id %>">' +
                                          '<img src="<%= picture %>">' +
                                        '</a>' +
                                        '<div class="price"><%= price %></div>' +
                                      '</div>' +
                                      '<p><%= title %></p>' +
                                  '</div>');

        var $html = $(compiled(data));

        $html.find('.picture img').on('load', function(){
            $html.find('.picture').addClass('loaded');
        });

        return $html[0];
    }

    this.setLayer = function(layer){
        var layerData;

        if(layers[layer]){
            layerData = layers[layer];
        }else{
            layerData = layers.street;
        }

        L.tileLayer(layerData.url, layerData.options).addTo(map);
    };

    this.getMap = function(){
        return map;
    };

    this.changeMarkerData = function(id, options){
        if(markers[id]){
            markers[id].setLatLng(options.position);
            this.initCluster();
        }
    };

    this.addMarker = function(id, options){
        if(options.position && options.position[0] && options.position[1] && !markers[id]) {
            var _options = _.extend({
                position: [0, 0],
                popupData: {
                    title: '',
                    address: '',
                    price: '',
                    id: '',
                    picture: ''
                },
                onDragend: function (position) {}
            }, options);

            var icon = L.AwesomeMarkers.icon({
                icon: 'home',
                prefix: 'fa',
                markerColor: 'cadetblue'
            });

            var marker = L.marker(_options.position, {
                draggable: true,
                icon: icon,
                title: _options.popupData.address,
            });

            cluster.addLayer(marker);
          
            marker.bindPopup(createPopup(_options.popupData), {
                autoPanPadding: [115, 115]
            });

            marker.on('dragend', function () {
                var position = marker.getLatLng();
                
                _options.onDragend([
                    position.lat, 
                    position.lng
                ]);
            });

            markers[id] = marker;

            this.initCluster();
        }
    };

    this.initCluster = function(){
        map.addLayer(cluster);
    };

    this.removeMarker = function(id){
        if(markers[id]) {
            delete markers[id];
            this.initCluster();
        }
    };

    this.init = function(){
        createMap();

        this.setLayer(_options.layer);
        
        // Chaining
        return this;
    };
};
