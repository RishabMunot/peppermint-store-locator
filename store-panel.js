google.maps.event.addDomListener(window, 'load', function() {
  var map = new google.maps.Map(document.getElementById('map-canvas'), {
    center: new google.maps.LatLng(24.098995,82.494624),
    zoom: 5,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  storeData = []
  var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(28.4792,77.0758),
    map: map,
    icon: 'https://cdn.shopify.com/s/files/1/0585/2230/4673/files/assorted_d9250e1a-df54-4dc5-a008-14ded2055ca5.png?v=1627894173'
  });
  var panelDiv = document.getElementById('store-panel');
   // getting data csv and storing in storeData
   $.ajax({
    type: "GET",
    url: "https://cdn.shopify.com/s/files/1/0577/8607/3297/files/store_data.csv?v=1624887731",
    success: function (data) {
      storeData = Papa.parse(data).data;
      cities = [];
      outlets = [];
      states = [];
      storeData.shift();
      storeData.pop();

      // Create markers.
      storeData.forEach(store => {
        console.log(store);
        const marker = new google.maps.Marker({
          
          position:  new google.maps.LatLng(store[6],store[7]),
          icon: 'https://cdn.shopify.com/s/files/1/0585/2230/4673/files/customMarker.png?v=1628341257',
          map: map,
        });
      });
      
      
    },
  });

  // var view = new storeLocator.View(map, data, {
  //   geolocation: false,
  //   features: data.getFeatures()
  // });

  // new storeLocator.Panel(panelDiv, {
  //   view: view
  // });
});
