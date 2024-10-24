import { css as po, LitElement as mo, html as gt } from "lit";
import { property as Et, customElement as go, state as Lr } from "lit/decorators.js";
import { classMap as wn } from "lit/directives/class-map.js";
import { styleMap as xf } from "lit/directives/style-map.js";
const Ef = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20%3e%3cpath%20d='M12.0001%204.83594L5.79297%2011.043L7.20718%2012.4573L12.0001%207.66436L16.793%2012.4573L18.2072%2011.043L12.0001%204.83594ZM12.0001%2010.4858L5.79297%2016.6929L7.20718%2018.1072L12.0001%2013.3143L16.793%2018.1072L18.2072%2016.6929L12.0001%2010.4858Z'%20fill='black'%20/%3e%3c/svg%3e";
function Ka(t, e) {
  return function() {
    return t.apply(e, arguments);
  };
}
const { toString: Tf } = Object.prototype, { getPrototypeOf: yo } = Object, zi = /* @__PURE__ */ ((t) => (e) => {
  const r = Tf.call(e);
  return t[r] || (t[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Gt = (t) => (t = t.toLowerCase(), (e) => zi(e) === t), Di = (t) => (e) => typeof e === t, { isArray: sn } = Array, Tn = Di("undefined");
function Af(t) {
  return t !== null && !Tn(t) && t.constructor !== null && !Tn(t.constructor) && At(t.constructor.isBuffer) && t.constructor.isBuffer(t);
}
const Xa = Gt("ArrayBuffer");
function Sf(t) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && Xa(t.buffer), e;
}
const Bf = Di("string"), At = Di("function"), Ja = Di("number"), Wi = (t) => t !== null && typeof t == "object", vf = (t) => t === !0 || t === !1, ui = (t) => {
  if (zi(t) !== "object")
    return !1;
  const e = yo(t);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t);
}, Nf = Gt("Date"), Rf = Gt("File"), Of = Gt("Blob"), If = Gt("FileList"), Uf = (t) => Wi(t) && At(t.pipe), Ff = (t) => {
  let e;
  return t && (typeof FormData == "function" && t instanceof FormData || At(t.append) && ((e = zi(t)) === "formdata" || // detect form-data instance
  e === "object" && At(t.toString) && t.toString() === "[object FormData]"));
}, Pf = Gt("URLSearchParams"), [Cf, Mf, kf, $f] = ["ReadableStream", "Request", "Response", "Headers"].map(Gt), Hf = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Nn(t, e, { allOwnKeys: r = !1 } = {}) {
  if (t === null || typeof t > "u")
    return;
  let n, i;
  if (typeof t != "object" && (t = [t]), sn(t))
    for (n = 0, i = t.length; n < i; n++)
      e.call(null, t[n], n, t);
  else {
    const s = r ? Object.getOwnPropertyNames(t) : Object.keys(t), c = s.length;
    let a;
    for (n = 0; n < c; n++)
      a = s[n], e.call(null, t[a], a, t);
  }
}
function Qa(t, e) {
  e = e.toLowerCase();
  const r = Object.keys(t);
  let n = r.length, i;
  for (; n-- > 0; )
    if (i = r[n], e === i.toLowerCase())
      return i;
  return null;
}
const Ir = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, ec = (t) => !Tn(t) && t !== Ir;
function $s() {
  const { caseless: t } = ec(this) && this || {}, e = {}, r = (n, i) => {
    const s = t && Qa(e, i) || i;
    ui(e[s]) && ui(n) ? e[s] = $s(e[s], n) : ui(n) ? e[s] = $s({}, n) : sn(n) ? e[s] = n.slice() : e[s] = n;
  };
  for (let n = 0, i = arguments.length; n < i; n++)
    arguments[n] && Nn(arguments[n], r);
  return e;
}
const qf = (t, e, r, { allOwnKeys: n } = {}) => (Nn(e, (i, s) => {
  r && At(i) ? t[s] = Ka(i, r) : t[s] = i;
}, { allOwnKeys: n }), t), Lf = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t), Vf = (t, e, r, n) => {
  t.prototype = Object.create(e.prototype, n), t.prototype.constructor = t, Object.defineProperty(t, "super", {
    value: e.prototype
  }), r && Object.assign(t.prototype, r);
}, Gf = (t, e, r, n) => {
  let i, s, c;
  const a = {};
  if (e = e || {}, t == null) return e;
  do {
    for (i = Object.getOwnPropertyNames(t), s = i.length; s-- > 0; )
      c = i[s], (!n || n(c, t, e)) && !a[c] && (e[c] = t[c], a[c] = !0);
    t = r !== !1 && yo(t);
  } while (t && (!r || r(t, e)) && t !== Object.prototype);
  return e;
}, jf = (t, e, r) => {
  t = String(t), (r === void 0 || r > t.length) && (r = t.length), r -= e.length;
  const n = t.indexOf(e, r);
  return n !== -1 && n === r;
}, zf = (t) => {
  if (!t) return null;
  if (sn(t)) return t;
  let e = t.length;
  if (!Ja(e)) return null;
  const r = new Array(e);
  for (; e-- > 0; )
    r[e] = t[e];
  return r;
}, Df = /* @__PURE__ */ ((t) => (e) => t && e instanceof t)(typeof Uint8Array < "u" && yo(Uint8Array)), Wf = (t, e) => {
  const n = (t && t[Symbol.iterator]).call(t);
  let i;
  for (; (i = n.next()) && !i.done; ) {
    const s = i.value;
    e.call(t, s[0], s[1]);
  }
}, Yf = (t, e) => {
  let r;
  const n = [];
  for (; (r = t.exec(e)) !== null; )
    n.push(r);
  return n;
}, Zf = Gt("HTMLFormElement"), Kf = (t) => t.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, i) {
    return n.toUpperCase() + i;
  }
), qo = (({ hasOwnProperty: t }) => (e, r) => t.call(e, r))(Object.prototype), Xf = Gt("RegExp"), tc = (t, e) => {
  const r = Object.getOwnPropertyDescriptors(t), n = {};
  Nn(r, (i, s) => {
    let c;
    (c = e(i, s, t)) !== !1 && (n[s] = c || i);
  }), Object.defineProperties(t, n);
}, Jf = (t) => {
  tc(t, (e, r) => {
    if (At(t) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = t[r];
    if (At(n)) {
      if (e.enumerable = !1, "writable" in e) {
        e.writable = !1;
        return;
      }
      e.set || (e.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, Qf = (t, e) => {
  const r = {}, n = (i) => {
    i.forEach((s) => {
      r[s] = !0;
    });
  };
  return sn(t) ? n(t) : n(String(t).split(e)), r;
}, el = () => {
}, tl = (t, e) => t != null && Number.isFinite(t = +t) ? t : e, ms = "abcdefghijklmnopqrstuvwxyz", Lo = "0123456789", rc = {
  DIGIT: Lo,
  ALPHA: ms,
  ALPHA_DIGIT: ms + ms.toUpperCase() + Lo
}, rl = (t = 16, e = rc.ALPHA_DIGIT) => {
  let r = "";
  const { length: n } = e;
  for (; t--; )
    r += e[Math.random() * n | 0];
  return r;
};
function nl(t) {
  return !!(t && At(t.append) && t[Symbol.toStringTag] === "FormData" && t[Symbol.iterator]);
}
const il = (t) => {
  const e = new Array(10), r = (n, i) => {
    if (Wi(n)) {
      if (e.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        e[i] = n;
        const s = sn(n) ? [] : {};
        return Nn(n, (c, a) => {
          const p = r(c, i + 1);
          !Tn(p) && (s[a] = p);
        }), e[i] = void 0, s;
      }
    }
    return n;
  };
  return r(t, 0);
}, sl = Gt("AsyncFunction"), ol = (t) => t && (Wi(t) || At(t)) && At(t.then) && At(t.catch), nc = ((t, e) => t ? setImmediate : e ? ((r, n) => (Ir.addEventListener("message", ({ source: i, data: s }) => {
  i === Ir && s === r && n.length && n.shift()();
}, !1), (i) => {
  n.push(i), Ir.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(
  typeof setImmediate == "function",
  At(Ir.postMessage)
), al = typeof queueMicrotask < "u" ? queueMicrotask.bind(Ir) : typeof process < "u" && process.nextTick || nc, X = {
  isArray: sn,
  isArrayBuffer: Xa,
  isBuffer: Af,
  isFormData: Ff,
  isArrayBufferView: Sf,
  isString: Bf,
  isNumber: Ja,
  isBoolean: vf,
  isObject: Wi,
  isPlainObject: ui,
  isReadableStream: Cf,
  isRequest: Mf,
  isResponse: kf,
  isHeaders: $f,
  isUndefined: Tn,
  isDate: Nf,
  isFile: Rf,
  isBlob: Of,
  isRegExp: Xf,
  isFunction: At,
  isStream: Uf,
  isURLSearchParams: Pf,
  isTypedArray: Df,
  isFileList: If,
  forEach: Nn,
  merge: $s,
  extend: qf,
  trim: Hf,
  stripBOM: Lf,
  inherits: Vf,
  toFlatObject: Gf,
  kindOf: zi,
  kindOfTest: Gt,
  endsWith: jf,
  toArray: zf,
  forEachEntry: Wf,
  matchAll: Yf,
  isHTMLForm: Zf,
  hasOwnProperty: qo,
  hasOwnProp: qo,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: tc,
  freezeMethods: Jf,
  toObjectSet: Qf,
  toCamelCase: Kf,
  noop: el,
  toFiniteNumber: tl,
  findKey: Qa,
  global: Ir,
  isContextDefined: ec,
  ALPHABET: rc,
  generateString: rl,
  isSpecCompliantForm: nl,
  toJSONObject: il,
  isAsyncFn: sl,
  isThenable: ol,
  setImmediate: nc,
  asap: al
};
function Ie(t, e, r, n, i) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = t, this.name = "AxiosError", e && (this.code = e), r && (this.config = r), n && (this.request = n), i && (this.response = i, this.status = i.status ? i.status : null);
}
X.inherits(Ie, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: X.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const ic = Ie.prototype, sc = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((t) => {
  sc[t] = { value: t };
});
Object.defineProperties(Ie, sc);
Object.defineProperty(ic, "isAxiosError", { value: !0 });
Ie.from = (t, e, r, n, i, s) => {
  const c = Object.create(ic);
  return X.toFlatObject(t, c, function(p) {
    return p !== Error.prototype;
  }, (a) => a !== "isAxiosError"), Ie.call(c, t.message, e, r, n, i), c.cause = t, c.name = t.name, s && Object.assign(c, s), c;
};
const cl = null;
function Hs(t) {
  return X.isPlainObject(t) || X.isArray(t);
}
function oc(t) {
  return X.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function Vo(t, e, r) {
  return t ? t.concat(e).map(function(i, s) {
    return i = oc(i), !r && s ? "[" + i + "]" : i;
  }).join(r ? "." : "") : e;
}
function ul(t) {
  return X.isArray(t) && !t.some(Hs);
}
const fl = X.toFlatObject(X, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function Yi(t, e, r) {
  if (!X.isObject(t))
    throw new TypeError("target must be an object");
  e = e || new FormData(), r = X.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(I, U) {
    return !X.isUndefined(U[I]);
  });
  const n = r.metaTokens, i = r.visitor || b, s = r.dots, c = r.indexes, p = (r.Blob || typeof Blob < "u" && Blob) && X.isSpecCompliantForm(e);
  if (!X.isFunction(i))
    throw new TypeError("visitor must be a function");
  function g(m) {
    if (m === null) return "";
    if (X.isDate(m))
      return m.toISOString();
    if (!p && X.isBlob(m))
      throw new Ie("Blob is not supported. Use a Buffer instead.");
    return X.isArrayBuffer(m) || X.isTypedArray(m) ? p && typeof Blob == "function" ? new Blob([m]) : Buffer.from(m) : m;
  }
  function b(m, I, U) {
    let V = m;
    if (m && !U && typeof m == "object") {
      if (X.endsWith(I, "{}"))
        I = n ? I : I.slice(0, -2), m = JSON.stringify(m);
      else if (X.isArray(m) && ul(m) || (X.isFileList(m) || X.endsWith(I, "[]")) && (V = X.toArray(m)))
        return I = oc(I), V.forEach(function(q, ee) {
          !(X.isUndefined(q) || q === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            c === !0 ? Vo([I], ee, s) : c === null ? I : I + "[]",
            g(q)
          );
        }), !1;
    }
    return Hs(m) ? !0 : (e.append(Vo(U, I, s), g(m)), !1);
  }
  const T = [], O = Object.assign(fl, {
    defaultVisitor: b,
    convertValue: g,
    isVisitable: Hs
  });
  function B(m, I) {
    if (!X.isUndefined(m)) {
      if (T.indexOf(m) !== -1)
        throw Error("Circular reference detected in " + I.join("."));
      T.push(m), X.forEach(m, function(V, j) {
        (!(X.isUndefined(V) || V === null) && i.call(
          e,
          V,
          X.isString(j) ? j.trim() : j,
          I,
          O
        )) === !0 && B(V, I ? I.concat(j) : [j]);
      }), T.pop();
    }
  }
  if (!X.isObject(t))
    throw new TypeError("data must be an object");
  return B(t), e;
}
function Go(t) {
  const e = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function(n) {
    return e[n];
  });
}
function wo(t, e) {
  this._pairs = [], t && Yi(t, this, e);
}
const ac = wo.prototype;
ac.append = function(e, r) {
  this._pairs.push([e, r]);
};
ac.toString = function(e) {
  const r = e ? function(n) {
    return e.call(this, n, Go);
  } : Go;
  return this._pairs.map(function(i) {
    return r(i[0]) + "=" + r(i[1]);
  }, "").join("&");
};
function ll(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function cc(t, e, r) {
  if (!e)
    return t;
  const n = r && r.encode || ll, i = r && r.serialize;
  let s;
  if (i ? s = i(e, r) : s = X.isURLSearchParams(e) ? e.toString() : new wo(e, r).toString(n), s) {
    const c = t.indexOf("#");
    c !== -1 && (t = t.slice(0, c)), t += (t.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return t;
}
class jo {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(e, r, n) {
    return this.handlers.push({
      fulfilled: e,
      rejected: r,
      synchronous: n ? n.synchronous : !1,
      runWhen: n ? n.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(e) {
    this.handlers[e] && (this.handlers[e] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(e) {
    X.forEach(this.handlers, function(n) {
      n !== null && e(n);
    });
  }
}
const uc = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, hl = typeof URLSearchParams < "u" ? URLSearchParams : wo, dl = typeof FormData < "u" ? FormData : null, pl = typeof Blob < "u" ? Blob : null, ml = {
  isBrowser: !0,
  classes: {
    URLSearchParams: hl,
    FormData: dl,
    Blob: pl
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, bo = typeof window < "u" && typeof document < "u", qs = typeof navigator == "object" && navigator || void 0, gl = bo && (!qs || ["ReactNative", "NativeScript", "NS"].indexOf(qs.product) < 0), yl = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", wl = bo && window.location.href || "http://localhost", bl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: bo,
  hasStandardBrowserEnv: gl,
  hasStandardBrowserWebWorkerEnv: yl,
  navigator: qs,
  origin: wl
}, Symbol.toStringTag, { value: "Module" })), bt = {
  ...bl,
  ...ml
};
function _l(t, e) {
  return Yi(t, new bt.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, i, s) {
      return bt.isNode && X.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments);
    }
  }, e));
}
function xl(t) {
  return X.matchAll(/\w+|\[(\w*)]/g, t).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function El(t) {
  const e = {}, r = Object.keys(t);
  let n;
  const i = r.length;
  let s;
  for (n = 0; n < i; n++)
    s = r[n], e[s] = t[s];
  return e;
}
function fc(t) {
  function e(r, n, i, s) {
    let c = r[s++];
    if (c === "__proto__") return !0;
    const a = Number.isFinite(+c), p = s >= r.length;
    return c = !c && X.isArray(i) ? i.length : c, p ? (X.hasOwnProp(i, c) ? i[c] = [i[c], n] : i[c] = n, !a) : ((!i[c] || !X.isObject(i[c])) && (i[c] = []), e(r, n, i[c], s) && X.isArray(i[c]) && (i[c] = El(i[c])), !a);
  }
  if (X.isFormData(t) && X.isFunction(t.entries)) {
    const r = {};
    return X.forEachEntry(t, (n, i) => {
      e(xl(n), i, r, 0);
    }), r;
  }
  return null;
}
function Tl(t, e, r) {
  if (X.isString(t))
    try {
      return (e || JSON.parse)(t), X.trim(t);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (0, JSON.stringify)(t);
}
const Rn = {
  transitional: uc,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(e, r) {
    const n = r.getContentType() || "", i = n.indexOf("application/json") > -1, s = X.isObject(e);
    if (s && X.isHTMLForm(e) && (e = new FormData(e)), X.isFormData(e))
      return i ? JSON.stringify(fc(e)) : e;
    if (X.isArrayBuffer(e) || X.isBuffer(e) || X.isStream(e) || X.isFile(e) || X.isBlob(e) || X.isReadableStream(e))
      return e;
    if (X.isArrayBufferView(e))
      return e.buffer;
    if (X.isURLSearchParams(e))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let a;
    if (s) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return _l(e, this.formSerializer).toString();
      if ((a = X.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
        const p = this.env && this.env.FormData;
        return Yi(
          a ? { "files[]": e } : e,
          p && new p(),
          this.formSerializer
        );
      }
    }
    return s || i ? (r.setContentType("application/json", !1), Tl(e)) : e;
  }],
  transformResponse: [function(e) {
    const r = this.transitional || Rn.transitional, n = r && r.forcedJSONParsing, i = this.responseType === "json";
    if (X.isResponse(e) || X.isReadableStream(e))
      return e;
    if (e && X.isString(e) && (n && !this.responseType || i)) {
      const c = !(r && r.silentJSONParsing) && i;
      try {
        return JSON.parse(e);
      } catch (a) {
        if (c)
          throw a.name === "SyntaxError" ? Ie.from(a, Ie.ERR_BAD_RESPONSE, this, null, this.response) : a;
      }
    }
    return e;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: bt.classes.FormData,
    Blob: bt.classes.Blob
  },
  validateStatus: function(e) {
    return e >= 200 && e < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
X.forEach(["delete", "get", "head", "post", "put", "patch"], (t) => {
  Rn.headers[t] = {};
});
const Al = X.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), Sl = (t) => {
  const e = {};
  let r, n, i;
  return t && t.split(`
`).forEach(function(c) {
    i = c.indexOf(":"), r = c.substring(0, i).trim().toLowerCase(), n = c.substring(i + 1).trim(), !(!r || e[r] && Al[r]) && (r === "set-cookie" ? e[r] ? e[r].push(n) : e[r] = [n] : e[r] = e[r] ? e[r] + ", " + n : n);
  }), e;
}, zo = Symbol("internals");
function un(t) {
  return t && String(t).trim().toLowerCase();
}
function fi(t) {
  return t === !1 || t == null ? t : X.isArray(t) ? t.map(fi) : String(t);
}
function Bl(t) {
  const e = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(t); )
    e[n[1]] = n[2];
  return e;
}
const vl = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function gs(t, e, r, n, i) {
  if (X.isFunction(n))
    return n.call(this, e, r);
  if (i && (e = r), !!X.isString(e)) {
    if (X.isString(n))
      return e.indexOf(n) !== -1;
    if (X.isRegExp(n))
      return n.test(e);
  }
}
function Nl(t) {
  return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, r, n) => r.toUpperCase() + n);
}
function Rl(t, e) {
  const r = X.toCamelCase(" " + e);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(t, n + r, {
      value: function(i, s, c) {
        return this[n].call(this, e, i, s, c);
      },
      configurable: !0
    });
  });
}
class _t {
  constructor(e) {
    e && this.set(e);
  }
  set(e, r, n) {
    const i = this;
    function s(a, p, g) {
      const b = un(p);
      if (!b)
        throw new Error("header name must be a non-empty string");
      const T = X.findKey(i, b);
      (!T || i[T] === void 0 || g === !0 || g === void 0 && i[T] !== !1) && (i[T || p] = fi(a));
    }
    const c = (a, p) => X.forEach(a, (g, b) => s(g, b, p));
    if (X.isPlainObject(e) || e instanceof this.constructor)
      c(e, r);
    else if (X.isString(e) && (e = e.trim()) && !vl(e))
      c(Sl(e), r);
    else if (X.isHeaders(e))
      for (const [a, p] of e.entries())
        s(p, a, n);
    else
      e != null && s(r, e, n);
    return this;
  }
  get(e, r) {
    if (e = un(e), e) {
      const n = X.findKey(this, e);
      if (n) {
        const i = this[n];
        if (!r)
          return i;
        if (r === !0)
          return Bl(i);
        if (X.isFunction(r))
          return r.call(this, i, n);
        if (X.isRegExp(r))
          return r.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, r) {
    if (e = un(e), e) {
      const n = X.findKey(this, e);
      return !!(n && this[n] !== void 0 && (!r || gs(this, this[n], n, r)));
    }
    return !1;
  }
  delete(e, r) {
    const n = this;
    let i = !1;
    function s(c) {
      if (c = un(c), c) {
        const a = X.findKey(n, c);
        a && (!r || gs(n, n[a], a, r)) && (delete n[a], i = !0);
      }
    }
    return X.isArray(e) ? e.forEach(s) : s(e), i;
  }
  clear(e) {
    const r = Object.keys(this);
    let n = r.length, i = !1;
    for (; n--; ) {
      const s = r[n];
      (!e || gs(this, this[s], s, e, !0)) && (delete this[s], i = !0);
    }
    return i;
  }
  normalize(e) {
    const r = this, n = {};
    return X.forEach(this, (i, s) => {
      const c = X.findKey(n, s);
      if (c) {
        r[c] = fi(i), delete r[s];
        return;
      }
      const a = e ? Nl(s) : String(s).trim();
      a !== s && delete r[s], r[a] = fi(i), n[a] = !0;
    }), this;
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const r = /* @__PURE__ */ Object.create(null);
    return X.forEach(this, (n, i) => {
      n != null && n !== !1 && (r[i] = e && X.isArray(n) ? n.join(", ") : n);
    }), r;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([e, r]) => e + ": " + r).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(e) {
    return e instanceof this ? e : new this(e);
  }
  static concat(e, ...r) {
    const n = new this(e);
    return r.forEach((i) => n.set(i)), n;
  }
  static accessor(e) {
    const n = (this[zo] = this[zo] = {
      accessors: {}
    }).accessors, i = this.prototype;
    function s(c) {
      const a = un(c);
      n[a] || (Rl(i, c), n[a] = !0);
    }
    return X.isArray(e) ? e.forEach(s) : s(e), this;
  }
}
_t.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
X.reduceDescriptors(_t.prototype, ({ value: t }, e) => {
  let r = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => t,
    set(n) {
      this[r] = n;
    }
  };
});
X.freezeMethods(_t);
function ys(t, e) {
  const r = this || Rn, n = e || r, i = _t.from(n.headers);
  let s = n.data;
  return X.forEach(t, function(a) {
    s = a.call(r, s, i.normalize(), e ? e.status : void 0);
  }), i.normalize(), s;
}
function lc(t) {
  return !!(t && t.__CANCEL__);
}
function on(t, e, r) {
  Ie.call(this, t ?? "canceled", Ie.ERR_CANCELED, e, r), this.name = "CanceledError";
}
X.inherits(on, Ie, {
  __CANCEL__: !0
});
function hc(t, e, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? t(r) : e(new Ie(
    "Request failed with status code " + r.status,
    [Ie.ERR_BAD_REQUEST, Ie.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
function Ol(t) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return e && e[1] || "";
}
function Il(t, e) {
  t = t || 10;
  const r = new Array(t), n = new Array(t);
  let i = 0, s = 0, c;
  return e = e !== void 0 ? e : 1e3, function(p) {
    const g = Date.now(), b = n[s];
    c || (c = g), r[i] = p, n[i] = g;
    let T = s, O = 0;
    for (; T !== i; )
      O += r[T++], T = T % t;
    if (i = (i + 1) % t, i === s && (s = (s + 1) % t), g - c < e)
      return;
    const B = b && g - b;
    return B ? Math.round(O * 1e3 / B) : void 0;
  };
}
function Ul(t, e) {
  let r = 0, n = 1e3 / e, i, s;
  const c = (g, b = Date.now()) => {
    r = b, i = null, s && (clearTimeout(s), s = null), t.apply(null, g);
  };
  return [(...g) => {
    const b = Date.now(), T = b - r;
    T >= n ? c(g, b) : (i = g, s || (s = setTimeout(() => {
      s = null, c(i);
    }, n - T)));
  }, () => i && c(i)];
}
const Pi = (t, e, r = 3) => {
  let n = 0;
  const i = Il(50, 250);
  return Ul((s) => {
    const c = s.loaded, a = s.lengthComputable ? s.total : void 0, p = c - n, g = i(p), b = c <= a;
    n = c;
    const T = {
      loaded: c,
      total: a,
      progress: a ? c / a : void 0,
      bytes: p,
      rate: g || void 0,
      estimated: g && a && b ? (a - c) / g : void 0,
      event: s,
      lengthComputable: a != null,
      [e ? "download" : "upload"]: !0
    };
    t(T);
  }, r);
}, Do = (t, e) => {
  const r = t != null;
  return [(n) => e[0]({
    lengthComputable: r,
    total: t,
    loaded: n
  }), e[1]];
}, Wo = (t) => (...e) => X.asap(() => t(...e)), Fl = bt.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const e = bt.navigator && /(msie|trident)/i.test(bt.navigator.userAgent), r = document.createElement("a");
    let n;
    function i(s) {
      let c = s;
      return e && (r.setAttribute("href", c), c = r.href), r.setAttribute("href", c), {
        href: r.href,
        protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
        host: r.host,
        search: r.search ? r.search.replace(/^\?/, "") : "",
        hash: r.hash ? r.hash.replace(/^#/, "") : "",
        hostname: r.hostname,
        port: r.port,
        pathname: r.pathname.charAt(0) === "/" ? r.pathname : "/" + r.pathname
      };
    }
    return n = i(window.location.href), function(c) {
      const a = X.isString(c) ? i(c) : c;
      return a.protocol === n.protocol && a.host === n.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  /* @__PURE__ */ function() {
    return function() {
      return !0;
    };
  }()
), Pl = bt.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(t, e, r, n, i, s) {
      const c = [t + "=" + encodeURIComponent(e)];
      X.isNumber(r) && c.push("expires=" + new Date(r).toGMTString()), X.isString(n) && c.push("path=" + n), X.isString(i) && c.push("domain=" + i), s === !0 && c.push("secure"), document.cookie = c.join("; ");
    },
    read(t) {
      const e = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
      return e ? decodeURIComponent(e[3]) : null;
    },
    remove(t) {
      this.write(t, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function Cl(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function Ml(t, e) {
  return e ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : t;
}
function dc(t, e) {
  return t && !Cl(e) ? Ml(t, e) : e;
}
const Yo = (t) => t instanceof _t ? { ...t } : t;
function Cr(t, e) {
  e = e || {};
  const r = {};
  function n(g, b, T) {
    return X.isPlainObject(g) && X.isPlainObject(b) ? X.merge.call({ caseless: T }, g, b) : X.isPlainObject(b) ? X.merge({}, b) : X.isArray(b) ? b.slice() : b;
  }
  function i(g, b, T) {
    if (X.isUndefined(b)) {
      if (!X.isUndefined(g))
        return n(void 0, g, T);
    } else return n(g, b, T);
  }
  function s(g, b) {
    if (!X.isUndefined(b))
      return n(void 0, b);
  }
  function c(g, b) {
    if (X.isUndefined(b)) {
      if (!X.isUndefined(g))
        return n(void 0, g);
    } else return n(void 0, b);
  }
  function a(g, b, T) {
    if (T in e)
      return n(g, b);
    if (T in t)
      return n(void 0, g);
  }
  const p = {
    url: s,
    method: s,
    data: s,
    baseURL: c,
    transformRequest: c,
    transformResponse: c,
    paramsSerializer: c,
    timeout: c,
    timeoutMessage: c,
    withCredentials: c,
    withXSRFToken: c,
    adapter: c,
    responseType: c,
    xsrfCookieName: c,
    xsrfHeaderName: c,
    onUploadProgress: c,
    onDownloadProgress: c,
    decompress: c,
    maxContentLength: c,
    maxBodyLength: c,
    beforeRedirect: c,
    transport: c,
    httpAgent: c,
    httpsAgent: c,
    cancelToken: c,
    socketPath: c,
    responseEncoding: c,
    validateStatus: a,
    headers: (g, b) => i(Yo(g), Yo(b), !0)
  };
  return X.forEach(Object.keys(Object.assign({}, t, e)), function(b) {
    const T = p[b] || i, O = T(t[b], e[b], b);
    X.isUndefined(O) && T !== a || (r[b] = O);
  }), r;
}
const pc = (t) => {
  const e = Cr({}, t);
  let { data: r, withXSRFToken: n, xsrfHeaderName: i, xsrfCookieName: s, headers: c, auth: a } = e;
  e.headers = c = _t.from(c), e.url = cc(dc(e.baseURL, e.url), t.params, t.paramsSerializer), a && c.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  );
  let p;
  if (X.isFormData(r)) {
    if (bt.hasStandardBrowserEnv || bt.hasStandardBrowserWebWorkerEnv)
      c.setContentType(void 0);
    else if ((p = c.getContentType()) !== !1) {
      const [g, ...b] = p ? p.split(";").map((T) => T.trim()).filter(Boolean) : [];
      c.setContentType([g || "multipart/form-data", ...b].join("; "));
    }
  }
  if (bt.hasStandardBrowserEnv && (n && X.isFunction(n) && (n = n(e)), n || n !== !1 && Fl(e.url))) {
    const g = i && s && Pl.read(s);
    g && c.set(i, g);
  }
  return e;
}, kl = typeof XMLHttpRequest < "u", $l = kl && function(t) {
  return new Promise(function(r, n) {
    const i = pc(t);
    let s = i.data;
    const c = _t.from(i.headers).normalize();
    let { responseType: a, onUploadProgress: p, onDownloadProgress: g } = i, b, T, O, B, m;
    function I() {
      B && B(), m && m(), i.cancelToken && i.cancelToken.unsubscribe(b), i.signal && i.signal.removeEventListener("abort", b);
    }
    let U = new XMLHttpRequest();
    U.open(i.method.toUpperCase(), i.url, !0), U.timeout = i.timeout;
    function V() {
      if (!U)
        return;
      const q = _t.from(
        "getAllResponseHeaders" in U && U.getAllResponseHeaders()
      ), k = {
        data: !a || a === "text" || a === "json" ? U.responseText : U.response,
        status: U.status,
        statusText: U.statusText,
        headers: q,
        config: t,
        request: U
      };
      hc(function(K) {
        r(K), I();
      }, function(K) {
        n(K), I();
      }, k), U = null;
    }
    "onloadend" in U ? U.onloadend = V : U.onreadystatechange = function() {
      !U || U.readyState !== 4 || U.status === 0 && !(U.responseURL && U.responseURL.indexOf("file:") === 0) || setTimeout(V);
    }, U.onabort = function() {
      U && (n(new Ie("Request aborted", Ie.ECONNABORTED, t, U)), U = null);
    }, U.onerror = function() {
      n(new Ie("Network Error", Ie.ERR_NETWORK, t, U)), U = null;
    }, U.ontimeout = function() {
      let ee = i.timeout ? "timeout of " + i.timeout + "ms exceeded" : "timeout exceeded";
      const k = i.transitional || uc;
      i.timeoutErrorMessage && (ee = i.timeoutErrorMessage), n(new Ie(
        ee,
        k.clarifyTimeoutError ? Ie.ETIMEDOUT : Ie.ECONNABORTED,
        t,
        U
      )), U = null;
    }, s === void 0 && c.setContentType(null), "setRequestHeader" in U && X.forEach(c.toJSON(), function(ee, k) {
      U.setRequestHeader(k, ee);
    }), X.isUndefined(i.withCredentials) || (U.withCredentials = !!i.withCredentials), a && a !== "json" && (U.responseType = i.responseType), g && ([O, m] = Pi(g, !0), U.addEventListener("progress", O)), p && U.upload && ([T, B] = Pi(p), U.upload.addEventListener("progress", T), U.upload.addEventListener("loadend", B)), (i.cancelToken || i.signal) && (b = (q) => {
      U && (n(!q || q.type ? new on(null, t, U) : q), U.abort(), U = null);
    }, i.cancelToken && i.cancelToken.subscribe(b), i.signal && (i.signal.aborted ? b() : i.signal.addEventListener("abort", b)));
    const j = Ol(i.url);
    if (j && bt.protocols.indexOf(j) === -1) {
      n(new Ie("Unsupported protocol " + j + ":", Ie.ERR_BAD_REQUEST, t));
      return;
    }
    U.send(s || null);
  });
}, Hl = (t, e) => {
  const { length: r } = t = t ? t.filter(Boolean) : [];
  if (e || r) {
    let n = new AbortController(), i;
    const s = function(g) {
      if (!i) {
        i = !0, a();
        const b = g instanceof Error ? g : this.reason;
        n.abort(b instanceof Ie ? b : new on(b instanceof Error ? b.message : b));
      }
    };
    let c = e && setTimeout(() => {
      c = null, s(new Ie(`timeout ${e} of ms exceeded`, Ie.ETIMEDOUT));
    }, e);
    const a = () => {
      t && (c && clearTimeout(c), c = null, t.forEach((g) => {
        g.unsubscribe ? g.unsubscribe(s) : g.removeEventListener("abort", s);
      }), t = null);
    };
    t.forEach((g) => g.addEventListener("abort", s));
    const { signal: p } = n;
    return p.unsubscribe = () => X.asap(a), p;
  }
}, ql = function* (t, e) {
  let r = t.byteLength;
  if (r < e) {
    yield t;
    return;
  }
  let n = 0, i;
  for (; n < r; )
    i = n + e, yield t.slice(n, i), n = i;
}, Ll = async function* (t, e) {
  for await (const r of Vl(t))
    yield* ql(r, e);
}, Vl = async function* (t) {
  if (t[Symbol.asyncIterator]) {
    yield* t;
    return;
  }
  const e = t.getReader();
  try {
    for (; ; ) {
      const { done: r, value: n } = await e.read();
      if (r)
        break;
      yield n;
    }
  } finally {
    await e.cancel();
  }
}, Zo = (t, e, r, n) => {
  const i = Ll(t, e);
  let s = 0, c, a = (p) => {
    c || (c = !0, n && n(p));
  };
  return new ReadableStream({
    async pull(p) {
      try {
        const { done: g, value: b } = await i.next();
        if (g) {
          a(), p.close();
          return;
        }
        let T = b.byteLength;
        if (r) {
          let O = s += T;
          r(O);
        }
        p.enqueue(new Uint8Array(b));
      } catch (g) {
        throw a(g), g;
      }
    },
    cancel(p) {
      return a(p), i.return();
    }
  }, {
    highWaterMark: 2
  });
}, Zi = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", mc = Zi && typeof ReadableStream == "function", Gl = Zi && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((t) => (e) => t.encode(e))(new TextEncoder()) : async (t) => new Uint8Array(await new Response(t).arrayBuffer())), gc = (t, ...e) => {
  try {
    return !!t(...e);
  } catch {
    return !1;
  }
}, jl = mc && gc(() => {
  let t = !1;
  const e = new Request(bt.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return t = !0, "half";
    }
  }).headers.has("Content-Type");
  return t && !e;
}), Ko = 64 * 1024, Ls = mc && gc(() => X.isReadableStream(new Response("").body)), Ci = {
  stream: Ls && ((t) => t.body)
};
Zi && ((t) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((e) => {
    !Ci[e] && (Ci[e] = X.isFunction(t[e]) ? (r) => r[e]() : (r, n) => {
      throw new Ie(`Response type '${e}' is not supported`, Ie.ERR_NOT_SUPPORT, n);
    });
  });
})(new Response());
const zl = async (t) => {
  if (t == null)
    return 0;
  if (X.isBlob(t))
    return t.size;
  if (X.isSpecCompliantForm(t))
    return (await new Request(bt.origin, {
      method: "POST",
      body: t
    }).arrayBuffer()).byteLength;
  if (X.isArrayBufferView(t) || X.isArrayBuffer(t))
    return t.byteLength;
  if (X.isURLSearchParams(t) && (t = t + ""), X.isString(t))
    return (await Gl(t)).byteLength;
}, Dl = async (t, e) => {
  const r = X.toFiniteNumber(t.getContentLength());
  return r ?? zl(e);
}, Wl = Zi && (async (t) => {
  let {
    url: e,
    method: r,
    data: n,
    signal: i,
    cancelToken: s,
    timeout: c,
    onDownloadProgress: a,
    onUploadProgress: p,
    responseType: g,
    headers: b,
    withCredentials: T = "same-origin",
    fetchOptions: O
  } = pc(t);
  g = g ? (g + "").toLowerCase() : "text";
  let B = Hl([i, s && s.toAbortSignal()], c), m;
  const I = B && B.unsubscribe && (() => {
    B.unsubscribe();
  });
  let U;
  try {
    if (p && jl && r !== "get" && r !== "head" && (U = await Dl(b, n)) !== 0) {
      let k = new Request(e, {
        method: "POST",
        body: n,
        duplex: "half"
      }), J;
      if (X.isFormData(n) && (J = k.headers.get("content-type")) && b.setContentType(J), k.body) {
        const [K, re] = Do(
          U,
          Pi(Wo(p))
        );
        n = Zo(k.body, Ko, K, re);
      }
    }
    X.isString(T) || (T = T ? "include" : "omit");
    const V = "credentials" in Request.prototype;
    m = new Request(e, {
      ...O,
      signal: B,
      method: r.toUpperCase(),
      headers: b.normalize().toJSON(),
      body: n,
      duplex: "half",
      credentials: V ? T : void 0
    });
    let j = await fetch(m);
    const q = Ls && (g === "stream" || g === "response");
    if (Ls && (a || q && I)) {
      const k = {};
      ["status", "statusText", "headers"].forEach((ue) => {
        k[ue] = j[ue];
      });
      const J = X.toFiniteNumber(j.headers.get("content-length")), [K, re] = a && Do(
        J,
        Pi(Wo(a), !0)
      ) || [];
      j = new Response(
        Zo(j.body, Ko, K, () => {
          re && re(), I && I();
        }),
        k
      );
    }
    g = g || "text";
    let ee = await Ci[X.findKey(Ci, g) || "text"](j, t);
    return !q && I && I(), await new Promise((k, J) => {
      hc(k, J, {
        data: ee,
        headers: _t.from(j.headers),
        status: j.status,
        statusText: j.statusText,
        config: t,
        request: m
      });
    });
  } catch (V) {
    throw I && I(), V && V.name === "TypeError" && /fetch/i.test(V.message) ? Object.assign(
      new Ie("Network Error", Ie.ERR_NETWORK, t, m),
      {
        cause: V.cause || V
      }
    ) : Ie.from(V, V && V.code, t, m);
  }
}), Vs = {
  http: cl,
  xhr: $l,
  fetch: Wl
};
X.forEach(Vs, (t, e) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: e });
    } catch {
    }
    Object.defineProperty(t, "adapterName", { value: e });
  }
});
const Xo = (t) => `- ${t}`, Yl = (t) => X.isFunction(t) || t === null || t === !1, yc = {
  getAdapter: (t) => {
    t = X.isArray(t) ? t : [t];
    const { length: e } = t;
    let r, n;
    const i = {};
    for (let s = 0; s < e; s++) {
      r = t[s];
      let c;
      if (n = r, !Yl(r) && (n = Vs[(c = String(r)).toLowerCase()], n === void 0))
        throw new Ie(`Unknown adapter '${c}'`);
      if (n)
        break;
      i[c || "#" + s] = n;
    }
    if (!n) {
      const s = Object.entries(i).map(
        ([a, p]) => `adapter ${a} ` + (p === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let c = e ? s.length > 1 ? `since :
` + s.map(Xo).join(`
`) : " " + Xo(s[0]) : "as no adapter specified";
      throw new Ie(
        "There is no suitable adapter to dispatch the request " + c,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: Vs
};
function ws(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new on(null, t);
}
function Jo(t) {
  return ws(t), t.headers = _t.from(t.headers), t.data = ys.call(
    t,
    t.transformRequest
  ), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), yc.getAdapter(t.adapter || Rn.adapter)(t).then(function(n) {
    return ws(t), n.data = ys.call(
      t,
      t.transformResponse,
      n
    ), n.headers = _t.from(n.headers), n;
  }, function(n) {
    return lc(n) || (ws(t), n && n.response && (n.response.data = ys.call(
      t,
      t.transformResponse,
      n.response
    ), n.response.headers = _t.from(n.response.headers))), Promise.reject(n);
  });
}
const wc = "1.7.7", _o = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((t, e) => {
  _o[t] = function(n) {
    return typeof n === t || "a" + (e < 1 ? "n " : " ") + t;
  };
});
const Qo = {};
_o.transitional = function(e, r, n) {
  function i(s, c) {
    return "[Axios v" + wc + "] Transitional option '" + s + "'" + c + (n ? ". " + n : "");
  }
  return (s, c, a) => {
    if (e === !1)
      throw new Ie(
        i(c, " has been removed" + (r ? " in " + r : "")),
        Ie.ERR_DEPRECATED
      );
    return r && !Qo[c] && (Qo[c] = !0, console.warn(
      i(
        c,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), e ? e(s, c, a) : !0;
  };
};
function Zl(t, e, r) {
  if (typeof t != "object")
    throw new Ie("options must be an object", Ie.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(t);
  let i = n.length;
  for (; i-- > 0; ) {
    const s = n[i], c = e[s];
    if (c) {
      const a = t[s], p = a === void 0 || c(a, s, t);
      if (p !== !0)
        throw new Ie("option " + s + " must be " + p, Ie.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new Ie("Unknown option " + s, Ie.ERR_BAD_OPTION);
  }
}
const Gs = {
  assertOptions: Zl,
  validators: _o
}, lr = Gs.validators;
class Pr {
  constructor(e) {
    this.defaults = e, this.interceptors = {
      request: new jo(),
      response: new jo()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(e, r) {
    try {
      return await this._request(e, r);
    } catch (n) {
      if (n instanceof Error) {
        let i;
        Error.captureStackTrace ? Error.captureStackTrace(i = {}) : i = new Error();
        const s = i.stack ? i.stack.replace(/^.+\n/, "") : "";
        try {
          n.stack ? s && !String(n.stack).endsWith(s.replace(/^.+\n.+\n/, "")) && (n.stack += `
` + s) : n.stack = s;
        } catch {
        }
      }
      throw n;
    }
  }
  _request(e, r) {
    typeof e == "string" ? (r = r || {}, r.url = e) : r = e || {}, r = Cr(this.defaults, r);
    const { transitional: n, paramsSerializer: i, headers: s } = r;
    n !== void 0 && Gs.assertOptions(n, {
      silentJSONParsing: lr.transitional(lr.boolean),
      forcedJSONParsing: lr.transitional(lr.boolean),
      clarifyTimeoutError: lr.transitional(lr.boolean)
    }, !1), i != null && (X.isFunction(i) ? r.paramsSerializer = {
      serialize: i
    } : Gs.assertOptions(i, {
      encode: lr.function,
      serialize: lr.function
    }, !0)), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let c = s && X.merge(
      s.common,
      s[r.method]
    );
    s && X.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (m) => {
        delete s[m];
      }
    ), r.headers = _t.concat(c, s);
    const a = [];
    let p = !0;
    this.interceptors.request.forEach(function(I) {
      typeof I.runWhen == "function" && I.runWhen(r) === !1 || (p = p && I.synchronous, a.unshift(I.fulfilled, I.rejected));
    });
    const g = [];
    this.interceptors.response.forEach(function(I) {
      g.push(I.fulfilled, I.rejected);
    });
    let b, T = 0, O;
    if (!p) {
      const m = [Jo.bind(this), void 0];
      for (m.unshift.apply(m, a), m.push.apply(m, g), O = m.length, b = Promise.resolve(r); T < O; )
        b = b.then(m[T++], m[T++]);
      return b;
    }
    O = a.length;
    let B = r;
    for (T = 0; T < O; ) {
      const m = a[T++], I = a[T++];
      try {
        B = m(B);
      } catch (U) {
        I.call(this, U);
        break;
      }
    }
    try {
      b = Jo.call(this, B);
    } catch (m) {
      return Promise.reject(m);
    }
    for (T = 0, O = g.length; T < O; )
      b = b.then(g[T++], g[T++]);
    return b;
  }
  getUri(e) {
    e = Cr(this.defaults, e);
    const r = dc(e.baseURL, e.url);
    return cc(r, e.params, e.paramsSerializer);
  }
}
X.forEach(["delete", "get", "head", "options"], function(e) {
  Pr.prototype[e] = function(r, n) {
    return this.request(Cr(n || {}, {
      method: e,
      url: r,
      data: (n || {}).data
    }));
  };
});
X.forEach(["post", "put", "patch"], function(e) {
  function r(n) {
    return function(s, c, a) {
      return this.request(Cr(a || {}, {
        method: e,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: s,
        data: c
      }));
    };
  }
  Pr.prototype[e] = r(), Pr.prototype[e + "Form"] = r(!0);
});
class xo {
  constructor(e) {
    if (typeof e != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(s) {
      r = s;
    });
    const n = this;
    this.promise.then((i) => {
      if (!n._listeners) return;
      let s = n._listeners.length;
      for (; s-- > 0; )
        n._listeners[s](i);
      n._listeners = null;
    }), this.promise.then = (i) => {
      let s;
      const c = new Promise((a) => {
        n.subscribe(a), s = a;
      }).then(i);
      return c.cancel = function() {
        n.unsubscribe(s);
      }, c;
    }, e(function(s, c, a) {
      n.reason || (n.reason = new on(s, c, a), r(n.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(e) {
    if (this.reason) {
      e(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(e) : this._listeners = [e];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(e) {
    if (!this._listeners)
      return;
    const r = this._listeners.indexOf(e);
    r !== -1 && this._listeners.splice(r, 1);
  }
  toAbortSignal() {
    const e = new AbortController(), r = (n) => {
      e.abort(n);
    };
    return this.subscribe(r), e.signal.unsubscribe = () => this.unsubscribe(r), e.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let e;
    return {
      token: new xo(function(i) {
        e = i;
      }),
      cancel: e
    };
  }
}
function Kl(t) {
  return function(r) {
    return t.apply(null, r);
  };
}
function Xl(t) {
  return X.isObject(t) && t.isAxiosError === !0;
}
const js = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(js).forEach(([t, e]) => {
  js[e] = t;
});
function bc(t) {
  const e = new Pr(t), r = Ka(Pr.prototype.request, e);
  return X.extend(r, Pr.prototype, e, { allOwnKeys: !0 }), X.extend(r, e, null, { allOwnKeys: !0 }), r.create = function(i) {
    return bc(Cr(t, i));
  }, r;
}
const Ke = bc(Rn);
Ke.Axios = Pr;
Ke.CanceledError = on;
Ke.CancelToken = xo;
Ke.isCancel = lc;
Ke.VERSION = wc;
Ke.toFormData = Yi;
Ke.AxiosError = Ie;
Ke.Cancel = Ke.CanceledError;
Ke.all = function(e) {
  return Promise.all(e);
};
Ke.spread = Kl;
Ke.isAxiosError = Xl;
Ke.mergeConfig = Cr;
Ke.AxiosHeaders = _t;
Ke.formToJSON = (t) => fc(X.isHTMLForm(t) ? new FormData(t) : t);
Ke.getAdapter = yc.getAdapter;
Ke.HttpStatusCode = js;
Ke.default = Ke;
const Jl = async (t) => {
  const { data: e } = await Ke.post(
    "https://d2lau6bs1ulmoj.cloudfront.net/create-embedding",
    { text: t }
  );
  return e.body.vectors;
}, Ql = "data:image/svg+xml,%3csvg%20width='52'%20height='16'%20viewBox='0%200%2052%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20%3e%3cpath%20d='M5.18811%203.56704H7.22642V4.07662H5.74864V4.89194H7.17546V5.40152H5.74864V6.21684H7.22642V6.72642H5.18811V3.56704Z'%20fill='%234B4E53'%20/%3e%3cpath%20d='M9.11185%203.56704H9.67239V6.16588H10.9973V6.67546H9.11185V3.56704Z'%20fill='%234B4E53'%20/%3e%3cpath%20d='M5.18811%208.50994H5.64673L7.1245%2010.4973V8.50994H7.68503V11.6184H7.22642L5.74864%209.58005V11.6184H5.18811V8.50994Z'%20fill='%234B4E53'%20/%3e%3cpath%20d='M9.82526%208.50994H10.5387L11.6088%2011.6184H10.9973L10.7935%2010.9559H9.57047L9.36664%2011.6184H8.75515L9.82526%208.50994ZM10.5896%2010.3954L10.131%209.07047L9.67239%2010.3954H10.5896Z'%20fill='%234B4E53'%20/%3e%3cpath%20d='M8.04174%2015.0835C3.86321%2015.0835%200.5%2011.7203%200.5%207.54174C0.5%203.36321%203.86321%200%208.04174%200C12.2203%200%2015.5835%203.41417%2015.5835%207.54174C15.5835%2011.7203%2012.2203%2015.0835%208.04174%2015.0835ZM8.04174%200.611492C4.21991%200.611492%201.11149%203.71991%201.11149%207.54174C1.11149%2011.3636%204.21991%2014.472%208.04174%2014.472C11.8636%2014.472%2014.972%2011.3636%2014.972%207.54174C14.972%203.71991%2011.8636%200.611492%208.04174%200.611492Z'%20fill='%234B4E53'%20/%3e%3cpath%20d='M20.8945%203.75049H25.9903V4.97347H22.3213V6.93025H25.8272V8.15323H22.3213V10.1508H26.0311V11.3738H20.8945V3.75049Z'%20fill='%234B4E53'%20/%3e%3cpath%20d='M28.8032%203.75049H30.1892V10.1915H33.4913V11.4145H28.8032V3.75049Z'%20fill='%234B4E53'%20/%3e%3cpath%20d='M36.1411%203.75049H37.2418L40.9107%208.68319V3.75049H42.2968V11.4145H41.1961L37.5271%206.40029V11.4145H36.1411V3.75049Z'%20fill='%234B4E53'%20/%3e%3cpath%20d='M47.5148%203.75049H49.3493L51.9991%2011.4145H50.4908L49.9608%209.78388H46.9849L46.4141%2011.4145H44.865L47.5148%203.75049ZM49.5124%208.52013L48.4117%205.2996L47.311%208.52013H49.5124Z'%20fill='%234B4E53'%20/%3e%3c/svg%3e", e0 = "data:image/svg+xml,%3csvg%20width='17'%20height='18'%20viewBox='0%200%2017%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20%3e%3cpath%20d='M0.5%209.83358H5.5V8.16691H0.5V0.538249C0.5%200.308132%200.68655%200.121582%200.916667%200.121582C0.986875%200.121582%201.05595%200.139324%201.11747%200.173165L16.5028%208.63517C16.7045%208.746%2016.7781%208.99942%2016.6672%209.201C16.6291%209.27025%2016.5721%209.32725%2016.5028%209.36533L1.11747%2017.8272C0.915833%2017.9382%200.662475%2017.8647%200.551575%2017.663C0.517742%2017.6015%200.5%2017.5324%200.5%2017.4622V9.83358Z'%20fill='white'%20/%3e%3c/svg%3e";
var en = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function t0(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var _c = {}, On = {};
On.byteLength = i0;
On.toByteArray = o0;
On.fromByteArray = u0;
var Xt = [], Bt = [], r0 = typeof Uint8Array < "u" ? Uint8Array : Array, bs = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var jr = 0, n0 = bs.length; jr < n0; ++jr)
  Xt[jr] = bs[jr], Bt[bs.charCodeAt(jr)] = jr;
Bt[45] = 62;
Bt[95] = 63;
function xc(t) {
  var e = t.length;
  if (e % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var r = t.indexOf("=");
  r === -1 && (r = e);
  var n = r === e ? 0 : 4 - r % 4;
  return [r, n];
}
function i0(t) {
  var e = xc(t), r = e[0], n = e[1];
  return (r + n) * 3 / 4 - n;
}
function s0(t, e, r) {
  return (e + r) * 3 / 4 - r;
}
function o0(t) {
  var e, r = xc(t), n = r[0], i = r[1], s = new r0(s0(t, n, i)), c = 0, a = i > 0 ? n - 4 : n, p;
  for (p = 0; p < a; p += 4)
    e = Bt[t.charCodeAt(p)] << 18 | Bt[t.charCodeAt(p + 1)] << 12 | Bt[t.charCodeAt(p + 2)] << 6 | Bt[t.charCodeAt(p + 3)], s[c++] = e >> 16 & 255, s[c++] = e >> 8 & 255, s[c++] = e & 255;
  return i === 2 && (e = Bt[t.charCodeAt(p)] << 2 | Bt[t.charCodeAt(p + 1)] >> 4, s[c++] = e & 255), i === 1 && (e = Bt[t.charCodeAt(p)] << 10 | Bt[t.charCodeAt(p + 1)] << 4 | Bt[t.charCodeAt(p + 2)] >> 2, s[c++] = e >> 8 & 255, s[c++] = e & 255), s;
}
function a0(t) {
  return Xt[t >> 18 & 63] + Xt[t >> 12 & 63] + Xt[t >> 6 & 63] + Xt[t & 63];
}
function c0(t, e, r) {
  for (var n, i = [], s = e; s < r; s += 3)
    n = (t[s] << 16 & 16711680) + (t[s + 1] << 8 & 65280) + (t[s + 2] & 255), i.push(a0(n));
  return i.join("");
}
function u0(t) {
  for (var e, r = t.length, n = r % 3, i = [], s = 16383, c = 0, a = r - n; c < a; c += s)
    i.push(c0(t, c, c + s > a ? a : c + s));
  return n === 1 ? (e = t[r - 1], i.push(
    Xt[e >> 2] + Xt[e << 4 & 63] + "=="
  )) : n === 2 && (e = (t[r - 2] << 8) + t[r - 1], i.push(
    Xt[e >> 10] + Xt[e >> 4 & 63] + Xt[e << 2 & 63] + "="
  )), i.join("");
}
var In = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
In.read = function(t, e, r, n, i) {
  var s, c, a = i * 8 - n - 1, p = (1 << a) - 1, g = p >> 1, b = -7, T = r ? i - 1 : 0, O = r ? -1 : 1, B = t[e + T];
  for (T += O, s = B & (1 << -b) - 1, B >>= -b, b += a; b > 0; s = s * 256 + t[e + T], T += O, b -= 8)
    ;
  for (c = s & (1 << -b) - 1, s >>= -b, b += n; b > 0; c = c * 256 + t[e + T], T += O, b -= 8)
    ;
  if (s === 0)
    s = 1 - g;
  else {
    if (s === p)
      return c ? NaN : (B ? -1 : 1) * (1 / 0);
    c = c + Math.pow(2, n), s = s - g;
  }
  return (B ? -1 : 1) * c * Math.pow(2, s - n);
};
In.write = function(t, e, r, n, i, s) {
  var c, a, p, g = s * 8 - i - 1, b = (1 << g) - 1, T = b >> 1, O = i === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, B = n ? 0 : s - 1, m = n ? 1 : -1, I = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0;
  for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (a = isNaN(e) ? 1 : 0, c = b) : (c = Math.floor(Math.log(e) / Math.LN2), e * (p = Math.pow(2, -c)) < 1 && (c--, p *= 2), c + T >= 1 ? e += O / p : e += O * Math.pow(2, 1 - T), e * p >= 2 && (c++, p /= 2), c + T >= b ? (a = 0, c = b) : c + T >= 1 ? (a = (e * p - 1) * Math.pow(2, i), c = c + T) : (a = e * Math.pow(2, T - 1) * Math.pow(2, i), c = 0)); i >= 8; t[r + B] = a & 255, B += m, a /= 256, i -= 8)
    ;
  for (c = c << i | a, g += i; g > 0; t[r + B] = c & 255, B += m, c /= 256, g -= 8)
    ;
  t[r + B - m] |= I * 128;
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(t) {
  const e = On, r = In, n = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  t.Buffer = a, t.SlowBuffer = j, t.INSPECT_MAX_BYTES = 50;
  const i = 2147483647;
  t.kMaxLength = i, a.TYPED_ARRAY_SUPPORT = s(), !a.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
  );
  function s() {
    try {
      const d = new Uint8Array(1), f = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(f, Uint8Array.prototype), Object.setPrototypeOf(d, f), d.foo() === 42;
    } catch {
      return !1;
    }
  }
  Object.defineProperty(a.prototype, "parent", {
    enumerable: !0,
    get: function() {
      if (a.isBuffer(this))
        return this.buffer;
    }
  }), Object.defineProperty(a.prototype, "offset", {
    enumerable: !0,
    get: function() {
      if (a.isBuffer(this))
        return this.byteOffset;
    }
  });
  function c(d) {
    if (d > i)
      throw new RangeError('The value "' + d + '" is invalid for option "size"');
    const f = new Uint8Array(d);
    return Object.setPrototypeOf(f, a.prototype), f;
  }
  function a(d, f, l) {
    if (typeof d == "number") {
      if (typeof f == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return T(d);
    }
    return p(d, f, l);
  }
  a.poolSize = 8192;
  function p(d, f, l) {
    if (typeof d == "string")
      return O(d, f);
    if (ArrayBuffer.isView(d))
      return m(d);
    if (d == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof d
      );
    if (L(d, ArrayBuffer) || d && L(d.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (L(d, SharedArrayBuffer) || d && L(d.buffer, SharedArrayBuffer)))
      return I(d, f, l);
    if (typeof d == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    const A = d.valueOf && d.valueOf();
    if (A != null && A !== d)
      return a.from(A, f, l);
    const C = U(d);
    if (C) return C;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof d[Symbol.toPrimitive] == "function")
      return a.from(d[Symbol.toPrimitive]("string"), f, l);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof d
    );
  }
  a.from = function(d, f, l) {
    return p(d, f, l);
  }, Object.setPrototypeOf(a.prototype, Uint8Array.prototype), Object.setPrototypeOf(a, Uint8Array);
  function g(d) {
    if (typeof d != "number")
      throw new TypeError('"size" argument must be of type number');
    if (d < 0)
      throw new RangeError('The value "' + d + '" is invalid for option "size"');
  }
  function b(d, f, l) {
    return g(d), d <= 0 ? c(d) : f !== void 0 ? typeof l == "string" ? c(d).fill(f, l) : c(d).fill(f) : c(d);
  }
  a.alloc = function(d, f, l) {
    return b(d, f, l);
  };
  function T(d) {
    return g(d), c(d < 0 ? 0 : V(d) | 0);
  }
  a.allocUnsafe = function(d) {
    return T(d);
  }, a.allocUnsafeSlow = function(d) {
    return T(d);
  };
  function O(d, f) {
    if ((typeof f != "string" || f === "") && (f = "utf8"), !a.isEncoding(f))
      throw new TypeError("Unknown encoding: " + f);
    const l = q(d, f) | 0;
    let A = c(l);
    const C = A.write(d, f);
    return C !== l && (A = A.slice(0, C)), A;
  }
  function B(d) {
    const f = d.length < 0 ? 0 : V(d.length) | 0, l = c(f);
    for (let A = 0; A < f; A += 1)
      l[A] = d[A] & 255;
    return l;
  }
  function m(d) {
    if (L(d, Uint8Array)) {
      const f = new Uint8Array(d);
      return I(f.buffer, f.byteOffset, f.byteLength);
    }
    return B(d);
  }
  function I(d, f, l) {
    if (f < 0 || d.byteLength < f)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (d.byteLength < f + (l || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let A;
    return f === void 0 && l === void 0 ? A = new Uint8Array(d) : l === void 0 ? A = new Uint8Array(d, f) : A = new Uint8Array(d, f, l), Object.setPrototypeOf(A, a.prototype), A;
  }
  function U(d) {
    if (a.isBuffer(d)) {
      const f = V(d.length) | 0, l = c(f);
      return l.length === 0 || d.copy(l, 0, 0, f), l;
    }
    if (d.length !== void 0)
      return typeof d.length != "number" || oe(d.length) ? c(0) : B(d);
    if (d.type === "Buffer" && Array.isArray(d.data))
      return B(d.data);
  }
  function V(d) {
    if (d >= i)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i.toString(16) + " bytes");
    return d | 0;
  }
  function j(d) {
    return +d != d && (d = 0), a.alloc(+d);
  }
  a.isBuffer = function(f) {
    return f != null && f._isBuffer === !0 && f !== a.prototype;
  }, a.compare = function(f, l) {
    if (L(f, Uint8Array) && (f = a.from(f, f.offset, f.byteLength)), L(l, Uint8Array) && (l = a.from(l, l.offset, l.byteLength)), !a.isBuffer(f) || !a.isBuffer(l))
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (f === l) return 0;
    let A = f.length, C = l.length;
    for (let W = 0, D = Math.min(A, C); W < D; ++W)
      if (f[W] !== l[W]) {
        A = f[W], C = l[W];
        break;
      }
    return A < C ? -1 : C < A ? 1 : 0;
  }, a.isEncoding = function(f) {
    switch (String(f).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return !0;
      default:
        return !1;
    }
  }, a.concat = function(f, l) {
    if (!Array.isArray(f))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (f.length === 0)
      return a.alloc(0);
    let A;
    if (l === void 0)
      for (l = 0, A = 0; A < f.length; ++A)
        l += f[A].length;
    const C = a.allocUnsafe(l);
    let W = 0;
    for (A = 0; A < f.length; ++A) {
      let D = f[A];
      if (L(D, Uint8Array))
        W + D.length > C.length ? (a.isBuffer(D) || (D = a.from(D)), D.copy(C, W)) : Uint8Array.prototype.set.call(
          C,
          D,
          W
        );
      else if (a.isBuffer(D))
        D.copy(C, W);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      W += D.length;
    }
    return C;
  };
  function q(d, f) {
    if (a.isBuffer(d))
      return d.length;
    if (ArrayBuffer.isView(d) || L(d, ArrayBuffer))
      return d.byteLength;
    if (typeof d != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof d
      );
    const l = d.length, A = arguments.length > 2 && arguments[2] === !0;
    if (!A && l === 0) return 0;
    let C = !1;
    for (; ; )
      switch (f) {
        case "ascii":
        case "latin1":
        case "binary":
          return l;
        case "utf8":
        case "utf-8":
          return o(d).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return l * 2;
        case "hex":
          return l >>> 1;
        case "base64":
          return x(d).length;
        default:
          if (C)
            return A ? -1 : o(d).length;
          f = ("" + f).toLowerCase(), C = !0;
      }
  }
  a.byteLength = q;
  function ee(d, f, l) {
    let A = !1;
    if ((f === void 0 || f < 0) && (f = 0), f > this.length || ((l === void 0 || l > this.length) && (l = this.length), l <= 0) || (l >>>= 0, f >>>= 0, l <= f))
      return "";
    for (d || (d = "utf8"); ; )
      switch (d) {
        case "hex":
          return le(this, f, l);
        case "utf8":
        case "utf-8":
          return P(this, f, l);
        case "ascii":
          return G(this, f, l);
        case "latin1":
        case "binary":
          return Q(this, f, l);
        case "base64":
          return N(this, f, l);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return ye(this, f, l);
        default:
          if (A) throw new TypeError("Unknown encoding: " + d);
          d = (d + "").toLowerCase(), A = !0;
      }
  }
  a.prototype._isBuffer = !0;
  function k(d, f, l) {
    const A = d[f];
    d[f] = d[l], d[l] = A;
  }
  a.prototype.swap16 = function() {
    const f = this.length;
    if (f % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let l = 0; l < f; l += 2)
      k(this, l, l + 1);
    return this;
  }, a.prototype.swap32 = function() {
    const f = this.length;
    if (f % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let l = 0; l < f; l += 4)
      k(this, l, l + 3), k(this, l + 1, l + 2);
    return this;
  }, a.prototype.swap64 = function() {
    const f = this.length;
    if (f % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let l = 0; l < f; l += 8)
      k(this, l, l + 7), k(this, l + 1, l + 6), k(this, l + 2, l + 5), k(this, l + 3, l + 4);
    return this;
  }, a.prototype.toString = function() {
    const f = this.length;
    return f === 0 ? "" : arguments.length === 0 ? P(this, 0, f) : ee.apply(this, arguments);
  }, a.prototype.toLocaleString = a.prototype.toString, a.prototype.equals = function(f) {
    if (!a.isBuffer(f)) throw new TypeError("Argument must be a Buffer");
    return this === f ? !0 : a.compare(this, f) === 0;
  }, a.prototype.inspect = function() {
    let f = "";
    const l = t.INSPECT_MAX_BYTES;
    return f = this.toString("hex", 0, l).replace(/(.{2})/g, "$1 ").trim(), this.length > l && (f += " ... "), "<Buffer " + f + ">";
  }, n && (a.prototype[n] = a.prototype.inspect), a.prototype.compare = function(f, l, A, C, W) {
    if (L(f, Uint8Array) && (f = a.from(f, f.offset, f.byteLength)), !a.isBuffer(f))
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof f
      );
    if (l === void 0 && (l = 0), A === void 0 && (A = f ? f.length : 0), C === void 0 && (C = 0), W === void 0 && (W = this.length), l < 0 || A > f.length || C < 0 || W > this.length)
      throw new RangeError("out of range index");
    if (C >= W && l >= A)
      return 0;
    if (C >= W)
      return -1;
    if (l >= A)
      return 1;
    if (l >>>= 0, A >>>= 0, C >>>= 0, W >>>= 0, this === f) return 0;
    let D = W - C, Te = A - l;
    const Oe = Math.min(D, Te), Re = this.slice(C, W), Se = f.slice(l, A);
    for (let ke = 0; ke < Oe; ++ke)
      if (Re[ke] !== Se[ke]) {
        D = Re[ke], Te = Se[ke];
        break;
      }
    return D < Te ? -1 : Te < D ? 1 : 0;
  };
  function J(d, f, l, A, C) {
    if (d.length === 0) return -1;
    if (typeof l == "string" ? (A = l, l = 0) : l > 2147483647 ? l = 2147483647 : l < -2147483648 && (l = -2147483648), l = +l, oe(l) && (l = C ? 0 : d.length - 1), l < 0 && (l = d.length + l), l >= d.length) {
      if (C) return -1;
      l = d.length - 1;
    } else if (l < 0)
      if (C) l = 0;
      else return -1;
    if (typeof f == "string" && (f = a.from(f, A)), a.isBuffer(f))
      return f.length === 0 ? -1 : K(d, f, l, A, C);
    if (typeof f == "number")
      return f = f & 255, typeof Uint8Array.prototype.indexOf == "function" ? C ? Uint8Array.prototype.indexOf.call(d, f, l) : Uint8Array.prototype.lastIndexOf.call(d, f, l) : K(d, [f], l, A, C);
    throw new TypeError("val must be string, number or Buffer");
  }
  function K(d, f, l, A, C) {
    let W = 1, D = d.length, Te = f.length;
    if (A !== void 0 && (A = String(A).toLowerCase(), A === "ucs2" || A === "ucs-2" || A === "utf16le" || A === "utf-16le")) {
      if (d.length < 2 || f.length < 2)
        return -1;
      W = 2, D /= 2, Te /= 2, l /= 2;
    }
    function Oe(Se, ke) {
      return W === 1 ? Se[ke] : Se.readUInt16BE(ke * W);
    }
    let Re;
    if (C) {
      let Se = -1;
      for (Re = l; Re < D; Re++)
        if (Oe(d, Re) === Oe(f, Se === -1 ? 0 : Re - Se)) {
          if (Se === -1 && (Se = Re), Re - Se + 1 === Te) return Se * W;
        } else
          Se !== -1 && (Re -= Re - Se), Se = -1;
    } else
      for (l + Te > D && (l = D - Te), Re = l; Re >= 0; Re--) {
        let Se = !0;
        for (let ke = 0; ke < Te; ke++)
          if (Oe(d, Re + ke) !== Oe(f, ke)) {
            Se = !1;
            break;
          }
        if (Se) return Re;
      }
    return -1;
  }
  a.prototype.includes = function(f, l, A) {
    return this.indexOf(f, l, A) !== -1;
  }, a.prototype.indexOf = function(f, l, A) {
    return J(this, f, l, A, !0);
  }, a.prototype.lastIndexOf = function(f, l, A) {
    return J(this, f, l, A, !1);
  };
  function re(d, f, l, A) {
    l = Number(l) || 0;
    const C = d.length - l;
    A ? (A = Number(A), A > C && (A = C)) : A = C;
    const W = f.length;
    A > W / 2 && (A = W / 2);
    let D;
    for (D = 0; D < A; ++D) {
      const Te = parseInt(f.substr(D * 2, 2), 16);
      if (oe(Te)) return D;
      d[l + D] = Te;
    }
    return D;
  }
  function ue(d, f, l, A) {
    return v(o(f, d.length - l), d, l, A);
  }
  function ie(d, f, l, A) {
    return v(u(f), d, l, A);
  }
  function pe(d, f, l, A) {
    return v(x(f), d, l, A);
  }
  function de(d, f, l, A) {
    return v(y(f, d.length - l), d, l, A);
  }
  a.prototype.write = function(f, l, A, C) {
    if (l === void 0)
      C = "utf8", A = this.length, l = 0;
    else if (A === void 0 && typeof l == "string")
      C = l, A = this.length, l = 0;
    else if (isFinite(l))
      l = l >>> 0, isFinite(A) ? (A = A >>> 0, C === void 0 && (C = "utf8")) : (C = A, A = void 0);
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    const W = this.length - l;
    if ((A === void 0 || A > W) && (A = W), f.length > 0 && (A < 0 || l < 0) || l > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    C || (C = "utf8");
    let D = !1;
    for (; ; )
      switch (C) {
        case "hex":
          return re(this, f, l, A);
        case "utf8":
        case "utf-8":
          return ue(this, f, l, A);
        case "ascii":
        case "latin1":
        case "binary":
          return ie(this, f, l, A);
        case "base64":
          return pe(this, f, l, A);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return de(this, f, l, A);
        default:
          if (D) throw new TypeError("Unknown encoding: " + C);
          C = ("" + C).toLowerCase(), D = !0;
      }
  }, a.prototype.toJSON = function() {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function N(d, f, l) {
    return f === 0 && l === d.length ? e.fromByteArray(d) : e.fromByteArray(d.slice(f, l));
  }
  function P(d, f, l) {
    l = Math.min(d.length, l);
    const A = [];
    let C = f;
    for (; C < l; ) {
      const W = d[C];
      let D = null, Te = W > 239 ? 4 : W > 223 ? 3 : W > 191 ? 2 : 1;
      if (C + Te <= l) {
        let Oe, Re, Se, ke;
        switch (Te) {
          case 1:
            W < 128 && (D = W);
            break;
          case 2:
            Oe = d[C + 1], (Oe & 192) === 128 && (ke = (W & 31) << 6 | Oe & 63, ke > 127 && (D = ke));
            break;
          case 3:
            Oe = d[C + 1], Re = d[C + 2], (Oe & 192) === 128 && (Re & 192) === 128 && (ke = (W & 15) << 12 | (Oe & 63) << 6 | Re & 63, ke > 2047 && (ke < 55296 || ke > 57343) && (D = ke));
            break;
          case 4:
            Oe = d[C + 1], Re = d[C + 2], Se = d[C + 3], (Oe & 192) === 128 && (Re & 192) === 128 && (Se & 192) === 128 && (ke = (W & 15) << 18 | (Oe & 63) << 12 | (Re & 63) << 6 | Se & 63, ke > 65535 && ke < 1114112 && (D = ke));
        }
      }
      D === null ? (D = 65533, Te = 1) : D > 65535 && (D -= 65536, A.push(D >>> 10 & 1023 | 55296), D = 56320 | D & 1023), A.push(D), C += Te;
    }
    return z(A);
  }
  const Y = 4096;
  function z(d) {
    const f = d.length;
    if (f <= Y)
      return String.fromCharCode.apply(String, d);
    let l = "", A = 0;
    for (; A < f; )
      l += String.fromCharCode.apply(
        String,
        d.slice(A, A += Y)
      );
    return l;
  }
  function G(d, f, l) {
    let A = "";
    l = Math.min(d.length, l);
    for (let C = f; C < l; ++C)
      A += String.fromCharCode(d[C] & 127);
    return A;
  }
  function Q(d, f, l) {
    let A = "";
    l = Math.min(d.length, l);
    for (let C = f; C < l; ++C)
      A += String.fromCharCode(d[C]);
    return A;
  }
  function le(d, f, l) {
    const A = d.length;
    (!f || f < 0) && (f = 0), (!l || l < 0 || l > A) && (l = A);
    let C = "";
    for (let W = f; W < l; ++W)
      C += me[d[W]];
    return C;
  }
  function ye(d, f, l) {
    const A = d.slice(f, l);
    let C = "";
    for (let W = 0; W < A.length - 1; W += 2)
      C += String.fromCharCode(A[W] + A[W + 1] * 256);
    return C;
  }
  a.prototype.slice = function(f, l) {
    const A = this.length;
    f = ~~f, l = l === void 0 ? A : ~~l, f < 0 ? (f += A, f < 0 && (f = 0)) : f > A && (f = A), l < 0 ? (l += A, l < 0 && (l = 0)) : l > A && (l = A), l < f && (l = f);
    const C = this.subarray(f, l);
    return Object.setPrototypeOf(C, a.prototype), C;
  };
  function se(d, f, l) {
    if (d % 1 !== 0 || d < 0) throw new RangeError("offset is not uint");
    if (d + f > l) throw new RangeError("Trying to access beyond buffer length");
  }
  a.prototype.readUintLE = a.prototype.readUIntLE = function(f, l, A) {
    f = f >>> 0, l = l >>> 0, A || se(f, l, this.length);
    let C = this[f], W = 1, D = 0;
    for (; ++D < l && (W *= 256); )
      C += this[f + D] * W;
    return C;
  }, a.prototype.readUintBE = a.prototype.readUIntBE = function(f, l, A) {
    f = f >>> 0, l = l >>> 0, A || se(f, l, this.length);
    let C = this[f + --l], W = 1;
    for (; l > 0 && (W *= 256); )
      C += this[f + --l] * W;
    return C;
  }, a.prototype.readUint8 = a.prototype.readUInt8 = function(f, l) {
    return f = f >>> 0, l || se(f, 1, this.length), this[f];
  }, a.prototype.readUint16LE = a.prototype.readUInt16LE = function(f, l) {
    return f = f >>> 0, l || se(f, 2, this.length), this[f] | this[f + 1] << 8;
  }, a.prototype.readUint16BE = a.prototype.readUInt16BE = function(f, l) {
    return f = f >>> 0, l || se(f, 2, this.length), this[f] << 8 | this[f + 1];
  }, a.prototype.readUint32LE = a.prototype.readUInt32LE = function(f, l) {
    return f = f >>> 0, l || se(f, 4, this.length), (this[f] | this[f + 1] << 8 | this[f + 2] << 16) + this[f + 3] * 16777216;
  }, a.prototype.readUint32BE = a.prototype.readUInt32BE = function(f, l) {
    return f = f >>> 0, l || se(f, 4, this.length), this[f] * 16777216 + (this[f + 1] << 16 | this[f + 2] << 8 | this[f + 3]);
  }, a.prototype.readBigUInt64LE = ge(function(f) {
    f = f >>> 0, M(f, "offset");
    const l = this[f], A = this[f + 7];
    (l === void 0 || A === void 0) && F(f, this.length - 8);
    const C = l + this[++f] * 2 ** 8 + this[++f] * 2 ** 16 + this[++f] * 2 ** 24, W = this[++f] + this[++f] * 2 ** 8 + this[++f] * 2 ** 16 + A * 2 ** 24;
    return BigInt(C) + (BigInt(W) << BigInt(32));
  }), a.prototype.readBigUInt64BE = ge(function(f) {
    f = f >>> 0, M(f, "offset");
    const l = this[f], A = this[f + 7];
    (l === void 0 || A === void 0) && F(f, this.length - 8);
    const C = l * 2 ** 24 + this[++f] * 2 ** 16 + this[++f] * 2 ** 8 + this[++f], W = this[++f] * 2 ** 24 + this[++f] * 2 ** 16 + this[++f] * 2 ** 8 + A;
    return (BigInt(C) << BigInt(32)) + BigInt(W);
  }), a.prototype.readIntLE = function(f, l, A) {
    f = f >>> 0, l = l >>> 0, A || se(f, l, this.length);
    let C = this[f], W = 1, D = 0;
    for (; ++D < l && (W *= 256); )
      C += this[f + D] * W;
    return W *= 128, C >= W && (C -= Math.pow(2, 8 * l)), C;
  }, a.prototype.readIntBE = function(f, l, A) {
    f = f >>> 0, l = l >>> 0, A || se(f, l, this.length);
    let C = l, W = 1, D = this[f + --C];
    for (; C > 0 && (W *= 256); )
      D += this[f + --C] * W;
    return W *= 128, D >= W && (D -= Math.pow(2, 8 * l)), D;
  }, a.prototype.readInt8 = function(f, l) {
    return f = f >>> 0, l || se(f, 1, this.length), this[f] & 128 ? (255 - this[f] + 1) * -1 : this[f];
  }, a.prototype.readInt16LE = function(f, l) {
    f = f >>> 0, l || se(f, 2, this.length);
    const A = this[f] | this[f + 1] << 8;
    return A & 32768 ? A | 4294901760 : A;
  }, a.prototype.readInt16BE = function(f, l) {
    f = f >>> 0, l || se(f, 2, this.length);
    const A = this[f + 1] | this[f] << 8;
    return A & 32768 ? A | 4294901760 : A;
  }, a.prototype.readInt32LE = function(f, l) {
    return f = f >>> 0, l || se(f, 4, this.length), this[f] | this[f + 1] << 8 | this[f + 2] << 16 | this[f + 3] << 24;
  }, a.prototype.readInt32BE = function(f, l) {
    return f = f >>> 0, l || se(f, 4, this.length), this[f] << 24 | this[f + 1] << 16 | this[f + 2] << 8 | this[f + 3];
  }, a.prototype.readBigInt64LE = ge(function(f) {
    f = f >>> 0, M(f, "offset");
    const l = this[f], A = this[f + 7];
    (l === void 0 || A === void 0) && F(f, this.length - 8);
    const C = this[f + 4] + this[f + 5] * 2 ** 8 + this[f + 6] * 2 ** 16 + (A << 24);
    return (BigInt(C) << BigInt(32)) + BigInt(l + this[++f] * 2 ** 8 + this[++f] * 2 ** 16 + this[++f] * 2 ** 24);
  }), a.prototype.readBigInt64BE = ge(function(f) {
    f = f >>> 0, M(f, "offset");
    const l = this[f], A = this[f + 7];
    (l === void 0 || A === void 0) && F(f, this.length - 8);
    const C = (l << 24) + // Overflow
    this[++f] * 2 ** 16 + this[++f] * 2 ** 8 + this[++f];
    return (BigInt(C) << BigInt(32)) + BigInt(this[++f] * 2 ** 24 + this[++f] * 2 ** 16 + this[++f] * 2 ** 8 + A);
  }), a.prototype.readFloatLE = function(f, l) {
    return f = f >>> 0, l || se(f, 4, this.length), r.read(this, f, !0, 23, 4);
  }, a.prototype.readFloatBE = function(f, l) {
    return f = f >>> 0, l || se(f, 4, this.length), r.read(this, f, !1, 23, 4);
  }, a.prototype.readDoubleLE = function(f, l) {
    return f = f >>> 0, l || se(f, 8, this.length), r.read(this, f, !0, 52, 8);
  }, a.prototype.readDoubleBE = function(f, l) {
    return f = f >>> 0, l || se(f, 8, this.length), r.read(this, f, !1, 52, 8);
  };
  function Z(d, f, l, A, C, W) {
    if (!a.isBuffer(d)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (f > C || f < W) throw new RangeError('"value" argument is out of bounds');
    if (l + A > d.length) throw new RangeError("Index out of range");
  }
  a.prototype.writeUintLE = a.prototype.writeUIntLE = function(f, l, A, C) {
    if (f = +f, l = l >>> 0, A = A >>> 0, !C) {
      const Te = Math.pow(2, 8 * A) - 1;
      Z(this, f, l, A, Te, 0);
    }
    let W = 1, D = 0;
    for (this[l] = f & 255; ++D < A && (W *= 256); )
      this[l + D] = f / W & 255;
    return l + A;
  }, a.prototype.writeUintBE = a.prototype.writeUIntBE = function(f, l, A, C) {
    if (f = +f, l = l >>> 0, A = A >>> 0, !C) {
      const Te = Math.pow(2, 8 * A) - 1;
      Z(this, f, l, A, Te, 0);
    }
    let W = A - 1, D = 1;
    for (this[l + W] = f & 255; --W >= 0 && (D *= 256); )
      this[l + W] = f / D & 255;
    return l + A;
  }, a.prototype.writeUint8 = a.prototype.writeUInt8 = function(f, l, A) {
    return f = +f, l = l >>> 0, A || Z(this, f, l, 1, 255, 0), this[l] = f & 255, l + 1;
  }, a.prototype.writeUint16LE = a.prototype.writeUInt16LE = function(f, l, A) {
    return f = +f, l = l >>> 0, A || Z(this, f, l, 2, 65535, 0), this[l] = f & 255, this[l + 1] = f >>> 8, l + 2;
  }, a.prototype.writeUint16BE = a.prototype.writeUInt16BE = function(f, l, A) {
    return f = +f, l = l >>> 0, A || Z(this, f, l, 2, 65535, 0), this[l] = f >>> 8, this[l + 1] = f & 255, l + 2;
  }, a.prototype.writeUint32LE = a.prototype.writeUInt32LE = function(f, l, A) {
    return f = +f, l = l >>> 0, A || Z(this, f, l, 4, 4294967295, 0), this[l + 3] = f >>> 24, this[l + 2] = f >>> 16, this[l + 1] = f >>> 8, this[l] = f & 255, l + 4;
  }, a.prototype.writeUint32BE = a.prototype.writeUInt32BE = function(f, l, A) {
    return f = +f, l = l >>> 0, A || Z(this, f, l, 4, 4294967295, 0), this[l] = f >>> 24, this[l + 1] = f >>> 16, this[l + 2] = f >>> 8, this[l + 3] = f & 255, l + 4;
  };
  function ce(d, f, l, A, C) {
    S(f, A, C, d, l, 7);
    let W = Number(f & BigInt(4294967295));
    d[l++] = W, W = W >> 8, d[l++] = W, W = W >> 8, d[l++] = W, W = W >> 8, d[l++] = W;
    let D = Number(f >> BigInt(32) & BigInt(4294967295));
    return d[l++] = D, D = D >> 8, d[l++] = D, D = D >> 8, d[l++] = D, D = D >> 8, d[l++] = D, l;
  }
  function w(d, f, l, A, C) {
    S(f, A, C, d, l, 7);
    let W = Number(f & BigInt(4294967295));
    d[l + 7] = W, W = W >> 8, d[l + 6] = W, W = W >> 8, d[l + 5] = W, W = W >> 8, d[l + 4] = W;
    let D = Number(f >> BigInt(32) & BigInt(4294967295));
    return d[l + 3] = D, D = D >> 8, d[l + 2] = D, D = D >> 8, d[l + 1] = D, D = D >> 8, d[l] = D, l + 8;
  }
  a.prototype.writeBigUInt64LE = ge(function(f, l = 0) {
    return ce(this, f, l, BigInt(0), BigInt("0xffffffffffffffff"));
  }), a.prototype.writeBigUInt64BE = ge(function(f, l = 0) {
    return w(this, f, l, BigInt(0), BigInt("0xffffffffffffffff"));
  }), a.prototype.writeIntLE = function(f, l, A, C) {
    if (f = +f, l = l >>> 0, !C) {
      const Oe = Math.pow(2, 8 * A - 1);
      Z(this, f, l, A, Oe - 1, -Oe);
    }
    let W = 0, D = 1, Te = 0;
    for (this[l] = f & 255; ++W < A && (D *= 256); )
      f < 0 && Te === 0 && this[l + W - 1] !== 0 && (Te = 1), this[l + W] = (f / D >> 0) - Te & 255;
    return l + A;
  }, a.prototype.writeIntBE = function(f, l, A, C) {
    if (f = +f, l = l >>> 0, !C) {
      const Oe = Math.pow(2, 8 * A - 1);
      Z(this, f, l, A, Oe - 1, -Oe);
    }
    let W = A - 1, D = 1, Te = 0;
    for (this[l + W] = f & 255; --W >= 0 && (D *= 256); )
      f < 0 && Te === 0 && this[l + W + 1] !== 0 && (Te = 1), this[l + W] = (f / D >> 0) - Te & 255;
    return l + A;
  }, a.prototype.writeInt8 = function(f, l, A) {
    return f = +f, l = l >>> 0, A || Z(this, f, l, 1, 127, -128), f < 0 && (f = 255 + f + 1), this[l] = f & 255, l + 1;
  }, a.prototype.writeInt16LE = function(f, l, A) {
    return f = +f, l = l >>> 0, A || Z(this, f, l, 2, 32767, -32768), this[l] = f & 255, this[l + 1] = f >>> 8, l + 2;
  }, a.prototype.writeInt16BE = function(f, l, A) {
    return f = +f, l = l >>> 0, A || Z(this, f, l, 2, 32767, -32768), this[l] = f >>> 8, this[l + 1] = f & 255, l + 2;
  }, a.prototype.writeInt32LE = function(f, l, A) {
    return f = +f, l = l >>> 0, A || Z(this, f, l, 4, 2147483647, -2147483648), this[l] = f & 255, this[l + 1] = f >>> 8, this[l + 2] = f >>> 16, this[l + 3] = f >>> 24, l + 4;
  }, a.prototype.writeInt32BE = function(f, l, A) {
    return f = +f, l = l >>> 0, A || Z(this, f, l, 4, 2147483647, -2147483648), f < 0 && (f = 4294967295 + f + 1), this[l] = f >>> 24, this[l + 1] = f >>> 16, this[l + 2] = f >>> 8, this[l + 3] = f & 255, l + 4;
  }, a.prototype.writeBigInt64LE = ge(function(f, l = 0) {
    return ce(this, f, l, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  }), a.prototype.writeBigInt64BE = ge(function(f, l = 0) {
    return w(this, f, l, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function ne(d, f, l, A, C, W) {
    if (l + A > d.length) throw new RangeError("Index out of range");
    if (l < 0) throw new RangeError("Index out of range");
  }
  function he(d, f, l, A, C) {
    return f = +f, l = l >>> 0, C || ne(d, f, l, 4), r.write(d, f, l, A, 23, 4), l + 4;
  }
  a.prototype.writeFloatLE = function(f, l, A) {
    return he(this, f, l, !0, A);
  }, a.prototype.writeFloatBE = function(f, l, A) {
    return he(this, f, l, !1, A);
  };
  function Ee(d, f, l, A, C) {
    return f = +f, l = l >>> 0, C || ne(d, f, l, 8), r.write(d, f, l, A, 52, 8), l + 8;
  }
  a.prototype.writeDoubleLE = function(f, l, A) {
    return Ee(this, f, l, !0, A);
  }, a.prototype.writeDoubleBE = function(f, l, A) {
    return Ee(this, f, l, !1, A);
  }, a.prototype.copy = function(f, l, A, C) {
    if (!a.isBuffer(f)) throw new TypeError("argument should be a Buffer");
    if (A || (A = 0), !C && C !== 0 && (C = this.length), l >= f.length && (l = f.length), l || (l = 0), C > 0 && C < A && (C = A), C === A || f.length === 0 || this.length === 0) return 0;
    if (l < 0)
      throw new RangeError("targetStart out of bounds");
    if (A < 0 || A >= this.length) throw new RangeError("Index out of range");
    if (C < 0) throw new RangeError("sourceEnd out of bounds");
    C > this.length && (C = this.length), f.length - l < C - A && (C = f.length - l + A);
    const W = C - A;
    return this === f && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(l, A, C) : Uint8Array.prototype.set.call(
      f,
      this.subarray(A, C),
      l
    ), W;
  }, a.prototype.fill = function(f, l, A, C) {
    if (typeof f == "string") {
      if (typeof l == "string" ? (C = l, l = 0, A = this.length) : typeof A == "string" && (C = A, A = this.length), C !== void 0 && typeof C != "string")
        throw new TypeError("encoding must be a string");
      if (typeof C == "string" && !a.isEncoding(C))
        throw new TypeError("Unknown encoding: " + C);
      if (f.length === 1) {
        const D = f.charCodeAt(0);
        (C === "utf8" && D < 128 || C === "latin1") && (f = D);
      }
    } else typeof f == "number" ? f = f & 255 : typeof f == "boolean" && (f = Number(f));
    if (l < 0 || this.length < l || this.length < A)
      throw new RangeError("Out of range index");
    if (A <= l)
      return this;
    l = l >>> 0, A = A === void 0 ? this.length : A >>> 0, f || (f = 0);
    let W;
    if (typeof f == "number")
      for (W = l; W < A; ++W)
        this[W] = f;
    else {
      const D = a.isBuffer(f) ? f : a.from(f, C), Te = D.length;
      if (Te === 0)
        throw new TypeError('The value "' + f + '" is invalid for argument "value"');
      for (W = 0; W < A - l; ++W)
        this[W + l] = D[W % Te];
    }
    return this;
  };
  const ae = {};
  function fe(d, f, l) {
    ae[d] = class extends l {
      constructor() {
        super(), Object.defineProperty(this, "message", {
          value: f.apply(this, arguments),
          writable: !0,
          configurable: !0
        }), this.name = `${this.name} [${d}]`, this.stack, delete this.name;
      }
      get code() {
        return d;
      }
      set code(C) {
        Object.defineProperty(this, "code", {
          configurable: !0,
          enumerable: !0,
          value: C,
          writable: !0
        });
      }
      toString() {
        return `${this.name} [${d}]: ${this.message}`;
      }
    };
  }
  fe(
    "ERR_BUFFER_OUT_OF_BOUNDS",
    function(d) {
      return d ? `${d} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    },
    RangeError
  ), fe(
    "ERR_INVALID_ARG_TYPE",
    function(d, f) {
      return `The "${d}" argument must be of type number. Received type ${typeof f}`;
    },
    TypeError
  ), fe(
    "ERR_OUT_OF_RANGE",
    function(d, f, l) {
      let A = `The value of "${d}" is out of range.`, C = l;
      return Number.isInteger(l) && Math.abs(l) > 2 ** 32 ? C = _(String(l)) : typeof l == "bigint" && (C = String(l), (l > BigInt(2) ** BigInt(32) || l < -(BigInt(2) ** BigInt(32))) && (C = _(C)), C += "n"), A += ` It must be ${f}. Received ${C}`, A;
    },
    RangeError
  );
  function _(d) {
    let f = "", l = d.length;
    const A = d[0] === "-" ? 1 : 0;
    for (; l >= A + 4; l -= 3)
      f = `_${d.slice(l - 3, l)}${f}`;
    return `${d.slice(0, l)}${f}`;
  }
  function E(d, f, l) {
    M(f, "offset"), (d[f] === void 0 || d[f + l] === void 0) && F(f, d.length - (l + 1));
  }
  function S(d, f, l, A, C, W) {
    if (d > l || d < f) {
      const D = typeof f == "bigint" ? "n" : "";
      let Te;
      throw f === 0 || f === BigInt(0) ? Te = `>= 0${D} and < 2${D} ** ${(W + 1) * 8}${D}` : Te = `>= -(2${D} ** ${(W + 1) * 8 - 1}${D}) and < 2 ** ${(W + 1) * 8 - 1}${D}`, new ae.ERR_OUT_OF_RANGE("value", Te, d);
    }
    E(A, C, W);
  }
  function M(d, f) {
    if (typeof d != "number")
      throw new ae.ERR_INVALID_ARG_TYPE(f, "number", d);
  }
  function F(d, f, l) {
    throw Math.floor(d) !== d ? (M(d, l), new ae.ERR_OUT_OF_RANGE("offset", "an integer", d)) : f < 0 ? new ae.ERR_BUFFER_OUT_OF_BOUNDS() : new ae.ERR_OUT_OF_RANGE(
      "offset",
      `>= 0 and <= ${f}`,
      d
    );
  }
  const H = /[^+/0-9A-Za-z-_]/g;
  function h(d) {
    if (d = d.split("=")[0], d = d.trim().replace(H, ""), d.length < 2) return "";
    for (; d.length % 4 !== 0; )
      d = d + "=";
    return d;
  }
  function o(d, f) {
    f = f || 1 / 0;
    let l;
    const A = d.length;
    let C = null;
    const W = [];
    for (let D = 0; D < A; ++D) {
      if (l = d.charCodeAt(D), l > 55295 && l < 57344) {
        if (!C) {
          if (l > 56319) {
            (f -= 3) > -1 && W.push(239, 191, 189);
            continue;
          } else if (D + 1 === A) {
            (f -= 3) > -1 && W.push(239, 191, 189);
            continue;
          }
          C = l;
          continue;
        }
        if (l < 56320) {
          (f -= 3) > -1 && W.push(239, 191, 189), C = l;
          continue;
        }
        l = (C - 55296 << 10 | l - 56320) + 65536;
      } else C && (f -= 3) > -1 && W.push(239, 191, 189);
      if (C = null, l < 128) {
        if ((f -= 1) < 0) break;
        W.push(l);
      } else if (l < 2048) {
        if ((f -= 2) < 0) break;
        W.push(
          l >> 6 | 192,
          l & 63 | 128
        );
      } else if (l < 65536) {
        if ((f -= 3) < 0) break;
        W.push(
          l >> 12 | 224,
          l >> 6 & 63 | 128,
          l & 63 | 128
        );
      } else if (l < 1114112) {
        if ((f -= 4) < 0) break;
        W.push(
          l >> 18 | 240,
          l >> 12 & 63 | 128,
          l >> 6 & 63 | 128,
          l & 63 | 128
        );
      } else
        throw new Error("Invalid code point");
    }
    return W;
  }
  function u(d) {
    const f = [];
    for (let l = 0; l < d.length; ++l)
      f.push(d.charCodeAt(l) & 255);
    return f;
  }
  function y(d, f) {
    let l, A, C;
    const W = [];
    for (let D = 0; D < d.length && !((f -= 2) < 0); ++D)
      l = d.charCodeAt(D), A = l >> 8, C = l % 256, W.push(C), W.push(A);
    return W;
  }
  function x(d) {
    return e.toByteArray(h(d));
  }
  function v(d, f, l, A) {
    let C;
    for (C = 0; C < A && !(C + l >= f.length || C >= d.length); ++C)
      f[C + l] = d[C];
    return C;
  }
  function L(d, f) {
    return d instanceof f || d != null && d.constructor != null && d.constructor.name != null && d.constructor.name === f.name;
  }
  function oe(d) {
    return d !== d;
  }
  const me = function() {
    const d = "0123456789abcdef", f = new Array(256);
    for (let l = 0; l < 16; ++l) {
      const A = l * 16;
      for (let C = 0; C < 16; ++C)
        f[A + C] = d[l] + d[C];
    }
    return f;
  }();
  function ge(d) {
    return typeof BigInt > "u" ? Be : d;
  }
  function Be() {
    throw new Error("BigInt not supported");
  }
})(_c);
var zs;
(function(t) {
  t[t.SysFatal = 1] = "SysFatal", t[t.SysTransient = 2] = "SysTransient", t[t.DestinationInvalid = 3] = "DestinationInvalid", t[t.CanisterReject = 4] = "CanisterReject", t[t.CanisterError = 5] = "CanisterError";
})(zs || (zs = {}));
const Mi = "abcdefghijklmnopqrstuvwxyz234567", tn = /* @__PURE__ */ Object.create(null);
for (let t = 0; t < Mi.length; t++)
  tn[Mi[t]] = t;
tn[0] = tn.o;
tn[1] = tn.i;
function f0(t) {
  let e = 0, r = 0, n = "";
  function i(s) {
    return e < 0 ? r |= s >> -e : r = s << e & 248, e > 3 ? (e -= 8, 1) : (e < 4 && (n += Mi[r >> 3], e += 5), 0);
  }
  for (let s = 0; s < t.length; )
    s += i(t[s]);
  return n + (e < 0 ? Mi[r >> 3] : "");
}
function l0(t) {
  let e = 0, r = 0;
  const n = new Uint8Array(t.length * 4 / 3 | 0);
  let i = 0;
  function s(c) {
    let a = tn[c.toLowerCase()];
    if (a === void 0)
      throw new Error(`Invalid character: ${JSON.stringify(c)}`);
    a <<= 3, r |= a >>> e, e += 5, e >= 8 && (n[i++] = r, e -= 8, e > 0 ? r = a << 5 - e & 255 : r = 0);
  }
  for (const c of t)
    s(c);
  return n.slice(0, i);
}
const h0 = new Uint32Array([
  0,
  1996959894,
  3993919788,
  2567524794,
  124634137,
  1886057615,
  3915621685,
  2657392035,
  249268274,
  2044508324,
  3772115230,
  2547177864,
  162941995,
  2125561021,
  3887607047,
  2428444049,
  498536548,
  1789927666,
  4089016648,
  2227061214,
  450548861,
  1843258603,
  4107580753,
  2211677639,
  325883990,
  1684777152,
  4251122042,
  2321926636,
  335633487,
  1661365465,
  4195302755,
  2366115317,
  997073096,
  1281953886,
  3579855332,
  2724688242,
  1006888145,
  1258607687,
  3524101629,
  2768942443,
  901097722,
  1119000684,
  3686517206,
  2898065728,
  853044451,
  1172266101,
  3705015759,
  2882616665,
  651767980,
  1373503546,
  3369554304,
  3218104598,
  565507253,
  1454621731,
  3485111705,
  3099436303,
  671266974,
  1594198024,
  3322730930,
  2970347812,
  795835527,
  1483230225,
  3244367275,
  3060149565,
  1994146192,
  31158534,
  2563907772,
  4023717930,
  1907459465,
  112637215,
  2680153253,
  3904427059,
  2013776290,
  251722036,
  2517215374,
  3775830040,
  2137656763,
  141376813,
  2439277719,
  3865271297,
  1802195444,
  476864866,
  2238001368,
  4066508878,
  1812370925,
  453092731,
  2181625025,
  4111451223,
  1706088902,
  314042704,
  2344532202,
  4240017532,
  1658658271,
  366619977,
  2362670323,
  4224994405,
  1303535960,
  984961486,
  2747007092,
  3569037538,
  1256170817,
  1037604311,
  2765210733,
  3554079995,
  1131014506,
  879679996,
  2909243462,
  3663771856,
  1141124467,
  855842277,
  2852801631,
  3708648649,
  1342533948,
  654459306,
  3188396048,
  3373015174,
  1466479909,
  544179635,
  3110523913,
  3462522015,
  1591671054,
  702138776,
  2966460450,
  3352799412,
  1504918807,
  783551873,
  3082640443,
  3233442989,
  3988292384,
  2596254646,
  62317068,
  1957810842,
  3939845945,
  2647816111,
  81470997,
  1943803523,
  3814918930,
  2489596804,
  225274430,
  2053790376,
  3826175755,
  2466906013,
  167816743,
  2097651377,
  4027552580,
  2265490386,
  503444072,
  1762050814,
  4150417245,
  2154129355,
  426522225,
  1852507879,
  4275313526,
  2312317920,
  282753626,
  1742555852,
  4189708143,
  2394877945,
  397917763,
  1622183637,
  3604390888,
  2714866558,
  953729732,
  1340076626,
  3518719985,
  2797360999,
  1068828381,
  1219638859,
  3624741850,
  2936675148,
  906185462,
  1090812512,
  3747672003,
  2825379669,
  829329135,
  1181335161,
  3412177804,
  3160834842,
  628085408,
  1382605366,
  3423369109,
  3138078467,
  570562233,
  1426400815,
  3317316542,
  2998733608,
  733239954,
  1555261956,
  3268935591,
  3050360625,
  752459403,
  1541320221,
  2607071920,
  3965973030,
  1969922972,
  40735498,
  2617837225,
  3943577151,
  1913087877,
  83908371,
  2512341634,
  3803740692,
  2075208622,
  213261112,
  2463272603,
  3855990285,
  2094854071,
  198958881,
  2262029012,
  4057260610,
  1759359992,
  534414190,
  2176718541,
  4139329115,
  1873836001,
  414664567,
  2282248934,
  4279200368,
  1711684554,
  285281116,
  2405801727,
  4167216745,
  1634467795,
  376229701,
  2685067896,
  3608007406,
  1308918612,
  956543938,
  2808555105,
  3495958263,
  1231636301,
  1047427035,
  2932959818,
  3654703836,
  1088359270,
  936918e3,
  2847714899,
  3736837829,
  1202900863,
  817233897,
  3183342108,
  3401237130,
  1404277552,
  615818150,
  3134207493,
  3453421203,
  1423857449,
  601450431,
  3009837614,
  3294710456,
  1567103746,
  711928724,
  3020668471,
  3272380065,
  1510334235,
  755167117
]);
function d0(t) {
  const e = new Uint8Array(t);
  let r = -1;
  for (let n = 0; n < e.length; n++) {
    const s = (e[n] ^ r) & 255;
    r = h0[s] ^ r >>> 8;
  }
  return (r ^ -1) >>> 0;
}
function p0(t) {
  return t instanceof Uint8Array || t != null && typeof t == "object" && t.constructor.name === "Uint8Array";
}
function Ec(t, ...e) {
  if (!p0(t))
    throw new Error("Uint8Array expected");
  if (e.length > 0 && !e.includes(t.length))
    throw new Error(`Uint8Array expected of length ${e}, not of length=${t.length}`);
}
function ea(t, e = !0) {
  if (t.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (e && t.finished)
    throw new Error("Hash#digest() has already been called");
}
function m0(t, e) {
  Ec(t);
  const r = e.outputLen;
  if (t.length < r)
    throw new Error(`digestInto() expects output buffer of length at least ${r}`);
}
const zr = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const _s = (t) => new DataView(t.buffer, t.byteOffset, t.byteLength), zt = (t, e) => t << 32 - e | t >>> e;
new Uint8Array(new Uint32Array([287454020]).buffer)[0];
function g0(t) {
  if (typeof t != "string")
    throw new Error(`utf8ToBytes expected string, got ${typeof t}`);
  return new Uint8Array(new TextEncoder().encode(t));
}
function Tc(t) {
  return typeof t == "string" && (t = g0(t)), Ec(t), t;
}
class y0 {
  // Safe version that clones internal state
  clone() {
    return this._cloneInto();
  }
}
function Eo(t) {
  const e = (n) => t().update(Tc(n)).digest(), r = t();
  return e.outputLen = r.outputLen, e.blockLen = r.blockLen, e.create = () => t(), e;
}
function Ac(t = 32) {
  if (zr && typeof zr.getRandomValues == "function")
    return zr.getRandomValues(new Uint8Array(t));
  if (zr && typeof zr.randomBytes == "function")
    return zr.randomBytes(t);
  throw new Error("crypto.getRandomValues must be defined");
}
function w0(t, e, r, n) {
  if (typeof t.setBigUint64 == "function")
    return t.setBigUint64(e, r, n);
  const i = BigInt(32), s = BigInt(4294967295), c = Number(r >> i & s), a = Number(r & s), p = n ? 4 : 0, g = n ? 0 : 4;
  t.setUint32(e + p, c, n), t.setUint32(e + g, a, n);
}
const b0 = (t, e, r) => t & e ^ ~t & r, _0 = (t, e, r) => t & e ^ t & r ^ e & r;
class Sc extends y0 {
  constructor(e, r, n, i) {
    super(), this.blockLen = e, this.outputLen = r, this.padOffset = n, this.isLE = i, this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.buffer = new Uint8Array(e), this.view = _s(this.buffer);
  }
  update(e) {
    ea(this);
    const { view: r, buffer: n, blockLen: i } = this;
    e = Tc(e);
    const s = e.length;
    for (let c = 0; c < s; ) {
      const a = Math.min(i - this.pos, s - c);
      if (a === i) {
        const p = _s(e);
        for (; i <= s - c; c += i)
          this.process(p, c);
        continue;
      }
      n.set(e.subarray(c, c + a), this.pos), this.pos += a, c += a, this.pos === i && (this.process(r, 0), this.pos = 0);
    }
    return this.length += e.length, this.roundClean(), this;
  }
  digestInto(e) {
    ea(this), m0(e, this), this.finished = !0;
    const { buffer: r, view: n, blockLen: i, isLE: s } = this;
    let { pos: c } = this;
    r[c++] = 128, this.buffer.subarray(c).fill(0), this.padOffset > i - c && (this.process(n, 0), c = 0);
    for (let T = c; T < i; T++)
      r[T] = 0;
    w0(n, i - 8, BigInt(this.length * 8), s), this.process(n, 0);
    const a = _s(e), p = this.outputLen;
    if (p % 4)
      throw new Error("_sha2: outputLen should be aligned to 32bit");
    const g = p / 4, b = this.get();
    if (g > b.length)
      throw new Error("_sha2: outputLen bigger than state");
    for (let T = 0; T < g; T++)
      a.setUint32(4 * T, b[T], s);
  }
  digest() {
    const { buffer: e, outputLen: r } = this;
    this.digestInto(e);
    const n = e.slice(0, r);
    return this.destroy(), n;
  }
  _cloneInto(e) {
    e || (e = new this.constructor()), e.set(...this.get());
    const { blockLen: r, buffer: n, length: i, finished: s, destroyed: c, pos: a } = this;
    return e.length = i, e.pos = a, e.finished = s, e.destroyed = c, i % r && e.buffer.set(n), e;
  }
}
const x0 = /* @__PURE__ */ new Uint32Array([
  1116352408,
  1899447441,
  3049323471,
  3921009573,
  961987163,
  1508970993,
  2453635748,
  2870763221,
  3624381080,
  310598401,
  607225278,
  1426881987,
  1925078388,
  2162078206,
  2614888103,
  3248222580,
  3835390401,
  4022224774,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  2554220882,
  2821834349,
  2952996808,
  3210313671,
  3336571891,
  3584528711,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  2177026350,
  2456956037,
  2730485921,
  2820302411,
  3259730800,
  3345764771,
  3516065817,
  3600352804,
  4094571909,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  2227730452,
  2361852424,
  2428436474,
  2756734187,
  3204031479,
  3329325298
]), hr = /* @__PURE__ */ new Uint32Array([
  1779033703,
  3144134277,
  1013904242,
  2773480762,
  1359893119,
  2600822924,
  528734635,
  1541459225
]), dr = /* @__PURE__ */ new Uint32Array(64);
class Bc extends Sc {
  constructor() {
    super(64, 32, 8, !1), this.A = hr[0] | 0, this.B = hr[1] | 0, this.C = hr[2] | 0, this.D = hr[3] | 0, this.E = hr[4] | 0, this.F = hr[5] | 0, this.G = hr[6] | 0, this.H = hr[7] | 0;
  }
  get() {
    const { A: e, B: r, C: n, D: i, E: s, F: c, G: a, H: p } = this;
    return [e, r, n, i, s, c, a, p];
  }
  // prettier-ignore
  set(e, r, n, i, s, c, a, p) {
    this.A = e | 0, this.B = r | 0, this.C = n | 0, this.D = i | 0, this.E = s | 0, this.F = c | 0, this.G = a | 0, this.H = p | 0;
  }
  process(e, r) {
    for (let T = 0; T < 16; T++, r += 4)
      dr[T] = e.getUint32(r, !1);
    for (let T = 16; T < 64; T++) {
      const O = dr[T - 15], B = dr[T - 2], m = zt(O, 7) ^ zt(O, 18) ^ O >>> 3, I = zt(B, 17) ^ zt(B, 19) ^ B >>> 10;
      dr[T] = I + dr[T - 7] + m + dr[T - 16] | 0;
    }
    let { A: n, B: i, C: s, D: c, E: a, F: p, G: g, H: b } = this;
    for (let T = 0; T < 64; T++) {
      const O = zt(a, 6) ^ zt(a, 11) ^ zt(a, 25), B = b + O + b0(a, p, g) + x0[T] + dr[T] | 0, I = (zt(n, 2) ^ zt(n, 13) ^ zt(n, 22)) + _0(n, i, s) | 0;
      b = g, g = p, p = a, a = c + B | 0, c = s, s = i, i = n, n = B + I | 0;
    }
    n = n + this.A | 0, i = i + this.B | 0, s = s + this.C | 0, c = c + this.D | 0, a = a + this.E | 0, p = p + this.F | 0, g = g + this.G | 0, b = b + this.H | 0, this.set(n, i, s, c, a, p, g, b);
  }
  roundClean() {
    dr.fill(0);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
  }
}
class E0 extends Bc {
  constructor() {
    super(), this.A = -1056596264, this.B = 914150663, this.C = 812702999, this.D = -150054599, this.E = -4191439, this.F = 1750603025, this.G = 1694076839, this.H = -1090891868, this.outputLen = 28;
  }
}
const To = /* @__PURE__ */ Eo(() => new Bc()), T0 = /* @__PURE__ */ Eo(() => new E0());
function A0(t) {
  return T0.create().update(new Uint8Array(t)).digest();
}
const Wn = "__principal__", S0 = 2, ta = 4, B0 = "aaaaa-aa", v0 = (t) => {
  var e;
  return new Uint8Array(((e = t.match(/.{1,2}/g)) !== null && e !== void 0 ? e : []).map((r) => parseInt(r, 16)));
}, N0 = (t) => t.reduce((e, r) => e + r.toString(16).padStart(2, "0"), "");
let Me = class li {
  constructor(e) {
    this._arr = e, this._isPrincipal = !0;
  }
  static anonymous() {
    return new this(new Uint8Array([ta]));
  }
  /**
   * Utility method, returning the principal representing the management canister, decoded from the hex string `'aaaaa-aa'`
   * @returns {Principal} principal of the management canister
   */
  static managementCanister() {
    return this.fromHex(B0);
  }
  static selfAuthenticating(e) {
    const r = A0(e);
    return new this(new Uint8Array([...r, S0]));
  }
  static from(e) {
    if (typeof e == "string")
      return li.fromText(e);
    if (Object.getPrototypeOf(e) === Uint8Array.prototype)
      return new li(e);
    if (typeof e == "object" && e !== null && e._isPrincipal === !0)
      return new li(e._arr);
    throw new Error(`Impossible to convert ${JSON.stringify(e)} to Principal.`);
  }
  static fromHex(e) {
    return new this(v0(e));
  }
  static fromText(e) {
    let r = e;
    if (e.includes(Wn)) {
      const c = JSON.parse(e);
      Wn in c && (r = c[Wn]);
    }
    const n = r.toLowerCase().replace(/-/g, "");
    let i = l0(n);
    i = i.slice(4, i.length);
    const s = new this(i);
    if (s.toText() !== r)
      throw new Error(`Principal "${s.toText()}" does not have a valid checksum (original value "${r}" may not be a valid Principal ID).`);
    return s;
  }
  static fromUint8Array(e) {
    return new this(e);
  }
  isAnonymous() {
    return this._arr.byteLength === 1 && this._arr[0] === ta;
  }
  toUint8Array() {
    return this._arr;
  }
  toHex() {
    return N0(this._arr).toUpperCase();
  }
  toText() {
    const e = new ArrayBuffer(4);
    new DataView(e).setUint32(0, d0(this._arr));
    const n = new Uint8Array(e), i = Uint8Array.from(this._arr), s = new Uint8Array([...n, ...i]), a = f0(s).match(/.{1,5}/g);
    if (!a)
      throw new Error();
    return a.join("-");
  }
  toString() {
    return this.toText();
  }
  /**
   * Serializes to JSON
   * @returns {JsonnablePrincipal} a JSON object with a single key, {@link JSON_KEY_PRINCIPAL}, whose value is the principal as a string
   */
  toJSON() {
    return { [Wn]: this.toText() };
  }
  /**
   * Utility method taking a Principal to compare against. Used for determining canister ranges in certificate verification
   * @param {Principal} other - a {@link Principal} to compare
   * @returns {'lt' | 'eq' | 'gt'} `'lt' | 'eq' | 'gt'` a string, representing less than, equal to, or greater than
   */
  compareTo(e) {
    for (let r = 0; r < Math.min(this._arr.length, e._arr.length); r++) {
      if (this._arr[r] < e._arr[r])
        return "lt";
      if (this._arr[r] > e._arr[r])
        return "gt";
    }
    return this._arr.length < e._arr.length ? "lt" : this._arr.length > e._arr.length ? "gt" : "eq";
  }
  /**
   * Utility method checking whether a provided Principal is less than or equal to the current one using the {@link Principal.compareTo} method
   * @param other a {@link Principal} to compare
   * @returns {boolean} boolean
   */
  ltEq(e) {
    const r = this.compareTo(e);
    return r == "lt" || r == "eq";
  }
  /**
   * Utility method checking whether a provided Principal is greater than or equal to the current one using the {@link Principal.compareTo} method
   * @param other a {@link Principal} to compare
   * @returns {boolean} boolean
   */
  gtEq(e) {
    const r = this.compareTo(e);
    return r == "gt" || r == "eq";
  }
};
class wt extends Error {
  constructor(e) {
    super(e), this.message = e, Object.setPrototypeOf(this, wt.prototype);
  }
}
function He(...t) {
  const e = new Uint8Array(t.reduce((n, i) => n + i.byteLength, 0));
  let r = 0;
  for (const n of t)
    e.set(new Uint8Array(n), r), r += n.byteLength;
  return e;
}
class an {
  /**
   * Creates a new instance of a pipe
   * @param buffer an optional buffer to start with
   * @param length an optional amount of bytes to use for the length.
   */
  constructor(e, r = (e == null ? void 0 : e.byteLength) || 0) {
    this._buffer = Ds(e || new ArrayBuffer(0)), this._view = new Uint8Array(this._buffer, 0, r);
  }
  get buffer() {
    return Ds(this._view.slice());
  }
  get byteLength() {
    return this._view.byteLength;
  }
  /**
   * Read `num` number of bytes from the front of the pipe.
   * @param num The number of bytes to read.
   */
  read(e) {
    const r = this._view.subarray(0, e);
    return this._view = this._view.subarray(e), r.slice().buffer;
  }
  readUint8() {
    const e = this._view[0];
    return this._view = this._view.subarray(1), e;
  }
  /**
   * Write a buffer to the end of the pipe.
   * @param buf The bytes to write.
   */
  write(e) {
    const r = new Uint8Array(e), n = this._view.byteLength;
    this._view.byteOffset + this._view.byteLength + r.byteLength >= this._buffer.byteLength ? this.alloc(r.byteLength) : this._view = new Uint8Array(this._buffer, this._view.byteOffset, this._view.byteLength + r.byteLength), this._view.set(r, n);
  }
  /**
   * Whether or not there is more data to read from the buffer
   */
  get end() {
    return this._view.byteLength === 0;
  }
  /**
   * Allocate a fixed amount of memory in the buffer. This does not affect the view.
   * @param amount A number of bytes to add to the buffer.
   */
  alloc(e) {
    const r = new ArrayBuffer((this._buffer.byteLength + e) * 1.2 | 0), n = new Uint8Array(r, 0, this._view.byteLength + e);
    n.set(this._view), this._buffer = r, this._view = n;
  }
}
function xs(t) {
  return new DataView(t.buffer, t.byteOffset, t.byteLength).buffer;
}
function Ds(t) {
  return t instanceof Uint8Array ? xs(t) : t instanceof ArrayBuffer ? t : Array.isArray(t) ? xs(new Uint8Array(t)) : "buffer" in t ? Ds(t.buffer) : xs(new Uint8Array(t));
}
function R0(t) {
  const r = new TextEncoder().encode(t);
  let n = 0;
  for (const i of r)
    n = (n * 223 + i) % 2 ** 32;
  return n;
}
function Jt(t) {
  if (/^_\d+_$/.test(t) || /^_0x[0-9a-fA-F]+_$/.test(t)) {
    const e = +t.slice(1, -1);
    if (Number.isSafeInteger(e) && e >= 0 && e < 2 ** 32)
      return e;
  }
  return R0(t);
}
function vc() {
  throw new Error("unexpected end of buffer");
}
function Mr(t, e) {
  return t.byteLength < e && vc(), t.read(e);
}
function kr(t) {
  const e = t.readUint8();
  return e === void 0 && vc(), e;
}
function De(t) {
  if (typeof t == "number" && (t = BigInt(t)), t < BigInt(0))
    throw new Error("Cannot leb encode negative values.");
  const e = (t === BigInt(0) ? 0 : Math.ceil(Math.log2(Number(t)))) + 1, r = new an(new ArrayBuffer(e), 0);
  for (; ; ) {
    const n = Number(t & BigInt(127));
    if (t /= BigInt(128), t === BigInt(0)) {
      r.write(new Uint8Array([n]));
      break;
    } else
      r.write(new Uint8Array([n | 128]));
  }
  return r.buffer;
}
function nt(t) {
  let e = BigInt(1), r = BigInt(0), n;
  do
    n = kr(t), r += BigInt(n & 127).valueOf() * e, e *= BigInt(128);
  while (n >= 128);
  return r;
}
function tt(t) {
  typeof t == "number" && (t = BigInt(t));
  const e = t < BigInt(0);
  e && (t = -t - BigInt(1));
  const r = (t === BigInt(0) ? 0 : Math.ceil(Math.log2(Number(t)))) + 1, n = new an(new ArrayBuffer(r), 0);
  for (; ; ) {
    const s = i(t);
    if (t /= BigInt(128), e && t === BigInt(0) && s & 64 || !e && t === BigInt(0) && !(s & 64)) {
      n.write(new Uint8Array([s]));
      break;
    } else
      n.write(new Uint8Array([s | 128]));
  }
  function i(s) {
    const c = s % BigInt(128);
    return Number(e ? BigInt(128) - c - BigInt(1) : c);
  }
  return n.buffer;
}
function yr(t) {
  const e = new Uint8Array(t.buffer);
  let r = 0;
  for (; r < e.byteLength; r++)
    if (e[r] < 128) {
      if (!(e[r] & 64))
        return nt(t);
      break;
    }
  const n = new Uint8Array(Mr(t, r + 1));
  let i = BigInt(0);
  for (let s = n.byteLength - 1; s >= 0; s--)
    i = i * BigInt(128) + BigInt(128 - (n[s] & 127) - 1);
  return -i - BigInt(1);
}
function O0(t, e) {
  if (BigInt(t) < BigInt(0))
    throw new Error("Cannot write negative values.");
  return Nc(t, e);
}
function Nc(t, e) {
  t = BigInt(t);
  const r = new an(new ArrayBuffer(Math.min(1, e)), 0);
  let n = 0, i = BigInt(256), s = BigInt(0), c = Number(t % i);
  for (r.write(new Uint8Array([c])); ++n < e; )
    t < 0 && s === BigInt(0) && c !== 0 && (s = BigInt(1)), c = Number((t / i - s) % BigInt(256)), r.write(new Uint8Array([c])), i *= BigInt(256);
  return r.buffer;
}
function Rc(t, e) {
  let r = BigInt(kr(t)), n = BigInt(1), i = 0;
  for (; ++i < e; ) {
    n *= BigInt(256);
    const s = BigInt(kr(t));
    r = r + n * s;
  }
  return r;
}
function I0(t, e) {
  let r = Rc(t, e);
  const n = BigInt(2) ** (BigInt(8) * BigInt(e - 1) + BigInt(7));
  return r >= n && (r -= n * BigInt(2)), r;
}
function Ws(t) {
  const e = BigInt(t);
  if (t < 0)
    throw new RangeError("Input must be non-negative");
  return BigInt(1) << e;
}
const hi = "DIDL", ra = 400;
function An(t, e, r) {
  return t.map((n, i) => r(n, e[i]));
}
class U0 {
  constructor() {
    this._typs = [], this._idx = /* @__PURE__ */ new Map();
  }
  has(e) {
    return this._idx.has(e.name);
  }
  add(e, r) {
    const n = this._typs.length;
    this._idx.set(e.name, n), this._typs.push(r);
  }
  merge(e, r) {
    const n = this._idx.get(e.name), i = this._idx.get(r);
    if (n === void 0)
      throw new Error("Missing type index for " + e);
    if (i === void 0)
      throw new Error("Missing type index for " + r);
    this._typs[n] = this._typs[i], this._typs.splice(i, 1), this._idx.delete(r);
  }
  encode() {
    const e = De(this._typs.length), r = He(...this._typs);
    return He(e, r);
  }
  indexOf(e) {
    if (!this._idx.has(e))
      throw new Error("Missing type index for " + e);
    return tt(this._idx.get(e) || 0);
  }
}
class F0 {
  visitType(e, r) {
    throw new Error("Not implemented");
  }
  visitPrimitive(e, r) {
    return this.visitType(e, r);
  }
  visitEmpty(e, r) {
    return this.visitPrimitive(e, r);
  }
  visitBool(e, r) {
    return this.visitPrimitive(e, r);
  }
  visitNull(e, r) {
    return this.visitPrimitive(e, r);
  }
  visitReserved(e, r) {
    return this.visitPrimitive(e, r);
  }
  visitText(e, r) {
    return this.visitPrimitive(e, r);
  }
  visitNumber(e, r) {
    return this.visitPrimitive(e, r);
  }
  visitInt(e, r) {
    return this.visitNumber(e, r);
  }
  visitNat(e, r) {
    return this.visitNumber(e, r);
  }
  visitFloat(e, r) {
    return this.visitPrimitive(e, r);
  }
  visitFixedInt(e, r) {
    return this.visitNumber(e, r);
  }
  visitFixedNat(e, r) {
    return this.visitNumber(e, r);
  }
  visitPrincipal(e, r) {
    return this.visitPrimitive(e, r);
  }
  visitConstruct(e, r) {
    return this.visitType(e, r);
  }
  visitVec(e, r, n) {
    return this.visitConstruct(e, n);
  }
  visitOpt(e, r, n) {
    return this.visitConstruct(e, n);
  }
  visitRecord(e, r, n) {
    return this.visitConstruct(e, n);
  }
  visitTuple(e, r, n) {
    const i = r.map((s, c) => [`_${c}_`, s]);
    return this.visitRecord(e, i, n);
  }
  visitVariant(e, r, n) {
    return this.visitConstruct(e, n);
  }
  visitRec(e, r, n) {
    return this.visitConstruct(r, n);
  }
  visitFunc(e, r) {
    return this.visitConstruct(e, r);
  }
  visitService(e, r) {
    return this.visitConstruct(e, r);
  }
}
class Ki {
  /* Display type name */
  display() {
    return this.name;
  }
  valueToString(e) {
    return Xe(e);
  }
  /* Implement `T` in the IDL spec, only needed for non-primitive types */
  buildTypeTable(e) {
    e.has(this) || this._buildTypeTableImpl(e);
  }
}
class Ot extends Ki {
  checkType(e) {
    if (this.name !== e.name)
      throw new Error(`type mismatch: type on the wire ${e.name}, expect type ${this.name}`);
    return e;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _buildTypeTableImpl(e) {
  }
}
class Ar extends Ki {
  checkType(e) {
    if (e instanceof Sr) {
      const r = e.getType();
      if (typeof r > "u")
        throw new Error("type mismatch with uninitialized type");
      return r;
    }
    throw new Error(`type mismatch: type on the wire ${e.name}, expect type ${this.name}`);
  }
  encodeType(e) {
    return e.indexOf(this.name);
  }
}
class Oc extends Ot {
  accept(e, r) {
    return e.visitEmpty(this, r);
  }
  covariant(e) {
    throw new Error(`Invalid ${this.display()} argument: ${Xe(e)}`);
  }
  encodeValue() {
    throw new Error("Empty cannot appear as a function argument");
  }
  valueToString() {
    throw new Error("Empty cannot appear as a value");
  }
  encodeType() {
    return tt(
      -17
      /* IDLTypeIds.Empty */
    );
  }
  decodeValue() {
    throw new Error("Empty cannot appear as an output");
  }
  get name() {
    return "empty";
  }
}
class Ic extends Ki {
  checkType(e) {
    throw new Error("Method not implemented for unknown.");
  }
  accept(e, r) {
    throw e.visitType(this, r);
  }
  covariant(e) {
    throw new Error(`Invalid ${this.display()} argument: ${Xe(e)}`);
  }
  encodeValue() {
    throw new Error("Unknown cannot appear as a function argument");
  }
  valueToString() {
    throw new Error("Unknown cannot appear as a value");
  }
  encodeType() {
    throw new Error("Unknown cannot be serialized");
  }
  decodeValue(e, r) {
    let n = r.decodeValue(e, r);
    Object(n) !== n && (n = Object(n));
    let i;
    return r instanceof Sr ? i = () => r.getType() : i = () => r, Object.defineProperty(n, "type", {
      value: i,
      writable: !0,
      enumerable: !1,
      configurable: !0
    }), n;
  }
  _buildTypeTableImpl() {
    throw new Error("Unknown cannot be serialized");
  }
  get name() {
    return "Unknown";
  }
}
class Uc extends Ot {
  accept(e, r) {
    return e.visitBool(this, r);
  }
  covariant(e) {
    if (typeof e == "boolean")
      return !0;
    throw new Error(`Invalid ${this.display()} argument: ${Xe(e)}`);
  }
  encodeValue(e) {
    return new Uint8Array([e ? 1 : 0]);
  }
  encodeType() {
    return tt(
      -2
      /* IDLTypeIds.Bool */
    );
  }
  decodeValue(e, r) {
    switch (this.checkType(r), kr(e)) {
      case 0:
        return !1;
      case 1:
        return !0;
      default:
        throw new Error("Boolean value out of range");
    }
  }
  get name() {
    return "bool";
  }
}
class Fc extends Ot {
  accept(e, r) {
    return e.visitNull(this, r);
  }
  covariant(e) {
    if (e === null)
      return !0;
    throw new Error(`Invalid ${this.display()} argument: ${Xe(e)}`);
  }
  encodeValue() {
    return new ArrayBuffer(0);
  }
  encodeType() {
    return tt(
      -1
      /* IDLTypeIds.Null */
    );
  }
  decodeValue(e, r) {
    return this.checkType(r), null;
  }
  get name() {
    return "null";
  }
}
class ki extends Ot {
  accept(e, r) {
    return e.visitReserved(this, r);
  }
  covariant(e) {
    return !0;
  }
  encodeValue() {
    return new ArrayBuffer(0);
  }
  encodeType() {
    return tt(
      -16
      /* IDLTypeIds.Reserved */
    );
  }
  decodeValue(e, r) {
    return r.name !== this.name && r.decodeValue(e, r), null;
  }
  get name() {
    return "reserved";
  }
}
class Pc extends Ot {
  accept(e, r) {
    return e.visitText(this, r);
  }
  covariant(e) {
    if (typeof e == "string")
      return !0;
    throw new Error(`Invalid ${this.display()} argument: ${Xe(e)}`);
  }
  encodeValue(e) {
    const r = new TextEncoder().encode(e), n = De(r.byteLength);
    return He(n, r);
  }
  encodeType() {
    return tt(
      -15
      /* IDLTypeIds.Text */
    );
  }
  decodeValue(e, r) {
    this.checkType(r);
    const n = nt(e), i = Mr(e, Number(n));
    return new TextDecoder("utf8", { fatal: !0 }).decode(i);
  }
  get name() {
    return "text";
  }
  valueToString(e) {
    return '"' + e + '"';
  }
}
class Cc extends Ot {
  accept(e, r) {
    return e.visitInt(this, r);
  }
  covariant(e) {
    if (typeof e == "bigint" || Number.isInteger(e))
      return !0;
    throw new Error(`Invalid ${this.display()} argument: ${Xe(e)}`);
  }
  encodeValue(e) {
    return tt(e);
  }
  encodeType() {
    return tt(
      -4
      /* IDLTypeIds.Int */
    );
  }
  decodeValue(e, r) {
    return this.checkType(r), yr(e);
  }
  get name() {
    return "int";
  }
  valueToString(e) {
    return e.toString();
  }
}
class Mc extends Ot {
  accept(e, r) {
    return e.visitNat(this, r);
  }
  covariant(e) {
    if (typeof e == "bigint" && e >= BigInt(0) || Number.isInteger(e) && e >= 0)
      return !0;
    throw new Error(`Invalid ${this.display()} argument: ${Xe(e)}`);
  }
  encodeValue(e) {
    return De(e);
  }
  encodeType() {
    return tt(
      -3
      /* IDLTypeIds.Nat */
    );
  }
  decodeValue(e, r) {
    return this.checkType(r), nt(e);
  }
  get name() {
    return "nat";
  }
  valueToString(e) {
    return e.toString();
  }
}
class Ao extends Ot {
  constructor(e) {
    if (super(), this._bits = e, e !== 32 && e !== 64)
      throw new Error("not a valid float type");
  }
  accept(e, r) {
    return e.visitFloat(this, r);
  }
  covariant(e) {
    if (typeof e == "number" || e instanceof Number)
      return !0;
    throw new Error(`Invalid ${this.display()} argument: ${Xe(e)}`);
  }
  encodeValue(e) {
    const r = new ArrayBuffer(this._bits / 8), n = new DataView(r);
    return this._bits === 32 ? n.setFloat32(0, e, !0) : n.setFloat64(0, e, !0), r;
  }
  encodeType() {
    const e = this._bits === 32 ? -13 : -14;
    return tt(e);
  }
  decodeValue(e, r) {
    this.checkType(r);
    const n = Mr(e, this._bits / 8), i = new DataView(n);
    return this._bits === 32 ? i.getFloat32(0, !0) : i.getFloat64(0, !0);
  }
  get name() {
    return "float" + this._bits;
  }
  valueToString(e) {
    return e.toString();
  }
}
class $r extends Ot {
  constructor(e) {
    super(), this._bits = e;
  }
  accept(e, r) {
    return e.visitFixedInt(this, r);
  }
  covariant(e) {
    const r = Ws(this._bits - 1) * BigInt(-1), n = Ws(this._bits - 1) - BigInt(1);
    let i = !1;
    if (typeof e == "bigint")
      i = e >= r && e <= n;
    else if (Number.isInteger(e)) {
      const s = BigInt(e);
      i = s >= r && s <= n;
    } else
      i = !1;
    if (i)
      return !0;
    throw new Error(`Invalid ${this.display()} argument: ${Xe(e)}`);
  }
  encodeValue(e) {
    return Nc(e, this._bits / 8);
  }
  encodeType() {
    const e = Math.log2(this._bits) - 3;
    return tt(-9 - e);
  }
  decodeValue(e, r) {
    this.checkType(r);
    const n = I0(e, this._bits / 8);
    return this._bits <= 32 ? Number(n) : n;
  }
  get name() {
    return `int${this._bits}`;
  }
  valueToString(e) {
    return e.toString();
  }
}
class Er extends Ot {
  constructor(e) {
    super(), this._bits = e;
  }
  accept(e, r) {
    return e.visitFixedNat(this, r);
  }
  covariant(e) {
    const r = Ws(this._bits);
    let n = !1;
    if (typeof e == "bigint" && e >= BigInt(0) ? n = e < r : Number.isInteger(e) && e >= 0 ? n = BigInt(e) < r : n = !1, n)
      return !0;
    throw new Error(`Invalid ${this.display()} argument: ${Xe(e)}`);
  }
  encodeValue(e) {
    return O0(e, this._bits / 8);
  }
  encodeType() {
    const e = Math.log2(this._bits) - 3;
    return tt(-5 - e);
  }
  decodeValue(e, r) {
    this.checkType(r);
    const n = Rc(e, this._bits / 8);
    return this._bits <= 32 ? Number(n) : n;
  }
  get name() {
    return `nat${this._bits}`;
  }
  valueToString(e) {
    return e.toString();
  }
}
class Xi extends Ar {
  constructor(e) {
    super(), this._type = e, this._blobOptimization = !1, e instanceof Er && e._bits === 8 && (this._blobOptimization = !0);
  }
  accept(e, r) {
    return e.visitVec(this, this._type, r);
  }
  covariant(e) {
    const r = this._type instanceof Er ? this._type._bits : this._type instanceof $r ? this._type._bits : 0;
    if (ArrayBuffer.isView(e) && r == e.BYTES_PER_ELEMENT * 8 || Array.isArray(e) && e.every((n, i) => {
      try {
        return this._type.covariant(n);
      } catch (s) {
        throw new Error(`Invalid ${this.display()} argument: 

index ${i} -> ${s.message}`);
      }
    }))
      return !0;
    throw new Error(`Invalid ${this.display()} argument: ${Xe(e)}`);
  }
  encodeValue(e) {
    const r = De(e.length);
    if (this._blobOptimization)
      return He(r, new Uint8Array(e));
    if (ArrayBuffer.isView(e))
      return He(r, new Uint8Array(e.buffer));
    const n = new an(new ArrayBuffer(r.byteLength + e.length), 0);
    n.write(r);
    for (const i of e) {
      const s = this._type.encodeValue(i);
      n.write(new Uint8Array(s));
    }
    return n.buffer;
  }
  _buildTypeTableImpl(e) {
    this._type.buildTypeTable(e);
    const r = tt(
      -19
      /* IDLTypeIds.Vector */
    ), n = this._type.encodeType(e);
    e.add(this, He(r, n));
  }
  decodeValue(e, r) {
    const n = this.checkType(r);
    if (!(n instanceof Xi))
      throw new Error("Not a vector type");
    const i = Number(nt(e));
    if (this._type instanceof Er) {
      if (this._type._bits == 8)
        return new Uint8Array(e.read(i));
      if (this._type._bits == 16)
        return new Uint16Array(e.read(i * 2));
      if (this._type._bits == 32)
        return new Uint32Array(e.read(i * 4));
      if (this._type._bits == 64)
        return new BigUint64Array(e.read(i * 8));
    }
    if (this._type instanceof $r) {
      if (this._type._bits == 8)
        return new Int8Array(e.read(i));
      if (this._type._bits == 16)
        return new Int16Array(e.read(i * 2));
      if (this._type._bits == 32)
        return new Int32Array(e.read(i * 4));
      if (this._type._bits == 64)
        return new BigInt64Array(e.read(i * 8));
    }
    const s = [];
    for (let c = 0; c < i; c++)
      s.push(this._type.decodeValue(e, n._type));
    return s;
  }
  get name() {
    return `vec ${this._type.name}`;
  }
  display() {
    return `vec ${this._type.display()}`;
  }
  valueToString(e) {
    return "vec {" + e.map((n) => this._type.valueToString(n)).join("; ") + "}";
  }
}
class rn extends Ar {
  constructor(e) {
    super(), this._type = e;
  }
  accept(e, r) {
    return e.visitOpt(this, this._type, r);
  }
  covariant(e) {
    try {
      if (Array.isArray(e) && (e.length === 0 || e.length === 1 && this._type.covariant(e[0])))
        return !0;
    } catch (r) {
      throw new Error(`Invalid ${this.display()} argument: ${Xe(e)} 

-> ${r.message}`);
    }
    throw new Error(`Invalid ${this.display()} argument: ${Xe(e)}`);
  }
  encodeValue(e) {
    return e.length === 0 ? new Uint8Array([0]) : He(new Uint8Array([1]), this._type.encodeValue(e[0]));
  }
  _buildTypeTableImpl(e) {
    this._type.buildTypeTable(e);
    const r = tt(
      -18
      /* IDLTypeIds.Opt */
    ), n = this._type.encodeType(e);
    e.add(this, He(r, n));
  }
  decodeValue(e, r) {
    const n = this.checkType(r);
    if (!(n instanceof rn))
      throw new Error("Not an option type");
    switch (kr(e)) {
      case 0:
        return [];
      case 1:
        return [this._type.decodeValue(e, n._type)];
      default:
        throw new Error("Not an option value");
    }
  }
  get name() {
    return `opt ${this._type.name}`;
  }
  display() {
    return `opt ${this._type.display()}`;
  }
  valueToString(e) {
    return e.length === 0 ? "null" : `opt ${this._type.valueToString(e[0])}`;
  }
}
class Un extends Ar {
  constructor(e = {}) {
    super(), this._fields = Object.entries(e).sort((r, n) => Jt(r[0]) - Jt(n[0]));
  }
  accept(e, r) {
    return e.visitRecord(this, this._fields, r);
  }
  tryAsTuple() {
    const e = [];
    for (let r = 0; r < this._fields.length; r++) {
      const [n, i] = this._fields[r];
      if (n !== `_${r}_`)
        return null;
      e.push(i);
    }
    return e;
  }
  covariant(e) {
    if (typeof e == "object" && this._fields.every(([r, n]) => {
      if (!e.hasOwnProperty(r))
        throw new Error(`Record is missing key "${r}".`);
      try {
        return n.covariant(e[r]);
      } catch (i) {
        throw new Error(`Invalid ${this.display()} argument: 

field ${r} -> ${i.message}`);
      }
    }))
      return !0;
    throw new Error(`Invalid ${this.display()} argument: ${Xe(e)}`);
  }
  encodeValue(e) {
    const r = this._fields.map(([i]) => e[i]), n = An(this._fields, r, ([, i], s) => i.encodeValue(s));
    return He(...n);
  }
  _buildTypeTableImpl(e) {
    this._fields.forEach(([s, c]) => c.buildTypeTable(e));
    const r = tt(
      -20
      /* IDLTypeIds.Record */
    ), n = De(this._fields.length), i = this._fields.map(([s, c]) => He(De(Jt(s)), c.encodeType(e)));
    e.add(this, He(r, n, He(...i)));
  }
  decodeValue(e, r) {
    const n = this.checkType(r);
    if (!(n instanceof Un))
      throw new Error("Not a record type");
    const i = {};
    let s = 0, c = 0;
    for (; c < n._fields.length; ) {
      const [a, p] = n._fields[c];
      if (s >= this._fields.length) {
        p.decodeValue(e, p), c++;
        continue;
      }
      const [g, b] = this._fields[s], T = Jt(this._fields[s][0]), O = Jt(a);
      if (T === O)
        i[g] = b.decodeValue(e, p), s++, c++;
      else if (O > T)
        if (b instanceof rn || b instanceof ki)
          i[g] = [], s++;
        else
          throw new Error("Cannot find required field " + g);
      else
        p.decodeValue(e, p), c++;
    }
    for (const [a, p] of this._fields.slice(s))
      if (p instanceof rn || p instanceof ki)
        i[a] = [];
      else
        throw new Error("Cannot find required field " + a);
    return i;
  }
  get name() {
    return `record {${this._fields.map(([r, n]) => r + ":" + n.name).join("; ")}}`;
  }
  display() {
    return `record {${this._fields.map(([r, n]) => r + ":" + n.display()).join("; ")}}`;
  }
  valueToString(e) {
    const r = this._fields.map(([i]) => e[i]);
    return `record {${An(this._fields, r, ([i, s], c) => i + "=" + s.valueToString(c)).join("; ")}}`;
  }
}
class Ji extends Un {
  constructor(e) {
    const r = {};
    e.forEach((n, i) => r["_" + i + "_"] = n), super(r), this._components = e;
  }
  accept(e, r) {
    return e.visitTuple(this, this._components, r);
  }
  covariant(e) {
    if (Array.isArray(e) && e.length >= this._fields.length && this._components.every((r, n) => {
      try {
        return r.covariant(e[n]);
      } catch (i) {
        throw new Error(`Invalid ${this.display()} argument: 

index ${n} -> ${i.message}`);
      }
    }))
      return !0;
    throw new Error(`Invalid ${this.display()} argument: ${Xe(e)}`);
  }
  encodeValue(e) {
    const r = An(this._components, e, (n, i) => n.encodeValue(i));
    return He(...r);
  }
  decodeValue(e, r) {
    const n = this.checkType(r);
    if (!(n instanceof Ji))
      throw new Error("not a tuple type");
    if (n._components.length < this._components.length)
      throw new Error("tuple mismatch");
    const i = [];
    for (const [s, c] of n._components.entries())
      s >= this._components.length ? c.decodeValue(e, c) : i.push(this._components[s].decodeValue(e, c));
    return i;
  }
  display() {
    return `record {${this._components.map((r) => r.display()).join("; ")}}`;
  }
  valueToString(e) {
    return `record {${An(this._components, e, (n, i) => n.valueToString(i)).join("; ")}}`;
  }
}
class Qi extends Ar {
  constructor(e = {}) {
    super(), this._fields = Object.entries(e).sort((r, n) => Jt(r[0]) - Jt(n[0]));
  }
  accept(e, r) {
    return e.visitVariant(this, this._fields, r);
  }
  covariant(e) {
    if (typeof e == "object" && Object.entries(e).length === 1 && this._fields.every(([r, n]) => {
      try {
        return !e.hasOwnProperty(r) || n.covariant(e[r]);
      } catch (i) {
        throw new Error(`Invalid ${this.display()} argument: 

variant ${r} -> ${i.message}`);
      }
    }))
      return !0;
    throw new Error(`Invalid ${this.display()} argument: ${Xe(e)}`);
  }
  encodeValue(e) {
    for (let r = 0; r < this._fields.length; r++) {
      const [n, i] = this._fields[r];
      if (e.hasOwnProperty(n)) {
        const s = De(r), c = i.encodeValue(e[n]);
        return He(s, c);
      }
    }
    throw Error("Variant has no data: " + e);
  }
  _buildTypeTableImpl(e) {
    this._fields.forEach(([, s]) => {
      s.buildTypeTable(e);
    });
    const r = tt(
      -21
      /* IDLTypeIds.Variant */
    ), n = De(this._fields.length), i = this._fields.map(([s, c]) => He(De(Jt(s)), c.encodeType(e)));
    e.add(this, He(r, n, ...i));
  }
  decodeValue(e, r) {
    const n = this.checkType(r);
    if (!(n instanceof Qi))
      throw new Error("Not a variant type");
    const i = Number(nt(e));
    if (i >= n._fields.length)
      throw Error("Invalid variant index: " + i);
    const [s, c] = n._fields[i];
    for (const [a, p] of this._fields)
      if (Jt(s) === Jt(a)) {
        const g = p.decodeValue(e, c);
        return { [a]: g };
      }
    throw new Error("Cannot find field hash " + s);
  }
  get name() {
    return `variant {${this._fields.map(([r, n]) => r + ":" + n.name).join("; ")}}`;
  }
  display() {
    return `variant {${this._fields.map(([r, n]) => r + (n.name === "null" ? "" : `:${n.display()}`)).join("; ")}}`;
  }
  valueToString(e) {
    for (const [r, n] of this._fields)
      if (e.hasOwnProperty(r)) {
        const i = n.valueToString(e[r]);
        return i === "null" ? `variant {${r}}` : `variant {${r}=${i}}`;
      }
    throw new Error("Variant has no data: " + e);
  }
}
class Sr extends Ar {
  constructor() {
    super(...arguments), this._id = Sr._counter++, this._type = void 0;
  }
  accept(e, r) {
    if (!this._type)
      throw Error("Recursive type uninitialized.");
    return e.visitRec(this, this._type, r);
  }
  fill(e) {
    this._type = e;
  }
  getType() {
    return this._type;
  }
  covariant(e) {
    if (this._type && this._type.covariant(e))
      return !0;
    throw new Error(`Invalid ${this.display()} argument: ${Xe(e)}`);
  }
  encodeValue(e) {
    if (!this._type)
      throw Error("Recursive type uninitialized.");
    return this._type.encodeValue(e);
  }
  _buildTypeTableImpl(e) {
    if (!this._type)
      throw Error("Recursive type uninitialized.");
    e.add(this, new Uint8Array([])), this._type.buildTypeTable(e), e.merge(this, this._type.name);
  }
  decodeValue(e, r) {
    if (!this._type)
      throw Error("Recursive type uninitialized.");
    return this._type.decodeValue(e, r);
  }
  get name() {
    return `rec_${this._id}`;
  }
  display() {
    if (!this._type)
      throw Error("Recursive type uninitialized.");
    return `μ${this.name}.${this._type.name}`;
  }
  valueToString(e) {
    if (!this._type)
      throw Error("Recursive type uninitialized.");
    return this._type.valueToString(e);
  }
}
Sr._counter = 0;
function So(t) {
  if (kr(t) !== 1)
    throw new Error("Cannot decode principal");
  const r = Number(nt(t));
  return Me.fromUint8Array(new Uint8Array(Mr(t, r)));
}
class kc extends Ot {
  accept(e, r) {
    return e.visitPrincipal(this, r);
  }
  covariant(e) {
    if (e && e._isPrincipal)
      return !0;
    throw new Error(`Invalid ${this.display()} argument: ${Xe(e)}`);
  }
  encodeValue(e) {
    const r = e.toUint8Array(), n = De(r.byteLength);
    return He(new Uint8Array([1]), n, r);
  }
  encodeType() {
    return tt(
      -24
      /* IDLTypeIds.Principal */
    );
  }
  decodeValue(e, r) {
    return this.checkType(r), So(e);
  }
  get name() {
    return "principal";
  }
  valueToString(e) {
    return `${this.name} "${e.toText()}"`;
  }
}
class Bo extends Ar {
  constructor(e, r, n = []) {
    super(), this.argTypes = e, this.retTypes = r, this.annotations = n;
  }
  static argsToString(e, r) {
    if (e.length !== r.length)
      throw new Error("arity mismatch");
    return "(" + e.map((n, i) => n.valueToString(r[i])).join(", ") + ")";
  }
  accept(e, r) {
    return e.visitFunc(this, r);
  }
  covariant(e) {
    if (Array.isArray(e) && e.length === 2 && e[0] && e[0]._isPrincipal && typeof e[1] == "string")
      return !0;
    throw new Error(`Invalid ${this.display()} argument: ${Xe(e)}`);
  }
  encodeValue([e, r]) {
    const n = e.toUint8Array(), i = De(n.byteLength), s = He(new Uint8Array([1]), i, n), c = new TextEncoder().encode(r), a = De(c.byteLength);
    return He(new Uint8Array([1]), s, a, c);
  }
  _buildTypeTableImpl(e) {
    this.argTypes.forEach((g) => g.buildTypeTable(e)), this.retTypes.forEach((g) => g.buildTypeTable(e));
    const r = tt(
      -22
      /* IDLTypeIds.Func */
    ), n = De(this.argTypes.length), i = He(...this.argTypes.map((g) => g.encodeType(e))), s = De(this.retTypes.length), c = He(...this.retTypes.map((g) => g.encodeType(e))), a = De(this.annotations.length), p = He(...this.annotations.map((g) => this.encodeAnnotation(g)));
    e.add(this, He(r, n, i, s, c, a, p));
  }
  decodeValue(e) {
    if (kr(e) !== 1)
      throw new Error("Cannot decode function reference");
    const n = So(e), i = Number(nt(e)), s = Mr(e, i), a = new TextDecoder("utf8", { fatal: !0 }).decode(s);
    return [n, a];
  }
  get name() {
    const e = this.argTypes.map((i) => i.name).join(", "), r = this.retTypes.map((i) => i.name).join(", "), n = " " + this.annotations.join(" ");
    return `(${e}) -> (${r})${n}`;
  }
  valueToString([e, r]) {
    return `func "${e.toText()}".${r}`;
  }
  display() {
    const e = this.argTypes.map((i) => i.display()).join(", "), r = this.retTypes.map((i) => i.display()).join(", "), n = " " + this.annotations.join(" ");
    return `(${e}) → (${r})${n}`;
  }
  encodeAnnotation(e) {
    if (e === "query")
      return new Uint8Array([1]);
    if (e === "oneway")
      return new Uint8Array([2]);
    if (e === "composite_query")
      return new Uint8Array([3]);
    throw new Error("Illegal function annotation");
  }
}
class $c extends Ar {
  constructor(e) {
    super(), this._fields = Object.entries(e).sort((r, n) => r[0] < n[0] ? -1 : r[0] > n[0] ? 1 : 0);
  }
  accept(e, r) {
    return e.visitService(this, r);
  }
  covariant(e) {
    if (e && e._isPrincipal)
      return !0;
    throw new Error(`Invalid ${this.display()} argument: ${Xe(e)}`);
  }
  encodeValue(e) {
    const r = e.toUint8Array(), n = De(r.length);
    return He(new Uint8Array([1]), n, r);
  }
  _buildTypeTableImpl(e) {
    this._fields.forEach(([s, c]) => c.buildTypeTable(e));
    const r = tt(
      -23
      /* IDLTypeIds.Service */
    ), n = De(this._fields.length), i = this._fields.map(([s, c]) => {
      const a = new TextEncoder().encode(s), p = De(a.length);
      return He(p, a, c.encodeType(e));
    });
    e.add(this, He(r, n, ...i));
  }
  decodeValue(e) {
    return So(e);
  }
  get name() {
    return `service {${this._fields.map(([r, n]) => r + ":" + n.name).join("; ")}}`;
  }
  valueToString(e) {
    return `service "${e.toText()}"`;
  }
}
function Xe(t) {
  const e = JSON.stringify(t, (r, n) => typeof n == "bigint" ? `BigInt(${n})` : n);
  return e && e.length > ra ? e.substring(0, ra - 3) + "..." : e;
}
function Ys(t, e) {
  if (e.length < t.length)
    throw Error("Wrong number of message arguments");
  const r = new U0();
  t.forEach((p) => p.buildTypeTable(r));
  const n = new TextEncoder().encode(hi), i = r.encode(), s = De(e.length), c = He(...t.map((p) => p.encodeType(r))), a = He(...An(t, e, (p, g) => {
    try {
      p.covariant(g);
    } catch (b) {
      throw new Error(b.message + `

`);
    }
    return p.encodeValue(g);
  }));
  return He(n, i, s, c, a);
}
function Hc(t, e) {
  const r = new an(e);
  if (e.byteLength < hi.length)
    throw new Error("Message length smaller than magic number");
  const n = Mr(r, hi.length), i = new TextDecoder().decode(n);
  if (i !== hi)
    throw new Error("Wrong magic number: " + JSON.stringify(i));
  function s(B) {
    const m = [], I = Number(nt(B));
    for (let j = 0; j < I; j++) {
      const q = Number(yr(B));
      switch (q) {
        case -18:
        case -19: {
          const ee = Number(yr(B));
          m.push([q, ee]);
          break;
        }
        case -20:
        case -21: {
          const ee = [];
          let k = Number(nt(B)), J;
          for (; k--; ) {
            const K = Number(nt(B));
            if (K >= Math.pow(2, 32))
              throw new Error("field id out of 32-bit range");
            if (typeof J == "number" && J >= K)
              throw new Error("field id collision or not sorted");
            J = K;
            const re = Number(yr(B));
            ee.push([K, re]);
          }
          m.push([q, ee]);
          break;
        }
        case -22: {
          const ee = [];
          let k = Number(nt(B));
          for (; k--; )
            ee.push(Number(yr(B)));
          const J = [];
          let K = Number(nt(B));
          for (; K--; )
            J.push(Number(yr(B)));
          const re = [];
          let ue = Number(nt(B));
          for (; ue--; )
            switch (Number(nt(B))) {
              case 1: {
                re.push("query");
                break;
              }
              case 2: {
                re.push("oneway");
                break;
              }
              case 3: {
                re.push("composite_query");
                break;
              }
              default:
                throw new Error("unknown annotation");
            }
          m.push([q, [ee, J, re]]);
          break;
        }
        case -23: {
          let ee = Number(nt(B));
          const k = [];
          for (; ee--; ) {
            const J = Number(nt(B)), K = new TextDecoder().decode(Mr(B, J)), re = yr(B);
            k.push([K, re]);
          }
          m.push([q, k]);
          break;
        }
        default:
          throw new Error("Illegal op_code: " + q);
      }
    }
    const U = [], V = Number(nt(B));
    for (let j = 0; j < V; j++)
      U.push(Number(yr(B)));
    return [m, U];
  }
  const [c, a] = s(r);
  if (a.length < t.length)
    throw new Error("Wrong number of return values");
  const p = c.map((B) => uu());
  function g(B) {
    if (B < -24)
      throw new Error("future value not supported");
    if (B < 0)
      switch (B) {
        case -1:
          return Gc;
        case -2:
          return Vc;
        case -3:
          return Dc;
        case -4:
          return zc;
        case -5:
          return Qc;
        case -6:
          return eu;
        case -7:
          return tu;
        case -8:
          return ru;
        case -9:
          return Zc;
        case -10:
          return Kc;
        case -11:
          return Xc;
        case -12:
          return Jc;
        case -13:
          return Wc;
        case -14:
          return Yc;
        case -15:
          return jc;
        case -16:
          return Lc;
        case -17:
          return qc;
        case -24:
          return nu;
        default:
          throw new Error("Illegal op_code: " + B);
      }
    if (B >= c.length)
      throw new Error("type index out of range");
    return p[B];
  }
  function b(B) {
    switch (B[0]) {
      case -19: {
        const m = g(B[1]);
        return su(m);
      }
      case -18: {
        const m = g(B[1]);
        return ou(m);
      }
      case -20: {
        const m = {};
        for (const [V, j] of B[1]) {
          const q = `_${V}_`;
          m[q] = g(j);
        }
        const I = au(m), U = I.tryAsTuple();
        return Array.isArray(U) ? iu(...U) : I;
      }
      case -21: {
        const m = {};
        for (const [I, U] of B[1]) {
          const V = `_${I}_`;
          m[V] = g(U);
        }
        return cu(m);
      }
      case -22: {
        const [m, I, U] = B[1];
        return fu(m.map((V) => g(V)), I.map((V) => g(V)), U);
      }
      case -23: {
        const m = {}, I = B[1];
        for (const [U, V] of I) {
          let j = g(V);
          if (j instanceof Sr && (j = j.getType()), !(j instanceof Bo))
            throw new Error("Illegal service definition: services can only contain functions");
          m[U] = j;
        }
        return lu(m);
      }
      default:
        throw new Error("Illegal op_code: " + B[0]);
    }
  }
  c.forEach((B, m) => {
    if (B[0] === -22) {
      const I = b(B);
      p[m].fill(I);
    }
  }), c.forEach((B, m) => {
    if (B[0] !== -22) {
      const I = b(B);
      p[m].fill(I);
    }
  });
  const T = a.map((B) => g(B)), O = t.map((B, m) => B.decodeValue(r, T[m]));
  for (let B = t.length; B < T.length; B++)
    T[B].decodeValue(r, T[B]);
  if (r.byteLength > 0)
    throw new Error("decode: Left-over bytes");
  return O;
}
const qc = new Oc(), Lc = new ki(), P0 = new Ic(), Vc = new Uc(), Gc = new Fc(), jc = new Pc(), zc = new Cc(), Dc = new Mc(), Wc = new Ao(32), Yc = new Ao(64), Zc = new $r(8), Kc = new $r(16), Xc = new $r(32), Jc = new $r(64), Qc = new Er(8), eu = new Er(16), tu = new Er(32), ru = new Er(64), nu = new kc();
function iu(...t) {
  return new Ji(t);
}
function su(t) {
  return new Xi(t);
}
function ou(t) {
  return new rn(t);
}
function au(t) {
  return new Un(t);
}
function cu(t) {
  return new Qi(t);
}
function uu() {
  return new Sr();
}
function fu(t, e, r = []) {
  return new Bo(t, e, r);
}
function lu(t) {
  return new $c(t);
}
const C0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Bool: Vc,
  BoolClass: Uc,
  ConstructType: Ar,
  Empty: qc,
  EmptyClass: Oc,
  FixedIntClass: $r,
  FixedNatClass: Er,
  Float32: Wc,
  Float64: Yc,
  FloatClass: Ao,
  Func: fu,
  FuncClass: Bo,
  Int: zc,
  Int16: Kc,
  Int32: Xc,
  Int64: Jc,
  Int8: Zc,
  IntClass: Cc,
  Nat: Dc,
  Nat16: eu,
  Nat32: tu,
  Nat64: ru,
  Nat8: Qc,
  NatClass: Mc,
  Null: Gc,
  NullClass: Fc,
  Opt: ou,
  OptClass: rn,
  PrimitiveType: Ot,
  Principal: nu,
  PrincipalClass: kc,
  Rec: uu,
  RecClass: Sr,
  Record: au,
  RecordClass: Un,
  Reserved: Lc,
  ReservedClass: ki,
  Service: lu,
  ServiceClass: $c,
  Text: jc,
  TextClass: Pc,
  Tuple: iu,
  TupleClass: Ji,
  Type: Ki,
  Unknown: P0,
  UnknownClass: Ic,
  Variant: cu,
  VariantClass: Qi,
  Vec: su,
  VecClass: Xi,
  Visitor: F0,
  decode: Hc,
  encode: Ys
}, Symbol.toStringTag, { value: "Module" }));
var hu = {}, Fn = {};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(t) {
  var e = On, r = In, n = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  t.Buffer = a, t.SlowBuffer = j, t.INSPECT_MAX_BYTES = 50;
  var i = 2147483647;
  t.kMaxLength = i, a.TYPED_ARRAY_SUPPORT = s(), !a.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
  );
  function s() {
    try {
      var h = new Uint8Array(1), o = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(o, Uint8Array.prototype), Object.setPrototypeOf(h, o), h.foo() === 42;
    } catch {
      return !1;
    }
  }
  Object.defineProperty(a.prototype, "parent", {
    enumerable: !0,
    get: function() {
      if (a.isBuffer(this))
        return this.buffer;
    }
  }), Object.defineProperty(a.prototype, "offset", {
    enumerable: !0,
    get: function() {
      if (a.isBuffer(this))
        return this.byteOffset;
    }
  });
  function c(h) {
    if (h > i)
      throw new RangeError('The value "' + h + '" is invalid for option "size"');
    var o = new Uint8Array(h);
    return Object.setPrototypeOf(o, a.prototype), o;
  }
  function a(h, o, u) {
    if (typeof h == "number") {
      if (typeof o == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return T(h);
    }
    return p(h, o, u);
  }
  a.poolSize = 8192;
  function p(h, o, u) {
    if (typeof h == "string")
      return O(h, o);
    if (ArrayBuffer.isView(h))
      return m(h);
    if (h == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof h
      );
    if (M(h, ArrayBuffer) || h && M(h.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (M(h, SharedArrayBuffer) || h && M(h.buffer, SharedArrayBuffer)))
      return I(h, o, u);
    if (typeof h == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    var y = h.valueOf && h.valueOf();
    if (y != null && y !== h)
      return a.from(y, o, u);
    var x = U(h);
    if (x) return x;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof h[Symbol.toPrimitive] == "function")
      return a.from(
        h[Symbol.toPrimitive]("string"),
        o,
        u
      );
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof h
    );
  }
  a.from = function(h, o, u) {
    return p(h, o, u);
  }, Object.setPrototypeOf(a.prototype, Uint8Array.prototype), Object.setPrototypeOf(a, Uint8Array);
  function g(h) {
    if (typeof h != "number")
      throw new TypeError('"size" argument must be of type number');
    if (h < 0)
      throw new RangeError('The value "' + h + '" is invalid for option "size"');
  }
  function b(h, o, u) {
    return g(h), h <= 0 ? c(h) : o !== void 0 ? typeof u == "string" ? c(h).fill(o, u) : c(h).fill(o) : c(h);
  }
  a.alloc = function(h, o, u) {
    return b(h, o, u);
  };
  function T(h) {
    return g(h), c(h < 0 ? 0 : V(h) | 0);
  }
  a.allocUnsafe = function(h) {
    return T(h);
  }, a.allocUnsafeSlow = function(h) {
    return T(h);
  };
  function O(h, o) {
    if ((typeof o != "string" || o === "") && (o = "utf8"), !a.isEncoding(o))
      throw new TypeError("Unknown encoding: " + o);
    var u = q(h, o) | 0, y = c(u), x = y.write(h, o);
    return x !== u && (y = y.slice(0, x)), y;
  }
  function B(h) {
    for (var o = h.length < 0 ? 0 : V(h.length) | 0, u = c(o), y = 0; y < o; y += 1)
      u[y] = h[y] & 255;
    return u;
  }
  function m(h) {
    if (M(h, Uint8Array)) {
      var o = new Uint8Array(h);
      return I(o.buffer, o.byteOffset, o.byteLength);
    }
    return B(h);
  }
  function I(h, o, u) {
    if (o < 0 || h.byteLength < o)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (h.byteLength < o + (u || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    var y;
    return o === void 0 && u === void 0 ? y = new Uint8Array(h) : u === void 0 ? y = new Uint8Array(h, o) : y = new Uint8Array(h, o, u), Object.setPrototypeOf(y, a.prototype), y;
  }
  function U(h) {
    if (a.isBuffer(h)) {
      var o = V(h.length) | 0, u = c(o);
      return u.length === 0 || h.copy(u, 0, 0, o), u;
    }
    if (h.length !== void 0)
      return typeof h.length != "number" || F(h.length) ? c(0) : B(h);
    if (h.type === "Buffer" && Array.isArray(h.data))
      return B(h.data);
  }
  function V(h) {
    if (h >= i)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i.toString(16) + " bytes");
    return h | 0;
  }
  function j(h) {
    return +h != h && (h = 0), a.alloc(+h);
  }
  a.isBuffer = function(o) {
    return o != null && o._isBuffer === !0 && o !== a.prototype;
  }, a.compare = function(o, u) {
    if (M(o, Uint8Array) && (o = a.from(o, o.offset, o.byteLength)), M(u, Uint8Array) && (u = a.from(u, u.offset, u.byteLength)), !a.isBuffer(o) || !a.isBuffer(u))
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (o === u) return 0;
    for (var y = o.length, x = u.length, v = 0, L = Math.min(y, x); v < L; ++v)
      if (o[v] !== u[v]) {
        y = o[v], x = u[v];
        break;
      }
    return y < x ? -1 : x < y ? 1 : 0;
  }, a.isEncoding = function(o) {
    switch (String(o).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return !0;
      default:
        return !1;
    }
  }, a.concat = function(o, u) {
    if (!Array.isArray(o))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (o.length === 0)
      return a.alloc(0);
    var y;
    if (u === void 0)
      for (u = 0, y = 0; y < o.length; ++y)
        u += o[y].length;
    var x = a.allocUnsafe(u), v = 0;
    for (y = 0; y < o.length; ++y) {
      var L = o[y];
      if (M(L, Uint8Array))
        v + L.length > x.length ? a.from(L).copy(x, v) : Uint8Array.prototype.set.call(
          x,
          L,
          v
        );
      else if (a.isBuffer(L))
        L.copy(x, v);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      v += L.length;
    }
    return x;
  };
  function q(h, o) {
    if (a.isBuffer(h))
      return h.length;
    if (ArrayBuffer.isView(h) || M(h, ArrayBuffer))
      return h.byteLength;
    if (typeof h != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof h
      );
    var u = h.length, y = arguments.length > 2 && arguments[2] === !0;
    if (!y && u === 0) return 0;
    for (var x = !1; ; )
      switch (o) {
        case "ascii":
        case "latin1":
        case "binary":
          return u;
        case "utf8":
        case "utf-8":
          return ae(h).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return u * 2;
        case "hex":
          return u >>> 1;
        case "base64":
          return E(h).length;
        default:
          if (x)
            return y ? -1 : ae(h).length;
          o = ("" + o).toLowerCase(), x = !0;
      }
  }
  a.byteLength = q;
  function ee(h, o, u) {
    var y = !1;
    if ((o === void 0 || o < 0) && (o = 0), o > this.length || ((u === void 0 || u > this.length) && (u = this.length), u <= 0) || (u >>>= 0, o >>>= 0, u <= o))
      return "";
    for (h || (h = "utf8"); ; )
      switch (h) {
        case "hex":
          return le(this, o, u);
        case "utf8":
        case "utf-8":
          return P(this, o, u);
        case "ascii":
          return G(this, o, u);
        case "latin1":
        case "binary":
          return Q(this, o, u);
        case "base64":
          return N(this, o, u);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return ye(this, o, u);
        default:
          if (y) throw new TypeError("Unknown encoding: " + h);
          h = (h + "").toLowerCase(), y = !0;
      }
  }
  a.prototype._isBuffer = !0;
  function k(h, o, u) {
    var y = h[o];
    h[o] = h[u], h[u] = y;
  }
  a.prototype.swap16 = function() {
    var o = this.length;
    if (o % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (var u = 0; u < o; u += 2)
      k(this, u, u + 1);
    return this;
  }, a.prototype.swap32 = function() {
    var o = this.length;
    if (o % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (var u = 0; u < o; u += 4)
      k(this, u, u + 3), k(this, u + 1, u + 2);
    return this;
  }, a.prototype.swap64 = function() {
    var o = this.length;
    if (o % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (var u = 0; u < o; u += 8)
      k(this, u, u + 7), k(this, u + 1, u + 6), k(this, u + 2, u + 5), k(this, u + 3, u + 4);
    return this;
  }, a.prototype.toString = function() {
    var o = this.length;
    return o === 0 ? "" : arguments.length === 0 ? P(this, 0, o) : ee.apply(this, arguments);
  }, a.prototype.toLocaleString = a.prototype.toString, a.prototype.equals = function(o) {
    if (!a.isBuffer(o)) throw new TypeError("Argument must be a Buffer");
    return this === o ? !0 : a.compare(this, o) === 0;
  }, a.prototype.inspect = function() {
    var o = "", u = t.INSPECT_MAX_BYTES;
    return o = this.toString("hex", 0, u).replace(/(.{2})/g, "$1 ").trim(), this.length > u && (o += " ... "), "<Buffer " + o + ">";
  }, n && (a.prototype[n] = a.prototype.inspect), a.prototype.compare = function(o, u, y, x, v) {
    if (M(o, Uint8Array) && (o = a.from(o, o.offset, o.byteLength)), !a.isBuffer(o))
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof o
      );
    if (u === void 0 && (u = 0), y === void 0 && (y = o ? o.length : 0), x === void 0 && (x = 0), v === void 0 && (v = this.length), u < 0 || y > o.length || x < 0 || v > this.length)
      throw new RangeError("out of range index");
    if (x >= v && u >= y)
      return 0;
    if (x >= v)
      return -1;
    if (u >= y)
      return 1;
    if (u >>>= 0, y >>>= 0, x >>>= 0, v >>>= 0, this === o) return 0;
    for (var L = v - x, oe = y - u, me = Math.min(L, oe), ge = this.slice(x, v), Be = o.slice(u, y), d = 0; d < me; ++d)
      if (ge[d] !== Be[d]) {
        L = ge[d], oe = Be[d];
        break;
      }
    return L < oe ? -1 : oe < L ? 1 : 0;
  };
  function J(h, o, u, y, x) {
    if (h.length === 0) return -1;
    if (typeof u == "string" ? (y = u, u = 0) : u > 2147483647 ? u = 2147483647 : u < -2147483648 && (u = -2147483648), u = +u, F(u) && (u = x ? 0 : h.length - 1), u < 0 && (u = h.length + u), u >= h.length) {
      if (x) return -1;
      u = h.length - 1;
    } else if (u < 0)
      if (x) u = 0;
      else return -1;
    if (typeof o == "string" && (o = a.from(o, y)), a.isBuffer(o))
      return o.length === 0 ? -1 : K(h, o, u, y, x);
    if (typeof o == "number")
      return o = o & 255, typeof Uint8Array.prototype.indexOf == "function" ? x ? Uint8Array.prototype.indexOf.call(h, o, u) : Uint8Array.prototype.lastIndexOf.call(h, o, u) : K(h, [o], u, y, x);
    throw new TypeError("val must be string, number or Buffer");
  }
  function K(h, o, u, y, x) {
    var v = 1, L = h.length, oe = o.length;
    if (y !== void 0 && (y = String(y).toLowerCase(), y === "ucs2" || y === "ucs-2" || y === "utf16le" || y === "utf-16le")) {
      if (h.length < 2 || o.length < 2)
        return -1;
      v = 2, L /= 2, oe /= 2, u /= 2;
    }
    function me(l, A) {
      return v === 1 ? l[A] : l.readUInt16BE(A * v);
    }
    var ge;
    if (x) {
      var Be = -1;
      for (ge = u; ge < L; ge++)
        if (me(h, ge) === me(o, Be === -1 ? 0 : ge - Be)) {
          if (Be === -1 && (Be = ge), ge - Be + 1 === oe) return Be * v;
        } else
          Be !== -1 && (ge -= ge - Be), Be = -1;
    } else
      for (u + oe > L && (u = L - oe), ge = u; ge >= 0; ge--) {
        for (var d = !0, f = 0; f < oe; f++)
          if (me(h, ge + f) !== me(o, f)) {
            d = !1;
            break;
          }
        if (d) return ge;
      }
    return -1;
  }
  a.prototype.includes = function(o, u, y) {
    return this.indexOf(o, u, y) !== -1;
  }, a.prototype.indexOf = function(o, u, y) {
    return J(this, o, u, y, !0);
  }, a.prototype.lastIndexOf = function(o, u, y) {
    return J(this, o, u, y, !1);
  };
  function re(h, o, u, y) {
    u = Number(u) || 0;
    var x = h.length - u;
    y ? (y = Number(y), y > x && (y = x)) : y = x;
    var v = o.length;
    y > v / 2 && (y = v / 2);
    for (var L = 0; L < y; ++L) {
      var oe = parseInt(o.substr(L * 2, 2), 16);
      if (F(oe)) return L;
      h[u + L] = oe;
    }
    return L;
  }
  function ue(h, o, u, y) {
    return S(ae(o, h.length - u), h, u, y);
  }
  function ie(h, o, u, y) {
    return S(fe(o), h, u, y);
  }
  function pe(h, o, u, y) {
    return S(E(o), h, u, y);
  }
  function de(h, o, u, y) {
    return S(_(o, h.length - u), h, u, y);
  }
  a.prototype.write = function(o, u, y, x) {
    if (u === void 0)
      x = "utf8", y = this.length, u = 0;
    else if (y === void 0 && typeof u == "string")
      x = u, y = this.length, u = 0;
    else if (isFinite(u))
      u = u >>> 0, isFinite(y) ? (y = y >>> 0, x === void 0 && (x = "utf8")) : (x = y, y = void 0);
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    var v = this.length - u;
    if ((y === void 0 || y > v) && (y = v), o.length > 0 && (y < 0 || u < 0) || u > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    x || (x = "utf8");
    for (var L = !1; ; )
      switch (x) {
        case "hex":
          return re(this, o, u, y);
        case "utf8":
        case "utf-8":
          return ue(this, o, u, y);
        case "ascii":
        case "latin1":
        case "binary":
          return ie(this, o, u, y);
        case "base64":
          return pe(this, o, u, y);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return de(this, o, u, y);
        default:
          if (L) throw new TypeError("Unknown encoding: " + x);
          x = ("" + x).toLowerCase(), L = !0;
      }
  }, a.prototype.toJSON = function() {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function N(h, o, u) {
    return o === 0 && u === h.length ? e.fromByteArray(h) : e.fromByteArray(h.slice(o, u));
  }
  function P(h, o, u) {
    u = Math.min(h.length, u);
    for (var y = [], x = o; x < u; ) {
      var v = h[x], L = null, oe = v > 239 ? 4 : v > 223 ? 3 : v > 191 ? 2 : 1;
      if (x + oe <= u) {
        var me, ge, Be, d;
        switch (oe) {
          case 1:
            v < 128 && (L = v);
            break;
          case 2:
            me = h[x + 1], (me & 192) === 128 && (d = (v & 31) << 6 | me & 63, d > 127 && (L = d));
            break;
          case 3:
            me = h[x + 1], ge = h[x + 2], (me & 192) === 128 && (ge & 192) === 128 && (d = (v & 15) << 12 | (me & 63) << 6 | ge & 63, d > 2047 && (d < 55296 || d > 57343) && (L = d));
            break;
          case 4:
            me = h[x + 1], ge = h[x + 2], Be = h[x + 3], (me & 192) === 128 && (ge & 192) === 128 && (Be & 192) === 128 && (d = (v & 15) << 18 | (me & 63) << 12 | (ge & 63) << 6 | Be & 63, d > 65535 && d < 1114112 && (L = d));
        }
      }
      L === null ? (L = 65533, oe = 1) : L > 65535 && (L -= 65536, y.push(L >>> 10 & 1023 | 55296), L = 56320 | L & 1023), y.push(L), x += oe;
    }
    return z(y);
  }
  var Y = 4096;
  function z(h) {
    var o = h.length;
    if (o <= Y)
      return String.fromCharCode.apply(String, h);
    for (var u = "", y = 0; y < o; )
      u += String.fromCharCode.apply(
        String,
        h.slice(y, y += Y)
      );
    return u;
  }
  function G(h, o, u) {
    var y = "";
    u = Math.min(h.length, u);
    for (var x = o; x < u; ++x)
      y += String.fromCharCode(h[x] & 127);
    return y;
  }
  function Q(h, o, u) {
    var y = "";
    u = Math.min(h.length, u);
    for (var x = o; x < u; ++x)
      y += String.fromCharCode(h[x]);
    return y;
  }
  function le(h, o, u) {
    var y = h.length;
    (!o || o < 0) && (o = 0), (!u || u < 0 || u > y) && (u = y);
    for (var x = "", v = o; v < u; ++v)
      x += H[h[v]];
    return x;
  }
  function ye(h, o, u) {
    for (var y = h.slice(o, u), x = "", v = 0; v < y.length - 1; v += 2)
      x += String.fromCharCode(y[v] + y[v + 1] * 256);
    return x;
  }
  a.prototype.slice = function(o, u) {
    var y = this.length;
    o = ~~o, u = u === void 0 ? y : ~~u, o < 0 ? (o += y, o < 0 && (o = 0)) : o > y && (o = y), u < 0 ? (u += y, u < 0 && (u = 0)) : u > y && (u = y), u < o && (u = o);
    var x = this.subarray(o, u);
    return Object.setPrototypeOf(x, a.prototype), x;
  };
  function se(h, o, u) {
    if (h % 1 !== 0 || h < 0) throw new RangeError("offset is not uint");
    if (h + o > u) throw new RangeError("Trying to access beyond buffer length");
  }
  a.prototype.readUintLE = a.prototype.readUIntLE = function(o, u, y) {
    o = o >>> 0, u = u >>> 0, y || se(o, u, this.length);
    for (var x = this[o], v = 1, L = 0; ++L < u && (v *= 256); )
      x += this[o + L] * v;
    return x;
  }, a.prototype.readUintBE = a.prototype.readUIntBE = function(o, u, y) {
    o = o >>> 0, u = u >>> 0, y || se(o, u, this.length);
    for (var x = this[o + --u], v = 1; u > 0 && (v *= 256); )
      x += this[o + --u] * v;
    return x;
  }, a.prototype.readUint8 = a.prototype.readUInt8 = function(o, u) {
    return o = o >>> 0, u || se(o, 1, this.length), this[o];
  }, a.prototype.readUint16LE = a.prototype.readUInt16LE = function(o, u) {
    return o = o >>> 0, u || se(o, 2, this.length), this[o] | this[o + 1] << 8;
  }, a.prototype.readUint16BE = a.prototype.readUInt16BE = function(o, u) {
    return o = o >>> 0, u || se(o, 2, this.length), this[o] << 8 | this[o + 1];
  }, a.prototype.readUint32LE = a.prototype.readUInt32LE = function(o, u) {
    return o = o >>> 0, u || se(o, 4, this.length), (this[o] | this[o + 1] << 8 | this[o + 2] << 16) + this[o + 3] * 16777216;
  }, a.prototype.readUint32BE = a.prototype.readUInt32BE = function(o, u) {
    return o = o >>> 0, u || se(o, 4, this.length), this[o] * 16777216 + (this[o + 1] << 16 | this[o + 2] << 8 | this[o + 3]);
  }, a.prototype.readIntLE = function(o, u, y) {
    o = o >>> 0, u = u >>> 0, y || se(o, u, this.length);
    for (var x = this[o], v = 1, L = 0; ++L < u && (v *= 256); )
      x += this[o + L] * v;
    return v *= 128, x >= v && (x -= Math.pow(2, 8 * u)), x;
  }, a.prototype.readIntBE = function(o, u, y) {
    o = o >>> 0, u = u >>> 0, y || se(o, u, this.length);
    for (var x = u, v = 1, L = this[o + --x]; x > 0 && (v *= 256); )
      L += this[o + --x] * v;
    return v *= 128, L >= v && (L -= Math.pow(2, 8 * u)), L;
  }, a.prototype.readInt8 = function(o, u) {
    return o = o >>> 0, u || se(o, 1, this.length), this[o] & 128 ? (255 - this[o] + 1) * -1 : this[o];
  }, a.prototype.readInt16LE = function(o, u) {
    o = o >>> 0, u || se(o, 2, this.length);
    var y = this[o] | this[o + 1] << 8;
    return y & 32768 ? y | 4294901760 : y;
  }, a.prototype.readInt16BE = function(o, u) {
    o = o >>> 0, u || se(o, 2, this.length);
    var y = this[o + 1] | this[o] << 8;
    return y & 32768 ? y | 4294901760 : y;
  }, a.prototype.readInt32LE = function(o, u) {
    return o = o >>> 0, u || se(o, 4, this.length), this[o] | this[o + 1] << 8 | this[o + 2] << 16 | this[o + 3] << 24;
  }, a.prototype.readInt32BE = function(o, u) {
    return o = o >>> 0, u || se(o, 4, this.length), this[o] << 24 | this[o + 1] << 16 | this[o + 2] << 8 | this[o + 3];
  }, a.prototype.readFloatLE = function(o, u) {
    return o = o >>> 0, u || se(o, 4, this.length), r.read(this, o, !0, 23, 4);
  }, a.prototype.readFloatBE = function(o, u) {
    return o = o >>> 0, u || se(o, 4, this.length), r.read(this, o, !1, 23, 4);
  }, a.prototype.readDoubleLE = function(o, u) {
    return o = o >>> 0, u || se(o, 8, this.length), r.read(this, o, !0, 52, 8);
  }, a.prototype.readDoubleBE = function(o, u) {
    return o = o >>> 0, u || se(o, 8, this.length), r.read(this, o, !1, 52, 8);
  };
  function Z(h, o, u, y, x, v) {
    if (!a.isBuffer(h)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (o > x || o < v) throw new RangeError('"value" argument is out of bounds');
    if (u + y > h.length) throw new RangeError("Index out of range");
  }
  a.prototype.writeUintLE = a.prototype.writeUIntLE = function(o, u, y, x) {
    if (o = +o, u = u >>> 0, y = y >>> 0, !x) {
      var v = Math.pow(2, 8 * y) - 1;
      Z(this, o, u, y, v, 0);
    }
    var L = 1, oe = 0;
    for (this[u] = o & 255; ++oe < y && (L *= 256); )
      this[u + oe] = o / L & 255;
    return u + y;
  }, a.prototype.writeUintBE = a.prototype.writeUIntBE = function(o, u, y, x) {
    if (o = +o, u = u >>> 0, y = y >>> 0, !x) {
      var v = Math.pow(2, 8 * y) - 1;
      Z(this, o, u, y, v, 0);
    }
    var L = y - 1, oe = 1;
    for (this[u + L] = o & 255; --L >= 0 && (oe *= 256); )
      this[u + L] = o / oe & 255;
    return u + y;
  }, a.prototype.writeUint8 = a.prototype.writeUInt8 = function(o, u, y) {
    return o = +o, u = u >>> 0, y || Z(this, o, u, 1, 255, 0), this[u] = o & 255, u + 1;
  }, a.prototype.writeUint16LE = a.prototype.writeUInt16LE = function(o, u, y) {
    return o = +o, u = u >>> 0, y || Z(this, o, u, 2, 65535, 0), this[u] = o & 255, this[u + 1] = o >>> 8, u + 2;
  }, a.prototype.writeUint16BE = a.prototype.writeUInt16BE = function(o, u, y) {
    return o = +o, u = u >>> 0, y || Z(this, o, u, 2, 65535, 0), this[u] = o >>> 8, this[u + 1] = o & 255, u + 2;
  }, a.prototype.writeUint32LE = a.prototype.writeUInt32LE = function(o, u, y) {
    return o = +o, u = u >>> 0, y || Z(this, o, u, 4, 4294967295, 0), this[u + 3] = o >>> 24, this[u + 2] = o >>> 16, this[u + 1] = o >>> 8, this[u] = o & 255, u + 4;
  }, a.prototype.writeUint32BE = a.prototype.writeUInt32BE = function(o, u, y) {
    return o = +o, u = u >>> 0, y || Z(this, o, u, 4, 4294967295, 0), this[u] = o >>> 24, this[u + 1] = o >>> 16, this[u + 2] = o >>> 8, this[u + 3] = o & 255, u + 4;
  }, a.prototype.writeIntLE = function(o, u, y, x) {
    if (o = +o, u = u >>> 0, !x) {
      var v = Math.pow(2, 8 * y - 1);
      Z(this, o, u, y, v - 1, -v);
    }
    var L = 0, oe = 1, me = 0;
    for (this[u] = o & 255; ++L < y && (oe *= 256); )
      o < 0 && me === 0 && this[u + L - 1] !== 0 && (me = 1), this[u + L] = (o / oe >> 0) - me & 255;
    return u + y;
  }, a.prototype.writeIntBE = function(o, u, y, x) {
    if (o = +o, u = u >>> 0, !x) {
      var v = Math.pow(2, 8 * y - 1);
      Z(this, o, u, y, v - 1, -v);
    }
    var L = y - 1, oe = 1, me = 0;
    for (this[u + L] = o & 255; --L >= 0 && (oe *= 256); )
      o < 0 && me === 0 && this[u + L + 1] !== 0 && (me = 1), this[u + L] = (o / oe >> 0) - me & 255;
    return u + y;
  }, a.prototype.writeInt8 = function(o, u, y) {
    return o = +o, u = u >>> 0, y || Z(this, o, u, 1, 127, -128), o < 0 && (o = 255 + o + 1), this[u] = o & 255, u + 1;
  }, a.prototype.writeInt16LE = function(o, u, y) {
    return o = +o, u = u >>> 0, y || Z(this, o, u, 2, 32767, -32768), this[u] = o & 255, this[u + 1] = o >>> 8, u + 2;
  }, a.prototype.writeInt16BE = function(o, u, y) {
    return o = +o, u = u >>> 0, y || Z(this, o, u, 2, 32767, -32768), this[u] = o >>> 8, this[u + 1] = o & 255, u + 2;
  }, a.prototype.writeInt32LE = function(o, u, y) {
    return o = +o, u = u >>> 0, y || Z(this, o, u, 4, 2147483647, -2147483648), this[u] = o & 255, this[u + 1] = o >>> 8, this[u + 2] = o >>> 16, this[u + 3] = o >>> 24, u + 4;
  }, a.prototype.writeInt32BE = function(o, u, y) {
    return o = +o, u = u >>> 0, y || Z(this, o, u, 4, 2147483647, -2147483648), o < 0 && (o = 4294967295 + o + 1), this[u] = o >>> 24, this[u + 1] = o >>> 16, this[u + 2] = o >>> 8, this[u + 3] = o & 255, u + 4;
  };
  function ce(h, o, u, y, x, v) {
    if (u + y > h.length) throw new RangeError("Index out of range");
    if (u < 0) throw new RangeError("Index out of range");
  }
  function w(h, o, u, y, x) {
    return o = +o, u = u >>> 0, x || ce(h, o, u, 4), r.write(h, o, u, y, 23, 4), u + 4;
  }
  a.prototype.writeFloatLE = function(o, u, y) {
    return w(this, o, u, !0, y);
  }, a.prototype.writeFloatBE = function(o, u, y) {
    return w(this, o, u, !1, y);
  };
  function ne(h, o, u, y, x) {
    return o = +o, u = u >>> 0, x || ce(h, o, u, 8), r.write(h, o, u, y, 52, 8), u + 8;
  }
  a.prototype.writeDoubleLE = function(o, u, y) {
    return ne(this, o, u, !0, y);
  }, a.prototype.writeDoubleBE = function(o, u, y) {
    return ne(this, o, u, !1, y);
  }, a.prototype.copy = function(o, u, y, x) {
    if (!a.isBuffer(o)) throw new TypeError("argument should be a Buffer");
    if (y || (y = 0), !x && x !== 0 && (x = this.length), u >= o.length && (u = o.length), u || (u = 0), x > 0 && x < y && (x = y), x === y || o.length === 0 || this.length === 0) return 0;
    if (u < 0)
      throw new RangeError("targetStart out of bounds");
    if (y < 0 || y >= this.length) throw new RangeError("Index out of range");
    if (x < 0) throw new RangeError("sourceEnd out of bounds");
    x > this.length && (x = this.length), o.length - u < x - y && (x = o.length - u + y);
    var v = x - y;
    return this === o && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(u, y, x) : Uint8Array.prototype.set.call(
      o,
      this.subarray(y, x),
      u
    ), v;
  }, a.prototype.fill = function(o, u, y, x) {
    if (typeof o == "string") {
      if (typeof u == "string" ? (x = u, u = 0, y = this.length) : typeof y == "string" && (x = y, y = this.length), x !== void 0 && typeof x != "string")
        throw new TypeError("encoding must be a string");
      if (typeof x == "string" && !a.isEncoding(x))
        throw new TypeError("Unknown encoding: " + x);
      if (o.length === 1) {
        var v = o.charCodeAt(0);
        (x === "utf8" && v < 128 || x === "latin1") && (o = v);
      }
    } else typeof o == "number" ? o = o & 255 : typeof o == "boolean" && (o = Number(o));
    if (u < 0 || this.length < u || this.length < y)
      throw new RangeError("Out of range index");
    if (y <= u)
      return this;
    u = u >>> 0, y = y === void 0 ? this.length : y >>> 0, o || (o = 0);
    var L;
    if (typeof o == "number")
      for (L = u; L < y; ++L)
        this[L] = o;
    else {
      var oe = a.isBuffer(o) ? o : a.from(o, x), me = oe.length;
      if (me === 0)
        throw new TypeError('The value "' + o + '" is invalid for argument "value"');
      for (L = 0; L < y - u; ++L)
        this[L + u] = oe[L % me];
    }
    return this;
  };
  var he = /[^+/0-9A-Za-z-_]/g;
  function Ee(h) {
    if (h = h.split("=")[0], h = h.trim().replace(he, ""), h.length < 2) return "";
    for (; h.length % 4 !== 0; )
      h = h + "=";
    return h;
  }
  function ae(h, o) {
    o = o || 1 / 0;
    for (var u, y = h.length, x = null, v = [], L = 0; L < y; ++L) {
      if (u = h.charCodeAt(L), u > 55295 && u < 57344) {
        if (!x) {
          if (u > 56319) {
            (o -= 3) > -1 && v.push(239, 191, 189);
            continue;
          } else if (L + 1 === y) {
            (o -= 3) > -1 && v.push(239, 191, 189);
            continue;
          }
          x = u;
          continue;
        }
        if (u < 56320) {
          (o -= 3) > -1 && v.push(239, 191, 189), x = u;
          continue;
        }
        u = (x - 55296 << 10 | u - 56320) + 65536;
      } else x && (o -= 3) > -1 && v.push(239, 191, 189);
      if (x = null, u < 128) {
        if ((o -= 1) < 0) break;
        v.push(u);
      } else if (u < 2048) {
        if ((o -= 2) < 0) break;
        v.push(
          u >> 6 | 192,
          u & 63 | 128
        );
      } else if (u < 65536) {
        if ((o -= 3) < 0) break;
        v.push(
          u >> 12 | 224,
          u >> 6 & 63 | 128,
          u & 63 | 128
        );
      } else if (u < 1114112) {
        if ((o -= 4) < 0) break;
        v.push(
          u >> 18 | 240,
          u >> 12 & 63 | 128,
          u >> 6 & 63 | 128,
          u & 63 | 128
        );
      } else
        throw new Error("Invalid code point");
    }
    return v;
  }
  function fe(h) {
    for (var o = [], u = 0; u < h.length; ++u)
      o.push(h.charCodeAt(u) & 255);
    return o;
  }
  function _(h, o) {
    for (var u, y, x, v = [], L = 0; L < h.length && !((o -= 2) < 0); ++L)
      u = h.charCodeAt(L), y = u >> 8, x = u % 256, v.push(x), v.push(y);
    return v;
  }
  function E(h) {
    return e.toByteArray(Ee(h));
  }
  function S(h, o, u, y) {
    for (var x = 0; x < y && !(x + u >= o.length || x >= h.length); ++x)
      o[x + u] = h[x];
    return x;
  }
  function M(h, o) {
    return h instanceof o || h != null && h.constructor != null && h.constructor.name != null && h.constructor.name === o.name;
  }
  function F(h) {
    return h !== h;
  }
  var H = function() {
    for (var h = "0123456789abcdef", o = new Array(256), u = 0; u < 16; ++u)
      for (var y = u * 16, x = 0; x < 16; ++x)
        o[y + x] = h[u] + h[x];
    return o;
  }();
})(Fn);
var du = { exports: {} };
(function(t) {
  (function(e) {
    var r, n = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i, i = Math.ceil, s = Math.floor, c = "[BigNumber Error] ", a = c + "Number primitive has more than 15 significant digits: ", p = 1e14, g = 14, b = 9007199254740991, T = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13], O = 1e7, B = 1e9;
    function m(J) {
      var K, re, ue, ie = w.prototype = { constructor: w, toString: null, valueOf: null }, pe = new w(1), de = 20, N = 4, P = -7, Y = 21, z = -1e7, G = 1e7, Q = !1, le = 1, ye = 0, se = {
        prefix: "",
        groupSize: 3,
        secondaryGroupSize: 0,
        groupSeparator: ",",
        decimalSeparator: ".",
        fractionGroupSize: 0,
        fractionGroupSeparator: " ",
        // non-breaking space
        suffix: ""
      }, Z = "0123456789abcdefghijklmnopqrstuvwxyz", ce = !0;
      function w(_, E) {
        var S, M, F, H, h, o, u, y, x = this;
        if (!(x instanceof w)) return new w(_, E);
        if (E == null) {
          if (_ && _._isBigNumber === !0) {
            x.s = _.s, !_.c || _.e > G ? x.c = x.e = null : _.e < z ? x.c = [x.e = 0] : (x.e = _.e, x.c = _.c.slice());
            return;
          }
          if ((o = typeof _ == "number") && _ * 0 == 0) {
            if (x.s = 1 / _ < 0 ? (_ = -_, -1) : 1, _ === ~~_) {
              for (H = 0, h = _; h >= 10; h /= 10, H++) ;
              H > G ? x.c = x.e = null : (x.e = H, x.c = [_]);
              return;
            }
            y = String(_);
          } else {
            if (!n.test(y = String(_))) return ue(x, y, o);
            x.s = y.charCodeAt(0) == 45 ? (y = y.slice(1), -1) : 1;
          }
          (H = y.indexOf(".")) > -1 && (y = y.replace(".", "")), (h = y.search(/e/i)) > 0 ? (H < 0 && (H = h), H += +y.slice(h + 1), y = y.substring(0, h)) : H < 0 && (H = y.length);
        } else {
          if (j(E, 2, Z.length, "Base"), E == 10 && ce)
            return x = new w(_), ae(x, de + x.e + 1, N);
          if (y = String(_), o = typeof _ == "number") {
            if (_ * 0 != 0) return ue(x, y, o, E);
            if (x.s = 1 / _ < 0 ? (y = y.slice(1), -1) : 1, w.DEBUG && y.replace(/^0\.0*|\./, "").length > 15)
              throw Error(a + _);
          } else
            x.s = y.charCodeAt(0) === 45 ? (y = y.slice(1), -1) : 1;
          for (S = Z.slice(0, E), H = h = 0, u = y.length; h < u; h++)
            if (S.indexOf(M = y.charAt(h)) < 0) {
              if (M == ".") {
                if (h > H) {
                  H = u;
                  continue;
                }
              } else if (!F && (y == y.toUpperCase() && (y = y.toLowerCase()) || y == y.toLowerCase() && (y = y.toUpperCase()))) {
                F = !0, h = -1, H = 0;
                continue;
              }
              return ue(x, String(_), o, E);
            }
          o = !1, y = re(y, E, 10, x.s), (H = y.indexOf(".")) > -1 ? y = y.replace(".", "") : H = y.length;
        }
        for (h = 0; y.charCodeAt(h) === 48; h++) ;
        for (u = y.length; y.charCodeAt(--u) === 48; ) ;
        if (y = y.slice(h, ++u)) {
          if (u -= h, o && w.DEBUG && u > 15 && (_ > b || _ !== s(_)))
            throw Error(a + x.s * _);
          if ((H = H - h - 1) > G)
            x.c = x.e = null;
          else if (H < z)
            x.c = [x.e = 0];
          else {
            if (x.e = H, x.c = [], h = (H + 1) % g, H < 0 && (h += g), h < u) {
              for (h && x.c.push(+y.slice(0, h)), u -= g; h < u; )
                x.c.push(+y.slice(h, h += g));
              h = g - (y = y.slice(h)).length;
            } else
              h -= u;
            for (; h--; y += "0") ;
            x.c.push(+y);
          }
        } else
          x.c = [x.e = 0];
      }
      w.clone = m, w.ROUND_UP = 0, w.ROUND_DOWN = 1, w.ROUND_CEIL = 2, w.ROUND_FLOOR = 3, w.ROUND_HALF_UP = 4, w.ROUND_HALF_DOWN = 5, w.ROUND_HALF_EVEN = 6, w.ROUND_HALF_CEIL = 7, w.ROUND_HALF_FLOOR = 8, w.EUCLID = 9, w.config = w.set = function(_) {
        var E, S;
        if (_ != null)
          if (typeof _ == "object") {
            if (_.hasOwnProperty(E = "DECIMAL_PLACES") && (S = _[E], j(S, 0, B, E), de = S), _.hasOwnProperty(E = "ROUNDING_MODE") && (S = _[E], j(S, 0, 8, E), N = S), _.hasOwnProperty(E = "EXPONENTIAL_AT") && (S = _[E], S && S.pop ? (j(S[0], -B, 0, E), j(S[1], 0, B, E), P = S[0], Y = S[1]) : (j(S, -B, B, E), P = -(Y = S < 0 ? -S : S))), _.hasOwnProperty(E = "RANGE"))
              if (S = _[E], S && S.pop)
                j(S[0], -B, -1, E), j(S[1], 1, B, E), z = S[0], G = S[1];
              else if (j(S, -B, B, E), S)
                z = -(G = S < 0 ? -S : S);
              else
                throw Error(c + E + " cannot be zero: " + S);
            if (_.hasOwnProperty(E = "CRYPTO"))
              if (S = _[E], S === !!S)
                if (S)
                  if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
                    Q = S;
                  else
                    throw Q = !S, Error(c + "crypto unavailable");
                else
                  Q = S;
              else
                throw Error(c + E + " not true or false: " + S);
            if (_.hasOwnProperty(E = "MODULO_MODE") && (S = _[E], j(S, 0, 9, E), le = S), _.hasOwnProperty(E = "POW_PRECISION") && (S = _[E], j(S, 0, B, E), ye = S), _.hasOwnProperty(E = "FORMAT"))
              if (S = _[E], typeof S == "object") se = S;
              else throw Error(c + E + " not an object: " + S);
            if (_.hasOwnProperty(E = "ALPHABET"))
              if (S = _[E], typeof S == "string" && !/^.?$|[+\-.\s]|(.).*\1/.test(S))
                ce = S.slice(0, 10) == "0123456789", Z = S;
              else
                throw Error(c + E + " invalid: " + S);
          } else
            throw Error(c + "Object expected: " + _);
        return {
          DECIMAL_PLACES: de,
          ROUNDING_MODE: N,
          EXPONENTIAL_AT: [P, Y],
          RANGE: [z, G],
          CRYPTO: Q,
          MODULO_MODE: le,
          POW_PRECISION: ye,
          FORMAT: se,
          ALPHABET: Z
        };
      }, w.isBigNumber = function(_) {
        if (!_ || _._isBigNumber !== !0) return !1;
        if (!w.DEBUG) return !0;
        var E, S, M = _.c, F = _.e, H = _.s;
        e: if ({}.toString.call(M) == "[object Array]") {
          if ((H === 1 || H === -1) && F >= -B && F <= B && F === s(F)) {
            if (M[0] === 0) {
              if (F === 0 && M.length === 1) return !0;
              break e;
            }
            if (E = (F + 1) % g, E < 1 && (E += g), String(M[0]).length == E) {
              for (E = 0; E < M.length; E++)
                if (S = M[E], S < 0 || S >= p || S !== s(S)) break e;
              if (S !== 0) return !0;
            }
          }
        } else if (M === null && F === null && (H === null || H === 1 || H === -1))
          return !0;
        throw Error(c + "Invalid BigNumber: " + _);
      }, w.maximum = w.max = function() {
        return he(arguments, -1);
      }, w.minimum = w.min = function() {
        return he(arguments, 1);
      }, w.random = function() {
        var _ = 9007199254740992, E = Math.random() * _ & 2097151 ? function() {
          return s(Math.random() * _);
        } : function() {
          return (Math.random() * 1073741824 | 0) * 8388608 + (Math.random() * 8388608 | 0);
        };
        return function(S) {
          var M, F, H, h, o, u = 0, y = [], x = new w(pe);
          if (S == null ? S = de : j(S, 0, B), h = i(S / g), Q)
            if (crypto.getRandomValues) {
              for (M = crypto.getRandomValues(new Uint32Array(h *= 2)); u < h; )
                o = M[u] * 131072 + (M[u + 1] >>> 11), o >= 9e15 ? (F = crypto.getRandomValues(new Uint32Array(2)), M[u] = F[0], M[u + 1] = F[1]) : (y.push(o % 1e14), u += 2);
              u = h / 2;
            } else if (crypto.randomBytes) {
              for (M = crypto.randomBytes(h *= 7); u < h; )
                o = (M[u] & 31) * 281474976710656 + M[u + 1] * 1099511627776 + M[u + 2] * 4294967296 + M[u + 3] * 16777216 + (M[u + 4] << 16) + (M[u + 5] << 8) + M[u + 6], o >= 9e15 ? crypto.randomBytes(7).copy(M, u) : (y.push(o % 1e14), u += 7);
              u = h / 7;
            } else
              throw Q = !1, Error(c + "crypto unavailable");
          if (!Q)
            for (; u < h; )
              o = E(), o < 9e15 && (y[u++] = o % 1e14);
          for (h = y[--u], S %= g, h && S && (o = T[g - S], y[u] = s(h / o) * o); y[u] === 0; y.pop(), u--) ;
          if (u < 0)
            y = [H = 0];
          else {
            for (H = -1; y[0] === 0; y.splice(0, 1), H -= g) ;
            for (u = 1, o = y[0]; o >= 10; o /= 10, u++) ;
            u < g && (H -= g - u);
          }
          return x.e = H, x.c = y, x;
        };
      }(), w.sum = function() {
        for (var _ = 1, E = arguments, S = new w(E[0]); _ < E.length; ) S = S.plus(E[_++]);
        return S;
      }, re = /* @__PURE__ */ function() {
        var _ = "0123456789";
        function E(S, M, F, H) {
          for (var h, o = [0], u, y = 0, x = S.length; y < x; ) {
            for (u = o.length; u--; o[u] *= M) ;
            for (o[0] += H.indexOf(S.charAt(y++)), h = 0; h < o.length; h++)
              o[h] > F - 1 && (o[h + 1] == null && (o[h + 1] = 0), o[h + 1] += o[h] / F | 0, o[h] %= F);
          }
          return o.reverse();
        }
        return function(S, M, F, H, h) {
          var o, u, y, x, v, L, oe, me, ge = S.indexOf("."), Be = de, d = N;
          for (ge >= 0 && (x = ye, ye = 0, S = S.replace(".", ""), me = new w(M), L = me.pow(S.length - ge), ye = x, me.c = E(
            k(U(L.c), L.e, "0"),
            10,
            F,
            _
          ), me.e = me.c.length), oe = E(S, M, F, h ? (o = Z, _) : (o = _, Z)), y = x = oe.length; oe[--x] == 0; oe.pop()) ;
          if (!oe[0]) return o.charAt(0);
          if (ge < 0 ? --y : (L.c = oe, L.e = y, L.s = H, L = K(L, me, Be, d, F), oe = L.c, v = L.r, y = L.e), u = y + Be + 1, ge = oe[u], x = F / 2, v = v || u < 0 || oe[u + 1] != null, v = d < 4 ? (ge != null || v) && (d == 0 || d == (L.s < 0 ? 3 : 2)) : ge > x || ge == x && (d == 4 || v || d == 6 && oe[u - 1] & 1 || d == (L.s < 0 ? 8 : 7)), u < 1 || !oe[0])
            S = v ? k(o.charAt(1), -Be, o.charAt(0)) : o.charAt(0);
          else {
            if (oe.length = u, v)
              for (--F; ++oe[--u] > F; )
                oe[u] = 0, u || (++y, oe = [1].concat(oe));
            for (x = oe.length; !oe[--x]; ) ;
            for (ge = 0, S = ""; ge <= x; S += o.charAt(oe[ge++])) ;
            S = k(S, y, o.charAt(0));
          }
          return S;
        };
      }(), K = /* @__PURE__ */ function() {
        function _(M, F, H) {
          var h, o, u, y, x = 0, v = M.length, L = F % O, oe = F / O | 0;
          for (M = M.slice(); v--; )
            u = M[v] % O, y = M[v] / O | 0, h = oe * u + y * L, o = L * u + h % O * O + x, x = (o / H | 0) + (h / O | 0) + oe * y, M[v] = o % H;
          return x && (M = [x].concat(M)), M;
        }
        function E(M, F, H, h) {
          var o, u;
          if (H != h)
            u = H > h ? 1 : -1;
          else
            for (o = u = 0; o < H; o++)
              if (M[o] != F[o]) {
                u = M[o] > F[o] ? 1 : -1;
                break;
              }
          return u;
        }
        function S(M, F, H, h) {
          for (var o = 0; H--; )
            M[H] -= o, o = M[H] < F[H] ? 1 : 0, M[H] = o * h + M[H] - F[H];
          for (; !M[0] && M.length > 1; M.splice(0, 1)) ;
        }
        return function(M, F, H, h, o) {
          var u, y, x, v, L, oe, me, ge, Be, d, f, l, A, C, W, D, Te, Oe = M.s == F.s ? 1 : -1, Re = M.c, Se = F.c;
          if (!Re || !Re[0] || !Se || !Se[0])
            return new w(
              // Return NaN if either NaN, or both Infinity or 0.
              !M.s || !F.s || (Re ? Se && Re[0] == Se[0] : !Se) ? NaN : (
                // Return ±0 if x is ±0 or y is ±Infinity, or return ±Infinity as y is ±0.
                Re && Re[0] == 0 || !Se ? Oe * 0 : Oe / 0
              )
            );
          for (ge = new w(Oe), Be = ge.c = [], y = M.e - F.e, Oe = H + y + 1, o || (o = p, y = I(M.e / g) - I(F.e / g), Oe = Oe / g | 0), x = 0; Se[x] == (Re[x] || 0); x++) ;
          if (Se[x] > (Re[x] || 0) && y--, Oe < 0)
            Be.push(1), v = !0;
          else {
            for (C = Re.length, D = Se.length, x = 0, Oe += 2, L = s(o / (Se[0] + 1)), L > 1 && (Se = _(Se, L, o), Re = _(Re, L, o), D = Se.length, C = Re.length), A = D, d = Re.slice(0, D), f = d.length; f < D; d[f++] = 0) ;
            Te = Se.slice(), Te = [0].concat(Te), W = Se[0], Se[1] >= o / 2 && W++;
            do {
              if (L = 0, u = E(Se, d, D, f), u < 0) {
                if (l = d[0], D != f && (l = l * o + (d[1] || 0)), L = s(l / W), L > 1)
                  for (L >= o && (L = o - 1), oe = _(Se, L, o), me = oe.length, f = d.length; E(oe, d, me, f) == 1; )
                    L--, S(oe, D < me ? Te : Se, me, o), me = oe.length, u = 1;
                else
                  L == 0 && (u = L = 1), oe = Se.slice(), me = oe.length;
                if (me < f && (oe = [0].concat(oe)), S(d, oe, f, o), f = d.length, u == -1)
                  for (; E(Se, d, D, f) < 1; )
                    L++, S(d, D < f ? Te : Se, f, o), f = d.length;
              } else u === 0 && (L++, d = [0]);
              Be[x++] = L, d[0] ? d[f++] = Re[A] || 0 : (d = [Re[A]], f = 1);
            } while ((A++ < C || d[0] != null) && Oe--);
            v = d[0] != null, Be[0] || Be.splice(0, 1);
          }
          if (o == p) {
            for (x = 1, Oe = Be[0]; Oe >= 10; Oe /= 10, x++) ;
            ae(ge, H + (ge.e = x + y * g - 1) + 1, h, v);
          } else
            ge.e = y, ge.r = +v;
          return ge;
        };
      }();
      function ne(_, E, S, M) {
        var F, H, h, o, u;
        if (S == null ? S = N : j(S, 0, 8), !_.c) return _.toString();
        if (F = _.c[0], h = _.e, E == null)
          u = U(_.c), u = M == 1 || M == 2 && (h <= P || h >= Y) ? ee(u, h) : k(u, h, "0");
        else if (_ = ae(new w(_), E, S), H = _.e, u = U(_.c), o = u.length, M == 1 || M == 2 && (E <= H || H <= P)) {
          for (; o < E; u += "0", o++) ;
          u = ee(u, H);
        } else if (E -= h, u = k(u, H, "0"), H + 1 > o) {
          if (--E > 0) for (u += "."; E--; u += "0") ;
        } else if (E += H - o, E > 0)
          for (H + 1 == o && (u += "."); E--; u += "0") ;
        return _.s < 0 && F ? "-" + u : u;
      }
      function he(_, E) {
        for (var S, M, F = 1, H = new w(_[0]); F < _.length; F++)
          M = new w(_[F]), (!M.s || (S = V(H, M)) === E || S === 0 && H.s === E) && (H = M);
        return H;
      }
      function Ee(_, E, S) {
        for (var M = 1, F = E.length; !E[--F]; E.pop()) ;
        for (F = E[0]; F >= 10; F /= 10, M++) ;
        return (S = M + S * g - 1) > G ? _.c = _.e = null : S < z ? _.c = [_.e = 0] : (_.e = S, _.c = E), _;
      }
      ue = /* @__PURE__ */ function() {
        var _ = /^(-?)0([xbo])(?=\w[\w.]*$)/i, E = /^([^.]+)\.$/, S = /^\.([^.]+)$/, M = /^-?(Infinity|NaN)$/, F = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
        return function(H, h, o, u) {
          var y, x = o ? h : h.replace(F, "");
          if (M.test(x))
            H.s = isNaN(x) ? null : x < 0 ? -1 : 1;
          else {
            if (!o && (x = x.replace(_, function(v, L, oe) {
              return y = (oe = oe.toLowerCase()) == "x" ? 16 : oe == "b" ? 2 : 8, !u || u == y ? L : v;
            }), u && (y = u, x = x.replace(E, "$1").replace(S, "0.$1")), h != x))
              return new w(x, y);
            if (w.DEBUG)
              throw Error(c + "Not a" + (u ? " base " + u : "") + " number: " + h);
            H.s = null;
          }
          H.c = H.e = null;
        };
      }();
      function ae(_, E, S, M) {
        var F, H, h, o, u, y, x, v = _.c, L = T;
        if (v) {
          e: {
            for (F = 1, o = v[0]; o >= 10; o /= 10, F++) ;
            if (H = E - F, H < 0)
              H += g, h = E, u = v[y = 0], x = s(u / L[F - h - 1] % 10);
            else if (y = i((H + 1) / g), y >= v.length)
              if (M) {
                for (; v.length <= y; v.push(0)) ;
                u = x = 0, F = 1, H %= g, h = H - g + 1;
              } else
                break e;
            else {
              for (u = o = v[y], F = 1; o >= 10; o /= 10, F++) ;
              H %= g, h = H - g + F, x = h < 0 ? 0 : s(u / L[F - h - 1] % 10);
            }
            if (M = M || E < 0 || // Are there any non-zero digits after the rounding digit?
            // The expression  n % pows10[d - j - 1]  returns all digits of n to the right
            // of the digit at j, e.g. if n is 908714 and j is 2, the expression gives 714.
            v[y + 1] != null || (h < 0 ? u : u % L[F - h - 1]), M = S < 4 ? (x || M) && (S == 0 || S == (_.s < 0 ? 3 : 2)) : x > 5 || x == 5 && (S == 4 || M || S == 6 && // Check whether the digit to the left of the rounding digit is odd.
            (H > 0 ? h > 0 ? u / L[F - h] : 0 : v[y - 1]) % 10 & 1 || S == (_.s < 0 ? 8 : 7)), E < 1 || !v[0])
              return v.length = 0, M ? (E -= _.e + 1, v[0] = L[(g - E % g) % g], _.e = -E || 0) : v[0] = _.e = 0, _;
            if (H == 0 ? (v.length = y, o = 1, y--) : (v.length = y + 1, o = L[g - H], v[y] = h > 0 ? s(u / L[F - h] % L[h]) * o : 0), M)
              for (; ; )
                if (y == 0) {
                  for (H = 1, h = v[0]; h >= 10; h /= 10, H++) ;
                  for (h = v[0] += o, o = 1; h >= 10; h /= 10, o++) ;
                  H != o && (_.e++, v[0] == p && (v[0] = 1));
                  break;
                } else {
                  if (v[y] += o, v[y] != p) break;
                  v[y--] = 0, o = 1;
                }
            for (H = v.length; v[--H] === 0; v.pop()) ;
          }
          _.e > G ? _.c = _.e = null : _.e < z && (_.c = [_.e = 0]);
        }
        return _;
      }
      function fe(_) {
        var E, S = _.e;
        return S === null ? _.toString() : (E = U(_.c), E = S <= P || S >= Y ? ee(E, S) : k(E, S, "0"), _.s < 0 ? "-" + E : E);
      }
      return ie.absoluteValue = ie.abs = function() {
        var _ = new w(this);
        return _.s < 0 && (_.s = 1), _;
      }, ie.comparedTo = function(_, E) {
        return V(this, new w(_, E));
      }, ie.decimalPlaces = ie.dp = function(_, E) {
        var S, M, F, H = this;
        if (_ != null)
          return j(_, 0, B), E == null ? E = N : j(E, 0, 8), ae(new w(H), _ + H.e + 1, E);
        if (!(S = H.c)) return null;
        if (M = ((F = S.length - 1) - I(this.e / g)) * g, F = S[F]) for (; F % 10 == 0; F /= 10, M--) ;
        return M < 0 && (M = 0), M;
      }, ie.dividedBy = ie.div = function(_, E) {
        return K(this, new w(_, E), de, N);
      }, ie.dividedToIntegerBy = ie.idiv = function(_, E) {
        return K(this, new w(_, E), 0, 1);
      }, ie.exponentiatedBy = ie.pow = function(_, E) {
        var S, M, F, H, h, o, u, y, x, v = this;
        if (_ = new w(_), _.c && !_.isInteger())
          throw Error(c + "Exponent not an integer: " + fe(_));
        if (E != null && (E = new w(E)), o = _.e > 14, !v.c || !v.c[0] || v.c[0] == 1 && !v.e && v.c.length == 1 || !_.c || !_.c[0])
          return x = new w(Math.pow(+fe(v), o ? _.s * (2 - q(_)) : +fe(_))), E ? x.mod(E) : x;
        if (u = _.s < 0, E) {
          if (E.c ? !E.c[0] : !E.s) return new w(NaN);
          M = !u && v.isInteger() && E.isInteger(), M && (v = v.mod(E));
        } else {
          if (_.e > 9 && (v.e > 0 || v.e < -1 || (v.e == 0 ? v.c[0] > 1 || o && v.c[1] >= 24e7 : v.c[0] < 8e13 || o && v.c[0] <= 9999975e7)))
            return H = v.s < 0 && q(_) ? -0 : 0, v.e > -1 && (H = 1 / H), new w(u ? 1 / H : H);
          ye && (H = i(ye / g + 2));
        }
        for (o ? (S = new w(0.5), u && (_.s = 1), y = q(_)) : (F = Math.abs(+fe(_)), y = F % 2), x = new w(pe); ; ) {
          if (y) {
            if (x = x.times(v), !x.c) break;
            H ? x.c.length > H && (x.c.length = H) : M && (x = x.mod(E));
          }
          if (F) {
            if (F = s(F / 2), F === 0) break;
            y = F % 2;
          } else if (_ = _.times(S), ae(_, _.e + 1, 1), _.e > 14)
            y = q(_);
          else {
            if (F = +fe(_), F === 0) break;
            y = F % 2;
          }
          v = v.times(v), H ? v.c && v.c.length > H && (v.c.length = H) : M && (v = v.mod(E));
        }
        return M ? x : (u && (x = pe.div(x)), E ? x.mod(E) : H ? ae(x, ye, N, h) : x);
      }, ie.integerValue = function(_) {
        var E = new w(this);
        return _ == null ? _ = N : j(_, 0, 8), ae(E, E.e + 1, _);
      }, ie.isEqualTo = ie.eq = function(_, E) {
        return V(this, new w(_, E)) === 0;
      }, ie.isFinite = function() {
        return !!this.c;
      }, ie.isGreaterThan = ie.gt = function(_, E) {
        return V(this, new w(_, E)) > 0;
      }, ie.isGreaterThanOrEqualTo = ie.gte = function(_, E) {
        return (E = V(this, new w(_, E))) === 1 || E === 0;
      }, ie.isInteger = function() {
        return !!this.c && I(this.e / g) > this.c.length - 2;
      }, ie.isLessThan = ie.lt = function(_, E) {
        return V(this, new w(_, E)) < 0;
      }, ie.isLessThanOrEqualTo = ie.lte = function(_, E) {
        return (E = V(this, new w(_, E))) === -1 || E === 0;
      }, ie.isNaN = function() {
        return !this.s;
      }, ie.isNegative = function() {
        return this.s < 0;
      }, ie.isPositive = function() {
        return this.s > 0;
      }, ie.isZero = function() {
        return !!this.c && this.c[0] == 0;
      }, ie.minus = function(_, E) {
        var S, M, F, H, h = this, o = h.s;
        if (_ = new w(_, E), E = _.s, !o || !E) return new w(NaN);
        if (o != E)
          return _.s = -E, h.plus(_);
        var u = h.e / g, y = _.e / g, x = h.c, v = _.c;
        if (!u || !y) {
          if (!x || !v) return x ? (_.s = -E, _) : new w(v ? h : NaN);
          if (!x[0] || !v[0])
            return v[0] ? (_.s = -E, _) : new w(x[0] ? h : (
              // IEEE 754 (2008) 6.3: n - n = -0 when rounding to -Infinity
              N == 3 ? -0 : 0
            ));
        }
        if (u = I(u), y = I(y), x = x.slice(), o = u - y) {
          for ((H = o < 0) ? (o = -o, F = x) : (y = u, F = v), F.reverse(), E = o; E--; F.push(0)) ;
          F.reverse();
        } else
          for (M = (H = (o = x.length) < (E = v.length)) ? o : E, o = E = 0; E < M; E++)
            if (x[E] != v[E]) {
              H = x[E] < v[E];
              break;
            }
        if (H && (F = x, x = v, v = F, _.s = -_.s), E = (M = v.length) - (S = x.length), E > 0) for (; E--; x[S++] = 0) ;
        for (E = p - 1; M > o; ) {
          if (x[--M] < v[M]) {
            for (S = M; S && !x[--S]; x[S] = E) ;
            --x[S], x[M] += p;
          }
          x[M] -= v[M];
        }
        for (; x[0] == 0; x.splice(0, 1), --y) ;
        return x[0] ? Ee(_, x, y) : (_.s = N == 3 ? -1 : 1, _.c = [_.e = 0], _);
      }, ie.modulo = ie.mod = function(_, E) {
        var S, M, F = this;
        return _ = new w(_, E), !F.c || !_.s || _.c && !_.c[0] ? new w(NaN) : !_.c || F.c && !F.c[0] ? new w(F) : (le == 9 ? (M = _.s, _.s = 1, S = K(F, _, 0, 3), _.s = M, S.s *= M) : S = K(F, _, 0, le), _ = F.minus(S.times(_)), !_.c[0] && le == 1 && (_.s = F.s), _);
      }, ie.multipliedBy = ie.times = function(_, E) {
        var S, M, F, H, h, o, u, y, x, v, L, oe, me, ge, Be, d = this, f = d.c, l = (_ = new w(_, E)).c;
        if (!f || !l || !f[0] || !l[0])
          return !d.s || !_.s || f && !f[0] && !l || l && !l[0] && !f ? _.c = _.e = _.s = null : (_.s *= d.s, !f || !l ? _.c = _.e = null : (_.c = [0], _.e = 0)), _;
        for (M = I(d.e / g) + I(_.e / g), _.s *= d.s, u = f.length, v = l.length, u < v && (me = f, f = l, l = me, F = u, u = v, v = F), F = u + v, me = []; F--; me.push(0)) ;
        for (ge = p, Be = O, F = v; --F >= 0; ) {
          for (S = 0, L = l[F] % Be, oe = l[F] / Be | 0, h = u, H = F + h; H > F; )
            y = f[--h] % Be, x = f[h] / Be | 0, o = oe * y + x * L, y = L * y + o % Be * Be + me[H] + S, S = (y / ge | 0) + (o / Be | 0) + oe * x, me[H--] = y % ge;
          me[H] = S;
        }
        return S ? ++M : me.splice(0, 1), Ee(_, me, M);
      }, ie.negated = function() {
        var _ = new w(this);
        return _.s = -_.s || null, _;
      }, ie.plus = function(_, E) {
        var S, M = this, F = M.s;
        if (_ = new w(_, E), E = _.s, !F || !E) return new w(NaN);
        if (F != E)
          return _.s = -E, M.minus(_);
        var H = M.e / g, h = _.e / g, o = M.c, u = _.c;
        if (!H || !h) {
          if (!o || !u) return new w(F / 0);
          if (!o[0] || !u[0]) return u[0] ? _ : new w(o[0] ? M : F * 0);
        }
        if (H = I(H), h = I(h), o = o.slice(), F = H - h) {
          for (F > 0 ? (h = H, S = u) : (F = -F, S = o), S.reverse(); F--; S.push(0)) ;
          S.reverse();
        }
        for (F = o.length, E = u.length, F - E < 0 && (S = u, u = o, o = S, E = F), F = 0; E; )
          F = (o[--E] = o[E] + u[E] + F) / p | 0, o[E] = p === o[E] ? 0 : o[E] % p;
        return F && (o = [F].concat(o), ++h), Ee(_, o, h);
      }, ie.precision = ie.sd = function(_, E) {
        var S, M, F, H = this;
        if (_ != null && _ !== !!_)
          return j(_, 1, B), E == null ? E = N : j(E, 0, 8), ae(new w(H), _, E);
        if (!(S = H.c)) return null;
        if (F = S.length - 1, M = F * g + 1, F = S[F]) {
          for (; F % 10 == 0; F /= 10, M--) ;
          for (F = S[0]; F >= 10; F /= 10, M++) ;
        }
        return _ && H.e + 1 > M && (M = H.e + 1), M;
      }, ie.shiftedBy = function(_) {
        return j(_, -b, b), this.times("1e" + _);
      }, ie.squareRoot = ie.sqrt = function() {
        var _, E, S, M, F, H = this, h = H.c, o = H.s, u = H.e, y = de + 4, x = new w("0.5");
        if (o !== 1 || !h || !h[0])
          return new w(!o || o < 0 && (!h || h[0]) ? NaN : h ? H : 1 / 0);
        if (o = Math.sqrt(+fe(H)), o == 0 || o == 1 / 0 ? (E = U(h), (E.length + u) % 2 == 0 && (E += "0"), o = Math.sqrt(+E), u = I((u + 1) / 2) - (u < 0 || u % 2), o == 1 / 0 ? E = "5e" + u : (E = o.toExponential(), E = E.slice(0, E.indexOf("e") + 1) + u), S = new w(E)) : S = new w(o + ""), S.c[0]) {
          for (u = S.e, o = u + y, o < 3 && (o = 0); ; )
            if (F = S, S = x.times(F.plus(K(H, F, y, 1))), U(F.c).slice(0, o) === (E = U(S.c)).slice(0, o))
              if (S.e < u && --o, E = E.slice(o - 3, o + 1), E == "9999" || !M && E == "4999") {
                if (!M && (ae(F, F.e + de + 2, 0), F.times(F).eq(H))) {
                  S = F;
                  break;
                }
                y += 4, o += 4, M = 1;
              } else {
                (!+E || !+E.slice(1) && E.charAt(0) == "5") && (ae(S, S.e + de + 2, 1), _ = !S.times(S).eq(H));
                break;
              }
        }
        return ae(S, S.e + de + 1, N, _);
      }, ie.toExponential = function(_, E) {
        return _ != null && (j(_, 0, B), _++), ne(this, _, E, 1);
      }, ie.toFixed = function(_, E) {
        return _ != null && (j(_, 0, B), _ = _ + this.e + 1), ne(this, _, E);
      }, ie.toFormat = function(_, E, S) {
        var M, F = this;
        if (S == null)
          _ != null && E && typeof E == "object" ? (S = E, E = null) : _ && typeof _ == "object" ? (S = _, _ = E = null) : S = se;
        else if (typeof S != "object")
          throw Error(c + "Argument not an object: " + S);
        if (M = F.toFixed(_, E), F.c) {
          var H, h = M.split("."), o = +S.groupSize, u = +S.secondaryGroupSize, y = S.groupSeparator || "", x = h[0], v = h[1], L = F.s < 0, oe = L ? x.slice(1) : x, me = oe.length;
          if (u && (H = o, o = u, u = H, me -= H), o > 0 && me > 0) {
            for (H = me % o || o, x = oe.substr(0, H); H < me; H += o) x += y + oe.substr(H, o);
            u > 0 && (x += y + oe.slice(H)), L && (x = "-" + x);
          }
          M = v ? x + (S.decimalSeparator || "") + ((u = +S.fractionGroupSize) ? v.replace(
            new RegExp("\\d{" + u + "}\\B", "g"),
            "$&" + (S.fractionGroupSeparator || "")
          ) : v) : x;
        }
        return (S.prefix || "") + M + (S.suffix || "");
      }, ie.toFraction = function(_) {
        var E, S, M, F, H, h, o, u, y, x, v, L, oe = this, me = oe.c;
        if (_ != null && (o = new w(_), !o.isInteger() && (o.c || o.s !== 1) || o.lt(pe)))
          throw Error(c + "Argument " + (o.isInteger() ? "out of range: " : "not an integer: ") + fe(o));
        if (!me) return new w(oe);
        for (E = new w(pe), y = S = new w(pe), M = u = new w(pe), L = U(me), H = E.e = L.length - oe.e - 1, E.c[0] = T[(h = H % g) < 0 ? g + h : h], _ = !_ || o.comparedTo(E) > 0 ? H > 0 ? E : y : o, h = G, G = 1 / 0, o = new w(L), u.c[0] = 0; x = K(o, E, 0, 1), F = S.plus(x.times(M)), F.comparedTo(_) != 1; )
          S = M, M = F, y = u.plus(x.times(F = y)), u = F, E = o.minus(x.times(F = E)), o = F;
        return F = K(_.minus(S), M, 0, 1), u = u.plus(F.times(y)), S = S.plus(F.times(M)), u.s = y.s = oe.s, H = H * 2, v = K(y, M, H, N).minus(oe).abs().comparedTo(
          K(u, S, H, N).minus(oe).abs()
        ) < 1 ? [y, M] : [u, S], G = h, v;
      }, ie.toNumber = function() {
        return +fe(this);
      }, ie.toPrecision = function(_, E) {
        return _ != null && j(_, 1, B), ne(this, _, E, 2);
      }, ie.toString = function(_) {
        var E, S = this, M = S.s, F = S.e;
        return F === null ? M ? (E = "Infinity", M < 0 && (E = "-" + E)) : E = "NaN" : (_ == null ? E = F <= P || F >= Y ? ee(U(S.c), F) : k(U(S.c), F, "0") : _ === 10 && ce ? (S = ae(new w(S), de + F + 1, N), E = k(U(S.c), S.e, "0")) : (j(_, 2, Z.length, "Base"), E = re(k(U(S.c), F, "0"), 10, _, M, !0)), M < 0 && S.c[0] && (E = "-" + E)), E;
      }, ie.valueOf = ie.toJSON = function() {
        return fe(this);
      }, ie._isBigNumber = !0, J != null && w.set(J), w;
    }
    function I(J) {
      var K = J | 0;
      return J > 0 || J === K ? K : K - 1;
    }
    function U(J) {
      for (var K, re, ue = 1, ie = J.length, pe = J[0] + ""; ue < ie; ) {
        for (K = J[ue++] + "", re = g - K.length; re--; K = "0" + K) ;
        pe += K;
      }
      for (ie = pe.length; pe.charCodeAt(--ie) === 48; ) ;
      return pe.slice(0, ie + 1 || 1);
    }
    function V(J, K) {
      var re, ue, ie = J.c, pe = K.c, de = J.s, N = K.s, P = J.e, Y = K.e;
      if (!de || !N) return null;
      if (re = ie && !ie[0], ue = pe && !pe[0], re || ue) return re ? ue ? 0 : -N : de;
      if (de != N) return de;
      if (re = de < 0, ue = P == Y, !ie || !pe) return ue ? 0 : !ie ^ re ? 1 : -1;
      if (!ue) return P > Y ^ re ? 1 : -1;
      for (N = (P = ie.length) < (Y = pe.length) ? P : Y, de = 0; de < N; de++) if (ie[de] != pe[de]) return ie[de] > pe[de] ^ re ? 1 : -1;
      return P == Y ? 0 : P > Y ^ re ? 1 : -1;
    }
    function j(J, K, re, ue) {
      if (J < K || J > re || J !== s(J))
        throw Error(c + (ue || "Argument") + (typeof J == "number" ? J < K || J > re ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(J));
    }
    function q(J) {
      var K = J.c.length - 1;
      return I(J.e / g) == K && J.c[K] % 2 != 0;
    }
    function ee(J, K) {
      return (J.length > 1 ? J.charAt(0) + "." + J.slice(1) : J) + (K < 0 ? "e" : "e+") + K;
    }
    function k(J, K, re) {
      var ue, ie;
      if (K < 0) {
        for (ie = re + "."; ++K; ie += re) ;
        J = ie + J;
      } else if (ue = J.length, ++K > ue) {
        for (ie = re, K -= ue; --K; ie += re) ;
        J += ie;
      } else K < ue && (J = J.slice(0, K) + "." + J.slice(K));
      return J;
    }
    r = m(), r.default = r.BigNumber = r, t.exports ? t.exports = r : (e || (e = typeof self < "u" && self ? self : window), e.BigNumber = r);
  })(en);
})(du);
var es = du.exports, M0 = function(e, r, n) {
  var i = new e.Uint8Array(n), s = r.pushInt, c = r.pushInt32, a = r.pushInt32Neg, p = r.pushInt64, g = r.pushInt64Neg, b = r.pushFloat, T = r.pushFloatSingle, O = r.pushFloatDouble, B = r.pushTrue, m = r.pushFalse, I = r.pushUndefined, U = r.pushNull, V = r.pushInfinity, j = r.pushInfinityNeg, q = r.pushNaN, ee = r.pushNaNNeg, k = r.pushArrayStart, J = r.pushArrayStartFixed, K = r.pushArrayStartFixed32, re = r.pushArrayStartFixed64, ue = r.pushObjectStart, ie = r.pushObjectStartFixed, pe = r.pushObjectStartFixed32, de = r.pushObjectStartFixed64, N = r.pushByteString, P = r.pushByteStringStart, Y = r.pushUtf8String, z = r.pushUtf8StringStart, G = r.pushSimpleUnassigned, Q = r.pushTagStart, le = r.pushTagStart4, ye = r.pushTagStart8, se = r.pushTagUnassigned, Z = r.pushBreak, ce = e.Math.pow, w = 0, ne = 0, he = 0;
  function Ee(R) {
    for (R = R | 0, w = 0, ne = R; (w | 0) < (ne | 0) && (he = qe[i[w] & 255](i[w] | 0) | 0, !((he | 0) > 0)); )
      ;
    return he | 0;
  }
  function ae(R) {
    return R = R | 0, ((w | 0) + (R | 0) | 0) < (ne | 0) ? 0 : 1;
  }
  function fe(R) {
    return R = R | 0, i[R | 0] << 8 | i[R + 1 | 0] | 0;
  }
  function _(R) {
    return R = R | 0, i[R | 0] << 24 | i[R + 1 | 0] << 16 | i[R + 2 | 0] << 8 | i[R + 3 | 0] | 0;
  }
  function E(R) {
    return R = R | 0, s(R | 0), w = w + 1 | 0, 0;
  }
  function S(R) {
    return R = R | 0, ae(1) | 0 ? 1 : (s(i[w + 1 | 0] | 0), w = w + 2 | 0, 0);
  }
  function M(R) {
    return R = R | 0, ae(2) | 0 ? 1 : (s(
      fe(w + 1 | 0) | 0
    ), w = w + 3 | 0, 0);
  }
  function F(R) {
    return R = R | 0, ae(4) | 0 ? 1 : (c(
      fe(w + 1 | 0) | 0,
      fe(w + 3 | 0) | 0
    ), w = w + 5 | 0, 0);
  }
  function H(R) {
    return R = R | 0, ae(8) | 0 ? 1 : (p(
      fe(w + 1 | 0) | 0,
      fe(w + 3 | 0) | 0,
      fe(w + 5 | 0) | 0,
      fe(w + 7 | 0) | 0
    ), w = w + 9 | 0, 0);
  }
  function h(R) {
    return R = R | 0, s(-1 - (R - 32 | 0) | 0), w = w + 1 | 0, 0;
  }
  function o(R) {
    return R = R | 0, ae(1) | 0 ? 1 : (s(
      -1 - (i[w + 1 | 0] | 0) | 0
    ), w = w + 2 | 0, 0);
  }
  function u(R) {
    R = R | 0;
    var Ae = 0;
    return ae(2) | 0 ? 1 : (Ae = fe(w + 1 | 0) | 0, s(-1 - (Ae | 0) | 0), w = w + 3 | 0, 0);
  }
  function y(R) {
    return R = R | 0, ae(4) | 0 ? 1 : (a(
      fe(w + 1 | 0) | 0,
      fe(w + 3 | 0) | 0
    ), w = w + 5 | 0, 0);
  }
  function x(R) {
    return R = R | 0, ae(8) | 0 ? 1 : (g(
      fe(w + 1 | 0) | 0,
      fe(w + 3 | 0) | 0,
      fe(w + 5 | 0) | 0,
      fe(w + 7 | 0) | 0
    ), w = w + 9 | 0, 0);
  }
  function v(R) {
    R = R | 0;
    var Ae = 0, ve = 0, Ne = 0;
    return Ne = R - 64 | 0, ae(Ne | 0) | 0 ? 1 : (Ae = w + 1 | 0, ve = (w + 1 | 0) + (Ne | 0) | 0, N(Ae | 0, ve | 0), w = ve | 0, 0);
  }
  function L(R) {
    R = R | 0;
    var Ae = 0, ve = 0, Ne = 0;
    return ae(1) | 0 || (Ne = i[w + 1 | 0] | 0, Ae = w + 2 | 0, ve = (w + 2 | 0) + (Ne | 0) | 0, ae(Ne + 1 | 0) | 0) ? 1 : (N(Ae | 0, ve | 0), w = ve | 0, 0);
  }
  function oe(R) {
    R = R | 0;
    var Ae = 0, ve = 0, Ne = 0;
    return ae(2) | 0 || (Ne = fe(w + 1 | 0) | 0, Ae = w + 3 | 0, ve = (w + 3 | 0) + (Ne | 0) | 0, ae(Ne + 2 | 0) | 0) ? 1 : (N(Ae | 0, ve | 0), w = ve | 0, 0);
  }
  function me(R) {
    R = R | 0;
    var Ae = 0, ve = 0, Ne = 0;
    return ae(4) | 0 || (Ne = _(w + 1 | 0) | 0, Ae = w + 5 | 0, ve = (w + 5 | 0) + (Ne | 0) | 0, ae(Ne + 4 | 0) | 0) ? 1 : (N(Ae | 0, ve | 0), w = ve | 0, 0);
  }
  function ge(R) {
    return R = R | 0, 1;
  }
  function Be(R) {
    return R = R | 0, P(), w = w + 1 | 0, 0;
  }
  function d(R) {
    R = R | 0;
    var Ae = 0, ve = 0, Ne = 0;
    return Ne = R - 96 | 0, ae(Ne | 0) | 0 ? 1 : (Ae = w + 1 | 0, ve = (w + 1 | 0) + (Ne | 0) | 0, Y(Ae | 0, ve | 0), w = ve | 0, 0);
  }
  function f(R) {
    R = R | 0;
    var Ae = 0, ve = 0, Ne = 0;
    return ae(1) | 0 || (Ne = i[w + 1 | 0] | 0, Ae = w + 2 | 0, ve = (w + 2 | 0) + (Ne | 0) | 0, ae(Ne + 1 | 0) | 0) ? 1 : (Y(Ae | 0, ve | 0), w = ve | 0, 0);
  }
  function l(R) {
    R = R | 0;
    var Ae = 0, ve = 0, Ne = 0;
    return ae(2) | 0 || (Ne = fe(w + 1 | 0) | 0, Ae = w + 3 | 0, ve = (w + 3 | 0) + (Ne | 0) | 0, ae(Ne + 2 | 0) | 0) ? 1 : (Y(Ae | 0, ve | 0), w = ve | 0, 0);
  }
  function A(R) {
    R = R | 0;
    var Ae = 0, ve = 0, Ne = 0;
    return ae(4) | 0 || (Ne = _(w + 1 | 0) | 0, Ae = w + 5 | 0, ve = (w + 5 | 0) + (Ne | 0) | 0, ae(Ne + 4 | 0) | 0) ? 1 : (Y(Ae | 0, ve | 0), w = ve | 0, 0);
  }
  function C(R) {
    return R = R | 0, 1;
  }
  function W(R) {
    return R = R | 0, z(), w = w + 1 | 0, 0;
  }
  function D(R) {
    return R = R | 0, J(R - 128 | 0), w = w + 1 | 0, 0;
  }
  function Te(R) {
    return R = R | 0, ae(1) | 0 ? 1 : (J(i[w + 1 | 0] | 0), w = w + 2 | 0, 0);
  }
  function Oe(R) {
    return R = R | 0, ae(2) | 0 ? 1 : (J(
      fe(w + 1 | 0) | 0
    ), w = w + 3 | 0, 0);
  }
  function Re(R) {
    return R = R | 0, ae(4) | 0 ? 1 : (K(
      fe(w + 1 | 0) | 0,
      fe(w + 3 | 0) | 0
    ), w = w + 5 | 0, 0);
  }
  function Se(R) {
    return R = R | 0, ae(8) | 0 ? 1 : (re(
      fe(w + 1 | 0) | 0,
      fe(w + 3 | 0) | 0,
      fe(w + 5 | 0) | 0,
      fe(w + 7 | 0) | 0
    ), w = w + 9 | 0, 0);
  }
  function ke(R) {
    return R = R | 0, k(), w = w + 1 | 0, 0;
  }
  function $e(R) {
    R = R | 0;
    var Ae = 0;
    return Ae = R - 160 | 0, ae(Ae | 0) | 0 ? 1 : (ie(Ae | 0), w = w + 1 | 0, 0);
  }
  function as(R) {
    return R = R | 0, ae(1) | 0 ? 1 : (ie(i[w + 1 | 0] | 0), w = w + 2 | 0, 0);
  }
  function cs(R) {
    return R = R | 0, ae(2) | 0 ? 1 : (ie(
      fe(w + 1 | 0) | 0
    ), w = w + 3 | 0, 0);
  }
  function Je(R) {
    return R = R | 0, ae(4) | 0 ? 1 : (pe(
      fe(w + 1 | 0) | 0,
      fe(w + 3 | 0) | 0
    ), w = w + 5 | 0, 0);
  }
  function fr(R) {
    return R = R | 0, ae(8) | 0 ? 1 : (de(
      fe(w + 1 | 0) | 0,
      fe(w + 3 | 0) | 0,
      fe(w + 5 | 0) | 0,
      fe(w + 7 | 0) | 0
    ), w = w + 9 | 0, 0);
  }
  function us(R) {
    return R = R | 0, ue(), w = w + 1 | 0, 0;
  }
  function tr(R) {
    return R = R | 0, Q(R - 192 | 0 | 0), w = w + 1 | 0, 0;
  }
  function Hn(R) {
    return R = R | 0, Q(R | 0), w = w + 1 | 0, 0;
  }
  function fs(R) {
    return R = R | 0, Q(R | 0), w = w + 1 | 0, 0;
  }
  function ls(R) {
    return R = R | 0, Q(R | 0), w = w + 1 | 0, 0;
  }
  function ko(R) {
    return R = R | 0, Q(R | 0), w = w + 1 | 0, 0;
  }
  function We(R) {
    return R = R | 0, Q(R - 192 | 0 | 0), w = w + 1 | 0, 0;
  }
  function hs(R) {
    return R = R | 0, Q(R | 0), w = w + 1 | 0, 0;
  }
  function $o(R) {
    return R = R | 0, Q(R | 0), w = w + 1 | 0, 0;
  }
  function Ut(R) {
    return R = R | 0, Q(R | 0), w = w + 1 | 0, 0;
  }
  function Gr(R) {
    return R = R | 0, ae(1) | 0 ? 1 : (Q(i[w + 1 | 0] | 0), w = w + 2 | 0, 0);
  }
  function qn(R) {
    return R = R | 0, ae(2) | 0 ? 1 : (Q(
      fe(w + 1 | 0) | 0
    ), w = w + 3 | 0, 0);
  }
  function Ln(R) {
    return R = R | 0, ae(4) | 0 ? 1 : (le(
      fe(w + 1 | 0) | 0,
      fe(w + 3 | 0) | 0
    ), w = w + 5 | 0, 0);
  }
  function Vn(R) {
    return R = R | 0, ae(8) | 0 ? 1 : (ye(
      fe(w + 1 | 0) | 0,
      fe(w + 3 | 0) | 0,
      fe(w + 5 | 0) | 0,
      fe(w + 7 | 0) | 0
    ), w = w + 9 | 0, 0);
  }
  function je(R) {
    return R = R | 0, G((R | 0) - 224 | 0), w = w + 1 | 0, 0;
  }
  function Ft(R) {
    return R = R | 0, m(), w = w + 1 | 0, 0;
  }
  function Gn(R) {
    return R = R | 0, B(), w = w + 1 | 0, 0;
  }
  function jn(R) {
    return R = R | 0, U(), w = w + 1 | 0, 0;
  }
  function zn(R) {
    return R = R | 0, I(), w = w + 1 | 0, 0;
  }
  function Dn(R) {
    return R = R | 0, ae(1) | 0 ? 1 : (G(i[w + 1 | 0] | 0), w = w + 2 | 0, 0);
  }
  function ds(R) {
    R = R | 0;
    var Ae = 0, ve = 0, Ne = 1, jt = 0, Ye = 0, ps = 0;
    return ae(2) | 0 ? 1 : (Ae = i[w + 1 | 0] | 0, ve = i[w + 2 | 0] | 0, (Ae | 0) & 128 && (Ne = -1), jt = +(((Ae | 0) & 124) >> 2), Ye = +(((Ae | 0) & 3) << 8 | ve), +jt == 0 ? b(+(+Ne * 5960464477539063e-23 * +Ye)) : +jt == 31 ? +Ne == 1 ? +Ye > 0 ? q() : V() : +Ye > 0 ? ee() : j() : b(+(+Ne * ce(2, +(+jt - 25)) * +(1024 + Ye))), w = w + 3 | 0, 0);
  }
  function _e(R) {
    return R = R | 0, ae(4) | 0 ? 1 : (T(
      i[w + 1 | 0] | 0,
      i[w + 2 | 0] | 0,
      i[w + 3 | 0] | 0,
      i[w + 4 | 0] | 0
    ), w = w + 5 | 0, 0);
  }
  function $(R) {
    return R = R | 0, ae(8) | 0 ? 1 : (O(
      i[w + 1 | 0] | 0,
      i[w + 2 | 0] | 0,
      i[w + 3 | 0] | 0,
      i[w + 4 | 0] | 0,
      i[w + 5 | 0] | 0,
      i[w + 6 | 0] | 0,
      i[w + 7 | 0] | 0,
      i[w + 8 | 0] | 0
    ), w = w + 9 | 0, 0);
  }
  function te(R) {
    return R = R | 0, 1;
  }
  function be(R) {
    return R = R | 0, Z(), w = w + 1 | 0, 0;
  }
  var qe = [
    // Integer 0x00..0x17 (0..23)
    E,
    // 0x00
    E,
    // 0x01
    E,
    // 0x02
    E,
    // 0x03
    E,
    // 0x04
    E,
    // 0x05
    E,
    // 0x06
    E,
    // 0x07
    E,
    // 0x08
    E,
    // 0x09
    E,
    // 0x0A
    E,
    // 0x0B
    E,
    // 0x0C
    E,
    // 0x0D
    E,
    // 0x0E
    E,
    // 0x0F
    E,
    // 0x10
    E,
    // 0x11
    E,
    // 0x12
    E,
    // 0x13
    E,
    // 0x14
    E,
    // 0x15
    E,
    // 0x16
    E,
    // 0x17
    // Unsigned integer (one-byte uint8_t follows)
    S,
    // 0x18
    // Unsigned integer (two-byte uint16_t follows)
    M,
    // 0x19
    // Unsigned integer (four-byte uint32_t follows)
    F,
    // 0x1a
    // Unsigned integer (eight-byte uint64_t follows)
    H,
    // 0x1b
    te,
    // 0x1c
    te,
    // 0x1d
    te,
    // 0x1e
    te,
    // 0x1f
    // Negative integer -1-0x00..-1-0x17 (-1..-24)
    h,
    // 0x20
    h,
    // 0x21
    h,
    // 0x22
    h,
    // 0x23
    h,
    // 0x24
    h,
    // 0x25
    h,
    // 0x26
    h,
    // 0x27
    h,
    // 0x28
    h,
    // 0x29
    h,
    // 0x2A
    h,
    // 0x2B
    h,
    // 0x2C
    h,
    // 0x2D
    h,
    // 0x2E
    h,
    // 0x2F
    h,
    // 0x30
    h,
    // 0x31
    h,
    // 0x32
    h,
    // 0x33
    h,
    // 0x34
    h,
    // 0x35
    h,
    // 0x36
    h,
    // 0x37
    // Negative integer -1-n (one-byte uint8_t for n follows)
    o,
    // 0x38
    // Negative integer -1-n (two-byte uint16_t for n follows)
    u,
    // 0x39
    // Negative integer -1-n (four-byte uint32_t for nfollows)
    y,
    // 0x3a
    // Negative integer -1-n (eight-byte uint64_t for n follows)
    x,
    // 0x3b
    te,
    // 0x3c
    te,
    // 0x3d
    te,
    // 0x3e
    te,
    // 0x3f
    // byte string (0x00..0x17 bytes follow)
    v,
    // 0x40
    v,
    // 0x41
    v,
    // 0x42
    v,
    // 0x43
    v,
    // 0x44
    v,
    // 0x45
    v,
    // 0x46
    v,
    // 0x47
    v,
    // 0x48
    v,
    // 0x49
    v,
    // 0x4A
    v,
    // 0x4B
    v,
    // 0x4C
    v,
    // 0x4D
    v,
    // 0x4E
    v,
    // 0x4F
    v,
    // 0x50
    v,
    // 0x51
    v,
    // 0x52
    v,
    // 0x53
    v,
    // 0x54
    v,
    // 0x55
    v,
    // 0x56
    v,
    // 0x57
    // byte string (one-byte uint8_t for n, and then n bytes follow)
    L,
    // 0x58
    // byte string (two-byte uint16_t for n, and then n bytes follow)
    oe,
    // 0x59
    // byte string (four-byte uint32_t for n, and then n bytes follow)
    me,
    // 0x5a
    // byte string (eight-byte uint64_t for n, and then n bytes follow)
    ge,
    // 0x5b
    te,
    // 0x5c
    te,
    // 0x5d
    te,
    // 0x5e
    // byte string, byte strings follow, terminated by "break"
    Be,
    // 0x5f
    // UTF-8 string (0x00..0x17 bytes follow)
    d,
    // 0x60
    d,
    // 0x61
    d,
    // 0x62
    d,
    // 0x63
    d,
    // 0x64
    d,
    // 0x65
    d,
    // 0x66
    d,
    // 0x67
    d,
    // 0x68
    d,
    // 0x69
    d,
    // 0x6A
    d,
    // 0x6B
    d,
    // 0x6C
    d,
    // 0x6D
    d,
    // 0x6E
    d,
    // 0x6F
    d,
    // 0x70
    d,
    // 0x71
    d,
    // 0x72
    d,
    // 0x73
    d,
    // 0x74
    d,
    // 0x75
    d,
    // 0x76
    d,
    // 0x77
    // UTF-8 string (one-byte uint8_t for n, and then n bytes follow)
    f,
    // 0x78
    // UTF-8 string (two-byte uint16_t for n, and then n bytes follow)
    l,
    // 0x79
    // UTF-8 string (four-byte uint32_t for n, and then n bytes follow)
    A,
    // 0x7a
    // UTF-8 string (eight-byte uint64_t for n, and then n bytes follow)
    C,
    // 0x7b
    // UTF-8 string, UTF-8 strings follow, terminated by "break"
    te,
    // 0x7c
    te,
    // 0x7d
    te,
    // 0x7e
    W,
    // 0x7f
    // array (0x00..0x17 data items follow)
    D,
    // 0x80
    D,
    // 0x81
    D,
    // 0x82
    D,
    // 0x83
    D,
    // 0x84
    D,
    // 0x85
    D,
    // 0x86
    D,
    // 0x87
    D,
    // 0x88
    D,
    // 0x89
    D,
    // 0x8A
    D,
    // 0x8B
    D,
    // 0x8C
    D,
    // 0x8D
    D,
    // 0x8E
    D,
    // 0x8F
    D,
    // 0x90
    D,
    // 0x91
    D,
    // 0x92
    D,
    // 0x93
    D,
    // 0x94
    D,
    // 0x95
    D,
    // 0x96
    D,
    // 0x97
    // array (one-byte uint8_t fo, and then n data items follow)
    Te,
    // 0x98
    // array (two-byte uint16_t for n, and then n data items follow)
    Oe,
    // 0x99
    // array (four-byte uint32_t for n, and then n data items follow)
    Re,
    // 0x9a
    // array (eight-byte uint64_t for n, and then n data items follow)
    Se,
    // 0x9b
    // array, data items follow, terminated by "break"
    te,
    // 0x9c
    te,
    // 0x9d
    te,
    // 0x9e
    ke,
    // 0x9f
    // map (0x00..0x17 pairs of data items follow)
    $e,
    // 0xa0
    $e,
    // 0xa1
    $e,
    // 0xa2
    $e,
    // 0xa3
    $e,
    // 0xa4
    $e,
    // 0xa5
    $e,
    // 0xa6
    $e,
    // 0xa7
    $e,
    // 0xa8
    $e,
    // 0xa9
    $e,
    // 0xaA
    $e,
    // 0xaB
    $e,
    // 0xaC
    $e,
    // 0xaD
    $e,
    // 0xaE
    $e,
    // 0xaF
    $e,
    // 0xb0
    $e,
    // 0xb1
    $e,
    // 0xb2
    $e,
    // 0xb3
    $e,
    // 0xb4
    $e,
    // 0xb5
    $e,
    // 0xb6
    $e,
    // 0xb7
    // map (one-byte uint8_t for n, and then n pairs of data items follow)
    as,
    // 0xb8
    // map (two-byte uint16_t for n, and then n pairs of data items follow)
    cs,
    // 0xb9
    // map (four-byte uint32_t for n, and then n pairs of data items follow)
    Je,
    // 0xba
    // map (eight-byte uint64_t for n, and then n pairs of data items follow)
    fr,
    // 0xbb
    te,
    // 0xbc
    te,
    // 0xbd
    te,
    // 0xbe
    // map, pairs of data items follow, terminated by "break"
    us,
    // 0xbf
    // Text-based date/time (data item follows; see Section 2.4.1)
    tr,
    // 0xc0
    // Epoch-based date/time (data item follows; see Section 2.4.1)
    tr,
    // 0xc1
    // Positive bignum (data item "byte string" follows)
    tr,
    // 0xc2
    // Negative bignum (data item "byte string" follows)
    tr,
    // 0xc3
    // Decimal Fraction (data item "array" follows; see Section 2.4.3)
    tr,
    // 0xc4
    // Bigfloat (data item "array" follows; see Section 2.4.3)
    tr,
    // 0xc5
    // (tagged item)
    We,
    // 0xc6
    We,
    // 0xc7
    We,
    // 0xc8
    We,
    // 0xc9
    We,
    // 0xca
    We,
    // 0xcb
    We,
    // 0xcc
    We,
    // 0xcd
    We,
    // 0xce
    We,
    // 0xcf
    We,
    // 0xd0
    We,
    // 0xd1
    We,
    // 0xd2
    We,
    // 0xd3
    We,
    // 0xd4
    // Expected Conversion (data item follows; see Section 2.4.4.2)
    We,
    // 0xd5
    We,
    // 0xd6
    We,
    // 0xd7
    // (more tagged items, 1/2/4/8 bytes and then a data item follow)
    Gr,
    // 0xd8
    qn,
    // 0xd9
    Ln,
    // 0xda
    Vn,
    // 0xdb
    te,
    // 0xdc
    te,
    // 0xdd
    te,
    // 0xde
    te,
    // 0xdf
    // (simple value)
    je,
    // 0xe0
    je,
    // 0xe1
    je,
    // 0xe2
    je,
    // 0xe3
    je,
    // 0xe4
    je,
    // 0xe5
    je,
    // 0xe6
    je,
    // 0xe7
    je,
    // 0xe8
    je,
    // 0xe9
    je,
    // 0xea
    je,
    // 0xeb
    je,
    // 0xec
    je,
    // 0xed
    je,
    // 0xee
    je,
    // 0xef
    je,
    // 0xf0
    je,
    // 0xf1
    je,
    // 0xf2
    je,
    // 0xf3
    // False
    Ft,
    // 0xf4
    // True
    Gn,
    // 0xf5
    // Null
    jn,
    // 0xf6
    // Undefined
    zn,
    // 0xf7
    // (simple value, one byte follows)
    Dn,
    // 0xf8
    // Half-Precision Float (two-byte IEEE 754)
    ds,
    // 0xf9
    // Single-Precision Float (four-byte IEEE 754)
    _e,
    // 0xfa
    // Double-Precision Float (eight-byte IEEE 754)
    $,
    // 0xfb
    te,
    // 0xfc
    te,
    // 0xfd
    te,
    // 0xfe
    // "break" stop code
    be
    // 0xff
  ];
  return {
    parse: Ee
  };
}, ts = {}, ut = {};
const vo = es.BigNumber;
ut.MT = {
  POS_INT: 0,
  NEG_INT: 1,
  BYTE_STRING: 2,
  UTF8_STRING: 3,
  ARRAY: 4,
  MAP: 5,
  TAG: 6,
  SIMPLE_FLOAT: 7
};
ut.TAG = {
  DATE_STRING: 0,
  DATE_EPOCH: 1,
  POS_BIGINT: 2,
  NEG_BIGINT: 3,
  DECIMAL_FRAC: 4,
  BIGFLOAT: 5,
  BASE64URL_EXPECTED: 21,
  BASE64_EXPECTED: 22,
  BASE16_EXPECTED: 23,
  CBOR: 24,
  URI: 32,
  BASE64URL: 33,
  BASE64: 34,
  REGEXP: 35,
  MIME: 36
};
ut.NUMBYTES = {
  ZERO: 0,
  ONE: 24,
  TWO: 25,
  FOUR: 26,
  EIGHT: 27,
  INDEFINITE: 31
};
ut.SIMPLE = {
  FALSE: 20,
  TRUE: 21,
  NULL: 22,
  UNDEFINED: 23
};
ut.SYMS = {
  NULL: Symbol("null"),
  UNDEFINED: Symbol("undef"),
  PARENT: Symbol("parent"),
  BREAK: Symbol("break"),
  STREAM: Symbol("stream")
};
ut.SHIFT32 = Math.pow(2, 32);
ut.SHIFT16 = Math.pow(2, 16);
ut.MAX_SAFE_HIGH = 2097151;
ut.NEG_ONE = new vo(-1);
ut.TEN = new vo(10);
ut.TWO = new vo(2);
ut.PARENT = {
  ARRAY: 0,
  OBJECT: 1,
  MAP: 2,
  TAG: 3,
  BYTE_STRING: 4,
  UTF8_STRING: 5
};
(function(t) {
  const { Buffer: e } = Fn, r = es.BigNumber, n = ut, i = n.SHIFT32, s = n.SHIFT16, c = 2097151;
  t.parseHalf = function(g) {
    var b, T, O;
    return O = g[0] & 128 ? -1 : 1, b = (g[0] & 124) >> 2, T = (g[0] & 3) << 8 | g[1], b ? b === 31 ? O * (T ? NaN : 1 / 0) : O * Math.pow(2, b - 25) * (1024 + T) : O * 5960464477539063e-23 * T;
  };
  function a(p) {
    return p < 16 ? "0" + p.toString(16) : p.toString(16);
  }
  t.arrayBufferToBignumber = function(p) {
    const g = p.byteLength;
    let b = "";
    for (let T = 0; T < g; T++)
      b += a(p[T]);
    return new r(b, 16);
  }, t.buildMap = (p) => {
    const g = /* @__PURE__ */ new Map(), b = Object.keys(p), T = b.length;
    for (let O = 0; O < T; O++)
      g.set(b[O], p[b[O]]);
    return g;
  }, t.buildInt32 = (p, g) => p * s + g, t.buildInt64 = (p, g, b, T) => {
    const O = t.buildInt32(p, g), B = t.buildInt32(b, T);
    return O > c ? new r(O).times(i).plus(B) : O * i + B;
  }, t.writeHalf = function(g, b) {
    const T = e.allocUnsafe(4);
    T.writeFloatBE(b, 0);
    const O = T.readUInt32BE(0);
    if (O & 8191)
      return !1;
    var B = O >> 16 & 32768;
    const m = O >> 23 & 255, I = O & 8388607;
    if (m >= 113 && m <= 142)
      B += (m - 112 << 10) + (I >> 13);
    else if (m >= 103 && m < 113) {
      if (I & (1 << 126 - m) - 1)
        return !1;
      B += I + 8388608 >> 126 - m;
    } else
      return !1;
    return g.writeUInt16BE(B, 0), !0;
  }, t.keySorter = function(p, g) {
    var b = p[0].byteLength, T = g[0].byteLength;
    return b > T ? 1 : T > b ? -1 : p[0].compare(g[0]);
  }, t.isNegativeZero = (p) => p === 0 && 1 / p < 0, t.nextPowerOf2 = (p) => {
    let g = 0;
    if (p && !(p & p - 1))
      return p;
    for (; p !== 0; )
      p >>= 1, g += 1;
    return 1 << g;
  };
})(ts);
const No = ut, k0 = No.MT, Yn = No.SIMPLE, Es = No.SYMS;
let $0 = class Zs {
  /**
   * Creates an instance of Simple.
   *
   * @param {integer} value - the simple value's integer value
   */
  constructor(e) {
    if (typeof e != "number")
      throw new Error("Invalid Simple type: " + typeof e);
    if (e < 0 || e > 255 || (e | 0) !== e)
      throw new Error("value must be a small positive integer: " + e);
    this.value = e;
  }
  /**
   * Debug string for simple value
   *
   * @returns {string} simple(value)
   */
  toString() {
    return "simple(" + this.value + ")";
  }
  /**
   * Debug string for simple value
   *
   * @returns {string} simple(value)
   */
  inspect() {
    return "simple(" + this.value + ")";
  }
  /**
   * Push the simple value onto the CBOR stream
   *
   * @param {cbor.Encoder} gen The generator to push onto
   * @returns {number}
   */
  encodeCBOR(e) {
    return e._pushInt(this.value, k0.SIMPLE_FLOAT);
  }
  /**
   * Is the given object a Simple?
   *
   * @param {any} obj - object to test
   * @returns {bool} - is it Simple?
   */
  static isSimple(e) {
    return e instanceof Zs;
  }
  /**
   * Decode from the CBOR additional information into a JavaScript value.
   * If the CBOR item has no parent, return a "safe" symbol instead of
   * `null` or `undefined`, so that the value can be passed through a
   * stream in object mode.
   *
   * @param {Number} val - the CBOR additional info to convert
   * @param {bool} hasParent - Does the CBOR item have a parent?
   * @returns {(null|undefined|Boolean|Symbol)} - the decoded value
   */
  static decode(e, r) {
    switch (r == null && (r = !0), e) {
      case Yn.FALSE:
        return !1;
      case Yn.TRUE:
        return !0;
      case Yn.NULL:
        return r ? null : Es.NULL;
      case Yn.UNDEFINED:
        return r ? void 0 : Es.UNDEFINED;
      case -1:
        if (!r)
          throw new Error("Invalid BREAK");
        return Es.BREAK;
      default:
        return new Zs(e);
    }
  }
};
var pu = $0;
let H0 = class Ks {
  /**
   * Creates an instance of Tagged.
   *
   * @param {Number} tag - the number of the tag
   * @param {any} value - the value inside the tag
   * @param {Error} err - the error that was thrown parsing the tag, or null
   */
  constructor(e, r, n) {
    if (this.tag = e, this.value = r, this.err = n, typeof this.tag != "number")
      throw new Error("Invalid tag type (" + typeof this.tag + ")");
    if (this.tag < 0 || (this.tag | 0) !== this.tag)
      throw new Error("Tag must be a positive integer: " + this.tag);
  }
  /**
   * Convert to a String
   *
   * @returns {String} string of the form '1(2)'
   */
  toString() {
    return `${this.tag}(${JSON.stringify(this.value)})`;
  }
  /**
   * Push the simple value onto the CBOR stream
   *
   * @param {cbor.Encoder} gen The generator to push onto
   * @returns {number}
   */
  encodeCBOR(e) {
    return e._pushTag(this.tag), e.pushAny(this.value);
  }
  /**
   * If we have a converter for this type, do the conversion.  Some converters
   * are built-in.  Additional ones can be passed in.  If you want to remove
   * a built-in converter, pass a converter in whose value is 'null' instead
   * of a function.
   *
   * @param {Object} converters - keys in the object are a tag number, the value
   *   is a function that takes the decoded CBOR and returns a JavaScript value
   *   of the appropriate type.  Throw an exception in the function on errors.
   * @returns {any} - the converted item
   */
  convert(e) {
    var r, n;
    if (n = e != null ? e[this.tag] : void 0, typeof n != "function" && (n = Ks["_tag" + this.tag], typeof n != "function"))
      return this;
    try {
      return n.call(Ks, this.value);
    } catch (i) {
      return r = i, this.err = r, this;
    }
  }
};
var mu = H0;
const gu = self.location ? self.location.protocol + "//" + self.location.host : "", Xs = self.URL;
let q0 = class {
  constructor(e = "", r = gu) {
    this.super = new Xs(e, r), this.path = this.pathname + this.search, this.auth = this.username && this.password ? this.username + ":" + this.password : null, this.query = this.search && this.search.startsWith("?") ? this.search.slice(1) : null;
  }
  get hash() {
    return this.super.hash;
  }
  get host() {
    return this.super.host;
  }
  get hostname() {
    return this.super.hostname;
  }
  get href() {
    return this.super.href;
  }
  get origin() {
    return this.super.origin;
  }
  get password() {
    return this.super.password;
  }
  get pathname() {
    return this.super.pathname;
  }
  get port() {
    return this.super.port;
  }
  get protocol() {
    return this.super.protocol;
  }
  get search() {
    return this.super.search;
  }
  get searchParams() {
    return this.super.searchParams;
  }
  get username() {
    return this.super.username;
  }
  set hash(e) {
    this.super.hash = e;
  }
  set host(e) {
    this.super.host = e;
  }
  set hostname(e) {
    this.super.hostname = e;
  }
  set href(e) {
    this.super.href = e;
  }
  set origin(e) {
    this.super.origin = e;
  }
  set password(e) {
    this.super.password = e;
  }
  set pathname(e) {
    this.super.pathname = e;
  }
  set port(e) {
    this.super.port = e;
  }
  set protocol(e) {
    this.super.protocol = e;
  }
  set search(e) {
    this.super.search = e;
  }
  set searchParams(e) {
    this.super.searchParams = e;
  }
  set username(e) {
    this.super.username = e;
  }
  createObjectURL(e) {
    return this.super.createObjectURL(e);
  }
  revokeObjectURL(e) {
    this.super.revokeObjectURL(e);
  }
  toJSON() {
    return this.super.toJSON();
  }
  toString() {
    return this.super.toString();
  }
  format() {
    return this.toString();
  }
};
function L0(t) {
  if (typeof t == "string")
    return new Xs(t).toString();
  if (!(t instanceof Xs)) {
    const e = t.username && t.password ? `${t.username}:${t.password}@` : "", r = t.auth ? t.auth + "@" : "", n = t.port ? ":" + t.port : "", i = t.protocol ? t.protocol + "//" : "", s = t.host || "", c = t.hostname || "", a = t.search || (t.query ? "?" + t.query : ""), p = t.hash || "", g = t.pathname || "", b = t.path || g + a;
    return `${i}${e || r}${s || c + n}${b}${p}`;
  }
}
var yu = {
  URLWithLegacySupport: q0,
  URLSearchParams: self.URLSearchParams,
  defaultBase: gu,
  format: L0
};
const { URLWithLegacySupport: na, format: V0 } = yu;
var G0 = (t, e = {}, r = {}, n) => {
  let i = e.protocol ? e.protocol.replace(":", "") : "http";
  i = (r[i] || n || i) + ":";
  let s;
  try {
    s = new na(t);
  } catch {
    s = {};
  }
  const c = Object.assign({}, e, {
    protocol: i || s.protocol,
    host: e.host || s.host
  });
  return new na(t, V0(c)).toString();
};
const {
  URLWithLegacySupport: j0,
  format: z0,
  URLSearchParams: D0,
  defaultBase: W0
} = yu, Y0 = G0;
var wu = {
  URL: j0,
  URLSearchParams: D0,
  format: z0,
  relative: Y0,
  defaultBase: W0
};
const { Buffer: Dr } = Fn, ia = In, Z0 = es.BigNumber, K0 = M0, ft = ts, Le = ut, X0 = pu, J0 = mu, { URL: Q0 } = wu;
let Js = class Qs {
  /**
   * @param {Object} [opts={}]
   * @param {number} [opts.size=65536] - Size of the allocated heap.
   */
  constructor(e) {
    e = e || {}, !e.size || e.size < 65536 ? e.size = 65536 : e.size = ft.nextPowerOf2(e.size), this._heap = new ArrayBuffer(e.size), this._heap8 = new Uint8Array(this._heap), this._buffer = Dr.from(this._heap), this._reset(), this._knownTags = Object.assign({
      0: (r) => new Date(r),
      1: (r) => new Date(r * 1e3),
      2: (r) => ft.arrayBufferToBignumber(r),
      3: (r) => Le.NEG_ONE.minus(ft.arrayBufferToBignumber(r)),
      4: (r) => Le.TEN.pow(r[0]).times(r[1]),
      5: (r) => Le.TWO.pow(r[0]).times(r[1]),
      32: (r) => new Q0(r),
      35: (r) => new RegExp(r)
    }, e.tags), this.parser = K0(en, {
      // eslint-disable-next-line no-console
      log: console.log.bind(console),
      pushInt: this.pushInt.bind(this),
      pushInt32: this.pushInt32.bind(this),
      pushInt32Neg: this.pushInt32Neg.bind(this),
      pushInt64: this.pushInt64.bind(this),
      pushInt64Neg: this.pushInt64Neg.bind(this),
      pushFloat: this.pushFloat.bind(this),
      pushFloatSingle: this.pushFloatSingle.bind(this),
      pushFloatDouble: this.pushFloatDouble.bind(this),
      pushTrue: this.pushTrue.bind(this),
      pushFalse: this.pushFalse.bind(this),
      pushUndefined: this.pushUndefined.bind(this),
      pushNull: this.pushNull.bind(this),
      pushInfinity: this.pushInfinity.bind(this),
      pushInfinityNeg: this.pushInfinityNeg.bind(this),
      pushNaN: this.pushNaN.bind(this),
      pushNaNNeg: this.pushNaNNeg.bind(this),
      pushArrayStart: this.pushArrayStart.bind(this),
      pushArrayStartFixed: this.pushArrayStartFixed.bind(this),
      pushArrayStartFixed32: this.pushArrayStartFixed32.bind(this),
      pushArrayStartFixed64: this.pushArrayStartFixed64.bind(this),
      pushObjectStart: this.pushObjectStart.bind(this),
      pushObjectStartFixed: this.pushObjectStartFixed.bind(this),
      pushObjectStartFixed32: this.pushObjectStartFixed32.bind(this),
      pushObjectStartFixed64: this.pushObjectStartFixed64.bind(this),
      pushByteString: this.pushByteString.bind(this),
      pushByteStringStart: this.pushByteStringStart.bind(this),
      pushUtf8String: this.pushUtf8String.bind(this),
      pushUtf8StringStart: this.pushUtf8StringStart.bind(this),
      pushSimpleUnassigned: this.pushSimpleUnassigned.bind(this),
      pushTagUnassigned: this.pushTagUnassigned.bind(this),
      pushTagStart: this.pushTagStart.bind(this),
      pushTagStart4: this.pushTagStart4.bind(this),
      pushTagStart8: this.pushTagStart8.bind(this),
      pushBreak: this.pushBreak.bind(this)
    }, this._heap);
  }
  get _depth() {
    return this._parents.length;
  }
  get _currentParent() {
    return this._parents[this._depth - 1];
  }
  get _ref() {
    return this._currentParent.ref;
  }
  // Finish the current parent
  _closeParent() {
    var e = this._parents.pop();
    if (e.length > 0)
      throw new Error(`Missing ${e.length} elements`);
    switch (e.type) {
      case Le.PARENT.TAG:
        this._push(
          this.createTag(e.ref[0], e.ref[1])
        );
        break;
      case Le.PARENT.BYTE_STRING:
        this._push(this.createByteString(e.ref, e.length));
        break;
      case Le.PARENT.UTF8_STRING:
        this._push(this.createUtf8String(e.ref, e.length));
        break;
      case Le.PARENT.MAP:
        if (e.values % 2 > 0)
          throw new Error("Odd number of elements in the map");
        this._push(this.createMap(e.ref, e.length));
        break;
      case Le.PARENT.OBJECT:
        if (e.values % 2 > 0)
          throw new Error("Odd number of elements in the map");
        this._push(this.createObject(e.ref, e.length));
        break;
      case Le.PARENT.ARRAY:
        this._push(this.createArray(e.ref, e.length));
        break;
    }
    this._currentParent && this._currentParent.type === Le.PARENT.TAG && this._dec();
  }
  // Reduce the expected length of the current parent by one
  _dec() {
    const e = this._currentParent;
    e.length < 0 || (e.length--, e.length === 0 && this._closeParent());
  }
  // Push any value to the current parent
  _push(e, r) {
    const n = this._currentParent;
    switch (n.values++, n.type) {
      case Le.PARENT.ARRAY:
      case Le.PARENT.BYTE_STRING:
      case Le.PARENT.UTF8_STRING:
        n.length > -1 ? this._ref[this._ref.length - n.length] = e : this._ref.push(e), this._dec();
        break;
      case Le.PARENT.OBJECT:
        n.tmpKey != null ? (this._ref[n.tmpKey] = e, n.tmpKey = null, this._dec()) : (n.tmpKey = e, typeof n.tmpKey != "string" && (n.type = Le.PARENT.MAP, n.ref = ft.buildMap(n.ref)));
        break;
      case Le.PARENT.MAP:
        n.tmpKey != null ? (this._ref.set(n.tmpKey, e), n.tmpKey = null, this._dec()) : n.tmpKey = e;
        break;
      case Le.PARENT.TAG:
        this._ref.push(e), r || this._dec();
        break;
      default:
        throw new Error("Unknown parent type");
    }
  }
  // Create a new parent in the parents list
  _createParent(e, r, n) {
    this._parents[this._depth] = {
      type: r,
      length: n,
      ref: e,
      values: 0,
      tmpKey: null
    };
  }
  // Reset all state back to the beginning, also used for initiatlization
  _reset() {
    this._res = [], this._parents = [{
      type: Le.PARENT.ARRAY,
      length: -1,
      ref: this._res,
      values: 0,
      tmpKey: null
    }];
  }
  // -- Interface to customize deoding behaviour
  createTag(e, r) {
    const n = this._knownTags[e];
    return n ? n(r) : new J0(e, r);
  }
  createMap(e, r) {
    return e;
  }
  createObject(e, r) {
    return e;
  }
  createArray(e, r) {
    return e;
  }
  createByteString(e, r) {
    return Dr.concat(e);
  }
  createByteStringFromHeap(e, r) {
    return e === r ? Dr.alloc(0) : Dr.from(this._heap.slice(e, r));
  }
  createInt(e) {
    return e;
  }
  createInt32(e, r) {
    return ft.buildInt32(e, r);
  }
  createInt64(e, r, n, i) {
    return ft.buildInt64(e, r, n, i);
  }
  createFloat(e) {
    return e;
  }
  createFloatSingle(e, r, n, i) {
    return ia.read([e, r, n, i], 0, !1, 23, 4);
  }
  createFloatDouble(e, r, n, i, s, c, a, p) {
    return ia.read([e, r, n, i, s, c, a, p], 0, !1, 52, 8);
  }
  createInt32Neg(e, r) {
    return -1 - ft.buildInt32(e, r);
  }
  createInt64Neg(e, r, n, i) {
    const s = ft.buildInt32(e, r), c = ft.buildInt32(n, i);
    return s > Le.MAX_SAFE_HIGH ? Le.NEG_ONE.minus(new Z0(s).times(Le.SHIFT32).plus(c)) : -1 - (s * Le.SHIFT32 + c);
  }
  createTrue() {
    return !0;
  }
  createFalse() {
    return !1;
  }
  createNull() {
    return null;
  }
  createUndefined() {
  }
  createInfinity() {
    return 1 / 0;
  }
  createInfinityNeg() {
    return -1 / 0;
  }
  createNaN() {
    return NaN;
  }
  createNaNNeg() {
    return NaN;
  }
  createUtf8String(e, r) {
    return e.join("");
  }
  createUtf8StringFromHeap(e, r) {
    return e === r ? "" : this._buffer.toString("utf8", e, r);
  }
  createSimpleUnassigned(e) {
    return new X0(e);
  }
  // -- Interface for decoder.asm.js
  pushInt(e) {
    this._push(this.createInt(e));
  }
  pushInt32(e, r) {
    this._push(this.createInt32(e, r));
  }
  pushInt64(e, r, n, i) {
    this._push(this.createInt64(e, r, n, i));
  }
  pushFloat(e) {
    this._push(this.createFloat(e));
  }
  pushFloatSingle(e, r, n, i) {
    this._push(this.createFloatSingle(e, r, n, i));
  }
  pushFloatDouble(e, r, n, i, s, c, a, p) {
    this._push(this.createFloatDouble(e, r, n, i, s, c, a, p));
  }
  pushInt32Neg(e, r) {
    this._push(this.createInt32Neg(e, r));
  }
  pushInt64Neg(e, r, n, i) {
    this._push(this.createInt64Neg(e, r, n, i));
  }
  pushTrue() {
    this._push(this.createTrue());
  }
  pushFalse() {
    this._push(this.createFalse());
  }
  pushNull() {
    this._push(this.createNull());
  }
  pushUndefined() {
    this._push(this.createUndefined());
  }
  pushInfinity() {
    this._push(this.createInfinity());
  }
  pushInfinityNeg() {
    this._push(this.createInfinityNeg());
  }
  pushNaN() {
    this._push(this.createNaN());
  }
  pushNaNNeg() {
    this._push(this.createNaNNeg());
  }
  pushArrayStart() {
    this._createParent([], Le.PARENT.ARRAY, -1);
  }
  pushArrayStartFixed(e) {
    this._createArrayStartFixed(e);
  }
  pushArrayStartFixed32(e, r) {
    const n = ft.buildInt32(e, r);
    this._createArrayStartFixed(n);
  }
  pushArrayStartFixed64(e, r, n, i) {
    const s = ft.buildInt64(e, r, n, i);
    this._createArrayStartFixed(s);
  }
  pushObjectStart() {
    this._createObjectStartFixed(-1);
  }
  pushObjectStartFixed(e) {
    this._createObjectStartFixed(e);
  }
  pushObjectStartFixed32(e, r) {
    const n = ft.buildInt32(e, r);
    this._createObjectStartFixed(n);
  }
  pushObjectStartFixed64(e, r, n, i) {
    const s = ft.buildInt64(e, r, n, i);
    this._createObjectStartFixed(s);
  }
  pushByteStringStart() {
    this._parents[this._depth] = {
      type: Le.PARENT.BYTE_STRING,
      length: -1,
      ref: [],
      values: 0,
      tmpKey: null
    };
  }
  pushByteString(e, r) {
    this._push(this.createByteStringFromHeap(e, r));
  }
  pushUtf8StringStart() {
    this._parents[this._depth] = {
      type: Le.PARENT.UTF8_STRING,
      length: -1,
      ref: [],
      values: 0,
      tmpKey: null
    };
  }
  pushUtf8String(e, r) {
    this._push(this.createUtf8StringFromHeap(e, r));
  }
  pushSimpleUnassigned(e) {
    this._push(this.createSimpleUnassigned(e));
  }
  pushTagStart(e) {
    this._parents[this._depth] = {
      type: Le.PARENT.TAG,
      length: 1,
      ref: [e]
    };
  }
  pushTagStart4(e, r) {
    this.pushTagStart(ft.buildInt32(e, r));
  }
  pushTagStart8(e, r, n, i) {
    this.pushTagStart(ft.buildInt64(e, r, n, i));
  }
  pushTagUnassigned(e) {
    this._push(this.createTag(e));
  }
  pushBreak() {
    if (this._currentParent.length > -1)
      throw new Error("Unexpected break");
    this._closeParent();
  }
  _createObjectStartFixed(e) {
    if (e === 0) {
      this._push(this.createObject({}));
      return;
    }
    this._createParent({}, Le.PARENT.OBJECT, e);
  }
  _createArrayStartFixed(e) {
    if (e === 0) {
      this._push(this.createArray([]));
      return;
    }
    this._createParent(new Array(e), Le.PARENT.ARRAY, e);
  }
  _decode(e) {
    if (e.byteLength === 0)
      throw new Error("Input too short");
    this._reset(), this._heap8.set(e);
    const r = this.parser.parse(e.byteLength);
    if (this._depth > 1) {
      for (; this._currentParent.length === 0; )
        this._closeParent();
      if (this._depth > 1)
        throw new Error("Undeterminated nesting");
    }
    if (r > 0)
      throw new Error("Failed to parse");
    if (this._res.length === 0)
      throw new Error("No valid result");
  }
  // -- Public Interface
  decodeFirst(e) {
    return this._decode(e), this._res[0];
  }
  decodeAll(e) {
    return this._decode(e), this._res;
  }
  /**
   * Decode the first cbor object.
   *
   * @param {Buffer|string} input
   * @param {string} [enc='hex'] - Encoding used if a string is passed.
   * @returns {*}
   */
  static decode(e, r) {
    return typeof e == "string" && (e = Dr.from(e, r || "hex")), new Qs({ size: e.length }).decodeFirst(e);
  }
  /**
   * Decode all cbor objects.
   *
   * @param {Buffer|string} input
   * @param {string} [enc='hex'] - Encoding used if a string is passed.
   * @returns {Array<*>}
   */
  static decodeAll(e, r) {
    return typeof e == "string" && (e = Dr.from(e, r || "hex")), new Qs({ size: e.length }).decodeAll(e);
  }
};
Js.decodeFirst = Js.decode;
var bu = Js;
const { Buffer: Ts } = Fn, eh = bu, th = ts;
class Ro extends eh {
  createTag(e, r) {
    return `${e}(${r})`;
  }
  createInt(e) {
    return super.createInt(e).toString();
  }
  createInt32(e, r) {
    return super.createInt32(e, r).toString();
  }
  createInt64(e, r, n, i) {
    return super.createInt64(e, r, n, i).toString();
  }
  createInt32Neg(e, r) {
    return super.createInt32Neg(e, r).toString();
  }
  createInt64Neg(e, r, n, i) {
    return super.createInt64Neg(e, r, n, i).toString();
  }
  createTrue() {
    return "true";
  }
  createFalse() {
    return "false";
  }
  createFloat(e) {
    const r = super.createFloat(e);
    return th.isNegativeZero(e) ? "-0_1" : `${r}_1`;
  }
  createFloatSingle(e, r, n, i) {
    return `${super.createFloatSingle(e, r, n, i)}_2`;
  }
  createFloatDouble(e, r, n, i, s, c, a, p) {
    return `${super.createFloatDouble(e, r, n, i, s, c, a, p)}_3`;
  }
  createByteString(e, r) {
    const n = e.join(", ");
    return r === -1 ? `(_ ${n})` : `h'${n}`;
  }
  createByteStringFromHeap(e, r) {
    return `h'${Ts.from(
      super.createByteStringFromHeap(e, r)
    ).toString("hex")}'`;
  }
  createInfinity() {
    return "Infinity_1";
  }
  createInfinityNeg() {
    return "-Infinity_1";
  }
  createNaN() {
    return "NaN_1";
  }
  createNaNNeg() {
    return "-NaN_1";
  }
  createNull() {
    return "null";
  }
  createUndefined() {
    return "undefined";
  }
  createSimpleUnassigned(e) {
    return `simple(${e})`;
  }
  createArray(e, r) {
    const n = super.createArray(e, r);
    return r === -1 ? `[_ ${n.join(", ")}]` : `[${n.join(", ")}]`;
  }
  createMap(e, r) {
    const n = super.createMap(e), i = Array.from(n.keys()).reduce(sa(n), "");
    return r === -1 ? `{_ ${i}}` : `{${i}}`;
  }
  createObject(e, r) {
    const n = super.createObject(e), i = Object.keys(n).reduce(sa(n), "");
    return r === -1 ? `{_ ${i}}` : `{${i}}`;
  }
  createUtf8String(e, r) {
    const n = e.join(", ");
    return r === -1 ? `(_ ${n})` : `"${n}"`;
  }
  createUtf8StringFromHeap(e, r) {
    return `"${Ts.from(
      super.createUtf8StringFromHeap(e, r)
    ).toString("utf8")}"`;
  }
  static diagnose(e, r) {
    return typeof e == "string" && (e = Ts.from(e, r || "hex")), new Ro().decodeFirst(e);
  }
}
var rh = Ro;
function sa(t) {
  return (e, r) => e ? `${e}, ${r}: ${t[r]}` : `${r}: ${t[r]}`;
}
const { Buffer: Zt } = Fn, { URL: nh } = wu, eo = es.BigNumber, As = ts, rt = ut, Pt = rt.MT, Zn = rt.NUMBYTES, oa = rt.SHIFT32, aa = rt.SYMS, Wr = rt.TAG, ih = rt.MT.SIMPLE_FLOAT << 5 | rt.NUMBYTES.TWO, sh = rt.MT.SIMPLE_FLOAT << 5 | rt.NUMBYTES.FOUR, oh = rt.MT.SIMPLE_FLOAT << 5 | rt.NUMBYTES.EIGHT, ah = rt.MT.SIMPLE_FLOAT << 5 | rt.SIMPLE.TRUE, ch = rt.MT.SIMPLE_FLOAT << 5 | rt.SIMPLE.FALSE, uh = rt.MT.SIMPLE_FLOAT << 5 | rt.SIMPLE.UNDEFINED, ca = rt.MT.SIMPLE_FLOAT << 5 | rt.SIMPLE.NULL, fh = new eo("0x20000000000000"), lh = Zt.from("f97e00", "hex"), hh = Zt.from("f9fc00", "hex"), dh = Zt.from("f97c00", "hex");
function ph(t) {
  return {}.toString.call(t).slice(8, -1);
}
class $i {
  /**
   * @param {Object} [options={}]
   * @param {function(Buffer)} options.stream
   */
  constructor(e) {
    e = e || {}, this.streaming = typeof e.stream == "function", this.onData = e.stream, this.semanticTypes = [
      [nh, this._pushUrl],
      [eo, this._pushBigNumber]
    ];
    const r = e.genTypes || [], n = r.length;
    for (let i = 0; i < n; i++)
      this.addSemanticType(
        r[i][0],
        r[i][1]
      );
    this._reset();
  }
  addSemanticType(e, r) {
    const n = this.semanticTypes.length;
    for (let i = 0; i < n; i++)
      if (this.semanticTypes[i][0] === e) {
        const c = this.semanticTypes[i][1];
        return this.semanticTypes[i][1] = r, c;
      }
    return this.semanticTypes.push([e, r]), null;
  }
  push(e) {
    return e && (this.result[this.offset] = e, this.resultMethod[this.offset] = 0, this.resultLength[this.offset] = e.length, this.offset++, this.streaming && this.onData(this.finalize())), !0;
  }
  pushWrite(e, r, n) {
    return this.result[this.offset] = e, this.resultMethod[this.offset] = r, this.resultLength[this.offset] = n, this.offset++, this.streaming && this.onData(this.finalize()), !0;
  }
  _pushUInt8(e) {
    return this.pushWrite(e, 1, 1);
  }
  _pushUInt16BE(e) {
    return this.pushWrite(e, 2, 2);
  }
  _pushUInt32BE(e) {
    return this.pushWrite(e, 3, 4);
  }
  _pushDoubleBE(e) {
    return this.pushWrite(e, 4, 8);
  }
  _pushNaN() {
    return this.push(lh);
  }
  _pushInfinity(e) {
    const r = e < 0 ? hh : dh;
    return this.push(r);
  }
  _pushFloat(e) {
    const r = Zt.allocUnsafe(2);
    if (As.writeHalf(r, e) && As.parseHalf(r) === e)
      return this._pushUInt8(ih) && this.push(r);
    const n = Zt.allocUnsafe(4);
    return n.writeFloatBE(e, 0), n.readFloatBE(0) === e ? this._pushUInt8(sh) && this.push(n) : this._pushUInt8(oh) && this._pushDoubleBE(e);
  }
  _pushInt(e, r, n) {
    const i = r << 5;
    return e < 24 ? this._pushUInt8(i | e) : e <= 255 ? this._pushUInt8(i | Zn.ONE) && this._pushUInt8(e) : e <= 65535 ? this._pushUInt8(i | Zn.TWO) && this._pushUInt16BE(e) : e <= 4294967295 ? this._pushUInt8(i | Zn.FOUR) && this._pushUInt32BE(e) : e <= Number.MAX_SAFE_INTEGER ? this._pushUInt8(i | Zn.EIGHT) && this._pushUInt32BE(Math.floor(e / oa)) && this._pushUInt32BE(e % oa) : r === Pt.NEG_INT ? this._pushFloat(n) : this._pushFloat(e);
  }
  _pushIntNum(e) {
    return e < 0 ? this._pushInt(-e - 1, Pt.NEG_INT, e) : this._pushInt(e, Pt.POS_INT);
  }
  _pushNumber(e) {
    switch (!1) {
      case e === e:
        return this._pushNaN(e);
      case isFinite(e):
        return this._pushInfinity(e);
      case e % 1 !== 0:
        return this._pushIntNum(e);
      default:
        return this._pushFloat(e);
    }
  }
  _pushString(e) {
    const r = Zt.byteLength(e, "utf8");
    return this._pushInt(r, Pt.UTF8_STRING) && this.pushWrite(e, 5, r);
  }
  _pushBoolean(e) {
    return this._pushUInt8(e ? ah : ch);
  }
  _pushUndefined(e) {
    return this._pushUInt8(uh);
  }
  _pushArray(e, r) {
    const n = r.length;
    if (!e._pushInt(n, Pt.ARRAY))
      return !1;
    for (let i = 0; i < n; i++)
      if (!e.pushAny(r[i]))
        return !1;
    return !0;
  }
  _pushTag(e) {
    return this._pushInt(e, Pt.TAG);
  }
  _pushDate(e, r) {
    return e._pushTag(Wr.DATE_EPOCH) && e.pushAny(Math.round(r / 1e3));
  }
  _pushBuffer(e, r) {
    return e._pushInt(r.length, Pt.BYTE_STRING) && e.push(r);
  }
  _pushNoFilter(e, r) {
    return e._pushBuffer(e, r.slice());
  }
  _pushRegexp(e, r) {
    return e._pushTag(Wr.REGEXP) && e.pushAny(r.source);
  }
  _pushSet(e, r) {
    if (!e._pushInt(r.size, Pt.ARRAY))
      return !1;
    for (const n of r)
      if (!e.pushAny(n))
        return !1;
    return !0;
  }
  _pushUrl(e, r) {
    return e._pushTag(Wr.URI) && e.pushAny(r.format());
  }
  _pushBigint(e) {
    let r = Wr.POS_BIGINT;
    e.isNegative() && (e = e.negated().minus(1), r = Wr.NEG_BIGINT);
    let n = e.toString(16);
    n.length % 2 && (n = "0" + n);
    const i = Zt.from(n, "hex");
    return this._pushTag(r) && this._pushBuffer(this, i);
  }
  _pushBigNumber(e, r) {
    if (r.isNaN())
      return e._pushNaN();
    if (!r.isFinite())
      return e._pushInfinity(r.isNegative() ? -1 / 0 : 1 / 0);
    if (r.isInteger())
      return e._pushBigint(r);
    if (!(e._pushTag(Wr.DECIMAL_FRAC) && e._pushInt(2, Pt.ARRAY)))
      return !1;
    const n = r.decimalPlaces(), i = r.multipliedBy(new eo(10).pow(n));
    return e._pushIntNum(-n) ? i.abs().isLessThan(fh) ? e._pushIntNum(i.toNumber()) : e._pushBigint(i) : !1;
  }
  _pushMap(e, r) {
    return e._pushInt(r.size, Pt.MAP) ? this._pushRawMap(
      r.size,
      Array.from(r)
    ) : !1;
  }
  _pushObject(e) {
    if (!e)
      return this._pushUInt8(ca);
    for (var r = this.semanticTypes.length, n = 0; n < r; n++)
      if (e instanceof this.semanticTypes[n][0])
        return this.semanticTypes[n][1].call(e, this, e);
    var i = e.encodeCBOR;
    if (typeof i == "function")
      return i.call(e, this);
    var s = Object.keys(e), c = s.length;
    return this._pushInt(c, Pt.MAP) ? this._pushRawMap(
      c,
      s.map((a) => [a, e[a]])
    ) : !1;
  }
  _pushRawMap(e, r) {
    r = r.map(function(i) {
      return i[0] = $i.encode(i[0]), i;
    }).sort(As.keySorter);
    for (var n = 0; n < e; n++)
      if (!this.push(r[n][0]) || !this.pushAny(r[n][1]))
        return !1;
    return !0;
  }
  /**
   * Alias for `.pushAny`
   *
   * @param {*} obj
   * @returns {boolean} true on success
   */
  write(e) {
    return this.pushAny(e);
  }
  /**
   * Push any supported type onto the encoded stream
   *
   * @param {any} obj
   * @returns {boolean} true on success
   */
  pushAny(e) {
    var r = ph(e);
    switch (r) {
      case "Number":
        return this._pushNumber(e);
      case "String":
        return this._pushString(e);
      case "Boolean":
        return this._pushBoolean(e);
      case "Object":
        return this._pushObject(e);
      case "Array":
        return this._pushArray(this, e);
      case "Uint8Array":
        return this._pushBuffer(this, Zt.isBuffer(e) ? e : Zt.from(e));
      case "Null":
        return this._pushUInt8(ca);
      case "Undefined":
        return this._pushUndefined(e);
      case "Map":
        return this._pushMap(this, e);
      case "Set":
        return this._pushSet(this, e);
      case "URL":
        return this._pushUrl(this, e);
      case "BigNumber":
        return this._pushBigNumber(this, e);
      case "Date":
        return this._pushDate(this, e);
      case "RegExp":
        return this._pushRegexp(this, e);
      case "Symbol":
        switch (e) {
          case aa.NULL:
            return this._pushObject(null);
          case aa.UNDEFINED:
            return this._pushUndefined(void 0);
          default:
            throw new Error("Unknown symbol: " + e.toString());
        }
      default:
        throw new Error("Unknown type: " + typeof e + ", " + (e ? e.toString() : ""));
    }
  }
  finalize() {
    if (this.offset === 0)
      return null;
    for (var e = this.result, r = this.resultLength, n = this.resultMethod, i = this.offset, s = 0, c = 0; c < i; c++)
      s += r[c];
    var a = Zt.allocUnsafe(s), p = 0, g = 0;
    for (c = 0; c < i; c++) {
      switch (g = r[c], n[c]) {
        case 0:
          e[c].copy(a, p);
          break;
        case 1:
          a.writeUInt8(e[c], p, !0);
          break;
        case 2:
          a.writeUInt16BE(e[c], p, !0);
          break;
        case 3:
          a.writeUInt32BE(e[c], p, !0);
          break;
        case 4:
          a.writeDoubleBE(e[c], p, !0);
          break;
        case 5:
          a.write(e[c], p, g, "utf8");
          break;
        default:
          throw new Error("unkown method");
      }
      p += g;
    }
    var b = a;
    return this._reset(), b;
  }
  _reset() {
    this.result = [], this.resultMethod = [], this.resultLength = [], this.offset = 0;
  }
  /**
   * Encode the given value
   * @param {*} o
   * @returns {Buffer}
   */
  static encode(e) {
    const r = new $i();
    if (!r.pushAny(e))
      throw new Error("Failed to encode input");
    return r.finalize();
  }
}
var mh = $i;
(function(t) {
  t.Diagnose = rh, t.Decoder = bu, t.Encoder = mh, t.Simple = pu, t.Tagged = mu, t.decodeAll = t.Decoder.decodeAll, t.decodeFirst = t.Decoder.decodeFirst, t.diagnose = t.Diagnose.diagnose, t.encode = t.Encoder.encode, t.decode = t.Decoder.decode, t.leveldb = {
    decode: t.Decoder.decodeAll,
    encode: t.Encoder.encode,
    buffer: !0,
    name: "cbor"
  };
})(hu);
const _u = /* @__PURE__ */ t0(hu);
function er(...t) {
  const e = new Uint8Array(t.reduce((n, i) => n + i.byteLength, 0));
  let r = 0;
  for (const n of t)
    e.set(new Uint8Array(n), r), r += n.byteLength;
  return e.buffer;
}
function Lt(t) {
  return [...new Uint8Array(t)].map((e) => e.toString(16).padStart(2, "0")).join("");
}
const gh = new RegExp(/^[0-9a-fA-F]+$/);
function Hi(t) {
  if (!gh.test(t))
    throw new Error("Invalid hexadecimal string.");
  const e = [...t].reduce((r, n, i) => (r[i / 2 | 0] = (r[i / 2 | 0] || "") + n, r), []).map((r) => Number.parseInt(r, 16));
  return new Uint8Array(e).buffer;
}
function xu(t, e) {
  if (t.byteLength !== e.byteLength)
    return t.byteLength - e.byteLength;
  const r = new Uint8Array(t), n = new Uint8Array(e);
  for (let i = 0; i < r.length; i++)
    if (r[i] !== n[i])
      return r[i] - n[i];
  return 0;
}
function Oo(t, e) {
  return xu(t, e) === 0;
}
function di(t) {
  return new DataView(t.buffer, t.byteOffset, t.byteLength).buffer;
}
function Eu(t) {
  return t instanceof Uint8Array ? di(t) : t instanceof ArrayBuffer ? t : Array.isArray(t) ? di(new Uint8Array(t)) : "buffer" in t ? Eu(t.buffer) : di(new Uint8Array(t));
}
function qt(t) {
  return di(To.create().update(new Uint8Array(t)).digest());
}
function pi(t) {
  if (t instanceof _u.Tagged)
    return pi(t.value);
  if (typeof t == "string")
    return Tu(t);
  if (typeof t == "number")
    return qt(De(t));
  if (t instanceof ArrayBuffer || ArrayBuffer.isView(t))
    return qt(t);
  if (Array.isArray(t)) {
    const e = t.map(pi);
    return qt(er(...e));
  } else {
    if (t && typeof t == "object" && t._isPrincipal)
      return qt(t.toUint8Array());
    if (typeof t == "object" && t !== null && typeof t.toHash == "function")
      return pi(t.toHash());
    if (typeof t == "object")
      return qi(t);
    if (typeof t == "bigint")
      return qt(De(t));
  }
  throw Object.assign(new Error(`Attempt to hash a value of unsupported type: ${t}`), {
    // include so logs/callers can understand the confusing value.
    // (when stringified in error message, prototype info is lost)
    value: t
  });
}
const Tu = (t) => {
  const e = new TextEncoder().encode(t);
  return qt(e);
};
function ua(t) {
  return qi(t);
}
function qi(t) {
  const n = Object.entries(t).filter(([, c]) => c !== void 0).map(([c, a]) => {
    const p = Tu(c), g = pi(a);
    return [p, g];
  }).sort(([c], [a]) => xu(c, a)), i = er(...n.map((c) => er(...c)));
  return qt(i);
}
new TextEncoder().encode(`
ic-request`);
class yh {
  getPrincipal() {
    return Me.anonymous();
  }
  async transformRequest(e) {
    return Object.assign(Object.assign({}, e), { body: { content: e.body } });
  }
}
var or = {}, cn = {}, Ve = {};
Object.defineProperty(Ve, "__esModule", { value: !0 });
const wh = 9007199254740992;
function cr(t, ...e) {
  const r = new Uint8Array(t.byteLength + e.reduce((i, s) => i + s.byteLength, 0));
  r.set(new Uint8Array(t), 0);
  let n = t.byteLength;
  for (const i of e)
    r.set(new Uint8Array(i), n), n += i.byteLength;
  return r.buffer;
}
function Vt(t, e, r) {
  r = r.replace(/[^0-9a-fA-F]/g, "");
  const n = 2 ** (e - 24);
  r = r.slice(-n * 2).padStart(n * 2, "0");
  const i = [(t << 5) + e].concat(r.match(/../g).map((s) => parseInt(s, 16)));
  return new Uint8Array(i).buffer;
}
function rs(t, e) {
  if (e < 24)
    return new Uint8Array([(t << 5) + e]).buffer;
  {
    const r = e <= 255 ? 24 : e <= 65535 ? 25 : e <= 4294967295 ? 26 : 27;
    return Vt(t, r, e.toString(16));
  }
}
function Au(t) {
  const e = [];
  for (let r = 0; r < t.length; r++) {
    let n = t.charCodeAt(r);
    n < 128 ? e.push(n) : n < 2048 ? e.push(192 | n >> 6, 128 | n & 63) : n < 55296 || n >= 57344 ? e.push(224 | n >> 12, 128 | n >> 6 & 63, 128 | n & 63) : (r++, n = (n & 1023) << 10 | t.charCodeAt(r) & 1023, e.push(240 | n >> 18, 128 | n >> 12 & 63, 128 | n >> 6 & 63, 128 | n & 63));
  }
  return cr(new Uint8Array(rs(3, t.length)), new Uint8Array(e));
}
function bh(t, e) {
  if (t == 14277111)
    return cr(new Uint8Array([217, 217, 247]), e);
  if (t < 24)
    return cr(new Uint8Array([192 + t]), e);
  {
    const r = t <= 255 ? 24 : t <= 65535 ? 25 : t <= 4294967295 ? 26 : 27, n = 2 ** (r - 24), i = t.toString(16).slice(-n * 2).padStart(n * 2, "0"), s = [192 + r].concat(i.match(/../g).map((c) => parseInt(c, 16)));
    return new Uint8Array(s).buffer;
  }
}
Ve.tagged = bh;
function Pn(t) {
  return new Uint8Array(t).buffer;
}
Ve.raw = Pn;
function Io(t) {
  if (isNaN(t))
    throw new RangeError("Invalid number.");
  t = Math.min(Math.max(0, t), 23);
  const e = [0 + t];
  return new Uint8Array(e).buffer;
}
Ve.uSmall = Io;
function Su(t, e) {
  if (t = parseInt("" + t, e), isNaN(t))
    throw new RangeError("Invalid number.");
  return t = Math.min(Math.max(0, t), 255), t = t.toString(16), Vt(0, 24, t);
}
Ve.u8 = Su;
function Bu(t, e) {
  if (t = parseInt("" + t, e), isNaN(t))
    throw new RangeError("Invalid number.");
  return t = Math.min(Math.max(0, t), 65535), t = t.toString(16), Vt(0, 25, t);
}
Ve.u16 = Bu;
function vu(t, e) {
  if (t = parseInt("" + t, e), isNaN(t))
    throw new RangeError("Invalid number.");
  return t = Math.min(Math.max(0, t), 4294967295), t = t.toString(16), Vt(0, 26, t);
}
Ve.u32 = vu;
function Uo(t, e) {
  if (typeof t == "string" && e == 16) {
    if (t.match(/[^0-9a-fA-F]/))
      throw new RangeError("Invalid number.");
    return Vt(0, 27, t);
  }
  if (t = parseInt("" + t, e), isNaN(t))
    throw new RangeError("Invalid number.");
  return t = Math.min(Math.max(0, t), wh), t = t.toString(16), Vt(0, 27, t);
}
Ve.u64 = Uo;
function Nu(t) {
  if (isNaN(t))
    throw new RangeError("Invalid number.");
  if (t === 0)
    return Io(0);
  t = Math.min(Math.max(0, -t), 24) - 1;
  const e = [32 + t];
  return new Uint8Array(e).buffer;
}
Ve.iSmall = Nu;
function Ru(t, e) {
  if (t = parseInt("" + t, e), isNaN(t))
    throw new RangeError("Invalid number.");
  return t = Math.min(Math.max(0, -t - 1), 255), t = t.toString(16), Vt(1, 24, t);
}
Ve.i8 = Ru;
function Ou(t, e) {
  if (t = parseInt("" + t, e), isNaN(t))
    throw new RangeError("Invalid number.");
  return t = Math.min(Math.max(0, -t - 1), 65535), t = t.toString(16), Vt(1, 25, t);
}
Ve.i16 = Ou;
function Iu(t, e) {
  if (t = parseInt("" + t, e), isNaN(t))
    throw new RangeError("Invalid number.");
  return t = Math.min(Math.max(0, -t - 1), 4294967295), t = t.toString(16), Vt(1, 26, t);
}
Ve.i32 = Iu;
function Uu(t, e) {
  if (typeof t == "string" && e == 16) {
    if (t.startsWith("-") ? t = t.slice(1) : t = "0", t.match(/[^0-9a-fA-F]/) || t.length > 16)
      throw new RangeError("Invalid number.");
    let r = !1, n = t.split("").reduceRight((i, s) => {
      if (r)
        return s + i;
      let c = parseInt(s, 16) - 1;
      return c >= 0 ? (r = !0, c.toString(16) + i) : "f" + i;
    }, "");
    return r ? Vt(1, 27, n) : Uo(0);
  }
  if (t = parseInt("" + t, e), isNaN(t))
    throw new RangeError("Invalid number.");
  return t = Math.min(Math.max(0, -t - 1), 9007199254740992), t = t.toString(16), Vt(1, 27, t);
}
Ve.i64 = Uu;
function _h(t) {
  return t >= 0 ? t < 24 ? Io(t) : t <= 255 ? Su(t) : t <= 65535 ? Bu(t) : t <= 4294967295 ? vu(t) : Uo(t) : t >= -24 ? Nu(t) : t >= -255 ? Ru(t) : t >= -65535 ? Ou(t) : t >= -4294967295 ? Iu(t) : Uu(t);
}
Ve.number = _h;
function xh(t) {
  return cr(rs(2, t.byteLength), t);
}
Ve.bytes = xh;
function Eh(t) {
  return Au(t);
}
Ve.string = Eh;
function Th(t) {
  return cr(rs(4, t.length), ...t);
}
Ve.array = Th;
function Ah(t, e = !1) {
  t instanceof Map || (t = new Map(Object.entries(t)));
  let r = Array.from(t.entries());
  return e && (r = r.sort(([n], [i]) => n.localeCompare(i))), cr(rs(5, t.size), ...r.map(([n, i]) => cr(Au(n), i)));
}
Ve.map = Ah;
function Sh(t) {
  const e = new Float32Array([t]);
  return cr(new Uint8Array([250]), new Uint8Array(e.buffer));
}
Ve.singleFloat = Sh;
function Bh(t) {
  const e = new Float64Array([t]);
  return cr(new Uint8Array([251]), new Uint8Array(e.buffer));
}
Ve.doubleFloat = Bh;
function vh(t) {
  return t ? Fu() : Pu();
}
Ve.bool = vh;
function Fu() {
  return Pn(new Uint8Array([245]));
}
Ve.true_ = Fu;
function Pu() {
  return Pn(new Uint8Array([244]));
}
Ve.false_ = Pu;
function Nh() {
  return Pn(new Uint8Array([246]));
}
Ve.null_ = Nh;
function Rh() {
  return Pn(new Uint8Array([247]));
}
Ve.undefined_ = Rh;
var Oh = en && en.__importStar || function(t) {
  if (t && t.__esModule) return t;
  var e = {};
  if (t != null) for (var r in t) Object.hasOwnProperty.call(t, r) && (e[r] = t[r]);
  return e.default = t, e;
};
Object.defineProperty(cn, "__esModule", { value: !0 });
const Mt = Oh(Ve), Ih = [
  ArrayBuffer,
  Uint8Array,
  Uint16Array,
  Uint32Array,
  Int8Array,
  Int16Array,
  Int32Array,
  Float32Array,
  Float64Array
];
class Cu {
  // @param _serializer The CBOR Serializer to use.
  // @param _stable Whether or not keys from objects should be sorted (stable). This is
  //     particularly useful when testing encodings between JSON objects.
  constructor(e, r = !1) {
    this._serializer = e, this._stable = r, this.name = "jsonDefault", this.priority = -100;
  }
  match(e) {
    return ["undefined", "boolean", "number", "string", "object"].indexOf(typeof e) != -1;
  }
  encode(e) {
    switch (typeof e) {
      case "undefined":
        return Mt.undefined_();
      case "boolean":
        return Mt.bool(e);
      case "number":
        return Math.floor(e) === e ? Mt.number(e) : Mt.doubleFloat(e);
      case "string":
        return Mt.string(e);
      case "object":
        if (e === null)
          return Mt.null_();
        if (Array.isArray(e))
          return Mt.array(e.map((r) => this._serializer.serializeValue(r)));
        if (Ih.find((r) => e instanceof r))
          return Mt.bytes(e.buffer);
        if (Object.getOwnPropertyNames(e).indexOf("toJSON") !== -1)
          return this.encode(e.toJSON());
        if (e instanceof Map) {
          const r = /* @__PURE__ */ new Map();
          for (const [n, i] of e.entries())
            r.set(n, this._serializer.serializeValue(i));
          return Mt.map(r, this._stable);
        } else {
          const r = /* @__PURE__ */ new Map();
          for (const [n, i] of Object.entries(e))
            r.set(n, this._serializer.serializeValue(i));
          return Mt.map(r, this._stable);
        }
      default:
        throw new Error("Invalid value.");
    }
  }
}
cn.JsonDefaultCborEncoder = Cu;
class Mu {
  constructor() {
    this.name = "cborEncoder", this.priority = -90;
  }
  match(e) {
    return typeof e == "object" && typeof e.toCBOR == "function";
  }
  encode(e) {
    return e.toCBOR();
  }
}
cn.ToCborEncoder = Mu;
class ku {
  constructor() {
    this._encoders = /* @__PURE__ */ new Set();
  }
  static withDefaultEncoders(e = !1) {
    const r = new this();
    return r.addEncoder(new Cu(r, e)), r.addEncoder(new Mu()), r;
  }
  removeEncoder(e) {
    for (const r of this._encoders.values())
      r.name == e && this._encoders.delete(r);
  }
  addEncoder(e) {
    this._encoders.add(e);
  }
  getEncoderFor(e) {
    let r = null;
    for (const n of this._encoders)
      (!r || n.priority > r.priority) && n.match(e) && (r = n);
    if (r === null)
      throw new Error("Could not find an encoder for value.");
    return r;
  }
  serializeValue(e) {
    return this.getEncoderFor(e).encode(e);
  }
  serialize(e) {
    return this.serializeValue(e);
  }
}
cn.CborSerializer = ku;
class Uh extends ku {
  serialize(e) {
    return Mt.raw(new Uint8Array([
      // Self describe CBOR.
      ...new Uint8Array([217, 217, 247]),
      ...new Uint8Array(super.serializeValue(e))
    ]));
  }
}
cn.SelfDescribeCborSerializer = Uh;
(function(t) {
  function e(i) {
    for (var s in i) t.hasOwnProperty(s) || (t[s] = i[s]);
  }
  var r = en && en.__importStar || function(i) {
    if (i && i.__esModule) return i;
    var s = {};
    if (i != null) for (var c in i) Object.hasOwnProperty.call(i, c) && (s[c] = i[c]);
    return s.default = i, s;
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), e(cn);
  const n = r(Ve);
  t.value = n;
})(or);
class Fh {
  get name() {
    return "Principal";
  }
  get priority() {
    return 0;
  }
  match(e) {
    return e && e._isPrincipal === !0;
  }
  encode(e) {
    return or.value.bytes(e.toUint8Array());
  }
}
class Ph {
  get name() {
    return "Buffer";
  }
  get priority() {
    return 1;
  }
  match(e) {
    return e instanceof ArrayBuffer || ArrayBuffer.isView(e);
  }
  encode(e) {
    return or.value.bytes(new Uint8Array(e));
  }
}
class Ch {
  get name() {
    return "BigInt";
  }
  get priority() {
    return 1;
  }
  match(e) {
    return typeof e == "bigint";
  }
  encode(e) {
    return e > BigInt(0) ? or.value.tagged(2, or.value.bytes(Hi(e.toString(16)))) : or.value.tagged(3, or.value.bytes(Hi((BigInt("-1") * e).toString(16))));
  }
}
const ns = or.SelfDescribeCborSerializer.withDefaultEncoders(!0);
ns.addEncoder(new Fh());
ns.addEncoder(new Ph());
ns.addEncoder(new Ch());
var to;
(function(t) {
  t[t.Uint64LittleEndian = 71] = "Uint64LittleEndian", t[t.Semantic = 55799] = "Semantic";
})(to || (to = {}));
function Ss(t) {
  return ns.serialize(t);
}
function fa(t) {
  const e = t.byteLength;
  let r = BigInt(0);
  for (let n = 0; n < e; n++)
    r = r * BigInt(256) + BigInt(t[n]);
  return r;
}
class Mh extends _u.Decoder {
  createByteString(e) {
    return er(...e);
  }
  createByteStringFromHeap(e, r) {
    return e === r ? new ArrayBuffer(0) : new Uint8Array(this._heap.slice(e, r));
  }
}
function ar(t) {
  const e = new Uint8Array(t), r = new Mh({
    size: e.byteLength,
    tags: {
      // Override tags 2 and 3 for BigInt support (borc supports only BigNumber).
      2: (n) => fa(n),
      3: (n) => -fa(n),
      [to.Semantic]: (n) => n
    }
  });
  try {
    return r.decodeFirst(e);
  } catch (n) {
    throw new Error(`Failed to decode CBOR: ${n}, input: ${Lt(e)}`);
  }
}
const Kn = () => {
  if (typeof window < "u" && window.crypto && window.crypto.getRandomValues) {
    const t = new Uint32Array(1);
    return window.crypto.getRandomValues(t), t[0];
  }
  if (typeof crypto < "u" && crypto.getRandomValues) {
    const t = new Uint32Array(1);
    return crypto.getRandomValues(t), t[0];
  }
  return typeof crypto < "u" && crypto.randomInt ? crypto.randomInt(0, 4294967295) : Math.floor(Math.random() * 4294967295);
};
var ro;
(function(t) {
  t.Call = "call";
})(ro || (ro = {}));
function no() {
  const t = new ArrayBuffer(16), e = new DataView(t), r = Kn(), n = Kn(), i = Kn(), s = Kn();
  return e.setUint32(0, r), e.setUint32(4, n), e.setUint32(8, i), e.setUint32(12, s), t;
}
const kh = BigInt(1e6), $h = 60 * 1e3;
class Xn {
  constructor(e) {
    const s = BigInt(Math.floor(Date.now() + e - $h)) * kh / BigInt(1e9) / BigInt(60) * BigInt(60) * BigInt(1e9);
    this._value = s;
  }
  toCBOR() {
    return or.value.u64(this._value.toString(16), 16);
  }
  toHash() {
    return De(this._value);
  }
}
function la(t = no) {
  return async (e) => {
    const r = e.request.headers;
    e.request.headers = r, e.endpoint === "call" && (e.body.nonce = t());
  };
}
function mi(t) {
  const e = [];
  return t.forEach((r, n) => {
    e.push([n, r]);
  }), e;
}
class ha extends wt {
  constructor(e, r) {
    super(e), this.response = r, this.name = this.constructor.name, Object.setPrototypeOf(this, new.target.prototype);
  }
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const $u = /* @__PURE__ */ BigInt(0), Fo = /* @__PURE__ */ BigInt(1), Hh = /* @__PURE__ */ BigInt(2);
function is(t) {
  return t instanceof Uint8Array || t != null && typeof t == "object" && t.constructor.name === "Uint8Array";
}
function Tr(t) {
  if (!is(t))
    throw new Error("Uint8Array expected");
}
function bn(t, e) {
  if (typeof e != "boolean")
    throw new Error(`${t} must be valid boolean, got "${e}".`);
}
const qh = /* @__PURE__ */ Array.from({ length: 256 }, (t, e) => e.toString(16).padStart(2, "0"));
function Hr(t) {
  Tr(t);
  let e = "";
  for (let r = 0; r < t.length; r++)
    e += qh[t[r]];
  return e;
}
function Hu(t) {
  if (typeof t != "string")
    throw new Error("hex string expected, got " + typeof t);
  return BigInt(t === "" ? "0" : `0x${t}`);
}
const rr = { _0: 48, _9: 57, _A: 65, _F: 70, _a: 97, _f: 102 };
function da(t) {
  if (t >= rr._0 && t <= rr._9)
    return t - rr._0;
  if (t >= rr._A && t <= rr._F)
    return t - (rr._A - 10);
  if (t >= rr._a && t <= rr._f)
    return t - (rr._a - 10);
}
function qu(t) {
  if (typeof t != "string")
    throw new Error("hex string expected, got " + typeof t);
  const e = t.length, r = e / 2;
  if (e % 2)
    throw new Error("padded hex string expected, got unpadded hex of length " + e);
  const n = new Uint8Array(r);
  for (let i = 0, s = 0; i < r; i++, s += 2) {
    const c = da(t.charCodeAt(s)), a = da(t.charCodeAt(s + 1));
    if (c === void 0 || a === void 0) {
      const p = t[s] + t[s + 1];
      throw new Error('hex string expected, got non-hex character "' + p + '" at index ' + s);
    }
    n[i] = c * 16 + a;
  }
  return n;
}
function Ht(t) {
  return Hu(Hr(t));
}
function _n(t) {
  return Tr(t), Hu(Hr(Uint8Array.from(t).reverse()));
}
function ot(t, e) {
  return qu(t.toString(16).padStart(e * 2, "0"));
}
function Li(t, e) {
  return ot(t, e).reverse();
}
function yt(t, e, r) {
  let n;
  if (typeof e == "string")
    try {
      n = qu(e);
    } catch (s) {
      throw new Error(`${t} must be valid hex string, got "${e}". Cause: ${s}`);
    }
  else if (is(e))
    n = Uint8Array.from(e);
  else
    throw new Error(`${t} must be hex string or Uint8Array`);
  const i = n.length;
  if (typeof r == "number" && i !== r)
    throw new Error(`${t} expected ${r} bytes, got ${i}`);
  return n;
}
function Qe(...t) {
  let e = 0;
  for (let n = 0; n < t.length; n++) {
    const i = t[n];
    Tr(i), e += i.length;
  }
  const r = new Uint8Array(e);
  for (let n = 0, i = 0; n < t.length; n++) {
    const s = t[n];
    r.set(s, i), i += s.length;
  }
  return r;
}
function Po(t) {
  if (typeof t != "string")
    throw new Error(`utf8ToBytes expected string, got ${typeof t}`);
  return new Uint8Array(new TextEncoder().encode(t));
}
const Bs = (t) => typeof t == "bigint" && $u <= t;
function Lu(t, e, r) {
  return Bs(t) && Bs(e) && Bs(r) && e <= t && t < r;
}
function _r(t, e, r, n) {
  if (!Lu(e, r, n))
    throw new Error(`expected valid ${t}: ${r} <= n < ${n}, got ${typeof e} ${e}`);
}
function xn(t) {
  let e;
  for (e = 0; t > $u; t >>= Fo, e += 1)
    ;
  return e;
}
function Lh(t, e) {
  return t >> BigInt(e) & Fo;
}
const gi = (t) => (Hh << BigInt(t - 1)) - Fo, Vh = {
  bigint: (t) => typeof t == "bigint",
  function: (t) => typeof t == "function",
  boolean: (t) => typeof t == "boolean",
  string: (t) => typeof t == "string",
  stringOrUint8Array: (t) => typeof t == "string" || is(t),
  isSafeInteger: (t) => Number.isSafeInteger(t),
  array: (t) => Array.isArray(t),
  field: (t, e) => e.Fp.isValid(t),
  hash: (t) => typeof t == "function" && Number.isSafeInteger(t.outputLen)
};
function Cn(t, e, r = {}) {
  const n = (i, s, c) => {
    const a = Vh[s];
    if (typeof a != "function")
      throw new Error(`Invalid validator "${s}", expected function`);
    const p = t[i];
    if (!(c && p === void 0) && !a(p, t))
      throw new Error(`Invalid param ${String(i)}=${p} (${typeof p}), expected ${s}`);
  };
  for (const [i, s] of Object.entries(e))
    n(i, s, !1);
  for (const [i, s] of Object.entries(r))
    n(i, s, !0);
  return t;
}
const pa = () => {
  throw new Error("not implemented");
};
function Sn(t) {
  const e = /* @__PURE__ */ new WeakMap();
  return (r, ...n) => {
    const i = e.get(r);
    if (i !== void 0)
      return i;
    const s = t(r, ...n);
    return e.set(r, s), s;
  };
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const st = BigInt(0), Ge = BigInt(1), xr = BigInt(2), Gh = BigInt(3), io = BigInt(4), ma = BigInt(5), ga = BigInt(8);
BigInt(9);
BigInt(16);
function ze(t, e) {
  const r = t % e;
  return r >= st ? r : e + r;
}
function jh(t, e, r) {
  if (r <= st || e < st)
    throw new Error("Expected power/modulo > 0");
  if (r === Ge)
    return st;
  let n = Ge;
  for (; e > st; )
    e & Ge && (n = n * t % r), t = t * t % r, e >>= Ge;
  return n;
}
function Dt(t, e, r) {
  let n = t;
  for (; e-- > st; )
    n *= n, n %= r;
  return n;
}
function ya(t, e) {
  if (t === st || e <= st)
    throw new Error(`invert: expected positive integers, got n=${t} mod=${e}`);
  let r = ze(t, e), n = e, i = st, s = Ge;
  for (; r !== st; ) {
    const a = n / r, p = n % r, g = i - s * a;
    n = r, r = p, i = s, s = g;
  }
  if (n !== Ge)
    throw new Error("invert: does not exist");
  return ze(i, e);
}
function zh(t) {
  const e = (t - Ge) / xr;
  let r, n, i;
  for (r = t - Ge, n = 0; r % xr === st; r /= xr, n++)
    ;
  for (i = xr; i < t && jh(i, e, t) !== t - Ge; i++)
    ;
  if (n === 1) {
    const c = (t + Ge) / io;
    return function(p, g) {
      const b = p.pow(g, c);
      if (!p.eql(p.sqr(b), g))
        throw new Error("Cannot find square root");
      return b;
    };
  }
  const s = (r + Ge) / xr;
  return function(a, p) {
    if (a.pow(p, e) === a.neg(a.ONE))
      throw new Error("Cannot find square root");
    let g = n, b = a.pow(a.mul(a.ONE, i), r), T = a.pow(p, s), O = a.pow(p, r);
    for (; !a.eql(O, a.ONE); ) {
      if (a.eql(O, a.ZERO))
        return a.ZERO;
      let B = 1;
      for (let I = a.sqr(O); B < g && !a.eql(I, a.ONE); B++)
        I = a.sqr(I);
      const m = a.pow(b, Ge << BigInt(g - B - 1));
      b = a.sqr(m), T = a.mul(T, m), O = a.mul(O, b), g = B;
    }
    return T;
  };
}
function Dh(t) {
  if (t % io === Gh) {
    const e = (t + Ge) / io;
    return function(n, i) {
      const s = n.pow(i, e);
      if (!n.eql(n.sqr(s), i))
        throw new Error("Cannot find square root");
      return s;
    };
  }
  if (t % ga === ma) {
    const e = (t - ma) / ga;
    return function(n, i) {
      const s = n.mul(i, xr), c = n.pow(s, e), a = n.mul(i, c), p = n.mul(n.mul(a, xr), c), g = n.mul(a, n.sub(p, n.ONE));
      if (!n.eql(n.sqr(g), i))
        throw new Error("Cannot find square root");
      return g;
    };
  }
  return zh(t);
}
const Wh = (t, e) => (ze(t, e) & Ge) === Ge, Yh = [
  "create",
  "isValid",
  "is0",
  "neg",
  "inv",
  "sqrt",
  "sqr",
  "eql",
  "add",
  "sub",
  "mul",
  "pow",
  "div",
  "addN",
  "subN",
  "mulN",
  "sqrN"
];
function Vu(t) {
  const e = {
    ORDER: "bigint",
    MASK: "bigint",
    BYTES: "isSafeInteger",
    BITS: "isSafeInteger"
  }, r = Yh.reduce((n, i) => (n[i] = "function", n), e);
  return Cn(t, r);
}
function yi(t, e, r) {
  if (r < st)
    throw new Error("Expected power > 0");
  if (r === st)
    return t.ONE;
  if (r === Ge)
    return e;
  let n = t.ONE, i = e;
  for (; r > st; )
    r & Ge && (n = t.mul(n, i)), i = t.sqr(i), r >>= Ge;
  return n;
}
function wi(t, e) {
  const r = new Array(e.length), n = e.reduce((s, c, a) => t.is0(c) ? s : (r[a] = s, t.mul(s, c)), t.ONE), i = t.inv(n);
  return e.reduceRight((s, c, a) => t.is0(c) ? s : (r[a] = t.mul(s, r[a]), t.mul(s, c)), i), r;
}
function Zh(t) {
  const e = (t - Ge) / xr;
  return (r, n) => r.pow(n, e);
}
function Gu(t, e) {
  const r = e !== void 0 ? e : t.toString(2).length, n = Math.ceil(r / 8);
  return { nBitLength: r, nByteLength: n };
}
function Mn(t, e, r = !1, n = {}) {
  if (t <= st)
    throw new Error(`Expected Field ORDER > 0, got ${t}`);
  const { nBitLength: i, nByteLength: s } = Gu(t, e);
  if (s > 2048)
    throw new Error("Field lengths over 2048 bytes are not supported");
  const c = Dh(t), a = Object.freeze({
    ORDER: t,
    BITS: i,
    BYTES: s,
    MASK: gi(i),
    ZERO: st,
    ONE: Ge,
    create: (p) => ze(p, t),
    isValid: (p) => {
      if (typeof p != "bigint")
        throw new Error(`Invalid field element: expected bigint, got ${typeof p}`);
      return st <= p && p < t;
    },
    is0: (p) => p === st,
    isOdd: (p) => (p & Ge) === Ge,
    neg: (p) => ze(-p, t),
    eql: (p, g) => p === g,
    sqr: (p) => ze(p * p, t),
    add: (p, g) => ze(p + g, t),
    sub: (p, g) => ze(p - g, t),
    mul: (p, g) => ze(p * g, t),
    pow: (p, g) => yi(a, p, g),
    div: (p, g) => ze(p * ya(g, t), t),
    // Same as above, but doesn't normalize
    sqrN: (p) => p * p,
    addN: (p, g) => p + g,
    subN: (p, g) => p - g,
    mulN: (p, g) => p * g,
    inv: (p) => ya(p, t),
    sqrt: n.sqrt || ((p) => c(a, p)),
    invertBatch: (p) => wi(a, p),
    // TODO: do we really need constant cmov?
    // We don't have const-time bigints anyway, so probably will be not very useful
    cmov: (p, g, b) => b ? g : p,
    toBytes: (p) => r ? Li(p, s) : ot(p, s),
    fromBytes: (p) => {
      if (p.length !== s)
        throw new Error(`Fp.fromBytes: expected ${s}, got ${p.length}`);
      return r ? _n(p) : Ht(p);
    }
  });
  return Object.freeze(a);
}
function ju(t) {
  if (typeof t != "bigint")
    throw new Error("field order must be bigint");
  const e = t.toString(2).length;
  return Math.ceil(e / 8);
}
function zu(t) {
  const e = ju(t);
  return e + Math.ceil(e / 2);
}
function Kh(t, e, r = !1) {
  const n = t.length, i = ju(e), s = zu(e);
  if (n < 16 || n < s || n > 1024)
    throw new Error(`expected ${s}-1024 bytes of input, got ${n}`);
  const c = r ? Ht(t) : _n(t), a = ze(c, e - Ge) + Ge;
  return r ? Li(a, i) : ot(a, i);
}
const Xh = Ht;
function wr(t, e) {
  if (Bn(t), Bn(e), t < 0 || t >= 1 << 8 * e)
    throw new Error(`bad I2OSP call: value=${t} length=${e}`);
  const r = Array.from({ length: e }).fill(0);
  for (let n = e - 1; n >= 0; n--)
    r[n] = t & 255, t >>>= 8;
  return new Uint8Array(r);
}
function Jh(t, e) {
  const r = new Uint8Array(t.length);
  for (let n = 0; n < t.length; n++)
    r[n] = t[n] ^ e[n];
  return r;
}
function Bn(t) {
  if (!Number.isSafeInteger(t))
    throw new Error("number expected");
}
function Qh(t, e, r, n) {
  Tr(t), Tr(e), Bn(r), e.length > 255 && (e = n(Qe(Po("H2C-OVERSIZE-DST-"), e)));
  const { outputLen: i, blockLen: s } = n, c = Math.ceil(r / i);
  if (r > 65535 || c > 255)
    throw new Error("expand_message_xmd: invalid lenInBytes");
  const a = Qe(e, wr(e.length, 1)), p = wr(0, s), g = wr(r, 2), b = new Array(c), T = n(Qe(p, t, g, wr(0, 1), a));
  b[0] = n(Qe(T, wr(1, 1), a));
  for (let B = 1; B <= c; B++) {
    const m = [Jh(T, b[B - 1]), wr(B + 1, 1), a];
    b[B] = n(Qe(...m));
  }
  return Qe(...b).slice(0, r);
}
function ed(t, e, r, n, i) {
  if (Tr(t), Tr(e), Bn(r), e.length > 255) {
    const s = Math.ceil(2 * n / 8);
    e = i.create({ dkLen: s }).update(Po("H2C-OVERSIZE-DST-")).update(e).digest();
  }
  if (r > 65535 || e.length > 255)
    throw new Error("expand_message_xof: invalid lenInBytes");
  return i.create({ dkLen: r }).update(t).update(wr(r, 2)).update(e).update(wr(e.length, 1)).digest();
}
function wa(t, e, r) {
  Cn(r, {
    DST: "stringOrUint8Array",
    p: "bigint",
    m: "isSafeInteger",
    k: "isSafeInteger",
    hash: "hash"
  });
  const { p: n, k: i, m: s, hash: c, expand: a, DST: p } = r;
  Tr(t), Bn(e);
  const g = typeof p == "string" ? Po(p) : p, b = n.toString(2).length, T = Math.ceil((b + i) / 8), O = e * s * T;
  let B;
  if (a === "xmd")
    B = Qh(t, g, O, c);
  else if (a === "xof")
    B = ed(t, g, O, i, c);
  else if (a === "_internal_pass")
    B = t;
  else
    throw new Error('expand must be "xmd" or "xof"');
  const m = new Array(e);
  for (let I = 0; I < e; I++) {
    const U = new Array(s);
    for (let V = 0; V < s; V++) {
      const j = T * (V + I * s), q = B.subarray(j, j + T);
      U[V] = ze(Xh(q), n);
    }
    m[I] = U;
  }
  return m;
}
function Du(t, e) {
  const r = e.map((n) => Array.from(n).reverse());
  return (n, i) => {
    const [s, c, a, p] = r.map((g) => g.reduce((b, T) => t.add(t.mul(b, n), T)));
    return n = t.div(s, c), i = t.mul(i, t.div(a, p)), { x: n, y: i };
  };
}
function ba(t, e, r) {
  if (typeof e != "function")
    throw new Error("mapToCurve() must be defined");
  return {
    // Encodes byte string to elliptic curve.
    // hash_to_curve from https://www.rfc-editor.org/rfc/rfc9380#section-3
    hashToCurve(n, i) {
      const s = wa(n, 2, { ...r, DST: r.DST, ...i }), c = t.fromAffine(e(s[0])), a = t.fromAffine(e(s[1])), p = c.add(a).clearCofactor();
      return p.assertValidity(), p;
    },
    // Encodes byte string to elliptic curve.
    // encode_to_curve from https://www.rfc-editor.org/rfc/rfc9380#section-3
    encodeToCurve(n, i) {
      const s = wa(n, 1, { ...r, DST: r.encodeDST, ...i }), c = t.fromAffine(e(s[0])).clearCofactor();
      return c.assertValidity(), c;
    },
    // Same as encodeToCurve, but without hash
    mapToCurve(n) {
      if (!Array.isArray(n))
        throw new Error("mapToCurve: expected array of bigints");
      for (const s of n)
        if (typeof s != "bigint")
          throw new Error(`mapToCurve: expected array of bigints, got ${s} in array`);
      const i = t.fromAffine(e(n)).clearCofactor();
      return i.assertValidity(), i;
    }
  };
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const td = BigInt(0), vs = BigInt(1), Ns = /* @__PURE__ */ new WeakMap(), _a = /* @__PURE__ */ new WeakMap();
function Wu(t, e) {
  const r = (s, c) => {
    const a = c.negate();
    return s ? a : c;
  }, n = (s) => {
    if (!Number.isSafeInteger(s) || s <= 0 || s > e)
      throw new Error(`Wrong window size=${s}, should be [1..${e}]`);
  }, i = (s) => {
    n(s);
    const c = Math.ceil(e / s) + 1, a = 2 ** (s - 1);
    return { windows: c, windowSize: a };
  };
  return {
    constTimeNegate: r,
    // non-const time multiplication ladder
    unsafeLadder(s, c) {
      let a = t.ZERO, p = s;
      for (; c > td; )
        c & vs && (a = a.add(p)), p = p.double(), c >>= vs;
      return a;
    },
    /**
     * Creates a wNAF precomputation window. Used for caching.
     * Default window size is set by `utils.precompute()` and is equal to 8.
     * Number of precomputed points depends on the curve size:
     * 2^(𝑊−1) * (Math.ceil(𝑛 / 𝑊) + 1), where:
     * - 𝑊 is the window size
     * - 𝑛 is the bitlength of the curve order.
     * For a 256-bit curve and window size 8, the number of precomputed points is 128 * 33 = 4224.
     * @returns precomputed point tables flattened to a single array
     */
    precomputeWindow(s, c) {
      const { windows: a, windowSize: p } = i(c), g = [];
      let b = s, T = b;
      for (let O = 0; O < a; O++) {
        T = b, g.push(T);
        for (let B = 1; B < p; B++)
          T = T.add(b), g.push(T);
        b = T.double();
      }
      return g;
    },
    /**
     * Implements ec multiplication using precomputed tables and w-ary non-adjacent form.
     * @param W window size
     * @param precomputes precomputed tables
     * @param n scalar (we don't check here, but should be less than curve order)
     * @returns real and fake (for const-time) points
     */
    wNAF(s, c, a) {
      const { windows: p, windowSize: g } = i(s);
      let b = t.ZERO, T = t.BASE;
      const O = BigInt(2 ** s - 1), B = 2 ** s, m = BigInt(s);
      for (let I = 0; I < p; I++) {
        const U = I * g;
        let V = Number(a & O);
        a >>= m, V > g && (V -= B, a += vs);
        const j = U, q = U + Math.abs(V) - 1, ee = I % 2 !== 0, k = V < 0;
        V === 0 ? T = T.add(r(ee, c[j])) : b = b.add(r(k, c[q]));
      }
      return { p: b, f: T };
    },
    wNAFCached(s, c, a) {
      const p = _a.get(s) || 1;
      let g = Ns.get(s);
      return g || (g = this.precomputeWindow(s, p), p !== 1 && Ns.set(s, a(g))), this.wNAF(p, g, c);
    },
    // We calculate precomputes for elliptic curve point multiplication
    // using windowed method. This specifies window size and
    // stores precomputed values. Usually only base point would be precomputed.
    setWindowSize(s, c) {
      n(c), _a.set(s, c), Ns.delete(s);
    }
  };
}
function Yu(t, e, r, n) {
  if (!Array.isArray(r) || !Array.isArray(n) || n.length !== r.length)
    throw new Error("arrays of points and scalars must have equal length");
  n.forEach((b, T) => {
    if (!e.isValid(b))
      throw new Error(`wrong scalar at index ${T}`);
  }), r.forEach((b, T) => {
    if (!(b instanceof t))
      throw new Error(`wrong point at index ${T}`);
  });
  const i = xn(BigInt(r.length)), s = i > 12 ? i - 3 : i > 4 ? i - 2 : i ? 2 : 1, c = (1 << s) - 1, a = new Array(c + 1).fill(t.ZERO), p = Math.floor((e.BITS - 1) / s) * s;
  let g = t.ZERO;
  for (let b = p; b >= 0; b -= s) {
    a.fill(t.ZERO);
    for (let O = 0; O < n.length; O++) {
      const B = n[O], m = Number(B >> BigInt(b) & BigInt(c));
      a[m] = a[m].add(r[O]);
    }
    let T = t.ZERO;
    for (let O = a.length - 1, B = t.ZERO; O > 0; O--)
      B = B.add(a[O]), T = T.add(B);
    if (g = g.add(T), b !== 0)
      for (let O = 0; O < s; O++)
        g = g.double();
  }
  return g;
}
function Zu(t) {
  return Vu(t.Fp), Cn(t, {
    n: "bigint",
    h: "bigint",
    Gx: "field",
    Gy: "field"
  }, {
    nBitLength: "isSafeInteger",
    nByteLength: "isSafeInteger"
  }), Object.freeze({
    ...Gu(t.n, t.nBitLength),
    ...t,
    p: t.Fp.ORDER
  });
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function rd(t) {
  const e = Zu(t);
  Cn(e, {
    a: "field",
    b: "field"
  }, {
    allowedPrivateKeyLengths: "array",
    wrapPrivateKey: "boolean",
    isTorsionFree: "function",
    clearCofactor: "function",
    allowInfinityPoint: "boolean",
    fromBytes: "function",
    toBytes: "function"
  });
  const { endo: r, Fp: n, a: i } = e;
  if (r) {
    if (!n.eql(i, n.ZERO))
      throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");
    if (typeof r != "object" || typeof r.beta != "bigint" || typeof r.splitScalar != "function")
      throw new Error("Expected endomorphism with beta: bigint and splitScalar: function");
  }
  return Object.freeze({ ...e });
}
const Rr = BigInt(0), Ze = BigInt(1), pr = BigInt(2), Vi = BigInt(3), xa = BigInt(4);
function Ea(t) {
  const e = rd(t), { Fp: r } = e, n = Mn(e.n, e.nBitLength), i = e.toBytes || ((I, U, V) => {
    const j = U.toAffine();
    return Qe(Uint8Array.from([4]), r.toBytes(j.x), r.toBytes(j.y));
  }), s = e.fromBytes || ((I) => {
    const U = I.subarray(1), V = r.fromBytes(U.subarray(0, r.BYTES)), j = r.fromBytes(U.subarray(r.BYTES, 2 * r.BYTES));
    return { x: V, y: j };
  });
  function c(I) {
    const { a: U, b: V } = e, j = r.sqr(I), q = r.mul(j, I);
    return r.add(r.add(q, r.mul(I, U)), V);
  }
  if (!r.eql(r.sqr(e.Gy), c(e.Gx)))
    throw new Error("bad generator point: equation left != right");
  function a(I) {
    return Lu(I, Ze, e.n);
  }
  function p(I) {
    const { allowedPrivateKeyLengths: U, nByteLength: V, wrapPrivateKey: j, n: q } = e;
    if (U && typeof I != "bigint") {
      if (is(I) && (I = Hr(I)), typeof I != "string" || !U.includes(I.length))
        throw new Error("Invalid key");
      I = I.padStart(V * 2, "0");
    }
    let ee;
    try {
      ee = typeof I == "bigint" ? I : Ht(yt("private key", I, V));
    } catch {
      throw new Error(`private key must be ${V} bytes, hex or bigint, not ${typeof I}`);
    }
    return j && (ee = ze(ee, q)), _r("private key", ee, Ze, q), ee;
  }
  function g(I) {
    if (!(I instanceof O))
      throw new Error("ProjectivePoint expected");
  }
  const b = Sn((I, U) => {
    const { px: V, py: j, pz: q } = I;
    if (r.eql(q, r.ONE))
      return { x: V, y: j };
    const ee = I.is0();
    U == null && (U = ee ? r.ONE : r.inv(q));
    const k = r.mul(V, U), J = r.mul(j, U), K = r.mul(q, U);
    if (ee)
      return { x: r.ZERO, y: r.ZERO };
    if (!r.eql(K, r.ONE))
      throw new Error("invZ was invalid");
    return { x: k, y: J };
  }), T = Sn((I) => {
    if (I.is0()) {
      if (e.allowInfinityPoint && !r.is0(I.py))
        return;
      throw new Error("bad point: ZERO");
    }
    const { x: U, y: V } = I.toAffine();
    if (!r.isValid(U) || !r.isValid(V))
      throw new Error("bad point: x or y not FE");
    const j = r.sqr(V), q = c(U);
    if (!r.eql(j, q))
      throw new Error("bad point: equation left != right");
    if (!I.isTorsionFree())
      throw new Error("bad point: not in prime-order subgroup");
    return !0;
  });
  class O {
    constructor(U, V, j) {
      if (this.px = U, this.py = V, this.pz = j, U == null || !r.isValid(U))
        throw new Error("x required");
      if (V == null || !r.isValid(V))
        throw new Error("y required");
      if (j == null || !r.isValid(j))
        throw new Error("z required");
      Object.freeze(this);
    }
    // Does not validate if the point is on-curve.
    // Use fromHex instead, or call assertValidity() later.
    static fromAffine(U) {
      const { x: V, y: j } = U || {};
      if (!U || !r.isValid(V) || !r.isValid(j))
        throw new Error("invalid affine point");
      if (U instanceof O)
        throw new Error("projective point not allowed");
      const q = (ee) => r.eql(ee, r.ZERO);
      return q(V) && q(j) ? O.ZERO : new O(V, j, r.ONE);
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    /**
     * Takes a bunch of Projective Points but executes only one
     * inversion on all of them. Inversion is very slow operation,
     * so this improves performance massively.
     * Optimization: converts a list of projective points to a list of identical points with Z=1.
     */
    static normalizeZ(U) {
      const V = r.invertBatch(U.map((j) => j.pz));
      return U.map((j, q) => j.toAffine(V[q])).map(O.fromAffine);
    }
    /**
     * Converts hash string or Uint8Array to Point.
     * @param hex short/long ECDSA hex
     */
    static fromHex(U) {
      const V = O.fromAffine(s(yt("pointHex", U)));
      return V.assertValidity(), V;
    }
    // Multiplies generator point by privateKey.
    static fromPrivateKey(U) {
      return O.BASE.multiply(p(U));
    }
    // Multiscalar Multiplication
    static msm(U, V) {
      return Yu(O, n, U, V);
    }
    // "Private method", don't use it directly
    _setWindowSize(U) {
      m.setWindowSize(this, U);
    }
    // A point on curve is valid if it conforms to equation.
    assertValidity() {
      T(this);
    }
    hasEvenY() {
      const { y: U } = this.toAffine();
      if (r.isOdd)
        return !r.isOdd(U);
      throw new Error("Field doesn't support isOdd");
    }
    /**
     * Compare one point to another.
     */
    equals(U) {
      g(U);
      const { px: V, py: j, pz: q } = this, { px: ee, py: k, pz: J } = U, K = r.eql(r.mul(V, J), r.mul(ee, q)), re = r.eql(r.mul(j, J), r.mul(k, q));
      return K && re;
    }
    /**
     * Flips point to one corresponding to (x, -y) in Affine coordinates.
     */
    negate() {
      return new O(this.px, r.neg(this.py), this.pz);
    }
    // Renes-Costello-Batina exception-free doubling formula.
    // There is 30% faster Jacobian formula, but it is not complete.
    // https://eprint.iacr.org/2015/1060, algorithm 3
    // Cost: 8M + 3S + 3*a + 2*b3 + 15add.
    double() {
      const { a: U, b: V } = e, j = r.mul(V, Vi), { px: q, py: ee, pz: k } = this;
      let J = r.ZERO, K = r.ZERO, re = r.ZERO, ue = r.mul(q, q), ie = r.mul(ee, ee), pe = r.mul(k, k), de = r.mul(q, ee);
      return de = r.add(de, de), re = r.mul(q, k), re = r.add(re, re), J = r.mul(U, re), K = r.mul(j, pe), K = r.add(J, K), J = r.sub(ie, K), K = r.add(ie, K), K = r.mul(J, K), J = r.mul(de, J), re = r.mul(j, re), pe = r.mul(U, pe), de = r.sub(ue, pe), de = r.mul(U, de), de = r.add(de, re), re = r.add(ue, ue), ue = r.add(re, ue), ue = r.add(ue, pe), ue = r.mul(ue, de), K = r.add(K, ue), pe = r.mul(ee, k), pe = r.add(pe, pe), ue = r.mul(pe, de), J = r.sub(J, ue), re = r.mul(pe, ie), re = r.add(re, re), re = r.add(re, re), new O(J, K, re);
    }
    // Renes-Costello-Batina exception-free addition formula.
    // There is 30% faster Jacobian formula, but it is not complete.
    // https://eprint.iacr.org/2015/1060, algorithm 1
    // Cost: 12M + 0S + 3*a + 3*b3 + 23add.
    add(U) {
      g(U);
      const { px: V, py: j, pz: q } = this, { px: ee, py: k, pz: J } = U;
      let K = r.ZERO, re = r.ZERO, ue = r.ZERO;
      const ie = e.a, pe = r.mul(e.b, Vi);
      let de = r.mul(V, ee), N = r.mul(j, k), P = r.mul(q, J), Y = r.add(V, j), z = r.add(ee, k);
      Y = r.mul(Y, z), z = r.add(de, N), Y = r.sub(Y, z), z = r.add(V, q);
      let G = r.add(ee, J);
      return z = r.mul(z, G), G = r.add(de, P), z = r.sub(z, G), G = r.add(j, q), K = r.add(k, J), G = r.mul(G, K), K = r.add(N, P), G = r.sub(G, K), ue = r.mul(ie, z), K = r.mul(pe, P), ue = r.add(K, ue), K = r.sub(N, ue), ue = r.add(N, ue), re = r.mul(K, ue), N = r.add(de, de), N = r.add(N, de), P = r.mul(ie, P), z = r.mul(pe, z), N = r.add(N, P), P = r.sub(de, P), P = r.mul(ie, P), z = r.add(z, P), de = r.mul(N, z), re = r.add(re, de), de = r.mul(G, z), K = r.mul(Y, K), K = r.sub(K, de), de = r.mul(Y, N), ue = r.mul(G, ue), ue = r.add(ue, de), new O(K, re, ue);
    }
    subtract(U) {
      return this.add(U.negate());
    }
    is0() {
      return this.equals(O.ZERO);
    }
    wNAF(U) {
      return m.wNAFCached(this, U, O.normalizeZ);
    }
    /**
     * Non-constant-time multiplication. Uses double-and-add algorithm.
     * It's faster, but should only be used when you don't care about
     * an exposed private key e.g. sig verification, which works over *public* keys.
     */
    multiplyUnsafe(U) {
      _r("scalar", U, Rr, e.n);
      const V = O.ZERO;
      if (U === Rr)
        return V;
      if (U === Ze)
        return this;
      const { endo: j } = e;
      if (!j)
        return m.unsafeLadder(this, U);
      let { k1neg: q, k1: ee, k2neg: k, k2: J } = j.splitScalar(U), K = V, re = V, ue = this;
      for (; ee > Rr || J > Rr; )
        ee & Ze && (K = K.add(ue)), J & Ze && (re = re.add(ue)), ue = ue.double(), ee >>= Ze, J >>= Ze;
      return q && (K = K.negate()), k && (re = re.negate()), re = new O(r.mul(re.px, j.beta), re.py, re.pz), K.add(re);
    }
    /**
     * Constant time multiplication.
     * Uses wNAF method. Windowed method may be 10% faster,
     * but takes 2x longer to generate and consumes 2x memory.
     * Uses precomputes when available.
     * Uses endomorphism for Koblitz curves.
     * @param scalar by which the point would be multiplied
     * @returns New point
     */
    multiply(U) {
      const { endo: V, n: j } = e;
      _r("scalar", U, Ze, j);
      let q, ee;
      if (V) {
        const { k1neg: k, k1: J, k2neg: K, k2: re } = V.splitScalar(U);
        let { p: ue, f: ie } = this.wNAF(J), { p: pe, f: de } = this.wNAF(re);
        ue = m.constTimeNegate(k, ue), pe = m.constTimeNegate(K, pe), pe = new O(r.mul(pe.px, V.beta), pe.py, pe.pz), q = ue.add(pe), ee = ie.add(de);
      } else {
        const { p: k, f: J } = this.wNAF(U);
        q = k, ee = J;
      }
      return O.normalizeZ([q, ee])[0];
    }
    /**
     * Efficiently calculate `aP + bQ`. Unsafe, can expose private key, if used incorrectly.
     * Not using Strauss-Shamir trick: precomputation tables are faster.
     * The trick could be useful if both P and Q are not G (not in our case).
     * @returns non-zero affine point
     */
    multiplyAndAddUnsafe(U, V, j) {
      const q = O.BASE, ee = (J, K) => K === Rr || K === Ze || !J.equals(q) ? J.multiplyUnsafe(K) : J.multiply(K), k = ee(this, V).add(ee(U, j));
      return k.is0() ? void 0 : k;
    }
    // Converts Projective point to affine (x, y) coordinates.
    // Can accept precomputed Z^-1 - for example, from invertBatch.
    // (x, y, z) ∋ (x=x/z, y=y/z)
    toAffine(U) {
      return b(this, U);
    }
    isTorsionFree() {
      const { h: U, isTorsionFree: V } = e;
      if (U === Ze)
        return !0;
      if (V)
        return V(O, this);
      throw new Error("isTorsionFree() has not been declared for the elliptic curve");
    }
    clearCofactor() {
      const { h: U, clearCofactor: V } = e;
      return U === Ze ? this : V ? V(O, this) : this.multiplyUnsafe(e.h);
    }
    toRawBytes(U = !0) {
      return bn("isCompressed", U), this.assertValidity(), i(O, this, U);
    }
    toHex(U = !0) {
      return bn("isCompressed", U), Hr(this.toRawBytes(U));
    }
  }
  O.BASE = new O(e.Gx, e.Gy, r.ONE), O.ZERO = new O(r.ZERO, r.ONE, r.ZERO);
  const B = e.nBitLength, m = Wu(O, e.endo ? Math.ceil(B / 2) : B);
  return {
    CURVE: e,
    ProjectivePoint: O,
    normPrivateKeyToScalar: p,
    weierstrassEquation: c,
    isWithinCurveOrder: a
  };
}
function nd(t, e) {
  const r = t.ORDER;
  let n = Rr;
  for (let m = r - Ze; m % pr === Rr; m /= pr)
    n += Ze;
  const i = n, s = pr << i - Ze - Ze, c = s * pr, a = (r - Ze) / c, p = (a - Ze) / pr, g = c - Ze, b = s, T = t.pow(e, a), O = t.pow(e, (a + Ze) / pr);
  let B = (m, I) => {
    let U = T, V = t.pow(I, g), j = t.sqr(V);
    j = t.mul(j, I);
    let q = t.mul(m, j);
    q = t.pow(q, p), q = t.mul(q, V), V = t.mul(q, I), j = t.mul(q, m);
    let ee = t.mul(j, V);
    q = t.pow(ee, b);
    let k = t.eql(q, t.ONE);
    V = t.mul(j, O), q = t.mul(ee, U), j = t.cmov(V, j, k), ee = t.cmov(q, ee, k);
    for (let J = i; J > Ze; J--) {
      let K = J - pr;
      K = pr << K - Ze;
      let re = t.pow(ee, K);
      const ue = t.eql(re, t.ONE);
      V = t.mul(j, U), U = t.mul(U, U), re = t.mul(ee, U), j = t.cmov(V, j, ue), ee = t.cmov(re, ee, ue);
    }
    return { isValid: k, value: j };
  };
  if (t.ORDER % xa === Vi) {
    const m = (t.ORDER - Vi) / xa, I = t.sqrt(t.neg(e));
    B = (U, V) => {
      let j = t.sqr(V);
      const q = t.mul(U, V);
      j = t.mul(j, q);
      let ee = t.pow(j, m);
      ee = t.mul(ee, q);
      const k = t.mul(ee, I), J = t.mul(t.sqr(ee), V), K = t.eql(J, U);
      let re = t.cmov(k, ee, K);
      return { isValid: K, value: re };
    };
  }
  return B;
}
function Ku(t, e) {
  if (Vu(t), !t.isValid(e.A) || !t.isValid(e.B) || !t.isValid(e.Z))
    throw new Error("mapToCurveSimpleSWU: invalid opts");
  const r = nd(t, e.Z);
  if (!t.isOdd)
    throw new Error("Fp.isOdd is not implemented!");
  return (n) => {
    let i, s, c, a, p, g, b, T;
    i = t.sqr(n), i = t.mul(i, e.Z), s = t.sqr(i), s = t.add(s, i), c = t.add(s, t.ONE), c = t.mul(c, e.B), a = t.cmov(e.Z, t.neg(s), !t.eql(s, t.ZERO)), a = t.mul(a, e.A), s = t.sqr(c), g = t.sqr(a), p = t.mul(g, e.A), s = t.add(s, p), s = t.mul(s, c), g = t.mul(g, a), p = t.mul(g, e.B), s = t.add(s, p), b = t.mul(i, c);
    const { isValid: O, value: B } = r(s, g);
    T = t.mul(i, n), T = t.mul(T, B), b = t.cmov(b, c, O), T = t.cmov(T, B, O);
    const m = t.isOdd(n) === t.isOdd(T);
    return T = t.cmov(t.neg(T), T, m), b = t.div(b, a), { x: b, y: T };
  };
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const id = BigInt(0), Jn = BigInt(1), Ta = BigInt(2), Xr = BigInt(3);
function sd(t) {
  const e = [];
  for (; t > Jn; t >>= Jn)
    (t & Jn) === id ? e.unshift(0) : (t & Xr) === Xr ? (e.unshift(-1), t += Jn) : e.unshift(1);
  return e;
}
function od(t) {
  const { Fp: e, Fr: r, Fp2: n, Fp6: i, Fp12: s } = t.fields, c = t.params.xNegative, a = t.params.twistType, p = Ea({ n: r.ORDER, ...t.G1 }), g = Object.assign(p, ba(p.ProjectivePoint, t.G1.mapToCurve, {
    ...t.htfDefaults,
    ...t.G1.htfDefaults
  })), b = Ea({ n: r.ORDER, ...t.G2 }), T = Object.assign(b, ba(b.ProjectivePoint, t.G2.mapToCurve, {
    ...t.htfDefaults,
    ...t.G2.htfDefaults
  }));
  let O;
  if (a === "multiplicative")
    O = (Z, ce, w, ne, he, Ee) => s.mul014(ne, Z, n.mul(ce, he), n.mul(w, Ee));
  else if (a === "divisive")
    O = (Z, ce, w, ne, he, Ee) => s.mul034(ne, n.mul(w, Ee), n.mul(ce, he), Z);
  else
    throw new Error("bls: unknown twist type");
  const B = n.div(n.ONE, n.mul(n.ONE, Ta));
  function m(Z, ce, w, ne) {
    const he = n.sqr(w), Ee = n.sqr(ne), ae = n.mulByB(n.mul(Ee, Xr)), fe = n.mul(ae, Xr), _ = n.sub(n.sub(n.sqr(n.add(w, ne)), Ee), he), E = n.sub(ae, he), S = n.mul(n.sqr(ce), Xr), M = n.neg(_);
    return Z.push([E, S, M]), ce = n.mul(n.mul(n.mul(n.sub(he, fe), ce), w), B), w = n.sub(n.sqr(n.mul(n.add(he, fe), B)), n.mul(n.sqr(ae), Xr)), ne = n.mul(he, _), { Rx: ce, Ry: w, Rz: ne };
  }
  function I(Z, ce, w, ne, he, Ee) {
    const ae = n.sub(w, n.mul(Ee, ne)), fe = n.sub(ce, n.mul(he, ne)), _ = n.sub(n.mul(ae, he), n.mul(fe, Ee)), E = n.neg(ae), S = fe;
    Z.push([_, E, S]);
    const M = n.sqr(fe), F = n.mul(M, fe), H = n.mul(M, ce), h = n.add(n.sub(F, n.mul(H, Ta)), n.mul(n.sqr(ae), ne));
    return ce = n.mul(fe, h), w = n.sub(n.mul(n.sub(H, h), ae), n.mul(F, w)), ne = n.mul(ne, F), { Rx: ce, Ry: w, Rz: ne };
  }
  const U = sd(t.params.ateLoopSize), V = Sn((Z) => {
    const ce = Z, { x: w, y: ne } = ce.toAffine(), he = w, Ee = ne, ae = n.neg(ne);
    let fe = he, _ = Ee, E = n.ONE;
    const S = [];
    for (const M of U) {
      const F = [];
      ({ Rx: fe, Ry: _, Rz: E } = m(F, fe, _, E)), M && ({ Rx: fe, Ry: _, Rz: E } = I(F, fe, _, E, he, M === -1 ? ae : Ee)), S.push(F);
    }
    if (t.postPrecompute) {
      const M = S[S.length - 1];
      t.postPrecompute(fe, _, E, he, Ee, I.bind(null, M));
    }
    return S;
  });
  function j(Z, ce = !1) {
    let w = s.ONE;
    if (Z.length) {
      const ne = Z[0][0].length;
      for (let he = 0; he < ne; he++) {
        w = s.sqr(w);
        for (const [Ee, ae, fe] of Z)
          for (const [_, E, S] of Ee[he])
            w = O(_, E, S, w, ae, fe);
      }
    }
    return c && (w = s.conjugate(w)), ce ? s.finalExponentiate(w) : w;
  }
  function q(Z, ce = !0) {
    const w = [];
    g.ProjectivePoint.normalizeZ(Z.map(({ g1: ne }) => ne)), T.ProjectivePoint.normalizeZ(Z.map(({ g2: ne }) => ne));
    for (const { g1: ne, g2: he } of Z) {
      if (ne.equals(g.ProjectivePoint.ZERO) || he.equals(T.ProjectivePoint.ZERO))
        throw new Error("pairing is not available for ZERO point");
      ne.assertValidity(), he.assertValidity();
      const Ee = ne.toAffine();
      w.push([V(he), Ee.x, Ee.y]);
    }
    return j(w, ce);
  }
  function ee(Z, ce, w = !0) {
    return q([{ g1: Z, g2: ce }], w);
  }
  const k = {
    randomPrivateKey: () => {
      const Z = zu(r.ORDER);
      return Kh(t.randomBytes(Z), r.ORDER);
    },
    calcPairingPrecomputes: V
  }, { ShortSignature: J } = t.G1, { Signature: K } = t.G2;
  function re(Z) {
    return Z instanceof g.ProjectivePoint ? Z : g.ProjectivePoint.fromHex(Z);
  }
  function ue(Z, ce) {
    return Z instanceof g.ProjectivePoint ? Z : g.hashToCurve(yt("point", Z), ce);
  }
  function ie(Z) {
    return Z instanceof T.ProjectivePoint ? Z : K.fromHex(Z);
  }
  function pe(Z, ce) {
    return Z instanceof T.ProjectivePoint ? Z : T.hashToCurve(yt("point", Z), ce);
  }
  function de(Z) {
    return g.ProjectivePoint.fromPrivateKey(Z).toRawBytes(!0);
  }
  function N(Z) {
    return T.ProjectivePoint.fromPrivateKey(Z).toRawBytes(!0);
  }
  function P(Z, ce, w) {
    const ne = pe(Z, w);
    ne.assertValidity();
    const he = ne.multiply(g.normPrivateKeyToScalar(ce));
    return Z instanceof T.ProjectivePoint ? he : K.toRawBytes(he);
  }
  function Y(Z, ce, w) {
    const ne = ue(Z, w);
    ne.assertValidity();
    const he = ne.multiply(g.normPrivateKeyToScalar(ce));
    return Z instanceof g.ProjectivePoint ? he : J.toRawBytes(he);
  }
  function z(Z, ce, w, ne) {
    const he = re(w), Ee = pe(ce, ne), ae = g.ProjectivePoint.BASE, fe = ie(Z), _ = q([
      { g1: he.negate(), g2: Ee },
      // ePHM = pairing(P.negate(), Hm, false);
      { g1: ae, g2: fe }
      // eGS = pairing(G, S, false);
    ]);
    return s.eql(_, s.ONE);
  }
  function G(Z, ce, w, ne) {
    const he = ie(w), Ee = ue(ce, ne), ae = T.ProjectivePoint.BASE, fe = re(Z), _ = q([
      { g1: Ee, g2: he },
      // eHmP = pairing(Hm, P, false);
      { g1: fe, g2: ae.negate() }
      // eSG = pairing(S, G.negate(), false);
    ]);
    return s.eql(_, s.ONE);
  }
  function Q(Z) {
    if (!Z.length)
      throw new Error("Expected non-empty array");
    const w = Z.map(re).reduce((ne, he) => ne.add(he), g.ProjectivePoint.ZERO);
    return Z[0] instanceof g.ProjectivePoint ? (w.assertValidity(), w) : w.toRawBytes(!0);
  }
  function le(Z) {
    if (!Z.length)
      throw new Error("Expected non-empty array");
    const w = Z.map(ie).reduce((ne, he) => ne.add(he), T.ProjectivePoint.ZERO);
    return Z[0] instanceof T.ProjectivePoint ? (w.assertValidity(), w) : K.toRawBytes(w);
  }
  function ye(Z) {
    if (!Z.length)
      throw new Error("Expected non-empty array");
    const w = Z.map(re).reduce((ne, he) => ne.add(he), g.ProjectivePoint.ZERO);
    return Z[0] instanceof g.ProjectivePoint ? (w.assertValidity(), w) : J.toRawBytes(w);
  }
  function se(Z, ce, w, ne) {
    if (!ce.length)
      throw new Error("Expected non-empty messages array");
    if (w.length !== ce.length)
      throw new Error("Pubkey count should equal msg count");
    const he = ie(Z), Ee = ce.map((E) => pe(E, ne)), ae = w.map(re), fe = /* @__PURE__ */ new Map();
    for (let E = 0; E < ae.length; E++) {
      const S = ae[E], M = Ee[E];
      let F = fe.get(M);
      F === void 0 && (F = [], fe.set(M, F)), F.push(S);
    }
    const _ = [];
    try {
      for (const [E, S] of fe) {
        const M = S.reduce((F, H) => F.add(H));
        _.push({ g1: M, g2: E });
      }
      return _.push({ g1: g.ProjectivePoint.BASE.negate(), g2: he }), s.eql(q(_), s.ONE);
    } catch {
      return !1;
    }
  }
  return g.ProjectivePoint.BASE._setWindowSize(4), {
    getPublicKey: de,
    getPublicKeyForShortSignatures: N,
    sign: P,
    signShortSignature: Y,
    verify: z,
    verifyBatch: se,
    verifyShortSignature: G,
    aggregatePublicKeys: Q,
    aggregateSignatures: le,
    aggregateShortSignatures: ye,
    millerLoopBatch: j,
    pairing: ee,
    pairingBatch: q,
    G1: g,
    G2: T,
    Signature: K,
    ShortSignature: J,
    fields: {
      Fr: r,
      Fp: e,
      Fp2: n,
      Fp6: i,
      Fp12: s
    },
    params: {
      ateLoopSize: t.params.ateLoopSize,
      r: t.params.r,
      G1b: t.G1.b,
      G2b: t.G2.b
    },
    utils: k
  };
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const ad = BigInt(0), Jr = BigInt(1), ir = BigInt(2), Aa = BigInt(3);
function Rs(t, e, r, n, i = 1, s) {
  const c = BigInt(s === void 0 ? n : s), a = r ** BigInt(n), p = [];
  for (let g = 0; g < i; g++) {
    const b = BigInt(g + 1), T = [];
    for (let O = 0, B = Jr; O < n; O++) {
      const m = (b * B - b) / c % a;
      T.push(t.pow(e, m)), B *= r;
    }
    p.push(T);
  }
  return p;
}
function cd(t, e, r) {
  const n = e.pow(r, (t.ORDER - Jr) / Aa), i = e.pow(r, (t.ORDER - Jr) / ir);
  function s(O, B) {
    const m = e.mul(e.frobeniusMap(O, 1), n), I = e.mul(e.frobeniusMap(B, 1), i);
    return [m, I];
  }
  const c = e.pow(r, (t.ORDER ** ir - Jr) / Aa), a = e.pow(r, (t.ORDER ** ir - Jr) / ir);
  if (!e.eql(a, e.neg(e.ONE)))
    throw new Error("psiFrobenius: PSI2_Y!==-1");
  function p(O, B) {
    return [e.mul(O, c), e.neg(B)];
  }
  const g = (O) => (B, m) => {
    const I = m.toAffine(), U = O(I.x, I.y);
    return B.fromAffine({ x: U[0], y: U[1] });
  }, b = g(s), T = g(p);
  return { psi: s, psi2: p, G2psi: b, G2psi2: T, PSI_X: n, PSI_Y: i, PSI2_X: c, PSI2_Y: a };
}
function ud(t) {
  const { ORDER: e } = t, r = Mn(e), n = r.create(t.NONRESIDUE || BigInt(-1)), i = Zh(e), s = r.div(r.ONE, ir), c = Rs(r, n, r.ORDER, 2)[0], a = ({ c0: N, c1: P }, { c0: Y, c1: z }) => ({
    c0: r.add(N, Y),
    c1: r.add(P, z)
  }), p = ({ c0: N, c1: P }, { c0: Y, c1: z }) => ({
    c0: r.sub(N, Y),
    c1: r.sub(P, z)
  }), g = ({ c0: N, c1: P }, Y) => {
    if (typeof Y == "bigint")
      return { c0: r.mul(N, Y), c1: r.mul(P, Y) };
    const { c0: z, c1: G } = Y;
    let Q = r.mul(N, z), le = r.mul(P, G);
    const ye = r.sub(Q, le), se = r.sub(r.mul(r.add(N, P), r.add(z, G)), r.add(Q, le));
    return { c0: ye, c1: se };
  }, b = ({ c0: N, c1: P }) => {
    const Y = r.add(N, P), z = r.sub(N, P), G = r.add(N, N);
    return { c0: r.mul(Y, z), c1: r.mul(G, P) };
  }, T = (N) => {
    if (N.length !== 2)
      throw new Error("Invalid tuple");
    const P = N.map((Y) => r.create(Y));
    return { c0: P[0], c1: P[1] };
  }, O = e * e, B = T(t.FP2_NONRESIDUE), m = {
    ORDER: O,
    NONRESIDUE: B,
    BITS: xn(O),
    BYTES: Math.ceil(xn(O) / 8),
    MASK: gi(xn(O)),
    ZERO: { c0: r.ZERO, c1: r.ZERO },
    ONE: { c0: r.ONE, c1: r.ZERO },
    create: (N) => N,
    isValid: ({ c0: N, c1: P }) => typeof N == "bigint" && typeof P == "bigint",
    is0: ({ c0: N, c1: P }) => r.is0(N) && r.is0(P),
    eql: ({ c0: N, c1: P }, { c0: Y, c1: z }) => r.eql(N, Y) && r.eql(P, z),
    neg: ({ c0: N, c1: P }) => ({ c0: r.neg(N), c1: r.neg(P) }),
    pow: (N, P) => yi(m, N, P),
    invertBatch: (N) => wi(m, N),
    // Normalized
    add: a,
    sub: p,
    mul: g,
    sqr: b,
    // NonNormalized stuff
    addN: a,
    subN: p,
    mulN: g,
    sqrN: b,
    // Why inversion for bigint inside Fp instead of Fp2? it is even used in that context?
    div: (N, P) => m.mul(N, typeof P == "bigint" ? r.inv(r.create(P)) : m.inv(P)),
    inv: ({ c0: N, c1: P }) => {
      const Y = r.inv(r.create(N * N + P * P));
      return { c0: r.mul(Y, r.create(N)), c1: r.mul(Y, r.create(-P)) };
    },
    sqrt: (N) => {
      if (t.Fp2sqrt)
        return t.Fp2sqrt(N);
      const { c0: P, c1: Y } = N;
      if (r.is0(Y))
        return r.eql(i(r, P), r.ONE) ? m.create({ c0: r.sqrt(P), c1: r.ZERO }) : m.create({ c0: r.ZERO, c1: r.sqrt(r.div(P, n)) });
      const z = r.sqrt(r.sub(r.sqr(P), r.mul(r.sqr(Y), n)));
      let G = r.mul(r.add(z, P), s);
      const Q = i(r, G);
      !r.is0(Q) && !r.eql(Q, r.ONE) && (G = r.sub(G, z));
      const le = r.sqrt(G), ye = m.create({ c0: le, c1: r.div(r.mul(Y, s), le) });
      if (!m.eql(m.sqr(ye), N))
        throw new Error("Cannot find square root");
      const se = ye, Z = m.neg(se), { re: ce, im: w } = m.reim(se), { re: ne, im: he } = m.reim(Z);
      return w > he || w === he && ce > ne ? se : Z;
    },
    // Same as sgn0_m_eq_2 in RFC 9380
    isOdd: (N) => {
      const { re: P, im: Y } = m.reim(N), z = P % ir, G = P === ad, Q = Y % ir;
      return BigInt(z || G && Q) == Jr;
    },
    // Bytes util
    fromBytes(N) {
      if (N.length !== m.BYTES)
        throw new Error(`fromBytes wrong length=${N.length}`);
      return { c0: r.fromBytes(N.subarray(0, r.BYTES)), c1: r.fromBytes(N.subarray(r.BYTES)) };
    },
    toBytes: ({ c0: N, c1: P }) => Qe(r.toBytes(N), r.toBytes(P)),
    cmov: ({ c0: N, c1: P }, { c0: Y, c1: z }, G) => ({
      c0: r.cmov(N, Y, G),
      c1: r.cmov(P, z, G)
    }),
    reim: ({ c0: N, c1: P }) => ({ re: N, im: P }),
    // multiply by u + 1
    mulByNonresidue: ({ c0: N, c1: P }) => m.mul({ c0: N, c1: P }, B),
    mulByB: t.Fp2mulByB,
    fromBigTuple: T,
    frobeniusMap: ({ c0: N, c1: P }, Y) => ({
      c0: N,
      c1: r.mul(P, c[Y % 2])
    })
  }, I = ({ c0: N, c1: P, c2: Y }, { c0: z, c1: G, c2: Q }) => ({
    c0: m.add(N, z),
    c1: m.add(P, G),
    c2: m.add(Y, Q)
  }), U = ({ c0: N, c1: P, c2: Y }, { c0: z, c1: G, c2: Q }) => ({
    c0: m.sub(N, z),
    c1: m.sub(P, G),
    c2: m.sub(Y, Q)
  }), V = ({ c0: N, c1: P, c2: Y }, z) => {
    if (typeof z == "bigint")
      return {
        c0: m.mul(N, z),
        c1: m.mul(P, z),
        c2: m.mul(Y, z)
      };
    const { c0: G, c1: Q, c2: le } = z, ye = m.mul(N, G), se = m.mul(P, Q), Z = m.mul(Y, le);
    return {
      // t0 + (c1 + c2) * (r1 * r2) - (T1 + T2) * (u + 1)
      c0: m.add(ye, m.mulByNonresidue(m.sub(m.mul(m.add(P, Y), m.add(Q, le)), m.add(se, Z)))),
      // (c0 + c1) * (r0 + r1) - (T0 + T1) + T2 * (u + 1)
      c1: m.add(m.sub(m.mul(m.add(N, P), m.add(G, Q)), m.add(ye, se)), m.mulByNonresidue(Z)),
      // T1 + (c0 + c2) * (r0 + r2) - T0 + T2
      c2: m.sub(m.add(se, m.mul(m.add(N, Y), m.add(G, le))), m.add(ye, Z))
    };
  }, j = ({ c0: N, c1: P, c2: Y }) => {
    let z = m.sqr(N), G = m.mul(m.mul(N, P), ir), Q = m.mul(m.mul(P, Y), ir), le = m.sqr(Y);
    return {
      c0: m.add(m.mulByNonresidue(Q), z),
      // T3 * (u + 1) + T0
      c1: m.add(m.mulByNonresidue(le), G),
      // T4 * (u + 1) + T1
      // T1 + (c0 - c1 + c2)² + T3 - T0 - T4
      c2: m.sub(m.sub(m.add(m.add(G, m.sqr(m.add(m.sub(N, P), Y))), Q), z), le)
    };
  }, [q, ee] = Rs(m, B, r.ORDER, 6, 2, 3), k = {
    ORDER: m.ORDER,
    // TODO: unused, but need to verify
    BITS: 3 * m.BITS,
    BYTES: 3 * m.BYTES,
    MASK: gi(3 * m.BITS),
    ZERO: { c0: m.ZERO, c1: m.ZERO, c2: m.ZERO },
    ONE: { c0: m.ONE, c1: m.ZERO, c2: m.ZERO },
    create: (N) => N,
    isValid: ({ c0: N, c1: P, c2: Y }) => m.isValid(N) && m.isValid(P) && m.isValid(Y),
    is0: ({ c0: N, c1: P, c2: Y }) => m.is0(N) && m.is0(P) && m.is0(Y),
    neg: ({ c0: N, c1: P, c2: Y }) => ({ c0: m.neg(N), c1: m.neg(P), c2: m.neg(Y) }),
    eql: ({ c0: N, c1: P, c2: Y }, { c0: z, c1: G, c2: Q }) => m.eql(N, z) && m.eql(P, G) && m.eql(Y, Q),
    sqrt: pa,
    // Do we need division by bigint at all? Should be done via order:
    div: (N, P) => k.mul(N, typeof P == "bigint" ? r.inv(r.create(P)) : k.inv(P)),
    pow: (N, P) => yi(k, N, P),
    invertBatch: (N) => wi(k, N),
    // Normalized
    add: I,
    sub: U,
    mul: V,
    sqr: j,
    // NonNormalized stuff
    addN: I,
    subN: U,
    mulN: V,
    sqrN: j,
    inv: ({ c0: N, c1: P, c2: Y }) => {
      let z = m.sub(m.sqr(N), m.mulByNonresidue(m.mul(Y, P))), G = m.sub(m.mulByNonresidue(m.sqr(Y)), m.mul(N, P)), Q = m.sub(m.sqr(P), m.mul(N, Y)), le = m.inv(m.add(m.mulByNonresidue(m.add(m.mul(Y, G), m.mul(P, Q))), m.mul(N, z)));
      return { c0: m.mul(le, z), c1: m.mul(le, G), c2: m.mul(le, Q) };
    },
    // Bytes utils
    fromBytes: (N) => {
      if (N.length !== k.BYTES)
        throw new Error(`fromBytes wrong length=${N.length}`);
      return {
        c0: m.fromBytes(N.subarray(0, m.BYTES)),
        c1: m.fromBytes(N.subarray(m.BYTES, 2 * m.BYTES)),
        c2: m.fromBytes(N.subarray(2 * m.BYTES))
      };
    },
    toBytes: ({ c0: N, c1: P, c2: Y }) => Qe(m.toBytes(N), m.toBytes(P), m.toBytes(Y)),
    cmov: ({ c0: N, c1: P, c2: Y }, { c0: z, c1: G, c2: Q }, le) => ({
      c0: m.cmov(N, z, le),
      c1: m.cmov(P, G, le),
      c2: m.cmov(Y, Q, le)
    }),
    fromBigSix: (N) => {
      if (!Array.isArray(N) || N.length !== 6)
        throw new Error("Invalid Fp6 usage");
      return {
        c0: m.fromBigTuple(N.slice(0, 2)),
        c1: m.fromBigTuple(N.slice(2, 4)),
        c2: m.fromBigTuple(N.slice(4, 6))
      };
    },
    frobeniusMap: ({ c0: N, c1: P, c2: Y }, z) => ({
      c0: m.frobeniusMap(N, z),
      c1: m.mul(m.frobeniusMap(P, z), q[z % 6]),
      c2: m.mul(m.frobeniusMap(Y, z), ee[z % 6])
    }),
    mulByFp2: ({ c0: N, c1: P, c2: Y }, z) => ({
      c0: m.mul(N, z),
      c1: m.mul(P, z),
      c2: m.mul(Y, z)
    }),
    mulByNonresidue: ({ c0: N, c1: P, c2: Y }) => ({ c0: m.mulByNonresidue(Y), c1: N, c2: P }),
    // Sparse multiplication
    mul1: ({ c0: N, c1: P, c2: Y }, z) => ({
      c0: m.mulByNonresidue(m.mul(Y, z)),
      c1: m.mul(N, z),
      c2: m.mul(P, z)
    }),
    // Sparse multiplication
    mul01({ c0: N, c1: P, c2: Y }, z, G) {
      let Q = m.mul(N, z), le = m.mul(P, G);
      return {
        // ((c1 + c2) * b1 - T1) * (u + 1) + T0
        c0: m.add(m.mulByNonresidue(m.sub(m.mul(m.add(P, Y), G), le)), Q),
        // (b0 + b1) * (c0 + c1) - T0 - T1
        c1: m.sub(m.sub(m.mul(m.add(z, G), m.add(N, P)), Q), le),
        // (c0 + c2) * b0 - T0 + T1
        c2: m.add(m.sub(m.mul(m.add(N, Y), z), Q), le)
      };
    }
  }, J = Rs(m, B, r.ORDER, 12, 1, 6)[0], K = ({ c0: N, c1: P }, { c0: Y, c1: z }) => ({
    c0: k.add(N, Y),
    c1: k.add(P, z)
  }), re = ({ c0: N, c1: P }, { c0: Y, c1: z }) => ({
    c0: k.sub(N, Y),
    c1: k.sub(P, z)
  }), ue = ({ c0: N, c1: P }, Y) => {
    if (typeof Y == "bigint")
      return { c0: k.mul(N, Y), c1: k.mul(P, Y) };
    let { c0: z, c1: G } = Y, Q = k.mul(N, z), le = k.mul(P, G);
    return {
      c0: k.add(Q, k.mulByNonresidue(le)),
      // T1 + T2 * v
      // (c0 + c1) * (r0 + r1) - (T1 + T2)
      c1: k.sub(k.mul(k.add(N, P), k.add(z, G)), k.add(Q, le))
    };
  }, ie = ({ c0: N, c1: P }) => {
    let Y = k.mul(N, P);
    return {
      // (c1 * v + c0) * (c0 + c1) - AB - AB * v
      c0: k.sub(k.sub(k.mul(k.add(k.mulByNonresidue(P), N), k.add(N, P)), Y), k.mulByNonresidue(Y)),
      c1: k.add(Y, Y)
    };
  };
  function pe(N, P) {
    const Y = m.sqr(N), z = m.sqr(P);
    return {
      first: m.add(m.mulByNonresidue(z), Y),
      // b² * Nonresidue + a²
      second: m.sub(m.sub(m.sqr(m.add(N, P)), Y), z)
      // (a + b)² - a² - b²
    };
  }
  const de = {
    ORDER: m.ORDER,
    // TODO: unused, but need to verify
    BITS: 2 * m.BITS,
    BYTES: 2 * m.BYTES,
    MASK: gi(2 * m.BITS),
    ZERO: { c0: k.ZERO, c1: k.ZERO },
    ONE: { c0: k.ONE, c1: k.ZERO },
    create: (N) => N,
    isValid: ({ c0: N, c1: P }) => k.isValid(N) && k.isValid(P),
    is0: ({ c0: N, c1: P }) => k.is0(N) && k.is0(P),
    neg: ({ c0: N, c1: P }) => ({ c0: k.neg(N), c1: k.neg(P) }),
    eql: ({ c0: N, c1: P }, { c0: Y, c1: z }) => k.eql(N, Y) && k.eql(P, z),
    sqrt: pa,
    inv: ({ c0: N, c1: P }) => {
      let Y = k.inv(k.sub(k.sqr(N), k.mulByNonresidue(k.sqr(P))));
      return { c0: k.mul(N, Y), c1: k.neg(k.mul(P, Y)) };
    },
    div: (N, P) => de.mul(N, typeof P == "bigint" ? r.inv(r.create(P)) : de.inv(P)),
    pow: (N, P) => yi(de, N, P),
    invertBatch: (N) => wi(de, N),
    // Normalized
    add: K,
    sub: re,
    mul: ue,
    sqr: ie,
    // NonNormalized stuff
    addN: K,
    subN: re,
    mulN: ue,
    sqrN: ie,
    // Bytes utils
    fromBytes: (N) => {
      if (N.length !== de.BYTES)
        throw new Error(`fromBytes wrong length=${N.length}`);
      return {
        c0: k.fromBytes(N.subarray(0, k.BYTES)),
        c1: k.fromBytes(N.subarray(k.BYTES))
      };
    },
    toBytes: ({ c0: N, c1: P }) => Qe(k.toBytes(N), k.toBytes(P)),
    cmov: ({ c0: N, c1: P }, { c0: Y, c1: z }, G) => ({
      c0: k.cmov(N, Y, G),
      c1: k.cmov(P, z, G)
    }),
    // Utils
    // toString() {
    //   return `Fp12(${this.c0} + ${this.c1} * w)`;
    // },
    // fromTuple(c: [Fp6, Fp6]) {
    //   return new Fp12(...c);
    // }
    fromBigTwelve: (N) => ({
      c0: k.fromBigSix(N.slice(0, 6)),
      c1: k.fromBigSix(N.slice(6, 12))
    }),
    // Raises to q**i -th power
    frobeniusMap(N, P) {
      const { c0: Y, c1: z, c2: G } = k.frobeniusMap(N.c1, P), Q = J[P % 12];
      return {
        c0: k.frobeniusMap(N.c0, P),
        c1: k.create({
          c0: m.mul(Y, Q),
          c1: m.mul(z, Q),
          c2: m.mul(G, Q)
        })
      };
    },
    mulByFp2: ({ c0: N, c1: P }, Y) => ({
      c0: k.mulByFp2(N, Y),
      c1: k.mulByFp2(P, Y)
    }),
    conjugate: ({ c0: N, c1: P }) => ({ c0: N, c1: k.neg(P) }),
    // Sparse multiplication
    mul014: ({ c0: N, c1: P }, Y, z, G) => {
      let Q = k.mul01(N, Y, z), le = k.mul1(P, G);
      return {
        c0: k.add(k.mulByNonresidue(le), Q),
        // T1 * v + T0
        // (c1 + c0) * [o0, o1+o4] - T0 - T1
        c1: k.sub(k.sub(k.mul01(k.add(P, N), Y, m.add(z, G)), Q), le)
      };
    },
    mul034: ({ c0: N, c1: P }, Y, z, G) => {
      const Q = k.create({
        c0: m.mul(N.c0, Y),
        c1: m.mul(N.c1, Y),
        c2: m.mul(N.c2, Y)
      }), le = k.mul01(P, z, G), ye = k.mul01(k.add(N, P), m.add(Y, z), G);
      return {
        c0: k.add(k.mulByNonresidue(le), Q),
        c1: k.sub(ye, k.add(Q, le))
      };
    },
    // A cyclotomic group is a subgroup of Fp^n defined by
    //   GΦₙ(p) = {α ∈ Fpⁿ : α^Φₙ(p) = 1}
    // The result of any pairing is in a cyclotomic subgroup
    // https://eprint.iacr.org/2009/565.pdf
    _cyclotomicSquare: t.Fp12cyclotomicSquare,
    _cyclotomicExp: t.Fp12cyclotomicExp,
    // https://eprint.iacr.org/2010/354.pdf
    // https://eprint.iacr.org/2009/565.pdf
    finalExponentiate: t.Fp12finalExponentiate
  };
  return { Fp: r, Fp2: m, Fp6: k, Fp4Square: pe, Fp12: de };
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const dt = BigInt(0), Gi = BigInt(1), it = BigInt(2), Qn = BigInt(3), En = BigInt(4), br = BigInt("0xd201000000010000"), fd = xn(br), { Fp: we, Fp2: xe, Fp6: so, Fp4Square: Os, Fp12: Ce } = ud({
  // Order of Fp
  ORDER: BigInt("0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffaaab"),
  // Finite extension field over irreducible polynominal.
  // Fp(u) / (u² - β) where β = -1
  FP2_NONRESIDUE: [Gi, Gi],
  Fp2mulByB: ({ c0: t, c1: e }) => {
    const r = we.mul(t, En), n = we.mul(e, En);
    return { c0: we.sub(r, n), c1: we.add(r, n) };
  },
  // Fp12
  // A cyclotomic group is a subgroup of Fp^n defined by
  //   GΦₙ(p) = {α ∈ Fpⁿ : α^Φₙ(p) = 1}
  // The result of any pairing is in a cyclotomic subgroup
  // https://eprint.iacr.org/2009/565.pdf
  Fp12cyclotomicSquare: ({ c0: t, c1: e }) => {
    const { c0: r, c1: n, c2: i } = t, { c0: s, c1: c, c2: a } = e, { first: p, second: g } = Os(r, c), { first: b, second: T } = Os(s, i), { first: O, second: B } = Os(n, a), m = xe.mulByNonresidue(B);
    return {
      c0: so.create({
        c0: xe.add(xe.mul(xe.sub(p, r), it), p),
        // 2 * (T3 - c0c0)  + T3
        c1: xe.add(xe.mul(xe.sub(b, n), it), b),
        // 2 * (T5 - c0c1)  + T5
        c2: xe.add(xe.mul(xe.sub(O, i), it), O)
      }),
      // 2 * (T7 - c0c2)  + T7
      c1: so.create({
        c0: xe.add(xe.mul(xe.add(m, s), it), m),
        // 2 * (T9 + c1c0) + T9
        c1: xe.add(xe.mul(xe.add(g, c), it), g),
        // 2 * (T4 + c1c1) + T4
        c2: xe.add(xe.mul(xe.add(T, a), it), T)
      })
    };
  },
  Fp12cyclotomicExp(t, e) {
    let r = Ce.ONE;
    for (let n = fd - 1; n >= 0; n--)
      r = Ce._cyclotomicSquare(r), Lh(e, n) && (r = Ce.mul(r, t));
    return r;
  },
  // https://eprint.iacr.org/2010/354.pdf
  // https://eprint.iacr.org/2009/565.pdf
  Fp12finalExponentiate: (t) => {
    const e = br, r = Ce.div(Ce.frobeniusMap(t, 6), t), n = Ce.mul(Ce.frobeniusMap(r, 2), r), i = Ce.conjugate(Ce._cyclotomicExp(n, e)), s = Ce.mul(Ce.conjugate(Ce._cyclotomicSquare(n)), i), c = Ce.conjugate(Ce._cyclotomicExp(s, e)), a = Ce.conjugate(Ce._cyclotomicExp(c, e)), p = Ce.mul(Ce.conjugate(Ce._cyclotomicExp(a, e)), Ce._cyclotomicSquare(i)), g = Ce.conjugate(Ce._cyclotomicExp(p, e)), b = Ce.frobeniusMap(Ce.mul(i, a), 2), T = Ce.frobeniusMap(Ce.mul(c, n), 3), O = Ce.frobeniusMap(Ce.mul(p, Ce.conjugate(n)), 1), B = Ce.mul(Ce.mul(g, Ce.conjugate(s)), n);
    return Ce.mul(Ce.mul(Ce.mul(b, T), O), B);
  }
}), Sa = Mn(BigInt("0x73eda753299d7d483339d80809a1d80553bda402fffe5bfeffffffff00000001")), ld = Du(xe, [
  // xNum
  [
    [
      "0x5c759507e8e333ebb5b7a9a47d7ed8532c52d39fd3a042a88b58423c50ae15d5c2638e343d9c71c6238aaaaaaaa97d6",
      "0x5c759507e8e333ebb5b7a9a47d7ed8532c52d39fd3a042a88b58423c50ae15d5c2638e343d9c71c6238aaaaaaaa97d6"
    ],
    [
      "0x0",
      "0x11560bf17baa99bc32126fced787c88f984f87adf7ae0c7f9a208c6b4f20a4181472aaa9cb8d555526a9ffffffffc71a"
    ],
    [
      "0x11560bf17baa99bc32126fced787c88f984f87adf7ae0c7f9a208c6b4f20a4181472aaa9cb8d555526a9ffffffffc71e",
      "0x8ab05f8bdd54cde190937e76bc3e447cc27c3d6fbd7063fcd104635a790520c0a395554e5c6aaaa9354ffffffffe38d"
    ],
    [
      "0x171d6541fa38ccfaed6dea691f5fb614cb14b4e7f4e810aa22d6108f142b85757098e38d0f671c7188e2aaaaaaaa5ed1",
      "0x0"
    ]
  ],
  // xDen
  [
    [
      "0x0",
      "0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffaa63"
    ],
    [
      "0xc",
      "0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffaa9f"
    ],
    ["0x1", "0x0"]
    // LAST 1
  ],
  // yNum
  [
    [
      "0x1530477c7ab4113b59a4c18b076d11930f7da5d4a07f649bf54439d87d27e500fc8c25ebf8c92f6812cfc71c71c6d706",
      "0x1530477c7ab4113b59a4c18b076d11930f7da5d4a07f649bf54439d87d27e500fc8c25ebf8c92f6812cfc71c71c6d706"
    ],
    [
      "0x0",
      "0x5c759507e8e333ebb5b7a9a47d7ed8532c52d39fd3a042a88b58423c50ae15d5c2638e343d9c71c6238aaaaaaaa97be"
    ],
    [
      "0x11560bf17baa99bc32126fced787c88f984f87adf7ae0c7f9a208c6b4f20a4181472aaa9cb8d555526a9ffffffffc71c",
      "0x8ab05f8bdd54cde190937e76bc3e447cc27c3d6fbd7063fcd104635a790520c0a395554e5c6aaaa9354ffffffffe38f"
    ],
    [
      "0x124c9ad43b6cf79bfbf7043de3811ad0761b0f37a1e26286b0e977c69aa274524e79097a56dc4bd9e1b371c71c718b10",
      "0x0"
    ]
  ],
  // yDen
  [
    [
      "0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffa8fb",
      "0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffa8fb"
    ],
    [
      "0x0",
      "0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffa9d3"
    ],
    [
      "0x12",
      "0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffaa99"
    ],
    ["0x1", "0x0"]
    // LAST 1
  ]
].map((t) => t.map((e) => xe.fromBigTuple(e.map(BigInt))))), hd = Du(we, [
  // xNum
  [
    "0x11a05f2b1e833340b809101dd99815856b303e88a2d7005ff2627b56cdb4e2c85610c2d5f2e62d6eaeac1662734649b7",
    "0x17294ed3e943ab2f0588bab22147a81c7c17e75b2f6a8417f565e33c70d1e86b4838f2a6f318c356e834eef1b3cb83bb",
    "0xd54005db97678ec1d1048c5d10a9a1bce032473295983e56878e501ec68e25c958c3e3d2a09729fe0179f9dac9edcb0",
    "0x1778e7166fcc6db74e0609d307e55412d7f5e4656a8dbf25f1b33289f1b330835336e25ce3107193c5b388641d9b6861",
    "0xe99726a3199f4436642b4b3e4118e5499db995a1257fb3f086eeb65982fac18985a286f301e77c451154ce9ac8895d9",
    "0x1630c3250d7313ff01d1201bf7a74ab5db3cb17dd952799b9ed3ab9097e68f90a0870d2dcae73d19cd13c1c66f652983",
    "0xd6ed6553fe44d296a3726c38ae652bfb11586264f0f8ce19008e218f9c86b2a8da25128c1052ecaddd7f225a139ed84",
    "0x17b81e7701abdbe2e8743884d1117e53356de5ab275b4db1a682c62ef0f2753339b7c8f8c8f475af9ccb5618e3f0c88e",
    "0x80d3cf1f9a78fc47b90b33563be990dc43b756ce79f5574a2c596c928c5d1de4fa295f296b74e956d71986a8497e317",
    "0x169b1f8e1bcfa7c42e0c37515d138f22dd2ecb803a0c5c99676314baf4bb1b7fa3190b2edc0327797f241067be390c9e",
    "0x10321da079ce07e272d8ec09d2565b0dfa7dccdde6787f96d50af36003b14866f69b771f8c285decca67df3f1605fb7b",
    "0x6e08c248e260e70bd1e962381edee3d31d79d7e22c837bc23c0bf1bc24c6b68c24b1b80b64d391fa9c8ba2e8ba2d229"
  ],
  // xDen
  [
    "0x8ca8d548cff19ae18b2e62f4bd3fa6f01d5ef4ba35b48ba9c9588617fc8ac62b558d681be343df8993cf9fa40d21b1c",
    "0x12561a5deb559c4348b4711298e536367041e8ca0cf0800c0126c2588c48bf5713daa8846cb026e9e5c8276ec82b3bff",
    "0xb2962fe57a3225e8137e629bff2991f6f89416f5a718cd1fca64e00b11aceacd6a3d0967c94fedcfcc239ba5cb83e19",
    "0x3425581a58ae2fec83aafef7c40eb545b08243f16b1655154cca8abc28d6fd04976d5243eecf5c4130de8938dc62cd8",
    "0x13a8e162022914a80a6f1d5f43e7a07dffdfc759a12062bb8d6b44e833b306da9bd29ba81f35781d539d395b3532a21e",
    "0xe7355f8e4e667b955390f7f0506c6e9395735e9ce9cad4d0a43bcef24b8982f7400d24bc4228f11c02df9a29f6304a5",
    "0x772caacf16936190f3e0c63e0596721570f5799af53a1894e2e073062aede9cea73b3538f0de06cec2574496ee84a3a",
    "0x14a7ac2a9d64a8b230b3f5b074cf01996e7f63c21bca68a81996e1cdf9822c580fa5b9489d11e2d311f7d99bbdcc5a5e",
    "0xa10ecf6ada54f825e920b3dafc7a3cce07f8d1d7161366b74100da67f39883503826692abba43704776ec3a79a1d641",
    "0x95fc13ab9e92ad4476d6e3eb3a56680f682b4ee96f7d03776df533978f31c1593174e4b4b7865002d6384d168ecdd0a",
    "0x000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001"
    // LAST 1
  ],
  // yNum
  [
    "0x90d97c81ba24ee0259d1f094980dcfa11ad138e48a869522b52af6c956543d3cd0c7aee9b3ba3c2be9845719707bb33",
    "0x134996a104ee5811d51036d776fb46831223e96c254f383d0f906343eb67ad34d6c56711962fa8bfe097e75a2e41c696",
    "0xcc786baa966e66f4a384c86a3b49942552e2d658a31ce2c344be4b91400da7d26d521628b00523b8dfe240c72de1f6",
    "0x1f86376e8981c217898751ad8746757d42aa7b90eeb791c09e4a3ec03251cf9de405aba9ec61deca6355c77b0e5f4cb",
    "0x8cc03fdefe0ff135caf4fe2a21529c4195536fbe3ce50b879833fd221351adc2ee7f8dc099040a841b6daecf2e8fedb",
    "0x16603fca40634b6a2211e11db8f0a6a074a7d0d4afadb7bd76505c3d3ad5544e203f6326c95a807299b23ab13633a5f0",
    "0x4ab0b9bcfac1bbcb2c977d027796b3ce75bb8ca2be184cb5231413c4d634f3747a87ac2460f415ec961f8855fe9d6f2",
    "0x987c8d5333ab86fde9926bd2ca6c674170a05bfe3bdd81ffd038da6c26c842642f64550fedfe935a15e4ca31870fb29",
    "0x9fc4018bd96684be88c9e221e4da1bb8f3abd16679dc26c1e8b6e6a1f20cabe69d65201c78607a360370e577bdba587",
    "0xe1bba7a1186bdb5223abde7ada14a23c42a0ca7915af6fe06985e7ed1e4d43b9b3f7055dd4eba6f2bafaaebca731c30",
    "0x19713e47937cd1be0dfd0b8f1d43fb93cd2fcbcb6caf493fd1183e416389e61031bf3a5cce3fbafce813711ad011c132",
    "0x18b46a908f36f6deb918c143fed2edcc523559b8aaf0c2462e6bfe7f911f643249d9cdf41b44d606ce07c8a4d0074d8e",
    "0xb182cac101b9399d155096004f53f447aa7b12a3426b08ec02710e807b4633f06c851c1919211f20d4c04f00b971ef8",
    "0x245a394ad1eca9b72fc00ae7be315dc757b3b080d4c158013e6632d3c40659cc6cf90ad1c232a6442d9d3f5db980133",
    "0x5c129645e44cf1102a159f748c4a3fc5e673d81d7e86568d9ab0f5d396a7ce46ba1049b6579afb7866b1e715475224b",
    "0x15e6be4e990f03ce4ea50b3b42df2eb5cb181d8f84965a3957add4fa95af01b2b665027efec01c7704b456be69c8b604"
  ],
  // yDen
  [
    "0x16112c4c3a9c98b252181140fad0eae9601a6de578980be6eec3232b5be72e7a07f3688ef60c206d01479253b03663c1",
    "0x1962d75c2381201e1a0cbd6c43c348b885c84ff731c4d59ca4a10356f453e01f78a4260763529e3532f6102c2e49a03d",
    "0x58df3306640da276faaae7d6e8eb15778c4855551ae7f310c35a5dd279cd2eca6757cd636f96f891e2538b53dbf67f2",
    "0x16b7d288798e5395f20d23bf89edb4d1d115c5dbddbcd30e123da489e726af41727364f2c28297ada8d26d98445f5416",
    "0xbe0e079545f43e4b00cc912f8228ddcc6d19c9f0f69bbb0542eda0fc9dec916a20b15dc0fd2ededda39142311a5001d",
    "0x8d9e5297186db2d9fb266eaac783182b70152c65550d881c5ecd87b6f0f5a6449f38db9dfa9cce202c6477faaf9b7ac",
    "0x166007c08a99db2fc3ba8734ace9824b5eecfdfa8d0cf8ef5dd365bc400a0051d5fa9c01a58b1fb93d1a1399126a775c",
    "0x16a3ef08be3ea7ea03bcddfabba6ff6ee5a4375efa1f4fd7feb34fd206357132b920f5b00801dee460ee415a15812ed9",
    "0x1866c8ed336c61231a1be54fd1d74cc4f9fb0ce4c6af5920abc5750c4bf39b4852cfe2f7bb9248836b233d9d55535d4a",
    "0x167a55cda70a6e1cea820597d94a84903216f763e13d87bb5308592e7ea7d4fbc7385ea3d529b35e346ef48bb8913f55",
    "0x4d2f259eea405bd48f010a01ad2911d9c6dd039bb61a6290e591b36e636a5c871a5c29f4f83060400f8b49cba8f6aa8",
    "0xaccbb67481d033ff5852c1e48c50c477f94ff8aefce42d28c0f9a88cea7913516f968986f7ebbea9684b529e2561092",
    "0xad6b9514c767fe3c3613144b45f1496543346d98adf02267d5ceef9a00d9b8693000763e3b90ac11e99b138573345cc",
    "0x2660400eb2e4f3b628bdd0d53cd76f2bf565b94e72927c1cb748df27942480e420517bd8714cc80d1fadc1326ed06f7",
    "0xe0fa1d816ddc03e6b24255e0d7819c171c40f65e273b853324efcd6356caa205ca2f570f13497804415473a1d634b8f",
    "0x000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001"
    // LAST 1
  ]
].map((t) => t.map((e) => BigInt(e)))), dd = Ku(xe, {
  A: xe.create({ c0: we.create(dt), c1: we.create(BigInt(240)) }),
  // A' = 240 * I
  B: xe.create({ c0: we.create(BigInt(1012)), c1: we.create(BigInt(1012)) }),
  // B' = 1012 * (1 + I)
  Z: xe.create({ c0: we.create(BigInt(-2)), c1: we.create(BigInt(-1)) })
  // Z: -(2 + I)
}), pd = Ku(we, {
  A: we.create(BigInt("0x144698a3b8e9433d693a02c96d4982b0ea985383ee66a8d8e8981aefd881ac98936f8da0e0f97f5cf428082d584c1d")),
  B: we.create(BigInt("0x12e2908d11688030018b12e8753eee3b2016c1f0f24f4070a0b9c14fcef35ef55a23215a316ceaa5d1cc48e98e172be0")),
  Z: we.create(BigInt(11))
}), { G2psi: Ba, G2psi2: md } = cd(we, xe, xe.div(xe.ONE, xe.NONRESIDUE)), Is = Object.freeze({
  // DST: a domain separation tag
  // defined in section 2.2.5
  // Use utils.getDSTLabel(), utils.setDSTLabel(value)
  DST: "BLS_SIG_BLS12381G2_XMD:SHA-256_SSWU_RO_NUL_",
  encodeDST: "BLS_SIG_BLS12381G2_XMD:SHA-256_SSWU_RO_NUL_",
  // p: the characteristic of F
  //    where F is a finite field of characteristic p and order q = p^m
  p: we.ORDER,
  // m: the extension degree of F, m >= 1
  //     where F is a finite field of characteristic p and order q = p^m
  m: 2,
  // k: the target security level for the suite in bits
  // defined in section 5.1
  k: 128,
  // option to use a message that has already been processed by
  // expand_message_xmd
  expand: "xmd",
  // Hash functions for: expand_message_xmd is appropriate for use with a
  // wide range of hash functions, including SHA-2, SHA-3, BLAKE2, and others.
  // BBS+ uses blake2: https://github.com/hyperledger/aries-framework-go/issues/2247
  hash: To
}), ji = vn(we.toBytes(dt), { infinity: !0, compressed: !0 });
function ei(t) {
  t = t.slice();
  const e = t[0] & 224, r = !!(e >> 7 & 1), n = !!(e >> 6 & 1), i = !!(e >> 5 & 1);
  return t[0] &= 31, { compressed: r, infinity: n, sort: i, value: t };
}
function vn(t, e) {
  if (t[0] & 224)
    throw new Error("setMask: non-empty mask");
  return e.compressed && (t[0] |= 128), e.infinity && (t[0] |= 64), e.sort && (t[0] |= 32), t;
}
function va(t) {
  t.assertValidity();
  const e = t.equals(vt.G1.ProjectivePoint.ZERO), { x: r, y: n } = t.toAffine();
  if (e)
    return ji.slice();
  const i = we.ORDER, s = !!(n * it / i);
  return vn(ot(r, we.BYTES), { compressed: !0, sort: s });
}
function Na(t) {
  t.assertValidity();
  const e = we.BYTES;
  if (t.equals(vt.G2.ProjectivePoint.ZERO))
    return Qe(ji, ot(dt, e));
  const { x: r, y: n } = t.toAffine(), { re: i, im: s } = xe.reim(r), { re: c, im: a } = xe.reim(n), g = !!((a > dt ? a * it : c * it) / we.ORDER & Gi), b = i;
  return Qe(vn(ot(s, e), { sort: g, compressed: !0 }), ot(b, e));
}
const vt = od({
  // Fields
  fields: {
    Fp: we,
    Fp2: xe,
    Fp6: so,
    Fp12: Ce,
    Fr: Sa
  },
  // G1 is the order-q subgroup of E1(Fp) : y² = x³ + 4, #E1(Fp) = h1q, where
  // characteristic; z + (z⁴ - z² + 1)(z - 1)²/3
  G1: {
    Fp: we,
    // cofactor; (z - 1)²/3
    h: BigInt("0x396c8c005555e1568c00aaab0000aaab"),
    // generator's coordinates
    // x = 3685416753713387016781088315183077757961620795782546409894578378688607592378376318836054947676345821548104185464507
    // y = 1339506544944476473020471379941921221584933875938349620426543736416511423956333506472724655353366534992391756441569
    Gx: BigInt("0x17f1d3a73197d7942695638c4fa9ac0fc3688c4f9774b905a14e3a3f171bac586c55e83ff97a1aeffb3af00adb22c6bb"),
    Gy: BigInt("0x08b3f481e3aaa0f1a09e30ed741d8ae4fcf5e095d5d00af600db18cb2c04b3edd03cc744a2888ae40caa232946c5e7e1"),
    a: we.ZERO,
    b: En,
    htfDefaults: { ...Is, m: 1, DST: "BLS_SIG_BLS12381G1_XMD:SHA-256_SSWU_RO_NUL_" },
    wrapPrivateKey: !0,
    allowInfinityPoint: !0,
    // Checks is the point resides in prime-order subgroup.
    // point.isTorsionFree() should return true for valid points
    // It returns false for shitty points.
    // https://eprint.iacr.org/2021/1130.pdf
    isTorsionFree: (t, e) => {
      const r = BigInt("0x5f19672fdf76ce51ba69c6076a0f77eaddb3a93be6f89688de17d813620a00022e01fffffffefffe"), n = new t(we.mul(e.px, r), e.py, e.pz);
      return e.multiplyUnsafe(br).negate().multiplyUnsafe(br).equals(n);
    },
    // Clear cofactor of G1
    // https://eprint.iacr.org/2019/403
    clearCofactor: (t, e) => e.multiplyUnsafe(br).add(e),
    mapToCurve: (t) => {
      const { x: e, y: r } = pd(we.create(t[0]));
      return hd(e, r);
    },
    fromBytes: (t) => {
      const { compressed: e, infinity: r, sort: n, value: i } = ei(t);
      if (i.length === 48 && e) {
        const s = we.ORDER, c = Ht(i), a = we.create(c & we.MASK);
        if (r) {
          if (a !== dt)
            throw new Error("G1: non-empty compressed point at infinity");
          return { x: dt, y: dt };
        }
        const p = we.add(we.pow(a, Qn), we.create(vt.params.G1b));
        let g = we.sqrt(p);
        if (!g)
          throw new Error("Invalid compressed G1 point");
        return g * it / s !== BigInt(n) && (g = we.neg(g)), { x: we.create(a), y: we.create(g) };
      } else if (i.length === 96 && !e) {
        const s = Ht(i.subarray(0, we.BYTES)), c = Ht(i.subarray(we.BYTES));
        if (r) {
          if (s !== dt || c !== dt)
            throw new Error("G1: non-empty point at infinity");
          return vt.G1.ProjectivePoint.ZERO.toAffine();
        }
        return { x: we.create(s), y: we.create(c) };
      } else
        throw new Error("Invalid point G1, expected 48/96 bytes");
    },
    toBytes: (t, e, r) => {
      const n = e.equals(t.ZERO), { x: i, y: s } = e.toAffine();
      if (r) {
        if (n)
          return ji.slice();
        const c = we.ORDER, a = !!(s * it / c);
        return vn(ot(i, we.BYTES), { compressed: !0, sort: a });
      } else
        return n ? Qe(new Uint8Array([64]), new Uint8Array(2 * we.BYTES - 1)) : Qe(ot(i, we.BYTES), ot(s, we.BYTES));
    },
    ShortSignature: {
      fromHex(t) {
        const { infinity: e, sort: r, value: n } = ei(yt("signatureHex", t, 48)), i = we.ORDER, s = Ht(n);
        if (e)
          return vt.G1.ProjectivePoint.ZERO;
        const c = we.create(s & we.MASK), a = we.add(we.pow(c, Qn), we.create(vt.params.G1b));
        let p = we.sqrt(a);
        if (!p)
          throw new Error("Invalid compressed G1 point");
        const g = BigInt(r);
        p * it / i !== g && (p = we.neg(p));
        const b = vt.G1.ProjectivePoint.fromAffine({ x: c, y: p });
        return b.assertValidity(), b;
      },
      toRawBytes(t) {
        return va(t);
      },
      toHex(t) {
        return Hr(va(t));
      }
    }
  },
  // G2 is the order-q subgroup of E2(Fp²) : y² = x³+4(1+√−1),
  // where Fp2 is Fp[√−1]/(x2+1). #E2(Fp2 ) = h2q, where
  // G² - 1
  // h2q
  G2: {
    Fp: xe,
    // cofactor
    h: BigInt("0x5d543a95414e7f1091d50792876a202cd91de4547085abaa68a205b2e5a7ddfa628f1cb4d9e82ef21537e293a6691ae1616ec6e786f0c70cf1c38e31c7238e5"),
    Gx: xe.fromBigTuple([
      BigInt("0x024aa2b2f08f0a91260805272dc51051c6e47ad4fa403b02b4510b647ae3d1770bac0326a805bbefd48056c8c121bdb8"),
      BigInt("0x13e02b6052719f607dacd3a088274f65596bd0d09920b61ab5da61bbdc7f5049334cf11213945d57e5ac7d055d042b7e")
    ]),
    // y =
    // 927553665492332455747201965776037880757740193453592970025027978793976877002675564980949289727957565575433344219582,
    // 1985150602287291935568054521177171638300868978215655730859378665066344726373823718423869104263333984641494340347905
    Gy: xe.fromBigTuple([
      BigInt("0x0ce5d527727d6e118cc9cdc6da2e351aadfd9baa8cbdd3a76d429a695160d12c923ac9cc3baca289e193548608b82801"),
      BigInt("0x0606c4a02ea734cc32acd2b02bc28b99cb3e287e85a763af267492ab572e99ab3f370d275cec1da1aaa9075ff05f79be")
    ]),
    a: xe.ZERO,
    b: xe.fromBigTuple([En, En]),
    hEff: BigInt("0xbc69f08f2ee75b3584c6a0ea91b352888e2a8e9145ad7689986ff031508ffe1329c2f178731db956d82bf015d1212b02ec0ec69d7477c1ae954cbc06689f6a359894c0adebbf6b4e8020005aaa95551"),
    htfDefaults: { ...Is },
    wrapPrivateKey: !0,
    allowInfinityPoint: !0,
    mapToCurve: (t) => {
      const { x: e, y: r } = dd(xe.fromBigTuple(t));
      return ld(e, r);
    },
    // Checks is the point resides in prime-order subgroup.
    // point.isTorsionFree() should return true for valid points
    // It returns false for shitty points.
    // https://eprint.iacr.org/2021/1130.pdf
    isTorsionFree: (t, e) => e.multiplyUnsafe(br).negate().equals(Ba(t, e)),
    // Maps the point into the prime-order subgroup G2.
    // clear_cofactor_bls12381_g2 from cfrg-hash-to-curve-11
    // https://eprint.iacr.org/2017/419.pdf
    // prettier-ignore
    clearCofactor: (t, e) => {
      const r = br;
      let n = e.multiplyUnsafe(r).negate(), i = Ba(t, e), s = e.double();
      return s = md(t, s), s = s.subtract(i), i = n.add(i), i = i.multiplyUnsafe(r).negate(), s = s.add(i), s = s.subtract(n), s.subtract(e);
    },
    fromBytes: (t) => {
      const { compressed: e, infinity: r, sort: n, value: i } = ei(t);
      if (!e && !r && n || // 00100000
      !e && r && n || // 01100000
      n && r && e)
        throw new Error("Invalid encoding flag: " + (t[0] & 224));
      const s = we.BYTES, c = (a, p, g) => Ht(a.slice(p, g));
      if (i.length === 96 && e) {
        const a = vt.params.G2b, p = we.ORDER;
        if (r) {
          if (i.reduce((I, U) => I !== 0 ? U + 1 : U, 0) > 0)
            throw new Error("Invalid compressed G2 point");
          return { x: xe.ZERO, y: xe.ZERO };
        }
        const g = c(i, 0, s), b = c(i, s, 2 * s), T = xe.create({ c0: we.create(b), c1: we.create(g) }), O = xe.add(xe.pow(T, Qn), a);
        let B = xe.sqrt(O);
        const m = B.c1 === dt ? B.c0 * it / p : B.c1 * it / p ? Gi : dt;
        return B = n && m > 0 ? B : xe.neg(B), { x: T, y: B };
      } else if (i.length === 192 && !e) {
        if (r) {
          if (i.reduce((T, O) => T !== 0 ? O + 1 : O, 0) > 0)
            throw new Error("Invalid uncompressed G2 point");
          return { x: xe.ZERO, y: xe.ZERO };
        }
        const a = c(i, 0, s), p = c(i, s, 2 * s), g = c(i, 2 * s, 3 * s), b = c(i, 3 * s, 4 * s);
        return { x: xe.fromBigTuple([p, a]), y: xe.fromBigTuple([b, g]) };
      } else
        throw new Error("Invalid point G2, expected 96/192 bytes");
    },
    toBytes: (t, e, r) => {
      const { BYTES: n, ORDER: i } = we, s = e.equals(t.ZERO), { x: c, y: a } = e.toAffine();
      if (r) {
        if (s)
          return Qe(ji, ot(dt, n));
        const p = !!(a.c1 === dt ? a.c0 * it / i : a.c1 * it / i);
        return Qe(vn(ot(c.c1, n), { compressed: !0, sort: p }), ot(c.c0, n));
      } else {
        if (s)
          return Qe(new Uint8Array([64]), new Uint8Array(4 * n - 1));
        const { re: p, im: g } = xe.reim(c), { re: b, im: T } = xe.reim(a);
        return Qe(ot(g, n), ot(p, n), ot(T, n), ot(b, n));
      }
    },
    Signature: {
      // TODO: Optimize, it's very slow because of sqrt.
      fromHex(t) {
        const { infinity: e, sort: r, value: n } = ei(yt("signatureHex", t)), i = we.ORDER, s = n.length / 2;
        if (s !== 48 && s !== 96)
          throw new Error("Invalid compressed signature length, must be 96 or 192");
        const c = Ht(n.slice(0, s)), a = Ht(n.slice(s));
        if (e)
          return vt.G2.ProjectivePoint.ZERO;
        const p = we.create(c & we.MASK), g = we.create(a), b = xe.create({ c0: g, c1: p }), T = xe.add(xe.pow(b, Qn), vt.params.G2b);
        let O = xe.sqrt(T);
        if (!O)
          throw new Error("Failed to find a square root");
        const { re: B, im: m } = xe.reim(O), I = BigInt(r), U = m > dt && m * it / i !== I, V = m === dt && B * it / i !== I;
        (U || V) && (O = xe.neg(O));
        const j = vt.G2.ProjectivePoint.fromAffine({ x: b, y: O });
        return j.assertValidity(), j;
      },
      toRawBytes(t) {
        return Na(t);
      },
      toHex(t) {
        return Hr(Na(t));
      }
    }
  },
  params: {
    ateLoopSize: br,
    // The BLS parameter x for BLS12-381
    r: Sa.ORDER,
    // order; z⁴ − z² + 1; CURVE.n from other curves
    xNegative: !0,
    twistType: "multiplicative"
  },
  htfDefaults: Is,
  hash: To,
  randomBytes: Ac
});
function gd(t, e, r) {
  const n = typeof t == "string" ? t : Lt(t), i = typeof e == "string" ? e : Lt(e), s = typeof r == "string" ? r : Lt(r);
  return vt.verifyShortSignature(i, s, n);
}
const Xu = (t) => nt(new an(t)), Co = (t) => {
  const e = Xu(t);
  return new Date(Number(e) / 1e6);
};
class Kt extends wt {
  constructor(e) {
    super(`Invalid certificate: ${e}`);
  }
}
var Tt;
(function(t) {
  t[t.Empty = 0] = "Empty", t[t.Fork = 1] = "Fork", t[t.Labeled = 2] = "Labeled", t[t.Leaf = 3] = "Leaf", t[t.Pruned = 4] = "Pruned";
})(Tt || (Tt = {}));
function yd(t, e) {
  const r = new Uint8Array(t), n = new Uint8Array(e);
  for (let i = 0; i < r.length; i++)
    if (r[i] > n[i])
      return !0;
  return !1;
}
class Qr {
  constructor(e, r, n, i, s = 5) {
    this._rootKey = r, this._canisterId = n, this._blsVerify = i, this._maxAgeInMinutes = s, this.cert = ar(new Uint8Array(e));
  }
  /**
   * Create a new instance of a certificate, automatically verifying it. Throws a
   * CertificateVerificationError if the certificate cannot be verified.
   * @constructs  Certificate
   * @param {CreateCertificateOptions} options {@link CreateCertificateOptions}
   * @param {ArrayBuffer} options.certificate The bytes of the certificate
   * @param {ArrayBuffer} options.rootKey The root key to verify against
   * @param {Principal} options.canisterId The effective or signing canister ID
   * @param {number} options.maxAgeInMinutes The maximum age of the certificate in minutes. Default is 5 minutes.
   * @throws {CertificateVerificationError}
   */
  static async create(e) {
    const r = Qr.createUnverified(e);
    return await r.verify(), r;
  }
  static createUnverified(e) {
    let r = e.blsVerify;
    return r || (r = gd), new Qr(e.certificate, e.rootKey, e.canisterId, r, e.maxAgeInMinutes);
  }
  lookup(e) {
    return nn(e, this.cert.tree);
  }
  lookup_label(e) {
    return this.lookup([e]);
  }
  async verify() {
    const e = await bi(this.cert.tree), r = await this._checkDelegationAndGetKey(this.cert.delegation), n = this.cert.signature, i = bd(r), s = er(gn("ic-state-root"), e);
    let c = !1;
    const a = Ur(this.lookup(["time"]));
    if (!a)
      throw new Kt("Certificate does not contain a time");
    const p = 5 * 60 * 1e3, g = this._maxAgeInMinutes * 60 * 1e3, b = Date.now(), T = b - g, O = b + p, B = Co(a);
    if (B.getTime() < T)
      throw new Kt(`Certificate is signed more than ${this._maxAgeInMinutes} minutes in the past. Certificate time: ` + B.toISOString() + " Current time: " + new Date(b).toISOString());
    if (B.getTime() > O)
      throw new Kt("Certificate is signed more than 5 minutes in the future. Certificate time: " + B.toISOString() + " Current time: " + new Date(b).toISOString());
    try {
      c = await this._blsVerify(new Uint8Array(i), new Uint8Array(n), new Uint8Array(s));
    } catch {
      c = !1;
    }
    if (!c)
      throw new Kt("Signature verification failed");
  }
  async _checkDelegationAndGetKey(e) {
    if (!e)
      return this._rootKey;
    const r = await Qr.createUnverified({
      certificate: e.certificate,
      rootKey: this._rootKey,
      canisterId: this._canisterId,
      blsVerify: this._blsVerify,
      // Do not check max age for delegation certificates
      maxAgeInMinutes: 1 / 0
    });
    if (r.cert.delegation)
      throw new Kt("Delegation certificates cannot be nested");
    if (await r.verify(), !Ju({
      canisterId: this._canisterId,
      subnetId: Me.fromUint8Array(new Uint8Array(e.subnet_id)),
      tree: r.cert.tree
    }))
      throw new Kt(`Canister ${this._canisterId} not in range of delegations for subnet 0x${Lt(e.subnet_id)}`);
    const i = Ur(r.lookup(["subnet", e.subnet_id, "public_key"]));
    if (!i)
      throw new Error(`Could not find subnet key for subnet 0x${Lt(e.subnet_id)}`);
    return i;
  }
}
const fn = Hi("308182301d060d2b0601040182dc7c0503010201060c2b0601040182dc7c05030201036100"), wd = 96;
function bd(t) {
  const e = fn.byteLength + wd;
  if (t.byteLength !== e)
    throw new TypeError(`BLS DER-encoded public key must be ${e} bytes long`);
  const r = t.slice(0, fn.byteLength);
  if (!Oo(r, fn))
    throw new TypeError(`BLS DER-encoded public key is invalid. Expect the following prefix: ${fn}, but get ${r}`);
  return t.slice(fn.byteLength);
}
function Ur(t) {
  if (t.status === et.Found) {
    if (t.value instanceof ArrayBuffer)
      return t.value;
    if (t.value instanceof Uint8Array)
      return t.value.buffer;
  }
}
async function bi(t) {
  switch (t[0]) {
    case Tt.Empty:
      return qt(gn("ic-hashtree-empty"));
    case Tt.Pruned:
      return t[1];
    case Tt.Leaf:
      return qt(er(gn("ic-hashtree-leaf"), t[1]));
    case Tt.Labeled:
      return qt(er(gn("ic-hashtree-labeled"), t[1], await bi(t[2])));
    case Tt.Fork:
      return qt(er(gn("ic-hashtree-fork"), await bi(t[1]), await bi(t[2])));
    default:
      throw new Error("unreachable");
  }
}
function gn(t) {
  const e = new Uint8Array([t.length]), r = new TextEncoder().encode(t);
  return er(e, r);
}
var et;
(function(t) {
  t.Unknown = "unknown", t.Absent = "absent", t.Found = "found";
})(et || (et = {}));
var sr;
(function(t) {
  t.Less = "less", t.Greater = "greater";
})(sr || (sr = {}));
function nn(t, e) {
  if (t.length === 0)
    switch (e[0]) {
      case Tt.Leaf: {
        if (!e[1])
          throw new Error("Invalid tree structure for leaf");
        return e[1] instanceof ArrayBuffer ? {
          status: et.Found,
          value: e[1]
        } : e[1] instanceof Uint8Array ? {
          status: et.Found,
          value: e[1].buffer
        } : {
          status: et.Found,
          value: e[1]
        };
      }
      default:
        return {
          status: et.Found,
          value: e
        };
    }
  const r = typeof t[0] == "string" ? new TextEncoder().encode(t[0]) : t[0], n = _i(r, e);
  switch (n.status) {
    case et.Found:
      return nn(t.slice(1), n.value);
    case sr.Greater:
    case sr.Less:
      return {
        status: et.Absent
      };
    default:
      return n;
  }
}
function oo(t) {
  switch (t[0]) {
    case Tt.Empty:
      return [];
    case Tt.Fork:
      return oo(t[1]).concat(oo(t[2]));
    default:
      return [t];
  }
}
function _i(t, e) {
  switch (e[0]) {
    case Tt.Labeled:
      return yd(t, e[1]) ? {
        status: sr.Greater
      } : Oo(t, e[1]) ? {
        status: et.Found,
        value: e[2]
      } : {
        status: sr.Less
      };
    case Tt.Fork:
      const r = _i(t, e[1]);
      switch (r.status) {
        case sr.Greater: {
          const n = _i(t, e[2]);
          return n.status === sr.Less ? {
            status: et.Absent
          } : n;
        }
        case et.Unknown: {
          let n = _i(t, e[2]);
          return n.status === sr.Less ? {
            status: et.Unknown
          } : n;
        }
        default:
          return r;
      }
    case Tt.Pruned:
      return {
        status: et.Unknown
      };
    default:
      return {
        status: et.Absent
      };
  }
}
function Ju(t) {
  const { canisterId: e, subnetId: r, tree: n } = t, i = nn(["subnet", r.toUint8Array(), "canister_ranges"], n);
  if (i.status !== et.Found || !(i.value instanceof ArrayBuffer))
    throw new Error(`Could not find canister ranges for subnet ${r}`);
  return ar(i.value).map((p) => [
    Me.fromUint8Array(p[0]),
    Me.fromUint8Array(p[1])
  ]).some((p) => p[0].ltEq(e) && p[1].gtEq(e));
}
class _d {
  constructor(e, r, n) {
    this.key = e, this.path = r, this.decodeStrategy = n;
  }
}
const Qu = async (t) => {
  const { agent: e, paths: r } = t, n = Me.from(t.canisterId), i = [...new Set(r)], s = i.map((p) => ao(p, n)), c = /* @__PURE__ */ new Map(), a = i.map((p, g) => (async () => {
    var b;
    try {
      const T = await e.readState(n, {
        paths: [s[g]]
      }), O = await Qr.create({
        certificate: T.certificate,
        rootKey: e.rootKey,
        canisterId: n
      }), B = (U, V) => {
        if (V === "subnet") {
          const j = ef(T.certificate, n, e.rootKey);
          return {
            path: V,
            data: j
          };
        } else
          return {
            path: V,
            data: Ur(U.lookup(ao(V, n)))
          };
      }, { path: m, data: I } = B(O, i[g]);
      if (!I)
        console.warn(`Expected to find result for path ${m}, but instead found nothing.`), typeof m == "string" ? c.set(m, null) : c.set(m.key, null);
      else
        switch (m) {
          case "time": {
            c.set(m, Co(I));
            break;
          }
          case "controllers": {
            c.set(m, Ed(I));
            break;
          }
          case "module_hash": {
            c.set(m, Ra(I));
            break;
          }
          case "subnet": {
            c.set(m, I);
            break;
          }
          case "candid": {
            c.set(m, new TextDecoder().decode(I));
            break;
          }
          default:
            if (typeof m != "string" && "key" in m && "path" in m)
              switch (m.decodeStrategy) {
                case "raw":
                  c.set(m.key, I);
                  break;
                case "leb128": {
                  c.set(m.key, Xu(I));
                  break;
                }
                case "cbor": {
                  c.set(m.key, tf(I));
                  break;
                }
                case "hex": {
                  c.set(m.key, Ra(I));
                  break;
                }
                case "utf-8":
                  c.set(m.key, xd(I));
              }
        }
    } catch (T) {
      if (!((b = T == null ? void 0 : T.message) === null || b === void 0) && b.includes("Invalid certificate"))
        throw new wt(T.message);
      typeof p != "string" && "key" in p && "path" in p ? c.set(p.key, null) : c.set(p, null), console.group(), console.warn(`Expected to find result for path ${p}, but instead found nothing.`), console.warn(T), console.groupEnd();
    }
  })());
  return await Promise.all(a), c;
}, ef = (t, e, r) => {
  if (!e._isPrincipal)
    throw new Error("Invalid canisterId");
  const n = ar(new Uint8Array(t)), i = n.tree;
  let s = n.delegation, c;
  if (s && s.subnet_id ? c = Me.fromUint8Array(new Uint8Array(s.subnet_id)) : !s && typeof r < "u" ? (c = Me.selfAuthenticating(new Uint8Array(r)), s = {
    subnet_id: c.toUint8Array(),
    certificate: new ArrayBuffer(0)
  }) : (c = Me.selfAuthenticating(Me.fromText("tdb26-jop6k-aogll-7ltgs-eruif-6kk7m-qpktf-gdiqx-mxtrf-vb5e6-eqe").toUint8Array()), s = {
    subnet_id: c.toUint8Array(),
    certificate: new ArrayBuffer(0)
  }), !Ju({ canisterId: e, subnetId: c, tree: i }))
    throw new Error("Canister not in range");
  const p = nn(["subnet", s.subnet_id, "node"], i);
  if (p.status !== et.Found)
    throw new Error("Node not found");
  if (p.value instanceof ArrayBuffer)
    throw new Error("Invalid node tree");
  const g = oo(p.value), b = /* @__PURE__ */ new Map();
  return g.forEach((T) => {
    const O = Me.from(new Uint8Array(T[1])).toText(), B = nn(["public_key"], T[2]);
    if (B.status !== et.Found)
      throw new Error("Public key not found");
    const m = B.value;
    if (m.byteLength !== 44)
      throw new Error("Invalid public key length");
    b.set(O, m);
  }), {
    subnetId: Me.fromUint8Array(new Uint8Array(s.subnet_id)).toText(),
    nodeKeys: b
  };
}, ao = (t, e) => {
  const r = new TextEncoder(), n = (s) => new DataView(r.encode(s).buffer).buffer, i = new DataView(e.toUint8Array().buffer).buffer;
  switch (t) {
    case "time":
      return [n("time")];
    case "controllers":
      return [n("canister"), i, n("controllers")];
    case "module_hash":
      return [n("canister"), i, n("module_hash")];
    case "subnet":
      return [n("subnet")];
    case "candid":
      return [n("canister"), i, n("metadata"), n("candid:service")];
    default:
      if ("key" in t && "path" in t)
        if (typeof t.path == "string" || t.path instanceof ArrayBuffer) {
          const s = t.path, c = typeof s == "string" ? n(s) : s;
          return [n("canister"), i, n("metadata"), c];
        } else
          return t.path;
  }
  throw new Error(`An unexpeected error was encountered while encoding your path for canister status. Please ensure that your path, ${t} was formatted correctly.`);
}, Ra = (t) => Lt(t), tf = (t) => ar(t), xd = (t) => new TextDecoder().decode(t), Ed = (t) => tf(t).map((r) => Me.fromUint8Array(new Uint8Array(r))), Td = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CustomPath: _d,
  encodePath: ao,
  fetchNodeKeys: ef,
  request: Qu
}, Symbol.toStringTag, { value: "Module" })), ti = /* @__PURE__ */ BigInt(2 ** 32 - 1), co = /* @__PURE__ */ BigInt(32);
function rf(t, e = !1) {
  return e ? { h: Number(t & ti), l: Number(t >> co & ti) } : { h: Number(t >> co & ti) | 0, l: Number(t & ti) | 0 };
}
function Ad(t, e = !1) {
  let r = new Uint32Array(t.length), n = new Uint32Array(t.length);
  for (let i = 0; i < t.length; i++) {
    const { h: s, l: c } = rf(t[i], e);
    [r[i], n[i]] = [s, c];
  }
  return [r, n];
}
const Sd = (t, e) => BigInt(t >>> 0) << co | BigInt(e >>> 0), Bd = (t, e, r) => t >>> r, vd = (t, e, r) => t << 32 - r | e >>> r, Nd = (t, e, r) => t >>> r | e << 32 - r, Rd = (t, e, r) => t << 32 - r | e >>> r, Od = (t, e, r) => t << 64 - r | e >>> r - 32, Id = (t, e, r) => t >>> r - 32 | e << 64 - r, Ud = (t, e) => e, Fd = (t, e) => t, Pd = (t, e, r) => t << r | e >>> 32 - r, Cd = (t, e, r) => e << r | t >>> 32 - r, Md = (t, e, r) => e << r - 32 | t >>> 64 - r, kd = (t, e, r) => t << r - 32 | e >>> 64 - r;
function $d(t, e, r, n) {
  const i = (e >>> 0) + (n >>> 0);
  return { h: t + r + (i / 2 ** 32 | 0) | 0, l: i | 0 };
}
const Hd = (t, e, r) => (t >>> 0) + (e >>> 0) + (r >>> 0), qd = (t, e, r, n) => e + r + n + (t / 2 ** 32 | 0) | 0, Ld = (t, e, r, n) => (t >>> 0) + (e >>> 0) + (r >>> 0) + (n >>> 0), Vd = (t, e, r, n, i) => e + r + n + i + (t / 2 ** 32 | 0) | 0, Gd = (t, e, r, n, i) => (t >>> 0) + (e >>> 0) + (r >>> 0) + (n >>> 0) + (i >>> 0), jd = (t, e, r, n, i, s) => e + r + n + i + s + (t / 2 ** 32 | 0) | 0, Ue = {
  fromBig: rf,
  split: Ad,
  toBig: Sd,
  shrSH: Bd,
  shrSL: vd,
  rotrSH: Nd,
  rotrSL: Rd,
  rotrBH: Od,
  rotrBL: Id,
  rotr32H: Ud,
  rotr32L: Fd,
  rotlSH: Pd,
  rotlSL: Cd,
  rotlBH: Md,
  rotlBL: kd,
  add: $d,
  add3L: Hd,
  add3H: qd,
  add4L: Ld,
  add4H: Vd,
  add5H: jd,
  add5L: Gd
}, [zd, Dd] = Ue.split([
  "0x428a2f98d728ae22",
  "0x7137449123ef65cd",
  "0xb5c0fbcfec4d3b2f",
  "0xe9b5dba58189dbbc",
  "0x3956c25bf348b538",
  "0x59f111f1b605d019",
  "0x923f82a4af194f9b",
  "0xab1c5ed5da6d8118",
  "0xd807aa98a3030242",
  "0x12835b0145706fbe",
  "0x243185be4ee4b28c",
  "0x550c7dc3d5ffb4e2",
  "0x72be5d74f27b896f",
  "0x80deb1fe3b1696b1",
  "0x9bdc06a725c71235",
  "0xc19bf174cf692694",
  "0xe49b69c19ef14ad2",
  "0xefbe4786384f25e3",
  "0x0fc19dc68b8cd5b5",
  "0x240ca1cc77ac9c65",
  "0x2de92c6f592b0275",
  "0x4a7484aa6ea6e483",
  "0x5cb0a9dcbd41fbd4",
  "0x76f988da831153b5",
  "0x983e5152ee66dfab",
  "0xa831c66d2db43210",
  "0xb00327c898fb213f",
  "0xbf597fc7beef0ee4",
  "0xc6e00bf33da88fc2",
  "0xd5a79147930aa725",
  "0x06ca6351e003826f",
  "0x142929670a0e6e70",
  "0x27b70a8546d22ffc",
  "0x2e1b21385c26c926",
  "0x4d2c6dfc5ac42aed",
  "0x53380d139d95b3df",
  "0x650a73548baf63de",
  "0x766a0abb3c77b2a8",
  "0x81c2c92e47edaee6",
  "0x92722c851482353b",
  "0xa2bfe8a14cf10364",
  "0xa81a664bbc423001",
  "0xc24b8b70d0f89791",
  "0xc76c51a30654be30",
  "0xd192e819d6ef5218",
  "0xd69906245565a910",
  "0xf40e35855771202a",
  "0x106aa07032bbd1b8",
  "0x19a4c116b8d2d0c8",
  "0x1e376c085141ab53",
  "0x2748774cdf8eeb99",
  "0x34b0bcb5e19b48a8",
  "0x391c0cb3c5c95a63",
  "0x4ed8aa4ae3418acb",
  "0x5b9cca4f7763e373",
  "0x682e6ff3d6b2b8a3",
  "0x748f82ee5defb2fc",
  "0x78a5636f43172f60",
  "0x84c87814a1f0ab72",
  "0x8cc702081a6439ec",
  "0x90befffa23631e28",
  "0xa4506cebde82bde9",
  "0xbef9a3f7b2c67915",
  "0xc67178f2e372532b",
  "0xca273eceea26619c",
  "0xd186b8c721c0c207",
  "0xeada7dd6cde0eb1e",
  "0xf57d4f7fee6ed178",
  "0x06f067aa72176fba",
  "0x0a637dc5a2c898a6",
  "0x113f9804bef90dae",
  "0x1b710b35131c471b",
  "0x28db77f523047d84",
  "0x32caab7b40c72493",
  "0x3c9ebe0a15c9bebc",
  "0x431d67c49c100d4c",
  "0x4cc5d4becb3e42b6",
  "0x597f299cfc657e2a",
  "0x5fcb6fab3ad6faec",
  "0x6c44198c4a475817"
].map((t) => BigInt(t))), mr = /* @__PURE__ */ new Uint32Array(80), gr = /* @__PURE__ */ new Uint32Array(80);
class Wd extends Sc {
  constructor() {
    super(128, 64, 16, !1), this.Ah = 1779033703, this.Al = -205731576, this.Bh = -1150833019, this.Bl = -2067093701, this.Ch = 1013904242, this.Cl = -23791573, this.Dh = -1521486534, this.Dl = 1595750129, this.Eh = 1359893119, this.El = -1377402159, this.Fh = -1694144372, this.Fl = 725511199, this.Gh = 528734635, this.Gl = -79577749, this.Hh = 1541459225, this.Hl = 327033209;
  }
  // prettier-ignore
  get() {
    const { Ah: e, Al: r, Bh: n, Bl: i, Ch: s, Cl: c, Dh: a, Dl: p, Eh: g, El: b, Fh: T, Fl: O, Gh: B, Gl: m, Hh: I, Hl: U } = this;
    return [e, r, n, i, s, c, a, p, g, b, T, O, B, m, I, U];
  }
  // prettier-ignore
  set(e, r, n, i, s, c, a, p, g, b, T, O, B, m, I, U) {
    this.Ah = e | 0, this.Al = r | 0, this.Bh = n | 0, this.Bl = i | 0, this.Ch = s | 0, this.Cl = c | 0, this.Dh = a | 0, this.Dl = p | 0, this.Eh = g | 0, this.El = b | 0, this.Fh = T | 0, this.Fl = O | 0, this.Gh = B | 0, this.Gl = m | 0, this.Hh = I | 0, this.Hl = U | 0;
  }
  process(e, r) {
    for (let q = 0; q < 16; q++, r += 4)
      mr[q] = e.getUint32(r), gr[q] = e.getUint32(r += 4);
    for (let q = 16; q < 80; q++) {
      const ee = mr[q - 15] | 0, k = gr[q - 15] | 0, J = Ue.rotrSH(ee, k, 1) ^ Ue.rotrSH(ee, k, 8) ^ Ue.shrSH(ee, k, 7), K = Ue.rotrSL(ee, k, 1) ^ Ue.rotrSL(ee, k, 8) ^ Ue.shrSL(ee, k, 7), re = mr[q - 2] | 0, ue = gr[q - 2] | 0, ie = Ue.rotrSH(re, ue, 19) ^ Ue.rotrBH(re, ue, 61) ^ Ue.shrSH(re, ue, 6), pe = Ue.rotrSL(re, ue, 19) ^ Ue.rotrBL(re, ue, 61) ^ Ue.shrSL(re, ue, 6), de = Ue.add4L(K, pe, gr[q - 7], gr[q - 16]), N = Ue.add4H(de, J, ie, mr[q - 7], mr[q - 16]);
      mr[q] = N | 0, gr[q] = de | 0;
    }
    let { Ah: n, Al: i, Bh: s, Bl: c, Ch: a, Cl: p, Dh: g, Dl: b, Eh: T, El: O, Fh: B, Fl: m, Gh: I, Gl: U, Hh: V, Hl: j } = this;
    for (let q = 0; q < 80; q++) {
      const ee = Ue.rotrSH(T, O, 14) ^ Ue.rotrSH(T, O, 18) ^ Ue.rotrBH(T, O, 41), k = Ue.rotrSL(T, O, 14) ^ Ue.rotrSL(T, O, 18) ^ Ue.rotrBL(T, O, 41), J = T & B ^ ~T & I, K = O & m ^ ~O & U, re = Ue.add5L(j, k, K, Dd[q], gr[q]), ue = Ue.add5H(re, V, ee, J, zd[q], mr[q]), ie = re | 0, pe = Ue.rotrSH(n, i, 28) ^ Ue.rotrBH(n, i, 34) ^ Ue.rotrBH(n, i, 39), de = Ue.rotrSL(n, i, 28) ^ Ue.rotrBL(n, i, 34) ^ Ue.rotrBL(n, i, 39), N = n & s ^ n & a ^ s & a, P = i & c ^ i & p ^ c & p;
      V = I | 0, j = U | 0, I = B | 0, U = m | 0, B = T | 0, m = O | 0, { h: T, l: O } = Ue.add(g | 0, b | 0, ue | 0, ie | 0), g = a | 0, b = p | 0, a = s | 0, p = c | 0, s = n | 0, c = i | 0;
      const Y = Ue.add3L(ie, de, P);
      n = Ue.add3H(Y, ue, pe, N), i = Y | 0;
    }
    ({ h: n, l: i } = Ue.add(this.Ah | 0, this.Al | 0, n | 0, i | 0)), { h: s, l: c } = Ue.add(this.Bh | 0, this.Bl | 0, s | 0, c | 0), { h: a, l: p } = Ue.add(this.Ch | 0, this.Cl | 0, a | 0, p | 0), { h: g, l: b } = Ue.add(this.Dh | 0, this.Dl | 0, g | 0, b | 0), { h: T, l: O } = Ue.add(this.Eh | 0, this.El | 0, T | 0, O | 0), { h: B, l: m } = Ue.add(this.Fh | 0, this.Fl | 0, B | 0, m | 0), { h: I, l: U } = Ue.add(this.Gh | 0, this.Gl | 0, I | 0, U | 0), { h: V, l: j } = Ue.add(this.Hh | 0, this.Hl | 0, V | 0, j | 0), this.set(n, i, s, c, a, p, g, b, T, O, B, m, I, U, V, j);
  }
  roundClean() {
    mr.fill(0), gr.fill(0);
  }
  destroy() {
    this.buffer.fill(0), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
}
const Yd = /* @__PURE__ */ Eo(() => new Wd());
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Ct = BigInt(0), mt = BigInt(1), ri = BigInt(2), Zd = BigInt(8), Kd = { zip215: !0 };
function Xd(t) {
  const e = Zu(t);
  return Cn(t, {
    hash: "function",
    a: "bigint",
    d: "bigint",
    randomBytes: "function"
  }, {
    adjustScalarBytes: "function",
    domain: "function",
    uvRatio: "function",
    mapToCurve: "function"
  }), Object.freeze({ ...e });
}
function Jd(t) {
  const e = Xd(t), { Fp: r, n, prehash: i, hash: s, randomBytes: c, nByteLength: a, h: p } = e, g = ri << BigInt(a * 8) - mt, b = r.create, T = Mn(e.n, e.nBitLength), O = e.uvRatio || ((z, G) => {
    try {
      return { isValid: !0, value: r.sqrt(z * r.inv(G)) };
    } catch {
      return { isValid: !1, value: Ct };
    }
  }), B = e.adjustScalarBytes || ((z) => z), m = e.domain || ((z, G, Q) => {
    if (bn("phflag", Q), G.length || Q)
      throw new Error("Contexts/pre-hash are not supported");
    return z;
  });
  function I(z, G) {
    _r("coordinate " + z, G, Ct, g);
  }
  function U(z) {
    if (!(z instanceof q))
      throw new Error("ExtendedPoint expected");
  }
  const V = Sn((z, G) => {
    const { ex: Q, ey: le, ez: ye } = z, se = z.is0();
    G == null && (G = se ? Zd : r.inv(ye));
    const Z = b(Q * G), ce = b(le * G), w = b(ye * G);
    if (se)
      return { x: Ct, y: mt };
    if (w !== mt)
      throw new Error("invZ was invalid");
    return { x: Z, y: ce };
  }), j = Sn((z) => {
    const { a: G, d: Q } = e;
    if (z.is0())
      throw new Error("bad point: ZERO");
    const { ex: le, ey: ye, ez: se, et: Z } = z, ce = b(le * le), w = b(ye * ye), ne = b(se * se), he = b(ne * ne), Ee = b(ce * G), ae = b(ne * b(Ee + w)), fe = b(he + b(Q * b(ce * w)));
    if (ae !== fe)
      throw new Error("bad point: equation left != right (1)");
    const _ = b(le * ye), E = b(se * Z);
    if (_ !== E)
      throw new Error("bad point: equation left != right (2)");
    return !0;
  });
  class q {
    constructor(G, Q, le, ye) {
      this.ex = G, this.ey = Q, this.ez = le, this.et = ye, I("x", G), I("y", Q), I("z", le), I("t", ye), Object.freeze(this);
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    static fromAffine(G) {
      if (G instanceof q)
        throw new Error("extended point not allowed");
      const { x: Q, y: le } = G || {};
      return I("x", Q), I("y", le), new q(Q, le, mt, b(Q * le));
    }
    static normalizeZ(G) {
      const Q = r.invertBatch(G.map((le) => le.ez));
      return G.map((le, ye) => le.toAffine(Q[ye])).map(q.fromAffine);
    }
    // Multiscalar Multiplication
    static msm(G, Q) {
      return Yu(q, T, G, Q);
    }
    // "Private method", don't use it directly
    _setWindowSize(G) {
      J.setWindowSize(this, G);
    }
    // Not required for fromHex(), which always creates valid points.
    // Could be useful for fromAffine().
    assertValidity() {
      j(this);
    }
    // Compare one point to another.
    equals(G) {
      U(G);
      const { ex: Q, ey: le, ez: ye } = this, { ex: se, ey: Z, ez: ce } = G, w = b(Q * ce), ne = b(se * ye), he = b(le * ce), Ee = b(Z * ye);
      return w === ne && he === Ee;
    }
    is0() {
      return this.equals(q.ZERO);
    }
    negate() {
      return new q(b(-this.ex), this.ey, this.ez, b(-this.et));
    }
    // Fast algo for doubling Extended Point.
    // https://hyperelliptic.org/EFD/g1p/auto-twisted-extended.html#doubling-dbl-2008-hwcd
    // Cost: 4M + 4S + 1*a + 6add + 1*2.
    double() {
      const { a: G } = e, { ex: Q, ey: le, ez: ye } = this, se = b(Q * Q), Z = b(le * le), ce = b(ri * b(ye * ye)), w = b(G * se), ne = Q + le, he = b(b(ne * ne) - se - Z), Ee = w + Z, ae = Ee - ce, fe = w - Z, _ = b(he * ae), E = b(Ee * fe), S = b(he * fe), M = b(ae * Ee);
      return new q(_, E, M, S);
    }
    // Fast algo for adding 2 Extended Points.
    // https://hyperelliptic.org/EFD/g1p/auto-twisted-extended.html#addition-add-2008-hwcd
    // Cost: 9M + 1*a + 1*d + 7add.
    add(G) {
      U(G);
      const { a: Q, d: le } = e, { ex: ye, ey: se, ez: Z, et: ce } = this, { ex: w, ey: ne, ez: he, et: Ee } = G;
      if (Q === BigInt(-1)) {
        const x = b((se - ye) * (ne + w)), v = b((se + ye) * (ne - w)), L = b(v - x);
        if (L === Ct)
          return this.double();
        const oe = b(Z * ri * Ee), me = b(ce * ri * he), ge = me + oe, Be = v + x, d = me - oe, f = b(ge * L), l = b(Be * d), A = b(ge * d), C = b(L * Be);
        return new q(f, l, C, A);
      }
      const ae = b(ye * w), fe = b(se * ne), _ = b(ce * le * Ee), E = b(Z * he), S = b((ye + se) * (w + ne) - ae - fe), M = E - _, F = E + _, H = b(fe - Q * ae), h = b(S * M), o = b(F * H), u = b(S * H), y = b(M * F);
      return new q(h, o, y, u);
    }
    subtract(G) {
      return this.add(G.negate());
    }
    wNAF(G) {
      return J.wNAFCached(this, G, q.normalizeZ);
    }
    // Constant-time multiplication.
    multiply(G) {
      const Q = G;
      _r("scalar", Q, mt, n);
      const { p: le, f: ye } = this.wNAF(Q);
      return q.normalizeZ([le, ye])[0];
    }
    // Non-constant-time multiplication. Uses double-and-add algorithm.
    // It's faster, but should only be used when you don't care about
    // an exposed private key e.g. sig verification.
    // Does NOT allow scalars higher than CURVE.n.
    multiplyUnsafe(G) {
      const Q = G;
      return _r("scalar", Q, Ct, n), Q === Ct ? k : this.equals(k) || Q === mt ? this : this.equals(ee) ? this.wNAF(Q).p : J.unsafeLadder(this, Q);
    }
    // Checks if point is of small order.
    // If you add something to small order point, you will have "dirty"
    // point with torsion component.
    // Multiplies point by cofactor and checks if the result is 0.
    isSmallOrder() {
      return this.multiplyUnsafe(p).is0();
    }
    // Multiplies point by curve order and checks if the result is 0.
    // Returns `false` is the point is dirty.
    isTorsionFree() {
      return J.unsafeLadder(this, n).is0();
    }
    // Converts Extended point to default (x, y) coordinates.
    // Can accept precomputed Z^-1 - for example, from invertBatch.
    toAffine(G) {
      return V(this, G);
    }
    clearCofactor() {
      const { h: G } = e;
      return G === mt ? this : this.multiplyUnsafe(G);
    }
    // Converts hash string or Uint8Array to Point.
    // Uses algo from RFC8032 5.1.3.
    static fromHex(G, Q = !1) {
      const { d: le, a: ye } = e, se = r.BYTES;
      G = yt("pointHex", G, se), bn("zip215", Q);
      const Z = G.slice(), ce = G[se - 1];
      Z[se - 1] = ce & -129;
      const w = _n(Z), ne = Q ? g : r.ORDER;
      _r("pointHex.y", w, Ct, ne);
      const he = b(w * w), Ee = b(he - mt), ae = b(le * he - ye);
      let { isValid: fe, value: _ } = O(Ee, ae);
      if (!fe)
        throw new Error("Point.fromHex: invalid y coordinate");
      const E = (_ & mt) === mt, S = (ce & 128) !== 0;
      if (!Q && _ === Ct && S)
        throw new Error("Point.fromHex: x=0 and x_0=1");
      return S !== E && (_ = b(-_)), q.fromAffine({ x: _, y: w });
    }
    static fromPrivateKey(G) {
      return ue(G).point;
    }
    toRawBytes() {
      const { x: G, y: Q } = this.toAffine(), le = Li(Q, r.BYTES);
      return le[le.length - 1] |= G & mt ? 128 : 0, le;
    }
    toHex() {
      return Hr(this.toRawBytes());
    }
  }
  q.BASE = new q(e.Gx, e.Gy, mt, b(e.Gx * e.Gy)), q.ZERO = new q(Ct, mt, mt, Ct);
  const { BASE: ee, ZERO: k } = q, J = Wu(q, a * 8);
  function K(z) {
    return ze(z, n);
  }
  function re(z) {
    return K(_n(z));
  }
  function ue(z) {
    const G = a;
    z = yt("private key", z, G);
    const Q = yt("hashed private key", s(z), 2 * G), le = B(Q.slice(0, G)), ye = Q.slice(G, 2 * G), se = re(le), Z = ee.multiply(se), ce = Z.toRawBytes();
    return { head: le, prefix: ye, scalar: se, point: Z, pointBytes: ce };
  }
  function ie(z) {
    return ue(z).pointBytes;
  }
  function pe(z = new Uint8Array(), ...G) {
    const Q = Qe(...G);
    return re(s(m(Q, yt("context", z), !!i)));
  }
  function de(z, G, Q = {}) {
    z = yt("message", z), i && (z = i(z));
    const { prefix: le, scalar: ye, pointBytes: se } = ue(G), Z = pe(Q.context, le, z), ce = ee.multiply(Z).toRawBytes(), w = pe(Q.context, ce, se, z), ne = K(Z + w * ye);
    _r("signature.s", ne, Ct, n);
    const he = Qe(ce, Li(ne, r.BYTES));
    return yt("result", he, a * 2);
  }
  const N = Kd;
  function P(z, G, Q, le = N) {
    const { context: ye, zip215: se } = le, Z = r.BYTES;
    z = yt("signature", z, 2 * Z), G = yt("message", G), se !== void 0 && bn("zip215", se), i && (G = i(G));
    const ce = _n(z.slice(Z, 2 * Z));
    let w, ne, he;
    try {
      w = q.fromHex(Q, se), ne = q.fromHex(z.slice(0, Z), se), he = ee.multiplyUnsafe(ce);
    } catch {
      return !1;
    }
    if (!se && w.isSmallOrder())
      return !1;
    const Ee = pe(ye, ne.toRawBytes(), w.toRawBytes(), G);
    return ne.add(w.multiplyUnsafe(Ee)).subtract(he).clearCofactor().equals(q.ZERO);
  }
  return ee._setWindowSize(8), {
    CURVE: e,
    getPublicKey: ie,
    sign: de,
    verify: P,
    ExtendedPoint: q,
    utils: {
      getExtendedPublicKey: ue,
      // ed25519 private keys are uniform 32b. No need to check for modulo bias, like in secp256k1.
      randomPrivateKey: () => c(r.BYTES),
      /**
       * We're doing scalar multiplication (used in getPublicKey etc) with precomputed BASE_POINT
       * values. This slows down first getPublicKey() by milliseconds (see Speed section),
       * but allows to speed-up subsequent getPublicKey() calls up to 20x.
       * @param windowSize 2, 4, 8, 16
       */
      precompute(z = 8, G = q.BASE) {
        return G._setWindowSize(z), G.multiply(BigInt(3)), G;
      }
    }
  };
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Mo = BigInt("57896044618658097711785492504343953926634992332820282019728792003956564819949"), Oa = /* @__PURE__ */ BigInt("19681161376707505956807079304988542015446066515923890162744021073123829784752");
BigInt(0);
const Qd = BigInt(1), Ia = BigInt(2);
BigInt(3);
const ep = BigInt(5), tp = BigInt(8);
function rp(t) {
  const e = BigInt(10), r = BigInt(20), n = BigInt(40), i = BigInt(80), s = Mo, a = t * t % s * t % s, p = Dt(a, Ia, s) * a % s, g = Dt(p, Qd, s) * t % s, b = Dt(g, ep, s) * g % s, T = Dt(b, e, s) * b % s, O = Dt(T, r, s) * T % s, B = Dt(O, n, s) * O % s, m = Dt(B, i, s) * B % s, I = Dt(m, i, s) * B % s, U = Dt(I, e, s) * b % s;
  return { pow_p_5_8: Dt(U, Ia, s) * t % s, b2: a };
}
function np(t) {
  return t[0] &= 248, t[31] &= 127, t[31] |= 64, t;
}
function ip(t, e) {
  const r = Mo, n = ze(e * e * e, r), i = ze(n * n * e, r), s = rp(t * i).pow_p_5_8;
  let c = ze(t * n * s, r);
  const a = ze(e * c * c, r), p = c, g = ze(c * Oa, r), b = a === t, T = a === ze(-t, r), O = a === ze(-t * Oa, r);
  return b && (c = p), (T || O) && (c = g), Wh(c, r) && (c = ze(-c, r)), { isValid: b || T, value: c };
}
const sp = Mn(Mo, void 0, !0), op = {
  // Param: a
  a: BigInt(-1),
  // Fp.create(-1) is proper; our way still works and is faster
  // d is equal to -121665/121666 over finite field.
  // Negative number is P - number, and division is invert(number, P)
  d: BigInt("37095705934669439343138083508754565189542113879843219016388785533085940283555"),
  // Finite field 𝔽p over which we'll do calculations; 2n**255n - 19n
  Fp: sp,
  // Subgroup order: how many points curve has
  // 2n**252n + 27742317777372353535851937790883648493n;
  n: BigInt("7237005577332262213973186563042994240857116359379907606001950938285454250989"),
  // Cofactor
  h: tp,
  // Base point (x, y) aka generator point
  Gx: BigInt("15112221349535400772501151409588531511454012693041857206046113283949847762202"),
  Gy: BigInt("46316835694926478169428394003475163141307993866256225615783033603165251855960"),
  hash: Yd,
  randomBytes: Ac,
  adjustScalarBytes: np,
  // dom2
  // Ratio of u to v. Allows us to combine inversion and square root. Uses algo from RFC8032 5.1.3.
  // Constant-time, u/√v
  uvRatio: ip
}, ap = Jd(op);
var Ua = function(t, e, r, n, i) {
  if (n === "m") throw new TypeError("Private method is not writable");
  if (n === "a" && !i) throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? t !== e || !i : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return n === "a" ? i.call(t, r) : i ? i.value = r : e.set(t, r), r;
}, lt = function(t, e, r, n) {
  if (r === "a" && !n) throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? t !== e || !n : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? n : r === "a" ? n.call(t) : n ? n.value : e.get(t);
}, ct, yn, nf, sf;
class cp {
  /**
   * Create a new ExpirableMap.
   * @param {ExpirableMapOptions<any, any>} options - options for the map.
   * @param {Iterable<[any, any]>} options.source - an optional source of entries to initialize the map with.
   * @param {number} options.expirationTime - the time in milliseconds after which entries will expire.
   */
  constructor(e = {}) {
    ct.set(this, void 0), yn.set(this, void 0), this[nf] = this.entries.bind(this), this[sf] = "ExpirableMap";
    const { source: r = [], expirationTime: n = 10 * 60 * 1e3 } = e, i = Date.now();
    Ua(this, ct, new Map([...r].map(([s, c]) => [s, { value: c, timestamp: i }])), "f"), Ua(this, yn, n, "f");
  }
  /**
   * Prune removes all expired entries.
   */
  prune() {
    const e = Date.now();
    for (const [r, n] of lt(this, ct, "f").entries())
      e - n.timestamp > lt(this, yn, "f") && lt(this, ct, "f").delete(r);
    return this;
  }
  // Implementing the Map interface
  /**
   * Set the value for the given key. Prunes expired entries.
   * @param key for the entry
   * @param value of the entry
   * @returns this
   */
  set(e, r) {
    this.prune();
    const n = {
      value: r,
      timestamp: Date.now()
    };
    return lt(this, ct, "f").set(e, n), this;
  }
  /**
   * Get the value associated with the key, if it exists and has not expired.
   * @param key K
   * @returns the value associated with the key, or undefined if the key is not present or has expired.
   */
  get(e) {
    const r = lt(this, ct, "f").get(e);
    if (r !== void 0) {
      if (Date.now() - r.timestamp > lt(this, yn, "f")) {
        lt(this, ct, "f").delete(e);
        return;
      }
      return r.value;
    }
  }
  /**
   * Clear all entries.
   */
  clear() {
    lt(this, ct, "f").clear();
  }
  /**
   * Entries returns the entries of the map, without the expiration time.
   * @returns an iterator over the entries of the map.
   */
  entries() {
    const e = lt(this, ct, "f").entries();
    return function* () {
      for (const [n, i] of e)
        yield [n, i.value];
    }();
  }
  /**
   * Values returns the values of the map, without the expiration time.
   * @returns an iterator over the values of the map.
   */
  values() {
    const e = lt(this, ct, "f").values();
    return function* () {
      for (const n of e)
        yield n.value;
    }();
  }
  /**
   * Keys returns the keys of the map
   * @returns an iterator over the keys of the map.
   */
  keys() {
    return lt(this, ct, "f").keys();
  }
  /**
   * forEach calls the callbackfn on each entry of the map.
   * @param callbackfn to call on each entry
   * @param thisArg to use as this when calling the callbackfn
   */
  forEach(e, r) {
    for (const [n, i] of lt(this, ct, "f").entries())
      e.call(r, i.value, n, this);
  }
  /**
   * has returns true if the key exists and has not expired.
   * @param key K
   * @returns true if the key exists and has not expired.
   */
  has(e) {
    return lt(this, ct, "f").has(e);
  }
  /**
   * delete the entry for the given key.
   * @param key K
   * @returns true if the key existed and has been deleted.
   */
  delete(e) {
    return lt(this, ct, "f").delete(e);
  }
  /**
   * get size of the map.
   * @returns the size of the map.
   */
  get size() {
    return lt(this, ct, "f").size;
  }
}
ct = /* @__PURE__ */ new WeakMap(), yn = /* @__PURE__ */ new WeakMap(), nf = Symbol.iterator, sf = Symbol.toStringTag;
const Fa = (t) => {
  if (t <= 127)
    return 1;
  if (t <= 255)
    return 2;
  if (t <= 65535)
    return 3;
  if (t <= 16777215)
    return 4;
  throw new Error("Length too long (> 4 bytes)");
}, Pa = (t, e, r) => {
  if (r <= 127)
    return t[e] = r, 1;
  if (r <= 255)
    return t[e] = 129, t[e + 1] = r, 2;
  if (r <= 65535)
    return t[e] = 130, t[e + 1] = r >> 8, t[e + 2] = r, 3;
  if (r <= 16777215)
    return t[e] = 131, t[e + 1] = r >> 16, t[e + 2] = r >> 8, t[e + 3] = r, 4;
  throw new Error("Length too long (> 4 bytes)");
}, uo = (t, e) => {
  if (t[e] < 128)
    return 1;
  if (t[e] === 128)
    throw new Error("Invalid length 0");
  if (t[e] === 129)
    return 2;
  if (t[e] === 130)
    return 3;
  if (t[e] === 131)
    return 4;
  throw new Error("Length too long (> 4 bytes)");
}, up = (t, e) => {
  const r = uo(t, e);
  if (r === 1)
    return t[e];
  if (r === 2)
    return t[e + 1];
  if (r === 3)
    return (t[e + 1] << 8) + t[e + 2];
  if (r === 4)
    return (t[e + 1] << 16) + (t[e + 2] << 8) + t[e + 3];
  throw new Error("Length too long (> 4 bytes)");
};
Uint8Array.from([
  48,
  12,
  6,
  10,
  43,
  6,
  1,
  4,
  1,
  131,
  184,
  67,
  1,
  1
  // DER encoded COSE
]);
const Ca = Uint8Array.from([
  48,
  5,
  6,
  3,
  43,
  101,
  112
  // id-Ed25519 OID
]);
Uint8Array.from([
  48,
  16,
  6,
  7,
  42,
  134,
  72,
  206,
  61,
  2,
  1,
  6,
  5,
  43,
  129,
  4,
  0,
  10
  // OID secp256k1
]);
function fp(t, e) {
  const r = 2 + Fa(t.byteLength + 1), n = e.byteLength + r + t.byteLength;
  let i = 0;
  const s = new Uint8Array(1 + Fa(n) + n);
  return s[i++] = 48, i += Pa(s, i, n), s.set(e, i), i += e.byteLength, s[i++] = 3, i += Pa(s, i, t.byteLength + 1), s[i++] = 0, s.set(new Uint8Array(t), i), s;
}
const lp = (t, e) => {
  let r = 0;
  const n = (a, p) => {
    if (i[r++] !== a)
      throw new Error("Expected: " + p);
  }, i = new Uint8Array(t);
  if (n(48, "sequence"), r += uo(i, r), !Oo(i.slice(r, r + e.byteLength), e))
    throw new Error("Not the expected OID.");
  r += e.byteLength, n(3, "bit string");
  const s = up(i, r) - 1;
  r += uo(i, r), n(0, "0 padding");
  const c = i.slice(r);
  if (s !== c.length)
    throw new Error(`DER payload mismatch: Expected length ${s} actual length ${c.length}`);
  return c;
};
var Ma = function(t, e, r, n, i) {
  if (n === "m") throw new TypeError("Private method is not writable");
  if (n === "a" && !i) throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? t !== e || !i : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return n === "a" ? i.call(t, r) : i ? i.value = r : e.set(t, r), r;
}, ka = function(t, e, r, n) {
  if (r === "a" && !n) throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? t !== e || !n : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? n : r === "a" ? n.call(t) : n ? n.value : e.get(t);
}, xi, Ei;
class Fr {
  // `fromRaw` and `fromDer` should be used for instantiation, not this constructor.
  constructor(e) {
    if (xi.set(this, void 0), Ei.set(this, void 0), e.byteLength !== Fr.RAW_KEY_LENGTH)
      throw new Error("An Ed25519 public key must be exactly 32bytes long");
    Ma(this, xi, e, "f"), Ma(this, Ei, Fr.derEncode(e), "f");
  }
  static from(e) {
    return this.fromDer(e.toDer());
  }
  static fromRaw(e) {
    return new Fr(e);
  }
  static fromDer(e) {
    return new Fr(this.derDecode(e));
  }
  static derEncode(e) {
    return fp(e, Ca).buffer;
  }
  static derDecode(e) {
    const r = lp(e, Ca);
    if (r.length !== this.RAW_KEY_LENGTH)
      throw new Error("An Ed25519 public key must be exactly 32bytes long");
    return r;
  }
  get rawKey() {
    return ka(this, xi, "f");
  }
  get derKey() {
    return ka(this, Ei, "f");
  }
  toDer() {
    return this.derKey;
  }
  toRaw() {
    return this.rawKey;
  }
}
xi = /* @__PURE__ */ new WeakMap(), Ei = /* @__PURE__ */ new WeakMap();
Fr.RAW_KEY_LENGTH = 32;
class hp {
  constructor() {
    this.observers = [];
  }
  subscribe(e) {
    this.observers.push(e);
  }
  unsubscribe(e) {
    this.observers = this.observers.filter((r) => r !== e);
  }
  notify(e, ...r) {
    this.observers.forEach((n) => n(e, ...r));
  }
}
class dp extends hp {
  constructor() {
    super();
  }
  print(e, ...r) {
    this.notify({ message: e, level: "info" }, ...r);
  }
  warn(e, ...r) {
    this.notify({ message: e, level: "warn" }, ...r);
  }
  error(e, r, ...n) {
    this.notify({ message: e, level: "error", error: r }, ...n);
  }
}
var Wt = function(t, e, r, n, i) {
  if (n === "m") throw new TypeError("Private method is not writable");
  if (n === "a" && !i) throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? t !== e || !i : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return n === "a" ? i.call(t, r) : i ? i.value = r : e.set(t, r), r;
}, at = function(t, e, r, n) {
  if (r === "a" && !n) throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? t !== e || !n : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? n : r === "a" ? n.call(t) : n ? n.value : e.get(t);
}, Yt, Ti, Ai, Si, Bi, vi, Ni, Ri, Yr;
const of = 0.5, af = 1.5, cf = 500, uf = 6e4, ff = 9e5, lf = 10;
class ss {
  constructor(e = ss.default) {
    Yt.set(this, void 0), Ti.set(this, void 0), Ai.set(this, void 0), Si.set(this, void 0), Bi.set(this, void 0), vi.set(this, void 0), Ni.set(this, void 0), Ri.set(this, void 0), Yr.set(this, 0);
    const { initialInterval: r = cf, randomizationFactor: n = of, multiplier: i = af, maxInterval: s = uf, maxElapsedTime: c = ff, maxIterations: a = lf, date: p = Date } = e;
    Wt(this, Yt, r, "f"), Wt(this, Ti, n, "f"), Wt(this, Ai, i, "f"), Wt(this, Si, s, "f"), Wt(this, Ri, p, "f"), Wt(this, Bi, p.now(), "f"), Wt(this, vi, c, "f"), Wt(this, Ni, a, "f");
  }
  get ellapsedTimeInMsec() {
    return at(this, Ri, "f").now() - at(this, Bi, "f");
  }
  get currentInterval() {
    return at(this, Yt, "f");
  }
  get count() {
    return at(this, Yr, "f");
  }
  get randomValueFromInterval() {
    const e = at(this, Ti, "f") * at(this, Yt, "f"), r = at(this, Yt, "f") - e, n = at(this, Yt, "f") + e;
    return Math.random() * (n - r) + r;
  }
  incrementCurrentInterval() {
    var e;
    return Wt(this, Yt, Math.min(at(this, Yt, "f") * at(this, Ai, "f"), at(this, Si, "f")), "f"), Wt(this, Yr, (e = at(this, Yr, "f"), e++, e), "f"), at(this, Yt, "f");
  }
  next() {
    return this.ellapsedTimeInMsec >= at(this, vi, "f") || at(this, Yr, "f") >= at(this, Ni, "f") ? null : (this.incrementCurrentInterval(), this.randomValueFromInterval);
  }
}
Yt = /* @__PURE__ */ new WeakMap(), Ti = /* @__PURE__ */ new WeakMap(), Ai = /* @__PURE__ */ new WeakMap(), Si = /* @__PURE__ */ new WeakMap(), Bi = /* @__PURE__ */ new WeakMap(), vi = /* @__PURE__ */ new WeakMap(), Ni = /* @__PURE__ */ new WeakMap(), Ri = /* @__PURE__ */ new WeakMap(), Yr = /* @__PURE__ */ new WeakMap();
ss.default = {
  initialInterval: cf,
  randomizationFactor: of,
  multiplier: af,
  maxInterval: uf,
  // 1 minute
  maxElapsedTime: ff,
  maxIterations: lf,
  date: Date
};
var ni = function(t, e, r, n, i) {
  if (n === "m") throw new TypeError("Private method is not writable");
  if (n === "a" && !i) throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? t !== e || !i : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return n === "a" ? i.call(t, r) : i ? i.value = r : e.set(t, r), r;
}, Fe = function(t, e, r, n) {
  if (r === "a" && !n) throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? t !== e || !n : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? n : r === "a" ? n.call(t) : n ? n.value : e.get(t);
}, Qt, $t, Br, Oi, Zr, Kr, vr, Or, hf, Ii, Ui, nr;
(function(t) {
  t.Received = "received", t.Processing = "processing", t.Replied = "replied", t.Rejected = "rejected", t.Unknown = "unknown", t.Done = "done";
})(nr || (nr = {}));
const ii = 5 * 60 * 1e3, pp = "308182301d060d2b0601040182dc7c0503010201060c2b0601040182dc7c05030201036100814c0e6ec71fab583b08bd81373c255c3c371b2e84863c98a4f1e08b74235d14fb5d9c0cd546d9685f913a0c0b2cc5341583bf4b4392e467db96d65b9bb4cb717112f8472e0d5a4d14505ffd7484b01291091c5f87b98883463f98091a0baaae", mp = "ic0.app", gp = ".ic0.app", yp = "icp0.io", wp = ".icp0.io", bp = "icp-api.io", _p = ".icp-api.io";
class Us extends wt {
  constructor(e) {
    super(e), this.message = e;
  }
}
class si extends wt {
  constructor(e) {
    super(e), this.message = e;
  }
}
function xp() {
  let t;
  if (typeof window < "u")
    if (window.fetch)
      t = window.fetch.bind(window);
    else
      throw new Us("Fetch implementation was not available. You appear to be in a browser context, but window.fetch was not present.");
  else if (typeof global < "u")
    if (global.fetch)
      t = global.fetch.bind(global);
    else
      throw new Us("Fetch implementation was not available. You appear to be in a Node.js context, but global.fetch was not available.");
  else typeof self < "u" && self.fetch && (t = self.fetch.bind(self));
  if (t)
    return t;
  throw new Us("Fetch implementation was not available. Please provide fetch to the HttpAgent constructor, or ensure it is available in the window or global context.");
}
class os {
  constructor(e = {}) {
    var r;
    if (Qt.add(this), this.rootKey = Hi(pp), this._timeDiffMsecs = 0, this._rootKeyFetched = !1, $t.set(this, void 0), Br.set(this, void 0), this._isAgent = !0, Oi.set(this, 0), this.log = new dp(), Zr.set(this, []), Kr.set(this, []), vr.set(this, new cp({
      expirationTime: 5 * 60 * 1e3
      // 5 minutes
    })), Or.set(this, !0), Ui.set(this, (i, s) => {
      if (Fe(this, Or, "f") === !1)
        return i;
      if (!s)
        throw new Kt("Invalid signature from replica signed query: no matching node key found.");
      const { status: c, signatures: a = [], requestId: p } = i, g = new TextEncoder().encode("\vic-response");
      for (const b of a) {
        const { timestamp: T, identity: O } = b, B = Me.fromUint8Array(O).toText();
        let m;
        if (c === "replied") {
          const { reply: q } = i;
          m = qi({
            status: c,
            reply: q,
            timestamp: BigInt(T),
            request_id: p
          });
        } else if (c === "rejected") {
          const { reject_code: q, reject_message: ee, error_code: k } = i;
          m = qi({
            status: c,
            reject_code: q,
            reject_message: ee,
            error_code: k,
            timestamp: BigInt(T),
            request_id: p
          });
        } else
          throw new Error(`Unknown status: ${c}`);
        const I = er(g, new Uint8Array(m)), U = s == null ? void 0 : s.nodeKeys.get(B);
        if (!U)
          throw new Kt("Invalid signature from replica signed query: no matching node key found.");
        const V = Fr.fromDer(U).rawKey;
        if (ap.verify(b.signature, new Uint8Array(I), new Uint8Array(V)))
          return i;
        throw new Kt(`Invalid signature from replica ${B} signed query.`);
      }
      return i;
    }), e.source) {
      if (!(e.source instanceof os))
        throw new Error("An Agent's source can only be another HttpAgent");
      this._identity = e.source._identity, this._fetch = e.source._fetch, this._host = e.source._host, this._credentials = e.source._credentials;
    } else
      this._fetch = e.fetch || xp() || fetch.bind(global), this._fetchOptions = e.fetchOptions, this._callOptions = e.callOptions;
    if (e.host !== void 0)
      !e.host.match(/^[a-z]+:/) && typeof window < "u" ? this._host = new URL(window.location.protocol + "//" + e.host) : this._host = new URL(e.host);
    else if (e.source !== void 0)
      this._host = e.source._host;
    else {
      const i = typeof window < "u" ? window.location : void 0;
      i || (this._host = new URL("https://icp-api.io"), this.log.warn("Could not infer host from window.location, defaulting to mainnet gateway of https://icp-api.io. Please provide a host to the HttpAgent constructor to avoid this warning."));
      const s = ["ic0.app", "icp0.io", "127.0.0.1", "localhost"], c = [".github.dev", ".gitpod.io"], a = i == null ? void 0 : i.hostname;
      let p;
      a && typeof a == "string" && (c.some((g) => a.endsWith(g)) ? p = a : p = s.find((g) => a.endsWith(g))), i && p ? this._host = new URL(`${i.protocol}//${p}${i.port ? ":" + i.port : ""}`) : (this._host = new URL("https://icp-api.io"), this.log.warn("Could not infer host from window.location, defaulting to mainnet gateway of https://icp-api.io. Please provide a host to the HttpAgent constructor to avoid this warning."));
    }
    e.verifyQuerySignatures !== void 0 && ni(this, Or, e.verifyQuerySignatures, "f"), ni(this, $t, (r = e.retryTimes) !== null && r !== void 0 ? r : 3, "f");
    const n = () => new ss({
      maxIterations: Fe(this, $t, "f")
    });
    if (ni(this, Br, e.backoffStrategy || n, "f"), this._host.hostname.endsWith(gp) ? this._host.hostname = mp : this._host.hostname.endsWith(wp) ? this._host.hostname = yp : this._host.hostname.endsWith(_p) && (this._host.hostname = bp), e.credentials) {
      const { name: i, password: s } = e.credentials;
      this._credentials = `${i}${s ? ":" + s : ""}`;
    }
    this._identity = Promise.resolve(e.identity || new yh()), this.addTransform("update", la(no)), e.useQueryNonces && this.addTransform("query", la(no)), e.logToConsole && this.log.subscribe((i) => {
      i.level === "error" ? console.error(i.message) : i.level === "warn" ? console.warn(i.message) : console.log(i.message);
    });
  }
  get waterMark() {
    return Fe(this, Oi, "f");
  }
  isLocal() {
    const e = this._host.hostname;
    return e === "127.0.0.1" || e.endsWith("127.0.0.1");
  }
  addTransform(e, r, n = r.priority || 0) {
    if (e === "update") {
      const i = Fe(this, Kr, "f").findIndex((s) => (s.priority || 0) < n);
      Fe(this, Kr, "f").splice(i >= 0 ? i : Fe(this, Kr, "f").length, 0, Object.assign(r, { priority: n }));
    } else if (e === "query") {
      const i = Fe(this, Zr, "f").findIndex((s) => (s.priority || 0) < n);
      Fe(this, Zr, "f").splice(i >= 0 ? i : Fe(this, Zr, "f").length, 0, Object.assign(r, { priority: n }));
    }
  }
  async getPrincipal() {
    if (!this._identity)
      throw new si("This identity has expired due this application's security policy. Please refresh your authentication.");
    return (await this._identity).getPrincipal();
  }
  async call(e, r, n) {
    const i = await (n !== void 0 ? await n : await this._identity);
    if (!i)
      throw new si("This identity has expired due this application's security policy. Please refresh your authentication.");
    const s = Me.from(e), c = r.effectiveCanisterId ? Me.from(r.effectiveCanisterId) : s, a = i.getPrincipal() || Me.anonymous();
    let p = new Xn(ii);
    Math.abs(this._timeDiffMsecs) > 1e3 * 30 && (p = new Xn(ii + this._timeDiffMsecs));
    const g = {
      request_type: ro.Call,
      canister_id: s,
      method_name: r.methodName,
      arg: r.arg,
      sender: a,
      ingress_expiry: p
    };
    let b = await this._transform({
      request: {
        body: null,
        method: "POST",
        headers: Object.assign({ "Content-Type": "application/cbor" }, this._credentials ? { Authorization: "Basic " + btoa(this._credentials) } : {})
      },
      endpoint: "call",
      body: g
    });
    b = await i.transformRequest(b);
    const T = Ss(b.body);
    this.log.print(`fetching "/api/v2/canister/${c.toText()}/call" with request:`, b);
    const O = Fe(this, Br, "f").call(this), B = Fe(this, Qt, "m", Ii).call(this, {
      request: () => this._fetch("" + new URL(`/api/v2/canister/${c.toText()}/call`, this._host), Object.assign(Object.assign(Object.assign({}, this._callOptions), b.request), { body: T })),
      backoff: O,
      tries: 0
    }), [m, I] = await Promise.all([B, ua(g)]), U = await m.arrayBuffer(), V = m.status === 200 && U.byteLength > 0 ? ar(U) : null;
    return {
      requestId: I,
      response: {
        ok: m.ok,
        status: m.status,
        statusText: m.statusText,
        body: V,
        headers: mi(m.headers)
      }
    };
  }
  async query(e, r, n) {
    const i = Fe(this, Br, "f").call(this), s = r.effectiveCanisterId ? Me.from(r.effectiveCanisterId) : Me.from(e);
    this.log.print(`ecid ${s.toString()}`), this.log.print(`canisterId ${e.toString()}`);
    const c = async () => {
      const b = await (n !== void 0 ? await n : await this._identity);
      if (!b)
        throw new si("This identity has expired due this application's security policy. Please refresh your authentication.");
      const T = Me.from(e), O = (b == null ? void 0 : b.getPrincipal()) || Me.anonymous(), B = {
        request_type: "query",
        canister_id: T,
        method_name: r.methodName,
        arg: r.arg,
        sender: O,
        ingress_expiry: new Xn(ii)
      }, m = await ua(B);
      let I = await this._transform({
        request: {
          method: "POST",
          headers: Object.assign({ "Content-Type": "application/cbor" }, this._credentials ? { Authorization: "Basic " + btoa(this._credentials) } : {})
        },
        endpoint: "read",
        body: B
      });
      I = await (b == null ? void 0 : b.transformRequest(I));
      const U = Ss(I.body), V = {
        canister: T.toText(),
        ecid: s,
        transformedRequest: I,
        body: U,
        requestId: m,
        backoff: i,
        tries: 0
      };
      return await Fe(this, Qt, "m", hf).call(this, V);
    }, a = async () => {
      if (!Fe(this, Or, "f"))
        return;
      const b = Fe(this, vr, "f").get(s.toString());
      return b || (await this.fetchSubnetKeys(s.toString()), Fe(this, vr, "f").get(s.toString()));
    }, [p, g] = await Promise.all([c(), a()]);
    if (this.log.print("Query response:", p), !Fe(this, Or, "f"))
      return p;
    try {
      return Fe(this, Ui, "f").call(this, p, g);
    } catch {
      this.log.warn("Query response verification failed. Retrying with fresh subnet keys."), Fe(this, vr, "f").delete(e.toString()), await this.fetchSubnetKeys(s.toString());
      const T = Fe(this, vr, "f").get(e.toString());
      if (!T)
        throw new Kt("Invalid signature from replica signed query: no matching node key found.");
      return Fe(this, Ui, "f").call(this, p, T);
    }
  }
  async createReadStateRequest(e, r) {
    const n = await (r !== void 0 ? await r : await this._identity);
    if (!n)
      throw new si("This identity has expired due this application's security policy. Please refresh your authentication.");
    const i = (n == null ? void 0 : n.getPrincipal()) || Me.anonymous(), s = await this._transform({
      request: {
        method: "POST",
        headers: Object.assign({ "Content-Type": "application/cbor" }, this._credentials ? { Authorization: "Basic " + btoa(this._credentials) } : {})
      },
      endpoint: "read_state",
      body: {
        request_type: "read_state",
        paths: e.paths,
        sender: i,
        ingress_expiry: new Xn(ii)
      }
    });
    return n == null ? void 0 : n.transformRequest(s);
  }
  async readState(e, r, n, i) {
    const s = typeof e == "string" ? Me.fromText(e) : e, c = i ?? await this.createReadStateRequest(r, n), a = Ss(c.body);
    this.log.print(`fetching "/api/v2/canister/${s}/read_state" with request:`, c);
    const p = Fe(this, Br, "f").call(this), g = await Fe(this, Qt, "m", Ii).call(this, {
      request: () => this._fetch("" + new URL(`/api/v2/canister/${s.toString()}/read_state`, this._host), Object.assign(Object.assign(Object.assign({}, this._fetchOptions), c.request), { body: a })),
      backoff: p,
      tries: 0
    });
    if (!g.ok)
      throw new Error(`Server returned an error:
  Code: ${g.status} (${g.statusText})
  Body: ${await g.text()}
`);
    const b = ar(await g.arrayBuffer());
    this.log.print("Read state response:", b);
    const T = await this.parseTimeFromResponse(b);
    return T > 0 && (this.log.print("Read state response time:", T), ni(this, Oi, T, "f")), b;
  }
  async parseTimeFromResponse(e) {
    let r;
    if (e.certificate) {
      const n = ar(e.certificate);
      if (n && "tree" in n)
        r = n.tree;
      else
        throw new Error("Could not decode time from response");
      const i = nn(["time"], r);
      if (i.status !== et.Found)
        throw new Error("Time was not found in the response or was not in its expected format.");
      if (!(i.value instanceof ArrayBuffer) && !ArrayBuffer.isView(i))
        throw new Error("Time was not found in the response or was not in its expected format.");
      const s = Co(Eu(i.value));
      return this.log.print("Time from response:", s), this.log.print("Time from response in milliseconds:", Number(s)), Number(s);
    } else
      this.log.warn("No certificate found in response");
    return 0;
  }
  /**
   * Allows agent to sync its time with the network. Can be called during intialization or mid-lifecycle if the device's clock has drifted away from the network time. This is necessary to set the Expiry for a request
   * @param {Principal} canisterId - Pass a canister ID if you need to sync the time with a particular replica. Uses the management canister by default
   */
  async syncTime(e) {
    const r = await Promise.resolve().then(() => Td), n = Date.now();
    try {
      e || this.log.print("Syncing time with the IC. No canisterId provided, so falling back to ryjl3-tyaaa-aaaaa-aaaba-cai");
      const s = (await r.request({
        // Fall back with canisterId of the ICP Ledger
        canisterId: e ?? Me.from("ryjl3-tyaaa-aaaaa-aaaba-cai"),
        agent: this,
        paths: ["time"]
      })).get("time");
      s && (this._timeDiffMsecs = Number(s) - Number(n));
    } catch (i) {
      this.log.error("Caught exception while attempting to sync time", i);
    }
  }
  async status() {
    const e = this._credentials ? {
      Authorization: "Basic " + btoa(this._credentials)
    } : {};
    this.log.print('fetching "/api/v2/status"');
    const r = Fe(this, Br, "f").call(this), n = await Fe(this, Qt, "m", Ii).call(this, {
      backoff: r,
      request: () => this._fetch("" + new URL("/api/v2/status", this._host), Object.assign({ headers: e }, this._fetchOptions)),
      tries: 0
    });
    return ar(await n.arrayBuffer());
  }
  async fetchRootKey() {
    return this._rootKeyFetched || (this.rootKey = (await this.status()).root_key, this._rootKeyFetched = !0), this.rootKey;
  }
  invalidateIdentity() {
    this._identity = null;
  }
  replaceIdentity(e) {
    this._identity = Promise.resolve(e);
  }
  async fetchSubnetKeys(e) {
    const r = Me.from(e), i = (await Qu({
      canisterId: r,
      paths: ["subnet"],
      agent: this
    })).get("subnet");
    if (i && typeof i == "object" && "nodeKeys" in i)
      return Fe(this, vr, "f").set(r.toText(), i), i;
  }
  _transform(e) {
    let r = Promise.resolve(e);
    if (e.endpoint === "call")
      for (const n of Fe(this, Kr, "f"))
        r = r.then((i) => n(i).then((s) => s || i));
    else
      for (const n of Fe(this, Zr, "f"))
        r = r.then((i) => n(i).then((s) => s || i));
    return r;
  }
}
$t = /* @__PURE__ */ new WeakMap(), Br = /* @__PURE__ */ new WeakMap(), Oi = /* @__PURE__ */ new WeakMap(), Zr = /* @__PURE__ */ new WeakMap(), Kr = /* @__PURE__ */ new WeakMap(), vr = /* @__PURE__ */ new WeakMap(), Or = /* @__PURE__ */ new WeakMap(), Ui = /* @__PURE__ */ new WeakMap(), Qt = /* @__PURE__ */ new WeakSet(), hf = async function t(e) {
  var r, n;
  const { ecid: i, transformedRequest: s, body: c, requestId: a, backoff: p, tries: g } = e, b = g === 0 ? 0 : p.next();
  if (this.log.print(`fetching "/api/v2/canister/${i.toString()}/query" with tries:`, {
    tries: g,
    backoff: p,
    delay: b
  }), b === null)
    throw new wt(`Timestamp failed to pass the watermark after retrying the configured ${Fe(this, $t, "f")} times. We cannot guarantee the integrity of the response since it could be a replay attack.`);
  b > 0 && await new Promise((m) => setTimeout(m, b));
  let T;
  try {
    this.log.print(`fetching "/api/v2/canister/${i.toString()}/query" with request:`, s);
    const m = await this._fetch("" + new URL(`/api/v2/canister/${i.toString()}/query`, this._host), Object.assign(Object.assign(Object.assign({}, this._fetchOptions), s.request), { body: c }));
    if (m.status === 200) {
      const I = ar(await m.arrayBuffer());
      T = Object.assign(Object.assign({}, I), { httpDetails: {
        ok: m.ok,
        status: m.status,
        statusText: m.statusText,
        headers: mi(m.headers)
      }, requestId: a });
    } else
      throw new ha(`Gateway returned an error:
  Code: ${m.status} (${m.statusText})
  Body: ${await m.text()}
`, {
        ok: m.ok,
        status: m.status,
        statusText: m.statusText,
        headers: mi(m.headers)
      });
  } catch (m) {
    if (g < Fe(this, $t, "f"))
      return this.log.warn(`Caught exception while attempting to make query:
  ${m}
  Retrying query.`), await Fe(this, Qt, "m", t).call(this, Object.assign(Object.assign({}, e), { tries: g + 1 }));
    throw m;
  }
  const O = (n = (r = T.signatures) === null || r === void 0 ? void 0 : r[0]) === null || n === void 0 ? void 0 : n.timestamp;
  if (!Fe(this, Or, "f"))
    return T;
  if (!O)
    throw new Error("Timestamp not found in query response. This suggests a malformed or malicious response.");
  const B = Number(BigInt(O) / BigInt(1e6));
  if (this.log.print("watermark and timestamp", {
    waterMark: this.waterMark,
    timestamp: B
  }), Number(this.waterMark) > B) {
    const m = new wt("Timestamp is below the watermark. Retrying query.");
    if (this.log.error("Timestamp is below", m, {
      timestamp: O,
      waterMark: this.waterMark
    }), g < Fe(this, $t, "f"))
      return await Fe(this, Qt, "m", t).call(this, Object.assign(Object.assign({}, e), { tries: g + 1 }));
    throw new wt(`Timestamp failed to pass the watermark after retrying the configured ${Fe(this, $t, "f")} times. We cannot guarantee the integrity of the response since it could be a replay attack.`);
  }
  return T;
}, Ii = async function t(e) {
  const { request: r, backoff: n, tries: i } = e, s = i === 0 ? 0 : n.next();
  if (s === null)
    throw new wt(`Timestamp failed to pass the watermark after retrying the configured ${Fe(this, $t, "f")} times. We cannot guarantee the integrity of the response since it could be a replay attack.`);
  s > 0 && await new Promise((g) => setTimeout(g, s));
  let c;
  try {
    c = await r();
  } catch (g) {
    if (Fe(this, $t, "f") > i)
      return this.log.warn(`Caught exception while attempting to make request:
  ${g}
  Retrying request.`), await Fe(this, Qt, "m", t).call(this, { request: r, backoff: n, tries: i + 1 });
    throw g;
  }
  if (c.ok)
    return c;
  const a = await c.clone().text(), p = `Server returned an error:
  Code: ${c.status} (${c.statusText})
  Body: ${a}
`;
  if (i < Fe(this, $t, "f"))
    return await Fe(this, Qt, "m", t).call(this, { request: r, backoff: n, tries: i + 1 });
  throw new ha(p, {
    ok: c.ok,
    status: c.status,
    statusText: c.statusText,
    headers: mi(c.headers)
  });
};
var $a;
(function(t) {
  t.Error = "err", t.GetPrincipal = "gp", t.GetPrincipalResponse = "gpr", t.Query = "q", t.QueryResponse = "qr", t.Call = "c", t.CallResponse = "cr", t.ReadState = "rs", t.ReadStateResponse = "rsr", t.Status = "s", t.StatusResponse = "sr";
})($a || ($a = {}));
function Ha() {
  const t = typeof window > "u" ? typeof global > "u" ? typeof self > "u" ? void 0 : self.ic.agent : global.ic.agent : window.ic.agent;
  if (!t)
    throw new Error("No Agent could be found.");
  return t;
}
const Ep = 5 * 60 * 1e3;
function Tp() {
  return Np(Sp(Ap(), 1e3), vp(1e3, 1.2), Bp(Ep));
}
function Ap() {
  let t = !0;
  return async () => t ? (t = !1, !0) : !1;
}
function Sp(t, e) {
  return async (r, n, i) => {
    if (await t(r, n, i))
      return new Promise((s) => setTimeout(s, e));
  };
}
function Bp(t) {
  const e = Date.now() + t;
  return async (r, n, i) => {
    if (Date.now() > e)
      throw new Error(`Request timed out after ${t} msec:
  Request ID: ${Lt(n)}
  Request status: ${i}
`);
  };
}
function vp(t, e) {
  let r = t;
  return () => new Promise((n) => setTimeout(() => {
    r *= e, n();
  }, r));
}
function Np(...t) {
  return async (e, r, n) => {
    for (const i of t)
      await i(e, r, n);
  };
}
async function df(t, e, r, n, i, s) {
  var c;
  const a = [new TextEncoder().encode("request_status"), r], p = i ?? await ((c = t.createReadStateRequest) === null || c === void 0 ? void 0 : c.call(t, { paths: [a] })), g = await t.readState(e, { paths: [a] }, void 0, p);
  if (t.rootKey == null)
    throw new Error("Agent root key not initialized before polling");
  const b = await Qr.create({
    certificate: g.certificate,
    rootKey: t.rootKey,
    canisterId: e,
    blsVerify: s
  }), T = Ur(b.lookup([...a, new TextEncoder().encode("status")]));
  let O;
  switch (typeof T > "u" ? O = nr.Unknown : O = new TextDecoder().decode(T), O) {
    case nr.Replied:
      return Ur(b.lookup([...a, "reply"]));
    case nr.Received:
    case nr.Unknown:
    case nr.Processing:
      return await n(e, r, O), df(t, e, r, n, p);
    case nr.Rejected: {
      const B = new Uint8Array(Ur(b.lookup([...a, "reject_code"])))[0], m = new TextDecoder().decode(Ur(b.lookup([...a, "reject_message"])));
      throw new Error(`Call was rejected:
  Request ID: ${Lt(r)}
  Reject code: ${B}
  Reject text: ${m}
`);
    }
    case nr.Done:
      throw new Error(`Call was marked as done but we never saw the reply:
  Request ID: ${Lt(r)}
`);
  }
  throw new Error("unreachable");
}
const Rp = ({ IDL: t }) => {
  const e = t.Variant({
    mainnet: t.Null,
    testnet: t.Null
  }), r = t.Text, n = t.Record({
    network: e,
    address: r,
    min_confirmations: t.Opt(t.Nat32)
  }), i = t.Nat64, s = i, c = t.Record({
    network: e
  }), a = t.Nat64, p = t.Vec(a), g = t.Record({
    network: e,
    filter: t.Opt(t.Variant({
      page: t.Vec(t.Nat8),
      min_confirmations: t.Nat32
    })),
    address: r
  }), b = t.Vec(t.Nat8), T = t.Record({
    txid: t.Vec(t.Nat8),
    vout: t.Nat32
  }), O = t.Record({
    height: t.Nat32,
    value: i,
    outpoint: T
  }), B = t.Record({
    next_page: t.Opt(t.Vec(t.Nat8)),
    tip_height: t.Nat32,
    tip_block_hash: b,
    utxos: t.Vec(O)
  }), m = t.Record({
    transaction: t.Vec(t.Nat8),
    network: e
  }), I = t.Principal, U = t.Record({
    canister_id: I,
    num_requested_changes: t.Opt(t.Nat64)
  }), V = t.Variant({
    from_user: t.Record({ user_id: t.Principal }),
    from_canister: t.Record({
      canister_version: t.Opt(t.Nat64),
      canister_id: t.Principal
    })
  }), j = t.Variant({
    creation: t.Record({ controllers: t.Vec(t.Principal) }),
    code_deployment: t.Record({
      mode: t.Variant({
        reinstall: t.Null,
        upgrade: t.Null,
        install: t.Null
      }),
      module_hash: t.Vec(t.Nat8)
    }),
    controllers_change: t.Record({
      controllers: t.Vec(t.Principal)
    }),
    code_uninstall: t.Null
  }), q = t.Record({
    timestamp_nanos: t.Nat64,
    canister_version: t.Nat64,
    origin: V,
    details: j
  }), ee = t.Record({
    controllers: t.Vec(t.Principal),
    module_hash: t.Opt(t.Vec(t.Nat8)),
    recent_changes: t.Vec(q),
    total_num_changes: t.Nat64
  }), k = t.Record({ canister_id: I }), J = t.Variant({
    controllers: t.Null,
    public: t.Null
  }), K = t.Record({
    freezing_threshold: t.Nat,
    controllers: t.Vec(t.Principal),
    reserved_cycles_limit: t.Nat,
    log_visibility: J,
    wasm_memory_limit: t.Nat,
    memory_allocation: t.Nat,
    compute_allocation: t.Nat
  }), re = t.Record({
    status: t.Variant({
      stopped: t.Null,
      stopping: t.Null,
      running: t.Null
    }),
    memory_size: t.Nat,
    cycles: t.Nat,
    settings: K,
    query_stats: t.Record({
      response_payload_bytes_total: t.Nat,
      num_instructions_total: t.Nat,
      num_calls_total: t.Nat,
      request_payload_bytes_total: t.Nat
    }),
    idle_cycles_burned_per_day: t.Nat,
    module_hash: t.Opt(t.Vec(t.Nat8)),
    reserved_cycles: t.Nat
  }), ue = t.Record({ canister_id: I }), ie = t.Record({
    freezing_threshold: t.Opt(t.Nat),
    controllers: t.Opt(t.Vec(t.Principal)),
    reserved_cycles_limit: t.Opt(t.Nat),
    log_visibility: t.Opt(J),
    wasm_memory_limit: t.Opt(t.Nat),
    memory_allocation: t.Opt(t.Nat),
    compute_allocation: t.Opt(t.Nat)
  }), pe = t.Record({
    settings: t.Opt(ie),
    sender_canister_version: t.Opt(t.Nat64)
  }), de = t.Record({ canister_id: I }), N = t.Record({ canister_id: I }), P = t.Record({ canister_id: I }), Y = t.Variant({ secp256k1: t.Null }), z = t.Record({
    key_id: t.Record({ name: t.Text, curve: Y }),
    canister_id: t.Opt(I),
    derivation_path: t.Vec(t.Vec(t.Nat8))
  }), G = t.Record({
    public_key: t.Vec(t.Nat8),
    chain_code: t.Vec(t.Nat8)
  }), Q = t.Record({ canister_id: I }), le = t.Record({
    idx: t.Nat64,
    timestamp_nanos: t.Nat64,
    content: t.Vec(t.Nat8)
  }), ye = t.Record({
    canister_log_records: t.Vec(le)
  }), se = t.Record({ value: t.Text, name: t.Text }), Z = t.Record({
    status: t.Nat,
    body: t.Vec(t.Nat8),
    headers: t.Vec(se)
  }), ce = t.Record({
    url: t.Text,
    method: t.Variant({
      get: t.Null,
      head: t.Null,
      post: t.Null
    }),
    max_response_bytes: t.Opt(t.Nat64),
    body: t.Opt(t.Vec(t.Nat8)),
    transform: t.Opt(t.Record({
      function: t.Func([
        t.Record({
          context: t.Vec(t.Nat8),
          response: Z
        })
      ], [Z], ["query"]),
      context: t.Vec(t.Nat8)
    })),
    headers: t.Vec(se)
  }), w = t.Variant({
    reinstall: t.Null,
    upgrade: t.Opt(t.Record({
      wasm_memory_persistence: t.Opt(t.Variant({ keep: t.Null, replace: t.Null })),
      skip_pre_upgrade: t.Opt(t.Bool)
    })),
    install: t.Null
  }), ne = t.Record({ hash: t.Vec(t.Nat8) }), he = t.Record({
    arg: t.Vec(t.Nat8),
    wasm_module_hash: t.Vec(t.Nat8),
    mode: w,
    chunk_hashes_list: t.Vec(ne),
    target_canister: I,
    store_canister: t.Opt(I),
    sender_canister_version: t.Opt(t.Nat64)
  }), Ee = t.Vec(t.Nat8), ae = t.Record({
    arg: t.Vec(t.Nat8),
    wasm_module: Ee,
    mode: w,
    canister_id: I,
    sender_canister_version: t.Opt(t.Nat64)
  }), fe = t.Record({
    start_at_timestamp_nanos: t.Nat64,
    subnet_id: t.Principal
  }), _ = t.Record({
    num_block_failures_total: t.Nat64,
    node_id: t.Principal,
    num_blocks_proposed_total: t.Nat64
  }), E = t.Vec(t.Record({
    timestamp_nanos: t.Nat64,
    node_metrics: t.Vec(_)
  })), S = t.Record({
    settings: t.Opt(ie),
    specified_id: t.Opt(I),
    amount: t.Opt(t.Nat),
    sender_canister_version: t.Opt(t.Nat64)
  }), M = t.Record({
    canister_id: I
  }), F = t.Record({
    canister_id: I,
    amount: t.Nat
  }), H = t.Vec(t.Nat8), h = t.Record({
    key_id: t.Record({ name: t.Text, curve: Y }),
    derivation_path: t.Vec(t.Vec(t.Nat8)),
    message_hash: t.Vec(t.Nat8)
  }), o = t.Record({
    signature: t.Vec(t.Nat8)
  }), u = t.Record({ canister_id: I }), y = t.Record({ canister_id: I }), x = t.Record({ canister_id: I }), v = t.Vec(ne), L = t.Record({
    canister_id: I,
    sender_canister_version: t.Opt(t.Nat64)
  }), oe = t.Record({
    canister_id: t.Principal,
    settings: ie,
    sender_canister_version: t.Opt(t.Nat64)
  }), me = t.Record({
    chunk: t.Vec(t.Nat8),
    canister_id: t.Principal
  }), ge = ne;
  return t.Service({
    bitcoin_get_balance: t.Func([n], [s], []),
    bitcoin_get_current_fee_percentiles: t.Func([c], [p], []),
    bitcoin_get_utxos: t.Func([g], [B], []),
    bitcoin_send_transaction: t.Func([m], [], []),
    canister_info: t.Func([U], [ee], []),
    canister_status: t.Func([k], [re], []),
    clear_chunk_store: t.Func([ue], [], []),
    create_canister: t.Func([pe], [de], []),
    delete_canister: t.Func([N], [], []),
    deposit_cycles: t.Func([P], [], []),
    ecdsa_public_key: t.Func([z], [G], []),
    fetch_canister_logs: t.Func([Q], [ye], ["query"]),
    http_request: t.Func([ce], [Z], []),
    install_chunked_code: t.Func([he], [], []),
    install_code: t.Func([ae], [], []),
    node_metrics_history: t.Func([fe], [E], []),
    provisional_create_canister_with_cycles: t.Func([S], [M], []),
    provisional_top_up_canister: t.Func([F], [], []),
    raw_rand: t.Func([], [H], []),
    sign_with_ecdsa: t.Func([h], [o], []),
    start_canister: t.Func([u], [], []),
    stop_canister: t.Func([y], [], []),
    stored_chunks: t.Func([x], [v], []),
    uninstall_code: t.Func([L], [], []),
    update_settings: t.Func([oe], [], []),
    upload_chunk: t.Func([me], [ge], [])
  });
};
class pf extends wt {
  constructor(e, r, n, i) {
    super([
      "Call failed:",
      `  Canister: ${e.toText()}`,
      `  Method: ${r} (${n})`,
      ...Object.getOwnPropertyNames(i).map((s) => `  "${s}": ${JSON.stringify(i[s])}`)
    ].join(`
`)), this.canisterId = e, this.methodName = r, this.type = n, this.props = i;
  }
}
class Op extends pf {
  constructor(e, r, n) {
    var i;
    super(e, r, "query", {
      Status: n.status,
      Code: (i = zs[n.reject_code]) !== null && i !== void 0 ? i : `Unknown Code "${n.reject_code}"`,
      Message: n.reject_message
    }), this.result = n;
  }
}
class Ip extends pf {
  constructor(e, r, n, i) {
    super(e, r, "update", Object.assign({ "Request ID": Lt(n) }, i.body ? Object.assign(Object.assign({}, i.body.error_code ? {
      "Error code": i.body.error_code
    } : {}), { "Reject code": String(i.body.reject_code), "Reject message": i.body.reject_message }) : {
      "HTTP status code": i.status.toString(),
      "HTTP status text": i.statusText
    })), this.requestId = n, this.response = i;
  }
}
const Nt = Symbol.for("ic-agent-metadata");
class kn {
  constructor(e) {
    this[Nt] = Object.freeze(e);
  }
  /**
   * Get the Agent class this Actor would call, or undefined if the Actor would use
   * the default agent (global.ic.agent).
   * @param actor The actor to get the agent of.
   */
  static agentOf(e) {
    return e[Nt].config.agent;
  }
  /**
   * Get the interface of an actor, in the form of an instance of a Service.
   * @param actor The actor to get the interface of.
   */
  static interfaceOf(e) {
    return e[Nt].service;
  }
  static canisterIdOf(e) {
    return Me.from(e[Nt].config.canisterId);
  }
  static async install(e, r) {
    const n = e.mode === void 0 ? { install: null } : e.mode, i = e.arg ? [...new Uint8Array(e.arg)] : [], s = [...new Uint8Array(e.module)], c = typeof r.canisterId == "string" ? Me.fromText(r.canisterId) : r.canisterId;
    await qa(r).install_code({
      mode: n,
      arg: i,
      wasm_module: s,
      canister_id: c,
      sender_canister_version: []
    });
  }
  static async createCanister(e, r) {
    function n(s) {
      return [
        {
          controllers: s.controllers ? [s.controllers] : [],
          compute_allocation: s.compute_allocation ? [s.compute_allocation] : [],
          freezing_threshold: s.freezing_threshold ? [s.freezing_threshold] : [],
          memory_allocation: s.memory_allocation ? [s.memory_allocation] : [],
          reserved_cycles_limit: [],
          log_visibility: [],
          wasm_memory_limit: []
        }
      ];
    }
    const { canister_id: i } = await qa(e || {}).provisional_create_canister_with_cycles({
      amount: [],
      settings: n(r || {}),
      specified_id: [],
      sender_canister_version: []
    });
    return i;
  }
  static async createAndInstallCanister(e, r, n) {
    const i = await this.createCanister(n);
    return await this.install(Object.assign({}, r), Object.assign(Object.assign({}, n), { canisterId: i })), this.createActor(e, Object.assign(Object.assign({}, n), { canisterId: i }));
  }
  static createActorClass(e, r) {
    const n = e({ IDL: C0 });
    class i extends kn {
      constructor(c) {
        if (!c.canisterId)
          throw new wt(`Canister ID is required, but received ${typeof c.canisterId} instead. If you are using automatically generated declarations, this may be because your application is not setting the canister ID in process.env correctly.`);
        const a = typeof c.canisterId == "string" ? Me.fromText(c.canisterId) : c.canisterId;
        super({
          config: Object.assign(Object.assign(Object.assign({}, mf), c), { canisterId: a }),
          service: n
        });
        for (const [p, g] of n._fields)
          r != null && r.httpDetails && g.annotations.push(fo), this[p] = Up(this, p, g, c.blsVerify);
      }
    }
    return i;
  }
  static createActor(e, r) {
    if (!r.canisterId)
      throw new wt(`Canister ID is required, but received ${typeof r.canisterId} instead. If you are using automatically generated declarations, this may be because your application is not setting the canister ID in process.env correctly.`);
    return new (this.createActorClass(e))(r);
  }
  static createActorWithHttpDetails(e, r) {
    return new (this.createActorClass(e, { httpDetails: !0 }))(r);
  }
}
function oi(t, e) {
  const r = Hc(t, _c.Buffer.from(e));
  switch (r.length) {
    case 0:
      return;
    case 1:
      return r[0];
    default:
      return r;
  }
}
const mf = {
  pollingStrategyFactory: Tp
}, fo = "http-details";
function Up(t, e, r, n) {
  let i;
  r.annotations.includes("query") || r.annotations.includes("composite_query") ? i = async (c, ...a) => {
    var p, g;
    c = Object.assign(Object.assign({}, c), (g = (p = t[Nt].config).queryTransform) === null || g === void 0 ? void 0 : g.call(p, e, a, Object.assign(Object.assign({}, t[Nt].config), c)));
    const b = c.agent || t[Nt].config.agent || Ha(), T = Me.from(c.canisterId || t[Nt].config.canisterId), O = Ys(r.argTypes, a), B = await b.query(T, {
      methodName: e,
      arg: O,
      effectiveCanisterId: c.effectiveCanisterId
    });
    switch (B.status) {
      case "rejected":
        throw new Op(T, e, B);
      case "replied":
        return r.annotations.includes(fo) ? {
          httpDetails: B.httpDetails,
          result: oi(r.retTypes, B.reply.arg)
        } : oi(r.retTypes, B.reply.arg);
    }
  } : i = async (c, ...a) => {
    var p, g;
    c = Object.assign(Object.assign({}, c), (g = (p = t[Nt].config).callTransform) === null || g === void 0 ? void 0 : g.call(p, e, a, Object.assign(Object.assign({}, t[Nt].config), c)));
    const b = c.agent || t[Nt].config.agent || Ha(), { canisterId: T, effectiveCanisterId: O, pollingStrategyFactory: B } = Object.assign(Object.assign(Object.assign({}, mf), t[Nt].config), c), m = Me.from(T), I = O !== void 0 ? Me.from(O) : m, U = Ys(r.argTypes, a), { requestId: V, response: j } = await b.call(m, {
      methodName: e,
      arg: U,
      effectiveCanisterId: I
    });
    if (!j.ok || j.body)
      throw new Ip(m, e, V, j);
    const q = B(), ee = await df(b, I, V, q, n), k = r.annotations.includes(fo);
    if (ee !== void 0)
      return k ? {
        httpDetails: j,
        result: oi(r.retTypes, ee)
      } : oi(r.retTypes, ee);
    if (r.retTypes.length === 0)
      return k ? {
        httpDetails: j,
        result: void 0
      } : void 0;
    throw new Error(`Call was returned undefined, but type [${r.retTypes.join(",")}].`);
  };
  const s = (...c) => i({}, ...c);
  return s.withOptions = (c) => (...a) => i(c, ...a), s;
}
function qa(t) {
  function e(r, n) {
    if (t.effectiveCanisterId)
      return { effectiveCanisterId: Me.from(t.effectiveCanisterId) };
    const i = n[0];
    let s = Me.fromHex("");
    return i && typeof i == "object" && i.canister_id && (s = Me.from(i.canister_id)), { effectiveCanisterId: s };
  }
  return kn.createActor(Rp, Object.assign(Object.assign(Object.assign({}, t), { canisterId: Me.fromHex("") }), {
    callTransform: e,
    queryTransform: e
  }));
}
const Fp = ({ IDL: t }) => {
  const e = t.Variant({
    privateVisibility: t.Null,
    publicVisibility: t.Null,
    unlistedVisibility: t.Null
  }), r = t.Record({
    id: t.Text,
    isPublished: t.Bool,
    userId: t.Text,
    name: t.Text,
    biography: t.Text,
    greeting: t.Text,
    description: t.Text,
    summary: t.Opt(t.Text),
    visibility: e,
    avatar: t.Text
  }), n = t.Record({ status: t.Nat, message: t.Text }), i = t.Record({ messagesReplied: t.Nat }), s = t.Variant({ v1: i }), c = t.Record({
    id: t.Text,
    isPublished: t.Bool,
    userId: t.Text,
    name: t.Text,
    biography: t.Text,
    description: t.Text,
    avatar: t.Text
  }), a = t.Record({
    name: t.Text,
    biography: t.Text,
    greeting: t.Text,
    description: t.Text,
    visibility: e,
    avatar: t.Text
  });
  return t.Service({
    addWizard: t.Func([r], [n], []),
    deleteWizard: t.Func([t.Text], [n], []),
    getAllAnalytics: t.Func(
      [],
      [t.Vec(t.Tuple(t.Text, s))],
      ["query"]
    ),
    getAllWizards: t.Func([], [t.Vec(r)], []),
    getAnalytics: t.Func([t.Text], [i], ["query"]),
    getUserWizards: t.Func(
      [t.Text],
      [t.Vec(c)],
      ["query"]
    ),
    getWizard: t.Func([t.Text], [t.Opt(r)], ["query"]),
    getWizards: t.Func([], [t.Vec(c)], ["query"]),
    isWizardNameValid: t.Func([t.Text], [t.Bool], ["query"]),
    publishWizard: t.Func([t.Text], [n], []),
    unpublishWizard: t.Func([t.Text], [n], []),
    updateMessageAnalytics: t.Func([t.Text], [], []),
    updateWizard: t.Func([t.Text, a], [t.Text], [])
  });
}, Pp = "gichg-2iaaa-aaaah-adtia-cai", Cp = (t, e = {}) => {
  const r = new os({ host: "https://icp0.io" });
  return e.agent && e.agentOptions && console.warn(
    "Detected both agent and agentOptions passed to createActor. Ignoring agentOptions and proceeding with the provided agent."
  ), kn.createActor(Fp, {
    agent: r,
    canisterId: t,
    ...e.actorOptions
  });
}, Mp = Cp(Pp), kp = ({ IDL: t }) => {
  t.Record({
    external_service_url: t.Text,
    wizard_details_canister_id: t.Text,
    vectordb_canister_id: t.Text
  });
  const e = t.Record({ response: t.Text }), r = t.Record({ body: e, statusCode: t.Nat16 }), n = t.Variant({
    CantParseHost: t.Null,
    BodyNonSerializable: t.Null,
    ParseError: t.Null,
    HttpError: t.Text
  }), i = t.Variant({ Ok: r, Err: n }), s = t.Variant({
    NoError: t.Null,
    CanisterError: t.Null,
    SysTransient: t.Null,
    DestinationInvalid: t.Null,
    Unknown: t.Null,
    SysFatal: t.Null,
    CanisterReject: t.Null
  }), c = t.Variant({
    Ok: t.Text,
    Err: t.Tuple(s, t.Text)
  }), a = t.Variant({
    Ok: t.Vec(t.Text),
    Err: t.Tuple(s, t.Text)
  }), p = t.Record({ value: t.Text, name: t.Text }), g = t.Record({
    status: t.Nat,
    body: t.Vec(t.Nat8),
    headers: t.Vec(p)
  }), b = t.Record({
    context: t.Vec(t.Nat8),
    response: g
  });
  return t.Service({
    chat: t.Func(
      [t.Text, t.Text, t.Vec(t.Float32), t.Text],
      [i],
      []
    ),
    delete_collections_: t.Func([t.Text], [c], []),
    get_file_names: t.Func([t.Text], [a], []),
    transform: t.Func([b], [g], ["query"])
  });
}, $p = "bpsjh-6yaaa-aaaah-adyjq-cai", Hp = (t, e = {}) => {
  const r = e.agent || new os({ host: "https://icp0.io" });
  return e.agent && e.agentOptions && console.warn(
    "Detected both agent and agentOptions passed to createActor. Ignoring agentOptions and proceeding with the provided agent."
  ), kn.createActor(kp, {
    agent: r,
    canisterId: t,
    ...e.actorOptions
  });
}, qp = Hp($p), Lp = 52, La = 120, Vp = (t) => Object.keys(t).includes("Err"), Gp = (t) => {
  t.style.height = "inherit";
  let e = Math.min(
    Math.max(t.scrollHeight, Lp),
    La
  );
  t.style.height = `${e}px`, t.style.overflowY = e >= La ? "scroll" : "hidden";
};
/*! @license DOMPurify 3.1.7 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.1.7/LICENSE */
const {
  entries: gf,
  setPrototypeOf: Va,
  isFrozen: jp,
  getPrototypeOf: zp,
  getOwnPropertyDescriptor: Dp
} = Object;
let {
  freeze: pt,
  seal: Rt,
  create: yf
} = Object, {
  apply: lo,
  construct: ho
} = typeof Reflect < "u" && Reflect;
pt || (pt = function(e) {
  return e;
});
Rt || (Rt = function(e) {
  return e;
});
lo || (lo = function(e, r, n) {
  return e.apply(r, n);
});
ho || (ho = function(e, r) {
  return new e(...r);
});
const ai = St(Array.prototype.forEach), Ga = St(Array.prototype.pop), ln = St(Array.prototype.push), Fi = St(String.prototype.toLowerCase), Fs = St(String.prototype.toString), ja = St(String.prototype.match), hn = St(String.prototype.replace), Wp = St(String.prototype.indexOf), Yp = St(String.prototype.trim), kt = St(Object.prototype.hasOwnProperty), ht = St(RegExp.prototype.test), dn = Zp(TypeError);
function St(t) {
  return function(e) {
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      n[i - 1] = arguments[i];
    return lo(t, e, n);
  };
}
function Zp(t) {
  return function() {
    for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++)
      r[n] = arguments[n];
    return ho(t, r);
  };
}
function Pe(t, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Fi;
  Va && Va(t, null);
  let n = e.length;
  for (; n--; ) {
    let i = e[n];
    if (typeof i == "string") {
      const s = r(i);
      s !== i && (jp(e) || (e[n] = s), i = s);
    }
    t[i] = !0;
  }
  return t;
}
function Kp(t) {
  for (let e = 0; e < t.length; e++)
    kt(t, e) || (t[e] = null);
  return t;
}
function Nr(t) {
  const e = yf(null);
  for (const [r, n] of gf(t))
    kt(t, r) && (Array.isArray(n) ? e[r] = Kp(n) : n && typeof n == "object" && n.constructor === Object ? e[r] = Nr(n) : e[r] = n);
  return e;
}
function pn(t, e) {
  for (; t !== null; ) {
    const n = Dp(t, e);
    if (n) {
      if (n.get)
        return St(n.get);
      if (typeof n.value == "function")
        return St(n.value);
    }
    t = zp(t);
  }
  function r() {
    return null;
  }
  return r;
}
const za = pt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Ps = pt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Cs = pt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Xp = pt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Ms = pt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Jp = pt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Da = pt(["#text"]), Wa = pt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), ks = pt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Ya = pt(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), ci = pt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Qp = Rt(/\{\{[\w\W]*|[\w\W]*\}\}/gm), e1 = Rt(/<%[\w\W]*|[\w\W]*%>/gm), t1 = Rt(/\${[\w\W]*}/gm), r1 = Rt(/^data-[\-\w.\u00B7-\uFFFF]/), n1 = Rt(/^aria-[\-\w]+$/), wf = Rt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), i1 = Rt(/^(?:\w+script|data):/i), s1 = Rt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), bf = Rt(/^html$/i), o1 = Rt(/^[a-z][.\w]*(-[.\w]+)+$/i);
var Za = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  MUSTACHE_EXPR: Qp,
  ERB_EXPR: e1,
  TMPLIT_EXPR: t1,
  DATA_ATTR: r1,
  ARIA_ATTR: n1,
  IS_ALLOWED_URI: wf,
  IS_SCRIPT_OR_DATA: i1,
  ATTR_WHITESPACE: s1,
  DOCTYPE_NAME: bf,
  CUSTOM_ELEMENT: o1
});
const mn = {
  element: 1,
  attribute: 2,
  text: 3,
  cdataSection: 4,
  entityReference: 5,
  // Deprecated
  entityNode: 6,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9,
  documentType: 10,
  documentFragment: 11,
  notation: 12
  // Deprecated
}, a1 = function() {
  return typeof window > "u" ? null : window;
}, c1 = function(e, r) {
  if (typeof e != "object" || typeof e.createPolicy != "function")
    return null;
  let n = null;
  const i = "data-tt-policy-suffix";
  r && r.hasAttribute(i) && (n = r.getAttribute(i));
  const s = "dompurify" + (n ? "#" + n : "");
  try {
    return e.createPolicy(s, {
      createHTML(c) {
        return c;
      },
      createScriptURL(c) {
        return c;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + s + " could not be created."), null;
  }
};
function _f() {
  let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : a1();
  const e = (_e) => _f(_e);
  if (e.version = "3.1.7", e.removed = [], !t || !t.document || t.document.nodeType !== mn.document)
    return e.isSupported = !1, e;
  let {
    document: r
  } = t;
  const n = r, i = n.currentScript, {
    DocumentFragment: s,
    HTMLTemplateElement: c,
    Node: a,
    Element: p,
    NodeFilter: g,
    NamedNodeMap: b = t.NamedNodeMap || t.MozNamedAttrMap,
    HTMLFormElement: T,
    DOMParser: O,
    trustedTypes: B
  } = t, m = p.prototype, I = pn(m, "cloneNode"), U = pn(m, "remove"), V = pn(m, "nextSibling"), j = pn(m, "childNodes"), q = pn(m, "parentNode");
  if (typeof c == "function") {
    const _e = r.createElement("template");
    _e.content && _e.content.ownerDocument && (r = _e.content.ownerDocument);
  }
  let ee, k = "";
  const {
    implementation: J,
    createNodeIterator: K,
    createDocumentFragment: re,
    getElementsByTagName: ue
  } = r, {
    importNode: ie
  } = n;
  let pe = {};
  e.isSupported = typeof gf == "function" && typeof q == "function" && J && J.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: de,
    ERB_EXPR: N,
    TMPLIT_EXPR: P,
    DATA_ATTR: Y,
    ARIA_ATTR: z,
    IS_SCRIPT_OR_DATA: G,
    ATTR_WHITESPACE: Q,
    CUSTOM_ELEMENT: le
  } = Za;
  let {
    IS_ALLOWED_URI: ye
  } = Za, se = null;
  const Z = Pe({}, [...za, ...Ps, ...Cs, ...Ms, ...Da]);
  let ce = null;
  const w = Pe({}, [...Wa, ...ks, ...Ya, ...ci]);
  let ne = Object.seal(yf(null, {
    tagNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: !1
    }
  })), he = null, Ee = null, ae = !0, fe = !0, _ = !1, E = !0, S = !1, M = !0, F = !1, H = !1, h = !1, o = !1, u = !1, y = !1, x = !0, v = !1;
  const L = "user-content-";
  let oe = !0, me = !1, ge = {}, Be = null;
  const d = Pe({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let f = null;
  const l = Pe({}, ["audio", "video", "img", "source", "image", "track"]);
  let A = null;
  const C = Pe({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), W = "http://www.w3.org/1998/Math/MathML", D = "http://www.w3.org/2000/svg", Te = "http://www.w3.org/1999/xhtml";
  let Oe = Te, Re = !1, Se = null;
  const ke = Pe({}, [W, D, Te], Fs);
  let $e = null;
  const as = ["application/xhtml+xml", "text/html"], cs = "text/html";
  let Je = null, fr = null;
  const us = r.createElement("form"), tr = function($) {
    return $ instanceof RegExp || $ instanceof Function;
  }, Hn = function() {
    let $ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(fr && fr === $)) {
      if ((!$ || typeof $ != "object") && ($ = {}), $ = Nr($), $e = // eslint-disable-next-line unicorn/prefer-includes
      as.indexOf($.PARSER_MEDIA_TYPE) === -1 ? cs : $.PARSER_MEDIA_TYPE, Je = $e === "application/xhtml+xml" ? Fs : Fi, se = kt($, "ALLOWED_TAGS") ? Pe({}, $.ALLOWED_TAGS, Je) : Z, ce = kt($, "ALLOWED_ATTR") ? Pe({}, $.ALLOWED_ATTR, Je) : w, Se = kt($, "ALLOWED_NAMESPACES") ? Pe({}, $.ALLOWED_NAMESPACES, Fs) : ke, A = kt($, "ADD_URI_SAFE_ATTR") ? Pe(
        Nr(C),
        // eslint-disable-line indent
        $.ADD_URI_SAFE_ATTR,
        // eslint-disable-line indent
        Je
        // eslint-disable-line indent
      ) : C, f = kt($, "ADD_DATA_URI_TAGS") ? Pe(
        Nr(l),
        // eslint-disable-line indent
        $.ADD_DATA_URI_TAGS,
        // eslint-disable-line indent
        Je
        // eslint-disable-line indent
      ) : l, Be = kt($, "FORBID_CONTENTS") ? Pe({}, $.FORBID_CONTENTS, Je) : d, he = kt($, "FORBID_TAGS") ? Pe({}, $.FORBID_TAGS, Je) : {}, Ee = kt($, "FORBID_ATTR") ? Pe({}, $.FORBID_ATTR, Je) : {}, ge = kt($, "USE_PROFILES") ? $.USE_PROFILES : !1, ae = $.ALLOW_ARIA_ATTR !== !1, fe = $.ALLOW_DATA_ATTR !== !1, _ = $.ALLOW_UNKNOWN_PROTOCOLS || !1, E = $.ALLOW_SELF_CLOSE_IN_ATTR !== !1, S = $.SAFE_FOR_TEMPLATES || !1, M = $.SAFE_FOR_XML !== !1, F = $.WHOLE_DOCUMENT || !1, o = $.RETURN_DOM || !1, u = $.RETURN_DOM_FRAGMENT || !1, y = $.RETURN_TRUSTED_TYPE || !1, h = $.FORCE_BODY || !1, x = $.SANITIZE_DOM !== !1, v = $.SANITIZE_NAMED_PROPS || !1, oe = $.KEEP_CONTENT !== !1, me = $.IN_PLACE || !1, ye = $.ALLOWED_URI_REGEXP || wf, Oe = $.NAMESPACE || Te, ne = $.CUSTOM_ELEMENT_HANDLING || {}, $.CUSTOM_ELEMENT_HANDLING && tr($.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (ne.tagNameCheck = $.CUSTOM_ELEMENT_HANDLING.tagNameCheck), $.CUSTOM_ELEMENT_HANDLING && tr($.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (ne.attributeNameCheck = $.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), $.CUSTOM_ELEMENT_HANDLING && typeof $.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (ne.allowCustomizedBuiltInElements = $.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), S && (fe = !1), u && (o = !0), ge && (se = Pe({}, Da), ce = [], ge.html === !0 && (Pe(se, za), Pe(ce, Wa)), ge.svg === !0 && (Pe(se, Ps), Pe(ce, ks), Pe(ce, ci)), ge.svgFilters === !0 && (Pe(se, Cs), Pe(ce, ks), Pe(ce, ci)), ge.mathMl === !0 && (Pe(se, Ms), Pe(ce, Ya), Pe(ce, ci))), $.ADD_TAGS && (se === Z && (se = Nr(se)), Pe(se, $.ADD_TAGS, Je)), $.ADD_ATTR && (ce === w && (ce = Nr(ce)), Pe(ce, $.ADD_ATTR, Je)), $.ADD_URI_SAFE_ATTR && Pe(A, $.ADD_URI_SAFE_ATTR, Je), $.FORBID_CONTENTS && (Be === d && (Be = Nr(Be)), Pe(Be, $.FORBID_CONTENTS, Je)), oe && (se["#text"] = !0), F && Pe(se, ["html", "head", "body"]), se.table && (Pe(se, ["tbody"]), delete he.tbody), $.TRUSTED_TYPES_POLICY) {
        if (typeof $.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw dn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof $.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw dn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        ee = $.TRUSTED_TYPES_POLICY, k = ee.createHTML("");
      } else
        ee === void 0 && (ee = c1(B, i)), ee !== null && typeof k == "string" && (k = ee.createHTML(""));
      pt && pt($), fr = $;
    }
  }, fs = Pe({}, ["mi", "mo", "mn", "ms", "mtext"]), ls = Pe({}, ["annotation-xml"]), ko = Pe({}, ["title", "style", "font", "a", "script"]), We = Pe({}, [...Ps, ...Cs, ...Xp]), hs = Pe({}, [...Ms, ...Jp]), $o = function($) {
    let te = q($);
    (!te || !te.tagName) && (te = {
      namespaceURI: Oe,
      tagName: "template"
    });
    const be = Fi($.tagName), qe = Fi(te.tagName);
    return Se[$.namespaceURI] ? $.namespaceURI === D ? te.namespaceURI === Te ? be === "svg" : te.namespaceURI === W ? be === "svg" && (qe === "annotation-xml" || fs[qe]) : !!We[be] : $.namespaceURI === W ? te.namespaceURI === Te ? be === "math" : te.namespaceURI === D ? be === "math" && ls[qe] : !!hs[be] : $.namespaceURI === Te ? te.namespaceURI === D && !ls[qe] || te.namespaceURI === W && !fs[qe] ? !1 : !hs[be] && (ko[be] || !We[be]) : !!($e === "application/xhtml+xml" && Se[$.namespaceURI]) : !1;
  }, Ut = function($) {
    ln(e.removed, {
      element: $
    });
    try {
      q($).removeChild($);
    } catch {
      U($);
    }
  }, Gr = function($, te) {
    try {
      ln(e.removed, {
        attribute: te.getAttributeNode($),
        from: te
      });
    } catch {
      ln(e.removed, {
        attribute: null,
        from: te
      });
    }
    if (te.removeAttribute($), $ === "is" && !ce[$])
      if (o || u)
        try {
          Ut(te);
        } catch {
        }
      else
        try {
          te.setAttribute($, "");
        } catch {
        }
  }, qn = function($) {
    let te = null, be = null;
    if (h)
      $ = "<remove></remove>" + $;
    else {
      const Ae = ja($, /^[\r\n\t ]+/);
      be = Ae && Ae[0];
    }
    $e === "application/xhtml+xml" && Oe === Te && ($ = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + $ + "</body></html>");
    const qe = ee ? ee.createHTML($) : $;
    if (Oe === Te)
      try {
        te = new O().parseFromString(qe, $e);
      } catch {
      }
    if (!te || !te.documentElement) {
      te = J.createDocument(Oe, "template", null);
      try {
        te.documentElement.innerHTML = Re ? k : qe;
      } catch {
      }
    }
    const R = te.body || te.documentElement;
    return $ && be && R.insertBefore(r.createTextNode(be), R.childNodes[0] || null), Oe === Te ? ue.call(te, F ? "html" : "body")[0] : F ? te.documentElement : R;
  }, Ln = function($) {
    return K.call(
      $.ownerDocument || $,
      $,
      // eslint-disable-next-line no-bitwise
      g.SHOW_ELEMENT | g.SHOW_COMMENT | g.SHOW_TEXT | g.SHOW_PROCESSING_INSTRUCTION | g.SHOW_CDATA_SECTION,
      null
    );
  }, Vn = function($) {
    return $ instanceof T && (typeof $.nodeName != "string" || typeof $.textContent != "string" || typeof $.removeChild != "function" || !($.attributes instanceof b) || typeof $.removeAttribute != "function" || typeof $.setAttribute != "function" || typeof $.namespaceURI != "string" || typeof $.insertBefore != "function" || typeof $.hasChildNodes != "function");
  }, je = function($) {
    return typeof a == "function" && $ instanceof a;
  }, Ft = function($, te, be) {
    pe[$] && ai(pe[$], (qe) => {
      qe.call(e, te, be, fr);
    });
  }, Gn = function($) {
    let te = null;
    if (Ft("beforeSanitizeElements", $, null), Vn($))
      return Ut($), !0;
    const be = Je($.nodeName);
    if (Ft("uponSanitizeElement", $, {
      tagName: be,
      allowedTags: se
    }), $.hasChildNodes() && !je($.firstElementChild) && ht(/<[/\w]/g, $.innerHTML) && ht(/<[/\w]/g, $.textContent) || $.nodeType === mn.progressingInstruction || M && $.nodeType === mn.comment && ht(/<[/\w]/g, $.data))
      return Ut($), !0;
    if (!se[be] || he[be]) {
      if (!he[be] && zn(be) && (ne.tagNameCheck instanceof RegExp && ht(ne.tagNameCheck, be) || ne.tagNameCheck instanceof Function && ne.tagNameCheck(be)))
        return !1;
      if (oe && !Be[be]) {
        const qe = q($) || $.parentNode, R = j($) || $.childNodes;
        if (R && qe) {
          const Ae = R.length;
          for (let ve = Ae - 1; ve >= 0; --ve) {
            const Ne = I(R[ve], !0);
            Ne.__removalCount = ($.__removalCount || 0) + 1, qe.insertBefore(Ne, V($));
          }
        }
      }
      return Ut($), !0;
    }
    return $ instanceof p && !$o($) || (be === "noscript" || be === "noembed" || be === "noframes") && ht(/<\/no(script|embed|frames)/i, $.innerHTML) ? (Ut($), !0) : (S && $.nodeType === mn.text && (te = $.textContent, ai([de, N, P], (qe) => {
      te = hn(te, qe, " ");
    }), $.textContent !== te && (ln(e.removed, {
      element: $.cloneNode()
    }), $.textContent = te)), Ft("afterSanitizeElements", $, null), !1);
  }, jn = function($, te, be) {
    if (x && (te === "id" || te === "name") && (be in r || be in us))
      return !1;
    if (!(fe && !Ee[te] && ht(Y, te))) {
      if (!(ae && ht(z, te))) {
        if (!ce[te] || Ee[te]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(zn($) && (ne.tagNameCheck instanceof RegExp && ht(ne.tagNameCheck, $) || ne.tagNameCheck instanceof Function && ne.tagNameCheck($)) && (ne.attributeNameCheck instanceof RegExp && ht(ne.attributeNameCheck, te) || ne.attributeNameCheck instanceof Function && ne.attributeNameCheck(te)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            te === "is" && ne.allowCustomizedBuiltInElements && (ne.tagNameCheck instanceof RegExp && ht(ne.tagNameCheck, be) || ne.tagNameCheck instanceof Function && ne.tagNameCheck(be)))
          ) return !1;
        } else if (!A[te]) {
          if (!ht(ye, hn(be, Q, ""))) {
            if (!((te === "src" || te === "xlink:href" || te === "href") && $ !== "script" && Wp(be, "data:") === 0 && f[$])) {
              if (!(_ && !ht(G, hn(be, Q, "")))) {
                if (be)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, zn = function($) {
    return $ !== "annotation-xml" && ja($, le);
  }, Dn = function($) {
    Ft("beforeSanitizeAttributes", $, null);
    const {
      attributes: te
    } = $;
    if (!te)
      return;
    const be = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: ce
    };
    let qe = te.length;
    for (; qe--; ) {
      const R = te[qe], {
        name: Ae,
        namespaceURI: ve,
        value: Ne
      } = R, jt = Je(Ae);
      let Ye = Ae === "value" ? Ne : Yp(Ne);
      if (be.attrName = jt, be.attrValue = Ye, be.keepAttr = !0, be.forceKeepAttr = void 0, Ft("uponSanitizeAttribute", $, be), Ye = be.attrValue, be.forceKeepAttr || (Gr(Ae, $), !be.keepAttr))
        continue;
      if (!E && ht(/\/>/i, Ye)) {
        Gr(Ae, $);
        continue;
      }
      S && ai([de, N, P], (Ho) => {
        Ye = hn(Ye, Ho, " ");
      });
      const ps = Je($.nodeName);
      if (jn(ps, jt, Ye)) {
        if (v && (jt === "id" || jt === "name") && (Gr(Ae, $), Ye = L + Ye), M && ht(/((--!?|])>)|<\/(style|title)/i, Ye)) {
          Gr(Ae, $);
          continue;
        }
        if (ee && typeof B == "object" && typeof B.getAttributeType == "function" && !ve)
          switch (B.getAttributeType(ps, jt)) {
            case "TrustedHTML": {
              Ye = ee.createHTML(Ye);
              break;
            }
            case "TrustedScriptURL": {
              Ye = ee.createScriptURL(Ye);
              break;
            }
          }
        try {
          ve ? $.setAttributeNS(ve, Ae, Ye) : $.setAttribute(Ae, Ye), Vn($) ? Ut($) : Ga(e.removed);
        } catch {
        }
      }
    }
    Ft("afterSanitizeAttributes", $, null);
  }, ds = function _e($) {
    let te = null;
    const be = Ln($);
    for (Ft("beforeSanitizeShadowDOM", $, null); te = be.nextNode(); )
      Ft("uponSanitizeShadowNode", te, null), !Gn(te) && (te.content instanceof s && _e(te.content), Dn(te));
    Ft("afterSanitizeShadowDOM", $, null);
  };
  return e.sanitize = function(_e) {
    let $ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, te = null, be = null, qe = null, R = null;
    if (Re = !_e, Re && (_e = "<!-->"), typeof _e != "string" && !je(_e))
      if (typeof _e.toString == "function") {
        if (_e = _e.toString(), typeof _e != "string")
          throw dn("dirty is not a string, aborting");
      } else
        throw dn("toString is not a function");
    if (!e.isSupported)
      return _e;
    if (H || Hn($), e.removed = [], typeof _e == "string" && (me = !1), me) {
      if (_e.nodeName) {
        const Ne = Je(_e.nodeName);
        if (!se[Ne] || he[Ne])
          throw dn("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (_e instanceof a)
      te = qn("<!---->"), be = te.ownerDocument.importNode(_e, !0), be.nodeType === mn.element && be.nodeName === "BODY" || be.nodeName === "HTML" ? te = be : te.appendChild(be);
    else {
      if (!o && !S && !F && // eslint-disable-next-line unicorn/prefer-includes
      _e.indexOf("<") === -1)
        return ee && y ? ee.createHTML(_e) : _e;
      if (te = qn(_e), !te)
        return o ? null : y ? k : "";
    }
    te && h && Ut(te.firstChild);
    const Ae = Ln(me ? _e : te);
    for (; qe = Ae.nextNode(); )
      Gn(qe) || (qe.content instanceof s && ds(qe.content), Dn(qe));
    if (me)
      return _e;
    if (o) {
      if (u)
        for (R = re.call(te.ownerDocument); te.firstChild; )
          R.appendChild(te.firstChild);
      else
        R = te;
      return (ce.shadowroot || ce.shadowrootmode) && (R = ie.call(n, R, !0)), R;
    }
    let ve = F ? te.outerHTML : te.innerHTML;
    return F && se["!doctype"] && te.ownerDocument && te.ownerDocument.doctype && te.ownerDocument.doctype.name && ht(bf, te.ownerDocument.doctype.name) && (ve = "<!DOCTYPE " + te.ownerDocument.doctype.name + `>
` + ve), S && ai([de, N, P], (Ne) => {
      ve = hn(ve, Ne, " ");
    }), ee && y ? ee.createHTML(ve) : ve;
  }, e.setConfig = function() {
    let _e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Hn(_e), H = !0;
  }, e.clearConfig = function() {
    fr = null, H = !1;
  }, e.isValidAttribute = function(_e, $, te) {
    fr || Hn({});
    const be = Je(_e), qe = Je($);
    return jn(be, qe, te);
  }, e.addHook = function(_e, $) {
    typeof $ == "function" && (pe[_e] = pe[_e] || [], ln(pe[_e], $));
  }, e.removeHook = function(_e) {
    if (pe[_e])
      return Ga(pe[_e]);
  }, e.removeHooks = function(_e) {
    pe[_e] && (pe[_e] = []);
  }, e.removeAllHooks = function() {
    pe = {};
  }, e;
}
var u1 = _f(), f1 = Object.defineProperty, l1 = Object.getOwnPropertyDescriptor, $n = (t, e, r, n) => {
  for (var i = n > 1 ? void 0 : n ? l1(e, r) : e, s = t.length - 1, c; s >= 0; s--)
    (c = t[s]) && (i = (n ? c(e, r, i) : c(i)) || i);
  return n && i && f1(e, r, i), i;
};
let qr = class extends mo {
  constructor() {
    super(...arguments), this.isBot = !1, this.botImage = "", this.isLoading = !1, this.message = "";
  }
  render() {
    return gt`<div
      class=${wn({
      "chat-bubble": !0,
      "chat-bubble--user": !this.isBot
    })}
    >
      ${this.isBot ? gt`<div class="chat-bubble__name">
            <img src=${this.botImage} alt="bot avatar" />
          </div>` : ""}
      <div>
        <div
          class=${wn({
      "chat-bubble__message--wrapper": !0,
      "chat-bubble__message--wrapper--user": !this.isBot,
      "chat-bubble__message--wrapper--bot": this.isBot
    })}
        >
          ${this.isLoading ? gt`<div class="typing">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
              </div>` : gt`<div class="chat-bubble__message">
                ${u1.sanitize(this.message)}
              </div>`}
        </div>
      </div>
    </div>`;
  }
};
qr.styles = po`
    .chat-bubble {
      margin-top: 0.5rem;
      display: flex;
      width: calc(100% - 1rem);
      gap: 0.5rem;
    }

    .chat-bubble--user {
      flex-direction: row-reverse;
      margin-left: 1rem;
    }

    .chat-bubble__wrapper--user {
      flex-direction: row-reverse;
      align-self: flex-end;
    }

    .chat-bubble__name img {
      display: flex;
      align-items: center;
      justify-content: center;
      color: #000804;
      width: 2rem;
      height: 2rem;
      border-radius: 0.25rem;
      padding: 0.25rem;
    }

    .chat-bubble__message {
      white-space: pre-line;
      font-size: 13px;
      line-height: 1.35;
    }

    .chat-bubble__message--wrapper {
      min-width: 100%;
      max-width: 24rem;
      padding: 0.75rem;
    }

    .chat-bubble__message--wrapper--bot {
      background-color: #ececec;
      border-bottom-left-radius: 1rem;
      color: #000804;
      border-bottom-right-radius: 1rem;
      border-top-right-radius: 1rem;
    }

    .chat-bubble__message--wrapper--user {
      color: #fff;
      border-top-left-radius: 1rem;
      border-bottom-left-radius: 1rem;
      border-bottom-right-radius: 1rem;
      background-color: var(--elna-primary-user-color);
    }

    .typing {
      align-items: center;
      display: flex;
      height: 17px;

      .dot {
        animation: dotTypingAnimation 1.8s infinite ease-in-out;
        background-color: #99cbcf;
        opacity: 1;
        height: 5px;
        border-radius: 50%;
        margin-right: 0.25rem;
        vertical-align: middle;
        width: 5px;
        display: inline-block;

        &:nth-child(1) {
          animation-delay: 200ms;
        }

        &:nth-child(2) {
          animation-delay: 300ms;
        }

        &:nth-child(3) {
          animation-delay: 400ms;
        }

        &:last-child {
          margin-right: 0;
        }
      }
    }

    @keyframes dotTypingAnimation {
      0% {
        transform: translateY(0px);
        background-color: #99cbcf;
        opacity: 1;
      }

      28% {
        transform: translateY(-7px);
        background-color: #99cbcf;
        opacity: 0.9;
      }

      44% {
        transform: translateY(0px);
        background-color: #99cbcf;
        opacity: 0.8;
      }
    }
  `;
$n([
  Et({ type: Boolean })
], qr.prototype, "isBot", 2);
$n([
  Et({ type: String })
], qr.prototype, "botImage", 2);
$n([
  Et({ type: Boolean })
], qr.prototype, "isLoading", 2);
$n([
  Et({ type: String })
], qr.prototype, "message", 2);
qr = $n([
  go("elna-chat-bubble")
], qr);
var h1 = Object.defineProperty, d1 = Object.getOwnPropertyDescriptor, It = (t, e, r, n) => {
  for (var i = n > 1 ? void 0 : n ? d1(e, r) : e, s = t.length - 1, c; s >= 0; s--)
    (c = t[s]) && (i = (n ? c(e, r, i) : c(i)) || i);
  return n && i && h1(e, r, i), i;
};
let xt = class extends mo {
  constructor() {
    super(...arguments), this.inputDate = /* @__PURE__ */ new Date(), this.headerBackgroundColor = "", this.agentDescription = "", this.agentId = "", this.logo = "", this.error = "", this.isLoading = !0, this.messages = [], this.isResponseLoading = !1, this.inputMessage = "", this.fetchFromPinata = async (t) => {
      const e = `https://gateway.pinata.cloud/ipfs/${t}`;
      try {
        return (await Ke.get(e)).data;
      } catch (r) {
        return console.error("Error fetching from Pinata:", r), null;
      }
    };
  }
  render() {
    var t;
    return gt` <div class="chat-wrapper">
      <header
        class="chat-header"
        style=${xf({ background: this.headerBackgroundColor })}
        @click=${() => {
      this.dispatchEvent(
        new CustomEvent("toggle-open", { bubbles: !0, composed: !0 })
      );
    }}
      >
        <div class="chat-header__wrapper">
          <img
            src=${this.logo}
            alt="agent avatar"
            class="chat-header__avatar"
          />
          <div>
            <h3 class="chat-header__title">${(t = this.wizard) == null ? void 0 : t.name}</h3>
            <div class="chat-header__description">
              ${this.agentDescription}
            </div>
          </div>
          <p class="chat-header__close">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.0001 19.1643L18.2072 12.9572L16.793 11.543L12.0001 16.3359L7.20718 11.543L5.79297 12.9572L12.0001 19.1643ZM12.0001 13.5144L18.2072 7.30728L16.793 5.89307L12.0001 10.686L7.20718 5.89307L5.79297 7.30728L12.0001 13.5144Z"
                fill="rgba(249,249,249,1)"
              ></path>
            </svg>
          </p>
        </div>
      </header>
      ${this.isLoading ? gt`<div style="color:black">Loading agent details</div>` : ""}
      ${!this.isLoading && this.error !== "" ? gt`<div style="color:black">${this.error}</div>` : ""}
      ${!this.isLoading && this.error === "" ? gt`<div class="chat-body">
            <div class="chat-body-wrapper">
              ${this.messages.length > 0 ? gt`${this.messages.map(
      (e) => gt`<elna-chat-bubble
                        ?isBot=${e.user.isBot}
                        message=${e.message}
                        botImage=${this.logo}
                      />`
    )}
                  ${this.isResponseLoading ? gt`<elna-chat-bubble
                        botImage=${this.logo}
                        isBot
                        isLoading
                      />` : ""} ` : gt`<div>No History</div>`}
            </div>
          </div>` : ""}
      ${this.renderFooter()}
    </div>`;
  }
  renderFooter() {
    var t;
    return gt`<div class="chat-footer">
      <div class="chat-footer__warning">
        <span>Heads up: </span>
        <span class="chat-footer__warning__name">${(t = this.wizard) == null ? void 0 : t.name}</span>
        <span> might slip up; double-check crucial info.</span>
      </div>
      <div class="chat-footer__input-wrapper">
      <input
        type="date"
        class="chat-footer__input-wrapper__date"
        .value=${this.inputDate ? this.inputDate.toISOString().split("T")[0] : ""}
        @input=${this.setDate}
      />
        <textarea
          placeholder="Write a reply"
          class="chat-footer__input-wrapper__input"
          .value=${this.inputMessage}
          @input=${this.setMessage}
          @keydown=${this.handleKeyDown}
          rows="1"
        ></textarea>
        <button
          @click=${this.handleSubmit}
          class="chat-footer__input-wrapper__button"
          ?disabled=${!this.inputMessage.trim() || this.isResponseLoading}
        >
          <img src=${e0} alt="send icon" />
        </button>
      </div>
      <div class="chat-footer__wrapper">
        <a
          class="chat-footer__wrapper__link"
          href="https://dapp.elna.ai/"
          rel="noreferrer noopener"
          target="_blank"
        >
          <span>POWERED BY </span>
          <img src=${Ql} alt="elna logo" />
        </a>
      </div>
    </div>`;
  }
  async connectedCallback() {
    super.connectedCallback(), window.global = window, this.getAgent(this.agentId);
  }
  setMessage(t) {
    const e = t.target;
    this.inputMessage = e.value, Gp(e);
  }
  handleKeyDown(t) {
    t.key === "Enter" && this.inputMessage.trim() && !this.isResponseLoading && (t.preventDefault(), this.handleSubmit());
  }
  setDate(t) {
    const e = t.target;
    this.inputDate = new Date(e.value);
  }
  async handleSubmit() {
    this.messages = [
      ...this.messages,
      {
        user: { name: "User", isBot: !1 },
        message: this.inputMessage.trim(),
        date: this.inputDate
      }
    ], this.sendChat(this.agentId, this.inputMessage.trim(), this.inputDate);
  }
  async getAgent(t) {
    const e = await Mp.getWizard(t);
    if (e[0]) {
      this.wizard = e[0];
      const r = {
        user: { name: e[0].name, isBot: !0 },
        message: e[0].greeting,
        date: this.inputDate
      };
      this.messages = [...this.messages, r], this.error = "";
    } else
      this.error = "Unable to load agent. Please contact support";
    this.isLoading = !1;
  }
  async sendChat(t, e, r) {
    console.log(r);
    const i = await this.fetchFromPinata("QmRDDSqJHL3ZgLugFoKiAs33gLMfsYfCHPVAsfHK29RCmu");
    i ? console.log("Data retrieved from hash:", i) : console.log("No data retrieved or error occurred."), this.isResponseLoading = !0;
    const s = await Jl(e);
    console.log(s);
    const c = await qp.chat(
      t,
      e + "This is what i did on that day" + i,
      s,
      crypto.randomUUID()
    );
    if (Vp(c)) {
      this.isResponseLoading = !1, this.messages = [
        ...this.messages,
        {
          user: { isBot: !0, name: this.wizard.name },
          message: "Something went wrong please send the message again",
          date: r
        }
      ];
      return;
    }
    this.messages = [
      ...this.messages,
      {
        user: { isBot: !0, name: this.wizard.name },
        message: c.Ok.body.response,
        date: r
      }
    ], this.inputMessage = "", this.isResponseLoading = !1;
  }
};
xt.styles = po`
    .chat-wrapper {
      display: grid;
      height: 100%;
      grid-template-rows: auto 1fr auto;
    }

    .chat-header {
      text-align: left;
      background-size: cover;
      border-top-left-radius: 1rem;
      border-top-right-radius: 1rem;
      cursor: pointer;
    }

    .chat-header__wrapper {
      display: flex;
      align-items: center;
      padding: 0.25rem 0.5rem;
      gap: 1rem;
    }

    .chat-header__title {
      font-weight: 800;
      margin: 0;
      line-height: 20px;
    }

    .chat-header__description {
      font-weight: 400;
      font-size: 10px;

      line-height: 15px;
    }

    .chat-header__close {
      margin: 0;
      margin-left: auto;
      cursor: pointer;
    }

    .chat-header__avatar {
      flex-shrink: 0;
      max-width: 30px;
      max-height: 30px;
      border-radius: 8px;
    }

    .chat-header__wrapper img {
      background-color: #000200;
      border: 1px solid rgb(255 255 255 / 30%);
    }

    .chat-body {
      width: 100%;
      overflow-y: auto;
      overflow-x: hidden;
    }

    .chat-body-wrapper {
      margin: 0.5rem;
    }

    .chat-footer {
      padding: 0.5rem 1rem;
    }

    .chat-footer__warning {
      font-size: 10px;
      background-color: #7e7e801a;
      color: #ff0000b2;
      border-top-right-radius: 4px;
      border-top-left-radius: 4px;
      padding: 0.25rem 0.5rem;
      margin: 0 auto;
      margin-top: 0.5rem;
      width: max-content;
    }

    .chat-footer__warning__name {
      font-weight: 600;
    }

    .chat-footer__input-wrapper {
      position: relative;
    }

    .chat-footer__input-wrapper__input {
      color: #000804;
      width: 80%;
      background-color: transparent;
      resize: none;
      border: 1px solid #cacfd5;
      margin-top: 0;
      font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
      border-radius: 0.5rem;
      padding-bottom: 0.875rem;
      padding-top: 0.875rem;
      padding-left: 1rem;
      padding-right: 3rem;
      font-size: 14px;
    }

    .chat-footer__input-wrapper__input:focus,
    .chat-footer__input-wrapper__input:focus-visible {
      outline: none;
      color: #000804;
    }

    .chat-footer__input-wrapper__input::placeholder {
      color: #00080457;
    }

    .chat-footer__input-wrapper__button {
      position: absolute;
      right: 14px;
      bottom: 16px;
      background-color: #020202;
      width: 32px;
      height: 32px;
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .chat-footer__input-wrapper__button:hover {
      border: transparent;
      border-radius: 8px;
    }

    .chat-footer__input-wrapper__button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .chat-footer__input-wrapper__button:focus,
    .chat-footer__input-wrapper__button:focus-visible {
      outline: none;
    }

    .chat-footer__wrapper {
      display: flex;
      justify-content: center;
    }

    .chat-footer__wrapper__link {
      display: flex;
      justify-content: center;
      font-size: 8px;
      gap: 0.25rem;
      align-items: center;
      color: rgb(0 8 4 / 40%);
    }

    .chat-footer__wrapper__link svg {
      height: 15px;
    }

    .chat-footer__wrapper__link:hover {
      color: rgb(0 8 4 / 40%);
    }

    @media only screen and (min-width: 300px) and (max-width: 699px) {
      .chat-footer__input-wrapper__input {
        padding: 0.875rem 3.9rem 0.875rem 1rem;
      }
    }
  `;
It([
  Lr()
], xt.prototype, "inputDate", 2);
It([
  Et()
], xt.prototype, "headerBackgroundColor", 2);
It([
  Et()
], xt.prototype, "agentDescription", 2);
It([
  Et()
], xt.prototype, "agentId", 2);
It([
  Et()
], xt.prototype, "logo", 2);
It([
  Lr()
], xt.prototype, "error", 2);
It([
  Lr()
], xt.prototype, "isLoading", 2);
It([
  Lr()
], xt.prototype, "messages", 2);
It([
  Lr()
], xt.prototype, "isResponseLoading", 2);
It([
  Lr()
], xt.prototype, "wizard", 2);
It([
  Lr()
], xt.prototype, "inputMessage", 2);
xt = It([
  go("elna-chat")
], xt);
var p1 = Object.defineProperty, m1 = Object.getOwnPropertyDescriptor, Vr = (t, e, r, n) => {
  for (var i = n > 1 ? void 0 : n ? m1(e, r) : e, s = t.length - 1, c; s >= 0; s--)
    (c = t[s]) && (i = (n ? c(e, r, i) : c(i)) || i);
  return n && i && p1(e, r, i), i;
};
let ur = class extends mo {
  constructor() {
    super(), this.agentId = "", this.title = "Support", this.description = "Hi there! 🚀  Ask me any questions", this.logo = "", this.headerBackgroundColor = "", this.open = !1, this.addEventListener("toggle-open", () => {
      this.open = !this.open;
    });
  }
  render() {
    return gt`
      <div
        class=${wn({
      widget__box: !0,
      "widget__box--close": !this.open
    })}
      >
        <div
          class=${wn({
      widget__title: !0,
      "widget__title--open": this.open
    })}
          @click=${() => {
      this.open = !this.open;
    }}
        >
          <div class="widget__title__group">
            <img
              src=${this.logo}
              alt="logo"
              class="widget__title__group__image"
            />
            <div>
              <div class="widget__title__group__title">${this.title}</div>
              <div class="widget__title__group__description">
                ${this.description}
              </div>
            </div>
          </div>
          <img src=${Ef} alt="down arrow" />
        </div>
        <div
          class=${wn({
      widget__chat: !0,
      "widget__chat--close": !this.open
    })}
        >
          <elna-chat
            agentId=${this.agentId}
            agentDescription=${this.description}
            headerBackgroundColor=${this.headerBackgroundColor}
            logo=${this.logo}
          ></elna-chat>
        </div>
      </div>
    `;
  }
};
ur.styles = po`
    :host {
      --elna-primary-600: var(--elna-primary-600, #007d88);
      --elna-dark-primary-600: var(--elna-dark-primary-600, #03fd8e);
      --elna-green-600: var(--elna-green-600, rgb(22 163 74));
      --elna-primary-color: var(--elna-primary-600, #007d88);
      --elna-title-color: var(--elna-dark-primary-600, #03fd8e);
      --elna-primary-user-color: var(--elna-primary-user-color, #158152);
    }

    .widget__icon {
      width: 50px;
      height: 50px;
      position: fixed;
      right: 0;
      bottom: 0;
      border-radius: 9999px;
      background-color: var(--elna-primary-color);
      padding: 0.25rem;
      box-shadow:
        0 1px 6px 0 rgba(0, 0, 0, 0.06),
        0 2px 32px 0 rgba(0, 0, 0, 0.16);
      transition: transform 167ms cubic-bezier(0.33, 0, 0, 1);
      box-sizing: content-box;
      border-top-left-radius: 1rem;
      border-top-right-radius: 1rem;
    }

    .widget__icon:hover {
      transition: transform 250ms cubic-bezier(0.33, 0, 0, 1);
      transform: scale(1.1);
    }

    .widget__icon__img {
      width: 30px;
      height: 30px;
    }

    .widget__box {
      margin: 0px 10px 0px 0px;
      z-index: 2500;
      position: fixed;
      bottom: 0;
      right: 0;
      transform-origin: right bottom;
      height: min(520px, 100% - 104px);
      min-height: 80px;
      width: 360px;
      max-height: 520px;
      overflow: hidden;
      opacity: 1;
      box-shadow: #00000061 0 5px 40px;
      transition:
        width.2s ease 0s,
        height.2s ease 0s,
        max-height.2s ease 0s,
        transform.3s cubic-bezier(0, 1.2, 1, 1) 0s,
        opacity 83ms ease-out 0s;
      pointer-events: all;
      display: flex;
      flex-direction: column;
      border-top-left-radius: 1rem;
      border-top-right-radius: 1rem;
    }

    .widget__box--close {
      box-shadow: none;
      height: min-content;
    }

    .widget__title {
      display: flex;
      justify-content: space-between;
      background-color: var(--elna-title-color);
      color: #000804;
      margin-top: auto;
      padding: 0.25rem 0.75rem;
      height: 58px;
      border-top-left-radius: 1rem;
      border-top-right-radius: 1rem;
      border: 1px solid #5ffeb8;
      display: flex;
      align-items: center;
      cursor: pointer;
      box-shadow: #03fd8e 0 5px 20px;
      margin-left: 30px;
      margin-right: 30px;
    }

    .widget__title__group {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .widget__title__group__image {
      max-width: 40px;
      height: auto;
      background-color: #000200;
      border-radius: 0.25rem;
    }

    .widget__title__group__title {
      font-weight: 700;
      font-size: 16px;
      line-height: 20px;
    }

    .widget__title__group__description {
      font-weight: 400;
      font-size: 10px;
      line-height: 15px;
    }

    .widget__title--open {
      display: none;
    }

    .widget__chat {
      display: block;
      background-color: #eff5fd;
      height: 100%;
      border-top-left-radius: 1.5rem;
      border-top-right-radius: 1.5rem;
    }

    .widget__chat--close {
      display: none;
    }

    @media only screen and (min-width: 300px) and (max-width: 699px) {
      .widget__box {
        width: 345px;
        max-height: 420px;
      }
    }
  `;
Vr([
  Et({ type: String })
], ur.prototype, "agentId", 2);
Vr([
  Et()
], ur.prototype, "title", 2);
Vr([
  Et()
], ur.prototype, "description", 2);
Vr([
  Et()
], ur.prototype, "logo", 2);
Vr([
  Et()
], ur.prototype, "headerBackgroundColor", 2);
Vr([
  Et({ type: Boolean })
], ur.prototype, "open", 2);
ur = Vr([
  go("elna-chat-widget")
], ur);
export {
  ur as ElnaChatWidget
};
