window.TILE_VERSION = {
    "ditu": {
        "normal": {
            "version": "088",
            "updateDate": "20210506"
        },
        "satellite": {
            "version": "009",
            "updateDate": "20210506"
        },
        "normalTraffic": {
            "version": "081",
            "updateDate": "20210506"
        },
        "satelliteTraffic": {
            "version": "083",
            "updateDate": "20210506"
        },
        "mapJS": {
            "version": "104",
            "updateDate": "20210506"
        },
        "satelliteStreet": {
            "version": "083",
            "updateDate": "20210506"
        },
        "earthVector": {
            "version": "001",
            "updateDate": "20210506"
        }
    },
    "webapp": {
        "high_normal": {
            "version": "001",
            "updateDate": "20210506"
        },
        "lower_normal": {
            "version": "002",
            "updateDate": "20210506"
        }
    },
    "api_for_mobile": {
        "vector": {
            "version": "002",
            "updateDate": "20210506"
        },
        "vectorIcon": {
            "version": "002",
            "updateDate": "20210506"
        }
    }
};
window.MSV = {};
window.BMAP_AUTHENTIC_KEY = "eseRcUMFiUlnWA6miQLejNpvS70H8SRN";
window.BMapGL = window.BMapGL || {}; (function(bp, eB) {
    var D = D || {
        version: "20150702",
        emptyFn: function() {}
    }; (function() {
        D._log = [];
        var i = 0;
        var T = {};
        D.BaseClass = function(hT) {
            T[(this.hashCode = (hT || D.BaseClass.guid()))] = this
        };
        D.BaseClass.guid = function() {
            return "mz_" + (i++).toString(36)
        };
        D.BaseClass.create = function() {
            var hT = new D.BaseClass();
            hT.decontrol();
            return hT
        };
        var e = D.instance = D.I = function(hT) {
            return T[hT]
        };
        D.BaseClass.prototype.dispose = function() {
            if (this.hashCode) {
                delete T[this.hashCode]
            }
            for (var hT in this) {
                if (typeof this[hT] != "function") {
                    delete this[hT]
                }
            }
        };
        D.BaseClass.prototype.getHashCode = function() {
            if (!this.hashCode) {
                T[(this.hashCode = D.BaseClass.guid())] = this
            }
            return this.hashCode
        };
        D.BaseClass.prototype.decontrol = function() {
            delete T[this.hashCode]
        };
        D.BaseClass.prototype.toString = function() {
            return "[object " + (this._className || "Object") + "]"
        };
        D.BaseClass.prototype._wlog = function(hU, hV) {
            var hT = D._log;
            if (hT.length > 100) {
                hT.reverse().length = 50;
                hT.reverse()
            }
            hT[hT.length] = "[" + hU + "][" + (this._className || "Object") + " " + this.hashCode + "] " + hV
        }
    })();
    Function.prototype.inherits = function(hT, T) {
        var e, hU, hW = this.prototype,
        hV = function() {};
        hV.prototype = hT.prototype;
        hU = this.prototype = new hV();
        if (typeof(T) == "string") {
            hU._className = T
        }
        for (e in hW) {
            hU[e] = hW[e]
        }
        this.prototype.constructor = hW.constructor;
        hW = hV = null;
        return hU
    };
    D.BaseEvent = function(e, i) {
        this.type = e;
        this.returnValue = true;
        this.target = i || null;
        this.currentTarget = this.srcElement = null;
        this.cancelBubble = false;
        this.domEvent = null
    };
    D.BaseClass.prototype.on = D.BaseClass.prototype.addEventListener = function(T, i) {
        if (typeof i !== "function") {
            return this._wlog("error", "addEventListener:" + i + " is not a function")
        }
        if (!this._listeners) {
            this._listeners = {}
        }
        var e = this._listeners;
        if (T.indexOf("on") !== 0) {
            T = "on" + T
        }
        if (typeof e[T] !== "object") {
            e[T] = {}
        }
        var hT = i.hashCode || D.BaseClass.guid();
        i.hashCode = hT;
        if (e[T][hT]) {
            this._wlog("warning", "repeat key:" + hT)
        }
        e[T][hT] = i
    };
    D.BaseClass.prototype.off = D.BaseClass.prototype.removeEventListener = function(T, i) {
        if (typeof i == "function") {
            i = i.hashCode
        } else {
            if (typeof i !== "string" && typeof i !== "undefined") {
                return
            }
        }
        if (!this._listeners) {
            this._listeners = {}
        }
        if (T.indexOf("on") != 0) {
            T = "on" + T
        }
        var e = this._listeners;
        if (!e[T]) {
            return
        }
        if (i === undefined) {
            e[T] = {};
            return
        }
        if (e[T][i]) {
            delete e[T][i]
        }
    };
    D.BaseClass.prototype.fire = D.BaseClass.prototype.dispatchEvent = function(hT) {
        if (!this._listeners) {
            this._listeners = {}
        }
        var T, e = this._listeners,
        hU = hT.type;
        hT.target = hT.srcElement = hT.target || hT.srcElement || this;
        hT.currentTarget = this;
        if (typeof this[hU] == "function") {
            this[hU](hT)
        }
        if (typeof e[hU] == "object") {
            for (T in e[hU]) {
                if (typeof e[hU][T] == "function") {
                    e[hU][T].call(this, hT)
                }
            }
        }
        return hT.returnValue
    };
    D.BaseEvent.prototype.inherit = function(T) {
        var i = this;
        this.domEvent = T = window.event || T;
        i.clientX = T.clientX || T.pageX;
        i.clientY = T.clientY || T.pageY;
        i.offsetX = T.offsetX || T.layerX;
        i.offsetY = T.offsetY || T.layerY;
        i.screenX = T.screenX;
        i.screenY = T.screenY;
        i.ctrlKey = T.ctrlKey || T.metaKey;
        i.shiftKey = T.shiftKey;
        i.altKey = T.altKey;
        return i
    };
    D.Browser = (function() {
        var T = navigator.userAgent;
        var hU = 0;
        var e = 0;
        var hV = 0;
        var i = 0;
        var hZ = 0;
        var hX = 0;
        var hY = 0;
        var hW = 0;
        var hT = 0;
        var h0 = 0;
        if (typeof window.opera === "object" && /Opera(\s|\/)(\d+(\.\d+)?)/.test(T)) {
            hV = parseFloat(RegExp.$2)
        } else {
            if (/OPR(\/(\d+)(\..?)?)/.test(T)) {
                hV = parseInt(RegExp.$2, 10)
            } else {
                if (/Edge\/((\d+)\.\d+)/.test(T)) {
                    hU = parseInt(RegExp.$2, 10)
                } else {
                    if (/MSIE (\d+(\.\d+)?)/.test(T)) {
                        e = parseFloat(RegExp.$1)
                    } else {
                        if (T.indexOf("Trident") > -1 && /rv:(\d+(\.\d+)?)/.test(T)) {
                            e = parseInt(RegExp.$1, 10)
                        } else {
                            if (/Firefox(\s|\/)(\d+(\.\d+)?)/.test(T)) {
                                hZ = parseFloat(RegExp.$2)
                            } else {
                                if (navigator.vendor === "Netscape" && /Netscape(\s|\/)(\d+(\.\d+)?)/.test(T)) {
                                    hY = parseFloat(RegExp.$2)
                                } else {
                                    if (T.indexOf("Safari") > -1 && /Version\/(\d+(\.\d+)?)/.test(T)) {
                                        i = parseFloat(RegExp.$1)
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        if (T.indexOf("Trident") > -1 && /Trident\/(\d+(\.\d+)?)/.test(T)) {
            hW = parseInt(RegExp.$1, 10)
        } else {
            if (!e && !hU && T.indexOf("Gecko") > -1 && T.indexOf("KHTML") === -1 && /rv\:(\d+(\.\d+)?)/.test(T)) {
                hT = parseFloat(RegExp.$1)
            } else {
                if (!hU && /chrome\/(\d+(\.\d+)?)/i.test(T)) {
                    hX = parseFloat(RegExp.$1)
                } else {
                    if (!hU && /AppleWebKit\/(\d+(\.\d+)?)/.test(T)) {
                        h0 = parseInt(RegExp.$1, 10)
                    }
                }
            }
        }
        var h1 = {
            edge: hU,
            ie: e,
            firefox: hZ,
            netscape: hY,
            opera: hV,
            safari: i,
            chrome: hX,
            gecko: hT,
            trident: hW,
            webkit: h0
        };
        return h1
    })();
    window.FeBrowser = D.Browser;
    D.Dom = {};
    D.Dom.createDom = function(i, e) {
        if (D.isIE && e && e.name) {
            i = "<" + i + ' name="' + D.String.escapeHTML(e.name) + '">'
        }
        var T = document.createElement(i);
        if (e) {
            D.Dom.setProperties(T, e)
        }
        return T
    };
    D.Dom.getOffset = function(hT) {
        var hW = D.Dom.getOwnerDocument(hT);
        var hV = D.isGecko > 0 && hW.getBoxObjectFor && D.Dom.getStyle(hT, "position") == "absolute" && (hT.style.top === "" || hT.style.left === "");
        var hX = {
            left: 0,
            top: 0
        };
        var i = (D.isIE && !D.isStrict) ? hW.body: hW.documentElement;
        if (hT == i) {
            return hX
        }
        var T = null;
        var hU;
        if (hT.getBoundingClientRect) {
            hU = hT.getBoundingClientRect();
            hX.left = hU.left + Math.max(hW.documentElement.scrollLeft, hW.body.scrollLeft);
            hX.top = hU.top + Math.max(hW.documentElement.scrollTop, hW.body.scrollTop);
            hX.left -= hW.documentElement.clientLeft;
            hX.top -= hW.documentElement.clientTop;
            if (D.isIE && !D.isStrict) {
                hX.left -= 2;
                hX.top -= 2
            }
        } else {
            if (hW.getBoxObjectFor && !hV) {
                hU = hW.getBoxObjectFor(hT);
                var e = hW.getBoxObjectFor(i);
                hX.left = hU.screenX - e.screenX;
                hX.top = hU.screenY - e.screenY
            } else {
                T = hT;
                do {
                    hX.left += T.offsetLeft;
                    hX.top += T.offsetTop;
                    if (D.isWebkit > 0 && D.Dom.getStyle(T, "position") == "fixed") {
                        hX.left += hW.body.scrollLeft;
                        hX.top += hW.body.scrollTop;
                        break
                    }
                    T = T.offsetParent
                } while ( T && T != hT );
                if (D.isOpera > 0 || (D.isWebkit > 0 && D.Dom.getStyle(hT, "position") == "absolute")) {
                    hX.top -= hW.body.offsetTop
                }
                T = hT.offsetParent;
                while (T && T != hW.body) {
                    hX.left -= T.scrollLeft;
                    if (!D.isOpera || T.tagName != "TR") {
                        hX.top -= T.scrollTop
                    }
                    T = T.offsetParent
                }
            }
        }
        return hX
    };
    D.Dom.getOwnerDocument = function(e) {
        return e.nodeType == 9 ? e: e.ownerDocument || e.document
    };
    D.Dom.setProperties = function(i, e) {
        D.each(e,
        function(hT, T) {
            D.Dom._setProperty(i, T, hT)
        })
    };
    D.Dom._setProperty = function(i, e, T) {
        if (e == "style") {
            i.style.cssText = T
        } else {
            if (e == "class") {
                i.className = T
            } else {
                if (e == "for") {
                    i.htmlFor = T
                } else {
                    if (e in D.Dom._DIRECT_ATTRIBUTE_MAP) {
                        i.setAttribute(D.Dom._DIRECT_ATTRIBUTE_MAP[e], T)
                    } else {
                        i[e] = T
                    }
                }
            }
        }
    };
    D.Dom._DIRECT_ATTRIBUTE_MAP = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        rowspan: "rowSpan",
        valign: "vAlign",
        height: "height",
        width: "width",
        usemap: "useMap",
        frameborder: "frameBorder"
    };
    D.G = function() {
        for (var T = [], hT = arguments.length - 1; hT > -1; hT--) {
            var hU = arguments[hT];
            T[hT] = null;
            if (typeof hU == "object" && hU && hU.dom) {
                T[hT] = hU.dom
            } else {
                if ((typeof hU == "object" && hU && hU.tagName) || hU == window || hU == document) {
                    T[hT] = hU
                } else {
                    if (typeof hU == "string" && (hU = document.getElementById(hU))) {
                        T[hT] = hU
                    }
                }
            }
        }
        return T.length < 2 ? T[0] : T
    };
    D.ac = function(e, i) {
        if (! (e = this.G(e))) {
            return
        }
        i = this.trim(i);
        if (!new RegExp("(^| )" + i.replace(/(\W)/g, "\\$1") + "( |$)").test(e.className)) {
            e.className = e.className.split(/\s+/).concat(i).join(" ")
        }
    };
    D.addClassName = D.ac;
    D.each = function(hV, e) {
        if (typeof e != "function") {
            return hV
        }
        if (hV) {
            if (hV.length === undefined) {
                for (var T in hV) {
                    e.call(hV[T], hV[T], T)
                }
            } else {
                for (var hT = 0,
                hU = hV.length; hT < hU; hT++) {
                    e.call(hV[hT], hV[hT], hT)
                }
            }
        }
        return hV
    };
    D.extend = function(hV, hT) {
        if (hV && hT && typeof(hT) == "object") {
            for (var hU in hT) {
                hV[hU] = hT[hU]
            }
            var T = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
            for (var e = 0,
            i; e < T.length; e++) {
                i = T[e];
                if (Object.prototype.hasOwnProperty.call(hT, i)) {
                    hV[i] = hT[i]
                }
            }
        }
        return hV
    };
    D.hide = function() {
        D.each(arguments,
        function(e) {
            if (e = D.G(e)) {
                e.style.display = "none"
            }
        })
    };
    D.inherit = function(hX, hT, T) {
        var hW = hX.prototype;
        var hV = function() {};
        hV.prototype = hT.prototype;
        var hU = hX.prototype = new hV();
        if (typeof T == "string") {
            hU._className = T
        }
        for (var e in hW) {
            hU[e] = hW[e]
        }
        hX.prototype.constructor = hW.constructor;
        hW = null;
        return hU
    };
    D.isIE = 0; (function() {
        if (navigator.userAgent.indexOf("MSIE") > 0 && !window.opera) { / MSIE(\d + (\.\d + ) ? ) / .test(navigator.userAgent);
            D.isIE = parseFloat(RegExp.$1)
        }
    })();
    D.rc = function(e, i) {
        if (! (e = this.G(e))) {
            return
        }
        i = this.trim(i);
        var T = e.className.replace(new RegExp("(^| +)" + i.replace(/(\W)/g, "\\$1") + "( +|$)", "g"), "$2");
        if (e.className != T) {
            e.className = T
        }
    };
    D.removeClassName = D.rc;
    D.show = function() {
        this.each(arguments,
        function(e) {
            if (e = D.G(e)) {
                e.style.display = ""
            }
        })
    };
    D.trim = function(e) {
        return e.replace(/(^[\s\t\xa0\u3000]+)|([\u3000\xa0\s\t]+$)/g, "")
    };
    D.getElementsByClassName = function(e, i) {
        if (e.getElementsByClassName) {
            return e.getElementsByClassName(i)
        } else {
            return (function T(h0, hY) {
                if (hY == null) {
                    hY = document
                }
                var hX = [],
                hW = hY.getElementsByTagName("*"),
                hT = hW.length,
                hZ = new RegExp("(^|\\s)" + h0 + "(\\s|$)"),
                hV,
                hU;
                for (hV = 0, hU = 0; hV < hT; hV++) {
                    if (hZ.test(hW[hV].className)) {
                        hX[hU] = hW[hV];
                        hU++
                    }
                }
                return hX
            })(i, e)
        }
    };
    D.toggleClass = function(e, i) {
        if (D.hasClass(e, i)) {
            D.removeClassName(e, i)
        } else {
            D.addClassName(e, i)
        }
    };
    D.hasClass = function(hT, T) {
        if (!hT || !hT.className || typeof hT.className != "string") {
            return false
        }
        var i = -1;
        try {
            i = hT.className == T || hT.className.search(new RegExp("(\\s|^)" + T + "(\\s|$)"))
        } catch(hU) {
            return false
        }
        return i > -1
    };
    D.insertHTML = function(hT, e, T) {
        hT = D.G(hT);
        if (hT === null) {
            return hT
        }
        var i, hU;
        if (hT.insertAdjacentHTML) {
            hT.insertAdjacentHTML(e, T)
        } else {
            i = hT.ownerDocument.createRange();
            e = e.toUpperCase();
            if (e == "AFTERBEGIN" || e == "BEFOREEND") {
                i.selectNodeContents(hT);
                i.collapse(e == "AFTERBEGIN")
            } else {
                hU = e == "BEFOREBEGIN";
                i[hU ? "setStartBefore": "setEndAfter"](hT);
                i.collapse(hU)
            }
            i.insertNode(i.createContextualFragment(T))
        }
        return hT
    };
    if (typeof HTMLElement != "undefined" && HTMLElement.prototype.__lookupGetter__ && !HTMLElement.prototype.__lookupGetter__("children") && !window.opera) {
        try {
            HTMLElement.prototype.__defineGetter__("children",
            function() {
                for (var T = [], hT = 0, hV, hU = 0, e = this.childNodes.length; hU < e; hU++) {
                    hV = this.childNodes[hU];
                    if (hV.nodeType == 1) {
                        T[hT++] = hV;
                        if (hV.name) {
                            if (!T[hV.name]) {
                                T[hV.name] = []
                            }
                            T[hV.name][T[hV.name].length] = hV
                        }
                        if (hV.id) {
                            T[hV.id] = hV
                        }
                    }
                }
                return T
            })
        } catch(gx) {}
    }
    if (typeof(HTMLElement) != "undefined" && !window.opera && HTMLElement.prototype && !HTMLElement.prototype.insertAdjacentHTML) {
        HTMLElement.prototype.insertAdjacentHTML = function(i, T) {
            var hT = this.ownerDocument.createRange();
            hT.setStartBefore(this);
            hT = hT.createContextualFragment(T);
            switch (i) {
            case "beforeBegin":
                this.parentNode.insertBefore(hT, this);
                break;
            case "afterBegin":
                this.insertBefore(hT, this.firstChild);
                break;
            case "beforeEnd":
                this.appendChild(hT);
                break;
            case "afterEnd":
                if (!this.nextSibling) {
                    this.parentNode.appendChild(hT)
                } else {
                    this.parentNode.insertBefore(hT, this.nextSibling)
                }
                break
            }
        }
    }
    if (typeof HTMLElement != "undefined" && !window.opera) {
        HTMLElement.prototype.contains = function(e) {
            if (e == this) {
                return true
            }
            while (e = e.parentNode) {
                if (e == this) {
                    return true
                }
            }
            return false
        }
    }
    if (!D.Browser.ie && typeof Event != "undefined" && !window.opera) {
        Event.prototype.__defineSetter__("returnValue",
        function(e) {
            if (!e) {
                this.preventDefault()
            }
            return e
        });
        Event.prototype.__defineSetter__("cancelBubble",
        function(e) {
            if (e) {
                this.stopPropagation()
            }
            return e
        })
    }
    D.each = function(hU, hT) {
        if (bW(hT)) {
            for (var T = 0,
            e = hU.length; T < e; T++) {
                if (hT.call(hU, hU[T], T) === false) {
                    break
                }
            }
        }
        return hU
    };
    D.Platform = {
        x11: 0,
        macintosh: 0,
        windows: 0,
        android: 0,
        iphone: 0,
        ipad: 0
    };
    for (var gt in D.Platform) {
        if (D.Platform.hasOwnProperty(gt)) {
            D.Platform[gt] = new RegExp(gt, "i").test(window.navigator.userAgent) ? 1 : 0
        }
    }
    if (typeof(D.Dom) === "undefined") {
        D.Dom = {}
    }
    D.Dom.getComputedStyle = function(i, e) {
        var hT = i.nodeType == 9 ? i: i.ownerDocument || i.document,
        T;
        if (hT.defaultView && hT.defaultView.getComputedStyle) {
            T = hT.defaultView.getComputedStyle(i, null);
            if (T) {
                return T[e] || T.getPropertyValue(e)
            }
        } else {
            if (i.currentStyle) {
                return i.currentStyle[e] || ""
            }
        }
        return ""
    };
    var bc = D.BaseEvent;
    var ee = D.BaseClass;
    ee.prototype.toString = function() {
        return this._className || ""
    };
    D.on = function(T, i, e) {
        if (! (T = D.G(T))) {
            return T
        }
        i = i.replace(/^on/, "");
        if (T.addEventListener) {
            T.addEventListener(i, e, false)
        } else {
            if (T.attachEvent) {
                T.attachEvent("on" + i, e)
            }
        }
        return T
    };
    D.un = function(T, i, e) {
        if (! (T = D.G(T))) {
            return T
        }
        i = i.replace(/^on/, "");
        if (T.removeEventListener) {
            T.removeEventListener(i, e, false)
        } else {
            if (T.detachEvent) {
                T.detachEvent("on" + i, e)
            }
        }
        return T
    };
    D.hc = function(hT, T) {
        if (!hT || !hT.className || typeof hT.className != "string") {
            return false
        }
        var i = -1;
        try {
            i = hT.className == T || hT.className.search(new RegExp("(\\s|^)" + T + "(\\s|$)"))
        } catch(hU) {
            return false
        }
        return i > -1
    };
    D.isEmptyObject = function(T) {
        if (Object.prototype.toString.call(T) === "[object Object]") {
            for (var e in T) {
                return false
            }
            return true
        } else {
            return false
        }
    };
    var f4 = window.location.protocol === "http:" ? "http:": "https:";
    var eW = {
        fontFamily: 'Arial,Helvetica,"PingFang SC","Hiragino Sans GB",STHeiti,sans-serif',
        mapStyleNameIdPair: {
            "default": 0,
            "grayed-out": 1
        },
        mapHost: f4 + "//map.baidu.com",
        apiHost: f4 + "//api.map.baidu.com",
        apiIMG: f4 + "//api.map.baidu.com/images",
        staticHost: f4 + "//webmap0.bdimg.com",
        imgPath: f4 + "//webmap0.bdimg.com/image/api/",
        tileDomain: [f4 + "//maponline0.bdimg.com", f4 + "//maponline1.bdimg.com", f4 + "//maponline2.bdimg.com", f4 + "//maponline3.bdimg.com"],
        optDomain: "http://10.120.25.45:8017",
        rasterTilePath: "/tile/",
        vectorTilePath: "/pvd/",
        originTilePath: [f4 + "//pcor.baidu.com"],
        getIconSetPath: function(e) {
            var i = "map_icons2x/";
            if (typeof e === "string" && this.mapStyleNameIdPair[e] > 0) {
                i = "map_icons2x_" + (this.mapStyleNameIdPair[e] - 1) + "/"
            }
            return f4 + "//maponline0.bdimg.com/sty/" + i
        },
        getMapStyleFiles: function(T) {
            var hU = true;
            if (typeof T === "string" && T !== "default") {
                hU = false
            }
            var hV = hU ? "": "_" + (this.mapStyleNameIdPair[T] - 1);
            var i = fA();
            var hT = "udt=" + i.udt + "&v=" + i.ver;
            var e = f4 + "//maponline0.bdimg.com/sty/";
            return [e + "icons_2x" + hV + ".js?" + hT, e + "fs" + hV + ".js?" + hT, e + "indoor_fs.js?" + hT]
        },
        tvc: {
            ditu: {
                normal: {
                    version: "088",
                    updateDate: "20210303"
                },
                satellite: {
                    version: "009",
                    updateDate: "20210303"
                },
                normalTraffic: {
                    version: "081",
                    updateDate: "20210303"
                },
                satelliteTraffic: {
                    version: "083",
                    updateDate: "20210303"
                },
                mapJS: {
                    version: "104",
                    updateDate: "20210303"
                },
                satelliteStreet: {
                    version: "083",
                    updateDate: "20210303"
                },
                panoClick: {
                    version: "1033",
                    updateDate: "20180108"
                },
                panoUdt: {
                    version: "20180108",
                    updateDate: "20180108"
                },
                panoSwfAPI: {
                    version: "20150123",
                    updateDate: "20150123"
                },
                panoSwfPlace: {
                    version: "20141112",
                    updateDate: "20141112"
                },
                earthVector: {
                    version: "001",
                    updateDate: "20210303"
                }
            }
        },
        msv: {
            mapstyle: {
                updateDate: "20210303",
                version: "001"
            }
        }
    };
    eW.imgResources = {
        blankGIF: eW.staticHost + "/res/litemapapi/v1d1/images/blank.gif?20170501",
        markerPng: eW.staticHost + "/res/litemapapi/v1d1/images/marker.png?20170501",
        locPng: eW.staticHost + "/res/litemapapi/v1d1/images/loc.png?20180918",
        locNewPng: eW.staticHost + "/res/litemapapi/v1d1/images/loc_new.png?20190314",
        zoomPng: eW.staticHost + "/res/litemapapi/v1d1/images/zoombtn.png?20180918",
        mapLogoPng: eW.staticHost + "/res/litemapapi/v1d1/images/logo-2x.png?20190226"
    };
    var e4 = eW;
    var a4 = "ruler.cur";
    if (D.Browser.ie || D.Browser.edge) {
        D.extend(e4, {
            distCursor: "url(" + e4.imgPath + a4 + "),crosshair",
            defaultCursor: "url(" + e4.imgPath + "openhand.cur),default",
            draggingCursor: "url(" + e4.imgPath + "closedhand.cur),move"
        })
    } else {
        if (D.Browser.firefox) {
            D.extend(e4, {
                distCursor: "url(" + e4.imgPath + a4 + "),crosshair",
                defaultCursor: "-moz-grab",
                draggingCursor: "-moz-grabbing"
            })
        } else {
            if (D.Browser.chrome || D.Browser.safari) {
                D.extend(e4, {
                    distCursor: "url(" + e4.imgPath + a4 + ") 2 6,crosshair",
                    defaultCursor: "url(" + e4.imgPath + "openhand.cur) 8 8,default",
                    draggingCursor: "url(" + e4.imgPath + "closedhand.cur) 8 8,move"
                });
                if (D.Platform.macintosh) {
                    e4.defaultCursor = "-webkit-grab";
                    e4.draggingCursor = "-webkit-grabbing"
                }
            } else {
                D.extend(e4, {
                    distCursor: "url(" + e4.imgPath + a4 + "),crosshair",
                    defaultCursor: "url(" + e4.imgPath + "openhand.cur),default",
                    draggingCursor: "url(" + e4.imgPath + "closedhand.cur),move"
                })
            }
        }
    }
    bp = bp || {};
    bp.version = "3.0";
    bp._register = [];
    bp.register = function(e) {
        this._register[this._register.length] = e
    };
    bp.guid = 1;
    bp.getGUID = function(e) {
        return (e || "") + bp.guid++
    };
    var gf = window.BMAP_AUTHENTIC_KEY || "";
    var o = window.BMAP_SECKEY || "";
    bp.bmapVerifyCbk = function(e) {
        if (e && e.error !== 0) {
            if (typeof map !== "undefined") {
                map.getContainer().innerHTML = "";
                map.__listeners = {}
            }
            bp = null;
            var i = "百度未授权使用地图API，可能是因为您提供的密钥不是有效的百度地图开放平台密钥，或此密钥未对本应用的百度地图JavaScriptAPI授权。您可以访问如下网址了解如何获取有效的密钥：https://lbs.baidu.com/apiconsole/key#。";
            console.log(e.error, i);
            switch (e.error) {
            case 101:
                i = "您所使用的密钥ak有问题，不支持jsapi服务，可以访问该网址了解如何获取有效密钥：http://lbsyun.baidu.com/apiconsole/key#。";
                break;
            case 102:
                i = "MCODE参数不存在，mobile类型MCODE参数必需，详情查看：http://lbsyun.baidu.com/apiconsole/key#。";
                break;
            case 200:
                i = "APP不存在，AK有误请检查再重试，详情查看：http://lbsyun.baidu.com/apiconsole/key#。";
                break;
            case 201:
                i = "APP被您禁用啦，可以访问 http://lbsyun.baidu.com/apiconsole/key# 查看自己的应用具体详情，或联系我们了解详情。";
                break;
            case 202:
                i = "APP被管理员删除啦，可以访问 http://lbsyun.baidu.com/apiconsole/key# 查看自己的应用具体详情，或联系我们了解详情。";
                break;
            case 203:
                i = "APP类型错误，可以访问 http://lbsyun.baidu.com/apiconsole/key# 查看自己的应用具体详情，或联系我们了解详情。";
                break;
            case 210:
                i = "APP IP校验失败，可以访问 http://lbsyun.baidu.com/apiconsole/key# 查看自己的应用具体详情，或联系我们了解详情。";
                break;
            case 220:
                i = "APP Referer校验失败。请检查该ak设置的白名单与访问所有的域名是否一致。详情查看：http://lbsyun.baidu.com/apiconsole/key#";
                break;
            case 230:
                i = "APP Mcode码校验失败，可以访问 http://lbsyun.baidu.com/apiconsole/key# 查看自己的应用具体详情，或联系我们了解详情。";
                break;
            case 240:
                i = "APP服务被禁用了，可以访问 http://lbsyun.baidu.com/apiconsole/key# 查看自己的应用具体详情，或联系我们了解详情。";
                break;
            case 250:
                i = "该用户不存在... 请登录 https://lbs.baidu.com 的控制台，注册成为开发者申请ak吧。";
                break;
            case 251:
                i = "该用户被自己删除啦，可以访问 http://lbsyun.baidu.com/apiconsole/key# 查看自己的应用具体详情。";
                break;
            case 252:
                i = "该用户被管理员删除啦，可以访问 http://lbsyun.baidu.com/apiconsole/key# 了解如何获取有效密钥，或请联系我们了解详情。";
                break;
            case 260:
                i = "您所使用的密钥AK不包含该服务呢，可以访问 http://lbsyun.baidu.com/apiconsole/key# 查看服务选择情况，或请联系我们了解详情。";
                break;
            case 261:
                i = "您所使用的密钥AK的该服务被禁用啦，可以访问 http://lbsyun.baidu.com/apiconsole/key# 查看服务选择情况，或请联系我们了解详情。";
                break;
            case 401:
                i = "您所使用的AK并发超限了，请登录 http://lbsyun.baidu.com/cashier/quota#/home 了解详情。";
                break;
            case 302:
                i = "您所使用的AK天配额超限了，请登录 http://lbsyun.baidu.com/cashier/quota#/home 了解详情。";
                break
            }
            alert(i)
        }
    };
    window.__abbaidu_2063_cb = function(i) {
        var e = JSON.parse(i);
        o = e.data || null
    };
    bp.frequencyCbk = function(e) {
        if (e) {
            window.QTFrequency = e
        }
    };
    bp.verify = function() {
        var e = e4.apiHost + "/?qt=verify&v=3.0&type=webgl&ak=" + gf + "&callback=" + eB + ".bmapVerifyCbk";
        ho.load(e)
    };
    bp.frequency = function() {};
    bp.getSeckey = function() {
        var e = f4 + "//dlswbr.baidu.com/heicha/mw/abclite-2063-s.js";
        ho.load(e)
    };
    bp.apiLoad = bp.apiLoad ||
    function() {};
    function fL(i, e) {
        this._size = i;
        this._cache = [];
        this._totalGetTimes = 0;
        this._totalHitTimes = 0;
        this._options = {
            clearCallback: null,
            removeOldCallback: null
        };
        e = e || {};
        for (var T in e) {
            if (e.hasOwnProperty(T)) {
                this._options[T] = e[T]
            }
        }
    }
    fL.prototype.setData = function(T, hT) {
        var e = this._cache;
        var i = this._size;
        if (i === 0) {
            return
        }
        if (e.length > i) {
            this._removeOld()
        }
        if (!e[T]) {
            e.push(hT)
        }
        e[T] = hT;
        hT._key_ = T
    };
    fL.prototype.getHitRate = function() {
        return Math.round(this._totalHitTimes / this._totalGetTimes * 1000) / 1000
    };
    fL.prototype.getData = function(i) {
        var e = this._cache[i];
        if (e) {
            this._totalHitTimes++
        }
        this._totalGetTimes++;
        return e
    };
    fL.prototype.removeData = function(hU) {
        if (this._options.clearCallback) {
            this._options.clearCallback(this._cache[hU])
        }
        var T = this._cache;
        var hV = T[hU];
        for (var hT = 0,
        e = T.length; hT < e; hT++) {
            if (T[hT] === hV) {
                T.splice(hT, 1);
                break
            }
        }
        delete T[hU]
    };
    fL.prototype._removeOld = function() {
        var e = this._cache;
        var hU = Math.round(this._size * 0.6);
        for (var hT = 0; hT < hU; hT++) {
            var T = e[hT]._key_;
            if (this._options.clearCallback) {
                this._options.clearCallback(e[T])
            }
            delete e[T]
        }
        e.splice(0, hU);
        if (this._options.removeOldCallback) {
            this._options.removeOldCallback()
        }
    };
    fL.prototype.clear = function() {
        var T = this._cache;
        for (var hU = 0,
        e = T.length; hU < e; hU++) {
            var hT = T[hU]._key_;
            if (this._options.clearCallback) {
                this._options.clearCallback(T[hT])
            }
            delete T[hT]
        }
        this._cache = T = []
    };
    fL.prototype.forEach = function(hT) {
        var T = this._cache;
        for (var hV = 0,
        e = T.length; hV < e; hV++) {
            var hU = T[hV]._key_;
            hT(T[hU])
        }
    };
    fL.prototype.getBatch = function(hU) {
        var e = [];
        for (var hT = 0,
        T = hU.length; hT < T; hT++) {
            if (this.getData(hU[hT])) {
                e[e.length] = this.getData(hU[hT])
            }
        }
        return e
    };
    fL.prototype.clearExcept = function(hV) {
        var T = this._cache;
        for (var e = T.length,
        hU = e - 1; hU >= 0; hU--) {
            var hT = this._cache[hU]._key_;
            if (!hV[hT]) {
                T.splice(hU, 1);
                if (this._options.clearCallback) {
                    this._options.clearCallback(T[hT])
                }
                delete T[hT]
            }
        }
    };
    fL.prototype.getDataCount = function() {
        return this._cache.length
    };
    function an() {}
    D.extend(an.prototype, {
        centerAndZoomIn: function(hY, T, hZ) {
            var hW = this;
            if (!hY && !T) {
                return
            }
            hY = hY || this.centerPoint;
            T = T || this.zoomLevel;
            T = this._getProperZoom(T).zoom;
            if (this.mapType === BMAP_EARTH_MAP) {
                if (!this._earth) {
                    this.mapType = BMAPGL_NORMAL_MAP;
                    this.temp.originMapType = BMAP_EARTH_MAP;
                    function hX() {
                        hW._earth = new bp.Earth(hW, {
                            showRealSunlight: hW.config.showRealSunlight,
                            showMilkyway: hW.config.showMilkyway,
                            earthBackground: hW.config.earthBackground
                        });
                        hW._proxyEarthEvents();
                        hW._changeEarthMapType(BMAP_EARTH_MAP);
                        D.extend(hW, bp.EarthView.prototype);
                        if (!hW._navigationCtrl && hW.config.showControls) {
                            hW._navigationCtrl = new bp.NavigationControl3D(hW)
                        }
                        delete hW.temp.originMapType
                    }
                    eb.load("earth",
                    function() {
                        if (bp["FeatureStyle" + hW.config.style]) {
                            hX()
                        } else {
                            hW.loadMapStyleFiles(function() {
                                hX()
                            })
                        }
                    })
                }
            }
            this.lastLevel = this.zoomLevel || T;
            this.zoomLevel = T;
            var hU = new bc("onload");
            hU.point = hY;
            hU.zoom = T;
            this.centerPoint = this.restrictCenter(new hu(hY.lng, hY.lat));
            if (this.centerPoint.zoom) {
                this.zoomLevel = this.centerPoint.zoom
            }
            this.defaultZoomLevel = this.defaultZoomLevel || this.zoomLevel;
            this.defaultCenter = this.defaultCenter || this.centerPoint;
            if (!this.loaded && !(this.temp.originMapType === BMAP_EARTH_MAP)) {
                var i = this.config.defaultMaxBounds;
                var hV = new c6(i, "baidu", this.mapType);
                var hT = new cS({
                    mapType: this.mapType,
                    copyright: hV,
                    customLayer: false,
                    baseLayer: true,
                    tileTypeName: "web"
                });
                hT._isInnerLayer = true;
                this.addTileLayer(hT);
                if (this.mapType === BMAP_SATELLITE_MAP && this._isHybridShow === true) {
                    this._addHybirdMap()
                }
            }
            this.dispatchEvent(hU);
            this.loaded = true;
            hZ = hZ || {};
            hZ.callback && hZ.callback()
        },
        _setPlatformPosition: function(hZ, hY, h2) {
            h2 = h2 || {};
            if (hZ === 0 && hY === 0 && !h2.point) {
                return
            }
            if (isNaN(h2.initMapOffsetX)) {
                h2.initMapOffsetX = this.offsetX
            }
            if (isNaN(h2.initMapOffsetY)) {
                h2.initMapOffsetY = this.offsetY
            }
            var h0 = hZ + h2.initMapOffsetX;
            var hX = hY + h2.initMapOffsetY;
            if (h2.point) {
                var i = this.restrictCenter(h2.point);
                if (!i.equals(this.centerPoint)) {
                    this.centerPoint = i.clone();
                    this.fire(new bc("oncenter_changed"))
                }
            } else {
                var hT = this.offsetX - h0;
                var e = this.offsetY - hX;
                var T = this.getZoomUnits();
                var hW = this.centerPoint.lng;
                var hV = this.centerPoint.lat;
                var hU = new hu(hW, hV);
                this.centerPoint = this.restrictCenter(new hu(hU.lng + hT * T, hU.lat - e * T), T);
                this.fire(new bc("oncenter_changed"));
                if (this.zoomLevel < 10) {
                    h0 = this.offsetX - (this.centerPoint.lng - hU.lng) / T;
                    hX = this.offsetY + (this.centerPoint.lat - hU.lat) / T
                }
            }
            this.offsetX = h0;
            this.offsetY = hX;
            var h1 = this.platform.style;
            h1.left = h0 + "px";
            h1.top = hX + "px";
            this.maskLayer.style.left = -h0 + "px";
            this.maskLayer.style.top = -hX + "px";
            if (h2.dispatchEvent !== false) {
                this.dispatchEvent(new bc("onmoving"))
            }
        },
        zoomTo: function(e, hW, h0) {
            h0 = h0 || {};
            h0.zoomCenter = hW;
            if (h0.noAnimation !== true) {
                this.deepZoomTo(e, h0);
                return
            }
            if (typeof e !== "number") {
                return
            }
            var hU = b7[this.mapType];
            if (!hU) {
                return
            }
            var T = e;
            e = this._getProperZoom(e).zoom;
            if (e === this.zoomLevel) {
                var hX = new bc("onzoomexceeded");
                hX.targetZoom = T;
                this.dispatchEvent(hX);
                h0.callback && h0.callback();
                return
            }
            this.lastLevel = this.zoomLevel;
            if (hW) {
                this.temp._cPoint = hW;
                this.temp._cPixel = this.pointToPixelIn(hW)
            } else {
                if (this.getInfoWindow()) {
                    var hZ = this.getInfoWindow().getPoint();
                    this.temp._cPixel = this.pointToPixelIn(hZ);
                    this.temp._cPoint = hZ
                }
            }
            if (this.config.zoomCenter) {
                hW = this.config.zoomCenter;
                this.temp._cPoint = hW;
                this.temp._cPixel = this.pointToPixelIn(hW)
            }
            if (hW || this.temp.infoWin && this.temp.infoWin.isOpen()) {
                var i = this.temp._cPoint;
                var hY = this.temp._cPixel;
                var hT = this.getZoomUnits(e);
                var hV = new hu(i.lng + hT * (this.width / 2 - hY.x), i.lat - hT * (this.height / 2 - hY.y));
                this.centerPoint = this.restrictCenter(hV, hT, e);
                if (this.centerPoint.zoom) {
                    e = this.centerPoint.zoom
                }
            }
            if (h0.fireEvent !== false) {
                this.dispatchEvent(new bc("onzoomstart"))
            }
            if (e !== this.zoomLevel) {
                this.zoomLevel = e;
                this.dispatchEvent(new bc("onzooming"));
                this.dispatchEvent(new bc("onzoomstartcode"))
            }
            if (h0.fireEvent !== false) {
                this.dispatchEvent(new bc("onzoomend"))
            }
            if (h0.callback) {
                h0.callback()
            }
        },
        deepZoomMedia: function(e) {
            var i = this;
            if (!i.temp.isStdCtrlBusy) {
                i.temp.isStdCtrlBusy = true;
                i.deepZoomTo(i.zoomLevel + e);
                setTimeout(function() {
                    i.temp.isStdCtrlBusy = false
                },
                400)
            }
        },
        deepZoomTo: function(hX, hT) {
            hT = hT || {};
            var hV = hX - this.zoomLevel;
            var hU = this._getProperZoom(hX);
            if (hU.exceeded) {
                var e = new bc("onzoomexceeded");
                e.targetZoom = hX;
                this.dispatchEvent(e);
                return
            }
            var i;
            if (hT.zoomCenter) {
                i = this.pointToPixelIn(hT.zoomCenter)
            } else {
                if (this.getInfoWindow()) {
                    i = this.pointToPixelIn(this.getInfoWindow().getPoint(), {
                        zoom: this.lastLevel
                    })
                } else {
                    var i = new ek(this.width / 2, this.height / 2)
                }
            }
            this.lastLevel = this.zoomLevel;
            var hW = this.deepZoom || new bF(this);
            var T = hV > 0 ? 1 : -1;
            hW.zoomMap(i, hV, T, null, hT)
        },
        flyToIn: function(hY, e) {
            if (e === this.zoomLevel) {
                this.panToIn(hY);
                return
            }
            var hV = this._getProperZoom(e);
            if (hV.exceeded) {
                var hZ = new bc("onzoomexceeded");
                hZ.targetZoom = e;
                this.dispatchEvent(hZ);
                return
            }
            var hX = e - this.zoomLevel;
            var T = new ek(this.width / 2, this.height / 2);
            var i = this.pointToPixelIn(hY);
            var hW = new ea(i.x - T.x, i.y - T.y);
            this.lastLevel = this.zoomLevel;
            if (Math.abs(hX) >= 4 || Math.abs(hW.width) > this.width || Math.abs(hW.height) > this.height) {
                this.centerAndZoomIn(hY, e);
                return
            }
            var hU = this.deepZoom || new bF(this);
            var hT = hX > 0 ? 1 : -1;
            hU.zoomMap(i, hX, hT, hW)
        },
        panToIn: function(i, T) {
            T = T || {};
            if (!i || i.equals(this.centerPoint)) {
                T.callback && T.callback();
                return
            }
            var hT = this.pointToPixelIn(i);
            var e = Math.round(this.width / 2);
            var hU = Math.round(this.height / 2);
            if (Math.abs(e - hT.x) > this.width || Math.abs(hU - hT.y) > this.height || T.noAnimation === true) {
                this._panToIn(e - hT.x, hU - hT.y, i);
                T.callback && T.callback()
            } else {
                this._panBy(e - hT.x, hU - hT.y, T)
            }
        },
        _panToIn: function(i, e, hT) {
            var T = this.temp;
            if (T.operating === true) {
                return
            }
            if (T.dragAni) {
                T.dragAni.stop();
                T.dragAni = null;
                this.dispatchEvent(new bc("onmoveend"))
            }
            this.dispatchEvent(new bc("onmovestart"));
            this._setPlatformPosition(i, e, {
                point: hT
            });
            this.dispatchEvent(new bc("onmoveend"))
        },
        panBy: function(i, e, T) {
            T = T || {};
            i = Math.round(i) || 0;
            e = Math.round(e) || 0;
            if (Math.abs(i) <= this.width && Math.abs(e) <= this.height && T.noAnimation !== true) {
                this._panBy(i, e, T)
            } else {
                this._panToIn(i, e);
                T.callback && T.callback()
            }
        },
        _panBy: function(i, e, hU) {
            if (this.temp.operating === true) {
                return
            }
            hU = hU || {};
            this.dispatchEvent(new bc("onmovestart"));
            var hT = this;
            var T = hT.temp;
            T.pl = hT.offsetX;
            T.pt = hT.offsetY;
            if (T.tlPan) {
                T.tlPan.cancel()
            }
            if (T.dragAni) {
                T.dragAni.stop();
                T.dragAni = null;
                this.dispatchEvent(new bc("onmoveend"))
            }
            T.tlPan = new p({
                fps: hU.fps || hT.config.fps,
                duration: hU.duration || hT.config.actionDuration,
                transition: hU.transition || co.easeInOutQuad,
                render: function(hV) {
                    this.terminative = hT.temp.operating;
                    if (hT.temp.operating) {
                        return
                    }
                    hT._setPlatformPosition(Math.ceil(i * hV), Math.ceil(e * hV), {
                        initMapOffsetX: T.pl,
                        initMapOffsetY: T.pt
                    })
                },
                finish: function(hV) {
                    hT.dispatchEvent(new bc("onmoveend"));
                    hT.temp.tlPan = false;
                    if (hT.temp.stopArrow === true) {
                        hT.temp.stopArrow = false;
                        if (hT.temp.arrow !== 0) {
                            hT._arrow()
                        }
                    }
                    hU.callback && hU.callback()
                }
            })
        },
        getCenterIn: function() {
            return this.centerPoint
        },
        getZoom: function() {
            return this.zoomLevel
        },
        setTilt: function() {},
        getTilt: function() {
            return this._tilt
        },
        setHeading: function() {},
        getHeading: function() {
            return this._heading
        },
        restrictCenter: function(hX, hU, hY) {
            this.isRestrict = false;
            hU = hU || this.getZoomUnits();
            hY = hY || this.zoomLevel;
            var T = this.pixelToPointIn(new ek(0, 0), {
                center: hX,
                zoom: hY
            });
            var hV = this.pixelToPointIn(new ek(0, this.height), {
                center: hX,
                zoom: hY
            });
            if (this.zoomLevel < 5) {
                if (T.lat > c9.MAX_LAT && hV.lat < c9.MIN_LAT) {
                    this.isRestrict = true;
                    var i = c9.MAX_LAT - hX.lat;
                    var e = hX.lat - c9.MIN_LAT;
                    var hW;
                    if (i < e) {
                        hW = i / (this.height / 2)
                    } else {
                        hW = e / (this.height / 2)
                    }
                    var hT = 18 - eD(hW);
                    this.zoomLevel = Math.ceil(hT);
                    hX.zoom = Math.ceil(hT);
                    return hX
                }
            }
            if (T.lat > c9.MAX_LAT) {
                this.isRestrict = true;
                hX.lat = c9.MAX_LAT - this.height / 2 * hU
            } else {
                if (hV.lat < c9.MIN_LAT) {
                    this.isRestrict = true;
                    hX.lat = c9.MIN_LAT + this.height / 2 * hU
                }
            }
            return hX
        }
    });
    function c9(e, T) {
        if (typeof e === "string") {
            e = document.getElementById(e)
        }
        ee.call(this);
        this.container = e;
        this.width = e.clientWidth;
        this.height = e.clientHeight;
        this.offsetX = 0;
        this.offsetY = 0;
        this._setStyle(e);
        e.unselectable = "on";
        e.innerHTML = "";
        D.ac(e, "bmap-container");
        e.appendChild(this.render());
        this._initDate = new Date();
        this.platform = e.children[0];
        this.maskLayer = this.platform.children[0];
        this._panes = {};
        this.centerPoint = new hu(0, 0);
        this.zoomLevel = 0;
        this._heading = 0;
        this._tilt = 0;
        this._bounds = new dT();
        this.lastLevel = 0;
        this._lock = false;
        this._enableTiltZoom = 7;
        this._enableHeadingZoom = 7;
        this.defaultZoomLevel = null;
        this.defaultCenter = null;
        this.zoomEventStatus = "idle";
        this.currentOperation = dV.idle;
        this._setConfig(T);
        this._initMapRenderType();
        this._animationInfo = {};
        this._animationInfoUnstopable = {};
        this.suspendLoad = false;
        this._customTileLabels = [];
        if (this._renderType === "webgl") {
            this._workerMgr = new ga(this);
            this._featureMgr = new dd();
            D.extend(this, c8.prototype);
            this.jobScheduler = new fP(this);
            this.benchmark = new ad();
            this._setupWebGLMap();
            this.deviceInfo = {
                hardwareInfo: {
                    renderer: "",
                    vendor: ""
                }
            };
            if (a9.ifSupportWebGL._renderer) {
                this.deviceInfo.hardwareInfo.renderer = a9.ifSupportWebGL._renderer;
                this.deviceInfo.hardwareInfo.vendor = a9.ifSupportWebGL._vendor
            }
        } else {
            D.extend(this, an.prototype)
        }
        if (!b7[this.config.mapType]) {
            this.config.mapType = BMAPGL_NORMAL_MAP
        }
        if (this.config.mapType === BMAP_EARTH_MAP && !this.config.enableEarth) {
            if (this.forceEnableEarth() === false) {
                this.config.mapType = BMAPGL_NORMAL_MAP
            }
        }
        this.mapType = this.config.mapType;
        this.preMapType = null;
        if (this.config.enableEarth) {
            var hV = this.maskLayer.style;
            hV.opacity = 0;
            hV.background = "#000";
            if (this.config.mapType === BMAP_EARTH_MAP) {
                hV.opacity = 1
            }
            setTimeout(function() {
                hV.WebkitTransition = hV.transition = "opacity .4s"
            },
            100)
        }
        this._isHybridShow = this.config.showStreetLayer;
        this.temp = {
            operating: false,
            arrow: 0,
            lastDomMoveTime: 0,
            lastLoadTileTime: 0,
            lastMovingTime: 0,
            canKeyboard: false,
            I: function(i) {
                return D.I(i)
            },
            curSpots: [],
            curSpotsArray: [],
            curAreaSpot: null,
            spotsGuid: 1,
            registerIndex: -1,
            hoverOnSpot: null,
            isStdCtrlBusy: false
        };
        window.InstanceCore = this.temp.I;
        this.platform.style.cursor = this.config.defaultCursor;
        this._bind();
        for (var hT = 0; hT < bp._register.length; hT++) {
            bp._register[hT](this)
        }
        this.temp.registerIndex = hT;
        var hU = this;
        if (this._renderType === "webgl") {
            eb.load("oppcgl",
            function() {
                hU._asyncRegister()
            })
        } else {
            eb.load("oppc",
            function() {
                hU._asyncRegister()
            })
        }
        if (this.config.mapType === "B_EARTH_MAP") {
            if (!bp.Earth) {
                eb.load("earth",
                function() {})
            } else {
                hU._syncAndChangeMapType("B_EARTH_MAP")
            }
        }
    }
    c9.MAX_TILT = 87;
    c9.MAX_DRAG_TILT = 73;
    c9.MAX_DRAG_TILT_L2 = 50;
    c9.MIN_TILT = 0;
    c9.MAX_LAT = 19431424;
    c9.MIN_LAT = -16023552;
    c9.WORLD_SIZE_MC_HALF = 20037726.372307256;
    c9.WORLD_SIZE_MC = c9.WORLD_SIZE_MC_HALF * 2;
    c9.RIGHT_EDGE_POINT = new hu(c9.WORLD_SIZE_MC_HALF, 0);
    c9.LEFT_EDGE_POINT = new hu( - c9.WORLD_SIZE_MC_HALF, 0);
    c9.HIGH_RES_MIN_RATIO = 1.2;
    c9.inherits(ee, "Map");
    D.extend(c9.prototype, {
        render: function() {
            var e = U("div", {
                id: "platform"
            });
            var hT = e.style;
            hT.overflow = "visible";
            hT.position = "absolute";
            hT.zIndex = 5;
            hT.top = hT.left = "0px";
            var i = U("div", {
                id: "mask",
                "class": "BMap_mask"
            });
            var T = i.style;
            T.position = "absolute";
            T.top = T.left = "0px";
            T.zIndex = "9";
            T.overflow = "hidden";
            T.WebkitUserSelect = "none";
            T.width = this.width + "px";
            T.height = this.height + "px";
            e.appendChild(i);
            return e
        },
        _initMapRenderType: function() {
            var e = this.config.forceRenderType;
            if (e === "dom") {
                this._renderType = "dom";
                return
            } else {
                if (e === "canvas") {
                    if (a9.isModernBrowser && !a9.ifCanvas2dInBlackList()) {
                        this._renderType = "canvas";
                        return
                    } else {
                        this._renderType = "dom";
                        return
                    }
                } else {
                    if (e === "webgl") {
                        if (a9.ifSupportWebGL()) {
                            this._renderType = "webgl";
                            return
                        }
                    }
                }
            }
            if (a9.ifSupportWebGL() && a9.ifEnableWebGLMap()) {
                this._renderType = "webgl";
                return
            }
            if (a9.isModernBrowser && a9.ifEnableCanvas2dMap()) {
                this._renderType = "canvas";
                return
            }
            this._renderType = "dom"
        },
        _setConfig: function(i) {
            i = i || {};
            this.config = {
                bottomOffset: 0,
                clickInterval: 200,
                enableDragging: true,
                enableRotate: true,
                enableTilt: true,
                enableKeyboard: false,
                enableDblclickZoom: true,
                enableContinuousZoom: true,
                enableWheelZoom: false,
                enableRotateGestures: true,
                enableTiltGestures: true,
                enablePinchZoom: true,
                fixCenterWhenPinch: false,
                enableAutoResize: true,
                zoomCenter: null,
                fps: D.Browser.ie ? 30 : 60,
                zoomerDuration: 240,
                actionDuration: 450,
                defaultCursor: e4.defaultCursor,
                draggingCursor: e4.draggingCursor,
                coordType: BMAP_COORD_MERCATOR,
                mapType: BMAPGL_NORMAL_MAP,
                drawer: BMAP_SYS_DRAWER,
                enableInertialDragging: true,
                drawMargin: 500,
                drawMarginGL: 500,
                enableFulltimeSpotClick: false,
                enableResizeOnCenter: false,
                isModernBrowser: a9.isModernBrowser,
                forceRenderType: "",
                textRenderType: null,
                ratio: a7() >= c9.HIGH_RES_MIN_RATIO ? 2 : 1,
                enableEarth: a9.ifEnableEarth(),
                defaultMaxBounds: new dT(new hu( - 21364736, -10616832), new hu(23855104, 15859712)),
                showControls: false,
                showRealSunlight: true,
                showMilkyway: true,
                earthBackground: null,
                showStreetLayer: true,
                minZoom: null,
                maxZoom: null,
                style: "default",
                enableIconClick: false,
                autoSafeArea: false,
                ak: null,
                webgl2: false,
                restrictCenter: true,
                smaa: true,
                preserveDrawingBuffer: false
            };
            for (var T in i) {
                if (i.hasOwnProperty(T)) {
                    this.config[T] = i[T];
                    if (T === "fixCenterWhenResize") {
                        this.config.enableResizeOnCenter = i[T]
                    }
                }
            }
            if (i.style) {
                if (i.style["styleId"] && i.style["styleId"].length < 32) {
                    this.config.style = i.style["styleId"]
                } else {
                    this.config.style = i.style
                }
            }
            this._setTextRenderType();
            this._displayOptions = {
                poi: true,
                poiText: true,
                poiIcon: true,
                overlay: true,
                layer: true,
                building: true,
                indoor: true,
                street: true,
                skyColors: ["rgba(226, 237, 248, 0)", "rgba(186, 211, 252, 1)"],
                isFlat: false,
                labelMargin: 0
            };
            if (i.displayOptions) {
                for (var e in i.displayOptions) {
                    if (i.displayOptions.hasOwnProperty(e)) {
                        this._displayOptions[e] = i.displayOptions[e]
                    }
                }
            }
            if (this.config.restrictCenter === false) {
                this._enableTiltZoom = 0;
                this._enableHeadingZoom = 0
            }
        },
        getMinZoom: function() {
            var T;
            if (b7[this.mapType][this._renderType]) {
                T = b7[this.mapType][this._renderType].minZoom
            } else {
                T = b7[this.mapType].minZoom
            }
            if (this.config.minZoom !== null && this.config.minZoom >= T) {
                T = this.config.minZoom
            }
            if (this.mapType === "B_EARTH_MAP") {
                return T
            }
            var i = this.getSize();
            var e = this.worldSize(T);
            while (e < i.width) {
                T++;
                e = this.worldSize(T)
            }
            return T
        },
        getMaxZoom: function() {
            var e;
            if (b7[this.mapType][this._renderType]) {
                e = b7[this.mapType][this._renderType].maxZoom
            } else {
                e = b7[this.mapType].maxZoom
            }
            if (this.config.maxZoom !== null && this.config.maxZoom <= e) {
                e = this.config.maxZoom
            } else {
                if (this._renderType === "webgl") {
                    e = 21
                }
            }
            return e
        },
        _drawFrame: function() {
            this._webglMapScene._painter.draw()
        },
        _setupWebGLMap: function() {
            var e = this;
            eb.load("mapgl",
            function() {
                e._asyncRegister()
            })
        },
        _setStyle: function(i) {
            var e = i.style;
            e.overflow = "hidden";
            if (fZ(i).position !== "absolute") {
                e.position = "relative"
            }
            e.backgroundImage = "url(" + e4.imgPath + "bg.png)";
            e.textAlign = "left";
            e.touchAction = e.MSTouchAction = "none"
        },
        _bind: function() {
            var e = this;
            if (e._renderType !== "webgl") {
                e._watchSize = function() {
                    var T = e.getContainerSize();
                    if (e.width !== T.width || e.height !== T.height) {
                        var hW = (T.width - e.width) / 2;
                        var hY = (T.height - e.height) / 2;
                        var hT = e.getZoomUnits();
                        var hV = e.centerPoint;
                        if (hV && !e.config.enableResizeOnCenter) {
                            e.centerPoint = new hu(hV.lng + hW * hT, hV.lat - hY * hT)
                        }
                        e.maskLayer.style.width = (e.width = T.width) + "px";
                        e.maskLayer.style.height = (e.height = T.height) + "px";
                        var hU = new bc("onresize");
                        hU.size = T;
                        e.dispatchEvent(hU);
                        e.fire(new bc("onsize_changed"));
                        var i = parseInt(e.platform.style.left, 10) || 0;
                        var hX = parseInt(e.platform.style.top, 10) || 0;
                        if (e.currentOperation !== "undefined" && e.currentOperation !== dV.idle && (e.offsetX !== i || e.offsetY !== hX)) {
                            e._setPlatformPosition(i, hX)
                        }
                    }
                }
            } else {
                e._watchSize = function() {
                    var i = e.getContainerSize();
                    if (e.width !== i.width || e.height !== i.height) {
                        var hT = e.getSize();
                        e.maskLayer.style.width = (e.width = i.width) + "px";
                        e.maskLayer.style.height = (e.height = i.height) + "px";
                        if (a7() !== e.config.ratio) {
                            e.config.ratio = a7()
                        }
                        var hU = new bc("onresize");
                        hU.size = i;
                        e.dispatchEvent(hU);
                        var T = new bc("onsize_changed");
                        T.size = i;
                        T.oldSize = hT;
                        e.fire(T)
                    }
                }
            }
            if (e.config.enableAutoResize) {
                e.temp.autoResizeTimer = setInterval(e._watchSize, 16)
            }
            this.on("size_changed",
            function() {
                var i = e.getMinZoom();
                if (e.zoomLevel < i) {
                    e.setZoomIn(i, {
                        noAnimation: true
                    })
                }
            });
            this.on("zoom_changed",
            function() {
                this.dispatchEvent(new bc("onzooming"))
            })
        },
        addControl: function(e) {
            if (e && bW(e._i)) {
                e._i(this);
                this.dispatchEvent(new bc("onaddcontrol", e))
            }
        },
        removeControl: function(e) {
            if (e && bW(e.remove)) {
                e.remove();
                this.dispatchEvent(new bc("onremovecontrol", e))
            }
        },
        addContextMenu: function(e) {
            if (e) {
                e.initialize(this);
                this.dispatchEvent(new bc("onaddcontextmenu", e))
            }
        },
        removeContextMenu: function(e) {
            if (e) {
                this.dispatchEvent(new bc("onremovecontextmenu", e));
                e.remove()
            }
        },
        addOverlay: function(i) {
            if (i && bW(i._i)) {
                var T = new bc("onbeforeaddoverlay", i);
                T.overlay = i;
                this.dispatchEvent(T);
                i._i(this);
                T = new bc("onaddoverlay", i);
                T.overlay = i;
                this.dispatchEvent(T)
            }
        },
        removeOverlay: function(i) {
            if (i && bW(i.remove)) {
                var T = new bc("onremoveoverlay", i);
                T.overlay = i;
                i.remove();
                this.dispatchEvent(T)
            }
        },
        clearOverlays: function() {
            this.dispatchEvent(new bc("onclearoverlays"))
        },
        addTileLayer: function(hU) {
            if (!hU) {
                return
            }
            for (var hT = 0,
            e = this.tileMgr.tileLayers.length; hT < e; hT++) {
                var T = this.tileMgr.tileLayers[hT];
                if (T === hU || T.getMapType() === hU.getMapType()) {
                    return
                }
            }
            hU.initialize(this);
            this.dispatchEvent(new bc("onaddtilelayer", hU))
        },
        removeTileLayer: function(e) {
            if (e) {
                e.remove();
                this.dispatchEvent(new bc("onremovetilelayer", e))
            }
        },
        getTileLayer: function(e) {
            if (this.tileMgr) {
                return this.tileMgr.getTileLayer(e)
            }
            return null
        },
        setMapType: function(e) {
            var i = this;
            if (this.mapType === e || this._mapTypeChanging) {
                return
            }
            if (e === BMAP_EARTH_MAP && !this.config.enableEarth) {
                return
            }
            if (this._earth && this._earth.getLock()) {
                return
            }
            this._mapTypeChanging = true;
            this.preMapType = this.mapType;
            this._boundsInPreMapType = this.getBoundsIn();
            if (this.preMapType === BMAP_SATELLITE_MAP) {
                this._preStreetLayerShow = this._isHybridShow
            }
            if (e === BMAP_EARTH_MAP) {
                if (!bp.Earth) {
                    eb.load("earth",
                    function() {
                        i._syncAndChangeMapType(e)
                    });
                    return
                }
                i._syncAndChangeMapType(e)
            } else {
                if (this.preMapType !== BMAP_EARTH_MAP) {
                    this._changeFlatMapType(e);
                    this._mapTypeChanging = false
                } else {
                    this._setMapTypeStatus(e,
                    function(T, hT) {
                        var hU = i._earth.getEarthCanvas();
                        i._changeFlatMapType(e, this.preMapType);
                        if (i._mapTypeChangAni) {
                            i._mapTypeChangAni.stop()
                        }
                        i._mapTypeChangAni = fl.start({
                            el: hU,
                            style: "opacity",
                            startValue: 1,
                            endValue: 0,
                            duration: 200,
                            callback: function() {
                                i._mapTypeChangAni = null;
                                i._mapTypeChanging = false
                            }
                        });
                        T = eo.convertLL2MC(T);
                        if (i._renderType === "webgl") {
                            D.extend(i, c8.prototype);
                            i.setCenterIn(T, {
                                noAnimation: true
                            });
                            i.setZoomIn(hT, {
                                noAnimation: true
                            })
                        } else {
                            D.extend(i, an.prototype);
                            i.centerAndZoomIn(T, hT)
                        }
                    })
                }
            }
        },
        _changeFlatMapType: function(hW) {
            if (!hW || !b7[hW]) {
                return
            }
            var h4 = this.preMapType;
            this.mapType = hW;
            var hT = this.getTileLayer(h4);
            if (hT) {
                this.removeTileLayer(hT)
            }
            if (h4 !== BMAP_EARTH_MAP || this._renderType !== "webgl" || this.baseLayerAdded !== true) {
                var T = new dT(new hu( - 21364736, -10616832), new hu(23855104, 15859712));
                var h1 = new c6(T, "baidu", hW);
                var h3 = this._renderType === "webgl" ? 2 : 1;
                var hU = new cS({
                    mapType: hW,
                    copyright: h1,
                    dataType: h3,
                    customLayer: false,
                    baseLayer: true,
                    tileTypeName: "na"
                });
                hU._isInnerLayer = true;
                this.addTileLayer(hU);
                if (this._renderType === "webgl" && !this.baseLayerAdded) {
                    this.baseLayerAdded = true
                }
            }
            if (h4 === BMAP_SATELLITE_MAP) {
                this._preStreetLayerShow = this._isHybridShow;
                this._removeHybirdMap()
            } else {
                if (hW === BMAP_SATELLITE_MAP) {
                    if (this._preStreetLayerShow === true || typeof this._preStreetLayerShow === "undefined") {
                        this._addHybirdMap()
                    }
                }
            }
            var hY = this.tileMgr.tileLayers;
            for (var hX = 0,
            hV = hY.length; hX < hV; hX++) {
                var hZ = hY[hX];
                var h2 = hZ.tilesDiv;
                if (!h2) {
                    continue
                }
                if (!hZ._isInnerLayer && h2.style.visibility === "hidden") {
                    h2.style.visibility = ""
                }
            }
            var h0 = new bc("onmaptypechange");
            h0.zoomLevel = this.zoomLevel;
            h0.mapType = hW;
            h0.exMapType = h4;
            this.dispatchEvent(h0)
        },
        showStreetLayer: function(e) {
            e ? this._addHybirdMap() : this._removeHybirdMap()
        },
        hideStreetLayer: function(e) {
            this._hideStreetLayerOptions = e;
            this._removeHybirdMap(e)
        },
        _addHybirdMap: function() {
            this._isHybridShow = true;
            if (this.mapType === "B_EARTH_MAP") {
                if (this._earth) {
                    this._earth.showStreetLayer()
                }
                return
            }
            if (this._hybridTileLayer) {
                this.addTileLayer(this._hybridTileLayer);
                var hV = new bc("onstreetlayer_show");
                this.dispatchEvent(hV);
                return
            }
            var hU = new dT(new hu( - 21364736, -10616832), new hu(23855104, 15859712));
            var T = new c6(hU, "", BMAP_HYBRID_MAP);
            var i = new cS({
                copyright: T,
                transparentPng: true,
                tileTypeName: "web"
            });
            i._isInnerLayer = true;
            var hT = this.isCanvasMap();
            i.getTilesUrl = function(hW, h1) {
                var hZ = b7.B_STREET_MAP;
                var h0 = aE("ditu", "satelliteStreet");
                var hX = h0.ver;
                var e = h0.udt;
                var hY = hZ.tileUrls[Math.abs(hW.x + hW.y) % hZ.tileUrls.length] + "?qt=vtile&x=" + (hW.x + "").replace(/-/gi, "M") + "&y=" + (hW.y + "").replace(/-/gi, "M") + "&z=" + h1 + "&styles=sl&v=" + hX + "&udt=" + e + "$scaler=" + a7() + "&showtext=" + (hT ? 0 : 1);
                return hY
            };
            this._isHybridShow = true;
            this.addTileLayer(i);
            this._hybridTileLayer = i;
            var hV = new bc("onstreetlayer_show");
            this.dispatchEvent(hV)
        },
        _removeHybirdMap: function(i) {
            this._isHybridShow = false;
            if (this.mapType === "B_EARTH_MAP") {
                if (this._earth) {
                    this._earth.hideStreetLayer(i)
                }
                return
            }
            if (this._hybridTileLayer) {
                this.removeTileLayer(this._hybridTileLayer);
                var T = new bc("onstreetlayer_hide");
                this.dispatchEvent(T)
            }
        },
        isStreetLayerShow: function() {
            return this._isHybridShow
        },
        getTileId: function(e, hV) {
            var hT = b7[this.mapType];
            if (typeof hT !== "object") {
                return null
            }
            var T = hT.baseUnits * Math.pow(2, (hT.zoomLevelBase - hV));
            var hU = parseInt(e.lng / T, 10);
            var i = parseInt(e.lat / T, 10);
            return {
                row: hU,
                column: i,
                level: hV
            }
        },
        reset: function() {
            this.centerAndZoomIn(this.defaultCenter, this.defaultZoomLevel, true)
        },
        setOptions: function(e) {
            e = e || {};
            for (var T in e) {
                if (e.hasOwnProperty(T)) {
                    var i = true;
                    if (typeof e[T] !== "object") {
                        i = e[T] !== this.config[T]
                    }
                    this.config[T] = e[T];
                    if (T === "fixCenterWhenResize") {
                        this.config.enableResizeOnCenter = e[T]
                    }
                    if (!i) {
                        continue
                    }
                    switch (T) {
                    case "style":
                    case "styleUrl":
                        if (T === "style" && e.styleUrl) {
                            break
                        }
                        this.fire(new bc("onstyle_willchange"));
                        var hT = this;
                        this.loadMapStyleFiles(function() {
                            hT.fire(new bc("onstyle_changed"))
                        });
                        break;
                    case "enableAutoResize":
                        if (e[T] === true) {
                            this.enableAutoResize()
                        } else {
                            this.disableAutoResize()
                        }
                        break;
                    case "displayOptions":
                        this.setDisplayOptions(e[T]);
                        break
                    }
                }
            }
        },
        enableDragging: function() {
            this.config.enableDragging = true
        },
        disableDragging: function() {
            this.config.enableDragging = false
        },
        enableInertialDragging: function() {
            this.config.enableInertialDragging = true
        },
        disableInertialDragging: function() {
            this.config.enableInertialDragging = false
        },
        enableScrollWheelZoom: function() {
            this.config.enableWheelZoom = true
        },
        disableScrollWheelZoom: function() {
            this.config.enableWheelZoom = false
        },
        enableContinuousZoom: function() {
            this.config.enableContinuousZoom = true
        },
        disableContinuousZoom: function() {
            this.config.enableContinuousZoom = false
        },
        enableResizeOnCenter: function() {
            this.config.enableResizeOnCenter = true
        },
        disableResizeOnCenter: function() {
            this.config.enableResizeOnCenter = false
        },
        enableDoubleClickZoom: function() {
            this.config.enableDblclickZoom = true
        },
        disableDoubleClickZoom: function() {
            this.config.enableDblclickZoom = false
        },
        enableKeyboard: function() {
            this.config.enableKeyboard = true
        },
        disableKeyboard: function() {
            this.config.enableKeyboard = false
        },
        getSize: function() {
            return new ea(this.width, this.height)
        },
        enablePinchToZoom: function() {
            this.config.enablePinchZoom = true
        },
        disablePinchToZoom: function() {
            this.config.enablePinchZoom = false
        },
        enableTilt: function() {
            this.config.enableTilt = true
        },
        disableTilt: function() {
            this.config.enableTilt = false
        },
        enableRotate: function() {
            this.config.enableRotate = true
        },
        disableRotate: function() {
            this.config.enableRotate = false
        },
        enableAutoResize: function() {
            this.config.enableAutoResize = true;
            this._watchSize();
            if (!this.temp.autoResizeTimer) {
                this.temp.autoResizeTimer = setInterval(this._watchSize, 16)
            }
        },
        disableAutoResize: function() {
            this.config.enableAutoResize = false;
            if (this.temp.autoResizeTimer) {
                clearInterval(this.temp.autoResizeTimer);
                this.temp.autoResizeTimer = null
            }
        },
        checkResize: function() {
            this._watchSize()
        },
        resize: function() {
            this._watchSize()
        },
        getContainerSize: function() {
            return new ea(this.container.clientWidth, this.container.clientHeight)
        },
        _getProperZoom: function(T) {
            if (!T) {
                T = this.zoomLevel
            }
            var i = this.getMinZoom();
            var e = this.getMaxZoom();
            var hT = false;
            if (T < i) {
                hT = true;
                T = i
            }
            if (T > e) {
                hT = true;
                T = e
            }
            if (this._renderType !== "webgl") {
                T = Math.round(T)
            }
            return {
                zoom: T,
                exceeded: hT
            }
        },
        getContainer: function() {
            return this.container
        },
        getZoomUnits: function(T) {
            if (this.mapType === BMAP_EARTH_MAP) {
                return Math.pow(2, 18 - this._earth.getImageZoom())
            }
            var e = b7[this.mapType];
            if (typeof e !== "object") {
                return null
            }
            var i = T || this.zoomLevel;
            return Math.pow(2, (e.zoomLevelBase - i))
        },
        pointToPixelIn: function(h2, h4) {
            if (!h2) {
                return
            }
            h4 = h4 || {};
            if (this.mapType === BMAP_EARTH_MAP) {
                var hT;
                if (!h2._llPt) {
                    hT = eo.convertMC2LL(h2);
                    h2._llPt = hT
                }
                hT = h2._llPt;
                var hY = null;
                var T = null;
                if (typeof h4.zoom === "number") {
                    var h1 = this._earth;
                    var h3 = h1._getEarthZoomByImgZoom(h4.zoom);
                    if (h3 <= 3) {
                        hY = h1._generateTmpPMatrix(h3)
                    }
                    T = h1._generateTmpMVMatrix(h1.getCenter(), h3)
                }
                var hU = this._earth.fromLatLngToPixel(hT, {
                    useRound: false,
                    isCalcOnBack: true,
                    matrixInfo: {
                        modelViewMatrix: T,
                        projectionMatrix: hY
                    }
                });
                return hU
            }
            if ((this._heading % 360 === 0 && this._tilt === 0) || !this._webglMapCamera) {
                var h0 = this.getZoomUnits(h4.zoom);
                var hW = h4.center || this.centerPoint;
                var i = this.width / 2;
                var hV = this.height / 2;
                var hZ = (h2.lng - hW.lng) / h0 + i;
                var hX = (hW.lat - h2.lat) / h0 + hV;
                if (h4.useRound !== false) {
                    hZ = Math.round(hZ);
                    hX = Math.round(hX)
                }
                return new ek(hZ, hX)
            }
            var e = this._webglMapCamera.fromMCToScreenPixel(h2.lng, h2.lat, h4);
            if (h4.useRound === false) {
                return e
            }
            e.x = Math.round(e.x);
            e.y = Math.round(e.y);
            return e
        },
        pixelToPointIn: function(e, h0) {
            if (!e) {
                return
            }
            h0 = h0 || {};
            if (this.mapType === BMAP_EARTH_MAP) {
                if (typeof h0.zoom === "number") {
                    var hY = this._earth;
                    var hV = null;
                    var T = null;
                    var hZ = hY._getEarthZoomByImgZoom(h0.zoom);
                    if (hZ <= 3) {
                        hV = hY._generateTmpPMatrix(hZ)
                    }
                    T = hY._generateTmpMVMatrix(hY.getCenter(), hZ)
                }
                var i = this._earth.fromPixelToLatLng(e, {
                    matrixInfo: {
                        modelViewMatrix: T,
                        projectionMatrix: hV
                    }
                });
                if (i === null) {
                    return null
                }
                return eo.convertLL2MC(i)
            }
            if ((this._heading % 360 !== 0 || this._tilt > 0) && this._webglMapCamera) {
                return this._webglMapCamera.fromScreenPixelToMC(e.x, e.y, h0)
            }
            var hW = h0.center || this.centerPoint;
            var hX = this.getZoomUnits(h0.zoom);
            var hU = hW.lng + hX * (e.x - this.width / 2);
            var hT = hW.lat - hX * (e.y - this.height / 2);
            return new hu(hU, hT)
        },
        pointToOverlayPixelIn: function(e, hT) {
            hT = hT || {};
            var T = this.pointToPixelIn(e, {
                zoom: hT.zoom,
                center: hT.center,
                forLabel: true,
                frustumTest: true,
                useRound: hT.useRound
            });
            if (!T) {
                return
            }
            if (hT.fixPosition && this.mapType !== "B_EARTH_MAP") {
                var hU = this.getSize();
                var i = this.worldSize(hT.zoom);
                if (T.x > hU.width) {
                    while (T.x > hU.width) {
                        T.x -= i
                    }
                } else {
                    if (T.x < 0) {
                        while (T.x < 0) {
                            T.x += i
                        }
                    }
                }
            }
            if (this._renderType === "webgl") {
                return T
            }
            T.x -= this.offsetX;
            T.y -= this.offsetY;
            return T
        },
        overlayPixelToPointIn: function(i, e) {
            if (!i) {
                return
            }
            var T = i.clone();
            if (this._renderType !== "webgl") {
                T.x += this.offsetX;
                T.y += this.offsetY
            }
            return this.pixelToPointIn(T, e)
        },
        getProjection: function() {
            return new eo()
        },
        lnglatToMercator: function(e, hT) {
            var i = new hu(e, hT);
            var T = eo.convertLL2MC(i);
            return [T.lng, T.lat]
        },
        mercatorToLnglat: function(i, e) {
            if (isNaN(i) || isNaN(e)) {
                return []
            }
            i = parseFloat(i);
            e = parseFloat(e);
            var hT = new hu(i, e);
            var T = eo.convertMC2LL(hT);
            return [T.lng, T.lat]
        },
        getBoundsIn: function() {
            var h6 = arguments[0];
            if (this.mapType === BMAP_EARTH_MAP && this._earth) {
                var h0 = this._earth.getCustomBounds();
                if (!h0) {
                    return this.config.defaultMaxBounds
                }
                var hZ = h0.getSouthWest();
                var e = h0.getNorthEast();
                if (hZ.lng > e.lng) {
                    e.lng = 180
                }
                var ip = eo.convertLL2MC(hZ);
                var id = eo.convertLL2MC(e);
                var h3 = this.config.defaultMaxBounds;
                var ic = Math.max(ip.lng, h3.sw.lng);
                var ib = Math.max(ip.lat, h3.sw.lat);
                var h5 = Math.min(id.lng, h3.ne.lng);
                var h4 = Math.min(id.lat, h3.ne.lat);
                var h8 = new dT(new hu(ic, ib), new hu(h5, h4));
                h8.pointBottomLeft = new hu(ic, ib);
                h8.pointBottomRight = new hu(h5, ib);
                h8.pointTopLeft = new hu(ic, h4);
                h8.pointTopRight = new hu(h5, h4);
                h8.setMinMax();
                h8.makeNormalizedPoint(this._earth.getHeading());
                return h8
            }
            h6 = h6 || {};
            var hU = h6.margins || [0, 0, 0, 0];
            var ij = this.pixelToPointIn({
                x: hU[3],
                y: this.height - hU[2]
            },
            h6);
            var io = this.pixelToPointIn({
                x: this.width - hU[1],
                y: hU[0]
            },
            h6);
            var ia = typeof h6.heading === "number" ? h6.heading: (this._heading % 360);
            var T = typeof h6.tilt === "number" ? h6.tilt: this._tilt;
            var h2 = this._webglMapCamera;
            if ((ia === 0 && T === 0) || !h2) {
                this._bounds.setSouthWest(ij);
                this._bounds.setNorthEast(io);
                this._bounds.pointBottomLeft = ij;
                this._bounds.pointBottomRight = new hu(io.lng, ij.lat);
                this._bounds.pointTopRight = io;
                this._bounds.pointTopLeft = new hu(ij.lng, io.lat);
                this._bounds.setMinMax();
                this._bounds.makeNormalizedPoint(ia);
                return this._bounds
            }
            var h9 = this.pixelToPointIn({
                x: hU[3],
                y: hU[0]
            },
            h6);
            var hT = h2.getPosition();
            var iq = Math.sqrt(Math.pow(h9.lng - hT[0], 2) + Math.pow(h9.lat - hT[1], 2));
            var ik = this.getZoomUnits();
            var it = iq / ik;
            var ih = h2._frustumSideLen;
            var hY = h2._fovy;
            if (it > ih || (90 - T) < hY / 2) {
                var ir = [h9.lng - hT[0], h9.lat - hT[1]];
                if ((90 - T) < hY / 2) {
                    ir[0] = -ir[0];
                    ir[1] = -ir[1]
                }
                var ii = ih * ik;
                var hX = [ir[0] / iq * ii + hT[0], ir[1] / iq * ii + hT[1]];
                var ie = [io.lng - hT[0], io.lat - hT[1]];
                if ((90 - T) < hY / 2) {
                    ie[0] = -ie[0];
                    ie[1] = -ie[1]
                }
                var hV = [ie[0] / iq * ii + hT[0], ie[1] / iq * ii + hT[1]];
                h9.lng = hX[0];
                h9.lat = hX[1];
                io.lng = hV[0];
                io.lat = hV[1]
            }
            var h7 = this.pixelToPointIn({
                x: this.width - hU[1],
                y: this.height - hU[2]
            },
            h6);
            var ig = [ij, io, h9, h7];
            var im = ig[0].lng;
            var iu = ig[0].lat;
            var hW = ig[0].lng;
            var h1 = ig[0].lat;
            for (var il = 1; il < 4; il++) {
                if (ig[il].lng < im) {
                    im = ig[il].lng
                }
                if (ig[il].lng > hW) {
                    hW = ig[il].lng
                }
                if (ig[il].lat < iu) {
                    iu = ig[il].lat
                }
                if (ig[il].lat > h1) {
                    h1 = ig[il].lat
                }
            }
            this._bounds.setSouthWest(new hu(im, iu));
            this._bounds.setNorthEast(new hu(hW, h1));
            this._bounds.pointTopLeft = h9;
            this._bounds.pointTopRight = io;
            this._bounds.pointBottomRight = h7;
            this._bounds.pointBottomLeft = ij;
            this._bounds.makeNormalizedPoint(ia);
            this._bounds.setMinMax();
            return this._bounds
        },
        isLoaded: function() {
            return !! this.loaded
        },
        _getBestLevel: function(i, h2) {
            var hV = 0;
            if (this._renderType === "webgl" && !f6()) {
                hV = 100
            }
            var hW = h2.margins || [10, 10, 10, 10];
            var hT = h2.zoomFactor || 0;
            var hX = hW[1] + hW[3];
            var hU = hW[0] + hW[2];
            var e = this.getMinZoom();
            var h1 = this.getMaxZoom();
            var h0 = i.toSpan();
            var hZ = h0.width / (this.width - hX - hV);
            var hY = h0.height / (this.height - hU - hV);
            var T = 18 - eD(Math.max(hZ, hY));
            if (T < e) {
                T = e
            }
            if (T > h1) {
                T = h1
            }
            T += hT;
            if (this._renderType !== "webgl") {
                T = Math.floor(T)
            }
            return T
        },
        getViewportIn: function(h4, h7) {
            if (this.mapType === BMAP_EARTH_MAP) {
                h4 = h4 || [];
                var h3 = [];
                for (var hU = 0; hU < h4.length; hU++) {
                    if (!h4[hU]) {
                        continue
                    }
                    h3.push(eo.convertMC2LL(h4[hU]))
                }
                var h2 = this._earth.getViewportIn(h3, h7);
                var hV = h2.center;
                var hW = h2.zoom;
                var h0 = eo.convertLL2MC(hV);
                return {
                    center: h0,
                    zoom: hW
                }
            }
            var h6 = {
                center: this.getCenterIn(),
                zoom: this.getZoom()
            };
            if (!h4 || h4.length === 0) {
                return h6
            }
            h7 = h7 || {};
            var T;
            if (h4 instanceof dT) {
                T = h4
            } else {
                var hZ = h4;
                T = new dT();
                for (var hU = hZ.length - 1; hU >= 0; hU--) {
                    T.extend(hZ[hU])
                }
                if (T.isEmpty()) {
                    return h6
                }
            }
            var e = T.getCenter();
            var h5 = this._getBestLevel(T, h7);
            if (h7.margins) {
                var hY = h7.margins;
                var hX = (hY[1] - hY[3]) / 2;
                var h1 = (hY[0] - hY[2]) / 2;
                var hT = this.getZoomUnits(h5);
                e.lng = e.lng + hT * hX;
                e.lat = e.lat + hT * h1
            }
            return {
                center: e,
                zoom: h5
            }
        },
        setViewportIn: function(hT, hU) {
            if (this.mapType === BMAP_EARTH_MAP) {
                var hY;
                if (hT && hT.center) {
                    var T = eo.convertMC2LL(hT.center);
                    var hW = this._earth._getEarthZoomByImgZoom(hT.zoom, T);
                    hY = {
                        center: T,
                        zoom: hW
                    }
                } else {
                    hY = [];
                    for (var hV = 0; hV < hT.length; hV++) {
                        var hX = eo.convertMC2LL(hT[hV]);
                        hY[hV] = new c5(hX.lat, hX.lng)
                    }
                }
                this._earth.setViewportIn(hY, hU);
                return
            }
            var e;
            if (hT && hT.center) {
                e = hT
            } else {
                e = this.getViewportIn(hT, hU)
            }
            hU = hU || {};
            if (this._renderType === "webgl") {
                this.centerAndZoomIn(e.center, e.zoom, hU);
                return
            }
            if (e.zoom === this.zoomLevel && hU.enableAnimation !== false) {
                this.panToIn(e.center, {
                    duration: 200,
                    callback: hU.callback
                })
            } else {
                this.centerAndZoomIn(e.center, e.zoom, hU)
            }
        },
        addSpots: function(T, i) {
            if (!T || T.length === 0) {
                return
            }
            i = i || {};
            var hV = i.zIndex || 0;
            var hU = typeof i.enableMultiResponse === "undefined" ? true: !!i.enableMultiResponse;
            this.spotsPool = this.spotsPool || {};
            var e = "sp" + (this.temp.spotsGuid++);
            this.spotsPool[e] = {
                spots: T.slice(0),
                zIndex: hV,
                enableMultiResponse: hU
            };
            var hT = this;
            eb.load("hotspot",
            function() {
                hT._asyncRegister()
            });
            return e
        },
        getSpots: function(e) {
            return this.spotsPool[e] && this.spotsPool[e].spots || []
        },
        removeSpots: function(e) {
            if (!e || !this.spotsPool[e]) {
                return
            }
            delete this.spotsPool[e]
        },
        clearSpots: function() {
            delete this.spotsPool
        },
        getIconByClickPosition: function(i) {
            if (!this.config.enableIconClick || !this._spotsMgr) {
                return null
            }
            var e = this._spotsMgr.getSpotsByScreenPosition(i);
            if (e[0] && e[0].userdata) {
                var T = e[0].userdata;
                return {
                    name: T.name,
                    uid: T.uid,
                    position: T.iconPoint || e[0].pt
                }
            }
            return null
        },
        setBounds: function(e) {
            b7[this.mapType].bounds = e.clone()
        },
        getCoordType: function() {
            return this.config.coordType
        },
        getPanes: function() {
            return this._panes
        },
        getInfoWindow: function() {
            if (this.temp.infoWin && this.temp.infoWin.isOpen()) {
                return this.temp.infoWin
            }
            return null
        },
        getDistanceIn: function(hU, e) {
            if (!hU || !e) {
                return
            }
            if (hU.equals(e)) {
                return 0
            }
            if (this.mapType === BMAP_EARTH_MAP) {
                var hT = eo.convertMC2LL(hU);
                var T = eo.convertMC2LL(e);
                return this._earth.getDistance(hT, T)
            }
            var i = eo.getDistanceByMC(hU, e);
            return i
        },
        getOverlays: function() {
            var hU = [];
            var hV = this._overlays;
            var hT = this._customOverlays;
            if (hV) {
                for (var T in hV) {
                    if (hV[T] instanceof cW) {
                        hU.push(hV[T])
                    }
                }
            }
            if (hT) {
                for (var T = 0,
                e = hT.length; T < e; T++) {
                    hU.push(hT[T])
                }
            }
            return hU
        },
        getMapType: function() {
            return this.mapType
        },
        _asyncRegister: function() {
            for (var e = this.temp.registerIndex; e < bp._register.length; e++) {
                bp._register[e](this)
            }
            this.temp.registerIndex = e
        },
        setDefaultCursor: function(e) {
            this.config.defaultCursor = e;
            if (this.platform) {
                this.platform.style.cursor = this.config.defaultCursor
            }
        },
        getDefaultCursor: function() {
            return this.config.defaultCursor
        },
        setDraggingCursor: function(e) {
            this.config.draggingCursor = e
        },
        getDraggingCursor: function() {
            return this.config.draggingCursor
        },
        _syncAndChangeMapType: function(e) {
            var i = this;
            if (i._renderType === "webgl" && i.getTilt() > c9.MAX_DRAG_TILT_L2) {
                i.setTilt(c9.MAX_DRAG_TILT_L2, {
                    callback: function() {
                        i._changeEarthMapType(e)
                    }
                })
            } else {
                i._changeEarthMapType(e)
            }
        },
        _changeEarthMapType: function(T) {
            var hT = this;
            var hW = hT.tileMgr.tileLayers;
            if (this._mapTypeChangAni) {
                this._mapTypeChangAni.stop()
            }
            var hV;
            if (this._earth) {
                hV = this._earth.getEarthCanvas()
            }
            if (!this._earth) {
                this.maskLayer.style.opacity = 1;
                this.maskLayer.style.zIndex = 999;
                this.maskLayer.style.background = "#000"
            }
            this._mapTypeChangAni = new p({
                duration: 400,
                render: function(e) {
                    if (!hT._earth) {
                        return
                    }
                    hV.style.opacity = e
                },
                finish: function() {
                    for (var e = hW.length - 1,
                    hX = e; hX >= 0; hX--) {
                        var hZ = hW[hX].tilesDiv;
                        if (hZ) {
                            hZ.style.visibility = "hidden"
                        }
                        if (hW[hX]._isInnerLayer && hT._renderType !== "webgl") {
                            hT.removeTileLayer(hW[hX])
                        }
                    }
                    hT._mapTypeChangAni = null;
                    hT._mapTypeChanging = false;
                    function hY() {
                        var h3 = hT.getZoom() - 2;
                        var h4 = hT.getCenterIn();
                        var h1 = eo.convertMC2LL(h4);
                        hT._earth = new bp.Earth(hT, {
                            center: h1,
                            zoom: h3,
                            showRealSunlight: hT.config.showRealSunlight,
                            showMilkyway: hT.config.showMilkyway,
                            earthBackground: hT.config.earthBackground
                        });
                        hT._proxyEarthEvents();
                        var h0 = hT.mapType;
                        hT.mapType = T;
                        var h2 = new bc("onmaptypechange");
                        h2.zoomLevel = this.zoomLevel;
                        h2.mapType = T;
                        h2.exMapType = h0;
                        hT.dispatchEvent(h2);
                        hT._setMapTypeStatus(T);
                        D.extend(hT, bp.EarthView.prototype);
                        if (!hT._navigationCtrl && hT.config.showControls) {
                            hT._navigationCtrl = new eV(hT)
                        }
                    }
                    if (!hT._earth) {
                        if (bp["FeatureStyle" + hT.config.style]) {
                            hY()
                        } else {
                            hT.loadMapStyleFiles(function() {
                                hY()
                            })
                        }
                    }
                    if (parseInt(hT.maskLayer.style.opacity, 10) === 1) {
                        setTimeout(function() {
                            hT.maskLayer.style.zIndex = 9;
                            hT.maskLayer.style.opacity = 0
                        },
                        1000)
                    }
                }
            });
            if (!this._earth) {
                return
            }
            var i = this.mapType;
            this.mapType = T;
            var hU = new bc("onmaptypechange");
            hU.zoomLevel = this.zoomLevel;
            hU.mapType = T;
            hU.exMapType = i;
            this.dispatchEvent(hU);
            hT._setMapTypeStatus(T);
            D.extend(hT, bp.EarthView.prototype)
        },
        getMapStyleId: function() {
            if (typeof this.config.style === "string") {
                return this.config.style
            }
            return this.config.mapStyleId || "custom"
        },
        _setMapTypeStatus: function(T) {
            var hX = arguments[1];
            if (T === BMAP_EARTH_MAP) {
                var hV = this._earth.getEarthCanvas();
                if (hV) {
                    hV.style.display = ""
                }
                var hY = {
                    noAnimation: true
                };
                this._earth.setCenter(eo.convertMC2LL(this.centerPoint), hY);
                this._earth.setImageZoom(this.zoomLevel, hY);
                this._earth.setTilt(this.getTilt(), hY);
                this._earth.setHeading(this.getHeading(), hY)
            } else {
                if (this.preMapType === BMAP_EARTH_MAP && this._earth) {
                    var hW = this._earth;
                    var hT = hW.getMapZoom();
                    var hU = hW._imageRawZoom || hT;
                    var i = hU - hT;
                    var e = hW.getCenter();
                    if (this._renderType === "webgl") {
                        this._tilt = hW.getTilt();
                        if (this.zoomLevel > 7) {
                            this._heading = hW.getHeading();
                            hX && hX(e, hT);
                            return
                        }
                        if (hW.getHeading() !== 0) {
                            hW.setTilt(this.getTilt());
                            hW.setHeading(this.getHeading(), {
                                callback: function() {
                                    hX && hX(e, hT)
                                }
                            })
                        } else {
                            hX && hX(e, hT)
                        }
                        return
                    }
                    if (i < 0.1 && hW.getTilt() === 0 && hW.getHeading() === 0) {
                        hX && hX(e, hT);
                        return
                    }
                    hW.setTilt(0);
                    hW.setHeading(0);
                    hW.setZoom(hW.getZoom() - i, {
                        callback: function() {
                            hX && hX(e, hT)
                        }
                    })
                }
            }
        },
        _proxyEarthEvents: function() {
            var hU = this;
            var hV = this._earth;
            hV.on("tilesload",
            function(i) {
                hU.fire(i)
            });
            hV.on("centerandzoom",
            function(i) {
                hU.dispatchEvent(new bc("onmoveend"));
                hU.dispatchEvent(new bc("onzoomend"))
            });
            function hT(i) {
                hU.fire(i)
            }
            var e = ["zoomstart", "zoomend", "tilesload", "sunlighttime_change", "sunlighttime_clear", "centerandzoom", "animation_start", "animation_stop", "movestart", "moveend", "moving", "dragstart", "dragend", "dragging"];
            for (var T = 0; T < e.length; T++) {
                hV.on(e[T], hT)
            }
        },
        forceEnableEarth: function() {
            this.config.forceEnableEarth = true;
            this.config.enableEarth = a9.ifEnableEarth(true);
            this.dispatchEvent(new bc("forceenableearth"));
            return this.config.enableEarth
        },
        setLock: function(e) {
            if (this.mapType === BMAP_EARTH_MAP) {
                this._earth.setLock(e)
            }
            this._lock = e
        },
        getLock: function() {
            if (this.mapType === BMAP_EARTH_MAP) {
                return this._earth.getLock()
            }
            return this._lock
        },
        getEarth: function() {
            return this._earth
        },
        isSupportEarth: function() {
            return this.config.enableEarth
        },
        isCanvasMap: function() {
            return !! (this._renderType === "canvas" && this.getMapType() !== "B_EARTH_MAP")
        },
        getCanvasMapCoordByUid: function(hU) {
            if (this._renderType === "webgl") {
                var hV = this.tileMgr.tileLayers;
                for (var hT = 0; hT < hV.length; hT++) {
                    if (hV[hT].labelProcessor) {
                        return hV[hT].labelProcessor.getLabelByUid(hU, "")
                    }
                }
                return null
            }
            var e = this.canvas2dMapMgr._labelClick;
            var T = e.findLabelByUid(hU);
            return T ? new hu(T.iconPos.geoX, T.iconPos.geoY) : null
        },
        loadBizData: function(i) {
            var e = new bc("onloadbizdata");
            e.data = i;
            this.dispatchEvent(e)
        },
        unloadBizData: function() {
            var e = new bc("onunloadbizdata");
            this.dispatchEvent(e)
        },
        zoomIn: function(e) {
            this.setZoomIn(this.zoomLevel + 1, {
                zoomCenter: e
            })
        },
        zoomOut: function(e) {
            this.setZoomIn(this.zoomLevel - 1, {
                zoomCenter: e
            })
        },
        setMaxZoom: function(e) {
            if (this._renderType === "webgl") {
                this.config.maxZoom = e <= 21 ? e: 21
            } else {
                this.config.maxZoom = e <= 19 ? e: 19
            }
        },
        setMinZoom: function(e) {
            this.config.minZoom = e >= 3 ? e: 3
        },
        setCenterIn: function(e, i) {
            this.panToIn(e, i)
        },
        getRenderType: function() {
            return this._renderType
        },
        getSolarInfo: function(hT) {
            hT = hT || this._initDate;
            var T = bA(hT);
            var e = eo.convertLL2MC(new hu(T[0], T[1]));
            var h1 = e.latLng;
            var hW = bp.Projection.convertMC2LL(this.centerPoint);
            var hY = hT.getUTCHours();
            var h0 = hY + 24 * hW.lng / 360;
            var hZ = h0 - 12;
            var hX = hZ * 60 * 0.25;
            var hV = Math.asin(Math.sin(dL(hW.lat)) * Math.sin(dL(h1.lat)) + Math.cos(dL(hW.lat)) * Math.cos(dL(h1.lat)) * Math.cos(dL(hX)));
            var hU = Math.asin(Math.sin(dL(hX)) * Math.cos(dL(h1.lat)) / Math.cos(hV));
            var i = "north";
            if (hW.lat < h1.lat) {
                i = "south"
            }
            return {
                zenith: e,
                solarAltitude: hV,
                solarAzimuth: hU,
                centerPosition: i,
                position: e
            }
        },
        setDisplayOptions: function(T) {
            if (!T) {
                return
            }
            for (var e in this._displayOptions) {
                if (this._displayOptions.hasOwnProperty(e)) {
                    if (typeof T[e] === "boolean" || (e === "skyColors" && typeof T.skyColors === "object") || (e === "labelMargin" && typeof T.labelMargin === "number")) {
                        this._displayOptions[e] = T[e]
                    }
                }
            }
            var i = this.getMapType();
            if (i === db.NORMAL) {
                this.fire(new bc("ondisplayoptions_changed"))
            } else {
                if (i === db.EARTH && this._earth) {
                    this._earth.fire(new bc("ondisplayoptions_changed"))
                }
            }
        },
        getHorizonPosY: function(e) {
            if (!e || !this._webglMapCamera) {
                return null
            }
            var i = this._webglMapCamera.fromMCToScreenPixel(e.lng, e.lat, {
                heading: 0
            });
            return i.y
        },
        getIndoorInfo: function() {
            if (!this._indoorMgr) {
                return
            }
            return this._indoorMgr.getData()
        },
        showIndoor: function(e, T) {
            var i = new bc("onindoor_status_changed");
            i.uid = e;
            i.floor = T;
            this.fire(i)
        },
        addAreaSpot: function(e, T) {
            if (!e || e.length === 0) {
                return
            }
            T = T || {};
            this.areaSpots = this.areaSpots || {};
            var i = T.id || ("sp" + (this.temp.spotsGuid++));
            this.areaSpots[i] = {
                spot: e,
                userData: T.userData
            };
            var hT = this;
            eb.load("hotspot",
            function() {
                hT._asyncRegister()
            });
            return i
        },
        getAreaSpot: function(e) {
            if (this.areaSpots && this.areaSpots[e]) {
                return this.areaSpots[e]
            }
            return null
        },
        removeAreaSpot: function(e) {
            if (!e || !this.areaSpots[e]) {
                return
            }
            delete this.areaSpots[e]
        },
        clearAreaSpots: function() {
            this.areaSpots = {}
        },
        resetSpotStatus: function() {
            this.fire(new bc("onspot_status_reset"))
        },
        hightlightSpotByUid: function(e, T) {
            var i = new bc("onspot_highlight");
            i.uid = e;
            i.tilePosStr = T;
            this.fire(i)
        },
        setZoomIn: function(i, e) {
            e = e || {};
            this.zoomTo(i, e.zoomCenter || null, e)
        },
        getCurrentMaxTilt: function() {
            var e = this.zoomLevel;
            if (this.mapType === "B_EARTH_MAP") {
                return c9.MAX_DRAG_TILT_L2
            }
            if (this.config.restrictCenter === false) {
                return c9.MAX_DRAG_TILT
            }
            if (e >= 19) {
                return c9.MAX_DRAG_TILT
            } else {
                if (e <= 18) {
                    if (e < this._enableTiltZoom) {
                        if (e >= this._enableTiltZoom - 2) {
                            return (1 - (this._enableTiltZoom - e) / 2) * c9.MAX_DRAG_TILT_L2
                        }
                        return 0
                    }
                    return c9.MAX_DRAG_TILT_L2
                } else {
                    return (c9.MAX_DRAG_TILT - c9.MAX_DRAG_TILT_L2) * (e - 18) + c9.MAX_DRAG_TILT_L2
                }
            }
        },
        worldSize: function(i) {
            var e = i || this.zoomLevel;
            return c9.WORLD_SIZE_MC / this.getZoomUnits(e)
        },
        setTrafficOn: function() {
            this.addTileLayer(cf)
        },
        setTrafficOff: function() {
            this.removeTileLayer(cf)
        },
        showOverlayContainer: function() {
            this.setDisplayOptions({
                overlay: true
            })
        },
        hideOverlayContainer: function() {
            this.setDisplayOptions({
                overlay: false
            })
        },
        addLabelsToMapTile: function(T) {
            for (var e = 0; e < T.length; e++) {
                if (typeof T[e].type === "undefined") {
                    T[e].type = "fixed"
                }
                if (typeof T[e].rank !== "number") {
                    T[e].rank = 50000
                }
                T[e].pt = T[e].position;
                T[e].custom = true;
                T[e].processedInZoom = 0;
                this._customTileLabels.push(T[e])
            }
            this.dispatchEvent(new bc("onadd_tile_labels"))
        },
        removeLabelsFromMapTile: function(T) {
            for (var hT = 0; hT < T.length; hT++) {
                for (var e = 0; e < this._customTileLabels.length; e++) {
                    if (this._customTileLabels[e].uid === T[hT]) {
                        this._customTileLabels.splice(e, 1)
                    }
                }
            }
            this.dispatchEvent(new bc("onremove_tile_labels"))
        },
        clearLabels: function() {
            this._customTileLabels.length = 0;
            this.dispatchEvent(new bc("onclear_labels"))
        },
        loadMapStyleFiles: function(hU) {
            var i = this.config.style;
            var hT = this.config.styleUrl;
            var T = this;
            this._setTextRenderType();
            if (typeof i === "string" && !hT) {
                if (bp["FeatureStyle" + i]) {
                    T.fire(new bc("onstyle_loaded"));
                    hU();
                    return
                }
                ho.load(e4.getMapStyleFiles(i),
                function() {
                    if (T.config.style === i) {
                        bp["FeatureStyle" + i] = window.FeatureStyle;
                        bp["iconSetInfo" + i] = window.iconSetInfo_high;
                        bp.indoorStyle = window.indoorStyle;
                        T.fire(new bc("onstyle_loaded"));
                        hU()
                    }
                })
            } else {
                var e = i;
                f.init(T);
                f.getStyleJson(e,
                function(hW) {
                    var h1 = gf;
                    var h3 = bp.getGUID("custom");
                    T.config.mapStyleId = h3;
                    var hZ = {};
                    D.extend(hZ, hW);
                    var hX = Math.floor(T.getZoom());
                    window.styleCbk = function(h4, h5) {
                        if (h5 !== h0) {
                            return
                        }
                        if (typeof h4 === "string") {
                            h4 = JSON.parse(h4)
                        }
                        f.onStyleDataBack(h4, hX, h3, hZ, h1);
                        bp.customStyleLoaded = true;
                        T.fire(new bc("onstyle_loaded"));
                        hU()
                    };
                    bp.customStyleInfo = {
                        zoomRegion: {},
                        zoomStyleBody: [],
                        zoomFrontStyle: {}
                    };
                    var h2 = f.getStyleUrl(hW, h1, "styleCbk", hX);
                    var hV = h2.split("?")[0];
                    var h0 = h2.split("?")[1];
                    if (hT) {
                        hV = hT;
                        h0 = hV.split("?")[1]
                    }
                    if (!bp.iconSetInfoCustom) {
                        var hY = e4.getMapStyleFiles("default");
                        hY.splice(1, 1);
                        ho.load(hY,
                        function() {
                            bp.iconSetInfoCustom = window.iconSetInfo_high;
                            bp.indoorStyle = window.indoorStyle;
                            if (hV.indexOf("jsonp") > "-1") {
                                ho.load(hV)
                            } else {
                                bp.customStyleInfo.xhr = gB.post(hV, h0, styleCbk)
                            }
                        })
                    } else {
                        if (hV.indexOf("jsonp") > "-1") {
                            ho.load(hV)
                        } else {
                            bp.customStyleInfo.xhr = gB.post(hV, h0, styleCbk)
                        }
                    }
                })
            }
        },
        setCopyrightOffset: function(hT, i) {
            var T = new bc("oncopyrightoffsetchange", {
                logo: hT,
                cpy: i
            });
            this.dispatchEvent(T)
        },
        _setTextRenderType: function(e) {
            if (e) {
                this.config.textRenderType = e;
                return
            }
            if (this.config.textRenderType !== null) {
                return
            }
            if (f6()) {
                this.config.textRenderType = "canvas"
            } else {
                if (typeof this.config.style === "string") {
                    this.config.textRenderType = "image"
                } else {
                    this.config.textRenderType = "canvas"
                }
            }
        },
        destroy: function() {
            this._destroyed = true;
            this.fire(new bc("ondestroy"))
        },
        centerAndZoom: function(e, hV, T) {
            if (Object.prototype.toString.call(hV) !== "[object Undefined]") {
                hV = parseInt(hV)
            }
            if (typeof e === "string") {
                var hT = this;
                var hU = new W();
                hU.getPoint(e,
                function(hW) {
                    e = hW;
                    var hX = eo.convertLL2MC(e);
                    hT.centerAndZoomIn(hX, hV, T)
                })
            } else {
                var i = eo.convertLL2MC(e);
                this.centerAndZoomIn(i, hV, T)
            }
        },
        pointToPixel: function(e, T) {
            var i = eo.convertLL2MC(e);
            var hT = {};
            D.extend(hT, T);
            if (hT && hT.center) {
                hT.center = eo.convertLL2MC(hT.center)
            }
            return this.pointToPixelIn(i, hT)
        },
        pixelToPoint: function(T, i) {
            var hT = {};
            D.extend(hT, i);
            if (hT && hT.center) {
                hT.center = eo.convertLL2MC(hT.center)
            }
            var e = this.pixelToPointIn(T, hT);
            return eo.convertMC2LL(e)
        },
        pointToOverlayPixel: function(e, T) {
            var i = eo.convertLL2MC(e);
            var hT = {};
            D.extend(hT, T);
            if (hT && hT.center) {
                hT.center = eo.convertLL2MC(hT.center)
            }
            return this.pointToOverlayPixelIn(i, hT)
        },
        overlayPixelToPoint: function(T, i) {
            var hT = {};
            D.extend(hT, i);
            if (hT && hT.center) {
                hT.center = eo.convertLL2MC(hT.center)
            }
            var e = this.overlayPixelToPointIn(T, hT);
            return eo.convertMC2LL(e)
        },
        setViewport: function(T, hT) {
            var e;
            if (T && T.center) {
                e = {};
                D.extend(e, T);
                e.center = eo.convertLL2MC(e.center)
            } else {
                e = [];
                for (var hU = 0; hU < T.length; hU++) {
                    e[hU] = eo.convertLL2MC(T[hU])
                }
            }
            this.setViewportIn(e, hT)
        },
        getViewport: function(hV, hT) {
            var T;
            if (hV && hV.length) {
                T = [];
                for (var hU = 0; hU < hV.length; hU++) {
                    T[hU] = eo.convertLL2MC(hV[hU])
                }
            } else {
                if (hV instanceof dT) {
                    T = new dT(eo.convertLL2MC(hV.getSouthWest()), eo.convertLL2MC(hV.getNorthEast()));
                    T.setMinMax()
                }
            }
            var e = this.getViewportIn(T, hT);
            e.center = eo.convertMC2LL(e.center);
            return e
        },
        getDistance: function(hU, T) {
            var i = eo.convertLL2MC(hU);
            var hT = eo.convertLL2MC(T);
            var e = this.getDistanceIn(i, hT);
            return e
        },
        setCenter: function(e, T) {
            if (typeof e === "string") {
                var hT = this;
                var hU = new W();
                hU.getPoint(e,
                function(hV) {
                    e = hV;
                    var hW = eo.convertLL2MC(e);
                    hT.setCenterIn(hW, T)
                })
            } else {
                var i = eo.convertLL2MC(e);
                this.setCenterIn(i, T)
            }
        },
        setZoom: function(T, e) {
            var i = {};
            D.extend(i, e);
            if (i && i.zoomCenter) {
                i.zoomCenter = eo.convertLL2MC(i.zoomCenter)
            }
            this.setZoomIn(T, i)
        },
        flyTo: function(e, hT, T) {
            var i = eo.convertLL2MC(e);
            this.flyToIn(i, hT, T)
        },
        panTo: function(e, T) {
            var i = eo.convertLL2MC(e);
            this.panToIn(i, T)
        },
        getCenter: function() {
            var e = this.getCenterIn();
            return eo.convertMC2LL(e)
        },
        getBounds: function() {
            var e = this.getBoundsIn();
            var i = new dT(eo.convertMC2LL(e.getSouthWest()), eo.convertMC2LL(e.getNorthEast()));
            return i
        },
        setMapStyleV2: function(e) {
            this._setTextRenderType("canvas");
            this.setOptions({
                style: e
            })
        },
        startViewAnimation: function(T) {
            var e = T._options.delay;
            var i = this;
            setTimeout(function() {
                T._start(i)
            },
            e)
        },
        pauseViewAnimation: function(e) {
            e._pause(this)
        },
        continueViewAnimation: function(e) {
            e._continue(this)
        },
        cancelViewAnimation: function(e) {
            e._cancel(this)
        },
        getMapScreenshot: function() {
            return this._webglMapScene._painter._canvas.toDataURL()
        }
    });
    var db = {
        NORMAL: "B_NORMAL_MAP",
        EARTH: "B_EARTH_MAP",
        SATELLITE: "B_STREET_MAP"
    };
    bp.MapTypeId = db;
    window.BMAP_NORMAL_MAP = "B_NORMAL_MAP";
    window.BMAPGL_NORMAL_MAP = "B_NORMAL_MAP";
    window.BMAP_SATELLITE_MAP = "B_SATELLITE_MAP";
    window.BMAP_HYBRID_MAP = "B_STREET_MAP";
    window.BMAP_EARTH_MAP = "B_EARTH_MAP";
    window.BMAP_COORD_MERCATOR = 1;
    window.BMAP_SYS_DRAWER = 0;
    window.BMAP_SVG_DRAWER = 1;
    window.BMAP_VML_DRAWER = 2;
    window.BMAP_CANVAS_DRAWER = 3;
    var f = {
        environment: "jsapi",
        map: null,
        ontilesloaded: false,
        onstyle_loaded: false,
        init: function(i) {
            var e = this;
            e.map = i;
            this.changeCopyright();
            this.setEnvironment(e.map.config.style);
            this.resetEventListener()
        },
        resetEventListener: function() {
            var e = this;
            this.ontilesloaded = false;
            this.onstyle_loaded = false;
            e.map.addEventListener("ontilesloaded", e.checkLoadedStatus);
            e.map.addEventListener("onstyle_loaded", e.checkLoadedStatus)
        },
        checkLoadedStatus: function(i) {
            f[i.type] = true;
            if (f.ontilesloaded && f.onstyle_loaded) {
                this.dispatchEvent(new bc("onstylechangetilesloaded"));
                this.removeEventListener("ontilesloaded", f.checkLoadedStatus);
                this.removeEventListener("onstyle_loaded", f.checkLoadedStatus)
            }
        },
        changeCopyright: function() {
            var e = this;
            if (e.map.cpyCtrl) {
                e.map.cpyCtrl.hide();
                if (e.environment !== "customEditor") {
                    e.map.setCopyrightOffset(new ea(1, 1))
                }
            } else {
                e.map.addEventListener("oncopyrightaddend",
                function() {
                    e.map.cpyCtrl.hide();
                    if (e.environment !== "customEditor") {
                        e.map.setCopyrightOffset(new ea(1, 1))
                    }
                })
            }
        },
        setEnvironment: function(e) {
            if (e.customEditor) {
                this.environment = "customEditor";
                bK.map = this.map
            } else {
                if (e.sharing) {
                    this.environment = "sharing"
                } else {
                    if (e.preview) {
                        this.environment = "preview"
                    } else {
                        this.environment = "jsapi"
                    }
                }
            }
        },
        getStyleJson: function(hT, hV) {
            var hU = this;
            if (hT.styleJson) {
                hV && hV(hT.styleJson)
            } else {
                if (hT.styleId) {
                    var i = hT.styleId;
                    var e = (Math.random() * 100000).toFixed(0);
                    bp["_cbk_si_phpui" + e] = function(hX) {
                        var hW = [];
                        if (hX.result && hX.result["error"] === 0 && hX.content && hX.content["status"] === 0) {
                            hW = hU.parseJson(hX.content["data"]["json"]);
                            hV && hV(hW)
                        } else {
                            hV && hV("default")
                        }
                    };
                    bp["_cbk_si_api" + e] = function(hX) {
                        var hW = [];
                        if (hX.status === 0) {
                            if (hX.info) {
                                hW = hU.parseJson(hX.info["json"])
                            } else {
                                hW = hU.parseJson(hX.data["json"])
                            }
                            hV && hV(hW)
                        } else {
                            hV && hV("default")
                        }
                    };
                    var T = "";
                    switch (this.environment) {
                    case "jsapi":
                        T = eW.apiHost + "/?qt=custom_map&v=3.0&style_id=" + i + "&type=publish&ak=" + gf;
                        T += "&callback=" + eB + "._cbk_si_phpui" + e;
                        break;
                    case "sharing":
                        T += "/apiconsole/custommap/getSharingJson";
                        T += "?styleid=" + i + "&type=edit";
                        T += "&ck=" + eB + "._cbk_si_api" + e;
                        break;
                    case "preview":
                        T += "/apiconsole/custommap/getJson";
                        T += "?styleid=" + i + "&type=edit";
                        T += "&ck=" + eB + "._cbk_si_api" + e;
                        break
                    }
                    ho.load(T)
                } else {
                    hV && hV("default")
                }
            }
        },
        parseJson: function(T) {
            if (T === null || T === "") {
                return []
            }
            var i = {
                t: "featureType",
                e: "elementType",
                v: "visibility",
                c: "color",
                l: "lightness",
                s: "saturation",
                w: "weight",
                z: "level",
                h: "hue",
                f: "fontsize",
                zri: "curZoomRegionId",
                zr: "curZoomRegion"
            };
            var hU = {
                all: "all",
                g: "geometry",
                "g.f": "geometry.fill",
                "g.s": "geometry.stroke",
                l: "labels",
                "l.t.f": "labels.text.fill",
                "l.t.s": "labels.text.stroke",
                "l.t": "labels.text",
                "l.i": "labels.icon",
                "g.tf": "geometry.topfill",
                "g.sf": "geometry.sidefill"
            };
            var hT = T.split(",");
            var e = hT.map(function(hY) {
                var hX = hY.split("|").map(function(h4) {
                    var h2 = i[h4.split(":")[0]];
                    var h1 = (hU[h4.split(":")[1]] ? hU[h4.split(":")[1]] : h4.split(":")[1]);
                    switch (h1) {
                    case "poi":
                        h1 = "poilabel";
                        break;
                    case "districtlabel":
                        h1 = "districtlabel";
                        break
                    }
                    var h3 = {};
                    h3[h2] = h1;
                    return h3
                });
                var hV = hX[0];
                var h0 = 1;
                if (hX[1]["elementType"]) {
                    h0 = 2;
                    D.extend(hV, hX[1])
                }
                var hZ = {};
                for (var hW = h0; hW < hX.length; hW++) {
                    D.extend(hZ, hX[hW])
                }
                return D.extend(hV, {
                    stylers: hZ
                })
            });
            return e
        },
        getStyleUrl: function(T, hU, hT, e) {
            this.styleJson = T;
            var i = e4.apiHost + "/custom/v2/mapstyle?version=" + 4 + "&ak=" + hU + "&";
            i += "is_all=true&is_new=1&";
            i += "styles=" + encodeURIComponent(this.styleJson2styleStringV2(T, e));
            return i
        },
        styleJson2styleStringV2: function(e, hY) {
            var hZ = {
                featureType: "t",
                elementType: "e",
                visibility: "v",
                color: "c",
                lightness: "l",
                saturation: "s",
                weight: "w",
                level: "z",
                hue: "h",
                fontsize: "f"
            };
            var h1 = {
                all: "all",
                geometry: "g",
                "geometry.fill": "g.f",
                "geometry.stroke": "g.s",
                labels: "l",
                "labels.text.fill": "l.t.f",
                "labels.text.stroke": "l.t.s",
                "labels.text": "l.t",
                "labels.icon": "l.i",
                "geometry.topfill": "g.tf",
                "geometry.sidefill": "g.sf"
            };
            var h2 = [];
            for (var hT = this.map.getMinZoom(); hT <= this.map.getMaxZoom(); hT++) {
                bp.customStyleInfo.zoomFrontStyle[hT] = {}
            }
            bp.customStyleInfo.zoomFrontStyle.main = {};
            var T = false;
            for (var hT = 0; !! e[hT]; hT++) {
                var h0 = e[hT];
                if (this.isOnlyZoomStyler(h0)) {
                    continue
                }
                hY = this.getFrontZoom(h0, hY);
                if ((h0.featureType === "land" || h0.featureType === "all" || h0.featureType === "background") && typeof h0.elementType === "string" && (h0.elementType === "geometry" || h0.elementType === "geometry.fill" || h0.elementType === "all") && h0.stylers && !T) {
                    if (h0.stylers["color"]) {
                        bp.customStyleInfo.bmapLandColor = h0.stylers["color"]
                    }
                    if (h0.stylers["visibility"] && h0.stylers["visibility"] === "off") {
                        bp.customStyleInfo.bmapLandColor = "#00000000"
                    }
                    if (h0.featureType === "land") {
                        T = true
                    }
                }
                if (h0.featureType === "building" && typeof h0.elementType === "string" && h0.elementType === "geometry.fill") {
                    bp.customStyleInfo.buildingFill = true
                }
                if (h0.featureType === "roadarrow" && h0.elementType === "labels.icon" && h0.stylers) {
                    bp.customStyleInfo.zoomFrontStyle[hY]["bmapRoadarrowVisibility"] = h0.stylers["visibility"]
                }
                var hU = {};
                D.extend(hU, h0);
                var hW = hU.stylers;
                delete hU.stylers;
                D.extend(hU, hW);
                var hV = [];
                for (var hX in hZ) {
                    if (hU[hX]) {
                        if (this.isEditorZoomKeys(hX)) {
                            continue
                        }
                        if (hX === "elementType") {
                            hV.push(hZ[hX] + ":" + h1[hU[hX]])
                        } else {
                            switch (hU[hX]) {
                            case "poilabel":
                                hU[hX] = "poi";
                                break;
                            case "districtlabel":
                                hU[hX] = "label";
                                break
                            }
                            hV.push(hZ[hX] + ":" + hU[hX])
                        }
                    }
                }
                if (hV.length > 2) {
                    h2.push(hV.join("|"))
                }
            }
            return h2.join(",")
        },
        getFrontZoom: function(i, e) {
            var T = i.stylers["level"];
            if (T === undefined) {
                return "main"
            } else {
                return parseInt(T, 10)
            }
        },
        isZoomConfig: function(e) {
            var i = e.stylers["level"];
            if (i === undefined) {
                return false
            } else {
                return true
            }
        },
        isOnlyZoomStyler: function(e) {
            var i = {};
            D.extend(i, e.stylers);
            delete i.curZoomRegionId;
            delete i.curZoomRegion;
            delete i.level;
            if (D.isEmptyObject(i)) {
                return true
            } else {
                return false
            }
        },
        isSelectZoom: function(i, e) {
            var T = i.stylers["level"];
            if (T === undefined) {
                return true
            } else {
                if (T === e + "") {
                    return true
                } else {
                    return false
                }
            }
        },
        isEditorZoomKeys: function(e) {
            var i = {
                curZoomRegionId: true,
                curZoomRegion: true
            };
            if (i[e]) {
                return true
            } else {
                return false
            }
        },
        getZoomRegion: function(e, i) {
            var hT = e.stylers["level"];
            var T = {};
            D.extend(T, i);
            if (hT === undefined) {
                return T
            } else {
                T[parseInt(hT, 10)] = true;
                return T
            }
        },
        onStyleDataBack: function(hT, e, i, T, hV) {
            if (hT.status !== 0) {
                return
            }
            if (hT.data.style.length === 3) {
                if (!bp.customStyleInfo.baseFs) {
                    bp.customStyleInfo.baseFs = hT.data.style
                }
                bp.StyleBody = hT.data.style[2]
            } else {
                bp.StyleBody = hT.data.style
            }
            var hU = bp.customStyleInfo.baseFs;
            bp["FeatureStyle" + i] = hU;
            this.updateFrontFeatureStyle()
        },
        updateFrontFeatureStyle: function() {
            if (bp.customStyleInfo.zoomFrontStyle.main["bmapRoadarrowVisibility"]) {
                for (var e = this.map.getMinZoom(); e <= this.map.getMaxZoom(); e++) {
                    if (!bp.customStyleInfo.zoomFrontStyle[e]["bmapRoadarrowVisibility"]) {
                        bp.customStyleInfo.zoomFrontStyle[e]["bmapRoadarrowVisibility"] = bp.customStyleInfo.zoomFrontStyle.main["bmapRoadarrowVisibility"]
                    }
                }
            }
        }
    };
    var bK = {
        map: null,
        labelCache: {},
        calcDrawMc: function(T, i, e) {
            var hT = [];
            switch (i) {
            case "fill":
                hT = this.calcFill(T, e);
                break;
            case "line":
                break;
            case "building3d":
                hT = this.calcBuilding3d(T, e);
                break
            }
            return hT
        },
        calcFill: function(hU, T) {
            var hV = [];
            for (var hT = 0; hT < hU.length; hT = hT + 5) {
                var e = this.coordToMc({
                    x: hU[hT],
                    y: hU[hT + 1]
                },
                T.row, T.col, T.mercatorSize, T.baseTileSize);
                hV.push(e[0], e[1])
            }
            return hV
        },
        calcLine: function(hU, T) {
            var hV = [];
            var hW = new Int16Array(hU.buffer);
            for (var hT = 0; hT < hW.length; hT = hT + 10) {
                var e = this.coordToMc({
                    x: hW[hT] / 10,
                    y: hW[hT + 1] / 10
                },
                T.row, T.col, T.mercatorSize, T.baseTileSize);
                hV.push(e[0], e[1])
            }
            return hV
        },
        calcBuilding3d: function(hV, T) {
            var hW = [];
            var hT = {};
            for (var hU = 0; hU < hV.length / 2; hU = hU + 7) {
                if (hV[hU] === hV[hU - 7] && hV[hU + 1] === hV[hU - 6]) {
                    continue
                }
                if (hT[hV[hU].toString() + hV[hU + 1].toString()]) {
                    continue
                }
                hT[hV[hU].toString() + hV[hU + 1].toString()] = true;
                var e = this.coordToMc({
                    x: hV[hU],
                    y: hV[hU + 1]
                },
                T.row, T.col, T.mercatorSize, T.baseTileSize);
                hW.push(e[0], e[1])
            }
            return hW
        },
        coordToMc: function(hU, hT, e, i, T) {
            return [hU.x * (i / T) + e * i, hU.y * (i / T) + hT * i]
        },
        addDrawIntoAreaSpots: function(e, hU) {
            if (f.environment !== "customEditor") {
                return
            }
            if (!hU.styleIds) {
                return
            }
            for (var T = 0; T < hU.styleIds.length; T++) {
                var hX = 0;
                if (T > 0) {
                    hX = hU.verticesLength[T - 1]
                }
                end = hU.verticesLength[T];
                var hV = [];
                var hT = "";
                if (hU.vertex) {
                    hV = hU.vertex;
                    hT = "building3d"
                } else {
                    if (hU.data[0]) {
                        hV = hU.data[0];
                        hT = hU.type
                    } else {
                        continue
                    }
                }
                var hW = this.calcDrawMc(hV.slice(hX, end), hT, e);
                this.map.addAreaSpot(hW, {
                    userData: {
                        styleId: hU.styleIds[T],
                        type: "mapstyle"
                    }
                })
            }
        },
        addLabelIntoAreaSpots: function(e) {
            if (f.environment !== "customEditor") {
                return
            }
            for (var hU = 0; hU < e.length; hU++) {
                var hV = e[hU];
                for (var hT = 0; hT < hV.fixedLabel.length; hT++) {
                    var T = hV.fixedLabel[hT];
                    if (!T._mcBds) {
                        continue
                    }
                    var hW = [T._mcBds[0].lng, T._mcBds[0].lat, T._mcBds[0].lng, T._mcBds[1].lat, T._mcBds[1].lng, T._mcBds[1].lat, T._mcBds[1].lng, T._mcBds[0].lat];
                    if (!this.labelCache[hW.join()]) {
                        this.labelCache[hW.join()] = true;
                        this.map.addAreaSpot(hW, {
                            userData: {
                                styleId: T.styleId,
                                type: "mapstyle",
                                name: T.name
                            }
                        })
                    }
                }
            }
        }
    };
    function bS(i, e, hT, T) {
        this.cx = 3 * i;
        this.bx = 3 * (hT - i) - this.cx;
        this.ax = 1 - this.cx - this.bx;
        this.cy = 3 * e;
        this.by = 3 * (T - e) - this.cy;
        this.ay = 1 - this.cy - this.by;
        this.p1x = i;
        this.p1y = T;
        this.p2x = hT;
        this.p2y = T
    }
    bS.prototype.sampleCurveX = function(e) {
        return ((this.ax * e + this.bx) * e + this.cx) * e
    };
    bS.prototype.sampleCurveY = function(e) {
        return ((this.ay * e + this.by) * e + this.cy) * e
    };
    bS.prototype.sampleCurveDerivativeX = function(e) {
        return (3 * this.ax * e + 2 * this.bx) * e + this.cx
    };
    bS.prototype.solveCurveX = function(e, hY) {
        if (typeof hY === "undefined") {
            hY = 0.000001
        }
        var hX;
        var hW;
        var hU;
        var T;
        var hT;
        for (hU = e, hT = 0; hT < 8; hT++) {
            T = this.sampleCurveX(hU) - e;
            if (Math.abs(T) < hY) {
                return hU
            }
            var hV = this.sampleCurveDerivativeX(hU);
            if (Math.abs(hV) < 0.000001) {
                break
            }
            hU = hU - T / hV
        }
        hX = 0;
        hW = 1;
        hU = e;
        if (hU < hX) {
            return hX
        }
        if (hU > hW) {
            return hW
        }
        while (hX < hW) {
            T = this.sampleCurveX(hU);
            if (Math.abs(T - e) < hY) {
                return hU
            }
            if (e > T) {
                hX = hU
            } else {
                hW = hU
            }
            hU = (hW - hX) * 0.5 + hX
        }
        return hU
    };
    bS.prototype.solve = function(e, i) {
        return this.sampleCurveY(this.solveCurveX(e, i))
    };
    var co = {};
    function p(T) {
        var e = {
            duration: 1000,
            fps: 30,
            delay: 0,
            transition: co.linear,
            dropLastAnimation: false
        };
        if (T) {
            for (var hT in T) {
                e[hT] = T[hT]
            }
        }
        if (T.beginTime) {
            this._beginTime = T.beginTime
        }
        this._callbacks = [];
        this._options = e;
        if (e.delay) {
            var hU = this;
            setTimeout(function() {
                hU._doStart()
            },
            e.delay)
        } else {
            this._doStart()
        }
        this._pauseTime = 0
    }
    p.INFINITE = "INFINITE";
    p.prototype._doStart = function() {
        if (this._isPausing) {
            var e = performance.now() || new Date().getTime();
            this._pauseTime += e - this._isPausing;
            this._isPausing = undefined
        }
        if (window.requestAnimationFrame) {
            var i = this;
            i._timer = window.requestAnimationFrame(function(T) {
                i._loop(T)
            })
        } else {
            this._beginTime = new Date().getTime();
            if (this._options.duration === p.INFINITE) {
                this._endTime = null
            } else {
                this._endTime = this._beginTime + this._options.duration
            }
            this._loop()
        }
    };
    p.prototype._loop = function(hT) {
        var hW = this;
        hT = hT || new Date().getTime();
        hT = hT - this._pauseTime;
        if (!this._beginTime) {
            this._beginTime = hT
        }
        if (!this._endTime && typeof this._options.duration === "number") {
            this._endTime = this._beginTime + this._options.duration
        }
        if (hW._endTime !== null && hT >= hW._endTime) {
            if (hW._options.dropLastAnimation === false) {
                hW._options.render(hW._options.transition(1), 1, hT)
            }
            if (typeof hW._options.finish === "function") {
                hW._options.finish(hT, this)
            }
            for (var hV = 0,
            e = hW._callbacks.length; hV < e; hV++) {
                hW._callbacks[hV]()
            }
            return
        }
        var hU;
        if (typeof hW._options.duration === "number") {
            hU = (hT - hW._beginTime) / hW._options.duration;
            hW.schedule = hW._options.transition(hU)
        } else {
            hU = hT - hW._beginTime;
            hW.schedule = 0
        }
        hW._options.render(hW.schedule, hU, hT);
        if (!hW.terminative) {
            if (window.requestAnimationFrame) {
                hW._timer = requestAnimationFrame(function T(i) {
                    hW._loop(i)
                })
            } else {
                hW._timer = setTimeout(function() {
                    hW._loop()
                },
                1000 / hW._options.fps)
            }
        }
    };
    p.prototype.stop = function(i, e) {
        this.terminative = true;
        if (this._timer) {
            if (window.cancelAnimationFrame) {
                cancelAnimationFrame(this._timer)
            } else {
                clearTimeout(this._timer)
            }
            this._timer = null;
            if (typeof this._options.onStop === "function") {
                this._options.onStop(e)
            }
        }
        if (i) {
            this._endTime = this._beginTime;
            this._loop()
        }
    };
    p.prototype.pause = function() {
        if (!this._isPausing) {
            this.stop();
            this.terminative = undefined;
            this._isPausing = performance.now() || new Date().getTime()
        }
    };
    p.prototype.cancel = function() {
        this.stop()
    };
    p.prototype.append = function(e) {
        this._callbacks.push(e);
        return this
    };
    co = {
        _p1: 1,
        _p2: 1 * 1.525,
        linear: function(e) {
            return e
        },
        reverse: function(e) {
            return 1 - e
        },
        easeInQuad: function(e) {
            return e * e
        },
        easeInCubic: function(e) {
            return Math.pow(e, 3)
        },
        easeInBiquad: function(e) {
            return Math.pow(e, 4)
        },
        easeInBack: function(e) {
            return e * e * ((co._p1 + 1) * e - co._p1)
        },
        easeOutQuad: function(e) {
            return - (e * (e - 2))
        },
        easeOutCubic: function(e) {
            return Math.pow((e - 1), 3) + 1
        },
        easeOutBiquad: function(e) {
            return 1 - Math.pow((e - 1), 4)
        },
        easeOutBack: function(e) {
            return ((e = e - 1) * e * ((co._p1 + 1) * e + co._p1) + 1)
        },
        easeInOutQuad: function(e) {
            if (e < 0.5) {
                return e * e * 2
            } else {
                return - 2 * (e - 2) * e - 1
            }
        },
        easeInOutCubic: function(e) {
            if (e < 0.5) {
                return Math.pow(e, 3) * 4
            } else {
                return Math.pow(e - 1, 3) * 4 + 1
            }
        },
        easeInOutBiquad: function(e) {
            if (e < 0.5) {
                return Math.pow(e, 4) * 8
            } else {
                return 1 - (Math.pow(e - 1, 4) * 8)
            }
        },
        easeInOutSine: function(e) {
            return (1 - Math.cos(Math.PI * e)) / 2
        }
    };
    co.ease = (function() {
        var e = new bS(0.4, 0, 0.6, 1);
        return function(i) {
            return e.solve(i)
        }
    })();
    co["ease-in"] = co.easeInQuad;
    co["ease-out"] = co.easeOutQuad;
    var fl = {
        start: function(hZ) {
            var hT = hZ.el;
            var e = hZ.style;
            var i = hZ.startValue;
            var hW = hZ.endValue;
            var hU = hZ.duration || 1400;
            var hV = hZ.transition || co.linear;
            var hY = hZ.callback;
            var hX = hW - i;
            var T = hZ.unit || "";
            return new p({
                fps: 60,
                duration: hU,
                transition: hV,
                render: function(h0) {
                    hT.style[e] = i + hX * h0 + T
                },
                finish: function() {
                    hY && hY()
                }
            })
        }
    };
    function cN(hU, T) {
        ee.call(this);
        this.keyframes = hU;
        var e = {
            duration: 1000,
            delay: 0,
            transition: co.linear,
            interation: 1
        };
        if (T) {
            for (var hT in T) {
                e[hT] = T[hT]
            }
        }
        this._options = e
    }
    cN.inherits(ee, "ViewAnimation");
    cN.prototype._start = function(hV) {
        var T = this;
        T.map = hV;
        var hU = new bc("onanimationstart");
        T.dispatchEvent(hU);
        this._initStatus(T.map);
        var hT = this._options.duration;
        var i = this._options.interation;
        var hW = this._options.transition;
        var hX = 0;
        T.poiStatus = T.map._displayOptions.poi;
        if (T.poiStatus) {
            T.map.setDisplayOptions({
                poi: false
            })
        }
        T.map.viewAnimationTime = new Date().getTime();
        this.animation = new p({
            duration: hT,
            transition: hW,
            start: function(e) {},
            render: function(hY, e) {
                if (hY === 0) {
                    T._initStatus(T.map)
                } else {
                    T._setViewByRate(hY)
                }
            },
            finish: function(hZ, hY) {
                if (++hX < i || i === "INFINITE") {
                    var h0 = new bc("onanimationiterations");
                    T.dispatchEvent(h0);
                    delete hY._beginTime;
                    delete hY._endTime;
                    hY._doStart()
                } else {
                    var h0 = new bc("onanimationend");
                    T.dispatchEvent(h0);
                    delete T.map.viewAnimationTime;
                    T.map.setDisplayOptions({
                        poi: T.poiStatus
                    })
                }
            }
        })
    };
    cN.prototype._getTotalDuration = function(e, i) {
        if (e === p.INFINITE) {
            return p.INFINITE
        } else {
            return e * i
        }
    };
    cN.prototype._initStatus = function(e) {
        if (this.keyframes[0]) {
            e.setCenter(this.keyframes[0].center, {
                noAnimation: true
            });
            e.setZoom(this.keyframes[0].zoom, {
                noAnimation: true
            });
            e.setTilt(this.keyframes[0].tilt, {
                noAnimation: true
            });
            e.setHeading(this.keyframes[0].heading, {
                noAnimation: true
            })
        }
    };
    cN.prototype._setViewByRate = function(hT) {
        for (var e = 0; e < this.keyframes.length - 1; e++) {
            var hU = this.keyframes[e];
            var T = this.keyframes[e + 1];
            if (hT >= hU.percentage && hT < T.percentage) {
                this.map.setHeading(this._getHeadingDelta(hU, T, hT), {
                    noAnimation: true
                });
                this.map.setTilt(this._getTiltDelta(hU, T, hT), {
                    noAnimation: true
                });
                this.map.setCenter(this._getCenterDelta(hU, T, hT), {
                    noAnimation: true
                });
                this.map.setZoom(this._getZoomDelta(hU, T, hT), {
                    noAnimation: true
                })
            }
        }
    };
    cN.prototype._getHeadingDelta = function(T, i, e) {
        var hU = (e - T.percentage) / (i.percentage - T.percentage);
        var hT = T.heading + (i.heading - T.heading) * hU;
        return hT
    };
    cN.prototype._getTiltDelta = function(T, i, e) {
        var hU = (e - T.percentage) / (i.percentage - T.percentage);
        var hT = T.tilt + (i.tilt - T.tilt) * hU;
        return hT
    };
    cN.prototype._getCenterDelta = function(T, i, e) {
        var hU = (e - T.percentage) / (i.percentage - T.percentage);
        var hT = T.center.add(i.center.sub(T.center).mult(hU));
        return hT
    };
    cN.prototype._getZoomDelta = function(hT, T, i) {
        var hU = (i - hT.percentage) / (T.percentage - hT.percentage);
        var e = hT.zoom + (T.zoom - hT.zoom) * hU;
        return e
    };
    cN.prototype._pause = function(e) {
        this.animation.pause()
    };
    cN.prototype._continue = function(e) {
        this.animation._doStart()
    };
    cN.prototype._cancel = function(T) {
        T.setDisplayOptions({
            poi: this.poiStatus
        });
        this.animation.cancel();
        delete T.viewAnimationTime;
        var i = new bc("onanimationcancel");
        this.dispatchEvent(i)
    };
    var ev = undefined;
    var c1 = {
        is64Bit: function() {
            if (/Windows/.test(navigator.userAgent)) {
                if (/Win64; x64/.test(navigator.userAgent)) {
                    return true
                } else {
                    if (/WOW64/.test(navigator.userAgent)) {
                        return true
                    } else {
                        return false
                    }
                }
            }
            return true
        },
        isIOS112: function cR(e) {
            return /11_2/.test(navigator.userAgent)
        },
        canUseWebAssembly: function(i) {
            if (ev !== undefined) {
                i && i(ev);
                return
            }
            if (window.WebAssembly && this.is64Bit()) {
                if (window.disableWebAssembly === true) {
                    ev = false;
                    i && i(ev)
                } else {
                    if (!bw()) {
                        ev = true;
                        i && i(ev)
                    } else {
                        if (this.isIOS112()) {
                            ev = false;
                            i && i(ev)
                        } else {
                            var e = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 133, 128, 128, 128, 0, 1, 96, 0, 1, 127, 3, 130, 128, 128, 128, 0, 1, 0, 4, 132, 128, 128, 128, 0, 1, 112, 0, 0, 5, 131, 128, 128, 128, 0, 1, 0, 1, 6, 129, 128, 128, 128, 0, 0, 7, 145, 128, 128, 128, 0, 2, 6, 109, 101, 109, 111, 114, 121, 2, 0, 4, 109, 97, 105, 110, 0, 0, 10, 138, 128, 128, 128, 0, 1, 132, 128, 128, 128, 0, 0, 65, 42, 11]);
                            WebAssembly.instantiate(e).then(function(T) {
                                ev = true;
                                i && i(ev)
                            },
                            function(T) {
                                ev = false;
                                i && i(ev)
                            })
                        }
                    }
                }
            } else {
                ev = false;
                i && i(ev)
            }
        }
    };
    var dx = {};
    bp.Utils = dx;
    function de(e) {
        return e.style
    }
    function dn(i) {
        if (D.Browser.ie > 0) {
            i.unselectable = "on";
            i.selectstart = function() {
                return false
            };
            i.onmousedown = function(T) {
                T.preventDefault();
                return false
            }
        } else {
            var e = de(i);
            e.MozUserSelect = "none";
            e.WebkitUserSelect = "none";
            i.addEventListener("mousedown",
            function(T) {
                T.preventDefault()
            },
            false)
        }
    }
    function hf(e) {
        return e && e.parentNode && e.parentNode.nodeType !== 11
    }
    function dJ(i, e) {
        i.insertAdjacentHTML("beforeEnd", e);
        return i.lastChild
    }
    function hD(T, i) {
        var hT = document.createElement("div");
        hT.innerHTML = i;
        var e = hT.childNodes[0];
        return T.parentNode.insertBefore(e, T)
    }
    function h(i) {
        i = i || window.event;
        i.stopPropagation ? i.stopPropagation() : i.cancelBubble = true
    }
    function bV(i) {
        i = i || window.event;
        i.preventDefault ? i.preventDefault() : i.returnValue = false;
        return false
    }
    function dc(i) {
        h(i);
        return bV(i)
    }
    function fK() {
        var e = document.documentElement;
        var i = document.body;
        if (e && (e.scrollTop || e.scrollLeft)) {
            return [e.scrollTop, e.scrollLeft]
        } else {
            if (i) {
                return [i.scrollTop, i.scrollLeft]
            } else {
                return [0, 0]
            }
        }
    }
    function fr(hU) {
        if (!hU) {
            return
        }
        hU.onload = hU.onerror = null;
        var T = hU.attributes,
        hT, e, hV;
        if (T) {
            e = T.length;
            for (hT = 0; hT < e; hT += 1) {
                hV = T[hT].name;
                if (typeof hU[hV] === "function") {
                    hU[hV] = null
                }
            }
        }
        T = hU.children;
        if (T) {
            e = T.length;
            for (hT = 0; hT < e; hT += 1) {
                fr(hU.children[hT])
            }
        }
    }
    function bH(i, hW, hV) {
        var hU = hW.lng - hV.lng;
        var hT = hW.lat - hV.lat;
        if (hU === 0) {
            return Math.abs(i.lng - hW.lng)
        }
        if (hT === 0) {
            return Math.abs(i.lat - hW.lat)
        }
        var T = hT / hU;
        var e = hW.lat - T * hW.lng;
        return Math.abs(T * i.lng - i.lat + e) / Math.sqrt(T * T + 1)
    }
    function gX(i, e) {
        if (!i || !e) {
            return
        }
        return Math.round(Math.sqrt(Math.pow(i.x - e.x, 2) + Math.pow(i.y - e.y, 2)))
    }
    function bQ(i, e) {
        if (!i || !e) {
            return 0
        }
        return Math.round(Math.sqrt(Math.pow(i.lng - e.lng, 2) + Math.pow(i.lat - e.lat, 2)))
    }
    function c2(T, i) {
        var e = Math.round((T.x + i.x) / 2);
        var hT = Math.round((T.y + i.y) / 2);
        return new ek(e, hT)
    }
    function hl(e, T) {
        var i = [];
        T = T ||
        function(hU) {
            return hU
        };
        for (var hT in e) {
            i.push(hT + "=" + T(e[hT]))
        }
        return i.join("&")
    }
    function U(T, i, hV) {
        var hW = document.createElement(T);
        if (hV) {
            hW = document.createElementNS(hV, T)
        }
        i = i || {};
        for (var hT in i) {
            var hU = {
                "for": "htmlFor",
                "class": "cssClass"
            } [hT] || hT;
            if (hT === "style") {
                hW.style.cssText = i[hT];
                continue
            }
            if (hT === "class") {
                D.ac(hW, i[hT]);
                continue
            }
            if (hW.setAttribute) {
                hW.setAttribute(hU, i[hT])
            } else {
                try {
                    hW[hU] = i[hT]
                } catch(hW) {}
            }
        }
        return hW
    }
    function fZ(e) {
        if (e.currentStyle) {
            return e.currentStyle
        } else {
            if (e.ownerDocument && e.ownerDocument.defaultView) {
                return e.ownerDocument.defaultView.getComputedStyle(e, null)
            }
        }
    }
    function bW(e) {
        return typeof e === "function"
    }
    var hq = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    function g3(hU) {
        var T = "";
        var h1;
        var hZ;
        var hX = "";
        var h0;
        var hY;
        var hW;
        var hV = "";
        var hT = 0;
        var e = /[^A-Za-z0-9+/ = ]/g;
        if (!hU || e.exec(hU)) {
            return hU
        }
        hU = hU.replace(/[^A-Za-z0-9+/ = ]/g,
        ""); do {
            h0 = hq.indexOf(hU.charAt(hT++));
            hY = hq.indexOf(hU.charAt(hT++));
            hW = hq.indexOf(hU.charAt(hT++));
            hV = hq.indexOf(hU.charAt(hT++));
            h1 = (h0 << 2) | (hY >> 4);
            hZ = ((hY & 15) << 4) | (hW >> 2);
            hX = ((hW & 3) << 6) | hV;
            T = T + String.fromCharCode(h1);
            if (hW !== 64) {
                T = T + String.fromCharCode(hZ)
            }
            if (hV !== 64) {
                T = T + String.fromCharCode(hX)
            }
            h1 = hZ = hX = "";
            h0 = hY = hW = hV = ""
        } while ( hT < hU . length );
        return T
    } (function(e) {
        if (!e.Utils) {
            e.Utils = {}
        }
        var i = e.Utils;
        i.format = (function() {
            function T(hW, hV, hX) {
                var hU = hX[ + hV];
                return typeof(hU) === "function" ? hU(hV) : hU
            }
            function hT(hW, hV, hX) {
                var hZ = hV;
                var h0 = [];
                var hU = hV.split(":");
                if (hU.length === 2) {
                    hZ = hU[0];
                    h0.push(hU[1])
                }
                var hY = typeof(hX[hZ]);
                if (hY === "function") {
                    return hX[hZ].apply(undefined, h0)
                } else {
                    if (hY === "undefined") {
                        return hW
                    } else {
                        return String(hX[hZ])
                    }
                }
            }
            return function(hU, hV) {
                var hX = hV.splice ? T: hT;
                var hW = hU.splice ? hU.join("") : hU;
                return hW.replace(/{([a-zA-Z0-9_$:.]+)}/g,
                function(hZ, hY) {
                    return hX(hZ, hY, hV)
                })
            }
        })();
        i.ErrorMonitor = function(hT, T, hU) {};
        c1.canUseWebAssembly(function(T) {
            i.canUseWebAssembly = T
        })
    })(bp);
    function f6() {
        return (bw() || eC())
    }
    function bw() {
        var e = navigator.userAgent;
        if (e.indexOf("iPhone") > -1 || e.indexOf("iPad") > -1) {
            return true
        }
        return false
    }
    function eC() {
        var e = navigator.userAgent;
        if (e.indexOf("Android") > -1) {
            return true
        }
        return false
    }
    function dL(e) {
        return e * Math.PI / 180
    }
    function df(e) {
        return e / Math.PI * 180
    }
    function dP(e, hU) {
        var hT = Math.pow(10, hU);
        if (typeof e === "number") {
            return Math.round(e * hT) / hT
        }
        for (var T = 0; T < e.length; T++) {
            e[T] = dP(e[T], hU)
        }
        return e
    }
    function fG(T, i, e) {
        if (T < i) {
            T = i
        } else {
            if (T > e) {
                T = e
            }
        }
        return T
    }
    function f0(e, i) {
        while (e < 0) {
            e += i
        }
        return e % i
    }
    function d9(i, e) {
        return (i >= 0 && e >= 0) || (i < 0 && e < 0)
    }
    function a6(i) {
        if (i._gl) {
            return i._gl
        }
        var e = {
            alpha: true,
            antialias: false,
            failIfMajorPerformanceCaveat: false,
            preserveDrawingBuffer: false,
            stencil: false
        };
        var T = i.getContext("webgl", e) || i.getContext("experimental-webgl", e);
        i._gl = T;
        return T
    }
    function eL(hT, T) {
        for (var e = 0; e < T.length; e++) {
            D.on(hT, T[e], h)
        }
    }
    function hS(i, T, e) {
        T[e] = i.getUniformLocation(T, e)
    }
    function e2(hU, hV, e, T, i) {
        var hT = "";
        switch (i) {
        case "mat4":
            hU.uniformMatrix4fv(hV[e], false, T);
            return;
        case "v3":
            hT = "uniform3fv";
            break;
        case "f":
            hT = "uniform1f";
            break;
        case "i":
            hT = "uniform1i";
            break
        }
        if (hT === "") {
            throw "error"
        }
        hU[hT](hV[e], T)
    }
    function L(h1, e) {
        while (h1 < 0) {
            h1 += 360
        }
        h1 = h1 % 360;
        var hT = e.width;
        var h0 = e.height;
        var hW = hT;
        var T = h0;
        if (h1 < 90) {
            var i = Math.sin(dL(h1)) * hT;
            var hY = Math.sin(dL(h1)) * h0;
            var hZ = Math.cos(dL(h1)) * hT;
            var hV = Math.cos(dL(h1)) * h0;
            var hW = Math.ceil(hZ + hY);
            var T = Math.ceil(i + hV)
        } else {
            if (h1 < 180) {
                var h1 = h1 - 90;
                var i = Math.sin(dL(h1)) * hT;
                var hY = Math.sin(dL(h1)) * h0;
                var hZ = Math.cos(dL(h1)) * hT;
                var hV = Math.cos(dL(h1)) * h0;
                var hW = Math.ceil(i + hV);
                var T = Math.ceil(hZ + hY)
            } else {
                if (h1 < 270) {
                    var h1 = h1 - 180;
                    var i = Math.sin(dL(h1)) * hT;
                    var hY = Math.sin(dL(h1)) * h0;
                    var hZ = Math.cos(dL(h1)) * hT;
                    var hV = Math.cos(dL(h1)) * h0;
                    var hW = Math.ceil(hZ + hY);
                    var T = Math.ceil(i + hV)
                } else {
                    var h1 = h1 - 270;
                    var i = Math.sin(dL(h1)) * hT;
                    var hY = Math.sin(dL(h1)) * h0;
                    var hZ = Math.cos(dL(h1)) * hT;
                    var hV = Math.cos(dL(h1)) * h0;
                    var hW = Math.ceil(i + hV);
                    var T = Math.ceil(hZ + hY)
                }
            }
        }
        var hX = hW - hT;
        var hU = T - h0;
        return [0 - hX / 2, 0 - hU / 2, hT + hX / 2, h0 + hU / 2]
    }
    function gG(e) {
        if (e.toDataURL() === gG._blankData) {
            return true
        }
        return false
    }
    function gw(hU, hT, T) {
        var i = [T.lng - hU.lng, T.lat - hU.lat];
        var e = [hT.lng - hU.lng, hT.lat - hU.lat];
        return i[0] * e[1] - i[1] * e[0]
    }
    function ci(hV, hU, T) {
        var e;
        var hW;
        var hT;
        var i;
        if (hV.lng < hU.lng) {
            e = hV.lng;
            hT = hU.lng
        } else {
            e = hU.lng;
            hT = hV.lng
        }
        if (hV.lat < hU.lat) {
            hW = hV.lat;
            i = hU.lat
        } else {
            hW = hU.lat;
            i = hV.lat
        }
        if (T.lng < e || T.lng > hT || T.lat < hW || T.lat > i) {
            return false
        }
        return true
    }
    function gy(hX, hW, hV, hT) {
        var hU = gw(hV, hT, hX);
        var T = gw(hV, hT, hW);
        var i = gw(hX, hW, hV);
        var e = gw(hX, hW, hT);
        if (hU * T < 0 && i * e < 0) {
            return true
        } else {
            if (hU === 0 && ci(hV, hT, hX)) {
                return true
            } else {
                if (T === 0 && ci(hV, hT, hW)) {
                    return true
                } else {
                    if (i === 0 && ci(hX, hW, hV)) {
                        return true
                    } else {
                        if (e === 0 && ci(hX, hW, hT)) {
                            return true
                        } else {
                            return false
                        }
                    }
                }
            }
        }
    }
    function hB(T, i) {
        var e = i.parentNode;
        if (e.lastChild === i) {
            e.appendChild(T)
        } else {
            e.insertBefore(T, i.nextSibling)
        }
    }
    function hH(hZ, h0) {
        if (h0 === 0) {
            return hZ
        }
        var hY = 0;
        var hW = 0;
        if (!hZ) {
            throw "异常"
        }
        if (hZ.length === 0) {
            return []
        }
        for (var hU = 1,
        T = hZ.length - 1; hU < T; hU++) {
            var hX = bH(hZ[hU], hZ[0], hZ[hZ.length - 1]);
            if (hX > hY) {
                hW = hU;
                hY = hX
            }
        }
        var e = [];
        if (hY >= h0) {
            var h2 = hZ.slice(0, hW);
            var h1 = hZ.slice(hW, hZ.length);
            var hV = hH(h2, h0);
            var hT = hH(h1, h0);
            for (var hU = 0,
            T = hV.length; hU < T; hU++) {
                e.push(hV[hU])
            }
            for (var hU = 0,
            T = hT.length; hU < T; hU++) {
                e.push(hT[hU])
            }
        } else {
            e.push(hZ[0]);
            e.push(hZ[hZ.length - 1])
        }
        return e
    }
    function eD(e) {
        if (Math.log2) {
            return Math.log2(e)
        }
        return Math.log(e) / Math.LN2
    }
    function bs(T, i, e) {
        return Math.min(e, Math.max(i, T))
    }
    function cK(e, i) {
        if (!i) {
            return e
        }
        var hV = i[0];
        var hU = i[1];
        var hT = i[2];
        var T = i[3];
        var hX = [];
        var hW = [];
        hX[0] = T * e[0] + hT * e[2];
        hX[1] = e[1];
        hX[2] = -hT * e[0] + T * e[2];
        hW[0] = hX[0];
        hW[1] = hU * hX[1] - hV * hX[2];
        hW[2] = hV * hX[1] + hU * hX[2];
        return hW
    }
    var aR = Math.PI / 180;
    var F = 180 / Math.PI;
    function bA(T) {
        var i = (T - Date.UTC(2000, 0, 1, 12)) / 86400000 / 36525;
        var e = (d3.utcDay.floor(T) - T) / 86400000 * 360 - 180;
        return [e - V(i) * F, gD(i) * F]
    }
    function V(hT) {
        var hU = f8(hT);
        var i = dM(hT);
        var T = ak(hT);
        var hV = Math.tan(f3(hT) / 2);
        hV *= hV;
        return hV * Math.sin(2 * T) - 2 * hU * Math.sin(i) + 4 * hU * hV * Math.sin(i) * Math.cos(2 * T) - 0.5 * hV * hV * Math.sin(4 * T) - 1.25 * hU * hU * Math.sin(2 * i)
    }
    function gD(e) {
        return Math.asin(Math.sin(f3(e)) * Math.sin(g0(e)))
    }
    function g0(e) {
        return bi(e) - (0.00569 + 0.00478 * Math.sin((125.04 - 1934.136 * e) * aR)) * aR
    }
    function bi(e) {
        return ak(e) + dS(e)
    }
    function dM(e) {
        return (357.52911 + e * (35999.05029 - 0.0001537 * e)) * aR
    }
    function ak(i) {
        var e = (280.46646 + i * (36000.76983 + i * 0.0003032)) % 360;
        return (e < 0 ? e + 360 : e) / 180 * Math.PI
    }
    function dS(i) {
        var e = dM(i);
        return (Math.sin(e) * (1.914602 - i * (0.004817 + 0.000014 * i)) + Math.sin(e + e) * (0.019993 - 0.000101 * i) + Math.sin(e + e + e) * 0.000289) * aR
    }
    function f3(e) {
        return fd(e) + 0.00256 * Math.cos((125.04 - 1934.136 * e) * aR) * aR
    }
    function fd(e) {
        return (23 + (26 + (21.448 - e * (46.815 + e * (0.00059 - e * 0.001813))) / 60) / 60) * aR
    }
    function f8(e) {
        return 0.016708634 - e * (0.000042037 + 1.267e-7 * e)
    }
    function a7() {
        return window.devicePixelRatio || 1
    }
    function aG(T) {
        var i;
        var e;
        var hT;
        if (T >= 0) {
            hT = Math.floor(T / 65536) * 65536;
            i = hT;
            e = T - hT
        } else {
            hT = Math.floor( - T / 65536) * 65536;
            i = -hT;
            e = T + hT
        }
        return [i, e]
    }
    function H(e) {
        if (e.lng >= 0 && e.lat >= 0) {
            return new hu(e.lng - 10000000, e.lat - 6000000)
        }
        if (e.lng >= 0 && e.lat < 0) {
            return new hu(e.lng - 10000000, e.lat + 6000000)
        }
        if (e.lng < 0 && e.lat >= 0) {
            return new hu(e.lng + 10000000, e.lat - 6000000)
        }
        if (e.lng < 0 && e.lat < 0) {
            return new hu(e.lng + 10000000, e.lat + 6000000)
        }
    }
    var fC = null;
    if (window.performance && window.performance.now) {
        fC = function() {
            return performance.now()
        }
    } else {
        if (Date.now) {
            fC = function() {
                return Date.now()
            }
        } else {
            fC = function() {
                return (new Date).getTime()
            }
        }
    }
    function bM(hT, e, i) {
        var T = "mouseWheel";
        if (D.Platform.macintosh) {
            if (!isNaN(hT) && (hT < 10 || hT !== 120) && (e % 1 === 0 && e < 5)) {
                T = "padScroll"
            }
            if (D.Browser.firefox && (e % 1 === 0 && e < 5 && i === 0)) {
                T = "padScroll"
            }
        }
        if (D.Browser.safari && hT === 12) {
            T = "mouseWheel"
        }
        return T
    }
    function dh(h2, hX) {
        var h1 = h2[0];
        var h0 = h2[1];
        var hT = false;
        for (var hW = 0,
        hV = hX.length - 2; hW < hX.length; hW += 2) {
            var hZ = hX[hW];
            var hU = hX[hW + 1];
            var hY = hX[hV];
            var T = hX[hV + 1];
            var e = ((hU > h0) !== (T > h0)) && (h1 < (hY - hZ) * (h0 - hU) / (T - hU) + hZ);
            if (e) {
                hT = !hT
            }
            hV = hW
        }
        return hT
    }
    function cF(T, e, i, hT) {
        hT = hT || 0.4;
        if (T > i) {
            T = Math.pow(T - i + 1, hT) + i - 1
        } else {
            if (T < e) {
                T = e - Math.pow(e - T + 1, hT) + 1
            }
        }
        return T
    }
    function gm(hX) {
        var hV = "";
        for (var T = 0; T < hX.length; T++) {
            var hY = hX.charCodeAt(T) << 1;
            var e = hY.toString(2);
            var hU = e.length;
            var h1 = e;
            if (hU < 8) {
                h1 = "00000000" + e;
                h1 = h1.substr(e.length, 8)
            }
            hV += h1
        }
        var hZ = 5 - hV.length % 5;
        var hT = [];
        for (var T = 0; T < hZ; T++) {
            hT[T] = "0"
        }
        hV = hT.join("") + hV;
        var h0 = [];
        for (var T = 0; T < hV.length / 5; T++) {
            var hY = hV.substr(T * 5, 5);
            var hW = parseInt(hY, 2) + 50;
            h0.push(String.fromCharCode(hW))
        }
        return h0.join("") + hZ.toString()
    }
    function aE(T, i) {
        var e = bp.TILE_VERSION || window.TILE_VERSION;
        if (!e || !e[T] || !e[T][i] || !e[T][i].version || !e[T][i].updateDate) {
            e = e4.tvc
        }
        return {
            ver: e[T][i].version,
            udt: e[T][i].updateDate
        }
    }
    function fA() {
        var e = bp.MSV || window.MSV;
        if (!e || !e.mapstyle || !e.mapstyle.updateDate || !e.mapstyle.version) {
            e = e4.msv
        }
        return {
            ver: e.mapstyle.version,
            udt: e.mapstyle.updateDate
        }
    }
    function es(e, hU) {
        var hT = e.slice(0);
        for (var T = 0; T < hT.length; T++) {
            hT[T] += hU
        }
        return hT
    }
    var a5 = null;
    function bz(e) {
        if (a5) {
            return
        }
        e.fire(new bc("onloadtile"));
        a5 = setTimeout(function() {
            a5 = null
        },
        1000)
    }
    function e1() {
        if (cs("//map.baidu.com") || cs("//maps.baidu.com") || cs("//ditu.baidu.com")) {
            return true
        }
        return false
    }
    dx.inMapHost = e1();
    if (typeof window._inMapHost === "boolean") {
        dx.inMapHost = window._inMapHost
    }
    function cs(i) {
        var T = window.location;
        var e = document.createElement("a");
        e.href = i;
        return e.hostname === T.hostname && e.port === T.port && e.protocol === T.protocol
    }
    function eb() {}
    D.extend(eb, {
        Request: {
            INITIAL: -1,
            WAITING: 0,
            LOADED: 1,
            COMPLETED: 2
        },
        Dependency: {
            poly: ["marker"],
            hotspot: ["poly"],
            infowindow: ["marker", "hotspot"],
            simpleInfowindow: ["marker"],
            tools: ["marker", "poly"],
            mapgl: ["glcommon", "poly"],
            earth: ["glcommon"],
            control: ["scommon"],
            scommon: [],
            localSearch: ["scommon"],
            otherSearch: ["scommon"],
            route: ["scommon"],
            buslineSearch: ["route"],
            autocomplete: ["scommon"]
        },
        MD5Mapping: {
            control: "dypiur",
            marker: "pihjdc",
            poly: "adbmm2",
            infowindow: "i23yex",
            simpleInfowindow: "bxnomd",
            hotspot: "rctc2j",
            menu: "fachat",
            tools: "dn0xfr",
            oppc: "133cvw",
            oppcgl: "u5jh4a",
            mapgl: "bv4znh",
            markeranimation: "axdri1",
            earth: "tdchgv",
            glcommon: "5i3khj",
            localSearch: "qyws3t",
            scommon: "phcj0k",
            otherSearch: "z11gb2",
            route: "eulmaa",
            buslineSearch: "0qoca1",
            autocomplete: "1cakgu"
        },
        Config: {
            baseUrl: e4.apiHost + "/getmodules?v=1.0&type=webgl",
            jsModPath: (dx.inMapHost ? "": e4.mapHost) + "/res/newui/",
            timeout: 5000
        },
        delayFlag: false,
        Module: {
            modules: {},
            modulesNeedToLoad: []
        },
        _getMd5ModsStr: function(hV) {
            var hU = [];
            for (var hX = 0,
            T = hV.length; hX < T; hX++) {
                var hW = hV[hX];
                var e = this.MD5Mapping[hW];
                var hT = "$" + hW + "$";
                if (e !== hT) {
                    hU.push(hW + "_" + e)
                }
            }
            return hU.join(",")
        },
        load: function(i, hV, hT) {
            var e = this.getModuleInfo(i);
            if (e.status === this.Request.COMPLETED) {
                if (hT === true) {
                    hV()
                }
            } else {
                if (e.status === this.Request.INITIAL) {
                    this.combine(i);
                    this.addToLoadQueue(i);
                    var T = this;
                    if (T.delayFlag === false) {
                        T.delayFlag = true;
                        setTimeout(function() {
                            var hW = T.Config.baseUrl + "&mod=" + T._getMd5ModsStr(T.Module.modulesNeedToLoad);
                            ho.load(hW);
                            T.Module.modulesNeedToLoad.length = 0;
                            T.delayFlag = false
                        },
                        1)
                    }
                    e.status = this.Request.WAITING;
                    function hU(hY) {
                        var hX = T.getModuleInfo(i);
                        if (hX.status !== T.Request.COMPLETED) {
                            if (window.map) {
                                var hW = new bc("onmod_timeout");
                                hW.timeout = hY / 1000;
                                hW.moduleName = i;
                                window.map.fire(hW)
                            }
                        }
                    }
                    setTimeout(hU, this.Config.timeout, this.Config.timeout);
                    setTimeout(hU, this.Config.timeout * 2, this.Config.timeout * 2)
                }
                if (hV) {
                    e.callbacks.push(hV)
                }
            }
        },
        combine: function(e) {
            if (e && this.Dependency[e]) {
                var hT = this.Dependency[e];
                for (var T = 0; T < hT.length; T++) {
                    this.combine(hT[T]);
                    if (!this.Module.modules[hT[T]]) {
                        this.addToLoadQueue(hT[T])
                    }
                }
            }
        },
        addToLoadQueue: function(e) {
            var i = this.getModuleInfo(e);
            if (i.status === this.Request.INITIAL) {
                i.status = this.Request.WAITING;
                this.Module.modulesNeedToLoad.push(e)
            }
        },
        run: function(T, hT) {
            var hX = this.getModuleInfo(T);
            var h0 = this.Dependency[T];
            if (h0) {
                for (var hV = 0; hV < h0.length; hV++) {
                    var hW = this.getModuleInfo(h0[hV]);
                    if (hW.status !== this.Request.COMPLETED) {
                        hW.modsNeedToRun.push({
                            name: T,
                            code: hT
                        });
                        return
                    }
                }
            }
            try {
                eval(hT)
            } catch(hY) {
                return
            }
            hX.status = this.Request.COMPLETED;
            for (var hV = 0,
            hU = hX.callbacks.length; hV < hU; hV++) {
                hX.callbacks[hV]()
            }
            hX.callbacks.length = 0;
            for (hV = 0; hV < hX.modsNeedToRun.length; hV++) {
                var hZ = hX.modsNeedToRun[hV];
                this.run(hZ.name, hZ.code)
            }
            hX.modsNeedToRun.length = 0
        },
        getModuleInfo: function(i) {
            var e;
            if (!this.Module.modules[i]) {
                this.Module.modules[i] = {
                    status: this.Request.INITIAL,
                    callbacks: [],
                    modsNeedToRun: []
                }
            }
            e = this.Module.modules[i];
            return e
        }
    });
    window._jsload = function(hU, hV) {
        var i = eb.getModuleInfo(hU);
        i.status = eb.Request.LOADED;
        if (hV !== "") {
            eb.run(hU, hV)
        } else {
            if (window.map) {
                var e = new bc("ongetmodules_fail");
                e.moduleName = hU;
                window.map.fire(e)
            }
            var T = document.createElement("script");
            var hT = eb.MD5Mapping[hU];
            T.src = eb.Config.jsModPath + hU + "_" + hT + ".js";
            document.getElementsByTagName("head")[0].appendChild(T)
        }
    };
    function ad() {
        this._timeData = {}
    }
    var fa;
    if (typeof window !== "undefined") {
        fa = window
    } else {
        fa = self
    }
    ad.prototype.mark = function(e) {
        this._timeData[e] = this._getTime()
    };
    ad.prototype.getMark = function(e) {
        return this._timeData[e]
    };
    ad.prototype.getTime = function(i, e) {
        return parseFloat((this._timeData[e] - this._timeData[i]).toFixed(2))
    };
    ad.prototype.print = function() {};
    ad.prototype.clear = function() {
        this._timeData = {}
    };
    if (fa.performance && fa.performance.now) {
        ad.prototype._getTime = function() {
            return performance.now()
        }
    } else {
        ad.prototype._getTime = function() {
            return Date.now()
        }
    } !
    function(i, T) {
        T(i.d3 = i.d3 || {})
    } (window,
    function(iA) {
        function iS(iY, iZ, T, it) {
            function e(i) {
                return iY(i = new Date( + i)),
                i
            }
            return e.floor = e,
            e.ceil = function(i) {
                return iY(i = new Date(i - 1)),
                iZ(i, 1),
                iY(i),
                i
            },
            e.round = function(i) {
                var i0 = e(i),
                i1 = e.ceil(i);
                return i1 - i > i - i0 ? i0: i1
            },
            e.offset = function(i, i0) {
                return iZ(i = new Date( + i), null == i0 ? 1 : Math.floor(i0)),
                i
            },
            e.range = function(i1, i, i0) {
                var i2 = [];
                if (i1 = e.ceil(i1), i0 = null == i0 ? 1 : Math.floor(i0), !(i > i1 && i0 > 0)) {
                    return i2
                }
                do {
                    i2.push(new Date( + i1))
                } while ( iZ ( i1 , i0 ), iY(i1), i > i1);
                return i2
            },
            e.filter = function(i) {
                return iS(function(i0) {
                    for (; iY(i0), !i(i0);) {
                        i0.setTime(i0 - 1)
                    }
                },
                function(i0, i1) {
                    for (; --i1 >= 0;) {
                        for (; iZ(i0, 1), !i(i0);) {}
                    }
                })
            },
            T && (e.count = function(i, i0) {
                return iC.setTime( + i),
                iG.setTime( + i0),
                iY(iC),
                iY(iG),
                Math.floor(T(iC, iG))
            },
            e.every = function(i) {
                return i = Math.floor(i),
                isFinite(i) && i > 0 ? i > 1 ? e.filter(it ?
                function(i0) {
                    return it(i0) % i === 0
                }: function(i0) {
                    return e.count(0, i0) % i === 0
                }) : e: null
            }),
            e
        }
        function iH(e) {
            return iS(function(i) {
                i.setDate(i.getDate() - (i.getDay() + 7 - e) % 7),
                i.setHours(0, 0, 0, 0)
            },
            function(i, T) {
                i.setDate(i.getDate() + 7 * T)
            },
            function(i, T) {
                return (T - i - (T.getTimezoneOffset() - i.getTimezoneOffset()) * iB) / iP
            })
        }
        function iz(e) {
            return iS(function(i) {
                i.setUTCDate(i.getUTCDate() - (i.getUTCDay() + 7 - e) % 7),
                i.setUTCHours(0, 0, 0, 0)
            },
            function(i, T) {
                i.setUTCDate(i.getUTCDate() + 7 * T)
            },
            function(i, T) {
                return (T - i) / iP
            })
        }
        var iC = new Date,
        iG = new Date,
        iN = iS(function() {},
        function(i, T) {
            i.setTime( + i + T)
        },
        function(i, T) {
            return T - i
        });
        iN.every = function(e) {
            return e = Math.floor(e),
            isFinite(e) && e > 0 ? e > 1 ? iS(function(i) {
                i.setTime(Math.floor(i / e) * e)
            },
            function(i, T) {
                i.setTime( + i + T * e)
            },
            function(i, T) {
                return (T - i) / e
            }) : iN: null
        };
        var iW = iN.range,
        iU = 1000,
        iB = 60000,
        iR = 3600000,
        iJ = 86400000,
        iP = 604800000,
        hZ = iS(function(e) {
            e.setTime(Math.floor(e / iU) * iU)
        },
        function(i, T) {
            i.setTime( + i + T * iU)
        },
        function(i, T) {
            return (T - i) / iU
        },
        function(e) {
            return e.getUTCSeconds()
        }),
        iT = hZ.range,
        iI = iS(function(e) {
            e.setTime(Math.floor(e / iB) * iB)
        },
        function(i, T) {
            i.setTime( + i + T * iB)
        },
        function(i, T) {
            return (T - i) / iB
        },
        function(e) {
            return e.getMinutes()
        }),
        h7 = iI.range,
        iv = iS(function(i) {
            var T = i.getTimezoneOffset() * iB % iR;
            0 > T && (T += iR),
            i.setTime(Math.floor(( + i - T) / iR) * iR + T)
        },
        function(i, T) {
            i.setTime( + i + T * iR)
        },
        function(i, T) {
            return (T - i) / iR
        },
        function(e) {
            return e.getHours()
        }),
        iO = iv.range,
        ii = iS(function(e) {
            e.setHours(0, 0, 0, 0)
        },
        function(i, T) {
            i.setDate(i.getDate() + T)
        },
        function(i, T) {
            return (T - i - (T.getTimezoneOffset() - i.getTimezoneOffset()) * iB) / iJ
        },
        function(e) {
            return e.getDate() - 1
        }),
        hY = ii.range,
        ie = iH(0),
        ih = iH(1),
        hU = iH(2),
        ic = iH(3),
        h1 = iH(4),
        iy = iH(5),
        iF = iH(6),
        hW = ie.range,
        ix = ih.range,
        h5 = hU.range,
        iu = ic.range,
        iK = h1.range,
        iw = iy.range,
        iV = iF.range,
        iM = iS(function(e) {
            e.setDate(1),
            e.setHours(0, 0, 0, 0)
        },
        function(i, T) {
            i.setMonth(i.getMonth() + T)
        },
        function(i, T) {
            return T.getMonth() - i.getMonth() + 12 * (T.getFullYear() - i.getFullYear())
        },
        function(e) {
            return e.getMonth()
        }),
        iX = iM.range,
        ib = iS(function(e) {
            e.setMonth(0, 1),
            e.setHours(0, 0, 0, 0)
        },
        function(i, T) {
            i.setFullYear(i.getFullYear() + T)
        },
        function(i, T) {
            return T.getFullYear() - i.getFullYear()
        },
        function(e) {
            return e.getFullYear()
        });
        ib.every = function(e) {
            return isFinite(e = Math.floor(e)) && e > 0 ? iS(function(i) {
                i.setFullYear(Math.floor(i.getFullYear() / e) * e),
                i.setMonth(0, 1),
                i.setHours(0, 0, 0, 0)
            },
            function(i, T) {
                i.setFullYear(i.getFullYear() + T * e)
            }) : null
        };
        var h4 = ib.range,
        iD = iS(function(e) {
            e.setUTCSeconds(0, 0)
        },
        function(i, T) {
            i.setTime( + i + T * iB)
        },
        function(i, T) {
            return (T - i) / iB
        },
        function(e) {
            return e.getUTCMinutes()
        }),
        ik = iD.range,
        ij = iS(function(e) {
            e.setUTCMinutes(0, 0, 0)
        },
        function(i, T) {
            i.setTime( + i + T * iR)
        },
        function(i, T) {
            return (T - i) / iR
        },
        function(e) {
            return e.getUTCHours()
        }),
        ig = ij.range,
        id = iS(function(e) {
            e.setUTCHours(0, 0, 0, 0)
        },
        function(i, T) {
            i.setUTCDate(i.getUTCDate() + T)
        },
        function(i, T) {
            return (T - i) / iJ
        },
        function(e) {
            return e.getUTCDate() - 1
        }),
        ia = id.range,
        h9 = iz(0),
        h8 = iz(1),
        h6 = iz(2),
        h3 = iz(3),
        h2 = iz(4),
        hX = iz(5),
        hV = iz(6),
        hT = h9.range,
        ir = h8.range,
        iQ = h6.range,
        iE = h3.range,
        iL = h2.range,
        iq = hX.range,
        ip = hV.range,
        io = iS(function(e) {
            e.setUTCDate(1),
            e.setUTCHours(0, 0, 0, 0)
        },
        function(i, T) {
            i.setUTCMonth(i.getUTCMonth() + T)
        },
        function(i, T) {
            return T.getUTCMonth() - i.getUTCMonth() + 12 * (T.getUTCFullYear() - i.getUTCFullYear())
        },
        function(e) {
            return e.getUTCMonth()
        }),
        im = io.range,
        h0 = iS(function(e) {
            e.setUTCMonth(0, 1),
            e.setUTCHours(0, 0, 0, 0)
        },
        function(i, T) {
            i.setUTCFullYear(i.getUTCFullYear() + T)
        },
        function(i, T) {
            return T.getUTCFullYear() - i.getUTCFullYear()
        },
        function(e) {
            return e.getUTCFullYear()
        });
        h0.every = function(e) {
            return isFinite(e = Math.floor(e)) && e > 0 ? iS(function(i) {
                i.setUTCFullYear(Math.floor(i.getUTCFullYear() / e) * e),
                i.setUTCMonth(0, 1),
                i.setUTCHours(0, 0, 0, 0)
            },
            function(i, T) {
                i.setUTCFullYear(i.getUTCFullYear() + T * e)
            }) : null
        };
        var il = h0.range;
        iA.timeInterval = iS,
        iA.timeMillisecond = iN,
        iA.timeMilliseconds = iW,
        iA.utcMillisecond = iN,
        iA.utcMilliseconds = iW,
        iA.timeSecond = hZ,
        iA.timeSeconds = iT,
        iA.utcSecond = hZ,
        iA.utcSeconds = iT,
        iA.timeMinute = iI,
        iA.timeMinutes = h7,
        iA.timeHour = iv,
        iA.timeHours = iO,
        iA.timeDay = ii,
        iA.timeDays = hY,
        iA.timeWeek = ie,
        iA.timeWeeks = hW,
        iA.timeSunday = ie,
        iA.timeSundays = hW,
        iA.timeMonday = ih,
        iA.timeMondays = ix,
        iA.timeTuesday = hU,
        iA.timeTuesdays = h5,
        iA.timeWednesday = ic,
        iA.timeWednesdays = iu,
        iA.timeThursday = h1,
        iA.timeThursdays = iK,
        iA.timeFriday = iy,
        iA.timeFridays = iw,
        iA.timeSaturday = iF,
        iA.timeSaturdays = iV,
        iA.timeMonth = iM,
        iA.timeMonths = iX,
        iA.timeYear = ib,
        iA.timeYears = h4,
        iA.utcMinute = iD,
        iA.utcMinutes = ik,
        iA.utcHour = ij,
        iA.utcHours = ig,
        iA.utcDay = id,
        iA.utcDays = ia,
        iA.utcWeek = h9,
        iA.utcWeeks = hT,
        iA.utcSunday = h9,
        iA.utcSundays = hT,
        iA.utcMonday = h8,
        iA.utcMondays = ir,
        iA.utcTuesday = h6,
        iA.utcTuesdays = iQ,
        iA.utcWednesday = h3,
        iA.utcWednesdays = iE,
        iA.utcThursday = h2,
        iA.utcThursdays = iL,
        iA.utcFriday = hX,
        iA.utcFridays = iq,
        iA.utcSaturday = hV,
        iA.utcSaturdays = ip,
        iA.utcMonth = io,
        iA.utcMonths = im,
        iA.utcYear = h0,
        iA.utcYears = il,
        Object.defineProperty(iA, "__esModule", {
            value: !0
        })
    });
    function go(e) {
        this._elemType = e;
        this._objCollection = {}
    }
    go.prototype.get = function() {
        var i = null;
        for (var e in this._objCollection) {
            if (this._objCollection[e] && this._objCollection[e]._free === true) {
                this._objCollection[e]._free = false;
                return this._objCollection[e]
            }
        }
        i = U(this._elemType);
        e = bp.getGUID("obj_pool_");
        this._objCollection[e] = i;
        return i
    };
    go.prototype.free = function(e) {
        if (!e) {
            return
        }
        e._free = true;
        if (e.tagName.toLowerCase() === "img") {
            e.src = "";
            e.crossOrigin = null;
            e.onload = e.onerror = null
        }
    };
    go.prototype.clear = function() {
        for (var e in this._objCollection) {
            if (this._objCollection[e] && this._objCollection[e].tagName.toLowerCase === "img") {
                this._objCollection[e].onload = this._objCollection[e].onerror = null
            }
        }
        this._objCollection = {}
    };
    var gB = {
        get: function(i, hU, e, T) {
            var hT = new XMLHttpRequest();
            hT.open("GET", i, true);
            hT.timeout = 10000;
            hT.ontimeout = function() {
                T && T()
            };
            hT.onreadystatechange = function(hV) {
                if (this.readyState === 4) {
                    if (this.status === 200) {
                        hU && hU(hT.responseText)
                    } else {
                        e && e()
                    }
                }
            };
            hT.send()
        },
        post: function(i, hV, hU, e, T) {
            var hT = new XMLHttpRequest();
            hT.open("POST", i, true);
            hT.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            hT.timeout = 10000;
            hT.ontimeout = function() {
                T && T()
            };
            hT.onreadystatechange = function(hW) {
                if (this.readyState === 4) {
                    if (this.status === 200) {
                        hU && hU(hT.responseText, hV)
                    } else {
                        e && e()
                    }
                }
            };
            hT.send(hV);
            return hT
        }
    };
    var ho = (function(e) {
        function i(hV, T, hU) {
            var hT = U("script", {
                src: hV,
                type: "text/javascript",
                charset: "utf-8"
            });
            if (hT.addEventListener) {
                hT.addEventListener("load",
                function(hX) {
                    var hW = hX.target;
                    hW.parentNode.removeChild(hW);
                    T && T()
                },
                false);
                hT.addEventListener("error",
                function(hW) {
                    hU && hU(null)
                },
                false)
            } else {
                if (hT.attachEvent) {
                    hT.attachEvent("onreadystatechange",
                    function(hX) {
                        var hW = window.event.srcElement;
                        if (hW && (hW.readyState === "loaded" || hW.readyState === "complete")) {
                            hW.parentNode.removeChild(hW)
                        }
                        T && T()
                    })
                }
            }
            e.getElementsByTagName("head")[0].appendChild(hT)
        }
        return {
            load: function(hW, T, hT) {
                if (typeof hW === "string") {
                    i(hW, T, hT)
                } else {
                    if (hW.length > 0) {
                        var hV = hW.length;
                        for (var hU = 0; hU < hV; hU++) {
                            i(hW[hU],
                            function() {
                                hV--;
                                if (hV === 0 && T) {
                                    T()
                                }
                            })
                        }
                    }
                }
            }
        }
    })(window.document);
    function cM() {}
    cM.instances = {};
    cM.getInstance = function(i, T) {
        if (cM.instances[i]) {
            return cM.instances[i]
        }
        var e = new dj(i, T);
        cM.instances[i] = e;
        return e
    };
    function dj(e, i) {
        this._name = e;
        this._baseZoom = 18;
        this._opts = {
            tileSize: 256
        };
        D.extend(this._opts, i || {})
    }
    dj.mapZoomBaseIndex = [8, 8, 8, 8, 7, 7, 6, 6, 5, 5, 4, 3, 3, 3, 2, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0];
    dj.baseScaleZoom = [19, 17, 15, 12, 10, 9, 7, 5, 3];
    dj.baseScaleZoomMercatorSize = [512, 2048, 4096, 32768, 65536, 262144, 1048576, 4194304, 8388608];
    dj.mapZoomBaseZoomMapping = [3, 3, 3, 3, 5, 5, 7, 7, 9, 9, 10, 12, 12, 12, 15, 15, 17, 17, 19, 19, 19, 19, 19, 19, 19, 19];
    dj.mapZoomStartZoomMapping = [3, 3, 3, 3, 4, 4, 6, 6, 8, 8, 10, 11, 11, 11, 14, 14, 16, 16, 18, 18, 18, 18, 18, 18, 18, 18];
    dj.baseScaleTileSize = [1024, 1024, 512, 512, 256, 512, 512, 512, 256];
    dj.mapZoomTileSize = [256, 256, 256, 256, 256, 512, 256, 512, 256, 512, 256, 256, 512, 1024, 256, 512, 512, 1024, 512, 1024, 2048, 4096, 4096 * 2, 4096 * 2 * 2, 4096 * 2 * 2 * 2, 4096 * 2 * 2 * 2 * 2];
    dj.baseZoomInfo = {
        "3": [3],
        "5": [4, 5],
        "7": [6, 7],
        "9": [8, 9],
        "10": [10],
        "12": [11, 12, 13],
        "15": [14, 15],
        "17": [16, 17],
        "19": [18, 19, 20, 21, 22, 23, 24, 25]
    };
    dj.prototype = {
        getName: function() {
            return this._name
        },
        getTileSize: function(e) {
            e = Math.floor(e);
            if (e < 3) {
                e = 3
            }
            if (this._name === "na") {
                return dj.mapZoomTileSize[e]
            }
            return this._opts.tileSize
        },
        getBaseTileSize: function(i) {
            i = Math.floor(i);
            if (this._name === "na") {
                var e = dj.mapZoomBaseZoomMapping[i];
                return dj.mapZoomTileSize[e]
            }
            return this._opts.tileSize
        },
        getDataZoom: function(e) {
            e = Math.floor(e);
            if (this._name === "na") {
                return dj.mapZoomBaseZoomMapping[e]
            }
            return e
        },
        getZoomUnits: function(e) {
            return Math.pow(2, (this._baseZoom - e))
        },
        getMercatorSize: function(T, i) {
            if (this._name === "na") {
                T = Math.floor(T);
                var e = dj.mapZoomBaseIndex[T];
                return dj.baseScaleZoomMercatorSize[e]
            }
            return this._opts.tileSize * this.getZoomUnits(i)
        },
        getBaseZoom: function() {
            return this._baseZoom
        },
        getParentTile: function(hT, hZ, hY, T, i) {
            if (this._name === "na") {
                var hU = dj.baseZoomInfo[hY];
                T--;
                if (hU.indexOf(T) > -1) {
                    return {
                        col: hT,
                        row: hZ,
                        zoom: hY,
                        useZoom: T
                    }
                } else {
                    var hW = dj.mapZoomBaseIndex[hY];
                    var hV = dj.baseScaleZoom[hW + 1];
                    if (!hV) {
                        return null
                    }
                    var hX = this.getFactorByZooms(hV, hY);
                    var e = dj.baseZoomInfo[hV];
                    return {
                        col: Math.floor(hT / hX),
                        row: Math.floor(hZ / hX),
                        zoom: hV,
                        useZoom: e[e.length - 1]
                    }
                }
                return null
            }
            if (hY - 1 < i) {
                return null
            }
            return {
                col: Math.floor(hT / 2),
                row: Math.floor(hZ / 2),
                zoom: hY - 1,
                useZoom: hY - 1
            }
        },
        getChildTiles: function(hU, hW, e, T, h3, h9) {
            if (this._name === "na") {
                var hT = dj.baseZoomInfo[e];
                T += h9;
                if (hT.indexOf(T) > -1) {
                    return [{
                        col: hU,
                        row: hW,
                        zoom: e,
                        useZoom: T
                    }]
                } else {
                    var h7 = 0;
                    var h4 = e;
                    while (h7 < h9) {
                        var h8 = dj.mapZoomBaseIndex[h4];
                        var hY = dj.baseScaleZoom[h8 - 1];
                        if (!hY) {
                            return null
                        }
                        var hZ = dj.baseZoomInfo[hY];
                        if (hZ[h9 - 1]) {
                            var h0 = [];
                            var h2 = this.getFactorByZooms(e, hY);
                            var i = hU * h2;
                            var h1 = hW * h2;
                            for (var h6 = 0; h6 < h2; h6++) {
                                var hV = i + h6;
                                for (var h5 = 0; h5 < h2; h5++) {
                                    var hX = h1 + h5;
                                    h0.push({
                                        col: hV,
                                        row: hX,
                                        zoom: hY,
                                        useZoom: hZ[h9 - 1]
                                    })
                                }
                            }
                            return h0
                        }
                        h7 += hZ.length;
                        if (h9 === hZ.length) {
                            h4 = hY
                        }
                    }
                }
                return null
            }
            var h0 = [];
            if (e + h9 > h3) {
                return null
            }
            var h2 = Math.pow(2, h9);
            var i = hU * h2;
            var h1 = hW * h2;
            var hY = e + h9;
            var h0 = [];
            for (var h6 = 0; h6 < 2; h6++) {
                var hV = i + h6;
                for (var h5 = 0; h5 < 2; h5++) {
                    var hX = h1 + h5;
                    h0.push({
                        col: hV,
                        row: hX,
                        zoom: hY,
                        useZoom: hY
                    })
                }
            }
            return h0
        },
        getFactorByZooms: function(i, hT) {
            var T = dj.mapZoomBaseIndex[i];
            var hU = dj.mapZoomBaseIndex[hT];
            var e = dj.baseScaleZoomMercatorSize[T];
            var hV = dj.baseScaleZoomMercatorSize[hU];
            return e / hV
        }
    };
    var a9 = {};
    var ah = ["swiftshader", "microsoft basic render driver"];
    var cm = ["intel", "nvidia", "amd", "apple", "geforce"];
    function dw(e) {
        e = e.toLowerCase();
        if (ah.indexOf(e) >= 0) {
            return true
        }
        if (e.indexOf("mobile") >= 0) {
            return true
        }
        return false
    }
    function fE(T) {
        T = T.toLowerCase();
        for (var e = 0; e < cm.length; e++) {
            if (T.indexOf(cm[e]) >= 0) {
                return true
            }
        }
        return false
    }
    function dZ(e) {
        if (!e) {
            return false
        }
        if (dw(e)) {
            return false
        }
        if (fE(e)) {
            return true
        }
        return false
    }
    a9.ifEnableEarth = function(i) {
        var e = a9.ifEnableEarth;
        if (!i && typeof e._enable === "boolean") {
            return e._enable
        }
        if (a9.ifSupportWebGL()) {
            e._enable = true;
            return true
        }
        e._enable = false;
        return false
    };
    a9.ifEnableWebGLMap = function(i) {
        var e = a9.ifEnableWebGLMap;
        if (!i && typeof e._enable === "boolean") {
            return e._enable
        }
        if (a9.ifSupportWebGL()) {
            if (dx.inMapHost) {
                e._enable = true;
                return true
            } else {
                if (window.Blob || window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder) {
                    e._enable = true;
                    return true
                } else {
                    e._enable = false;
                    return false
                }
            }
        }
        e._enable = false;
        return false
    };
    a9.params = {};
    a9.ifSupportWebGL = function() {
        var i = a9.ifSupportWebGL;
        if (typeof i._supportWebGL === "boolean") {
            return i._supportWebGL
        }
        if (!window.WebGLRenderingContext) {
            i._supportWebGL = false;
            return false
        }
        var T = document.createElement("canvas");
        T.width = 300;
        T.height = 150;
        var hU = null;
        var h0 = {
            alpha: true,
            antialias: false,
            failIfMajorPerformanceCaveat: true,
            preserveDrawingBuffer: false,
            stencil: false
        };
        try {
            hU = T.getContext("webgl", h0) || T.getContext("experimental-webgl", h0)
        } catch(hW) {
            i._supportWebGL = false
        }
        if (hU === null) {
            i._supportWebGL = false
        } else {
            i._supportWebGL = true;
            var hY = hU.getExtension("WEBGL_debug_renderer_info");
            var hX = "";
            if (hY) {
                hX = hU.getParameter(hY.UNMASKED_RENDERER_WEBGL);
                if (dZ(hX) === true) {
                    i._supportWebGL = true
                }
                var hZ = hU.getParameter(hY.UNMASKED_VENDOR_WEBGL);
                i._renderer = hX;
                i._vendor = hZ
            }
            if (!hY && D.Browser.firefox) {
                i._supportWebGL = true
            }
            if (!hY && D.Platform.macintosh) {
                i._supportWebGL = true
            }
            if (hU.drawingBufferWidth !== T.width || hU.drawingBufferHeight !== T.height) {
                i._supportWebGL = false
            }
            if (hU.getParameter(hU.MAX_VERTEX_TEXTURE_IMAGE_UNITS) < 4) {
                i._supportWebGL = false
            }
            var hT = hU.getParameter(hU.MAX_TEXTURE_SIZE);
            a9.params.maxTextureSize = hT;
            if (hT < 4096) {
                i._supportWebGL = false
            }
            var hV = hU.getParameter(hU.MAX_TEXTURE_IMAGE_UNITS);
            if (hV < 8) {
                i._supportWebGL = false
            }
            if (!hU.getShaderPrecisionFormat || hU.getShaderPrecisionFormat(hU.FRAGMENT_SHADER, hU.HIGH_FLOAT).precision < 23) {
                i._supportWebGL = false
            }
        }
        return i._supportWebGL
    };
    a9.ifSupportCanvas2d = function() {
        var hU = a9.ifSupportCanvas2d;
        if (typeof hU.supportCanvas2d === "boolean") {
            return hU.supportCanvas2d
        }
        var T = document.createElement("canvas");
        var i = null;
        try {
            i = T.getContext("2d")
        } catch(hT) {
            hU.supportCanvas2d = false
        }
        if (i === null) {
            hU.supportCanvas2d = false
        } else {
            hU.supportCanvas2d = true
        }
        return hU.supportCanvas2d
    };
    a9.ifCanvas2dInBlackList = function() {
        return true
    };
    a9.ifEnableCanvas2dMap = function() {
        return false;
        var i = navigator.userAgent;
        var e = 0;
        var hT = 0;
        var hU = 0;
        if (/macintosh/ig.test(i)) {
            var T = 0;
            if (/(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(i) && !/chrome/i.test(i)) {
                T = parseInt((RegExp["\x241"] || RegExp["\x242"]), 10)
            }
            if (T > 0) {
                return false
            }
            return true
        }
        if (/windows nt (\d+\.\d)/ig.test(i)) {
            hT = parseFloat(RegExp.$1);
            if (hT >= 6.1) {
                if (/chrome\/(\d+\.\d)/i.test(i)) {
                    e = parseFloat(RegExp.$1);
                    if (e >= 31) {
                        return true
                    }
                }
                if (/MSIE (\d+(\.\d+)?)/.test(i)) {
                    hU = parseFloat(RegExp.$1);
                    if (hU >= 10) {
                        return true
                    }
                }
                if (/Firefox/.test(i)) {
                    return true
                }
                if (/rv:11.0/ig.test(i)) {
                    return true
                }
                if (/edge/ig.test(i)) {
                    return true
                }
            }
        }
        return false
    };
    a9.ifSupportCSS3 = function(hX, i) {
        var hW = document.createElement("div");
        var hV = "Webkit Moz O ms".split(" ");
        var e = hV.length;
        var T = "";
        var hT = hW.style;
        if (hX in hT) {
            T = hX
        }
        hX = hX.replace(/^[a-z]/,
        function(hY) {
            return hY.toUpperCase()
        });
        while (e--) {
            var hU = hV[e] + hX;
            if (hU in hT) {
                T = hU;
                break
            }
        }
        if (i) {
            return T
        } else {
            return T.length > 0 ? true: false
        }
    };
    a9.isModernBrowser = a9.ifSupportCanvas2d() && a9.ifSupportCSS3("transform");
    function e0(i, e) {
        this._size = i;
        this._curSize = 0;
        this._cache = {};
        this._least = null;
        this._most = null;
        this._options = {
            clearCallback: null,
            removeOldCallback: null
        };
        e = e || {};
        for (var T in e) {
            this._options[T] = e[T]
        }
        this._getDataTimes = 0;
        this._hitTimes = 0
    }
    e0.prototype.setData = function(hT, hV) {
        var i = this._cache;
        var T = this._size;
        if (T === 0) {
            return
        }
        var e = this._curSize;
        if (e === T) {
            this._removeOld()
        }
        var hU;
        if (!i[hT]) {
            hU = {
                key: hT,
                data: hV,
                older: null,
                newwer: null
            };
            i[hT] = hU;
            if (this._least === null) {
                this._least = hU
            }
            if (this._most === null) {
                this._most = hU
            }
            this._curSize++
        } else {
            hU = i[hT];
            hU.data = hV;
            if (this._most === hU) {
                return
            }
            hU.older && (hU.older.newer = hU.newer);
            hU.newer && (hU.newer.older = hU.older);
            if (this._least === hU) {
                this._least = hU.newer
            }
        }
        if (this._most && this._most !== hU) {
            this._most.newer = hU;
            hU.older = this._most;
            this._most = hU;
            hU.newer = null
        }
    };
    e0.prototype.getData = function(e) {
        var i = this._cache[e];
        this._getDataTimes++;
        if (i) {
            this._hitTimes++;
            var T = i.data;
            if (this._most === i) {
                return T
            }
            i.older && (i.older.newer = i.newer);
            i.newer && (i.newer.older = i.older);
            if (this._least === i) {
                this._least = i.newer
            }
            this._most.newer = i;
            i.older = this._most;
            i.newer = null;
            this._most = i;
            return T
        }
        return null
    };
    e0.prototype.getAllData = function() {
        return this._cache
    };
    e0.prototype.getHitRate = function() {
        return this._hitTimes / this._getDataTimes
    };
    e0.prototype.removeData = function(i) {
        var e = this._cache;
        var T = e[i];
        if (!T) {
            return
        }
        if (this._options.clearCallback) {
            this._options.clearCallback(T.data, T.key)
        }
        T.older && (T.older.newer = T.newer);
        T.newer && (T.newer.older = T.older);
        if (this._least === T) {
            this._least = T.newer
        }
        if (this._most === T) {
            this._most = T.older
        }
        delete e[i];
        this._curSize--
    };
    e0.prototype._removeOld = function() {
        var e = this._cache;
        var hT = Math.round(this._size * 0.6);
        var T = 0;
        while (this._least && T < hT) {
            var i = this._least;
            this._least = i.newer;
            i.newer && (i.newer.older = null);
            if (this._options.clearCallback) {
                this._options.clearCallback(i.data, i.key)
            }
            delete e[i.key];
            T++
        }
        this._curSize -= T;
        if (this._options.removeOldCallback) {
            this._options.removeOldCallback()
        }
    };
    e0.prototype.clear = function() {
        var e = this._cache;
        var i = this._least;
        if (this._options.clearCallback) {
            while (i) {
                this._options.clearCallback(i.data, i.key);
                i = i.newer
            }
        }
        this._least = this._most = null;
        this._cache = {};
        this._curSize = 0
    };
    e0.prototype.forEach = function(e) {
        var i = this._least;
        while (i) {
            e(i.data);
            i = i.newer
        }
    };
    e0.prototype.clearExcept = function(i) {
        var e = this._cache;
        var T = this._least;
        while (T) {
            if (!i[T.key]) {
                if (this._options.clearCallback) {
                    this._options.clearCallback(T.data, T.key)
                }
                T.older && (T.older.newer = T.newer);
                T.newer && (T.newer.older = T.older);
                if (this._least === T) {
                    this._least = T.newer
                }
                if (this._most === T) {
                    this._most = T.older
                }
                delete e[T.key];
                this._curSize--
            }
            T = T.newer
        }
    };
    var g1 = {
        parseHexToRgbaArray: function(hV) {
            var hW = hV.replace("#", "");
            if (hW.length === 3) {
                hW += "f"
            } else {
                if (hW.length === 6) {
                    hW += "ff"
                }
            }
            var e = [];
            var hU = hW.length;
            var hT = hU === 8 ? 2 : 1;
            for (var T = 0; T < hU; T = T + hT) {
                if (hT === 2) {
                    e.push(parseInt(hW.slice(T, T + 2), 16))
                } else {
                    e.push(parseInt(hW.slice(T, T + 1) + hW.slice(T, T + 1), 16))
                }
            }
            return e
        },
        parseRgbaStrToArray: function(i) {
            var e = [0, 0, 0, 255];
            if (i.indexOf("rgba(") === 0) {
                var hT = i.replace("rgba(", "").replace(")", "");
                var T = hT.split(",");
                e[0] = parseInt(T[0], 10);
                e[1] = parseInt(T[1], 10);
                e[2] = parseInt(T[2], 10);
                e[3] = Math.round(parseFloat(T[3]) * 255)
            } else {
                if (i.indexOf("rgb(") === 0) {
                    var hT = i.replace("rgb(", "").replace(")", "");
                    var hU = hT.split(",");
                    e[0] = parseInt(hU[0], 10);
                    e[1] = parseInt(hU[1], 10);
                    e[2] = parseInt(hU[2], 10);
                    e[3] = 255
                }
            }
            return e
        },
        parseHexAndOpacityToRgbaArray: function(hU, hV) {
            var T = [];
            var hY = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
            var hX = hU.toLowerCase();
            if (hY.test(hX)) {
                if (hX.length === 4) {
                    var e = "#";
                    for (var hW = 1; hW < 4; hW++) {
                        e += hX.slice(hW, hW + 1).concat(hX.slice(hW, hW + 1))
                    }
                    hX = e
                }
                for (var hT = 1; hT < 7; hT += 2) {
                    T.push(parseInt(hX.slice(hT, hT + 2), 16))
                }
                T.push(hV)
            }
            return T
        },
        parseCSSColor: function(e) {
            if (e.indexOf("#") === 0) {
                return g1.parseHexToRgbaArray(e)
            }
            return g1.parseRgbaStrToArray(e)
        },
        rgbToHSV: function(hU) {
            var e = hU[0] / 255;
            var T = hU[1] / 255;
            var hV = hU[2] / 255;
            var hY = Math.max(e, T, hV);
            var hT = Math.min(e, T, hV);
            var hX = hY - hT;
            var i;
            if (hX === 0) {
                i = 0
            } else {
                if (hY === e) {
                    i = 60 * (((T - hV) / hX) % 6)
                } else {
                    if (hY === T) {
                        i = 60 * ((hV - e) / hX + 2)
                    } else {
                        if (hY === hV) {
                            i = 60 * ((e - T) / hX + 4)
                        }
                    }
                }
            }
            var hZ = hY === 0 ? 0 : (hX / hY);
            var hW = hY;
            while (i < 0) {
                i += 360
            }
            return [i, hZ, hW]
        },
        hsvToRGB: function(hT) {
            var hX = hT[2] * hT[1];
            var T = hX * (1 - Math.abs((hT[0] / 60) % 2 - 1));
            var i = hT[2] - hX;
            var hU = hT[0];
            var hW;
            var hV;
            var e;
            if (hU >= 0 && hU < 60) {
                hW = hX;
                hV = T;
                e = 0
            } else {
                if (hU >= 60 && hU < 120) {
                    hW = T;
                    hV = hX;
                    e = 0
                } else {
                    if (hU >= 120 && hU < 180) {
                        hW = 0;
                        hV = hX;
                        e = T
                    } else {
                        if (hU >= 180 && hU < 240) {
                            hW = 0;
                            hV = T;
                            e = hX
                        } else {
                            if (hU >= 240 && hU < 300) {
                                hW = T;
                                hV = 0;
                                e = hX
                            } else {
                                if (hU >= 300 && hU < 360) {
                                    hW = hX;
                                    hV = 0;
                                    e = T
                                }
                            }
                        }
                    }
                }
            }
            hW = (hW + i) * 255 > 255 ? 255 : (hW + i) * 255;
            hV = (hV + i) * 255 > 255 ? 255 : (hV + i) * 255;
            e = (e + i) * 255 > 255 ? 255 : (e + i) * 255;
            return [Math.round(hW), Math.round(hV), Math.round(e)]
        }
    }; (function(hV) {
        function h5(ia, id) {
            var ic = (ia & 65535) + (id & 65535);
            var ib = (ia >> 16) + (id >> 16) + (ic >> 16);
            return (ib << 16) | (ic & 65535)
        }
        function h4(ia, ib) {
            return (ia << ib) | (ia >>> (32 - ib))
        }
        function hZ(ig, ic, ib, ia, ie, id) {
            return h5(h4(h5(h5(ic, ig), h5(ia, id)), ie), ib)
        }
        function e(ic, ib, ih, ig, ia, ie, id) {
            return hZ((ib & ih) | (~ib & ig), ic, ib, ia, ie, id)
        }
        function hW(ic, ib, ih, ig, ia, ie, id) {
            return hZ((ib & ig) | (ih & ~ig), ic, ib, ia, ie, id)
        }
        function h2(ic, ib, ih, ig, ia, ie, id) {
            return hZ(ib ^ ih ^ ig, ic, ib, ia, ie, id)
        }
        function h8(ic, ib, ih, ig, ia, ie, id) {
            return hZ(ih ^ (ib | ~ig), ic, ib, ia, ie, id)
        }
        function T(il, ig) {
            il[ig >> 5] |= 128 << (ig % 32);
            il[((ig + 64) >>> 9 << 4) + 14] = ig;
            var ic;
            var ie;
            var id;
            var ib;
            var ia;
            var ik = 1732584193;
            var ij = -271733879;
            var ii = -1732584194;
            var ih = 271733878;
            for (ic = 0; ic < il.length; ic += 16) {
                ie = ik;
                id = ij;
                ib = ii;
                ia = ih;
                ik = e(ik, ij, ii, ih, il[ic], 7, -680876936);
                ih = e(ih, ik, ij, ii, il[ic + 1], 12, -389564586);
                ii = e(ii, ih, ik, ij, il[ic + 2], 17, 606105819);
                ij = e(ij, ii, ih, ik, il[ic + 3], 22, -1044525330);
                ik = e(ik, ij, ii, ih, il[ic + 4], 7, -176418897);
                ih = e(ih, ik, ij, ii, il[ic + 5], 12, 1200080426);
                ii = e(ii, ih, ik, ij, il[ic + 6], 17, -1473231341);
                ij = e(ij, ii, ih, ik, il[ic + 7], 22, -45705983);
                ik = e(ik, ij, ii, ih, il[ic + 8], 7, 1770035416);
                ih = e(ih, ik, ij, ii, il[ic + 9], 12, -1958414417);
                ii = e(ii, ih, ik, ij, il[ic + 10], 17, -42063);
                ij = e(ij, ii, ih, ik, il[ic + 11], 22, -1990404162);
                ik = e(ik, ij, ii, ih, il[ic + 12], 7, 1804603682);
                ih = e(ih, ik, ij, ii, il[ic + 13], 12, -40341101);
                ii = e(ii, ih, ik, ij, il[ic + 14], 17, -1502002290);
                ij = e(ij, ii, ih, ik, il[ic + 15], 22, 1236535329);
                ik = hW(ik, ij, ii, ih, il[ic + 1], 5, -165796510);
                ih = hW(ih, ik, ij, ii, il[ic + 6], 9, -1069501632);
                ii = hW(ii, ih, ik, ij, il[ic + 11], 14, 643717713);
                ij = hW(ij, ii, ih, ik, il[ic], 20, -373897302);
                ik = hW(ik, ij, ii, ih, il[ic + 5], 5, -701558691);
                ih = hW(ih, ik, ij, ii, il[ic + 10], 9, 38016083);
                ii = hW(ii, ih, ik, ij, il[ic + 15], 14, -660478335);
                ij = hW(ij, ii, ih, ik, il[ic + 4], 20, -405537848);
                ik = hW(ik, ij, ii, ih, il[ic + 9], 5, 568446438);
                ih = hW(ih, ik, ij, ii, il[ic + 14], 9, -1019803690);
                ii = hW(ii, ih, ik, ij, il[ic + 3], 14, -187363961);
                ij = hW(ij, ii, ih, ik, il[ic + 8], 20, 1163531501);
                ik = hW(ik, ij, ii, ih, il[ic + 13], 5, -1444681467);
                ih = hW(ih, ik, ij, ii, il[ic + 2], 9, -51403784);
                ii = hW(ii, ih, ik, ij, il[ic + 7], 14, 1735328473);
                ij = hW(ij, ii, ih, ik, il[ic + 12], 20, -1926607734);
                ik = h2(ik, ij, ii, ih, il[ic + 5], 4, -378558);
                ih = h2(ih, ik, ij, ii, il[ic + 8], 11, -2022574463);
                ii = h2(ii, ih, ik, ij, il[ic + 11], 16, 1839030562);
                ij = h2(ij, ii, ih, ik, il[ic + 14], 23, -35309556);
                ik = h2(ik, ij, ii, ih, il[ic + 1], 4, -1530992060);
                ih = h2(ih, ik, ij, ii, il[ic + 4], 11, 1272893353);
                ii = h2(ii, ih, ik, ij, il[ic + 7], 16, -155497632);
                ij = h2(ij, ii, ih, ik, il[ic + 10], 23, -1094730640);
                ik = h2(ik, ij, ii, ih, il[ic + 13], 4, 681279174);
                ih = h2(ih, ik, ij, ii, il[ic], 11, -358537222);
                ii = h2(ii, ih, ik, ij, il[ic + 3], 16, -722521979);
                ij = h2(ij, ii, ih, ik, il[ic + 6], 23, 76029189);
                ik = h2(ik, ij, ii, ih, il[ic + 9], 4, -640364487);
                ih = h2(ih, ik, ij, ii, il[ic + 12], 11, -421815835);
                ii = h2(ii, ih, ik, ij, il[ic + 15], 16, 530742520);
                ij = h2(ij, ii, ih, ik, il[ic + 2], 23, -995338651);
                ik = h8(ik, ij, ii, ih, il[ic], 6, -198630844);
                ih = h8(ih, ik, ij, ii, il[ic + 7], 10, 1126891415);
                ii = h8(ii, ih, ik, ij, il[ic + 14], 15, -1416354905);
                ij = h8(ij, ii, ih, ik, il[ic + 5], 21, -57434055);
                ik = h8(ik, ij, ii, ih, il[ic + 12], 6, 1700485571);
                ih = h8(ih, ik, ij, ii, il[ic + 3], 10, -1894986606);
                ii = h8(ii, ih, ik, ij, il[ic + 10], 15, -1051523);
                ij = h8(ij, ii, ih, ik, il[ic + 1], 21, -2054922799);
                ik = h8(ik, ij, ii, ih, il[ic + 8], 6, 1873313359);
                ih = h8(ih, ik, ij, ii, il[ic + 15], 10, -30611744);
                ii = h8(ii, ih, ik, ij, il[ic + 6], 15, -1560198380);
                ij = h8(ij, ii, ih, ik, il[ic + 13], 21, 1309151649);
                ik = h8(ik, ij, ii, ih, il[ic + 4], 6, -145523070);
                ih = h8(ih, ik, ij, ii, il[ic + 11], 10, -1120210379);
                ii = h8(ii, ih, ik, ij, il[ic + 2], 15, 718787259);
                ij = h8(ij, ii, ih, ik, il[ic + 9], 21, -343485551);
                ik = h5(ik, ie);
                ij = h5(ij, id);
                ii = h5(ii, ib);
                ih = h5(ih, ia)
            }
            return [ik, ij, ii, ih]
        }
        function h3(ib) {
            var ic;
            var ia = "";
            var id = ib.length * 32;
            for (ic = 0; ic < id; ic += 8) {
                ia += String.fromCharCode((ib[ic >> 5] >>> (ic % 32)) & 255)
            }
            return ia
        }
        function hY(ib) {
            var id;
            var ia = [];
            ia[(ib.length >> 2) - 1] = undefined;
            for (id = 0; id < ia.length; id += 1) {
                ia[id] = 0
            }
            var ic = ib.length * 8;
            for (id = 0; id < ic; id += 8) {
                ia[id >> 5] |= (ib.charCodeAt(id / 8) & 255) << (id % 32)
            }
            return ia
        }
        function hX(ia) {
            return h3(T(hY(ia), ia.length * 8))
        }
        function h9(ic, ig) {
            var ib;
            var ie = hY(ic);
            var ia = [];
            var id = [];
            var ih;
            ia[15] = id[15] = undefined;
            if (ie.length > 16) {
                ie = T(ie, ic.length * 8)
            }
            for (ib = 0; ib < 16; ib += 1) {
                ia[ib] = ie[ib] ^ 909522486;
                id[ib] = ie[ib] ^ 1549556828
            }
            ih = T(ia.concat(hY(ig)), 512 + ig.length * 8);
            return h3(T(id.concat(ih), 512 + 128))
        }
        function h7(id) {
            var ic = "0123456789abcdef";
            var ib = "";
            var ia;
            var ie;
            for (ie = 0; ie < id.length; ie += 1) {
                ia = id.charCodeAt(ie);
                ib += ic.charAt((ia >>> 4) & 15) + ic.charAt(ia & 15)
            }
            return ib
        }
        function h0(ia) {
            return unescape(encodeURIComponent(ia))
        }
        function hT(ia) {
            return hX(h0(ia))
        }
        function h1(ia) {
            return h7(hT(ia))
        }
        function i(ia, ib) {
            return h9(h0(ia), h0(ib))
        }
        function h6(ia, ib) {
            return h7(i(ia, ib))
        }
        function hU(ib, ic, ia) {
            if (!ic) {
                if (!ia) {
                    return h1(ib)
                }
                return hT(ib)
            }
            if (!ia) {
                return h6(ic, ib)
            }
            return i(ic, ib)
        }
        if (typeof define === "function" && define.amd) {
            define(function() {
                return hU
            })
        } else {
            if (typeof module === "object" && module.exports) {
                module.exports = hU
            } else {
                hV.md5 = hU
            }
        }
    })(this);
    var cC = {
        request: function(hX, hT, i, hZ, T) {
            
            var hU = new Date().getTime();
            var hW = (Math.random() * 100000).toFixed(0);
            bp._rd["_cbk" + hW] = function(h0) {
                if (h0.result && h0.result["error"] && h0.result["error"] === 202) {
                    alert("该AK因为恶意行为已经被管理员封禁！");
                    return
                }
                i = i || {};
                hX && hX(h0, i);
                delete bp._rd["_cbk" + hW]
            };
            hZ = hZ || "";
            var hY;
            if (i && i.useEncodeURI) {
                hY = hl(hT, encodeURI)
            } else {
                hY = hl(hT, encodeURIComponent)
            }
            var hV = this;
            var e = e4.apiHost + "/" + hZ + "?" + hY + "&ie=utf-8&oue=1&fromproduct=jsapi";
            if (!T) {
                e += "&res=api"
            }
            e += "&callback=" + eB + "._rd._cbk" + hW;
            if (hZ === "traffic/v1/bound" || hZ === "traffic/v1/road") {
                e += "&v=3.0&seckey=" + o + "&timeStamp=" + hU
            } else {
                e += "&ak=" + gf + "&v=3.0&seckey=" + o + "&timeStamp=" + hU
            }
            ho.load(e)
        }
    };
    window.srqtimer = null;
    window.firstTime = true;
    window.srqcount = 0;
    bp._rd = {};
    var E = {
        request: function(hT, e) {
            if (e) {
                var T = (Math.random() * 100000).toFixed(0);
                BMapGL._rd["_cbk" + T] = function(hU) {
                    e && e(hU);
                    delete BMapGL._rd["_cbk" + T]
                };
                hT += "&callback=BMapGL._rd._cbk" + T
            }
            hT += "&seckey=" + o;
            var i = U("script", {
                src: hT,
                type: "text/javascript",
                charset: "utf-8"
            });
            if (i.addEventListener) {
                i.addEventListener("load",
                function(hV) {
                    var hU = hV.target;
                    hU.parentNode.removeChild(hU)
                },
                false);
                i.addEventListener("error",
                function(hU) {
                    e && e([, , , , , ])
                },
                false)
            } else {
                if (i.attachEvent) {
                    i.attachEvent("onreadystatechange",
                    function(hV) {
                        var hU = window.event.srcElement;
                        if (hU && (hU.readyState == "loaded" || hU.readyState == "complete")) {
                            hU.parentNode.removeChild(hU)
                        }
                    })
                }
            }
            document.getElementsByTagName("head")[0].appendChild(i);
            i = null
        }
    };
    function a8() {
        this._map = null;
        this._container;
        this._type = "control";
        this.blockInfoWindow = true;
        this._visible = true
    }
    a8.inherits(ee, "Control");
    D.extend(a8.prototype, {
        initialize: function(e) {
            this._map = e;
            if (this._container) {
                if (this._opts && this._opts.container) {
                    this._opts.container.appendChild(this._container)
                } else {
                    e.container.appendChild(this._container)
                }
                return this._container
            }
            return
        },
        _i: function(e) {
            if (!this._container && this.initialize && bW(this.initialize)) {
                this._container = this.initialize(e)
            }
            this._opts = this._opts || {
                printable: false
            };
            this._setStyle();
            this._setPosition();
            if (this._container) {
                this._container._jsobj = this
            }
        },
        _setStyle: function() {
            var i = this._container;
            if (i) {
                var e = i.style;
                e.position = "absolute";
                e.zIndex = this._cZIndex || "10";
                e.MozUserSelect = "none";
                if (!this._opts.printable) {
                    D.ac(i, "BMap_noprint")
                }
                D.on(i, "contextmenu", dc)
            }
        },
        remove: function() {
            this._map = null;
            if (!this._container) {
                return
            }
            this._container.parentNode && this._container.parentNode.removeChild(this._container);
            this._container._jsobj = null;
            this._container = null
        },
        _render: function(e) {
            if (this._opts && this._opts.container) {
                this._container = dJ(this._opts.container, '<div unselectable="on"></div>')
            } else {
                var i = '<div unselectable="on"></div>';
                if (e && e.config.autoSafeArea && bw()) {
                    this._safeAreaContainer = dJ(this._map.container, i);
                    this._safeAreaContainer.style.position = "absolute";
                    this._safeAreaContainer.style.bottom = "env(safe-area-inset-bottom)";
                    this._container = dJ(this._safeAreaContainer, i)
                } else {
                    this._container = dJ(this._map.container, i)
                }
            }
            if (this._visible === false) {
                this._container.style.display = "none"
            }
            return this._container
        },
        _setPosition: function() {
            this.setAnchor(this._opts.anchor)
        },
        setAnchor: function(hT) {
            if (this.anchorFixed || typeof hT !== "number" || isNaN(hT) || hT < BMAP_ANCHOR_TOP_LEFT || hT > BMAP_ANCHOR_BOTTOM_RIGHT) {
                hT = this.defaultAnchor
            }
            this._opts.offset = this._opts.offset || this.defaultOffset;
            var T = this._opts.anchor;
            this._opts.anchor = hT;
            if (!this._container) {
                return
            }
            var hV = this._container;
            var e = this._opts.offset.width;
            var hU = this._opts.offset.height;
            hV.style.left = hV.style.top = hV.style.right = hV.style.bottom = "auto";
            switch (hT) {
            case BMAP_ANCHOR_TOP_LEFT:
                hV.style.top = hU + "px";
                hV.style.left = e + "px";
                break;
            case BMAP_ANCHOR_TOP_RIGHT:
                hV.style.top = hU + "px";
                hV.style.right = e + "px";
                break;
            case BMAP_ANCHOR_BOTTOM_LEFT:
                hV.style.bottom = hU + "px";
                hV.style.left = e + "px";
                break;
            case BMAP_ANCHOR_BOTTOM_RIGHT:
                hV.style.bottom = hU + "px";
                hV.style.right = e + "px";
                break;
            default:
                break
            }
            var i = ["TL", "TR", "BL", "BR"];
            D.rc(this._container, "anchor" + i[T]);
            D.ac(this._container, "anchor" + i[hT])
        },
        getAnchor: function() {
            return this._opts.anchor
        },
        setOffset: function(e) {
            if (!e) {
                return
            }
            this._opts = this._opts || {};
            this._opts.offset = new ea(e.width, e.height);
            if (!this._container) {
                return
            }
            this.setAnchor(this._opts.anchor)
        },
        getOffset: function() {
            return this._opts.offset
        },
        getDom: function() {
            return this._container
        },
        show: function() {
            if (this._visible === true) {
                return
            }
            this._visible = true;
            if (this._container) {
                this._container.style.display = ""
            }
            this.dispatchEvent(new bc("onshow"))
        },
        hide: function() {
            if (this._visible === false) {
                return
            }
            this._visible = false;
            if (this._container) {
                this._container.style.display = "none"
            }
            this.dispatchEvent(new bc("onhide"))
        },
        isPrintable: function() {
            return !! this._opts.printable
        },
        isVisible: function() {
            if (!this._container && !this._map) {
                return false
            }
            return !! this._visible
        },
        _asyncLoadCode: function() {
            var e = this;
            eb.load("control",
            function() {
                if (e._asyncDraw) {
                    e._asyncDraw()
                }
            })
        }
    });
    var hF = {
        TOP_LEFT: 0,
        TOP_RIGHT: 1,
        BOTTOM_LEFT: 2,
        BOTTOM_RIGHT: 3
    };
    bp.ControlAnchor = hF;
    window.BMAP_ANCHOR_TOP_LEFT = 0;
    window.BMAP_ANCHOR_TOP_RIGHT = 1;
    window.BMAP_ANCHOR_BOTTOM_LEFT = 2;
    window.BMAP_ANCHOR_BOTTOM_RIGHT = 3;
    function dI(e) {
        a8.call(this);
        e = e || {};
        this._opts = {
            printable: false
        };
        D.extend(this._opts, e);
        this._copyrightCollection = [];
        this.defaultAnchor = BMAP_ANCHOR_BOTTOM_LEFT;
        this.defaultOffset = new ea(5, 2);
        this.setAnchor(e.anchor);
        this._canShow = true;
        this.sateMapStyle = false;
        this.blockInfoWindow = false;
        this._asyncLoadCode()
    }
    dI.inherits(a8, "CopyrightControl");
    D.extend(dI.prototype, {
        initialize: function(e) {
            this._map = e;
            return this._container
        },
        addCopyright: function(hT) {
            var e = {
                minZoom: 0,
                bounds: null,
                content: "",
                mapType: ""
            };
            for (var T in hT) {
                e[T] = hT[T]
            }
            if (this._map) {
                var hW = e.minZoom;
                if (hW === -1 || hW < this._map.getMinZoom() || hW > this._map.getMaxZoom()) {
                    e.minZoom = this._map.getMinZoom()
                }
                if (e.mapType !== "" && !b7[e.mapType]) {
                    e.mapType = BMAPGL_NORMAL_MAP
                }
            }
            var hU = this.getCopyright(hT.id);
            if (hU) {
                for (var hV in e) {
                    hU[hV] = e[hV]
                }
            } else {
                this._copyrightCollection.push(e)
            }
        },
        getCopyright: function(hT) {
            for (var T = 0,
            e = this._copyrightCollection.length; T < e; T++) {
                if (this._copyrightCollection[T].id === hT) {
                    return this._copyrightCollection[T]
                }
            }
        },
        addSateMapStyle: function() {
            this.sateMapStyle = true;
            if (this._container) {
                D.ac(this._container, "BMap_cpyCtrl_w")
            }
        },
        removeSateMapStyle: function() {
            this.sateMapStyle = false;
            if (this._container) {
                D.rc(this._container, "BMap_cpyCtrl_w")
            }
        }
    });
    function ec(e) {
        a8.call(this);
        e = e || {};
        this.canCheckSize = e.canCheckSize === false ? false: true;
        this.curCityName = "";
        this.curCityCode = "";
        this.defaultOffset = new ea(10, 10);
        this.defaultAnchor = hF.TOP_LEFT;
        this.onChangeBefore = [];
        this.onChangeAfter = [];
        this.onChangeSuccess = [];
        this._opts = {
            printable: false,
            offset: e.offset || this.defaultOffset,
            anchor: e.anchor || this.defaultAnchor,
            expand: !!(e.expand)
        };
        if (e.onChangeBefore && bW(e.onChangeBefore)) {
            this.onChangeBefore.push(e.onChangeBefore)
        }
        if (e.onChangeAfter && bW(e.onChangeAfter)) {
            this.onChangeAfter.push(e.onChangeAfter)
        }
        if (e.onChangeSuccess && bW(e.onChangeSuccess)) {
            this.onChangeSuccess.push(e.onChangeSuccess)
        }
        this.setAnchor(e.anchor);
        this._asyncLoadCode()
    }
    ec.inherits(a8, "CityListControl");
    D.extend(ec.prototype, {
        initialize: function(e) {
            this._map = e;
            return this._container
        }
    });
    function hj(e) {
        a8.call(this);
        e = e || {};
        this._opts = {
            printable: false
        };
        this._opts = D.extend(D.extend(this._opts, {
            unit: "metric"
        }), e);
        this.defaultAnchor = BMAP_ANCHOR_BOTTOM_LEFT;
        this.defaultOffset = new ea(81, 18);
        if (f6()) {
            this.defaultOffset = new ea(75, 10)
        }
        this.setAnchor(e.anchor);
        this._units = {
            metric: {
                name: "metric",
                conv: 1,
                incon: 1000,
                u1: "米",
                u2: "公里"
            },
            us: {
                name: "us",
                conv: 3.2808,
                incon: 5280,
                u1: "英尺",
                u2: "英里"
            }
        };
        this.sateMapStyle = false;
        if (!this._units[this._opts.unit]) {
            this._opts.unit = "metric"
        }
        this._scaleText = null;
        this._numberArray = {};
        this._asyncLoadCode()
    }
    window.BMAP_UNIT_METRIC = "metric";
    window.BMAP_UNIT_IMPERIAL = "us";
    hj.inherits(a8, "ScaleControl");
    D.extend(hj.prototype, {
        initialize: function(e) {
            this._map = e;
            return this._container
        },
        setUnit: function(e) {
            this._opts.unit = this._units[e] && this._units[e].name || this._opts.unit
        },
        getUnit: function() {
            return this._opts.unit
        },
        addSateMapStyle: function() {
            this.sateMapStyle = true;
            var e = this._container;
            if (e) {
                D.ac(e.children[0], "dark")
            }
        },
        removeSateMapStyle: function() {
            this.sateMapStyle = false;
            var e = this._container;
            if (e) {
                D.rc(e.children[0], "dark")
            }
        }
    });
    window.BMAP_NAVIGATION_CONTROL_LARGE = 0;
    window.BMAP_NAVIGATION_CONTROL_SMALL = 1;
    window.BMAP_NAVIGATION_CONTROL_PAN = 2;
    window.BMAP_NAVIGATION_CONTROL_ZOOM = 3;
    window.BMAP_NAVIGATION_CONTROL_ANIM = 4;
    function du(e) {
        a8.call(this);
        e = e || {};
        this._opts = {
            printable: false
        };
        D.extend(this._opts, e);
        this.controlHeight = [{
            width: 65,
            height: 227,
            zoomHeight: 227,
            zoomWidth: 37,
            sliderHeight: 180
        },
        {
            width: 65,
            height: 47,
            zoomHeight: (this._opts.forceNew === true) ? 56 : 47,
            zoomWidth: 37,
            sliderHeight: 0
        },
        {
            width: 37,
            height: 57,
            zoomHeight: 0,
            zoomWidth: 0,
            sliderHeight: 0
        },
        {
            width: 26,
            height: 56,
            zoomHeight: 56,
            zoomWidth: 6,
            sliderHeight: 0
        },
        {
            width: 56,
            height: 47,
            zoomHeight: 47,
            zoomWidth: 37,
            sliderHeight: 180
        }];
        this.defaultAnchor = BMAP_ANCHOR_TOP_LEFT;
        this.defaultOffset = new ea(10, 10);
        this.setAnchor(e.anchor);
        this.setType(e.type);
        this._maxTotalZoomLv = 19;
        this._minZoomLevel = -1;
        this._maxZoomLevel = -1;
        this._totalZoomLv = -1;
        this._sliderInterval = 10;
        this._sliderHeight = 180;
        this._minBarY = 1;
        this._maxBarY = -1;
        this._curBarY = -1;
        this._zoomDom = null;
        this._zoomBtnDom = null;
        this._sliderDom = null;
        this._sliderBaseDom = null;
        this._cZIndex = "1100";
        this._asyncLoadCode()
    }
    du.inherits(a8, "NavigationControl");
    D.extend(du.prototype, {
        initialize: function(e) {
            this._map = e;
            return this._container
        },
        setType: function(e) {
            if (typeof e == "number" && e >= BMAP_NAVIGATION_CONTROL_LARGE && e <= BMAP_NAVIGATION_CONTROL_ANIM) {
                this._opts.type = e
            } else {
                this._opts.type = BMAP_NAVIGATION_CONTROL_LARGE
            }
        },
        getType: function() {
            return this._opts.type
        }
    });
    function bD(i) {
        a8.call(this);
        i = i || {};
        this._opts = {
            printable: false
        };
        this.defaultAnchor = BMAP_ANCHOR_TOP_RIGHT;
        this.defaultOffset = new ea(10, 10);
        this.setAnchor(i.anchor);
        this._opts = D.extend(D.extend(this._opts, {
            offset: this.defaultOffset,
            enableSwitch: true
        }), i);
        var e = this;
        eb.load("control",
        function() {
            e._asyncDraw()
        })
    }
    bD.inherits(a8, "MapTypeControl");
    D.extend(bD.prototype, {
        initialize: function(e) {
            this._map = e;
            return this._container
        },
        showStreetLayer: function(e) {
            this._map.showStreetLayer(e)
        }
    });
    function cz(e) {
        a8.call(this);
        e = e || {};
        this._opts = {};
        this._opts = D.extend(this._opts, e);
        this._zoomInDisabled = false;
        this._zoomOutDisabled = false;
        this._zoomInTapped = false;
        this._zoomOutTapped = false;
        this.defaultAnchor = hF.BOTTOM_RIGHT;
        this.defaultOffset = new ea(15, 20);
        this.setAnchor(e.anchor);
        this._asyncLoadCode()
    }
    cz.inherits(a8, "ZoomControl");
    D.extend(cz.prototype, {
        initialize: function(e) {
            this._map = e;
            return this._container
        }
    });
    function bB(e) {
        a8.call(this);
        e = e || {};
        this._opts = {
            autoZoom: true,
            autoViewport: true
        };
        this._opts = D.extend(this._opts, e);
        this.defaultAnchor = hF.BOTTOM_LEFT;
        this.defaultOffset = new ea(10, 50);
        this.watchPosition = this._opts.watchPosition || false;
        this.useCompass = this._opts.useCompass || false;
        this.locMarker = null;
        this.locLevel = 16;
        this.setAnchor(this._opts.anchor);
        this.onLocationStart = e.onLocationStart || null;
        this._asyncLoadCode()
    }
    bB.inherits(a8, "LocationControl");
    D.extend(bB.prototype, {
        initialize: function(e) {
            this._map = e;
            return this._container
        },
        startLocation: function() {
            this._startLocationCalled = true
        },
        stopLocationTrace: function() {},
        setOptions: function(e) {
            e = e || {};
            D.extend(this._opts, e)
        }
    });
    function ag(e) {
        a8.call(this);
        e = e || {};
        this._opts = {};
        this._opts = D.extend(this._opts, e);
        this.defaultAnchor = hF.BOTTOM_LEFT;
        this.defaultOffset = new ea(5, 15);
        if (f6()) {
            this.defaultOffset = new ea(10, 10)
        }
        this.setAnchor(e.anchor)
    }
    ag.inherits(a8, "LogoControl");
    D.extend(ag.prototype, {
        initialize: function(i) {
            this._map = i;
            var e = this._container = document.createElement("div");
            e.innerHTML = '<img src="' + e4.apiHost + '/images/logo_hd.png"  style="height:21px;width:62px;"/>';
            i.getContainer().appendChild(e);
            return e
        }
    });
    function gC(e, i) {
        this._map = e;
        this._indoorInfo = i;
        this._visible = true;
        this._adjustVisible = true;
        this._isMobile = f6();
        this._sizeConfig = {
            FLOOR_BTN_HEIGHT: this._isMobile ? 35 : 26,
            SWITCH_ARROW_HEIGHT: this._isMobile ? 20 : 15
        };
        this._init()
    }
    gC.prototype._init = function() {
        this._render();
        this._bindDom();
        this._bind();
        this._adjustDisplayHeight();
        var e = new bc("onindoor_bar_show");
        e.uid = this._indoorInfo.uid;
        this._map.dispatchEvent(e)
    };
    gC.prototype._render = function() {
        if (!this._indoorInfo) {
            return
        }
        var hX = this._isMobile;
        var e = this._div = U("div");
        D.ac(e, "floor-select-container");
        hX && D.ac(e, "mobile");
        hX && D.ac(e, "all-border-radius");
        var i = this._btnTop = U("button");
        D.ac(i, "floor-switch-top");
        D.ac(i, "top-border-radius");
        var hV = U("div");
        D.ac(hV, "floor-switch-top-icon");
        i.appendChild(hV);
        var hU = this._btnBottom = U("button");
        var T = U("div");
        D.ac(T, "floor-switch-bottom-icon");
        hU.appendChild(T);
        D.ac(hU, "floor-switch-bottom");
        D.ac(hU, "bottom-border-radius");
        var hT = this._floorsContainer = U("div");
        D.ac(hT, "floors-container");
        hT.appendChild(this._createFloorsDom());
        this._div.appendChild(i);
        this._div.appendChild(hT);
        this._div.appendChild(hU);
        var hY = 0;
        if (this._btnTop.style.display === "") {
            hY = 2 * this._sizeConfig.SWITCH_ARROW_HEIGHT
        }
        this._div.style.height = parseInt(this._floorsContainer.style.height, 10) + hY + "px";
        this._map.getContainer().appendChild(this._div);
        if (!hX) {
            var hW = this;
            setTimeout(function() {
                hW._div.style.right = "20px"
            },
            20)
        }
    };
    gC.prototype._createFloorsDom = function() {
        if (!this._indoorInfo) {
            return
        }
        var T = this._ol = U("ol");
        var hV = this._indoorInfo.currentFloor;
        for (var hU = this._indoorInfo.floors.length - 1; hU >= 0; hU--) {
            var hW = this._indoorInfo.floors[hU].floorName;
            var e = U("li");
            var hT = U("button");
            D.ac(hT, "btn-select-floor");
            if (hU === hV) {
                D.ac(hT, "selected")
            }
            hT.setAttribute("data-floor", hU);
            hT.innerHTML = hW;
            e.appendChild(hT);
            T.appendChild(e)
        }
        return T
    };
    gC.prototype._updateUI = function() {
        if (!this._ol) {
            this._render();
            this._bind();
            this._adjustDisplayHeight();
            return
        }
        this._ol = null;
        this._ol = this._createFloorsDom();
        this._floorsContainer.innerHTML = "";
        this._floorsContainer.appendChild(this._ol);
        this._adjustDisplayHeight()
    };
    gC.prototype._bindDom = function() {
        var e = this;
        D.on(this._floorsContainer, "click",
        function(hT) {
            var T = hT.target || hT.srcElement;
            if (T.tagName.toLowerCase() === "button") {
                e._map.showIndoor(e._indoorInfo.uid, parseInt(T.getAttribute("data-floor"), 10));
                var i = new bc("onindoor_bar_click");
                i.uid = e._indoorInfo.uid;
                e._map.dispatchEvent(i)
            }
        });
        D.on(this._floorsContainer, "mouseover",
        function(T) {
            var i = T.target;
            if (i.tagName.toLowerCase() === "button") {
                D.ac(i, "hover")
            }
        });
        D.on(this._floorsContainer, "mouseout",
        function(T) {
            var i = T.target;
            if (i.tagName.toLowerCase() === "button") {
                D.rc(i, "hover")
            }
        });
        D.on(this._floorsContainer, "touchstart",
        function(T) {
            var i = T.target;
            if (i.tagName.toLowerCase() === "button") {
                D.ac(i, "onmousedown")
            }
        });
        D.on(this._floorsContainer, "touchend",
        function(T) {
            var i = T.target;
            if (i.tagName.toLowerCase() === "button") {
                D.rc(i, "onmousedown")
            }
        });
        D.on(this._btnTop, "mouseover",
        function(i) {
            if (this._disable) {
                return
            }
            D.ac(this, "hover")
        });
        D.on(this._btnTop, "mouseout",
        function(i) {
            D.rc(this, "hover")
        });
        D.on(this._btnBottom, "mouseover",
        function(i) {
            if (this._disable) {
                return
            }
            D.ac(this, "hover")
        });
        D.on(this._btnBottom, "mouseout",
        function(i) {
            D.rc(this, "hover")
        });
        D.on(this._btnTop, "touchstart",
        function(i) {
            if (this.className.indexOf("disable") > -1) {
                return
            }
            D.ac(this, "onmousedown")
        });
        D.on(this._btnTop, "touchend",
        function(i) {
            D.rc(this, "onmousedown")
        });
        D.on(this._btnBottom, "touchstart",
        function(i) {
            if (this.className.indexOf("disable") > -1) {
                return
            }
            D.ac(this, "onmousedown")
        });
        D.on(this._btnBottom, "touchend",
        function(i) {
            D.rc(this, "onmousedown")
        });
        D.on(this._btnTop, "click",
        function(i) {
            e._setBarSliderTop(parseInt(e._ol.style.top, 10) + 26)
        });
        D.on(this._btnBottom, "click",
        function(i) {
            e._setBarSliderTop(parseInt(e._ol.style.top, 10) - 26)
        });
        D.on(this._div, "mousemove", h);
        D.on(this._div, "wheel", dc);
        D.on(this._div, "mousewheel", dc);
        this._map.addEventListener("resize",
        function() {
            e._adjustDisplayHeight()
        })
    };
    gC.prototype._adjustDisplayHeight = function() {
        if (!this._indoorInfo) {
            return
        }
        var hV = this._map.getSize().height;
        var hW = this._sizeConfig.FLOOR_BTN_HEIGHT;
        var hX = hV - 291 - 100;
        if (this._isMobile) {
            hX = hV - 12 - 108 - this._map.config.bottomOffset
        }
        var e = this._indoorInfo.floors.length;
        var T = e * hW;
        var hT = e;
        var hZ = 0;
        var h0 = this._floorsContainer.children[0];
        if (T > hX) {
            this._showArrow = true;
            D.rc(h0.children[0].children[0], "top-border-radius");
            D.rc(h0.children[e - 1].children[0], "bottom-border-radius")
        } else {
            this._showArrow = false;
            D.ac(h0.children[0].children[0], "top-border-radius");
            D.ac(h0.children[e - 1].children[0], "bottom-border-radius")
        }
        while (T > hX) {
            if (hT === 0) {
                break
            }
            hT--;
            hZ = 2 * this._sizeConfig.SWITCH_ARROW_HEIGHT;
            T = hT * hW + hZ
        }
        this._currentDisplayHeight = T;
        if (hT < 3) {
            this._setAdjustVisbile(false)
        } else {
            this._setAdjustVisbile(true)
        }
        this._floorsContainer.style.height = hT * hW + "px";
        var hU = this._indoorInfo.currentFloor;
        var i = e - hU;
        var hY = hU - 1;
        this._div.style.height = parseInt(this._floorsContainer.style.height, 10) + hZ + "px";
        var h1 = -(e - (hU + Math.round(hT / 2))) * hW;
        this._setBarSliderTop(h1);
        if (hT < e) {
            D.show(this._btnTop);
            D.show(this._btnBottom)
        } else {
            D.hide(this._btnTop);
            D.hide(this._btnBottom);
            this._setBarSliderTop(0)
        }
        if (this._isMobile) {
            this._div.style.bottom = 108 + this._map.config.bottomOffset + "px"
        }
    };
    gC.prototype._setBarSliderTop = function(hT) {
        var T = 26;
        var i = this._indoorInfo.floors.length;
        var e = i * T;
        if (this._currentDisplayHeight) {
            if (this._showArrow) {
                e = this._currentDisplayHeight - 30
            } else {
                e = this._currentDisplayHeight
            }
        }
        if (e - hT >= i * T) {
            hT = e - i * T;
            D.ac(this._btnBottom, "disable");
            D.rc(this._btnBottom, "hover");
            this._btnBottom._disable = true
        } else {
            D.rc(this._btnBottom, "disable");
            this._btnBottom._disable = false
        }
        if (hT >= 0) {
            hT = 0;
            D.ac(this._btnTop, "disable");
            D.rc(this._btnTop, "hover");
            this._btnTop._disable = true
        } else {
            D.rc(this._btnTop, "disable");
            this._btnTop._disable = false
        }
        this._ol.style.top = hT + "px"
    };
    gC.prototype._setAdjustVisbile = function(e) {
        if (this._adjustVisible === e) {
            return
        }
        this._adjustVisible = e;
        if (e && this._visible) {
            this._div.style.right = "20px"
        } else {
            this._div.style.right = "-30px"
        }
    };
    gC.prototype._bind = function() {
        var i = this._map;
        var e = this;
        i.on("indoor_status_changed",
        function(hX) {
            if (e._visible === false) {
                return
            }
            var T = e._ol;
            var hV = hX.uid;
            if (!hV) {
                return
            }
            var hW = hX.floor;
            for (var hU = 0; hU < T.children.length; hU++) {
                var hT = T.children[hU].children[0];
                if (parseInt(hT.getAttribute("data-floor"), 10) === hW) {
                    D.ac(hT, "selected")
                } else {
                    D.rc(hT, "selected")
                }
            }
        });
        i.on("zoomend",
        function(T) {
            if (this.getZoom() < 17) {
                e._setAdjustVisbile(false)
            } else {
                e._setAdjustVisbile(true)
            }
        })
    };
    gC.prototype.setInfo = function(e) {
        if (this._indoorInfo && this._indoorInfo.uid === e.uid) {
            return
        }
        this._indoorInfo = e;
        this._updateUI()
    };
    gC.prototype.show = function() {
        if (this._visible === true) {
            return
        }
        this._visible = true;
        if (!this._isMobile) {
            this._div.style.right = "20px"
        } else {
            this._div.style.display = ""
        }
        var e = new bc("onindoor_bar_show");
        e.uid = this._indoorInfo.uid;
        this._map.dispatchEvent(e)
    };
    gC.prototype.hide = function() {
        if (this._visible === false) {
            return
        }
        this._visible = false;
        if (!this._isMobile) {
            this._div.style.right = "-30px"
        } else {
            this._div.style.display = "none"
        }
    };
    function eV() {
        this._opts = {};
        this.defaultOffset = new ea(2, 80);
        this.defaultAnchor = BMAP_ANCHOR_BOTTOM_RIGHT;
        this._firstAnimation = true
    }
    eV.inherits(a8, "NavigationControl3D");
    D.extend(eV.prototype, {
        initialize: function(T) {
            this._map = T;
            this._createDom();
            this._bindDom();
            this._bind();
            if (!f6()) {
                this._headingControl = new hI(this._map, this._div)
            }
            this._tiltControl = new et(this._map, this._div);
            this._render();
            var i = this._map.getMapType();
            var e = this;
            if (i === "B_EARTH_MAP" || this._map._renderType === "webgl") {
                e._div.style.opacity = "1";
                e._div.style.visibility = "visible"
            } else {
                e._div.style.opacity = "0";
                e._div.style.visibility = "hidden"
            }
            return this._container
        },
        _createDom: function() {
            var i = this._div = document.createElement("div");
            this._container = i;
            var e = i.style;
            e.position = "absolute";
            e.zIndex = 5;
            e.width = "52px";
            e.height = "82px";
            e.right = "-3px";
            e.bottom = "79px";
            e.opacity = "0";
            e.visibility = "hidden";
            e.WebkitTransition = e.transition = "opacity .3s ease-out,visibility .3s ease-out"
        },
        _render: function() {
            var e = document.getElementById("map-operate");
            if (e) {
                e.appendChild(this._div)
            } else {
                this._map.getContainer().appendChild(this._div)
            }
        },
        _bindDom: function() {
            this._div.addEventListener("mousemove", h)
        },
        _bind: function() {
            if (this._map._renderType === "webgl") {
                return
            }
            var e = this;
            this._map.on("maptypechange",
            function() {
                if (this.mapType === "B_EARTH_MAP") {
                    if (e._firstAnimation) {
                        e._firstAnimation = false;
                        setTimeout(function() {
                            e._div.style.opacity = "1";
                            e._div.style.visibility = "visible"
                        },
                        300)
                    } else {
                        e._div.style.opacity = "1";
                        e._div.style.visibility = "visible"
                    }
                } else {
                    e._div.style.opacity = "0";
                    e._div.style.visibility = "hidden"
                }
            })
        }
    });
    function hI(T, i) {
        this._map = T;
        this._target = T;
        var hT = T.temp.originMapType || T.mapType;
        if (hT === "B_EARTH_MAP" && T._earth) {
            this._target = T._earth
        }
        this._outContainer = i || T.getContainer();
        this._imgRatio = a7() >= c9.HIGH_RES_MIN_RATIO ? 2 : 1;
        this._imgPath = e4.imgPath + "earth-navi-control-pc4" + (this._imgRatio === 2 ? "-2x.png": ".png");
        this._enabled = true;
        var e = this;
        this._setHeadingOptions = {
            callback: function() {
                e._target.setLock(false)
            }
        };
        this._init()
    }
    D.extend(hI.prototype, {
        _init: function() {
            this._createDom();
            this._render();
            this._bindDom();
            this._bind();
            this._updateUI();
            this._checkEnable()
        },
        _checkEnable: function() {
            if (this._target.getZoom() >= this._target._enableHeadingZoom) {
                this.enable()
            } else {
                this.disable()
            }
        },
        _createDom: function() {
            var i = this._div = U("div");
            var e = i.style;
            e.position = "absolute";
            e.zIndex = 5;
            e.top = "0";
            e.left = "0";
            e.width = "52px";
            e.height = "54px";
            e.background = "url(" + this._imgPath + ") no-repeat";
            e.backgroundSize = "266px auto";
            this._rotateCCW = this._createButton();
            this._rotateCCW.title = "逆时针转动";
            e = this._rotateCCW.style;
            e.left = "2px";
            e.top = "5px";
            e.zIndex = "1";
            e.width = "15px";
            e.height = "42px";
            e.backgroundPosition = "-75px -5px";
            this._rotateCW = this._createButton();
            this._rotateCW.title = "顺时针转动";
            e = this._rotateCW.style;
            e.right = "2px";
            e.top = "5px";
            e.zIndex = "1";
            e.width = "15px";
            e.height = "42px";
            e.backgroundPosition = "-75px -5px";
            e.WebkitTransform = e.transform = "scaleX(-1)";
            this._compass = this._createButton();
            this._compass.title = "恢复正北方向";
            e = this._compass.style;
            e.left = "19px";
            e.top = "4px";
            e.width = "14px";
            e.height = "44px";
            e.backgroundPosition = "-56px -4px";
            e.WebkitTransform = e.transform = "rotate(0deg)";
            this._div.appendChild(this._rotateCCW);
            this._div.appendChild(this._compass);
            this._div.appendChild(this._rotateCW);
            this._domRendered = true
        },
        _createButton: function() {
            var e = U("button");
            var i = e.style;
            i.position = "absolute";
            i.outline = "none";
            i.border = "none";
            i.background = "url(" + this._imgPath + ") no-repeat";
            i.backgroundSize = "266px auto";
            i.cursor = "pointer";
            return e
        },
        _render: function() {
            this._outContainer.appendChild(this._div)
        },
        enable: function() {
            this._enabled = true;
            if (this._domRendered) {
                this._rotateCCW.style.cursor = "pointer";
                this._rotateCCW.style.opacity = 1;
                this._rotateCW.style.cursor = "pointer";
                this._rotateCW.style.opacity = 1;
                this._compass.style.cursor = "pointer";
                this._compass.style.opacity = 1
            }
        },
        disable: function() {
            this._enabled = false;
            if (this._domRendered) {
                this._rotateCCW.style.cursor = "";
                this._rotateCCW.style.opacity = 0.4;
                this._rotateCW.style.cursor = "";
                this._rotateCW.style.opacity = 0.4;
                this._compass.style.cursor = "";
                this._compass.style.opacity = 0.4
            }
        },
        _bindDom: function() {
            eL(this._div, ["mousedown", "click", "dblclick"]);
            var i = this._map;
            var e = this;
            this._rotateCW.addEventListener("click",
            function() {
                if (e._isOperating || e._enabled === false) {
                    return
                }
                if (e._target.getLock()) {
                    return
                }
                if (e._target.getHeading() === 360) {
                    e._target.setHeading(0)
                }
                e._target.setLock(true);
                e._target.setHeading(e._target.getHeading() + 90, e._setHeadingOptions);
                i.fire(new bc("onrotatecwclick"))
            },
            false);
            this._rotateCCW.addEventListener("click",
            function() {
                if (e._isOperating || e._enabled === false) {
                    return
                }
                if (e._target.getLock()) {
                    return
                }
                if (e._target.getHeading() === -360) {
                    e._target.setHeading(0)
                }
                e._target.setLock(true);
                e._target.setHeading(e._target.getHeading() - 90, e._setHeadingOptions);
                i.fire(new bc("onrotateccwclick"))
            },
            false);
            this._rotateCW.addEventListener("mouseover",
            function() {
                if (e._enabled === false) {
                    return
                }
                this.style.backgroundPosition = "-89px -5px"
            },
            false);
            this._rotateCW.addEventListener("mouseout",
            function() {
                if (e._enabled === false) {
                    return
                }
                this.style.backgroundPosition = "-75px -5px"
            },
            false);
            this._rotateCCW.addEventListener("mouseover",
            function() {
                if (e._enabled === false) {
                    return
                }
                this.style.backgroundPosition = "-89px -5px"
            },
            false);
            this._rotateCCW.addEventListener("mouseout",
            function() {
                if (e._enabled === false) {
                    return
                }
                this.style.backgroundPosition = "-75px -5px"
            },
            false);
            this._compass.addEventListener("click",
            function() {
                if (e._isOperating || e._enabled === false) {
                    return
                }
                if (e._target.getLock()) {
                    return
                }
                e._target.setLock(true);
                var T = false;
                if (e._target.getTilt() !== 0) {
                    T = true;
                    e._target.setTilt(0, e._setHeadingOptions)
                }
                if (e._target.getHeading() % 360 !== 0) {
                    T = true;
                    e._target.resetHeading(e._setHeadingOptions)
                }
                if (!T) {
                    e._target.setLock(false)
                }
                i.fire(new bc("oncompassclick"))
            },
            false)
        },
        _bind: function() {
            var e = this;
            this._bindTarget(this._target);
            if (this._map._renderType === "webgl") {
                this._map.addEventListener("maptypechange",
                function(i) {
                    if (this.mapType === "B_EARTH_MAP") {
                        e._target = e._map._earth
                    } else {
                        e._target = e._map
                    }
                    e._bindTarget(e._target);
                    e._checkEnable()
                })
            }
        },
        _bindTarget: function(i) {
            if (i === this._map && this._mapBinded) {
                return
            }
            if (i === this._map._earth && this._earthBinded) {
                return
            }
            var e = this;
            i.addEventListener("heading_changed",
            function(T) {
                e._updateUI()
            });
            i.addEventListener("animation_start",
            function(T) {
                e._isOperating = true
            });
            i.addEventListener("animation_end",
            function(T) {
                e._isOperating = false
            });
            i.on("load",
            function() {
                e._checkEnable()
            });
            i.on("zoom_changed",
            function() {
                e._checkEnable()
            });
            if (i === this._map) {
                this._mapBinded = true
            } else {
                this._earthBinded = true
            }
        },
        _updateUI: function() {
            var e = this._target.getHeading();
            var i = this._compass.style;
            i.WebkitTransform = i.transform = "rotate(" + e + "deg)"
        },
        hide: function() {
            this._div.style.display = "none"
        },
        show: function() {
            this._div.style.display = "block"
        }
    });
    function et(T, i) {
        this._map = T;
        this._target = T;
        var hT = T.temp.originMapType || T.mapType;
        if (hT === "B_EARTH_MAP" && T._earth) {
            this._target = T._earth
        }
        this._outContainer = i || T.getContainer();
        this._imgRatio = a7() >= c9.HIGH_RES_MIN_RATIO ? 2 : 1;
        this._imgPath = e4.imgPath + "gl-navi-control-pc4" + (this._imgRatio === 2 ? "-2x.png": ".png");
        this._enabled = true;
        var e = this;
        this._setTiltOptions = {
            callback: function() {
                e._target.setLock(false)
            }
        };
        this._init()
    }
    D.extend(et.prototype, {
        _init: function() {
            this._createDom();
            this._render();
            this._bindDom();
            this._bind();
            this._checkEnable()
        },
        _checkEnable: function() {
            if (this._target.getZoom() >= this._target._enableTiltZoom) {
                this.enable()
            } else {
                this.disable()
            }
        },
        _createDom: function() {
            var e = this._div = U("button");
            e.title = "倾斜";
            var i = e.style;
            i.position = "absolute";
            i.zIndex = 5;
            i.outline = "none";
            i.border = "none";
            i.cursor = "pointer";
            i.width = "26px";
            i.height = "26px";
            i.top = "56px";
            i.right = "13px";
            i.background = "url(" + this._imgPath + ") no-repeat #fff";
            i.backgroundSize = "266px auto";
            i.backgroundPosition = "-110px 1px";
            i.boxShadow = "1px 2px 1px rgba(0, 0, 0, 0.15)"
        },
        enable: function() {
            this._enabled = true;
            if (this._div) {
                this._div.style.cursor = "pointer"
            }
            this._updateUI()
        },
        disable: function() {
            this._enabled = false;
            if (this._div) {
                this._div.style.cursor = ""
            }
            this._updateUI()
        },
        _render: function() {
            this._outContainer.appendChild(this._div)
        },
        _bindDom: function() {
            var e = this;
            this._div.addEventListener("mousedown",
            function(hT) {
                if (!e._enabled) {
                    return
                }
                if (e._target.getLock()) {
                    return
                }
                var i = e._target.getTilt();
                var T;
                if (i === e._map.getCurrentMaxTilt()) {
                    T = "out"
                } else {
                    if (i === 0) {
                        T = "in"
                    } else {
                        T = e._preTrend ? e._preTrend: "in"
                    }
                }
                e._curTrend = T;
                e._clickTimer = setTimeout(function() {
                    e._map.fire(new bc("ontiltmsdown"));
                    e._tiltAni = new p({
                        duration: 9999999,
                        render: function(hU) {
                            i = e._target.getTilt();
                            if (T === "in" && i < e._map.getCurrentMaxTilt()) {
                                e._target.setTilt(i + 1, {
                                    noAnimation: true
                                })
                            } else {
                                if (T === "out" && i > 0) {
                                    e._target.setTilt(i - 1, {
                                        noAnimation: true
                                    })
                                }
                            }
                        },
                        finish: function() {
                            e._tiltAni = null
                        }
                    });
                    e._clickTimer = null
                },
                200);
                hT.stopPropagation()
            },
            false);
            this._div.addEventListener("mouseup",
            function(i) {
                if (!e._enabled) {
                    return
                }
                if (e._tiltAni) {
                    e._tiltAni.stop()
                }
                e._preTrend = e._curTrend
            },
            false);
            this._div.addEventListener("click",
            function(hT) {
                if (!e._enabled) {
                    return
                }
                if (!e._clickTimer) {
                    return
                }
                if (e._target.getLock()) {
                    return
                }
                clearTimeout(e._clickTimer);
                e._map.fire(new bc("ontiltclick"));
                var i = e._target.getTilt();
                e._target.setLock(true);
                hT.stopPropagation();
                var T = e._map.getCurrentMaxTilt();
                if (e._curTrend === "in") {
                    e._target.setTilt(T, e._setTiltOptions)
                } else {
                    if (e._curTrend === "out") {
                        e._target.setTilt(0, e._setTiltOptions)
                    } else {
                        if (i < T) {
                            e._target.setTilt(T, e._setTiltOptions)
                        } else {
                            e._target.setTilt(0, e._setTiltOptions)
                        }
                    }
                }
            },
            false);
            this._div.addEventListener("mouseover",
            function(i) {
                if (!e._enabled) {
                    return
                }
                e._mouseOver = true;
                e._updateUI()
            },
            false);
            this._div.addEventListener("mouseout",
            function(i) {
                if (!e._enabled) {
                    return
                }
                e._mouseOver = false;
                e._updateUI()
            },
            false);
            eL(this._div, ["mousedown", "click", "dblclick"])
        },
        _bind: function() {
            var e = this;
            var i = this._map;
            this._bindTarget(this._target);
            if (this._map._renderType === "webgl") {
                this._map.addEventListener("maptypechange",
                function(T) {
                    if (this.mapType === "B_EARTH_MAP") {
                        e._target = e._map._earth
                    } else {
                        e._target = e._map
                    }
                    e._bindTarget(e._target);
                    e._checkEnable()
                })
            }
        },
        _bindTarget: function(i) {
            if (i === this._map && this._mapBinded) {
                return
            }
            if (i === this._map._earth && this._earthBinded) {
                return
            }
            var e = this;
            i.on("load",
            function() {
                e._checkEnable()
            });
            i.on("zoom_changed",
            function() {
                e._checkEnable()
            });
            i.on("tilt_changed",
            function() {
                e._updateUI()
            });
            if (i === this._map) {
                this._mapBinded = true
            } else {
                this._earthBinded = true
            }
        },
        _updateUI: function() {
            var T = this._target.getTilt();
            var i = 0;
            var hT = 0;
            var e = 0;
            if (T > 0) {
                i = 78
            }
            if (this._mouseOver) {
                e = 52
            }
            if (this._enabled === false) {
                hT = 26;
                e = 0;
                i = 0
            }
            var hU = "-" + (110 + i + hT + e) + "px 1px";
            this._div && (this._div.style.backgroundPosition = hU);
            if (this._enabled) {
                if (T > 0) {
                    this._div && (this._div.title = "恢复")
                } else {
                    this._div && (this._div.title = "倾斜")
                }
            } else {
                this._div && (this._div.title = "请放大地图后操作")
            }
        },
        hide: function() {
            this._div.style.display = "none"
        },
        show: function() {
            this._div.style.display = "block"
        }
    });
    function cg(i) {
        ee.call(this);
        this._opts = {
            container: null,
            cursor: "default"
        };
        this._opts = D.extend(this._opts, i);
        this._type = "contextmenu";
        this._map = null;
        this._container;
        this._left = 0;
        this._top = 0;
        this._items = [];
        this._rItems = [];
        this._dividers = [];
        this._enable = true;
        this.curPixel = null;
        this.curPoint = null;
        this._isOpen = false;
        var e = this;
        eb.load("menu",
        function() {
            e._draw()
        })
    }
    cg.inherits(ee, "ContextMenu");
    D.extend(cg.prototype, {
        initialize: function(e) {
            this._map = e
        },
        remove: function() {
            this._map = null
        },
        addItem: function(hU, e) {
            if (!hU || hU._type != "menuitem" || hU._text == "" || hU._width <= 0) {
                return
            }
            for (var hT = 0,
            T = this._items.length; hT < T; hT++) {
                if (this._items[hT] === hU) {
                    return
                }
            }
            if (e === undefined || e > this._items.length - 1) {
                e = -1
            }
            hU._insertIndex = e;
            if (e === -1) {
                this._items.push(hU);
                this._rItems.push(hU)
            } else {
                this._items.splice(e, 0, hU);
                this._rItems.splice(e, 0, hU)
            }
        },
        removeItem: function(hT) {
            if (!hT || hT._type != "menuitem") {
                return
            }
            for (var T = 0,
            e = this._items.length; T < e; T++) {
                if (this._items[T] === hT) {
                    this._items[T].remove();
                    this._items.splice(T, 1);
                    delete hT._insertIndex;
                    e--
                }
            }
            for (var T = 0,
            e = this._rItems.length; T < e; T++) {
                if (this._rItems[T] === hT) {
                    this._rItems[T].remove();
                    this._rItems.splice(T, 1);
                    delete hT._insertIndex;
                    e--
                }
            }
        },
        addSeparator: function(e) {
            if (e === undefined || e > this._items.length - 1) {
                e = -1
            }
            var i = {
                _type: "divider",
                _dIndex: this._dividers.length,
                _insertIndex: e
            };
            this._dividers.push({
                dom: null
            });
            if (e === -1) {
                this._items.push(i)
            } else {
                this._items.splice(e, 0, i)
            }
        },
        removeSeparator: function(T) {
            if (!this._dividers[T]) {
                return
            }
            for (var hT = 0,
            e = this._items.length; hT < e; hT++) {
                if (this._items[hT] && this._items[hT]._type == "divider" && this._items[hT]._dIndex == T) {
                    this._items.splice(hT, 1);
                    e--
                }
                if (this._items[hT] && this._items[hT]._type == "divider" && this._items[hT]._dIndex > T) {
                    this._items[hT]._dIndex--
                }
            }
            this._dividers.splice(T, 1)
        },
        getDom: function() {
            return this._container
        },
        show: function() {
            if (this._isOpen == true) {
                return
            }
            this._isOpen = true
        },
        hide: function() {
            if (this._isOpen == false) {
                return
            }
            this._isOpen = false
        },
        setCursor: function(e) {
            if (!e) {
                return
            }
            this._opts.cursor = e
        },
        getItem: function(e) {
            return this._rItems[e]
        },
        enable: function() {
            this._enable = true
        },
        disable: function() {
            this._enable = false
        }
    });
    function fz(T, hT, i) {
        if (!T || !hT || typeof hT != "function") {
            return
        }
        ee.call(this);
        this._opts = {
            width: 100,
            id: ""
        };
        i = i || {};
        this._opts.width = (i.width * 1) ? i.width: 100;
        this._opts.id = i.id ? i.id: "";
        this._text = T + "";
        this._callback = hT;
        this._map = null;
        this._type = "menuitem";
        this._contextmenu = null;
        this._container = null;
        this._enabled = true;
        var e = this;
        eb.load("menu",
        function() {
            e._draw()
        })
    }
    fz.inherits(ee, "MenuItem");
    D.extend(fz.prototype, {
        initialize: function(e, i) {
            this._map = e;
            this._contextmenu = i
        },
        remove: function() {
            this._contextmenu = null;
            this._map = null
        },
        setText: function(e) {
            if (!e) {
                return
            }
            this._text = e + ""
        },
        getDom: function() {
            return this._container
        },
        enable: function() {
            this._enabled = true
        },
        disable: function() {
            this._enabled = false
        }
    });
    function dT(e, i) {
        this.setSouthWest(e);
        this.setNorthEast(i)
    }
    D.extend(dT.prototype, {
        isEmpty: function() {
            return this.sw === null && this.ne === null
        },
        equals: function(e) {
            if (!e || e.isEmpty() || this.isEmpty()) {
                return false
            }
            return this.sw.equals(e.sw) && this.ne.equals(e.ne)
        },
        containsBounds: function(e) {
            if (!e || e.isEmpty() || this.isEmpty()) {
                return false
            }
            return (e.sw.lng > this.sw.lng && e.ne.lng < this.ne.lng && e.sw.lat > this.sw.lat && e.ne.lat < this.ne.lat)
        },
        getCenter: function() {
            if (this.isEmpty()) {
                return null
            }
            return new hu((this.sw.lng + this.ne.lng) / 2, (this.sw.lat + this.ne.lat) / 2)
        },
        intersects: function(T) {
            if (!T || T.isEmpty() || this.isEmpty()) {
                return null
            }
            if (Math.max(T.sw.lng, T.ne.lng) < Math.min(this.sw.lng, this.ne.lng) || Math.min(T.sw.lng, T.ne.lng) > Math.max(this.sw.lng, this.ne.lng) || Math.max(T.sw.lat, T.ne.lat) < Math.min(this.sw.lat, this.ne.lat) || Math.min(T.sw.lat, T.ne.lat) > Math.max(this.sw.lat, this.ne.lat)) {
                return null
            }
            var hU = Math.max(this.sw.lng, T.sw.lng);
            var i = Math.min(this.ne.lng, T.ne.lng);
            var hT = Math.max(this.sw.lat, T.sw.lat);
            var e = Math.min(this.ne.lat, T.ne.lat);
            return new dT(new hu(hU, hT), new hu(i, e))
        },
        setMinMax: function() {
            this.minX = this.sw ? this.sw.lng: null;
            this.minY = this.sw ? this.sw.lat: null;
            this.maxX = this.ne ? this.ne.lng: null;
            this.maxY = this.ne ? this.ne.lat: null
        },
        containsPoint: function(e) {
            if (!e) {
                return
            }
            return (e.lng >= this.sw.lng && e.lng <= this.ne.lng && e.lat >= this.sw.lat && e.lat <= this.ne.lat)
        },
        extend: function(e) {
            if (!e) {
                return
            }
            var i = e.lng;
            var T = e.lat;
            if (!this.sw) {
                this.sw = e.clone()
            }
            if (!this.ne) {
                this.ne = e.clone()
            }
            if (this.sw.lng > i) {
                this.sw.lng = i
            }
            if (this.ne.lng < i) {
                this.ne.lng = i
            }
            if (this.sw.lat > T) {
                this.sw.lat = T
            }
            if (this.ne.lat < T) {
                this.ne.lat = T
            }
        },
        getMin: function() {
            return this.sw
        },
        getMax: function() {
            return this.ne
        },
        getSouthWest: function() {
            return this.sw
        },
        getNorthEast: function() {
            return this.ne
        },
        setSouthWest: function(e) {
            this.sw = e ? e.clone() : null
        },
        setNorthEast: function(e) {
            this.ne = e ? e.clone() : null
        },
        clone: function() {
            return new dT(this.sw, this.ne)
        },
        toSpan: function() {
            if (this.isEmpty()) {
                return new ea(0, 0)
            }
            return new ea(Math.abs(this.ne.lng - this.sw.lng), Math.abs(this.ne.lat - this.sw.lat))
        },
        div: function(e) {
            if (!e || e.isEmpty() || this.isEmpty()) {
                return 0
            }
            return ((this.ne.lng - this.sw.lng) * (this.ne.lat - this.sw.lat)) / ((e.ne.lng - e.sw.lng) * (e.ne.lat - e.sw.lat))
        },
        makeNormalizedPoint: function(e) {
            this.normalizedTopLeft = this.pointTopLeft.clone();
            this.normalizedTopRight = this.pointTopRight.clone();
            this.normalizedBottomRight = this.pointBottomRight.clone();
            this.normalizedBottomLeft = this.pointBottomLeft.clone();
            while (e < 0) {
                e += 360
            }
            e = e % 360;
            if (e >= 0 && e < 90 || e >= 270 && e < 360) {
                if (this.normalizedTopRight.lng < this.normalizedTopLeft.lng) {
                    this.normalizedTopRight.lng += c9.WORLD_SIZE_MC
                }
                if (this.normalizedBottomRight.lng < this.normalizedBottomLeft.lng) {
                    this.normalizedBottomRight.lng += c9.WORLD_SIZE_MC
                }
            } else {
                if (this.normalizedTopLeft.lng < this.normalizedTopRight.lng) {
                    this.normalizedTopLeft.lng += c9.WORLD_SIZE_MC
                }
                if (this.normalizedBottomLeft.lng < this.normalizedBottomRight.lng) {
                    this.normalizedBottomLeft.lng += c9.WORLD_SIZE_MC
                }
            }
        },
        toString: function() {
            return "Bounds"
        }
    });
    function hu(e, i) {
        if (isNaN(e)) {
            e = g3(e);
            e = isNaN(e) ? 0 : e
        }
        if (typeof e === "string") {
            e = parseFloat(e)
        }
        if (isNaN(i)) {
            i = g3(i);
            i = isNaN(i) ? 0 : i
        }
        if (typeof i === "string") {
            i = parseFloat(i)
        }
        this.lng = e;
        this.lat = i
    }
    hu.prototype.equals = function(i) {
        if (!i) {
            return false
        }
        var hT = Math.abs(this.lat - i.lat);
        var T = Math.abs(this.lng - i.lng);
        var e = 1e-8;
        if (hT < e && T < e) {
            return true
        }
        return false
    };
    hu.prototype.clone = function() {
        return new hu(this.lng, this.lat)
    };
    hu.prototype.add = function(e) {
        return new hu(this.lng + e.lng, this.lat + e.lat)
    };
    hu.prototype.sub = function(e) {
        return new hu(this.lng - e.lng, this.lat - e.lat)
    };
    hu.prototype.mult = function(e) {
        return new hu(this.lng * e, this.lat * e)
    };
    hu.prototype.div = function(e) {
        return new hu(this.lng / e, this.lat / e)
    };
    hu.prototype.mag = function() {
        return Math.sqrt(this.lng * this.lng + this.lat * this.lat)
    };
    hu.prototype.toString = function() {
        return "Point"
    };
    function eo() {}
    D.extend(eo, {
        EARTHRADIUS: 6370996.81,
        MCBAND: [12890594.86, 8362377.87, 5591021, 3481989.83, 1678043.12, 0],
        LLBAND: [86, 60, 45, 30, 15, 0],
        MC2LL: [[1.410526172116255e-8, 0.00000898305509648872, -1.9939833816331, 200.9824383106796, -187.2403703815547, 91.6087516669843, -23.38765649603339, 2.57121317296198, -0.03801003308653, 17337981.2], [ - 7.435856389565537e-9, 0.000008983055097726239, -0.78625201886289, 96.32687599759846, -1.85204757529826, -59.36935905485877, 47.40033549296737, -16.50741931063887, 2.28786674699375, 10260144.86], [ - 3.030883460898826e-8, 0.00000898305509983578, 0.30071316287616, 59.74293618442277, 7.357984074871, -25.38371002664745, 13.45380521110908, -3.29883767235584, 0.32710905363475, 6856817.37], [ - 1.981981304930552e-8, 0.000008983055099779535, 0.03278182852591, 40.31678527705744, 0.65659298677277, -4.44255534477492, 0.85341911805263, 0.12923347998204, -0.04625736007561, 4482777.06], [3.09191371068437e-9, 0.000008983055096812155, 0.00006995724062, 23.10934304144901, -0.00023663490511, -0.6321817810242, -0.00663494467273, 0.03430082397953, -0.00466043876332, 2555164.4], [2.890871144776878e-9, 0.000008983055095805407, -3.068298e-8, 7.47137025468032, -0.00000353937994, -0.02145144861037, -0.00001234426596, 0.00010322952773, -0.00000323890364, 826088.5]],
        LL2MC: [[ - 0.0015702102444, 111320.7020616939, 1704480524535203, -10338987376042340, 26112667856603880, -35149669176653700, 26595700718403920, -10725012454188240, 1800819912950474, 82.5], [0.0008277824516172526, 111320.7020463578, 647795574.6671607, -4082003173.641316, 10774905663.51142, -15171875531.51559, 12053065338.62167, -5124939663.577472, 913311935.9512032, 67.5], [0.00337398766765, 111320.7020202162, 4481351.045890365, -23393751.19931662, 79682215.47186455, -115964993.2797253, 97236711.15602145, -43661946.33752821, 8477230.501135234, 52.5], [0.00220636496208, 111320.7020209128, 51751.86112841131, 3796837.749470245, 992013.7397791013, -1221952.21711287, 1340652.697009075, -620943.6990984312, 144416.9293806241, 37.5], [ - 0.0003441963504368392, 111320.7020576856, 278.2353980772752, 2485758.690035394, 6070.750963243378, 54821.18345352118, 9540.606633304236, -2710.55326746645, 1405.483844121726, 22.5], [ - 0.0003218135878613132, 111320.7020701615, 0.00369383431289, 823725.6402795718, 0.46104986909093, 2351.343141331292, 1.58060784298199, 8.77738589078284, 0.37238884252424, 7.45]],
        getDistanceByMC: function(hV, hT) {
            if (!hV || !hT) {
                return 0
            }
            var i;
            var hU;
            var e;
            var T;
            hV = this.convertMC2LL(hV);
            if (!hV) {
                return 0
            }
            i = dL(hV.lng);
            hU = dL(hV.lat);
            hT = this.convertMC2LL(hT);
            if (!hT) {
                return 0
            }
            e = dL(hT.lng);
            T = dL(hT.lat);
            return this.getDistance(i, e, hU, T)
        },
        getDistanceByLL: function(hV, hT) {
            if (!hV || !hT) {
                return 0
            }
            hV.lng = this.getLoop(hV.lng, -180, 180);
            hV.lat = this.getRange(hV.lat, -80, 84);
            hT.lng = this.getLoop(hT.lng, -180, 180);
            hT.lat = this.getRange(hT.lat, -80, 84);
            var i;
            var e;
            var hU;
            var T;
            i = dL(hV.lng);
            hU = dL(hV.lat);
            e = dL(hT.lng);
            T = dL(hT.lat);
            return this.getDistance(i, e, hU, T)
        },
        proximityCovertMC2LL: function(e) {
            if (e === null) {
                return e
            }
            if (e.lng < 180 && e.lng > -180 && e.lat < 90 && e.lat > -90) {
                return e
            }
            return this.convertMC2LL(e)
        },
        convertMC2LL: function(e) {
            if (e === null) {
                return e
            }
            if (!e) {
                return new hu(0, 0)
            }
            var T;
            var hU;
            T = new hu(Math.abs(e.lng), Math.abs(e.lat));
            for (var hT = 0; hT < this.MCBAND.length; hT++) {
                if (T.lat >= this.MCBAND[hT]) {
                    hU = this.MC2LL[hT];
                    break
                }
            }
            var hV = this.convertor(e, hU);
            return new c5(hV.lat, hV.lng)
        },
        convertLL2MC: function(hW) {
            if (!hW) {
                return new hu(0, 0)
            }
            var hY = hW.lat;
            var hT = hW.lng;
            hT = this.getLoop(hW.lng, -180, 180);
            hY = fG(hY, -85, 85);
            var hV;
            for (var hU = 0; hU < this.LLBAND.length; hU++) {
                if (hY >= this.LLBAND[hU]) {
                    hV = this.LL2MC[hU];
                    break
                }
            }
            if (!hV) {
                for (hU = 0; hU < this.LLBAND.length; hU++) {
                    if (hY <= -this.LLBAND[hU]) {
                        hV = this.LL2MC[hU];
                        break
                    }
                }
            }
            var T = new hu(hT, hY);
            var hX = this.convertor(T, hV);
            var e = new hu(hX.lng, hX.lat);
            e.latLng = new c5(hW.lat, hW.lng);
            return e
        },
        convertor: function(T, hT) {
            if (!T || !hT) {
                return
            }
            var e = hT[0] + hT[1] * Math.abs(T.lng);
            var i = Math.abs(T.lat) / hT[9];
            var hU = hT[2] + hT[3] * i + hT[4] * i * i + hT[5] * i * i * i + hT[6] * i * i * i * i + hT[7] * i * i * i * i * i + hT[8] * i * i * i * i * i * i;
            e *= (T.lng < 0 ? -1 : 1);
            hU *= (T.lat < 0 ? -1 : 1);
            return new hu(e, hU)
        },
        getDistance: function(i, e, hT, T) {
            return this.EARTHRADIUS * Math.acos((Math.sin(hT) * Math.sin(T) + Math.cos(hT) * Math.cos(T) * Math.cos(e - i)))
        },
        getRange: function(T, i, e) {
            if (i != null) {
                T = Math.max(T, i)
            }
            if (e != null) {
                T = Math.min(T, e)
            }
            return T
        },
        getLoop: function(T, i, e) {
            while (T > e) {
                T -= e - i
            }
            while (T < i) {
                T += e - i
            }
            return T
        }
    });
    D.extend(eo.prototype, {
        lnglatToMercator: function(e) {
            return eo.convertLL2MC(e)
        },
        lngLatToPoint: function(e) {
            var i = eo.convertLL2MC(e);
            return new ek(i.lng, i.lat)
        },
        mercatorToLnglat: function(e) {
            return eo.convertMC2LL(e)
        },
        pointToLngLat: function(i) {
            var e = new hu(i.x, i.y);
            var T = eo.convertMC2LL(e);
            return new c5(T.lat, T.lng)
        },
        pointToPixel: function(i, hV, hU, hT) {
            if (!i) {
                return
            }
            i = this.lnglatToMercator(i);
            var T = this.getZoomUnits(hV);
            var e = Math.round((i.lng - hU.lng) / T + hT.width / 2);
            var hW = Math.round((hU.lat - i.lat) / T + hT.height / 2);
            return new ek(e, hW)
        },
        mercatorToPixel: function(hV, hU, hT, T) {
            if (!hV) {
                return
            }
            var i = this.getZoomUnits(hU);
            var e = Math.round((hV.lng - hT.lng) / i + T.width / 2);
            var hW = Math.round((hT.lat - hV.lat) / i + T.height / 2);
            return new ek(e, hW)
        },
        pixelToPoint: function(hT, hW, hV, hU) {
            if (!hT) {
                return
            }
            var i = this.getZoomUnits(hW);
            var T = hV.lng + i * (hT.x - hU.width / 2);
            var hX = hV.lat - i * (hT.y - hU.height / 2);
            var e = new hu(T, hX);
            return this.mercatorToLnglat(e)
        },
        getZoomUnits: function(e) {
            return Math.pow(2, (18 - e))
        },
        setCoordType: function(e) {
            this.coordsType = e
        }
    });
    function c5(i, e) {
        if (i < -90) {
            i = -90
        } else {
            if (i > 90) {
                i = 90
            }
        }
        while (e < -180) {
            e += 360
        }
        while (e > 180) {
            e -= 360
        }
        e = e || 0;
        i = i || 0;
        hu.call(this, e, i)
    }
    c5.inherits(hu, "LatLng");
    D.extend(c5.prototype, {
        equals: function(e) {
            return (this.lat === e.lat && this.lng === e.lng)
        },
        clone: function() {
            return new c5(this.lat, this.lng)
        },
        add: function(e) {
            return new c5(this.lng + e.lng, this.lat + e.lat)
        },
        sub: function(e) {
            return new c5(this.lat - e.lat, this.lng - e.lng)
        },
        mult: function(e) {
            return new c5(this.lng * e, this.lat * e)
        },
        div: function(e) {
            return new c5(this.lng / e, this.lat / e)
        },
        mag: function() {
            return Math.sqrt(this.lng * this.lng + this.lat * this.lat)
        },
        getLngSpan: function(e) {
            var i = this.lng;
            var T = Math.abs(e - i);
            if (T > 180) {
                T = 360 - T
            }
            return T
        },
        toString: function() {
            return "LatLng"
        }
    });
    function eH(e, i) {
        if (e && !i) {
            i = e
        }
        this._sw = this._ne = null;
        this._swLng = this._swLat = null;
        this._neLng = this._neLat = null;
        if (e) {
            this._sw = new c5(e.lat, e.lng);
            this._ne = new c5(i.lat, i.lng);
            this._swLng = e.lng;
            this._swLat = e.lat;
            this._neLng = i.lng;
            this._neLat = i.lat
        }
    }
    D.extend(eH.prototype, {
        isEmpty: function() {
            return ! this._sw || !this._ne
        },
        equals: function(e) {
            if (this.isEmpty()) {
                return false
            }
            return this.getSouthWest().equals(e.getSouthWest()) && this.getNorthEast().equals(e.getNorthEast())
        },
        getSouthWest: function() {
            return this._sw
        },
        getNorthEast: function() {
            return this._ne
        },
        containsBounds: function(e) {
            if (this.isEmpty() || e.isEmpty()) {
                return false
            }
            return (e._swLng > this._swLng && e._neLng < this._neLng && e._swLat > this._swLat && e._neLat < this._neLat)
        },
        getCenter: function() {
            if (this.isEmpty()) {
                return null
            }
            return new c5((this._swLat + this._neLat) / 2, (this._swLng + this._neLng) / 2)
        },
        intersects: function(T) {
            if (Math.max(T._swLng, T._neLng) < Math.min(this._swLng, this._neLng) || Math.min(T._swLng, T._neLng) > Math.max(this._swLng, this._neLng) || Math.max(T._swLat, T._neLat) < Math.min(this._swLat, this._neLat) || Math.min(T._swLat, T._neLat) > Math.max(this._swLat, this._neLat)) {
                return false
            }
            var hU = Math.max(this._swLng, T._swLng);
            var i = Math.min(this._neLng, T._neLng);
            var hT = Math.max(this._swLat, T._swLat);
            var e = Math.min(this._neLat, T._neLat);
            this._sw = new c5(hT, hU);
            this._ne = new c5(e, i);
            this._swLng = hU;
            this._swLat = hT;
            this._neLng = i;
            this._neLat = e;
            return true
        },
        containsPoint: function(e) {
            if (this.isEmpty()) {
                return false
            }
            return (e.lng >= this._swLng && e.lng <= this._neLng && e.lat >= this._swLat && e.lat <= this._neLat)
        },
        extend: function(e) {
            var i = e.lng;
            var T = e.lat;
            if (!this._sw) {
                this._sw = new c5(0, 0)
            }
            if (!this._ne) {
                this._ne = new c5(0, 0)
            }
            if (!this._swLng || this._swLng > i) {
                this._sw.lng = this._swLng = i
            }
            if (!this._neLng || this._neLng < i) {
                this._ne.lng = this._neLng = i
            }
            if (!this._swLat || this._swLat > T) {
                this._sw.lat = this._swLat = T
            }
            if (!this._neLat || this._neLat < T) {
                this._ne.lat = this._neLat = T
            }
        },
        toSpan: function() {
            if (this.isEmpty()) {
                return new c5(0, 0)
            }
            return new c5(Math.abs(this._neLat - this._swLat), Math.abs(this._neLng - this._swLng))
        },
        union: function(i) {
            if (i.isEmpty()) {
                return false
            }
            var e = i.getSouthWest();
            var T = i.getNorthEast();
            if (this._swLat > e.lat) {
                this._swLat = e.lat
            }
            if (this._swLng > e.lng) {
                this._swLng = e.lng
            }
            if (this._neLat < T.lat) {
                this._neLat = T.lat
            }
            if (this._neLng < T.lng) {
                this._neLng = T.lng
            }
            this._sw = new c5(this._swLat, this._swLng);
            this._ne = new c5(this._neLat, this._neLng);
            return true
        },
        toString: function() {
            return this._swLat + ", " + this._swLng + ", " + this._neLat + ", " + this._neLng
        }
    });
    window.COORDINATES_WGS84 = 1;
    window.COORDINATES_WGS84_MC = 2;
    window.COORDINATES_GCJ02 = 3;
    window.COORDINATES_GCJ02_MC = 4;
    window.COORDINATES_BD09 = 5;
    window.COORDINATES_BD09_MC = 6;
    window.COORDINATES_MAPBAR = 7;
    window.COORDINATES_51 = 8;
    function ay() {}
    ay.inherits(ee, "Convertor");
    D.extend(ay.prototype, {
        translate: function(i, hU, hT, T) {
            hU = hU || 1;
            hT = hT || 5;
            if (i.length > 10) {
                T && T({
                    status: 25
                });
                return
            }
            var e = e4.apiHost + "/geoconv/v1/?coords=";
            D.each(i,
            function(hV) {
                e += hV.lng + "," + hV.lat + ";"
            });
            e = e.replace(/;$/gi, "");
            e = e + "&from=" + hU + "&to=" + hT + "&v=3.0&type=webgl&ak=" + gf;
            E.request(e,
            function(hW) {
                if (hW.status === 0) {
                    var hV = [];
                    D.each(hW.result,
                    function(hX) {
                        hV.push(new hu(hX.x, hX.y))
                    });
                    delete hW.result;
                    hW.points = hV
                }
                T && T(hW)
            })
        }
    });
    var dV = {
        idle: 0,
        freeze: 1,
        zooming: 2,
        dragging: 3,
        moving: 4,
        readyToDrag: 5,
        readyToPinch: 6,
        pinching: 7,
        stdMapCtrlDrag: 8,
        KEY_LEFT: 37,
        KEY_UP: 38,
        KEY_RIGHT: 39,
        KEY_DOWN: 40,
        arrowOpCodes: {
            37 : 1,
            38 : 2,
            39 : 4,
            40 : 8
        }
    };
    var ei = {
        _map: null,
        _html: "<div class='BMap_opMask' unselectable='on'></div>",
        _maskElement: null,
        _cursor: "default",
        inUse: false,
        show: function(e) {
            if (!this._map) {
                this._map = e
            }
            this.inUse = true;
            if (!this._maskElement) {
                this._createMask(e)
            }
            this._maskElement.style.display = "block"
        },
        _createMask: function(i) {
            if (!this._map) {
                this._map = i
            }
            if (!this._map) {
                return
            }
            var e = this._maskElement = dJ(this._map.container, this._html);
            D.on(e, "mouseup",
            function(T) {
                if (T.button == 2) {
                    dc(T)
                }
            });
            D.on(e, "contextmenu", dc);
            e.style.display = "none"
        },
        getDrawPoint: function(hT, hW, hU) {
            hT = window.event || hT;
            var i = hT.offsetX || hT.layerX || 0;
            var hV = parseInt(hT.offsetY) || parseInt(hT.layerY) || 0;
            var T = hT.target || hT.srcElement;
            if (T != ei.getDom(this._map) && hW == true) {
                while (T && T != this._map.container) {
                    if (! (T.clientWidth == 0 && T.clientHeight == 0 && T.offsetParent && T.offsetParent.nodeName.toLowerCase() == "td")) {
                        i += T.offsetLeft;
                        hV += T.offsetTop
                    }
                    T = T.offsetParent
                }
            }
            if (T != ei.getDom(this._map) && T != this._map.container) {
                return
            }
            if (typeof i === "undefined" || typeof hV === "undefined") {
                return
            }
            if (isNaN(i) || isNaN(hV)) {
                return
            }
            if (hU) {
                i = i + hU.x;
                hV = hV + hU.y
            }
            return this._map.pixelToPointIn(new ek(i, hV))
        },
        hide: function() {
            if (!this._map) {
                return
            }
            this.inUse = false;
            if (this._maskElement) {
                this._maskElement.style.display = "none"
            }
        },
        getDom: function(e) {
            if (!this._maskElement) {
                this._createMask(e)
            }
            return this._maskElement
        },
        setCursor: function(e) {
            this._cursor = e || "default";
            if (this._maskElement) {
                this._maskElement.style.cursor = this._cursor
            }
        }
    };
    function bm() {
        this._type = "overlay"
    }
    bm.inherits(D.BaseClass, "Overlay");
    bm.getZIndex = function(i, e) {
        i = i * 1;
        if (!i) {
            return 0
        }
        if (e) {
            i = eo.convertMC2LL(new hu(0, i)).lat
        }
        return (i * -100000) << 1
    };
    D.extend(bm.prototype, {
        _i: function(e) {
            this._map = e;
            if (!this.domElement && bW(this.initialize)) {
                this.domElement = this.initialize(e);
                if (this.domElement) {
                    this.domElement.style.WebkitUserSelect = "none"
                }
            }
            this.draw()
        },
        initialize: function(e) {
            throw "initialize方法未实现"
        },
        draw: function() {
            throw "draw方法未实现"
        },
        remove: function() {
            if (this.domElement && this.domElement.parentNode) {
                this.domElement.parentNode.removeChild(this.domElement)
            }
            this.domElement = null;
            this.dispatchEvent(new bc("onremove"))
        },
        hide: function() {
            this._visible = false;
            D.hide(this.domElement)
        },
        show: function() {
            this._visible = true;
            D.show(this.domElement)
        },
        getMap: function() {
            return this._map
        },
        dispose: function() {
            D.BaseClass.prototype.decontrol.call(this)
        }
    });
    function cW() {
        D.BaseClass.call(this);
        bm.call(this);
        this._visible = true;
        this._visibleInternal = true;
        this.infoWindow = null;
        this._dblclickTime = 0
    }
    cW.inherits(bm, "OverlayInternal");
    D.extend(cW.prototype, {
        initialize: function(e) {
            this.map = e;
            D.BaseClass.call(this, this.hashCode);
            return null
        },
        draw: function() {},
        remove: function() {
            this.decontrol();
            bm.prototype.remove.call(this)
        },
        hide: function() {
            this._visible = false
        },
        show: function() {
            this._visible = true
        },
        getDom: function() {
            return this.domElement
        },
        getContainer: function() {
            return this.domElement
        },
        setClassName: function() {},
        setConfig: function(i) {
            if (!i) {
                return
            }
            for (var e in i) {
                if (i.hasOwnProperty(e)) {
                    this._config[e] = i[e]
                }
            }
        },
        getPoint: function(T, hT) {
            if (!T) {
                return this.point
            } else {
                var e = hT ? hT.width: 0;
                var hU = hT ? hT.height: 0;
                if (this.map) {
                    var i = this.map.pointToPixelIn(this.point);
                    if (this._config && this._config.offset) {
                        i.x = i.x + this._config.offset.width + e;
                        i.y = i.y + this._config.offset.height + hU
                    } else {
                        i.x = i.x + e;
                        i.y = i.y + hU
                    }
                    return this.map.pixelToPointIn(i)
                }
            }
        },
        setZIndex: function(e) {
            this.zIndex = e
        },
        isVisible: function() {
            if (!this.domElement) {
                return false
            }
            return !! this._visible
        },
        enableMassClear: function() {
            this._config.enableMassClear = true
        },
        disableMassClear: function() {
            this._config.enableMassClear = false
        },
        showInternal: function() {
            this._visibleInternal = true
        },
        hideInternal: function(e) {
            this._visibleInternal = false;
            this._hideInternalReason = e
        }
    });
    function eY(e) {
        this.map = e;
        this._overlays = {};
        this._overlayArray = [];
        this._customOverlays = [];
        e._overlays = this._overlays;
        e._overlayArray = this._overlayArray;
        e._customOverlays = this._customOverlays;
        this._zoomingOrMoving = false;
        this._init()
    }
    eY.prototype._init = function() {
        if (this.map._renderType !== "webgl") {
            this._createOverlayContainers()
        } else {
            this._createWebGLOverlayContainers()
        }
        this._bind()
    };
    eY.prototype._createOverlayContainers = function() {
        var e = this.map;
        e.temp.overlayDiv = e.overlayDiv = this._createOverlayDiv(e.platform, 200);
        e.temp.overlayDivEx = e.overlayDivEx = this._createOverlayDiv(e.platform, 50);
        e._panes.floatPane = this._createOverlayDiv(e.temp.overlayDiv, 800);
        e._panes.markerMouseTarget = this._createOverlayDiv(e.temp.overlayDiv, 700);
        e._panes.floatShadow = this._createOverlayDiv(e.temp.overlayDiv, 600);
        e._panes.labelPane = this._createOverlayDiv(e.temp.overlayDiv, 500);
        e._panes.markerPane = this._createOverlayDiv(e.temp.overlayDiv, 400);
        if (e.isCanvasMap()) {
            e._panes.mapPane = this._createOverlayDiv(e.temp.overlayDivEx, 50)
        } else {
            e._panes.mapPane = this._createOverlayDiv(e.temp.overlayDiv, 200)
        }
    };
    eY.prototype._createWebGLOverlayContainers = function() {
        var e = this.map;
        e.temp.overlayDiv = e.overlayDiv = this._createOverlayDiv(e.platform, 200);
        e._panes.floatPane = this._createOverlayDiv(e.temp.overlayDiv, 800);
        e._panes.markerMouseTarget = this._createOverlayDiv(e.temp.overlayDiv, 700);
        e._panes.floatShadow = this._createOverlayDiv(e.temp.overlayDiv, 600);
        e._panes.labelPane = this._createOverlayDiv(e.temp.overlayDiv, 500);
        e._panes.markerPane = this._createOverlayDiv(e.temp.overlayDiv, 400)
    };
    eY.prototype._createOverlayDiv = function(e, hT) {
        var T = U("div");
        var i = T.style;
        i.position = "absolute";
        i.top = i.left = i.width = i.height = "0";
        i.zIndex = hT;
        e.appendChild(T);
        return T
    };
    eY.prototype._bind = function() {
        var hU = this.map;
        var hT = this;
        function i(hW) {
            hT.draw(hW)
        }
        if (hU._renderType !== "webgl") {
            hU.addEventListener("load", i);
            hU.addEventListener("moveend", i);
            hU.addEventListener("resize", i);
            hU.addEventListener("zoomend", i);
            hU.addEventListener("zooming_inner", i)
        } else {
            hU.on("update", i)
        }
        hU.addEventListener("zoomend",
        function(hW) {
            if (this.mapType === "B_EARTH_MAP") {
                if (this._earth.getZoom() < this._earth.zoomForNight + 1) {
                    this.temp.overlayDiv.style.display = "none";
                    if (this.temp.overlayDivEx) {
                        this.temp.overlayDivEx.style.display = "none"
                    }
                } else {
                    if (this.temp.overlayDiv.style.display === "none") {
                        this.temp.overlayDiv.style.display = "";
                        if (this.temp.overlayDivEx) {
                            this.temp.overlayDivEx.style.display = ""
                        }
                        if (this.temp.infoWin && this.temp.infoWin.isOpen()) {
                            this.temp.infoWin.redraw()
                        }
                    }
                }
            }
        });
        hU.addEventListener("oncenterandzoom",
        function(hW) {
            hT.draw(hW);
            if (this.mapType === "B_EARTH_MAP") {
                if (this._earth.getZoom() < this._earth.zoomForNight + 1) {
                    this.temp.overlayDiv.style.display = "none";
                    if (this.temp.overlayDivEx) {
                        this.temp.overlayDivEx.style.display = "none"
                    }
                } else {
                    if (this.temp.overlayDiv.style.display === "none") {
                        this.temp.overlayDiv.style.display = "";
                        if (this.temp.overlayDivEx) {
                            this.temp.overlayDivEx.style.display = ""
                        }
                        if (this.temp.infoWin && this.temp.infoWin.isOpen()) {
                            this.temp.infoWin.redraw()
                        }
                    }
                }
            }
        });
        hU.addEventListener("maptypechange",
        function(hW) {
            if (this.mapType === "B_EARTH_MAP") {
                if (this._panes.mapPane) {
                    this._panes.mapPane.style.display = "none"
                }
                if (this._earth.getZoom() < this._earth.zoomForNight + 1) {
                    this.temp.overlayDiv.style.display = "none";
                    if (this.temp.overlayDivEx) {
                        this.temp.overlayDivEx.style.display = "none"
                    }
                } else {
                    if (this.temp.overlayDiv.style.display === "none") {
                        this.temp.overlayDiv.style.display = "";
                        if (this.temp.overlayDivEx) {
                            this.temp.overlayDivEx.style.display = ""
                        }
                        if (this.temp.infoWin && this.temp.infoWin.isOpen()) {
                            this.temp.infoWin.redraw()
                        }
                    }
                }
                if (this._panes.markerPane) {
                    this._panes.markerPane.style.display = "none"
                }
            } else {
                if (this._panes.mapPane) {
                    this._panes.mapPane.style.display = ""
                }
                if (this._panes.markerPane) {
                    this._panes.markerPane.style.display = ""
                }
                if (this.temp.overlayDiv.style.display === "none") {
                    this.temp.overlayDiv.style.display = "";
                    if (this.temp.overlayDivEx) {
                        this.temp.overlayDivEx.style.display = ""
                    }
                    if (this.temp.infoWin && this.temp.infoWin.isOpen()) {
                        this.temp.infoWin.redraw()
                    }
                }
            }
            hT.draw(hW)
        });
        hU.on("earthstatuschange",
        function hV(hW) {
            hT.draw(hW)
        });
        hU.addEventListener("addoverlay",
        function(h0) {
            var hX = h0.target;
            if (hX instanceof cW) {
                if (!hT._overlays[hX.hashCode]) {
                    hT._overlays[hX.hashCode] = hX;
                    hT._overlayArray.push(hX)
                }
            } else {
                var hZ = false;
                for (var hY = 0,
                hW = hT._customOverlays.length; hY < hW; hY++) {
                    if (hT._customOverlays[hY] === hX) {
                        hZ = true;
                        break
                    }
                }
                if (!hZ) {
                    hT._customOverlays.push(hX)
                }
            }
        });
        hU.addEventListener("removeoverlay",
        function(hZ) {
            var hX = hZ.target;
            if (hX instanceof cW) {
                delete hT._overlays[hX.hashCode];
                for (var hY = 0; hY < hT._overlayArray.length; hY++) {
                    if (hT._overlayArray[hY] === hX) {
                        hT._overlayArray.splice(hY, 1);
                        break
                    }
                }
            } else {
                for (var hY = 0,
                hW = hT._customOverlays.length; hY < hW; hY++) {
                    if (hT._customOverlays[hY] === hX) {
                        hT._customOverlays.splice(hY, 1);
                        break
                    }
                }
            }
        });
        hU.addEventListener("clearoverlays",
        function(hY) {
            this.closeInfoWindow();
            this.closeSimpleInfoWindow();
            for (var hX in hT._overlays) {
                if (hT._overlays[hX]._config.enableMassClear) {
                    this.removeOverlay(hT._overlays[hX])
                }
            }
            for (var hW = hT._customOverlays.length - 1; hW > 0; hW--) {
                if (hT._customOverlays[hW].enableMassClear !== false) {
                    this.removeOverlay(hT._customOverlays[hW]);
                    hT._customOverlays.splice(hW, 1)
                }
            }
        });
        hU.addEventListener("infowindowopen",
        function(hX) {
            var hW = this.infoWindow;
            if (hW) {
                D.hide(hW.popDom);
                D.hide(hW.shadowDom)
            }
        });
        function T() {
            if (this.getMapType() === "B_EARTH_MAP" || this._renderType === "webgl") {
                if (hT._zoomingOrMoving === false) {
                    this._panes.markerMouseTarget.style.display = "none";
                    hT._zoomingOrMoving = true
                }
            }
        }
        function e(hY) {
            if (this.getMapType() === "B_EARTH_MAP" || this._renderType === "webgl") {
                if (hT._zoomingOrMoving === true) {
                    this._panes.markerMouseTarget.style.display = "";
                    hT._zoomingOrMoving = false;
                    for (var hX = 0; hX < hT._overlayArray.length; hX++) {
                        var hW = hT._overlayArray[hX];
                        if (hW instanceof ds === true) {
                            hW.draw(hY)
                        }
                    }
                }
            }
        }
        hU.addEventListener("movestart", T);
        hU.addEventListener("moveend", e);
        hU.addEventListener("zoomstart", T);
        hU.addEventListener("zoomend", e);
        hU.addEventListener("animation_start", T);
        hU.addEventListener("animation_end", e);
        hU.addEventListener("displayoptions_changed",
        function(hW) {
            if (this._displayOptions.overlay === false) {
                this.temp.overlayDiv.style.display = "none"
            } else {
                this.temp.overlayDiv.style.display = ""
            }
        })
    };
    eY.prototype.draw = function(hW) {
        hW = hW || {};
        if (this.map.getMapType() === "B_EARTH_MAP") {
            for (var hU = 0; hU < this._overlayArray.length; hU++) {
                var T = this._overlayArray[hU];
                if (T instanceof x === true) {
                    continue
                }
                if (this._zoomingOrMoving) {
                    if (T instanceof ds === true) {
                        continue
                    }
                }
                T.draw(hW)
            }
        } else {
            for (var hU = 0,
            hT = this._overlayArray.length; hU < hT; hU++) {
                var T = this._overlayArray[hU];
                if (this._zoomingOrMoving && T instanceof ds === true) {
                    continue
                }
                T.draw(hW)
            }
        }
        D.each(this._customOverlays,
        function(e) {
            e.draw(hW)
        });
        if (this.map.temp.infoWin) {
            this.map.temp.infoWin.setPosition(hW.center, hW.zoom)
        }
        if (this.map.getMapType() !== "B_EARTH_MAP" && this.map._renderType !== "webgl") {
            if (bp.DrawerSelector) {
                var hV = bp.DrawerSelector.getDrawer(this.map);
                hV.setPalette()
            }
        }
    };
    bp.register(function(e) {
        e._overlayMgr = new eY(e)
    });
    function x(e) {
        cW.call(this);
        this._config = {
            strokeColor: "#000",
            strokeWeight: 2,
            strokeOpacity: 1,
            strokeStyle: "solid",
            dashArray: null,
            strokeLineCap: "round",
            strokeLineJoin: "round",
            enableMassClear: true,
            getParseTolerance: null,
            getParseCacheIndex: null,
            enableParse: true,
            enableEditing: false,
            mouseOverTolerance: 5,
            geodesic: false,
            clip: true,
            texture: null,
            textureSize: null,
            textureZoomWithMap: false,
            textureRepeat: true
        };
        this.setConfig(e);
        if (this._config.strokeOpacity < 0 || this._config.strokeOpacity > 1) {
            this._config.strokeOpacity = 1
        }
        if (this._config.fillOpacity < 0 || this._config.fillOpacity > 1) {
            this._config.fillOpacity = 1
        }
        if (this._config.strokeStyle !== "solid" && this._config.strokeStyle !== "dashed" && this._config.strokeStyle !== "dotted") {
            this._config.strokeStyle = "solid"
        }
        this.domElement = null;
        this._bounds = new dT();
        this.points = [];
        this.greatCirclePoints = [];
        this._parseCache = [];
        this._holesCache = [];
        this._parseCacheGL = [];
        this._parseCacheGLRaw = [];
        this._areaCacheGL = [];
        this._strokeStyleInfoForGL = [[]];
        this._fillStyleInfoForGL = "";
        this.vertexMarkers = [];
        this._temp = {}
    }
    x.JOININDEX = {
        miter: 0,
        round: 1,
        bevel: 2
    };
    x.CAPINDEX = {
        round: 0,
        butt: 1,
        square: 2
    };
    x.inherits(cW, "Graph");
    x.getGraphPoints = function(i) {
        var e = [];
        if (!i || i.length === 0) {
            return e
        }
        if (typeof i === "string") {
            var T = i.split(";");
            D.each(T,
            function(hU) {
                var hT = hU.split(",");
                e.push(new hu(hT[0], hT[1]))
            })
        }
        if (i.constructor === Array && i.length > 0) {
            e = i
        }
        return e
    };
    x.parseTolerance = {
        0 : [0.09, 0.005, 0.0001, 0.00001],
        1 : [9000, 500, 20, 1]
    };
    D.extend(x.prototype, {
        initialize: function(e) {
            this.map = e;
            return null
        },
        draw: function() {},
        setPoints: function(e) {
            this._clearCache();
            this.points = x.getGraphPoints(e).slice(0);
            this._calcBounds()
        },
        setPathIn: function(e) {
            this.setPoints(e)
        },
        _calcBounds: function() {
            if (!this.points) {
                return
            }
            var e = this;
            e._bounds = new dT();
            if (!this.hasMultipleParts) {
                D.each(this.points,
                function(i) {
                    e._bounds.extend(i)
                })
            } else {
                D.each(this.points,
                function(i) {
                    D.each(i,
                    function(T) {
                        e._bounds.extend(T)
                    })
                })
            }
        },
        getPoints: function() {
            return this.points
        },
        getPathIn: function() {
            return this.points
        },
        setPointAt: function(i, e) {
            if (!e || !this.points[i]) {
                return
            }
            this._clearCache();
            this.points[i] = new hu(e.lng, e.lat);
            this._calcBounds()
        },
        setPositionAt: function(i, e) {
            if (!e || !this.points[i]) {
                return
            }
            var T = eo.convertLL2MC(e);
            this.setPointAt(i, T)
        },
        setOptions: function(i) {
            i = i || {};
            for (var e in i) {
                if (i.hasOwnProperty(e)) {
                    this._config[e] = i[e]
                }
            }
        },
        setStrokeColor: function(e) {
            this._config.strokeColor = e
        },
        getStrokeColor: function() {
            return this._config.strokeColor
        },
        setStrokeLineCap: function(e) {
            this._config.strokeLineCap = e
        },
        getStrokeLineCap: function() {
            return this._config.strokeLineCap
        },
        setStrokeLineJoin: function(e) {
            this._config.strokeLineJoin = e
        },
        getStrokeLineJoin: function() {
            return this._config.strokeLineJoin
        },
        setStrokeWeight: function(e) {
            if (e > 0) {
                this._config.strokeWeight = e
            }
        },
        getStrokeWeight: function() {
            return this._config.strokeWeight
        },
        setStrokeOpacity: function(e) {
            if (!e || e > 1 || e < 0) {
                return
            }
            this._config.strokeOpacity = e
        },
        getStrokeOpacity: function() {
            return this._config.strokeOpacity
        },
        setFillOpacity: function(e) {
            if (e > 1 || e < 0) {
                return
            }
            this._config.fillOpacity = e
        },
        getFillOpacity: function() {
            return this._config.fillOpacity
        },
        setStrokeStyle: function(e) {
            if (e !== "solid" && e !== "dashed" && e !== "dotted") {
                return
            }
            this._config.strokeStyle = e
        },
        getStrokeStyle: function() {
            return this._config.strokeStyle
        },
        setFillColor: function(e) {
            this._config.fillColor = e || ""
        },
        getFillColor: function() {
            return this._config.fillColor
        },
        getBoundsIn: function() {
            this._bounds.setMinMax();
            return this._bounds
        },
        getBounds: function() {
            var e = this.getBoundsIn();
            var i = new dT(eo.convertMC2LL(e.getSouthWest()), eo.convertMC2LL(e.getNorthEast()));
            i.setMinMax();
            return i
        },
        remove: function() {
            if (this.map) {
                this.map.removeEventListener("onmousemove", this._graphMouseEvent);
                this.map.removeEventListener("onclick", this._graphClickEvent)
            }
            cW.prototype.remove.call(this);
            this._clearCache();
            var e = new bc("onlineupdate");
            e.action = "remove";
            e.overlay = this;
            this.fire(e)
        },
        enableEditing: function() {
            if (this.points.length < 2) {
                return
            }
            this._config.enableEditing = true;
            var e = this;
            eb.load("poly",
            function() {
                e.addVertexs()
            },
            true)
        },
        disableEditing: function() {
            this._config.enableEditing = false;
            var e = this;
            eb.load("poly",
            function() {
                e.clearVertexs()
            },
            true)
        },
        getLength: function() {
            if (typeof this._length === "number") {
                return this._length
            }
            if (typeof this._config.totalLength === "number") {
                this._length = this._config.totalLength;
                return this._length
            }
            var T = 0;
            if (this.points.length <= 1) {
                this._length = 0;
                return T
            }
            for (var e = 0; e < this.points.length - 1; e++) {
                T += bQ(this.points[e], this.points[e + 1])
            }
            this._length = T;
            return T
        },
        getParsedPoints: function() {
            var e = this._simplification(this.points);
            if (this.hasMultipleParts) {
                return e
            }
            return [e]
        },
        _simplification: function(hX) {
            var e = this.map;
            var hW = this.getParseCacheIndex(e.getZoom());
            var hZ;
            if (this._parseCache[hW]) {
                hZ = this._parseCache[hW]
            } else {
                var hU = hX;
                if (this.greatCirclePoints.length > 0) {
                    hU = this.greatCirclePoints
                }
                var hV = this.getParseTolerance(e.getZoom(), e.config.coordType);
                if (!this.hasMultipleParts) {
                    var hY = hH(hU, hV)
                } else {
                    var hY = [];
                    for (var T = 0; T < hU.length; T++) {
                        var hT = hH(hU[T], hV);
                        hY.push(hT)
                    }
                }
                hZ = this._parseCache[hW] = hY
            }
            return hZ
        },
        _clearCache: function() {
            this._length = null;
            this._parseCache.length = 0;
            this._parseCacheGL.length = 0;
            this._parseCacheGLRaw.length = 0;
            this._areaCacheGL.length = 0
        },
        canRenderDataBeMerged: function() {
            var e = this._config;
            if (e.texture) {
                return false
            }
            return true
        }
    });
    if (D.Browser.ie && document.namespaces && !document.namespaces.olv) {
        document.namespaces.add("olv", "urn:schemas-microsoft-com:vml")
    }
    function hd(hV, hT, T) {
        if (!hV || !hT) {
            return
        }
        this.imageUrl = null;
        this.imageDom = null;
        if (typeof hV === "string") {
            this.imageUrl = hV
        } else {
            this.imageDom = hV;
            if (!this.imageDom.id) {
                this.imageDom.id = bp.getGUID("icon_dom_")
            }
        }
        this.size = hT;
        var hU = new ea(Math.floor(hT.width / 2), Math.floor(hT.height / 2));
        var i = {
            offset: hU,
            imageOffset: new ea(0, 0)
        };
        T = T || {};
        for (var e in T) {
            i[e] = T[e]
        }
        if (T.anchor) {
            i.offset = T.anchor
        }
        this.anchor = this.offset = i.offset;
        this.imageOffset = i.imageOffset;
        this.infoWindowOffset = T.infoWindowOffset || this.offset;
        this.printImageUrl = T.printImageUrl || "";
        this.imageSize = T.imageSize || this.size;
        this.srcSetObject = {};
        this.setImageSrcset(T.srcset || T.srcSet)
    }
    hd.prototype.setImageUrl = function(e) {
        if (!e) {
            return
        }
        this.imageUrl = e;
        this._renderData = null
    };
    hd.prototype.getCurrentImageUrl = function() {
        if (window.devicePixelRatio > 1 && this.srcSetObject["2x"]) {
            return this.srcSetObject["2x"]
        }
        return this.imageUrl
    };
    hd.prototype.setPrintImageUrl = function(e) {
        if (!e) {
            return
        }
        this.printImageUrl = e
    };
    hd.prototype.setSize = function(e) {
        if (!e) {
            return
        }
        this.size = new ea(e.width, e.height);
        this._renderData = null
    };
    hd.prototype.setOffset = function(e) {
        if (!e) {
            return
        }
        this.anchor = this.offset = new ea(e.width, e.height);
        this._renderData = null
    };
    hd.prototype.setAnchor = function(e) {
        this.setOffset(e)
    };
    hd.prototype.setImageOffset = function(e) {
        if (!e) {
            return
        }
        this.imageOffset = new ea(e.width, e.height);
        this._renderData = null
    };
    hd.prototype.setInfoWindowOffset = function(e) {
        if (!e) {
            return
        }
        this.infoWindowOffset = new ea(e.width, e.height)
    };
    hd.prototype.setImageSize = function(e) {
        if (!e) {
            return
        }
        this.imageSize = new ea(e.width, e.height)
    };
    hd.prototype.setImageSrcset = function(T) {
        var e = "";
        if (!T) {
            return
        }
        for (var i in T) {
            if (T.hasOwnProperty(i)) {
                this.srcSetObject[i] = T[i];
                e = T[i] + " " + i + ","
            }
        }
        this.srcSet = e
    };
    hd.prototype.toString = function() {
        return "Icon"
    };
    hd.prototype.generateRenderData = function(hV) {
        var T = this.offset;
        var e = this.size;
        var hX = this.imageOffset;
        var hW = [];
        hW.push( - T.width, T.height - e.height, 0);
        hW.push(e.width - T.width, T.height - e.height, 0);
        hW.push(e.width - T.width, T.height, 0);
        hW.push( - T.width, T.height - e.height, 0);
        hW.push(e.width - T.width, T.height, 0);
        hW.push( - T.width, T.height, 0);
        if (hV !== 0) {
            for (var hU = 0; hU < hW.length; hU += 3) {
                var hT = vec2.fromValues(hW[hU], hW[hU + 1]);
                vec2.rotate(hT, hT, [0, 0], dL( - hV));
                hW[hU] = hT[0];
                hW[hU + 1] = hT[1]
            }
        }
        return {
            vertex: hW
        }
    };
    hd.prototype.getRenderData = function(e) {
        this._renderData = this.generateRenderData(e);
        return this._renderData
    };
    function ao(T, i) {
        D.BaseClass.call(this);
        this.content = T;
        this.map = null;
        this._config = {
            width: 0,
            height: 0,
            maxWidth: 600,
            offset: new ea(0, 0),
            title: "",
            maxContent: "",
            enableMaximize: false,
            enableAutoPan: true,
            enableCloseOnClick: true,
            margin: [10, 10, 40, 10],
            collisions: [[10, 10], [10, 10], [10, 10], [10, 10]],
            ifMaxScene: false,
            onClosing: function() {
                return true
            }
        };
        this.setConfig(i);
        if (this._config.width !== 0) {
            if (this._config.width < 220) {
                this._config.width = 220
            }
            if (this._config.width > 730) {
                this._config.width = 730
            }
        }
        if (this._config.height !== 0) {
            if (this._config.height < 60) {
                this._config.height = 60
            }
            if (this._config.height > 650) {
                this._config.height = 650
            }
        }
        if (this._config.maxWidth !== 0) {
            if (this._config.maxWidth < 220) {
                this._config.maxWidth = 220
            }
            if (this._config.maxWidth > 730) {
                this._config.maxWidth = 730
            }
        }
        this.isWinMax = false;
        this.IMG_PATH = e4.imgPath;
        this.overlay = null;
        var e = this;
        eb.load("infowindow",
        function() {
            e._draw()
        })
    }
    ao.inherits(D.BaseClass, "InfoWindow");
    D.extend(ao.prototype, {
        setWidth: function(e) {
            e = e * 1;
            if (!e && e !== 0 || isNaN(e) || e < 0) {
                return
            }
            if (e !== 0) {
                if (e < 220) {
                    e = 220
                }
                if (e > 730) {
                    e = 730
                }
            }
            this._config.width = e
        },
        setHeight: function(e) {
            e = e * 1;
            if (!e && e !== 0 || isNaN(e) || e < 0) {
                return
            }
            if (e !== 0) {
                if (e < 60) {
                    e = 60
                }
                if (e > 650) {
                    e = 650
                }
            }
            this._config.height = e
        },
        setMaxWidth: function(e) {
            e = e * 1;
            if (!e && e !== 0 || isNaN(e) || e < 0) {
                return
            }
            if (e !== 0) {
                if (e < 220) {
                    e = 220
                }
                if (e > 730) {
                    e = 730
                }
            }
            this._config.maxWidth = e
        },
        setTitle: function(e) {
            this._config.title = e || ""
        },
        setContent: function(e) {
            this.content = e || ""
        },
        getContent: function() {
            return this.content
        },
        setMaxContent: function(e) {
            this._config.maxContent = e || ""
        },
        redraw: function() {},
        enableAutoPan: function() {
            this._config.enableAutoPan = true
        },
        disableAutoPan: function() {
            this._config.enableAutoPan = false
        },
        enableCloseOnClick: function() {
            this._config.enableCloseOnClick = true
        },
        disableCloseOnClick: function() {
            this._config.enableCloseOnClick = false
        },
        enableMaximize: function() {
            this._config.enableMaximize = true
        },
        disableMaximize: function() {
            this._config.enableMaximize = false
        },
        show: function() {
            this._visible = true
        },
        hide: function() {
            this._visible = false
        },
        close: function() {
            this.hide()
        },
        dispose: function() {
            D.BaseClass.prototype.decontrol.call(this)
        },
        maximize: function() {
            this.isWinMax = true
        },
        restore: function() {
            this.isWinMax = false
        },
        setConfig: function(i) {
            if (!i) {
                return
            }
            for (var e in i) {
                if (typeof(this._config[e]) === typeof(i[e])) {
                    this._config[e] = i[e]
                }
            }
        },
        isVisible: function() {
            return this.isOpen()
        },
        isOpen: function() {
            return false
        },
        getPointIn: function() {
            if (this.overlay && this.overlay.getPoint) {
                return this.overlay.getPoint()
            }
        },
        getTitle: function() {
            return this._config.title || ""
        },
        getPosition: function() {
            return this.latLng;
            var e = this.getPointIn();
            return eo.convertMC2LL(e)
        },
        getPoint: function() {
            var e = this.getPointIn();
            return eo.convertMC2LL(e)
        },
        getOffset: function() {
            return this._config.offset
        },
        dispose: function() {
            D.BaseClass.prototype.decontrol.call(this)
        },
        toString: function() {
            return "InfoWindow"
        }
    });
    c9.prototype.openInfoWindow = function(T, e) {
        T.latLng = new c5(e.lat, e.lng);
        var i = eo.convertLL2MC(e);
        this.openInfoWindowIn(T, i)
    };
    c9.prototype.closeInfoWindow = function() {
        var e = this.temp.infoWin || this.temp._infoWin;
        if (e && e.overlay) {
            e.overlay.closeInfoWindow()
        }
    };
    c9.prototype.openInfoWindowIn = function(hT, e) {
        if (!hT || hT.toString() !== "InfoWindow" || !e || e.toString() !== "Point") {
            return
        }
        var i = this.temp;
        if (!i.marker) {
            var T = new hd(e4.imgPath + "blank.gif", {
                width: 1,
                height: 1
            });
            i.marker = new ds(e, {
                icon: T,
                width: 1,
                height: 1,
                offset: new ea(0, 0),
                infoWindowOffset: new ea(0, 0),
                clickable: false
            });
            i.marker._fromMap = 1
        } else {
            i.marker.setPoint(e)
        }
        this.addOverlay(i.marker);
        i.marker.show();
        i.marker.openInfoWindow(hT)
    };
    cW.prototype.openInfoWindow = function(e) {
        if (this.map) {
            this.map.closeInfoWindow();
            e._visible = true;
            this.map.temp._infoWin = e;
            e.overlay = this;
            D.BaseClass.call(e, e.hashCode)
        }
    };
    cW.prototype.closeInfoWindow = function() {
        if (this.map && this.map.temp._infoWin) {
            this.map.temp._infoWin._visible = false;
            this.map.temp._infoWin.decontrol();
            this.map.temp._infoWin = null
        }
    };
    function aO(T, i) {
        cW.call(this);
        this.content = T;
        this.map = null;
        this.domElement = null;
        this._config = {
            width: 0,
            offset: new ea(0, 0),
            styles: {
                backgroundColor: "#fff",
                border: "1px solid #f00",
                padding: "1px",
                whiteSpace: "nowrap",
                fontSize: "12px",
                zIndex: "80",
                MozUserSelect: "none"
            },
            point: null,
            enableMassClear: true
        };
        i = i || {};
        this.setConfig(i);
        if (this._config.width < 0) {
            this._config.width = 0
        }
        this.point = this._config.point;
        var e = this;
        eb.load("marker",
        function() {
            e._draw()
        })
    }
    aO.inherits(cW, "Label");
    D.extend(aO.prototype, {
        setPoint: function(e) {
            if (e && e.toString() === "Point" && !this.getMarker()) {
                this.point = this._config.point = new hu(e.lng, e.lat)
            }
        },
        setContent: function(e) {
            this.content = e
        },
        getContent: function(e) {
            return this.content
        },
        setOpacity: function(e) {
            if (e >= 0 && e <= 1) {
                this._config.opacity = e
            }
        },
        setOffset: function(e) {
            if (!e || e.toString() !== "Size") {
                return
            }
            this._config.offset = new ea(e.width, e.height)
        },
        getOffset: function() {
            return this._config.offset
        },
        setStyle: function(e) {
            e = e || {};
            this._config.styles = D.extend(this._config.styles, e)
        },
        setStyles: function(e) {
            this.setStyle(e)
        },
        setTitle: function(e) {
            this._config.title = e || ""
        },
        getTitle: function() {
            return this._config.title
        },
        setMarker: function(e) {
            if (this._marker && this._marker !== e) {
                this._marker._config.label = null
            }
            this._marker = e;
            if (e) {
                this.point = this._config.point = e.getPoint()
            } else {
                this.point = this._config.point = null
            }
        },
        getMarker: function() {
            return this._marker || null
        },
        getPositionIn: function() {
            return this.getPoint()
        },
    });
    function fQ(T, i) {
        var hT = {};
        for (var e in i) {
            if (i.hasOwnProperty(e)) {
                if (e === "position") {
                    hT.point = eo.convertLL2MC(i[e]);
                    this.latLng = new c5(i[e]["lat"], i[e]["lng"])
                } else {
                    hT[e] = i[e]
                }
            }
        }
        aO.call(this, T, hT)
    }
    fQ.inherits(aO, "LabelOut");
    D.extend(fQ.prototype, {
        toString: function() {
            return "Label"
        },
        setPosition: function(e) {
            this.latLng = new c5(e.lat, e.lng);
            var i = eo.convertLL2MC(e);
            this.setPoint(i)
        },
        getPosition: function() {
            return this.latLng;
            var e = this.getPositionIn();
            return eo.convertMC2LL(e)
        }
    });
    window.BMAP_ANIMATION_DROP = 1;
    window.BMAP_ANIMATION_BOUNCE = 2;
    function ds(e, i) {
        cW.call(this);
        i = i || {};
        this.point = e;
        this._rotation = 0;
        this.map = null;
        this._animation = null;
        this.domElement = null;
        this.iconDom = null;
        this.infoWindowDom = null;
        this.siblingElement = null;
        this.textureCoord = null;
        this.textureCoordGLMap = null;
        this.collisionDetectionFailed = false;
        this._config = {
            offset: new ea(0, 0),
            opacity: 1,
            icon: null,
            title: "",
            infoWindow: null,
            label: null,
            baseZIndex: 0,
            clickable: true,
            zIndexFixed: false,
            isTop: false,
            enableMassClear: true,
            enableDragging: false,
            raiseOnDrag: false,
            restrictDraggingArea: false,
            startAnimation: "",
            enableCollisionDetection: false,
            rank: 0,
            enableDraggingMap: false
        };
        this.setConfig(i);
        if (!i.icon) {
            this._config.icon = new hd(e4.imgPath + "marker_red.png", new ea(23, 25), {
                offset: new ea(10, 25),
                infoWindowOffset: new ea(10, 0)
            })
        }
        this._isDragging = false;
        var T = this;
        eb.load("marker",
        function() {
            T._draw()
        })
    }
    ds.TOP_ZINDEX = bm.getZIndex( - 90) + 1000000;
    ds.DRAG_ZINDEX = ds.TOP_ZINDEX + 1000000;
    ds._injectMethond = function(e) {
        D.extend(ds.prototype, e)
    };
    ds.inherits(cW, "Marker");
    D.extend(ds.prototype, {
        toString: function() {
            return "Marker"
        },
        setIcon: function(e) {
            if (e) {
                this._config.icon = e;
                this.textureCoord = this.textureCoordGLMap = null
            }
        },
        getIcon: function() {
            return this._config.icon
        },
        setLabel: function(e) {
            if (! (e instanceof aO)) {
                return
            }
            this._config.label = e;
            e._config.enableMassClear = this._config.enableMassClear;
            e.setPoint(this.point)
        },
        getLabel: function() {
            return this._config.label
        },
        enableDragging: function() {
            this._config.enableDragging = true
        },
        disableDragging: function() {
            this._config.enableDragging = false
        },
        setPoint: function(e) {
            if (e) {
                this.point = this._config.point = new hu(e.lng, e.lat);
                this.latLng = eo.convertMC2LL(e)
            }
        },
        setPositionIn: function(e) {
            this.setPoint(e)
        },
        getPositionIn: function() {
            return this.getPoint()
        },
        setTop: function(i, e) {
            this._config.isTop = !!i;
            if (i) {
                this._addi = e || 0
            }
        },
        setTitle: function(e) {
            this._config.title = e || ""
        },
        getTitle: function() {
            return this._config.title
        },
        setOffset: function(e) {
            if (e) {
                this._config.offset = e
            }
        },
        getOffset: function() {
            return this._config.offset
        },
        setAnimation: function(e) {
            this._animation = e
        },
        setRank: function(e) {
            this._config.rank = e
        },
        getRank: function() {
            return this._config.rank
        },
        setRotation: function(e) {
            while (e < 0) {
                e += 360
            }
            this._rotation = e % 360
        },
        getRotation: function() {
            return this._rotation
        }
    });
    function aD(e, T) {
        this.latLng = new c5(e.lat, e.lng);
        var i = eo.convertLL2MC(e);
        ds.call(this, i, T)
    }
    aD.inherits(ds, "MarkerOut");
    D.extend(aD.prototype, {
        toString: function() {
            return "Marker"
        },
        setPosition: function(e) {
            this.latLng = new c5(e.lat, e.lng);
            var i = eo.convertLL2MC(e);
            this.setPositionIn(i)
        },
        getPosition: function() {
            return this.latLng;
            var e = this.getPositionIn();
            return eo.convertMC2LL(e)
        }
    });
    window.BMAP_SHAPE_CIRCLE = 1;
    window.BMAP_SHAPE_RECT = 2;
    function be(i, e, T) {
        cW.call(this, e, T);
        this.domElement = null;
        this.point = i;
        T = T || {};
        this._config = {};
        this._config.height = e || 0;
        this._config.size = typeof T.size === "number" ? T.size: 50;
        this._config.fillOpacity = typeof T.fillOpacity === "number" ? T.fillOpacity: 0.8;
        this._config.shape = typeof T.shape === "number" ? T.shape: 1;
        fG(this._config.fillOpacity, 0, 1);
        if (T.fillColor === "") {
            this._config.fillColor = ""
        } else {
            this._config.fillColor = T.fillColor ? T.fillColor: "#f00"
        }
        this._config.icon = T.icon instanceof hd ? T.icon: "";
        this._config.enableMassClear = T.enableMassClear || true;
        var hT = this;
        eb.load("marker",
        function() {
            hT._draw()
        })
    }
    be.inherits(cW, "Marker3D");
    D.extend(be.prototype, {
        setPoint: function(e) {
            this.point = this._config.point = new hu(e.lng, e.lat);
            this.latLng = eo.convertMC2LL(e);
            var i = new bc("onstatus_change");
            i.overlay = this;
            i.action = "setPoint";
            this.fire(i)
        },
        setPositionIn: function(e) {
            this.setPoint(e)
        },
        getPositionIn: function() {
            return this.getPoint()
        },
        setDomAttribute: function(i, T) {
            var e = new bc("onlineupdate");
            e.overlay = this;
            this.dispatchEvent(e)
        }
    });
    function cw(i, e, hT) {
        this.latLng = new c5(i.lat, i.lng);
        var T = eo.convertLL2MC(i);
        be.call(this, T, e, hT)
    }
    cw.inherits(be, "Marker3d");
    D.extend(cw.prototype, {
        toString: function() {
            return "Marker3D"
        },
        setHeight: function(e) {
            this._config.height = Number(e);
            this.draw();
            var i = new bc("onlineupdate");
            i.overlay = this;
            this.dispatchEvent(i)
        },
        getHeight: function() {
            return this._config.height
        },
        setFillOpacity: function(e) {
            if (e > 1 || e < 0) {
                return
            }
            this._config.fillOpacity = e;
            this.setDomAttribute("fillopacity", e)
        },
        getFillOpacity: function() {
            return this._config.fillOpacity
        },
        setFillColor: function(e) {
            this._config.fillColor = e || "";
            this.setDomAttribute("fillcolor", e)
        },
        getFillColor: function() {
            return this._config.fillColor
        },
        setIcon: function(i) {
            if (!i || !this.map) {
                return
            }
            this._config.icon = i;
            if (this._config.icon) {
                var e = this._config.icon.getCurrentImageUrl();
                var hT = i.getCurrentImageUrl() !== e;
                this._config.icon = i;
                this.textureCoord = this.textureCoordGLMap = null;
                this.draw();
                var T = new bc("onstatus_change");
                T.overlay = this;
                T.action = "setIcon";
                T.imageUrlChanged = hT;
                this.fire(T)
            }
        },
        getIcon: function() {
            return this._config.icon
        },
        setPosition: function(e) {
            this.latLng = new c5(e.lat, e.lng);
            var i = eo.convertLL2MC(e);
            this.setPositionIn(i)
        },
        getPosition: function() {
            var e = this.getPositionIn();
            return eo.convertMC2LL(e)
        }
    });
    function a(T, e) {
        x.call(this, e);
        this._normalizedBounds = new dT();
        this.setPoints(T);
        var i = this;
        eb.load("poly",
        function() {
            i._draw()
        })
    }
    a.inherits(x, "Polyline");
    D.extend(a.prototype, {
        getBoundsIn: function(e) {
            if (!e) {
                this._bounds.setMinMax();
                return this._bounds
            }
            this._normalizedBounds.setMinMax();
            return this._normalizedBounds
        },
        setPoints: function(T) {
            this._clearCache();
            this.points = x.getGraphPoints(T).slice(0);
            if (this._config.geodesic === true) {
                this.greatCirclePoints.length = 0;
                for (var e = 0; e < this.points.length - 1; e++) {
                    this.calcGreatCirclePoints(this.points[e], this.points[e + 1])
                }
            }
            this._calcBounds()
        },
        _calcBounds: function() {
            if (!this.points) {
                return
            }
            var e = this;
            e._bounds.setNorthEast(null);
            e._bounds.setSouthWest(null);
            if (e.greatCirclePoints && e.greatCirclePoints.length > 0) {
                D.each(e.greatCirclePoints,
                function(i) {
                    e._bounds.extend(i)
                })
            } else {
                D.each(e.points,
                function(i) {
                    e._bounds.extend(i)
                })
            }
            e._normalizedBounds.setSouthWest(e._bounds.getSouthWest());
            e._normalizedBounds.setNorthEast(e._bounds.getNorthEast());
            if (e._normalizedBounds.sw.lng < -c9.WORLD_SIZE_MC_HALF || e._normalizedBounds.ne.lng > c9.WORLD_SIZE_MC_HALF) {
                e._normalizedBounds.sw.lng = -c9.WORLD_SIZE_MC_HALF;
                e._normalizedBounds.ne.lng = c9.WORLD_SIZE_MC_HALF
            }
        },
        calcGreatCirclePoints: function(hT, T) {
            var hV = hT.latLng;
            var hU = T.latLng;
            if (hV.equals(hU)) {
                return
            }
            var e = eo.getDistance(dL(hV.lng), dL(hV.lat), dL(hU.lng), dL(hU.lat));
            if (e < 250000) {
                return
            }
            var hZ = Math.round(e / 150000);
            var h3 = this.calcAngularDistance(hV, hU);
            this.greatCirclePoints.push(hT);
            var h2 = hV.lng;
            var h1 = hT;
            for (var hW = 0; hW < hZ; hW++) {
                var hY = this.calcMiddlePoint(hV, hU, hW / hZ, h3);
                var h0 = eo.convertLL2MC(hY);
                var hX = h0.lng;
                var h4 = bQ(h0, h1);
                if (h4 > 30037726) {
                    if (h0.lng < h1.lng) {
                        h0.lng += c9.WORLD_SIZE_MC
                    } else {
                        h0.lng -= c9.WORLD_SIZE_MC
                    }
                }
                this.greatCirclePoints.push(h0);
                h1 = h0
            }
            var h4 = bQ(T, h1);
            if (h4 > 30037726) {
                if (T.lng < h1.lng) {
                    T.lng += c9.WORLD_SIZE_MC
                } else {
                    T.lng -= c9.WORLD_SIZE_MC
                }
            }
            this.greatCirclePoints.push(T)
        },
        calcMiddlePoint: function(h0, hZ, h1, h5) {
            var hU = h0.lat;
            var hT = hZ.lat;
            var h4 = h0.lng;
            var h2 = hZ.lng;
            var h6 = dL(hU);
            var h3 = dL(hT);
            var i = dL(h4);
            var e = dL(h2);
            var h8 = Math.sin((1 - h1) * h5) / Math.sin(h5);
            var h7 = Math.sin(h1 * h5) / Math.sin(h5);
            var hX = h8 * Math.cos(h6) * Math.cos(i) + h7 * Math.cos(h3) * Math.cos(e);
            var hW = h8 * Math.cos(h6) * Math.sin(i) + h7 * Math.cos(h3) * Math.sin(e);
            var hV = h8 * Math.sin(h6) + h7 * Math.sin(h3);
            var T = Math.atan2(hV, Math.sqrt(Math.pow(hX, 2) + Math.pow(hW, 2)));
            var hY = Math.atan2(hW, hX);
            return new hu(df(hY), df(T))
        },
        calcAngularDistance: function(hU, i) {
            var hV = dL(hU.lat);
            var hT = dL(i.lat);
            var T = dL(hU.lng);
            var e = dL(i.lng);
            return Math.acos(Math.sin(hV) * Math.sin(hT) + Math.cos(hV) * Math.cos(hT) * Math.cos(Math.abs(e - T)))
        }
    });
    function al(hU, e) {
        if (!hU || hU.length === 0) {
            return
        }
        var hT = [];
        for (var T = 0; T < hU.length; T++) {
            hT[T] = eo.convertLL2MC(hU[T])
        }
        a.call(this, hT, e)
    }
    al.inherits(a, "PolylineOut");
    D.extend(al.prototype, {
        toString: function() {
            return "Polyline"
        },
        setPath: function(hT) {
            if (!hT || hT.length === 0) {
                return
            }
            var T = [];
            for (var e = 0; e < hT.length; e++) {
                T[e] = eo.convertLL2MC(hT[e])
            }
            this.setPathIn(T)
        },
        getPath: function() {
            var e = this.getPathIn();
            if (!e || e.length === 0) {
                return []
            }
            var hT = [];
            for (var T = 0; T < e.length; T++) {
                hT[T] = eo.convertMC2LL(e[T])
            }
            return hT
        },
        getBounds: function(i) {
            var e = this.getBoundsIn(i);
            var T = new dT(eo.convertMC2LL(e.getSouthWest()), eo.convertMC2LL(e.getNorthEast()));
            return T
        }
    });
    function eq(T, hT, e) {
        x.call(this, e);
        this._normalizedBounds = new dT();
        this._cps = hT;
        this._path = T;
        this.setPoints(T);
        var i = this;
        eb.load("poly",
        function() {
            i._draw()
        })
    }
    eq.inherits(a, "BezierCurve");
    D.extend(eq.prototype, {
        getBoundsIn: function(e) {
            if (!e) {
                this._bounds.setMinMax();
                return this._bounds
            }
            this._normalizedBounds.setMinMax();
            return this._normalizedBounds
        },
        setPoints: function(e) {
            this._clearCache();
            this.points = x.getGraphPoints(e).slice(0);
            this.points = this.calcBezierPoints(this.points, this._cps);
            this._calcBounds()
        },
        _calcBounds: function() {
            if (!this.points) {
                return
            }
            var e = this;
            e._bounds.setNorthEast(null);
            e._bounds.setSouthWest(null);
            if (e.greatCirclePoints && e.greatCirclePoints.length > 0) {
                D.each(e.greatCirclePoints,
                function(i) {
                    e._bounds.extend(i)
                })
            } else {
                D.each(e.points,
                function(i) {
                    e._bounds.extend(i)
                })
            }
            e._normalizedBounds.setSouthWest(e._bounds.getSouthWest());
            e._normalizedBounds.setNorthEast(e._bounds.getNorthEast());
            if (e._normalizedBounds.sw.lng < -c9.WORLD_SIZE_MC_HALF || e._normalizedBounds.ne.lng > c9.WORLD_SIZE_MC_HALF) {
                e._normalizedBounds.sw.lng = -c9.WORLD_SIZE_MC_HALF;
                e._normalizedBounds.ne.lng = c9.WORLD_SIZE_MC_HALF
            }
        },
        getPathIn: function() {
            return this._path
        },
        setPathIn: function(e) {
            this._path = e;
            this.setPoints(e)
        },
        getCpsIn: function() {
            return this._cps
        },
        setCpsIn: function(e) {
            this._cps = e;
            this.setPoints(this._path)
        },
        calcBezierPoints: function(hT, hV) {
            var T = [];
            for (var e = 0; e < hT.length - 1; e++) {
                var hU = [hT[e], hV[e][0], hV[e][1], hT[e + 1]];
                T = T.concat((this.bezierbetweenTwoP(hU)))
            }
            return T
        },
        bezierbetweenTwoP: function(hV) {
            var T = 100;
            var hU = 1 / T;
            var e = [];
            for (var hT = 0; hT < T; hT++) {
                e.push(this.getPointOnCubicBezier(hV, hT * hU))
            }
            return e
        },
        getPointOnCubicBezier: function(hW, h0) {
            var i;
            var hV;
            var hT;
            var h1;
            var hU;
            var T;
            var hZ;
            var e;
            var hY;
            var hX;
            hT = 3 * (hW[1].lng - hW[0].lng);
            hV = 3 * (hW[2].lng - hW[1].lng) - hT;
            i = hW[3].lng - hW[0].lng - hT - hV;
            T = 3 * (hW[1].lat - hW[0].lat);
            hU = 3 * (hW[2].lat - hW[1].lat) - T;
            h1 = hW[3].lat - hW[0].lat - T - hU;
            hZ = h0 * h0;
            e = hZ * h0;
            hY = (i * e) + (hV * hZ) + (hT * h0) + hW[0].lng;
            hX = (h1 * e) + (hU * hZ) + (T * h0) + hW[0].lat;
            return new hu(hY, hX)
        }
    });
    function fo(hU, hW, e) {
        if (!hU || hU.length === 0) {
            return
        }
        this.userPath = hU;
        this.userCps = hW;
        var hT = [];
        for (var T = 0; T < hU.length; T++) {
            hT[T] = eo.convertLL2MC(hU[T])
        }
        if (!hW || hW.length === 0) {
            return
        }
        var hV = [];
        for (var T = 0; T < hW.length; T++) {
            hV[T] = [];
            hV[T][0] = eo.convertLL2MC(hW[T][0]);
            if (hW[T][1]) {
                hV[T][1] = eo.convertLL2MC(hW[T][1])
            } else {
                hV[T][1] = eo.convertLL2MC(hW[T][0])
            }
        }
        eq.call(this, hT, hV, e)
    }
    fo.inherits(eq, "BezierCurveOut");
    D.extend(fo.prototype, {
        toString: function() {
            return "BezierCurve"
        },
        setPath: function(hT) {
            if (!hT || hT.length === 0) {
                return
            }
            this.userPath = hT;
            var T = [];
            for (var e = 0; e < hT.length; e++) {
                T[e] = eo.convertLL2MC(hT[e])
            }
            this.setPathIn(T)
        },
        getPath: function() {
            return this.userPath;
            var e = this.getPathIn();
            if (!e || e.length === 0) {
                return []
            }
            var hT = [];
            for (var T = 0; T < e.length; T++) {
                hT[T] = eo.convertMC2LL(e[T])
            }
            return hT
        },
        getControlPoints: function() {
            return this.userCps;
            var e = this.getCpsIn();
            if (!e || e.length === 0) {
                return []
            }
            var hT = [];
            for (var T = 0; T < e.length; T++) {
                hT[T] = [];
                hT[T][0] = eo.convertMC2LL(e[T][0]);
                hT[T][1] = eo.convertMC2LL(e[T][1])
            }
            return hT
        },
        setControlPoints: function(hT) {
            if (!hT || hT.length === 0) {
                return
            }
            this.userCps = hT;
            var T = [];
            for (var e = 0; e < hT.length; e++) {
                T[e] = [];
                T[e][0] = eo.convertLL2MC(hT[e][0]);
                if (hT[e][1]) {
                    T[e][1] = eo.convertLL2MC(hT[e][1])
                } else {
                    T[e][1] = eo.convertLL2MC(hT[e][0])
                }
            }
            this.setCpsIn(T)
        },
        getBounds: function(i) {
            var e = this.getBoundsIn(i);
            var T = new dT(eo.convertMC2LL(e.getSouthWest()), eo.convertMC2LL(e.getNorthEast()));
            return T
        }
    });
    function fm(e, T) {
        x.call(this, T);
        this._normalizedBounds = new dT();
        this.setPoints(e);
        var i = this;
        eb.load("poly",
        function() {
            i._draw()
        })
    }
    fm.inherits(a, "PolylineMultipart");
    D.extend(fm.prototype, {
        setPoints: function(e) {
            if (!e) {
                return
            }
            this._clearCache();
            this.points = this._unifyArgs(e);
            this._calcBounds()
        },
        _unifyArgs: function(T) {
            var e = [];
            var i = [];
            if (T.constructor === Array) {
                if (T[0].constructor === hu) {
                    i.push(T)
                } else {
                    i = T
                }
            } else {
                if (typeof T === "string") {
                    i.push(T)
                }
            }
            D.each(i,
            function(hT) {
                e.push(x.getGraphPoints(hT))
            });
            return e
        },
        setPointAt: function(i, e, T) {
            T = T || 0;
            if (!e || !this.points[T] || !this.points[T][i]) {
                return
            }
            this._clearCache();
            this.points[T][i] = new hu(e.lng, e.lat);
            this._calcBounds()
        },
        getBoundsIn: function(e) {
            if (!e) {
                this._bounds.setMinMax();
                return this._bounds
            }
            this._normalizedBounds.setMinMax();
            return this._normalizedBounds
        },
        _calcBounds: function() {
            if (!this.points) {
                return
            }
            var e = this;
            e._bounds.setNorthEast(null);
            e._bounds.setSouthWest(null);
            if (e.greatCirclePoints && e.greatCirclePoints.length > 0) {
                D.each(e.greatCirclePoints,
                function(i) {
                    e._bounds.extend(i)
                })
            } else {
                D.each(e.points,
                function(i) {
                    D.each(i,
                    function(T) {
                        e._bounds.extend(T)
                    })
                })
            }
            e._normalizedBounds.setSouthWest(e._bounds.getSouthWest());
            e._normalizedBounds.setNorthEast(e._bounds.getNorthEast());
            if (e._normalizedBounds.sw.lng < -c9.WORLD_SIZE_MC_HALF || e._normalizedBounds.ne.lng > c9.WORLD_SIZE_MC_HALF) {
                e._normalizedBounds.sw.lng = -c9.WORLD_SIZE_MC_HALF;
                e._normalizedBounds.ne.lng = c9.WORLD_SIZE_MC_HALF
            }
        }
    });
    function aS(T, e) {
        x.call(this, e);
        e = e || {};
        if (typeof e.fillOpacity === "number") {
            this._config.fillOpacity = e.fillOpacity
        } else {
            this._config.fillOpacity = 0.6
        }
        fG(this._config.fillOpacity, 0, 1);
        if (e.fillColor === "") {
            this._config.fillColor = ""
        } else {
            this._config.fillColor = e.fillColor ? e.fillColor: "#fff"
        }
        this._parseFillCacheWebGL = [];
        this.setPoints(T, e);
        var i = this;
        eb.load("poly",
        function() {
            i._draw()
        })
    }
    aS.inherits(x, "Polygon");
    D.extend(aS.prototype, {
        setPoints: function(hV) {
            var hT = [];
            if (typeof hV === "string" || hV[0] instanceof hu || hV[0] instanceof c5 || this instanceof f9 || hV.length === 0) {
                var e = this._processSinglePointArray(hV);
                this._userPoints = e.userPoints;
                hT = e.innerPoints;
                this.hasMultipleParts = false
            } else {
                this._userPoints = [];
                for (var hU = 0; hU < hV.length; hU++) {
                    var T = this._processSinglePointArray(hV[hU]);
                    this._userPoints.push(T.userPoints);
                    hT.push(T.innerPoints)
                }
                this.hasMultipleParts = true
            }
            x.prototype.setPoints.call(this, hT)
        },
        setPathIn: function(e) {
            this.setPoints(e)
        },
        _processSinglePointArray: function(e) {
            var i = x.getGraphPoints(e).slice(0);
            innerPoints = i.slice(0);
            if (innerPoints.length > 1 && !innerPoints[0].equals(innerPoints[innerPoints.length - 1])) {
                innerPoints.push(new hu(innerPoints[0].lng, innerPoints[0].lat))
            }
            return {
                userPoints: i,
                innerPoints: innerPoints
            }
        },
        setPointAt: function(i, e) {
            if (!this._userPoints[i]) {
                return
            }
            this._clearCache();
            this._userPoints[i] = new hu(e.lng, e.lat);
            this.points[i] = new hu(e.lng, e.lat);
            if (i === 0 && !this.points[0].equals(this.points[this.points.length - 1])) {
                this.points[this.points.length - 1] = new hu(e.lng, e.lat)
            }
            this._calcBounds()
        },
        setPositionAt: function(i, e) {
            if (!this._userPoints[i]) {
                return
            }
            var T = eo.convertLL2MC(e);
            this.setPointAt(i, T)
        },
        getPoints: function() {
            var e = this._userPoints;
            if (e.length === 0) {
                e = this.points
            }
            return e
        },
        getPathIn: function() {
            return this.getPoints()
        }
    });
    function g6(hY, hV) {
        if (!hY || hY.length === 0) {
            return
        }
        var hX = [];
        if (typeof hY === "string" || hY[0] instanceof hu || hY[0] instanceof c5) {
            var e = this._processSinglePointArray(hY);
            for (var hW = 0; hW < e.innerPoints.length; hW++) {
                hX[hW] = eo.convertLL2MC(e.innerPoints[hW])
            }
        } else {
            for (var hW = 0; hW < hY.length; hW++) {
                var T = this._processSinglePointArray(hY[hW]);
                var hU = [];
                for (var hT = 0; hT < T.innerPoints.length; hT++) {
                    hU[hT] = eo.convertLL2MC(T.innerPoints[hT])
                }
                hX.push(hU)
            }
        }
        aS.call(this, hX, hV)
    }
    g6.inherits(aS, "PolygonOut");
    D.extend(g6.prototype, {
        toString: function() {
            return "Polygon"
        },
        setPath: function(hT) {
            if (!hT || hT.length === 0) {
                return
            }
            hT = x.getGraphPoints(hT);
            var T = [];
            for (var e = 0; e < hT.length; e++) {
                T[e] = eo.convertLL2MC(hT[e])
            }
            this.setPathIn(T)
        },
        getPath: function() {
            var e = this.getPathIn();
            if (!e || e.length === 0) {
                return []
            }
            var hT = [];
            for (var T = 0; T < e.length; T++) {
                hT[T] = eo.convertMC2LL(e[T])
            }
            return hT
        }
    });
    function f9(i, e, T) {
        this.point = i;
        this.radius = Math.abs(e);
        aS.call(this, [], T)
    }
    f9.parseTolerance = {
        0 : [0.01, 0.0001, 0.00001, 0.000004],
        1 : [1000, 10, 1, 0.4]
    };
    f9.inherits(aS, "Circle");
    D.extend(f9.prototype, {
        initialize: function(e) {
            this.map = e;
            this.points = this._getPerimeterPoints(this.point, this.radius);
            this._calcBounds();
            return null
        },
        getPoint: function() {
            return this.point
        },
        setPoint: function(e) {
            if (!e) {
                return
            }
            this.point = e;
            this.latLng = eo.convertMC2LL(e)
        },
        setCenterIn: function(e) {
            var i = arguments[1];
            this.setPoint(e, i)
        },
        setRadius: function(e) {
            this.radius = Math.abs(e)
        },
        getCenterIn: function() {
            return this.point
        },
        getRadius: function() {
            return this.radius
        },
        _getPerimeterPoints: function(e, h0) {
            if (!e || !h0 || !this.map) {
                return []
            }
            var T = this.map;
            var hX = e.lng;
            var hV = e.lat;
            var h6 = eo.convertMC2LL(e);
            hX = h6.lng;
            hV = h6.lat;
            var h7 = [];
            var h2 = h0 / eo.EARTHRADIUS;
            var hZ = (Math.PI / 180) * hV;
            var h5 = (Math.PI / 180) * hX;
            for (var hY = 0; hY < 360; hY += 9) {
                var hW = (Math.PI / 180) * hY;
                var h3 = Math.asin(Math.sin(hZ) * Math.cos(h2) + Math.cos(hZ) * Math.sin(h2) * Math.cos(hW));
                var h1 = Math.atan2(Math.sin(hW) * Math.sin(h2) * Math.cos(hZ), Math.cos(h2) - Math.sin(hZ) * Math.sin(h3));
                var h4 = ((h5 - h1 + Math.PI) % (2 * Math.PI)) - Math.PI;
                var hU = new c5(h3 * (180 / Math.PI), h4 * (180 / Math.PI));
                h7.push(eo.convertLL2MC(hU))
            }
            var hT = h7[0];
            h7.push(new hu(hT.lng, hT.lat));
            if (hT) {
                this._radiusMercator = Math.sqrt(Math.pow(hT.lng - this.point.lng, 2) + Math.pow(hT.lat - this.point.lat, 2))
            } else {
                this._radiusMercator = this.radius
            }
            return h7
        }
    });
    function dG(i, e, hT) {
        this.latLng = new c5(i.lat, i.lng);
        var T = eo.convertLL2MC(i);
        f9.call(this, T, e, hT)
    }
    dG.inherits(f9, "CircleOut");
    D.extend(dG.prototype, {
        toString: function() {
            return "Circle"
        },
        setCenter: function(e) {
            this.latLng = new c5(e.lat, e.lng);
            var i = eo.convertLL2MC(e);
            this.setCenterIn(i)
        },
        getCenter: function() {
            return this.latLng
        },
        getPath: function() {
            var e = this.getPathIn();
            if (!e || e.length === 0) {
                return []
            }
            var hT = [];
            for (var T = 0; T < e.length; T++) {
                hT[T] = eo.convertMC2LL(e[T])
            }
            return hT
        }
    });
    function bt(hT, e, i) {
        x.call(this, i);
        i = i || {};
        if (typeof i.topFillOpacity === "number") {
            this._config.topFillOpacity = i.topFillOpacity
        } else {
            this._config.topFillOpacity = 0.6
        }
        if (typeof i.sideFillOpacity === "number") {
            this._config.sideFillOpacity = i.sideFillOpacity
        } else {
            this._config.sideFillOpacity = 0.8
        }
        fG(this._config.sideFillOpacity, 0, 1);
        if (i.topFillColor === "") {
            this._config.topFillColor = ""
        } else {
            this._config.topFillColor = i.topFillColor ? i.topFillColor: "#fff"
        }
        if (i.sideFillColor === "") {
            this._config.sideFillColor = ""
        } else {
            this._config.sideFillColor = i.sideFillColor ? i.sideFillColor: "#fff"
        }
        this._parseFillCacheWebGL = [];
        this.setPoints(hT, i);
        this._config.altitude = e || 0;
        var T = this;
        eb.load("poly",
        function() {
            T._draw()
        })
    }
    bt.inherits(x, "Prism");
    D.extend(bt.prototype, {
        setPoints: function(hV) {
            var hT = [];
            if (typeof hV === "string" || hV[0] instanceof hu || hV[0] instanceof c5 || this instanceof f9 || hV.length === 0) {
                var e = this._processSinglePointArray(hV);
                this._userPoints = e.userPoints;
                hT = e.innerPoints;
                this.hasMultipleParts = false
            } else {
                this._userPoints = [];
                for (var hU = 0; hU < hV.length; hU++) {
                    var T = this._processSinglePointArray(hV[hU]);
                    this._userPoints.push(T.userPoints);
                    hT.push(T.innerPoints)
                }
                this.hasMultipleParts = true
            }
            x.prototype.setPoints.call(this, hT)
        },
        setPathIn: function(e) {
            this.setPoints(e)
        },
        _processSinglePointArray: function(e) {
            var i = x.getGraphPoints(e).slice(0);
            innerPoints = i.slice(0);
            if (innerPoints.length > 1 && !innerPoints[0].equals(innerPoints[innerPoints.length - 1])) {
                innerPoints.push(new hu(innerPoints[0].lng, innerPoints[0].lat))
            }
            return {
                userPoints: i,
                innerPoints: innerPoints
            }
        },
        setPointAt: function(i, e) {
            if (!this._userPoints[i]) {
                return
            }
            this._clearCache();
            this._userPoints[i] = new hu(e.lng, e.lat);
            this.points[i] = new hu(e.lng, e.lat);
            if (i === 0 && !this.points[0].equals(this.points[this.points.length - 1])) {
                this.points[this.points.length - 1] = new hu(e.lng, e.lat)
            }
            this._calcBounds()
        },
        getPoints: function() {
            var e = this._userPoints;
            if (e.length === 0) {
                e = this.points
            }
            return e
        },
        getPathIn: function() {
            return this.getPoints()
        },
        setTopFillOpacity: function(e) {
            if (e > 1 || e < 0) {
                return
            }
            this._config.topFillOpacity = e;
            this._setDomAttribute("topfillopacity", e)
        },
        getTopFillOpacity: function() {
            return this._config.topFillOpacity
        },
        setSideFillOpacity: function(e) {
            if (e > 1 || e < 0) {
                return
            }
            this._config.sideFillOpacity = e;
            this._setDomAttribute("sidefillopacity", e)
        },
        getSideFillOpacity: function() {
            return this._config.sideFillOpacity
        },
        setTopFillColor: function(e) {
            this._config.topFillColor = e || "";
            this._setDomAttribute("topfillcolor", e)
        },
        getTopFillColor: function() {
            return this._config.topFillColor
        },
        setSideFillColor: function(e) {
            this._config.sideFillColor = e || "";
            this._setDomAttribute("sidefillcolor", e)
        },
        getSideFillColor: function() {
            return this._config.sideFillColor
        },
        setAltitude: function(e) {
            this._config.altitude = Number(e);
            this.draw();
            var i = new bc("onlineupdate");
            i.overlay = this;
            this.dispatchEvent(i)
        },
        getAltitude: function() {
            return this._config.altitude
        }
    });
    function ch(hX, hV, hY) {
        if (!hX || hX.length === 0) {
            return
        }
        this.userPath = hX;
        var e = [];
        if (typeof hX === "string" || hX[0] instanceof hu || hX[0] instanceof c5) {
            var hZ = this._processSinglePointArray(hX);
            for (var hU = 0; hU < hZ.innerPoints.length; hU++) {
                e[hU] = eo.convertLL2MC(hZ.innerPoints[hU])
            }
        } else {
            for (var hU = 0; hU < hX.length; hU++) {
                var hW = this._processSinglePointArray(hX[hU]);
                var T = [];
                for (var hT = 0; hT < hW.innerPoints.length; hT++) {
                    T[hT] = eo.convertLL2MC(hW.innerPoints[hT])
                }
                e.push(T)
            }
        }
        bt.call(this, e, hV, hY)
    }
    ch.inherits(bt, "PrismOut");
    D.extend(ch.prototype, {
        toString: function() {
            return "Prism"
        },
        setPath: function(hT) {
            if (!hT || hT.length === 0) {
                return
            }
            this.userPath = hT;
            var T = [];
            for (var e = 0; e < hT.length; e++) {
                T[e] = eo.convertLL2MC(hT[e])
            }
            this.setPathIn(T)
        },
        getPath: function() {
            return this.userPath;
            var e = this.getPathIn();
            if (!e || e.length === 0) {
                return []
            }
            var hT = [];
            for (var T = 0; T < e.length; T++) {
                hT[T] = eo.convertMC2LL(e[T])
            }
            return hT
        }
    });
    function dX(T, e) {
        x.call(this, e);
        e = e || {};
        this._config.type = e.type || "image";
        this._config.url = e.url || "";
        this._config.opacity = typeof e.opacity === "number" ? e.opacity: 1;
        fG(this._config.opacity, 0, 1);
        this._parseFillCacheWebGL = [];
        this.setPoints(T, e);
        var i = this;
        eb.load("poly",
        function() {
            i._draw()
        })
    }
    dX.inherits(x, "GroundOverlay");
    D.extend(dX.prototype, {
        setPoints: function(i) {
            var e = x.getGraphPoints(i).slice(0);
            this.hasMultipleParts = false;
            x.prototype.setPoints.call(this, e)
        },
        setPathIn: function(e) {
            this.setPoints(e)
        },
        getPoints: function() {
            return this.points
        },
        getPathIn: function() {
            return this.getPoints()
        }
    });
    function cq(hU, T) {
        if (!hU) {
            return
        }
        var hW = [new hu(hU.sw.lng, hU.ne.lat), new hu(hU.ne.lng, hU.ne.lat), new hu(hU.ne.lng, hU.sw.lat), new hu(hU.sw.lng, hU.sw.lat)];
        var e = x.getGraphPoints(hW).slice(0);
        var hV = [];
        for (var hT = 0; hT < e.length; hT++) {
            hV[hT] = eo.convertLL2MC(e[hT])
        }
        dX.call(this, hV, T)
    }
    cq.inherits(dX, "GroundOverlayOut");
    D.extend(cq.prototype, {
        toString: function() {
            return "GroundOverlay"
        }
    });
    var bC = {};
    function hJ(T, i) {
        D.BaseClass.call(this);
        this.content = T;
        this.map = null;
        this._config = {
            width: 0,
            height: 0,
            maxWidth: 600,
            offset: new ea(0, 0),
            title: "",
            maxContent: "",
            enableMaximize: false,
            enableAutoPan: true,
            enableCloseOnClick: true,
            margin: [10, 10, 40, 10],
            collisions: [[10, 10], [10, 10], [10, 10], [10, 10]],
            ifMaxScene: false,
            onClosing: function() {
                return true
            }
        };
        this.setConfig(i);
        if (this._config.width < 50) {
            this._config.width = 50
        }
        if (this._config.width > 730) {
            this._config.width = 730
        }
        if (this._config.height != 0) {
            if (this._config.height < 50) {
                this._config.height = 50
            }
            if (this._config.height > 650) {
                this._config.height = 650
            }
        }
        if (this._config.maxWidth !== 0) {
            if (this._config.maxWidth < 50) {
                this._config.maxWidth = 50
            }
            if (this._config.maxWidth > 730) {
                this._config.maxWidth = 730
            }
        }
        this.isWinMax = false;
        this.IMG_PATH = e4.imgPath;
        this.overlay = null;
        var e = this;
        eb.load("simpleInfowindow",
        function() {
            e._draw()
        })
    }
    hJ.inherits(D.BaseClass, "SimpleInfoWindow");
    D.extend(hJ.prototype, {
        setWidth: function(e) {
            e = e * 1;
            if (!e && e != 0 || isNaN(e) || e < 0) {
                return
            }
            if (e != 0) {
                if (e < 50) {
                    e = 50
                }
                if (e > 730) {
                    e = 730
                }
            }
            this._config.width = e
        },
        setHeight: function(e) {
            e = e * 1;
            e -= 10;
            if (!e && e != 0 || isNaN(e) || e < 0) {
                return
            }
            if (e != 0) {
                if (e < 50) {
                    e = 50
                }
                if (e > 650) {
                    e = 650
                }
            }
            this._config.height = e
        },
        setMaxWidth: function(e) {
            e = e * 1;
            if (!e && e != 0 || isNaN(e) || e < 0) {
                return
            }
            if (e != 0) {
                if (e < 50) {
                    e = 50
                }
                if (e > 730) {
                    e = 730
                }
            }
            this._config.maxWidth = e
        },
        setTitle: function(e) {
            this._config.title = e || ""
        },
        setContent: function(e) {
            this.content = e || ""
        },
        setMaxContent: function(e) {
            this._config.maxContent = e || ""
        },
        redraw: function() {},
        enableAutoPan: function() {
            this._config.enableAutoPan = true
        },
        disableAutoPan: function() {
            this._config.enableAutoPan = false
        },
        enableCloseOnClick: function() {
            this._config.enableCloseOnClick = true
        },
        disableCloseOnClick: function() {
            this._config.enableCloseOnClick = false
        },
        enableMaximize: function() {
            this._config.enableMaximize = true
        },
        disableMaximize: function() {
            this._config.enableMaximize = false
        },
        show: function() {
            this._visible = true
        },
        hide: function() {
            this._visible = false
        },
        close: function() {
            this.hide()
        },
        dispose: function() {
            D.BaseClass.prototype.decontrol.call(this)
        },
        maximize: function() {
            this.isWinMax = true
        },
        restore: function() {
            this.isWinMax = false
        },
        setConfig: function(i) {
            if (!i) {
                return
            }
            for (var e in i) {
                if (typeof(this._config[e]) == typeof(i[e])) {
                    this._config[e] = i[e]
                }
            }
        },
        isVisible: function() {
            return this.isOpen()
        },
        isOpen: function() {
            return false
        },
        getPoint: function() {
            if (this.overlay && this.overlay.getPoint) {
                return this.overlay.getPoint()
            }
        },
        getOffset: function() {
            return this._config.offset
        },
        dispose: function() {
            D.BaseClass.prototype.decontrol.call(this)
        },
        toString: function() {
            return "SimpleInfoWindow"
        }
    });
    c9.prototype.openSimpleInfoWindow = function(hT, e) {
        if (!hT || hT.toString() != "SimpleInfoWindow" || !e || e.toString() != "Point") {
            return
        }
        var i = this.temp;
        if (!i.marker) {
            var T = new hd(e4.imgPath + "blank.gif", {
                width: 1,
                height: 1
            });
            i.marker = new ds(e, {
                icon: T,
                width: 1,
                height: 1,
                offset: new ea(0, 0),
                infoWindowOffset: new ea(0, 0),
                clickable: false
            });
            i.marker._fromMap = 1
        } else {
            i.marker.setPoint(e)
        }
        this.addOverlay(i.marker);
        i.marker.show();
        i.marker.openSimpleInfoWindow(hT)
    };
    c9.prototype.closeSimpleInfoWindow = function() {
        var e = this.temp.infoWin || this.temp._infoWin;
        if (e && e.overlay) {
            e.overlay.closeSimpleInfoWindow()
        }
    };
    cW.prototype.openSimpleInfoWindow = function(e) {
        if (this.map) {
            this.map.closeSimpleInfoWindow();
            e._visible = true;
            this.map.temp._infoWin = e;
            e.overlay = this;
            D.BaseClass.call(e, e.hashCode)
        }
    };
    cW.prototype.closeSimpleInfoWindow = function() {
        if (this.map && this.map.temp._infoWin) {
            this.map.temp._infoWin._visible = false;
            this.map.temp._infoWin.decontrol();
            this.map.temp._infoWin = null
        }
    };
    function ek(e, i) {
        e = isNaN(e) ? 0 : e;
        i = isNaN(i) ? 0 : i;
        this.x = e;
        this.y = i
    }
    ek.prototype.equals = function(e) {
        if (!e) {
            return false
        }
        return e.x === this.x && e.y === this.y
    };
    ek.prototype.clone = function() {
        return new ek(this.x, this.y)
    };
    ek.prototype.toString = function() {
        return "Pixel"
    };
    function ea(i, e) {
        if (typeof i !== "number") {
            this.width = parseFloat(i)
        } else {
            this.width = i
        }
        if (typeof e !== "number") {
            this.height = parseFloat(e)
        } else {
            this.height = e
        }
    }
    ea.prototype.equals = function(e) {
        return !! (e && this.width === e.width && this.height === e.height)
    };
    ea.prototype.toString = function() {
        return "Size"
    };
    var bI = {
        B_NORMAL_MAP: {
            tileUrls: es(e4.tileDomain, e4.rasterTilePath),
            vectorTileUrls: es(e4.tileDomain, e4.vectorTilePath),
            tileSize: 256,
            baseUnits: 256,
            zoomLevelMin: 3,
            zoomLevelMax: 19,
            minDataZoom: 3,
            maxDataZoom: 19,
            minZoom: 3,
            maxZoom: 19,
            webgl: {
                minZoom: 3,
                maxZoom: 25
            },
            zoomLevelBase: 18,
            errorUrl: e4.imgPath + "bg.png",
            bounds: new dT(new hu( - 21364736, -11708041.66), new hu(23855104, 12474104.17)),
            imgExtend: "png"
        },
        B_SATELLITE_MAP: {
            tileUrls: ["//maponline0.bdimg.com/starpic/?qt=satepc&", "//maponline1.bdimg.com/starpic/?qt=satepc&", "//maponline2.bdimg.com/starpic/?qt=satepc&", "//maponline3.bdimg.com/starpic/?qt=satepc&"],
            tileSize: 256,
            baseUnits: 256,
            zoomLevelMin: 3,
            zoomLevelMax: 19,
            minDataZoom: 3,
            maxDataZoom: 19,
            minZoom: 3,
            maxZoom: 19,
            zoomLevelBase: 18,
            errorUrl: e4.imgPath + "bg.png",
            bounds: new dT(new hu( - 21364736, -10616832), new hu(23855104, 15859712)),
            imgExtend: "png"
        },
        B_STREET_MAP: {
            tileUrls: es(e4.tileDomain, e4.rasterTilePath),
            tileSize: 256,
            baseUnits: 256,
            zoomLevelMin: 3,
            zoomLevelMax: 19,
            minDataZoom: 3,
            maxDataZoom: 19,
            minZoom: 3,
            maxZoom: 19,
            zoomLevelBase: 18,
            errorUrl: e4.imgPath + "bg.png",
            bounds: new dT(new hu( - 21364736, -10616832), new hu(23855104, 15859712)),
            imgExtend: "png"
        },
        BMAP_CUSTOM_LAYER: {
            tileUrls: [""],
            tileSize: 256,
            baseUnits: 256,
            zoomLevelMin: 1,
            zoomLevelMax: 19,
            minDataZoom: 3,
            maxDataZoom: 19,
            minZoom: 3,
            maxZoom: 19,
            zoomLevelBase: 18,
            errorUrl: e4.imgPath + "blank.gif",
            bounds: new dT(new hu( - 21364736, -10616832), new hu(23855104, 15859712)),
            imgExtend: "png"
        },
        B_EARTH_MAP: {
            tileUrls: [""],
            tileSize: 256,
            baseUnits: 256,
            zoomLevelMin: 3,
            zoomLevelMax: 19,
            minDataZoom: 3,
            maxDataZoom: 19,
            minZoom: 3,
            maxZoom: 19,
            webgl: {
                minZoom: 3,
                maxZoom: 21
            },
            zoomLevelBase: 18,
            errorUrl: e4.imgPath + "blank.gif",
            bounds: new dT(new hu( - 21364736, -10616832), new hu(23855104, 15859712)),
            imgExtend: "png"
        }
    };
    var b7 = bI;
    function bU(hY, i, hU, T, hT) {
        this.mgr = hY;
        this.position = hU;
        this._cbks = [];
        this.name = hY.getTileName(T, hT, hY.map.config.style);
        this.info = T;
        this._transparentPng = hT.isTransparentPng();
        var hZ = U("img");
        dn(hZ);
        hZ.galleryImg = false;
        var hX = hZ.style;
        hX.position = "absolute";
        hX.width = hY.tileSize + "px";
        hX.height = hY.tileSize + "px";
        hX.left = hU[0] + "px";
        hX.top = hU[1] + "px";
        this.img = hZ;
        this.src = i;
        if (ac && hU._offsetX === 0) {
            hX.opacity = 0;
            hX.willChange = "opacity"
        }
        var hW = this;
        this.img.onload = function(h7) {
            if (!hW.mgr) {
                return
            }
            var h2 = hW.mgr;
            var h0 = h2.bufferTiles;
            if (h2.bufferNumber > 0) {
                h0[hW.name] = hW;
                h0.push(hW.name)
            }
            var h4 = h0.length - h2.bufferNumber;
            for (var h5 = 0; h4 > 0 && h5 < h0.length; h5++) {
                var h6 = h0[h5];
                if (!h2.mapTiles[h6]) {
                    if (h0[h6]) {
                        h0[h6].mgr = null;
                        var h3 = h0[h6].img;
                        if (h3.parentNode) {
                            fr(h3);
                            h3.parentNode.removeChild(h3)
                        }
                        h3 = null;
                        h0[h6].img = null;
                        h0[h6] = null;
                        delete h0[h6]
                    }
                    h0.splice(h5, 1);
                    h5--;
                    h4--
                }
            }
            hW.loaded = true;
            h2.imgNumber++;
            if (!hf(hW.img)) {
                if (hT.tilesDiv) {
                    hT.tilesDiv.appendChild(hW.img)
                }
            }
            var h7 = new bc("onimagechange");
            h7.action = "show";
            h7.tile = hW.name;
            h2.map.dispatchEvent(h7);
            if (ac && hU._offsetX === 0) {
                var h1 = new p({
                    fps: 10,
                    duration: 300,
                    render: function(e) {
                        if (hW.img && hW.img.style) {
                            hW.img.style.opacity = e * 1
                        }
                    },
                    finish: function() {
                        if (hW.img && hW.img.style) {
                            delete hW.img.style.opacity;
                            hW.img.style.willChange = "auto"
                        }
                    }
                })
            }
            hW._callCbks()
        };
        this.img.onerror = function(h2) {
            hW.error = true;
            hW._callCbks();
            if (!hW.mgr) {
                return
            }
            var h0 = hW.mgr;
            var h1 = b7[hT.mapType];
            if (h1.errorUrl) {
                hW.img.src = h1.errorUrl
            }
            if (!hf(hW.img)) {
                if (hT.tilesDiv) {
                    hT.tilesDiv.appendChild(hW.img)
                }
            }
        };
        hZ = null;
        var hV = new bc("onimagebefore");
        hV.tile = hW.name;
        hY.map.dispatchEvent(hV)
    }
    bU.prototype._addLoadCbk = function(e) {
        this._cbks.push(e)
    };
    bU.prototype._load = function() {
        if (FeBrowser.ie <= 6 && FeBrowser.ie > 0 && this._transparentPng) {
            this.img.src = e4.imgPath + "blank.gif"
        } else {
            this.img.src = this.src
        }
    };
    bU.prototype._callCbks = function() {
        var T = this;
        for (var e = 0; e < T._cbks.length; e++) {
            T._cbks[e]()
        }
        T._cbks.length = 0
    };
    var ac = (!D.Browser.ie || D.Browser.ie > 8);
    function fe(e) {
        this.tileLayers = [];
        this.map = e;
        this.bufferNumber = 300;
        this.mapTiles = [];
        this.bufferTiles = [];
        this.config = b7[this.map.mapType];
        this.errorUrl = this.config.errorUrl;
        this.tileSize = this.config.tileSize;
        this.baseUnits = this.config.baseUnits;
        this.baseZoomLevel = this.config.zoomLevelBase;
        this.tileURLs = this.config.tileUrls;
        this.imgNumber = 0;
        this.numLoading = 0;
        this.temp = {}
    }
    bp.register(function(i) {
        if (i._renderType === "webgl") {
            return
        }
        var e = i.tileMgr = new fe(i);
        i.addEventListener("mousewheel",
        function(T) {
            e.mouseWheel(T)
        });
        i.addEventListener("dblclick",
        function(T) {
            e.dblClick(T)
        });
        i.addEventListener("rightdblclick",
        function(T) {
            e.dblClick(T)
        });
        i.addEventListener("minuspress",
        function(T) {
            e.keypress(T)
        });
        i.addEventListener("pluspress",
        function(T) {
            e.keypress(T)
        });
        i.addEventListener("load",
        function(T) {
            if (this.mapType === BMAP_EARTH_MAP) {
                return
            }
            e.loadTiles()
        });
        i.addEventListener("zoomstartcode",
        function(T) {
            if (this.mapType === BMAP_EARTH_MAP) {
                return
            }
            e._zoom(T)
        });
        i.addEventListener("moving",
        function(T) {
            if (this.mapType === BMAP_EARTH_MAP) {
                return
            }
            e.moveGridTiles()
        });
        i.addEventListener("resize",
        function(T) {
            if (this.mapType === BMAP_EARTH_MAP) {
                return
            }
            e.resizeMap(T)
        });
        i.addEventListener("addtilelayer",
        function(T) {
            e.addTileLayer(T)
        });
        i.addEventListener("removetilelayer",
        function(T) {
            e.removeTileLayer(T)
        })
    });
    D.extend(fe.prototype, {
        addTileLayer: function(hT) {
            var T = this;
            var i = hT.target;
            T.tileLayers.push(i);
            if (T.map.loaded) {
                T.moveGridTiles()
            }
        },
        removeTileLayer: function(h0) {
            var h1 = this;
            var hY = h0.target;
            var hW = hY.mapType;
            var hV = h1.mapTiles;
            var h3 = h1.bufferTiles;
            for (var T in h3) {
                var hT = T.split("-")[1];
                if (hT == hW) {
                    delete h3[T]
                }
            }
            for (var T in hV) {
                var hT = T.split("-")[1];
                if (hT == hW) {
                    delete hV[T]
                }
            }
            if (h1.zoomsDiv && h1.zoomsDiv.parentNode) {
                h1.zoomsDiv.parentNode.removeChild(h1.zoomsDiv);
                h1.zoomsDiv.innerHTML = ""
            }
            var hU = h1.map;
            if (hU.deepZoom) {
                var h2 = hU.deepZoom.preDeepZoomDiv;
                if (h2 && h2.parentNode) {
                    h2.parentNode.removeChild(h2)
                }
            }
            for (var hZ = 0,
            hX = h1.tileLayers.length; hZ < hX; hZ++) {
                if (hY == h1.tileLayers[hZ]) {
                    h1.tileLayers.splice(hZ, 1)
                }
            }
            h1.moveGridTiles()
        },
        hideDeepZoomDiv: function() {
            var i = this,
            T = i.map;
            if (T.deepZoom) {
                var e = T.deepZoom.preDeepZoomDiv;
                if (e && e.style.display != "none") {
                    e.style.display = "none"
                }
            }
        },
        getTileLayer: function(hU) {
            var hT = this;
            for (var T = 0,
            e = hT.tileLayers.length; T < e; T++) {
                tilelayer = hT.tileLayers[T];
                if (tilelayer.mapType == hU) {
                    return tilelayer
                }
            }
            return null
        },
        _zoom: function(T) {
            var i = this;
            if (i.zoomsDiv && i.zoomsDiv.style.display != "none") {
                i.zoomsDiv.style.display = "none"
            }
            i.hideDeepZoomDiv();
            i.moveGridTiles()
        },
        resizeMap: function(i) {
            this.loaded = false;
            this.moveGridTiles()
        },
        _checkTilesLoaded: function() {
            this.numLoading--;
            var e = this;
            if (this.numLoading == 0) {
                if (this._checkLoadedTimer) {
                    clearTimeout(this._checkLoadedTimer);
                    this._checkLoadedTimer = null
                }
                this._checkLoadedTimer = setTimeout(function() {
                    if (e.numLoading == 0) {
                        e.map.dispatchEvent(new bc("ontilesloaded"))
                    }
                    e._checkLoadedTimer = null
                },
                80)
            }
        },
        getTileName: function(e, T, i) {
            var hU = T.mapType;
            var hT = "TILE-" + hU + "-" + i + "-" + e[0] + "-" + e[1] + "-" + e[2];
            return hT
        },
        hideTile: function(hT, T) {
            var i = hT.img;
            if (hf(i)) {
                if (hT.loaded) {
                    this.imgNumber--
                }
                if (i.parentNode) {
                    fr(i);
                    i.parentNode.removeChild(i)
                }
            }
            var hU = new bc("onimagechange");
            hU.tile = this.getTileName(hT.info, T, this.map.config.style);
            hU.action = "hide";
            delete this.mapTiles[hT.name];
            if (!hT.loaded) {
                fr(i);
                hT._callCbks();
                i = null;
                hT.img = null;
                hT.mgr = null
            }
            this.map.dispatchEvent(hU)
        },
        loadTiles: function() {
            var i = this;
            if (D.Browser.ie) {
                try {
                    document.execCommand("BackgroundImageCache", false, true)
                } catch(T) {}
            }
            if (this.zoomsDiv && this.zoomsDiv.style.display != "none") {
                this.zoomsDiv.style.display = "none"
            }
            i.hideDeepZoomDiv();
            i.moveGridTiles()
        },
        getCell: function(hU, hT) {
            var e = this.baseUnits * Math.pow(2, (this.baseZoomLevel - hT));
            var T = parseInt(hU.lng / e);
            var i = parseInt(hU.lat / e);
            return [T, i, e * (T + 0.5), e * (i + 0.5)]
        },
        moveGridTiles: function() {
            var h7 = this.map,
            ii = h7.getMapType(),
            ig = this.tileLayers.length;
            var ic = h7.centerPoint;
            if (ii !== BMAP_SATELLITE_MAP) {
                ic = d5.calcLoopCenterPoint(ic)
            }
            var hY = h7.width;
            var iw = h7.getZoomUnits();
            var ie = iw * hY;
            var ik = ic.lng - ie / 2;
            var h3 = ic.lng + ie / 2;
            var h6 = d5.isAddWidth(ik, h3);
            for (var im = 0; im < ig; im++) {
                var hU = this.tileLayers[im];
                if (hU.baseLayer || ig == 1) {
                    this.tilesDiv = hU.tilesDiv
                }
                var h8 = b7[hU.mapType];
                var hT = h7.zoomLevel;
                var iq = h7.getZoomUnits(h7.zoomLevel);
                var h2 = h8.baseUnits * Math.pow(2, (h8.zoomLevelBase - hT));
                var h0 = Math.floor(ic.lng / h2);
                var il = Math.floor(ic.lat / h2);
                var h5 = h8.tileSize;
                var h9 = [h0, il, (ic.lng - h0 * h2) / h2 * h5, (ic.lat - il * h2) / h2 * h5];
                var h1 = h6 ? h7.width / 2 * 1.5 : h7.width / 2;
                var h4 = h9[0] - Math.ceil((h1 - h9[2]) / h5);
                var iv = h9[1] - Math.ceil((h7.height / 2 - h9[3]) / h5);
                var io = h9[0] + Math.ceil((h1 + h9[2]) / h5);
                var ia = h9[1] + Math.ceil((h7.height / 2 + h9[3]) / h5);
                var hZ = [];
                for (var it = h4; it < io; it++) {
                    for (var ir = iv; ir < ia; ir++) {
                        hZ.push([it, ir]);
                        var ih = "id_" + it + "_" + ir + "_" + hT;
                        hZ[ih] = true
                    }
                }
                if (hU.mapType !== BMAP_SATELLITE_MAP) {
                    hZ = d5.calcLoopTiles(hZ, hT)
                }
                hZ.sort((function(i) {
                    return function(id, iy) {
                        return ((0.4 * Math.abs(id[0] - i[0]) + 0.6 * Math.abs(id[1] - i[1])) - (0.4 * Math.abs(iy[0] - i[0]) + 0.6 * Math.abs(iy[1] - i[1])))
                    }
                })([h9[0], h9[1]]));
                var T = this.mapTiles;
                var e = -ic.lng / iq;
                var ix = ic.lat / iq;
                var ij = [e, ix];
                for (var ib in T) {
                    var hW = T[ib];
                    var iu = hW.info;
                    if (!iu) {
                        continue
                    }
                    var ih = "id_" + iu[0] + "_" + iu[1] + "_" + iu[2];
                    if (!hZ[ih]) {
                        this.hideTile(hW, hU)
                    }
                }
                var hV = -h7.offsetX + h7.width / 2;
                var hX = -h7.offsetY + h7.height / 2;
                hU.tilesDiv.style.left = Math.round(e + hV) - ij[0] + "px";
                hU.tilesDiv.style.top = Math.round(ix + hX) - ij[1] + "px";
                this.numLoading += hZ.length;
                for (var it = 0,
                ip = hZ.length; it < ip; it++) {
                    this.showTile([hZ[it][0], hZ[it][1], h7.zoomLevel], ij, hU, it, h7.config.style)
                }
            }
        },
        showTile: function(hW, hV, hZ, h4) {
            this.centerPos = hV;
            var hX = b7[hZ.mapType];
            var h0 = this.map.config.style;
            var hT = this.getTileName(hW, hZ, h0);
            var hU = (hW[0] * hX.tileSize) + hV[0];
            var T = ( - 1 - hW[1]) * hX.tileSize + hV[1];
            var h3 = [hU, T];
            var hY = null;
            if (hZ.mapType !== BMAP_SATELLITE_MAP) {
                hY = d5.calcLoopParam(hW[0], hW[2]);
                var h2 = hY.offsetX;
                h3[0] += h2;
                h3._offsetX = h2
            }
            var h7 = this;
            var h6 = this.mapTiles[hT];
            if (h6) {
                h6.img.style.left = h3[0] + "px";
                h6.img.style.top = h3[1] + "px";
                if (h6.loaded) {
                    this._checkTilesLoaded()
                } else {
                    h6._addLoadCbk(function() {
                        h7._checkTilesLoaded()
                    })
                }
                return
            }
            h6 = this.bufferTiles[hT];
            if (h6) {
                this.imgNumber++;
                hZ.tilesDiv.insertBefore(h6.img, hZ.tilesDiv.lastChild);
                this.mapTiles[hT] = h6;
                h6.img.style.left = h3[0] + "px";
                h6.img.style.top = h3[1] + "px";
                if (h6.loaded) {
                    this._checkTilesLoaded()
                } else {
                    h6._addLoadCbk(function() {
                        h7._checkTilesLoaded()
                    })
                }
                var h5 = new bc("onimagechange");
                h5.action = "cache";
                h5.tile = this.getTileName(hW, hZ, h0);
                this.map.dispatchEvent(h5)
            } else {
                var h1 = new ek(hW[0], hW[1]);
                if (hY) {
                    h1.x = hY.col
                }
                var i = hZ.getTilesUrl(h1, hW[2]);
                h6 = new bU(this, i, h3, hW, hZ);
                h6._addLoadCbk(function() {
                    h7._checkTilesLoaded()
                });
                h6._load();
                this.mapTiles[hT] = h6;
                bz(this.map)
            }
        },
        mouseWheel: function(hX) {
            var hW = this.map;
            if (!hW.config.enableWheelZoom) {
                return
            }
            var hY = hW.zoomLevel + (hX.trend === true ? 1 : -1);
            var hU = hW._getProperZoom(hY);
            if (hU.exceeded) {
                var T = new bc("onzoomexceeded");
                T.targetZoom = hY;
                hW.dispatchEvent(T);
                return
            }
            hW.dispatchEvent(new bc("onzoomstart"));
            hW.lastLevel = hW.zoomLevel;
            hW.zoomLevel = hU.zoom;
            var i = hX.pixel;
            var hT = hW.pixelToPointIn(i, {
                zoom: hW.lastLevel
            });
            var hV = hW.getZoomUnits(hW.zoomLevel);
            hW.centerPoint = new hu(hT.lng + hV * (hW.width / 2 - i.x), hT.lat - hV * (hW.height / 2 - i.y));
            this.zoom(i)
        },
        dblClick: function(T) {
            var i = this.map;
            if (!i.config.enableDblclickZoom) {
                return
            }
            if (i.mapType === "B_EARTH_MAP") {
                return
            }
            if (i.currentOperation === dV.dragging) {
                return
            }
            if (T.type == "onrightdblclick") {
                i.zoomOut(T.point)
            } else {
                i.zoomIn(T.point)
            }
        },
        keypress: function(T) {
            var i = this.map;
            if (i.getMapType() === BMAP_EARTH_MAP) {
                return
            }
            T.type == "onpluspress" ? i.zoomIn() : i.zoomOut()
        }
    });
    function cS(hT) {
        this.opts = hT || {};
        this.copyright = this.opts.copyright || {};
        this.transparentPng = this.opts.transparentPng || false;
        this.png8 = this.opts.png8 || false;
        this.baseLayer = this.opts.baseLayer || false;
        this.dataType = this.opts.dataType || 1;
        this.isFlat = this.opts.isFlat === false ? false: true;
        this.showLabel = this.opts.showLabel === false ? false: true;
        var e = this.opts.tileTypeName || "web";
        this.tileType = cM.getInstance(e);
        this.clipTile = this.opts.clipTile || false;
        this._type = "tilelayer";
        var i = f6() ? 128 : 256;
        this.cacheSize = this.opts.cacheSize || i;
        var T = this;
        this.tileCache = new e0(this.cacheSize, {
            clearCallback: function(hU) {
                if (hU.label) {
                    if (hU.label.textImageBitmap) {
                        hU.label.textImageBitmap.close()
                    }
                    if (hU.label.indoorTextImageBitmap) {
                        hU.label.indoorTextImageBitmap.close()
                    }
                }
                T._removeIndoorData(hU)
            }
        });
        this.scaler = a7() >= 1.5 ? 2 : 1;
        this.normalUdt = aE("ditu", "normal").udt;
        this.numLoading = 0;
        this.useThumbData = false;
        if (this.baseLayer) {
            this.useThumbData = true
        }
        if (typeof this.opts.customLayer === "boolean") {
            this.customLayer = this.opts.customLayer
        } else {
            this.customLayer = true
        }
    }
    cS.inherits(ee, "TileLayer");
    D.extend(cS.prototype, {
        isTransparentPng: function() {
            return this.transparentPng
        },
        getTilesUrl: function(h0, e) {
            var T = b7[this.mapType];
            if (typeof T != "object") {
                return null
            }
            var hT = h0.x;
            var h1 = h0.y;
            if (this.mapType !== BMAP_SATELLITE_MAP) {
                var h1 = d5.calcLoopParam(h1, e).col
            }
            var i = "";
            if (this.opts.tileUrlTemplate) {
                i = this.opts.tileUrlTemplate;
                i = i.replace(/\{X\}/, h1);
                i = i.replace(/\{Y\}/, hT);
                i = i.replace(/\{Z\}/, e)
            } else {
                if (this.mapType == BMAPGL_NORMAL_MAP) {
                    var hZ = this.isCanvasMap ? 0 : 1;
                    var hV = T.tileUrls[Math.abs(h1 + hT) % T.tileUrls.length];
                    if (window.offLineIPAddress) {
                        hV = window.offLineIPAddress + "tile5/"
                    }
                    var hU = this.map.config.style;
                    i = hV + "?qt=vtile&x=" + hT + "&y=" + h1 + "&z=" + e + (hU === "default" ? "": ("&styleId=1")) + "&styles=pl&udt=" + this.normalUdt + "&scaler=" + this.scaler + "&showtext=" + hZ;
                    i = i.replace(/-(\d+)/gi, "M$1")
                }
                if (this.mapType == BMAP_SATELLITE_MAP) {
                    var hW = aE("ditu", "satellite");
                    var hY = hW.ver;
                    var hX = hW.udt;
                    i = T.tileUrls[Math.abs(h1 + hT) % T.tileUrls.length] + "u=x=" + hT + ";y=" + h1 + ";z=" + e + ";v=" + hY + ";type=sate&fm=46&udt=" + hX;
                    i = i.replace(/-(\d+)/gi, "M$1")
                }
            }
            return i
        },
        initialize: function(hU) {
            this.map = hU;
            if (hU._renderType === "webgl") {
                var hT = null;
                if (this.customLayer !== false) {
                    hT = this.getTilesUrl
                }
                D.extend(this, fT);
                this.labelProcessor = new dk(this);
                this.callbackDataQueue = [];
                if (hT) {
                    this.getTilesUrl = hT
                }
                var e = this;
                hU.on("indoor_data_refresh",
                function(hV) {
                    if (!e.baseLayer) {
                        return
                    }
                    e._refreshIndoorData(hV.uid, hV.floor)
                });
                hU.on("custom_labels_ready",
                function(hV) {
                    if (!e.baseLayer) {
                        return
                    }
                    e._doWorkAfterLabelImageLoad(hV.virtualTile, hV.labelCanvas, null, hV.imgKey)
                });
                hU.on("glmoduleloaded",
                function() {
                    if (!e.baseLayer) {
                        return
                    }
                    e.updateAllIconsTextureCoords()
                })
            }
            if (!hU.temp.layerZIndex) {
                hU.temp.layerZIndex = 0
            }
            this.zIndex = this.zIndex || 0;
            if (this.baseLayer) {
                this.zIndex = 0
            }
            if (!hU.temp.layid) {
                hU.temp.layid = 0
            }
            if (!this.opts.mapType) {
                this.mapType = "BMAP_CUSTOM_LAYER_" + hU.temp.layid;
                hU.temp.layid++
            } else {
                this.mapType = this.opts.mapType
            }
            var i = b7[this.mapType];
            if (!i) {
                b7[this.mapType] = {
                    tileUrls: [],
                    tileSize: 256,
                    baseUnits: 256,
                    zoomLevelMin: 1,
                    zoomLevelMax: 19,
                    minZoom: 3,
                    maxZoom: 19,
                    minDataZoom: 3,
                    maxDataZoom: 19,
                    zoomLevelBase: 18,
                    errorUrl: e4.imgPath + "/blank.gif",
                    bounds: new dT(new hu( - 21364736, -10616832), new hu(23855104, 15859712)),
                    imgExtend: "png"
                }
            }
            if (hU._renderType !== "webgl") {
                var T = dJ(hU.platform, '<div style="position:absolute;z-index:' + this.zIndex + '"></div>');
                T.style.display = "";
                T.style.left = Math.ceil( - hU.offsetX + hU.width / 2) + "px";
                T.style.top = Math.ceil( - hU.offsetY + hU.height / 2) + "px";
                this.tilesDiv = T
            }
            this.isCanvasMap = hU.isCanvasMap();
            this.lastZoom = hU.getZoom()
        },
        remove: function() {
            if (this.tilesDiv && this.tilesDiv.parentNode) {
                this.tilesDiv.innerHTML = "";
                this.tilesDiv.parentNode.removeChild(this.tilesDiv)
            }
            delete this.tilesDiv
        },
        getCopyright: function() {
            return this.copyright
        },
        getMapType: function() {
            return this.mapType
        },
        setZIndex: function(e) {
            this.zIndex = e;
            if (this.tilesDiv) {
                this.tilesDiv.style.zIndex = e
            }
        }
    });
    function c6(i, e, T) {
        this.bounds = i;
        this.content = e;
        this.mapType = T
    }
    c6.inherits(ee, "Copyright");
    var gp = {
        get: function(e) {
            if (!gp.singleton) {
                gp.singleton = new aj(e)
            }
            return gp.singleton
        }
    };
    function aj(i) {
        this._map = i;
        this._tileMgr = i.tileMgr;
        this._animationDiv = null;
        this._preAnimationDiv = null;
        this._animation = null;
        this._baseLayerDiv = null;
        this._transformStyleName = a9.ifSupportCSS3("transform", true);
        this._transformOriginStyleName = a9.ifSupportCSS3("transformOrigin", true);
        this._preZoomTimes = 1;
        this._preRenderTick = 1;
        this._enableCanvas2dMap = !!(i.getRenderType() === "canvas");
        this._isIE9 = !!(D.Browser.ie === 9);
        var e = this;
        i.addEventListener("maptypechange",
        function() {
            e.hide()
        });
        i.addEventListener("load",
        function() {
            e.hide()
        })
    }
    D.extend(aj.prototype, {
        prepareLayer: function() {
            var hT = this._map;
            var e = this._tileMgr;
            this._canvas2dMapMgr = hT.canvas2dMapMgr;
            var T = this._baseLayerDiv = e.tilesDiv;
            if (!this._animationDiv) {
                var i = this._preAnimationDiv;
                if (i) {
                    i.parentNode && i.parentNode.removeChild(i);
                    this._preAnimationDiv = null
                }
                this._preAnimationDiv = this._animationDiv = T.cloneNode(true);
                hT.platform.insertBefore(this._animationDiv, hT.platform.firstChild)
            }
            this.show()
        },
        prepareAniParam: function() {
            var hT = this._animationDiv;
            if (!hT) {
                return
            }
            var e = hT.children.length;
            var T;
            this._zoomAniInfo = [];
            for (var hU = e - 1; hU > -1; hU--) {
                var hV = {};
                T = hT.children[hU].style;
                hV.top = parseInt(T.top, 10);
                hV.left = parseInt(T.left, 10);
                this._zoomAniInfo[hU] = hV
            }
        },
        prepareLabelLayer: function() {
            var hU = this._map;
            if (this._enableCanvas2dMap && hU.canvas2dMapMgr) {
                if (this.touchZoomLabelCanvas) {
                    this.touchZoomLabelCanvas.parentNode.removeChild(this.touchZoomLabelCanvas)
                }
                var i = hU.canvas2dMapMgr._labelCanvas;
                this.touchZoomLabelCanvas = i.cloneNode(false);
                var e = this.touchZoomLabelCanvas.getContext("2d");
                e.drawImage(i, 0, 0);
                hU.platform.insertBefore(this.touchZoomLabelCanvas, hU.platform.firstChild);
                var hT = parseInt(i.style.left, 10);
                var T = parseInt(i.style.top, 10);
                this.touchZoomLabelCanvas.style.zIndex = 9;
                this.touchZoomLabelCanvas.style[this._transformOriginStyleName] = (this._fixPosition.x - (hU.offsetX + hT)) + "px " + (this._fixPosition.y - (hU.offsetY + T)) + "px";
                i.style.visibility = "hidden"
            }
        },
        show: function() {
            if (this._animationDiv) {
                this._animationDiv.style.visibility = ""
            }
        },
        showLabel: function() {
            var i = this._map;
            if (this._enableCanvas2dMap && i.canvas2dMapMgr) {
                var e = i.canvas2dMapMgr._labelCanvas;
                if (e) {
                    e.style.visibility = ""
                }
                if (this.touchZoomLabelCanvas) {
                    this.touchZoomLabelCanvas.style.zIndex = -2;
                    this.touchZoomLabelCanvas.style.visibility = "hidden"
                }
            }
        },
        hide: function() {
            if (this._animationDiv) {
                this._animationDiv.style.visibility = "hidden"
            }
            if (this._preAnimationDiv) {
                this._preAnimationDiv.style.visibility = "hidden"
            }
        },
        hideNonAnimationLayers: function() {
            var hT = this._map;
            if (hT.getRenderType() === "dom") {
                if (hT.overlayDiv) {
                    hT.overlayDiv.style.visibility = "hidden"
                }
                if (hT.overlayDivEx) {
                    hT.overlayDivEx.style.visibility = "hidden"
                }
            }
            var hV = hT.tileMgr.tileLayers;
            var hU;
            for (var T = 0,
            e = hV.length; T < e; T++) {
                hU = hV[T];
                hU.tilesDiv.style.visibility = "hidden"
            }
        },
        showNonAnimationLayers: function() {
            var hT = this._map;
            if (hT.getRenderType() === "dom") {
                if (hT.overlayDiv) {
                    hT.overlayDiv.style.visibility = ""
                }
                if (hT.overlayDivEx) {
                    hT.overlayDivEx.style.visibility = ""
                }
            }
            var hV = hT.tileMgr.tileLayers;
            var hU;
            for (var T = 0,
            e = hV.length; T < e; T++) {
                hU = hV[T];
                hU.tilesDiv.style.visibility = ""
            }
        },
        setFixPosition: function(e) {
            this._fixPosition = e
        },
        setZoom: function(e, hZ) {
            var hW = this._fixPosition;
            var h5 = this._map;
            var h6 = this._baseLayerDiv;
            var hX = {
                x: hW.x - parseInt(h6.style.left, 10) - h5.offsetX,
                y: hW.y - parseInt(h6.style.top, 10) - h5.offsetY
            };
            var hT = this._animationDiv;
            if (!hT) {
                return
            }
            var h3 = hT.children.length;
            var h1;
            var h4 = this._transformStyleName;
            var hV = this._transformOriginStyleName;
            var h7 = this;
            var h9;
            var hY;
            for (var h2 = h3 - 1; h2 > -1; h2--) {
                var h0 = this._zoomAniInfo[h2];
                h1 = hT.children[h2].style;
                var hU = h0.left - hX.x;
                var T = h0.top - hX.y;
                h0.dx = hU * e - hU;
                h0.dy = T * e - T;
                h0.preDx = hU - hU;
                h0.preDy = T - T;
                h9 = h0.preDx + (h0.dx - h0.preDx);
                hY = h0.preDy + (h0.dy - h0.preDy) + hZ;
                h1.left = h0.left + h9 + "px";
                h1.top = h0.top + hY + "px";
                h1.width = h1.height = 256 * e + "px"
            }
            if (this._enableCanvas2dMap) {
                var h8 = !h7._isIE9 ? "translate3d(0px, " + hZ + "px, 0) scale(" + e + ")": "translate(0px, " + hZ + "px) scale(" + e + ")";
                this.touchZoomLabelCanvas.style[h4] = h8
            }
        },
        setZoomFinish: function() {
            this._animationDiv = null
        },
        startAnimation: function(hW) {
            this.prepareLayer();
            this.hideNonAnimationLayers();
            var ig = this._map;
            if (this.touchZoomLabelCanvas) {
                this.touchZoomLabelCanvas.style.display = "none"
            }
            hW = hW || {};
            var id = hW.zoomCount || 0;
            var h1 = hW.fixPosition;
            var ib = hW.fixMCPosition;
            var hZ = hW.pixOffset;
            this._zoomCount = id;
            var hT = ig.getZoom();
            var ie = hT + id;
            var e = ig.config.enableContinuousZoom;
            var h5 = 0.5;
            var h0 = 5;
            var T = Math.pow(2, id);
            var ii = this._baseLayerDiv;
            var h2 = {
                x: h1.x - parseInt(ii.style.left, 10) - ig.offsetX,
                y: h1.y - parseInt(ii.style.top, 10) - ig.offsetY
            };
            var hX = this._animationDiv;
            var h9 = hX.children.length;
            var ik = this._preZoomTimes;
            var ic = [];
            var ia = this._transformStyleName;
            var hY = this._transformOriginStyleName;
            for (var h8 = h9 - 1; h8 > -1; h8--) {
                var h6 = {};
                var h7 = hX.children[h8].style;
                h6.top = parseInt(h7.top, 10);
                h6.left = parseInt(h7.left, 10);
                var hV = h6.left - h2.x;
                var hU = h6.top - h2.y;
                h6.dx = hV * T - hV;
                h6.dy = hU * T - hU;
                h6.preDx = hV * ik - hV;
                h6.preDy = hU * ik - hU;
                ic[h8] = h6
            }
            var ih = this;
            var h4;
            var ij;
            var h3;
            this._zoomAni = new p({
                fps: 60,
                duration: e ? 500 : 1,
                transition: function(i) {
                    i = i * h0 / (2 * h5);
                    return h0 * i - h5 * i * i
                },
                render: function(iv) {
                    iv = iv * (4 * h5) / (h0 * h0);
                    h4 = ik + iv * (T - ik);
                    var im = hT + eD(h4);
                    var it = null;
                    var ir = 0;
                    var iw = 0;
                    if (hW.onAnimationBeforeLooping) {
                        var ix = hW.onAnimationBeforeLooping(iv, im);
                        it = ix.loopingCenter;
                        ir = ix.yDiff;
                        iw = ix.totalYDiff
                    }
                    for (var io = ic.length - 1; io > -1; io--) {
                        var ip = ic[io];
                        if (hX.children[io]) {
                            var iu = hX.children[io].style;
                            ij = ip.preDx + (ip.dx - ip.preDx) * iv - hZ.width * iv;
                            h3 = ip.preDy + (ip.dy - ip.preDy) * iv - hZ.height * iv + ir;
                            iu.left = ip.left + ij + "px";
                            iu.top = ip.top + h3 + "px";
                            iu.height = iu.width = 256 * h4 + "px"
                        }
                    }
                    var il = hZ.width * iv;
                    var iq = hZ.height * iv;
                    if (ig.isRestrict) {
                        ih._enableCanvas2dMap && ih._canvas2dMapMgr.clearLabel()
                    } else {
                        ih._enableCanvas2dMap && ih._canvas2dMapMgr.drawLabel(h4, h1, hT, ie, id, iv, il, iq, iw, ir)
                    }
                    ih._preZoomTimes = h4;
                    ih._preRenderTick = iv;
                    hW.onAnimationLooping && hW.onAnimationLooping(iv, im, it)
                },
                finish: function() {
                    ih._preZoomTimes = 1;
                    ih._zoomAni = null;
                    ih._animationDiv = null;
                    hW.onAnimationFinish && hW.onAnimationFinish();
                    ih.showNonAnimationLayers()
                }
            });
            return this._zoomAni
        },
        stopAnimation: function() {
            if (this._zoomAni) {
                this._zoomAni.stop();
                this._zoomAni = null
            }
        }
    });
    function c(e) {
        this._initVars(e);
        this._initColorCanvas();
        this._bindEvent(e)
    }
    D.extend(c.prototype, {
        _initVars: function(e) {
            this._map = e._map;
            this._canvas2dMapMgr = e;
            this._labelCtx = e._labelCtx;
            this.ratio = this._map.config.ratio;
            this.sizeRatio = this.ratio > 1 ? 2 : 1;
            this.RANK1 = 1000000;
            this.RANK2 = 2000000;
            this.RANK3 = 3000000;
            this.RANK4 = 4000000;
            this.RANK5 = 5000000
        },
        _initColorCanvas: function() {
            var i = 256,
            T = U("canvas"),
            e = T.style;
            e.width = i + "px";
            e.height = i + "px";
            T.width = i;
            T.height = i;
            this._colorCvsSize = i;
            this._colorCvs = T;
            this._colorCtx = T.getContext("2d")
        },
        getLabelImageData: function(h6) {
            var h5 = h6.textImg;
            var T = h6.textPos;
            var h3 = this.ratio;
            var h1 = this.sizeRatio / h3;
            var hU = this._colorCtx;
            var hY = this._colorCvsSize;
            hU.clearRect(0, 0, hY, hY);
            var h0 = 0;
            var e = 0;
            var hX = 0;
            for (var hZ = 0; hZ < T.length; hZ++) {
                if (T[hZ].width > h0) {
                    h0 = T[hZ].width;
                    e = hZ;
                    hX = T[hZ].drawX
                }
            }
            h0 /= h1;
            var h2 = 0;
            for (var hZ = 0,
            hW = T.length; hZ < hW; hZ++) {
                var h4 = T[hZ];
                var h7;
                if (hZ === e) {
                    h7 = 0
                } else {
                    h7 = h4.drawX - hX
                }
                hU.drawImage(h5, h4.srcX, h4.srcY, h4.width, h4.height, h7, h2, h4.width / h1, h4.height / h1);
                if (h4.width / h1 > h0) {
                    h0 = h4.width / h1
                }
                h2 += h4.height / h1 + 2 * h3
            }
            var hT = hU.getImageData(0, 0, h0, h2);
            var hV = hU.getImageData(0, 0, h0, h2);
            return [hT, hV]
        },
        _bindEvent: function(i) {
            var e = this,
            T = i._map;
            T.addEventListener("onspotmouseover",
            function(hW) {
                if (!this.isCanvasMap() || !this.temp.isPermitSpotOver) {
                    return
                }
                if (hW.spots.length > 0) {
                    var hV = hW.spots[0].userdata.uid;
                    var hU = hW.spots[0].userdata.name;
                    var hT = e.findLabelByUid(hV, hU);
                    hT && e._toHighLightColor(hT)
                }
            });
            T.addEventListener("onspotmouseout",
            function(hW) {
                if (!this.isCanvasMap() || !this.temp.isPermitSpotOver) {
                    return
                }
                if (hW.spots.length > 0) {
                    var hV = hW.spots[0].userdata.uid;
                    var hU = hW.spots[0].userdata.name;
                    var hT = e.findLabelByUid(hV, hU);
                    hT && e._toDefaultColor(hT)
                }
            });
            T.addEventListener("onspotclick",
            function(hW) {
                if (!this.isCanvasMap() || !this.temp.isPermitSpotOver) {
                    return
                }
                if (hW.spots && hW.spots.length > 0) {
                    var hV = hW.spots[0].userdata.uid;
                    var hU = hW.spots[0].userdata.name;
                    var hT = e.findLabelByUid(hV, hU);
                    hT && e._changeBaseMapState(hT)
                } else {
                    e._recoverNormalState()
                }
            });
            T.on("spot_status_reset",
            function() {
                e._recoverNormalState()
            });
            T.on("spot_highlight",
            function(hU) {
                var hT = e.findLabelByUid(hU.uid);
                hT && e._changeBaseMapState(hT)
            })
        },
        _getTextBound: function(h4) {
            if (!h4.textPos) {
                return null
            }
            var h2 = this.ratio;
            var h0 = this.sizeRatio / h2;
            var T = h4.textPos;
            var h3 = h4.baseDrawX;
            var h1 = h4.baseDrawY;
            var hY = h3 * h2 + (T[0].drawX - h3) / h0;
            var hW = h1 * h2 + (T[0].drawY - h1) / h0;
            var hU = hY + T[0].width / h0;
            var e = hW + T[0].height / h0;
            for (var hZ = 0,
            hX = T.length; hZ < hX; hZ++) {
                var h5 = T[hZ];
                var hV = h3 * h2 + (h5.drawX - h3) / h0;
                if (hV < hY) {
                    hY = hV
                }
                var hT = h1 * h2 + (h5.drawY - h1) / h0;
                if (hT < hW) {
                    hW = hT
                }
                if (hV + h5.width > hU) {
                    hU = hV + h5.width
                }
                if (hT + h5.height > e) {
                    e = hT + h5.height
                }
            }
            return [hY, hW, hU, e]
        },
        _toHighLightColor: function(T) {
            if (T._tempRank && T._tempRank == this.RANK5) {
                return
            }
            var hX = this._getTextBound(T);
            if (!hX) {
                return
            }
            var hT = Math.round(hX[0]);
            var i = Math.round(hX[1]);
            var e = this.getLabelImageData(T);
            var hV = e[0];
            var hU = e[1];
            var hW = this._canvas2dMapMgr.getFilterImageData(hV, this.RANK5);
            T._oldImgData = hU;
            this._labelCtx.putImageData(hW, hT, i)
        },
        _toDefaultColor: function(e) {
            if (e._tempRank && e._tempRank == this.RANK5) {
                return
            }
            if (e._oldImgData) {
                var i = this.sizeRatio;
                var T = this._getTextBound(e);
                if (!T) {
                    return
                }
                this._labelCtx.putImageData(e._oldImgData, Math.round(T[0]), Math.round(T[1]));
                e._oldImgData = null
            }
        },
        _changeBaseMapState: function(hT) {
            var T = this._canvas2dMapMgr;
            var i = hT.guid;
            var e = hT.guidExt;
            var hU = {
                guid: i,
                name: hT.name,
                guidExt: e
            };
            T._labelStrategy.setStrategyInfo(hU);
            T._loadData()
        },
        _recoverNormalState: function() {
            var e = this._canvas2dMapMgr;
            e._labelStrategy.setStrategyInfo(null);
            e._loadData()
        },
        findLabelByUid: function(hV, hT) {
            var hX = this._canvas2dMapMgr,
            e = hX._computedLabel;
            for (var hU = 0,
            T = e.length; hU < T; hU++) {
                var hW = e[hU];
                if (!hX.isClickableLabel(hW)) {
                    continue
                }
                if (hV && hW.guid === hV) {
                    return hW
                }
                if (hT && hW.name === hT) {
                    return hW
                }
            }
            return null
        }
    });
    function ed(e) {
        this._initVars(e)
    }
    D.extend(ed.prototype, {
        _initVars: function(e) {
            this._map = e._map;
            this._canvas2dMapMgr = e;
            this.ratio = this._map.config.ratio;
            this._strategyInfo = null;
            this.RANK1 = 1000000;
            this.RANK2 = 2000000;
            this.RANK3 = 3000000;
            this.RANK4 = 4000000;
            this.RANK5 = 5000000
        },
        setStrategyInfo: function(e) {
            this._strategyInfo = e
        },
        preComputeLabel: function(hZ, iT, iC, ib, iN, i7) {
            var iw = [],
            h7 = hZ._centerX,
            h5 = hZ._centerY,
            i8 = ib * iN;
            var iI = this.ratio;
            var hY = this._map.getZoom();
            var iq = 0;
            if (hY === 5) {
                iq = 4
            }
            if (hY === 8) {
                iq = -6
            }
            hZ.sort(function(i9, i) {
                if (i9.x * i9.y < i.x * i.y) {
                    return - 1
                } else {
                    return 1
                }
            });
            for (var it = 0,
            io = hZ.length; it < io; it++) {
                var iY = hZ[it],
                ii = iY.x,
                ie = iY.y,
                ic = iY.z;
                var ik = d5.calcLoopParam(ii, ic).offsetX;
                var iG = ii * i8,
                iF = (ie + 1) * i8,
                hT = (iG - h7) / ib + iT / 2 + ik,
                T = (h5 - iF) / ib + iC / 2;
                for (var ip = 0,
                i2 = iY.length; ip < i2; ip++) {
                    var h1 = iY[ip],
                    h8 = undefined,
                    h6 = undefined,
                    i0 = undefined,
                    iZ = undefined;
                    var iP = h1.baseDrawX = hT + h1.baseX;
                    var iO = h1.baseDrawY = T + h1.baseY;
                    if (h1.type == "fixed") {
                        var iA = h1.iconPos,
                        ia = h1.textPos,
                        i4 = h1.textImg;
                        if (iA) {
                            iA.drawX = hT + iA.destX;
                            iA.drawY = T + iA.destY;
                            h8 = iA.drawX;
                            h6 = iA.drawY;
                            i0 = iA.drawX + iA.width;
                            iZ = iA.drawY + iA.height
                        }
                        if (ia && i4) {
                            for (var iQ = 0; iQ < ia.length; iQ++) {
                                var i3 = ia[iQ];
                                i3.drawX = hT + i3.destX;
                                i3.drawY = T + i3.destY;
                                if (!h8) {
                                    h8 = i3.drawX;
                                    h6 = i3.drawY;
                                    i0 = i3.drawX + i3.width;
                                    iZ = i3.drawY + i3.height
                                } else {
                                    if (i3.drawX < h8) {
                                        h8 = i3.drawX
                                    }
                                    if (i3.drawY < h6) {
                                        h6 = i3.drawY
                                    }
                                    if (i3.drawX + i3.width > i0) {
                                        i0 = i3.drawX + i3.width
                                    }
                                    if (i3.drawY + i3.height > iZ) {
                                        iZ = i3.drawY + i3.height
                                    }
                                }
                            }
                        }
                    } else {
                        h1.tileX = hT;
                        h1.tileY = T;
                        h8 = hT + h1.minXOriginal;
                        h6 = T + h1.minYOriginal;
                        i0 = hT + h1.maxXOriginal;
                        iZ = T + h1.maxYOriginal
                    }
                    if (h8 != undefined) {
                        var iS = iP + (h8 - iP) / iI;
                        var iR = iO + (h6 - iO) / iI;
                        var iu = iP + (i0 - iP) / iI;
                        var ir = iO + (iZ - iO) / iI;
                        h1.minX = iS;
                        h1.minY = iR;
                        h1.maxX = iu;
                        h1.maxY = ir;
                        var iW = (iS + iu) / 2,
                        iV = (iR + ir) / 2,
                        iD = h7 + (iW - iT / 2) * ib,
                        iB = h5 + (iC / 2 - iV) * ib;
                        h1.geoX = iD;
                        h1.geoY = iB;
                        iw.push(h1)
                    }
                }
            }
            if (i7) {
                for (var it = 0,
                io = i7.length; it < io; it++) {
                    var im = i7[it];
                    var iL = im[0];
                    var h2 = im[1];
                    var iA = iL.iconPos;
                    var hW = iA.geoX;
                    var hU = iA.geoY;
                    var iP = (hW - h7) / ib + iT / 2;
                    var iO = (h5 - hU) / ib + iC / 2;
                    var h8 = iP + iA.destX;
                    var h6 = iO + iA.destY;
                    var i0 = h8 + iA.width;
                    var iZ = h6 + iA.height;
                    iL.textPos = iL.textPos || iL._textPos;
                    var ia = iL.textPos;
                    var iU = ia[0];
                    var ih = iP + iU.destX;
                    var h4 = iO + iU.destY;
                    if (h4 < h6) {
                        h6 = h4
                    }
                    if (ih + iU.width > i0) {
                        i0 = ih + iU.width
                    }
                    if (h4 + iU.height > iZ) {
                        iZ = h4 + iU.height
                    }
                    if (ia.length === 2) {
                        var ig = ia[1];
                        var id = iP + ig.destX;
                        var h3 = iO + ig.destY;
                        if (h3 < h6) {
                            h6 = h3
                        }
                        if (id + ig.width > i0) {
                            i0 = id + ig.width
                        }
                        if (h3 + ig.height > iZ) {
                            iZ = h3 + ig.height
                        }
                    }
                    iL._tempBounds = [h8, h6, i0, iZ];
                    var iA = h2.iconPos;
                    var hW = iA.geoX;
                    var hU = iA.geoY;
                    var iP = (hW - h7) / ib + iT / 2;
                    var iO = (h5 - hU) / ib + iC / 2;
                    var h8 = iP + iA.destX;
                    var h6 = iO + iA.destY;
                    var i0 = h8 + iA.width;
                    var iZ = h6 + iA.height;
                    h2.textPos = h2.textPos || h2._textPos;
                    var ia = h2.textPos;
                    var iU = ia[0];
                    var ih = iP + iU.destX;
                    var h4 = iO + iU.destY;
                    if (ih < h8) {
                        h8 = ih
                    }
                    if (h4 < h6) {
                        h6 = h4
                    }
                    if (h4 + iU.height > iZ) {
                        iZ = h4 + iU.height
                    }
                    if (ia.length === 2) {
                        var ig = ia[1];
                        var id = iP + ig.destX;
                        var h3 = iO + ig.destY;
                        if (id < h8) {
                            h8 = id
                        }
                        if (h3 < h6) {
                            h6 = h3
                        }
                        if (h3 + ig.height > iZ) {
                            iZ = h3 + ig.height
                        }
                    }
                    h2._tempBounds = [h8, h6, i0, iZ]
                }
                for (var it = 0,
                io = i7.length; it < io; it++) {
                    var im = i7[it];
                    var iL = im[0];
                    var h2 = im[1];
                    if (it === 0 && h2.textPos) {
                        h2._textPos = h2.textPos;
                        delete h2.textPos
                    }
                    var iX = iL;
                    if (!iL.textPos && h2.textPos) {
                        iX = h2
                    }
                    var i1 = iX._tempBounds;
                    for (ip = it + 1; ip < io; ip++) {
                        var il = i7[ip];
                        var ix = il[0];
                        var i6 = il[1];
                        var h9 = 0;
                        var i5 = ix._tempBounds;
                        if (! (i1[2] < i5[0] || i1[0] > i5[2] || i1[3] < i5[1] || i1[1] > i5[3])) {
                            h9++;
                            if (ix.textPos) {
                                ix._textPos = ix.textPos;
                                delete ix.textPos
                            }
                        }
                        var i5 = i6._tempBounds;
                        if (! (i1[2] < i5[0] || i1[0] > i5[2] || i1[3] < i5[1] || i1[1] > i5[3])) {
                            h9++;
                            if (i6.textPos) {
                                i6._textPos = i6.textPos;
                                delete i6.textPos
                            }
                        }
                        if (h9 >= 2) {
                            if (iX.textPos) {
                                iX._textPos = iX.textPos;
                                delete iX.textPos
                            }
                        }
                    }
                }
                for (var it = 0,
                io = i7.length; it < io; it++) {
                    var im = i7[it];
                    var iL = im[0];
                    var h2 = im[1];
                    var iy = iL;
                    if (!iL.textPos && h2.textPos) {
                        iy = h2
                    }
                    var iA = iy.iconPos;
                    var hW = iA.geoX;
                    var hU = iA.geoY;
                    var iP = iy.baseDrawX = (hW - h7) / ib + iT / 2;
                    var iO = iy.baseDrawY = (h5 - hU) / ib + iC / 2;
                    iA.drawX = iP + iA.destX;
                    iA.drawY = iO + iA.destY;
                    var h8 = iA.drawX;
                    var h6 = iA.drawY;
                    var i0 = iA.drawX + iA.width;
                    var iZ = iA.drawY + iA.height;
                    var ia = iy.textPos;
                    if (ia) {
                        var iU = ia[0];
                        iU.drawX = iP + iU.destX;
                        iU.drawY = iO + iU.destY;
                        if (iU.drawX < h8) {
                            h8 = iU.drawX
                        }
                        if (iU.drawY < h6) {
                            h6 = iU.drawY
                        }
                        if (iU.drawX + iU.width > i0) {
                            i0 = iU.drawX + iU.width
                        }
                        if (iU.drawY + iU.height > iZ) {
                            iZ = iU.drawY + iU.height
                        }
                        if (ia.length === 2) {
                            var ig = ia[1];
                            ig.drawX = iP + ig.destX;
                            ig.drawY = iO + ig.destY;
                            if (ig.drawX < h8) {
                                h8 = ig.drawX
                            }
                            if (ig.drawY < h6) {
                                h6 = ig.drawY
                            }
                            if (ig.drawX + ig.width > i0) {
                                i0 = ig.drawX + ig.width
                            }
                            if (ig.drawY + ig.height > iZ) {
                                iZ = ig.drawY + ig.height
                            }
                        }
                    }
                    var iS = iP + (h8 - iP) / iI;
                    var iR = iO + (h6 - iO) / iI;
                    var iu = iP + (i0 - iP) / iI;
                    var ir = iO + (iZ - iO) / iI;
                    iy.minX = iS;
                    iy.minY = iR;
                    iy.maxX = iu;
                    iy.maxY = ir;
                    var iK = (iS + iu) / 2;
                    var iJ = (iR + ir) / 2;
                    var hX = h7 + (iK - iT / 2) * ib;
                    var hV = h5 + (iC / 2 - iJ) * ib;
                    iy.geoX = hX;
                    iy.geoY = hV;
                    iw.push(iy)
                }
            }
            var iM = this._strategyInfo;
            if (iM) {
                var iv = iM.guid;
                var iE = iM.name;
                var ij = iM.guidExt;
                for (var it = 0,
                io = iw.length; it < io; it++) {
                    var h0 = iw[it];
                    delete h0._tempRank;
                    if (!this._canvas2dMapMgr.isClickableLabel(h0) || (ij === 1 && !h0.guidExt)) {
                        continue
                    }
                    if ((iv && iv === h0.guid) || (iE && iE === h0.name)) {
                        h0._tempRank = this.RANK5
                    }
                }
            } else {
                for (var it = 0,
                io = iw.length; it < io; it++) {
                    var h0 = iw[it];
                    if (h0.type == "line" || !h0.iconPos) {
                        continue
                    }
                    delete h0._tempRank
                }
            }
            iw.sort(function(ja, i9) {
                var jb = ja._tempRank ? ja._tempRank: ja.rank,
                i = i9._tempRank ? i9._tempRank: i9.rank;
                if (jb === i) {
                    return ja.baseX - i9.baseX
                }
                return i - jb
            });
            for (var it = 0,
            io = iw.length; it < io; it++) {
                var iX = iw[it];
                iX.isDel = false;
                iX.isFadeout = false;
                iX._schedule = 0;
                iX._isIgnore = false;
                iX.arrIntersectIndex = [];
                for (ip = it + 1; ip < io; ip++) {
                    var iz = iw[ip];
                    if (! (iX.maxX - iq < iz.minX || iX.minX > iz.maxX - iq || iX.maxY - iq < iz.minY || iX.minY > iz.maxY - iq)) {
                        iX.arrIntersectIndex.push(ip)
                    }
                }
            }
            for (var it = 0,
            io = iw.length; it < io; it++) {
                var h0 = iw[it];
                if (h0.isDel == false) {
                    var e = h0.arrIntersectIndex;
                    for (var ip = 0,
                    i2 = e.length; ip < i2; ip++) {
                        var iH = iw[e[ip]];
                        iH.isDel = true;
                        if (iH.guidExt === 1) {
                            iH.isDel = false
                        }
                    }
                }
            }
            return iw
        }
    });
    function ai(e) {
        this._map = e;
        this._initCanvas();
        this._initVars();
        this._bindEvent();
        this._tileType = cM.getInstance("na")
    }
    bp.register(function(i) {
        if (i.getRenderType() === "canvas") {
            var e = i.config.style;
            if (bp["FeatureStyle" + e]) {
                i.canvas2dMapMgr = new ai(i)
            } else {
                i.loadMapStyleFiles(function() {
                    i.canvas2dMapMgr = new ai(i);
                    i.canvas2dMapMgr._loadData()
                })
            }
        }
    });
    D.extend(ai.prototype, {
        _initCanvas: function() {
            var hW = this._map,
            hU = hW.getSize(),
            hT = hU.width,
            i = hU.height,
            e = hW.platform,
            hX = U("canvas"),
            hV = hX.style;
            var T = this.ratio = hW.config.ratio;
            this._width = hT;
            this._height = i;
            hV.cssText = "position: absolute;left:0;top:0;width:" + hT + "px;height:" + i + "px;z-index:100;";
            hX.width = hT * T;
            hX.height = i * T;
            this._labelCanvas = hX;
            this._labelCtx = hX.getContext("2d");
            e.appendChild(hX)
        },
        _initVars: function() {
            var e = aE("ditu", "normal");
            this._udt = e.udt;
            this._version = e.ver;
            this._labelDataUrls = b7.B_NORMAL_MAP.vectorTileUrls;
            this._style = bp["FeatureStyle" + this._map.config.style];
            this._labelCount = 0;
            this._vectorDrawLib = new a1(this);
            this._cache = {
                maxNum: 500,
                delNum: 50,
                arrCache: []
            };
            this._computedLabel = null;
            this._spotData = null;
            this._labelStrategy = new ed(this);
            this._labelClick = new c(this);
            this._biz = new gO(this);
            this._map.temp.isPermitSpotOver = true;
            this.labelStyleParam = "pl";
            if (this._map.getMapType() === BMAP_SATELLITE_MAP) {
                this.labelStyleParam = "sl"
            }
            this.statRequestCount = 0;
            this.statResponseCount = 0
        },
        _resizeHandler: function(hV) {
            var hX = this,
            i = hX._map,
            hU = i.getSize(),
            T = hU.width,
            hZ = hU.height;
            var hW = this.ratio;
            var h0 = this._labelCanvas,
            hT = h0.style;
            hT.width = T + "px";
            hT.height = hZ + "px";
            h0.width = T * hW;
            h0.height = hZ * hW;
            hX._width = T;
            hX._height = hZ;
            var hY = true;
            hX._loadData(hY)
        },
        _bindEvent: function() {
            var e = this,
            i = e._map;
            i.addEventListener("load",
            function(T) {
                e.clearLabel();
                e._loadData()
            });
            i.addEventListener("zoomend",
            function(T) {
                if (!T.notClearLabel) {
                    e.clearLabel()
                }
                e._loadData()
            });
            i.addEventListener("moveend",
            function(T) {
                e._loadData()
            });
            i.addEventListener("resize",
            function(T) {
                e._resizeHandler(T)
            });
            i.addEventListener("maptypechange",
            function(T) {
                if (T.mapType === BMAP_EARTH_MAP) {
                    e.hideLabelCanvas()
                } else {
                    e.showLabelCanvas();
                    if (T.mapType === BMAPGL_NORMAL_MAP) {
                        e.labelStyleParam = "pl"
                    } else {
                        if (T.mapType === BMAP_SATELLITE_MAP) {
                            e.labelStyleParam = "sl"
                        }
                    }
                    e._loadData()
                }
            });
            i.addEventListener("streetlayer_show",
            function(T) {
                if (this.isCanvasMap()) {
                    e.showLabelCanvas()
                }
            });
            i.addEventListener("streetlayer_hide",
            function(T) {
                if (this.isCanvasMap()) {
                    e.hideLabelCanvas()
                }
            });
            i.addEventListener("loadbizdata",
            function(hT) {
                var T = hT.data;
                e._biz.proecessBizData(T,
                function() {
                    e.updateLabel()
                })
            });
            i.addEventListener("unloadbizdata",
            function(T) {
                e._biz.clearBizData();
                e.updateLabel()
            });
            e.isDrawText = false;
            setTimeout(function() {
                if (!e.isDrawText) {
                    i.dispatchEvent(new bc("onmapwhitescreen"))
                }
            },
            10000)
        },
        getStyle: function() {
            return this._style
        },
        _getZoomUnits: function(e) {
            return Math.pow(2, 18 - e)
        },
        _createCacheForm: function(T, hX, hW, i) {
            var hV = this;
            var e = hV._cache;
            var hT = e.arrCache;
            var hY = this._getLabelId(T, hX, hW, i);
            var hU = {
                id: hY,
                updateLabelCounter: 0
            };
            hT.push(hU);
            hT[hY] = hU;
            return hU
        },
        _getLabelId: function(i, hT, T, e) {
            return "_" + i + "_" + hT + "_" + T + "_" + e + "_" + this.labelStyleParam
        },
        _getCache: function(i, hT, T, e) {
            return this._cache.arrCache[this._getLabelId(i, hT, T, e)]
        },
        _setCacheValue: function(hU, h7, h5, hT, h0) {
            var h2 = this;
            var e = h2._cache;
            var hW = e.arrCache;
            var hY = e.maxNum;
            var hV = e.delNum;
            var h6 = this._getLabelId(hU, h7, h5, hT);
            var h1 = hW[h6];
            if (h0) {
                h1.lb = h0
            }
            if (hW.length > hY) {
                var T = hW.splice(0, hV);
                for (var hZ = 0,
                hX = T.length; hZ < hX; hZ++) {
                    var h3 = T[hZ],
                    h4 = h3.id;
                    if (hW[h4].lb) {
                        hW[h4].lb = null
                    }
                    hW[h4] = null;
                    delete hW[h4]
                }
                T = null
            }
        },
        _loadData: function(h5) {
            var ir = this._map;
            if (!ir.isCanvasMap()) {
                return
            }
            var hY = ir.getCenterIn();
            var iq = d5.calcLoopCenterPoint(hY);
            var hX = this._tileType;
            var h0 = this._width / 2;
            var ic = this._height;
            var ie = ir.getZoom();
            var h9 = hX.getDataZoom(ie);
            var h2 = ir.getZoomUnits(ie);
            var h8 = h2 * h0;
            var ip = iq.lng - h8;
            var io = iq.lng + h8;
            var h6 = d5.isAddWidth(ip, io);
            h0 = h6 ? h0 * 1.5 : h0;
            var h7 = hX.getTileSize(ie);
            var hU = hX.getMercatorSize(ie, h9);
            var h1 = Math.floor(iq.lng / hU);
            var h3 = Math.floor(iq.lat / hU);
            var hV = [h1, h3, (iq.lng - h1 * hU) / hU * h7, (iq.lat - h3 * hU) / hU * h7];
            var ih = hV[0] - Math.ceil((h0 - hV[2]) / h7);
            var il = hV[1] - Math.ceil((ic / 2 - hV[3]) / h7);
            var ib = hV[0] + Math.ceil((h0 + hV[2]) / h7);
            var ii = hV[1] + Math.ceil((ic / 2 + hV[3]) / h7);
            ir.temp.isPermitSpotOver = false;
            var e = [];
            for (var ik = ih; ik < ib; ik++) {
                for (var ij = il; ij < ii; ij++) {
                    e.push([ik, ij, h9]);
                    var ia = "id_" + ik + "_" + ij + "_" + ie;
                    e[ia] = true
                }
            }
            e._zoom = h9;
            e = d5.calcLoopTiles(e, ie);
            e.sort((function(i) {
                return function(id, iu) {
                    return ((0.4 * Math.abs(id[0] - i[0]) + 0.6 * Math.abs(id[1] - i[1])) - (0.4 * Math.abs(iu[0] - i[0]) + 0.6 * Math.abs(iu[1] - i[1])))
                }
            })([hV[0], hV[1]]));
            var h4 = this._cache.arrCache;
            this._curViewLabels = [];
            var hT = "viewKey_" + Math.floor(hY.lng) + "_" + Math.floor(hY.lat) + "_" + ie;
            this.statRequestCount = 0;
            this.statResponseCount = 0;
            this._labelCount += e.length;
            var hZ = ie;
            for (var ik = 0,
            ig = e.length; ik < ig; ik++) {
                var h1 = e[ik][0];
                var h3 = e[ik][1];
                var T = e[ik][2];
                var hW = this._getLabelId(h1, h3, T, hZ);
                var im = h4[hW];
                if (!im) {
                    im = this._createCacheForm(h1, h3, T, hZ)
                }
                if (typeof im.lb === "undefined") {
                    im.lb = null;
                    this._loadLabelData(h1, h3, T, hZ, h7, hT);
                    this.statRequestCount++
                } else {
                    if (im.lb) {
                        this._curViewLabels.push(im.lb);
                        this._labelCount--
                    } else {
                        if (h5) {
                            this._loadLabelData(h1, h3, T, hZ, h7, hT)
                        }
                        im.updateLabelCounter++
                    }
                }
            }
            if (this._labelCount === 0) {
                this.updateLabel()
            }
            var it = this;
            if (it.errorTimer) {
                clearTimeout(it.errorTimer)
            }
            it.errorTimer = setTimeout(function() {
                if (it._labelCount !== 0) {
                    it._labelCount = 0;
                    it.updateLabel()
                }
                var iu = new bc("onloaddatatimeout");
                var iv = 0;
                var id = 0;
                var iw = 0;
                var i = 0;
                if (it.statRequestCount === it.statResponseCount) {
                    iv = 1
                } else {
                    id = 1
                }
                if (id === 1) {
                    i = it.statRequestCount - it.statResponseCount;
                    iw = it.statResponseCount
                }
                iu.noTimeoutCount = iv;
                iu.timeoutCount = id;
                iu.timeoutNoLoaded = i;
                iu.timeoutLoaded = iw;
                it._map.dispatchEvent(iu)
            },
            500)
        },
        clearLabel: function() {
            var e = this._width;
            var T = this._height;
            var i = this.ratio;
            this._labelCtx.clearRect(0, 0, e * i, T * i)
        },
        updateLabel: function() {
            var i = this._map;
            var e = i.getCenterIn();
            var hT = this._width;
            var hW = this._height;
            var hZ = i.getZoom();
            var hY = this._tileType.getTileSize(hZ);
            var hX = this._getZoomUnits(hZ);
            var T = this._labelCtx;
            this._labelCanvas.style.left = -i.offsetX + "px";
            this._labelCanvas.style.top = -i.offsetY + "px";
            var hV = this._curViewLabels;
            hV._centerX = e.lng;
            hV._centerY = e.lat;
            var hU = this._biz.bizLabels;
            this._computedLabel = this._labelStrategy.preComputeLabel(hV, hT, hW, hX, hY, hU);
            this._computedLabel._zoom = hZ;
            this.clearLabel();
            this._vectorDrawLib.drawIconAndText(T, this._computedLabel, hZ);
            this._addSpotData();
            i.temp.isPermitSpotOver = true;
            if (hV.length > 0) {
                this.isDrawText = true
            }
        },
        _loadLabelData: function(h2, h1, h0, T, h3, e) {
            var hV = h2.toString();
            var hT = h1.toString();
            var hX = "cbk_" + hV.replace("-", "_") + "_" + hT.replace("-", "__") + "_" + Math.floor(h0);
            var h7 = eB + "." + hX;
            var h6 = this._labelDataUrls;
            var hZ = Math.abs(h2 + h1) % h6.length;
            var ic = h6[hZ];
            if (window.offLineIPAddress) {
                ic = window.offLineIPAddress + "pvd/"
            }
            var i = this.labelStyleParam;
            var h5 = "?qt=vtile";
            var h8 = "";
            if (this._map.config.style !== "default") {
                h8 = "&styleId=1"
            }
            var h4 = "x={x}&y={y}&z={z}&udt={udt}&v={v}&styles={styles}" + h8 + "&textonly=1&textimg=1&scaler={scaler}&fn=" + encodeURIComponent(h7);
            var h9 = d5.calcLoopParam(h2, h0).col;
            var hY = this.ratio > 1 ? 2 : 1;
            var hW = h4.replace(/{x}/, h9).replace(/{y}/, h1).replace(/{z}/, Math.floor(h0)).replace(/{styles}/, i).replace(/{udt}/, this._udt).replace(/{v}/, this._version).replace(/{scaler}/, hY);
            var hU = ic + h5 + "&param=" + window.encodeURIComponent(gm(hW));
            var ib = this;
            var ia = ib._map;
            bp[hX] = function(id) {
                ib._vectorDrawLib.parseLabelData(id, h2, h1, h0, T, h3,
                function(ij) {
                    var ig = ia.getCenterIn();
                    var ik = ia.getZoom();
                    var im = "viewKey_" + Math.floor(ig.lng) + "_" + Math.floor(ig.lat) + "_" + ik;
                    ib._labelCount--;
                    var io = ib._getCache(h2, h1, h0, T).updateLabelCounter;
                    ib._labelCount -= io;
                    var ih = ib._curViewLabels;
                    if (im === e || (ib._labelCount < 0 && ik === h0)) {
                        ih.push(ij)
                    }
                    if (im === e) {
                        ib.statResponseCount++
                    }
                    if (ib._labelCount <= 0) {
                        var ie = (new Date()).getTime();
                        ib.updateLabel();
                        var ii = (new Date()).getTime();
                        var il = new bc("oncanvasmaploaded");
                        il.drawTime = ii - ie;
                        if (ib.statResponseCount === ib.statRequestCount) {
                            il.isAllLoadedDrawing = true
                        }
                        ia.dispatchEvent(il)
                    }
                    ib._setCacheValue(h2, h1, h0, T, ij);
                    delete bp[hX]
                })
            };
            ho.load(hU)
        },
        drawLabel: function(T, hT, h0, i, hY, hU, e, hV, hZ, hW) {
            var hX = this;
            if (!hX._computedLabel) {
                return
            }
            if (hX._computedLabel._zoom !== h0) {
                hX.clearLabel();
                return
            }
            hX._map.temp.isPermitSpotOver = false;
            hX.clearLabel();
            hX._vectorDrawLib.zoomingIconAndText(this._labelCtx, hX._computedLabel, T, hT, i, hY, hU, e, hV, hZ, hW)
        },
        _addSpotData: function() {
            this._spotData = [];
            var h0 = this._map.getZoom();
            for (var hV = 0,
            hU = this._computedLabel.length; hV < hU; hV++) {
                var hX = this._computedLabel[hV];
                if (!this.isClickableLabel(hX) || (hX.guidExt === 1 && hX.startScale > h0)) {
                    continue
                }
                var hW = [];
                hW[0] = (hX.minX - hX.maxX) / 2;
                hW[1] = (hX.minY - hX.maxY) / 2;
                hW[2] = (hX.maxX - hX.minX) / 2;
                hW[3] = (hX.maxY - hX.minY) / 2;
                var hT = null;
                if (hX.iconPos) {
                    hT = new hu(hX.iconPos.geoX, hX.iconPos.geoY)
                }
                var T = hX.name ? hX.name.replace("\\\\", "<br>") : "";
                if (hX.iconPos && hX.iconPos.iconType.indexOf("ditie") > -1 && this._map.getZoom() > 14) {
                    T = ""
                }
                var hZ = {
                    n: T,
                    pt: new hu(hX.geoX, hX.geoY),
                    userdata: {
                        iconPoint: hT,
                        uid: hX.guid,
                        name: T,
                        type: hX.iconPos ? hX.iconPos.iconType: "",
                        iconImg: hX.iconImg,
                        mapPoi: true,
                        adver_log: hX.adver_log || ""
                    },
                    bd: hW,
                    tag: "MAP_SPOT_INFO"
                };
                this._spotData.push(hZ)
            }
            var hY = new bc("onspotsdataready");
            hY.spots = this._spotData;
            this._map._spotDataOnCanvas = this._spotData;
            this._map.dispatchEvent(hY)
        },
        isClickableLabel: function(e) {
            if (e.isDel || (!e.guid && !e.name)) {
                return false
            }
            return true
        },
        getFilterImageData: function(T, hW) {
            var hX = T.data,
            hV = this._labelStrategy,
            hW = parseInt(hW);
            for (var hY = 0,
            hU = hX.length; hY < hU; hY += 4) {
                var e = hX[hY],
                hZ = hX[hY + 1],
                h0 = hX[hY + 2],
                h1 = hX[hY + 3];
                if (h1 === 0) {
                    continue
                }
                var hT = Math.round((e + hZ + h0) / 3);
                var h2 = hT - 90;
                h2 = h2 < 0 ? 0 : h2;
                if (hW === hV.RANK5) {
                    hX[hY] = 51 + h2 * 1.3;
                    hX[hY + 1] = 133 + h2 * 0.8;
                    hX[hY + 2] = 255
                }
            }
            return T
        },
        showLabelCanvas: function() {
            this._labelCanvas.style.visibility = ""
        },
        hideLabelCanvas: function() {
            this._labelCanvas.style.visibility = "hidden"
        }
    });
    var ca = 5;
    var dY = 4;
    var hs = 3;
    var fg = 2;
    var hM = 1;
    var d1 = 0;
    var hP = 3;
    var hi = 5;
    var J = {
        3 : {
            start: 3,
            base: 3
        },
        4 : {
            start: 4,
            base: 5
        },
        5 : {
            start: 4,
            base: 5
        },
        6 : {
            start: 6,
            base: 7
        },
        7 : {
            start: 6,
            base: 7
        },
        8 : {
            start: 8,
            base: 9
        },
        9 : {
            start: 8,
            base: 9
        },
        10 : {
            start: 10,
            base: 10
        },
        11 : {
            start: 11,
            base: 12
        },
        12 : {
            start: 11,
            base: 12
        },
        13 : {
            start: 11,
            base: 12
        },
        14 : {
            start: 14,
            base: 15
        },
        15 : {
            start: 14,
            base: 15
        },
        16 : {
            start: 16,
            base: 17
        },
        17 : {
            start: 16,
            base: 17
        },
        18 : {
            start: 18,
            base: 19
        },
        19 : {
            start: 18,
            base: 19
        },
        20 : {
            start: 18,
            base: 19
        },
        21 : {
            start: 18,
            base: 19
        }
    };
    function a1(hT) {
        this._canvas2dMapMgr = hT;
        var i = this.ratio = hT._map.config.ratio;
        this._featureStyle = null;
        this._map = hT._map;
        var T = fA();
        var e = "udt=" + T.udt + "&v=" + T.ver;
        this.sizeRatio = this.ratio > 1 ? 2 : 1;
        this._binaryCache = {};
        this._iconCache = {};
        this._initColorCanvas()
    }
    D.extend(a1.prototype, {
        _initColorCanvas: function() {
            var i = 256,
            T = U("canvas"),
            e = T.style;
            e.width = i + "px";
            e.height = i + "px";
            T.width = i;
            T.height = i;
            this._colorCvs = T;
            this._colorCtx = T.getContext("2d")
        },
        parseLabelData: function(i, hV, hU, hT, e, hY, hX) {
            if (!this._featureStyle) {
                this._featureStyle = this._canvas2dMapMgr.getStyle()
            }
            if (!i || !i[0]) {
                hX([]);
                return
            }
            var hW = this._map.getZoomUnits();
            var T = this;
            this.loadTextPng(i, hY, hV, hU, hT, e, hW, hX)
        },
        loadTextPng: function(ia, h1, hZ, hY, hW, i, hU, hT) {
            var h9 = this;
            var e = ia[5];
            var h8 = this._map;
            var h5 = h8.getZoom();
            var T = h8.getSize();
            var h6 = T.width;
            var h4 = T.height;
            var h7 = h8.getCenterIn();
            var hX = h7.lng;
            var hV = h7.lat;
            var h3 = hZ * h1 * hU;
            var h2 = (hY + 1) * h1 * hU;
            if (e) {
                var h0 = new Image();
                h0.onload = function() {
                    h9.calcIconAndTextInfo(ia, h0, h1, hZ, hY, hW, i, hU, h3, h2, hT);
                    delete this.onload
                };
                h0.src = e
            } else {
                setTimeout(function() {
                    h9.calcIconAndTextInfo(ia, null, h1, hZ, hY, hW, i, hU, h3, h2, hT)
                },
                1)
            }
        },
        calcIconAndTextInfo: function(ic, h3, h4, h2, hZ, hX, hT, hV, h6, h5, hU) {
            var ib = this;
            var ia = ib._featureStyle;
            var h0 = [];
            h0.x = h2;
            h0.y = hZ;
            h0.z = hX;
            var h1 = ib._canvas2dMapMgr,
            T = h2 * hV * h4,
            h9 = (hZ + 1) * hV * h4,
            hW = {
                tileLeft: T,
                tileTop: h9,
                zoomUnits: hV
            };
            var e = [];
            if (ic[0]) {
                for (var h7 = 0; h7 < ic[0].length; h7++) {
                    if (ic[0][h7][0] === hP) {
                        e.push(ic[0][h7])
                    }
                }
            }
            var hY = ic[2] || [];
            for (var h7 = 0; h7 < e.length; h7++) {
                this._getFixedLabelInfo(e[h7], h3, hT, hV, h4, h6, h5, h0)
            }
            var h8 = Math.pow(2, hT - hX);
            for (h7 = 0; h7 < hY.length; h7++) {
                this._getLineLabelInfo(hY[h7], h3, hX, hT, hV, h4, h6, h5, h8, h0)
            }
            hU(h0)
        },
        _getFixedLabelInfo: function(h3, h7, hU, hY, h8, ib, ia, id) {
            var h2 = h3[1];
            if (!h2) {
                return
            }
            var ig = this._map.getZoom();
            var ip = this._map.config.style;
            var iq = this._featureStyle;
            var hZ = hU;
            if (hZ === 9) {
                hZ = 8
            }
            for (var il = 0; il < h2.length; il++) {
                var ir = h2[il];
                var e = ir[0];
                var hT = em.getStyleFromCache(ip, e, "point", hZ, iq);
                var ik = em.getStyleFromCache(ip, e, "pointText", hZ, iq);
                if ((!ik || ik.length === 0) && (!hT || hT.length === 0)) {
                    if (hZ === 5) {
                        var hX = ir[1];
                        if (!hX) {
                            continue
                        }
                        for (var ih = 0; ih < hX.length; ih++) {
                            var ie = hX[ih][4];
                            if (ie && ie[7] === "北京") {
                                hT = em.getStyleFromCache(ip, e, "point", 6, iq);
                                ik = em.getStyleFromCache(ip, e, "pointText", 6, iq);
                                break
                            } else {
                                continue
                            }
                        }
                    } else {
                        continue
                    }
                }
                var hX = ir[1];
                if (!hX) {
                    continue
                }
                var im = null;
                var h0 = 1;
                var T = 0;
                var h6 = 0;
                if (hT && hT[0]) {
                    hT = hT[0];
                    im = hT.icon;
                    h0 = hT.zoom ? hT.zoom / 100 : 1
                } else {
                    hT = null
                }
                for (var ih = 0; ih < hX.length; ih++) {
                    var ie = hX[ih][4];
                    if (!ie) {
                        continue
                    }
                    var ij = ie[2];
                    if (!this._isVisible(ij, ig)) {
                        continue
                    }
                    var h1 = ie[12];
                    if (ik && ik.length > 0 && !h1) {
                        continue
                    }
                    var h5 = Math.round(ie[0] / 100);
                    var h4 = Math.round(ie[1] / 100);
                    var ii = {
                        lng: ib + h5,
                        lat: ia - (h8 * hY - h4)
                    };
                    var hW = h5 / hY;
                    var hV = h8 - h4 / hY;
                    var h9 = ie[7] || "";
                    var io = ie[5];
                    var ic = {
                        type: "fixed",
                        name: h9,
                        textImg: h7,
                        rank: ie[4],
                        baseX: hW,
                        baseY: hV,
                        iconPos: null,
                        textPos: null,
                        guid: ie[3] || "",
                        tracer: ij,
                        direction: io,
                        startScale: 3
                    };
                    if ((io !== dY && h1 || !h1) && im !== null) {
                        ic.iconPos = this._getIconPosition(im, h0, hW, hV, ii);
                        if (ic.iconPos) {
                            T = ic.iconPos.width;
                            h6 = ic.iconPos.height
                        }
                    }
                    if (T === 0) {
                        ic.direction = dY
                    }
                    if (h1) {
                        ic.textPos = this._getTextDrawData(ie, hW, hV, T, h6)
                    }
                    if (ic.textPos || ic.iconPos) {
                        id.push(ic)
                    }
                }
            }
        },
        _isVisible: function(e, i) {
            var hT;
            if (!this._binaryCache[e]) {
                hT = e.toString(2);
                if (hT.length < 8) {
                    hT = new Array(8 - hT.length + 1).join("0") + hT
                }
                this._binaryCache[e] = hT
            }
            hT = this._binaryCache[e];
            var T = J[i].start;
            return hT[i - T] === "1"
        },
        _getIconPosition: function(hX, hV, T, i, e) {
            var hT = this._map.config.style;
            var hY = bp["iconSetInfo" + hT][hX];
            if (!hY) {
                if (hX.charCodeAt(0) >= 48 && hX.charCodeAt(0) <= 57) {
                    hY = bp["iconSetInfo" + hT]["_" + hX]
                }
            }
            if (!hY) {
                return null
            }
            var hU = hY[0];
            var hW = hY[1];
            hU = hU * hV;
            hW = hW * hV;
            return {
                srcX: 0,
                srcY: 0,
                destX: T - hU / 2,
                destY: i - hW / 2,
                width: hU,
                height: hW,
                geoX: e.lng,
                geoY: e.lat,
                mcPt: e,
                iconType: hX
            }
        },
        _getTextDrawData: function(h4, h3, h2, hT, h0) {
            var h9 = h4[5];
            if (typeof h9 !== "number") {
                h9 = 0
            }
            var hY = this.ratio;
            var hX = hY / 2;
            hT *= hX;
            h0 *= hX;
            var hZ = h4[12];
            var hU = hZ.length;
            var ic = 0;
            var ib = 0;
            var h8 = [];
            var h7 = 0;
            var ia = 0;
            for (var h6 = 0; h6 < hU; h6++) {
                ia += Math.round(hZ[h6][3])
            }
            for (var h6 = 0; h6 < hU; h6++) {
                var hW = hZ[h6];
                var hV = hW[0];
                var i = hW[1];
                var T = hW[2];
                var e = hW[3];
                var id = 2 * hY;
                var h5 = 0;
                if (hT !== 0) {
                    h5 = 2 * hY
                }
                if (hT === 0) {
                    h9 = dY
                }
                switch (h9) {
                case hs:
                    var h1 = h2 - ia / 2 - id * (hU - 1) / 2;
                    ic = h3 - T - hT / 2 - h5;
                    ib = h1 + h7 + id * h6;
                    break;
                case hM:
                    var h1 = h2 - ia / 2 - id * (hU - 1) / 2;
                    ic = h3 + hT / 2 + h5;
                    ib = h1 + h7 + id * h6;
                    break;
                case fg:
                    var h1 = h2 - h0 / 2 - ia - id * (hU - 1) - id;
                    ic = h3 - T / 2;
                    ib = h1 + h7 + id * h6;
                    break;
                case d1:
                    var h1 = h2 + h0 / 2 + id / 2;
                    ic = h3 - T / 2;
                    ib = h1 + h7 + id * h6;
                    break;
                case dY:
                    var h1 = h2 - e / 2 - id * (hU - 1) / 2;
                    ic = h3 - T / 2;
                    ib = h1 + h7 + id * h6;
                    break
                }
                h7 += e;
                if (T > 0 && e > 0) {
                    h8.push({
                        srcX: hV,
                        srcY: i,
                        destX: ic,
                        destY: ib,
                        width: T,
                        height: e
                    })
                }
            }
            if (h8.length > 0) {
                return h8
            }
            return null
        },
        _getLineLabelInfo: function(h1, hT, hU, ih, iw, h8, ie, id, ig, h7) {
            if (h1.length !== 10) {
                return
            }
            var ij = this.ratio;
            var T = this.ratio;
            var ir = h1[7].length;
            var h9 = h1[1];
            var iu = h1[3];
            var iA = h1[8];
            var hX = h1[4];
            var e = 2;
            var hV = hX.slice(0, e);
            for (var ix = e; ix < hX.length; ix += e) {
                hV[ix] = hV[ix - e] + hX[ix];
                hV[ix + 1] = hV[ix - (e - 1)] + hX[ix + 1]
            }
            for (var ix = e; ix < hX.length; ix += e) {
                if (ix % (iu * e) === 0 || ix % (iu * e) === 1) {
                    continue
                }
                hV[ix] = hV[ix - e] + hX[ix] / ig;
                hV[ix + 1] = hV[ix - (e - 1)] + hX[ix + 1] / ig
            }
            for (var iz = 0; iz < ir; iz++) {
                var iv = h1[7][iz];
                if (!this._isVisible(iv, ih)) {
                    continue
                }
                var il = h1[6][iz];
                var h6 = iz * iu * e;
                hX = hV.slice(h6, h6 + iu * e);
                var ia = [];
                var ik = undefined;
                var ii = undefined;
                var h5 = undefined;
                var h4 = undefined;
                var iA = h1[9].slice(0);
                if (il) {
                    iA.reverse()
                }
                var ip;
                var im;
                for (var iy = 0; iy < iu; iy++) {
                    var h3 = h1[5][iu * iz + iy];
                    var iq = hX[iy * e] / 100;
                    var io = hX[iy * e + 1] / 100;
                    var h2 = iA[iy];
                    var hY = h2[0];
                    var h0 = h2[1];
                    var hW = h2[2];
                    var hZ = h2[3];
                    var ic;
                    var ib;
                    var iC;
                    var iB;
                    if (iy === 0) {
                        ip = iC = iq / iw;
                        im = h8 - io / iw;
                        iB = io / iw
                    } else {
                        iC = iq / iw;
                        iB = io / iw
                    }
                    var iE = ip + (iC - ip) * T - hW / 2;
                    var iD = im + (h8 - iB - im) * T - hZ / 2;
                    if (ik === undefined) {
                        ik = ip - hW / 2;
                        ii = im - hZ / 2;
                        h5 = ik + hW;
                        h4 = ii + hZ
                    } else {
                        if (iE < ik) {
                            ik = iE
                        }
                        if (iD < ii) {
                            ii = iD
                        }
                        if (iE + hW > h5) {
                            h5 = iE + hW
                        }
                        if (iD + hZ > h4) {
                            h4 = iD + hZ
                        }
                    }
                    ia.push({
                        angle: h3,
                        srcX: hY,
                        srcY: h0,
                        destX: iE,
                        destY: iD,
                        width: hW,
                        height: hZ
                    })
                }
                var it = {
                    type: "line",
                    textImg: hT,
                    rank: h9,
                    baseX: ip,
                    baseY: im,
                    arrWordPos: ia,
                    minXOriginal: ik,
                    minYOriginal: ii,
                    maxXOriginal: h5,
                    maxYOriginal: h4,
                    text: ""
                };
                h7.push(it)
            }
        },
        alterColor: function(hW, e, hV) {
            var T = this._colorCtx,
            i = this._canvas2dMapMgr;
            T.clearRect(0, 0, hW.width, hW.height);
            T.drawImage(e, hW.srcX, hW.srcY, hW.width, hW.height, 0, 0, hW.width, hW.height);
            var hU = T.getImageData(0, 0, hW.width, hW.height),
            hT = i.getFilterImageData(hU, hV);
            T.putImageData(hT, 0, 0)
        },
        drawIconAndText: function(h8, h7, e) {
            var hZ = this.ratio;
            var hX = this.sizeRatio / hZ;
            var h1 = 2 / hZ;
            var ik = this;
            for (var ib = 0,
            h9 = h7.length; ib < h9; ib++) {
                var h0 = h7[ib];
                if (h0.isDel == false) {
                    var hU = h0.baseDrawX;
                    var hT = h0.baseDrawY;
                    if (h0.type == "fixed") {
                        var hW = h0.iconPos,
                        ic = h0.textPos,
                        h5 = h0.textImg,
                        ig = h0.startScale;
                        if (hW && ig <= e) {
                            var T = this._iconCache[hW.iconType];
                            if (T) {
                                if (T.img) {
                                    h8.drawImage(T.img, 0, 0, T.img.width, T.img.height, Math.round(hU * hZ + (hW.drawX - hU) / h1), Math.round(hT * hZ + (hW.drawY - hT) / h1), hW.width / h1, hW.height / h1)
                                } else {
                                    T.drawLabels.push(h0)
                                }
                            } else {
                                if (!T) {
                                    this._iconCache[hW.iconType] = {
                                        img: null,
                                        drawLabels: [h0]
                                    };
                                    var im = new Image();
                                    im._iconName = hW.iconType;
                                    im.onload = function() {
                                        var iu = ik._iconCache[this._iconName];
                                        iu.img = this;
                                        this.onload = null;
                                        for (var ip = 0; ip < iu.drawLabels.length; ip++) {
                                            var ir = iu.drawLabels[ip];
                                            var iq = ir.baseDrawX;
                                            var io = ir.baseDrawY;
                                            var it = ir.iconPos;
                                            h8.drawImage(this, 0, 0, this.width, this.height, Math.round(iq * hZ + (it.drawX - iq) / h1), Math.round(io * hZ + (it.drawY - io) / h1), it.width / h1, it.height / h1)
                                        }
                                        iu.drawPos = []
                                    };
                                    im.src = e4.getIconSetPath(ik._map.config.style) + hW.iconType + ".png"
                                }
                            }
                        }
                        if (ic && h5 && ig <= e) {
                            for (var hY = 0; hY < ic.length; hY++) {
                                var h6 = ic[hY];
                                if (!h0._tempRank) {
                                    h8.drawImage(h5, h6.srcX, h6.srcY, h6.width, h6.height, Math.round(hU * hZ + (h6.drawX - hU) / hX), Math.round(hT * hZ + (h6.drawY - hT) / hX), h6.width / hX, h6.height / hX)
                                } else {
                                    this.alterColor(h6, h5, h0._tempRank);
                                    h8.drawImage(this._colorCvs, 0, 0, h6.width, h6.height, Math.round(hU * hZ + (h6.drawX - hU) / hX), Math.round(hT * hZ + (h6.drawY - hT) / hX), h6.width / hX, h6.height / hX)
                                }
                            }
                        }
                    } else {
                        var hV = h0.arrWordPos,
                        h5 = h0.textImg,
                        h4 = h0.tileX,
                        h2 = h0.tileY;
                        for (var ia = 0,
                        h3 = hV.length; ia < h3; ia++) {
                            var id = hV[ia];
                            var il = Math.round(h4 + id.destX);
                            var ij = Math.round(h2 + id.destY);
                            var ie = id.angle;
                            il = hU * hZ + il - hU;
                            ij = hT * hZ + ij - hT;
                            if (ie > 10 && ie < 350) {
                                h8.save();
                                var ii = Math.round(il + id.width / 2);
                                var ih = Math.round(ij + id.height / 2);
                                h8.translate(ii, ih);
                                h8.rotate( - ie / 180 * Math.PI);
                                h8.drawImage(h5, id.srcX, id.srcY, id.width, id.height, -Math.round(id.width / 2), -Math.round(id.height / 2), id.width / hX, id.height / hX);
                                h8.restore()
                            } else {
                                h8.drawImage(h5, id.srcX, id.srcY, id.width, id.height, il, ij, id.width / hX, id.height / hX)
                            }
                        }
                    }
                }
            }
        },
        isCollide: function(hV, h4, h3, e, hX, T, hZ) {
            for (var hU = 0,
            hT = T.length; hU < hT; hU++) {
                var hY = T[hU],
                hW = 1 / Math.pow(2, hZ + 1),
                h2 = hW * hY[3] / 2,
                h1 = hW * hY[4] / 2,
                h0 = hY[0];
                if (h0 != hV) {
                    if (! (h4 + e < hY[1] - h2 || h4 > hY[1] + hY[3] + h2 || h3 + hX < hY[2] - h1 || h3 > hY[2] + hY[4] + h1)) {
                        return true
                    }
                }
            }
            return false
        },
        zoomingIconAndText: function(ik, id, hT, ii, ij, iN, it, h1, iz, ir, ia) {
            var iO = this.ratio;
            var h2 = this.sizeRatio / iO;
            var iP = 2 / iO;
            var iZ = iO / 2;
            var iJ = ii.x;
            var iI = ii.y;
            var il = 2 * iO;
            if (ia !== 0) {
                iI += ir
            }
            var h5 = undefined,
            hY = undefined,
            hV = undefined,
            h0 = undefined,
            h9 = undefined;
            var iy = iN > 0 ? true: false;
            if (!iy) {
                h5 = [];
                var iC = 1 - it
            }
            for (var iV = 0,
            iT = id.length; iV < iT; iV++) {
                var iQ = id[iV];
                if (iQ.isDel == false) {
                    var i0 = iQ.baseDrawX;
                    var iX = iQ.baseDrawY;
                    ik.save();
                    ik.translate( - h1 * iO, -iz * iO);
                    if (iQ.isFadeout) {
                        if (!iy && iQ._schedule <= it && !iQ._isIgnore) {
                            ik.globalAlpha = iC;
                            iQ._schedule = it
                        } else {
                            iQ._isIgnore = true;
                            continue
                        }
                    }
                    if (iQ.type == "fixed") {
                        var im = iQ.iconPos,
                        iv = iQ.textPos,
                        hW = iQ.textImg,
                        io = iQ.startScale;
                        var T;
                        var iG = 0;
                        if (im) {
                            iG = il
                        }
                        if (im && !iQ.iconImg && this._iconCache[im.iconType]) {
                            T = this._iconCache[im.iconType].img
                        }
                        if (im && io <= ij && T) {
                            h0 = im.width;
                            h9 = im.height;
                            hY = (iJ + (i0 - iJ) * hT) * iO - h0 / 2 / iP;
                            hV = (iI + (iX - iI) * hT) * iO - h9 / 2 / iP + ia;
                            if (!iy && this.isCollide(iV, hY, hV, h0, h9, h5, iN)) {
                                iQ.isFadeout = true
                            }
                            ik.drawImage(T, im.srcX, im.srcY, T.width, T.height, Math.round(hY), Math.round(hV), h0 / iP, h9 / iP); ! iy && h5.push([iV, hY, hV, h0, h9])
                        }
                        if (iv && hW && io <= ij) {
                            var iu;
                            var iw;
                            var ic = 0;
                            var iq = 0;
                            if (im) {
                                ic = im.width;
                                iq = im.height
                            }
                            var iH = iv.length;
                            var h4 = 0;
                            var ix = 0;
                            for (var ie = 0; ie < iH; ie++) {
                                var iS = iv[ie];
                                ix += iS.height;
                                if (h4 < iS.width) {
                                    h4 = iS.width
                                }
                            }
                            ix += (ie - 1) * il;
                            if (!iy && this.isCollide(iV, hY, hV, h4, ix, h5, iN)) {
                                iQ.isFadeout = true
                            }
                            var iR = 0;
                            for (var ie = 0; ie < iH; ie++) {
                                var iS = iv[ie];
                                switch (iQ.direction) {
                                case hs:
                                    iu = -(ic / 2 / iP + iS.width + iG);
                                    iw = -ix / 2 + iR + il * ie;
                                    break;
                                case hM:
                                    iu = ic / 2 / iP + iG;
                                    iw = -ix / 2 + iR + il * ie;
                                    break;
                                case fg:
                                    iu = -iS.width / 2;
                                    iw = -iq / 2 / iP - ix + iR - il * (ie + 1);
                                    break;
                                case d1:
                                    iu = -iS.width / 2;
                                    iw = iq / 2 / iP + iR + il * (ie + 1);
                                    break;
                                case dY:
                                    iu = -iS.width / 2;
                                    iw = -ix / 2 + iR + il * ie;
                                    break
                                }
                                iR += iS.height;
                                hY = (iJ + (i0 - iJ) * hT) * iO + iu / h2;
                                hV = (iI + (iX - iI) * hT) * iO + iw / h2; + ia;
                                h0 = iS.width;
                                h9 = iS.height;
                                if (!iQ._tempRank) {
                                    ik.drawImage(hW, iS.srcX, iS.srcY, h0, h9, Math.round(hY), Math.round(hV), h0 / h2, h9 / h2)
                                } else {
                                    this.alterColor(iS, hW, iQ._tempRank);
                                    ik.drawImage(this._colorCvs, 0, 0, h0, h9, Math.round(hY), Math.round(hV), h0 / h2, h9 / h2)
                                } ! iy && h5.push([iV, hY, hV, h0, h9])
                            }
                        }
                    } else {
                        var ib = iQ.arrWordPos,
                        hW = iQ.textImg,
                        iY = iQ.tileX,
                        iW = iQ.tileY;
                        var h3 = ib[0];
                        var hZ = Math.round(iY + h3.destX);
                        var hX = Math.round(iW + h3.destY);
                        for (var iU = 0,
                        iF = ib.length; iU < iF; iU++) {
                            var iM = ib[iU];
                            var i2 = Math.round(iY + iM.destX);
                            var i1 = Math.round(iW + iM.destY);
                            var ih = iM.angle;
                            var iE = Math.round((iJ + (i0 - iJ) * hT) * iO - h3.width / 2 + i2 - hZ);
                            var iD = Math.round((iI + (iX - iI) * hT) * iO - h3.height / 2 + i1 - hX);
                            hY = iE;
                            hV = iD;
                            h0 = iM.width;
                            h9 = iM.height;
                            if (!iy && this.isCollide(iV, hY, hV, h0, h9, h5, iN)) {
                                iQ.isFadeout = true
                            }
                            if (ih > 10 && ih < 350) {
                                var iL = iE + iM.width / 2;
                                var iK = iD + iM.height / 2;
                                var hU = ih / 180 * Math.PI;
                                var ip = Math.cos(hU);
                                var h6 = Math.sin(hU);
                                var iB = ip;
                                var h7 = ip;
                                var iA = h6;
                                var h8 = -h6;
                                var ig = iL - iL * ip - iK * h6;
                                var e = iK + iL * h6 - iK * ip;
                                ik.save();
                                ik.transform(iB, h8, iA, h7, ig, e);
                                ik.drawImage(hW, iM.srcX, iM.srcY, h0, h9, hY, hV, h0 / h2, h9 / h2);
                                ik.restore()
                            } else {
                                ik.drawImage(hW, iM.srcX, iM.srcY, h0, h9, hY, hV, h0 / h2, h9 / h2)
                            } ! iy && h5.push([iV, hY, hV, h0, h9])
                        }
                    }
                    ik.restore()
                }
            }
        }
    });
    function gO(e) {
        this.initVars(e)
    }
    D.extend(gO.prototype, {
        initVars: function(e) {
            this._map = e._map;
            this._canvas2dMapMgr = e;
            this.base64Prefix = "data:image/png;base64,";
            this.bizData = null;
            this.objTextsPng = null;
            this.arrIconsPng = null;
            this.bizLabels = null
        },
        proecessBizData: function(hV, hZ) {
            var hX = this;
            this.bizData = hV;
            this.objTextsPng = null;
            this.arrIconsPng = null;
            var T = hV.textsPng;
            var h1 = hV.iconsPng;
            if (!T || !h1) {
                return
            }
            var hY = new Image();
            hY.onload = function() {
                hX.objTextsPng = this;
                hX.calcIconAndTextInfo(hZ);
                this.onload = null
            };
            hY.src = this.base64Prefix + T;
            var h0 = h1.length;
            var e = [];
            for (var hU = 0; hU < h0; hU++) {
                var hW = h1[hU];
                var hT = new Image(); (function(i) {
                    hT.onload = function() {
                        h0--;
                        e[i] = this;
                        if (h0 === 0) {
                            hX.arrIconsPng = e;
                            hX.calcIconAndTextInfo(hZ)
                        }
                        this.onload = null
                    }
                })(hU);
                hT.src = this.base64Prefix + hW
            }
        },
        calcIconAndTextInfo: function(h2) {
            if (this.objTextsPng && this.arrIconsPng) {
                var hY = this.bizData;
                var hW = hY.pois;
                var e = [];
                for (var hZ = 0,
                hV = hW.length; hZ < hV; hZ++) {
                    var hT = hW[hZ];
                    var hX = this.arrIconsPng[hT.iconPng];
                    var hU = hX.height / 2;
                    var h1 = {
                        type: "fixed",
                        name: "",
                        textImg: this.objTextsPng,
                        iconImg: hX,
                        rank: hT.rank,
                        iconPos: {
                            srcX: 0,
                            srcY: 0,
                            destX: -hX.width / 2,
                            destY: -hU / 2,
                            width: hX.width,
                            height: hU,
                            geoX: hT.x,
                            geoY: hT.y,
                            iconType: "vectorCustom"
                        },
                        textPos: this.calcTextPos(hT.pos, hX),
                        startScale: hT.from < 12 ? 12 : hT.from,
                        guid: hT.guid,
                        guidExt: 1,
                        adver_log: hT.adver_log || ""
                    };
                    var T = {
                        type: "fixed",
                        textDirLeft: "left",
                        name: "",
                        textImg: this.objTextsPng,
                        iconImg: hX,
                        rank: hT.rank,
                        iconPos: {
                            srcX: 0,
                            srcY: 0,
                            destX: -hX.width / 2,
                            destY: -hU / 2,
                            width: hX.width,
                            height: hU,
                            geoX: hT.x,
                            geoY: hT.y,
                            iconType: "vectorCustom"
                        },
                        textPos: this.calcTextPosLeft(hT.pos, hX),
                        startScale: hT.from < 12 ? 12 : hT.from,
                        guid: hT.guid,
                        guidExt: 1,
                        adver_log: hT.adver_log || ""
                    };
                    var h0 = [h1, T];
                    e.push(h0)
                }
                this.bizLabels = e;
                h2 && h2()
            }
        },
        calcTextPos: function(hW, T) {
            var i = [];
            var hV = hW.length / 4;
            var hU = T.width / 2;
            if (hV === 1) {
                var hT = {
                    srcX: hW[0],
                    srcY: hW[1],
                    destX: hU,
                    destY: -hW[3] / 2,
                    width: hW[2],
                    height: hW[3]
                };
                i.push(hT)
            } else {
                var hT = {
                    srcX: hW[0],
                    srcY: hW[1],
                    destX: hU,
                    destY: -hW[3],
                    width: hW[2],
                    height: hW[3]
                };
                var e = {
                    srcX: hW[4],
                    srcY: hW[5],
                    destX: hU,
                    destY: 0,
                    width: hW[6],
                    height: hW[7]
                };
                i.push(hT);
                i.push(e)
            }
            return i
        },
        calcTextPosLeft: function(hW, T) {
            var i = [];
            var hV = hW.length / 4;
            var hU = T.width / 2;
            if (hV === 1) {
                var hT = {
                    srcX: hW[0],
                    srcY: hW[1],
                    destX: -hU - hW[2],
                    destY: -hW[3] / 2,
                    width: hW[2],
                    height: hW[3]
                };
                i.push(hT)
            } else {
                var hT = {
                    srcX: hW[0],
                    srcY: hW[1],
                    destX: -hU - hW[2],
                    destY: -hW[3],
                    width: hW[2],
                    height: hW[3]
                };
                var e = {
                    srcX: hW[4],
                    srcY: hW[5],
                    destX: -hU - hW[2],
                    destY: 0,
                    width: hW[6],
                    height: hW[7]
                };
                i.push(hT);
                i.push(e)
            }
            return i
        },
        clearBizData: function() {
            this.bizData = null;
            this.bizLabels = null
        }
    });
    function c8() {}
    D.extend(c8.prototype, {
        centerAndZoomIn: function(T, hZ, h0) {
            h0 = h0 || {};
            if (!this.loaded) {
                this.firstTileLoad = false
            }
            hZ = this._getProperZoom(hZ).zoom;
            if (h0.noAnimation !== true && this.loaded) {
                var hV = this._ifUseAnimation(T, hZ);
                if (hV) {
                    this.flyToIn(T, hZ, h0);
                    return
                }
            }
            var hX = this;
            if (!T && !hZ) {
                return
            }
            this._stopAllAnimations();
            if (T && !T.equals(this.centerPoint)) {
                this.fire(new bc("oncenter_changed"))
            }
            if (hZ && hZ !== this.zoomLevel) {
                this.fire(new bc("onzoom_changed"))
            }
            T = T || this.centerPoint;
            hZ = hZ || this.zoomLevel;
            hZ = this._getProperZoom(hZ).zoom;
            if (this.mapType === BMAP_EARTH_MAP) {
                if (!this._earth) {
                    this.mapType = BMAPGL_NORMAL_MAP;
                    this.temp.originMapType = BMAP_EARTH_MAP;
                    function hY() {
                        hX._earth = new bp.Earth(hX, {
                            showRealSunlight: hX.config.showRealSunlight,
                            showMilkyway: hX.config.showMilkyway,
                            earthBackground: hX.config.earthBackground
                        });
                        hX._proxyEarthEvents();
                        hX._changeEarthMapType(BMAP_EARTH_MAP);
                        D.extend(hX, bp.EarthView.prototype);
                        delete hX.temp.originMapType
                    }
                    eb.load("earth",
                    function() {
                        if (bp["FeatureStyle" + hX.config.style]) {
                            hY()
                        } else {
                            hX.loadMapStyleFiles(function() {
                                hY()
                            })
                        }
                    })
                }
            }
            this.lastLevel = this.zoomLevel || hZ;
            this.zoomLevel = hZ;
            var hW = new bc("onload");
            hW.point = T;
            hW.zoom = hZ;
            this.centerPoint = new hu(T.lng, T.lat);
            this.defaultZoomLevel = this.defaultZoomLevel || this.zoomLevel;
            this.defaultCenter = this.defaultCenter || this.centerPoint;
            if (this.mapType !== BMAP_EARTH_MAP) {
                this.centerPoint = this.restrictCenter(this.centerPoint)
            }
            if (!this.loaded && !(this.temp.originMapType === BMAP_EARTH_MAP)) {
                var i = this.config.defaultMaxBounds;
                var hU = new c6(i, "baidu", this.mapType);
                var hT = new cS({
                    mapType: this.mapType,
                    copyright: hU,
                    dataType: gu,
                    customLayer: false,
                    baseLayer: true,
                    tileTypeName: "na"
                });
                hT._isInnerLayer = true;
                this.addTileLayer(hT);
                if (this.mapType === BMAP_SATELLITE_MAP && this._isHybridShow === true) {
                    this._addHybirdMap()
                }
                this.baseLayerAdded = true;
                this.on("zoom_changed",
                function() {
                    if (this._heading === 0) {
                        return
                    }
                    if (this.getZoom() < 7 && this.config.restrictCenter === true) {
                        hX.resetHeading()
                    }
                })
            }
            this.loaded = true;
            this.dispatchEvent(hW);
            h0.callback && h0.callback()
        },
        _ifUseAnimation: function(hT, hY) {
            var hX = this.getSize();
            var T = {
                zoom: this.zoomLevel
            };
            var h0 = {
                zoom: hY
            };
            var hZ = this.pointToPixelIn(this.centerPoint);
            var hU = this.pointToPixelIn(hT, T);
            var hW = this.pointToPixelIn(this.centerPoint, h0);
            var h2 = this.pointToPixelIn(hT, h0);
            var hV = Math.abs(hZ.x - hU.x);
            var i = Math.abs(hZ.y - hU.y);
            var e = Math.abs(hW.x - h2.x);
            var h1 = Math.abs(hW.y - h2.y);
            if ((hV > hX.width || i > hX.height) && (e > hX.width || h1 > hX.height)) {
                return false
            }
            return true
        },
        _setPlatformPosition: function(h0, hZ, h2) {
            h2 = h2 || {};
            if (h0 === 0 && hZ === 0 && !h2.point) {
                return
            }
            if (isNaN(h2.initMapOffsetX)) {
                h2.initMapOffsetX = this.offsetX
            }
            if (isNaN(h2.initMapOffsetY)) {
                h2.initMapOffsetY = this.offsetY
            }
            var hW = dL(this._heading);
            if (this._tilt > 0) {
                hZ = hZ / Math.cos(dL(this._tilt))
            }
            var h1 = h0 * Math.cos(hW) + hZ * Math.sin(hW);
            var hY = -h0 * Math.sin(hW) + hZ * Math.cos(hW);
            h1 = h1 + h2.initMapOffsetX;
            hY = hY + h2.initMapOffsetY;
            if (h2.point) {
                var i = this.restrictCenter(h2.point);
                if (!i.equals(this.centerPoint)) {
                    this.centerPoint = i.clone();
                    this.fire(new bc("oncenter_changed"))
                }
            } else {
                var hT = this.offsetX - h1;
                var e = this.offsetY - hY;
                var hX = this.centerPoint.lng;
                var hV = this.centerPoint.lat;
                var hU = new hu(hX, hV);
                var T = this.getZoomUnits();
                this.centerPoint = this.restrictCenter(new hu(hU.lng + hT * T, hU.lat - e * T), T);
                this.fire(new bc("oncenter_changed"))
            }
            this.offsetX = h1;
            this.offsetY = hY;
            this.dispatchEvent(new bc("onmoving"))
        },
        restrictCenter: function(hT, hU) {
            if (this.config.restrictCenter === false) {
                return hT
            }
            hU = hU || this.getZoomUnits();
            var T = this.pixelToPointIn(new ek(0, 0), {
                center: hT
            });
            var i = this.pixelToPointIn(new ek(0, this.height), {
                center: hT
            });
            if (this.zoomLevel < 5) {
                if (T.lat > c9.MAX_LAT && i.lat < c9.MIN_LAT) {
                    var hV = c9.MAX_LAT - hT.lat;
                    var e = hT.lat - c9.MIN_LAT;
                    var hX;
                    if (hV < e) {
                        hX = hV / (this.height / 2)
                    } else {
                        hX = e / (this.height / 2)
                    }
                    var hW = 18 - eD(hX);
                    this.zoomLevel = hW;
                    return hT
                }
            }
            if (T.lat > c9.MAX_LAT) {
                hT.lat = c9.MAX_LAT - this.height / 2 * hU
            } else {
                if (i.lat < c9.MIN_LAT) {
                    hT.lat = c9.MIN_LAT + this.height / 2 * hU
                }
            }
            return hT
        },
        zoomTo: function(e, h4, h5) {
            var h0 = b7[this.mapType];
            if (!h0) {
                return
            }
            var hZ = this._getProperZoom(e);
            e = hZ.zoom;
            if (this.zoomLevel === e) {
                h5.callback && h5.callback();
                return
            }
            var hV = e;
            this.lastLevel = this.zoomLevel;
            h5 = h5 || {};
            if (this.zoomEventStatus === "idle") {
                this.fire(new bc("onzoomstart"));
                this.zoomEventStatus = "zooming"
            }
            if (!h4 && (this.getInfoWindow() && this.temp.infoWin && this.temp.infoWin.isOpen())) {
                h4 = this.getInfoWindow().getPoint()
            }
            var T = null;
            if (h5.fixPixel) {
                T = h5.fixPixel
            } else {
                if (h4) {
                    T = this.pointToPixelIn(h4, {
                        useRound: false
                    })
                }
            }
            var hW = this.pixelToPointIn(T);
            var hX = this.centerPoint.clone();
            this.fixPoint = h4;
            this.fixPixel = T;
            this.fixCenter = hX;
            this.mousePosMCPoint = hW;
            if (h5.noAnimation) {
                e = hZ.zoom;
                this.zoomLevel = e;
                this.fire(new bc("onzoom_changed"));
                var hU = this.getCurrentMaxTilt();
                if (this._tilt > hU) {
                    this._tilt = hU
                }
                if (h4) {
                    if (this._heading % 360 !== 0 || this._tilt > 0) {
                        var i = this._webglMapCamera.fromScreenPixelToMC(T.x, T.y, {
                            center: hX,
                            zoom: this.zoomLevel
                        });
                        if (i) {
                            var h1 = i.sub(hW);
                            var hT = hX.sub(h1);
                            this.centerPoint = this.restrictCenter(hT)
                        }
                    } else {
                        var hY = this.getZoomUnits();
                        var hT = new hu(h4.lng - hY * (T.x - this.width / 2), h4.lat + hY * (T.y - this.height / 2));
                        this.centerPoint = this.restrictCenter(hT, hY)
                    }
                    this.fire(new bc("oncenter_changed"))
                }
                this._checkFireZoomend();
                h5.callback && h5.callback();
                return
            }
            this._animationInfo.zoom = {
                current: this.zoomLevel,
                diff: e - this.zoomLevel,
                target: e
            };
            var h2 = this;
            h2._checkFireZoomend();
            var h3 = this._tilt;
            if (this.fixPoint || h3 > c9.MAX_DRAG_TILT_L2) {
                h5.renderCallback = function() {
                    var h9 = h2.getCurrentMaxTilt();
                    if (h2._tilt > h9) {
                        h2._tilt = h9
                    }
                    var ia = h2.fixPixel;
                    if (!h2.fixPixel || !h2.fixPoint) {
                        return
                    }
                    var h6 = h2.fixPixel;
                    var ih = h2.fixPoint;
                    var id = h2.fixCenter;
                    var ib = h2.mousePosMCPoint;
                    if (h2._heading % 360 !== 0 || h2._tilt > 0) {
                        var h7 = h2._webglMapCamera.fromScreenPixelToMC(h6.x, h6.y, {
                            center: id,
                            zoom: h2.zoomLevel,
                            tilt: h2._tilt
                        });
                        if (h7) {
                            var ig = h7.sub(ib);
                            var h8 = id.sub(ig);
                            h2.centerPoint = h2.restrictCenter(h8)
                        }
                    } else {
                        var ic = h6;
                        var ie = h2.getZoomUnits();
                        var h8 = new hu(ih.lng - ie * (ic.x - h2.width / 2), ih.lat + ie * (ic.y - h2.height / 2));
                        h2.centerPoint = h2.restrictCenter(h8, ie)
                    }
                    h2.fire(new bc("oncenter_changed"))
                }
            }
            if (h5.fromMouseWheel === true) {
                this._startInfiniteZoomAnimation(h5);
                h5.callback && h5.callback();
                return
            }
            this._startAnimation(h5)
        },
        _checkFireZoomend: function() {
            var e = this;
            if (e.fireZoomendTimer) {
                clearTimeout(e.fireZoomendTimer)
            }
            e.fireZoomendTimer = setTimeout(function() {
                if (e.zoomEventStatus === "zooming") {
                    e.fire(new bc("onzoomend"));
                    e.zoomEventStatus = "idle"
                }
                e.fireZoomendTimer = null
            },
            150)
        },
        deepZoomMedia: function(e) {
            var i = this;
            if (!i.temp.isStdCtrlBusy) {
                i.temp.isStdCtrlBusy = true;
                i.deepZoomTo(i.zoomLevel + e);
                setTimeout(function() {
                    i.temp.isStdCtrlBusy = false
                },
                400)
            }
        },
        deepZoomTo: function(e) {
            this.zoomTo(e)
        },
        flyToIn: function(T, ip, h8) {
            h8 = h8 || {};
            var hU = this._getProperZoom(ip);
            ip = hU.zoom;
            if (this.centerPoint.equals(T) && this.zoomLevel === ip && typeof h8.heading !== "number" && typeof h8.tilt !== "number") {
                return
            }
            var e = this.getHeading() % 360;
            var h0 = this.getTilt();
            var h6 = 0;
            var ia = 0;
            var h3 = this.getBounds().containsPoint(T);
            if (typeof h8.heading === "number") {
                h6 = h8.heading
            } else {
                if (h3) {
                    h6 = e
                }
            }
            if (typeof h8.tilt === "number") {
                ia = h8.tilt
            } else {
                if (h3) {
                    ia = h0
                }
            }
            this._heading = e;
            var il = h6 - e;
            var ih = ia - h0;
            var h4 = this;
            var hW = this.zoomLevel;
            var hX = 1.42;
            var ic = this.zoomScale(ip - hW);
            var ir = this.getZoomUnits();
            var h2 = this.centerPoint.div(ir);
            var it = T.div(ir);
            var ik = this.worldSize();
            var ig = hX;
            var ie = Math.max(this.width, this.height);
            var id = ie / ic;
            var h1 = it.sub(h2).mag();
            var i = ig * ig;
            function io(iv) {
                var iu = (id * id - ie * ie + (iv ? -1 : 1) * i * i * h1 * h1) / (2 * (iv ? id: ie) * i * h1);
                return Math.log(Math.sqrt(iu * iu + 1) - iu)
            }
            function hT(iu) {
                return (Math.exp(iu) - Math.exp( - iu)) / 2
            }
            function hY(iu) {
                return (Math.exp(iu) + Math.exp( - iu)) / 2
            }
            function h7(iu) {
                return hT(iu) / hY(iu)
            }
            var hZ = io(0);
            var ii = function(iu) {
                return (hY(hZ) / hY(hZ + ig * iu))
            };
            var ij = function(iu) {
                return ie * ((hY(hZ) * h7(hZ + ig * iu) - hT(hZ)) / i) / h1
            };
            var hV = (io(1) - hZ) / ig;
            if (Math.abs(h1) < 0.000001 || hV === Infinity || isNaN(hV)) {
                if (Math.abs(ie - id) < 0.000001) {
                    this._animationInfo.zoom = {
                        current: this.zoomLevel,
                        diff: ip - this.zoomLevel
                    };
                    this._animationInfo.center = {
                        current: this.centerPoint,
                        diff: T.sub(this.centerPoint)
                    };
                    this._animationInfo.heading = {
                        current: e,
                        diff: h6 - e
                    };
                    this._animationInfo.tilt = {
                        current: h0,
                        diff: ia - h0
                    };
                    this.setLock(true);
                    this._startAnimation({
                        callback: function(iu) {
                            h4.setLock(false);
                            if (h8.callback) {
                                h8.callback(iu)
                            }
                        },
                        duration: h8.duration
                    });
                    return
                }
                var iq = id < ie ? -1 : 1;
                hV = Math.abs(Math.log(id / ie)) / ig;
                ij = function() {
                    return 0
                };
                ii = function(iu) {
                    return Math.exp(iq * ig * iu)
                }
            }
            var im = 1.7;
            if (hV < 0.3) {
                im = 0.8
            } else {
                if (hV > 5) {
                    im = (hV - 5) / 2 + im
                }
            }
            var h9 = h8.duration || 1000 * hV / im;
            if (isNaN(h9)) {
                var ib = {};
                for (var h5 in h8) {
                    ib[h5] = h8[h5];
                    ib.noAnimation = true
                }
                this.centerAndZoomIn(T, ip, ib);
                return
            }
            this.fire(new bc("onmovestart"));
            this.fire(new bc("onzoomstart"));
            this.setLock(true);
            this._startAnimation({
                duration: h9,
                renderCallback: function(iu, iv) {
                    var iw = iu * hV;
                    var iz = ij(iw);
                    var iy = hW + h4.scaleZoom(1 / ii(iw));
                    if (iy < h4.getMinZoom()) {
                        iy = h4.getMinZoom()
                    }
                    if (iy > h4.getMaxZoom()) {
                        iy = h4.getMaxZoom()
                    }
                    if (iy !== h4.zoomLevel) {
                        h4.zoomLevel = iy;
                        h4.fire(new bc("onzoom_changed"))
                    }
                    h4.centerPoint = h2.add(it.sub(h2).mult(iz)).mult(ir);
                    h4.fire(new bc("oncenter_changed"));
                    if (typeof h6 === "number") {
                        var ix = iu / 0.7;
                        if (ix > 1) {
                            ix = 1
                        }
                        h4.setHeading(e + il * iu, {
                            noAnimation: true
                        })
                    }
                    if (typeof ia === "number") {
                        h4.setTilt(h0 + ih * iu, {
                            noAnimation: true
                        })
                    }
                },
                callback: function(iu, iv) {
                    h4.setLock(false);
                    if (iv && iv.stop === true) {
                        h4.fire(new bc("onmoveend"));
                        h4.fire(new bc("onzoomend"));
                        h8.callback && h8.callback(iu);
                        return
                    }
                    if (ip !== h4.zoomLevel) {
                        h4.zoomLevel = ip;
                        h4.fire(new bc("onzoom_changed"))
                    }
                    h4.fire(new bc("onmoveend"));
                    h4.fire(new bc("onzoomend"));
                    h8.callback && h8.callback(iu)
                }
            })
        },
        zoomScale: function(e) {
            return Math.pow(2, e)
        },
        scaleZoom: function(e) {
            return Math.log(e) / Math.LN2
        },
        panToIn: function(i, T) {
            T = T || {};
            if (!i || i.equals(this.centerPoint)) {
                T.callback && T.callback();
                return
            }
            var hT = this.pointToPixelIn(i);
            var e = Math.round(this.width / 2);
            var hV = Math.round(this.height / 2);
            var hU = this._ifUseAnimation(i, this.zoomLevel);
            if (T.noAnimation === true || hU === false) {
                this._stopAllAnimations();
                this._panToIn(e - hT.x, hV - hT.y, i);
                T.callback && T.callback();
                return
            }
            this.flyToIn(i, this.zoomLevel, T)
        },
        _panToIn: function(i, e, hT) {
            var T = this.temp;
            if (T.operating === true) {
                return
            }
            if (T.dragAni) {
                T.dragAni.stop(false, {
                    readyToMove: true
                });
                T.dragAni = null
            }
            this.dispatchEvent(new bc("onmovestart"));
            this._setPlatformPosition(i, e, {
                point: hT
            });
            this.dispatchEvent(new bc("onmoveend"))
        },
        _stopAllAnimations: function(e) {
            e = e || {};
            if (this._ani) {
                this._ani.stop( !! e.goToEnd, {
                    stopCurrentAnimation: e.stopCurrentAnimation
                });
                this._ani = null
            }
            if (this._infiniteAni) {
                this._infiniteAni.stop();
                this._infiniteAni = null
            }
        },
        panBy: function(i, e, T) {
            i = Math.round(i) || 0;
            e = Math.round(e) || 0;
            T = T || {};
            if (Math.abs(i) <= this.width && Math.abs(e) <= this.height && T.noAnimation !== true) {
                this._panBy(i, e, T)
            } else {
                this._panToIn(i, e, T.point);
                T.callback && T.callback()
            }
        },
        _panBy: function(i, e, hU) {
            if (this.temp.operating === true) {
                return
            }
            hU = hU || {};
            this.dispatchEvent(new bc("onmovestart"));
            var hT = this;
            var T = hT.temp;
            T.pl = hT.offsetX;
            T.pt = hT.offsetY;
            if (T.tlPan) {
                T.tlPan.cancel()
            }
            if (T.dragAni) {
                T.dragAni.stop(false, {
                    readyToMove: true
                });
                T.dragAni = null
            }
            T.tlPan = new p({
                fps: hU.fps || hT.config.fps,
                duration: hU.duration || hT.config.actionDuration,
                transition: hU.transition || co.easeInOutQuad,
                render: function(hV) {
                    this.terminative = hT.temp.operating;
                    if (hT.temp.operating) {
                        return
                    }
                    hT._setPlatformPosition(i * hV, e * hV, {
                        initMapOffsetX: T.pl,
                        initMapOffsetY: T.pt
                    })
                },
                finish: function(hV) {
                    hT.dispatchEvent(new bc("onmoveend"));
                    hT.temp.tlPan = false;
                    if (hT.temp.stopArrow === true) {
                        hT.temp.stopArrow = false;
                        if (hT.temp.arrow !== 0) {
                            hT._arrow()
                        }
                    }
                }
            })
        },
        _startAnimation: function(i) {
            var hU = this._animationInfo;
            var T = this;
            i = i || {};
            if (T._ani) {
                T._ani.stop( !! i.goToEnd, {
                    stopCurrentAnimation: i.stopCurrentAnimation
                })
            }
            if (T._infiniteAni) {
                T._infiniteAni.stop();
                T._infiniteAni = null
            }
            var hV = i.duration || 500;
            var hW = i.transition || co.ease;
            var e = new bc("onanimation_start");
            this.fire(e);
            if (i.unstopable) {
                hU = this._animationInfoUnstopable
            }
            var hT = new p({
                duration: hV,
                transition: hW,
                render: function(hZ, hY) {
                    for (var hX in hU) {
                        if (!hU.hasOwnProperty(hX)) {
                            continue
                        }
                        var h1 = hU[hX].current;
                        var h0 = hU[hX].diff;
                        T._setValueTick(hX, h1, h0, hZ)
                    }
                    if (i.renderCallback) {
                        i.renderCallback(hZ, hY)
                    }
                },
                finish: function(hX) {
                    T.fire(new bc("onanimation_end"));
                    if (i.unstopable) {
                        T._animationInfoUnstopable = {};
                        T._unstopableAni = null
                    } else {
                        T._ani = null;
                        T._animationInfo = {}
                    }
                    if (i.mapNeedCbk) {
                        i.mapNeedCbk()
                    }
                    if (i.callback) {
                        i.callback(hX)
                    }
                },
                onStop: function(hX) {
                    hX = hX || {};
                    T.fire(new bc("onanimation_end"));
                    if (hX.stopCurrentAnimation) {
                        T._animationInfo = {}
                    }
                    T._ani = null;
                    if (i.mapNeedCbk) {
                        i.mapNeedCbk()
                    }
                    if (i.callback) {
                        i.callback(null, {
                            stop: true
                        })
                    }
                }
            });
            if (i.unstopable) {
                T._unstopableAni = hT
            } else {
                T._ani = hT
            }
        },
        _startInfiniteZoomAnimation: function(e) {
            var i = this;
            if (i._ani) {
                i._ani.stop( !! e.goToEnd, {
                    stopCurrentAnimation: e.stopCurrentAnimation
                })
            }
            if (i._infiniteAni) {
                return
            }
            this.fire(new bc("onanimation_start"));
            i._infiniteAni = new p({
                duration: 10000,
                transition: co.linear,
                render: function() {
                    var T = i._animationInfo.zoom;
                    if (Math.abs(T.current - T.target) < 0.001) {
                        i._setValue("zoom", T.target);
                        i._infiniteAni.stop();
                        return
                    }
                    T.current += (T.target - T.current) * 0.35;
                    i._setValue("zoom", T.current);
                    if (e.renderCallback) {
                        e.renderCallback()
                    }
                },
                finish: function() {
                    i._infiniteAni = null;
                    i._animationInfo = {};
                    i.fire(new bc("onanimation_end"));
                    if (e.callback) {
                        e.callback()
                    }
                },
                onStop: function() {
                    i._infiniteAni = null;
                    i._animationInfo = {};
                    i.fire(new bc("onanimation_end"));
                    if (e.callback) {
                        e.callback()
                    }
                }
            })
        },
        _setValue: function(e, T) {
            if (e === "zoom") {
                this._preZoomLevel = this.zoomLevel;
                var i = this._getProperZoom(T);
                T = i.zoom;
                if (T !== this.zoomLevel) {
                    this.zoomLevel = T;
                    if (T < 5) {
                        this.restrictCenter(this.centerPoint)
                    }
                    this.fire(new bc("on" + e + "_changed"))
                }
                return
            } else {
                if (e === "center") {
                    this.centerPoint = T
                }
            }
            this["_" + e] = T;
            this.fire(new bc("on" + e + "_changed"))
        },
        _setValueTick: function(e, hU, hT, i) {
            if (e === "center") {
                var T = new hu(hU.lng + hT.lng * i, hU.lat + hT.lat * i);
                this._setValue(e, T);
                return
            }
            if (e === "zoom") {
                this._setValue(e, Math.pow(hU, 1 - i) * Math.pow(hU + hT, i));
                return
            }
            this._setValue(e, hU + hT * i)
        },
        setHeading: function(hT, i) {
            i = i || {};
            if (hT === this._heading) {
                i.callback && i.callback();
                return
            }
            var T = f0(this._heading, 360);
            var e = f0(hT, 360);
            if (e === T) {
                this._heading = hT;
                i.callback && i.callback();
                return
            }
            if (i.noAnimation) {
                this._setValue("heading", hT);
                i.callback && i.callback();
                return
            }
            if (i.unstopable) {
                this._animationInfoUnstopable.heading = {
                    current: this._heading,
                    diff: hT - this._heading
                }
            } else {
                this._animationInfo.heading = {
                    current: this._heading,
                    diff: hT - this._heading
                }
            }
            this._startAnimation(i)
        },
        resetHeading: function(e) {
            var i = this._heading;
            while (i < 0) {
                i += 360
            }
            i = i % 360;
            if (i > 180) {
                i -= 360
            }
            this._heading = i;
            e = e || {};
            e.unstopable = true;
            this.setHeading(0, e)
        },
        getHeading: function() {
            return this._heading
        },
        setTilt: function(e, i) {
            i = i || {};
            if (e === this._tilt) {
                i.callback && i.callback();
                return
            }
            if (e > c9.MAX_TILT) {
                e = c9.MAX_TILT
            }
            if (e < c9.MIN_TILT) {
                e = c9.MIN_TILT
            }
            if (i && i.noAnimation) {
                this._setValue("tilt", e);
                i.callback && i.callback();
                return
            }
            this._animationInfo.tilt = {
                current: this._tilt,
                diff: e - this._tilt
            };
            this._startAnimation(i)
        },
        getTilt: function() {
            return this._tilt
        },
        getCenterIn: function() {
            return this.centerPoint
        },
        getZoom: function() {
            return this.zoomLevel
        },
        getCameraPosition: function(T) {
            T = T || {};
            var e = T.center || this.centerPoint;
            var hT = T.zoom || this.zoomLevel;
            var hW = typeof T.heading === "number" ? T.heading: this._heading;
            var i = typeof T.tilt === "number" ? T.tilt: this._tilt;
            var hV = this._webglMapCamera.generateMVMatrix(e, hT, hW, i);
            var hU = mat4.create(Float32Array);
            mat4.invert(hU, hV);
            return this._webglMapCamera.getPosition(hU)
        }
    });
    function fP(i) {
        this._jobQueue = [];
        this._idleOnlyJobQueue = [];
        var e = this;
        this.isIdle = true;
        i.on("updateframe",
        function(hT) {
            var T = 12 - hT.frameTime;
            T = T < 1 ? 1 : T;
            e.isIdle = false;
            if (e.idleWorkTimer) {
                clearInterval(e.idleWorkTimer);
                e.idleWorkTimer = null
            }
            e.runJobs(T)
        });
        this._idleWorkerTicker = (function(T) {
            return function() {
                if (T.isIdle) {
                    T.runJobs();
                    T.runIdleOnlyJobs()
                }
            }
        })(this);
        i.on("mapglidle",
        function() {
            e.isIdle = true;
            e.runJobs();
            e.runIdleOnlyJobs();
            e.idleWorkTimer = setInterval(e._idleWorkerTicker, fP.MAX_IDLE_TIME)
        })
    }
    fP.MAX_IDLE_TIME = 50;
    fP.MAX_FRAME_TIME = 6;
    fP.prototype.runJobs = function(i) {
        if (this._jobQueue.length === 0) {
            return
        }
        var hT = fC();
        var e = 0;
        i = i || fP.MAX_FRAME_TIME;
        while (this._jobQueue.length && e < i) {
            var T = this._jobQueue.shift();
            if (T.state !== "invalid") {
                T.call()
            }
            e = fC() - hT
        }
    };
    fP.prototype.runIdleOnlyJobs = function() {
        if (this._idleOnlyJobQueue.length === 0) {
            return
        }
        var T = fC();
        var e = 0;
        while (this._idleOnlyJobQueue.length && e < fP.MAX_IDLE_TIME) {
            var i = this._idleOnlyJobQueue.shift();
            if (i.state !== "invalid") {
                i.call()
            }
            e = fC() - T
        }
    };
    fP.prototype.checkIdleRunning = function() {
        if (this.isIdle && !this.idleWorkTimer) {
            this.runJobs();
            this.runIdleOnlyJobs();
            this.idleWorkTimer = setInterval(this._idleWorkerTicker, 50)
        }
    };
    fP.prototype.addJob = function(e) {
        this._jobQueue.push(e);
        this.checkIdleRunning()
    };
    fP.prototype.clearJobs = function() {
        this._jobQueue.length = 0;
        this._idleOnlyJobQueue.length = 0
    };
    fP.prototype.addIdleOnlyJob = function(e) {
        this._idleOnlyJobQueue.push(e);
        this.checkIdleRunning()
    };
    var cc = {}; (function(hW) {
        if (!h0) {
            var h0 = 0.000001
        }
        if (!i) {
            var i = (typeof Float32Array !== "undefined") ? Float32Array: Array
        }
        if (!hU) {
            var hU = Math.random
        }
        var T = {};
        var hV = Math.PI / 180;
        T.toRadian = function(h1) {
            return h1 * hV
        };
        var hZ = {};
        hZ.create = function(h2) {
            h2 = h2 || i;
            var h1 = new h2(2);
            h1[0] = 0;
            h1[1] = 0;
            return h1
        };
        hZ.clone = function(h1, h3) {
            h3 = h3 || i;
            var h2 = new h3(2);
            h2[0] = h1[0];
            h2[1] = h1[1];
            return h2
        };
        hZ.fromValues = function(h1, h4, h3) {
            h3 = h3 || i;
            var h2 = new h3(2);
            h2[0] = h1;
            h2[1] = h4;
            return h2
        };
        hZ.copy = function(h2, h1) {
            h2[0] = h1[0];
            h2[1] = h1[1];
            return h2
        };
        hZ.set = function(h2, h1, h3) {
            h2[0] = h1;
            h2[1] = h3;
            return h2
        };
        hZ.add = function(h3, h2, h1) {
            h3[0] = h2[0] + h1[0];
            h3[1] = h2[1] + h1[1];
            return h3
        };
        hZ.subtract = function(h3, h2, h1) {
            h3[0] = h2[0] - h1[0];
            h3[1] = h2[1] - h1[1];
            return h3
        };
        hZ.sub = hZ.subtract;
        hZ.multiply = function(h3, h2, h1) {
            h3[0] = h2[0] * h1[0];
            h3[1] = h2[1] * h1[1];
            return h3
        };
        hZ.mul = hZ.multiply;
        hZ.divide = function(h3, h2, h1) {
            h3[0] = h2[0] / h1[0];
            h3[1] = h2[1] / h1[1];
            return h3
        };
        hZ.div = hZ.divide;
        hZ.min = function(h3, h2, h1) {
            h3[0] = Math.min(h2[0], h1[0]);
            h3[1] = Math.min(h2[1], h1[1]);
            return h3
        };
        hZ.max = function(h3, h2, h1) {
            h3[0] = Math.max(h2[0], h1[0]);
            h3[1] = Math.max(h2[1], h1[1]);
            return h3
        };
        hZ.scale = function(h3, h2, h1) {
            h3[0] = h2[0] * h1;
            h3[1] = h2[1] * h1;
            return h3
        };
        hZ.scaleAndAdd = function(h3, h2, h1, h4) {
            h3[0] = h2[0] + (h1[0] * h4);
            h3[1] = h2[1] + (h1[1] * h4);
            return h3
        };
        hZ.distance = function(h3, h2) {
            var h1 = h2[0] - h3[0],
            h4 = h2[1] - h3[1];
            return Math.sqrt(h1 * h1 + h4 * h4)
        };
        hZ.dist = hZ.distance;
        hZ.squaredDistance = function(h3, h2) {
            var h1 = h2[0] - h3[0],
            h4 = h2[1] - h3[1];
            return h1 * h1 + h4 * h4
        };
        hZ.sqrDist = hZ.squaredDistance;
        hZ.length = function(h2) {
            var h1 = h2[0],
            h3 = h2[1];
            return Math.sqrt(h1 * h1 + h3 * h3)
        };
        hZ.len = hZ.length;
        hZ.squaredLength = function(h2) {
            var h1 = h2[0],
            h3 = h2[1];
            return h1 * h1 + h3 * h3
        };
        hZ.sqrLen = hZ.squaredLength;
        hZ.negate = function(h2, h1) {
            h2[0] = -h1[0];
            h2[1] = -h1[1];
            return h2
        };
        hZ.normalize = function(h4, h3) {
            var h2 = h3[0],
            h5 = h3[1];
            var h1 = h2 * h2 + h5 * h5;
            if (h1 > 0) {
                h1 = 1 / Math.sqrt(h1);
                h4[0] = h3[0] * h1;
                h4[1] = h3[1] * h1
            }
            return h4
        };
        hZ.dot = function(h2, h1) {
            return h2[0] * h1[0] + h2[1] * h1[1]
        };
        hZ.cross = function(h3, h2, h1) {
            var h4 = h2[0] * h1[1] - h2[1] * h1[0];
            h3[0] = h3[1] = 0;
            h3[2] = h4;
            return h3
        };
        hZ.lerp = function(h3, h2, h1, h4) {
            var h6 = h2[0],
            h5 = h2[1];
            h3[0] = h6 + h4 * (h1[0] - h6);
            h3[1] = h5 + h4 * (h1[1] - h5);
            return h3
        };
        hZ.random = function(h1, h3) {
            h3 = h3 || 1;
            var h2 = hU() * 2 * Math.PI;
            h1[0] = Math.cos(h2) * h3;
            h1[1] = Math.sin(h2) * h3;
            return h1
        };
        hZ.transformMat2 = function(h4, h3, h2) {
            var h1 = h3[0],
            h5 = h3[1];
            h4[0] = h2[0] * h1 + h2[2] * h5;
            h4[1] = h2[1] * h1 + h2[3] * h5;
            return h4
        };
        hZ.transformMat2d = function(h4, h3, h2) {
            var h1 = h3[0],
            h5 = h3[1];
            h4[0] = h2[0] * h1 + h2[2] * h5 + h2[4];
            h4[1] = h2[1] * h1 + h2[3] * h5 + h2[5];
            return h4
        };
        hZ.transformMat3 = function(h4, h3, h2) {
            var h1 = h3[0],
            h5 = h3[1];
            h4[0] = h2[0] * h1 + h2[3] * h5 + h2[6];
            h4[1] = h2[1] * h1 + h2[4] * h5 + h2[7];
            return h4
        };
        hZ.transformMat4 = function(h4, h3, h2) {
            var h1 = h3[0],
            h5 = h3[1];
            h4[0] = h2[0] * h1 + h2[4] * h5 + h2[12];
            h4[1] = h2[1] * h1 + h2[5] * h5 + h2[13];
            return h4
        };
        hZ.rotate = function(h4, h2, h1, h8) {
            var h7 = h2[0] - h1[0];
            var h6 = h2[1] - h1[1];
            var h3 = Math.sin(h8);
            var h5 = Math.cos(h8);
            h4[0] = h7 * h5 - h6 * h3 + h1[0];
            h4[1] = h7 * h3 + h6 * h5 + h1[1];
            return h4
        };
        hZ.forEach = (function() {
            var h1 = hZ.create();
            return function(h4, h8, h9, h7, h6, h2) {
                var h5, h3;
                if (!h8) {
                    h8 = 2
                }
                if (!h9) {
                    h9 = 0
                }
                if (h7) {
                    h3 = Math.min((h7 * h8) + h9, h4.length)
                } else {
                    h3 = h4.length
                }
                for (h5 = h9; h5 < h3; h5 += h8) {
                    h1[0] = h4[h5];
                    h1[1] = h4[h5 + 1];
                    h6(h1, h1, h2);
                    h4[h5] = h1[0];
                    h4[h5 + 1] = h1[1]
                }
                return h4
            }
        })();
        hZ.str = function(h1) {
            return "vec2(" + h1[0] + ", " + h1[1] + ")"
        };
        hW.vec2 = hZ;
        var hY = {};
        hY.create = function(h2) {
            h2 = h2 || i;
            var h1 = new h2(3);
            h1[0] = 0;
            h1[1] = 0;
            h1[2] = 0;
            return h1
        };
        hY.clone = function(h1, h3) {
            h3 = h3 || i;
            var h2 = new h3(3);
            h2[0] = h1[0];
            h2[1] = h1[1];
            h2[2] = h1[2];
            return h2
        };
        hY.fromValues = function(h1, h5, h3, h4) {
            h4 = h4 || i;
            var h2 = new h4(3);
            h2[0] = h1;
            h2[1] = h5;
            h2[2] = h3;
            return h2
        };
        hY.copy = function(h2, h1) {
            h2[0] = h1[0];
            h2[1] = h1[1];
            h2[2] = h1[2];
            return h2
        };
        hY.set = function(h2, h1, h4, h3) {
            h2[0] = h1;
            h2[1] = h4;
            h2[2] = h3;
            return h2
        };
        hY.add = function(h3, h2, h1) {
            h3[0] = h2[0] + h1[0];
            h3[1] = h2[1] + h1[1];
            h3[2] = h2[2] + h1[2];
            return h3
        };
        hY.subtract = function(h3, h2, h1) {
            h3[0] = h2[0] - h1[0];
            h3[1] = h2[1] - h1[1];
            h3[2] = h2[2] - h1[2];
            return h3
        };
        hY.sub = hY.subtract;
        hY.multiply = function(h3, h2, h1) {
            h3[0] = h2[0] * h1[0];
            h3[1] = h2[1] * h1[1];
            h3[2] = h2[2] * h1[2];
            return h3
        };
        hY.mul = hY.multiply;
        hY.divide = function(h3, h2, h1) {
            h3[0] = h2[0] / h1[0];
            h3[1] = h2[1] / h1[1];
            h3[2] = h2[2] / h1[2];
            return h3
        };
        hY.div = hY.divide;
        hY.min = function(h3, h2, h1) {
            h3[0] = Math.min(h2[0], h1[0]);
            h3[1] = Math.min(h2[1], h1[1]);
            h3[2] = Math.min(h2[2], h1[2]);
            return h3
        };
        hY.max = function(h3, h2, h1) {
            h3[0] = Math.max(h2[0], h1[0]);
            h3[1] = Math.max(h2[1], h1[1]);
            h3[2] = Math.max(h2[2], h1[2]);
            return h3
        };
        hY.scale = function(h3, h2, h1) {
            h3[0] = h2[0] * h1;
            h3[1] = h2[1] * h1;
            h3[2] = h2[2] * h1;
            return h3
        };
        hY.scaleAndAdd = function(h3, h2, h1, h4) {
            h3[0] = h2[0] + (h1[0] * h4);
            h3[1] = h2[1] + (h1[1] * h4);
            h3[2] = h2[2] + (h1[2] * h4);
            return h3
        };
        hY.distance = function(h3, h2) {
            var h1 = h2[0] - h3[0],
            h5 = h2[1] - h3[1],
            h4 = h2[2] - h3[2];
            return Math.sqrt(h1 * h1 + h5 * h5 + h4 * h4)
        };
        hY.dist = hY.distance;
        hY.squaredDistance = function(h3, h2) {
            var h1 = h2[0] - h3[0],
            h5 = h2[1] - h3[1],
            h4 = h2[2] - h3[2];
            return h1 * h1 + h5 * h5 + h4 * h4
        };
        hY.sqrDist = hY.squaredDistance;
        hY.length = function(h2) {
            var h1 = h2[0],
            h4 = h2[1],
            h3 = h2[2];
            return Math.sqrt(h1 * h1 + h4 * h4 + h3 * h3)
        };
        hY.len = hY.length;
        hY.squaredLength = function(h2) {
            var h1 = h2[0],
            h4 = h2[1],
            h3 = h2[2];
            return h1 * h1 + h4 * h4 + h3 * h3
        };
        hY.sqrLen = hY.squaredLength;
        hY.negate = function(h2, h1) {
            h2[0] = -h1[0];
            h2[1] = -h1[1];
            h2[2] = -h1[2];
            return h2
        };
        hY.normalize = function(h4, h3) {
            var h2 = h3[0],
            h6 = h3[1],
            h5 = h3[2];
            var h1 = h2 * h2 + h6 * h6 + h5 * h5;
            if (h1 > 0) {
                h1 = 1 / Math.sqrt(h1);
                h4[0] = h3[0] * h1;
                h4[1] = h3[1] * h1;
                h4[2] = h3[2] * h1
            }
            return h4
        };
        hY.dot = function(h2, h1) {
            return h2[0] * h1[0] + h2[1] * h1[1] + h2[2] * h1[2]
        };
        hY.cross = function(h2, h7, h6) {
            var h1 = h7[0],
            h9 = h7[1],
            h8 = h7[2],
            h5 = h6[0],
            h4 = h6[1],
            h3 = h6[2];
            h2[0] = h9 * h3 - h8 * h4;
            h2[1] = h8 * h5 - h1 * h3;
            h2[2] = h1 * h4 - h9 * h5;
            return h2
        };
        hY.lerp = function(h3, h2, h1, h4) {
            var h7 = h2[0],
            h6 = h2[1],
            h5 = h2[2];
            h3[0] = h7 + h4 * (h1[0] - h7);
            h3[1] = h6 + h4 * (h1[1] - h6);
            h3[2] = h5 + h4 * (h1[2] - h5);
            return h3
        };
        hY.random = function(h1, h5) {
            h5 = h5 || 1;
            var h3 = hU() * 2 * Math.PI;
            var h4 = (hU() * 2) - 1;
            var h2 = Math.sqrt(1 - h4 * h4) * h5;
            h1[0] = Math.cos(h3) * h2;
            h1[1] = Math.sin(h3) * h2;
            h1[2] = h4 * h5;
            return h1
        };
        hY.transformMat4 = function(h4, h3, h2) {
            var h1 = h3[0],
            h6 = h3[1],
            h5 = h3[2];
            h4[0] = h2[0] * h1 + h2[4] * h6 + h2[8] * h5 + h2[12];
            h4[1] = h2[1] * h1 + h2[5] * h6 + h2[9] * h5 + h2[13];
            h4[2] = h2[2] * h1 + h2[6] * h6 + h2[10] * h5 + h2[14];
            return h4
        };
        hY.transformMat3 = function(h4, h3, h2) {
            var h1 = h3[0],
            h6 = h3[1],
            h5 = h3[2];
            h4[0] = h1 * h2[0] + h6 * h2[3] + h5 * h2[6];
            h4[1] = h1 * h2[1] + h6 * h2[4] + h5 * h2[7];
            h4[2] = h1 * h2[2] + h6 * h2[5] + h5 * h2[8];
            return h4
        };
        hY.transformQuat = function(h7, id, h1) {
            var ie = id[0],
            ic = id[1],
            ib = id[2],
            h9 = h1[0],
            h8 = h1[1],
            h6 = h1[2],
            ia = h1[3],
            h4 = ia * ie + h8 * ib - h6 * ic,
            h3 = ia * ic + h6 * ie - h9 * ib,
            h2 = ia * ib + h9 * ic - h8 * ie,
            h5 = -h9 * ie - h8 * ic - h6 * ib;
            h7[0] = h4 * ia + h5 * -h9 + h3 * -h6 - h2 * -h8;
            h7[1] = h3 * ia + h5 * -h8 + h2 * -h9 - h4 * -h6;
            h7[2] = h2 * ia + h5 * -h6 + h4 * -h8 - h3 * -h9;
            return h7
        };
        hY.rotateX = function(h3, h2, h1, h6) {
            var h5 = [],
            h4 = [];
            h5[0] = h2[0] - h1[0];
            h5[1] = h2[1] - h1[1];
            h5[2] = h2[2] - h1[2];
            h4[0] = h5[0];
            h4[1] = h5[1] * Math.cos(h6) - h5[2] * Math.sin(h6);
            h4[2] = h5[1] * Math.sin(h6) + h5[2] * Math.cos(h6);
            h3[0] = h4[0] + h1[0];
            h3[1] = h4[1] + h1[1];
            h3[2] = h4[2] + h1[2];
            return h3
        };
        hY.rotateY = function(h3, h2, h1, h6) {
            var h5 = [],
            h4 = [];
            h5[0] = h2[0] - h1[0];
            h5[1] = h2[1] - h1[1];
            h5[2] = h2[2] - h1[2];
            h4[0] = h5[2] * Math.sin(h6) + h5[0] * Math.cos(h6);
            h4[1] = h5[1];
            h4[2] = h5[2] * Math.cos(h6) - h5[0] * Math.sin(h6);
            h3[0] = h4[0] + h1[0];
            h3[1] = h4[1] + h1[1];
            h3[2] = h4[2] + h1[2];
            return h3
        };
        hY.rotateZ = function(h3, h2, h1, h6) {
            var h5 = [],
            h4 = [];
            h5[0] = h2[0] - h1[0];
            h5[1] = h2[1] - h1[1];
            h5[2] = h2[2] - h1[2];
            h4[0] = h5[0] * Math.cos(h6) - h5[1] * Math.sin(h6);
            h4[1] = h5[0] * Math.sin(h6) + h5[1] * Math.cos(h6);
            h4[2] = h5[2];
            h3[0] = h4[0] + h1[0];
            h3[1] = h4[1] + h1[1];
            h3[2] = h4[2] + h1[2];
            return h3
        };
        hY.forEach = (function() {
            var h1 = hY.create();
            return function(h4, h8, h9, h7, h6, h2) {
                var h5, h3;
                if (!h8) {
                    h8 = 3
                }
                if (!h9) {
                    h9 = 0
                }
                if (h7) {
                    h3 = Math.min((h7 * h8) + h9, h4.length)
                } else {
                    h3 = h4.length
                }
                for (h5 = h9; h5 < h3; h5 += h8) {
                    h1[0] = h4[h5];
                    h1[1] = h4[h5 + 1];
                    h1[2] = h4[h5 + 2];
                    h6(h1, h1, h2);
                    h4[h5] = h1[0];
                    h4[h5 + 1] = h1[1];
                    h4[h5 + 2] = h1[2]
                }
                return h4
            }
        })();
        hY.str = function(h1) {
            return "vec3(" + h1[0] + ", " + h1[1] + ", " + h1[2] + ")"
        };
        hW.vec3 = hY;
        var hX = {};
        hX.create = function(h2) {
            h2 = h2 || i;
            var h1 = new h2(4);
            h1[0] = 0;
            h1[1] = 0;
            h1[2] = 0;
            h1[3] = 0;
            return h1
        };
        hX.clone = function(h1, h3) {
            h3 = h3 || i;
            var h2 = new h3(4);
            h2[0] = h1[0];
            h2[1] = h1[1];
            h2[2] = h1[2];
            h2[3] = h1[3];
            return h2
        };
        hX.fromValues = function(h1, h6, h4, h2, h5) {
            h5 = h5 || i;
            var h3 = new h5(4);
            h3[0] = h1;
            h3[1] = h6;
            h3[2] = h4;
            h3[3] = h2;
            return h3
        };
        hX.copy = function(h2, h1) {
            h2[0] = h1[0];
            h2[1] = h1[1];
            h2[2] = h1[2];
            h2[3] = h1[3];
            return h2
        };
        hX.set = function(h3, h1, h5, h4, h2) {
            h3[0] = h1;
            h3[1] = h5;
            h3[2] = h4;
            h3[3] = h2;
            return h3
        };
        hX.add = function(h3, h2, h1) {
            h3[0] = h2[0] + h1[0];
            h3[1] = h2[1] + h1[1];
            h3[2] = h2[2] + h1[2];
            h3[3] = h2[3] + h1[3];
            return h3
        };
        hX.subtract = function(h3, h2, h1) {
            h3[0] = h2[0] - h1[0];
            h3[1] = h2[1] - h1[1];
            h3[2] = h2[2] - h1[2];
            h3[3] = h2[3] - h1[3];
            return h3
        };
        hX.sub = hX.subtract;
        hX.multiply = function(h3, h2, h1) {
            h3[0] = h2[0] * h1[0];
            h3[1] = h2[1] * h1[1];
            h3[2] = h2[2] * h1[2];
            h3[3] = h2[3] * h1[3];
            return h3
        };
        hX.mul = hX.multiply;
        hX.divide = function(h3, h2, h1) {
            h3[0] = h2[0] / h1[0];
            h3[1] = h2[1] / h1[1];
            h3[2] = h2[2] / h1[2];
            h3[3] = h2[3] / h1[3];
            return h3
        };
        hX.div = hX.divide;
        hX.min = function(h3, h2, h1) {
            h3[0] = Math.min(h2[0], h1[0]);
            h3[1] = Math.min(h2[1], h1[1]);
            h3[2] = Math.min(h2[2], h1[2]);
            h3[3] = Math.min(h2[3], h1[3]);
            return h3
        };
        hX.max = function(h3, h2, h1) {
            h3[0] = Math.max(h2[0], h1[0]);
            h3[1] = Math.max(h2[1], h1[1]);
            h3[2] = Math.max(h2[2], h1[2]);
            h3[3] = Math.max(h2[3], h1[3]);
            return h3
        };
        hX.scale = function(h3, h2, h1) {
            h3[0] = h2[0] * h1;
            h3[1] = h2[1] * h1;
            h3[2] = h2[2] * h1;
            h3[3] = h2[3] * h1;
            return h3
        };
        hX.scaleAndAdd = function(h3, h2, h1, h4) {
            h3[0] = h2[0] + (h1[0] * h4);
            h3[1] = h2[1] + (h1[1] * h4);
            h3[2] = h2[2] + (h1[2] * h4);
            h3[3] = h2[3] + (h1[3] * h4);
            return h3
        };
        hX.distance = function(h4, h2) {
            var h1 = h2[0] - h4[0],
            h6 = h2[1] - h4[1],
            h5 = h2[2] - h4[2],
            h3 = h2[3] - h4[3];
            return Math.sqrt(h1 * h1 + h6 * h6 + h5 * h5 + h3 * h3)
        };
        hX.dist = hX.distance;
        hX.squaredDistance = function(h4, h2) {
            var h1 = h2[0] - h4[0],
            h6 = h2[1] - h4[1],
            h5 = h2[2] - h4[2],
            h3 = h2[3] - h4[3];
            return h1 * h1 + h6 * h6 + h5 * h5 + h3 * h3
        };
        hX.sqrDist = hX.squaredDistance;
        hX.length = function(h3) {
            var h1 = h3[0],
            h5 = h3[1],
            h4 = h3[2],
            h2 = h3[3];
            return Math.sqrt(h1 * h1 + h5 * h5 + h4 * h4 + h2 * h2)
        };
        hX.len = hX.length;
        hX.squaredLength = function(h3) {
            var h1 = h3[0],
            h5 = h3[1],
            h4 = h3[2],
            h2 = h3[3];
            return h1 * h1 + h5 * h5 + h4 * h4 + h2 * h2
        };
        hX.sqrLen = hX.squaredLength;
        hX.negate = function(h2, h1) {
            h2[0] = -h1[0];
            h2[1] = -h1[1];
            h2[2] = -h1[2];
            h2[3] = -h1[3];
            return h2
        };
        hX.normalize = function(h5, h4) {
            var h2 = h4[0],
            h7 = h4[1],
            h6 = h4[2],
            h3 = h4[3];
            var h1 = h2 * h2 + h7 * h7 + h6 * h6 + h3 * h3;
            if (h1 > 0) {
                h1 = 1 / Math.sqrt(h1);
                h5[0] = h4[0] * h1;
                h5[1] = h4[1] * h1;
                h5[2] = h4[2] * h1;
                h5[3] = h4[3] * h1
            }
            return h5
        };
        hX.dot = function(h2, h1) {
            return h2[0] * h1[0] + h2[1] * h1[1] + h2[2] * h1[2] + h2[3] * h1[3]
        };
        hX.lerp = function(h3, h2, h1, h4) {
            var h7 = h2[0],
            h6 = h2[1],
            h5 = h2[2],
            h8 = h2[3];
            h3[0] = h7 + h4 * (h1[0] - h7);
            h3[1] = h6 + h4 * (h1[1] - h6);
            h3[2] = h5 + h4 * (h1[2] - h5);
            h3[3] = h8 + h4 * (h1[3] - h8);
            return h3
        };
        hX.random = function(h1, h2) {
            h2 = h2 || 1;
            h1[0] = hU();
            h1[1] = hU();
            h1[2] = hU();
            h1[3] = hU();
            hX.normalize(h1, h1);
            hX.scale(h1, h1, h2);
            return h1
        };
        hX.transformMat4 = function(h5, h4, h2) {
            var h1 = h4[0],
            h7 = h4[1],
            h6 = h4[2],
            h3 = h4[3];
            h5[0] = h2[0] * h1 + h2[4] * h7 + h2[8] * h6 + h2[12] * h3;
            h5[1] = h2[1] * h1 + h2[5] * h7 + h2[9] * h6 + h2[13] * h3;
            h5[2] = h2[2] * h1 + h2[6] * h7 + h2[10] * h6 + h2[14] * h3;
            h5[3] = h2[3] * h1 + h2[7] * h7 + h2[11] * h6 + h2[15] * h3;
            return h5
        };
        hX.transformQuat = function(h7, id, h1) {
            var ie = id[0],
            ic = id[1],
            ib = id[2],
            h9 = h1[0],
            h8 = h1[1],
            h6 = h1[2],
            ia = h1[3],
            h4 = ia * ie + h8 * ib - h6 * ic,
            h3 = ia * ic + h6 * ie - h9 * ib,
            h2 = ia * ib + h9 * ic - h8 * ie,
            h5 = -h9 * ie - h8 * ic - h6 * ib;
            h7[0] = h4 * ia + h5 * -h9 + h3 * -h6 - h2 * -h8;
            h7[1] = h3 * ia + h5 * -h8 + h2 * -h9 - h4 * -h6;
            h7[2] = h2 * ia + h5 * -h6 + h4 * -h8 - h3 * -h9;
            return h7
        };
        hX.forEach = (function() {
            var h1 = hX.create();
            return function(h4, h8, h9, h7, h6, h2) {
                var h5, h3;
                if (!h8) {
                    h8 = 4
                }
                if (!h9) {
                    h9 = 0
                }
                if (h7) {
                    h3 = Math.min((h7 * h8) + h9, h4.length)
                } else {
                    h3 = h4.length
                }
                for (h5 = h9; h5 < h3; h5 += h8) {
                    h1[0] = h4[h5];
                    h1[1] = h4[h5 + 1];
                    h1[2] = h4[h5 + 2];
                    h1[3] = h4[h5 + 3];
                    h6(h1, h1, h2);
                    h4[h5] = h1[0];
                    h4[h5 + 1] = h1[1];
                    h4[h5 + 2] = h1[2];
                    h4[h5 + 3] = h1[3]
                }
                return h4
            }
        })();
        hX.str = function(h1) {
            return "vec4(" + h1[0] + ", " + h1[1] + ", " + h1[2] + ", " + h1[3] + ")"
        };
        hW.vec4 = hX;
        var hT = {};
        hT.create = function(h2) {
            h2 = h2 || i;
            var h1 = new h2(4);
            h1[0] = 1;
            h1[1] = 0;
            h1[2] = 0;
            h1[3] = 1;
            return h1
        };
        hT.clone = function(h1, h3) {
            h3 = h3 || i;
            var h2 = new h3(4);
            h2[0] = h1[0];
            h2[1] = h1[1];
            h2[2] = h1[2];
            h2[3] = h1[3];
            return h2
        };
        hT.copy = function(h2, h1) {
            h2[0] = h1[0];
            h2[1] = h1[1];
            h2[2] = h1[2];
            h2[3] = h1[3];
            return h2
        };
        hT.identity = function(h1) {
            h1[0] = 1;
            h1[1] = 0;
            h1[2] = 0;
            h1[3] = 1;
            return h1
        };
        hT.transpose = function(h3, h2) {
            if (h3 === h2) {
                var h1 = h2[1];
                h3[1] = h2[2];
                h3[2] = h1
            } else {
                h3[0] = h2[0];
                h3[1] = h2[2];
                h3[2] = h2[1];
                h3[3] = h2[3]
            }
            return h3
        };
        hT.invert = function(h5, h3) {
            var h4 = h3[0],
            h2 = h3[1],
            h1 = h3[2],
            h7 = h3[3],
            h6 = h4 * h7 - h1 * h2;
            if (!h6) {
                return null
            }
            h6 = 1 / h6;
            h5[0] = h7 * h6;
            h5[1] = -h2 * h6;
            h5[2] = -h1 * h6;
            h5[3] = h4 * h6;
            return h5
        };
        hT.adjoint = function(h3, h1) {
            var h2 = h1[0];
            h3[0] = h1[3];
            h3[1] = -h1[1];
            h3[2] = -h1[2];
            h3[3] = h2;
            return h3
        };
        hT.determinant = function(h1) {
            return h1[0] * h1[3] - h1[2] * h1[1]
        };
        hT.multiply = function(h5, ia, h8) {
            var h4 = ia[0],
            h3 = ia[1],
            h2 = ia[2],
            h1 = ia[3];
            var ib = h8[0],
            h9 = h8[1],
            h7 = h8[2],
            h6 = h8[3];
            h5[0] = h4 * ib + h2 * h9;
            h5[1] = h3 * ib + h1 * h9;
            h5[2] = h4 * h7 + h2 * h6;
            h5[3] = h3 * h7 + h1 * h6;
            return h5
        };
        hT.mul = hT.multiply;
        hT.rotate = function(h5, h8, h7) {
            var h4 = h8[0],
            h3 = h8[1],
            h2 = h8[2],
            h1 = h8[3],
            h9 = Math.sin(h7),
            h6 = Math.cos(h7);
            h5[0] = h4 * h6 + h2 * h9;
            h5[1] = h3 * h6 + h1 * h9;
            h5[2] = h4 * -h9 + h2 * h6;
            h5[3] = h3 * -h9 + h1 * h6;
            return h5
        };
        hT.scale = function(h5, h6, h8) {
            var h4 = h6[0],
            h3 = h6[1],
            h2 = h6[2],
            h1 = h6[3],
            h9 = h8[0],
            h7 = h8[1];
            h5[0] = h4 * h9;
            h5[1] = h3 * h9;
            h5[2] = h2 * h7;
            h5[3] = h1 * h7;
            return h5
        };
        hT.str = function(h1) {
            return "mat2(" + h1[0] + ", " + h1[1] + ", " + h1[2] + ", " + h1[3] + ")"
        };
        hT.frob = function(h1) {
            return (Math.sqrt(Math.pow(h1[0], 2) + Math.pow(h1[1], 2) + Math.pow(h1[2], 2) + Math.pow(h1[3], 2)))
        };
        hT.LDU = function(h1, h4, h3, h2) {
            h1[2] = h2[2] / h2[0];
            h3[0] = h2[0];
            h3[1] = h2[1];
            h3[3] = h2[3] - h1[2] * h3[1];
            return [h1, h4, h3]
        };
        hW.mat2 = hT;
        var e = {};
        e.create = function(h2) {
            h2 = h2 || i;
            var h1 = new h2(16);
            h1[0] = 1;
            h1[1] = 0;
            h1[2] = 0;
            h1[3] = 0;
            h1[4] = 0;
            h1[5] = 1;
            h1[6] = 0;
            h1[7] = 0;
            h1[8] = 0;
            h1[9] = 0;
            h1[10] = 1;
            h1[11] = 0;
            h1[12] = 0;
            h1[13] = 0;
            h1[14] = 0;
            h1[15] = 1;
            return h1
        };
        e.clone = function(h1) {
            var h2 = new i(16);
            h2[0] = h1[0];
            h2[1] = h1[1];
            h2[2] = h1[2];
            h2[3] = h1[3];
            h2[4] = h1[4];
            h2[5] = h1[5];
            h2[6] = h1[6];
            h2[7] = h1[7];
            h2[8] = h1[8];
            h2[9] = h1[9];
            h2[10] = h1[10];
            h2[11] = h1[11];
            h2[12] = h1[12];
            h2[13] = h1[13];
            h2[14] = h1[14];
            h2[15] = h1[15];
            return h2
        };
        e.copy = function(h2, h1) {
            h2[0] = h1[0];
            h2[1] = h1[1];
            h2[2] = h1[2];
            h2[3] = h1[3];
            h2[4] = h1[4];
            h2[5] = h1[5];
            h2[6] = h1[6];
            h2[7] = h1[7];
            h2[8] = h1[8];
            h2[9] = h1[9];
            h2[10] = h1[10];
            h2[11] = h1[11];
            h2[12] = h1[12];
            h2[13] = h1[13];
            h2[14] = h1[14];
            h2[15] = h1[15];
            return h2
        };
        e.identity = function(h1) {
            h1[0] = 1;
            h1[1] = 0;
            h1[2] = 0;
            h1[3] = 0;
            h1[4] = 0;
            h1[5] = 1;
            h1[6] = 0;
            h1[7] = 0;
            h1[8] = 0;
            h1[9] = 0;
            h1[10] = 1;
            h1[11] = 0;
            h1[12] = 0;
            h1[13] = 0;
            h1[14] = 0;
            h1[15] = 1;
            return h1
        };
        e.transpose = function(h4, h3) {
            if (h4 === h3) {
                var h8 = h3[1],
                h6 = h3[2],
                h5 = h3[3],
                h1 = h3[6],
                h7 = h3[7],
                h2 = h3[11];
                h4[1] = h3[4];
                h4[2] = h3[8];
                h4[3] = h3[12];
                h4[4] = h8;
                h4[6] = h3[9];
                h4[7] = h3[13];
                h4[8] = h6;
                h4[9] = h1;
                h4[11] = h3[14];
                h4[12] = h5;
                h4[13] = h7;
                h4[14] = h2
            } else {
                h4[0] = h3[0];
                h4[1] = h3[4];
                h4[2] = h3[8];
                h4[3] = h3[12];
                h4[4] = h3[1];
                h4[5] = h3[5];
                h4[6] = h3[9];
                h4[7] = h3[13];
                h4[8] = h3[2];
                h4[9] = h3[6];
                h4[10] = h3[10];
                h4[11] = h3[14];
                h4[12] = h3[3];
                h4[13] = h3[7];
                h4[14] = h3[11];
                h4[15] = h3[15]
            }
            return h4
        };
        e.invert = function(il, ir) {
            var iw = ir[0],
            iu = ir[1],
            it = ir[2],
            ip = ir[3],
            h5 = ir[4],
            h4 = ir[5],
            h3 = ir[6],
            h2 = ir[7],
            ik = ir[8],
            ij = ir[9],
            ii = ir[10],
            ih = ir[11],
            iy = ir[12],
            ix = ir[13],
            iv = ir[14],
            iq = ir[15],
            ig = iw * h4 - iu * h5,
            ie = iw * h3 - it * h5,
            id = iw * h2 - ip * h5,
            ic = iu * h3 - it * h4,
            ib = iu * h2 - ip * h4,
            ia = it * h2 - ip * h3,
            h9 = ik * ix - ij * iy,
            h8 = ik * iv - ii * iy,
            h7 = ik * iq - ih * iy,
            h6 = ij * iv - ii * ix,
            io = ij * iq - ih * ix,
            im = ii * iq - ih * iv,
            h1 = ig * im - ie * io + id * h6 + ic * h7 - ib * h8 + ia * h9;
            if (!h1) {
                return null
            }
            h1 = 1 / h1;
            il[0] = (h4 * im - h3 * io + h2 * h6) * h1;
            il[1] = (it * io - iu * im - ip * h6) * h1;
            il[2] = (ix * ia - iv * ib + iq * ic) * h1;
            il[3] = (ii * ib - ij * ia - ih * ic) * h1;
            il[4] = (h3 * h7 - h5 * im - h2 * h8) * h1;
            il[5] = (iw * im - it * h7 + ip * h8) * h1;
            il[6] = (iv * id - iy * ia - iq * ie) * h1;
            il[7] = (ik * ia - ii * id + ih * ie) * h1;
            il[8] = (h5 * io - h4 * h7 + h2 * h9) * h1;
            il[9] = (iu * h7 - iw * io - ip * h9) * h1;
            il[10] = (iy * ib - ix * id + iq * ig) * h1;
            il[11] = (ij * id - ik * ib - ih * ig) * h1;
            il[12] = (h4 * h8 - h5 * h6 - h3 * h9) * h1;
            il[13] = (iw * h6 - iu * h8 + it * h9) * h1;
            il[14] = (ix * ie - iy * ic - iv * ig) * h1;
            il[15] = (ik * ic - ij * ie + ii * ig) * h1;
            return il
        };
        e.adjoint = function(h9, ic) {
            var ih = ic[0],
            ie = ic[1],
            id = ic[2],
            ia = ic[3],
            h4 = ic[4],
            h3 = ic[5],
            h2 = ic[6],
            h1 = ic[7],
            h8 = ic[8],
            h7 = ic[9],
            h6 = ic[10],
            h5 = ic[11],
            ij = ic[12],
            ii = ic[13],
            ig = ic[14],
            ib = ic[15];
            h9[0] = (h3 * (h6 * ib - h5 * ig) - h7 * (h2 * ib - h1 * ig) + ii * (h2 * h5 - h1 * h6));
            h9[1] = -(ie * (h6 * ib - h5 * ig) - h7 * (id * ib - ia * ig) + ii * (id * h5 - ia * h6));
            h9[2] = (ie * (h2 * ib - h1 * ig) - h3 * (id * ib - ia * ig) + ii * (id * h1 - ia * h2));
            h9[3] = -(ie * (h2 * h5 - h1 * h6) - h3 * (id * h5 - ia * h6) + h7 * (id * h1 - ia * h2));
            h9[4] = -(h4 * (h6 * ib - h5 * ig) - h8 * (h2 * ib - h1 * ig) + ij * (h2 * h5 - h1 * h6));
            h9[5] = (ih * (h6 * ib - h5 * ig) - h8 * (id * ib - ia * ig) + ij * (id * h5 - ia * h6));
            h9[6] = -(ih * (h2 * ib - h1 * ig) - h4 * (id * ib - ia * ig) + ij * (id * h1 - ia * h2));
            h9[7] = (ih * (h2 * h5 - h1 * h6) - h4 * (id * h5 - ia * h6) + h8 * (id * h1 - ia * h2));
            h9[8] = (h4 * (h7 * ib - h5 * ii) - h8 * (h3 * ib - h1 * ii) + ij * (h3 * h5 - h1 * h7));
            h9[9] = -(ih * (h7 * ib - h5 * ii) - h8 * (ie * ib - ia * ii) + ij * (ie * h5 - ia * h7));
            h9[10] = (ih * (h3 * ib - h1 * ii) - h4 * (ie * ib - ia * ii) + ij * (ie * h1 - ia * h3));
            h9[11] = -(ih * (h3 * h5 - h1 * h7) - h4 * (ie * h5 - ia * h7) + h8 * (ie * h1 - ia * h3));
            h9[12] = -(h4 * (h7 * ig - h6 * ii) - h8 * (h3 * ig - h2 * ii) + ij * (h3 * h6 - h2 * h7));
            h9[13] = (ih * (h7 * ig - h6 * ii) - h8 * (ie * ig - id * ii) + ij * (ie * h6 - id * h7));
            h9[14] = -(ih * (h3 * ig - h2 * ii) - h4 * (ie * ig - id * ii) + ij * (ie * h2 - id * h3));
            h9[15] = (ih * (h3 * h6 - h2 * h7) - h4 * (ie * h6 - id * h7) + h8 * (ie * h2 - id * h3));
            return h9
        };
        e.determinant = function(io) {
            var iu = io[0],
            ir = io[1],
            ip = io[2],
            im = io[3],
            h4 = io[4],
            h3 = io[5],
            h2 = io[6],
            h1 = io[7],
            ij = io[8],
            ii = io[9],
            ih = io[10],
            ig = io[11],
            iw = io[12],
            iv = io[13],
            it = io[14],
            iq = io[15],
            ie = iu * h3 - ir * h4,
            id = iu * h2 - ip * h4,
            ic = iu * h1 - im * h4,
            ib = ir * h2 - ip * h3,
            ia = ir * h1 - im * h3,
            h9 = ip * h1 - im * h2,
            h8 = ij * iv - ii * iw,
            h7 = ij * it - ih * iw,
            h6 = ij * iq - ig * iw,
            h5 = ii * it - ih * iv,
            il = ii * iq - ig * iv,
            ik = ih * iq - ig * it;
            return ie * ik - id * il + ic * h5 + ib * h6 - ia * h7 + h9 * h8
        };
        e.multiply = function(id, ii, ie) {
            var im = ii[0],
            il = ii[1],
            ij = ii[2],
            ig = ii[3],
            h7 = ii[4],
            h5 = ii[5],
            h3 = ii[6],
            h1 = ii[7],
            ic = ii[8],
            ib = ii[9],
            ia = ii[10],
            h9 = ii[11],
            ip = ii[12],
            io = ii[13],
            ik = ii[14],
            ih = ii[15];
            var h8 = ie[0],
            h6 = ie[1],
            h4 = ie[2],
            h2 = ie[3];
            id[0] = h8 * im + h6 * h7 + h4 * ic + h2 * ip;
            id[1] = h8 * il + h6 * h5 + h4 * ib + h2 * io;
            id[2] = h8 * ij + h6 * h3 + h4 * ia + h2 * ik;
            id[3] = h8 * ig + h6 * h1 + h4 * h9 + h2 * ih;
            h8 = ie[4];
            h6 = ie[5];
            h4 = ie[6];
            h2 = ie[7];
            id[4] = h8 * im + h6 * h7 + h4 * ic + h2 * ip;
            id[5] = h8 * il + h6 * h5 + h4 * ib + h2 * io;
            id[6] = h8 * ij + h6 * h3 + h4 * ia + h2 * ik;
            id[7] = h8 * ig + h6 * h1 + h4 * h9 + h2 * ih;
            h8 = ie[8];
            h6 = ie[9];
            h4 = ie[10];
            h2 = ie[11];
            id[8] = h8 * im + h6 * h7 + h4 * ic + h2 * ip;
            id[9] = h8 * il + h6 * h5 + h4 * ib + h2 * io;
            id[10] = h8 * ij + h6 * h3 + h4 * ia + h2 * ik;
            id[11] = h8 * ig + h6 * h1 + h4 * h9 + h2 * ih;
            h8 = ie[12];
            h6 = ie[13];
            h4 = ie[14];
            h2 = ie[15];
            id[12] = h8 * im + h6 * h7 + h4 * ic + h2 * ip;
            id[13] = h8 * il + h6 * h5 + h4 * ib + h2 * io;
            id[14] = h8 * ij + h6 * h3 + h4 * ia + h2 * ik;
            id[15] = h8 * ig + h6 * h1 + h4 * h9 + h2 * ih;
            return id
        };
        e.mul = e.multiply;
        e.translate = function(id, ig, h8) {
            var h7 = h8[0],
            h6 = h8[1],
            h5 = h8[2],
            ij,
            ii,
            ih,
            ie,
            h4,
            h3,
            h2,
            h1,
            ic,
            ib,
            ia,
            h9;
            if (ig === id) {
                id[12] = ig[0] * h7 + ig[4] * h6 + ig[8] * h5 + ig[12];
                id[13] = ig[1] * h7 + ig[5] * h6 + ig[9] * h5 + ig[13];
                id[14] = ig[2] * h7 + ig[6] * h6 + ig[10] * h5 + ig[14];
                id[15] = ig[3] * h7 + ig[7] * h6 + ig[11] * h5 + ig[15]
            } else {
                ij = ig[0];
                ii = ig[1];
                ih = ig[2];
                ie = ig[3];
                h4 = ig[4];
                h3 = ig[5];
                h2 = ig[6];
                h1 = ig[7];
                ic = ig[8];
                ib = ig[9];
                ia = ig[10];
                h9 = ig[11];
                id[0] = ij;
                id[1] = ii;
                id[2] = ih;
                id[3] = ie;
                id[4] = h4;
                id[5] = h3;
                id[6] = h2;
                id[7] = h1;
                id[8] = ic;
                id[9] = ib;
                id[10] = ia;
                id[11] = h9;
                id[12] = ij * h7 + h4 * h6 + ic * h5 + ig[12];
                id[13] = ii * h7 + h3 * h6 + ib * h5 + ig[13];
                id[14] = ih * h7 + h2 * h6 + ia * h5 + ig[14];
                id[15] = ie * h7 + h1 * h6 + h9 * h5 + ig[15]
            }
            return id
        };
        e.scale = function(h4, h2, h3) {
            var h1 = h3[0],
            h6 = h3[1],
            h5 = h3[2];
            h4[0] = h2[0] * h1;
            h4[1] = h2[1] * h1;
            h4[2] = h2[2] * h1;
            h4[3] = h2[3] * h1;
            h4[4] = h2[4] * h6;
            h4[5] = h2[5] * h6;
            h4[6] = h2[6] * h6;
            h4[7] = h2[7] * h6;
            h4[8] = h2[8] * h5;
            h4[9] = h2[9] * h5;
            h4[10] = h2[10] * h5;
            h4[11] = h2[11] * h5;
            h4[12] = h2[12];
            h4[13] = h2[13];
            h4[14] = h2[14];
            h4[15] = h2[15];
            return h4
        };
        e.rotate = function(im, iv, ix, h1) {
            var ib = h1[0],
            ia = h1[1],
            h9 = h1[2],
            io = Math.sqrt(ib * ib + ia * ia + h9 * h9),
            ih,
            it,
            ig,
            iz,
            iy,
            iw,
            iu,
            h8,
            h7,
            h6,
            h5,
            il,
            ik,
            ij,
            ii,
            ie,
            id,
            ic,
            ir,
            iq,
            ip,
            h4,
            h3,
            h2;
            if (Math.abs(io) < h0) {
                return null
            }
            io = 1 / io;
            ib *= io;
            ia *= io;
            h9 *= io;
            ih = Math.sin(ix);
            it = Math.cos(ix);
            ig = 1 - it;
            iz = iv[0];
            iy = iv[1];
            iw = iv[2];
            iu = iv[3];
            h8 = iv[4];
            h7 = iv[5];
            h6 = iv[6];
            h5 = iv[7];
            il = iv[8];
            ik = iv[9];
            ij = iv[10];
            ii = iv[11];
            ie = ib * ib * ig + it;
            id = ia * ib * ig + h9 * ih;
            ic = h9 * ib * ig - ia * ih;
            ir = ib * ia * ig - h9 * ih;
            iq = ia * ia * ig + it;
            ip = h9 * ia * ig + ib * ih;
            h4 = ib * h9 * ig + ia * ih;
            h3 = ia * h9 * ig - ib * ih;
            h2 = h9 * h9 * ig + it;
            im[0] = iz * ie + h8 * id + il * ic;
            im[1] = iy * ie + h7 * id + ik * ic;
            im[2] = iw * ie + h6 * id + ij * ic;
            im[3] = iu * ie + h5 * id + ii * ic;
            im[4] = iz * ir + h8 * iq + il * ip;
            im[5] = iy * ir + h7 * iq + ik * ip;
            im[6] = iw * ir + h6 * iq + ij * ip;
            im[7] = iu * ir + h5 * iq + ii * ip;
            im[8] = iz * h4 + h8 * h3 + il * h2;
            im[9] = iy * h4 + h7 * h3 + ik * h2;
            im[10] = iw * h4 + h6 * h3 + ij * h2;
            im[11] = iu * h4 + h5 * h3 + ii * h2;
            if (iv !== im) {
                im[12] = iv[12];
                im[13] = iv[13];
                im[14] = iv[14];
                im[15] = iv[15]
            }
            return im
        };
        e.rotateX = function(h1, h8, h7) {
            var id = Math.sin(h7),
            h6 = Math.cos(h7),
            ic = h8[4],
            ib = h8[5],
            ia = h8[6],
            h9 = h8[7],
            h5 = h8[8],
            h4 = h8[9],
            h3 = h8[10],
            h2 = h8[11];
            if (h8 !== h1) {
                h1[0] = h8[0];
                h1[1] = h8[1];
                h1[2] = h8[2];
                h1[3] = h8[3];
                h1[12] = h8[12];
                h1[13] = h8[13];
                h1[14] = h8[14];
                h1[15] = h8[15]
            }
            h1[4] = ic * h6 + h5 * id;
            h1[5] = ib * h6 + h4 * id;
            h1[6] = ia * h6 + h3 * id;
            h1[7] = h9 * h6 + h2 * id;
            h1[8] = h5 * h6 - ic * id;
            h1[9] = h4 * h6 - ib * id;
            h1[10] = h3 * h6 - ia * id;
            h1[11] = h2 * h6 - h9 * id;
            return h1
        };
        e.rotateY = function(h5, ic, ib) {
            var id = Math.sin(ib),
            ia = Math.cos(ib),
            h4 = ic[0],
            h3 = ic[1],
            h2 = ic[2],
            h1 = ic[3],
            h9 = ic[8],
            h8 = ic[9],
            h7 = ic[10],
            h6 = ic[11];
            if (ic !== h5) {
                h5[4] = ic[4];
                h5[5] = ic[5];
                h5[6] = ic[6];
                h5[7] = ic[7];
                h5[12] = ic[12];
                h5[13] = ic[13];
                h5[14] = ic[14];
                h5[15] = ic[15]
            }
            h5[0] = h4 * ia - h9 * id;
            h5[1] = h3 * ia - h8 * id;
            h5[2] = h2 * ia - h7 * id;
            h5[3] = h1 * ia - h6 * id;
            h5[8] = h4 * id + h9 * ia;
            h5[9] = h3 * id + h8 * ia;
            h5[10] = h2 * id + h7 * ia;
            h5[11] = h1 * id + h6 * ia;
            return h5
        };
        e.rotateZ = function(h5, h8, h7) {
            var id = Math.sin(h7),
            h6 = Math.cos(h7),
            h4 = h8[0],
            h3 = h8[1],
            h2 = h8[2],
            h1 = h8[3],
            ic = h8[4],
            ib = h8[5],
            ia = h8[6],
            h9 = h8[7];
            if (h8 !== h5) {
                h5[8] = h8[8];
                h5[9] = h8[9];
                h5[10] = h8[10];
                h5[11] = h8[11];
                h5[12] = h8[12];
                h5[13] = h8[13];
                h5[14] = h8[14];
                h5[15] = h8[15]
            }
            h5[0] = h4 * h6 + ic * id;
            h5[1] = h3 * h6 + ib * id;
            h5[2] = h2 * h6 + ia * id;
            h5[3] = h1 * h6 + h9 * id;
            h5[4] = ic * h6 - h4 * id;
            h5[5] = ib * h6 - h3 * id;
            h5[6] = ia * h6 - h2 * id;
            h5[7] = h9 * h6 - h1 * id;
            return h5
        };
        e.fromRotationTranslation = function(ie, ic, ia) {
            var h7 = ic[0],
            h6 = ic[1],
            h5 = ic[2],
            h8 = ic[3],
            ig = h7 + h7,
            h1 = h6 + h6,
            h9 = h5 + h5,
            h4 = h7 * ig,
            h3 = h7 * h1,
            h2 = h7 * h9,
            id = h6 * h1,
            ib = h6 * h9,
            ij = h5 * h9,
            ik = h8 * ig,
            ii = h8 * h1,
            ih = h8 * h9;
            ie[0] = 1 - (id + ij);
            ie[1] = h3 + ih;
            ie[2] = h2 - ii;
            ie[3] = 0;
            ie[4] = h3 - ih;
            ie[5] = 1 - (h4 + ij);
            ie[6] = ib + ik;
            ie[7] = 0;
            ie[8] = h2 + ii;
            ie[9] = ib - ik;
            ie[10] = 1 - (h4 + id);
            ie[11] = 0;
            ie[12] = ia[0];
            ie[13] = ia[1];
            ie[14] = ia[2];
            ie[15] = 1;
            return ie
        };
        e.fromQuat = function(ib, h8) {
            var h5 = h8[0],
            h4 = h8[1],
            h3 = h8[2],
            h6 = h8[3],
            ic = h5 + h5,
            h1 = h4 + h4,
            h7 = h3 + h3,
            h2 = h5 * ic,
            ia = h4 * ic,
            h9 = h4 * h1,
            ij = h3 * ic,
            ii = h3 * h1,
            ig = h3 * h7,
            ih = h6 * ic,
            ie = h6 * h1,
            id = h6 * h7;
            ib[0] = 1 - h9 - ig;
            ib[1] = ia + id;
            ib[2] = ij - ie;
            ib[3] = 0;
            ib[4] = ia - id;
            ib[5] = 1 - h2 - ig;
            ib[6] = ii + ih;
            ib[7] = 0;
            ib[8] = ij + ie;
            ib[9] = ii - ih;
            ib[10] = 1 - h2 - h9;
            ib[11] = 0;
            ib[12] = 0;
            ib[13] = 0;
            ib[14] = 0;
            ib[15] = 1;
            return ib
        };
        e.frustum = function(h5, h2, ia, h1, h9, h7, h6) {
            var h8 = 1 / (ia - h2),
            h4 = 1 / (h9 - h1),
            h3 = 1 / (h7 - h6);
            h5[0] = (h7 * 2) * h8;
            h5[1] = 0;
            h5[2] = 0;
            h5[3] = 0;
            h5[4] = 0;
            h5[5] = (h7 * 2) * h4;
            h5[6] = 0;
            h5[7] = 0;
            h5[8] = (ia + h2) * h8;
            h5[9] = (h9 + h1) * h4;
            h5[10] = (h6 + h7) * h3;
            h5[11] = -1;
            h5[12] = 0;
            h5[13] = 0;
            h5[14] = (h6 * h7 * 2) * h3;
            h5[15] = 0;
            return h5
        };
        e.perspective = function(h4, h3, h2, h5, h1) {
            var h7 = 1 / Math.tan(h3 / 2),
            h6 = 1 / (h5 - h1);
            h4[0] = h7 / h2;
            h4[1] = 0;
            h4[2] = 0;
            h4[3] = 0;
            h4[4] = 0;
            h4[5] = h7;
            h4[6] = 0;
            h4[7] = 0;
            h4[8] = 0;
            h4[9] = 0;
            h4[10] = (h1 + h5) * h6;
            h4[11] = -1;
            h4[12] = 0;
            h4[13] = 0;
            h4[14] = (2 * h1 * h5) * h6;
            h4[15] = 0;
            return h4
        };
        e.ortho = function(h4, h2, ia, h1, h8, h7, h6) {
            var h5 = 1 / (h2 - ia),
            h9 = 1 / (h1 - h8),
            h3 = 1 / (h7 - h6);
            h4[0] = -2 * h5;
            h4[1] = 0;
            h4[2] = 0;
            h4[3] = 0;
            h4[4] = 0;
            h4[5] = -2 * h9;
            h4[6] = 0;
            h4[7] = 0;
            h4[8] = 0;
            h4[9] = 0;
            h4[10] = 2 * h3;
            h4[11] = 0;
            h4[12] = (h2 + ia) * h5;
            h4[13] = (h8 + h1) * h9;
            h4[14] = (h6 + h7) * h3;
            h4[15] = 1;
            return h4
        };
        e.lookAt = function(ig, io, ip, h7) {
            var im, il, ij, h3, h2, h1, ia, h9, h8, ih, ik = io[0],
            ii = io[1],
            ie = io[2],
            h6 = h7[0],
            h5 = h7[1],
            h4 = h7[2],
            id = ip[0],
            ic = ip[1],
            ib = ip[2];
            if (Math.abs(ik - id) < h0 && Math.abs(ii - ic) < h0 && Math.abs(ie - ib) < h0) {
                return e.identity(ig)
            }
            ia = ik - id;
            h9 = ii - ic;
            h8 = ie - ib;
            ih = 1 / Math.sqrt(ia * ia + h9 * h9 + h8 * h8);
            ia *= ih;
            h9 *= ih;
            h8 *= ih;
            im = h5 * h8 - h4 * h9;
            il = h4 * ia - h6 * h8;
            ij = h6 * h9 - h5 * ia;
            ih = Math.sqrt(im * im + il * il + ij * ij);
            if (!ih) {
                im = 0;
                il = 0;
                ij = 0
            } else {
                ih = 1 / ih;
                im *= ih;
                il *= ih;
                ij *= ih
            }
            h3 = h9 * ij - h8 * il;
            h2 = h8 * im - ia * ij;
            h1 = ia * il - h9 * im;
            ih = Math.sqrt(h3 * h3 + h2 * h2 + h1 * h1);
            if (!ih) {
                h3 = 0;
                h2 = 0;
                h1 = 0
            } else {
                ih = 1 / ih;
                h3 *= ih;
                h2 *= ih;
                h1 *= ih
            }
            ig[0] = im;
            ig[1] = h3;
            ig[2] = ia;
            ig[3] = 0;
            ig[4] = il;
            ig[5] = h2;
            ig[6] = h9;
            ig[7] = 0;
            ig[8] = ij;
            ig[9] = h1;
            ig[10] = h8;
            ig[11] = 0;
            ig[12] = -(im * ik + il * ii + ij * ie);
            ig[13] = -(h3 * ik + h2 * ii + h1 * ie);
            ig[14] = -(ia * ik + h9 * ii + h8 * ie);
            ig[15] = 1;
            return ig
        };
        e.str = function(h1) {
            return "mat4(" + h1[0] + ", " + h1[1] + ", " + h1[2] + ", " + h1[3] + ", " + h1[4] + ", " + h1[5] + ", " + h1[6] + ", " + h1[7] + ", " + h1[8] + ", " + h1[9] + ", " + h1[10] + ", " + h1[11] + ", " + h1[12] + ", " + h1[13] + ", " + h1[14] + ", " + h1[15] + ")"
        };
        e.frob = function(h1) {
            return (Math.sqrt(Math.pow(h1[0], 2) + Math.pow(h1[1], 2) + Math.pow(h1[2], 2) + Math.pow(h1[3], 2) + Math.pow(h1[4], 2) + Math.pow(h1[5], 2) + Math.pow(h1[6], 2) + Math.pow(h1[6], 2) + Math.pow(h1[7], 2) + Math.pow(h1[8], 2) + Math.pow(h1[9], 2) + Math.pow(h1[10], 2) + Math.pow(h1[11], 2) + Math.pow(h1[12], 2) + Math.pow(h1[13], 2) + Math.pow(h1[14], 2) + Math.pow(h1[15], 2)))
        };
        hW.mat4 = e
    })(window);
    function dd() {
        this.result = {
            bkData: [],
            eleData: [[], [], [], [], [], [], [], [], []],
            tileLabels: []
        }
    }
    D.extend(dd.prototype, {
        createLayer: function(T, i) {
            var e = this.result.bkData;
            i = i || {};
            if (!e[T]) {
                e[T] = [[], [], []]
            }
            e[T].dataType = i.dataType || 2;
            e[T].png8 = i.png8 || false;
            e[T].clipTile = i.clipTile || false
        },
        removeLayer: function(i) {
            var e = this.result.bkData;
            e[i] = null
        },
        getResult: function() {
            return this.result
        },
        setData: function(hV, hU, hW) {
            var e = this.result.bkData;
            var T = e[hU] ? e[hU][hW] : null;
            if (!T) {
                return
            }
            for (var hT = 0; hT < T.length; hT++) {
                if (T[hT].key && T[hT].key === hV.key) {
                    T[hT] = hV;
                    return
                }
            }
            T.push(hV)
        },
        setLabelData: function(e) {
            this.result.tileLabels = e
        },
        getLabelData: function() {
            return this.result.tileLabels
        },
        setOverlayData: function(i, e) {
            if (!this.result.eleData[e]) {
                return
            }
            this.result.eleData[e] = i
        },
        clearLabelOverlayData: function() {
            this.result.eleData[2] = [];
            this.result.eleData[3] = [];
            this.result.eleData[4] = []
        },
        clearData: function(hT) {
            var e = this.result.bkData;
            if (typeof hT === "number") {
                if (e[hT]) {
                    e[hT][0] = [];
                    e[hT][1] = [];
                    e[hT][2] = []
                }
                return
            }
            for (var T = 0; T < e.length; T++) {
                if (!e[T]) {
                    continue
                }
                e[T][0] = [];
                e[T][1] = [];
                e[T][2] = []
            }
        },
        sortThumbData: function(i) {
            var e = this.result.bkData;
            var T = e[i];
            if (!T) {
                return
            }
            if (T[0] && T[0].length > 0) {
                T[0].sort(function(hU, hT) {
                    return hU.tileInfo.useZoom - hT.tileInfo.useZoom
                })
            }
        }
    });
    var fi = (function() {
        var h3 = new Int8Array(4);
        var T = new Int32Array(h3.buffer, 0, 1);
        var hY = new Float32Array(h3.buffer, 0, 1);
        function h5(ic) {
            T[0] = ic;
            return hY[0]
        }
        function i(ic) {
            hY[0] = ic;
            return T[0]
        }
        function hZ(ic) {
            var ie = (ic[3] << 24 | ic[2] << 16 | ic[1] << 8 | ic[0]);
            var id = h5(ie & 4278190079);
            return id
        }
        var hU = 0;
        var hX = 1;
        var h1 = 2;
        var h9 = 0;
        var h6 = 1;
        var h4 = 2;
        var hV = 9;
        function h2(ic, id) {
            var ie;
            if (id % 2 === 0) {
                ie = [ - ic[1], ic[0]]
            } else {
                ie = [ic[1], -ic[0]]
            }
            return ie
        }
        function e(ic, id, ie) {
            var ig = h2(ic, id);
            var ih;
            if (ie === hX) {
                return ig
            } else {
                if (id === 4 || id === 5) {
                    ih = [ig[0] - ic[0], ig[1] - ic[1]]
                } else {
                    ih = [ig[0] + ic[0], ig[1] + ic[1]]
                }
                if (ie === hU) {
                    vec2.normalize(ih, ih)
                }
                return ih
            }
        }
        function h8(id, ic) {
            return Math.sqrt(Math.pow(id[0] - ic[0], 2) + Math.pow(id[1] - ic[1], 2))
        }
        function hT(ih, ig, ie, ic) {
            var id = vec2.dot(ih, ig);
            if (ie === h4 || ie === h6) {
                if ((ic === 0 || ic === 1) && id > 0) {
                    return true
                } else {
                    if ((ic === 2 || ic === 3) && id < 0) {
                        return true
                    }
                }
            }
            if ((ic === 0 || ic === 1) && id < 0) {
                return true
            } else {
                if ((ic === 2 || ic === 3) && id > 0) {
                    return true
                }
            }
            return false
        }
        function h0(id, ij, il) {
            var ik = h2(id, ij);
            var ig;
            var ii = id;
            var ih = il;
            var io = [];
            vec2.normalize(io, [ii[0] + ih[0], ii[1] + ih[1]]);
            var im = vec2.dot(ik, [ - io[1], io[0]]);
            if (Math.abs(im) < 0.1) {
                im = 1
            }
            var ie = 1 / im;
            ig = [ - io[1] * ie, io[0] * ie];
            var ic = vec2.dot(id, ig);
            if (ic < 0) {
                vec2.negate(ig, ig)
            }
            return {
                cos2: ic,
                offset: ig
            }
        }
        function ib(id, ij, il, ic) {
            var ik = h2(id, ij);
            var ii;
            var ih;
            var ig;
            if (ij === 0 || ij === 1) {
                ii = il;
                ih = id
            } else {
                ii = id;
                ih = il
            }
            if (!ii || !ih) {
                return ik
            }
            var io = [ii[0] + ih[0], ii[1] + ih[1]];
            if (io[0] === 0 && io[1] === 0) {
                vec2.normalize(io, ih)
            } else {
                vec2.normalize(io, io)
            }
            var ip = hT(io, ik, ic, ij);
            if (ip) {
                return ik
            }
            var im = vec2.dot(ik, [ - io[1], io[0]]);
            if (Math.abs(im) < 0.1) {
                im = 1
            }
            var ie = 1 / im;
            ig = [ - io[1] * ie, io[0] * ie];
            return ig
        }
        function ia(ip, iq, ii, ih, ir, io, ig, ij, ie, im) {
            var il;
            var id = 0;
            var ic = false;
            il = io.length / hV - 1;
            hW(iq[0], ip[0], ii[0], ir, ih, 4, ij, ie, undefined, io, im);
            il++;
            id++;
            hW(iq[0], ip[0], ii[0], ir, ih, 5, ij, ie, undefined, io, im);
            il++;
            id++;
            for (var ik = 0; ik < ip.length; ik++) {
                hW(iq[ik], ip[ik], ii[ik], ir, ih, 0, ij, ie, ip[ik - 1], io, im);
                h7(ig, ++il, ++id, ic);
                hW(iq[ik], ip[ik], ii[ik], ir, ih, 1, ij, ie, ip[ik - 1], io, im);
                h7(ig, ++il, ++id, ic);
                hW(iq[ik + 1], ip[ik], ii[ik + 1], ir, ih, 2, ij, ie, ip[ik + 1], io, im);
                h7(ig, ++il, ++id, ic);
                hW(iq[ik + 1], ip[ik], ii[ik + 1], ir, ih, 3, ij, ie, ip[ik + 1], io, im);
                h7(ig, ++il, ++id, ic);
                if (ih === h6 && ik !== ip.length - 1) {
                    hW(iq[ik + 1], ip[ik], ii[ik + 1], ir, ih, 8, ij, ie, ip[ik + 1], io, im);
                    h7(ig, ++il, ++id, ic);
                    ic = ic ? false: true
                }
            }
            hW(iq[iq.length - 1], ip[ip.length - 1], ii[iq.length - 1], ir, ih, 6, ij, ie, undefined, io, im);
            h7(ig, ++il, ++id, ic);
            hW(iq[iq.length - 1], ip[ip.length - 1], ii[iq.length - 1], ir, ih, 7, ij, ie, undefined, io, im);
            h7(ig, ++il, ++id, ic)
        }
        function hW(ir, ig, ik, it, ie, il, ii, id, ip, io, im) {
            var iq = il % 2 === 0 ? 1 : -1;
            var ij;
            if (il === 4 || il === 5 || il === 6 || il === 7) {
                ij = e(ig, il, it)
            } else {
                if (il === 0 || il === 1 || il === 2 || il === 3) {
                    ij = ib(ig, il, ip, ie)
                } else {
                    if (il === 8) {
                        var ih = h0(ig, il, ip);
                        ij = ih.offset;
                        vec2.normalize(ij, ij);
                        var ic = ih.cos2;
                        if (ic < 0) {
                            iq = -iq
                        }
                    }
                }
            }
            io[io.length] = ir[0] * 10;
            io[io.length] = ir[1] * 10;
            io[io.length] = ij[0] * id * 10;
            io[io.length] = ij[1] * id * 10;
            io[io.length] = ii;
            io[io.length] = iq;
            io[io.length] = 0;
            io[io.length] = im || 0;
            io[io.length] = ik
        }
        function h7(ih, ie, ic, ig) {
            var id;
            if (ic % 2 === 0) {
                if (ig) {
                    ih[ih.length] = ie - 2;
                    ih[ih.length] = ie - 1;
                    ih[ih.length] = ie
                } else {
                    ih[ih.length] = ie - 1;
                    ih[ih.length] = ie - 2;
                    ih[ih.length] = ie
                }
            } else {
                if (ig) {
                    ih[ih.length] = ie - 1;
                    ih[ih.length] = ie - 2;
                    ih[ih.length] = ie
                } else {
                    ih[ih.length] = ie - 2;
                    ih[ih.length] = ie - 1;
                    ih[ih.length] = ie
                }
            }
        }
        return {
            getVertexCount: function(id, ic) {
                if (ic === h6) {
                    return id * 5 - 2
                } else {
                    return id * 4
                }
            },
            buildData: function(ip, ie, iq, il, ic, ii, id, im) {
                var io = [];
                var ik = 0;
                var ih = [0];
                for (var ij = 0; ij < ip.length; ij++) {
                    if (ij > 0) {
                        ik += h8(ip[ij], ip[ij - 1]);
                        ih.push(ik * 10)
                    }
                    if (ij !== ip.length - 1) {
                        var ig = [ip[ij + 1][0] - ip[ij][0], ip[ij + 1][1] - ip[ij][1]];
                        var ir = [];
                        if (ig[0] === 0 && ig[1] === 0) {
                            ir = [0, 0]
                        } else {
                            vec2.normalize(ir, ig)
                        }
                        io[io.length] = [ir[0], ir[1]]
                    }
                }
                return ia(io, ip, ih, ie, iq, il, ic, hZ(ii), id, im)
            },
            toTileSolidLineVertices: function(ih, id) {
                var ie = new Float32Array(ih.length / hV * 5);
                var ic = new Int16Array(ie.buffer);
                var ij = 0;
                var ig = 0;
                for (var ii = 0; ii < ih.length; ii += hV) {
                    ic[ij] = ~~ih[ii];
                    ic[ij + 1] = ~~ih[ii + 1];
                    ic[ij + 2] = ~~ih[ii + 2];
                    ic[ij + 3] = ~~ih[ii + 3];
                    ie[ig + 2] = ih[ii + 4];
                    ic[ij + 6] = ih[ii + 5];
                    ic[ij + 7] = id ? id: 0;
                    ic[ij + 8] = ih[ii + 7];
                    ic[ij + 9] = 0;
                    ij += 10;
                    ig += 5
                }
                return ie
            }
        }
    })();
    var eI = 1;
    var gu = 2;
    var fT = {
        drawIndex: 0,
        devicePixelRatio: a7(),
        zoomState: 1,
        curViewTilesInfo: null,
        iconSetImg: null,
        LAST_CALC_ZOOM: -1,
        LAST_LOAD_VECTOR_ZOOM_CHANGE: false,
        lastCollisionTestTime: 0,
        remove: function() {
            this.tileCache.clear()
        },
        initDrawData: function() {
            this.drawIndex = this.zIndex;
            this.map._featureMgr.createLayer(this.drawIndex, {
                dataType: this.dataType,
                png8: this.png8,
                clipTile: this.clipTile
            })
        },
        destroyDrawData: function() {
            this.map._featureMgr.removeLayer(this.drawIndex)
        },
        setZIndex: function(e) {
            this.zIndex = e
        },
        getTileKey: function(e, hT) {
            hT = hT || {};
            var i = typeof hT.useZoom === "number" ? hT.useZoom: e.useZoom;
            var T = e.style || this.mapStyleId || "default";
            return this.mapType + "_" + T + "_" + e.col + "_" + e.row + "_" + e.zoom + "_" + i
        },
        getTileRenderDataKey: function(i) {
            var T = i.col;
            var hT = i.zoom;
            var e = i.baseTileSize;
            T = d5.calcLoopParam(T, hT, e).col;
            return this.mapType + "_" + T + "_" + i.row + "_" + hT + "_" + i.useZoom
        },
        getTileUnits: function(e) {
            var hT = this.map;
            var T = b7[hT.getMapType()];
            var i = T.baseUnits * Math.pow(2, T.zoomLevelBase - e);
            return i
        },
        getTilesUrl: function(hU, h3, h4) {
            var i = hU.x;
            var h5 = hU.y;
            var h0 = aE("ditu", "normal");
            var hW = h0.ver;
            var hX = h0.udt;
            i = d5.calcLoopParam(i, h3, h4).col;
            var h2 = b7.B_NORMAL_MAP.vectorTileUrls;
            var hV = Math.abs(i + h5) % h2.length;
            var h1 = h2[hV];
            if (window.offLineIPAddress) {
                h2 = [window.offLineIPAddress + "pvd/"];
                h1 = h2[0]
            }
            var T = "x=" + i + "&y=" + h5 + "&z=" + Math.floor(h3);
            var hZ = this.devicePixelRatio > 1 ? "&scaler=2": "";
            var hY = "&textimg=1";
            if (this.map.config.textRenderType === "canvas") {
                hY = "&textimg=0"
            }
            var hT = this.map.config.style;
            if (typeof hT === "string" && hT !== "default") {
                T += "&styleId=" + e4.mapStyleNameIdPair[hT]
            }
            T += "&styles=pl" + hY + hZ + "&v=" + hW + "&udt=" + hX + "&json=0";
            var e = h1 + "?qt=vtile&param=" + window.encodeURIComponent(gm(T));
            return e
        },
        getRasterTilesUrl: function(T, hV, hT) {
            var hU = b7[this.map.mapType];
            var i = this.map.config.style;
            var e = hU.tileUrls[Math.abs(hV + T) % hU.tileUrls.length] + "?qt=tile&x=" + T + "&y=" + hV + "&z=" + hT + ((i === "default" || typeof i !== "string") ? "": ("&styleId=" + e4.mapStyleNameIdPair[i])) + "&styles=pl&udt=" + this.normalUdt + "&scaler=" + this.scaler + "&p=1";
            e = e.replace(/-(\d+)/gi, "M$1");
            return e
        },
        getZoomState: function() {
            var T = this.map;
            var i = T.getZoom();
            var e = i - this.lastZoom;
            if (e > 0) {
                this.zoomState = 1
            } else {
                if (e < 0) {
                    this.zoomState = -1
                }
            }
            this.lastZoom = i;
            return this.zoomState
        },
        releaseOutViewTileData: function(e) {
            var hU = this.map._workerMgr.releasePendingData(e);
            for (var hT = 0,
            T = hU.length; hT < T; hT++) {
                var hV = this.getTileKey(hU[hT]);
                this.tileCache.removeData(hV)
            }
        },
        loadLayerData: function(e, hT, i) {
            this.hasZoomChange = i;
            this.curViewTilesInfo = e;
            this.mapStyleId = this.map.getMapStyleId();
            this.releaseOutViewTileData(e);
            var T = this.getZoomState();
            if (this.dataType === gu) {
                if (hT) {
                    this.getVectorLayerDataFromCache(e, T)
                } else {
                    this.loadVectorLayerData(e)
                }
            } else {
                this.loadRasterLayerData(e, hT)
            }
        },
        getVectorLayerDataFromCache: function(hY, h8) {
            this.map.temp.isPermitSpotOver = false;
            this.tileLabels = [];
            if (this.baseLayer === true) {
                var h2 = this.map._customLabelMgr.virtualTile;
                if (h2 && h2.label) {
                    this.tileLabels.push(h2.label)
                }
            }
            this.thumbCache = {};
            var h9 = -1;
            for (var h5 = 0,
            h3 = hY.length; h5 < h3; h5++) {
                var h6 = hY[h5];
                var hU = h6.col;
                var hV = h6.row;
                var T = h6.zoom;
                var h4 = this._getTileTexImgKey(h6);
                var hT = h6.useZoom;
                h9 = T;
                var hW = this.getTileKey(h6);
                var ib = this.tileCache.getData(hW);
                if (ib && ib.status === "ready") {
                    var ic = ib;
                    this.map._featureMgr.setData(ib, this.drawIndex, 2);
                    if (ib.label) {
                        if (ib.label.status === "ready") {
                            ib.label.tileInfo = ib.tileInfo;
                            this.tileLabels.push(ib.label);
                            if (ib.label.textureSources && ib.label.textureSources[hT] && this.map._webglMapScene) {
                                var ia = this.map._webglMapScene._painter;
                                if (!ia._labelTextureAtlasOffset[h4]) {
                                    ia._addToAsyncJob(ib.label.textureSources[hT])
                                }
                            }
                        } else {
                            if (ib.label.status !== "processing") {
                                this.processLabelData(ib)
                            }
                        }
                    }
                } else {
                    var h7 = {
                        tileInfo: h6,
                        dataType: gu,
                        key: hW
                    };
                    this.map._featureMgr.setData(h7, this.drawIndex, 2);
                    if (this.useThumbData) {
                        this.setThumbData(hU, hV, T, hT, h8)
                    }
                }
            }
            this.tileLabels.labelZoom = h9;
            this.updateLabels(h8);
            var hZ = this.map.getZoom();
            var hX = Math.floor(hZ);
            var h1 = hZ - hX;
            var h0 = Math.floor(this.LAST_CALC_ZOOM);
            var e = this.LAST_CALC_ZOOM - h0;
            var id = false;
            if (this.hasZoomChange) {
                if (Math.abs(hZ - this.LAST_CALC_ZOOM) >= 0.5) {
                    id = true
                } else {
                    if (h1 < 0.5 && e >= 0.5) {
                        id = true
                    } else {
                        if (h1 >= 0.5 && e < 0.5) {
                            id = true
                        }
                    }
                }
                if (id) {
                    this.cacheDataCollideLabels(0)
                }
                this.LAST_CALC_ZOOM = hZ
            } else {
                if (this.tileLabels.length > 0) {
                    this.cacheDataCollideLabels(D.Browser.ie ? 50 : 30)
                }
            }
        },
        loadVectorLayerData: function(hZ) {
            this.map.temp.isPermitSpotOver = false;
            var hY = this;
            function hX(i, h0) {
                var h2 = hY.tileCache.getData(h0);
                if (!h2) {
                    return
                }
                if (!i || i.error) {
                    var h1 = new bc("ontileloaderror");
                    i = i || {};
                    h1.error = i.error || "";
                    h1.message = i.message || "";
                    hY.map.fire(h1);
                    h2.status = "init";
                    h2.reloadTimer = setTimeout(function() {
                        if (h2.retry < 3) {
                            h2.retry++;
                            h2.status = "loading";
                            hY.loadVectorTileData(i.tileInfo, hX)
                        } else {
                            hY.tileCache.removeData(h0)
                        }
                    },
                    4000);
                    hY.map._featureMgr.clearData(hY.drawIndex);
                    hY._checkTilesLoaded();
                    hY.getVectorLayerDataFromCache(hY.curViewTilesInfo, hY.getZoomState());
                    return
                }
                if (h2.reloadTimer) {
                    clearTimeout(h2.reloadTimer);
                    h2.reloadTimer = null
                }
                hY.callbackDataQueue.push([i, h0]);
                if (hY.processDataTimer) {
                    return
                }
                hY.processDataTimer = setTimeout(function() {
                    while (hY.callbackDataQueue.length > 0) {
                        var h3 = hY.callbackDataQueue.shift();
                        hY.vectorTileDataCbk(h3[0], h3[1]);
                        hY._checkTilesLoaded()
                    }
                    hY.map._featureMgr.clearData(hY.drawIndex);
                    hY.getVectorLayerDataFromCache(hY.curViewTilesInfo, hY.getZoomState());
                    hY.processDataTimer = null
                },
                200)
            }
            for (var hW = 0,
            hU = hZ.length; hW < hU; hW++) {
                var T = hZ[hW];
                var hV = this.getTileKey(T);
                var e = this.tileCache.getData(hV);
                if (!e) {
                    e = {
                        status: "init",
                        tileInfo: T,
                        dataType: gu,
                        key: hV,
                        retry: 0
                    }
                }
                if (e.status !== "ready" && e.status !== "loading") {
                    this.numLoading++;
                    e.status = "loading";
                    this.tileCache.setData(hV, e);
                    var hT = this.getProcessedLabelZoom(T);
                    if (hT) {
                        T.processedLabelZooms = hT
                    }
                    this.loadVectorTileData(T, hX)
                }
            }
        },
        setThumbData: function(i, hU, hT, e, T) {
            if (T === 1) {
                if (this._findParentZoomTile(i, hU, hT, e, 8) === false) {
                    this._findChildZoomTile(i, hU, hT, e, 3)
                }
            } else {
                if (T === -1) {
                    if (this._findChildZoomTile(i, hU, hT, e, 3) === false) {
                        this._findParentZoomTile(i, hU, hT, e, 8)
                    }
                }
            }
            this.map._featureMgr.sortThumbData(this.drawIndex)
        },
        _findParentZoomTile: function(hW, h5, h4, hU, hZ) {
            var hV = b7[this.getMapType()];
            var T = hV.minDataZoom;
            var e = hW;
            var h2 = h5;
            var h0 = h4;
            var h1 = hU;
            for (var hY = 1; hY <= hZ; hY++) {
                var hT = this.tileType.getParentTile(e, h2, h0, h1, T);
                if (hT === null) {
                    continue
                }
                var h3 = this.getTileKey(hT);
                var hX = this.tileCache.getData(h3);
                if (hX && hX.status === "ready") {
                    if (this.thumbCache[h3]) {
                        continue
                    }
                    this.map._featureMgr.setData(hX, this.drawIndex, 0);
                    this.thumbCache[h3] = true;
                    return true
                }
                e = hT.col;
                h2 = hT.row;
                h0 = hT.zoom;
                h1 = hT.useZoom
            }
            return false
        },
        _findChildZoomTile: function(hX, hZ, e, hU, h8) {
            var h6 = b7[this.getMapType()];
            var h2 = h6.maxDataZoom;
            var hW = hX;
            var hY = hZ;
            var h0 = e;
            var hT = hU;
            var hV = true;
            for (var h5 = 1; h5 <= h8; h5++) {
                var h3 = false;
                var T = this.tileType.getChildTiles(hW, hY, h0, hT, h2, h5);
                if (!T) {
                    continue
                }
                for (var h4 = 0; h4 < T.length; h4++) {
                    var h1 = this.getTileKey(T[h4]);
                    var h7 = this.tileCache.getData(h1);
                    if (h7 && h7.status === "ready") {
                        if (!this.thumbCache[h1]) {
                            this.map._featureMgr.setData(h7, this.drawIndex, 1);
                            this.thumbCache[h1] = true
                        }
                        h3 = true
                    } else {
                        hV = false
                    }
                }
                if (h3) {
                    break
                }
            }
            return hV
        },
        loadVectorTileData: function(i, hU) {
            var T = i.col;
            var hY = i.row;
            var hW = i.zoom;
            var hX = i.baseTileSize;
            var e = this.getTilesUrl(new ek(T, hY), hW, hX);
            if (!e) {
                return
            }
            var hV = this.getTileKey(i);
            bz(this.map);
            if (!this.processData) {
                this.map._workerMgr.loadTileData(e, i, hV, hU);
                return
            }
            var hU = "cbk" + hV.replace(/-/g, "_");
            var hT = this;
            bp[hU] = function(hZ) {
                var h0 = (function(h1) {
                    return function() {
                        h1.tileInfo = i;
                        var h7 = hT.processData(h1);
                        if (!h7.road) {
                            return
                        }
                        var h4 = {
                            tileInfo: i,
                            renderData: {
                                base: []
                            },
                            status: "ready",
                            key: hV,
                            mapType: hT.mapType
                        };
                        var ia = [];
                        var id = [];
                        for (var h6 = 0; h6 < h7.road.length; h6++) {
                            var h9 = h7.road[h6];
                            var h8 = -1;
                            for (var h5 = 0; h5 < h9.length; h5++) {
                                var ib = h9[h5];
                                var ic = [];
                                if (ia.length / 7 + ib[0].length / 2 > 65536) {
                                    h4.renderData.base.push({
                                        type: "line",
                                        data: [fi.toTileSolidLineVertices(ia, 4000), new Uint16Array(id)]
                                    });
                                    ia = [];
                                    id = []
                                }
                                for (var h3 = 0; h3 < ib[0].length; h3 += 2) {
                                    ic[ic.length] = [ib[0][h3], ib[0][h3 + 1]]
                                }
                                var h2 = ib[3];
                                fi.buildData(ic, ib[1], ib[2], ia, id, h2, ib[4], h6 + 20, false)
                            }
                            h4.renderData.base.push({
                                type: "line",
                                data: [fi.toTileSolidLineVertices(ia, 4000), new Uint16Array(id)]
                            })
                        }
                        hT.tileCache.setData(hV, h4);
                        hT.map._featureMgr.clearData(hT.drawIndex);
                        hT.getVectorLayerDataFromCache(hT.curViewTilesInfo, hT.getZoomState());
                        hT.map.dispatchEvent(new bc("onrefresh"))
                    }
                })(hZ);
                hT.map.jobScheduler.addJob(h0);
                delete bp[hU]
            };
            e += "&fn=" + encodeURIComponent(eB + "." + hU);
            ho.load(e)
        },
        vectorTileDataCbk: function(hT, hU) {
            var hY = new bc("ontileloaded");
            hY.perfStat = hT.perfStat || [];
            var e = this.map;
            e.fire(hY);
            var i = hT.tileInfo;
            var T = i.col;
            var h3 = i.row;
            var h2 = i.zoom;
            var h1 = i.baseTileSize;
            var hW = this.tileCache.getData(hU);
            if (!hW) {
                return
            }
            if (!this.showLabel) {
                hT.label = null
            }
            hW.renderData = hT;
            hW.tileInfo = i;
            var hV = d5.calcLoopParam(T, h2, h1);
            var hZ = hV.geoOffsetX;
            hW.tileInfo.loopOffsetX = hZ;
            hW.status = "ready";
            hW.mapType = this.mapType;
            this.tileCache.setData(hU, hW);
            hW.label = hT.label;
            hT.label = null;
            if (hT.indoorData && e._indoorMgr) {
                e._indoorMgr.setData(hT.indoorData)
            }
            var hX = "id_" + T + "_" + h3 + "_" + h2;
            if (!this.curViewTilesInfo[hX]) {
                e.fire(new bc("ontilenotinview"));
                return
            }
            this.processLabelData(hW);
            if (hT.indoorData && e._indoorMgr && e._indoorMgr.currentUid) {
                this._refreshIndoorData(e._indoorMgr.currentUid, e._indoorMgr.currentFloor)
            }
            var h0 = new bc("onrefresh");
            h0.source = "webgllayer";
            this.map.dispatchEvent(h0)
        },
        _refreshIndoorData: function(h1, h0) {
            var h3 = this.map._indoorMgr.getIndoorData(h1);
            var h6 = h3.tileKeys;
            var h4 = Math.floor(this.map.getZoom());
            for (var hY = 0; hY < h6.length; hY++) {
                var hV = h6[hY];
                var hX = this.tileCache.getData(hV);
                if (!hX) {
                    continue
                }
                var h5 = hX.renderData;
                h5.indoorBase = [];
                h5.indoorBaseContour = [];
                h5.indoorBorder3D = [];
                h5.indoorArea3D = [];
                hX.label.indoorLabel = [];
                this.labelProcessor.clearCollisionCache(hX.label);
                for (var hZ in h5.indoorData) {
                    if (hZ === "tileInfo") {
                        continue
                    }
                    var e = h5.indoorData[hZ];
                    var hU = e.defaultFloor;
                    if (hZ === h1) {
                        hU = h0;
                        e.currentFloor = h0
                    }
                    if (e.floors[hU]) {
                        if (e.floors[hU].base) {
                            for (var hW = 0; hW < e.floors[hU].base.length; hW++) {
                                h5.indoorBase.push(e.floors[hU].base[hW])
                            }
                        }
                        if (e.floors[hU].contour) {
                            for (var hW = 0; hW < e.floors[hU].contour.length; hW++) {
                                h5.indoorBaseContour.push(e.floors[hU].contour[hW])
                            }
                        }
                        if (e.floors[hU].indoorBorder3D) {
                            h5.indoorBorder3D.push(e.floors[hU].indoorBorder3D)
                        }
                        if (e.floors[hU].area3D) {
                            h5.indoorArea3D.push(e.floors[hU].area3D)
                        }
                        if (e.floors[hU].pois) {
                            hX.label.indoorLabel = hX.label.indoorLabel.concat(e.floors[hU].pois)
                        }
                    }
                }
                this.updateAllIconsTextureCoords(hX);
                var h2 = this;
                this.labelProcessor.loadIconImages(hX,
                function(i) {
                    h2.updateAllIconsTextureCoords(i)
                });
                var hT = hV.split("_");
                var T = parseInt(hT[hT.length - 1], 10);
                if (T !== h4) {
                    continue
                }
                h2.map._featureMgr.setData(hX, this.drawIndex, 2)
            }
            this.dataBackCollideLabels();
            this.map.dispatchEvent(new bc("onrefresh"))
        },
        _removeIndoorData: function(i) {
            if (!i.indoorData) {
                return
            }
            for (var e in i.indoorData) {
                if (e === "tileInfo") {
                    continue
                }
                this.map._indoorMgr.removeData(e, i.key)
            }
        },
        getProcessedLabelZoom: function(hT) {
            var hU = dj.baseZoomInfo[hT.zoom];
            if (!hU) {
                return false
            }
            var T = [];
            for (var hV = 0; hV < hU.length; hV++) {
                var hW = this.getTileKey(hT, {
                    useZoom: hU[hV]
                });
                var e = this.tileCache.getData(hW);
                if (e && e.status === "ready" && e.label && e.label.status === "ready") {
                    T.push(hU[hV])
                }
            }
            if (T.length) {
                return T
            } else {
                return false
            }
        },
        getSameZoomDataFromCache: function(T) {
            var hT = dj.baseZoomInfo[T.zoom];
            for (var hU = 0; hU < hT.length; hU++) {
                var hV = this.getTileKey(T, {
                    useZoom: hT[hU]
                });
                if (T.useZoom === hT[hU]) {
                    continue
                }
                var e = this.tileCache.getData(hV);
                if (e && e.status === "ready" && e.label && e.label.status === "ready") {
                    return e
                }
            }
            return false
        },
        hasSameLabelData: function(hT, T) {
            for (var e = 0; e < T.length; e++) {
                if (T[e].key === hT) {
                    return true
                }
            }
            return false
        },
        getDataByFloorName: function(T, hT) {
            for (var e = 0; e < T.length; e++) {
                if (T[e].floorName === hT) {
                    return T[e]
                }
            }
            return null
        },
        mergeIndoorLabelData: function(hY, e) {
            for (var hW in hY) {
                if (hW === "tileInfo") {
                    continue
                }
                if (e[hW]) {
                    var T = hY[hW].floors;
                    var hZ = e[hW].floors;
                    for (var hU = 0; hU < T.length; hU++) {
                        var hT = T[hU];
                        var hX = hT.floorName;
                        var hV = this.getDataByFloorName(hZ, hX);
                        if (hV) {
                            if (hV.pois) {
                                hV.pois = hV.pois.concat(hT.pois);
                                hT.pois = hV.pois
                            } else {
                                hV.pois = hT.pois
                            }
                        }
                    }
                }
            }
        },
        mergeSameZoomLabelData: function(hW) {
            var hU = hW.label;
            if (!hU) {
                return
            }
            var e = hW.tileInfo;
            var hV = this.getSameZoomDataFromCache(e);
            if (!hV) {
                return
            }
            var hT = hV.label;
            if (!hT) {
                return
            }
            for (var T = 0; T < hU.fixedLabel.length; T++) {
                if (!this.hasSameLabelData(hU.fixedLabel[T].key, hT.fixedLabel)) {
                    hT.hasNewData = true;
                    hT.fixedLabel.push(hU.fixedLabel[T])
                }
            }
            for (var T = 0; T < hU.lineLabel.length; T++) {
                if (!this.hasSameLabelData(hU.lineLabel[T].key, hT.lineLabel)) {
                    hT.hasNewData = true;
                    hT.lineLabel.push(hU.lineLabel[T])
                }
            }
            for (var T = 0; T < hU.indoorLabel.length; T++) {
                if (!this.hasSameLabelData(hU.indoorLabel[T].key, hT.indoorLabel)) {
                    hT.hasNewData = true;
                    hT.indoorLabel.push(hU.indoorLabel[T])
                }
            }
            hW.label = hT;
            if (hV.renderData.indoorData && hW.renderData.indoorData) {
                this.mergeIndoorLabelData(hW.renderData.indoorData, hV.renderData.indoorData)
            }
        },
        processLabelData: function(hV) {
            if (!hV.label) {
                return
            }
            if (hV.label.status === "processing") {
                return
            }
            hV.label.status = "processing";
            var hT = this;
            hT.updateAllIconsTextureCoords(hV);
            this.labelProcessor.loadIconImages(hV,
            function(hW) {
                hT.updateAllIconsTextureCoords(hW)
            });
            if (this.map.config.textRenderType === "canvas") {
                var e = this.labelProcessor.drawLabelsOnCanvas(hV,
                function(hY, hZ) {
                    var hX = hV.tileInfo;
                    if (!bp.customStyleInfo) {
                        hT.mergeSameZoomLabelData(hV)
                    }
                    if (hY) {
                        if (!hV.label.textureHeights) {
                            hV.label.textureHeights = []
                        }
                        hV.label.textureHeights[hX.useZoom] = hY.height
                    }
                    if (hZ) {
                        if (!hV.label.indoorTextureHeights) {
                            hV.label.indoorTextureHeights = []
                        }
                        hV.label.indoorTextureHeights[hX.useZoom] = hZ.height
                    }
                    var hW = hT._getTileTexImgKey(hX);
                    hT._doWorkAfterLabelImageLoad(hV, hY, hZ, hW)
                });
                return
            }
            var T = hV.label.textImageBitmap || hV.label.textImgStr;
            var hU = hV.label.indoorTextImageBitmap || hV.label.indoorTextImgStr;
            this.labelProcessor.loadImgByStr(T, hU,
            function i(h1, hZ) {
                var hY = hV.label.textureHeight;
                var h2 = hV.label.indoorTextureHeight;
                hV.label.textureHeight = undefined;
                hV.label.indoorTextureHeight = undefined;
                var hX = hV.tileInfo;
                hT.mergeSameZoomLabelData(hV);
                var h0 = hV.label;
                h0.textImgStr = "";
                h0.indoorTextImgStr && (h0.indoorTextImgStr = "");
                if (!h0.textureHeights) {
                    h0.textureHeights = []
                }
                h0.textureHeights[hX.useZoom] = hY;
                if (!h0.indoorTextureHeights) {
                    h0.indoorTextureHeights = []
                }
                h0.indoorTextureHeights[hX.useZoom] = h2;
                var hW = hT._getTileTexImgKey(hX);
                hT._doWorkAfterLabelImageLoad(hV, h1, hZ, hW)
            })
        },
        _getTileTexImgKey: function(i) {
            var T = i.style || this.mapStyleId || "default";
            var e = T + "_" + i.col + "_" + i.row + "_" + i.zoom;
            if (this.map.config.textRenderType === "canvas") {
                e += "_" + i.useZoom
            }
            return e
        },
        _doWorkAfterLabelImageLoad: function(hX, hV, hT, i) {
            var hW = this;
            var hU = hX.label;
            hU.tileInfo = hX.tileInfo;
            hU.status = "ready";
            if (hV || hT) {
                var e = hU.tileInfo;
                if (hV) {
                    hV.id = i;
                    if (!hU.textureSources) {
                        hU.textureSources = []
                    }
                    hU.textureSources[e.useZoom] = hV
                }
                if (hT) {
                    hT.id = i + "_indoor";
                    if (!hU.indoorTextureSources) {
                        hU.indoorTextureSources = []
                    }
                    hU.indoorTextureSources[e.useZoom] = hT
                }
                if (hW.map._webglMapScene) {
                    var T = hW.map._webglMapScene._painter;
                    if (hV) {
                        T._addToAsyncJob(hU.textureSources[e.useZoom])
                    }
                }
            }
            if (hX.custom !== true) {
                hW.tileLabels.push(hU)
            }
            if (hW.collisionTimer) {
                return
            }
            hW.collisionTimer = setTimeout(function() {
                hW.dataBackCollideLabels();
                hW.collisionTimer = null
            },
            300)
        },
        _updateIconTextureCoords: function(hX, T) {
            if (!hX) {
                return
            }
            var hW = this.map;
            for (var hT = 0; hT < hX.length; hT++) {
                var hV = hX[hT];
                if (!hV.iconPos) {
                    continue
                }
                if (hW._webglMapScene) {
                    var e = hW._webglMapScene._painter;
                    var hU = T + "_" + hV.iconPos.iconType;
                    hV.iconPos.texcoord = e._iconTextureAtlasCoords[hU] || null
                }
            }
        },
        updateAllIconsTextureCoords: function(hU) {
            if (this.map.viewAnimationTime) {
                return
            }
            if (hU) {
                if (hU.label) {
                    var i = hU.tileInfo.style;
                    this._updateIconTextureCoords(hU.label.fixedLabel, i);
                    this._updateIconTextureCoords(hU.label.indoorLabel, i)
                }
            } else {
                var hT = this.tileCache.getAllData();
                for (var T in hT) {
                    var e = hT[T].data;
                    if (e.status === "ready" && e.label) {
                        var i = e.tileInfo.style;
                        this._updateIconTextureCoords(e.label.fixedLabel, i);
                        this._updateIconTextureCoords(e.label.indoorLabel, i)
                    }
                }
            }
            this.updateLabels();
            this.map.dispatchEvent(new bc("onrefresh"))
        },
        cacheDataCollideLabels: function(T) {
            var hU = this;
            var i = this.map._featureMgr;
            function hT() {
                hU.cacheLabelTimer = null;
                var hV;
                var hW = hU.map.getTilt();
                var hX = hU.map.getHeading() % 360;
                if (hU.tileLabels.length === 0 || (hU.tileLabels.length === 1 && hU.tileLabels[0].tileInfo.zoom === 0)) {
                    hV = i.getLabelData();
                    if (hV.length > 0) {
                        hV = hU.labelProcessor.collisionTest(hV, -1)
                    }
                } else {
                    if (hW || hX) {
                        if (this._collisionTimer) {
                            if (!hW) {
                                clearTimeout(this._collisionTimer)
                            } else {
                                if (Date.now() - hU.lastCollisionTestTime > 500) {
                                    hU.lastCollisionTestTime = Date.now()
                                } else {
                                    clearTimeout(this._collisionTimer)
                                }
                            }
                        }
                        this._collisionTimer = setTimeout(function() {
                            hV = hU.labelProcessor.collisionTest(hU.tileLabels);
                            if (hV) {
                                i.setLabelData(hV)
                            }
                            hU.updateLabels();
                            hU.map.dispatchEvent(new bc("onrefresh"));
                            hU._collisionTimer = null
                        },
                        60);
                        return
                    } else {
                        hV = hU.labelProcessor.getCachedLabels(hU.tileLabels)
                    }
                }
                if (hV) {
                    i.setLabelData(hV)
                }
                hU.updateLabels();
                hU.map.dispatchEvent(new bc("onrefresh"))
            }
            if (!T) {
                clearTimeout(hU.cacheLabelTimer);
                hT()
            } else {
                if (hU.cacheLabelTimer) {
                    return
                }
                hU.cacheLabelTimer = setTimeout(function e() {
                    hT()
                },
                T)
            }
        },
        dataBackCollideLabels: function() {
            var i = this;
            if ((i.tileLabels && i.tileLabels.length === 0)) {
                return
            }
            var e;
            i.labelProcessor.calcLabelsCollision(i.tileLabels);
            e = i.labelProcessor.getCachedLabels(i.tileLabels);
            if (e) {
                i.map._featureMgr.setLabelData(e)
            }
            i.updateLabels();
            i.map.dispatchEvent(new bc("onrefresh"));
            if (f6()) {
                this.labelProcessor._refreshSpotData()
            }
        },
        updateLabels: function(hU) {
            var hV = this.map;
            var i = hV._featureMgr;
            var T = i.getLabelData();
            if (T.length > 0) {
                var hT = hV.getZoom();
                if (T.labelZoom - hT < 3) {
                    this.labelProcessor.updateLabels(T);
                    var e = this.labelProcessor.fixDataFormat(T);
                    i.setOverlayData(e[0], 2);
                    i.setOverlayData(e[1], 3);
                    i.setOverlayData(e[2], 4)
                } else {
                    i.clearLabelOverlayData()
                }
                hV.temp.isPermitSpotOver = false;
                this.labelProcessor.curSpotAdded = false
            }
        },
        loadRasterLayerData: function(hT, hX) {
            if (hX) {
                for (var hV = 0,
                hU = hT.length; hV < hU; hV++) {
                    var T = hT[hV];
                    var hY = this.getTileKey(T);
                    var e = this.tileCache.getData(hY);
                    if (e && e.status === "ready") {
                        this.map._featureMgr.setData(e, this.drawIndex, 2)
                    }
                }
                return
            }
            for (var hV = 0,
            hU = hT.length; hV < hU; hV++) {
                var T = hT[hV];
                var hY = this.getTileKey(T);
                var e = this.tileCache.getData(hY);
                if (!e) {
                    this.tileCache.setData(hY, {});
                    var hW = this;
                    this.loadRasterTileData(T,
                    function(i, hZ) {
                        hW.rasterTileDataCbk(i, hZ)
                    })
                }
            }
        },
        loadRasterTileData: function(i, e) {
            var hU = i.col;
            var hX = i.row;
            var hV = i.zoom;
            var hT = this.getTilesUrl(new ek(hU, hX), hV);
            if (!hT) {
                return
            }
            var hW = this.getTileKey(i);
            var T = this.loadTileImage(hT, hW, e);
            T.tileInfo = i
        },
        loadTileImage: function(hT, T, e) {
            var i = new Image();
            i.crossOrigin = "anonymous";
            i.onload = function() {
                e && e(this, T)
            };
            i.onerror = function() {
                e && e(null, T)
            };
            i.src = hT;
            return i
        },
        rasterTileDataCbk: function(hV, hT) {
            if (!hV) {
                this.tileCache.removeData(hT);
                return
            }
            var i = hV.tileInfo;
            var T = i.col;
            var h1 = i.row;
            var h0 = i.zoom;
            var e = this.tileCache.getData(hT);
            if (!e) {
                return
            }
            var hU = d5.calcLoopParam(T, h0);
            var hY = hU.geoOffsetX;
            hV.tileInfo.loopOffsetX = hY;
            e.textureSource = hV;
            e.dataType = eI;
            e.tileInfo = i;
            e.renderData = {
                vertexAll: [0, 0, 0, 0, 0, 256, 0, 0, 1, 0, 256, 256, 0, 1, 1, 0, 0, 0, 0, 0, 256, 256, 0, 1, 1, 0, 256, 0, 0, 1]
            };
            e.status = "ready";
            this.tileCache.setData(hT, e);
            var hW = "id_" + T + "_" + h1 + "_" + h0;
            var hX = false;
            if (this.curViewTilesInfo[hW]) {
                e.dataType = eI;
                e.png8 = this.png8 || false;
                this.map._featureMgr.setData(e, this.drawIndex, 2);
                hX = true
            }
            if (hX) {
                var hZ = new bc("onrefresh");
                hZ.source = "webgllayer";
                this.map.dispatchEvent(hZ)
            }
        },
        _checkTilesLoaded: function() {
            this.numLoading--;
            if (this.map.firstTileLoad === false) {
                this.map.dispatchEvent(new bc("onfirsttilesloaded"));
                this.map.firstTileLoad = true
            }
            var e = this;
            if (this.numLoading === 0) {
                if (this._checkLoadedTimer) {
                    clearTimeout(this._checkLoadedTimer);
                    this._checkLoadedTimer = null
                }
                this._checkLoadedTimer = setTimeout(function() {
                    if (e.numLoading === 0) {
                        e.map.dispatchEvent(new bc("ontilesloaded"))
                    }
                    e._checkLoadedTimer = null
                },
                60)
            }
        },
        isClickableLabel: function(e) {
            if (e.isDel) {
                return false
            }
            if (e.zoom > 9 && !e.guid) {
                return false
            }
            if (e.zoom <= 9 && !e.name && !e.guid) {
                return false
            }
            return true
        }
    };
    var ca = 5;
    var dY = 4;
    var hs = 3;
    var fg = 2;
    var hM = 1;
    var d1 = 0;
    function w(e) {
        this._ratio = a7();
        this._iconCache = {};
        this._map = e;
        this._drawingCanvasPool = [];
        this._drawingCanvasHeight = 4096
    }
    D.extend(w.prototype, {
        _loadIcons: function(i, hX) {
            var hV = 0;
            var hU = this;
            var T = this._map.config.style;
            for (var hW in i) {
                hV++;
                var e = new Image();
                e.id = hW;
                e.crossOrigin = "anonymous";
                e.onload = function() {
                    hU._iconCache[this.id].loaded = true;
                    hV--;
                    if (hV === 0) {
                        hX()
                    }
                    this.onload = null
                };
                e.onerror = function() {
                    hU._iconCache[this.id] = null;
                    hV--;
                    if (hV === 0) {
                        hX()
                    }
                    this.onerror = null
                };
                var hT = e4.getIconSetPath(T) + hW + ".png";
                e.src = hT;
                this._iconCache[hW] = {
                    loaded: false,
                    image: e
                }
            }
        },
        _getEmptyDrawingCanvas: function() {
            for (var T = 0; T < this._drawingCanvasPool.length; T++) {
                if (this._drawingCanvasPool[T]._free === true) {
                    this._drawingCanvasPool[T]._free = false;
                    return this._drawingCanvasPool[T]
                }
            }
            var e = this._createNewDrawingCanvas();
            this._drawingCanvasPool.push(e);
            e._free = false;
            return e
        },
        _createNewDrawingCanvas: function() {
            var e = U("canvas");
            e.width = 512;
            e.height = this._drawingCanvasHeight;
            e._free = true;
            e._id = bp.getGUID();
            var i = e.getContext("2d");
            i.textBaseline = "bottom";
            i.lineJoin = "round";
            return e
        },
        drawLabelsOnCanvas: function(ib, hT) {
            var h1 = ib.label.fixedLabel.slice(0);
            var h7 = ib.label.lineLabel.slice(0);
            var T = ib.label.indoorLabel.slice(0);
            if (h1.length === 0 && h7.length === 0 && T.length === 0) {
                hT();
                return
            }
            var hW = function(ih, i) {
                return ih.styleId - i.styleId
            };
            h1.sort(hW);
            h7.sort(hW);
            T.sort(hW);
            var ia = {};
            var e = this._getEmptyDrawingCanvas();
            var h6 = e.getContext("2d");
            h6.clearRect(0, 0, e.width, e.height);
            var ie = 0;
            var h2 = null;
            var hV = 0;
            if (h1.length > 0) {
                while (hV < h1.length && !h1[hV].styleText[0]) {
                    hV++
                }
                if (h1[hV] && h1[hV].styleText[0]) {
                    h2 = h1[hV].styleText[0].fontSize + h1[hV].styleText[0].haloSize * 2
                }
            }
            if (h2 === null && T.length > 0) {
                hV = 0;
                while (hV < T.length && !T[hV].styleText[0]) {
                    hV++
                }
                if (T[hV] && T[hV].styleText[0]) {
                    h2 = T[hV].styleText[0].fontSize + T[hV].styleText[0].haloSize * 2
                }
            }
            if (h2 === null && h7.length > 0) {
                hV = 0;
                while (hV < h7.length && !h7[hV].styleText[0]) {
                    hV++
                }
                if (h7[hV] && h7[hV].styleText[0]) {
                    h2 = h7[hV].styleText[0].fontSize + h7[hV].styleText[0].haloSize * 2
                }
            }
            if (h2 === null || isNaN(h2)) {
                hT();
                return
            }
            var hY = 0;
            var hX = h2;
            var h4 = {};
            var ig = 0;
            var h5 = [];
            for (var h9 = 0; h9 < h1.length; h9++) {
                var h0 = h1[h9];
                var h3 = h0.name;
                var h8 = h0.styleText;
                if (!h3 || h8.length === 0) {
                    continue
                }
                var hU = h0.icon;
                if (h0.textOnIcon && (!this._iconCache[hU] || this._iconCache[hU].loaded === false)) {
                    h5.push(h0);
                    ig++;
                    if (!h4[hU]) {
                        h4[hU] = true
                    }
                    continue
                }
                var ic = this._drawEachText(h6, h0, ie, hY, hX, h2, ia);
                if (!ic) {
                    continue
                }
                hY = ic.curX;
                hX = ic.curY;
                h2 = ic.curLineHeight;
                ie = ic.styleId
            }
            var ic = this._drawEachTypeOfLabels(h6, T, ie, hY, hX, h2, ia);
            ie = ic.curStyleId;
            hY = ic.curX;
            hX = ic.curY;
            h2 = ic.curLineHeight;
            var ic = this._drawEachTypeOfLabels(h6, h7, ie, hY, hX, h2, ia);
            ie = ic.curStyleId;
            hY = ic.curX;
            hX = ic.curY;
            h2 = ic.curLineHeight;
            if (ig > 0) {
                var id = this;
                this._loadIcons(h4,
                function() {
                    ic = id._drawEachTypeOfLabels(h6, h5, ie, hY, hX, h2, ia);
                    ie = ic.curStyleId;
                    hY = ic.curX;
                    hX = ic.curY;
                    h2 = ic.curLineHeight;
                    var i = id._generateEachLabelCanvas(e, hX, h1, h7, T, ib);
                    hT(i[0], i[1])
                });
                return
            }
            var hZ = this._generateEachLabelCanvas(e, hX, h1, h7, T, ib);
            hT(hZ[0], hZ[1])
        },
        drawCustomLabelsOnCanvas: function(hW, h2) {
            if (hW.length === 0) {
                h2();
                return
            }
            var T = 0;
            var e = (hW[0].style.fontSize + (hW[0].style.haloSize || 0) * 2) || 0;
            var hT = e;
            var hY = this._getEmptyDrawingCanvas();
            var h3 = hY.getContext("2d");
            h3.clearRect(0, 0, hY.width, hY.height);
            var hZ = {};
            var h1 = -1;
            for (var hU = 0; hU < hW.length; hU++) {
                if (!hW[hU].name) {
                    continue
                }
                var h0 = this._drawEachText(h3, hW[hU], h1, T, e, hT, hZ);
                if (!h0) {
                    continue
                }
                T = h0.curX;
                e = h0.curY;
                hT = h0.curLineHeight;
                h1 = h0.styleId
            }
            var hV = e;
            var hX = this._copyToNewCanvas(hY, hV);
            for (var hU = 0; hU < hW.length; hU++) {
                if (!hW[hU].name && hW[hU].style.iconSize) {
                    this._addFixedLabelBounds(hW[hU]);
                    continue
                }
                if (!hW[hU].textSize) {
                    continue
                }
                this._updateFixedLabelCoords(hW[hU], hV);
                this._addFixedLabelBounds(hW[hU])
            }
            h2(hX)
        },
        _drawEachTypeOfLabels: function(h2, hW, h0, hT, T, hU, hY) {
            for (var hV = 0; hV < hW.length; hV++) {
                var hX = hW[hV];
                var h1 = hX.name;
                var e = hX.styleText;
                if (!h1 || e.length === 0) {
                    continue
                }
                var hZ = this._drawEachText(h2, hX, h0, hT, T, hU, hY);
                if (!hZ) {
                    continue
                }
                hT = hZ.curX;
                T = hZ.curY;
                hU = hZ.curLineHeight;
                h0 = hZ.styleId;
                if (hZ.curY > this._drawingCanvasHeight) {
                    return {
                        curX: hT,
                        curY: T,
                        curLineHeight: hU,
                        curStyleId: h0
                    }
                }
            }
            return {
                curX: hT,
                curY: T,
                curLineHeight: hU,
                curStyleId: h0
            }
        },
        _drawIndoorTextLabelOnCanvas: function(hU) {
            var e = this._getEmptyDrawingCanvas();
            var h1 = e.getContext("2d");
            h1.clearRect(0, 0, e.width, e.height);
            var h9 = 0;
            var h0 = null;
            var hZ = 0;
            var hX;
            var h6 = {};
            var h5 = [];
            for (var hV in hU) {
                if (hV === "tileInfo") {
                    continue
                }
                var hT = hU[hV];
                var h4 = hT.defaultFloor;
                var hY = hT.floors;
                for (var h3 = 0; h3 < hY.length; h3++) {
                    if (h3 === h4) {
                        continue
                    }
                    var h7 = hY[h3];
                    if (!h7.pois) {
                        continue
                    }
                    var hW = h7.pois;
                    for (var h2 = 0; h2 < hW.length; h2++) {
                        if (h0 === null && hW[h2].styleText[0]) {
                            h0 = hW[h2].styleText[0].fontSize + hW[h2].styleText[0].haloSize * 2;
                            hX = h0
                        }
                        h5.push(hW[h2])
                    }
                }
            }
            if (h0 === null) {
                return null
            }
            h5.sort(function(ia, i) {
                return i.rank - ia.rank || ia.styleId - i.styleId
            });
            var h8 = this._drawEachTypeOfLabels(h1, h5, h9, hZ, hX, h0, h6);
            h9 = h8.curStyleId;
            hZ = h8.curX;
            hX = h8.curY;
            h0 = h8.curLineHeight;
            var T = this._copyToNewCanvas(e, hX);
            return T
        },
        _updateIndoorLabelsCoords: function(h0, h1) {
            for (var hZ in h0) {
                if (hZ === "tileInfo") {
                    continue
                }
                var e = h0[hZ];
                var hV = e.defaultFloor;
                var hW = e.floors;
                for (var hX = 0; hX < hW.length; hX++) {
                    if (hX === hV) {
                        continue
                    }
                    var T = hW[hX];
                    if (!T.pois) {
                        continue
                    }
                    var hU = T.pois;
                    for (var hT = 0; hT < hU.length; hT++) {
                        var hY = hU[hT];
                        if (hY.name && (!hY.textSize || hY.textSize.length === 0)) {
                            hU.splice(hT, 1);
                            hT--;
                            continue
                        }
                        this._updateFixedLabelCoords(hY, h1);
                        this._addFixedLabelBounds(hY)
                    }
                }
            }
        },
        _generateEachLabelCanvas: function(hW, hV, hX, e, hZ, T) {
            hV = Math.min(hV, this._drawingCanvasHeight);
            var hY = this._copyToNewCanvas(hW, hV);
            var hT = null;
            if (T.renderData.indoorData) {
                hT = this._drawIndoorTextLabelOnCanvas(T.renderData.indoorData);
                if (hT) {
                    this._updateIndoorLabelsCoords(T.renderData.indoorData, hT.height)
                }
            }
            for (var hU = 0; hU < hX.length; hU++) {
                if (!hX[hU].textSize) {
                    continue
                }
                this._updateFixedLabelCoords(hX[hU], hV);
                this._addFixedLabelBounds(hX[hU])
            }
            for (var hU = 0; hU < hZ.length; hU++) {
                if (!hZ[hU].textSize) {
                    continue
                }
                this._updateFixedLabelCoords(hZ[hU], hV);
                this._addFixedLabelBounds(hZ[hU])
            }
            for (var hU = 0; hU < e.length; hU++) {
                this._updateLineLabelCoords(e[hU], hV)
            }
            return [hY, hT]
        },
        _copyToNewCanvas: function(T, i) {
            if (i === 0) {
                return null
            }
            var hT = U("canvas");
            hT.width = T.width;
            hT.height = i;
            var e = hT.getContext("2d");
            e.drawImage(T, 0, 0, 512, i, 0, 0, 512, i);
            hT._id = T._id;
            T._free = true;
            return hT
        },
        _drawEachText: function(ib, hX, T, id, ic, il, hU) {
            var ik = hX.name;
            var h2 = hX.styleText ? hX.styleText[0] : hX.style;
            if (!h2) {
                return null
            }
            var h5 = h2.fontSize;
            var iq = h2.fontWeight;
            var iE = h2.haloSize || 0;
            if (!h6) {}
            if (h2.fontRgba) {
                var iK = h2.fontRgba[3] / 255;
                var h1 = [];
                h1[3] = iK;
                for (var iJ = 0; iJ < 3; iJ++) {
                    h1[iJ] = h2.fontRgba[iJ]
                }
            }
            if (h2.haloRgba) {
                var iK = h2.haloRgba[3] / 255;
                var h8 = [];
                h8[3] = iK;
                for (var iJ = 0; iJ < 3; iJ++) {
                    h8[iJ] = h2.haloRgba[iJ]
                }
            }
            var iy = h1 ? "rgba(" + h1.join(",") + ")": h2.color;
            var hW = h8 ? "rgba(" + h8.join(",") + ")": h2.strokeColor;
            var iG = hX.styleId || 0;
            if (iE > 4) {
                iE = 4
            }
            var im = [];
            var ia = [];
            var ii = 0;
            if (hU && !hU[iG]) {
                hU[iG] = {}
            }
            var h4 = h5 + iE * 2;
            var io = h4;
            if (hX.containDescendings) {
                io += 4
            }
            if (iE === 0) {
                io += 2
            }
            if (hX.textOnIcon) {
                io = Math.max(io, hX.iconSize[1])
            }
            if (iG !== T || io > il) {
                T = iG;
                if (iq >= 10 && iq % 10 === 0) {
                    ib.font = iq * 10 + " " + h5 + "px sans-serif"
                } else {
                    ib.font = h5 + "px sans-serif"
                }
                if (io > il) {
                    var ij = io - il;
                    il += ij;
                    ic += ij
                }
                if (iE > 0) {
                    ib.lineWidth = iE * 2;
                    ib.strokeStyle = hW
                }
                ib.fillStyle = iy
            }
            if (hX.type === "line") {
                var hZ = ik.split("");
                for (var iH = 0; iH < hZ.length; iH++) {
                    var iA = hZ[iH];
                    var ie;
                    var ir;
                    if (hU[iG][iA]) {
                        var h6 = hU[iG][iA];
                        ie = h6.displaySize;
                        ir = h6.curWordPosition
                    } else {
                        var hT = Math.ceil(ib.measureText(iA).width);
                        if (id + hT > 512) {
                            id = 0;
                            ic += io;
                            il = io
                        }
                        if (ic > this._drawingCanvasHeight) {
                            return {
                                curX: id,
                                curY: ic,
                                curLineHeight: il,
                                styleId: iG
                            }
                        }
                        var iB = id;
                        if (iE > 0) {
                            hT += iE;
                            iB -= Math.round(iE / 2);
                            ib.strokeText(iA, id, ic)
                        }
                        ib.fillText(iA, id, ic);
                        var ix = [hT, io];
                        ie = [Math.round(ix[0] / 2), Math.round(ix[1] / 2)];
                        ir = [iB, ic - io];
                        hU[iG][iA] = {
                            displaySize: ie,
                            curWordPosition: ir,
                            totalHeight: ii
                        };
                        id += hT + 2
                    }
                    im.push(ie);
                    ia.push(ir)
                }
                ii = Math.round(im[0][1])
            } else {
                if (hU[iG][ik]) {
                    var h6 = hU[iG][ik];
                    im = h6.textSize;
                    ia = h6.labelImagePosition;
                    ii = h6.totalHeight
                } else {
                    var h7 = ik.split("\\");
                    if (h7.length > 1 && hX.textOnIcon) {
                        var iI = 0;
                        var iF = 0;
                        var iL = [];
                        var ig = 8;
                        for (var iH = 0; iH < h7.length; iH++) {
                            var ik = h7[iH];
                            var h3 = Math.ceil(ib.measureText(ik).width);
                            if (h3 > iI) {
                                iI = h3
                            }
                            iL.push(Math.round(h3 / 2));
                            iF += io
                        }
                        var h0 = iI + 2 * ig;
                        var iD = iF + 2 * ig;
                        if (id + h0 > 512) {
                            id = 0;
                            ic += il
                        }
                        ic += iF - io + 2 * ig;
                        var iw = id;
                        var ih = ic - iD;
                        var e = Math.round(h0 / 2);
                        var h9 = this._iconCache[hX.icon].image;
                        this.drawStretchedIcon(ib, h9, [iw, ih], ig, iI, iF);
                        for (var iH = 0; iH < h7.length; iH++) {
                            var ik = h7[iH];
                            var iC = iw + (e - iL[iH]);
                            var iz = ih + 4 + (iH + 1) * io;
                            ib.fillText(ik, iC, iz)
                        }
                        im.push([Math.round(h0 / 2), Math.round(iD / 2)]);
                        ia.push([iw, ih]);
                        id += h0;
                        il = iD;
                        ii = Math.round(iD / 2)
                    } else {
                        for (var iH = 0; iH < h7.length; iH++) {
                            var ik = h7[iH];
                            var h3 = Math.ceil(ib.measureText(ik).width);
                            var h0 = h3;
                            var hV = 0;
                            if (hX.textOnIcon) {
                                hV = 10;
                                h0 += hV * 2;
                                if (hX.styleId === 519) {
                                    h0 = hX.iconSize[0];
                                    hV = Math.round((h0 - h3) / 2)
                                }
                            }
                            if (id + h0 > 512) {
                                id = 0;
                                ic += io;
                                il = io
                            }
                            if (ic > this._drawingCanvasHeight) {
                                return {
                                    curX: id,
                                    curY: ic,
                                    curLineHeight: il,
                                    styleId: iG
                                }
                            }
                            var iw = id;
                            var ih = ic - io;
                            var iv = id;
                            var iu = ic;
                            if (hX.containDescendings) {
                                iu -= 4
                            }
                            if (hX.textOnIcon) {
                                var ip = false;
                                var h9 = this._iconCache[hX.icon].image;
                                var it = hX.iconSize.concat([]);
                                if (h4 > it[1]) {
                                    it[1] = h4;
                                    ip = true
                                }
                                if (h3 > it[0]) {
                                    it[0] = h3;
                                    ip = true
                                }
                                if (hX.styleId === 519) {
                                    ib.drawImage(h9, 0, 0, it[0], it[1], iw, ih, it[0], it[1])
                                } else {
                                    if (ip) {
                                        this.drawStretchedIcon(ib, h9, [iw, ih], hV, h3, it[1])
                                    } else {
                                        this.draw3StretchedIcon(ib, h9, [iw, ih], hV, h3, it[1])
                                    }
                                }
                                iv += hV;
                                if (hX.iconSize[1] > h4) {
                                    iu -= (hX.iconSize[1] - h4) / 2 - 1
                                }
                                h0 += 1
                            }
                            if (iE > 0) {
                                h0 += iE;
                                iw -= Math.round(iE / 2);
                                ih += Math.round(iE / 2);
                                if (iG === 71028) {
                                    io -= 2
                                }
                                if (iG === 32) {
                                    io -= 2
                                }
                                ib.strokeText(ik, iv, iu)
                            }
                            ib.fillText(ik, iv, iu);
                            var hY = [h0, io];
                            var ie = [Math.round(hY[0] / 2), Math.round(hY[1] / 2)];
                            im.push(ie);
                            ia.push([iw, ih]);
                            ii += Math.round(ie[1]);
                            id += h0
                        }
                    }
                    hU[iG][ik] = {
                        textSize: im,
                        labelImagePosition: ia,
                        totalHeight: ii
                    }
                }
            }
            hX.textSize = im;
            hX.labelImagePosition = ia;
            hX.totalHeight = ii;
            return {
                curX: id,
                curY: ic,
                curLineHeight: il,
                styleId: iG
            }
        },
        drawStretchedIcon: function(e, T, hT, hW, hX, i) {
            var hV = hT[0];
            var hU = hT[1];
            e.drawImage(T, 0, 0, hW, hW, hV, hU, hW, hW);
            e.drawImage(T, hW, 0, 1, hW, hV + hW, hU, hX, hW);
            e.drawImage(T, T.width - hW, 0, hW, hW, hV + hX + hW, hU, hW, hW);
            e.drawImage(T, 0, hW, hW, 1, hV, hU + hW, hW, i);
            e.drawImage(T, hW, hW, 1, 1, hV + hW, hU + hW, hX, i);
            e.drawImage(T, T.width - hW, hW, hW, 1, hV + hX + hW, hU + hW, hW, i);
            e.drawImage(T, 0, T.height - hW, hW, hW, hV, hU + i + hW, hW, hW);
            e.drawImage(T, hW, T.height - hW, 1, hW, hV + hW, hU + i + hW, hX, hW);
            e.drawImage(T, T.width - hW, T.height - hW, hW, hW, hV + hX + hW, hU + i + hW, hW, hW)
        },
        draw3StretchedIcon: function(e, i, T, hV, hX, hW) {
            var hU = T[0];
            var hT = T[1];
            e.drawImage(i, 0, 0, hV, i.height, hU, hT, hV, i.height);
            e.drawImage(i, hV, 0, 1, i.height, hU + hV, hT, hX, i.height);
            e.drawImage(i, i.width - hV, 0, hV, i.height, hU + hV + hX, hT, hV, i.height)
        },
        _updateFixedLabelCoords: function(hU, h9) {
            if (h9 === 0) {
                return
            }
            var h4 = [];
            var ih = [];
            var ii = 0;
            var h7 = hU.totalHeight;
            var ir = hU.textSize.length;
            var hV = hU.direction;
            if (typeof hV !== "number") {
                hV = 0
            }
            for (var ij = 0; ij < ir; ij++) {
                var ia = hU.labelImagePosition[ij];
                var h8 = hU.textSize[ij];
                var h6 = ia[0];
                var hT = ia[1];
                var hW = h8[0];
                var h1 = h8[1];
                var h3 = 0;
                var ig = 0;
                if (typeof hU.textMargin === "number") {
                    ig = hU.textMargin
                }
                var h2;
                var e;
                var hY = 0;
                var h5 = 0;
                if (!hU.iconPos) {
                    if (!hU.custom) {
                        hV = dY
                    }
                } else {
                    hY = hU.iconPos.width;
                    h5 = hU.iconPos.height
                }
                switch (hV) {
                case hs:
                    var T = h7 / 2 - h1 + h3 * (ir - 1) / 2;
                    h2 = Math.round( - hY / 2 - hW - ig);
                    e = Math.round(T - ii - h3 * ij);
                    break;
                case hM:
                    var T = h7 / 2 - h1 + h3 * (ir - 1) / 2;
                    h2 = Math.round(hY / 2 + ig);
                    e = Math.round(T - ii - h3 * ij);
                    break;
                case fg:
                    var T = h5 / 2 + h7 - h1 + h3 * ir;
                    h2 = Math.round( - hW / 2);
                    e = Math.round(T - ii - h3 * ij);
                    break;
                case d1:
                    var T = -h5 / 2 - h3 - h1;
                    h2 = Math.round( - hW / 2);
                    e = Math.round(T - ii - h3 * ij);
                    break;
                case dY:
                    var T = -h7 / 2 - h3 * (ir - 1) / 2;
                    h2 = Math.round( - hW / 2);
                    e = Math.round(T - ii - h3 * ij);
                    break
                }
                ii += h1;
                var h0 = h2 + hW;
                var it = e;
                var hZ = h0;
                var iq = it + h1;
                var hX = h2;
                var ip = iq;
                h4.push(h2, e, h0, it, hZ, iq, h2, e, hZ, iq, hX, ip);
                var io = h6 / 512;
                var ie = (h9 - hT - h1 * 2) / h9;
                var im = (h6 + hW * 2) / 512;
                var id = ie;
                var il = im;
                var ic = (h9 - hT) / h9;
                var ik = io;
                var ib = ic;
                ih.push(io, ie, im, id, il, ic, io, ie, il, ic, ik, ib)
            }
            if (!hU.textPos) {
                hU.textPos = {}
            }
            hU.textPos.vertex = h4;
            hU.textPos.texcoord = ih
        },
        _addFixedLabelBounds: function(hZ) {
            var hV = 1000;
            var hT = 1000;
            var T = -1000;
            var e = -1000;
            if (hZ.iconPos) {
                var hX = hZ.iconPos["vertex"];
                for (var hY = 0,
                hU = hX.length; hY < hU; hY += 2) {
                    var h3 = hX[hY];
                    var h1 = hX[hY + 1];
                    if (h3 < hV) {
                        hV = h3
                    }
                    if (h3 > T) {
                        T = h3
                    }
                    if (h1 < hT) {
                        hT = h1
                    }
                    if (h1 > e) {
                        e = h1
                    }
                }
            }
            if (hZ.custom && hZ.style.iconSize && !hZ.name) {
                var h0 = hZ.style.iconSize;
                var h2 = hZ.direction;
                switch (h2) {
                case dY:
                    hV = -Math.round(h0[0] / 2);
                    hT = -Math.round(h0[1] / 2);
                    T = Math.round(h0[0] / 2);
                    e = Math.round(h0[1] / 2);
                    break;
                case fg:
                    hV = -Math.round(h0[0] / 2);
                    hT = 0;
                    T = Math.round(h0[0] / 2);
                    e = h0[1];
                    break
                }
            }
            if (hZ.textPos) {
                var hW = hZ.textPos["vertex"];
                for (var hY = 0,
                hU = hW.length; hY < hU; hY += 2) {
                    var h3 = hW[hY];
                    var h1 = hW[hY + 1];
                    if (h3 < hV) {
                        hV = h3
                    }
                    if (h3 > T) {
                        T = h3
                    }
                    if (h1 < hT) {
                        hT = h1
                    }
                    if (h1 > e) {
                        e = h1
                    }
                }
            }
            hZ.bds = [hV, hT, T, e]
        },
        _updateLineLabelCoords: function(ia, h0) {
            if (h0 === 0) {
                return
            }
            var hT = ia.wordsInfo;
            var h7 = ia.wordCount;
            if (!ia.labelImagePosition) {
                return
            }
            var h2 = ia.labelImagePosition.slice(0);
            if (ia.reverse) {
                h2.reverse()
            }
            var ik = 1000;
            var ih = 1000;
            var ii = -1000;
            var ig = -1000;
            for (var ib = 0; ib < h7; ib++) {
                var il = h2[ib];
                var ij = il[0];
                var h8 = il[1];
                var h6 = ia.textSize[ib];
                var hZ = h6[0];
                var e = h6[1];
                var hY = ij / 512;
                var h5 = (h0 - h8 - e * 2) / h0;
                var hW = (ij + hZ * 2) / 512;
                var h4 = h5;
                var hU = hW;
                var h3 = (h0 - h8) / h0;
                var T = hY;
                var h1 = h3;
                hT[ib].size = [hZ, e];
                hT[ib].texcoord = [hY, h5, hW, h4, hU, h3, hY, h5, hU, h3, T, h1];
                var ie = hT[ib].offset[0];
                var id = hT[ib].offset[1];
                var ic = ie - hZ / 2;
                var hX = id + e / 2;
                var hV = id - e / 2;
                var h9 = ie + hZ / 2;
                if (ic < ik) {
                    ik = ic
                }
                if (h9 > ii) {
                    ii = h9
                }
                if (hV < ih) {
                    ih = hV
                }
                if (hX > ig) {
                    ig = hX
                }
            }
            ia.bds = [ik, ih, ii, ig]
        }
    });
    var cU = {
        0 : "00000000",
        16 : "00010000",
        32 : "00100000",
        48 : "00110000",
        64 : "01000000",
        96 : "01100000"
    };
    function cr(T, hT, hU) {
        var e = T.bds;
        if (!e) {
            return false
        }
        var i = T.tracer;
        var hX;
        if (i) {
            if (!cU[i]) {
                hX = i.toString(2);
                if (hX.length < 8) {
                    hX = new Array(8 - hX.length + 1).join("0") + hX
                }
                cU[i] = hX
            }
            hX = cU[i];
            var hW = dj.mapZoomStartZoomMapping[hT];
            return hX[hT - hW] === "1"
        }
        var hV = T.displayRange;
        if (hU >= hV[0] && hU <= hV[1]) {
            return true
        }
        return false
    }
    function dk(i, e) {
        this.map = i.map;
        this.layer = i;
        e = e || [];
        this.allLabels = [];
        this._spotData = [];
        this._strategyInfo = null;
        this.RANK1 = 1000000;
        this.RANK2 = 2000000;
        this.RANK3 = 3000000;
        this.RANK4 = 4000000;
        this.RANK5 = 5000000;
        this._ratio = a7();
        this._useRound = true;
        this._sharpenRender = false;
        if (this._ratio > c9.HIGH_RES_MIN_RATIO) {
            this._useRound = false;
            this._sharpenRender = true
        }
        this._mapIsMoving = false;
        this._onMapIdleCallback = e.onMapIdleCallback;
        this.map.temp.isPermitSpotOver = true;
        this.currentSelectedLabel = null;
        this.map._labelProcessor = this;
        this.iconCache = {};
        this.fixedLabelData = [];
        this.lineLabelData = [];
        this.highlightLabelData = [];
        this._iconLoadTimer = null;
        this._labelTextCanvas = null;
        if (this.map.config.textRenderType === "canvas") {
            this._labelTextCanvas = this.map.tileMgr.getLabelTextCanvas()
        }
        this.bind()
    }
    D.extend(dk.prototype, {
        bind: function() {
            var T = this.map;
            var i = this;
            T.addEventListener("mapstatusbusy_inner",
            function(hT) {
                i._mapIsMoving = true;
                if (i._ratio > c9.HIGH_RES_MIN_RATIO) {
                    i._sharpenRender = false
                } else {
                    i._useRound = false
                }
            });
            T.addEventListener("mapstatusidle_inner",
            function(hT) {
                if (i._ratio > c9.HIGH_RES_MIN_RATIO) {
                    i._sharpenRender = true
                } else {
                    i._useRound = true
                }
                i._mapIsMoving = false
            });
            T.addEventListener("onspotmouseover",
            function(hV) {
                if (!this.temp.isPermitSpotOver) {
                    return
                }
                if (hV.spots.length > 0) {
                    var hU = hV.spots[0].userdata.uid;
                    var hW = hV.spots[0].userdata.tilePosStr;
                    var hT = i.getLabelByUid(hU, hW);
                    hT && hT.formatedData && i._toHighlightColor(hT.formatedData)
                }
            });
            T.addEventListener("onspotmouseout",
            function(hV) {
                if (!this.temp.isPermitSpotOver) {
                    return
                }
                if (hV.spots.length > 0) {
                    var hU = hV.spots[0].userdata.uid;
                    var hW = hV.spots[0].userdata.tilePosStr;
                    var hT = i.getLabelByUid(hU, hW);
                    hT && hT.formatedData && i._toDefaultColor(hT.formatedData)
                }
            });
            T.addEventListener("spotclick",
            function(hV) {
                if (hV.spots && hV.spots.length > 0) {
                    if (hV.spots[0].userdata.zoom < 10) {
                        return
                    }
                    var hU = hV.spots[0].userdata.uid;
                    var hW = hV.spots[0].userdata.tilePosStr;
                    if (i.currentSelectedLabel && (i.currentSelectedLabel.uid !== hU || i.currentSelectedLabel.tilePosStr !== hW)) {
                        i._recoverNormalState()
                    }
                    var hT = i.getLabelByUid(hU, hW);
                    hT && i._changeBaseMapState(hT)
                } else {
                    i._recoverNormalState()
                }
            });
            T.on("spot_status_reset",
            function() {
                i._recoverNormalState()
            });
            T.on("spot_highlight",
            function(hU) {
                var hT = i.getLabelByUid(hU.uid, hU.tilePosStr);
                hT && hT.formatedData && i._toHighlightColor(hT.formatedData)
            });
            T.addEventListener("mousemove",
            function(hT) {
                if (i.curSpotAdded) {
                    return
                }
                if (this.currentOperation !== dV.idle || i._mapIsMoving === true) {
                    return
                }
                i._refreshSpotData();
                this.temp.isPermitSpotOver = true;
                i.curSpotAdded = true
            });
            if (f6()) {
                function e() {
                    i._refreshSpotData()
                }
                T.addEventListener("mapstatusidle_inner", e)
            }
            T.on("style_loaded",
            function() {
                if (i.map.config.textRenderType === "canvas" && !i._labelTextCanvas) {
                    i._labelTextCanvas = i.map.tileMgr.getLabelTextCanvas()
                }
            })
        },
        getLabelByUid: function(hW, hX) {
            var e = this.map._featureMgr.getResult().tileLabels;
            for (var hV = 0; hV < e.length; hV++) {
                var T = e[hV].fixedLabel;
                for (var hU = 0; hU < T.length; hU++) {
                    if (e[hV].fixedLabel[hU].guid === hW && e[hV].fixedLabel[hU].tilePosStr === hX) {
                        return e[hV].fixedLabel[hU]
                    }
                }
                var hT = e[hV].indoorLabel;
                for (var hU = 0; hU < hT.length; hU++) {
                    if (e[hV].indoorLabel[hU].guid === hW && e[hV].indoorLabel[hU].tilePosStr === hX) {
                        return e[hV].indoorLabel[hU]
                    }
                }
            }
            return null
        },
        getTileByLabelUid: function(hW) {
            var e = this.map._featureMgr.getResult().tileLabels;
            for (var hV = 0; hV < e.length; hV++) {
                var T = e[hV].fixedLabel;
                for (var hU = 0; hU < T.length; hU++) {
                    if (e[hV].fixedLabel[hU].guid === hW) {
                        return e[hV]
                    }
                }
                var hT = e[hV].indoorLabel;
                for (var hU = 0; hU < hT.length; hU++) {
                    if (e[hV].indoorLabel[hU].guid === hW) {
                        return e[hV]
                    }
                }
            }
            return null
        },
        _toHighlightColor: function(T) {
            if (T.tempRank && T.tempRank === this.RANK5) {
                return
            }
            var e = this.map._featureMgr.getResult().eleData[4] || [];
            var hU = false;
            for (var hT = 0; hT < e.length; hT++) {
                if (e[hT] === T || (e[hT].guid === T.guid && e[hT].tilePosStr === T.tilePosStr && e[hT].zoom === T.zoom)) {
                    hU = true;
                    break
                }
            }
            if (hU) {
                return
            }
            e.push(T);
            this.map._featureMgr.setOverlayData(e, 4);
            this.map.dispatchEvent(new bc("onrefresh"))
        },
        _toDefaultColor: function(T) {
            if (T.tempRank && T.tempRank === this.RANK5) {
                return
            }
            var e = this.map._featureMgr.getResult().eleData[4] || [];
            for (var hT = 0; hT < e.length; hT++) {
                if (T === e[hT] || (T.guid === e[hT].guid && T.tilePosStr === e[hT].tilePosStr && T.zoom === e[hT].zoom)) {
                    e.splice(hT, 1);
                    break
                }
            }
            this.map._featureMgr.setOverlayData(e, 4);
            this.map.dispatchEvent(new bc("onrefresh"))
        },
        _changeBaseMapState: function(i) {
            var hU = i.guid;
            var hY = i.formatedData.guidExt;
            var h0 = {
                guid: hU,
                tilePosStr: i.tilePosStr,
                guidExt: hY
            };
            this._strategyInfo = h0;
            this.currentSelectedLabel = i;
            var hT = this.map._featureMgr;
            var e = hT.getLabelData();
            e = this.collisionTest(e);
            this.updateLabels(e);
            var h1 = this.fixDataFormat(e);
            hT.setOverlayData(h1[0], 2);
            hT.setOverlayData(h1[1], 3);
            hT.setOverlayData(h1[2], 4);
            var T = this.getTileByLabelUid(hU);
            this.currentSelectedLabel.tileInfo = T.tileInfo;
            var hZ = T.tileInfo.zoom;
            var hX = this.layer.tileCache.getAllData();
            for (var hW in hX) {
                var hV = hX[hW].data;
                if (!hV.label) {
                    continue
                }
                this.clearCollisionCache(hV.label)
            }
            this.map.dispatchEvent(new bc("onrefresh"))
        },
        _recoverNormalState: function() {
            this._strategyInfo = null;
            var hX = false;
            var hV = this.map._featureMgr.getLabelData();
            if (this.currentSelectedLabel) {
                var T = this.currentSelectedLabel.guid;
                this.clearCollisionCache(this.getTileByLabelUid(T));
                var hU = this.layer.tileCache.getAllData();
                for (var hT in hU) {
                    var hW = hU[hT].data;
                    if (!hW.label) {
                        continue
                    }
                    this.clearCollisionCache(hW.label)
                }
                this.currentSelectedLabel.tempRank = null;
                this.currentSelectedLabel = null;
                hX = true
            }
            hV = this.collisionTest(hV);
            this.updateLabels(hV);
            var e = this.fixDataFormat(hV);
            var i = this.map._featureMgr;
            i.setOverlayData(e[0], 2);
            i.setOverlayData(e[1], 3);
            i.setOverlayData([], 4);
            this.map.dispatchEvent(new bc("onrefresh"));
            if (hX) {
                this.curSpotAdded = false;
                this._refreshSpotData()
            }
        },
        loadIconImages: function(hU, h5) {
            var hX = hU.label;
            var hV = hU.tileInfo.style;
            var T = hX.fixedLabel;
            var h2 = hX.indoorLabel;
            var h6 = T.length + h2.length;
            var hZ = this;
            var hT = 0;
            var h4 = 200;
            for (var hW = 0; hW < h6; hW++) {
                var hY;
                if (hW < T.length) {
                    hY = T[hW]
                } else {
                    hY = h2[hW - T.length]
                }
                if (!hY.iconPos) {
                    continue
                }
                var h1 = hY.iconPos.iconType;
                var h3 = hV + "_" + h1;
                hT++;
                if (this.iconCache[h3]) {
                    if (this.iconCache[h3].loaded) {
                        h5(hU)
                    }
                    continue
                }
                var h0 = new Image();
                h0.id = h3;
                h0.crossOrigin = "anonymous";
                h0.onload = function() {
                    hZ.iconCache[this.id].loaded = true;
                    hZ._addToIconTexture(this);
                    if (hZ._iconLoadTimer === null) {
                        hZ._iconLoadTimer = setTimeout(function() {
                            h5();
                            hZ._iconLoadTimer = null
                        },
                        h4)
                    }
                    this.onload = null
                };
                h0.onerror = function() {
                    if (!hZ._iconLoadTimer) {
                        hZ._iconLoadTimer = setTimeout(function() {
                            h5();
                            hZ._iconLoadTimer = null
                        },
                        h4)
                    }
                    hZ.iconCache[this.id] = null;
                    this.onerror = null
                };
                var e = e4.getIconSetPath(this.map.config.style) + h1 + ".png";
                h0.src = e;
                this.iconCache[h3] = {
                    loaded: false,
                    image: h0
                }
            }
            return hT
        },
        _addToIconTexture: function(hV) {
            if (!this.map._webglMapScene) {
                return
            }
            var hX = this.map._webglMapScene._painter;
            var e = hX._iconTextureAtlas.addTexture(hV);
            hX._iconTextureAtlasOffset[hV.id] = e;
            var h0 = 0 * hV.width / 1024 + e.width;
            var hU = 0 * hV.height / 1024 + e.height;
            var hZ = hV.width / 1024 + e.width;
            var hT = hU;
            var hY = hZ;
            var T = hV.height / 1024 + e.height;
            var hW = h0;
            var i = T;
            hX._iconTextureAtlasCoords[hV.id] = [h0, hU, hZ, hT, hY, T, h0, hU, hY, T, hW, i]
        },
        loadImgByStr: function(hT, hU, hV) {
            if (!hT && !hU) {
                hV && hV(null, null);
                return
            }
            if (typeof hT === "object" && typeof hU === "object") {
                hV(hT, hU);
                return
            }
            var i = 0;
            var T = null;
            var e = null;
            if (hT) {
                i++;
                T = new Image();
                T.onload = function() {
                    i--;
                    if (i === 0) {
                        hV && hV(this, e)
                    }
                    this.onload = null
                };
                T.src = hT
            }
            if (hU) {
                i++;
                e = new Image();
                e.onload = function() {
                    i--;
                    if (i === 0) {
                        hV && hV(T, this)
                    }
                    this.onload = null
                };
                e.src = hU
            }
        },
        collisionTest: function(h0, iG, ij) {
            if (this.map.viewAnimationTime) {
                return []
            }
            if (!h0) {
                return []
            }
            var ia = this.map;
            var ir = ia.getHeading();
            ir = this.calcLoopHeading(ir);
            var iB = ia.height;
            var ix = this.allLabels;
            ix.length = 0;
            h0.sort(function(iI, i) {
                var iK = iI.tileInfo;
                var iJ = i.tileInfo;
                if (iK.col * iK.row < iJ.col * iJ.row) {
                    return - 1
                } else {
                    return 1
                }
            });
            var h1 = h0.labelZoom;
            var ib = ia.getTilt();
            var h3 = ia.getZoom();
            var iw;
            if (ij) {
                iw = ij
            } else {
                iw = this.getZoomStep()
            }
            for (var iE = 0,
            iC = h0.length; iE < iC; iE++) {
                var ie = h0[iE];
                var hY = ie.tileInfo;
                var hV = hY.zoom;
                var iv = hY.loopOffsetX / Math.pow(2, 18 - hV);
                if (!ir && !ib) {
                    if (ie.unnecessaryCollisionTest && ie.unnecessaryCollisionTest[ij]) {
                        continue
                    }
                }
                var im = ie.fixedLabel || [];
                for (var iD = 0,
                ih = im.length; iD < ih; iD++) {
                    var hW = im[iD];
                    hW.zoom = hV;
                    if (iG === -1 && hW.isDel) {
                        continue
                    }
                    if (!cr(hW, hY.useZoom, h3)) {
                        hW.isDel = true;
                        continue
                    }
                    this.calcCollisionBounds(hW, iw, iv, iB);
                    ix.push(hW)
                }
                var il = ie.indoorLabel || [];
                for (var iD = 0,
                ih = il.length; iD < ih; iD++) {
                    var hW = il[iD];
                    hW.zoom = hV;
                    if (iG === -1 && hW.isDel) {
                        continue
                    }
                    if (!cr(hW, hY.useZoom)) {
                        hW.isDel = true;
                        continue
                    }
                    this.calcCollisionBounds(hW, iw, iv, iB);
                    ix.push(hW)
                }
                var hX = ie.lineLabel || [];
                for (var iD = 0,
                ih = hX.length; iD < ih; iD++) {
                    var hW = hX[iD];
                    if (iG === -1 && hW.isDel) {
                        continue
                    }
                    if (!cr(hW, hY.useZoom)) {
                        hW.isDel = true;
                        continue
                    }
                    var iH = hW.pt;
                    var ii = ia.pointToPixelIn(iH, {
                        zoom: iw,
                        useRound: this._useRound
                    });
                    var ig = ii.x + iv;
                    var id = iB - ii.y;
                    var ik = hW.bds;
                    var iA = ik[0];
                    var iy = ik[1];
                    var h8 = ik[2];
                    var h7 = ik[3];
                    var it = iA;
                    var iq = iy;
                    var h6 = h8;
                    var h5 = h7;
                    if ((ir >= 0 && ir < 45) || (ir >= 315 && ir < 360)) {
                        it = iA;
                        iq = iy;
                        h6 = h8;
                        h5 = h7
                    } else {
                        if (ir >= 45 && ir < 135) {
                            it = iy;
                            iq = -h8;
                            h6 = h7;
                            h5 = -iA
                        } else {
                            if (ir >= 135 && ir < 225) {
                                it = -h8;
                                iq = -h7;
                                h6 = -iA;
                                h5 = -iy
                            } else {
                                if (ir >= 225 && ir < 315) {
                                    it = -h7;
                                    iq = iA;
                                    h6 = -iy;
                                    h5 = h8
                                }
                            }
                        }
                    }
                    hW._tempBds = [ig + it, id + iq, ig + h6, id + h5];
                    var hZ = ia.pixelToPointIn(new ek(hW._tempBds[0], ii.y + iq), {
                        zoom: iw
                    });
                    var hT = ia.pixelToPointIn(new ek(hW._tempBds[2], ii.y + h5), {
                        zoom: iw
                    });
                    hW._mcBds = [hZ, hT];
                    ix.push(hW)
                }
            }
            var iu = this._strategyInfo;
            if (iu) {
                var h4 = iu.guid;
                var ic = iu.guidExt;
                var T = false;
                for (var iE = 0,
                iC = ix.length; iE < iC; iE++) {
                    var iz = ix[iE];
                    delete iz.tempRank;
                    if (!this.layer.isClickableLabel(iz) || (ic === 1 && !iz.guidExt)) {
                        continue
                    }
                    if (h4 === iz.guid && iu.tilePosStr === iz.tilePosStr) {
                        iz.tempRank = this.RANK5;
                        T = true
                    }
                }
                if (!T && this.currentSelectedLabel) {
                    this.currentSelectedLabel.tempRank = this.RANK5;
                    var hY = this.currentSelectedLabel.tileInfo;
                    var hV = hY.zoom;
                    var iv = hY.loopOffsetX / Math.pow(2, 18 - hV);
                    this.calcCollisionBounds(this.currentSelectedLabel, iw, iv, iB);
                    ix.push(this.currentSelectedLabel)
                }
            } else {
                for (var iE = 0,
                iC = ix.length; iE < iC; iE++) {
                    var iz = ix[iE];
                    if (iz.type === "line" || !iz.iconPos) {
                        continue
                    }
                    delete iz.tempRank
                }
            }
            ix.sort(function(iJ, iI) {
                var iK = iJ.tempRank ? iJ.tempRank: iJ.rank;
                var i = iI.tempRank ? iI.tempRank: iI.rank;
                return i - iK || iJ.startZoom - iI.startZoom || iI.pt.lng - iJ.pt.lng || iI.pt.lat - iJ.pt.lat
            });
            var hU = 0;
            if (ib > 0) {
                hU = 6
            }
            var h3 = ia.getZoom();
            if (h3 >= 8 && h3 < 9) {
                h3 < 8.5 ? (hU = 6) : (hU = 3)
            }
            if (ia._displayOptions.labelMargin > 0) {
                hU = ia._displayOptions.labelMargin
            }
            var e = 2;
            if (h3 < 6 && h3 >= 5) {
                e = -1
            }
            for (var iE = 0,
            iC = ix.length; iE < iC; iE++) {
                var ip = ix[iE];
                var h2 = ip._tempBds;
                ip.isDel = false;
                ip._intersectIdx = [];
                for (iD = iE + 1; iD < iC; iD++) {
                    var h9 = ix[iD];
                    var iF = h9._tempBds;
                    if (! (h2[2] + hU + e < iF[0] - hU || h2[0] - hU > iF[2] + hU + e || h2[3] + hU + e < iF[1] - hU || h2[1] - hU > iF[3] + hU + e)) {
                        ip._intersectIdx.push(iD)
                    }
                }
            }
            for (var iE = 0,
            iC = ix.length; iE < iC; iE++) {
                var iz = ix[iE];
                if (iz.isDel === false) {
                    var io = iz._intersectIdx;
                    for (var iD = 0,
                    ih = io.length; iD < ih; iD++) {
                        ix[io[iD]].isDel = true
                    }
                }
            }
            return h0
        },
        calcCollisionBounds: function(hZ, hX, i, hY) {
            var hV = hZ.ptFix || hZ.pt;
            var hT = this.map;
            var hU = hT.pointToPixelIn(hV, {
                zoom: hX,
                useRound: this._useRound
            });
            var T = hU.x + i;
            var h1 = hY - hU.y;
            var e = hZ.bds;
            hZ._tempBds = [T + e[0], h1 + e[1], T + e[2], h1 + e[3]];
            var hW = hT.pixelToPointIn(new ek(hZ._tempBds[0], hU.y + e[1]), {
                zoom: hX
            });
            var h0 = hT.pixelToPointIn(new ek(hZ._tempBds[2], hU.y + e[3]), {
                zoom: hX
            });
            hZ._mcBds = [hW, h0]
        },
        getZoomStep: function() {
            var T = this.map.getZoom();
            var e = Math.floor(T);
            var i = T - e >= 0.5 ? e + 0.5 : e;
            return i
        },
        clearCollisionCache: function(e) {
            if (!e) {
                return
            }
            e.cacheState = null;
            e.unnecessaryCollisionTest = null
        },
        getCachedLabels: function(e) {
            e = e || [];
            var T = this.getZoomStep();
            var hU = [];
            var hW = false;
            for (var hT = 0; hT < e.length; hT++) {
                var hV = e[hT];
                if (!hV.cacheState || !hV.cacheState[T]) {
                    hW = true;
                    break
                }
                if (hV.hasNewData) {
                    hW = true;
                    break
                }
            }
            if (hW) {
                this.calcLabelsCollision(e)
            }
            return e
        },
        calcLabelsCollision: function(T) {
            var hU = this.getZoomStep();
            var hV = {};
            var hY;
            var hT;
            T = this.collisionTest(T, undefined, hU);
            bK.addLabelIntoAreaSpots(T);
            for (var hX = 0; hX < T.length; hX++) {
                hY = T[hX];
                hT = hY.tileInfo;
                var h2 = hT.col + "," + hT.row;
                hV[h2] = 1
            }
            var e = {};
            for (var hX = 0; hX < T.length; hX++) {
                hY = T[hX];
                if (!hY.cacheState) {
                    hY.cacheState = {}
                }
                hT = hY.tileInfo;
                var h1 = hT.col;
                var hZ = hT.row;
                h2 = h1 + "," + hZ;
                if (hY.cacheState[hU] === "stable") {
                    e[h2] = 1;
                    if (!hY.hasNewData) {
                        continue
                    }
                }
                for (var hW = 0; hW < hY.fixedLabel.length; hW++) {
                    var h0 = hY.fixedLabel[hW];
                    if (!h0.cachedIsDel) {
                        h0.cachedIsDel = {}
                    }
                    h0.cachedIsDel[hU] = h0.isDel
                }
                for (var hW = 0; hW < hY.indoorLabel.length; hW++) {
                    var h0 = hY.indoorLabel[hW];
                    if (!h0.cachedIsDel) {
                        h0.cachedIsDel = {}
                    }
                    h0.cachedIsDel[hU] = h0.isDel
                }
                for (var hW = 0; hW < hY.lineLabel.length; hW++) {
                    var h0 = hY.lineLabel[hW];
                    if (!h0.cachedIsDel) {
                        h0.cachedIsDel = {}
                    }
                    h0.cachedIsDel[hU] = h0.isDel
                }
                if (hV[(h1 - 1) + "," + (hZ - 1)] && hV[(h1 - 1) + "," + hZ] && hV[(h1 - 1) + "," + (hZ + 1)] && hV[h1 + "," + (hZ - 1)] && hV[h1 + "," + (hZ + 1)] && hV[(h1 + 1) + "," + (hZ - 1)] && hV[(h1 + 1) + "," + hZ] && hV[(h1 + 1) + "," + (hZ + 1)]) {
                    hY.cacheState[hU] = "stable";
                    e[h2] = 1
                } else {
                    if (!hY.cacheState[hU]) {
                        hY.cacheState[hU] = "unstable"
                    }
                }
            }
            for (var hX = 0; hX < T.length; hX++) {
                var hY = T[hX];
                hT = hY.tileInfo;
                var h2 = hT.col + "," + hT.row;
                var h1 = +hT.col;
                var hZ = +hT.row;
                if (e[(h1 - 1) + "," + (hZ - 1)] && e[(h1 - 1) + "," + hZ] && e[(h1 - 1) + "," + (hZ + 1)] && e[h1 + "," + (hZ - 1)] && e[h1 + "," + (hZ + 1)] && e[(h1 + 1) + "," + (hZ - 1)] && e[(h1 + 1) + "," + hZ] && e[(h1 + 1) + "," + (hZ + 1)]) {
                    if (!hY.unnecessaryCollisionTest) {
                        hY.unnecessaryCollisionTest = {}
                    }
                    hY.unnecessaryCollisionTest[hU] = 1
                }
            }
            T.hasNewData = false
        },
        updateLabels: function(hT) {
            var e = this.map;
            var hZ = e.getZoom();
            var h1 = e.getHeading();
            h1 = this.calcLoopHeading(h1);
            var h0 = e.getTilt();
            var hU = this.getZoomStep();
            for (var hY = 0,
            hV = hT.length; hY < hV; hY++) {
                var hX = hT[hY];
                var T = hX.tileInfo;
                var hW = T.loopOffsetX || 0;
                this.updateFixedLabel(hX.fixedLabel, h0, h1, hX, hU, hZ, hW);
                this.updateFixedLabel(hX.indoorLabel, h0, h1, hX, hU, hZ, 0);
                this.updateLineLabel(hX.lineLabel, h0, h1, hX, hU)
            }
        },
        updateFixedLabel: function(hY, h0, i, h2, hU, e, hT) {
            if (hY.length === 1) {}
            for (var h3 = 0,
            hV = hY.length; h3 < hV; h3++) {
                var hZ = hY[h3];
                if (!hZ.cachedIsDel) {
                    continue
                }
                if (!h0 && !i && h2.cacheState && h2.cacheState[hU]) {
                    hZ.isDel = hZ.cachedIsDel[hU];
                    if (typeof hZ.isDel === "undefined") {
                        hZ.isDel = hZ.cachedIsDel[hU] = true
                    }
                }
                if (hZ.startScale > e) {
                    hZ.isDel = true
                }
                if (hZ.isDel) {
                    continue
                }
                var h5 = hZ.pt;
                var T = hZ.iconPos;
                if (T && T.texcoord) {
                    if (!T.rtVertex) {
                        T.rtVertex = [];
                        var h7 = T.vertex;
                        var hW = aG(h5.lng);
                        var h4 = aG(h5.lat);
                        T.rtVertex = [hW[0], h4[0], hW[1], h4[1], 0, h7[0], h7[1], 0, 0, T.texcoord[0], T.texcoord[1], hW[0], h4[0], hW[1], h4[1], 0, h7[2], h7[3], 0, 0, T.texcoord[2], T.texcoord[3], hW[0], h4[0], hW[1], h4[1], 0, h7[4], h7[5], 0, 0, T.texcoord[4], T.texcoord[5], hW[0], h4[0], hW[1], h4[1], 0, h7[6], h7[7], 0, 0, T.texcoord[6], T.texcoord[7], hW[0], h4[0], hW[1], h4[1], 0, h7[8], h7[9], 0, 0, T.texcoord[8], T.texcoord[9], hW[0], h4[0], hW[1], h4[1], 0, h7[10], h7[11], 0, 0, T.texcoord[10], T.texcoord[11]]
                    }
                }
                var h6 = hZ.textPos;
                if (h6) {
                    if (!h6.rtVertex) {
                        h6.rtVertex = [];
                        var h7 = h6.vertex;
                        var hX = h6.rtVertex;
                        var hW = aG(h5.lng);
                        var h4 = aG(h5.lat);
                        var h9 = aG(hT);
                        for (var h1 = 0,
                        h8 = h7.length; h1 < h8; h1 += 12) {
                            hX.push(hW[0], h4[0], hW[1], h4[1], 0, h7[h1], h7[h1 + 1], h9[0], h9[1], h6.texcoord[0], h6.texcoord[1]);
                            hX.push(hW[0], h4[0], hW[1], h4[1], 0, h7[h1 + 2], h7[h1 + 3], h9[0], h9[1], h6.texcoord[2], h6.texcoord[3]);
                            hX.push(hW[0], h4[0], hW[1], h4[1], 0, h7[h1 + 4], h7[h1 + 5], h9[0], h9[1], h6.texcoord[4], h6.texcoord[5]);
                            hX.push(hW[0], h4[0], hW[1], h4[1], 0, h7[h1 + 6], h7[h1 + 7], h9[0], h9[1], h6.texcoord[6], h6.texcoord[7]);
                            hX.push(hW[0], h4[0], hW[1], h4[1], 0, h7[h1 + 8], h7[h1 + 9], h9[0], h9[1], h6.texcoord[8], h6.texcoord[9]);
                            hX.push(hW[0], h4[0], hW[1], h4[1], 0, h7[h1 + 10], h7[h1 + 11], h9[0], h9[1], h6.texcoord[10], h6.texcoord[11])
                        }
                    }
                }
            }
        },
        updateLineLabel: function(hY, iv, ij, id, ie) {
            hY = hY || [];
            var h8 = this.map;
            var h1 = h8.getZoomUnits();
            for (var iu = 0,
            ir = hY.length; iu < ir; iu++) {
                var hX = hY[iu];
                if (!hX.cachedIsDel) {
                    continue
                }
                if (!iv && !ij && id.cacheState && id.cacheState[ie]) {
                    hX.isDel = hX.cachedIsDel[ie];
                    if (typeof hX.isDel === "undefined") {
                        hX.isDel = hX.cachedIsDel[ie] = true
                    }
                }
                if (hX.isDel) {
                    continue
                }
                if (!hX.styleText || hX.styleText.length === 0) {
                    continue
                }
                var hZ = hX.mcInTile;
                var im = hZ.x;
                var ik = hZ.y;
                var ic = hX.wordsInfo;
                var ia = hX.labelAngle;
                var h6 = false;
                var il = 0;
                if (ij !== 0) {
                    var h7 = ic[0].angle;
                    var iq = this.calcLoopHeading(h7 - ij);
                    var h4 = this.calcLoopHeading(ia - ij);
                    if (iq > 45 && iq < 315) {
                        if (iq > 45 && iq <= 135) {
                            il = 270
                        } else {
                            if (iq > 135 && iq <= 225) {
                                il = 180
                            } else {
                                if (iq > 225 && iq < 315) {
                                    il = 90
                                }
                            }
                        }
                        if (ia > 225 && ia <= 315 && il <= 180) {
                            h6 = true
                        } else {
                            if ((ia >= 0 && ia <= 45 || ia >= 315 && ia < 360) && il >= 180) {
                                h6 = true
                            }
                        }
                    }
                }
                for (var it = 0,
                h2 = ic.length; it < h2; it++) {
                    var ip = ic[it];
                    var h5 = ip.calcInfo;
                    var ii = ip.offset[0];
                    var ig = ip.offset[1];
                    if (!ip.size) {
                        continue
                    }
                    var e = ip.size[0];
                    var T = ip.size[1];
                    var h3 = ip.angle;
                    if (!h5) {
                        h5 = {}
                    }
                    if (ij !== h5.mapHeading || h1 !== h5.zoomUnits) {
                        h5.mapHeading = ij;
                        h5.zoomUnits = h1;
                        if (h6) {
                            var h9 = ic[h2 - 1 - it];
                            ii = h9.offset[0];
                            ig = h9.offset[1];
                            h3 = h9.angle
                        }
                        var hU = im + ii * h1;
                        var hT = ik + ig * h1;
                        h5.rotationCenter = {
                            lng: hU,
                            lat: hT
                        };
                        h5.calcHeading = il;
                        h5.angle = h3;
                        h5.offsetX = ii;
                        h5.offsetY = ig;
                        ip.calcInfo = h5
                    }
                    if (!ip.rtVertex) {
                        ip.rtVertex = []
                    }
                    ip.rtVertex.length = 0;
                    var ib = h5.calcHeading + h5.angle;
                    var hV = h5.rotationCenter;
                    ii = h5.offsetX;
                    ig = h5.offsetY;
                    var hW = Math.round(ii - e / 2);
                    var io = Math.round(ii + e / 2);
                    var ih = Math.round(ig + T / 2);
                    var h0 = Math.round(ig - T / 2);
                    ip.rtVertex.push(im, ik, ip.z, hW, h0, hV.lng, hV.lat, ib, ip.texcoord[0], ip.texcoord[1], im, ik, ip.z, io, h0, hV.lng, hV.lat, ib, ip.texcoord[2], ip.texcoord[3], im, ik, ip.z, io, ih, hV.lng, hV.lat, ib, ip.texcoord[4], ip.texcoord[5], im, ik, ip.z, hW, h0, hV.lng, hV.lat, ib, ip.texcoord[6], ip.texcoord[7], im, ik, ip.z, io, ih, hV.lng, hV.lat, ib, ip.texcoord[8], ip.texcoord[9], im, ik, ip.z, hW, ih, hV.lng, hV.lat, ib, ip.texcoord[10], ip.texcoord[11])
                }
            }
        },
        calcLoopHeading: function(e) {
            while (e >= 360) {
                e -= 360
            }
            while (e < 0) {
                e += 360
            }
            return e
        },
        fixDataFormat: function(h1) {
            var hT = this.fixedLabelData;
            var e = this.lineLabelData;
            var T = this.highlightLabelData;
            var h8 = 0;
            var hX = 0;
            var h6 = 0;
            var h7;
            if (this.currentSelectedLabel) {
                var hW = this.getLabelByUid(this.currentSelectedLabel.guid, this.currentSelectedLabel.tilePosStr);
                if (!hW || hW.isDel) {
                    hT[h8] = this.currentSelectedLabel.formatedData;
                    h8++;
                    T[h6] = this.currentSelectedLabel.formatedData;
                    h6++
                }
            }
            for (var h5 = 0; h5 < h1.length; h5++) {
                var hZ = h1[h5];
                var hY = hZ.fixedLabel;
                var hU = hZ.indoorLabel;
                var h4 = hZ.lineLabel;
                h7 = this.fixFixedLabelDataFormat(hY, hZ, hT, h8, T, h6);
                h8 = h7[0];
                h6 = h7[1];
                h7 = this.fixFixedLabelDataFormat(hU, hZ, hT, h8, T, h6, true);
                h8 = h7[0];
                h6 = h7[1];
                e[hX] = {
                    tileInfo: hZ.tileInfo,
                    lineLabels: []
                };
                for (var h3 = 0; h3 < h4.length; h3++) {
                    if (h4[h3].isDel) {
                        continue
                    }
                    var h0 = h4[h3].wordsInfo;
                    if (h0) {
                        for (var h2 = 0; h2 < h0.length; h2++) {
                            if (!h0[h2].rtVertex) {
                                continue
                            }
                            var hV = h0[h2].formatedData;
                            if (!hV) {
                                hV = {
                                    textureSource: hZ.textureSources[h4[h3].processedInZoom],
                                    textureHeight: hZ.textureHeights[h4[h3].processedInZoom],
                                    renderData: {
                                        vertex: h0[h2].rtVertex,
                                        textureCoord: h0[h2].texcoord
                                    }
                                };
                                h0[h2].formatedData = hV
                            }
                            e[hX].lineLabels.push(hV)
                        }
                    }
                }
                hX++
            }
            hT.length = h8;
            e.length = hX;
            T.length = h6;
            return [e, hT, T]
        },
        fixFixedLabelDataFormat: function(hW, hZ, h0, hX, hU, e, hY) {
            for (var i = 0; i < hW.length; i++) {
                if (hW[i].isDel) {
                    continue
                }
                var hV = hW[i].textPos;
                var hT = hW[i].iconPos;
                var T = null;
                if (hV && hV.rtVertex) {
                    if (!hW[i].formatedData) {
                        T = {
                            guid: hW[i].guid,
                            guidExt: hW[i].guidExt,
                            tilePosStr: hW[i].tilePosStr,
                            zoom: hW[i].zoom,
                            tempRank: hW[i].tempRank,
                            textureSource: hZ.textureSources[hW[i].processedInZoom],
                            textureHeight: hZ.textureHeights[hW[i].processedInZoom],
                            renderData: {
                                vertex: hV.rtVertex,
                                textureCoord: hV.texcoord
                            }
                        };
                        if (hY && hW[i].onDefaultFloor === false) {
                            T.textureSource = hZ.indoorTextureSources[hW[i].processedInZoom];
                            T.textureHeight = hZ.indoorTextureHeights[hW[i].processedInZoom]
                        }
                        hW[i].formatedData = T
                    } else {
                        T = hW[i].formatedData;
                        T.tempRank = hW[i].tempRank
                    }
                    if (this.currentSelectedLabel && T.guid === this.currentSelectedLabel.guid && T.tilePosStr === this.currentSelectedLabel.tilePosStr) {
                        hU[e] = T;
                        e++
                    }
                }
                if (hT && hT.rtVertex) {
                    if (T) {
                        if (!T.iconRenderData) {
                            T.iconRenderData = {
                                vertex: hT.rtVertex,
                                textureCoord: hT.texcoord
                            }
                        }
                    } else {
                        T = {
                            guid: hW[i].guid,
                            guidExt: hW[i].guidExt,
                            zoom: hW[i].zoom,
                            tempRank: hW[i].tempRank,
                            iconRenderData: {
                                vertex: hT.rtVertex,
                                textureCoord: hT.texcoord
                            }
                        };
                        hW[i].formatedData = T
                    }
                }
                h0[hX] = T;
                hX++
            }
            return [hX, e]
        },
        _refreshSpotData: function() {
            this._spotData.length = 0;
            var hY = this.map;
            var hW = Math.floor(hY.getZoom());
            var T = this.map._featureMgr.getLabelData();
            if (T) {
                for (var hU = 0,
                hT = T.length; hU < hT; hU++) {
                    this._addFixedSpotData(T[hU].fixedLabel, hW);
                    this._addFixedSpotData(T[hU].indoorLabel, hW)
                }
            }
            var hZ = this.currentSelectedLabel;
            if (hZ && !this.getTileByLabelUid(hZ.guid, hZ.tilePosStr)) {
                var hV = this._getSpotDataFromLabel(this.currentSelectedLabel);
                if (hV) {
                    this._spotData.push(hV)
                }
            }
            var hX = new bc("onspotsdataready");
            hX.spots = this._spotData;
            hY._spotDataOnCanvas = this._spotData;
            hY.dispatchEvent(hX)
        },
        _addFixedSpotData: function(hU, hT) {
            for (var e = 0; e < hU.length; e++) {
                var T = hU[e];
                if (!this.layer.isClickableLabel(T) || (T.guidExt === 1 && T.startScale > hT)) {
                    continue
                }
                var i = hU[e].spot || this._getSpotDataFromLabel(hU[e]);
                if (i) {
                    this._spotData.push(i)
                }
            }
        },
        _getSpotDataFromLabel: function(T) {
            var hV = this.map;
            if (!T.bds) {
                return null
            }
            var e = T.bds.slice(0);
            var hT = null;
            if (T.iconPos) {
                hT = new hu(T.pt.lng, T.pt.lat)
            }
            var i = T.name ? T.name.replace("\\\\", "<br>") : "";
            if (T.iconPos && T.iconPos.iconType.indexOf("ditie") > -1 && hV.getZoom() > 14) {
                i = ""
            }
            var hU = {
                n: i,
                pt: new hu(T.pt.lng, T.pt.lat),
                userdata: {
                    iconPoint: hT,
                    uid: T.guid,
                    name: i,
                    mapPoi: true,
                    type: T.iconPos ? T.iconPos.iconType: "",
                    rank: T.rank,
                    zoom: T.zoom,
                    tilePosStr: T.tilePosStr
                },
                bd: e,
                tag: "MAP_SPOT_INFO"
            };
            T.spot = hU;
            return hU
        },
        drawLabelsOnCanvas: function(i, e) {
            if (this._labelTextCanvas) {
                this._labelTextCanvas.drawLabelsOnCanvas(i, e)
            }
        }
    });
    function fU(e) {
        this._map = e;
        this.virtualTile = {
            custom: true,
            label: {
                fixedLabel: [],
                indoorLabel: [],
                lineLabel: [],
                textureHeights: [],
                status: "ready"
            },
            tileInfo: {
                col: 0,
                row: 0,
                zoom: 0,
                useZoom: 0,
                loopOffsetX: 0
            },
            status: "ready"
        };
        this.virtualTile.label.tileInfo = this.virtualTile.tileInfo;
        this.init()
    }
    fU.prototype.init = function() {
        var T = this._map;
        var i = this;
        function e() {
            i.updateLabels()
        }
        T.addEventListener("add_tile_labels", e);
        T.addEventListener("onremove_tile_labels", e);
        T.addEventListener("onclear_labels", e)
    };
    fU.prototype.updateLabels = function() {
        var i = this._map.tileMgr.getLabelTextCanvas();
        var T = this._map;
        var e = this;
        i.drawCustomLabelsOnCanvas(T._customTileLabels,
        function(hU) {
            var hT = e.virtualTile;
            if (hU) {
                hT.label.textureHeights[0] = [hU.height]
            }
            hT.label.fixedLabel = T._customTileLabels;
            var hV = new bc("oncustom_labels_ready");
            hV.virtualTile = hT;
            hV.labelCanvas = hU;
            hV.imgKey = bp.getGUID("custom_labels_");
            T.dispatchEvent(hV)
        })
    };
    bp.register(function(e) {
        e._customLabelMgr = new fU(e)
    });
    var aN = "\x31\x2e\x30\x2e\x32",
    aB = function(ia, h9) {
        var h8 = {
            "\x64\x64\x69\x65\x65": "\x6d\x64\x78",
            "\x65\x78\x61\x78\x65": function(ib, e) {
                return ib !== e
            },
            "\x78\x78\x65\x64\x61": "\x65\x78\x65\x61",
            "\x6d\x65\x6c\x64\x6c": "\x64\x78\x65",
            "\x69\x61\x61\x61\x68": function(ib, e) {
                return ib < e
            },
            "\x65\x6c\x65\x61\x6c": "\x65\x64\x64",
            "\x6c\x63\x64\x65\x6c": "\x64\x64\x6c",
            "\x6d\x65\x61\x61\x69": "\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72",
            "\x78\x63\x65\x61\x6d": "\x43\x68\x61\x72",
            "\x69\x61\x61\x6d\x65": function(ib, e) {
                return ib + e
            },
            "\x6d\x64\x6d\x68\x69": function(ib, e) {
                return ib(e)
            }
        };
        function h7(ih, ig) {
            var ie = h8["\x64\x64\x69\x65\x65"];
            while (h8["\x65\x78\x61\x78\x65"](ie, h8["\x78\x78\x65\x64\x61"])) {
                switch (ie) {
                case h8["\x6d\x65\x6c\x64\x6c"]:
                    for (var id = 0; h8["\x69\x61\x61\x61\x68"](id, e); id++) {
                        var ic = ig(ih[id]);
                        ib["\x70\x75\x73\x68"](ic)
                    }
                    ie = h8["\x65\x6c\x65\x61\x6c"];
                    break;
                case "\x64\x64\x6c":
                    var ib = [];
                    ie = "\x64\x78\x65";
                    break;
                case h8["\x64\x64\x69\x65\x65"]:
                    var e = ih["\x6c\x65\x6e\x67\x74\x68"];
                    ie = h8["\x6c\x63\x64\x65\x6c"];
                    break;
                case h8["\x65\x6c\x65\x61\x6c"]:
                    return ib
                }
            }
        }
        var h1, hZ, hY, hX, hV, h6 = decodeURIComponent,
        h5 = h8["\x78\x63\x65\x61\x6d"],
        h4 = "";
        var h3 = [aB];
        h1 = "\x64\x65";
        hZ = "\x66\x72";
        hY = "\x6f";
        hV = h8["\x69\x61\x61\x6d\x65"](hZ + hY, "\x6d");
        hX = "\x43\x6f" + h1;
        var h2 = function(e) {
            return (e + h4)[h8["\x6d\x65\x61\x61\x69"]][hV + h5 + hX](e)
        };
        var h0 = function(e) {
            return h7(e,
            function(ib) {
                return h2(ib)
            })
        };
        var hW = h0["\x63\x61\x6c\x6c"](h2, [39, 34, 37, 96, 60, 120, 97, 65, 98, 66, 99, 67, 100, 68, 101, 69, 102, 70, 103, 110, 109, 111, 112, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57]);
        var hU = h7([28782, 27702, 26416, 25167, 24183],
        function(e) {
            return h6(e)
        });
        var hT = h0["\x63\x61\x6c\x6c"](hU, [22354, 22749, 24415, 23346, 22257, 22688, 24306, 25174, 23595, 25547, 22984, 25690, 22212, 27547, 21594, 27210, 23090, 29193, 22394, 29368, 29532, 29459, 29530, 24146, 24500, 26352, 27441, 28788, 29370, 27673, 26925, 25249, 24430]),
        T = {};
        hU = h8["\x6d\x64\x6d\x68\x69"](h0, hU);
        var i = new RegExp(hU["\x6a\x6f\x69\x6e"]("\x7c"));
        for (var h1 = 0; h8["\x69\x61\x61\x61\x68"](h1, hW["\x6c\x65\x6e\x67\x74\x68"]); h1++) {
            T[hT[h1]] = hW[h1]
        }
        h9 = h7(h9["\x73\x70\x6c\x69\x74"](h4),
        function(e) {
            return T[e] || e
        })["\x6a\x6f\x69\x6e"](h4);
        return h7(h9["\x73\x70\x6c\x69\x74"](i),
        function(e) {
            return h6(e)
        })
    } (this, "\u5ef2\u5ef2\x6c\u58a0\u735c\u6c36\x69\u545a\u5ef2\x69\u545a\u6c36\u5ef2\u545a\u545a\u545a\u545a\u6730\u59c8\u7313\u72b8\u5a32\x69\u577a\u624f\x73\x74\x79\x6c\u545a\u6730\x69\x69\x68\u59c8\x6c\u624f\u5ef2\u56c4\u5ef2\u706e\x69\x73\x53\u545a\u72b8\u56c4\u7209\x53\u6c36\u5ef2\u58a0\u56c4\u6730\x73\x74\x72\x69\u72b8\u577a\x69\u5a32\x69\u545a\u56c4\u645a\x75\x73\x74\u7313\u735c\x53\x74\x79\x6c\u545a\x49\u72b8\u5a32\u7313\x5a\u7313\u7313\u735c\u6730\u58a0\u5ef2\u59c8\u735c\x69\u5e77\u5ef2\u59c8\u545a\u735c\u59c8\u6c36\x73\x74\x72\x69\u72b8\u577a\x69\u5a32\x69\u545a\u56c4\u645a\x75\x73\x74\u7313\u735c\x53\x74\x79\x6c\u545a\x49\u72b8\u5a32\u7313\u6c36\u5ef2\u5ef2\u56c4\u545a\u5ef2\u6c36\u735c\u545a\u735c\u56c4\u545a\u6c36\u58a0\u56c4\x6c\x68\x6c\u6c36\x68\x6c\u56c4\u735c\u706e\x73\x74\x72\x69\u72b8\u577a\u5e77\u545a\x69\u5ef2\x6c\x6c\u6730\x68\u56c4\u545a\u624f\x68\u735c\u545a\u6730\x6c\u735c\x6c\u5ef2\u706e\u59c8\u5ef2\u5ef2\x69\x6c\u706e\u5ef2\u735c\u59c8\u545a\x69\u706e\u58a0\x6c\x6c\u6c36\u735c\u58a0\x6c\x6c\x6c\u5e77\u545a\u56c4\u58a0\u5ef2\x6c\u706e\x74\x69\x6c\u545a\x54\x79\u735a\u545a\x4e\u5ef2\u735c\u545a\u624f\u58a0\u58a0\x69\x6c\x69\u624f\x69\u56c4\x5f\u706e\u59c8\u7313\x6c\u5e77\x72\u7313\x77\u706e\x7a\u7313\u7313\u735c\u5e77\x68\u56c4\u735c\u6c36\u735c\u5ef2\u735c\u5e77\u5ef2\x69\u5ef2\u6730\x6c\u56c4\x6c\u624f\u545a\u5ef2\u735c\u5e77\u645a\x75\x73\x74\u7313\u735c\u706e\x68\u5ef2\u59c8\u6c36\x73\x74\x72\x69\u72b8\u577a\x69\u5a32\x69\u545a\u56c4\u7209\u545a\u5ef2\x74\x75\x72\u545a\x53\x74\x79\x6c\u545a\u624f\x68\u56c4\x68\u5e77\x69\u56c4\x68\u6730\u735c\u56c4\x6c\u5e77\x69\u58a0\x68\u706e\u735c\x68\u56c4\u6c36\u59c8\u5ef2\u59c8\u6c36\x69\u5ef2\u58a0\u706e\x68\u5ef2\u5ef2\u6730\u56c4\x68\u59c8\u6c36\x69\x6c\u59c8\u5e77\u735c\x68\u735c\u6c36\x68\u5ef2\x6c\u5e77\u545a\u59c8\u59c8\u624f\u545a\x68\u59c8\x69\x6c\u5e77\x6c\x69\u5ef2\u56c4\u735c\u624f\u59c8\x75\x73\x74\u7313\u735c\x4d\u5ef2\u735a\x53\x74\x79\x6c\u545a\u6c36\u59c8\u545a\u5ef2\u56c4\u58a0\u706e\u58a0\x69\x6c\u545a\x6c\u6730\u735c\u5ef2\u735a\u6730\u735a\u7313\x69\u706e\u735c\x6c\u545a\x6c\u735c\u706e\u545a\u5ef2\u5ef2\u5ef2\x6c\u5e77\u577a\u545a\x74\x4d\u5ef2\u735a\x53\x74\x79\x6c\u545a\x49\u56c4\u5e77\u545a\x68\u545a\u5ef2\u56c4\u6c36\u59c8\u545a\x69\u5e77\x73\x74\x72\x69\u72b8\u577a\x69\u5a32\x69\u545a\u56c4\x49\u59c8\u7313\u72b8\x53\u545a\x74\x49\u72b8\u5a32\u7313\u706e\u545a\u59c8\u5ef2\u545a\u545a\u5e77\x69\u59c8\u5ef2\u545a\u59c8\u5e77\u735a\u7313\x73\x74\x4d\u545a\x73\x73\u5ef2\u577a\u545a\u624f\x68\u735c\u58a0\x69\u5ef2\u6c36\u545a\x68\x69\u545a\x69\u706e\x6c\x69\x68\u624f\x73\x74\x72\x69\u72b8\u577a\x69\u5a32\x69\u545a\u56c4\x49\u72b8\u56c4\u7313\u7313\x72\x53\x74\x79\x6c\u545a\u6c36\x68\x68\u56c4\u545a\u545a\u6c36\u735c\u735c\u58a0\u545a\u5ef2\u624f\x69\u56c4\u56c4\u56c4\u56c4\u5e77\u545a\u59c8\u735c\u59c8\u59c8\u624f\x68\u58a0\x68\u706e\x68\x69\u59c8\u5ef2\x6c\u706e\u545a\x68\x69\x68\u5ef2\u5e77\u735c\u5ef2\u735a\x53\x74\x79\x6c\u545a\x49\u56c4\u5e77\u545a\u56c4\u545a\u545a\x6c\u624f\u5ef2\u5ef2\x69\u6730\x68\u735c\u56c4\u5ef2\u735c\u6730\x69\u72b8\u56c4\u545a\u58a0\x4f\u5a32\u624f\u59c8\x75\x73\x74\u7313\u735c\u624f\x6c\x68\x68\u5ef2\u545a\u6730\u5ef2\u735c\u58a0\u5e77\u5ef2\u545a\u56c4\u6730\u735c\u5ef2\u59c8\u5ef2\u735c\u624f\x69\u59c8\u7313\u72b8\x49\u72b8\u5a32\u7313\u6730\x73\x74\x72\x69\u72b8\u577a\x69\u5a32\x79\u6730\x69\u72b8\u56c4\u7313\u7313\x72\x53\x74\x79\x6c\u545a\u5e77\u545a\x6c\u5ef2\u6730\u5a32\u545a\u5ef2\x74\x75\x72\u545a\x53\x74\x79\x6c\u545a\u6c36\x69\u5ef2\x6c\u58a0\x68\u6730\u58a0\u735c\x68\u545a\u5ef2\u6c36\u58a0\u56c4\x6c\u5ef2\u56c4\u6730\x69\x68\u58a0\u59c8\u56c4\u624f\u56c4\u5ef2\u545a\u735c\u735c\u6c36\u58a0\u5ef2\u5ef2\u6c36\x69\u59c8\x69\u706e\x69\u59c8\u7313\u72b8\x53\u545a\x74\x49\u72b8\u5a32\u7313\u6730\u5ef2\u5ef2\u735c\u5ef2\x69\u706e\u58a0\u545a\u59c8\u735c\u56c4\u6730\u5ef2\u735c\x69\x69\x69\u706e\u58a0\u545a\u56c4\x68\u545a\u6c36\x5f\u56c4\x69\x73\u735a\x6c\u5ef2\x79\x4f\u735a\x74\x69\u7313\u72b8\x73\u706e\u735a\u7313\x69\x54\u545a\u58a0\x74\u5e77\x69\u545a\x69\u5ef2\x68\u6c36\u577a\u545a\x74\x49\u56c4\x6c\u545a\x57\u7313\x72\x6b\u545a\x72\u6730\u735c\u59c8\x69\u58a0\u58a0\u5e77\u545a\u545a\u56c4\u545a\x68\u6730\x68\u545a\x69\u56c4\u58a0\u624f\u545a\u58a0\x74\u545a\u72b8\u56c4\u5e77\u545a\x6c\u56c4\x69\u624f\u58a0\u58a0\u59c8\u624f\u59c8\u735c\x68\u5e77\u56c4\u5ef2\u545a\u6730\u59c8\u5ef2\u545a\u5e77\x68\u5ef2\u545a\u5e77\u5ef2\u545a\x68\u6730\u56c4\u545a\u56c4\u6730\u5ef2\u58a0\u58a0\u59c8\x69\u624f\u59c8\u545a\u545a\u59c8\u58a0\u6730\u545a\x68\u59c8\x6c\u56c4\u5e77\u735c\x69\u59c8\u545a\u56c4\u5e77\x68\x68\u56c4\x6c\u5ef2\u6730\u545a\u5ef2\u59c8\u5ef2\u624f\u545a\u58a0\u58a0\u58a0\x6c\u624f\u7313\u72b8\u545a\x72\x72\u7313\x72\u624f\u735a\x72\u545a\x76\u545a\u72b8\x74\u6b9b\u545a\u5a32\u5ef2\x75\x6c\x74\u6730\u545a\u5ef2\u56c4\u5ef2\u5ef2\u706e\u5ef2\u5ef2\x6c\u5ef2\u5ef2\u706e\u5ef2\u59c8\u58a0\x68\u5ef2\u624f\u56c4\x6c\u735c\u58a0\u735c\u706e\x69\u72b8\x4d\u5ef2\u735a\x48\u7313\x73\x74\u6c36\x69\u58a0\u5ef2\u56c4\x6c\u706e\u58a0\u545a\u5ef2\u545a\u58a0\u6c36\u5ef2\x68\u5ef2\u5ef2\u5ef2\u624f\u58a0\u56c4\x68\u706e\u59c8\u545a\u5ef2\u6730\u5ef2\u58a0\u5ef2\u6c36\x6c\u735c\x68\u6c36\x69\u735c\u735a\u7313\x72\x74\x53\u59c8\x72\x69\u735a\x74\x73\x28\u5f5f\u66f0\u66f0\u624f\u5ef2\u735a\u735a\x6c\x69\u59c8\u5ef2\x74\x69\u7313\u72b8\u5f5f\u66f0\u7209\x6a\u5ef2\x76\u5ef2\x73\u59c8\x72\x69\u735a\x74\u624f\u735c\u5ef2\x68\u624f\u56c4\u5ef2\u5ef2\x68\x6c\u6c36\u5ef2\u545a\u59c8\x69\u706e\u5ef2\u545a\u5ef2\u624f\u545a\u5ef2\x69\u624f\u59c8\u545a\u5ef2\u59c8\u5ef2\u624f\u59c8\x72\u545a\u5ef2\x74\u545a\x4f\u5c2b\x6a\u545a\u59c8\x74\x55\x52\x4c\u706e\u735c\u545a\u59c8\u5ef2\x6c\u624f\u545a\x68\u58a0\u545a\x6c\u6730\x69\u5ef2\u5ef2\u5ef2\u58a0\u706e\x55\x52\x4c\u6730\u5ef2\u56c4\u5ef2\x69\u59c8\u5e77\u5f5f\u66f0\u66f0\x29\u5f5f\u6b31\u63cb\u706e\u545a\u59c8\x69\x6c\u56c4\u6c36\u63cb\x6c\u7313\u5c2b\u63cb\x75\x69\x6c\u56c4\u545a\x72\u706e\x57\u545a\u5c2b\x4b\x69\x74\u63cb\x6c\u7313\u5c2b\u63cb\x75\x69\x6c\u56c4\u545a\x72\u5e77\u5ef2\u735a\u735a\u545a\u72b8\u56c4\u624f\x6c\u58a0\u5ef2\u545a\u58a0\u706e\u577a\u545a\x74\u63cb\x6c\u7313\u5c2b\u624f\u545a\u58a0\x68\x68\u59c8\u706e\x69\u72b8\x69\x74\u5e77\u545a\u545a\u5ef2\u706e\u56c4\u58a0\u545a\u624f\u545a\x6c\u735c\u6730\u545a\u58a0\u545a\u6730\u59c8\u58a0\u545a\u706e\x69\u545a\x6c\u6c36\x69\u545a\u5ef2\u6c36\u735c\u59c8\u56c4\u6c36\u58a0\u59c8\u56c4\u5e77\u59c8\x69\x69\u56c4\u706e\u5ef2\x68\x6c\u6730\u5ef2\u545a\x69\u5e77\x69\u5ef2\x69\u6c36\u735c\u545a\u5ef2\u6c36\x6c\u56c4\u58a0\u5e77\u58a0\u545a\u545a\x6c\u6730\u59c8\x68\x68\u6730\u735c\u58a0\u735c\u5e77\x69\x6c\x68\u6c36\u59c8\x68\u5ef2\u5e77\u5ef2\u5ef2\u545a\u6c36\x69\u735c\u5ef2\u624f\x69\x69\u5ef2\u706e\u5ef2\x68\u5ef2\u706e\u59c8\x69\u58a0\u5e77\u545a\u59c8\x68\u5e77\u7313\u72b8\x73\x74\x79\x6c\u545a\x7a\u7313\u7313\u735c\x75\u735a\u56c4\u5ef2\x74\u545a\u6730\u5ef2\u735c\u735c\u6730\x68\x6c\u735c\u735c\x69\u6730\u5ef2\u56c4\x6c\u735c\u5e77\u59c8\x6c\x69\u735c\x68\u6730\u63cb\x72\u7313\x77\x73\u545a\x72\u6c36\u5ef2\u545a\u56c4\u59c8\x69\u5e77\u5ef2\u5ef2\u56c4\u545a\x69\u6c36\x69\u56c4\u735c\u545a\x69\u706e\x72\u5ef2\x74\x69\u7313\u706e\x68\u5ef2\u58a0\u735c\u5ef2\u624f\u59c8\u59c8\u5ef2\u5e77\u5ef2\u58a0\u545a\x68\x68\u6730\u5ef2\u5ef2\u56c4\u6c36\u56c4\u56c4\u56c4\u5ef2\u59c8\u5e77\u56c4\u545a\x73\x74\x72\u7313\x79\u706e\u5ef2\x72\x72\x57\u7313\x72\x6b\u545a\x72\u624f\x74\u545a\x72\u735c\x69\u72b8\u5ef2\x74\u545a\u624f\x6c\u545a\u72b8\u577a\x74\x68\u5e77\u5ef2\x68\u545a\u5e77\u5ef2\x72\x72\x50\u545a\u72b8\u56c4\x69\u72b8\u577a\u6b9b\u5ef2\x74\u5ef2\u706e\u5ef2\u58a0\u58a0\u5ef2\x69\u624f\x77\u7313\x72\u56c4\x53\u735a\u5ef2\u59c8\u545a\x52\u5ef2\x74\x69\u7313\u6730\x74\u545a\u58a0\x74\x53\x69\x7a\u545a\x52\u5ef2\x74\x69\u7313\u624f\u58a0\x6c\x69\u58a0\x69\u6c36\u5ef2\x68\u58a0\u5e77\x6c\x69\x6c\u624f\u545a\u56c4\x69\u56c4\u545a\u706e\x69\u545a\u58a0\u5ef2\u735c\u5e77\x6c\u5ef2\u545a\x6c\x68\u6c36\u545a\x69\u56c4\u59c8\u545a\u5e77\u7313\u72b8\x72\u545a\u5a32\x72\u545a\x73\x68\u6730\u545a\u5ef2\x69\u58a0\u56c4\u706e\u545a\u59c8\x69\x69\u545a\u706e\u545a\u56c4\x68\u6c36\x6c\u56c4\u5ef2\u545a\u56c4\u6730\u59c8\u56c4\u545a\x6c\u58a0\u624f\u545a\x6c\x69\x68\u58a0\u5e77\x68\x68\u5ef2\u58a0\u545a\u5e77\x68\u59c8\u5ef2\u5ef2\u545a\u5e77\x69\u545a\u5ef2\u5ef2\u56c4\u6730\u735c\u545a\u545a\u545a\u545a\u624f\u7313\u72b8\u735c\u545a\x73\x73\u5ef2\u577a\u545a\u5e77\u58a0\u5ef2\x68\u5ef2\u5ef2\u624f\x68\u59c8\u545a\u58a0\u58a0\u706e\u545a\u545a\u5ef2\u545a\u545a\u5e77\x75\x72\x6c\u624f\x74\x69\x6c\u545a\x49\u72b8\u5a32\u7313\u6730\x5f\u59c8\u5c2b\x6b\u6c36\u56c4\u5ef2\x74\u5ef2\u624f\x5f\u735a\u5ef2\x72\x73\x69\u72b8\u577a\x54\x69\x6c\u545a\x4b\u545a\x79\u5e77\u545a\u5ef2\u5ef2\u624f\x68\u735c\x68\u545a\u5ef2\u624f\x77\u7313\x72\x6b\u545a\x72\u735c\u577a\x72\u706e\u5ef2\u735c\x69\u59c8\u5ef2\u5e77\u5ef2\u545a\x69\x68\u545a\u6730\x5f\u735a\u5ef2\x72\x73\x69\u72b8\u577a\x54\x69\x6c\u545a\x49\u72b8\u5a32\u7313\u706e\u5ef2\u5ef2\u735c\u5e77\u5a32\x69\x72\u545a\u6c36\x69\u5ef2\u545a\x69\u58a0\u6c36\u5ef2\u545a\u59c8\u5ef2\x6c\u624f\x6c\u59c8\x69\u5ef2\x6c\u6730\u545a\u545a\u59c8\x68\u735c\u6c36\u58a0\u5ef2\u5ef2\x68\x6c\u5e77\x6c\u545a\u56c4\u545a\x6c\u6730\u59c8\u5c2b\x6b\u6c36\u735c\x68\u735c\x68\u735c\u6730\x5f\x69\x73\u63cb\x75\x73\x79\u6c36\x73\x68\x69\u5a32\x74\u6730\u59c8\u545a\u58a0\u545a\x68\u6c36\u735a\x75\x73\x68\u6730\u735c\u59c8\u59c8\u5e77\u56c4\u56c4\u545a\u6730\u735c\x69\u72b8\u6c36\x6c\u7313\u5ef2\u56c4\x54\x69\x6c\u545a\u6b9b\u5ef2\x74\u5ef2\u6c36\x6c\u545a\x69\x68\u58a0\u706e\x68\u59c8\u545a\u735c\u59c8\u6c36\u56c4\u735c\x68\u5ef2\u545a\u5e77\x6c\u58a0\x69\u545a\u5ef2\u624f\x68\u5ef2\x72\u56c4\x77\u5ef2\x72\u545a\u645a\u7313\u72b8\u59c8\x75\x72\x72\u545a\u72b8\u59c8\x79\u6730\u56c4\u58a0\u56c4\u5ef2\u5ef2\u5e77\x6c\u545a\u59c8\u735c\u545a\u624f\u545a\u545a\x68\u545a\u59c8"); (function(hT, T) {
        var i = function(e) {
            while (--e) {
                hT.push(hT.shift())
            }
        };
        i(++T)
    } (aB, 393));
    var az = function(hT, T) {
        hT = hT - 0;
        var i = aB[hT];
        return i
    };
    function eN(hV) {
        var hU = {
            "\x65\x61\x64\x61\x61": function(hX, hW) {
                return hX(hW)
            },
            "\x61\x78\x78\x63\x69": function(hX, hW) {
                return hX !== hW
            },
            "\x63\x65\x65\x63\x78": az("0x0"),
            "\x65\x68\x63\x6c\x64": az("0x1"),
            "\x6d\x69\x63\x65\x64": az("0x2"),
            "\x68\x68\x64\x6c\x61": function(hX, hW) {
                return hX !== hW
            },
            "\x65\x78\x78\x78\x6c": az("0x3"),
            "\x61\x61\x6c\x61\x61": az("0x4"),
            "\x61\x63\x78\x68\x61": function(hX, hW) {
                return hX(hW)
            },
            "\x64\x6c\x6d\x78\x6d": az("0x5"),
            "\x69\x78\x61\x64\x6c": function(hW, hX) {
                return hW(hX)
            },
            "\x78\x65\x61\x65\x78": az("0x6"),
            "\x61\x68\x61\x61\x61": az("0x7")
        };
        var hT = "\x64\x65\x64";
        while (hU[az("0x8")](hT, hU[az("0x9")])) {
            switch (hT) {
            case hU[az("0xa")]:
                try {
                    var T = hU[az("0xb")];
                    while (hU[az("0xc")](T, az("0xd"))) {
                        switch (T) {
                        case hU[az("0xe")]:
                            e[az("0xf")] = function(hW) {
                                hW[az("0x10")]();
                                e = hU[az("0x11")](u, hV)
                            };
                            T = az("0xd");
                            break;
                        case hU[az("0x12")]:
                            e = hU[az("0x13")](u, hV);
                            T = az("0xd");
                            break;
                        case hU[az("0x14")]:
                            e = new Worker(hV);
                            T = az("0x3");
                            break;
                        case hU[az("0xb")]:
                            T = dx[az("0x15")] ? hU[az("0x14")] : hU[az("0x12")];
                            break
                        }
                    }
                } catch(i) {
                    e = hU[az("0x16")](u, hV)
                }
                hT = hU[az("0x17")];
                break;
            case az("0x6"):
                return e;
            case hU[az("0x18")]:
                var e = null;
                hT = az("0x1");
                break
            }
        }
    }
    function u(hZ) {
        var hX = {
            "\x64\x61\x61\x68\x6c": az("0x19"),
            "\x68\x6c\x6c\x6d\x69": function(h2, h1) {
                return h2 !== h1
            },
            "\x63\x65\x61\x63\x61": "\x69\x61\x6c\x65",
            "\x61\x64\x61\x69\x63": az("0x1a"),
            "\x6d\x65\x63\x61\x6c": "\x65\x61\x69",
            "\x65\x68\x78\x65\x6c": az("0x1b"),
            "\x69\x61\x61\x61\x78": az("0x1c"),
            "\x61\x6c\x64\x68\x61": "\x61\x6c\x64",
            "\x6c\x78\x61\x65\x78": az("0x1d"),
            "\x65\x63\x69\x6c\x64": az("0x1e"),
            "\x65\x78\x68\x68\x63": az("0x1f")
        };
        var hW = hX[az("0x20")];
        while (hW !== az("0x21")) {
            switch (hW) {
            case az("0x22"):
                try {
                    var hV = az("0x23");
                    while (hX["\x68\x6c\x6c\x6d\x69"](hV, hX[az("0x24")])) {
                        switch (hV) {
                        case hX["\x61\x64\x61\x69\x63"]:
                            var hU = T[az("0x25")](hT);
                            hV = "\x61\x6c\x64";
                            break;
                        case hX[az("0x26")]:
                            var hT;
                            hV = hX[az("0x27")];
                            break;
                        case hX[az("0x28")]:
                            var T = window[az("0x29")] || window["\x77\x65\x62\x6b\x69\x74\x55\x52\x4c"];
                            hV = hX[az("0x2a")];
                            break;
                        case hX["\x61\x6c\x64\x68\x61"]:
                            hY = new Worker(hU);
                            hV = hX["\x63\x65\x61\x63\x61"];
                            break;
                        case hX[az("0x27")]:
                            try {
                                hT = new Blob([hX["\x6c\x78\x61\x65\x78"] + hZ + az("0x2b")], {
                                    type: hX[az("0x2c")]
                                })
                            } catch(i) {
                                var e = new(window[(az("0x2d"))] || window[(az("0x2e"))] || window["\x4d\x6f\x7a\x42\x6c\x6f\x62\x42\x75\x69\x6c\x64\x65\x72"])();
                                e[az("0x2f")](hX[az("0x30")] + hZ + az("0x2b"));
                                hT = e[az("0x31")](hX[az("0x2c")])
                            }
                            hV = hX["\x69\x61\x61\x61\x78"];
                            break
                        }
                    }
                } catch(h0) {}
                hW = hX[az("0x32")];
                break;
            case hX["\x65\x78\x68\x68\x63"]:
                return hY;
            case hX[az("0x20")]:
                var hY = null;
                hW = az("0x22");
                break
            }
        }
    }
    function ga(e) {
        this[az("0x33")](e)
    }
    var bh = {
        "\x69\x6e\x69\x74": function(i) {
            var e = {
                "\x68\x65\x69\x6d\x65": function(hW, hV) {
                    return hW !== hV
                },
                "\x65\x64\x69\x64\x65": az("0x34"),
                "\x69\x65\x78\x61\x6d": az("0x35"),
                "\x6c\x61\x65\x6c\x68": az("0x36"),
                "\x65\x69\x64\x63\x65": az("0x37"),
                "\x65\x61\x69\x78\x64": az("0x38"),
                "\x65\x63\x69\x69\x65": az("0x39"),
                "\x6c\x64\x61\x65\x64": az("0x3a"),
                "\x63\x64\x65\x6c\x78": az("0x3b"),
                "\x65\x6c\x69\x68\x78": az("0x3c"),
                "\x68\x68\x61\x78\x65": az("0x3d"),
                "\x68\x63\x61\x61\x65": az("0x3e"),
                "\x69\x65\x61\x61\x64": az("0x3f"),
                "\x64\x6c\x65\x61\x61": function(hV, hW) {
                    return hV < hW
                },
                "\x6d\x65\x65\x65\x65": function(hW, hV) {
                    return hW(hV)
                },
                "\x69\x65\x68\x63\x63": function(hW, hV) {
                    return hW < hV
                },
                "\x6c\x65\x69\x68\x78": az("0x40"),
                "\x78\x64\x63\x63\x65": (window.location.protocol === "http:" ? "http:": "https:") + "//api.map.baidu.com/res/webgl/10/worker_asm_2q1spc.js",
                "\x68\x63\x65\x6d\x63": function(hW, hV) {
                    return hW > hV
                },
                "\x64\x6d\x68\x61\x65": "\x6d\x6d\x63",
                "\x69\x65\x61\x69\x65": az("0x41"),
                "\x61\x65\x65\x65\x65": az("0x42"),
                "\x69\x69\x68\x63\x6c": "\x73\x74\x72\x69\x6e\x67",
                "\x65\x65\x61\x78\x64": function(hW, hV) {
                    return hW < hV
                },
                "\x78\x61\x63\x6d\x69": az("0x43"),
                "\x61\x63\x65\x6d\x63": "\x61\x64\x61",
                "\x6d\x65\x6d\x64\x65": az("0x44"),
                "\x78\x64\x6c\x68\x6c": function(hW, hV) {
                    return hW !== hV
                },
                "\x78\x64\x65\x78\x6d": az("0x45"),
                "\x6d\x61\x69\x65\x65": function(hW, hV) {
                    return hW < hV
                },
                "\x68\x68\x65\x78\x65": az("0x46"),
                "\x68\x6c\x6d\x6d\x69": az("0x47"),
                "\x63\x6c\x69\x6d\x68": function(hV) {
                    return hV()
                },
                "\x61\x65\x64\x63\x69": function(hW, hV) {
                    return hW > hV
                },
                "\x61\x61\x64\x65\x69": "\x68\x69\x64",
                "\x69\x64\x6d\x65\x69": az("0x48"),
                "\x68\x61\x78\x6d\x61": function(hV) {
                    return hV()
                },
                "\x61\x78\x65\x68\x68": az("0x49"),
                "\x64\x64\x64\x61\x63": az("0x4a"),
                "\x61\x78\x78\x61\x69": "\x63\x63\x61",
                "\x78\x6c\x69\x78\x69": "\x65\x65\x65",
                "\x6c\x65\x63\x6d\x65": az("0x4b"),
                "\x6c\x78\x69\x65\x61": az("0x4c"),
                "\x64\x78\x64\x61\x61": az("0x4d"),
                "\x65\x65\x68\x65\x63": az("0x1f"),
                "\x61\x61\x6c\x78\x6d": az("0x4e"),
                "\x61\x61\x64\x65\x61": "\x6f\x6e\x73\x74\x79\x6c\x65\x5f\x6c\x6f\x61\x64\x65\x64",
                "\x65\x69\x61\x6c\x6c": az("0x4f")
            };
            var hU = e[az("0x50")];
            while (hU !== az("0x51")) {
                switch (hU) {
                case az("0x4d"):
                    if ((e[az("0x52")](f6) || D[az("0x53")]["\x69\x65"]) && e[az("0x54")](T, 2)) {
                        hU = e[az("0x55")];
                        break
                    }
                    hU = e[az("0x56")];
                    break;
                case "\x61\x6d\x6d":
                    this[az("0x57")] = e[az("0x58")](a7);
                    hU = az("0x59");
                    break;
                case az("0x22"):
                    hU = this[az("0x57")] > 1 ? e[az("0x5a")] : az("0x5b");
                    break;
                case e[az("0x5c")]:
                    i["\x6f\x6e"](az("0x5d"),
                    function() {
                        for (var hV = 0; hV < hT["\x61\x72\x72\x57\x6f\x72\x6b\x65\x72"]["\x6c\x65\x6e\x67\x74\x68"]; hV++) {
                            if (hT["\x61\x72\x72\x57\x6f\x72\x6b\x65\x72"][hV]) {
                                hT[az("0x5e")][hV][az("0x5f")]()
                            }
                        }
                        hT["\x61\x72\x72\x57\x6f\x72\x6b\x65\x72"][az("0x60")] = 0
                    });
                    hU = "\x61\x64\x6c\x6d";
                    break;
                case az("0x61"):
                    this[az("0x62")] = [];
                    hU = az("0x4c");
                    break;
                case e[az("0x63")]:
                    this[az("0x64")] = this["\x72\x61\x74\x69\x6f"];
                    hU = "\x61\x65\x61";
                    break;
                case az("0x5b"):
                    this[az("0x65")] = 1;
                    hU = e[az("0x66")];
                    break;
                case e[az("0x66")]:
                    c1["\x63\x61\x6e\x55\x73\x65\x57\x65\x62\x41\x73\x73\x65\x6d\x62\x6c\x79"](function(h1) {
                        var h0 = {
                            "\x78\x61\x68\x61\x61": az("0x67"),
                            "\x68\x63\x65\x78\x78": function(h5, h4) {
                                return e["\x68\x65\x69\x6d\x65"](h5, h4)
                            },
                            "\x65\x65\x61\x65\x65": az("0x68"),
                            "\x69\x61\x65\x69\x78": e[az("0x69")],
                            "\x65\x65\x63\x68\x6d": e[az("0x6a")],
                            "\x68\x6d\x68\x65\x61": e[az("0x6b")],
                            "\x61\x6d\x69\x63\x61": e[az("0x6c")],
                            "\x61\x65\x69\x68\x65": az("0x3f"),
                            "\x61\x65\x63\x61\x6c": az("0x6d"),
                            "\x6c\x63\x69\x61\x6c": e[az("0x6e")],
                            "\x6d\x68\x6d\x68\x6d": e[az("0x6f")],
                            "\x78\x61\x61\x68\x6c": az("0x70"),
                            "\x6c\x65\x64\x65\x6c": e[az("0x71")],
                            "\x63\x65\x78\x65\x68": e[az("0x72")]
                        };
                        var hZ = e[az("0x73")];
                        while (hZ !== e[az("0x74")]) {
                            switch (hZ) {
                            case e[az("0x73")]:
                                var hV;
                                hZ = e[az("0x75")];
                                break;
                            case "\x61\x68\x6c":
                                hZ = h1 ? "\x6d\x6d\x63": az("0x40");
                                break;
                            case e[az("0x76")]:
                                for (var h3 = 0; e["\x64\x6c\x65\x61\x61"](h3, T); h3++) {
                                    var h2 = e[az("0x77")](eN, hV);
                                    h2[az("0x78")] = function hW(h8) {
                                        var h7 = h0[az("0x79")];
                                        while (h0[az("0x7a")](h7, "\x68\x68\x6d\x78")) {
                                            switch (h7) {
                                            case h0[az("0x7b")]:
                                                hT["\x6c\x6f\x61\x64\x54\x69\x6c\x65\x44\x61\x74\x61"](h4[az("0x7c")], h4[az("0x7d")], h4["\x74\x69\x6c\x65\x4b\x65\x79"], h5);
                                                h7 = h0["\x69\x61\x65\x69\x78"];
                                                break;
                                            case h0["\x65\x65\x63\x68\x6d"]:
                                                this[az("0x7e")] && this[az("0x7e")](h8[az("0x7f")], this[az("0x80")]);
                                                h7 = az("0x81");
                                                break;
                                            case "\x61\x61\x6d":
                                                this[az("0x80")] = null;
                                                h7 = h0[az("0x82")];
                                                break;
                                            case az("0x38"):
                                                h6["\x73\x6f\x75\x72\x63\x65"] = az("0x83");
                                                h7 = h0[az("0x84")];
                                                break;
                                            case h0[az("0x85")]:
                                                this[az("0x86")] = null;
                                                h7 = az("0x87");
                                                break;
                                            case az("0x37"):
                                                i[az("0x88")](h6);
                                                h7 = "\x68\x68\x6d\x78";
                                                break;
                                            case h0[az("0x89")]:
                                                var h6 = new bc(h0[az("0x8a")]);
                                                h7 = h0[az("0x8b")];
                                                break;
                                            case h0[az("0x79")]:
                                                h7 = h8[az("0x7f")] ? h0[az("0x8c")] : h0["\x6d\x68\x6d\x68\x6d"];
                                                break;
                                            case h0[az("0x8d")]:
                                                this[az("0x7e")] = null;
                                                h7 = az("0x3f");
                                                break;
                                            case h0[az("0x8e")]:
                                                var h5 = h4[az("0x8f")];
                                                h7 = az("0x68");
                                                break;
                                            case h0[az("0x90")]:
                                                this[az("0x7e")] && this[az("0x7e")](null, this[az("0x80")]);
                                                h7 = "\x65\x61\x61";
                                                break;
                                            case az("0x81"):
                                                this[az("0x91")] = ![];
                                                h7 = "\x65\x64\x68";
                                                break;
                                            case h0["\x63\x65\x78\x65\x68"]:
                                                var h4 = hT[az("0x62")][az("0x92")]();
                                                h7 = az("0x3a");
                                                break;
                                            case az("0x36"):
                                                if (hT[az("0x62")]["\x6c\x65\x6e\x67\x74\x68"] > 0) {
                                                    h7 = h0[az("0x93")];
                                                    break
                                                }
                                                h7 = h0["\x69\x61\x65\x69\x78"];
                                                break
                                            }
                                        }
                                    };
                                    hT[az("0x5e")][az("0x94")](h2)
                                }
                                hZ = az("0x95");
                                break;
                            case az("0x96"):
                                for (var hY = 0; e["\x69\x65\x68\x63\x63"](hY, Math[az("0x97")](hT[az("0x62")][az("0x60")], T)); hY++) {
                                    var hX = hT[az("0x62")]["\x73\x68\x69\x66\x74"]();
                                    hT[az("0x98")](hX[az("0x7c")], hX[az("0x7d")], hX["\x74\x69\x6c\x65\x4b\x65\x79"], hX[az("0x8f")])
                                }
                                hZ = az("0x3d");
                                break;
                            case e[az("0x99")]:
                                hV = e["\x78\x64\x63\x63\x65"];
                                hZ = az("0x3f");
                                break;
                            case az("0x95"):
                                if (e[az("0x9a")](hT["\x61\x72\x72\x50\x65\x6e\x64\x69\x6e\x67\x44\x61\x74\x61"][az("0x60")], 0)) {
                                    hZ = az("0x96");
                                    break
                                }
                                hZ = e[az("0x74")];
                                break;
                            case e[az("0x9b")]:
                                hV = (window.location.protocol === "http:" ? "http:": "https:") + "//api.map.baidu.com/res/webgl/10/worker_wasm_u2pign.js";
                                hZ = az("0x3f");
                                break
                            }
                        }
                    });
                    hU = "\x6c\x6d\x68";
                    break;
                case e[az("0x50")]:
                    var hT = this;
                    hU = e["\x6c\x65\x63\x6d\x65"];
                    break;
                case e[az("0x9c")]:
                    var T = navigator[az("0x9d")] || 4;
                    hU = e[az("0x9e")];
                    break;
                case e[az("0x55")]:
                    T = 2;
                    hU = az("0x48");
                    break;
                case "\x69\x6d\x61":
                    this[az("0x65")] = 2;
                    hU = e["\x78\x6c\x69\x78\x69"];
                    break;
                case e[az("0x9f")]:
                    this["\x6d\x61\x70"] = i;
                    hU = az("0x61");
                    break;
                case e[az("0xa0")]:
                    i["\x6f\x6e"](e[az("0xa1")],
                    function() {
                        var hX = e[az("0xa2")];
                        while (hX !== az("0x43")) {
                            switch (hX) {
                            case e[az("0xa3")]:
                                if (typeof this[az("0xa4")][az("0xa5")] !== e[az("0xa6")]) {
                                    hX = az("0xa7");
                                    break
                                }
                                hX = az("0x43");
                                break;
                            case e[az("0xa2")]:
                                for (var hW = 0,
                                hV = hT[az("0x5e")][az("0x60")]; e["\x65\x65\x61\x78\x64"](hW, hV); hW++) {
                                    hT[az("0x5e")][hW][az("0xa8")] = ![]
                                }
                                hX = e["\x61\x65\x65\x65\x65"];
                                break;
                            case az("0xa9"):
                                ga[az("0xaa")] = [];
                                hX = e[az("0xab")];
                                break;
                            case e[az("0xac")]:
                                ga[az("0xad")] = null;
                                hX = az("0xa9");
                                break
                            }
                        }
                    });
                    hU = "\x69\x69\x61";
                    break;
                case az("0x1c"):
                    i["\x6f\x6e"](e[az("0xae")],
                    function() {
                        var hX = e[az("0xaf")];
                        while (e[az("0xb0")](hX, az("0xb1"))) {
                            switch (hX) {
                            case e["\x78\x64\x65\x78\x6d"]:
                                if (e[az("0xb0")](typeof this["\x63\x6f\x6e\x66\x69\x67"][az("0xa5")], az("0xb2"))) {
                                    hX = az("0x49");
                                    break
                                }
                                hX = az("0xb1");
                                break;
                            case az("0x46"):
                                ga[az("0xaa")] = [];
                                hX = "\x68\x6c\x64\x6d";
                                break;
                            case az("0x44"):
                                for (var hW = 0,
                                hV = hT["\x61\x72\x72\x57\x6f\x72\x6b\x65\x72"][az("0x60")]; e["\x6d\x61\x69\x65\x65"](hW, hV); hW++) {
                                    hT[az("0x5e")][hW]["\x69\x73\x53\x65\x6e\x64\x46\x53"] = ![]
                                }
                                hX = az("0x45");
                                break;
                            case az("0x49"):
                                ga[az("0xad")] = null;
                                hX = e["\x68\x68\x65\x78\x65"];
                                break
                            }
                        }
                    });
                    hU = az("0x1f");
                    break;
                case e["\x69\x64\x6d\x65\x69"]:
                    this[az("0x5e")] = [];
                    hU = e[az("0xb3")];
                    break
                }
            }
        },
        "\x67\x65\x74\x49\x64\x6c\x65\x57\x6f\x72\x6b\x65\x72": function() {
            var e = {
                "\x63\x61\x61\x69\x6c": az("0xb4"),
                "\x61\x6d\x63\x65\x69": function(hV, hW) {
                    return hV !== hW
                },
                "\x6d\x78\x6c\x6c\x6c": az("0xb5"),
                "\x65\x64\x78\x61\x6c": az("0xb6")
            };
            for (var hU = 0,
            hT = this["\x61\x72\x72\x57\x6f\x72\x6b\x65\x72"][az("0x60")]; hU < hT; hU++) {
                var T = e[az("0xb7")];
                while (e[az("0xb8")](T, az("0xb6"))) {
                    switch (T) {
                    case az("0xb9"):
                        i["\x5f\x69\x73\x42\x75\x73\x79"] = !![];
                        T = "\x61\x65\x61";
                        break;
                    case az("0x22"):
                        return i;
                    case e["\x63\x61\x61\x69\x6c"]:
                        var i = this["\x61\x72\x72\x57\x6f\x72\x6b\x65\x72"][hU];
                        T = e["\x6d\x78\x6c\x6c\x6c"];
                        break;
                    case e[az("0xba")]:
                        if (!i[az("0x91")]) {
                            T = az("0xb9");
                            break
                        }
                        T = e[az("0xbb")];
                        break
                    }
                }
            }
            return null
        },
        "\x72\x65\x6c\x65\x61\x73\x65\x50\x65\x6e\x64\x69\x6e\x67\x44\x61\x74\x61": function(hT) {
            var hU = {
                "\x65\x61\x61\x61\x61": function(hZ, hY) {
                    return hZ !== hY
                },
                "\x78\x78\x69\x6c\x69": function(hZ, hY) {
                    return hZ + hY
                }
            };
            var T = [];
            var i = this[az("0x62")];
            for (var e = i[az("0x60")] - 1; e >= 0; e--) {
                var hX = i[e];
                var hW = hX[az("0x7d")];
                if (hU["\x65\x61\x61\x61\x61"](hT[az("0xbc")], hW["\x74\x69\x6c\x65\x54\x79\x70\x65\x4e\x61\x6d\x65"])) {
                    continue
                }
                var hV = hU[az("0xbd")](hU[az("0xbd")](hU[az("0xbd")](az("0xbe") + hW[az("0xbf")], "\x5f"), hW[az("0xc0")]) + "\x5f", hW[az("0xc1")]);
                if (!hT[hV]) {
                    i["\x73\x70\x6c\x69\x63\x65"](e, 1);
                    T[az("0x94")](hW)
                }
            }
            return T
        },
        "\x6c\x6f\x61\x64\x54\x69\x6c\x65\x44\x61\x74\x61": function(h3, h2, h1, hZ) {
            var hX = {
                "\x65\x68\x63\x69\x6c": function(h5, h4) {
                    return h5 !== h4
                },
                "\x6c\x69\x61\x64\x6d": "\x6c\x6d\x63\x61",
                "\x63\x65\x61\x64\x78": az("0xc2"),
                "\x78\x63\x78\x6c\x68": az("0xc3"),
                "\x61\x6c\x61\x63\x61": az("0xc4"),
                "\x78\x69\x6c\x65\x6c": az("0xc5"),
                "\x6d\x6c\x65\x6c\x6d": "\x6c\x61\x65",
                "\x65\x61\x61\x61\x6c": "\x6c\x68\x78",
                "\x65\x68\x65\x61\x64": "\x61\x61\x69",
                "\x65\x63\x61\x65\x65": "\x63\x63\x65",
                "\x69\x63\x61\x65\x63": az("0xc6"),
                "\x68\x6d\x78\x69\x61": "\x69\x63\x69",
                "\x65\x68\x69\x65\x69": az("0xc7"),
                "\x68\x68\x64\x65\x65": az("0x23"),
                "\x6d\x6d\x78\x65\x61": az("0xc8"),
                "\x69\x64\x64\x64\x64": az("0xc9"),
                "\x68\x78\x63\x63\x63": "\x65\x6c\x61",
                "\x65\x63\x6d\x63\x63": az("0xca"),
                "\x68\x69\x63\x61\x6c": az("0xcb"),
                "\x65\x68\x69\x68\x61": az("0xcc"),
                "\x78\x6d\x68\x65\x61": az("0xcd"),
                "\x65\x64\x65\x65\x6c": az("0xce"),
                "\x68\x6d\x64\x61\x6d": function(h4, h5) {
                    return h4 === h5
                },
                "\x6c\x68\x68\x61\x65": az("0xcf"),
                "\x65\x61\x65\x78\x63": "\x6c\x69\x68",
                "\x6d\x61\x63\x61\x6d": az("0xd0"),
                "\x78\x64\x6c\x61\x64": az("0xd1"),
                "\x6d\x63\x69\x78\x78": az("0xd2"),
                "\x69\x61\x6c\x78\x68": function(h5, h4) {
                    return h5 + h4
                },
                "\x63\x61\x69\x78\x6c": az("0xd3"),
                "\x6c\x65\x61\x78\x61": "\x69\x63\x6f\x6e\x53\x65\x74\x49\x6e\x66\x6f",
                "\x6d\x68\x65\x63\x78": az("0x4d"),
                "\x69\x68\x78\x63\x64": function(h5, h4) {
                    return h5 + h4
                },
                "\x64\x61\x65\x6d\x6d": "\x46\x65\x61\x74\x75\x72\x65\x53\x74\x79\x6c\x65",
                "\x61\x61\x6d\x61\x69": "\x73\x74\x72\x69\x6e\x67\x69\x66\x69\x65\x64\x49\x63\x6f\x6e\x53\x65\x74\x49\x6e\x66\x6f",
                "\x78\x65\x63\x6d\x64": "\x65\x78\x65",
                "\x61\x6d\x69\x69\x69": az("0xd4"),
                "\x78\x65\x64\x68\x65": az("0xd5"),
                "\x69\x65\x69\x61\x68": az("0xd6"),
                "\x65\x65\x64\x65\x68": function(h5, h4) {
                    return h5 + h4
                },
                "\x68\x65\x69\x64\x78": az("0x4a")
            };
            var h0 = az("0xd6");
            while (hX[az("0xd7")](h0, hX[az("0xd8")])) {
                switch (h0) {
                case "\x61\x69\x61":
                    e[az("0xd9")] = ga[az("0xad")];
                    h0 = hX[az("0xda")];
                    break;
                case hX["\x78\x63\x78\x6c\x68"]:
                    if (hV && ga[az("0xad")]) {
                        h0 = hX["\x61\x6c\x61\x63\x61"];
                        break
                    }
                    h0 = hX[az("0xda")];
                    break;
                case hX[az("0xdb")]:
                    var hY = this[az("0xdc")]["\x5f\x64\x69\x73\x70\x6c\x61\x79\x4f\x70\x74\x69\x6f\x6e\x73"][az("0xdd")];
                    h0 = hX[az("0xde")];
                    break;
                case hX[az("0xdf")]:
                    var hW = this[az("0xdc")][az("0xe0")]();
                    h0 = hX[az("0xe1")];
                    break;
                case az("0xcb"):
                    i["\x5f\x70\x61\x72\x73\x69\x6e\x67\x54\x69\x6c\x65\x49\x6e\x66\x6f"] = h2;
                    h0 = az("0xe2");
                    break;
                case az("0x4a"):
                    if (!ga[az("0xe3") + hT]) {
                        h0 = "\x69\x6c\x63";
                        break
                    }
                    h0 = hX[az("0xe4")];
                    break;
                case hX[az("0xe5")]:
                    i[az("0xe6")](e);
                    h0 = "\x6c\x6d\x63\x61";
                    break;
                case hX[az("0xe7")]:
                    hT = hX[az("0xe8")];
                    h0 = az("0xe9");
                    break;
                case hX["\x65\x63\x61\x65\x65"]:
                    if (!ga[az("0xea")]) {
                        h0 = hX[az("0xeb")];
                        break
                    }
                    h0 = hX[az("0xec")];
                    break;
                case "\x68\x61\x6c":
                    if (ga[hX[az("0xed")] + hW]) {
                        h0 = hX["\x68\x78\x63\x63\x63"];
                        break
                    }
                    h0 = hX[az("0xee")];
                    break;
                case az("0xef"):
                    i[az("0x7e")] = hZ;
                    h0 = hX[az("0xf0")];
                    break;
                case hX[az("0xf1")]:
                    e[az("0xf2")] = hW;
                    h0 = hX["\x78\x6d\x68\x65\x61"];
                    break;
                case hX[az("0xf3")]:
                    this[az("0x62")][az("0x94")](hU);
                    h0 = hX[az("0xd8")];
                    break;
                case az("0xf4"):
                    var hV = !!hX[az("0xf5")](hW[az("0xf6")](az("0xf7")), 0);
                    h0 = hX[az("0xf8")];
                    break;
                case az("0xf9"):
                    h0 = i ? az("0xef") : az("0xfa");
                    break;
                case hX["\x65\x61\x65\x78\x63"]:
                    if (!i["\x69\x73\x53\x65\x6e\x64\x46\x53"]) {
                        h0 = hX[az("0xfb")];
                        break
                    }
                    h0 = az("0xc6");
                    break;
                case az("0xfa"):
                    var hU = {
                        "\x75\x72\x6c": h3,
                        "\x74\x69\x6c\x65\x49\x6e\x66\x6f": h2,
                        "\x74\x69\x6c\x65\x4b\x65\x79": h1,
                        "\x63\x62\x6b": hZ
                    };
                    h0 = az("0xce");
                    break;
                case hX[az("0xda")]:
                    e[az("0xfc")] = {
                        "\x77\x6f\x72\x64\x53\x70\x61\x63\x65\x52\x61\x74\x69\x6f": this["\x77\x6f\x72\x64\x53\x70\x61\x63\x65\x52\x61\x74\x69\x6f"],
                        "\x74\x65\x78\x74\x53\x69\x7a\x65\x52\x61\x74\x69\x6f": this["\x74\x65\x78\x74\x53\x69\x7a\x65\x52\x61\x74\x69\x6f"]
                    };
                    h0 = hX[az("0xf1")];
                    break;
                case hX["\x6d\x6d\x78\x65\x61"]:
                    if (hV && bp["\x63\x75\x73\x74\x6f\x6d\x53\x74\x79\x6c\x65\x49\x6e\x66\x6f"]) {
                        h0 = hX["\x78\x64\x6c\x61\x64"];
                        break
                    }
                    h0 = az("0xd5");
                    break;
                case az("0xe2"):
                    i["\x5f\x70\x61\x72\x73\x69\x6e\x67\x54\x69\x6c\x65\x4b\x65\x79"] = h1;
                    h0 = hX["\x6d\x63\x69\x78\x78"];
                    break;
                case hX["\x68\x68\x64\x65\x65"]:
                    ga["\x73\x74\x72\x69\x6e\x67\x69\x66\x69\x65\x64\x49\x6e\x64\x6f\x6f\x72\x53\x74\x79\x6c\x65"] = JSON[az("0xfd")](bp[az("0xfe")]);
                    h0 = az("0xc8");
                    break;
                case az("0xff"):
                    e[az("0x100")] = ga[hX[az("0x101")](hX[az("0xed")], hW)];
                    h0 = hX["\x65\x63\x6d\x63\x63"];
                    break;
                case hX[az("0x102")]:
                    i[az("0xa8")] = !![];
                    h0 = hX[az("0xe5")];
                    break;
                case hX["\x63\x61\x69\x78\x6c"]:
                    ga[hX[az("0x101")](az("0xe3"), hT)] = JSON[az("0xfd")](bp[hX["\x6c\x65\x61\x78\x61"] + hT]);
                    h0 = hX[az("0xe4")];
                    break;
                case hX[az("0xf8")]:
                    var hT = hW;
                    h0 = hX["\x6d\x68\x65\x63\x78"];
                    break;
                case hX[az("0x103")]:
                    if (!ga[az("0xad")]) {
                        h0 = az("0xd4");
                        break
                    }
                    h0 = az("0xd5");
                    break;
                case az("0xd0"):
                    if (!ga[hX[az("0x104")](hX[az("0xed")], hW)] && bp[hX[az("0x104")](hX[az("0x105")], hW)]) {
                        h0 = az("0x106");
                        break
                    }
                    h0 = az("0x4a");
                    break;
                case "\x65\x63\x68":
                    if (hV) {
                        h0 = az("0x107");
                        break
                    }
                    h0 = "\x6c\x69\x68";
                    break;
                case az("0xca"):
                    e[az("0x108")] = ga[hX[az("0x109")] + hT];
                    h0 = hX[az("0x10a")];
                    break;
                case hX[az("0x10a")]:
                    e[az("0xfe")] = ga[az("0xea")];
                    h0 = az("0xc3");
                    break;
                case hX[az("0x10b")]:
                    ga[az("0xad")] = JSON[az("0xfd")](bp["\x63\x75\x73\x74\x6f\x6d\x53\x74\x79\x6c\x65\x49\x6e\x66\x6f"]);
                    h0 = hX[az("0x10c")];
                    break;
                case hX[az("0xde")]:
                    var T = hY ? this[az("0xdc")][az("0x10d")][az("0x10e")] : ![];
                    h0 = az("0xf9");
                    break;
                case hX[az("0x10f")]:
                    var i = this[az("0x110")]();
                    h0 = hX[az("0xdb")];
                    break;
                case hX[az("0x111")]:
                    var e = {
                        "\x61\x63\x74\x69\x6f\x6e": az("0x98"),
                        "\x75\x72\x6c": h3,
                        "\x74\x69\x6c\x65\x49\x6e\x66\x6f": h2,
                        "\x74\x69\x6c\x65\x4b\x65\x79": h1,
                        "\x69\x73\x54\x65\x78\x74": T,
                        "\x69\x73\x50\x6f\x69": hY
                    };
                    h0 = "\x6c\x68\x78";
                    break;
                case az("0x106"):
                    ga[hX[az("0x112")](hX["\x69\x64\x64\x64\x64"], hW)] = JSON[az("0xfd")](bp[hX[az("0x105")] + hW]);
                    h0 = hX[az("0x113")];
                    break
                }
            }
        }
    };
    D[az("0x114")](ga["\x70\x72\x6f\x74\x6f\x74\x79\x70\x65"], bh);
    function dU(i) {
        this.tileLayers = [];
        this.map = i;
        var e = this.config = b7[this.map.mapType];
        this.errorUrl = e.errorUrl;
        this.tileSize = e.tileSize;
        this.baseUnits = e.baseUnits;
        this.baseZoomLevel = e.zoomLevelBase;
        this.tileURLs = e.tileUrls;
        this.tilesInfoCache = {};
        this.loadDelay = 10;
        this._labelTextCanvas = null
    }
    bp.register(function(i) {
        if (i._renderType !== "webgl") {
            return
        }
        var e = i.tileMgr = new dU(i);
        i.addEventListener("addtilelayer",
        function(hT) {
            e.addWebGLLayer(hT.target)
        });
        i.addEventListener("removetilelayer",
        function(hT) {
            e.removeWebGLLayer(hT.target)
        });
        i.on("update",
        function T(hT) {
            if (!bp["FeatureStyle" + this.config.style] && !bp.customStyleLoaded) {
                return
            }
            e.loadLayersData({
                zoomChanged: hT.changedStatus.onzoom_changed ? true: false
            })
        });
        i.on("style_changed",
        function() {
            e.loadLayersData()
        })
    });
    D.extend(dU.prototype, {
        addWebGLLayer: function(hT) {
            this.tileLayers.push(hT);
            hT.initDrawData();
            if (this.tileLayers.length > 1) {
                for (var T = 1; T < this.tileLayers.length; T++) {
                    if (this.tileLayers[T].isFlat) {
                        this.map.setDisplayOptions({
                            isFlat: true
                        });
                        break
                    }
                }
            }
            var e = this.map.config.style;
            if (bp["FeatureStyle" + e]) {
                this.loadLayersData()
            } else {
                var hU = this;
                this.map.loadMapStyleFiles(function() {
                    hU.loadLayersData()
                })
            }
        },
        removeWebGLLayer: function(hV) {
            var hW = false;
            for (var hU = 0,
            hT = this.tileLayers.length; hU < hT; hU++) {
                if (hV === this.tileLayers[hU]) {
                    hW = true;
                    this.tileLayers.splice(hU, 1);
                    break
                }
            }
            if (hW === false) {
                return
            }
            hV.destroyDrawData();
            if (bp["FeatureStyle" + this.map.config.style]) {
                this.loadLayersData()
            }
            if (this.tileLayers.length === 1) {
                this.map.setDisplayOptions({
                    isFlat: false
                })
            } else {
                var e = false;
                for (var hU = 1; hU < this.tileLayers.length; hU++) {
                    if (this.tileLayers[hU].isFlat) {
                        e = true;
                        break
                    }
                }
                this.map.setDisplayOptions({
                    isFlat: e
                })
            }
            var T = new bc("onrefresh");
            T.source = "removewebgllayer";
            this.map.fire(T)
        },
        getLabelTextCanvas: function() {
            if (!this._labelTextCanvas) {
                this._labelTextCanvas = new w(this.map)
            }
            return this._labelTextCanvas
        },
        loadLayersData: function(i) {
            if (this.map.suspendLoad) {
                return
            }
            var hT = this;
            i = i || {};
            var T = !!i.zoomChanged;
            var e = (T === true || this.map.getTilt() > 50);
            if (!e) {
                if (!this.syncLoadTimer) {
                    this.syncLoadTimer = setTimeout(function() {
                        hT._loadLayersFromCache(T);
                        hT.syncLoadTimer = null
                    },
                    40)
                }
            } else {
                this._loadLayersFromCache(T)
            }
            if (!hT.map.viewAnimationTime) {
                this.timer && window.clearTimeout(this.timer)
            }
            this.timer = window.setTimeout(function() {
                if (hT.map.viewAnimationTime) {
                    if (new Date().getTime() - hT.map.viewAnimationTime < 1000) {
                        return
                    }
                    hT.map.viewAnimationTime = new Date().getTime()
                }
                var hV = hT.tileLayers.length;
                hT.tilesInfoCache = {};
                for (var hW = 0; hW < hV; hW++) {
                    var hY = hT.tileLayers[hW];
                    var hX = hY.tileType;
                    var hU = null;
                    if (hT.tilesInfoCache[hX.getName()]) {
                        hU = hT.tilesInfoCache[hX.getName()]
                    } else {
                        hU = hT.calcTilesInfo(hX);
                        hT.tilesInfoCache[hX.getName()] = hU
                    }
                    hY.loadLayerData(hU, false, T)
                }
                hT.timer = null
            },
            this.loadDelay);
            if ((f6() || D.Browser.ie) && T) {
                this.loadDelay = 200
            } else {
                this.loadDelay = 80
            }
        },
        _loadLayersFromCache: function(hU) {
            this.map._featureMgr.clearData();
            var hX = this.tileLayers;
            hX.sort(function(hY, i) {
                return hY.zIndex - i.zIndex > 0
            });
            var T = hX.length;
            this.tilesInfoCache = {};
            for (var hT = 0; hT < T; hT++) {
                var hW = hX[hT];
                var hV = hW.tileType;
                var e = null;
                if (this.tilesInfoCache[hV.getName()]) {
                    e = this.tilesInfoCache[hV.getName()]
                } else {
                    e = this.calcTilesInfo(hV);
                    this.tilesInfoCache[hV.getName()] = e
                }
                hW.loadLayerData(e, true, hU)
            }
        },
        calcTilesInfo: function(h5) {
            var ij = this.map;
            var iq = ij.getMapType();
            var ik = b7[iq];
            var ic = ij.getZoom();
            var e = Math.floor(ic);
            var hW = h5.getDataZoom(ic);
            var iB = h5.getName();
            hW = fG(hW, ik.minDataZoom, ik.maxDataZoom);
            var iu = e;
            if (h5._name === "web") {
                iu = hW
            } else {
                if (iu < 3) {
                    iu = 3
                }
            }
            var ii = h5.getTileSize(ic);
            var hV = h5.getBaseTileSize(ic);
            var h9 = h5.getMercatorSize(ic, hW);
            var h8;
            var ir;
            var ih;
            var iw;
            var il = ij.getCenterIn();
            if (iq !== BMAP_SATELLITE_MAP) {
                il = d5.calcLoopCenterPoint(il)
            }
            var ie = Math.floor(il.lng / h9);
            var hY = Math.floor(il.lat / h9);
            var ig = ij.getBoundsIn();
            var io = 0;
            var hT = 0;
            ig = d5.calcLoopMapBounds(ig, ij.getCenter());
            if (ig.ne.lng > d5._mc180X) {
                var h3 = d5.getSpaceDistanceInPixel(hW);
                io = Math.ceil(h3 / hV)
            }
            if (ig.sw.lng < d5._mcM180X) {
                var h3 = d5.getSpaceDistanceInPixel(hW);
                hT = Math.ceil(h3 / hV)
            }
            if (ig.ne.lat > 19505879.362428114 || ig.sw.lat < -15949096.637571886) {
                ig.ne.lat = 19505879.362428114;
                ig.sw.lat = -15949096.637571886
            }
            var h0 = [Math.floor(ig.sw.lng / h9) - hT, Math.floor(ig.sw.lat / h9)];
            var iz = [Math.floor(ig.ne.lng / h9) + io, Math.floor(ig.ne.lat / h9)];
            h8 = h0[0];
            ir = iz[0] + 1;
            ih = h0[1];
            iw = iz[1] + 1;
            var h4 = [];
            for (var h1 = h8; h1 < ir; h1++) {
                if (d5.isTileBlank(h1, hW, hV) === true) {
                    continue
                }
                for (var h6 = ih; h6 < iw; h6++) {
                    var h2 = {
                        col: h1,
                        row: h6,
                        zoom: hW,
                        useZoom: iu,
                        tileTypeName: iB,
                        loopOffsetX: 0,
                        tileSize: ii,
                        baseTileSize: hV,
                        mercatorSize: h9
                    };
                    h4.push(h2);
                    var ip = "id_" + h1 + "_" + h6 + "_" + hW;
                    h4[ip] = true
                }
            }
            if (iq !== BMAP_SATELLITE_MAP) {
                h4 = d5.calcLoopTiles(h4, hW, hV, h9)
            }
            if (hW === 3) {
                for (var iy = 0,
                ix = h4.length; iy < ix; iy++) {
                    var h1 = h4[iy].col;
                    var h6 = h4[iy].row;
                    var it = d5.calcLoopParam(h1, hW);
                    var hX = it.T;
                    var ia = h1 >= 0 ? h1 - hX: h1 + hX;
                    var ib = "id_" + ia + "_" + h6 + "_" + hW;
                    if (!h4[ib]) {
                        var h2 = {
                            col: ia,
                            row: h6,
                            zoom: hW,
                            useZoom: iu,
                            loopOffsetX: 0,
                            tileSize: ii,
                            baseTileSize: hV,
                            mercatorSize: h9
                        };
                        h4.push(h2);
                        h4[ib] = true
                    }
                }
            }
            if (this.map._tilt > 0) {
                for (var iy = 0; iy < h4.length; iy++) {
                    var hZ = h4[iy];
                    var iv = hZ.col;
                    var iA = hZ.row;
                    var im = [];
                    im.minX = iv * h9;
                    im.maxX = (iv + 1) * h9;
                    im.minY = iA * h9;
                    im.maxY = (iA + 1) * h9;
                    var hU = new hu(0, 0);
                    hU.lng = (im.minX + im.maxX) / 2;
                    hU.lat = (im.minY + im.maxY) / 2;
                    var h7 = ij.pointToPixelIn(hU);
                    if (h7.x > 0 && h7.x < this.map.width && h7.y > 0 && h7.y < this.map.height) {
                        continue
                    }
                    if (im.minX < il.lng && im.maxX > il.lng && im.minY < il.lat && im.maxY > il.lat) {
                        continue
                    }
                    if (!this.ifTileInMapBounds(im, ig, iv, iA)) {
                        h4.splice(iy, 1);
                        iy--
                    }
                }
            }
            h4.sort((function(i) {
                return function(T, id) {
                    return ((0.4 * Math.abs(T.col - i[0]) + 0.6 * Math.abs(T.row - i[1])) - (0.4 * Math.abs(id.col - i[0]) + 0.6 * Math.abs(id.row - i[1])))
                }
            })([ie, hY]));
            h4.zoom = hW;
            h4.tileTypeName = iB;
            return h4
        },
        getCurrentViewTilesInfo: function(i) {
            var e = this.tilesInfoCache[i.getName()];
            if (!e) {
                return this.calcTilesInfo(i)
            }
            return e
        },
        ifTileInMapBounds: function(e, hV, T, hU) {
            var i = hV.normalizedBottomLeft;
            var h6 = hV.normalizedTopRight;
            var hY = hV.normalizedTopLeft;
            var hW = hV.normalizedBottomRight;
            var hT = false;
            var h5 = new hu(e.minX, e.minY);
            var h2 = new hu(e.maxX, e.maxY);
            var hX = new hu(h2.lng, h5.lat);
            var h3 = new hu(h5.lng, h2.lat);
            var h0 = [h3, h2, hX, h5];
            for (var h4 = 0,
            hZ = h0.length; h4 < hZ; h4++) {
                var h1 = h4 + 1;
                if (h1 === hZ) {
                    h1 = 0
                }
                var h7 = h4;
                var h8 = gy(h0[h1], h0[h7], hY, i);
                if (h8) {
                    hT = true;
                    break
                }
                h8 = gy(h0[h1], h0[h7], hW, h6);
                if (h8) {
                    hT = true;
                    break
                }
                h8 = gy(h0[h1], h0[h7], h6, hY);
                if (h8) {
                    hT = true;
                    break
                }
                h8 = gy(h0[h1], h0[h7], i, hW);
                if (h8) {
                    hT = true;
                    break
                }
            }
            return hT
        },
        getTileLayer: function(hU) {
            for (var hT = 0,
            e = this.tileLayers.length; hT < e; hT++) {
                var T = this.tileLayers[hT];
                if (T.mapType === hU) {
                    return T
                }
            }
            return null
        }
    });
    function aT(e) {
        this._map = e;
        this._spotsId = null;
        this._init()
    }
    aT.prototype._init = function() {
        var e = this._map;
        e.addEventListener("onspotsdataready",
        function(T) {
            var i = T.spots;
            if (this._spotsId) {
                e.removeSpots(this._spotsId)
            }
            this._spotsId = e.addSpots(i)
        })
    };
    bp.register(function(e) {
        if (!e.config.enableIconClick) {
            return
        }
        e._mapIcon = new aT(e)
    });
    function aW(e) {
        this._indoorData = {};
        this._map = e;
        this.currentUid = null;
        this.currentFloor = null;
        this._indoorControl = null;
        this.enterMethod = null;
        this.showMask = false;
        this._isMobile = f6();
        this._autoEnterZoom = 19;
        if (this._isMobile) {
            this._autoEnterZoom = 17
        }
        this._init(e);
        window._indoorMgr = this
    }
    aW.prototype._init = function(i) {
        var e = this;
        i.on("indoor_status_changed",
        function(hW) {
            var T = hW.uid;
            var hU = hW.floor;
            if (T === null) {
                T = e.currentUid;
                if (e._indoorData[T]) {
                    hU = e._indoorData[T].defaultFloor
                }
                if (e._indoorControl) {
                    e._indoorControl.hide()
                }
                e.currentUid = null;
                e.currentFloor = null;
                e.enterMethod = null
            } else {
                if (e._indoorData[T]) {
                    var hV = e._indoorData[T];
                    hU = (typeof hU === "number") ? hU: hV.defaultFloor;
                    if (!e._indoorControl) {
                        if (i.config.showControls && i._displayOptions.indoor) {
                            e._indoorControl = new gC(i, hV)
                        }
                    } else {
                        e._indoorControl.setInfo(hV);
                        e._indoorControl.show()
                    }
                    e.currentUid = T;
                    e.currentFloor = hU
                }
            }
            if (!e._indoorData || !e._indoorData[T] || e._indoorData[T].currentFloor === hU) {
                this.fire(new bc("onrefresh"));
                return
            }
            var hT = new bc("onindoor_data_refresh");
            hT.uid = T;
            hT.floor = hU;
            hT.tileKey = e._indoorData[T].tileKey;
            e._indoorData[T].currentFloor = hU;
            e.currentFloor = hU;
            this.fire(hT)
        });
        i.on("spotclick",
        function(hT) {
            var T = null;
            if (hT.curAreaSpot && this.areaSpots[hT.curAreaSpot]) {
                T = this.areaSpots[hT.curAreaSpot].userData.uid
            }
            if (T === e.currentUid) {
                if (hT.curAreaSpot) {
                    e.enterMethod = "byClick"
                }
                return
            }
            if (T === null) {
                if (e.currentUid && e.enterMethod === "byClick") {
                    i.showIndoor(null);
                    e.enterMethod = null
                }
            } else {
                e.enterMethod = "byClick";
                if (e.currentUid) {
                    i.showIndoor(e.currentUid, e._indoorData[e.currentUid].defaultFloor)
                }
                i.showIndoor(T, e._indoorData[T].defaultFloor)
            }
        });
        i.on("moveend",
        function() {
            if (this.getZoom() >= e._autoEnterZoom) {
                e._checkIndoorByMove()
            }
        });
        i.on("zoomend",
        function() {
            if (this.getZoom() >= e._autoEnterZoom) {
                e._checkIndoorByMove()
            } else {
                if (e.enterMethod !== "byClick" && e.currentUid !== null) {
                    this.showIndoor(null)
                }
            }
        })
    };
    aW.prototype._checkIndoorByMove = function() {
        var T = this._map;
        var hZ = T.getSize();
        var h4 = {
            x: hZ.width / 2,
            y: hZ.height / 2
        };
        var h3 = Math.max(hZ.width, hZ.height);
        var h5 = [];
        for (var h0 in this._indoorData) {
            var e = this._indoorData[h0].center;
            var hT = T.pointToPixelIn(new bp.Point(e[0], e[1]));
            var hW = gX(h4, hT);
            h5.push({
                uid: h0,
                distance: hW
            })
        }
        if (h5.length === 0) {
            return
        }
        h5.sort(function(h6, i) {
            return h6.distance - i.distance
        });
        var hV = h5[0];
        var h1 = T.getCenterIn();
        var hU = false;
        for (var hY = 0; hY < this._indoorData[hV.uid].contour.length; hY++) {
            if (dh([h1.lng, h1.lat], this._indoorData[hV.uid].contour[hY])) {
                hU = true;
                break
            }
        }
        if (hU === false && hV.uid === "e96b44200baa3b4082288acc") {
            var hX = this._indoorData[hV.uid].boundsMin;
            var h2 = this._indoorData[hV.uid].boundsMax;
            if (h1.lng > hX[0] && h1.lat > hX[1] && h1.lng < h2[0] && h1.lat < h2[1]) {
                hU = true
            }
        }
        if (hU) {
            if (this.enterMethod !== "byClick") {
                if (this.currentUid !== null && this.currentUid !== hV.uid) {
                    this._map.showIndoor(this.currentUid, this._indoorData[this.currentUid].defaultFloor)
                }
                if (this.currentUid !== hV.uid) {
                    this._map.showIndoor(hV.uid, this._indoorData[hV.uid].defaultFloor)
                }
                this.enterMethod = "byMove"
            }
        } else {
            if (this.enterMethod !== "byClick") {
                this._map.showIndoor(null)
            }
        }
    };
    aW.prototype.setData = function(hT) {
        if (hT === null) {
            return
        }
        for (var T in hT) {
            if (T === "tileInfo") {
                continue
            }
            var hU = hT[T].tileKey;
            if (this._indoorData[T]) {
                if (!this._indoorData[T][hU]) {
                    this._indoorData[T].tileKeys.push(hU);
                    this._indoorData[T][hU] = true
                }
            } else {
                this._indoorData[T] = hT[T];
                this._indoorData[T].tileKeys = [hT[T].tileKey];
                this._indoorData[T][hU] = true;
                for (var e = 0; e < this._indoorData[T].contour.length; e++) {
                    this._map.addAreaSpot(this._indoorData[T].contour[e], {
                        id: T + e,
                        userData: {
                            uid: T
                        }
                    })
                }
            }
        }
        if (this._map.getZoom() >= this._autoEnterZoom) {
            this._checkIndoorByMove()
        }
    };
    aW.prototype.removeData = function(T, hU) {
        if (!this._indoorData[T]) {
            return
        }
        var hT = this._indoorData[T];
        for (var e = 0; e < hT.tileKeys.length; e++) {
            if (hT.tileKeys[e] === hU) {
                hT.tileKeys.splice(e, 1);
                break
            }
        }
        delete hT[hU];
        if (hT.tileKeys.length === 0) {
            delete this._indoorData[T]
        }
    };
    aW.prototype.getIndoorData = function(e) {
        return this._indoorData[e] || null
    };
    aW.prototype.getData = function() {
        return this._indoorData
    };
    bp.register(function(e) {
        e._indoorMgr = new aW(e)
    });
    var em = (function() {
        var hT = {};
        var h2 = {};
        var hY = {};
        function h0(h4) {
            if (Object.prototype.toString.call(h4) === "[object Object]") {
                for (var h3 in h4) {
                    return false
                }
                return true
            } else {
                return false
            }
        }
        function hZ(ia, ib, ie, h7, id) {
            var h3 = h3 || null;
            h7 = h7 || h3;
            var h5;
            if (h7) {
                h5 = h1(ia, ib, ie, h7)
            } else {
                h5 = T(ia, ib, ie, id)
            }
            var h9 = h5.drawId;
            var h4 = h5.style;
            var ic = h5.styleUpdate;
            var ig = [];
            if (!h9) {
                return ig
            }
            for (var h6 = 0; h6 < h9.length; h6++) {
                var h8 = ic[h9[h6]] || h4[h9[h6]];
                if (h8) {
                    switch (ib) {
                    case "polygon":
                        h8 = hU(h8, ia);
                        break;
                    case "line":
                        h8 = hX(h8, ia);
                        break;
                    case "pointText":
                        h8 = hV(h8, ia);
                        break;
                    case "point":
                        h8 = e(h8, ia);
                        break;
                    case "polygon3d":
                        h8 = hW(h8, ia);
                        break
                    }
                    if (h8) {
                        h8.did = h9[h6];
                        ig[ig.length] = h8
                    }
                }
            }
            return ig
        }
        function h1(h4, h6, h7, h3) {
            var h5 = h3[2];
            switch (h6) {
            case "point":
                h5 = h5[0];
                break;
            case "pointText":
                h5 = h5[1];
                break;
            case "line":
                h5 = h5[3];
                break;
            case "polygon":
                h5 = h5[4];
                break;
            case "polygon3d":
                h5 = h5[5];
                break
            }
            var h9 = h7 - 1;
            if (h6 === "line" && h7 === 12) {
                h9 = h7
            }
            var ia = h3[1][h9][0];
            var h8 = ia[h4];
            if (!h8) {
                if (h6 === "point" || h6 === "pointText") {
                    ia = h3[1][h7][0];
                    h8 = ia[h4]
                }
            }
            return {
                drawId: h8,
                style: h5,
                styleUpdate: []
            }
        }
        function T(h7, h8, ib, ia) {
            if (!ia) {
                return {
                    drawId: null,
                    style: [],
                    styleUpdate: []
                }
            }
            var h9;
            var h5 = ia.baseFs;
            h9 = ia.StyleBody || [];
            h9 = ia.zoomStyleBody[ib] || [];
            var h4 = h5[2];
            switch (h8) {
            case "point":
                h4 = h4[0];
                h9 = h9[0] || {};
                break;
            case "pointText":
                h4 = h4[1];
                h9 = h9[1] || {};
                break;
            case "line":
                h4 = h4[3];
                h9 = h9[3] || {};
                break;
            case "polygon":
                h4 = h4[4];
                h9 = h9[4] || {};
                break;
            case "polygon3d":
                h4 = h4[5];
                h9 = h9[5] || {};
                break
            }
            var h3 = h5[1][ib - 1][0];
            var h6 = h3[h7];
            return {
                drawId: h6,
                style: h4,
                styleUpdate: h9
            }
        }
        function hV(h4, h3) {
            if (!h4 || h4.length === 0) {
                return null
            }
            return {
                sid: h3,
                fontRgba: i(h4[0]),
                haloRgba: i(h4[1]),
                backRgba: i(h4[2]),
                fontSize: h4[3],
                haloSize: h4[4],
                fontWeight: h4[5],
                fontStyle: h4[6],
                density: h4[7]
            }
        }
        function e(h4, h3) {
            return {
                sid: h3,
                rank: h4[0],
                ucflag: h4[1],
                icon: h4[2],
                iconType: h4[3],
                nineGG: h4[4],
                density: h4[5],
                zoom: h4[6]
            }
        }
        function hX(h4, h3) {
            return {
                sid: h3,
                borderRgba: i(h4[0]),
                fillRgba: i(h4[1]),
                borderWidth: h4[2],
                fillWidth: h4[3],
                borderCap: h4[4],
                fillCap: h4[5],
                haveBorderLine: h4[6],
                haveBorderTexture: h4[7],
                haveFillTexture: h4[8],
                isUseBorderRgba: h4[9],
                isUseFillRgba: h4[10],
                borderTexture: h4[11],
                fillTexture: h4[12],
                borderTextureType: h4[13],
                fillTextureType: h4[14],
                isRealWidth: h4[15],
                haveArrow: h4[16],
                needRound: h4[17],
                realBorderWidth: h4[18]
            }
        }
        function hU(h4, h3) {
            if (h3 === 2532) {}
            return {
                sid: h3,
                fillRgba: i(h4[0]),
                borderRgba: i(h4[1]),
                borderWidth: h4[2],
                borderTexture: h4[3],
                borderTextureType: h4[4],
                waterStyle: h4[5],
                haloStyle: h4[6],
                textureStyle: h4[7],
                thickRgba: i(h4[8])
            }
        }
        function hW(h4, h3) {
            return {
                sid: h3,
                filter: h4[0],
                ratio: h4[1],
                haveBorder: h4[2],
                borderWidth: h4[3],
                borderRgba: i(h4[4]),
                fillTop: i(h4[5]),
                fillSide: i(h4[6]),
                polyTexture: h4[7]
            }
        }
        function i(h8) {
            var h7 = h8;
            if (hY[h7]) {
                return hY[h7]
            }
            h8 = h8 >>> 0;
            var h6 = (h8) & 255;
            var h5 = (h8 >> 8) & 255;
            var h3 = (h8 >> 16) & 255;
            var h4 = (h8 >> 24) & 255;
            hY[h7] = [h6, h5, h3, h4];
            return hY[h7]
        }
        return {
            getStyleFromCache: function(ia, h5, h8, h9, h4, h7, h3) {
                if (h5 === 60609 || h5 === 60604 || h5 === 60610 || h5 === 60611 || h5 === 60606) {
                    return
                }
                ia = ia || "default";
                var h6 = ia + "-" + h5 + "-" + h8 + "-" + h9;
                if (h7) {
                    h6 += "-indoor"
                }
                if (h4) {
                    if (!h2[h6]) {
                        h2[h6] = hZ(h5, h8, h9, h4)
                    }
                    return h2[h6]
                }
                if (!hT[h6]) {
                    hT[h6] = hZ(h5, h8, h9, h4, h3)
                }
                return hT[h6]
            }
        }
    })();
    bp.register(function(i) {
        var e = new dH(i)
    });
    function dH(e) {
        e.container.appendChild(this.render());
        this.bind(e)
    }
    dH.prototype.render = function() {
        var i = document.createElement("div");
        i.className = "click-ripple-container";
        var e = document.createElement("div");
        e.className = "click-ripple";
        i.appendChild(e);
        this._div = i;
        this._ripple = e;
        return i
    };
    dH.prototype.bind = function(i) {
        var e = this;
        i.addEventListener("spotclick",
        function(T) {
            if (!T.spots || T.spots.length === 0) {
                return
            }
            e._div.style.left = T.pixel.x + "px";
            e._div.style.top = T.pixel.y + "px";
            D.ac(e._ripple, "ripple-playing")
        });
        D.on(e._ripple, "transitionend",
        function() {
            D.rc(e._ripple, "ripple-playing")
        })
    };
    function f2(e) {
        ee.call(this);
        if (!e) {
            return
        }
        this._opts = {};
        this._map = e;
        this._maxLat = 84.6;
        this._minLat = -80.6;
        this._maxLatMC = eo.convertLL2MC(new c5(this._maxLat, 0)).lat;
        this._minLatMC = eo.convertLL2MC(new c5(this._minLat, 0)).lat
    }
    f2.inherits(ee, "ToolbarItem");
    D.extend(f2.prototype, {
        open: function() {
            if (this._isOpen == true) {
                return true
            }
            if (this._map._toolInUse) {
                return false
            }
            this._map._toolInUse = true;
            this._isOpen = true;
            return true
        },
        close: function() {
            if (!this._isOpen) {
                return
            }
            this._map._toolInUse = false;
            this._isOpen = false
        },
        _checkStr: function(e) {
            if (!e) {
                return ""
            }
            return e.replace(/</g, "&lt;").replace(/>/g, "&gt;")
        }
    });
    function gM(T, i) {
        f2.call(this, T);
        i = i || {};
        this._opts = D.extend(D.extend(this._opts || {},
        {
            autoClear: false,
            tips: "测距",
            followText: "单击确定起点，双击结束绘制",
            unit: "metric",
            showResult: true,
            lineColor: "blue",
            lineStroke: 2,
            opacity: 1,
            lineStyle: "solid",
            cursor: e4.distCursor,
            styleCodes: {
                lnCode: 0,
                spCode: 0,
                slCode: 0,
                tlCode: 0
            },
            enableMassClear: true
        }), i);
        if (this._opts.showResult === false) {
            if (typeof i.tips === "undefined") {
                this._opts.tips = "绘制折线"
            }
            if (!i.cursor) {
                this._opts.cursor = "crosshair"
            }
        }
        if (this._opts.lineStroke <= 0) {
            this._opts.lineStroke = 2
        }
        if (this._opts.opacity > 1) {
            this._opts.opacity = 1
        } else {
            if (this._opts.opacity < 0) {
                this._opts.opacity = 0
            }
        }
        if (this._opts.lineStyle !== "solid" && this._opts.lineStyle !== "dashed") {
            this._opts.lineStyle = "solid"
        }
        this._checked = false;
        this._drawing = null;
        this.followTitle = null;
        this._totalDis = {};
        this._points = [];
        this._paths = [];
        this._dots = [];
        this._segDistance = [];
        this._overlays = [];
        this._units = {
            metric: {
                name: "metric",
                conv: 1,
                incon: 1000,
                u1: "米",
                u2: "公里"
            },
            us: {
                name: "us",
                conv: 3.2808,
                incon: 5279.856,
                u1: "英尺",
                u2: "英里"
            }
        };
        if (!this._units[this._opts.unit]) {
            this._opts.unit = "metric"
        }
        this._dLineColor = "#ff6319";
        this._dLineStroke = 3;
        this._dOpacity = 0.8;
        this._dLineStyle = "solid";
        this._dCursor = e4.distCursor;
        if (this._opts.showResult) {
            this._opts.followText = "单击确定起点"
        }
        this._followTextM = "单击确定地点，双击结束";
        this._sectionMarkerTip = "单击可删除此点，拖拽可调整位置";
        this._movingTimerId = null;
        if (this._opts.showResult) {
            this.text = "测距"
        } else {
            this.text = "绘线"
        }
        this._isOpen = false;
        var e = this;
        eb.load("tools",
        function() {
            e._draw()
        })
    }
    gM.inherits(f2, "PolylineTItem");
    D.extend(gM.prototype, {
        setLineColor: function(e) {
            this._opts.lineColor = e
        },
        setLineStroke: function(e) {
            if (Math.round(e) > 0) {
                this._opts.lineStroke = Math.round(e)
            }
        },
        setOpacity: function(e) {
            if (e >= 0 && e <= 1) {
                this._opts.opacity = e
            }
        },
        setLineStyle: function(e) {
            if (e === "solid" || e === "dashed") {
                this._opts.lineStyle = e
            }
        },
        clear: function() {
            for (var T = 0,
            e = this._overlays.length; T < e; T++) {
                if (this._overlays[T]) {
                    this._map.removeOverlay(this._overlays[T])
                }
            }
            this._overlays.length = 0;
            for (var T = 0,
            e = this._dots.length; T < e; T++) {
                if (this._dots[T] && this._dots[T].parentNode) {
                    this._dots[T].parentNode.removeChild(this._dots[T])
                }
            }
            this._dots.length = 0
        },
        setCursor: function(e) {
            if (this._opts.showResult === true) {
                return
            }
            this._opts.cursor = e
        },
        getCursor: function() {
            if (this._opts.showResult === true) {
                return this._dCursor
            }
            var e = this._opts.cursor.match(/^url\((.+)\)(,.*)?/);
            if (e !== null) {
                return e[1]
            } else {
                return this._opts.cursor
            }
        },
        showResult: function(e) {
            this._opts.showResult = !!e
        }
    });
    function cv() {
        var hU = 3;
        var h1 = 256;
        var hT = Math.pow(2, 18 - hU) * h1;
        var h2 = 2;
        var h0 = (h2 + 1) * hT;
        var T = eo.convertLL2MC(new hu(180, 0));
        var hY = T.lng;
        var hW = h0 - hY;
        var hZ = -3;
        var e = hZ * hT;
        var hV = eo.convertLL2MC(new hu( - 180, 0));
        var hX = hV.lng;
        var i = hX - e;
        this._validPixels = hY / Math.pow(2, 18 - hU);
        this._mc180X = hY;
        this._mcM180X = hX;
        this._loopOffset = hW + i;
        this._mcTSpan = hY - hX;
        this._spaceDistance = hW;
        this._mSpaceDistance = i
    }
    cv.prototype = {
        calcLoopParam: function(hT, i, h0) {
            h0 = h0 || 256;
            var hX = 0;
            var hU = 3;
            var hW = 6;
            var hV = hW * Math.pow(2, (i - hU)) * 256 / h0;
            var hZ = hV / 2 - 1;
            var hY = -hV / 2;
            while (hT > hZ) {
                hT -= hV;
                hX -= this._loopOffset
            }
            while (hT < hY) {
                hT += hV;
                hX += this._loopOffset
            }
            var e = hX;
            hX = Math.round(hX / Math.pow(2, 18 - i));
            return {
                offsetX: hX,
                geoOffsetX: e,
                col: hT,
                T: hV,
                maxCol: hZ,
                minCol: hY
            }
        },
        calcLoopCenterPoint: function(i) {
            var e = i.lng;
            while (e > this._mc180X) {
                e -= this._mcTSpan
            }
            while (e < this._mcM180X) {
                e += this._mcTSpan
            }
            i.lng = e;
            return i
        },
        calcLoopMapBounds: function(T, hT) {
            var i = hT || T.getCenter();
            var e = T.sw.lng;
            var hU = T.ne.lng;
            while (i.lng > this._mc180X) {
                i.lng -= this._mcTSpan;
                e -= this._mcTSpan;
                hU -= this._mcTSpan
            }
            while (i.lng < this._mcM180X) {
                i.lng += this._mcTSpan;
                e += this._mcTSpan;
                hU += this._mcTSpan
            }
            T.sw.lng = e;
            T.ne.lng = hU;
            if (T.pointBottomLeft) {
                T.pointBottomLeft = this.calcLoopCenterPoint(T.pointBottomLeft);
                T.pointTopLeft = this.calcLoopCenterPoint(T.pointTopLeft);
                T.pointTopRight = this.calcLoopCenterPoint(T.pointTopRight);
                T.pointBottomRight = this.calcLoopCenterPoint(T.pointBottomRight)
            }
            return T
        },
        calcLoopTiles: function(h1, e, h5, hY) {
            h5 = h5 || 256;
            var hU = hY || Math.pow(2, 18 - e) * h5;
            var h0 = Math.floor(this._mc180X / hU);
            var hW = Math.floor(this._mcM180X / hU);
            var h2 = Math.floor(this._loopOffset / hU);
            var h3 = [];
            for (var hX = 0; hX < h1.length; hX++) {
                var h4 = h1[hX];
                var hT = h4[0];
                var h6 = h4[1];
                if (hT >= h0) {
                    var hZ = hT + h2;
                    if (this.isTileBlank(hZ, e, h5) === true) {
                        continue
                    }
                    var T = "id_" + hZ + "_" + h6 + "_" + e;
                    if (!h1[T]) {
                        h1[T] = true;
                        h3.push([hZ, h6, e, 0])
                    }
                } else {
                    if (hT <= hW) {
                        var hZ = hT - h2;
                        if (this.isTileBlank(hZ, e, h5) === true) {
                            continue
                        }
                        var T = "id_" + hZ + "_" + h6 + "_" + e;
                        if (!h1[T]) {
                            h1[T] = true;
                            h3.push([hZ, h6, e, 0])
                        }
                    }
                }
            }
            for (var hX = 0,
            hV = h3.length; hX < hV; hX++) {
                h1.push(h3[hX])
            }
            for (var hX = h1.length - 1; hX >= 0; hX--) {
                var hT = h1[hX][0];
                if (this.isTileBlank(hT, e, h5)) {
                    h1.splice(hX, 1)
                }
            }
            return h1
        },
        isTileBlank: function(T, hU, e) {
            var hV = Math.pow(2, hU - 3);
            var i = Math.round(this._validPixels * hV);
            var hT = 6 * hV * 256 / e;
            while (T > hT / 2 - 1) {
                T -= hT
            }
            while (T < -(hT / 2)) {
                T += hT
            }
            if (T > 0 && T * e > i) {
                return true
            }
            if (T < 0 && Math.abs((T + 1) * e) > i) {
                return true
            }
            return false
        },
        isAddWidth: function(e, i) {
            return e < this._mcM180X || i > this._mc180X
        },
        getSpaceDistanceInPixel: function(i) {
            var e = Math.round((this._spaceDistance + this._mSpaceDistance) / Math.pow(2, 18 - i));
            return e
        }
    };
    var d5 = new cv();
    var cf = (function() {
        var i = true;
        var hU = 256;
        var e = true;
        var hW = aE("ditu", "normalTraffic");
        var hT = hW.udt;
        var hX = "//its.map.baidu.com/traffic/";
        var hV = [[2, "79,210,125,1", 3, 2, 0, [], 0, 0], [2, "79,210,125,1", 3, 2, 0, [], 0, 0], [2, "79,210,125,1", 4, 2, 0, [], 0, 0], [2, "79,210,125,1", 5, 2, 0, [], 0, 0], [2, "79,210,125,1", 6, 2, 0, [], 0, 0], [2, "255,208,69,1", 3, 2, 0, [], 0, 0], [2, "255,208,69,1", 3, 2, 0, [], 0, 0], [2, "255,208,69,1", 4, 2, 0, [], 0, 0], [2, "255,208,69,1", 5, 2, 0, [], 0, 0], [2, "255,208,69,1", 6, 2, 0, [], 0, 0], [2, "232,14,14,1", 3, 2, 0, [], 0, 0], [2, "232,14,14,1", 3, 2, 0, [], 0, 0], [2, "232,14,14,1", 4, 2, 0, [], 0, 0], [2, "232,14,14,1", 5, 2, 0, [], 0, 0], [2, "232,14,14,1", 6, 2, 0, [], 0, 0], [2, "181,0,0,1", 3, 2, 0, [], 0, 0], [2, "181,0,0,1", 3, 2, 0, [], 0, 0], [2, "181,0,0,1", 4, 2, 0, [], 0, 0], [2, "181,0,0,1", 5, 2, 0, [], 0, 0], [2, "181,0,0,1", 6, 2, 0, [], 0, 0], [2, "255,255,255,1", 4, 0, 0, [], 0, 0], [2, "255,255,255,1", 5.5, 0, 0, [], 0, 0], [2, "255,255,255,1", 7, 0, 0, [], 0, 0], [2, "255,255,255,1", 8.5, 0, 0, [], 0, 0], [2, "255,255,255,1", 10, 0, 0, [], 0, 0]];
        var T = new cS({
            transparentPng: true,
            dataType: 2,
            cacheSize: 256,
            clipTile: true
        });
        T.zIndex = 2;
        T.getTilesUrl = function(h0, h1) {
            if (!h0 || h1 < 7) {
                return null
            }
            var hZ = h0.x;
            var h2 = h0.y;
            var hY = hX + "TrafficTileService?level=" + h1 + "&x=" + hZ + "&y=" + h2 + "&time=" + ( + new Date());
            if (this.map.getRenderType() === "webgl") {
                hY = hX + "?qt=vtraffic&z=" + h1 + "&x=" + hZ + "&y=" + h2 + "&udt=" + hT
            }
            return hY
        };
        T.setColors = function(hY) {
            for (var h1 = 0; h1 < hV.length; h1++) {
                var h0 = Math.floor(h1 / 5);
                var hZ = hY[h0];
                if (hZ) {
                    if (Object.prototype.toString.call(hZ) === "[object String]") {
                        hZ = g1.parseCSSColor(hZ)
                    }
                    hV[h1][1] = [hZ[0], hZ[1], hZ[2], hZ[3] / 255].join(",")
                }
            }
        };
        T.setEdge = function(hY) {
            e = !!hY
        };
        T.processData = function(h1) {
            var h5 = h1.content;
            var h3 = 10;
            if (typeof h1.precision === "number") {
                h3 = h1.precision * 10
            }
            var ic = {
                road: [[], []]
            };
            if (!h5) {
                return ic
            }
            var ia = h5.tf;
            if (!ia) {
                return ic
            }
            for (var h2 = 0; h2 < ia.length; h2++) {
                var ib = ia[h2][1];
                var h9 = [];
                var h7 = 0;
                var h6 = 0;
                var h8 = hV[ia[h2][3]];
                for (var h0 = 0,
                hY = ib.length; h0 < hY / 2; h0++) {
                    h7 += ib[h0 * 2] / h3;
                    h6 += ib[h0 * 2 + 1] / h3;
                    h9.push(h7, 256 - h6)
                }
                var hZ = h8[1].split(",");
                hZ[3] = hZ[3] * 255;
                var h4 = h8[2] / 2;
                if (e) {
                    ic.road[0].push([h9, 1, 2, [255, 255, 255, 255], h4 + 2])
                }
                ic.road[1].push([h9, 1, 2, hZ, h4])
            }
            return ic
        };
        return T
    })();
    bp.register(function(i) {
        if (i.config && i.config.isOverviewMap) {
            return
        }
        if (i.isLoaded()) {
            fD(i)
        } else {
            i.addEventListener("load",
            function() {
                fD(this)
            })
        }
        i.cityName = "中国";
        i.cCode = "1";
        var e = {};
        e.enableRequest = true;
        e.request = function() {
            if (e.enableRequest) {
                e.enableRequest = false;
                setTimeout(function() {
                    e._request()
                },
                500)
            }
        };
        e._request = function() {
            var hT = i.getBoundsIn();
            var hV = i.getZoom();
            var T = hT.getSouthWest();
            var hU = hT.getNorthEast();
            cC.request(function(hZ) {
                if (hZ.current_city["code"] >= 9000 && hZ.current_city["code"] <= 9378) {
                    hZ.current_city["name"] = "台湾省"
                }
                if (hZ.current_city["code"] >= 20000 && hZ.current_city["code"] <= 20499) {
                    hZ.current_city["name"] = "新加坡"
                }
                if (hZ.current_city["code"] >= 20500 && hZ.current_city["code"] <= 25999) {
                    hZ.current_city["name"] = "泰国"
                }
                if (hZ.current_city["code"] >= 26000 && hZ.current_city["code"] <= 29999) {
                    hZ.current_city["name"] = "日本"
                }
                if (hZ.current_city["code"] >= 30000 && hZ.current_city["code"] <= 30999) {
                    hZ.current_city["name"] = "韩国"
                }
                if (hZ.current_city["code"] >= 31000 && hZ.current_city["code"] <= 37000) {
                    hZ.current_city["name"] = "亚太"
                }
                if (hZ.current_city["code"] >= 46609 && hZ.current_city["code"] <= 52505) {
                    hZ.current_city["name"] = "欧洲"
                }
                if (hZ.current_city["code"] >= 39509 && hZ.current_city["code"] <= 53500) {
                    hZ.current_city["name"] = "南美洲"
                }
                if (hZ.current_city["code"] >= 54000 && hZ.current_city["code"] <= 70000) {
                    hZ.current_city["name"] = "北美洲"
                }
                if (hZ.current_city["code"] === 54003 && hZ.current_city["code"] >= 60731 && hZ.current_city["code"] <= 61123) {
                    hZ.current_city["name"] = "美国"
                }
                if (hZ.current_city["code"] === 54015 || hZ.current_city["code"] >= 57970 && hZ.current_city["code"] <= 60223) {
                    hZ.current_city["name"] = "加拿大"
                }
                if (hZ.current_city["code"] === 54025 || hZ.current_city["code"] >= 54338 && hZ.current_city["code"] <= 57374) {
                    hZ.current_city["name"] = "墨西哥"
                }
                e.enableRequest = true;
                if (hZ && hZ.current_city) {
                    var hY = hZ.current_city["name"];
                    var hX = hZ.current_city["code"];
                    if (hX !== i.cCode) {
                        var hW = new bc("oncitychange");
                        hW.name = hY;
                        hW.code = hX;
                        i.dispatchEvent(hW)
                    }
                    i.cityName = hY;
                    i.cCode = hX;
                    if (!f6()) {
                        ew(i)
                    }
                }
            },
            {
                qt: "cen",
                b: T.lng + "," + T.lat + ";" + hU.lng + "," + hU.lat,
                l: hV
            },
            "", "", true)
        };
        i.addEventListener("load",
        function(T) {
            e.request()
        });
        i.addEventListener("moveend",
        function(T) {
            e.request()
        });
        i.addEventListener("zoomend",
        function(T) {
            e.request()
        });
        e.request()
    });
    function fD(i) {
        if (i.temp.copyadded) {
            return
        }
        i.temp.copyadded = true;
        if (!i.cpyCtrl) {
            var hT = new ea(2, 2);
            i.config.cpyCtrlOffset = hT;
            if (f6()) {
                hT.width = 72;
                hT.height = 0
            }
            var T = new dI({
                offset: hT,
                printable: true
            });
            i.cpyCtrl = T
        }
        if (!f6()) {
            ew(i);
            i.addEventListener("maptypechange",
            function() {
                ew(i)
            })
        }
        i.addControl(T);
        var e = new ag();
        e._opts = {
            printable: true
        };
        i.logoCtrl = e;
        i.addControl(e);
        i.addEventListener("resize",
        function() {
            if (this.getSize().width >= 300 && i.getSize().height >= 100) {
                e.show();
                T.setOffset(i.config.cpyCtrlOffset)
            } else {
                e.hide();
                T.setOffset(new ea(4, 2))
            }
        });
        if (i.getSize().width >= 300 && i.getSize().height >= 100) {
            e.show()
        } else {
            e.hide();
            T.setOffset(new ea(4, 2))
        }
        i.addEventListener("oncopyrightoffsetchange",
        function(hU) {
            i.logoCtrl.setOffset(hU.target.logo);
            i.cpyCtrl.setOffset(hU.target.cpy)
        });
        i.dispatchEvent(new bc("oncopyrightaddend"))
    }
    function ew(h8) {
        if (!h8.cpyCtrl) {
            var ih = new ea(2, 2);
            if (f6()) {
                ih.width = 72;
                ih.height = 0
            }
            var ib = new dI({
                offset: ih,
                printable: true
            });
            h8.cpyCtrl = ib
        }
        var ir = h8.cityName || "中国";
        var h9 = h8.getMapType();
        var ia = ["常州市", "南昌市", "乌鲁木齐市", "无锡市", "福州市", "泉州市", "珠海市", "贵阳市"];
        var h2 = ["北京市", "上海市", "广州市", "深圳市", "宁波市", "石家庄市", "沈阳市", "长春市", "青岛市", "温州市", "台州市", "金华市", "佛山市", "中山市", "昆明市", "南宁市", "苏州市", "西安市", "济南市", "郑州市", "合肥市", "呼和浩特市", "杭州市", "成都市", "武汉市", "长沙市", "天津市", "南京市", "重庆市", "大连市", "东莞市", "厦门市"];
        var h4 = ["香港特别行政区"];
        var hY = ["台湾省"];
        var ii = ["日本"];
        var ip = ["韩国"];
        var ic = ["泰国"];
        var ig = ["亚太"];
        var hZ = ["新加坡"];
        var iq = ["欧洲"];
        var hT = ["南美洲"];
        var il = ["北美洲"];
        var T = ["美国"];
        var ie = ["墨西哥"];
        var hW = ["加拿大"];
        for (var im in ia) {
            if (ia[im] === ir) {
                var h5 = true;
                break
            }
        }
        for (var im in h2) {
            if (h2[im] === ir) {
                var hU = true;
                break
            }
        }
        for (var im in h4) {
            if (h4[im] === ir) {
                var iu = true;
                break
            }
        }
        if (hY[0] === ir) {
            var ik = true
        }
        if (hZ[0] === ir) {
            var i = true
        }
        if (ii[0] === ir) {
            var h1 = true
        }
        if (ip[0] === ir) {
            var h7 = true
        }
        if (ic[0] === ir) {
            var h6 = true
        }
        if (ig[0] === ir) {
            var hX = true
        }
        if (iq[0] === ir) {
            var h3 = true
        }
        if (hT[0] === ir) {
            var h0 = true
        }
        if (il[0] === ir) {
            var e = true
        }
        if (T[0] === ir) {
            var io = true
        }
        if (hW[0] === ir) {
            var ij = true
        }
        if (ie[0] === ir) {
            var hV = true
        }
        var it = ["&copy;&nbsp;2021 Baidu - GS(2019)5218号 - 甲测资字1100930 - 京ICP证030173号 - Data &copy; "];
        var id = "rgba(255, 255, 255, 0.701961)";
        if (h8.getZoom() <= 9) {
            it = ["&copy;&nbsp;2021 Baidu - GS(2019)5218号 - 甲测资字1100930 - 京ICP证030173号 - Data &copy; "]
        } else {
            if (ik) {
                it = ["&copy;&nbsp;2021 Baidu - GS(2019)5218号 - 甲测资字1100930 - 京ICP证030173号 - Data &copy; "]
            } else {
                if (h1 || h7) {
                    it = ["&copy;&nbsp;2021 Baidu - GS(2019)5218号 - 甲测资字1100930 - 京ICP证030173号 - Data &copy; "]
                } else {
                    if (i || h6) {
                        it = ["&copy;&nbsp;2021 Baidu - GS(2019)5218号 - 甲测资字1100930 - 京ICP证030173号 - Data &copy; "]
                    } else {
                        if (hX) {
                            it = ["&copy;&nbsp;2021 Baidu - GS(2019)5218号 - 甲测资字1100930 - 京ICP证030173号 - Data &copy; "]
                        } else {
                            if (h3) {
                                it = ["&copy;&nbsp;2021 Baidu - GS(2019)5218号 - 甲测资字1100930 - 京ICP证030173号 - Data &copy; "]
                            } else {
                                if (h0) {
                                    it = ["&copy;&nbsp;2021 Baidu - GS(2019)5218号 - 甲测资字1100930 - 京ICP证030173号 - Data &copy; "]
                                } else {
                                    if (e) {
                                        it = ["&copy;&nbsp;2021 Baidu - GS(2019)5218号 - 甲测资字1100930 - 京ICP证030173号 - Data &copy; "]
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        if (h8.getZoom() <= 9) {
            it.push("长地万方");
            it.push(' &amp; <a target="_blank" href="http://www.openstreetmap.org/">OpenStreetMap</a>');
            it.push(' &amp; <a target="_blank" href="http://corporate.navteq.com/supplier_terms.html">HERE</a>');
            if (h9 === BMAP_SATELLITE_MAP || h9 === BMAP_HYBRID_MAP) {
                it.push(' &amp; <a target="_blank" href="http://www.eso.org/public/">ESO</a>');
                id = "rgba(0,0,0,.7)"
            }
        } else {
            if (h1 || h7) {
                it.push('<a target="_blank" href="http://www.openstreetmap.org/">OpenStreetMap</a>')
            } else {
                if (i || h6) {
                    it.push('<a target="_blank" href="http://corporate.navteq.com/supplier_terms.html">HERE</a>')
                } else {
                    if (hX) {
                        it.push('<a target="_blank" href="http://corporate.navteq.com/supplier_terms.html">HERE</a>');
                        it.push(' &amp; <a target="_blank" href="https://www.mapbox.com/">Mapbox</a>')
                    } else {
                        if (h3) {
                            it.push('<a target="_blank" href="http://www.openstreetmap.org/">OpenStreetMap</a>');
                            it.push(' &amp; <a target="_blank" href="https://www.mapbox.com/">Mapbox</a>')
                        } else {
                            if (h0) {
                                it.push('<a target="_blank" href="http://www.openstreetmap.org/">OpenStreetMap</a>');
                                it.push(' &amp; <a target="_blank" href="https://www.mapbox.com/">Mapbox</a>')
                            } else {
                                if (io || hV || ij) {
                                    it.push('<a target="_blank" href="http://corporate.navteq.com/supplier_terms.html">HERE</a>');
                                    it.push(' &amp; <a target="_blank" href="https://www.mapbox.com/">Mapbox</a>')
                                } else {
                                    if (e) {
                                        it.push('<a target="_blank" href="http://www.openstreetmap.org/">OpenStreetMap</a>');
                                        it.push(' &amp; <a target="_blank" href="https://www.mapbox.com/">Mapbox</a>')
                                    } else {
                                        it.push("长地万方");
                                        if (h5) {
                                            it.push(' &amp; <a target="_blank" href="http://www.palmcity.cn/palmcity/">PalmCity</a>')
                                        }
                                        if (iu) {
                                            it.push(' &amp; <a target="_blank" href="http://www.mapking.com/HongKong/eng/home/MapKing_Webmap.html">MapKing</a>')
                                        }
                                        if (ik) {
                                            it.push(' &amp; <a target="_blank" href="http://corporate.navteq.com/supplier_terms.html">HERE</a>');
                                            it.push(' &amp; <a target="_blank" href="http://www.localking.com.tw/about/localking.aspx">樂客LocalKing</a>')
                                        }
                                        if (h9 === BMAP_SATELLITE_MAP || h9 === BMAP_HYBRID_MAP) {
                                            id = "rgba(0,0,0,.7)"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        it.unshift('<span style="background: ' + id + ';padding: 0px 1px;line-height: 16px;display: inline;height: 16px;">');
        it.push("</span>");
        it = it.join("");
        h8.cpyCtrl.addCopyright({
            id: 1,
            content: it
        })
    }
    window.BMAP_STATUS_SUCCESS = 0;
    window.BMAP_STATUS_CITY_LIST = 1;
    window.BMAP_STATUS_UNKNOWN_LOCATION = 2;
    window.BMAP_STATUS_UNKNOWN_ROUTE = 3;
    window.BMAP_STATUS_INVALID_KEY = 4;
    window.BMAP_STATUS_INVALID_REQUEST = 5;
    window.BMAP_STATUS_PERMISSION_DENIED = 6;
    window.BMAP_STATUS_SERVICE_UNAVAILABLE = 7;
    window.BMAP_STATUS_TIMEOUT = 8;
    window.BMAP_ROUTE_TYPE_WALKING = 2;
    window.BMAP_ROUTE_TYPE_DRIVING = 3;
    window.BMAP_ROUTE_TYPE_RIDING = 6;
    window.BMAP_ROUTE_STATUS_NORMAL = 0;
    window.BMAP_ROUTE_STATUS_EMPTY = 1;
    window.BMAP_ROUTE_STATUS_ADDRESS = 2;
    var eG = "cur";
    var b3 = "cen";
    var en = "s";
    var Q = "con";
    var dN = "bd";
    var ge = "nb";
    var hK = "bt";
    var cQ = "nav";
    var el = "walk";
    var hG = "gc";
    var fM = "rgc";
    var ey = "dec";
    var fc = "bse";
    var fn = "nse";
    var g = "bl";
    var bd = "bsl";
    var bq = "bda";
    var Y = "sa";
    var aA = "nba";
    var b0 = "drag";
    var I = "ext";
    var aQ = "hip";
    var S = "ride";
    var fR = "drct";
    var gq = 2;
    var fO = 4;
    var g9 = 7;
    var g7 = 11;
    var fy = 12;
    var hE = 14;
    var bR = 15;
    var dK = 18;
    var ff = 20;
    var cJ = 21;
    var cp = 19;
    var e9 = 23;
    var cj = 26;
    var ap = 28;
    var ej = 31;
    var cG = 35;
    var gi = 44;
    var hR = 45;
    var eJ = 46;
    var cE = 47;
    var gz = -1;
    var gY = 0;
    var he = 1;
    var cn = 2;
    var b9 = 3;
    window.BMAP_POI_TYPE_NORMAL = 0;
    var R = 1;
    var cd = 2;
    BMapGL.I = D.I;
    var P = {};
    P.removeHtml = function(e) {
        e = e.replace(/<\/?[^>]*>/g, "");
        e = e.replace(/[ | ]* /g, " ");
        return e
    };
    P.parseGeoExtReg1 = function(e) {
        return e.replace(/([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0|[1-9]\d*),([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0|[1-9]\d*)(,)/g, "$1,$2;")
    };
    P.parseGeoExtReg2 = function(i, e) {
        var T = new RegExp("(((-?\\d+)(\\.\\d+)?),((-?\\d+)(\\.\\d+)?);)(((-?\\d+)(\\.\\d+)?),((-?\\d+)(\\.\\d+)?);){" + e + "}", "ig");
        return i.replace(T, "$1")
    };
    var fw = 0;
    var cI = 1;
    var ha = 2;
    P.unique = function(T) {
        var hV = false;
        var hU = [];
        var hW = {};
        for (var hT = 0,
        e = T.length; hT < e; hT++) {
            if (!hW[T[hT]]) {
                hW[T[hT]] = true;
                hU.push(T[hT])
            }
        }
        return hU
    };
    P.getBestLevel = function(T, i) {
        if (i) {
            var e = Math.min(i.width / 1100, i.height / 660);
            T = Math.round(T + (Math.log(e) / Math.log(2)))
        }
        if (T < 1) {
            T = 1
        }
        if (T > 21) {
            T = 21
        }
        return T
    };
    P.parseGeo = function(hW, hZ) {
        if (typeof hW != "string" || !hW) {
            return
        }
        var h1 = hW.split("|");
        var e;
        var hU;
        var T;
        if (h1.length == 1) {
            e = gb(hW)
        } else {
            e = gb(h1[2]);
            hU = gb(h1[0]);
            T = gb(h1[1]);
            if (!hZ) {
                return e
            }
        }
        var hX = {
            type: e.geoType
        };
        if (hZ) {
            switch (hX.type) {
            case ha:
                var hY = new hu(e.geo[0][0], e.geo[0][1]);
                var h0 = eo.convertMC2LL(hY);
                hX.point = h0;
                hX.points = [h0];
                break;
            case cI:
                hX.points = [];
                var h2 = e.geo[0];
                for (var hV = 0,
                hT = h2.length - 1; hV < hT; hV += 2) {
                    var h3 = new hu(h2[hV], h2[hV + 1]);
                    h3 = eo.convertMC2LL(h3);
                    hX.points.push(h3)
                }
                hU = new hu(hU.geo[0][0], hU.geo[0][1]);
                T = new hu(T.geo[0][0], T.geo[0][1]);
                hU = eo.convertMC2LL(hU);
                T = eo.convertMC2LL(T);
                hX.bounds = new dT(hU, T);
                break;
            default:
                break
            }
        }
        return hX
    };
    P.parseGeoExt = function(ic, h3) {
        if (!h3) {
            h3 = 0
        } else {
            if (h3 < 0.25) {
                h3 = 0
            } else {
                if (h3 > 0.25 && h3 < 1) {
                    h3 = 1
                } else {
                    if (h3 > 32) {
                        h3 = 32
                    }
                }
            }
        }
        var hY = ic.split("|");
        if (hY.length == 1) {
            var hT = gb(hY[0]);
            return {
                type: hT.type,
                bound: "",
                points: hT.geo.join(",")
            }
        } else {
            if (hY.length > 1) {
                var h4 = ic.split(";.=");
                var h0 = [];
                var hU = [];
                var h5 = 0;
                var h9 = h4.length;
                for (var h6 = 0; h6 < h9; h6++) {
                    var ib = h4[h6];
                    if (h9 > 1) {
                        if (h6 == 0) {
                            ib = ib + ";"
                        }
                        if (h6 > 0 && h6 < h9 - 1) {
                            ib = ".=" + ib + ";"
                        }
                        if (h6 == h9 - 1) {
                            ib = ".=" + ib
                        }
                    }
                    var hV = ib.split("|");
                    var h8 = gb(hV[0]);
                    var h7 = gb(hV[1]);
                    h0.push(h8.geo.join(","));
                    h0.push(h7.geo.join(","));
                    var hT = gb(hV[2]);
                    h5 = hT.type;
                    var ia = hT.geo.join(",");
                    ia = P.parseGeoExtReg1(ia);
                    if (h3 > 0) {
                        ia = P.parseGeoExtReg2(ia, h3)
                    }
                    hU.push(ia)
                }
                if (h9 <= 1) {
                    hU = hU.join(";")
                }
                if (h9 == 2) {
                    var T = hU[0] + ";" + hU[1];
                    var hW = T.split(";");
                    var e = [];
                    for (var h6 = 0; h6 < hW.length; h6++) {
                        var hZ = hW[h6].split(",")[0];
                        var hX = hW[h6].split(",")[1];
                        var h1 = new hu(hZ, hX);
                        var h2 = eo.convertMC2LL(h1);
                        e.push(h2)
                    }
                    hU = e
                }
                return {
                    type: h5,
                    bound: h0.join(";"),
                    points: hU
                }
            }
        }
    };
    P.getPoiPoint = function(e) {
        var T = [];
        var i = null;
        if (e.toString() == "Point") {
            i = e
        } else {
            if (typeof e == "string") {
                T = D.trim(e).split(",");
                if (T.length < 2) {
                    return
                }
                T[0] = parseFloat(D.trim(T[0]));
                T[1] = parseFloat(D.trim(T[1]))
            } else {
                T = e.slice(0);
                if (T.length < 2) {
                    return
                }
            }
            i = new BMap.Point(T[0], T[1])
        }
        return i
    };
    P.parseGeoStr = function(T) {
        var i = T.split(",");
        var e = new hu(i[0], i[1]);
        return eo.convertMC2LL(e)
    };
    P.level = {
        country: 4,
        province: 11,
        city: 12,
        area: 13
    };
    var hL = ["=", ".", "-", "*"];
    var f5 = 1 << 23;
    function gb(hZ) {
        var hY = ba(hZ.charAt(0));
        var T = hZ.substr(1);
        var h1 = 0;
        var e = T.length;
        var h2 = [];
        var hW = [];
        var hX = [];
        while (h1 < e) {
            if (T.charAt(h1) == hL[0]) {
                if ((e - h1) < 13) {
                    return 0
                }
                hX = aM(T.substr(h1, 13), h2);
                if (hX < 0) {
                    return 0
                }
                h1 += 13
            } else {
                if (T.charAt(h1) == ";") {
                    hW.push(h2.slice(0));
                    h2.length = 0; ++h1
                } else {
                    if ((e - h1) < 8) {
                        return 0
                    }
                    hX = c7(T.substr(h1, 8), h2);
                    if (hX < 0) {
                        return 0
                    }
                    h1 += 8
                }
            }
        }
        for (var hV = 0,
        hT = hW.length; hV < hT; hV++) {
            for (var hU = 0,
            h0 = hW[hV].length; hU < h0; hU++) {
                hW[hV][hU] /= 100
            }
        }
        return {
            geoType: hY,
            geo: hW
        }
    }
    function ba(i) {
        var e = -1;
        if (i == hL[1]) {
            e = ha
        } else {
            if (i == hL[2]) {
                e = cI
            } else {
                if (i == hL[3]) {
                    e = fw
                }
            }
        }
        return e
    }
    function aM(hU, T) {
        var e = 0;
        var hW = 0;
        var hV = 0;
        for (var hT = 0; hT < 6; hT++) {
            hV = cP(hU.substr(1 + hT, 1));
            if (hV < 0) {
                return - 1 - hT
            }
            e += hV << (6 * hT);
            hV = cP(hU.substr(7 + hT, 1));
            if (hV < 0) {
                return - 7 - hT
            }
            hW += hV << (6 * hT)
        }
        T.push(e);
        T.push(hW);
        return 0
    }
    function c7(hV, hT) {
        var T = hT.length;
        if (T < 2) {
            return - 1
        }
        var e = 0;
        var hX = 0;
        var hW = 0;
        for (var hU = 0; hU < 4; hU++) {
            hW = cP(hV.substr(hU, 1));
            if (hW < 0) {
                return - 1 - hU
            }
            e += hW << (6 * hU);
            hW = cP(hV.substr(4 + hU, 1));
            if (hW < 0) {
                return - 5 - hU
            }
            hX += hW << (6 * hU)
        }
        if (e > f5) {
            e = f5 - e
        }
        if (hX > f5) {
            hX = f5 - hX
        }
        hT.push(hT[T - 2] + e);
        hT.push(hT[T - 1] + hX);
        return 0
    }
    function cP(i) {
        var e = i.charCodeAt(0);
        if (i >= "A" && i <= "Z") {
            return e - "A".charCodeAt(0)
        } else {
            if (i >= "a" && i <= "z") {
                return (26 + e - "a".charCodeAt(0))
            } else {
                if (i >= "0" && i <= "9") {
                    return (52 + e - "0".charCodeAt(0))
                } else {
                    if (i == "+") {
                        return 62
                    } else {
                        if (i == "/") {
                            return 63
                        }
                    }
                }
            }
        }
        return - 1
    }
    P.pathToPoints = function(hV) {
        var hT = [];
        if (typeof hV !== "string") {
            return hT
        } else {
            var hU = hV.split(";");
            for (var T = 0; T < hU.length; T++) {
                var e = hU[T].split(",");
                hT.push(new hu(e[0], e[1]))
            }
        }
        return hT
    };
    window.BMAP_POI_TYPE_NORMAL = 0;
    window.BMAP_POI_TYPE_BUSSTOP = 1;
    window.BMAP_POI_TYPE_BUSLINE = 2;
    window.BMAP_POI_TYPE_SUBSTOP = 3;
    window.BMAP_POI_TYPE_SUBLINE = 4;
    var hx = 0;
    var fX = 1;
    var c4 = {};
    window.APIPack = c4;
    function fB(i, e) {
        ee.call(this);
        this._loc = {};
        this.setLocation(i);
        e = e || {};
        e.renderOptions = e.renderOptions || {};
        this._opts = {
            renderOptions: {
                panel: e.renderOptions.panel || null,
                map: e.renderOptions.map || null,
                autoViewport: e.renderOptions.autoViewport || true,
                selectFirstResult: e.renderOptions.selectFirstResult,
                highlightMode: e.renderOptions.highlightMode,
                enableDragging: e.renderOptions.enableDragging || false
            },
            onSearchComplete: e.onSearchComplete ||
            function() {},
            onMarkersSet: e.onMarkersSet ||
            function() {},
            onInfoHtmlSet: e.onInfoHtmlSet ||
            function() {},
            onResultsHtmlSet: e.onResultsHtmlSet ||
            function() {},
            onGetBusListComplete: e.onGetBusListComplete ||
            function() {},
            onGetBusLineComplete: e.onGetBusLineComplete ||
            function() {},
            onBusListHtmlSet: e.onBusListHtmlSet ||
            function() {},
            onBusLineHtmlSet: e.onBusLineHtmlSet ||
            function() {},
            onPolylinesSet: e.onPolylinesSet ||
            function() {},
            reqFrom: e.reqFrom || ""
        };
        if (typeof e != "undefined" && typeof e.renderOptions != "undefined" && typeof e.renderOptions["autoViewport"] != "undefined") {
            this._opts.renderOptions.autoViewport = e.renderOptions["autoViewport"]
        } else {
            this._opts.renderOptions.autoViewport = true
        }
        this._opts.renderOptions.panel = D.G(this._opts.renderOptions.panel)
    }
    fB.inherits(ee, "BaseSearch");
    D.extend(fB.prototype, {
        getResults: function() {
            if (!this._isMultiKey) {
                return this._results
            } else {
                return this._arrResults
            }
        },
        enableAutoViewport: function() {
            this._opts.renderOptions.autoViewport = true
        },
        disableAutoViewport: function() {
            this._opts.renderOptions.autoViewport = false
        },
        setLocation: function(e) {
            if (!e) {
                return
            }
            this._loc.src = e
        },
        setSearchCompleteCallback: function(e) {
            this._opts.onSearchComplete = e ||
            function() {}
        },
        setMarkersSetCallback: function(e) {
            this._opts.onMarkersSet = e ||
            function() {}
        },
        setPolylinesSetCallback: function(e) {
            this._opts.onPolylinesSet = e ||
            function() {}
        },
        setInfoHtmlSetCallback: function(e) {
            this._opts.onInfoHtmlSet = e ||
            function() {}
        },
        setResultsHtmlSetCallback: function(e) {
            this._opts.onResultsHtmlSet = e ||
            function() {}
        },
        getStatus: function() {
            return this._status
        }
    });
    var dO = function(T, i) {
        fB.call(this, T, i);
        i = i || {};
        i.renderOptions = i.renderOptions || {};
        this.setPageCapacity(i.pageCapacity);
        if (typeof i.renderOptions["selectFirstResult"] != "undefined" && !i.renderOptions["selectFirstResult"]) {
            this.disableFirstResultSelection()
        } else {
            this.enableFirstResultSelection()
        }
        this._overlays = [];
        this._arrPois = [];
        this._curIndex = -1;
        this._queryList = [];
        var e = this;
        eb.load("localSearch",
        function() {
            e._check()
        },
        true)
    };
    dO.inherits(fB, "LocalSearch");
    dO.DEFAULT_PAGE_CAPACITY = 10;
    dO.MIN_PAGE_CAPACITY = 1;
    dO.MAX_PAGE_CAPACITY = 100;
    dO.DEFAULT_RADIUS = 2000;
    dO.MAX_RADIUS = 100000;
    D.extend(dO.prototype, {
        search: function(e, i) {
            this._queryList.push({
                method: "search",
                arguments: [e, i]
            })
        },
        searchInBounds: function(e, T, i) {
            this._queryList.push({
                method: "searchInBounds",
                arguments: [e, T, i]
            })
        },
        searchNearby: function(T, i, e, hT) {
            this._queryList.push({
                method: "searchNearby",
                arguments: [T, i, e, hT]
            })
        },
        clearResults: function() {
            delete this._json;
            delete this._status;
            delete this._results;
            delete this._ud;
            this._curIndex = -1;
            this._setStatus();
            if (this._opts.renderOptions.panel) {
                this._opts.renderOptions.panel.innerHTML = ""
            }
        },
        gotoPage: function() {},
        enableFirstResultSelection: function() {
            this._opts.renderOptions.selectFirstResult = true
        },
        disableFirstResultSelection: function() {
            this._opts.renderOptions.selectFirstResult = false
        },
        setPageCapacity: function(e) {
            if (typeof e == "number" && !isNaN(e)) {
                this._opts.pageCapacity = e < 1 ? dO.DEFAULT_PAGE_CAPACITY: (e > dO.MAX_PAGE_CAPACITY ? dO.DEFAULT_PAGE_CAPACITY: e)
            } else {
                this._opts.pageCapacity = dO.DEFAULT_PAGE_CAPACITY
            }
        },
        getPageCapacity: function() {
            return this._opts.pageCapacity
        },
        toString: function() {
            return "LocalSearch"
        }
    });
    function W(i) {
        this._opts = {};
        D.extend(this._opts, i);
        this._queryList = [];
        var e = this;
        eb.load("otherSearch",
        function() {
            e._asyncSearch()
        })
    }
    W.inherits(ee, "Geocoder");
    D.extend(W.prototype, {
        getPoint: function(e, T, i) {
            this._queryList.push({
                method: "getPoint",
                arguments: [e, T, i]
            })
        },
        getLocation: function(e, T, i) {
            this._queryList.push({
                method: "getLocation",
                arguments: [e, T, i]
            })
        },
        toString: function() {
            return "Geocoder"
        }
    });
    function cT(e) {
        e = e || {};
        this.config = {
            timeout: e.timeout || 1000 * 10,
            maximumAge: e.maximumAge || 0,
            enableHighAccuracy: e.enableHighAccuracy || false,
            SDKLocation: e.SDKLocation || false
        };
        this._pendingCalls = [];
        var i = this;
        eb.load("otherSearch",
        function() {
            var T = i._pendingCalls.length;
            for (var hT = 0; hT < T; hT++) {
                var hU = i._pendingCalls[hT];
                i[hU.method].apply(i, hU.arguments)
            }
        })
    }
    D.extend(cT.prototype, {
        getCurrentPosition: function(e, i) {
            this._pendingCalls.push({
                method: "getCurrentPosition",
                arguments: arguments
            })
        },
        getStatus: function() {
            return BMAP_STATUS_UNKNOWN_LOCATION
        },
        enableSDKLocation: function() {
            if (f6()) {
                this.config.SDKLocation = true
            }
        },
        disableSDKLocation: function() {
            this.config.SDKLocation = false
        }
    });
    function gA() {
        this._queryList = [];
        var e = this;
        eb.load("otherSearch",
        function() {
            e._asyncSearch()
        })
    }
    gA.inherits(ee, "Boundary");
    D.extend(gA.prototype, {
        get: function(i, e) {
            this._queryList.push({
                method: "get",
                arguments: [i, e]
            })
        },
        toString: function() {
            return "Boundary"
        }
    });
    function g2(i) {
        this._queryList = [];
        this._map = i;
        var e = this;
        eb.load("otherSearch",
        function() {
            e._asyncSearch()
        })
    }
    g2.inherits(ee, "TrafficV2");
    D.extend(g2.prototype, {
        getByRoadGrade: function(hV, hU, i) {
            var T = {};
            T.roadTraffic = [];
            var hV = hV || 0;
            var e = "";
            if (hU) {
                e += hU.ne.lat + "," + hU.sw.lng + ";";
                e += hU.sw.lat + "," + hU.ne.lng
            }
            var hT = this;
            cC.request(function(hY) {
                if (hY) {
                    if (hY.status !== 0) {
                        T.roadTraffic.push(hY.message);
                        return
                    }
                    if (hY.road_traffic) {
                        for (var h0 = 0; h0 < hY.road_traffic.length; h0++) {
                            var h1 = hY.road_traffic[h0].traffic_detail;
                            for (var hZ = 0; hZ < h1.length; hZ++) {
                                var h2 = h1[hZ].path;
                                var h3 = hT._makePoints(h2.split(/[^\d\.-]+/));
                                var hX = "#0db365";
                                if (h1[hZ].status === 1) {
                                    hX = "#0db365"
                                } else {
                                    if (h1[hZ].status === 2) {
                                        hX = "#debd04"
                                    } else {
                                        if (h1[hZ].status === 3) {
                                            hX = "#f18505"
                                        } else {
                                            if (h1[hZ].status === 4) {
                                                hX = "#f10918"
                                            } else {
                                                if (h1[hZ].status === 5) {
                                                    hX = "#bb0011"
                                                }
                                            }
                                        }
                                    }
                                }
                                if (h3.length > 0) {
                                    var hW = new BMapGL.Polyline(h3, {
                                        strokeColor: hX,
                                        strokeWeight: 5,
                                        strokeOpacity: 1
                                    });
                                    hT._map.addOverlay(hW)
                                }
                            }
                        }
                    }
                }
                i && i(T)
            },
            {
                ak: "wLyfGqURcRTDOiGDGwDqS8tj6w2QXiTS",
                bounds: e,
                road_grade: hV
            },
            "", "traffic/v1/bound")
        },
        getByRoadName: function(T, hU, e) {
            var T = T || "";
            var hU = hU || "";
            var i = {};
            i.roadNameTraffic = [];
            var hT = this;
            cC.request(function(hX) {
                if (hX) {
                    if (hX.status !== 0) {
                        i.roadNameTraffic.push(hX.message);
                        return
                    }
                    i.roadNameTraffic.push(hX);
                    if (hX.road_traffic) {
                        for (var hZ = 0; hZ < hX.road_traffic.length; hZ++) {
                            var h0 = hX.road_traffic[hZ].traffic_detail;
                            for (var hY = 0; hY < h0.length; hY++) {
                                var h1 = h0[hY].path;
                                var h2 = hT._makePoints(h1.split(/[^\d\.-]+/));
                                var hW = "#0db365";
                                if (h0[hY].status === 1) {
                                    hW = "#0db365"
                                } else {
                                    if (h0[hY].status === 2) {
                                        hW = "#debd04"
                                    } else {
                                        if (h0[hY].status === 3) {
                                            hW = "#f18505"
                                        } else {
                                            if (h0[hY].status === 4) {
                                                hW = "#f10918"
                                            } else {
                                                if (h0[hY].status === 5) {
                                                    hW = "#bb0011"
                                                }
                                            }
                                        }
                                    }
                                }
                                if (h2.length > 0) {
                                    var hV = new BMapGL.Polyline(h2, {
                                        strokeColor: hW,
                                        strokeWeight: 5,
                                        strokeOpacity: 1
                                    });
                                    hT._map.addOverlay(hV)
                                }
                            }
                        }
                    }
                }
                e && e(i)
            },
            {
                ak: "wLyfGqURcRTDOiGDGwDqS8tj6w2QXiTS",
                road_name: T,
                city: hU
            },
            "", "traffic/v1/road")
        },
        toString: function() {
            return "TrafficV2"
        },
        _makePoints: function(hT) {
            var T = new Array();
            for (var e = 0; e < hT.length - 1; e += 2) {
                T.push(new hu(Number(hT[e]), Number(hT[e + 1])))
            }
            return T
        }
    });
    function X(i) {
        i = i || {};
        i.renderOptions = i.renderOptions || {};
        this._opts = {
            renderOptions: {
                map: i.renderOptions.map || null
            }
        };
        this._queryList = [];
        var e = this;
        eb.load("otherSearch",
        function() {
            e._asyncSearch()
        })
    }
    X.inherits(ee, "LocalCity");
    D.extend(X.prototype, {
        get: function(e) {
            this._queryList.push({
                method: "get",
                arguments: [e]
            })
        },
        toString: function() {
            return "LocalCity"
        }
    });
    function cO(e, T) {
        ee.call(this);
        this.markersList = [];
        this.destList = [];
        this.pointsList = [];
        this._opts = T;
        this.json = e;
        this.map = this._opts.renderOptions.map || null;
        this.sType = this._opts.sType;
        this.infoWindow = null;
        this.curPointIndex = 0;
        this.startName = "";
        this.endIndex = 1;
        this.endName = "";
        this.resCity = [0, 0, 0, 0, 0, 0, 0];
        this.locPois = [];
        this.curPageIndex = [1, 1, 1, 1, 1, 1, 1];
        this.totalPage = [1, 1, 1, 1, 1, 1, 1];
        this.resCount = [0, 0, 0, 0, 0, 0, 0];
        this.resType = [0, 0, 0, 0, 0, 0, 0];
        this.qInfo = [{
            n: "",
            c: 0,
            u: 0,
            x: 0,
            y: 0,
            t: -1
        },
        {
            n: "",
            c: 0,
            u: 0,
            x: 0,
            y: 0,
            t: -1
        },
        {
            n: "",
            c: 0,
            u: 0,
            x: 0,
            y: 0,
            t: -1
        },
        {
            n: "",
            c: 0,
            u: 0,
            x: 0,
            y: 0,
            t: -1
        },
        {
            n: "",
            c: 0,
            u: 0,
            x: 0,
            y: 0,
            t: -1
        },
        {
            n: "",
            c: 0,
            u: 0,
            x: 0,
            y: 0,
            t: -1
        },
        {
            n: "",
            c: 0,
            u: 0,
            x: 0,
            y: 0,
            t: -1
        }];
        this.curSelectedIndex = -1;
        this.tpList = [];
        this.tpListInMap = [];
        var i = this;
        eb.load("route",
        function() {})
    }
    cO.inherits(ee, "RouteAddr");
    function d4(T, i) {
        fB.call(this, T, i);
        this.QUERY_TYPE_BUSLIST = g;
        this.RETURN_TYPE_BUSLIST = bR;
        this.QUERY_TYPE_BUSLINE = bd;
        this.RETURN_TYPE_BUSLINE = dK;
        this._queryList = [];
        var e = this;
        eb.load("buslineSearch",
        function() {
            e._asyncSearch()
        })
    }
    var bo = e4.staticHost + "/wolfman/static/common/images/";
    d4._iconOpen = e4.apiIMG + "/iw_plus.gif";
    d4._iconClose = e4.apiIMG + "/iw_minus.gif";
    d4._stopUrl = bo + "new/bus-stop-1x_ddd4723.png";
    d4.inherits(fB, "BusLineSearch");
    D.extend(d4.prototype, {
        getBusList: function(e) {
            this._queryList.push({
                method: "getBusList",
                arguments: [e]
            })
        },
        getBusLine: function(e) {
            this._queryList.push({
                method: "getBusLine",
                arguments: [e]
            })
        },
        setGetBusListCompleteCallback: function(e) {
            this._opts.onGetBusListComplete = e ||
            function() {}
        },
        setGetBusLineCompleteCallback: function(e) {
            this._opts.onGetBusLineComplete = e ||
            function() {}
        },
        setBusListHtmlSetCallback: function(e) {
            this._opts.onBusListHtmlSet = e ||
            function() {}
        },
        setBusLineHtmlSetCallback: function(e) {
            this._opts.onBusLineHtmlSet = e ||
            function() {}
        },
        setPolylinesSetCallback: function(e) {
            this._opts.onPolylinesSet = e ||
            function() {}
        }
    });
    function g4(i) {
        fB.call(this, i);
        i = i || {};
        this._options = {
            input: i.input || null,
            baseDom: i.baseDom || null,
            types: i.types || [],
            onSearchComplete: i.onSearchComplete ||
            function() {}
        };
        this._loc.src = i.location || "全国";
        this._word = "";
        this._show = false;
        this._suggestion = null;
        this._inputValue = "";
        this._initialize();
        var e = this;
        eb.load("autocomplete",
        function() {
            e._asyncSearch()
        },
        true)
    }
    g4.inherits(fB, "Autocomplete");
    D.extend(g4.prototype, {
        _initialize: function() {},
        show: function() {
            this._show = true
        },
        hide: function() {
            this._show = false
        },
        setTypes: function(e) {
            this._options.types = e
        },
        setLocation: function(e) {
            this._loc.src = e
        },
        search: function(e) {
            this._word = e
        },
        setInputValue: function(e) {
            this._inputValue = e
        },
        setSearchCompleteCallback: function(e) {
            this._options.onSearchComplete = e
        }
    });
    var hh = function(i, e) {
        fB.call(this, i, e)
    };
    D.inherit(hh, fB, "BaseRoute");
    D.extend(hh.prototype, {
        clearResults: function() {}
    });
    window.BMAP_TRANSIT_POLICY_RECOMMEND = 0;
    window.BMAP_TRANSIT_POLICY_LEAST_TIME = 4;
    window.BMAP_TRANSIT_POLICY_LEAST_TRANSFER = 1;
    window.BMAP_TRANSIT_POLICY_LEAST_WALKING = 2;
    window.BMAP_TRANSIT_POLICY_AVOID_SUBWAYS = 3;
    window.BMAP_TRANSIT_POLICY_FIRST_SUBWAYS = 5;
    window.BMAP_LINE_TYPE_BUS = 0;
    window.BMAP_LINE_TYPE_SUBWAY = 1;
    window.BMAP_LINE_TYPE_FERRY = 2;
    window.BMAP_LINE_TYPE_TRAIN = 3;
    window.BMAP_LINE_TYPE_AIRPLANE = 4;
    window.BMAP_LINE_TYPE_COACH = 5;
    var dl = 3;
    var fk = 4;
    var hA = 1;
    var d0 = 2;
    var gQ = 5;
    var g8 = 6;
    window.BMAP_TRANSIT_TYPE_IN_CITY = 0;
    window.BMAP_TRANSIT_TYPE_CROSS_CITY = 1;
    window.BMAP_TRANSIT_PLAN_TYPE_ROUTE = 0;
    window.BMAP_TRANSIT_PLAN_TYPE_LINE = 1;
    window.BMAP_TRANSIT_TYPE_POLICY_TRAIN = 0;
    window.BMAP_TRANSIT_TYPE_POLICY_AIRPLANE = 1;
    window.BMAP_TRANSIT_TYPE_POLICY_COACH = 2;
    window.BMAP_INTERCITY_POLICY_LEAST_TIME = 0;
    window.BMAP_INTERCITY_POLICY_EARLY_START = 1;
    window.BMAP_INTERCITY_POLICY_CHEAP_PRICE = 2;
    function bJ(T, i) {
        hh.call(this, T, i);
        i = i || {};
        this.setPolicy(i.policy);
        this.setIntercityPolicy(i.intercityPolicy);
        this.setTransitTypePolicy(i.transitTypePolicy);
        this.setPageCapacity(i.pageCapacity);
        this.QUERY_TYPE = hK;
        this.RETURN_TYPE = hE;
        this.ROUTE_TYPE = fX;
        this._overlays = [];
        this._curIndex = -1;
        this._opts._enableTraffic = i.enableTraffic || false;
        this._queryList = [];
        var e = this;
        eb.load("route",
        function() {
            e._asyncSearch()
        },
        true)
    }
    bJ.MAX_PAGE_CAPACITY = 100;
    bJ.LINE_TYPE_MAPPING = [0, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 1, 1];
    bJ.LINE_TYPE_MAPPING_CROSS_CITY = [0, 3, 4, 0, 0, 0, 5];
    D.inherit(bJ, hh, "TransitRoute");
    D.extend(bJ.prototype, {
        setPolicy: function(e) {
            if (e >= BMAP_TRANSIT_POLICY_RECOMMEND && e <= BMAP_TRANSIT_POLICY_FIRST_SUBWAYS) {
                this._opts.policy = e
            } else {
                this._opts.policy = BMAP_TRANSIT_POLICY_RECOMMEND
            }
        },
        setIntercityPolicy: function(e) {
            if (e >= BMAP_INTERCITY_POLICY_LEAST_TIME && e <= BMAP_INTERCITY_POLICY_CHEAP_PRICE) {
                this._opts.intercityPolicy = e
            } else {
                this._opts.intercityPolicy = BMAP_INTERCITY_POLICY_LEAST_TIME
            }
        },
        setTransitTypePolicy: function(e) {
            if (e >= BMAP_TRANSIT_TYPE_POLICY_TRAIN && e <= BMAP_TRANSIT_TYPE_POLICY_COACH) {
                this._opts.transitTypePolicy = e
            } else {
                this._opts.transitTypePolicy = BMAP_TRANSIT_TYPE_POLICY_TRAIN
            }
        },
        _internalSearch: function(i, e) {
            this._queryList.push({
                method: "_internalSearch",
                arguments: [i, e]
            })
        },
        search: function(i, e) {
            this._queryList.push({
                method: "search",
                arguments: [i, e]
            })
        },
        setPageCapacity: function(e) {
            if (typeof e === "string") {
                e = parseInt(e, 10);
                if (isNaN(e)) {
                    this._opts.pageCapacity = bJ.MAX_PAGE_CAPACITY;
                    return
                }
            }
            if (typeof e !== "number") {
                this._opts.pageCapacity = bJ.MAX_PAGE_CAPACITY;
                return
            }
            if (e >= 1 && e <= bJ.MAX_PAGE_CAPACITY) {
                this._opts.pageCapacity = Math.round(e)
            } else {
                this._opts.pageCapacity = bJ.MAX_PAGE_CAPACITY
            }
        },
        toString: function() {
            return "TransitRoute"
        },
        _shortTitle: function(e) {
            return e.replace(/\(.*\)/, "")
        }
    });
    window.BMAP_HIGHLIGHT_STEP = 1;
    window.BMAP_HIGHLIGHT_ROUTE = 2;
    var cL = function(e, hT) {
        hh.call(this, e, hT);
        this._overlays = [];
        this._curIndex = -1;
        this._queryList = [];
        var T = this;
        var i = this._opts.renderOptions;
        if (i.highlightMode !== BMAP_HIGHLIGHT_STEP && i.highlightMode !== BMAP_HIGHLIGHT_ROUTE) {
            i.highlightMode = BMAP_HIGHLIGHT_STEP
        }
        this._enableDragging = this._opts.renderOptions.enableDragging ? true: false;
        eb.load("route",
        function() {
            T._asyncSearch()
        },
        true);
        if (this.init_d) {
            this.init_d()
        }
    };
    cL.ROAD_TYPE = ["", "环岛", "无属性道路", "主路", "高速连接路", "交叉点内路段", "连接道路", "停车场内部道路", "服务区内部道路", "桥", "步行街", "辅路", "匝道", "全封闭道路", "未定义交通区域", "POI连接路", "隧道", "步行道", "公交专用道", "提前右转道"];
    D.inherit(cL, hh, "DWRoute");
    D.extend(cL.prototype, {
        search: function(T, e, i) {
            this._queryList.push({
                method: "search",
                arguments: [T, e, i]
            })
        }
    });
    window.BMAP_DRIVING_POLICY_DEFAULT = 0;
    window.BMAP_DRIVING_POLICY_AVOID_HIGHWAYS = 3;
    window.BMAP_DRIVING_POLICY_FIRST_HIGHWAYS = 4;
    window.BMAP_DRIVING_POLICY_AVOID_CONGESTION = 5;
    window.BMAP_TRAFFICE_STATUS_NONE = 0;
    window.BMAP_TRAFFICE_STATUS_NORMAL = 1;
    window.BMAP_TRAFFICE_STATUS_SLOW = 2;
    window.BMAP_TRAFFICE_STATUS_JAM = 3;
    function fF(e, i) {
        cL.call(this, e, i);
        i = i || {};
        this._opts._enableTraffic = i.enableTraffic || false;
        this.setPolicy(i.policy);
        this.QUERY_TYPE = cQ;
        this.RETURN_TYPE = ff;
        this.ROUTE_TYPE = BMAP_ROUTE_TYPE_DRIVING
    }
    D.inherit(fF, cL, "DrivingRoute");
    fF.prototype.setPolicy = function(e) {
        if (e >= BMAP_DRIVING_POLICY_DEFAULT && e <= BMAP_DRIVING_POLICY_AVOID_CONGESTION) {
            this._opts.policy = e
        } else {
            this._opts.policy = BMAP_DRIVING_POLICY_DEFAULT
        }
    };
    function bb(e, i) {
        cL.call(this, e, i);
        this.QUERY_TYPE = el;
        this.RETURN_TYPE = ej;
        this.ROUTE_TYPE = BMAP_ROUTE_TYPE_WALKING;
        this._enableDragging = false
    }
    D.inherit(bb, cL, "WalkingRoute");
    function bn(e, i) {
        cL.call(this, e, i);
        this.QUERY_TYPE = S;
        this.ROUTE_TYPE = BMAP_ROUTE_TYPE_RIDING;
        this._enableDragging = false
    }
    D.inherit(bn, cL, "RidingRoute");
    window.BMAP_MODE_DRIVING = "driving";
    window.BMAP_MODE_TRANSIT = "transit";
    window.BMAP_MODE_WALKING = "walking";
    window.BMAP_MODE_NAVIGATION = "navigation";
    var bf = {
        web: "//api.map.baidu.com/direction?",
        android: "bdapp://map/direction?",
        ios: "baidumap://map/direction?"
    };
    function hv(e) {
        this.opts = e || {}
    }
    D.extend(hv.prototype, {
        routeCall: function(hT, e, T) {
            var i = this;
            eb.load("route",
            function() {
                i._asyncSearch(hT, e, T)
            })
        }
    });
    bp.Map = c9;
    bp.MapType = b7;
    bp.Point = hu;
    bp.Pixel = ek;
    bp.Size = ea;
    bp.Bounds = dT;
    bp.TileLayer = cS;
    bp.Copyright = c6;
    bp.Projection = bp.Project = eo;
    bp.Convertor = ay;
    bp.RenderTypeUtils = a9;
    bp.Overlay = bm;
    bp.Label = fQ;
    bp.Marker = aD;
    bp.Icon = hd;
    bp.Polyline = al;
    bp.BezierCurve = fo;
    bp.PolylineMultipart = fm;
    bp.Polygon = g6;
    bp.Prism = ch;
    bp.Marker3D = cw;
    bp.GroundOverlay = cq;
    bp.InfoWindow = ao;
    bp.SimpleInfoWindow = hJ;
    bp.Circle = dG;
    bp.Control = a8;
    bp.NavigationControl = du;
    bp.NavigationControl3D = eV;
    bp.CopyrightControl = dI;
    bp.ScaleControl = hj;
    bp.CityListControl = ec;
    bp.MapTypeControl = bD;
    bp.ZoomControl = cz;
    bp.LocationControl = bB;
    bp.LogoControl = ag;
    bp.DistanceTool = gM;
    bp.ContextMenu = cg;
    bp.MenuItem = fz;
    bp.OperationMask = ei;
    bp.Animation = p;
    bp.ViewAnimation = cN;
    bp.Transitions = co;
    bp.Event = bc;
    bp.trafficLayer = cf;
    bp.TrafficV2 = g2;
    bp.Geolocation = cT;
    bp.Geocoder = W;
    bp.Boundary = gA;
    bp.LocalCity = X;
    bp.LocalSearch = dO;
    bp.Autocomplete = g4;
    bp.BusLineSearch = d4;
    bp.WalkingRoute = bb;
    bp.RidingRoute = bn;
    bp.DrivingRoute = fF;
    bp.TransitRoute = bJ;
    bp.RouteSearch = hv;
    function d2(e, i) {
        for (var T in i) {
            e[T] = i[T]
        }
    }
    bp.verify();
    bp.apiLoad();
    bp.frequency();
    bp.getSeckey();
})(BMapGL, "BMapGL");