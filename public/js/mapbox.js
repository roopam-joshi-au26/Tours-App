export const displayMap = (locations) => {
    mapboxgl.accessToken = 'pk.eyJ1Ijoicm9vcGFtam9zaGk2MyIsImEiOiJjbDJsZmpkZGcwNjBuM2xtYXVleGhqbTQ1In0.b0McUsRutKJTHYxMqneHOQ';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/roopamjoshi63/cl2lkm6kw001y15rxn6s76cz4',
    scrollZoom: false
    // center: [-118.113491, 34.111745],
    // zoom: 4,
    // interactive: false
});

const bounds = new mapboxgl.LngLatBounds();

locations.forEach((loc) => {
    //Create marker
    const el = document.createElement('div');
    el.className = 'marker';
    //Add marker
    new mapboxgl.Marker({
        element: el,
        anchor: 'bottom'
    }).setLngLat(loc.coordinates).addTo(map);

    //Add popup
    new mapboxgl.Popup({
        offset: 30
    }).setLngLat(loc.coordinates).setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`).addTo(map);

    //Extend map bounds to include current location
    bounds.extend(loc.coordinates);
});

map.fitBounds(bounds,{
    padding: {
        top: 200,
        bottom: 150,
        left:100,
        right: 100
    }
});
};

