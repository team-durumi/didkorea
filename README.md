# didkorea

## 기획자료

- 리뉴얼 기획자료(고객전달) : https://docs.google.com/document/d/1ce2ibp0n0ysJPiTUxg-QQUXM1KQD0NqZ6M8w1ZSHJkY/edit?usp=sharing

- 제품소개 화면(고객전달) : https://docs.google.com/presentation/d/1SiSnIWVRdIWDUxGFiFcThBFahFKDUleVoqOK8xAusGw/edit?usp=sharing

- https://www.did-coltd.com/english/products/index.html (did 일본 사이트에서 보여주는 RS 체인이 1개 Product 이고, 특수체인이라고 표현한 것이 다른 제품군 중에서 골라서 판매하시는 목록 / 즉 DID 제품 11종의 상품이 있다고 생각하면 됨. 이중에 RS체인은 세부 규격 내용이 많이 포함 된 것

- 목록 필터를 너무 복잡하게 하지 말고 필터 기능으로 제안 (전체 / DID RS / DID 특수 / 대림 RS / 대림 특수)

- 고객 컨펌을 위해 목업을 그려 봅니다. https://app.moqups.com/lyQN9mhCdL/view

## 진행이슈

- 서버를 관리하는 업체에서 도메인 관리까지 하고 있음. 인수인계 받아야 함. (inames) / 도메인은 고객이 직접 관리하고, 서버는 없애는 방식으로 제안.

- 카카오맵이 시흥유통상가까지만 잡혀서 세부 위치를 원하실 수 있음.

## 카카오맵

```
<!-- * 카카오맵 - 지도퍼가기 -->
<!-- 1. 지도 노드 -->
<div id="daumRoughmapContainer1580784547243" class="root_daum_roughmap root_daum_roughmap_landing"></div>

<!--
	2. 설치 스크립트
	* 지도 퍼가기 서비스를 2개 이상 넣을 경우, 설치 스크립트는 하나만 삽입합니다.
-->
<script charset="UTF-8" class="daum_roughmap_loader_script" src="https://ssl.daumcdn.net/dmaps/map_js_init/roughmapLoader.js"></script>

<!-- 3. 실행 스크립트 -->
<script charset="UTF-8">
	new daum.roughmap.Lander({
		"timestamp" : "1580784547243",
		"key" : "wuk7",
		"mapWidth" : "800",
		"mapHeight" : "400"
	}).render();
</script>
```


## 카카오맵 이미지지도 코드 ('광명코포레이션' 검색) (담)
<div style="font:normal normal 400 12px/normal dotum, sans-serif; width:640px; height:392px; color:#333; position:relative"><div style="height: 360px;"><a href="https://map.kakao.com/?urlX=478147.0&amp;urlY=1095026.0&amp;itemId=8766324&amp;q=%EA%B4%91%EB%AA%85%EC%BD%94%ED%8F%AC%EB%A0%88%EC%9D%B4%EC%85%98&amp;srcid=8766324&amp;map_type=TYPE_MAP&amp;from=roughmap" target="_blank"><img class="map" src="//t1.daumcdn.net/roughmap/imgmap/d565837cf4fa15be45e0c43c30c137e8ada4d9e314bbb4f5355982816cba16cd" width="638px" height="358px" style="border:1px solid #ccc;"></a></div><div style="overflow: hidden; padding: 7px 11px; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 0px 0px 2px 2px; background-color: rgb(249, 249, 249);"><a href="https://map.kakao.com" target="_blank" style="float: left;"><img src="//t1.daumcdn.net/localimg/localimages/07/2018/pc/common/logo_kakaomap.png" width="72" height="16" alt="카카오맵" style="display:block;width:72px;height:16px"></a><div style="float: right; position: relative; top: 1px; font-size: 11px;"><a target="_blank" href="https://map.kakao.com/?from=roughmap&amp;srcid=8766324&amp;confirmid=8766324&amp;q=%EA%B4%91%EB%AA%85%EC%BD%94%ED%8F%AC%EB%A0%88%EC%9D%B4%EC%85%98&amp;rv=on" style="float:left;height:15px;padding-top:1px;line-height:15px;color:#000;text-decoration: none;">로드뷰</a><span style="width: 1px;padding: 0;margin: 0 8px 0 9px;height: 11px;vertical-align: top;position: relative;top: 2px;border-left: 1px solid #d0d0d0;float: left;"></span><a target="_blank" href="https://map.kakao.com/?from=roughmap&amp;eName=%EA%B4%91%EB%AA%85%EC%BD%94%ED%8F%AC%EB%A0%88%EC%9D%B4%EC%85%98&amp;eX=478147.0&amp;eY=1095026.0" style="float:left;height:15px;padding-top:1px;line-height:15px;color:#000;text-decoration: none;">길찾기</a><span style="width: 1px;padding: 0;margin: 0 8px 0 9px;height: 11px;vertical-align: top;position: relative;top: 2px;border-left: 1px solid #d0d0d0;float: left;"></span><a target="_blank" href="https://map.kakao.com?map_type=TYPE_MAP&amp;from=roughmap&amp;srcid=8766324&amp;itemId=8766324&amp;q=%EA%B4%91%EB%AA%85%EC%BD%94%ED%8F%AC%EB%A0%88%EC%9D%B4%EC%85%98&amp;urlX=478147.0&amp;urlY=1095026.0" style="float:left;height:15px;padding-top:1px;line-height:15px;color:#000;text-decoration: none;">지도 크게 보기</a></div></div></div>


# Gatstrap

[![Netlify Status](https://api.netlify.com/api/v1/badges/fa249a3a-68ea-4b4b-9aa6-394c87099ee1/deploy-status)](https://app.netlify.com/sites/gatstrap/deploys)
[![CircleCI](https://circleci.com/gh/jaxx2104/gatsby-starter-bootstrap.svg?style=svg)](https://circleci.com/gh/jaxx2104/gatsby-starter-bootstrap)
[![dependency Status](https://img.shields.io/david/jaxx2104/gatsby-starter-bootstrap.svg?style=flat-square)](https://david-dm.org/jaxx2104/gatsby-starter-bootstrap#info=dependencies)

Gatsby starter for bootstrap a blog

![thumb](https://user-images.githubusercontent.com/2681007/42584980-656c9406-856f-11e8-882f-cafa9d89b395.png)

## GatsbyJS v2, v1, v0

- For v2 version of this starter, check out the [master branch](https://github.com/jaxx2104/gatsby-starter-bootstrap).
- For v1 version, check out the [v1 branch](https://github.com/jaxx2104/gatsby-starter-bootstrap/tree/v1).
- For v0 version, check out the [v0 branch](https://github.com/jaxx2104/gatsby-starter-bootstrap/tree/v0).
- Make sure to read the [migration guide](https://next.gatsbyjs.org/docs/migrating-from-v1-to-v2/) when porting v1 projects to v2.

## Features

- Single column layout
- Simple components: Post, Page, Navi, Footer etc.
- [Twitter Bootstrap 4](https://github.com/twbs/bootstrap) css framework.
- Custom theme color.

## Installation

Install this starter (assuming Gatsby is installed) by running from your CLI:
`gatsby new gatstrap https://github.com/jaxx2104/gatsby-starter-bootstrap`

## Usage

develop
`gatsby develop`

### Custom Theme

`/src/scss/gatstrap.scss`

![1f466b07-5506-4c8d-8d17-8d02b42d6d0d](https://user-images.githubusercontent.com/2681007/43086458-5092d0be-8ed8-11e8-8125-8b336fdd3b43.gif)
