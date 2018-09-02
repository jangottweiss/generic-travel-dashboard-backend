# Dynamic Travel Dashboard - Backend

**Teil 2**

Link zum Deployment: https://travel-board.netlify.com/

Seminararbeit im Rahmen der Mastervorlesung "Grundlagen Web-Engineering" am CAS der DHBW von Jan Gottweiß


## Example Request for testing
```
{
    "title": "Generic Test 1",
    "config": {
        "sections": [{
            "title": "New York City",
            "subtitle": "Dynamic Page",
            "nav": "Intro",
            "type": "Intro"
        }, {
            "title": "Where did I took Photos?",
            "nav": "Photo Map",
            "type": "Map",
            "mapData": {
                "dataId": "mapone",
                "general": {
                    "container": "map-container-1",
                    "style": "mapbox://styles/mapbox/streets-v9",
                    "center": [-73.98938, 40.73061],
                    "zoom": 12,
                    "scrollZoom": false
                },
                "layers": [{
                    "name": "imagePointLayer",
                    "layer": {
                        "id": "point",
                        "source": "geo",
                        "type": "circle",
                        "paint": {
                            "circle-radius": 3,
                            "circle-color": {
                                "property": "unix",
                                "colorSpace": "rgb",
                                "type": "exponential",
                                "stops": [
                                    [1530218767000, "#63a3c1"],
                                    [1530876656610, "#0f1f27"]
                                ]
                            }
                        }
                    }
                }]
            }


        }, {
            "title": "Top of the Rock",
            "nav": "Above NYC",
            "type": "Image",
            "image": "http://res.cloudinary.com/dvnincysz/image/upload/c_scale,q_90,w_1920/v1533304606/nyc-dashboard/_JAN6313.jpg"
        }, {
            "title": "How much did I walk around?",
            "nav": "Walking",
            "type": "Chart",
            "chartData": {
                "dataId": "chartone",
                "container": "chartone"
            }
        }, {
            "title": "Pepsi Cola Sign",
            "nav": "Night",
            "type": "Image",
            "image": "http://res.cloudinary.com/dvnincysz/image/upload/c_scale,q_90,w_1920/v1533304606/nyc-dashboard/_JAN7402.jpg"
        }]
    }
}
```