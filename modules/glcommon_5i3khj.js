/**/﻿_jsload&&_jsload('glcommon', 'function aU(e,i){this.origin=e||null;this.direction=i||null}D.extend(aU.prototype,{set:function(e,i){this.origin=e;this.direction=i}});cc.Ray=aU;function eR(hV,e,h1){h1=h1||{};var i=h1.filter||hV.LINEAR;var hZ=h1.format||hV.RGBA;var hY=h1.type||hV.UNSIGNED_BYTE;var T=h1.wrap||hV.CLAMP_TO_EDGE;var hU=h1.mipmap||false;var hW=h1.testError||false;var hT=h1.unpackAlpha||false;var h0;if(typeof h1.flipY!=="boolean"){h0=true}else{h0=h1.flipY}var hX=hV.createTexture();hV.bindTexture(hV.TEXTURE_2D,hX);hV.pixelStorei(hV.UNPACK_FLIP_Y_WEBGL,h0);if(hT){hV.pixelStorei(hV.UNPACK_PREMULTIPLY_ALPHA_WEBGL,true)}hV.texParameteri(hV.TEXTURE_2D,hV.TEXTURE_WRAP_S,T);hV.texParameteri(hV.TEXTURE_2D,hV.TEXTURE_WRAP_T,T);hV.texParameteri(hV.TEXTURE_2D,hV.TEXTURE_MAG_FILTER,i);hV.texParameteri(hV.TEXTURE_2D,hV.TEXTURE_MIN_FILTER,hU?hV.LINEAR_MIPMAP_LINEAR:i);if(e===null){hV.texImage2D(hV.TEXTURE_2D,0,hZ,h1.width,h1.height,0,hZ,hY,null)}else{hV.texImage2D(hV.TEXTURE_2D,0,hZ,hZ,hY,e)}if(hU){hV.generateMipmap(hV.TEXTURE_2D)}if(hW===true){if(hV.getError()===hV.INVALID_VALUE){return null}}return hX}cc.utils={createTexture:eR};function bP(i,e){this._gl=i;e=e||{};this._ids={};this._count=0;this._width=e.width||4096;this._height=e.height||4096;this._name=e.name||"";this._textureType=e.textureType||i.UNSIGNED_BYTE;this._unpackAlpha=e.unpackAlpha||false;this._texture=null;this._currentOffsetY=0;this._currentX=0;this._nextX=0;this._usage=0;this.guid=bp.getGUID("texture_atlas_");this.isRendering=false;this._textTextureCache=[];if(e.init===true){this.initTexture()}}D.extend(bP.prototype,{initTexture:function(){var e=this._gl;this._texture=cc.utils.createTexture(e,null,{type:this._textureType,width:this._width,height:this._height,unpackAlpha:this._unpackAlpha})},getTexture:function(){if(!this._texture){this.initTexture()}return this._texture},getSize:function(){return new ea(this._width,this._height)},addTexture:function(i,e){if(i.id&&this._ids[i.id]){return this._ids[i.id]}if(!this._texture){this.initTexture()}e=e||i.height;var hV=this._height-i.height-this._currentOffsetY;if(hV<0){this._currentX=this._nextX;this._currentOffsetY=0;hV=this._height-i.height;if(this._currentX>=this._width){return null}}if(i.width>(this._nextX-this._currentX)){this._nextX=this._currentX+i.width;if(this._nextX>this._width){return null}}var hU=this._gl;hU.bindTexture(hU.TEXTURE_2D,this._texture);hU.pixelStorei(hU.UNPACK_FLIP_Y_WEBGL,true);hU.texSubImage2D(hU.TEXTURE_2D,0,this._currentX,hV,hU.RGBA,this._textureType,i);var hT=this._currentOffsetY;this._currentOffsetY+=e;this._calcUsage();this._count++;var T={width:this._currentX/this._width,height:(this._height-hT-e)/this._height};this._ids[i.id]=T;return T},_calcUsage:function(){this._usage=(this._currentX*this._height+(this._nextX-this._currentX)*this._currentOffsetY)/(this._height*this._width)},getUsage:function(){return this._usage},clear:function(){this._currentOffsetY=0;this._currentX=0;this._nextX=0;this._count=0;this._usage=0;this._ids={}}});cc.TextureAtlas=bP;function dq(i,e){this._gl=i;e=e||{};this._textureWidth=e.width||4096;this._textureHeight=e.height||4096;this._name=e.name||"";this._unpackAlpha=e.unpackAlpha||false;this._textureCollection=[]}D.extend(dq.prototype,{getEmptyTexture:function(){var e=null;if(this._textureCollection.length<3){e=new bP(this._gl,{width:this._textureWidth,height:this._textureHeight,name:this._name,unpackAlpha:this._unpackAlpha});this._textureCollection.push(e)}else{e=this._textureCollection.shift();while(e.inUse===true){this._textureCollection.push(e);e=this._textureCollection.shift()}e.clear();this._textureCollection.push(e)}e.inUse=true;return e},free:function(e){e.inUse=false}});cc.TextTextureManager=dq;var gW={instances:{},get:function(e,i){if(!i){throw"必须指定id"}if(!gW.instances[i]){gW.instances[i]=new fW(e)}return gW.instances[i]}};function fW(e){this._gl=e;this._attributes=new Uint8Array(16);this._enabledAttributes=new Uint8Array(16);this._capabilities={depthTest:[-1,this._gl.DEPTH_TEST],blend:[-1,this._gl.BLEND],cullFace:[-1,this._gl.CULL_FACE],stencilTest:[-1,this._gl.STENCIL_TEST],scissorTest:[-1,this._gl.SCISSOR_TEST]};this._faceCulling=-1;this._depthMask=-1;this._blendFunc=[-1,-1,-1,-1];this._colorMask=[-1,-1,-1,-1];this._depthFunc=-1;this._frontFace=-1;this._activeTexture=-1;this._clearColor=[0,0,0,0];this._fail=-1;this._zfail=-1;this._zpass=-1}D.extend(fW.prototype,{initAttribute:function(){for(var T=0,e=this._attributes.length;T<e;T++){this._attributes[T]=0}},enableAttribute:function(e){this._attributes[e]=1;if(this._enabledAttributes[e]===0){this._gl.enableVertexAttribArray(e);this._enabledAttributes[e]=1}},disableUnusedAttributes:function(){for(var T=0,e=this._enabledAttributes.length;T<e;T++){if(this._enabledAttributes[T]!==this._attributes[T]){this._gl.disableVertexAttribArray(T);this._enabledAttributes[T]=0}}},enableCap:function(e){if(this._capabilities[e][0]!==true){this._gl.enable(this._capabilities[e][1]);this._capabilities[e][0]=true}},disableCap:function(e){if(this._capabilities[e][0]!==false){this._gl.disable(this._capabilities[e][1]);this._capabilities[e][0]=false}},cullFace:function(e){if(this._faceCulling!==e){this._gl.cullFace(e);this._faceCulling=e}},blendFunc:function(){var i=arguments;var e=this._blendFunc;if(i.length===2){if(i[0]!==e[0]||i[1]!==e[1]||i[0]!==e[2]||i[1]!==e[3]){e[0]=i[0];e[1]=i[1];e[2]=i[0];e[3]=i[1];this._gl.blendFunc.apply(this._gl,arguments)}}else{if(i.length===4){if(i[0]!==e[0]||i[1]!==e[1]||i[2]!==e[2]||i[3]!==e[3]){e[0]=i[0];e[1]=i[1];e[2]=i[2];e[3]=i[3];this._gl.blendFuncSeparate.apply(this._gl,arguments)}}}},colorMask:function(){var e=arguments;var hT=true;for(var T=0;T<e.length;T++){if(this._colorMask[T]!==e[T]){this._colorMask[T]=e[T];hT=false}}if(!hT){this._gl.colorMask.apply(this._gl,arguments)}},depthFunc:function(e){if(this._depthFunc!==e){this._depthFunc=e;this._gl.depthFunc(e)}},depthMask:function(e){if(this._depthMask!==e){this._gl.depthMask(e);this._depthMask=e}},frontFace:function(e){if(this._frontFace!==e){this._frontFace=e;this._gl.frontFace(e)}},activeTexture:function(e){if(this._activeTexture!==e){this._activeTexture=e;this._gl.activeTexture(e)}},clearColor:function(e){if(!e||e.length<4){return}if(this._clearColor[0]!==e[0]||this._clearColor[1]!==e[1]||this._clearColor[2]!==e[2]||this._clearColor[3]!==e[3]){this._clearColor=e.slice(0,4);this._gl.clearColor(e[0]/255,e[1]/255,e[2]/255,e[3]/255)}},stencilOp:function(i,T,e){if(this._fail!==i||this._zfail!==T||this._zpass!==e){this._fail=i;this._zfail=T;this._zpass=e;this._gl.stencilOp(i,T,e)}}});cc.WebGLState=gW;');