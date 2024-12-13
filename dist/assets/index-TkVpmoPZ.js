function e1(e, t) {
  for (var r = 0; r < t.length; r++) {
    const n = t[r];
    if (typeof n != "string" && !Array.isArray(n)) {
      for (const a in n)
        if (a !== "default" && !(a in e)) {
          const i = Object.getOwnPropertyDescriptor(n, a);
          i &&
            Object.defineProperty(
              e,
              a,
              i.get ? i : { enumerable: !0, get: () => n[a] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const a of document.querySelectorAll('link[rel="modulepreload"]')) n(a);
  new MutationObserver((a) => {
    for (const i of a)
      if (i.type === "childList")
        for (const s of i.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && n(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(a) {
    const i = {};
    return (
      a.integrity && (i.integrity = a.integrity),
      a.referrerPolicy && (i.referrerPolicy = a.referrerPolicy),
      a.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : a.crossOrigin === "anonymous"
          ? (i.credentials = "omit")
          : (i.credentials = "same-origin"),
      i
    );
  }
  function n(a) {
    if (a.ep) return;
    a.ep = !0;
    const i = r(a);
    fetch(a.href, i);
  }
})();
function t1(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var r1 = { exports: {} },
  Ec = {},
  n1 = { exports: {} },
  nt = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var No = Symbol.for("react.element"),
  Kx = Symbol.for("react.portal"),
  Xx = Symbol.for("react.fragment"),
  Qx = Symbol.for("react.strict_mode"),
  Jx = Symbol.for("react.profiler"),
  Zx = Symbol.for("react.provider"),
  qx = Symbol.for("react.context"),
  e_ = Symbol.for("react.forward_ref"),
  t_ = Symbol.for("react.suspense"),
  r_ = Symbol.for("react.memo"),
  n_ = Symbol.for("react.lazy"),
  Pd = Symbol.iterator;
function a_(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Pd && e[Pd]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var a1 = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  i1 = Object.assign,
  s1 = {};
function hs(e, t, r) {
  (this.props = e),
    (this.context = t),
    (this.refs = s1),
    (this.updater = r || a1);
}
hs.prototype.isReactComponent = {};
hs.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
hs.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function o1() {}
o1.prototype = hs.prototype;
function Wf(e, t, r) {
  (this.props = e),
    (this.context = t),
    (this.refs = s1),
    (this.updater = r || a1);
}
var Vf = (Wf.prototype = new o1());
Vf.constructor = Wf;
i1(Vf, hs.prototype);
Vf.isPureReactComponent = !0;
var Md = Array.isArray,
  l1 = Object.prototype.hasOwnProperty,
  zf = { current: null },
  c1 = { key: !0, ref: !0, __self: !0, __source: !0 };
function u1(e, t, r) {
  var n,
    a = {},
    i = null,
    s = null;
  if (t != null)
    for (n in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      l1.call(t, n) && !c1.hasOwnProperty(n) && (a[n] = t[n]);
  var o = arguments.length - 2;
  if (o === 1) a.children = r;
  else if (1 < o) {
    for (var l = Array(o), c = 0; c < o; c++) l[c] = arguments[c + 2];
    a.children = l;
  }
  if (e && e.defaultProps)
    for (n in ((o = e.defaultProps), o)) a[n] === void 0 && (a[n] = o[n]);
  return {
    $$typeof: No,
    type: e,
    key: i,
    ref: s,
    props: a,
    _owner: zf.current,
  };
}
function i_(e, t) {
  return {
    $$typeof: No,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Gf(e) {
  return typeof e == "object" && e !== null && e.$$typeof === No;
}
function s_(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (r) {
      return t[r];
    })
  );
}
var bd = /\/+/g;
function ru(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? s_("" + e.key)
    : t.toString(36);
}
function El(e, t, r, n, a) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (i) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case No:
          case Kx:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (a = a(s)),
      (e = n === "" ? "." + ru(s, 0) : n),
      Md(a)
        ? ((r = ""),
          e != null && (r = e.replace(bd, "$&/") + "/"),
          El(a, t, r, "", function (c) {
            return c;
          }))
        : a != null &&
          (Gf(a) &&
            (a = i_(
              a,
              r +
                (!a.key || (s && s.key === a.key)
                  ? ""
                  : ("" + a.key).replace(bd, "$&/") + "/") +
                e,
            )),
          t.push(a)),
      1
    );
  if (((s = 0), (n = n === "" ? "." : n + ":"), Md(e)))
    for (var o = 0; o < e.length; o++) {
      i = e[o];
      var l = n + ru(i, o);
      s += El(i, t, r, l, a);
    }
  else if (((l = a_(e)), typeof l == "function"))
    for (e = l.call(e), o = 0; !(i = e.next()).done; )
      (i = i.value), (l = n + ru(i, o++)), (s += El(i, t, r, l, a));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      ))
    );
  return s;
}
function Yo(e, t, r) {
  if (e == null) return e;
  var n = [],
    a = 0;
  return (
    El(e, n, "", "", function (i) {
      return t.call(r, i, a++);
    }),
    n
  );
}
function o_(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (r) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = r));
        },
        function (r) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = r));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Mr = { current: null },
  yl = { transition: null },
  l_ = {
    ReactCurrentDispatcher: Mr,
    ReactCurrentBatchConfig: yl,
    ReactCurrentOwner: zf,
  };
function f1() {
  throw Error("act(...) is not supported in production builds of React.");
}
nt.Children = {
  map: Yo,
  forEach: function (e, t, r) {
    Yo(
      e,
      function () {
        t.apply(this, arguments);
      },
      r,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Yo(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Yo(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Gf(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
nt.Component = hs;
nt.Fragment = Xx;
nt.Profiler = Jx;
nt.PureComponent = Wf;
nt.StrictMode = Qx;
nt.Suspense = t_;
nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = l_;
nt.act = f1;
nt.cloneElement = function (e, t, r) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var n = i1({}, e.props),
    a = e.key,
    i = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (s = zf.current)),
      t.key !== void 0 && (a = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var o = e.type.defaultProps;
    for (l in t)
      l1.call(t, l) &&
        !c1.hasOwnProperty(l) &&
        (n[l] = t[l] === void 0 && o !== void 0 ? o[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) n.children = r;
  else if (1 < l) {
    o = Array(l);
    for (var c = 0; c < l; c++) o[c] = arguments[c + 2];
    n.children = o;
  }
  return { $$typeof: No, type: e.type, key: a, ref: i, props: n, _owner: s };
};
nt.createContext = function (e) {
  return (
    (e = {
      $$typeof: qx,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Zx, _context: e }),
    (e.Consumer = e)
  );
};
nt.createElement = u1;
nt.createFactory = function (e) {
  var t = u1.bind(null, e);
  return (t.type = e), t;
};
nt.createRef = function () {
  return { current: null };
};
nt.forwardRef = function (e) {
  return { $$typeof: e_, render: e };
};
nt.isValidElement = Gf;
nt.lazy = function (e) {
  return { $$typeof: n_, _payload: { _status: -1, _result: e }, _init: o_ };
};
nt.memo = function (e, t) {
  return { $$typeof: r_, type: e, compare: t === void 0 ? null : t };
};
nt.startTransition = function (e) {
  var t = yl.transition;
  yl.transition = {};
  try {
    e();
  } finally {
    yl.transition = t;
  }
};
nt.unstable_act = f1;
nt.useCallback = function (e, t) {
  return Mr.current.useCallback(e, t);
};
nt.useContext = function (e) {
  return Mr.current.useContext(e);
};
nt.useDebugValue = function () {};
nt.useDeferredValue = function (e) {
  return Mr.current.useDeferredValue(e);
};
nt.useEffect = function (e, t) {
  return Mr.current.useEffect(e, t);
};
nt.useId = function () {
  return Mr.current.useId();
};
nt.useImperativeHandle = function (e, t, r) {
  return Mr.current.useImperativeHandle(e, t, r);
};
nt.useInsertionEffect = function (e, t) {
  return Mr.current.useInsertionEffect(e, t);
};
nt.useLayoutEffect = function (e, t) {
  return Mr.current.useLayoutEffect(e, t);
};
nt.useMemo = function (e, t) {
  return Mr.current.useMemo(e, t);
};
nt.useReducer = function (e, t, r) {
  return Mr.current.useReducer(e, t, r);
};
nt.useRef = function (e) {
  return Mr.current.useRef(e);
};
nt.useState = function (e) {
  return Mr.current.useState(e);
};
nt.useSyncExternalStore = function (e, t, r) {
  return Mr.current.useSyncExternalStore(e, t, r);
};
nt.useTransition = function () {
  return Mr.current.useTransition();
};
nt.version = "18.3.1";
n1.exports = nt;
var xe = n1.exports;
const c_ = t1(xe),
  u_ = e1({ __proto__: null, default: c_ }, [xe]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var f_ = xe,
  d_ = Symbol.for("react.element"),
  h_ = Symbol.for("react.fragment"),
  p_ = Object.prototype.hasOwnProperty,
  m_ = f_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  v_ = { key: !0, ref: !0, __self: !0, __source: !0 };
function d1(e, t, r) {
  var n,
    a = {},
    i = null,
    s = null;
  r !== void 0 && (i = "" + r),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (n in t) p_.call(t, n) && !v_.hasOwnProperty(n) && (a[n] = t[n]);
  if (e && e.defaultProps)
    for (n in ((t = e.defaultProps), t)) a[n] === void 0 && (a[n] = t[n]);
  return {
    $$typeof: d_,
    type: e,
    key: i,
    ref: s,
    props: a,
    _owner: m_.current,
  };
}
Ec.Fragment = h_;
Ec.jsx = d1;
Ec.jsxs = d1;
r1.exports = Ec;
var H = r1.exports,
  h1 = { exports: {} },
  dn = {},
  p1 = { exports: {} },
  m1 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(se, ye) {
    var ge = se.length;
    se.push(ye);
    e: for (; 0 < ge; ) {
      var oe = (ge - 1) >>> 1,
        O = se[oe];
      if (0 < a(O, ye)) (se[oe] = ye), (se[ge] = O), (ge = oe);
      else break e;
    }
  }
  function r(se) {
    return se.length === 0 ? null : se[0];
  }
  function n(se) {
    if (se.length === 0) return null;
    var ye = se[0],
      ge = se.pop();
    if (ge !== ye) {
      se[0] = ge;
      e: for (var oe = 0, O = se.length, U = O >>> 1; oe < U; ) {
        var R = 2 * (oe + 1) - 1,
          k = se[R],
          z = R + 1,
          re = se[z];
        if (0 > a(k, ge))
          z < O && 0 > a(re, k)
            ? ((se[oe] = re), (se[z] = ge), (oe = z))
            : ((se[oe] = k), (se[R] = ge), (oe = R));
        else if (z < O && 0 > a(re, ge)) (se[oe] = re), (se[z] = ge), (oe = z);
        else break e;
      }
    }
    return ye;
  }
  function a(se, ye) {
    var ge = se.sortIndex - ye.sortIndex;
    return ge !== 0 ? ge : se.id - ye.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var s = Date,
      o = s.now();
    e.unstable_now = function () {
      return s.now() - o;
    };
  }
  var l = [],
    c = [],
    u = 1,
    f = null,
    d = 3,
    h = !1,
    m = !1,
    p = !1,
    x = typeof setTimeout == "function" ? setTimeout : null,
    _ = typeof clearTimeout == "function" ? clearTimeout : null,
    v = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(se) {
    for (var ye = r(c); ye !== null; ) {
      if (ye.callback === null) n(c);
      else if (ye.startTime <= se)
        n(c), (ye.sortIndex = ye.expirationTime), t(l, ye);
      else break;
      ye = r(c);
    }
  }
  function S(se) {
    if (((p = !1), g(se), !m))
      if (r(l) !== null) (m = !0), Re(b);
      else {
        var ye = r(c);
        ye !== null && Ae(S, ye.startTime - se);
      }
  }
  function b(se, ye) {
    (m = !1), p && ((p = !1), _(A), (A = -1)), (h = !0);
    var ge = d;
    try {
      for (
        g(ye), f = r(l);
        f !== null && (!(f.expirationTime > ye) || (se && !P()));

      ) {
        var oe = f.callback;
        if (typeof oe == "function") {
          (f.callback = null), (d = f.priorityLevel);
          var O = oe(f.expirationTime <= ye);
          (ye = e.unstable_now()),
            typeof O == "function" ? (f.callback = O) : f === r(l) && n(l),
            g(ye);
        } else n(l);
        f = r(l);
      }
      if (f !== null) var U = !0;
      else {
        var R = r(c);
        R !== null && Ae(S, R.startTime - ye), (U = !1);
      }
      return U;
    } finally {
      (f = null), (d = ge), (h = !1);
    }
  }
  var C = !1,
    D = null,
    A = -1,
    F = 5,
    I = -1;
  function P() {
    return !(e.unstable_now() - I < F);
  }
  function B() {
    if (D !== null) {
      var se = e.unstable_now();
      I = se;
      var ye = !0;
      try {
        ye = D(!0, se);
      } finally {
        ye ? X() : ((C = !1), (D = null));
      }
    } else C = !1;
  }
  var X;
  if (typeof v == "function")
    X = function () {
      v(B);
    };
  else if (typeof MessageChannel < "u") {
    var ae = new MessageChannel(),
      le = ae.port2;
    (ae.port1.onmessage = B),
      (X = function () {
        le.postMessage(null);
      });
  } else
    X = function () {
      x(B, 0);
    };
  function Re(se) {
    (D = se), C || ((C = !0), X());
  }
  function Ae(se, ye) {
    A = x(function () {
      se(e.unstable_now());
    }, ye);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (se) {
      se.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      m || h || ((m = !0), Re(b));
    }),
    (e.unstable_forceFrameRate = function (se) {
      0 > se || 125 < se
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (F = 0 < se ? Math.floor(1e3 / se) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return r(l);
    }),
    (e.unstable_next = function (se) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var ye = 3;
          break;
        default:
          ye = d;
      }
      var ge = d;
      d = ye;
      try {
        return se();
      } finally {
        d = ge;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (se, ye) {
      switch (se) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          se = 3;
      }
      var ge = d;
      d = se;
      try {
        return ye();
      } finally {
        d = ge;
      }
    }),
    (e.unstable_scheduleCallback = function (se, ye, ge) {
      var oe = e.unstable_now();
      switch (
        (typeof ge == "object" && ge !== null
          ? ((ge = ge.delay),
            (ge = typeof ge == "number" && 0 < ge ? oe + ge : oe))
          : (ge = oe),
        se)
      ) {
        case 1:
          var O = -1;
          break;
        case 2:
          O = 250;
          break;
        case 5:
          O = 1073741823;
          break;
        case 4:
          O = 1e4;
          break;
        default:
          O = 5e3;
      }
      return (
        (O = ge + O),
        (se = {
          id: u++,
          callback: ye,
          priorityLevel: se,
          startTime: ge,
          expirationTime: O,
          sortIndex: -1,
        }),
        ge > oe
          ? ((se.sortIndex = ge),
            t(c, se),
            r(l) === null &&
              se === r(c) &&
              (p ? (_(A), (A = -1)) : (p = !0), Ae(S, ge - oe)))
          : ((se.sortIndex = O), t(l, se), m || h || ((m = !0), Re(b))),
        se
      );
    }),
    (e.unstable_shouldYield = P),
    (e.unstable_wrapCallback = function (se) {
      var ye = d;
      return function () {
        var ge = d;
        d = ye;
        try {
          return se.apply(this, arguments);
        } finally {
          d = ge;
        }
      };
    });
})(m1);
p1.exports = m1;
var g_ = p1.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var x_ = xe,
  un = g_;
function Ee(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1;
    r < arguments.length;
    r++
  )
    t += "&args[]=" + encodeURIComponent(arguments[r]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var v1 = new Set(),
  ro = {};
function _i(e, t) {
  as(e, t), as(e + "Capture", t);
}
function as(e, t) {
  for (ro[e] = t, e = 0; e < t.length; e++) v1.add(t[e]);
}
var oa = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Uu = Object.prototype.hasOwnProperty,
  __ =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Bd = {},
  jd = {};
function E_(e) {
  return Uu.call(jd, e)
    ? !0
    : Uu.call(Bd, e)
      ? !1
      : __.test(e)
        ? (jd[e] = !0)
        : ((Bd[e] = !0), !1);
}
function y_(e, t, r, n) {
  if (r !== null && r.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return n
        ? !1
        : r !== null
          ? !r.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function w_(e, t, r, n) {
  if (t === null || typeof t > "u" || y_(e, t, r, n)) return !0;
  if (n) return !1;
  if (r !== null)
    switch (r.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function br(e, t, r, n, a, i, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = n),
    (this.attributeNamespace = a),
    (this.mustUseProperty = r),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = s);
}
var Er = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Er[e] = new br(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Er[t] = new br(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Er[e] = new br(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Er[e] = new br(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Er[e] = new br(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Er[e] = new br(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Er[e] = new br(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Er[e] = new br(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Er[e] = new br(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Yf = /[\-:]([a-z])/g;
function Kf(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Yf, Kf);
    Er[t] = new br(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Yf, Kf);
    Er[t] = new br(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Yf, Kf);
  Er[t] = new br(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Er[e] = new br(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Er.xlinkHref = new br(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Er[e] = new br(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Xf(e, t, r, n) {
  var a = Er.hasOwnProperty(t) ? Er[t] : null;
  (a !== null
    ? a.type !== 0
    : n ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (w_(t, r, a, n) && (r = null),
    n || a === null
      ? E_(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r))
      : a.mustUseProperty
        ? (e[a.propertyName] = r === null ? (a.type === 3 ? !1 : "") : r)
        : ((t = a.attributeName),
          (n = a.attributeNamespace),
          r === null
            ? e.removeAttribute(t)
            : ((a = a.type),
              (r = a === 3 || (a === 4 && r === !0) ? "" : "" + r),
              n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))));
}
var ha = x_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Ko = Symbol.for("react.element"),
  Pi = Symbol.for("react.portal"),
  Mi = Symbol.for("react.fragment"),
  Qf = Symbol.for("react.strict_mode"),
  $u = Symbol.for("react.profiler"),
  g1 = Symbol.for("react.provider"),
  x1 = Symbol.for("react.context"),
  Jf = Symbol.for("react.forward_ref"),
  Hu = Symbol.for("react.suspense"),
  Wu = Symbol.for("react.suspense_list"),
  Zf = Symbol.for("react.memo"),
  Sa = Symbol.for("react.lazy"),
  _1 = Symbol.for("react.offscreen"),
  Ud = Symbol.iterator;
function Ss(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ud && e[Ud]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var bt = Object.assign,
  nu;
function Ps(e) {
  if (nu === void 0)
    try {
      throw Error();
    } catch (r) {
      var t = r.stack.trim().match(/\n( *(at )?)/);
      nu = (t && t[1]) || "";
    }
  return (
    `
` +
    nu +
    e
  );
}
var au = !1;
function iu(e, t) {
  if (!e || au) return "";
  au = !0;
  var r = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var n = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          n = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        n = c;
      }
      e();
    }
  } catch (c) {
    if (c && n && typeof c.stack == "string") {
      for (
        var a = c.stack.split(`
`),
          i = n.stack.split(`
`),
          s = a.length - 1,
          o = i.length - 1;
        1 <= s && 0 <= o && a[s] !== i[o];

      )
        o--;
      for (; 1 <= s && 0 <= o; s--, o--)
        if (a[s] !== i[o]) {
          if (s !== 1 || o !== 1)
            do
              if ((s--, o--, 0 > o || a[s] !== i[o])) {
                var l =
                  `
` + a[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= s && 0 <= o);
          break;
        }
    }
  } finally {
    (au = !1), (Error.prepareStackTrace = r);
  }
  return (e = e ? e.displayName || e.name : "") ? Ps(e) : "";
}
function S_(e) {
  switch (e.tag) {
    case 5:
      return Ps(e.type);
    case 16:
      return Ps("Lazy");
    case 13:
      return Ps("Suspense");
    case 19:
      return Ps("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = iu(e.type, !1)), e;
    case 11:
      return (e = iu(e.type.render, !1)), e;
    case 1:
      return (e = iu(e.type, !0)), e;
    default:
      return "";
  }
}
function Vu(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Mi:
      return "Fragment";
    case Pi:
      return "Portal";
    case $u:
      return "Profiler";
    case Qf:
      return "StrictMode";
    case Hu:
      return "Suspense";
    case Wu:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case x1:
        return (e.displayName || "Context") + ".Consumer";
      case g1:
        return (e._context.displayName || "Context") + ".Provider";
      case Jf:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Zf:
        return (
          (t = e.displayName || null), t !== null ? t : Vu(e.type) || "Memo"
        );
      case Sa:
        (t = e._payload), (e = e._init);
        try {
          return Vu(e(t));
        } catch {}
    }
  return null;
}
function T_(e) {
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
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
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
      return Vu(t);
    case 8:
      return t === Qf ? "StrictMode" : "Mode";
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
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Ua(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function E1(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function A_(e) {
  var t = E1(e) ? "checked" : "value",
    r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    n = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof r < "u" &&
    typeof r.get == "function" &&
    typeof r.set == "function"
  ) {
    var a = r.get,
      i = r.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return a.call(this);
        },
        set: function (s) {
          (n = "" + s), i.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: r.enumerable }),
      {
        getValue: function () {
          return n;
        },
        setValue: function (s) {
          n = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Xo(e) {
  e._valueTracker || (e._valueTracker = A_(e));
}
function y1(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var r = t.getValue(),
    n = "";
  return (
    e && (n = E1(e) ? (e.checked ? "true" : "false") : e.value),
    (e = n),
    e !== r ? (t.setValue(e), !0) : !1
  );
}
function Ol(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function zu(e, t) {
  var r = t.checked;
  return bt({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: r ?? e._wrapperState.initialChecked,
  });
}
function $d(e, t) {
  var r = t.defaultValue == null ? "" : t.defaultValue,
    n = t.checked != null ? t.checked : t.defaultChecked;
  (r = Ua(t.value != null ? t.value : r)),
    (e._wrapperState = {
      initialChecked: n,
      initialValue: r,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function w1(e, t) {
  (t = t.checked), t != null && Xf(e, "checked", t, !1);
}
function Gu(e, t) {
  w1(e, t);
  var r = Ua(t.value),
    n = t.type;
  if (r != null)
    n === "number"
      ? ((r === 0 && e.value === "") || e.value != r) && (e.value = "" + r)
      : e.value !== "" + r && (e.value = "" + r);
  else if (n === "submit" || n === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Yu(e, t.type, r)
    : t.hasOwnProperty("defaultValue") && Yu(e, t.type, Ua(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Hd(e, t, r) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var n = t.type;
    if (
      !(
        (n !== "submit" && n !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      r || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (r = e.name),
    r !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    r !== "" && (e.name = r);
}
function Yu(e, t, r) {
  (t !== "number" || Ol(e.ownerDocument) !== e) &&
    (r == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
}
var Ms = Array.isArray;
function Ki(e, t, r, n) {
  if (((e = e.options), t)) {
    t = {};
    for (var a = 0; a < r.length; a++) t["$" + r[a]] = !0;
    for (r = 0; r < e.length; r++)
      (a = t.hasOwnProperty("$" + e[r].value)),
        e[r].selected !== a && (e[r].selected = a),
        a && n && (e[r].defaultSelected = !0);
  } else {
    for (r = "" + Ua(r), t = null, a = 0; a < e.length; a++) {
      if (e[a].value === r) {
        (e[a].selected = !0), n && (e[a].defaultSelected = !0);
        return;
      }
      t !== null || e[a].disabled || (t = e[a]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ku(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(Ee(91));
  return bt({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Wd(e, t) {
  var r = t.value;
  if (r == null) {
    if (((r = t.children), (t = t.defaultValue), r != null)) {
      if (t != null) throw Error(Ee(92));
      if (Ms(r)) {
        if (1 < r.length) throw Error(Ee(93));
        r = r[0];
      }
      t = r;
    }
    t == null && (t = ""), (r = t);
  }
  e._wrapperState = { initialValue: Ua(r) };
}
function S1(e, t) {
  var r = Ua(t.value),
    n = Ua(t.defaultValue);
  r != null &&
    ((r = "" + r),
    r !== e.value && (e.value = r),
    t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
    n != null && (e.defaultValue = "" + n);
}
function Vd(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function T1(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Xu(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? T1(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var Qo,
  A1 = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, r, n, a) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, r, n, a);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Qo = Qo || document.createElement("div"),
          Qo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Qo.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function no(e, t) {
  if (t) {
    var r = e.firstChild;
    if (r && r === e.lastChild && r.nodeType === 3) {
      r.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var $s = {
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
    strokeWidth: !0,
  },
  C_ = ["Webkit", "ms", "Moz", "O"];
Object.keys($s).forEach(function (e) {
  C_.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), ($s[t] = $s[e]);
  });
});
function C1(e, t, r) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : r || typeof t != "number" || t === 0 || ($s.hasOwnProperty(e) && $s[e])
      ? ("" + t).trim()
      : t + "px";
}
function D1(e, t) {
  e = e.style;
  for (var r in t)
    if (t.hasOwnProperty(r)) {
      var n = r.indexOf("--") === 0,
        a = C1(r, t[r], n);
      r === "float" && (r = "cssFloat"), n ? e.setProperty(r, a) : (e[r] = a);
    }
}
var D_ = bt(
  { menuitem: !0 },
  {
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
    wbr: !0,
  },
);
function Qu(e, t) {
  if (t) {
    if (D_[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(Ee(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(Ee(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(Ee(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(Ee(62));
  }
}
function Ju(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
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
      return !0;
  }
}
var Zu = null;
function qf(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var qu = null,
  Xi = null,
  Qi = null;
function zd(e) {
  if ((e = Ro(e))) {
    if (typeof qu != "function") throw Error(Ee(280));
    var t = e.stateNode;
    t && ((t = Ac(t)), qu(e.stateNode, e.type, t));
  }
}
function L1(e) {
  Xi ? (Qi ? Qi.push(e) : (Qi = [e])) : (Xi = e);
}
function N1() {
  if (Xi) {
    var e = Xi,
      t = Qi;
    if (((Qi = Xi = null), zd(e), t)) for (e = 0; e < t.length; e++) zd(t[e]);
  }
}
function F1(e, t) {
  return e(t);
}
function k1() {}
var su = !1;
function R1(e, t, r) {
  if (su) return e(t, r);
  su = !0;
  try {
    return F1(e, t, r);
  } finally {
    (su = !1), (Xi !== null || Qi !== null) && (k1(), N1());
  }
}
function ao(e, t) {
  var r = e.stateNode;
  if (r === null) return null;
  var n = Ac(r);
  if (n === null) return null;
  r = n[t];
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
      (n = !n.disabled) ||
        ((e = e.type),
        (n = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !n);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (r && typeof r != "function") throw Error(Ee(231, t, typeof r));
  return r;
}
var ef = !1;
if (oa)
  try {
    var Ts = {};
    Object.defineProperty(Ts, "passive", {
      get: function () {
        ef = !0;
      },
    }),
      window.addEventListener("test", Ts, Ts),
      window.removeEventListener("test", Ts, Ts);
  } catch {
    ef = !1;
  }
function L_(e, t, r, n, a, i, s, o, l) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(r, c);
  } catch (u) {
    this.onError(u);
  }
}
var Hs = !1,
  Il = null,
  Pl = !1,
  tf = null,
  N_ = {
    onError: function (e) {
      (Hs = !0), (Il = e);
    },
  };
function F_(e, t, r, n, a, i, s, o, l) {
  (Hs = !1), (Il = null), L_.apply(N_, arguments);
}
function k_(e, t, r, n, a, i, s, o, l) {
  if ((F_.apply(this, arguments), Hs)) {
    if (Hs) {
      var c = Il;
      (Hs = !1), (Il = null);
    } else throw Error(Ee(198));
    Pl || ((Pl = !0), (tf = c));
  }
}
function Ei(e) {
  var t = e,
    r = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (r = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? r : null;
}
function O1(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Gd(e) {
  if (Ei(e) !== e) throw Error(Ee(188));
}
function R_(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Ei(e)), t === null)) throw Error(Ee(188));
    return t !== e ? null : e;
  }
  for (var r = e, n = t; ; ) {
    var a = r.return;
    if (a === null) break;
    var i = a.alternate;
    if (i === null) {
      if (((n = a.return), n !== null)) {
        r = n;
        continue;
      }
      break;
    }
    if (a.child === i.child) {
      for (i = a.child; i; ) {
        if (i === r) return Gd(a), e;
        if (i === n) return Gd(a), t;
        i = i.sibling;
      }
      throw Error(Ee(188));
    }
    if (r.return !== n.return) (r = a), (n = i);
    else {
      for (var s = !1, o = a.child; o; ) {
        if (o === r) {
          (s = !0), (r = a), (n = i);
          break;
        }
        if (o === n) {
          (s = !0), (n = a), (r = i);
          break;
        }
        o = o.sibling;
      }
      if (!s) {
        for (o = i.child; o; ) {
          if (o === r) {
            (s = !0), (r = i), (n = a);
            break;
          }
          if (o === n) {
            (s = !0), (n = i), (r = a);
            break;
          }
          o = o.sibling;
        }
        if (!s) throw Error(Ee(189));
      }
    }
    if (r.alternate !== n) throw Error(Ee(190));
  }
  if (r.tag !== 3) throw Error(Ee(188));
  return r.stateNode.current === r ? e : t;
}
function I1(e) {
  return (e = R_(e)), e !== null ? P1(e) : null;
}
function P1(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = P1(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var M1 = un.unstable_scheduleCallback,
  Yd = un.unstable_cancelCallback,
  O_ = un.unstable_shouldYield,
  I_ = un.unstable_requestPaint,
  Ht = un.unstable_now,
  P_ = un.unstable_getCurrentPriorityLevel,
  e0 = un.unstable_ImmediatePriority,
  b1 = un.unstable_UserBlockingPriority,
  Ml = un.unstable_NormalPriority,
  M_ = un.unstable_LowPriority,
  B1 = un.unstable_IdlePriority,
  yc = null,
  Xn = null;
function b_(e) {
  if (Xn && typeof Xn.onCommitFiberRoot == "function")
    try {
      Xn.onCommitFiberRoot(yc, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Mn = Math.clz32 ? Math.clz32 : U_,
  B_ = Math.log,
  j_ = Math.LN2;
function U_(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((B_(e) / j_) | 0)) | 0;
}
var Jo = 64,
  Zo = 4194304;
function bs(e) {
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
      return e;
  }
}
function bl(e, t) {
  var r = e.pendingLanes;
  if (r === 0) return 0;
  var n = 0,
    a = e.suspendedLanes,
    i = e.pingedLanes,
    s = r & 268435455;
  if (s !== 0) {
    var o = s & ~a;
    o !== 0 ? (n = bs(o)) : ((i &= s), i !== 0 && (n = bs(i)));
  } else (s = r & ~a), s !== 0 ? (n = bs(s)) : i !== 0 && (n = bs(i));
  if (n === 0) return 0;
  if (
    t !== 0 &&
    t !== n &&
    !(t & a) &&
    ((a = n & -n), (i = t & -t), a >= i || (a === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((n & 4 && (n |= r & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= n; 0 < t; )
      (r = 31 - Mn(t)), (a = 1 << r), (n |= e[r]), (t &= ~a);
  return n;
}
function $_(e, t) {
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
      return -1;
  }
}
function H_(e, t) {
  for (
    var r = e.suspendedLanes,
      n = e.pingedLanes,
      a = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var s = 31 - Mn(i),
      o = 1 << s,
      l = a[s];
    l === -1
      ? (!(o & r) || o & n) && (a[s] = $_(o, t))
      : l <= t && (e.expiredLanes |= o),
      (i &= ~o);
  }
}
function rf(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function j1() {
  var e = Jo;
  return (Jo <<= 1), !(Jo & 4194240) && (Jo = 64), e;
}
function ou(e) {
  for (var t = [], r = 0; 31 > r; r++) t.push(e);
  return t;
}
function Fo(e, t, r) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Mn(t)),
    (e[t] = r);
}
function W_(e, t) {
  var r = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var n = e.eventTimes;
  for (e = e.expirationTimes; 0 < r; ) {
    var a = 31 - Mn(r),
      i = 1 << a;
    (t[a] = 0), (n[a] = -1), (e[a] = -1), (r &= ~i);
  }
}
function t0(e, t) {
  var r = (e.entangledLanes |= t);
  for (e = e.entanglements; r; ) {
    var n = 31 - Mn(r),
      a = 1 << n;
    (a & t) | (e[n] & t) && (e[n] |= t), (r &= ~a);
  }
}
var gt = 0;
function U1(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var $1,
  r0,
  H1,
  W1,
  V1,
  nf = !1,
  qo = [],
  Ra = null,
  Oa = null,
  Ia = null,
  io = new Map(),
  so = new Map(),
  Aa = [],
  V_ =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function Kd(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Ra = null;
      break;
    case "dragenter":
    case "dragleave":
      Oa = null;
      break;
    case "mouseover":
    case "mouseout":
      Ia = null;
      break;
    case "pointerover":
    case "pointerout":
      io.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      so.delete(t.pointerId);
  }
}
function As(e, t, r, n, a, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: r,
        eventSystemFlags: n,
        nativeEvent: i,
        targetContainers: [a],
      }),
      t !== null && ((t = Ro(t)), t !== null && r0(t)),
      e)
    : ((e.eventSystemFlags |= n),
      (t = e.targetContainers),
      a !== null && t.indexOf(a) === -1 && t.push(a),
      e);
}
function z_(e, t, r, n, a) {
  switch (t) {
    case "focusin":
      return (Ra = As(Ra, e, t, r, n, a)), !0;
    case "dragenter":
      return (Oa = As(Oa, e, t, r, n, a)), !0;
    case "mouseover":
      return (Ia = As(Ia, e, t, r, n, a)), !0;
    case "pointerover":
      var i = a.pointerId;
      return io.set(i, As(io.get(i) || null, e, t, r, n, a)), !0;
    case "gotpointercapture":
      return (
        (i = a.pointerId), so.set(i, As(so.get(i) || null, e, t, r, n, a)), !0
      );
  }
  return !1;
}
function z1(e) {
  var t = ni(e.target);
  if (t !== null) {
    var r = Ei(t);
    if (r !== null) {
      if (((t = r.tag), t === 13)) {
        if (((t = O1(r)), t !== null)) {
          (e.blockedOn = t),
            V1(e.priority, function () {
              H1(r);
            });
          return;
        }
      } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function wl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var r = af(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (r === null) {
      r = e.nativeEvent;
      var n = new r.constructor(r.type, r);
      (Zu = n), r.target.dispatchEvent(n), (Zu = null);
    } else return (t = Ro(r)), t !== null && r0(t), (e.blockedOn = r), !1;
    t.shift();
  }
  return !0;
}
function Xd(e, t, r) {
  wl(e) && r.delete(t);
}
function G_() {
  (nf = !1),
    Ra !== null && wl(Ra) && (Ra = null),
    Oa !== null && wl(Oa) && (Oa = null),
    Ia !== null && wl(Ia) && (Ia = null),
    io.forEach(Xd),
    so.forEach(Xd);
}
function Cs(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    nf ||
      ((nf = !0),
      un.unstable_scheduleCallback(un.unstable_NormalPriority, G_)));
}
function oo(e) {
  function t(a) {
    return Cs(a, e);
  }
  if (0 < qo.length) {
    Cs(qo[0], e);
    for (var r = 1; r < qo.length; r++) {
      var n = qo[r];
      n.blockedOn === e && (n.blockedOn = null);
    }
  }
  for (
    Ra !== null && Cs(Ra, e),
      Oa !== null && Cs(Oa, e),
      Ia !== null && Cs(Ia, e),
      io.forEach(t),
      so.forEach(t),
      r = 0;
    r < Aa.length;
    r++
  )
    (n = Aa[r]), n.blockedOn === e && (n.blockedOn = null);
  for (; 0 < Aa.length && ((r = Aa[0]), r.blockedOn === null); )
    z1(r), r.blockedOn === null && Aa.shift();
}
var Ji = ha.ReactCurrentBatchConfig,
  Bl = !0;
function Y_(e, t, r, n) {
  var a = gt,
    i = Ji.transition;
  Ji.transition = null;
  try {
    (gt = 1), n0(e, t, r, n);
  } finally {
    (gt = a), (Ji.transition = i);
  }
}
function K_(e, t, r, n) {
  var a = gt,
    i = Ji.transition;
  Ji.transition = null;
  try {
    (gt = 4), n0(e, t, r, n);
  } finally {
    (gt = a), (Ji.transition = i);
  }
}
function n0(e, t, r, n) {
  if (Bl) {
    var a = af(e, t, r, n);
    if (a === null) gu(e, t, n, jl, r), Kd(e, n);
    else if (z_(a, e, t, r, n)) n.stopPropagation();
    else if ((Kd(e, n), t & 4 && -1 < V_.indexOf(e))) {
      for (; a !== null; ) {
        var i = Ro(a);
        if (
          (i !== null && $1(i),
          (i = af(e, t, r, n)),
          i === null && gu(e, t, n, jl, r),
          i === a)
        )
          break;
        a = i;
      }
      a !== null && n.stopPropagation();
    } else gu(e, t, n, null, r);
  }
}
var jl = null;
function af(e, t, r, n) {
  if (((jl = null), (e = qf(n)), (e = ni(e)), e !== null))
    if (((t = Ei(e)), t === null)) e = null;
    else if (((r = t.tag), r === 13)) {
      if (((e = O1(t)), e !== null)) return e;
      e = null;
    } else if (r === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (jl = e), null;
}
function G1(e) {
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
      switch (P_()) {
        case e0:
          return 1;
        case b1:
          return 4;
        case Ml:
        case M_:
          return 16;
        case B1:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Da = null,
  a0 = null,
  Sl = null;
function Y1() {
  if (Sl) return Sl;
  var e,
    t = a0,
    r = t.length,
    n,
    a = "value" in Da ? Da.value : Da.textContent,
    i = a.length;
  for (e = 0; e < r && t[e] === a[e]; e++);
  var s = r - e;
  for (n = 1; n <= s && t[r - n] === a[i - n]; n++);
  return (Sl = a.slice(e, 1 < n ? 1 - n : void 0));
}
function Tl(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function el() {
  return !0;
}
function Qd() {
  return !1;
}
function hn(e) {
  function t(r, n, a, i, s) {
    (this._reactName = r),
      (this._targetInst = a),
      (this.type = n),
      (this.nativeEvent = i),
      (this.target = s),
      (this.currentTarget = null);
    for (var o in e)
      e.hasOwnProperty(o) && ((r = e[o]), (this[o] = r ? r(i) : i[o]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? el
        : Qd),
      (this.isPropagationStopped = Qd),
      this
    );
  }
  return (
    bt(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var r = this.nativeEvent;
        r &&
          (r.preventDefault
            ? r.preventDefault()
            : typeof r.returnValue != "unknown" && (r.returnValue = !1),
          (this.isDefaultPrevented = el));
      },
      stopPropagation: function () {
        var r = this.nativeEvent;
        r &&
          (r.stopPropagation
            ? r.stopPropagation()
            : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0),
          (this.isPropagationStopped = el));
      },
      persist: function () {},
      isPersistent: el,
    }),
    t
  );
}
var ps = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  i0 = hn(ps),
  ko = bt({}, ps, { view: 0, detail: 0 }),
  X_ = hn(ko),
  lu,
  cu,
  Ds,
  wc = bt({}, ko, {
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
    getModifierState: s0,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Ds &&
            (Ds && e.type === "mousemove"
              ? ((lu = e.screenX - Ds.screenX), (cu = e.screenY - Ds.screenY))
              : (cu = lu = 0),
            (Ds = e)),
          lu);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : cu;
    },
  }),
  Jd = hn(wc),
  Q_ = bt({}, wc, { dataTransfer: 0 }),
  J_ = hn(Q_),
  Z_ = bt({}, ko, { relatedTarget: 0 }),
  uu = hn(Z_),
  q_ = bt({}, ps, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  eE = hn(q_),
  tE = bt({}, ps, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  rE = hn(tE),
  nE = bt({}, ps, { data: 0 }),
  Zd = hn(nE),
  aE = {
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
    MozPrintableKey: "Unidentified",
  },
  iE = {
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
    224: "Meta",
  },
  sE = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function oE(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = sE[e]) ? !!t[e] : !1;
}
function s0() {
  return oE;
}
var lE = bt({}, ko, {
    key: function (e) {
      if (e.key) {
        var t = aE[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Tl(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? iE[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: s0,
    charCode: function (e) {
      return e.type === "keypress" ? Tl(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Tl(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  cE = hn(lE),
  uE = bt({}, wc, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  qd = hn(uE),
  fE = bt({}, ko, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: s0,
  }),
  dE = hn(fE),
  hE = bt({}, ps, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  pE = hn(hE),
  mE = bt({}, wc, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  vE = hn(mE),
  gE = [9, 13, 27, 32],
  o0 = oa && "CompositionEvent" in window,
  Ws = null;
oa && "documentMode" in document && (Ws = document.documentMode);
var xE = oa && "TextEvent" in window && !Ws,
  K1 = oa && (!o0 || (Ws && 8 < Ws && 11 >= Ws)),
  eh = " ",
  th = !1;
function X1(e, t) {
  switch (e) {
    case "keyup":
      return gE.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Q1(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var bi = !1;
function _E(e, t) {
  switch (e) {
    case "compositionend":
      return Q1(t);
    case "keypress":
      return t.which !== 32 ? null : ((th = !0), eh);
    case "textInput":
      return (e = t.data), e === eh && th ? null : e;
    default:
      return null;
  }
}
function EE(e, t) {
  if (bi)
    return e === "compositionend" || (!o0 && X1(e, t))
      ? ((e = Y1()), (Sl = a0 = Da = null), (bi = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return K1 && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var yE = {
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
  week: !0,
};
function rh(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!yE[e.type] : t === "textarea";
}
function J1(e, t, r, n) {
  L1(n),
    (t = Ul(t, "onChange")),
    0 < t.length &&
      ((r = new i0("onChange", "change", null, r, n)),
      e.push({ event: r, listeners: t }));
}
var Vs = null,
  lo = null;
function wE(e) {
  lm(e, 0);
}
function Sc(e) {
  var t = Ui(e);
  if (y1(t)) return e;
}
function SE(e, t) {
  if (e === "change") return t;
}
var Z1 = !1;
if (oa) {
  var fu;
  if (oa) {
    var du = "oninput" in document;
    if (!du) {
      var nh = document.createElement("div");
      nh.setAttribute("oninput", "return;"),
        (du = typeof nh.oninput == "function");
    }
    fu = du;
  } else fu = !1;
  Z1 = fu && (!document.documentMode || 9 < document.documentMode);
}
function ah() {
  Vs && (Vs.detachEvent("onpropertychange", q1), (lo = Vs = null));
}
function q1(e) {
  if (e.propertyName === "value" && Sc(lo)) {
    var t = [];
    J1(t, lo, e, qf(e)), R1(wE, t);
  }
}
function TE(e, t, r) {
  e === "focusin"
    ? (ah(), (Vs = t), (lo = r), Vs.attachEvent("onpropertychange", q1))
    : e === "focusout" && ah();
}
function AE(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Sc(lo);
}
function CE(e, t) {
  if (e === "click") return Sc(t);
}
function DE(e, t) {
  if (e === "input" || e === "change") return Sc(t);
}
function LE(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var jn = typeof Object.is == "function" ? Object.is : LE;
function co(e, t) {
  if (jn(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var r = Object.keys(e),
    n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (n = 0; n < r.length; n++) {
    var a = r[n];
    if (!Uu.call(t, a) || !jn(e[a], t[a])) return !1;
  }
  return !0;
}
function ih(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function sh(e, t) {
  var r = ih(e);
  e = 0;
  for (var n; r; ) {
    if (r.nodeType === 3) {
      if (((n = e + r.textContent.length), e <= t && n >= t))
        return { node: r, offset: t - e };
      e = n;
    }
    e: {
      for (; r; ) {
        if (r.nextSibling) {
          r = r.nextSibling;
          break e;
        }
        r = r.parentNode;
      }
      r = void 0;
    }
    r = ih(r);
  }
}
function em(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? em(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function tm() {
  for (var e = window, t = Ol(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var r = typeof t.contentWindow.location.href == "string";
    } catch {
      r = !1;
    }
    if (r) e = t.contentWindow;
    else break;
    t = Ol(e.document);
  }
  return t;
}
function l0(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function NE(e) {
  var t = tm(),
    r = e.focusedElem,
    n = e.selectionRange;
  if (
    t !== r &&
    r &&
    r.ownerDocument &&
    em(r.ownerDocument.documentElement, r)
  ) {
    if (n !== null && l0(r)) {
      if (
        ((t = n.start),
        (e = n.end),
        e === void 0 && (e = t),
        "selectionStart" in r)
      )
        (r.selectionStart = t), (r.selectionEnd = Math.min(e, r.value.length));
      else if (
        ((e = ((t = r.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var a = r.textContent.length,
          i = Math.min(n.start, a);
        (n = n.end === void 0 ? i : Math.min(n.end, a)),
          !e.extend && i > n && ((a = n), (n = i), (i = a)),
          (a = sh(r, i));
        var s = sh(r, n);
        a &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== a.node ||
            e.anchorOffset !== a.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(a.node, a.offset),
          e.removeAllRanges(),
          i > n
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = r; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof r.focus == "function" && r.focus(), r = 0; r < t.length; r++)
      (e = t[r]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var FE = oa && "documentMode" in document && 11 >= document.documentMode,
  Bi = null,
  sf = null,
  zs = null,
  of = !1;
function oh(e, t, r) {
  var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
  of ||
    Bi == null ||
    Bi !== Ol(n) ||
    ((n = Bi),
    "selectionStart" in n && l0(n)
      ? (n = { start: n.selectionStart, end: n.selectionEnd })
      : ((n = (
          (n.ownerDocument && n.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (n = {
          anchorNode: n.anchorNode,
          anchorOffset: n.anchorOffset,
          focusNode: n.focusNode,
          focusOffset: n.focusOffset,
        })),
    (zs && co(zs, n)) ||
      ((zs = n),
      (n = Ul(sf, "onSelect")),
      0 < n.length &&
        ((t = new i0("onSelect", "select", null, t, r)),
        e.push({ event: t, listeners: n }),
        (t.target = Bi))));
}
function tl(e, t) {
  var r = {};
  return (
    (r[e.toLowerCase()] = t.toLowerCase()),
    (r["Webkit" + e] = "webkit" + t),
    (r["Moz" + e] = "moz" + t),
    r
  );
}
var ji = {
    animationend: tl("Animation", "AnimationEnd"),
    animationiteration: tl("Animation", "AnimationIteration"),
    animationstart: tl("Animation", "AnimationStart"),
    transitionend: tl("Transition", "TransitionEnd"),
  },
  hu = {},
  rm = {};
oa &&
  ((rm = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete ji.animationend.animation,
    delete ji.animationiteration.animation,
    delete ji.animationstart.animation),
  "TransitionEvent" in window || delete ji.transitionend.transition);
function Tc(e) {
  if (hu[e]) return hu[e];
  if (!ji[e]) return e;
  var t = ji[e],
    r;
  for (r in t) if (t.hasOwnProperty(r) && r in rm) return (hu[e] = t[r]);
  return e;
}
var nm = Tc("animationend"),
  am = Tc("animationiteration"),
  im = Tc("animationstart"),
  sm = Tc("transitionend"),
  om = new Map(),
  lh =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function za(e, t) {
  om.set(e, t), _i(t, [e]);
}
for (var pu = 0; pu < lh.length; pu++) {
  var mu = lh[pu],
    kE = mu.toLowerCase(),
    RE = mu[0].toUpperCase() + mu.slice(1);
  za(kE, "on" + RE);
}
za(nm, "onAnimationEnd");
za(am, "onAnimationIteration");
za(im, "onAnimationStart");
za("dblclick", "onDoubleClick");
za("focusin", "onFocus");
za("focusout", "onBlur");
za(sm, "onTransitionEnd");
as("onMouseEnter", ["mouseout", "mouseover"]);
as("onMouseLeave", ["mouseout", "mouseover"]);
as("onPointerEnter", ["pointerout", "pointerover"]);
as("onPointerLeave", ["pointerout", "pointerover"]);
_i(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
_i(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
_i("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
_i(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
_i(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
_i(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var Bs =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  OE = new Set("cancel close invalid load scroll toggle".split(" ").concat(Bs));
function ch(e, t, r) {
  var n = e.type || "unknown-event";
  (e.currentTarget = r), k_(n, t, void 0, e), (e.currentTarget = null);
}
function lm(e, t) {
  t = (t & 4) !== 0;
  for (var r = 0; r < e.length; r++) {
    var n = e[r],
      a = n.event;
    n = n.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var s = n.length - 1; 0 <= s; s--) {
          var o = n[s],
            l = o.instance,
            c = o.currentTarget;
          if (((o = o.listener), l !== i && a.isPropagationStopped())) break e;
          ch(a, o, c), (i = l);
        }
      else
        for (s = 0; s < n.length; s++) {
          if (
            ((o = n[s]),
            (l = o.instance),
            (c = o.currentTarget),
            (o = o.listener),
            l !== i && a.isPropagationStopped())
          )
            break e;
          ch(a, o, c), (i = l);
        }
    }
  }
  if (Pl) throw ((e = tf), (Pl = !1), (tf = null), e);
}
function Lt(e, t) {
  var r = t[df];
  r === void 0 && (r = t[df] = new Set());
  var n = e + "__bubble";
  r.has(n) || (cm(t, e, 2, !1), r.add(n));
}
function vu(e, t, r) {
  var n = 0;
  t && (n |= 4), cm(r, e, n, t);
}
var rl = "_reactListening" + Math.random().toString(36).slice(2);
function uo(e) {
  if (!e[rl]) {
    (e[rl] = !0),
      v1.forEach(function (r) {
        r !== "selectionchange" && (OE.has(r) || vu(r, !1, e), vu(r, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[rl] || ((t[rl] = !0), vu("selectionchange", !1, t));
  }
}
function cm(e, t, r, n) {
  switch (G1(t)) {
    case 1:
      var a = Y_;
      break;
    case 4:
      a = K_;
      break;
    default:
      a = n0;
  }
  (r = a.bind(null, t, r, e)),
    (a = void 0),
    !ef ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (a = !0),
    n
      ? a !== void 0
        ? e.addEventListener(t, r, { capture: !0, passive: a })
        : e.addEventListener(t, r, !0)
      : a !== void 0
        ? e.addEventListener(t, r, { passive: a })
        : e.addEventListener(t, r, !1);
}
function gu(e, t, r, n, a) {
  var i = n;
  if (!(t & 1) && !(t & 2) && n !== null)
    e: for (;;) {
      if (n === null) return;
      var s = n.tag;
      if (s === 3 || s === 4) {
        var o = n.stateNode.containerInfo;
        if (o === a || (o.nodeType === 8 && o.parentNode === a)) break;
        if (s === 4)
          for (s = n.return; s !== null; ) {
            var l = s.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = s.stateNode.containerInfo),
              l === a || (l.nodeType === 8 && l.parentNode === a))
            )
              return;
            s = s.return;
          }
        for (; o !== null; ) {
          if (((s = ni(o)), s === null)) return;
          if (((l = s.tag), l === 5 || l === 6)) {
            n = i = s;
            continue e;
          }
          o = o.parentNode;
        }
      }
      n = n.return;
    }
  R1(function () {
    var c = i,
      u = qf(r),
      f = [];
    e: {
      var d = om.get(e);
      if (d !== void 0) {
        var h = i0,
          m = e;
        switch (e) {
          case "keypress":
            if (Tl(r) === 0) break e;
          case "keydown":
          case "keyup":
            h = cE;
            break;
          case "focusin":
            (m = "focus"), (h = uu);
            break;
          case "focusout":
            (m = "blur"), (h = uu);
            break;
          case "beforeblur":
          case "afterblur":
            h = uu;
            break;
          case "click":
            if (r.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            h = Jd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            h = J_;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            h = dE;
            break;
          case nm:
          case am:
          case im:
            h = eE;
            break;
          case sm:
            h = pE;
            break;
          case "scroll":
            h = X_;
            break;
          case "wheel":
            h = vE;
            break;
          case "copy":
          case "cut":
          case "paste":
            h = rE;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            h = qd;
        }
        var p = (t & 4) !== 0,
          x = !p && e === "scroll",
          _ = p ? (d !== null ? d + "Capture" : null) : d;
        p = [];
        for (var v = c, g; v !== null; ) {
          g = v;
          var S = g.stateNode;
          if (
            (g.tag === 5 &&
              S !== null &&
              ((g = S),
              _ !== null && ((S = ao(v, _)), S != null && p.push(fo(v, S, g)))),
            x)
          )
            break;
          v = v.return;
        }
        0 < p.length &&
          ((d = new h(d, m, null, r, u)), f.push({ event: d, listeners: p }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === "mouseover" || e === "pointerover"),
          (h = e === "mouseout" || e === "pointerout"),
          d &&
            r !== Zu &&
            (m = r.relatedTarget || r.fromElement) &&
            (ni(m) || m[la]))
        )
          break e;
        if (
          (h || d) &&
          ((d =
            u.window === u
              ? u
              : (d = u.ownerDocument)
                ? d.defaultView || d.parentWindow
                : window),
          h
            ? ((m = r.relatedTarget || r.toElement),
              (h = c),
              (m = m ? ni(m) : null),
              m !== null &&
                ((x = Ei(m)), m !== x || (m.tag !== 5 && m.tag !== 6)) &&
                (m = null))
            : ((h = null), (m = c)),
          h !== m)
        ) {
          if (
            ((p = Jd),
            (S = "onMouseLeave"),
            (_ = "onMouseEnter"),
            (v = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((p = qd),
              (S = "onPointerLeave"),
              (_ = "onPointerEnter"),
              (v = "pointer")),
            (x = h == null ? d : Ui(h)),
            (g = m == null ? d : Ui(m)),
            (d = new p(S, v + "leave", h, r, u)),
            (d.target = x),
            (d.relatedTarget = g),
            (S = null),
            ni(u) === c &&
              ((p = new p(_, v + "enter", m, r, u)),
              (p.target = g),
              (p.relatedTarget = x),
              (S = p)),
            (x = S),
            h && m)
          )
            t: {
              for (p = h, _ = m, v = 0, g = p; g; g = Li(g)) v++;
              for (g = 0, S = _; S; S = Li(S)) g++;
              for (; 0 < v - g; ) (p = Li(p)), v--;
              for (; 0 < g - v; ) (_ = Li(_)), g--;
              for (; v--; ) {
                if (p === _ || (_ !== null && p === _.alternate)) break t;
                (p = Li(p)), (_ = Li(_));
              }
              p = null;
            }
          else p = null;
          h !== null && uh(f, d, h, p, !1),
            m !== null && x !== null && uh(f, x, m, p, !0);
        }
      }
      e: {
        if (
          ((d = c ? Ui(c) : window),
          (h = d.nodeName && d.nodeName.toLowerCase()),
          h === "select" || (h === "input" && d.type === "file"))
        )
          var b = SE;
        else if (rh(d))
          if (Z1) b = DE;
          else {
            b = AE;
            var C = TE;
          }
        else
          (h = d.nodeName) &&
            h.toLowerCase() === "input" &&
            (d.type === "checkbox" || d.type === "radio") &&
            (b = CE);
        if (b && (b = b(e, c))) {
          J1(f, b, r, u);
          break e;
        }
        C && C(e, d, c),
          e === "focusout" &&
            (C = d._wrapperState) &&
            C.controlled &&
            d.type === "number" &&
            Yu(d, "number", d.value);
      }
      switch (((C = c ? Ui(c) : window), e)) {
        case "focusin":
          (rh(C) || C.contentEditable === "true") &&
            ((Bi = C), (sf = c), (zs = null));
          break;
        case "focusout":
          zs = sf = Bi = null;
          break;
        case "mousedown":
          of = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (of = !1), oh(f, r, u);
          break;
        case "selectionchange":
          if (FE) break;
        case "keydown":
        case "keyup":
          oh(f, r, u);
      }
      var D;
      if (o0)
        e: {
          switch (e) {
            case "compositionstart":
              var A = "onCompositionStart";
              break e;
            case "compositionend":
              A = "onCompositionEnd";
              break e;
            case "compositionupdate":
              A = "onCompositionUpdate";
              break e;
          }
          A = void 0;
        }
      else
        bi
          ? X1(e, r) && (A = "onCompositionEnd")
          : e === "keydown" && r.keyCode === 229 && (A = "onCompositionStart");
      A &&
        (K1 &&
          r.locale !== "ko" &&
          (bi || A !== "onCompositionStart"
            ? A === "onCompositionEnd" && bi && (D = Y1())
            : ((Da = u),
              (a0 = "value" in Da ? Da.value : Da.textContent),
              (bi = !0))),
        (C = Ul(c, A)),
        0 < C.length &&
          ((A = new Zd(A, e, null, r, u)),
          f.push({ event: A, listeners: C }),
          D ? (A.data = D) : ((D = Q1(r)), D !== null && (A.data = D)))),
        (D = xE ? _E(e, r) : EE(e, r)) &&
          ((c = Ul(c, "onBeforeInput")),
          0 < c.length &&
            ((u = new Zd("onBeforeInput", "beforeinput", null, r, u)),
            f.push({ event: u, listeners: c }),
            (u.data = D)));
    }
    lm(f, t);
  });
}
function fo(e, t, r) {
  return { instance: e, listener: t, currentTarget: r };
}
function Ul(e, t) {
  for (var r = t + "Capture", n = []; e !== null; ) {
    var a = e,
      i = a.stateNode;
    a.tag === 5 &&
      i !== null &&
      ((a = i),
      (i = ao(e, r)),
      i != null && n.unshift(fo(e, i, a)),
      (i = ao(e, t)),
      i != null && n.push(fo(e, i, a))),
      (e = e.return);
  }
  return n;
}
function Li(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function uh(e, t, r, n, a) {
  for (var i = t._reactName, s = []; r !== null && r !== n; ) {
    var o = r,
      l = o.alternate,
      c = o.stateNode;
    if (l !== null && l === n) break;
    o.tag === 5 &&
      c !== null &&
      ((o = c),
      a
        ? ((l = ao(r, i)), l != null && s.unshift(fo(r, l, o)))
        : a || ((l = ao(r, i)), l != null && s.push(fo(r, l, o)))),
      (r = r.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var IE = /\r\n?/g,
  PE = /\u0000|\uFFFD/g;
function fh(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      IE,
      `
`,
    )
    .replace(PE, "");
}
function nl(e, t, r) {
  if (((t = fh(t)), fh(e) !== t && r)) throw Error(Ee(425));
}
function $l() {}
var lf = null,
  cf = null;
function uf(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var ff = typeof setTimeout == "function" ? setTimeout : void 0,
  ME = typeof clearTimeout == "function" ? clearTimeout : void 0,
  dh = typeof Promise == "function" ? Promise : void 0,
  bE =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof dh < "u"
        ? function (e) {
            return dh.resolve(null).then(e).catch(BE);
          }
        : ff;
function BE(e) {
  setTimeout(function () {
    throw e;
  });
}
function xu(e, t) {
  var r = t,
    n = 0;
  do {
    var a = r.nextSibling;
    if ((e.removeChild(r), a && a.nodeType === 8))
      if (((r = a.data), r === "/$")) {
        if (n === 0) {
          e.removeChild(a), oo(t);
          return;
        }
        n--;
      } else (r !== "$" && r !== "$?" && r !== "$!") || n++;
    r = a;
  } while (r);
  oo(t);
}
function Pa(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function hh(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var r = e.data;
      if (r === "$" || r === "$!" || r === "$?") {
        if (t === 0) return e;
        t--;
      } else r === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var ms = Math.random().toString(36).slice(2),
  Kn = "__reactFiber$" + ms,
  ho = "__reactProps$" + ms,
  la = "__reactContainer$" + ms,
  df = "__reactEvents$" + ms,
  jE = "__reactListeners$" + ms,
  UE = "__reactHandles$" + ms;
function ni(e) {
  var t = e[Kn];
  if (t) return t;
  for (var r = e.parentNode; r; ) {
    if ((t = r[la] || r[Kn])) {
      if (
        ((r = t.alternate),
        t.child !== null || (r !== null && r.child !== null))
      )
        for (e = hh(e); e !== null; ) {
          if ((r = e[Kn])) return r;
          e = hh(e);
        }
      return t;
    }
    (e = r), (r = e.parentNode);
  }
  return null;
}
function Ro(e) {
  return (
    (e = e[Kn] || e[la]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Ui(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(Ee(33));
}
function Ac(e) {
  return e[ho] || null;
}
var hf = [],
  $i = -1;
function Ga(e) {
  return { current: e };
}
function Nt(e) {
  0 > $i || ((e.current = hf[$i]), (hf[$i] = null), $i--);
}
function Ct(e, t) {
  $i++, (hf[$i] = e.current), (e.current = t);
}
var $a = {},
  Dr = Ga($a),
  Vr = Ga(!1),
  fi = $a;
function is(e, t) {
  var r = e.type.contextTypes;
  if (!r) return $a;
  var n = e.stateNode;
  if (n && n.__reactInternalMemoizedUnmaskedChildContext === t)
    return n.__reactInternalMemoizedMaskedChildContext;
  var a = {},
    i;
  for (i in r) a[i] = t[i];
  return (
    n &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = a)),
    a
  );
}
function zr(e) {
  return (e = e.childContextTypes), e != null;
}
function Hl() {
  Nt(Vr), Nt(Dr);
}
function ph(e, t, r) {
  if (Dr.current !== $a) throw Error(Ee(168));
  Ct(Dr, t), Ct(Vr, r);
}
function um(e, t, r) {
  var n = e.stateNode;
  if (((t = t.childContextTypes), typeof n.getChildContext != "function"))
    return r;
  n = n.getChildContext();
  for (var a in n) if (!(a in t)) throw Error(Ee(108, T_(e) || "Unknown", a));
  return bt({}, r, n);
}
function Wl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || $a),
    (fi = Dr.current),
    Ct(Dr, e),
    Ct(Vr, Vr.current),
    !0
  );
}
function mh(e, t, r) {
  var n = e.stateNode;
  if (!n) throw Error(Ee(169));
  r
    ? ((e = um(e, t, fi)),
      (n.__reactInternalMemoizedMergedChildContext = e),
      Nt(Vr),
      Nt(Dr),
      Ct(Dr, e))
    : Nt(Vr),
    Ct(Vr, r);
}
var ea = null,
  Cc = !1,
  _u = !1;
function fm(e) {
  ea === null ? (ea = [e]) : ea.push(e);
}
function $E(e) {
  (Cc = !0), fm(e);
}
function Ya() {
  if (!_u && ea !== null) {
    _u = !0;
    var e = 0,
      t = gt;
    try {
      var r = ea;
      for (gt = 1; e < r.length; e++) {
        var n = r[e];
        do n = n(!0);
        while (n !== null);
      }
      (ea = null), (Cc = !1);
    } catch (a) {
      throw (ea !== null && (ea = ea.slice(e + 1)), M1(e0, Ya), a);
    } finally {
      (gt = t), (_u = !1);
    }
  }
  return null;
}
var Hi = [],
  Wi = 0,
  Vl = null,
  zl = 0,
  _n = [],
  En = 0,
  di = null,
  ta = 1,
  ra = "";
function Ja(e, t) {
  (Hi[Wi++] = zl), (Hi[Wi++] = Vl), (Vl = e), (zl = t);
}
function dm(e, t, r) {
  (_n[En++] = ta), (_n[En++] = ra), (_n[En++] = di), (di = e);
  var n = ta;
  e = ra;
  var a = 32 - Mn(n) - 1;
  (n &= ~(1 << a)), (r += 1);
  var i = 32 - Mn(t) + a;
  if (30 < i) {
    var s = a - (a % 5);
    (i = (n & ((1 << s) - 1)).toString(32)),
      (n >>= s),
      (a -= s),
      (ta = (1 << (32 - Mn(t) + a)) | (r << a) | n),
      (ra = i + e);
  } else (ta = (1 << i) | (r << a) | n), (ra = e);
}
function c0(e) {
  e.return !== null && (Ja(e, 1), dm(e, 1, 0));
}
function u0(e) {
  for (; e === Vl; )
    (Vl = Hi[--Wi]), (Hi[Wi] = null), (zl = Hi[--Wi]), (Hi[Wi] = null);
  for (; e === di; )
    (di = _n[--En]),
      (_n[En] = null),
      (ra = _n[--En]),
      (_n[En] = null),
      (ta = _n[--En]),
      (_n[En] = null);
}
var cn = null,
  ln = null,
  Ot = !1,
  On = null;
function hm(e, t) {
  var r = yn(5, null, null, 0);
  (r.elementType = "DELETED"),
    (r.stateNode = t),
    (r.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r);
}
function vh(e, t) {
  switch (e.tag) {
    case 5:
      var r = e.type;
      return (
        (t =
          t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (cn = e), (ln = Pa(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (cn = e), (ln = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((r = di !== null ? { id: ta, overflow: ra } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: r,
              retryLane: 1073741824,
            }),
            (r = yn(18, null, null, 0)),
            (r.stateNode = t),
            (r.return = e),
            (e.child = r),
            (cn = e),
            (ln = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function pf(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function mf(e) {
  if (Ot) {
    var t = ln;
    if (t) {
      var r = t;
      if (!vh(e, t)) {
        if (pf(e)) throw Error(Ee(418));
        t = Pa(r.nextSibling);
        var n = cn;
        t && vh(e, t)
          ? hm(n, r)
          : ((e.flags = (e.flags & -4097) | 2), (Ot = !1), (cn = e));
      }
    } else {
      if (pf(e)) throw Error(Ee(418));
      (e.flags = (e.flags & -4097) | 2), (Ot = !1), (cn = e);
    }
  }
}
function gh(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  cn = e;
}
function al(e) {
  if (e !== cn) return !1;
  if (!Ot) return gh(e), (Ot = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !uf(e.type, e.memoizedProps))),
    t && (t = ln))
  ) {
    if (pf(e)) throw (pm(), Error(Ee(418)));
    for (; t; ) hm(e, t), (t = Pa(t.nextSibling));
  }
  if ((gh(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(Ee(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var r = e.data;
          if (r === "/$") {
            if (t === 0) {
              ln = Pa(e.nextSibling);
              break e;
            }
            t--;
          } else (r !== "$" && r !== "$!" && r !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      ln = null;
    }
  } else ln = cn ? Pa(e.stateNode.nextSibling) : null;
  return !0;
}
function pm() {
  for (var e = ln; e; ) e = Pa(e.nextSibling);
}
function ss() {
  (ln = cn = null), (Ot = !1);
}
function f0(e) {
  On === null ? (On = [e]) : On.push(e);
}
var HE = ha.ReactCurrentBatchConfig;
function Ls(e, t, r) {
  if (
    ((e = r.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (r._owner) {
      if (((r = r._owner), r)) {
        if (r.tag !== 1) throw Error(Ee(309));
        var n = r.stateNode;
      }
      if (!n) throw Error(Ee(147, e));
      var a = n,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (s) {
            var o = a.refs;
            s === null ? delete o[i] : (o[i] = s);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(Ee(284));
    if (!r._owner) throw Error(Ee(290, e));
  }
  return e;
}
function il(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      Ee(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    ))
  );
}
function xh(e) {
  var t = e._init;
  return t(e._payload);
}
function mm(e) {
  function t(_, v) {
    if (e) {
      var g = _.deletions;
      g === null ? ((_.deletions = [v]), (_.flags |= 16)) : g.push(v);
    }
  }
  function r(_, v) {
    if (!e) return null;
    for (; v !== null; ) t(_, v), (v = v.sibling);
    return null;
  }
  function n(_, v) {
    for (_ = new Map(); v !== null; )
      v.key !== null ? _.set(v.key, v) : _.set(v.index, v), (v = v.sibling);
    return _;
  }
  function a(_, v) {
    return (_ = ja(_, v)), (_.index = 0), (_.sibling = null), _;
  }
  function i(_, v, g) {
    return (
      (_.index = g),
      e
        ? ((g = _.alternate),
          g !== null
            ? ((g = g.index), g < v ? ((_.flags |= 2), v) : g)
            : ((_.flags |= 2), v))
        : ((_.flags |= 1048576), v)
    );
  }
  function s(_) {
    return e && _.alternate === null && (_.flags |= 2), _;
  }
  function o(_, v, g, S) {
    return v === null || v.tag !== 6
      ? ((v = Cu(g, _.mode, S)), (v.return = _), v)
      : ((v = a(v, g)), (v.return = _), v);
  }
  function l(_, v, g, S) {
    var b = g.type;
    return b === Mi
      ? u(_, v, g.props.children, S, g.key)
      : v !== null &&
          (v.elementType === b ||
            (typeof b == "object" &&
              b !== null &&
              b.$$typeof === Sa &&
              xh(b) === v.type))
        ? ((S = a(v, g.props)), (S.ref = Ls(_, v, g)), (S.return = _), S)
        : ((S = kl(g.type, g.key, g.props, null, _.mode, S)),
          (S.ref = Ls(_, v, g)),
          (S.return = _),
          S);
  }
  function c(_, v, g, S) {
    return v === null ||
      v.tag !== 4 ||
      v.stateNode.containerInfo !== g.containerInfo ||
      v.stateNode.implementation !== g.implementation
      ? ((v = Du(g, _.mode, S)), (v.return = _), v)
      : ((v = a(v, g.children || [])), (v.return = _), v);
  }
  function u(_, v, g, S, b) {
    return v === null || v.tag !== 7
      ? ((v = li(g, _.mode, S, b)), (v.return = _), v)
      : ((v = a(v, g)), (v.return = _), v);
  }
  function f(_, v, g) {
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return (v = Cu("" + v, _.mode, g)), (v.return = _), v;
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Ko:
          return (
            (g = kl(v.type, v.key, v.props, null, _.mode, g)),
            (g.ref = Ls(_, null, v)),
            (g.return = _),
            g
          );
        case Pi:
          return (v = Du(v, _.mode, g)), (v.return = _), v;
        case Sa:
          var S = v._init;
          return f(_, S(v._payload), g);
      }
      if (Ms(v) || Ss(v))
        return (v = li(v, _.mode, g, null)), (v.return = _), v;
      il(_, v);
    }
    return null;
  }
  function d(_, v, g, S) {
    var b = v !== null ? v.key : null;
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return b !== null ? null : o(_, v, "" + g, S);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Ko:
          return g.key === b ? l(_, v, g, S) : null;
        case Pi:
          return g.key === b ? c(_, v, g, S) : null;
        case Sa:
          return (b = g._init), d(_, v, b(g._payload), S);
      }
      if (Ms(g) || Ss(g)) return b !== null ? null : u(_, v, g, S, null);
      il(_, g);
    }
    return null;
  }
  function h(_, v, g, S, b) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return (_ = _.get(g) || null), o(v, _, "" + S, b);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case Ko:
          return (_ = _.get(S.key === null ? g : S.key) || null), l(v, _, S, b);
        case Pi:
          return (_ = _.get(S.key === null ? g : S.key) || null), c(v, _, S, b);
        case Sa:
          var C = S._init;
          return h(_, v, g, C(S._payload), b);
      }
      if (Ms(S) || Ss(S)) return (_ = _.get(g) || null), u(v, _, S, b, null);
      il(v, S);
    }
    return null;
  }
  function m(_, v, g, S) {
    for (
      var b = null, C = null, D = v, A = (v = 0), F = null;
      D !== null && A < g.length;
      A++
    ) {
      D.index > A ? ((F = D), (D = null)) : (F = D.sibling);
      var I = d(_, D, g[A], S);
      if (I === null) {
        D === null && (D = F);
        break;
      }
      e && D && I.alternate === null && t(_, D),
        (v = i(I, v, A)),
        C === null ? (b = I) : (C.sibling = I),
        (C = I),
        (D = F);
    }
    if (A === g.length) return r(_, D), Ot && Ja(_, A), b;
    if (D === null) {
      for (; A < g.length; A++)
        (D = f(_, g[A], S)),
          D !== null &&
            ((v = i(D, v, A)), C === null ? (b = D) : (C.sibling = D), (C = D));
      return Ot && Ja(_, A), b;
    }
    for (D = n(_, D); A < g.length; A++)
      (F = h(D, _, A, g[A], S)),
        F !== null &&
          (e && F.alternate !== null && D.delete(F.key === null ? A : F.key),
          (v = i(F, v, A)),
          C === null ? (b = F) : (C.sibling = F),
          (C = F));
    return (
      e &&
        D.forEach(function (P) {
          return t(_, P);
        }),
      Ot && Ja(_, A),
      b
    );
  }
  function p(_, v, g, S) {
    var b = Ss(g);
    if (typeof b != "function") throw Error(Ee(150));
    if (((g = b.call(g)), g == null)) throw Error(Ee(151));
    for (
      var C = (b = null), D = v, A = (v = 0), F = null, I = g.next();
      D !== null && !I.done;
      A++, I = g.next()
    ) {
      D.index > A ? ((F = D), (D = null)) : (F = D.sibling);
      var P = d(_, D, I.value, S);
      if (P === null) {
        D === null && (D = F);
        break;
      }
      e && D && P.alternate === null && t(_, D),
        (v = i(P, v, A)),
        C === null ? (b = P) : (C.sibling = P),
        (C = P),
        (D = F);
    }
    if (I.done) return r(_, D), Ot && Ja(_, A), b;
    if (D === null) {
      for (; !I.done; A++, I = g.next())
        (I = f(_, I.value, S)),
          I !== null &&
            ((v = i(I, v, A)), C === null ? (b = I) : (C.sibling = I), (C = I));
      return Ot && Ja(_, A), b;
    }
    for (D = n(_, D); !I.done; A++, I = g.next())
      (I = h(D, _, A, I.value, S)),
        I !== null &&
          (e && I.alternate !== null && D.delete(I.key === null ? A : I.key),
          (v = i(I, v, A)),
          C === null ? (b = I) : (C.sibling = I),
          (C = I));
    return (
      e &&
        D.forEach(function (B) {
          return t(_, B);
        }),
      Ot && Ja(_, A),
      b
    );
  }
  function x(_, v, g, S) {
    if (
      (typeof g == "object" &&
        g !== null &&
        g.type === Mi &&
        g.key === null &&
        (g = g.props.children),
      typeof g == "object" && g !== null)
    ) {
      switch (g.$$typeof) {
        case Ko:
          e: {
            for (var b = g.key, C = v; C !== null; ) {
              if (C.key === b) {
                if (((b = g.type), b === Mi)) {
                  if (C.tag === 7) {
                    r(_, C.sibling),
                      (v = a(C, g.props.children)),
                      (v.return = _),
                      (_ = v);
                    break e;
                  }
                } else if (
                  C.elementType === b ||
                  (typeof b == "object" &&
                    b !== null &&
                    b.$$typeof === Sa &&
                    xh(b) === C.type)
                ) {
                  r(_, C.sibling),
                    (v = a(C, g.props)),
                    (v.ref = Ls(_, C, g)),
                    (v.return = _),
                    (_ = v);
                  break e;
                }
                r(_, C);
                break;
              } else t(_, C);
              C = C.sibling;
            }
            g.type === Mi
              ? ((v = li(g.props.children, _.mode, S, g.key)),
                (v.return = _),
                (_ = v))
              : ((S = kl(g.type, g.key, g.props, null, _.mode, S)),
                (S.ref = Ls(_, v, g)),
                (S.return = _),
                (_ = S));
          }
          return s(_);
        case Pi:
          e: {
            for (C = g.key; v !== null; ) {
              if (v.key === C)
                if (
                  v.tag === 4 &&
                  v.stateNode.containerInfo === g.containerInfo &&
                  v.stateNode.implementation === g.implementation
                ) {
                  r(_, v.sibling),
                    (v = a(v, g.children || [])),
                    (v.return = _),
                    (_ = v);
                  break e;
                } else {
                  r(_, v);
                  break;
                }
              else t(_, v);
              v = v.sibling;
            }
            (v = Du(g, _.mode, S)), (v.return = _), (_ = v);
          }
          return s(_);
        case Sa:
          return (C = g._init), x(_, v, C(g._payload), S);
      }
      if (Ms(g)) return m(_, v, g, S);
      if (Ss(g)) return p(_, v, g, S);
      il(_, g);
    }
    return (typeof g == "string" && g !== "") || typeof g == "number"
      ? ((g = "" + g),
        v !== null && v.tag === 6
          ? (r(_, v.sibling), (v = a(v, g)), (v.return = _), (_ = v))
          : (r(_, v), (v = Cu(g, _.mode, S)), (v.return = _), (_ = v)),
        s(_))
      : r(_, v);
  }
  return x;
}
var os = mm(!0),
  vm = mm(!1),
  Gl = Ga(null),
  Yl = null,
  Vi = null,
  d0 = null;
function h0() {
  d0 = Vi = Yl = null;
}
function p0(e) {
  var t = Gl.current;
  Nt(Gl), (e._currentValue = t);
}
function vf(e, t, r) {
  for (; e !== null; ) {
    var n = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), n !== null && (n.childLanes |= t))
        : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t),
      e === r)
    )
      break;
    e = e.return;
  }
}
function Zi(e, t) {
  (Yl = e),
    (d0 = Vi = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Wr = !0), (e.firstContext = null));
}
function Sn(e) {
  var t = e._currentValue;
  if (d0 !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Vi === null)) {
      if (Yl === null) throw Error(Ee(308));
      (Vi = e), (Yl.dependencies = { lanes: 0, firstContext: e });
    } else Vi = Vi.next = e;
  return t;
}
var ai = null;
function m0(e) {
  ai === null ? (ai = [e]) : ai.push(e);
}
function gm(e, t, r, n) {
  var a = t.interleaved;
  return (
    a === null ? ((r.next = r), m0(t)) : ((r.next = a.next), (a.next = r)),
    (t.interleaved = r),
    ca(e, n)
  );
}
function ca(e, t) {
  e.lanes |= t;
  var r = e.alternate;
  for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (r = e.alternate),
      r !== null && (r.childLanes |= t),
      (r = e),
      (e = e.return);
  return r.tag === 3 ? r.stateNode : null;
}
var Ta = !1;
function v0(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function xm(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function na(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Ma(e, t, r) {
  var n = e.updateQueue;
  if (n === null) return null;
  if (((n = n.shared), ct & 2)) {
    var a = n.pending;
    return (
      a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
      (n.pending = t),
      ca(e, r)
    );
  }
  return (
    (a = n.interleaved),
    a === null ? ((t.next = t), m0(n)) : ((t.next = a.next), (a.next = t)),
    (n.interleaved = t),
    ca(e, r)
  );
}
function Al(e, t, r) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194240) !== 0))
  ) {
    var n = t.lanes;
    (n &= e.pendingLanes), (r |= n), (t.lanes = r), t0(e, r);
  }
}
function _h(e, t) {
  var r = e.updateQueue,
    n = e.alternate;
  if (n !== null && ((n = n.updateQueue), r === n)) {
    var a = null,
      i = null;
    if (((r = r.firstBaseUpdate), r !== null)) {
      do {
        var s = {
          eventTime: r.eventTime,
          lane: r.lane,
          tag: r.tag,
          payload: r.payload,
          callback: r.callback,
          next: null,
        };
        i === null ? (a = i = s) : (i = i.next = s), (r = r.next);
      } while (r !== null);
      i === null ? (a = i = t) : (i = i.next = t);
    } else a = i = t;
    (r = {
      baseState: n.baseState,
      firstBaseUpdate: a,
      lastBaseUpdate: i,
      shared: n.shared,
      effects: n.effects,
    }),
      (e.updateQueue = r);
    return;
  }
  (e = r.lastBaseUpdate),
    e === null ? (r.firstBaseUpdate = t) : (e.next = t),
    (r.lastBaseUpdate = t);
}
function Kl(e, t, r, n) {
  var a = e.updateQueue;
  Ta = !1;
  var i = a.firstBaseUpdate,
    s = a.lastBaseUpdate,
    o = a.shared.pending;
  if (o !== null) {
    a.shared.pending = null;
    var l = o,
      c = l.next;
    (l.next = null), s === null ? (i = c) : (s.next = c), (s = l);
    var u = e.alternate;
    u !== null &&
      ((u = u.updateQueue),
      (o = u.lastBaseUpdate),
      o !== s &&
        (o === null ? (u.firstBaseUpdate = c) : (o.next = c),
        (u.lastBaseUpdate = l)));
  }
  if (i !== null) {
    var f = a.baseState;
    (s = 0), (u = c = l = null), (o = i);
    do {
      var d = o.lane,
        h = o.eventTime;
      if ((n & d) === d) {
        u !== null &&
          (u = u.next =
            {
              eventTime: h,
              lane: 0,
              tag: o.tag,
              payload: o.payload,
              callback: o.callback,
              next: null,
            });
        e: {
          var m = e,
            p = o;
          switch (((d = t), (h = r), p.tag)) {
            case 1:
              if (((m = p.payload), typeof m == "function")) {
                f = m.call(h, f, d);
                break e;
              }
              f = m;
              break e;
            case 3:
              m.flags = (m.flags & -65537) | 128;
            case 0:
              if (
                ((m = p.payload),
                (d = typeof m == "function" ? m.call(h, f, d) : m),
                d == null)
              )
                break e;
              f = bt({}, f, d);
              break e;
            case 2:
              Ta = !0;
          }
        }
        o.callback !== null &&
          o.lane !== 0 &&
          ((e.flags |= 64),
          (d = a.effects),
          d === null ? (a.effects = [o]) : d.push(o));
      } else
        (h = {
          eventTime: h,
          lane: d,
          tag: o.tag,
          payload: o.payload,
          callback: o.callback,
          next: null,
        }),
          u === null ? ((c = u = h), (l = f)) : (u = u.next = h),
          (s |= d);
      if (((o = o.next), o === null)) {
        if (((o = a.shared.pending), o === null)) break;
        (d = o),
          (o = d.next),
          (d.next = null),
          (a.lastBaseUpdate = d),
          (a.shared.pending = null);
      }
    } while (!0);
    if (
      (u === null && (l = f),
      (a.baseState = l),
      (a.firstBaseUpdate = c),
      (a.lastBaseUpdate = u),
      (t = a.shared.interleaved),
      t !== null)
    ) {
      a = t;
      do (s |= a.lane), (a = a.next);
      while (a !== t);
    } else i === null && (a.shared.lanes = 0);
    (pi |= s), (e.lanes = s), (e.memoizedState = f);
  }
}
function Eh(e, t, r) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var n = e[t],
        a = n.callback;
      if (a !== null) {
        if (((n.callback = null), (n = r), typeof a != "function"))
          throw Error(Ee(191, a));
        a.call(n);
      }
    }
}
var Oo = {},
  Qn = Ga(Oo),
  po = Ga(Oo),
  mo = Ga(Oo);
function ii(e) {
  if (e === Oo) throw Error(Ee(174));
  return e;
}
function g0(e, t) {
  switch ((Ct(mo, t), Ct(po, e), Ct(Qn, Oo), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Xu(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Xu(t, e));
  }
  Nt(Qn), Ct(Qn, t);
}
function ls() {
  Nt(Qn), Nt(po), Nt(mo);
}
function _m(e) {
  ii(mo.current);
  var t = ii(Qn.current),
    r = Xu(t, e.type);
  t !== r && (Ct(po, e), Ct(Qn, r));
}
function x0(e) {
  po.current === e && (Nt(Qn), Nt(po));
}
var Pt = Ga(0);
function Xl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var r = t.memoizedState;
      if (
        r !== null &&
        ((r = r.dehydrated), r === null || r.data === "$?" || r.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Eu = [];
function _0() {
  for (var e = 0; e < Eu.length; e++)
    Eu[e]._workInProgressVersionPrimary = null;
  Eu.length = 0;
}
var Cl = ha.ReactCurrentDispatcher,
  yu = ha.ReactCurrentBatchConfig,
  hi = 0,
  Mt = null,
  nr = null,
  ir = null,
  Ql = !1,
  Gs = !1,
  vo = 0,
  WE = 0;
function wr() {
  throw Error(Ee(321));
}
function E0(e, t) {
  if (t === null) return !1;
  for (var r = 0; r < t.length && r < e.length; r++)
    if (!jn(e[r], t[r])) return !1;
  return !0;
}
function y0(e, t, r, n, a, i) {
  if (
    ((hi = i),
    (Mt = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Cl.current = e === null || e.memoizedState === null ? YE : KE),
    (e = r(n, a)),
    Gs)
  ) {
    i = 0;
    do {
      if (((Gs = !1), (vo = 0), 25 <= i)) throw Error(Ee(301));
      (i += 1),
        (ir = nr = null),
        (t.updateQueue = null),
        (Cl.current = XE),
        (e = r(n, a));
    } while (Gs);
  }
  if (
    ((Cl.current = Jl),
    (t = nr !== null && nr.next !== null),
    (hi = 0),
    (ir = nr = Mt = null),
    (Ql = !1),
    t)
  )
    throw Error(Ee(300));
  return e;
}
function w0() {
  var e = vo !== 0;
  return (vo = 0), e;
}
function Yn() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ir === null ? (Mt.memoizedState = ir = e) : (ir = ir.next = e), ir;
}
function Tn() {
  if (nr === null) {
    var e = Mt.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = nr.next;
  var t = ir === null ? Mt.memoizedState : ir.next;
  if (t !== null) (ir = t), (nr = e);
  else {
    if (e === null) throw Error(Ee(310));
    (nr = e),
      (e = {
        memoizedState: nr.memoizedState,
        baseState: nr.baseState,
        baseQueue: nr.baseQueue,
        queue: nr.queue,
        next: null,
      }),
      ir === null ? (Mt.memoizedState = ir = e) : (ir = ir.next = e);
  }
  return ir;
}
function go(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function wu(e) {
  var t = Tn(),
    r = t.queue;
  if (r === null) throw Error(Ee(311));
  r.lastRenderedReducer = e;
  var n = nr,
    a = n.baseQueue,
    i = r.pending;
  if (i !== null) {
    if (a !== null) {
      var s = a.next;
      (a.next = i.next), (i.next = s);
    }
    (n.baseQueue = a = i), (r.pending = null);
  }
  if (a !== null) {
    (i = a.next), (n = n.baseState);
    var o = (s = null),
      l = null,
      c = i;
    do {
      var u = c.lane;
      if ((hi & u) === u)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (n = c.hasEagerState ? c.eagerState : e(n, c.action));
      else {
        var f = {
          lane: u,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        l === null ? ((o = l = f), (s = n)) : (l = l.next = f),
          (Mt.lanes |= u),
          (pi |= u);
      }
      c = c.next;
    } while (c !== null && c !== i);
    l === null ? (s = n) : (l.next = o),
      jn(n, t.memoizedState) || (Wr = !0),
      (t.memoizedState = n),
      (t.baseState = s),
      (t.baseQueue = l),
      (r.lastRenderedState = n);
  }
  if (((e = r.interleaved), e !== null)) {
    a = e;
    do (i = a.lane), (Mt.lanes |= i), (pi |= i), (a = a.next);
    while (a !== e);
  } else a === null && (r.lanes = 0);
  return [t.memoizedState, r.dispatch];
}
function Su(e) {
  var t = Tn(),
    r = t.queue;
  if (r === null) throw Error(Ee(311));
  r.lastRenderedReducer = e;
  var n = r.dispatch,
    a = r.pending,
    i = t.memoizedState;
  if (a !== null) {
    r.pending = null;
    var s = (a = a.next);
    do (i = e(i, s.action)), (s = s.next);
    while (s !== a);
    jn(i, t.memoizedState) || (Wr = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (r.lastRenderedState = i);
  }
  return [i, n];
}
function Em() {}
function ym(e, t) {
  var r = Mt,
    n = Tn(),
    a = t(),
    i = !jn(n.memoizedState, a);
  if (
    (i && ((n.memoizedState = a), (Wr = !0)),
    (n = n.queue),
    S0(Tm.bind(null, r, n, e), [e]),
    n.getSnapshot !== t || i || (ir !== null && ir.memoizedState.tag & 1))
  ) {
    if (
      ((r.flags |= 2048),
      xo(9, Sm.bind(null, r, n, a, t), void 0, null),
      cr === null)
    )
      throw Error(Ee(349));
    hi & 30 || wm(r, t, a);
  }
  return a;
}
function wm(e, t, r) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: r }),
    (t = Mt.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Mt.updateQueue = t),
        (t.stores = [e]))
      : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e));
}
function Sm(e, t, r, n) {
  (t.value = r), (t.getSnapshot = n), Am(t) && Cm(e);
}
function Tm(e, t, r) {
  return r(function () {
    Am(t) && Cm(e);
  });
}
function Am(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var r = t();
    return !jn(e, r);
  } catch {
    return !0;
  }
}
function Cm(e) {
  var t = ca(e, 1);
  t !== null && bn(t, e, 1, -1);
}
function yh(e) {
  var t = Yn();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: go,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = GE.bind(null, Mt, e)),
    [t.memoizedState, e]
  );
}
function xo(e, t, r, n) {
  return (
    (e = { tag: e, create: t, destroy: r, deps: n, next: null }),
    (t = Mt.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Mt.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((r = t.lastEffect),
        r === null
          ? (t.lastEffect = e.next = e)
          : ((n = r.next), (r.next = e), (e.next = n), (t.lastEffect = e))),
    e
  );
}
function Dm() {
  return Tn().memoizedState;
}
function Dl(e, t, r, n) {
  var a = Yn();
  (Mt.flags |= e),
    (a.memoizedState = xo(1 | t, r, void 0, n === void 0 ? null : n));
}
function Dc(e, t, r, n) {
  var a = Tn();
  n = n === void 0 ? null : n;
  var i = void 0;
  if (nr !== null) {
    var s = nr.memoizedState;
    if (((i = s.destroy), n !== null && E0(n, s.deps))) {
      a.memoizedState = xo(t, r, i, n);
      return;
    }
  }
  (Mt.flags |= e), (a.memoizedState = xo(1 | t, r, i, n));
}
function wh(e, t) {
  return Dl(8390656, 8, e, t);
}
function S0(e, t) {
  return Dc(2048, 8, e, t);
}
function Lm(e, t) {
  return Dc(4, 2, e, t);
}
function Nm(e, t) {
  return Dc(4, 4, e, t);
}
function Fm(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function km(e, t, r) {
  return (
    (r = r != null ? r.concat([e]) : null), Dc(4, 4, Fm.bind(null, t, e), r)
  );
}
function T0() {}
function Rm(e, t) {
  var r = Tn();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && E0(t, n[1])
    ? n[0]
    : ((r.memoizedState = [e, t]), e);
}
function Om(e, t) {
  var r = Tn();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && E0(t, n[1])
    ? n[0]
    : ((e = e()), (r.memoizedState = [e, t]), e);
}
function Im(e, t, r) {
  return hi & 21
    ? (jn(r, t) || ((r = j1()), (Mt.lanes |= r), (pi |= r), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Wr = !0)), (e.memoizedState = r));
}
function VE(e, t) {
  var r = gt;
  (gt = r !== 0 && 4 > r ? r : 4), e(!0);
  var n = yu.transition;
  yu.transition = {};
  try {
    e(!1), t();
  } finally {
    (gt = r), (yu.transition = n);
  }
}
function Pm() {
  return Tn().memoizedState;
}
function zE(e, t, r) {
  var n = Ba(e);
  if (
    ((r = {
      lane: n,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Mm(e))
  )
    bm(t, r);
  else if (((r = gm(e, t, r, n)), r !== null)) {
    var a = Ir();
    bn(r, e, n, a), Bm(r, t, n);
  }
}
function GE(e, t, r) {
  var n = Ba(e),
    a = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null };
  if (Mm(e)) bm(t, a);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var s = t.lastRenderedState,
          o = i(s, r);
        if (((a.hasEagerState = !0), (a.eagerState = o), jn(o, s))) {
          var l = t.interleaved;
          l === null
            ? ((a.next = a), m0(t))
            : ((a.next = l.next), (l.next = a)),
            (t.interleaved = a);
          return;
        }
      } catch {
      } finally {
      }
    (r = gm(e, t, a, n)),
      r !== null && ((a = Ir()), bn(r, e, n, a), Bm(r, t, n));
  }
}
function Mm(e) {
  var t = e.alternate;
  return e === Mt || (t !== null && t === Mt);
}
function bm(e, t) {
  Gs = Ql = !0;
  var r = e.pending;
  r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)),
    (e.pending = t);
}
function Bm(e, t, r) {
  if (r & 4194240) {
    var n = t.lanes;
    (n &= e.pendingLanes), (r |= n), (t.lanes = r), t0(e, r);
  }
}
var Jl = {
    readContext: Sn,
    useCallback: wr,
    useContext: wr,
    useEffect: wr,
    useImperativeHandle: wr,
    useInsertionEffect: wr,
    useLayoutEffect: wr,
    useMemo: wr,
    useReducer: wr,
    useRef: wr,
    useState: wr,
    useDebugValue: wr,
    useDeferredValue: wr,
    useTransition: wr,
    useMutableSource: wr,
    useSyncExternalStore: wr,
    useId: wr,
    unstable_isNewReconciler: !1,
  },
  YE = {
    readContext: Sn,
    useCallback: function (e, t) {
      return (Yn().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Sn,
    useEffect: wh,
    useImperativeHandle: function (e, t, r) {
      return (
        (r = r != null ? r.concat([e]) : null),
        Dl(4194308, 4, Fm.bind(null, t, e), r)
      );
    },
    useLayoutEffect: function (e, t) {
      return Dl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Dl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var r = Yn();
      return (
        (t = t === void 0 ? null : t), (e = e()), (r.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, r) {
      var n = Yn();
      return (
        (t = r !== void 0 ? r(t) : t),
        (n.memoizedState = n.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (n.queue = e),
        (e = e.dispatch = zE.bind(null, Mt, e)),
        [n.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Yn();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: yh,
    useDebugValue: T0,
    useDeferredValue: function (e) {
      return (Yn().memoizedState = e);
    },
    useTransition: function () {
      var e = yh(!1),
        t = e[0];
      return (e = VE.bind(null, e[1])), (Yn().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, r) {
      var n = Mt,
        a = Yn();
      if (Ot) {
        if (r === void 0) throw Error(Ee(407));
        r = r();
      } else {
        if (((r = t()), cr === null)) throw Error(Ee(349));
        hi & 30 || wm(n, t, r);
      }
      a.memoizedState = r;
      var i = { value: r, getSnapshot: t };
      return (
        (a.queue = i),
        wh(Tm.bind(null, n, i, e), [e]),
        (n.flags |= 2048),
        xo(9, Sm.bind(null, n, i, r, t), void 0, null),
        r
      );
    },
    useId: function () {
      var e = Yn(),
        t = cr.identifierPrefix;
      if (Ot) {
        var r = ra,
          n = ta;
        (r = (n & ~(1 << (32 - Mn(n) - 1))).toString(32) + r),
          (t = ":" + t + "R" + r),
          (r = vo++),
          0 < r && (t += "H" + r.toString(32)),
          (t += ":");
      } else (r = WE++), (t = ":" + t + "r" + r.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  KE = {
    readContext: Sn,
    useCallback: Rm,
    useContext: Sn,
    useEffect: S0,
    useImperativeHandle: km,
    useInsertionEffect: Lm,
    useLayoutEffect: Nm,
    useMemo: Om,
    useReducer: wu,
    useRef: Dm,
    useState: function () {
      return wu(go);
    },
    useDebugValue: T0,
    useDeferredValue: function (e) {
      var t = Tn();
      return Im(t, nr.memoizedState, e);
    },
    useTransition: function () {
      var e = wu(go)[0],
        t = Tn().memoizedState;
      return [e, t];
    },
    useMutableSource: Em,
    useSyncExternalStore: ym,
    useId: Pm,
    unstable_isNewReconciler: !1,
  },
  XE = {
    readContext: Sn,
    useCallback: Rm,
    useContext: Sn,
    useEffect: S0,
    useImperativeHandle: km,
    useInsertionEffect: Lm,
    useLayoutEffect: Nm,
    useMemo: Om,
    useReducer: Su,
    useRef: Dm,
    useState: function () {
      return Su(go);
    },
    useDebugValue: T0,
    useDeferredValue: function (e) {
      var t = Tn();
      return nr === null ? (t.memoizedState = e) : Im(t, nr.memoizedState, e);
    },
    useTransition: function () {
      var e = Su(go)[0],
        t = Tn().memoizedState;
      return [e, t];
    },
    useMutableSource: Em,
    useSyncExternalStore: ym,
    useId: Pm,
    unstable_isNewReconciler: !1,
  };
function Fn(e, t) {
  if (e && e.defaultProps) {
    (t = bt({}, t)), (e = e.defaultProps);
    for (var r in e) t[r] === void 0 && (t[r] = e[r]);
    return t;
  }
  return t;
}
function gf(e, t, r, n) {
  (t = e.memoizedState),
    (r = r(n, t)),
    (r = r == null ? t : bt({}, t, r)),
    (e.memoizedState = r),
    e.lanes === 0 && (e.updateQueue.baseState = r);
}
var Lc = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Ei(e) === e : !1;
  },
  enqueueSetState: function (e, t, r) {
    e = e._reactInternals;
    var n = Ir(),
      a = Ba(e),
      i = na(n, a);
    (i.payload = t),
      r != null && (i.callback = r),
      (t = Ma(e, i, a)),
      t !== null && (bn(t, e, a, n), Al(t, e, a));
  },
  enqueueReplaceState: function (e, t, r) {
    e = e._reactInternals;
    var n = Ir(),
      a = Ba(e),
      i = na(n, a);
    (i.tag = 1),
      (i.payload = t),
      r != null && (i.callback = r),
      (t = Ma(e, i, a)),
      t !== null && (bn(t, e, a, n), Al(t, e, a));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var r = Ir(),
      n = Ba(e),
      a = na(r, n);
    (a.tag = 2),
      t != null && (a.callback = t),
      (t = Ma(e, a, n)),
      t !== null && (bn(t, e, n, r), Al(t, e, n));
  },
};
function Sh(e, t, r, n, a, i, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(n, i, s)
      : t.prototype && t.prototype.isPureReactComponent
        ? !co(r, n) || !co(a, i)
        : !0
  );
}
function jm(e, t, r) {
  var n = !1,
    a = $a,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Sn(i))
      : ((a = zr(t) ? fi : Dr.current),
        (n = t.contextTypes),
        (i = (n = n != null) ? is(e, a) : $a)),
    (t = new t(r, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Lc),
    (e.stateNode = t),
    (t._reactInternals = e),
    n &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = a),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Th(e, t, r, n) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(r, n),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(r, n),
    t.state !== e && Lc.enqueueReplaceState(t, t.state, null);
}
function xf(e, t, r, n) {
  var a = e.stateNode;
  (a.props = r), (a.state = e.memoizedState), (a.refs = {}), v0(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (a.context = Sn(i))
    : ((i = zr(t) ? fi : Dr.current), (a.context = is(e, i))),
    (a.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (gf(e, t, i, r), (a.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof a.getSnapshotBeforeUpdate == "function" ||
      (typeof a.UNSAFE_componentWillMount != "function" &&
        typeof a.componentWillMount != "function") ||
      ((t = a.state),
      typeof a.componentWillMount == "function" && a.componentWillMount(),
      typeof a.UNSAFE_componentWillMount == "function" &&
        a.UNSAFE_componentWillMount(),
      t !== a.state && Lc.enqueueReplaceState(a, a.state, null),
      Kl(e, r, a, n),
      (a.state = e.memoizedState)),
    typeof a.componentDidMount == "function" && (e.flags |= 4194308);
}
function cs(e, t) {
  try {
    var r = "",
      n = t;
    do (r += S_(n)), (n = n.return);
    while (n);
    var a = r;
  } catch (i) {
    a =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: a, digest: null };
}
function Tu(e, t, r) {
  return { value: e, source: null, stack: r ?? null, digest: t ?? null };
}
function _f(e, t) {
  try {
    console.error(t.value);
  } catch (r) {
    setTimeout(function () {
      throw r;
    });
  }
}
var QE = typeof WeakMap == "function" ? WeakMap : Map;
function Um(e, t, r) {
  (r = na(-1, r)), (r.tag = 3), (r.payload = { element: null });
  var n = t.value;
  return (
    (r.callback = function () {
      ql || ((ql = !0), (Nf = n)), _f(e, t);
    }),
    r
  );
}
function $m(e, t, r) {
  (r = na(-1, r)), (r.tag = 3);
  var n = e.type.getDerivedStateFromError;
  if (typeof n == "function") {
    var a = t.value;
    (r.payload = function () {
      return n(a);
    }),
      (r.callback = function () {
        _f(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (r.callback = function () {
        _f(e, t),
          typeof n != "function" &&
            (ba === null ? (ba = new Set([this])) : ba.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    r
  );
}
function Ah(e, t, r) {
  var n = e.pingCache;
  if (n === null) {
    n = e.pingCache = new QE();
    var a = new Set();
    n.set(t, a);
  } else (a = n.get(t)), a === void 0 && ((a = new Set()), n.set(t, a));
  a.has(r) || (a.add(r), (e = u2.bind(null, e, t, r)), t.then(e, e));
}
function Ch(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Dh(e, t, r, n, a) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = a), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (r.flags |= 131072),
          (r.flags &= -52805),
          r.tag === 1 &&
            (r.alternate === null
              ? (r.tag = 17)
              : ((t = na(-1, 1)), (t.tag = 2), Ma(r, t, 1))),
          (r.lanes |= 1)),
      e);
}
var JE = ha.ReactCurrentOwner,
  Wr = !1;
function kr(e, t, r, n) {
  t.child = e === null ? vm(t, null, r, n) : os(t, e.child, r, n);
}
function Lh(e, t, r, n, a) {
  r = r.render;
  var i = t.ref;
  return (
    Zi(t, a),
    (n = y0(e, t, r, n, i, a)),
    (r = w0()),
    e !== null && !Wr
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~a),
        ua(e, t, a))
      : (Ot && r && c0(t), (t.flags |= 1), kr(e, t, n, a), t.child)
  );
}
function Nh(e, t, r, n, a) {
  if (e === null) {
    var i = r.type;
    return typeof i == "function" &&
      !R0(i) &&
      i.defaultProps === void 0 &&
      r.compare === null &&
      r.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Hm(e, t, i, n, a))
      : ((e = kl(r.type, null, n, t, t.mode, a)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & a))) {
    var s = i.memoizedProps;
    if (
      ((r = r.compare), (r = r !== null ? r : co), r(s, n) && e.ref === t.ref)
    )
      return ua(e, t, a);
  }
  return (
    (t.flags |= 1),
    (e = ja(i, n)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Hm(e, t, r, n, a) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (co(i, n) && e.ref === t.ref)
      if (((Wr = !1), (t.pendingProps = n = i), (e.lanes & a) !== 0))
        e.flags & 131072 && (Wr = !0);
      else return (t.lanes = e.lanes), ua(e, t, a);
  }
  return Ef(e, t, r, n, a);
}
function Wm(e, t, r) {
  var n = t.pendingProps,
    a = n.children,
    i = e !== null ? e.memoizedState : null;
  if (n.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Ct(Gi, rn),
        (rn |= r);
    else {
      if (!(r & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | r : r),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          Ct(Gi, rn),
          (rn |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (n = i !== null ? i.baseLanes : r),
        Ct(Gi, rn),
        (rn |= n);
    }
  else
    i !== null ? ((n = i.baseLanes | r), (t.memoizedState = null)) : (n = r),
      Ct(Gi, rn),
      (rn |= n);
  return kr(e, t, a, r), t.child;
}
function Vm(e, t) {
  var r = t.ref;
  ((e === null && r !== null) || (e !== null && e.ref !== r)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Ef(e, t, r, n, a) {
  var i = zr(r) ? fi : Dr.current;
  return (
    (i = is(t, i)),
    Zi(t, a),
    (r = y0(e, t, r, n, i, a)),
    (n = w0()),
    e !== null && !Wr
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~a),
        ua(e, t, a))
      : (Ot && n && c0(t), (t.flags |= 1), kr(e, t, r, a), t.child)
  );
}
function Fh(e, t, r, n, a) {
  if (zr(r)) {
    var i = !0;
    Wl(t);
  } else i = !1;
  if ((Zi(t, a), t.stateNode === null))
    Ll(e, t), jm(t, r, n), xf(t, r, n, a), (n = !0);
  else if (e === null) {
    var s = t.stateNode,
      o = t.memoizedProps;
    s.props = o;
    var l = s.context,
      c = r.contextType;
    typeof c == "object" && c !== null
      ? (c = Sn(c))
      : ((c = zr(r) ? fi : Dr.current), (c = is(t, c)));
    var u = r.getDerivedStateFromProps,
      f =
        typeof u == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((o !== n || l !== c) && Th(t, s, n, c)),
      (Ta = !1);
    var d = t.memoizedState;
    (s.state = d),
      Kl(t, n, s, a),
      (l = t.memoizedState),
      o !== n || d !== l || Vr.current || Ta
        ? (typeof u == "function" && (gf(t, r, u, n), (l = t.memoizedState)),
          (o = Ta || Sh(t, r, o, n, d, l, c))
            ? (f ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = n),
              (t.memoizedState = l)),
          (s.props = n),
          (s.state = l),
          (s.context = c),
          (n = o))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (n = !1));
  } else {
    (s = t.stateNode),
      xm(e, t),
      (o = t.memoizedProps),
      (c = t.type === t.elementType ? o : Fn(t.type, o)),
      (s.props = c),
      (f = t.pendingProps),
      (d = s.context),
      (l = r.contextType),
      typeof l == "object" && l !== null
        ? (l = Sn(l))
        : ((l = zr(r) ? fi : Dr.current), (l = is(t, l)));
    var h = r.getDerivedStateFromProps;
    (u =
      typeof h == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((o !== f || d !== l) && Th(t, s, n, l)),
      (Ta = !1),
      (d = t.memoizedState),
      (s.state = d),
      Kl(t, n, s, a);
    var m = t.memoizedState;
    o !== f || d !== m || Vr.current || Ta
      ? (typeof h == "function" && (gf(t, r, h, n), (m = t.memoizedState)),
        (c = Ta || Sh(t, r, c, n, d, m, l) || !1)
          ? (u ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(n, m, l),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(n, m, l)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (o === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (o === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = n),
            (t.memoizedState = m)),
        (s.props = n),
        (s.state = m),
        (s.context = l),
        (n = c))
      : (typeof s.componentDidUpdate != "function" ||
          (o === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (o === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (n = !1));
  }
  return yf(e, t, r, n, i, a);
}
function yf(e, t, r, n, a, i) {
  Vm(e, t);
  var s = (t.flags & 128) !== 0;
  if (!n && !s) return a && mh(t, r, !1), ua(e, t, i);
  (n = t.stateNode), (JE.current = t);
  var o =
    s && typeof r.getDerivedStateFromError != "function" ? null : n.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = os(t, e.child, null, i)), (t.child = os(t, null, o, i)))
      : kr(e, t, o, i),
    (t.memoizedState = n.state),
    a && mh(t, r, !0),
    t.child
  );
}
function zm(e) {
  var t = e.stateNode;
  t.pendingContext
    ? ph(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && ph(e, t.context, !1),
    g0(e, t.containerInfo);
}
function kh(e, t, r, n, a) {
  return ss(), f0(a), (t.flags |= 256), kr(e, t, r, n), t.child;
}
var wf = { dehydrated: null, treeContext: null, retryLane: 0 };
function Sf(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Gm(e, t, r) {
  var n = t.pendingProps,
    a = Pt.current,
    i = !1,
    s = (t.flags & 128) !== 0,
    o;
  if (
    ((o = s) ||
      (o = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0),
    o
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (a |= 1),
    Ct(Pt, a & 1),
    e === null)
  )
    return (
      mf(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = n.children),
          (e = n.fallback),
          i
            ? ((n = t.mode),
              (i = t.child),
              (s = { mode: "hidden", children: s }),
              !(n & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = s))
                : (i = kc(s, n, 0, null)),
              (e = li(e, n, r, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Sf(r)),
              (t.memoizedState = wf),
              e)
            : A0(t, s))
    );
  if (((a = e.memoizedState), a !== null && ((o = a.dehydrated), o !== null)))
    return ZE(e, t, s, n, o, a, r);
  if (i) {
    (i = n.fallback), (s = t.mode), (a = e.child), (o = a.sibling);
    var l = { mode: "hidden", children: n.children };
    return (
      !(s & 1) && t.child !== a
        ? ((n = t.child),
          (n.childLanes = 0),
          (n.pendingProps = l),
          (t.deletions = null))
        : ((n = ja(a, l)), (n.subtreeFlags = a.subtreeFlags & 14680064)),
      o !== null ? (i = ja(o, i)) : ((i = li(i, s, r, null)), (i.flags |= 2)),
      (i.return = t),
      (n.return = t),
      (n.sibling = i),
      (t.child = n),
      (n = i),
      (i = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? Sf(r)
          : {
              baseLanes: s.baseLanes | r,
              cachePool: null,
              transitions: s.transitions,
            }),
      (i.memoizedState = s),
      (i.childLanes = e.childLanes & ~r),
      (t.memoizedState = wf),
      n
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (n = ja(i, { mode: "visible", children: n.children })),
    !(t.mode & 1) && (n.lanes = r),
    (n.return = t),
    (n.sibling = null),
    e !== null &&
      ((r = t.deletions),
      r === null ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)),
    (t.child = n),
    (t.memoizedState = null),
    n
  );
}
function A0(e, t) {
  return (
    (t = kc({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function sl(e, t, r, n) {
  return (
    n !== null && f0(n),
    os(t, e.child, null, r),
    (e = A0(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function ZE(e, t, r, n, a, i, s) {
  if (r)
    return t.flags & 256
      ? ((t.flags &= -257), (n = Tu(Error(Ee(422)))), sl(e, t, s, n))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = n.fallback),
          (a = t.mode),
          (n = kc({ mode: "visible", children: n.children }, a, 0, null)),
          (i = li(i, a, s, null)),
          (i.flags |= 2),
          (n.return = t),
          (i.return = t),
          (n.sibling = i),
          (t.child = n),
          t.mode & 1 && os(t, e.child, null, s),
          (t.child.memoizedState = Sf(s)),
          (t.memoizedState = wf),
          i);
  if (!(t.mode & 1)) return sl(e, t, s, null);
  if (a.data === "$!") {
    if (((n = a.nextSibling && a.nextSibling.dataset), n)) var o = n.dgst;
    return (
      (n = o), (i = Error(Ee(419))), (n = Tu(i, n, void 0)), sl(e, t, s, n)
    );
  }
  if (((o = (s & e.childLanes) !== 0), Wr || o)) {
    if (((n = cr), n !== null)) {
      switch (s & -s) {
        case 4:
          a = 2;
          break;
        case 16:
          a = 8;
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
          a = 32;
          break;
        case 536870912:
          a = 268435456;
          break;
        default:
          a = 0;
      }
      (a = a & (n.suspendedLanes | s) ? 0 : a),
        a !== 0 &&
          a !== i.retryLane &&
          ((i.retryLane = a), ca(e, a), bn(n, e, a, -1));
    }
    return k0(), (n = Tu(Error(Ee(421)))), sl(e, t, s, n);
  }
  return a.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = f2.bind(null, e)),
      (a._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (ln = Pa(a.nextSibling)),
      (cn = t),
      (Ot = !0),
      (On = null),
      e !== null &&
        ((_n[En++] = ta),
        (_n[En++] = ra),
        (_n[En++] = di),
        (ta = e.id),
        (ra = e.overflow),
        (di = t)),
      (t = A0(t, n.children)),
      (t.flags |= 4096),
      t);
}
function Rh(e, t, r) {
  e.lanes |= t;
  var n = e.alternate;
  n !== null && (n.lanes |= t), vf(e.return, t, r);
}
function Au(e, t, r, n, a) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: n,
        tail: r,
        tailMode: a,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = n),
      (i.tail = r),
      (i.tailMode = a));
}
function Ym(e, t, r) {
  var n = t.pendingProps,
    a = n.revealOrder,
    i = n.tail;
  if ((kr(e, t, n.children, r), (n = Pt.current), n & 2))
    (n = (n & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Rh(e, r, t);
        else if (e.tag === 19) Rh(e, r, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    n &= 1;
  }
  if ((Ct(Pt, n), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (a) {
      case "forwards":
        for (r = t.child, a = null; r !== null; )
          (e = r.alternate),
            e !== null && Xl(e) === null && (a = r),
            (r = r.sibling);
        (r = a),
          r === null
            ? ((a = t.child), (t.child = null))
            : ((a = r.sibling), (r.sibling = null)),
          Au(t, !1, a, r, i);
        break;
      case "backwards":
        for (r = null, a = t.child, t.child = null; a !== null; ) {
          if (((e = a.alternate), e !== null && Xl(e) === null)) {
            t.child = a;
            break;
          }
          (e = a.sibling), (a.sibling = r), (r = a), (a = e);
        }
        Au(t, !0, r, null, i);
        break;
      case "together":
        Au(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ll(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function ua(e, t, r) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (pi |= t.lanes),
    !(r & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(Ee(153));
  if (t.child !== null) {
    for (
      e = t.child, r = ja(e, e.pendingProps), t.child = r, r.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (r = r.sibling = ja(e, e.pendingProps)), (r.return = t);
    r.sibling = null;
  }
  return t.child;
}
function qE(e, t, r) {
  switch (t.tag) {
    case 3:
      zm(t), ss();
      break;
    case 5:
      _m(t);
      break;
    case 1:
      zr(t.type) && Wl(t);
      break;
    case 4:
      g0(t, t.stateNode.containerInfo);
      break;
    case 10:
      var n = t.type._context,
        a = t.memoizedProps.value;
      Ct(Gl, n._currentValue), (n._currentValue = a);
      break;
    case 13:
      if (((n = t.memoizedState), n !== null))
        return n.dehydrated !== null
          ? (Ct(Pt, Pt.current & 1), (t.flags |= 128), null)
          : r & t.child.childLanes
            ? Gm(e, t, r)
            : (Ct(Pt, Pt.current & 1),
              (e = ua(e, t, r)),
              e !== null ? e.sibling : null);
      Ct(Pt, Pt.current & 1);
      break;
    case 19:
      if (((n = (r & t.childLanes) !== 0), e.flags & 128)) {
        if (n) return Ym(e, t, r);
        t.flags |= 128;
      }
      if (
        ((a = t.memoizedState),
        a !== null &&
          ((a.rendering = null), (a.tail = null), (a.lastEffect = null)),
        Ct(Pt, Pt.current),
        n)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Wm(e, t, r);
  }
  return ua(e, t, r);
}
var Km, Tf, Xm, Qm;
Km = function (e, t) {
  for (var r = t.child; r !== null; ) {
    if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
    else if (r.tag !== 4 && r.child !== null) {
      (r.child.return = r), (r = r.child);
      continue;
    }
    if (r === t) break;
    for (; r.sibling === null; ) {
      if (r.return === null || r.return === t) return;
      r = r.return;
    }
    (r.sibling.return = r.return), (r = r.sibling);
  }
};
Tf = function () {};
Xm = function (e, t, r, n) {
  var a = e.memoizedProps;
  if (a !== n) {
    (e = t.stateNode), ii(Qn.current);
    var i = null;
    switch (r) {
      case "input":
        (a = zu(e, a)), (n = zu(e, n)), (i = []);
        break;
      case "select":
        (a = bt({}, a, { value: void 0 })),
          (n = bt({}, n, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (a = Ku(e, a)), (n = Ku(e, n)), (i = []);
        break;
      default:
        typeof a.onClick != "function" &&
          typeof n.onClick == "function" &&
          (e.onclick = $l);
    }
    Qu(r, n);
    var s;
    r = null;
    for (c in a)
      if (!n.hasOwnProperty(c) && a.hasOwnProperty(c) && a[c] != null)
        if (c === "style") {
          var o = a[c];
          for (s in o) o.hasOwnProperty(s) && (r || (r = {}), (r[s] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (ro.hasOwnProperty(c)
              ? i || (i = [])
              : (i = i || []).push(c, null));
    for (c in n) {
      var l = n[c];
      if (
        ((o = a != null ? a[c] : void 0),
        n.hasOwnProperty(c) && l !== o && (l != null || o != null))
      )
        if (c === "style")
          if (o) {
            for (s in o)
              !o.hasOwnProperty(s) ||
                (l && l.hasOwnProperty(s)) ||
                (r || (r = {}), (r[s] = ""));
            for (s in l)
              l.hasOwnProperty(s) &&
                o[s] !== l[s] &&
                (r || (r = {}), (r[s] = l[s]));
          } else r || (i || (i = []), i.push(c, r)), (r = l);
        else
          c === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (o = o ? o.__html : void 0),
              l != null && o !== l && (i = i || []).push(c, l))
            : c === "children"
              ? (typeof l != "string" && typeof l != "number") ||
                (i = i || []).push(c, "" + l)
              : c !== "suppressContentEditableWarning" &&
                c !== "suppressHydrationWarning" &&
                (ro.hasOwnProperty(c)
                  ? (l != null && c === "onScroll" && Lt("scroll", e),
                    i || o === l || (i = []))
                  : (i = i || []).push(c, l));
    }
    r && (i = i || []).push("style", r);
    var c = i;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Qm = function (e, t, r, n) {
  r !== n && (t.flags |= 4);
};
function Ns(e, t) {
  if (!Ot)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var r = null; t !== null; )
          t.alternate !== null && (r = t), (t = t.sibling);
        r === null ? (e.tail = null) : (r.sibling = null);
        break;
      case "collapsed":
        r = e.tail;
        for (var n = null; r !== null; )
          r.alternate !== null && (n = r), (r = r.sibling);
        n === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (n.sibling = null);
    }
}
function Sr(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    r = 0,
    n = 0;
  if (t)
    for (var a = e.child; a !== null; )
      (r |= a.lanes | a.childLanes),
        (n |= a.subtreeFlags & 14680064),
        (n |= a.flags & 14680064),
        (a.return = e),
        (a = a.sibling);
  else
    for (a = e.child; a !== null; )
      (r |= a.lanes | a.childLanes),
        (n |= a.subtreeFlags),
        (n |= a.flags),
        (a.return = e),
        (a = a.sibling);
  return (e.subtreeFlags |= n), (e.childLanes = r), t;
}
function e2(e, t, r) {
  var n = t.pendingProps;
  switch ((u0(t), t.tag)) {
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
      return Sr(t), null;
    case 1:
      return zr(t.type) && Hl(), Sr(t), null;
    case 3:
      return (
        (n = t.stateNode),
        ls(),
        Nt(Vr),
        Nt(Dr),
        _0(),
        n.pendingContext &&
          ((n.context = n.pendingContext), (n.pendingContext = null)),
        (e === null || e.child === null) &&
          (al(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), On !== null && (Rf(On), (On = null)))),
        Tf(e, t),
        Sr(t),
        null
      );
    case 5:
      x0(t);
      var a = ii(mo.current);
      if (((r = t.type), e !== null && t.stateNode != null))
        Xm(e, t, r, n, a),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!n) {
          if (t.stateNode === null) throw Error(Ee(166));
          return Sr(t), null;
        }
        if (((e = ii(Qn.current)), al(t))) {
          (n = t.stateNode), (r = t.type);
          var i = t.memoizedProps;
          switch (((n[Kn] = t), (n[ho] = i), (e = (t.mode & 1) !== 0), r)) {
            case "dialog":
              Lt("cancel", n), Lt("close", n);
              break;
            case "iframe":
            case "object":
            case "embed":
              Lt("load", n);
              break;
            case "video":
            case "audio":
              for (a = 0; a < Bs.length; a++) Lt(Bs[a], n);
              break;
            case "source":
              Lt("error", n);
              break;
            case "img":
            case "image":
            case "link":
              Lt("error", n), Lt("load", n);
              break;
            case "details":
              Lt("toggle", n);
              break;
            case "input":
              $d(n, i), Lt("invalid", n);
              break;
            case "select":
              (n._wrapperState = { wasMultiple: !!i.multiple }),
                Lt("invalid", n);
              break;
            case "textarea":
              Wd(n, i), Lt("invalid", n);
          }
          Qu(r, i), (a = null);
          for (var s in i)
            if (i.hasOwnProperty(s)) {
              var o = i[s];
              s === "children"
                ? typeof o == "string"
                  ? n.textContent !== o &&
                    (i.suppressHydrationWarning !== !0 &&
                      nl(n.textContent, o, e),
                    (a = ["children", o]))
                  : typeof o == "number" &&
                    n.textContent !== "" + o &&
                    (i.suppressHydrationWarning !== !0 &&
                      nl(n.textContent, o, e),
                    (a = ["children", "" + o]))
                : ro.hasOwnProperty(s) &&
                  o != null &&
                  s === "onScroll" &&
                  Lt("scroll", n);
            }
          switch (r) {
            case "input":
              Xo(n), Hd(n, i, !0);
              break;
            case "textarea":
              Xo(n), Vd(n);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (n.onclick = $l);
          }
          (n = a), (t.updateQueue = n), n !== null && (t.flags |= 4);
        } else {
          (s = a.nodeType === 9 ? a : a.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = T1(r)),
            e === "http://www.w3.org/1999/xhtml"
              ? r === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script><\/script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof n.is == "string"
                  ? (e = s.createElement(r, { is: n.is }))
                  : ((e = s.createElement(r)),
                    r === "select" &&
                      ((s = e),
                      n.multiple
                        ? (s.multiple = !0)
                        : n.size && (s.size = n.size)))
              : (e = s.createElementNS(e, r)),
            (e[Kn] = t),
            (e[ho] = n),
            Km(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = Ju(r, n)), r)) {
              case "dialog":
                Lt("cancel", e), Lt("close", e), (a = n);
                break;
              case "iframe":
              case "object":
              case "embed":
                Lt("load", e), (a = n);
                break;
              case "video":
              case "audio":
                for (a = 0; a < Bs.length; a++) Lt(Bs[a], e);
                a = n;
                break;
              case "source":
                Lt("error", e), (a = n);
                break;
              case "img":
              case "image":
              case "link":
                Lt("error", e), Lt("load", e), (a = n);
                break;
              case "details":
                Lt("toggle", e), (a = n);
                break;
              case "input":
                $d(e, n), (a = zu(e, n)), Lt("invalid", e);
                break;
              case "option":
                a = n;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!n.multiple }),
                  (a = bt({}, n, { value: void 0 })),
                  Lt("invalid", e);
                break;
              case "textarea":
                Wd(e, n), (a = Ku(e, n)), Lt("invalid", e);
                break;
              default:
                a = n;
            }
            Qu(r, a), (o = a);
            for (i in o)
              if (o.hasOwnProperty(i)) {
                var l = o[i];
                i === "style"
                  ? D1(e, l)
                  : i === "dangerouslySetInnerHTML"
                    ? ((l = l ? l.__html : void 0), l != null && A1(e, l))
                    : i === "children"
                      ? typeof l == "string"
                        ? (r !== "textarea" || l !== "") && no(e, l)
                        : typeof l == "number" && no(e, "" + l)
                      : i !== "suppressContentEditableWarning" &&
                        i !== "suppressHydrationWarning" &&
                        i !== "autoFocus" &&
                        (ro.hasOwnProperty(i)
                          ? l != null && i === "onScroll" && Lt("scroll", e)
                          : l != null && Xf(e, i, l, s));
              }
            switch (r) {
              case "input":
                Xo(e), Hd(e, n, !1);
                break;
              case "textarea":
                Xo(e), Vd(e);
                break;
              case "option":
                n.value != null && e.setAttribute("value", "" + Ua(n.value));
                break;
              case "select":
                (e.multiple = !!n.multiple),
                  (i = n.value),
                  i != null
                    ? Ki(e, !!n.multiple, i, !1)
                    : n.defaultValue != null &&
                      Ki(e, !!n.multiple, n.defaultValue, !0);
                break;
              default:
                typeof a.onClick == "function" && (e.onclick = $l);
            }
            switch (r) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n = !!n.autoFocus;
                break e;
              case "img":
                n = !0;
                break e;
              default:
                n = !1;
            }
          }
          n && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Sr(t), null;
    case 6:
      if (e && t.stateNode != null) Qm(e, t, e.memoizedProps, n);
      else {
        if (typeof n != "string" && t.stateNode === null) throw Error(Ee(166));
        if (((r = ii(mo.current)), ii(Qn.current), al(t))) {
          if (
            ((n = t.stateNode),
            (r = t.memoizedProps),
            (n[Kn] = t),
            (i = n.nodeValue !== r) && ((e = cn), e !== null))
          )
            switch (e.tag) {
              case 3:
                nl(n.nodeValue, r, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  nl(n.nodeValue, r, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n)),
            (n[Kn] = t),
            (t.stateNode = n);
      }
      return Sr(t), null;
    case 13:
      if (
        (Nt(Pt),
        (n = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Ot && ln !== null && t.mode & 1 && !(t.flags & 128))
          pm(), ss(), (t.flags |= 98560), (i = !1);
        else if (((i = al(t)), n !== null && n.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(Ee(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(Ee(317));
            i[Kn] = t;
          } else
            ss(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Sr(t), (i = !1);
        } else On !== null && (Rf(On), (On = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = r), t)
        : ((n = n !== null),
          n !== (e !== null && e.memoizedState !== null) &&
            n &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Pt.current & 1 ? ar === 0 && (ar = 3) : k0())),
          t.updateQueue !== null && (t.flags |= 4),
          Sr(t),
          null);
    case 4:
      return (
        ls(), Tf(e, t), e === null && uo(t.stateNode.containerInfo), Sr(t), null
      );
    case 10:
      return p0(t.type._context), Sr(t), null;
    case 17:
      return zr(t.type) && Hl(), Sr(t), null;
    case 19:
      if ((Nt(Pt), (i = t.memoizedState), i === null)) return Sr(t), null;
      if (((n = (t.flags & 128) !== 0), (s = i.rendering), s === null))
        if (n) Ns(i, !1);
        else {
          if (ar !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = Xl(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    Ns(i, !1),
                    n = s.updateQueue,
                    n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    n = r,
                    r = t.child;
                  r !== null;

                )
                  (i = r),
                    (e = n),
                    (i.flags &= 14680066),
                    (s = i.alternate),
                    s === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = s.childLanes),
                        (i.lanes = s.lanes),
                        (i.child = s.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = s.memoizedProps),
                        (i.memoizedState = s.memoizedState),
                        (i.updateQueue = s.updateQueue),
                        (i.type = s.type),
                        (e = s.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (r = r.sibling);
                return Ct(Pt, (Pt.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            Ht() > us &&
            ((t.flags |= 128), (n = !0), Ns(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!n)
          if (((e = Xl(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (n = !0),
              (r = e.updateQueue),
              r !== null && ((t.updateQueue = r), (t.flags |= 4)),
              Ns(i, !0),
              i.tail === null && i.tailMode === "hidden" && !s.alternate && !Ot)
            )
              return Sr(t), null;
          } else
            2 * Ht() - i.renderingStartTime > us &&
              r !== 1073741824 &&
              ((t.flags |= 128), (n = !0), Ns(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((r = i.last),
            r !== null ? (r.sibling = s) : (t.child = s),
            (i.last = s));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = Ht()),
          (t.sibling = null),
          (r = Pt.current),
          Ct(Pt, n ? (r & 1) | 2 : r & 1),
          t)
        : (Sr(t), null);
    case 22:
    case 23:
      return (
        F0(),
        (n = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== n && (t.flags |= 8192),
        n && t.mode & 1
          ? rn & 1073741824 && (Sr(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Sr(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(Ee(156, t.tag));
}
function t2(e, t) {
  switch ((u0(t), t.tag)) {
    case 1:
      return (
        zr(t.type) && Hl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        ls(),
        Nt(Vr),
        Nt(Dr),
        _0(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return x0(t), null;
    case 13:
      if (
        (Nt(Pt), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(Ee(340));
        ss();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return Nt(Pt), null;
    case 4:
      return ls(), null;
    case 10:
      return p0(t.type._context), null;
    case 22:
    case 23:
      return F0(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ol = !1,
  Tr = !1,
  r2 = typeof WeakSet == "function" ? WeakSet : Set,
  $e = null;
function zi(e, t) {
  var r = e.ref;
  if (r !== null)
    if (typeof r == "function")
      try {
        r(null);
      } catch (n) {
        Bt(e, t, n);
      }
    else r.current = null;
}
function Af(e, t, r) {
  try {
    r();
  } catch (n) {
    Bt(e, t, n);
  }
}
var Oh = !1;
function n2(e, t) {
  if (((lf = Bl), (e = tm()), l0(e))) {
    if ("selectionStart" in e)
      var r = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        r = ((r = e.ownerDocument) && r.defaultView) || window;
        var n = r.getSelection && r.getSelection();
        if (n && n.rangeCount !== 0) {
          r = n.anchorNode;
          var a = n.anchorOffset,
            i = n.focusNode;
          n = n.focusOffset;
          try {
            r.nodeType, i.nodeType;
          } catch {
            r = null;
            break e;
          }
          var s = 0,
            o = -1,
            l = -1,
            c = 0,
            u = 0,
            f = e,
            d = null;
          t: for (;;) {
            for (
              var h;
              f !== r || (a !== 0 && f.nodeType !== 3) || (o = s + a),
                f !== i || (n !== 0 && f.nodeType !== 3) || (l = s + n),
                f.nodeType === 3 && (s += f.nodeValue.length),
                (h = f.firstChild) !== null;

            )
              (d = f), (f = h);
            for (;;) {
              if (f === e) break t;
              if (
                (d === r && ++c === a && (o = s),
                d === i && ++u === n && (l = s),
                (h = f.nextSibling) !== null)
              )
                break;
              (f = d), (d = f.parentNode);
            }
            f = h;
          }
          r = o === -1 || l === -1 ? null : { start: o, end: l };
        } else r = null;
      }
    r = r || { start: 0, end: 0 };
  } else r = null;
  for (
    cf = { focusedElem: e, selectionRange: r }, Bl = !1, $e = t;
    $e !== null;

  )
    if (((t = $e), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), ($e = e);
    else
      for (; $e !== null; ) {
        t = $e;
        try {
          var m = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (m !== null) {
                  var p = m.memoizedProps,
                    x = m.memoizedState,
                    _ = t.stateNode,
                    v = _.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? p : Fn(t.type, p),
                      x,
                    );
                  _.__reactInternalSnapshotBeforeUpdate = v;
                }
                break;
              case 3:
                var g = t.stateNode.containerInfo;
                g.nodeType === 1
                  ? (g.textContent = "")
                  : g.nodeType === 9 &&
                    g.documentElement &&
                    g.removeChild(g.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(Ee(163));
            }
        } catch (S) {
          Bt(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), ($e = e);
          break;
        }
        $e = t.return;
      }
  return (m = Oh), (Oh = !1), m;
}
function Ys(e, t, r) {
  var n = t.updateQueue;
  if (((n = n !== null ? n.lastEffect : null), n !== null)) {
    var a = (n = n.next);
    do {
      if ((a.tag & e) === e) {
        var i = a.destroy;
        (a.destroy = void 0), i !== void 0 && Af(t, r, i);
      }
      a = a.next;
    } while (a !== n);
  }
}
function Nc(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var r = (t = t.next);
    do {
      if ((r.tag & e) === e) {
        var n = r.create;
        r.destroy = n();
      }
      r = r.next;
    } while (r !== t);
  }
}
function Cf(e) {
  var t = e.ref;
  if (t !== null) {
    var r = e.stateNode;
    switch (e.tag) {
      case 5:
        e = r;
        break;
      default:
        e = r;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Jm(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Jm(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Kn], delete t[ho], delete t[df], delete t[jE], delete t[UE])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Zm(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ih(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Zm(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Df(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6)
    (e = e.stateNode),
      t
        ? r.nodeType === 8
          ? r.parentNode.insertBefore(e, t)
          : r.insertBefore(e, t)
        : (r.nodeType === 8
            ? ((t = r.parentNode), t.insertBefore(e, r))
            : ((t = r), t.appendChild(e)),
          (r = r._reactRootContainer),
          r != null || t.onclick !== null || (t.onclick = $l));
  else if (n !== 4 && ((e = e.child), e !== null))
    for (Df(e, t, r), e = e.sibling; e !== null; ) Df(e, t, r), (e = e.sibling);
}
function Lf(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6)
    (e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e);
  else if (n !== 4 && ((e = e.child), e !== null))
    for (Lf(e, t, r), e = e.sibling; e !== null; ) Lf(e, t, r), (e = e.sibling);
}
var pr = null,
  kn = !1;
function Ea(e, t, r) {
  for (r = r.child; r !== null; ) qm(e, t, r), (r = r.sibling);
}
function qm(e, t, r) {
  if (Xn && typeof Xn.onCommitFiberUnmount == "function")
    try {
      Xn.onCommitFiberUnmount(yc, r);
    } catch {}
  switch (r.tag) {
    case 5:
      Tr || zi(r, t);
    case 6:
      var n = pr,
        a = kn;
      (pr = null),
        Ea(e, t, r),
        (pr = n),
        (kn = a),
        pr !== null &&
          (kn
            ? ((e = pr),
              (r = r.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r))
            : pr.removeChild(r.stateNode));
      break;
    case 18:
      pr !== null &&
        (kn
          ? ((e = pr),
            (r = r.stateNode),
            e.nodeType === 8
              ? xu(e.parentNode, r)
              : e.nodeType === 1 && xu(e, r),
            oo(e))
          : xu(pr, r.stateNode));
      break;
    case 4:
      (n = pr),
        (a = kn),
        (pr = r.stateNode.containerInfo),
        (kn = !0),
        Ea(e, t, r),
        (pr = n),
        (kn = a);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Tr &&
        ((n = r.updateQueue), n !== null && ((n = n.lastEffect), n !== null))
      ) {
        a = n = n.next;
        do {
          var i = a,
            s = i.destroy;
          (i = i.tag),
            s !== void 0 && (i & 2 || i & 4) && Af(r, t, s),
            (a = a.next);
        } while (a !== n);
      }
      Ea(e, t, r);
      break;
    case 1:
      if (
        !Tr &&
        (zi(r, t),
        (n = r.stateNode),
        typeof n.componentWillUnmount == "function")
      )
        try {
          (n.props = r.memoizedProps),
            (n.state = r.memoizedState),
            n.componentWillUnmount();
        } catch (o) {
          Bt(r, t, o);
        }
      Ea(e, t, r);
      break;
    case 21:
      Ea(e, t, r);
      break;
    case 22:
      r.mode & 1
        ? ((Tr = (n = Tr) || r.memoizedState !== null), Ea(e, t, r), (Tr = n))
        : Ea(e, t, r);
      break;
    default:
      Ea(e, t, r);
  }
}
function Ph(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var r = e.stateNode;
    r === null && (r = e.stateNode = new r2()),
      t.forEach(function (n) {
        var a = d2.bind(null, e, n);
        r.has(n) || (r.add(n), n.then(a, a));
      });
  }
}
function Dn(e, t) {
  var r = t.deletions;
  if (r !== null)
    for (var n = 0; n < r.length; n++) {
      var a = r[n];
      try {
        var i = e,
          s = t,
          o = s;
        e: for (; o !== null; ) {
          switch (o.tag) {
            case 5:
              (pr = o.stateNode), (kn = !1);
              break e;
            case 3:
              (pr = o.stateNode.containerInfo), (kn = !0);
              break e;
            case 4:
              (pr = o.stateNode.containerInfo), (kn = !0);
              break e;
          }
          o = o.return;
        }
        if (pr === null) throw Error(Ee(160));
        qm(i, s, a), (pr = null), (kn = !1);
        var l = a.alternate;
        l !== null && (l.return = null), (a.return = null);
      } catch (c) {
        Bt(a, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) ev(t, e), (t = t.sibling);
}
function ev(e, t) {
  var r = e.alternate,
    n = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Dn(t, e), Vn(e), n & 4)) {
        try {
          Ys(3, e, e.return), Nc(3, e);
        } catch (p) {
          Bt(e, e.return, p);
        }
        try {
          Ys(5, e, e.return);
        } catch (p) {
          Bt(e, e.return, p);
        }
      }
      break;
    case 1:
      Dn(t, e), Vn(e), n & 512 && r !== null && zi(r, r.return);
      break;
    case 5:
      if (
        (Dn(t, e),
        Vn(e),
        n & 512 && r !== null && zi(r, r.return),
        e.flags & 32)
      ) {
        var a = e.stateNode;
        try {
          no(a, "");
        } catch (p) {
          Bt(e, e.return, p);
        }
      }
      if (n & 4 && ((a = e.stateNode), a != null)) {
        var i = e.memoizedProps,
          s = r !== null ? r.memoizedProps : i,
          o = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            o === "input" && i.type === "radio" && i.name != null && w1(a, i),
              Ju(o, s);
            var c = Ju(o, i);
            for (s = 0; s < l.length; s += 2) {
              var u = l[s],
                f = l[s + 1];
              u === "style"
                ? D1(a, f)
                : u === "dangerouslySetInnerHTML"
                  ? A1(a, f)
                  : u === "children"
                    ? no(a, f)
                    : Xf(a, u, f, c);
            }
            switch (o) {
              case "input":
                Gu(a, i);
                break;
              case "textarea":
                S1(a, i);
                break;
              case "select":
                var d = a._wrapperState.wasMultiple;
                a._wrapperState.wasMultiple = !!i.multiple;
                var h = i.value;
                h != null
                  ? Ki(a, !!i.multiple, h, !1)
                  : d !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Ki(a, !!i.multiple, i.defaultValue, !0)
                      : Ki(a, !!i.multiple, i.multiple ? [] : "", !1));
            }
            a[ho] = i;
          } catch (p) {
            Bt(e, e.return, p);
          }
      }
      break;
    case 6:
      if ((Dn(t, e), Vn(e), n & 4)) {
        if (e.stateNode === null) throw Error(Ee(162));
        (a = e.stateNode), (i = e.memoizedProps);
        try {
          a.nodeValue = i;
        } catch (p) {
          Bt(e, e.return, p);
        }
      }
      break;
    case 3:
      if (
        (Dn(t, e), Vn(e), n & 4 && r !== null && r.memoizedState.isDehydrated)
      )
        try {
          oo(t.containerInfo);
        } catch (p) {
          Bt(e, e.return, p);
        }
      break;
    case 4:
      Dn(t, e), Vn(e);
      break;
    case 13:
      Dn(t, e),
        Vn(e),
        (a = e.child),
        a.flags & 8192 &&
          ((i = a.memoizedState !== null),
          (a.stateNode.isHidden = i),
          !i ||
            (a.alternate !== null && a.alternate.memoizedState !== null) ||
            (L0 = Ht())),
        n & 4 && Ph(e);
      break;
    case 22:
      if (
        ((u = r !== null && r.memoizedState !== null),
        e.mode & 1 ? ((Tr = (c = Tr) || u), Dn(t, e), (Tr = c)) : Dn(t, e),
        Vn(e),
        n & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !u && e.mode & 1)
        )
          for ($e = e, u = e.child; u !== null; ) {
            for (f = $e = u; $e !== null; ) {
              switch (((d = $e), (h = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ys(4, d, d.return);
                  break;
                case 1:
                  zi(d, d.return);
                  var m = d.stateNode;
                  if (typeof m.componentWillUnmount == "function") {
                    (n = d), (r = d.return);
                    try {
                      (t = n),
                        (m.props = t.memoizedProps),
                        (m.state = t.memoizedState),
                        m.componentWillUnmount();
                    } catch (p) {
                      Bt(n, r, p);
                    }
                  }
                  break;
                case 5:
                  zi(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    bh(f);
                    continue;
                  }
              }
              h !== null ? ((h.return = d), ($e = h)) : bh(f);
            }
            u = u.sibling;
          }
        e: for (u = null, f = e; ; ) {
          if (f.tag === 5) {
            if (u === null) {
              u = f;
              try {
                (a = f.stateNode),
                  c
                    ? ((i = a.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((o = f.stateNode),
                      (l = f.memoizedProps.style),
                      (s =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (o.style.display = C1("display", s)));
              } catch (p) {
                Bt(e, e.return, p);
              }
            }
          } else if (f.tag === 6) {
            if (u === null)
              try {
                f.stateNode.nodeValue = c ? "" : f.memoizedProps;
              } catch (p) {
                Bt(e, e.return, p);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            u === f && (u = null), (f = f.return);
          }
          u === f && (u = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      Dn(t, e), Vn(e), n & 4 && Ph(e);
      break;
    case 21:
      break;
    default:
      Dn(t, e), Vn(e);
  }
}
function Vn(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var r = e.return; r !== null; ) {
          if (Zm(r)) {
            var n = r;
            break e;
          }
          r = r.return;
        }
        throw Error(Ee(160));
      }
      switch (n.tag) {
        case 5:
          var a = n.stateNode;
          n.flags & 32 && (no(a, ""), (n.flags &= -33));
          var i = Ih(e);
          Lf(e, i, a);
          break;
        case 3:
        case 4:
          var s = n.stateNode.containerInfo,
            o = Ih(e);
          Df(e, o, s);
          break;
        default:
          throw Error(Ee(161));
      }
    } catch (l) {
      Bt(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function a2(e, t, r) {
  ($e = e), tv(e);
}
function tv(e, t, r) {
  for (var n = (e.mode & 1) !== 0; $e !== null; ) {
    var a = $e,
      i = a.child;
    if (a.tag === 22 && n) {
      var s = a.memoizedState !== null || ol;
      if (!s) {
        var o = a.alternate,
          l = (o !== null && o.memoizedState !== null) || Tr;
        o = ol;
        var c = Tr;
        if (((ol = s), (Tr = l) && !c))
          for ($e = a; $e !== null; )
            (s = $e),
              (l = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? Bh(a)
                : l !== null
                  ? ((l.return = s), ($e = l))
                  : Bh(a);
        for (; i !== null; ) ($e = i), tv(i), (i = i.sibling);
        ($e = a), (ol = o), (Tr = c);
      }
      Mh(e);
    } else
      a.subtreeFlags & 8772 && i !== null ? ((i.return = a), ($e = i)) : Mh(e);
  }
}
function Mh(e) {
  for (; $e !== null; ) {
    var t = $e;
    if (t.flags & 8772) {
      var r = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Tr || Nc(5, t);
              break;
            case 1:
              var n = t.stateNode;
              if (t.flags & 4 && !Tr)
                if (r === null) n.componentDidMount();
                else {
                  var a =
                    t.elementType === t.type
                      ? r.memoizedProps
                      : Fn(t.type, r.memoizedProps);
                  n.componentDidUpdate(
                    a,
                    r.memoizedState,
                    n.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var i = t.updateQueue;
              i !== null && Eh(t, i, n);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((r = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      r = t.child.stateNode;
                      break;
                    case 1:
                      r = t.child.stateNode;
                  }
                Eh(t, s, r);
              }
              break;
            case 5:
              var o = t.stateNode;
              if (r === null && t.flags & 4) {
                r = o;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && r.focus();
                    break;
                  case "img":
                    l.src && (r.src = l.src);
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
                var c = t.alternate;
                if (c !== null) {
                  var u = c.memoizedState;
                  if (u !== null) {
                    var f = u.dehydrated;
                    f !== null && oo(f);
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
              throw Error(Ee(163));
          }
        Tr || (t.flags & 512 && Cf(t));
      } catch (d) {
        Bt(t, t.return, d);
      }
    }
    if (t === e) {
      $e = null;
      break;
    }
    if (((r = t.sibling), r !== null)) {
      (r.return = t.return), ($e = r);
      break;
    }
    $e = t.return;
  }
}
function bh(e) {
  for (; $e !== null; ) {
    var t = $e;
    if (t === e) {
      $e = null;
      break;
    }
    var r = t.sibling;
    if (r !== null) {
      (r.return = t.return), ($e = r);
      break;
    }
    $e = t.return;
  }
}
function Bh(e) {
  for (; $e !== null; ) {
    var t = $e;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var r = t.return;
          try {
            Nc(4, t);
          } catch (l) {
            Bt(t, r, l);
          }
          break;
        case 1:
          var n = t.stateNode;
          if (typeof n.componentDidMount == "function") {
            var a = t.return;
            try {
              n.componentDidMount();
            } catch (l) {
              Bt(t, a, l);
            }
          }
          var i = t.return;
          try {
            Cf(t);
          } catch (l) {
            Bt(t, i, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Cf(t);
          } catch (l) {
            Bt(t, s, l);
          }
      }
    } catch (l) {
      Bt(t, t.return, l);
    }
    if (t === e) {
      $e = null;
      break;
    }
    var o = t.sibling;
    if (o !== null) {
      (o.return = t.return), ($e = o);
      break;
    }
    $e = t.return;
  }
}
var i2 = Math.ceil,
  Zl = ha.ReactCurrentDispatcher,
  C0 = ha.ReactCurrentOwner,
  wn = ha.ReactCurrentBatchConfig,
  ct = 0,
  cr = null,
  Qt = null,
  xr = 0,
  rn = 0,
  Gi = Ga(0),
  ar = 0,
  _o = null,
  pi = 0,
  Fc = 0,
  D0 = 0,
  Ks = null,
  Hr = null,
  L0 = 0,
  us = 1 / 0,
  qn = null,
  ql = !1,
  Nf = null,
  ba = null,
  ll = !1,
  La = null,
  ec = 0,
  Xs = 0,
  Ff = null,
  Nl = -1,
  Fl = 0;
function Ir() {
  return ct & 6 ? Ht() : Nl !== -1 ? Nl : (Nl = Ht());
}
function Ba(e) {
  return e.mode & 1
    ? ct & 2 && xr !== 0
      ? xr & -xr
      : HE.transition !== null
        ? (Fl === 0 && (Fl = j1()), Fl)
        : ((e = gt),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : G1(e.type))),
          e)
    : 1;
}
function bn(e, t, r, n) {
  if (50 < Xs) throw ((Xs = 0), (Ff = null), Error(Ee(185)));
  Fo(e, r, n),
    (!(ct & 2) || e !== cr) &&
      (e === cr && (!(ct & 2) && (Fc |= r), ar === 4 && Ca(e, xr)),
      Gr(e, n),
      r === 1 && ct === 0 && !(t.mode & 1) && ((us = Ht() + 500), Cc && Ya()));
}
function Gr(e, t) {
  var r = e.callbackNode;
  H_(e, t);
  var n = bl(e, e === cr ? xr : 0);
  if (n === 0)
    r !== null && Yd(r), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = n & -n), e.callbackPriority !== t)) {
    if ((r != null && Yd(r), t === 1))
      e.tag === 0 ? $E(jh.bind(null, e)) : fm(jh.bind(null, e)),
        bE(function () {
          !(ct & 6) && Ya();
        }),
        (r = null);
    else {
      switch (U1(n)) {
        case 1:
          r = e0;
          break;
        case 4:
          r = b1;
          break;
        case 16:
          r = Ml;
          break;
        case 536870912:
          r = B1;
          break;
        default:
          r = Ml;
      }
      r = cv(r, rv.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = r);
  }
}
function rv(e, t) {
  if (((Nl = -1), (Fl = 0), ct & 6)) throw Error(Ee(327));
  var r = e.callbackNode;
  if (qi() && e.callbackNode !== r) return null;
  var n = bl(e, e === cr ? xr : 0);
  if (n === 0) return null;
  if (n & 30 || n & e.expiredLanes || t) t = tc(e, n);
  else {
    t = n;
    var a = ct;
    ct |= 2;
    var i = av();
    (cr !== e || xr !== t) && ((qn = null), (us = Ht() + 500), oi(e, t));
    do
      try {
        l2();
        break;
      } catch (o) {
        nv(e, o);
      }
    while (!0);
    h0(),
      (Zl.current = i),
      (ct = a),
      Qt !== null ? (t = 0) : ((cr = null), (xr = 0), (t = ar));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((a = rf(e)), a !== 0 && ((n = a), (t = kf(e, a)))), t === 1)
    )
      throw ((r = _o), oi(e, 0), Ca(e, n), Gr(e, Ht()), r);
    if (t === 6) Ca(e, n);
    else {
      if (
        ((a = e.current.alternate),
        !(n & 30) &&
          !s2(a) &&
          ((t = tc(e, n)),
          t === 2 && ((i = rf(e)), i !== 0 && ((n = i), (t = kf(e, i)))),
          t === 1))
      )
        throw ((r = _o), oi(e, 0), Ca(e, n), Gr(e, Ht()), r);
      switch (((e.finishedWork = a), (e.finishedLanes = n), t)) {
        case 0:
        case 1:
          throw Error(Ee(345));
        case 2:
          Za(e, Hr, qn);
          break;
        case 3:
          if (
            (Ca(e, n), (n & 130023424) === n && ((t = L0 + 500 - Ht()), 10 < t))
          ) {
            if (bl(e, 0) !== 0) break;
            if (((a = e.suspendedLanes), (a & n) !== n)) {
              Ir(), (e.pingedLanes |= e.suspendedLanes & a);
              break;
            }
            e.timeoutHandle = ff(Za.bind(null, e, Hr, qn), t);
            break;
          }
          Za(e, Hr, qn);
          break;
        case 4:
          if ((Ca(e, n), (n & 4194240) === n)) break;
          for (t = e.eventTimes, a = -1; 0 < n; ) {
            var s = 31 - Mn(n);
            (i = 1 << s), (s = t[s]), s > a && (a = s), (n &= ~i);
          }
          if (
            ((n = a),
            (n = Ht() - n),
            (n =
              (120 > n
                ? 120
                : 480 > n
                  ? 480
                  : 1080 > n
                    ? 1080
                    : 1920 > n
                      ? 1920
                      : 3e3 > n
                        ? 3e3
                        : 4320 > n
                          ? 4320
                          : 1960 * i2(n / 1960)) - n),
            10 < n)
          ) {
            e.timeoutHandle = ff(Za.bind(null, e, Hr, qn), n);
            break;
          }
          Za(e, Hr, qn);
          break;
        case 5:
          Za(e, Hr, qn);
          break;
        default:
          throw Error(Ee(329));
      }
    }
  }
  return Gr(e, Ht()), e.callbackNode === r ? rv.bind(null, e) : null;
}
function kf(e, t) {
  var r = Ks;
  return (
    e.current.memoizedState.isDehydrated && (oi(e, t).flags |= 256),
    (e = tc(e, t)),
    e !== 2 && ((t = Hr), (Hr = r), t !== null && Rf(t)),
    e
  );
}
function Rf(e) {
  Hr === null ? (Hr = e) : Hr.push.apply(Hr, e);
}
function s2(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var r = t.updateQueue;
      if (r !== null && ((r = r.stores), r !== null))
        for (var n = 0; n < r.length; n++) {
          var a = r[n],
            i = a.getSnapshot;
          a = a.value;
          try {
            if (!jn(i(), a)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((r = t.child), t.subtreeFlags & 16384 && r !== null))
      (r.return = t), (t = r);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Ca(e, t) {
  for (
    t &= ~D0,
      t &= ~Fc,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var r = 31 - Mn(t),
      n = 1 << r;
    (e[r] = -1), (t &= ~n);
  }
}
function jh(e) {
  if (ct & 6) throw Error(Ee(327));
  qi();
  var t = bl(e, 0);
  if (!(t & 1)) return Gr(e, Ht()), null;
  var r = tc(e, t);
  if (e.tag !== 0 && r === 2) {
    var n = rf(e);
    n !== 0 && ((t = n), (r = kf(e, n)));
  }
  if (r === 1) throw ((r = _o), oi(e, 0), Ca(e, t), Gr(e, Ht()), r);
  if (r === 6) throw Error(Ee(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Za(e, Hr, qn),
    Gr(e, Ht()),
    null
  );
}
function N0(e, t) {
  var r = ct;
  ct |= 1;
  try {
    return e(t);
  } finally {
    (ct = r), ct === 0 && ((us = Ht() + 500), Cc && Ya());
  }
}
function mi(e) {
  La !== null && La.tag === 0 && !(ct & 6) && qi();
  var t = ct;
  ct |= 1;
  var r = wn.transition,
    n = gt;
  try {
    if (((wn.transition = null), (gt = 1), e)) return e();
  } finally {
    (gt = n), (wn.transition = r), (ct = t), !(ct & 6) && Ya();
  }
}
function F0() {
  (rn = Gi.current), Nt(Gi);
}
function oi(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var r = e.timeoutHandle;
  if ((r !== -1 && ((e.timeoutHandle = -1), ME(r)), Qt !== null))
    for (r = Qt.return; r !== null; ) {
      var n = r;
      switch ((u0(n), n.tag)) {
        case 1:
          (n = n.type.childContextTypes), n != null && Hl();
          break;
        case 3:
          ls(), Nt(Vr), Nt(Dr), _0();
          break;
        case 5:
          x0(n);
          break;
        case 4:
          ls();
          break;
        case 13:
          Nt(Pt);
          break;
        case 19:
          Nt(Pt);
          break;
        case 10:
          p0(n.type._context);
          break;
        case 22:
        case 23:
          F0();
      }
      r = r.return;
    }
  if (
    ((cr = e),
    (Qt = e = ja(e.current, null)),
    (xr = rn = t),
    (ar = 0),
    (_o = null),
    (D0 = Fc = pi = 0),
    (Hr = Ks = null),
    ai !== null)
  ) {
    for (t = 0; t < ai.length; t++)
      if (((r = ai[t]), (n = r.interleaved), n !== null)) {
        r.interleaved = null;
        var a = n.next,
          i = r.pending;
        if (i !== null) {
          var s = i.next;
          (i.next = a), (n.next = s);
        }
        r.pending = n;
      }
    ai = null;
  }
  return e;
}
function nv(e, t) {
  do {
    var r = Qt;
    try {
      if ((h0(), (Cl.current = Jl), Ql)) {
        for (var n = Mt.memoizedState; n !== null; ) {
          var a = n.queue;
          a !== null && (a.pending = null), (n = n.next);
        }
        Ql = !1;
      }
      if (
        ((hi = 0),
        (ir = nr = Mt = null),
        (Gs = !1),
        (vo = 0),
        (C0.current = null),
        r === null || r.return === null)
      ) {
        (ar = 1), (_o = t), (Qt = null);
        break;
      }
      e: {
        var i = e,
          s = r.return,
          o = r,
          l = t;
        if (
          ((t = xr),
          (o.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var c = l,
            u = o,
            f = u.tag;
          if (!(u.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var d = u.alternate;
            d
              ? ((u.updateQueue = d.updateQueue),
                (u.memoizedState = d.memoizedState),
                (u.lanes = d.lanes))
              : ((u.updateQueue = null), (u.memoizedState = null));
          }
          var h = Ch(s);
          if (h !== null) {
            (h.flags &= -257),
              Dh(h, s, o, i, t),
              h.mode & 1 && Ah(i, c, t),
              (t = h),
              (l = c);
            var m = t.updateQueue;
            if (m === null) {
              var p = new Set();
              p.add(l), (t.updateQueue = p);
            } else m.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              Ah(i, c, t), k0();
              break e;
            }
            l = Error(Ee(426));
          }
        } else if (Ot && o.mode & 1) {
          var x = Ch(s);
          if (x !== null) {
            !(x.flags & 65536) && (x.flags |= 256),
              Dh(x, s, o, i, t),
              f0(cs(l, o));
            break e;
          }
        }
        (i = l = cs(l, o)),
          ar !== 4 && (ar = 2),
          Ks === null ? (Ks = [i]) : Ks.push(i),
          (i = s);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var _ = Um(i, l, t);
              _h(i, _);
              break e;
            case 1:
              o = l;
              var v = i.type,
                g = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof v.getDerivedStateFromError == "function" ||
                  (g !== null &&
                    typeof g.componentDidCatch == "function" &&
                    (ba === null || !ba.has(g))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var S = $m(i, o, t);
                _h(i, S);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      sv(r);
    } catch (b) {
      (t = b), Qt === r && r !== null && (Qt = r = r.return);
      continue;
    }
    break;
  } while (!0);
}
function av() {
  var e = Zl.current;
  return (Zl.current = Jl), e === null ? Jl : e;
}
function k0() {
  (ar === 0 || ar === 3 || ar === 2) && (ar = 4),
    cr === null || (!(pi & 268435455) && !(Fc & 268435455)) || Ca(cr, xr);
}
function tc(e, t) {
  var r = ct;
  ct |= 2;
  var n = av();
  (cr !== e || xr !== t) && ((qn = null), oi(e, t));
  do
    try {
      o2();
      break;
    } catch (a) {
      nv(e, a);
    }
  while (!0);
  if ((h0(), (ct = r), (Zl.current = n), Qt !== null)) throw Error(Ee(261));
  return (cr = null), (xr = 0), ar;
}
function o2() {
  for (; Qt !== null; ) iv(Qt);
}
function l2() {
  for (; Qt !== null && !O_(); ) iv(Qt);
}
function iv(e) {
  var t = lv(e.alternate, e, rn);
  (e.memoizedProps = e.pendingProps),
    t === null ? sv(e) : (Qt = t),
    (C0.current = null);
}
function sv(e) {
  var t = e;
  do {
    var r = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((r = t2(r, t)), r !== null)) {
        (r.flags &= 32767), (Qt = r);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ar = 6), (Qt = null);
        return;
      }
    } else if (((r = e2(r, t, rn)), r !== null)) {
      Qt = r;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Qt = t;
      return;
    }
    Qt = t = e;
  } while (t !== null);
  ar === 0 && (ar = 5);
}
function Za(e, t, r) {
  var n = gt,
    a = wn.transition;
  try {
    (wn.transition = null), (gt = 1), c2(e, t, r, n);
  } finally {
    (wn.transition = a), (gt = n);
  }
  return null;
}
function c2(e, t, r, n) {
  do qi();
  while (La !== null);
  if (ct & 6) throw Error(Ee(327));
  r = e.finishedWork;
  var a = e.finishedLanes;
  if (r === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current))
    throw Error(Ee(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = r.lanes | r.childLanes;
  if (
    (W_(e, i),
    e === cr && ((Qt = cr = null), (xr = 0)),
    (!(r.subtreeFlags & 2064) && !(r.flags & 2064)) ||
      ll ||
      ((ll = !0),
      cv(Ml, function () {
        return qi(), null;
      })),
    (i = (r.flags & 15990) !== 0),
    r.subtreeFlags & 15990 || i)
  ) {
    (i = wn.transition), (wn.transition = null);
    var s = gt;
    gt = 1;
    var o = ct;
    (ct |= 4),
      (C0.current = null),
      n2(e, r),
      ev(r, e),
      NE(cf),
      (Bl = !!lf),
      (cf = lf = null),
      (e.current = r),
      a2(r),
      I_(),
      (ct = o),
      (gt = s),
      (wn.transition = i);
  } else e.current = r;
  if (
    (ll && ((ll = !1), (La = e), (ec = a)),
    (i = e.pendingLanes),
    i === 0 && (ba = null),
    b_(r.stateNode),
    Gr(e, Ht()),
    t !== null)
  )
    for (n = e.onRecoverableError, r = 0; r < t.length; r++)
      (a = t[r]), n(a.value, { componentStack: a.stack, digest: a.digest });
  if (ql) throw ((ql = !1), (e = Nf), (Nf = null), e);
  return (
    ec & 1 && e.tag !== 0 && qi(),
    (i = e.pendingLanes),
    i & 1 ? (e === Ff ? Xs++ : ((Xs = 0), (Ff = e))) : (Xs = 0),
    Ya(),
    null
  );
}
function qi() {
  if (La !== null) {
    var e = U1(ec),
      t = wn.transition,
      r = gt;
    try {
      if (((wn.transition = null), (gt = 16 > e ? 16 : e), La === null))
        var n = !1;
      else {
        if (((e = La), (La = null), (ec = 0), ct & 6)) throw Error(Ee(331));
        var a = ct;
        for (ct |= 4, $e = e.current; $e !== null; ) {
          var i = $e,
            s = i.child;
          if ($e.flags & 16) {
            var o = i.deletions;
            if (o !== null) {
              for (var l = 0; l < o.length; l++) {
                var c = o[l];
                for ($e = c; $e !== null; ) {
                  var u = $e;
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ys(8, u, i);
                  }
                  var f = u.child;
                  if (f !== null) (f.return = u), ($e = f);
                  else
                    for (; $e !== null; ) {
                      u = $e;
                      var d = u.sibling,
                        h = u.return;
                      if ((Jm(u), u === c)) {
                        $e = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = h), ($e = d);
                        break;
                      }
                      $e = h;
                    }
                }
              }
              var m = i.alternate;
              if (m !== null) {
                var p = m.child;
                if (p !== null) {
                  m.child = null;
                  do {
                    var x = p.sibling;
                    (p.sibling = null), (p = x);
                  } while (p !== null);
                }
              }
              $e = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) (s.return = i), ($e = s);
          else
            e: for (; $e !== null; ) {
              if (((i = $e), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ys(9, i, i.return);
                }
              var _ = i.sibling;
              if (_ !== null) {
                (_.return = i.return), ($e = _);
                break e;
              }
              $e = i.return;
            }
        }
        var v = e.current;
        for ($e = v; $e !== null; ) {
          s = $e;
          var g = s.child;
          if (s.subtreeFlags & 2064 && g !== null) (g.return = s), ($e = g);
          else
            e: for (s = v; $e !== null; ) {
              if (((o = $e), o.flags & 2048))
                try {
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Nc(9, o);
                  }
                } catch (b) {
                  Bt(o, o.return, b);
                }
              if (o === s) {
                $e = null;
                break e;
              }
              var S = o.sibling;
              if (S !== null) {
                (S.return = o.return), ($e = S);
                break e;
              }
              $e = o.return;
            }
        }
        if (
          ((ct = a), Ya(), Xn && typeof Xn.onPostCommitFiberRoot == "function")
        )
          try {
            Xn.onPostCommitFiberRoot(yc, e);
          } catch {}
        n = !0;
      }
      return n;
    } finally {
      (gt = r), (wn.transition = t);
    }
  }
  return !1;
}
function Uh(e, t, r) {
  (t = cs(r, t)),
    (t = Um(e, t, 1)),
    (e = Ma(e, t, 1)),
    (t = Ir()),
    e !== null && (Fo(e, 1, t), Gr(e, t));
}
function Bt(e, t, r) {
  if (e.tag === 3) Uh(e, e, r);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Uh(t, e, r);
        break;
      } else if (t.tag === 1) {
        var n = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof n.componentDidCatch == "function" &&
            (ba === null || !ba.has(n)))
        ) {
          (e = cs(r, e)),
            (e = $m(t, e, 1)),
            (t = Ma(t, e, 1)),
            (e = Ir()),
            t !== null && (Fo(t, 1, e), Gr(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function u2(e, t, r) {
  var n = e.pingCache;
  n !== null && n.delete(t),
    (t = Ir()),
    (e.pingedLanes |= e.suspendedLanes & r),
    cr === e &&
      (xr & r) === r &&
      (ar === 4 || (ar === 3 && (xr & 130023424) === xr && 500 > Ht() - L0)
        ? oi(e, 0)
        : (D0 |= r)),
    Gr(e, t);
}
function ov(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Zo), (Zo <<= 1), !(Zo & 130023424) && (Zo = 4194304))
      : (t = 1));
  var r = Ir();
  (e = ca(e, t)), e !== null && (Fo(e, t, r), Gr(e, r));
}
function f2(e) {
  var t = e.memoizedState,
    r = 0;
  t !== null && (r = t.retryLane), ov(e, r);
}
function d2(e, t) {
  var r = 0;
  switch (e.tag) {
    case 13:
      var n = e.stateNode,
        a = e.memoizedState;
      a !== null && (r = a.retryLane);
      break;
    case 19:
      n = e.stateNode;
      break;
    default:
      throw Error(Ee(314));
  }
  n !== null && n.delete(t), ov(e, r);
}
var lv;
lv = function (e, t, r) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Vr.current) Wr = !0;
    else {
      if (!(e.lanes & r) && !(t.flags & 128)) return (Wr = !1), qE(e, t, r);
      Wr = !!(e.flags & 131072);
    }
  else (Wr = !1), Ot && t.flags & 1048576 && dm(t, zl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var n = t.type;
      Ll(e, t), (e = t.pendingProps);
      var a = is(t, Dr.current);
      Zi(t, r), (a = y0(null, t, n, e, a, r));
      var i = w0();
      return (
        (t.flags |= 1),
        typeof a == "object" &&
        a !== null &&
        typeof a.render == "function" &&
        a.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            zr(n) ? ((i = !0), Wl(t)) : (i = !1),
            (t.memoizedState =
              a.state !== null && a.state !== void 0 ? a.state : null),
            v0(t),
            (a.updater = Lc),
            (t.stateNode = a),
            (a._reactInternals = t),
            xf(t, n, e, r),
            (t = yf(null, t, n, !0, i, r)))
          : ((t.tag = 0), Ot && i && c0(t), kr(null, t, a, r), (t = t.child)),
        t
      );
    case 16:
      n = t.elementType;
      e: {
        switch (
          (Ll(e, t),
          (e = t.pendingProps),
          (a = n._init),
          (n = a(n._payload)),
          (t.type = n),
          (a = t.tag = p2(n)),
          (e = Fn(n, e)),
          a)
        ) {
          case 0:
            t = Ef(null, t, n, e, r);
            break e;
          case 1:
            t = Fh(null, t, n, e, r);
            break e;
          case 11:
            t = Lh(null, t, n, e, r);
            break e;
          case 14:
            t = Nh(null, t, n, Fn(n.type, e), r);
            break e;
        }
        throw Error(Ee(306, n, ""));
      }
      return t;
    case 0:
      return (
        (n = t.type),
        (a = t.pendingProps),
        (a = t.elementType === n ? a : Fn(n, a)),
        Ef(e, t, n, a, r)
      );
    case 1:
      return (
        (n = t.type),
        (a = t.pendingProps),
        (a = t.elementType === n ? a : Fn(n, a)),
        Fh(e, t, n, a, r)
      );
    case 3:
      e: {
        if ((zm(t), e === null)) throw Error(Ee(387));
        (n = t.pendingProps),
          (i = t.memoizedState),
          (a = i.element),
          xm(e, t),
          Kl(t, n, null, r);
        var s = t.memoizedState;
        if (((n = s.element), i.isDehydrated))
          if (
            ((i = {
              element: n,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (a = cs(Error(Ee(423)), t)), (t = kh(e, t, n, r, a));
            break e;
          } else if (n !== a) {
            (a = cs(Error(Ee(424)), t)), (t = kh(e, t, n, r, a));
            break e;
          } else
            for (
              ln = Pa(t.stateNode.containerInfo.firstChild),
                cn = t,
                Ot = !0,
                On = null,
                r = vm(t, null, n, r),
                t.child = r;
              r;

            )
              (r.flags = (r.flags & -3) | 4096), (r = r.sibling);
        else {
          if ((ss(), n === a)) {
            t = ua(e, t, r);
            break e;
          }
          kr(e, t, n, r);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        _m(t),
        e === null && mf(t),
        (n = t.type),
        (a = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (s = a.children),
        uf(n, a) ? (s = null) : i !== null && uf(n, i) && (t.flags |= 32),
        Vm(e, t),
        kr(e, t, s, r),
        t.child
      );
    case 6:
      return e === null && mf(t), null;
    case 13:
      return Gm(e, t, r);
    case 4:
      return (
        g0(t, t.stateNode.containerInfo),
        (n = t.pendingProps),
        e === null ? (t.child = os(t, null, n, r)) : kr(e, t, n, r),
        t.child
      );
    case 11:
      return (
        (n = t.type),
        (a = t.pendingProps),
        (a = t.elementType === n ? a : Fn(n, a)),
        Lh(e, t, n, a, r)
      );
    case 7:
      return kr(e, t, t.pendingProps, r), t.child;
    case 8:
      return kr(e, t, t.pendingProps.children, r), t.child;
    case 12:
      return kr(e, t, t.pendingProps.children, r), t.child;
    case 10:
      e: {
        if (
          ((n = t.type._context),
          (a = t.pendingProps),
          (i = t.memoizedProps),
          (s = a.value),
          Ct(Gl, n._currentValue),
          (n._currentValue = s),
          i !== null)
        )
          if (jn(i.value, s)) {
            if (i.children === a.children && !Vr.current) {
              t = ua(e, t, r);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var o = i.dependencies;
              if (o !== null) {
                s = i.child;
                for (var l = o.firstContext; l !== null; ) {
                  if (l.context === n) {
                    if (i.tag === 1) {
                      (l = na(-1, r & -r)), (l.tag = 2);
                      var c = i.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var u = c.pending;
                        u === null
                          ? (l.next = l)
                          : ((l.next = u.next), (u.next = l)),
                          (c.pending = l);
                      }
                    }
                    (i.lanes |= r),
                      (l = i.alternate),
                      l !== null && (l.lanes |= r),
                      vf(i.return, r, t),
                      (o.lanes |= r);
                    break;
                  }
                  l = l.next;
                }
              } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((s = i.return), s === null)) throw Error(Ee(341));
                (s.lanes |= r),
                  (o = s.alternate),
                  o !== null && (o.lanes |= r),
                  vf(s, r, t),
                  (s = i.sibling);
              } else s = i.child;
              if (s !== null) s.return = i;
              else
                for (s = i; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((i = s.sibling), i !== null)) {
                    (i.return = s.return), (s = i);
                    break;
                  }
                  s = s.return;
                }
              i = s;
            }
        kr(e, t, a.children, r), (t = t.child);
      }
      return t;
    case 9:
      return (
        (a = t.type),
        (n = t.pendingProps.children),
        Zi(t, r),
        (a = Sn(a)),
        (n = n(a)),
        (t.flags |= 1),
        kr(e, t, n, r),
        t.child
      );
    case 14:
      return (
        (n = t.type),
        (a = Fn(n, t.pendingProps)),
        (a = Fn(n.type, a)),
        Nh(e, t, n, a, r)
      );
    case 15:
      return Hm(e, t, t.type, t.pendingProps, r);
    case 17:
      return (
        (n = t.type),
        (a = t.pendingProps),
        (a = t.elementType === n ? a : Fn(n, a)),
        Ll(e, t),
        (t.tag = 1),
        zr(n) ? ((e = !0), Wl(t)) : (e = !1),
        Zi(t, r),
        jm(t, n, a),
        xf(t, n, a, r),
        yf(null, t, n, !0, e, r)
      );
    case 19:
      return Ym(e, t, r);
    case 22:
      return Wm(e, t, r);
  }
  throw Error(Ee(156, t.tag));
};
function cv(e, t) {
  return M1(e, t);
}
function h2(e, t, r, n) {
  (this.tag = e),
    (this.key = r),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = n),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function yn(e, t, r, n) {
  return new h2(e, t, r, n);
}
function R0(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function p2(e) {
  if (typeof e == "function") return R0(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Jf)) return 11;
    if (e === Zf) return 14;
  }
  return 2;
}
function ja(e, t) {
  var r = e.alternate;
  return (
    r === null
      ? ((r = yn(e.tag, t, e.key, e.mode)),
        (r.elementType = e.elementType),
        (r.type = e.type),
        (r.stateNode = e.stateNode),
        (r.alternate = e),
        (e.alternate = r))
      : ((r.pendingProps = t),
        (r.type = e.type),
        (r.flags = 0),
        (r.subtreeFlags = 0),
        (r.deletions = null)),
    (r.flags = e.flags & 14680064),
    (r.childLanes = e.childLanes),
    (r.lanes = e.lanes),
    (r.child = e.child),
    (r.memoizedProps = e.memoizedProps),
    (r.memoizedState = e.memoizedState),
    (r.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (r.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (r.sibling = e.sibling),
    (r.index = e.index),
    (r.ref = e.ref),
    r
  );
}
function kl(e, t, r, n, a, i) {
  var s = 2;
  if (((n = e), typeof e == "function")) R0(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case Mi:
        return li(r.children, a, i, t);
      case Qf:
        (s = 8), (a |= 8);
        break;
      case $u:
        return (
          (e = yn(12, r, t, a | 2)), (e.elementType = $u), (e.lanes = i), e
        );
      case Hu:
        return (e = yn(13, r, t, a)), (e.elementType = Hu), (e.lanes = i), e;
      case Wu:
        return (e = yn(19, r, t, a)), (e.elementType = Wu), (e.lanes = i), e;
      case _1:
        return kc(r, a, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case g1:
              s = 10;
              break e;
            case x1:
              s = 9;
              break e;
            case Jf:
              s = 11;
              break e;
            case Zf:
              s = 14;
              break e;
            case Sa:
              (s = 16), (n = null);
              break e;
          }
        throw Error(Ee(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = yn(s, r, t, a)), (t.elementType = e), (t.type = n), (t.lanes = i), t
  );
}
function li(e, t, r, n) {
  return (e = yn(7, e, n, t)), (e.lanes = r), e;
}
function kc(e, t, r, n) {
  return (
    (e = yn(22, e, n, t)),
    (e.elementType = _1),
    (e.lanes = r),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Cu(e, t, r) {
  return (e = yn(6, e, null, t)), (e.lanes = r), e;
}
function Du(e, t, r) {
  return (
    (t = yn(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = r),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function m2(e, t, r, n, a) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = ou(0)),
    (this.expirationTimes = ou(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = ou(0)),
    (this.identifierPrefix = n),
    (this.onRecoverableError = a),
    (this.mutableSourceEagerHydrationData = null);
}
function O0(e, t, r, n, a, i, s, o, l) {
  return (
    (e = new m2(e, t, r, o, l)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = yn(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: n,
      isDehydrated: r,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    v0(i),
    e
  );
}
function v2(e, t, r) {
  var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Pi,
    key: n == null ? null : "" + n,
    children: e,
    containerInfo: t,
    implementation: r,
  };
}
function uv(e) {
  if (!e) return $a;
  e = e._reactInternals;
  e: {
    if (Ei(e) !== e || e.tag !== 1) throw Error(Ee(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (zr(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(Ee(171));
  }
  if (e.tag === 1) {
    var r = e.type;
    if (zr(r)) return um(e, r, t);
  }
  return t;
}
function fv(e, t, r, n, a, i, s, o, l) {
  return (
    (e = O0(r, n, !0, e, a, i, s, o, l)),
    (e.context = uv(null)),
    (r = e.current),
    (n = Ir()),
    (a = Ba(r)),
    (i = na(n, a)),
    (i.callback = t ?? null),
    Ma(r, i, a),
    (e.current.lanes = a),
    Fo(e, a, n),
    Gr(e, n),
    e
  );
}
function Rc(e, t, r, n) {
  var a = t.current,
    i = Ir(),
    s = Ba(a);
  return (
    (r = uv(r)),
    t.context === null ? (t.context = r) : (t.pendingContext = r),
    (t = na(i, s)),
    (t.payload = { element: e }),
    (n = n === void 0 ? null : n),
    n !== null && (t.callback = n),
    (e = Ma(a, t, s)),
    e !== null && (bn(e, a, s, i), Al(e, a, s)),
    s
  );
}
function rc(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function $h(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var r = e.retryLane;
    e.retryLane = r !== 0 && r < t ? r : t;
  }
}
function I0(e, t) {
  $h(e, t), (e = e.alternate) && $h(e, t);
}
function g2() {
  return null;
}
var dv =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function P0(e) {
  this._internalRoot = e;
}
Oc.prototype.render = P0.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(Ee(409));
  Rc(e, t, null, null);
};
Oc.prototype.unmount = P0.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    mi(function () {
      Rc(null, e, null, null);
    }),
      (t[la] = null);
  }
};
function Oc(e) {
  this._internalRoot = e;
}
Oc.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = W1();
    e = { blockedOn: null, target: e, priority: t };
    for (var r = 0; r < Aa.length && t !== 0 && t < Aa[r].priority; r++);
    Aa.splice(r, 0, e), r === 0 && z1(e);
  }
};
function M0(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ic(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Hh() {}
function x2(e, t, r, n, a) {
  if (a) {
    if (typeof n == "function") {
      var i = n;
      n = function () {
        var c = rc(s);
        i.call(c);
      };
    }
    var s = fv(t, n, e, 0, null, !1, !1, "", Hh);
    return (
      (e._reactRootContainer = s),
      (e[la] = s.current),
      uo(e.nodeType === 8 ? e.parentNode : e),
      mi(),
      s
    );
  }
  for (; (a = e.lastChild); ) e.removeChild(a);
  if (typeof n == "function") {
    var o = n;
    n = function () {
      var c = rc(l);
      o.call(c);
    };
  }
  var l = O0(e, 0, !1, null, null, !1, !1, "", Hh);
  return (
    (e._reactRootContainer = l),
    (e[la] = l.current),
    uo(e.nodeType === 8 ? e.parentNode : e),
    mi(function () {
      Rc(t, l, r, n);
    }),
    l
  );
}
function Pc(e, t, r, n, a) {
  var i = r._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof a == "function") {
      var o = a;
      a = function () {
        var l = rc(s);
        o.call(l);
      };
    }
    Rc(t, s, e, a);
  } else s = x2(r, t, e, a, n);
  return rc(s);
}
$1 = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var r = bs(t.pendingLanes);
        r !== 0 &&
          (t0(t, r | 1), Gr(t, Ht()), !(ct & 6) && ((us = Ht() + 500), Ya()));
      }
      break;
    case 13:
      mi(function () {
        var n = ca(e, 1);
        if (n !== null) {
          var a = Ir();
          bn(n, e, 1, a);
        }
      }),
        I0(e, 1);
  }
};
r0 = function (e) {
  if (e.tag === 13) {
    var t = ca(e, 134217728);
    if (t !== null) {
      var r = Ir();
      bn(t, e, 134217728, r);
    }
    I0(e, 134217728);
  }
};
H1 = function (e) {
  if (e.tag === 13) {
    var t = Ba(e),
      r = ca(e, t);
    if (r !== null) {
      var n = Ir();
      bn(r, e, t, n);
    }
    I0(e, t);
  }
};
W1 = function () {
  return gt;
};
V1 = function (e, t) {
  var r = gt;
  try {
    return (gt = e), t();
  } finally {
    gt = r;
  }
};
qu = function (e, t, r) {
  switch (t) {
    case "input":
      if ((Gu(e, r), (t = r.name), r.type === "radio" && t != null)) {
        for (r = e; r.parentNode; ) r = r.parentNode;
        for (
          r = r.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < r.length;
          t++
        ) {
          var n = r[t];
          if (n !== e && n.form === e.form) {
            var a = Ac(n);
            if (!a) throw Error(Ee(90));
            y1(n), Gu(n, a);
          }
        }
      }
      break;
    case "textarea":
      S1(e, r);
      break;
    case "select":
      (t = r.value), t != null && Ki(e, !!r.multiple, t, !1);
  }
};
F1 = N0;
k1 = mi;
var _2 = { usingClientEntryPoint: !1, Events: [Ro, Ui, Ac, L1, N1, N0] },
  Fs = {
    findFiberByHostInstance: ni,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  E2 = {
    bundleType: Fs.bundleType,
    version: Fs.version,
    rendererPackageName: Fs.rendererPackageName,
    rendererConfig: Fs.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: ha.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = I1(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Fs.findFiberByHostInstance || g2,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var cl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!cl.isDisabled && cl.supportsFiber)
    try {
      (yc = cl.inject(E2)), (Xn = cl);
    } catch {}
}
dn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _2;
dn.createPortal = function (e, t) {
  var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!M0(t)) throw Error(Ee(200));
  return v2(e, t, null, r);
};
dn.createRoot = function (e, t) {
  if (!M0(e)) throw Error(Ee(299));
  var r = !1,
    n = "",
    a = dv;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (r = !0),
      t.identifierPrefix !== void 0 && (n = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (a = t.onRecoverableError)),
    (t = O0(e, 1, !1, null, null, r, !1, n, a)),
    (e[la] = t.current),
    uo(e.nodeType === 8 ? e.parentNode : e),
    new P0(t)
  );
};
dn.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(Ee(188))
      : ((e = Object.keys(e).join(",")), Error(Ee(268, e)));
  return (e = I1(t)), (e = e === null ? null : e.stateNode), e;
};
dn.flushSync = function (e) {
  return mi(e);
};
dn.hydrate = function (e, t, r) {
  if (!Ic(t)) throw Error(Ee(200));
  return Pc(null, e, t, !0, r);
};
dn.hydrateRoot = function (e, t, r) {
  if (!M0(e)) throw Error(Ee(405));
  var n = (r != null && r.hydratedSources) || null,
    a = !1,
    i = "",
    s = dv;
  if (
    (r != null &&
      (r.unstable_strictMode === !0 && (a = !0),
      r.identifierPrefix !== void 0 && (i = r.identifierPrefix),
      r.onRecoverableError !== void 0 && (s = r.onRecoverableError)),
    (t = fv(t, null, e, 1, r ?? null, a, !1, i, s)),
    (e[la] = t.current),
    uo(e),
    n)
  )
    for (e = 0; e < n.length; e++)
      (r = n[e]),
        (a = r._getVersion),
        (a = a(r._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [r, a])
          : t.mutableSourceEagerHydrationData.push(r, a);
  return new Oc(t);
};
dn.render = function (e, t, r) {
  if (!Ic(t)) throw Error(Ee(200));
  return Pc(null, e, t, !1, r);
};
dn.unmountComponentAtNode = function (e) {
  if (!Ic(e)) throw Error(Ee(40));
  return e._reactRootContainer
    ? (mi(function () {
        Pc(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[la] = null);
        });
      }),
      !0)
    : !1;
};
dn.unstable_batchedUpdates = N0;
dn.unstable_renderSubtreeIntoContainer = function (e, t, r, n) {
  if (!Ic(r)) throw Error(Ee(200));
  if (e == null || e._reactInternals === void 0) throw Error(Ee(38));
  return Pc(e, t, r, !1, n);
};
dn.version = "18.3.1-next-f1338f8080-20240426";
function hv() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(hv);
    } catch (e) {
      console.error(e);
    }
}
hv(), (h1.exports = dn);
var b0 = h1.exports;
const y2 = t1(b0),
  w2 = e1({ __proto__: null, default: y2 }, [b0]);
var pv,
  Wh = b0;
(pv = Wh.createRoot), Wh.hydrateRoot;
/*! xlsx.js (C) 2013-present SheetJS -- http://sheetjs.com */ var nc = {};
nc.version = "0.18.5";
var mv = 1252,
  S2 = [
    874, 932, 936, 949, 950, 1250, 1251, 1252, 1253, 1254, 1255, 1256, 1257,
    1258, 1e4,
  ],
  vv = function (e) {
    S2.indexOf(e) != -1 && (mv = e);
  };
function T2() {
  vv(1252);
}
var Eo = function (e) {
  vv(e);
};
function A2() {
  Eo(1200), T2();
}
var ul = function (t) {
    return String.fromCharCode(t);
  },
  Vh = function (t) {
    return String.fromCharCode(t);
  },
  qa,
  Na = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function yo(e) {
  for (
    var t = "", r = 0, n = 0, a = 0, i = 0, s = 0, o = 0, l = 0, c = 0;
    c < e.length;

  )
    (r = e.charCodeAt(c++)),
      (i = r >> 2),
      (n = e.charCodeAt(c++)),
      (s = ((r & 3) << 4) | (n >> 4)),
      (a = e.charCodeAt(c++)),
      (o = ((n & 15) << 2) | (a >> 6)),
      (l = a & 63),
      isNaN(n) ? (o = l = 64) : isNaN(a) && (l = 64),
      (t += Na.charAt(i) + Na.charAt(s) + Na.charAt(o) + Na.charAt(l));
  return t;
}
function fa(e) {
  var t = "",
    r = 0,
    n = 0,
    a = 0,
    i = 0,
    s = 0,
    o = 0,
    l = 0;
  e = e.replace(/[^\w\+\/\=]/g, "");
  for (var c = 0; c < e.length; )
    (i = Na.indexOf(e.charAt(c++))),
      (s = Na.indexOf(e.charAt(c++))),
      (r = (i << 2) | (s >> 4)),
      (t += String.fromCharCode(r)),
      (o = Na.indexOf(e.charAt(c++))),
      (n = ((s & 15) << 4) | (o >> 2)),
      o !== 64 && (t += String.fromCharCode(n)),
      (l = Na.indexOf(e.charAt(c++))),
      (a = ((o & 3) << 6) | l),
      l !== 64 && (t += String.fromCharCode(a));
  return t;
}
var ft = (function () {
    return (
      typeof Buffer < "u" &&
      typeof process < "u" &&
      typeof process.versions < "u" &&
      !!process.versions.node
    );
  })(),
  pa = (function () {
    if (typeof Buffer < "u") {
      var e = !Buffer.from;
      if (!e)
        try {
          Buffer.from("foo", "utf8");
        } catch {
          e = !0;
        }
      return e
        ? function (t, r) {
            return r ? new Buffer(t, r) : new Buffer(t);
          }
        : Buffer.from.bind(Buffer);
    }
    return function () {};
  })();
function vi(e) {
  return ft
    ? Buffer.alloc
      ? Buffer.alloc(e)
      : new Buffer(e)
    : typeof Uint8Array < "u"
      ? new Uint8Array(e)
      : new Array(e);
}
function zh(e) {
  return ft
    ? Buffer.allocUnsafe
      ? Buffer.allocUnsafe(e)
      : new Buffer(e)
    : typeof Uint8Array < "u"
      ? new Uint8Array(e)
      : new Array(e);
}
var In = function (t) {
  return ft
    ? pa(t, "binary")
    : t.split("").map(function (r) {
        return r.charCodeAt(0) & 255;
      });
};
function Mc(e) {
  if (typeof ArrayBuffer > "u") return In(e);
  for (
    var t = new ArrayBuffer(e.length), r = new Uint8Array(t), n = 0;
    n != e.length;
    ++n
  )
    r[n] = e.charCodeAt(n) & 255;
  return t;
}
function Io(e) {
  if (Array.isArray(e))
    return e
      .map(function (n) {
        return String.fromCharCode(n);
      })
      .join("");
  for (var t = [], r = 0; r < e.length; ++r) t[r] = String.fromCharCode(e[r]);
  return t.join("");
}
function C2(e) {
  if (typeof Uint8Array > "u") throw new Error("Unsupported");
  return new Uint8Array(e);
}
var vr = ft
  ? function (e) {
      return Buffer.concat(
        e.map(function (t) {
          return Buffer.isBuffer(t) ? t : pa(t);
        }),
      );
    }
  : function (e) {
      if (typeof Uint8Array < "u") {
        var t = 0,
          r = 0;
        for (t = 0; t < e.length; ++t) r += e[t].length;
        var n = new Uint8Array(r),
          a = 0;
        for (t = 0, r = 0; t < e.length; r += a, ++t)
          if (((a = e[t].length), e[t] instanceof Uint8Array)) n.set(e[t], r);
          else {
            if (typeof e[t] == "string") throw "wtf";
            n.set(new Uint8Array(e[t]), r);
          }
        return n;
      }
      return [].concat.apply(
        [],
        e.map(function (i) {
          return Array.isArray(i) ? i : [].slice.call(i);
        }),
      );
    };
function D2(e) {
  for (
    var t = [], r = 0, n = e.length + 250, a = vi(e.length + 255), i = 0;
    i < e.length;
    ++i
  ) {
    var s = e.charCodeAt(i);
    if (s < 128) a[r++] = s;
    else if (s < 2048)
      (a[r++] = 192 | ((s >> 6) & 31)), (a[r++] = 128 | (s & 63));
    else if (s >= 55296 && s < 57344) {
      s = (s & 1023) + 64;
      var o = e.charCodeAt(++i) & 1023;
      (a[r++] = 240 | ((s >> 8) & 7)),
        (a[r++] = 128 | ((s >> 2) & 63)),
        (a[r++] = 128 | ((o >> 6) & 15) | ((s & 3) << 4)),
        (a[r++] = 128 | (o & 63));
    } else
      (a[r++] = 224 | ((s >> 12) & 15)),
        (a[r++] = 128 | ((s >> 6) & 63)),
        (a[r++] = 128 | (s & 63));
    r > n && (t.push(a.slice(0, r)), (r = 0), (a = vi(65535)), (n = 65530));
  }
  return t.push(a.slice(0, r)), vr(t);
}
var Qs = /\u0000/g,
  fl = /[\u0001-\u0006]/g;
function es(e) {
  for (var t = "", r = e.length - 1; r >= 0; ) t += e.charAt(r--);
  return t;
}
function Pn(e, t) {
  var r = "" + e;
  return r.length >= t ? r : jt("0", t - r.length) + r;
}
function B0(e, t) {
  var r = "" + e;
  return r.length >= t ? r : jt(" ", t - r.length) + r;
}
function ac(e, t) {
  var r = "" + e;
  return r.length >= t ? r : r + jt(" ", t - r.length);
}
function L2(e, t) {
  var r = "" + Math.round(e);
  return r.length >= t ? r : jt("0", t - r.length) + r;
}
function N2(e, t) {
  var r = "" + e;
  return r.length >= t ? r : jt("0", t - r.length) + r;
}
var Gh = Math.pow(2, 32);
function Ni(e, t) {
  if (e > Gh || e < -Gh) return L2(e, t);
  var r = Math.round(e);
  return N2(r, t);
}
function ic(e, t) {
  return (
    (t = t || 0),
    e.length >= 7 + t &&
      (e.charCodeAt(t) | 32) === 103 &&
      (e.charCodeAt(t + 1) | 32) === 101 &&
      (e.charCodeAt(t + 2) | 32) === 110 &&
      (e.charCodeAt(t + 3) | 32) === 101 &&
      (e.charCodeAt(t + 4) | 32) === 114 &&
      (e.charCodeAt(t + 5) | 32) === 97 &&
      (e.charCodeAt(t + 6) | 32) === 108
  );
}
var Yh = [
    ["Sun", "Sunday"],
    ["Mon", "Monday"],
    ["Tue", "Tuesday"],
    ["Wed", "Wednesday"],
    ["Thu", "Thursday"],
    ["Fri", "Friday"],
    ["Sat", "Saturday"],
  ],
  Lu = [
    ["J", "Jan", "January"],
    ["F", "Feb", "February"],
    ["M", "Mar", "March"],
    ["A", "Apr", "April"],
    ["M", "May", "May"],
    ["J", "Jun", "June"],
    ["J", "Jul", "July"],
    ["A", "Aug", "August"],
    ["S", "Sep", "September"],
    ["O", "Oct", "October"],
    ["N", "Nov", "November"],
    ["D", "Dec", "December"],
  ];
function F2(e) {
  return (
    e || (e = {}),
    (e[0] = "General"),
    (e[1] = "0"),
    (e[2] = "0.00"),
    (e[3] = "#,##0"),
    (e[4] = "#,##0.00"),
    (e[9] = "0%"),
    (e[10] = "0.00%"),
    (e[11] = "0.00E+00"),
    (e[12] = "# ?/?"),
    (e[13] = "# ??/??"),
    (e[14] = "m/d/yy"),
    (e[15] = "d-mmm-yy"),
    (e[16] = "d-mmm"),
    (e[17] = "mmm-yy"),
    (e[18] = "h:mm AM/PM"),
    (e[19] = "h:mm:ss AM/PM"),
    (e[20] = "h:mm"),
    (e[21] = "h:mm:ss"),
    (e[22] = "m/d/yy h:mm"),
    (e[37] = "#,##0 ;(#,##0)"),
    (e[38] = "#,##0 ;[Red](#,##0)"),
    (e[39] = "#,##0.00;(#,##0.00)"),
    (e[40] = "#,##0.00;[Red](#,##0.00)"),
    (e[45] = "mm:ss"),
    (e[46] = "[h]:mm:ss"),
    (e[47] = "mmss.0"),
    (e[48] = "##0.0E+0"),
    (e[49] = "@"),
    (e[56] = '"上午/下午 "hh"時"mm"分"ss"秒 "'),
    e
  );
}
var Ut = {
    0: "General",
    1: "0",
    2: "0.00",
    3: "#,##0",
    4: "#,##0.00",
    9: "0%",
    10: "0.00%",
    11: "0.00E+00",
    12: "# ?/?",
    13: "# ??/??",
    14: "m/d/yy",
    15: "d-mmm-yy",
    16: "d-mmm",
    17: "mmm-yy",
    18: "h:mm AM/PM",
    19: "h:mm:ss AM/PM",
    20: "h:mm",
    21: "h:mm:ss",
    22: "m/d/yy h:mm",
    37: "#,##0 ;(#,##0)",
    38: "#,##0 ;[Red](#,##0)",
    39: "#,##0.00;(#,##0.00)",
    40: "#,##0.00;[Red](#,##0.00)",
    45: "mm:ss",
    46: "[h]:mm:ss",
    47: "mmss.0",
    48: "##0.0E+0",
    49: "@",
    56: '"上午/下午 "hh"時"mm"分"ss"秒 "',
  },
  Kh = {
    5: 37,
    6: 38,
    7: 39,
    8: 40,
    23: 0,
    24: 0,
    25: 0,
    26: 0,
    27: 14,
    28: 14,
    29: 14,
    30: 14,
    31: 14,
    50: 14,
    51: 14,
    52: 14,
    53: 14,
    54: 14,
    55: 14,
    56: 14,
    57: 14,
    58: 14,
    59: 1,
    60: 2,
    61: 3,
    62: 4,
    67: 9,
    68: 10,
    69: 12,
    70: 13,
    71: 14,
    72: 14,
    73: 15,
    74: 16,
    75: 17,
    76: 20,
    77: 21,
    78: 22,
    79: 45,
    80: 46,
    81: 47,
    82: 0,
  },
  k2 = {
    5: '"$"#,##0_);\\("$"#,##0\\)',
    63: '"$"#,##0_);\\("$"#,##0\\)',
    6: '"$"#,##0_);[Red]\\("$"#,##0\\)',
    64: '"$"#,##0_);[Red]\\("$"#,##0\\)',
    7: '"$"#,##0.00_);\\("$"#,##0.00\\)',
    65: '"$"#,##0.00_);\\("$"#,##0.00\\)',
    8: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
    66: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
    41: '_(* #,##0_);_(* \\(#,##0\\);_(* "-"_);_(@_)',
    42: '_("$"* #,##0_);_("$"* \\(#,##0\\);_("$"* "-"_);_(@_)',
    43: '_(* #,##0.00_);_(* \\(#,##0.00\\);_(* "-"??_);_(@_)',
    44: '_("$"* #,##0.00_);_("$"* \\(#,##0.00\\);_("$"* "-"??_);_(@_)',
  };
function sc(e, t, r) {
  for (
    var n = e < 0 ? -1 : 1,
      a = e * n,
      i = 0,
      s = 1,
      o = 0,
      l = 1,
      c = 0,
      u = 0,
      f = Math.floor(a);
    c < t &&
    ((f = Math.floor(a)), (o = f * s + i), (u = f * c + l), !(a - f < 5e-8));

  )
    (a = 1 / (a - f)), (i = s), (s = o), (l = c), (c = u);
  if ((u > t && (c > t ? ((u = l), (o = i)) : ((u = c), (o = s))), !r))
    return [0, n * o, u];
  var d = Math.floor((n * o) / u);
  return [d, n * o - d * u, u];
}
function dl(e, t, r) {
  if (e > 2958465 || e < 0) return null;
  var n = e | 0,
    a = Math.floor(86400 * (e - n)),
    i = 0,
    s = [],
    o = {
      D: n,
      T: a,
      u: 86400 * (e - n) - a,
      y: 0,
      m: 0,
      d: 0,
      H: 0,
      M: 0,
      S: 0,
      q: 0,
    };
  if (
    (Math.abs(o.u) < 1e-6 && (o.u = 0),
    t && t.date1904 && (n += 1462),
    o.u > 0.9999 && ((o.u = 0), ++a == 86400 && ((o.T = a = 0), ++n, ++o.D)),
    n === 60)
  )
    (s = r ? [1317, 10, 29] : [1900, 2, 29]), (i = 3);
  else if (n === 0) (s = r ? [1317, 8, 29] : [1900, 1, 0]), (i = 6);
  else {
    n > 60 && --n;
    var l = new Date(1900, 0, 1);
    l.setDate(l.getDate() + n - 1),
      (s = [l.getFullYear(), l.getMonth() + 1, l.getDate()]),
      (i = l.getDay()),
      n < 60 && (i = (i + 6) % 7),
      r && (i = B2(l, s));
  }
  return (
    (o.y = s[0]),
    (o.m = s[1]),
    (o.d = s[2]),
    (o.S = a % 60),
    (a = Math.floor(a / 60)),
    (o.M = a % 60),
    (a = Math.floor(a / 60)),
    (o.H = a),
    (o.q = i),
    o
  );
}
var gv = new Date(1899, 11, 31, 0, 0, 0),
  R2 = gv.getTime(),
  O2 = new Date(1900, 2, 1, 0, 0, 0);
function xv(e, t) {
  var r = e.getTime();
  return (
    t ? (r -= 1461 * 24 * 60 * 60 * 1e3) : e >= O2 && (r += 24 * 60 * 60 * 1e3),
    (r - (R2 + (e.getTimezoneOffset() - gv.getTimezoneOffset()) * 6e4)) /
      (24 * 60 * 60 * 1e3)
  );
}
function j0(e) {
  return e.indexOf(".") == -1 ? e : e.replace(/(?:\.0*|(\.\d*[1-9])0+)$/, "$1");
}
function I2(e) {
  return e.indexOf("E") == -1
    ? e
    : e
        .replace(/(?:\.0*|(\.\d*[1-9])0+)[Ee]/, "$1E")
        .replace(/(E[+-])(\d)$/, "$10$2");
}
function P2(e) {
  var t = e < 0 ? 12 : 11,
    r = j0(e.toFixed(12));
  return r.length <= t || ((r = e.toPrecision(10)), r.length <= t)
    ? r
    : e.toExponential(5);
}
function M2(e) {
  var t = j0(e.toFixed(11));
  return t.length > (e < 0 ? 12 : 11) || t === "0" || t === "-0"
    ? e.toPrecision(6)
    : t;
}
function b2(e) {
  var t = Math.floor(Math.log(Math.abs(e)) * Math.LOG10E),
    r;
  return (
    t >= -4 && t <= -1
      ? (r = e.toPrecision(10 + t))
      : Math.abs(t) <= 9
        ? (r = P2(e))
        : t === 10
          ? (r = e.toFixed(10).substr(0, 12))
          : (r = M2(e)),
    j0(I2(r.toUpperCase()))
  );
}
function Of(e, t) {
  switch (typeof e) {
    case "string":
      return e;
    case "boolean":
      return e ? "TRUE" : "FALSE";
    case "number":
      return (e | 0) === e ? e.toString(10) : b2(e);
    case "undefined":
      return "";
    case "object":
      if (e == null) return "";
      if (e instanceof Date) return Ha(14, xv(e, t && t.date1904), t);
  }
  throw new Error("unsupported value in General format: " + e);
}
function B2(e, t) {
  t[0] -= 581;
  var r = e.getDay();
  return e < 60 && (r = (r + 6) % 7), r;
}
function j2(e, t, r, n) {
  var a = "",
    i = 0,
    s = 0,
    o = r.y,
    l,
    c = 0;
  switch (e) {
    case 98:
      o = r.y + 543;
    case 121:
      switch (t.length) {
        case 1:
        case 2:
          (l = o % 100), (c = 2);
          break;
        default:
          (l = o % 1e4), (c = 4);
          break;
      }
      break;
    case 109:
      switch (t.length) {
        case 1:
        case 2:
          (l = r.m), (c = t.length);
          break;
        case 3:
          return Lu[r.m - 1][1];
        case 5:
          return Lu[r.m - 1][0];
        default:
          return Lu[r.m - 1][2];
      }
      break;
    case 100:
      switch (t.length) {
        case 1:
        case 2:
          (l = r.d), (c = t.length);
          break;
        case 3:
          return Yh[r.q][0];
        default:
          return Yh[r.q][1];
      }
      break;
    case 104:
      switch (t.length) {
        case 1:
        case 2:
          (l = 1 + ((r.H + 11) % 12)), (c = t.length);
          break;
        default:
          throw "bad hour format: " + t;
      }
      break;
    case 72:
      switch (t.length) {
        case 1:
        case 2:
          (l = r.H), (c = t.length);
          break;
        default:
          throw "bad hour format: " + t;
      }
      break;
    case 77:
      switch (t.length) {
        case 1:
        case 2:
          (l = r.M), (c = t.length);
          break;
        default:
          throw "bad minute format: " + t;
      }
      break;
    case 115:
      if (t != "s" && t != "ss" && t != ".0" && t != ".00" && t != ".000")
        throw "bad second format: " + t;
      return r.u === 0 && (t == "s" || t == "ss")
        ? Pn(r.S, t.length)
        : (n >= 2 ? (s = n === 3 ? 1e3 : 100) : (s = n === 1 ? 10 : 1),
          (i = Math.round(s * (r.S + r.u))),
          i >= 60 * s && (i = 0),
          t === "s"
            ? i === 0
              ? "0"
              : "" + i / s
            : ((a = Pn(i, 2 + n)),
              t === "ss" ? a.substr(0, 2) : "." + a.substr(2, t.length - 1)));
    case 90:
      switch (t) {
        case "[h]":
        case "[hh]":
          l = r.D * 24 + r.H;
          break;
        case "[m]":
        case "[mm]":
          l = (r.D * 24 + r.H) * 60 + r.M;
          break;
        case "[s]":
        case "[ss]":
          l = ((r.D * 24 + r.H) * 60 + r.M) * 60 + Math.round(r.S + r.u);
          break;
        default:
          throw "bad abstime format: " + t;
      }
      c = t.length === 3 ? 1 : 2;
      break;
    case 101:
      (l = o), (c = 1);
      break;
  }
  var u = c > 0 ? Pn(l, c) : "";
  return u;
}
function Fa(e) {
  var t = 3;
  if (e.length <= t) return e;
  for (var r = e.length % t, n = e.substr(0, r); r != e.length; r += t)
    n += (n.length > 0 ? "," : "") + e.substr(r, t);
  return n;
}
var _v = /%/g;
function U2(e, t, r) {
  var n = t.replace(_v, ""),
    a = t.length - n.length;
  return aa(e, n, r * Math.pow(10, 2 * a)) + jt("%", a);
}
function $2(e, t, r) {
  for (var n = t.length - 1; t.charCodeAt(n - 1) === 44; ) --n;
  return aa(e, t.substr(0, n), r / Math.pow(10, 3 * (t.length - n)));
}
function Ev(e, t) {
  var r,
    n = e.indexOf("E") - e.indexOf(".") - 1;
  if (e.match(/^#+0.0E\+0$/)) {
    if (t == 0) return "0.0E+0";
    if (t < 0) return "-" + Ev(e, -t);
    var a = e.indexOf(".");
    a === -1 && (a = e.indexOf("E"));
    var i = Math.floor(Math.log(t) * Math.LOG10E) % a;
    if (
      (i < 0 && (i += a),
      (r = (t / Math.pow(10, i)).toPrecision(n + 1 + ((a + i) % a))),
      r.indexOf("e") === -1)
    ) {
      var s = Math.floor(Math.log(t) * Math.LOG10E);
      for (
        r.indexOf(".") === -1
          ? (r = r.charAt(0) + "." + r.substr(1) + "E+" + (s - r.length + i))
          : (r += "E+" + (s - i));
        r.substr(0, 2) === "0.";

      )
        (r = r.charAt(0) + r.substr(2, a) + "." + r.substr(2 + a)),
          (r = r.replace(/^0+([1-9])/, "$1").replace(/^0+\./, "0."));
      r = r.replace(/\+-/, "-");
    }
    r = r.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/, function (o, l, c, u) {
      return l + c + u.substr(0, (a + i) % a) + "." + u.substr(i) + "E";
    });
  } else r = t.toExponential(n);
  return (
    e.match(/E\+00$/) &&
      r.match(/e[+-]\d$/) &&
      (r = r.substr(0, r.length - 1) + "0" + r.charAt(r.length - 1)),
    e.match(/E\-/) && r.match(/e\+/) && (r = r.replace(/e\+/, "e")),
    r.replace("e", "E")
  );
}
var yv = /# (\?+)( ?)\/( ?)(\d+)/;
function H2(e, t, r) {
  var n = parseInt(e[4], 10),
    a = Math.round(t * n),
    i = Math.floor(a / n),
    s = a - i * n,
    o = n;
  return (
    r +
    (i === 0 ? "" : "" + i) +
    " " +
    (s === 0
      ? jt(" ", e[1].length + 1 + e[4].length)
      : B0(s, e[1].length) + e[2] + "/" + e[3] + Pn(o, e[4].length))
  );
}
function W2(e, t, r) {
  return r + (t === 0 ? "" : "" + t) + jt(" ", e[1].length + 2 + e[4].length);
}
var wv = /^#*0*\.([0#]+)/,
  Sv = /\).*[0#]/,
  Tv = /\(###\) ###\\?-####/;
function Rr(e) {
  for (var t = "", r, n = 0; n != e.length; ++n)
    switch ((r = e.charCodeAt(n))) {
      case 35:
        break;
      case 63:
        t += " ";
        break;
      case 48:
        t += "0";
        break;
      default:
        t += String.fromCharCode(r);
    }
  return t;
}
function Xh(e, t) {
  var r = Math.pow(10, t);
  return "" + Math.round(e * r) / r;
}
function Qh(e, t) {
  var r = e - Math.floor(e),
    n = Math.pow(10, t);
  return t < ("" + Math.round(r * n)).length ? 0 : Math.round(r * n);
}
function V2(e, t) {
  return t < ("" + Math.round((e - Math.floor(e)) * Math.pow(10, t))).length
    ? 1
    : 0;
}
function z2(e) {
  return e < 2147483647 && e > -2147483648
    ? "" + (e >= 0 ? e | 0 : (e - 1) | 0)
    : "" + Math.floor(e);
}
function gn(e, t, r) {
  if (e.charCodeAt(0) === 40 && !t.match(Sv)) {
    var n = t.replace(/\( */, "").replace(/ \)/, "").replace(/\)/, "");
    return r >= 0 ? gn("n", n, r) : "(" + gn("n", n, -r) + ")";
  }
  if (t.charCodeAt(t.length - 1) === 44) return $2(e, t, r);
  if (t.indexOf("%") !== -1) return U2(e, t, r);
  if (t.indexOf("E") !== -1) return Ev(t, r);
  if (t.charCodeAt(0) === 36)
    return "$" + gn(e, t.substr(t.charAt(1) == " " ? 2 : 1), r);
  var a,
    i,
    s,
    o,
    l = Math.abs(r),
    c = r < 0 ? "-" : "";
  if (t.match(/^00+$/)) return c + Ni(l, t.length);
  if (t.match(/^[#?]+$/))
    return (
      (a = Ni(r, 0)),
      a === "0" && (a = ""),
      a.length > t.length ? a : Rr(t.substr(0, t.length - a.length)) + a
    );
  if ((i = t.match(yv))) return H2(i, l, c);
  if (t.match(/^#+0+$/)) return c + Ni(l, t.length - t.indexOf("0"));
  if ((i = t.match(wv)))
    return (
      (a = Xh(r, i[1].length)
        .replace(/^([^\.]+)$/, "$1." + Rr(i[1]))
        .replace(/\.$/, "." + Rr(i[1]))
        .replace(/\.(\d*)$/, function (m, p) {
          return "." + p + jt("0", Rr(i[1]).length - p.length);
        })),
      t.indexOf("0.") !== -1 ? a : a.replace(/^0\./, ".")
    );
  if (((t = t.replace(/^#+([0.])/, "$1")), (i = t.match(/^(0*)\.(#*)$/))))
    return (
      c +
      Xh(l, i[2].length)
        .replace(/\.(\d*[1-9])0*$/, ".$1")
        .replace(/^(-?\d*)$/, "$1.")
        .replace(/^0\./, i[1].length ? "0." : ".")
    );
  if ((i = t.match(/^#{1,3},##0(\.?)$/))) return c + Fa(Ni(l, 0));
  if ((i = t.match(/^#,##0\.([#0]*0)$/)))
    return r < 0
      ? "-" + gn(e, t, -r)
      : Fa("" + (Math.floor(r) + V2(r, i[1].length))) +
          "." +
          Pn(Qh(r, i[1].length), i[1].length);
  if ((i = t.match(/^#,#*,#0/))) return gn(e, t.replace(/^#,#*,/, ""), r);
  if ((i = t.match(/^([0#]+)(\\?-([0#]+))+$/)))
    return (
      (a = es(gn(e, t.replace(/[\\-]/g, ""), r))),
      (s = 0),
      es(
        es(t.replace(/\\/g, "")).replace(/[0#]/g, function (m) {
          return s < a.length ? a.charAt(s++) : m === "0" ? "0" : "";
        }),
      )
    );
  if (t.match(Tv))
    return (
      (a = gn(e, "##########", r)),
      "(" + a.substr(0, 3) + ") " + a.substr(3, 3) + "-" + a.substr(6)
    );
  var u = "";
  if ((i = t.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/)))
    return (
      (s = Math.min(i[4].length, 7)),
      (o = sc(l, Math.pow(10, s) - 1, !1)),
      (a = "" + c),
      (u = aa("n", i[1], o[1])),
      u.charAt(u.length - 1) == " " && (u = u.substr(0, u.length - 1) + "0"),
      (a += u + i[2] + "/" + i[3]),
      (u = ac(o[2], s)),
      u.length < i[4].length &&
        (u = Rr(i[4].substr(i[4].length - u.length)) + u),
      (a += u),
      a
    );
  if ((i = t.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/)))
    return (
      (s = Math.min(Math.max(i[1].length, i[4].length), 7)),
      (o = sc(l, Math.pow(10, s) - 1, !0)),
      c +
        (o[0] || (o[1] ? "" : "0")) +
        " " +
        (o[1]
          ? B0(o[1], s) + i[2] + "/" + i[3] + ac(o[2], s)
          : jt(" ", 2 * s + 1 + i[2].length + i[3].length))
    );
  if ((i = t.match(/^[#0?]+$/)))
    return (
      (a = Ni(r, 0)),
      t.length <= a.length ? a : Rr(t.substr(0, t.length - a.length)) + a
    );
  if ((i = t.match(/^([#0?]+)\.([#0]+)$/))) {
    (a = "" + r.toFixed(Math.min(i[2].length, 10)).replace(/([^0])0+$/, "$1")),
      (s = a.indexOf("."));
    var f = t.indexOf(".") - s,
      d = t.length - a.length - f;
    return Rr(t.substr(0, f) + a + t.substr(t.length - d));
  }
  if ((i = t.match(/^00,000\.([#0]*0)$/)))
    return (
      (s = Qh(r, i[1].length)),
      r < 0
        ? "-" + gn(e, t, -r)
        : Fa(z2(r))
            .replace(/^\d,\d{3}$/, "0$&")
            .replace(/^\d*$/, function (m) {
              return "00," + (m.length < 3 ? Pn(0, 3 - m.length) : "") + m;
            }) +
          "." +
          Pn(s, i[1].length)
    );
  switch (t) {
    case "###,##0.00":
      return gn(e, "#,##0.00", r);
    case "###,###":
    case "##,###":
    case "#,###":
      var h = Fa(Ni(l, 0));
      return h !== "0" ? c + h : "";
    case "###,###.00":
      return gn(e, "###,##0.00", r).replace(/^0\./, ".");
    case "#,###.00":
      return gn(e, "#,##0.00", r).replace(/^0\./, ".");
  }
  throw new Error("unsupported format |" + t + "|");
}
function G2(e, t, r) {
  for (var n = t.length - 1; t.charCodeAt(n - 1) === 44; ) --n;
  return aa(e, t.substr(0, n), r / Math.pow(10, 3 * (t.length - n)));
}
function Y2(e, t, r) {
  var n = t.replace(_v, ""),
    a = t.length - n.length;
  return aa(e, n, r * Math.pow(10, 2 * a)) + jt("%", a);
}
function Av(e, t) {
  var r,
    n = e.indexOf("E") - e.indexOf(".") - 1;
  if (e.match(/^#+0.0E\+0$/)) {
    if (t == 0) return "0.0E+0";
    if (t < 0) return "-" + Av(e, -t);
    var a = e.indexOf(".");
    a === -1 && (a = e.indexOf("E"));
    var i = Math.floor(Math.log(t) * Math.LOG10E) % a;
    if (
      (i < 0 && (i += a),
      (r = (t / Math.pow(10, i)).toPrecision(n + 1 + ((a + i) % a))),
      !r.match(/[Ee]/))
    ) {
      var s = Math.floor(Math.log(t) * Math.LOG10E);
      r.indexOf(".") === -1
        ? (r = r.charAt(0) + "." + r.substr(1) + "E+" + (s - r.length + i))
        : (r += "E+" + (s - i)),
        (r = r.replace(/\+-/, "-"));
    }
    r = r.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/, function (o, l, c, u) {
      return l + c + u.substr(0, (a + i) % a) + "." + u.substr(i) + "E";
    });
  } else r = t.toExponential(n);
  return (
    e.match(/E\+00$/) &&
      r.match(/e[+-]\d$/) &&
      (r = r.substr(0, r.length - 1) + "0" + r.charAt(r.length - 1)),
    e.match(/E\-/) && r.match(/e\+/) && (r = r.replace(/e\+/, "e")),
    r.replace("e", "E")
  );
}
function zn(e, t, r) {
  if (e.charCodeAt(0) === 40 && !t.match(Sv)) {
    var n = t.replace(/\( */, "").replace(/ \)/, "").replace(/\)/, "");
    return r >= 0 ? zn("n", n, r) : "(" + zn("n", n, -r) + ")";
  }
  if (t.charCodeAt(t.length - 1) === 44) return G2(e, t, r);
  if (t.indexOf("%") !== -1) return Y2(e, t, r);
  if (t.indexOf("E") !== -1) return Av(t, r);
  if (t.charCodeAt(0) === 36)
    return "$" + zn(e, t.substr(t.charAt(1) == " " ? 2 : 1), r);
  var a,
    i,
    s,
    o,
    l = Math.abs(r),
    c = r < 0 ? "-" : "";
  if (t.match(/^00+$/)) return c + Pn(l, t.length);
  if (t.match(/^[#?]+$/))
    return (
      (a = "" + r),
      r === 0 && (a = ""),
      a.length > t.length ? a : Rr(t.substr(0, t.length - a.length)) + a
    );
  if ((i = t.match(yv))) return W2(i, l, c);
  if (t.match(/^#+0+$/)) return c + Pn(l, t.length - t.indexOf("0"));
  if ((i = t.match(wv)))
    return (
      (a = ("" + r)
        .replace(/^([^\.]+)$/, "$1." + Rr(i[1]))
        .replace(/\.$/, "." + Rr(i[1]))),
      (a = a.replace(/\.(\d*)$/, function (m, p) {
        return "." + p + jt("0", Rr(i[1]).length - p.length);
      })),
      t.indexOf("0.") !== -1 ? a : a.replace(/^0\./, ".")
    );
  if (((t = t.replace(/^#+([0.])/, "$1")), (i = t.match(/^(0*)\.(#*)$/))))
    return (
      c +
      ("" + l)
        .replace(/\.(\d*[1-9])0*$/, ".$1")
        .replace(/^(-?\d*)$/, "$1.")
        .replace(/^0\./, i[1].length ? "0." : ".")
    );
  if ((i = t.match(/^#{1,3},##0(\.?)$/))) return c + Fa("" + l);
  if ((i = t.match(/^#,##0\.([#0]*0)$/)))
    return r < 0 ? "-" + zn(e, t, -r) : Fa("" + r) + "." + jt("0", i[1].length);
  if ((i = t.match(/^#,#*,#0/))) return zn(e, t.replace(/^#,#*,/, ""), r);
  if ((i = t.match(/^([0#]+)(\\?-([0#]+))+$/)))
    return (
      (a = es(zn(e, t.replace(/[\\-]/g, ""), r))),
      (s = 0),
      es(
        es(t.replace(/\\/g, "")).replace(/[0#]/g, function (m) {
          return s < a.length ? a.charAt(s++) : m === "0" ? "0" : "";
        }),
      )
    );
  if (t.match(Tv))
    return (
      (a = zn(e, "##########", r)),
      "(" + a.substr(0, 3) + ") " + a.substr(3, 3) + "-" + a.substr(6)
    );
  var u = "";
  if ((i = t.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/)))
    return (
      (s = Math.min(i[4].length, 7)),
      (o = sc(l, Math.pow(10, s) - 1, !1)),
      (a = "" + c),
      (u = aa("n", i[1], o[1])),
      u.charAt(u.length - 1) == " " && (u = u.substr(0, u.length - 1) + "0"),
      (a += u + i[2] + "/" + i[3]),
      (u = ac(o[2], s)),
      u.length < i[4].length &&
        (u = Rr(i[4].substr(i[4].length - u.length)) + u),
      (a += u),
      a
    );
  if ((i = t.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/)))
    return (
      (s = Math.min(Math.max(i[1].length, i[4].length), 7)),
      (o = sc(l, Math.pow(10, s) - 1, !0)),
      c +
        (o[0] || (o[1] ? "" : "0")) +
        " " +
        (o[1]
          ? B0(o[1], s) + i[2] + "/" + i[3] + ac(o[2], s)
          : jt(" ", 2 * s + 1 + i[2].length + i[3].length))
    );
  if ((i = t.match(/^[#0?]+$/)))
    return (
      (a = "" + r),
      t.length <= a.length ? a : Rr(t.substr(0, t.length - a.length)) + a
    );
  if ((i = t.match(/^([#0]+)\.([#0]+)$/))) {
    (a = "" + r.toFixed(Math.min(i[2].length, 10)).replace(/([^0])0+$/, "$1")),
      (s = a.indexOf("."));
    var f = t.indexOf(".") - s,
      d = t.length - a.length - f;
    return Rr(t.substr(0, f) + a + t.substr(t.length - d));
  }
  if ((i = t.match(/^00,000\.([#0]*0)$/)))
    return r < 0
      ? "-" + zn(e, t, -r)
      : Fa("" + r)
          .replace(/^\d,\d{3}$/, "0$&")
          .replace(/^\d*$/, function (m) {
            return "00," + (m.length < 3 ? Pn(0, 3 - m.length) : "") + m;
          }) +
          "." +
          Pn(0, i[1].length);
  switch (t) {
    case "###,###":
    case "##,###":
    case "#,###":
      var h = Fa("" + l);
      return h !== "0" ? c + h : "";
    default:
      if (t.match(/\.[0#?]*$/))
        return (
          zn(e, t.slice(0, t.lastIndexOf(".")), r) +
          Rr(t.slice(t.lastIndexOf(".")))
        );
  }
  throw new Error("unsupported format |" + t + "|");
}
function aa(e, t, r) {
  return (r | 0) === r ? zn(e, t, r) : gn(e, t, r);
}
function K2(e) {
  for (var t = [], r = !1, n = 0, a = 0; n < e.length; ++n)
    switch (e.charCodeAt(n)) {
      case 34:
        r = !r;
        break;
      case 95:
      case 42:
      case 92:
        ++n;
        break;
      case 59:
        (t[t.length] = e.substr(a, n - a)), (a = n + 1);
    }
  if (((t[t.length] = e.substr(a)), r === !0))
    throw new Error("Format |" + e + "| unterminated string ");
  return t;
}
var Cv = /\[[HhMmSs\u0E0A\u0E19\u0E17]*\]/;
function Dv(e) {
  for (var t = 0, r = "", n = ""; t < e.length; )
    switch ((r = e.charAt(t))) {
      case "G":
        ic(e, t) && (t += 6), t++;
        break;
      case '"':
        for (; e.charCodeAt(++t) !== 34 && t < e.length; );
        ++t;
        break;
      case "\\":
        t += 2;
        break;
      case "_":
        t += 2;
        break;
      case "@":
        ++t;
        break;
      case "B":
      case "b":
        if (e.charAt(t + 1) === "1" || e.charAt(t + 1) === "2") return !0;
      case "M":
      case "D":
      case "Y":
      case "H":
      case "S":
      case "E":
      case "m":
      case "d":
      case "y":
      case "h":
      case "s":
      case "e":
      case "g":
        return !0;
      case "A":
      case "a":
      case "上":
        if (
          e.substr(t, 3).toUpperCase() === "A/P" ||
          e.substr(t, 5).toUpperCase() === "AM/PM" ||
          e.substr(t, 5).toUpperCase() === "上午/下午"
        )
          return !0;
        ++t;
        break;
      case "[":
        for (n = r; e.charAt(t++) !== "]" && t < e.length; ) n += e.charAt(t);
        if (n.match(Cv)) return !0;
        break;
      case ".":
      case "0":
      case "#":
        for (
          ;
          t < e.length &&
          ("0#?.,E+-%".indexOf((r = e.charAt(++t))) > -1 ||
            (r == "\\" &&
              e.charAt(t + 1) == "-" &&
              "0#".indexOf(e.charAt(t + 2)) > -1));

        );
        break;
      case "?":
        for (; e.charAt(++t) === r; );
        break;
      case "*":
        ++t, (e.charAt(t) == " " || e.charAt(t) == "*") && ++t;
        break;
      case "(":
      case ")":
        ++t;
        break;
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        for (; t < e.length && "0123456789".indexOf(e.charAt(++t)) > -1; );
        break;
      case " ":
        ++t;
        break;
      default:
        ++t;
        break;
    }
  return !1;
}
function X2(e, t, r, n) {
  for (
    var a = [], i = "", s = 0, o = "", l = "t", c, u, f, d = "H";
    s < e.length;

  )
    switch ((o = e.charAt(s))) {
      case "G":
        if (!ic(e, s))
          throw new Error("unrecognized character " + o + " in " + e);
        (a[a.length] = { t: "G", v: "General" }), (s += 7);
        break;
      case '"':
        for (i = ""; (f = e.charCodeAt(++s)) !== 34 && s < e.length; )
          i += String.fromCharCode(f);
        (a[a.length] = { t: "t", v: i }), ++s;
        break;
      case "\\":
        var h = e.charAt(++s),
          m = h === "(" || h === ")" ? h : "t";
        (a[a.length] = { t: m, v: h }), ++s;
        break;
      case "_":
        (a[a.length] = { t: "t", v: " " }), (s += 2);
        break;
      case "@":
        (a[a.length] = { t: "T", v: t }), ++s;
        break;
      case "B":
      case "b":
        if (e.charAt(s + 1) === "1" || e.charAt(s + 1) === "2") {
          if (c == null && ((c = dl(t, r, e.charAt(s + 1) === "2")), c == null))
            return "";
          (a[a.length] = { t: "X", v: e.substr(s, 2) }), (l = o), (s += 2);
          break;
        }
      case "M":
      case "D":
      case "Y":
      case "H":
      case "S":
      case "E":
        o = o.toLowerCase();
      case "m":
      case "d":
      case "y":
      case "h":
      case "s":
      case "e":
      case "g":
        if (t < 0 || (c == null && ((c = dl(t, r)), c == null))) return "";
        for (i = o; ++s < e.length && e.charAt(s).toLowerCase() === o; ) i += o;
        o === "m" && l.toLowerCase() === "h" && (o = "M"),
          o === "h" && (o = d),
          (a[a.length] = { t: o, v: i }),
          (l = o);
        break;
      case "A":
      case "a":
      case "上":
        var p = { t: o, v: o };
        if (
          (c == null && (c = dl(t, r)),
          e.substr(s, 3).toUpperCase() === "A/P"
            ? (c != null && (p.v = c.H >= 12 ? "P" : "A"),
              (p.t = "T"),
              (d = "h"),
              (s += 3))
            : e.substr(s, 5).toUpperCase() === "AM/PM"
              ? (c != null && (p.v = c.H >= 12 ? "PM" : "AM"),
                (p.t = "T"),
                (s += 5),
                (d = "h"))
              : e.substr(s, 5).toUpperCase() === "上午/下午"
                ? (c != null && (p.v = c.H >= 12 ? "下午" : "上午"),
                  (p.t = "T"),
                  (s += 5),
                  (d = "h"))
                : ((p.t = "t"), ++s),
          c == null && p.t === "T")
        )
          return "";
        (a[a.length] = p), (l = o);
        break;
      case "[":
        for (i = o; e.charAt(s++) !== "]" && s < e.length; ) i += e.charAt(s);
        if (i.slice(-1) !== "]") throw 'unterminated "[" block: |' + i + "|";
        if (i.match(Cv)) {
          if (c == null && ((c = dl(t, r)), c == null)) return "";
          (a[a.length] = { t: "Z", v: i.toLowerCase() }), (l = i.charAt(1));
        } else
          i.indexOf("$") > -1 &&
            ((i = (i.match(/\$([^-\[\]]*)/) || [])[1] || "$"),
            Dv(e) || (a[a.length] = { t: "t", v: i }));
        break;
      case ".":
        if (c != null) {
          for (i = o; ++s < e.length && (o = e.charAt(s)) === "0"; ) i += o;
          a[a.length] = { t: "s", v: i };
          break;
        }
      case "0":
      case "#":
        for (
          i = o;
          ++s < e.length && "0#?.,E+-%".indexOf((o = e.charAt(s))) > -1;

        )
          i += o;
        a[a.length] = { t: "n", v: i };
        break;
      case "?":
        for (i = o; e.charAt(++s) === o; ) i += o;
        (a[a.length] = { t: o, v: i }), (l = o);
        break;
      case "*":
        ++s, (e.charAt(s) == " " || e.charAt(s) == "*") && ++s;
        break;
      case "(":
      case ")":
        (a[a.length] = { t: n === 1 ? "t" : o, v: o }), ++s;
        break;
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        for (i = o; s < e.length && "0123456789".indexOf(e.charAt(++s)) > -1; )
          i += e.charAt(s);
        a[a.length] = { t: "D", v: i };
        break;
      case " ":
        (a[a.length] = { t: o, v: o }), ++s;
        break;
      case "$":
        (a[a.length] = { t: "t", v: "$" }), ++s;
        break;
      default:
        if (",$-+/():!^&'~{}<>=€acfijklopqrtuvwxzP".indexOf(o) === -1)
          throw new Error("unrecognized character " + o + " in " + e);
        (a[a.length] = { t: "t", v: o }), ++s;
        break;
    }
  var x = 0,
    _ = 0,
    v;
  for (s = a.length - 1, l = "t"; s >= 0; --s)
    switch (a[s].t) {
      case "h":
      case "H":
        (a[s].t = d), (l = "h"), x < 1 && (x = 1);
        break;
      case "s":
        (v = a[s].v.match(/\.0+$/)) && (_ = Math.max(_, v[0].length - 1)),
          x < 3 && (x = 3);
      case "d":
      case "y":
      case "M":
      case "e":
        l = a[s].t;
        break;
      case "m":
        l === "s" && ((a[s].t = "M"), x < 2 && (x = 2));
        break;
      case "X":
        break;
      case "Z":
        x < 1 && a[s].v.match(/[Hh]/) && (x = 1),
          x < 2 && a[s].v.match(/[Mm]/) && (x = 2),
          x < 3 && a[s].v.match(/[Ss]/) && (x = 3);
    }
  switch (x) {
    case 0:
      break;
    case 1:
      c.u >= 0.5 && ((c.u = 0), ++c.S),
        c.S >= 60 && ((c.S = 0), ++c.M),
        c.M >= 60 && ((c.M = 0), ++c.H);
      break;
    case 2:
      c.u >= 0.5 && ((c.u = 0), ++c.S), c.S >= 60 && ((c.S = 0), ++c.M);
      break;
  }
  var g = "",
    S;
  for (s = 0; s < a.length; ++s)
    switch (a[s].t) {
      case "t":
      case "T":
      case " ":
      case "D":
        break;
      case "X":
        (a[s].v = ""), (a[s].t = ";");
        break;
      case "d":
      case "m":
      case "y":
      case "h":
      case "H":
      case "M":
      case "s":
      case "e":
      case "b":
      case "Z":
        (a[s].v = j2(a[s].t.charCodeAt(0), a[s].v, c, _)), (a[s].t = "t");
        break;
      case "n":
      case "?":
        for (
          S = s + 1;
          a[S] != null &&
          ((o = a[S].t) === "?" ||
            o === "D" ||
            ((o === " " || o === "t") &&
              a[S + 1] != null &&
              (a[S + 1].t === "?" ||
                (a[S + 1].t === "t" && a[S + 1].v === "/"))) ||
            (a[s].t === "(" && (o === " " || o === "n" || o === ")")) ||
            (o === "t" &&
              (a[S].v === "/" ||
                (a[S].v === " " && a[S + 1] != null && a[S + 1].t == "?"))));

        )
          (a[s].v += a[S].v), (a[S] = { v: "", t: ";" }), ++S;
        (g += a[s].v), (s = S - 1);
        break;
      case "G":
        (a[s].t = "t"), (a[s].v = Of(t, r));
        break;
    }
  var b = "",
    C,
    D;
  if (g.length > 0) {
    g.charCodeAt(0) == 40
      ? ((C = t < 0 && g.charCodeAt(0) === 45 ? -t : t), (D = aa("n", g, C)))
      : ((C = t < 0 && n > 1 ? -t : t),
        (D = aa("n", g, C)),
        C < 0 &&
          a[0] &&
          a[0].t == "t" &&
          ((D = D.substr(1)), (a[0].v = "-" + a[0].v))),
      (S = D.length - 1);
    var A = a.length;
    for (s = 0; s < a.length; ++s)
      if (a[s] != null && a[s].t != "t" && a[s].v.indexOf(".") > -1) {
        A = s;
        break;
      }
    var F = a.length;
    if (A === a.length && D.indexOf("E") === -1) {
      for (s = a.length - 1; s >= 0; --s)
        a[s] == null ||
          "n?".indexOf(a[s].t) === -1 ||
          (S >= a[s].v.length - 1
            ? ((S -= a[s].v.length), (a[s].v = D.substr(S + 1, a[s].v.length)))
            : S < 0
              ? (a[s].v = "")
              : ((a[s].v = D.substr(0, S + 1)), (S = -1)),
          (a[s].t = "t"),
          (F = s));
      S >= 0 && F < a.length && (a[F].v = D.substr(0, S + 1) + a[F].v);
    } else if (A !== a.length && D.indexOf("E") === -1) {
      for (S = D.indexOf(".") - 1, s = A; s >= 0; --s)
        if (!(a[s] == null || "n?".indexOf(a[s].t) === -1)) {
          for (
            u =
              a[s].v.indexOf(".") > -1 && s === A
                ? a[s].v.indexOf(".") - 1
                : a[s].v.length - 1,
              b = a[s].v.substr(u + 1);
            u >= 0;
            --u
          )
            S >= 0 &&
              (a[s].v.charAt(u) === "0" || a[s].v.charAt(u) === "#") &&
              (b = D.charAt(S--) + b);
          (a[s].v = b), (a[s].t = "t"), (F = s);
        }
      for (
        S >= 0 && F < a.length && (a[F].v = D.substr(0, S + 1) + a[F].v),
          S = D.indexOf(".") + 1,
          s = A;
        s < a.length;
        ++s
      )
        if (!(a[s] == null || ("n?(".indexOf(a[s].t) === -1 && s !== A))) {
          for (
            u =
              a[s].v.indexOf(".") > -1 && s === A ? a[s].v.indexOf(".") + 1 : 0,
              b = a[s].v.substr(0, u);
            u < a[s].v.length;
            ++u
          )
            S < D.length && (b += D.charAt(S++));
          (a[s].v = b), (a[s].t = "t"), (F = s);
        }
    }
  }
  for (s = 0; s < a.length; ++s)
    a[s] != null &&
      "n?".indexOf(a[s].t) > -1 &&
      ((C = n > 1 && t < 0 && s > 0 && a[s - 1].v === "-" ? -t : t),
      (a[s].v = aa(a[s].t, a[s].v, C)),
      (a[s].t = "t"));
  var I = "";
  for (s = 0; s !== a.length; ++s) a[s] != null && (I += a[s].v);
  return I;
}
var Jh = /\[(=|>[=]?|<[>=]?)(-?\d+(?:\.\d*)?)\]/;
function Zh(e, t) {
  if (t == null) return !1;
  var r = parseFloat(t[2]);
  switch (t[1]) {
    case "=":
      if (e == r) return !0;
      break;
    case ">":
      if (e > r) return !0;
      break;
    case "<":
      if (e < r) return !0;
      break;
    case "<>":
      if (e != r) return !0;
      break;
    case ">=":
      if (e >= r) return !0;
      break;
    case "<=":
      if (e <= r) return !0;
      break;
  }
  return !1;
}
function Q2(e, t) {
  var r = K2(e),
    n = r.length,
    a = r[n - 1].indexOf("@");
  if ((n < 4 && a > -1 && --n, r.length > 4))
    throw new Error("cannot find right format for |" + r.join("|") + "|");
  if (typeof t != "number")
    return [4, r.length === 4 || a > -1 ? r[r.length - 1] : "@"];
  switch (r.length) {
    case 1:
      r =
        a > -1
          ? ["General", "General", "General", r[0]]
          : [r[0], r[0], r[0], "@"];
      break;
    case 2:
      r = a > -1 ? [r[0], r[0], r[0], r[1]] : [r[0], r[1], r[0], "@"];
      break;
    case 3:
      r = a > -1 ? [r[0], r[1], r[0], r[2]] : [r[0], r[1], r[2], "@"];
      break;
  }
  var i = t > 0 ? r[0] : t < 0 ? r[1] : r[2];
  if (r[0].indexOf("[") === -1 && r[1].indexOf("[") === -1) return [n, i];
  if (r[0].match(/\[[=<>]/) != null || r[1].match(/\[[=<>]/) != null) {
    var s = r[0].match(Jh),
      o = r[1].match(Jh);
    return Zh(t, s)
      ? [n, r[0]]
      : Zh(t, o)
        ? [n, r[1]]
        : [n, r[s != null && o != null ? 2 : 1]];
  }
  return [n, i];
}
function Ha(e, t, r) {
  r == null && (r = {});
  var n = "";
  switch (typeof e) {
    case "string":
      e == "m/d/yy" && r.dateNF ? (n = r.dateNF) : (n = e);
      break;
    case "number":
      e == 14 && r.dateNF
        ? (n = r.dateNF)
        : (n = (r.table != null ? r.table : Ut)[e]),
        n == null && (n = (r.table && r.table[Kh[e]]) || Ut[Kh[e]]),
        n == null && (n = k2[e] || "General");
      break;
  }
  if (ic(n, 0)) return Of(t, r);
  t instanceof Date && (t = xv(t, r.date1904));
  var a = Q2(n, t);
  if (ic(a[1])) return Of(t, r);
  if (t === !0) t = "TRUE";
  else if (t === !1) t = "FALSE";
  else if (t === "" || t == null) return "";
  return X2(a[1], t, r, a[0]);
}
function Lv(e, t) {
  if (typeof t != "number") {
    t = +t || -1;
    for (var r = 0; r < 392; ++r) {
      if (Ut[r] == null) {
        t < 0 && (t = r);
        continue;
      }
      if (Ut[r] == e) {
        t = r;
        break;
      }
    }
    t < 0 && (t = 391);
  }
  return (Ut[t] = e), t;
}
function bc(e) {
  for (var t = 0; t != 392; ++t) e[t] !== void 0 && Lv(e[t], t);
}
function Bc() {
  Ut = F2();
}
var Nv = /[dD]+|[mM]+|[yYeE]+|[Hh]+|[Ss]+/g;
function J2(e) {
  var t = typeof e == "number" ? Ut[e] : e;
  return (t = t.replace(Nv, "(\\d+)")), new RegExp("^" + t + "$");
}
function Z2(e, t, r) {
  var n = -1,
    a = -1,
    i = -1,
    s = -1,
    o = -1,
    l = -1;
  (t.match(Nv) || []).forEach(function (f, d) {
    var h = parseInt(r[d + 1], 10);
    switch (f.toLowerCase().charAt(0)) {
      case "y":
        n = h;
        break;
      case "d":
        i = h;
        break;
      case "h":
        s = h;
        break;
      case "s":
        l = h;
        break;
      case "m":
        s >= 0 ? (o = h) : (a = h);
        break;
    }
  }),
    l >= 0 && o == -1 && a >= 0 && ((o = a), (a = -1));
  var c =
    ("" + (n >= 0 ? n : new Date().getFullYear())).slice(-4) +
    "-" +
    ("00" + (a >= 1 ? a : 1)).slice(-2) +
    "-" +
    ("00" + (i >= 1 ? i : 1)).slice(-2);
  c.length == 7 && (c = "0" + c), c.length == 8 && (c = "20" + c);
  var u =
    ("00" + (s >= 0 ? s : 0)).slice(-2) +
    ":" +
    ("00" + (o >= 0 ? o : 0)).slice(-2) +
    ":" +
    ("00" + (l >= 0 ? l : 0)).slice(-2);
  return s == -1 && o == -1 && l == -1
    ? c
    : n == -1 && a == -1 && i == -1
      ? u
      : c + "T" + u;
}
var q2 = (function () {
    var e = {};
    e.version = "1.2.0";
    function t() {
      for (var D = 0, A = new Array(256), F = 0; F != 256; ++F)
        (D = F),
          (D = D & 1 ? -306674912 ^ (D >>> 1) : D >>> 1),
          (D = D & 1 ? -306674912 ^ (D >>> 1) : D >>> 1),
          (D = D & 1 ? -306674912 ^ (D >>> 1) : D >>> 1),
          (D = D & 1 ? -306674912 ^ (D >>> 1) : D >>> 1),
          (D = D & 1 ? -306674912 ^ (D >>> 1) : D >>> 1),
          (D = D & 1 ? -306674912 ^ (D >>> 1) : D >>> 1),
          (D = D & 1 ? -306674912 ^ (D >>> 1) : D >>> 1),
          (D = D & 1 ? -306674912 ^ (D >>> 1) : D >>> 1),
          (A[F] = D);
      return typeof Int32Array < "u" ? new Int32Array(A) : A;
    }
    var r = t();
    function n(D) {
      var A = 0,
        F = 0,
        I = 0,
        P = typeof Int32Array < "u" ? new Int32Array(4096) : new Array(4096);
      for (I = 0; I != 256; ++I) P[I] = D[I];
      for (I = 0; I != 256; ++I)
        for (F = D[I], A = 256 + I; A < 4096; A += 256)
          F = P[A] = (F >>> 8) ^ D[F & 255];
      var B = [];
      for (I = 1; I != 16; ++I)
        B[I - 1] =
          typeof Int32Array < "u"
            ? P.subarray(I * 256, I * 256 + 256)
            : P.slice(I * 256, I * 256 + 256);
      return B;
    }
    var a = n(r),
      i = a[0],
      s = a[1],
      o = a[2],
      l = a[3],
      c = a[4],
      u = a[5],
      f = a[6],
      d = a[7],
      h = a[8],
      m = a[9],
      p = a[10],
      x = a[11],
      _ = a[12],
      v = a[13],
      g = a[14];
    function S(D, A) {
      for (var F = A ^ -1, I = 0, P = D.length; I < P; )
        F = (F >>> 8) ^ r[(F ^ D.charCodeAt(I++)) & 255];
      return ~F;
    }
    function b(D, A) {
      for (var F = A ^ -1, I = D.length - 15, P = 0; P < I; )
        F =
          g[D[P++] ^ (F & 255)] ^
          v[D[P++] ^ ((F >> 8) & 255)] ^
          _[D[P++] ^ ((F >> 16) & 255)] ^
          x[D[P++] ^ (F >>> 24)] ^
          p[D[P++]] ^
          m[D[P++]] ^
          h[D[P++]] ^
          d[D[P++]] ^
          f[D[P++]] ^
          u[D[P++]] ^
          c[D[P++]] ^
          l[D[P++]] ^
          o[D[P++]] ^
          s[D[P++]] ^
          i[D[P++]] ^
          r[D[P++]];
      for (I += 15; P < I; ) F = (F >>> 8) ^ r[(F ^ D[P++]) & 255];
      return ~F;
    }
    function C(D, A) {
      for (var F = A ^ -1, I = 0, P = D.length, B = 0, X = 0; I < P; )
        (B = D.charCodeAt(I++)),
          B < 128
            ? (F = (F >>> 8) ^ r[(F ^ B) & 255])
            : B < 2048
              ? ((F = (F >>> 8) ^ r[(F ^ (192 | ((B >> 6) & 31))) & 255]),
                (F = (F >>> 8) ^ r[(F ^ (128 | (B & 63))) & 255]))
              : B >= 55296 && B < 57344
                ? ((B = (B & 1023) + 64),
                  (X = D.charCodeAt(I++) & 1023),
                  (F = (F >>> 8) ^ r[(F ^ (240 | ((B >> 8) & 7))) & 255]),
                  (F = (F >>> 8) ^ r[(F ^ (128 | ((B >> 2) & 63))) & 255]),
                  (F =
                    (F >>> 8) ^
                    r[(F ^ (128 | ((X >> 6) & 15) | ((B & 3) << 4))) & 255]),
                  (F = (F >>> 8) ^ r[(F ^ (128 | (X & 63))) & 255]))
                : ((F = (F >>> 8) ^ r[(F ^ (224 | ((B >> 12) & 15))) & 255]),
                  (F = (F >>> 8) ^ r[(F ^ (128 | ((B >> 6) & 63))) & 255]),
                  (F = (F >>> 8) ^ r[(F ^ (128 | (B & 63))) & 255]));
      return ~F;
    }
    return (e.table = r), (e.bstr = S), (e.buf = b), (e.str = C), e;
  })(),
  yt = (function () {
    var t = {};
    t.version = "1.2.1";
    function r(E, T) {
      for (
        var y = E.split("/"),
          w = T.split("/"),
          L = 0,
          N = 0,
          W = Math.min(y.length, w.length);
        L < W;
        ++L
      ) {
        if ((N = y[L].length - w[L].length)) return N;
        if (y[L] != w[L]) return y[L] < w[L] ? -1 : 1;
      }
      return y.length - w.length;
    }
    function n(E) {
      if (E.charAt(E.length - 1) == "/")
        return E.slice(0, -1).indexOf("/") === -1 ? E : n(E.slice(0, -1));
      var T = E.lastIndexOf("/");
      return T === -1 ? E : E.slice(0, T + 1);
    }
    function a(E) {
      if (E.charAt(E.length - 1) == "/") return a(E.slice(0, -1));
      var T = E.lastIndexOf("/");
      return T === -1 ? E : E.slice(T + 1);
    }
    function i(E, T) {
      typeof T == "string" && (T = new Date(T));
      var y = T.getHours();
      (y = (y << 6) | T.getMinutes()),
        (y = (y << 5) | (T.getSeconds() >>> 1)),
        E.write_shift(2, y);
      var w = T.getFullYear() - 1980;
      (w = (w << 4) | (T.getMonth() + 1)),
        (w = (w << 5) | T.getDate()),
        E.write_shift(2, w);
    }
    function s(E) {
      var T = E.read_shift(2) & 65535,
        y = E.read_shift(2) & 65535,
        w = new Date(),
        L = y & 31;
      y >>>= 5;
      var N = y & 15;
      (y >>>= 4),
        w.setMilliseconds(0),
        w.setFullYear(y + 1980),
        w.setMonth(N - 1),
        w.setDate(L);
      var W = T & 31;
      T >>>= 5;
      var ee = T & 63;
      return (
        (T >>>= 6), w.setHours(T), w.setMinutes(ee), w.setSeconds(W << 1), w
      );
    }
    function o(E) {
      nn(E, 0);
      for (var T = {}, y = 0; E.l <= E.length - 4; ) {
        var w = E.read_shift(2),
          L = E.read_shift(2),
          N = E.l + L,
          W = {};
        switch (w) {
          case 21589:
            (y = E.read_shift(1)),
              y & 1 && (W.mtime = E.read_shift(4)),
              L > 5 &&
                (y & 2 && (W.atime = E.read_shift(4)),
                y & 4 && (W.ctime = E.read_shift(4))),
              W.mtime && (W.mt = new Date(W.mtime * 1e3));
            break;
        }
        (E.l = N), (T[w] = W);
      }
      return T;
    }
    var l;
    function c() {
      return l || (l = {});
    }
    function u(E, T) {
      if (E[0] == 80 && E[1] == 75) return pn(E, T);
      if ((E[0] | 32) == 109 && (E[1] | 32) == 105) return er(E, T);
      if (E.length < 512)
        throw new Error("CFB file size " + E.length + " < 512");
      var y = 3,
        w = 512,
        L = 0,
        N = 0,
        W = 0,
        ee = 0,
        Y = 0,
        G = [],
        J = E.slice(0, 512);
      nn(J, 0);
      var ue = f(J);
      switch (((y = ue[0]), y)) {
        case 3:
          w = 512;
          break;
        case 4:
          w = 4096;
          break;
        case 0:
          if (ue[1] == 0) return pn(E, T);
        default:
          throw new Error("Major Version: Expected 3 or 4 saw " + y);
      }
      w !== 512 && ((J = E.slice(0, w)), nn(J, 28));
      var Te = E.slice(0, w);
      d(J, y);
      var Ne = J.read_shift(4, "i");
      if (y === 3 && Ne !== 0)
        throw new Error("# Directory Sectors: Expected 0 saw " + Ne);
      (J.l += 4),
        (W = J.read_shift(4, "i")),
        (J.l += 4),
        J.chk("00100000", "Mini Stream Cutoff Size: "),
        (ee = J.read_shift(4, "i")),
        (L = J.read_shift(4, "i")),
        (Y = J.read_shift(4, "i")),
        (N = J.read_shift(4, "i"));
      for (
        var me = -1, Le = 0;
        Le < 109 && ((me = J.read_shift(4, "i")), !(me < 0));
        ++Le
      )
        G[Le] = me;
      var ze = h(E, w);
      x(Y, N, ze, w, G);
      var ot = v(ze, W, G, w);
      (ot[W].name = "!Directory"),
        L > 0 && ee !== X && (ot[ee].name = "!MiniFAT"),
        (ot[G[0]].name = "!FAT"),
        (ot.fat_addrs = G),
        (ot.ssz = w);
      var ht = {},
        kt = [],
        Qe = [],
        rt = [];
      g(W, ot, ze, kt, L, ht, Qe, ee), m(Qe, rt, kt), kt.shift();
      var Tt = { FileIndex: Qe, FullPaths: rt };
      return T && T.raw && (Tt.raw = { header: Te, sectors: ze }), Tt;
    }
    function f(E) {
      if (E[E.l] == 80 && E[E.l + 1] == 75) return [0, 0];
      E.chk(ae, "Header Signature: "), (E.l += 16);
      var T = E.read_shift(2, "u");
      return [E.read_shift(2, "u"), T];
    }
    function d(E, T) {
      var y = 9;
      switch (((E.l += 2), (y = E.read_shift(2)))) {
        case 9:
          if (T != 3) throw new Error("Sector Shift: Expected 9 saw " + y);
          break;
        case 12:
          if (T != 4) throw new Error("Sector Shift: Expected 12 saw " + y);
          break;
        default:
          throw new Error("Sector Shift: Expected 9 or 12 saw " + y);
      }
      E.chk("0600", "Mini Sector Shift: "), E.chk("000000000000", "Reserved: ");
    }
    function h(E, T) {
      for (var y = Math.ceil(E.length / T) - 1, w = [], L = 1; L < y; ++L)
        w[L - 1] = E.slice(L * T, (L + 1) * T);
      return (w[y - 1] = E.slice(y * T)), w;
    }
    function m(E, T, y) {
      for (
        var w = 0, L = 0, N = 0, W = 0, ee = 0, Y = y.length, G = [], J = [];
        w < Y;
        ++w
      )
        (G[w] = J[w] = w), (T[w] = y[w]);
      for (; ee < J.length; ++ee)
        (w = J[ee]),
          (L = E[w].L),
          (N = E[w].R),
          (W = E[w].C),
          G[w] === w &&
            (L !== -1 && G[L] !== L && (G[w] = G[L]),
            N !== -1 && G[N] !== N && (G[w] = G[N])),
          W !== -1 && (G[W] = w),
          L !== -1 &&
            w != G[w] &&
            ((G[L] = G[w]), J.lastIndexOf(L) < ee && J.push(L)),
          N !== -1 &&
            w != G[w] &&
            ((G[N] = G[w]), J.lastIndexOf(N) < ee && J.push(N));
      for (w = 1; w < Y; ++w)
        G[w] === w &&
          (N !== -1 && G[N] !== N
            ? (G[w] = G[N])
            : L !== -1 && G[L] !== L && (G[w] = G[L]));
      for (w = 1; w < Y; ++w)
        if (E[w].type !== 0) {
          if (((ee = w), ee != G[ee]))
            do (ee = G[ee]), (T[w] = T[ee] + "/" + T[w]);
            while (ee !== 0 && G[ee] !== -1 && ee != G[ee]);
          G[w] = -1;
        }
      for (T[0] += "/", w = 1; w < Y; ++w) E[w].type !== 2 && (T[w] += "/");
    }
    function p(E, T, y) {
      for (var w = E.start, L = E.size, N = [], W = w; y && L > 0 && W >= 0; )
        N.push(T.slice(W * B, W * B + B)), (L -= B), (W = ei(y, W * 4));
      return N.length === 0 ? ne(0) : vr(N).slice(0, E.size);
    }
    function x(E, T, y, w, L) {
      var N = X;
      if (E === X) {
        if (T !== 0) throw new Error("DIFAT chain shorter than expected");
      } else if (E !== -1) {
        var W = y[E],
          ee = (w >>> 2) - 1;
        if (!W) return;
        for (var Y = 0; Y < ee && (N = ei(W, Y * 4)) !== X; ++Y) L.push(N);
        x(ei(W, w - 4), T - 1, y, w, L);
      }
    }
    function _(E, T, y, w, L) {
      var N = [],
        W = [];
      L || (L = []);
      var ee = w - 1,
        Y = 0,
        G = 0;
      for (Y = T; Y >= 0; ) {
        (L[Y] = !0), (N[N.length] = Y), W.push(E[Y]);
        var J = y[Math.floor((Y * 4) / w)];
        if (((G = (Y * 4) & ee), w < 4 + G))
          throw new Error("FAT boundary crossed: " + Y + " 4 " + w);
        if (!E[J]) break;
        Y = ei(E[J], G);
      }
      return { nodes: N, data: sp([W]) };
    }
    function v(E, T, y, w) {
      var L = E.length,
        N = [],
        W = [],
        ee = [],
        Y = [],
        G = w - 1,
        J = 0,
        ue = 0,
        Te = 0,
        Ne = 0;
      for (J = 0; J < L; ++J)
        if (((ee = []), (Te = J + T), Te >= L && (Te -= L), !W[Te])) {
          Y = [];
          var me = [];
          for (ue = Te; ue >= 0; ) {
            (me[ue] = !0), (W[ue] = !0), (ee[ee.length] = ue), Y.push(E[ue]);
            var Le = y[Math.floor((ue * 4) / w)];
            if (((Ne = (ue * 4) & G), w < 4 + Ne))
              throw new Error("FAT boundary crossed: " + ue + " 4 " + w);
            if (!E[Le] || ((ue = ei(E[Le], Ne)), me[ue])) break;
          }
          N[Te] = { nodes: ee, data: sp([Y]) };
        }
      return N;
    }
    function g(E, T, y, w, L, N, W, ee) {
      for (
        var Y = 0, G = w.length ? 2 : 0, J = T[E].data, ue = 0, Te = 0, Ne;
        ue < J.length;
        ue += 128
      ) {
        var me = J.slice(ue, ue + 128);
        nn(me, 64),
          (Te = me.read_shift(2)),
          (Ne = V0(me, 0, Te - G)),
          w.push(Ne);
        var Le = {
            name: Ne,
            type: me.read_shift(1),
            color: me.read_shift(1),
            L: me.read_shift(4, "i"),
            R: me.read_shift(4, "i"),
            C: me.read_shift(4, "i"),
            clsid: me.read_shift(16),
            state: me.read_shift(4, "i"),
            start: 0,
            size: 0,
          },
          ze =
            me.read_shift(2) +
            me.read_shift(2) +
            me.read_shift(2) +
            me.read_shift(2);
        ze !== 0 && (Le.ct = S(me, me.l - 8));
        var ot =
          me.read_shift(2) +
          me.read_shift(2) +
          me.read_shift(2) +
          me.read_shift(2);
        ot !== 0 && (Le.mt = S(me, me.l - 8)),
          (Le.start = me.read_shift(4, "i")),
          (Le.size = me.read_shift(4, "i")),
          Le.size < 0 &&
            Le.start < 0 &&
            ((Le.size = Le.type = 0), (Le.start = X), (Le.name = "")),
          Le.type === 5
            ? ((Y = Le.start), L > 0 && Y !== X && (T[Y].name = "!StreamData"))
            : Le.size >= 4096
              ? ((Le.storage = "fat"),
                T[Le.start] === void 0 &&
                  (T[Le.start] = _(y, Le.start, T.fat_addrs, T.ssz)),
                (T[Le.start].name = Le.name),
                (Le.content = T[Le.start].data.slice(0, Le.size)))
              : ((Le.storage = "minifat"),
                Le.size < 0
                  ? (Le.size = 0)
                  : Y !== X &&
                    Le.start !== X &&
                    T[Y] &&
                    (Le.content = p(Le, T[Y].data, (T[ee] || {}).data))),
          Le.content && nn(Le.content, 0),
          (N[Ne] = Le),
          W.push(Le);
      }
    }
    function S(E, T) {
      return new Date(
        ((on(E, T + 4) / 1e7) * Math.pow(2, 32) +
          on(E, T) / 1e7 -
          11644473600) *
          1e3,
      );
    }
    function b(E, T) {
      return c(), u(l.readFileSync(E), T);
    }
    function C(E, T) {
      var y = T && T.type;
      switch (
        (y || (ft && Buffer.isBuffer(E) && (y = "buffer")), y || "base64")
      ) {
        case "file":
          return b(E, T);
        case "base64":
          return u(In(fa(E)), T);
        case "binary":
          return u(In(E), T);
      }
      return u(E, T);
    }
    function D(E, T) {
      var y = T || {},
        w = y.root || "Root Entry";
      if (
        (E.FullPaths || (E.FullPaths = []),
        E.FileIndex || (E.FileIndex = []),
        E.FullPaths.length !== E.FileIndex.length)
      )
        throw new Error("inconsistent CFB structure");
      E.FullPaths.length === 0 &&
        ((E.FullPaths[0] = w + "/"), (E.FileIndex[0] = { name: w, type: 5 })),
        y.CLSID && (E.FileIndex[0].clsid = y.CLSID),
        A(E);
    }
    function A(E) {
      var T = "Sh33tJ5";
      if (!yt.find(E, "/" + T)) {
        var y = ne(4);
        (y[0] = 55),
          (y[1] = y[3] = 50),
          (y[2] = 54),
          E.FileIndex.push({
            name: T,
            type: 2,
            content: y,
            size: 4,
            L: 69,
            R: 69,
            C: 69,
          }),
          E.FullPaths.push(E.FullPaths[0] + T),
          F(E);
      }
    }
    function F(E, T) {
      D(E);
      for (var y = !1, w = !1, L = E.FullPaths.length - 1; L >= 0; --L) {
        var N = E.FileIndex[L];
        switch (N.type) {
          case 0:
            w ? (y = !0) : (E.FileIndex.pop(), E.FullPaths.pop());
            break;
          case 1:
          case 2:
          case 5:
            (w = !0),
              isNaN(N.R * N.L * N.C) && (y = !0),
              N.R > -1 && N.L > -1 && N.R == N.L && (y = !0);
            break;
          default:
            y = !0;
            break;
        }
      }
      if (!(!y && !T)) {
        var W = new Date(1987, 1, 19),
          ee = 0,
          Y = Object.create ? Object.create(null) : {},
          G = [];
        for (L = 0; L < E.FullPaths.length; ++L)
          (Y[E.FullPaths[L]] = !0),
            E.FileIndex[L].type !== 0 &&
              G.push([E.FullPaths[L], E.FileIndex[L]]);
        for (L = 0; L < G.length; ++L) {
          var J = n(G[L][0]);
          (w = Y[J]),
            w ||
              (G.push([
                J,
                {
                  name: a(J).replace("/", ""),
                  type: 1,
                  clsid: Re,
                  ct: W,
                  mt: W,
                  content: null,
                },
              ]),
              (Y[J] = !0));
        }
        for (
          G.sort(function (Ne, me) {
            return r(Ne[0], me[0]);
          }),
            E.FullPaths = [],
            E.FileIndex = [],
            L = 0;
          L < G.length;
          ++L
        )
          (E.FullPaths[L] = G[L][0]), (E.FileIndex[L] = G[L][1]);
        for (L = 0; L < G.length; ++L) {
          var ue = E.FileIndex[L],
            Te = E.FullPaths[L];
          if (
            ((ue.name = a(Te).replace("/", "")),
            (ue.L = ue.R = ue.C = -(ue.color = 1)),
            (ue.size = ue.content ? ue.content.length : 0),
            (ue.start = 0),
            (ue.clsid = ue.clsid || Re),
            L === 0)
          )
            (ue.C = G.length > 1 ? 1 : -1), (ue.size = 0), (ue.type = 5);
          else if (Te.slice(-1) == "/") {
            for (ee = L + 1; ee < G.length && n(E.FullPaths[ee]) != Te; ++ee);
            for (
              ue.C = ee >= G.length ? -1 : ee, ee = L + 1;
              ee < G.length && n(E.FullPaths[ee]) != n(Te);
              ++ee
            );
            (ue.R = ee >= G.length ? -1 : ee), (ue.type = 1);
          } else
            n(E.FullPaths[L + 1] || "") == n(Te) && (ue.R = L + 1),
              (ue.type = 2);
        }
      }
    }
    function I(E, T) {
      var y = T || {};
      if (y.fileType == "mad") return j(E, y);
      switch ((F(E), y.fileType)) {
        case "zip":
          return Lr(E, y);
      }
      var w = (function (Ne) {
          for (var me = 0, Le = 0, ze = 0; ze < Ne.FileIndex.length; ++ze) {
            var ot = Ne.FileIndex[ze];
            if (ot.content) {
              var ht = ot.content.length;
              ht > 0 &&
                (ht < 4096 ? (me += (ht + 63) >> 6) : (Le += (ht + 511) >> 9));
            }
          }
          for (
            var kt = (Ne.FullPaths.length + 3) >> 2,
              Qe = (me + 7) >> 3,
              rt = (me + 127) >> 7,
              Tt = Qe + Le + kt + rt,
              fr = (Tt + 127) >> 7,
              At = fr <= 109 ? 0 : Math.ceil((fr - 109) / 127);
            (Tt + fr + At + 127) >> 7 > fr;

          )
            At = ++fr <= 109 ? 0 : Math.ceil((fr - 109) / 127);
          var Gt = [1, At, fr, rt, kt, Le, me, 0];
          return (
            (Ne.FileIndex[0].size = me << 6),
            (Gt[7] =
              (Ne.FileIndex[0].start =
                Gt[0] + Gt[1] + Gt[2] + Gt[3] + Gt[4] + Gt[5]) +
              ((Gt[6] + 7) >> 3)),
            Gt
          );
        })(E),
        L = ne(w[7] << 9),
        N = 0,
        W = 0;
      {
        for (N = 0; N < 8; ++N) L.write_shift(1, le[N]);
        for (N = 0; N < 8; ++N) L.write_shift(2, 0);
        for (
          L.write_shift(2, 62),
            L.write_shift(2, 3),
            L.write_shift(2, 65534),
            L.write_shift(2, 9),
            L.write_shift(2, 6),
            N = 0;
          N < 3;
          ++N
        )
          L.write_shift(2, 0);
        for (
          L.write_shift(4, 0),
            L.write_shift(4, w[2]),
            L.write_shift(4, w[0] + w[1] + w[2] + w[3] - 1),
            L.write_shift(4, 0),
            L.write_shift(4, 4096),
            L.write_shift(4, w[3] ? w[0] + w[1] + w[2] - 1 : X),
            L.write_shift(4, w[3]),
            L.write_shift(-4, w[1] ? w[0] - 1 : X),
            L.write_shift(4, w[1]),
            N = 0;
          N < 109;
          ++N
        )
          L.write_shift(-4, N < w[2] ? w[1] + N : -1);
      }
      if (w[1])
        for (W = 0; W < w[1]; ++W) {
          for (; N < 236 + W * 127; ++N)
            L.write_shift(-4, N < w[2] ? w[1] + N : -1);
          L.write_shift(-4, W === w[1] - 1 ? X : W + 1);
        }
      var ee = function (Ne) {
        for (W += Ne; N < W - 1; ++N) L.write_shift(-4, N + 1);
        Ne && (++N, L.write_shift(-4, X));
      };
      for (W = N = 0, W += w[1]; N < W; ++N) L.write_shift(-4, Ae.DIFSECT);
      for (W += w[2]; N < W; ++N) L.write_shift(-4, Ae.FATSECT);
      ee(w[3]), ee(w[4]);
      for (var Y = 0, G = 0, J = E.FileIndex[0]; Y < E.FileIndex.length; ++Y)
        (J = E.FileIndex[Y]),
          J.content &&
            ((G = J.content.length),
            !(G < 4096) && ((J.start = W), ee((G + 511) >> 9)));
      for (ee((w[6] + 7) >> 3); L.l & 511; ) L.write_shift(-4, Ae.ENDOFCHAIN);
      for (W = N = 0, Y = 0; Y < E.FileIndex.length; ++Y)
        (J = E.FileIndex[Y]),
          J.content &&
            ((G = J.content.length),
            !(!G || G >= 4096) && ((J.start = W), ee((G + 63) >> 6)));
      for (; L.l & 511; ) L.write_shift(-4, Ae.ENDOFCHAIN);
      for (N = 0; N < w[4] << 2; ++N) {
        var ue = E.FullPaths[N];
        if (!ue || ue.length === 0) {
          for (Y = 0; Y < 17; ++Y) L.write_shift(4, 0);
          for (Y = 0; Y < 3; ++Y) L.write_shift(4, -1);
          for (Y = 0; Y < 12; ++Y) L.write_shift(4, 0);
          continue;
        }
        (J = E.FileIndex[N]), N === 0 && (J.start = J.size ? J.start - 1 : X);
        var Te = (N === 0 && y.root) || J.name;
        if (
          ((G = 2 * (Te.length + 1)),
          L.write_shift(64, Te, "utf16le"),
          L.write_shift(2, G),
          L.write_shift(1, J.type),
          L.write_shift(1, J.color),
          L.write_shift(-4, J.L),
          L.write_shift(-4, J.R),
          L.write_shift(-4, J.C),
          J.clsid)
        )
          L.write_shift(16, J.clsid, "hex");
        else for (Y = 0; Y < 4; ++Y) L.write_shift(4, 0);
        L.write_shift(4, J.state || 0),
          L.write_shift(4, 0),
          L.write_shift(4, 0),
          L.write_shift(4, 0),
          L.write_shift(4, 0),
          L.write_shift(4, J.start),
          L.write_shift(4, J.size),
          L.write_shift(4, 0);
      }
      for (N = 1; N < E.FileIndex.length; ++N)
        if (((J = E.FileIndex[N]), J.size >= 4096))
          if (((L.l = (J.start + 1) << 9), ft && Buffer.isBuffer(J.content)))
            J.content.copy(L, L.l, 0, J.size), (L.l += (J.size + 511) & -512);
          else {
            for (Y = 0; Y < J.size; ++Y) L.write_shift(1, J.content[Y]);
            for (; Y & 511; ++Y) L.write_shift(1, 0);
          }
      for (N = 1; N < E.FileIndex.length; ++N)
        if (((J = E.FileIndex[N]), J.size > 0 && J.size < 4096))
          if (ft && Buffer.isBuffer(J.content))
            J.content.copy(L, L.l, 0, J.size), (L.l += (J.size + 63) & -64);
          else {
            for (Y = 0; Y < J.size; ++Y) L.write_shift(1, J.content[Y]);
            for (; Y & 63; ++Y) L.write_shift(1, 0);
          }
      if (ft) L.l = L.length;
      else for (; L.l < L.length; ) L.write_shift(1, 0);
      return L;
    }
    function P(E, T) {
      var y = E.FullPaths.map(function (Y) {
          return Y.toUpperCase();
        }),
        w = y.map(function (Y) {
          var G = Y.split("/");
          return G[G.length - (Y.slice(-1) == "/" ? 2 : 1)];
        }),
        L = !1;
      T.charCodeAt(0) === 47
        ? ((L = !0), (T = y[0].slice(0, -1) + T))
        : (L = T.indexOf("/") !== -1);
      var N = T.toUpperCase(),
        W = L === !0 ? y.indexOf(N) : w.indexOf(N);
      if (W !== -1) return E.FileIndex[W];
      var ee = !N.match(fl);
      for (
        N = N.replace(Qs, ""), ee && (N = N.replace(fl, "!")), W = 0;
        W < y.length;
        ++W
      )
        if (
          (ee ? y[W].replace(fl, "!") : y[W]).replace(Qs, "") == N ||
          (ee ? w[W].replace(fl, "!") : w[W]).replace(Qs, "") == N
        )
          return E.FileIndex[W];
      return null;
    }
    var B = 64,
      X = -2,
      ae = "d0cf11e0a1b11ae1",
      le = [208, 207, 17, 224, 161, 177, 26, 225],
      Re = "00000000000000000000000000000000",
      Ae = {
        MAXREGSECT: -6,
        DIFSECT: -4,
        FATSECT: -3,
        ENDOFCHAIN: X,
        FREESECT: -1,
        HEADER_SIGNATURE: ae,
        HEADER_MINOR_VERSION: "3e00",
        MAXREGSID: -6,
        NOSTREAM: -1,
        HEADER_CLSID: Re,
        EntryTypes: [
          "unknown",
          "storage",
          "stream",
          "lockbytes",
          "property",
          "root",
        ],
      };
    function se(E, T, y) {
      c();
      var w = I(E, y);
      l.writeFileSync(T, w);
    }
    function ye(E) {
      for (var T = new Array(E.length), y = 0; y < E.length; ++y)
        T[y] = String.fromCharCode(E[y]);
      return T.join("");
    }
    function ge(E, T) {
      var y = I(E, T);
      switch ((T && T.type) || "buffer") {
        case "file":
          return c(), l.writeFileSync(T.filename, y), y;
        case "binary":
          return typeof y == "string" ? y : ye(y);
        case "base64":
          return yo(typeof y == "string" ? y : ye(y));
        case "buffer":
          if (ft) return Buffer.isBuffer(y) ? y : pa(y);
        case "array":
          return typeof y == "string" ? In(y) : y;
      }
      return y;
    }
    var oe;
    function O(E) {
      try {
        var T = E.InflateRaw,
          y = new T();
        if (
          (y._processChunk(new Uint8Array([3, 0]), y._finishFlushFlag),
          y.bytesRead)
        )
          oe = E;
        else throw new Error("zlib does not expose bytesRead");
      } catch (w) {
        console.error("cannot use native zlib: " + (w.message || w));
      }
    }
    function U(E, T) {
      if (!oe) return St(E, T);
      var y = oe.InflateRaw,
        w = new y(),
        L = w._processChunk(E.slice(E.l), w._finishFlushFlag);
      return (E.l += w.bytesRead), L;
    }
    function R(E) {
      return oe ? oe.deflateRawSync(E) : Ke(E);
    }
    var k = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
      z = [
        3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59,
        67, 83, 99, 115, 131, 163, 195, 227, 258,
      ],
      re = [
        1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385,
        513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577,
      ];
    function Se(E) {
      var T =
        (((E << 1) | (E << 11)) & 139536) | (((E << 5) | (E << 15)) & 558144);
      return ((T >> 16) | (T >> 8) | T) & 255;
    }
    for (
      var he = typeof Uint8Array < "u",
        ve = he ? new Uint8Array(256) : [],
        He = 0;
      He < 256;
      ++He
    )
      ve[He] = Se(He);
    function je(E, T) {
      var y = ve[E & 255];
      return T <= 8
        ? y >>> (8 - T)
        : ((y = (y << 8) | ve[(E >> 8) & 255]),
          T <= 16
            ? y >>> (16 - T)
            : ((y = (y << 8) | ve[(E >> 16) & 255]), y >>> (24 - T)));
    }
    function be(E, T) {
      var y = T & 7,
        w = T >>> 3;
      return ((E[w] | (y <= 6 ? 0 : E[w + 1] << 8)) >>> y) & 3;
    }
    function Oe(E, T) {
      var y = T & 7,
        w = T >>> 3;
      return ((E[w] | (y <= 5 ? 0 : E[w + 1] << 8)) >>> y) & 7;
    }
    function Je(E, T) {
      var y = T & 7,
        w = T >>> 3;
      return ((E[w] | (y <= 4 ? 0 : E[w + 1] << 8)) >>> y) & 15;
    }
    function Ze(E, T) {
      var y = T & 7,
        w = T >>> 3;
      return ((E[w] | (y <= 3 ? 0 : E[w + 1] << 8)) >>> y) & 31;
    }
    function q(E, T) {
      var y = T & 7,
        w = T >>> 3;
      return ((E[w] | (y <= 1 ? 0 : E[w + 1] << 8)) >>> y) & 127;
    }
    function we(E, T, y) {
      var w = T & 7,
        L = T >>> 3,
        N = (1 << y) - 1,
        W = E[L] >>> w;
      return (
        y < 8 - w ||
          ((W |= E[L + 1] << (8 - w)), y < 16 - w) ||
          ((W |= E[L + 2] << (16 - w)), y < 24 - w) ||
          (W |= E[L + 3] << (24 - w)),
        W & N
      );
    }
    function Ie(E, T, y) {
      var w = T & 7,
        L = T >>> 3;
      return (
        w <= 5
          ? (E[L] |= (y & 7) << w)
          : ((E[L] |= (y << w) & 255), (E[L + 1] = (y & 7) >> (8 - w))),
        T + 3
      );
    }
    function Ve(E, T, y) {
      var w = T & 7,
        L = T >>> 3;
      return (y = (y & 1) << w), (E[L] |= y), T + 1;
    }
    function Ge(E, T, y) {
      var w = T & 7,
        L = T >>> 3;
      return (y <<= w), (E[L] |= y & 255), (y >>>= 8), (E[L + 1] = y), T + 8;
    }
    function _t(E, T, y) {
      var w = T & 7,
        L = T >>> 3;
      return (
        (y <<= w),
        (E[L] |= y & 255),
        (y >>>= 8),
        (E[L + 1] = y & 255),
        (E[L + 2] = y >>> 8),
        T + 16
      );
    }
    function at(E, T) {
      var y = E.length,
        w = 2 * y > T ? 2 * y : T + 5,
        L = 0;
      if (y >= T) return E;
      if (ft) {
        var N = zh(w);
        if (E.copy) E.copy(N);
        else for (; L < E.length; ++L) N[L] = E[L];
        return N;
      } else if (he) {
        var W = new Uint8Array(w);
        if (W.set) W.set(E);
        else for (; L < y; ++L) W[L] = E[L];
        return W;
      }
      return (E.length = w), E;
    }
    function _e(E) {
      for (var T = new Array(E), y = 0; y < E; ++y) T[y] = 0;
      return T;
    }
    function V(E, T, y) {
      var w = 1,
        L = 0,
        N = 0,
        W = 0,
        ee = 0,
        Y = E.length,
        G = he ? new Uint16Array(32) : _e(32);
      for (N = 0; N < 32; ++N) G[N] = 0;
      for (N = Y; N < y; ++N) E[N] = 0;
      Y = E.length;
      var J = he ? new Uint16Array(Y) : _e(Y);
      for (N = 0; N < Y; ++N) G[(L = E[N])]++, w < L && (w = L), (J[N] = 0);
      for (G[0] = 0, N = 1; N <= w; ++N) G[N + 16] = ee = (ee + G[N - 1]) << 1;
      for (N = 0; N < Y; ++N) (ee = E[N]), ee != 0 && (J[N] = G[ee + 16]++);
      var ue = 0;
      for (N = 0; N < Y; ++N)
        if (((ue = E[N]), ue != 0))
          for (
            ee = je(J[N], w) >> (w - ue), W = (1 << (w + 4 - ue)) - 1;
            W >= 0;
            --W
          )
            T[ee | (W << ue)] = (ue & 15) | (N << 4);
      return w;
    }
    var ie = he ? new Uint16Array(512) : _e(512),
      fe = he ? new Uint16Array(32) : _e(32);
    if (!he) {
      for (var Pe = 0; Pe < 512; ++Pe) ie[Pe] = 0;
      for (Pe = 0; Pe < 32; ++Pe) fe[Pe] = 0;
    }
    (function () {
      for (var E = [], T = 0; T < 32; T++) E.push(5);
      V(E, fe, 32);
      var y = [];
      for (T = 0; T <= 143; T++) y.push(8);
      for (; T <= 255; T++) y.push(9);
      for (; T <= 279; T++) y.push(7);
      for (; T <= 287; T++) y.push(8);
      V(y, ie, 288);
    })();
    var Xe = (function () {
      for (
        var T = he ? new Uint8Array(32768) : [], y = 0, w = 0;
        y < re.length - 1;
        ++y
      )
        for (; w < re[y + 1]; ++w) T[w] = y;
      for (; w < 32768; ++w) T[w] = 29;
      var L = he ? new Uint8Array(259) : [];
      for (y = 0, w = 0; y < z.length - 1; ++y)
        for (; w < z[y + 1]; ++w) L[w] = y;
      function N(ee, Y) {
        for (var G = 0; G < ee.length; ) {
          var J = Math.min(65535, ee.length - G),
            ue = G + J == ee.length;
          for (
            Y.write_shift(1, +ue),
              Y.write_shift(2, J),
              Y.write_shift(2, ~J & 65535);
            J-- > 0;

          )
            Y[Y.l++] = ee[G++];
        }
        return Y.l;
      }
      function W(ee, Y) {
        for (
          var G = 0, J = 0, ue = he ? new Uint16Array(32768) : [];
          J < ee.length;

        ) {
          var Te = Math.min(65535, ee.length - J);
          if (Te < 10) {
            for (
              G = Ie(Y, G, +(J + Te == ee.length)),
                G & 7 && (G += 8 - (G & 7)),
                Y.l = (G / 8) | 0,
                Y.write_shift(2, Te),
                Y.write_shift(2, ~Te & 65535);
              Te-- > 0;

            )
              Y[Y.l++] = ee[J++];
            G = Y.l * 8;
            continue;
          }
          G = Ie(Y, G, +(J + Te == ee.length) + 2);
          for (var Ne = 0; Te-- > 0; ) {
            var me = ee[J];
            Ne = ((Ne << 5) ^ me) & 32767;
            var Le = -1,
              ze = 0;
            if (
              (Le = ue[Ne]) &&
              ((Le |= J & -32768), Le > J && (Le -= 32768), Le < J)
            )
              for (; ee[Le + ze] == ee[J + ze] && ze < 250; ) ++ze;
            if (ze > 2) {
              (me = L[ze]),
                me <= 22
                  ? (G = Ge(Y, G, ve[me + 1] >> 1) - 1)
                  : (Ge(Y, G, 3),
                    (G += 5),
                    Ge(Y, G, ve[me - 23] >> 5),
                    (G += 3));
              var ot = me < 8 ? 0 : (me - 4) >> 2;
              ot > 0 && (_t(Y, G, ze - z[me]), (G += ot)),
                (me = T[J - Le]),
                (G = Ge(Y, G, ve[me] >> 3)),
                (G -= 3);
              var ht = me < 4 ? 0 : (me - 2) >> 1;
              ht > 0 && (_t(Y, G, J - Le - re[me]), (G += ht));
              for (var kt = 0; kt < ze; ++kt)
                (ue[Ne] = J & 32767), (Ne = ((Ne << 5) ^ ee[J]) & 32767), ++J;
              Te -= ze - 1;
            } else
              me <= 143 ? (me = me + 48) : (G = Ve(Y, G, 1)),
                (G = Ge(Y, G, ve[me])),
                (ue[Ne] = J & 32767),
                ++J;
          }
          G = Ge(Y, G, 0) - 1;
        }
        return (Y.l = ((G + 7) / 8) | 0), Y.l;
      }
      return function (Y, G) {
        return Y.length < 8 ? N(Y, G) : W(Y, G);
      };
    })();
    function Ke(E) {
      var T = ne(50 + Math.floor(E.length * 1.1)),
        y = Xe(E, T);
      return T.slice(0, y);
    }
    var dt = he ? new Uint16Array(32768) : _e(32768),
      qe = he ? new Uint16Array(32768) : _e(32768),
      Wt = he ? new Uint16Array(128) : _e(128),
      Vt = 1,
      zt = 1;
    function It(E, T) {
      var y = Ze(E, T) + 257;
      T += 5;
      var w = Ze(E, T) + 1;
      T += 5;
      var L = Je(E, T) + 4;
      T += 4;
      for (
        var N = 0,
          W = he ? new Uint8Array(19) : _e(19),
          ee = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          Y = 1,
          G = he ? new Uint8Array(8) : _e(8),
          J = he ? new Uint8Array(8) : _e(8),
          ue = W.length,
          Te = 0;
        Te < L;
        ++Te
      )
        (W[k[Te]] = N = Oe(E, T)), Y < N && (Y = N), G[N]++, (T += 3);
      var Ne = 0;
      for (G[0] = 0, Te = 1; Te <= Y; ++Te) J[Te] = Ne = (Ne + G[Te - 1]) << 1;
      for (Te = 0; Te < ue; ++Te) (Ne = W[Te]) != 0 && (ee[Te] = J[Ne]++);
      var me = 0;
      for (Te = 0; Te < ue; ++Te)
        if (((me = W[Te]), me != 0)) {
          Ne = ve[ee[Te]] >> (8 - me);
          for (var Le = (1 << (7 - me)) - 1; Le >= 0; --Le)
            Wt[Ne | (Le << me)] = (me & 7) | (Te << 3);
        }
      var ze = [];
      for (Y = 1; ze.length < y + w; )
        switch (((Ne = Wt[q(E, T)]), (T += Ne & 7), (Ne >>>= 3))) {
          case 16:
            for (N = 3 + be(E, T), T += 2, Ne = ze[ze.length - 1]; N-- > 0; )
              ze.push(Ne);
            break;
          case 17:
            for (N = 3 + Oe(E, T), T += 3; N-- > 0; ) ze.push(0);
            break;
          case 18:
            for (N = 11 + q(E, T), T += 7; N-- > 0; ) ze.push(0);
            break;
          default:
            ze.push(Ne), Y < Ne && (Y = Ne);
            break;
        }
      var ot = ze.slice(0, y),
        ht = ze.slice(y);
      for (Te = y; Te < 286; ++Te) ot[Te] = 0;
      for (Te = w; Te < 30; ++Te) ht[Te] = 0;
      return (Vt = V(ot, dt, 286)), (zt = V(ht, qe, 30)), T;
    }
    function Dt(E, T) {
      if (E[0] == 3 && !(E[1] & 3)) return [vi(T), 2];
      for (
        var y = 0,
          w = 0,
          L = zh(T || 1 << 18),
          N = 0,
          W = L.length >>> 0,
          ee = 0,
          Y = 0;
        !(w & 1);

      ) {
        if (((w = Oe(E, y)), (y += 3), w >>> 1))
          w >> 1 == 1
            ? ((ee = 9), (Y = 5))
            : ((y = It(E, y)), (ee = Vt), (Y = zt));
        else {
          y & 7 && (y += 8 - (y & 7));
          var G = E[y >>> 3] | (E[(y >>> 3) + 1] << 8);
          if (((y += 32), G > 0))
            for (
              !T && W < N + G && ((L = at(L, N + G)), (W = L.length));
              G-- > 0;

            )
              (L[N++] = E[y >>> 3]), (y += 8);
          continue;
        }
        for (;;) {
          !T && W < N + 32767 && ((L = at(L, N + 32767)), (W = L.length));
          var J = we(E, y, ee),
            ue = w >>> 1 == 1 ? ie[J] : dt[J];
          if (((y += ue & 15), (ue >>>= 4), !((ue >>> 8) & 255))) L[N++] = ue;
          else {
            if (ue == 256) break;
            ue -= 257;
            var Te = ue < 8 ? 0 : (ue - 4) >> 2;
            Te > 5 && (Te = 0);
            var Ne = N + z[ue];
            Te > 0 && ((Ne += we(E, y, Te)), (y += Te)),
              (J = we(E, y, Y)),
              (ue = w >>> 1 == 1 ? fe[J] : qe[J]),
              (y += ue & 15),
              (ue >>>= 4);
            var me = ue < 4 ? 0 : (ue - 2) >> 1,
              Le = re[ue];
            for (
              me > 0 && ((Le += we(E, y, me)), (y += me)),
                !T && W < Ne && ((L = at(L, Ne + 100)), (W = L.length));
              N < Ne;

            )
              (L[N] = L[N - Le]), ++N;
          }
        }
      }
      return T ? [L, (y + 7) >>> 3] : [L.slice(0, N), (y + 7) >>> 3];
    }
    function St(E, T) {
      var y = E.slice(E.l || 0),
        w = Dt(y, T);
      return (E.l += w[1]), w[0];
    }
    function ur(E, T) {
      if (E) typeof console < "u" && console.error(T);
      else throw new Error(T);
    }
    function pn(E, T) {
      var y = E;
      nn(y, 0);
      var w = [],
        L = [],
        N = { FileIndex: w, FullPaths: L };
      D(N, { root: T.root });
      for (
        var W = y.length - 4;
        (y[W] != 80 || y[W + 1] != 75 || y[W + 2] != 5 || y[W + 3] != 6) &&
        W >= 0;

      )
        --W;
      (y.l = W + 4), (y.l += 4);
      var ee = y.read_shift(2);
      y.l += 6;
      var Y = y.read_shift(4);
      for (y.l = Y, W = 0; W < ee; ++W) {
        y.l += 20;
        var G = y.read_shift(4),
          J = y.read_shift(4),
          ue = y.read_shift(2),
          Te = y.read_shift(2),
          Ne = y.read_shift(2);
        y.l += 8;
        var me = y.read_shift(4),
          Le = o(y.slice(y.l + ue, y.l + ue + Te));
        y.l += ue + Te + Ne;
        var ze = y.l;
        (y.l = me + 4), Br(y, G, J, N, Le), (y.l = ze);
      }
      return N;
    }
    function Br(E, T, y, w, L) {
      E.l += 2;
      var N = E.read_shift(2),
        W = E.read_shift(2),
        ee = s(E);
      if (N & 8257) throw new Error("Unsupported ZIP encryption");
      for (
        var Y = E.read_shift(4),
          G = E.read_shift(4),
          J = E.read_shift(4),
          ue = E.read_shift(2),
          Te = E.read_shift(2),
          Ne = "",
          me = 0;
        me < ue;
        ++me
      )
        Ne += String.fromCharCode(E[E.l++]);
      if (Te) {
        var Le = o(E.slice(E.l, E.l + Te));
        (Le[21589] || {}).mt && (ee = Le[21589].mt),
          ((L || {})[21589] || {}).mt && (ee = L[21589].mt);
      }
      E.l += Te;
      var ze = E.slice(E.l, E.l + G);
      switch (W) {
        case 8:
          ze = U(E, J);
          break;
        case 0:
          break;
        default:
          throw new Error("Unsupported ZIP Compression method " + W);
      }
      var ot = !1;
      N & 8 &&
        ((Y = E.read_shift(4)),
        Y == 134695760 && ((Y = E.read_shift(4)), (ot = !0)),
        (G = E.read_shift(4)),
        (J = E.read_shift(4))),
        G != T && ur(ot, "Bad compressed size: " + T + " != " + G),
        J != y && ur(ot, "Bad uncompressed size: " + y + " != " + J),
        Z(w, Ne, ze, { unsafe: !0, mt: ee });
    }
    function Lr(E, T) {
      var y = T || {},
        w = [],
        L = [],
        N = ne(1),
        W = y.compression ? 8 : 0,
        ee = 0,
        Y = 0,
        G = 0,
        J = 0,
        ue = 0,
        Te = E.FullPaths[0],
        Ne = Te,
        me = E.FileIndex[0],
        Le = [],
        ze = 0;
      for (Y = 1; Y < E.FullPaths.length; ++Y)
        if (
          ((Ne = E.FullPaths[Y].slice(Te.length)),
          (me = E.FileIndex[Y]),
          !(!me.size || !me.content || Ne == "Sh33tJ5"))
        ) {
          var ot = J,
            ht = ne(Ne.length);
          for (G = 0; G < Ne.length; ++G)
            ht.write_shift(1, Ne.charCodeAt(G) & 127);
          (ht = ht.slice(0, ht.l)), (Le[ue] = q2.buf(me.content, 0));
          var kt = me.content;
          W == 8 && (kt = R(kt)),
            (N = ne(30)),
            N.write_shift(4, 67324752),
            N.write_shift(2, 20),
            N.write_shift(2, ee),
            N.write_shift(2, W),
            me.mt ? i(N, me.mt) : N.write_shift(4, 0),
            N.write_shift(-4, Le[ue]),
            N.write_shift(4, kt.length),
            N.write_shift(4, me.content.length),
            N.write_shift(2, ht.length),
            N.write_shift(2, 0),
            (J += N.length),
            w.push(N),
            (J += ht.length),
            w.push(ht),
            (J += kt.length),
            w.push(kt),
            (N = ne(46)),
            N.write_shift(4, 33639248),
            N.write_shift(2, 0),
            N.write_shift(2, 20),
            N.write_shift(2, ee),
            N.write_shift(2, W),
            N.write_shift(4, 0),
            N.write_shift(-4, Le[ue]),
            N.write_shift(4, kt.length),
            N.write_shift(4, me.content.length),
            N.write_shift(2, ht.length),
            N.write_shift(2, 0),
            N.write_shift(2, 0),
            N.write_shift(2, 0),
            N.write_shift(2, 0),
            N.write_shift(4, 0),
            N.write_shift(4, ot),
            (ze += N.l),
            L.push(N),
            (ze += ht.length),
            L.push(ht),
            ++ue;
        }
      return (
        (N = ne(22)),
        N.write_shift(4, 101010256),
        N.write_shift(2, 0),
        N.write_shift(2, 0),
        N.write_shift(2, ue),
        N.write_shift(2, ue),
        N.write_shift(4, ze),
        N.write_shift(4, J),
        N.write_shift(2, 0),
        vr([vr(w), vr(L), N])
      );
    }
    var qt = {
      htm: "text/html",
      xml: "text/xml",
      gif: "image/gif",
      jpg: "image/jpeg",
      png: "image/png",
      mso: "application/x-mso",
      thmx: "application/vnd.ms-officetheme",
      sh33tj5: "application/octet-stream",
    };
    function Qr(E, T) {
      if (E.ctype) return E.ctype;
      var y = E.name || "",
        w = y.match(/\.([^\.]+)$/);
      return (w && qt[w[1]]) ||
        (T && ((w = (y = T).match(/[\.\\]([^\.\\])+$/)), w && qt[w[1]]))
        ? qt[w[1]]
        : "application/octet-stream";
    }
    function Nr(E) {
      for (var T = yo(E), y = [], w = 0; w < T.length; w += 76)
        y.push(T.slice(w, w + 76));
      return (
        y.join(`\r
`) +
        `\r
`
      );
    }
    function Fr(E) {
      var T = E.replace(
        /[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF=]/g,
        function (G) {
          var J = G.charCodeAt(0).toString(16).toUpperCase();
          return "=" + (J.length == 1 ? "0" + J : J);
        },
      );
      (T = T.replace(/ $/gm, "=20").replace(/\t$/gm, "=09")),
        T.charAt(0) ==
          `
` && (T = "=0D" + T.slice(1)),
        (T = T.replace(/\r(?!\n)/gm, "=0D")
          .replace(
            /\n\n/gm,
            `
=0A`,
          )
          .replace(/([^\r\n])\n/gm, "$1=0A"));
      for (
        var y = [],
          w = T.split(`\r
`),
          L = 0;
        L < w.length;
        ++L
      ) {
        var N = w[L];
        if (N.length == 0) {
          y.push("");
          continue;
        }
        for (var W = 0; W < N.length; ) {
          var ee = 76,
            Y = N.slice(W, W + ee);
          Y.charAt(ee - 1) == "="
            ? ee--
            : Y.charAt(ee - 2) == "="
              ? (ee -= 2)
              : Y.charAt(ee - 3) == "=" && (ee -= 3),
            (Y = N.slice(W, W + ee)),
            (W += ee),
            W < N.length && (Y += "="),
            y.push(Y);
        }
      }
      return y.join(`\r
`);
    }
    function $t(E) {
      for (var T = [], y = 0; y < E.length; ++y) {
        for (var w = E[y]; y <= E.length && w.charAt(w.length - 1) == "="; )
          w = w.slice(0, w.length - 1) + E[++y];
        T.push(w);
      }
      for (var L = 0; L < T.length; ++L)
        T[L] = T[L].replace(/[=][0-9A-Fa-f]{2}/g, function (N) {
          return String.fromCharCode(parseInt(N.slice(1), 16));
        });
      return In(
        T.join(`\r
`),
      );
    }
    function ma(E, T, y) {
      for (var w = "", L = "", N = "", W, ee = 0; ee < 10; ++ee) {
        var Y = T[ee];
        if (!Y || Y.match(/^\s*$/)) break;
        var G = Y.match(/^(.*?):\s*([^\s].*)$/);
        if (G)
          switch (G[1].toLowerCase()) {
            case "content-location":
              w = G[2].trim();
              break;
            case "content-type":
              N = G[2].trim();
              break;
            case "content-transfer-encoding":
              L = G[2].trim();
              break;
          }
      }
      switch ((++ee, L.toLowerCase())) {
        case "base64":
          W = In(fa(T.slice(ee).join("")));
          break;
        case "quoted-printable":
          W = $t(T.slice(ee));
          break;
        default:
          throw new Error("Unsupported Content-Transfer-Encoding " + L);
      }
      var J = Z(E, w.slice(y.length), W, { unsafe: !0 });
      N && (J.ctype = N);
    }
    function er(E, T) {
      if (ye(E.slice(0, 13)).toLowerCase() != "mime-version:")
        throw new Error("Unsupported MAD header");
      var y = (T && T.root) || "",
        w = (ft && Buffer.isBuffer(E) ? E.toString("binary") : ye(E)).split(`\r
`),
        L = 0,
        N = "";
      for (L = 0; L < w.length; ++L)
        if (
          ((N = w[L]),
          !!/^Content-Location:/i.test(N) &&
            ((N = N.slice(N.indexOf("file"))),
            y || (y = N.slice(0, N.lastIndexOf("/") + 1)),
            N.slice(0, y.length) != y))
        )
          for (
            ;
            y.length > 0 &&
            ((y = y.slice(0, y.length - 1)),
            (y = y.slice(0, y.lastIndexOf("/") + 1)),
            N.slice(0, y.length) != y);

          );
      var W = (w[1] || "").match(/boundary="(.*?)"/);
      if (!W) throw new Error("MAD cannot find boundary");
      var ee = "--" + (W[1] || ""),
        Y = [],
        G = [],
        J = { FileIndex: Y, FullPaths: G };
      D(J);
      var ue,
        Te = 0;
      for (L = 0; L < w.length; ++L) {
        var Ne = w[L];
        (Ne !== ee && Ne !== ee + "--") ||
          (Te++ && ma(J, w.slice(ue, L), y), (ue = L));
      }
      return J;
    }
    function j(E, T) {
      var y = T || {},
        w = y.boundary || "SheetJS";
      w = "------=" + w;
      for (
        var L = [
            "MIME-Version: 1.0",
            'Content-Type: multipart/related; boundary="' + w.slice(2) + '"',
            "",
            "",
            "",
          ],
          N = E.FullPaths[0],
          W = N,
          ee = E.FileIndex[0],
          Y = 1;
        Y < E.FullPaths.length;
        ++Y
      )
        if (
          ((W = E.FullPaths[Y].slice(N.length)),
          (ee = E.FileIndex[Y]),
          !(!ee.size || !ee.content || W == "Sh33tJ5"))
        ) {
          W = W.replace(
            /[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF]/g,
            function (ze) {
              return "_x" + ze.charCodeAt(0).toString(16) + "_";
            },
          ).replace(/[\u0080-\uFFFF]/g, function (ze) {
            return "_u" + ze.charCodeAt(0).toString(16) + "_";
          });
          for (
            var G = ee.content,
              J = ft && Buffer.isBuffer(G) ? G.toString("binary") : ye(G),
              ue = 0,
              Te = Math.min(1024, J.length),
              Ne = 0,
              me = 0;
            me <= Te;
            ++me
          )
            (Ne = J.charCodeAt(me)) >= 32 && Ne < 128 && ++ue;
          var Le = ue >= (Te * 4) / 5;
          L.push(w),
            L.push(
              "Content-Location: " + (y.root || "file:///C:/SheetJS/") + W,
            ),
            L.push(
              "Content-Transfer-Encoding: " +
                (Le ? "quoted-printable" : "base64"),
            ),
            L.push("Content-Type: " + Qr(ee, W)),
            L.push(""),
            L.push(Le ? Fr(J) : Nr(J));
        }
      return (
        L.push(
          w +
            `--\r
`,
        ),
        L.join(`\r
`)
      );
    }
    function Q(E) {
      var T = {};
      return D(T, E), T;
    }
    function Z(E, T, y, w) {
      var L = w && w.unsafe;
      L || D(E);
      var N = !L && yt.find(E, T);
      if (!N) {
        var W = E.FullPaths[0];
        T.slice(0, W.length) == W
          ? (W = T)
          : (W.slice(-1) != "/" && (W += "/"),
            (W = (W + T).replace("//", "/"))),
          (N = { name: a(T), type: 2 }),
          E.FileIndex.push(N),
          E.FullPaths.push(W),
          L || yt.utils.cfb_gc(E);
      }
      return (
        (N.content = y),
        (N.size = y ? y.length : 0),
        w &&
          (w.CLSID && (N.clsid = w.CLSID),
          w.mt && (N.mt = w.mt),
          w.ct && (N.ct = w.ct)),
        N
      );
    }
    function de(E, T) {
      D(E);
      var y = yt.find(E, T);
      if (y) {
        for (var w = 0; w < E.FileIndex.length; ++w)
          if (E.FileIndex[w] == y)
            return E.FileIndex.splice(w, 1), E.FullPaths.splice(w, 1), !0;
      }
      return !1;
    }
    function Be(E, T, y) {
      D(E);
      var w = yt.find(E, T);
      if (w) {
        for (var L = 0; L < E.FileIndex.length; ++L)
          if (E.FileIndex[L] == w)
            return (E.FileIndex[L].name = a(y)), (E.FullPaths[L] = y), !0;
      }
      return !1;
    }
    function We(E) {
      F(E, !0);
    }
    return (
      (t.find = P),
      (t.read = C),
      (t.parse = u),
      (t.write = ge),
      (t.writeFile = se),
      (t.utils = {
        cfb_new: Q,
        cfb_add: Z,
        cfb_del: de,
        cfb_mov: Be,
        cfb_gc: We,
        ReadShift: Zs,
        CheckField: Yv,
        prep_blob: nn,
        bconcat: vr,
        use_zlib: O,
        _deflateRaw: Ke,
        _inflateRaw: St,
        consts: Ae,
      }),
      t
    );
  })();
function ey(e) {
  return typeof e == "string" ? Mc(e) : Array.isArray(e) ? C2(e) : e;
}
function Po(e, t, r) {
  if (typeof Deno < "u") {
    if (r && typeof t == "string")
      switch (r) {
        case "utf8":
          t = new TextEncoder(r).encode(t);
          break;
        case "binary":
          t = Mc(t);
          break;
        default:
          throw new Error("Unsupported encoding " + r);
      }
    return Deno.writeFileSync(e, t);
  }
  var n = r == "utf8" ? So(t) : t;
  if (typeof IE_SaveFile < "u") return IE_SaveFile(n, e);
  if (typeof Blob < "u") {
    var a = new Blob([ey(n)], { type: "application/octet-stream" });
    if (typeof navigator < "u" && navigator.msSaveBlob)
      return navigator.msSaveBlob(a, e);
    if (typeof saveAs < "u") return saveAs(a, e);
    if (
      typeof URL < "u" &&
      typeof document < "u" &&
      document.createElement &&
      URL.createObjectURL
    ) {
      var i = URL.createObjectURL(a);
      if (
        typeof chrome == "object" &&
        typeof (chrome.downloads || {}).download == "function"
      )
        return (
          URL.revokeObjectURL &&
            typeof setTimeout < "u" &&
            setTimeout(function () {
              URL.revokeObjectURL(i);
            }, 6e4),
          chrome.downloads.download({ url: i, filename: e, saveAs: !0 })
        );
      var s = document.createElement("a");
      if (s.download != null)
        return (
          (s.download = e),
          (s.href = i),
          document.body.appendChild(s),
          s.click(),
          document.body.removeChild(s),
          URL.revokeObjectURL &&
            typeof setTimeout < "u" &&
            setTimeout(function () {
              URL.revokeObjectURL(i);
            }, 6e4),
          i
        );
    }
  }
  if (typeof $ < "u" && typeof File < "u" && typeof Folder < "u")
    try {
      var o = File(e);
      return (
        o.open("w"),
        (o.encoding = "binary"),
        Array.isArray(t) && (t = Io(t)),
        o.write(t),
        o.close(),
        t
      );
    } catch (l) {
      if (!l.message || !l.message.match(/onstruct/)) throw l;
    }
  throw new Error("cannot save file " + e);
}
function yr(e) {
  for (var t = Object.keys(e), r = [], n = 0; n < t.length; ++n)
    Object.prototype.hasOwnProperty.call(e, t[n]) && r.push(t[n]);
  return r;
}
function qh(e, t) {
  for (var r = [], n = yr(e), a = 0; a !== n.length; ++a)
    r[e[n[a]][t]] == null && (r[e[n[a]][t]] = n[a]);
  return r;
}
function U0(e) {
  for (var t = [], r = yr(e), n = 0; n !== r.length; ++n) t[e[r[n]]] = r[n];
  return t;
}
function jc(e) {
  for (var t = [], r = yr(e), n = 0; n !== r.length; ++n)
    t[e[r[n]]] = parseInt(r[n], 10);
  return t;
}
function ty(e) {
  for (var t = [], r = yr(e), n = 0; n !== r.length; ++n)
    t[e[r[n]]] == null && (t[e[r[n]]] = []), t[e[r[n]]].push(r[n]);
  return t;
}
var oc = new Date(1899, 11, 30, 0, 0, 0);
function Kr(e, t) {
  var r = e.getTime(),
    n = oc.getTime() + (e.getTimezoneOffset() - oc.getTimezoneOffset()) * 6e4;
  return (r - n) / (24 * 60 * 60 * 1e3);
}
var Fv = new Date(),
  ry = oc.getTime() + (Fv.getTimezoneOffset() - oc.getTimezoneOffset()) * 6e4,
  ep = Fv.getTimezoneOffset();
function kv(e) {
  var t = new Date();
  return (
    t.setTime(e * 24 * 60 * 60 * 1e3 + ry),
    t.getTimezoneOffset() !== ep &&
      t.setTime(t.getTime() + (t.getTimezoneOffset() - ep) * 6e4),
    t
  );
}
var tp = new Date("2017-02-19T19:06:09.000Z"),
  Rv = isNaN(tp.getFullYear()) ? new Date("2/19/17") : tp,
  ny = Rv.getFullYear() == 2017;
function Pr(e, t) {
  var r = new Date(e);
  if (ny)
    return (
      t > 0
        ? r.setTime(r.getTime() + r.getTimezoneOffset() * 60 * 1e3)
        : t < 0 && r.setTime(r.getTime() - r.getTimezoneOffset() * 60 * 1e3),
      r
    );
  if (e instanceof Date) return e;
  if (Rv.getFullYear() == 1917 && !isNaN(r.getFullYear())) {
    var n = r.getFullYear();
    return e.indexOf("" + n) > -1 || r.setFullYear(r.getFullYear() + 100), r;
  }
  var a = e.match(/\d+/g) || ["2017", "2", "19", "0", "0", "0"],
    i = new Date(+a[0], +a[1] - 1, +a[2], +a[3] || 0, +a[4] || 0, +a[5] || 0);
  return (
    e.indexOf("Z") > -1 &&
      (i = new Date(i.getTime() - i.getTimezoneOffset() * 60 * 1e3)),
    i
  );
}
function Uc(e, t) {
  if (ft && Buffer.isBuffer(e)) return e.toString("binary");
  if (typeof TextDecoder < "u")
    try {
      var r = {
        "€": "",
        "‚": "",
        ƒ: "",
        "„": "",
        "…": "",
        "†": "",
        "‡": "",
        ˆ: "",
        "‰": "",
        Š: "",
        "‹": "",
        Œ: "",
        Ž: "",
        "‘": "",
        "’": "",
        "“": "",
        "”": "",
        "•": "",
        "–": "",
        "—": "",
        "˜": "",
        "™": "",
        š: "",
        "›": "",
        œ: "",
        ž: "",
        Ÿ: "",
      };
      return (
        Array.isArray(e) && (e = new Uint8Array(e)),
        new TextDecoder("latin1")
          .decode(e)
          .replace(/[€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ]/g, function (i) {
            return r[i] || i;
          })
      );
    } catch {}
  for (var n = [], a = 0; a != e.length; ++a) n.push(String.fromCharCode(e[a]));
  return n.join("");
}
function Xr(e) {
  if (typeof JSON < "u" && !Array.isArray(e))
    return JSON.parse(JSON.stringify(e));
  if (typeof e != "object" || e == null) return e;
  if (e instanceof Date) return new Date(e.getTime());
  var t = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = Xr(e[r]));
  return t;
}
function jt(e, t) {
  for (var r = ""; r.length < t; ) r += e;
  return r;
}
function ia(e) {
  var t = Number(e);
  if (!isNaN(t)) return isFinite(t) ? t : NaN;
  if (!/\d/.test(e)) return t;
  var r = 1,
    n = e
      .replace(/([\d]),([\d])/g, "$1$2")
      .replace(/[$]/g, "")
      .replace(/[%]/g, function () {
        return (r *= 100), "";
      });
  return !isNaN((t = Number(n))) ||
    ((n = n.replace(/[(](.*)[)]/, function (a, i) {
      return (r = -r), i;
    })),
    !isNaN((t = Number(n))))
    ? t / r
    : t;
}
var ay = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];
function wo(e) {
  var t = new Date(e),
    r = new Date(NaN),
    n = t.getYear(),
    a = t.getMonth(),
    i = t.getDate();
  if (isNaN(i)) return r;
  var s = e.toLowerCase();
  if (s.match(/jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec/)) {
    if (
      ((s = s.replace(/[^a-z]/g, "").replace(/([^a-z]|^)[ap]m?([^a-z]|$)/, "")),
      s.length > 3 && ay.indexOf(s) == -1)
    )
      return r;
  } else if (s.match(/[a-z]/)) return r;
  return n < 0 || n > 8099
    ? r
    : (a > 0 || i > 1) && n != 101
      ? t
      : e.match(/[^-0-9:,\/\\]/)
        ? r
        : t;
}
function tt(e, t, r) {
  if (e.FullPaths) {
    if (typeof r == "string") {
      var n;
      return ft ? (n = pa(r)) : (n = D2(r)), yt.utils.cfb_add(e, t, n);
    }
    yt.utils.cfb_add(e, t, r);
  } else e.file(t, r);
}
function $0() {
  return yt.utils.cfb_new();
}
var Zt = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r
`,
  iy = { "&quot;": '"', "&apos;": "'", "&gt;": ">", "&lt;": "<", "&amp;": "&" },
  H0 = U0(iy),
  W0 = /[&<>'"]/g,
  sy = /[\u0000-\u0008\u000b-\u001f]/g;
function vt(e) {
  var t = e + "";
  return t
    .replace(W0, function (r) {
      return H0[r];
    })
    .replace(sy, function (r) {
      return "_x" + ("000" + r.charCodeAt(0).toString(16)).slice(-4) + "_";
    });
}
function rp(e) {
  return vt(e).replace(/ /g, "_x0020_");
}
var Ov = /[\u0000-\u001f]/g;
function oy(e) {
  var t = e + "";
  return t
    .replace(W0, function (r) {
      return H0[r];
    })
    .replace(/\n/g, "<br/>")
    .replace(Ov, function (r) {
      return "&#x" + ("000" + r.charCodeAt(0).toString(16)).slice(-4) + ";";
    });
}
function ly(e) {
  var t = e + "";
  return t
    .replace(W0, function (r) {
      return H0[r];
    })
    .replace(Ov, function (r) {
      return "&#x" + r.charCodeAt(0).toString(16).toUpperCase() + ";";
    });
}
function cy(e) {
  return e.replace(/(\r\n|[\r\n])/g, "&#10;");
}
function uy(e) {
  switch (e) {
    case 1:
    case !0:
    case "1":
    case "true":
    case "TRUE":
      return !0;
    default:
      return !1;
  }
}
function Nu(e) {
  for (var t = "", r = 0, n = 0, a = 0, i = 0, s = 0, o = 0; r < e.length; ) {
    if (((n = e.charCodeAt(r++)), n < 128)) {
      t += String.fromCharCode(n);
      continue;
    }
    if (((a = e.charCodeAt(r++)), n > 191 && n < 224)) {
      (s = (n & 31) << 6), (s |= a & 63), (t += String.fromCharCode(s));
      continue;
    }
    if (((i = e.charCodeAt(r++)), n < 240)) {
      t += String.fromCharCode(((n & 15) << 12) | ((a & 63) << 6) | (i & 63));
      continue;
    }
    (s = e.charCodeAt(r++)),
      (o =
        (((n & 7) << 18) | ((a & 63) << 12) | ((i & 63) << 6) | (s & 63)) -
        65536),
      (t += String.fromCharCode(55296 + ((o >>> 10) & 1023))),
      (t += String.fromCharCode(56320 + (o & 1023)));
  }
  return t;
}
function np(e) {
  var t = vi(2 * e.length),
    r,
    n,
    a = 1,
    i = 0,
    s = 0,
    o;
  for (n = 0; n < e.length; n += a)
    (a = 1),
      (o = e.charCodeAt(n)) < 128
        ? (r = o)
        : o < 224
          ? ((r = (o & 31) * 64 + (e.charCodeAt(n + 1) & 63)), (a = 2))
          : o < 240
            ? ((r =
                (o & 15) * 4096 +
                (e.charCodeAt(n + 1) & 63) * 64 +
                (e.charCodeAt(n + 2) & 63)),
              (a = 3))
            : ((a = 4),
              (r =
                (o & 7) * 262144 +
                (e.charCodeAt(n + 1) & 63) * 4096 +
                (e.charCodeAt(n + 2) & 63) * 64 +
                (e.charCodeAt(n + 3) & 63)),
              (r -= 65536),
              (s = 55296 + ((r >>> 10) & 1023)),
              (r = 56320 + (r & 1023))),
      s !== 0 && ((t[i++] = s & 255), (t[i++] = s >>> 8), (s = 0)),
      (t[i++] = r % 256),
      (t[i++] = r >>> 8);
  return t.slice(0, i).toString("ucs2");
}
function ap(e) {
  return pa(e, "binary").toString("utf8");
}
var hl = "foo bar bazâð£",
  Js = (ft && ((ap(hl) == Nu(hl) && ap) || (np(hl) == Nu(hl) && np))) || Nu,
  So = ft
    ? function (e) {
        return pa(e, "utf8").toString("binary");
      }
    : function (e) {
        for (var t = [], r = 0, n = 0, a = 0; r < e.length; )
          switch (((n = e.charCodeAt(r++)), !0)) {
            case n < 128:
              t.push(String.fromCharCode(n));
              break;
            case n < 2048:
              t.push(String.fromCharCode(192 + (n >> 6))),
                t.push(String.fromCharCode(128 + (n & 63)));
              break;
            case n >= 55296 && n < 57344:
              (n -= 55296),
                (a = e.charCodeAt(r++) - 56320 + (n << 10)),
                t.push(String.fromCharCode(240 + ((a >> 18) & 7))),
                t.push(String.fromCharCode(144 + ((a >> 12) & 63))),
                t.push(String.fromCharCode(128 + ((a >> 6) & 63))),
                t.push(String.fromCharCode(128 + (a & 63)));
              break;
            default:
              t.push(String.fromCharCode(224 + (n >> 12))),
                t.push(String.fromCharCode(128 + ((n >> 6) & 63))),
                t.push(String.fromCharCode(128 + (n & 63)));
          }
        return t.join("");
      },
  fy = (function () {
    var e = [
      ["nbsp", " "],
      ["middot", "·"],
      ["quot", '"'],
      ["apos", "'"],
      ["gt", ">"],
      ["lt", "<"],
      ["amp", "&"],
    ].map(function (t) {
      return [new RegExp("&" + t[0] + ";", "ig"), t[1]];
    });
    return function (r) {
      for (
        var n = r
            .replace(/^[\t\n\r ]+/, "")
            .replace(/[\t\n\r ]+$/, "")
            .replace(/>\s+/g, ">")
            .replace(/\s+</g, "<")
            .replace(/[\t\n\r ]+/g, " ")
            .replace(
              /<\s*[bB][rR]\s*\/?>/g,
              `
`,
            )
            .replace(/<[^>]*>/g, ""),
          a = 0;
        a < e.length;
        ++a
      )
        n = n.replace(e[a][0], e[a][1]);
      return n;
    };
  })(),
  Iv = /(^\s|\s$|\n)/;
function gr(e, t) {
  return (
    "<" +
    e +
    (t.match(Iv) ? ' xml:space="preserve"' : "") +
    ">" +
    t +
    "</" +
    e +
    ">"
  );
}
function To(e) {
  return yr(e)
    .map(function (t) {
      return " " + t + '="' + e[t] + '"';
    })
    .join("");
}
function Ce(e, t, r) {
  return (
    "<" +
    e +
    (r != null ? To(r) : "") +
    (t != null
      ? (t.match(Iv) ? ' xml:space="preserve"' : "") + ">" + t + "</" + e
      : "/") +
    ">"
  );
}
function If(e, t) {
  try {
    return e.toISOString().replace(/\.\d*/, "");
  } catch (r) {
    if (t) throw r;
  }
  return "";
}
function dy(e, t) {
  switch (typeof e) {
    case "string":
      var r = Ce("vt:lpwstr", vt(e));
      return (r = r.replace(/&quot;/g, "_x0022_")), r;
    case "number":
      return Ce((e | 0) == e ? "vt:i4" : "vt:r8", vt(String(e)));
    case "boolean":
      return Ce("vt:bool", e ? "true" : "false");
  }
  if (e instanceof Date) return Ce("vt:filetime", If(e));
  throw new Error("Unable to serialize " + e);
}
var sr = {
    CORE_PROPS:
      "http://schemas.openxmlformats.org/package/2006/metadata/core-properties",
    CUST_PROPS:
      "http://schemas.openxmlformats.org/officeDocument/2006/custom-properties",
    EXT_PROPS:
      "http://schemas.openxmlformats.org/officeDocument/2006/extended-properties",
    CT: "http://schemas.openxmlformats.org/package/2006/content-types",
    RELS: "http://schemas.openxmlformats.org/package/2006/relationships",
    TCMNT:
      "http://schemas.microsoft.com/office/spreadsheetml/2018/threadedcomments",
    dc: "http://purl.org/dc/elements/1.1/",
    dcterms: "http://purl.org/dc/terms/",
    dcmitype: "http://purl.org/dc/dcmitype/",
    mx: "http://schemas.microsoft.com/office/mac/excel/2008/main",
    r: "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
    sjs: "http://schemas.openxmlformats.org/package/2006/sheetjs/core-properties",
    vt: "http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes",
    xsi: "http://www.w3.org/2001/XMLSchema-instance",
    xsd: "http://www.w3.org/2001/XMLSchema",
  },
  vs = [
    "http://schemas.openxmlformats.org/spreadsheetml/2006/main",
    "http://purl.oclc.org/ooxml/spreadsheetml/main",
    "http://schemas.microsoft.com/office/excel/2006/main",
    "http://schemas.microsoft.com/office/excel/2006/2",
  ],
  sn = {
    o: "urn:schemas-microsoft-com:office:office",
    x: "urn:schemas-microsoft-com:office:excel",
    ss: "urn:schemas-microsoft-com:office:spreadsheet",
    dt: "uuid:C2F41010-65B3-11d1-A29F-00AA00C14882",
    mv: "http://macVmlSchemaUri",
    v: "urn:schemas-microsoft-com:vml",
    html: "http://www.w3.org/TR/REC-html40",
  };
function hy(e, t) {
  for (
    var r = 1 - 2 * (e[t + 7] >>> 7),
      n = ((e[t + 7] & 127) << 4) + ((e[t + 6] >>> 4) & 15),
      a = e[t + 6] & 15,
      i = 5;
    i >= 0;
    --i
  )
    a = a * 256 + e[t + i];
  return n == 2047
    ? a == 0
      ? r * (1 / 0)
      : NaN
    : (n == 0 ? (n = -1022) : ((n -= 1023), (a += Math.pow(2, 52))),
      r * Math.pow(2, n - 52) * a);
}
function py(e, t, r) {
  var n = (t < 0 || 1 / t == -1 / 0 ? 1 : 0) << 7,
    a = 0,
    i = 0,
    s = n ? -t : t;
  isFinite(s)
    ? s == 0
      ? (a = i = 0)
      : ((a = Math.floor(Math.log(s) / Math.LN2)),
        (i = s * Math.pow(2, 52 - a)),
        a <= -1023 && (!isFinite(i) || i < Math.pow(2, 52))
          ? (a = -1022)
          : ((i -= Math.pow(2, 52)), (a += 1023)))
    : ((a = 2047), (i = isNaN(t) ? 26985 : 0));
  for (var o = 0; o <= 5; ++o, i /= 256) e[r + o] = i & 255;
  (e[r + 6] = ((a & 15) << 4) | (i & 15)), (e[r + 7] = (a >> 4) | n);
}
var ip = function (e) {
    for (var t = [], r = 10240, n = 0; n < e[0].length; ++n)
      if (e[0][n])
        for (var a = 0, i = e[0][n].length; a < i; a += r)
          t.push.apply(t, e[0][n].slice(a, a + r));
    return t;
  },
  sp = ft
    ? function (e) {
        return e[0].length > 0 && Buffer.isBuffer(e[0][0])
          ? Buffer.concat(
              e[0].map(function (t) {
                return Buffer.isBuffer(t) ? t : pa(t);
              }),
            )
          : ip(e);
      }
    : ip,
  op = function (e, t, r) {
    for (var n = [], a = t; a < r; a += 2)
      n.push(String.fromCharCode(js(e, a)));
    return n.join("").replace(Qs, "");
  },
  V0 = ft
    ? function (e, t, r) {
        return Buffer.isBuffer(e)
          ? e.toString("utf16le", t, r).replace(Qs, "")
          : op(e, t, r);
      }
    : op,
  lp = function (e, t, r) {
    for (var n = [], a = t; a < t + r; ++a)
      n.push(("0" + e[a].toString(16)).slice(-2));
    return n.join("");
  },
  Pv = ft
    ? function (e, t, r) {
        return Buffer.isBuffer(e) ? e.toString("hex", t, t + r) : lp(e, t, r);
      }
    : lp,
  cp = function (e, t, r) {
    for (var n = [], a = t; a < r; a++) n.push(String.fromCharCode(Ii(e, a)));
    return n.join("");
  },
  Mo = ft
    ? function (t, r, n) {
        return Buffer.isBuffer(t) ? t.toString("utf8", r, n) : cp(t, r, n);
      }
    : cp,
  Mv = function (e, t) {
    var r = on(e, t);
    return r > 0 ? Mo(e, t + 4, t + 4 + r - 1) : "";
  },
  bv = Mv,
  Bv = function (e, t) {
    var r = on(e, t);
    return r > 0 ? Mo(e, t + 4, t + 4 + r - 1) : "";
  },
  jv = Bv,
  Uv = function (e, t) {
    var r = 2 * on(e, t);
    return r > 0 ? Mo(e, t + 4, t + 4 + r - 1) : "";
  },
  $v = Uv,
  Hv = function (t, r) {
    var n = on(t, r);
    return n > 0 ? V0(t, r + 4, r + 4 + n) : "";
  },
  Wv = Hv,
  Vv = function (e, t) {
    var r = on(e, t);
    return r > 0 ? Mo(e, t + 4, t + 4 + r) : "";
  },
  zv = Vv,
  Gv = function (e, t) {
    return hy(e, t);
  },
  lc = Gv,
  z0 = function (t) {
    return (
      Array.isArray(t) || (typeof Uint8Array < "u" && t instanceof Uint8Array)
    );
  };
ft &&
  ((bv = function (t, r) {
    if (!Buffer.isBuffer(t)) return Mv(t, r);
    var n = t.readUInt32LE(r);
    return n > 0 ? t.toString("utf8", r + 4, r + 4 + n - 1) : "";
  }),
  (jv = function (t, r) {
    if (!Buffer.isBuffer(t)) return Bv(t, r);
    var n = t.readUInt32LE(r);
    return n > 0 ? t.toString("utf8", r + 4, r + 4 + n - 1) : "";
  }),
  ($v = function (t, r) {
    if (!Buffer.isBuffer(t)) return Uv(t, r);
    var n = 2 * t.readUInt32LE(r);
    return t.toString("utf16le", r + 4, r + 4 + n - 1);
  }),
  (Wv = function (t, r) {
    if (!Buffer.isBuffer(t)) return Hv(t, r);
    var n = t.readUInt32LE(r);
    return t.toString("utf16le", r + 4, r + 4 + n);
  }),
  (zv = function (t, r) {
    if (!Buffer.isBuffer(t)) return Vv(t, r);
    var n = t.readUInt32LE(r);
    return t.toString("utf8", r + 4, r + 4 + n);
  }),
  (lc = function (t, r) {
    return Buffer.isBuffer(t) ? t.readDoubleLE(r) : Gv(t, r);
  }),
  (z0 = function (t) {
    return (
      Buffer.isBuffer(t) ||
      Array.isArray(t) ||
      (typeof Uint8Array < "u" && t instanceof Uint8Array)
    );
  }));
var Ii = function (e, t) {
    return e[t];
  },
  js = function (e, t) {
    return e[t + 1] * 256 + e[t];
  },
  my = function (e, t) {
    var r = e[t + 1] * 256 + e[t];
    return r < 32768 ? r : (65535 - r + 1) * -1;
  },
  on = function (e, t) {
    return e[t + 3] * (1 << 24) + (e[t + 2] << 16) + (e[t + 1] << 8) + e[t];
  },
  ei = function (e, t) {
    return (e[t + 3] << 24) | (e[t + 2] << 16) | (e[t + 1] << 8) | e[t];
  },
  vy = function (e, t) {
    return (e[t] << 24) | (e[t + 1] << 16) | (e[t + 2] << 8) | e[t + 3];
  };
function Zs(e, t) {
  var r = "",
    n,
    a,
    i = [],
    s,
    o,
    l,
    c;
  switch (t) {
    case "dbcs":
      if (((c = this.l), ft && Buffer.isBuffer(this)))
        r = this.slice(this.l, this.l + 2 * e).toString("utf16le");
      else
        for (l = 0; l < e; ++l)
          (r += String.fromCharCode(js(this, c))), (c += 2);
      e *= 2;
      break;
    case "utf8":
      r = Mo(this, this.l, this.l + e);
      break;
    case "utf16le":
      (e *= 2), (r = V0(this, this.l, this.l + e));
      break;
    case "wstr":
      return Zs.call(this, e, "dbcs");
    case "lpstr-ansi":
      (r = bv(this, this.l)), (e = 4 + on(this, this.l));
      break;
    case "lpstr-cp":
      (r = jv(this, this.l)), (e = 4 + on(this, this.l));
      break;
    case "lpwstr":
      (r = $v(this, this.l)), (e = 4 + 2 * on(this, this.l));
      break;
    case "lpp4":
      (e = 4 + on(this, this.l)), (r = Wv(this, this.l)), e & 2 && (e += 2);
      break;
    case "8lpp4":
      (e = 4 + on(this, this.l)),
        (r = zv(this, this.l)),
        e & 3 && (e += 4 - (e & 3));
      break;
    case "cstr":
      for (e = 0, r = ""; (s = Ii(this, this.l + e++)) !== 0; ) i.push(ul(s));
      r = i.join("");
      break;
    case "_wstr":
      for (e = 0, r = ""; (s = js(this, this.l + e)) !== 0; )
        i.push(ul(s)), (e += 2);
      (e += 2), (r = i.join(""));
      break;
    case "dbcs-cont":
      for (r = "", c = this.l, l = 0; l < e; ++l) {
        if (this.lens && this.lens.indexOf(c) !== -1)
          return (
            (s = Ii(this, c)),
            (this.l = c + 1),
            (o = Zs.call(this, e - l, s ? "dbcs-cont" : "sbcs-cont")),
            i.join("") + o
          );
        i.push(ul(js(this, c))), (c += 2);
      }
      (r = i.join("")), (e *= 2);
      break;
    case "cpstr":
    case "sbcs-cont":
      for (r = "", c = this.l, l = 0; l != e; ++l) {
        if (this.lens && this.lens.indexOf(c) !== -1)
          return (
            (s = Ii(this, c)),
            (this.l = c + 1),
            (o = Zs.call(this, e - l, s ? "dbcs-cont" : "sbcs-cont")),
            i.join("") + o
          );
        i.push(ul(Ii(this, c))), (c += 1);
      }
      r = i.join("");
      break;
    default:
      switch (e) {
        case 1:
          return (n = Ii(this, this.l)), this.l++, n;
        case 2:
          return (n = (t === "i" ? my : js)(this, this.l)), (this.l += 2), n;
        case 4:
        case -4:
          return t === "i" || !(this[this.l + 3] & 128)
            ? ((n = (e > 0 ? ei : vy)(this, this.l)), (this.l += 4), n)
            : ((a = on(this, this.l)), (this.l += 4), a);
        case 8:
        case -8:
          if (t === "f")
            return (
              e == 8
                ? (a = lc(this, this.l))
                : (a = lc(
                    [
                      this[this.l + 7],
                      this[this.l + 6],
                      this[this.l + 5],
                      this[this.l + 4],
                      this[this.l + 3],
                      this[this.l + 2],
                      this[this.l + 1],
                      this[this.l + 0],
                    ],
                    0,
                  )),
              (this.l += 8),
              a
            );
          e = 8;
        case 16:
          r = Pv(this, this.l, e);
          break;
      }
  }
  return (this.l += e), r;
}
var gy = function (e, t, r) {
    (e[r] = t & 255),
      (e[r + 1] = (t >>> 8) & 255),
      (e[r + 2] = (t >>> 16) & 255),
      (e[r + 3] = (t >>> 24) & 255);
  },
  xy = function (e, t, r) {
    (e[r] = t & 255),
      (e[r + 1] = (t >> 8) & 255),
      (e[r + 2] = (t >> 16) & 255),
      (e[r + 3] = (t >> 24) & 255);
  },
  _y = function (e, t, r) {
    (e[r] = t & 255), (e[r + 1] = (t >>> 8) & 255);
  };
function Ey(e, t, r) {
  var n = 0,
    a = 0;
  if (r === "dbcs") {
    for (a = 0; a != t.length; ++a) _y(this, t.charCodeAt(a), this.l + 2 * a);
    n = 2 * t.length;
  } else if (r === "sbcs") {
    for (t = t.replace(/[^\x00-\x7F]/g, "_"), a = 0; a != t.length; ++a)
      this[this.l + a] = t.charCodeAt(a) & 255;
    n = t.length;
  } else if (r === "hex") {
    for (; a < e; ++a)
      this[this.l++] = parseInt(t.slice(2 * a, 2 * a + 2), 16) || 0;
    return this;
  } else if (r === "utf16le") {
    var i = Math.min(this.l + e, this.length);
    for (a = 0; a < Math.min(t.length, e); ++a) {
      var s = t.charCodeAt(a);
      (this[this.l++] = s & 255), (this[this.l++] = s >> 8);
    }
    for (; this.l < i; ) this[this.l++] = 0;
    return this;
  } else
    switch (e) {
      case 1:
        (n = 1), (this[this.l] = t & 255);
        break;
      case 2:
        (n = 2),
          (this[this.l] = t & 255),
          (t >>>= 8),
          (this[this.l + 1] = t & 255);
        break;
      case 3:
        (n = 3),
          (this[this.l] = t & 255),
          (t >>>= 8),
          (this[this.l + 1] = t & 255),
          (t >>>= 8),
          (this[this.l + 2] = t & 255);
        break;
      case 4:
        (n = 4), gy(this, t, this.l);
        break;
      case 8:
        if (((n = 8), r === "f")) {
          py(this, t, this.l);
          break;
        }
      case 16:
        break;
      case -4:
        (n = 4), xy(this, t, this.l);
        break;
    }
  return (this.l += n), this;
}
function Yv(e, t) {
  var r = Pv(this, this.l, e.length >> 1);
  if (r !== e) throw new Error(t + "Expected " + e + " saw " + r);
  this.l += e.length >> 1;
}
function nn(e, t) {
  (e.l = t), (e.read_shift = Zs), (e.chk = Yv), (e.write_shift = Ey);
}
function Jn(e, t) {
  e.l += t;
}
function ne(e) {
  var t = vi(e);
  return nn(t, 0), t;
}
function Yr() {
  var e = [],
    t = ft ? 256 : 2048,
    r = function (c) {
      var u = ne(c);
      return nn(u, 0), u;
    },
    n = r(t),
    a = function () {
      n &&
        (n.length > n.l && ((n = n.slice(0, n.l)), (n.l = n.length)),
        n.length > 0 && e.push(n),
        (n = null));
    },
    i = function (c) {
      return n && c < n.length - n.l ? n : (a(), (n = r(Math.max(c + 1, t))));
    },
    s = function () {
      return a(), vr(e);
    },
    o = function (c) {
      a(), (n = c), n.l == null && (n.l = n.length), i(t);
    };
  return { next: i, push: o, end: s, _bufs: e };
}
function ce(e, t, r, n) {
  var a = +t,
    i;
  if (!isNaN(a)) {
    n || (n = hC[a].p || (r || []).length || 0),
      (i = 1 + (a >= 128 ? 1 : 0) + 1),
      n >= 128 && ++i,
      n >= 16384 && ++i,
      n >= 2097152 && ++i;
    var s = e.next(i);
    a <= 127
      ? s.write_shift(1, a)
      : (s.write_shift(1, (a & 127) + 128), s.write_shift(1, a >> 7));
    for (var o = 0; o != 4; ++o)
      if (n >= 128) s.write_shift(1, (n & 127) + 128), (n >>= 7);
      else {
        s.write_shift(1, n);
        break;
      }
    n > 0 && z0(r) && e.push(r);
  }
}
function qs(e, t, r) {
  var n = Xr(e);
  if (
    (t.s
      ? (n.cRel && (n.c += t.s.c), n.rRel && (n.r += t.s.r))
      : (n.cRel && (n.c += t.c), n.rRel && (n.r += t.r)),
    !r || r.biff < 12)
  ) {
    for (; n.c >= 256; ) n.c -= 256;
    for (; n.r >= 65536; ) n.r -= 65536;
  }
  return n;
}
function up(e, t, r) {
  var n = Xr(e);
  return (n.s = qs(n.s, t.s, r)), (n.e = qs(n.e, t.s, r)), n;
}
function eo(e, t) {
  if (e.cRel && e.c < 0) for (e = Xr(e); e.c < 0; ) e.c += t > 8 ? 16384 : 256;
  if (e.rRel && e.r < 0)
    for (e = Xr(e); e.r < 0; ) e.r += t > 8 ? 1048576 : t > 5 ? 65536 : 16384;
  var r = xt(e);
  return (
    !e.cRel && e.cRel != null && (r = Sy(r)),
    !e.rRel && e.rRel != null && (r = yy(r)),
    r
  );
}
function Fu(e, t) {
  return e.s.r == 0 &&
    !e.s.rRel &&
    e.e.r == (t.biff >= 12 ? 1048575 : t.biff >= 8 ? 65536 : 16384) &&
    !e.e.rRel
    ? (e.s.cRel ? "" : "$") +
        Ar(e.s.c) +
        ":" +
        (e.e.cRel ? "" : "$") +
        Ar(e.e.c)
    : e.s.c == 0 &&
        !e.s.cRel &&
        e.e.c == (t.biff >= 12 ? 16383 : 255) &&
        !e.e.cRel
      ? (e.s.rRel ? "" : "$") +
        _r(e.s.r) +
        ":" +
        (e.e.rRel ? "" : "$") +
        _r(e.e.r)
      : eo(e.s, t.biff) + ":" + eo(e.e, t.biff);
}
function G0(e) {
  return parseInt(wy(e), 10) - 1;
}
function _r(e) {
  return "" + (e + 1);
}
function yy(e) {
  return e.replace(/([A-Z]|^)(\d+)$/, "$1$$$2");
}
function wy(e) {
  return e.replace(/\$(\d+)$/, "$1");
}
function Y0(e) {
  for (var t = Ty(e), r = 0, n = 0; n !== t.length; ++n)
    r = 26 * r + t.charCodeAt(n) - 64;
  return r - 1;
}
function Ar(e) {
  if (e < 0) throw new Error("invalid column " + e);
  var t = "";
  for (++e; e; e = Math.floor((e - 1) / 26))
    t = String.fromCharCode(((e - 1) % 26) + 65) + t;
  return t;
}
function Sy(e) {
  return e.replace(/^([A-Z])/, "$$$1");
}
function Ty(e) {
  return e.replace(/^\$([A-Z])/, "$1");
}
function Ay(e) {
  return e.replace(/(\$?[A-Z]*)(\$?\d*)/, "$1,$2").split(",");
}
function or(e) {
  for (var t = 0, r = 0, n = 0; n < e.length; ++n) {
    var a = e.charCodeAt(n);
    a >= 48 && a <= 57
      ? (t = 10 * t + (a - 48))
      : a >= 65 && a <= 90 && (r = 26 * r + (a - 64));
  }
  return { c: r - 1, r: t - 1 };
}
function xt(e) {
  for (var t = e.c + 1, r = ""; t; t = ((t - 1) / 26) | 0)
    r = String.fromCharCode(((t - 1) % 26) + 65) + r;
  return r + (e.r + 1);
}
function fn(e) {
  var t = e.indexOf(":");
  return t == -1
    ? { s: or(e), e: or(e) }
    : { s: or(e.slice(0, t)), e: or(e.slice(t + 1)) };
}
function Jt(e, t) {
  return typeof t > "u" || typeof t == "number"
    ? Jt(e.s, e.e)
    : (typeof e != "string" && (e = xt(e)),
      typeof t != "string" && (t = xt(t)),
      e == t ? e : e + ":" + t);
}
function Ft(e) {
  var t = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } },
    r = 0,
    n = 0,
    a = 0,
    i = e.length;
  for (r = 0; n < i && !((a = e.charCodeAt(n) - 64) < 1 || a > 26); ++n)
    r = 26 * r + a;
  for (
    t.s.c = --r, r = 0;
    n < i && !((a = e.charCodeAt(n) - 48) < 0 || a > 9);
    ++n
  )
    r = 10 * r + a;
  if (((t.s.r = --r), n === i || a != 10))
    return (t.e.c = t.s.c), (t.e.r = t.s.r), t;
  for (++n, r = 0; n != i && !((a = e.charCodeAt(n) - 64) < 1 || a > 26); ++n)
    r = 26 * r + a;
  for (
    t.e.c = --r, r = 0;
    n != i && !((a = e.charCodeAt(n) - 48) < 0 || a > 9);
    ++n
  )
    r = 10 * r + a;
  return (t.e.r = --r), t;
}
function fp(e, t) {
  var r = e.t == "d" && t instanceof Date;
  if (e.z != null)
    try {
      return (e.w = Ha(e.z, r ? Kr(t) : t));
    } catch {}
  try {
    return (e.w = Ha((e.XF || {}).numFmtId || (r ? 14 : 0), r ? Kr(t) : t));
  } catch {
    return "" + t;
  }
}
function da(e, t, r) {
  return e == null || e.t == null || e.t == "z"
    ? ""
    : e.w !== void 0
      ? e.w
      : (e.t == "d" && !e.z && r && r.dateNF && (e.z = r.dateNF),
        e.t == "e" ? bo[e.v] || e.v : t == null ? fp(e, e.v) : fp(e, t));
}
function yi(e, t) {
  var r = t && t.sheet ? t.sheet : "Sheet1",
    n = {};
  return (n[r] = e), { SheetNames: [r], Sheets: n };
}
function Kv(e, t, r) {
  var n = r || {},
    a = e ? Array.isArray(e) : n.dense,
    i = e || (a ? [] : {}),
    s = 0,
    o = 0;
  if (i && n.origin != null) {
    if (typeof n.origin == "number") s = n.origin;
    else {
      var l = typeof n.origin == "string" ? or(n.origin) : n.origin;
      (s = l.r), (o = l.c);
    }
    i["!ref"] || (i["!ref"] = "A1:A1");
  }
  var c = { s: { c: 1e7, r: 1e7 }, e: { c: 0, r: 0 } };
  if (i["!ref"]) {
    var u = Ft(i["!ref"]);
    (c.s.c = u.s.c),
      (c.s.r = u.s.r),
      (c.e.c = Math.max(c.e.c, u.e.c)),
      (c.e.r = Math.max(c.e.r, u.e.r)),
      s == -1 && (c.e.r = s = u.e.r + 1);
  }
  for (var f = 0; f != t.length; ++f)
    if (t[f]) {
      if (!Array.isArray(t[f]))
        throw new Error("aoa_to_sheet expects an array of arrays");
      for (var d = 0; d != t[f].length; ++d)
        if (!(typeof t[f][d] > "u")) {
          var h = { v: t[f][d] },
            m = s + f,
            p = o + d;
          if (
            (c.s.r > m && (c.s.r = m),
            c.s.c > p && (c.s.c = p),
            c.e.r < m && (c.e.r = m),
            c.e.c < p && (c.e.c = p),
            t[f][d] &&
              typeof t[f][d] == "object" &&
              !Array.isArray(t[f][d]) &&
              !(t[f][d] instanceof Date))
          )
            h = t[f][d];
          else if (
            (Array.isArray(h.v) && ((h.f = t[f][d][1]), (h.v = h.v[0])),
            h.v === null)
          )
            if (h.f) h.t = "n";
            else if (n.nullError) (h.t = "e"), (h.v = 0);
            else if (n.sheetStubs) h.t = "z";
            else continue;
          else
            typeof h.v == "number"
              ? (h.t = "n")
              : typeof h.v == "boolean"
                ? (h.t = "b")
                : h.v instanceof Date
                  ? ((h.z = n.dateNF || Ut[14]),
                    n.cellDates
                      ? ((h.t = "d"), (h.w = Ha(h.z, Kr(h.v))))
                      : ((h.t = "n"), (h.v = Kr(h.v)), (h.w = Ha(h.z, h.v))))
                  : (h.t = "s");
          if (a)
            i[m] || (i[m] = []),
              i[m][p] && i[m][p].z && (h.z = i[m][p].z),
              (i[m][p] = h);
          else {
            var x = xt({ c: p, r: m });
            i[x] && i[x].z && (h.z = i[x].z), (i[x] = h);
          }
        }
    }
  return c.s.c < 1e7 && (i["!ref"] = Jt(c)), i;
}
function gs(e, t) {
  return Kv(null, e, t);
}
function Cy(e) {
  return e.read_shift(4, "i");
}
function Bn(e, t) {
  return t || (t = ne(4)), t.write_shift(4, e), t;
}
function Cr(e) {
  var t = e.read_shift(4);
  return t === 0 ? "" : e.read_shift(t, "dbcs");
}
function lr(e, t) {
  var r = !1;
  return (
    t == null && ((r = !0), (t = ne(4 + 2 * e.length))),
    t.write_shift(4, e.length),
    e.length > 0 && t.write_shift(0, e, "dbcs"),
    r ? t.slice(0, t.l) : t
  );
}
function Dy(e) {
  return { ich: e.read_shift(2), ifnt: e.read_shift(2) };
}
function Ly(e, t) {
  return t || (t = ne(4)), t.write_shift(2, 0), t.write_shift(2, 0), t;
}
function K0(e, t) {
  var r = e.l,
    n = e.read_shift(1),
    a = Cr(e),
    i = [],
    s = { t: a, h: a };
  if (n & 1) {
    for (var o = e.read_shift(4), l = 0; l != o; ++l) i.push(Dy(e));
    s.r = i;
  } else s.r = [{ ich: 0, ifnt: 0 }];
  return (e.l = r + t), s;
}
function Ny(e, t) {
  var r = !1;
  return (
    t == null && ((r = !0), (t = ne(15 + 4 * e.t.length))),
    t.write_shift(1, 0),
    lr(e.t, t),
    r ? t.slice(0, t.l) : t
  );
}
var Fy = K0;
function ky(e, t) {
  var r = !1;
  return (
    t == null && ((r = !0), (t = ne(23 + 4 * e.t.length))),
    t.write_shift(1, 1),
    lr(e.t, t),
    t.write_shift(4, 1),
    Ly({ ich: 0, ifnt: 0 }, t),
    r ? t.slice(0, t.l) : t
  );
}
function An(e) {
  var t = e.read_shift(4),
    r = e.read_shift(2);
  return (r += e.read_shift(1) << 16), e.l++, { c: t, iStyleRef: r };
}
function wi(e, t) {
  return (
    t == null && (t = ne(8)),
    t.write_shift(-4, e.c),
    t.write_shift(3, e.iStyleRef || e.s),
    t.write_shift(1, 0),
    t
  );
}
function Si(e) {
  var t = e.read_shift(2);
  return (t += e.read_shift(1) << 16), e.l++, { c: -1, iStyleRef: t };
}
function Ti(e, t) {
  return (
    t == null && (t = ne(4)),
    t.write_shift(3, e.iStyleRef || e.s),
    t.write_shift(1, 0),
    t
  );
}
var Ry = Cr,
  Xv = lr;
function X0(e) {
  var t = e.read_shift(4);
  return t === 0 || t === 4294967295 ? "" : e.read_shift(t, "dbcs");
}
function cc(e, t) {
  var r = !1;
  return (
    t == null && ((r = !0), (t = ne(127))),
    t.write_shift(4, e.length > 0 ? e.length : 4294967295),
    e.length > 0 && t.write_shift(0, e, "dbcs"),
    r ? t.slice(0, t.l) : t
  );
}
var Oy = Cr,
  Pf = X0,
  Q0 = cc;
function Qv(e) {
  var t = e.slice(e.l, e.l + 4),
    r = t[0] & 1,
    n = t[0] & 2;
  e.l += 4;
  var a =
    n === 0 ? lc([0, 0, 0, 0, t[0] & 252, t[1], t[2], t[3]], 0) : ei(t, 0) >> 2;
  return r ? a / 100 : a;
}
function Jv(e, t) {
  t == null && (t = ne(4));
  var r = 0,
    n = 0,
    a = e * 100;
  if (
    (e == (e | 0) && e >= -(1 << 29) && e < 1 << 29
      ? (n = 1)
      : a == (a | 0) && a >= -(1 << 29) && a < 1 << 29 && ((n = 1), (r = 1)),
    n)
  )
    t.write_shift(-4, ((r ? a : e) << 2) + (r + 2));
  else throw new Error("unsupported RkNumber " + e);
}
function Zv(e) {
  var t = { s: {}, e: {} };
  return (
    (t.s.r = e.read_shift(4)),
    (t.e.r = e.read_shift(4)),
    (t.s.c = e.read_shift(4)),
    (t.e.c = e.read_shift(4)),
    t
  );
}
function Iy(e, t) {
  return (
    t || (t = ne(16)),
    t.write_shift(4, e.s.r),
    t.write_shift(4, e.e.r),
    t.write_shift(4, e.s.c),
    t.write_shift(4, e.e.c),
    t
  );
}
var Ai = Zv,
  xs = Iy;
function _s(e) {
  if (e.length - e.l < 8) throw "XLS Xnum Buffer underflow";
  return e.read_shift(8, "f");
}
function gi(e, t) {
  return (t || ne(8)).write_shift(8, e, "f");
}
function Py(e) {
  var t = {},
    r = e.read_shift(1),
    n = r >>> 1,
    a = e.read_shift(1),
    i = e.read_shift(2, "i"),
    s = e.read_shift(1),
    o = e.read_shift(1),
    l = e.read_shift(1);
  switch ((e.l++, n)) {
    case 0:
      t.auto = 1;
      break;
    case 1:
      t.index = a;
      var c = Vy[a];
      c && (t.rgb = wp(c));
      break;
    case 2:
      t.rgb = wp([s, o, l]);
      break;
    case 3:
      t.theme = a;
      break;
  }
  return i != 0 && (t.tint = i > 0 ? i / 32767 : i / 32768), t;
}
function uc(e, t) {
  if ((t || (t = ne(8)), !e || e.auto))
    return t.write_shift(4, 0), t.write_shift(4, 0), t;
  e.index != null
    ? (t.write_shift(1, 2), t.write_shift(1, e.index))
    : e.theme != null
      ? (t.write_shift(1, 6), t.write_shift(1, e.theme))
      : (t.write_shift(1, 5), t.write_shift(1, 0));
  var r = e.tint || 0;
  if (
    (r > 0 ? (r *= 32767) : r < 0 && (r *= 32768),
    t.write_shift(2, r),
    !e.rgb || e.theme != null)
  )
    t.write_shift(2, 0), t.write_shift(1, 0), t.write_shift(1, 0);
  else {
    var n = e.rgb || "FFFFFF";
    typeof n == "number" && (n = ("000000" + n.toString(16)).slice(-6)),
      t.write_shift(1, parseInt(n.slice(0, 2), 16)),
      t.write_shift(1, parseInt(n.slice(2, 4), 16)),
      t.write_shift(1, parseInt(n.slice(4, 6), 16)),
      t.write_shift(1, 255);
  }
  return t;
}
function My(e) {
  var t = e.read_shift(1);
  e.l++;
  var r = {
    fBold: t & 1,
    fItalic: t & 2,
    fUnderline: t & 4,
    fStrikeout: t & 8,
    fOutline: t & 16,
    fShadow: t & 32,
    fCondense: t & 64,
    fExtend: t & 128,
  };
  return r;
}
function by(e, t) {
  t || (t = ne(2));
  var r =
    (e.italic ? 2 : 0) |
    (e.strike ? 8 : 0) |
    (e.outline ? 16 : 0) |
    (e.shadow ? 32 : 0) |
    (e.condense ? 64 : 0) |
    (e.extend ? 128 : 0);
  return t.write_shift(1, r), t.write_shift(1, 0), t;
}
var qv = 2,
  tn = 3,
  pl = 11,
  fc = 19,
  ml = 64,
  By = 65,
  jy = 71,
  Uy = 4108,
  $y = 4126,
  mr = 80,
  dp = {
    1: { n: "CodePage", t: qv },
    2: { n: "Category", t: mr },
    3: { n: "PresentationFormat", t: mr },
    4: { n: "ByteCount", t: tn },
    5: { n: "LineCount", t: tn },
    6: { n: "ParagraphCount", t: tn },
    7: { n: "SlideCount", t: tn },
    8: { n: "NoteCount", t: tn },
    9: { n: "HiddenCount", t: tn },
    10: { n: "MultimediaClipCount", t: tn },
    11: { n: "ScaleCrop", t: pl },
    12: { n: "HeadingPairs", t: Uy },
    13: { n: "TitlesOfParts", t: $y },
    14: { n: "Manager", t: mr },
    15: { n: "Company", t: mr },
    16: { n: "LinksUpToDate", t: pl },
    17: { n: "CharacterCount", t: tn },
    19: { n: "SharedDoc", t: pl },
    22: { n: "HyperlinksChanged", t: pl },
    23: { n: "AppVersion", t: tn, p: "version" },
    24: { n: "DigSig", t: By },
    26: { n: "ContentType", t: mr },
    27: { n: "ContentStatus", t: mr },
    28: { n: "Language", t: mr },
    29: { n: "Version", t: mr },
    255: {},
    2147483648: { n: "Locale", t: fc },
    2147483651: { n: "Behavior", t: fc },
    1919054434: {},
  },
  hp = {
    1: { n: "CodePage", t: qv },
    2: { n: "Title", t: mr },
    3: { n: "Subject", t: mr },
    4: { n: "Author", t: mr },
    5: { n: "Keywords", t: mr },
    6: { n: "Comments", t: mr },
    7: { n: "Template", t: mr },
    8: { n: "LastAuthor", t: mr },
    9: { n: "RevNumber", t: mr },
    10: { n: "EditTime", t: ml },
    11: { n: "LastPrinted", t: ml },
    12: { n: "CreatedDate", t: ml },
    13: { n: "ModifiedDate", t: ml },
    14: { n: "PageCount", t: tn },
    15: { n: "WordCount", t: tn },
    16: { n: "CharCount", t: tn },
    17: { n: "Thumbnail", t: jy },
    18: { n: "Application", t: mr },
    19: { n: "DocSecurity", t: tn },
    255: {},
    2147483648: { n: "Locale", t: fc },
    2147483651: { n: "Behavior", t: fc },
    1919054434: {},
  };
function Hy(e) {
  return e.map(function (t) {
    return [(t >> 16) & 255, (t >> 8) & 255, t & 255];
  });
}
var Wy = Hy([
    0, 16777215, 16711680, 65280, 255, 16776960, 16711935, 65535, 0, 16777215,
    16711680, 65280, 255, 16776960, 16711935, 65535, 8388608, 32768, 128,
    8421376, 8388736, 32896, 12632256, 8421504, 10066431, 10040166, 16777164,
    13434879, 6684774, 16744576, 26316, 13421823, 128, 16711935, 16776960,
    65535, 8388736, 8388608, 32896, 255, 52479, 13434879, 13434828, 16777113,
    10079487, 16751052, 13408767, 16764057, 3368703, 3394764, 10079232,
    16763904, 16750848, 16737792, 6710937, 9868950, 13158, 3381606, 13056,
    3355392, 10040064, 10040166, 3355545, 3355443, 16777215, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]),
  Vy = Xr(Wy),
  bo = {
    0: "#NULL!",
    7: "#DIV/0!",
    15: "#VALUE!",
    23: "#REF!",
    29: "#NAME?",
    36: "#NUM!",
    42: "#N/A",
    43: "#GETTING_DATA",
    255: "#WTF?",
  },
  zy = {
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml":
      "workbooks",
    "application/vnd.ms-excel.sheet.macroEnabled.main+xml": "workbooks",
    "application/vnd.ms-excel.sheet.binary.macroEnabled.main": "workbooks",
    "application/vnd.ms-excel.addin.macroEnabled.main+xml": "workbooks",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml":
      "workbooks",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml":
      "sheets",
    "application/vnd.ms-excel.worksheet": "sheets",
    "application/vnd.ms-excel.binIndexWs": "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml":
      "charts",
    "application/vnd.ms-excel.chartsheet": "charts",
    "application/vnd.ms-excel.macrosheet+xml": "macros",
    "application/vnd.ms-excel.macrosheet": "macros",
    "application/vnd.ms-excel.intlmacrosheet": "TODO",
    "application/vnd.ms-excel.binIndexMs": "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml":
      "dialogs",
    "application/vnd.ms-excel.dialogsheet": "dialogs",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml":
      "strs",
    "application/vnd.ms-excel.sharedStrings": "strs",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml":
      "styles",
    "application/vnd.ms-excel.styles": "styles",
    "application/vnd.openxmlformats-package.core-properties+xml": "coreprops",
    "application/vnd.openxmlformats-officedocument.custom-properties+xml":
      "custprops",
    "application/vnd.openxmlformats-officedocument.extended-properties+xml":
      "extprops",
    "application/vnd.openxmlformats-officedocument.customXmlProperties+xml":
      "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.customProperty":
      "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml":
      "comments",
    "application/vnd.ms-excel.comments": "comments",
    "application/vnd.ms-excel.threadedcomments+xml": "threadedcomments",
    "application/vnd.ms-excel.person+xml": "people",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml":
      "metadata",
    "application/vnd.ms-excel.sheetMetadata": "metadata",
    "application/vnd.ms-excel.pivotTable": "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotTable+xml":
      "TODO",
    "application/vnd.openxmlformats-officedocument.drawingml.chart+xml": "TODO",
    "application/vnd.ms-office.chartcolorstyle+xml": "TODO",
    "application/vnd.ms-office.chartstyle+xml": "TODO",
    "application/vnd.ms-office.chartex+xml": "TODO",
    "application/vnd.ms-excel.calcChain": "calcchains",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.calcChain+xml":
      "calcchains",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.printerSettings":
      "TODO",
    "application/vnd.ms-office.activeX": "TODO",
    "application/vnd.ms-office.activeX+xml": "TODO",
    "application/vnd.ms-excel.attachedToolbars": "TODO",
    "application/vnd.ms-excel.connections": "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml":
      "TODO",
    "application/vnd.ms-excel.externalLink": "links",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.externalLink+xml":
      "links",
    "application/vnd.ms-excel.pivotCacheDefinition": "TODO",
    "application/vnd.ms-excel.pivotCacheRecords": "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheDefinition+xml":
      "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheRecords+xml":
      "TODO",
    "application/vnd.ms-excel.queryTable": "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.queryTable+xml":
      "TODO",
    "application/vnd.ms-excel.userNames": "TODO",
    "application/vnd.ms-excel.revisionHeaders": "TODO",
    "application/vnd.ms-excel.revisionLog": "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionHeaders+xml":
      "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionLog+xml":
      "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.userNames+xml":
      "TODO",
    "application/vnd.ms-excel.tableSingleCells": "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.tableSingleCells+xml":
      "TODO",
    "application/vnd.ms-excel.slicer": "TODO",
    "application/vnd.ms-excel.slicerCache": "TODO",
    "application/vnd.ms-excel.slicer+xml": "TODO",
    "application/vnd.ms-excel.slicerCache+xml": "TODO",
    "application/vnd.ms-excel.wsSortMap": "TODO",
    "application/vnd.ms-excel.table": "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml":
      "TODO",
    "application/vnd.openxmlformats-officedocument.theme+xml": "themes",
    "application/vnd.openxmlformats-officedocument.themeOverride+xml": "TODO",
    "application/vnd.ms-excel.Timeline+xml": "TODO",
    "application/vnd.ms-excel.TimelineCache+xml": "TODO",
    "application/vnd.ms-office.vbaProject": "vba",
    "application/vnd.ms-office.vbaProjectSignature": "TODO",
    "application/vnd.ms-office.volatileDependencies": "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.volatileDependencies+xml":
      "TODO",
    "application/vnd.ms-excel.controlproperties+xml": "TODO",
    "application/vnd.openxmlformats-officedocument.model+data": "TODO",
    "application/vnd.ms-excel.Survey+xml": "TODO",
    "application/vnd.openxmlformats-officedocument.drawing+xml": "drawings",
    "application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml":
      "TODO",
    "application/vnd.openxmlformats-officedocument.drawingml.diagramColors+xml":
      "TODO",
    "application/vnd.openxmlformats-officedocument.drawingml.diagramData+xml":
      "TODO",
    "application/vnd.openxmlformats-officedocument.drawingml.diagramLayout+xml":
      "TODO",
    "application/vnd.openxmlformats-officedocument.drawingml.diagramStyle+xml":
      "TODO",
    "application/vnd.openxmlformats-officedocument.vmlDrawing": "TODO",
    "application/vnd.openxmlformats-package.relationships+xml": "rels",
    "application/vnd.openxmlformats-officedocument.oleObject": "TODO",
    "image/png": "TODO",
    sheet: "js",
  },
  vl = {
    workbooks: {
      xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml",
      xlsm: "application/vnd.ms-excel.sheet.macroEnabled.main+xml",
      xlsb: "application/vnd.ms-excel.sheet.binary.macroEnabled.main",
      xlam: "application/vnd.ms-excel.addin.macroEnabled.main+xml",
      xltx: "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml",
    },
    strs: {
      xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml",
      xlsb: "application/vnd.ms-excel.sharedStrings",
    },
    comments: {
      xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml",
      xlsb: "application/vnd.ms-excel.comments",
    },
    sheets: {
      xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml",
      xlsb: "application/vnd.ms-excel.worksheet",
    },
    charts: {
      xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml",
      xlsb: "application/vnd.ms-excel.chartsheet",
    },
    dialogs: {
      xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml",
      xlsb: "application/vnd.ms-excel.dialogsheet",
    },
    macros: {
      xlsx: "application/vnd.ms-excel.macrosheet+xml",
      xlsb: "application/vnd.ms-excel.macrosheet",
    },
    metadata: {
      xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml",
      xlsb: "application/vnd.ms-excel.sheetMetadata",
    },
    styles: {
      xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml",
      xlsb: "application/vnd.ms-excel.styles",
    },
  };
function eg() {
  return {
    workbooks: [],
    sheets: [],
    charts: [],
    dialogs: [],
    macros: [],
    rels: [],
    strs: [],
    comments: [],
    threadedcomments: [],
    links: [],
    coreprops: [],
    extprops: [],
    custprops: [],
    themes: [],
    styles: [],
    calcchains: [],
    vba: [],
    drawings: [],
    metadata: [],
    people: [],
    TODO: [],
    xmlns: "",
  };
}
function tg(e, t) {
  var r = ty(zy),
    n = [],
    a;
  (n[n.length] = Zt),
    (n[n.length] = Ce("Types", null, {
      xmlns: sr.CT,
      "xmlns:xsd": sr.xsd,
      "xmlns:xsi": sr.xsi,
    })),
    (n = n.concat(
      [
        ["xml", "application/xml"],
        ["bin", "application/vnd.ms-excel.sheet.binary.macroEnabled.main"],
        ["vml", "application/vnd.openxmlformats-officedocument.vmlDrawing"],
        ["data", "application/vnd.openxmlformats-officedocument.model+data"],
        ["bmp", "image/bmp"],
        ["png", "image/png"],
        ["gif", "image/gif"],
        ["emf", "image/x-emf"],
        ["wmf", "image/x-wmf"],
        ["jpg", "image/jpeg"],
        ["jpeg", "image/jpeg"],
        ["tif", "image/tiff"],
        ["tiff", "image/tiff"],
        ["pdf", "application/pdf"],
        ["rels", "application/vnd.openxmlformats-package.relationships+xml"],
      ].map(function (l) {
        return Ce("Default", null, { Extension: l[0], ContentType: l[1] });
      }),
    ));
  var i = function (l) {
      e[l] &&
        e[l].length > 0 &&
        ((a = e[l][0]),
        (n[n.length] = Ce("Override", null, {
          PartName: (a[0] == "/" ? "" : "/") + a,
          ContentType: vl[l][t.bookType] || vl[l].xlsx,
        })));
    },
    s = function (l) {
      (e[l] || []).forEach(function (c) {
        n[n.length] = Ce("Override", null, {
          PartName: (c[0] == "/" ? "" : "/") + c,
          ContentType: vl[l][t.bookType] || vl[l].xlsx,
        });
      });
    },
    o = function (l) {
      (e[l] || []).forEach(function (c) {
        n[n.length] = Ce("Override", null, {
          PartName: (c[0] == "/" ? "" : "/") + c,
          ContentType: r[l][0],
        });
      });
    };
  return (
    i("workbooks"),
    s("sheets"),
    s("charts"),
    o("themes"),
    ["strs", "styles"].forEach(i),
    ["coreprops", "extprops", "custprops"].forEach(o),
    o("vba"),
    o("comments"),
    o("threadedcomments"),
    o("drawings"),
    s("metadata"),
    o("people"),
    n.length > 2 &&
      ((n[n.length] = "</Types>"), (n[1] = n[1].replace("/>", ">"))),
    n.join("")
  );
}
var ut = {
  WB: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument",
  SHEET:
    "http://sheetjs.openxmlformats.org/officeDocument/2006/relationships/officeDocument",
  HLINK:
    "http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink",
  VML: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/vmlDrawing",
  XPATH:
    "http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLinkPath",
  XMISS:
    "http://schemas.microsoft.com/office/2006/relationships/xlExternalLinkPath/xlPathMissing",
  XLINK:
    "http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLink",
  CXML: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXml",
  CXMLP:
    "http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXmlProps",
  CMNT: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments",
  CORE_PROPS:
    "http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties",
  EXT_PROPS:
    "http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties",
  CUST_PROPS:
    "http://schemas.openxmlformats.org/officeDocument/2006/relationships/custom-properties",
  SST: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings",
  STY: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles",
  THEME:
    "http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme",
  CHART:
    "http://schemas.openxmlformats.org/officeDocument/2006/relationships/chart",
  CHARTEX: "http://schemas.microsoft.com/office/2014/relationships/chartEx",
  CS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/chartsheet",
  WS: [
    "http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet",
    "http://purl.oclc.org/ooxml/officeDocument/relationships/worksheet",
  ],
  DS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/dialogsheet",
  MS: "http://schemas.microsoft.com/office/2006/relationships/xlMacrosheet",
  IMG: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/image",
  DRAW: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/drawing",
  XLMETA:
    "http://schemas.openxmlformats.org/officeDocument/2006/relationships/sheetMetadata",
  TCMNT:
    "http://schemas.microsoft.com/office/2017/10/relationships/threadedComment",
  PEOPLE: "http://schemas.microsoft.com/office/2017/10/relationships/person",
  VBA: "http://schemas.microsoft.com/office/2006/relationships/vbaProject",
};
function rg(e) {
  var t = e.lastIndexOf("/");
  return e.slice(0, t + 1) + "_rels/" + e.slice(t + 1) + ".rels";
}
function ts(e) {
  var t = [Zt, Ce("Relationships", null, { xmlns: sr.RELS })];
  return (
    yr(e["!id"]).forEach(function (r) {
      t[t.length] = Ce("Relationship", null, e["!id"][r]);
    }),
    t.length > 2 &&
      ((t[t.length] = "</Relationships>"), (t[1] = t[1].replace("/>", ">"))),
    t.join("")
  );
}
function mt(e, t, r, n, a, i) {
  if (
    (a || (a = {}),
    e["!id"] || (e["!id"] = {}),
    e["!idx"] || (e["!idx"] = 1),
    t < 0)
  )
    for (t = e["!idx"]; e["!id"]["rId" + t]; ++t);
  if (
    ((e["!idx"] = t + 1),
    (a.Id = "rId" + t),
    (a.Type = n),
    (a.Target = r),
    [ut.HLINK, ut.XPATH, ut.XMISS].indexOf(a.Type) > -1 &&
      (a.TargetMode = "External"),
    e["!id"][a.Id])
  )
    throw new Error("Cannot rewrite rId " + t);
  return (e["!id"][a.Id] = a), (e[("/" + a.Target).replace("//", "/")] = a), t;
}
function Gy(e) {
  var t = [Zt];
  t.push(`<manifest:manifest xmlns:manifest="urn:oasis:names:tc:opendocument:xmlns:manifest:1.0" manifest:version="1.2">
`),
    t.push(`  <manifest:file-entry manifest:full-path="/" manifest:version="1.2" manifest:media-type="application/vnd.oasis.opendocument.spreadsheet"/>
`);
  for (var r = 0; r < e.length; ++r)
    t.push(
      '  <manifest:file-entry manifest:full-path="' +
        e[r][0] +
        '" manifest:media-type="' +
        e[r][1] +
        `"/>
`,
    );
  return t.push("</manifest:manifest>"), t.join("");
}
function pp(e, t, r) {
  return [
    '  <rdf:Description rdf:about="' +
      e +
      `">
`,
    '    <rdf:type rdf:resource="http://docs.oasis-open.org/ns/office/1.2/meta/' +
      (r || "odf") +
      "#" +
      t +
      `"/>
`,
    `  </rdf:Description>
`,
  ].join("");
}
function Yy(e, t) {
  return [
    '  <rdf:Description rdf:about="' +
      e +
      `">
`,
    '    <ns0:hasPart xmlns:ns0="http://docs.oasis-open.org/ns/office/1.2/meta/pkg#" rdf:resource="' +
      t +
      `"/>
`,
    `  </rdf:Description>
`,
  ].join("");
}
function Ky(e) {
  var t = [Zt];
  t.push(`<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
`);
  for (var r = 0; r != e.length; ++r)
    t.push(pp(e[r][0], e[r][1])), t.push(Yy("", e[r][0]));
  return t.push(pp("", "Document", "pkg")), t.push("</rdf:RDF>"), t.join("");
}
function ng() {
  return (
    '<office:document-meta xmlns:office="urn:oasis:names:tc:opendocument:xmlns:office:1.0" xmlns:meta="urn:oasis:names:tc:opendocument:xmlns:meta:1.0" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:xlink="http://www.w3.org/1999/xlink" office:version="1.2"><office:meta><meta:generator>SheetJS ' +
    nc.version +
    "</meta:generator></office:meta></office:document-meta>"
  );
}
var ci = [
  ["cp:category", "Category"],
  ["cp:contentStatus", "ContentStatus"],
  ["cp:keywords", "Keywords"],
  ["cp:lastModifiedBy", "LastAuthor"],
  ["cp:lastPrinted", "LastPrinted"],
  ["cp:revision", "RevNumber"],
  ["cp:version", "Version"],
  ["dc:creator", "Author"],
  ["dc:description", "Comments"],
  ["dc:identifier", "Identifier"],
  ["dc:language", "Language"],
  ["dc:subject", "Subject"],
  ["dc:title", "Title"],
  ["dcterms:created", "CreatedDate", "date"],
  ["dcterms:modified", "ModifiedDate", "date"],
];
function ku(e, t, r, n, a) {
  a[e] != null ||
    t == null ||
    t === "" ||
    ((a[e] = t), (t = vt(t)), (n[n.length] = r ? Ce(e, t, r) : gr(e, t)));
}
function ag(e, t) {
  var r = t || {},
    n = [
      Zt,
      Ce("cp:coreProperties", null, {
        "xmlns:cp": sr.CORE_PROPS,
        "xmlns:dc": sr.dc,
        "xmlns:dcterms": sr.dcterms,
        "xmlns:dcmitype": sr.dcmitype,
        "xmlns:xsi": sr.xsi,
      }),
    ],
    a = {};
  if (!e && !r.Props) return n.join("");
  e &&
    (e.CreatedDate != null &&
      ku(
        "dcterms:created",
        typeof e.CreatedDate == "string"
          ? e.CreatedDate
          : If(e.CreatedDate, r.WTF),
        { "xsi:type": "dcterms:W3CDTF" },
        n,
        a,
      ),
    e.ModifiedDate != null &&
      ku(
        "dcterms:modified",
        typeof e.ModifiedDate == "string"
          ? e.ModifiedDate
          : If(e.ModifiedDate, r.WTF),
        { "xsi:type": "dcterms:W3CDTF" },
        n,
        a,
      ));
  for (var i = 0; i != ci.length; ++i) {
    var s = ci[i],
      o = r.Props && r.Props[s[1]] != null ? r.Props[s[1]] : e ? e[s[1]] : null;
    o === !0
      ? (o = "1")
      : o === !1
        ? (o = "0")
        : typeof o == "number" && (o = String(o)),
      o != null && ku(s[0], o, null, n, a);
  }
  return (
    n.length > 2 &&
      ((n[n.length] = "</cp:coreProperties>"),
      (n[1] = n[1].replace("/>", ">"))),
    n.join("")
  );
}
var rs = [
    ["Application", "Application", "string"],
    ["AppVersion", "AppVersion", "string"],
    ["Company", "Company", "string"],
    ["DocSecurity", "DocSecurity", "string"],
    ["Manager", "Manager", "string"],
    ["HyperlinksChanged", "HyperlinksChanged", "bool"],
    ["SharedDoc", "SharedDoc", "bool"],
    ["LinksUpToDate", "LinksUpToDate", "bool"],
    ["ScaleCrop", "ScaleCrop", "bool"],
    ["HeadingPairs", "HeadingPairs", "raw"],
    ["TitlesOfParts", "TitlesOfParts", "raw"],
  ],
  ig = [
    "Worksheets",
    "SheetNames",
    "NamedRanges",
    "DefinedNames",
    "Chartsheets",
    "ChartNames",
  ];
function sg(e) {
  var t = [],
    r = Ce;
  return (
    e || (e = {}),
    (e.Application = "SheetJS"),
    (t[t.length] = Zt),
    (t[t.length] = Ce("Properties", null, {
      xmlns: sr.EXT_PROPS,
      "xmlns:vt": sr.vt,
    })),
    rs.forEach(function (n) {
      if (e[n[1]] !== void 0) {
        var a;
        switch (n[2]) {
          case "string":
            a = vt(String(e[n[1]]));
            break;
          case "bool":
            a = e[n[1]] ? "true" : "false";
            break;
        }
        a !== void 0 && (t[t.length] = r(n[0], a));
      }
    }),
    (t[t.length] = r(
      "HeadingPairs",
      r(
        "vt:vector",
        r("vt:variant", "<vt:lpstr>Worksheets</vt:lpstr>") +
          r("vt:variant", r("vt:i4", String(e.Worksheets))),
        { size: 2, baseType: "variant" },
      ),
    )),
    (t[t.length] = r(
      "TitlesOfParts",
      r(
        "vt:vector",
        e.SheetNames.map(function (n) {
          return "<vt:lpstr>" + vt(n) + "</vt:lpstr>";
        }).join(""),
        { size: e.Worksheets, baseType: "lpstr" },
      ),
    )),
    t.length > 2 &&
      ((t[t.length] = "</Properties>"), (t[1] = t[1].replace("/>", ">"))),
    t.join("")
  );
}
function og(e) {
  var t = [
    Zt,
    Ce("Properties", null, { xmlns: sr.CUST_PROPS, "xmlns:vt": sr.vt }),
  ];
  if (!e) return t.join("");
  var r = 1;
  return (
    yr(e).forEach(function (a) {
      ++r,
        (t[t.length] = Ce("property", dy(e[a]), {
          fmtid: "{D5CDD505-2E9C-101B-9397-08002B2CF9AE}",
          pid: r,
          name: vt(a),
        }));
    }),
    t.length > 2 &&
      ((t[t.length] = "</Properties>"), (t[1] = t[1].replace("/>", ">"))),
    t.join("")
  );
}
var mp = {
  Title: "Title",
  Subject: "Subject",
  Author: "Author",
  Keywords: "Keywords",
  Comments: "Description",
  LastAuthor: "LastAuthor",
  RevNumber: "Revision",
  Application: "AppName",
  LastPrinted: "LastPrinted",
  CreatedDate: "Created",
  ModifiedDate: "LastSaved",
  Category: "Category",
  Manager: "Manager",
  Company: "Company",
  AppVersion: "Version",
  ContentStatus: "ContentStatus",
  Identifier: "Identifier",
  Language: "Language",
};
function Xy(e, t) {
  var r = [];
  return (
    yr(mp)
      .map(function (n) {
        for (var a = 0; a < ci.length; ++a) if (ci[a][1] == n) return ci[a];
        for (a = 0; a < rs.length; ++a) if (rs[a][1] == n) return rs[a];
        throw n;
      })
      .forEach(function (n) {
        if (e[n[1]] != null) {
          var a =
            t && t.Props && t.Props[n[1]] != null ? t.Props[n[1]] : e[n[1]];
          switch (n[2]) {
            case "date":
              a = new Date(a).toISOString().replace(/\.\d*Z/, "Z");
              break;
          }
          typeof a == "number"
            ? (a = String(a))
            : a === !0 || a === !1
              ? (a = a ? "1" : "0")
              : a instanceof Date &&
                (a = new Date(a).toISOString().replace(/\.\d*Z/, "")),
            r.push(gr(mp[n[1]] || n[1], a));
        }
      }),
    Ce("DocumentProperties", r.join(""), { xmlns: sn.o })
  );
}
function Qy(e, t) {
  var r = ["Worksheets", "SheetNames"],
    n = "CustomDocumentProperties",
    a = [];
  return (
    e &&
      yr(e).forEach(function (i) {
        if (Object.prototype.hasOwnProperty.call(e, i)) {
          for (var s = 0; s < ci.length; ++s) if (i == ci[s][1]) return;
          for (s = 0; s < rs.length; ++s) if (i == rs[s][1]) return;
          for (s = 0; s < r.length; ++s) if (i == r[s]) return;
          var o = e[i],
            l = "string";
          typeof o == "number"
            ? ((l = "float"), (o = String(o)))
            : o === !0 || o === !1
              ? ((l = "boolean"), (o = o ? "1" : "0"))
              : (o = String(o)),
            a.push(Ce(rp(i), o, { "dt:dt": l }));
        }
      }),
    t &&
      yr(t).forEach(function (i) {
        if (
          Object.prototype.hasOwnProperty.call(t, i) &&
          !(e && Object.prototype.hasOwnProperty.call(e, i))
        ) {
          var s = t[i],
            o = "string";
          typeof s == "number"
            ? ((o = "float"), (s = String(s)))
            : s === !0 || s === !1
              ? ((o = "boolean"), (s = s ? "1" : "0"))
              : s instanceof Date
                ? ((o = "dateTime.tz"), (s = s.toISOString()))
                : (s = String(s)),
            a.push(Ce(rp(i), s, { "dt:dt": o }));
        }
      }),
    "<" + n + ' xmlns="' + sn.o + '">' + a.join("") + "</" + n + ">"
  );
}
function Jy(e) {
  var t = typeof e == "string" ? new Date(Date.parse(e)) : e,
    r = t.getTime() / 1e3 + 11644473600,
    n = r % Math.pow(2, 32),
    a = (r - n) / Math.pow(2, 32);
  (n *= 1e7), (a *= 1e7);
  var i = (n / Math.pow(2, 32)) | 0;
  i > 0 && ((n = n % Math.pow(2, 32)), (a += i));
  var s = ne(8);
  return s.write_shift(4, n), s.write_shift(4, a), s;
}
function vp(e, t) {
  var r = ne(4),
    n = ne(4);
  switch ((r.write_shift(4, e == 80 ? 31 : e), e)) {
    case 3:
      n.write_shift(-4, t);
      break;
    case 5:
      (n = ne(8)), n.write_shift(8, t, "f");
      break;
    case 11:
      n.write_shift(4, t ? 1 : 0);
      break;
    case 64:
      n = Jy(t);
      break;
    case 31:
    case 80:
      for (
        n = ne(4 + 2 * (t.length + 1) + (t.length % 2 ? 0 : 2)),
          n.write_shift(4, t.length + 1),
          n.write_shift(0, t, "dbcs");
        n.l != n.length;

      )
        n.write_shift(1, 0);
      break;
    default:
      throw new Error("TypedPropertyValue unrecognized type " + e + " " + t);
  }
  return vr([r, n]);
}
var lg = [
  "CodePage",
  "Thumbnail",
  "_PID_LINKBASE",
  "_PID_HLINKS",
  "SystemIdentifier",
  "FMTID",
];
function Zy(e) {
  switch (typeof e) {
    case "boolean":
      return 11;
    case "number":
      return (e | 0) == e ? 3 : 5;
    case "string":
      return 31;
    case "object":
      if (e instanceof Date) return 64;
      break;
  }
  return -1;
}
function gp(e, t, r) {
  var n = ne(8),
    a = [],
    i = [],
    s = 8,
    o = 0,
    l = ne(8),
    c = ne(8);
  if (
    (l.write_shift(4, 2),
    l.write_shift(4, 1200),
    c.write_shift(4, 1),
    i.push(l),
    a.push(c),
    (s += 8 + l.length),
    !t)
  ) {
    (c = ne(8)), c.write_shift(4, 0), a.unshift(c);
    var u = [ne(4)];
    for (u[0].write_shift(4, e.length), o = 0; o < e.length; ++o) {
      var f = e[o][0];
      for (
        l = ne(8 + 2 * (f.length + 1) + (f.length % 2 ? 0 : 2)),
          l.write_shift(4, o + 2),
          l.write_shift(4, f.length + 1),
          l.write_shift(0, f, "dbcs");
        l.l != l.length;

      )
        l.write_shift(1, 0);
      u.push(l);
    }
    (l = vr(u)), i.unshift(l), (s += 8 + l.length);
  }
  for (o = 0; o < e.length; ++o)
    if (
      !(t && !t[e[o][0]]) &&
      !(lg.indexOf(e[o][0]) > -1 || ig.indexOf(e[o][0]) > -1) &&
      e[o][1] != null
    ) {
      var d = e[o][1],
        h = 0;
      if (t) {
        h = +t[e[o][0]];
        var m = r[h];
        if (m.p == "version" && typeof d == "string") {
          var p = d.split(".");
          d = (+p[0] << 16) + (+p[1] || 0);
        }
        l = vp(m.t, d);
      } else {
        var x = Zy(d);
        x == -1 && ((x = 31), (d = String(d))), (l = vp(x, d));
      }
      i.push(l),
        (c = ne(8)),
        c.write_shift(4, t ? h : 2 + o),
        a.push(c),
        (s += 8 + l.length);
    }
  var _ = 8 * (i.length + 1);
  for (o = 0; o < i.length; ++o) a[o].write_shift(4, _), (_ += i[o].length);
  return (
    n.write_shift(4, s), n.write_shift(4, i.length), vr([n].concat(a).concat(i))
  );
}
function xp(e, t, r, n, a, i) {
  var s = ne(a ? 68 : 48),
    o = [s];
  s.write_shift(2, 65534),
    s.write_shift(2, 0),
    s.write_shift(4, 842412599),
    s.write_shift(16, yt.utils.consts.HEADER_CLSID, "hex"),
    s.write_shift(4, a ? 2 : 1),
    s.write_shift(16, t, "hex"),
    s.write_shift(4, a ? 68 : 48);
  var l = gp(e, r, n);
  if ((o.push(l), a)) {
    var c = gp(a, null, null);
    s.write_shift(16, i, "hex"), s.write_shift(4, 68 + l.length), o.push(c);
  }
  return vr(o);
}
function qy(e, t) {
  t || (t = ne(e));
  for (var r = 0; r < e; ++r) t.write_shift(1, 0);
  return t;
}
function ew(e, t) {
  return e.read_shift(t) === 1;
}
function Or(e, t) {
  return t || (t = ne(2)), t.write_shift(2, +!!e), t;
}
function cg(e) {
  return e.read_shift(2, "u");
}
function xn(e, t) {
  return t || (t = ne(2)), t.write_shift(2, e), t;
}
function ug(e, t, r) {
  return (
    r || (r = ne(2)),
    r.write_shift(1, t == "e" ? +e : +!!e),
    r.write_shift(1, t == "e" ? 1 : 0),
    r
  );
}
function fg(e, t, r) {
  var n = e.read_shift(r && r.biff >= 12 ? 2 : 1),
    a = "sbcs-cont";
  if ((r && r.biff >= 8, !r || r.biff == 8)) {
    var i = e.read_shift(1);
    i && (a = "dbcs-cont");
  } else r.biff == 12 && (a = "wstr");
  r.biff >= 2 && r.biff <= 5 && (a = "cpstr");
  var s = n ? e.read_shift(n, a) : "";
  return s;
}
function tw(e) {
  var t = e.t || "",
    r = ne(3);
  r.write_shift(2, t.length), r.write_shift(1, 1);
  var n = ne(2 * t.length);
  n.write_shift(2 * t.length, t, "utf16le");
  var a = [r, n];
  return vr(a);
}
function rw(e, t, r) {
  var n;
  if (r) {
    if (r.biff >= 2 && r.biff <= 5) return e.read_shift(t, "cpstr");
    if (r.biff >= 12) return e.read_shift(t, "dbcs-cont");
  }
  var a = e.read_shift(1);
  return (
    a === 0
      ? (n = e.read_shift(t, "sbcs-cont"))
      : (n = e.read_shift(t, "dbcs-cont")),
    n
  );
}
function nw(e, t, r) {
  var n = e.read_shift(r && r.biff == 2 ? 1 : 2);
  return n === 0 ? (e.l++, "") : rw(e, n, r);
}
function aw(e, t, r) {
  if (r.biff > 5) return nw(e, t, r);
  var n = e.read_shift(1);
  return n === 0
    ? (e.l++, "")
    : e.read_shift(n, r.biff <= 4 || !e.lens ? "cpstr" : "sbcs-cont");
}
function dg(e, t, r) {
  return (
    r || (r = ne(3 + 2 * e.length)),
    r.write_shift(2, e.length),
    r.write_shift(1, 1),
    r.write_shift(31, e, "utf16le"),
    r
  );
}
function _p(e, t) {
  t || (t = ne(6 + e.length * 2)), t.write_shift(4, 1 + e.length);
  for (var r = 0; r < e.length; ++r) t.write_shift(2, e.charCodeAt(r));
  return t.write_shift(2, 0), t;
}
function iw(e) {
  var t = ne(512),
    r = 0,
    n = e.Target;
  n.slice(0, 7) == "file://" && (n = n.slice(7));
  var a = n.indexOf("#"),
    i = a > -1 ? 31 : 23;
  switch (n.charAt(0)) {
    case "#":
      i = 28;
      break;
    case ".":
      i &= -3;
      break;
  }
  t.write_shift(4, 2), t.write_shift(4, i);
  var s = [8, 6815827, 6619237, 4849780, 83];
  for (r = 0; r < s.length; ++r) t.write_shift(4, s[r]);
  if (i == 28) (n = n.slice(1)), _p(n, t);
  else if (i & 2) {
    for (
      s = "e0 c9 ea 79 f9 ba ce 11 8c 82 00 aa 00 4b a9 0b".split(" "), r = 0;
      r < s.length;
      ++r
    )
      t.write_shift(1, parseInt(s[r], 16));
    var o = a > -1 ? n.slice(0, a) : n;
    for (t.write_shift(4, 2 * (o.length + 1)), r = 0; r < o.length; ++r)
      t.write_shift(2, o.charCodeAt(r));
    t.write_shift(2, 0), i & 8 && _p(a > -1 ? n.slice(a + 1) : "", t);
  } else {
    for (
      s = "03 03 00 00 00 00 00 00 c0 00 00 00 00 00 00 46".split(" "), r = 0;
      r < s.length;
      ++r
    )
      t.write_shift(1, parseInt(s[r], 16));
    for (
      var l = 0;
      n.slice(l * 3, l * 3 + 3) == "../" || n.slice(l * 3, l * 3 + 3) == "..\\";

    )
      ++l;
    for (
      t.write_shift(2, l), t.write_shift(4, n.length - 3 * l + 1), r = 0;
      r < n.length - 3 * l;
      ++r
    )
      t.write_shift(1, n.charCodeAt(r + 3 * l) & 255);
    for (
      t.write_shift(1, 0),
        t.write_shift(2, 65535),
        t.write_shift(2, 57005),
        r = 0;
      r < 6;
      ++r
    )
      t.write_shift(4, 0);
  }
  return t.slice(0, t.l);
}
function xi(e, t, r, n) {
  return (
    n || (n = ne(6)),
    n.write_shift(2, e),
    n.write_shift(2, t),
    n.write_shift(2, r || 0),
    n
  );
}
function sw(e, t, r) {
  var n = r.biff > 8 ? 4 : 2,
    a = e.read_shift(n),
    i = e.read_shift(n, "i"),
    s = e.read_shift(n, "i");
  return [a, i, s];
}
function ow(e) {
  var t = e.read_shift(2),
    r = e.read_shift(2),
    n = e.read_shift(2),
    a = e.read_shift(2);
  return { s: { c: n, r: t }, e: { c: a, r } };
}
function hg(e, t) {
  return (
    t || (t = ne(8)),
    t.write_shift(2, e.s.r),
    t.write_shift(2, e.e.r),
    t.write_shift(2, e.s.c),
    t.write_shift(2, e.e.c),
    t
  );
}
function J0(e, t, r) {
  var n = 1536,
    a = 16;
  switch (r.bookType) {
    case "biff8":
      break;
    case "biff5":
      (n = 1280), (a = 8);
      break;
    case "biff4":
      (n = 4), (a = 6);
      break;
    case "biff3":
      (n = 3), (a = 6);
      break;
    case "biff2":
      (n = 2), (a = 4);
      break;
    case "xla":
      break;
    default:
      throw new Error("unsupported BIFF version");
  }
  var i = ne(a);
  return (
    i.write_shift(2, n),
    i.write_shift(2, t),
    a > 4 && i.write_shift(2, 29282),
    a > 6 && i.write_shift(2, 1997),
    a > 8 &&
      (i.write_shift(2, 49161),
      i.write_shift(2, 1),
      i.write_shift(2, 1798),
      i.write_shift(2, 0)),
    i
  );
}
function lw(e, t) {
  var r = !t || t.biff == 8,
    n = ne(r ? 112 : 54);
  for (
    n.write_shift(t.biff == 8 ? 2 : 1, 7),
      r && n.write_shift(1, 0),
      n.write_shift(4, 859007059),
      n.write_shift(4, 5458548 | (r ? 0 : 536870912));
    n.l < n.length;

  )
    n.write_shift(1, r ? 0 : 32);
  return n;
}
function cw(e, t) {
  var r = !t || t.biff >= 8 ? 2 : 1,
    n = ne(8 + r * e.name.length);
  n.write_shift(4, e.pos),
    n.write_shift(1, e.hs || 0),
    n.write_shift(1, e.dt),
    n.write_shift(1, e.name.length),
    t.biff >= 8 && n.write_shift(1, 1),
    n.write_shift(r * e.name.length, e.name, t.biff < 8 ? "sbcs" : "utf16le");
  var a = n.slice(0, n.l);
  return (a.l = n.l), a;
}
function uw(e, t) {
  var r = ne(8);
  r.write_shift(4, e.Count), r.write_shift(4, e.Unique);
  for (var n = [], a = 0; a < e.length; ++a) n[a] = tw(e[a]);
  var i = vr([r].concat(n));
  return (
    (i.parts = [r.length].concat(
      n.map(function (s) {
        return s.length;
      }),
    )),
    i
  );
}
function fw() {
  var e = ne(18);
  return (
    e.write_shift(2, 0),
    e.write_shift(2, 0),
    e.write_shift(2, 29280),
    e.write_shift(2, 17600),
    e.write_shift(2, 56),
    e.write_shift(2, 0),
    e.write_shift(2, 0),
    e.write_shift(2, 1),
    e.write_shift(2, 500),
    e
  );
}
function dw(e) {
  var t = ne(18),
    r = 1718;
  return (
    e && e.RTL && (r |= 64),
    t.write_shift(2, r),
    t.write_shift(4, 0),
    t.write_shift(4, 64),
    t.write_shift(4, 0),
    t.write_shift(4, 0),
    t
  );
}
function hw(e, t) {
  var r = e.name || "Arial",
    n = t && t.biff == 5,
    a = n ? 15 + r.length : 16 + 2 * r.length,
    i = ne(a);
  return (
    i.write_shift(2, (e.sz || 12) * 20),
    i.write_shift(4, 0),
    i.write_shift(2, 400),
    i.write_shift(4, 0),
    i.write_shift(2, 0),
    i.write_shift(1, r.length),
    n || i.write_shift(1, 1),
    i.write_shift((n ? 1 : 2) * r.length, r, n ? "sbcs" : "utf16le"),
    i
  );
}
function pw(e, t, r, n) {
  var a = ne(10);
  return xi(e, t, n, a), a.write_shift(4, r), a;
}
function mw(e, t, r, n, a) {
  var i = !a || a.biff == 8,
    s = ne(8 + +i + (1 + i) * r.length);
  return (
    xi(e, t, n, s),
    s.write_shift(2, r.length),
    i && s.write_shift(1, 1),
    s.write_shift((1 + i) * r.length, r, i ? "utf16le" : "sbcs"),
    s
  );
}
function vw(e, t, r, n) {
  var a = r && r.biff == 5;
  n || (n = ne(a ? 3 + t.length : 5 + 2 * t.length)),
    n.write_shift(2, e),
    n.write_shift(a ? 1 : 2, t.length),
    a || n.write_shift(1, 1),
    n.write_shift((a ? 1 : 2) * t.length, t, a ? "sbcs" : "utf16le");
  var i = n.length > n.l ? n.slice(0, n.l) : n;
  return i.l == null && (i.l = i.length), i;
}
function gw(e, t) {
  var r = t.biff == 8 || !t.biff ? 4 : 2,
    n = ne(2 * r + 6);
  return (
    n.write_shift(r, e.s.r),
    n.write_shift(r, e.e.r + 1),
    n.write_shift(2, e.s.c),
    n.write_shift(2, e.e.c + 1),
    n.write_shift(2, 0),
    n
  );
}
function Ep(e, t, r, n) {
  var a = r && r.biff == 5;
  n || (n = ne(a ? 16 : 20)),
    n.write_shift(2, 0),
    e.style
      ? (n.write_shift(2, e.numFmtId || 0), n.write_shift(2, 65524))
      : (n.write_shift(2, e.numFmtId || 0), n.write_shift(2, t << 4));
  var i = 0;
  return (
    e.numFmtId > 0 && a && (i |= 1024),
    n.write_shift(4, i),
    n.write_shift(4, 0),
    a || n.write_shift(4, 0),
    n.write_shift(2, 0),
    n
  );
}
function xw(e) {
  var t = ne(8);
  return t.write_shift(4, 0), t.write_shift(2, 0), t.write_shift(2, 0), t;
}
function _w(e, t, r, n, a, i) {
  var s = ne(8);
  return xi(e, t, n, s), ug(r, i, s), s;
}
function Ew(e, t, r, n) {
  var a = ne(14);
  return xi(e, t, n, a), gi(r, a), a;
}
function yw(e, t, r) {
  if (r.biff < 8) return ww(e, t, r);
  for (
    var n = [], a = e.l + t, i = e.read_shift(r.biff > 8 ? 4 : 2);
    i-- !== 0;

  )
    n.push(sw(e, r.biff > 8 ? 12 : 6, r));
  if (e.l != a) throw new Error("Bad ExternSheet: " + e.l + " != " + a);
  return n;
}
function ww(e, t, r) {
  e[e.l + 1] == 3 && e[e.l]++;
  var n = fg(e, t, r);
  return n.charCodeAt(0) == 3 ? n.slice(1) : n;
}
function Sw(e) {
  var t = ne(2 + e.length * 8);
  t.write_shift(2, e.length);
  for (var r = 0; r < e.length; ++r) hg(e[r], t);
  return t;
}
function Tw(e) {
  var t = ne(24),
    r = or(e[0]);
  t.write_shift(2, r.r),
    t.write_shift(2, r.r),
    t.write_shift(2, r.c),
    t.write_shift(2, r.c);
  for (
    var n = "d0 c9 ea 79 f9 ba ce 11 8c 82 00 aa 00 4b a9 0b".split(" "), a = 0;
    a < 16;
    ++a
  )
    t.write_shift(1, parseInt(n[a], 16));
  return vr([t, iw(e[1])]);
}
function Aw(e) {
  var t = e[1].Tooltip,
    r = ne(10 + 2 * (t.length + 1));
  r.write_shift(2, 2048);
  var n = or(e[0]);
  r.write_shift(2, n.r),
    r.write_shift(2, n.r),
    r.write_shift(2, n.c),
    r.write_shift(2, n.c);
  for (var a = 0; a < t.length; ++a) r.write_shift(2, t.charCodeAt(a));
  return r.write_shift(2, 0), r;
}
function Cw(e) {
  return e || (e = ne(4)), e.write_shift(2, 1), e.write_shift(2, 1), e;
}
function Dw(e, t, r) {
  if (!r.cellStyles) return Jn(e, t);
  var n = r && r.biff >= 12 ? 4 : 2,
    a = e.read_shift(n),
    i = e.read_shift(n),
    s = e.read_shift(n),
    o = e.read_shift(n),
    l = e.read_shift(2);
  n == 2 && (e.l += 2);
  var c = { s: a, e: i, w: s, ixfe: o, flags: l };
  return (r.biff >= 5 || !r.biff) && (c.level = (l >> 8) & 7), c;
}
function Lw(e, t) {
  var r = ne(12);
  r.write_shift(2, t),
    r.write_shift(2, t),
    r.write_shift(2, e.width * 256),
    r.write_shift(2, 0);
  var n = 0;
  return (
    e.hidden && (n |= 1),
    r.write_shift(1, n),
    (n = e.level || 0),
    r.write_shift(1, n),
    r.write_shift(2, 0),
    r
  );
}
function Nw(e) {
  for (var t = ne(2 * e), r = 0; r < e; ++r) t.write_shift(2, r + 1);
  return t;
}
function Fw(e, t, r) {
  var n = ne(15);
  return jo(n, e, t), n.write_shift(8, r, "f"), n;
}
function kw(e, t, r) {
  var n = ne(9);
  return jo(n, e, t), n.write_shift(2, r), n;
}
var Rw = (function () {
    var e = {
        1: 437,
        2: 850,
        3: 1252,
        4: 1e4,
        100: 852,
        101: 866,
        102: 865,
        103: 861,
        104: 895,
        105: 620,
        106: 737,
        107: 857,
        120: 950,
        121: 949,
        122: 936,
        123: 932,
        124: 874,
        125: 1255,
        126: 1256,
        150: 10007,
        151: 10029,
        152: 10006,
        200: 1250,
        201: 1251,
        202: 1254,
        203: 1253,
        0: 20127,
        8: 865,
        9: 437,
        10: 850,
        11: 437,
        13: 437,
        14: 850,
        15: 437,
        16: 850,
        17: 437,
        18: 850,
        19: 932,
        20: 850,
        21: 437,
        22: 850,
        23: 865,
        24: 437,
        25: 437,
        26: 850,
        27: 437,
        28: 863,
        29: 850,
        31: 852,
        34: 852,
        35: 852,
        36: 860,
        37: 850,
        38: 866,
        55: 850,
        64: 852,
        77: 936,
        78: 949,
        79: 950,
        80: 874,
        87: 1252,
        88: 1252,
        89: 1252,
        108: 863,
        134: 737,
        135: 852,
        136: 857,
        204: 1257,
        255: 16969,
      },
      t = U0({
        1: 437,
        2: 850,
        3: 1252,
        4: 1e4,
        100: 852,
        101: 866,
        102: 865,
        103: 861,
        104: 895,
        105: 620,
        106: 737,
        107: 857,
        120: 950,
        121: 949,
        122: 936,
        123: 932,
        124: 874,
        125: 1255,
        126: 1256,
        150: 10007,
        151: 10029,
        152: 10006,
        200: 1250,
        201: 1251,
        202: 1254,
        203: 1253,
        0: 20127,
      });
    function r(o, l) {
      var c = [],
        u = vi(1);
      switch (l.type) {
        case "base64":
          u = In(fa(o));
          break;
        case "binary":
          u = In(o);
          break;
        case "buffer":
        case "array":
          u = o;
          break;
      }
      nn(u, 0);
      var f = u.read_shift(1),
        d = !!(f & 136),
        h = !1,
        m = !1;
      switch (f) {
        case 2:
          break;
        case 3:
          break;
        case 48:
          (h = !0), (d = !0);
          break;
        case 49:
          (h = !0), (d = !0);
          break;
        case 131:
          break;
        case 139:
          break;
        case 140:
          m = !0;
          break;
        case 245:
          break;
        default:
          throw new Error("DBF Unsupported Version: " + f.toString(16));
      }
      var p = 0,
        x = 521;
      f == 2 && (p = u.read_shift(2)),
        (u.l += 3),
        f != 2 && (p = u.read_shift(4)),
        p > 1048576 && (p = 1e6),
        f != 2 && (x = u.read_shift(2));
      var _ = u.read_shift(2),
        v = l.codepage || 1252;
      f != 2 &&
        ((u.l += 16),
        u.read_shift(1),
        u[u.l] !== 0 && (v = e[u[u.l]]),
        (u.l += 1),
        (u.l += 2)),
        m && (u.l += 36);
      for (
        var g = [],
          S = {},
          b = Math.min(u.length, f == 2 ? 521 : x - 10 - (h ? 264 : 0)),
          C = m ? 32 : 11;
        u.l < b && u[u.l] != 13;

      )
        switch (
          ((S = {}),
          (S.name = qa.utils
            .decode(v, u.slice(u.l, u.l + C))
            .replace(/[\u0000\r\n].*$/g, "")),
          (u.l += C),
          (S.type = String.fromCharCode(u.read_shift(1))),
          f != 2 && !m && (S.offset = u.read_shift(4)),
          (S.len = u.read_shift(1)),
          f == 2 && (S.offset = u.read_shift(2)),
          (S.dec = u.read_shift(1)),
          S.name.length && g.push(S),
          f != 2 && (u.l += m ? 13 : 14),
          S.type)
        ) {
          case "B":
            (!h || S.len != 8) &&
              l.WTF &&
              console.log("Skipping " + S.name + ":" + S.type);
            break;
          case "G":
          case "P":
            l.WTF && console.log("Skipping " + S.name + ":" + S.type);
            break;
          case "+":
          case "0":
          case "@":
          case "C":
          case "D":
          case "F":
          case "I":
          case "L":
          case "M":
          case "N":
          case "O":
          case "T":
          case "Y":
            break;
          default:
            throw new Error("Unknown Field Type: " + S.type);
        }
      if ((u[u.l] !== 13 && (u.l = x - 1), u.read_shift(1) !== 13))
        throw new Error("DBF Terminator not found " + u.l + " " + u[u.l]);
      u.l = x;
      var D = 0,
        A = 0;
      for (c[0] = [], A = 0; A != g.length; ++A) c[0][A] = g[A].name;
      for (; p-- > 0; ) {
        if (u[u.l] === 42) {
          u.l += _;
          continue;
        }
        for (++u.l, c[++D] = [], A = 0, A = 0; A != g.length; ++A) {
          var F = u.slice(u.l, u.l + g[A].len);
          (u.l += g[A].len), nn(F, 0);
          var I = qa.utils.decode(v, F);
          switch (g[A].type) {
            case "C":
              I.trim().length && (c[D][A] = I.replace(/\s+$/, ""));
              break;
            case "D":
              I.length === 8
                ? (c[D][A] = new Date(
                    +I.slice(0, 4),
                    +I.slice(4, 6) - 1,
                    +I.slice(6, 8),
                  ))
                : (c[D][A] = I);
              break;
            case "F":
              c[D][A] = parseFloat(I.trim());
              break;
            case "+":
            case "I":
              c[D][A] = m
                ? F.read_shift(-4, "i") ^ 2147483648
                : F.read_shift(4, "i");
              break;
            case "L":
              switch (I.trim().toUpperCase()) {
                case "Y":
                case "T":
                  c[D][A] = !0;
                  break;
                case "N":
                case "F":
                  c[D][A] = !1;
                  break;
                case "":
                case "?":
                  break;
                default:
                  throw new Error("DBF Unrecognized L:|" + I + "|");
              }
              break;
            case "M":
              if (!d)
                throw new Error(
                  "DBF Unexpected MEMO for type " + f.toString(16),
                );
              c[D][A] =
                "##MEMO##" + (m ? parseInt(I.trim(), 10) : F.read_shift(4));
              break;
            case "N":
              (I = I.replace(/\u0000/g, "").trim()),
                I && I != "." && (c[D][A] = +I || 0);
              break;
            case "@":
              c[D][A] = new Date(F.read_shift(-8, "f") - 621356832e5);
              break;
            case "T":
              c[D][A] = new Date(
                (F.read_shift(4) - 2440588) * 864e5 + F.read_shift(4),
              );
              break;
            case "Y":
              c[D][A] =
                F.read_shift(4, "i") / 1e4 +
                (F.read_shift(4, "i") / 1e4) * Math.pow(2, 32);
              break;
            case "O":
              c[D][A] = -F.read_shift(-8, "f");
              break;
            case "B":
              if (h && g[A].len == 8) {
                c[D][A] = F.read_shift(8, "f");
                break;
              }
            case "G":
            case "P":
              F.l += g[A].len;
              break;
            case "0":
              if (g[A].name === "_NullFlags") break;
            default:
              throw new Error("DBF Unsupported data type " + g[A].type);
          }
        }
      }
      if (f != 2 && u.l < u.length && u[u.l++] != 26)
        throw new Error(
          "DBF EOF Marker missing " +
            (u.l - 1) +
            " of " +
            u.length +
            " " +
            u[u.l - 1].toString(16),
        );
      return l && l.sheetRows && (c = c.slice(0, l.sheetRows)), (l.DBF = g), c;
    }
    function n(o, l) {
      var c = l || {};
      c.dateNF || (c.dateNF = "yyyymmdd");
      var u = gs(r(o, c), c);
      return (
        (u["!cols"] = c.DBF.map(function (f) {
          return { wch: f.len, DBF: f };
        })),
        delete c.DBF,
        u
      );
    }
    function a(o, l) {
      try {
        return yi(n(o, l), l);
      } catch (c) {
        if (l && l.WTF) throw c;
      }
      return { SheetNames: [], Sheets: {} };
    }
    var i = { B: 8, C: 250, L: 1, D: 8, "?": 0, "": 0 };
    function s(o, l) {
      var c = l || {};
      if ((+c.codepage >= 0 && Eo(+c.codepage), c.type == "string"))
        throw new Error("Cannot write DBF to JS string");
      var u = Yr(),
        f = vc(o, { header: 1, raw: !0, cellDates: !0 }),
        d = f[0],
        h = f.slice(1),
        m = o["!cols"] || [],
        p = 0,
        x = 0,
        _ = 0,
        v = 1;
      for (p = 0; p < d.length; ++p) {
        if (((m[p] || {}).DBF || {}).name) {
          (d[p] = m[p].DBF.name), ++_;
          continue;
        }
        if (d[p] != null) {
          if (
            (++_,
            typeof d[p] == "number" && (d[p] = d[p].toString(10)),
            typeof d[p] != "string")
          )
            throw new Error(
              "DBF Invalid column name " + d[p] + " |" + typeof d[p] + "|",
            );
          if (d.indexOf(d[p]) !== p) {
            for (x = 0; x < 1024; ++x)
              if (d.indexOf(d[p] + "_" + x) == -1) {
                d[p] += "_" + x;
                break;
              }
          }
        }
      }
      var g = Ft(o["!ref"]),
        S = [],
        b = [],
        C = [];
      for (p = 0; p <= g.e.c - g.s.c; ++p) {
        var D = "",
          A = "",
          F = 0,
          I = [];
        for (x = 0; x < h.length; ++x) h[x][p] != null && I.push(h[x][p]);
        if (I.length == 0 || d[p] == null) {
          S[p] = "?";
          continue;
        }
        for (x = 0; x < I.length; ++x) {
          switch (typeof I[x]) {
            case "number":
              A = "B";
              break;
            case "string":
              A = "C";
              break;
            case "boolean":
              A = "L";
              break;
            case "object":
              A = I[x] instanceof Date ? "D" : "C";
              break;
            default:
              A = "C";
          }
          (F = Math.max(F, String(I[x]).length)), (D = D && D != A ? "C" : A);
        }
        F > 250 && (F = 250),
          (A = ((m[p] || {}).DBF || {}).type),
          A == "C" && m[p].DBF.len > F && (F = m[p].DBF.len),
          D == "B" &&
            A == "N" &&
            ((D = "N"), (C[p] = m[p].DBF.dec), (F = m[p].DBF.len)),
          (b[p] = D == "C" || A == "N" ? F : i[D] || 0),
          (v += b[p]),
          (S[p] = D);
      }
      var P = u.next(32);
      for (
        P.write_shift(4, 318902576),
          P.write_shift(4, h.length),
          P.write_shift(2, 296 + 32 * _),
          P.write_shift(2, v),
          p = 0;
        p < 4;
        ++p
      )
        P.write_shift(4, 0);
      for (
        P.write_shift(4, 0 | ((+t[mv] || 3) << 8)), p = 0, x = 0;
        p < d.length;
        ++p
      )
        if (d[p] != null) {
          var B = u.next(32),
            X = (d[p].slice(-10) + "\0\0\0\0\0\0\0\0\0\0\0").slice(0, 11);
          B.write_shift(1, X, "sbcs"),
            B.write_shift(1, S[p] == "?" ? "C" : S[p], "sbcs"),
            B.write_shift(4, x),
            B.write_shift(1, b[p] || i[S[p]] || 0),
            B.write_shift(1, C[p] || 0),
            B.write_shift(1, 2),
            B.write_shift(4, 0),
            B.write_shift(1, 0),
            B.write_shift(4, 0),
            B.write_shift(4, 0),
            (x += b[p] || i[S[p]] || 0);
        }
      var ae = u.next(264);
      for (ae.write_shift(4, 13), p = 0; p < 65; ++p) ae.write_shift(4, 0);
      for (p = 0; p < h.length; ++p) {
        var le = u.next(v);
        for (le.write_shift(1, 0), x = 0; x < d.length; ++x)
          if (d[x] != null)
            switch (S[x]) {
              case "L":
                le.write_shift(1, h[p][x] == null ? 63 : h[p][x] ? 84 : 70);
                break;
              case "B":
                le.write_shift(8, h[p][x] || 0, "f");
                break;
              case "N":
                var Re = "0";
                for (
                  typeof h[p][x] == "number" &&
                    (Re = h[p][x].toFixed(C[x] || 0)),
                    _ = 0;
                  _ < b[x] - Re.length;
                  ++_
                )
                  le.write_shift(1, 32);
                le.write_shift(1, Re, "sbcs");
                break;
              case "D":
                h[p][x]
                  ? (le.write_shift(
                      4,
                      ("0000" + h[p][x].getFullYear()).slice(-4),
                      "sbcs",
                    ),
                    le.write_shift(
                      2,
                      ("00" + (h[p][x].getMonth() + 1)).slice(-2),
                      "sbcs",
                    ),
                    le.write_shift(
                      2,
                      ("00" + h[p][x].getDate()).slice(-2),
                      "sbcs",
                    ))
                  : le.write_shift(8, "00000000", "sbcs");
                break;
              case "C":
                var Ae = String(h[p][x] != null ? h[p][x] : "").slice(0, b[x]);
                for (
                  le.write_shift(1, Ae, "sbcs"), _ = 0;
                  _ < b[x] - Ae.length;
                  ++_
                )
                  le.write_shift(1, 32);
                break;
            }
      }
      return u.next(1).write_shift(1, 26), u.end();
    }
    return { to_workbook: a, to_sheet: n, from_sheet: s };
  })(),
  Ow = (function () {
    var e = {
        AA: "À",
        BA: "Á",
        CA: "Â",
        DA: 195,
        HA: "Ä",
        JA: 197,
        AE: "È",
        BE: "É",
        CE: "Ê",
        HE: "Ë",
        AI: "Ì",
        BI: "Í",
        CI: "Î",
        HI: "Ï",
        AO: "Ò",
        BO: "Ó",
        CO: "Ô",
        DO: 213,
        HO: "Ö",
        AU: "Ù",
        BU: "Ú",
        CU: "Û",
        HU: "Ü",
        Aa: "à",
        Ba: "á",
        Ca: "â",
        Da: 227,
        Ha: "ä",
        Ja: 229,
        Ae: "è",
        Be: "é",
        Ce: "ê",
        He: "ë",
        Ai: "ì",
        Bi: "í",
        Ci: "î",
        Hi: "ï",
        Ao: "ò",
        Bo: "ó",
        Co: "ô",
        Do: 245,
        Ho: "ö",
        Au: "ù",
        Bu: "ú",
        Cu: "û",
        Hu: "ü",
        KC: "Ç",
        Kc: "ç",
        q: "æ",
        z: "œ",
        a: "Æ",
        j: "Œ",
        DN: 209,
        Dn: 241,
        Hy: 255,
        S: 169,
        c: 170,
        R: 174,
        "B ": 180,
        0: 176,
        1: 177,
        2: 178,
        3: 179,
        5: 181,
        6: 182,
        7: 183,
        Q: 185,
        k: 186,
        b: 208,
        i: 216,
        l: 222,
        s: 240,
        y: 248,
        "!": 161,
        '"': 162,
        "#": 163,
        "(": 164,
        "%": 165,
        "'": 167,
        "H ": 168,
        "+": 171,
        ";": 187,
        "<": 188,
        "=": 189,
        ">": 190,
        "?": 191,
        "{": 223,
      },
      t = new RegExp(
        "\x1BN(" +
          yr(e)
            .join("|")
            .replace(/\|\|\|/, "|\\||")
            .replace(/([?()+])/g, "\\$1") +
          "|\\|)",
        "gm",
      ),
      r = function (d, h) {
        var m = e[h];
        return typeof m == "number" ? Vh(m) : m;
      },
      n = function (d, h, m) {
        var p = ((h.charCodeAt(0) - 32) << 4) | (m.charCodeAt(0) - 48);
        return p == 59 ? d : Vh(p);
      };
    e["|"] = 254;
    function a(d, h) {
      switch (h.type) {
        case "base64":
          return i(fa(d), h);
        case "binary":
          return i(d, h);
        case "buffer":
          return i(ft && Buffer.isBuffer(d) ? d.toString("binary") : Io(d), h);
        case "array":
          return i(Uc(d), h);
      }
      throw new Error("Unrecognized type " + h.type);
    }
    function i(d, h) {
      var m = d.split(/[\n\r]+/),
        p = -1,
        x = -1,
        _ = 0,
        v = 0,
        g = [],
        S = [],
        b = null,
        C = {},
        D = [],
        A = [],
        F = [],
        I = 0,
        P;
      for (+h.codepage >= 0 && Eo(+h.codepage); _ !== m.length; ++_) {
        I = 0;
        var B = m[_].trim()
            .replace(/\x1B([\x20-\x2F])([\x30-\x3F])/g, n)
            .replace(t, r),
          X = B.replace(/;;/g, "\0")
            .split(";")
            .map(function (k) {
              return k.replace(/\u0000/g, ";");
            }),
          ae = X[0],
          le;
        if (B.length > 0)
          switch (ae) {
            case "ID":
              break;
            case "E":
              break;
            case "B":
              break;
            case "O":
              break;
            case "W":
              break;
            case "P":
              X[1].charAt(0) == "P" && S.push(B.slice(3).replace(/;;/g, ";"));
              break;
            case "C":
              var Re = !1,
                Ae = !1,
                se = !1,
                ye = !1,
                ge = -1,
                oe = -1;
              for (v = 1; v < X.length; ++v)
                switch (X[v].charAt(0)) {
                  case "A":
                    break;
                  case "X":
                    (x = parseInt(X[v].slice(1)) - 1), (Ae = !0);
                    break;
                  case "Y":
                    for (
                      p = parseInt(X[v].slice(1)) - 1,
                        Ae || (x = 0),
                        P = g.length;
                      P <= p;
                      ++P
                    )
                      g[P] = [];
                    break;
                  case "K":
                    (le = X[v].slice(1)),
                      le.charAt(0) === '"'
                        ? (le = le.slice(1, le.length - 1))
                        : le === "TRUE"
                          ? (le = !0)
                          : le === "FALSE"
                            ? (le = !1)
                            : isNaN(ia(le))
                              ? isNaN(wo(le).getDate()) || (le = Pr(le))
                              : ((le = ia(le)),
                                b !== null && Dv(b) && (le = kv(le))),
                      (Re = !0);
                    break;
                  case "E":
                    ye = !0;
                    var O = kS(X[v].slice(1), { r: p, c: x });
                    g[p][x] = [g[p][x], O];
                    break;
                  case "S":
                    (se = !0), (g[p][x] = [g[p][x], "S5S"]);
                    break;
                  case "G":
                    break;
                  case "R":
                    ge = parseInt(X[v].slice(1)) - 1;
                    break;
                  case "C":
                    oe = parseInt(X[v].slice(1)) - 1;
                    break;
                  default:
                    if (h && h.WTF) throw new Error("SYLK bad record " + B);
                }
              if (
                (Re &&
                  (g[p][x] && g[p][x].length == 2
                    ? (g[p][x][0] = le)
                    : (g[p][x] = le),
                  (b = null)),
                se)
              ) {
                if (ye)
                  throw new Error(
                    "SYLK shared formula cannot have own formula",
                  );
                var U = ge > -1 && g[ge][oe];
                if (!U || !U[1])
                  throw new Error("SYLK shared formula cannot find base");
                g[p][x][1] = RS(U[1], { r: p - ge, c: x - oe });
              }
              break;
            case "F":
              var R = 0;
              for (v = 1; v < X.length; ++v)
                switch (X[v].charAt(0)) {
                  case "X":
                    (x = parseInt(X[v].slice(1)) - 1), ++R;
                    break;
                  case "Y":
                    for (
                      p = parseInt(X[v].slice(1)) - 1, P = g.length;
                      P <= p;
                      ++P
                    )
                      g[P] = [];
                    break;
                  case "M":
                    I = parseInt(X[v].slice(1)) / 20;
                    break;
                  case "F":
                    break;
                  case "G":
                    break;
                  case "P":
                    b = S[parseInt(X[v].slice(1))];
                    break;
                  case "S":
                    break;
                  case "D":
                    break;
                  case "N":
                    break;
                  case "W":
                    for (
                      F = X[v].slice(1).split(" "), P = parseInt(F[0], 10);
                      P <= parseInt(F[1], 10);
                      ++P
                    )
                      (I = parseInt(F[2], 10)),
                        (A[P - 1] = I === 0 ? { hidden: !0 } : { wch: I }),
                        Z0(A[P - 1]);
                    break;
                  case "C":
                    (x = parseInt(X[v].slice(1)) - 1), A[x] || (A[x] = {});
                    break;
                  case "R":
                    (p = parseInt(X[v].slice(1)) - 1),
                      D[p] || (D[p] = {}),
                      I > 0
                        ? ((D[p].hpt = I), (D[p].hpx = xg(I)))
                        : I === 0 && (D[p].hidden = !0);
                    break;
                  default:
                    if (h && h.WTF) throw new Error("SYLK bad record " + B);
                }
              R < 1 && (b = null);
              break;
            default:
              if (h && h.WTF) throw new Error("SYLK bad record " + B);
          }
      }
      return (
        D.length > 0 && (C["!rows"] = D),
        A.length > 0 && (C["!cols"] = A),
        h && h.sheetRows && (g = g.slice(0, h.sheetRows)),
        [g, C]
      );
    }
    function s(d, h) {
      var m = a(d, h),
        p = m[0],
        x = m[1],
        _ = gs(p, h);
      return (
        yr(x).forEach(function (v) {
          _[v] = x[v];
        }),
        _
      );
    }
    function o(d, h) {
      return yi(s(d, h), h);
    }
    function l(d, h, m, p) {
      var x = "C;Y" + (m + 1) + ";X" + (p + 1) + ";K";
      switch (d.t) {
        case "n":
          (x += d.v || 0), d.f && !d.F && (x += ";E" + ed(d.f, { r: m, c: p }));
          break;
        case "b":
          x += d.v ? "TRUE" : "FALSE";
          break;
        case "e":
          x += d.w || d.v;
          break;
        case "d":
          x += '"' + (d.w || d.v) + '"';
          break;
        case "s":
          x += '"' + d.v.replace(/"/g, "").replace(/;/g, ";;") + '"';
          break;
      }
      return x;
    }
    function c(d, h) {
      h.forEach(function (m, p) {
        var x = "F;W" + (p + 1) + " " + (p + 1) + " ";
        m.hidden
          ? (x += "0")
          : (typeof m.width == "number" && !m.wpx && (m.wpx = dc(m.width)),
            typeof m.wpx == "number" && !m.wch && (m.wch = hc(m.wpx)),
            typeof m.wch == "number" && (x += Math.round(m.wch))),
          x.charAt(x.length - 1) != " " && d.push(x);
      });
    }
    function u(d, h) {
      h.forEach(function (m, p) {
        var x = "F;";
        m.hidden
          ? (x += "M0;")
          : m.hpt
            ? (x += "M" + 20 * m.hpt + ";")
            : m.hpx && (x += "M" + 20 * pc(m.hpx) + ";"),
          x.length > 2 && d.push(x + "R" + (p + 1));
      });
    }
    function f(d, h) {
      var m = ["ID;PWXL;N;E"],
        p = [],
        x = Ft(d["!ref"]),
        _,
        v = Array.isArray(d),
        g = `\r
`;
      m.push("P;PGeneral"),
        m.push("F;P0;DG0G8;M255"),
        d["!cols"] && c(m, d["!cols"]),
        d["!rows"] && u(m, d["!rows"]),
        m.push(
          "B;Y" +
            (x.e.r - x.s.r + 1) +
            ";X" +
            (x.e.c - x.s.c + 1) +
            ";D" +
            [x.s.c, x.s.r, x.e.c, x.e.r].join(" "),
        );
      for (var S = x.s.r; S <= x.e.r; ++S)
        for (var b = x.s.c; b <= x.e.c; ++b) {
          var C = xt({ r: S, c: b });
          (_ = v ? (d[S] || [])[b] : d[C]),
            !(!_ || (_.v == null && (!_.f || _.F))) && p.push(l(_, d, S, b));
        }
      return m.join(g) + g + p.join(g) + g + "E" + g;
    }
    return { to_workbook: o, to_sheet: s, from_sheet: f };
  })(),
  Iw = (function () {
    function e(i, s) {
      switch (s.type) {
        case "base64":
          return t(fa(i), s);
        case "binary":
          return t(i, s);
        case "buffer":
          return t(ft && Buffer.isBuffer(i) ? i.toString("binary") : Io(i), s);
        case "array":
          return t(Uc(i), s);
      }
      throw new Error("Unrecognized type " + s.type);
    }
    function t(i, s) {
      for (
        var o = i.split(`
`),
          l = -1,
          c = -1,
          u = 0,
          f = [];
        u !== o.length;
        ++u
      ) {
        if (o[u].trim() === "BOT") {
          (f[++l] = []), (c = 0);
          continue;
        }
        if (!(l < 0)) {
          var d = o[u].trim().split(","),
            h = d[0],
            m = d[1];
          ++u;
          for (
            var p = o[u] || "";
            (p.match(/["]/g) || []).length & 1 && u < o.length - 1;

          )
            p +=
              `
` + o[++u];
          switch (((p = p.trim()), +h)) {
            case -1:
              if (p === "BOT") {
                (f[++l] = []), (c = 0);
                continue;
              } else if (p !== "EOD")
                throw new Error("Unrecognized DIF special command " + p);
              break;
            case 0:
              p === "TRUE"
                ? (f[l][c] = !0)
                : p === "FALSE"
                  ? (f[l][c] = !1)
                  : isNaN(ia(m))
                    ? isNaN(wo(m).getDate())
                      ? (f[l][c] = m)
                      : (f[l][c] = Pr(m))
                    : (f[l][c] = ia(m)),
                ++c;
              break;
            case 1:
              (p = p.slice(1, p.length - 1)),
                (p = p.replace(/""/g, '"')),
                p && p.match(/^=".*"$/) && (p = p.slice(2, -1)),
                (f[l][c++] = p !== "" ? p : null);
              break;
          }
          if (p === "EOD") break;
        }
      }
      return s && s.sheetRows && (f = f.slice(0, s.sheetRows)), f;
    }
    function r(i, s) {
      return gs(e(i, s), s);
    }
    function n(i, s) {
      return yi(r(i, s), s);
    }
    var a = (function () {
      var i = function (l, c, u, f, d) {
          l.push(c),
            l.push(u + "," + f),
            l.push('"' + d.replace(/"/g, '""') + '"');
        },
        s = function (l, c, u, f) {
          l.push(c + "," + u),
            l.push(c == 1 ? '"' + f.replace(/"/g, '""') + '"' : f);
        };
      return function (l) {
        var c = [],
          u = Ft(l["!ref"]),
          f,
          d = Array.isArray(l);
        i(c, "TABLE", 0, 1, "sheetjs"),
          i(c, "VECTORS", 0, u.e.r - u.s.r + 1, ""),
          i(c, "TUPLES", 0, u.e.c - u.s.c + 1, ""),
          i(c, "DATA", 0, 0, "");
        for (var h = u.s.r; h <= u.e.r; ++h) {
          s(c, -1, 0, "BOT");
          for (var m = u.s.c; m <= u.e.c; ++m) {
            var p = xt({ r: h, c: m });
            if (((f = d ? (l[h] || [])[m] : l[p]), !f)) {
              s(c, 1, 0, "");
              continue;
            }
            switch (f.t) {
              case "n":
                var x = f.w;
                !x && f.v != null && (x = f.v),
                  x == null
                    ? f.f && !f.F
                      ? s(c, 1, 0, "=" + f.f)
                      : s(c, 1, 0, "")
                    : s(c, 0, x, "V");
                break;
              case "b":
                s(c, 0, f.v ? 1 : 0, f.v ? "TRUE" : "FALSE");
                break;
              case "s":
                s(c, 1, 0, isNaN(f.v) ? f.v : '="' + f.v + '"');
                break;
              case "d":
                f.w || (f.w = Ha(f.z || Ut[14], Kr(Pr(f.v)))),
                  s(c, 0, f.w, "V");
                break;
              default:
                s(c, 1, 0, "");
            }
          }
        }
        s(c, -1, 0, "EOD");
        var _ = `\r
`,
          v = c.join(_);
        return v;
      };
    })();
    return { to_workbook: n, to_sheet: r, from_sheet: a };
  })(),
  pg = (function () {
    function e(f) {
      return f
        .replace(/\\b/g, "\\")
        .replace(/\\c/g, ":")
        .replace(
          /\\n/g,
          `
`,
        );
    }
    function t(f) {
      return f.replace(/\\/g, "\\b").replace(/:/g, "\\c").replace(/\n/g, "\\n");
    }
    function r(f, d) {
      for (
        var h = f.split(`
`),
          m = -1,
          p = -1,
          x = 0,
          _ = [];
        x !== h.length;
        ++x
      ) {
        var v = h[x].trim().split(":");
        if (v[0] === "cell") {
          var g = or(v[1]);
          if (_.length <= g.r)
            for (m = _.length; m <= g.r; ++m) _[m] || (_[m] = []);
          switch (((m = g.r), (p = g.c), v[2])) {
            case "t":
              _[m][p] = e(v[3]);
              break;
            case "v":
              _[m][p] = +v[3];
              break;
            case "vtf":
              var S = v[v.length - 1];
            case "vtc":
              switch (v[3]) {
                case "nl":
                  _[m][p] = !!+v[4];
                  break;
                default:
                  _[m][p] = +v[4];
                  break;
              }
              v[2] == "vtf" && (_[m][p] = [_[m][p], S]);
          }
        }
      }
      return d && d.sheetRows && (_ = _.slice(0, d.sheetRows)), _;
    }
    function n(f, d) {
      return gs(r(f, d), d);
    }
    function a(f, d) {
      return yi(n(f, d), d);
    }
    var i = [
        "socialcalc:version:1.5",
        "MIME-Version: 1.0",
        "Content-Type: multipart/mixed; boundary=SocialCalcSpreadsheetControlSave",
      ].join(`
`),
      s =
        [
          "--SocialCalcSpreadsheetControlSave",
          "Content-type: text/plain; charset=UTF-8",
        ].join(`
`) +
        `
`,
      o = ["# SocialCalc Spreadsheet Control Save", "part:sheet"].join(`
`),
      l = "--SocialCalcSpreadsheetControlSave--";
    function c(f) {
      if (!f || !f["!ref"]) return "";
      for (
        var d = [],
          h = [],
          m,
          p = "",
          x = fn(f["!ref"]),
          _ = Array.isArray(f),
          v = x.s.r;
        v <= x.e.r;
        ++v
      )
        for (var g = x.s.c; g <= x.e.c; ++g)
          if (
            ((p = xt({ r: v, c: g })),
            (m = _ ? (f[v] || [])[g] : f[p]),
            !(!m || m.v == null || m.t === "z"))
          ) {
            switch (((h = ["cell", p, "t"]), m.t)) {
              case "s":
              case "str":
                h.push(t(m.v));
                break;
              case "n":
                m.f
                  ? ((h[2] = "vtf"),
                    (h[3] = "n"),
                    (h[4] = m.v),
                    (h[5] = t(m.f)))
                  : ((h[2] = "v"), (h[3] = m.v));
                break;
              case "b":
                (h[2] = "vt" + (m.f ? "f" : "c")),
                  (h[3] = "nl"),
                  (h[4] = m.v ? "1" : "0"),
                  (h[5] = t(m.f || (m.v ? "TRUE" : "FALSE")));
                break;
              case "d":
                var S = Kr(Pr(m.v));
                (h[2] = "vtc"),
                  (h[3] = "nd"),
                  (h[4] = "" + S),
                  (h[5] = m.w || Ha(m.z || Ut[14], S));
                break;
              case "e":
                continue;
            }
            d.push(h.join(":"));
          }
      return (
        d.push(
          "sheet:c:" +
            (x.e.c - x.s.c + 1) +
            ":r:" +
            (x.e.r - x.s.r + 1) +
            ":tvf:1",
        ),
        d.push("valueformat:1:text-wiki"),
        d.join(`
`)
      );
    }
    function u(f) {
      return [i, s, o, s, c(f), l].join(`
`);
    }
    return { to_workbook: a, to_sheet: n, from_sheet: u };
  })(),
  Pw = (function () {
    function e(u, f, d, h, m) {
      m.raw
        ? (f[d][h] = u)
        : u === "" ||
          (u === "TRUE"
            ? (f[d][h] = !0)
            : u === "FALSE"
              ? (f[d][h] = !1)
              : isNaN(ia(u))
                ? isNaN(wo(u).getDate())
                  ? (f[d][h] = u)
                  : (f[d][h] = Pr(u))
                : (f[d][h] = ia(u)));
    }
    function t(u, f) {
      var d = f || {},
        h = [];
      if (!u || u.length === 0) return h;
      for (
        var m = u.split(/[\r\n]/), p = m.length - 1;
        p >= 0 && m[p].length === 0;

      )
        --p;
      for (var x = 10, _ = 0, v = 0; v <= p; ++v)
        (_ = m[v].indexOf(" ")),
          _ == -1 ? (_ = m[v].length) : _++,
          (x = Math.max(x, _));
      for (v = 0; v <= p; ++v) {
        h[v] = [];
        var g = 0;
        for (
          e(m[v].slice(0, x).trim(), h, v, g, d), g = 1;
          g <= (m[v].length - x) / 10 + 1;
          ++g
        )
          e(m[v].slice(x + (g - 1) * 10, x + g * 10).trim(), h, v, g, d);
      }
      return d.sheetRows && (h = h.slice(0, d.sheetRows)), h;
    }
    var r = { 44: ",", 9: "	", 59: ";", 124: "|" },
      n = { 44: 3, 9: 2, 59: 1, 124: 0 };
    function a(u) {
      for (var f = {}, d = !1, h = 0, m = 0; h < u.length; ++h)
        (m = u.charCodeAt(h)) == 34
          ? (d = !d)
          : !d && m in r && (f[m] = (f[m] || 0) + 1);
      m = [];
      for (h in f)
        Object.prototype.hasOwnProperty.call(f, h) && m.push([f[h], h]);
      if (!m.length) {
        f = n;
        for (h in f)
          Object.prototype.hasOwnProperty.call(f, h) && m.push([f[h], h]);
      }
      return (
        m.sort(function (p, x) {
          return p[0] - x[0] || n[p[1]] - n[x[1]];
        }),
        r[m.pop()[1]] || 44
      );
    }
    function i(u, f) {
      var d = f || {},
        h = "",
        m = d.dense ? [] : {},
        p = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } };
      u.slice(0, 4) == "sep="
        ? u.charCodeAt(5) == 13 && u.charCodeAt(6) == 10
          ? ((h = u.charAt(4)), (u = u.slice(7)))
          : u.charCodeAt(5) == 13 || u.charCodeAt(5) == 10
            ? ((h = u.charAt(4)), (u = u.slice(6)))
            : (h = a(u.slice(0, 1024)))
        : d && d.FS
          ? (h = d.FS)
          : (h = a(u.slice(0, 1024)));
      var x = 0,
        _ = 0,
        v = 0,
        g = 0,
        S = 0,
        b = h.charCodeAt(0),
        C = !1,
        D = 0,
        A = u.charCodeAt(0);
      u = u.replace(
        /\r\n/gm,
        `
`,
      );
      var F = d.dateNF != null ? J2(d.dateNF) : null;
      function I() {
        var P = u.slice(g, S),
          B = {};
        if (
          (P.charAt(0) == '"' &&
            P.charAt(P.length - 1) == '"' &&
            (P = P.slice(1, -1).replace(/""/g, '"')),
          P.length === 0)
        )
          B.t = "z";
        else if (d.raw) (B.t = "s"), (B.v = P);
        else if (P.trim().length === 0) (B.t = "s"), (B.v = P);
        else if (P.charCodeAt(0) == 61)
          P.charCodeAt(1) == 34 && P.charCodeAt(P.length - 1) == 34
            ? ((B.t = "s"), (B.v = P.slice(2, -1).replace(/""/g, '"')))
            : OS(P)
              ? ((B.t = "n"), (B.f = P.slice(1)))
              : ((B.t = "s"), (B.v = P));
        else if (P == "TRUE") (B.t = "b"), (B.v = !0);
        else if (P == "FALSE") (B.t = "b"), (B.v = !1);
        else if (!isNaN((v = ia(P))))
          (B.t = "n"), d.cellText !== !1 && (B.w = P), (B.v = v);
        else if (!isNaN(wo(P).getDate()) || (F && P.match(F))) {
          B.z = d.dateNF || Ut[14];
          var X = 0;
          F && P.match(F) && ((P = Z2(P, d.dateNF, P.match(F) || [])), (X = 1)),
            d.cellDates
              ? ((B.t = "d"), (B.v = Pr(P, X)))
              : ((B.t = "n"), (B.v = Kr(Pr(P, X)))),
            d.cellText !== !1 &&
              (B.w = Ha(B.z, B.v instanceof Date ? Kr(B.v) : B.v)),
            d.cellNF || delete B.z;
        } else (B.t = "s"), (B.v = P);
        if (
          (B.t == "z" ||
            (d.dense
              ? (m[x] || (m[x] = []), (m[x][_] = B))
              : (m[xt({ c: _, r: x })] = B)),
          (g = S + 1),
          (A = u.charCodeAt(g)),
          p.e.c < _ && (p.e.c = _),
          p.e.r < x && (p.e.r = x),
          D == b)
        )
          ++_;
        else if (((_ = 0), ++x, d.sheetRows && d.sheetRows <= x)) return !0;
      }
      e: for (; S < u.length; ++S)
        switch ((D = u.charCodeAt(S))) {
          case 34:
            A === 34 && (C = !C);
            break;
          case b:
          case 10:
          case 13:
            if (!C && I()) break e;
            break;
        }
      return S - g > 0 && I(), (m["!ref"] = Jt(p)), m;
    }
    function s(u, f) {
      return !(f && f.PRN) ||
        f.FS ||
        u.slice(0, 4) == "sep=" ||
        u.indexOf("	") >= 0 ||
        u.indexOf(",") >= 0 ||
        u.indexOf(";") >= 0
        ? i(u, f)
        : gs(t(u, f), f);
    }
    function o(u, f) {
      var d = "",
        h = f.type == "string" ? [0, 0, 0, 0] : YC(u, f);
      switch (f.type) {
        case "base64":
          d = fa(u);
          break;
        case "binary":
          d = u;
          break;
        case "buffer":
          f.codepage == 65001
            ? (d = u.toString("utf8"))
            : f.codepage && typeof qa < "u"
              ? (d = qa.utils.decode(f.codepage, u))
              : (d = ft && Buffer.isBuffer(u) ? u.toString("binary") : Io(u));
          break;
        case "array":
          d = Uc(u);
          break;
        case "string":
          d = u;
          break;
        default:
          throw new Error("Unrecognized type " + f.type);
      }
      return (
        h[0] == 239 && h[1] == 187 && h[2] == 191
          ? (d = Js(d.slice(3)))
          : f.type != "string" && f.type != "buffer" && f.codepage == 65001
            ? (d = Js(d))
            : f.type == "binary" &&
              typeof qa < "u" &&
              f.codepage &&
              (d = qa.utils.decode(f.codepage, qa.utils.encode(28591, d))),
        d.slice(0, 19) == "socialcalc:version:"
          ? pg.to_sheet(f.type == "string" ? d : Js(d), f)
          : s(d, f)
      );
    }
    function l(u, f) {
      return yi(o(u, f), f);
    }
    function c(u) {
      for (
        var f = [], d = Ft(u["!ref"]), h, m = Array.isArray(u), p = d.s.r;
        p <= d.e.r;
        ++p
      ) {
        for (var x = [], _ = d.s.c; _ <= d.e.c; ++_) {
          var v = xt({ r: p, c: _ });
          if (((h = m ? (u[p] || [])[_] : u[v]), !h || h.v == null)) {
            x.push("          ");
            continue;
          }
          for (
            var g = (h.w || (da(h), h.w) || "").slice(0, 10);
            g.length < 10;

          )
            g += " ";
          x.push(g + (_ === 0 ? " " : ""));
        }
        f.push(x.join(""));
      }
      return f.join(`
`);
    }
    return { to_workbook: l, to_sheet: o, from_sheet: c };
  })(),
  yp = (function () {
    function e(O, U, R) {
      if (O) {
        nn(O, O.l || 0);
        for (var k = R.Enum || ge; O.l < O.length; ) {
          var z = O.read_shift(2),
            re = k[z] || k[65535],
            Se = O.read_shift(2),
            he = O.l + Se,
            ve = re.f && re.f(O, Se, R);
          if (((O.l = he), U(ve, re, z))) return;
        }
      }
    }
    function t(O, U) {
      switch (U.type) {
        case "base64":
          return r(In(fa(O)), U);
        case "binary":
          return r(In(O), U);
        case "buffer":
        case "array":
          return r(O, U);
      }
      throw "Unsupported type " + U.type;
    }
    function r(O, U) {
      if (!O) return O;
      var R = U || {},
        k = R.dense ? [] : {},
        z = "Sheet1",
        re = "",
        Se = 0,
        he = {},
        ve = [],
        He = [],
        je = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } },
        be = R.sheetRows || 0;
      if (
        O[2] == 0 &&
        (O[3] == 8 || O[3] == 9) &&
        O.length >= 16 &&
        O[14] == 5 &&
        O[15] === 108
      )
        throw new Error("Unsupported Works 3 for Mac file");
      if (O[2] == 2)
        (R.Enum = ge),
          e(
            O,
            function (q, we, Ie) {
              switch (Ie) {
                case 0:
                  (R.vers = q), q >= 4096 && (R.qpro = !0);
                  break;
                case 6:
                  je = q;
                  break;
                case 204:
                  q && (re = q);
                  break;
                case 222:
                  re = q;
                  break;
                case 15:
                case 51:
                  R.qpro || (q[1].v = q[1].v.slice(1));
                case 13:
                case 14:
                case 16:
                  Ie == 14 &&
                    (q[2] & 112) == 112 &&
                    (q[2] & 15) > 1 &&
                    (q[2] & 15) < 15 &&
                    ((q[1].z = R.dateNF || Ut[14]),
                    R.cellDates && ((q[1].t = "d"), (q[1].v = kv(q[1].v)))),
                    R.qpro &&
                      q[3] > Se &&
                      ((k["!ref"] = Jt(je)),
                      (he[z] = k),
                      ve.push(z),
                      (k = R.dense ? [] : {}),
                      (je = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }),
                      (Se = q[3]),
                      (z = re || "Sheet" + (Se + 1)),
                      (re = ""));
                  var Ve = R.dense ? (k[q[0].r] || [])[q[0].c] : k[xt(q[0])];
                  if (Ve) {
                    (Ve.t = q[1].t),
                      (Ve.v = q[1].v),
                      q[1].z != null && (Ve.z = q[1].z),
                      q[1].f != null && (Ve.f = q[1].f);
                    break;
                  }
                  R.dense
                    ? (k[q[0].r] || (k[q[0].r] = []),
                      (k[q[0].r][q[0].c] = q[1]))
                    : (k[xt(q[0])] = q[1]);
                  break;
              }
            },
            R,
          );
      else if (O[2] == 26 || O[2] == 14)
        (R.Enum = oe),
          O[2] == 14 && ((R.qpro = !0), (O.l = 0)),
          e(
            O,
            function (q, we, Ie) {
              switch (Ie) {
                case 204:
                  z = q;
                  break;
                case 22:
                  q[1].v = q[1].v.slice(1);
                case 23:
                case 24:
                case 25:
                case 37:
                case 39:
                case 40:
                  if (
                    (q[3] > Se &&
                      ((k["!ref"] = Jt(je)),
                      (he[z] = k),
                      ve.push(z),
                      (k = R.dense ? [] : {}),
                      (je = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }),
                      (Se = q[3]),
                      (z = "Sheet" + (Se + 1))),
                    be > 0 && q[0].r >= be)
                  )
                    break;
                  R.dense
                    ? (k[q[0].r] || (k[q[0].r] = []),
                      (k[q[0].r][q[0].c] = q[1]))
                    : (k[xt(q[0])] = q[1]),
                    je.e.c < q[0].c && (je.e.c = q[0].c),
                    je.e.r < q[0].r && (je.e.r = q[0].r);
                  break;
                case 27:
                  q[14e3] && (He[q[14e3][0]] = q[14e3][1]);
                  break;
                case 1537:
                  (He[q[0]] = q[1]), q[0] == Se && (z = q[1]);
                  break;
              }
            },
            R,
          );
      else throw new Error("Unrecognized LOTUS BOF " + O[2]);
      if (
        ((k["!ref"] = Jt(je)), (he[re || z] = k), ve.push(re || z), !He.length)
      )
        return { SheetNames: ve, Sheets: he };
      for (var Oe = {}, Je = [], Ze = 0; Ze < He.length; ++Ze)
        he[ve[Ze]]
          ? (Je.push(He[Ze] || ve[Ze]), (Oe[He[Ze]] = he[He[Ze]] || he[ve[Ze]]))
          : (Je.push(He[Ze]), (Oe[He[Ze]] = { "!ref": "A1" }));
      return { SheetNames: Je, Sheets: Oe };
    }
    function n(O, U) {
      var R = U || {};
      if ((+R.codepage >= 0 && Eo(+R.codepage), R.type == "string"))
        throw new Error("Cannot write WK1 to JS string");
      var k = Yr(),
        z = Ft(O["!ref"]),
        re = Array.isArray(O),
        Se = [];
      De(k, 0, i(1030)), De(k, 6, l(z));
      for (var he = Math.min(z.e.r, 8191), ve = z.s.r; ve <= he; ++ve)
        for (var He = _r(ve), je = z.s.c; je <= z.e.c; ++je) {
          ve === z.s.r && (Se[je] = Ar(je));
          var be = Se[je] + He,
            Oe = re ? (O[ve] || [])[je] : O[be];
          if (!(!Oe || Oe.t == "z"))
            if (Oe.t == "n")
              (Oe.v | 0) == Oe.v && Oe.v >= -32768 && Oe.v <= 32767
                ? De(k, 13, h(ve, je, Oe.v))
                : De(k, 14, p(ve, je, Oe.v));
            else {
              var Je = da(Oe);
              De(k, 15, f(ve, je, Je.slice(0, 239)));
            }
        }
      return De(k, 1), k.end();
    }
    function a(O, U) {
      var R = U || {};
      if ((+R.codepage >= 0 && Eo(+R.codepage), R.type == "string"))
        throw new Error("Cannot write WK3 to JS string");
      var k = Yr();
      De(k, 0, s(O));
      for (var z = 0, re = 0; z < O.SheetNames.length; ++z)
        (O.Sheets[O.SheetNames[z]] || {})["!ref"] &&
          De(k, 27, ye(O.SheetNames[z], re++));
      var Se = 0;
      for (z = 0; z < O.SheetNames.length; ++z) {
        var he = O.Sheets[O.SheetNames[z]];
        if (!(!he || !he["!ref"])) {
          for (
            var ve = Ft(he["!ref"]),
              He = Array.isArray(he),
              je = [],
              be = Math.min(ve.e.r, 8191),
              Oe = ve.s.r;
            Oe <= be;
            ++Oe
          )
            for (var Je = _r(Oe), Ze = ve.s.c; Ze <= ve.e.c; ++Ze) {
              Oe === ve.s.r && (je[Ze] = Ar(Ze));
              var q = je[Ze] + Je,
                we = He ? (he[Oe] || [])[Ze] : he[q];
              if (!(!we || we.t == "z"))
                if (we.t == "n") De(k, 23, I(Oe, Ze, Se, we.v));
                else {
                  var Ie = da(we);
                  De(k, 22, D(Oe, Ze, Se, Ie.slice(0, 239)));
                }
            }
          ++Se;
        }
      }
      return De(k, 1), k.end();
    }
    function i(O) {
      var U = ne(2);
      return U.write_shift(2, O), U;
    }
    function s(O) {
      var U = ne(26);
      U.write_shift(2, 4096), U.write_shift(2, 4), U.write_shift(4, 0);
      for (var R = 0, k = 0, z = 0, re = 0; re < O.SheetNames.length; ++re) {
        var Se = O.SheetNames[re],
          he = O.Sheets[Se];
        if (!(!he || !he["!ref"])) {
          ++z;
          var ve = fn(he["!ref"]);
          R < ve.e.r && (R = ve.e.r), k < ve.e.c && (k = ve.e.c);
        }
      }
      return (
        R > 8191 && (R = 8191),
        U.write_shift(2, R),
        U.write_shift(1, z),
        U.write_shift(1, k),
        U.write_shift(2, 0),
        U.write_shift(2, 0),
        U.write_shift(1, 1),
        U.write_shift(1, 2),
        U.write_shift(4, 0),
        U.write_shift(4, 0),
        U
      );
    }
    function o(O, U, R) {
      var k = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } };
      return U == 8 && R.qpro
        ? ((k.s.c = O.read_shift(1)),
          O.l++,
          (k.s.r = O.read_shift(2)),
          (k.e.c = O.read_shift(1)),
          O.l++,
          (k.e.r = O.read_shift(2)),
          k)
        : ((k.s.c = O.read_shift(2)),
          (k.s.r = O.read_shift(2)),
          U == 12 && R.qpro && (O.l += 2),
          (k.e.c = O.read_shift(2)),
          (k.e.r = O.read_shift(2)),
          U == 12 && R.qpro && (O.l += 2),
          k.s.c == 65535 && (k.s.c = k.e.c = k.s.r = k.e.r = 0),
          k);
    }
    function l(O) {
      var U = ne(8);
      return (
        U.write_shift(2, O.s.c),
        U.write_shift(2, O.s.r),
        U.write_shift(2, O.e.c),
        U.write_shift(2, O.e.r),
        U
      );
    }
    function c(O, U, R) {
      var k = [{ c: 0, r: 0 }, { t: "n", v: 0 }, 0, 0];
      return (
        R.qpro && R.vers != 20768
          ? ((k[0].c = O.read_shift(1)),
            (k[3] = O.read_shift(1)),
            (k[0].r = O.read_shift(2)),
            (O.l += 2))
          : ((k[2] = O.read_shift(1)),
            (k[0].c = O.read_shift(2)),
            (k[0].r = O.read_shift(2))),
        k
      );
    }
    function u(O, U, R) {
      var k = O.l + U,
        z = c(O, U, R);
      if (((z[1].t = "s"), R.vers == 20768)) {
        O.l++;
        var re = O.read_shift(1);
        return (z[1].v = O.read_shift(re, "utf8")), z;
      }
      return R.qpro && O.l++, (z[1].v = O.read_shift(k - O.l, "cstr")), z;
    }
    function f(O, U, R) {
      var k = ne(7 + R.length);
      k.write_shift(1, 255),
        k.write_shift(2, U),
        k.write_shift(2, O),
        k.write_shift(1, 39);
      for (var z = 0; z < k.length; ++z) {
        var re = R.charCodeAt(z);
        k.write_shift(1, re >= 128 ? 95 : re);
      }
      return k.write_shift(1, 0), k;
    }
    function d(O, U, R) {
      var k = c(O, U, R);
      return (k[1].v = O.read_shift(2, "i")), k;
    }
    function h(O, U, R) {
      var k = ne(7);
      return (
        k.write_shift(1, 255),
        k.write_shift(2, U),
        k.write_shift(2, O),
        k.write_shift(2, R, "i"),
        k
      );
    }
    function m(O, U, R) {
      var k = c(O, U, R);
      return (k[1].v = O.read_shift(8, "f")), k;
    }
    function p(O, U, R) {
      var k = ne(13);
      return (
        k.write_shift(1, 255),
        k.write_shift(2, U),
        k.write_shift(2, O),
        k.write_shift(8, R, "f"),
        k
      );
    }
    function x(O, U, R) {
      var k = O.l + U,
        z = c(O, U, R);
      if (((z[1].v = O.read_shift(8, "f")), R.qpro)) O.l = k;
      else {
        var re = O.read_shift(2);
        S(O.slice(O.l, O.l + re), z), (O.l += re);
      }
      return z;
    }
    function _(O, U, R) {
      var k = U & 32768;
      return (
        (U &= -32769),
        (U = (k ? O : 0) + (U >= 8192 ? U - 16384 : U)),
        (k ? "" : "$") + (R ? Ar(U) : _r(U))
      );
    }
    var v = {
        51: ["FALSE", 0],
        52: ["TRUE", 0],
        70: ["LEN", 1],
        80: ["SUM", 69],
        81: ["AVERAGEA", 69],
        82: ["COUNTA", 69],
        83: ["MINA", 69],
        84: ["MAXA", 69],
        111: ["T", 1],
      },
      g = [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "+",
        "-",
        "*",
        "/",
        "^",
        "=",
        "<>",
        "<=",
        ">=",
        "<",
        ">",
        "",
        "",
        "",
        "",
        "&",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
      ];
    function S(O, U) {
      nn(O, 0);
      for (
        var R = [], k = 0, z = "", re = "", Se = "", he = "";
        O.l < O.length;

      ) {
        var ve = O[O.l++];
        switch (ve) {
          case 0:
            R.push(O.read_shift(8, "f"));
            break;
          case 1:
            (re = _(U[0].c, O.read_shift(2), !0)),
              (z = _(U[0].r, O.read_shift(2), !1)),
              R.push(re + z);
            break;
          case 2:
            {
              var He = _(U[0].c, O.read_shift(2), !0),
                je = _(U[0].r, O.read_shift(2), !1);
              (re = _(U[0].c, O.read_shift(2), !0)),
                (z = _(U[0].r, O.read_shift(2), !1)),
                R.push(He + je + ":" + re + z);
            }
            break;
          case 3:
            if (O.l < O.length) {
              console.error("WK1 premature formula end");
              return;
            }
            break;
          case 4:
            R.push("(" + R.pop() + ")");
            break;
          case 5:
            R.push(O.read_shift(2));
            break;
          case 6:
            {
              for (var be = ""; (ve = O[O.l++]); )
                be += String.fromCharCode(ve);
              R.push('"' + be.replace(/"/g, '""') + '"');
            }
            break;
          case 8:
            R.push("-" + R.pop());
            break;
          case 23:
            R.push("+" + R.pop());
            break;
          case 22:
            R.push("NOT(" + R.pop() + ")");
            break;
          case 20:
          case 21:
            (he = R.pop()),
              (Se = R.pop()),
              R.push(["AND", "OR"][ve - 20] + "(" + Se + "," + he + ")");
            break;
          default:
            if (ve < 32 && g[ve])
              (he = R.pop()), (Se = R.pop()), R.push(Se + g[ve] + he);
            else if (v[ve]) {
              if (((k = v[ve][1]), k == 69 && (k = O[O.l++]), k > R.length)) {
                console.error(
                  "WK1 bad formula parse 0x" +
                    ve.toString(16) +
                    ":|" +
                    R.join("|") +
                    "|",
                );
                return;
              }
              var Oe = R.slice(-k);
              (R.length -= k), R.push(v[ve][0] + "(" + Oe.join(",") + ")");
            } else
              return ve <= 7
                ? console.error("WK1 invalid opcode " + ve.toString(16))
                : ve <= 24
                  ? console.error("WK1 unsupported op " + ve.toString(16))
                  : ve <= 30
                    ? console.error("WK1 invalid opcode " + ve.toString(16))
                    : ve <= 115
                      ? console.error(
                          "WK1 unsupported function opcode " + ve.toString(16),
                        )
                      : console.error(
                          "WK1 unrecognized opcode " + ve.toString(16),
                        );
        }
      }
      R.length == 1
        ? (U[1].f = "" + R[0])
        : console.error("WK1 bad formula parse |" + R.join("|") + "|");
    }
    function b(O) {
      var U = [{ c: 0, r: 0 }, { t: "n", v: 0 }, 0];
      return (
        (U[0].r = O.read_shift(2)), (U[3] = O[O.l++]), (U[0].c = O[O.l++]), U
      );
    }
    function C(O, U) {
      var R = b(O);
      return (R[1].t = "s"), (R[1].v = O.read_shift(U - 4, "cstr")), R;
    }
    function D(O, U, R, k) {
      var z = ne(6 + k.length);
      z.write_shift(2, O),
        z.write_shift(1, R),
        z.write_shift(1, U),
        z.write_shift(1, 39);
      for (var re = 0; re < k.length; ++re) {
        var Se = k.charCodeAt(re);
        z.write_shift(1, Se >= 128 ? 95 : Se);
      }
      return z.write_shift(1, 0), z;
    }
    function A(O, U) {
      var R = b(O);
      R[1].v = O.read_shift(2);
      var k = R[1].v >> 1;
      if (R[1].v & 1)
        switch (k & 7) {
          case 0:
            k = (k >> 3) * 5e3;
            break;
          case 1:
            k = (k >> 3) * 500;
            break;
          case 2:
            k = (k >> 3) / 20;
            break;
          case 3:
            k = (k >> 3) / 200;
            break;
          case 4:
            k = (k >> 3) / 2e3;
            break;
          case 5:
            k = (k >> 3) / 2e4;
            break;
          case 6:
            k = (k >> 3) / 16;
            break;
          case 7:
            k = (k >> 3) / 64;
            break;
        }
      return (R[1].v = k), R;
    }
    function F(O, U) {
      var R = b(O),
        k = O.read_shift(4),
        z = O.read_shift(4),
        re = O.read_shift(2);
      if (re == 65535)
        return (
          k === 0 && z === 3221225472
            ? ((R[1].t = "e"), (R[1].v = 15))
            : k === 0 && z === 3489660928
              ? ((R[1].t = "e"), (R[1].v = 42))
              : (R[1].v = 0),
          R
        );
      var Se = re & 32768;
      return (
        (re = (re & 32767) - 16446),
        (R[1].v =
          (1 - Se * 2) * (z * Math.pow(2, re + 32) + k * Math.pow(2, re))),
        R
      );
    }
    function I(O, U, R, k) {
      var z = ne(14);
      if (
        (z.write_shift(2, O), z.write_shift(1, R), z.write_shift(1, U), k == 0)
      )
        return (
          z.write_shift(4, 0), z.write_shift(4, 0), z.write_shift(2, 65535), z
        );
      var re = 0,
        Se = 0,
        he = 0,
        ve = 0;
      return (
        k < 0 && ((re = 1), (k = -k)),
        (Se = Math.log2(k) | 0),
        (k /= Math.pow(2, Se - 31)),
        (ve = k >>> 0),
        ve & 2147483648 || ((k /= 2), ++Se, (ve = k >>> 0)),
        (k -= ve),
        (ve |= 2147483648),
        (ve >>>= 0),
        (k *= Math.pow(2, 32)),
        (he = k >>> 0),
        z.write_shift(4, he),
        z.write_shift(4, ve),
        (Se += 16383 + (re ? 32768 : 0)),
        z.write_shift(2, Se),
        z
      );
    }
    function P(O, U) {
      var R = F(O);
      return (O.l += U - 14), R;
    }
    function B(O, U) {
      var R = b(O),
        k = O.read_shift(4);
      return (R[1].v = k >> 6), R;
    }
    function X(O, U) {
      var R = b(O),
        k = O.read_shift(8, "f");
      return (R[1].v = k), R;
    }
    function ae(O, U) {
      var R = X(O);
      return (O.l += U - 10), R;
    }
    function le(O, U) {
      return O[O.l + U - 1] == 0 ? O.read_shift(U, "cstr") : "";
    }
    function Re(O, U) {
      var R = O[O.l++];
      R > U - 1 && (R = U - 1);
      for (var k = ""; k.length < R; ) k += String.fromCharCode(O[O.l++]);
      return k;
    }
    function Ae(O, U, R) {
      if (!(!R.qpro || U < 21)) {
        var k = O.read_shift(1);
        (O.l += 17), (O.l += 1), (O.l += 2);
        var z = O.read_shift(U - 21, "cstr");
        return [k, z];
      }
    }
    function se(O, U) {
      for (var R = {}, k = O.l + U; O.l < k; ) {
        var z = O.read_shift(2);
        if (z == 14e3) {
          for (R[z] = [0, ""], R[z][0] = O.read_shift(2); O[O.l]; )
            (R[z][1] += String.fromCharCode(O[O.l])), O.l++;
          O.l++;
        }
      }
      return R;
    }
    function ye(O, U) {
      var R = ne(5 + O.length);
      R.write_shift(2, 14e3), R.write_shift(2, U);
      for (var k = 0; k < O.length; ++k) {
        var z = O.charCodeAt(k);
        R[R.l++] = z > 127 ? 95 : z;
      }
      return (R[R.l++] = 0), R;
    }
    var ge = {
        0: { n: "BOF", f: cg },
        1: { n: "EOF" },
        2: { n: "CALCMODE" },
        3: { n: "CALCORDER" },
        4: { n: "SPLIT" },
        5: { n: "SYNC" },
        6: { n: "RANGE", f: o },
        7: { n: "WINDOW1" },
        8: { n: "COLW1" },
        9: { n: "WINTWO" },
        10: { n: "COLW2" },
        11: { n: "NAME" },
        12: { n: "BLANK" },
        13: { n: "INTEGER", f: d },
        14: { n: "NUMBER", f: m },
        15: { n: "LABEL", f: u },
        16: { n: "FORMULA", f: x },
        24: { n: "TABLE" },
        25: { n: "ORANGE" },
        26: { n: "PRANGE" },
        27: { n: "SRANGE" },
        28: { n: "FRANGE" },
        29: { n: "KRANGE1" },
        32: { n: "HRANGE" },
        35: { n: "KRANGE2" },
        36: { n: "PROTEC" },
        37: { n: "FOOTER" },
        38: { n: "HEADER" },
        39: { n: "SETUP" },
        40: { n: "MARGINS" },
        41: { n: "LABELFMT" },
        42: { n: "TITLES" },
        43: { n: "SHEETJS" },
        45: { n: "GRAPH" },
        46: { n: "NGRAPH" },
        47: { n: "CALCCOUNT" },
        48: { n: "UNFORMATTED" },
        49: { n: "CURSORW12" },
        50: { n: "WINDOW" },
        51: { n: "STRING", f: u },
        55: { n: "PASSWORD" },
        56: { n: "LOCKED" },
        60: { n: "QUERY" },
        61: { n: "QUERYNAME" },
        62: { n: "PRINT" },
        63: { n: "PRINTNAME" },
        64: { n: "GRAPH2" },
        65: { n: "GRAPHNAME" },
        66: { n: "ZOOM" },
        67: { n: "SYMSPLIT" },
        68: { n: "NSROWS" },
        69: { n: "NSCOLS" },
        70: { n: "RULER" },
        71: { n: "NNAME" },
        72: { n: "ACOMM" },
        73: { n: "AMACRO" },
        74: { n: "PARSE" },
        102: { n: "PRANGES??" },
        103: { n: "RRANGES??" },
        104: { n: "FNAME??" },
        105: { n: "MRANGES??" },
        204: { n: "SHEETNAMECS", f: le },
        222: { n: "SHEETNAMELP", f: Re },
        65535: { n: "" },
      },
      oe = {
        0: { n: "BOF" },
        1: { n: "EOF" },
        2: { n: "PASSWORD" },
        3: { n: "CALCSET" },
        4: { n: "WINDOWSET" },
        5: { n: "SHEETCELLPTR" },
        6: { n: "SHEETLAYOUT" },
        7: { n: "COLUMNWIDTH" },
        8: { n: "HIDDENCOLUMN" },
        9: { n: "USERRANGE" },
        10: { n: "SYSTEMRANGE" },
        11: { n: "ZEROFORCE" },
        12: { n: "SORTKEYDIR" },
        13: { n: "FILESEAL" },
        14: { n: "DATAFILLNUMS" },
        15: { n: "PRINTMAIN" },
        16: { n: "PRINTSTRING" },
        17: { n: "GRAPHMAIN" },
        18: { n: "GRAPHSTRING" },
        19: { n: "??" },
        20: { n: "ERRCELL" },
        21: { n: "NACELL" },
        22: { n: "LABEL16", f: C },
        23: { n: "NUMBER17", f: F },
        24: { n: "NUMBER18", f: A },
        25: { n: "FORMULA19", f: P },
        26: { n: "FORMULA1A" },
        27: { n: "XFORMAT", f: se },
        28: { n: "DTLABELMISC" },
        29: { n: "DTLABELCELL" },
        30: { n: "GRAPHWINDOW" },
        31: { n: "CPA" },
        32: { n: "LPLAUTO" },
        33: { n: "QUERY" },
        34: { n: "HIDDENSHEET" },
        35: { n: "??" },
        37: { n: "NUMBER25", f: B },
        38: { n: "??" },
        39: { n: "NUMBER27", f: X },
        40: { n: "FORMULA28", f: ae },
        142: { n: "??" },
        147: { n: "??" },
        150: { n: "??" },
        151: { n: "??" },
        152: { n: "??" },
        153: { n: "??" },
        154: { n: "??" },
        155: { n: "??" },
        156: { n: "??" },
        163: { n: "??" },
        174: { n: "??" },
        175: { n: "??" },
        176: { n: "??" },
        177: { n: "??" },
        184: { n: "??" },
        185: { n: "??" },
        186: { n: "??" },
        187: { n: "??" },
        188: { n: "??" },
        195: { n: "??" },
        201: { n: "??" },
        204: { n: "SHEETNAMECS", f: le },
        205: { n: "??" },
        206: { n: "??" },
        207: { n: "??" },
        208: { n: "??" },
        256: { n: "??" },
        259: { n: "??" },
        260: { n: "??" },
        261: { n: "??" },
        262: { n: "??" },
        263: { n: "??" },
        265: { n: "??" },
        266: { n: "??" },
        267: { n: "??" },
        268: { n: "??" },
        270: { n: "??" },
        271: { n: "??" },
        384: { n: "??" },
        389: { n: "??" },
        390: { n: "??" },
        393: { n: "??" },
        396: { n: "??" },
        512: { n: "??" },
        514: { n: "??" },
        513: { n: "??" },
        516: { n: "??" },
        517: { n: "??" },
        640: { n: "??" },
        641: { n: "??" },
        642: { n: "??" },
        643: { n: "??" },
        644: { n: "??" },
        645: { n: "??" },
        646: { n: "??" },
        647: { n: "??" },
        648: { n: "??" },
        658: { n: "??" },
        659: { n: "??" },
        660: { n: "??" },
        661: { n: "??" },
        662: { n: "??" },
        665: { n: "??" },
        666: { n: "??" },
        768: { n: "??" },
        772: { n: "??" },
        1537: { n: "SHEETINFOQP", f: Ae },
        1600: { n: "??" },
        1602: { n: "??" },
        1793: { n: "??" },
        1794: { n: "??" },
        1795: { n: "??" },
        1796: { n: "??" },
        1920: { n: "??" },
        2048: { n: "??" },
        2049: { n: "??" },
        2052: { n: "??" },
        2688: { n: "??" },
        10998: { n: "??" },
        12849: { n: "??" },
        28233: { n: "??" },
        28484: { n: "??" },
        65535: { n: "" },
      };
    return { sheet_to_wk1: n, book_to_wk3: a, to_workbook: t };
  })(),
  Mw = /^\s|\s$|[\t\n\r]/;
function mg(e, t) {
  if (!t.bookSST) return "";
  var r = [Zt];
  r[r.length] = Ce("sst", null, {
    xmlns: vs[0],
    count: e.Count,
    uniqueCount: e.Unique,
  });
  for (var n = 0; n != e.length; ++n)
    if (e[n] != null) {
      var a = e[n],
        i = "<si>";
      a.r
        ? (i += a.r)
        : ((i += "<t"),
          a.t || (a.t = ""),
          a.t.match(Mw) && (i += ' xml:space="preserve"'),
          (i += ">" + vt(a.t) + "</t>")),
        (i += "</si>"),
        (r[r.length] = i);
    }
  return (
    r.length > 2 &&
      ((r[r.length] = "</sst>"), (r[1] = r[1].replace("/>", ">"))),
    r.join("")
  );
}
function bw(e) {
  return [e.read_shift(4), e.read_shift(4)];
}
function Bw(e, t) {
  return (
    t || (t = ne(8)), t.write_shift(4, e.Count), t.write_shift(4, e.Unique), t
  );
}
var jw = Ny;
function Uw(e) {
  var t = Yr();
  ce(t, 159, Bw(e));
  for (var r = 0; r < e.length; ++r) ce(t, 19, jw(e[r]));
  return ce(t, 160), t.end();
}
function $w(e) {
  for (var t = [], r = e.split(""), n = 0; n < r.length; ++n)
    t[n] = r[n].charCodeAt(0);
  return t;
}
function vg(e) {
  var t = 0,
    r,
    n = $w(e),
    a = n.length + 1,
    i,
    s,
    o,
    l,
    c;
  for (r = vi(a), r[0] = n.length, i = 1; i != a; ++i) r[i] = n[i - 1];
  for (i = a - 1; i >= 0; --i)
    (s = r[i]),
      (o = t & 16384 ? 1 : 0),
      (l = (t << 1) & 32767),
      (c = o | l),
      (t = c ^ s);
  return t ^ 52811;
}
var Hw = (function () {
  function e(a, i) {
    switch (i.type) {
      case "base64":
        return t(fa(a), i);
      case "binary":
        return t(a, i);
      case "buffer":
        return t(ft && Buffer.isBuffer(a) ? a.toString("binary") : Io(a), i);
      case "array":
        return t(Uc(a), i);
    }
    throw new Error("Unrecognized type " + i.type);
  }
  function t(a, i) {
    var s = i || {},
      o = s.dense ? [] : {},
      l = a.match(/\\trowd.*?\\row\b/g);
    if (!l.length) throw new Error("RTF missing table");
    var c = { s: { c: 0, r: 0 }, e: { c: 0, r: l.length - 1 } };
    return (
      l.forEach(function (u, f) {
        Array.isArray(o) && (o[f] = []);
        for (var d = /\\\w+\b/g, h = 0, m, p = -1; (m = d.exec(u)); ) {
          switch (m[0]) {
            case "\\cell":
              var x = u.slice(h, d.lastIndex - m[0].length);
              if ((x[0] == " " && (x = x.slice(1)), ++p, x.length)) {
                var _ = { v: x, t: "s" };
                Array.isArray(o) ? (o[f][p] = _) : (o[xt({ r: f, c: p })] = _);
              }
              break;
          }
          h = d.lastIndex;
        }
        p > c.e.c && (c.e.c = p);
      }),
      (o["!ref"] = Jt(c)),
      o
    );
  }
  function r(a, i) {
    return yi(e(a, i), i);
  }
  function n(a) {
    for (
      var i = ["{\\rtf1\\ansi"],
        s = Ft(a["!ref"]),
        o,
        l = Array.isArray(a),
        c = s.s.r;
      c <= s.e.r;
      ++c
    ) {
      i.push("\\trowd\\trautofit1");
      for (var u = s.s.c; u <= s.e.c; ++u) i.push("\\cellx" + (u + 1));
      for (i.push("\\pard\\intbl"), u = s.s.c; u <= s.e.c; ++u) {
        var f = xt({ r: c, c: u });
        (o = l ? (a[c] || [])[u] : a[f]),
          !(!o || (o.v == null && (!o.f || o.F))) &&
            (i.push(" " + (o.w || (da(o), o.w))), i.push("\\cell"));
      }
      i.push("\\pard\\intbl\\row");
    }
    return i.join("") + "}";
  }
  return { to_workbook: r, to_sheet: e, from_sheet: n };
})();
function wp(e) {
  for (var t = 0, r = 1; t != 3; ++t)
    r = r * 256 + (e[t] > 255 ? 255 : e[t] < 0 ? 0 : e[t]);
  return r.toString(16).toUpperCase().slice(1);
}
var Ww = 6,
  sa = Ww;
function dc(e) {
  return Math.floor((e + Math.round(128 / sa) / 256) * sa);
}
function hc(e) {
  return Math.floor(((e - 5) / sa) * 100 + 0.5) / 100;
}
function Mf(e) {
  return Math.round(((e * sa + 5) / sa) * 256) / 256;
}
function Z0(e) {
  e.width
    ? ((e.wpx = dc(e.width)), (e.wch = hc(e.wpx)), (e.MDW = sa))
    : e.wpx
      ? ((e.wch = hc(e.wpx)), (e.width = Mf(e.wch)), (e.MDW = sa))
      : typeof e.wch == "number" &&
        ((e.width = Mf(e.wch)), (e.wpx = dc(e.width)), (e.MDW = sa)),
    e.customWidth && delete e.customWidth;
}
var Vw = 96,
  gg = Vw;
function pc(e) {
  return (e * 96) / gg;
}
function xg(e) {
  return (e * gg) / 96;
}
function zw(e) {
  var t = ["<numFmts>"];
  return (
    [
      [5, 8],
      [23, 26],
      [41, 44],
      [50, 392],
    ].forEach(function (r) {
      for (var n = r[0]; n <= r[1]; ++n)
        e[n] != null &&
          (t[t.length] = Ce("numFmt", null, {
            numFmtId: n,
            formatCode: vt(e[n]),
          }));
    }),
    t.length === 1
      ? ""
      : ((t[t.length] = "</numFmts>"),
        (t[0] = Ce("numFmts", null, { count: t.length - 2 }).replace(
          "/>",
          ">",
        )),
        t.join(""))
  );
}
function Gw(e) {
  var t = [];
  return (
    (t[t.length] = Ce("cellXfs", null)),
    e.forEach(function (r) {
      t[t.length] = Ce("xf", null, r);
    }),
    (t[t.length] = "</cellXfs>"),
    t.length === 2
      ? ""
      : ((t[0] = Ce("cellXfs", null, { count: t.length - 2 }).replace(
          "/>",
          ">",
        )),
        t.join(""))
  );
}
function _g(e, t) {
  var r = [Zt, Ce("styleSheet", null, { xmlns: vs[0], "xmlns:vt": sr.vt })],
    n;
  return (
    e.SSF && (n = zw(e.SSF)) != null && (r[r.length] = n),
    (r[r.length] =
      '<fonts count="1"><font><sz val="12"/><color theme="1"/><name val="Calibri"/><family val="2"/><scheme val="minor"/></font></fonts>'),
    (r[r.length] =
      '<fills count="2"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill></fills>'),
    (r[r.length] =
      '<borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders>'),
    (r[r.length] =
      '<cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>'),
    (n = Gw(t.cellXfs)) && (r[r.length] = n),
    (r[r.length] =
      '<cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles>'),
    (r[r.length] = '<dxfs count="0"/>'),
    (r[r.length] =
      '<tableStyles count="0" defaultTableStyle="TableStyleMedium9" defaultPivotStyle="PivotStyleMedium4"/>'),
    r.length > 2 &&
      ((r[r.length] = "</styleSheet>"), (r[1] = r[1].replace("/>", ">"))),
    r.join("")
  );
}
function Yw(e, t) {
  var r = e.read_shift(2),
    n = Cr(e);
  return [r, n];
}
function Kw(e, t, r) {
  r || (r = ne(6 + 4 * t.length)), r.write_shift(2, e), lr(t, r);
  var n = r.length > r.l ? r.slice(0, r.l) : r;
  return r.l == null && (r.l = r.length), n;
}
function Xw(e, t, r) {
  var n = {};
  n.sz = e.read_shift(2) / 20;
  var a = My(e);
  a.fItalic && (n.italic = 1),
    a.fCondense && (n.condense = 1),
    a.fExtend && (n.extend = 1),
    a.fShadow && (n.shadow = 1),
    a.fOutline && (n.outline = 1),
    a.fStrikeout && (n.strike = 1);
  var i = e.read_shift(2);
  switch ((i === 700 && (n.bold = 1), e.read_shift(2))) {
    case 1:
      n.vertAlign = "superscript";
      break;
    case 2:
      n.vertAlign = "subscript";
      break;
  }
  var s = e.read_shift(1);
  s != 0 && (n.underline = s);
  var o = e.read_shift(1);
  o > 0 && (n.family = o);
  var l = e.read_shift(1);
  switch (
    (l > 0 && (n.charset = l), e.l++, (n.color = Py(e)), e.read_shift(1))
  ) {
    case 1:
      n.scheme = "major";
      break;
    case 2:
      n.scheme = "minor";
      break;
  }
  return (n.name = Cr(e)), n;
}
function Qw(e, t) {
  t || (t = ne(25 + 4 * 32)),
    t.write_shift(2, e.sz * 20),
    by(e, t),
    t.write_shift(2, e.bold ? 700 : 400);
  var r = 0;
  e.vertAlign == "superscript"
    ? (r = 1)
    : e.vertAlign == "subscript" && (r = 2),
    t.write_shift(2, r),
    t.write_shift(1, e.underline || 0),
    t.write_shift(1, e.family || 0),
    t.write_shift(1, e.charset || 0),
    t.write_shift(1, 0),
    uc(e.color, t);
  var n = 0;
  return (
    e.scheme == "major" && (n = 1),
    e.scheme == "minor" && (n = 2),
    t.write_shift(1, n),
    lr(e.name, t),
    t.length > t.l ? t.slice(0, t.l) : t
  );
}
var Jw = [
    "none",
    "solid",
    "mediumGray",
    "darkGray",
    "lightGray",
    "darkHorizontal",
    "darkVertical",
    "darkDown",
    "darkUp",
    "darkGrid",
    "darkTrellis",
    "lightHorizontal",
    "lightVertical",
    "lightDown",
    "lightUp",
    "lightGrid",
    "lightTrellis",
    "gray125",
    "gray0625",
  ],
  Ru,
  Zw = Jn;
function Sp(e, t) {
  t || (t = ne(4 * 3 + 8 * 7 + 16 * 1)), Ru || (Ru = U0(Jw));
  var r = Ru[e.patternType];
  r == null && (r = 40), t.write_shift(4, r);
  var n = 0;
  if (r != 40)
    for (uc({ auto: 1 }, t), uc({ auto: 1 }, t); n < 12; ++n)
      t.write_shift(4, 0);
  else {
    for (; n < 4; ++n) t.write_shift(4, 0);
    for (; n < 12; ++n) t.write_shift(4, 0);
  }
  return t.length > t.l ? t.slice(0, t.l) : t;
}
function qw(e, t) {
  var r = e.l + t,
    n = e.read_shift(2),
    a = e.read_shift(2);
  return (e.l = r), { ixfe: n, numFmtId: a };
}
function Eg(e, t, r) {
  r || (r = ne(16)),
    r.write_shift(2, t || 0),
    r.write_shift(2, e.numFmtId || 0),
    r.write_shift(2, 0),
    r.write_shift(2, 0),
    r.write_shift(2, 0),
    r.write_shift(1, 0),
    r.write_shift(1, 0);
  var n = 0;
  return (
    r.write_shift(1, n),
    r.write_shift(1, 0),
    r.write_shift(1, 0),
    r.write_shift(1, 0),
    r
  );
}
function ks(e, t) {
  return (
    t || (t = ne(10)),
    t.write_shift(1, 0),
    t.write_shift(1, 0),
    t.write_shift(4, 0),
    t.write_shift(4, 0),
    t
  );
}
var eS = Jn;
function tS(e, t) {
  return (
    t || (t = ne(51)),
    t.write_shift(1, 0),
    ks(null, t),
    ks(null, t),
    ks(null, t),
    ks(null, t),
    ks(null, t),
    t.length > t.l ? t.slice(0, t.l) : t
  );
}
function rS(e, t) {
  return (
    t || (t = ne(12 + 4 * 10)),
    t.write_shift(4, e.xfId),
    t.write_shift(2, 1),
    t.write_shift(1, +e.builtinId),
    t.write_shift(1, 0),
    cc(e.name || "", t),
    t.length > t.l ? t.slice(0, t.l) : t
  );
}
function nS(e, t, r) {
  var n = ne(2052);
  return (
    n.write_shift(4, e),
    cc(t, n),
    cc(r, n),
    n.length > n.l ? n.slice(0, n.l) : n
  );
}
function aS(e, t) {
  if (t) {
    var r = 0;
    [
      [5, 8],
      [23, 26],
      [41, 44],
      [50, 392],
    ].forEach(function (n) {
      for (var a = n[0]; a <= n[1]; ++a) t[a] != null && ++r;
    }),
      r != 0 &&
        (ce(e, 615, Bn(r)),
        [
          [5, 8],
          [23, 26],
          [41, 44],
          [50, 392],
        ].forEach(function (n) {
          for (var a = n[0]; a <= n[1]; ++a)
            t[a] != null && ce(e, 44, Kw(a, t[a]));
        }),
        ce(e, 616));
  }
}
function iS(e) {
  var t = 1;
  ce(e, 611, Bn(t)),
    ce(
      e,
      43,
      Qw({
        sz: 12,
        color: { theme: 1 },
        name: "Calibri",
        family: 2,
        scheme: "minor",
      }),
    ),
    ce(e, 612);
}
function sS(e) {
  var t = 2;
  ce(e, 603, Bn(t)),
    ce(e, 45, Sp({ patternType: "none" })),
    ce(e, 45, Sp({ patternType: "gray125" })),
    ce(e, 604);
}
function oS(e) {
  var t = 1;
  ce(e, 613, Bn(t)), ce(e, 46, tS()), ce(e, 614);
}
function lS(e) {
  var t = 1;
  ce(e, 626, Bn(t)),
    ce(e, 47, Eg({ numFmtId: 0, fontId: 0, fillId: 0, borderId: 0 }, 65535)),
    ce(e, 627);
}
function cS(e, t) {
  ce(e, 617, Bn(t.length)),
    t.forEach(function (r) {
      ce(e, 47, Eg(r, 0));
    }),
    ce(e, 618);
}
function uS(e) {
  var t = 1;
  ce(e, 619, Bn(t)),
    ce(e, 48, rS({ xfId: 0, builtinId: 0, name: "Normal" })),
    ce(e, 620);
}
function fS(e) {
  var t = 0;
  ce(e, 505, Bn(t)), ce(e, 506);
}
function dS(e) {
  var t = 0;
  ce(e, 508, nS(t, "TableStyleMedium9", "PivotStyleMedium4")), ce(e, 509);
}
function hS(e, t) {
  var r = Yr();
  return (
    ce(r, 278),
    aS(r, e.SSF),
    iS(r),
    sS(r),
    oS(r),
    lS(r),
    cS(r, t.cellXfs),
    uS(r),
    fS(r),
    dS(r),
    ce(r, 279),
    r.end()
  );
}
function yg(e, t) {
  if (t && t.themeXLSX) return t.themeXLSX;
  if (e && typeof e.raw == "string") return e.raw;
  var r = [Zt];
  return (
    (r[r.length] =
      '<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="Office Theme">'),
    (r[r.length] = "<a:themeElements>"),
    (r[r.length] = '<a:clrScheme name="Office">'),
    (r[r.length] =
      '<a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1>'),
    (r[r.length] = '<a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1>'),
    (r[r.length] = '<a:dk2><a:srgbClr val="1F497D"/></a:dk2>'),
    (r[r.length] = '<a:lt2><a:srgbClr val="EEECE1"/></a:lt2>'),
    (r[r.length] = '<a:accent1><a:srgbClr val="4F81BD"/></a:accent1>'),
    (r[r.length] = '<a:accent2><a:srgbClr val="C0504D"/></a:accent2>'),
    (r[r.length] = '<a:accent3><a:srgbClr val="9BBB59"/></a:accent3>'),
    (r[r.length] = '<a:accent4><a:srgbClr val="8064A2"/></a:accent4>'),
    (r[r.length] = '<a:accent5><a:srgbClr val="4BACC6"/></a:accent5>'),
    (r[r.length] = '<a:accent6><a:srgbClr val="F79646"/></a:accent6>'),
    (r[r.length] = '<a:hlink><a:srgbClr val="0000FF"/></a:hlink>'),
    (r[r.length] = '<a:folHlink><a:srgbClr val="800080"/></a:folHlink>'),
    (r[r.length] = "</a:clrScheme>"),
    (r[r.length] = '<a:fontScheme name="Office">'),
    (r[r.length] = "<a:majorFont>"),
    (r[r.length] = '<a:latin typeface="Cambria"/>'),
    (r[r.length] = '<a:ea typeface=""/>'),
    (r[r.length] = '<a:cs typeface=""/>'),
    (r[r.length] = '<a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/>'),
    (r[r.length] = '<a:font script="Hang" typeface="맑은 고딕"/>'),
    (r[r.length] = '<a:font script="Hans" typeface="宋体"/>'),
    (r[r.length] = '<a:font script="Hant" typeface="新細明體"/>'),
    (r[r.length] = '<a:font script="Arab" typeface="Times New Roman"/>'),
    (r[r.length] = '<a:font script="Hebr" typeface="Times New Roman"/>'),
    (r[r.length] = '<a:font script="Thai" typeface="Tahoma"/>'),
    (r[r.length] = '<a:font script="Ethi" typeface="Nyala"/>'),
    (r[r.length] = '<a:font script="Beng" typeface="Vrinda"/>'),
    (r[r.length] = '<a:font script="Gujr" typeface="Shruti"/>'),
    (r[r.length] = '<a:font script="Khmr" typeface="MoolBoran"/>'),
    (r[r.length] = '<a:font script="Knda" typeface="Tunga"/>'),
    (r[r.length] = '<a:font script="Guru" typeface="Raavi"/>'),
    (r[r.length] = '<a:font script="Cans" typeface="Euphemia"/>'),
    (r[r.length] = '<a:font script="Cher" typeface="Plantagenet Cherokee"/>'),
    (r[r.length] = '<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>'),
    (r[r.length] = '<a:font script="Tibt" typeface="Microsoft Himalaya"/>'),
    (r[r.length] = '<a:font script="Thaa" typeface="MV Boli"/>'),
    (r[r.length] = '<a:font script="Deva" typeface="Mangal"/>'),
    (r[r.length] = '<a:font script="Telu" typeface="Gautami"/>'),
    (r[r.length] = '<a:font script="Taml" typeface="Latha"/>'),
    (r[r.length] = '<a:font script="Syrc" typeface="Estrangelo Edessa"/>'),
    (r[r.length] = '<a:font script="Orya" typeface="Kalinga"/>'),
    (r[r.length] = '<a:font script="Mlym" typeface="Kartika"/>'),
    (r[r.length] = '<a:font script="Laoo" typeface="DokChampa"/>'),
    (r[r.length] = '<a:font script="Sinh" typeface="Iskoola Pota"/>'),
    (r[r.length] = '<a:font script="Mong" typeface="Mongolian Baiti"/>'),
    (r[r.length] = '<a:font script="Viet" typeface="Times New Roman"/>'),
    (r[r.length] = '<a:font script="Uigh" typeface="Microsoft Uighur"/>'),
    (r[r.length] = '<a:font script="Geor" typeface="Sylfaen"/>'),
    (r[r.length] = "</a:majorFont>"),
    (r[r.length] = "<a:minorFont>"),
    (r[r.length] = '<a:latin typeface="Calibri"/>'),
    (r[r.length] = '<a:ea typeface=""/>'),
    (r[r.length] = '<a:cs typeface=""/>'),
    (r[r.length] = '<a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/>'),
    (r[r.length] = '<a:font script="Hang" typeface="맑은 고딕"/>'),
    (r[r.length] = '<a:font script="Hans" typeface="宋体"/>'),
    (r[r.length] = '<a:font script="Hant" typeface="新細明體"/>'),
    (r[r.length] = '<a:font script="Arab" typeface="Arial"/>'),
    (r[r.length] = '<a:font script="Hebr" typeface="Arial"/>'),
    (r[r.length] = '<a:font script="Thai" typeface="Tahoma"/>'),
    (r[r.length] = '<a:font script="Ethi" typeface="Nyala"/>'),
    (r[r.length] = '<a:font script="Beng" typeface="Vrinda"/>'),
    (r[r.length] = '<a:font script="Gujr" typeface="Shruti"/>'),
    (r[r.length] = '<a:font script="Khmr" typeface="DaunPenh"/>'),
    (r[r.length] = '<a:font script="Knda" typeface="Tunga"/>'),
    (r[r.length] = '<a:font script="Guru" typeface="Raavi"/>'),
    (r[r.length] = '<a:font script="Cans" typeface="Euphemia"/>'),
    (r[r.length] = '<a:font script="Cher" typeface="Plantagenet Cherokee"/>'),
    (r[r.length] = '<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>'),
    (r[r.length] = '<a:font script="Tibt" typeface="Microsoft Himalaya"/>'),
    (r[r.length] = '<a:font script="Thaa" typeface="MV Boli"/>'),
    (r[r.length] = '<a:font script="Deva" typeface="Mangal"/>'),
    (r[r.length] = '<a:font script="Telu" typeface="Gautami"/>'),
    (r[r.length] = '<a:font script="Taml" typeface="Latha"/>'),
    (r[r.length] = '<a:font script="Syrc" typeface="Estrangelo Edessa"/>'),
    (r[r.length] = '<a:font script="Orya" typeface="Kalinga"/>'),
    (r[r.length] = '<a:font script="Mlym" typeface="Kartika"/>'),
    (r[r.length] = '<a:font script="Laoo" typeface="DokChampa"/>'),
    (r[r.length] = '<a:font script="Sinh" typeface="Iskoola Pota"/>'),
    (r[r.length] = '<a:font script="Mong" typeface="Mongolian Baiti"/>'),
    (r[r.length] = '<a:font script="Viet" typeface="Arial"/>'),
    (r[r.length] = '<a:font script="Uigh" typeface="Microsoft Uighur"/>'),
    (r[r.length] = '<a:font script="Geor" typeface="Sylfaen"/>'),
    (r[r.length] = "</a:minorFont>"),
    (r[r.length] = "</a:fontScheme>"),
    (r[r.length] = '<a:fmtScheme name="Office">'),
    (r[r.length] = "<a:fillStyleLst>"),
    (r[r.length] = '<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>'),
    (r[r.length] = '<a:gradFill rotWithShape="1">'),
    (r[r.length] = "<a:gsLst>"),
    (r[r.length] =
      '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="50000"/><a:satMod val="300000"/></a:schemeClr></a:gs>'),
    (r[r.length] =
      '<a:gs pos="35000"><a:schemeClr val="phClr"><a:tint val="37000"/><a:satMod val="300000"/></a:schemeClr></a:gs>'),
    (r[r.length] =
      '<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="15000"/><a:satMod val="350000"/></a:schemeClr></a:gs>'),
    (r[r.length] = "</a:gsLst>"),
    (r[r.length] = '<a:lin ang="16200000" scaled="1"/>'),
    (r[r.length] = "</a:gradFill>"),
    (r[r.length] = '<a:gradFill rotWithShape="1">'),
    (r[r.length] = "<a:gsLst>"),
    (r[r.length] =
      '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="100000"/><a:shade val="100000"/><a:satMod val="130000"/></a:schemeClr></a:gs>'),
    (r[r.length] =
      '<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="50000"/><a:shade val="100000"/><a:satMod val="350000"/></a:schemeClr></a:gs>'),
    (r[r.length] = "</a:gsLst>"),
    (r[r.length] = '<a:lin ang="16200000" scaled="0"/>'),
    (r[r.length] = "</a:gradFill>"),
    (r[r.length] = "</a:fillStyleLst>"),
    (r[r.length] = "<a:lnStyleLst>"),
    (r[r.length] =
      '<a:ln w="9525" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"><a:shade val="95000"/><a:satMod val="105000"/></a:schemeClr></a:solidFill><a:prstDash val="solid"/></a:ln>'),
    (r[r.length] =
      '<a:ln w="25400" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>'),
    (r[r.length] =
      '<a:ln w="38100" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>'),
    (r[r.length] = "</a:lnStyleLst>"),
    (r[r.length] = "<a:effectStyleLst>"),
    (r[r.length] = "<a:effectStyle>"),
    (r[r.length] = "<a:effectLst>"),
    (r[r.length] =
      '<a:outerShdw blurRad="40000" dist="20000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="38000"/></a:srgbClr></a:outerShdw>'),
    (r[r.length] = "</a:effectLst>"),
    (r[r.length] = "</a:effectStyle>"),
    (r[r.length] = "<a:effectStyle>"),
    (r[r.length] = "<a:effectLst>"),
    (r[r.length] =
      '<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>'),
    (r[r.length] = "</a:effectLst>"),
    (r[r.length] = "</a:effectStyle>"),
    (r[r.length] = "<a:effectStyle>"),
    (r[r.length] = "<a:effectLst>"),
    (r[r.length] =
      '<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>'),
    (r[r.length] = "</a:effectLst>"),
    (r[r.length] =
      '<a:scene3d><a:camera prst="orthographicFront"><a:rot lat="0" lon="0" rev="0"/></a:camera><a:lightRig rig="threePt" dir="t"><a:rot lat="0" lon="0" rev="1200000"/></a:lightRig></a:scene3d>'),
    (r[r.length] = '<a:sp3d><a:bevelT w="63500" h="25400"/></a:sp3d>'),
    (r[r.length] = "</a:effectStyle>"),
    (r[r.length] = "</a:effectStyleLst>"),
    (r[r.length] = "<a:bgFillStyleLst>"),
    (r[r.length] = '<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>'),
    (r[r.length] = '<a:gradFill rotWithShape="1">'),
    (r[r.length] = "<a:gsLst>"),
    (r[r.length] =
      '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="40000"/><a:satMod val="350000"/></a:schemeClr></a:gs>'),
    (r[r.length] =
      '<a:gs pos="40000"><a:schemeClr val="phClr"><a:tint val="45000"/><a:shade val="99000"/><a:satMod val="350000"/></a:schemeClr></a:gs>'),
    (r[r.length] =
      '<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="20000"/><a:satMod val="255000"/></a:schemeClr></a:gs>'),
    (r[r.length] = "</a:gsLst>"),
    (r[r.length] =
      '<a:path path="circle"><a:fillToRect l="50000" t="-80000" r="50000" b="180000"/></a:path>'),
    (r[r.length] = "</a:gradFill>"),
    (r[r.length] = '<a:gradFill rotWithShape="1">'),
    (r[r.length] = "<a:gsLst>"),
    (r[r.length] =
      '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="80000"/><a:satMod val="300000"/></a:schemeClr></a:gs>'),
    (r[r.length] =
      '<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="30000"/><a:satMod val="200000"/></a:schemeClr></a:gs>'),
    (r[r.length] = "</a:gsLst>"),
    (r[r.length] =
      '<a:path path="circle"><a:fillToRect l="50000" t="50000" r="50000" b="50000"/></a:path>'),
    (r[r.length] = "</a:gradFill>"),
    (r[r.length] = "</a:bgFillStyleLst>"),
    (r[r.length] = "</a:fmtScheme>"),
    (r[r.length] = "</a:themeElements>"),
    (r[r.length] = "<a:objectDefaults>"),
    (r[r.length] = "<a:spDef>"),
    (r[r.length] =
      '<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="1"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="3"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="2"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="lt1"/></a:fontRef></a:style>'),
    (r[r.length] = "</a:spDef>"),
    (r[r.length] = "<a:lnDef>"),
    (r[r.length] =
      '<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="2"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="0"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="1"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="tx1"/></a:fontRef></a:style>'),
    (r[r.length] = "</a:lnDef>"),
    (r[r.length] = "</a:objectDefaults>"),
    (r[r.length] = "<a:extraClrSchemeLst/>"),
    (r[r.length] = "</a:theme>"),
    r.join("")
  );
}
function pS(e, t) {
  return { flags: e.read_shift(4), version: e.read_shift(4), name: Cr(e) };
}
function mS(e) {
  var t = ne(12 + 2 * e.name.length);
  return (
    t.write_shift(4, e.flags),
    t.write_shift(4, e.version),
    lr(e.name, t),
    t.slice(0, t.l)
  );
}
function vS(e) {
  for (var t = [], r = e.read_shift(4); r-- > 0; )
    t.push([e.read_shift(4), e.read_shift(4)]);
  return t;
}
function gS(e) {
  var t = ne(4 + 8 * e.length);
  t.write_shift(4, e.length);
  for (var r = 0; r < e.length; ++r)
    t.write_shift(4, e[r][0]), t.write_shift(4, e[r][1]);
  return t;
}
function xS(e, t) {
  var r = ne(8 + 2 * t.length);
  return r.write_shift(4, e), lr(t, r), r.slice(0, r.l);
}
function _S(e) {
  return (e.l += 4), e.read_shift(4) != 0;
}
function ES(e, t) {
  var r = ne(8);
  return r.write_shift(4, e), r.write_shift(4, 1), r;
}
function yS() {
  var e = Yr();
  return (
    ce(e, 332),
    ce(e, 334, Bn(1)),
    ce(e, 335, mS({ name: "XLDAPR", version: 12e4, flags: 3496657072 })),
    ce(e, 336),
    ce(e, 339, xS(1, "XLDAPR")),
    ce(e, 52),
    ce(e, 35, Bn(514)),
    ce(e, 4096, Bn(0)),
    ce(e, 4097, xn(1)),
    ce(e, 36),
    ce(e, 53),
    ce(e, 340),
    ce(e, 337, ES(1)),
    ce(e, 51, gS([[1, 0]])),
    ce(e, 338),
    ce(e, 333),
    e.end()
  );
}
function wg() {
  var e = [Zt];
  return (
    e.push(`<metadata xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:xlrd="http://schemas.microsoft.com/office/spreadsheetml/2017/richdata" xmlns:xda="http://schemas.microsoft.com/office/spreadsheetml/2017/dynamicarray">
  <metadataTypes count="1">
    <metadataType name="XLDAPR" minSupportedVersion="120000" copy="1" pasteAll="1" pasteValues="1" merge="1" splitFirst="1" rowColShift="1" clearFormats="1" clearComments="1" assign="1" coerce="1" cellMeta="1"/>
  </metadataTypes>
  <futureMetadata name="XLDAPR" count="1">
    <bk>
      <extLst>
        <ext uri="{bdbb8cdc-fa1e-496e-a857-3c3f30c029c3}">
          <xda:dynamicArrayProperties fDynamic="1" fCollapsed="0"/>
        </ext>
      </extLst>
    </bk>
  </futureMetadata>
  <cellMetadata count="1">
    <bk>
      <rc t="1" v="0"/>
    </bk>
  </cellMetadata>
</metadata>`),
    e.join("")
  );
}
function wS(e) {
  var t = {};
  t.i = e.read_shift(4);
  var r = {};
  (r.r = e.read_shift(4)), (r.c = e.read_shift(4)), (t.r = xt(r));
  var n = e.read_shift(1);
  return n & 2 && (t.l = "1"), n & 8 && (t.a = "1"), t;
}
var Yi = 1024;
function Sg(e, t) {
  for (
    var r = [21600, 21600],
      n = ["m0,0l0", r[1], r[0], r[1], r[0], "0xe"].join(","),
      a = [
        Ce("xml", null, {
          "xmlns:v": sn.v,
          "xmlns:o": sn.o,
          "xmlns:x": sn.x,
          "xmlns:mv": sn.mv,
        }).replace(/\/>/, ">"),
        Ce("o:shapelayout", Ce("o:idmap", null, { "v:ext": "edit", data: e }), {
          "v:ext": "edit",
        }),
        Ce(
          "v:shapetype",
          [
            Ce("v:stroke", null, { joinstyle: "miter" }),
            Ce("v:path", null, {
              gradientshapeok: "t",
              "o:connecttype": "rect",
            }),
          ].join(""),
          { id: "_x0000_t202", "o:spt": 202, coordsize: r.join(","), path: n },
        ),
      ];
    Yi < e * 1e3;

  )
    Yi += 1e3;
  return (
    t.forEach(function (i) {
      var s = or(i[0]),
        o = { color2: "#BEFF82", type: "gradient" };
      o.type == "gradient" && (o.angle = "-180");
      var l =
          o.type == "gradient"
            ? Ce("o:fill", null, { type: "gradientUnscaled", "v:ext": "view" })
            : null,
        c = Ce("v:fill", l, o),
        u = { on: "t", obscured: "t" };
      ++Yi,
        (a = a.concat([
          "<v:shape" +
            To({
              id: "_x0000_s" + Yi,
              type: "#_x0000_t202",
              style:
                "position:absolute; margin-left:80pt;margin-top:5pt;width:104pt;height:64pt;z-index:10" +
                (i[1].hidden ? ";visibility:hidden" : ""),
              fillcolor: "#ECFAD4",
              strokecolor: "#edeaa1",
            }) +
            ">",
          c,
          Ce("v:shadow", null, u),
          Ce("v:path", null, { "o:connecttype": "none" }),
          '<v:textbox><div style="text-align:left"></div></v:textbox>',
          '<x:ClientData ObjectType="Note">',
          "<x:MoveWithCells/>",
          "<x:SizeWithCells/>",
          gr(
            "x:Anchor",
            [s.c + 1, 0, s.r + 1, 0, s.c + 3, 20, s.r + 5, 20].join(","),
          ),
          gr("x:AutoFill", "False"),
          gr("x:Row", String(s.r)),
          gr("x:Column", String(s.c)),
          i[1].hidden ? "" : "<x:Visible/>",
          "</x:ClientData>",
          "</v:shape>",
        ]));
    }),
    a.push("</xml>"),
    a.join("")
  );
}
function Tg(e) {
  var t = [Zt, Ce("comments", null, { xmlns: vs[0] })],
    r = [];
  return (
    t.push("<authors>"),
    e.forEach(function (n) {
      n[1].forEach(function (a) {
        var i = vt(a.a);
        r.indexOf(i) == -1 && (r.push(i), t.push("<author>" + i + "</author>")),
          a.T &&
            a.ID &&
            r.indexOf("tc=" + a.ID) == -1 &&
            (r.push("tc=" + a.ID), t.push("<author>tc=" + a.ID + "</author>"));
      });
    }),
    r.length == 0 && (r.push("SheetJ5"), t.push("<author>SheetJ5</author>")),
    t.push("</authors>"),
    t.push("<commentList>"),
    e.forEach(function (n) {
      var a = 0,
        i = [];
      if (
        (n[1][0] && n[1][0].T && n[1][0].ID
          ? (a = r.indexOf("tc=" + n[1][0].ID))
          : n[1].forEach(function (l) {
              l.a && (a = r.indexOf(vt(l.a))), i.push(l.t || "");
            }),
        t.push('<comment ref="' + n[0] + '" authorId="' + a + '"><text>'),
        i.length <= 1)
      )
        t.push(gr("t", vt(i[0] || "")));
      else {
        for (
          var s =
              `Comment:
    ` +
              i[0] +
              `
`,
            o = 1;
          o < i.length;
          ++o
        )
          s +=
            `Reply:
    ` +
            i[o] +
            `
`;
        t.push(gr("t", vt(s)));
      }
      t.push("</text></comment>");
    }),
    t.push("</commentList>"),
    t.length > 2 &&
      ((t[t.length] = "</comments>"), (t[1] = t[1].replace("/>", ">"))),
    t.join("")
  );
}
function SS(e, t, r) {
  var n = [
    Zt,
    Ce("ThreadedComments", null, { xmlns: sr.TCMNT }).replace(/[\/]>/, ">"),
  ];
  return (
    e.forEach(function (a) {
      var i = "";
      (a[1] || []).forEach(function (s, o) {
        if (!s.T) {
          delete s.ID;
          return;
        }
        s.a && t.indexOf(s.a) == -1 && t.push(s.a);
        var l = {
          ref: a[0],
          id:
            "{54EE7951-7262-4200-6969-" +
            ("000000000000" + r.tcid++).slice(-12) +
            "}",
        };
        o == 0 ? (i = l.id) : (l.parentId = i),
          (s.ID = l.id),
          s.a &&
            (l.personId =
              "{54EE7950-7262-4200-6969-" +
              ("000000000000" + t.indexOf(s.a)).slice(-12) +
              "}"),
          n.push(Ce("threadedComment", gr("text", s.t || ""), l));
      });
    }),
    n.push("</ThreadedComments>"),
    n.join("")
  );
}
function TS(e) {
  var t = [
    Zt,
    Ce("personList", null, { xmlns: sr.TCMNT, "xmlns:x": vs[0] }).replace(
      /[\/]>/,
      ">",
    ),
  ];
  return (
    e.forEach(function (r, n) {
      t.push(
        Ce("person", null, {
          displayName: r,
          id:
            "{54EE7950-7262-4200-6969-" + ("000000000000" + n).slice(-12) + "}",
          userId: r,
          providerId: "None",
        }),
      );
    }),
    t.push("</personList>"),
    t.join("")
  );
}
function AS(e) {
  var t = {};
  t.iauthor = e.read_shift(4);
  var r = Ai(e);
  return (t.rfx = r.s), (t.ref = xt(r.s)), (e.l += 16), t;
}
function CS(e, t) {
  return (
    t == null && (t = ne(36)),
    t.write_shift(4, e[1].iauthor),
    xs(e[0], t),
    t.write_shift(4, 0),
    t.write_shift(4, 0),
    t.write_shift(4, 0),
    t.write_shift(4, 0),
    t
  );
}
var DS = Cr;
function LS(e) {
  return lr(e.slice(0, 54));
}
function NS(e) {
  var t = Yr(),
    r = [];
  return (
    ce(t, 628),
    ce(t, 630),
    e.forEach(function (n) {
      n[1].forEach(function (a) {
        r.indexOf(a.a) > -1 || (r.push(a.a.slice(0, 54)), ce(t, 632, LS(a.a)));
      });
    }),
    ce(t, 631),
    ce(t, 633),
    e.forEach(function (n) {
      n[1].forEach(function (a) {
        a.iauthor = r.indexOf(a.a);
        var i = { s: or(n[0]), e: or(n[0]) };
        ce(t, 635, CS([i, a])),
          a.t && a.t.length > 0 && ce(t, 637, ky(a)),
          ce(t, 636),
          delete a.iauthor;
      });
    }),
    ce(t, 634),
    ce(t, 629),
    t.end()
  );
}
function FS(e, t) {
  t.FullPaths.forEach(function (r, n) {
    if (n != 0) {
      var a = r.replace(/[^\/]*[\/]/, "/_VBA_PROJECT_CUR/");
      a.slice(-1) !== "/" && yt.utils.cfb_add(e, a, t.FileIndex[n].content);
    }
  });
}
var Ag = ["xlsb", "xlsm", "xlam", "biff8", "xla"],
  kS = (function () {
    var e =
        /(^|[^A-Za-z_])R(\[?-?\d+\]|[1-9]\d*|)C(\[?-?\d+\]|[1-9]\d*|)(?![A-Za-z0-9_])/g,
      t = { r: 0, c: 0 };
    function r(n, a, i, s) {
      var o = !1,
        l = !1;
      i.length == 0
        ? (l = !0)
        : i.charAt(0) == "[" && ((l = !0), (i = i.slice(1, -1))),
        s.length == 0
          ? (o = !0)
          : s.charAt(0) == "[" && ((o = !0), (s = s.slice(1, -1)));
      var c = i.length > 0 ? parseInt(i, 10) | 0 : 0,
        u = s.length > 0 ? parseInt(s, 10) | 0 : 0;
      return (
        o ? (u += t.c) : --u,
        l ? (c += t.r) : --c,
        a + (o ? "" : "$") + Ar(u) + (l ? "" : "$") + _r(c)
      );
    }
    return function (a, i) {
      return (t = i), a.replace(e, r);
    };
  })(),
  q0 =
    /(^|[^._A-Z0-9])([$]?)([A-Z]{1,2}|[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D])([$]?)(10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})(?![_.\(A-Za-z0-9])/g,
  ed = (function () {
    return function (t, r) {
      return t.replace(q0, function (n, a, i, s, o, l) {
        var c = Y0(s) - (i ? 0 : r.c),
          u = G0(l) - (o ? 0 : r.r),
          f = u == 0 ? "" : o ? u + 1 : "[" + u + "]",
          d = c == 0 ? "" : i ? c + 1 : "[" + c + "]";
        return a + "R" + f + "C" + d;
      });
    };
  })();
function RS(e, t) {
  return e.replace(q0, function (r, n, a, i, s, o) {
    return (
      n +
      (a == "$" ? a + i : Ar(Y0(i) + t.c)) +
      (s == "$" ? s + o : _r(G0(o) + t.r))
    );
  });
}
function OS(e) {
  return e.length != 1;
}
function Kt(e) {
  e.l += 1;
}
function Wa(e, t) {
  var r = e.read_shift(2);
  return [r & 16383, (r >> 14) & 1, (r >> 15) & 1];
}
function Cg(e, t, r) {
  var n = 2;
  if (r) {
    if (r.biff >= 2 && r.biff <= 5) return Dg(e);
    r.biff == 12 && (n = 4);
  }
  var a = e.read_shift(n),
    i = e.read_shift(n),
    s = Wa(e),
    o = Wa(e);
  return {
    s: { r: a, c: s[0], cRel: s[1], rRel: s[2] },
    e: { r: i, c: o[0], cRel: o[1], rRel: o[2] },
  };
}
function Dg(e) {
  var t = Wa(e),
    r = Wa(e),
    n = e.read_shift(1),
    a = e.read_shift(1);
  return {
    s: { r: t[0], c: n, cRel: t[1], rRel: t[2] },
    e: { r: r[0], c: a, cRel: r[1], rRel: r[2] },
  };
}
function IS(e, t, r) {
  if (r.biff < 8) return Dg(e);
  var n = e.read_shift(r.biff == 12 ? 4 : 2),
    a = e.read_shift(r.biff == 12 ? 4 : 2),
    i = Wa(e),
    s = Wa(e);
  return {
    s: { r: n, c: i[0], cRel: i[1], rRel: i[2] },
    e: { r: a, c: s[0], cRel: s[1], rRel: s[2] },
  };
}
function Lg(e, t, r) {
  if (r && r.biff >= 2 && r.biff <= 5) return PS(e);
  var n = e.read_shift(r && r.biff == 12 ? 4 : 2),
    a = Wa(e);
  return { r: n, c: a[0], cRel: a[1], rRel: a[2] };
}
function PS(e) {
  var t = Wa(e),
    r = e.read_shift(1);
  return { r: t[0], c: r, cRel: t[1], rRel: t[2] };
}
function MS(e) {
  var t = e.read_shift(2),
    r = e.read_shift(2);
  return {
    r: t,
    c: r & 255,
    fQuoted: !!(r & 16384),
    cRel: r >> 15,
    rRel: r >> 15,
  };
}
function bS(e, t, r) {
  var n = r && r.biff ? r.biff : 8;
  if (n >= 2 && n <= 5) return BS(e);
  var a = e.read_shift(n >= 12 ? 4 : 2),
    i = e.read_shift(2),
    s = (i & 16384) >> 14,
    o = (i & 32768) >> 15;
  if (((i &= 16383), o == 1)) for (; a > 524287; ) a -= 1048576;
  if (s == 1) for (; i > 8191; ) i = i - 16384;
  return { r: a, c: i, cRel: s, rRel: o };
}
function BS(e) {
  var t = e.read_shift(2),
    r = e.read_shift(1),
    n = (t & 32768) >> 15,
    a = (t & 16384) >> 14;
  return (
    (t &= 16383),
    n == 1 && t >= 8192 && (t = t - 16384),
    a == 1 && r >= 128 && (r = r - 256),
    { r: t, c: r, cRel: a, rRel: n }
  );
}
function jS(e, t, r) {
  var n = (e[e.l++] & 96) >> 5,
    a = Cg(e, r.biff >= 2 && r.biff <= 5 ? 6 : 8, r);
  return [n, a];
}
function US(e, t, r) {
  var n = (e[e.l++] & 96) >> 5,
    a = e.read_shift(2, "i"),
    i = 8;
  if (r)
    switch (r.biff) {
      case 5:
        (e.l += 12), (i = 6);
        break;
      case 12:
        i = 12;
        break;
    }
  var s = Cg(e, i, r);
  return [n, a, s];
}
function $S(e, t, r) {
  var n = (e[e.l++] & 96) >> 5;
  return (e.l += r && r.biff > 8 ? 12 : r.biff < 8 ? 6 : 8), [n];
}
function HS(e, t, r) {
  var n = (e[e.l++] & 96) >> 5,
    a = e.read_shift(2),
    i = 8;
  if (r)
    switch (r.biff) {
      case 5:
        (e.l += 12), (i = 6);
        break;
      case 12:
        i = 12;
        break;
    }
  return (e.l += i), [n, a];
}
function WS(e, t, r) {
  var n = (e[e.l++] & 96) >> 5,
    a = IS(e, t - 1, r);
  return [n, a];
}
function VS(e, t, r) {
  var n = (e[e.l++] & 96) >> 5;
  return (e.l += r.biff == 2 ? 6 : r.biff == 12 ? 14 : 7), [n];
}
function Tp(e) {
  var t = e[e.l + 1] & 1,
    r = 1;
  return (e.l += 4), [t, r];
}
function zS(e, t, r) {
  e.l += 2;
  for (
    var n = e.read_shift(r && r.biff == 2 ? 1 : 2), a = [], i = 0;
    i <= n;
    ++i
  )
    a.push(e.read_shift(r && r.biff == 2 ? 1 : 2));
  return a;
}
function GS(e, t, r) {
  var n = e[e.l + 1] & 255 ? 1 : 0;
  return (e.l += 2), [n, e.read_shift(r && r.biff == 2 ? 1 : 2)];
}
function YS(e, t, r) {
  var n = e[e.l + 1] & 255 ? 1 : 0;
  return (e.l += 2), [n, e.read_shift(r && r.biff == 2 ? 1 : 2)];
}
function KS(e) {
  var t = e[e.l + 1] & 255 ? 1 : 0;
  return (e.l += 2), [t, e.read_shift(2)];
}
function XS(e, t, r) {
  var n = e[e.l + 1] & 255 ? 1 : 0;
  return (e.l += r && r.biff == 2 ? 3 : 4), [n];
}
function Ng(e) {
  var t = e.read_shift(1),
    r = e.read_shift(1);
  return [t, r];
}
function QS(e) {
  return e.read_shift(2), Ng(e);
}
function JS(e) {
  return e.read_shift(2), Ng(e);
}
function ZS(e, t, r) {
  var n = (e[e.l] & 96) >> 5;
  e.l += 1;
  var a = Lg(e, 0, r);
  return [n, a];
}
function qS(e, t, r) {
  var n = (e[e.l] & 96) >> 5;
  e.l += 1;
  var a = bS(e, 0, r);
  return [n, a];
}
function eT(e, t, r) {
  var n = (e[e.l] & 96) >> 5;
  e.l += 1;
  var a = e.read_shift(2);
  r && r.biff == 5 && (e.l += 12);
  var i = Lg(e, 0, r);
  return [n, a, i];
}
function tT(e, t, r) {
  var n = (e[e.l] & 96) >> 5;
  e.l += 1;
  var a = e.read_shift(r && r.biff <= 3 ? 1 : 2);
  return [tA[a], Rg[a], n];
}
function rT(e, t, r) {
  var n = e[e.l++],
    a = e.read_shift(1),
    i = r && r.biff <= 3 ? [n == 88 ? -1 : 0, e.read_shift(1)] : nT(e);
  return [a, (i[0] === 0 ? Rg : eA)[i[1]]];
}
function nT(e) {
  return [e[e.l + 1] >> 7, e.read_shift(2) & 32767];
}
function aT(e, t, r) {
  e.l += r && r.biff == 2 ? 3 : 4;
}
function iT(e, t, r) {
  if ((e.l++, r && r.biff == 12)) return [e.read_shift(4, "i"), 0];
  var n = e.read_shift(2),
    a = e.read_shift(r && r.biff == 2 ? 1 : 2);
  return [n, a];
}
function sT(e) {
  return e.l++, bo[e.read_shift(1)];
}
function oT(e) {
  return e.l++, e.read_shift(2);
}
function lT(e) {
  return e.l++, e.read_shift(1) !== 0;
}
function cT(e) {
  return e.l++, _s(e);
}
function uT(e, t, r) {
  return e.l++, fg(e, t - 1, r);
}
function fT(e, t) {
  var r = [e.read_shift(1)];
  if (t == 12)
    switch (r[0]) {
      case 2:
        r[0] = 4;
        break;
      case 4:
        r[0] = 16;
        break;
      case 0:
        r[0] = 1;
        break;
      case 1:
        r[0] = 2;
        break;
    }
  switch (r[0]) {
    case 4:
      (r[1] = ew(e, 1) ? "TRUE" : "FALSE"), t != 12 && (e.l += 7);
      break;
    case 37:
    case 16:
      (r[1] = bo[e[e.l]]), (e.l += t == 12 ? 4 : 8);
      break;
    case 0:
      e.l += 8;
      break;
    case 1:
      r[1] = _s(e);
      break;
    case 2:
      r[1] = aw(e, 0, { biff: t > 0 && t < 8 ? 2 : t });
      break;
    default:
      throw new Error("Bad SerAr: " + r[0]);
  }
  return r;
}
function dT(e, t, r) {
  for (var n = e.read_shift(r.biff == 12 ? 4 : 2), a = [], i = 0; i != n; ++i)
    a.push((r.biff == 12 ? Ai : ow)(e));
  return a;
}
function hT(e, t, r) {
  var n = 0,
    a = 0;
  r.biff == 12
    ? ((n = e.read_shift(4)), (a = e.read_shift(4)))
    : ((a = 1 + e.read_shift(1)), (n = 1 + e.read_shift(2))),
    r.biff >= 2 && r.biff < 8 && (--n, --a == 0 && (a = 256));
  for (var i = 0, s = []; i != n && (s[i] = []); ++i)
    for (var o = 0; o != a; ++o) s[i][o] = fT(e, r.biff);
  return s;
}
function pT(e, t, r) {
  var n = (e.read_shift(1) >>> 5) & 3,
    a = !r || r.biff >= 8 ? 4 : 2,
    i = e.read_shift(a);
  switch (r.biff) {
    case 2:
      e.l += 5;
      break;
    case 3:
    case 4:
      e.l += 8;
      break;
    case 5:
      e.l += 12;
      break;
  }
  return [n, 0, i];
}
function mT(e, t, r) {
  if (r.biff == 5) return vT(e);
  var n = (e.read_shift(1) >>> 5) & 3,
    a = e.read_shift(2),
    i = e.read_shift(4);
  return [n, a, i];
}
function vT(e) {
  var t = (e.read_shift(1) >>> 5) & 3,
    r = e.read_shift(2, "i");
  e.l += 8;
  var n = e.read_shift(2);
  return (e.l += 12), [t, r, n];
}
function gT(e, t, r) {
  var n = (e.read_shift(1) >>> 5) & 3;
  e.l += r && r.biff == 2 ? 3 : 4;
  var a = e.read_shift(r && r.biff == 2 ? 1 : 2);
  return [n, a];
}
function xT(e, t, r) {
  var n = (e.read_shift(1) >>> 5) & 3,
    a = e.read_shift(r && r.biff == 2 ? 1 : 2);
  return [n, a];
}
function _T(e, t, r) {
  var n = (e.read_shift(1) >>> 5) & 3;
  return (e.l += 4), r.biff < 8 && e.l--, r.biff == 12 && (e.l += 2), [n];
}
function ET(e, t, r) {
  var n = (e[e.l++] & 96) >> 5,
    a = e.read_shift(2),
    i = 4;
  if (r)
    switch (r.biff) {
      case 5:
        i = 15;
        break;
      case 12:
        i = 6;
        break;
    }
  return (e.l += i), [n, a];
}
var yT = Jn,
  wT = Jn,
  ST = Jn;
function Bo(e, t, r) {
  return (e.l += 2), [MS(e)];
}
function td(e) {
  return (e.l += 6), [];
}
var TT = Bo,
  AT = td,
  CT = td,
  DT = Bo;
function Fg(e) {
  return (e.l += 2), [cg(e), e.read_shift(2) & 1];
}
var LT = Bo,
  NT = Fg,
  FT = td,
  kT = Bo,
  RT = Bo,
  OT = [
    "Data",
    "All",
    "Headers",
    "??",
    "?Data2",
    "??",
    "?DataHeaders",
    "??",
    "Totals",
    "??",
    "??",
    "??",
    "?DataTotals",
    "??",
    "??",
    "??",
    "?Current",
  ];
function IT(e) {
  e.l += 2;
  var t = e.read_shift(2),
    r = e.read_shift(2),
    n = e.read_shift(4),
    a = e.read_shift(2),
    i = e.read_shift(2),
    s = OT[(r >> 2) & 31];
  return { ixti: t, coltype: r & 3, rt: s, idx: n, c: a, C: i };
}
function PT(e) {
  return (e.l += 2), [e.read_shift(4)];
}
function MT(e, t, r) {
  return (e.l += 5), (e.l += 2), (e.l += r.biff == 2 ? 1 : 4), ["PTGSHEET"];
}
function bT(e, t, r) {
  return (e.l += r.biff == 2 ? 4 : 5), ["PTGENDSHEET"];
}
function BT(e) {
  var t = (e.read_shift(1) >>> 5) & 3,
    r = e.read_shift(2);
  return [t, r];
}
function jT(e) {
  var t = (e.read_shift(1) >>> 5) & 3,
    r = e.read_shift(2);
  return [t, r];
}
function UT(e) {
  return (e.l += 4), [0, 0];
}
var Ap = {
    1: { n: "PtgExp", f: iT },
    2: { n: "PtgTbl", f: ST },
    3: { n: "PtgAdd", f: Kt },
    4: { n: "PtgSub", f: Kt },
    5: { n: "PtgMul", f: Kt },
    6: { n: "PtgDiv", f: Kt },
    7: { n: "PtgPower", f: Kt },
    8: { n: "PtgConcat", f: Kt },
    9: { n: "PtgLt", f: Kt },
    10: { n: "PtgLe", f: Kt },
    11: { n: "PtgEq", f: Kt },
    12: { n: "PtgGe", f: Kt },
    13: { n: "PtgGt", f: Kt },
    14: { n: "PtgNe", f: Kt },
    15: { n: "PtgIsect", f: Kt },
    16: { n: "PtgUnion", f: Kt },
    17: { n: "PtgRange", f: Kt },
    18: { n: "PtgUplus", f: Kt },
    19: { n: "PtgUminus", f: Kt },
    20: { n: "PtgPercent", f: Kt },
    21: { n: "PtgParen", f: Kt },
    22: { n: "PtgMissArg", f: Kt },
    23: { n: "PtgStr", f: uT },
    26: { n: "PtgSheet", f: MT },
    27: { n: "PtgEndSheet", f: bT },
    28: { n: "PtgErr", f: sT },
    29: { n: "PtgBool", f: lT },
    30: { n: "PtgInt", f: oT },
    31: { n: "PtgNum", f: cT },
    32: { n: "PtgArray", f: VS },
    33: { n: "PtgFunc", f: tT },
    34: { n: "PtgFuncVar", f: rT },
    35: { n: "PtgName", f: pT },
    36: { n: "PtgRef", f: ZS },
    37: { n: "PtgArea", f: jS },
    38: { n: "PtgMemArea", f: gT },
    39: { n: "PtgMemErr", f: yT },
    40: { n: "PtgMemNoMem", f: wT },
    41: { n: "PtgMemFunc", f: xT },
    42: { n: "PtgRefErr", f: _T },
    43: { n: "PtgAreaErr", f: $S },
    44: { n: "PtgRefN", f: qS },
    45: { n: "PtgAreaN", f: WS },
    46: { n: "PtgMemAreaN", f: BT },
    47: { n: "PtgMemNoMemN", f: jT },
    57: { n: "PtgNameX", f: mT },
    58: { n: "PtgRef3d", f: eT },
    59: { n: "PtgArea3d", f: US },
    60: { n: "PtgRefErr3d", f: ET },
    61: { n: "PtgAreaErr3d", f: HS },
    255: {},
  },
  $T = {
    64: 32,
    96: 32,
    65: 33,
    97: 33,
    66: 34,
    98: 34,
    67: 35,
    99: 35,
    68: 36,
    100: 36,
    69: 37,
    101: 37,
    70: 38,
    102: 38,
    71: 39,
    103: 39,
    72: 40,
    104: 40,
    73: 41,
    105: 41,
    74: 42,
    106: 42,
    75: 43,
    107: 43,
    76: 44,
    108: 44,
    77: 45,
    109: 45,
    78: 46,
    110: 46,
    79: 47,
    111: 47,
    88: 34,
    120: 34,
    89: 57,
    121: 57,
    90: 58,
    122: 58,
    91: 59,
    123: 59,
    92: 60,
    124: 60,
    93: 61,
    125: 61,
  },
  HT = {
    1: { n: "PtgElfLel", f: Fg },
    2: { n: "PtgElfRw", f: kT },
    3: { n: "PtgElfCol", f: TT },
    6: { n: "PtgElfRwV", f: RT },
    7: { n: "PtgElfColV", f: DT },
    10: { n: "PtgElfRadical", f: LT },
    11: { n: "PtgElfRadicalS", f: FT },
    13: { n: "PtgElfColS", f: AT },
    15: { n: "PtgElfColSV", f: CT },
    16: { n: "PtgElfRadicalLel", f: NT },
    25: { n: "PtgList", f: IT },
    29: { n: "PtgSxName", f: PT },
    255: {},
  },
  WT = {
    0: { n: "PtgAttrNoop", f: UT },
    1: { n: "PtgAttrSemi", f: XS },
    2: { n: "PtgAttrIf", f: YS },
    4: { n: "PtgAttrChoose", f: zS },
    8: { n: "PtgAttrGoto", f: GS },
    16: { n: "PtgAttrSum", f: aT },
    32: { n: "PtgAttrBaxcel", f: Tp },
    33: { n: "PtgAttrBaxcel", f: Tp },
    64: { n: "PtgAttrSpace", f: QS },
    65: { n: "PtgAttrSpaceSemi", f: JS },
    128: { n: "PtgAttrIfError", f: KS },
    255: {},
  };
function VT(e, t, r, n) {
  if (n.biff < 8) return Jn(e, t);
  for (var a = e.l + t, i = [], s = 0; s !== r.length; ++s)
    switch (r[s][0]) {
      case "PtgArray":
        (r[s][1] = hT(e, 0, n)), i.push(r[s][1]);
        break;
      case "PtgMemArea":
        (r[s][2] = dT(e, r[s][1], n)), i.push(r[s][2]);
        break;
      case "PtgExp":
        n && n.biff == 12 && ((r[s][1][1] = e.read_shift(4)), i.push(r[s][1]));
        break;
      case "PtgList":
      case "PtgElfRadicalS":
      case "PtgElfColS":
      case "PtgElfColSV":
        throw "Unsupported " + r[s][0];
    }
  return (t = a - e.l), t !== 0 && i.push(Jn(e, t)), i;
}
function zT(e, t, r) {
  for (var n = e.l + t, a, i, s = []; n != e.l; )
    (t = n - e.l),
      (i = e[e.l]),
      (a = Ap[i] || Ap[$T[i]]),
      (i === 24 || i === 25) && (a = (i === 24 ? HT : WT)[e[e.l + 1]]),
      !a || !a.f ? Jn(e, t) : s.push([a.n, a.f(e, t, r)]);
  return s;
}
function GT(e) {
  for (var t = [], r = 0; r < e.length; ++r) {
    for (var n = e[r], a = [], i = 0; i < n.length; ++i) {
      var s = n[i];
      if (s)
        switch (s[0]) {
          case 2:
            a.push('"' + s[1].replace(/"/g, '""') + '"');
            break;
          default:
            a.push(s[1]);
        }
      else a.push("");
    }
    t.push(a.join(","));
  }
  return t.join(";");
}
var YT = {
  PtgAdd: "+",
  PtgConcat: "&",
  PtgDiv: "/",
  PtgEq: "=",
  PtgGe: ">=",
  PtgGt: ">",
  PtgLe: "<=",
  PtgLt: "<",
  PtgMul: "*",
  PtgNe: "<>",
  PtgPower: "^",
  PtgSub: "-",
};
function KT(e, t) {
  if (!e && !(t && t.biff <= 5 && t.biff >= 2))
    throw new Error("empty sheet name");
  return /[^\w\u4E00-\u9FFF\u3040-\u30FF]/.test(e) ? "'" + e + "'" : e;
}
function kg(e, t, r) {
  if (!e) return "SH33TJSERR0";
  if (r.biff > 8 && (!e.XTI || !e.XTI[t])) return e.SheetNames[t];
  if (!e.XTI) return "SH33TJSERR6";
  var n = e.XTI[t];
  if (r.biff < 8)
    return (
      t > 1e4 && (t -= 65536), t < 0 && (t = -t), t == 0 ? "" : e.XTI[t - 1]
    );
  if (!n) return "SH33TJSERR1";
  var a = "";
  if (r.biff > 8)
    switch (e[n[0]][0]) {
      case 357:
        return (
          (a = n[1] == -1 ? "#REF" : e.SheetNames[n[1]]),
          n[1] == n[2] ? a : a + ":" + e.SheetNames[n[2]]
        );
      case 358:
        return r.SID != null ? e.SheetNames[r.SID] : "SH33TJSSAME" + e[n[0]][0];
      case 355:
      default:
        return "SH33TJSSRC" + e[n[0]][0];
    }
  switch (e[n[0]][0][0]) {
    case 1025:
      return (
        (a = n[1] == -1 ? "#REF" : e.SheetNames[n[1]] || "SH33TJSERR3"),
        n[1] == n[2] ? a : a + ":" + e.SheetNames[n[2]]
      );
    case 14849:
      return e[n[0]]
        .slice(1)
        .map(function (i) {
          return i.Name;
        })
        .join(";;");
    default:
      return e[n[0]][0][3]
        ? ((a = n[1] == -1 ? "#REF" : e[n[0]][0][3][n[1]] || "SH33TJSERR4"),
          n[1] == n[2] ? a : a + ":" + e[n[0]][0][3][n[2]])
        : "SH33TJSERR2";
  }
}
function Cp(e, t, r) {
  var n = kg(e, t, r);
  return n == "#REF" ? n : KT(n, r);
}
function fs(e, t, r, n, a) {
  var i = (a && a.biff) || 8,
    s = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } },
    o = [],
    l,
    c,
    u,
    f = 0,
    d = 0,
    h,
    m = "";
  if (!e[0] || !e[0][0]) return "";
  for (var p = -1, x = "", _ = 0, v = e[0].length; _ < v; ++_) {
    var g = e[0][_];
    switch (g[0]) {
      case "PtgUminus":
        o.push("-" + o.pop());
        break;
      case "PtgUplus":
        o.push("+" + o.pop());
        break;
      case "PtgPercent":
        o.push(o.pop() + "%");
        break;
      case "PtgAdd":
      case "PtgConcat":
      case "PtgDiv":
      case "PtgEq":
      case "PtgGe":
      case "PtgGt":
      case "PtgLe":
      case "PtgLt":
      case "PtgMul":
      case "PtgNe":
      case "PtgPower":
      case "PtgSub":
        if (((l = o.pop()), (c = o.pop()), p >= 0)) {
          switch (e[0][p][1][0]) {
            case 0:
              x = jt(" ", e[0][p][1][1]);
              break;
            case 1:
              x = jt("\r", e[0][p][1][1]);
              break;
            default:
              if (((x = ""), a.WTF))
                throw new Error("Unexpected PtgAttrSpaceType " + e[0][p][1][0]);
          }
          (c = c + x), (p = -1);
        }
        o.push(c + YT[g[0]] + l);
        break;
      case "PtgIsect":
        (l = o.pop()), (c = o.pop()), o.push(c + " " + l);
        break;
      case "PtgUnion":
        (l = o.pop()), (c = o.pop()), o.push(c + "," + l);
        break;
      case "PtgRange":
        (l = o.pop()), (c = o.pop()), o.push(c + ":" + l);
        break;
      case "PtgAttrChoose":
        break;
      case "PtgAttrGoto":
        break;
      case "PtgAttrIf":
        break;
      case "PtgAttrIfError":
        break;
      case "PtgRef":
        (u = qs(g[1][1], s, a)), o.push(eo(u, i));
        break;
      case "PtgRefN":
        (u = r ? qs(g[1][1], r, a) : g[1][1]), o.push(eo(u, i));
        break;
      case "PtgRef3d":
        (f = g[1][1]),
          (u = qs(g[1][2], s, a)),
          (m = Cp(n, f, a)),
          o.push(m + "!" + eo(u, i));
        break;
      case "PtgFunc":
      case "PtgFuncVar":
        var S = g[1][0],
          b = g[1][1];
        S || (S = 0), (S &= 127);
        var C = S == 0 ? [] : o.slice(-S);
        (o.length -= S),
          b === "User" && (b = C.shift()),
          o.push(b + "(" + C.join(",") + ")");
        break;
      case "PtgBool":
        o.push(g[1] ? "TRUE" : "FALSE");
        break;
      case "PtgInt":
        o.push(g[1]);
        break;
      case "PtgNum":
        o.push(String(g[1]));
        break;
      case "PtgStr":
        o.push('"' + g[1].replace(/"/g, '""') + '"');
        break;
      case "PtgErr":
        o.push(g[1]);
        break;
      case "PtgAreaN":
        (h = up(g[1][1], r ? { s: r } : s, a)), o.push(Fu(h, a));
        break;
      case "PtgArea":
        (h = up(g[1][1], s, a)), o.push(Fu(h, a));
        break;
      case "PtgArea3d":
        (f = g[1][1]),
          (h = g[1][2]),
          (m = Cp(n, f, a)),
          o.push(m + "!" + Fu(h, a));
        break;
      case "PtgAttrSum":
        o.push("SUM(" + o.pop() + ")");
        break;
      case "PtgAttrBaxcel":
      case "PtgAttrSemi":
        break;
      case "PtgName":
        d = g[1][2];
        var D = (n.names || [])[d - 1] || (n[0] || [])[d],
          A = D ? D.Name : "SH33TJSNAME" + String(d);
        A && A.slice(0, 6) == "_xlfn." && !a.xlfn && (A = A.slice(6)),
          o.push(A);
        break;
      case "PtgNameX":
        var F = g[1][1];
        d = g[1][2];
        var I;
        if (a.biff <= 5) F < 0 && (F = -F), n[F] && (I = n[F][d]);
        else {
          var P = "";
          if (
            (((n[F] || [])[0] || [])[0] == 14849 ||
              (((n[F] || [])[0] || [])[0] == 1025
                ? n[F][d] &&
                  n[F][d].itab > 0 &&
                  (P = n.SheetNames[n[F][d].itab - 1] + "!")
                : (P = n.SheetNames[d - 1] + "!")),
            n[F] && n[F][d])
          )
            P += n[F][d].Name;
          else if (n[0] && n[0][d]) P += n[0][d].Name;
          else {
            var B = (kg(n, F, a) || "").split(";;");
            B[d - 1] ? (P = B[d - 1]) : (P += "SH33TJSERRX");
          }
          o.push(P);
          break;
        }
        I || (I = { Name: "SH33TJSERRY" }), o.push(I.Name);
        break;
      case "PtgParen":
        var X = "(",
          ae = ")";
        if (p >= 0) {
          switch (((x = ""), e[0][p][1][0])) {
            case 2:
              X = jt(" ", e[0][p][1][1]) + X;
              break;
            case 3:
              X = jt("\r", e[0][p][1][1]) + X;
              break;
            case 4:
              ae = jt(" ", e[0][p][1][1]) + ae;
              break;
            case 5:
              ae = jt("\r", e[0][p][1][1]) + ae;
              break;
            default:
              if (a.WTF)
                throw new Error("Unexpected PtgAttrSpaceType " + e[0][p][1][0]);
          }
          p = -1;
        }
        o.push(X + o.pop() + ae);
        break;
      case "PtgRefErr":
        o.push("#REF!");
        break;
      case "PtgRefErr3d":
        o.push("#REF!");
        break;
      case "PtgExp":
        u = { c: g[1][1], r: g[1][0] };
        var le = { c: r.c, r: r.r };
        if (n.sharedf[xt(u)]) {
          var Re = n.sharedf[xt(u)];
          o.push(fs(Re, s, le, n, a));
        } else {
          var Ae = !1;
          for (l = 0; l != n.arrayf.length; ++l)
            if (
              ((c = n.arrayf[l]),
              !(u.c < c[0].s.c || u.c > c[0].e.c) &&
                !(u.r < c[0].s.r || u.r > c[0].e.r))
            ) {
              o.push(fs(c[1], s, le, n, a)), (Ae = !0);
              break;
            }
          Ae || o.push(g[1]);
        }
        break;
      case "PtgArray":
        o.push("{" + GT(g[1]) + "}");
        break;
      case "PtgMemArea":
        break;
      case "PtgAttrSpace":
      case "PtgAttrSpaceSemi":
        p = _;
        break;
      case "PtgTbl":
        break;
      case "PtgMemErr":
        break;
      case "PtgMissArg":
        o.push("");
        break;
      case "PtgAreaErr":
        o.push("#REF!");
        break;
      case "PtgAreaErr3d":
        o.push("#REF!");
        break;
      case "PtgList":
        o.push("Table" + g[1].idx + "[#" + g[1].rt + "]");
        break;
      case "PtgMemAreaN":
      case "PtgMemNoMemN":
      case "PtgAttrNoop":
      case "PtgSheet":
      case "PtgEndSheet":
        break;
      case "PtgMemFunc":
        break;
      case "PtgMemNoMem":
        break;
      case "PtgElfCol":
      case "PtgElfColS":
      case "PtgElfColSV":
      case "PtgElfColV":
      case "PtgElfLel":
      case "PtgElfRadical":
      case "PtgElfRadicalLel":
      case "PtgElfRadicalS":
      case "PtgElfRw":
      case "PtgElfRwV":
        throw new Error("Unsupported ELFs");
      case "PtgSxName":
        throw new Error("Unrecognized Formula Token: " + String(g));
      default:
        throw new Error("Unrecognized Formula Token: " + String(g));
    }
    var se = ["PtgAttrSpace", "PtgAttrSpaceSemi", "PtgAttrGoto"];
    if (a.biff != 3 && p >= 0 && se.indexOf(e[0][_][0]) == -1) {
      g = e[0][p];
      var ye = !0;
      switch (g[1][0]) {
        case 4:
          ye = !1;
        case 0:
          x = jt(" ", g[1][1]);
          break;
        case 5:
          ye = !1;
        case 1:
          x = jt("\r", g[1][1]);
          break;
        default:
          if (((x = ""), a.WTF))
            throw new Error("Unexpected PtgAttrSpaceType " + g[1][0]);
      }
      o.push((ye ? x : "") + o.pop() + (ye ? "" : x)), (p = -1);
    }
  }
  if (o.length > 1 && a.WTF) throw new Error("bad formula stack");
  return o[0];
}
function XT(e) {
  if (e == null) {
    var t = ne(8);
    return (
      t.write_shift(1, 3),
      t.write_shift(1, 0),
      t.write_shift(2, 0),
      t.write_shift(2, 0),
      t.write_shift(2, 65535),
      t
    );
  } else if (typeof e == "number") return gi(e);
  return gi(0);
}
function QT(e, t, r, n, a) {
  var i = xi(t, r, a),
    s = XT(e.v),
    o = ne(6),
    l = 33;
  o.write_shift(2, l), o.write_shift(4, 0);
  for (var c = ne(e.bf.length), u = 0; u < e.bf.length; ++u) c[u] = e.bf[u];
  var f = vr([i, s, o, c]);
  return f;
}
function $c(e, t, r) {
  var n = e.read_shift(4),
    a = zT(e, n, r),
    i = e.read_shift(4),
    s = i > 0 ? VT(e, i, a, r) : null;
  return [a, s];
}
var JT = $c,
  Hc = $c,
  ZT = $c,
  qT = $c,
  eA = {
    0: "BEEP",
    1: "OPEN",
    2: "OPEN.LINKS",
    3: "CLOSE.ALL",
    4: "SAVE",
    5: "SAVE.AS",
    6: "FILE.DELETE",
    7: "PAGE.SETUP",
    8: "PRINT",
    9: "PRINTER.SETUP",
    10: "QUIT",
    11: "NEW.WINDOW",
    12: "ARRANGE.ALL",
    13: "WINDOW.SIZE",
    14: "WINDOW.MOVE",
    15: "FULL",
    16: "CLOSE",
    17: "RUN",
    22: "SET.PRINT.AREA",
    23: "SET.PRINT.TITLES",
    24: "SET.PAGE.BREAK",
    25: "REMOVE.PAGE.BREAK",
    26: "FONT",
    27: "DISPLAY",
    28: "PROTECT.DOCUMENT",
    29: "PRECISION",
    30: "A1.R1C1",
    31: "CALCULATE.NOW",
    32: "CALCULATION",
    34: "DATA.FIND",
    35: "EXTRACT",
    36: "DATA.DELETE",
    37: "SET.DATABASE",
    38: "SET.CRITERIA",
    39: "SORT",
    40: "DATA.SERIES",
    41: "TABLE",
    42: "FORMAT.NUMBER",
    43: "ALIGNMENT",
    44: "STYLE",
    45: "BORDER",
    46: "CELL.PROTECTION",
    47: "COLUMN.WIDTH",
    48: "UNDO",
    49: "CUT",
    50: "COPY",
    51: "PASTE",
    52: "CLEAR",
    53: "PASTE.SPECIAL",
    54: "EDIT.DELETE",
    55: "INSERT",
    56: "FILL.RIGHT",
    57: "FILL.DOWN",
    61: "DEFINE.NAME",
    62: "CREATE.NAMES",
    63: "FORMULA.GOTO",
    64: "FORMULA.FIND",
    65: "SELECT.LAST.CELL",
    66: "SHOW.ACTIVE.CELL",
    67: "GALLERY.AREA",
    68: "GALLERY.BAR",
    69: "GALLERY.COLUMN",
    70: "GALLERY.LINE",
    71: "GALLERY.PIE",
    72: "GALLERY.SCATTER",
    73: "COMBINATION",
    74: "PREFERRED",
    75: "ADD.OVERLAY",
    76: "GRIDLINES",
    77: "SET.PREFERRED",
    78: "AXES",
    79: "LEGEND",
    80: "ATTACH.TEXT",
    81: "ADD.ARROW",
    82: "SELECT.CHART",
    83: "SELECT.PLOT.AREA",
    84: "PATTERNS",
    85: "MAIN.CHART",
    86: "OVERLAY",
    87: "SCALE",
    88: "FORMAT.LEGEND",
    89: "FORMAT.TEXT",
    90: "EDIT.REPEAT",
    91: "PARSE",
    92: "JUSTIFY",
    93: "HIDE",
    94: "UNHIDE",
    95: "WORKSPACE",
    96: "FORMULA",
    97: "FORMULA.FILL",
    98: "FORMULA.ARRAY",
    99: "DATA.FIND.NEXT",
    100: "DATA.FIND.PREV",
    101: "FORMULA.FIND.NEXT",
    102: "FORMULA.FIND.PREV",
    103: "ACTIVATE",
    104: "ACTIVATE.NEXT",
    105: "ACTIVATE.PREV",
    106: "UNLOCKED.NEXT",
    107: "UNLOCKED.PREV",
    108: "COPY.PICTURE",
    109: "SELECT",
    110: "DELETE.NAME",
    111: "DELETE.FORMAT",
    112: "VLINE",
    113: "HLINE",
    114: "VPAGE",
    115: "HPAGE",
    116: "VSCROLL",
    117: "HSCROLL",
    118: "ALERT",
    119: "NEW",
    120: "CANCEL.COPY",
    121: "SHOW.CLIPBOARD",
    122: "MESSAGE",
    124: "PASTE.LINK",
    125: "APP.ACTIVATE",
    126: "DELETE.ARROW",
    127: "ROW.HEIGHT",
    128: "FORMAT.MOVE",
    129: "FORMAT.SIZE",
    130: "FORMULA.REPLACE",
    131: "SEND.KEYS",
    132: "SELECT.SPECIAL",
    133: "APPLY.NAMES",
    134: "REPLACE.FONT",
    135: "FREEZE.PANES",
    136: "SHOW.INFO",
    137: "SPLIT",
    138: "ON.WINDOW",
    139: "ON.DATA",
    140: "DISABLE.INPUT",
    142: "OUTLINE",
    143: "LIST.NAMES",
    144: "FILE.CLOSE",
    145: "SAVE.WORKBOOK",
    146: "DATA.FORM",
    147: "COPY.CHART",
    148: "ON.TIME",
    149: "WAIT",
    150: "FORMAT.FONT",
    151: "FILL.UP",
    152: "FILL.LEFT",
    153: "DELETE.OVERLAY",
    155: "SHORT.MENUS",
    159: "SET.UPDATE.STATUS",
    161: "COLOR.PALETTE",
    162: "DELETE.STYLE",
    163: "WINDOW.RESTORE",
    164: "WINDOW.MAXIMIZE",
    166: "CHANGE.LINK",
    167: "CALCULATE.DOCUMENT",
    168: "ON.KEY",
    169: "APP.RESTORE",
    170: "APP.MOVE",
    171: "APP.SIZE",
    172: "APP.MINIMIZE",
    173: "APP.MAXIMIZE",
    174: "BRING.TO.FRONT",
    175: "SEND.TO.BACK",
    185: "MAIN.CHART.TYPE",
    186: "OVERLAY.CHART.TYPE",
    187: "SELECT.END",
    188: "OPEN.MAIL",
    189: "SEND.MAIL",
    190: "STANDARD.FONT",
    191: "CONSOLIDATE",
    192: "SORT.SPECIAL",
    193: "GALLERY.3D.AREA",
    194: "GALLERY.3D.COLUMN",
    195: "GALLERY.3D.LINE",
    196: "GALLERY.3D.PIE",
    197: "VIEW.3D",
    198: "GOAL.SEEK",
    199: "WORKGROUP",
    200: "FILL.GROUP",
    201: "UPDATE.LINK",
    202: "PROMOTE",
    203: "DEMOTE",
    204: "SHOW.DETAIL",
    206: "UNGROUP",
    207: "OBJECT.PROPERTIES",
    208: "SAVE.NEW.OBJECT",
    209: "SHARE",
    210: "SHARE.NAME",
    211: "DUPLICATE",
    212: "APPLY.STYLE",
    213: "ASSIGN.TO.OBJECT",
    214: "OBJECT.PROTECTION",
    215: "HIDE.OBJECT",
    216: "SET.EXTRACT",
    217: "CREATE.PUBLISHER",
    218: "SUBSCRIBE.TO",
    219: "ATTRIBUTES",
    220: "SHOW.TOOLBAR",
    222: "PRINT.PREVIEW",
    223: "EDIT.COLOR",
    224: "SHOW.LEVELS",
    225: "FORMAT.MAIN",
    226: "FORMAT.OVERLAY",
    227: "ON.RECALC",
    228: "EDIT.SERIES",
    229: "DEFINE.STYLE",
    240: "LINE.PRINT",
    243: "ENTER.DATA",
    249: "GALLERY.RADAR",
    250: "MERGE.STYLES",
    251: "EDITION.OPTIONS",
    252: "PASTE.PICTURE",
    253: "PASTE.PICTURE.LINK",
    254: "SPELLING",
    256: "ZOOM",
    259: "INSERT.OBJECT",
    260: "WINDOW.MINIMIZE",
    265: "SOUND.NOTE",
    266: "SOUND.PLAY",
    267: "FORMAT.SHAPE",
    268: "EXTEND.POLYGON",
    269: "FORMAT.AUTO",
    272: "GALLERY.3D.BAR",
    273: "GALLERY.3D.SURFACE",
    274: "FILL.AUTO",
    276: "CUSTOMIZE.TOOLBAR",
    277: "ADD.TOOL",
    278: "EDIT.OBJECT",
    279: "ON.DOUBLECLICK",
    280: "ON.ENTRY",
    281: "WORKBOOK.ADD",
    282: "WORKBOOK.MOVE",
    283: "WORKBOOK.COPY",
    284: "WORKBOOK.OPTIONS",
    285: "SAVE.WORKSPACE",
    288: "CHART.WIZARD",
    289: "DELETE.TOOL",
    290: "MOVE.TOOL",
    291: "WORKBOOK.SELECT",
    292: "WORKBOOK.ACTIVATE",
    293: "ASSIGN.TO.TOOL",
    295: "COPY.TOOL",
    296: "RESET.TOOL",
    297: "CONSTRAIN.NUMERIC",
    298: "PASTE.TOOL",
    302: "WORKBOOK.NEW",
    305: "SCENARIO.CELLS",
    306: "SCENARIO.DELETE",
    307: "SCENARIO.ADD",
    308: "SCENARIO.EDIT",
    309: "SCENARIO.SHOW",
    310: "SCENARIO.SHOW.NEXT",
    311: "SCENARIO.SUMMARY",
    312: "PIVOT.TABLE.WIZARD",
    313: "PIVOT.FIELD.PROPERTIES",
    314: "PIVOT.FIELD",
    315: "PIVOT.ITEM",
    316: "PIVOT.ADD.FIELDS",
    318: "OPTIONS.CALCULATION",
    319: "OPTIONS.EDIT",
    320: "OPTIONS.VIEW",
    321: "ADDIN.MANAGER",
    322: "MENU.EDITOR",
    323: "ATTACH.TOOLBARS",
    324: "VBAActivate",
    325: "OPTIONS.CHART",
    328: "VBA.INSERT.FILE",
    330: "VBA.PROCEDURE.DEFINITION",
    336: "ROUTING.SLIP",
    338: "ROUTE.DOCUMENT",
    339: "MAIL.LOGON",
    342: "INSERT.PICTURE",
    343: "EDIT.TOOL",
    344: "GALLERY.DOUGHNUT",
    350: "CHART.TREND",
    352: "PIVOT.ITEM.PROPERTIES",
    354: "WORKBOOK.INSERT",
    355: "OPTIONS.TRANSITION",
    356: "OPTIONS.GENERAL",
    370: "FILTER.ADVANCED",
    373: "MAIL.ADD.MAILER",
    374: "MAIL.DELETE.MAILER",
    375: "MAIL.REPLY",
    376: "MAIL.REPLY.ALL",
    377: "MAIL.FORWARD",
    378: "MAIL.NEXT.LETTER",
    379: "DATA.LABEL",
    380: "INSERT.TITLE",
    381: "FONT.PROPERTIES",
    382: "MACRO.OPTIONS",
    383: "WORKBOOK.HIDE",
    384: "WORKBOOK.UNHIDE",
    385: "WORKBOOK.DELETE",
    386: "WORKBOOK.NAME",
    388: "GALLERY.CUSTOM",
    390: "ADD.CHART.AUTOFORMAT",
    391: "DELETE.CHART.AUTOFORMAT",
    392: "CHART.ADD.DATA",
    393: "AUTO.OUTLINE",
    394: "TAB.ORDER",
    395: "SHOW.DIALOG",
    396: "SELECT.ALL",
    397: "UNGROUP.SHEETS",
    398: "SUBTOTAL.CREATE",
    399: "SUBTOTAL.REMOVE",
    400: "RENAME.OBJECT",
    412: "WORKBOOK.SCROLL",
    413: "WORKBOOK.NEXT",
    414: "WORKBOOK.PREV",
    415: "WORKBOOK.TAB.SPLIT",
    416: "FULL.SCREEN",
    417: "WORKBOOK.PROTECT",
    420: "SCROLLBAR.PROPERTIES",
    421: "PIVOT.SHOW.PAGES",
    422: "TEXT.TO.COLUMNS",
    423: "FORMAT.CHARTTYPE",
    424: "LINK.FORMAT",
    425: "TRACER.DISPLAY",
    430: "TRACER.NAVIGATE",
    431: "TRACER.CLEAR",
    432: "TRACER.ERROR",
    433: "PIVOT.FIELD.GROUP",
    434: "PIVOT.FIELD.UNGROUP",
    435: "CHECKBOX.PROPERTIES",
    436: "LABEL.PROPERTIES",
    437: "LISTBOX.PROPERTIES",
    438: "EDITBOX.PROPERTIES",
    439: "PIVOT.REFRESH",
    440: "LINK.COMBO",
    441: "OPEN.TEXT",
    442: "HIDE.DIALOG",
    443: "SET.DIALOG.FOCUS",
    444: "ENABLE.OBJECT",
    445: "PUSHBUTTON.PROPERTIES",
    446: "SET.DIALOG.DEFAULT",
    447: "FILTER",
    448: "FILTER.SHOW.ALL",
    449: "CLEAR.OUTLINE",
    450: "FUNCTION.WIZARD",
    451: "ADD.LIST.ITEM",
    452: "SET.LIST.ITEM",
    453: "REMOVE.LIST.ITEM",
    454: "SELECT.LIST.ITEM",
    455: "SET.CONTROL.VALUE",
    456: "SAVE.COPY.AS",
    458: "OPTIONS.LISTS.ADD",
    459: "OPTIONS.LISTS.DELETE",
    460: "SERIES.AXES",
    461: "SERIES.X",
    462: "SERIES.Y",
    463: "ERRORBAR.X",
    464: "ERRORBAR.Y",
    465: "FORMAT.CHART",
    466: "SERIES.ORDER",
    467: "MAIL.LOGOFF",
    468: "CLEAR.ROUTING.SLIP",
    469: "APP.ACTIVATE.MICROSOFT",
    470: "MAIL.EDIT.MAILER",
    471: "ON.SHEET",
    472: "STANDARD.WIDTH",
    473: "SCENARIO.MERGE",
    474: "SUMMARY.INFO",
    475: "FIND.FILE",
    476: "ACTIVE.CELL.FONT",
    477: "ENABLE.TIPWIZARD",
    478: "VBA.MAKE.ADDIN",
    480: "INSERTDATATABLE",
    481: "WORKGROUP.OPTIONS",
    482: "MAIL.SEND.MAILER",
    485: "AUTOCORRECT",
    489: "POST.DOCUMENT",
    491: "PICKLIST",
    493: "VIEW.SHOW",
    494: "VIEW.DEFINE",
    495: "VIEW.DELETE",
    509: "SHEET.BACKGROUND",
    510: "INSERT.MAP.OBJECT",
    511: "OPTIONS.MENONO",
    517: "MSOCHECKS",
    518: "NORMAL",
    519: "LAYOUT",
    520: "RM.PRINT.AREA",
    521: "CLEAR.PRINT.AREA",
    522: "ADD.PRINT.AREA",
    523: "MOVE.BRK",
    545: "HIDECURR.NOTE",
    546: "HIDEALL.NOTES",
    547: "DELETE.NOTE",
    548: "TRAVERSE.NOTES",
    549: "ACTIVATE.NOTES",
    620: "PROTECT.REVISIONS",
    621: "UNPROTECT.REVISIONS",
    647: "OPTIONS.ME",
    653: "WEB.PUBLISH",
    667: "NEWWEBQUERY",
    673: "PIVOT.TABLE.CHART",
    753: "OPTIONS.SAVE",
    755: "OPTIONS.SPELL",
    808: "HIDEALL.INKANNOTS",
  },
  Rg = {
    0: "COUNT",
    1: "IF",
    2: "ISNA",
    3: "ISERROR",
    4: "SUM",
    5: "AVERAGE",
    6: "MIN",
    7: "MAX",
    8: "ROW",
    9: "COLUMN",
    10: "NA",
    11: "NPV",
    12: "STDEV",
    13: "DOLLAR",
    14: "FIXED",
    15: "SIN",
    16: "COS",
    17: "TAN",
    18: "ATAN",
    19: "PI",
    20: "SQRT",
    21: "EXP",
    22: "LN",
    23: "LOG10",
    24: "ABS",
    25: "INT",
    26: "SIGN",
    27: "ROUND",
    28: "LOOKUP",
    29: "INDEX",
    30: "REPT",
    31: "MID",
    32: "LEN",
    33: "VALUE",
    34: "TRUE",
    35: "FALSE",
    36: "AND",
    37: "OR",
    38: "NOT",
    39: "MOD",
    40: "DCOUNT",
    41: "DSUM",
    42: "DAVERAGE",
    43: "DMIN",
    44: "DMAX",
    45: "DSTDEV",
    46: "VAR",
    47: "DVAR",
    48: "TEXT",
    49: "LINEST",
    50: "TREND",
    51: "LOGEST",
    52: "GROWTH",
    53: "GOTO",
    54: "HALT",
    55: "RETURN",
    56: "PV",
    57: "FV",
    58: "NPER",
    59: "PMT",
    60: "RATE",
    61: "MIRR",
    62: "IRR",
    63: "RAND",
    64: "MATCH",
    65: "DATE",
    66: "TIME",
    67: "DAY",
    68: "MONTH",
    69: "YEAR",
    70: "WEEKDAY",
    71: "HOUR",
    72: "MINUTE",
    73: "SECOND",
    74: "NOW",
    75: "AREAS",
    76: "ROWS",
    77: "COLUMNS",
    78: "OFFSET",
    79: "ABSREF",
    80: "RELREF",
    81: "ARGUMENT",
    82: "SEARCH",
    83: "TRANSPOSE",
    84: "ERROR",
    85: "STEP",
    86: "TYPE",
    87: "ECHO",
    88: "SET.NAME",
    89: "CALLER",
    90: "DEREF",
    91: "WINDOWS",
    92: "SERIES",
    93: "DOCUMENTS",
    94: "ACTIVE.CELL",
    95: "SELECTION",
    96: "RESULT",
    97: "ATAN2",
    98: "ASIN",
    99: "ACOS",
    100: "CHOOSE",
    101: "HLOOKUP",
    102: "VLOOKUP",
    103: "LINKS",
    104: "INPUT",
    105: "ISREF",
    106: "GET.FORMULA",
    107: "GET.NAME",
    108: "SET.VALUE",
    109: "LOG",
    110: "EXEC",
    111: "CHAR",
    112: "LOWER",
    113: "UPPER",
    114: "PROPER",
    115: "LEFT",
    116: "RIGHT",
    117: "EXACT",
    118: "TRIM",
    119: "REPLACE",
    120: "SUBSTITUTE",
    121: "CODE",
    122: "NAMES",
    123: "DIRECTORY",
    124: "FIND",
    125: "CELL",
    126: "ISERR",
    127: "ISTEXT",
    128: "ISNUMBER",
    129: "ISBLANK",
    130: "T",
    131: "N",
    132: "FOPEN",
    133: "FCLOSE",
    134: "FSIZE",
    135: "FREADLN",
    136: "FREAD",
    137: "FWRITELN",
    138: "FWRITE",
    139: "FPOS",
    140: "DATEVALUE",
    141: "TIMEVALUE",
    142: "SLN",
    143: "SYD",
    144: "DDB",
    145: "GET.DEF",
    146: "REFTEXT",
    147: "TEXTREF",
    148: "INDIRECT",
    149: "REGISTER",
    150: "CALL",
    151: "ADD.BAR",
    152: "ADD.MENU",
    153: "ADD.COMMAND",
    154: "ENABLE.COMMAND",
    155: "CHECK.COMMAND",
    156: "RENAME.COMMAND",
    157: "SHOW.BAR",
    158: "DELETE.MENU",
    159: "DELETE.COMMAND",
    160: "GET.CHART.ITEM",
    161: "DIALOG.BOX",
    162: "CLEAN",
    163: "MDETERM",
    164: "MINVERSE",
    165: "MMULT",
    166: "FILES",
    167: "IPMT",
    168: "PPMT",
    169: "COUNTA",
    170: "CANCEL.KEY",
    171: "FOR",
    172: "WHILE",
    173: "BREAK",
    174: "NEXT",
    175: "INITIATE",
    176: "REQUEST",
    177: "POKE",
    178: "EXECUTE",
    179: "TERMINATE",
    180: "RESTART",
    181: "HELP",
    182: "GET.BAR",
    183: "PRODUCT",
    184: "FACT",
    185: "GET.CELL",
    186: "GET.WORKSPACE",
    187: "GET.WINDOW",
    188: "GET.DOCUMENT",
    189: "DPRODUCT",
    190: "ISNONTEXT",
    191: "GET.NOTE",
    192: "NOTE",
    193: "STDEVP",
    194: "VARP",
    195: "DSTDEVP",
    196: "DVARP",
    197: "TRUNC",
    198: "ISLOGICAL",
    199: "DCOUNTA",
    200: "DELETE.BAR",
    201: "UNREGISTER",
    204: "USDOLLAR",
    205: "FINDB",
    206: "SEARCHB",
    207: "REPLACEB",
    208: "LEFTB",
    209: "RIGHTB",
    210: "MIDB",
    211: "LENB",
    212: "ROUNDUP",
    213: "ROUNDDOWN",
    214: "ASC",
    215: "DBCS",
    216: "RANK",
    219: "ADDRESS",
    220: "DAYS360",
    221: "TODAY",
    222: "VDB",
    223: "ELSE",
    224: "ELSE.IF",
    225: "END.IF",
    226: "FOR.CELL",
    227: "MEDIAN",
    228: "SUMPRODUCT",
    229: "SINH",
    230: "COSH",
    231: "TANH",
    232: "ASINH",
    233: "ACOSH",
    234: "ATANH",
    235: "DGET",
    236: "CREATE.OBJECT",
    237: "VOLATILE",
    238: "LAST.ERROR",
    239: "CUSTOM.UNDO",
    240: "CUSTOM.REPEAT",
    241: "FORMULA.CONVERT",
    242: "GET.LINK.INFO",
    243: "TEXT.BOX",
    244: "INFO",
    245: "GROUP",
    246: "GET.OBJECT",
    247: "DB",
    248: "PAUSE",
    251: "RESUME",
    252: "FREQUENCY",
    253: "ADD.TOOLBAR",
    254: "DELETE.TOOLBAR",
    255: "User",
    256: "RESET.TOOLBAR",
    257: "EVALUATE",
    258: "GET.TOOLBAR",
    259: "GET.TOOL",
    260: "SPELLING.CHECK",
    261: "ERROR.TYPE",
    262: "APP.TITLE",
    263: "WINDOW.TITLE",
    264: "SAVE.TOOLBAR",
    265: "ENABLE.TOOL",
    266: "PRESS.TOOL",
    267: "REGISTER.ID",
    268: "GET.WORKBOOK",
    269: "AVEDEV",
    270: "BETADIST",
    271: "GAMMALN",
    272: "BETAINV",
    273: "BINOMDIST",
    274: "CHIDIST",
    275: "CHIINV",
    276: "COMBIN",
    277: "CONFIDENCE",
    278: "CRITBINOM",
    279: "EVEN",
    280: "EXPONDIST",
    281: "FDIST",
    282: "FINV",
    283: "FISHER",
    284: "FISHERINV",
    285: "FLOOR",
    286: "GAMMADIST",
    287: "GAMMAINV",
    288: "CEILING",
    289: "HYPGEOMDIST",
    290: "LOGNORMDIST",
    291: "LOGINV",
    292: "NEGBINOMDIST",
    293: "NORMDIST",
    294: "NORMSDIST",
    295: "NORMINV",
    296: "NORMSINV",
    297: "STANDARDIZE",
    298: "ODD",
    299: "PERMUT",
    300: "POISSON",
    301: "TDIST",
    302: "WEIBULL",
    303: "SUMXMY2",
    304: "SUMX2MY2",
    305: "SUMX2PY2",
    306: "CHITEST",
    307: "CORREL",
    308: "COVAR",
    309: "FORECAST",
    310: "FTEST",
    311: "INTERCEPT",
    312: "PEARSON",
    313: "RSQ",
    314: "STEYX",
    315: "SLOPE",
    316: "TTEST",
    317: "PROB",
    318: "DEVSQ",
    319: "GEOMEAN",
    320: "HARMEAN",
    321: "SUMSQ",
    322: "KURT",
    323: "SKEW",
    324: "ZTEST",
    325: "LARGE",
    326: "SMALL",
    327: "QUARTILE",
    328: "PERCENTILE",
    329: "PERCENTRANK",
    330: "MODE",
    331: "TRIMMEAN",
    332: "TINV",
    334: "MOVIE.COMMAND",
    335: "GET.MOVIE",
    336: "CONCATENATE",
    337: "POWER",
    338: "PIVOT.ADD.DATA",
    339: "GET.PIVOT.TABLE",
    340: "GET.PIVOT.FIELD",
    341: "GET.PIVOT.ITEM",
    342: "RADIANS",
    343: "DEGREES",
    344: "SUBTOTAL",
    345: "SUMIF",
    346: "COUNTIF",
    347: "COUNTBLANK",
    348: "SCENARIO.GET",
    349: "OPTIONS.LISTS.GET",
    350: "ISPMT",
    351: "DATEDIF",
    352: "DATESTRING",
    353: "NUMBERSTRING",
    354: "ROMAN",
    355: "OPEN.DIALOG",
    356: "SAVE.DIALOG",
    357: "VIEW.GET",
    358: "GETPIVOTDATA",
    359: "HYPERLINK",
    360: "PHONETIC",
    361: "AVERAGEA",
    362: "MAXA",
    363: "MINA",
    364: "STDEVPA",
    365: "VARPA",
    366: "STDEVA",
    367: "VARA",
    368: "BAHTTEXT",
    369: "THAIDAYOFWEEK",
    370: "THAIDIGIT",
    371: "THAIMONTHOFYEAR",
    372: "THAINUMSOUND",
    373: "THAINUMSTRING",
    374: "THAISTRINGLENGTH",
    375: "ISTHAIDIGIT",
    376: "ROUNDBAHTDOWN",
    377: "ROUNDBAHTUP",
    378: "THAIYEAR",
    379: "RTD",
    380: "CUBEVALUE",
    381: "CUBEMEMBER",
    382: "CUBEMEMBERPROPERTY",
    383: "CUBERANKEDMEMBER",
    384: "HEX2BIN",
    385: "HEX2DEC",
    386: "HEX2OCT",
    387: "DEC2BIN",
    388: "DEC2HEX",
    389: "DEC2OCT",
    390: "OCT2BIN",
    391: "OCT2HEX",
    392: "OCT2DEC",
    393: "BIN2DEC",
    394: "BIN2OCT",
    395: "BIN2HEX",
    396: "IMSUB",
    397: "IMDIV",
    398: "IMPOWER",
    399: "IMABS",
    400: "IMSQRT",
    401: "IMLN",
    402: "IMLOG2",
    403: "IMLOG10",
    404: "IMSIN",
    405: "IMCOS",
    406: "IMEXP",
    407: "IMARGUMENT",
    408: "IMCONJUGATE",
    409: "IMAGINARY",
    410: "IMREAL",
    411: "COMPLEX",
    412: "IMSUM",
    413: "IMPRODUCT",
    414: "SERIESSUM",
    415: "FACTDOUBLE",
    416: "SQRTPI",
    417: "QUOTIENT",
    418: "DELTA",
    419: "GESTEP",
    420: "ISEVEN",
    421: "ISODD",
    422: "MROUND",
    423: "ERF",
    424: "ERFC",
    425: "BESSELJ",
    426: "BESSELK",
    427: "BESSELY",
    428: "BESSELI",
    429: "XIRR",
    430: "XNPV",
    431: "PRICEMAT",
    432: "YIELDMAT",
    433: "INTRATE",
    434: "RECEIVED",
    435: "DISC",
    436: "PRICEDISC",
    437: "YIELDDISC",
    438: "TBILLEQ",
    439: "TBILLPRICE",
    440: "TBILLYIELD",
    441: "PRICE",
    442: "YIELD",
    443: "DOLLARDE",
    444: "DOLLARFR",
    445: "NOMINAL",
    446: "EFFECT",
    447: "CUMPRINC",
    448: "CUMIPMT",
    449: "EDATE",
    450: "EOMONTH",
    451: "YEARFRAC",
    452: "COUPDAYBS",
    453: "COUPDAYS",
    454: "COUPDAYSNC",
    455: "COUPNCD",
    456: "COUPNUM",
    457: "COUPPCD",
    458: "DURATION",
    459: "MDURATION",
    460: "ODDLPRICE",
    461: "ODDLYIELD",
    462: "ODDFPRICE",
    463: "ODDFYIELD",
    464: "RANDBETWEEN",
    465: "WEEKNUM",
    466: "AMORDEGRC",
    467: "AMORLINC",
    468: "CONVERT",
    724: "SHEETJS",
    469: "ACCRINT",
    470: "ACCRINTM",
    471: "WORKDAY",
    472: "NETWORKDAYS",
    473: "GCD",
    474: "MULTINOMIAL",
    475: "LCM",
    476: "FVSCHEDULE",
    477: "CUBEKPIMEMBER",
    478: "CUBESET",
    479: "CUBESETCOUNT",
    480: "IFERROR",
    481: "COUNTIFS",
    482: "SUMIFS",
    483: "AVERAGEIF",
    484: "AVERAGEIFS",
  },
  tA = {
    2: 1,
    3: 1,
    10: 0,
    15: 1,
    16: 1,
    17: 1,
    18: 1,
    19: 0,
    20: 1,
    21: 1,
    22: 1,
    23: 1,
    24: 1,
    25: 1,
    26: 1,
    27: 2,
    30: 2,
    31: 3,
    32: 1,
    33: 1,
    34: 0,
    35: 0,
    38: 1,
    39: 2,
    40: 3,
    41: 3,
    42: 3,
    43: 3,
    44: 3,
    45: 3,
    47: 3,
    48: 2,
    53: 1,
    61: 3,
    63: 0,
    65: 3,
    66: 3,
    67: 1,
    68: 1,
    69: 1,
    70: 1,
    71: 1,
    72: 1,
    73: 1,
    74: 0,
    75: 1,
    76: 1,
    77: 1,
    79: 2,
    80: 2,
    83: 1,
    85: 0,
    86: 1,
    89: 0,
    90: 1,
    94: 0,
    95: 0,
    97: 2,
    98: 1,
    99: 1,
    101: 3,
    102: 3,
    105: 1,
    106: 1,
    108: 2,
    111: 1,
    112: 1,
    113: 1,
    114: 1,
    117: 2,
    118: 1,
    119: 4,
    121: 1,
    126: 1,
    127: 1,
    128: 1,
    129: 1,
    130: 1,
    131: 1,
    133: 1,
    134: 1,
    135: 1,
    136: 2,
    137: 2,
    138: 2,
    140: 1,
    141: 1,
    142: 3,
    143: 4,
    144: 4,
    161: 1,
    162: 1,
    163: 1,
    164: 1,
    165: 2,
    172: 1,
    175: 2,
    176: 2,
    177: 3,
    178: 2,
    179: 1,
    184: 1,
    186: 1,
    189: 3,
    190: 1,
    195: 3,
    196: 3,
    197: 1,
    198: 1,
    199: 3,
    201: 1,
    207: 4,
    210: 3,
    211: 1,
    212: 2,
    213: 2,
    214: 1,
    215: 1,
    225: 0,
    229: 1,
    230: 1,
    231: 1,
    232: 1,
    233: 1,
    234: 1,
    235: 3,
    244: 1,
    247: 4,
    252: 2,
    257: 1,
    261: 1,
    271: 1,
    273: 4,
    274: 2,
    275: 2,
    276: 2,
    277: 3,
    278: 3,
    279: 1,
    280: 3,
    281: 3,
    282: 3,
    283: 1,
    284: 1,
    285: 2,
    286: 4,
    287: 3,
    288: 2,
    289: 4,
    290: 3,
    291: 3,
    292: 3,
    293: 4,
    294: 1,
    295: 3,
    296: 1,
    297: 3,
    298: 1,
    299: 2,
    300: 3,
    301: 3,
    302: 4,
    303: 2,
    304: 2,
    305: 2,
    306: 2,
    307: 2,
    308: 2,
    309: 3,
    310: 2,
    311: 2,
    312: 2,
    313: 2,
    314: 2,
    315: 2,
    316: 4,
    325: 2,
    326: 2,
    327: 2,
    328: 2,
    331: 2,
    332: 2,
    337: 2,
    342: 1,
    343: 1,
    346: 2,
    347: 1,
    350: 4,
    351: 3,
    352: 1,
    353: 2,
    360: 1,
    368: 1,
    369: 1,
    370: 1,
    371: 1,
    372: 1,
    373: 1,
    374: 1,
    375: 1,
    376: 1,
    377: 1,
    378: 1,
    382: 3,
    385: 1,
    392: 1,
    393: 1,
    396: 2,
    397: 2,
    398: 2,
    399: 1,
    400: 1,
    401: 1,
    402: 1,
    403: 1,
    404: 1,
    405: 1,
    406: 1,
    407: 1,
    408: 1,
    409: 1,
    410: 1,
    414: 4,
    415: 1,
    416: 1,
    417: 2,
    420: 1,
    421: 1,
    422: 2,
    424: 1,
    425: 2,
    426: 2,
    427: 2,
    428: 2,
    430: 3,
    438: 3,
    439: 3,
    440: 3,
    443: 2,
    444: 2,
    445: 2,
    446: 2,
    447: 6,
    448: 6,
    449: 2,
    450: 2,
    464: 2,
    468: 3,
    476: 2,
    479: 1,
    480: 2,
    65535: 0,
  };
function rA(e) {
  var t = "of:=" + e.replace(q0, "$1[.$2$3$4$5]").replace(/\]:\[/g, ":");
  return t.replace(/;/g, "|").replace(/,/g, ";");
}
function nA(e) {
  return e.replace(/\./, "!");
}
var to = typeof Map < "u";
function rd(e, t, r) {
  var n = 0,
    a = e.length;
  if (r) {
    if (to ? r.has(t) : Object.prototype.hasOwnProperty.call(r, t)) {
      for (var i = to ? r.get(t) : r[t]; n < i.length; ++n)
        if (e[i[n]].t === t) return e.Count++, i[n];
    }
  } else for (; n < a; ++n) if (e[n].t === t) return e.Count++, n;
  return (
    (e[a] = { t }),
    e.Count++,
    e.Unique++,
    r &&
      (to
        ? (r.has(t) || r.set(t, []), r.get(t).push(a))
        : (Object.prototype.hasOwnProperty.call(r, t) || (r[t] = []),
          r[t].push(a))),
    a
  );
}
function Wc(e, t) {
  var r = { min: e + 1, max: e + 1 },
    n = -1;
  return (
    t.MDW && (sa = t.MDW),
    t.width != null
      ? (r.customWidth = 1)
      : t.wpx != null
        ? (n = hc(t.wpx))
        : t.wch != null && (n = t.wch),
    n > -1
      ? ((r.width = Mf(n)), (r.customWidth = 1))
      : t.width != null && (r.width = t.width),
    t.hidden && (r.hidden = !0),
    t.level != null && (r.outlineLevel = r.level = t.level),
    r
  );
}
function Og(e, t) {
  if (e) {
    var r = [0.7, 0.7, 0.75, 0.75, 0.3, 0.3];
    e.left == null && (e.left = r[0]),
      e.right == null && (e.right = r[1]),
      e.top == null && (e.top = r[2]),
      e.bottom == null && (e.bottom = r[3]),
      e.header == null && (e.header = r[4]),
      e.footer == null && (e.footer = r[5]);
  }
}
function Ka(e, t, r) {
  var n = r.revssf[t.z != null ? t.z : "General"],
    a = 60,
    i = e.length;
  if (n == null && r.ssf) {
    for (; a < 392; ++a)
      if (r.ssf[a] == null) {
        Lv(t.z, a), (r.ssf[a] = t.z), (r.revssf[t.z] = n = a);
        break;
      }
  }
  for (a = 0; a != i; ++a) if (e[a].numFmtId === n) return a;
  return (
    (e[i] = {
      numFmtId: n,
      fontId: 0,
      fillId: 0,
      borderId: 0,
      xfId: 0,
      applyNumberFormat: 1,
    }),
    i
  );
}
function aA(e, t, r) {
  if (e && e["!ref"]) {
    var n = Ft(e["!ref"]);
    if (n.e.c < n.s.c || n.e.r < n.s.r)
      throw new Error("Bad range (" + r + "): " + e["!ref"]);
  }
}
function iA(e) {
  if (e.length === 0) return "";
  for (
    var t = '<mergeCells count="' + e.length + '">', r = 0;
    r != e.length;
    ++r
  )
    t += '<mergeCell ref="' + Jt(e[r]) + '"/>';
  return t + "</mergeCells>";
}
function sA(e, t, r, n, a) {
  var i = !1,
    s = {},
    o = null;
  if (n.bookType !== "xlsx" && t.vbaraw) {
    var l = t.SheetNames[r];
    try {
      t.Workbook && (l = t.Workbook.Sheets[r].CodeName || l);
    } catch {}
    (i = !0), (s.codeName = So(vt(l)));
  }
  if (e && e["!outline"]) {
    var c = { summaryBelow: 1, summaryRight: 1 };
    e["!outline"].above && (c.summaryBelow = 0),
      e["!outline"].left && (c.summaryRight = 0),
      (o = (o || "") + Ce("outlinePr", null, c));
  }
  (!i && !o) || (a[a.length] = Ce("sheetPr", o, s));
}
var oA = ["objects", "scenarios", "selectLockedCells", "selectUnlockedCells"],
  lA = [
    "formatColumns",
    "formatRows",
    "formatCells",
    "insertColumns",
    "insertRows",
    "insertHyperlinks",
    "deleteColumns",
    "deleteRows",
    "sort",
    "autoFilter",
    "pivotTables",
  ];
function cA(e) {
  var t = { sheet: 1 };
  return (
    oA.forEach(function (r) {
      e[r] != null && e[r] && (t[r] = "1");
    }),
    lA.forEach(function (r) {
      e[r] != null && !e[r] && (t[r] = "0");
    }),
    e.password && (t.password = vg(e.password).toString(16).toUpperCase()),
    Ce("sheetProtection", null, t)
  );
}
function uA(e) {
  return Og(e), Ce("pageMargins", null, e);
}
function fA(e, t) {
  for (var r = ["<cols>"], n, a = 0; a != t.length; ++a)
    (n = t[a]) && (r[r.length] = Ce("col", null, Wc(a, n)));
  return (r[r.length] = "</cols>"), r.join("");
}
function dA(e, t, r, n) {
  var a = typeof e.ref == "string" ? e.ref : Jt(e.ref);
  r.Workbook || (r.Workbook = { Sheets: [] }),
    r.Workbook.Names || (r.Workbook.Names = []);
  var i = r.Workbook.Names,
    s = fn(a);
  s.s.r == s.e.r && ((s.e.r = fn(t["!ref"]).e.r), (a = Jt(s)));
  for (var o = 0; o < i.length; ++o) {
    var l = i[o];
    if (l.Name == "_xlnm._FilterDatabase" && l.Sheet == n) {
      l.Ref = "'" + r.SheetNames[n] + "'!" + a;
      break;
    }
  }
  return (
    o == i.length &&
      i.push({
        Name: "_xlnm._FilterDatabase",
        Sheet: n,
        Ref: "'" + r.SheetNames[n] + "'!" + a,
      }),
    Ce("autoFilter", null, { ref: a })
  );
}
function hA(e, t, r, n) {
  var a = { workbookViewId: "0" };
  return (
    (((n || {}).Workbook || {}).Views || [])[0] &&
      (a.rightToLeft = n.Workbook.Views[0].RTL ? "1" : "0"),
    Ce("sheetViews", Ce("sheetView", null, a), {})
  );
}
function pA(e, t, r, n) {
  if (
    (e.c && r["!comments"].push([t, e.c]),
    (e.v === void 0 && typeof e.f != "string") || (e.t === "z" && !e.f))
  )
    return "";
  var a = "",
    i = e.t,
    s = e.v;
  if (e.t !== "z")
    switch (e.t) {
      case "b":
        a = e.v ? "1" : "0";
        break;
      case "n":
        a = "" + e.v;
        break;
      case "e":
        a = bo[e.v];
        break;
      case "d":
        n && n.cellDates
          ? (a = Pr(e.v, -1).toISOString())
          : ((e = Xr(e)), (e.t = "n"), (a = "" + (e.v = Kr(Pr(e.v))))),
          typeof e.z > "u" && (e.z = Ut[14]);
        break;
      default:
        a = e.v;
        break;
    }
  var o = gr("v", vt(a)),
    l = { r: t },
    c = Ka(n.cellXfs, e, n);
  switch ((c !== 0 && (l.s = c), e.t)) {
    case "n":
      break;
    case "d":
      l.t = "d";
      break;
    case "b":
      l.t = "b";
      break;
    case "e":
      l.t = "e";
      break;
    case "z":
      break;
    default:
      if (e.v == null) {
        delete e.t;
        break;
      }
      if (e.v.length > 32767)
        throw new Error("Text length must not exceed 32767 characters");
      if (n && n.bookSST) {
        (o = gr("v", "" + rd(n.Strings, e.v, n.revStrings))), (l.t = "s");
        break;
      }
      l.t = "str";
      break;
  }
  if ((e.t != i && ((e.t = i), (e.v = s)), typeof e.f == "string" && e.f)) {
    var u =
      e.F && e.F.slice(0, t.length) == t ? { t: "array", ref: e.F } : null;
    o = Ce("f", vt(e.f), u) + (e.v != null ? o : "");
  }
  return e.l && r["!links"].push([t, e.l]), e.D && (l.cm = 1), Ce("c", o, l);
}
function mA(e, t, r, n) {
  var a = [],
    i = [],
    s = Ft(e["!ref"]),
    o = "",
    l,
    c = "",
    u = [],
    f = 0,
    d = 0,
    h = e["!rows"],
    m = Array.isArray(e),
    p = { r: c },
    x,
    _ = -1;
  for (d = s.s.c; d <= s.e.c; ++d) u[d] = Ar(d);
  for (f = s.s.r; f <= s.e.r; ++f) {
    for (i = [], c = _r(f), d = s.s.c; d <= s.e.c; ++d) {
      l = u[d] + c;
      var v = m ? (e[f] || [])[d] : e[l];
      v !== void 0 && (o = pA(v, l, e, t)) != null && i.push(o);
    }
    (i.length > 0 || (h && h[f])) &&
      ((p = { r: c }),
      h &&
        h[f] &&
        ((x = h[f]),
        x.hidden && (p.hidden = 1),
        (_ = -1),
        x.hpx ? (_ = pc(x.hpx)) : x.hpt && (_ = x.hpt),
        _ > -1 && ((p.ht = _), (p.customHeight = 1)),
        x.level && (p.outlineLevel = x.level)),
      (a[a.length] = Ce("row", i.join(""), p)));
  }
  if (h)
    for (; f < h.length; ++f)
      h &&
        h[f] &&
        ((p = { r: f + 1 }),
        (x = h[f]),
        x.hidden && (p.hidden = 1),
        (_ = -1),
        x.hpx ? (_ = pc(x.hpx)) : x.hpt && (_ = x.hpt),
        _ > -1 && ((p.ht = _), (p.customHeight = 1)),
        x.level && (p.outlineLevel = x.level),
        (a[a.length] = Ce("row", "", p)));
  return a.join("");
}
function Ig(e, t, r, n) {
  var a = [Zt, Ce("worksheet", null, { xmlns: vs[0], "xmlns:r": sr.r })],
    i = r.SheetNames[e],
    s = 0,
    o = "",
    l = r.Sheets[i];
  l == null && (l = {});
  var c = l["!ref"] || "A1",
    u = Ft(c);
  if (u.e.c > 16383 || u.e.r > 1048575) {
    if (t.WTF)
      throw new Error("Range " + c + " exceeds format limit A1:XFD1048576");
    (u.e.c = Math.min(u.e.c, 16383)),
      (u.e.r = Math.min(u.e.c, 1048575)),
      (c = Jt(u));
  }
  n || (n = {}), (l["!comments"] = []);
  var f = [];
  sA(l, r, e, t, a),
    (a[a.length] = Ce("dimension", null, { ref: c })),
    (a[a.length] = hA(l, t, e, r)),
    t.sheetFormat &&
      (a[a.length] = Ce("sheetFormatPr", null, {
        defaultRowHeight: t.sheetFormat.defaultRowHeight || "16",
        baseColWidth: t.sheetFormat.baseColWidth || "10",
        outlineLevelRow: t.sheetFormat.outlineLevelRow || "7",
      })),
    l["!cols"] != null &&
      l["!cols"].length > 0 &&
      (a[a.length] = fA(l, l["!cols"])),
    (a[(s = a.length)] = "<sheetData/>"),
    (l["!links"] = []),
    l["!ref"] != null && ((o = mA(l, t)), o.length > 0 && (a[a.length] = o)),
    a.length > s + 1 &&
      ((a[a.length] = "</sheetData>"), (a[s] = a[s].replace("/>", ">"))),
    l["!protect"] && (a[a.length] = cA(l["!protect"])),
    l["!autofilter"] != null && (a[a.length] = dA(l["!autofilter"], l, r, e)),
    l["!merges"] != null &&
      l["!merges"].length > 0 &&
      (a[a.length] = iA(l["!merges"]));
  var d = -1,
    h,
    m = -1;
  return (
    l["!links"].length > 0 &&
      ((a[a.length] = "<hyperlinks>"),
      l["!links"].forEach(function (p) {
        p[1].Target &&
          ((h = { ref: p[0] }),
          p[1].Target.charAt(0) != "#" &&
            ((m = mt(n, -1, vt(p[1].Target).replace(/#.*$/, ""), ut.HLINK)),
            (h["r:id"] = "rId" + m)),
          (d = p[1].Target.indexOf("#")) > -1 &&
            (h.location = vt(p[1].Target.slice(d + 1))),
          p[1].Tooltip && (h.tooltip = vt(p[1].Tooltip)),
          (a[a.length] = Ce("hyperlink", null, h)));
      }),
      (a[a.length] = "</hyperlinks>")),
    delete l["!links"],
    l["!margins"] != null && (a[a.length] = uA(l["!margins"])),
    (!t || t.ignoreEC || t.ignoreEC == null) &&
      (a[a.length] = gr(
        "ignoredErrors",
        Ce("ignoredError", null, { numberStoredAsText: 1, sqref: c }),
      )),
    f.length > 0 &&
      ((m = mt(n, -1, "../drawings/drawing" + (e + 1) + ".xml", ut.DRAW)),
      (a[a.length] = Ce("drawing", null, { "r:id": "rId" + m })),
      (l["!drawing"] = f)),
    l["!comments"].length > 0 &&
      ((m = mt(n, -1, "../drawings/vmlDrawing" + (e + 1) + ".vml", ut.VML)),
      (a[a.length] = Ce("legacyDrawing", null, { "r:id": "rId" + m })),
      (l["!legacy"] = m)),
    a.length > 1 &&
      ((a[a.length] = "</worksheet>"), (a[1] = a[1].replace("/>", ">"))),
    a.join("")
  );
}
function vA(e, t) {
  var r = {},
    n = e.l + t;
  (r.r = e.read_shift(4)), (e.l += 4);
  var a = e.read_shift(2);
  e.l += 1;
  var i = e.read_shift(1);
  return (
    (e.l = n),
    i & 7 && (r.level = i & 7),
    i & 16 && (r.hidden = !0),
    i & 32 && (r.hpt = a / 20),
    r
  );
}
function gA(e, t, r) {
  var n = ne(145),
    a = (r["!rows"] || [])[e] || {};
  n.write_shift(4, e), n.write_shift(4, 0);
  var i = 320;
  a.hpx ? (i = pc(a.hpx) * 20) : a.hpt && (i = a.hpt * 20),
    n.write_shift(2, i),
    n.write_shift(1, 0);
  var s = 0;
  a.level && (s |= a.level),
    a.hidden && (s |= 16),
    (a.hpx || a.hpt) && (s |= 32),
    n.write_shift(1, s),
    n.write_shift(1, 0);
  var o = 0,
    l = n.l;
  n.l += 4;
  for (var c = { r: e, c: 0 }, u = 0; u < 16; ++u)
    if (!(t.s.c > (u + 1) << 10 || t.e.c < u << 10)) {
      for (var f = -1, d = -1, h = u << 10; h < (u + 1) << 10; ++h) {
        c.c = h;
        var m = Array.isArray(r) ? (r[c.r] || [])[c.c] : r[xt(c)];
        m && (f < 0 && (f = h), (d = h));
      }
      f < 0 || (++o, n.write_shift(4, f), n.write_shift(4, d));
    }
  var p = n.l;
  return (
    (n.l = l),
    n.write_shift(4, o),
    (n.l = p),
    n.length > n.l ? n.slice(0, n.l) : n
  );
}
function xA(e, t, r, n) {
  var a = gA(n, r, t);
  (a.length > 17 || (t["!rows"] || [])[n]) && ce(e, 0, a);
}
var _A = Ai,
  EA = xs;
function yA() {}
function wA(e, t) {
  var r = {},
    n = e[e.l];
  return (
    ++e.l,
    (r.above = !(n & 64)),
    (r.left = !(n & 128)),
    (e.l += 18),
    (r.name = Ry(e)),
    r
  );
}
function SA(e, t, r) {
  r == null && (r = ne(84 + 4 * e.length));
  var n = 192;
  t && (t.above && (n &= -65), t.left && (n &= -129)), r.write_shift(1, n);
  for (var a = 1; a < 3; ++a) r.write_shift(1, 0);
  return (
    uc({ auto: 1 }, r),
    r.write_shift(-4, -1),
    r.write_shift(-4, -1),
    Xv(e, r),
    r.slice(0, r.l)
  );
}
function TA(e) {
  var t = An(e);
  return [t];
}
function AA(e, t, r) {
  return r == null && (r = ne(8)), wi(t, r);
}
function CA(e) {
  var t = Si(e);
  return [t];
}
function DA(e, t, r) {
  return r == null && (r = ne(4)), Ti(t, r);
}
function LA(e) {
  var t = An(e),
    r = e.read_shift(1);
  return [t, r, "b"];
}
function NA(e, t, r) {
  return r == null && (r = ne(9)), wi(t, r), r.write_shift(1, e.v ? 1 : 0), r;
}
function FA(e) {
  var t = Si(e),
    r = e.read_shift(1);
  return [t, r, "b"];
}
function kA(e, t, r) {
  return r == null && (r = ne(5)), Ti(t, r), r.write_shift(1, e.v ? 1 : 0), r;
}
function RA(e) {
  var t = An(e),
    r = e.read_shift(1);
  return [t, r, "e"];
}
function OA(e, t, r) {
  return r == null && (r = ne(9)), wi(t, r), r.write_shift(1, e.v), r;
}
function IA(e) {
  var t = Si(e),
    r = e.read_shift(1);
  return [t, r, "e"];
}
function PA(e, t, r) {
  return (
    r == null && (r = ne(8)),
    Ti(t, r),
    r.write_shift(1, e.v),
    r.write_shift(2, 0),
    r.write_shift(1, 0),
    r
  );
}
function MA(e) {
  var t = An(e),
    r = e.read_shift(4);
  return [t, r, "s"];
}
function bA(e, t, r) {
  return r == null && (r = ne(12)), wi(t, r), r.write_shift(4, t.v), r;
}
function BA(e) {
  var t = Si(e),
    r = e.read_shift(4);
  return [t, r, "s"];
}
function jA(e, t, r) {
  return r == null && (r = ne(8)), Ti(t, r), r.write_shift(4, t.v), r;
}
function UA(e) {
  var t = An(e),
    r = _s(e);
  return [t, r, "n"];
}
function $A(e, t, r) {
  return r == null && (r = ne(16)), wi(t, r), gi(e.v, r), r;
}
function HA(e) {
  var t = Si(e),
    r = _s(e);
  return [t, r, "n"];
}
function WA(e, t, r) {
  return r == null && (r = ne(12)), Ti(t, r), gi(e.v, r), r;
}
function VA(e) {
  var t = An(e),
    r = Qv(e);
  return [t, r, "n"];
}
function zA(e, t, r) {
  return r == null && (r = ne(12)), wi(t, r), Jv(e.v, r), r;
}
function GA(e) {
  var t = Si(e),
    r = Qv(e);
  return [t, r, "n"];
}
function YA(e, t, r) {
  return r == null && (r = ne(8)), Ti(t, r), Jv(e.v, r), r;
}
function KA(e) {
  var t = An(e),
    r = K0(e);
  return [t, r, "is"];
}
function XA(e) {
  var t = An(e),
    r = Cr(e);
  return [t, r, "str"];
}
function QA(e, t, r) {
  return (
    r == null && (r = ne(12 + 4 * e.v.length)),
    wi(t, r),
    lr(e.v, r),
    r.length > r.l ? r.slice(0, r.l) : r
  );
}
function JA(e) {
  var t = Si(e),
    r = Cr(e);
  return [t, r, "str"];
}
function ZA(e, t, r) {
  return (
    r == null && (r = ne(8 + 4 * e.v.length)),
    Ti(t, r),
    lr(e.v, r),
    r.length > r.l ? r.slice(0, r.l) : r
  );
}
function qA(e, t, r) {
  var n = e.l + t,
    a = An(e);
  a.r = r["!row"];
  var i = e.read_shift(1),
    s = [a, i, "b"];
  if (r.cellFormula) {
    e.l += 2;
    var o = Hc(e, n - e.l, r);
    s[3] = fs(o, null, a, r.supbooks, r);
  } else e.l = n;
  return s;
}
function e4(e, t, r) {
  var n = e.l + t,
    a = An(e);
  a.r = r["!row"];
  var i = e.read_shift(1),
    s = [a, i, "e"];
  if (r.cellFormula) {
    e.l += 2;
    var o = Hc(e, n - e.l, r);
    s[3] = fs(o, null, a, r.supbooks, r);
  } else e.l = n;
  return s;
}
function t4(e, t, r) {
  var n = e.l + t,
    a = An(e);
  a.r = r["!row"];
  var i = _s(e),
    s = [a, i, "n"];
  if (r.cellFormula) {
    e.l += 2;
    var o = Hc(e, n - e.l, r);
    s[3] = fs(o, null, a, r.supbooks, r);
  } else e.l = n;
  return s;
}
function r4(e, t, r) {
  var n = e.l + t,
    a = An(e);
  a.r = r["!row"];
  var i = Cr(e),
    s = [a, i, "str"];
  if (r.cellFormula) {
    e.l += 2;
    var o = Hc(e, n - e.l, r);
    s[3] = fs(o, null, a, r.supbooks, r);
  } else e.l = n;
  return s;
}
var n4 = Ai,
  a4 = xs;
function i4(e, t) {
  return t == null && (t = ne(4)), t.write_shift(4, e), t;
}
function s4(e, t) {
  var r = e.l + t,
    n = Ai(e),
    a = X0(e),
    i = Cr(e),
    s = Cr(e),
    o = Cr(e);
  e.l = r;
  var l = { rfx: n, relId: a, loc: i, display: o };
  return s && (l.Tooltip = s), l;
}
function o4(e, t) {
  var r = ne(50 + 4 * (e[1].Target.length + (e[1].Tooltip || "").length));
  xs({ s: or(e[0]), e: or(e[0]) }, r), Q0("rId" + t, r);
  var n = e[1].Target.indexOf("#"),
    a = n == -1 ? "" : e[1].Target.slice(n + 1);
  return lr(a || "", r), lr(e[1].Tooltip || "", r), lr("", r), r.slice(0, r.l);
}
function l4() {}
function c4(e, t, r) {
  var n = e.l + t,
    a = Zv(e),
    i = e.read_shift(1),
    s = [a];
  if (((s[2] = i), r.cellFormula)) {
    var o = JT(e, n - e.l, r);
    s[1] = o;
  } else e.l = n;
  return s;
}
function u4(e, t, r) {
  var n = e.l + t,
    a = Ai(e),
    i = [a];
  if (r.cellFormula) {
    var s = qT(e, n - e.l, r);
    (i[1] = s), (e.l = n);
  } else e.l = n;
  return i;
}
function f4(e, t, r) {
  r == null && (r = ne(18));
  var n = Wc(e, t);
  r.write_shift(-4, e),
    r.write_shift(-4, e),
    r.write_shift(4, (n.width || 10) * 256),
    r.write_shift(4, 0);
  var a = 0;
  return (
    t.hidden && (a |= 1),
    typeof n.width == "number" && (a |= 2),
    t.level && (a |= t.level << 8),
    r.write_shift(2, a),
    r
  );
}
var Pg = ["left", "right", "top", "bottom", "header", "footer"];
function d4(e) {
  var t = {};
  return (
    Pg.forEach(function (r) {
      t[r] = _s(e);
    }),
    t
  );
}
function h4(e, t) {
  return (
    t == null && (t = ne(6 * 8)),
    Og(e),
    Pg.forEach(function (r) {
      gi(e[r], t);
    }),
    t
  );
}
function p4(e) {
  var t = e.read_shift(2);
  return (e.l += 28), { RTL: t & 32 };
}
function m4(e, t, r) {
  r == null && (r = ne(30));
  var n = 924;
  return (
    (((t || {}).Views || [])[0] || {}).RTL && (n |= 32),
    r.write_shift(2, n),
    r.write_shift(4, 0),
    r.write_shift(4, 0),
    r.write_shift(4, 0),
    r.write_shift(1, 0),
    r.write_shift(1, 0),
    r.write_shift(2, 0),
    r.write_shift(2, 100),
    r.write_shift(2, 0),
    r.write_shift(2, 0),
    r.write_shift(2, 0),
    r.write_shift(4, 0),
    r
  );
}
function v4(e) {
  var t = ne(24);
  return t.write_shift(4, 4), t.write_shift(4, 1), xs(e, t), t;
}
function g4(e, t) {
  return (
    t == null && (t = ne(16 * 4 + 2)),
    t.write_shift(2, e.password ? vg(e.password) : 0),
    t.write_shift(4, 1),
    [
      ["objects", !1],
      ["scenarios", !1],
      ["formatCells", !0],
      ["formatColumns", !0],
      ["formatRows", !0],
      ["insertColumns", !0],
      ["insertRows", !0],
      ["insertHyperlinks", !0],
      ["deleteColumns", !0],
      ["deleteRows", !0],
      ["selectLockedCells", !1],
      ["sort", !0],
      ["autoFilter", !0],
      ["pivotTables", !0],
      ["selectUnlockedCells", !1],
    ].forEach(function (r) {
      r[1]
        ? t.write_shift(4, e[r[0]] != null && !e[r[0]] ? 1 : 0)
        : t.write_shift(4, e[r[0]] != null && e[r[0]] ? 0 : 1);
    }),
    t
  );
}
function x4() {}
function _4() {}
function E4(e, t, r, n, a, i, s) {
  if (t.v === void 0) return !1;
  var o = "";
  switch (t.t) {
    case "b":
      o = t.v ? "1" : "0";
      break;
    case "d":
      (t = Xr(t)), (t.z = t.z || Ut[14]), (t.v = Kr(Pr(t.v))), (t.t = "n");
      break;
    case "n":
    case "e":
      o = "" + t.v;
      break;
    default:
      o = t.v;
      break;
  }
  var l = { r, c: n };
  switch (
    ((l.s = Ka(a.cellXfs, t, a)),
    t.l && i["!links"].push([xt(l), t.l]),
    t.c && i["!comments"].push([xt(l), t.c]),
    t.t)
  ) {
    case "s":
    case "str":
      return (
        a.bookSST
          ? ((o = rd(a.Strings, t.v, a.revStrings)),
            (l.t = "s"),
            (l.v = o),
            s ? ce(e, 18, jA(t, l)) : ce(e, 7, bA(t, l)))
          : ((l.t = "str"), s ? ce(e, 17, ZA(t, l)) : ce(e, 6, QA(t, l))),
        !0
      );
    case "n":
      return (
        t.v == (t.v | 0) && t.v > -1e3 && t.v < 1e3
          ? s
            ? ce(e, 13, YA(t, l))
            : ce(e, 2, zA(t, l))
          : s
            ? ce(e, 16, WA(t, l))
            : ce(e, 5, $A(t, l)),
        !0
      );
    case "b":
      return (l.t = "b"), s ? ce(e, 15, kA(t, l)) : ce(e, 4, NA(t, l)), !0;
    case "e":
      return (l.t = "e"), s ? ce(e, 14, PA(t, l)) : ce(e, 3, OA(t, l)), !0;
  }
  return s ? ce(e, 12, DA(t, l)) : ce(e, 1, AA(t, l)), !0;
}
function y4(e, t, r, n) {
  var a = Ft(t["!ref"] || "A1"),
    i,
    s = "",
    o = [];
  ce(e, 145);
  var l = Array.isArray(t),
    c = a.e.r;
  t["!rows"] && (c = Math.max(a.e.r, t["!rows"].length - 1));
  for (var u = a.s.r; u <= c; ++u) {
    (s = _r(u)), xA(e, t, a, u);
    var f = !1;
    if (u <= a.e.r)
      for (var d = a.s.c; d <= a.e.c; ++d) {
        u === a.s.r && (o[d] = Ar(d)), (i = o[d] + s);
        var h = l ? (t[u] || [])[d] : t[i];
        if (!h) {
          f = !1;
          continue;
        }
        f = E4(e, h, u, d, n, t, f);
      }
  }
  ce(e, 146);
}
function w4(e, t) {
  !t ||
    !t["!merges"] ||
    (ce(e, 177, i4(t["!merges"].length)),
    t["!merges"].forEach(function (r) {
      ce(e, 176, a4(r));
    }),
    ce(e, 178));
}
function S4(e, t) {
  !t ||
    !t["!cols"] ||
    (ce(e, 390),
    t["!cols"].forEach(function (r, n) {
      r && ce(e, 60, f4(n, r));
    }),
    ce(e, 391));
}
function T4(e, t) {
  !t || !t["!ref"] || (ce(e, 648), ce(e, 649, v4(Ft(t["!ref"]))), ce(e, 650));
}
function A4(e, t, r) {
  t["!links"].forEach(function (n) {
    if (n[1].Target) {
      var a = mt(r, -1, n[1].Target.replace(/#.*$/, ""), ut.HLINK);
      ce(e, 494, o4(n, a));
    }
  }),
    delete t["!links"];
}
function C4(e, t, r, n) {
  if (t["!comments"].length > 0) {
    var a = mt(n, -1, "../drawings/vmlDrawing" + (r + 1) + ".vml", ut.VML);
    ce(e, 551, Q0("rId" + a)), (t["!legacy"] = a);
  }
}
function D4(e, t, r, n) {
  if (t["!autofilter"]) {
    var a = t["!autofilter"],
      i = typeof a.ref == "string" ? a.ref : Jt(a.ref);
    r.Workbook || (r.Workbook = { Sheets: [] }),
      r.Workbook.Names || (r.Workbook.Names = []);
    var s = r.Workbook.Names,
      o = fn(i);
    o.s.r == o.e.r && ((o.e.r = fn(t["!ref"]).e.r), (i = Jt(o)));
    for (var l = 0; l < s.length; ++l) {
      var c = s[l];
      if (c.Name == "_xlnm._FilterDatabase" && c.Sheet == n) {
        c.Ref = "'" + r.SheetNames[n] + "'!" + i;
        break;
      }
    }
    l == s.length &&
      s.push({
        Name: "_xlnm._FilterDatabase",
        Sheet: n,
        Ref: "'" + r.SheetNames[n] + "'!" + i,
      }),
      ce(e, 161, xs(Ft(i))),
      ce(e, 162);
  }
}
function L4(e, t, r) {
  ce(e, 133), ce(e, 137, m4(t, r)), ce(e, 138), ce(e, 134);
}
function N4(e, t) {
  t["!protect"] && ce(e, 535, g4(t["!protect"]));
}
function F4(e, t, r, n) {
  var a = Yr(),
    i = r.SheetNames[e],
    s = r.Sheets[i] || {},
    o = i;
  try {
    r && r.Workbook && (o = r.Workbook.Sheets[e].CodeName || o);
  } catch {}
  var l = Ft(s["!ref"] || "A1");
  if (l.e.c > 16383 || l.e.r > 1048575) {
    if (t.WTF)
      throw new Error(
        "Range " + (s["!ref"] || "A1") + " exceeds format limit A1:XFD1048576",
      );
    (l.e.c = Math.min(l.e.c, 16383)), (l.e.r = Math.min(l.e.c, 1048575));
  }
  return (
    (s["!links"] = []),
    (s["!comments"] = []),
    ce(a, 129),
    (r.vbaraw || s["!outline"]) && ce(a, 147, SA(o, s["!outline"])),
    ce(a, 148, EA(l)),
    L4(a, s, r.Workbook),
    S4(a, s),
    y4(a, s, e, t),
    N4(a, s),
    D4(a, s, r, e),
    w4(a, s),
    A4(a, s, n),
    s["!margins"] && ce(a, 476, h4(s["!margins"])),
    (!t || t.ignoreEC || t.ignoreEC == null) && T4(a, s),
    C4(a, s, e, n),
    ce(a, 130),
    a.end()
  );
}
function k4(e, t) {
  e.l += 10;
  var r = Cr(e);
  return { name: r };
}
var R4 = [
  ["allowRefreshQuery", !1, "bool"],
  ["autoCompressPictures", !0, "bool"],
  ["backupFile", !1, "bool"],
  ["checkCompatibility", !1, "bool"],
  ["CodeName", ""],
  ["date1904", !1, "bool"],
  ["defaultThemeVersion", 0, "int"],
  ["filterPrivacy", !1, "bool"],
  ["hidePivotFieldList", !1, "bool"],
  ["promptedSolutions", !1, "bool"],
  ["publishItems", !1, "bool"],
  ["refreshAllConnections", !1, "bool"],
  ["saveExternalLinkValues", !0, "bool"],
  ["showBorderUnselectedTables", !0, "bool"],
  ["showInkAnnotation", !0, "bool"],
  ["showObjects", "all"],
  ["showPivotChartFilter", !1, "bool"],
  ["updateLinks", "userSet"],
];
function O4(e) {
  return !e.Workbook || !e.Workbook.WBProps
    ? "false"
    : uy(e.Workbook.WBProps.date1904)
      ? "true"
      : "false";
}
var I4 = "][*?/\\".split("");
function Mg(e, t) {
  if (e.length > 31) throw new Error("Sheet names cannot exceed 31 chars");
  var r = !0;
  return (
    I4.forEach(function (n) {
      if (e.indexOf(n) != -1)
        throw new Error("Sheet name cannot contain : \\ / ? * [ ]");
    }),
    r
  );
}
function P4(e, t, r) {
  e.forEach(function (n, a) {
    Mg(n);
    for (var i = 0; i < a; ++i)
      if (n == e[i]) throw new Error("Duplicate Sheet Name: " + n);
    if (r) {
      var s = (t && t[a] && t[a].CodeName) || n;
      if (s.charCodeAt(0) == 95 && s.length > 22)
        throw new Error("Bad Code Name: Worksheet" + s);
    }
  });
}
function M4(e) {
  if (!e || !e.SheetNames || !e.Sheets) throw new Error("Invalid Workbook");
  if (!e.SheetNames.length) throw new Error("Workbook is empty");
  var t = (e.Workbook && e.Workbook.Sheets) || [];
  P4(e.SheetNames, t, !!e.vbaraw);
  for (var r = 0; r < e.SheetNames.length; ++r)
    aA(e.Sheets[e.SheetNames[r]], e.SheetNames[r], r);
}
function bg(e) {
  var t = [Zt];
  t[t.length] = Ce("workbook", null, { xmlns: vs[0], "xmlns:r": sr.r });
  var r = e.Workbook && (e.Workbook.Names || []).length > 0,
    n = { codeName: "ThisWorkbook" };
  e.Workbook &&
    e.Workbook.WBProps &&
    (R4.forEach(function (o) {
      e.Workbook.WBProps[o[0]] != null &&
        e.Workbook.WBProps[o[0]] != o[1] &&
        (n[o[0]] = e.Workbook.WBProps[o[0]]);
    }),
    e.Workbook.WBProps.CodeName &&
      ((n.codeName = e.Workbook.WBProps.CodeName), delete n.CodeName)),
    (t[t.length] = Ce("workbookPr", null, n));
  var a = (e.Workbook && e.Workbook.Sheets) || [],
    i = 0;
  if (a && a[0] && a[0].Hidden) {
    for (
      t[t.length] = "<bookViews>", i = 0;
      i != e.SheetNames.length && !(!a[i] || !a[i].Hidden);
      ++i
    );
    i == e.SheetNames.length && (i = 0),
      (t[t.length] =
        '<workbookView firstSheet="' + i + '" activeTab="' + i + '"/>'),
      (t[t.length] = "</bookViews>");
  }
  for (t[t.length] = "<sheets>", i = 0; i != e.SheetNames.length; ++i) {
    var s = { name: vt(e.SheetNames[i].slice(0, 31)) };
    if (((s.sheetId = "" + (i + 1)), (s["r:id"] = "rId" + (i + 1)), a[i]))
      switch (a[i].Hidden) {
        case 1:
          s.state = "hidden";
          break;
        case 2:
          s.state = "veryHidden";
          break;
      }
    t[t.length] = Ce("sheet", null, s);
  }
  return (
    (t[t.length] = "</sheets>"),
    r &&
      ((t[t.length] = "<definedNames>"),
      e.Workbook &&
        e.Workbook.Names &&
        e.Workbook.Names.forEach(function (o) {
          var l = { name: o.Name };
          o.Comment && (l.comment = o.Comment),
            o.Sheet != null && (l.localSheetId = "" + o.Sheet),
            o.Hidden && (l.hidden = "1"),
            o.Ref && (t[t.length] = Ce("definedName", vt(o.Ref), l));
        }),
      (t[t.length] = "</definedNames>")),
    t.length > 2 &&
      ((t[t.length] = "</workbook>"), (t[1] = t[1].replace("/>", ">"))),
    t.join("")
  );
}
function b4(e, t) {
  var r = {};
  return (
    (r.Hidden = e.read_shift(4)),
    (r.iTabID = e.read_shift(4)),
    (r.strRelID = Pf(e)),
    (r.name = Cr(e)),
    r
  );
}
function B4(e, t) {
  return (
    t || (t = ne(127)),
    t.write_shift(4, e.Hidden),
    t.write_shift(4, e.iTabID),
    Q0(e.strRelID, t),
    lr(e.name.slice(0, 31), t),
    t.length > t.l ? t.slice(0, t.l) : t
  );
}
function j4(e, t) {
  var r = {},
    n = e.read_shift(4);
  r.defaultThemeVersion = e.read_shift(4);
  var a = t > 8 ? Cr(e) : "";
  return (
    a.length > 0 && (r.CodeName = a),
    (r.autoCompressPictures = !!(n & 65536)),
    (r.backupFile = !!(n & 64)),
    (r.checkCompatibility = !!(n & 4096)),
    (r.date1904 = !!(n & 1)),
    (r.filterPrivacy = !!(n & 8)),
    (r.hidePivotFieldList = !!(n & 1024)),
    (r.promptedSolutions = !!(n & 16)),
    (r.publishItems = !!(n & 2048)),
    (r.refreshAllConnections = !!(n & 262144)),
    (r.saveExternalLinkValues = !!(n & 128)),
    (r.showBorderUnselectedTables = !!(n & 4)),
    (r.showInkAnnotation = !!(n & 32)),
    (r.showObjects = ["all", "placeholders", "none"][(n >> 13) & 3]),
    (r.showPivotChartFilter = !!(n & 32768)),
    (r.updateLinks = ["userSet", "never", "always"][(n >> 8) & 3]),
    r
  );
}
function U4(e, t) {
  t || (t = ne(72));
  var r = 0;
  return (
    e && e.filterPrivacy && (r |= 8),
    t.write_shift(4, r),
    t.write_shift(4, 0),
    Xv((e && e.CodeName) || "ThisWorkbook", t),
    t.slice(0, t.l)
  );
}
function $4(e, t, r) {
  var n = e.l + t;
  (e.l += 4), (e.l += 1);
  var a = e.read_shift(4),
    i = Oy(e),
    s = ZT(e, 0, r),
    o = X0(e);
  e.l = n;
  var l = { Name: i, Ptg: s };
  return a < 268435455 && (l.Sheet = a), o && (l.Comment = o), l;
}
function H4(e, t) {
  ce(e, 143);
  for (var r = 0; r != t.SheetNames.length; ++r) {
    var n =
        (t.Workbook &&
          t.Workbook.Sheets &&
          t.Workbook.Sheets[r] &&
          t.Workbook.Sheets[r].Hidden) ||
        0,
      a = {
        Hidden: n,
        iTabID: r + 1,
        strRelID: "rId" + (r + 1),
        name: t.SheetNames[r],
      };
    ce(e, 156, B4(a));
  }
  ce(e, 144);
}
function W4(e, t) {
  t || (t = ne(127));
  for (var r = 0; r != 4; ++r) t.write_shift(4, 0);
  return (
    lr("SheetJS", t),
    lr(nc.version, t),
    lr(nc.version, t),
    lr("7262", t),
    t.length > t.l ? t.slice(0, t.l) : t
  );
}
function V4(e, t) {
  t || (t = ne(29)),
    t.write_shift(-4, 0),
    t.write_shift(-4, 460),
    t.write_shift(4, 28800),
    t.write_shift(4, 17600),
    t.write_shift(4, 500),
    t.write_shift(4, e),
    t.write_shift(4, e);
  var r = 120;
  return t.write_shift(1, r), t.length > t.l ? t.slice(0, t.l) : t;
}
function z4(e, t) {
  if (!(!t.Workbook || !t.Workbook.Sheets)) {
    for (var r = t.Workbook.Sheets, n = 0, a = -1, i = -1; n < r.length; ++n)
      !r[n] || (!r[n].Hidden && a == -1)
        ? (a = n)
        : r[n].Hidden == 1 && i == -1 && (i = n);
    i > a || (ce(e, 135), ce(e, 158, V4(a)), ce(e, 136));
  }
}
function G4(e, t) {
  var r = Yr();
  return (
    ce(r, 131),
    ce(r, 128, W4()),
    ce(r, 153, U4((e.Workbook && e.Workbook.WBProps) || null)),
    z4(r, e),
    H4(r, e),
    ce(r, 132),
    r.end()
  );
}
function Y4(e, t, r) {
  return (t.slice(-4) === ".bin" ? G4 : bg)(e);
}
function K4(e, t, r, n, a) {
  return (t.slice(-4) === ".bin" ? F4 : Ig)(e, r, n, a);
}
function X4(e, t, r) {
  return (t.slice(-4) === ".bin" ? hS : _g)(e, r);
}
function Q4(e, t, r) {
  return (t.slice(-4) === ".bin" ? Uw : mg)(e, r);
}
function J4(e, t, r) {
  return (t.slice(-4) === ".bin" ? NS : Tg)(e);
}
function Z4(e) {
  return (e.slice(-4) === ".bin" ? yS : wg)();
}
function q4(e, t) {
  var r = [];
  return (
    e.Props && r.push(Xy(e.Props, t)),
    e.Custprops && r.push(Qy(e.Props, e.Custprops)),
    r.join("")
  );
}
function eC() {
  return "";
}
function tC(e, t) {
  var r = ['<Style ss:ID="Default" ss:Name="Normal"><NumberFormat/></Style>'];
  return (
    t.cellXfs.forEach(function (n, a) {
      var i = [];
      i.push(Ce("NumberFormat", null, { "ss:Format": vt(Ut[n.numFmtId]) }));
      var s = { "ss:ID": "s" + (21 + a) };
      r.push(Ce("Style", i.join(""), s));
    }),
    Ce("Styles", r.join(""))
  );
}
function Bg(e) {
  return Ce("NamedRange", null, {
    "ss:Name": e.Name,
    "ss:RefersTo": "=" + ed(e.Ref, { r: 0, c: 0 }),
  });
}
function rC(e) {
  if (!((e || {}).Workbook || {}).Names) return "";
  for (var t = e.Workbook.Names, r = [], n = 0; n < t.length; ++n) {
    var a = t[n];
    a.Sheet == null && (a.Name.match(/^_xlfn\./) || r.push(Bg(a)));
  }
  return Ce("Names", r.join(""));
}
function nC(e, t, r, n) {
  if (!e || !((n || {}).Workbook || {}).Names) return "";
  for (var a = n.Workbook.Names, i = [], s = 0; s < a.length; ++s) {
    var o = a[s];
    o.Sheet == r && (o.Name.match(/^_xlfn\./) || i.push(Bg(o)));
  }
  return i.join("");
}
function aC(e, t, r, n) {
  if (!e) return "";
  var a = [];
  if (
    (e["!margins"] &&
      (a.push("<PageSetup>"),
      e["!margins"].header &&
        a.push(Ce("Header", null, { "x:Margin": e["!margins"].header })),
      e["!margins"].footer &&
        a.push(Ce("Footer", null, { "x:Margin": e["!margins"].footer })),
      a.push(
        Ce("PageMargins", null, {
          "x:Bottom": e["!margins"].bottom || "0.75",
          "x:Left": e["!margins"].left || "0.7",
          "x:Right": e["!margins"].right || "0.7",
          "x:Top": e["!margins"].top || "0.75",
        }),
      ),
      a.push("</PageSetup>")),
    n && n.Workbook && n.Workbook.Sheets && n.Workbook.Sheets[r])
  )
    if (n.Workbook.Sheets[r].Hidden)
      a.push(
        Ce(
          "Visible",
          n.Workbook.Sheets[r].Hidden == 1 ? "SheetHidden" : "SheetVeryHidden",
          {},
        ),
      );
    else {
      for (
        var i = 0;
        i < r && !(n.Workbook.Sheets[i] && !n.Workbook.Sheets[i].Hidden);
        ++i
      );
      i == r && a.push("<Selected/>");
    }
  return (
    ((((n || {}).Workbook || {}).Views || [])[0] || {}).RTL &&
      a.push("<DisplayRightToLeft/>"),
    e["!protect"] &&
      (a.push(gr("ProtectContents", "True")),
      e["!protect"].objects && a.push(gr("ProtectObjects", "True")),
      e["!protect"].scenarios && a.push(gr("ProtectScenarios", "True")),
      e["!protect"].selectLockedCells != null &&
      !e["!protect"].selectLockedCells
        ? a.push(gr("EnableSelection", "NoSelection"))
        : e["!protect"].selectUnlockedCells != null &&
          !e["!protect"].selectUnlockedCells &&
          a.push(gr("EnableSelection", "UnlockedCells")),
      [
        ["formatCells", "AllowFormatCells"],
        ["formatColumns", "AllowSizeCols"],
        ["formatRows", "AllowSizeRows"],
        ["insertColumns", "AllowInsertCols"],
        ["insertRows", "AllowInsertRows"],
        ["insertHyperlinks", "AllowInsertHyperlinks"],
        ["deleteColumns", "AllowDeleteCols"],
        ["deleteRows", "AllowDeleteRows"],
        ["sort", "AllowSort"],
        ["autoFilter", "AllowFilter"],
        ["pivotTables", "AllowUsePivotTables"],
      ].forEach(function (s) {
        e["!protect"][s[0]] && a.push("<" + s[1] + "/>");
      })),
    a.length == 0 ? "" : Ce("WorksheetOptions", a.join(""), { xmlns: sn.x })
  );
}
function iC(e) {
  return e
    .map(function (t) {
      var r = cy(t.t || ""),
        n = Ce("ss:Data", r, { xmlns: "http://www.w3.org/TR/REC-html40" });
      return Ce("Comment", n, { "ss:Author": t.a });
    })
    .join("");
}
function sC(e, t, r, n, a, i, s) {
  if (!e || (e.v == null && e.f == null)) return "";
  var o = {};
  if (
    (e.f && (o["ss:Formula"] = "=" + vt(ed(e.f, s))),
    e.F && e.F.slice(0, t.length) == t)
  ) {
    var l = or(e.F.slice(t.length + 1));
    o["ss:ArrayRange"] =
      "RC:R" +
      (l.r == s.r ? "" : "[" + (l.r - s.r) + "]") +
      "C" +
      (l.c == s.c ? "" : "[" + (l.c - s.c) + "]");
  }
  if (
    (e.l &&
      e.l.Target &&
      ((o["ss:HRef"] = vt(e.l.Target)),
      e.l.Tooltip && (o["x:HRefScreenTip"] = vt(e.l.Tooltip))),
    r["!merges"])
  )
    for (var c = r["!merges"], u = 0; u != c.length; ++u)
      c[u].s.c != s.c ||
        c[u].s.r != s.r ||
        (c[u].e.c > c[u].s.c && (o["ss:MergeAcross"] = c[u].e.c - c[u].s.c),
        c[u].e.r > c[u].s.r && (o["ss:MergeDown"] = c[u].e.r - c[u].s.r));
  var f = "",
    d = "";
  switch (e.t) {
    case "z":
      if (!n.sheetStubs) return "";
      break;
    case "n":
      (f = "Number"), (d = String(e.v));
      break;
    case "b":
      (f = "Boolean"), (d = e.v ? "1" : "0");
      break;
    case "e":
      (f = "Error"), (d = bo[e.v]);
      break;
    case "d":
      (f = "DateTime"),
        (d = new Date(e.v).toISOString()),
        e.z == null && (e.z = e.z || Ut[14]);
      break;
    case "s":
      (f = "String"), (d = ly(e.v || ""));
      break;
  }
  var h = Ka(n.cellXfs, e, n);
  (o["ss:StyleID"] = "s" + (21 + h)), (o["ss:Index"] = s.c + 1);
  var m = e.v != null ? d : "",
    p = e.t == "z" ? "" : '<Data ss:Type="' + f + '">' + m + "</Data>";
  return (e.c || []).length > 0 && (p += iC(e.c)), Ce("Cell", p, o);
}
function oC(e, t) {
  var r = '<Row ss:Index="' + (e + 1) + '"';
  return (
    t &&
      (t.hpt && !t.hpx && (t.hpx = xg(t.hpt)),
      t.hpx && (r += ' ss:AutoFitHeight="0" ss:Height="' + t.hpx + '"'),
      t.hidden && (r += ' ss:Hidden="1"')),
    r + ">"
  );
}
function lC(e, t, r, n) {
  if (!e["!ref"]) return "";
  var a = Ft(e["!ref"]),
    i = e["!merges"] || [],
    s = 0,
    o = [];
  e["!cols"] &&
    e["!cols"].forEach(function (x, _) {
      Z0(x);
      var v = !!x.width,
        g = Wc(_, x),
        S = { "ss:Index": _ + 1 };
      v && (S["ss:Width"] = dc(g.width)),
        x.hidden && (S["ss:Hidden"] = "1"),
        o.push(Ce("Column", null, S));
    });
  for (var l = Array.isArray(e), c = a.s.r; c <= a.e.r; ++c) {
    for (var u = [oC(c, (e["!rows"] || [])[c])], f = a.s.c; f <= a.e.c; ++f) {
      var d = !1;
      for (s = 0; s != i.length; ++s)
        if (
          !(i[s].s.c > f) &&
          !(i[s].s.r > c) &&
          !(i[s].e.c < f) &&
          !(i[s].e.r < c)
        ) {
          (i[s].s.c != f || i[s].s.r != c) && (d = !0);
          break;
        }
      if (!d) {
        var h = { r: c, c: f },
          m = xt(h),
          p = l ? (e[c] || [])[f] : e[m];
        u.push(sC(p, m, e, t, r, n, h));
      }
    }
    u.push("</Row>"), u.length > 2 && o.push(u.join(""));
  }
  return o.join("");
}
function cC(e, t, r) {
  var n = [],
    a = r.SheetNames[e],
    i = r.Sheets[a],
    s = i ? nC(i, t, e, r) : "";
  return (
    s.length > 0 && n.push("<Names>" + s + "</Names>"),
    (s = i ? lC(i, t, e, r) : ""),
    s.length > 0 && n.push("<Table>" + s + "</Table>"),
    n.push(aC(i, t, e, r)),
    n.join("")
  );
}
function uC(e, t) {
  t || (t = {}),
    e.SSF || (e.SSF = Xr(Ut)),
    e.SSF &&
      (Bc(),
      bc(e.SSF),
      (t.revssf = jc(e.SSF)),
      (t.revssf[e.SSF[65535]] = 0),
      (t.ssf = e.SSF),
      (t.cellXfs = []),
      Ka(t.cellXfs, {}, { revssf: { General: 0 } }));
  var r = [];
  r.push(q4(e, t)), r.push(eC()), r.push(""), r.push("");
  for (var n = 0; n < e.SheetNames.length; ++n)
    r.push(Ce("Worksheet", cC(n, t, e), { "ss:Name": vt(e.SheetNames[n]) }));
  return (
    (r[2] = tC(e, t)),
    (r[3] = rC(e)),
    Zt +
      Ce("Workbook", r.join(""), {
        xmlns: sn.ss,
        "xmlns:o": sn.o,
        "xmlns:x": sn.x,
        "xmlns:ss": sn.ss,
        "xmlns:dt": sn.dt,
        "xmlns:html": sn.html,
      })
  );
}
var Ou = {
  SI: "e0859ff2f94f6810ab9108002b27b3d9",
  DSI: "02d5cdd59c2e1b10939708002b2cf9ae",
  UDI: "05d5cdd59c2e1b10939708002b2cf9ae",
};
function fC(e, t) {
  var r = [],
    n = [],
    a = [],
    i = 0,
    s,
    o = qh(dp, "n"),
    l = qh(hp, "n");
  if (e.Props)
    for (s = yr(e.Props), i = 0; i < s.length; ++i)
      (Object.prototype.hasOwnProperty.call(o, s[i])
        ? r
        : Object.prototype.hasOwnProperty.call(l, s[i])
          ? n
          : a
      ).push([s[i], e.Props[s[i]]]);
  if (e.Custprops)
    for (s = yr(e.Custprops), i = 0; i < s.length; ++i)
      Object.prototype.hasOwnProperty.call(e.Props || {}, s[i]) ||
        (Object.prototype.hasOwnProperty.call(o, s[i])
          ? r
          : Object.prototype.hasOwnProperty.call(l, s[i])
            ? n
            : a
        ).push([s[i], e.Custprops[s[i]]]);
  var c = [];
  for (i = 0; i < a.length; ++i)
    lg.indexOf(a[i][0]) > -1 ||
      ig.indexOf(a[i][0]) > -1 ||
      (a[i][1] != null && c.push(a[i]));
  n.length && yt.utils.cfb_add(t, "/SummaryInformation", xp(n, Ou.SI, l, hp)),
    (r.length || c.length) &&
      yt.utils.cfb_add(
        t,
        "/DocumentSummaryInformation",
        xp(r, Ou.DSI, o, dp, c.length ? c : null, Ou.UDI),
      );
}
function dC(e, t) {
  var r = t || {},
    n = yt.utils.cfb_new({ root: "R" }),
    a = "/Workbook";
  switch (r.bookType || "xls") {
    case "xls":
      r.bookType = "biff8";
    case "xla":
      r.bookType || (r.bookType = "xla");
    case "biff8":
      (a = "/Workbook"), (r.biff = 8);
      break;
    case "biff5":
      (a = "/Book"), (r.biff = 5);
      break;
    default:
      throw new Error("invalid type " + r.bookType + " for XLS CFB");
  }
  return (
    yt.utils.cfb_add(n, a, jg(e, r)),
    r.biff == 8 && (e.Props || e.Custprops) && fC(e, n),
    r.biff == 8 &&
      e.vbaraw &&
      FS(
        n,
        yt.read(e.vbaraw, {
          type: typeof e.vbaraw == "string" ? "binary" : "buffer",
        }),
      ),
    n
  );
}
var hC = {
  0: { f: vA },
  1: { f: TA },
  2: { f: VA },
  3: { f: RA },
  4: { f: LA },
  5: { f: UA },
  6: { f: XA },
  7: { f: MA },
  8: { f: r4 },
  9: { f: t4 },
  10: { f: qA },
  11: { f: e4 },
  12: { f: CA },
  13: { f: GA },
  14: { f: IA },
  15: { f: FA },
  16: { f: HA },
  17: { f: JA },
  18: { f: BA },
  19: { f: K0 },
  20: {},
  21: {},
  22: {},
  23: {},
  24: {},
  25: {},
  26: {},
  27: {},
  28: {},
  29: {},
  30: {},
  31: {},
  32: {},
  33: {},
  34: {},
  35: { T: 1 },
  36: { T: -1 },
  37: { T: 1 },
  38: { T: -1 },
  39: { f: $4 },
  40: {},
  42: {},
  43: { f: Xw },
  44: { f: Yw },
  45: { f: Zw },
  46: { f: eS },
  47: { f: qw },
  48: {},
  49: { f: Cy },
  50: {},
  51: { f: vS },
  52: { T: 1 },
  53: { T: -1 },
  54: { T: 1 },
  55: { T: -1 },
  56: { T: 1 },
  57: { T: -1 },
  58: {},
  59: {},
  60: { f: Dw },
  62: { f: KA },
  63: { f: wS },
  64: { f: x4 },
  65: {},
  66: {},
  67: {},
  68: {},
  69: {},
  70: {},
  128: {},
  129: { T: 1 },
  130: { T: -1 },
  131: { T: 1, f: Jn, p: 0 },
  132: { T: -1 },
  133: { T: 1 },
  134: { T: -1 },
  135: { T: 1 },
  136: { T: -1 },
  137: { T: 1, f: p4 },
  138: { T: -1 },
  139: { T: 1 },
  140: { T: -1 },
  141: { T: 1 },
  142: { T: -1 },
  143: { T: 1 },
  144: { T: -1 },
  145: { T: 1 },
  146: { T: -1 },
  147: { f: wA },
  148: { f: _A, p: 16 },
  151: { f: l4 },
  152: {},
  153: { f: j4 },
  154: {},
  155: {},
  156: { f: b4 },
  157: {},
  158: {},
  159: { T: 1, f: bw },
  160: { T: -1 },
  161: { T: 1, f: Ai },
  162: { T: -1 },
  163: { T: 1 },
  164: { T: -1 },
  165: { T: 1 },
  166: { T: -1 },
  167: {},
  168: {},
  169: {},
  170: {},
  171: {},
  172: { T: 1 },
  173: { T: -1 },
  174: {},
  175: {},
  176: { f: n4 },
  177: { T: 1 },
  178: { T: -1 },
  179: { T: 1 },
  180: { T: -1 },
  181: { T: 1 },
  182: { T: -1 },
  183: { T: 1 },
  184: { T: -1 },
  185: { T: 1 },
  186: { T: -1 },
  187: { T: 1 },
  188: { T: -1 },
  189: { T: 1 },
  190: { T: -1 },
  191: { T: 1 },
  192: { T: -1 },
  193: { T: 1 },
  194: { T: -1 },
  195: { T: 1 },
  196: { T: -1 },
  197: { T: 1 },
  198: { T: -1 },
  199: { T: 1 },
  200: { T: -1 },
  201: { T: 1 },
  202: { T: -1 },
  203: { T: 1 },
  204: { T: -1 },
  205: { T: 1 },
  206: { T: -1 },
  207: { T: 1 },
  208: { T: -1 },
  209: { T: 1 },
  210: { T: -1 },
  211: { T: 1 },
  212: { T: -1 },
  213: { T: 1 },
  214: { T: -1 },
  215: { T: 1 },
  216: { T: -1 },
  217: { T: 1 },
  218: { T: -1 },
  219: { T: 1 },
  220: { T: -1 },
  221: { T: 1 },
  222: { T: -1 },
  223: { T: 1 },
  224: { T: -1 },
  225: { T: 1 },
  226: { T: -1 },
  227: { T: 1 },
  228: { T: -1 },
  229: { T: 1 },
  230: { T: -1 },
  231: { T: 1 },
  232: { T: -1 },
  233: { T: 1 },
  234: { T: -1 },
  235: { T: 1 },
  236: { T: -1 },
  237: { T: 1 },
  238: { T: -1 },
  239: { T: 1 },
  240: { T: -1 },
  241: { T: 1 },
  242: { T: -1 },
  243: { T: 1 },
  244: { T: -1 },
  245: { T: 1 },
  246: { T: -1 },
  247: { T: 1 },
  248: { T: -1 },
  249: { T: 1 },
  250: { T: -1 },
  251: { T: 1 },
  252: { T: -1 },
  253: { T: 1 },
  254: { T: -1 },
  255: { T: 1 },
  256: { T: -1 },
  257: { T: 1 },
  258: { T: -1 },
  259: { T: 1 },
  260: { T: -1 },
  261: { T: 1 },
  262: { T: -1 },
  263: { T: 1 },
  264: { T: -1 },
  265: { T: 1 },
  266: { T: -1 },
  267: { T: 1 },
  268: { T: -1 },
  269: { T: 1 },
  270: { T: -1 },
  271: { T: 1 },
  272: { T: -1 },
  273: { T: 1 },
  274: { T: -1 },
  275: { T: 1 },
  276: { T: -1 },
  277: {},
  278: { T: 1 },
  279: { T: -1 },
  280: { T: 1 },
  281: { T: -1 },
  282: { T: 1 },
  283: { T: 1 },
  284: { T: -1 },
  285: { T: 1 },
  286: { T: -1 },
  287: { T: 1 },
  288: { T: -1 },
  289: { T: 1 },
  290: { T: -1 },
  291: { T: 1 },
  292: { T: -1 },
  293: { T: 1 },
  294: { T: -1 },
  295: { T: 1 },
  296: { T: -1 },
  297: { T: 1 },
  298: { T: -1 },
  299: { T: 1 },
  300: { T: -1 },
  301: { T: 1 },
  302: { T: -1 },
  303: { T: 1 },
  304: { T: -1 },
  305: { T: 1 },
  306: { T: -1 },
  307: { T: 1 },
  308: { T: -1 },
  309: { T: 1 },
  310: { T: -1 },
  311: { T: 1 },
  312: { T: -1 },
  313: { T: -1 },
  314: { T: 1 },
  315: { T: -1 },
  316: { T: 1 },
  317: { T: -1 },
  318: { T: 1 },
  319: { T: -1 },
  320: { T: 1 },
  321: { T: -1 },
  322: { T: 1 },
  323: { T: -1 },
  324: { T: 1 },
  325: { T: -1 },
  326: { T: 1 },
  327: { T: -1 },
  328: { T: 1 },
  329: { T: -1 },
  330: { T: 1 },
  331: { T: -1 },
  332: { T: 1 },
  333: { T: -1 },
  334: { T: 1 },
  335: { f: pS },
  336: { T: -1 },
  337: { f: _S, T: 1 },
  338: { T: -1 },
  339: { T: 1 },
  340: { T: -1 },
  341: { T: 1 },
  342: { T: -1 },
  343: { T: 1 },
  344: { T: -1 },
  345: { T: 1 },
  346: { T: -1 },
  347: { T: 1 },
  348: { T: -1 },
  349: { T: 1 },
  350: { T: -1 },
  351: {},
  352: {},
  353: { T: 1 },
  354: { T: -1 },
  355: { f: Pf },
  357: {},
  358: {},
  359: {},
  360: { T: 1 },
  361: {},
  362: { f: yw },
  363: {},
  364: {},
  366: {},
  367: {},
  368: {},
  369: {},
  370: {},
  371: {},
  372: { T: 1 },
  373: { T: -1 },
  374: { T: 1 },
  375: { T: -1 },
  376: { T: 1 },
  377: { T: -1 },
  378: { T: 1 },
  379: { T: -1 },
  380: { T: 1 },
  381: { T: -1 },
  382: { T: 1 },
  383: { T: -1 },
  384: { T: 1 },
  385: { T: -1 },
  386: { T: 1 },
  387: { T: -1 },
  388: { T: 1 },
  389: { T: -1 },
  390: { T: 1 },
  391: { T: -1 },
  392: { T: 1 },
  393: { T: -1 },
  394: { T: 1 },
  395: { T: -1 },
  396: {},
  397: {},
  398: {},
  399: {},
  400: {},
  401: { T: 1 },
  403: {},
  404: {},
  405: {},
  406: {},
  407: {},
  408: {},
  409: {},
  410: {},
  411: {},
  412: {},
  413: {},
  414: {},
  415: {},
  416: {},
  417: {},
  418: {},
  419: {},
  420: {},
  421: {},
  422: { T: 1 },
  423: { T: 1 },
  424: { T: -1 },
  425: { T: -1 },
  426: { f: c4 },
  427: { f: u4 },
  428: {},
  429: { T: 1 },
  430: { T: -1 },
  431: { T: 1 },
  432: { T: -1 },
  433: { T: 1 },
  434: { T: -1 },
  435: { T: 1 },
  436: { T: -1 },
  437: { T: 1 },
  438: { T: -1 },
  439: { T: 1 },
  440: { T: -1 },
  441: { T: 1 },
  442: { T: -1 },
  443: { T: 1 },
  444: { T: -1 },
  445: { T: 1 },
  446: { T: -1 },
  447: { T: 1 },
  448: { T: -1 },
  449: { T: 1 },
  450: { T: -1 },
  451: { T: 1 },
  452: { T: -1 },
  453: { T: 1 },
  454: { T: -1 },
  455: { T: 1 },
  456: { T: -1 },
  457: { T: 1 },
  458: { T: -1 },
  459: { T: 1 },
  460: { T: -1 },
  461: { T: 1 },
  462: { T: -1 },
  463: { T: 1 },
  464: { T: -1 },
  465: { T: 1 },
  466: { T: -1 },
  467: { T: 1 },
  468: { T: -1 },
  469: { T: 1 },
  470: { T: -1 },
  471: {},
  472: {},
  473: { T: 1 },
  474: { T: -1 },
  475: {},
  476: { f: d4 },
  477: {},
  478: {},
  479: { T: 1 },
  480: { T: -1 },
  481: { T: 1 },
  482: { T: -1 },
  483: { T: 1 },
  484: { T: -1 },
  485: { f: yA },
  486: { T: 1 },
  487: { T: -1 },
  488: { T: 1 },
  489: { T: -1 },
  490: { T: 1 },
  491: { T: -1 },
  492: { T: 1 },
  493: { T: -1 },
  494: { f: s4 },
  495: { T: 1 },
  496: { T: -1 },
  497: { T: 1 },
  498: { T: -1 },
  499: {},
  500: { T: 1 },
  501: { T: -1 },
  502: { T: 1 },
  503: { T: -1 },
  504: {},
  505: { T: 1 },
  506: { T: -1 },
  507: {},
  508: { T: 1 },
  509: { T: -1 },
  510: { T: 1 },
  511: { T: -1 },
  512: {},
  513: {},
  514: { T: 1 },
  515: { T: -1 },
  516: { T: 1 },
  517: { T: -1 },
  518: { T: 1 },
  519: { T: -1 },
  520: { T: 1 },
  521: { T: -1 },
  522: {},
  523: {},
  524: {},
  525: {},
  526: {},
  527: {},
  528: { T: 1 },
  529: { T: -1 },
  530: { T: 1 },
  531: { T: -1 },
  532: { T: 1 },
  533: { T: -1 },
  534: {},
  535: {},
  536: {},
  537: {},
  538: { T: 1 },
  539: { T: -1 },
  540: { T: 1 },
  541: { T: -1 },
  542: { T: 1 },
  548: {},
  549: {},
  550: { f: Pf },
  551: {},
  552: {},
  553: {},
  554: { T: 1 },
  555: { T: -1 },
  556: { T: 1 },
  557: { T: -1 },
  558: { T: 1 },
  559: { T: -1 },
  560: { T: 1 },
  561: { T: -1 },
  562: {},
  564: {},
  565: { T: 1 },
  566: { T: -1 },
  569: { T: 1 },
  570: { T: -1 },
  572: {},
  573: { T: 1 },
  574: { T: -1 },
  577: {},
  578: {},
  579: {},
  580: {},
  581: {},
  582: {},
  583: {},
  584: {},
  585: {},
  586: {},
  587: {},
  588: { T: -1 },
  589: {},
  590: { T: 1 },
  591: { T: -1 },
  592: { T: 1 },
  593: { T: -1 },
  594: { T: 1 },
  595: { T: -1 },
  596: {},
  597: { T: 1 },
  598: { T: -1 },
  599: { T: 1 },
  600: { T: -1 },
  601: { T: 1 },
  602: { T: -1 },
  603: { T: 1 },
  604: { T: -1 },
  605: { T: 1 },
  606: { T: -1 },
  607: {},
  608: { T: 1 },
  609: { T: -1 },
  610: {},
  611: { T: 1 },
  612: { T: -1 },
  613: { T: 1 },
  614: { T: -1 },
  615: { T: 1 },
  616: { T: -1 },
  617: { T: 1 },
  618: { T: -1 },
  619: { T: 1 },
  620: { T: -1 },
  625: {},
  626: { T: 1 },
  627: { T: -1 },
  628: { T: 1 },
  629: { T: -1 },
  630: { T: 1 },
  631: { T: -1 },
  632: { f: DS },
  633: { T: 1 },
  634: { T: -1 },
  635: { T: 1, f: AS },
  636: { T: -1 },
  637: { f: Fy },
  638: { T: 1 },
  639: {},
  640: { T: -1 },
  641: { T: 1 },
  642: { T: -1 },
  643: { T: 1 },
  644: {},
  645: { T: -1 },
  646: { T: 1 },
  648: { T: 1 },
  649: {},
  650: { T: -1 },
  651: { f: k4 },
  652: {},
  653: { T: 1 },
  654: { T: -1 },
  655: { T: 1 },
  656: { T: -1 },
  657: { T: 1 },
  658: { T: -1 },
  659: {},
  660: { T: 1 },
  661: {},
  662: { T: -1 },
  663: {},
  664: { T: 1 },
  665: {},
  666: { T: -1 },
  667: {},
  668: {},
  669: {},
  671: { T: 1 },
  672: { T: -1 },
  673: { T: 1 },
  674: { T: -1 },
  675: {},
  676: {},
  677: {},
  678: {},
  679: {},
  680: {},
  681: {},
  1024: {},
  1025: {},
  1026: { T: 1 },
  1027: { T: -1 },
  1028: { T: 1 },
  1029: { T: -1 },
  1030: {},
  1031: { T: 1 },
  1032: { T: -1 },
  1033: { T: 1 },
  1034: { T: -1 },
  1035: {},
  1036: {},
  1037: {},
  1038: { T: 1 },
  1039: { T: -1 },
  1040: {},
  1041: { T: 1 },
  1042: { T: -1 },
  1043: {},
  1044: {},
  1045: {},
  1046: { T: 1 },
  1047: { T: -1 },
  1048: { T: 1 },
  1049: { T: -1 },
  1050: {},
  1051: { T: 1 },
  1052: { T: 1 },
  1053: { f: _4 },
  1054: { T: 1 },
  1055: {},
  1056: { T: 1 },
  1057: { T: -1 },
  1058: { T: 1 },
  1059: { T: -1 },
  1061: {},
  1062: { T: 1 },
  1063: { T: -1 },
  1064: { T: 1 },
  1065: { T: -1 },
  1066: { T: 1 },
  1067: { T: -1 },
  1068: { T: 1 },
  1069: { T: -1 },
  1070: { T: 1 },
  1071: { T: -1 },
  1072: { T: 1 },
  1073: { T: -1 },
  1075: { T: 1 },
  1076: { T: -1 },
  1077: { T: 1 },
  1078: { T: -1 },
  1079: { T: 1 },
  1080: { T: -1 },
  1081: { T: 1 },
  1082: { T: -1 },
  1083: { T: 1 },
  1084: { T: -1 },
  1085: {},
  1086: { T: 1 },
  1087: { T: -1 },
  1088: { T: 1 },
  1089: { T: -1 },
  1090: { T: 1 },
  1091: { T: -1 },
  1092: { T: 1 },
  1093: { T: -1 },
  1094: { T: 1 },
  1095: { T: -1 },
  1096: {},
  1097: { T: 1 },
  1098: {},
  1099: { T: -1 },
  1100: { T: 1 },
  1101: { T: -1 },
  1102: {},
  1103: {},
  1104: {},
  1105: {},
  1111: {},
  1112: {},
  1113: { T: 1 },
  1114: { T: -1 },
  1115: { T: 1 },
  1116: { T: -1 },
  1117: {},
  1118: { T: 1 },
  1119: { T: -1 },
  1120: { T: 1 },
  1121: { T: -1 },
  1122: { T: 1 },
  1123: { T: -1 },
  1124: { T: 1 },
  1125: { T: -1 },
  1126: {},
  1128: { T: 1 },
  1129: { T: -1 },
  1130: {},
  1131: { T: 1 },
  1132: { T: -1 },
  1133: { T: 1 },
  1134: { T: -1 },
  1135: { T: 1 },
  1136: { T: -1 },
  1137: { T: 1 },
  1138: { T: -1 },
  1139: { T: 1 },
  1140: { T: -1 },
  1141: {},
  1142: { T: 1 },
  1143: { T: -1 },
  1144: { T: 1 },
  1145: { T: -1 },
  1146: {},
  1147: { T: 1 },
  1148: { T: -1 },
  1149: { T: 1 },
  1150: { T: -1 },
  1152: { T: 1 },
  1153: { T: -1 },
  1154: { T: -1 },
  1155: { T: -1 },
  1156: { T: -1 },
  1157: { T: 1 },
  1158: { T: -1 },
  1159: { T: 1 },
  1160: { T: -1 },
  1161: { T: 1 },
  1162: { T: -1 },
  1163: { T: 1 },
  1164: { T: -1 },
  1165: { T: 1 },
  1166: { T: -1 },
  1167: { T: 1 },
  1168: { T: -1 },
  1169: { T: 1 },
  1170: { T: -1 },
  1171: {},
  1172: { T: 1 },
  1173: { T: -1 },
  1177: {},
  1178: { T: 1 },
  1180: {},
  1181: {},
  1182: {},
  2048: { T: 1 },
  2049: { T: -1 },
  2050: {},
  2051: { T: 1 },
  2052: { T: -1 },
  2053: {},
  2054: {},
  2055: { T: 1 },
  2056: { T: -1 },
  2057: { T: 1 },
  2058: { T: -1 },
  2060: {},
  2067: {},
  2068: { T: 1 },
  2069: { T: -1 },
  2070: {},
  2071: {},
  2072: { T: 1 },
  2073: { T: -1 },
  2075: {},
  2076: {},
  2077: { T: 1 },
  2078: { T: -1 },
  2079: {},
  2080: { T: 1 },
  2081: { T: -1 },
  2082: {},
  2083: { T: 1 },
  2084: { T: -1 },
  2085: { T: 1 },
  2086: { T: -1 },
  2087: { T: 1 },
  2088: { T: -1 },
  2089: { T: 1 },
  2090: { T: -1 },
  2091: {},
  2092: {},
  2093: { T: 1 },
  2094: { T: -1 },
  2095: {},
  2096: { T: 1 },
  2097: { T: -1 },
  2098: { T: 1 },
  2099: { T: -1 },
  2100: { T: 1 },
  2101: { T: -1 },
  2102: {},
  2103: { T: 1 },
  2104: { T: -1 },
  2105: {},
  2106: { T: 1 },
  2107: { T: -1 },
  2108: {},
  2109: { T: 1 },
  2110: { T: -1 },
  2111: { T: 1 },
  2112: { T: -1 },
  2113: { T: 1 },
  2114: { T: -1 },
  2115: {},
  2116: {},
  2117: {},
  2118: { T: 1 },
  2119: { T: -1 },
  2120: {},
  2121: { T: 1 },
  2122: { T: -1 },
  2123: { T: 1 },
  2124: { T: -1 },
  2125: {},
  2126: { T: 1 },
  2127: { T: -1 },
  2128: {},
  2129: { T: 1 },
  2130: { T: -1 },
  2131: { T: 1 },
  2132: { T: -1 },
  2133: { T: 1 },
  2134: {},
  2135: {},
  2136: {},
  2137: { T: 1 },
  2138: { T: -1 },
  2139: { T: 1 },
  2140: { T: -1 },
  2141: {},
  3072: {},
  3073: {},
  4096: { T: 1 },
  4097: { T: -1 },
  5002: { T: 1 },
  5003: { T: -1 },
  5081: { T: 1 },
  5082: { T: -1 },
  5083: {},
  5084: { T: 1 },
  5085: { T: -1 },
  5086: { T: 1 },
  5087: { T: -1 },
  5088: {},
  5089: {},
  5090: {},
  5092: { T: 1 },
  5093: { T: -1 },
  5094: {},
  5095: { T: 1 },
  5096: { T: -1 },
  5097: {},
  5099: {},
  65535: { n: "" },
};
function De(e, t, r, n) {
  var a = t;
  if (!isNaN(a)) {
    var i = n || (r || []).length || 0,
      s = e.next(4);
    s.write_shift(2, a), s.write_shift(2, i), i > 0 && z0(r) && e.push(r);
  }
}
function pC(e, t, r, n) {
  var a = (r || []).length || 0;
  if (a <= 8224) return De(e, t, r, a);
  var i = t;
  if (!isNaN(i)) {
    for (
      var s = r.parts || [], o = 0, l = 0, c = 0;
      c + (s[o] || 8224) <= 8224;

    )
      (c += s[o] || 8224), o++;
    var u = e.next(4);
    for (
      u.write_shift(2, i),
        u.write_shift(2, c),
        e.push(r.slice(l, l + c)),
        l += c;
      l < a;

    ) {
      for (
        u = e.next(4), u.write_shift(2, 60), c = 0;
        c + (s[o] || 8224) <= 8224;

      )
        (c += s[o] || 8224), o++;
      u.write_shift(2, c), e.push(r.slice(l, l + c)), (l += c);
    }
  }
}
function jo(e, t, r) {
  return (
    e || (e = ne(7)),
    e.write_shift(2, t),
    e.write_shift(2, r),
    e.write_shift(2, 0),
    e.write_shift(1, 0),
    e
  );
}
function mC(e, t, r, n) {
  var a = ne(9);
  return jo(a, e, t), ug(r, n || "b", a), a;
}
function vC(e, t, r) {
  var n = ne(8 + 2 * r.length);
  return (
    jo(n, e, t),
    n.write_shift(1, r.length),
    n.write_shift(r.length, r, "sbcs"),
    n.l < n.length ? n.slice(0, n.l) : n
  );
}
function gC(e, t, r, n) {
  if (t.v != null)
    switch (t.t) {
      case "d":
      case "n":
        var a = t.t == "d" ? Kr(Pr(t.v)) : t.v;
        a == (a | 0) && a >= 0 && a < 65536
          ? De(e, 2, kw(r, n, a))
          : De(e, 3, Fw(r, n, a));
        return;
      case "b":
      case "e":
        De(e, 5, mC(r, n, t.v, t.t));
        return;
      case "s":
      case "str":
        De(e, 4, vC(r, n, (t.v || "").slice(0, 255)));
        return;
    }
  De(e, 1, jo(null, r, n));
}
function xC(e, t, r, n) {
  var a = Array.isArray(t),
    i = Ft(t["!ref"] || "A1"),
    s,
    o = "",
    l = [];
  if (i.e.c > 255 || i.e.r > 16383) {
    if (n.WTF)
      throw new Error(
        "Range " + (t["!ref"] || "A1") + " exceeds format limit A1:IV16384",
      );
    (i.e.c = Math.min(i.e.c, 255)),
      (i.e.r = Math.min(i.e.c, 16383)),
      (s = Jt(i));
  }
  for (var c = i.s.r; c <= i.e.r; ++c) {
    o = _r(c);
    for (var u = i.s.c; u <= i.e.c; ++u) {
      c === i.s.r && (l[u] = Ar(u)), (s = l[u] + o);
      var f = a ? (t[c] || [])[u] : t[s];
      f && gC(e, f, c, u);
    }
  }
}
function _C(e, t) {
  for (var r = t || {}, n = Yr(), a = 0, i = 0; i < e.SheetNames.length; ++i)
    e.SheetNames[i] == r.sheet && (a = i);
  if (a == 0 && r.sheet && e.SheetNames[0] != r.sheet)
    throw new Error("Sheet not found: " + r.sheet);
  return (
    De(n, r.biff == 4 ? 1033 : r.biff == 3 ? 521 : 9, J0(e, 16, r)),
    xC(n, e.Sheets[e.SheetNames[a]], a, r),
    De(n, 10),
    n.end()
  );
}
function EC(e, t, r) {
  De(
    e,
    49,
    hw(
      {
        sz: 12,
        color: { theme: 1 },
        name: "Arial",
        family: 2,
        scheme: "minor",
      },
      r,
    ),
  );
}
function yC(e, t, r) {
  t &&
    [
      [5, 8],
      [23, 26],
      [41, 44],
      [50, 392],
    ].forEach(function (n) {
      for (var a = n[0]; a <= n[1]; ++a)
        t[a] != null && De(e, 1054, vw(a, t[a], r));
    });
}
function wC(e, t) {
  var r = ne(19);
  r.write_shift(4, 2151),
    r.write_shift(4, 0),
    r.write_shift(4, 0),
    r.write_shift(2, 3),
    r.write_shift(1, 1),
    r.write_shift(4, 0),
    De(e, 2151, r),
    (r = ne(39)),
    r.write_shift(4, 2152),
    r.write_shift(4, 0),
    r.write_shift(4, 0),
    r.write_shift(2, 3),
    r.write_shift(1, 0),
    r.write_shift(4, 0),
    r.write_shift(2, 1),
    r.write_shift(4, 4),
    r.write_shift(2, 0),
    hg(Ft(t["!ref"] || "A1"), r),
    r.write_shift(4, 4),
    De(e, 2152, r);
}
function SC(e, t) {
  for (var r = 0; r < 16; ++r) De(e, 224, Ep({ numFmtId: 0, style: !0 }, 0, t));
  t.cellXfs.forEach(function (n) {
    De(e, 224, Ep(n, 0, t));
  });
}
function TC(e, t) {
  for (var r = 0; r < t["!links"].length; ++r) {
    var n = t["!links"][r];
    De(e, 440, Tw(n)), n[1].Tooltip && De(e, 2048, Aw(n));
  }
  delete t["!links"];
}
function AC(e, t) {
  if (t) {
    var r = 0;
    t.forEach(function (n, a) {
      ++r <= 256 && n && De(e, 125, Lw(Wc(a, n), a));
    });
  }
}
function CC(e, t, r, n, a) {
  var i = 16 + Ka(a.cellXfs, t, a);
  if (t.v == null && !t.bf) {
    De(e, 513, xi(r, n, i));
    return;
  }
  if (t.bf) De(e, 6, QT(t, r, n, a, i));
  else
    switch (t.t) {
      case "d":
      case "n":
        var s = t.t == "d" ? Kr(Pr(t.v)) : t.v;
        De(e, 515, Ew(r, n, s, i));
        break;
      case "b":
      case "e":
        De(e, 517, _w(r, n, t.v, i, a, t.t));
        break;
      case "s":
      case "str":
        if (a.bookSST) {
          var o = rd(a.Strings, t.v, a.revStrings);
          De(e, 253, pw(r, n, o, i));
        } else De(e, 516, mw(r, n, (t.v || "").slice(0, 255), i, a));
        break;
      default:
        De(e, 513, xi(r, n, i));
    }
}
function DC(e, t, r) {
  var n = Yr(),
    a = r.SheetNames[e],
    i = r.Sheets[a] || {},
    s = (r || {}).Workbook || {},
    o = (s.Sheets || [])[e] || {},
    l = Array.isArray(i),
    c = t.biff == 8,
    u,
    f = "",
    d = [],
    h = Ft(i["!ref"] || "A1"),
    m = c ? 65536 : 16384;
  if (h.e.c > 255 || h.e.r >= m) {
    if (t.WTF)
      throw new Error(
        "Range " + (i["!ref"] || "A1") + " exceeds format limit A1:IV16384",
      );
    (h.e.c = Math.min(h.e.c, 255)), (h.e.r = Math.min(h.e.c, m - 1));
  }
  De(n, 2057, J0(r, 16, t)),
    De(n, 13, xn(1)),
    De(n, 12, xn(100)),
    De(n, 15, Or(!0)),
    De(n, 17, Or(!1)),
    De(n, 16, gi(0.001)),
    De(n, 95, Or(!0)),
    De(n, 42, Or(!1)),
    De(n, 43, Or(!1)),
    De(n, 130, xn(1)),
    De(n, 128, xw()),
    De(n, 131, Or(!1)),
    De(n, 132, Or(!1)),
    c && AC(n, i["!cols"]),
    De(n, 512, gw(h, t)),
    c && (i["!links"] = []);
  for (var p = h.s.r; p <= h.e.r; ++p) {
    f = _r(p);
    for (var x = h.s.c; x <= h.e.c; ++x) {
      p === h.s.r && (d[x] = Ar(x)), (u = d[x] + f);
      var _ = l ? (i[p] || [])[x] : i[u];
      _ && (CC(n, _, p, x, t), c && _.l && i["!links"].push([u, _.l]));
    }
  }
  var v = o.CodeName || o.name || a;
  return (
    c && De(n, 574, dw((s.Views || [])[0])),
    c && (i["!merges"] || []).length && De(n, 229, Sw(i["!merges"])),
    c && TC(n, i),
    De(n, 442, dg(v)),
    c && wC(n, i),
    De(n, 10),
    n.end()
  );
}
function LC(e, t, r) {
  var n = Yr(),
    a = (e || {}).Workbook || {},
    i = a.Sheets || [],
    s = a.WBProps || {},
    o = r.biff == 8,
    l = r.biff == 5;
  if (
    (De(n, 2057, J0(e, 5, r)),
    r.bookType == "xla" && De(n, 135),
    De(n, 225, o ? xn(1200) : null),
    De(n, 193, qy(2)),
    l && De(n, 191),
    l && De(n, 192),
    De(n, 226),
    De(n, 92, lw("SheetJS", r)),
    De(n, 66, xn(o ? 1200 : 1252)),
    o && De(n, 353, xn(0)),
    o && De(n, 448),
    De(n, 317, Nw(e.SheetNames.length)),
    o && e.vbaraw && De(n, 211),
    o && e.vbaraw)
  ) {
    var c = s.CodeName || "ThisWorkbook";
    De(n, 442, dg(c));
  }
  De(n, 156, xn(17)),
    De(n, 25, Or(!1)),
    De(n, 18, Or(!1)),
    De(n, 19, xn(0)),
    o && De(n, 431, Or(!1)),
    o && De(n, 444, xn(0)),
    De(n, 61, fw()),
    De(n, 64, Or(!1)),
    De(n, 141, xn(0)),
    De(n, 34, Or(O4(e) == "true")),
    De(n, 14, Or(!0)),
    o && De(n, 439, Or(!1)),
    De(n, 218, xn(0)),
    EC(n, e, r),
    yC(n, e.SSF, r),
    SC(n, r),
    o && De(n, 352, Or(!1));
  var u = n.end(),
    f = Yr();
  o && De(f, 140, Cw()), o && r.Strings && pC(f, 252, uw(r.Strings)), De(f, 10);
  var d = f.end(),
    h = Yr(),
    m = 0,
    p = 0;
  for (p = 0; p < e.SheetNames.length; ++p)
    m += (o ? 12 : 11) + (o ? 2 : 1) * e.SheetNames[p].length;
  var x = u.length + m + d.length;
  for (p = 0; p < e.SheetNames.length; ++p) {
    var _ = i[p] || {};
    De(
      h,
      133,
      cw({ pos: x, hs: _.Hidden || 0, dt: 0, name: e.SheetNames[p] }, r),
    ),
      (x += t[p].length);
  }
  var v = h.end();
  if (m != v.length) throw new Error("BS8 " + m + " != " + v.length);
  var g = [];
  return (
    u.length && g.push(u), v.length && g.push(v), d.length && g.push(d), vr(g)
  );
}
function NC(e, t) {
  var r = t || {},
    n = [];
  e && !e.SSF && (e.SSF = Xr(Ut)),
    e &&
      e.SSF &&
      (Bc(),
      bc(e.SSF),
      (r.revssf = jc(e.SSF)),
      (r.revssf[e.SSF[65535]] = 0),
      (r.ssf = e.SSF)),
    (r.Strings = []),
    (r.Strings.Count = 0),
    (r.Strings.Unique = 0),
    nd(r),
    (r.cellXfs = []),
    Ka(r.cellXfs, {}, { revssf: { General: 0 } }),
    e.Props || (e.Props = {});
  for (var a = 0; a < e.SheetNames.length; ++a) n[n.length] = DC(a, r, e);
  return n.unshift(LC(e, n, r)), vr(n);
}
function jg(e, t) {
  for (var r = 0; r <= e.SheetNames.length; ++r) {
    var n = e.Sheets[e.SheetNames[r]];
    if (!(!n || !n["!ref"])) {
      var a = fn(n["!ref"]);
      a.e.c > 255 &&
        typeof console < "u" &&
        console.error &&
        console.error(
          "Worksheet '" +
            e.SheetNames[r] +
            "' extends beyond column IV (255).  Data may be lost.",
        );
    }
  }
  var i = t || {};
  switch (i.biff || 2) {
    case 8:
    case 5:
      return NC(e, t);
    case 4:
    case 3:
    case 2:
      return _C(e, t);
  }
  throw new Error("invalid type " + i.bookType + " for BIFF");
}
function FC(e, t, r, n) {
  for (var a = e["!merges"] || [], i = [], s = t.s.c; s <= t.e.c; ++s) {
    for (var o = 0, l = 0, c = 0; c < a.length; ++c)
      if (!(a[c].s.r > r || a[c].s.c > s) && !(a[c].e.r < r || a[c].e.c < s)) {
        if (a[c].s.r < r || a[c].s.c < s) {
          o = -1;
          break;
        }
        (o = a[c].e.r - a[c].s.r + 1), (l = a[c].e.c - a[c].s.c + 1);
        break;
      }
    if (!(o < 0)) {
      var u = xt({ r, c: s }),
        f = n.dense ? (e[r] || [])[s] : e[u],
        d = (f && f.v != null && (f.h || oy(f.w || (da(f), f.w) || ""))) || "",
        h = {};
      o > 1 && (h.rowspan = o),
        l > 1 && (h.colspan = l),
        n.editable
          ? (d = '<span contenteditable="true">' + d + "</span>")
          : f &&
            ((h["data-t"] = (f && f.t) || "z"),
            f.v != null && (h["data-v"] = f.v),
            f.z != null && (h["data-z"] = f.z),
            f.l &&
              (f.l.Target || "#").charAt(0) != "#" &&
              (d = '<a href="' + f.l.Target + '">' + d + "</a>")),
        (h.id = (n.id || "sjs") + "-" + u),
        i.push(Ce("td", d, h));
    }
  }
  var m = "<tr>";
  return m + i.join("") + "</tr>";
}
var kC =
    '<html><head><meta charset="utf-8"/><title>SheetJS Table Export</title></head><body>',
  RC = "</body></html>";
function OC(e, t, r) {
  var n = [];
  return n.join("") + "<table" + (r && r.id ? ' id="' + r.id + '"' : "") + ">";
}
function Ug(e, t) {
  var r = t || {},
    n = r.header != null ? r.header : kC,
    a = r.footer != null ? r.footer : RC,
    i = [n],
    s = fn(e["!ref"]);
  (r.dense = Array.isArray(e)), i.push(OC(e, s, r));
  for (var o = s.s.r; o <= s.e.r; ++o) i.push(FC(e, s, o, r));
  return i.push("</table>" + a), i.join("");
}
function $g(e, t, r) {
  var n = r || {},
    a = 0,
    i = 0;
  if (n.origin != null)
    if (typeof n.origin == "number") a = n.origin;
    else {
      var s = typeof n.origin == "string" ? or(n.origin) : n.origin;
      (a = s.r), (i = s.c);
    }
  var o = t.getElementsByTagName("tr"),
    l = Math.min(n.sheetRows || 1e7, o.length),
    c = { s: { r: 0, c: 0 }, e: { r: a, c: i } };
  if (e["!ref"]) {
    var u = fn(e["!ref"]);
    (c.s.r = Math.min(c.s.r, u.s.r)),
      (c.s.c = Math.min(c.s.c, u.s.c)),
      (c.e.r = Math.max(c.e.r, u.e.r)),
      (c.e.c = Math.max(c.e.c, u.e.c)),
      a == -1 && (c.e.r = a = u.e.r + 1);
  }
  var f = [],
    d = 0,
    h = e["!rows"] || (e["!rows"] = []),
    m = 0,
    p = 0,
    x = 0,
    _ = 0,
    v = 0,
    g = 0;
  for (e["!cols"] || (e["!cols"] = []); m < o.length && p < l; ++m) {
    var S = o[m];
    if (Dp(S)) {
      if (n.display) continue;
      h[p] = { hidden: !0 };
    }
    var b = S.children;
    for (x = _ = 0; x < b.length; ++x) {
      var C = b[x];
      if (!(n.display && Dp(C))) {
        var D = C.hasAttribute("data-v")
            ? C.getAttribute("data-v")
            : C.hasAttribute("v")
              ? C.getAttribute("v")
              : fy(C.innerHTML),
          A = C.getAttribute("data-z") || C.getAttribute("z");
        for (d = 0; d < f.length; ++d) {
          var F = f[d];
          F.s.c == _ + i &&
            F.s.r < p + a &&
            p + a <= F.e.r &&
            ((_ = F.e.c + 1 - i), (d = -1));
        }
        (g = +C.getAttribute("colspan") || 1),
          ((v = +C.getAttribute("rowspan") || 1) > 1 || g > 1) &&
            f.push({
              s: { r: p + a, c: _ + i },
              e: { r: p + a + (v || 1) - 1, c: _ + i + (g || 1) - 1 },
            });
        var I = { t: "s", v: D },
          P = C.getAttribute("data-t") || C.getAttribute("t") || "";
        D != null &&
          (D.length == 0
            ? (I.t = P || "z")
            : n.raw ||
              D.trim().length == 0 ||
              P == "s" ||
              (D === "TRUE"
                ? (I = { t: "b", v: !0 })
                : D === "FALSE"
                  ? (I = { t: "b", v: !1 })
                  : isNaN(ia(D))
                    ? isNaN(wo(D).getDate()) ||
                      ((I = { t: "d", v: Pr(D) }),
                      n.cellDates || (I = { t: "n", v: Kr(I.v) }),
                      (I.z = n.dateNF || Ut[14]))
                    : (I = { t: "n", v: ia(D) }))),
          I.z === void 0 && A != null && (I.z = A);
        var B = "",
          X = C.getElementsByTagName("A");
        if (X && X.length)
          for (
            var ae = 0;
            ae < X.length &&
            !(
              X[ae].hasAttribute("href") &&
              ((B = X[ae].getAttribute("href")), B.charAt(0) != "#")
            );
            ++ae
          );
        B && B.charAt(0) != "#" && (I.l = { Target: B }),
          n.dense
            ? (e[p + a] || (e[p + a] = []), (e[p + a][_ + i] = I))
            : (e[xt({ c: _ + i, r: p + a })] = I),
          c.e.c < _ + i && (c.e.c = _ + i),
          (_ += g);
      }
    }
    ++p;
  }
  return (
    f.length && (e["!merges"] = (e["!merges"] || []).concat(f)),
    (c.e.r = Math.max(c.e.r, p - 1 + a)),
    (e["!ref"] = Jt(c)),
    p >= l && (e["!fullref"] = Jt(((c.e.r = o.length - m + p - 1 + a), c))),
    e
  );
}
function Hg(e, t) {
  var r = t || {},
    n = r.dense ? [] : {};
  return $g(n, e, t);
}
function IC(e, t) {
  return yi(Hg(e, t), t);
}
function Dp(e) {
  var t = "",
    r = PC(e);
  return (
    r && (t = r(e).getPropertyValue("display")),
    t || (t = e.style && e.style.display),
    t === "none"
  );
}
function PC(e) {
  return e.ownerDocument.defaultView &&
    typeof e.ownerDocument.defaultView.getComputedStyle == "function"
    ? e.ownerDocument.defaultView.getComputedStyle
    : typeof getComputedStyle == "function"
      ? getComputedStyle
      : null;
}
var MC = (function () {
    var e = [
        "<office:master-styles>",
        '<style:master-page style:name="mp1" style:page-layout-name="mp1">',
        "<style:header/>",
        '<style:header-left style:display="false"/>',
        "<style:footer/>",
        '<style:footer-left style:display="false"/>',
        "</style:master-page>",
        "</office:master-styles>",
      ].join(""),
      t =
        "<office:document-styles " +
        To({
          "xmlns:office": "urn:oasis:names:tc:opendocument:xmlns:office:1.0",
          "xmlns:table": "urn:oasis:names:tc:opendocument:xmlns:table:1.0",
          "xmlns:style": "urn:oasis:names:tc:opendocument:xmlns:style:1.0",
          "xmlns:text": "urn:oasis:names:tc:opendocument:xmlns:text:1.0",
          "xmlns:draw": "urn:oasis:names:tc:opendocument:xmlns:drawing:1.0",
          "xmlns:fo":
            "urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0",
          "xmlns:xlink": "http://www.w3.org/1999/xlink",
          "xmlns:dc": "http://purl.org/dc/elements/1.1/",
          "xmlns:number": "urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0",
          "xmlns:svg":
            "urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0",
          "xmlns:of": "urn:oasis:names:tc:opendocument:xmlns:of:1.2",
          "office:version": "1.2",
        }) +
        ">" +
        e +
        "</office:document-styles>";
    return function () {
      return Zt + t;
    };
  })(),
  Lp = (function () {
    var e = function (i) {
        return vt(i)
          .replace(/  +/g, function (s) {
            return '<text:s text:c="' + s.length + '"/>';
          })
          .replace(/\t/g, "<text:tab/>")
          .replace(/\n/g, "</text:p><text:p>")
          .replace(/^ /, "<text:s/>")
          .replace(/ $/, "<text:s/>");
      },
      t = `          <table:table-cell />
`,
      r = `          <table:covered-table-cell/>
`,
      n = function (i, s, o) {
        var l = [];
        l.push(
          '      <table:table table:name="' +
            vt(s.SheetNames[o]) +
            `" table:style-name="ta1">
`,
        );
        var c = 0,
          u = 0,
          f = fn(i["!ref"] || "A1"),
          d = i["!merges"] || [],
          h = 0,
          m = Array.isArray(i);
        if (i["!cols"])
          for (u = 0; u <= f.e.c; ++u)
            l.push(
              "        <table:table-column" +
                (i["!cols"][u]
                  ? ' table:style-name="co' + i["!cols"][u].ods + '"'
                  : "") +
                `></table:table-column>
`,
            );
        var p = "",
          x = i["!rows"] || [];
        for (c = 0; c < f.s.r; ++c)
          (p = x[c] ? ' table:style-name="ro' + x[c].ods + '"' : ""),
            l.push(
              "        <table:table-row" +
                p +
                `></table:table-row>
`,
            );
        for (; c <= f.e.r; ++c) {
          for (
            p = x[c] ? ' table:style-name="ro' + x[c].ods + '"' : "",
              l.push(
                "        <table:table-row" +
                  p +
                  `>
`,
              ),
              u = 0;
            u < f.s.c;
            ++u
          )
            l.push(t);
          for (; u <= f.e.c; ++u) {
            var _ = !1,
              v = {},
              g = "";
            for (h = 0; h != d.length; ++h)
              if (
                !(d[h].s.c > u) &&
                !(d[h].s.r > c) &&
                !(d[h].e.c < u) &&
                !(d[h].e.r < c)
              ) {
                (d[h].s.c != u || d[h].s.r != c) && (_ = !0),
                  (v["table:number-columns-spanned"] = d[h].e.c - d[h].s.c + 1),
                  (v["table:number-rows-spanned"] = d[h].e.r - d[h].s.r + 1);
                break;
              }
            if (_) {
              l.push(r);
              continue;
            }
            var S = xt({ r: c, c: u }),
              b = m ? (i[c] || [])[u] : i[S];
            if (
              b &&
              b.f &&
              ((v["table:formula"] = vt(rA(b.f))),
              b.F && b.F.slice(0, S.length) == S)
            ) {
              var C = fn(b.F);
              (v["table:number-matrix-columns-spanned"] = C.e.c - C.s.c + 1),
                (v["table:number-matrix-rows-spanned"] = C.e.r - C.s.r + 1);
            }
            if (!b) {
              l.push(t);
              continue;
            }
            switch (b.t) {
              case "b":
                (g = b.v ? "TRUE" : "FALSE"),
                  (v["office:value-type"] = "boolean"),
                  (v["office:boolean-value"] = b.v ? "true" : "false");
                break;
              case "n":
                (g = b.w || String(b.v || 0)),
                  (v["office:value-type"] = "float"),
                  (v["office:value"] = b.v || 0);
                break;
              case "s":
              case "str":
                (g = b.v == null ? "" : b.v),
                  (v["office:value-type"] = "string");
                break;
              case "d":
                (g = b.w || Pr(b.v).toISOString()),
                  (v["office:value-type"] = "date"),
                  (v["office:date-value"] = Pr(b.v).toISOString()),
                  (v["table:style-name"] = "ce1");
                break;
              default:
                l.push(t);
                continue;
            }
            var D = e(g);
            if (b.l && b.l.Target) {
              var A = b.l.Target;
              (A = A.charAt(0) == "#" ? "#" + nA(A.slice(1)) : A),
                A.charAt(0) != "#" && !A.match(/^\w+:/) && (A = "../" + A),
                (D = Ce("text:a", D, {
                  "xlink:href": A.replace(/&/g, "&amp;"),
                }));
            }
            l.push(
              "          " +
                Ce("table:table-cell", Ce("text:p", D, {}), v) +
                `
`,
            );
          }
          l.push(`        </table:table-row>
`);
        }
        return (
          l.push(`      </table:table>
`),
          l.join("")
        );
      },
      a = function (i, s) {
        i.push(` <office:automatic-styles>
`),
          i.push(`  <number:date-style style:name="N37" number:automatic-order="true">
`),
          i.push(`   <number:month number:style="long"/>
`),
          i.push(`   <number:text>/</number:text>
`),
          i.push(`   <number:day number:style="long"/>
`),
          i.push(`   <number:text>/</number:text>
`),
          i.push(`   <number:year/>
`),
          i.push(`  </number:date-style>
`);
        var o = 0;
        s.SheetNames.map(function (c) {
          return s.Sheets[c];
        }).forEach(function (c) {
          if (c && c["!cols"]) {
            for (var u = 0; u < c["!cols"].length; ++u)
              if (c["!cols"][u]) {
                var f = c["!cols"][u];
                if (f.width == null && f.wpx == null && f.wch == null) continue;
                Z0(f), (f.ods = o);
                var d = c["!cols"][u].wpx + "px";
                i.push(
                  '  <style:style style:name="co' +
                    o +
                    `" style:family="table-column">
`,
                ),
                  i.push(
                    '   <style:table-column-properties fo:break-before="auto" style:column-width="' +
                      d +
                      `"/>
`,
                  ),
                  i.push(`  </style:style>
`),
                  ++o;
              }
          }
        });
        var l = 0;
        s.SheetNames.map(function (c) {
          return s.Sheets[c];
        }).forEach(function (c) {
          if (c && c["!rows"]) {
            for (var u = 0; u < c["!rows"].length; ++u)
              if (c["!rows"][u]) {
                c["!rows"][u].ods = l;
                var f = c["!rows"][u].hpx + "px";
                i.push(
                  '  <style:style style:name="ro' +
                    l +
                    `" style:family="table-row">
`,
                ),
                  i.push(
                    '   <style:table-row-properties fo:break-before="auto" style:row-height="' +
                      f +
                      `"/>
`,
                  ),
                  i.push(`  </style:style>
`),
                  ++l;
              }
          }
        }),
          i.push(`  <style:style style:name="ta1" style:family="table" style:master-page-name="mp1">
`),
          i.push(`   <style:table-properties table:display="true" style:writing-mode="lr-tb"/>
`),
          i.push(`  </style:style>
`),
          i.push(`  <style:style style:name="ce1" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="N37"/>
`),
          i.push(` </office:automatic-styles>
`);
      };
    return function (s, o) {
      var l = [Zt],
        c = To({
          "xmlns:office": "urn:oasis:names:tc:opendocument:xmlns:office:1.0",
          "xmlns:table": "urn:oasis:names:tc:opendocument:xmlns:table:1.0",
          "xmlns:style": "urn:oasis:names:tc:opendocument:xmlns:style:1.0",
          "xmlns:text": "urn:oasis:names:tc:opendocument:xmlns:text:1.0",
          "xmlns:draw": "urn:oasis:names:tc:opendocument:xmlns:drawing:1.0",
          "xmlns:fo":
            "urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0",
          "xmlns:xlink": "http://www.w3.org/1999/xlink",
          "xmlns:dc": "http://purl.org/dc/elements/1.1/",
          "xmlns:meta": "urn:oasis:names:tc:opendocument:xmlns:meta:1.0",
          "xmlns:number": "urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0",
          "xmlns:presentation":
            "urn:oasis:names:tc:opendocument:xmlns:presentation:1.0",
          "xmlns:svg":
            "urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0",
          "xmlns:chart": "urn:oasis:names:tc:opendocument:xmlns:chart:1.0",
          "xmlns:dr3d": "urn:oasis:names:tc:opendocument:xmlns:dr3d:1.0",
          "xmlns:math": "http://www.w3.org/1998/Math/MathML",
          "xmlns:form": "urn:oasis:names:tc:opendocument:xmlns:form:1.0",
          "xmlns:script": "urn:oasis:names:tc:opendocument:xmlns:script:1.0",
          "xmlns:ooo": "http://openoffice.org/2004/office",
          "xmlns:ooow": "http://openoffice.org/2004/writer",
          "xmlns:oooc": "http://openoffice.org/2004/calc",
          "xmlns:dom": "http://www.w3.org/2001/xml-events",
          "xmlns:xforms": "http://www.w3.org/2002/xforms",
          "xmlns:xsd": "http://www.w3.org/2001/XMLSchema",
          "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
          "xmlns:sheet": "urn:oasis:names:tc:opendocument:sh33tjs:1.0",
          "xmlns:rpt": "http://openoffice.org/2005/report",
          "xmlns:of": "urn:oasis:names:tc:opendocument:xmlns:of:1.2",
          "xmlns:xhtml": "http://www.w3.org/1999/xhtml",
          "xmlns:grddl": "http://www.w3.org/2003/g/data-view#",
          "xmlns:tableooo": "http://openoffice.org/2009/table",
          "xmlns:drawooo": "http://openoffice.org/2010/draw",
          "xmlns:calcext":
            "urn:org:documentfoundation:names:experimental:calc:xmlns:calcext:1.0",
          "xmlns:loext":
            "urn:org:documentfoundation:names:experimental:office:xmlns:loext:1.0",
          "xmlns:field":
            "urn:openoffice:names:experimental:ooo-ms-interop:xmlns:field:1.0",
          "xmlns:formx":
            "urn:openoffice:names:experimental:ooxml-odf-interop:xmlns:form:1.0",
          "xmlns:css3t": "http://www.w3.org/TR/css3-text/",
          "office:version": "1.2",
        }),
        u = To({
          "xmlns:config": "urn:oasis:names:tc:opendocument:xmlns:config:1.0",
          "office:mimetype": "application/vnd.oasis.opendocument.spreadsheet",
        });
      o.bookType == "fods"
        ? (l.push(
            "<office:document" +
              c +
              u +
              `>
`,
          ),
          l.push(ng().replace(/office:document-meta/g, "office:meta")))
        : l.push(
            "<office:document-content" +
              c +
              `>
`,
          ),
        a(l, s),
        l.push(`  <office:body>
`),
        l.push(`    <office:spreadsheet>
`);
      for (var f = 0; f != s.SheetNames.length; ++f)
        l.push(n(s.Sheets[s.SheetNames[f]], s, f));
      return (
        l.push(`    </office:spreadsheet>
`),
        l.push(`  </office:body>
`),
        o.bookType == "fods"
          ? l.push("</office:document>")
          : l.push("</office:document-content>"),
        l.join("")
      );
    };
  })();
function Wg(e, t) {
  if (t.bookType == "fods") return Lp(e, t);
  var r = $0(),
    n = "",
    a = [],
    i = [];
  return (
    (n = "mimetype"),
    tt(r, n, "application/vnd.oasis.opendocument.spreadsheet"),
    (n = "content.xml"),
    tt(r, n, Lp(e, t)),
    a.push([n, "text/xml"]),
    i.push([n, "ContentFile"]),
    (n = "styles.xml"),
    tt(r, n, MC(e, t)),
    a.push([n, "text/xml"]),
    i.push([n, "StylesFile"]),
    (n = "meta.xml"),
    tt(r, n, Zt + ng()),
    a.push([n, "text/xml"]),
    i.push([n, "MetadataFile"]),
    (n = "manifest.rdf"),
    tt(r, n, Ky(i)),
    a.push([n, "application/rdf+xml"]),
    (n = "META-INF/manifest.xml"),
    tt(r, n, Gy(a)),
    r
  );
}
/*! sheetjs (C) 2013-present SheetJS -- http://sheetjs.com */ function mc(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function bC(e) {
  return typeof TextEncoder < "u" ? new TextEncoder().encode(e) : In(So(e));
}
function BC(e, t) {
  e: for (var r = 0; r <= e.length - t.length; ++r) {
    for (var n = 0; n < t.length; ++n) if (e[r + n] != t[n]) continue e;
    return !0;
  }
  return !1;
}
function Va(e) {
  var t = e.reduce(function (a, i) {
      return a + i.length;
    }, 0),
    r = new Uint8Array(t),
    n = 0;
  return (
    e.forEach(function (a) {
      r.set(a, n), (n += a.length);
    }),
    r
  );
}
function jC(e, t, r) {
  var n =
      Math.floor(r == 0 ? 0 : Math.LOG10E * Math.log(Math.abs(r))) + 6176 - 20,
    a = r / Math.pow(10, n - 6176);
  (e[t + 15] |= n >> 7), (e[t + 14] |= (n & 127) << 1);
  for (var i = 0; a >= 1; ++i, a /= 256) e[t + i] = a & 255;
  e[t + 15] |= r >= 0 ? 0 : 128;
}
function Ao(e, t) {
  var r = t ? t[0] : 0,
    n = e[r] & 127;
  e: if (
    e[r++] >= 128 &&
    ((n |= (e[r] & 127) << 7),
    e[r++] < 128 ||
      ((n |= (e[r] & 127) << 14), e[r++] < 128) ||
      ((n |= (e[r] & 127) << 21), e[r++] < 128) ||
      ((n += (e[r] & 127) * Math.pow(2, 28)), ++r, e[r++] < 128) ||
      ((n += (e[r] & 127) * Math.pow(2, 35)), ++r, e[r++] < 128) ||
      ((n += (e[r] & 127) * Math.pow(2, 42)), ++r, e[r++] < 128))
  )
    break e;
  return t && (t[0] = r), n;
}
function pt(e) {
  var t = new Uint8Array(7);
  t[0] = e & 127;
  var r = 1;
  e: if (e > 127) {
    if (
      ((t[r - 1] |= 128),
      (t[r] = (e >> 7) & 127),
      ++r,
      e <= 16383 ||
        ((t[r - 1] |= 128), (t[r] = (e >> 14) & 127), ++r, e <= 2097151) ||
        ((t[r - 1] |= 128), (t[r] = (e >> 21) & 127), ++r, e <= 268435455) ||
        ((t[r - 1] |= 128),
        (t[r] = ((e / 256) >>> 21) & 127),
        ++r,
        e <= 34359738367) ||
        ((t[r - 1] |= 128),
        (t[r] = ((e / 65536) >>> 21) & 127),
        ++r,
        e <= 4398046511103))
    )
      break e;
    (t[r - 1] |= 128), (t[r] = ((e / 16777216) >>> 21) & 127), ++r;
  }
  return t.slice(0, r);
}
function ns(e) {
  var t = 0,
    r = e[t] & 127;
  e: if (e[t++] >= 128) {
    if (
      ((r |= (e[t] & 127) << 7),
      e[t++] < 128 ||
        ((r |= (e[t] & 127) << 14), e[t++] < 128) ||
        ((r |= (e[t] & 127) << 21), e[t++] < 128))
    )
      break e;
    r |= (e[t] & 127) << 28;
  }
  return r;
}
function rr(e) {
  for (var t = [], r = [0]; r[0] < e.length; ) {
    var n = r[0],
      a = Ao(e, r),
      i = a & 7;
    a = Math.floor(a / 8);
    var s = 0,
      o;
    if (a == 0) break;
    switch (i) {
      case 0:
        {
          for (var l = r[0]; e[r[0]++] >= 128; );
          o = e.slice(l, r[0]);
        }
        break;
      case 5:
        (s = 4), (o = e.slice(r[0], r[0] + s)), (r[0] += s);
        break;
      case 1:
        (s = 8), (o = e.slice(r[0], r[0] + s)), (r[0] += s);
        break;
      case 2:
        (s = Ao(e, r)), (o = e.slice(r[0], r[0] + s)), (r[0] += s);
        break;
      case 3:
      case 4:
      default:
        throw new Error(
          "PB Type "
            .concat(i, " for Field ")
            .concat(a, " at offset ")
            .concat(n),
        );
    }
    var c = { data: o, type: i };
    t[a] == null ? (t[a] = [c]) : t[a].push(c);
  }
  return t;
}
function hr(e) {
  var t = [];
  return (
    e.forEach(function (r, n) {
      r.forEach(function (a) {
        a.data &&
          (t.push(pt(n * 8 + a.type)),
          a.type == 2 && t.push(pt(a.data.length)),
          t.push(a.data));
      });
    }),
    Va(t)
  );
}
function Ln(e) {
  for (var t, r = [], n = [0]; n[0] < e.length; ) {
    var a = Ao(e, n),
      i = rr(e.slice(n[0], n[0] + a));
    n[0] += a;
    var s = { id: ns(i[1][0].data), messages: [] };
    i[2].forEach(function (o) {
      var l = rr(o.data),
        c = ns(l[3][0].data);
      s.messages.push({ meta: l, data: e.slice(n[0], n[0] + c) }), (n[0] += c);
    }),
      (t = i[3]) != null && t[0] && (s.merge = ns(i[3][0].data) >>> 0 > 0),
      r.push(s);
  }
  return r;
}
function Fi(e) {
  var t = [];
  return (
    e.forEach(function (r) {
      var n = [];
      (n[1] = [{ data: pt(r.id), type: 0 }]),
        (n[2] = []),
        r.merge != null && (n[3] = [{ data: pt(+!!r.merge), type: 0 }]);
      var a = [];
      r.messages.forEach(function (s) {
        a.push(s.data),
          (s.meta[3] = [{ type: 0, data: pt(s.data.length) }]),
          n[2].push({ data: hr(s.meta), type: 2 });
      });
      var i = hr(n);
      t.push(pt(i.length)),
        t.push(i),
        a.forEach(function (s) {
          return t.push(s);
        });
    }),
    Va(t)
  );
}
function UC(e, t) {
  if (e != 0) throw new Error("Unexpected Snappy chunk type ".concat(e));
  for (var r = [0], n = Ao(t, r), a = []; r[0] < t.length; ) {
    var i = t[r[0]] & 3;
    if (i == 0) {
      var s = t[r[0]++] >> 2;
      if (s < 60) ++s;
      else {
        var o = s - 59;
        (s = t[r[0]]),
          o > 1 && (s |= t[r[0] + 1] << 8),
          o > 2 && (s |= t[r[0] + 2] << 16),
          o > 3 && (s |= t[r[0] + 3] << 24),
          (s >>>= 0),
          s++,
          (r[0] += o);
      }
      a.push(t.slice(r[0], r[0] + s)), (r[0] += s);
      continue;
    } else {
      var l = 0,
        c = 0;
      if (
        (i == 1
          ? ((c = ((t[r[0]] >> 2) & 7) + 4),
            (l = (t[r[0]++] & 224) << 3),
            (l |= t[r[0]++]))
          : ((c = (t[r[0]++] >> 2) + 1),
            i == 2
              ? ((l = t[r[0]] | (t[r[0] + 1] << 8)), (r[0] += 2))
              : ((l =
                  (t[r[0]] |
                    (t[r[0] + 1] << 8) |
                    (t[r[0] + 2] << 16) |
                    (t[r[0] + 3] << 24)) >>>
                  0),
                (r[0] += 4))),
        (a = [Va(a)]),
        l == 0)
      )
        throw new Error("Invalid offset 0");
      if (l > a[0].length) throw new Error("Invalid offset beyond length");
      if (c >= l)
        for (a.push(a[0].slice(-l)), c -= l; c >= a[a.length - 1].length; )
          a.push(a[a.length - 1]), (c -= a[a.length - 1].length);
      a.push(a[0].slice(-l, -l + c));
    }
  }
  var u = Va(a);
  if (u.length != n)
    throw new Error("Unexpected length: ".concat(u.length, " != ").concat(n));
  return u;
}
function Nn(e) {
  for (var t = [], r = 0; r < e.length; ) {
    var n = e[r++],
      a = e[r] | (e[r + 1] << 8) | (e[r + 2] << 16);
    (r += 3), t.push(UC(n, e.slice(r, r + a))), (r += a);
  }
  if (r !== e.length) throw new Error("data is not a valid framed stream!");
  return Va(t);
}
function ki(e) {
  for (var t = [], r = 0; r < e.length; ) {
    var n = Math.min(e.length - r, 268435455),
      a = new Uint8Array(4);
    t.push(a);
    var i = pt(n),
      s = i.length;
    t.push(i),
      n <= 60
        ? (s++, t.push(new Uint8Array([(n - 1) << 2])))
        : n <= 256
          ? ((s += 2), t.push(new Uint8Array([240, (n - 1) & 255])))
          : n <= 65536
            ? ((s += 3),
              t.push(
                new Uint8Array([244, (n - 1) & 255, ((n - 1) >> 8) & 255]),
              ))
            : n <= 16777216
              ? ((s += 4),
                t.push(
                  new Uint8Array([
                    248,
                    (n - 1) & 255,
                    ((n - 1) >> 8) & 255,
                    ((n - 1) >> 16) & 255,
                  ]),
                ))
              : n <= 4294967296 &&
                ((s += 5),
                t.push(
                  new Uint8Array([
                    252,
                    (n - 1) & 255,
                    ((n - 1) >> 8) & 255,
                    ((n - 1) >> 16) & 255,
                    ((n - 1) >>> 24) & 255,
                  ]),
                )),
      t.push(e.slice(r, r + n)),
      (s += n),
      (a[0] = 0),
      (a[1] = s & 255),
      (a[2] = (s >> 8) & 255),
      (a[3] = (s >> 16) & 255),
      (r += n);
  }
  return Va(t);
}
function Iu(e, t) {
  var r = new Uint8Array(32),
    n = mc(r),
    a = 12,
    i = 0;
  switch (((r[0] = 5), e.t)) {
    case "n":
      (r[1] = 2), jC(r, a, e.v), (i |= 1), (a += 16);
      break;
    case "b":
      (r[1] = 6), n.setFloat64(a, e.v ? 1 : 0, !0), (i |= 2), (a += 8);
      break;
    case "s":
      if (t.indexOf(e.v) == -1)
        throw new Error("Value ".concat(e.v, " missing from SST!"));
      (r[1] = 3), n.setUint32(a, t.indexOf(e.v), !0), (i |= 8), (a += 4);
      break;
    default:
      throw "unsupported cell type " + e.t;
  }
  return n.setUint32(8, i, !0), r.slice(0, a);
}
function Pu(e, t) {
  var r = new Uint8Array(32),
    n = mc(r),
    a = 12,
    i = 0;
  switch (((r[0] = 3), e.t)) {
    case "n":
      (r[2] = 2), n.setFloat64(a, e.v, !0), (i |= 32), (a += 8);
      break;
    case "b":
      (r[2] = 6), n.setFloat64(a, e.v ? 1 : 0, !0), (i |= 32), (a += 8);
      break;
    case "s":
      if (t.indexOf(e.v) == -1)
        throw new Error("Value ".concat(e.v, " missing from SST!"));
      (r[2] = 3), n.setUint32(a, t.indexOf(e.v), !0), (i |= 16), (a += 4);
      break;
    default:
      throw "unsupported cell type " + e.t;
  }
  return n.setUint32(4, i, !0), r.slice(0, a);
}
function ya(e) {
  var t = rr(e);
  return Ao(t[1][0].data);
}
function $C(e, t, r) {
  var n, a, i, s;
  if (!((n = e[6]) != null && n[0]) || !((a = e[7]) != null && a[0]))
    throw "Mutation only works on post-BNC storages!";
  var o =
    (((s = (i = e[8]) == null ? void 0 : i[0]) == null ? void 0 : s.data) &&
      ns(e[8][0].data) > 0) ||
    !1;
  if (o) throw "Math only works with normal offsets";
  for (
    var l = 0,
      c = mc(e[7][0].data),
      u = 0,
      f = [],
      d = mc(e[4][0].data),
      h = 0,
      m = [],
      p = 0;
    p < t.length;
    ++p
  ) {
    if (t[p] == null) {
      c.setUint16(p * 2, 65535, !0), d.setUint16(p * 2, 65535);
      continue;
    }
    c.setUint16(p * 2, u, !0), d.setUint16(p * 2, h, !0);
    var x, _;
    switch (typeof t[p]) {
      case "string":
        (x = Iu({ t: "s", v: t[p] }, r)), (_ = Pu({ t: "s", v: t[p] }, r));
        break;
      case "number":
        (x = Iu({ t: "n", v: t[p] }, r)), (_ = Pu({ t: "n", v: t[p] }, r));
        break;
      case "boolean":
        (x = Iu({ t: "b", v: t[p] }, r)), (_ = Pu({ t: "b", v: t[p] }, r));
        break;
      default:
        throw new Error("Unsupported value " + t[p]);
    }
    f.push(x), (u += x.length), m.push(_), (h += _.length), ++l;
  }
  for (e[2][0].data = pt(l); p < e[7][0].data.length / 2; ++p)
    c.setUint16(p * 2, 65535, !0), d.setUint16(p * 2, 65535, !0);
  return (e[6][0].data = Va(f)), (e[3][0].data = Va(m)), l;
}
function HC(e, t) {
  if (!t || !t.numbers)
    throw new Error("Must pass a `numbers` option -- check the README");
  var r = e.Sheets[e.SheetNames[0]];
  e.SheetNames.length > 1 &&
    console.error("The Numbers writer currently writes only the first table");
  var n = fn(r["!ref"]);
  n.s.r = n.s.c = 0;
  var a = !1;
  n.e.c > 9 && ((a = !0), (n.e.c = 9)),
    n.e.r > 49 && ((a = !0), (n.e.r = 49)),
    a &&
      console.error(
        "The Numbers writer is currently limited to ".concat(Jt(n)),
      );
  var i = vc(r, { range: n, header: 1 }),
    s = ["~Sh33tJ5~"];
  i.forEach(function (U) {
    return U.forEach(function (R) {
      typeof R == "string" && s.push(R);
    });
  });
  var o = {},
    l = [],
    c = yt.read(t.numbers, { type: "base64" });
  c.FileIndex.map(function (U, R) {
    return [U, c.FullPaths[R]];
  }).forEach(function (U) {
    var R = U[0],
      k = U[1];
    if (R.type == 2 && R.name.match(/\.iwa/)) {
      var z = R.content,
        re = Nn(z),
        Se = Ln(re);
      Se.forEach(function (he) {
        l.push(he.id),
          (o[he.id] = {
            deps: [],
            location: k,
            type: ns(he.messages[0].meta[1][0].data),
          });
      });
    }
  }),
    l.sort(function (U, R) {
      return U - R;
    });
  var u = l
    .filter(function (U) {
      return U > 1;
    })
    .map(function (U) {
      return [U, pt(U)];
    });
  c.FileIndex.map(function (U, R) {
    return [U, c.FullPaths[R]];
  }).forEach(function (U) {
    var R = U[0];
    if ((U[1], !!R.name.match(/\.iwa/))) {
      var k = Ln(Nn(R.content));
      k.forEach(function (z) {
        z.messages.forEach(function (re) {
          u.forEach(function (Se) {
            z.messages.some(function (he) {
              return ns(he.meta[1][0].data) != 11006 && BC(he.data, Se[1]);
            }) && o[Se[0]].deps.push(z.id);
          });
        });
      });
    }
  });
  for (
    var f = yt.find(c, o[1].location), d = Ln(Nn(f.content)), h, m = 0;
    m < d.length;
    ++m
  ) {
    var p = d[m];
    p.id == 1 && (h = p);
  }
  var x = ya(rr(h.messages[0].data)[1][0].data);
  for (
    f = yt.find(c, o[x].location), d = Ln(Nn(f.content)), m = 0;
    m < d.length;
    ++m
  )
    (p = d[m]), p.id == x && (h = p);
  for (
    x = ya(rr(h.messages[0].data)[2][0].data),
      f = yt.find(c, o[x].location),
      d = Ln(Nn(f.content)),
      m = 0;
    m < d.length;
    ++m
  )
    (p = d[m]), p.id == x && (h = p);
  for (
    x = ya(rr(h.messages[0].data)[2][0].data),
      f = yt.find(c, o[x].location),
      d = Ln(Nn(f.content)),
      m = 0;
    m < d.length;
    ++m
  )
    (p = d[m]), p.id == x && (h = p);
  var _ = rr(h.messages[0].data);
  {
    (_[6][0].data = pt(n.e.r + 1)), (_[7][0].data = pt(n.e.c + 1));
    var v = ya(_[46][0].data),
      g = yt.find(c, o[v].location),
      S = Ln(Nn(g.content));
    {
      for (var b = 0; b < S.length && S[b].id != v; ++b);
      if (S[b].id != v) throw "Bad ColumnRowUIDMapArchive";
      var C = rr(S[b].messages[0].data);
      (C[1] = []), (C[2] = []), (C[3] = []);
      for (var D = 0; D <= n.e.c; ++D) {
        var A = [];
        (A[1] = A[2] = [{ type: 0, data: pt(D + 420690) }]),
          C[1].push({ type: 2, data: hr(A) }),
          C[2].push({ type: 0, data: pt(D) }),
          C[3].push({ type: 0, data: pt(D) });
      }
      (C[4] = []), (C[5] = []), (C[6] = []);
      for (var F = 0; F <= n.e.r; ++F)
        (A = []),
          (A[1] = A[2] = [{ type: 0, data: pt(F + 726270) }]),
          C[4].push({ type: 2, data: hr(A) }),
          C[5].push({ type: 0, data: pt(F) }),
          C[6].push({ type: 0, data: pt(F) });
      S[b].messages[0].data = hr(C);
    }
    (g.content = ki(Fi(S))), (g.size = g.content.length), delete _[46];
    var I = rr(_[4][0].data);
    {
      I[7][0].data = pt(n.e.r + 1);
      var P = rr(I[1][0].data),
        B = ya(P[2][0].data);
      (g = yt.find(c, o[B].location)), (S = Ln(Nn(g.content)));
      {
        if (S[0].id != B) throw "Bad HeaderStorageBucket";
        var X = rr(S[0].messages[0].data);
        for (F = 0; F < i.length; ++F) {
          var ae = rr(X[2][0].data);
          (ae[1][0].data = pt(F)),
            (ae[4][0].data = pt(i[F].length)),
            (X[2][F] = { type: X[2][0].type, data: hr(ae) });
        }
        S[0].messages[0].data = hr(X);
      }
      (g.content = ki(Fi(S))), (g.size = g.content.length);
      var le = ya(I[2][0].data);
      (g = yt.find(c, o[le].location)), (S = Ln(Nn(g.content)));
      {
        if (S[0].id != le) throw "Bad HeaderStorageBucket";
        for (X = rr(S[0].messages[0].data), D = 0; D <= n.e.c; ++D)
          (ae = rr(X[2][0].data)),
            (ae[1][0].data = pt(D)),
            (ae[4][0].data = pt(n.e.r + 1)),
            (X[2][D] = { type: X[2][0].type, data: hr(ae) });
        S[0].messages[0].data = hr(X);
      }
      (g.content = ki(Fi(S))), (g.size = g.content.length);
      var Re = ya(I[4][0].data);
      (function () {
        for (
          var U = yt.find(c, o[Re].location), R = Ln(Nn(U.content)), k, z = 0;
          z < R.length;
          ++z
        ) {
          var re = R[z];
          re.id == Re && (k = re);
        }
        var Se = rr(k.messages[0].data);
        {
          Se[3] = [];
          var he = [];
          s.forEach(function (je, be) {
            (he[1] = [{ type: 0, data: pt(be) }]),
              (he[2] = [{ type: 0, data: pt(1) }]),
              (he[3] = [{ type: 2, data: bC(je) }]),
              Se[3].push({ type: 2, data: hr(he) });
          });
        }
        k.messages[0].data = hr(Se);
        var ve = Fi(R),
          He = ki(ve);
        (U.content = He), (U.size = U.content.length);
      })();
      var Ae = rr(I[3][0].data);
      {
        var se = Ae[1][0];
        delete Ae[2];
        var ye = rr(se.data);
        {
          var ge = ya(ye[2][0].data);
          (function () {
            for (
              var U = yt.find(c, o[ge].location),
                R = Ln(Nn(U.content)),
                k,
                z = 0;
              z < R.length;
              ++z
            ) {
              var re = R[z];
              re.id == ge && (k = re);
            }
            var Se = rr(k.messages[0].data);
            {
              delete Se[6], delete Ae[7];
              var he = new Uint8Array(Se[5][0].data);
              Se[5] = [];
              for (var ve = 0, He = 0; He <= n.e.r; ++He) {
                var je = rr(he);
                (ve += $C(je, i[He], s)),
                  (je[1][0].data = pt(He)),
                  Se[5].push({ data: hr(je), type: 2 });
              }
              (Se[1] = [{ type: 0, data: pt(n.e.c + 1) }]),
                (Se[2] = [{ type: 0, data: pt(n.e.r + 1) }]),
                (Se[3] = [{ type: 0, data: pt(ve) }]),
                (Se[4] = [{ type: 0, data: pt(n.e.r + 1) }]);
            }
            k.messages[0].data = hr(Se);
            var be = Fi(R),
              Oe = ki(be);
            (U.content = Oe), (U.size = U.content.length);
          })();
        }
        se.data = hr(ye);
      }
      I[3][0].data = hr(Ae);
    }
    _[4][0].data = hr(I);
  }
  h.messages[0].data = hr(_);
  var oe = Fi(d),
    O = ki(oe);
  return (f.content = O), (f.size = f.content.length), c;
}
function WC(e) {
  return function (r) {
    for (var n = 0; n != e.length; ++n) {
      var a = e[n];
      r[a[0]] === void 0 && (r[a[0]] = a[1]),
        a[2] === "n" && (r[a[0]] = Number(r[a[0]]));
    }
  };
}
function nd(e) {
  WC([
    ["cellDates", !1],
    ["bookSST", !1],
    ["bookType", "xlsx"],
    ["compression", !1],
    ["WTF", !1],
  ])(e);
}
function VC(e, t) {
  return t.bookType == "ods"
    ? Wg(e, t)
    : t.bookType == "numbers"
      ? HC(e, t)
      : t.bookType == "xlsb"
        ? zC(e, t)
        : GC(e, t);
}
function zC(e, t) {
  (Yi = 1024),
    e && !e.SSF && (e.SSF = Xr(Ut)),
    e &&
      e.SSF &&
      (Bc(),
      bc(e.SSF),
      (t.revssf = jc(e.SSF)),
      (t.revssf[e.SSF[65535]] = 0),
      (t.ssf = e.SSF)),
    (t.rels = {}),
    (t.wbrels = {}),
    (t.Strings = []),
    (t.Strings.Count = 0),
    (t.Strings.Unique = 0),
    to
      ? (t.revStrings = new Map())
      : ((t.revStrings = {}), (t.revStrings.foo = []), delete t.revStrings.foo);
  var r = t.bookType == "xlsb" ? "bin" : "xml",
    n = Ag.indexOf(t.bookType) > -1,
    a = eg();
  nd((t = t || {}));
  var i = $0(),
    s = "",
    o = 0;
  if (
    ((t.cellXfs = []),
    Ka(t.cellXfs, {}, { revssf: { General: 0 } }),
    e.Props || (e.Props = {}),
    (s = "docProps/core.xml"),
    tt(i, s, ag(e.Props, t)),
    a.coreprops.push(s),
    mt(t.rels, 2, s, ut.CORE_PROPS),
    (s = "docProps/app.xml"),
    !(e.Props && e.Props.SheetNames))
  )
    if (!e.Workbook || !e.Workbook.Sheets) e.Props.SheetNames = e.SheetNames;
    else {
      for (var l = [], c = 0; c < e.SheetNames.length; ++c)
        (e.Workbook.Sheets[c] || {}).Hidden != 2 && l.push(e.SheetNames[c]);
      e.Props.SheetNames = l;
    }
  for (
    e.Props.Worksheets = e.Props.SheetNames.length,
      tt(i, s, sg(e.Props)),
      a.extprops.push(s),
      mt(t.rels, 3, s, ut.EXT_PROPS),
      e.Custprops !== e.Props &&
        yr(e.Custprops || {}).length > 0 &&
        ((s = "docProps/custom.xml"),
        tt(i, s, og(e.Custprops)),
        a.custprops.push(s),
        mt(t.rels, 4, s, ut.CUST_PROPS)),
      o = 1;
    o <= e.SheetNames.length;
    ++o
  ) {
    var u = { "!id": {} },
      f = e.Sheets[e.SheetNames[o - 1]],
      d = (f || {})["!type"] || "sheet";
    switch (d) {
      case "chart":
      default:
        (s = "xl/worksheets/sheet" + o + "." + r),
          tt(i, s, K4(o - 1, s, t, e, u)),
          a.sheets.push(s),
          mt(t.wbrels, -1, "worksheets/sheet" + o + "." + r, ut.WS[0]);
    }
    if (f) {
      var h = f["!comments"],
        m = !1,
        p = "";
      h &&
        h.length > 0 &&
        ((p = "xl/comments" + o + "." + r),
        tt(i, p, J4(h, p)),
        a.comments.push(p),
        mt(u, -1, "../comments" + o + "." + r, ut.CMNT),
        (m = !0)),
        f["!legacy"] &&
          m &&
          tt(i, "xl/drawings/vmlDrawing" + o + ".vml", Sg(o, f["!comments"])),
        delete f["!comments"],
        delete f["!legacy"];
    }
    u["!id"].rId1 && tt(i, rg(s), ts(u));
  }
  return (
    t.Strings != null &&
      t.Strings.length > 0 &&
      ((s = "xl/sharedStrings." + r),
      tt(i, s, Q4(t.Strings, s, t)),
      a.strs.push(s),
      mt(t.wbrels, -1, "sharedStrings." + r, ut.SST)),
    (s = "xl/workbook." + r),
    tt(i, s, Y4(e, s)),
    a.workbooks.push(s),
    mt(t.rels, 1, s, ut.WB),
    (s = "xl/theme/theme1.xml"),
    tt(i, s, yg(e.Themes, t)),
    a.themes.push(s),
    mt(t.wbrels, -1, "theme/theme1.xml", ut.THEME),
    (s = "xl/styles." + r),
    tt(i, s, X4(e, s, t)),
    a.styles.push(s),
    mt(t.wbrels, -1, "styles." + r, ut.STY),
    e.vbaraw &&
      n &&
      ((s = "xl/vbaProject.bin"),
      tt(i, s, e.vbaraw),
      a.vba.push(s),
      mt(t.wbrels, -1, "vbaProject.bin", ut.VBA)),
    (s = "xl/metadata." + r),
    tt(i, s, Z4(s)),
    a.metadata.push(s),
    mt(t.wbrels, -1, "metadata." + r, ut.XLMETA),
    tt(i, "[Content_Types].xml", tg(a, t)),
    tt(i, "_rels/.rels", ts(t.rels)),
    tt(i, "xl/_rels/workbook." + r + ".rels", ts(t.wbrels)),
    delete t.revssf,
    delete t.ssf,
    i
  );
}
function GC(e, t) {
  (Yi = 1024),
    e && !e.SSF && (e.SSF = Xr(Ut)),
    e &&
      e.SSF &&
      (Bc(),
      bc(e.SSF),
      (t.revssf = jc(e.SSF)),
      (t.revssf[e.SSF[65535]] = 0),
      (t.ssf = e.SSF)),
    (t.rels = {}),
    (t.wbrels = {}),
    (t.Strings = []),
    (t.Strings.Count = 0),
    (t.Strings.Unique = 0),
    to
      ? (t.revStrings = new Map())
      : ((t.revStrings = {}), (t.revStrings.foo = []), delete t.revStrings.foo);
  var r = "xml",
    n = Ag.indexOf(t.bookType) > -1,
    a = eg();
  nd((t = t || {}));
  var i = $0(),
    s = "",
    o = 0;
  if (
    ((t.cellXfs = []),
    Ka(t.cellXfs, {}, { revssf: { General: 0 } }),
    e.Props || (e.Props = {}),
    (s = "docProps/core.xml"),
    tt(i, s, ag(e.Props, t)),
    a.coreprops.push(s),
    mt(t.rels, 2, s, ut.CORE_PROPS),
    (s = "docProps/app.xml"),
    !(e.Props && e.Props.SheetNames))
  )
    if (!e.Workbook || !e.Workbook.Sheets) e.Props.SheetNames = e.SheetNames;
    else {
      for (var l = [], c = 0; c < e.SheetNames.length; ++c)
        (e.Workbook.Sheets[c] || {}).Hidden != 2 && l.push(e.SheetNames[c]);
      e.Props.SheetNames = l;
    }
  (e.Props.Worksheets = e.Props.SheetNames.length),
    tt(i, s, sg(e.Props)),
    a.extprops.push(s),
    mt(t.rels, 3, s, ut.EXT_PROPS),
    e.Custprops !== e.Props &&
      yr(e.Custprops || {}).length > 0 &&
      ((s = "docProps/custom.xml"),
      tt(i, s, og(e.Custprops)),
      a.custprops.push(s),
      mt(t.rels, 4, s, ut.CUST_PROPS));
  var u = ["SheetJ5"];
  for (t.tcid = 0, o = 1; o <= e.SheetNames.length; ++o) {
    var f = { "!id": {} },
      d = e.Sheets[e.SheetNames[o - 1]],
      h = (d || {})["!type"] || "sheet";
    switch (h) {
      case "chart":
      default:
        (s = "xl/worksheets/sheet" + o + "." + r),
          tt(i, s, Ig(o - 1, t, e, f)),
          a.sheets.push(s),
          mt(t.wbrels, -1, "worksheets/sheet" + o + "." + r, ut.WS[0]);
    }
    if (d) {
      var m = d["!comments"],
        p = !1,
        x = "";
      if (m && m.length > 0) {
        var _ = !1;
        m.forEach(function (v) {
          v[1].forEach(function (g) {
            g.T == !0 && (_ = !0);
          });
        }),
          _ &&
            ((x = "xl/threadedComments/threadedComment" + o + "." + r),
            tt(i, x, SS(m, u, t)),
            a.threadedcomments.push(x),
            mt(
              f,
              -1,
              "../threadedComments/threadedComment" + o + "." + r,
              ut.TCMNT,
            )),
          (x = "xl/comments" + o + "." + r),
          tt(i, x, Tg(m)),
          a.comments.push(x),
          mt(f, -1, "../comments" + o + "." + r, ut.CMNT),
          (p = !0);
      }
      d["!legacy"] &&
        p &&
        tt(i, "xl/drawings/vmlDrawing" + o + ".vml", Sg(o, d["!comments"])),
        delete d["!comments"],
        delete d["!legacy"];
    }
    f["!id"].rId1 && tt(i, rg(s), ts(f));
  }
  return (
    t.Strings != null &&
      t.Strings.length > 0 &&
      ((s = "xl/sharedStrings." + r),
      tt(i, s, mg(t.Strings, t)),
      a.strs.push(s),
      mt(t.wbrels, -1, "sharedStrings." + r, ut.SST)),
    (s = "xl/workbook." + r),
    tt(i, s, bg(e)),
    a.workbooks.push(s),
    mt(t.rels, 1, s, ut.WB),
    (s = "xl/theme/theme1.xml"),
    tt(i, s, yg(e.Themes, t)),
    a.themes.push(s),
    mt(t.wbrels, -1, "theme/theme1.xml", ut.THEME),
    (s = "xl/styles." + r),
    tt(i, s, _g(e, t)),
    a.styles.push(s),
    mt(t.wbrels, -1, "styles." + r, ut.STY),
    e.vbaraw &&
      n &&
      ((s = "xl/vbaProject.bin"),
      tt(i, s, e.vbaraw),
      a.vba.push(s),
      mt(t.wbrels, -1, "vbaProject.bin", ut.VBA)),
    (s = "xl/metadata." + r),
    tt(i, s, wg()),
    a.metadata.push(s),
    mt(t.wbrels, -1, "metadata." + r, ut.XLMETA),
    u.length > 1 &&
      ((s = "xl/persons/person.xml"),
      tt(i, s, TS(u)),
      a.people.push(s),
      mt(t.wbrels, -1, "persons/person.xml", ut.PEOPLE)),
    tt(i, "[Content_Types].xml", tg(a, t)),
    tt(i, "_rels/.rels", ts(t.rels)),
    tt(i, "xl/_rels/workbook." + r + ".rels", ts(t.wbrels)),
    delete t.revssf,
    delete t.ssf,
    i
  );
}
function YC(e, t) {
  var r = "";
  switch ((t || {}).type || "base64") {
    case "buffer":
      return [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7]];
    case "base64":
      r = fa(e.slice(0, 12));
      break;
    case "binary":
      r = e;
      break;
    case "array":
      return [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7]];
    default:
      throw new Error("Unrecognized type " + ((t && t.type) || "undefined"));
  }
  return [
    r.charCodeAt(0),
    r.charCodeAt(1),
    r.charCodeAt(2),
    r.charCodeAt(3),
    r.charCodeAt(4),
    r.charCodeAt(5),
    r.charCodeAt(6),
    r.charCodeAt(7),
  ];
}
function Vg(e, t) {
  switch (t.type) {
    case "base64":
    case "binary":
      break;
    case "buffer":
    case "array":
      t.type = "";
      break;
    case "file":
      return Po(t.file, yt.write(e, { type: ft ? "buffer" : "" }));
    case "string":
      throw new Error(
        "'string' output type invalid for '" + t.bookType + "' files",
      );
    default:
      throw new Error("Unrecognized type " + t.type);
  }
  return yt.write(e, t);
}
function KC(e, t) {
  var r = Xr(t || {}),
    n = VC(e, r);
  return XC(n, r);
}
function XC(e, t) {
  var r = {},
    n = ft ? "nodebuffer" : typeof Uint8Array < "u" ? "array" : "string";
  if ((t.compression && (r.compression = "DEFLATE"), t.password)) r.type = n;
  else
    switch (t.type) {
      case "base64":
        r.type = "base64";
        break;
      case "binary":
        r.type = "string";
        break;
      case "string":
        throw new Error(
          "'string' output type invalid for '" + t.bookType + "' files",
        );
      case "buffer":
      case "file":
        r.type = n;
        break;
      default:
        throw new Error("Unrecognized type " + t.type);
    }
  var a = e.FullPaths
    ? yt.write(e, {
        fileType: "zip",
        type: { nodebuffer: "buffer", string: "binary" }[r.type] || r.type,
        compression: !!t.compression,
      })
    : e.generate(r);
  if (typeof Deno < "u" && typeof a == "string") {
    if (t.type == "binary" || t.type == "base64") return a;
    a = new Uint8Array(Mc(a));
  }
  return t.password && typeof encrypt_agile < "u"
    ? Vg(encrypt_agile(a, t.password), t)
    : t.type === "file"
      ? Po(t.file, a)
      : t.type == "string"
        ? Js(a)
        : a;
}
function QC(e, t) {
  var r = t || {},
    n = dC(e, r);
  return Vg(n, r);
}
function Gn(e, t, r) {
  r || (r = "");
  var n = r + e;
  switch (t.type) {
    case "base64":
      return yo(So(n));
    case "binary":
      return So(n);
    case "string":
      return e;
    case "file":
      return Po(t.file, n, "utf8");
    case "buffer":
      return ft
        ? pa(n, "utf8")
        : typeof TextEncoder < "u"
          ? new TextEncoder().encode(n)
          : Gn(n, { type: "binary" })
              .split("")
              .map(function (a) {
                return a.charCodeAt(0);
              });
  }
  throw new Error("Unrecognized type " + t.type);
}
function JC(e, t) {
  switch (t.type) {
    case "base64":
      return yo(e);
    case "binary":
      return e;
    case "string":
      return e;
    case "file":
      return Po(t.file, e, "binary");
    case "buffer":
      return ft
        ? pa(e, "binary")
        : e.split("").map(function (r) {
            return r.charCodeAt(0);
          });
  }
  throw new Error("Unrecognized type " + t.type);
}
function gl(e, t) {
  switch (t.type) {
    case "string":
    case "base64":
    case "binary":
      for (var r = "", n = 0; n < e.length; ++n) r += String.fromCharCode(e[n]);
      return t.type == "base64" ? yo(r) : t.type == "string" ? Js(r) : r;
    case "file":
      return Po(t.file, e);
    case "buffer":
      return e;
    default:
      throw new Error("Unrecognized type " + t.type);
  }
}
function zg(e, t) {
  A2(), M4(e);
  var r = Xr(t || {});
  if (
    (r.cellStyles && ((r.cellNF = !0), (r.sheetStubs = !0)), r.type == "array")
  ) {
    r.type = "binary";
    var n = zg(e, r);
    return (r.type = "array"), Mc(n);
  }
  var a = 0;
  if (
    r.sheet &&
    (typeof r.sheet == "number"
      ? (a = r.sheet)
      : (a = e.SheetNames.indexOf(r.sheet)),
    !e.SheetNames[a])
  )
    throw new Error("Sheet not found: " + r.sheet + " : " + typeof r.sheet);
  switch (r.bookType || "xlsb") {
    case "xml":
    case "xlml":
      return Gn(uC(e, r), r);
    case "slk":
    case "sylk":
      return Gn(Ow.from_sheet(e.Sheets[e.SheetNames[a]], r), r);
    case "htm":
    case "html":
      return Gn(Ug(e.Sheets[e.SheetNames[a]], r), r);
    case "txt":
      return JC(Gg(e.Sheets[e.SheetNames[a]], r), r);
    case "csv":
      return Gn(ad(e.Sheets[e.SheetNames[a]], r), r, "\uFEFF");
    case "dif":
      return Gn(Iw.from_sheet(e.Sheets[e.SheetNames[a]], r), r);
    case "dbf":
      return gl(Rw.from_sheet(e.Sheets[e.SheetNames[a]], r), r);
    case "prn":
      return Gn(Pw.from_sheet(e.Sheets[e.SheetNames[a]], r), r);
    case "rtf":
      return Gn(Hw.from_sheet(e.Sheets[e.SheetNames[a]], r), r);
    case "eth":
      return Gn(pg.from_sheet(e.Sheets[e.SheetNames[a]], r), r);
    case "fods":
      return Gn(Wg(e, r), r);
    case "wk1":
      return gl(yp.sheet_to_wk1(e.Sheets[e.SheetNames[a]], r), r);
    case "wk3":
      return gl(yp.book_to_wk3(e, r), r);
    case "biff2":
      r.biff || (r.biff = 2);
    case "biff3":
      r.biff || (r.biff = 3);
    case "biff4":
      return r.biff || (r.biff = 4), gl(jg(e, r), r);
    case "biff5":
      r.biff || (r.biff = 5);
    case "biff8":
    case "xla":
    case "xls":
      return r.biff || (r.biff = 8), QC(e, r);
    case "xlsx":
    case "xlsm":
    case "xlam":
    case "xlsb":
    case "numbers":
    case "ods":
      return KC(e, r);
    default:
      throw new Error("Unrecognized bookType |" + r.bookType + "|");
  }
}
function ZC(e) {
  if (!e.bookType) {
    var t = {
        xls: "biff8",
        htm: "html",
        slk: "sylk",
        socialcalc: "eth",
        Sh33tJS: "WTF",
      },
      r = e.file.slice(e.file.lastIndexOf(".")).toLowerCase();
    r.match(/^\.[a-z]+$/) && (e.bookType = r.slice(1)),
      (e.bookType = t[e.bookType] || e.bookType);
  }
}
function qC(e, t, r) {
  var n = {};
  return (n.type = "file"), (n.file = t), ZC(n), zg(e, n);
}
function e3(e, t, r, n, a, i, s, o) {
  var l = _r(r),
    c = o.defval,
    u = o.raw || !Object.prototype.hasOwnProperty.call(o, "raw"),
    f = !0,
    d = a === 1 ? [] : {};
  if (a !== 1)
    if (Object.defineProperty)
      try {
        Object.defineProperty(d, "__rowNum__", { value: r, enumerable: !1 });
      } catch {
        d.__rowNum__ = r;
      }
    else d.__rowNum__ = r;
  if (!s || e[r])
    for (var h = t.s.c; h <= t.e.c; ++h) {
      var m = s ? e[r][h] : e[n[h] + l];
      if (m === void 0 || m.t === void 0) {
        if (c === void 0) continue;
        i[h] != null && (d[i[h]] = c);
        continue;
      }
      var p = m.v;
      switch (m.t) {
        case "z":
          if (p == null) break;
          continue;
        case "e":
          p = p == 0 ? null : void 0;
          break;
        case "s":
        case "d":
        case "b":
        case "n":
          break;
        default:
          throw new Error("unrecognized type " + m.t);
      }
      if (i[h] != null) {
        if (p == null)
          if (m.t == "e" && p === null) d[i[h]] = null;
          else if (c !== void 0) d[i[h]] = c;
          else if (u && p === null) d[i[h]] = null;
          else continue;
        else
          d[i[h]] =
            u && (m.t !== "n" || (m.t === "n" && o.rawNumbers !== !1))
              ? p
              : da(m, p, o);
        p != null && (f = !1);
      }
    }
  return { row: d, isempty: f };
}
function vc(e, t) {
  if (e == null || e["!ref"] == null) return [];
  var r = { t: "n", v: 0 },
    n = 0,
    a = 1,
    i = [],
    s = 0,
    o = "",
    l = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } },
    c = t || {},
    u = c.range != null ? c.range : e["!ref"];
  switch (
    (c.header === 1
      ? (n = 1)
      : c.header === "A"
        ? (n = 2)
        : Array.isArray(c.header)
          ? (n = 3)
          : c.header == null && (n = 0),
    typeof u)
  ) {
    case "string":
      l = Ft(u);
      break;
    case "number":
      (l = Ft(e["!ref"])), (l.s.r = u);
      break;
    default:
      l = u;
  }
  n > 0 && (a = 0);
  var f = _r(l.s.r),
    d = [],
    h = [],
    m = 0,
    p = 0,
    x = Array.isArray(e),
    _ = l.s.r,
    v = 0,
    g = {};
  x && !e[_] && (e[_] = []);
  var S = (c.skipHidden && e["!cols"]) || [],
    b = (c.skipHidden && e["!rows"]) || [];
  for (v = l.s.c; v <= l.e.c; ++v)
    if (!(S[v] || {}).hidden)
      switch (((d[v] = Ar(v)), (r = x ? e[_][v] : e[d[v] + f]), n)) {
        case 1:
          i[v] = v - l.s.c;
          break;
        case 2:
          i[v] = d[v];
          break;
        case 3:
          i[v] = c.header[v - l.s.c];
          break;
        default:
          if (
            (r == null && (r = { w: "__EMPTY", t: "s" }),
            (o = s = da(r, null, c)),
            (p = g[s] || 0),
            !p)
          )
            g[s] = 1;
          else {
            do o = s + "_" + p++;
            while (g[o]);
            (g[s] = p), (g[o] = 1);
          }
          i[v] = o;
      }
  for (_ = l.s.r + a; _ <= l.e.r; ++_)
    if (!(b[_] || {}).hidden) {
      var C = e3(e, l, _, d, n, i, x, c);
      (C.isempty === !1 || (n === 1 ? c.blankrows !== !1 : c.blankrows)) &&
        (h[m++] = C.row);
    }
  return (h.length = m), h;
}
var Np = /"/g;
function t3(e, t, r, n, a, i, s, o) {
  for (var l = !0, c = [], u = "", f = _r(r), d = t.s.c; d <= t.e.c; ++d)
    if (n[d]) {
      var h = o.dense ? (e[r] || [])[d] : e[n[d] + f];
      if (h == null) u = "";
      else if (h.v != null) {
        (l = !1),
          (u = "" + (o.rawNumbers && h.t == "n" ? h.v : da(h, null, o)));
        for (var m = 0, p = 0; m !== u.length; ++m)
          if (
            (p = u.charCodeAt(m)) === a ||
            p === i ||
            p === 34 ||
            o.forceQuotes
          ) {
            u = '"' + u.replace(Np, '""') + '"';
            break;
          }
        u == "ID" && (u = '"ID"');
      } else
        h.f != null && !h.F
          ? ((l = !1),
            (u = "=" + h.f),
            u.indexOf(",") >= 0 && (u = '"' + u.replace(Np, '""') + '"'))
          : (u = "");
      c.push(u);
    }
  return o.blankrows === !1 && l ? null : c.join(s);
}
function ad(e, t) {
  var r = [],
    n = t ?? {};
  if (e == null || e["!ref"] == null) return "";
  var a = Ft(e["!ref"]),
    i = n.FS !== void 0 ? n.FS : ",",
    s = i.charCodeAt(0),
    o =
      n.RS !== void 0
        ? n.RS
        : `
`,
    l = o.charCodeAt(0),
    c = new RegExp((i == "|" ? "\\|" : i) + "+$"),
    u = "",
    f = [];
  n.dense = Array.isArray(e);
  for (
    var d = (n.skipHidden && e["!cols"]) || [],
      h = (n.skipHidden && e["!rows"]) || [],
      m = a.s.c;
    m <= a.e.c;
    ++m
  )
    (d[m] || {}).hidden || (f[m] = Ar(m));
  for (var p = 0, x = a.s.r; x <= a.e.r; ++x)
    (h[x] || {}).hidden ||
      ((u = t3(e, a, x, f, s, l, i, n)),
      u != null &&
        (n.strip && (u = u.replace(c, "")),
        (u || n.blankrows !== !1) && r.push((p++ ? o : "") + u)));
  return delete n.dense, r.join("");
}
function Gg(e, t) {
  t || (t = {}),
    (t.FS = "	"),
    (t.RS = `
`);
  var r = ad(e, t);
  return r;
}
function r3(e) {
  var t = "",
    r,
    n = "";
  if (e == null || e["!ref"] == null) return [];
  var a = Ft(e["!ref"]),
    i = "",
    s = [],
    o,
    l = [],
    c = Array.isArray(e);
  for (o = a.s.c; o <= a.e.c; ++o) s[o] = Ar(o);
  for (var u = a.s.r; u <= a.e.r; ++u)
    for (i = _r(u), o = a.s.c; o <= a.e.c; ++o)
      if (
        ((t = s[o] + i),
        (r = c ? (e[u] || [])[o] : e[t]),
        (n = ""),
        r !== void 0)
      ) {
        if (r.F != null) {
          if (((t = r.F), !r.f)) continue;
          (n = r.f), t.indexOf(":") == -1 && (t = t + ":" + t);
        }
        if (r.f != null) n = r.f;
        else {
          if (r.t == "z") continue;
          if (r.t == "n" && r.v != null) n = "" + r.v;
          else if (r.t == "b") n = r.v ? "TRUE" : "FALSE";
          else if (r.w !== void 0) n = "'" + r.w;
          else {
            if (r.v === void 0) continue;
            r.t == "s" ? (n = "'" + r.v) : (n = "" + r.v);
          }
        }
        l[l.length] = t + "=" + n;
      }
  return l;
}
function Yg(e, t, r) {
  var n = r || {},
    a = +!n.skipHeader,
    i = e || {},
    s = 0,
    o = 0;
  if (i && n.origin != null)
    if (typeof n.origin == "number") s = n.origin;
    else {
      var l = typeof n.origin == "string" ? or(n.origin) : n.origin;
      (s = l.r), (o = l.c);
    }
  var c,
    u = { s: { c: 0, r: 0 }, e: { c: o, r: s + t.length - 1 + a } };
  if (i["!ref"]) {
    var f = Ft(i["!ref"]);
    (u.e.c = Math.max(u.e.c, f.e.c)),
      (u.e.r = Math.max(u.e.r, f.e.r)),
      s == -1 && ((s = f.e.r + 1), (u.e.r = s + t.length - 1 + a));
  } else s == -1 && ((s = 0), (u.e.r = t.length - 1 + a));
  var d = n.header || [],
    h = 0;
  t.forEach(function (p, x) {
    yr(p).forEach(function (_) {
      (h = d.indexOf(_)) == -1 && (d[(h = d.length)] = _);
      var v = p[_],
        g = "z",
        S = "",
        b = xt({ c: o + h, r: s + x + a });
      (c = Co(i, b)),
        v && typeof v == "object" && !(v instanceof Date)
          ? (i[b] = v)
          : (typeof v == "number"
              ? (g = "n")
              : typeof v == "boolean"
                ? (g = "b")
                : typeof v == "string"
                  ? (g = "s")
                  : v instanceof Date
                    ? ((g = "d"),
                      n.cellDates || ((g = "n"), (v = Kr(v))),
                      (S = n.dateNF || Ut[14]))
                    : v === null && n.nullError && ((g = "e"), (v = 0)),
            c
              ? ((c.t = g), (c.v = v), delete c.w, delete c.R, S && (c.z = S))
              : (i[b] = c = { t: g, v }),
            S && (c.z = S));
    });
  }),
    (u.e.c = Math.max(u.e.c, o + d.length - 1));
  var m = _r(s);
  if (a) for (h = 0; h < d.length; ++h) i[Ar(h + o) + m] = { t: "s", v: d[h] };
  return (i["!ref"] = Jt(u)), i;
}
function n3(e, t) {
  return Yg(null, e, t);
}
function Co(e, t, r) {
  if (typeof t == "string") {
    if (Array.isArray(e)) {
      var n = or(t);
      return e[n.r] || (e[n.r] = []), e[n.r][n.c] || (e[n.r][n.c] = { t: "z" });
    }
    return e[t] || (e[t] = { t: "z" });
  }
  return typeof t != "number" ? Co(e, xt(t)) : Co(e, xt({ r: t, c: r || 0 }));
}
function a3(e, t) {
  if (typeof t == "number") {
    if (t >= 0 && e.SheetNames.length > t) return t;
    throw new Error("Cannot find sheet # " + t);
  } else if (typeof t == "string") {
    var r = e.SheetNames.indexOf(t);
    if (r > -1) return r;
    throw new Error("Cannot find sheet name |" + t + "|");
  } else throw new Error("Cannot find sheet |" + t + "|");
}
function i3() {
  return { SheetNames: [], Sheets: {} };
}
function s3(e, t, r, n) {
  var a = 1;
  if (!r)
    for (
      ;
      a <= 65535 && e.SheetNames.indexOf((r = "Sheet" + a)) != -1;
      ++a, r = void 0
    );
  if (!r || e.SheetNames.length >= 65535)
    throw new Error("Too many worksheets");
  if (n && e.SheetNames.indexOf(r) >= 0) {
    var i = r.match(/(^.*?)(\d+)$/);
    a = (i && +i[2]) || 0;
    var s = (i && i[1]) || r;
    for (++a; a <= 65535 && e.SheetNames.indexOf((r = s + a)) != -1; ++a);
  }
  if ((Mg(r), e.SheetNames.indexOf(r) >= 0))
    throw new Error("Worksheet with name |" + r + "| already exists!");
  return e.SheetNames.push(r), (e.Sheets[r] = t), r;
}
function o3(e, t, r) {
  e.Workbook || (e.Workbook = {}),
    e.Workbook.Sheets || (e.Workbook.Sheets = []);
  var n = a3(e, t);
  switch ((e.Workbook.Sheets[n] || (e.Workbook.Sheets[n] = {}), r)) {
    case 0:
    case 1:
    case 2:
      break;
    default:
      throw new Error("Bad sheet visibility setting " + r);
  }
  e.Workbook.Sheets[n].Hidden = r;
}
function l3(e, t) {
  return (e.z = t), e;
}
function Kg(e, t, r) {
  return t ? ((e.l = { Target: t }), r && (e.l.Tooltip = r)) : delete e.l, e;
}
function c3(e, t, r) {
  return Kg(e, "#" + t, r);
}
function u3(e, t, r) {
  e.c || (e.c = []), e.c.push({ t, a: r || "SheetJS" });
}
function f3(e, t, r, n) {
  for (
    var a = typeof t != "string" ? t : Ft(t),
      i = typeof t == "string" ? t : Jt(t),
      s = a.s.r;
    s <= a.e.r;
    ++s
  )
    for (var o = a.s.c; o <= a.e.c; ++o) {
      var l = Co(e, s, o);
      (l.t = "n"),
        (l.F = i),
        delete l.v,
        s == a.s.r && o == a.s.c && ((l.f = r), n && (l.D = !0));
    }
  return e;
}
var Mu = {
  encode_col: Ar,
  encode_row: _r,
  encode_cell: xt,
  encode_range: Jt,
  decode_col: Y0,
  decode_row: G0,
  split_cell: Ay,
  decode_cell: or,
  decode_range: fn,
  format_cell: da,
  sheet_add_aoa: Kv,
  sheet_add_json: Yg,
  sheet_add_dom: $g,
  aoa_to_sheet: gs,
  json_to_sheet: n3,
  table_to_sheet: Hg,
  table_to_book: IC,
  sheet_to_csv: ad,
  sheet_to_txt: Gg,
  sheet_to_json: vc,
  sheet_to_html: Ug,
  sheet_to_formulae: r3,
  sheet_to_row_object_array: vc,
  sheet_get_cell: Co,
  book_new: i3,
  book_append_sheet: s3,
  book_set_sheet_visibility: o3,
  cell_set_number_format: l3,
  cell_set_hyperlink: Kg,
  cell_set_internal_link: c3,
  cell_add_comment: u3,
  sheet_set_array_formula: f3,
  consts: { SHEET_VISIBLE: 0, SHEET_HIDDEN: 1, SHEET_VERY_HIDDEN: 2 },
};
function d3() {
  return H.jsxs(H.Fragment, {
    children: [
      H.jsx("div", {
        className: "usa-banner",
        "aria-label": "Official website of the United States government",
        children: H.jsxs("div", {
          className: "usa-accordion",
          children: [
            H.jsx("header", {
              className: "usa-banner__header",
              children: H.jsxs("div", {
                className: "usa-banner__inner",
                children: [
                  H.jsx("div", {
                    className: "grid-col-auto",
                    children: H.jsx("img", {
                      "aria-hidden": "true",
                      className: "usa-banner__header-flag",
                      src: "/ppp/img/usa-icons/us_flag_small.png",
                      alt: "",
                    }),
                  }),
                  H.jsxs("div", {
                    className: "grid-col-fill tablet:grid-col-auto",
                    "aria-hidden": "true",
                    children: [
                      H.jsx("p", {
                        className: "usa-banner__header-text",
                        children:
                          "An official website of the United States government",
                      }),
                      H.jsx("p", {
                        className: "usa-banner__header-action",
                        children: "Here’s how you know",
                      }),
                    ],
                  }),
                  H.jsx("button", {
                    type: "button",
                    className: "usa-accordion__button usa-banner__button",
                    "aria-expanded": "false",
                    "aria-controls": "gov-banner-default",
                    children: H.jsx("span", {
                      className: "usa-banner__button-text",
                      children: "Here’s how you know",
                    }),
                  }),
                ],
              }),
            }),
            H.jsx("div", {
              className: "usa-banner__content usa-accordion__content",
              id: "gov-banner-default",
              hidden: !0,
              children: H.jsxs("div", {
                className: "grid-row grid-gap-lg",
                children: [
                  H.jsxs("div", {
                    className: "usa-banner__guidance tablet:grid-col-6",
                    children: [
                      H.jsx("img", {
                        className: "usa-banner__icon usa-media-block__img",
                        src: "/ppp/img/usa-icons/icon-dot-gov.svg",
                        role: "img",
                        alt: "",
                        "aria-hidden": "true",
                      }),
                      H.jsx("div", {
                        className: "usa-media-block__body",
                        children: H.jsxs("p", {
                          children: [
                            H.jsx("strong", {
                              children: "Official websites use .gov",
                            }),
                            H.jsx("br", {}),
                            "A",
                            H.jsx("strong", { children: ".gov" }),
                            " website belongs to an official government organization in the United States.",
                          ],
                        }),
                      }),
                    ],
                  }),
                  H.jsxs("div", {
                    className: "usa-banner__guidance tablet:grid-col-6",
                    children: [
                      H.jsx("img", {
                        className: "usa-banner__icon usa-media-block__img",
                        src: "/ppp/img/usa-icons/icon-https.svg",
                        role: "img",
                        alt: "",
                        "aria-hidden": "true",
                      }),
                      H.jsx("div", {
                        className: "usa-media-block__body",
                        children: H.jsxs("p", {
                          children: [
                            H.jsx("strong", {
                              children: "Secure .gov websites use HTTPS",
                            }),
                            H.jsx("br", {}),
                            "A",
                            H.jsx("strong", { children: "lock" }),
                            " (",
                            H.jsxs("span", {
                              className: "icon-lock",
                              children: [
                                H.jsxs("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  width: "52",
                                  height: "64",
                                  viewBox: "0 0 52 64",
                                  className: "usa-banner__lock-image",
                                  role: "img",
                                  "aria-labelledby":
                                    "banner-lock-description-default",
                                  focusable: "false",
                                  children: [
                                    H.jsx("title", {
                                      id: "banner-lock-title-default",
                                      children: "Lock",
                                    }),
                                    H.jsx("desc", {
                                      id: "banner-lock-description-default",
                                      children: "Locked padlock icon",
                                    }),
                                    H.jsx("path", {
                                      fill: "#000000",
                                      fillRule: "evenodd",
                                      d: "M26 0c10.493 0 19 8.507 19 19v9h3a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V32a4 4 0 0 1 4-4h3v-9C7 8.507 15.507 0 26 0zm0 8c-5.979 0-10.843 4.77-10.996 10.712L15 19v9h22v-9c0-6.075-4.925-11-11-11z",
                                    }),
                                  ],
                                }),
                                " ",
                              ],
                            }),
                            ") or ",
                            H.jsx("strong", { children: "https://" }),
                            " means you’ve safely connected to the .gov website. Share sensitive information only on official, secure websites.",
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
      H.jsx("div", {
        children: H.jsx("header", {
          className: "usa-header usa-header--basic margin-top-neg-1",
          children: H.jsx("div", {
            className: "usa-nav-container",
            children: H.jsxs("div", {
              className: "usa-logo display-inline-flex",
              children: [
                H.jsx("img", {
                  className: "usda-logo-img",
                  width: "70px",
                  height: "70px",
                  src: "/ppp/img/usa-icons/usda-symbol.svg",
                  alt: "USDA Logo",
                }),
                H.jsx("em", {
                  className: "usa-logo__text margin-left-2 margin-top-4",
                  children: H.jsx("a", {
                    href: "https://www.usda.gov",
                    target: "_blank",
                    title: "U.S.Department Of Agriculture",
                    children: "U.S.Department Of Agriculture",
                  }),
                }),
              ],
            }),
          }),
        }),
      }),
    ],
  });
}
function h3() {
  return H.jsxs("footer", {
    className: "usa-footer usa-footer--slim",
    children: [
      H.jsx("div", {
        className: "grid-container usa-footer__return-to-top",
        children: H.jsx("a", { href: "#", children: "Return to top" }),
      }),
      H.jsx("div", {
        className: "usa-footer__primary-section",
        children: H.jsxs("div", {
          className: "usa-footer__primary-container grid-row",
          children: [
            H.jsx("div", {
              className: "mobile-lg:grid-col-8",
              children: H.jsx("nav", {
                className: "usa-footer__nav",
                "aria-label": "Footer navigation,",
                children: H.jsxs("ul", {
                  className: "grid-row grid-gap",
                  children: [
                    H.jsx("li", {
                      className:
                        "mobile-lg:grid-col-6 desktop:grid-col-auto usa-footer__primary-content",
                      children: H.jsx("a", {
                        className: "usa-footer__primary-link",
                        href: "https://portal.wbscm.usda.gov",
                        target: "_blank",
                        children: "WBSCM",
                      }),
                    }),
                    H.jsx("li", {
                      className:
                        "mobile-lg:grid-col-6 desktop:grid-col-auto usa-footer__primary-content",
                      children: H.jsx("a", {
                        className: "usa-footer__primary-link",
                        href: "tel:1-800-555-5555",
                        target: "_blank",
                        children: "877-WBSCM-4U or 877-927-2648",
                      }),
                    }),
                    H.jsx("li", {
                      className:
                        "mobile-lg:grid-col-6 desktop:grid-col-auto usa-footer__primary-content",
                      children: H.jsx("a", {
                        className: "usa-footer__primary-link",
                        href: "mailto:WBSCM.servicedesk@caci.com",
                        target: "_blank",
                        children: "WBSCM.servicedesk@caci.com ",
                      }),
                    }),
                  ],
                }),
              }),
            }),
            H.jsx("div", {
              className: "mobile-lg:grid-col-4",
              children: H.jsx("address", {
                className: "usa-footer__address",
                children: H.jsxs("div", {
                  className: "grid-row grid-gap",
                  children: [
                    H.jsx("div", {
                      className:
                        "grid-col-auto mobile-lg:grid-col-12 desktop:grid-col-auto",
                      children: H.jsx("div", {
                        className: "usa-footer__contact-info",
                      }),
                    }),
                    H.jsx("div", {
                      className:
                        "grid-col-auto mobile-lg:grid-col-12 desktop:grid-col-auto",
                      children: H.jsx("div", {
                        className: "usa-footer__contact-info",
                      }),
                    }),
                  ],
                }),
              }),
            }),
          ],
        }),
      }),
      H.jsx("div", {
        className: "usa-footer__secondary-section",
        children: H.jsx("div", {
          className: "grid-container",
          children: H.jsxs("div", {
            className: "usa-footer__logo grid-row grid-gap-2",
            children: [
              H.jsx("div", {
                className: "grid-col-auto",
                children: H.jsx("img", {
                  width: "50px",
                  height: "50px",
                  className: "usa-footer__logo-img",
                  src: "/ppp/img/usa-icons/usda-symbol.svg",
                  alt: "",
                }),
              }),
              H.jsx("div", {
                className: "grid-col-auto",
                children: H.jsx("p", {
                  className: "usa-footer__logo-heading margin-left-2",
                  children: "U.S Department Of Agriculture",
                }),
              }),
            ],
          }),
        }),
      }),
    ],
  });
}
(function () {
  function e(t, r, n) {
    function a(o, l) {
      if (!r[o]) {
        if (!t[o]) {
          var c = typeof require == "function" && require;
          if (!l && c) return c(o, !0);
          if (i) return i(o, !0);
          var u = new Error("Cannot find module '" + o + "'");
          throw ((u.code = "MODULE_NOT_FOUND"), u);
        }
        var f = (r[o] = { exports: {} });
        t[o][0].call(
          f.exports,
          function (d) {
            var h = t[o][1][d];
            return a(h || d);
          },
          f,
          f.exports,
          e,
          t,
          r,
          n,
        );
      }
      return r[o].exports;
    }
    for (
      var i = typeof require == "function" && require, s = 0;
      s < n.length;
      s++
    )
      a(n[s]);
    return a;
  }
  return e;
})()(
  {
    1: [
      function (e, t, r) {
        (function (n) {
          typeof n.matches != "function" &&
            (n.matches =
              n.msMatchesSelector ||
              n.mozMatchesSelector ||
              n.webkitMatchesSelector ||
              function (i) {
                for (
                  var s = this,
                    o = (s.document || s.ownerDocument).querySelectorAll(i),
                    l = 0;
                  o[l] && o[l] !== s;

                )
                  ++l;
                return !!o[l];
              }),
            typeof n.closest != "function" &&
              (n.closest = function (i) {
                for (var s = this; s && s.nodeType === 1; ) {
                  if (s.matches(i)) return s;
                  s = s.parentNode;
                }
                return null;
              });
        })(window.Element.prototype);
      },
      {},
    ],
    2: [
      function (e, t, r) {
        (function () {
          var n = {
              polyfill: s,
              keys: {
                3: "Cancel",
                6: "Help",
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
                28: "Convert",
                29: "NonConvert",
                30: "Accept",
                31: "ModeChange",
                32: " ",
                33: "PageUp",
                34: "PageDown",
                35: "End",
                36: "Home",
                37: "ArrowLeft",
                38: "ArrowUp",
                39: "ArrowRight",
                40: "ArrowDown",
                41: "Select",
                42: "Print",
                43: "Execute",
                44: "PrintScreen",
                45: "Insert",
                46: "Delete",
                48: ["0", ")"],
                49: ["1", "!"],
                50: ["2", "@"],
                51: ["3", "#"],
                52: ["4", "$"],
                53: ["5", "%"],
                54: ["6", "^"],
                55: ["7", "&"],
                56: ["8", "*"],
                57: ["9", "("],
                91: "OS",
                93: "ContextMenu",
                144: "NumLock",
                145: "ScrollLock",
                181: "VolumeMute",
                182: "VolumeDown",
                183: "VolumeUp",
                186: [";", ":"],
                187: ["=", "+"],
                188: [",", "<"],
                189: ["-", "_"],
                190: [".", ">"],
                191: ["/", "?"],
                192: ["`", "~"],
                219: ["[", "{"],
                220: ["\\", "|"],
                221: ["]", "}"],
                222: ["'", '"'],
                224: "Meta",
                225: "AltGraph",
                246: "Attn",
                247: "CrSel",
                248: "ExSel",
                249: "EraseEof",
                250: "Play",
                251: "ZoomOut",
              },
            },
            a;
          for (a = 1; a < 25; a++) n.keys[111 + a] = "F" + a;
          var i = "";
          for (a = 65; a < 91; a++)
            (i = String.fromCharCode(a)),
              (n.keys[a] = [i.toLowerCase(), i.toUpperCase()]);
          function s() {
            if (
              !("KeyboardEvent" in window) ||
              "key" in KeyboardEvent.prototype
            )
              return !1;
            var o = {
              get: function (l) {
                var c = n.keys[this.which || this.keyCode];
                return Array.isArray(c) && (c = c[+this.shiftKey]), c;
              },
            };
            return Object.defineProperty(KeyboardEvent.prototype, "key", o), o;
          }
          typeof define == "function" && define.amd
            ? define("keyboardevent-key-polyfill", n)
            : typeof r < "u" && typeof t < "u"
              ? (t.exports = n)
              : window && (window.keyboardeventKeyPolyfill = n);
        })();
      },
      {},
    ],
    3: [
      function (e, t, r) {
        var n = Object.getOwnPropertySymbols,
          a = Object.prototype.hasOwnProperty,
          i = Object.prototype.propertyIsEnumerable;
        function s(l) {
          if (l == null)
            throw new TypeError(
              "Object.assign cannot be called with null or undefined",
            );
          return Object(l);
        }
        function o() {
          try {
            if (!Object.assign) return !1;
            var l = new String("abc");
            if (((l[5] = "de"), Object.getOwnPropertyNames(l)[0] === "5"))
              return !1;
            for (var c = {}, u = 0; u < 10; u++)
              c["_" + String.fromCharCode(u)] = u;
            var f = Object.getOwnPropertyNames(c).map(function (h) {
              return c[h];
            });
            if (f.join("") !== "0123456789") return !1;
            var d = {};
            return (
              "abcdefghijklmnopqrst".split("").forEach(function (h) {
                d[h] = h;
              }),
              Object.keys(Object.assign({}, d)).join("") ===
                "abcdefghijklmnopqrst"
            );
          } catch {
            return !1;
          }
        }
        t.exports = o()
          ? Object.assign
          : function (l, c) {
              for (var u, f = s(l), d, h = 1; h < arguments.length; h++) {
                u = Object(arguments[h]);
                for (var m in u) a.call(u, m) && (f[m] = u[m]);
                if (n) {
                  d = n(u);
                  for (var p = 0; p < d.length; p++)
                    i.call(u, d[p]) && (f[d[p]] = u[d[p]]);
                }
              }
              return f;
            };
      },
      {},
    ],
    4: [
      function (e, t, r) {
        const n = e("object-assign"),
          a = e("../delegate"),
          i = e("../delegateAll"),
          s = /^(.+):delegate\((.+)\)$/,
          o = " ",
          l = function (u, f) {
            var d = u.match(s),
              h;
            d && ((u = d[1]), (h = d[2]));
            var m;
            typeof f == "object" &&
              (m = { capture: c(f, "capture"), passive: c(f, "passive") });
            var p = {
              selector: h,
              delegate: typeof f == "object" ? i(f) : h ? a(h, f) : f,
              options: m,
            };
            return u.indexOf(o) > -1
              ? u.split(o).map(function (x) {
                  return n({ type: x }, p);
                })
              : ((p.type = u), [p]);
          };
        var c = function (u, f) {
          var d = u[f];
          return delete u[f], d;
        };
        t.exports = function (f, d) {
          const h = Object.keys(f).reduce(function (m, p) {
            var x = l(p, f[p]);
            return m.concat(x);
          }, []);
          return n(
            {
              add: function (p) {
                h.forEach(function (x) {
                  p.addEventListener(x.type, x.delegate, x.options);
                });
              },
              remove: function (p) {
                h.forEach(function (x) {
                  p.removeEventListener(x.type, x.delegate, x.options);
                });
              },
            },
            d,
          );
        };
      },
      { "../delegate": 6, "../delegateAll": 7, "object-assign": 3 },
    ],
    5: [
      function (e, t, r) {
        t.exports = function (a) {
          return function (i) {
            return a.some(function (s) {
              return s.call(this, i) === !1;
            }, this);
          };
        };
      },
      {},
    ],
    6: [
      function (e, t, r) {
        e("element-closest"),
          (t.exports = function (a, i) {
            return function (o) {
              var l = o.target.closest(a);
              if (l) return i.call(l, o);
            };
          });
      },
      { "element-closest": 1 },
    ],
    7: [
      function (e, t, r) {
        const n = e("../delegate"),
          a = e("../compose"),
          i = "*";
        t.exports = function (o) {
          const l = Object.keys(o);
          if (l.length === 1 && l[0] === i) return o[i];
          const c = l.reduce(function (u, f) {
            return u.push(n(f, o[f])), u;
          }, []);
          return a(c);
        };
      },
      { "../compose": 5, "../delegate": 6 },
    ],
    8: [
      function (e, t, r) {
        t.exports = function (a, i) {
          return function (o) {
            if (a !== o.target && !a.contains(o.target)) return i.call(this, o);
          };
        };
      },
      {},
    ],
    9: [
      function (e, t, r) {
        t.exports = {
          behavior: e("./behavior"),
          delegate: e("./delegate"),
          delegateAll: e("./delegateAll"),
          ignore: e("./ignore"),
          keymap: e("./keymap"),
        };
      },
      {
        "./behavior": 4,
        "./delegate": 6,
        "./delegateAll": 7,
        "./ignore": 8,
        "./keymap": 10,
      },
    ],
    10: [
      function (e, t, r) {
        e("keyboardevent-key-polyfill");
        const n = {
            Alt: "altKey",
            Control: "ctrlKey",
            Ctrl: "ctrlKey",
            Shift: "shiftKey",
          },
          a = "+",
          i = function (s, o) {
            var l = s.key;
            if (o) for (var c in n) s[n[c]] === !0 && (l = [c, l].join(a));
            return l;
          };
        (t.exports = function (o) {
          const l = Object.keys(o).some(function (c) {
            return c.indexOf(a) > -1;
          });
          return function (c) {
            var u = i(c, l);
            return [u, u.toLowerCase()].reduce(
              function (f, d) {
                return d in o && (f = o[u].call(this, c)), f;
              },
              void 0,
            );
          };
        }),
          (t.exports.MODIFIERS = n);
      },
      { "keyboardevent-key-polyfill": 2 },
    ],
    11: [
      function (e, t, r) {
        t.exports = function (a, i) {
          var s = function (l) {
            return (
              l.currentTarget.removeEventListener(l.type, s, i), a.call(this, l)
            );
          };
          return s;
        };
      },
      {},
    ],
    12: [
      function (e, t, r) {
        var n = /(^\s+)|(\s+$)/g,
          a = /\s+/,
          i = String.prototype.trim
            ? function (o) {
                return o.trim();
              }
            : function (o) {
                return o.replace(n, "");
              },
          s = function (o) {
            return this.querySelector('[id="' + o.replace(/"/g, '\\"') + '"]');
          };
        t.exports = function (l, c) {
          if (typeof l != "string")
            throw new Error("Expected a string but got " + typeof l);
          c || (c = window.document);
          var u = c.getElementById ? c.getElementById.bind(c) : s.bind(c);
          return (
            (l = i(l).split(a)),
            l.length === 1 && l[0] === ""
              ? []
              : l.map(function (f) {
                  var d = u(f);
                  if (!d) throw new Error('no element with id: "' + f + '"');
                  return d;
                })
          );
        };
      },
      {},
    ],
    13: [
      function (e, t, r) {
        const n = e("../../uswds-core/src/js/utils/behavior"),
          a = e("../../uswds-core/src/js/utils/toggle-form-input"),
          { CLICK: i } = e("../../uswds-core/src/js/events"),
          { prefix: s } = e("../../uswds-core/src/js/config"),
          o = `.${s}-show-password`;
        function l(c) {
          c.preventDefault(), a(this);
        }
        t.exports = n({ [i]: { [o]: l } });
      },
      {
        "../../uswds-core/src/js/config": 35,
        "../../uswds-core/src/js/events": 36,
        "../../uswds-core/src/js/utils/behavior": 45,
        "../../uswds-core/src/js/utils/toggle-form-input": 55,
      },
    ],
    14: [
      function (e, t, r) {
        const n = e("../../uswds-core/src/js/utils/select"),
          a = e("../../uswds-core/src/js/utils/behavior"),
          i = e("../../uswds-core/src/js/utils/toggle"),
          s = e("../../uswds-core/src/js/utils/is-in-viewport"),
          { CLICK: o } = e("../../uswds-core/src/js/events"),
          { prefix: l } = e("../../uswds-core/src/js/config"),
          c = `.${l}-accordion, .${l}-accordion--bordered`,
          u = `.${l}-banner__button`,
          f = `.${l}-accordion__button[aria-controls]:not(${u})`,
          d = "aria-expanded",
          h = "data-allow-multiple",
          m = (g) => n(f, g).filter((b) => b.closest(c) === g),
          p = (g, S) => {
            const b = g.closest(c);
            let C = S;
            if (!b) throw new Error(`${f} is missing outer ${c}`);
            C = i(g, S);
            const D = b.hasAttribute(h);
            C &&
              !D &&
              m(b).forEach((A) => {
                A !== g && i(A, !1);
              });
          },
          x = (g) => p(g, !0),
          _ = (g) => p(g, !1),
          v = a(
            {
              [o]: {
                [f]() {
                  p(this),
                    this.getAttribute(d) === "true" &&
                      (s(this) || this.scrollIntoView());
                },
              },
            },
            {
              init(g) {
                n(f, g).forEach((S) => {
                  const b = S.getAttribute(d) === "true";
                  p(S, b);
                });
              },
              ACCORDION: c,
              BUTTON: f,
              show: x,
              hide: _,
              toggle: p,
              getButtons: m,
            },
          );
        t.exports = v;
      },
      {
        "../../uswds-core/src/js/config": 35,
        "../../uswds-core/src/js/events": 36,
        "../../uswds-core/src/js/utils/behavior": 45,
        "../../uswds-core/src/js/utils/is-in-viewport": 48,
        "../../uswds-core/src/js/utils/select": 53,
        "../../uswds-core/src/js/utils/toggle": 56,
      },
    ],
    15: [
      function (e, t, r) {
        const n = e("../../uswds-core/src/js/utils/behavior"),
          a = e("../../uswds-core/src/js/utils/select"),
          { CLICK: i } = e("../../uswds-core/src/js/events"),
          { prefix: s } = e("../../uswds-core/src/js/config"),
          o = e("../../uswds-core/src/js/utils/toggle"),
          l = `.${s}-banner__header`,
          c = `${s}-banner__header--expanded`,
          u = `${l} [aria-controls]`,
          f = function (h) {
            h.preventDefault();
            const m = h.target.closest(u);
            o(m), this.closest(l).classList.toggle(c);
          };
        t.exports = n(
          { [i]: { [u]: f } },
          {
            init(d) {
              a(u, d).forEach((h) => {
                const m = h.getAttribute(c) === "true";
                o(h, m);
              });
            },
          },
        );
      },
      {
        "../../uswds-core/src/js/config": 35,
        "../../uswds-core/src/js/events": 36,
        "../../uswds-core/src/js/utils/behavior": 45,
        "../../uswds-core/src/js/utils/select": 53,
        "../../uswds-core/src/js/utils/toggle": 56,
      },
    ],
    16: [
      function (e, t, r) {
        const n = e("receptor/keymap"),
          a = e("../../uswds-core/src/js/utils/behavior"),
          i = 'a[class*="usa-button"]',
          s = (l) => {
            l.preventDefault(), l.target.click();
          },
          o = a({ keydown: { [i]: n({ " ": s }) } });
        t.exports = o;
      },
      { "../../uswds-core/src/js/utils/behavior": 45, "receptor/keymap": 10 },
    ],
    17: [
      function (e, t, r) {
        const n = e("../../uswds-core/src/js/utils/select"),
          a = e("../../uswds-core/src/js/utils/behavior"),
          i = e("../../uswds-core/src/js/utils/debounce"),
          { prefix: s } = e("../../uswds-core/src/js/config"),
          o = `${s}-character-count`,
          l = `.${o}`,
          c = `.${s}-character-count__field`,
          u = `.${s}-character-count__message`,
          f = "The content is too long.",
          d = `${s}-character-count__status--invalid`,
          h = `${o}__status`,
          m = `${o}__sr-status`,
          p = `.${h}`,
          x = `.${m}`,
          _ = "characters allowed",
          v = (I) => {
            const P = I.closest(l);
            if (!P) throw new Error(`${c} is missing outer ${l}`);
            const B = P.querySelector(u);
            if (!B) throw new Error(`${l} is missing inner ${u}`);
            return { characterCountEl: P, messageEl: B };
          },
          g = (I) => {
            const { characterCountEl: P } = v(I),
              B = I.getAttribute("maxlength");
            B &&
              (I.removeAttribute("maxlength"),
              P.setAttribute("data-maxlength", B));
          },
          S = (I) => {
            const P = document.createElement("div"),
              B = document.createElement("div"),
              ae = `${I.dataset.maxlength} ${_}`;
            P.classList.add(`${h}`, "usa-hint"),
              B.classList.add(`${m}`, "usa-sr-only"),
              P.setAttribute("aria-hidden", !0),
              B.setAttribute("aria-live", "polite"),
              (P.textContent = ae),
              (B.textContent = ae),
              I.append(P, B);
          },
          b = (I, P) => {
            let B = "";
            if (I === 0) B = `${P} ${_}`;
            else {
              const X = Math.abs(P - I),
                ae = `character${X === 1 ? "" : "s"}`,
                le = I > P ? "over limit" : "left";
              B = `${X} ${ae} ${le}`;
            }
            return B;
          },
          C = i((I, P) => {
            const B = I;
            B.textContent = P;
          }, 1e3),
          D = (I) => {
            const { characterCountEl: P } = v(I),
              B = I.value.length,
              X = parseInt(P.getAttribute("data-maxlength"), 10),
              ae = P.querySelector(p),
              le = P.querySelector(x),
              Re = b(B, X);
            if (!X) return;
            const Ae = B && B > X;
            (ae.textContent = Re),
              C(le, Re),
              Ae && !I.validationMessage && I.setCustomValidity(f),
              !Ae && I.validationMessage === f && I.setCustomValidity(""),
              ae.classList.toggle(d, Ae);
          },
          A = (I) => {
            const { characterCountEl: P, messageEl: B } = v(I);
            B.classList.add("usa-sr-only"),
              B.removeAttribute("aria-live"),
              g(I),
              S(P);
          },
          F = a(
            {
              input: {
                [c]() {
                  D(this);
                },
              },
            },
            {
              init(I) {
                n(c, I).forEach((P) => A(P));
              },
              MESSAGE_INVALID_CLASS: d,
              VALIDATION_MESSAGE: f,
              STATUS_MESSAGE_CLASS: h,
              STATUS_MESSAGE_SR_ONLY_CLASS: m,
              DEFAULT_STATUS_LABEL: _,
              createStatusMessages: S,
              getCountMessage: b,
              updateCountMessage: D,
            },
          );
        t.exports = F;
      },
      {
        "../../uswds-core/src/js/config": 35,
        "../../uswds-core/src/js/utils/behavior": 45,
        "../../uswds-core/src/js/utils/debounce": 46,
        "../../uswds-core/src/js/utils/select": 53,
      },
    ],
    18: [
      function (e, t, r) {
        const n = e("receptor/keymap"),
          a = e("../../uswds-core/src/js/utils/select-or-matches"),
          i = e("../../uswds-core/src/js/utils/behavior"),
          s = e("../../uswds-core/src/js/utils/sanitizer"),
          { prefix: o } = e("../../uswds-core/src/js/config"),
          { CLICK: l } = e("../../uswds-core/src/js/events"),
          c = `${o}-combo-box`,
          u = `${c}--pristine`,
          f = `${c}__select`,
          d = `${c}__input`,
          h = `${c}__clear-input`,
          m = `${h}__wrapper`,
          p = `${c}__input-button-separator`,
          x = `${c}__toggle-list`,
          _ = `${x}__wrapper`,
          v = `${c}__list`,
          g = `${c}__list-option`,
          S = `${g}--focused`,
          b = `${g}--selected`,
          C = `${c}__status`,
          D = `.${c}`,
          A = `.${f}`,
          F = `.${d}`,
          I = `.${h}`,
          P = `.${x}`,
          B = `.${v}`,
          X = `.${g}`,
          ae = `.${S}`,
          le = `.${b}`,
          Re = `.${C}`,
          Ae = ".*{{query}}.*",
          se = () => {},
          ye = (_e, V = "") => {
            const ie = _e;
            ie.value = V;
            const fe = new CustomEvent("change", {
              bubbles: !0,
              cancelable: !0,
              detail: { value: V },
            });
            ie.dispatchEvent(fe);
          },
          ge = (_e) => {
            const V = _e.closest(D);
            if (!V) throw new Error(`Element is missing outer ${D}`);
            const ie = V.querySelector(A),
              fe = V.querySelector(F),
              Pe = V.querySelector(B),
              Xe = V.querySelector(Re),
              Ke = V.querySelector(ae),
              dt = V.querySelector(le),
              qe = V.querySelector(P),
              Wt = V.querySelector(I),
              Vt = V.classList.contains(u),
              zt = V.dataset.disableFiltering === "true";
            return {
              comboBoxEl: V,
              selectEl: ie,
              inputEl: fe,
              listEl: Pe,
              statusEl: Xe,
              focusedOptionEl: Ke,
              selectedOptionEl: dt,
              toggleListBtnEl: qe,
              clearInputBtnEl: Wt,
              isPristine: Vt,
              disableFiltering: zt,
            };
          },
          oe = (_e) => {
            const {
              inputEl: V,
              toggleListBtnEl: ie,
              clearInputBtnEl: fe,
            } = ge(_e);
            (fe.hidden = !0),
              (fe.disabled = !0),
              (ie.disabled = !0),
              (V.disabled = !0);
          },
          O = (_e) => {
            const {
              inputEl: V,
              toggleListBtnEl: ie,
              clearInputBtnEl: fe,
            } = ge(_e);
            (fe.hidden = !0),
              fe.setAttribute("aria-disabled", !0),
              ie.setAttribute("aria-disabled", !0),
              V.setAttribute("aria-disabled", !0);
          },
          U = (_e) => {
            const {
              inputEl: V,
              toggleListBtnEl: ie,
              clearInputBtnEl: fe,
            } = ge(_e);
            (fe.hidden = !1),
              (fe.disabled = !1),
              (ie.disabled = !1),
              (V.disabled = !1);
          },
          R = (_e) => {
            const V = _e.closest(D);
            if (V.dataset.enhanced) return;
            const ie = V.querySelector("select");
            if (!ie) throw new Error(`${D} is missing inner select`);
            const fe = ie.id,
              Pe = document.querySelector(`label[for="${fe}"]`),
              Xe = `${fe}--list`,
              Ke = `${fe}-label`,
              dt = `${fe}--assistiveHint`,
              qe = [],
              { defaultValue: Wt } = V.dataset,
              { placeholder: Vt } = V.dataset;
            let zt;
            if ((Vt && qe.push({ placeholder: Vt }), Wt))
              for (let Dt = 0, St = ie.options.length; Dt < St; Dt += 1) {
                const ur = ie.options[Dt];
                if (ur.value === Wt) {
                  zt = ur;
                  break;
                }
              }
            if (!Pe || !Pe.matches(`label[for="${fe}"]`))
              throw new Error(
                `${D} for ${fe} is either missing a label or a "for" attribute`,
              );
            Pe.setAttribute("id", Ke),
              Pe.setAttribute("id", Ke),
              ie.setAttribute("aria-hidden", "true"),
              ie.setAttribute("tabindex", "-1"),
              ie.classList.add("usa-sr-only", f),
              (ie.id = ""),
              (ie.value = ""),
              ["required", "aria-label", "aria-labelledby"].forEach((Dt) => {
                if (ie.hasAttribute(Dt)) {
                  const St = ie.getAttribute(Dt);
                  qe.push({ [Dt]: St }), ie.removeAttribute(Dt);
                }
              });
            const It = document.createElement("input");
            if (
              (It.setAttribute("id", fe),
              It.setAttribute("aria-owns", Xe),
              It.setAttribute("aria-controls", Xe),
              It.setAttribute("aria-autocomplete", "list"),
              It.setAttribute("aria-describedby", dt),
              It.setAttribute("aria-expanded", "false"),
              It.setAttribute("autocapitalize", "off"),
              It.setAttribute("autocomplete", "off"),
              It.setAttribute("class", d),
              It.setAttribute("type", "text"),
              It.setAttribute("role", "combobox"),
              qe.forEach((Dt) =>
                Object.keys(Dt).forEach((St) => {
                  const ur = s.escapeHTML`${Dt[St]}`;
                  It.setAttribute(St, ur);
                }),
              ),
              V.insertAdjacentElement("beforeend", It),
              V.insertAdjacentHTML(
                "beforeend",
                s.escapeHTML`
    <span class="${m}" tabindex="-1">
        <button type="button" class="${h}" aria-label="Clear the select contents">&nbsp;</button>
      </span>
      <span class="${p}">&nbsp;</span>
      <span class="${_}" tabindex="-1">
        <button type="button" tabindex="-1" class="${x}" aria-label="Toggle the dropdown list">&nbsp;</button>
      </span>
      <ul
        tabindex="-1"
        id="${Xe}"
        class="${v}"
        role="listbox"
        aria-labelledby="${Ke}"
        hidden>
      </ul>
      <div class="${C} usa-sr-only" role="status"></div>
      <span id="${dt}" class="usa-sr-only">
        When autocomplete results are available use up and down arrows to review and enter to select.
        Touch device users, explore by touch or with swipe gestures.
      </span>`,
              ),
              zt)
            ) {
              const { inputEl: Dt } = ge(V);
              ye(ie, zt.value), ye(Dt, zt.text), V.classList.add(u);
            }
            ie.disabled && (oe(V), (ie.disabled = !1)),
              ie.hasAttribute("aria-disabled") &&
                (O(V), ie.removeAttribute("aria-disabled")),
              (V.dataset.enhanced = "true");
          },
          k = (_e, V, { skipFocus: ie, preventScroll: fe } = {}) => {
            const { inputEl: Pe, listEl: Xe, focusedOptionEl: Ke } = ge(_e);
            if (
              (Ke &&
                (Ke.classList.remove(S), Ke.setAttribute("tabIndex", "-1")),
              V)
            ) {
              if (
                (Pe.setAttribute("aria-activedescendant", V.id),
                V.setAttribute("tabIndex", "0"),
                V.classList.add(S),
                !fe)
              ) {
                const dt = V.offsetTop + V.offsetHeight,
                  qe = Xe.scrollTop + Xe.offsetHeight;
                dt > qe && (Xe.scrollTop = dt - Xe.offsetHeight),
                  V.offsetTop < Xe.scrollTop && (Xe.scrollTop = V.offsetTop);
              }
              ie || V.focus({ preventScroll: fe });
            } else Pe.setAttribute("aria-activedescendant", ""), Pe.focus();
          },
          z = (_e, V = "", ie = {}) => {
            const fe = (Xe) => Xe.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
            let Pe = _e.replace(/{{(.*?)}}/g, (Xe, Ke) => {
              const dt = Ke.trim(),
                qe = ie[dt];
              if (dt !== "query" && qe) {
                const Wt = new RegExp(qe, "i"),
                  Vt = V.match(Wt);
                return Vt ? fe(Vt[1]) : "";
              }
              return fe(V);
            });
            return (Pe = `^(?:${Pe})$`), new RegExp(Pe, "i");
          },
          re = (_e) => {
            const {
              comboBoxEl: V,
              selectEl: ie,
              inputEl: fe,
              listEl: Pe,
              statusEl: Xe,
              isPristine: Ke,
              disableFiltering: dt,
            } = ge(_e);
            let qe, Wt;
            const Vt = `${Pe.id}--option-`,
              zt = (fe.value || "").toLowerCase(),
              It = V.dataset.filter || Ae,
              Dt = z(It, zt, V.dataset),
              St = [];
            for (let qt = 0, Qr = ie.options.length; qt < Qr; qt += 1) {
              const Nr = ie.options[qt],
                Fr = `${Vt}${St.length}`;
              Nr.value &&
                (dt || Ke || !zt || Dt.test(Nr.text)) &&
                (ie.value && Nr.value === ie.value && (qe = Fr),
                dt && !Wt && Dt.test(Nr.text) && (Wt = Fr),
                St.push(Nr));
            }
            const ur = St.length,
              pn = St.map((qt, Qr) => {
                const Nr = `${Vt}${Qr}`,
                  Fr = [g];
                let $t = "-1",
                  ma = "false";
                Nr === qe && (Fr.push(b, S), ($t = "0"), (ma = "true")),
                  !qe && Qr === 0 && (Fr.push(S), ($t = "0"));
                const er = document.createElement("li");
                return (
                  er.setAttribute("aria-setsize", St.length),
                  er.setAttribute("aria-posinset", Qr + 1),
                  er.setAttribute("aria-selected", ma),
                  er.setAttribute("id", Nr),
                  er.setAttribute("class", Fr.join(" ")),
                  er.setAttribute("tabindex", $t),
                  er.setAttribute("role", "option"),
                  er.setAttribute("data-value", qt.value),
                  (er.textContent = qt.text),
                  er
                );
              }),
              Br = document.createElement("li");
            Br.setAttribute("class", `${g}--no-results`),
              (Br.textContent = "No results found"),
              (Pe.hidden = !1),
              ur
                ? ((Pe.innerHTML = ""),
                  pn.forEach((qt) => Pe.insertAdjacentElement("beforeend", qt)))
                : ((Pe.innerHTML = ""),
                  Pe.insertAdjacentElement("beforeend", Br)),
              fe.setAttribute("aria-expanded", "true"),
              (Xe.textContent = ur
                ? `${ur} result${ur > 1 ? "s" : ""} available.`
                : "No results.");
            let Lr;
            Ke && qe
              ? (Lr = Pe.querySelector(`#${qe}`))
              : dt && Wt && (Lr = Pe.querySelector(`#${Wt}`)),
              Lr && k(Pe, Lr, { skipFocus: !0 });
          },
          Se = (_e) => {
            const {
              inputEl: V,
              listEl: ie,
              statusEl: fe,
              focusedOptionEl: Pe,
            } = ge(_e);
            (fe.innerHTML = ""),
              V.setAttribute("aria-expanded", "false"),
              V.setAttribute("aria-activedescendant", ""),
              Pe && Pe.classList.remove(S),
              (ie.scrollTop = 0),
              (ie.hidden = !0);
          },
          he = (_e) => {
            const { comboBoxEl: V, selectEl: ie, inputEl: fe } = ge(_e);
            ye(ie, _e.dataset.value),
              ye(fe, _e.textContent),
              V.classList.add(u),
              Se(V),
              fe.focus();
          },
          ve = (_e) => {
            const {
                comboBoxEl: V,
                listEl: ie,
                selectEl: fe,
                inputEl: Pe,
              } = ge(_e),
              Xe = !ie.hidden;
            fe.value && ye(fe),
              Pe.value && ye(Pe),
              V.classList.remove(u),
              Xe && re(V),
              Pe.focus();
          },
          He = (_e) => {
            const { comboBoxEl: V, selectEl: ie, inputEl: fe } = ge(_e),
              Pe = ie.value,
              Xe = (fe.value || "").toLowerCase();
            if (Pe)
              for (let Ke = 0, dt = ie.options.length; Ke < dt; Ke += 1) {
                const qe = ie.options[Ke];
                if (qe.value === Pe) {
                  Xe !== qe.text && ye(fe, qe.text), V.classList.add(u);
                  return;
                }
              }
            Xe && ye(fe);
          },
          je = (_e) => {
            const {
              comboBoxEl: V,
              selectEl: ie,
              inputEl: fe,
              statusEl: Pe,
            } = ge(_e);
            Pe.textContent = "";
            const Xe = (fe.value || "").toLowerCase();
            if (Xe)
              for (let Ke = 0, dt = ie.options.length; Ke < dt; Ke += 1) {
                const qe = ie.options[Ke];
                if (qe.text.toLowerCase() === Xe) {
                  ye(ie, qe.value), ye(fe, qe.text), V.classList.add(u);
                  return;
                }
              }
            He(V);
          },
          be = (_e) => {
            const { comboBoxEl: V, inputEl: ie } = ge(_e.target);
            Se(V), He(V), ie.focus();
          },
          Oe = (_e) => {
            const { comboBoxEl: V, listEl: ie } = ge(_e.target);
            ie.hidden && re(V);
            const fe = ie.querySelector(ae) || ie.querySelector(X);
            fe && k(V, fe), _e.preventDefault();
          },
          Je = (_e) => {
            const { comboBoxEl: V, listEl: ie } = ge(_e.target),
              fe = !ie.hidden;
            je(V), fe && Se(V), _e.preventDefault();
          },
          Ze = (_e) => {
            const V = _e.target,
              ie = V.nextSibling;
            ie && k(V, ie), _e.preventDefault();
          },
          q = (_e) => {
            he(_e.target), _e.preventDefault();
          },
          we = (_e) => {
            he(_e.target), _e.preventDefault();
          },
          Ie = (_e) => {
            const {
                comboBoxEl: V,
                listEl: ie,
                focusedOptionEl: fe,
              } = ge(_e.target),
              Pe = fe && fe.previousSibling,
              Xe = !ie.hidden;
            k(V, Pe), Xe && _e.preventDefault(), Pe || Se(V);
          },
          Ve = (_e) => {
            _e.classList.contains(S) || k(_e, _e, { preventScroll: !0 });
          },
          Ge = (_e) => {
            const { comboBoxEl: V, listEl: ie, inputEl: fe } = ge(_e);
            ie.hidden ? re(V) : Se(V), fe.focus();
          },
          _t = (_e) => {
            const { comboBoxEl: V, listEl: ie } = ge(_e);
            ie.hidden && re(V);
          },
          at = i(
            {
              [l]: {
                [F]() {
                  this.disabled || _t(this);
                },
                [P]() {
                  this.disabled || Ge(this);
                },
                [X]() {
                  this.disabled || he(this);
                },
                [I]() {
                  this.disabled || ve(this);
                },
              },
              focusout: {
                [D](_e) {
                  this.contains(_e.relatedTarget) || (He(this), Se(this));
                },
              },
              keydown: {
                [D]: n({ Escape: be }),
                [F]: n({ Enter: Je, ArrowDown: Oe, Down: Oe }),
                [X]: n({
                  ArrowUp: Ie,
                  Up: Ie,
                  ArrowDown: Ze,
                  Down: Ze,
                  Enter: we,
                  " ": q,
                  "Shift+Tab": se,
                }),
              },
              input: {
                [F]() {
                  this.closest(D).classList.remove(u), re(this);
                },
              },
              mouseover: {
                [X]() {
                  Ve(this);
                },
              },
            },
            {
              init(_e) {
                a(D, _e).forEach((V) => {
                  R(V);
                });
              },
              getComboBoxContext: ge,
              enhanceComboBox: R,
              generateDynamicRegExp: z,
              disable: oe,
              enable: U,
              displayList: re,
              hideList: Se,
              COMBO_BOX_CLASS: c,
            },
          );
        t.exports = at;
      },
      {
        "../../uswds-core/src/js/config": 35,
        "../../uswds-core/src/js/events": 36,
        "../../uswds-core/src/js/utils/behavior": 45,
        "../../uswds-core/src/js/utils/sanitizer": 50,
        "../../uswds-core/src/js/utils/select-or-matches": 52,
        "receptor/keymap": 10,
      },
    ],
    19: [
      function (e, t, r) {
        const n = e("receptor/keymap"),
          a = e("../../uswds-core/src/js/utils/behavior"),
          i = e("../../uswds-core/src/js/utils/select"),
          s = e("../../uswds-core/src/js/utils/select-or-matches"),
          { prefix: o } = e("../../uswds-core/src/js/config"),
          { CLICK: l } = e("../../uswds-core/src/js/events"),
          c = e("../../uswds-core/src/js/utils/active-element"),
          u = e("../../uswds-core/src/js/utils/is-ios-device"),
          f = e("../../uswds-core/src/js/utils/sanitizer"),
          d = `${o}-date-picker`,
          h = `${d}__wrapper`,
          m = `${d}--initialized`,
          p = `${d}--active`,
          x = `${d}__internal-input`,
          _ = `${d}__external-input`,
          v = `${d}__button`,
          g = `${d}__calendar`,
          S = `${d}__status`,
          b = `${g}__date`,
          C = `${b}--focused`,
          D = `${b}--selected`,
          A = `${b}--previous-month`,
          F = `${b}--current-month`,
          I = `${b}--next-month`,
          P = `${b}--range-date`,
          B = `${b}--today`,
          X = `${b}--range-date-start`,
          ae = `${b}--range-date-end`,
          le = `${b}--within-range`,
          Re = `${g}__previous-year`,
          Ae = `${g}__previous-month`,
          se = `${g}__next-year`,
          ye = `${g}__next-month`,
          ge = `${g}__month-selection`,
          oe = `${g}__year-selection`,
          O = `${g}__month`,
          U = `${O}--focused`,
          R = `${O}--selected`,
          k = `${g}__year`,
          z = `${k}--focused`,
          re = `${k}--selected`,
          Se = `${g}__previous-year-chunk`,
          he = `${g}__next-year-chunk`,
          ve = `${g}__date-picker`,
          He = `${g}__month-picker`,
          je = `${g}__year-picker`,
          be = `${g}__table`,
          Oe = `${g}__row`,
          Je = `${g}__cell`,
          Ze = `${Je}--center-items`,
          q = `${g}__month-label`,
          we = `${g}__day-of-week`,
          Ie = `.${d}`,
          Ve = `.${v}`,
          Ge = `.${x}`,
          _t = `.${_}`,
          at = `.${g}`,
          _e = `.${S}`,
          V = `.${b}`,
          ie = `.${C}`,
          fe = `.${F}`,
          Pe = `.${Re}`,
          Xe = `.${Ae}`,
          Ke = `.${se}`,
          dt = `.${ye}`,
          qe = `.${oe}`,
          Wt = `.${ge}`,
          Vt = `.${O}`,
          zt = `.${k}`,
          It = `.${Se}`,
          Dt = `.${he}`,
          St = `.${ve}`,
          ur = `.${He}`,
          pn = `.${je}`,
          Br = `.${U}`,
          Lr = `.${z}`,
          qt = "Please enter a valid date",
          Qr = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
          Nr = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          Fr = 13,
          $t = 12,
          ma = "0000-01-01",
          er = "MM/DD/YYYY",
          j = "YYYY-MM-DD",
          Q = ":not([disabled])",
          Z = (...M) => M.map((K) => K + Q).join(", "),
          de = Z(Pe, Xe, qe, Wt, Ke, dt, ie),
          Be = Z(Br),
          We = Z(It, Dt, Lr),
          E = (M, K) => (K !== M.getMonth() && M.setDate(0), M),
          T = (M, K, te) => {
            const pe = new Date(0);
            return pe.setFullYear(M, K, te), pe;
          },
          y = () => {
            const M = new Date(),
              K = M.getDate(),
              te = M.getMonth(),
              pe = M.getFullYear();
            return T(pe, te, K);
          },
          w = (M) => {
            const K = new Date(0);
            return K.setFullYear(M.getFullYear(), M.getMonth(), 1), K;
          },
          L = (M) => {
            const K = new Date(0);
            return K.setFullYear(M.getFullYear(), M.getMonth() + 1, 0), K;
          },
          N = (M, K) => {
            const te = new Date(M.getTime());
            return te.setDate(te.getDate() + K), te;
          },
          W = (M, K) => N(M, -K),
          ee = (M, K) => N(M, K * 7),
          Y = (M, K) => ee(M, -K),
          G = (M) => {
            const K = M.getDay();
            return W(M, K);
          },
          J = (M) => {
            const K = M.getDay();
            return N(M, 6 - K);
          },
          ue = (M, K) => {
            const te = new Date(M.getTime()),
              pe = (te.getMonth() + 12 + K) % 12;
            return te.setMonth(te.getMonth() + K), E(te, pe), te;
          },
          Te = (M, K) => ue(M, -K),
          Ne = (M, K) => ue(M, K * 12),
          me = (M, K) => Ne(M, -K),
          Le = (M, K) => {
            const te = new Date(M.getTime());
            return te.setMonth(K), E(te, K), te;
          },
          ze = (M, K) => {
            const te = new Date(M.getTime()),
              pe = te.getMonth();
            return te.setFullYear(K), E(te, pe), te;
          },
          ot = (M, K) => {
            let te = M;
            return K < M && (te = K), new Date(te.getTime());
          },
          ht = (M, K) => {
            let te = M;
            return K > M && (te = K), new Date(te.getTime());
          },
          kt = (M, K) => M && K && M.getFullYear() === K.getFullYear(),
          Qe = (M, K) => kt(M, K) && M.getMonth() === K.getMonth(),
          rt = (M, K) => Qe(M, K) && M.getDate() === K.getDate(),
          Tt = (M, K, te) => {
            let pe = M;
            return (
              M < K ? (pe = K) : te && M > te && (pe = te),
              new Date(pe.getTime())
            );
          },
          fr = (M, K, te) => M >= K && (!te || M <= te),
          At = (M, K, te) => L(M) < K || (te && w(M) > te),
          Gt = (M, K, te) => L(Le(M, 11)) < K || (te && w(Le(M, 0)) > te),
          jr = (M, K = j, te = !1) => {
            let pe, Fe, ke, Me, Ue;
            if (M) {
              let it, et, Ye;
              if (
                (K === er
                  ? ([it, et, Ye] = M.split("/"))
                  : ([Ye, it, et] = M.split("-")),
                Ye &&
                  ((Ue = parseInt(Ye, 10)),
                  !Number.isNaN(Ue) &&
                    ((Me = Ue), te && ((Me = Math.max(0, Me)), Ye.length < 3))))
              ) {
                const st = y().getFullYear();
                Me = st - (st % 10 ** Ye.length) + Ue;
              }
              if (
                (it &&
                  ((Ue = parseInt(it, 10)),
                  Number.isNaN(Ue) ||
                    ((Fe = Ue),
                    te && ((Fe = Math.max(1, Fe)), (Fe = Math.min(12, Fe))))),
                Fe &&
                  et &&
                  Me != null &&
                  ((Ue = parseInt(et, 10)),
                  !Number.isNaN(Ue) && ((ke = Ue), te)))
              ) {
                const st = T(Me, Fe, 0).getDate();
                (ke = Math.max(1, ke)), (ke = Math.min(st, ke));
              }
              Fe && ke && Me != null && (pe = T(Me, Fe - 1, ke));
            }
            return pe;
          },
          va = (M, K = j) => {
            const te = (Me, Ue) => `0000${Me}`.slice(-Ue),
              pe = M.getMonth() + 1,
              Fe = M.getDate(),
              ke = M.getFullYear();
            return K === er
              ? [te(pe, 2), te(Fe, 2), te(ke, 4)].join("/")
              : [te(ke, 4), te(pe, 2), te(Fe, 2)].join("-");
          },
          Gc = (M, K) => {
            const te = [];
            let pe = [],
              Fe = 0;
            for (; Fe < M.length; ) {
              pe = [];
              const ke = document.createElement("tr");
              for (; Fe < M.length && pe.length < K; ) {
                const Me = document.createElement("td");
                Me.insertAdjacentElement("beforeend", M[Fe]),
                  pe.push(Me),
                  (Fe += 1);
              }
              pe.forEach((Me) => {
                ke.insertAdjacentElement("beforeend", Me);
              }),
                te.push(ke);
            }
            return te;
          },
          Yc = (M) => {
            const K = document.createElement("tbody");
            return (
              M.forEach((te) => {
                K.insertAdjacentElement("beforeend", te);
              }),
              K
            );
          },
          Kc = (M, K = "") => {
            const te = M;
            te.value = K;
            const pe = new CustomEvent("change", {
              bubbles: !0,
              cancelable: !0,
              detail: { value: K },
            });
            te.dispatchEvent(pe);
          },
          Et = (M) => {
            const K = M.closest(Ie);
            if (!K) throw new Error(`Element is missing outer ${Ie}`);
            const te = K.querySelector(Ge),
              pe = K.querySelector(_t),
              Fe = K.querySelector(at),
              ke = K.querySelector(Ve),
              Me = K.querySelector(_e),
              Ue = K.querySelector(zt),
              it = jr(pe.value, er, !0),
              et = jr(te.value),
              Ye = jr(Fe.dataset.value),
              st = jr(K.dataset.minDate),
              Yt = jr(K.dataset.maxDate),
              Jr = jr(K.dataset.rangeDate),
              Zr = jr(K.dataset.defaultDate);
            if (st && Yt && st > Yt)
              throw new Error("Minimum date cannot be after maximum date");
            return {
              calendarDate: Ye,
              minDate: st,
              toggleBtnEl: ke,
              selectedDate: et,
              maxDate: Yt,
              firstYearChunkEl: Ue,
              datePickerEl: K,
              inputDate: it,
              internalInputEl: te,
              externalInputEl: pe,
              calendarEl: Fe,
              rangeDate: Jr,
              defaultDate: Zr,
              statusEl: Me,
            };
          },
          ud = (M) => {
            const { externalInputEl: K, toggleBtnEl: te } = Et(M);
            (te.disabled = !0), (K.disabled = !0);
          },
          fd = (M) => {
            const { externalInputEl: K, toggleBtnEl: te } = Et(M);
            te.setAttribute("aria-disabled", !0),
              K.setAttribute("aria-disabled", !0);
          },
          ux = (M) => {
            const { externalInputEl: K, toggleBtnEl: te } = Et(M);
            (te.disabled = !1), (K.disabled = !1);
          },
          Xc = (M) => {
            const { externalInputEl: K, minDate: te, maxDate: pe } = Et(M),
              Fe = K.value;
            let ke = !1;
            if (Fe) {
              ke = !0;
              const Me = Fe.split("/"),
                [Ue, it, et] = Me.map((Ye) => {
                  let st;
                  const Yt = parseInt(Ye, 10);
                  return Number.isNaN(Yt) || (st = Yt), st;
                });
              if (Ue && it && et != null) {
                const Ye = T(et, Ue - 1, it);
                Ye.getMonth() === Ue - 1 &&
                  Ye.getDate() === it &&
                  Ye.getFullYear() === et &&
                  Me[2].length === 4 &&
                  fr(Ye, te, pe) &&
                  (ke = !1);
              }
            }
            return ke;
          },
          Ho = (M) => {
            const { externalInputEl: K } = Et(M),
              te = Xc(K);
            te && !K.validationMessage && K.setCustomValidity(qt),
              !te && K.validationMessage === qt && K.setCustomValidity("");
          },
          fx = (M) => {
            const { internalInputEl: K, inputDate: te } = Et(M);
            let pe = "";
            te && !Xc(M) && (pe = va(te)), K.value !== pe && Kc(K, pe);
          },
          Qc = (M, K) => {
            const te = jr(K);
            if (te) {
              const pe = va(te, er),
                {
                  datePickerEl: Fe,
                  internalInputEl: ke,
                  externalInputEl: Me,
                } = Et(M);
              Kc(ke, K), Kc(Me, pe), Ho(Fe);
            }
          },
          dx = (M) => {
            const K = M.closest(Ie),
              { defaultValue: te } = K.dataset,
              pe = K.querySelector("input");
            if (!pe) throw new Error(`${Ie} is missing inner input`);
            pe.value && (pe.value = "");
            const Fe = jr(K.dataset.minDate || pe.getAttribute("min"));
            K.dataset.minDate = Fe ? va(Fe) : ma;
            const ke = jr(K.dataset.maxDate || pe.getAttribute("max"));
            ke && (K.dataset.maxDate = va(ke));
            const Me = document.createElement("div");
            Me.classList.add(h);
            const Ue = pe.cloneNode();
            Ue.classList.add(_),
              (Ue.type = "text"),
              Me.appendChild(Ue),
              Me.insertAdjacentHTML(
                "beforeend",
                f.escapeHTML`
    <button type="button" class="${v}" aria-haspopup="true" aria-label="Toggle calendar"></button>
    <div class="${g}" role="application" hidden></div>
    <div class="usa-sr-only ${S}" role="status" aria-live="polite"></div>`,
              ),
              pe.setAttribute("aria-hidden", "true"),
              pe.setAttribute("tabindex", "-1"),
              (pe.style.display = "none"),
              pe.classList.add(x),
              pe.removeAttribute("id"),
              pe.removeAttribute("name"),
              (pe.required = !1),
              K.appendChild(Me),
              K.classList.add(m),
              te && Qc(K, te),
              pe.disabled && (ud(K), (pe.disabled = !1)),
              pe.hasAttribute("aria-disabled") &&
                (fd(K), pe.removeAttribute("aria-disabled"));
          },
          Cn = (M, K) => {
            const {
                datePickerEl: te,
                calendarEl: pe,
                statusEl: Fe,
                selectedDate: ke,
                maxDate: Me,
                minDate: Ue,
                rangeDate: it,
              } = Et(M),
              et = y();
            let Ye = K || et;
            const st = pe.hidden,
              Yt = N(Ye, 0),
              Jr = Ye.getMonth(),
              Zr = Ye.getFullYear(),
              Zn = Te(Ye, 1),
              $n = ue(Ye, 1),
              Ci = va(Ye),
              _a = w(Ye),
              mn = Qe(Ye, Ue),
              qr = Qe(Ye, Me),
              Hn = ke || Ye,
              Ur = it && ot(Hn, it),
              Vo = it && ht(Hn, it),
              zo = it && N(Ur, 1),
              ys = it && W(Vo, 1),
              Di = Qr[Jr],
              eu = (tr) => {
                const dr = [b],
                  tu = tr.getDate(),
                  kd = tr.getMonth(),
                  Rd = tr.getFullYear(),
                  Wx = tr.getDay(),
                  Vx = va(tr);
                let Od = "-1";
                const zx = !fr(tr, Ue, Me),
                  Id = rt(tr, ke);
                Qe(tr, Zn) && dr.push(A),
                  Qe(tr, Yt) && dr.push(F),
                  Qe(tr, $n) && dr.push(I),
                  Id && dr.push(D),
                  rt(tr, et) && dr.push(B),
                  it &&
                    (rt(tr, it) && dr.push(P),
                    rt(tr, Ur) && dr.push(X),
                    rt(tr, Vo) && dr.push(ae),
                    fr(tr, zo, ys) && dr.push(le)),
                  rt(tr, Yt) && ((Od = "0"), dr.push(C));
                const Gx = Qr[kd],
                  Yx = Nr[Wx],
                  vn = document.createElement("button");
                return (
                  vn.setAttribute("type", "button"),
                  vn.setAttribute("tabindex", Od),
                  vn.setAttribute("class", dr.join(" ")),
                  vn.setAttribute("data-day", tu),
                  vn.setAttribute("data-month", kd + 1),
                  vn.setAttribute("data-year", Rd),
                  vn.setAttribute("data-value", Vx),
                  vn.setAttribute(
                    "aria-label",
                    f.escapeHTML`${tu} ${Gx} ${Rd} ${Yx}`,
                  ),
                  vn.setAttribute("aria-selected", Id ? "true" : "false"),
                  zx === !0 && (vn.disabled = !0),
                  (vn.textContent = tu),
                  vn
                );
              };
            Ye = G(_a);
            const Qa = [];
            for (
              ;
              Qa.length < 28 || Ye.getMonth() === Jr || Qa.length % 7 !== 0;

            )
              Qa.push(eu(Ye)), (Ye = N(Ye, 1));
            const ws = Gc(Qa, 7),
              Wn = pe.cloneNode();
            (Wn.dataset.value = Ci),
              (Wn.style.top = `${te.offsetHeight}px`),
              (Wn.hidden = !1),
              (Wn.innerHTML = f.escapeHTML`
    <div tabindex="-1" class="${ve}">
      <div class="${Oe}">
        <div class="${Je} ${Ze}">
          <button
            type="button"
            class="${Re}"
            aria-label="Navigate back one year"
            ${mn ? 'disabled="disabled"' : ""}
          ></button>
        </div>
        <div class="${Je} ${Ze}">
          <button
            type="button"
            class="${Ae}"
            aria-label="Navigate back one month"
            ${mn ? 'disabled="disabled"' : ""}
          ></button>
        </div>
        <div class="${Je} ${q}">
          <button
            type="button"
            class="${ge}" aria-label="${Di}. Select month"
          >${Di}</button>
          <button
            type="button"
            class="${oe}" aria-label="${Zr}. Select year"
          >${Zr}</button>
        </div>
        <div class="${Je} ${Ze}">
          <button
            type="button"
            class="${ye}"
            aria-label="Navigate forward one month"
            ${qr ? 'disabled="disabled"' : ""}
          ></button>
        </div>
        <div class="${Je} ${Ze}">
          <button
            type="button"
            class="${se}"
            aria-label="Navigate forward one year"
            ${qr ? 'disabled="disabled"' : ""}
          ></button>
        </div>
      </div>
    </div>
    `);
            const en = document.createElement("table");
            en.setAttribute("class", be);
            const Ld = document.createElement("thead");
            en.insertAdjacentElement("beforeend", Ld);
            const Nd = document.createElement("tr");
            Ld.insertAdjacentElement("beforeend", Nd);
            const Fd = {
              Sunday: "S",
              Monday: "M",
              Tuesday: "T",
              Wednesday: "W",
              Thursday: "Th",
              Friday: "Fr",
              Saturday: "S",
            };
            Object.keys(Fd).forEach((tr) => {
              const dr = document.createElement("th");
              dr.setAttribute("class", we),
                dr.setAttribute("scope", "col"),
                dr.setAttribute("aria-label", tr),
                (dr.textContent = Fd[tr]),
                Nd.insertAdjacentElement("beforeend", dr);
            });
            const Hx = Yc(ws);
            en.insertAdjacentElement("beforeend", Hx),
              Wn.querySelector(St).insertAdjacentElement("beforeend", en),
              pe.parentNode.replaceChild(Wn, pe),
              te.classList.add(p);
            const Go = [];
            return (
              rt(ke, Yt) && Go.push("Selected date"),
              st
                ? (Go.push(
                    "You can navigate by day using left and right arrows",
                    "Weeks by using up and down arrows",
                    "Months by using page up and page down keys",
                    "Years by using shift plus page up and shift plus page down",
                    "Home and end keys navigate to the beginning and end of a week",
                  ),
                  (Fe.textContent = ""))
                : Go.push(`${Di} ${Zr}`),
              (Fe.textContent = Go.join(". ")),
              Wn
            );
          },
          hx = (M) => {
            if (M.disabled) return;
            const {
              calendarEl: K,
              calendarDate: te,
              minDate: pe,
              maxDate: Fe,
            } = Et(M);
            let ke = me(te, 1);
            ke = Tt(ke, pe, Fe);
            const Me = Cn(K, ke);
            let Ue = Me.querySelector(Pe);
            Ue.disabled && (Ue = Me.querySelector(St)), Ue.focus();
          },
          px = (M) => {
            if (M.disabled) return;
            const {
              calendarEl: K,
              calendarDate: te,
              minDate: pe,
              maxDate: Fe,
            } = Et(M);
            let ke = Te(te, 1);
            ke = Tt(ke, pe, Fe);
            const Me = Cn(K, ke);
            let Ue = Me.querySelector(Xe);
            Ue.disabled && (Ue = Me.querySelector(St)), Ue.focus();
          },
          mx = (M) => {
            if (M.disabled) return;
            const {
              calendarEl: K,
              calendarDate: te,
              minDate: pe,
              maxDate: Fe,
            } = Et(M);
            let ke = ue(te, 1);
            ke = Tt(ke, pe, Fe);
            const Me = Cn(K, ke);
            let Ue = Me.querySelector(dt);
            Ue.disabled && (Ue = Me.querySelector(St)), Ue.focus();
          },
          vx = (M) => {
            if (M.disabled) return;
            const {
              calendarEl: K,
              calendarDate: te,
              minDate: pe,
              maxDate: Fe,
            } = Et(M);
            let ke = Ne(te, 1);
            ke = Tt(ke, pe, Fe);
            const Me = Cn(K, ke);
            let Ue = Me.querySelector(Ke);
            Ue.disabled && (Ue = Me.querySelector(St)), Ue.focus();
          },
          Wo = (M) => {
            const { datePickerEl: K, calendarEl: te, statusEl: pe } = Et(M);
            K.classList.remove(p), (te.hidden = !0), (pe.textContent = "");
          },
          gx = (M) => {
            if (M.disabled) return;
            const { datePickerEl: K, externalInputEl: te } = Et(M);
            Qc(M, M.dataset.value), Wo(K), te.focus();
          },
          xx = (M) => {
            if (M.disabled) return;
            const {
              calendarEl: K,
              inputDate: te,
              minDate: pe,
              maxDate: Fe,
              defaultDate: ke,
            } = Et(M);
            if (K.hidden) {
              const Me = Tt(te || ke || y(), pe, Fe);
              Cn(K, Me).querySelector(ie).focus();
            } else Wo(M);
          },
          dd = (M) => {
            const {
              calendarEl: K,
              inputDate: te,
              minDate: pe,
              maxDate: Fe,
            } = Et(M);
            if (!K.hidden && te) {
              const Me = Tt(te, pe, Fe);
              Cn(K, Me);
            }
          },
          Jc = (M, K) => {
            const {
                calendarEl: te,
                statusEl: pe,
                calendarDate: Fe,
                minDate: ke,
                maxDate: Me,
              } = Et(M),
              Ue = Fe.getMonth(),
              it = K ?? Ue,
              et = Qr.map((Zn, $n) => {
                const Ci = Le(Fe, $n),
                  _a = At(Ci, ke, Me);
                let mn = "-1";
                const qr = [O],
                  Hn = $n === Ue;
                $n === it && ((mn = "0"), qr.push(U)), Hn && qr.push(R);
                const Ur = document.createElement("button");
                return (
                  Ur.setAttribute("type", "button"),
                  Ur.setAttribute("tabindex", mn),
                  Ur.setAttribute("class", qr.join(" ")),
                  Ur.setAttribute("data-value", $n),
                  Ur.setAttribute("data-label", Zn),
                  Ur.setAttribute("aria-selected", Hn ? "true" : "false"),
                  _a === !0 && (Ur.disabled = !0),
                  (Ur.textContent = Zn),
                  Ur
                );
              }),
              Ye = document.createElement("div");
            Ye.setAttribute("tabindex", "-1"), Ye.setAttribute("class", He);
            const st = document.createElement("table");
            st.setAttribute("class", be),
              st.setAttribute("role", "presentation");
            const Yt = Gc(et, 3),
              Jr = Yc(Yt);
            st.insertAdjacentElement("beforeend", Jr),
              Ye.insertAdjacentElement("beforeend", st);
            const Zr = te.cloneNode();
            return (
              Zr.insertAdjacentElement("beforeend", Ye),
              te.parentNode.replaceChild(Zr, te),
              (pe.textContent = "Select a month."),
              Zr
            );
          },
          _x = (M) => {
            if (M.disabled) return;
            const {
                calendarEl: K,
                calendarDate: te,
                minDate: pe,
                maxDate: Fe,
              } = Et(M),
              ke = parseInt(M.dataset.value, 10);
            let Me = Le(te, ke);
            (Me = Tt(Me, pe, Fe)), Cn(K, Me).querySelector(ie).focus();
          },
          Es = (M, K) => {
            const {
                calendarEl: te,
                statusEl: pe,
                calendarDate: Fe,
                minDate: ke,
                maxDate: Me,
              } = Et(M),
              Ue = Fe.getFullYear(),
              it = K ?? Ue;
            let et = it;
            (et -= et % $t), (et = Math.max(0, et));
            const Ye = Gt(ze(Fe, et - 1), ke, Me),
              st = Gt(ze(Fe, et + $t), ke, Me),
              Yt = [];
            let Jr = et;
            for (; Yt.length < $t; ) {
              const eu = Gt(ze(Fe, Jr), ke, Me);
              let Qa = "-1";
              const ws = [k],
                Wn = Jr === Ue;
              Jr === it && ((Qa = "0"), ws.push(z)), Wn && ws.push(re);
              const en = document.createElement("button");
              en.setAttribute("type", "button"),
                en.setAttribute("tabindex", Qa),
                en.setAttribute("class", ws.join(" ")),
                en.setAttribute("data-value", Jr),
                en.setAttribute("aria-selected", Wn ? "true" : "false"),
                eu === !0 && (en.disabled = !0),
                (en.textContent = Jr),
                Yt.push(en),
                (Jr += 1);
            }
            const Zr = te.cloneNode(),
              Zn = document.createElement("div");
            Zn.setAttribute("tabindex", "-1"), Zn.setAttribute("class", je);
            const $n = document.createElement("table");
            $n.setAttribute("class", be);
            const Ci = document.createElement("tbody"),
              _a = document.createElement("tr"),
              mn = document.createElement("button");
            mn.setAttribute("type", "button"),
              mn.setAttribute("class", Se),
              mn.setAttribute("aria-label", `Navigate back ${$t} years`),
              Ye === !0 && (mn.disabled = !0),
              (mn.innerHTML = f.escapeHTML`&nbsp`);
            const qr = document.createElement("button");
            qr.setAttribute("type", "button"),
              qr.setAttribute("class", he),
              qr.setAttribute("aria-label", `Navigate forward ${$t} years`),
              st === !0 && (qr.disabled = !0),
              (qr.innerHTML = f.escapeHTML`&nbsp`);
            const Hn = document.createElement("table");
            Hn.setAttribute("class", be),
              Hn.setAttribute("role", "presentation");
            const Ur = Gc(Yt, 3),
              Vo = Yc(Ur);
            Hn.insertAdjacentElement("beforeend", Vo);
            const zo = document.createElement("td");
            zo.insertAdjacentElement("beforeend", mn);
            const ys = document.createElement("td");
            ys.setAttribute("colspan", "3"),
              ys.insertAdjacentElement("beforeend", Hn);
            const Di = document.createElement("td");
            return (
              Di.insertAdjacentElement("beforeend", qr),
              _a.insertAdjacentElement("beforeend", zo),
              _a.insertAdjacentElement("beforeend", ys),
              _a.insertAdjacentElement("beforeend", Di),
              Ci.insertAdjacentElement("beforeend", _a),
              $n.insertAdjacentElement("beforeend", Ci),
              Zn.insertAdjacentElement("beforeend", $n),
              Zr.insertAdjacentElement("beforeend", Zn),
              te.parentNode.replaceChild(Zr, te),
              (pe.textContent = f.escapeHTML`Showing years ${et} to ${et + $t - 1}. Select a year.`),
              Zr
            );
          },
          Ex = (M) => {
            if (M.disabled) return;
            const {
                calendarEl: K,
                calendarDate: te,
                minDate: pe,
                maxDate: Fe,
              } = Et(M),
              ke = K.querySelector(Lr);
            let Ue = parseInt(ke.textContent, 10) - $t;
            Ue = Math.max(0, Ue);
            const it = ze(te, Ue),
              et = Tt(it, pe, Fe),
              Ye = Es(K, et.getFullYear());
            let st = Ye.querySelector(It);
            st.disabled && (st = Ye.querySelector(pn)), st.focus();
          },
          yx = (M) => {
            if (M.disabled) return;
            const {
                calendarEl: K,
                calendarDate: te,
                minDate: pe,
                maxDate: Fe,
              } = Et(M),
              ke = K.querySelector(Lr);
            let Ue = parseInt(ke.textContent, 10) + $t;
            Ue = Math.max(0, Ue);
            const it = ze(te, Ue),
              et = Tt(it, pe, Fe),
              Ye = Es(K, et.getFullYear());
            let st = Ye.querySelector(Dt);
            st.disabled && (st = Ye.querySelector(pn)), st.focus();
          },
          wx = (M) => {
            if (M.disabled) return;
            const {
                calendarEl: K,
                calendarDate: te,
                minDate: pe,
                maxDate: Fe,
              } = Et(M),
              ke = parseInt(M.innerHTML, 10);
            let Me = ze(te, ke);
            (Me = Tt(Me, pe, Fe)), Cn(K, Me).querySelector(ie).focus();
          },
          Sx = (M) => {
            const { datePickerEl: K, externalInputEl: te } = Et(M.target);
            Wo(K), te.focus(), M.preventDefault();
          },
          Un = (M) => (K) => {
            const {
                calendarEl: te,
                calendarDate: pe,
                minDate: Fe,
                maxDate: ke,
              } = Et(K.target),
              Me = M(pe),
              Ue = Tt(Me, Fe, ke);
            rt(pe, Ue) || Cn(te, Ue).querySelector(ie).focus(),
              K.preventDefault();
          },
          hd = Un((M) => Y(M, 1)),
          pd = Un((M) => ee(M, 1)),
          md = Un((M) => W(M, 1)),
          vd = Un((M) => N(M, 1)),
          Tx = Un((M) => G(M)),
          Ax = Un((M) => J(M)),
          Cx = Un((M) => ue(M, 1)),
          Dx = Un((M) => Te(M, 1)),
          Lx = Un((M) => Ne(M, 1)),
          Nx = Un((M) => me(M, 1)),
          Fx = (M) => {
            if (M.disabled) return;
            const K = M.closest(at),
              te = K.dataset.value,
              pe = M.dataset.value;
            if (pe === te) return;
            const Fe = jr(pe);
            Cn(K, Fe).querySelector(ie).focus();
          },
          ga = (M) => (K) => {
            const te = K.target,
              pe = parseInt(te.dataset.value, 10),
              {
                calendarEl: Fe,
                calendarDate: ke,
                minDate: Me,
                maxDate: Ue,
              } = Et(te),
              it = Le(ke, pe);
            let et = M(pe);
            et = Math.max(0, Math.min(11, et));
            const Ye = Le(ke, et),
              st = Tt(Ye, Me, Ue);
            Qe(it, st) || Jc(Fe, st.getMonth()).querySelector(Br).focus(),
              K.preventDefault();
          },
          gd = ga((M) => M - 3),
          xd = ga((M) => M + 3),
          _d = ga((M) => M - 1),
          Ed = ga((M) => M + 1),
          kx = ga((M) => M - (M % 3)),
          Rx = ga((M) => M + 2 - (M % 3)),
          Ox = ga(() => 11),
          Ix = ga(() => 0),
          Px = (M) => {
            if (M.disabled || M.classList.contains(U)) return;
            const K = parseInt(M.dataset.value, 10);
            Jc(M, K).querySelector(Br).focus();
          },
          xa = (M) => (K) => {
            const te = K.target,
              pe = parseInt(te.dataset.value, 10),
              {
                calendarEl: Fe,
                calendarDate: ke,
                minDate: Me,
                maxDate: Ue,
              } = Et(te),
              it = ze(ke, pe);
            let et = M(pe);
            et = Math.max(0, et);
            const Ye = ze(ke, et),
              st = Tt(Ye, Me, Ue);
            kt(it, st) || Es(Fe, st.getFullYear()).querySelector(Lr).focus(),
              K.preventDefault();
          },
          yd = xa((M) => M - 3),
          wd = xa((M) => M + 3),
          Sd = xa((M) => M - 1),
          Td = xa((M) => M + 1),
          Mx = xa((M) => M - (M % 3)),
          bx = xa((M) => M + 2 - (M % 3)),
          Bx = xa((M) => M - $t),
          jx = xa((M) => M + $t),
          Ux = (M) => {
            if (M.disabled || M.classList.contains(z)) return;
            const K = parseInt(M.dataset.value, 10);
            Es(M, K).querySelector(Lr).focus();
          },
          Zc = (M) => {
            const K = (te) => {
              const { calendarEl: pe } = Et(te),
                Fe = i(M, pe),
                ke = 0,
                Me = Fe.length - 1,
                Ue = Fe[ke],
                it = Fe[Me],
                et = Fe.indexOf(c());
              return {
                focusableElements: Fe,
                isNotFound: et === -1,
                firstTabStop: Ue,
                isFirstTab: et === ke,
                lastTabStop: it,
                isLastTab: et === Me,
              };
            };
            return {
              tabAhead(te) {
                const {
                  firstTabStop: pe,
                  isLastTab: Fe,
                  isNotFound: ke,
                } = K(te.target);
                (Fe || ke) && (te.preventDefault(), pe.focus());
              },
              tabBack(te) {
                const {
                  lastTabStop: pe,
                  isFirstTab: Fe,
                  isNotFound: ke,
                } = K(te.target);
                (Fe || ke) && (te.preventDefault(), pe.focus());
              },
            };
          },
          qc = Zc(de),
          Ad = Zc(Be),
          Cd = Zc(We),
          Dd = {
            [l]: {
              [Ve]() {
                xx(this);
              },
              [V]() {
                gx(this);
              },
              [Vt]() {
                _x(this);
              },
              [zt]() {
                wx(this);
              },
              [Xe]() {
                px(this);
              },
              [dt]() {
                mx(this);
              },
              [Pe]() {
                hx(this);
              },
              [Ke]() {
                vx(this);
              },
              [It]() {
                Ex(this);
              },
              [Dt]() {
                yx(this);
              },
              [Wt]() {
                Jc(this).querySelector(Br).focus();
              },
              [qe]() {
                Es(this).querySelector(Lr).focus();
              },
            },
            keyup: {
              [at](M) {
                const K = this.dataset.keydownKeyCode;
                `${M.keyCode}` !== K && M.preventDefault();
              },
            },
            keydown: {
              [_t](M) {
                M.keyCode === Fr && Ho(this);
              },
              [V]: n({
                Up: hd,
                ArrowUp: hd,
                Down: pd,
                ArrowDown: pd,
                Left: md,
                ArrowLeft: md,
                Right: vd,
                ArrowRight: vd,
                Home: Tx,
                End: Ax,
                PageDown: Cx,
                PageUp: Dx,
                "Shift+PageDown": Lx,
                "Shift+PageUp": Nx,
                Tab: qc.tabAhead,
              }),
              [St]: n({ Tab: qc.tabAhead, "Shift+Tab": qc.tabBack }),
              [Vt]: n({
                Up: gd,
                ArrowUp: gd,
                Down: xd,
                ArrowDown: xd,
                Left: _d,
                ArrowLeft: _d,
                Right: Ed,
                ArrowRight: Ed,
                Home: kx,
                End: Rx,
                PageDown: Ox,
                PageUp: Ix,
              }),
              [ur]: n({ Tab: Ad.tabAhead, "Shift+Tab": Ad.tabBack }),
              [zt]: n({
                Up: yd,
                ArrowUp: yd,
                Down: wd,
                ArrowDown: wd,
                Left: Sd,
                ArrowLeft: Sd,
                Right: Td,
                ArrowRight: Td,
                Home: Mx,
                End: bx,
                PageDown: jx,
                PageUp: Bx,
              }),
              [pn]: n({ Tab: Cd.tabAhead, "Shift+Tab": Cd.tabBack }),
              [at](M) {
                this.dataset.keydownKeyCode = M.keyCode;
              },
              [Ie](M) {
                n({ Escape: Sx })(M);
              },
            },
            focusout: {
              [_t]() {
                Ho(this);
              },
              [Ie](M) {
                this.contains(M.relatedTarget) || Wo(this);
              },
            },
            input: {
              [_t]() {
                fx(this), dd(this);
              },
            },
          };
        u() ||
          (Dd.mouseover = {
            [fe]() {
              Fx(this);
            },
            [Vt]() {
              Px(this);
            },
            [zt]() {
              Ux(this);
            },
          });
        const $x = a(Dd, {
          init(M) {
            s(Ie, M).forEach((K) => {
              dx(K);
            });
          },
          getDatePickerContext: Et,
          disable: ud,
          ariaDisable: fd,
          enable: ux,
          isDateInputInvalid: Xc,
          setCalendarValue: Qc,
          validateDateInput: Ho,
          renderCalendar: Cn,
          updateCalendarIfVisible: dd,
        });
        t.exports = $x;
      },
      {
        "../../uswds-core/src/js/config": 35,
        "../../uswds-core/src/js/events": 36,
        "../../uswds-core/src/js/utils/active-element": 44,
        "../../uswds-core/src/js/utils/behavior": 45,
        "../../uswds-core/src/js/utils/is-ios-device": 49,
        "../../uswds-core/src/js/utils/sanitizer": 50,
        "../../uswds-core/src/js/utils/select": 53,
        "../../uswds-core/src/js/utils/select-or-matches": 52,
        "receptor/keymap": 10,
      },
    ],
    20: [
      function (e, t, r) {
        const n = e("../../uswds-core/src/js/utils/behavior"),
          a = e("../../uswds-core/src/js/utils/select"),
          i = e("../../uswds-core/src/js/utils/select-or-matches"),
          { prefix: s } = e("../../uswds-core/src/js/config"),
          {
            getDatePickerContext: o,
            isDateInputInvalid: l,
            updateCalendarIfVisible: c,
          } = e("../../usa-date-picker/src/index"),
          u = `${s}-date-picker`,
          f = `${s}-date-range-picker`,
          d = `${f}__range-start`,
          h = `${f}__range-end`,
          m = `.${u}`,
          p = `.${f}`,
          x = `.${d}`,
          _ = `.${h}`,
          v = "0000-01-01",
          g = (A) => {
            const F = A.closest(p);
            if (!F) throw new Error(`Element is missing outer ${p}`);
            const I = F.querySelector(x),
              P = F.querySelector(_);
            return { dateRangePickerEl: F, rangeStartEl: I, rangeEndEl: P };
          },
          S = (A) => {
            const {
                dateRangePickerEl: F,
                rangeStartEl: I,
                rangeEndEl: P,
              } = g(A),
              { internalInputEl: B } = o(I),
              X = B.value;
            X && !l(B)
              ? ((P.dataset.minDate = X),
                (P.dataset.rangeDate = X),
                (P.dataset.defaultDate = X))
              : ((P.dataset.minDate = F.dataset.minDate || ""),
                (P.dataset.rangeDate = ""),
                (P.dataset.defaultDate = "")),
              c(P);
          },
          b = (A) => {
            const {
                dateRangePickerEl: F,
                rangeStartEl: I,
                rangeEndEl: P,
              } = g(A),
              { internalInputEl: B } = o(P),
              X = B.value;
            X && !l(B)
              ? ((I.dataset.maxDate = X),
                (I.dataset.rangeDate = X),
                (I.dataset.defaultDate = X))
              : ((I.dataset.maxDate = F.dataset.maxDate || ""),
                (I.dataset.rangeDate = ""),
                (I.dataset.defaultDate = "")),
              c(I);
          },
          C = (A) => {
            const F = A.closest(p),
              [I, P] = a(m, F);
            if (!I)
              throw new Error(`${p} is missing inner two '${m}' elements`);
            if (!P) throw new Error(`${p} is missing second '${m}' element`);
            I.classList.add(d),
              P.classList.add(h),
              F.dataset.minDate || (F.dataset.minDate = v);
            const { minDate: B } = F.dataset;
            (I.dataset.minDate = B), (P.dataset.minDate = B);
            const { maxDate: X } = F.dataset;
            X && ((I.dataset.maxDate = X), (P.dataset.maxDate = X)), S(F), b(F);
          },
          D = n(
            {
              "input change": {
                [x]() {
                  S(this);
                },
                [_]() {
                  b(this);
                },
              },
            },
            {
              init(A) {
                i(p, A).forEach((F) => {
                  C(F);
                });
              },
            },
          );
        t.exports = D;
      },
      {
        "../../usa-date-picker/src/index": 19,
        "../../uswds-core/src/js/config": 35,
        "../../uswds-core/src/js/utils/behavior": 45,
        "../../uswds-core/src/js/utils/select": 53,
        "../../uswds-core/src/js/utils/select-or-matches": 52,
      },
    ],
    21: [
      function (e, t, r) {
        const n = e("../../uswds-core/src/js/utils/select-or-matches"),
          a = e("../../uswds-core/src/js/utils/behavior"),
          i = e("../../uswds-core/src/js/utils/sanitizer"),
          { prefix: s } = e("../../uswds-core/src/js/config"),
          o = `${s}-file-input`,
          l = `.${o}`,
          c = `${s}-file-input__input`,
          u = `${s}-file-input__target`,
          f = `.${c}`,
          d = `${s}-file-input__box`,
          h = `${s}-file-input__instructions`,
          m = `${s}-file-input__preview`,
          p = `${s}-file-input__preview-heading`,
          x = `${s}-file-input--disabled`,
          _ = `${s}-file-input__choose`,
          v = `${s}-file-input__accepted-files-message`,
          g = `${s}-file-input__drag-text`,
          S = `${s}-file-input--drag`,
          b = "is-loading",
          C = "has-invalid-file",
          D = `${s}-file-input__preview-image`,
          A = `${D}--generic`,
          F = `${D}--pdf`,
          I = `${D}--word`,
          P = `${D}--video`,
          B = `${D}--excel`,
          X = `${s}-sr-only`,
          ae =
            "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
        let le = !0,
          Re = "",
          Ae = "";
        const se = (q) => {
            const we = q.closest(l);
            if (!we) throw new Error(`Element is missing outer ${l}`);
            const Ie = we.querySelector(f);
            return { dropZoneEl: we, inputEl: Ie };
          },
          ye = (q) => {
            const { dropZoneEl: we, inputEl: Ie } = se(q);
            (Ie.disabled = !0), we.classList.add(x);
          },
          ge = (q) => {
            const { dropZoneEl: we } = se(q);
            we.classList.add(x);
          },
          oe = (q) => {
            const { dropZoneEl: we, inputEl: Ie } = se(q);
            (Ie.disabled = !1),
              we.classList.remove(x),
              we.removeAttribute("aria-disabled");
          },
          O = (q) => {
            const we = q.charCodeAt(0);
            return we === 32
              ? "-"
              : we >= 65 && we <= 90
                ? `img_${q.toLowerCase()}`
                : `__${we.toString(16).slice(-4)}`;
          },
          U = (q) => q.replace(/[^a-z0-9]/g, O),
          R = (q) => `${q}-${Math.floor(Date.now().toString() / 1e3)}`,
          k = (q) => (q.hasAttribute("multiple") ? "files" : "file"),
          z = (q) => {
            const we = document.createElement("div"),
              Ie = document.createElement("div"),
              Ve = document.createElement("div");
            return (
              q.classList.remove(o),
              q.classList.add(c),
              we.classList.add(o),
              Ve.classList.add(d),
              Ie.classList.add(u),
              Ie.prepend(Ve),
              q.parentNode.insertBefore(Ie, q),
              q.parentNode.insertBefore(we, Ie),
              Ie.appendChild(q),
              we.appendChild(Ie),
              Ie
            );
          },
          re = (q) => {
            const we = q.closest(l),
              Ie = k(q),
              Ve = document.createElement("div"),
              Ge = `Drag ${Ie} here or`,
              _t = "choose from folder";
            return (
              (Re = `${Ge} ${_t}`),
              Ve.classList.add(h),
              Ve.setAttribute("aria-hidden", "true"),
              q.setAttribute("aria-label", Re),
              (Ve.innerHTML = i.escapeHTML`<span class="${g}">${Ge}</span> <span class="${_}">${_t}</span>`),
              q.parentNode.insertBefore(Ve, q),
              (/rv:11.0/i.test(navigator.userAgent) ||
                /Edge\/\d./i.test(navigator.userAgent)) &&
                (we.querySelector(`.${g}`).outerHTML = ""),
              Ve
            );
          },
          Se = (q) => {
            const we = document.createElement("div"),
              Ie = k(q),
              Ve = q.closest(l),
              Ge = q.closest(`.${u}`);
            (Ae = `No ${Ie} selected.`),
              we.classList.add(X),
              we.setAttribute("aria-live", "polite"),
              (we.textContent = Ae),
              Ve.insertBefore(we, Ge);
          },
          he = (q) => {
            const we =
                q.hasAttribute("aria-disabled") || q.hasAttribute("disabled"),
              Ie = z(q),
              Ve = re(q),
              { dropZoneEl: Ge } = se(q);
            return (
              we ? Ge.classList.add(x) : Se(q),
              { instructions: Ve, dropTarget: Ie }
            );
          },
          ve = (q, we) => {
            const Ie = q.querySelectorAll(`.${m}`),
              Ve = q.querySelector(`.${p}`),
              Ge = q.querySelector(`.${v}`),
              _t = (at) => {
                at.parentNode.removeChild(at);
              };
            Ve && (Ve.outerHTML = ""),
              Ge && ((Ge.outerHTML = ""), q.classList.remove(C)),
              Ie !== null &&
                (we && we.removeAttribute("hidden"),
                Array.prototype.forEach.call(Ie, _t));
          },
          He = (q, we, Ie) => {
            const Ve = q;
            let Ge = Ae;
            we.length === 1
              ? (Ge = `You have selected the file: ${Ie}`)
              : we.length > 1 &&
                (Ge = `You have selected ${we.length} files: ${Ie.join(", ")}`),
              setTimeout(() => {
                Ve.textContent = Ge;
              }, 1e3);
          },
          je = (q, we) => {
            const Ie = document.createElement("div"),
              Ve = q.closest(`.${u}`),
              Ge = Ve.querySelector(`.${h}`);
            let _t = "Change file",
              at = "";
            we.length === 1
              ? (at = i.escapeHTML`Selected file <span class="usa-file-input__choose">${_t}</span>`)
              : we.length > 1 &&
                ((_t = "Change files"),
                (at = i.escapeHTML`${we.length} files selected <span class="usa-file-input__choose">${_t}</span>`)),
              Ge.setAttribute("hidden", "true"),
              Ie.classList.add(p),
              (Ie.innerHTML = at),
              Ve.insertBefore(Ie, Ge),
              q.setAttribute("aria-label", _t);
          },
          be = (q, we, Ie, Ve) => {
            const Ge = q.target.files,
              at = Ve.closest(`.${o}`).querySelector(`.${X}`),
              _e = [];
            ve(Ve, Ie);
            for (let V = 0; V < Ge.length; V += 1) {
              const ie = new FileReader(),
                fe = Ge[V].name;
              let Pe;
              _e.push(fe),
                (ie.onloadstart = function () {
                  (Pe = R(U(fe))),
                    Ie.insertAdjacentHTML(
                      "afterend",
                      i.escapeHTML`<div class="${m}" aria-hidden="true">
          <img id="${Pe}" src="${ae}" alt="" class="${D} ${b}"/>${fe}
        <div>`,
                    );
                }),
                (ie.onloadend = function () {
                  const Ke = document.getElementById(Pe);
                  fe.indexOf(".pdf") > 0
                    ? Ke.setAttribute(
                        "onerror",
                        `this.onerror=null;this.src="${ae}"; this.classList.add("${F}")`,
                      )
                    : fe.indexOf(".doc") > 0 || fe.indexOf(".pages") > 0
                      ? Ke.setAttribute(
                          "onerror",
                          `this.onerror=null;this.src="${ae}"; this.classList.add("${I}")`,
                        )
                      : fe.indexOf(".xls") > 0 || fe.indexOf(".numbers") > 0
                        ? Ke.setAttribute(
                            "onerror",
                            `this.onerror=null;this.src="${ae}"; this.classList.add("${B}")`,
                          )
                        : fe.indexOf(".mov") > 0 || fe.indexOf(".mp4") > 0
                          ? Ke.setAttribute(
                              "onerror",
                              `this.onerror=null;this.src="${ae}"; this.classList.add("${P}")`,
                            )
                          : Ke.setAttribute(
                              "onerror",
                              `this.onerror=null;this.src="${ae}"; this.classList.add("${A}")`,
                            ),
                    Ke.classList.remove(b),
                    (Ke.src = ie.result);
                }),
                Ge[V] && ie.readAsDataURL(Ge[V]);
            }
            Ge.length === 0 ? we.setAttribute("aria-label", Re) : je(we, Ge),
              He(at, Ge, _e);
          },
          Oe = (q, we, Ie, Ve) => {
            const Ge = we.getAttribute("accept");
            Ve.classList.remove(C);
            const _t = (at, _e) => {
              let V = !1;
              return at.indexOf(_e) >= 0 && (V = !0), V;
            };
            if (Ge) {
              const at = Ge.split(","),
                _e = document.createElement("div");
              let V = !0;
              const ie = q.target.files || q.dataTransfer.files;
              for (let fe = 0; fe < ie.length; fe += 1) {
                const Pe = ie[fe];
                if (V)
                  for (let Xe = 0; Xe < at.length; Xe += 1) {
                    const Ke = at[Xe];
                    if (
                      ((V =
                        Pe.name.indexOf(Ke) > 0 ||
                        _t(Pe.type, Ke.replace(/\*/g, ""))),
                      V)
                    ) {
                      le = !0;
                      break;
                    }
                  }
                else break;
              }
              V ||
                (ve(Ve, Ie),
                (we.value = ""),
                Ve.insertBefore(_e, we),
                (_e.textContent =
                  we.dataset.errormessage || "This is not a valid file type."),
                _e.classList.add(v),
                Ve.classList.add(C),
                (le = !1),
                q.preventDefault(),
                q.stopPropagation());
            }
          },
          Je = (q, we, Ie, Ve) => {
            Oe(q, we, Ie, Ve), le === !0 && be(q, we, Ie, Ve);
          },
          Ze = a(
            {},
            {
              init(q) {
                n(l, q).forEach((we) => {
                  const { instructions: Ie, dropTarget: Ve } = he(we);
                  Ve.addEventListener(
                    "dragover",
                    function () {
                      this.classList.add(S);
                    },
                    !1,
                  ),
                    Ve.addEventListener(
                      "dragleave",
                      function () {
                        this.classList.remove(S);
                      },
                      !1,
                    ),
                    Ve.addEventListener(
                      "drop",
                      function () {
                        this.classList.remove(S);
                      },
                      !1,
                    ),
                    we.addEventListener(
                      "change",
                      (Ge) => Je(Ge, we, Ie, Ve),
                      !1,
                    );
                });
              },
              teardown(q) {
                n(f, q).forEach((we) => {
                  const Ie = we.parentElement.parentElement;
                  Ie.parentElement.replaceChild(we, Ie), (we.className = o);
                });
              },
              getFileInputContext: se,
              disable: ye,
              ariaDisable: ge,
              enable: oe,
            },
          );
        t.exports = Ze;
      },
      {
        "../../uswds-core/src/js/config": 35,
        "../../uswds-core/src/js/utils/behavior": 45,
        "../../uswds-core/src/js/utils/sanitizer": 50,
        "../../uswds-core/src/js/utils/select-or-matches": 52,
      },
    ],
    22: [
      function (e, t, r) {
        const n = e("../../uswds-core/src/js/utils/behavior"),
          { CLICK: a } = e("../../uswds-core/src/js/events"),
          { prefix: i } = e("../../uswds-core/src/js/config"),
          s = `.${i}-footer--big`,
          l = `${`${s} nav`} .${i}-footer__primary-link`,
          c = 480;
        function u() {
          if (window.innerWidth < c) {
            const h = this.getAttribute("aria-expanded") === "true";
            this.closest(s)
              .querySelectorAll(l)
              .forEach((p) => {
                p.setAttribute("aria-expanded", !1);
              }),
              this.setAttribute("aria-expanded", !h);
          }
        }
        function f(h) {
          const m = document.querySelector(s);
          if (!m) return;
          m.querySelectorAll(l).forEach((x) => {
            const _ = x.getAttribute("class"),
              v = x.getAttribute("data-tag") || x.tagName,
              g = h ? "button" : v,
              S = document.createElement(g);
            if (
              (S.setAttribute("class", _),
              S.classList.toggle(`${i}-footer__primary-link--button`, h),
              (S.textContent = x.textContent),
              h)
            ) {
              S.setAttribute("data-tag", x.tagName);
              const b = `${i}-footer-menu-list-${Math.floor(Math.random() * 1e5)}`;
              S.setAttribute("aria-controls", b),
                S.setAttribute("aria-expanded", "false"),
                x.nextElementSibling.setAttribute("id", b),
                S.setAttribute("type", "button");
            }
            x.after(S), x.remove();
          });
        }
        const d = (h) => {
          f(h.matches);
        };
        t.exports = n(
          { [a]: { [l]: u } },
          {
            HIDE_MAX_WIDTH: c,
            init() {
              f(window.innerWidth < c),
                (this.mediaQueryList = window.matchMedia(
                  `(max-width: ${c - 0.1}px)`,
                )),
                this.mediaQueryList.addListener(d);
            },
            teardown() {
              this.mediaQueryList.removeListener(d);
            },
          },
        );
      },
      {
        "../../uswds-core/src/js/config": 35,
        "../../uswds-core/src/js/events": 36,
        "../../uswds-core/src/js/utils/behavior": 45,
      },
    ],
    23: [
      function (e, t, r) {
        const n = e("receptor/keymap"),
          a = e("../../uswds-core/src/js/utils/behavior"),
          i = e("../../uswds-core/src/js/utils/select"),
          s = e("../../uswds-core/src/js/utils/toggle"),
          o = e("../../uswds-core/src/js/utils/focus-trap"),
          l = e("../../usa-accordion/src/index"),
          c = e("../../uswds-core/src/js/utils/scrollbar-width"),
          { CLICK: u } = e("../../uswds-core/src/js/events"),
          { prefix: f } = e("../../uswds-core/src/js/config"),
          d = "body",
          h = `.${f}-header`,
          m = `.${f}-nav`,
          p = `.${f}-nav-container`,
          x = `.${f}-nav__primary`,
          _ = `.${f}-nav__primary-item`,
          v = `button.${f}-nav__link`,
          g = `${m} a`,
          S = "data-nav-hidden",
          b = `.${f}-menu-btn`,
          C = `.${f}-nav__close`,
          D = `.${f}-overlay`,
          A = `${C}, .${f}-overlay`,
          F = [m, D].join(", "),
          I = `body *:not(${h}, ${p}, ${m}, ${m} *):not([aria-hidden])`,
          P = `[${S}]`,
          B = "usa-js-mobile-nav--active",
          X = "is-visible";
        let ae, le, Re;
        const Ae = () => document.body.classList.contains(B),
          se =
            navigator.userAgent.includes("Safari") &&
            !navigator.userAgent.includes("Chrome"),
          ye = c(),
          ge = window
            .getComputedStyle(document.body)
            .getPropertyValue("padding-right"),
          oe = `${parseInt(ge.replace(/px/, ""), 10) + parseInt(ye.replace(/px/, ""), 10)}px`,
          O = () => {
            const be = document.querySelector(`${h}`).parentNode;
            (Re = document.querySelectorAll(I)),
              Re.forEach((Oe) => {
                Oe !== be &&
                  (Oe.setAttribute("aria-hidden", !0), Oe.setAttribute(S, ""));
              });
          },
          U = () => {
            (Re = document.querySelectorAll(P)),
              Re &&
                Re.forEach((be) => {
                  be.removeAttribute("aria-hidden"), be.removeAttribute(S);
                });
          },
          R = (be) => {
            be ? O() : U();
          },
          k = () => {
            se && document.body.classList.add("is-safari");
          },
          z = (be) => {
            const Oe = `-${window.scrollY}px`;
            se && be.style.setProperty("--scrolltop", Oe);
          },
          re = (be) => {
            const { body: Oe } = document,
              Je = typeof be == "boolean" ? be : !Ae();
            z(Oe),
              Oe.classList.toggle(B, Je),
              i(F).forEach((we) => we.classList.toggle(X, Je)),
              ae.focusTrap.update(Je);
            const Ze = Oe.querySelector(C),
              q = document.querySelector(b);
            return (
              (Oe.style.paddingRight = Oe.style.paddingRight === oe ? ge : oe),
              R(Je),
              Je && Ze
                ? Ze.focus()
                : !Je &&
                  q &&
                  getComputedStyle(q).display !== "none" &&
                  q.focus(),
              Je
            );
          },
          Se = () => {
            const be = document.body.querySelector(C);
            Ae() &&
              be &&
              be.getBoundingClientRect().width === 0 &&
              ae.toggleNav.call(be, !1);
          },
          he = () => ae.toggleNav.call(ae, !1),
          ve = () => {
            le && (s(le, !1), (le = null));
          },
          He = (be) => {
            const Oe = be.target.closest(_);
            if (!be.target.matches(v)) {
              const Je = Oe.querySelector(v);
              Je && Je.focus();
            }
          },
          je = (be) => {
            ve(), He(be);
          };
        (ae = a(
          {
            [u]: {
              [v]() {
                return le !== this && ve(), le || ((le = this), s(le, !0)), !1;
              },
              [d]: ve,
              [b]: re,
              [A]: re,
              [g]() {
                const be = this.closest(l.ACCORDION);
                be && l.getButtons(be).forEach((Oe) => l.hide(Oe)),
                  Ae() && ae.toggleNav.call(ae, !1);
              },
            },
            keydown: { [x]: n({ Escape: je }) },
            focusout: {
              [x](be) {
                be.target.closest(x).contains(be.relatedTarget) || ve();
              },
            },
          },
          {
            init(be) {
              const Oe = be.matches(m) ? be : be.querySelector(m);
              Oe && (ae.focusTrap = o(Oe, { Escape: he })),
                k(),
                Se(),
                window.addEventListener("resize", Se, !1);
            },
            teardown() {
              window.removeEventListener("resize", Se, !1), (le = !1);
            },
            focusTrap: null,
            toggleNav: re,
          },
        )),
          (t.exports = ae);
      },
      {
        "../../usa-accordion/src/index": 14,
        "../../uswds-core/src/js/config": 35,
        "../../uswds-core/src/js/events": 36,
        "../../uswds-core/src/js/utils/behavior": 45,
        "../../uswds-core/src/js/utils/focus-trap": 47,
        "../../uswds-core/src/js/utils/scrollbar-width": 51,
        "../../uswds-core/src/js/utils/select": 53,
        "../../uswds-core/src/js/utils/toggle": 56,
        "receptor/keymap": 10,
      },
    ],
    24: [
      function (e, t, r) {
        const n = e("receptor/once"),
          a = e("receptor/keymap"),
          i = e("../../uswds-core/src/js/utils/select-or-matches"),
          s = e("../../uswds-core/src/js/utils/behavior"),
          { prefix: o } = e("../../uswds-core/src/js/config"),
          { CLICK: l } = e("../../uswds-core/src/js/events"),
          c = e("../../uswds-core/src/js/utils/sanitizer"),
          u = `${o}-current`,
          f = "h2 h3",
          d = ["h1", "h2", "h3", "h4", "h5", "h6"],
          h = "On this page",
          m = "h4",
          p = 0,
          x = "0px 0px 0px 0px",
          _ = "1",
          v = `${o}-in-page-nav`,
          g = `${o}-anchor`,
          S = `${v}__nav`,
          b = `${v}__list`,
          C = `${v}__item`,
          D = `${C}--primary`,
          A = `${v}__link`,
          F = `${v}__heading`,
          I = "main",
          P = (R) => {
            const k = document.querySelectorAll(`.${A}`);
            R.map((z) =>
              z.isIntersecting === !0 && z.intersectionRatio >= 1
                ? (k.forEach((re) => re.classList.remove(u)),
                  document
                    .querySelector(`a[href="#${z.target.id}"]`)
                    .classList.add(u),
                  !0)
                : !1,
            );
          },
          B = (R, k) => {
            const z = k.indexOf(" ") ? k.split(" ") : k,
              re = document.querySelector(R);
            return (
              z.forEach((he) => {
                if (!d.includes(he))
                  throw new Error(`In-page navigation: data-heading-elements attribute defined with an invalid heading type: "${he}".
        Define the attribute with one or more of the following: "${d}".
        Do not use commas or other punctuation in the attribute definition.`);
              }),
              Array.from(re.querySelectorAll(z))
            );
          },
          X = (R, k) =>
            B(R, k).filter((Se) => {
              const he = window.getComputedStyle(Se);
              return (
                he.getPropertyValue("display") !== "none" &&
                he.getPropertyValue("visibility") !== "hidden"
              );
            }),
          ae = (R) => R[0].tagName.toLowerCase(),
          le = () => document.querySelectorAll(`.${g}`),
          Re = (R) => {
            const k = R.textContent
              .toLowerCase()
              .replace(/[^a-z\d]/g, "-")
              .replace(/-{2,}/g, "-")
              .replace(/^-|-$/g, "");
            let z,
              re = 0;
            do (z = k), (re += 1), re > 1 && (z += `-${re}`);
            while (document.getElementById(z));
            return z;
          },
          Ae = (R) => {
            let k;
            return (
              R && R.nodeType === 1
                ? (k = R.getAttribute("href").replace("#", ""))
                : (k = R.target.hash.replace("#", "")),
              k
            );
          },
          se = (R) => {
            const z = document.querySelector(`.${v}`).dataset.scrollOffset || p;
            window.scroll({
              behavior: "smooth",
              top: R.offsetTop - z,
              block: "start",
            }),
              window.location.hash.slice(1) !== R.id &&
                window.history.pushState(null, "", `#${R.id}`);
          },
          ye = () => {
            const R = window.location.hash.slice(1);
            if (R) {
              const k = document.getElementById(R);
              k && se(k);
            }
          },
          ge = (R) => {
            const k = c.escapeHTML`${R.dataset.titleText || h}`,
              z = c.escapeHTML`${R.dataset.titleHeadingLevel || m}`,
              re = c.escapeHTML`${R.dataset.rootMargin || x}`,
              Se = c.escapeHTML`${R.dataset.threshold || _}`,
              he = c.escapeHTML`${R.dataset.mainContentSelector || I}`,
              ve = c.escapeHTML`${R.dataset.headingElements || f}`,
              He = { root: null, rootMargin: re, threshold: [Se] },
              je = X(he, ve),
              be = document.createElement("nav");
            be.setAttribute("aria-label", k), be.classList.add(S);
            const Oe = document.createElement(z);
            Oe.classList.add(F),
              Oe.setAttribute("tabindex", "0"),
              (Oe.textContent = k),
              be.appendChild(Oe);
            const Je = document.createElement("ul");
            Je.classList.add(b),
              be.appendChild(Je),
              je.forEach((we) => {
                const Ie = document.createElement("li"),
                  Ve = document.createElement("a"),
                  Ge = document.createElement("a"),
                  _t = we.textContent,
                  at = we.tagName.toLowerCase(),
                  _e = ae(je),
                  V = Re(we);
                Ie.classList.add(C),
                  at === _e && Ie.classList.add(D),
                  Ve.setAttribute("href", `#${V}`),
                  Ve.setAttribute("class", A),
                  (Ve.textContent = _t),
                  Ge.setAttribute("id", V),
                  Ge.setAttribute("class", g),
                  we.insertAdjacentElement("afterbegin", Ge),
                  Je.appendChild(Ie),
                  Ie.appendChild(Ve);
              }),
              R.appendChild(be);
            const Ze = le(),
              q = new window.IntersectionObserver(P, He);
            Ze.forEach((we) => {
              q.observe(we);
            });
          },
          oe = (R) => {
            const k = document.getElementById(R.hash.slice(1));
            se(k);
          },
          O = (R) => {
            const k = Ae(R),
              z = document.getElementById(k),
              re = z.parentElement;
            re &&
              (re.setAttribute("tabindex", 0),
              re.focus(),
              re.addEventListener(
                "blur",
                n(() => {
                  re.setAttribute("tabindex", -1);
                }),
              )),
              se(z);
          },
          U = s(
            {
              [l]: {
                [`.${A}`](R) {
                  R.preventDefault(), !this.disabled && oe(this);
                },
              },
              keydown: { [`.${A}`]: a({ Enter: O }) },
            },
            {
              init(R) {
                i(`.${v}`, R).forEach((k) => {
                  ge(k), ye();
                });
              },
            },
          );
        t.exports = U;
      },
      {
        "../../uswds-core/src/js/config": 35,
        "../../uswds-core/src/js/events": 36,
        "../../uswds-core/src/js/utils/behavior": 45,
        "../../uswds-core/src/js/utils/sanitizer": 50,
        "../../uswds-core/src/js/utils/select-or-matches": 52,
        "receptor/keymap": 10,
        "receptor/once": 11,
      },
    ],
    25: [
      function (e, t, r) {
        const n = e("../../uswds-core/src/js/utils/select-or-matches"),
          a = e("../../uswds-core/src/js/utils/behavior"),
          { prefix: i } = e("../../uswds-core/src/js/config"),
          o = `.${`${i}-masked`}`,
          l = `${i}-input-mask`,
          c = `${l}--content`,
          u = "placeholder",
          f = "_#dDmMyY9",
          d = "A",
          h = (C) => {
            const D = C.getAttribute(`${u}`);
            if (D)
              C.setAttribute("maxlength", D.length),
                C.setAttribute("data-placeholder", D),
                C.removeAttribute(`${u}`);
            else return;
            const A = document.createElement("span");
            A.classList.add(l), A.setAttribute("data-mask", D);
            const F = document.createElement("span");
            F.classList.add(c),
              F.setAttribute("aria-hidden", "true"),
              (F.id = `${C.id}Mask`),
              (F.textContent = D),
              A.appendChild(F),
              C.parentNode.insertBefore(A, C),
              A.appendChild(C);
          },
          m = (C) => {
            const { value: D } = C,
              A = `${C.dataset.placeholder.substr(D.length)}`,
              F = document.createElement("i");
            return (F.textContent = D), [F, A];
          },
          p = (C, D) => (C ? D.replace(/\W/g, "") : D.replace(/\D/g, "")),
          x = (C) => !Number.isNaN(parseInt(C, 10)),
          _ = (C) => (C ? C.match(/[A-Z]/i) : !1),
          v = (C) => {
            const D = C.dataset.charset,
              A = D || C.dataset.placeholder,
              { value: F } = C,
              I = A.length;
            let P = "",
              B,
              X;
            const ae = p(D, F);
            for (B = 0, X = 0; B < I; B += 1) {
              const le = x(ae[X]),
                Re = _(ae[X]),
                Ae = f.indexOf(A[B]) >= 0,
                se = d.indexOf(A[B]) >= 0;
              if ((Ae && le) || (D && se && Re)) (P += ae[X]), (X += 1);
              else {
                if ((!D && !le && Ae) || (D && ((se && !Re) || (Ae && !le))))
                  return P;
                P += A[B];
              }
              if (ae[X] === void 0) break;
            }
            return P;
          },
          g = (C) => {
            const D = C,
              A = D.getAttribute("id");
            D.value = v(D);
            const F = m(C),
              I = document.getElementById(`${A}Mask`);
            (I.textContent = ""), I.replaceChildren(F[0], F[1]);
          },
          S = {
            keyup: {
              [o]() {
                g(this);
              },
            },
          },
          b = a(S, {
            init(C) {
              n(o, C).forEach((D) => {
                h(D);
              });
            },
          });
        t.exports = b;
      },
      {
        "../../uswds-core/src/js/config": 35,
        "../../uswds-core/src/js/utils/behavior": 45,
        "../../uswds-core/src/js/utils/select-or-matches": 52,
      },
    ],
    26: [
      function (e, t, r) {
        const n = e("receptor/keymap"),
          a = e("../../uswds-core/src/js/utils/behavior"),
          i = e("../../uswds-core/src/js/utils/toggle"),
          s = e("../../uswds-core/src/js/utils/focus-trap"),
          o = e("../../usa-accordion/src/index"),
          { CLICK: l } = e("../../uswds-core/src/js/events"),
          { prefix: c } = e("../../uswds-core/src/js/config"),
          u = "body",
          f = `.${c}-language`,
          d = `.${c}-language__submenu`,
          h = `.${c}-language__primary`,
          m = `.${c}-language__primary-item`,
          p = `button.${c}-language__link`,
          x = `${f} a`;
        let _, v;
        const g = () => _.toggleLanguage.call(_, !1),
          S = () => {
            v && (i(v, !1), (v = null));
          },
          b = (D) => {
            const A = D.target.closest(m);
            D.target.matches(p) || A.querySelector(p).focus();
          },
          C = (D) => {
            S(), b(D);
          };
        (_ = a(
          {
            [l]: {
              [p]() {
                return (
                  v !== this && S(),
                  v === this ? (S(), !1) : (v || ((v = this), i(v, !0)), !1)
                );
              },
              [u]: S,
              [x]() {
                const D = this.closest(o.ACCORDION);
                D && o.getButtons(D).forEach((A) => o.hide(A));
              },
            },
            keydown: { [h]: n({ Escape: C }) },
            focusout: {
              [h](D) {
                D.target.closest(h).contains(D.relatedTarget) || S();
              },
            },
          },
          {
            init(D) {
              const A = D.matches(d) ? D : D.querySelector(d);
              A && (_.focusTrap = s(A, { Escape: g }));
            },
            teardown() {
              v = !1;
            },
            focusTrap: null,
          },
        )),
          (t.exports = _);
      },
      {
        "../../usa-accordion/src/index": 14,
        "../../uswds-core/src/js/config": 35,
        "../../uswds-core/src/js/events": 36,
        "../../uswds-core/src/js/utils/behavior": 45,
        "../../uswds-core/src/js/utils/focus-trap": 47,
        "../../uswds-core/src/js/utils/toggle": 56,
        "receptor/keymap": 10,
      },
    ],
    27: [
      function (e, t, r) {
        const n = e("../../uswds-core/src/js/utils/select-or-matches"),
          a = e("../../uswds-core/src/js/utils/focus-trap"),
          i = e("../../uswds-core/src/js/utils/scrollbar-width"),
          s = e("../../uswds-core/src/js/utils/behavior"),
          { prefix: o } = e("../../uswds-core/src/js/config"),
          l = `${o}-modal`,
          c = `${l}-overlay`,
          u = `${l}-wrapper`,
          f = "data-open-modal",
          d = "data-close-modal",
          h = "data-force-action",
          m = "data-modal-hidden",
          p = `.${l}`,
          x = `.${u} *[data-focus]`,
          _ = `${u} *[${d}]`,
          v = `*[${f}][aria-controls]`,
          g = `${_}, .${c}:not([${h}])`,
          S = `body > *:not(.${u}):not([aria-hidden])`,
          b = `[${m}]`,
          C = "usa-js-modal--active",
          D = "usa-js-no-click",
          A = "is-visible",
          F = "is-hidden";
        let I, P, B;
        const X = () => document.body.classList.contains(C),
          ae = i(),
          le = () => {
            I.toggleModal.call(I, !1);
          },
          Re = () => {
            (P = window
              .getComputedStyle(document.body)
              .getPropertyValue("padding-right")),
              (B = `${parseInt(P.replace(/px/, ""), 10) + parseInt(ae.replace(/px/, ""), 10)}px`);
          };
        function Ae(U) {
          let R,
            k = U.target;
          const { body: z } = document,
            re = !X(),
            Se = k
              ? k.getAttribute("aria-controls")
              : document.querySelector(".usa-modal-wrapper.is-visible"),
            he = re
              ? document.getElementById(Se)
              : document.querySelector(".usa-modal-wrapper.is-visible");
          if (!he) return !1;
          const ve = he.querySelector(x)
              ? he.querySelector(x)
              : he.querySelector(".usa-modal"),
            He = document.getElementById(he.getAttribute("data-opener")),
            je = z.querySelector(v),
            be = he.getAttribute(h);
          return (
            U.type === "keydown" && he !== null && (k = he.querySelector(_)),
            k &&
            (k.hasAttribute(f) &&
              (this.getAttribute("id") === null
                ? ((R = `modal-${Math.floor(Math.random() * 9e5) + 1e5}`),
                  this.setAttribute("id", R))
                : (R = this.getAttribute("id")),
              he.setAttribute("data-opener", R)),
            k.closest(`.${l}`) && !(k.hasAttribute(d) || k.closest(`[${d}]`)))
              ? !1
              : (z.classList.toggle(C, re),
                he.classList.toggle(A, re),
                he.classList.toggle(F, !re),
                be && z.classList.toggle(D, re),
                z.style.paddingRight === B
                  ? z.style.removeProperty("padding-right")
                  : (z.style.paddingRight = B),
                re && ve
                  ? (be
                      ? (I.focusTrap = a(he))
                      : (I.focusTrap = a(he, { Escape: le })),
                    I.focusTrap.update(re),
                    ve.focus(),
                    document.querySelectorAll(S).forEach((Oe) => {
                      Oe.setAttribute("aria-hidden", "true"),
                        Oe.setAttribute(m, "");
                    }))
                  : !re &&
                    je &&
                    He &&
                    (document.querySelectorAll(b).forEach((Oe) => {
                      Oe.removeAttribute("aria-hidden"), Oe.removeAttribute(m);
                    }),
                    He.focus(),
                    I.focusTrap.update(re)),
                re)
          );
        }
        const se = (U) => {
            const R = U.getAttribute("id"),
              k = document.createElement("div"),
              z = Array.from(U.attributes);
            return (
              Re(),
              k.setAttribute("data-placeholder-for", R),
              (k.style.display = "none"),
              k.setAttribute("aria-hidden", "true"),
              z.forEach((re) => {
                k.setAttribute(`data-original-${re.name}`, re.value);
              }),
              k
            );
          },
          ye = (U, R) => {
            const k = U.getAttribute("id"),
              z = U.getAttribute("aria-labelledby"),
              re = U.getAttribute("aria-describedby"),
              Se = U.hasAttribute(h);
            if (!z)
              throw new Error(`${k} is missing aria-labelledby attribute`);
            if (!re)
              throw new Error(`${k} is missing aria-desribedby attribute`);
            return (
              R.setAttribute("role", "dialog"),
              R.setAttribute("id", k),
              R.setAttribute("aria-labelledby", z),
              R.setAttribute("aria-describedby", re),
              Se && R.setAttribute(h, Se),
              R.querySelectorAll(g).forEach((ve) => {
                ve.setAttribute("aria-controls", k);
              }),
              U.removeAttribute("id"),
              U.removeAttribute("aria-labelledby"),
              U.removeAttribute("aria-describedby"),
              U.setAttribute("tabindex", "-1"),
              R
            );
          },
          ge = (U) => {
            const R = U,
              k = document.createElement("div"),
              z = document.createElement("div");
            return (
              k.classList.add(F, u),
              z.classList.add(c),
              k.append(z),
              z.append(R),
              ye(R, k),
              k
            );
          },
          oe = (U) => {
            if (!U.getAttribute("id"))
              throw new Error("Modal markup is missing ID");
            const k = se(U);
            U.after(k);
            const z = ge(U);
            document.body.appendChild(z);
          },
          O = (U) => {
            const R = U,
              k = R.parentElement.parentElement,
              z = k.getAttribute("id");
            if (!z) return;
            const re = document.querySelector(`[data-placeholder-for="${z}"]`);
            re &&
              (Array.from(re.attributes).forEach((he) => {
                he.name.startsWith("data-original-") &&
                  R.setAttribute(he.name.substr(14), he.value);
              }),
              re.after(R),
              re.parentElement.removeChild(re)),
              k.parentElement.removeChild(k);
          };
        (I = s(
          {},
          {
            init(U) {
              n(p, U).forEach((R) => {
                const k = R.id;
                oe(R),
                  n(`[aria-controls="${k}"]`, document).forEach((z) => {
                    z.nodeName === "A" &&
                      (z.setAttribute("role", "button"),
                      z.addEventListener("click", (re) => re.preventDefault())),
                      z.addEventListener("click", Ae);
                  });
              });
            },
            teardown(U) {
              n(p, U).forEach((R) => {
                const k = R.id;
                O(R),
                  n(`[aria-controls="${k}"]`, document).forEach((z) =>
                    z.removeEventListener("click", Ae),
                  );
              });
            },
            focusTrap: null,
            toggleModal: Ae,
          },
        )),
          (t.exports = I);
      },
      {
        "../../uswds-core/src/js/config": 35,
        "../../uswds-core/src/js/utils/behavior": 45,
        "../../uswds-core/src/js/utils/focus-trap": 47,
        "../../uswds-core/src/js/utils/scrollbar-width": 51,
        "../../uswds-core/src/js/utils/select-or-matches": 52,
      },
    ],
    28: [
      function (e, t, r) {
        const n = e("../../uswds-core/src/js/utils/select-or-matches"),
          a = e("../../uswds-core/src/js/utils/behavior"),
          { prefix: i } = e("../../uswds-core/src/js/config"),
          o = `.${`${i}-range`}`,
          l = (f) => {
            const d = f,
              p = d.dataset.textPreposition || "of",
              x = d.dataset.textUnit,
              _ = d.value,
              v = d.getAttribute("max") || 100;
            let g;
            x ? (g = `${_} ${x} ${p} ${v}`) : (g = `${_} ${p} ${v}`),
              d.setAttribute("aria-valuetext", g);
          },
          c = {
            change: {
              [o]() {
                l(this);
              },
            },
          },
          u = a(c, {
            init(f) {
              n(o, f).forEach((d) => {
                l(d);
              });
            },
            updateCallout: l,
          });
        t.exports = u;
      },
      {
        "../../uswds-core/src/js/config": 35,
        "../../uswds-core/src/js/utils/behavior": 45,
        "../../uswds-core/src/js/utils/select-or-matches": 52,
      },
    ],
    29: [
      function (e, t, r) {
        const n = e("receptor/ignore"),
          a = e("../../uswds-core/src/js/utils/behavior"),
          i = e("../../uswds-core/src/js/utils/select"),
          { CLICK: s } = e("../../uswds-core/src/js/events"),
          o = ".js-search-button",
          l = ".js-search-form",
          c = "[type=search]",
          u = "header";
        let f;
        const d = (_) => {
            const v = _.closest(u);
            return v ? v.querySelector(l) : document.querySelector(l);
          },
          h = (_, v) => {
            const g = d(_);
            if (!g) throw new Error(`No ${l} found for search toggle in ${u}!`);
            if (((_.hidden = v), (g.hidden = !v), !v)) return;
            const S = g.querySelector(c);
            S && S.focus();
            const b = n(g, () => {
              f && p.call(f), document.body.removeEventListener(s, b);
            });
            setTimeout(() => {
              document.body.addEventListener(s, b);
            }, 0);
          };
        function m() {
          h(this, !0), (f = this);
        }
        function p() {
          h(this, !1), (f = void 0);
        }
        const x = a(
          { [s]: { [o]: m } },
          {
            init(_) {
              i(o, _).forEach((v) => {
                h(v, !1);
              });
            },
            teardown() {
              f = void 0;
            },
          },
        );
        t.exports = x;
      },
      {
        "../../uswds-core/src/js/events": 36,
        "../../uswds-core/src/js/utils/behavior": 45,
        "../../uswds-core/src/js/utils/select": 53,
        "receptor/ignore": 8,
      },
    ],
    30: [
      function (e, t, r) {
        const n = e("receptor/once"),
          a = e("../../uswds-core/src/js/utils/behavior"),
          { CLICK: i } = e("../../uswds-core/src/js/events"),
          { prefix: s } = e("../../uswds-core/src/js/config"),
          o = `.${s}-skipnav[href^="#"], .${s}-footer__return-to-top [href^="#"]`,
          l = "main-content";
        function c() {
          const u = encodeURI(this.getAttribute("href")),
            f = document.getElementById(u === "#" ? l : u.slice(1));
          f &&
            ((f.style.outline = "0"),
            f.setAttribute("tabindex", 0),
            f.focus(),
            f.addEventListener(
              "blur",
              n(() => {
                f.setAttribute("tabindex", -1);
              }),
            ));
        }
        t.exports = a({ [i]: { [o]: c } });
      },
      {
        "../../uswds-core/src/js/config": 35,
        "../../uswds-core/src/js/events": 36,
        "../../uswds-core/src/js/utils/behavior": 45,
        "receptor/once": 11,
      },
    ],
    31: [
      function (e, t, r) {
        const n = e("../../uswds-core/src/js/utils/select"),
          a = e("../../uswds-core/src/js/utils/behavior"),
          { CLICK: i } = e("../../uswds-core/src/js/events"),
          { prefix: s } = e("../../uswds-core/src/js/config"),
          o = e("../../uswds-core/src/js/utils/sanitizer"),
          l = `.${s}-table`,
          c = "aria-sort",
          u = "ascending",
          f = "descending",
          d = "data-sort-value",
          h = `${s}-table__header__button`,
          m = `.${h}`,
          p = "th[data-sortable]",
          x = `.${s}-table__announcement-region[aria-live="polite"]`,
          _ = (P, B) =>
            P.children[B].getAttribute(d) ||
            P.children[B].innerText ||
            P.children[B].textContent,
          v = (P, B) => (X, ae) => {
            const le = _(B ? X : ae, P),
              Re = _(B ? ae : X, P);
            return le &&
              Re &&
              !Number.isNaN(Number(le)) &&
              !Number.isNaN(Number(Re))
              ? le - Re
              : le
                  .toString()
                  .localeCompare(Re, navigator.language, {
                    numeric: !0,
                    ignorePunctuation: !0,
                  });
          },
          g = (P) => n(p, P).filter((X) => X.closest(l) === P),
          S = (P) => {
            const B = P.innerText,
              X = P.getAttribute(c) === u,
              ae = P.getAttribute(c) === u || P.getAttribute(c) === f || !1,
              le = `${B}, sortable column, currently ${ae ? `${X ? `sorted ${u}` : `sorted ${f}`}` : "unsorted"}`,
              Re = `Click to sort by ${B} in ${X ? f : u} order.`;
            P.setAttribute("aria-label", le),
              P.querySelector(m).setAttribute("title", Re);
          },
          b = (P) => {
            P.removeAttribute(c), S(P);
          },
          C = (P, B) => {
            P.setAttribute(c, B === !0 ? f : u), S(P);
            const X = P.closest(l).querySelector("tbody"),
              ae = [].slice.call(X.querySelectorAll("tr")),
              Re = [].slice.call(P.parentNode.children).indexOf(P);
            return (
              ae.sort(v(Re, !B)).forEach((Ae) => {
                [].slice
                  .call(Ae.children)
                  .forEach((se) => se.removeAttribute("data-sort-active")),
                  Ae.children[Re].setAttribute("data-sort-active", !0),
                  X.appendChild(Ae);
              }),
              !0
            );
          },
          D = (P, B) => {
            const X = P.querySelector("caption").innerText,
              ae = B.getAttribute(c) === u,
              le = B.innerText,
              Re = P.nextElementSibling;
            if (Re && Re.matches(x)) {
              const Ae = `The table named "${X}" is now sorted by ${le} in ${ae ? u : f} order.`;
              Re.innerText = Ae;
            } else
              throw new Error(
                "Table containing a sortable column header is not followed by an aria-live region.",
              );
          },
          A = (P, B) => {
            const X = P.closest(l);
            let ae = B;
            if ((typeof ae != "boolean" && (ae = P.getAttribute(c) === u), !X))
              throw new Error(`${p} is missing outer ${l}`);
            (ae = C(P, B)),
              ae &&
                (g(X).forEach((le) => {
                  le !== P && b(le);
                }),
                D(X, P));
          },
          F = (P) => {
            const B = document.createElement("button");
            B.setAttribute("tabindex", "0"),
              B.classList.add(h),
              (B.innerHTML = o.escapeHTML`
  <svg class="${s}-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g class="descending" fill="transparent">
      <path d="M17 17L15.59 15.59L12.9999 18.17V2H10.9999V18.17L8.41 15.58L7 17L11.9999 22L17 17Z" />
    </g>
    <g class="ascending" fill="transparent">
      <path transform="rotate(180, 12, 12)" d="M17 17L15.59 15.59L12.9999 18.17V2H10.9999V18.17L8.41 15.58L7 17L11.9999 22L17 17Z" />
    </g>
    <g class="unsorted" fill="transparent">
      <polygon points="15.17 15 13 17.17 13 6.83 15.17 9 16.58 7.59 12 3 7.41 7.59 8.83 9 11 6.83 11 17.17 8.83 15 7.42 16.41 12 21 16.59 16.41 15.17 15"/>
    </g>
  </svg>
  `),
              P.appendChild(B),
              S(P);
          },
          I = a(
            {
              [i]: {
                [m](P) {
                  P.preventDefault(),
                    A(
                      P.target.closest(p),
                      P.target.closest(p).getAttribute(c) === u,
                    );
                },
              },
            },
            {
              init(P) {
                const B = n(p, P);
                B.forEach((le) => F(le));
                const X = B.filter(
                  (le) => le.getAttribute(c) === u || le.getAttribute(c) === f,
                )[0];
                if (typeof X > "u") return;
                const ae = X.getAttribute(c);
                ae === u ? A(X, !0) : ae === f && A(X, !1);
              },
              TABLE: l,
              SORTABLE_HEADER: p,
              SORT_BUTTON: m,
            },
          );
        t.exports = I;
      },
      {
        "../../uswds-core/src/js/config": 35,
        "../../uswds-core/src/js/events": 36,
        "../../uswds-core/src/js/utils/behavior": 45,
        "../../uswds-core/src/js/utils/sanitizer": 50,
        "../../uswds-core/src/js/utils/select": 53,
      },
    ],
    32: [
      function (e, t, r) {
        const n = e("../../uswds-core/src/js/utils/behavior"),
          a = e("../../uswds-core/src/js/utils/select-or-matches"),
          { prefix: i } = e("../../uswds-core/src/js/config"),
          { COMBO_BOX_CLASS: s, enhanceComboBox: o } = e(
            "../../usa-combo-box/src/index",
          ),
          c = `.${`${i}-time-picker`}`,
          u = 60 * 24 - 1,
          f = 0,
          d = 30,
          h = 1,
          m = {
            filter:
              "0?{{ hourQueryFilter }}:{{minuteQueryFilter}}.*{{ apQueryFilter }}m?",
            apQueryFilter: "([ap])",
            hourQueryFilter: "([1-9][0-2]?)",
            minuteQueryFilter: "[\\d]+:([0-9]{0,2})",
          },
          p = (v) => {
            let g;
            if (v) {
              const [S, b] = v.split(":").map((C) => {
                let D;
                const A = parseInt(C, 10);
                return Number.isNaN(A) || (D = A), D;
              });
              S != null && b != null && (g = S * 60 + b);
            }
            return g;
          },
          x = (v) => {
            const g = v.closest(c),
              S = g.querySelector("input");
            if (!S) throw new Error(`${c} is missing inner input`);
            const b = document.createElement("select");
            [
              "id",
              "name",
              "required",
              "aria-label",
              "aria-labelledby",
              "disabled",
              "aria-disabled",
            ].forEach((B) => {
              if (S.hasAttribute(B)) {
                const X = S.getAttribute(B);
                b.setAttribute(B, X), S.removeAttribute(B);
              }
            });
            const C = (B, X) => `0000${B}`.slice(-X),
              D = (B) => {
                const X = B % 60,
                  ae = Math.floor(B / 60),
                  le = ae % 12 || 12,
                  Re = ae < 12 ? "am" : "pm";
                return { minute: X, hour24: ae, hour12: le, ampm: Re };
              },
              A = Math.max(f, p(g.dataset.minTime) || f),
              F = Math.min(u, p(g.dataset.maxTime) || u),
              I = Math.floor(Math.max(h, g.dataset.step || d));
            let P;
            for (let B = A; B <= F; B += I) {
              const { minute: X, hour24: ae, hour12: le, ampm: Re } = D(B),
                Ae = document.createElement("option");
              (Ae.value = `${C(ae, 2)}:${C(X, 2)}`),
                (Ae.text = `${le}:${C(X, 2)}${Re}`),
                Ae.text === S.value && (P = Ae.value),
                b.appendChild(Ae);
            }
            g.classList.add(s),
              Object.keys(m).forEach((B) => {
                g.dataset[B] = m[B];
              }),
              (g.dataset.disableFiltering = "true"),
              (g.dataset.defaultValue = P),
              g.appendChild(b),
              S.remove();
          },
          _ = n(
            {},
            {
              init(v) {
                a(c, v).forEach((g) => {
                  x(g), o(g);
                });
              },
              FILTER_DATASET: m,
            },
          );
        t.exports = _;
      },
      {
        "../../usa-combo-box/src/index": 18,
        "../../uswds-core/src/js/config": 35,
        "../../uswds-core/src/js/utils/behavior": 45,
        "../../uswds-core/src/js/utils/select-or-matches": 52,
      },
    ],
    33: [
      function (e, t, r) {
        const n = e("receptor/keymap"),
          a = e("../../uswds-core/src/js/utils/select-or-matches"),
          i = e("../../uswds-core/src/js/utils/behavior"),
          { prefix: s } = e("../../uswds-core/src/js/config"),
          o = e("../../uswds-core/src/js/utils/is-in-viewport"),
          l = "body",
          c = `.${s}-tooltip`,
          u = `.${s}-tooltip__trigger`,
          f = `${s}-tooltip__trigger`,
          d = `${s}-tooltip`,
          h = `${s}-tooltip__body`,
          m = "is-set",
          p = "is-visible",
          x = 5,
          _ = `${s}-tooltip__body--wrap`,
          v = (A) => {
            const F = A.parentNode,
              I = F.querySelector(`.${h}`);
            return { trigger: A, wrapper: F, body: I };
          },
          g = (A, F, I) => {
            A.setAttribute("aria-hidden", "false"), A.classList.add(m);
            const P = (oe) => {
                A.classList.remove(`${h}--top`),
                  A.classList.remove(`${h}--bottom`),
                  A.classList.remove(`${h}--right`),
                  A.classList.remove(`${h}--left`),
                  A.classList.add(`${h}--${oe}`);
              },
              B = (oe) => {
                (oe.style.top = null),
                  (oe.style.bottom = null),
                  (oe.style.right = null),
                  (oe.style.left = null),
                  (oe.style.margin = null);
              },
              X = (oe, O) =>
                parseInt(window.getComputedStyle(oe).getPropertyValue(O), 10),
              ae = (oe, O, U) =>
                X(U, `margin-${oe}`) > 0 ? O - X(U, `margin-${oe}`) : O,
              le = (oe) => {
                B(oe);
                const O = ae("top", oe.offsetHeight, F),
                  U = ae("left", oe.offsetWidth, F);
                P("top"),
                  (oe.style.left = "50%"),
                  (oe.style.top = `-${x}px`),
                  (oe.style.margin = `-${O}px 0 0 -${U / 2}px`);
              },
              Re = (oe) => {
                B(oe);
                const O = ae("left", oe.offsetWidth, F);
                P("bottom"),
                  (oe.style.left = "50%"),
                  (oe.style.margin = `${x}px 0 0 -${O / 2}px`);
              },
              Ae = (oe) => {
                B(oe);
                const O = ae("top", oe.offsetHeight, F);
                P("right"),
                  (oe.style.top = "50%"),
                  (oe.style.left = `${F.offsetLeft + F.offsetWidth + x}px`),
                  (oe.style.margin = `-${O / 2}px 0 0 0`);
              },
              se = (oe) => {
                B(oe);
                const O = ae("top", oe.offsetHeight, F),
                  U = ae(
                    "left",
                    F.offsetLeft > oe.offsetWidth
                      ? F.offsetLeft - oe.offsetWidth
                      : oe.offsetWidth,
                    F,
                  );
                P("left"),
                  (oe.style.top = "50%"),
                  (oe.style.left = `-${x}px`),
                  (oe.style.margin = `-${O / 2}px 0 0 ${F.offsetLeft > oe.offsetWidth ? U : -U}px`);
              },
              ye = 2;
            function ge(oe, O = 1) {
              const U = [le, Re, Ae, se];
              let R = !1;
              function k(z) {
                if (z < U.length) {
                  const re = U[z];
                  re(oe), o(oe) ? (R = !0) : k((z += 1));
                }
              }
              k(0), R || (oe.classList.add(_), O <= ye && ge(oe, (O += 1)));
            }
            switch (I) {
              case "top":
                le(A), o(A) || ge(A);
                break;
              case "bottom":
                Re(A), o(A) || ge(A);
                break;
              case "right":
                Ae(A), o(A) || ge(A);
                break;
              case "left":
                se(A), o(A) || ge(A);
                break;
            }
            setTimeout(() => {
              A.classList.add(p);
            }, 20);
          },
          S = (A) => {
            A.classList.remove(p),
              A.classList.remove(m),
              A.classList.remove(_),
              A.setAttribute("aria-hidden", "true");
          },
          b = (A) => {
            const F = `tooltip-${Math.floor(Math.random() * 9e5) + 1e5}`,
              I = A.getAttribute("title"),
              P = document.createElement("span"),
              B = document.createElement("span"),
              X = A.getAttribute("data-classes");
            let ae = A.getAttribute("data-position");
            return (
              ae || ((ae = "top"), A.setAttribute("data-position", ae)),
              A.setAttribute("aria-describedby", F),
              A.setAttribute("tabindex", "0"),
              A.removeAttribute("title"),
              A.classList.remove(d),
              A.classList.add(f),
              A.parentNode.insertBefore(P, A),
              P.appendChild(A),
              P.classList.add(d),
              P.appendChild(B),
              X && X.split(" ").forEach((Re) => P.classList.add(Re)),
              B.classList.add(h),
              B.setAttribute("id", F),
              B.setAttribute("role", "tooltip"),
              B.setAttribute("aria-hidden", "true"),
              (B.textContent = I),
              { tooltipBody: B, position: ae, tooltipContent: I, wrapper: P }
            );
          },
          C = () => {
            const A = a(`.${h}.${m}`);
            A && A.forEach((F) => S(F));
          },
          D = i(
            {
              "mouseover focusin": {
                [c](A) {
                  const F = A.target;
                  F.nodeName === "BUTTON" && F.hasAttribute("title") && b(F);
                },
                [u](A) {
                  const { trigger: F, body: I } = v(A.target);
                  g(I, F, F.dataset.position);
                },
              },
              focusout: {
                [u](A) {
                  const { body: F } = v(A.target);
                  S(F);
                },
              },
              keydown: { [l]: n({ Escape: C }) },
            },
            {
              init(A) {
                a(c, A).forEach((F) => {
                  b(F);
                  const { body: I, wrapper: P } = v(F);
                  P.addEventListener("mouseleave", () => S(I));
                });
              },
              teardown(A) {
                a(c, A).forEach((F) => {
                  F.removeEventListener("mouseleave", S);
                });
              },
              setup: b,
              getTooltipElements: v,
              show: g,
              hide: S,
            },
          );
        t.exports = D;
      },
      {
        "../../uswds-core/src/js/config": 35,
        "../../uswds-core/src/js/utils/behavior": 45,
        "../../uswds-core/src/js/utils/is-in-viewport": 48,
        "../../uswds-core/src/js/utils/select-or-matches": 52,
        "receptor/keymap": 10,
      },
    ],
    34: [
      function (e, t, r) {
        const n = e("../../uswds-core/src/js/utils/behavior"),
          a = e("../../uswds-core/src/js/utils/validate-input"),
          { prefix: i } = e("../../uswds-core/src/js/config"),
          s = e("../../uswds-core/src/js/utils/select-or-matches"),
          o =
            "input[data-validation-element],textarea[data-validation-element]",
          l = `.${i}-checklist__item`,
          c = (m) => a(m),
          u = (m) => {
            const p = m.parentNode,
              _ = `${m.getAttribute("id")}-sr-summary`;
            m.setAttribute("aria-describedby", _);
            const v = document.createElement("span");
            v.setAttribute("data-validation-status", ""),
              v.classList.add("usa-sr-only"),
              v.setAttribute("aria-live", "polite"),
              v.setAttribute("aria-atomic", !0),
              v.setAttribute("id", _),
              p.append(v);
          },
          f = (m) => {
            const x = m.parentNode.querySelectorAll(l),
              _ = m.getAttribute("data-validation-element");
            m.setAttribute("aria-controls", _),
              x.forEach((v) => {
                let g = "status incomplete";
                m.hasAttribute("data-validation-incomplete") &&
                  (g = m.getAttribute("data-validation-incomplete"));
                const S = `${v.textContent} ${g} `;
                v.setAttribute("aria-label", S);
              });
          },
          d = (m) => {
            u(m), f(m);
          },
          h = n(
            {
              "input change": {
                [o](m) {
                  c(m.target);
                },
              },
            },
            {
              init(m) {
                s(o, m).forEach((p) => d(p));
              },
            },
          );
        t.exports = h;
      },
      {
        "../../uswds-core/src/js/config": 35,
        "../../uswds-core/src/js/utils/behavior": 45,
        "../../uswds-core/src/js/utils/select-or-matches": 52,
        "../../uswds-core/src/js/utils/validate-input": 57,
      },
    ],
    35: [
      function (e, t, r) {
        t.exports = { prefix: "usa" };
      },
      {},
    ],
    36: [
      function (e, t, r) {
        t.exports = { CLICK: "click" };
      },
      {},
    ],
    37: [
      function (e, t, r) {
        const n = e("../../../usa-accordion/src/index"),
          a = e("../../../usa-banner/src/index"),
          i = e("../../../usa-button/src/index"),
          s = e("../../../usa-character-count/src/index"),
          o = e("../../../usa-combo-box/src/index"),
          l = e("../../../usa-date-picker/src/index"),
          c = e("../../../usa-date-range-picker/src/index"),
          u = e("../../../usa-file-input/src/index"),
          f = e("../../../usa-footer/src/index"),
          d = e("../../../usa-in-page-navigation/src/index"),
          h = e("../../../usa-input-mask/src/index"),
          m = e("../../../usa-language-selector/src/index"),
          p = e("../../../usa-modal/src/index"),
          x = e("../../../usa-header/src/index"),
          _ = e("../../../_usa-password/src/index"),
          v = e("../../../usa-range/src/index"),
          g = e("../../../usa-search/src/index"),
          S = e("../../../usa-skipnav/src/index"),
          b = e("../../../usa-table/src/index"),
          C = e("../../../usa-time-picker/src/index"),
          D = e("../../../usa-tooltip/src/index"),
          A = e("../../../usa-validation/src/index");
        t.exports = {
          accordion: n,
          banner: a,
          button: i,
          characterCount: s,
          comboBox: o,
          datePicker: l,
          dateRangePicker: c,
          fileInput: u,
          footer: f,
          inPageNavigation: d,
          inputMask: h,
          languageSelector: m,
          modal: p,
          navigation: x,
          password: _,
          range: v,
          search: g,
          skipnav: S,
          table: b,
          timePicker: C,
          tooltip: D,
          validator: A,
        };
      },
      {
        "../../../_usa-password/src/index": 13,
        "../../../usa-accordion/src/index": 14,
        "../../../usa-banner/src/index": 15,
        "../../../usa-button/src/index": 16,
        "../../../usa-character-count/src/index": 17,
        "../../../usa-combo-box/src/index": 18,
        "../../../usa-date-picker/src/index": 19,
        "../../../usa-date-range-picker/src/index": 20,
        "../../../usa-file-input/src/index": 21,
        "../../../usa-footer/src/index": 22,
        "../../../usa-header/src/index": 23,
        "../../../usa-in-page-navigation/src/index": 24,
        "../../../usa-input-mask/src/index": 25,
        "../../../usa-language-selector/src/index": 26,
        "../../../usa-modal/src/index": 27,
        "../../../usa-range/src/index": 28,
        "../../../usa-search/src/index": 29,
        "../../../usa-skipnav/src/index": 30,
        "../../../usa-table/src/index": 31,
        "../../../usa-time-picker/src/index": 32,
        "../../../usa-tooltip/src/index": 33,
        "../../../usa-validation/src/index": 34,
      },
    ],
    38: [
      function (e, t, r) {
        (function () {
          if (typeof window.CustomEvent == "function") return !1;
          function n(a, i) {
            const s = i || { bubbles: !1, cancelable: !1, detail: null },
              o = document.createEvent("CustomEvent");
            return o.initCustomEvent(a, s.bubbles, s.cancelable, s.detail), o;
          }
          window.CustomEvent = n;
        })();
      },
      {},
    ],
    39: [
      function (e, t, r) {
        const n = window.HTMLElement.prototype,
          a = "hidden";
        a in n ||
          Object.defineProperty(n, a, {
            get() {
              return this.hasAttribute(a);
            },
            set(i) {
              i ? this.setAttribute(a, "") : this.removeAttribute(a);
            },
          });
      },
      {},
    ],
    40: [
      function (e, t, r) {
        e("./element-hidden"),
          e("./number-is-nan"),
          e("./custom-event"),
          e("./svg4everybody");
      },
      {
        "./custom-event": 38,
        "./element-hidden": 39,
        "./number-is-nan": 41,
        "./svg4everybody": 42,
      },
    ],
    41: [
      function (e, t, r) {
        Number.isNaN =
          Number.isNaN ||
          function (a) {
            return typeof a == "number" && a !== a;
          };
      },
      {},
    ],
    42: [
      function (e, t, r) {
        (function (n) {
          t.exports = n();
        })(function () {
          /*! svg4everybody v2.1.9 | github.com/jonathantneal/svg4everybody */ function n(
            o,
            l,
            c,
            u,
          ) {
            if (c) {
              var f = document.createDocumentFragment(),
                d = !l.hasAttribute("viewBox") && c.getAttribute("viewBox");
              d && l.setAttribute("viewBox", d);
              for (
                var h = document.importNode
                    ? document.importNode(c, !0)
                    : c.cloneNode(!0),
                  m = document.createElementNS(
                    l.namespaceURI || "http://www.w3.org/2000/svg",
                    "g",
                  );
                h.childNodes.length;

              )
                m.appendChild(h.firstChild);
              if (u)
                for (var p = 0; u.attributes.length > p; p++) {
                  var x = u.attributes[p];
                  x.name !== "xlink:href" &&
                    x.name !== "href" &&
                    m.setAttribute(x.name, x.value);
                }
              f.appendChild(m), o.appendChild(f);
            }
          }
          function a(o, l) {
            (o.onreadystatechange = function () {
              if (o.readyState === 4) {
                var c = o._cachedDocument;
                c ||
                  ((c = o._cachedDocument =
                    document.implementation.createHTMLDocument("")),
                  (c.body.innerHTML = o.responseText),
                  c.domain !== document.domain && (c.domain = document.domain),
                  (o._cachedTarget = {})),
                  o._embeds.splice(0).map(function (u) {
                    var f = o._cachedTarget[u.id];
                    f || (f = o._cachedTarget[u.id] = c.getElementById(u.id)),
                      n(u.parent, u.svg, f, l);
                  });
              }
            }),
              o.onreadystatechange();
          }
          function i(o) {
            function l() {
              if (g && v.length - g <= 0) return void _(l, 67);
              g = 0;
              for (var S = 0; S < v.length; ) {
                var b = v[S],
                  C = b.parentNode,
                  D = s(C),
                  A = b.getAttribute("xlink:href") || b.getAttribute("href");
                if (
                  (!A &&
                    u.attributeName &&
                    (A = b.getAttribute(u.attributeName)),
                  D && A)
                ) {
                  if (c)
                    if (!u.validate || u.validate(A, D, b)) {
                      C.removeChild(b);
                      var F = A.split("#"),
                        I = F.shift(),
                        P = F.join("#");
                      if (I.length) {
                        var B = x[I];
                        B ||
                          ((B = x[I] = new XMLHttpRequest()),
                          B.open("GET", I),
                          B.send(),
                          (B._embeds = [])),
                          B._embeds.push({ parent: C, svg: D, id: P }),
                          a(B, b);
                      } else n(C, D, document.getElementById(P), b);
                    } else ++S, ++g;
                } else ++S;
              }
              _(l, 67);
            }
            var c,
              u = Object(o),
              f = /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/,
              d = /\bAppleWebKit\/(\d+)\b/,
              h = /\bEdge\/12\.(\d+)\b/,
              m = /\bEdge\/.(\d+)\b/,
              p = window.top !== window.self;
            c =
              "polyfill" in u
                ? u.polyfill
                : f.test(navigator.userAgent) ||
                  (navigator.userAgent.match(h) || [])[1] < 10547 ||
                  (navigator.userAgent.match(d) || [])[1] < 537 ||
                  (m.test(navigator.userAgent) && p);
            var x = {},
              _ = window.requestAnimationFrame || setTimeout,
              v = document.getElementsByTagName("use"),
              g = 0;
            c && l();
          }
          function s(o) {
            for (
              var l = o;
              l.nodeName.toLowerCase() !== "svg" && (l = l.parentNode);

            );
            return l;
          }
          return i;
        });
      },
      {},
    ],
    43: [
      function (e, t, r) {
        (window.uswdsPresent = !0), e("./polyfills");
        const n = e("./config"),
          a = e("./index"),
          i = e("./polyfills/svg4everybody");
        n.components = a;
        const s = () => {
          const o = document.body;
          Object.keys(a).forEach((l) => {
            a[l].on(o);
          }),
            i();
        };
        document.readyState === "loading"
          ? document.addEventListener("DOMContentLoaded", s, { once: !0 })
          : s(),
          (r.default = n),
          (r.initComponents = s);
      },
      {
        "./config": 35,
        "./index": 37,
        "./polyfills": 40,
        "./polyfills/svg4everybody": 42,
      },
    ],
    44: [
      function (e, t, r) {
        t.exports = (n = document) => n.activeElement;
      },
      {},
    ],
    45: [
      function (e, t, r) {
        const n = e("object-assign"),
          a = e("receptor/behavior"),
          i = (...s) =>
            function (l = document.body) {
              s.forEach((c) => {
                typeof this[c] == "function" && this[c].call(this, l);
              });
            };
        t.exports = (s, o) =>
          a(s, n({ on: i("init", "add"), off: i("teardown", "remove") }, o));
      },
      { "object-assign": 3, "receptor/behavior": 4 },
    ],
    46: [
      function (e, t, r) {
        t.exports = function (a, i = 500) {
          let s = null;
          return (...o) => {
            window.clearTimeout(s),
              (s = window.setTimeout(() => {
                a.apply(this, o);
              }, i));
          };
        };
      },
      {},
    ],
    47: [
      function (e, t, r) {
        const n = e("object-assign"),
          { keymap: a } = e("receptor"),
          i = e("./behavior"),
          s = e("./select"),
          o = e("./active-element"),
          l =
            'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',
          c = (u) => {
            const f = s(l, u),
              d = f[0],
              h = f[f.length - 1];
            function m(x) {
              o() === h && (x.preventDefault(), d.focus());
            }
            function p(x) {
              o() === d
                ? (x.preventDefault(), h.focus())
                : f.includes(o()) || (x.preventDefault(), d.focus());
            }
            return { firstTabStop: d, lastTabStop: h, tabAhead: m, tabBack: p };
          };
        t.exports = (u, f = {}) => {
          const d = c(u),
            h = f,
            { Esc: m, Escape: p } = h;
          p && !m && (h.Esc = p);
          const x = a(n({ Tab: d.tabAhead, "Shift+Tab": d.tabBack }, f));
          return i(
            { keydown: x },
            {
              init() {
                d.firstTabStop && d.firstTabStop.focus();
              },
              update(v) {
                v ? this.on() : this.off();
              },
            },
          );
        };
      },
      {
        "./active-element": 44,
        "./behavior": 45,
        "./select": 53,
        "object-assign": 3,
        receptor: 9,
      },
    ],
    48: [
      function (e, t, r) {
        function n(a, i = window, s = document.documentElement) {
          const o = a.getBoundingClientRect();
          return (
            o.top >= 0 &&
            o.left >= 0 &&
            o.bottom <= (i.innerHeight || s.clientHeight) &&
            o.right <= (i.innerWidth || s.clientWidth)
          );
        }
        t.exports = n;
      },
      {},
    ],
    49: [
      function (e, t, r) {
        function n() {
          return (
            typeof navigator < "u" &&
            (navigator.userAgent.match(/(iPod|iPhone|iPad)/g) ||
              (navigator.platform === "MacIntel" &&
                navigator.maxTouchPoints > 1)) &&
            !window.MSStream
          );
        }
        t.exports = n;
      },
      {},
    ],
    50: [
      function (e, t, r) {
        (function (n) {
          t.exports = n();
        })(function () {
          var n = {
            _entity: /[&<>"'/]/g,
            _entities: {
              "&": "&amp;",
              "<": "&lt;",
              ">": "&gt;",
              '"': "&quot;",
              "'": "&apos;",
              "/": "&#x2F;",
            },
            getEntity: function (a) {
              return n._entities[a];
            },
            escapeHTML: function (a) {
              for (var i = "", s = 0; s < a.length; s++)
                if (((i += a[s]), s + 1 < arguments.length)) {
                  var o = arguments[s + 1] || "";
                  i += String(o).replace(n._entity, n.getEntity);
                }
              return i;
            },
            createSafeHTML: function (a) {
              for (
                var i = arguments.length,
                  s = new Array(i > 1 ? i - 1 : 0),
                  o = 1;
                o < i;
                o++
              )
                s[o - 1] = arguments[o];
              var l = n.escapeHTML.apply(n, [a].concat(s));
              return {
                __html: l,
                toString: function () {
                  return "[object WrappedHTMLObject]";
                },
                info: "This is a wrapped HTML object. See https://developer.mozilla.org/en-US/Firefox_OS/Security/Security_Automation for more.",
              };
            },
            unwrapSafeHTML: function () {
              for (
                var a = arguments.length, i = new Array(a), s = 0;
                s < a;
                s++
              )
                i[s] = arguments[s];
              var o = i.map(function (l) {
                return l.__html;
              });
              return o.join("");
            },
          };
          return n;
        });
      },
      {},
    ],
    51: [
      function (e, t, r) {
        t.exports = function () {
          const a = document.createElement("div");
          (a.style.visibility = "hidden"),
            (a.style.overflow = "scroll"),
            (a.style.msOverflowStyle = "scrollbar"),
            document.body.appendChild(a);
          const i = document.createElement("div");
          a.appendChild(i);
          const s = `${a.offsetWidth - i.offsetWidth}px`;
          return a.parentNode.removeChild(a), s;
        };
      },
      {},
    ],
    52: [
      function (e, t, r) {
        const n = e("./select"),
          a = (i) => i && typeof i == "object" && i.nodeType === 1;
        t.exports = (i, s) => {
          const o = n(i, s);
          return typeof i != "string" || (a(s) && s.matches(i) && o.push(s)), o;
        };
      },
      { "./select": 53 },
    ],
    53: [
      function (e, t, r) {
        const n = (a) => a && typeof a == "object" && a.nodeType === 1;
        t.exports = (a, i) => {
          if (typeof a != "string") return [];
          (!i || !n(i)) && (i = window.document);
          const s = i.querySelectorAll(a);
          return Array.prototype.slice.call(s);
        };
      },
      {},
    ],
    54: [
      function (e, t, r) {
        t.exports = (n, a) => {
          n.setAttribute("autocapitalize", "off"),
            n.setAttribute("autocorrect", "off"),
            n.setAttribute("type", a ? "password" : "text");
        };
      },
      {},
    ],
    55: [
      function (e, t, r) {
        const n = e("resolve-id-refs"),
          a = e("./toggle-field-mask"),
          i = "aria-controls",
          s = "aria-pressed",
          o = "data-show-text",
          l = "data-hide-text",
          c = (u) =>
            u.replace(/\bShow\b/i, (f) => `${f[0] === "S" ? "H" : "h"}ide`);
        t.exports = (u) => {
          const f = u.hasAttribute(s) && u.getAttribute(s) !== "true";
          n(u.getAttribute(i)).forEach((p) => a(p, f)),
            u.hasAttribute(o) || u.setAttribute(o, u.textContent);
          const h = u.getAttribute(o),
            m = u.getAttribute(l) || c(h);
          return (u.textContent = f ? h : m), u.setAttribute(s, f), f;
        };
      },
      { "./toggle-field-mask": 54, "resolve-id-refs": 12 },
    ],
    56: [
      function (e, t, r) {
        const n = "aria-expanded",
          a = "aria-controls",
          i = "hidden";
        t.exports = (s, o) => {
          let l = o;
          typeof l != "boolean" && (l = s.getAttribute(n) === "false"),
            s.setAttribute(n, l);
          const c = s.getAttribute(a),
            u = document.getElementById(c);
          if (!u) throw new Error(`No toggle target found with id: "${c}"`);
          return l ? u.removeAttribute(i) : u.setAttribute(i, ""), l;
        };
      },
      {},
    ],
    57: [
      function (e, t, r) {
        const n = e("./debounce"),
          { prefix: a } = e("../config"),
          i = `${a}-checklist__item--checked`;
        t.exports = function (o) {
          const l = o.dataset.validationElement,
            c =
              l.charAt(0) === "#"
                ? document.querySelector(l)
                : document.getElementById(l);
          if (!c)
            throw new Error(`No validation element found with id: "${l}"`);
          let u = "";
          Object.entries(o.dataset).forEach(([f, d]) => {
            if (f.startsWith("validate")) {
              const h = f.substr(8).toLowerCase(),
                m = new RegExp(d),
                p = `[data-validator="${h}"]`,
                x = c.querySelector(p),
                v = o.parentNode.querySelector("[data-validation-status]"),
                g = m.test(o.value);
              if ((x.classList.toggle(i, g), !x))
                throw new Error(`No validator checkbox found for: "${h}"`);
              const S = o.dataset.validationComplete || "status complete",
                b = o.dataset.validationIncomplete || "status incomplete";
              let C = `${x.textContent} `;
              x.classList.contains(i) ? (C += S) : (C += b),
                x.setAttribute("aria-label", C),
                (u += `${C}. `),
                n(() => {
                  v.textContent = u;
                }, 1e3)();
            }
          });
        };
      },
      { "../config": 35, "./debounce": 46 },
    ],
  },
  {},
  [43],
);
(function () {
  var t = "usa-js-loading",
    r;
  document.documentElement.classList.add(t);
  function n() {
    document.documentElement.classList.remove(t);
  }
  r = setTimeout(n, 8e3);
  function a() {
    window.uswdsPresent &&
      (clearTimeout(r), n(), window.removeEventListener("load", a, !0));
  }
  window.addEventListener("load", a, !0);
})();
/**
 * @remix-run/router v1.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Rt() {
  return (
    (Rt = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Rt.apply(this, arguments)
  );
}
var Xt;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Xt || (Xt = {}));
const Fp = "popstate";
function p3(e) {
  e === void 0 && (e = {});
  function t(n, a) {
    let { pathname: i, search: s, hash: o } = n.location;
    return Do(
      "",
      { pathname: i, search: s, hash: o },
      (a.state && a.state.usr) || null,
      (a.state && a.state.key) || "default",
    );
  }
  function r(n, a) {
    return typeof a == "string" ? a : Uo(a);
  }
  return v3(t, r, null, e);
}
function lt(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function ds(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function m3() {
  return Math.random().toString(36).substr(2, 8);
}
function kp(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Do(e, t, r, n) {
  return (
    r === void 0 && (r = null),
    Rt(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Xa(t) : t,
      { state: r, key: (t && t.key) || n || m3() },
    )
  );
}
function Uo(e) {
  let { pathname: t = "/", search: r = "", hash: n = "" } = e;
  return (
    r && r !== "?" && (t += r.charAt(0) === "?" ? r : "?" + r),
    n && n !== "#" && (t += n.charAt(0) === "#" ? n : "#" + n),
    t
  );
}
function Xa(e) {
  let t = {};
  if (e) {
    let r = e.indexOf("#");
    r >= 0 && ((t.hash = e.substr(r)), (e = e.substr(0, r)));
    let n = e.indexOf("?");
    n >= 0 && ((t.search = e.substr(n)), (e = e.substr(0, n))),
      e && (t.pathname = e);
  }
  return t;
}
function v3(e, t, r, n) {
  n === void 0 && (n = {});
  let { window: a = document.defaultView, v5Compat: i = !1 } = n,
    s = a.history,
    o = Xt.Pop,
    l = null,
    c = u();
  c == null && ((c = 0), s.replaceState(Rt({}, s.state, { idx: c }), ""));
  function u() {
    return (s.state || { idx: null }).idx;
  }
  function f() {
    o = Xt.Pop;
    let x = u(),
      _ = x == null ? null : x - c;
    (c = x), l && l({ action: o, location: p.location, delta: _ });
  }
  function d(x, _) {
    o = Xt.Push;
    let v = Do(p.location, x, _);
    c = u() + 1;
    let g = kp(v, c),
      S = p.createHref(v);
    try {
      s.pushState(g, "", S);
    } catch (b) {
      if (b instanceof DOMException && b.name === "DataCloneError") throw b;
      a.location.assign(S);
    }
    i && l && l({ action: o, location: p.location, delta: 1 });
  }
  function h(x, _) {
    o = Xt.Replace;
    let v = Do(p.location, x, _);
    c = u();
    let g = kp(v, c),
      S = p.createHref(v);
    s.replaceState(g, "", S),
      i && l && l({ action: o, location: p.location, delta: 0 });
  }
  function m(x) {
    let _ = a.location.origin !== "null" ? a.location.origin : a.location.href,
      v = typeof x == "string" ? x : Uo(x);
    return (
      (v = v.replace(/ $/, "%20")),
      lt(
        _,
        "No window.location.(origin|href) available to create URL for href: " +
          v,
      ),
      new URL(v, _)
    );
  }
  let p = {
    get action() {
      return o;
    },
    get location() {
      return e(a, s);
    },
    listen(x) {
      if (l) throw new Error("A history only accepts one active listener");
      return (
        a.addEventListener(Fp, f),
        (l = x),
        () => {
          a.removeEventListener(Fp, f), (l = null);
        }
      );
    },
    createHref(x) {
      return t(a, x);
    },
    createURL: m,
    encodeLocation(x) {
      let _ = m(x);
      return { pathname: _.pathname, search: _.search, hash: _.hash };
    },
    push: d,
    replace: h,
    go(x) {
      return s.go(x);
    },
  };
  return p;
}
var wt;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(wt || (wt = {}));
const g3 = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children",
]);
function x3(e) {
  return e.index === !0;
}
function gc(e, t, r, n) {
  return (
    r === void 0 && (r = []),
    n === void 0 && (n = {}),
    e.map((a, i) => {
      let s = [...r, String(i)],
        o = typeof a.id == "string" ? a.id : s.join("-");
      if (
        (lt(
          a.index !== !0 || !a.children,
          "Cannot specify children on an index route",
        ),
        lt(
          !n[o],
          'Found a route id collision on id "' +
            o +
            `".  Route id's must be globally unique within Data Router usages`,
        ),
        x3(a))
      ) {
        let l = Rt({}, a, t(a), { id: o });
        return (n[o] = l), l;
      } else {
        let l = Rt({}, a, t(a), { id: o, children: void 0 });
        return (
          (n[o] = l), a.children && (l.children = gc(a.children, t, s, n)), l
        );
      }
    })
  );
}
function ti(e, t, r) {
  return r === void 0 && (r = "/"), Rl(e, t, r, !1);
}
function Rl(e, t, r, n) {
  let a = typeof t == "string" ? Xa(t) : t,
    i = $o(a.pathname || "/", r);
  if (i == null) return null;
  let s = Xg(e);
  E3(s);
  let o = null;
  for (let l = 0; o == null && l < s.length; ++l) {
    let c = k3(i);
    o = N3(s[l], c, n);
  }
  return o;
}
function _3(e, t) {
  let { route: r, pathname: n, params: a } = e;
  return { id: r.id, pathname: n, params: a, data: t[r.id], handle: r.handle };
}
function Xg(e, t, r, n) {
  t === void 0 && (t = []), r === void 0 && (r = []), n === void 0 && (n = "");
  let a = (i, s, o) => {
    let l = {
      relativePath: o === void 0 ? i.path || "" : o,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: s,
      route: i,
    };
    l.relativePath.startsWith("/") &&
      (lt(
        l.relativePath.startsWith(n),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + n + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes.",
      ),
      (l.relativePath = l.relativePath.slice(n.length)));
    let c = ui([n, l.relativePath]),
      u = r.concat(l);
    i.children &&
      i.children.length > 0 &&
      (lt(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + c + '".'),
      ),
      Xg(i.children, t, u, c)),
      !(i.path == null && !i.index) &&
        t.push({ path: c, score: D3(c, i.index), routesMeta: u });
  };
  return (
    e.forEach((i, s) => {
      var o;
      if (i.path === "" || !((o = i.path) != null && o.includes("?"))) a(i, s);
      else for (let l of Qg(i.path)) a(i, s, l);
    }),
    t
  );
}
function Qg(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [r, ...n] = t,
    a = r.endsWith("?"),
    i = r.replace(/\?$/, "");
  if (n.length === 0) return a ? [i, ""] : [i];
  let s = Qg(n.join("/")),
    o = [];
  return (
    o.push(...s.map((l) => (l === "" ? i : [i, l].join("/")))),
    a && o.push(...s),
    o.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
  );
}
function E3(e) {
  e.sort((t, r) =>
    t.score !== r.score
      ? r.score - t.score
      : L3(
          t.routesMeta.map((n) => n.childrenIndex),
          r.routesMeta.map((n) => n.childrenIndex),
        ),
  );
}
const y3 = /^:[\w-]+$/,
  w3 = 3,
  S3 = 2,
  T3 = 1,
  A3 = 10,
  C3 = -2,
  Rp = (e) => e === "*";
function D3(e, t) {
  let r = e.split("/"),
    n = r.length;
  return (
    r.some(Rp) && (n += C3),
    t && (n += S3),
    r
      .filter((a) => !Rp(a))
      .reduce((a, i) => a + (y3.test(i) ? w3 : i === "" ? T3 : A3), n)
  );
}
function L3(e, t) {
  return e.length === t.length && e.slice(0, -1).every((n, a) => n === t[a])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function N3(e, t, r) {
  r === void 0 && (r = !1);
  let { routesMeta: n } = e,
    a = {},
    i = "/",
    s = [];
  for (let o = 0; o < n.length; ++o) {
    let l = n[o],
      c = o === n.length - 1,
      u = i === "/" ? t : t.slice(i.length) || "/",
      f = Op(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: c },
        u,
      ),
      d = l.route;
    if (
      (!f &&
        c &&
        r &&
        !n[n.length - 1].route.index &&
        (f = Op(
          { path: l.relativePath, caseSensitive: l.caseSensitive, end: !1 },
          u,
        )),
      !f)
    )
      return null;
    Object.assign(a, f.params),
      s.push({
        params: a,
        pathname: ui([i, f.pathname]),
        pathnameBase: M3(ui([i, f.pathnameBase])),
        route: d,
      }),
      f.pathnameBase !== "/" && (i = ui([i, f.pathnameBase]));
  }
  return s;
}
function Op(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [r, n] = F3(e.path, e.caseSensitive, e.end),
    a = t.match(r);
  if (!a) return null;
  let i = a[0],
    s = i.replace(/(.)\/+$/, "$1"),
    o = a.slice(1);
  return {
    params: n.reduce((c, u, f) => {
      let { paramName: d, isOptional: h } = u;
      if (d === "*") {
        let p = o[f] || "";
        s = i.slice(0, i.length - p.length).replace(/(.)\/+$/, "$1");
      }
      const m = o[f];
      return (
        h && !m ? (c[d] = void 0) : (c[d] = (m || "").replace(/%2F/g, "/")), c
      );
    }, {}),
    pathname: i,
    pathnameBase: s,
    pattern: e,
  };
}
function F3(e, t, r) {
  t === void 0 && (t = !1),
    r === void 0 && (r = !0),
    ds(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'),
    );
  let n = [],
    a =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (s, o, l) => (
            n.push({ paramName: o, isOptional: l != null }),
            l ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        );
  return (
    e.endsWith("*")
      ? (n.push({ paramName: "*" }),
        (a += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : r
        ? (a += "\\/*$")
        : e !== "" && e !== "/" && (a += "(?:(?=\\/|$))"),
    [new RegExp(a, t ? void 0 : "i"), n]
  );
}
function k3(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      ds(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ")."),
      ),
      e
    );
  }
}
function $o(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let r = t.endsWith("/") ? t.length - 1 : t.length,
    n = e.charAt(r);
  return n && n !== "/" ? null : e.slice(r) || "/";
}
function R3(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: r,
    search: n = "",
    hash: a = "",
  } = typeof e == "string" ? Xa(e) : e;
  return {
    pathname: r ? (r.startsWith("/") ? r : O3(r, t)) : t,
    search: b3(n),
    hash: B3(a),
  };
}
function O3(e, t) {
  let r = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((a) => {
      a === ".." ? r.length > 1 && r.pop() : a !== "." && r.push(a);
    }),
    r.length > 1 ? r.join("/") : "/"
  );
}
function bu(e, t, r, n) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(n) +
      "].  Please separate it out to the ") +
    ("`to." + r + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Jg(e) {
  return e.filter(
    (t, r) => r === 0 || (t.route.path && t.route.path.length > 0),
  );
}
function I3(e, t) {
  let r = Jg(e);
  return t
    ? r.map((n, a) => (a === r.length - 1 ? n.pathname : n.pathnameBase))
    : r.map((n) => n.pathnameBase);
}
function P3(e, t, r, n) {
  n === void 0 && (n = !1);
  let a;
  typeof e == "string"
    ? (a = Xa(e))
    : ((a = Rt({}, e)),
      lt(
        !a.pathname || !a.pathname.includes("?"),
        bu("?", "pathname", "search", a),
      ),
      lt(
        !a.pathname || !a.pathname.includes("#"),
        bu("#", "pathname", "hash", a),
      ),
      lt(!a.search || !a.search.includes("#"), bu("#", "search", "hash", a)));
  let i = e === "" || a.pathname === "",
    s = i ? "/" : a.pathname,
    o;
  if (s == null) o = r;
  else {
    let f = t.length - 1;
    if (!n && s.startsWith("..")) {
      let d = s.split("/");
      for (; d[0] === ".."; ) d.shift(), (f -= 1);
      a.pathname = d.join("/");
    }
    o = f >= 0 ? t[f] : "/";
  }
  let l = R3(a, o),
    c = s && s !== "/" && s.endsWith("/"),
    u = (i || s === ".") && r.endsWith("/");
  return !l.pathname.endsWith("/") && (c || u) && (l.pathname += "/"), l;
}
const ui = (e) => e.join("/").replace(/\/\/+/g, "/"),
  M3 = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  b3 = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  B3 = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class xc {
  constructor(t, r, n, a) {
    a === void 0 && (a = !1),
      (this.status = t),
      (this.statusText = r || ""),
      (this.internal = a),
      n instanceof Error
        ? ((this.data = n.toString()), (this.error = n))
        : (this.data = n);
  }
}
function Vc(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Zg = ["post", "put", "patch", "delete"],
  j3 = new Set(Zg),
  U3 = ["get", ...Zg],
  $3 = new Set(U3),
  H3 = new Set([301, 302, 303, 307, 308]),
  W3 = new Set([307, 308]),
  Bu = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  V3 = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Rs = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  id = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  z3 = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  qg = "remix-router-transitions";
function G3(e) {
  const t = e.window ? e.window : typeof window < "u" ? window : void 0,
    r =
      typeof t < "u" &&
      typeof t.document < "u" &&
      typeof t.document.createElement < "u",
    n = !r;
  lt(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter",
  );
  let a;
  if (e.mapRouteProperties) a = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let j = e.detectErrorBoundary;
    a = (Q) => ({ hasErrorBoundary: j(Q) });
  } else a = z3;
  let i = {},
    s = gc(e.routes, a, void 0, i),
    o,
    l = e.basename || "/",
    c = e.dataStrategy || Q3,
    u = e.patchRoutesOnNavigation,
    f = Rt(
      {
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_partialHydration: !1,
        v7_prependBasename: !1,
        v7_relativeSplatPath: !1,
        v7_skipActionErrorRevalidation: !1,
      },
      e.future,
    ),
    d = null,
    h = new Set(),
    m = null,
    p = null,
    x = null,
    _ = e.hydrationData != null,
    v = ti(s, e.history.location, l),
    g = null;
  if (v == null && !u) {
    let j = $r(404, { pathname: e.history.location.pathname }),
      { matches: Q, route: Z } = Vp(s);
    (v = Q), (g = { [Z.id]: j });
  }
  v &&
    !e.hydrationData &&
    Fr(v, s, e.history.location.pathname).active &&
    (v = null);
  let S;
  if (v)
    if (v.some((j) => j.route.lazy)) S = !1;
    else if (!v.some((j) => j.route.loader)) S = !0;
    else if (f.v7_partialHydration) {
      let j = e.hydrationData ? e.hydrationData.loaderData : null,
        Q = e.hydrationData ? e.hydrationData.errors : null;
      if (Q) {
        let Z = v.findIndex((de) => Q[de.route.id] !== void 0);
        S = v.slice(0, Z + 1).every((de) => !Bf(de.route, j, Q));
      } else S = v.every((Z) => !Bf(Z.route, j, Q));
    } else S = e.hydrationData != null;
  else if (((S = !1), (v = []), f.v7_partialHydration)) {
    let j = Fr(null, s, e.history.location.pathname);
    j.active && j.matches && (v = j.matches);
  }
  let b,
    C = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: v,
      initialized: S,
      navigation: Bu,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || g,
      fetchers: new Map(),
      blockers: new Map(),
    },
    D = Xt.Pop,
    A = !1,
    F,
    I = !1,
    P = new Map(),
    B = null,
    X = !1,
    ae = !1,
    le = [],
    Re = new Set(),
    Ae = new Map(),
    se = 0,
    ye = -1,
    ge = new Map(),
    oe = new Set(),
    O = new Map(),
    U = new Map(),
    R = new Set(),
    k = new Map(),
    z = new Map(),
    re;
  function Se() {
    if (
      ((d = e.history.listen((j) => {
        let { action: Q, location: Z, delta: de } = j;
        if (re) {
          re(), (re = void 0);
          return;
        }
        ds(
          z.size === 0 || de != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.",
        );
        let Be = ur({
          currentLocation: C.location,
          nextLocation: Z,
          historyAction: Q,
        });
        if (Be && de != null) {
          let We = new Promise((E) => {
            re = E;
          });
          e.history.go(de * -1),
            St(Be, {
              state: "blocked",
              location: Z,
              proceed() {
                St(Be, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: Z,
                }),
                  We.then(() => e.history.go(de));
              },
              reset() {
                let E = new Map(C.blockers);
                E.set(Be, Rs), He({ blockers: E });
              },
            });
          return;
        }
        return Je(Q, Z);
      })),
      r)
    ) {
      uD(t, P);
      let j = () => fD(t, P);
      t.addEventListener("pagehide", j),
        (B = () => t.removeEventListener("pagehide", j));
    }
    return C.initialized || Je(Xt.Pop, C.location, { initialHydration: !0 }), b;
  }
  function he() {
    d && d(),
      B && B(),
      h.clear(),
      F && F.abort(),
      C.fetchers.forEach((j, Q) => Ke(Q)),
      C.blockers.forEach((j, Q) => Dt(Q));
  }
  function ve(j) {
    return h.add(j), () => h.delete(j);
  }
  function He(j, Q) {
    Q === void 0 && (Q = {}), (C = Rt({}, C, j));
    let Z = [],
      de = [];
    f.v7_fetcherPersist &&
      C.fetchers.forEach((Be, We) => {
        Be.state === "idle" && (R.has(We) ? de.push(We) : Z.push(We));
      }),
      [...h].forEach((Be) =>
        Be(C, {
          deletedFetchers: de,
          viewTransitionOpts: Q.viewTransitionOpts,
          flushSync: Q.flushSync === !0,
        }),
      ),
      f.v7_fetcherPersist &&
        (Z.forEach((Be) => C.fetchers.delete(Be)), de.forEach((Be) => Ke(Be)));
  }
  function je(j, Q, Z) {
    var de, Be;
    let { flushSync: We } = Z === void 0 ? {} : Z,
      E =
        C.actionData != null &&
        C.navigation.formMethod != null &&
        Rn(C.navigation.formMethod) &&
        C.navigation.state === "loading" &&
        ((de = j.state) == null ? void 0 : de._isRedirect) !== !0,
      T;
    Q.actionData
      ? Object.keys(Q.actionData).length > 0
        ? (T = Q.actionData)
        : (T = null)
      : E
        ? (T = C.actionData)
        : (T = null);
    let y = Q.loaderData
        ? Hp(C.loaderData, Q.loaderData, Q.matches || [], Q.errors)
        : C.loaderData,
      w = C.blockers;
    w.size > 0 && ((w = new Map(w)), w.forEach((W, ee) => w.set(ee, Rs)));
    let L =
      A === !0 ||
      (C.navigation.formMethod != null &&
        Rn(C.navigation.formMethod) &&
        ((Be = j.state) == null ? void 0 : Be._isRedirect) !== !0);
    o && ((s = o), (o = void 0)),
      X ||
        D === Xt.Pop ||
        (D === Xt.Push
          ? e.history.push(j, j.state)
          : D === Xt.Replace && e.history.replace(j, j.state));
    let N;
    if (D === Xt.Pop) {
      let W = P.get(C.location.pathname);
      W && W.has(j.pathname)
        ? (N = { currentLocation: C.location, nextLocation: j })
        : P.has(j.pathname) &&
          (N = { currentLocation: j, nextLocation: C.location });
    } else if (I) {
      let W = P.get(C.location.pathname);
      W
        ? W.add(j.pathname)
        : ((W = new Set([j.pathname])), P.set(C.location.pathname, W)),
        (N = { currentLocation: C.location, nextLocation: j });
    }
    He(
      Rt({}, Q, {
        actionData: T,
        loaderData: y,
        historyAction: D,
        location: j,
        initialized: !0,
        navigation: Bu,
        revalidation: "idle",
        restoreScrollPosition: Nr(j, Q.matches || C.matches),
        preventScrollReset: L,
        blockers: w,
      }),
      { viewTransitionOpts: N, flushSync: We === !0 },
    ),
      (D = Xt.Pop),
      (A = !1),
      (I = !1),
      (X = !1),
      (ae = !1),
      (le = []);
  }
  async function be(j, Q) {
    if (typeof j == "number") {
      e.history.go(j);
      return;
    }
    let Z = bf(
        C.location,
        C.matches,
        l,
        f.v7_prependBasename,
        j,
        f.v7_relativeSplatPath,
        Q == null ? void 0 : Q.fromRouteId,
        Q == null ? void 0 : Q.relative,
      ),
      {
        path: de,
        submission: Be,
        error: We,
      } = Ip(f.v7_normalizeFormMethod, !1, Z, Q),
      E = C.location,
      T = Do(C.location, de, Q && Q.state);
    T = Rt({}, T, e.history.encodeLocation(T));
    let y = Q && Q.replace != null ? Q.replace : void 0,
      w = Xt.Push;
    y === !0
      ? (w = Xt.Replace)
      : y === !1 ||
        (Be != null &&
          Rn(Be.formMethod) &&
          Be.formAction === C.location.pathname + C.location.search &&
          (w = Xt.Replace));
    let L =
        Q && "preventScrollReset" in Q ? Q.preventScrollReset === !0 : void 0,
      N = (Q && Q.flushSync) === !0,
      W = ur({ currentLocation: E, nextLocation: T, historyAction: w });
    if (W) {
      St(W, {
        state: "blocked",
        location: T,
        proceed() {
          St(W, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: T,
          }),
            be(j, Q);
        },
        reset() {
          let ee = new Map(C.blockers);
          ee.set(W, Rs), He({ blockers: ee });
        },
      });
      return;
    }
    return await Je(w, T, {
      submission: Be,
      pendingError: We,
      preventScrollReset: L,
      replace: Q && Q.replace,
      enableViewTransition: Q && Q.viewTransition,
      flushSync: N,
    });
  }
  function Oe() {
    if (
      (ie(),
      He({ revalidation: "loading" }),
      C.navigation.state !== "submitting")
    ) {
      if (C.navigation.state === "idle") {
        Je(C.historyAction, C.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      Je(D || C.historyAction, C.navigation.location, {
        overrideNavigation: C.navigation,
        enableViewTransition: I === !0,
      });
    }
  }
  async function Je(j, Q, Z) {
    F && F.abort(),
      (F = null),
      (D = j),
      (X = (Z && Z.startUninterruptedRevalidation) === !0),
      Qr(C.location, C.matches),
      (A = (Z && Z.preventScrollReset) === !0),
      (I = (Z && Z.enableViewTransition) === !0);
    let de = o || s,
      Be = Z && Z.overrideNavigation,
      We = ti(de, Q, l),
      E = (Z && Z.flushSync) === !0,
      T = Fr(We, de, Q.pathname);
    if ((T.active && T.matches && (We = T.matches), !We)) {
      let { error: Y, notFoundMatches: G, route: J } = pn(Q.pathname);
      je(
        Q,
        { matches: G, loaderData: {}, errors: { [J.id]: Y } },
        { flushSync: E },
      );
      return;
    }
    if (
      C.initialized &&
      !ae &&
      rD(C.location, Q) &&
      !(Z && Z.submission && Rn(Z.submission.formMethod))
    ) {
      je(Q, { matches: We }, { flushSync: E });
      return;
    }
    F = new AbortController();
    let y = Ri(e.history, Q, F.signal, Z && Z.submission),
      w;
    if (Z && Z.pendingError)
      w = [ri(We).route.id, { type: wt.error, error: Z.pendingError }];
    else if (Z && Z.submission && Rn(Z.submission.formMethod)) {
      let Y = await Ze(y, Q, Z.submission, We, T.active, {
        replace: Z.replace,
        flushSync: E,
      });
      if (Y.shortCircuited) return;
      if (Y.pendingActionResult) {
        let [G, J] = Y.pendingActionResult;
        if (an(J) && Vc(J.error) && J.error.status === 404) {
          (F = null),
            je(Q, {
              matches: Y.matches,
              loaderData: {},
              errors: { [G]: J.error },
            });
          return;
        }
      }
      (We = Y.matches || We),
        (w = Y.pendingActionResult),
        (Be = ju(Q, Z.submission)),
        (E = !1),
        (T.active = !1),
        (y = Ri(e.history, y.url, y.signal));
    }
    let {
      shortCircuited: L,
      matches: N,
      loaderData: W,
      errors: ee,
    } = await q(
      y,
      Q,
      We,
      T.active,
      Be,
      Z && Z.submission,
      Z && Z.fetcherSubmission,
      Z && Z.replace,
      Z && Z.initialHydration === !0,
      E,
      w,
    );
    L ||
      ((F = null),
      je(Q, Rt({ matches: N || We }, Wp(w), { loaderData: W, errors: ee })));
  }
  async function Ze(j, Q, Z, de, Be, We) {
    We === void 0 && (We = {}), ie();
    let E = lD(Q, Z);
    if ((He({ navigation: E }, { flushSync: We.flushSync === !0 }), Be)) {
      let w = await $t(de, Q.pathname, j.signal);
      if (w.type === "aborted") return { shortCircuited: !0 };
      if (w.type === "error") {
        let L = ri(w.partialMatches).route.id;
        return {
          matches: w.partialMatches,
          pendingActionResult: [L, { type: wt.error, error: w.error }],
        };
      } else if (w.matches) de = w.matches;
      else {
        let { notFoundMatches: L, error: N, route: W } = pn(Q.pathname);
        return {
          matches: L,
          pendingActionResult: [W.id, { type: wt.error, error: N }],
        };
      }
    }
    let T,
      y = Us(de, Q);
    if (!y.route.action && !y.route.lazy)
      T = {
        type: wt.error,
        error: $r(405, {
          method: j.method,
          pathname: Q.pathname,
          routeId: y.route.id,
        }),
      };
    else if (
      ((T = (await _e("action", C, j, [y], de, null))[y.route.id]),
      j.signal.aborted)
    )
      return { shortCircuited: !0 };
    if (si(T)) {
      let w;
      return (
        We && We.replace != null
          ? (w = We.replace)
          : (w =
              jp(T.response.headers.get("Location"), new URL(j.url), l) ===
              C.location.pathname + C.location.search),
        await at(j, T, !0, { submission: Z, replace: w }),
        { shortCircuited: !0 }
      );
    }
    if (ka(T)) throw $r(400, { type: "defer-action" });
    if (an(T)) {
      let w = ri(de, y.route.id);
      return (
        (We && We.replace) !== !0 && (D = Xt.Push),
        { matches: de, pendingActionResult: [w.route.id, T] }
      );
    }
    return { matches: de, pendingActionResult: [y.route.id, T] };
  }
  async function q(j, Q, Z, de, Be, We, E, T, y, w, L) {
    let N = Be || ju(Q, We),
      W = We || E || Gp(N),
      ee = !X && (!f.v7_partialHydration || !y);
    if (de) {
      if (ee) {
        let rt = we(L);
        He(Rt({ navigation: N }, rt !== void 0 ? { actionData: rt } : {}), {
          flushSync: w,
        });
      }
      let Qe = await $t(Z, Q.pathname, j.signal);
      if (Qe.type === "aborted") return { shortCircuited: !0 };
      if (Qe.type === "error") {
        let rt = ri(Qe.partialMatches).route.id;
        return {
          matches: Qe.partialMatches,
          loaderData: {},
          errors: { [rt]: Qe.error },
        };
      } else if (Qe.matches) Z = Qe.matches;
      else {
        let { error: rt, notFoundMatches: Tt, route: fr } = pn(Q.pathname);
        return { matches: Tt, loaderData: {}, errors: { [fr.id]: rt } };
      }
    }
    let Y = o || s,
      [G, J] = Mp(
        e.history,
        C,
        Z,
        W,
        Q,
        f.v7_partialHydration && y === !0,
        f.v7_skipActionErrorRevalidation,
        ae,
        le,
        Re,
        R,
        O,
        oe,
        Y,
        l,
        L,
      );
    if (
      (Br(
        (Qe) =>
          !(Z && Z.some((rt) => rt.route.id === Qe)) ||
          (G && G.some((rt) => rt.route.id === Qe)),
      ),
      (ye = ++se),
      G.length === 0 && J.length === 0)
    ) {
      let Qe = Vt();
      return (
        je(
          Q,
          Rt(
            {
              matches: Z,
              loaderData: {},
              errors: L && an(L[1]) ? { [L[0]]: L[1].error } : null,
            },
            Wp(L),
            Qe ? { fetchers: new Map(C.fetchers) } : {},
          ),
          { flushSync: w },
        ),
        { shortCircuited: !0 }
      );
    }
    if (ee) {
      let Qe = {};
      if (!de) {
        Qe.navigation = N;
        let rt = we(L);
        rt !== void 0 && (Qe.actionData = rt);
      }
      J.length > 0 && (Qe.fetchers = Ie(J)), He(Qe, { flushSync: w });
    }
    J.forEach((Qe) => {
      qe(Qe.key), Qe.controller && Ae.set(Qe.key, Qe.controller);
    });
    let ue = () => J.forEach((Qe) => qe(Qe.key));
    F && F.signal.addEventListener("abort", ue);
    let { loaderResults: Te, fetcherResults: Ne } = await V(C, Z, G, J, j);
    if (j.signal.aborted) return { shortCircuited: !0 };
    F && F.signal.removeEventListener("abort", ue),
      J.forEach((Qe) => Ae.delete(Qe.key));
    let me = xl(Te);
    if (me)
      return await at(j, me.result, !0, { replace: T }), { shortCircuited: !0 };
    if (((me = xl(Ne)), me))
      return (
        oe.add(me.key),
        await at(j, me.result, !0, { replace: T }),
        { shortCircuited: !0 }
      );
    let { loaderData: Le, errors: ze } = $p(C, Z, Te, L, J, Ne, k);
    k.forEach((Qe, rt) => {
      Qe.subscribe((Tt) => {
        (Tt || Qe.done) && k.delete(rt);
      });
    }),
      f.v7_partialHydration && y && C.errors && (ze = Rt({}, C.errors, ze));
    let ot = Vt(),
      ht = zt(ye),
      kt = ot || ht || J.length > 0;
    return Rt(
      { matches: Z, loaderData: Le, errors: ze },
      kt ? { fetchers: new Map(C.fetchers) } : {},
    );
  }
  function we(j) {
    if (j && !an(j[1])) return { [j[0]]: j[1].data };
    if (C.actionData)
      return Object.keys(C.actionData).length === 0 ? null : C.actionData;
  }
  function Ie(j) {
    return (
      j.forEach((Q) => {
        let Z = C.fetchers.get(Q.key),
          de = Os(void 0, Z ? Z.data : void 0);
        C.fetchers.set(Q.key, de);
      }),
      new Map(C.fetchers)
    );
  }
  function Ve(j, Q, Z, de) {
    if (n)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.",
      );
    qe(j);
    let Be = (de && de.flushSync) === !0,
      We = o || s,
      E = bf(
        C.location,
        C.matches,
        l,
        f.v7_prependBasename,
        Z,
        f.v7_relativeSplatPath,
        Q,
        de == null ? void 0 : de.relative,
      ),
      T = ti(We, E, l),
      y = Fr(T, We, E);
    if ((y.active && y.matches && (T = y.matches), !T)) {
      Pe(j, Q, $r(404, { pathname: E }), { flushSync: Be });
      return;
    }
    let {
      path: w,
      submission: L,
      error: N,
    } = Ip(f.v7_normalizeFormMethod, !0, E, de);
    if (N) {
      Pe(j, Q, N, { flushSync: Be });
      return;
    }
    let W = Us(T, w),
      ee = (de && de.preventScrollReset) === !0;
    if (L && Rn(L.formMethod)) {
      Ge(j, Q, w, W, T, y.active, Be, ee, L);
      return;
    }
    O.set(j, { routeId: Q, path: w }), _t(j, Q, w, W, T, y.active, Be, ee, L);
  }
  async function Ge(j, Q, Z, de, Be, We, E, T, y) {
    ie(), O.delete(j);
    function w(At) {
      if (!At.route.action && !At.route.lazy) {
        let Gt = $r(405, { method: y.formMethod, pathname: Z, routeId: Q });
        return Pe(j, Q, Gt, { flushSync: E }), !0;
      }
      return !1;
    }
    if (!We && w(de)) return;
    let L = C.fetchers.get(j);
    fe(j, cD(y, L), { flushSync: E });
    let N = new AbortController(),
      W = Ri(e.history, Z, N.signal, y);
    if (We) {
      let At = await $t(Be, Z, W.signal);
      if (At.type === "aborted") return;
      if (At.type === "error") {
        Pe(j, Q, At.error, { flushSync: E });
        return;
      } else if (At.matches) {
        if (((Be = At.matches), (de = Us(Be, Z)), w(de))) return;
      } else {
        Pe(j, Q, $r(404, { pathname: Z }), { flushSync: E });
        return;
      }
    }
    Ae.set(j, N);
    let ee = se,
      G = (await _e("action", C, W, [de], Be, j))[de.route.id];
    if (W.signal.aborted) {
      Ae.get(j) === N && Ae.delete(j);
      return;
    }
    if (f.v7_fetcherPersist && R.has(j)) {
      if (si(G) || an(G)) {
        fe(j, wa(void 0));
        return;
      }
    } else {
      if (si(G))
        if ((Ae.delete(j), ye > ee)) {
          fe(j, wa(void 0));
          return;
        } else
          return (
            oe.add(j),
            fe(j, Os(y)),
            at(W, G, !1, { fetcherSubmission: y, preventScrollReset: T })
          );
      if (an(G)) {
        Pe(j, Q, G.error);
        return;
      }
    }
    if (ka(G)) throw $r(400, { type: "defer-action" });
    let J = C.navigation.location || C.location,
      ue = Ri(e.history, J, N.signal),
      Te = o || s,
      Ne =
        C.navigation.state !== "idle"
          ? ti(Te, C.navigation.location, l)
          : C.matches;
    lt(Ne, "Didn't find any matches after fetcher action");
    let me = ++se;
    ge.set(j, me);
    let Le = Os(y, G.data);
    C.fetchers.set(j, Le);
    let [ze, ot] = Mp(
      e.history,
      C,
      Ne,
      y,
      J,
      !1,
      f.v7_skipActionErrorRevalidation,
      ae,
      le,
      Re,
      R,
      O,
      oe,
      Te,
      l,
      [de.route.id, G],
    );
    ot
      .filter((At) => At.key !== j)
      .forEach((At) => {
        let Gt = At.key,
          jr = C.fetchers.get(Gt),
          va = Os(void 0, jr ? jr.data : void 0);
        C.fetchers.set(Gt, va),
          qe(Gt),
          At.controller && Ae.set(Gt, At.controller);
      }),
      He({ fetchers: new Map(C.fetchers) });
    let ht = () => ot.forEach((At) => qe(At.key));
    N.signal.addEventListener("abort", ht);
    let { loaderResults: kt, fetcherResults: Qe } = await V(C, Ne, ze, ot, ue);
    if (N.signal.aborted) return;
    N.signal.removeEventListener("abort", ht),
      ge.delete(j),
      Ae.delete(j),
      ot.forEach((At) => Ae.delete(At.key));
    let rt = xl(kt);
    if (rt) return at(ue, rt.result, !1, { preventScrollReset: T });
    if (((rt = xl(Qe)), rt))
      return oe.add(rt.key), at(ue, rt.result, !1, { preventScrollReset: T });
    let { loaderData: Tt, errors: fr } = $p(C, Ne, kt, void 0, ot, Qe, k);
    if (C.fetchers.has(j)) {
      let At = wa(G.data);
      C.fetchers.set(j, At);
    }
    zt(me),
      C.navigation.state === "loading" && me > ye
        ? (lt(D, "Expected pending action"),
          F && F.abort(),
          je(C.navigation.location, {
            matches: Ne,
            loaderData: Tt,
            errors: fr,
            fetchers: new Map(C.fetchers),
          }))
        : (He({
            errors: fr,
            loaderData: Hp(C.loaderData, Tt, Ne, fr),
            fetchers: new Map(C.fetchers),
          }),
          (ae = !1));
  }
  async function _t(j, Q, Z, de, Be, We, E, T, y) {
    let w = C.fetchers.get(j);
    fe(j, Os(y, w ? w.data : void 0), { flushSync: E });
    let L = new AbortController(),
      N = Ri(e.history, Z, L.signal);
    if (We) {
      let G = await $t(Be, Z, N.signal);
      if (G.type === "aborted") return;
      if (G.type === "error") {
        Pe(j, Q, G.error, { flushSync: E });
        return;
      } else if (G.matches) (Be = G.matches), (de = Us(Be, Z));
      else {
        Pe(j, Q, $r(404, { pathname: Z }), { flushSync: E });
        return;
      }
    }
    Ae.set(j, L);
    let W = se,
      Y = (await _e("loader", C, N, [de], Be, j))[de.route.id];
    if (
      (ka(Y) && (Y = (await sd(Y, N.signal, !0)) || Y),
      Ae.get(j) === L && Ae.delete(j),
      !N.signal.aborted)
    ) {
      if (R.has(j)) {
        fe(j, wa(void 0));
        return;
      }
      if (si(Y))
        if (ye > W) {
          fe(j, wa(void 0));
          return;
        } else {
          oe.add(j), await at(N, Y, !1, { preventScrollReset: T });
          return;
        }
      if (an(Y)) {
        Pe(j, Q, Y.error);
        return;
      }
      lt(!ka(Y), "Unhandled fetcher deferred data"), fe(j, wa(Y.data));
    }
  }
  async function at(j, Q, Z, de) {
    let {
      submission: Be,
      fetcherSubmission: We,
      preventScrollReset: E,
      replace: T,
    } = de === void 0 ? {} : de;
    Q.response.headers.has("X-Remix-Revalidate") && (ae = !0);
    let y = Q.response.headers.get("Location");
    lt(y, "Expected a Location header on the redirect Response"),
      (y = jp(y, new URL(j.url), l));
    let w = Do(C.location, y, { _isRedirect: !0 });
    if (r) {
      let G = !1;
      if (Q.response.headers.has("X-Remix-Reload-Document")) G = !0;
      else if (id.test(y)) {
        const J = e.history.createURL(y);
        G = J.origin !== t.location.origin || $o(J.pathname, l) == null;
      }
      if (G) {
        T ? t.location.replace(y) : t.location.assign(y);
        return;
      }
    }
    F = null;
    let L =
        T === !0 || Q.response.headers.has("X-Remix-Replace")
          ? Xt.Replace
          : Xt.Push,
      { formMethod: N, formAction: W, formEncType: ee } = C.navigation;
    !Be && !We && N && W && ee && (Be = Gp(C.navigation));
    let Y = Be || We;
    if (W3.has(Q.response.status) && Y && Rn(Y.formMethod))
      await Je(L, w, {
        submission: Rt({}, Y, { formAction: y }),
        preventScrollReset: E || A,
        enableViewTransition: Z ? I : void 0,
      });
    else {
      let G = ju(w, Be);
      await Je(L, w, {
        overrideNavigation: G,
        fetcherSubmission: We,
        preventScrollReset: E || A,
        enableViewTransition: Z ? I : void 0,
      });
    }
  }
  async function _e(j, Q, Z, de, Be, We) {
    let E,
      T = {};
    try {
      E = await J3(c, j, Q, Z, de, Be, We, i, a);
    } catch (y) {
      return (
        de.forEach((w) => {
          T[w.route.id] = { type: wt.error, error: y };
        }),
        T
      );
    }
    for (let [y, w] of Object.entries(E))
      if (nD(w)) {
        let L = w.result;
        T[y] = {
          type: wt.redirect,
          response: eD(L, Z, y, Be, l, f.v7_relativeSplatPath),
        };
      } else T[y] = await q3(w);
    return T;
  }
  async function V(j, Q, Z, de, Be) {
    let We = j.matches,
      E = _e("loader", j, Be, Z, Q, null),
      T = Promise.all(
        de.map(async (L) => {
          if (L.matches && L.match && L.controller) {
            let W = (
              await _e(
                "loader",
                j,
                Ri(e.history, L.path, L.controller.signal),
                [L.match],
                L.matches,
                L.key,
              )
            )[L.match.route.id];
            return { [L.key]: W };
          } else
            return Promise.resolve({
              [L.key]: { type: wt.error, error: $r(404, { pathname: L.path }) },
            });
        }),
      ),
      y = await E,
      w = (await T).reduce((L, N) => Object.assign(L, N), {});
    return (
      await Promise.all([sD(Q, y, Be.signal, We, j.loaderData), oD(Q, w, de)]),
      { loaderResults: y, fetcherResults: w }
    );
  }
  function ie() {
    (ae = !0),
      le.push(...Br()),
      O.forEach((j, Q) => {
        Ae.has(Q) && Re.add(Q), qe(Q);
      });
  }
  function fe(j, Q, Z) {
    Z === void 0 && (Z = {}),
      C.fetchers.set(j, Q),
      He(
        { fetchers: new Map(C.fetchers) },
        { flushSync: (Z && Z.flushSync) === !0 },
      );
  }
  function Pe(j, Q, Z, de) {
    de === void 0 && (de = {});
    let Be = ri(C.matches, Q);
    Ke(j),
      He(
        { errors: { [Be.route.id]: Z }, fetchers: new Map(C.fetchers) },
        { flushSync: (de && de.flushSync) === !0 },
      );
  }
  function Xe(j) {
    return (
      f.v7_fetcherPersist &&
        (U.set(j, (U.get(j) || 0) + 1), R.has(j) && R.delete(j)),
      C.fetchers.get(j) || V3
    );
  }
  function Ke(j) {
    let Q = C.fetchers.get(j);
    Ae.has(j) && !(Q && Q.state === "loading" && ge.has(j)) && qe(j),
      O.delete(j),
      ge.delete(j),
      oe.delete(j),
      R.delete(j),
      Re.delete(j),
      C.fetchers.delete(j);
  }
  function dt(j) {
    if (f.v7_fetcherPersist) {
      let Q = (U.get(j) || 0) - 1;
      Q <= 0 ? (U.delete(j), R.add(j)) : U.set(j, Q);
    } else Ke(j);
    He({ fetchers: new Map(C.fetchers) });
  }
  function qe(j) {
    let Q = Ae.get(j);
    Q && (Q.abort(), Ae.delete(j));
  }
  function Wt(j) {
    for (let Q of j) {
      let Z = Xe(Q),
        de = wa(Z.data);
      C.fetchers.set(Q, de);
    }
  }
  function Vt() {
    let j = [],
      Q = !1;
    for (let Z of oe) {
      let de = C.fetchers.get(Z);
      lt(de, "Expected fetcher: " + Z),
        de.state === "loading" && (oe.delete(Z), j.push(Z), (Q = !0));
    }
    return Wt(j), Q;
  }
  function zt(j) {
    let Q = [];
    for (let [Z, de] of ge)
      if (de < j) {
        let Be = C.fetchers.get(Z);
        lt(Be, "Expected fetcher: " + Z),
          Be.state === "loading" && (qe(Z), ge.delete(Z), Q.push(Z));
      }
    return Wt(Q), Q.length > 0;
  }
  function It(j, Q) {
    let Z = C.blockers.get(j) || Rs;
    return z.get(j) !== Q && z.set(j, Q), Z;
  }
  function Dt(j) {
    C.blockers.delete(j), z.delete(j);
  }
  function St(j, Q) {
    let Z = C.blockers.get(j) || Rs;
    lt(
      (Z.state === "unblocked" && Q.state === "blocked") ||
        (Z.state === "blocked" && Q.state === "blocked") ||
        (Z.state === "blocked" && Q.state === "proceeding") ||
        (Z.state === "blocked" && Q.state === "unblocked") ||
        (Z.state === "proceeding" && Q.state === "unblocked"),
      "Invalid blocker state transition: " + Z.state + " -> " + Q.state,
    );
    let de = new Map(C.blockers);
    de.set(j, Q), He({ blockers: de });
  }
  function ur(j) {
    let { currentLocation: Q, nextLocation: Z, historyAction: de } = j;
    if (z.size === 0) return;
    z.size > 1 && ds(!1, "A router only supports one blocker at a time");
    let Be = Array.from(z.entries()),
      [We, E] = Be[Be.length - 1],
      T = C.blockers.get(We);
    if (
      !(T && T.state === "proceeding") &&
      E({ currentLocation: Q, nextLocation: Z, historyAction: de })
    )
      return We;
  }
  function pn(j) {
    let Q = $r(404, { pathname: j }),
      Z = o || s,
      { matches: de, route: Be } = Vp(Z);
    return Br(), { notFoundMatches: de, route: Be, error: Q };
  }
  function Br(j) {
    let Q = [];
    return (
      k.forEach((Z, de) => {
        (!j || j(de)) && (Z.cancel(), Q.push(de), k.delete(de));
      }),
      Q
    );
  }
  function Lr(j, Q, Z) {
    if (((m = j), (x = Q), (p = Z || null), !_ && C.navigation === Bu)) {
      _ = !0;
      let de = Nr(C.location, C.matches);
      de != null && He({ restoreScrollPosition: de });
    }
    return () => {
      (m = null), (x = null), (p = null);
    };
  }
  function qt(j, Q) {
    return (
      (p &&
        p(
          j,
          Q.map((de) => _3(de, C.loaderData)),
        )) ||
      j.key
    );
  }
  function Qr(j, Q) {
    if (m && x) {
      let Z = qt(j, Q);
      m[Z] = x();
    }
  }
  function Nr(j, Q) {
    if (m) {
      let Z = qt(j, Q),
        de = m[Z];
      if (typeof de == "number") return de;
    }
    return null;
  }
  function Fr(j, Q, Z) {
    if (u)
      if (j) {
        if (Object.keys(j[0].params).length > 0)
          return { active: !0, matches: Rl(Q, Z, l, !0) };
      } else return { active: !0, matches: Rl(Q, Z, l, !0) || [] };
    return { active: !1, matches: null };
  }
  async function $t(j, Q, Z) {
    if (!u) return { type: "success", matches: j };
    let de = j;
    for (;;) {
      let Be = o == null,
        We = o || s,
        E = i;
      try {
        await u({
          path: Q,
          matches: de,
          patch: (w, L) => {
            Z.aborted || Bp(w, L, We, E, a);
          },
        });
      } catch (w) {
        return { type: "error", error: w, partialMatches: de };
      } finally {
        Be && !Z.aborted && (s = [...s]);
      }
      if (Z.aborted) return { type: "aborted" };
      let T = ti(We, Q, l);
      if (T) return { type: "success", matches: T };
      let y = Rl(We, Q, l, !0);
      if (
        !y ||
        (de.length === y.length &&
          de.every((w, L) => w.route.id === y[L].route.id))
      )
        return { type: "success", matches: null };
      de = y;
    }
  }
  function ma(j) {
    (i = {}), (o = gc(j, a, void 0, i));
  }
  function er(j, Q) {
    let Z = o == null;
    Bp(j, Q, o || s, i, a), Z && ((s = [...s]), He({}));
  }
  return (
    (b = {
      get basename() {
        return l;
      },
      get future() {
        return f;
      },
      get state() {
        return C;
      },
      get routes() {
        return s;
      },
      get window() {
        return t;
      },
      initialize: Se,
      subscribe: ve,
      enableScrollRestoration: Lr,
      navigate: be,
      fetch: Ve,
      revalidate: Oe,
      createHref: (j) => e.history.createHref(j),
      encodeLocation: (j) => e.history.encodeLocation(j),
      getFetcher: Xe,
      deleteFetcher: dt,
      dispose: he,
      getBlocker: It,
      deleteBlocker: Dt,
      patchRoutes: er,
      _internalFetchControllers: Ae,
      _internalActiveDeferreds: k,
      _internalSetRoutes: ma,
    }),
    b
  );
}
function Y3(e) {
  return (
    e != null &&
    (("formData" in e && e.formData != null) ||
      ("body" in e && e.body !== void 0))
  );
}
function bf(e, t, r, n, a, i, s, o) {
  let l, c;
  if (s) {
    l = [];
    for (let f of t)
      if ((l.push(f), f.route.id === s)) {
        c = f;
        break;
      }
  } else (l = t), (c = t[t.length - 1]);
  let u = P3(a || ".", I3(l, i), $o(e.pathname, r) || e.pathname, o === "path");
  if (
    (a == null && ((u.search = e.search), (u.hash = e.hash)),
    (a == null || a === "" || a === ".") && c)
  ) {
    let f = od(u.search);
    if (c.route.index && !f)
      u.search = u.search ? u.search.replace(/^\?/, "?index&") : "?index";
    else if (!c.route.index && f) {
      let d = new URLSearchParams(u.search),
        h = d.getAll("index");
      d.delete("index"),
        h.filter((p) => p).forEach((p) => d.append("index", p));
      let m = d.toString();
      u.search = m ? "?" + m : "";
    }
  }
  return (
    n &&
      r !== "/" &&
      (u.pathname = u.pathname === "/" ? r : ui([r, u.pathname])),
    Uo(u)
  );
}
function Ip(e, t, r, n) {
  if (!n || !Y3(n)) return { path: r };
  if (n.formMethod && !iD(n.formMethod))
    return { path: r, error: $r(405, { method: n.formMethod }) };
  let a = () => ({ path: r, error: $r(400, { type: "invalid-body" }) }),
    i = n.formMethod || "get",
    s = e ? i.toUpperCase() : i.toLowerCase(),
    o = rx(r);
  if (n.body !== void 0) {
    if (n.formEncType === "text/plain") {
      if (!Rn(s)) return a();
      let d =
        typeof n.body == "string"
          ? n.body
          : n.body instanceof FormData || n.body instanceof URLSearchParams
            ? Array.from(n.body.entries()).reduce((h, m) => {
                let [p, x] = m;
                return (
                  "" +
                  h +
                  p +
                  "=" +
                  x +
                  `
`
                );
              }, "")
            : String(n.body);
      return {
        path: r,
        submission: {
          formMethod: s,
          formAction: o,
          formEncType: n.formEncType,
          formData: void 0,
          json: void 0,
          text: d,
        },
      };
    } else if (n.formEncType === "application/json") {
      if (!Rn(s)) return a();
      try {
        let d = typeof n.body == "string" ? JSON.parse(n.body) : n.body;
        return {
          path: r,
          submission: {
            formMethod: s,
            formAction: o,
            formEncType: n.formEncType,
            formData: void 0,
            json: d,
            text: void 0,
          },
        };
      } catch {
        return a();
      }
    }
  }
  lt(
    typeof FormData == "function",
    "FormData is not available in this environment",
  );
  let l, c;
  if (n.formData) (l = jf(n.formData)), (c = n.formData);
  else if (n.body instanceof FormData) (l = jf(n.body)), (c = n.body);
  else if (n.body instanceof URLSearchParams) (l = n.body), (c = Up(l));
  else if (n.body == null) (l = new URLSearchParams()), (c = new FormData());
  else
    try {
      (l = new URLSearchParams(n.body)), (c = Up(l));
    } catch {
      return a();
    }
  let u = {
    formMethod: s,
    formAction: o,
    formEncType: (n && n.formEncType) || "application/x-www-form-urlencoded",
    formData: c,
    json: void 0,
    text: void 0,
  };
  if (Rn(u.formMethod)) return { path: r, submission: u };
  let f = Xa(r);
  return (
    t && f.search && od(f.search) && l.append("index", ""),
    (f.search = "?" + l),
    { path: Uo(f), submission: u }
  );
}
function Pp(e, t, r) {
  r === void 0 && (r = !1);
  let n = e.findIndex((a) => a.route.id === t);
  return n >= 0 ? e.slice(0, r ? n + 1 : n) : e;
}
function Mp(e, t, r, n, a, i, s, o, l, c, u, f, d, h, m, p) {
  let x = p ? (an(p[1]) ? p[1].error : p[1].data) : void 0,
    _ = e.createURL(t.location),
    v = e.createURL(a),
    g = r;
  i && t.errors
    ? (g = Pp(r, Object.keys(t.errors)[0], !0))
    : p && an(p[1]) && (g = Pp(r, p[0]));
  let S = p ? p[1].statusCode : void 0,
    b = s && S && S >= 400,
    C = g.filter((A, F) => {
      let { route: I } = A;
      if (I.lazy) return !0;
      if (I.loader == null) return !1;
      if (i) return Bf(I, t.loaderData, t.errors);
      if (K3(t.loaderData, t.matches[F], A) || l.some((X) => X === A.route.id))
        return !0;
      let P = t.matches[F],
        B = A;
      return bp(
        A,
        Rt(
          {
            currentUrl: _,
            currentParams: P.params,
            nextUrl: v,
            nextParams: B.params,
          },
          n,
          {
            actionResult: x,
            actionStatus: S,
            defaultShouldRevalidate: b
              ? !1
              : o ||
                _.pathname + _.search === v.pathname + v.search ||
                _.search !== v.search ||
                ex(P, B),
          },
        ),
      );
    }),
    D = [];
  return (
    f.forEach((A, F) => {
      if (i || !r.some((ae) => ae.route.id === A.routeId) || u.has(F)) return;
      let I = ti(h, A.path, m);
      if (!I) {
        D.push({
          key: F,
          routeId: A.routeId,
          path: A.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let P = t.fetchers.get(F),
        B = Us(I, A.path),
        X = !1;
      d.has(F)
        ? (X = !1)
        : c.has(F)
          ? (c.delete(F), (X = !0))
          : P && P.state !== "idle" && P.data === void 0
            ? (X = o)
            : (X = bp(
                B,
                Rt(
                  {
                    currentUrl: _,
                    currentParams: t.matches[t.matches.length - 1].params,
                    nextUrl: v,
                    nextParams: r[r.length - 1].params,
                  },
                  n,
                  {
                    actionResult: x,
                    actionStatus: S,
                    defaultShouldRevalidate: b ? !1 : o,
                  },
                ),
              )),
        X &&
          D.push({
            key: F,
            routeId: A.routeId,
            path: A.path,
            matches: I,
            match: B,
            controller: new AbortController(),
          });
    }),
    [C, D]
  );
}
function Bf(e, t, r) {
  if (e.lazy) return !0;
  if (!e.loader) return !1;
  let n = t != null && t[e.id] !== void 0,
    a = r != null && r[e.id] !== void 0;
  return !n && a
    ? !1
    : typeof e.loader == "function" && e.loader.hydrate === !0
      ? !0
      : !n && !a;
}
function K3(e, t, r) {
  let n = !t || r.route.id !== t.route.id,
    a = e[r.route.id] === void 0;
  return n || a;
}
function ex(e, t) {
  let r = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (r != null && r.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function bp(e, t) {
  if (e.route.shouldRevalidate) {
    let r = e.route.shouldRevalidate(t);
    if (typeof r == "boolean") return r;
  }
  return t.defaultShouldRevalidate;
}
function Bp(e, t, r, n, a) {
  var i;
  let s;
  if (e) {
    let c = n[e];
    lt(c, "No route found to patch children into: routeId = " + e),
      c.children || (c.children = []),
      (s = c.children);
  } else s = r;
  let o = t.filter((c) => !s.some((u) => tx(c, u))),
    l = gc(
      o,
      a,
      [e || "_", "patch", String(((i = s) == null ? void 0 : i.length) || "0")],
      n,
    );
  s.push(...l);
}
function tx(e, t) {
  return "id" in e && "id" in t && e.id === t.id
    ? !0
    : e.index === t.index &&
        e.path === t.path &&
        e.caseSensitive === t.caseSensitive
      ? (!e.children || e.children.length === 0) &&
        (!t.children || t.children.length === 0)
        ? !0
        : e.children.every((r, n) => {
            var a;
            return (a = t.children) == null ? void 0 : a.some((i) => tx(r, i));
          })
      : !1;
}
async function X3(e, t, r) {
  if (!e.lazy) return;
  let n = await e.lazy();
  if (!e.lazy) return;
  let a = r[e.id];
  lt(a, "No route found in manifest");
  let i = {};
  for (let s in n) {
    let l = a[s] !== void 0 && s !== "hasErrorBoundary";
    ds(
      !l,
      'Route "' +
        a.id +
        '" has a static property "' +
        s +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + s + '" will be ignored.'),
    ),
      !l && !g3.has(s) && (i[s] = n[s]);
  }
  Object.assign(a, i), Object.assign(a, Rt({}, t(a), { lazy: void 0 }));
}
async function Q3(e) {
  let { matches: t } = e,
    r = t.filter((a) => a.shouldLoad);
  return (await Promise.all(r.map((a) => a.resolve()))).reduce(
    (a, i, s) => Object.assign(a, { [r[s].route.id]: i }),
    {},
  );
}
async function J3(e, t, r, n, a, i, s, o, l, c) {
  let u = i.map((h) => (h.route.lazy ? X3(h.route, l, o) : void 0)),
    f = i.map((h, m) => {
      let p = u[m],
        x = a.some((v) => v.route.id === h.route.id);
      return Rt({}, h, {
        shouldLoad: x,
        resolve: async (v) => (
          v &&
            n.method === "GET" &&
            (h.route.lazy || h.route.loader) &&
            (x = !0),
          x
            ? Z3(t, n, h, p, v, c)
            : Promise.resolve({ type: wt.data, result: void 0 })
        ),
      });
    }),
    d = await e({
      matches: f,
      request: n,
      params: i[0].params,
      fetcherKey: s,
      context: c,
    });
  try {
    await Promise.all(u);
  } catch {}
  return d;
}
async function Z3(e, t, r, n, a, i) {
  let s,
    o,
    l = (c) => {
      let u,
        f = new Promise((m, p) => (u = p));
      (o = () => u()), t.signal.addEventListener("abort", o);
      let d = (m) =>
          typeof c != "function"
            ? Promise.reject(
                new Error(
                  "You cannot call the handler for a route which defines a boolean " +
                    ('"' + e + '" [routeId: ' + r.route.id + "]"),
                ),
              )
            : c(
                { request: t, params: r.params, context: i },
                ...(m !== void 0 ? [m] : []),
              ),
        h = (async () => {
          try {
            return { type: "data", result: await (a ? a((p) => d(p)) : d()) };
          } catch (m) {
            return { type: "error", result: m };
          }
        })();
      return Promise.race([h, f]);
    };
  try {
    let c = r.route[e];
    if (n)
      if (c) {
        let u,
          [f] = await Promise.all([
            l(c).catch((d) => {
              u = d;
            }),
            n,
          ]);
        if (u !== void 0) throw u;
        s = f;
      } else if ((await n, (c = r.route[e]), c)) s = await l(c);
      else if (e === "action") {
        let u = new URL(t.url),
          f = u.pathname + u.search;
        throw $r(405, { method: t.method, pathname: f, routeId: r.route.id });
      } else return { type: wt.data, result: void 0 };
    else if (c) s = await l(c);
    else {
      let u = new URL(t.url),
        f = u.pathname + u.search;
      throw $r(404, { pathname: f });
    }
    lt(
      s.result !== void 0,
      "You defined " +
        (e === "action" ? "an action" : "a loader") +
        " for route " +
        ('"' +
          r.route.id +
          "\" but didn't return anything from your `" +
          e +
          "` ") +
        "function. Please return a value or `null`.",
    );
  } catch (c) {
    return { type: wt.error, result: c };
  } finally {
    o && t.signal.removeEventListener("abort", o);
  }
  return s;
}
async function q3(e) {
  let { result: t, type: r } = e;
  if (nx(t)) {
    let c;
    try {
      let u = t.headers.get("Content-Type");
      u && /\bapplication\/json\b/.test(u)
        ? t.body == null
          ? (c = null)
          : (c = await t.json())
        : (c = await t.text());
    } catch (u) {
      return { type: wt.error, error: u };
    }
    return r === wt.error
      ? {
          type: wt.error,
          error: new xc(t.status, t.statusText, c),
          statusCode: t.status,
          headers: t.headers,
        }
      : { type: wt.data, data: c, statusCode: t.status, headers: t.headers };
  }
  if (r === wt.error) {
    if (zp(t)) {
      var n;
      if (t.data instanceof Error) {
        var a;
        return {
          type: wt.error,
          error: t.data,
          statusCode: (a = t.init) == null ? void 0 : a.status,
        };
      }
      t = new xc(
        ((n = t.init) == null ? void 0 : n.status) || 500,
        void 0,
        t.data,
      );
    }
    return { type: wt.error, error: t, statusCode: Vc(t) ? t.status : void 0 };
  }
  if (aD(t)) {
    var i, s;
    return {
      type: wt.deferred,
      deferredData: t,
      statusCode: (i = t.init) == null ? void 0 : i.status,
      headers:
        ((s = t.init) == null ? void 0 : s.headers) &&
        new Headers(t.init.headers),
    };
  }
  if (zp(t)) {
    var o, l;
    return {
      type: wt.data,
      data: t.data,
      statusCode: (o = t.init) == null ? void 0 : o.status,
      headers:
        (l = t.init) != null && l.headers
          ? new Headers(t.init.headers)
          : void 0,
    };
  }
  return { type: wt.data, data: t };
}
function eD(e, t, r, n, a, i) {
  let s = e.headers.get("Location");
  if (
    (lt(
      s,
      "Redirects returned/thrown from loaders/actions must have a Location header",
    ),
    !id.test(s))
  ) {
    let o = n.slice(0, n.findIndex((l) => l.route.id === r) + 1);
    (s = bf(new URL(t.url), o, a, !0, s, i)), e.headers.set("Location", s);
  }
  return e;
}
function jp(e, t, r) {
  if (id.test(e)) {
    let n = e,
      a = n.startsWith("//") ? new URL(t.protocol + n) : new URL(n),
      i = $o(a.pathname, r) != null;
    if (a.origin === t.origin && i) return a.pathname + a.search + a.hash;
  }
  return e;
}
function Ri(e, t, r, n) {
  let a = e.createURL(rx(t)).toString(),
    i = { signal: r };
  if (n && Rn(n.formMethod)) {
    let { formMethod: s, formEncType: o } = n;
    (i.method = s.toUpperCase()),
      o === "application/json"
        ? ((i.headers = new Headers({ "Content-Type": o })),
          (i.body = JSON.stringify(n.json)))
        : o === "text/plain"
          ? (i.body = n.text)
          : o === "application/x-www-form-urlencoded" && n.formData
            ? (i.body = jf(n.formData))
            : (i.body = n.formData);
  }
  return new Request(a, i);
}
function jf(e) {
  let t = new URLSearchParams();
  for (let [r, n] of e.entries())
    t.append(r, typeof n == "string" ? n : n.name);
  return t;
}
function Up(e) {
  let t = new FormData();
  for (let [r, n] of e.entries()) t.append(r, n);
  return t;
}
function tD(e, t, r, n, a) {
  let i = {},
    s = null,
    o,
    l = !1,
    c = {},
    u = r && an(r[1]) ? r[1].error : void 0;
  return (
    e.forEach((f) => {
      if (!(f.route.id in t)) return;
      let d = f.route.id,
        h = t[d];
      if (
        (lt(!si(h), "Cannot handle redirect results in processLoaderData"),
        an(h))
      ) {
        let m = h.error;
        u !== void 0 && ((m = u), (u = void 0)), (s = s || {});
        {
          let p = ri(e, d);
          s[p.route.id] == null && (s[p.route.id] = m);
        }
        (i[d] = void 0),
          l || ((l = !0), (o = Vc(h.error) ? h.error.status : 500)),
          h.headers && (c[d] = h.headers);
      } else
        ka(h)
          ? (n.set(d, h.deferredData),
            (i[d] = h.deferredData.data),
            h.statusCode != null &&
              h.statusCode !== 200 &&
              !l &&
              (o = h.statusCode),
            h.headers && (c[d] = h.headers))
          : ((i[d] = h.data),
            h.statusCode && h.statusCode !== 200 && !l && (o = h.statusCode),
            h.headers && (c[d] = h.headers));
    }),
    u !== void 0 && r && ((s = { [r[0]]: u }), (i[r[0]] = void 0)),
    { loaderData: i, errors: s, statusCode: o || 200, loaderHeaders: c }
  );
}
function $p(e, t, r, n, a, i, s) {
  let { loaderData: o, errors: l } = tD(t, r, n, s);
  return (
    a.forEach((c) => {
      let { key: u, match: f, controller: d } = c,
        h = i[u];
      if (
        (lt(h, "Did not find corresponding fetcher result"),
        !(d && d.signal.aborted))
      )
        if (an(h)) {
          let m = ri(e.matches, f == null ? void 0 : f.route.id);
          (l && l[m.route.id]) || (l = Rt({}, l, { [m.route.id]: h.error })),
            e.fetchers.delete(u);
        } else if (si(h)) lt(!1, "Unhandled fetcher revalidation redirect");
        else if (ka(h)) lt(!1, "Unhandled fetcher deferred data");
        else {
          let m = wa(h.data);
          e.fetchers.set(u, m);
        }
    }),
    { loaderData: o, errors: l }
  );
}
function Hp(e, t, r, n) {
  let a = Rt({}, t);
  for (let i of r) {
    let s = i.route.id;
    if (
      (t.hasOwnProperty(s)
        ? t[s] !== void 0 && (a[s] = t[s])
        : e[s] !== void 0 && i.route.loader && (a[s] = e[s]),
      n && n.hasOwnProperty(s))
    )
      break;
  }
  return a;
}
function Wp(e) {
  return e
    ? an(e[1])
      ? { actionData: {} }
      : { actionData: { [e[0]]: e[1].data } }
    : {};
}
function ri(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((n) => n.route.id === t) + 1) : [...e])
      .reverse()
      .find((n) => n.route.hasErrorBoundary === !0) || e[0]
  );
}
function Vp(e) {
  let t =
    e.length === 1
      ? e[0]
      : e.find((r) => r.index || !r.path || r.path === "/") || {
          id: "__shim-error-route__",
        };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
    route: t,
  };
}
function $r(e, t) {
  let {
      pathname: r,
      routeId: n,
      method: a,
      type: i,
      message: s,
    } = t === void 0 ? {} : t,
    o = "Unknown Server Error",
    l = "Unknown @remix-run/router error";
  return (
    e === 400
      ? ((o = "Bad Request"),
        a && r && n
          ? (l =
              "You made a " +
              a +
              ' request to "' +
              r +
              '" but ' +
              ('did not provide a `loader` for route "' + n + '", ') +
              "so there is no way to handle the request.")
          : i === "defer-action"
            ? (l = "defer() is not supported in actions")
            : i === "invalid-body" && (l = "Unable to encode submission body"))
      : e === 403
        ? ((o = "Forbidden"),
          (l = 'Route "' + n + '" does not match URL "' + r + '"'))
        : e === 404
          ? ((o = "Not Found"), (l = 'No route matches URL "' + r + '"'))
          : e === 405 &&
            ((o = "Method Not Allowed"),
            a && r && n
              ? (l =
                  "You made a " +
                  a.toUpperCase() +
                  ' request to "' +
                  r +
                  '" but ' +
                  ('did not provide an `action` for route "' + n + '", ') +
                  "so there is no way to handle the request.")
              : a && (l = 'Invalid request method "' + a.toUpperCase() + '"')),
    new xc(e || 500, o, new Error(l), !0)
  );
}
function xl(e) {
  let t = Object.entries(e);
  for (let r = t.length - 1; r >= 0; r--) {
    let [n, a] = t[r];
    if (si(a)) return { key: n, result: a };
  }
}
function rx(e) {
  let t = typeof e == "string" ? Xa(e) : e;
  return Uo(Rt({}, t, { hash: "" }));
}
function rD(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ""
      ? t.hash !== ""
      : e.hash === t.hash
        ? !0
        : t.hash !== "";
}
function nD(e) {
  return nx(e.result) && H3.has(e.result.status);
}
function ka(e) {
  return e.type === wt.deferred;
}
function an(e) {
  return e.type === wt.error;
}
function si(e) {
  return (e && e.type) === wt.redirect;
}
function zp(e) {
  return (
    typeof e == "object" &&
    e != null &&
    "type" in e &&
    "data" in e &&
    "init" in e &&
    e.type === "DataWithResponseInit"
  );
}
function aD(e) {
  let t = e;
  return (
    t &&
    typeof t == "object" &&
    typeof t.data == "object" &&
    typeof t.subscribe == "function" &&
    typeof t.cancel == "function" &&
    typeof t.resolveData == "function"
  );
}
function nx(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body < "u"
  );
}
function iD(e) {
  return $3.has(e.toLowerCase());
}
function Rn(e) {
  return j3.has(e.toLowerCase());
}
async function sD(e, t, r, n, a) {
  let i = Object.entries(t);
  for (let s = 0; s < i.length; s++) {
    let [o, l] = i[s],
      c = e.find((d) => (d == null ? void 0 : d.route.id) === o);
    if (!c) continue;
    let u = n.find((d) => d.route.id === c.route.id),
      f = u != null && !ex(u, c) && (a && a[c.route.id]) !== void 0;
    ka(l) &&
      f &&
      (await sd(l, r, !1).then((d) => {
        d && (t[o] = d);
      }));
  }
}
async function oD(e, t, r) {
  for (let n = 0; n < r.length; n++) {
    let { key: a, routeId: i, controller: s } = r[n],
      o = t[a];
    e.find((c) => (c == null ? void 0 : c.route.id) === i) &&
      ka(o) &&
      (lt(
        s,
        "Expected an AbortController for revalidating fetcher deferred result",
      ),
      await sd(o, s.signal, !0).then((c) => {
        c && (t[a] = c);
      }));
  }
}
async function sd(e, t, r) {
  if ((r === void 0 && (r = !1), !(await e.deferredData.resolveData(t)))) {
    if (r)
      try {
        return { type: wt.data, data: e.deferredData.unwrappedData };
      } catch (a) {
        return { type: wt.error, error: a };
      }
    return { type: wt.data, data: e.deferredData.data };
  }
}
function od(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function Us(e, t) {
  let r = typeof t == "string" ? Xa(t).search : t.search;
  if (e[e.length - 1].route.index && od(r || "")) return e[e.length - 1];
  let n = Jg(e);
  return n[n.length - 1];
}
function Gp(e) {
  let {
    formMethod: t,
    formAction: r,
    formEncType: n,
    text: a,
    formData: i,
    json: s,
  } = e;
  if (!(!t || !r || !n)) {
    if (a != null)
      return {
        formMethod: t,
        formAction: r,
        formEncType: n,
        formData: void 0,
        json: void 0,
        text: a,
      };
    if (i != null)
      return {
        formMethod: t,
        formAction: r,
        formEncType: n,
        formData: i,
        json: void 0,
        text: void 0,
      };
    if (s !== void 0)
      return {
        formMethod: t,
        formAction: r,
        formEncType: n,
        formData: void 0,
        json: s,
        text: void 0,
      };
  }
}
function ju(e, t) {
  return t
    ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: "loading",
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function lD(e, t) {
  return {
    state: "submitting",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function Os(e, t) {
  return e
    ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      };
}
function cD(e, t) {
  return {
    state: "submitting",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  };
}
function wa(e) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  };
}
function uD(e, t) {
  try {
    let r = e.sessionStorage.getItem(qg);
    if (r) {
      let n = JSON.parse(r);
      for (let [a, i] of Object.entries(n || {}))
        i && Array.isArray(i) && t.set(a, new Set(i || []));
    }
  } catch {}
}
function fD(e, t) {
  if (t.size > 0) {
    let r = {};
    for (let [n, a] of t) r[n] = [...a];
    try {
      e.sessionStorage.setItem(qg, JSON.stringify(r));
    } catch (n) {
      ds(
        !1,
        "Failed to save applied view transitions in sessionStorage (" +
          n +
          ").",
      );
    }
  }
}
/**
 * React Router v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Uf() {
  return (
    (Uf = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Uf.apply(this, arguments)
  );
}
const ax = xe.createContext(null),
  ix = xe.createContext(null),
  sx = xe.createContext(null),
  ld = xe.createContext(null),
  zc = xe.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  ox = xe.createContext(null);
function cd() {
  return xe.useContext(ld) != null;
}
function dD() {
  return cd() || lt(!1), xe.useContext(ld).location;
}
function hD(e, t, r, n) {
  cd() || lt(!1);
  let { navigator: a } = xe.useContext(sx),
    { matches: i } = xe.useContext(zc),
    s = i[i.length - 1],
    o = s ? s.params : {};
  s && s.pathname;
  let l = s ? s.pathnameBase : "/";
  s && s.route;
  let c = dD(),
    u;
  u = c;
  let f = u.pathname || "/",
    d = f;
  if (l !== "/") {
    let p = l.replace(/^\//, "").split("/");
    d = "/" + f.replace(/^\//, "").split("/").slice(p.length).join("/");
  }
  let h = ti(e, { pathname: d });
  return xD(
    h &&
      h.map((p) =>
        Object.assign({}, p, {
          params: Object.assign({}, o, p.params),
          pathname: ui([
            l,
            a.encodeLocation
              ? a.encodeLocation(p.pathname).pathname
              : p.pathname,
          ]),
          pathnameBase:
            p.pathnameBase === "/"
              ? l
              : ui([
                  l,
                  a.encodeLocation
                    ? a.encodeLocation(p.pathnameBase).pathname
                    : p.pathnameBase,
                ]),
        }),
      ),
    i,
    r,
    n,
  );
}
function pD() {
  let e = yD(),
    t = Vc(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    r = e instanceof Error ? e.stack : null,
    a = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return xe.createElement(
    xe.Fragment,
    null,
    xe.createElement("h2", null, "Unexpected Application Error!"),
    xe.createElement("h3", { style: { fontStyle: "italic" } }, t),
    r ? xe.createElement("pre", { style: a }, r) : null,
    null,
  );
}
const mD = xe.createElement(pD, null);
class vD extends xe.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, r) {
    return r.location !== t.location ||
      (r.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : r.error,
          location: r.location,
          revalidation: t.revalidation || r.revalidation,
        };
  }
  componentDidCatch(t, r) {
    console.error(
      "React Router caught the following error during render",
      t,
      r,
    );
  }
  render() {
    return this.state.error !== void 0
      ? xe.createElement(
          zc.Provider,
          { value: this.props.routeContext },
          xe.createElement(ox.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function gD(e) {
  let { routeContext: t, match: r, children: n } = e,
    a = xe.useContext(ax);
  return (
    a &&
      a.static &&
      a.staticContext &&
      (r.route.errorElement || r.route.ErrorBoundary) &&
      (a.staticContext._deepestRenderedBoundaryId = r.route.id),
    xe.createElement(zc.Provider, { value: t }, n)
  );
}
function xD(e, t, r, n) {
  var a;
  if (
    (t === void 0 && (t = []),
    r === void 0 && (r = null),
    n === void 0 && (n = null),
    e == null)
  ) {
    var i;
    if (!r) return null;
    if (r.errors) e = r.matches;
    else if (
      (i = n) != null &&
      i.v7_partialHydration &&
      t.length === 0 &&
      !r.initialized &&
      r.matches.length > 0
    )
      e = r.matches;
    else return null;
  }
  let s = e,
    o = (a = r) == null ? void 0 : a.errors;
  if (o != null) {
    let u = s.findIndex(
      (f) => f.route.id && (o == null ? void 0 : o[f.route.id]) !== void 0,
    );
    u >= 0 || lt(!1), (s = s.slice(0, Math.min(s.length, u + 1)));
  }
  let l = !1,
    c = -1;
  if (r && n && n.v7_partialHydration)
    for (let u = 0; u < s.length; u++) {
      let f = s[u];
      if (
        ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (c = u),
        f.route.id)
      ) {
        let { loaderData: d, errors: h } = r,
          m =
            f.route.loader &&
            d[f.route.id] === void 0 &&
            (!h || h[f.route.id] === void 0);
        if (f.route.lazy || m) {
          (l = !0), c >= 0 ? (s = s.slice(0, c + 1)) : (s = [s[0]]);
          break;
        }
      }
    }
  return s.reduceRight((u, f, d) => {
    let h,
      m = !1,
      p = null,
      x = null;
    r &&
      ((h = o && f.route.id ? o[f.route.id] : void 0),
      (p = f.route.errorElement || mD),
      l &&
        (c < 0 && d === 0
          ? (wD("route-fallback"), (m = !0), (x = null))
          : c === d &&
            ((m = !0), (x = f.route.hydrateFallbackElement || null))));
    let _ = t.concat(s.slice(0, d + 1)),
      v = () => {
        let g;
        return (
          h
            ? (g = p)
            : m
              ? (g = x)
              : f.route.Component
                ? (g = xe.createElement(f.route.Component, null))
                : f.route.element
                  ? (g = f.route.element)
                  : (g = u),
          xe.createElement(gD, {
            match: f,
            routeContext: { outlet: u, matches: _, isDataRoute: r != null },
            children: g,
          })
        );
      };
    return r && (f.route.ErrorBoundary || f.route.errorElement || d === 0)
      ? xe.createElement(vD, {
          location: r.location,
          revalidation: r.revalidation,
          component: p,
          error: h,
          children: v(),
          routeContext: { outlet: null, matches: _, isDataRoute: !0 },
        })
      : v();
  }, null);
}
var Lo = (function (e) {
  return (
    (e.UseBlocker = "useBlocker"),
    (e.UseLoaderData = "useLoaderData"),
    (e.UseActionData = "useActionData"),
    (e.UseRouteError = "useRouteError"),
    (e.UseNavigation = "useNavigation"),
    (e.UseRouteLoaderData = "useRouteLoaderData"),
    (e.UseMatches = "useMatches"),
    (e.UseRevalidator = "useRevalidator"),
    (e.UseNavigateStable = "useNavigate"),
    (e.UseRouteId = "useRouteId"),
    e
  );
})(Lo || {});
function lx(e) {
  let t = xe.useContext(ix);
  return t || lt(!1), t;
}
function _D(e) {
  let t = xe.useContext(zc);
  return t || lt(!1), t;
}
function cx(e) {
  let t = _D(),
    r = t.matches[t.matches.length - 1];
  return r.route.id || lt(!1), r.route.id;
}
function ED() {
  let e = lx(Lo.UseLoaderData),
    t = cx(Lo.UseLoaderData);
  if (e.errors && e.errors[t] != null) {
    console.error(
      "You cannot `useLoaderData` in an errorElement (routeId: " + t + ")",
    );
    return;
  }
  return e.loaderData[t];
}
function yD() {
  var e;
  let t = xe.useContext(ox),
    r = lx(Lo.UseRouteError),
    n = cx(Lo.UseRouteError);
  return t !== void 0 ? t : (e = r.errors) == null ? void 0 : e[n];
}
const Yp = {};
function wD(e, t, r) {
  Yp[e] || (Yp[e] = !0);
}
const Kp = {};
function SD(e, t) {
  Kp[t] || ((Kp[t] = !0), console.warn(t));
}
const Oi = (e, t, r) =>
  SD(
    e,
    "⚠️ React Router Future Flag Warning: " +
      t +
      ". " +
      ("You can use the `" + e + "` future flag to opt-in early. ") +
      ("For more information, see " + r + "."),
  );
function TD(e, t) {
  (e != null && e.v7_startTransition) ||
    Oi(
      "v7_startTransition",
      "React Router will begin wrapping state updates in `React.startTransition` in v7",
      "https://reactrouter.com/v6/upgrading/future#v7_starttransition",
    ),
    !(e != null && e.v7_relativeSplatPath) &&
      (!t || !t.v7_relativeSplatPath) &&
      Oi(
        "v7_relativeSplatPath",
        "Relative route resolution within Splat routes is changing in v7",
        "https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath",
      ),
    t &&
      (t.v7_fetcherPersist ||
        Oi(
          "v7_fetcherPersist",
          "The persistence behavior of fetchers is changing in v7",
          "https://reactrouter.com/v6/upgrading/future#v7_fetcherpersist",
        ),
      t.v7_normalizeFormMethod ||
        Oi(
          "v7_normalizeFormMethod",
          "Casing of `formMethod` fields is being normalized to uppercase in v7",
          "https://reactrouter.com/v6/upgrading/future#v7_normalizeformmethod",
        ),
      t.v7_partialHydration ||
        Oi(
          "v7_partialHydration",
          "`RouterProvider` hydration behavior is changing in v7",
          "https://reactrouter.com/v6/upgrading/future#v7_partialhydration",
        ),
      t.v7_skipActionErrorRevalidation ||
        Oi(
          "v7_skipActionErrorRevalidation",
          "The revalidation behavior after 4xx/5xx `action` responses is changing in v7",
          "https://reactrouter.com/v6/upgrading/future#v7_skipactionerrorrevalidation",
        ));
}
function AD(e) {
  let {
    basename: t = "/",
    children: r = null,
    location: n,
    navigationType: a = Xt.Pop,
    navigator: i,
    static: s = !1,
    future: o,
  } = e;
  cd() && lt(!1);
  let l = t.replace(/^\/*/, "/"),
    c = xe.useMemo(
      () => ({
        basename: l,
        navigator: i,
        static: s,
        future: Uf({ v7_relativeSplatPath: !1 }, o),
      }),
      [l, o, i, s],
    );
  typeof n == "string" && (n = Xa(n));
  let {
      pathname: u = "/",
      search: f = "",
      hash: d = "",
      state: h = null,
      key: m = "default",
    } = n,
    p = xe.useMemo(() => {
      let x = $o(u, l);
      return x == null
        ? null
        : {
            location: { pathname: x, search: f, hash: d, state: h, key: m },
            navigationType: a,
          };
    }, [l, u, f, d, h, m, a]);
  return p == null
    ? null
    : xe.createElement(
        sx.Provider,
        { value: c },
        xe.createElement(ld.Provider, { children: r, value: p }),
      );
}
new Promise(() => {});
function CD(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      Object.assign(t, {
        element: xe.createElement(e.Component),
        Component: void 0,
      }),
    e.HydrateFallback &&
      Object.assign(t, {
        hydrateFallbackElement: xe.createElement(e.HydrateFallback),
        HydrateFallback: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: xe.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    t
  );
}
/**
 * React Router DOM v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function _c() {
  return (
    (_c = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    _c.apply(this, arguments)
  );
}
const DD = "6";
try {
  window.__reactRouterVersion = DD;
} catch {}
function LD(e, t) {
  return G3({
    basename: void 0,
    future: _c({}, void 0, { v7_prependBasename: !0 }),
    history: p3({ window: void 0 }),
    hydrationData: ND(),
    routes: e,
    mapRouteProperties: CD,
    dataStrategy: void 0,
    patchRoutesOnNavigation: void 0,
    window: void 0,
  }).initialize();
}
function ND() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = _c({}, t, { errors: FD(t.errors) })), t;
}
function FD(e) {
  if (!e) return null;
  let t = Object.entries(e),
    r = {};
  for (let [n, a] of t)
    if (a && a.__type === "RouteErrorResponse")
      r[n] = new xc(a.status, a.statusText, a.data, a.internal === !0);
    else if (a && a.__type === "Error") {
      if (a.__subType) {
        let i = window[a.__subType];
        if (typeof i == "function")
          try {
            let s = new i(a.message);
            (s.stack = ""), (r[n] = s);
          } catch {}
      }
      if (r[n] == null) {
        let i = new Error(a.message);
        (i.stack = ""), (r[n] = i);
      }
    } else r[n] = a;
  return r;
}
const kD = xe.createContext({ isTransitioning: !1 }),
  RD = xe.createContext(new Map()),
  OD = "startTransition",
  Xp = u_[OD],
  ID = "flushSync",
  Qp = w2[ID];
function PD(e) {
  Xp ? Xp(e) : e();
}
function Is(e) {
  Qp ? Qp(e) : e();
}
class MD {
  constructor() {
    (this.status = "pending"),
      (this.promise = new Promise((t, r) => {
        (this.resolve = (n) => {
          this.status === "pending" && ((this.status = "resolved"), t(n));
        }),
          (this.reject = (n) => {
            this.status === "pending" && ((this.status = "rejected"), r(n));
          });
      }));
  }
}
function bD(e) {
  let { fallbackElement: t, router: r, future: n } = e,
    [a, i] = xe.useState(r.state),
    [s, o] = xe.useState(),
    [l, c] = xe.useState({ isTransitioning: !1 }),
    [u, f] = xe.useState(),
    [d, h] = xe.useState(),
    [m, p] = xe.useState(),
    x = xe.useRef(new Map()),
    { v7_startTransition: _ } = n || {},
    v = xe.useCallback(
      (A) => {
        _ ? PD(A) : A();
      },
      [_],
    ),
    g = xe.useCallback(
      (A, F) => {
        let { deletedFetchers: I, flushSync: P, viewTransitionOpts: B } = F;
        I.forEach((ae) => x.current.delete(ae)),
          A.fetchers.forEach((ae, le) => {
            ae.data !== void 0 && x.current.set(le, ae.data);
          });
        let X =
          r.window == null ||
          r.window.document == null ||
          typeof r.window.document.startViewTransition != "function";
        if (!B || X) {
          P ? Is(() => i(A)) : v(() => i(A));
          return;
        }
        if (P) {
          Is(() => {
            d && (u && u.resolve(), d.skipTransition()),
              c({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: B.currentLocation,
                nextLocation: B.nextLocation,
              });
          });
          let ae = r.window.document.startViewTransition(() => {
            Is(() => i(A));
          });
          ae.finished.finally(() => {
            Is(() => {
              f(void 0), h(void 0), o(void 0), c({ isTransitioning: !1 });
            });
          }),
            Is(() => h(ae));
          return;
        }
        d
          ? (u && u.resolve(),
            d.skipTransition(),
            p({
              state: A,
              currentLocation: B.currentLocation,
              nextLocation: B.nextLocation,
            }))
          : (o(A),
            c({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: B.currentLocation,
              nextLocation: B.nextLocation,
            }));
      },
      [r.window, d, u, x, v],
    );
  xe.useLayoutEffect(() => r.subscribe(g), [r, g]),
    xe.useEffect(() => {
      l.isTransitioning && !l.flushSync && f(new MD());
    }, [l]),
    xe.useEffect(() => {
      if (u && s && r.window) {
        let A = s,
          F = u.promise,
          I = r.window.document.startViewTransition(async () => {
            v(() => i(A)), await F;
          });
        I.finished.finally(() => {
          f(void 0), h(void 0), o(void 0), c({ isTransitioning: !1 });
        }),
          h(I);
      }
    }, [v, s, u, r.window]),
    xe.useEffect(() => {
      u && s && a.location.key === s.location.key && u.resolve();
    }, [u, d, a.location, s]),
    xe.useEffect(() => {
      !l.isTransitioning &&
        m &&
        (o(m.state),
        c({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: m.currentLocation,
          nextLocation: m.nextLocation,
        }),
        p(void 0));
    }, [l.isTransitioning, m]),
    xe.useEffect(() => {}, []);
  let S = xe.useMemo(
      () => ({
        createHref: r.createHref,
        encodeLocation: r.encodeLocation,
        go: (A) => r.navigate(A),
        push: (A, F, I) =>
          r.navigate(A, {
            state: F,
            preventScrollReset: I == null ? void 0 : I.preventScrollReset,
          }),
        replace: (A, F, I) =>
          r.navigate(A, {
            replace: !0,
            state: F,
            preventScrollReset: I == null ? void 0 : I.preventScrollReset,
          }),
      }),
      [r],
    ),
    b = r.basename || "/",
    C = xe.useMemo(
      () => ({ router: r, navigator: S, static: !1, basename: b }),
      [r, S, b],
    ),
    D = xe.useMemo(
      () => ({ v7_relativeSplatPath: r.future.v7_relativeSplatPath }),
      [r.future.v7_relativeSplatPath],
    );
  return (
    xe.useEffect(() => TD(n, r.future), [n, r.future]),
    xe.createElement(
      xe.Fragment,
      null,
      xe.createElement(
        ax.Provider,
        { value: C },
        xe.createElement(
          ix.Provider,
          { value: a },
          xe.createElement(
            RD.Provider,
            { value: x.current },
            xe.createElement(
              kD.Provider,
              { value: l },
              xe.createElement(
                AD,
                {
                  basename: b,
                  location: a.location,
                  navigationType: a.historyAction,
                  navigator: S,
                  future: D,
                },
                a.initialized || r.future.v7_partialHydration
                  ? xe.createElement(BD, {
                      routes: r.routes,
                      future: r.future,
                      state: a,
                    })
                  : t,
              ),
            ),
          ),
        ),
      ),
      null,
    )
  );
}
const BD = xe.memo(jD);
function jD(e) {
  let { routes: t, future: r, state: n } = e;
  return hD(t, void 0, n, r);
}
var Jp;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(Jp || (Jp = {}));
var Zp;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Zp || (Zp = {}));
async function qp({ request: e }) {
  return { url: new URL(e.url) };
}
function _l() {
  const { url: e } = ED(),
    t = e.searchParams.get("solicitation"),
    r = e.href;
  let n = "";
  r.includes("localhost") || r.includes("amazonaws")
    ? (n = "https://1gc4yepshk.execute-api.us-east-1.amazonaws.com/sbx/lambda")
    : (n = e.origin + "/ppp/search");
  const [a, i] = xe.useState(n),
    [s, o] = xe.useState(""),
    [l, c] = xe.useState(""),
    [u, f] = xe.useState(""),
    [d, h] = xe.useState(""),
    [m, p] = xe.useState(""),
    [x, _] = xe.useState("Solicitation"),
    [v, g] = xe.useState(""),
    [S, b] = xe.useState(""),
    [C, D] = xe.useState(""),
    [A, F] = xe.useState(""),
    [I, P] = xe.useState(""),
    [B, X] = xe.useState(""),
    [ae, le] = xe.useState("RFQ"),
    [Re, Ae] = xe.useState(""),
    [se, ye] = xe.useState(""),
    [ge, oe] = xe.useState([]),
    [O, U] = xe.useState([]),
    [R, k] = xe.useState([]),
    [z, re] = xe.useState([]),
    [Se, he] = xe.useState(),
    [ve, He] = xe.useState(!1),
    [je, be] = xe.useState({ keyToSort: "sol_num", direction: "asc" }),
    [Oe, Je] = xe.useState(1);
  xe.useState("Last 60 Days");
  const [Ze, q] = xe.useState(!0);
  xe.useState("Solicitations");
  function we() {
    ye(document.getElementById("perf-date").value),
      console.log(
        "searchSolNum= " + s,
        " | searchPID= " + l,
        " | searchAwardId= " + u,
        " | searchActiveSol= " + d,
        " | awardDate= " + sear,
        " | searchDocumentCategory= " + x,
        " | searchOfferDate= " + v,
        " | searchPackageNum= " + S,
        " | searchProductCategory= " + C,
        " | searchProductName= " + A,
        " | searchPublishDate= " + I,
        " | searchPurchaseGroup= " + B,
        " | searchSolMethod= " + ae,
        " | searchLatestionVersion= " + Re,
        " | searchPerformanceDate= " + se,
      ),
      console.log("usda env1");
  }
  const Ie = [
    { id: 1, label: "Solicitation Number", key: "sol_num" },
    { id: 2, label: "Procurement Instrument Identifier", key: "proc_id" },
    { id: 3, label: "Current Date Offers Are Due", key: "offer_dt" },
    { id: 4, label: "Updated Date", key: "sol_updt_dt" },
    { id: 5, label: "Material Group", key: "mat_grp" },
    { id: 6, label: "Document Category", key: "doc_cat" },
    { id: 7, label: "Solicitation Documents", key: "doc" },
  ];
  function Ve() {
    q(!Ze);
  }
  function Ge(V) {
    be({
      keyToSort: V.key,
      direction:
        V.key === je.keyToSort
          ? je.direction === "asc"
            ? "desc"
            : "asc"
          : "dsc",
    }),
      Je(V.id);
  }
  function _t(V) {
    return Oe == 4 || Oe == 3
      ? je.direction === "asc"
        ? V.sort((ie, fe) =>
            new Date(ie[je.keyToSort]) > new Date(fe[je.keyToSort]) ? 1 : -1,
          )
        : V.sort((ie, fe) =>
            new Date(ie[je.keyToSort]) > new Date(fe[je.keyToSort]) ? -1 : 1,
          )
      : je.direction === "asc"
        ? V.sort((ie, fe) => (ie[je.keyToSort] > fe[je.keyToSort] ? 1 : -1))
        : V.sort((ie, fe) => (ie[je.keyToSort] > fe[je.keyToSort] ? -1 : 1));
  }
  const at = () => {
    const V = R.map((Pe) => {
        let Xe = "";
        const { file_name: Ke, ...dt } = Pe;
        return (
          Ke.items.map((qe) => {
            (Xe = Xe + "  " + qe.url), (dt[qe.file_name] = Xe);
          }),
          { ...dt }
        );
      }),
      ie = Mu.book_new(),
      fe = Mu.json_to_sheet(V);
    Mu.book_append_sheet(ie, fe, "Solicitations"),
      qC(ie, "WBSCM_Solicitations.xlsx");
  };
  xe.useEffect(() => {
    (async () => {
      let ie = "";
      t != null && t.length > 0
        ? (ie = await fetch(a + "?solicitation=" + t))
        : (ie = await fetch(a)),
        ie.json().then((fe) => {
          t != null && t.length > 0
            ? (k(fe), U(fe), oe(Object.keys(fe[0])))
            : (oe(Object.keys(fe[0])), U(fe), k(fe));
        });
    })();
  }, [a]);
  async function _e() {
    let V = r;
    await navigator.clipboard.writeText(V), He(!0);
  }
  return H.jsxs("div", {
    children: [
      H.jsx(d3, {}),
      H.jsx("div", {
        className: "grid-container",
        children: H.jsxs("fieldset", {
          className: "usa-fieldset position-relative",
          children: [
            H.jsx("legend", {
              className: "usa-legend text-bold",
              children: "Search Options",
            }),
            H.jsxs("div", {
              className: "grid-row grid-gap-1",
              children: [
                H.jsx("div", {
                  children: H.jsx("input", {
                    className: "usa-input grid-col-auto",
                    title: "Solicitation Number",
                    id: "input-sol_num",
                    name: "input-sol_num",
                    placeholder: "Solicitations Number",
                    type: "text",
                    value: s,
                    onChange: (V) => o(V.target.value),
                  }),
                }),
                H.jsx("div", {
                  children: H.jsx("input", {
                    className: "usa-input grid-col-auto",
                    title: "Procurement Instrument Identifier(PIID)",
                    id: "input-proc_id",
                    name: "input-proc_id",
                    placeholder: "Procurement Instrument Identifier(PIID)",
                    type: "text",
                    onChange: (V) => c(V.target.value),
                  }),
                }),
                H.jsx("div", {
                  children: H.jsx("input", {
                    className: "usa-input grid-col-auto",
                    title: "Award ID",
                    id: "input-award_id",
                    name: "input-award_id",
                    placeholder: "Award ID",
                    type: "text",
                    onChange: (V) => f(V.target.value),
                  }),
                }),
                H.jsxs("div", {
                  "data-testid": "checkbox",
                  className: "usa-checkbox",
                  children: [
                    H.jsx("input", {
                      className: "usa-checkbox__input",
                      id: "latest-version",
                      type: "checkbox",
                      name: "latest-sol",
                      title: "Latest Version",
                      onChange: (V) => Ae(V.target.value),
                    }),
                    H.jsx("label", {
                      className: "usa-checkbox__label",
                      htmlFor: "latest-version",
                      children: "Latest Version",
                    }),
                  ],
                }),
              ],
            }),
            H.jsxs("div", {
              className: "grid-row grid-gap-1",
              children: [
                H.jsx("div", {
                  children: H.jsxs("select", {
                    className: "usa-select",
                    title: "Product Category",
                    id: "input-prod_cat",
                    name: "input-prod_cat",
                    onChange: (V) => D(V.target.value),
                    defaultValue: C,
                    children: [
                      H.jsx("option", { value: "Meat", children: "Meat" }),
                      H.jsx("option", {
                        value: "Vegetables",
                        children: "Vegetables",
                      }),
                    ],
                  }),
                }),
                H.jsx("div", {
                  children: H.jsx("input", {
                    className: "usa-input",
                    title: "Product Name",
                    id: "input-prod_name",
                    name: "input-prod_name",
                    placeholder: "Product Name",
                    type: "text",
                    onChange: (V) => F(V.target.value),
                    defaultValue: A,
                  }),
                }),
                H.jsx("div", {
                  children: H.jsxs("select", {
                    className: "usa-select",
                    title: "Publish Date",
                    id: "input-pub_dt",
                    name: "input-pub_dt",
                    onChange: (V) => P(V.target.value),
                    defaultValue: I,
                    children: [
                      H.jsx("option", { value: "Any", children: "Any" }),
                      H.jsx("option", { value: "Today", children: "Today" }),
                      H.jsx("option", {
                        value: "Last 30 days",
                        children: "Last 30 days",
                      }),
                      H.jsx("option", {
                        value: "Last 60 Days",
                        children: "Last 60 Days",
                      }),
                      H.jsx("option", { value: "1 Year", children: "1 Year" }),
                    ],
                  }),
                }),
                H.jsx("div", {
                  children: H.jsxs("select", {
                    className: "usa-select",
                    title: "Document Type",
                    id: "input-doc_cat",
                    name: "input-doc_ca",
                    onChange: (V) => _(V.target.value),
                    defaultValue: x,
                    children: [
                      H.jsx("option", {
                        value: "Solicitations",
                        children: "Solicitations",
                      }),
                      H.jsx("option", {
                        value: "Specifications",
                        children: "Specifications",
                      }),
                      H.jsx("option", {
                        value: "Template",
                        children: "Template",
                      }),
                      H.jsx("option", {
                        value: "Supporting Documents",
                        children: "Supporting Documents",
                      }),
                    ],
                  }),
                }),
                H.jsx("div", {
                  className: "margin-top-1",
                  children: H.jsx("button", {
                    className: "usa-button",
                    title: "Search",
                    type: "button",
                    onClick: we,
                    children: "Search",
                  }),
                }),
                H.jsx("div", {
                  className: "margin-top-1",
                  children: H.jsx("button", {
                    className: "usa-button",
                    type: "button",
                    onClick: Ve,
                    children: "Advanced Search",
                  }),
                }),
                H.jsx("div", {
                  className: "margin-top-1",
                  children: H.jsx("button", {
                    className: "usa-button",
                    type: "button",
                    onClick: at,
                    children: "Export To Excel",
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
      H.jsxs("div", {
        className: "grid-container margin-top-2",
        children: [
          H.jsxs("fieldset", {
            className: "usa-fieldset",
            hidden: Ze,
            children: [
              H.jsx("legend", {
                className: "usa-legend text-bold",
                children: "Advanced Search Options",
              }),
              H.jsx("div", {
                className: "margin-top-1 grid-col-auto",
                children: H.jsx("div", {
                  className: "margin-top-1",
                  children: H.jsx("label", {
                    htmlFor: "perf-date",
                    children: "Performance Period",
                  }),
                }),
              }),
              H.jsxs("div", {
                className: "grid-row grid-gap-1",
                children: [
                  H.jsxs("div", {
                    id: "perf_dt_outer",
                    className: "usa-date-picker usa-date-picker--initialized",
                    "data-min-date": "0000-01-01",
                    children: [
                      H.jsx("input", {
                        className: "usa-input usa-date-picker__internal-input",
                        "aria-labelledby": "perf-date-label",
                        "aria-describedby": "perf-date-hint",
                        "aria-hidden": "true",
                        tabIndex: "-1",
                        style: { display: "none" },
                      }),
                      H.jsxs("div", {
                        className: "usa-date-picker__wrapper",
                        children: [
                          H.jsx("input", {
                            className:
                              "usa-input usa-date-picker__external-input",
                            id: "perf-date",
                            name: "perf-date",
                            "aria-labelledby": "perf-date-label",
                            "aria-describedby": "perf-date-hint",
                            type: "text",
                          }),
                          H.jsx("button", {
                            type: "button",
                            className: "usa-date-picker__button",
                            "aria-haspopup": "true",
                            "aria-label": "Toggle calendar",
                          }),
                          H.jsx("div", {
                            className: "usa-date-picker__calendar",
                            role: "application",
                            hidden: !0,
                          }),
                          H.jsx("div", {
                            className: "usa-sr-only usa-date-picker__status",
                            role: "status",
                            "aria-live": "polite",
                          }),
                        ],
                      }),
                    ],
                  }),
                  H.jsx("div", {
                    children: H.jsxs("select", {
                      className: "usa-select grid-col-auto",
                      title: "Offer Date",
                      id: "input-offer_dt",
                      name: "input-Offer_dt",
                      onChange: (V) => g(V.target.value),
                      defaultValue: v,
                      children: [
                        H.jsx("option", { value: "Any", children: "Any" }),
                        H.jsx("option", { value: "Today", children: "Today" }),
                        H.jsx("option", {
                          value: "Last 30 days",
                          children: "Last 30 days",
                        }),
                        H.jsx("option", {
                          value: "Last 60 Days",
                          children: "Last 60 Days",
                        }),
                        H.jsx("option", {
                          value: "1 Year",
                          children: "1 Year",
                        }),
                      ],
                    }),
                  }),
                  H.jsx("div", {
                    children: H.jsxs("select", {
                      className: "usa-select grid-col-auto",
                      title: "Award Date",
                      id: "input-award_dt",
                      name: "input-award_dt",
                      onChange: (V) => p(V.target.value),
                      defaultValue: m,
                      children: [
                        H.jsx("option", { value: "Any", children: "Any" }),
                        H.jsx("option", { value: "Today", children: "Today" }),
                        H.jsx("option", {
                          value: "Last 30 days",
                          children: "Last 30 days",
                        }),
                        H.jsx("option", {
                          value: "Last 60 Days",
                          children: "Last 60 Days",
                        }),
                        H.jsx("option", {
                          value: "1 Year",
                          children: "1 Year",
                        }),
                      ],
                    }),
                  }),
                  H.jsxs("div", {
                    children: [
                      " ",
                      H.jsxs("select", {
                        className: "usa-select grid-col-auto",
                        title: "Solicitation Method",
                        id: "input-sol_method",
                        name: "input-sol_method",
                        onChange: (V) => le(V.target.value),
                        defaultValue: ae,
                        children: [
                          H.jsx("option", { value: "RFQ", children: "RFQ" }),
                          H.jsx("option", { value: "IFB", children: "IFB" }),
                          H.jsx("option", {
                            value: "Pre-RFP",
                            children: "Pre-RFP",
                          }),
                        ],
                      }),
                    ],
                  }),
                  H.jsxs("div", {
                    "data-testid": "checkbox",
                    className: "usa-checkbox",
                    children: [
                      H.jsx("input", {
                        className: "usa-checkbox__input",
                        id: "active_sol",
                        type: "checkbox",
                        name: "latest-sol",
                        title: "Active Solicitation",
                        onChange: (V) => h(V.target.value),
                      }),
                      H.jsx("label", {
                        className: "usa-checkbox__label",
                        htmlFor: "active_sol",
                        children: "Active Solicitation",
                      }),
                    ],
                  }),
                ],
              }),
              H.jsxs("div", {
                className: "grid-row grid-gap-1",
                children: [
                  H.jsx("div", {
                    children: H.jsx("input", {
                      className: "usa-input grid-col-auto",
                      title: "Package Number",
                      id: "input-pkg_num",
                      name: "input-pkg_num",
                      placeholder: "Package Soliciation Number",
                      type: "text",
                      onChange: (V) => b(V.target.value),
                      defaultValue: S,
                    }),
                  }),
                  H.jsx("div", {
                    children: H.jsxs("select", {
                      className: "usa-select grid-col-auto",
                      title: "Purchasing Group",
                      id: "input-pur_grp",
                      name: "input-pur_grp",
                      onChange: (V) => X(V.target.value),
                      defaultValue: B,
                      children: [
                        H.jsx("option", {
                          value: "pur_grp_1",
                          children: "Purchase Group 1",
                        }),
                        H.jsx("option", {
                          value: "pur_grp_1",
                          children: "Purchase Group 2",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
          H.jsx("div", {
            children: H.jsx("div", {
              children: H.jsx("div", {
                className: "usa-table-container--scrollable",
                children: H.jsxs("table", {
                  className:
                    "usa-table usa-table--striped usa-table--borderless",
                  children: [
                    H.jsx("thead", {
                      children: H.jsx("tr", {
                        children: Ie.map((V, ie) =>
                          H.jsx(
                            "th",
                            {
                              scope: "col",
                              title: V.label,
                              onClick: () => Ge(V),
                              children: H.jsxs("div", {
                                children: [
                                  H.jsx("span", { children: V.label }),
                                  V.key === je.keyToSort &&
                                    V.id !== 7 &&
                                    H.jsx("svg", {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      height: "1em",
                                      viewBox: "0 0 24 24",
                                      width: "1em",
                                      className: "usa-icon usa-icon--size-2",
                                      focusable: "false",
                                      role: "img",
                                      children: H.jsx("path", {
                                        d: "M15.17 15 13 17.17V6.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 11 6.83v10.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15z",
                                      }),
                                    }),
                                ],
                              }),
                            },
                            ie,
                          ),
                        ),
                      }),
                    }),
                    H.jsx("tbody", {
                      children: _t(R).map((V, ie) =>
                        H.jsxs(
                          "tr",
                          {
                            children: [
                              H.jsxs("td", {
                                children: [
                                  H.jsxs("div", {
                                    className: "display-inline-flex",
                                    children: [
                                      H.jsx("a", {
                                        title: V.sol_num,
                                        href:
                                          e.origin +
                                          "/ppp?solicitation=" +
                                          V.sol_num,
                                        children: V.sol_num,
                                      }),
                                      H.jsx("img", {
                                        title: "Copy Solicitation Link",
                                        onClick: async () => {
                                          let fe =
                                            e.origin +
                                            "/ppp?solicitation=" +
                                            V.sol_num;
                                          await navigator.clipboard.writeText(
                                            fe,
                                          );
                                        },
                                        className: "margin-05",
                                        src: "/ppp/img/usa-icons/content_copy.svg",
                                        alt: "Copy Solicitation Link",
                                        width: "15px",
                                        height: "15px",
                                      }),
                                    ],
                                  }),
                                  "  ",
                                ],
                              }),
                              H.jsx("td", {
                                title: V.proc_id,
                                children: V.proc_id,
                              }),
                              H.jsx("td", {
                                title: V.offer_dt,
                                children: V.offer_dt,
                              }),
                              H.jsx("td", {
                                title: V.sol_updt_dt,
                                children: V.sol_updt_dt,
                              }),
                              H.jsx("td", {
                                title: V.mat_grp,
                                children: V.mat_grp,
                              }),
                              H.jsx("td", {
                                title: V.doc_cat,
                                children: V.doc_cat,
                              }),
                              H.jsx("td", {
                                title: "Document Links",
                                children: H.jsx("a", {
                                  className: "usa-button",
                                  "aria-controls": "documents-modal",
                                  "data-open-modal": !0,
                                  role: "button",
                                  id: "documents-modal-button",
                                  onClick: () => {
                                    let fe = V.file_name.items;
                                    re(fe), he(V.sol_num), He(!1);
                                    const Pe =
                                      document.getElementById(
                                        "documents-modal",
                                      );
                                    Pe.className = "usa-modal-wrapper";
                                  },
                                  children: " Document Links",
                                }),
                              }),
                            ],
                          },
                          ie,
                        ),
                      ),
                    }),
                  ],
                }),
              }),
            }),
          }),
        ],
      }),
      H.jsx(h3, {}),
      H.jsx("div", {
        className: "usa-modal-wrapper is-hidden",
        role: "dialog",
        id: "documents-modal",
        "aria-labelledby": "documents-modal-heading",
        "aria-describedby": "documents-modal-description",
        "data-opener": "documents-modal-button",
        children: H.jsx("div", {
          className: "usa-modal-overlay",
          "aria-controls": "documents-modal",
          children: H.jsx("div", {
            className: "usa-modal usa-modal--lg",
            tabIndex: "-1",
            children: H.jsx("div", {
              className: "usa-modal__content",
              children: H.jsxs("div", {
                className: "usa-modal__main",
                children: [
                  H.jsxs("h2", {
                    className: "usa-modal__heading",
                    id: "documents-modal-heading",
                    children: [
                      H.jsx("a", {
                        id: "are-you-sure-you-want-to-continue-2",
                        className: "usa-anchor",
                      }),
                      "Solication ",
                      Se,
                      " Documents",
                    ],
                  }),
                  H.jsx("div", {
                    className: "usa-prose",
                    children: H.jsx("ul", {
                      id: "documents-modal-description",
                      className: "usa-list usa-list--unstyled",
                      children: z.map((V) =>
                        H.jsxs(
                          "li",
                          {
                            children: [
                              H.jsx("img", {
                                title: "Copy Document Link",
                                onClick: async () => {
                                  await navigator.clipboard.writeText(V.url);
                                },
                                className: "margin-05",
                                src: "/ppp/img/usa-icons/content_copy.svg",
                                alt: "Copy Solicitation Link",
                                width: "15px",
                                height: "15px",
                              }),
                              H.jsx("a", {
                                target: "_blank",
                                href: V.url,
                                children: V.name,
                              }),
                            ],
                          },
                          V.name,
                        ),
                      ),
                    }),
                  }),
                  H.jsx("div", {
                    className: "usa-modal__footer",
                    children: H.jsxs("ul", {
                      className: "usa-button-group",
                      children: [
                        H.jsx("li", {
                          className: "usa-button-group__item",
                          children: H.jsx("button", {
                            type: "button",
                            className: "usa-button",
                            "data-close-modal": "",
                            onClick: _e,
                            children: ve ? "Copied!" : "Copy Solicitation Link",
                          }),
                        }),
                        H.jsx("li", {
                          className: "usa-button-group__item",
                          children: H.jsx("button", {
                            type: "button",
                            className:
                              "usa-button usa-button--unstyled padding-105 text-center",
                            "data-close-modal": !0,
                            onClick: () => {
                              const V =
                                document.getElementById("documents-modal");
                              V.className = "usa-modal-wrapper is-hidden";
                            },
                            children: "Go back",
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          }),
        }),
      }),
    ],
  });
}
let $f = location.hostname;
console.log($f);
let Hf = "";
($f.includes("localhost") || $f.includes("wbscmsbx")) &&
  (Hf = "wbscm-app-devdsl-ppp-external");
const UD = LD([
  {
    path: "/",
    element: H.jsx(_l, {}),
    loader: qp,
    children: [{ path: "/:solicitation", element: H.jsx(_l, {}) }],
  },
  {
    path: "/" + Hf + "/ppp",
    element: H.jsx(_l, {}),
    loader: qp,
    children: [
      { path: "/" + Hf + "/ppp:solicitation", element: H.jsx(_l, {}) },
    ],
  },
]);
pv(document.getElementById("root")).render(H.jsx(bD, { router: UD }));
