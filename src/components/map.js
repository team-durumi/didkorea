/*global kakao*/
import React from 'react'

class Map extends React.Component {
  componentDidMount() {
    let el = document.getElementById('map')
    let map = new kakao.maps.Map(el, {
      center: new kakao.maps.LatLng(37.4429125697942, 126.901658927773),
    })

    // 마커가 표시될 위치입니다
    let markerPosition = new kakao.maps.LatLng(
      37.4429125697942,
      126.901658927773
    )

    // 마커를 생성합니다
    let marker = new kakao.maps.Marker({
      position: markerPosition,
    })

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map)
  }

  render() {
    return <div className="App" id="map" style={{ height: 300 }}></div>
  }
}

export default Map
