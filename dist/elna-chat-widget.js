import { css as To, LitElement as Ao, html as wt } from "lit";
import { property as Tt, customElement as So, state as Yr } from "lit/decorators.js";
import { classMap as Un } from "lit/directives/class-map.js";
import { styleMap as Pf } from "lit/directives/style-map.js";
const Cf = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20%3e%3cpath%20d='M12.0001%204.83594L5.79297%2011.043L7.20718%2012.4573L12.0001%207.66436L16.793%2012.4573L18.2072%2011.043L12.0001%204.83594ZM12.0001%2010.4858L5.79297%2016.6929L7.20718%2018.1072L12.0001%2013.3143L16.793%2018.1072L18.2072%2016.6929L12.0001%2010.4858Z'%20fill='black'%20/%3e%3c/svg%3e";
function oc(t, e) {
  return function() {
    return t.apply(e, arguments);
  };
}
const { toString: Mf } = Object.prototype, { getPrototypeOf: Bo } = Object, ts = /* @__PURE__ */ ((t) => (e) => {
  const r = Mf.call(e);
  return t[r] || (t[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Wt = (t) => (t = t.toLowerCase(), (e) => ts(e) === t), rs = (t) => (e) => typeof e === t, { isArray: pn } = Array, kn = rs("undefined");
function kf(t) {
  return t !== null && !kn(t) && t.constructor !== null && !kn(t.constructor) && St(t.constructor.isBuffer) && t.constructor.isBuffer(t);
}
const ac = Wt("ArrayBuffer");
function $f(t) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && ac(t.buffer), e;
}
const qf = rs("string"), St = rs("function"), cc = rs("number"), ns = (t) => t !== null && typeof t == "object", Hf = (t) => t === !0 || t === !1, bi = (t) => {
  if (ts(t) !== "object")
    return !1;
  const e = Bo(t);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t);
}, Vf = Wt("Date"), Lf = Wt("File"), Gf = Wt("Blob"), jf = Wt("FileList"), zf = (t) => ns(t) && St(t.pipe), Wf = (t) => {
  let e;
  return t && (typeof FormData == "function" && t instanceof FormData || St(t.append) && ((e = ts(t)) === "formdata" || // detect form-data instance
  e === "object" && St(t.toString) && t.toString() === "[object FormData]"));
}, Df = Wt("URLSearchParams"), [Yf, Zf, Kf, Xf] = ["ReadableStream", "Request", "Response", "Headers"].map(Wt), Jf = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Ln(t, e, { allOwnKeys: r = !1 } = {}) {
  if (t === null || typeof t > "u")
    return;
  let n, i;
  if (typeof t != "object" && (t = [t]), pn(t))
    for (n = 0, i = t.length; n < i; n++)
      e.call(null, t[n], n, t);
  else {
    const s = r ? Object.getOwnPropertyNames(t) : Object.keys(t), c = s.length;
    let a;
    for (n = 0; n < c; n++)
      a = s[n], e.call(null, t[a], a, t);
  }
}
function uc(t, e) {
  e = e.toLowerCase();
  const r = Object.keys(t);
  let n = r.length, i;
  for (; n-- > 0; )
    if (i = r[n], e === i.toLowerCase())
      return i;
  return null;
}
const kr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, fc = (t) => !kn(t) && t !== kr;
function Ys() {
  const { caseless: t } = fc(this) && this || {}, e = {}, r = (n, i) => {
    const s = t && uc(e, i) || i;
    bi(e[s]) && bi(n) ? e[s] = Ys(e[s], n) : bi(n) ? e[s] = Ys({}, n) : pn(n) ? e[s] = n.slice() : e[s] = n;
  };
  for (let n = 0, i = arguments.length; n < i; n++)
    arguments[n] && Ln(arguments[n], r);
  return e;
}
const Qf = (t, e, r, { allOwnKeys: n } = {}) => (Ln(e, (i, s) => {
  r && St(i) ? t[s] = oc(i, r) : t[s] = i;
}, { allOwnKeys: n }), t), el = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t), tl = (t, e, r, n) => {
  t.prototype = Object.create(e.prototype, n), t.prototype.constructor = t, Object.defineProperty(t, "super", {
    value: e.prototype
  }), r && Object.assign(t.prototype, r);
}, rl = (t, e, r, n) => {
  let i, s, c;
  const a = {};
  if (e = e || {}, t == null) return e;
  do {
    for (i = Object.getOwnPropertyNames(t), s = i.length; s-- > 0; )
      c = i[s], (!n || n(c, t, e)) && !a[c] && (e[c] = t[c], a[c] = !0);
    t = r !== !1 && Bo(t);
  } while (t && (!r || r(t, e)) && t !== Object.prototype);
  return e;
}, nl = (t, e, r) => {
  t = String(t), (r === void 0 || r > t.length) && (r = t.length), r -= e.length;
  const n = t.indexOf(e, r);
  return n !== -1 && n === r;
}, il = (t) => {
  if (!t) return null;
  if (pn(t)) return t;
  let e = t.length;
  if (!cc(e)) return null;
  const r = new Array(e);
  for (; e-- > 0; )
    r[e] = t[e];
  return r;
}, sl = /* @__PURE__ */ ((t) => (e) => t && e instanceof t)(typeof Uint8Array < "u" && Bo(Uint8Array)), ol = (t, e) => {
  const n = (t && t[Symbol.iterator]).call(t);
  let i;
  for (; (i = n.next()) && !i.done; ) {
    const s = i.value;
    e.call(t, s[0], s[1]);
  }
}, al = (t, e) => {
  let r;
  const n = [];
  for (; (r = t.exec(e)) !== null; )
    n.push(r);
  return n;
}, cl = Wt("HTMLFormElement"), ul = (t) => t.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, i) {
    return n.toUpperCase() + i;
  }
), Zo = (({ hasOwnProperty: t }) => (e, r) => t.call(e, r))(Object.prototype), fl = Wt("RegExp"), lc = (t, e) => {
  const r = Object.getOwnPropertyDescriptors(t), n = {};
  Ln(r, (i, s) => {
    let c;
    (c = e(i, s, t)) !== !1 && (n[s] = c || i);
  }), Object.defineProperties(t, n);
}, ll = (t) => {
  lc(t, (e, r) => {
    if (St(t) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = t[r];
    if (St(n)) {
      if (e.enumerable = !1, "writable" in e) {
        e.writable = !1;
        return;
      }
      e.set || (e.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, hl = (t, e) => {
  const r = {}, n = (i) => {
    i.forEach((s) => {
      r[s] = !0;
    });
  };
  return pn(t) ? n(t) : n(String(t).split(e)), r;
}, dl = () => {
}, pl = (t, e) => t != null && Number.isFinite(t = +t) ? t : e, As = "abcdefghijklmnopqrstuvwxyz", Ko = "0123456789", hc = {
  DIGIT: Ko,
  ALPHA: As,
  ALPHA_DIGIT: As + As.toUpperCase() + Ko
}, ml = (t = 16, e = hc.ALPHA_DIGIT) => {
  let r = "";
  const { length: n } = e;
  for (; t--; )
    r += e[Math.random() * n | 0];
  return r;
};
function gl(t) {
  return !!(t && St(t.append) && t[Symbol.toStringTag] === "FormData" && t[Symbol.iterator]);
}
const yl = (t) => {
  const e = new Array(10), r = (n, i) => {
    if (ns(n)) {
      if (e.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        e[i] = n;
        const s = pn(n) ? [] : {};
        return Ln(n, (c, a) => {
          const p = r(c, i + 1);
          !kn(p) && (s[a] = p);
        }), e[i] = void 0, s;
      }
    }
    return n;
  };
  return r(t, 0);
}, wl = Wt("AsyncFunction"), bl = (t) => t && (ns(t) || St(t)) && St(t.then) && St(t.catch), dc = ((t, e) => t ? setImmediate : e ? ((r, n) => (kr.addEventListener("message", ({ source: i, data: s }) => {
  i === kr && s === r && n.length && n.shift()();
}, !1), (i) => {
  n.push(i), kr.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(
  typeof setImmediate == "function",
  St(kr.postMessage)
), _l = typeof queueMicrotask < "u" ? queueMicrotask.bind(kr) : typeof process < "u" && process.nextTick || dc, Q = {
  isArray: pn,
  isArrayBuffer: ac,
  isBuffer: kf,
  isFormData: Wf,
  isArrayBufferView: $f,
  isString: qf,
  isNumber: cc,
  isBoolean: Hf,
  isObject: ns,
  isPlainObject: bi,
  isReadableStream: Yf,
  isRequest: Zf,
  isResponse: Kf,
  isHeaders: Xf,
  isUndefined: kn,
  isDate: Vf,
  isFile: Lf,
  isBlob: Gf,
  isRegExp: fl,
  isFunction: St,
  isStream: zf,
  isURLSearchParams: Df,
  isTypedArray: sl,
  isFileList: jf,
  forEach: Ln,
  merge: Ys,
  extend: Qf,
  trim: Jf,
  stripBOM: el,
  inherits: tl,
  toFlatObject: rl,
  kindOf: ts,
  kindOfTest: Wt,
  endsWith: nl,
  toArray: il,
  forEachEntry: ol,
  matchAll: al,
  isHTMLForm: cl,
  hasOwnProperty: Zo,
  hasOwnProp: Zo,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: lc,
  freezeMethods: ll,
  toObjectSet: hl,
  toCamelCase: ul,
  noop: dl,
  toFiniteNumber: pl,
  findKey: uc,
  global: kr,
  isContextDefined: fc,
  ALPHABET: hc,
  generateString: ml,
  isSpecCompliantForm: gl,
  toJSONObject: yl,
  isAsyncFn: wl,
  isThenable: bl,
  setImmediate: dc,
  asap: _l
};
function Ue(t, e, r, n, i) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = t, this.name = "AxiosError", e && (this.code = e), r && (this.config = r), n && (this.request = n), i && (this.response = i, this.status = i.status ? i.status : null);
}
Q.inherits(Ue, Error, {
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
      config: Q.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const pc = Ue.prototype, mc = {};
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
  mc[t] = { value: t };
});
Object.defineProperties(Ue, mc);
Object.defineProperty(pc, "isAxiosError", { value: !0 });
Ue.from = (t, e, r, n, i, s) => {
  const c = Object.create(pc);
  return Q.toFlatObject(t, c, function(p) {
    return p !== Error.prototype;
  }, (a) => a !== "isAxiosError"), Ue.call(c, t.message, e, r, n, i), c.cause = t, c.name = t.name, s && Object.assign(c, s), c;
};
const xl = null;
function Zs(t) {
  return Q.isPlainObject(t) || Q.isArray(t);
}
function gc(t) {
  return Q.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function Xo(t, e, r) {
  return t ? t.concat(e).map(function(i, s) {
    return i = gc(i), !r && s ? "[" + i + "]" : i;
  }).join(r ? "." : "") : e;
}
function El(t) {
  return Q.isArray(t) && !t.some(Zs);
}
const Tl = Q.toFlatObject(Q, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function is(t, e, r) {
  if (!Q.isObject(t))
    throw new TypeError("target must be an object");
  e = e || new FormData(), r = Q.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(I, U) {
    return !Q.isUndefined(U[I]);
  });
  const n = r.metaTokens, i = r.visitor || b, s = r.dots, c = r.indexes, p = (r.Blob || typeof Blob < "u" && Blob) && Q.isSpecCompliantForm(e);
  if (!Q.isFunction(i))
    throw new TypeError("visitor must be a function");
  function g(m) {
    if (m === null) return "";
    if (Q.isDate(m))
      return m.toISOString();
    if (!p && Q.isBlob(m))
      throw new Ue("Blob is not supported. Use a Buffer instead.");
    return Q.isArrayBuffer(m) || Q.isTypedArray(m) ? p && typeof Blob == "function" ? new Blob([m]) : Buffer.from(m) : m;
  }
  function b(m, I, U) {
    let H = m;
    if (m && !U && typeof m == "object") {
      if (Q.endsWith(I, "{}"))
        I = n ? I : I.slice(0, -2), m = JSON.stringify(m);
      else if (Q.isArray(m) && El(m) || (Q.isFileList(m) || Q.endsWith(I, "[]")) && (H = Q.toArray(m)))
        return I = gc(I), H.forEach(function(L, X) {
          !(Q.isUndefined(L) || L === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            c === !0 ? Xo([I], X, s) : c === null ? I : I + "[]",
            g(L)
          );
        }), !1;
    }
    return Zs(m) ? !0 : (e.append(Xo(U, I, s), g(m)), !1);
  }
  const T = [], N = Object.assign(Tl, {
    defaultVisitor: b,
    convertValue: g,
    isVisitable: Zs
  });
  function S(m, I) {
    if (!Q.isUndefined(m)) {
      if (T.indexOf(m) !== -1)
        throw Error("Circular reference detected in " + I.join("."));
      T.push(m), Q.forEach(m, function(H, V) {
        (!(Q.isUndefined(H) || H === null) && i.call(
          e,
          H,
          Q.isString(V) ? V.trim() : V,
          I,
          N
        )) === !0 && S(H, I ? I.concat(V) : [V]);
      }), T.pop();
    }
  }
  if (!Q.isObject(t))
    throw new TypeError("data must be an object");
  return S(t), e;
}
function Jo(t) {
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
function vo(t, e) {
  this._pairs = [], t && is(t, this, e);
}
const yc = vo.prototype;
yc.append = function(e, r) {
  this._pairs.push([e, r]);
};
yc.toString = function(e) {
  const r = e ? function(n) {
    return e.call(this, n, Jo);
  } : Jo;
  return this._pairs.map(function(i) {
    return r(i[0]) + "=" + r(i[1]);
  }, "").join("&");
};
function Al(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function wc(t, e, r) {
  if (!e)
    return t;
  const n = r && r.encode || Al, i = r && r.serialize;
  let s;
  if (i ? s = i(e, r) : s = Q.isURLSearchParams(e) ? e.toString() : new vo(e, r).toString(n), s) {
    const c = t.indexOf("#");
    c !== -1 && (t = t.slice(0, c)), t += (t.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return t;
}
class Qo {
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
    Q.forEach(this.handlers, function(n) {
      n !== null && e(n);
    });
  }
}
const bc = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Sl = typeof URLSearchParams < "u" ? URLSearchParams : vo, Bl = typeof FormData < "u" ? FormData : null, vl = typeof Blob < "u" ? Blob : null, Nl = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Sl,
    FormData: Bl,
    Blob: vl
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, No = typeof window < "u" && typeof document < "u", Ks = typeof navigator == "object" && navigator || void 0, Rl = No && (!Ks || ["ReactNative", "NativeScript", "NS"].indexOf(Ks.product) < 0), Ol = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Il = No && window.location.href || "http://localhost", Ul = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: No,
  hasStandardBrowserEnv: Rl,
  hasStandardBrowserWebWorkerEnv: Ol,
  navigator: Ks,
  origin: Il
}, Symbol.toStringTag, { value: "Module" })), _t = {
  ...Ul,
  ...Nl
};
function Fl(t, e) {
  return is(t, new _t.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, i, s) {
      return _t.isNode && Q.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments);
    }
  }, e));
}
function Pl(t) {
  return Q.matchAll(/\w+|\[(\w*)]/g, t).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function Cl(t) {
  const e = {}, r = Object.keys(t);
  let n;
  const i = r.length;
  let s;
  for (n = 0; n < i; n++)
    s = r[n], e[s] = t[s];
  return e;
}
function _c(t) {
  function e(r, n, i, s) {
    let c = r[s++];
    if (c === "__proto__") return !0;
    const a = Number.isFinite(+c), p = s >= r.length;
    return c = !c && Q.isArray(i) ? i.length : c, p ? (Q.hasOwnProp(i, c) ? i[c] = [i[c], n] : i[c] = n, !a) : ((!i[c] || !Q.isObject(i[c])) && (i[c] = []), e(r, n, i[c], s) && Q.isArray(i[c]) && (i[c] = Cl(i[c])), !a);
  }
  if (Q.isFormData(t) && Q.isFunction(t.entries)) {
    const r = {};
    return Q.forEachEntry(t, (n, i) => {
      e(Pl(n), i, r, 0);
    }), r;
  }
  return null;
}
function Ml(t, e, r) {
  if (Q.isString(t))
    try {
      return (e || JSON.parse)(t), Q.trim(t);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (0, JSON.stringify)(t);
}
const Gn = {
  transitional: bc,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(e, r) {
    const n = r.getContentType() || "", i = n.indexOf("application/json") > -1, s = Q.isObject(e);
    if (s && Q.isHTMLForm(e) && (e = new FormData(e)), Q.isFormData(e))
      return i ? JSON.stringify(_c(e)) : e;
    if (Q.isArrayBuffer(e) || Q.isBuffer(e) || Q.isStream(e) || Q.isFile(e) || Q.isBlob(e) || Q.isReadableStream(e))
      return e;
    if (Q.isArrayBufferView(e))
      return e.buffer;
    if (Q.isURLSearchParams(e))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let a;
    if (s) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return Fl(e, this.formSerializer).toString();
      if ((a = Q.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
        const p = this.env && this.env.FormData;
        return is(
          a ? { "files[]": e } : e,
          p && new p(),
          this.formSerializer
        );
      }
    }
    return s || i ? (r.setContentType("application/json", !1), Ml(e)) : e;
  }],
  transformResponse: [function(e) {
    const r = this.transitional || Gn.transitional, n = r && r.forcedJSONParsing, i = this.responseType === "json";
    if (Q.isResponse(e) || Q.isReadableStream(e))
      return e;
    if (e && Q.isString(e) && (n && !this.responseType || i)) {
      const c = !(r && r.silentJSONParsing) && i;
      try {
        return JSON.parse(e);
      } catch (a) {
        if (c)
          throw a.name === "SyntaxError" ? Ue.from(a, Ue.ERR_BAD_RESPONSE, this, null, this.response) : a;
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
    FormData: _t.classes.FormData,
    Blob: _t.classes.Blob
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
Q.forEach(["delete", "get", "head", "post", "put", "patch"], (t) => {
  Gn.headers[t] = {};
});
const kl = Q.toObjectSet([
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
]), $l = (t) => {
  const e = {};
  let r, n, i;
  return t && t.split(`
`).forEach(function(c) {
    i = c.indexOf(":"), r = c.substring(0, i).trim().toLowerCase(), n = c.substring(i + 1).trim(), !(!r || e[r] && kl[r]) && (r === "set-cookie" ? e[r] ? e[r].push(n) : e[r] = [n] : e[r] = e[r] ? e[r] + ", " + n : n);
  }), e;
}, ea = Symbol("internals");
function bn(t) {
  return t && String(t).trim().toLowerCase();
}
function _i(t) {
  return t === !1 || t == null ? t : Q.isArray(t) ? t.map(_i) : String(t);
}
function ql(t) {
  const e = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(t); )
    e[n[1]] = n[2];
  return e;
}
const Hl = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function Ss(t, e, r, n, i) {
  if (Q.isFunction(n))
    return n.call(this, e, r);
  if (i && (e = r), !!Q.isString(e)) {
    if (Q.isString(n))
      return e.indexOf(n) !== -1;
    if (Q.isRegExp(n))
      return n.test(e);
  }
}
function Vl(t) {
  return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, r, n) => r.toUpperCase() + n);
}
function Ll(t, e) {
  const r = Q.toCamelCase(" " + e);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(t, n + r, {
      value: function(i, s, c) {
        return this[n].call(this, e, i, s, c);
      },
      configurable: !0
    });
  });
}
class xt {
  constructor(e) {
    e && this.set(e);
  }
  set(e, r, n) {
    const i = this;
    function s(a, p, g) {
      const b = bn(p);
      if (!b)
        throw new Error("header name must be a non-empty string");
      const T = Q.findKey(i, b);
      (!T || i[T] === void 0 || g === !0 || g === void 0 && i[T] !== !1) && (i[T || p] = _i(a));
    }
    const c = (a, p) => Q.forEach(a, (g, b) => s(g, b, p));
    if (Q.isPlainObject(e) || e instanceof this.constructor)
      c(e, r);
    else if (Q.isString(e) && (e = e.trim()) && !Hl(e))
      c($l(e), r);
    else if (Q.isHeaders(e))
      for (const [a, p] of e.entries())
        s(p, a, n);
    else
      e != null && s(r, e, n);
    return this;
  }
  get(e, r) {
    if (e = bn(e), e) {
      const n = Q.findKey(this, e);
      if (n) {
        const i = this[n];
        if (!r)
          return i;
        if (r === !0)
          return ql(i);
        if (Q.isFunction(r))
          return r.call(this, i, n);
        if (Q.isRegExp(r))
          return r.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, r) {
    if (e = bn(e), e) {
      const n = Q.findKey(this, e);
      return !!(n && this[n] !== void 0 && (!r || Ss(this, this[n], n, r)));
    }
    return !1;
  }
  delete(e, r) {
    const n = this;
    let i = !1;
    function s(c) {
      if (c = bn(c), c) {
        const a = Q.findKey(n, c);
        a && (!r || Ss(n, n[a], a, r)) && (delete n[a], i = !0);
      }
    }
    return Q.isArray(e) ? e.forEach(s) : s(e), i;
  }
  clear(e) {
    const r = Object.keys(this);
    let n = r.length, i = !1;
    for (; n--; ) {
      const s = r[n];
      (!e || Ss(this, this[s], s, e, !0)) && (delete this[s], i = !0);
    }
    return i;
  }
  normalize(e) {
    const r = this, n = {};
    return Q.forEach(this, (i, s) => {
      const c = Q.findKey(n, s);
      if (c) {
        r[c] = _i(i), delete r[s];
        return;
      }
      const a = e ? Vl(s) : String(s).trim();
      a !== s && delete r[s], r[a] = _i(i), n[a] = !0;
    }), this;
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const r = /* @__PURE__ */ Object.create(null);
    return Q.forEach(this, (n, i) => {
      n != null && n !== !1 && (r[i] = e && Q.isArray(n) ? n.join(", ") : n);
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
    const n = (this[ea] = this[ea] = {
      accessors: {}
    }).accessors, i = this.prototype;
    function s(c) {
      const a = bn(c);
      n[a] || (Ll(i, c), n[a] = !0);
    }
    return Q.isArray(e) ? e.forEach(s) : s(e), this;
  }
}
xt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
Q.reduceDescriptors(xt.prototype, ({ value: t }, e) => {
  let r = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => t,
    set(n) {
      this[r] = n;
    }
  };
});
Q.freezeMethods(xt);
function Bs(t, e) {
  const r = this || Gn, n = e || r, i = xt.from(n.headers);
  let s = n.data;
  return Q.forEach(t, function(a) {
    s = a.call(r, s, i.normalize(), e ? e.status : void 0);
  }), i.normalize(), s;
}
function xc(t) {
  return !!(t && t.__CANCEL__);
}
function mn(t, e, r) {
  Ue.call(this, t ?? "canceled", Ue.ERR_CANCELED, e, r), this.name = "CanceledError";
}
Q.inherits(mn, Ue, {
  __CANCEL__: !0
});
function Ec(t, e, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? t(r) : e(new Ue(
    "Request failed with status code " + r.status,
    [Ue.ERR_BAD_REQUEST, Ue.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
function Gl(t) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return e && e[1] || "";
}
function jl(t, e) {
  t = t || 10;
  const r = new Array(t), n = new Array(t);
  let i = 0, s = 0, c;
  return e = e !== void 0 ? e : 1e3, function(p) {
    const g = Date.now(), b = n[s];
    c || (c = g), r[i] = p, n[i] = g;
    let T = s, N = 0;
    for (; T !== i; )
      N += r[T++], T = T % t;
    if (i = (i + 1) % t, i === s && (s = (s + 1) % t), g - c < e)
      return;
    const S = b && g - b;
    return S ? Math.round(N * 1e3 / S) : void 0;
  };
}
function zl(t, e) {
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
const Gi = (t, e, r = 3) => {
  let n = 0;
  const i = jl(50, 250);
  return zl((s) => {
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
}, ta = (t, e) => {
  const r = t != null;
  return [(n) => e[0]({
    lengthComputable: r,
    total: t,
    loaded: n
  }), e[1]];
}, ra = (t) => (...e) => Q.asap(() => t(...e)), Wl = _t.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const e = _t.navigator && /(msie|trident)/i.test(_t.navigator.userAgent), r = document.createElement("a");
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
      const a = Q.isString(c) ? i(c) : c;
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
), Dl = _t.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(t, e, r, n, i, s) {
      const c = [t + "=" + encodeURIComponent(e)];
      Q.isNumber(r) && c.push("expires=" + new Date(r).toGMTString()), Q.isString(n) && c.push("path=" + n), Q.isString(i) && c.push("domain=" + i), s === !0 && c.push("secure"), document.cookie = c.join("; ");
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
function Yl(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function Zl(t, e) {
  return e ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : t;
}
function Tc(t, e) {
  return t && !Yl(e) ? Zl(t, e) : e;
}
const na = (t) => t instanceof xt ? { ...t } : t;
function Lr(t, e) {
  e = e || {};
  const r = {};
  function n(g, b, T) {
    return Q.isPlainObject(g) && Q.isPlainObject(b) ? Q.merge.call({ caseless: T }, g, b) : Q.isPlainObject(b) ? Q.merge({}, b) : Q.isArray(b) ? b.slice() : b;
  }
  function i(g, b, T) {
    if (Q.isUndefined(b)) {
      if (!Q.isUndefined(g))
        return n(void 0, g, T);
    } else return n(g, b, T);
  }
  function s(g, b) {
    if (!Q.isUndefined(b))
      return n(void 0, b);
  }
  function c(g, b) {
    if (Q.isUndefined(b)) {
      if (!Q.isUndefined(g))
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
    headers: (g, b) => i(na(g), na(b), !0)
  };
  return Q.forEach(Object.keys(Object.assign({}, t, e)), function(b) {
    const T = p[b] || i, N = T(t[b], e[b], b);
    Q.isUndefined(N) && T !== a || (r[b] = N);
  }), r;
}
const Ac = (t) => {
  const e = Lr({}, t);
  let { data: r, withXSRFToken: n, xsrfHeaderName: i, xsrfCookieName: s, headers: c, auth: a } = e;
  e.headers = c = xt.from(c), e.url = wc(Tc(e.baseURL, e.url), t.params, t.paramsSerializer), a && c.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  );
  let p;
  if (Q.isFormData(r)) {
    if (_t.hasStandardBrowserEnv || _t.hasStandardBrowserWebWorkerEnv)
      c.setContentType(void 0);
    else if ((p = c.getContentType()) !== !1) {
      const [g, ...b] = p ? p.split(";").map((T) => T.trim()).filter(Boolean) : [];
      c.setContentType([g || "multipart/form-data", ...b].join("; "));
    }
  }
  if (_t.hasStandardBrowserEnv && (n && Q.isFunction(n) && (n = n(e)), n || n !== !1 && Wl(e.url))) {
    const g = i && s && Dl.read(s);
    g && c.set(i, g);
  }
  return e;
}, Kl = typeof XMLHttpRequest < "u", Xl = Kl && function(t) {
  return new Promise(function(r, n) {
    const i = Ac(t);
    let s = i.data;
    const c = xt.from(i.headers).normalize();
    let { responseType: a, onUploadProgress: p, onDownloadProgress: g } = i, b, T, N, S, m;
    function I() {
      S && S(), m && m(), i.cancelToken && i.cancelToken.unsubscribe(b), i.signal && i.signal.removeEventListener("abort", b);
    }
    let U = new XMLHttpRequest();
    U.open(i.method.toUpperCase(), i.url, !0), U.timeout = i.timeout;
    function H() {
      if (!U)
        return;
      const L = xt.from(
        "getAllResponseHeaders" in U && U.getAllResponseHeaders()
      ), P = {
        data: !a || a === "text" || a === "json" ? U.responseText : U.response,
        status: U.status,
        statusText: U.statusText,
        headers: L,
        config: t,
        request: U
      };
      Ec(function(K) {
        r(K), I();
      }, function(K) {
        n(K), I();
      }, P), U = null;
    }
    "onloadend" in U ? U.onloadend = H : U.onreadystatechange = function() {
      !U || U.readyState !== 4 || U.status === 0 && !(U.responseURL && U.responseURL.indexOf("file:") === 0) || setTimeout(H);
    }, U.onabort = function() {
      U && (n(new Ue("Request aborted", Ue.ECONNABORTED, t, U)), U = null);
    }, U.onerror = function() {
      n(new Ue("Network Error", Ue.ERR_NETWORK, t, U)), U = null;
    }, U.ontimeout = function() {
      let X = i.timeout ? "timeout of " + i.timeout + "ms exceeded" : "timeout exceeded";
      const P = i.transitional || bc;
      i.timeoutErrorMessage && (X = i.timeoutErrorMessage), n(new Ue(
        X,
        P.clarifyTimeoutError ? Ue.ETIMEDOUT : Ue.ECONNABORTED,
        t,
        U
      )), U = null;
    }, s === void 0 && c.setContentType(null), "setRequestHeader" in U && Q.forEach(c.toJSON(), function(X, P) {
      U.setRequestHeader(P, X);
    }), Q.isUndefined(i.withCredentials) || (U.withCredentials = !!i.withCredentials), a && a !== "json" && (U.responseType = i.responseType), g && ([N, m] = Gi(g, !0), U.addEventListener("progress", N)), p && U.upload && ([T, S] = Gi(p), U.upload.addEventListener("progress", T), U.upload.addEventListener("loadend", S)), (i.cancelToken || i.signal) && (b = (L) => {
      U && (n(!L || L.type ? new mn(null, t, U) : L), U.abort(), U = null);
    }, i.cancelToken && i.cancelToken.subscribe(b), i.signal && (i.signal.aborted ? b() : i.signal.addEventListener("abort", b)));
    const V = Gl(i.url);
    if (V && _t.protocols.indexOf(V) === -1) {
      n(new Ue("Unsupported protocol " + V + ":", Ue.ERR_BAD_REQUEST, t));
      return;
    }
    U.send(s || null);
  });
}, Jl = (t, e) => {
  const { length: r } = t = t ? t.filter(Boolean) : [];
  if (e || r) {
    let n = new AbortController(), i;
    const s = function(g) {
      if (!i) {
        i = !0, a();
        const b = g instanceof Error ? g : this.reason;
        n.abort(b instanceof Ue ? b : new mn(b instanceof Error ? b.message : b));
      }
    };
    let c = e && setTimeout(() => {
      c = null, s(new Ue(`timeout ${e} of ms exceeded`, Ue.ETIMEDOUT));
    }, e);
    const a = () => {
      t && (c && clearTimeout(c), c = null, t.forEach((g) => {
        g.unsubscribe ? g.unsubscribe(s) : g.removeEventListener("abort", s);
      }), t = null);
    };
    t.forEach((g) => g.addEventListener("abort", s));
    const { signal: p } = n;
    return p.unsubscribe = () => Q.asap(a), p;
  }
}, Ql = function* (t, e) {
  let r = t.byteLength;
  if (r < e) {
    yield t;
    return;
  }
  let n = 0, i;
  for (; n < r; )
    i = n + e, yield t.slice(n, i), n = i;
}, e0 = async function* (t, e) {
  for await (const r of t0(t))
    yield* Ql(r, e);
}, t0 = async function* (t) {
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
}, ia = (t, e, r, n) => {
  const i = e0(t, e);
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
          let N = s += T;
          r(N);
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
}, ss = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Sc = ss && typeof ReadableStream == "function", r0 = ss && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((t) => (e) => t.encode(e))(new TextEncoder()) : async (t) => new Uint8Array(await new Response(t).arrayBuffer())), Bc = (t, ...e) => {
  try {
    return !!t(...e);
  } catch {
    return !1;
  }
}, n0 = Sc && Bc(() => {
  let t = !1;
  const e = new Request(_t.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return t = !0, "half";
    }
  }).headers.has("Content-Type");
  return t && !e;
}), sa = 64 * 1024, Xs = Sc && Bc(() => Q.isReadableStream(new Response("").body)), ji = {
  stream: Xs && ((t) => t.body)
};
ss && ((t) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((e) => {
    !ji[e] && (ji[e] = Q.isFunction(t[e]) ? (r) => r[e]() : (r, n) => {
      throw new Ue(`Response type '${e}' is not supported`, Ue.ERR_NOT_SUPPORT, n);
    });
  });
})(new Response());
const i0 = async (t) => {
  if (t == null)
    return 0;
  if (Q.isBlob(t))
    return t.size;
  if (Q.isSpecCompliantForm(t))
    return (await new Request(_t.origin, {
      method: "POST",
      body: t
    }).arrayBuffer()).byteLength;
  if (Q.isArrayBufferView(t) || Q.isArrayBuffer(t))
    return t.byteLength;
  if (Q.isURLSearchParams(t) && (t = t + ""), Q.isString(t))
    return (await r0(t)).byteLength;
}, s0 = async (t, e) => {
  const r = Q.toFiniteNumber(t.getContentLength());
  return r ?? i0(e);
}, o0 = ss && (async (t) => {
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
    fetchOptions: N
  } = Ac(t);
  g = g ? (g + "").toLowerCase() : "text";
  let S = Jl([i, s && s.toAbortSignal()], c), m;
  const I = S && S.unsubscribe && (() => {
    S.unsubscribe();
  });
  let U;
  try {
    if (p && n0 && r !== "get" && r !== "head" && (U = await s0(b, n)) !== 0) {
      let P = new Request(e, {
        method: "POST",
        body: n,
        duplex: "half"
      }), J;
      if (Q.isFormData(n) && (J = P.headers.get("content-type")) && b.setContentType(J), P.body) {
        const [K, re] = ta(
          U,
          Gi(ra(p))
        );
        n = ia(P.body, sa, K, re);
      }
    }
    Q.isString(T) || (T = T ? "include" : "omit");
    const H = "credentials" in Request.prototype;
    m = new Request(e, {
      ...N,
      signal: S,
      method: r.toUpperCase(),
      headers: b.normalize().toJSON(),
      body: n,
      duplex: "half",
      credentials: H ? T : void 0
    });
    let V = await fetch(m);
    const L = Xs && (g === "stream" || g === "response");
    if (Xs && (a || L && I)) {
      const P = {};
      ["status", "statusText", "headers"].forEach((ae) => {
        P[ae] = V[ae];
      });
      const J = Q.toFiniteNumber(V.headers.get("content-length")), [K, re] = a && ta(
        J,
        Gi(ra(a), !0)
      ) || [];
      V = new Response(
        ia(V.body, sa, K, () => {
          re && re(), I && I();
        }),
        P
      );
    }
    g = g || "text";
    let X = await ji[Q.findKey(ji, g) || "text"](V, t);
    return !L && I && I(), await new Promise((P, J) => {
      Ec(P, J, {
        data: X,
        headers: xt.from(V.headers),
        status: V.status,
        statusText: V.statusText,
        config: t,
        request: m
      });
    });
  } catch (H) {
    throw I && I(), H && H.name === "TypeError" && /fetch/i.test(H.message) ? Object.assign(
      new Ue("Network Error", Ue.ERR_NETWORK, t, m),
      {
        cause: H.cause || H
      }
    ) : Ue.from(H, H && H.code, t, m);
  }
}), Js = {
  http: xl,
  xhr: Xl,
  fetch: o0
};
Q.forEach(Js, (t, e) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: e });
    } catch {
    }
    Object.defineProperty(t, "adapterName", { value: e });
  }
});
const oa = (t) => `- ${t}`, a0 = (t) => Q.isFunction(t) || t === null || t === !1, vc = {
  getAdapter: (t) => {
    t = Q.isArray(t) ? t : [t];
    const { length: e } = t;
    let r, n;
    const i = {};
    for (let s = 0; s < e; s++) {
      r = t[s];
      let c;
      if (n = r, !a0(r) && (n = Js[(c = String(r)).toLowerCase()], n === void 0))
        throw new Ue(`Unknown adapter '${c}'`);
      if (n)
        break;
      i[c || "#" + s] = n;
    }
    if (!n) {
      const s = Object.entries(i).map(
        ([a, p]) => `adapter ${a} ` + (p === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let c = e ? s.length > 1 ? `since :
` + s.map(oa).join(`
`) : " " + oa(s[0]) : "as no adapter specified";
      throw new Ue(
        "There is no suitable adapter to dispatch the request " + c,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: Js
};
function vs(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new mn(null, t);
}
function aa(t) {
  return vs(t), t.headers = xt.from(t.headers), t.data = Bs.call(
    t,
    t.transformRequest
  ), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), vc.getAdapter(t.adapter || Gn.adapter)(t).then(function(n) {
    return vs(t), n.data = Bs.call(
      t,
      t.transformResponse,
      n
    ), n.headers = xt.from(n.headers), n;
  }, function(n) {
    return xc(n) || (vs(t), n && n.response && (n.response.data = Bs.call(
      t,
      t.transformResponse,
      n.response
    ), n.response.headers = xt.from(n.response.headers))), Promise.reject(n);
  });
}
const Nc = "1.7.7", Ro = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((t, e) => {
  Ro[t] = function(n) {
    return typeof n === t || "a" + (e < 1 ? "n " : " ") + t;
  };
});
const ca = {};
Ro.transitional = function(e, r, n) {
  function i(s, c) {
    return "[Axios v" + Nc + "] Transitional option '" + s + "'" + c + (n ? ". " + n : "");
  }
  return (s, c, a) => {
    if (e === !1)
      throw new Ue(
        i(c, " has been removed" + (r ? " in " + r : "")),
        Ue.ERR_DEPRECATED
      );
    return r && !ca[c] && (ca[c] = !0, console.warn(
      i(
        c,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), e ? e(s, c, a) : !0;
  };
};
function c0(t, e, r) {
  if (typeof t != "object")
    throw new Ue("options must be an object", Ue.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(t);
  let i = n.length;
  for (; i-- > 0; ) {
    const s = n[i], c = e[s];
    if (c) {
      const a = t[s], p = a === void 0 || c(a, s, t);
      if (p !== !0)
        throw new Ue("option " + s + " must be " + p, Ue.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new Ue("Unknown option " + s, Ue.ERR_BAD_OPTION);
  }
}
const Qs = {
  assertOptions: c0,
  validators: Ro
}, mr = Qs.validators;
class qr {
  constructor(e) {
    this.defaults = e, this.interceptors = {
      request: new Qo(),
      response: new Qo()
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
    typeof e == "string" ? (r = r || {}, r.url = e) : r = e || {}, r = Lr(this.defaults, r);
    const { transitional: n, paramsSerializer: i, headers: s } = r;
    n !== void 0 && Qs.assertOptions(n, {
      silentJSONParsing: mr.transitional(mr.boolean),
      forcedJSONParsing: mr.transitional(mr.boolean),
      clarifyTimeoutError: mr.transitional(mr.boolean)
    }, !1), i != null && (Q.isFunction(i) ? r.paramsSerializer = {
      serialize: i
    } : Qs.assertOptions(i, {
      encode: mr.function,
      serialize: mr.function
    }, !0)), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let c = s && Q.merge(
      s.common,
      s[r.method]
    );
    s && Q.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (m) => {
        delete s[m];
      }
    ), r.headers = xt.concat(c, s);
    const a = [];
    let p = !0;
    this.interceptors.request.forEach(function(I) {
      typeof I.runWhen == "function" && I.runWhen(r) === !1 || (p = p && I.synchronous, a.unshift(I.fulfilled, I.rejected));
    });
    const g = [];
    this.interceptors.response.forEach(function(I) {
      g.push(I.fulfilled, I.rejected);
    });
    let b, T = 0, N;
    if (!p) {
      const m = [aa.bind(this), void 0];
      for (m.unshift.apply(m, a), m.push.apply(m, g), N = m.length, b = Promise.resolve(r); T < N; )
        b = b.then(m[T++], m[T++]);
      return b;
    }
    N = a.length;
    let S = r;
    for (T = 0; T < N; ) {
      const m = a[T++], I = a[T++];
      try {
        S = m(S);
      } catch (U) {
        I.call(this, U);
        break;
      }
    }
    try {
      b = aa.call(this, S);
    } catch (m) {
      return Promise.reject(m);
    }
    for (T = 0, N = g.length; T < N; )
      b = b.then(g[T++], g[T++]);
    return b;
  }
  getUri(e) {
    e = Lr(this.defaults, e);
    const r = Tc(e.baseURL, e.url);
    return wc(r, e.params, e.paramsSerializer);
  }
}
Q.forEach(["delete", "get", "head", "options"], function(e) {
  qr.prototype[e] = function(r, n) {
    return this.request(Lr(n || {}, {
      method: e,
      url: r,
      data: (n || {}).data
    }));
  };
});
Q.forEach(["post", "put", "patch"], function(e) {
  function r(n) {
    return function(s, c, a) {
      return this.request(Lr(a || {}, {
        method: e,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: s,
        data: c
      }));
    };
  }
  qr.prototype[e] = r(), qr.prototype[e + "Form"] = r(!0);
});
class Oo {
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
      n.reason || (n.reason = new mn(s, c, a), r(n.reason));
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
      token: new Oo(function(i) {
        e = i;
      }),
      cancel: e
    };
  }
}
function u0(t) {
  return function(r) {
    return t.apply(null, r);
  };
}
function f0(t) {
  return Q.isObject(t) && t.isAxiosError === !0;
}
const eo = {
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
Object.entries(eo).forEach(([t, e]) => {
  eo[e] = t;
});
function Rc(t) {
  const e = new qr(t), r = oc(qr.prototype.request, e);
  return Q.extend(r, qr.prototype, e, { allOwnKeys: !0 }), Q.extend(r, e, null, { allOwnKeys: !0 }), r.create = function(i) {
    return Rc(Lr(t, i));
  }, r;
}
const Ke = Rc(Gn);
Ke.Axios = qr;
Ke.CanceledError = mn;
Ke.CancelToken = Oo;
Ke.isCancel = xc;
Ke.VERSION = Nc;
Ke.toFormData = is;
Ke.AxiosError = Ue;
Ke.Cancel = Ke.CanceledError;
Ke.all = function(e) {
  return Promise.all(e);
};
Ke.spread = u0;
Ke.isAxiosError = f0;
Ke.mergeConfig = Lr;
Ke.AxiosHeaders = xt;
Ke.formToJSON = (t) => _c(Q.isHTMLForm(t) ? new FormData(t) : t);
Ke.getAdapter = vc.getAdapter;
Ke.HttpStatusCode = eo;
Ke.default = Ke;
const l0 = async (t) => {
  const { data: e } = await Ke.post(
    "https://d2lau6bs1ulmoj.cloudfront.net/create-embedding",
    { text: t }
  );
  return e.body.vectors;
}, h0 = "data:image/svg+xml,%3csvg%20width='52'%20height='16'%20viewBox='0%200%2052%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20%3e%3cpath%20d='M5.18811%203.56704H7.22642V4.07662H5.74864V4.89194H7.17546V5.40152H5.74864V6.21684H7.22642V6.72642H5.18811V3.56704Z'%20fill='%234B4E53'%20/%3e%3cpath%20d='M9.11185%203.56704H9.67239V6.16588H10.9973V6.67546H9.11185V3.56704Z'%20fill='%234B4E53'%20/%3e%3cpath%20d='M5.18811%208.50994H5.64673L7.1245%2010.4973V8.50994H7.68503V11.6184H7.22642L5.74864%209.58005V11.6184H5.18811V8.50994Z'%20fill='%234B4E53'%20/%3e%3cpath%20d='M9.82526%208.50994H10.5387L11.6088%2011.6184H10.9973L10.7935%2010.9559H9.57047L9.36664%2011.6184H8.75515L9.82526%208.50994ZM10.5896%2010.3954L10.131%209.07047L9.67239%2010.3954H10.5896Z'%20fill='%234B4E53'%20/%3e%3cpath%20d='M8.04174%2015.0835C3.86321%2015.0835%200.5%2011.7203%200.5%207.54174C0.5%203.36321%203.86321%200%208.04174%200C12.2203%200%2015.5835%203.41417%2015.5835%207.54174C15.5835%2011.7203%2012.2203%2015.0835%208.04174%2015.0835ZM8.04174%200.611492C4.21991%200.611492%201.11149%203.71991%201.11149%207.54174C1.11149%2011.3636%204.21991%2014.472%208.04174%2014.472C11.8636%2014.472%2014.972%2011.3636%2014.972%207.54174C14.972%203.71991%2011.8636%200.611492%208.04174%200.611492Z'%20fill='%234B4E53'%20/%3e%3cpath%20d='M20.8945%203.75049H25.9903V4.97347H22.3213V6.93025H25.8272V8.15323H22.3213V10.1508H26.0311V11.3738H20.8945V3.75049Z'%20fill='%234B4E53'%20/%3e%3cpath%20d='M28.8032%203.75049H30.1892V10.1915H33.4913V11.4145H28.8032V3.75049Z'%20fill='%234B4E53'%20/%3e%3cpath%20d='M36.1411%203.75049H37.2418L40.9107%208.68319V3.75049H42.2968V11.4145H41.1961L37.5271%206.40029V11.4145H36.1411V3.75049Z'%20fill='%234B4E53'%20/%3e%3cpath%20d='M47.5148%203.75049H49.3493L51.9991%2011.4145H50.4908L49.9608%209.78388H46.9849L46.4141%2011.4145H44.865L47.5148%203.75049ZM49.5124%208.52013L48.4117%205.2996L47.311%208.52013H49.5124Z'%20fill='%234B4E53'%20/%3e%3c/svg%3e", d0 = "data:image/svg+xml,%3csvg%20width='17'%20height='18'%20viewBox='0%200%2017%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20%3e%3cpath%20d='M0.5%209.83358H5.5V8.16691H0.5V0.538249C0.5%200.308132%200.68655%200.121582%200.916667%200.121582C0.986875%200.121582%201.05595%200.139324%201.11747%200.173165L16.5028%208.63517C16.7045%208.746%2016.7781%208.99942%2016.6672%209.201C16.6291%209.27025%2016.5721%209.32725%2016.5028%209.36533L1.11747%2017.8272C0.915833%2017.9382%200.662475%2017.8647%200.551575%2017.663C0.517742%2017.6015%200.5%2017.5324%200.5%2017.4622V9.83358Z'%20fill='white'%20/%3e%3c/svg%3e";
var fn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function p0(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Oc = {}, jn = {};
jn.byteLength = y0;
jn.toByteArray = b0;
jn.fromByteArray = E0;
var tr = [], vt = [], m0 = typeof Uint8Array < "u" ? Uint8Array : Array, Ns = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var Xr = 0, g0 = Ns.length; Xr < g0; ++Xr)
  tr[Xr] = Ns[Xr], vt[Ns.charCodeAt(Xr)] = Xr;
vt[45] = 62;
vt[95] = 63;
function Ic(t) {
  var e = t.length;
  if (e % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var r = t.indexOf("=");
  r === -1 && (r = e);
  var n = r === e ? 0 : 4 - r % 4;
  return [r, n];
}
function y0(t) {
  var e = Ic(t), r = e[0], n = e[1];
  return (r + n) * 3 / 4 - n;
}
function w0(t, e, r) {
  return (e + r) * 3 / 4 - r;
}
function b0(t) {
  var e, r = Ic(t), n = r[0], i = r[1], s = new m0(w0(t, n, i)), c = 0, a = i > 0 ? n - 4 : n, p;
  for (p = 0; p < a; p += 4)
    e = vt[t.charCodeAt(p)] << 18 | vt[t.charCodeAt(p + 1)] << 12 | vt[t.charCodeAt(p + 2)] << 6 | vt[t.charCodeAt(p + 3)], s[c++] = e >> 16 & 255, s[c++] = e >> 8 & 255, s[c++] = e & 255;
  return i === 2 && (e = vt[t.charCodeAt(p)] << 2 | vt[t.charCodeAt(p + 1)] >> 4, s[c++] = e & 255), i === 1 && (e = vt[t.charCodeAt(p)] << 10 | vt[t.charCodeAt(p + 1)] << 4 | vt[t.charCodeAt(p + 2)] >> 2, s[c++] = e >> 8 & 255, s[c++] = e & 255), s;
}
function _0(t) {
  return tr[t >> 18 & 63] + tr[t >> 12 & 63] + tr[t >> 6 & 63] + tr[t & 63];
}
function x0(t, e, r) {
  for (var n, i = [], s = e; s < r; s += 3)
    n = (t[s] << 16 & 16711680) + (t[s + 1] << 8 & 65280) + (t[s + 2] & 255), i.push(_0(n));
  return i.join("");
}
function E0(t) {
  for (var e, r = t.length, n = r % 3, i = [], s = 16383, c = 0, a = r - n; c < a; c += s)
    i.push(x0(t, c, c + s > a ? a : c + s));
  return n === 1 ? (e = t[r - 1], i.push(
    tr[e >> 2] + tr[e << 4 & 63] + "=="
  )) : n === 2 && (e = (t[r - 2] << 8) + t[r - 1], i.push(
    tr[e >> 10] + tr[e >> 4 & 63] + tr[e << 2 & 63] + "="
  )), i.join("");
}
var zn = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
zn.read = function(t, e, r, n, i) {
  var s, c, a = i * 8 - n - 1, p = (1 << a) - 1, g = p >> 1, b = -7, T = r ? i - 1 : 0, N = r ? -1 : 1, S = t[e + T];
  for (T += N, s = S & (1 << -b) - 1, S >>= -b, b += a; b > 0; s = s * 256 + t[e + T], T += N, b -= 8)
    ;
  for (c = s & (1 << -b) - 1, s >>= -b, b += n; b > 0; c = c * 256 + t[e + T], T += N, b -= 8)
    ;
  if (s === 0)
    s = 1 - g;
  else {
    if (s === p)
      return c ? NaN : (S ? -1 : 1) * (1 / 0);
    c = c + Math.pow(2, n), s = s - g;
  }
  return (S ? -1 : 1) * c * Math.pow(2, s - n);
};
zn.write = function(t, e, r, n, i, s) {
  var c, a, p, g = s * 8 - i - 1, b = (1 << g) - 1, T = b >> 1, N = i === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, S = n ? 0 : s - 1, m = n ? 1 : -1, I = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0;
  for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (a = isNaN(e) ? 1 : 0, c = b) : (c = Math.floor(Math.log(e) / Math.LN2), e * (p = Math.pow(2, -c)) < 1 && (c--, p *= 2), c + T >= 1 ? e += N / p : e += N * Math.pow(2, 1 - T), e * p >= 2 && (c++, p /= 2), c + T >= b ? (a = 0, c = b) : c + T >= 1 ? (a = (e * p - 1) * Math.pow(2, i), c = c + T) : (a = e * Math.pow(2, T - 1) * Math.pow(2, i), c = 0)); i >= 8; t[r + S] = a & 255, S += m, a /= 256, i -= 8)
    ;
  for (c = c << i | a, g += i; g > 0; t[r + S] = c & 255, S += m, c /= 256, g -= 8)
    ;
  t[r + S - m] |= I * 128;
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(t) {
  const e = jn, r = zn, n = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  t.Buffer = a, t.SlowBuffer = V, t.INSPECT_MAX_BYTES = 50;
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
      return N(d, f);
    if (ArrayBuffer.isView(d))
      return m(d);
    if (d == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof d
      );
    if (G(d, ArrayBuffer) || d && G(d.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (G(d, SharedArrayBuffer) || d && G(d.buffer, SharedArrayBuffer)))
      return I(d, f, l);
    if (typeof d == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    const A = d.valueOf && d.valueOf();
    if (A != null && A !== d)
      return a.from(A, f, l);
    const M = U(d);
    if (M) return M;
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
    return g(d), c(d < 0 ? 0 : H(d) | 0);
  }
  a.allocUnsafe = function(d) {
    return T(d);
  }, a.allocUnsafeSlow = function(d) {
    return T(d);
  };
  function N(d, f) {
    if ((typeof f != "string" || f === "") && (f = "utf8"), !a.isEncoding(f))
      throw new TypeError("Unknown encoding: " + f);
    const l = L(d, f) | 0;
    let A = c(l);
    const M = A.write(d, f);
    return M !== l && (A = A.slice(0, M)), A;
  }
  function S(d) {
    const f = d.length < 0 ? 0 : H(d.length) | 0, l = c(f);
    for (let A = 0; A < f; A += 1)
      l[A] = d[A] & 255;
    return l;
  }
  function m(d) {
    if (G(d, Uint8Array)) {
      const f = new Uint8Array(d);
      return I(f.buffer, f.byteOffset, f.byteLength);
    }
    return S(d);
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
      const f = H(d.length) | 0, l = c(f);
      return l.length === 0 || d.copy(l, 0, 0, f), l;
    }
    if (d.length !== void 0)
      return typeof d.length != "number" || oe(d.length) ? c(0) : S(d);
    if (d.type === "Buffer" && Array.isArray(d.data))
      return S(d.data);
  }
  function H(d) {
    if (d >= i)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i.toString(16) + " bytes");
    return d | 0;
  }
  function V(d) {
    return +d != d && (d = 0), a.alloc(+d);
  }
  a.isBuffer = function(f) {
    return f != null && f._isBuffer === !0 && f !== a.prototype;
  }, a.compare = function(f, l) {
    if (G(f, Uint8Array) && (f = a.from(f, f.offset, f.byteLength)), G(l, Uint8Array) && (l = a.from(l, l.offset, l.byteLength)), !a.isBuffer(f) || !a.isBuffer(l))
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (f === l) return 0;
    let A = f.length, M = l.length;
    for (let D = 0, W = Math.min(A, M); D < W; ++D)
      if (f[D] !== l[D]) {
        A = f[D], M = l[D];
        break;
      }
    return A < M ? -1 : M < A ? 1 : 0;
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
    const M = a.allocUnsafe(l);
    let D = 0;
    for (A = 0; A < f.length; ++A) {
      let W = f[A];
      if (G(W, Uint8Array))
        D + W.length > M.length ? (a.isBuffer(W) || (W = a.from(W)), W.copy(M, D)) : Uint8Array.prototype.set.call(
          M,
          W,
          D
        );
      else if (a.isBuffer(W))
        W.copy(M, D);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      D += W.length;
    }
    return M;
  };
  function L(d, f) {
    if (a.isBuffer(d))
      return d.length;
    if (ArrayBuffer.isView(d) || G(d, ArrayBuffer))
      return d.byteLength;
    if (typeof d != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof d
      );
    const l = d.length, A = arguments.length > 2 && arguments[2] === !0;
    if (!A && l === 0) return 0;
    let M = !1;
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
          if (M)
            return A ? -1 : o(d).length;
          f = ("" + f).toLowerCase(), M = !0;
      }
  }
  a.byteLength = L;
  function X(d, f, l) {
    let A = !1;
    if ((f === void 0 || f < 0) && (f = 0), f > this.length || ((l === void 0 || l > this.length) && (l = this.length), l <= 0) || (l >>>= 0, f >>>= 0, l <= f))
      return "";
    for (d || (d = "utf8"); ; )
      switch (d) {
        case "hex":
          return le(this, f, l);
        case "utf8":
        case "utf-8":
          return C(this, f, l);
        case "ascii":
          return j(this, f, l);
        case "latin1":
        case "binary":
          return ee(this, f, l);
        case "base64":
          return R(this, f, l);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return we(this, f, l);
        default:
          if (A) throw new TypeError("Unknown encoding: " + d);
          d = (d + "").toLowerCase(), A = !0;
      }
  }
  a.prototype._isBuffer = !0;
  function P(d, f, l) {
    const A = d[f];
    d[f] = d[l], d[l] = A;
  }
  a.prototype.swap16 = function() {
    const f = this.length;
    if (f % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let l = 0; l < f; l += 2)
      P(this, l, l + 1);
    return this;
  }, a.prototype.swap32 = function() {
    const f = this.length;
    if (f % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let l = 0; l < f; l += 4)
      P(this, l, l + 3), P(this, l + 1, l + 2);
    return this;
  }, a.prototype.swap64 = function() {
    const f = this.length;
    if (f % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let l = 0; l < f; l += 8)
      P(this, l, l + 7), P(this, l + 1, l + 6), P(this, l + 2, l + 5), P(this, l + 3, l + 4);
    return this;
  }, a.prototype.toString = function() {
    const f = this.length;
    return f === 0 ? "" : arguments.length === 0 ? C(this, 0, f) : X.apply(this, arguments);
  }, a.prototype.toLocaleString = a.prototype.toString, a.prototype.equals = function(f) {
    if (!a.isBuffer(f)) throw new TypeError("Argument must be a Buffer");
    return this === f ? !0 : a.compare(this, f) === 0;
  }, a.prototype.inspect = function() {
    let f = "";
    const l = t.INSPECT_MAX_BYTES;
    return f = this.toString("hex", 0, l).replace(/(.{2})/g, "$1 ").trim(), this.length > l && (f += " ... "), "<Buffer " + f + ">";
  }, n && (a.prototype[n] = a.prototype.inspect), a.prototype.compare = function(f, l, A, M, D) {
    if (G(f, Uint8Array) && (f = a.from(f, f.offset, f.byteLength)), !a.isBuffer(f))
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof f
      );
    if (l === void 0 && (l = 0), A === void 0 && (A = f ? f.length : 0), M === void 0 && (M = 0), D === void 0 && (D = this.length), l < 0 || A > f.length || M < 0 || D > this.length)
      throw new RangeError("out of range index");
    if (M >= D && l >= A)
      return 0;
    if (M >= D)
      return -1;
    if (l >= A)
      return 1;
    if (l >>>= 0, A >>>= 0, M >>>= 0, D >>>= 0, this === f) return 0;
    let W = D - M, Ae = A - l;
    const Ie = Math.min(W, Ae), Oe = this.slice(M, D), ve = f.slice(l, A);
    for (let ke = 0; ke < Ie; ++ke)
      if (Oe[ke] !== ve[ke]) {
        W = Oe[ke], Ae = ve[ke];
        break;
      }
    return W < Ae ? -1 : Ae < W ? 1 : 0;
  };
  function J(d, f, l, A, M) {
    if (d.length === 0) return -1;
    if (typeof l == "string" ? (A = l, l = 0) : l > 2147483647 ? l = 2147483647 : l < -2147483648 && (l = -2147483648), l = +l, oe(l) && (l = M ? 0 : d.length - 1), l < 0 && (l = d.length + l), l >= d.length) {
      if (M) return -1;
      l = d.length - 1;
    } else if (l < 0)
      if (M) l = 0;
      else return -1;
    if (typeof f == "string" && (f = a.from(f, A)), a.isBuffer(f))
      return f.length === 0 ? -1 : K(d, f, l, A, M);
    if (typeof f == "number")
      return f = f & 255, typeof Uint8Array.prototype.indexOf == "function" ? M ? Uint8Array.prototype.indexOf.call(d, f, l) : Uint8Array.prototype.lastIndexOf.call(d, f, l) : K(d, [f], l, A, M);
    throw new TypeError("val must be string, number or Buffer");
  }
  function K(d, f, l, A, M) {
    let D = 1, W = d.length, Ae = f.length;
    if (A !== void 0 && (A = String(A).toLowerCase(), A === "ucs2" || A === "ucs-2" || A === "utf16le" || A === "utf-16le")) {
      if (d.length < 2 || f.length < 2)
        return -1;
      D = 2, W /= 2, Ae /= 2, l /= 2;
    }
    function Ie(ve, ke) {
      return D === 1 ? ve[ke] : ve.readUInt16BE(ke * D);
    }
    let Oe;
    if (M) {
      let ve = -1;
      for (Oe = l; Oe < W; Oe++)
        if (Ie(d, Oe) === Ie(f, ve === -1 ? 0 : Oe - ve)) {
          if (ve === -1 && (ve = Oe), Oe - ve + 1 === Ae) return ve * D;
        } else
          ve !== -1 && (Oe -= Oe - ve), ve = -1;
    } else
      for (l + Ae > W && (l = W - Ae), Oe = l; Oe >= 0; Oe--) {
        let ve = !0;
        for (let ke = 0; ke < Ae; ke++)
          if (Ie(d, Oe + ke) !== Ie(f, ke)) {
            ve = !1;
            break;
          }
        if (ve) return Oe;
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
    const M = d.length - l;
    A ? (A = Number(A), A > M && (A = M)) : A = M;
    const D = f.length;
    A > D / 2 && (A = D / 2);
    let W;
    for (W = 0; W < A; ++W) {
      const Ae = parseInt(f.substr(W * 2, 2), 16);
      if (oe(Ae)) return W;
      d[l + W] = Ae;
    }
    return W;
  }
  function ae(d, f, l, A) {
    return v(o(f, d.length - l), d, l, A);
  }
  function te(d, f, l, A) {
    return v(u(f), d, l, A);
  }
  function pe(d, f, l, A) {
    return v(x(f), d, l, A);
  }
  function de(d, f, l, A) {
    return v(y(f, d.length - l), d, l, A);
  }
  a.prototype.write = function(f, l, A, M) {
    if (l === void 0)
      M = "utf8", A = this.length, l = 0;
    else if (A === void 0 && typeof l == "string")
      M = l, A = this.length, l = 0;
    else if (isFinite(l))
      l = l >>> 0, isFinite(A) ? (A = A >>> 0, M === void 0 && (M = "utf8")) : (M = A, A = void 0);
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    const D = this.length - l;
    if ((A === void 0 || A > D) && (A = D), f.length > 0 && (A < 0 || l < 0) || l > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    M || (M = "utf8");
    let W = !1;
    for (; ; )
      switch (M) {
        case "hex":
          return re(this, f, l, A);
        case "utf8":
        case "utf-8":
          return ae(this, f, l, A);
        case "ascii":
        case "latin1":
        case "binary":
          return te(this, f, l, A);
        case "base64":
          return pe(this, f, l, A);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return de(this, f, l, A);
        default:
          if (W) throw new TypeError("Unknown encoding: " + M);
          M = ("" + M).toLowerCase(), W = !0;
      }
  }, a.prototype.toJSON = function() {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function R(d, f, l) {
    return f === 0 && l === d.length ? e.fromByteArray(d) : e.fromByteArray(d.slice(f, l));
  }
  function C(d, f, l) {
    l = Math.min(d.length, l);
    const A = [];
    let M = f;
    for (; M < l; ) {
      const D = d[M];
      let W = null, Ae = D > 239 ? 4 : D > 223 ? 3 : D > 191 ? 2 : 1;
      if (M + Ae <= l) {
        let Ie, Oe, ve, ke;
        switch (Ae) {
          case 1:
            D < 128 && (W = D);
            break;
          case 2:
            Ie = d[M + 1], (Ie & 192) === 128 && (ke = (D & 31) << 6 | Ie & 63, ke > 127 && (W = ke));
            break;
          case 3:
            Ie = d[M + 1], Oe = d[M + 2], (Ie & 192) === 128 && (Oe & 192) === 128 && (ke = (D & 15) << 12 | (Ie & 63) << 6 | Oe & 63, ke > 2047 && (ke < 55296 || ke > 57343) && (W = ke));
            break;
          case 4:
            Ie = d[M + 1], Oe = d[M + 2], ve = d[M + 3], (Ie & 192) === 128 && (Oe & 192) === 128 && (ve & 192) === 128 && (ke = (D & 15) << 18 | (Ie & 63) << 12 | (Oe & 63) << 6 | ve & 63, ke > 65535 && ke < 1114112 && (W = ke));
        }
      }
      W === null ? (W = 65533, Ae = 1) : W > 65535 && (W -= 65536, A.push(W >>> 10 & 1023 | 55296), W = 56320 | W & 1023), A.push(W), M += Ae;
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
  function j(d, f, l) {
    let A = "";
    l = Math.min(d.length, l);
    for (let M = f; M < l; ++M)
      A += String.fromCharCode(d[M] & 127);
    return A;
  }
  function ee(d, f, l) {
    let A = "";
    l = Math.min(d.length, l);
    for (let M = f; M < l; ++M)
      A += String.fromCharCode(d[M]);
    return A;
  }
  function le(d, f, l) {
    const A = d.length;
    (!f || f < 0) && (f = 0), (!l || l < 0 || l > A) && (l = A);
    let M = "";
    for (let D = f; D < l; ++D)
      M += me[d[D]];
    return M;
  }
  function we(d, f, l) {
    const A = d.slice(f, l);
    let M = "";
    for (let D = 0; D < A.length - 1; D += 2)
      M += String.fromCharCode(A[D] + A[D + 1] * 256);
    return M;
  }
  a.prototype.slice = function(f, l) {
    const A = this.length;
    f = ~~f, l = l === void 0 ? A : ~~l, f < 0 ? (f += A, f < 0 && (f = 0)) : f > A && (f = A), l < 0 ? (l += A, l < 0 && (l = 0)) : l > A && (l = A), l < f && (l = f);
    const M = this.subarray(f, l);
    return Object.setPrototypeOf(M, a.prototype), M;
  };
  function se(d, f, l) {
    if (d % 1 !== 0 || d < 0) throw new RangeError("offset is not uint");
    if (d + f > l) throw new RangeError("Trying to access beyond buffer length");
  }
  a.prototype.readUintLE = a.prototype.readUIntLE = function(f, l, A) {
    f = f >>> 0, l = l >>> 0, A || se(f, l, this.length);
    let M = this[f], D = 1, W = 0;
    for (; ++W < l && (D *= 256); )
      M += this[f + W] * D;
    return M;
  }, a.prototype.readUintBE = a.prototype.readUIntBE = function(f, l, A) {
    f = f >>> 0, l = l >>> 0, A || se(f, l, this.length);
    let M = this[f + --l], D = 1;
    for (; l > 0 && (D *= 256); )
      M += this[f + --l] * D;
    return M;
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
    f = f >>> 0, k(f, "offset");
    const l = this[f], A = this[f + 7];
    (l === void 0 || A === void 0) && F(f, this.length - 8);
    const M = l + this[++f] * 2 ** 8 + this[++f] * 2 ** 16 + this[++f] * 2 ** 24, D = this[++f] + this[++f] * 2 ** 8 + this[++f] * 2 ** 16 + A * 2 ** 24;
    return BigInt(M) + (BigInt(D) << BigInt(32));
  }), a.prototype.readBigUInt64BE = ge(function(f) {
    f = f >>> 0, k(f, "offset");
    const l = this[f], A = this[f + 7];
    (l === void 0 || A === void 0) && F(f, this.length - 8);
    const M = l * 2 ** 24 + this[++f] * 2 ** 16 + this[++f] * 2 ** 8 + this[++f], D = this[++f] * 2 ** 24 + this[++f] * 2 ** 16 + this[++f] * 2 ** 8 + A;
    return (BigInt(M) << BigInt(32)) + BigInt(D);
  }), a.prototype.readIntLE = function(f, l, A) {
    f = f >>> 0, l = l >>> 0, A || se(f, l, this.length);
    let M = this[f], D = 1, W = 0;
    for (; ++W < l && (D *= 256); )
      M += this[f + W] * D;
    return D *= 128, M >= D && (M -= Math.pow(2, 8 * l)), M;
  }, a.prototype.readIntBE = function(f, l, A) {
    f = f >>> 0, l = l >>> 0, A || se(f, l, this.length);
    let M = l, D = 1, W = this[f + --M];
    for (; M > 0 && (D *= 256); )
      W += this[f + --M] * D;
    return D *= 128, W >= D && (W -= Math.pow(2, 8 * l)), W;
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
    f = f >>> 0, k(f, "offset");
    const l = this[f], A = this[f + 7];
    (l === void 0 || A === void 0) && F(f, this.length - 8);
    const M = this[f + 4] + this[f + 5] * 2 ** 8 + this[f + 6] * 2 ** 16 + (A << 24);
    return (BigInt(M) << BigInt(32)) + BigInt(l + this[++f] * 2 ** 8 + this[++f] * 2 ** 16 + this[++f] * 2 ** 24);
  }), a.prototype.readBigInt64BE = ge(function(f) {
    f = f >>> 0, k(f, "offset");
    const l = this[f], A = this[f + 7];
    (l === void 0 || A === void 0) && F(f, this.length - 8);
    const M = (l << 24) + // Overflow
    this[++f] * 2 ** 16 + this[++f] * 2 ** 8 + this[++f];
    return (BigInt(M) << BigInt(32)) + BigInt(this[++f] * 2 ** 24 + this[++f] * 2 ** 16 + this[++f] * 2 ** 8 + A);
  }), a.prototype.readFloatLE = function(f, l) {
    return f = f >>> 0, l || se(f, 4, this.length), r.read(this, f, !0, 23, 4);
  }, a.prototype.readFloatBE = function(f, l) {
    return f = f >>> 0, l || se(f, 4, this.length), r.read(this, f, !1, 23, 4);
  }, a.prototype.readDoubleLE = function(f, l) {
    return f = f >>> 0, l || se(f, 8, this.length), r.read(this, f, !0, 52, 8);
  }, a.prototype.readDoubleBE = function(f, l) {
    return f = f >>> 0, l || se(f, 8, this.length), r.read(this, f, !1, 52, 8);
  };
  function Z(d, f, l, A, M, D) {
    if (!a.isBuffer(d)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (f > M || f < D) throw new RangeError('"value" argument is out of bounds');
    if (l + A > d.length) throw new RangeError("Index out of range");
  }
  a.prototype.writeUintLE = a.prototype.writeUIntLE = function(f, l, A, M) {
    if (f = +f, l = l >>> 0, A = A >>> 0, !M) {
      const Ae = Math.pow(2, 8 * A) - 1;
      Z(this, f, l, A, Ae, 0);
    }
    let D = 1, W = 0;
    for (this[l] = f & 255; ++W < A && (D *= 256); )
      this[l + W] = f / D & 255;
    return l + A;
  }, a.prototype.writeUintBE = a.prototype.writeUIntBE = function(f, l, A, M) {
    if (f = +f, l = l >>> 0, A = A >>> 0, !M) {
      const Ae = Math.pow(2, 8 * A) - 1;
      Z(this, f, l, A, Ae, 0);
    }
    let D = A - 1, W = 1;
    for (this[l + D] = f & 255; --D >= 0 && (W *= 256); )
      this[l + D] = f / W & 255;
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
  function ue(d, f, l, A, M) {
    B(f, A, M, d, l, 7);
    let D = Number(f & BigInt(4294967295));
    d[l++] = D, D = D >> 8, d[l++] = D, D = D >> 8, d[l++] = D, D = D >> 8, d[l++] = D;
    let W = Number(f >> BigInt(32) & BigInt(4294967295));
    return d[l++] = W, W = W >> 8, d[l++] = W, W = W >> 8, d[l++] = W, W = W >> 8, d[l++] = W, l;
  }
  function w(d, f, l, A, M) {
    B(f, A, M, d, l, 7);
    let D = Number(f & BigInt(4294967295));
    d[l + 7] = D, D = D >> 8, d[l + 6] = D, D = D >> 8, d[l + 5] = D, D = D >> 8, d[l + 4] = D;
    let W = Number(f >> BigInt(32) & BigInt(4294967295));
    return d[l + 3] = W, W = W >> 8, d[l + 2] = W, W = W >> 8, d[l + 1] = W, W = W >> 8, d[l] = W, l + 8;
  }
  a.prototype.writeBigUInt64LE = ge(function(f, l = 0) {
    return ue(this, f, l, BigInt(0), BigInt("0xffffffffffffffff"));
  }), a.prototype.writeBigUInt64BE = ge(function(f, l = 0) {
    return w(this, f, l, BigInt(0), BigInt("0xffffffffffffffff"));
  }), a.prototype.writeIntLE = function(f, l, A, M) {
    if (f = +f, l = l >>> 0, !M) {
      const Ie = Math.pow(2, 8 * A - 1);
      Z(this, f, l, A, Ie - 1, -Ie);
    }
    let D = 0, W = 1, Ae = 0;
    for (this[l] = f & 255; ++D < A && (W *= 256); )
      f < 0 && Ae === 0 && this[l + D - 1] !== 0 && (Ae = 1), this[l + D] = (f / W >> 0) - Ae & 255;
    return l + A;
  }, a.prototype.writeIntBE = function(f, l, A, M) {
    if (f = +f, l = l >>> 0, !M) {
      const Ie = Math.pow(2, 8 * A - 1);
      Z(this, f, l, A, Ie - 1, -Ie);
    }
    let D = A - 1, W = 1, Ae = 0;
    for (this[l + D] = f & 255; --D >= 0 && (W *= 256); )
      f < 0 && Ae === 0 && this[l + D + 1] !== 0 && (Ae = 1), this[l + D] = (f / W >> 0) - Ae & 255;
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
    return ue(this, f, l, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  }), a.prototype.writeBigInt64BE = ge(function(f, l = 0) {
    return w(this, f, l, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function ie(d, f, l, A, M, D) {
    if (l + A > d.length) throw new RangeError("Index out of range");
    if (l < 0) throw new RangeError("Index out of range");
  }
  function he(d, f, l, A, M) {
    return f = +f, l = l >>> 0, M || ie(d, f, l, 4), r.write(d, f, l, A, 23, 4), l + 4;
  }
  a.prototype.writeFloatLE = function(f, l, A) {
    return he(this, f, l, !0, A);
  }, a.prototype.writeFloatBE = function(f, l, A) {
    return he(this, f, l, !1, A);
  };
  function Te(d, f, l, A, M) {
    return f = +f, l = l >>> 0, M || ie(d, f, l, 8), r.write(d, f, l, A, 52, 8), l + 8;
  }
  a.prototype.writeDoubleLE = function(f, l, A) {
    return Te(this, f, l, !0, A);
  }, a.prototype.writeDoubleBE = function(f, l, A) {
    return Te(this, f, l, !1, A);
  }, a.prototype.copy = function(f, l, A, M) {
    if (!a.isBuffer(f)) throw new TypeError("argument should be a Buffer");
    if (A || (A = 0), !M && M !== 0 && (M = this.length), l >= f.length && (l = f.length), l || (l = 0), M > 0 && M < A && (M = A), M === A || f.length === 0 || this.length === 0) return 0;
    if (l < 0)
      throw new RangeError("targetStart out of bounds");
    if (A < 0 || A >= this.length) throw new RangeError("Index out of range");
    if (M < 0) throw new RangeError("sourceEnd out of bounds");
    M > this.length && (M = this.length), f.length - l < M - A && (M = f.length - l + A);
    const D = M - A;
    return this === f && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(l, A, M) : Uint8Array.prototype.set.call(
      f,
      this.subarray(A, M),
      l
    ), D;
  }, a.prototype.fill = function(f, l, A, M) {
    if (typeof f == "string") {
      if (typeof l == "string" ? (M = l, l = 0, A = this.length) : typeof A == "string" && (M = A, A = this.length), M !== void 0 && typeof M != "string")
        throw new TypeError("encoding must be a string");
      if (typeof M == "string" && !a.isEncoding(M))
        throw new TypeError("Unknown encoding: " + M);
      if (f.length === 1) {
        const W = f.charCodeAt(0);
        (M === "utf8" && W < 128 || M === "latin1") && (f = W);
      }
    } else typeof f == "number" ? f = f & 255 : typeof f == "boolean" && (f = Number(f));
    if (l < 0 || this.length < l || this.length < A)
      throw new RangeError("Out of range index");
    if (A <= l)
      return this;
    l = l >>> 0, A = A === void 0 ? this.length : A >>> 0, f || (f = 0);
    let D;
    if (typeof f == "number")
      for (D = l; D < A; ++D)
        this[D] = f;
    else {
      const W = a.isBuffer(f) ? f : a.from(f, M), Ae = W.length;
      if (Ae === 0)
        throw new TypeError('The value "' + f + '" is invalid for argument "value"');
      for (D = 0; D < A - l; ++D)
        this[D + l] = W[D % Ae];
    }
    return this;
  };
  const ce = {};
  function fe(d, f, l) {
    ce[d] = class extends l {
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
      set code(M) {
        Object.defineProperty(this, "code", {
          configurable: !0,
          enumerable: !0,
          value: M,
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
      let A = `The value of "${d}" is out of range.`, M = l;
      return Number.isInteger(l) && Math.abs(l) > 2 ** 32 ? M = _(String(l)) : typeof l == "bigint" && (M = String(l), (l > BigInt(2) ** BigInt(32) || l < -(BigInt(2) ** BigInt(32))) && (M = _(M)), M += "n"), A += ` It must be ${f}. Received ${M}`, A;
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
    k(f, "offset"), (d[f] === void 0 || d[f + l] === void 0) && F(f, d.length - (l + 1));
  }
  function B(d, f, l, A, M, D) {
    if (d > l || d < f) {
      const W = typeof f == "bigint" ? "n" : "";
      let Ae;
      throw f === 0 || f === BigInt(0) ? Ae = `>= 0${W} and < 2${W} ** ${(D + 1) * 8}${W}` : Ae = `>= -(2${W} ** ${(D + 1) * 8 - 1}${W}) and < 2 ** ${(D + 1) * 8 - 1}${W}`, new ce.ERR_OUT_OF_RANGE("value", Ae, d);
    }
    E(A, M, D);
  }
  function k(d, f) {
    if (typeof d != "number")
      throw new ce.ERR_INVALID_ARG_TYPE(f, "number", d);
  }
  function F(d, f, l) {
    throw Math.floor(d) !== d ? (k(d, l), new ce.ERR_OUT_OF_RANGE("offset", "an integer", d)) : f < 0 ? new ce.ERR_BUFFER_OUT_OF_BOUNDS() : new ce.ERR_OUT_OF_RANGE(
      "offset",
      `>= 0 and <= ${f}`,
      d
    );
  }
  const q = /[^+/0-9A-Za-z-_]/g;
  function h(d) {
    if (d = d.split("=")[0], d = d.trim().replace(q, ""), d.length < 2) return "";
    for (; d.length % 4 !== 0; )
      d = d + "=";
    return d;
  }
  function o(d, f) {
    f = f || 1 / 0;
    let l;
    const A = d.length;
    let M = null;
    const D = [];
    for (let W = 0; W < A; ++W) {
      if (l = d.charCodeAt(W), l > 55295 && l < 57344) {
        if (!M) {
          if (l > 56319) {
            (f -= 3) > -1 && D.push(239, 191, 189);
            continue;
          } else if (W + 1 === A) {
            (f -= 3) > -1 && D.push(239, 191, 189);
            continue;
          }
          M = l;
          continue;
        }
        if (l < 56320) {
          (f -= 3) > -1 && D.push(239, 191, 189), M = l;
          continue;
        }
        l = (M - 55296 << 10 | l - 56320) + 65536;
      } else M && (f -= 3) > -1 && D.push(239, 191, 189);
      if (M = null, l < 128) {
        if ((f -= 1) < 0) break;
        D.push(l);
      } else if (l < 2048) {
        if ((f -= 2) < 0) break;
        D.push(
          l >> 6 | 192,
          l & 63 | 128
        );
      } else if (l < 65536) {
        if ((f -= 3) < 0) break;
        D.push(
          l >> 12 | 224,
          l >> 6 & 63 | 128,
          l & 63 | 128
        );
      } else if (l < 1114112) {
        if ((f -= 4) < 0) break;
        D.push(
          l >> 18 | 240,
          l >> 12 & 63 | 128,
          l >> 6 & 63 | 128,
          l & 63 | 128
        );
      } else
        throw new Error("Invalid code point");
    }
    return D;
  }
  function u(d) {
    const f = [];
    for (let l = 0; l < d.length; ++l)
      f.push(d.charCodeAt(l) & 255);
    return f;
  }
  function y(d, f) {
    let l, A, M;
    const D = [];
    for (let W = 0; W < d.length && !((f -= 2) < 0); ++W)
      l = d.charCodeAt(W), A = l >> 8, M = l % 256, D.push(M), D.push(A);
    return D;
  }
  function x(d) {
    return e.toByteArray(h(d));
  }
  function v(d, f, l, A) {
    let M;
    for (M = 0; M < A && !(M + l >= f.length || M >= d.length); ++M)
      f[M + l] = d[M];
    return M;
  }
  function G(d, f) {
    return d instanceof f || d != null && d.constructor != null && d.constructor.name != null && d.constructor.name === f.name;
  }
  function oe(d) {
    return d !== d;
  }
  const me = function() {
    const d = "0123456789abcdef", f = new Array(256);
    for (let l = 0; l < 16; ++l) {
      const A = l * 16;
      for (let M = 0; M < 16; ++M)
        f[A + M] = d[l] + d[M];
    }
    return f;
  }();
  function ge(d) {
    return typeof BigInt > "u" ? Be : d;
  }
  function Be() {
    throw new Error("BigInt not supported");
  }
})(Oc);
var to;
(function(t) {
  t[t.SysFatal = 1] = "SysFatal", t[t.SysTransient = 2] = "SysTransient", t[t.DestinationInvalid = 3] = "DestinationInvalid", t[t.CanisterReject = 4] = "CanisterReject", t[t.CanisterError = 5] = "CanisterError";
})(to || (to = {}));
const zi = "abcdefghijklmnopqrstuvwxyz234567", ln = /* @__PURE__ */ Object.create(null);
for (let t = 0; t < zi.length; t++)
  ln[zi[t]] = t;
ln[0] = ln.o;
ln[1] = ln.i;
function T0(t) {
  let e = 0, r = 0, n = "";
  function i(s) {
    return e < 0 ? r |= s >> -e : r = s << e & 248, e > 3 ? (e -= 8, 1) : (e < 4 && (n += zi[r >> 3], e += 5), 0);
  }
  for (let s = 0; s < t.length; )
    s += i(t[s]);
  return n + (e < 0 ? zi[r >> 3] : "");
}
function A0(t) {
  let e = 0, r = 0;
  const n = new Uint8Array(t.length * 4 / 3 | 0);
  let i = 0;
  function s(c) {
    let a = ln[c.toLowerCase()];
    if (a === void 0)
      throw new Error(`Invalid character: ${JSON.stringify(c)}`);
    a <<= 3, r |= a >>> e, e += 5, e >= 8 && (n[i++] = r, e -= 8, e > 0 ? r = a << 5 - e & 255 : r = 0);
  }
  for (const c of t)
    s(c);
  return n.slice(0, i);
}
const S0 = new Uint32Array([
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
function B0(t) {
  const e = new Uint8Array(t);
  let r = -1;
  for (let n = 0; n < e.length; n++) {
    const s = (e[n] ^ r) & 255;
    r = S0[s] ^ r >>> 8;
  }
  return (r ^ -1) >>> 0;
}
function v0(t) {
  return t instanceof Uint8Array || t != null && typeof t == "object" && t.constructor.name === "Uint8Array";
}
function Uc(t, ...e) {
  if (!v0(t))
    throw new Error("Uint8Array expected");
  if (e.length > 0 && !e.includes(t.length))
    throw new Error(`Uint8Array expected of length ${e}, not of length=${t.length}`);
}
function ua(t, e = !0) {
  if (t.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (e && t.finished)
    throw new Error("Hash#digest() has already been called");
}
function N0(t, e) {
  Uc(t);
  const r = e.outputLen;
  if (t.length < r)
    throw new Error(`digestInto() expects output buffer of length at least ${r}`);
}
const Jr = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Rs = (t) => new DataView(t.buffer, t.byteOffset, t.byteLength), Yt = (t, e) => t << 32 - e | t >>> e;
new Uint8Array(new Uint32Array([287454020]).buffer)[0];
function R0(t) {
  if (typeof t != "string")
    throw new Error(`utf8ToBytes expected string, got ${typeof t}`);
  return new Uint8Array(new TextEncoder().encode(t));
}
function Fc(t) {
  return typeof t == "string" && (t = R0(t)), Uc(t), t;
}
class O0 {
  // Safe version that clones internal state
  clone() {
    return this._cloneInto();
  }
}
function Io(t) {
  const e = (n) => t().update(Fc(n)).digest(), r = t();
  return e.outputLen = r.outputLen, e.blockLen = r.blockLen, e.create = () => t(), e;
}
function Pc(t = 32) {
  if (Jr && typeof Jr.getRandomValues == "function")
    return Jr.getRandomValues(new Uint8Array(t));
  if (Jr && typeof Jr.randomBytes == "function")
    return Jr.randomBytes(t);
  throw new Error("crypto.getRandomValues must be defined");
}
function I0(t, e, r, n) {
  if (typeof t.setBigUint64 == "function")
    return t.setBigUint64(e, r, n);
  const i = BigInt(32), s = BigInt(4294967295), c = Number(r >> i & s), a = Number(r & s), p = n ? 4 : 0, g = n ? 0 : 4;
  t.setUint32(e + p, c, n), t.setUint32(e + g, a, n);
}
const U0 = (t, e, r) => t & e ^ ~t & r, F0 = (t, e, r) => t & e ^ t & r ^ e & r;
class Cc extends O0 {
  constructor(e, r, n, i) {
    super(), this.blockLen = e, this.outputLen = r, this.padOffset = n, this.isLE = i, this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.buffer = new Uint8Array(e), this.view = Rs(this.buffer);
  }
  update(e) {
    ua(this);
    const { view: r, buffer: n, blockLen: i } = this;
    e = Fc(e);
    const s = e.length;
    for (let c = 0; c < s; ) {
      const a = Math.min(i - this.pos, s - c);
      if (a === i) {
        const p = Rs(e);
        for (; i <= s - c; c += i)
          this.process(p, c);
        continue;
      }
      n.set(e.subarray(c, c + a), this.pos), this.pos += a, c += a, this.pos === i && (this.process(r, 0), this.pos = 0);
    }
    return this.length += e.length, this.roundClean(), this;
  }
  digestInto(e) {
    ua(this), N0(e, this), this.finished = !0;
    const { buffer: r, view: n, blockLen: i, isLE: s } = this;
    let { pos: c } = this;
    r[c++] = 128, this.buffer.subarray(c).fill(0), this.padOffset > i - c && (this.process(n, 0), c = 0);
    for (let T = c; T < i; T++)
      r[T] = 0;
    I0(n, i - 8, BigInt(this.length * 8), s), this.process(n, 0);
    const a = Rs(e), p = this.outputLen;
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
const P0 = /* @__PURE__ */ new Uint32Array([
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
]), gr = /* @__PURE__ */ new Uint32Array([
  1779033703,
  3144134277,
  1013904242,
  2773480762,
  1359893119,
  2600822924,
  528734635,
  1541459225
]), yr = /* @__PURE__ */ new Uint32Array(64);
class Mc extends Cc {
  constructor() {
    super(64, 32, 8, !1), this.A = gr[0] | 0, this.B = gr[1] | 0, this.C = gr[2] | 0, this.D = gr[3] | 0, this.E = gr[4] | 0, this.F = gr[5] | 0, this.G = gr[6] | 0, this.H = gr[7] | 0;
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
      yr[T] = e.getUint32(r, !1);
    for (let T = 16; T < 64; T++) {
      const N = yr[T - 15], S = yr[T - 2], m = Yt(N, 7) ^ Yt(N, 18) ^ N >>> 3, I = Yt(S, 17) ^ Yt(S, 19) ^ S >>> 10;
      yr[T] = I + yr[T - 7] + m + yr[T - 16] | 0;
    }
    let { A: n, B: i, C: s, D: c, E: a, F: p, G: g, H: b } = this;
    for (let T = 0; T < 64; T++) {
      const N = Yt(a, 6) ^ Yt(a, 11) ^ Yt(a, 25), S = b + N + U0(a, p, g) + P0[T] + yr[T] | 0, I = (Yt(n, 2) ^ Yt(n, 13) ^ Yt(n, 22)) + F0(n, i, s) | 0;
      b = g, g = p, p = a, a = c + S | 0, c = s, s = i, i = n, n = S + I | 0;
    }
    n = n + this.A | 0, i = i + this.B | 0, s = s + this.C | 0, c = c + this.D | 0, a = a + this.E | 0, p = p + this.F | 0, g = g + this.G | 0, b = b + this.H | 0, this.set(n, i, s, c, a, p, g, b);
  }
  roundClean() {
    yr.fill(0);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
  }
}
class C0 extends Mc {
  constructor() {
    super(), this.A = -1056596264, this.B = 914150663, this.C = 812702999, this.D = -150054599, this.E = -4191439, this.F = 1750603025, this.G = 1694076839, this.H = -1090891868, this.outputLen = 28;
  }
}
const Uo = /* @__PURE__ */ Io(() => new Mc()), M0 = /* @__PURE__ */ Io(() => new C0());
function k0(t) {
  return M0.create().update(new Uint8Array(t)).digest();
}
const oi = "__principal__", $0 = 2, fa = 4, q0 = "aaaaa-aa", H0 = (t) => {
  var e;
  return new Uint8Array(((e = t.match(/.{1,2}/g)) !== null && e !== void 0 ? e : []).map((r) => parseInt(r, 16)));
}, V0 = (t) => t.reduce((e, r) => e + r.toString(16).padStart(2, "0"), "");
let Me = class xi {
  constructor(e) {
    this._arr = e, this._isPrincipal = !0;
  }
  static anonymous() {
    return new this(new Uint8Array([fa]));
  }
  /**
   * Utility method, returning the principal representing the management canister, decoded from the hex string `'aaaaa-aa'`
   * @returns {Principal} principal of the management canister
   */
  static managementCanister() {
    return this.fromHex(q0);
  }
  static selfAuthenticating(e) {
    const r = k0(e);
    return new this(new Uint8Array([...r, $0]));
  }
  static from(e) {
    if (typeof e == "string")
      return xi.fromText(e);
    if (Object.getPrototypeOf(e) === Uint8Array.prototype)
      return new xi(e);
    if (typeof e == "object" && e !== null && e._isPrincipal === !0)
      return new xi(e._arr);
    throw new Error(`Impossible to convert ${JSON.stringify(e)} to Principal.`);
  }
  static fromHex(e) {
    return new this(H0(e));
  }
  static fromText(e) {
    let r = e;
    if (e.includes(oi)) {
      const c = JSON.parse(e);
      oi in c && (r = c[oi]);
    }
    const n = r.toLowerCase().replace(/-/g, "");
    let i = A0(n);
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
    return this._arr.byteLength === 1 && this._arr[0] === fa;
  }
  toUint8Array() {
    return this._arr;
  }
  toHex() {
    return V0(this._arr).toUpperCase();
  }
  toText() {
    const e = new ArrayBuffer(4);
    new DataView(e).setUint32(0, B0(this._arr));
    const n = new Uint8Array(e), i = Uint8Array.from(this._arr), s = new Uint8Array([...n, ...i]), a = T0(s).match(/.{1,5}/g);
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
    return { [oi]: this.toText() };
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
function ir(...t) {
  const e = new Uint8Array(t.reduce((n, i) => n + i.byteLength, 0));
  let r = 0;
  for (const n of t)
    e.set(new Uint8Array(n), r), r += n.byteLength;
  return e.buffer;
}
function jt(t) {
  return [...new Uint8Array(t)].map((e) => e.toString(16).padStart(2, "0")).join("");
}
const L0 = new RegExp(/^[0-9a-fA-F]+$/);
function Wi(t) {
  if (!L0.test(t))
    throw new Error("Invalid hexadecimal string.");
  const e = [...t].reduce((r, n, i) => (r[i / 2 | 0] = (r[i / 2 | 0] || "") + n, r), []).map((r) => Number.parseInt(r, 16));
  return new Uint8Array(e).buffer;
}
function kc(t, e) {
  if (t.byteLength !== e.byteLength)
    return t.byteLength - e.byteLength;
  const r = new Uint8Array(t), n = new Uint8Array(e);
  for (let i = 0; i < r.length; i++)
    if (r[i] !== n[i])
      return r[i] - n[i];
  return 0;
}
function Fo(t, e) {
  return kc(t, e) === 0;
}
function Ei(t) {
  return new DataView(t.buffer, t.byteOffset, t.byteLength).buffer;
}
function $c(t) {
  return t instanceof Uint8Array ? Ei(t) : t instanceof ArrayBuffer ? t : Array.isArray(t) ? Ei(new Uint8Array(t)) : "buffer" in t ? $c(t.buffer) : Ei(new Uint8Array(t));
}
class tt extends Error {
  constructor(e) {
    super(e), this.message = e, this.name = "AgentError", this.__proto__ = tt.prototype, Object.setPrototypeOf(this, tt.prototype);
  }
}
function qe(...t) {
  const e = new Uint8Array(t.reduce((n, i) => n + i.byteLength, 0));
  let r = 0;
  for (const n of t)
    e.set(new Uint8Array(n), r), r += n.byteLength;
  return e;
}
class gn {
  /**
   * Creates a new instance of a pipe
   * @param buffer an optional buffer to start with
   * @param length an optional amount of bytes to use for the length.
   */
  constructor(e, r = (e == null ? void 0 : e.byteLength) || 0) {
    this._buffer = Di(e || new ArrayBuffer(0)), this._view = new Uint8Array(this._buffer, 0, r);
  }
  get buffer() {
    return Di(this._view.slice());
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
function Os(t) {
  return new DataView(t.buffer, t.byteOffset, t.byteLength).buffer;
}
function Di(t) {
  return t instanceof Uint8Array ? Os(t) : t instanceof ArrayBuffer ? t : Array.isArray(t) ? Os(new Uint8Array(t)) : "buffer" in t ? Di(t.buffer) : Os(new Uint8Array(t));
}
function G0(t) {
  const r = new TextEncoder().encode(t);
  let n = 0;
  for (const i of r)
    n = (n * 223 + i) % 2 ** 32;
  return n;
}
function rr(t) {
  if (/^_\d+_$/.test(t) || /^_0x[0-9a-fA-F]+_$/.test(t)) {
    const e = +t.slice(1, -1);
    if (Number.isSafeInteger(e) && e >= 0 && e < 2 ** 32)
      return e;
  }
  return G0(t);
}
function qc() {
  throw new Error("unexpected end of buffer");
}
function Gr(t, e) {
  return t.byteLength < e && qc(), t.read(e);
}
function jr(t) {
  const e = t.readUint8();
  return e === void 0 && qc(), e;
}
function We(t) {
  if (typeof t == "number" && (t = BigInt(t)), t < BigInt(0))
    throw new Error("Cannot leb encode negative values.");
  const e = (t === BigInt(0) ? 0 : Math.ceil(Math.log2(Number(t)))) + 1, r = new gn(new ArrayBuffer(e), 0);
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
function it(t) {
  let e = BigInt(1), r = BigInt(0), n;
  do
    n = jr(t), r += BigInt(n & 127).valueOf() * e, e *= BigInt(128);
  while (n >= 128);
  return r;
}
function rt(t) {
  typeof t == "number" && (t = BigInt(t));
  const e = t < BigInt(0);
  e && (t = -t - BigInt(1));
  const r = (t === BigInt(0) ? 0 : Math.ceil(Math.log2(Number(t)))) + 1, n = new gn(new ArrayBuffer(r), 0);
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
function xr(t) {
  const e = new Uint8Array(t.buffer);
  let r = 0;
  for (; r < e.byteLength; r++)
    if (e[r] < 128) {
      if (!(e[r] & 64))
        return it(t);
      break;
    }
  const n = new Uint8Array(Gr(t, r + 1));
  let i = BigInt(0);
  for (let s = n.byteLength - 1; s >= 0; s--)
    i = i * BigInt(128) + BigInt(128 - (n[s] & 127) - 1);
  return -i - BigInt(1);
}
function j0(t, e) {
  if (BigInt(t) < BigInt(0))
    throw new Error("Cannot write negative values.");
  return Hc(t, e);
}
function Hc(t, e) {
  t = BigInt(t);
  const r = new gn(new ArrayBuffer(Math.min(1, e)), 0);
  let n = 0, i = BigInt(256), s = BigInt(0), c = Number(t % i);
  for (r.write(new Uint8Array([c])); ++n < e; )
    t < 0 && s === BigInt(0) && c !== 0 && (s = BigInt(1)), c = Number((t / i - s) % BigInt(256)), r.write(new Uint8Array([c])), i *= BigInt(256);
  return r.buffer;
}
function Vc(t, e) {
  let r = BigInt(jr(t)), n = BigInt(1), i = 0;
  for (; ++i < e; ) {
    n *= BigInt(256);
    const s = BigInt(jr(t));
    r = r + n * s;
  }
  return r;
}
function z0(t, e) {
  let r = Vc(t, e);
  const n = BigInt(2) ** (BigInt(8) * BigInt(e - 1) + BigInt(7));
  return r >= n && (r -= n * BigInt(2)), r;
}
function ro(t) {
  const e = BigInt(t);
  if (t < 0)
    throw new RangeError("Input must be non-negative");
  return BigInt(1) << e;
}
const Ti = "DIDL", la = 400;
function $n(t, e, r) {
  return t.map((n, i) => r(n, e[i]));
}
class W0 {
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
    const e = We(this._typs.length), r = qe(...this._typs);
    return qe(e, r);
  }
  indexOf(e) {
    if (!this._idx.has(e))
      throw new Error("Missing type index for " + e);
    return rt(this._idx.get(e) || 0);
  }
}
class D0 {
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
class os {
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
class Ut extends os {
  checkType(e) {
    if (this.name !== e.name)
      throw new Error(`type mismatch: type on the wire ${e.name}, expect type ${this.name}`);
    return e;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _buildTypeTableImpl(e) {
  }
}
class Rr extends os {
  checkType(e) {
    if (e instanceof Or) {
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
class Lc extends Ut {
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
    return rt(
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
class Gc extends os {
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
    return r instanceof Or ? i = () => r.getType() : i = () => r, Object.defineProperty(n, "type", {
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
class jc extends Ut {
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
    return rt(
      -2
      /* IDLTypeIds.Bool */
    );
  }
  decodeValue(e, r) {
    switch (this.checkType(r), jr(e)) {
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
class zc extends Ut {
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
    return rt(
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
class Yi extends Ut {
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
    return rt(
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
class Wc extends Ut {
  accept(e, r) {
    return e.visitText(this, r);
  }
  covariant(e) {
    if (typeof e == "string")
      return !0;
    throw new Error(`Invalid ${this.display()} argument: ${Xe(e)}`);
  }
  encodeValue(e) {
    const r = new TextEncoder().encode(e), n = We(r.byteLength);
    return qe(n, r);
  }
  encodeType() {
    return rt(
      -15
      /* IDLTypeIds.Text */
    );
  }
  decodeValue(e, r) {
    this.checkType(r);
    const n = it(e), i = Gr(e, Number(n));
    return new TextDecoder("utf8", { fatal: !0 }).decode(i);
  }
  get name() {
    return "text";
  }
  valueToString(e) {
    return '"' + e + '"';
  }
}
class Dc extends Ut {
  accept(e, r) {
    return e.visitInt(this, r);
  }
  covariant(e) {
    if (typeof e == "bigint" || Number.isInteger(e))
      return !0;
    throw new Error(`Invalid ${this.display()} argument: ${Xe(e)}`);
  }
  encodeValue(e) {
    return rt(e);
  }
  encodeType() {
    return rt(
      -4
      /* IDLTypeIds.Int */
    );
  }
  decodeValue(e, r) {
    return this.checkType(r), xr(e);
  }
  get name() {
    return "int";
  }
  valueToString(e) {
    return e.toString();
  }
}
class Yc extends Ut {
  accept(e, r) {
    return e.visitNat(this, r);
  }
  covariant(e) {
    if (typeof e == "bigint" && e >= BigInt(0) || Number.isInteger(e) && e >= 0)
      return !0;
    throw new Error(`Invalid ${this.display()} argument: ${Xe(e)}`);
  }
  encodeValue(e) {
    return We(e);
  }
  encodeType() {
    return rt(
      -3
      /* IDLTypeIds.Nat */
    );
  }
  decodeValue(e, r) {
    return this.checkType(r), it(e);
  }
  get name() {
    return "nat";
  }
  valueToString(e) {
    return e.toString();
  }
}
class Po extends Ut {
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
    return rt(e);
  }
  decodeValue(e, r) {
    this.checkType(r);
    const n = Gr(e, this._bits / 8), i = new DataView(n);
    return this._bits === 32 ? i.getFloat32(0, !0) : i.getFloat64(0, !0);
  }
  get name() {
    return "float" + this._bits;
  }
  valueToString(e) {
    return e.toString();
  }
}
class zr extends Ut {
  constructor(e) {
    super(), this._bits = e;
  }
  accept(e, r) {
    return e.visitFixedInt(this, r);
  }
  covariant(e) {
    const r = ro(this._bits - 1) * BigInt(-1), n = ro(this._bits - 1) - BigInt(1);
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
    return Hc(e, this._bits / 8);
  }
  encodeType() {
    const e = Math.log2(this._bits) - 3;
    return rt(-9 - e);
  }
  decodeValue(e, r) {
    this.checkType(r);
    const n = z0(e, this._bits / 8);
    return this._bits <= 32 ? Number(n) : n;
  }
  get name() {
    return `int${this._bits}`;
  }
  valueToString(e) {
    return e.toString();
  }
}
class vr extends Ut {
  constructor(e) {
    super(), this._bits = e;
  }
  accept(e, r) {
    return e.visitFixedNat(this, r);
  }
  covariant(e) {
    const r = ro(this._bits);
    let n = !1;
    if (typeof e == "bigint" && e >= BigInt(0) ? n = e < r : Number.isInteger(e) && e >= 0 ? n = BigInt(e) < r : n = !1, n)
      return !0;
    throw new Error(`Invalid ${this.display()} argument: ${Xe(e)}`);
  }
  encodeValue(e) {
    return j0(e, this._bits / 8);
  }
  encodeType() {
    const e = Math.log2(this._bits) - 3;
    return rt(-5 - e);
  }
  decodeValue(e, r) {
    this.checkType(r);
    const n = Vc(e, this._bits / 8);
    return this._bits <= 32 ? Number(n) : n;
  }
  get name() {
    return `nat${this._bits}`;
  }
  valueToString(e) {
    return e.toString();
  }
}
class as extends Rr {
  constructor(e) {
    super(), this._type = e, this._blobOptimization = !1, e instanceof vr && e._bits === 8 && (this._blobOptimization = !0);
  }
  accept(e, r) {
    return e.visitVec(this, this._type, r);
  }
  covariant(e) {
    const r = this._type instanceof vr ? this._type._bits : this._type instanceof zr ? this._type._bits : 0;
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
    const r = We(e.length);
    if (this._blobOptimization)
      return qe(r, new Uint8Array(e));
    if (ArrayBuffer.isView(e))
      return qe(r, new Uint8Array(e.buffer));
    const n = new gn(new ArrayBuffer(r.byteLength + e.length), 0);
    n.write(r);
    for (const i of e) {
      const s = this._type.encodeValue(i);
      n.write(new Uint8Array(s));
    }
    return n.buffer;
  }
  _buildTypeTableImpl(e) {
    this._type.buildTypeTable(e);
    const r = rt(
      -19
      /* IDLTypeIds.Vector */
    ), n = this._type.encodeType(e);
    e.add(this, qe(r, n));
  }
  decodeValue(e, r) {
    const n = this.checkType(r);
    if (!(n instanceof as))
      throw new Error("Not a vector type");
    const i = Number(it(e));
    if (this._type instanceof vr) {
      if (this._type._bits == 8)
        return new Uint8Array(e.read(i));
      if (this._type._bits == 16)
        return new Uint16Array(e.read(i * 2));
      if (this._type._bits == 32)
        return new Uint32Array(e.read(i * 4));
      if (this._type._bits == 64)
        return new BigUint64Array(e.read(i * 8));
    }
    if (this._type instanceof zr) {
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
class hn extends Rr {
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
    return e.length === 0 ? new Uint8Array([0]) : qe(new Uint8Array([1]), this._type.encodeValue(e[0]));
  }
  _buildTypeTableImpl(e) {
    this._type.buildTypeTable(e);
    const r = rt(
      -18
      /* IDLTypeIds.Opt */
    ), n = this._type.encodeType(e);
    e.add(this, qe(r, n));
  }
  decodeValue(e, r) {
    const n = this.checkType(r);
    if (!(n instanceof hn))
      throw new Error("Not an option type");
    switch (jr(e)) {
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
class Wn extends Rr {
  constructor(e = {}) {
    super(), this._fields = Object.entries(e).sort((r, n) => rr(r[0]) - rr(n[0]));
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
    const r = this._fields.map(([i]) => e[i]), n = $n(this._fields, r, ([, i], s) => i.encodeValue(s));
    return qe(...n);
  }
  _buildTypeTableImpl(e) {
    this._fields.forEach(([s, c]) => c.buildTypeTable(e));
    const r = rt(
      -20
      /* IDLTypeIds.Record */
    ), n = We(this._fields.length), i = this._fields.map(([s, c]) => qe(We(rr(s)), c.encodeType(e)));
    e.add(this, qe(r, n, qe(...i)));
  }
  decodeValue(e, r) {
    const n = this.checkType(r);
    if (!(n instanceof Wn))
      throw new Error("Not a record type");
    const i = {};
    let s = 0, c = 0;
    for (; c < n._fields.length; ) {
      const [a, p] = n._fields[c];
      if (s >= this._fields.length) {
        p.decodeValue(e, p), c++;
        continue;
      }
      const [g, b] = this._fields[s], T = rr(this._fields[s][0]), N = rr(a);
      if (T === N)
        i[g] = b.decodeValue(e, p), s++, c++;
      else if (N > T)
        if (b instanceof hn || b instanceof Yi)
          i[g] = [], s++;
        else
          throw new Error("Cannot find required field " + g);
      else
        p.decodeValue(e, p), c++;
    }
    for (const [a, p] of this._fields.slice(s))
      if (p instanceof hn || p instanceof Yi)
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
    return `record {${$n(this._fields, r, ([i, s], c) => i + "=" + s.valueToString(c)).join("; ")}}`;
  }
}
class cs extends Wn {
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
    const r = $n(this._components, e, (n, i) => n.encodeValue(i));
    return qe(...r);
  }
  decodeValue(e, r) {
    const n = this.checkType(r);
    if (!(n instanceof cs))
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
    return `record {${$n(this._components, e, (n, i) => n.valueToString(i)).join("; ")}}`;
  }
}
class us extends Rr {
  constructor(e = {}) {
    super(), this._fields = Object.entries(e).sort((r, n) => rr(r[0]) - rr(n[0]));
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
        const s = We(r), c = i.encodeValue(e[n]);
        return qe(s, c);
      }
    }
    throw Error("Variant has no data: " + e);
  }
  _buildTypeTableImpl(e) {
    this._fields.forEach(([, s]) => {
      s.buildTypeTable(e);
    });
    const r = rt(
      -21
      /* IDLTypeIds.Variant */
    ), n = We(this._fields.length), i = this._fields.map(([s, c]) => qe(We(rr(s)), c.encodeType(e)));
    e.add(this, qe(r, n, ...i));
  }
  decodeValue(e, r) {
    const n = this.checkType(r);
    if (!(n instanceof us))
      throw new Error("Not a variant type");
    const i = Number(it(e));
    if (i >= n._fields.length)
      throw Error("Invalid variant index: " + i);
    const [s, c] = n._fields[i];
    for (const [a, p] of this._fields)
      if (rr(s) === rr(a)) {
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
class Or extends Rr {
  constructor() {
    super(...arguments), this._id = Or._counter++, this._type = void 0;
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
Or._counter = 0;
function Co(t) {
  if (jr(t) !== 1)
    throw new Error("Cannot decode principal");
  const r = Number(it(t));
  return Me.fromUint8Array(new Uint8Array(Gr(t, r)));
}
class Zc extends Ut {
  accept(e, r) {
    return e.visitPrincipal(this, r);
  }
  covariant(e) {
    if (e && e._isPrincipal)
      return !0;
    throw new Error(`Invalid ${this.display()} argument: ${Xe(e)}`);
  }
  encodeValue(e) {
    const r = e.toUint8Array(), n = We(r.byteLength);
    return qe(new Uint8Array([1]), n, r);
  }
  encodeType() {
    return rt(
      -24
      /* IDLTypeIds.Principal */
    );
  }
  decodeValue(e, r) {
    return this.checkType(r), Co(e);
  }
  get name() {
    return "principal";
  }
  valueToString(e) {
    return `${this.name} "${e.toText()}"`;
  }
}
class Mo extends Rr {
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
    const n = e.toUint8Array(), i = We(n.byteLength), s = qe(new Uint8Array([1]), i, n), c = new TextEncoder().encode(r), a = We(c.byteLength);
    return qe(new Uint8Array([1]), s, a, c);
  }
  _buildTypeTableImpl(e) {
    this.argTypes.forEach((g) => g.buildTypeTable(e)), this.retTypes.forEach((g) => g.buildTypeTable(e));
    const r = rt(
      -22
      /* IDLTypeIds.Func */
    ), n = We(this.argTypes.length), i = qe(...this.argTypes.map((g) => g.encodeType(e))), s = We(this.retTypes.length), c = qe(...this.retTypes.map((g) => g.encodeType(e))), a = We(this.annotations.length), p = qe(...this.annotations.map((g) => this.encodeAnnotation(g)));
    e.add(this, qe(r, n, i, s, c, a, p));
  }
  decodeValue(e) {
    if (jr(e) !== 1)
      throw new Error("Cannot decode function reference");
    const n = Co(e), i = Number(it(e)), s = Gr(e, i), a = new TextDecoder("utf8", { fatal: !0 }).decode(s);
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
class Kc extends Rr {
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
    const r = e.toUint8Array(), n = We(r.length);
    return qe(new Uint8Array([1]), n, r);
  }
  _buildTypeTableImpl(e) {
    this._fields.forEach(([s, c]) => c.buildTypeTable(e));
    const r = rt(
      -23
      /* IDLTypeIds.Service */
    ), n = We(this._fields.length), i = this._fields.map(([s, c]) => {
      const a = new TextEncoder().encode(s), p = We(a.length);
      return qe(p, a, c.encodeType(e));
    });
    e.add(this, qe(r, n, ...i));
  }
  decodeValue(e) {
    return Co(e);
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
  return e && e.length > la ? e.substring(0, la - 3) + "..." : e;
}
function no(t, e) {
  if (e.length < t.length)
    throw Error("Wrong number of message arguments");
  const r = new W0();
  t.forEach((p) => p.buildTypeTable(r));
  const n = new TextEncoder().encode(Ti), i = r.encode(), s = We(e.length), c = qe(...t.map((p) => p.encodeType(r))), a = qe(...$n(t, e, (p, g) => {
    try {
      p.covariant(g);
    } catch (b) {
      throw new Error(b.message + `

`);
    }
    return p.encodeValue(g);
  }));
  return qe(n, i, s, c, a);
}
function Xc(t, e) {
  const r = new gn(e);
  if (e.byteLength < Ti.length)
    throw new Error("Message length smaller than magic number");
  const n = Gr(r, Ti.length), i = new TextDecoder().decode(n);
  if (i !== Ti)
    throw new Error("Wrong magic number: " + JSON.stringify(i));
  function s(S) {
    const m = [], I = Number(it(S));
    for (let V = 0; V < I; V++) {
      const L = Number(xr(S));
      switch (L) {
        case -18:
        case -19: {
          const X = Number(xr(S));
          m.push([L, X]);
          break;
        }
        case -20:
        case -21: {
          const X = [];
          let P = Number(it(S)), J;
          for (; P--; ) {
            const K = Number(it(S));
            if (K >= Math.pow(2, 32))
              throw new Error("field id out of 32-bit range");
            if (typeof J == "number" && J >= K)
              throw new Error("field id collision or not sorted");
            J = K;
            const re = Number(xr(S));
            X.push([K, re]);
          }
          m.push([L, X]);
          break;
        }
        case -22: {
          const X = [];
          let P = Number(it(S));
          for (; P--; )
            X.push(Number(xr(S)));
          const J = [];
          let K = Number(it(S));
          for (; K--; )
            J.push(Number(xr(S)));
          const re = [];
          let ae = Number(it(S));
          for (; ae--; )
            switch (Number(it(S))) {
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
          m.push([L, [X, J, re]]);
          break;
        }
        case -23: {
          let X = Number(it(S));
          const P = [];
          for (; X--; ) {
            const J = Number(it(S)), K = new TextDecoder().decode(Gr(S, J)), re = xr(S);
            P.push([K, re]);
          }
          m.push([L, P]);
          break;
        }
        default:
          throw new Error("Illegal op_code: " + L);
      }
    }
    const U = [], H = Number(it(S));
    for (let V = 0; V < H; V++)
      U.push(Number(xr(S)));
    return [m, U];
  }
  const [c, a] = s(r);
  if (a.length < t.length)
    throw new Error("Wrong number of return values");
  const p = c.map((S) => xu());
  function g(S) {
    if (S < -24)
      throw new Error("future value not supported");
    if (S < 0)
      switch (S) {
        case -1:
          return tu;
        case -2:
          return eu;
        case -3:
          return iu;
        case -4:
          return nu;
        case -5:
          return lu;
        case -6:
          return hu;
        case -7:
          return du;
        case -8:
          return pu;
        case -9:
          return au;
        case -10:
          return cu;
        case -11:
          return uu;
        case -12:
          return fu;
        case -13:
          return su;
        case -14:
          return ou;
        case -15:
          return ru;
        case -16:
          return Qc;
        case -17:
          return Jc;
        case -24:
          return mu;
        default:
          throw new Error("Illegal op_code: " + S);
      }
    if (S >= c.length)
      throw new Error("type index out of range");
    return p[S];
  }
  function b(S) {
    switch (S[0]) {
      case -19: {
        const m = g(S[1]);
        return yu(m);
      }
      case -18: {
        const m = g(S[1]);
        return wu(m);
      }
      case -20: {
        const m = {};
        for (const [H, V] of S[1]) {
          const L = `_${H}_`;
          m[L] = g(V);
        }
        const I = bu(m), U = I.tryAsTuple();
        return Array.isArray(U) ? gu(...U) : I;
      }
      case -21: {
        const m = {};
        for (const [I, U] of S[1]) {
          const H = `_${I}_`;
          m[H] = g(U);
        }
        return _u(m);
      }
      case -22: {
        const [m, I, U] = S[1];
        return Eu(m.map((H) => g(H)), I.map((H) => g(H)), U);
      }
      case -23: {
        const m = {}, I = S[1];
        for (const [U, H] of I) {
          let V = g(H);
          if (V instanceof Or && (V = V.getType()), !(V instanceof Mo))
            throw new Error("Illegal service definition: services can only contain functions");
          m[U] = V;
        }
        return Tu(m);
      }
      default:
        throw new Error("Illegal op_code: " + S[0]);
    }
  }
  c.forEach((S, m) => {
    if (S[0] === -22) {
      const I = b(S);
      p[m].fill(I);
    }
  }), c.forEach((S, m) => {
    if (S[0] !== -22) {
      const I = b(S);
      p[m].fill(I);
    }
  });
  const T = a.map((S) => g(S)), N = t.map((S, m) => S.decodeValue(r, T[m]));
  for (let S = t.length; S < T.length; S++)
    T[S].decodeValue(r, T[S]);
  if (r.byteLength > 0)
    throw new Error("decode: Left-over bytes");
  return N;
}
const Jc = new Lc(), Qc = new Yi(), Y0 = new Gc(), eu = new jc(), tu = new zc(), ru = new Wc(), nu = new Dc(), iu = new Yc(), su = new Po(32), ou = new Po(64), au = new zr(8), cu = new zr(16), uu = new zr(32), fu = new zr(64), lu = new vr(8), hu = new vr(16), du = new vr(32), pu = new vr(64), mu = new Zc();
function gu(...t) {
  return new cs(t);
}
function yu(t) {
  return new as(t);
}
function wu(t) {
  return new hn(t);
}
function bu(t) {
  return new Wn(t);
}
function _u(t) {
  return new us(t);
}
function xu() {
  return new Or();
}
function Eu(t, e, r = []) {
  return new Mo(t, e, r);
}
function Tu(t) {
  return new Kc(t);
}
const Z0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Bool: eu,
  BoolClass: jc,
  ConstructType: Rr,
  Empty: Jc,
  EmptyClass: Lc,
  FixedIntClass: zr,
  FixedNatClass: vr,
  Float32: su,
  Float64: ou,
  FloatClass: Po,
  Func: Eu,
  FuncClass: Mo,
  Int: nu,
  Int16: cu,
  Int32: uu,
  Int64: fu,
  Int8: au,
  IntClass: Dc,
  Nat: iu,
  Nat16: hu,
  Nat32: du,
  Nat64: pu,
  Nat8: lu,
  NatClass: Yc,
  Null: tu,
  NullClass: zc,
  Opt: wu,
  OptClass: hn,
  PrimitiveType: Ut,
  Principal: mu,
  PrincipalClass: Zc,
  Rec: xu,
  RecClass: Or,
  Record: bu,
  RecordClass: Wn,
  Reserved: Qc,
  ReservedClass: Yi,
  Service: Tu,
  ServiceClass: Kc,
  Text: ru,
  TextClass: Wc,
  Tuple: gu,
  TupleClass: cs,
  Type: os,
  Unknown: Y0,
  UnknownClass: Gc,
  Variant: _u,
  VariantClass: us,
  Vec: yu,
  VecClass: as,
  Visitor: D0,
  decode: Xc,
  encode: no
}, Symbol.toStringTag, { value: "Module" }));
var Au = {}, Dn = {};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(t) {
  var e = jn, r = zn, n = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  t.Buffer = a, t.SlowBuffer = V, t.INSPECT_MAX_BYTES = 50;
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
      return N(h, o);
    if (ArrayBuffer.isView(h))
      return m(h);
    if (h == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof h
      );
    if (k(h, ArrayBuffer) || h && k(h.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (k(h, SharedArrayBuffer) || h && k(h.buffer, SharedArrayBuffer)))
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
    return g(h), c(h < 0 ? 0 : H(h) | 0);
  }
  a.allocUnsafe = function(h) {
    return T(h);
  }, a.allocUnsafeSlow = function(h) {
    return T(h);
  };
  function N(h, o) {
    if ((typeof o != "string" || o === "") && (o = "utf8"), !a.isEncoding(o))
      throw new TypeError("Unknown encoding: " + o);
    var u = L(h, o) | 0, y = c(u), x = y.write(h, o);
    return x !== u && (y = y.slice(0, x)), y;
  }
  function S(h) {
    for (var o = h.length < 0 ? 0 : H(h.length) | 0, u = c(o), y = 0; y < o; y += 1)
      u[y] = h[y] & 255;
    return u;
  }
  function m(h) {
    if (k(h, Uint8Array)) {
      var o = new Uint8Array(h);
      return I(o.buffer, o.byteOffset, o.byteLength);
    }
    return S(h);
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
      var o = H(h.length) | 0, u = c(o);
      return u.length === 0 || h.copy(u, 0, 0, o), u;
    }
    if (h.length !== void 0)
      return typeof h.length != "number" || F(h.length) ? c(0) : S(h);
    if (h.type === "Buffer" && Array.isArray(h.data))
      return S(h.data);
  }
  function H(h) {
    if (h >= i)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i.toString(16) + " bytes");
    return h | 0;
  }
  function V(h) {
    return +h != h && (h = 0), a.alloc(+h);
  }
  a.isBuffer = function(o) {
    return o != null && o._isBuffer === !0 && o !== a.prototype;
  }, a.compare = function(o, u) {
    if (k(o, Uint8Array) && (o = a.from(o, o.offset, o.byteLength)), k(u, Uint8Array) && (u = a.from(u, u.offset, u.byteLength)), !a.isBuffer(o) || !a.isBuffer(u))
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (o === u) return 0;
    for (var y = o.length, x = u.length, v = 0, G = Math.min(y, x); v < G; ++v)
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
      var G = o[y];
      if (k(G, Uint8Array))
        v + G.length > x.length ? a.from(G).copy(x, v) : Uint8Array.prototype.set.call(
          x,
          G,
          v
        );
      else if (a.isBuffer(G))
        G.copy(x, v);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      v += G.length;
    }
    return x;
  };
  function L(h, o) {
    if (a.isBuffer(h))
      return h.length;
    if (ArrayBuffer.isView(h) || k(h, ArrayBuffer))
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
          return ce(h).length;
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
            return y ? -1 : ce(h).length;
          o = ("" + o).toLowerCase(), x = !0;
      }
  }
  a.byteLength = L;
  function X(h, o, u) {
    var y = !1;
    if ((o === void 0 || o < 0) && (o = 0), o > this.length || ((u === void 0 || u > this.length) && (u = this.length), u <= 0) || (u >>>= 0, o >>>= 0, u <= o))
      return "";
    for (h || (h = "utf8"); ; )
      switch (h) {
        case "hex":
          return le(this, o, u);
        case "utf8":
        case "utf-8":
          return C(this, o, u);
        case "ascii":
          return j(this, o, u);
        case "latin1":
        case "binary":
          return ee(this, o, u);
        case "base64":
          return R(this, o, u);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return we(this, o, u);
        default:
          if (y) throw new TypeError("Unknown encoding: " + h);
          h = (h + "").toLowerCase(), y = !0;
      }
  }
  a.prototype._isBuffer = !0;
  function P(h, o, u) {
    var y = h[o];
    h[o] = h[u], h[u] = y;
  }
  a.prototype.swap16 = function() {
    var o = this.length;
    if (o % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (var u = 0; u < o; u += 2)
      P(this, u, u + 1);
    return this;
  }, a.prototype.swap32 = function() {
    var o = this.length;
    if (o % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (var u = 0; u < o; u += 4)
      P(this, u, u + 3), P(this, u + 1, u + 2);
    return this;
  }, a.prototype.swap64 = function() {
    var o = this.length;
    if (o % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (var u = 0; u < o; u += 8)
      P(this, u, u + 7), P(this, u + 1, u + 6), P(this, u + 2, u + 5), P(this, u + 3, u + 4);
    return this;
  }, a.prototype.toString = function() {
    var o = this.length;
    return o === 0 ? "" : arguments.length === 0 ? C(this, 0, o) : X.apply(this, arguments);
  }, a.prototype.toLocaleString = a.prototype.toString, a.prototype.equals = function(o) {
    if (!a.isBuffer(o)) throw new TypeError("Argument must be a Buffer");
    return this === o ? !0 : a.compare(this, o) === 0;
  }, a.prototype.inspect = function() {
    var o = "", u = t.INSPECT_MAX_BYTES;
    return o = this.toString("hex", 0, u).replace(/(.{2})/g, "$1 ").trim(), this.length > u && (o += " ... "), "<Buffer " + o + ">";
  }, n && (a.prototype[n] = a.prototype.inspect), a.prototype.compare = function(o, u, y, x, v) {
    if (k(o, Uint8Array) && (o = a.from(o, o.offset, o.byteLength)), !a.isBuffer(o))
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
    for (var G = v - x, oe = y - u, me = Math.min(G, oe), ge = this.slice(x, v), Be = o.slice(u, y), d = 0; d < me; ++d)
      if (ge[d] !== Be[d]) {
        G = ge[d], oe = Be[d];
        break;
      }
    return G < oe ? -1 : oe < G ? 1 : 0;
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
    var v = 1, G = h.length, oe = o.length;
    if (y !== void 0 && (y = String(y).toLowerCase(), y === "ucs2" || y === "ucs-2" || y === "utf16le" || y === "utf-16le")) {
      if (h.length < 2 || o.length < 2)
        return -1;
      v = 2, G /= 2, oe /= 2, u /= 2;
    }
    function me(l, A) {
      return v === 1 ? l[A] : l.readUInt16BE(A * v);
    }
    var ge;
    if (x) {
      var Be = -1;
      for (ge = u; ge < G; ge++)
        if (me(h, ge) === me(o, Be === -1 ? 0 : ge - Be)) {
          if (Be === -1 && (Be = ge), ge - Be + 1 === oe) return Be * v;
        } else
          Be !== -1 && (ge -= ge - Be), Be = -1;
    } else
      for (u + oe > G && (u = G - oe), ge = u; ge >= 0; ge--) {
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
    for (var G = 0; G < y; ++G) {
      var oe = parseInt(o.substr(G * 2, 2), 16);
      if (F(oe)) return G;
      h[u + G] = oe;
    }
    return G;
  }
  function ae(h, o, u, y) {
    return B(ce(o, h.length - u), h, u, y);
  }
  function te(h, o, u, y) {
    return B(fe(o), h, u, y);
  }
  function pe(h, o, u, y) {
    return B(E(o), h, u, y);
  }
  function de(h, o, u, y) {
    return B(_(o, h.length - u), h, u, y);
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
    for (var G = !1; ; )
      switch (x) {
        case "hex":
          return re(this, o, u, y);
        case "utf8":
        case "utf-8":
          return ae(this, o, u, y);
        case "ascii":
        case "latin1":
        case "binary":
          return te(this, o, u, y);
        case "base64":
          return pe(this, o, u, y);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return de(this, o, u, y);
        default:
          if (G) throw new TypeError("Unknown encoding: " + x);
          x = ("" + x).toLowerCase(), G = !0;
      }
  }, a.prototype.toJSON = function() {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function R(h, o, u) {
    return o === 0 && u === h.length ? e.fromByteArray(h) : e.fromByteArray(h.slice(o, u));
  }
  function C(h, o, u) {
    u = Math.min(h.length, u);
    for (var y = [], x = o; x < u; ) {
      var v = h[x], G = null, oe = v > 239 ? 4 : v > 223 ? 3 : v > 191 ? 2 : 1;
      if (x + oe <= u) {
        var me, ge, Be, d;
        switch (oe) {
          case 1:
            v < 128 && (G = v);
            break;
          case 2:
            me = h[x + 1], (me & 192) === 128 && (d = (v & 31) << 6 | me & 63, d > 127 && (G = d));
            break;
          case 3:
            me = h[x + 1], ge = h[x + 2], (me & 192) === 128 && (ge & 192) === 128 && (d = (v & 15) << 12 | (me & 63) << 6 | ge & 63, d > 2047 && (d < 55296 || d > 57343) && (G = d));
            break;
          case 4:
            me = h[x + 1], ge = h[x + 2], Be = h[x + 3], (me & 192) === 128 && (ge & 192) === 128 && (Be & 192) === 128 && (d = (v & 15) << 18 | (me & 63) << 12 | (ge & 63) << 6 | Be & 63, d > 65535 && d < 1114112 && (G = d));
        }
      }
      G === null ? (G = 65533, oe = 1) : G > 65535 && (G -= 65536, y.push(G >>> 10 & 1023 | 55296), G = 56320 | G & 1023), y.push(G), x += oe;
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
  function j(h, o, u) {
    var y = "";
    u = Math.min(h.length, u);
    for (var x = o; x < u; ++x)
      y += String.fromCharCode(h[x] & 127);
    return y;
  }
  function ee(h, o, u) {
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
      x += q[h[v]];
    return x;
  }
  function we(h, o, u) {
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
    for (var x = this[o], v = 1, G = 0; ++G < u && (v *= 256); )
      x += this[o + G] * v;
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
    for (var x = this[o], v = 1, G = 0; ++G < u && (v *= 256); )
      x += this[o + G] * v;
    return v *= 128, x >= v && (x -= Math.pow(2, 8 * u)), x;
  }, a.prototype.readIntBE = function(o, u, y) {
    o = o >>> 0, u = u >>> 0, y || se(o, u, this.length);
    for (var x = u, v = 1, G = this[o + --x]; x > 0 && (v *= 256); )
      G += this[o + --x] * v;
    return v *= 128, G >= v && (G -= Math.pow(2, 8 * u)), G;
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
    var G = 1, oe = 0;
    for (this[u] = o & 255; ++oe < y && (G *= 256); )
      this[u + oe] = o / G & 255;
    return u + y;
  }, a.prototype.writeUintBE = a.prototype.writeUIntBE = function(o, u, y, x) {
    if (o = +o, u = u >>> 0, y = y >>> 0, !x) {
      var v = Math.pow(2, 8 * y) - 1;
      Z(this, o, u, y, v, 0);
    }
    var G = y - 1, oe = 1;
    for (this[u + G] = o & 255; --G >= 0 && (oe *= 256); )
      this[u + G] = o / oe & 255;
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
    var G = 0, oe = 1, me = 0;
    for (this[u] = o & 255; ++G < y && (oe *= 256); )
      o < 0 && me === 0 && this[u + G - 1] !== 0 && (me = 1), this[u + G] = (o / oe >> 0) - me & 255;
    return u + y;
  }, a.prototype.writeIntBE = function(o, u, y, x) {
    if (o = +o, u = u >>> 0, !x) {
      var v = Math.pow(2, 8 * y - 1);
      Z(this, o, u, y, v - 1, -v);
    }
    var G = y - 1, oe = 1, me = 0;
    for (this[u + G] = o & 255; --G >= 0 && (oe *= 256); )
      o < 0 && me === 0 && this[u + G + 1] !== 0 && (me = 1), this[u + G] = (o / oe >> 0) - me & 255;
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
  function ue(h, o, u, y, x, v) {
    if (u + y > h.length) throw new RangeError("Index out of range");
    if (u < 0) throw new RangeError("Index out of range");
  }
  function w(h, o, u, y, x) {
    return o = +o, u = u >>> 0, x || ue(h, o, u, 4), r.write(h, o, u, y, 23, 4), u + 4;
  }
  a.prototype.writeFloatLE = function(o, u, y) {
    return w(this, o, u, !0, y);
  }, a.prototype.writeFloatBE = function(o, u, y) {
    return w(this, o, u, !1, y);
  };
  function ie(h, o, u, y, x) {
    return o = +o, u = u >>> 0, x || ue(h, o, u, 8), r.write(h, o, u, y, 52, 8), u + 8;
  }
  a.prototype.writeDoubleLE = function(o, u, y) {
    return ie(this, o, u, !0, y);
  }, a.prototype.writeDoubleBE = function(o, u, y) {
    return ie(this, o, u, !1, y);
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
    var G;
    if (typeof o == "number")
      for (G = u; G < y; ++G)
        this[G] = o;
    else {
      var oe = a.isBuffer(o) ? o : a.from(o, x), me = oe.length;
      if (me === 0)
        throw new TypeError('The value "' + o + '" is invalid for argument "value"');
      for (G = 0; G < y - u; ++G)
        this[G + u] = oe[G % me];
    }
    return this;
  };
  var he = /[^+/0-9A-Za-z-_]/g;
  function Te(h) {
    if (h = h.split("=")[0], h = h.trim().replace(he, ""), h.length < 2) return "";
    for (; h.length % 4 !== 0; )
      h = h + "=";
    return h;
  }
  function ce(h, o) {
    o = o || 1 / 0;
    for (var u, y = h.length, x = null, v = [], G = 0; G < y; ++G) {
      if (u = h.charCodeAt(G), u > 55295 && u < 57344) {
        if (!x) {
          if (u > 56319) {
            (o -= 3) > -1 && v.push(239, 191, 189);
            continue;
          } else if (G + 1 === y) {
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
    for (var u, y, x, v = [], G = 0; G < h.length && !((o -= 2) < 0); ++G)
      u = h.charCodeAt(G), y = u >> 8, x = u % 256, v.push(x), v.push(y);
    return v;
  }
  function E(h) {
    return e.toByteArray(Te(h));
  }
  function B(h, o, u, y) {
    for (var x = 0; x < y && !(x + u >= o.length || x >= h.length); ++x)
      o[x + u] = h[x];
    return x;
  }
  function k(h, o) {
    return h instanceof o || h != null && h.constructor != null && h.constructor.name != null && h.constructor.name === o.name;
  }
  function F(h) {
    return h !== h;
  }
  var q = function() {
    for (var h = "0123456789abcdef", o = new Array(256), u = 0; u < 16; ++u)
      for (var y = u * 16, x = 0; x < 16; ++x)
        o[y + x] = h[u] + h[x];
    return o;
  }();
})(Dn);
var Su = { exports: {} };
(function(t) {
  (function(e) {
    var r, n = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i, i = Math.ceil, s = Math.floor, c = "[BigNumber Error] ", a = c + "Number primitive has more than 15 significant digits: ", p = 1e14, g = 14, b = 9007199254740991, T = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13], N = 1e7, S = 1e9;
    function m(J) {
      var K, re, ae, te = w.prototype = { constructor: w, toString: null, valueOf: null }, pe = new w(1), de = 20, R = 4, C = -7, Y = 21, z = -1e7, j = 1e7, ee = !1, le = 1, we = 0, se = {
        prefix: "",
        groupSize: 3,
        secondaryGroupSize: 0,
        groupSeparator: ",",
        decimalSeparator: ".",
        fractionGroupSize: 0,
        fractionGroupSeparator: " ",
        // non-breaking space
        suffix: ""
      }, Z = "0123456789abcdefghijklmnopqrstuvwxyz", ue = !0;
      function w(_, E) {
        var B, k, F, q, h, o, u, y, x = this;
        if (!(x instanceof w)) return new w(_, E);
        if (E == null) {
          if (_ && _._isBigNumber === !0) {
            x.s = _.s, !_.c || _.e > j ? x.c = x.e = null : _.e < z ? x.c = [x.e = 0] : (x.e = _.e, x.c = _.c.slice());
            return;
          }
          if ((o = typeof _ == "number") && _ * 0 == 0) {
            if (x.s = 1 / _ < 0 ? (_ = -_, -1) : 1, _ === ~~_) {
              for (q = 0, h = _; h >= 10; h /= 10, q++) ;
              q > j ? x.c = x.e = null : (x.e = q, x.c = [_]);
              return;
            }
            y = String(_);
          } else {
            if (!n.test(y = String(_))) return ae(x, y, o);
            x.s = y.charCodeAt(0) == 45 ? (y = y.slice(1), -1) : 1;
          }
          (q = y.indexOf(".")) > -1 && (y = y.replace(".", "")), (h = y.search(/e/i)) > 0 ? (q < 0 && (q = h), q += +y.slice(h + 1), y = y.substring(0, h)) : q < 0 && (q = y.length);
        } else {
          if (V(E, 2, Z.length, "Base"), E == 10 && ue)
            return x = new w(_), ce(x, de + x.e + 1, R);
          if (y = String(_), o = typeof _ == "number") {
            if (_ * 0 != 0) return ae(x, y, o, E);
            if (x.s = 1 / _ < 0 ? (y = y.slice(1), -1) : 1, w.DEBUG && y.replace(/^0\.0*|\./, "").length > 15)
              throw Error(a + _);
          } else
            x.s = y.charCodeAt(0) === 45 ? (y = y.slice(1), -1) : 1;
          for (B = Z.slice(0, E), q = h = 0, u = y.length; h < u; h++)
            if (B.indexOf(k = y.charAt(h)) < 0) {
              if (k == ".") {
                if (h > q) {
                  q = u;
                  continue;
                }
              } else if (!F && (y == y.toUpperCase() && (y = y.toLowerCase()) || y == y.toLowerCase() && (y = y.toUpperCase()))) {
                F = !0, h = -1, q = 0;
                continue;
              }
              return ae(x, String(_), o, E);
            }
          o = !1, y = re(y, E, 10, x.s), (q = y.indexOf(".")) > -1 ? y = y.replace(".", "") : q = y.length;
        }
        for (h = 0; y.charCodeAt(h) === 48; h++) ;
        for (u = y.length; y.charCodeAt(--u) === 48; ) ;
        if (y = y.slice(h, ++u)) {
          if (u -= h, o && w.DEBUG && u > 15 && (_ > b || _ !== s(_)))
            throw Error(a + x.s * _);
          if ((q = q - h - 1) > j)
            x.c = x.e = null;
          else if (q < z)
            x.c = [x.e = 0];
          else {
            if (x.e = q, x.c = [], h = (q + 1) % g, q < 0 && (h += g), h < u) {
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
        var E, B;
        if (_ != null)
          if (typeof _ == "object") {
            if (_.hasOwnProperty(E = "DECIMAL_PLACES") && (B = _[E], V(B, 0, S, E), de = B), _.hasOwnProperty(E = "ROUNDING_MODE") && (B = _[E], V(B, 0, 8, E), R = B), _.hasOwnProperty(E = "EXPONENTIAL_AT") && (B = _[E], B && B.pop ? (V(B[0], -S, 0, E), V(B[1], 0, S, E), C = B[0], Y = B[1]) : (V(B, -S, S, E), C = -(Y = B < 0 ? -B : B))), _.hasOwnProperty(E = "RANGE"))
              if (B = _[E], B && B.pop)
                V(B[0], -S, -1, E), V(B[1], 1, S, E), z = B[0], j = B[1];
              else if (V(B, -S, S, E), B)
                z = -(j = B < 0 ? -B : B);
              else
                throw Error(c + E + " cannot be zero: " + B);
            if (_.hasOwnProperty(E = "CRYPTO"))
              if (B = _[E], B === !!B)
                if (B)
                  if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
                    ee = B;
                  else
                    throw ee = !B, Error(c + "crypto unavailable");
                else
                  ee = B;
              else
                throw Error(c + E + " not true or false: " + B);
            if (_.hasOwnProperty(E = "MODULO_MODE") && (B = _[E], V(B, 0, 9, E), le = B), _.hasOwnProperty(E = "POW_PRECISION") && (B = _[E], V(B, 0, S, E), we = B), _.hasOwnProperty(E = "FORMAT"))
              if (B = _[E], typeof B == "object") se = B;
              else throw Error(c + E + " not an object: " + B);
            if (_.hasOwnProperty(E = "ALPHABET"))
              if (B = _[E], typeof B == "string" && !/^.?$|[+\-.\s]|(.).*\1/.test(B))
                ue = B.slice(0, 10) == "0123456789", Z = B;
              else
                throw Error(c + E + " invalid: " + B);
          } else
            throw Error(c + "Object expected: " + _);
        return {
          DECIMAL_PLACES: de,
          ROUNDING_MODE: R,
          EXPONENTIAL_AT: [C, Y],
          RANGE: [z, j],
          CRYPTO: ee,
          MODULO_MODE: le,
          POW_PRECISION: we,
          FORMAT: se,
          ALPHABET: Z
        };
      }, w.isBigNumber = function(_) {
        if (!_ || _._isBigNumber !== !0) return !1;
        if (!w.DEBUG) return !0;
        var E, B, k = _.c, F = _.e, q = _.s;
        e: if ({}.toString.call(k) == "[object Array]") {
          if ((q === 1 || q === -1) && F >= -S && F <= S && F === s(F)) {
            if (k[0] === 0) {
              if (F === 0 && k.length === 1) return !0;
              break e;
            }
            if (E = (F + 1) % g, E < 1 && (E += g), String(k[0]).length == E) {
              for (E = 0; E < k.length; E++)
                if (B = k[E], B < 0 || B >= p || B !== s(B)) break e;
              if (B !== 0) return !0;
            }
          }
        } else if (k === null && F === null && (q === null || q === 1 || q === -1))
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
        return function(B) {
          var k, F, q, h, o, u = 0, y = [], x = new w(pe);
          if (B == null ? B = de : V(B, 0, S), h = i(B / g), ee)
            if (crypto.getRandomValues) {
              for (k = crypto.getRandomValues(new Uint32Array(h *= 2)); u < h; )
                o = k[u] * 131072 + (k[u + 1] >>> 11), o >= 9e15 ? (F = crypto.getRandomValues(new Uint32Array(2)), k[u] = F[0], k[u + 1] = F[1]) : (y.push(o % 1e14), u += 2);
              u = h / 2;
            } else if (crypto.randomBytes) {
              for (k = crypto.randomBytes(h *= 7); u < h; )
                o = (k[u] & 31) * 281474976710656 + k[u + 1] * 1099511627776 + k[u + 2] * 4294967296 + k[u + 3] * 16777216 + (k[u + 4] << 16) + (k[u + 5] << 8) + k[u + 6], o >= 9e15 ? crypto.randomBytes(7).copy(k, u) : (y.push(o % 1e14), u += 7);
              u = h / 7;
            } else
              throw ee = !1, Error(c + "crypto unavailable");
          if (!ee)
            for (; u < h; )
              o = E(), o < 9e15 && (y[u++] = o % 1e14);
          for (h = y[--u], B %= g, h && B && (o = T[g - B], y[u] = s(h / o) * o); y[u] === 0; y.pop(), u--) ;
          if (u < 0)
            y = [q = 0];
          else {
            for (q = -1; y[0] === 0; y.splice(0, 1), q -= g) ;
            for (u = 1, o = y[0]; o >= 10; o /= 10, u++) ;
            u < g && (q -= g - u);
          }
          return x.e = q, x.c = y, x;
        };
      }(), w.sum = function() {
        for (var _ = 1, E = arguments, B = new w(E[0]); _ < E.length; ) B = B.plus(E[_++]);
        return B;
      }, re = /* @__PURE__ */ function() {
        var _ = "0123456789";
        function E(B, k, F, q) {
          for (var h, o = [0], u, y = 0, x = B.length; y < x; ) {
            for (u = o.length; u--; o[u] *= k) ;
            for (o[0] += q.indexOf(B.charAt(y++)), h = 0; h < o.length; h++)
              o[h] > F - 1 && (o[h + 1] == null && (o[h + 1] = 0), o[h + 1] += o[h] / F | 0, o[h] %= F);
          }
          return o.reverse();
        }
        return function(B, k, F, q, h) {
          var o, u, y, x, v, G, oe, me, ge = B.indexOf("."), Be = de, d = R;
          for (ge >= 0 && (x = we, we = 0, B = B.replace(".", ""), me = new w(k), G = me.pow(B.length - ge), we = x, me.c = E(
            P(U(G.c), G.e, "0"),
            10,
            F,
            _
          ), me.e = me.c.length), oe = E(B, k, F, h ? (o = Z, _) : (o = _, Z)), y = x = oe.length; oe[--x] == 0; oe.pop()) ;
          if (!oe[0]) return o.charAt(0);
          if (ge < 0 ? --y : (G.c = oe, G.e = y, G.s = q, G = K(G, me, Be, d, F), oe = G.c, v = G.r, y = G.e), u = y + Be + 1, ge = oe[u], x = F / 2, v = v || u < 0 || oe[u + 1] != null, v = d < 4 ? (ge != null || v) && (d == 0 || d == (G.s < 0 ? 3 : 2)) : ge > x || ge == x && (d == 4 || v || d == 6 && oe[u - 1] & 1 || d == (G.s < 0 ? 8 : 7)), u < 1 || !oe[0])
            B = v ? P(o.charAt(1), -Be, o.charAt(0)) : o.charAt(0);
          else {
            if (oe.length = u, v)
              for (--F; ++oe[--u] > F; )
                oe[u] = 0, u || (++y, oe = [1].concat(oe));
            for (x = oe.length; !oe[--x]; ) ;
            for (ge = 0, B = ""; ge <= x; B += o.charAt(oe[ge++])) ;
            B = P(B, y, o.charAt(0));
          }
          return B;
        };
      }(), K = /* @__PURE__ */ function() {
        function _(k, F, q) {
          var h, o, u, y, x = 0, v = k.length, G = F % N, oe = F / N | 0;
          for (k = k.slice(); v--; )
            u = k[v] % N, y = k[v] / N | 0, h = oe * u + y * G, o = G * u + h % N * N + x, x = (o / q | 0) + (h / N | 0) + oe * y, k[v] = o % q;
          return x && (k = [x].concat(k)), k;
        }
        function E(k, F, q, h) {
          var o, u;
          if (q != h)
            u = q > h ? 1 : -1;
          else
            for (o = u = 0; o < q; o++)
              if (k[o] != F[o]) {
                u = k[o] > F[o] ? 1 : -1;
                break;
              }
          return u;
        }
        function B(k, F, q, h) {
          for (var o = 0; q--; )
            k[q] -= o, o = k[q] < F[q] ? 1 : 0, k[q] = o * h + k[q] - F[q];
          for (; !k[0] && k.length > 1; k.splice(0, 1)) ;
        }
        return function(k, F, q, h, o) {
          var u, y, x, v, G, oe, me, ge, Be, d, f, l, A, M, D, W, Ae, Ie = k.s == F.s ? 1 : -1, Oe = k.c, ve = F.c;
          if (!Oe || !Oe[0] || !ve || !ve[0])
            return new w(
              // Return NaN if either NaN, or both Infinity or 0.
              !k.s || !F.s || (Oe ? ve && Oe[0] == ve[0] : !ve) ? NaN : (
                // Return ±0 if x is ±0 or y is ±Infinity, or return ±Infinity as y is ±0.
                Oe && Oe[0] == 0 || !ve ? Ie * 0 : Ie / 0
              )
            );
          for (ge = new w(Ie), Be = ge.c = [], y = k.e - F.e, Ie = q + y + 1, o || (o = p, y = I(k.e / g) - I(F.e / g), Ie = Ie / g | 0), x = 0; ve[x] == (Oe[x] || 0); x++) ;
          if (ve[x] > (Oe[x] || 0) && y--, Ie < 0)
            Be.push(1), v = !0;
          else {
            for (M = Oe.length, W = ve.length, x = 0, Ie += 2, G = s(o / (ve[0] + 1)), G > 1 && (ve = _(ve, G, o), Oe = _(Oe, G, o), W = ve.length, M = Oe.length), A = W, d = Oe.slice(0, W), f = d.length; f < W; d[f++] = 0) ;
            Ae = ve.slice(), Ae = [0].concat(Ae), D = ve[0], ve[1] >= o / 2 && D++;
            do {
              if (G = 0, u = E(ve, d, W, f), u < 0) {
                if (l = d[0], W != f && (l = l * o + (d[1] || 0)), G = s(l / D), G > 1)
                  for (G >= o && (G = o - 1), oe = _(ve, G, o), me = oe.length, f = d.length; E(oe, d, me, f) == 1; )
                    G--, B(oe, W < me ? Ae : ve, me, o), me = oe.length, u = 1;
                else
                  G == 0 && (u = G = 1), oe = ve.slice(), me = oe.length;
                if (me < f && (oe = [0].concat(oe)), B(d, oe, f, o), f = d.length, u == -1)
                  for (; E(ve, d, W, f) < 1; )
                    G++, B(d, W < f ? Ae : ve, f, o), f = d.length;
              } else u === 0 && (G++, d = [0]);
              Be[x++] = G, d[0] ? d[f++] = Oe[A] || 0 : (d = [Oe[A]], f = 1);
            } while ((A++ < M || d[0] != null) && Ie--);
            v = d[0] != null, Be[0] || Be.splice(0, 1);
          }
          if (o == p) {
            for (x = 1, Ie = Be[0]; Ie >= 10; Ie /= 10, x++) ;
            ce(ge, q + (ge.e = x + y * g - 1) + 1, h, v);
          } else
            ge.e = y, ge.r = +v;
          return ge;
        };
      }();
      function ie(_, E, B, k) {
        var F, q, h, o, u;
        if (B == null ? B = R : V(B, 0, 8), !_.c) return _.toString();
        if (F = _.c[0], h = _.e, E == null)
          u = U(_.c), u = k == 1 || k == 2 && (h <= C || h >= Y) ? X(u, h) : P(u, h, "0");
        else if (_ = ce(new w(_), E, B), q = _.e, u = U(_.c), o = u.length, k == 1 || k == 2 && (E <= q || q <= C)) {
          for (; o < E; u += "0", o++) ;
          u = X(u, q);
        } else if (E -= h, u = P(u, q, "0"), q + 1 > o) {
          if (--E > 0) for (u += "."; E--; u += "0") ;
        } else if (E += q - o, E > 0)
          for (q + 1 == o && (u += "."); E--; u += "0") ;
        return _.s < 0 && F ? "-" + u : u;
      }
      function he(_, E) {
        for (var B, k, F = 1, q = new w(_[0]); F < _.length; F++)
          k = new w(_[F]), (!k.s || (B = H(q, k)) === E || B === 0 && q.s === E) && (q = k);
        return q;
      }
      function Te(_, E, B) {
        for (var k = 1, F = E.length; !E[--F]; E.pop()) ;
        for (F = E[0]; F >= 10; F /= 10, k++) ;
        return (B = k + B * g - 1) > j ? _.c = _.e = null : B < z ? _.c = [_.e = 0] : (_.e = B, _.c = E), _;
      }
      ae = /* @__PURE__ */ function() {
        var _ = /^(-?)0([xbo])(?=\w[\w.]*$)/i, E = /^([^.]+)\.$/, B = /^\.([^.]+)$/, k = /^-?(Infinity|NaN)$/, F = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
        return function(q, h, o, u) {
          var y, x = o ? h : h.replace(F, "");
          if (k.test(x))
            q.s = isNaN(x) ? null : x < 0 ? -1 : 1;
          else {
            if (!o && (x = x.replace(_, function(v, G, oe) {
              return y = (oe = oe.toLowerCase()) == "x" ? 16 : oe == "b" ? 2 : 8, !u || u == y ? G : v;
            }), u && (y = u, x = x.replace(E, "$1").replace(B, "0.$1")), h != x))
              return new w(x, y);
            if (w.DEBUG)
              throw Error(c + "Not a" + (u ? " base " + u : "") + " number: " + h);
            q.s = null;
          }
          q.c = q.e = null;
        };
      }();
      function ce(_, E, B, k) {
        var F, q, h, o, u, y, x, v = _.c, G = T;
        if (v) {
          e: {
            for (F = 1, o = v[0]; o >= 10; o /= 10, F++) ;
            if (q = E - F, q < 0)
              q += g, h = E, u = v[y = 0], x = s(u / G[F - h - 1] % 10);
            else if (y = i((q + 1) / g), y >= v.length)
              if (k) {
                for (; v.length <= y; v.push(0)) ;
                u = x = 0, F = 1, q %= g, h = q - g + 1;
              } else
                break e;
            else {
              for (u = o = v[y], F = 1; o >= 10; o /= 10, F++) ;
              q %= g, h = q - g + F, x = h < 0 ? 0 : s(u / G[F - h - 1] % 10);
            }
            if (k = k || E < 0 || // Are there any non-zero digits after the rounding digit?
            // The expression  n % pows10[d - j - 1]  returns all digits of n to the right
            // of the digit at j, e.g. if n is 908714 and j is 2, the expression gives 714.
            v[y + 1] != null || (h < 0 ? u : u % G[F - h - 1]), k = B < 4 ? (x || k) && (B == 0 || B == (_.s < 0 ? 3 : 2)) : x > 5 || x == 5 && (B == 4 || k || B == 6 && // Check whether the digit to the left of the rounding digit is odd.
            (q > 0 ? h > 0 ? u / G[F - h] : 0 : v[y - 1]) % 10 & 1 || B == (_.s < 0 ? 8 : 7)), E < 1 || !v[0])
              return v.length = 0, k ? (E -= _.e + 1, v[0] = G[(g - E % g) % g], _.e = -E || 0) : v[0] = _.e = 0, _;
            if (q == 0 ? (v.length = y, o = 1, y--) : (v.length = y + 1, o = G[g - q], v[y] = h > 0 ? s(u / G[F - h] % G[h]) * o : 0), k)
              for (; ; )
                if (y == 0) {
                  for (q = 1, h = v[0]; h >= 10; h /= 10, q++) ;
                  for (h = v[0] += o, o = 1; h >= 10; h /= 10, o++) ;
                  q != o && (_.e++, v[0] == p && (v[0] = 1));
                  break;
                } else {
                  if (v[y] += o, v[y] != p) break;
                  v[y--] = 0, o = 1;
                }
            for (q = v.length; v[--q] === 0; v.pop()) ;
          }
          _.e > j ? _.c = _.e = null : _.e < z && (_.c = [_.e = 0]);
        }
        return _;
      }
      function fe(_) {
        var E, B = _.e;
        return B === null ? _.toString() : (E = U(_.c), E = B <= C || B >= Y ? X(E, B) : P(E, B, "0"), _.s < 0 ? "-" + E : E);
      }
      return te.absoluteValue = te.abs = function() {
        var _ = new w(this);
        return _.s < 0 && (_.s = 1), _;
      }, te.comparedTo = function(_, E) {
        return H(this, new w(_, E));
      }, te.decimalPlaces = te.dp = function(_, E) {
        var B, k, F, q = this;
        if (_ != null)
          return V(_, 0, S), E == null ? E = R : V(E, 0, 8), ce(new w(q), _ + q.e + 1, E);
        if (!(B = q.c)) return null;
        if (k = ((F = B.length - 1) - I(this.e / g)) * g, F = B[F]) for (; F % 10 == 0; F /= 10, k--) ;
        return k < 0 && (k = 0), k;
      }, te.dividedBy = te.div = function(_, E) {
        return K(this, new w(_, E), de, R);
      }, te.dividedToIntegerBy = te.idiv = function(_, E) {
        return K(this, new w(_, E), 0, 1);
      }, te.exponentiatedBy = te.pow = function(_, E) {
        var B, k, F, q, h, o, u, y, x, v = this;
        if (_ = new w(_), _.c && !_.isInteger())
          throw Error(c + "Exponent not an integer: " + fe(_));
        if (E != null && (E = new w(E)), o = _.e > 14, !v.c || !v.c[0] || v.c[0] == 1 && !v.e && v.c.length == 1 || !_.c || !_.c[0])
          return x = new w(Math.pow(+fe(v), o ? _.s * (2 - L(_)) : +fe(_))), E ? x.mod(E) : x;
        if (u = _.s < 0, E) {
          if (E.c ? !E.c[0] : !E.s) return new w(NaN);
          k = !u && v.isInteger() && E.isInteger(), k && (v = v.mod(E));
        } else {
          if (_.e > 9 && (v.e > 0 || v.e < -1 || (v.e == 0 ? v.c[0] > 1 || o && v.c[1] >= 24e7 : v.c[0] < 8e13 || o && v.c[0] <= 9999975e7)))
            return q = v.s < 0 && L(_) ? -0 : 0, v.e > -1 && (q = 1 / q), new w(u ? 1 / q : q);
          we && (q = i(we / g + 2));
        }
        for (o ? (B = new w(0.5), u && (_.s = 1), y = L(_)) : (F = Math.abs(+fe(_)), y = F % 2), x = new w(pe); ; ) {
          if (y) {
            if (x = x.times(v), !x.c) break;
            q ? x.c.length > q && (x.c.length = q) : k && (x = x.mod(E));
          }
          if (F) {
            if (F = s(F / 2), F === 0) break;
            y = F % 2;
          } else if (_ = _.times(B), ce(_, _.e + 1, 1), _.e > 14)
            y = L(_);
          else {
            if (F = +fe(_), F === 0) break;
            y = F % 2;
          }
          v = v.times(v), q ? v.c && v.c.length > q && (v.c.length = q) : k && (v = v.mod(E));
        }
        return k ? x : (u && (x = pe.div(x)), E ? x.mod(E) : q ? ce(x, we, R, h) : x);
      }, te.integerValue = function(_) {
        var E = new w(this);
        return _ == null ? _ = R : V(_, 0, 8), ce(E, E.e + 1, _);
      }, te.isEqualTo = te.eq = function(_, E) {
        return H(this, new w(_, E)) === 0;
      }, te.isFinite = function() {
        return !!this.c;
      }, te.isGreaterThan = te.gt = function(_, E) {
        return H(this, new w(_, E)) > 0;
      }, te.isGreaterThanOrEqualTo = te.gte = function(_, E) {
        return (E = H(this, new w(_, E))) === 1 || E === 0;
      }, te.isInteger = function() {
        return !!this.c && I(this.e / g) > this.c.length - 2;
      }, te.isLessThan = te.lt = function(_, E) {
        return H(this, new w(_, E)) < 0;
      }, te.isLessThanOrEqualTo = te.lte = function(_, E) {
        return (E = H(this, new w(_, E))) === -1 || E === 0;
      }, te.isNaN = function() {
        return !this.s;
      }, te.isNegative = function() {
        return this.s < 0;
      }, te.isPositive = function() {
        return this.s > 0;
      }, te.isZero = function() {
        return !!this.c && this.c[0] == 0;
      }, te.minus = function(_, E) {
        var B, k, F, q, h = this, o = h.s;
        if (_ = new w(_, E), E = _.s, !o || !E) return new w(NaN);
        if (o != E)
          return _.s = -E, h.plus(_);
        var u = h.e / g, y = _.e / g, x = h.c, v = _.c;
        if (!u || !y) {
          if (!x || !v) return x ? (_.s = -E, _) : new w(v ? h : NaN);
          if (!x[0] || !v[0])
            return v[0] ? (_.s = -E, _) : new w(x[0] ? h : (
              // IEEE 754 (2008) 6.3: n - n = -0 when rounding to -Infinity
              R == 3 ? -0 : 0
            ));
        }
        if (u = I(u), y = I(y), x = x.slice(), o = u - y) {
          for ((q = o < 0) ? (o = -o, F = x) : (y = u, F = v), F.reverse(), E = o; E--; F.push(0)) ;
          F.reverse();
        } else
          for (k = (q = (o = x.length) < (E = v.length)) ? o : E, o = E = 0; E < k; E++)
            if (x[E] != v[E]) {
              q = x[E] < v[E];
              break;
            }
        if (q && (F = x, x = v, v = F, _.s = -_.s), E = (k = v.length) - (B = x.length), E > 0) for (; E--; x[B++] = 0) ;
        for (E = p - 1; k > o; ) {
          if (x[--k] < v[k]) {
            for (B = k; B && !x[--B]; x[B] = E) ;
            --x[B], x[k] += p;
          }
          x[k] -= v[k];
        }
        for (; x[0] == 0; x.splice(0, 1), --y) ;
        return x[0] ? Te(_, x, y) : (_.s = R == 3 ? -1 : 1, _.c = [_.e = 0], _);
      }, te.modulo = te.mod = function(_, E) {
        var B, k, F = this;
        return _ = new w(_, E), !F.c || !_.s || _.c && !_.c[0] ? new w(NaN) : !_.c || F.c && !F.c[0] ? new w(F) : (le == 9 ? (k = _.s, _.s = 1, B = K(F, _, 0, 3), _.s = k, B.s *= k) : B = K(F, _, 0, le), _ = F.minus(B.times(_)), !_.c[0] && le == 1 && (_.s = F.s), _);
      }, te.multipliedBy = te.times = function(_, E) {
        var B, k, F, q, h, o, u, y, x, v, G, oe, me, ge, Be, d = this, f = d.c, l = (_ = new w(_, E)).c;
        if (!f || !l || !f[0] || !l[0])
          return !d.s || !_.s || f && !f[0] && !l || l && !l[0] && !f ? _.c = _.e = _.s = null : (_.s *= d.s, !f || !l ? _.c = _.e = null : (_.c = [0], _.e = 0)), _;
        for (k = I(d.e / g) + I(_.e / g), _.s *= d.s, u = f.length, v = l.length, u < v && (me = f, f = l, l = me, F = u, u = v, v = F), F = u + v, me = []; F--; me.push(0)) ;
        for (ge = p, Be = N, F = v; --F >= 0; ) {
          for (B = 0, G = l[F] % Be, oe = l[F] / Be | 0, h = u, q = F + h; q > F; )
            y = f[--h] % Be, x = f[h] / Be | 0, o = oe * y + x * G, y = G * y + o % Be * Be + me[q] + B, B = (y / ge | 0) + (o / Be | 0) + oe * x, me[q--] = y % ge;
          me[q] = B;
        }
        return B ? ++k : me.splice(0, 1), Te(_, me, k);
      }, te.negated = function() {
        var _ = new w(this);
        return _.s = -_.s || null, _;
      }, te.plus = function(_, E) {
        var B, k = this, F = k.s;
        if (_ = new w(_, E), E = _.s, !F || !E) return new w(NaN);
        if (F != E)
          return _.s = -E, k.minus(_);
        var q = k.e / g, h = _.e / g, o = k.c, u = _.c;
        if (!q || !h) {
          if (!o || !u) return new w(F / 0);
          if (!o[0] || !u[0]) return u[0] ? _ : new w(o[0] ? k : F * 0);
        }
        if (q = I(q), h = I(h), o = o.slice(), F = q - h) {
          for (F > 0 ? (h = q, B = u) : (F = -F, B = o), B.reverse(); F--; B.push(0)) ;
          B.reverse();
        }
        for (F = o.length, E = u.length, F - E < 0 && (B = u, u = o, o = B, E = F), F = 0; E; )
          F = (o[--E] = o[E] + u[E] + F) / p | 0, o[E] = p === o[E] ? 0 : o[E] % p;
        return F && (o = [F].concat(o), ++h), Te(_, o, h);
      }, te.precision = te.sd = function(_, E) {
        var B, k, F, q = this;
        if (_ != null && _ !== !!_)
          return V(_, 1, S), E == null ? E = R : V(E, 0, 8), ce(new w(q), _, E);
        if (!(B = q.c)) return null;
        if (F = B.length - 1, k = F * g + 1, F = B[F]) {
          for (; F % 10 == 0; F /= 10, k--) ;
          for (F = B[0]; F >= 10; F /= 10, k++) ;
        }
        return _ && q.e + 1 > k && (k = q.e + 1), k;
      }, te.shiftedBy = function(_) {
        return V(_, -b, b), this.times("1e" + _);
      }, te.squareRoot = te.sqrt = function() {
        var _, E, B, k, F, q = this, h = q.c, o = q.s, u = q.e, y = de + 4, x = new w("0.5");
        if (o !== 1 || !h || !h[0])
          return new w(!o || o < 0 && (!h || h[0]) ? NaN : h ? q : 1 / 0);
        if (o = Math.sqrt(+fe(q)), o == 0 || o == 1 / 0 ? (E = U(h), (E.length + u) % 2 == 0 && (E += "0"), o = Math.sqrt(+E), u = I((u + 1) / 2) - (u < 0 || u % 2), o == 1 / 0 ? E = "5e" + u : (E = o.toExponential(), E = E.slice(0, E.indexOf("e") + 1) + u), B = new w(E)) : B = new w(o + ""), B.c[0]) {
          for (u = B.e, o = u + y, o < 3 && (o = 0); ; )
            if (F = B, B = x.times(F.plus(K(q, F, y, 1))), U(F.c).slice(0, o) === (E = U(B.c)).slice(0, o))
              if (B.e < u && --o, E = E.slice(o - 3, o + 1), E == "9999" || !k && E == "4999") {
                if (!k && (ce(F, F.e + de + 2, 0), F.times(F).eq(q))) {
                  B = F;
                  break;
                }
                y += 4, o += 4, k = 1;
              } else {
                (!+E || !+E.slice(1) && E.charAt(0) == "5") && (ce(B, B.e + de + 2, 1), _ = !B.times(B).eq(q));
                break;
              }
        }
        return ce(B, B.e + de + 1, R, _);
      }, te.toExponential = function(_, E) {
        return _ != null && (V(_, 0, S), _++), ie(this, _, E, 1);
      }, te.toFixed = function(_, E) {
        return _ != null && (V(_, 0, S), _ = _ + this.e + 1), ie(this, _, E);
      }, te.toFormat = function(_, E, B) {
        var k, F = this;
        if (B == null)
          _ != null && E && typeof E == "object" ? (B = E, E = null) : _ && typeof _ == "object" ? (B = _, _ = E = null) : B = se;
        else if (typeof B != "object")
          throw Error(c + "Argument not an object: " + B);
        if (k = F.toFixed(_, E), F.c) {
          var q, h = k.split("."), o = +B.groupSize, u = +B.secondaryGroupSize, y = B.groupSeparator || "", x = h[0], v = h[1], G = F.s < 0, oe = G ? x.slice(1) : x, me = oe.length;
          if (u && (q = o, o = u, u = q, me -= q), o > 0 && me > 0) {
            for (q = me % o || o, x = oe.substr(0, q); q < me; q += o) x += y + oe.substr(q, o);
            u > 0 && (x += y + oe.slice(q)), G && (x = "-" + x);
          }
          k = v ? x + (B.decimalSeparator || "") + ((u = +B.fractionGroupSize) ? v.replace(
            new RegExp("\\d{" + u + "}\\B", "g"),
            "$&" + (B.fractionGroupSeparator || "")
          ) : v) : x;
        }
        return (B.prefix || "") + k + (B.suffix || "");
      }, te.toFraction = function(_) {
        var E, B, k, F, q, h, o, u, y, x, v, G, oe = this, me = oe.c;
        if (_ != null && (o = new w(_), !o.isInteger() && (o.c || o.s !== 1) || o.lt(pe)))
          throw Error(c + "Argument " + (o.isInteger() ? "out of range: " : "not an integer: ") + fe(o));
        if (!me) return new w(oe);
        for (E = new w(pe), y = B = new w(pe), k = u = new w(pe), G = U(me), q = E.e = G.length - oe.e - 1, E.c[0] = T[(h = q % g) < 0 ? g + h : h], _ = !_ || o.comparedTo(E) > 0 ? q > 0 ? E : y : o, h = j, j = 1 / 0, o = new w(G), u.c[0] = 0; x = K(o, E, 0, 1), F = B.plus(x.times(k)), F.comparedTo(_) != 1; )
          B = k, k = F, y = u.plus(x.times(F = y)), u = F, E = o.minus(x.times(F = E)), o = F;
        return F = K(_.minus(B), k, 0, 1), u = u.plus(F.times(y)), B = B.plus(F.times(k)), u.s = y.s = oe.s, q = q * 2, v = K(y, k, q, R).minus(oe).abs().comparedTo(
          K(u, B, q, R).minus(oe).abs()
        ) < 1 ? [y, k] : [u, B], j = h, v;
      }, te.toNumber = function() {
        return +fe(this);
      }, te.toPrecision = function(_, E) {
        return _ != null && V(_, 1, S), ie(this, _, E, 2);
      }, te.toString = function(_) {
        var E, B = this, k = B.s, F = B.e;
        return F === null ? k ? (E = "Infinity", k < 0 && (E = "-" + E)) : E = "NaN" : (_ == null ? E = F <= C || F >= Y ? X(U(B.c), F) : P(U(B.c), F, "0") : _ === 10 && ue ? (B = ce(new w(B), de + F + 1, R), E = P(U(B.c), B.e, "0")) : (V(_, 2, Z.length, "Base"), E = re(P(U(B.c), F, "0"), 10, _, k, !0)), k < 0 && B.c[0] && (E = "-" + E)), E;
      }, te.valueOf = te.toJSON = function() {
        return fe(this);
      }, te._isBigNumber = !0, J != null && w.set(J), w;
    }
    function I(J) {
      var K = J | 0;
      return J > 0 || J === K ? K : K - 1;
    }
    function U(J) {
      for (var K, re, ae = 1, te = J.length, pe = J[0] + ""; ae < te; ) {
        for (K = J[ae++] + "", re = g - K.length; re--; K = "0" + K) ;
        pe += K;
      }
      for (te = pe.length; pe.charCodeAt(--te) === 48; ) ;
      return pe.slice(0, te + 1 || 1);
    }
    function H(J, K) {
      var re, ae, te = J.c, pe = K.c, de = J.s, R = K.s, C = J.e, Y = K.e;
      if (!de || !R) return null;
      if (re = te && !te[0], ae = pe && !pe[0], re || ae) return re ? ae ? 0 : -R : de;
      if (de != R) return de;
      if (re = de < 0, ae = C == Y, !te || !pe) return ae ? 0 : !te ^ re ? 1 : -1;
      if (!ae) return C > Y ^ re ? 1 : -1;
      for (R = (C = te.length) < (Y = pe.length) ? C : Y, de = 0; de < R; de++) if (te[de] != pe[de]) return te[de] > pe[de] ^ re ? 1 : -1;
      return C == Y ? 0 : C > Y ^ re ? 1 : -1;
    }
    function V(J, K, re, ae) {
      if (J < K || J > re || J !== s(J))
        throw Error(c + (ae || "Argument") + (typeof J == "number" ? J < K || J > re ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(J));
    }
    function L(J) {
      var K = J.c.length - 1;
      return I(J.e / g) == K && J.c[K] % 2 != 0;
    }
    function X(J, K) {
      return (J.length > 1 ? J.charAt(0) + "." + J.slice(1) : J) + (K < 0 ? "e" : "e+") + K;
    }
    function P(J, K, re) {
      var ae, te;
      if (K < 0) {
        for (te = re + "."; ++K; te += re) ;
        J = te + J;
      } else if (ae = J.length, ++K > ae) {
        for (te = re, K -= ae; --K; te += re) ;
        J += te;
      } else K < ae && (J = J.slice(0, K) + "." + J.slice(K));
      return J;
    }
    r = m(), r.default = r.BigNumber = r, t.exports ? t.exports = r : (e || (e = typeof self < "u" && self ? self : window), e.BigNumber = r);
  })(fn);
})(Su);
var fs = Su.exports, K0 = function(e, r, n) {
  var i = new e.Uint8Array(n), s = r.pushInt, c = r.pushInt32, a = r.pushInt32Neg, p = r.pushInt64, g = r.pushInt64Neg, b = r.pushFloat, T = r.pushFloatSingle, N = r.pushFloatDouble, S = r.pushTrue, m = r.pushFalse, I = r.pushUndefined, U = r.pushNull, H = r.pushInfinity, V = r.pushInfinityNeg, L = r.pushNaN, X = r.pushNaNNeg, P = r.pushArrayStart, J = r.pushArrayStartFixed, K = r.pushArrayStartFixed32, re = r.pushArrayStartFixed64, ae = r.pushObjectStart, te = r.pushObjectStartFixed, pe = r.pushObjectStartFixed32, de = r.pushObjectStartFixed64, R = r.pushByteString, C = r.pushByteStringStart, Y = r.pushUtf8String, z = r.pushUtf8StringStart, j = r.pushSimpleUnassigned, ee = r.pushTagStart, le = r.pushTagStart4, we = r.pushTagStart8, se = r.pushTagUnassigned, Z = r.pushBreak, ue = e.Math.pow, w = 0, ie = 0, he = 0;
  function Te(O) {
    for (O = O | 0, w = 0, ie = O; (w | 0) < (ie | 0) && (he = He[i[w] & 255](i[w] | 0) | 0, !((he | 0) > 0)); )
      ;
    return he | 0;
  }
  function ce(O) {
    return O = O | 0, ((w | 0) + (O | 0) | 0) < (ie | 0) ? 0 : 1;
  }
  function fe(O) {
    return O = O | 0, i[O | 0] << 8 | i[O + 1 | 0] | 0;
  }
  function _(O) {
    return O = O | 0, i[O | 0] << 24 | i[O + 1 | 0] << 16 | i[O + 2 | 0] << 8 | i[O + 3 | 0] | 0;
  }
  function E(O) {
    return O = O | 0, s(O | 0), w = w + 1 | 0, 0;
  }
  function B(O) {
    return O = O | 0, ce(1) | 0 ? 1 : (s(i[w + 1 | 0] | 0), w = w + 2 | 0, 0);
  }
  function k(O) {
    return O = O | 0, ce(2) | 0 ? 1 : (s(
      fe(w + 1 | 0) | 0
    ), w = w + 3 | 0, 0);
  }
  function F(O) {
    return O = O | 0, ce(4) | 0 ? 1 : (c(
      fe(w + 1 | 0) | 0,
      fe(w + 3 | 0) | 0
    ), w = w + 5 | 0, 0);
  }
  function q(O) {
    return O = O | 0, ce(8) | 0 ? 1 : (p(
      fe(w + 1 | 0) | 0,
      fe(w + 3 | 0) | 0,
      fe(w + 5 | 0) | 0,
      fe(w + 7 | 0) | 0
    ), w = w + 9 | 0, 0);
  }
  function h(O) {
    return O = O | 0, s(-1 - (O - 32 | 0) | 0), w = w + 1 | 0, 0;
  }
  function o(O) {
    return O = O | 0, ce(1) | 0 ? 1 : (s(
      -1 - (i[w + 1 | 0] | 0) | 0
    ), w = w + 2 | 0, 0);
  }
  function u(O) {
    O = O | 0;
    var Se = 0;
    return ce(2) | 0 ? 1 : (Se = fe(w + 1 | 0) | 0, s(-1 - (Se | 0) | 0), w = w + 3 | 0, 0);
  }
  function y(O) {
    return O = O | 0, ce(4) | 0 ? 1 : (a(
      fe(w + 1 | 0) | 0,
      fe(w + 3 | 0) | 0
    ), w = w + 5 | 0, 0);
  }
  function x(O) {
    return O = O | 0, ce(8) | 0 ? 1 : (g(
      fe(w + 1 | 0) | 0,
      fe(w + 3 | 0) | 0,
      fe(w + 5 | 0) | 0,
      fe(w + 7 | 0) | 0
    ), w = w + 9 | 0, 0);
  }
  function v(O) {
    O = O | 0;
    var Se = 0, Ne = 0, Re = 0;
    return Re = O - 64 | 0, ce(Re | 0) | 0 ? 1 : (Se = w + 1 | 0, Ne = (w + 1 | 0) + (Re | 0) | 0, R(Se | 0, Ne | 0), w = Ne | 0, 0);
  }
  function G(O) {
    O = O | 0;
    var Se = 0, Ne = 0, Re = 0;
    return ce(1) | 0 || (Re = i[w + 1 | 0] | 0, Se = w + 2 | 0, Ne = (w + 2 | 0) + (Re | 0) | 0, ce(Re + 1 | 0) | 0) ? 1 : (R(Se | 0, Ne | 0), w = Ne | 0, 0);
  }
  function oe(O) {
    O = O | 0;
    var Se = 0, Ne = 0, Re = 0;
    return ce(2) | 0 || (Re = fe(w + 1 | 0) | 0, Se = w + 3 | 0, Ne = (w + 3 | 0) + (Re | 0) | 0, ce(Re + 2 | 0) | 0) ? 1 : (R(Se | 0, Ne | 0), w = Ne | 0, 0);
  }
  function me(O) {
    O = O | 0;
    var Se = 0, Ne = 0, Re = 0;
    return ce(4) | 0 || (Re = _(w + 1 | 0) | 0, Se = w + 5 | 0, Ne = (w + 5 | 0) + (Re | 0) | 0, ce(Re + 4 | 0) | 0) ? 1 : (R(Se | 0, Ne | 0), w = Ne | 0, 0);
  }
  function ge(O) {
    return O = O | 0, 1;
  }
  function Be(O) {
    return O = O | 0, C(), w = w + 1 | 0, 0;
  }
  function d(O) {
    O = O | 0;
    var Se = 0, Ne = 0, Re = 0;
    return Re = O - 96 | 0, ce(Re | 0) | 0 ? 1 : (Se = w + 1 | 0, Ne = (w + 1 | 0) + (Re | 0) | 0, Y(Se | 0, Ne | 0), w = Ne | 0, 0);
  }
  function f(O) {
    O = O | 0;
    var Se = 0, Ne = 0, Re = 0;
    return ce(1) | 0 || (Re = i[w + 1 | 0] | 0, Se = w + 2 | 0, Ne = (w + 2 | 0) + (Re | 0) | 0, ce(Re + 1 | 0) | 0) ? 1 : (Y(Se | 0, Ne | 0), w = Ne | 0, 0);
  }
  function l(O) {
    O = O | 0;
    var Se = 0, Ne = 0, Re = 0;
    return ce(2) | 0 || (Re = fe(w + 1 | 0) | 0, Se = w + 3 | 0, Ne = (w + 3 | 0) + (Re | 0) | 0, ce(Re + 2 | 0) | 0) ? 1 : (Y(Se | 0, Ne | 0), w = Ne | 0, 0);
  }
  function A(O) {
    O = O | 0;
    var Se = 0, Ne = 0, Re = 0;
    return ce(4) | 0 || (Re = _(w + 1 | 0) | 0, Se = w + 5 | 0, Ne = (w + 5 | 0) + (Re | 0) | 0, ce(Re + 4 | 0) | 0) ? 1 : (Y(Se | 0, Ne | 0), w = Ne | 0, 0);
  }
  function M(O) {
    return O = O | 0, 1;
  }
  function D(O) {
    return O = O | 0, z(), w = w + 1 | 0, 0;
  }
  function W(O) {
    return O = O | 0, J(O - 128 | 0), w = w + 1 | 0, 0;
  }
  function Ae(O) {
    return O = O | 0, ce(1) | 0 ? 1 : (J(i[w + 1 | 0] | 0), w = w + 2 | 0, 0);
  }
  function Ie(O) {
    return O = O | 0, ce(2) | 0 ? 1 : (J(
      fe(w + 1 | 0) | 0
    ), w = w + 3 | 0, 0);
  }
  function Oe(O) {
    return O = O | 0, ce(4) | 0 ? 1 : (K(
      fe(w + 1 | 0) | 0,
      fe(w + 3 | 0) | 0
    ), w = w + 5 | 0, 0);
  }
  function ve(O) {
    return O = O | 0, ce(8) | 0 ? 1 : (re(
      fe(w + 1 | 0) | 0,
      fe(w + 3 | 0) | 0,
      fe(w + 5 | 0) | 0,
      fe(w + 7 | 0) | 0
    ), w = w + 9 | 0, 0);
  }
  function ke(O) {
    return O = O | 0, P(), w = w + 1 | 0, 0;
  }
  function $e(O) {
    O = O | 0;
    var Se = 0;
    return Se = O - 160 | 0, ce(Se | 0) | 0 ? 1 : (te(Se | 0), w = w + 1 | 0, 0);
  }
  function gs(O) {
    return O = O | 0, ce(1) | 0 ? 1 : (te(i[w + 1 | 0] | 0), w = w + 2 | 0, 0);
  }
  function ys(O) {
    return O = O | 0, ce(2) | 0 ? 1 : (te(
      fe(w + 1 | 0) | 0
    ), w = w + 3 | 0, 0);
  }
  function Je(O) {
    return O = O | 0, ce(4) | 0 ? 1 : (pe(
      fe(w + 1 | 0) | 0,
      fe(w + 3 | 0) | 0
    ), w = w + 5 | 0, 0);
  }
  function pr(O) {
    return O = O | 0, ce(8) | 0 ? 1 : (de(
      fe(w + 1 | 0) | 0,
      fe(w + 3 | 0) | 0,
      fe(w + 5 | 0) | 0,
      fe(w + 7 | 0) | 0
    ), w = w + 9 | 0, 0);
  }
  function ws(O) {
    return O = O | 0, ae(), w = w + 1 | 0, 0;
  }
  function sr(O) {
    return O = O | 0, ee(O - 192 | 0 | 0), w = w + 1 | 0, 0;
  }
  function Jn(O) {
    return O = O | 0, ee(O | 0), w = w + 1 | 0, 0;
  }
  function bs(O) {
    return O = O | 0, ee(O | 0), w = w + 1 | 0, 0;
  }
  function _s(O) {
    return O = O | 0, ee(O | 0), w = w + 1 | 0, 0;
  }
  function Wo(O) {
    return O = O | 0, ee(O | 0), w = w + 1 | 0, 0;
  }
  function De(O) {
    return O = O | 0, ee(O - 192 | 0 | 0), w = w + 1 | 0, 0;
  }
  function xs(O) {
    return O = O | 0, ee(O | 0), w = w + 1 | 0, 0;
  }
  function Do(O) {
    return O = O | 0, ee(O | 0), w = w + 1 | 0, 0;
  }
  function Pt(O) {
    return O = O | 0, ee(O | 0), w = w + 1 | 0, 0;
  }
  function Kr(O) {
    return O = O | 0, ce(1) | 0 ? 1 : (ee(i[w + 1 | 0] | 0), w = w + 2 | 0, 0);
  }
  function Qn(O) {
    return O = O | 0, ce(2) | 0 ? 1 : (ee(
      fe(w + 1 | 0) | 0
    ), w = w + 3 | 0, 0);
  }
  function ei(O) {
    return O = O | 0, ce(4) | 0 ? 1 : (le(
      fe(w + 1 | 0) | 0,
      fe(w + 3 | 0) | 0
    ), w = w + 5 | 0, 0);
  }
  function ti(O) {
    return O = O | 0, ce(8) | 0 ? 1 : (we(
      fe(w + 1 | 0) | 0,
      fe(w + 3 | 0) | 0,
      fe(w + 5 | 0) | 0,
      fe(w + 7 | 0) | 0
    ), w = w + 9 | 0, 0);
  }
  function je(O) {
    return O = O | 0, j((O | 0) - 224 | 0), w = w + 1 | 0, 0;
  }
  function Ct(O) {
    return O = O | 0, m(), w = w + 1 | 0, 0;
  }
  function ri(O) {
    return O = O | 0, S(), w = w + 1 | 0, 0;
  }
  function ni(O) {
    return O = O | 0, U(), w = w + 1 | 0, 0;
  }
  function ii(O) {
    return O = O | 0, I(), w = w + 1 | 0, 0;
  }
  function si(O) {
    return O = O | 0, ce(1) | 0 ? 1 : (j(i[w + 1 | 0] | 0), w = w + 2 | 0, 0);
  }
  function Es(O) {
    O = O | 0;
    var Se = 0, Ne = 0, Re = 1, Dt = 0, Ye = 0, Ts = 0;
    return ce(2) | 0 ? 1 : (Se = i[w + 1 | 0] | 0, Ne = i[w + 2 | 0] | 0, (Se | 0) & 128 && (Re = -1), Dt = +(((Se | 0) & 124) >> 2), Ye = +(((Se | 0) & 3) << 8 | Ne), +Dt == 0 ? b(+(+Re * 5960464477539063e-23 * +Ye)) : +Dt == 31 ? +Re == 1 ? +Ye > 0 ? L() : H() : +Ye > 0 ? X() : V() : b(+(+Re * ue(2, +(+Dt - 25)) * +(1024 + Ye))), w = w + 3 | 0, 0);
  }
  function xe(O) {
    return O = O | 0, ce(4) | 0 ? 1 : (T(
      i[w + 1 | 0] | 0,
      i[w + 2 | 0] | 0,
      i[w + 3 | 0] | 0,
      i[w + 4 | 0] | 0
    ), w = w + 5 | 0, 0);
  }
  function $(O) {
    return O = O | 0, ce(8) | 0 ? 1 : (N(
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
  function ne(O) {
    return O = O | 0, 1;
  }
  function _e(O) {
    return O = O | 0, Z(), w = w + 1 | 0, 0;
  }
  var He = [
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
    B,
    // 0x18
    // Unsigned integer (two-byte uint16_t follows)
    k,
    // 0x19
    // Unsigned integer (four-byte uint32_t follows)
    F,
    // 0x1a
    // Unsigned integer (eight-byte uint64_t follows)
    q,
    // 0x1b
    ne,
    // 0x1c
    ne,
    // 0x1d
    ne,
    // 0x1e
    ne,
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
    ne,
    // 0x3c
    ne,
    // 0x3d
    ne,
    // 0x3e
    ne,
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
    G,
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
    ne,
    // 0x5c
    ne,
    // 0x5d
    ne,
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
    M,
    // 0x7b
    // UTF-8 string, UTF-8 strings follow, terminated by "break"
    ne,
    // 0x7c
    ne,
    // 0x7d
    ne,
    // 0x7e
    D,
    // 0x7f
    // array (0x00..0x17 data items follow)
    W,
    // 0x80
    W,
    // 0x81
    W,
    // 0x82
    W,
    // 0x83
    W,
    // 0x84
    W,
    // 0x85
    W,
    // 0x86
    W,
    // 0x87
    W,
    // 0x88
    W,
    // 0x89
    W,
    // 0x8A
    W,
    // 0x8B
    W,
    // 0x8C
    W,
    // 0x8D
    W,
    // 0x8E
    W,
    // 0x8F
    W,
    // 0x90
    W,
    // 0x91
    W,
    // 0x92
    W,
    // 0x93
    W,
    // 0x94
    W,
    // 0x95
    W,
    // 0x96
    W,
    // 0x97
    // array (one-byte uint8_t fo, and then n data items follow)
    Ae,
    // 0x98
    // array (two-byte uint16_t for n, and then n data items follow)
    Ie,
    // 0x99
    // array (four-byte uint32_t for n, and then n data items follow)
    Oe,
    // 0x9a
    // array (eight-byte uint64_t for n, and then n data items follow)
    ve,
    // 0x9b
    // array, data items follow, terminated by "break"
    ne,
    // 0x9c
    ne,
    // 0x9d
    ne,
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
    gs,
    // 0xb8
    // map (two-byte uint16_t for n, and then n pairs of data items follow)
    ys,
    // 0xb9
    // map (four-byte uint32_t for n, and then n pairs of data items follow)
    Je,
    // 0xba
    // map (eight-byte uint64_t for n, and then n pairs of data items follow)
    pr,
    // 0xbb
    ne,
    // 0xbc
    ne,
    // 0xbd
    ne,
    // 0xbe
    // map, pairs of data items follow, terminated by "break"
    ws,
    // 0xbf
    // Text-based date/time (data item follows; see Section 2.4.1)
    sr,
    // 0xc0
    // Epoch-based date/time (data item follows; see Section 2.4.1)
    sr,
    // 0xc1
    // Positive bignum (data item "byte string" follows)
    sr,
    // 0xc2
    // Negative bignum (data item "byte string" follows)
    sr,
    // 0xc3
    // Decimal Fraction (data item "array" follows; see Section 2.4.3)
    sr,
    // 0xc4
    // Bigfloat (data item "array" follows; see Section 2.4.3)
    sr,
    // 0xc5
    // (tagged item)
    De,
    // 0xc6
    De,
    // 0xc7
    De,
    // 0xc8
    De,
    // 0xc9
    De,
    // 0xca
    De,
    // 0xcb
    De,
    // 0xcc
    De,
    // 0xcd
    De,
    // 0xce
    De,
    // 0xcf
    De,
    // 0xd0
    De,
    // 0xd1
    De,
    // 0xd2
    De,
    // 0xd3
    De,
    // 0xd4
    // Expected Conversion (data item follows; see Section 2.4.4.2)
    De,
    // 0xd5
    De,
    // 0xd6
    De,
    // 0xd7
    // (more tagged items, 1/2/4/8 bytes and then a data item follow)
    Kr,
    // 0xd8
    Qn,
    // 0xd9
    ei,
    // 0xda
    ti,
    // 0xdb
    ne,
    // 0xdc
    ne,
    // 0xdd
    ne,
    // 0xde
    ne,
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
    Ct,
    // 0xf4
    // True
    ri,
    // 0xf5
    // Null
    ni,
    // 0xf6
    // Undefined
    ii,
    // 0xf7
    // (simple value, one byte follows)
    si,
    // 0xf8
    // Half-Precision Float (two-byte IEEE 754)
    Es,
    // 0xf9
    // Single-Precision Float (four-byte IEEE 754)
    xe,
    // 0xfa
    // Double-Precision Float (eight-byte IEEE 754)
    $,
    // 0xfb
    ne,
    // 0xfc
    ne,
    // 0xfd
    ne,
    // 0xfe
    // "break" stop code
    _e
    // 0xff
  ];
  return {
    parse: Te
  };
}, ls = {}, ft = {};
const ko = fs.BigNumber;
ft.MT = {
  POS_INT: 0,
  NEG_INT: 1,
  BYTE_STRING: 2,
  UTF8_STRING: 3,
  ARRAY: 4,
  MAP: 5,
  TAG: 6,
  SIMPLE_FLOAT: 7
};
ft.TAG = {
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
ft.NUMBYTES = {
  ZERO: 0,
  ONE: 24,
  TWO: 25,
  FOUR: 26,
  EIGHT: 27,
  INDEFINITE: 31
};
ft.SIMPLE = {
  FALSE: 20,
  TRUE: 21,
  NULL: 22,
  UNDEFINED: 23
};
ft.SYMS = {
  NULL: Symbol("null"),
  UNDEFINED: Symbol("undef"),
  PARENT: Symbol("parent"),
  BREAK: Symbol("break"),
  STREAM: Symbol("stream")
};
ft.SHIFT32 = Math.pow(2, 32);
ft.SHIFT16 = Math.pow(2, 16);
ft.MAX_SAFE_HIGH = 2097151;
ft.NEG_ONE = new ko(-1);
ft.TEN = new ko(10);
ft.TWO = new ko(2);
ft.PARENT = {
  ARRAY: 0,
  OBJECT: 1,
  MAP: 2,
  TAG: 3,
  BYTE_STRING: 4,
  UTF8_STRING: 5
};
(function(t) {
  const { Buffer: e } = Dn, r = fs.BigNumber, n = ft, i = n.SHIFT32, s = n.SHIFT16, c = 2097151;
  t.parseHalf = function(g) {
    var b, T, N;
    return N = g[0] & 128 ? -1 : 1, b = (g[0] & 124) >> 2, T = (g[0] & 3) << 8 | g[1], b ? b === 31 ? N * (T ? NaN : 1 / 0) : N * Math.pow(2, b - 25) * (1024 + T) : N * 5960464477539063e-23 * T;
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
    for (let N = 0; N < T; N++)
      g.set(b[N], p[b[N]]);
    return g;
  }, t.buildInt32 = (p, g) => p * s + g, t.buildInt64 = (p, g, b, T) => {
    const N = t.buildInt32(p, g), S = t.buildInt32(b, T);
    return N > c ? new r(N).times(i).plus(S) : N * i + S;
  }, t.writeHalf = function(g, b) {
    const T = e.allocUnsafe(4);
    T.writeFloatBE(b, 0);
    const N = T.readUInt32BE(0);
    if (N & 8191)
      return !1;
    var S = N >> 16 & 32768;
    const m = N >> 23 & 255, I = N & 8388607;
    if (m >= 113 && m <= 142)
      S += (m - 112 << 10) + (I >> 13);
    else if (m >= 103 && m < 113) {
      if (I & (1 << 126 - m) - 1)
        return !1;
      S += I + 8388608 >> 126 - m;
    } else
      return !1;
    return g.writeUInt16BE(S, 0), !0;
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
})(ls);
const $o = ft, X0 = $o.MT, ai = $o.SIMPLE, Is = $o.SYMS;
let J0 = class io {
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
    return e._pushInt(this.value, X0.SIMPLE_FLOAT);
  }
  /**
   * Is the given object a Simple?
   *
   * @param {any} obj - object to test
   * @returns {bool} - is it Simple?
   */
  static isSimple(e) {
    return e instanceof io;
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
      case ai.FALSE:
        return !1;
      case ai.TRUE:
        return !0;
      case ai.NULL:
        return r ? null : Is.NULL;
      case ai.UNDEFINED:
        return r ? void 0 : Is.UNDEFINED;
      case -1:
        if (!r)
          throw new Error("Invalid BREAK");
        return Is.BREAK;
      default:
        return new io(e);
    }
  }
};
var Bu = J0;
let Q0 = class so {
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
    if (n = e != null ? e[this.tag] : void 0, typeof n != "function" && (n = so["_tag" + this.tag], typeof n != "function"))
      return this;
    try {
      return n.call(so, this.value);
    } catch (i) {
      return r = i, this.err = r, this;
    }
  }
};
var vu = Q0;
const Nu = self.location ? self.location.protocol + "//" + self.location.host : "", oo = self.URL;
let eh = class {
  constructor(e = "", r = Nu) {
    this.super = new oo(e, r), this.path = this.pathname + this.search, this.auth = this.username && this.password ? this.username + ":" + this.password : null, this.query = this.search && this.search.startsWith("?") ? this.search.slice(1) : null;
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
function th(t) {
  if (typeof t == "string")
    return new oo(t).toString();
  if (!(t instanceof oo)) {
    const e = t.username && t.password ? `${t.username}:${t.password}@` : "", r = t.auth ? t.auth + "@" : "", n = t.port ? ":" + t.port : "", i = t.protocol ? t.protocol + "//" : "", s = t.host || "", c = t.hostname || "", a = t.search || (t.query ? "?" + t.query : ""), p = t.hash || "", g = t.pathname || "", b = t.path || g + a;
    return `${i}${e || r}${s || c + n}${b}${p}`;
  }
}
var Ru = {
  URLWithLegacySupport: eh,
  URLSearchParams: self.URLSearchParams,
  defaultBase: Nu,
  format: th
};
const { URLWithLegacySupport: ha, format: rh } = Ru;
var nh = (t, e = {}, r = {}, n) => {
  let i = e.protocol ? e.protocol.replace(":", "") : "http";
  i = (r[i] || n || i) + ":";
  let s;
  try {
    s = new ha(t);
  } catch {
    s = {};
  }
  const c = Object.assign({}, e, {
    protocol: i || s.protocol,
    host: e.host || s.host
  });
  return new ha(t, rh(c)).toString();
};
const {
  URLWithLegacySupport: ih,
  format: sh,
  URLSearchParams: oh,
  defaultBase: ah
} = Ru, ch = nh;
var Ou = {
  URL: ih,
  URLSearchParams: oh,
  format: sh,
  relative: ch,
  defaultBase: ah
};
const { Buffer: Qr } = Dn, da = zn, uh = fs.BigNumber, fh = K0, lt = ls, Ve = ft, lh = Bu, hh = vu, { URL: dh } = Ou;
let ao = class co {
  /**
   * @param {Object} [opts={}]
   * @param {number} [opts.size=65536] - Size of the allocated heap.
   */
  constructor(e) {
    e = e || {}, !e.size || e.size < 65536 ? e.size = 65536 : e.size = lt.nextPowerOf2(e.size), this._heap = new ArrayBuffer(e.size), this._heap8 = new Uint8Array(this._heap), this._buffer = Qr.from(this._heap), this._reset(), this._knownTags = Object.assign({
      0: (r) => new Date(r),
      1: (r) => new Date(r * 1e3),
      2: (r) => lt.arrayBufferToBignumber(r),
      3: (r) => Ve.NEG_ONE.minus(lt.arrayBufferToBignumber(r)),
      4: (r) => Ve.TEN.pow(r[0]).times(r[1]),
      5: (r) => Ve.TWO.pow(r[0]).times(r[1]),
      32: (r) => new dh(r),
      35: (r) => new RegExp(r)
    }, e.tags), this.parser = fh(fn, {
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
      case Ve.PARENT.TAG:
        this._push(
          this.createTag(e.ref[0], e.ref[1])
        );
        break;
      case Ve.PARENT.BYTE_STRING:
        this._push(this.createByteString(e.ref, e.length));
        break;
      case Ve.PARENT.UTF8_STRING:
        this._push(this.createUtf8String(e.ref, e.length));
        break;
      case Ve.PARENT.MAP:
        if (e.values % 2 > 0)
          throw new Error("Odd number of elements in the map");
        this._push(this.createMap(e.ref, e.length));
        break;
      case Ve.PARENT.OBJECT:
        if (e.values % 2 > 0)
          throw new Error("Odd number of elements in the map");
        this._push(this.createObject(e.ref, e.length));
        break;
      case Ve.PARENT.ARRAY:
        this._push(this.createArray(e.ref, e.length));
        break;
    }
    this._currentParent && this._currentParent.type === Ve.PARENT.TAG && this._dec();
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
      case Ve.PARENT.ARRAY:
      case Ve.PARENT.BYTE_STRING:
      case Ve.PARENT.UTF8_STRING:
        n.length > -1 ? this._ref[this._ref.length - n.length] = e : this._ref.push(e), this._dec();
        break;
      case Ve.PARENT.OBJECT:
        n.tmpKey != null ? (this._ref[n.tmpKey] = e, n.tmpKey = null, this._dec()) : (n.tmpKey = e, typeof n.tmpKey != "string" && (n.type = Ve.PARENT.MAP, n.ref = lt.buildMap(n.ref)));
        break;
      case Ve.PARENT.MAP:
        n.tmpKey != null ? (this._ref.set(n.tmpKey, e), n.tmpKey = null, this._dec()) : n.tmpKey = e;
        break;
      case Ve.PARENT.TAG:
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
      type: Ve.PARENT.ARRAY,
      length: -1,
      ref: this._res,
      values: 0,
      tmpKey: null
    }];
  }
  // -- Interface to customize deoding behaviour
  createTag(e, r) {
    const n = this._knownTags[e];
    return n ? n(r) : new hh(e, r);
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
    return Qr.concat(e);
  }
  createByteStringFromHeap(e, r) {
    return e === r ? Qr.alloc(0) : Qr.from(this._heap.slice(e, r));
  }
  createInt(e) {
    return e;
  }
  createInt32(e, r) {
    return lt.buildInt32(e, r);
  }
  createInt64(e, r, n, i) {
    return lt.buildInt64(e, r, n, i);
  }
  createFloat(e) {
    return e;
  }
  createFloatSingle(e, r, n, i) {
    return da.read([e, r, n, i], 0, !1, 23, 4);
  }
  createFloatDouble(e, r, n, i, s, c, a, p) {
    return da.read([e, r, n, i, s, c, a, p], 0, !1, 52, 8);
  }
  createInt32Neg(e, r) {
    return -1 - lt.buildInt32(e, r);
  }
  createInt64Neg(e, r, n, i) {
    const s = lt.buildInt32(e, r), c = lt.buildInt32(n, i);
    return s > Ve.MAX_SAFE_HIGH ? Ve.NEG_ONE.minus(new uh(s).times(Ve.SHIFT32).plus(c)) : -1 - (s * Ve.SHIFT32 + c);
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
    return new lh(e);
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
    this._createParent([], Ve.PARENT.ARRAY, -1);
  }
  pushArrayStartFixed(e) {
    this._createArrayStartFixed(e);
  }
  pushArrayStartFixed32(e, r) {
    const n = lt.buildInt32(e, r);
    this._createArrayStartFixed(n);
  }
  pushArrayStartFixed64(e, r, n, i) {
    const s = lt.buildInt64(e, r, n, i);
    this._createArrayStartFixed(s);
  }
  pushObjectStart() {
    this._createObjectStartFixed(-1);
  }
  pushObjectStartFixed(e) {
    this._createObjectStartFixed(e);
  }
  pushObjectStartFixed32(e, r) {
    const n = lt.buildInt32(e, r);
    this._createObjectStartFixed(n);
  }
  pushObjectStartFixed64(e, r, n, i) {
    const s = lt.buildInt64(e, r, n, i);
    this._createObjectStartFixed(s);
  }
  pushByteStringStart() {
    this._parents[this._depth] = {
      type: Ve.PARENT.BYTE_STRING,
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
      type: Ve.PARENT.UTF8_STRING,
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
      type: Ve.PARENT.TAG,
      length: 1,
      ref: [e]
    };
  }
  pushTagStart4(e, r) {
    this.pushTagStart(lt.buildInt32(e, r));
  }
  pushTagStart8(e, r, n, i) {
    this.pushTagStart(lt.buildInt64(e, r, n, i));
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
    this._createParent({}, Ve.PARENT.OBJECT, e);
  }
  _createArrayStartFixed(e) {
    if (e === 0) {
      this._push(this.createArray([]));
      return;
    }
    this._createParent(new Array(e), Ve.PARENT.ARRAY, e);
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
    return typeof e == "string" && (e = Qr.from(e, r || "hex")), new co({ size: e.length }).decodeFirst(e);
  }
  /**
   * Decode all cbor objects.
   *
   * @param {Buffer|string} input
   * @param {string} [enc='hex'] - Encoding used if a string is passed.
   * @returns {Array<*>}
   */
  static decodeAll(e, r) {
    return typeof e == "string" && (e = Qr.from(e, r || "hex")), new co({ size: e.length }).decodeAll(e);
  }
};
ao.decodeFirst = ao.decode;
var Iu = ao;
const { Buffer: Us } = Dn, ph = Iu, mh = ls;
class qo extends ph {
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
    return mh.isNegativeZero(e) ? "-0_1" : `${r}_1`;
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
    return `h'${Us.from(
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
    const n = super.createMap(e), i = Array.from(n.keys()).reduce(pa(n), "");
    return r === -1 ? `{_ ${i}}` : `{${i}}`;
  }
  createObject(e, r) {
    const n = super.createObject(e), i = Object.keys(n).reduce(pa(n), "");
    return r === -1 ? `{_ ${i}}` : `{${i}}`;
  }
  createUtf8String(e, r) {
    const n = e.join(", ");
    return r === -1 ? `(_ ${n})` : `"${n}"`;
  }
  createUtf8StringFromHeap(e, r) {
    return `"${Us.from(
      super.createUtf8StringFromHeap(e, r)
    ).toString("utf8")}"`;
  }
  static diagnose(e, r) {
    return typeof e == "string" && (e = Us.from(e, r || "hex")), new qo().decodeFirst(e);
  }
}
var gh = qo;
function pa(t) {
  return (e, r) => e ? `${e}, ${r}: ${t[r]}` : `${r}: ${t[r]}`;
}
const { Buffer: Qt } = Dn, { URL: yh } = Ou, uo = fs.BigNumber, Fs = ls, nt = ft, Mt = nt.MT, ci = nt.NUMBYTES, ma = nt.SHIFT32, ga = nt.SYMS, en = nt.TAG, wh = nt.MT.SIMPLE_FLOAT << 5 | nt.NUMBYTES.TWO, bh = nt.MT.SIMPLE_FLOAT << 5 | nt.NUMBYTES.FOUR, _h = nt.MT.SIMPLE_FLOAT << 5 | nt.NUMBYTES.EIGHT, xh = nt.MT.SIMPLE_FLOAT << 5 | nt.SIMPLE.TRUE, Eh = nt.MT.SIMPLE_FLOAT << 5 | nt.SIMPLE.FALSE, Th = nt.MT.SIMPLE_FLOAT << 5 | nt.SIMPLE.UNDEFINED, ya = nt.MT.SIMPLE_FLOAT << 5 | nt.SIMPLE.NULL, Ah = new uo("0x20000000000000"), Sh = Qt.from("f97e00", "hex"), Bh = Qt.from("f9fc00", "hex"), vh = Qt.from("f97c00", "hex");
function Nh(t) {
  return {}.toString.call(t).slice(8, -1);
}
class Zi {
  /**
   * @param {Object} [options={}]
   * @param {function(Buffer)} options.stream
   */
  constructor(e) {
    e = e || {}, this.streaming = typeof e.stream == "function", this.onData = e.stream, this.semanticTypes = [
      [yh, this._pushUrl],
      [uo, this._pushBigNumber]
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
    return this.push(Sh);
  }
  _pushInfinity(e) {
    const r = e < 0 ? Bh : vh;
    return this.push(r);
  }
  _pushFloat(e) {
    const r = Qt.allocUnsafe(2);
    if (Fs.writeHalf(r, e) && Fs.parseHalf(r) === e)
      return this._pushUInt8(wh) && this.push(r);
    const n = Qt.allocUnsafe(4);
    return n.writeFloatBE(e, 0), n.readFloatBE(0) === e ? this._pushUInt8(bh) && this.push(n) : this._pushUInt8(_h) && this._pushDoubleBE(e);
  }
  _pushInt(e, r, n) {
    const i = r << 5;
    return e < 24 ? this._pushUInt8(i | e) : e <= 255 ? this._pushUInt8(i | ci.ONE) && this._pushUInt8(e) : e <= 65535 ? this._pushUInt8(i | ci.TWO) && this._pushUInt16BE(e) : e <= 4294967295 ? this._pushUInt8(i | ci.FOUR) && this._pushUInt32BE(e) : e <= Number.MAX_SAFE_INTEGER ? this._pushUInt8(i | ci.EIGHT) && this._pushUInt32BE(Math.floor(e / ma)) && this._pushUInt32BE(e % ma) : r === Mt.NEG_INT ? this._pushFloat(n) : this._pushFloat(e);
  }
  _pushIntNum(e) {
    return e < 0 ? this._pushInt(-e - 1, Mt.NEG_INT, e) : this._pushInt(e, Mt.POS_INT);
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
    const r = Qt.byteLength(e, "utf8");
    return this._pushInt(r, Mt.UTF8_STRING) && this.pushWrite(e, 5, r);
  }
  _pushBoolean(e) {
    return this._pushUInt8(e ? xh : Eh);
  }
  _pushUndefined(e) {
    return this._pushUInt8(Th);
  }
  _pushArray(e, r) {
    const n = r.length;
    if (!e._pushInt(n, Mt.ARRAY))
      return !1;
    for (let i = 0; i < n; i++)
      if (!e.pushAny(r[i]))
        return !1;
    return !0;
  }
  _pushTag(e) {
    return this._pushInt(e, Mt.TAG);
  }
  _pushDate(e, r) {
    return e._pushTag(en.DATE_EPOCH) && e.pushAny(Math.round(r / 1e3));
  }
  _pushBuffer(e, r) {
    return e._pushInt(r.length, Mt.BYTE_STRING) && e.push(r);
  }
  _pushNoFilter(e, r) {
    return e._pushBuffer(e, r.slice());
  }
  _pushRegexp(e, r) {
    return e._pushTag(en.REGEXP) && e.pushAny(r.source);
  }
  _pushSet(e, r) {
    if (!e._pushInt(r.size, Mt.ARRAY))
      return !1;
    for (const n of r)
      if (!e.pushAny(n))
        return !1;
    return !0;
  }
  _pushUrl(e, r) {
    return e._pushTag(en.URI) && e.pushAny(r.format());
  }
  _pushBigint(e) {
    let r = en.POS_BIGINT;
    e.isNegative() && (e = e.negated().minus(1), r = en.NEG_BIGINT);
    let n = e.toString(16);
    n.length % 2 && (n = "0" + n);
    const i = Qt.from(n, "hex");
    return this._pushTag(r) && this._pushBuffer(this, i);
  }
  _pushBigNumber(e, r) {
    if (r.isNaN())
      return e._pushNaN();
    if (!r.isFinite())
      return e._pushInfinity(r.isNegative() ? -1 / 0 : 1 / 0);
    if (r.isInteger())
      return e._pushBigint(r);
    if (!(e._pushTag(en.DECIMAL_FRAC) && e._pushInt(2, Mt.ARRAY)))
      return !1;
    const n = r.decimalPlaces(), i = r.multipliedBy(new uo(10).pow(n));
    return e._pushIntNum(-n) ? i.abs().isLessThan(Ah) ? e._pushIntNum(i.toNumber()) : e._pushBigint(i) : !1;
  }
  _pushMap(e, r) {
    return e._pushInt(r.size, Mt.MAP) ? this._pushRawMap(
      r.size,
      Array.from(r)
    ) : !1;
  }
  _pushObject(e) {
    if (!e)
      return this._pushUInt8(ya);
    for (var r = this.semanticTypes.length, n = 0; n < r; n++)
      if (e instanceof this.semanticTypes[n][0])
        return this.semanticTypes[n][1].call(e, this, e);
    var i = e.encodeCBOR;
    if (typeof i == "function")
      return i.call(e, this);
    var s = Object.keys(e), c = s.length;
    return this._pushInt(c, Mt.MAP) ? this._pushRawMap(
      c,
      s.map((a) => [a, e[a]])
    ) : !1;
  }
  _pushRawMap(e, r) {
    r = r.map(function(i) {
      return i[0] = Zi.encode(i[0]), i;
    }).sort(Fs.keySorter);
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
    var r = Nh(e);
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
        return this._pushBuffer(this, Qt.isBuffer(e) ? e : Qt.from(e));
      case "Null":
        return this._pushUInt8(ya);
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
          case ga.NULL:
            return this._pushObject(null);
          case ga.UNDEFINED:
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
    var a = Qt.allocUnsafe(s), p = 0, g = 0;
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
    const r = new Zi();
    if (!r.pushAny(e))
      throw new Error("Failed to encode input");
    return r.finalize();
  }
}
var Rh = Zi;
(function(t) {
  t.Diagnose = gh, t.Decoder = Iu, t.Encoder = Rh, t.Simple = Bu, t.Tagged = vu, t.decodeAll = t.Decoder.decodeAll, t.decodeFirst = t.Decoder.decodeFirst, t.diagnose = t.Diagnose.diagnose, t.encode = t.Encoder.encode, t.decode = t.Decoder.decode, t.leveldb = {
    decode: t.Decoder.decodeAll,
    encode: t.Encoder.encode,
    buffer: !0,
    name: "cbor"
  };
})(Au);
const Uu = /* @__PURE__ */ p0(Au);
function Gt(t) {
  return Ei(Uo.create().update(new Uint8Array(t)).digest());
}
function Ai(t) {
  if (t instanceof Uu.Tagged)
    return Ai(t.value);
  if (typeof t == "string")
    return Fu(t);
  if (typeof t == "number")
    return Gt(We(t));
  if (t instanceof ArrayBuffer || ArrayBuffer.isView(t))
    return Gt(t);
  if (Array.isArray(t)) {
    const e = t.map(Ai);
    return Gt(ir(...e));
  } else {
    if (t && typeof t == "object" && t._isPrincipal)
      return Gt(t.toUint8Array());
    if (typeof t == "object" && t !== null && typeof t.toHash == "function")
      return Ai(t.toHash());
    if (typeof t == "object")
      return Ki(t);
    if (typeof t == "bigint")
      return Gt(We(t));
  }
  throw Object.assign(new Error(`Attempt to hash a value of unsupported type: ${t}`), {
    // include so logs/callers can understand the confusing value.
    // (when stringified in error message, prototype info is lost)
    value: t
  });
}
const Fu = (t) => {
  const e = new TextEncoder().encode(t);
  return Gt(e);
};
function wa(t) {
  return Ki(t);
}
function Ki(t) {
  const n = Object.entries(t).filter(([, c]) => c !== void 0).map(([c, a]) => {
    const p = Fu(c), g = Ai(a);
    return [p, g];
  }).sort(([c], [a]) => kc(c, a)), i = ir(...n.map((c) => ir(...c)));
  return Gt(i);
}
new TextEncoder().encode(`
ic-request`);
class Oh {
  getPrincipal() {
    return Me.anonymous();
  }
  async transformRequest(e) {
    return Object.assign(Object.assign({}, e), { body: { content: e.body } });
  }
}
var fr = {}, yn = {}, Le = {};
Object.defineProperty(Le, "__esModule", { value: !0 });
const Ih = 9007199254740992;
function hr(t, ...e) {
  const r = new Uint8Array(t.byteLength + e.reduce((i, s) => i + s.byteLength, 0));
  r.set(new Uint8Array(t), 0);
  let n = t.byteLength;
  for (const i of e)
    r.set(new Uint8Array(i), n), n += i.byteLength;
  return r.buffer;
}
function zt(t, e, r) {
  r = r.replace(/[^0-9a-fA-F]/g, "");
  const n = 2 ** (e - 24);
  r = r.slice(-n * 2).padStart(n * 2, "0");
  const i = [(t << 5) + e].concat(r.match(/../g).map((s) => parseInt(s, 16)));
  return new Uint8Array(i).buffer;
}
function hs(t, e) {
  if (e < 24)
    return new Uint8Array([(t << 5) + e]).buffer;
  {
    const r = e <= 255 ? 24 : e <= 65535 ? 25 : e <= 4294967295 ? 26 : 27;
    return zt(t, r, e.toString(16));
  }
}
function Pu(t) {
  const e = [];
  for (let r = 0; r < t.length; r++) {
    let n = t.charCodeAt(r);
    n < 128 ? e.push(n) : n < 2048 ? e.push(192 | n >> 6, 128 | n & 63) : n < 55296 || n >= 57344 ? e.push(224 | n >> 12, 128 | n >> 6 & 63, 128 | n & 63) : (r++, n = (n & 1023) << 10 | t.charCodeAt(r) & 1023, e.push(240 | n >> 18, 128 | n >> 12 & 63, 128 | n >> 6 & 63, 128 | n & 63));
  }
  return hr(new Uint8Array(hs(3, t.length)), new Uint8Array(e));
}
function Uh(t, e) {
  if (t == 14277111)
    return hr(new Uint8Array([217, 217, 247]), e);
  if (t < 24)
    return hr(new Uint8Array([192 + t]), e);
  {
    const r = t <= 255 ? 24 : t <= 65535 ? 25 : t <= 4294967295 ? 26 : 27, n = 2 ** (r - 24), i = t.toString(16).slice(-n * 2).padStart(n * 2, "0"), s = [192 + r].concat(i.match(/../g).map((c) => parseInt(c, 16)));
    return new Uint8Array(s).buffer;
  }
}
Le.tagged = Uh;
function Yn(t) {
  return new Uint8Array(t).buffer;
}
Le.raw = Yn;
function Ho(t) {
  if (isNaN(t))
    throw new RangeError("Invalid number.");
  t = Math.min(Math.max(0, t), 23);
  const e = [0 + t];
  return new Uint8Array(e).buffer;
}
Le.uSmall = Ho;
function Cu(t, e) {
  if (t = parseInt("" + t, e), isNaN(t))
    throw new RangeError("Invalid number.");
  return t = Math.min(Math.max(0, t), 255), t = t.toString(16), zt(0, 24, t);
}
Le.u8 = Cu;
function Mu(t, e) {
  if (t = parseInt("" + t, e), isNaN(t))
    throw new RangeError("Invalid number.");
  return t = Math.min(Math.max(0, t), 65535), t = t.toString(16), zt(0, 25, t);
}
Le.u16 = Mu;
function ku(t, e) {
  if (t = parseInt("" + t, e), isNaN(t))
    throw new RangeError("Invalid number.");
  return t = Math.min(Math.max(0, t), 4294967295), t = t.toString(16), zt(0, 26, t);
}
Le.u32 = ku;
function Vo(t, e) {
  if (typeof t == "string" && e == 16) {
    if (t.match(/[^0-9a-fA-F]/))
      throw new RangeError("Invalid number.");
    return zt(0, 27, t);
  }
  if (t = parseInt("" + t, e), isNaN(t))
    throw new RangeError("Invalid number.");
  return t = Math.min(Math.max(0, t), Ih), t = t.toString(16), zt(0, 27, t);
}
Le.u64 = Vo;
function $u(t) {
  if (isNaN(t))
    throw new RangeError("Invalid number.");
  if (t === 0)
    return Ho(0);
  t = Math.min(Math.max(0, -t), 24) - 1;
  const e = [32 + t];
  return new Uint8Array(e).buffer;
}
Le.iSmall = $u;
function qu(t, e) {
  if (t = parseInt("" + t, e), isNaN(t))
    throw new RangeError("Invalid number.");
  return t = Math.min(Math.max(0, -t - 1), 255), t = t.toString(16), zt(1, 24, t);
}
Le.i8 = qu;
function Hu(t, e) {
  if (t = parseInt("" + t, e), isNaN(t))
    throw new RangeError("Invalid number.");
  return t = Math.min(Math.max(0, -t - 1), 65535), t = t.toString(16), zt(1, 25, t);
}
Le.i16 = Hu;
function Vu(t, e) {
  if (t = parseInt("" + t, e), isNaN(t))
    throw new RangeError("Invalid number.");
  return t = Math.min(Math.max(0, -t - 1), 4294967295), t = t.toString(16), zt(1, 26, t);
}
Le.i32 = Vu;
function Lu(t, e) {
  if (typeof t == "string" && e == 16) {
    if (t.startsWith("-") ? t = t.slice(1) : t = "0", t.match(/[^0-9a-fA-F]/) || t.length > 16)
      throw new RangeError("Invalid number.");
    let r = !1, n = t.split("").reduceRight((i, s) => {
      if (r)
        return s + i;
      let c = parseInt(s, 16) - 1;
      return c >= 0 ? (r = !0, c.toString(16) + i) : "f" + i;
    }, "");
    return r ? zt(1, 27, n) : Vo(0);
  }
  if (t = parseInt("" + t, e), isNaN(t))
    throw new RangeError("Invalid number.");
  return t = Math.min(Math.max(0, -t - 1), 9007199254740992), t = t.toString(16), zt(1, 27, t);
}
Le.i64 = Lu;
function Fh(t) {
  return t >= 0 ? t < 24 ? Ho(t) : t <= 255 ? Cu(t) : t <= 65535 ? Mu(t) : t <= 4294967295 ? ku(t) : Vo(t) : t >= -24 ? $u(t) : t >= -255 ? qu(t) : t >= -65535 ? Hu(t) : t >= -4294967295 ? Vu(t) : Lu(t);
}
Le.number = Fh;
function Ph(t) {
  return hr(hs(2, t.byteLength), t);
}
Le.bytes = Ph;
function Ch(t) {
  return Pu(t);
}
Le.string = Ch;
function Mh(t) {
  return hr(hs(4, t.length), ...t);
}
Le.array = Mh;
function kh(t, e = !1) {
  t instanceof Map || (t = new Map(Object.entries(t)));
  let r = Array.from(t.entries());
  return e && (r = r.sort(([n], [i]) => n.localeCompare(i))), hr(hs(5, t.size), ...r.map(([n, i]) => hr(Pu(n), i)));
}
Le.map = kh;
function $h(t) {
  const e = new Float32Array([t]);
  return hr(new Uint8Array([250]), new Uint8Array(e.buffer));
}
Le.singleFloat = $h;
function qh(t) {
  const e = new Float64Array([t]);
  return hr(new Uint8Array([251]), new Uint8Array(e.buffer));
}
Le.doubleFloat = qh;
function Hh(t) {
  return t ? Gu() : ju();
}
Le.bool = Hh;
function Gu() {
  return Yn(new Uint8Array([245]));
}
Le.true_ = Gu;
function ju() {
  return Yn(new Uint8Array([244]));
}
Le.false_ = ju;
function Vh() {
  return Yn(new Uint8Array([246]));
}
Le.null_ = Vh;
function Lh() {
  return Yn(new Uint8Array([247]));
}
Le.undefined_ = Lh;
var Gh = fn && fn.__importStar || function(t) {
  if (t && t.__esModule) return t;
  var e = {};
  if (t != null) for (var r in t) Object.hasOwnProperty.call(t, r) && (e[r] = t[r]);
  return e.default = t, e;
};
Object.defineProperty(yn, "__esModule", { value: !0 });
const $t = Gh(Le), jh = [
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
class zu {
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
        return $t.undefined_();
      case "boolean":
        return $t.bool(e);
      case "number":
        return Math.floor(e) === e ? $t.number(e) : $t.doubleFloat(e);
      case "string":
        return $t.string(e);
      case "object":
        if (e === null)
          return $t.null_();
        if (Array.isArray(e))
          return $t.array(e.map((r) => this._serializer.serializeValue(r)));
        if (jh.find((r) => e instanceof r))
          return $t.bytes(e.buffer);
        if (Object.getOwnPropertyNames(e).indexOf("toJSON") !== -1)
          return this.encode(e.toJSON());
        if (e instanceof Map) {
          const r = /* @__PURE__ */ new Map();
          for (const [n, i] of e.entries())
            r.set(n, this._serializer.serializeValue(i));
          return $t.map(r, this._stable);
        } else {
          const r = /* @__PURE__ */ new Map();
          for (const [n, i] of Object.entries(e))
            r.set(n, this._serializer.serializeValue(i));
          return $t.map(r, this._stable);
        }
      default:
        throw new Error("Invalid value.");
    }
  }
}
yn.JsonDefaultCborEncoder = zu;
class Wu {
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
yn.ToCborEncoder = Wu;
class Du {
  constructor() {
    this._encoders = /* @__PURE__ */ new Set();
  }
  static withDefaultEncoders(e = !1) {
    const r = new this();
    return r.addEncoder(new zu(r, e)), r.addEncoder(new Wu()), r;
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
yn.CborSerializer = Du;
class zh extends Du {
  serialize(e) {
    return $t.raw(new Uint8Array([
      // Self describe CBOR.
      ...new Uint8Array([217, 217, 247]),
      ...new Uint8Array(super.serializeValue(e))
    ]));
  }
}
yn.SelfDescribeCborSerializer = zh;
(function(t) {
  function e(i) {
    for (var s in i) t.hasOwnProperty(s) || (t[s] = i[s]);
  }
  var r = fn && fn.__importStar || function(i) {
    if (i && i.__esModule) return i;
    var s = {};
    if (i != null) for (var c in i) Object.hasOwnProperty.call(i, c) && (s[c] = i[c]);
    return s.default = i, s;
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), e(yn);
  const n = r(Le);
  t.value = n;
})(fr);
class Wh {
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
    return fr.value.bytes(e.toUint8Array());
  }
}
class Dh {
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
    return fr.value.bytes(new Uint8Array(e));
  }
}
class Yh {
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
    return e > BigInt(0) ? fr.value.tagged(2, fr.value.bytes(Wi(e.toString(16)))) : fr.value.tagged(3, fr.value.bytes(Wi((BigInt("-1") * e).toString(16))));
  }
}
const ds = fr.SelfDescribeCborSerializer.withDefaultEncoders(!0);
ds.addEncoder(new Wh());
ds.addEncoder(new Dh());
ds.addEncoder(new Yh());
var fo;
(function(t) {
  t[t.Uint64LittleEndian = 71] = "Uint64LittleEndian", t[t.Semantic = 55799] = "Semantic";
})(fo || (fo = {}));
function Ps(t) {
  return ds.serialize(t);
}
function ba(t) {
  const e = t.byteLength;
  let r = BigInt(0);
  for (let n = 0; n < e; n++)
    r = r * BigInt(256) + BigInt(t[n]);
  return r;
}
class Zh extends Uu.Decoder {
  createByteString(e) {
    return ir(...e);
  }
  createByteStringFromHeap(e, r) {
    return e === r ? new ArrayBuffer(0) : new Uint8Array(this._heap.slice(e, r));
  }
}
function lr(t) {
  const e = new Uint8Array(t), r = new Zh({
    size: e.byteLength,
    tags: {
      // Override tags 2 and 3 for BigInt support (borc supports only BigNumber).
      2: (n) => ba(n),
      3: (n) => -ba(n),
      [fo.Semantic]: (n) => n
    }
  });
  try {
    return r.decodeFirst(e);
  } catch (n) {
    throw new Error(`Failed to decode CBOR: ${n}, input: ${jt(e)}`);
  }
}
const ui = () => {
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
var lo;
(function(t) {
  t.Call = "call";
})(lo || (lo = {}));
function ho() {
  const t = new ArrayBuffer(16), e = new DataView(t), r = ui(), n = ui(), i = ui(), s = ui();
  return e.setUint32(0, r), e.setUint32(4, n), e.setUint32(8, i), e.setUint32(12, s), t;
}
const _a = BigInt(1e6), Kh = 60 * 1e3;
class rn {
  constructor(e) {
    if (e < 90 * 1e3) {
      const a = BigInt(Date.now() + e) * _a / BigInt(1e9);
      this._value = a * BigInt(1e9);
      return;
    }
    const s = BigInt(Math.floor(Date.now() + e - Kh)) * _a / BigInt(1e9) / BigInt(60) * BigInt(60) * BigInt(1e9);
    this._value = s;
  }
  toCBOR() {
    return fr.value.u64(this._value.toString(16), 16);
  }
  toHash() {
    return We(this._value);
  }
}
function xa(t = ho) {
  return async (e) => {
    const r = e.request.headers;
    e.request.headers = r, e.endpoint === "call" && (e.body.nonce = t());
  };
}
function Bn(t) {
  const e = [];
  return t.forEach((r, n) => {
    e.push([n, r]);
  }), e;
}
class Cs extends tt {
  constructor(e, r) {
    super(e), this.response = r, this.name = this.constructor.name, Object.setPrototypeOf(this, new.target.prototype);
  }
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Yu = /* @__PURE__ */ BigInt(0), Lo = /* @__PURE__ */ BigInt(1), Xh = /* @__PURE__ */ BigInt(2);
function ps(t) {
  return t instanceof Uint8Array || t != null && typeof t == "object" && t.constructor.name === "Uint8Array";
}
function Nr(t) {
  if (!ps(t))
    throw new Error("Uint8Array expected");
}
function Fn(t, e) {
  if (typeof e != "boolean")
    throw new Error(`${t} must be valid boolean, got "${e}".`);
}
const Jh = /* @__PURE__ */ Array.from({ length: 256 }, (t, e) => e.toString(16).padStart(2, "0"));
function Wr(t) {
  Nr(t);
  let e = "";
  for (let r = 0; r < t.length; r++)
    e += Jh[t[r]];
  return e;
}
function Zu(t) {
  if (typeof t != "string")
    throw new Error("hex string expected, got " + typeof t);
  return BigInt(t === "" ? "0" : `0x${t}`);
}
const or = { _0: 48, _9: 57, _A: 65, _F: 70, _a: 97, _f: 102 };
function Ea(t) {
  if (t >= or._0 && t <= or._9)
    return t - or._0;
  if (t >= or._A && t <= or._F)
    return t - (or._A - 10);
  if (t >= or._a && t <= or._f)
    return t - (or._a - 10);
}
function Ku(t) {
  if (typeof t != "string")
    throw new Error("hex string expected, got " + typeof t);
  const e = t.length, r = e / 2;
  if (e % 2)
    throw new Error("padded hex string expected, got unpadded hex of length " + e);
  const n = new Uint8Array(r);
  for (let i = 0, s = 0; i < r; i++, s += 2) {
    const c = Ea(t.charCodeAt(s)), a = Ea(t.charCodeAt(s + 1));
    if (c === void 0 || a === void 0) {
      const p = t[s] + t[s + 1];
      throw new Error('hex string expected, got non-hex character "' + p + '" at index ' + s);
    }
    n[i] = c * 16 + a;
  }
  return n;
}
function Lt(t) {
  return Zu(Wr(t));
}
function Pn(t) {
  return Nr(t), Zu(Wr(Uint8Array.from(t).reverse()));
}
function at(t, e) {
  return Ku(t.toString(16).padStart(e * 2, "0"));
}
function Xi(t, e) {
  return at(t, e).reverse();
}
function bt(t, e, r) {
  let n;
  if (typeof e == "string")
    try {
      n = Ku(e);
    } catch (s) {
      throw new Error(`${t} must be valid hex string, got "${e}". Cause: ${s}`);
    }
  else if (ps(e))
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
    Nr(i), e += i.length;
  }
  const r = new Uint8Array(e);
  for (let n = 0, i = 0; n < t.length; n++) {
    const s = t[n];
    r.set(s, i), i += s.length;
  }
  return r;
}
function Go(t) {
  if (typeof t != "string")
    throw new Error(`utf8ToBytes expected string, got ${typeof t}`);
  return new Uint8Array(new TextEncoder().encode(t));
}
const Ms = (t) => typeof t == "bigint" && Yu <= t;
function Xu(t, e, r) {
  return Ms(t) && Ms(e) && Ms(r) && e <= t && t < r;
}
function Sr(t, e, r, n) {
  if (!Xu(e, r, n))
    throw new Error(`expected valid ${t}: ${r} <= n < ${n}, got ${typeof e} ${e}`);
}
function Cn(t) {
  let e;
  for (e = 0; t > Yu; t >>= Lo, e += 1)
    ;
  return e;
}
function Qh(t, e) {
  return t >> BigInt(e) & Lo;
}
const Si = (t) => (Xh << BigInt(t - 1)) - Lo, ed = {
  bigint: (t) => typeof t == "bigint",
  function: (t) => typeof t == "function",
  boolean: (t) => typeof t == "boolean",
  string: (t) => typeof t == "string",
  stringOrUint8Array: (t) => typeof t == "string" || ps(t),
  isSafeInteger: (t) => Number.isSafeInteger(t),
  array: (t) => Array.isArray(t),
  field: (t, e) => e.Fp.isValid(t),
  hash: (t) => typeof t == "function" && Number.isSafeInteger(t.outputLen)
};
function Zn(t, e, r = {}) {
  const n = (i, s, c) => {
    const a = ed[s];
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
const Ta = () => {
  throw new Error("not implemented");
};
function qn(t) {
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
const ot = BigInt(0), Ge = BigInt(1), Br = BigInt(2), td = BigInt(3), po = BigInt(4), Aa = BigInt(5), Sa = BigInt(8);
BigInt(9);
BigInt(16);
function ze(t, e) {
  const r = t % e;
  return r >= ot ? r : e + r;
}
function rd(t, e, r) {
  if (r <= ot || e < ot)
    throw new Error("Expected power/modulo > 0");
  if (r === Ge)
    return ot;
  let n = Ge;
  for (; e > ot; )
    e & Ge && (n = n * t % r), t = t * t % r, e >>= Ge;
  return n;
}
function Zt(t, e, r) {
  let n = t;
  for (; e-- > ot; )
    n *= n, n %= r;
  return n;
}
function Ba(t, e) {
  if (t === ot || e <= ot)
    throw new Error(`invert: expected positive integers, got n=${t} mod=${e}`);
  let r = ze(t, e), n = e, i = ot, s = Ge;
  for (; r !== ot; ) {
    const a = n / r, p = n % r, g = i - s * a;
    n = r, r = p, i = s, s = g;
  }
  if (n !== Ge)
    throw new Error("invert: does not exist");
  return ze(i, e);
}
function nd(t) {
  const e = (t - Ge) / Br;
  let r, n, i;
  for (r = t - Ge, n = 0; r % Br === ot; r /= Br, n++)
    ;
  for (i = Br; i < t && rd(i, e, t) !== t - Ge; i++)
    ;
  if (n === 1) {
    const c = (t + Ge) / po;
    return function(p, g) {
      const b = p.pow(g, c);
      if (!p.eql(p.sqr(b), g))
        throw new Error("Cannot find square root");
      return b;
    };
  }
  const s = (r + Ge) / Br;
  return function(a, p) {
    if (a.pow(p, e) === a.neg(a.ONE))
      throw new Error("Cannot find square root");
    let g = n, b = a.pow(a.mul(a.ONE, i), r), T = a.pow(p, s), N = a.pow(p, r);
    for (; !a.eql(N, a.ONE); ) {
      if (a.eql(N, a.ZERO))
        return a.ZERO;
      let S = 1;
      for (let I = a.sqr(N); S < g && !a.eql(I, a.ONE); S++)
        I = a.sqr(I);
      const m = a.pow(b, Ge << BigInt(g - S - 1));
      b = a.sqr(m), T = a.mul(T, m), N = a.mul(N, b), g = S;
    }
    return T;
  };
}
function id(t) {
  if (t % po === td) {
    const e = (t + Ge) / po;
    return function(n, i) {
      const s = n.pow(i, e);
      if (!n.eql(n.sqr(s), i))
        throw new Error("Cannot find square root");
      return s;
    };
  }
  if (t % Sa === Aa) {
    const e = (t - Aa) / Sa;
    return function(n, i) {
      const s = n.mul(i, Br), c = n.pow(s, e), a = n.mul(i, c), p = n.mul(n.mul(a, Br), c), g = n.mul(a, n.sub(p, n.ONE));
      if (!n.eql(n.sqr(g), i))
        throw new Error("Cannot find square root");
      return g;
    };
  }
  return nd(t);
}
const sd = (t, e) => (ze(t, e) & Ge) === Ge, od = [
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
function Ju(t) {
  const e = {
    ORDER: "bigint",
    MASK: "bigint",
    BYTES: "isSafeInteger",
    BITS: "isSafeInteger"
  }, r = od.reduce((n, i) => (n[i] = "function", n), e);
  return Zn(t, r);
}
function Bi(t, e, r) {
  if (r < ot)
    throw new Error("Expected power > 0");
  if (r === ot)
    return t.ONE;
  if (r === Ge)
    return e;
  let n = t.ONE, i = e;
  for (; r > ot; )
    r & Ge && (n = t.mul(n, i)), i = t.sqr(i), r >>= Ge;
  return n;
}
function vi(t, e) {
  const r = new Array(e.length), n = e.reduce((s, c, a) => t.is0(c) ? s : (r[a] = s, t.mul(s, c)), t.ONE), i = t.inv(n);
  return e.reduceRight((s, c, a) => t.is0(c) ? s : (r[a] = t.mul(s, r[a]), t.mul(s, c)), i), r;
}
function ad(t) {
  const e = (t - Ge) / Br;
  return (r, n) => r.pow(n, e);
}
function Qu(t, e) {
  const r = e !== void 0 ? e : t.toString(2).length, n = Math.ceil(r / 8);
  return { nBitLength: r, nByteLength: n };
}
function Kn(t, e, r = !1, n = {}) {
  if (t <= ot)
    throw new Error(`Expected Field ORDER > 0, got ${t}`);
  const { nBitLength: i, nByteLength: s } = Qu(t, e);
  if (s > 2048)
    throw new Error("Field lengths over 2048 bytes are not supported");
  const c = id(t), a = Object.freeze({
    ORDER: t,
    BITS: i,
    BYTES: s,
    MASK: Si(i),
    ZERO: ot,
    ONE: Ge,
    create: (p) => ze(p, t),
    isValid: (p) => {
      if (typeof p != "bigint")
        throw new Error(`Invalid field element: expected bigint, got ${typeof p}`);
      return ot <= p && p < t;
    },
    is0: (p) => p === ot,
    isOdd: (p) => (p & Ge) === Ge,
    neg: (p) => ze(-p, t),
    eql: (p, g) => p === g,
    sqr: (p) => ze(p * p, t),
    add: (p, g) => ze(p + g, t),
    sub: (p, g) => ze(p - g, t),
    mul: (p, g) => ze(p * g, t),
    pow: (p, g) => Bi(a, p, g),
    div: (p, g) => ze(p * Ba(g, t), t),
    // Same as above, but doesn't normalize
    sqrN: (p) => p * p,
    addN: (p, g) => p + g,
    subN: (p, g) => p - g,
    mulN: (p, g) => p * g,
    inv: (p) => Ba(p, t),
    sqrt: n.sqrt || ((p) => c(a, p)),
    invertBatch: (p) => vi(a, p),
    // TODO: do we really need constant cmov?
    // We don't have const-time bigints anyway, so probably will be not very useful
    cmov: (p, g, b) => b ? g : p,
    toBytes: (p) => r ? Xi(p, s) : at(p, s),
    fromBytes: (p) => {
      if (p.length !== s)
        throw new Error(`Fp.fromBytes: expected ${s}, got ${p.length}`);
      return r ? Pn(p) : Lt(p);
    }
  });
  return Object.freeze(a);
}
function ef(t) {
  if (typeof t != "bigint")
    throw new Error("field order must be bigint");
  const e = t.toString(2).length;
  return Math.ceil(e / 8);
}
function tf(t) {
  const e = ef(t);
  return e + Math.ceil(e / 2);
}
function cd(t, e, r = !1) {
  const n = t.length, i = ef(e), s = tf(e);
  if (n < 16 || n < s || n > 1024)
    throw new Error(`expected ${s}-1024 bytes of input, got ${n}`);
  const c = r ? Lt(t) : Pn(t), a = ze(c, e - Ge) + Ge;
  return r ? Xi(a, i) : at(a, i);
}
const ud = Lt;
function Er(t, e) {
  if (Hn(t), Hn(e), t < 0 || t >= 1 << 8 * e)
    throw new Error(`bad I2OSP call: value=${t} length=${e}`);
  const r = Array.from({ length: e }).fill(0);
  for (let n = e - 1; n >= 0; n--)
    r[n] = t & 255, t >>>= 8;
  return new Uint8Array(r);
}
function fd(t, e) {
  const r = new Uint8Array(t.length);
  for (let n = 0; n < t.length; n++)
    r[n] = t[n] ^ e[n];
  return r;
}
function Hn(t) {
  if (!Number.isSafeInteger(t))
    throw new Error("number expected");
}
function ld(t, e, r, n) {
  Nr(t), Nr(e), Hn(r), e.length > 255 && (e = n(Qe(Go("H2C-OVERSIZE-DST-"), e)));
  const { outputLen: i, blockLen: s } = n, c = Math.ceil(r / i);
  if (r > 65535 || c > 255)
    throw new Error("expand_message_xmd: invalid lenInBytes");
  const a = Qe(e, Er(e.length, 1)), p = Er(0, s), g = Er(r, 2), b = new Array(c), T = n(Qe(p, t, g, Er(0, 1), a));
  b[0] = n(Qe(T, Er(1, 1), a));
  for (let S = 1; S <= c; S++) {
    const m = [fd(T, b[S - 1]), Er(S + 1, 1), a];
    b[S] = n(Qe(...m));
  }
  return Qe(...b).slice(0, r);
}
function hd(t, e, r, n, i) {
  if (Nr(t), Nr(e), Hn(r), e.length > 255) {
    const s = Math.ceil(2 * n / 8);
    e = i.create({ dkLen: s }).update(Go("H2C-OVERSIZE-DST-")).update(e).digest();
  }
  if (r > 65535 || e.length > 255)
    throw new Error("expand_message_xof: invalid lenInBytes");
  return i.create({ dkLen: r }).update(t).update(Er(r, 2)).update(e).update(Er(e.length, 1)).digest();
}
function va(t, e, r) {
  Zn(r, {
    DST: "stringOrUint8Array",
    p: "bigint",
    m: "isSafeInteger",
    k: "isSafeInteger",
    hash: "hash"
  });
  const { p: n, k: i, m: s, hash: c, expand: a, DST: p } = r;
  Nr(t), Hn(e);
  const g = typeof p == "string" ? Go(p) : p, b = n.toString(2).length, T = Math.ceil((b + i) / 8), N = e * s * T;
  let S;
  if (a === "xmd")
    S = ld(t, g, N, c);
  else if (a === "xof")
    S = hd(t, g, N, i, c);
  else if (a === "_internal_pass")
    S = t;
  else
    throw new Error('expand must be "xmd" or "xof"');
  const m = new Array(e);
  for (let I = 0; I < e; I++) {
    const U = new Array(s);
    for (let H = 0; H < s; H++) {
      const V = T * (H + I * s), L = S.subarray(V, V + T);
      U[H] = ze(ud(L), n);
    }
    m[I] = U;
  }
  return m;
}
function rf(t, e) {
  const r = e.map((n) => Array.from(n).reverse());
  return (n, i) => {
    const [s, c, a, p] = r.map((g) => g.reduce((b, T) => t.add(t.mul(b, n), T)));
    return n = t.div(s, c), i = t.mul(i, t.div(a, p)), { x: n, y: i };
  };
}
function Na(t, e, r) {
  if (typeof e != "function")
    throw new Error("mapToCurve() must be defined");
  return {
    // Encodes byte string to elliptic curve.
    // hash_to_curve from https://www.rfc-editor.org/rfc/rfc9380#section-3
    hashToCurve(n, i) {
      const s = va(n, 2, { ...r, DST: r.DST, ...i }), c = t.fromAffine(e(s[0])), a = t.fromAffine(e(s[1])), p = c.add(a).clearCofactor();
      return p.assertValidity(), p;
    },
    // Encodes byte string to elliptic curve.
    // encode_to_curve from https://www.rfc-editor.org/rfc/rfc9380#section-3
    encodeToCurve(n, i) {
      const s = va(n, 1, { ...r, DST: r.encodeDST, ...i }), c = t.fromAffine(e(s[0])).clearCofactor();
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
const dd = BigInt(0), ks = BigInt(1), $s = /* @__PURE__ */ new WeakMap(), Ra = /* @__PURE__ */ new WeakMap();
function nf(t, e) {
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
      for (; c > dd; )
        c & ks && (a = a.add(p)), p = p.double(), c >>= ks;
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
      for (let N = 0; N < a; N++) {
        T = b, g.push(T);
        for (let S = 1; S < p; S++)
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
      const N = BigInt(2 ** s - 1), S = 2 ** s, m = BigInt(s);
      for (let I = 0; I < p; I++) {
        const U = I * g;
        let H = Number(a & N);
        a >>= m, H > g && (H -= S, a += ks);
        const V = U, L = U + Math.abs(H) - 1, X = I % 2 !== 0, P = H < 0;
        H === 0 ? T = T.add(r(X, c[V])) : b = b.add(r(P, c[L]));
      }
      return { p: b, f: T };
    },
    wNAFCached(s, c, a) {
      const p = Ra.get(s) || 1;
      let g = $s.get(s);
      return g || (g = this.precomputeWindow(s, p), p !== 1 && $s.set(s, a(g))), this.wNAF(p, g, c);
    },
    // We calculate precomputes for elliptic curve point multiplication
    // using windowed method. This specifies window size and
    // stores precomputed values. Usually only base point would be precomputed.
    setWindowSize(s, c) {
      n(c), Ra.set(s, c), $s.delete(s);
    }
  };
}
function sf(t, e, r, n) {
  if (!Array.isArray(r) || !Array.isArray(n) || n.length !== r.length)
    throw new Error("arrays of points and scalars must have equal length");
  n.forEach((b, T) => {
    if (!e.isValid(b))
      throw new Error(`wrong scalar at index ${T}`);
  }), r.forEach((b, T) => {
    if (!(b instanceof t))
      throw new Error(`wrong point at index ${T}`);
  });
  const i = Cn(BigInt(r.length)), s = i > 12 ? i - 3 : i > 4 ? i - 2 : i ? 2 : 1, c = (1 << s) - 1, a = new Array(c + 1).fill(t.ZERO), p = Math.floor((e.BITS - 1) / s) * s;
  let g = t.ZERO;
  for (let b = p; b >= 0; b -= s) {
    a.fill(t.ZERO);
    for (let N = 0; N < n.length; N++) {
      const S = n[N], m = Number(S >> BigInt(b) & BigInt(c));
      a[m] = a[m].add(r[N]);
    }
    let T = t.ZERO;
    for (let N = a.length - 1, S = t.ZERO; N > 0; N--)
      S = S.add(a[N]), T = T.add(S);
    if (g = g.add(T), b !== 0)
      for (let N = 0; N < s; N++)
        g = g.double();
  }
  return g;
}
function of(t) {
  return Ju(t.Fp), Zn(t, {
    n: "bigint",
    h: "bigint",
    Gx: "field",
    Gy: "field"
  }, {
    nBitLength: "isSafeInteger",
    nByteLength: "isSafeInteger"
  }), Object.freeze({
    ...Qu(t.n, t.nBitLength),
    ...t,
    p: t.Fp.ORDER
  });
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function pd(t) {
  const e = of(t);
  Zn(e, {
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
const Cr = BigInt(0), Ze = BigInt(1), wr = BigInt(2), Ji = BigInt(3), Oa = BigInt(4);
function Ia(t) {
  const e = pd(t), { Fp: r } = e, n = Kn(e.n, e.nBitLength), i = e.toBytes || ((I, U, H) => {
    const V = U.toAffine();
    return Qe(Uint8Array.from([4]), r.toBytes(V.x), r.toBytes(V.y));
  }), s = e.fromBytes || ((I) => {
    const U = I.subarray(1), H = r.fromBytes(U.subarray(0, r.BYTES)), V = r.fromBytes(U.subarray(r.BYTES, 2 * r.BYTES));
    return { x: H, y: V };
  });
  function c(I) {
    const { a: U, b: H } = e, V = r.sqr(I), L = r.mul(V, I);
    return r.add(r.add(L, r.mul(I, U)), H);
  }
  if (!r.eql(r.sqr(e.Gy), c(e.Gx)))
    throw new Error("bad generator point: equation left != right");
  function a(I) {
    return Xu(I, Ze, e.n);
  }
  function p(I) {
    const { allowedPrivateKeyLengths: U, nByteLength: H, wrapPrivateKey: V, n: L } = e;
    if (U && typeof I != "bigint") {
      if (ps(I) && (I = Wr(I)), typeof I != "string" || !U.includes(I.length))
        throw new Error("Invalid key");
      I = I.padStart(H * 2, "0");
    }
    let X;
    try {
      X = typeof I == "bigint" ? I : Lt(bt("private key", I, H));
    } catch {
      throw new Error(`private key must be ${H} bytes, hex or bigint, not ${typeof I}`);
    }
    return V && (X = ze(X, L)), Sr("private key", X, Ze, L), X;
  }
  function g(I) {
    if (!(I instanceof N))
      throw new Error("ProjectivePoint expected");
  }
  const b = qn((I, U) => {
    const { px: H, py: V, pz: L } = I;
    if (r.eql(L, r.ONE))
      return { x: H, y: V };
    const X = I.is0();
    U == null && (U = X ? r.ONE : r.inv(L));
    const P = r.mul(H, U), J = r.mul(V, U), K = r.mul(L, U);
    if (X)
      return { x: r.ZERO, y: r.ZERO };
    if (!r.eql(K, r.ONE))
      throw new Error("invZ was invalid");
    return { x: P, y: J };
  }), T = qn((I) => {
    if (I.is0()) {
      if (e.allowInfinityPoint && !r.is0(I.py))
        return;
      throw new Error("bad point: ZERO");
    }
    const { x: U, y: H } = I.toAffine();
    if (!r.isValid(U) || !r.isValid(H))
      throw new Error("bad point: x or y not FE");
    const V = r.sqr(H), L = c(U);
    if (!r.eql(V, L))
      throw new Error("bad point: equation left != right");
    if (!I.isTorsionFree())
      throw new Error("bad point: not in prime-order subgroup");
    return !0;
  });
  class N {
    constructor(U, H, V) {
      if (this.px = U, this.py = H, this.pz = V, U == null || !r.isValid(U))
        throw new Error("x required");
      if (H == null || !r.isValid(H))
        throw new Error("y required");
      if (V == null || !r.isValid(V))
        throw new Error("z required");
      Object.freeze(this);
    }
    // Does not validate if the point is on-curve.
    // Use fromHex instead, or call assertValidity() later.
    static fromAffine(U) {
      const { x: H, y: V } = U || {};
      if (!U || !r.isValid(H) || !r.isValid(V))
        throw new Error("invalid affine point");
      if (U instanceof N)
        throw new Error("projective point not allowed");
      const L = (X) => r.eql(X, r.ZERO);
      return L(H) && L(V) ? N.ZERO : new N(H, V, r.ONE);
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
      const H = r.invertBatch(U.map((V) => V.pz));
      return U.map((V, L) => V.toAffine(H[L])).map(N.fromAffine);
    }
    /**
     * Converts hash string or Uint8Array to Point.
     * @param hex short/long ECDSA hex
     */
    static fromHex(U) {
      const H = N.fromAffine(s(bt("pointHex", U)));
      return H.assertValidity(), H;
    }
    // Multiplies generator point by privateKey.
    static fromPrivateKey(U) {
      return N.BASE.multiply(p(U));
    }
    // Multiscalar Multiplication
    static msm(U, H) {
      return sf(N, n, U, H);
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
      const { px: H, py: V, pz: L } = this, { px: X, py: P, pz: J } = U, K = r.eql(r.mul(H, J), r.mul(X, L)), re = r.eql(r.mul(V, J), r.mul(P, L));
      return K && re;
    }
    /**
     * Flips point to one corresponding to (x, -y) in Affine coordinates.
     */
    negate() {
      return new N(this.px, r.neg(this.py), this.pz);
    }
    // Renes-Costello-Batina exception-free doubling formula.
    // There is 30% faster Jacobian formula, but it is not complete.
    // https://eprint.iacr.org/2015/1060, algorithm 3
    // Cost: 8M + 3S + 3*a + 2*b3 + 15add.
    double() {
      const { a: U, b: H } = e, V = r.mul(H, Ji), { px: L, py: X, pz: P } = this;
      let J = r.ZERO, K = r.ZERO, re = r.ZERO, ae = r.mul(L, L), te = r.mul(X, X), pe = r.mul(P, P), de = r.mul(L, X);
      return de = r.add(de, de), re = r.mul(L, P), re = r.add(re, re), J = r.mul(U, re), K = r.mul(V, pe), K = r.add(J, K), J = r.sub(te, K), K = r.add(te, K), K = r.mul(J, K), J = r.mul(de, J), re = r.mul(V, re), pe = r.mul(U, pe), de = r.sub(ae, pe), de = r.mul(U, de), de = r.add(de, re), re = r.add(ae, ae), ae = r.add(re, ae), ae = r.add(ae, pe), ae = r.mul(ae, de), K = r.add(K, ae), pe = r.mul(X, P), pe = r.add(pe, pe), ae = r.mul(pe, de), J = r.sub(J, ae), re = r.mul(pe, te), re = r.add(re, re), re = r.add(re, re), new N(J, K, re);
    }
    // Renes-Costello-Batina exception-free addition formula.
    // There is 30% faster Jacobian formula, but it is not complete.
    // https://eprint.iacr.org/2015/1060, algorithm 1
    // Cost: 12M + 0S + 3*a + 3*b3 + 23add.
    add(U) {
      g(U);
      const { px: H, py: V, pz: L } = this, { px: X, py: P, pz: J } = U;
      let K = r.ZERO, re = r.ZERO, ae = r.ZERO;
      const te = e.a, pe = r.mul(e.b, Ji);
      let de = r.mul(H, X), R = r.mul(V, P), C = r.mul(L, J), Y = r.add(H, V), z = r.add(X, P);
      Y = r.mul(Y, z), z = r.add(de, R), Y = r.sub(Y, z), z = r.add(H, L);
      let j = r.add(X, J);
      return z = r.mul(z, j), j = r.add(de, C), z = r.sub(z, j), j = r.add(V, L), K = r.add(P, J), j = r.mul(j, K), K = r.add(R, C), j = r.sub(j, K), ae = r.mul(te, z), K = r.mul(pe, C), ae = r.add(K, ae), K = r.sub(R, ae), ae = r.add(R, ae), re = r.mul(K, ae), R = r.add(de, de), R = r.add(R, de), C = r.mul(te, C), z = r.mul(pe, z), R = r.add(R, C), C = r.sub(de, C), C = r.mul(te, C), z = r.add(z, C), de = r.mul(R, z), re = r.add(re, de), de = r.mul(j, z), K = r.mul(Y, K), K = r.sub(K, de), de = r.mul(Y, R), ae = r.mul(j, ae), ae = r.add(ae, de), new N(K, re, ae);
    }
    subtract(U) {
      return this.add(U.negate());
    }
    is0() {
      return this.equals(N.ZERO);
    }
    wNAF(U) {
      return m.wNAFCached(this, U, N.normalizeZ);
    }
    /**
     * Non-constant-time multiplication. Uses double-and-add algorithm.
     * It's faster, but should only be used when you don't care about
     * an exposed private key e.g. sig verification, which works over *public* keys.
     */
    multiplyUnsafe(U) {
      Sr("scalar", U, Cr, e.n);
      const H = N.ZERO;
      if (U === Cr)
        return H;
      if (U === Ze)
        return this;
      const { endo: V } = e;
      if (!V)
        return m.unsafeLadder(this, U);
      let { k1neg: L, k1: X, k2neg: P, k2: J } = V.splitScalar(U), K = H, re = H, ae = this;
      for (; X > Cr || J > Cr; )
        X & Ze && (K = K.add(ae)), J & Ze && (re = re.add(ae)), ae = ae.double(), X >>= Ze, J >>= Ze;
      return L && (K = K.negate()), P && (re = re.negate()), re = new N(r.mul(re.px, V.beta), re.py, re.pz), K.add(re);
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
      const { endo: H, n: V } = e;
      Sr("scalar", U, Ze, V);
      let L, X;
      if (H) {
        const { k1neg: P, k1: J, k2neg: K, k2: re } = H.splitScalar(U);
        let { p: ae, f: te } = this.wNAF(J), { p: pe, f: de } = this.wNAF(re);
        ae = m.constTimeNegate(P, ae), pe = m.constTimeNegate(K, pe), pe = new N(r.mul(pe.px, H.beta), pe.py, pe.pz), L = ae.add(pe), X = te.add(de);
      } else {
        const { p: P, f: J } = this.wNAF(U);
        L = P, X = J;
      }
      return N.normalizeZ([L, X])[0];
    }
    /**
     * Efficiently calculate `aP + bQ`. Unsafe, can expose private key, if used incorrectly.
     * Not using Strauss-Shamir trick: precomputation tables are faster.
     * The trick could be useful if both P and Q are not G (not in our case).
     * @returns non-zero affine point
     */
    multiplyAndAddUnsafe(U, H, V) {
      const L = N.BASE, X = (J, K) => K === Cr || K === Ze || !J.equals(L) ? J.multiplyUnsafe(K) : J.multiply(K), P = X(this, H).add(X(U, V));
      return P.is0() ? void 0 : P;
    }
    // Converts Projective point to affine (x, y) coordinates.
    // Can accept precomputed Z^-1 - for example, from invertBatch.
    // (x, y, z) ∋ (x=x/z, y=y/z)
    toAffine(U) {
      return b(this, U);
    }
    isTorsionFree() {
      const { h: U, isTorsionFree: H } = e;
      if (U === Ze)
        return !0;
      if (H)
        return H(N, this);
      throw new Error("isTorsionFree() has not been declared for the elliptic curve");
    }
    clearCofactor() {
      const { h: U, clearCofactor: H } = e;
      return U === Ze ? this : H ? H(N, this) : this.multiplyUnsafe(e.h);
    }
    toRawBytes(U = !0) {
      return Fn("isCompressed", U), this.assertValidity(), i(N, this, U);
    }
    toHex(U = !0) {
      return Fn("isCompressed", U), Wr(this.toRawBytes(U));
    }
  }
  N.BASE = new N(e.Gx, e.Gy, r.ONE), N.ZERO = new N(r.ZERO, r.ONE, r.ZERO);
  const S = e.nBitLength, m = nf(N, e.endo ? Math.ceil(S / 2) : S);
  return {
    CURVE: e,
    ProjectivePoint: N,
    normPrivateKeyToScalar: p,
    weierstrassEquation: c,
    isWithinCurveOrder: a
  };
}
function md(t, e) {
  const r = t.ORDER;
  let n = Cr;
  for (let m = r - Ze; m % wr === Cr; m /= wr)
    n += Ze;
  const i = n, s = wr << i - Ze - Ze, c = s * wr, a = (r - Ze) / c, p = (a - Ze) / wr, g = c - Ze, b = s, T = t.pow(e, a), N = t.pow(e, (a + Ze) / wr);
  let S = (m, I) => {
    let U = T, H = t.pow(I, g), V = t.sqr(H);
    V = t.mul(V, I);
    let L = t.mul(m, V);
    L = t.pow(L, p), L = t.mul(L, H), H = t.mul(L, I), V = t.mul(L, m);
    let X = t.mul(V, H);
    L = t.pow(X, b);
    let P = t.eql(L, t.ONE);
    H = t.mul(V, N), L = t.mul(X, U), V = t.cmov(H, V, P), X = t.cmov(L, X, P);
    for (let J = i; J > Ze; J--) {
      let K = J - wr;
      K = wr << K - Ze;
      let re = t.pow(X, K);
      const ae = t.eql(re, t.ONE);
      H = t.mul(V, U), U = t.mul(U, U), re = t.mul(X, U), V = t.cmov(H, V, ae), X = t.cmov(re, X, ae);
    }
    return { isValid: P, value: V };
  };
  if (t.ORDER % Oa === Ji) {
    const m = (t.ORDER - Ji) / Oa, I = t.sqrt(t.neg(e));
    S = (U, H) => {
      let V = t.sqr(H);
      const L = t.mul(U, H);
      V = t.mul(V, L);
      let X = t.pow(V, m);
      X = t.mul(X, L);
      const P = t.mul(X, I), J = t.mul(t.sqr(X), H), K = t.eql(J, U);
      let re = t.cmov(P, X, K);
      return { isValid: K, value: re };
    };
  }
  return S;
}
function af(t, e) {
  if (Ju(t), !t.isValid(e.A) || !t.isValid(e.B) || !t.isValid(e.Z))
    throw new Error("mapToCurveSimpleSWU: invalid opts");
  const r = md(t, e.Z);
  if (!t.isOdd)
    throw new Error("Fp.isOdd is not implemented!");
  return (n) => {
    let i, s, c, a, p, g, b, T;
    i = t.sqr(n), i = t.mul(i, e.Z), s = t.sqr(i), s = t.add(s, i), c = t.add(s, t.ONE), c = t.mul(c, e.B), a = t.cmov(e.Z, t.neg(s), !t.eql(s, t.ZERO)), a = t.mul(a, e.A), s = t.sqr(c), g = t.sqr(a), p = t.mul(g, e.A), s = t.add(s, p), s = t.mul(s, c), g = t.mul(g, a), p = t.mul(g, e.B), s = t.add(s, p), b = t.mul(i, c);
    const { isValid: N, value: S } = r(s, g);
    T = t.mul(i, n), T = t.mul(T, S), b = t.cmov(b, c, N), T = t.cmov(T, S, N);
    const m = t.isOdd(n) === t.isOdd(T);
    return T = t.cmov(t.neg(T), T, m), b = t.div(b, a), { x: b, y: T };
  };
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const gd = BigInt(0), fi = BigInt(1), Ua = BigInt(2), an = BigInt(3);
function yd(t) {
  const e = [];
  for (; t > fi; t >>= fi)
    (t & fi) === gd ? e.unshift(0) : (t & an) === an ? (e.unshift(-1), t += fi) : e.unshift(1);
  return e;
}
function wd(t) {
  const { Fp: e, Fr: r, Fp2: n, Fp6: i, Fp12: s } = t.fields, c = t.params.xNegative, a = t.params.twistType, p = Ia({ n: r.ORDER, ...t.G1 }), g = Object.assign(p, Na(p.ProjectivePoint, t.G1.mapToCurve, {
    ...t.htfDefaults,
    ...t.G1.htfDefaults
  })), b = Ia({ n: r.ORDER, ...t.G2 }), T = Object.assign(b, Na(b.ProjectivePoint, t.G2.mapToCurve, {
    ...t.htfDefaults,
    ...t.G2.htfDefaults
  }));
  let N;
  if (a === "multiplicative")
    N = (Z, ue, w, ie, he, Te) => s.mul014(ie, Z, n.mul(ue, he), n.mul(w, Te));
  else if (a === "divisive")
    N = (Z, ue, w, ie, he, Te) => s.mul034(ie, n.mul(w, Te), n.mul(ue, he), Z);
  else
    throw new Error("bls: unknown twist type");
  const S = n.div(n.ONE, n.mul(n.ONE, Ua));
  function m(Z, ue, w, ie) {
    const he = n.sqr(w), Te = n.sqr(ie), ce = n.mulByB(n.mul(Te, an)), fe = n.mul(ce, an), _ = n.sub(n.sub(n.sqr(n.add(w, ie)), Te), he), E = n.sub(ce, he), B = n.mul(n.sqr(ue), an), k = n.neg(_);
    return Z.push([E, B, k]), ue = n.mul(n.mul(n.mul(n.sub(he, fe), ue), w), S), w = n.sub(n.sqr(n.mul(n.add(he, fe), S)), n.mul(n.sqr(ce), an)), ie = n.mul(he, _), { Rx: ue, Ry: w, Rz: ie };
  }
  function I(Z, ue, w, ie, he, Te) {
    const ce = n.sub(w, n.mul(Te, ie)), fe = n.sub(ue, n.mul(he, ie)), _ = n.sub(n.mul(ce, he), n.mul(fe, Te)), E = n.neg(ce), B = fe;
    Z.push([_, E, B]);
    const k = n.sqr(fe), F = n.mul(k, fe), q = n.mul(k, ue), h = n.add(n.sub(F, n.mul(q, Ua)), n.mul(n.sqr(ce), ie));
    return ue = n.mul(fe, h), w = n.sub(n.mul(n.sub(q, h), ce), n.mul(F, w)), ie = n.mul(ie, F), { Rx: ue, Ry: w, Rz: ie };
  }
  const U = yd(t.params.ateLoopSize), H = qn((Z) => {
    const ue = Z, { x: w, y: ie } = ue.toAffine(), he = w, Te = ie, ce = n.neg(ie);
    let fe = he, _ = Te, E = n.ONE;
    const B = [];
    for (const k of U) {
      const F = [];
      ({ Rx: fe, Ry: _, Rz: E } = m(F, fe, _, E)), k && ({ Rx: fe, Ry: _, Rz: E } = I(F, fe, _, E, he, k === -1 ? ce : Te)), B.push(F);
    }
    if (t.postPrecompute) {
      const k = B[B.length - 1];
      t.postPrecompute(fe, _, E, he, Te, I.bind(null, k));
    }
    return B;
  });
  function V(Z, ue = !1) {
    let w = s.ONE;
    if (Z.length) {
      const ie = Z[0][0].length;
      for (let he = 0; he < ie; he++) {
        w = s.sqr(w);
        for (const [Te, ce, fe] of Z)
          for (const [_, E, B] of Te[he])
            w = N(_, E, B, w, ce, fe);
      }
    }
    return c && (w = s.conjugate(w)), ue ? s.finalExponentiate(w) : w;
  }
  function L(Z, ue = !0) {
    const w = [];
    g.ProjectivePoint.normalizeZ(Z.map(({ g1: ie }) => ie)), T.ProjectivePoint.normalizeZ(Z.map(({ g2: ie }) => ie));
    for (const { g1: ie, g2: he } of Z) {
      if (ie.equals(g.ProjectivePoint.ZERO) || he.equals(T.ProjectivePoint.ZERO))
        throw new Error("pairing is not available for ZERO point");
      ie.assertValidity(), he.assertValidity();
      const Te = ie.toAffine();
      w.push([H(he), Te.x, Te.y]);
    }
    return V(w, ue);
  }
  function X(Z, ue, w = !0) {
    return L([{ g1: Z, g2: ue }], w);
  }
  const P = {
    randomPrivateKey: () => {
      const Z = tf(r.ORDER);
      return cd(t.randomBytes(Z), r.ORDER);
    },
    calcPairingPrecomputes: H
  }, { ShortSignature: J } = t.G1, { Signature: K } = t.G2;
  function re(Z) {
    return Z instanceof g.ProjectivePoint ? Z : g.ProjectivePoint.fromHex(Z);
  }
  function ae(Z, ue) {
    return Z instanceof g.ProjectivePoint ? Z : g.hashToCurve(bt("point", Z), ue);
  }
  function te(Z) {
    return Z instanceof T.ProjectivePoint ? Z : K.fromHex(Z);
  }
  function pe(Z, ue) {
    return Z instanceof T.ProjectivePoint ? Z : T.hashToCurve(bt("point", Z), ue);
  }
  function de(Z) {
    return g.ProjectivePoint.fromPrivateKey(Z).toRawBytes(!0);
  }
  function R(Z) {
    return T.ProjectivePoint.fromPrivateKey(Z).toRawBytes(!0);
  }
  function C(Z, ue, w) {
    const ie = pe(Z, w);
    ie.assertValidity();
    const he = ie.multiply(g.normPrivateKeyToScalar(ue));
    return Z instanceof T.ProjectivePoint ? he : K.toRawBytes(he);
  }
  function Y(Z, ue, w) {
    const ie = ae(Z, w);
    ie.assertValidity();
    const he = ie.multiply(g.normPrivateKeyToScalar(ue));
    return Z instanceof g.ProjectivePoint ? he : J.toRawBytes(he);
  }
  function z(Z, ue, w, ie) {
    const he = re(w), Te = pe(ue, ie), ce = g.ProjectivePoint.BASE, fe = te(Z), _ = L([
      { g1: he.negate(), g2: Te },
      // ePHM = pairing(P.negate(), Hm, false);
      { g1: ce, g2: fe }
      // eGS = pairing(G, S, false);
    ]);
    return s.eql(_, s.ONE);
  }
  function j(Z, ue, w, ie) {
    const he = te(w), Te = ae(ue, ie), ce = T.ProjectivePoint.BASE, fe = re(Z), _ = L([
      { g1: Te, g2: he },
      // eHmP = pairing(Hm, P, false);
      { g1: fe, g2: ce.negate() }
      // eSG = pairing(S, G.negate(), false);
    ]);
    return s.eql(_, s.ONE);
  }
  function ee(Z) {
    if (!Z.length)
      throw new Error("Expected non-empty array");
    const w = Z.map(re).reduce((ie, he) => ie.add(he), g.ProjectivePoint.ZERO);
    return Z[0] instanceof g.ProjectivePoint ? (w.assertValidity(), w) : w.toRawBytes(!0);
  }
  function le(Z) {
    if (!Z.length)
      throw new Error("Expected non-empty array");
    const w = Z.map(te).reduce((ie, he) => ie.add(he), T.ProjectivePoint.ZERO);
    return Z[0] instanceof T.ProjectivePoint ? (w.assertValidity(), w) : K.toRawBytes(w);
  }
  function we(Z) {
    if (!Z.length)
      throw new Error("Expected non-empty array");
    const w = Z.map(re).reduce((ie, he) => ie.add(he), g.ProjectivePoint.ZERO);
    return Z[0] instanceof g.ProjectivePoint ? (w.assertValidity(), w) : J.toRawBytes(w);
  }
  function se(Z, ue, w, ie) {
    if (!ue.length)
      throw new Error("Expected non-empty messages array");
    if (w.length !== ue.length)
      throw new Error("Pubkey count should equal msg count");
    const he = te(Z), Te = ue.map((E) => pe(E, ie)), ce = w.map(re), fe = /* @__PURE__ */ new Map();
    for (let E = 0; E < ce.length; E++) {
      const B = ce[E], k = Te[E];
      let F = fe.get(k);
      F === void 0 && (F = [], fe.set(k, F)), F.push(B);
    }
    const _ = [];
    try {
      for (const [E, B] of fe) {
        const k = B.reduce((F, q) => F.add(q));
        _.push({ g1: k, g2: E });
      }
      return _.push({ g1: g.ProjectivePoint.BASE.negate(), g2: he }), s.eql(L(_), s.ONE);
    } catch {
      return !1;
    }
  }
  return g.ProjectivePoint.BASE._setWindowSize(4), {
    getPublicKey: de,
    getPublicKeyForShortSignatures: R,
    sign: C,
    signShortSignature: Y,
    verify: z,
    verifyBatch: se,
    verifyShortSignature: j,
    aggregatePublicKeys: ee,
    aggregateSignatures: le,
    aggregateShortSignatures: we,
    millerLoopBatch: V,
    pairing: X,
    pairingBatch: L,
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
    utils: P
  };
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const bd = BigInt(0), cn = BigInt(1), cr = BigInt(2), Fa = BigInt(3);
function qs(t, e, r, n, i = 1, s) {
  const c = BigInt(s === void 0 ? n : s), a = r ** BigInt(n), p = [];
  for (let g = 0; g < i; g++) {
    const b = BigInt(g + 1), T = [];
    for (let N = 0, S = cn; N < n; N++) {
      const m = (b * S - b) / c % a;
      T.push(t.pow(e, m)), S *= r;
    }
    p.push(T);
  }
  return p;
}
function _d(t, e, r) {
  const n = e.pow(r, (t.ORDER - cn) / Fa), i = e.pow(r, (t.ORDER - cn) / cr);
  function s(N, S) {
    const m = e.mul(e.frobeniusMap(N, 1), n), I = e.mul(e.frobeniusMap(S, 1), i);
    return [m, I];
  }
  const c = e.pow(r, (t.ORDER ** cr - cn) / Fa), a = e.pow(r, (t.ORDER ** cr - cn) / cr);
  if (!e.eql(a, e.neg(e.ONE)))
    throw new Error("psiFrobenius: PSI2_Y!==-1");
  function p(N, S) {
    return [e.mul(N, c), e.neg(S)];
  }
  const g = (N) => (S, m) => {
    const I = m.toAffine(), U = N(I.x, I.y);
    return S.fromAffine({ x: U[0], y: U[1] });
  }, b = g(s), T = g(p);
  return { psi: s, psi2: p, G2psi: b, G2psi2: T, PSI_X: n, PSI_Y: i, PSI2_X: c, PSI2_Y: a };
}
function xd(t) {
  const { ORDER: e } = t, r = Kn(e), n = r.create(t.NONRESIDUE || BigInt(-1)), i = ad(e), s = r.div(r.ONE, cr), c = qs(r, n, r.ORDER, 2)[0], a = ({ c0: R, c1: C }, { c0: Y, c1: z }) => ({
    c0: r.add(R, Y),
    c1: r.add(C, z)
  }), p = ({ c0: R, c1: C }, { c0: Y, c1: z }) => ({
    c0: r.sub(R, Y),
    c1: r.sub(C, z)
  }), g = ({ c0: R, c1: C }, Y) => {
    if (typeof Y == "bigint")
      return { c0: r.mul(R, Y), c1: r.mul(C, Y) };
    const { c0: z, c1: j } = Y;
    let ee = r.mul(R, z), le = r.mul(C, j);
    const we = r.sub(ee, le), se = r.sub(r.mul(r.add(R, C), r.add(z, j)), r.add(ee, le));
    return { c0: we, c1: se };
  }, b = ({ c0: R, c1: C }) => {
    const Y = r.add(R, C), z = r.sub(R, C), j = r.add(R, R);
    return { c0: r.mul(Y, z), c1: r.mul(j, C) };
  }, T = (R) => {
    if (R.length !== 2)
      throw new Error("Invalid tuple");
    const C = R.map((Y) => r.create(Y));
    return { c0: C[0], c1: C[1] };
  }, N = e * e, S = T(t.FP2_NONRESIDUE), m = {
    ORDER: N,
    NONRESIDUE: S,
    BITS: Cn(N),
    BYTES: Math.ceil(Cn(N) / 8),
    MASK: Si(Cn(N)),
    ZERO: { c0: r.ZERO, c1: r.ZERO },
    ONE: { c0: r.ONE, c1: r.ZERO },
    create: (R) => R,
    isValid: ({ c0: R, c1: C }) => typeof R == "bigint" && typeof C == "bigint",
    is0: ({ c0: R, c1: C }) => r.is0(R) && r.is0(C),
    eql: ({ c0: R, c1: C }, { c0: Y, c1: z }) => r.eql(R, Y) && r.eql(C, z),
    neg: ({ c0: R, c1: C }) => ({ c0: r.neg(R), c1: r.neg(C) }),
    pow: (R, C) => Bi(m, R, C),
    invertBatch: (R) => vi(m, R),
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
    div: (R, C) => m.mul(R, typeof C == "bigint" ? r.inv(r.create(C)) : m.inv(C)),
    inv: ({ c0: R, c1: C }) => {
      const Y = r.inv(r.create(R * R + C * C));
      return { c0: r.mul(Y, r.create(R)), c1: r.mul(Y, r.create(-C)) };
    },
    sqrt: (R) => {
      if (t.Fp2sqrt)
        return t.Fp2sqrt(R);
      const { c0: C, c1: Y } = R;
      if (r.is0(Y))
        return r.eql(i(r, C), r.ONE) ? m.create({ c0: r.sqrt(C), c1: r.ZERO }) : m.create({ c0: r.ZERO, c1: r.sqrt(r.div(C, n)) });
      const z = r.sqrt(r.sub(r.sqr(C), r.mul(r.sqr(Y), n)));
      let j = r.mul(r.add(z, C), s);
      const ee = i(r, j);
      !r.is0(ee) && !r.eql(ee, r.ONE) && (j = r.sub(j, z));
      const le = r.sqrt(j), we = m.create({ c0: le, c1: r.div(r.mul(Y, s), le) });
      if (!m.eql(m.sqr(we), R))
        throw new Error("Cannot find square root");
      const se = we, Z = m.neg(se), { re: ue, im: w } = m.reim(se), { re: ie, im: he } = m.reim(Z);
      return w > he || w === he && ue > ie ? se : Z;
    },
    // Same as sgn0_m_eq_2 in RFC 9380
    isOdd: (R) => {
      const { re: C, im: Y } = m.reim(R), z = C % cr, j = C === bd, ee = Y % cr;
      return BigInt(z || j && ee) == cn;
    },
    // Bytes util
    fromBytes(R) {
      if (R.length !== m.BYTES)
        throw new Error(`fromBytes wrong length=${R.length}`);
      return { c0: r.fromBytes(R.subarray(0, r.BYTES)), c1: r.fromBytes(R.subarray(r.BYTES)) };
    },
    toBytes: ({ c0: R, c1: C }) => Qe(r.toBytes(R), r.toBytes(C)),
    cmov: ({ c0: R, c1: C }, { c0: Y, c1: z }, j) => ({
      c0: r.cmov(R, Y, j),
      c1: r.cmov(C, z, j)
    }),
    reim: ({ c0: R, c1: C }) => ({ re: R, im: C }),
    // multiply by u + 1
    mulByNonresidue: ({ c0: R, c1: C }) => m.mul({ c0: R, c1: C }, S),
    mulByB: t.Fp2mulByB,
    fromBigTuple: T,
    frobeniusMap: ({ c0: R, c1: C }, Y) => ({
      c0: R,
      c1: r.mul(C, c[Y % 2])
    })
  }, I = ({ c0: R, c1: C, c2: Y }, { c0: z, c1: j, c2: ee }) => ({
    c0: m.add(R, z),
    c1: m.add(C, j),
    c2: m.add(Y, ee)
  }), U = ({ c0: R, c1: C, c2: Y }, { c0: z, c1: j, c2: ee }) => ({
    c0: m.sub(R, z),
    c1: m.sub(C, j),
    c2: m.sub(Y, ee)
  }), H = ({ c0: R, c1: C, c2: Y }, z) => {
    if (typeof z == "bigint")
      return {
        c0: m.mul(R, z),
        c1: m.mul(C, z),
        c2: m.mul(Y, z)
      };
    const { c0: j, c1: ee, c2: le } = z, we = m.mul(R, j), se = m.mul(C, ee), Z = m.mul(Y, le);
    return {
      // t0 + (c1 + c2) * (r1 * r2) - (T1 + T2) * (u + 1)
      c0: m.add(we, m.mulByNonresidue(m.sub(m.mul(m.add(C, Y), m.add(ee, le)), m.add(se, Z)))),
      // (c0 + c1) * (r0 + r1) - (T0 + T1) + T2 * (u + 1)
      c1: m.add(m.sub(m.mul(m.add(R, C), m.add(j, ee)), m.add(we, se)), m.mulByNonresidue(Z)),
      // T1 + (c0 + c2) * (r0 + r2) - T0 + T2
      c2: m.sub(m.add(se, m.mul(m.add(R, Y), m.add(j, le))), m.add(we, Z))
    };
  }, V = ({ c0: R, c1: C, c2: Y }) => {
    let z = m.sqr(R), j = m.mul(m.mul(R, C), cr), ee = m.mul(m.mul(C, Y), cr), le = m.sqr(Y);
    return {
      c0: m.add(m.mulByNonresidue(ee), z),
      // T3 * (u + 1) + T0
      c1: m.add(m.mulByNonresidue(le), j),
      // T4 * (u + 1) + T1
      // T1 + (c0 - c1 + c2)² + T3 - T0 - T4
      c2: m.sub(m.sub(m.add(m.add(j, m.sqr(m.add(m.sub(R, C), Y))), ee), z), le)
    };
  }, [L, X] = qs(m, S, r.ORDER, 6, 2, 3), P = {
    ORDER: m.ORDER,
    // TODO: unused, but need to verify
    BITS: 3 * m.BITS,
    BYTES: 3 * m.BYTES,
    MASK: Si(3 * m.BITS),
    ZERO: { c0: m.ZERO, c1: m.ZERO, c2: m.ZERO },
    ONE: { c0: m.ONE, c1: m.ZERO, c2: m.ZERO },
    create: (R) => R,
    isValid: ({ c0: R, c1: C, c2: Y }) => m.isValid(R) && m.isValid(C) && m.isValid(Y),
    is0: ({ c0: R, c1: C, c2: Y }) => m.is0(R) && m.is0(C) && m.is0(Y),
    neg: ({ c0: R, c1: C, c2: Y }) => ({ c0: m.neg(R), c1: m.neg(C), c2: m.neg(Y) }),
    eql: ({ c0: R, c1: C, c2: Y }, { c0: z, c1: j, c2: ee }) => m.eql(R, z) && m.eql(C, j) && m.eql(Y, ee),
    sqrt: Ta,
    // Do we need division by bigint at all? Should be done via order:
    div: (R, C) => P.mul(R, typeof C == "bigint" ? r.inv(r.create(C)) : P.inv(C)),
    pow: (R, C) => Bi(P, R, C),
    invertBatch: (R) => vi(P, R),
    // Normalized
    add: I,
    sub: U,
    mul: H,
    sqr: V,
    // NonNormalized stuff
    addN: I,
    subN: U,
    mulN: H,
    sqrN: V,
    inv: ({ c0: R, c1: C, c2: Y }) => {
      let z = m.sub(m.sqr(R), m.mulByNonresidue(m.mul(Y, C))), j = m.sub(m.mulByNonresidue(m.sqr(Y)), m.mul(R, C)), ee = m.sub(m.sqr(C), m.mul(R, Y)), le = m.inv(m.add(m.mulByNonresidue(m.add(m.mul(Y, j), m.mul(C, ee))), m.mul(R, z)));
      return { c0: m.mul(le, z), c1: m.mul(le, j), c2: m.mul(le, ee) };
    },
    // Bytes utils
    fromBytes: (R) => {
      if (R.length !== P.BYTES)
        throw new Error(`fromBytes wrong length=${R.length}`);
      return {
        c0: m.fromBytes(R.subarray(0, m.BYTES)),
        c1: m.fromBytes(R.subarray(m.BYTES, 2 * m.BYTES)),
        c2: m.fromBytes(R.subarray(2 * m.BYTES))
      };
    },
    toBytes: ({ c0: R, c1: C, c2: Y }) => Qe(m.toBytes(R), m.toBytes(C), m.toBytes(Y)),
    cmov: ({ c0: R, c1: C, c2: Y }, { c0: z, c1: j, c2: ee }, le) => ({
      c0: m.cmov(R, z, le),
      c1: m.cmov(C, j, le),
      c2: m.cmov(Y, ee, le)
    }),
    fromBigSix: (R) => {
      if (!Array.isArray(R) || R.length !== 6)
        throw new Error("Invalid Fp6 usage");
      return {
        c0: m.fromBigTuple(R.slice(0, 2)),
        c1: m.fromBigTuple(R.slice(2, 4)),
        c2: m.fromBigTuple(R.slice(4, 6))
      };
    },
    frobeniusMap: ({ c0: R, c1: C, c2: Y }, z) => ({
      c0: m.frobeniusMap(R, z),
      c1: m.mul(m.frobeniusMap(C, z), L[z % 6]),
      c2: m.mul(m.frobeniusMap(Y, z), X[z % 6])
    }),
    mulByFp2: ({ c0: R, c1: C, c2: Y }, z) => ({
      c0: m.mul(R, z),
      c1: m.mul(C, z),
      c2: m.mul(Y, z)
    }),
    mulByNonresidue: ({ c0: R, c1: C, c2: Y }) => ({ c0: m.mulByNonresidue(Y), c1: R, c2: C }),
    // Sparse multiplication
    mul1: ({ c0: R, c1: C, c2: Y }, z) => ({
      c0: m.mulByNonresidue(m.mul(Y, z)),
      c1: m.mul(R, z),
      c2: m.mul(C, z)
    }),
    // Sparse multiplication
    mul01({ c0: R, c1: C, c2: Y }, z, j) {
      let ee = m.mul(R, z), le = m.mul(C, j);
      return {
        // ((c1 + c2) * b1 - T1) * (u + 1) + T0
        c0: m.add(m.mulByNonresidue(m.sub(m.mul(m.add(C, Y), j), le)), ee),
        // (b0 + b1) * (c0 + c1) - T0 - T1
        c1: m.sub(m.sub(m.mul(m.add(z, j), m.add(R, C)), ee), le),
        // (c0 + c2) * b0 - T0 + T1
        c2: m.add(m.sub(m.mul(m.add(R, Y), z), ee), le)
      };
    }
  }, J = qs(m, S, r.ORDER, 12, 1, 6)[0], K = ({ c0: R, c1: C }, { c0: Y, c1: z }) => ({
    c0: P.add(R, Y),
    c1: P.add(C, z)
  }), re = ({ c0: R, c1: C }, { c0: Y, c1: z }) => ({
    c0: P.sub(R, Y),
    c1: P.sub(C, z)
  }), ae = ({ c0: R, c1: C }, Y) => {
    if (typeof Y == "bigint")
      return { c0: P.mul(R, Y), c1: P.mul(C, Y) };
    let { c0: z, c1: j } = Y, ee = P.mul(R, z), le = P.mul(C, j);
    return {
      c0: P.add(ee, P.mulByNonresidue(le)),
      // T1 + T2 * v
      // (c0 + c1) * (r0 + r1) - (T1 + T2)
      c1: P.sub(P.mul(P.add(R, C), P.add(z, j)), P.add(ee, le))
    };
  }, te = ({ c0: R, c1: C }) => {
    let Y = P.mul(R, C);
    return {
      // (c1 * v + c0) * (c0 + c1) - AB - AB * v
      c0: P.sub(P.sub(P.mul(P.add(P.mulByNonresidue(C), R), P.add(R, C)), Y), P.mulByNonresidue(Y)),
      c1: P.add(Y, Y)
    };
  };
  function pe(R, C) {
    const Y = m.sqr(R), z = m.sqr(C);
    return {
      first: m.add(m.mulByNonresidue(z), Y),
      // b² * Nonresidue + a²
      second: m.sub(m.sub(m.sqr(m.add(R, C)), Y), z)
      // (a + b)² - a² - b²
    };
  }
  const de = {
    ORDER: m.ORDER,
    // TODO: unused, but need to verify
    BITS: 2 * m.BITS,
    BYTES: 2 * m.BYTES,
    MASK: Si(2 * m.BITS),
    ZERO: { c0: P.ZERO, c1: P.ZERO },
    ONE: { c0: P.ONE, c1: P.ZERO },
    create: (R) => R,
    isValid: ({ c0: R, c1: C }) => P.isValid(R) && P.isValid(C),
    is0: ({ c0: R, c1: C }) => P.is0(R) && P.is0(C),
    neg: ({ c0: R, c1: C }) => ({ c0: P.neg(R), c1: P.neg(C) }),
    eql: ({ c0: R, c1: C }, { c0: Y, c1: z }) => P.eql(R, Y) && P.eql(C, z),
    sqrt: Ta,
    inv: ({ c0: R, c1: C }) => {
      let Y = P.inv(P.sub(P.sqr(R), P.mulByNonresidue(P.sqr(C))));
      return { c0: P.mul(R, Y), c1: P.neg(P.mul(C, Y)) };
    },
    div: (R, C) => de.mul(R, typeof C == "bigint" ? r.inv(r.create(C)) : de.inv(C)),
    pow: (R, C) => Bi(de, R, C),
    invertBatch: (R) => vi(de, R),
    // Normalized
    add: K,
    sub: re,
    mul: ae,
    sqr: te,
    // NonNormalized stuff
    addN: K,
    subN: re,
    mulN: ae,
    sqrN: te,
    // Bytes utils
    fromBytes: (R) => {
      if (R.length !== de.BYTES)
        throw new Error(`fromBytes wrong length=${R.length}`);
      return {
        c0: P.fromBytes(R.subarray(0, P.BYTES)),
        c1: P.fromBytes(R.subarray(P.BYTES))
      };
    },
    toBytes: ({ c0: R, c1: C }) => Qe(P.toBytes(R), P.toBytes(C)),
    cmov: ({ c0: R, c1: C }, { c0: Y, c1: z }, j) => ({
      c0: P.cmov(R, Y, j),
      c1: P.cmov(C, z, j)
    }),
    // Utils
    // toString() {
    //   return `Fp12(${this.c0} + ${this.c1} * w)`;
    // },
    // fromTuple(c: [Fp6, Fp6]) {
    //   return new Fp12(...c);
    // }
    fromBigTwelve: (R) => ({
      c0: P.fromBigSix(R.slice(0, 6)),
      c1: P.fromBigSix(R.slice(6, 12))
    }),
    // Raises to q**i -th power
    frobeniusMap(R, C) {
      const { c0: Y, c1: z, c2: j } = P.frobeniusMap(R.c1, C), ee = J[C % 12];
      return {
        c0: P.frobeniusMap(R.c0, C),
        c1: P.create({
          c0: m.mul(Y, ee),
          c1: m.mul(z, ee),
          c2: m.mul(j, ee)
        })
      };
    },
    mulByFp2: ({ c0: R, c1: C }, Y) => ({
      c0: P.mulByFp2(R, Y),
      c1: P.mulByFp2(C, Y)
    }),
    conjugate: ({ c0: R, c1: C }) => ({ c0: R, c1: P.neg(C) }),
    // Sparse multiplication
    mul014: ({ c0: R, c1: C }, Y, z, j) => {
      let ee = P.mul01(R, Y, z), le = P.mul1(C, j);
      return {
        c0: P.add(P.mulByNonresidue(le), ee),
        // T1 * v + T0
        // (c1 + c0) * [o0, o1+o4] - T0 - T1
        c1: P.sub(P.sub(P.mul01(P.add(C, R), Y, m.add(z, j)), ee), le)
      };
    },
    mul034: ({ c0: R, c1: C }, Y, z, j) => {
      const ee = P.create({
        c0: m.mul(R.c0, Y),
        c1: m.mul(R.c1, Y),
        c2: m.mul(R.c2, Y)
      }), le = P.mul01(C, z, j), we = P.mul01(P.add(R, C), m.add(Y, z), j);
      return {
        c0: P.add(P.mulByNonresidue(le), ee),
        c1: P.sub(we, P.add(ee, le))
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
  return { Fp: r, Fp2: m, Fp6: P, Fp4Square: pe, Fp12: de };
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const mt = BigInt(0), Qi = BigInt(1), st = BigInt(2), li = BigInt(3), Mn = BigInt(4), Tr = BigInt("0xd201000000010000"), Ed = Cn(Tr), { Fp: be, Fp2: Ee, Fp6: mo, Fp4Square: Hs, Fp12: Ce } = xd({
  // Order of Fp
  ORDER: BigInt("0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffaaab"),
  // Finite extension field over irreducible polynominal.
  // Fp(u) / (u² - β) where β = -1
  FP2_NONRESIDUE: [Qi, Qi],
  Fp2mulByB: ({ c0: t, c1: e }) => {
    const r = be.mul(t, Mn), n = be.mul(e, Mn);
    return { c0: be.sub(r, n), c1: be.add(r, n) };
  },
  // Fp12
  // A cyclotomic group is a subgroup of Fp^n defined by
  //   GΦₙ(p) = {α ∈ Fpⁿ : α^Φₙ(p) = 1}
  // The result of any pairing is in a cyclotomic subgroup
  // https://eprint.iacr.org/2009/565.pdf
  Fp12cyclotomicSquare: ({ c0: t, c1: e }) => {
    const { c0: r, c1: n, c2: i } = t, { c0: s, c1: c, c2: a } = e, { first: p, second: g } = Hs(r, c), { first: b, second: T } = Hs(s, i), { first: N, second: S } = Hs(n, a), m = Ee.mulByNonresidue(S);
    return {
      c0: mo.create({
        c0: Ee.add(Ee.mul(Ee.sub(p, r), st), p),
        // 2 * (T3 - c0c0)  + T3
        c1: Ee.add(Ee.mul(Ee.sub(b, n), st), b),
        // 2 * (T5 - c0c1)  + T5
        c2: Ee.add(Ee.mul(Ee.sub(N, i), st), N)
      }),
      // 2 * (T7 - c0c2)  + T7
      c1: mo.create({
        c0: Ee.add(Ee.mul(Ee.add(m, s), st), m),
        // 2 * (T9 + c1c0) + T9
        c1: Ee.add(Ee.mul(Ee.add(g, c), st), g),
        // 2 * (T4 + c1c1) + T4
        c2: Ee.add(Ee.mul(Ee.add(T, a), st), T)
      })
    };
  },
  Fp12cyclotomicExp(t, e) {
    let r = Ce.ONE;
    for (let n = Ed - 1; n >= 0; n--)
      r = Ce._cyclotomicSquare(r), Qh(e, n) && (r = Ce.mul(r, t));
    return r;
  },
  // https://eprint.iacr.org/2010/354.pdf
  // https://eprint.iacr.org/2009/565.pdf
  Fp12finalExponentiate: (t) => {
    const e = Tr, r = Ce.div(Ce.frobeniusMap(t, 6), t), n = Ce.mul(Ce.frobeniusMap(r, 2), r), i = Ce.conjugate(Ce._cyclotomicExp(n, e)), s = Ce.mul(Ce.conjugate(Ce._cyclotomicSquare(n)), i), c = Ce.conjugate(Ce._cyclotomicExp(s, e)), a = Ce.conjugate(Ce._cyclotomicExp(c, e)), p = Ce.mul(Ce.conjugate(Ce._cyclotomicExp(a, e)), Ce._cyclotomicSquare(i)), g = Ce.conjugate(Ce._cyclotomicExp(p, e)), b = Ce.frobeniusMap(Ce.mul(i, a), 2), T = Ce.frobeniusMap(Ce.mul(c, n), 3), N = Ce.frobeniusMap(Ce.mul(p, Ce.conjugate(n)), 1), S = Ce.mul(Ce.mul(g, Ce.conjugate(s)), n);
    return Ce.mul(Ce.mul(Ce.mul(b, T), N), S);
  }
}), Pa = Kn(BigInt("0x73eda753299d7d483339d80809a1d80553bda402fffe5bfeffffffff00000001")), Td = rf(Ee, [
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
].map((t) => t.map((e) => Ee.fromBigTuple(e.map(BigInt))))), Ad = rf(be, [
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
].map((t) => t.map((e) => BigInt(e)))), Sd = af(Ee, {
  A: Ee.create({ c0: be.create(mt), c1: be.create(BigInt(240)) }),
  // A' = 240 * I
  B: Ee.create({ c0: be.create(BigInt(1012)), c1: be.create(BigInt(1012)) }),
  // B' = 1012 * (1 + I)
  Z: Ee.create({ c0: be.create(BigInt(-2)), c1: be.create(BigInt(-1)) })
  // Z: -(2 + I)
}), Bd = af(be, {
  A: be.create(BigInt("0x144698a3b8e9433d693a02c96d4982b0ea985383ee66a8d8e8981aefd881ac98936f8da0e0f97f5cf428082d584c1d")),
  B: be.create(BigInt("0x12e2908d11688030018b12e8753eee3b2016c1f0f24f4070a0b9c14fcef35ef55a23215a316ceaa5d1cc48e98e172be0")),
  Z: be.create(BigInt(11))
}), { G2psi: Ca, G2psi2: vd } = _d(be, Ee, Ee.div(Ee.ONE, Ee.NONRESIDUE)), Vs = Object.freeze({
  // DST: a domain separation tag
  // defined in section 2.2.5
  // Use utils.getDSTLabel(), utils.setDSTLabel(value)
  DST: "BLS_SIG_BLS12381G2_XMD:SHA-256_SSWU_RO_NUL_",
  encodeDST: "BLS_SIG_BLS12381G2_XMD:SHA-256_SSWU_RO_NUL_",
  // p: the characteristic of F
  //    where F is a finite field of characteristic p and order q = p^m
  p: be.ORDER,
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
  hash: Uo
}), es = Vn(be.toBytes(mt), { infinity: !0, compressed: !0 });
function hi(t) {
  t = t.slice();
  const e = t[0] & 224, r = !!(e >> 7 & 1), n = !!(e >> 6 & 1), i = !!(e >> 5 & 1);
  return t[0] &= 31, { compressed: r, infinity: n, sort: i, value: t };
}
function Vn(t, e) {
  if (t[0] & 224)
    throw new Error("setMask: non-empty mask");
  return e.compressed && (t[0] |= 128), e.infinity && (t[0] |= 64), e.sort && (t[0] |= 32), t;
}
function Ma(t) {
  t.assertValidity();
  const e = t.equals(Nt.G1.ProjectivePoint.ZERO), { x: r, y: n } = t.toAffine();
  if (e)
    return es.slice();
  const i = be.ORDER, s = !!(n * st / i);
  return Vn(at(r, be.BYTES), { compressed: !0, sort: s });
}
function ka(t) {
  t.assertValidity();
  const e = be.BYTES;
  if (t.equals(Nt.G2.ProjectivePoint.ZERO))
    return Qe(es, at(mt, e));
  const { x: r, y: n } = t.toAffine(), { re: i, im: s } = Ee.reim(r), { re: c, im: a } = Ee.reim(n), g = !!((a > mt ? a * st : c * st) / be.ORDER & Qi), b = i;
  return Qe(Vn(at(s, e), { sort: g, compressed: !0 }), at(b, e));
}
const Nt = wd({
  // Fields
  fields: {
    Fp: be,
    Fp2: Ee,
    Fp6: mo,
    Fp12: Ce,
    Fr: Pa
  },
  // G1 is the order-q subgroup of E1(Fp) : y² = x³ + 4, #E1(Fp) = h1q, where
  // characteristic; z + (z⁴ - z² + 1)(z - 1)²/3
  G1: {
    Fp: be,
    // cofactor; (z - 1)²/3
    h: BigInt("0x396c8c005555e1568c00aaab0000aaab"),
    // generator's coordinates
    // x = 3685416753713387016781088315183077757961620795782546409894578378688607592378376318836054947676345821548104185464507
    // y = 1339506544944476473020471379941921221584933875938349620426543736416511423956333506472724655353366534992391756441569
    Gx: BigInt("0x17f1d3a73197d7942695638c4fa9ac0fc3688c4f9774b905a14e3a3f171bac586c55e83ff97a1aeffb3af00adb22c6bb"),
    Gy: BigInt("0x08b3f481e3aaa0f1a09e30ed741d8ae4fcf5e095d5d00af600db18cb2c04b3edd03cc744a2888ae40caa232946c5e7e1"),
    a: be.ZERO,
    b: Mn,
    htfDefaults: { ...Vs, m: 1, DST: "BLS_SIG_BLS12381G1_XMD:SHA-256_SSWU_RO_NUL_" },
    wrapPrivateKey: !0,
    allowInfinityPoint: !0,
    // Checks is the point resides in prime-order subgroup.
    // point.isTorsionFree() should return true for valid points
    // It returns false for shitty points.
    // https://eprint.iacr.org/2021/1130.pdf
    isTorsionFree: (t, e) => {
      const r = BigInt("0x5f19672fdf76ce51ba69c6076a0f77eaddb3a93be6f89688de17d813620a00022e01fffffffefffe"), n = new t(be.mul(e.px, r), e.py, e.pz);
      return e.multiplyUnsafe(Tr).negate().multiplyUnsafe(Tr).equals(n);
    },
    // Clear cofactor of G1
    // https://eprint.iacr.org/2019/403
    clearCofactor: (t, e) => e.multiplyUnsafe(Tr).add(e),
    mapToCurve: (t) => {
      const { x: e, y: r } = Bd(be.create(t[0]));
      return Ad(e, r);
    },
    fromBytes: (t) => {
      const { compressed: e, infinity: r, sort: n, value: i } = hi(t);
      if (i.length === 48 && e) {
        const s = be.ORDER, c = Lt(i), a = be.create(c & be.MASK);
        if (r) {
          if (a !== mt)
            throw new Error("G1: non-empty compressed point at infinity");
          return { x: mt, y: mt };
        }
        const p = be.add(be.pow(a, li), be.create(Nt.params.G1b));
        let g = be.sqrt(p);
        if (!g)
          throw new Error("Invalid compressed G1 point");
        return g * st / s !== BigInt(n) && (g = be.neg(g)), { x: be.create(a), y: be.create(g) };
      } else if (i.length === 96 && !e) {
        const s = Lt(i.subarray(0, be.BYTES)), c = Lt(i.subarray(be.BYTES));
        if (r) {
          if (s !== mt || c !== mt)
            throw new Error("G1: non-empty point at infinity");
          return Nt.G1.ProjectivePoint.ZERO.toAffine();
        }
        return { x: be.create(s), y: be.create(c) };
      } else
        throw new Error("Invalid point G1, expected 48/96 bytes");
    },
    toBytes: (t, e, r) => {
      const n = e.equals(t.ZERO), { x: i, y: s } = e.toAffine();
      if (r) {
        if (n)
          return es.slice();
        const c = be.ORDER, a = !!(s * st / c);
        return Vn(at(i, be.BYTES), { compressed: !0, sort: a });
      } else
        return n ? Qe(new Uint8Array([64]), new Uint8Array(2 * be.BYTES - 1)) : Qe(at(i, be.BYTES), at(s, be.BYTES));
    },
    ShortSignature: {
      fromHex(t) {
        const { infinity: e, sort: r, value: n } = hi(bt("signatureHex", t, 48)), i = be.ORDER, s = Lt(n);
        if (e)
          return Nt.G1.ProjectivePoint.ZERO;
        const c = be.create(s & be.MASK), a = be.add(be.pow(c, li), be.create(Nt.params.G1b));
        let p = be.sqrt(a);
        if (!p)
          throw new Error("Invalid compressed G1 point");
        const g = BigInt(r);
        p * st / i !== g && (p = be.neg(p));
        const b = Nt.G1.ProjectivePoint.fromAffine({ x: c, y: p });
        return b.assertValidity(), b;
      },
      toRawBytes(t) {
        return Ma(t);
      },
      toHex(t) {
        return Wr(Ma(t));
      }
    }
  },
  // G2 is the order-q subgroup of E2(Fp²) : y² = x³+4(1+√−1),
  // where Fp2 is Fp[√−1]/(x2+1). #E2(Fp2 ) = h2q, where
  // G² - 1
  // h2q
  G2: {
    Fp: Ee,
    // cofactor
    h: BigInt("0x5d543a95414e7f1091d50792876a202cd91de4547085abaa68a205b2e5a7ddfa628f1cb4d9e82ef21537e293a6691ae1616ec6e786f0c70cf1c38e31c7238e5"),
    Gx: Ee.fromBigTuple([
      BigInt("0x024aa2b2f08f0a91260805272dc51051c6e47ad4fa403b02b4510b647ae3d1770bac0326a805bbefd48056c8c121bdb8"),
      BigInt("0x13e02b6052719f607dacd3a088274f65596bd0d09920b61ab5da61bbdc7f5049334cf11213945d57e5ac7d055d042b7e")
    ]),
    // y =
    // 927553665492332455747201965776037880757740193453592970025027978793976877002675564980949289727957565575433344219582,
    // 1985150602287291935568054521177171638300868978215655730859378665066344726373823718423869104263333984641494340347905
    Gy: Ee.fromBigTuple([
      BigInt("0x0ce5d527727d6e118cc9cdc6da2e351aadfd9baa8cbdd3a76d429a695160d12c923ac9cc3baca289e193548608b82801"),
      BigInt("0x0606c4a02ea734cc32acd2b02bc28b99cb3e287e85a763af267492ab572e99ab3f370d275cec1da1aaa9075ff05f79be")
    ]),
    a: Ee.ZERO,
    b: Ee.fromBigTuple([Mn, Mn]),
    hEff: BigInt("0xbc69f08f2ee75b3584c6a0ea91b352888e2a8e9145ad7689986ff031508ffe1329c2f178731db956d82bf015d1212b02ec0ec69d7477c1ae954cbc06689f6a359894c0adebbf6b4e8020005aaa95551"),
    htfDefaults: { ...Vs },
    wrapPrivateKey: !0,
    allowInfinityPoint: !0,
    mapToCurve: (t) => {
      const { x: e, y: r } = Sd(Ee.fromBigTuple(t));
      return Td(e, r);
    },
    // Checks is the point resides in prime-order subgroup.
    // point.isTorsionFree() should return true for valid points
    // It returns false for shitty points.
    // https://eprint.iacr.org/2021/1130.pdf
    isTorsionFree: (t, e) => e.multiplyUnsafe(Tr).negate().equals(Ca(t, e)),
    // Maps the point into the prime-order subgroup G2.
    // clear_cofactor_bls12381_g2 from cfrg-hash-to-curve-11
    // https://eprint.iacr.org/2017/419.pdf
    // prettier-ignore
    clearCofactor: (t, e) => {
      const r = Tr;
      let n = e.multiplyUnsafe(r).negate(), i = Ca(t, e), s = e.double();
      return s = vd(t, s), s = s.subtract(i), i = n.add(i), i = i.multiplyUnsafe(r).negate(), s = s.add(i), s = s.subtract(n), s.subtract(e);
    },
    fromBytes: (t) => {
      const { compressed: e, infinity: r, sort: n, value: i } = hi(t);
      if (!e && !r && n || // 00100000
      !e && r && n || // 01100000
      n && r && e)
        throw new Error("Invalid encoding flag: " + (t[0] & 224));
      const s = be.BYTES, c = (a, p, g) => Lt(a.slice(p, g));
      if (i.length === 96 && e) {
        const a = Nt.params.G2b, p = be.ORDER;
        if (r) {
          if (i.reduce((I, U) => I !== 0 ? U + 1 : U, 0) > 0)
            throw new Error("Invalid compressed G2 point");
          return { x: Ee.ZERO, y: Ee.ZERO };
        }
        const g = c(i, 0, s), b = c(i, s, 2 * s), T = Ee.create({ c0: be.create(b), c1: be.create(g) }), N = Ee.add(Ee.pow(T, li), a);
        let S = Ee.sqrt(N);
        const m = S.c1 === mt ? S.c0 * st / p : S.c1 * st / p ? Qi : mt;
        return S = n && m > 0 ? S : Ee.neg(S), { x: T, y: S };
      } else if (i.length === 192 && !e) {
        if (r) {
          if (i.reduce((T, N) => T !== 0 ? N + 1 : N, 0) > 0)
            throw new Error("Invalid uncompressed G2 point");
          return { x: Ee.ZERO, y: Ee.ZERO };
        }
        const a = c(i, 0, s), p = c(i, s, 2 * s), g = c(i, 2 * s, 3 * s), b = c(i, 3 * s, 4 * s);
        return { x: Ee.fromBigTuple([p, a]), y: Ee.fromBigTuple([b, g]) };
      } else
        throw new Error("Invalid point G2, expected 96/192 bytes");
    },
    toBytes: (t, e, r) => {
      const { BYTES: n, ORDER: i } = be, s = e.equals(t.ZERO), { x: c, y: a } = e.toAffine();
      if (r) {
        if (s)
          return Qe(es, at(mt, n));
        const p = !!(a.c1 === mt ? a.c0 * st / i : a.c1 * st / i);
        return Qe(Vn(at(c.c1, n), { compressed: !0, sort: p }), at(c.c0, n));
      } else {
        if (s)
          return Qe(new Uint8Array([64]), new Uint8Array(4 * n - 1));
        const { re: p, im: g } = Ee.reim(c), { re: b, im: T } = Ee.reim(a);
        return Qe(at(g, n), at(p, n), at(T, n), at(b, n));
      }
    },
    Signature: {
      // TODO: Optimize, it's very slow because of sqrt.
      fromHex(t) {
        const { infinity: e, sort: r, value: n } = hi(bt("signatureHex", t)), i = be.ORDER, s = n.length / 2;
        if (s !== 48 && s !== 96)
          throw new Error("Invalid compressed signature length, must be 96 or 192");
        const c = Lt(n.slice(0, s)), a = Lt(n.slice(s));
        if (e)
          return Nt.G2.ProjectivePoint.ZERO;
        const p = be.create(c & be.MASK), g = be.create(a), b = Ee.create({ c0: g, c1: p }), T = Ee.add(Ee.pow(b, li), Nt.params.G2b);
        let N = Ee.sqrt(T);
        if (!N)
          throw new Error("Failed to find a square root");
        const { re: S, im: m } = Ee.reim(N), I = BigInt(r), U = m > mt && m * st / i !== I, H = m === mt && S * st / i !== I;
        (U || H) && (N = Ee.neg(N));
        const V = Nt.G2.ProjectivePoint.fromAffine({ x: b, y: N });
        return V.assertValidity(), V;
      },
      toRawBytes(t) {
        return ka(t);
      },
      toHex(t) {
        return Wr(ka(t));
      }
    }
  },
  params: {
    ateLoopSize: Tr,
    // The BLS parameter x for BLS12-381
    r: Pa.ORDER,
    // order; z⁴ − z² + 1; CURVE.n from other curves
    xNegative: !0,
    twistType: "multiplicative"
  },
  htfDefaults: Vs,
  hash: Uo,
  randomBytes: Pc
});
function Nd(t, e, r) {
  const n = typeof t == "string" ? t : jt(t), i = typeof e == "string" ? e : jt(e), s = typeof r == "string" ? r : jt(r);
  return Nt.verifyShortSignature(i, s, n);
}
const cf = (t) => it(new gn(t)), jo = (t) => {
  const e = cf(t);
  return new Date(Number(e) / 1e6);
};
class er extends tt {
  constructor(e) {
    super(`Invalid certificate: ${e}`);
  }
}
var At;
(function(t) {
  t[t.Empty = 0] = "Empty", t[t.Fork = 1] = "Fork", t[t.Labeled = 2] = "Labeled", t[t.Leaf = 3] = "Leaf", t[t.Pruned = 4] = "Pruned";
})(At || (At = {}));
function Rd(t, e) {
  const r = new Uint8Array(t), n = new Uint8Array(e);
  for (let i = 0; i < r.length; i++)
    if (r[i] > n[i])
      return !0;
  return !1;
}
class Hr {
  constructor(e, r, n, i, s = 5) {
    this._rootKey = r, this._canisterId = n, this._blsVerify = i, this._maxAgeInMinutes = s, this.cert = lr(new Uint8Array(e));
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
    const r = Hr.createUnverified(e);
    return await r.verify(), r;
  }
  static createUnverified(e) {
    let r = e.blsVerify;
    return r || (r = Nd), new Hr(e.certificate, e.rootKey, e.canisterId, r, e.maxAgeInMinutes);
  }
  lookup(e) {
    return dn(e, this.cert.tree);
  }
  lookup_label(e) {
    return this.lookup([e]);
  }
  async verify() {
    const e = await Ni(this.cert.tree), r = await this._checkDelegationAndGetKey(this.cert.delegation), n = this.cert.signature, i = Id(r), s = ir(vn("ic-state-root"), e);
    let c = !1;
    const a = Ot(this.lookup(["time"]));
    if (!a)
      throw new er("Certificate does not contain a time");
    const p = 5 * 60 * 1e3, g = this._maxAgeInMinutes * 60 * 1e3, b = Date.now(), T = b - g, N = b + p, S = jo(a);
    if (S.getTime() < T)
      throw new er(`Certificate is signed more than ${this._maxAgeInMinutes} minutes in the past. Certificate time: ` + S.toISOString() + " Current time: " + new Date(b).toISOString());
    if (S.getTime() > N)
      throw new er("Certificate is signed more than 5 minutes in the future. Certificate time: " + S.toISOString() + " Current time: " + new Date(b).toISOString());
    try {
      c = await this._blsVerify(new Uint8Array(i), new Uint8Array(n), new Uint8Array(s));
    } catch {
      c = !1;
    }
    if (!c)
      throw new er("Signature verification failed");
  }
  async _checkDelegationAndGetKey(e) {
    if (!e)
      return this._rootKey;
    const r = await Hr.createUnverified({
      certificate: e.certificate,
      rootKey: this._rootKey,
      canisterId: this._canisterId,
      blsVerify: this._blsVerify,
      // Do not check max age for delegation certificates
      maxAgeInMinutes: 1 / 0
    });
    if (r.cert.delegation)
      throw new er("Delegation certificates cannot be nested");
    if (await r.verify(), this._canisterId.toString() !== vp && !uf({
      canisterId: this._canisterId,
      subnetId: Me.fromUint8Array(new Uint8Array(e.subnet_id)),
      tree: r.cert.tree
    }))
      throw new er(`Canister ${this._canisterId} not in range of delegations for subnet 0x${jt(e.subnet_id)}`);
    const n = Ot(r.lookup(["subnet", e.subnet_id, "public_key"]));
    if (!n)
      throw new Error(`Could not find subnet key for subnet 0x${jt(e.subnet_id)}`);
    return n;
  }
}
const _n = Wi("308182301d060d2b0601040182dc7c0503010201060c2b0601040182dc7c05030201036100"), Od = 96;
function Id(t) {
  const e = _n.byteLength + Od;
  if (t.byteLength !== e)
    throw new TypeError(`BLS DER-encoded public key must be ${e} bytes long`);
  const r = t.slice(0, _n.byteLength);
  if (!Fo(r, _n))
    throw new TypeError(`BLS DER-encoded public key is invalid. Expect the following prefix: ${_n}, but get ${r}`);
  return t.slice(_n.byteLength);
}
function Ot(t) {
  if (t.status === et.Found) {
    if (t.value instanceof ArrayBuffer)
      return t.value;
    if (t.value instanceof Uint8Array)
      return t.value.buffer;
  }
}
async function Ni(t) {
  switch (t[0]) {
    case At.Empty:
      return Gt(vn("ic-hashtree-empty"));
    case At.Pruned:
      return t[1];
    case At.Leaf:
      return Gt(ir(vn("ic-hashtree-leaf"), t[1]));
    case At.Labeled:
      return Gt(ir(vn("ic-hashtree-labeled"), t[1], await Ni(t[2])));
    case At.Fork:
      return Gt(ir(vn("ic-hashtree-fork"), await Ni(t[1]), await Ni(t[2])));
    default:
      throw new Error("unreachable");
  }
}
function vn(t) {
  const e = new Uint8Array([t.length]), r = new TextEncoder().encode(t);
  return ir(e, r);
}
var et;
(function(t) {
  t.Unknown = "unknown", t.Absent = "absent", t.Found = "found";
})(et || (et = {}));
var ur;
(function(t) {
  t.Less = "less", t.Greater = "greater";
})(ur || (ur = {}));
function dn(t, e) {
  if (t.length === 0)
    switch (e[0]) {
      case At.Leaf: {
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
  const r = typeof t[0] == "string" ? new TextEncoder().encode(t[0]) : t[0], n = Ri(r, e);
  switch (n.status) {
    case et.Found:
      return dn(t.slice(1), n.value);
    case ur.Greater:
    case ur.Less:
      return {
        status: et.Absent
      };
    default:
      return n;
  }
}
function go(t) {
  switch (t[0]) {
    case At.Empty:
      return [];
    case At.Fork:
      return go(t[1]).concat(go(t[2]));
    default:
      return [t];
  }
}
function Ri(t, e) {
  switch (e[0]) {
    case At.Labeled:
      return Rd(t, e[1]) ? {
        status: ur.Greater
      } : Fo(t, e[1]) ? {
        status: et.Found,
        value: e[2]
      } : {
        status: ur.Less
      };
    case At.Fork:
      const r = Ri(t, e[1]);
      switch (r.status) {
        case ur.Greater: {
          const n = Ri(t, e[2]);
          return n.status === ur.Less ? {
            status: et.Absent
          } : n;
        }
        case et.Unknown: {
          let n = Ri(t, e[2]);
          return n.status === ur.Less ? {
            status: et.Unknown
          } : n;
        }
        default:
          return r;
      }
    case At.Pruned:
      return {
        status: et.Unknown
      };
    default:
      return {
        status: et.Absent
      };
  }
}
function uf(t) {
  const { canisterId: e, subnetId: r, tree: n } = t, i = dn(["subnet", r.toUint8Array(), "canister_ranges"], n);
  if (i.status !== et.Found || !(i.value instanceof ArrayBuffer))
    throw new Error(`Could not find canister ranges for subnet ${r}`);
  return lr(i.value).map((p) => [
    Me.fromUint8Array(p[0]),
    Me.fromUint8Array(p[1])
  ]).some((p) => p[0].ltEq(e) && p[1].gtEq(e));
}
class Ud {
  constructor(e, r, n) {
    this.key = e, this.path = r, this.decodeStrategy = n;
  }
}
const ff = async (t) => {
  const { agent: e, paths: r } = t, n = Me.from(t.canisterId), i = [...new Set(r)], s = i.map((p) => yo(p, n)), c = /* @__PURE__ */ new Map(), a = i.map((p, g) => (async () => {
    var b;
    try {
      const T = await e.readState(n, {
        paths: [s[g]]
      }), N = await Hr.create({
        certificate: T.certificate,
        rootKey: e.rootKey,
        canisterId: n
      }), S = (U, H) => {
        if (H === "subnet") {
          const V = lf(T.certificate, n, e.rootKey);
          return {
            path: H,
            data: V
          };
        } else
          return {
            path: H,
            data: Ot(U.lookup(yo(H, n)))
          };
      }, { path: m, data: I } = S(N, i[g]);
      if (!I)
        console.warn(`Expected to find result for path ${m}, but instead found nothing.`), typeof m == "string" ? c.set(m, null) : c.set(m.key, null);
      else
        switch (m) {
          case "time": {
            c.set(m, jo(I));
            break;
          }
          case "controllers": {
            c.set(m, Pd(I));
            break;
          }
          case "module_hash": {
            c.set(m, $a(I));
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
                  c.set(m.key, cf(I));
                  break;
                }
                case "cbor": {
                  c.set(m.key, hf(I));
                  break;
                }
                case "hex": {
                  c.set(m.key, $a(I));
                  break;
                }
                case "utf-8":
                  c.set(m.key, Fd(I));
              }
        }
    } catch (T) {
      if (!((b = T == null ? void 0 : T.message) === null || b === void 0) && b.includes("Invalid certificate"))
        throw new tt(T.message);
      typeof p != "string" && "key" in p && "path" in p ? c.set(p.key, null) : c.set(p, null), console.group(), console.warn(`Expected to find result for path ${p}, but instead found nothing.`), console.warn(T), console.groupEnd();
    }
  })());
  return await Promise.all(a), c;
}, lf = (t, e, r) => {
  if (!e._isPrincipal)
    throw new Error("Invalid canisterId");
  const n = lr(new Uint8Array(t)), i = n.tree;
  let s = n.delegation, c;
  if (s && s.subnet_id ? c = Me.fromUint8Array(new Uint8Array(s.subnet_id)) : !s && typeof r < "u" ? (c = Me.selfAuthenticating(new Uint8Array(r)), s = {
    subnet_id: c.toUint8Array(),
    certificate: new ArrayBuffer(0)
  }) : (c = Me.selfAuthenticating(Me.fromText("tdb26-jop6k-aogll-7ltgs-eruif-6kk7m-qpktf-gdiqx-mxtrf-vb5e6-eqe").toUint8Array()), s = {
    subnet_id: c.toUint8Array(),
    certificate: new ArrayBuffer(0)
  }), !uf({ canisterId: e, subnetId: c, tree: i }))
    throw new Error("Canister not in range");
  const p = dn(["subnet", s.subnet_id, "node"], i);
  if (p.status !== et.Found)
    throw new Error("Node not found");
  if (p.value instanceof ArrayBuffer)
    throw new Error("Invalid node tree");
  const g = go(p.value), b = /* @__PURE__ */ new Map();
  return g.forEach((T) => {
    const N = Me.from(new Uint8Array(T[1])).toText(), S = dn(["public_key"], T[2]);
    if (S.status !== et.Found)
      throw new Error("Public key not found");
    const m = S.value;
    if (m.byteLength !== 44)
      throw new Error("Invalid public key length");
    b.set(N, m);
  }), {
    subnetId: Me.fromUint8Array(new Uint8Array(s.subnet_id)).toText(),
    nodeKeys: b
  };
}, yo = (t, e) => {
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
}, $a = (t) => jt(t), hf = (t) => lr(t), Fd = (t) => new TextDecoder().decode(t), Pd = (t) => hf(t).map((r) => Me.fromUint8Array(new Uint8Array(r))), Cd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CustomPath: Ud,
  encodePath: yo,
  fetchNodeKeys: lf,
  request: ff
}, Symbol.toStringTag, { value: "Module" })), di = /* @__PURE__ */ BigInt(2 ** 32 - 1), wo = /* @__PURE__ */ BigInt(32);
function df(t, e = !1) {
  return e ? { h: Number(t & di), l: Number(t >> wo & di) } : { h: Number(t >> wo & di) | 0, l: Number(t & di) | 0 };
}
function Md(t, e = !1) {
  let r = new Uint32Array(t.length), n = new Uint32Array(t.length);
  for (let i = 0; i < t.length; i++) {
    const { h: s, l: c } = df(t[i], e);
    [r[i], n[i]] = [s, c];
  }
  return [r, n];
}
const kd = (t, e) => BigInt(t >>> 0) << wo | BigInt(e >>> 0), $d = (t, e, r) => t >>> r, qd = (t, e, r) => t << 32 - r | e >>> r, Hd = (t, e, r) => t >>> r | e << 32 - r, Vd = (t, e, r) => t << 32 - r | e >>> r, Ld = (t, e, r) => t << 64 - r | e >>> r - 32, Gd = (t, e, r) => t >>> r - 32 | e << 64 - r, jd = (t, e) => e, zd = (t, e) => t, Wd = (t, e, r) => t << r | e >>> 32 - r, Dd = (t, e, r) => e << r | t >>> 32 - r, Yd = (t, e, r) => e << r - 32 | t >>> 64 - r, Zd = (t, e, r) => t << r - 32 | e >>> 64 - r;
function Kd(t, e, r, n) {
  const i = (e >>> 0) + (n >>> 0);
  return { h: t + r + (i / 2 ** 32 | 0) | 0, l: i | 0 };
}
const Xd = (t, e, r) => (t >>> 0) + (e >>> 0) + (r >>> 0), Jd = (t, e, r, n) => e + r + n + (t / 2 ** 32 | 0) | 0, Qd = (t, e, r, n) => (t >>> 0) + (e >>> 0) + (r >>> 0) + (n >>> 0), ep = (t, e, r, n, i) => e + r + n + i + (t / 2 ** 32 | 0) | 0, tp = (t, e, r, n, i) => (t >>> 0) + (e >>> 0) + (r >>> 0) + (n >>> 0) + (i >>> 0), rp = (t, e, r, n, i, s) => e + r + n + i + s + (t / 2 ** 32 | 0) | 0, Fe = {
  fromBig: df,
  split: Md,
  toBig: kd,
  shrSH: $d,
  shrSL: qd,
  rotrSH: Hd,
  rotrSL: Vd,
  rotrBH: Ld,
  rotrBL: Gd,
  rotr32H: jd,
  rotr32L: zd,
  rotlSH: Wd,
  rotlSL: Dd,
  rotlBH: Yd,
  rotlBL: Zd,
  add: Kd,
  add3L: Xd,
  add3H: Jd,
  add4L: Qd,
  add4H: ep,
  add5H: rp,
  add5L: tp
}, [np, ip] = Fe.split([
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
].map((t) => BigInt(t))), br = /* @__PURE__ */ new Uint32Array(80), _r = /* @__PURE__ */ new Uint32Array(80);
class sp extends Cc {
  constructor() {
    super(128, 64, 16, !1), this.Ah = 1779033703, this.Al = -205731576, this.Bh = -1150833019, this.Bl = -2067093701, this.Ch = 1013904242, this.Cl = -23791573, this.Dh = -1521486534, this.Dl = 1595750129, this.Eh = 1359893119, this.El = -1377402159, this.Fh = -1694144372, this.Fl = 725511199, this.Gh = 528734635, this.Gl = -79577749, this.Hh = 1541459225, this.Hl = 327033209;
  }
  // prettier-ignore
  get() {
    const { Ah: e, Al: r, Bh: n, Bl: i, Ch: s, Cl: c, Dh: a, Dl: p, Eh: g, El: b, Fh: T, Fl: N, Gh: S, Gl: m, Hh: I, Hl: U } = this;
    return [e, r, n, i, s, c, a, p, g, b, T, N, S, m, I, U];
  }
  // prettier-ignore
  set(e, r, n, i, s, c, a, p, g, b, T, N, S, m, I, U) {
    this.Ah = e | 0, this.Al = r | 0, this.Bh = n | 0, this.Bl = i | 0, this.Ch = s | 0, this.Cl = c | 0, this.Dh = a | 0, this.Dl = p | 0, this.Eh = g | 0, this.El = b | 0, this.Fh = T | 0, this.Fl = N | 0, this.Gh = S | 0, this.Gl = m | 0, this.Hh = I | 0, this.Hl = U | 0;
  }
  process(e, r) {
    for (let L = 0; L < 16; L++, r += 4)
      br[L] = e.getUint32(r), _r[L] = e.getUint32(r += 4);
    for (let L = 16; L < 80; L++) {
      const X = br[L - 15] | 0, P = _r[L - 15] | 0, J = Fe.rotrSH(X, P, 1) ^ Fe.rotrSH(X, P, 8) ^ Fe.shrSH(X, P, 7), K = Fe.rotrSL(X, P, 1) ^ Fe.rotrSL(X, P, 8) ^ Fe.shrSL(X, P, 7), re = br[L - 2] | 0, ae = _r[L - 2] | 0, te = Fe.rotrSH(re, ae, 19) ^ Fe.rotrBH(re, ae, 61) ^ Fe.shrSH(re, ae, 6), pe = Fe.rotrSL(re, ae, 19) ^ Fe.rotrBL(re, ae, 61) ^ Fe.shrSL(re, ae, 6), de = Fe.add4L(K, pe, _r[L - 7], _r[L - 16]), R = Fe.add4H(de, J, te, br[L - 7], br[L - 16]);
      br[L] = R | 0, _r[L] = de | 0;
    }
    let { Ah: n, Al: i, Bh: s, Bl: c, Ch: a, Cl: p, Dh: g, Dl: b, Eh: T, El: N, Fh: S, Fl: m, Gh: I, Gl: U, Hh: H, Hl: V } = this;
    for (let L = 0; L < 80; L++) {
      const X = Fe.rotrSH(T, N, 14) ^ Fe.rotrSH(T, N, 18) ^ Fe.rotrBH(T, N, 41), P = Fe.rotrSL(T, N, 14) ^ Fe.rotrSL(T, N, 18) ^ Fe.rotrBL(T, N, 41), J = T & S ^ ~T & I, K = N & m ^ ~N & U, re = Fe.add5L(V, P, K, ip[L], _r[L]), ae = Fe.add5H(re, H, X, J, np[L], br[L]), te = re | 0, pe = Fe.rotrSH(n, i, 28) ^ Fe.rotrBH(n, i, 34) ^ Fe.rotrBH(n, i, 39), de = Fe.rotrSL(n, i, 28) ^ Fe.rotrBL(n, i, 34) ^ Fe.rotrBL(n, i, 39), R = n & s ^ n & a ^ s & a, C = i & c ^ i & p ^ c & p;
      H = I | 0, V = U | 0, I = S | 0, U = m | 0, S = T | 0, m = N | 0, { h: T, l: N } = Fe.add(g | 0, b | 0, ae | 0, te | 0), g = a | 0, b = p | 0, a = s | 0, p = c | 0, s = n | 0, c = i | 0;
      const Y = Fe.add3L(te, de, C);
      n = Fe.add3H(Y, ae, pe, R), i = Y | 0;
    }
    ({ h: n, l: i } = Fe.add(this.Ah | 0, this.Al | 0, n | 0, i | 0)), { h: s, l: c } = Fe.add(this.Bh | 0, this.Bl | 0, s | 0, c | 0), { h: a, l: p } = Fe.add(this.Ch | 0, this.Cl | 0, a | 0, p | 0), { h: g, l: b } = Fe.add(this.Dh | 0, this.Dl | 0, g | 0, b | 0), { h: T, l: N } = Fe.add(this.Eh | 0, this.El | 0, T | 0, N | 0), { h: S, l: m } = Fe.add(this.Fh | 0, this.Fl | 0, S | 0, m | 0), { h: I, l: U } = Fe.add(this.Gh | 0, this.Gl | 0, I | 0, U | 0), { h: H, l: V } = Fe.add(this.Hh | 0, this.Hl | 0, H | 0, V | 0), this.set(n, i, s, c, a, p, g, b, T, N, S, m, I, U, H, V);
  }
  roundClean() {
    br.fill(0), _r.fill(0);
  }
  destroy() {
    this.buffer.fill(0), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
}
const op = /* @__PURE__ */ Io(() => new sp());
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const kt = BigInt(0), yt = BigInt(1), pi = BigInt(2), ap = BigInt(8), cp = { zip215: !0 };
function up(t) {
  const e = of(t);
  return Zn(t, {
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
function fp(t) {
  const e = up(t), { Fp: r, n, prehash: i, hash: s, randomBytes: c, nByteLength: a, h: p } = e, g = pi << BigInt(a * 8) - yt, b = r.create, T = Kn(e.n, e.nBitLength), N = e.uvRatio || ((z, j) => {
    try {
      return { isValid: !0, value: r.sqrt(z * r.inv(j)) };
    } catch {
      return { isValid: !1, value: kt };
    }
  }), S = e.adjustScalarBytes || ((z) => z), m = e.domain || ((z, j, ee) => {
    if (Fn("phflag", ee), j.length || ee)
      throw new Error("Contexts/pre-hash are not supported");
    return z;
  });
  function I(z, j) {
    Sr("coordinate " + z, j, kt, g);
  }
  function U(z) {
    if (!(z instanceof L))
      throw new Error("ExtendedPoint expected");
  }
  const H = qn((z, j) => {
    const { ex: ee, ey: le, ez: we } = z, se = z.is0();
    j == null && (j = se ? ap : r.inv(we));
    const Z = b(ee * j), ue = b(le * j), w = b(we * j);
    if (se)
      return { x: kt, y: yt };
    if (w !== yt)
      throw new Error("invZ was invalid");
    return { x: Z, y: ue };
  }), V = qn((z) => {
    const { a: j, d: ee } = e;
    if (z.is0())
      throw new Error("bad point: ZERO");
    const { ex: le, ey: we, ez: se, et: Z } = z, ue = b(le * le), w = b(we * we), ie = b(se * se), he = b(ie * ie), Te = b(ue * j), ce = b(ie * b(Te + w)), fe = b(he + b(ee * b(ue * w)));
    if (ce !== fe)
      throw new Error("bad point: equation left != right (1)");
    const _ = b(le * we), E = b(se * Z);
    if (_ !== E)
      throw new Error("bad point: equation left != right (2)");
    return !0;
  });
  class L {
    constructor(j, ee, le, we) {
      this.ex = j, this.ey = ee, this.ez = le, this.et = we, I("x", j), I("y", ee), I("z", le), I("t", we), Object.freeze(this);
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    static fromAffine(j) {
      if (j instanceof L)
        throw new Error("extended point not allowed");
      const { x: ee, y: le } = j || {};
      return I("x", ee), I("y", le), new L(ee, le, yt, b(ee * le));
    }
    static normalizeZ(j) {
      const ee = r.invertBatch(j.map((le) => le.ez));
      return j.map((le, we) => le.toAffine(ee[we])).map(L.fromAffine);
    }
    // Multiscalar Multiplication
    static msm(j, ee) {
      return sf(L, T, j, ee);
    }
    // "Private method", don't use it directly
    _setWindowSize(j) {
      J.setWindowSize(this, j);
    }
    // Not required for fromHex(), which always creates valid points.
    // Could be useful for fromAffine().
    assertValidity() {
      V(this);
    }
    // Compare one point to another.
    equals(j) {
      U(j);
      const { ex: ee, ey: le, ez: we } = this, { ex: se, ey: Z, ez: ue } = j, w = b(ee * ue), ie = b(se * we), he = b(le * ue), Te = b(Z * we);
      return w === ie && he === Te;
    }
    is0() {
      return this.equals(L.ZERO);
    }
    negate() {
      return new L(b(-this.ex), this.ey, this.ez, b(-this.et));
    }
    // Fast algo for doubling Extended Point.
    // https://hyperelliptic.org/EFD/g1p/auto-twisted-extended.html#doubling-dbl-2008-hwcd
    // Cost: 4M + 4S + 1*a + 6add + 1*2.
    double() {
      const { a: j } = e, { ex: ee, ey: le, ez: we } = this, se = b(ee * ee), Z = b(le * le), ue = b(pi * b(we * we)), w = b(j * se), ie = ee + le, he = b(b(ie * ie) - se - Z), Te = w + Z, ce = Te - ue, fe = w - Z, _ = b(he * ce), E = b(Te * fe), B = b(he * fe), k = b(ce * Te);
      return new L(_, E, k, B);
    }
    // Fast algo for adding 2 Extended Points.
    // https://hyperelliptic.org/EFD/g1p/auto-twisted-extended.html#addition-add-2008-hwcd
    // Cost: 9M + 1*a + 1*d + 7add.
    add(j) {
      U(j);
      const { a: ee, d: le } = e, { ex: we, ey: se, ez: Z, et: ue } = this, { ex: w, ey: ie, ez: he, et: Te } = j;
      if (ee === BigInt(-1)) {
        const x = b((se - we) * (ie + w)), v = b((se + we) * (ie - w)), G = b(v - x);
        if (G === kt)
          return this.double();
        const oe = b(Z * pi * Te), me = b(ue * pi * he), ge = me + oe, Be = v + x, d = me - oe, f = b(ge * G), l = b(Be * d), A = b(ge * d), M = b(G * Be);
        return new L(f, l, M, A);
      }
      const ce = b(we * w), fe = b(se * ie), _ = b(ue * le * Te), E = b(Z * he), B = b((we + se) * (w + ie) - ce - fe), k = E - _, F = E + _, q = b(fe - ee * ce), h = b(B * k), o = b(F * q), u = b(B * q), y = b(k * F);
      return new L(h, o, y, u);
    }
    subtract(j) {
      return this.add(j.negate());
    }
    wNAF(j) {
      return J.wNAFCached(this, j, L.normalizeZ);
    }
    // Constant-time multiplication.
    multiply(j) {
      const ee = j;
      Sr("scalar", ee, yt, n);
      const { p: le, f: we } = this.wNAF(ee);
      return L.normalizeZ([le, we])[0];
    }
    // Non-constant-time multiplication. Uses double-and-add algorithm.
    // It's faster, but should only be used when you don't care about
    // an exposed private key e.g. sig verification.
    // Does NOT allow scalars higher than CURVE.n.
    multiplyUnsafe(j) {
      const ee = j;
      return Sr("scalar", ee, kt, n), ee === kt ? P : this.equals(P) || ee === yt ? this : this.equals(X) ? this.wNAF(ee).p : J.unsafeLadder(this, ee);
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
    toAffine(j) {
      return H(this, j);
    }
    clearCofactor() {
      const { h: j } = e;
      return j === yt ? this : this.multiplyUnsafe(j);
    }
    // Converts hash string or Uint8Array to Point.
    // Uses algo from RFC8032 5.1.3.
    static fromHex(j, ee = !1) {
      const { d: le, a: we } = e, se = r.BYTES;
      j = bt("pointHex", j, se), Fn("zip215", ee);
      const Z = j.slice(), ue = j[se - 1];
      Z[se - 1] = ue & -129;
      const w = Pn(Z), ie = ee ? g : r.ORDER;
      Sr("pointHex.y", w, kt, ie);
      const he = b(w * w), Te = b(he - yt), ce = b(le * he - we);
      let { isValid: fe, value: _ } = N(Te, ce);
      if (!fe)
        throw new Error("Point.fromHex: invalid y coordinate");
      const E = (_ & yt) === yt, B = (ue & 128) !== 0;
      if (!ee && _ === kt && B)
        throw new Error("Point.fromHex: x=0 and x_0=1");
      return B !== E && (_ = b(-_)), L.fromAffine({ x: _, y: w });
    }
    static fromPrivateKey(j) {
      return ae(j).point;
    }
    toRawBytes() {
      const { x: j, y: ee } = this.toAffine(), le = Xi(ee, r.BYTES);
      return le[le.length - 1] |= j & yt ? 128 : 0, le;
    }
    toHex() {
      return Wr(this.toRawBytes());
    }
  }
  L.BASE = new L(e.Gx, e.Gy, yt, b(e.Gx * e.Gy)), L.ZERO = new L(kt, yt, yt, kt);
  const { BASE: X, ZERO: P } = L, J = nf(L, a * 8);
  function K(z) {
    return ze(z, n);
  }
  function re(z) {
    return K(Pn(z));
  }
  function ae(z) {
    const j = a;
    z = bt("private key", z, j);
    const ee = bt("hashed private key", s(z), 2 * j), le = S(ee.slice(0, j)), we = ee.slice(j, 2 * j), se = re(le), Z = X.multiply(se), ue = Z.toRawBytes();
    return { head: le, prefix: we, scalar: se, point: Z, pointBytes: ue };
  }
  function te(z) {
    return ae(z).pointBytes;
  }
  function pe(z = new Uint8Array(), ...j) {
    const ee = Qe(...j);
    return re(s(m(ee, bt("context", z), !!i)));
  }
  function de(z, j, ee = {}) {
    z = bt("message", z), i && (z = i(z));
    const { prefix: le, scalar: we, pointBytes: se } = ae(j), Z = pe(ee.context, le, z), ue = X.multiply(Z).toRawBytes(), w = pe(ee.context, ue, se, z), ie = K(Z + w * we);
    Sr("signature.s", ie, kt, n);
    const he = Qe(ue, Xi(ie, r.BYTES));
    return bt("result", he, a * 2);
  }
  const R = cp;
  function C(z, j, ee, le = R) {
    const { context: we, zip215: se } = le, Z = r.BYTES;
    z = bt("signature", z, 2 * Z), j = bt("message", j), se !== void 0 && Fn("zip215", se), i && (j = i(j));
    const ue = Pn(z.slice(Z, 2 * Z));
    let w, ie, he;
    try {
      w = L.fromHex(ee, se), ie = L.fromHex(z.slice(0, Z), se), he = X.multiplyUnsafe(ue);
    } catch {
      return !1;
    }
    if (!se && w.isSmallOrder())
      return !1;
    const Te = pe(we, ie.toRawBytes(), w.toRawBytes(), j);
    return ie.add(w.multiplyUnsafe(Te)).subtract(he).clearCofactor().equals(L.ZERO);
  }
  return X._setWindowSize(8), {
    CURVE: e,
    getPublicKey: te,
    sign: de,
    verify: C,
    ExtendedPoint: L,
    utils: {
      getExtendedPublicKey: ae,
      // ed25519 private keys are uniform 32b. No need to check for modulo bias, like in secp256k1.
      randomPrivateKey: () => c(r.BYTES),
      /**
       * We're doing scalar multiplication (used in getPublicKey etc) with precomputed BASE_POINT
       * values. This slows down first getPublicKey() by milliseconds (see Speed section),
       * but allows to speed-up subsequent getPublicKey() calls up to 20x.
       * @param windowSize 2, 4, 8, 16
       */
      precompute(z = 8, j = L.BASE) {
        return j._setWindowSize(z), j.multiply(BigInt(3)), j;
      }
    }
  };
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const zo = BigInt("57896044618658097711785492504343953926634992332820282019728792003956564819949"), qa = /* @__PURE__ */ BigInt("19681161376707505956807079304988542015446066515923890162744021073123829784752");
BigInt(0);
const lp = BigInt(1), Ha = BigInt(2);
BigInt(3);
const hp = BigInt(5), dp = BigInt(8);
function pp(t) {
  const e = BigInt(10), r = BigInt(20), n = BigInt(40), i = BigInt(80), s = zo, a = t * t % s * t % s, p = Zt(a, Ha, s) * a % s, g = Zt(p, lp, s) * t % s, b = Zt(g, hp, s) * g % s, T = Zt(b, e, s) * b % s, N = Zt(T, r, s) * T % s, S = Zt(N, n, s) * N % s, m = Zt(S, i, s) * S % s, I = Zt(m, i, s) * S % s, U = Zt(I, e, s) * b % s;
  return { pow_p_5_8: Zt(U, Ha, s) * t % s, b2: a };
}
function mp(t) {
  return t[0] &= 248, t[31] &= 127, t[31] |= 64, t;
}
function gp(t, e) {
  const r = zo, n = ze(e * e * e, r), i = ze(n * n * e, r), s = pp(t * i).pow_p_5_8;
  let c = ze(t * n * s, r);
  const a = ze(e * c * c, r), p = c, g = ze(c * qa, r), b = a === t, T = a === ze(-t, r), N = a === ze(-t * qa, r);
  return b && (c = p), (T || N) && (c = g), sd(c, r) && (c = ze(-c, r)), { isValid: b || T, value: c };
}
const yp = Kn(zo, void 0, !0), wp = {
  // Param: a
  a: BigInt(-1),
  // Fp.create(-1) is proper; our way still works and is faster
  // d is equal to -121665/121666 over finite field.
  // Negative number is P - number, and division is invert(number, P)
  d: BigInt("37095705934669439343138083508754565189542113879843219016388785533085940283555"),
  // Finite field 𝔽p over which we'll do calculations; 2n**255n - 19n
  Fp: yp,
  // Subgroup order: how many points curve has
  // 2n**252n + 27742317777372353535851937790883648493n;
  n: BigInt("7237005577332262213973186563042994240857116359379907606001950938285454250989"),
  // Cofactor
  h: dp,
  // Base point (x, y) aka generator point
  Gx: BigInt("15112221349535400772501151409588531511454012693041857206046113283949847762202"),
  Gy: BigInt("46316835694926478169428394003475163141307993866256225615783033603165251855960"),
  hash: op,
  randomBytes: Pc,
  adjustScalarBytes: mp,
  // dom2
  // Ratio of u to v. Allows us to combine inversion and square root. Uses algo from RFC8032 5.1.3.
  // Constant-time, u/√v
  uvRatio: gp
}, bp = fp(wp);
var Va = function(t, e, r, n, i) {
  if (n === "m") throw new TypeError("Private method is not writable");
  if (n === "a" && !i) throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? t !== e || !i : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return n === "a" ? i.call(t, r) : i ? i.value = r : e.set(t, r), r;
}, ht = function(t, e, r, n) {
  if (r === "a" && !n) throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? t !== e || !n : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? n : r === "a" ? n.call(t) : n ? n.value : e.get(t);
}, ut, Nn, pf, mf;
class _p {
  /**
   * Create a new ExpirableMap.
   * @param {ExpirableMapOptions<any, any>} options - options for the map.
   * @param {Iterable<[any, any]>} options.source - an optional source of entries to initialize the map with.
   * @param {number} options.expirationTime - the time in milliseconds after which entries will expire.
   */
  constructor(e = {}) {
    ut.set(this, void 0), Nn.set(this, void 0), this[pf] = this.entries.bind(this), this[mf] = "ExpirableMap";
    const { source: r = [], expirationTime: n = 10 * 60 * 1e3 } = e, i = Date.now();
    Va(this, ut, new Map([...r].map(([s, c]) => [s, { value: c, timestamp: i }])), "f"), Va(this, Nn, n, "f");
  }
  /**
   * Prune removes all expired entries.
   */
  prune() {
    const e = Date.now();
    for (const [r, n] of ht(this, ut, "f").entries())
      e - n.timestamp > ht(this, Nn, "f") && ht(this, ut, "f").delete(r);
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
    return ht(this, ut, "f").set(e, n), this;
  }
  /**
   * Get the value associated with the key, if it exists and has not expired.
   * @param key K
   * @returns the value associated with the key, or undefined if the key is not present or has expired.
   */
  get(e) {
    const r = ht(this, ut, "f").get(e);
    if (r !== void 0) {
      if (Date.now() - r.timestamp > ht(this, Nn, "f")) {
        ht(this, ut, "f").delete(e);
        return;
      }
      return r.value;
    }
  }
  /**
   * Clear all entries.
   */
  clear() {
    ht(this, ut, "f").clear();
  }
  /**
   * Entries returns the entries of the map, without the expiration time.
   * @returns an iterator over the entries of the map.
   */
  entries() {
    const e = ht(this, ut, "f").entries();
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
    const e = ht(this, ut, "f").values();
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
    return ht(this, ut, "f").keys();
  }
  /**
   * forEach calls the callbackfn on each entry of the map.
   * @param callbackfn to call on each entry
   * @param thisArg to use as this when calling the callbackfn
   */
  forEach(e, r) {
    for (const [n, i] of ht(this, ut, "f").entries())
      e.call(r, i.value, n, this);
  }
  /**
   * has returns true if the key exists and has not expired.
   * @param key K
   * @returns true if the key exists and has not expired.
   */
  has(e) {
    return ht(this, ut, "f").has(e);
  }
  /**
   * delete the entry for the given key.
   * @param key K
   * @returns true if the key existed and has been deleted.
   */
  delete(e) {
    return ht(this, ut, "f").delete(e);
  }
  /**
   * get size of the map.
   * @returns the size of the map.
   */
  get size() {
    return ht(this, ut, "f").size;
  }
}
ut = /* @__PURE__ */ new WeakMap(), Nn = /* @__PURE__ */ new WeakMap(), pf = Symbol.iterator, mf = Symbol.toStringTag;
const La = (t) => {
  if (t <= 127)
    return 1;
  if (t <= 255)
    return 2;
  if (t <= 65535)
    return 3;
  if (t <= 16777215)
    return 4;
  throw new Error("Length too long (> 4 bytes)");
}, Ga = (t, e, r) => {
  if (r <= 127)
    return t[e] = r, 1;
  if (r <= 255)
    return t[e] = 129, t[e + 1] = r, 2;
  if (r <= 65535)
    return t[e] = 130, t[e + 1] = r >> 8, t[e + 2] = r, 3;
  if (r <= 16777215)
    return t[e] = 131, t[e + 1] = r >> 16, t[e + 2] = r >> 8, t[e + 3] = r, 4;
  throw new Error("Length too long (> 4 bytes)");
}, bo = (t, e) => {
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
}, xp = (t, e) => {
  const r = bo(t, e);
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
const ja = Uint8Array.from([
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
function Ep(t, e) {
  const r = 2 + La(t.byteLength + 1), n = e.byteLength + r + t.byteLength;
  let i = 0;
  const s = new Uint8Array(1 + La(n) + n);
  return s[i++] = 48, i += Ga(s, i, n), s.set(e, i), i += e.byteLength, s[i++] = 3, i += Ga(s, i, t.byteLength + 1), s[i++] = 0, s.set(new Uint8Array(t), i), s;
}
const Tp = (t, e) => {
  let r = 0;
  const n = (a, p) => {
    if (i[r++] !== a)
      throw new Error("Expected: " + p);
  }, i = new Uint8Array(t);
  if (n(48, "sequence"), r += bo(i, r), !Fo(i.slice(r, r + e.byteLength), e))
    throw new Error("Not the expected OID.");
  r += e.byteLength, n(3, "bit string");
  const s = xp(i, r) - 1;
  r += bo(i, r), n(0, "0 padding");
  const c = i.slice(r);
  if (s !== c.length)
    throw new Error(`DER payload mismatch: Expected length ${s} actual length ${c.length}`);
  return c;
};
var za = function(t, e, r, n, i) {
  if (n === "m") throw new TypeError("Private method is not writable");
  if (n === "a" && !i) throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? t !== e || !i : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return n === "a" ? i.call(t, r) : i ? i.value = r : e.set(t, r), r;
}, Wa = function(t, e, r, n) {
  if (r === "a" && !n) throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? t !== e || !n : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? n : r === "a" ? n.call(t) : n ? n.value : e.get(t);
}, Oi, Ii;
class $r {
  // `fromRaw` and `fromDer` should be used for instantiation, not this constructor.
  constructor(e) {
    if (Oi.set(this, void 0), Ii.set(this, void 0), e.byteLength !== $r.RAW_KEY_LENGTH)
      throw new Error("An Ed25519 public key must be exactly 32bytes long");
    za(this, Oi, e, "f"), za(this, Ii, $r.derEncode(e), "f");
  }
  static from(e) {
    return this.fromDer(e.toDer());
  }
  static fromRaw(e) {
    return new $r(e);
  }
  static fromDer(e) {
    return new $r(this.derDecode(e));
  }
  static derEncode(e) {
    return Ep(e, ja).buffer;
  }
  static derDecode(e) {
    const r = Tp(e, ja);
    if (r.length !== this.RAW_KEY_LENGTH)
      throw new Error("An Ed25519 public key must be exactly 32bytes long");
    return r;
  }
  get rawKey() {
    return Wa(this, Oi, "f");
  }
  get derKey() {
    return Wa(this, Ii, "f");
  }
  toDer() {
    return this.derKey;
  }
  toRaw() {
    return this.rawKey;
  }
}
Oi = /* @__PURE__ */ new WeakMap(), Ii = /* @__PURE__ */ new WeakMap();
$r.RAW_KEY_LENGTH = 32;
class Ap {
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
class Sp extends Ap {
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
var Kt = function(t, e, r, n, i) {
  if (n === "m") throw new TypeError("Private method is not writable");
  if (n === "a" && !i) throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? t !== e || !i : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return n === "a" ? i.call(t, r) : i ? i.value = r : e.set(t, r), r;
}, ct = function(t, e, r, n) {
  if (r === "a" && !n) throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? t !== e || !n : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? n : r === "a" ? n.call(t) : n ? n.value : e.get(t);
}, Xt, Ui, Fi, Pi, Ci, Mi, ki, $i, nn;
const gf = 0.5, yf = 1.5, wf = 500, bf = 6e4, _f = 9e5, xf = 10;
class ms {
  constructor(e = ms.default) {
    Xt.set(this, void 0), Ui.set(this, void 0), Fi.set(this, void 0), Pi.set(this, void 0), Ci.set(this, void 0), Mi.set(this, void 0), ki.set(this, void 0), $i.set(this, void 0), nn.set(this, 0);
    const { initialInterval: r = wf, randomizationFactor: n = gf, multiplier: i = yf, maxInterval: s = bf, maxElapsedTime: c = _f, maxIterations: a = xf, date: p = Date } = e;
    Kt(this, Xt, r, "f"), Kt(this, Ui, n, "f"), Kt(this, Fi, i, "f"), Kt(this, Pi, s, "f"), Kt(this, $i, p, "f"), Kt(this, Ci, p.now(), "f"), Kt(this, Mi, c, "f"), Kt(this, ki, a, "f");
  }
  get ellapsedTimeInMsec() {
    return ct(this, $i, "f").now() - ct(this, Ci, "f");
  }
  get currentInterval() {
    return ct(this, Xt, "f");
  }
  get count() {
    return ct(this, nn, "f");
  }
  get randomValueFromInterval() {
    const e = ct(this, Ui, "f") * ct(this, Xt, "f"), r = ct(this, Xt, "f") - e, n = ct(this, Xt, "f") + e;
    return Math.random() * (n - r) + r;
  }
  incrementCurrentInterval() {
    var e;
    return Kt(this, Xt, Math.min(ct(this, Xt, "f") * ct(this, Fi, "f"), ct(this, Pi, "f")), "f"), Kt(this, nn, (e = ct(this, nn, "f"), e++, e), "f"), ct(this, Xt, "f");
  }
  next() {
    return this.ellapsedTimeInMsec >= ct(this, Mi, "f") || ct(this, nn, "f") >= ct(this, ki, "f") ? null : (this.incrementCurrentInterval(), this.randomValueFromInterval);
  }
}
Xt = /* @__PURE__ */ new WeakMap(), Ui = /* @__PURE__ */ new WeakMap(), Fi = /* @__PURE__ */ new WeakMap(), Pi = /* @__PURE__ */ new WeakMap(), Ci = /* @__PURE__ */ new WeakMap(), Mi = /* @__PURE__ */ new WeakMap(), ki = /* @__PURE__ */ new WeakMap(), $i = /* @__PURE__ */ new WeakMap(), nn = /* @__PURE__ */ new WeakMap();
ms.default = {
  initialInterval: wf,
  randomizationFactor: gf,
  multiplier: yf,
  maxInterval: bf,
  // 1 minute
  maxElapsedTime: _f,
  maxIterations: xf,
  date: Date
};
const Ef = 5 * 60 * 1e3;
var dt = function(t, e, r, n, i) {
  if (n === "m") throw new TypeError("Private method is not writable");
  if (n === "a" && !i) throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? t !== e || !i : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return n === "a" ? i.call(t, r) : i ? i.value = r : e.set(t, r), r;
}, ye = function(t, e, r, n) {
  if (r === "a" && !n) throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? t !== e || !n : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? n : r === "a" ? n.call(t) : n ? n.value : e.get(t);
}, nr, Jt, Ar, un, Rn, On, qt, qi, Vt, Ir, Ur, In, sn, on, Fr, Mr, Tf, Hi, Vi, ar;
(function(t) {
  t.Received = "received", t.Processing = "processing", t.Replied = "replied", t.Rejected = "rejected", t.Unknown = "unknown", t.Done = "done";
})(ar || (ar = {}));
const mi = 60 * 1e3, Bp = "308182301d060d2b0601040182dc7c0503010201060c2b0601040182dc7c05030201036100814c0e6ec71fab583b08bd81373c255c3c371b2e84863c98a4f1e08b74235d14fb5d9c0cd546d9685f913a0c0b2cc5341583bf4b4392e467db96d65b9bb4cb717112f8472e0d5a4d14505ffd7484b01291091c5f87b98883463f98091a0baaae", vp = "aaaaa-aa", Np = "ic0.app", Rp = ".ic0.app", Op = "icp0.io", Ip = ".icp0.io", Up = "icp-api.io", Fp = ".icp-api.io";
class Ls extends tt {
  constructor(e) {
    super(e), this.message = e;
  }
}
class gi extends tt {
  constructor(e) {
    super(e), this.message = e;
  }
}
function Pp() {
  let t;
  if (typeof window < "u")
    if (window.fetch)
      t = window.fetch.bind(window);
    else
      throw new Ls("Fetch implementation was not available. You appear to be in a browser context, but window.fetch was not present.");
  else if (typeof global < "u")
    if (global.fetch)
      t = global.fetch.bind(global);
    else
      throw new Ls("Fetch implementation was not available. You appear to be in a Node.js context, but global.fetch was not available.");
  else typeof self < "u" && self.fetch && (t = self.fetch.bind(self));
  if (t)
    return t;
  throw new Ls("Fetch implementation was not available. Please provide fetch to the HttpAgent constructor, or ensure it is available in the window or global context.");
}
function Cp(t) {
  let e;
  if (t !== void 0)
    !t.match(/^[a-z]+:/) && typeof window < "u" ? e = new URL(window.location.protocol + "//" + t) : e = new URL(t);
  else {
    const r = ["ic0.app", "icp0.io", "127.0.0.1", "localhost"], n = [".github.dev", ".gitpod.io"], i = typeof window < "u" ? window.location : void 0, s = i == null ? void 0 : i.hostname;
    let c;
    s && typeof s == "string" && (n.some((a) => s.endsWith(a)) ? c = s : c = r.find((a) => s.endsWith(a))), i && c ? e = new URL(`${i.protocol}//${c}${i.port ? ":" + i.port : ""}`) : e = new URL("https://icp-api.io");
  }
  return e.toString();
}
class Vr {
  /**
   * @param options - Options for the HttpAgent
   * @deprecated Use `HttpAgent.create` or `HttpAgent.createSync` instead
   */
  constructor(e = {}) {
    var r;
    nr.add(this), Jt.set(this, void 0), Ar.set(this, void 0), un.set(this, void 0), Rn.set(this, void 0), On.set(this, 0), qt.set(this, void 0), qi.set(this, !1), Vt.set(this, void 0), Ir.set(this, void 0), Ur.set(this, void 0), this._isAgent = !0, this.config = {}, In.set(this, 0), this.log = new Sp(), sn.set(this, []), on.set(this, []), Fr.set(this, new _p({
      expirationTime: 5 * 60 * 1e3
      // 5 minutes
    })), Mr.set(this, !0), Vi.set(this, (s, c) => {
      if (ye(this, Mr, "f") === !1)
        return s;
      if (!c)
        throw new er("Invalid signature from replica signed query: no matching node key found.");
      const { status: a, signatures: p = [], requestId: g } = s, b = new TextEncoder().encode("\vic-response");
      for (const T of p) {
        const { timestamp: N, identity: S } = T, m = Me.fromUint8Array(S).toText();
        let I;
        if (a === "replied") {
          const { reply: X } = s;
          I = Ki({
            status: a,
            reply: X,
            timestamp: BigInt(N),
            request_id: g
          });
        } else if (a === "rejected") {
          const { reject_code: X, reject_message: P, error_code: J } = s;
          I = Ki({
            status: a,
            reject_code: X,
            reject_message: P,
            error_code: J,
            timestamp: BigInt(N),
            request_id: g
          });
        } else
          throw new Error(`Unknown status: ${a}`);
        const U = ir(b, new Uint8Array(I)), H = c == null ? void 0 : c.nodeKeys.get(m);
        if (!H)
          throw new er("Invalid signature from replica signed query: no matching node key found.");
        const V = $r.fromDer(H).rawKey;
        if (bp.verify(T.signature, new Uint8Array(U), new Uint8Array(V)))
          return s;
        throw new er(`Invalid signature from replica ${m} signed query.`);
      }
      return s;
    }), this.config = e, dt(this, Ar, e.fetch || Pp() || fetch.bind(global), "f"), dt(this, un, e.fetchOptions, "f"), dt(this, Rn, e.callOptions, "f"), this.rootKey = e.rootKey ? e.rootKey : Wi(Bp);
    const n = Cp(e.host);
    this.host = new URL(n), e.verifyQuerySignatures !== void 0 && dt(this, Mr, e.verifyQuerySignatures, "f"), dt(this, Vt, (r = e.retryTimes) !== null && r !== void 0 ? r : 3, "f");
    const i = () => new ms({
      maxIterations: ye(this, Vt, "f")
    });
    if (dt(this, Ir, e.backoffStrategy || i, "f"), this.host.hostname.endsWith(Rp) ? this.host.hostname = Np : this.host.hostname.endsWith(Ip) ? this.host.hostname = Op : this.host.hostname.endsWith(Fp) && (this.host.hostname = Up), e.credentials) {
      const { name: s, password: c } = e.credentials;
      dt(this, qt, `${s}${c ? ":" + c : ""}`, "f");
    }
    if (dt(this, Jt, Promise.resolve(e.identity || new Oh()), "f"), e.ingressExpiryInMinutes && e.ingressExpiryInMinutes > 5)
      throw new tt(`The maximum ingress expiry time is 5 minutes. Provided ingress expiry time is ${e.ingressExpiryInMinutes} minutes.`);
    if (e.ingressExpiryInMinutes && e.ingressExpiryInMinutes <= 0)
      throw new tt(`Ingress expiry time must be greater than 0. Provided ingress expiry time is ${e.ingressExpiryInMinutes} minutes.`);
    dt(this, Ur, e.ingressExpiryInMinutes || 5, "f"), this.addTransform("update", xa(ho)), e.useQueryNonces && this.addTransform("query", xa(ho)), e.logToConsole && this.log.subscribe((s) => {
      s.level === "error" ? console.error(s.message) : s.level === "warn" ? console.warn(s.message) : console.log(s.message);
    });
  }
  get waterMark() {
    return ye(this, In, "f");
  }
  static createSync(e = {}) {
    return new this(Object.assign({}, e));
  }
  static async create(e = {
    shouldFetchRootKey: !1
  }) {
    const r = Vr.createSync(e), n = [r.syncTime()];
    return r.host.toString() !== "https://icp-api.io" && e.shouldFetchRootKey && n.push(r.fetchRootKey()), await Promise.all(n), r;
  }
  static async from(e) {
    var r;
    try {
      return "config" in e ? await Vr.create(e.config) : await Vr.create({
        fetch: e._fetch,
        fetchOptions: e._fetchOptions,
        callOptions: e._callOptions,
        host: e._host.toString(),
        identity: (r = e._identity) !== null && r !== void 0 ? r : void 0
      });
    } catch {
      throw new tt("Failed to create agent from provided agent");
    }
  }
  isLocal() {
    const e = this.host.hostname;
    return e === "127.0.0.1" || e.endsWith("127.0.0.1");
  }
  addTransform(e, r, n = r.priority || 0) {
    if (e === "update") {
      const i = ye(this, on, "f").findIndex((s) => (s.priority || 0) < n);
      ye(this, on, "f").splice(i >= 0 ? i : ye(this, on, "f").length, 0, Object.assign(r, { priority: n }));
    } else if (e === "query") {
      const i = ye(this, sn, "f").findIndex((s) => (s.priority || 0) < n);
      ye(this, sn, "f").splice(i >= 0 ? i : ye(this, sn, "f").length, 0, Object.assign(r, { priority: n }));
    }
  }
  async getPrincipal() {
    if (!ye(this, Jt, "f"))
      throw new gi("This identity has expired due this application's security policy. Please refresh your authentication.");
    return (await ye(this, Jt, "f")).getPrincipal();
  }
  async call(e, r, n) {
    var i;
    const s = (i = r.callSync) !== null && i !== void 0 ? i : !0, c = await (n !== void 0 ? await n : await ye(this, Jt, "f"));
    if (!c)
      throw new gi("This identity has expired due this application's security policy. Please refresh your authentication.");
    const a = Me.from(e), p = r.effectiveCanisterId ? Me.from(r.effectiveCanisterId) : a, g = c.getPrincipal() || Me.anonymous();
    let b = new rn(ye(this, Ur, "f") * mi);
    Math.abs(ye(this, On, "f")) > 1e3 * 30 && (b = new rn(ye(this, Ur, "f") * mi + ye(this, On, "f")));
    const T = {
      request_type: lo.Call,
      canister_id: a,
      method_name: r.methodName,
      arg: r.arg,
      sender: g,
      ingress_expiry: b
    };
    let N = await this._transform({
      request: {
        body: null,
        method: "POST",
        headers: Object.assign({ "Content-Type": "application/cbor" }, ye(this, qt, "f") ? { Authorization: "Basic " + btoa(ye(this, qt, "f")) } : {})
      },
      endpoint: "call",
      body: T
    });
    const S = N.body.nonce ? m(N.body.nonce) : void 0;
    T.nonce = S;
    function m(H) {
      return new Uint8Array(H);
    }
    N = await c.transformRequest(N);
    const I = Ps(N.body), U = ye(this, Ir, "f").call(this);
    try {
      const H = () => (this.log.print(`fetching "/api/v3/canister/${p.toText()}/call" with request:`, N), ye(this, Ar, "f").call(this, "" + new URL(`/api/v3/canister/${p.toText()}/call`, this.host), Object.assign(Object.assign(Object.assign({}, ye(this, Rn, "f")), N.request), { body: I }))), V = () => (this.log.print(`fetching "/api/v2/canister/${p.toText()}/call" with request:`, N), ye(this, Ar, "f").call(this, "" + new URL(`/api/v2/canister/${p.toText()}/call`, this.host), Object.assign(Object.assign(Object.assign({}, ye(this, Rn, "f")), N.request), { body: I }))), L = ye(this, nr, "m", Hi).call(this, {
        request: s ? H : V,
        backoff: U,
        tries: 0
      }), [X, P] = await Promise.all([L, wa(T)]), J = await X.arrayBuffer(), K = X.status === 200 && J.byteLength > 0 ? lr(J) : null;
      if (K && "certificate" in K) {
        const re = await this.parseTimeFromResponse({
          certificate: K.certificate
        });
        dt(this, In, re, "f");
      }
      return {
        requestId: P,
        response: {
          ok: X.ok,
          status: X.status,
          statusText: X.statusText,
          body: K,
          headers: Bn(X.headers)
        },
        requestDetails: T
      };
    } catch (H) {
      if (H.message.includes("v3 api not supported."))
        return this.log.warn("v3 api not supported. Fall back to v2"), this.call(e, Object.assign(Object.assign({}, r), {
          // disable v3 api
          callSync: !1
        }), n);
      throw this.log.error("Error while making call:", H), H;
    }
  }
  async query(e, r, n) {
    const i = ye(this, Ir, "f").call(this), s = r.effectiveCanisterId ? Me.from(r.effectiveCanisterId) : Me.from(e);
    this.log.print(`ecid ${s.toString()}`), this.log.print(`canisterId ${e.toString()}`);
    const c = async () => {
      const S = await (n !== void 0 ? n : ye(this, Jt, "f"));
      if (!S)
        throw new gi("This identity has expired due this application's security policy. Please refresh your authentication.");
      const m = Me.from(e), I = (S == null ? void 0 : S.getPrincipal()) || Me.anonymous(), U = {
        request_type: "query",
        canister_id: m,
        method_name: r.methodName,
        arg: r.arg,
        sender: I,
        ingress_expiry: new rn(ye(this, Ur, "f") * mi)
      }, H = await wa(U);
      let V = await this._transform({
        request: {
          method: "POST",
          headers: Object.assign({ "Content-Type": "application/cbor" }, ye(this, qt, "f") ? { Authorization: "Basic " + btoa(ye(this, qt, "f")) } : {})
        },
        endpoint: "read",
        body: U
      });
      V = await (S == null ? void 0 : S.transformRequest(V));
      const L = Ps(V.body), X = {
        canister: m.toText(),
        ecid: s,
        transformedRequest: V,
        body: L,
        requestId: H,
        backoff: i,
        tries: 0
      };
      return {
        requestDetails: U,
        query: await ye(this, nr, "m", Tf).call(this, X)
      };
    }, a = async () => {
      if (!ye(this, Mr, "f"))
        return;
      const S = ye(this, Fr, "f").get(s.toString());
      return S || (await this.fetchSubnetKeys(s.toString()), ye(this, Fr, "f").get(s.toString()));
    }, [p, g] = await Promise.all([c(), a()]), { requestDetails: b, query: T } = p, N = Object.assign(Object.assign({}, T), { requestDetails: b });
    if (this.log.print("Query response:", N), !ye(this, Mr, "f"))
      return N;
    try {
      return ye(this, Vi, "f").call(this, N, g);
    } catch {
      this.log.warn("Query response verification failed. Retrying with fresh subnet keys."), ye(this, Fr, "f").delete(e.toString()), await this.fetchSubnetKeys(s.toString());
      const m = ye(this, Fr, "f").get(e.toString());
      if (!m)
        throw new er("Invalid signature from replica signed query: no matching node key found.");
      return ye(this, Vi, "f").call(this, N, m);
    }
  }
  async createReadStateRequest(e, r) {
    const n = await (r !== void 0 ? await r : await ye(this, Jt, "f"));
    if (!n)
      throw new gi("This identity has expired due this application's security policy. Please refresh your authentication.");
    const i = (n == null ? void 0 : n.getPrincipal()) || Me.anonymous(), s = await this._transform({
      request: {
        method: "POST",
        headers: Object.assign({ "Content-Type": "application/cbor" }, ye(this, qt, "f") ? { Authorization: "Basic " + btoa(ye(this, qt, "f")) } : {})
      },
      endpoint: "read_state",
      body: {
        request_type: "read_state",
        paths: e.paths,
        sender: i,
        ingress_expiry: new rn(ye(this, Ur, "f") * mi)
      }
    });
    return n == null ? void 0 : n.transformRequest(s);
  }
  async readState(e, r, n, i) {
    const s = typeof e == "string" ? Me.fromText(e) : e, c = i ?? await this.createReadStateRequest(r, n), a = Object.assign(Object.assign({}, c.body), { ingress_expiry: new rn(Ef) }), p = Ps(a);
    this.log.print(`fetching "/api/v2/canister/${s}/read_state" with request:`, c);
    const g = ye(this, Ir, "f").call(this);
    try {
      const b = await ye(this, nr, "m", Hi).call(this, {
        request: () => ye(this, Ar, "f").call(this, "" + new URL(`/api/v2/canister/${s.toString()}/read_state`, this.host), Object.assign(Object.assign(Object.assign({}, ye(this, un, "f")), c.request), { body: p })),
        backoff: g,
        tries: 0
      });
      if (!b.ok)
        throw new Error(`Server returned an error:
  Code: ${b.status} (${b.statusText})
  Body: ${await b.text()}
`);
      const T = lr(await b.arrayBuffer());
      this.log.print("Read state response:", T);
      const N = await this.parseTimeFromResponse(T);
      return N > 0 && (this.log.print("Read state response time:", N), dt(this, In, N, "f")), T;
    } catch (b) {
      throw this.log.error("Caught exception while attempting to read state", b), b;
    }
  }
  async parseTimeFromResponse(e) {
    let r;
    if (e.certificate) {
      const n = lr(e.certificate);
      if (n && "tree" in n)
        r = n.tree;
      else
        throw new Error("Could not decode time from response");
      const i = dn(["time"], r);
      if (i.status !== et.Found)
        throw new Error("Time was not found in the response or was not in its expected format.");
      if (!(i.value instanceof ArrayBuffer) && !ArrayBuffer.isView(i))
        throw new Error("Time was not found in the response or was not in its expected format.");
      const s = jo($c(i.value));
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
    const r = await Promise.resolve().then(() => Cd), n = Date.now();
    try {
      e || this.log.print("Syncing time with the IC. No canisterId provided, so falling back to ryjl3-tyaaa-aaaaa-aaaba-cai");
      const s = (await r.request({
        // Fall back with canisterId of the ICP Ledger
        canisterId: e ?? Me.from("ryjl3-tyaaa-aaaaa-aaaba-cai"),
        agent: this,
        paths: ["time"]
      })).get("time");
      s && dt(this, On, Number(s) - Number(n), "f");
    } catch (i) {
      this.log.error("Caught exception while attempting to sync time", i);
    }
  }
  async status() {
    const e = ye(this, qt, "f") ? {
      Authorization: "Basic " + btoa(ye(this, qt, "f"))
    } : {};
    this.log.print('fetching "/api/v2/status"');
    const r = ye(this, Ir, "f").call(this), n = await ye(this, nr, "m", Hi).call(this, {
      backoff: r,
      request: () => ye(this, Ar, "f").call(this, "" + new URL("/api/v2/status", this.host), Object.assign({ headers: e }, ye(this, un, "f"))),
      tries: 0
    });
    return lr(await n.arrayBuffer());
  }
  async fetchRootKey() {
    if (!ye(this, qi, "f")) {
      const e = await this.status();
      this.rootKey = e.root_key, dt(this, qi, !0, "f");
    }
    return this.rootKey;
  }
  invalidateIdentity() {
    dt(this, Jt, null, "f");
  }
  replaceIdentity(e) {
    dt(this, Jt, Promise.resolve(e), "f");
  }
  async fetchSubnetKeys(e) {
    const r = Me.from(e), i = (await ff({
      canisterId: r,
      paths: ["subnet"],
      agent: this
    })).get("subnet");
    if (i && typeof i == "object" && "nodeKeys" in i)
      return ye(this, Fr, "f").set(r.toText(), i), i;
  }
  _transform(e) {
    let r = Promise.resolve(e);
    if (e.endpoint === "call")
      for (const n of ye(this, on, "f"))
        r = r.then((i) => n(i).then((s) => s || i));
    else
      for (const n of ye(this, sn, "f"))
        r = r.then((i) => n(i).then((s) => s || i));
    return r;
  }
}
Jt = /* @__PURE__ */ new WeakMap(), Ar = /* @__PURE__ */ new WeakMap(), un = /* @__PURE__ */ new WeakMap(), Rn = /* @__PURE__ */ new WeakMap(), On = /* @__PURE__ */ new WeakMap(), qt = /* @__PURE__ */ new WeakMap(), qi = /* @__PURE__ */ new WeakMap(), Vt = /* @__PURE__ */ new WeakMap(), Ir = /* @__PURE__ */ new WeakMap(), Ur = /* @__PURE__ */ new WeakMap(), In = /* @__PURE__ */ new WeakMap(), sn = /* @__PURE__ */ new WeakMap(), on = /* @__PURE__ */ new WeakMap(), Fr = /* @__PURE__ */ new WeakMap(), Mr = /* @__PURE__ */ new WeakMap(), Vi = /* @__PURE__ */ new WeakMap(), nr = /* @__PURE__ */ new WeakSet(), Tf = async function t(e) {
  var r, n;
  const { ecid: i, transformedRequest: s, body: c, requestId: a, backoff: p, tries: g } = e, b = g === 0 ? 0 : p.next();
  if (this.log.print(`fetching "/api/v2/canister/${i.toString()}/query" with tries:`, {
    tries: g,
    backoff: p,
    delay: b
  }), b === null)
    throw new tt(`Timestamp failed to pass the watermark after retrying the configured ${ye(this, Vt, "f")} times. We cannot guarantee the integrity of the response since it could be a replay attack.`);
  b > 0 && await new Promise((m) => setTimeout(m, b));
  let T;
  try {
    this.log.print(`fetching "/api/v2/canister/${i.toString()}/query" with request:`, s);
    const m = await ye(this, Ar, "f").call(this, "" + new URL(`/api/v2/canister/${i.toString()}/query`, this.host), Object.assign(Object.assign(Object.assign({}, ye(this, un, "f")), s.request), { body: c }));
    if (m.status === 200) {
      const I = lr(await m.arrayBuffer());
      T = Object.assign(Object.assign({}, I), { httpDetails: {
        ok: m.ok,
        status: m.status,
        statusText: m.statusText,
        headers: Bn(m.headers)
      }, requestId: a });
    } else
      throw new Cs(`Gateway returned an error:
  Code: ${m.status} (${m.statusText})
  Body: ${await m.text()}
`, {
        ok: m.ok,
        status: m.status,
        statusText: m.statusText,
        headers: Bn(m.headers)
      });
  } catch (m) {
    if (g < ye(this, Vt, "f"))
      return this.log.warn(`Caught exception while attempting to make query:
  ${m}
  Retrying query.`), await ye(this, nr, "m", t).call(this, Object.assign(Object.assign({}, e), { tries: g + 1 }));
    throw m;
  }
  const N = (n = (r = T.signatures) === null || r === void 0 ? void 0 : r[0]) === null || n === void 0 ? void 0 : n.timestamp;
  if (!ye(this, Mr, "f"))
    return T;
  if (!N)
    throw new Error("Timestamp not found in query response. This suggests a malformed or malicious response.");
  const S = Number(BigInt(N) / BigInt(1e6));
  if (this.log.print("watermark and timestamp", {
    waterMark: this.waterMark,
    timestamp: S
  }), Number(this.waterMark) > S) {
    const m = new tt("Timestamp is below the watermark. Retrying query.");
    if (this.log.error("Timestamp is below", m, {
      timestamp: N,
      waterMark: this.waterMark
    }), g < ye(this, Vt, "f"))
      return await ye(this, nr, "m", t).call(this, Object.assign(Object.assign({}, e), { tries: g + 1 }));
    throw new tt(`Timestamp failed to pass the watermark after retrying the configured ${ye(this, Vt, "f")} times. We cannot guarantee the integrity of the response since it could be a replay attack.`);
  }
  return T;
}, Hi = async function t(e) {
  const { request: r, backoff: n, tries: i } = e, s = i === 0 ? 0 : n.next();
  if (s === null)
    throw new tt(`Timestamp failed to pass the watermark after retrying the configured ${ye(this, Vt, "f")} times. We cannot guarantee the integrity of the response since it could be a replay attack.`);
  s > 0 && await new Promise((g) => setTimeout(g, s));
  let c;
  try {
    c = await r();
  } catch (g) {
    if (ye(this, Vt, "f") > i)
      return this.log.warn(`Caught exception while attempting to make request:
  ${g}
  Retrying request.`), await ye(this, nr, "m", t).call(this, { request: r, backoff: n, tries: i + 1 });
    throw g;
  }
  if (c.ok)
    return c;
  const a = await c.clone().text(), p = `Server returned an error:
  Code: ${c.status} (${c.statusText})
  Body: ${a}
`;
  if (c.status === 404 && c.url.includes("api/v3"))
    throw new Cs("v3 api not supported. Fall back to v2", {
      ok: c.ok,
      status: c.status,
      statusText: c.statusText,
      headers: Bn(c.headers)
    });
  if (i < ye(this, Vt, "f"))
    return await ye(this, nr, "m", t).call(this, { request: r, backoff: n, tries: i + 1 });
  throw new Cs(p, {
    ok: c.ok,
    status: c.status,
    statusText: c.statusText,
    headers: Bn(c.headers)
  });
};
var Da;
(function(t) {
  t.Error = "err", t.GetPrincipal = "gp", t.GetPrincipalResponse = "gpr", t.Query = "q", t.QueryResponse = "qr", t.Call = "c", t.CallResponse = "cr", t.ReadState = "rs", t.ReadStateResponse = "rsr", t.Status = "s", t.StatusResponse = "sr";
})(Da || (Da = {}));
function Ya() {
  const t = typeof window > "u" ? typeof global > "u" ? typeof self > "u" ? void 0 : self.ic.agent : global.ic.agent : window.ic.agent;
  if (!t)
    throw new Error("No Agent could be found.");
  return t;
}
const Mp = 5 * 60 * 1e3;
function Af() {
  return Vp($p(kp(), 1e3), Hp(1e3, 1.2), qp(Mp));
}
function kp() {
  let t = !0;
  return async () => t ? (t = !1, !0) : !1;
}
function $p(t, e) {
  return async (r, n, i) => {
    if (await t(r, n, i))
      return new Promise((s) => setTimeout(s, e));
  };
}
function qp(t) {
  const e = Date.now() + t;
  return async (r, n, i) => {
    if (Date.now() > e)
      throw new Error(`Request timed out after ${t} msec:
  Request ID: ${jt(n)}
  Request status: ${i}
`);
  };
}
function Hp(t, e) {
  let r = t;
  return () => new Promise((n) => setTimeout(() => {
    r *= e, n();
  }, r));
}
function Vp(...t) {
  return async (e, r, n) => {
    for (const i of t)
      await i(e, r, n);
  };
}
async function Sf(t, e, r, n = Af(), i, s) {
  var c;
  const a = [new TextEncoder().encode("request_status"), r], p = i ?? await ((c = t.createReadStateRequest) === null || c === void 0 ? void 0 : c.call(t, { paths: [a] }));
  p.body.content.ingress_expiry = new rn(Ef);
  const g = await t.readState(e, { paths: [a] }, void 0, p);
  if (t.rootKey == null)
    throw new Error("Agent root key not initialized before polling");
  const b = await Hr.create({
    certificate: g.certificate,
    rootKey: t.rootKey,
    canisterId: e,
    blsVerify: s
  }), T = Ot(b.lookup([...a, new TextEncoder().encode("status")]));
  let N;
  switch (typeof T > "u" ? N = ar.Unknown : N = new TextDecoder().decode(T), N) {
    case ar.Replied:
      return {
        reply: Ot(b.lookup([...a, "reply"])),
        certificate: b
      };
    case ar.Received:
    case ar.Unknown:
    case ar.Processing:
      return await n(e, r, N), Sf(t, e, r, n, p, s);
    case ar.Rejected: {
      const S = new Uint8Array(Ot(b.lookup([...a, "reject_code"])))[0], m = new TextDecoder().decode(Ot(b.lookup([...a, "reject_message"])));
      throw new Error(`Call was rejected:
  Request ID: ${jt(r)}
  Reject code: ${S}
  Reject text: ${m}
`);
    }
    case ar.Done:
      throw new Error(`Call was marked as done but we never saw the reply:
  Request ID: ${jt(r)}
`);
  }
  throw new Error("unreachable");
}
const Lp = ({ IDL: t }) => {
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
  }), N = t.Record({
    height: t.Nat32,
    value: i,
    outpoint: T
  }), S = t.Record({
    next_page: t.Opt(t.Vec(t.Nat8)),
    tip_height: t.Nat32,
    tip_block_hash: b,
    utxos: t.Vec(N)
  }), m = t.Record({
    transaction: t.Vec(t.Nat8),
    network: e
  }), I = t.Principal, U = t.Record({
    canister_id: I,
    num_requested_changes: t.Opt(t.Nat64)
  }), H = t.Variant({
    from_user: t.Record({ user_id: t.Principal }),
    from_canister: t.Record({
      canister_version: t.Opt(t.Nat64),
      canister_id: t.Principal
    })
  }), V = t.Variant({
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
  }), L = t.Record({
    timestamp_nanos: t.Nat64,
    canister_version: t.Nat64,
    origin: H,
    details: V
  }), X = t.Record({
    controllers: t.Vec(t.Principal),
    module_hash: t.Opt(t.Vec(t.Nat8)),
    recent_changes: t.Vec(L),
    total_num_changes: t.Nat64
  }), P = t.Record({ canister_id: I }), J = t.Variant({
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
  }), ae = t.Record({ canister_id: I }), te = t.Record({
    freezing_threshold: t.Opt(t.Nat),
    controllers: t.Opt(t.Vec(t.Principal)),
    reserved_cycles_limit: t.Opt(t.Nat),
    log_visibility: t.Opt(J),
    wasm_memory_limit: t.Opt(t.Nat),
    memory_allocation: t.Opt(t.Nat),
    compute_allocation: t.Opt(t.Nat)
  }), pe = t.Record({
    settings: t.Opt(te),
    sender_canister_version: t.Opt(t.Nat64)
  }), de = t.Record({ canister_id: I }), R = t.Record({ canister_id: I }), C = t.Record({ canister_id: I }), Y = t.Variant({ secp256k1: t.Null }), z = t.Record({
    key_id: t.Record({ name: t.Text, curve: Y }),
    canister_id: t.Opt(I),
    derivation_path: t.Vec(t.Vec(t.Nat8))
  }), j = t.Record({
    public_key: t.Vec(t.Nat8),
    chain_code: t.Vec(t.Nat8)
  }), ee = t.Record({ canister_id: I }), le = t.Record({
    idx: t.Nat64,
    timestamp_nanos: t.Nat64,
    content: t.Vec(t.Nat8)
  }), we = t.Record({
    canister_log_records: t.Vec(le)
  }), se = t.Record({ value: t.Text, name: t.Text }), Z = t.Record({
    status: t.Nat,
    body: t.Vec(t.Nat8),
    headers: t.Vec(se)
  }), ue = t.Record({
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
  }), ie = t.Record({ hash: t.Vec(t.Nat8) }), he = t.Record({
    arg: t.Vec(t.Nat8),
    wasm_module_hash: t.Vec(t.Nat8),
    mode: w,
    chunk_hashes_list: t.Vec(ie),
    target_canister: I,
    store_canister: t.Opt(I),
    sender_canister_version: t.Opt(t.Nat64)
  }), Te = t.Vec(t.Nat8), ce = t.Record({
    arg: t.Vec(t.Nat8),
    wasm_module: Te,
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
  })), B = t.Record({
    settings: t.Opt(te),
    specified_id: t.Opt(I),
    amount: t.Opt(t.Nat),
    sender_canister_version: t.Opt(t.Nat64)
  }), k = t.Record({
    canister_id: I
  }), F = t.Record({
    canister_id: I,
    amount: t.Nat
  }), q = t.Vec(t.Nat8), h = t.Variant({
    ed25519: t.Null,
    bip340secp256k1: t.Null
  }), o = t.Record({
    key_id: t.Record({
      algorithm: h,
      name: t.Text
    }),
    canister_id: t.Opt(I),
    derivation_path: t.Vec(t.Vec(t.Nat8))
  }), u = t.Record({
    public_key: t.Vec(t.Nat8),
    chain_code: t.Vec(t.Nat8)
  }), y = t.Record({
    key_id: t.Record({ name: t.Text, curve: Y }),
    derivation_path: t.Vec(t.Vec(t.Nat8)),
    message_hash: t.Vec(t.Nat8)
  }), x = t.Record({
    signature: t.Vec(t.Nat8)
  }), v = t.Record({
    key_id: t.Record({
      algorithm: h,
      name: t.Text
    }),
    derivation_path: t.Vec(t.Vec(t.Nat8)),
    message: t.Vec(t.Nat8)
  }), G = t.Record({
    signature: t.Vec(t.Nat8)
  }), oe = t.Record({ canister_id: I }), me = t.Record({ canister_id: I }), ge = t.Record({ canister_id: I }), Be = t.Vec(ie), d = t.Record({
    canister_id: I,
    sender_canister_version: t.Opt(t.Nat64)
  }), f = t.Record({
    canister_id: t.Principal,
    settings: te,
    sender_canister_version: t.Opt(t.Nat64)
  }), l = t.Record({
    chunk: t.Vec(t.Nat8),
    canister_id: t.Principal
  }), A = ie;
  return t.Service({
    bitcoin_get_balance: t.Func([n], [s], []),
    bitcoin_get_current_fee_percentiles: t.Func([c], [p], []),
    bitcoin_get_utxos: t.Func([g], [S], []),
    bitcoin_send_transaction: t.Func([m], [], []),
    canister_info: t.Func([U], [X], []),
    canister_status: t.Func([P], [re], []),
    clear_chunk_store: t.Func([ae], [], []),
    create_canister: t.Func([pe], [de], []),
    delete_canister: t.Func([R], [], []),
    deposit_cycles: t.Func([C], [], []),
    ecdsa_public_key: t.Func([z], [j], []),
    fetch_canister_logs: t.Func([ee], [we], ["query"]),
    http_request: t.Func([ue], [Z], []),
    install_chunked_code: t.Func([he], [], []),
    install_code: t.Func([ce], [], []),
    node_metrics_history: t.Func([fe], [E], []),
    provisional_create_canister_with_cycles: t.Func([B], [k], []),
    provisional_top_up_canister: t.Func([F], [], []),
    raw_rand: t.Func([], [q], []),
    schnorr_public_key: t.Func([o], [u], []),
    sign_with_ecdsa: t.Func([y], [x], []),
    sign_with_schnorr: t.Func([v], [G], []),
    start_canister: t.Func([oe], [], []),
    stop_canister: t.Func([me], [], []),
    stored_chunks: t.Func([ge], [Be], []),
    uninstall_code: t.Func([d], [], []),
    update_settings: t.Func([f], [], []),
    upload_chunk: t.Func([l], [A], [])
  });
};
class Bf extends tt {
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
class Gp extends Bf {
  constructor(e, r, n) {
    var i;
    super(e, r, "query", {
      Status: n.status,
      Code: (i = to[n.reject_code]) !== null && i !== void 0 ? i : `Unknown Code "${n.reject_code}"`,
      Message: n.reject_message
    }), this.result = n;
  }
}
class Za extends Bf {
  constructor(e, r, n, i, s, c, a) {
    super(e, r, "update", Object.assign({ "Request ID": jt(n) }, i.body ? Object.assign(Object.assign({}, a ? {
      "Error code": a
    } : {}), { "Reject code": String(s), "Reject message": c }) : {
      "HTTP status code": i.status.toString(),
      "HTTP status text": i.statusText
    })), this.requestId = n, this.response = i, this.reject_code = s, this.reject_message = c, this.error_code = a;
  }
}
const Rt = Symbol.for("ic-agent-metadata");
class wn {
  constructor(e) {
    this[Rt] = Object.freeze(e);
  }
  /**
   * Get the Agent class this Actor would call, or undefined if the Actor would use
   * the default agent (global.ic.agent).
   * @param actor The actor to get the agent of.
   */
  static agentOf(e) {
    return e[Rt].config.agent;
  }
  /**
   * Get the interface of an actor, in the form of an instance of a Service.
   * @param actor The actor to get the interface of.
   */
  static interfaceOf(e) {
    return e[Rt].service;
  }
  static canisterIdOf(e) {
    return Me.from(e[Rt].config.canisterId);
  }
  static async install(e, r) {
    const n = e.mode === void 0 ? { install: null } : e.mode, i = e.arg ? [...new Uint8Array(e.arg)] : [], s = [...new Uint8Array(e.module)], c = typeof r.canisterId == "string" ? Me.fromText(r.canisterId) : r.canisterId;
    await Ka(r).install_code({
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
    const { canister_id: i } = await Ka(e || {}).provisional_create_canister_with_cycles({
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
    const n = e({ IDL: Z0 });
    class i extends wn {
      constructor(c) {
        if (!c.canisterId)
          throw new tt(`Canister ID is required, but received ${typeof c.canisterId} instead. If you are using automatically generated declarations, this may be because your application is not setting the canister ID in process.env correctly.`);
        const a = typeof c.canisterId == "string" ? Me.fromText(c.canisterId) : c.canisterId;
        super({
          config: Object.assign(Object.assign(Object.assign({}, vf), c), { canisterId: a }),
          service: n
        });
        for (const [p, g] of n._fields)
          r != null && r.httpDetails && g.annotations.push(_o), r != null && r.certificate && g.annotations.push(Nf), this[p] = jp(this, p, g, c.blsVerify);
      }
    }
    return i;
  }
  static createActor(e, r) {
    if (!r.canisterId)
      throw new tt(`Canister ID is required, but received ${typeof r.canisterId} instead. If you are using automatically generated declarations, this may be because your application is not setting the canister ID in process.env correctly.`);
    return new (this.createActorClass(e))(r);
  }
  /**
   * Returns an actor with methods that return the http response details along with the result
   * @param interfaceFactory - the interface factory for the actor
   * @param configuration - the configuration for the actor
   * @deprecated - use createActor with actorClassOptions instead
   */
  static createActorWithHttpDetails(e, r) {
    return new (this.createActorClass(e, { httpDetails: !0 }))(r);
  }
  /**
   * Returns an actor with methods that return the http response details along with the result
   * @param interfaceFactory - the interface factory for the actor
   * @param configuration - the configuration for the actor
   * @param actorClassOptions - options for the actor class extended details to return with the result
   */
  static createActorWithExtendedDetails(e, r, n = {
    httpDetails: !0,
    certificate: !0
  }) {
    return new (this.createActorClass(e, n))(r);
  }
}
function tn(t, e) {
  const r = Xc(t, Oc.Buffer.from(e));
  switch (r.length) {
    case 0:
      return;
    case 1:
      return r[0];
    default:
      return r;
  }
}
const vf = {
  pollingStrategyFactory: Af
}, _o = "http-details", Nf = "certificate";
function jp(t, e, r, n) {
  let i;
  r.annotations.includes("query") || r.annotations.includes("composite_query") ? i = async (c, ...a) => {
    var p, g;
    c = Object.assign(Object.assign({}, c), (g = (p = t[Rt].config).queryTransform) === null || g === void 0 ? void 0 : g.call(p, e, a, Object.assign(Object.assign({}, t[Rt].config), c)));
    const b = c.agent || t[Rt].config.agent || Ya(), T = Me.from(c.canisterId || t[Rt].config.canisterId), N = no(r.argTypes, a), S = await b.query(T, {
      methodName: e,
      arg: N,
      effectiveCanisterId: c.effectiveCanisterId
    }), m = Object.assign(Object.assign({}, S.httpDetails), { requestDetails: S.requestDetails });
    switch (S.status) {
      case "rejected":
        throw new Gp(T, e, S);
      case "replied":
        return r.annotations.includes(_o) ? {
          httpDetails: m,
          result: tn(r.retTypes, S.reply.arg)
        } : tn(r.retTypes, S.reply.arg);
    }
  } : i = async (c, ...a) => {
    var p, g;
    c = Object.assign(Object.assign({}, c), (g = (p = t[Rt].config).callTransform) === null || g === void 0 ? void 0 : g.call(p, e, a, Object.assign(Object.assign({}, t[Rt].config), c)));
    const b = c.agent || t[Rt].config.agent || Ya(), { canisterId: T, effectiveCanisterId: N, pollingStrategyFactory: S } = Object.assign(Object.assign(Object.assign({}, vf), t[Rt].config), c), m = Me.from(T), I = N !== void 0 ? Me.from(N) : m, U = no(r.argTypes, a);
    if (b.rootKey == null)
      throw new tt("Agent root key not initialized before making call");
    const { requestId: H, response: V, requestDetails: L } = await b.call(m, {
      methodName: e,
      arg: U,
      effectiveCanisterId: I
    });
    let X, P;
    if (V.body && V.body.certificate) {
      const ae = V.body.certificate;
      P = await Hr.create({
        certificate: Di(ae),
        rootKey: b.rootKey,
        canisterId: Me.from(T),
        blsVerify: n
      });
      const te = [new TextEncoder().encode("request_status"), H];
      switch (new TextDecoder().decode(Ot(P.lookup([...te, "status"])))) {
        case "replied":
          X = Ot(P.lookup([...te, "reply"]));
          break;
        case "rejected": {
          const de = new Uint8Array(Ot(P.lookup([...te, "reject_code"])))[0], R = new TextDecoder().decode(Ot(P.lookup([...te, "reject_message"]))), C = Ot(P.lookup([...te, "error_code"])), Y = C ? new TextDecoder().decode(C) : void 0;
          throw new Za(m, e, H, V, de, R, Y);
        }
      }
    } else if (V.body && "reject_message" in V.body) {
      const { reject_code: ae, reject_message: te, error_code: pe } = V.body;
      throw new Za(m, e, H, V, ae, te, pe);
    }
    if (V.status === 202) {
      const ae = S(), te = await Sf(b, I, H, ae, n);
      P = te.certificate, X = te.reply;
    }
    const J = r.annotations.includes(_o), K = r.annotations.includes(Nf), re = Object.assign(Object.assign({}, V), { requestDetails: L });
    if (X !== void 0)
      return J && K ? {
        httpDetails: re,
        certificate: P,
        result: tn(r.retTypes, X)
      } : K ? {
        certificate: P,
        result: tn(r.retTypes, X)
      } : J ? {
        httpDetails: re,
        result: tn(r.retTypes, X)
      } : tn(r.retTypes, X);
    if (r.retTypes.length === 0)
      return J ? {
        httpDetails: V,
        result: void 0
      } : void 0;
    throw new Error(`Call was returned undefined, but type [${r.retTypes.join(",")}].`);
  };
  const s = (...c) => i({}, ...c);
  return s.withOptions = (c) => (...a) => i(c, ...a), s;
}
function Ka(t) {
  function e(r, n) {
    if (t.effectiveCanisterId)
      return { effectiveCanisterId: Me.from(t.effectiveCanisterId) };
    const i = n[0];
    let s = Me.fromHex("");
    return i && typeof i == "object" && i.canister_id && (s = Me.from(i.canister_id)), { effectiveCanisterId: s };
  }
  return wn.createActor(Lp, Object.assign(Object.assign(Object.assign({}, t), { canisterId: Me.fromHex("") }), {
    callTransform: e,
    queryTransform: e
  }));
}
const zp = ({ IDL: t }) => {
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
}, Wp = "gichg-2iaaa-aaaah-adtia-cai", Dp = (t, e = {}) => {
  const r = new Vr({ host: "https://icp0.io" });
  return e.agent && e.agentOptions && console.warn(
    "Detected both agent and agentOptions passed to createActor. Ignoring agentOptions and proceeding with the provided agent."
  ), wn.createActor(zp, {
    agent: r,
    canisterId: t,
    ...e.actorOptions
  });
}, Yp = Dp(Wp), Zp = ({ IDL: t }) => {
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
}, Kp = "bpsjh-6yaaa-aaaah-adyjq-cai", Xp = (t, e = {}) => {
  const r = e.agent || new Vr({ host: "https://icp0.io" });
  return e.agent && e.agentOptions && console.warn(
    "Detected both agent and agentOptions passed to createActor. Ignoring agentOptions and proceeding with the provided agent."
  ), wn.createActor(Zp, {
    agent: r,
    canisterId: t,
    ...e.actorOptions
  });
}, Jp = Xp(Kp), Qp = 52, Xa = 120, e1 = (t) => Object.keys(t).includes("Err"), t1 = (t) => {
  t.style.height = "inherit";
  let e = Math.min(
    Math.max(t.scrollHeight, Qp),
    Xa
  );
  t.style.height = `${e}px`, t.style.overflowY = e >= Xa ? "scroll" : "hidden";
};
/*! @license DOMPurify 3.1.7 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.1.7/LICENSE */
const {
  entries: Rf,
  setPrototypeOf: Ja,
  isFrozen: r1,
  getPrototypeOf: n1,
  getOwnPropertyDescriptor: i1
} = Object;
let {
  freeze: gt,
  seal: It,
  create: Of
} = Object, {
  apply: xo,
  construct: Eo
} = typeof Reflect < "u" && Reflect;
gt || (gt = function(e) {
  return e;
});
It || (It = function(e) {
  return e;
});
xo || (xo = function(e, r, n) {
  return e.apply(r, n);
});
Eo || (Eo = function(e, r) {
  return new e(...r);
});
const yi = Bt(Array.prototype.forEach), Qa = Bt(Array.prototype.pop), xn = Bt(Array.prototype.push), Li = Bt(String.prototype.toLowerCase), Gs = Bt(String.prototype.toString), ec = Bt(String.prototype.match), En = Bt(String.prototype.replace), s1 = Bt(String.prototype.indexOf), o1 = Bt(String.prototype.trim), Ht = Bt(Object.prototype.hasOwnProperty), pt = Bt(RegExp.prototype.test), Tn = a1(TypeError);
function Bt(t) {
  return function(e) {
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      n[i - 1] = arguments[i];
    return xo(t, e, n);
  };
}
function a1(t) {
  return function() {
    for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++)
      r[n] = arguments[n];
    return Eo(t, r);
  };
}
function Pe(t, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Li;
  Ja && Ja(t, null);
  let n = e.length;
  for (; n--; ) {
    let i = e[n];
    if (typeof i == "string") {
      const s = r(i);
      s !== i && (r1(e) || (e[n] = s), i = s);
    }
    t[i] = !0;
  }
  return t;
}
function c1(t) {
  for (let e = 0; e < t.length; e++)
    Ht(t, e) || (t[e] = null);
  return t;
}
function Pr(t) {
  const e = Of(null);
  for (const [r, n] of Rf(t))
    Ht(t, r) && (Array.isArray(n) ? e[r] = c1(n) : n && typeof n == "object" && n.constructor === Object ? e[r] = Pr(n) : e[r] = n);
  return e;
}
function An(t, e) {
  for (; t !== null; ) {
    const n = i1(t, e);
    if (n) {
      if (n.get)
        return Bt(n.get);
      if (typeof n.value == "function")
        return Bt(n.value);
    }
    t = n1(t);
  }
  function r() {
    return null;
  }
  return r;
}
const tc = gt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), js = gt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), zs = gt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), u1 = gt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Ws = gt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), f1 = gt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), rc = gt(["#text"]), nc = gt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), Ds = gt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), ic = gt(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), wi = gt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), l1 = It(/\{\{[\w\W]*|[\w\W]*\}\}/gm), h1 = It(/<%[\w\W]*|[\w\W]*%>/gm), d1 = It(/\${[\w\W]*}/gm), p1 = It(/^data-[\-\w.\u00B7-\uFFFF]/), m1 = It(/^aria-[\-\w]+$/), If = It(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), g1 = It(/^(?:\w+script|data):/i), y1 = It(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Uf = It(/^html$/i), w1 = It(/^[a-z][.\w]*(-[.\w]+)+$/i);
var sc = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  MUSTACHE_EXPR: l1,
  ERB_EXPR: h1,
  TMPLIT_EXPR: d1,
  DATA_ATTR: p1,
  ARIA_ATTR: m1,
  IS_ALLOWED_URI: If,
  IS_SCRIPT_OR_DATA: g1,
  ATTR_WHITESPACE: y1,
  DOCTYPE_NAME: Uf,
  CUSTOM_ELEMENT: w1
});
const Sn = {
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
}, b1 = function() {
  return typeof window > "u" ? null : window;
}, _1 = function(e, r) {
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
function Ff() {
  let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : b1();
  const e = (xe) => Ff(xe);
  if (e.version = "3.1.7", e.removed = [], !t || !t.document || t.document.nodeType !== Sn.document)
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
    DOMParser: N,
    trustedTypes: S
  } = t, m = p.prototype, I = An(m, "cloneNode"), U = An(m, "remove"), H = An(m, "nextSibling"), V = An(m, "childNodes"), L = An(m, "parentNode");
  if (typeof c == "function") {
    const xe = r.createElement("template");
    xe.content && xe.content.ownerDocument && (r = xe.content.ownerDocument);
  }
  let X, P = "";
  const {
    implementation: J,
    createNodeIterator: K,
    createDocumentFragment: re,
    getElementsByTagName: ae
  } = r, {
    importNode: te
  } = n;
  let pe = {};
  e.isSupported = typeof Rf == "function" && typeof L == "function" && J && J.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: de,
    ERB_EXPR: R,
    TMPLIT_EXPR: C,
    DATA_ATTR: Y,
    ARIA_ATTR: z,
    IS_SCRIPT_OR_DATA: j,
    ATTR_WHITESPACE: ee,
    CUSTOM_ELEMENT: le
  } = sc;
  let {
    IS_ALLOWED_URI: we
  } = sc, se = null;
  const Z = Pe({}, [...tc, ...js, ...zs, ...Ws, ...rc]);
  let ue = null;
  const w = Pe({}, [...nc, ...Ds, ...ic, ...wi]);
  let ie = Object.seal(Of(null, {
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
  })), he = null, Te = null, ce = !0, fe = !0, _ = !1, E = !0, B = !1, k = !0, F = !1, q = !1, h = !1, o = !1, u = !1, y = !1, x = !0, v = !1;
  const G = "user-content-";
  let oe = !0, me = !1, ge = {}, Be = null;
  const d = Pe({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let f = null;
  const l = Pe({}, ["audio", "video", "img", "source", "image", "track"]);
  let A = null;
  const M = Pe({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), D = "http://www.w3.org/1998/Math/MathML", W = "http://www.w3.org/2000/svg", Ae = "http://www.w3.org/1999/xhtml";
  let Ie = Ae, Oe = !1, ve = null;
  const ke = Pe({}, [D, W, Ae], Gs);
  let $e = null;
  const gs = ["application/xhtml+xml", "text/html"], ys = "text/html";
  let Je = null, pr = null;
  const ws = r.createElement("form"), sr = function($) {
    return $ instanceof RegExp || $ instanceof Function;
  }, Jn = function() {
    let $ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(pr && pr === $)) {
      if ((!$ || typeof $ != "object") && ($ = {}), $ = Pr($), $e = // eslint-disable-next-line unicorn/prefer-includes
      gs.indexOf($.PARSER_MEDIA_TYPE) === -1 ? ys : $.PARSER_MEDIA_TYPE, Je = $e === "application/xhtml+xml" ? Gs : Li, se = Ht($, "ALLOWED_TAGS") ? Pe({}, $.ALLOWED_TAGS, Je) : Z, ue = Ht($, "ALLOWED_ATTR") ? Pe({}, $.ALLOWED_ATTR, Je) : w, ve = Ht($, "ALLOWED_NAMESPACES") ? Pe({}, $.ALLOWED_NAMESPACES, Gs) : ke, A = Ht($, "ADD_URI_SAFE_ATTR") ? Pe(
        Pr(M),
        // eslint-disable-line indent
        $.ADD_URI_SAFE_ATTR,
        // eslint-disable-line indent
        Je
        // eslint-disable-line indent
      ) : M, f = Ht($, "ADD_DATA_URI_TAGS") ? Pe(
        Pr(l),
        // eslint-disable-line indent
        $.ADD_DATA_URI_TAGS,
        // eslint-disable-line indent
        Je
        // eslint-disable-line indent
      ) : l, Be = Ht($, "FORBID_CONTENTS") ? Pe({}, $.FORBID_CONTENTS, Je) : d, he = Ht($, "FORBID_TAGS") ? Pe({}, $.FORBID_TAGS, Je) : {}, Te = Ht($, "FORBID_ATTR") ? Pe({}, $.FORBID_ATTR, Je) : {}, ge = Ht($, "USE_PROFILES") ? $.USE_PROFILES : !1, ce = $.ALLOW_ARIA_ATTR !== !1, fe = $.ALLOW_DATA_ATTR !== !1, _ = $.ALLOW_UNKNOWN_PROTOCOLS || !1, E = $.ALLOW_SELF_CLOSE_IN_ATTR !== !1, B = $.SAFE_FOR_TEMPLATES || !1, k = $.SAFE_FOR_XML !== !1, F = $.WHOLE_DOCUMENT || !1, o = $.RETURN_DOM || !1, u = $.RETURN_DOM_FRAGMENT || !1, y = $.RETURN_TRUSTED_TYPE || !1, h = $.FORCE_BODY || !1, x = $.SANITIZE_DOM !== !1, v = $.SANITIZE_NAMED_PROPS || !1, oe = $.KEEP_CONTENT !== !1, me = $.IN_PLACE || !1, we = $.ALLOWED_URI_REGEXP || If, Ie = $.NAMESPACE || Ae, ie = $.CUSTOM_ELEMENT_HANDLING || {}, $.CUSTOM_ELEMENT_HANDLING && sr($.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (ie.tagNameCheck = $.CUSTOM_ELEMENT_HANDLING.tagNameCheck), $.CUSTOM_ELEMENT_HANDLING && sr($.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (ie.attributeNameCheck = $.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), $.CUSTOM_ELEMENT_HANDLING && typeof $.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (ie.allowCustomizedBuiltInElements = $.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), B && (fe = !1), u && (o = !0), ge && (se = Pe({}, rc), ue = [], ge.html === !0 && (Pe(se, tc), Pe(ue, nc)), ge.svg === !0 && (Pe(se, js), Pe(ue, Ds), Pe(ue, wi)), ge.svgFilters === !0 && (Pe(se, zs), Pe(ue, Ds), Pe(ue, wi)), ge.mathMl === !0 && (Pe(se, Ws), Pe(ue, ic), Pe(ue, wi))), $.ADD_TAGS && (se === Z && (se = Pr(se)), Pe(se, $.ADD_TAGS, Je)), $.ADD_ATTR && (ue === w && (ue = Pr(ue)), Pe(ue, $.ADD_ATTR, Je)), $.ADD_URI_SAFE_ATTR && Pe(A, $.ADD_URI_SAFE_ATTR, Je), $.FORBID_CONTENTS && (Be === d && (Be = Pr(Be)), Pe(Be, $.FORBID_CONTENTS, Je)), oe && (se["#text"] = !0), F && Pe(se, ["html", "head", "body"]), se.table && (Pe(se, ["tbody"]), delete he.tbody), $.TRUSTED_TYPES_POLICY) {
        if (typeof $.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw Tn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof $.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw Tn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        X = $.TRUSTED_TYPES_POLICY, P = X.createHTML("");
      } else
        X === void 0 && (X = _1(S, i)), X !== null && typeof P == "string" && (P = X.createHTML(""));
      gt && gt($), pr = $;
    }
  }, bs = Pe({}, ["mi", "mo", "mn", "ms", "mtext"]), _s = Pe({}, ["annotation-xml"]), Wo = Pe({}, ["title", "style", "font", "a", "script"]), De = Pe({}, [...js, ...zs, ...u1]), xs = Pe({}, [...Ws, ...f1]), Do = function($) {
    let ne = L($);
    (!ne || !ne.tagName) && (ne = {
      namespaceURI: Ie,
      tagName: "template"
    });
    const _e = Li($.tagName), He = Li(ne.tagName);
    return ve[$.namespaceURI] ? $.namespaceURI === W ? ne.namespaceURI === Ae ? _e === "svg" : ne.namespaceURI === D ? _e === "svg" && (He === "annotation-xml" || bs[He]) : !!De[_e] : $.namespaceURI === D ? ne.namespaceURI === Ae ? _e === "math" : ne.namespaceURI === W ? _e === "math" && _s[He] : !!xs[_e] : $.namespaceURI === Ae ? ne.namespaceURI === W && !_s[He] || ne.namespaceURI === D && !bs[He] ? !1 : !xs[_e] && (Wo[_e] || !De[_e]) : !!($e === "application/xhtml+xml" && ve[$.namespaceURI]) : !1;
  }, Pt = function($) {
    xn(e.removed, {
      element: $
    });
    try {
      L($).removeChild($);
    } catch {
      U($);
    }
  }, Kr = function($, ne) {
    try {
      xn(e.removed, {
        attribute: ne.getAttributeNode($),
        from: ne
      });
    } catch {
      xn(e.removed, {
        attribute: null,
        from: ne
      });
    }
    if (ne.removeAttribute($), $ === "is" && !ue[$])
      if (o || u)
        try {
          Pt(ne);
        } catch {
        }
      else
        try {
          ne.setAttribute($, "");
        } catch {
        }
  }, Qn = function($) {
    let ne = null, _e = null;
    if (h)
      $ = "<remove></remove>" + $;
    else {
      const Se = ec($, /^[\r\n\t ]+/);
      _e = Se && Se[0];
    }
    $e === "application/xhtml+xml" && Ie === Ae && ($ = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + $ + "</body></html>");
    const He = X ? X.createHTML($) : $;
    if (Ie === Ae)
      try {
        ne = new N().parseFromString(He, $e);
      } catch {
      }
    if (!ne || !ne.documentElement) {
      ne = J.createDocument(Ie, "template", null);
      try {
        ne.documentElement.innerHTML = Oe ? P : He;
      } catch {
      }
    }
    const O = ne.body || ne.documentElement;
    return $ && _e && O.insertBefore(r.createTextNode(_e), O.childNodes[0] || null), Ie === Ae ? ae.call(ne, F ? "html" : "body")[0] : F ? ne.documentElement : O;
  }, ei = function($) {
    return K.call(
      $.ownerDocument || $,
      $,
      // eslint-disable-next-line no-bitwise
      g.SHOW_ELEMENT | g.SHOW_COMMENT | g.SHOW_TEXT | g.SHOW_PROCESSING_INSTRUCTION | g.SHOW_CDATA_SECTION,
      null
    );
  }, ti = function($) {
    return $ instanceof T && (typeof $.nodeName != "string" || typeof $.textContent != "string" || typeof $.removeChild != "function" || !($.attributes instanceof b) || typeof $.removeAttribute != "function" || typeof $.setAttribute != "function" || typeof $.namespaceURI != "string" || typeof $.insertBefore != "function" || typeof $.hasChildNodes != "function");
  }, je = function($) {
    return typeof a == "function" && $ instanceof a;
  }, Ct = function($, ne, _e) {
    pe[$] && yi(pe[$], (He) => {
      He.call(e, ne, _e, pr);
    });
  }, ri = function($) {
    let ne = null;
    if (Ct("beforeSanitizeElements", $, null), ti($))
      return Pt($), !0;
    const _e = Je($.nodeName);
    if (Ct("uponSanitizeElement", $, {
      tagName: _e,
      allowedTags: se
    }), $.hasChildNodes() && !je($.firstElementChild) && pt(/<[/\w]/g, $.innerHTML) && pt(/<[/\w]/g, $.textContent) || $.nodeType === Sn.progressingInstruction || k && $.nodeType === Sn.comment && pt(/<[/\w]/g, $.data))
      return Pt($), !0;
    if (!se[_e] || he[_e]) {
      if (!he[_e] && ii(_e) && (ie.tagNameCheck instanceof RegExp && pt(ie.tagNameCheck, _e) || ie.tagNameCheck instanceof Function && ie.tagNameCheck(_e)))
        return !1;
      if (oe && !Be[_e]) {
        const He = L($) || $.parentNode, O = V($) || $.childNodes;
        if (O && He) {
          const Se = O.length;
          for (let Ne = Se - 1; Ne >= 0; --Ne) {
            const Re = I(O[Ne], !0);
            Re.__removalCount = ($.__removalCount || 0) + 1, He.insertBefore(Re, H($));
          }
        }
      }
      return Pt($), !0;
    }
    return $ instanceof p && !Do($) || (_e === "noscript" || _e === "noembed" || _e === "noframes") && pt(/<\/no(script|embed|frames)/i, $.innerHTML) ? (Pt($), !0) : (B && $.nodeType === Sn.text && (ne = $.textContent, yi([de, R, C], (He) => {
      ne = En(ne, He, " ");
    }), $.textContent !== ne && (xn(e.removed, {
      element: $.cloneNode()
    }), $.textContent = ne)), Ct("afterSanitizeElements", $, null), !1);
  }, ni = function($, ne, _e) {
    if (x && (ne === "id" || ne === "name") && (_e in r || _e in ws))
      return !1;
    if (!(fe && !Te[ne] && pt(Y, ne))) {
      if (!(ce && pt(z, ne))) {
        if (!ue[ne] || Te[ne]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(ii($) && (ie.tagNameCheck instanceof RegExp && pt(ie.tagNameCheck, $) || ie.tagNameCheck instanceof Function && ie.tagNameCheck($)) && (ie.attributeNameCheck instanceof RegExp && pt(ie.attributeNameCheck, ne) || ie.attributeNameCheck instanceof Function && ie.attributeNameCheck(ne)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            ne === "is" && ie.allowCustomizedBuiltInElements && (ie.tagNameCheck instanceof RegExp && pt(ie.tagNameCheck, _e) || ie.tagNameCheck instanceof Function && ie.tagNameCheck(_e)))
          ) return !1;
        } else if (!A[ne]) {
          if (!pt(we, En(_e, ee, ""))) {
            if (!((ne === "src" || ne === "xlink:href" || ne === "href") && $ !== "script" && s1(_e, "data:") === 0 && f[$])) {
              if (!(_ && !pt(j, En(_e, ee, "")))) {
                if (_e)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, ii = function($) {
    return $ !== "annotation-xml" && ec($, le);
  }, si = function($) {
    Ct("beforeSanitizeAttributes", $, null);
    const {
      attributes: ne
    } = $;
    if (!ne)
      return;
    const _e = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: ue
    };
    let He = ne.length;
    for (; He--; ) {
      const O = ne[He], {
        name: Se,
        namespaceURI: Ne,
        value: Re
      } = O, Dt = Je(Se);
      let Ye = Se === "value" ? Re : o1(Re);
      if (_e.attrName = Dt, _e.attrValue = Ye, _e.keepAttr = !0, _e.forceKeepAttr = void 0, Ct("uponSanitizeAttribute", $, _e), Ye = _e.attrValue, _e.forceKeepAttr || (Kr(Se, $), !_e.keepAttr))
        continue;
      if (!E && pt(/\/>/i, Ye)) {
        Kr(Se, $);
        continue;
      }
      B && yi([de, R, C], (Yo) => {
        Ye = En(Ye, Yo, " ");
      });
      const Ts = Je($.nodeName);
      if (ni(Ts, Dt, Ye)) {
        if (v && (Dt === "id" || Dt === "name") && (Kr(Se, $), Ye = G + Ye), k && pt(/((--!?|])>)|<\/(style|title)/i, Ye)) {
          Kr(Se, $);
          continue;
        }
        if (X && typeof S == "object" && typeof S.getAttributeType == "function" && !Ne)
          switch (S.getAttributeType(Ts, Dt)) {
            case "TrustedHTML": {
              Ye = X.createHTML(Ye);
              break;
            }
            case "TrustedScriptURL": {
              Ye = X.createScriptURL(Ye);
              break;
            }
          }
        try {
          Ne ? $.setAttributeNS(Ne, Se, Ye) : $.setAttribute(Se, Ye), ti($) ? Pt($) : Qa(e.removed);
        } catch {
        }
      }
    }
    Ct("afterSanitizeAttributes", $, null);
  }, Es = function xe($) {
    let ne = null;
    const _e = ei($);
    for (Ct("beforeSanitizeShadowDOM", $, null); ne = _e.nextNode(); )
      Ct("uponSanitizeShadowNode", ne, null), !ri(ne) && (ne.content instanceof s && xe(ne.content), si(ne));
    Ct("afterSanitizeShadowDOM", $, null);
  };
  return e.sanitize = function(xe) {
    let $ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, ne = null, _e = null, He = null, O = null;
    if (Oe = !xe, Oe && (xe = "<!-->"), typeof xe != "string" && !je(xe))
      if (typeof xe.toString == "function") {
        if (xe = xe.toString(), typeof xe != "string")
          throw Tn("dirty is not a string, aborting");
      } else
        throw Tn("toString is not a function");
    if (!e.isSupported)
      return xe;
    if (q || Jn($), e.removed = [], typeof xe == "string" && (me = !1), me) {
      if (xe.nodeName) {
        const Re = Je(xe.nodeName);
        if (!se[Re] || he[Re])
          throw Tn("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (xe instanceof a)
      ne = Qn("<!---->"), _e = ne.ownerDocument.importNode(xe, !0), _e.nodeType === Sn.element && _e.nodeName === "BODY" || _e.nodeName === "HTML" ? ne = _e : ne.appendChild(_e);
    else {
      if (!o && !B && !F && // eslint-disable-next-line unicorn/prefer-includes
      xe.indexOf("<") === -1)
        return X && y ? X.createHTML(xe) : xe;
      if (ne = Qn(xe), !ne)
        return o ? null : y ? P : "";
    }
    ne && h && Pt(ne.firstChild);
    const Se = ei(me ? xe : ne);
    for (; He = Se.nextNode(); )
      ri(He) || (He.content instanceof s && Es(He.content), si(He));
    if (me)
      return xe;
    if (o) {
      if (u)
        for (O = re.call(ne.ownerDocument); ne.firstChild; )
          O.appendChild(ne.firstChild);
      else
        O = ne;
      return (ue.shadowroot || ue.shadowrootmode) && (O = te.call(n, O, !0)), O;
    }
    let Ne = F ? ne.outerHTML : ne.innerHTML;
    return F && se["!doctype"] && ne.ownerDocument && ne.ownerDocument.doctype && ne.ownerDocument.doctype.name && pt(Uf, ne.ownerDocument.doctype.name) && (Ne = "<!DOCTYPE " + ne.ownerDocument.doctype.name + `>
` + Ne), B && yi([de, R, C], (Re) => {
      Ne = En(Ne, Re, " ");
    }), X && y ? X.createHTML(Ne) : Ne;
  }, e.setConfig = function() {
    let xe = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Jn(xe), q = !0;
  }, e.clearConfig = function() {
    pr = null, q = !1;
  }, e.isValidAttribute = function(xe, $, ne) {
    pr || Jn({});
    const _e = Je(xe), He = Je($);
    return ni(_e, He, ne);
  }, e.addHook = function(xe, $) {
    typeof $ == "function" && (pe[xe] = pe[xe] || [], xn(pe[xe], $));
  }, e.removeHook = function(xe) {
    if (pe[xe])
      return Qa(pe[xe]);
  }, e.removeHooks = function(xe) {
    pe[xe] && (pe[xe] = []);
  }, e.removeAllHooks = function() {
    pe = {};
  }, e;
}
var x1 = Ff(), E1 = Object.defineProperty, T1 = Object.getOwnPropertyDescriptor, Xn = (t, e, r, n) => {
  for (var i = n > 1 ? void 0 : n ? T1(e, r) : e, s = t.length - 1, c; s >= 0; s--)
    (c = t[s]) && (i = (n ? c(e, r, i) : c(i)) || i);
  return n && i && E1(e, r, i), i;
};
let Dr = class extends Ao {
  constructor() {
    super(...arguments), this.isBot = !1, this.botImage = "", this.isLoading = !1, this.message = "";
  }
  render() {
    return wt`<div
      class=${Un({
      "chat-bubble": !0,
      "chat-bubble--user": !this.isBot
    })}
    >
      ${this.isBot ? wt`<div class="chat-bubble__name">
            <img src=${this.botImage} alt="bot avatar" />
          </div>` : ""}
      <div>
        <div
          class=${Un({
      "chat-bubble__message--wrapper": !0,
      "chat-bubble__message--wrapper--user": !this.isBot,
      "chat-bubble__message--wrapper--bot": this.isBot
    })}
        >
          ${this.isLoading ? wt`<div class="typing">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
              </div>` : wt`<div class="chat-bubble__message">
                ${x1.sanitize(this.message)}
              </div>`}
        </div>
      </div>
    </div>`;
  }
};
Dr.styles = To`
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
Xn([
  Tt({ type: Boolean })
], Dr.prototype, "isBot", 2);
Xn([
  Tt({ type: String })
], Dr.prototype, "botImage", 2);
Xn([
  Tt({ type: Boolean })
], Dr.prototype, "isLoading", 2);
Xn([
  Tt({ type: String })
], Dr.prototype, "message", 2);
Dr = Xn([
  So("elna-chat-bubble")
], Dr);
const A1 = ({ IDL: t }) => t.Service({
  add_hash: t.Func([t.Text], [t.Null], []),
  get_all_data: t.Func([], [t.Vec(t.Text)], ["query"])
});
var S1 = Object.defineProperty, B1 = Object.getOwnPropertyDescriptor, Ft = (t, e, r, n) => {
  for (var i = n > 1 ? void 0 : n ? B1(e, r) : e, s = t.length - 1, c; s >= 0; s--)
    (c = t[s]) && (i = (n ? c(e, r, i) : c(i)) || i);
  return n && i && S1(e, r, i), i;
};
let Et = class extends Ao {
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
    return wt` <div class="chat-wrapper">
      <header
        class="chat-header"
        style=${Pf({ background: this.headerBackgroundColor })}
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
      ${this.isLoading ? wt`<div style="color:black">Loading agent details</div>` : ""}
      ${!this.isLoading && this.error !== "" ? wt`<div style="color:black">${this.error}</div>` : ""}
      ${!this.isLoading && this.error === "" ? wt`<div class="chat-body">
            <div class="chat-body-wrapper">
              ${this.messages.length > 0 ? wt`${this.messages.map(
      (e) => wt`<elna-chat-bubble
                        ?isBot=${e.user.isBot}
                        message=${e.message}
                        botImage=${this.logo}
                      />`
    )}
                  ${this.isResponseLoading ? wt`<elna-chat-bubble
                        botImage=${this.logo}
                        isBot
                        isLoading
                      />` : ""} ` : wt`<div>No History</div>`}
            </div>
          </div>` : ""}
      ${this.renderFooter()}
    </div>`;
  }
  renderFooter() {
    var t;
    return wt`<div class="chat-footer">
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
          <img src=${d0} alt="send icon" />
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
          <img src=${h0} alt="elna logo" />
        </a>
      </div>
    </div>`;
  }
  async connectedCallback() {
    super.connectedCallback(), window.global = window, this.getAgent(this.agentId);
  }
  setMessage(t) {
    const e = t.target;
    this.inputMessage = e.value, t1(e);
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
    const e = await Yp.getWizard(t);
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
    const n = "QmRDDSqJHL3ZgLugFoKiAs33gLMfsYfCHPVAsfHK29RCmu";
    console.log("Connecting to smart contract...");
    const i = await N1(r);
    console.log("data from smart contract: ", i);
    const s = await this.fetchFromPinata(n);
    s ? console.log("Data retrieved from hash:", s) : console.log("No data retrieved or error occurred."), this.isResponseLoading = !0;
    const c = await l0(e);
    console.log(c);
    const a = await Jp.chat(
      t,
      e + "This is what i did on that day" + s,
      c,
      crypto.randomUUID()
    );
    if (e1(a)) {
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
        message: a.Ok.body.response,
        date: r
      }
    ], this.inputMessage = "", this.isResponseLoading = !1;
  }
};
Et.styles = To`
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
Ft([
  Yr()
], Et.prototype, "inputDate", 2);
Ft([
  Tt()
], Et.prototype, "headerBackgroundColor", 2);
Ft([
  Tt()
], Et.prototype, "agentDescription", 2);
Ft([
  Tt()
], Et.prototype, "agentId", 2);
Ft([
  Tt()
], Et.prototype, "logo", 2);
Ft([
  Yr()
], Et.prototype, "error", 2);
Ft([
  Yr()
], Et.prototype, "isLoading", 2);
Ft([
  Yr()
], Et.prototype, "messages", 2);
Ft([
  Yr()
], Et.prototype, "isResponseLoading", 2);
Ft([
  Yr()
], Et.prototype, "wizard", 2);
Ft([
  Yr()
], Et.prototype, "inputMessage", 2);
Et = Ft([
  So("elna-chat")
], Et);
const v1 = async (t) => {
  try {
    console.log("creating agent...");
    const e = new Vr({
      // host: "https://ic0.app", // mainnet
      host: "https://a4gq6-oaaaa-aaaab-qaa4q-cai.raw.icp0.io/"
      // local
    });
    process.env.NODE_ENV !== "production" && await e.fetchRootKey(), console.log("creating actor...");
    const r = wn.createActor(A1, {
      agent: e,
      canisterId: "ocpcu-jaaaa-aaaab-qab6q-cai"
    });
    let n;
    try {
      console.log("calling get_date_data function..."), n = await r.get_date_data(t), console.log("Smart contract get_date_data result: ", n);
    } catch (i) {
      console.error("Error while calling smart contract add:", i);
    }
    console.log("function called: ", n);
  } catch (e) {
    console.log("Error Message: ", e.message);
  }
}, N1 = async (t) => {
  console.log("Calling Smart contract..."), await v1(t), console.log("connect ended...");
};
var R1 = Object.defineProperty, O1 = Object.getOwnPropertyDescriptor, Zr = (t, e, r, n) => {
  for (var i = n > 1 ? void 0 : n ? O1(e, r) : e, s = t.length - 1, c; s >= 0; s--)
    (c = t[s]) && (i = (n ? c(e, r, i) : c(i)) || i);
  return n && i && R1(e, r, i), i;
};
let dr = class extends Ao {
  constructor() {
    super(), this.agentId = "", this.title = "Support", this.description = "Hi there! 🚀  Ask me any questions", this.logo = "", this.headerBackgroundColor = "", this.open = !1, this.addEventListener("toggle-open", () => {
      this.open = !this.open;
    });
  }
  render() {
    return wt`
      <div
        class=${Un({
      widget__box: !0,
      "widget__box--close": !this.open
    })}
      >
        <div
          class=${Un({
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
          <img src=${Cf} alt="down arrow" />
        </div>
        <div
          class=${Un({
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
dr.styles = To`
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
Zr([
  Tt({ type: String })
], dr.prototype, "agentId", 2);
Zr([
  Tt()
], dr.prototype, "title", 2);
Zr([
  Tt()
], dr.prototype, "description", 2);
Zr([
  Tt()
], dr.prototype, "logo", 2);
Zr([
  Tt()
], dr.prototype, "headerBackgroundColor", 2);
Zr([
  Tt({ type: Boolean })
], dr.prototype, "open", 2);
dr = Zr([
  So("elna-chat-widget")
], dr);
export {
  dr as ElnaChatWidget
};
