/**/﻿_jsload&&_jsload('hotspot', 'function di(e){this._map=e;this._enableSpot=true;this.bindMapEvent()}di.prototype.enable=function(){this._enableSpot=true};di.prototype.disable=function(){this._enableSpot=false};di.prototype.bindMapEvent=function(){var hV=this._map;var hT=this;function i(){hT.disable()}function e(){hT.enable()}hV.addEventListener("movestart",i);hV.addEventListener("moveend",e);hV.addEventListener("zoomstart",i);hV.addEventListener("zoomend",function(){setTimeout(e,10)});function T(){hT.reset()}hV.addEventListener("load",T);hV.addEventListener("moveend",T);hV.addEventListener("zoomend",T);hV.addEventListener("dragend",function(){this.temp.__dragged=true});hV.addEventListener("mousemove",function hU(h5){if(hV.currentOperation!==dV.idle||hT._enableSpot===false){return}if(h5.overlay&&!(h5.overlay instanceof x)||h5.infoWindow){return}var ia=this.temp;if(ia.spottimer){clearTimeout(ia.spottimer);ia.spottimer=null}if(hV.spotsPool){var hW=hV.temp.curSpots.slice(0);hV.temp.curSpots=[];var h6=hT.getSpotsByScreenPosition(h5.pixel);if(h6.length>0){hV.platform.style.cursor="pointer"}hV.temp.curSpotsArray=[];for(var h3=hV.temp.curSpots.length-1;h3>=0;h3--){if(hV.temp.curSpots[h3]&&hV.temp.curSpots[h3].spots&&hV.temp.curSpots[h3].spots.length>0){hV.temp.curSpotsArray=hV.temp.curSpots[h3].spots;break}}var h7=hV.temp.curSpotsArray.slice(0);var hY=[];var h9=h3;for(var h3=hW.length-1;h3>=0;h3--){if(h3===h9){hY=hW[h9]&&hW[h9].spots||[];for(var h2=0,h0=hY.length;h2<h0;h2++){for(var h1=0,hX=0,hZ=hV.temp.curSpotsArray.length;h1<hZ;h1++,hX++){if(hY[h2]===hV.temp.curSpotsArray[h1]){hY.splice(h2,1);h2--;h7.splice(hX,1);hX--}}}}else{if(hW[h3]&&hW[h3].spots&&hW[h3].spots.length>0){for(var h2=0;h2<hW[h3].spots.length;h2++){hY.push(hW[h3].spots[h2])}}}}if(hY.length>0){var h4=new bc("onspotmouseout");h4.spots=hY.slice(0);hV.dispatchEvent(h4)}if(hV.temp.curSpotsArray.length===0){var h8=null;if(hV.getZoom()>=17){h8=hT.checkAreaSpot(h5.point)}if(h8){if(hV.platform.style.cursor!=="pointer"){hV.platform.style.cursor="pointer"}hV.temp.curAreaSpot=h8}else{if(hV.platform.style.cursor!==hV.config.defaultCursor){hV.platform.style.cursor=hV.config.defaultCursor}hV.temp.curAreaSpot=null}}else{if(h7.length>0){var h4=new bc("onspotmouseover");if(hV.temp.curSpots[hV.temp.curSpots.length-1].enableMultiResponse){h4.spots=h7.slice(0)}else{h7.sort(function(ic,ib){return ic._distance-ib._distance});h4.spots=h7.slice(0,1)}if(h5.point){h4.point=new hu(h5.point.lng,h5.point.lat)}h4.pixel=new ek(h5.pixel.x,h5.pixel.y);hV.dispatchEvent(h4)}}}});hV.addEventListener("click",function(h2){var h0=this.temp;if(h2.overlay&&!(h2.overlay instanceof aS)){return}if(!h2.point){return}if(D.Platform.iphone||D.Platform.ipad||D.Platform.android){h0.curSpotsArray=hT.getSpotsByScreenPosition(h2.pixel)}var h1=new bc("onspotclick");h1.point=new hu(h2.point.lng,h2.point.lat);h1.pixel=new ek(h2.pixel.x,h2.pixel.y);if(h0.curSpotsArray.length>0){for(var hZ=0,hW=h0.curSpots.length;hZ<hW;hZ++){if(h0.curSpots[hZ].spots&&h0.curSpots[hZ].spots.length>0){if(h0.curSpots[hZ].enableMultiResponse){h1.spots=h0.curSpotsArray.slice(0)}else{h0.curSpotsArray.sort(function(h5,h4){return h5._distance-h4._distance});h1.spots=h0.curSpotsArray.slice(0,1)}break}}}var hY=h1.spots||[];for(var hZ=0;hZ<hY.length;hZ++){var hX=hY[hZ].pt;var h3=hT.checkAreaSpot(hX);if(h3){h0.curAreaSpot=h3}}h1.curAreaSpot=h0.curAreaSpot;this.dispatchEvent(h1)});hV.addEventListener("rightclick",function(hX){if(hX.overlay&&!(hX.overlay instanceof aS)){return}if(!hX.point){return}var hW=new bc("onhotspotrightclick");hW.point=new hu(hX.latlng.lng,hX.latlng.lat);hW.mct=new hu(hX.point.lng,hX.point.lat);hW.pixel=new ek(hX.pixel.x,hX.pixel.y);if(f.environment==="customEditor"){hW.styleIds=hT.checkStyleAreaSpot(hX.point)}this.dispatchEvent(hW)})};di.prototype.getSpotsByScreenPosition=function(hV){var h2=[];var e=this._map;var hX=e.getTilt();if(!e.spotsPool){return h2}for(var hT in e.spotsPool){var h0=e.spotsPool[hT];var hY=h0.spots.slice(0);if(hY[0]&&hY[0].userdata&&hY[0].userdata.mapPoi&&e._displayOptions.poi===false){continue}e.temp.curSpots[h0.zIndex]={spots:[],enableMultiResponse:h0.enableMultiResponse};for(var hW=0,hU=hY.length;hW<hU;hW++){var h1=hY[hW];if(h1.lr&&(e.getZoom()<h1.lr[0]||e.getZoom()>h1.lr[1])){continue}var T=h1.px||e.pointToPixelIn(h1.pt);if(T.x<e.width&&T.y<e.height){if((hV.x-T.x<h1.bd[2]&&hV.x-T.x>h1.bd[0])&&(T.y-hV.y<h1.bd[3]&&T.y-hV.y>h1.bd[1])){if(hX>55){var hZ=e.pointToOverlayPixelIn(h1.pt);if(hZ.outOfFrustum){continue}}e.temp.curSpots[h0.zIndex].spots.push(h1);h1._distance=gX(T,hV);h2.push(h1)}}}}return h2};di.prototype.checkAreaSpot=function(e){if(!e){return null}var T=this._map;if(T._displayOptions.indoor===false){return null}for(var hT in T.areaSpots){var i=T.areaSpots[hT];if(dh([e.lng,e.lat],i.spot)){return hT}}return null};di.prototype.checkStyleAreaSpot=function(T){if(!T){return null}var hU=this._map;var i=[];for(var hV in hU.areaSpots){var hT=hU.areaSpots[hV];var e=hT.userData;if(e.type==="mapstyle"&&dh([T.lng,T.lat],hT.spot)){i.push([e.styleId])}}return i};di.prototype.reset=function(){var e=this._map;if(e.temp.__dragged==true){e.temp.__dragged=false}else{e.temp.curSpots=[];e.platform.style.cursor=e.config.defaultCursor}};di.prototype.resetAreaSpot=function(){for(var T in this.areaSpots){var i=this.areaSpots[T];var e=i.userData;if(e.type==="mapstyle"){delete this.areaSpots[T]}}};bp.register(function(e){e._spotsMgr=new di(e)});');