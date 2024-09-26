(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".element-selector[data-v-9e9bee63]{margin-top:20px}.buttons[data-v-9e9bee63]{margin-bottom:15px}button[data-v-9e9bee63]{padding:8px 16px;margin:0 5px;border:none;background-color:#42b983;color:#fff;border-radius:5px;cursor:pointer}button[data-v-9e9bee63]:disabled{background-color:#ccc;cursor:not-allowed}.selected-elements[data-v-9e9bee63]{margin-top:15px;background-color:#f3f3f3;padding:10px;border-radius:5px;border:1px solid #ddd;max-height:200px;overflow-y:auto;position:relative}.selected-elements ul[data-v-9e9bee63]{list-style-type:none;padding:0;margin:0}.selected-elements[data-v-9e9bee63]::-webkit-scrollbar{width:0}.selected-elements[data-v-9e9bee63]{scrollbar-width:none}.selected-elements li[data-v-9e9bee63]{display:flex;justify-content:space-between;align-items:center;padding:5px 0;border-bottom:1px solid #ddd}.remove-button[data-v-9e9bee63]{background:none;border:none;color:#ff4d4d;cursor:pointer}.remove-button[data-v-9e9bee63]:hover{text-decoration:underline}.screenshot-uploader[data-v-c1439085]{padding:16px;border:1px solid #ccc;border-radius:8px;background-color:#f8f8f8;margin:10px;width:100%}.drop-zone[data-v-c1439085]{border:2px dashed #cccccc;padding:16px;margin-top:16px;text-align:center;border-radius:8px;transition:background-color .2s}.drop-zone[data-v-c1439085]:hover,.drop-zone.dragging[data-v-c1439085]{background-color:#e8e8e8;cursor:pointer}.upload-button[data-v-c1439085]{margin-top:8px}.screenshot-preview[data-v-c1439085]{margin-top:16px}.screenshots[data-v-c1439085]{display:flex;flex-wrap:wrap;gap:8px}.screenshot-item[data-v-c1439085]{position:relative;width:100px;height:100px}.screenshot-item img[data-v-c1439085]{width:100%;height:100%;object-fit:cover;border-radius:4px}.remove-button[data-v-c1439085]{position:absolute;top:4px;right:4px;background-color:red;border:none;border-radius:50%;padding:4px;cursor:pointer}.selection-overlay[data-v-c1439085]{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.1);cursor:crosshair}.selection-box[data-v-c1439085]{position:absolute;border:2px dashed #4caf50;background-color:#4285f41a}.capture-button[data-v-c1439085]{display:inline-block;margin-top:10px;padding:8px 16px;background-color:#4caf50;color:#fff;border:none;border-radius:4px;cursor:pointer;transition:background-color .3s}.capture-button[data-v-c1439085]:hover{background-color:#388e3c}.bug-report-modal[data-v-e6831c15]{position:fixed;left:0;top:0;width:400px;height:100%;background:white;padding:15px;box-shadow:2px 0 5px #0000001a;overflow-y:auto;scrollbar-width:thin;scrollbar-color:#d4d4d4 #f0f0f0;z-index:1000}.bug-report-modal[data-v-e6831c15]::-webkit-scrollbar{width:0!important}.bug-report-modal[data-v-e6831c15]::-webkit-scrollbar-track{background:#f0f0f0}.bug-report-modal[data-v-e6831c15]::-webkit-scrollbar-thumb{background-color:#d4d4d4;border-radius:0!important;border:0px solid #f0f0f0!important}.modal-header[data-v-e6831c15]{display:flex;justify-content:space-between;align-items:center;margin-bottom:15px}.modal-header h2[data-v-e6831c15]{margin:0;font-size:1.3em}.close-button[data-v-e6831c15]{background:none;border:none;font-size:1em;cursor:pointer;color:#333}.modal-content[data-v-e6831c15],form[data-v-e6831c15]{display:flex;flex-direction:column}label[data-v-e6831c15]{margin-bottom:5px;font-weight:700}input[data-v-e6831c15],textarea[data-v-e6831c15],select[data-v-e6831c15]{margin-bottom:10px;padding:8px;border:1px solid #ccc;border-radius:5px;font-size:.9em}textarea[data-v-e6831c15]{resize:vertical;min-height:80px}.submit-button[data-v-e6831c15]{padding:8px;background-color:#42b983;margin-bottom:30px;color:#fff;border:none;border-radius:5px;cursor:pointer;font-size:.9em}.submit-button[data-v-e6831c15]:hover{background-color:#36a076}.slide-in-left-enter-active[data-v-e6831c15],.slide-in-left-leave-active[data-v-e6831c15]{transition:transform .5s}.slide-in-left-enter[data-v-e6831c15],.slide-in-left-leave-to[data-v-e6831c15]{transform:translate(-100%)}.bug-report-btn[data-v-2cbc94c8]{display:inline-flex;align-items:center;justify-content:center;padding:8px 12px;gap:6px;border-radius:6px;border:1px solid var(--Grey-200, #e6e7e8);background:var(--Grey-White, #fff);box-shadow:0 1px 2px #1a283517;cursor:pointer;color:var(--Grey-800, #34404b);font-size:.8em;text-align:center;line-height:1}.bug-report-btn[data-v-2cbc94c8]:hover{background-color:#00936f;color:#fff}.bug-icon[data-v-2cbc94c8]{fill:currentColor;width:15px;height:15px}")),document.head.appendChild(e)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
import { defineComponent as Bt, openBlock as J, createElementBlock as W, createElementVNode as y, createCommentVNode as pA, Fragment as fB, renderList as UB, createTextVNode as pn, toDisplayString as ur, ref as eA, computed as Hn, withModifiers as re, normalizeStyle as vn, resolveComponent as Ot, createBlock as In, Transition as mn, withCtx as yn, withDirectives as Cr, vModelText as fr, createVNode as Rt, createStaticVNode as Kn } from "vue";
const Ln = Bt({
  data() {
    return {
      isSelecting: !1,
      selectedElements: [],
      originalStyles: /* @__PURE__ */ new Map(),
      // Store original styles to revert back
      iframeDocuments: []
      // To store iframe documents
    };
  },
  methods: {
    enableSelectionMode() {
      this.isSelecting = !0, document.addEventListener("click", this.selectElement, !0), this.iframeDocuments = Array.from(document.querySelectorAll("iframe")), this.iframeDocuments.forEach((e) => {
        e.addEventListener("load", () => {
          e.contentDocument && e.contentDocument.addEventListener("click", this.selectElementInIframe, !0);
        });
      });
    },
    selectElement(e) {
      if (e.target.classList.contains("special"))
        return;
      e.preventDefault(), e.stopPropagation();
      const A = e.target;
      e.target.closest(".element-selector") || e.target.closest(".bug-report-modal") || (this.selectedElements.includes(A) ? (this.unhighlightElement(A), this.selectedElements = this.selectedElements.filter((r) => r !== A)) : (this.highlightElement(A), this.selectedElements.push(A)));
    },
    selectElementInIframe(e) {
      e.preventDefault(), e.stopPropagation();
      const A = e.target;
      this.selectedElements.includes(A) ? (this.unhighlightElement(A), this.selectedElements = this.selectedElements.filter((r) => r !== A)) : (this.highlightElement(A), this.selectedElements.push(A));
    },
    highlightElement(e) {
      this.originalStyles.has(e) || this.originalStyles.set(e, e.getAttribute("style") || ""), e.setAttribute("style", `${e.getAttribute("style") || ""}; outline: 2px solid red`);
    },
    unhighlightElement(e) {
      this.originalStyles.has(e) && e.setAttribute("style", this.originalStyles.get(e) || "");
    },
    finishSelection() {
      this.isSelecting = !1, document.removeEventListener("click", this.selectElement, !0), this.iframeDocuments.forEach((e) => {
        e.contentDocument && e.contentDocument.removeEventListener("click", this.selectElementInIframe, !0);
      }), this.$emit("elements-selected", this.selectedElements.map((e) => ({
        tagName: e.tagName.toLowerCase(),
        className: e.className || ""
      }))), this.clearSelections();
    },
    clearSelections() {
      this.selectedElements.forEach((e) => this.unhighlightElement(e)), this.originalStyles.clear();
    },
    removeElement(e) {
      const A = this.selectedElements[e];
      this.unhighlightElement(A), this.selectedElements.splice(e, 1);
    }
  },
  beforeUnmount() {
    document.removeEventListener("click", this.selectElement, !0), this.iframeDocuments.forEach((e) => {
      e.contentDocument && e.contentDocument.removeEventListener("click", this.selectElementInIframe, !0);
    });
  }
});
const nt = (e, A) => {
  const r = e.__vccOpts || e;
  for (const [t, B] of A)
    r[t] = B;
  return r;
}, bn = { class: "element-selector" }, Dn = { class: "buttons" }, Sn = ["disabled"], xn = {
  key: 0,
  class: "selected-elements"
}, Tn = ["onClick"];
function Mn(e, A, r, t, B, n) {
  return J(), W("div", bn, [
    A[3] || (A[3] = y("p", null, "Select elements to highlight:", -1)),
    y("div", Dn, [
      y("button", {
        onClick: A[0] || (A[0] = (...s) => e.enableSelectionMode && e.enableSelectionMode(...s)),
        disabled: e.isSelecting
      }, "Start Selecting Elements", 8, Sn),
      e.isSelecting ? (J(), W("button", {
        key: 0,
        class: "special",
        onClick: A[1] || (A[1] = (...s) => e.finishSelection && e.finishSelection(...s))
      }, "Finish Selection")) : pA("", !0)
    ]),
    e.selectedElements.length ? (J(), W("div", xn, [
      A[2] || (A[2] = y("h3", null, "Selected Elements:", -1)),
      y("ul", null, [
        (J(!0), W(fB, null, UB(e.selectedElements, (s, a) => (J(), W("li", { key: a }, [
          pn(ur(s.tagName.toLowerCase()) + " - " + ur(s.className) + " ", 1),
          y("button", {
            onClick: (i) => e.removeElement(a),
            class: "special"
          }, "Remove", 8, Tn)
        ]))), 128))
      ])
    ])) : pA("", !0)
  ]);
}
const On = /* @__PURE__ */ nt(Ln, [["render", Mn], ["__scopeId", "data-v-9e9bee63"]]);
/*!
 * html2canvas 1.4.1 <https://html2canvas.hertzen.com>
 * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
 * Released under MIT License
 */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var Gt = function(e, A) {
  return Gt = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, t) {
    r.__proto__ = t;
  } || function(r, t) {
    for (var B in t)
      Object.prototype.hasOwnProperty.call(t, B) && (r[B] = t[B]);
  }, Gt(e, A);
};
function iA(e, A) {
  if (typeof A != "function" && A !== null)
    throw new TypeError("Class extends value " + String(A) + " is not a constructor or null");
  Gt(e, A);
  function r() {
    this.constructor = e;
  }
  e.prototype = A === null ? Object.create(A) : (r.prototype = A.prototype, new r());
}
var Vt = function() {
  return Vt = Object.assign || function(A) {
    for (var r, t = 1, B = arguments.length; t < B; t++) {
      r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (A[n] = r[n]);
    }
    return A;
  }, Vt.apply(this, arguments);
};
function Y(e, A, r, t) {
  function B(n) {
    return n instanceof r ? n : new r(function(s) {
      s(n);
    });
  }
  return new (r || (r = Promise))(function(n, s) {
    function a(c) {
      try {
        o(t.next(c));
      } catch (Q) {
        s(Q);
      }
    }
    function i(c) {
      try {
        o(t.throw(c));
      } catch (Q) {
        s(Q);
      }
    }
    function o(c) {
      c.done ? n(c.value) : B(c.value).then(a, i);
    }
    o((t = t.apply(e, A || [])).next());
  });
}
function P(e, A) {
  var r = { label: 0, sent: function() {
    if (n[0] & 1)
      throw n[1];
    return n[1];
  }, trys: [], ops: [] }, t, B, n, s;
  return s = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function a(o) {
    return function(c) {
      return i([o, c]);
    };
  }
  function i(o) {
    if (t)
      throw new TypeError("Generator is already executing.");
    for (; r; )
      try {
        if (t = 1, B && (n = o[0] & 2 ? B.return : o[0] ? B.throw || ((n = B.return) && n.call(B), 0) : B.next) && !(n = n.call(B, o[1])).done)
          return n;
        switch (B = 0, n && (o = [o[0] & 2, n.value]), o[0]) {
          case 0:
          case 1:
            n = o;
            break;
          case 4:
            return r.label++, { value: o[1], done: !1 };
          case 5:
            r.label++, B = o[1], o = [0];
            continue;
          case 7:
            o = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (n = r.trys, !(n = n.length > 0 && n[n.length - 1]) && (o[0] === 6 || o[0] === 2)) {
              r = 0;
              continue;
            }
            if (o[0] === 3 && (!n || o[1] > n[0] && o[1] < n[3])) {
              r.label = o[1];
              break;
            }
            if (o[0] === 6 && r.label < n[1]) {
              r.label = n[1], n = o;
              break;
            }
            if (n && r.label < n[2]) {
              r.label = n[2], r.ops.push(o);
              break;
            }
            n[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        o = A.call(e, r);
      } catch (c) {
        o = [6, c], B = 0;
      } finally {
        t = n = 0;
      }
    if (o[0] & 5)
      throw o[1];
    return { value: o[0] ? o[1] : void 0, done: !0 };
  }
}
function de(e, A, r) {
  if (r || arguments.length === 2)
    for (var t = 0, B = A.length, n; t < B; t++)
      (n || !(t in A)) && (n || (n = Array.prototype.slice.call(A, 0, t)), n[t] = A[t]);
  return e.concat(n || A);
}
var fA = (
  /** @class */
  function() {
    function e(A, r, t, B) {
      this.left = A, this.top = r, this.width = t, this.height = B;
    }
    return e.prototype.add = function(A, r, t, B) {
      return new e(this.left + A, this.top + r, this.width + t, this.height + B);
    }, e.fromClientRect = function(A, r) {
      return new e(r.left + A.windowBounds.left, r.top + A.windowBounds.top, r.width, r.height);
    }, e.fromDOMRectList = function(A, r) {
      var t = Array.from(r).find(function(B) {
        return B.width !== 0;
      });
      return t ? new e(t.left + A.windowBounds.left, t.top + A.windowBounds.top, t.width, t.height) : e.EMPTY;
    }, e.EMPTY = new e(0, 0, 0, 0), e;
  }()
), st = function(e, A) {
  return fA.fromClientRect(e, A.getBoundingClientRect());
}, Rn = function(e) {
  var A = e.body, r = e.documentElement;
  if (!A || !r)
    throw new Error("Unable to get document size");
  var t = Math.max(Math.max(A.scrollWidth, r.scrollWidth), Math.max(A.offsetWidth, r.offsetWidth), Math.max(A.clientWidth, r.clientWidth)), B = Math.max(Math.max(A.scrollHeight, r.scrollHeight), Math.max(A.offsetHeight, r.offsetHeight), Math.max(A.clientHeight, r.clientHeight));
  return new fA(0, 0, t, B);
}, it = function(e) {
  for (var A = [], r = 0, t = e.length; r < t; ) {
    var B = e.charCodeAt(r++);
    if (B >= 55296 && B <= 56319 && r < t) {
      var n = e.charCodeAt(r++);
      (n & 64512) === 56320 ? A.push(((B & 1023) << 10) + (n & 1023) + 65536) : (A.push(B), r--);
    } else
      A.push(B);
  }
  return A;
}, M = function() {
  for (var e = [], A = 0; A < arguments.length; A++)
    e[A] = arguments[A];
  if (String.fromCodePoint)
    return String.fromCodePoint.apply(String, e);
  var r = e.length;
  if (!r)
    return "";
  for (var t = [], B = -1, n = ""; ++B < r; ) {
    var s = e[B];
    s <= 65535 ? t.push(s) : (s -= 65536, t.push((s >> 10) + 55296, s % 1024 + 56320)), (B + 1 === r || t.length > 16384) && (n += String.fromCharCode.apply(String, t), t.length = 0);
  }
  return n;
}, Ur = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Gn = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Ee = 0; Ee < Ur.length; Ee++)
  Gn[Ur.charCodeAt(Ee)] = Ee;
var Fr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Be = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var pe = 0; pe < Fr.length; pe++)
  Be[Fr.charCodeAt(pe)] = pe;
var Vn = function(e) {
  var A = e.length * 0.75, r = e.length, t, B = 0, n, s, a, i;
  e[e.length - 1] === "=" && (A--, e[e.length - 2] === "=" && A--);
  var o = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(A) : new Array(A), c = Array.isArray(o) ? o : new Uint8Array(o);
  for (t = 0; t < r; t += 4)
    n = Be[e.charCodeAt(t)], s = Be[e.charCodeAt(t + 1)], a = Be[e.charCodeAt(t + 2)], i = Be[e.charCodeAt(t + 3)], c[B++] = n << 2 | s >> 4, c[B++] = (s & 15) << 4 | a >> 2, c[B++] = (a & 3) << 6 | i & 63;
  return o;
}, Nn = function(e) {
  for (var A = e.length, r = [], t = 0; t < A; t += 2)
    r.push(e[t + 1] << 8 | e[t]);
  return r;
}, Xn = function(e) {
  for (var A = e.length, r = [], t = 0; t < A; t += 4)
    r.push(e[t + 3] << 24 | e[t + 2] << 16 | e[t + 1] << 8 | e[t]);
  return r;
}, OA = 5, ar = 6 + 5, Ct = 2, _n = ar - OA, FB = 65536 >> OA, Pn = 1 << OA, ft = Pn - 1, Jn = 1024 >> OA, kn = FB + Jn, Yn = kn, Wn = 32, Zn = Yn + Wn, qn = 65536 >> ar, zn = 1 << _n, jn = zn - 1, hr = function(e, A, r) {
  return e.slice ? e.slice(A, r) : new Uint16Array(Array.prototype.slice.call(e, A, r));
}, $n = function(e, A, r) {
  return e.slice ? e.slice(A, r) : new Uint32Array(Array.prototype.slice.call(e, A, r));
}, As = function(e, A) {
  var r = Vn(e), t = Array.isArray(r) ? Xn(r) : new Uint32Array(r), B = Array.isArray(r) ? Nn(r) : new Uint16Array(r), n = 24, s = hr(B, n / 2, t[4] / 2), a = t[5] === 2 ? hr(B, (n + t[4]) / 2) : $n(t, Math.ceil((n + t[4]) / 4));
  return new es(t[0], t[1], t[2], t[3], s, a);
}, es = (
  /** @class */
  function() {
    function e(A, r, t, B, n, s) {
      this.initialValue = A, this.errorValue = r, this.highStart = t, this.highValueIndex = B, this.index = n, this.data = s;
    }
    return e.prototype.get = function(A) {
      var r;
      if (A >= 0) {
        if (A < 55296 || A > 56319 && A <= 65535)
          return r = this.index[A >> OA], r = (r << Ct) + (A & ft), this.data[r];
        if (A <= 65535)
          return r = this.index[FB + (A - 55296 >> OA)], r = (r << Ct) + (A & ft), this.data[r];
        if (A < this.highStart)
          return r = Zn - qn + (A >> ar), r = this.index[r], r += A >> OA & jn, r = this.index[r], r = (r << Ct) + (A & ft), this.data[r];
        if (A <= 1114111)
          return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, e;
  }()
), dr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", ts = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var He = 0; He < dr.length; He++)
  ts[dr.charCodeAt(He)] = He;
var rs = "KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==", Er = 50, Bs = 1, hB = 2, dB = 3, ns = 4, ss = 5, pr = 7, EB = 8, Hr = 9, HA = 10, Nt = 11, vr = 12, Xt = 13, is = 14, ne = 15, _t = 16, ve = 17, $A = 18, as = 19, Ir = 20, Pt = 21, Ae = 22, Ut = 23, VA = 24, AA = 25, se = 26, ie = 27, NA = 28, os = 29, TA = 30, cs = 31, Ie = 32, me = 33, Jt = 34, kt = 35, Yt = 36, Ce = 37, Wt = 38, Pe = 39, Je = 40, Ft = 41, pB = 42, Qs = 43, gs = [9001, 65288], HB = "!", m = "×", ye = "÷", Zt = As(rs), wA = [TA, Yt], qt = [Bs, hB, dB, ss], vB = [HA, EB], mr = [ie, se], ls = qt.concat(vB), yr = [Wt, Pe, Je, Jt, kt], ws = [ne, Xt], us = function(e, A) {
  A === void 0 && (A = "strict");
  var r = [], t = [], B = [];
  return e.forEach(function(n, s) {
    var a = Zt.get(n);
    if (a > Er ? (B.push(!0), a -= Er) : B.push(!1), ["normal", "auto", "loose"].indexOf(A) !== -1 && [8208, 8211, 12316, 12448].indexOf(n) !== -1)
      return t.push(s), r.push(_t);
    if (a === ns || a === Nt) {
      if (s === 0)
        return t.push(s), r.push(TA);
      var i = r[s - 1];
      return ls.indexOf(i) === -1 ? (t.push(t[s - 1]), r.push(i)) : (t.push(s), r.push(TA));
    }
    if (t.push(s), a === cs)
      return r.push(A === "strict" ? Pt : Ce);
    if (a === pB || a === os)
      return r.push(TA);
    if (a === Qs)
      return n >= 131072 && n <= 196605 || n >= 196608 && n <= 262141 ? r.push(Ce) : r.push(TA);
    r.push(a);
  }), [t, r, B];
}, ht = function(e, A, r, t) {
  var B = t[r];
  if (Array.isArray(e) ? e.indexOf(B) !== -1 : e === B)
    for (var n = r; n <= t.length; ) {
      n++;
      var s = t[n];
      if (s === A)
        return !0;
      if (s !== HA)
        break;
    }
  if (B === HA)
    for (var n = r; n > 0; ) {
      n--;
      var a = t[n];
      if (Array.isArray(e) ? e.indexOf(a) !== -1 : e === a)
        for (var i = r; i <= t.length; ) {
          i++;
          var s = t[i];
          if (s === A)
            return !0;
          if (s !== HA)
            break;
        }
      if (a !== HA)
        break;
    }
  return !1;
}, Kr = function(e, A) {
  for (var r = e; r >= 0; ) {
    var t = A[r];
    if (t === HA)
      r--;
    else
      return t;
  }
  return 0;
}, Cs = function(e, A, r, t, B) {
  if (r[t] === 0)
    return m;
  var n = t - 1;
  if (Array.isArray(B) && B[n] === !0)
    return m;
  var s = n - 1, a = n + 1, i = A[n], o = s >= 0 ? A[s] : 0, c = A[a];
  if (i === hB && c === dB)
    return m;
  if (qt.indexOf(i) !== -1)
    return HB;
  if (qt.indexOf(c) !== -1 || vB.indexOf(c) !== -1)
    return m;
  if (Kr(n, A) === EB)
    return ye;
  if (Zt.get(e[n]) === Nt || (i === Ie || i === me) && Zt.get(e[a]) === Nt || i === pr || c === pr || i === Hr || [HA, Xt, ne].indexOf(i) === -1 && c === Hr || [ve, $A, as, VA, NA].indexOf(c) !== -1 || Kr(n, A) === Ae || ht(Ut, Ae, n, A) || ht([ve, $A], Pt, n, A) || ht(vr, vr, n, A))
    return m;
  if (i === HA)
    return ye;
  if (i === Ut || c === Ut)
    return m;
  if (c === _t || i === _t)
    return ye;
  if ([Xt, ne, Pt].indexOf(c) !== -1 || i === is || o === Yt && ws.indexOf(i) !== -1 || i === NA && c === Yt || c === Ir || wA.indexOf(c) !== -1 && i === AA || wA.indexOf(i) !== -1 && c === AA || i === ie && [Ce, Ie, me].indexOf(c) !== -1 || [Ce, Ie, me].indexOf(i) !== -1 && c === se || wA.indexOf(i) !== -1 && mr.indexOf(c) !== -1 || mr.indexOf(i) !== -1 && wA.indexOf(c) !== -1 || // (PR | PO) × ( OP | HY )? NU
  [ie, se].indexOf(i) !== -1 && (c === AA || [Ae, ne].indexOf(c) !== -1 && A[a + 1] === AA) || // ( OP | HY ) × NU
  [Ae, ne].indexOf(i) !== -1 && c === AA || // NU ×	(NU | SY | IS)
  i === AA && [AA, NA, VA].indexOf(c) !== -1)
    return m;
  if ([AA, NA, VA, ve, $A].indexOf(c) !== -1)
    for (var Q = n; Q >= 0; ) {
      var g = A[Q];
      if (g === AA)
        return m;
      if ([NA, VA].indexOf(g) !== -1)
        Q--;
      else
        break;
    }
  if ([ie, se].indexOf(c) !== -1)
    for (var Q = [ve, $A].indexOf(i) !== -1 ? s : n; Q >= 0; ) {
      var g = A[Q];
      if (g === AA)
        return m;
      if ([NA, VA].indexOf(g) !== -1)
        Q--;
      else
        break;
    }
  if (Wt === i && [Wt, Pe, Jt, kt].indexOf(c) !== -1 || [Pe, Jt].indexOf(i) !== -1 && [Pe, Je].indexOf(c) !== -1 || [Je, kt].indexOf(i) !== -1 && c === Je || yr.indexOf(i) !== -1 && [Ir, se].indexOf(c) !== -1 || yr.indexOf(c) !== -1 && i === ie || wA.indexOf(i) !== -1 && wA.indexOf(c) !== -1 || i === VA && wA.indexOf(c) !== -1 || wA.concat(AA).indexOf(i) !== -1 && c === Ae && gs.indexOf(e[a]) === -1 || wA.concat(AA).indexOf(c) !== -1 && i === $A)
    return m;
  if (i === Ft && c === Ft) {
    for (var C = r[n], l = 1; C > 0 && (C--, A[C] === Ft); )
      l++;
    if (l % 2 !== 0)
      return m;
  }
  return i === Ie && c === me ? m : ye;
}, fs = function(e, A) {
  A || (A = { lineBreak: "normal", wordBreak: "normal" });
  var r = us(e, A.lineBreak), t = r[0], B = r[1], n = r[2];
  (A.wordBreak === "break-all" || A.wordBreak === "break-word") && (B = B.map(function(a) {
    return [AA, TA, pB].indexOf(a) !== -1 ? Ce : a;
  }));
  var s = A.wordBreak === "keep-all" ? n.map(function(a, i) {
    return a && e[i] >= 19968 && e[i] <= 40959;
  }) : void 0;
  return [t, B, s];
}, Us = (
  /** @class */
  function() {
    function e(A, r, t, B) {
      this.codePoints = A, this.required = r === HB, this.start = t, this.end = B;
    }
    return e.prototype.slice = function() {
      return M.apply(void 0, this.codePoints.slice(this.start, this.end));
    }, e;
  }()
), Fs = function(e, A) {
  var r = it(e), t = fs(r, A), B = t[0], n = t[1], s = t[2], a = r.length, i = 0, o = 0;
  return {
    next: function() {
      if (o >= a)
        return { done: !0, value: null };
      for (var c = m; o < a && (c = Cs(r, n, B, ++o, s)) === m; )
        ;
      if (c !== m || o === a) {
        var Q = new Us(r, c, i, o);
        return i = o, { value: Q, done: !1 };
      }
      return { done: !0, value: null };
    }
  };
}, hs = 1, ds = 2, Fe = 4, Lr = 8, We = 10, br = 47, Qe = 92, Es = 9, ps = 32, Ke = 34, ee = 61, Hs = 35, vs = 36, Is = 37, Le = 39, be = 40, te = 41, ms = 95, j = 45, ys = 33, Ks = 60, Ls = 62, bs = 64, Ds = 91, Ss = 93, xs = 61, Ts = 123, De = 63, Ms = 125, Dr = 124, Os = 126, Rs = 128, Sr = 65533, dt = 42, MA = 43, Gs = 44, Vs = 58, Ns = 59, fe = 46, Xs = 0, _s = 8, Ps = 11, Js = 14, ks = 31, Ys = 127, oA = -1, IB = 48, mB = 97, yB = 101, Ws = 102, Zs = 117, qs = 122, KB = 65, LB = 69, bB = 70, zs = 85, js = 90, k = function(e) {
  return e >= IB && e <= 57;
}, $s = function(e) {
  return e >= 55296 && e <= 57343;
}, XA = function(e) {
  return k(e) || e >= KB && e <= bB || e >= mB && e <= Ws;
}, Ai = function(e) {
  return e >= mB && e <= qs;
}, ei = function(e) {
  return e >= KB && e <= js;
}, ti = function(e) {
  return Ai(e) || ei(e);
}, ri = function(e) {
  return e >= Rs;
}, Se = function(e) {
  return e === We || e === Es || e === ps;
}, Ze = function(e) {
  return ti(e) || ri(e) || e === ms;
}, xr = function(e) {
  return Ze(e) || k(e) || e === j;
}, Bi = function(e) {
  return e >= Xs && e <= _s || e === Ps || e >= Js && e <= ks || e === Ys;
}, EA = function(e, A) {
  return e !== Qe ? !1 : A !== We;
}, xe = function(e, A, r) {
  return e === j ? Ze(A) || EA(A, r) : Ze(e) ? !0 : !!(e === Qe && EA(e, A));
}, Et = function(e, A, r) {
  return e === MA || e === j ? k(A) ? !0 : A === fe && k(r) : k(e === fe ? A : e);
}, ni = function(e) {
  var A = 0, r = 1;
  (e[A] === MA || e[A] === j) && (e[A] === j && (r = -1), A++);
  for (var t = []; k(e[A]); )
    t.push(e[A++]);
  var B = t.length ? parseInt(M.apply(void 0, t), 10) : 0;
  e[A] === fe && A++;
  for (var n = []; k(e[A]); )
    n.push(e[A++]);
  var s = n.length, a = s ? parseInt(M.apply(void 0, n), 10) : 0;
  (e[A] === LB || e[A] === yB) && A++;
  var i = 1;
  (e[A] === MA || e[A] === j) && (e[A] === j && (i = -1), A++);
  for (var o = []; k(e[A]); )
    o.push(e[A++]);
  var c = o.length ? parseInt(M.apply(void 0, o), 10) : 0;
  return r * (B + a * Math.pow(10, -s)) * Math.pow(10, i * c);
}, si = {
  type: 2
  /* LEFT_PARENTHESIS_TOKEN */
}, ii = {
  type: 3
  /* RIGHT_PARENTHESIS_TOKEN */
}, ai = {
  type: 4
  /* COMMA_TOKEN */
}, oi = {
  type: 13
  /* SUFFIX_MATCH_TOKEN */
}, ci = {
  type: 8
  /* PREFIX_MATCH_TOKEN */
}, Qi = {
  type: 21
  /* COLUMN_TOKEN */
}, gi = {
  type: 9
  /* DASH_MATCH_TOKEN */
}, li = {
  type: 10
  /* INCLUDE_MATCH_TOKEN */
}, wi = {
  type: 11
  /* LEFT_CURLY_BRACKET_TOKEN */
}, ui = {
  type: 12
  /* RIGHT_CURLY_BRACKET_TOKEN */
}, Ci = {
  type: 14
  /* SUBSTRING_MATCH_TOKEN */
}, Te = {
  type: 23
  /* BAD_URL_TOKEN */
}, fi = {
  type: 1
  /* BAD_STRING_TOKEN */
}, Ui = {
  type: 25
  /* CDO_TOKEN */
}, Fi = {
  type: 24
  /* CDC_TOKEN */
}, hi = {
  type: 26
  /* COLON_TOKEN */
}, di = {
  type: 27
  /* SEMICOLON_TOKEN */
}, Ei = {
  type: 28
  /* LEFT_SQUARE_BRACKET_TOKEN */
}, pi = {
  type: 29
  /* RIGHT_SQUARE_BRACKET_TOKEN */
}, Hi = {
  type: 31
  /* WHITESPACE_TOKEN */
}, zt = {
  type: 32
  /* EOF_TOKEN */
}, DB = (
  /** @class */
  function() {
    function e() {
      this._value = [];
    }
    return e.prototype.write = function(A) {
      this._value = this._value.concat(it(A));
    }, e.prototype.read = function() {
      for (var A = [], r = this.consumeToken(); r !== zt; )
        A.push(r), r = this.consumeToken();
      return A;
    }, e.prototype.consumeToken = function() {
      var A = this.consumeCodePoint();
      switch (A) {
        case Ke:
          return this.consumeStringToken(Ke);
        case Hs:
          var r = this.peekCodePoint(0), t = this.peekCodePoint(1), B = this.peekCodePoint(2);
          if (xr(r) || EA(t, B)) {
            var n = xe(r, t, B) ? ds : hs, s = this.consumeName();
            return { type: 5, value: s, flags: n };
          }
          break;
        case vs:
          if (this.peekCodePoint(0) === ee)
            return this.consumeCodePoint(), oi;
          break;
        case Le:
          return this.consumeStringToken(Le);
        case be:
          return si;
        case te:
          return ii;
        case dt:
          if (this.peekCodePoint(0) === ee)
            return this.consumeCodePoint(), Ci;
          break;
        case MA:
          if (Et(A, this.peekCodePoint(0), this.peekCodePoint(1)))
            return this.reconsumeCodePoint(A), this.consumeNumericToken();
          break;
        case Gs:
          return ai;
        case j:
          var a = A, i = this.peekCodePoint(0), o = this.peekCodePoint(1);
          if (Et(a, i, o))
            return this.reconsumeCodePoint(A), this.consumeNumericToken();
          if (xe(a, i, o))
            return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
          if (i === j && o === Ls)
            return this.consumeCodePoint(), this.consumeCodePoint(), Fi;
          break;
        case fe:
          if (Et(A, this.peekCodePoint(0), this.peekCodePoint(1)))
            return this.reconsumeCodePoint(A), this.consumeNumericToken();
          break;
        case br:
          if (this.peekCodePoint(0) === dt)
            for (this.consumeCodePoint(); ; ) {
              var c = this.consumeCodePoint();
              if (c === dt && (c = this.consumeCodePoint(), c === br))
                return this.consumeToken();
              if (c === oA)
                return this.consumeToken();
            }
          break;
        case Vs:
          return hi;
        case Ns:
          return di;
        case Ks:
          if (this.peekCodePoint(0) === ys && this.peekCodePoint(1) === j && this.peekCodePoint(2) === j)
            return this.consumeCodePoint(), this.consumeCodePoint(), Ui;
          break;
        case bs:
          var Q = this.peekCodePoint(0), g = this.peekCodePoint(1), C = this.peekCodePoint(2);
          if (xe(Q, g, C)) {
            var s = this.consumeName();
            return { type: 7, value: s };
          }
          break;
        case Ds:
          return Ei;
        case Qe:
          if (EA(A, this.peekCodePoint(0)))
            return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
          break;
        case Ss:
          return pi;
        case xs:
          if (this.peekCodePoint(0) === ee)
            return this.consumeCodePoint(), ci;
          break;
        case Ts:
          return wi;
        case Ms:
          return ui;
        case Zs:
        case zs:
          var l = this.peekCodePoint(0), u = this.peekCodePoint(1);
          return l === MA && (XA(u) || u === De) && (this.consumeCodePoint(), this.consumeUnicodeRangeToken()), this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
        case Dr:
          if (this.peekCodePoint(0) === ee)
            return this.consumeCodePoint(), gi;
          if (this.peekCodePoint(0) === Dr)
            return this.consumeCodePoint(), Qi;
          break;
        case Os:
          if (this.peekCodePoint(0) === ee)
            return this.consumeCodePoint(), li;
          break;
        case oA:
          return zt;
      }
      return Se(A) ? (this.consumeWhiteSpace(), Hi) : k(A) ? (this.reconsumeCodePoint(A), this.consumeNumericToken()) : Ze(A) ? (this.reconsumeCodePoint(A), this.consumeIdentLikeToken()) : { type: 6, value: M(A) };
    }, e.prototype.consumeCodePoint = function() {
      var A = this._value.shift();
      return typeof A > "u" ? -1 : A;
    }, e.prototype.reconsumeCodePoint = function(A) {
      this._value.unshift(A);
    }, e.prototype.peekCodePoint = function(A) {
      return A >= this._value.length ? -1 : this._value[A];
    }, e.prototype.consumeUnicodeRangeToken = function() {
      for (var A = [], r = this.consumeCodePoint(); XA(r) && A.length < 6; )
        A.push(r), r = this.consumeCodePoint();
      for (var t = !1; r === De && A.length < 6; )
        A.push(r), r = this.consumeCodePoint(), t = !0;
      if (t) {
        var B = parseInt(M.apply(void 0, A.map(function(i) {
          return i === De ? IB : i;
        })), 16), n = parseInt(M.apply(void 0, A.map(function(i) {
          return i === De ? bB : i;
        })), 16);
        return { type: 30, start: B, end: n };
      }
      var s = parseInt(M.apply(void 0, A), 16);
      if (this.peekCodePoint(0) === j && XA(this.peekCodePoint(1))) {
        this.consumeCodePoint(), r = this.consumeCodePoint();
        for (var a = []; XA(r) && a.length < 6; )
          a.push(r), r = this.consumeCodePoint();
        var n = parseInt(M.apply(void 0, a), 16);
        return { type: 30, start: s, end: n };
      } else
        return { type: 30, start: s, end: s };
    }, e.prototype.consumeIdentLikeToken = function() {
      var A = this.consumeName();
      return A.toLowerCase() === "url" && this.peekCodePoint(0) === be ? (this.consumeCodePoint(), this.consumeUrlToken()) : this.peekCodePoint(0) === be ? (this.consumeCodePoint(), { type: 19, value: A }) : { type: 20, value: A };
    }, e.prototype.consumeUrlToken = function() {
      var A = [];
      if (this.consumeWhiteSpace(), this.peekCodePoint(0) === oA)
        return { type: 22, value: "" };
      var r = this.peekCodePoint(0);
      if (r === Le || r === Ke) {
        var t = this.consumeStringToken(this.consumeCodePoint());
        return t.type === 0 && (this.consumeWhiteSpace(), this.peekCodePoint(0) === oA || this.peekCodePoint(0) === te) ? (this.consumeCodePoint(), { type: 22, value: t.value }) : (this.consumeBadUrlRemnants(), Te);
      }
      for (; ; ) {
        var B = this.consumeCodePoint();
        if (B === oA || B === te)
          return { type: 22, value: M.apply(void 0, A) };
        if (Se(B))
          return this.consumeWhiteSpace(), this.peekCodePoint(0) === oA || this.peekCodePoint(0) === te ? (this.consumeCodePoint(), { type: 22, value: M.apply(void 0, A) }) : (this.consumeBadUrlRemnants(), Te);
        if (B === Ke || B === Le || B === be || Bi(B))
          return this.consumeBadUrlRemnants(), Te;
        if (B === Qe)
          if (EA(B, this.peekCodePoint(0)))
            A.push(this.consumeEscapedCodePoint());
          else
            return this.consumeBadUrlRemnants(), Te;
        else
          A.push(B);
      }
    }, e.prototype.consumeWhiteSpace = function() {
      for (; Se(this.peekCodePoint(0)); )
        this.consumeCodePoint();
    }, e.prototype.consumeBadUrlRemnants = function() {
      for (; ; ) {
        var A = this.consumeCodePoint();
        if (A === te || A === oA)
          return;
        EA(A, this.peekCodePoint(0)) && this.consumeEscapedCodePoint();
      }
    }, e.prototype.consumeStringSlice = function(A) {
      for (var r = 5e4, t = ""; A > 0; ) {
        var B = Math.min(r, A);
        t += M.apply(void 0, this._value.splice(0, B)), A -= B;
      }
      return this._value.shift(), t;
    }, e.prototype.consumeStringToken = function(A) {
      var r = "", t = 0;
      do {
        var B = this._value[t];
        if (B === oA || B === void 0 || B === A)
          return r += this.consumeStringSlice(t), { type: 0, value: r };
        if (B === We)
          return this._value.splice(0, t), fi;
        if (B === Qe) {
          var n = this._value[t + 1];
          n !== oA && n !== void 0 && (n === We ? (r += this.consumeStringSlice(t), t = -1, this._value.shift()) : EA(B, n) && (r += this.consumeStringSlice(t), r += M(this.consumeEscapedCodePoint()), t = -1));
        }
        t++;
      } while (!0);
    }, e.prototype.consumeNumber = function() {
      var A = [], r = Fe, t = this.peekCodePoint(0);
      for ((t === MA || t === j) && A.push(this.consumeCodePoint()); k(this.peekCodePoint(0)); )
        A.push(this.consumeCodePoint());
      t = this.peekCodePoint(0);
      var B = this.peekCodePoint(1);
      if (t === fe && k(B))
        for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), r = Lr; k(this.peekCodePoint(0)); )
          A.push(this.consumeCodePoint());
      t = this.peekCodePoint(0), B = this.peekCodePoint(1);
      var n = this.peekCodePoint(2);
      if ((t === LB || t === yB) && ((B === MA || B === j) && k(n) || k(B)))
        for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), r = Lr; k(this.peekCodePoint(0)); )
          A.push(this.consumeCodePoint());
      return [ni(A), r];
    }, e.prototype.consumeNumericToken = function() {
      var A = this.consumeNumber(), r = A[0], t = A[1], B = this.peekCodePoint(0), n = this.peekCodePoint(1), s = this.peekCodePoint(2);
      if (xe(B, n, s)) {
        var a = this.consumeName();
        return { type: 15, number: r, flags: t, unit: a };
      }
      return B === Is ? (this.consumeCodePoint(), { type: 16, number: r, flags: t }) : { type: 17, number: r, flags: t };
    }, e.prototype.consumeEscapedCodePoint = function() {
      var A = this.consumeCodePoint();
      if (XA(A)) {
        for (var r = M(A); XA(this.peekCodePoint(0)) && r.length < 6; )
          r += M(this.consumeCodePoint());
        Se(this.peekCodePoint(0)) && this.consumeCodePoint();
        var t = parseInt(r, 16);
        return t === 0 || $s(t) || t > 1114111 ? Sr : t;
      }
      return A === oA ? Sr : A;
    }, e.prototype.consumeName = function() {
      for (var A = ""; ; ) {
        var r = this.consumeCodePoint();
        if (xr(r))
          A += M(r);
        else if (EA(r, this.peekCodePoint(0)))
          A += M(this.consumeEscapedCodePoint());
        else
          return this.reconsumeCodePoint(r), A;
      }
    }, e;
  }()
), SB = (
  /** @class */
  function() {
    function e(A) {
      this._tokens = A;
    }
    return e.create = function(A) {
      var r = new DB();
      return r.write(A), new e(r.read());
    }, e.parseValue = function(A) {
      return e.create(A).parseComponentValue();
    }, e.parseValues = function(A) {
      return e.create(A).parseComponentValues();
    }, e.prototype.parseComponentValue = function() {
      for (var A = this.consumeToken(); A.type === 31; )
        A = this.consumeToken();
      if (A.type === 32)
        throw new SyntaxError("Error parsing CSS component value, unexpected EOF");
      this.reconsumeToken(A);
      var r = this.consumeComponentValue();
      do
        A = this.consumeToken();
      while (A.type === 31);
      if (A.type === 32)
        return r;
      throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one");
    }, e.prototype.parseComponentValues = function() {
      for (var A = []; ; ) {
        var r = this.consumeComponentValue();
        if (r.type === 32)
          return A;
        A.push(r), A.push();
      }
    }, e.prototype.consumeComponentValue = function() {
      var A = this.consumeToken();
      switch (A.type) {
        case 11:
        case 28:
        case 2:
          return this.consumeSimpleBlock(A.type);
        case 19:
          return this.consumeFunction(A);
      }
      return A;
    }, e.prototype.consumeSimpleBlock = function(A) {
      for (var r = { type: A, values: [] }, t = this.consumeToken(); ; ) {
        if (t.type === 32 || Ii(t, A))
          return r;
        this.reconsumeToken(t), r.values.push(this.consumeComponentValue()), t = this.consumeToken();
      }
    }, e.prototype.consumeFunction = function(A) {
      for (var r = {
        name: A.value,
        values: [],
        type: 18
        /* FUNCTION */
      }; ; ) {
        var t = this.consumeToken();
        if (t.type === 32 || t.type === 3)
          return r;
        this.reconsumeToken(t), r.values.push(this.consumeComponentValue());
      }
    }, e.prototype.consumeToken = function() {
      var A = this._tokens.shift();
      return typeof A > "u" ? zt : A;
    }, e.prototype.reconsumeToken = function(A) {
      this._tokens.unshift(A);
    }, e;
  }()
), he = function(e) {
  return e.type === 15;
}, zA = function(e) {
  return e.type === 17;
}, D = function(e) {
  return e.type === 20;
}, vi = function(e) {
  return e.type === 0;
}, jt = function(e, A) {
  return D(e) && e.value === A;
}, xB = function(e) {
  return e.type !== 31;
}, qA = function(e) {
  return e.type !== 31 && e.type !== 4;
}, cA = function(e) {
  var A = [], r = [];
  return e.forEach(function(t) {
    if (t.type === 4) {
      if (r.length === 0)
        throw new Error("Error parsing function args, zero tokens for arg");
      A.push(r), r = [];
      return;
    }
    t.type !== 31 && r.push(t);
  }), r.length && A.push(r), A;
}, Ii = function(e, A) {
  return A === 11 && e.type === 12 || A === 28 && e.type === 29 ? !0 : A === 2 && e.type === 3;
}, KA = function(e) {
  return e.type === 17 || e.type === 15;
}, R = function(e) {
  return e.type === 16 || KA(e);
}, TB = function(e) {
  return e.length > 1 ? [e[0], e[1]] : [e[0]];
}, _ = {
  type: 17,
  number: 0,
  flags: Fe
}, or = {
  type: 16,
  number: 50,
  flags: Fe
}, vA = {
  type: 16,
  number: 100,
  flags: Fe
}, ae = function(e, A, r) {
  var t = e[0], B = e[1];
  return [S(t, A), S(typeof B < "u" ? B : t, r)];
}, S = function(e, A) {
  if (e.type === 16)
    return e.number / 100 * A;
  if (he(e))
    switch (e.unit) {
      case "rem":
      case "em":
        return 16 * e.number;
      case "px":
      default:
        return e.number;
    }
  return e.number;
}, MB = "deg", OB = "grad", RB = "rad", GB = "turn", at = {
  name: "angle",
  parse: function(e, A) {
    if (A.type === 15)
      switch (A.unit) {
        case MB:
          return Math.PI * A.number / 180;
        case OB:
          return Math.PI / 200 * A.number;
        case RB:
          return A.number;
        case GB:
          return Math.PI * 2 * A.number;
      }
    throw new Error("Unsupported angle type");
  }
}, VB = function(e) {
  return e.type === 15 && (e.unit === MB || e.unit === OB || e.unit === RB || e.unit === GB);
}, NB = function(e) {
  var A = e.filter(D).map(function(r) {
    return r.value;
  }).join(" ");
  switch (A) {
    case "to bottom right":
    case "to right bottom":
    case "left top":
    case "top left":
      return [_, _];
    case "to top":
    case "bottom":
      return BA(0);
    case "to bottom left":
    case "to left bottom":
    case "right top":
    case "top right":
      return [_, vA];
    case "to right":
    case "left":
      return BA(90);
    case "to top left":
    case "to left top":
    case "right bottom":
    case "bottom right":
      return [vA, vA];
    case "to bottom":
    case "top":
      return BA(180);
    case "to top right":
    case "to right top":
    case "left bottom":
    case "bottom left":
      return [vA, _];
    case "to left":
    case "right":
      return BA(270);
  }
  return 0;
}, BA = function(e) {
  return Math.PI * e / 180;
}, mA = {
  name: "color",
  parse: function(e, A) {
    if (A.type === 18) {
      var r = mi[A.name];
      if (typeof r > "u")
        throw new Error('Attempting to parse an unsupported color function "' + A.name + '"');
      return r(e, A.values);
    }
    if (A.type === 5) {
      if (A.value.length === 3) {
        var t = A.value.substring(0, 1), B = A.value.substring(1, 2), n = A.value.substring(2, 3);
        return IA(parseInt(t + t, 16), parseInt(B + B, 16), parseInt(n + n, 16), 1);
      }
      if (A.value.length === 4) {
        var t = A.value.substring(0, 1), B = A.value.substring(1, 2), n = A.value.substring(2, 3), s = A.value.substring(3, 4);
        return IA(parseInt(t + t, 16), parseInt(B + B, 16), parseInt(n + n, 16), parseInt(s + s, 16) / 255);
      }
      if (A.value.length === 6) {
        var t = A.value.substring(0, 2), B = A.value.substring(2, 4), n = A.value.substring(4, 6);
        return IA(parseInt(t, 16), parseInt(B, 16), parseInt(n, 16), 1);
      }
      if (A.value.length === 8) {
        var t = A.value.substring(0, 2), B = A.value.substring(2, 4), n = A.value.substring(4, 6), s = A.value.substring(6, 8);
        return IA(parseInt(t, 16), parseInt(B, 16), parseInt(n, 16), parseInt(s, 16) / 255);
      }
    }
    if (A.type === 20) {
      var a = CA[A.value.toUpperCase()];
      if (typeof a < "u")
        return a;
    }
    return CA.TRANSPARENT;
  }
}, yA = function(e) {
  return (255 & e) === 0;
}, V = function(e) {
  var A = 255 & e, r = 255 & e >> 8, t = 255 & e >> 16, B = 255 & e >> 24;
  return A < 255 ? "rgba(" + B + "," + t + "," + r + "," + A / 255 + ")" : "rgb(" + B + "," + t + "," + r + ")";
}, IA = function(e, A, r, t) {
  return (e << 24 | A << 16 | r << 8 | Math.round(t * 255) << 0) >>> 0;
}, Tr = function(e, A) {
  if (e.type === 17)
    return e.number;
  if (e.type === 16) {
    var r = A === 3 ? 1 : 255;
    return A === 3 ? e.number / 100 * r : Math.round(e.number / 100 * r);
  }
  return 0;
}, Mr = function(e, A) {
  var r = A.filter(qA);
  if (r.length === 3) {
    var t = r.map(Tr), B = t[0], n = t[1], s = t[2];
    return IA(B, n, s, 1);
  }
  if (r.length === 4) {
    var a = r.map(Tr), B = a[0], n = a[1], s = a[2], i = a[3];
    return IA(B, n, s, i);
  }
  return 0;
};
function pt(e, A, r) {
  return r < 0 && (r += 1), r >= 1 && (r -= 1), r < 1 / 6 ? (A - e) * r * 6 + e : r < 1 / 2 ? A : r < 2 / 3 ? (A - e) * 6 * (2 / 3 - r) + e : e;
}
var Or = function(e, A) {
  var r = A.filter(qA), t = r[0], B = r[1], n = r[2], s = r[3], a = (t.type === 17 ? BA(t.number) : at.parse(e, t)) / (Math.PI * 2), i = R(B) ? B.number / 100 : 0, o = R(n) ? n.number / 100 : 0, c = typeof s < "u" && R(s) ? S(s, 1) : 1;
  if (i === 0)
    return IA(o * 255, o * 255, o * 255, 1);
  var Q = o <= 0.5 ? o * (i + 1) : o + i - o * i, g = o * 2 - Q, C = pt(g, Q, a + 1 / 3), l = pt(g, Q, a), u = pt(g, Q, a - 1 / 3);
  return IA(C * 255, l * 255, u * 255, c);
}, mi = {
  hsl: Or,
  hsla: Or,
  rgb: Mr,
  rgba: Mr
}, ge = function(e, A) {
  return mA.parse(e, SB.create(A).parseComponentValue());
}, CA = {
  ALICEBLUE: 4042850303,
  ANTIQUEWHITE: 4209760255,
  AQUA: 16777215,
  AQUAMARINE: 2147472639,
  AZURE: 4043309055,
  BEIGE: 4126530815,
  BISQUE: 4293182719,
  BLACK: 255,
  BLANCHEDALMOND: 4293643775,
  BLUE: 65535,
  BLUEVIOLET: 2318131967,
  BROWN: 2771004159,
  BURLYWOOD: 3736635391,
  CADETBLUE: 1604231423,
  CHARTREUSE: 2147418367,
  CHOCOLATE: 3530104575,
  CORAL: 4286533887,
  CORNFLOWERBLUE: 1687547391,
  CORNSILK: 4294499583,
  CRIMSON: 3692313855,
  CYAN: 16777215,
  DARKBLUE: 35839,
  DARKCYAN: 9145343,
  DARKGOLDENROD: 3095837695,
  DARKGRAY: 2846468607,
  DARKGREEN: 6553855,
  DARKGREY: 2846468607,
  DARKKHAKI: 3182914559,
  DARKMAGENTA: 2332068863,
  DARKOLIVEGREEN: 1433087999,
  DARKORANGE: 4287365375,
  DARKORCHID: 2570243327,
  DARKRED: 2332033279,
  DARKSALMON: 3918953215,
  DARKSEAGREEN: 2411499519,
  DARKSLATEBLUE: 1211993087,
  DARKSLATEGRAY: 793726975,
  DARKSLATEGREY: 793726975,
  DARKTURQUOISE: 13554175,
  DARKVIOLET: 2483082239,
  DEEPPINK: 4279538687,
  DEEPSKYBLUE: 12582911,
  DIMGRAY: 1768516095,
  DIMGREY: 1768516095,
  DODGERBLUE: 512819199,
  FIREBRICK: 2988581631,
  FLORALWHITE: 4294635775,
  FORESTGREEN: 579543807,
  FUCHSIA: 4278255615,
  GAINSBORO: 3705462015,
  GHOSTWHITE: 4177068031,
  GOLD: 4292280575,
  GOLDENROD: 3668254975,
  GRAY: 2155905279,
  GREEN: 8388863,
  GREENYELLOW: 2919182335,
  GREY: 2155905279,
  HONEYDEW: 4043305215,
  HOTPINK: 4285117695,
  INDIANRED: 3445382399,
  INDIGO: 1258324735,
  IVORY: 4294963455,
  KHAKI: 4041641215,
  LAVENDER: 3873897215,
  LAVENDERBLUSH: 4293981695,
  LAWNGREEN: 2096890111,
  LEMONCHIFFON: 4294626815,
  LIGHTBLUE: 2916673279,
  LIGHTCORAL: 4034953471,
  LIGHTCYAN: 3774873599,
  LIGHTGOLDENRODYELLOW: 4210742015,
  LIGHTGRAY: 3553874943,
  LIGHTGREEN: 2431553791,
  LIGHTGREY: 3553874943,
  LIGHTPINK: 4290167295,
  LIGHTSALMON: 4288707327,
  LIGHTSEAGREEN: 548580095,
  LIGHTSKYBLUE: 2278488831,
  LIGHTSLATEGRAY: 2005441023,
  LIGHTSLATEGREY: 2005441023,
  LIGHTSTEELBLUE: 2965692159,
  LIGHTYELLOW: 4294959359,
  LIME: 16711935,
  LIMEGREEN: 852308735,
  LINEN: 4210091775,
  MAGENTA: 4278255615,
  MAROON: 2147483903,
  MEDIUMAQUAMARINE: 1724754687,
  MEDIUMBLUE: 52735,
  MEDIUMORCHID: 3126187007,
  MEDIUMPURPLE: 2473647103,
  MEDIUMSEAGREEN: 1018393087,
  MEDIUMSLATEBLUE: 2070474495,
  MEDIUMSPRINGGREEN: 16423679,
  MEDIUMTURQUOISE: 1221709055,
  MEDIUMVIOLETRED: 3340076543,
  MIDNIGHTBLUE: 421097727,
  MINTCREAM: 4127193855,
  MISTYROSE: 4293190143,
  MOCCASIN: 4293178879,
  NAVAJOWHITE: 4292783615,
  NAVY: 33023,
  OLDLACE: 4260751103,
  OLIVE: 2155872511,
  OLIVEDRAB: 1804477439,
  ORANGE: 4289003775,
  ORANGERED: 4282712319,
  ORCHID: 3664828159,
  PALEGOLDENROD: 4008225535,
  PALEGREEN: 2566625535,
  PALETURQUOISE: 2951671551,
  PALEVIOLETRED: 3681588223,
  PAPAYAWHIP: 4293907967,
  PEACHPUFF: 4292524543,
  PERU: 3448061951,
  PINK: 4290825215,
  PLUM: 3718307327,
  POWDERBLUE: 2967529215,
  PURPLE: 2147516671,
  REBECCAPURPLE: 1714657791,
  RED: 4278190335,
  ROSYBROWN: 3163525119,
  ROYALBLUE: 1097458175,
  SADDLEBROWN: 2336560127,
  SALMON: 4202722047,
  SANDYBROWN: 4104413439,
  SEAGREEN: 780883967,
  SEASHELL: 4294307583,
  SIENNA: 2689740287,
  SILVER: 3233857791,
  SKYBLUE: 2278484991,
  SLATEBLUE: 1784335871,
  SLATEGRAY: 1887473919,
  SLATEGREY: 1887473919,
  SNOW: 4294638335,
  SPRINGGREEN: 16744447,
  STEELBLUE: 1182971135,
  TAN: 3535047935,
  TEAL: 8421631,
  THISTLE: 3636451583,
  TOMATO: 4284696575,
  TRANSPARENT: 0,
  TURQUOISE: 1088475391,
  VIOLET: 4001558271,
  WHEAT: 4125012991,
  WHITE: 4294967295,
  WHITESMOKE: 4126537215,
  YELLOW: 4294902015,
  YELLOWGREEN: 2597139199
}, yi = {
  name: "background-clip",
  initialValue: "border-box",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return A.map(function(r) {
      if (D(r))
        switch (r.value) {
          case "padding-box":
            return 1;
          case "content-box":
            return 2;
        }
      return 0;
    });
  }
}, Ki = {
  name: "background-color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, ot = function(e, A) {
  var r = mA.parse(e, A[0]), t = A[1];
  return t && R(t) ? { color: r, stop: t } : { color: r, stop: null };
}, Rr = function(e, A) {
  var r = e[0], t = e[e.length - 1];
  r.stop === null && (r.stop = _), t.stop === null && (t.stop = vA);
  for (var B = [], n = 0, s = 0; s < e.length; s++) {
    var a = e[s].stop;
    if (a !== null) {
      var i = S(a, A);
      i > n ? B.push(i) : B.push(n), n = i;
    } else
      B.push(null);
  }
  for (var o = null, s = 0; s < B.length; s++) {
    var c = B[s];
    if (c === null)
      o === null && (o = s);
    else if (o !== null) {
      for (var Q = s - o, g = B[o - 1], C = (c - g) / (Q + 1), l = 1; l <= Q; l++)
        B[o + l - 1] = C * l;
      o = null;
    }
  }
  return e.map(function(u, H) {
    var h = u.color;
    return { color: h, stop: Math.max(Math.min(1, B[H] / A), 0) };
  });
}, Li = function(e, A, r) {
  var t = A / 2, B = r / 2, n = S(e[0], A) - t, s = B - S(e[1], r);
  return (Math.atan2(s, n) + Math.PI * 2) % (Math.PI * 2);
}, bi = function(e, A, r) {
  var t = typeof e == "number" ? e : Li(e, A, r), B = Math.abs(A * Math.sin(t)) + Math.abs(r * Math.cos(t)), n = A / 2, s = r / 2, a = B / 2, i = Math.sin(t - Math.PI / 2) * a, o = Math.cos(t - Math.PI / 2) * a;
  return [B, n - o, n + o, s - i, s + i];
}, sA = function(e, A) {
  return Math.sqrt(e * e + A * A);
}, Gr = function(e, A, r, t, B) {
  var n = [
    [0, 0],
    [0, A],
    [e, 0],
    [e, A]
  ];
  return n.reduce(function(s, a) {
    var i = a[0], o = a[1], c = sA(r - i, t - o);
    return (B ? c < s.optimumDistance : c > s.optimumDistance) ? {
      optimumCorner: a,
      optimumDistance: c
    } : s;
  }, {
    optimumDistance: B ? 1 / 0 : -1 / 0,
    optimumCorner: null
  }).optimumCorner;
}, Di = function(e, A, r, t, B) {
  var n = 0, s = 0;
  switch (e.size) {
    case 0:
      e.shape === 0 ? n = s = Math.min(Math.abs(A), Math.abs(A - t), Math.abs(r), Math.abs(r - B)) : e.shape === 1 && (n = Math.min(Math.abs(A), Math.abs(A - t)), s = Math.min(Math.abs(r), Math.abs(r - B)));
      break;
    case 2:
      if (e.shape === 0)
        n = s = Math.min(sA(A, r), sA(A, r - B), sA(A - t, r), sA(A - t, r - B));
      else if (e.shape === 1) {
        var a = Math.min(Math.abs(r), Math.abs(r - B)) / Math.min(Math.abs(A), Math.abs(A - t)), i = Gr(t, B, A, r, !0), o = i[0], c = i[1];
        n = sA(o - A, (c - r) / a), s = a * n;
      }
      break;
    case 1:
      e.shape === 0 ? n = s = Math.max(Math.abs(A), Math.abs(A - t), Math.abs(r), Math.abs(r - B)) : e.shape === 1 && (n = Math.max(Math.abs(A), Math.abs(A - t)), s = Math.max(Math.abs(r), Math.abs(r - B)));
      break;
    case 3:
      if (e.shape === 0)
        n = s = Math.max(sA(A, r), sA(A, r - B), sA(A - t, r), sA(A - t, r - B));
      else if (e.shape === 1) {
        var a = Math.max(Math.abs(r), Math.abs(r - B)) / Math.max(Math.abs(A), Math.abs(A - t)), Q = Gr(t, B, A, r, !1), o = Q[0], c = Q[1];
        n = sA(o - A, (c - r) / a), s = a * n;
      }
      break;
  }
  return Array.isArray(e.size) && (n = S(e.size[0], t), s = e.size.length === 2 ? S(e.size[1], B) : n), [n, s];
}, Si = function(e, A) {
  var r = BA(180), t = [];
  return cA(A).forEach(function(B, n) {
    if (n === 0) {
      var s = B[0];
      if (s.type === 20 && s.value === "to") {
        r = NB(B);
        return;
      } else if (VB(s)) {
        r = at.parse(e, s);
        return;
      }
    }
    var a = ot(e, B);
    t.push(a);
  }), {
    angle: r,
    stops: t,
    type: 1
    /* LINEAR_GRADIENT */
  };
}, Me = function(e, A) {
  var r = BA(180), t = [];
  return cA(A).forEach(function(B, n) {
    if (n === 0) {
      var s = B[0];
      if (s.type === 20 && ["top", "left", "right", "bottom"].indexOf(s.value) !== -1) {
        r = NB(B);
        return;
      } else if (VB(s)) {
        r = (at.parse(e, s) + BA(270)) % BA(360);
        return;
      }
    }
    var a = ot(e, B);
    t.push(a);
  }), {
    angle: r,
    stops: t,
    type: 1
    /* LINEAR_GRADIENT */
  };
}, xi = function(e, A) {
  var r = BA(180), t = [], B = 1, n = 0, s = 3, a = [];
  return cA(A).forEach(function(i, o) {
    var c = i[0];
    if (o === 0) {
      if (D(c) && c.value === "linear") {
        B = 1;
        return;
      } else if (D(c) && c.value === "radial") {
        B = 2;
        return;
      }
    }
    if (c.type === 18) {
      if (c.name === "from") {
        var Q = mA.parse(e, c.values[0]);
        t.push({ stop: _, color: Q });
      } else if (c.name === "to") {
        var Q = mA.parse(e, c.values[0]);
        t.push({ stop: vA, color: Q });
      } else if (c.name === "color-stop") {
        var g = c.values.filter(qA);
        if (g.length === 2) {
          var Q = mA.parse(e, g[1]), C = g[0];
          zA(C) && t.push({
            stop: { type: 16, number: C.number * 100, flags: C.flags },
            color: Q
          });
        }
      }
    }
  }), B === 1 ? {
    angle: (r + BA(180)) % BA(360),
    stops: t,
    type: B
  } : { size: s, shape: n, stops: t, position: a, type: B };
}, XB = "closest-side", _B = "farthest-side", PB = "closest-corner", JB = "farthest-corner", kB = "circle", YB = "ellipse", WB = "cover", ZB = "contain", Ti = function(e, A) {
  var r = 0, t = 3, B = [], n = [];
  return cA(A).forEach(function(s, a) {
    var i = !0;
    if (a === 0) {
      var o = !1;
      i = s.reduce(function(Q, g) {
        if (o)
          if (D(g))
            switch (g.value) {
              case "center":
                return n.push(or), Q;
              case "top":
              case "left":
                return n.push(_), Q;
              case "right":
              case "bottom":
                return n.push(vA), Q;
            }
          else
            (R(g) || KA(g)) && n.push(g);
        else if (D(g))
          switch (g.value) {
            case kB:
              return r = 0, !1;
            case YB:
              return r = 1, !1;
            case "at":
              return o = !0, !1;
            case XB:
              return t = 0, !1;
            case WB:
            case _B:
              return t = 1, !1;
            case ZB:
            case PB:
              return t = 2, !1;
            case JB:
              return t = 3, !1;
          }
        else if (KA(g) || R(g))
          return Array.isArray(t) || (t = []), t.push(g), !1;
        return Q;
      }, i);
    }
    if (i) {
      var c = ot(e, s);
      B.push(c);
    }
  }), {
    size: t,
    shape: r,
    stops: B,
    position: n,
    type: 2
    /* RADIAL_GRADIENT */
  };
}, Oe = function(e, A) {
  var r = 0, t = 3, B = [], n = [];
  return cA(A).forEach(function(s, a) {
    var i = !0;
    if (a === 0 ? i = s.reduce(function(c, Q) {
      if (D(Q))
        switch (Q.value) {
          case "center":
            return n.push(or), !1;
          case "top":
          case "left":
            return n.push(_), !1;
          case "right":
          case "bottom":
            return n.push(vA), !1;
        }
      else if (R(Q) || KA(Q))
        return n.push(Q), !1;
      return c;
    }, i) : a === 1 && (i = s.reduce(function(c, Q) {
      if (D(Q))
        switch (Q.value) {
          case kB:
            return r = 0, !1;
          case YB:
            return r = 1, !1;
          case ZB:
          case XB:
            return t = 0, !1;
          case _B:
            return t = 1, !1;
          case PB:
            return t = 2, !1;
          case WB:
          case JB:
            return t = 3, !1;
        }
      else if (KA(Q) || R(Q))
        return Array.isArray(t) || (t = []), t.push(Q), !1;
      return c;
    }, i)), i) {
      var o = ot(e, s);
      B.push(o);
    }
  }), {
    size: t,
    shape: r,
    stops: B,
    position: n,
    type: 2
    /* RADIAL_GRADIENT */
  };
}, Mi = function(e) {
  return e.type === 1;
}, Oi = function(e) {
  return e.type === 2;
}, cr = {
  name: "image",
  parse: function(e, A) {
    if (A.type === 22) {
      var r = {
        url: A.value,
        type: 0
        /* URL */
      };
      return e.cache.addImage(A.value), r;
    }
    if (A.type === 18) {
      var t = qB[A.name];
      if (typeof t > "u")
        throw new Error('Attempting to parse an unsupported image function "' + A.name + '"');
      return t(e, A.values);
    }
    throw new Error("Unsupported image type " + A.type);
  }
};
function Ri(e) {
  return !(e.type === 20 && e.value === "none") && (e.type !== 18 || !!qB[e.name]);
}
var qB = {
  "linear-gradient": Si,
  "-moz-linear-gradient": Me,
  "-ms-linear-gradient": Me,
  "-o-linear-gradient": Me,
  "-webkit-linear-gradient": Me,
  "radial-gradient": Ti,
  "-moz-radial-gradient": Oe,
  "-ms-radial-gradient": Oe,
  "-o-radial-gradient": Oe,
  "-webkit-radial-gradient": Oe,
  "-webkit-gradient": xi
}, Gi = {
  name: "background-image",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(e, A) {
    if (A.length === 0)
      return [];
    var r = A[0];
    return r.type === 20 && r.value === "none" ? [] : A.filter(function(t) {
      return qA(t) && Ri(t);
    }).map(function(t) {
      return cr.parse(e, t);
    });
  }
}, Vi = {
  name: "background-origin",
  initialValue: "border-box",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return A.map(function(r) {
      if (D(r))
        switch (r.value) {
          case "padding-box":
            return 1;
          case "content-box":
            return 2;
        }
      return 0;
    });
  }
}, Ni = {
  name: "background-position",
  initialValue: "0% 0%",
  type: 1,
  prefix: !1,
  parse: function(e, A) {
    return cA(A).map(function(r) {
      return r.filter(R);
    }).map(TB);
  }
}, Xi = {
  name: "background-repeat",
  initialValue: "repeat",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return cA(A).map(function(r) {
      return r.filter(D).map(function(t) {
        return t.value;
      }).join(" ");
    }).map(_i);
  }
}, _i = function(e) {
  switch (e) {
    case "no-repeat":
      return 1;
    case "repeat-x":
    case "repeat no-repeat":
      return 2;
    case "repeat-y":
    case "no-repeat repeat":
      return 3;
    case "repeat":
    default:
      return 0;
  }
}, ZA;
(function(e) {
  e.AUTO = "auto", e.CONTAIN = "contain", e.COVER = "cover";
})(ZA || (ZA = {}));
var Pi = {
  name: "background-size",
  initialValue: "0",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return cA(A).map(function(r) {
      return r.filter(Ji);
    });
  }
}, Ji = function(e) {
  return D(e) || R(e);
}, ct = function(e) {
  return {
    name: "border-" + e + "-color",
    initialValue: "transparent",
    prefix: !1,
    type: 3,
    format: "color"
  };
}, ki = ct("top"), Yi = ct("right"), Wi = ct("bottom"), Zi = ct("left"), Qt = function(e) {
  return {
    name: "border-radius-" + e,
    initialValue: "0 0",
    prefix: !1,
    type: 1,
    parse: function(A, r) {
      return TB(r.filter(R));
    }
  };
}, qi = Qt("top-left"), zi = Qt("top-right"), ji = Qt("bottom-right"), $i = Qt("bottom-left"), gt = function(e) {
  return {
    name: "border-" + e + "-style",
    initialValue: "solid",
    prefix: !1,
    type: 2,
    parse: function(A, r) {
      switch (r) {
        case "none":
          return 0;
        case "dashed":
          return 2;
        case "dotted":
          return 3;
        case "double":
          return 4;
      }
      return 1;
    }
  };
}, Aa = gt("top"), ea = gt("right"), ta = gt("bottom"), ra = gt("left"), lt = function(e) {
  return {
    name: "border-" + e + "-width",
    initialValue: "0",
    type: 0,
    prefix: !1,
    parse: function(A, r) {
      return he(r) ? r.number : 0;
    }
  };
}, Ba = lt("top"), na = lt("right"), sa = lt("bottom"), ia = lt("left"), aa = {
  name: "color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, oa = {
  name: "direction",
  initialValue: "ltr",
  prefix: !1,
  type: 2,
  parse: function(e, A) {
    switch (A) {
      case "rtl":
        return 1;
      case "ltr":
      default:
        return 0;
    }
  }
}, ca = {
  name: "display",
  initialValue: "inline-block",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return A.filter(D).reduce(
      function(r, t) {
        return r | Qa(t.value);
      },
      0
      /* NONE */
    );
  }
}, Qa = function(e) {
  switch (e) {
    case "block":
    case "-webkit-box":
      return 2;
    case "inline":
      return 4;
    case "run-in":
      return 8;
    case "flow":
      return 16;
    case "flow-root":
      return 32;
    case "table":
      return 64;
    case "flex":
    case "-webkit-flex":
      return 128;
    case "grid":
    case "-ms-grid":
      return 256;
    case "ruby":
      return 512;
    case "subgrid":
      return 1024;
    case "list-item":
      return 2048;
    case "table-row-group":
      return 4096;
    case "table-header-group":
      return 8192;
    case "table-footer-group":
      return 16384;
    case "table-row":
      return 32768;
    case "table-cell":
      return 65536;
    case "table-column-group":
      return 131072;
    case "table-column":
      return 262144;
    case "table-caption":
      return 524288;
    case "ruby-base":
      return 1048576;
    case "ruby-text":
      return 2097152;
    case "ruby-base-container":
      return 4194304;
    case "ruby-text-container":
      return 8388608;
    case "contents":
      return 16777216;
    case "inline-block":
      return 33554432;
    case "inline-list-item":
      return 67108864;
    case "inline-table":
      return 134217728;
    case "inline-flex":
      return 268435456;
    case "inline-grid":
      return 536870912;
  }
  return 0;
}, ga = {
  name: "float",
  initialValue: "none",
  prefix: !1,
  type: 2,
  parse: function(e, A) {
    switch (A) {
      case "left":
        return 1;
      case "right":
        return 2;
      case "inline-start":
        return 3;
      case "inline-end":
        return 4;
    }
    return 0;
  }
}, la = {
  name: "letter-spacing",
  initialValue: "0",
  prefix: !1,
  type: 0,
  parse: function(e, A) {
    return A.type === 20 && A.value === "normal" ? 0 : A.type === 17 || A.type === 15 ? A.number : 0;
  }
}, qe;
(function(e) {
  e.NORMAL = "normal", e.STRICT = "strict";
})(qe || (qe = {}));
var wa = {
  name: "line-break",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: function(e, A) {
    switch (A) {
      case "strict":
        return qe.STRICT;
      case "normal":
      default:
        return qe.NORMAL;
    }
  }
}, ua = {
  name: "line-height",
  initialValue: "normal",
  prefix: !1,
  type: 4
  /* TOKEN_VALUE */
}, Vr = function(e, A) {
  return D(e) && e.value === "normal" ? 1.2 * A : e.type === 17 ? A * e.number : R(e) ? S(e, A) : A;
}, Ca = {
  name: "list-style-image",
  initialValue: "none",
  type: 0,
  prefix: !1,
  parse: function(e, A) {
    return A.type === 20 && A.value === "none" ? null : cr.parse(e, A);
  }
}, fa = {
  name: "list-style-position",
  initialValue: "outside",
  prefix: !1,
  type: 2,
  parse: function(e, A) {
    switch (A) {
      case "inside":
        return 0;
      case "outside":
      default:
        return 1;
    }
  }
}, $t = {
  name: "list-style-type",
  initialValue: "none",
  prefix: !1,
  type: 2,
  parse: function(e, A) {
    switch (A) {
      case "disc":
        return 0;
      case "circle":
        return 1;
      case "square":
        return 2;
      case "decimal":
        return 3;
      case "cjk-decimal":
        return 4;
      case "decimal-leading-zero":
        return 5;
      case "lower-roman":
        return 6;
      case "upper-roman":
        return 7;
      case "lower-greek":
        return 8;
      case "lower-alpha":
        return 9;
      case "upper-alpha":
        return 10;
      case "arabic-indic":
        return 11;
      case "armenian":
        return 12;
      case "bengali":
        return 13;
      case "cambodian":
        return 14;
      case "cjk-earthly-branch":
        return 15;
      case "cjk-heavenly-stem":
        return 16;
      case "cjk-ideographic":
        return 17;
      case "devanagari":
        return 18;
      case "ethiopic-numeric":
        return 19;
      case "georgian":
        return 20;
      case "gujarati":
        return 21;
      case "gurmukhi":
        return 22;
      case "hebrew":
        return 22;
      case "hiragana":
        return 23;
      case "hiragana-iroha":
        return 24;
      case "japanese-formal":
        return 25;
      case "japanese-informal":
        return 26;
      case "kannada":
        return 27;
      case "katakana":
        return 28;
      case "katakana-iroha":
        return 29;
      case "khmer":
        return 30;
      case "korean-hangul-formal":
        return 31;
      case "korean-hanja-formal":
        return 32;
      case "korean-hanja-informal":
        return 33;
      case "lao":
        return 34;
      case "lower-armenian":
        return 35;
      case "malayalam":
        return 36;
      case "mongolian":
        return 37;
      case "myanmar":
        return 38;
      case "oriya":
        return 39;
      case "persian":
        return 40;
      case "simp-chinese-formal":
        return 41;
      case "simp-chinese-informal":
        return 42;
      case "tamil":
        return 43;
      case "telugu":
        return 44;
      case "thai":
        return 45;
      case "tibetan":
        return 46;
      case "trad-chinese-formal":
        return 47;
      case "trad-chinese-informal":
        return 48;
      case "upper-armenian":
        return 49;
      case "disclosure-open":
        return 50;
      case "disclosure-closed":
        return 51;
      case "none":
      default:
        return -1;
    }
  }
}, wt = function(e) {
  return {
    name: "margin-" + e,
    initialValue: "0",
    prefix: !1,
    type: 4
    /* TOKEN_VALUE */
  };
}, Ua = wt("top"), Fa = wt("right"), ha = wt("bottom"), da = wt("left"), Ea = {
  name: "overflow",
  initialValue: "visible",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return A.filter(D).map(function(r) {
      switch (r.value) {
        case "hidden":
          return 1;
        case "scroll":
          return 2;
        case "clip":
          return 3;
        case "auto":
          return 4;
        case "visible":
        default:
          return 0;
      }
    });
  }
}, pa = {
  name: "overflow-wrap",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: function(e, A) {
    switch (A) {
      case "break-word":
        return "break-word";
      case "normal":
      default:
        return "normal";
    }
  }
}, ut = function(e) {
  return {
    name: "padding-" + e,
    initialValue: "0",
    prefix: !1,
    type: 3,
    format: "length-percentage"
  };
}, Ha = ut("top"), va = ut("right"), Ia = ut("bottom"), ma = ut("left"), ya = {
  name: "text-align",
  initialValue: "left",
  prefix: !1,
  type: 2,
  parse: function(e, A) {
    switch (A) {
      case "right":
        return 2;
      case "center":
      case "justify":
        return 1;
      case "left":
      default:
        return 0;
    }
  }
}, Ka = {
  name: "position",
  initialValue: "static",
  prefix: !1,
  type: 2,
  parse: function(e, A) {
    switch (A) {
      case "relative":
        return 1;
      case "absolute":
        return 2;
      case "fixed":
        return 3;
      case "sticky":
        return 4;
    }
    return 0;
  }
}, La = {
  name: "text-shadow",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(e, A) {
    return A.length === 1 && jt(A[0], "none") ? [] : cA(A).map(function(r) {
      for (var t = {
        color: CA.TRANSPARENT,
        offsetX: _,
        offsetY: _,
        blur: _
      }, B = 0, n = 0; n < r.length; n++) {
        var s = r[n];
        KA(s) ? (B === 0 ? t.offsetX = s : B === 1 ? t.offsetY = s : t.blur = s, B++) : t.color = mA.parse(e, s);
      }
      return t;
    });
  }
}, ba = {
  name: "text-transform",
  initialValue: "none",
  prefix: !1,
  type: 2,
  parse: function(e, A) {
    switch (A) {
      case "uppercase":
        return 2;
      case "lowercase":
        return 1;
      case "capitalize":
        return 3;
    }
    return 0;
  }
}, Da = {
  name: "transform",
  initialValue: "none",
  prefix: !0,
  type: 0,
  parse: function(e, A) {
    if (A.type === 20 && A.value === "none")
      return null;
    if (A.type === 18) {
      var r = Ta[A.name];
      if (typeof r > "u")
        throw new Error('Attempting to parse an unsupported transform function "' + A.name + '"');
      return r(A.values);
    }
    return null;
  }
}, Sa = function(e) {
  var A = e.filter(function(r) {
    return r.type === 17;
  }).map(function(r) {
    return r.number;
  });
  return A.length === 6 ? A : null;
}, xa = function(e) {
  var A = e.filter(function(i) {
    return i.type === 17;
  }).map(function(i) {
    return i.number;
  }), r = A[0], t = A[1];
  A[2], A[3];
  var B = A[4], n = A[5];
  A[6], A[7], A[8], A[9], A[10], A[11];
  var s = A[12], a = A[13];
  return A[14], A[15], A.length === 16 ? [r, t, B, n, s, a] : null;
}, Ta = {
  matrix: Sa,
  matrix3d: xa
}, Nr = {
  type: 16,
  number: 50,
  flags: Fe
}, Ma = [Nr, Nr], Oa = {
  name: "transform-origin",
  initialValue: "50% 50%",
  prefix: !0,
  type: 1,
  parse: function(e, A) {
    var r = A.filter(R);
    return r.length !== 2 ? Ma : [r[0], r[1]];
  }
}, Ra = {
  name: "visible",
  initialValue: "none",
  prefix: !1,
  type: 2,
  parse: function(e, A) {
    switch (A) {
      case "hidden":
        return 1;
      case "collapse":
        return 2;
      case "visible":
      default:
        return 0;
    }
  }
}, le;
(function(e) {
  e.NORMAL = "normal", e.BREAK_ALL = "break-all", e.KEEP_ALL = "keep-all";
})(le || (le = {}));
var Ga = {
  name: "word-break",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: function(e, A) {
    switch (A) {
      case "break-all":
        return le.BREAK_ALL;
      case "keep-all":
        return le.KEEP_ALL;
      case "normal":
      default:
        return le.NORMAL;
    }
  }
}, Va = {
  name: "z-index",
  initialValue: "auto",
  prefix: !1,
  type: 0,
  parse: function(e, A) {
    if (A.type === 20)
      return { auto: !0, order: 0 };
    if (zA(A))
      return { auto: !1, order: A.number };
    throw new Error("Invalid z-index number parsed");
  }
}, zB = {
  name: "time",
  parse: function(e, A) {
    if (A.type === 15)
      switch (A.unit.toLowerCase()) {
        case "s":
          return 1e3 * A.number;
        case "ms":
          return A.number;
      }
    throw new Error("Unsupported time type");
  }
}, Na = {
  name: "opacity",
  initialValue: "1",
  type: 0,
  prefix: !1,
  parse: function(e, A) {
    return zA(A) ? A.number : 1;
  }
}, Xa = {
  name: "text-decoration-color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, _a = {
  name: "text-decoration-line",
  initialValue: "none",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return A.filter(D).map(function(r) {
      switch (r.value) {
        case "underline":
          return 1;
        case "overline":
          return 2;
        case "line-through":
          return 3;
        case "none":
          return 4;
      }
      return 0;
    }).filter(function(r) {
      return r !== 0;
    });
  }
}, Pa = {
  name: "font-family",
  initialValue: "",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    var r = [], t = [];
    return A.forEach(function(B) {
      switch (B.type) {
        case 20:
        case 0:
          r.push(B.value);
          break;
        case 17:
          r.push(B.number.toString());
          break;
        case 4:
          t.push(r.join(" ")), r.length = 0;
          break;
      }
    }), r.length && t.push(r.join(" ")), t.map(function(B) {
      return B.indexOf(" ") === -1 ? B : "'" + B + "'";
    });
  }
}, Ja = {
  name: "font-size",
  initialValue: "0",
  prefix: !1,
  type: 3,
  format: "length"
}, ka = {
  name: "font-weight",
  initialValue: "normal",
  type: 0,
  prefix: !1,
  parse: function(e, A) {
    if (zA(A))
      return A.number;
    if (D(A))
      switch (A.value) {
        case "bold":
          return 700;
        case "normal":
        default:
          return 400;
      }
    return 400;
  }
}, Ya = {
  name: "font-variant",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(e, A) {
    return A.filter(D).map(function(r) {
      return r.value;
    });
  }
}, Wa = {
  name: "font-style",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: function(e, A) {
    switch (A) {
      case "oblique":
        return "oblique";
      case "italic":
        return "italic";
      case "normal":
      default:
        return "normal";
    }
  }
}, G = function(e, A) {
  return (e & A) !== 0;
}, Za = {
  name: "content",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(e, A) {
    if (A.length === 0)
      return [];
    var r = A[0];
    return r.type === 20 && r.value === "none" ? [] : A;
  }
}, qa = {
  name: "counter-increment",
  initialValue: "none",
  prefix: !0,
  type: 1,
  parse: function(e, A) {
    if (A.length === 0)
      return null;
    var r = A[0];
    if (r.type === 20 && r.value === "none")
      return null;
    for (var t = [], B = A.filter(xB), n = 0; n < B.length; n++) {
      var s = B[n], a = B[n + 1];
      if (s.type === 20) {
        var i = a && zA(a) ? a.number : 1;
        t.push({ counter: s.value, increment: i });
      }
    }
    return t;
  }
}, za = {
  name: "counter-reset",
  initialValue: "none",
  prefix: !0,
  type: 1,
  parse: function(e, A) {
    if (A.length === 0)
      return [];
    for (var r = [], t = A.filter(xB), B = 0; B < t.length; B++) {
      var n = t[B], s = t[B + 1];
      if (D(n) && n.value !== "none") {
        var a = s && zA(s) ? s.number : 0;
        r.push({ counter: n.value, reset: a });
      }
    }
    return r;
  }
}, ja = {
  name: "duration",
  initialValue: "0s",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return A.filter(he).map(function(r) {
      return zB.parse(e, r);
    });
  }
}, $a = {
  name: "quotes",
  initialValue: "none",
  prefix: !0,
  type: 1,
  parse: function(e, A) {
    if (A.length === 0)
      return null;
    var r = A[0];
    if (r.type === 20 && r.value === "none")
      return null;
    var t = [], B = A.filter(vi);
    if (B.length % 2 !== 0)
      return null;
    for (var n = 0; n < B.length; n += 2) {
      var s = B[n].value, a = B[n + 1].value;
      t.push({ open: s, close: a });
    }
    return t;
  }
}, Xr = function(e, A, r) {
  if (!e)
    return "";
  var t = e[Math.min(A, e.length - 1)];
  return t ? r ? t.open : t.close : "";
}, Ao = {
  name: "box-shadow",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(e, A) {
    return A.length === 1 && jt(A[0], "none") ? [] : cA(A).map(function(r) {
      for (var t = {
        color: 255,
        offsetX: _,
        offsetY: _,
        blur: _,
        spread: _,
        inset: !1
      }, B = 0, n = 0; n < r.length; n++) {
        var s = r[n];
        jt(s, "inset") ? t.inset = !0 : KA(s) ? (B === 0 ? t.offsetX = s : B === 1 ? t.offsetY = s : B === 2 ? t.blur = s : t.spread = s, B++) : t.color = mA.parse(e, s);
      }
      return t;
    });
  }
}, eo = {
  name: "paint-order",
  initialValue: "normal",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    var r = [
      0,
      1,
      2
      /* MARKERS */
    ], t = [];
    return A.filter(D).forEach(function(B) {
      switch (B.value) {
        case "stroke":
          t.push(
            1
            /* STROKE */
          );
          break;
        case "fill":
          t.push(
            0
            /* FILL */
          );
          break;
        case "markers":
          t.push(
            2
            /* MARKERS */
          );
          break;
      }
    }), r.forEach(function(B) {
      t.indexOf(B) === -1 && t.push(B);
    }), t;
  }
}, to = {
  name: "-webkit-text-stroke-color",
  initialValue: "currentcolor",
  prefix: !1,
  type: 3,
  format: "color"
}, ro = {
  name: "-webkit-text-stroke-width",
  initialValue: "0",
  type: 0,
  prefix: !1,
  parse: function(e, A) {
    return he(A) ? A.number : 0;
  }
}, Bo = (
  /** @class */
  function() {
    function e(A, r) {
      var t, B;
      this.animationDuration = U(A, ja, r.animationDuration), this.backgroundClip = U(A, yi, r.backgroundClip), this.backgroundColor = U(A, Ki, r.backgroundColor), this.backgroundImage = U(A, Gi, r.backgroundImage), this.backgroundOrigin = U(A, Vi, r.backgroundOrigin), this.backgroundPosition = U(A, Ni, r.backgroundPosition), this.backgroundRepeat = U(A, Xi, r.backgroundRepeat), this.backgroundSize = U(A, Pi, r.backgroundSize), this.borderTopColor = U(A, ki, r.borderTopColor), this.borderRightColor = U(A, Yi, r.borderRightColor), this.borderBottomColor = U(A, Wi, r.borderBottomColor), this.borderLeftColor = U(A, Zi, r.borderLeftColor), this.borderTopLeftRadius = U(A, qi, r.borderTopLeftRadius), this.borderTopRightRadius = U(A, zi, r.borderTopRightRadius), this.borderBottomRightRadius = U(A, ji, r.borderBottomRightRadius), this.borderBottomLeftRadius = U(A, $i, r.borderBottomLeftRadius), this.borderTopStyle = U(A, Aa, r.borderTopStyle), this.borderRightStyle = U(A, ea, r.borderRightStyle), this.borderBottomStyle = U(A, ta, r.borderBottomStyle), this.borderLeftStyle = U(A, ra, r.borderLeftStyle), this.borderTopWidth = U(A, Ba, r.borderTopWidth), this.borderRightWidth = U(A, na, r.borderRightWidth), this.borderBottomWidth = U(A, sa, r.borderBottomWidth), this.borderLeftWidth = U(A, ia, r.borderLeftWidth), this.boxShadow = U(A, Ao, r.boxShadow), this.color = U(A, aa, r.color), this.direction = U(A, oa, r.direction), this.display = U(A, ca, r.display), this.float = U(A, ga, r.cssFloat), this.fontFamily = U(A, Pa, r.fontFamily), this.fontSize = U(A, Ja, r.fontSize), this.fontStyle = U(A, Wa, r.fontStyle), this.fontVariant = U(A, Ya, r.fontVariant), this.fontWeight = U(A, ka, r.fontWeight), this.letterSpacing = U(A, la, r.letterSpacing), this.lineBreak = U(A, wa, r.lineBreak), this.lineHeight = U(A, ua, r.lineHeight), this.listStyleImage = U(A, Ca, r.listStyleImage), this.listStylePosition = U(A, fa, r.listStylePosition), this.listStyleType = U(A, $t, r.listStyleType), this.marginTop = U(A, Ua, r.marginTop), this.marginRight = U(A, Fa, r.marginRight), this.marginBottom = U(A, ha, r.marginBottom), this.marginLeft = U(A, da, r.marginLeft), this.opacity = U(A, Na, r.opacity);
      var n = U(A, Ea, r.overflow);
      this.overflowX = n[0], this.overflowY = n[n.length > 1 ? 1 : 0], this.overflowWrap = U(A, pa, r.overflowWrap), this.paddingTop = U(A, Ha, r.paddingTop), this.paddingRight = U(A, va, r.paddingRight), this.paddingBottom = U(A, Ia, r.paddingBottom), this.paddingLeft = U(A, ma, r.paddingLeft), this.paintOrder = U(A, eo, r.paintOrder), this.position = U(A, Ka, r.position), this.textAlign = U(A, ya, r.textAlign), this.textDecorationColor = U(A, Xa, (t = r.textDecorationColor) !== null && t !== void 0 ? t : r.color), this.textDecorationLine = U(A, _a, (B = r.textDecorationLine) !== null && B !== void 0 ? B : r.textDecoration), this.textShadow = U(A, La, r.textShadow), this.textTransform = U(A, ba, r.textTransform), this.transform = U(A, Da, r.transform), this.transformOrigin = U(A, Oa, r.transformOrigin), this.visibility = U(A, Ra, r.visibility), this.webkitTextStrokeColor = U(A, to, r.webkitTextStrokeColor), this.webkitTextStrokeWidth = U(A, ro, r.webkitTextStrokeWidth), this.wordBreak = U(A, Ga, r.wordBreak), this.zIndex = U(A, Va, r.zIndex);
    }
    return e.prototype.isVisible = function() {
      return this.display > 0 && this.opacity > 0 && this.visibility === 0;
    }, e.prototype.isTransparent = function() {
      return yA(this.backgroundColor);
    }, e.prototype.isTransformed = function() {
      return this.transform !== null;
    }, e.prototype.isPositioned = function() {
      return this.position !== 0;
    }, e.prototype.isPositionedWithZIndex = function() {
      return this.isPositioned() && !this.zIndex.auto;
    }, e.prototype.isFloating = function() {
      return this.float !== 0;
    }, e.prototype.isInlineLevel = function() {
      return G(
        this.display,
        4
        /* INLINE */
      ) || G(
        this.display,
        33554432
        /* INLINE_BLOCK */
      ) || G(
        this.display,
        268435456
        /* INLINE_FLEX */
      ) || G(
        this.display,
        536870912
        /* INLINE_GRID */
      ) || G(
        this.display,
        67108864
        /* INLINE_LIST_ITEM */
      ) || G(
        this.display,
        134217728
        /* INLINE_TABLE */
      );
    }, e;
  }()
), no = (
  /** @class */
  function() {
    function e(A, r) {
      this.content = U(A, Za, r.content), this.quotes = U(A, $a, r.quotes);
    }
    return e;
  }()
), _r = (
  /** @class */
  function() {
    function e(A, r) {
      this.counterIncrement = U(A, qa, r.counterIncrement), this.counterReset = U(A, za, r.counterReset);
    }
    return e;
  }()
), U = function(e, A, r) {
  var t = new DB(), B = r !== null && typeof r < "u" ? r.toString() : A.initialValue;
  t.write(B);
  var n = new SB(t.read());
  switch (A.type) {
    case 2:
      var s = n.parseComponentValue();
      return A.parse(e, D(s) ? s.value : A.initialValue);
    case 0:
      return A.parse(e, n.parseComponentValue());
    case 1:
      return A.parse(e, n.parseComponentValues());
    case 4:
      return n.parseComponentValue();
    case 3:
      switch (A.format) {
        case "angle":
          return at.parse(e, n.parseComponentValue());
        case "color":
          return mA.parse(e, n.parseComponentValue());
        case "image":
          return cr.parse(e, n.parseComponentValue());
        case "length":
          var a = n.parseComponentValue();
          return KA(a) ? a : _;
        case "length-percentage":
          var i = n.parseComponentValue();
          return R(i) ? i : _;
        case "time":
          return zB.parse(e, n.parseComponentValue());
      }
      break;
  }
}, so = "data-html2canvas-debug", io = function(e) {
  var A = e.getAttribute(so);
  switch (A) {
    case "all":
      return 1;
    case "clone":
      return 2;
    case "parse":
      return 3;
    case "render":
      return 4;
    default:
      return 0;
  }
}, Ar = function(e, A) {
  var r = io(e);
  return r === 1 || A === r;
}, QA = (
  /** @class */
  function() {
    function e(A, r) {
      if (this.context = A, this.textNodes = [], this.elements = [], this.flags = 0, Ar(
        r,
        3
        /* PARSE */
      ))
        debugger;
      this.styles = new Bo(A, window.getComputedStyle(r, null)), rr(r) && (this.styles.animationDuration.some(function(t) {
        return t > 0;
      }) && (r.style.animationDuration = "0s"), this.styles.transform !== null && (r.style.transform = "none")), this.bounds = st(this.context, r), Ar(
        r,
        4
        /* RENDER */
      ) && (this.flags |= 16);
    }
    return e;
  }()
), ao = "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=", Pr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", oe = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Re = 0; Re < Pr.length; Re++)
  oe[Pr.charCodeAt(Re)] = Re;
var oo = function(e) {
  var A = e.length * 0.75, r = e.length, t, B = 0, n, s, a, i;
  e[e.length - 1] === "=" && (A--, e[e.length - 2] === "=" && A--);
  var o = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(A) : new Array(A), c = Array.isArray(o) ? o : new Uint8Array(o);
  for (t = 0; t < r; t += 4)
    n = oe[e.charCodeAt(t)], s = oe[e.charCodeAt(t + 1)], a = oe[e.charCodeAt(t + 2)], i = oe[e.charCodeAt(t + 3)], c[B++] = n << 2 | s >> 4, c[B++] = (s & 15) << 4 | a >> 2, c[B++] = (a & 3) << 6 | i & 63;
  return o;
}, co = function(e) {
  for (var A = e.length, r = [], t = 0; t < A; t += 2)
    r.push(e[t + 1] << 8 | e[t]);
  return r;
}, Qo = function(e) {
  for (var A = e.length, r = [], t = 0; t < A; t += 4)
    r.push(e[t + 3] << 24 | e[t + 2] << 16 | e[t + 1] << 8 | e[t]);
  return r;
}, RA = 5, Qr = 6 + 5, Ht = 2, go = Qr - RA, jB = 65536 >> RA, lo = 1 << RA, vt = lo - 1, wo = 1024 >> RA, uo = jB + wo, Co = uo, fo = 32, Uo = Co + fo, Fo = 65536 >> Qr, ho = 1 << go, Eo = ho - 1, Jr = function(e, A, r) {
  return e.slice ? e.slice(A, r) : new Uint16Array(Array.prototype.slice.call(e, A, r));
}, po = function(e, A, r) {
  return e.slice ? e.slice(A, r) : new Uint32Array(Array.prototype.slice.call(e, A, r));
}, Ho = function(e, A) {
  var r = oo(e), t = Array.isArray(r) ? Qo(r) : new Uint32Array(r), B = Array.isArray(r) ? co(r) : new Uint16Array(r), n = 24, s = Jr(B, n / 2, t[4] / 2), a = t[5] === 2 ? Jr(B, (n + t[4]) / 2) : po(t, Math.ceil((n + t[4]) / 4));
  return new vo(t[0], t[1], t[2], t[3], s, a);
}, vo = (
  /** @class */
  function() {
    function e(A, r, t, B, n, s) {
      this.initialValue = A, this.errorValue = r, this.highStart = t, this.highValueIndex = B, this.index = n, this.data = s;
    }
    return e.prototype.get = function(A) {
      var r;
      if (A >= 0) {
        if (A < 55296 || A > 56319 && A <= 65535)
          return r = this.index[A >> RA], r = (r << Ht) + (A & vt), this.data[r];
        if (A <= 65535)
          return r = this.index[jB + (A - 55296 >> RA)], r = (r << Ht) + (A & vt), this.data[r];
        if (A < this.highStart)
          return r = Uo - Fo + (A >> Qr), r = this.index[r], r += A >> RA & Eo, r = this.index[r], r = (r << Ht) + (A & vt), this.data[r];
        if (A <= 1114111)
          return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, e;
  }()
), kr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Io = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Ge = 0; Ge < kr.length; Ge++)
  Io[kr.charCodeAt(Ge)] = Ge;
var mo = 1, It = 2, mt = 3, Yr = 4, Wr = 5, yo = 7, Zr = 8, yt = 9, Kt = 10, qr = 11, zr = 12, jr = 13, $r = 14, Lt = 15, Ko = function(e) {
  for (var A = [], r = 0, t = e.length; r < t; ) {
    var B = e.charCodeAt(r++);
    if (B >= 55296 && B <= 56319 && r < t) {
      var n = e.charCodeAt(r++);
      (n & 64512) === 56320 ? A.push(((B & 1023) << 10) + (n & 1023) + 65536) : (A.push(B), r--);
    } else
      A.push(B);
  }
  return A;
}, Lo = function() {
  for (var e = [], A = 0; A < arguments.length; A++)
    e[A] = arguments[A];
  if (String.fromCodePoint)
    return String.fromCodePoint.apply(String, e);
  var r = e.length;
  if (!r)
    return "";
  for (var t = [], B = -1, n = ""; ++B < r; ) {
    var s = e[B];
    s <= 65535 ? t.push(s) : (s -= 65536, t.push((s >> 10) + 55296, s % 1024 + 56320)), (B + 1 === r || t.length > 16384) && (n += String.fromCharCode.apply(String, t), t.length = 0);
  }
  return n;
}, bo = Ho(ao), tA = "×", bt = "÷", Do = function(e) {
  return bo.get(e);
}, So = function(e, A, r) {
  var t = r - 2, B = A[t], n = A[r - 1], s = A[r];
  if (n === It && s === mt)
    return tA;
  if (n === It || n === mt || n === Yr || s === It || s === mt || s === Yr)
    return bt;
  if (n === Zr && [Zr, yt, qr, zr].indexOf(s) !== -1 || (n === qr || n === yt) && (s === yt || s === Kt) || (n === zr || n === Kt) && s === Kt || s === jr || s === Wr || s === yo || n === mo)
    return tA;
  if (n === jr && s === $r) {
    for (; B === Wr; )
      B = A[--t];
    if (B === $r)
      return tA;
  }
  if (n === Lt && s === Lt) {
    for (var a = 0; B === Lt; )
      a++, B = A[--t];
    if (a % 2 === 0)
      return tA;
  }
  return bt;
}, xo = function(e) {
  var A = Ko(e), r = A.length, t = 0, B = 0, n = A.map(Do);
  return {
    next: function() {
      if (t >= r)
        return { done: !0, value: null };
      for (var s = tA; t < r && (s = So(A, n, ++t)) === tA; )
        ;
      if (s !== tA || t === r) {
        var a = Lo.apply(null, A.slice(B, t));
        return B = t, { value: a, done: !1 };
      }
      return { done: !0, value: null };
    }
  };
}, To = function(e) {
  for (var A = xo(e), r = [], t; !(t = A.next()).done; )
    t.value && r.push(t.value.slice());
  return r;
}, Mo = function(e) {
  var A = 123;
  if (e.createRange) {
    var r = e.createRange();
    if (r.getBoundingClientRect) {
      var t = e.createElement("boundtest");
      t.style.height = A + "px", t.style.display = "block", e.body.appendChild(t), r.selectNode(t);
      var B = r.getBoundingClientRect(), n = Math.round(B.height);
      if (e.body.removeChild(t), n === A)
        return !0;
    }
  }
  return !1;
}, Oo = function(e) {
  var A = e.createElement("boundtest");
  A.style.width = "50px", A.style.display = "block", A.style.fontSize = "12px", A.style.letterSpacing = "0px", A.style.wordSpacing = "0px", e.body.appendChild(A);
  var r = e.createRange();
  A.innerHTML = typeof "".repeat == "function" ? "&#128104;".repeat(10) : "";
  var t = A.firstChild, B = it(t.data).map(function(i) {
    return M(i);
  }), n = 0, s = {}, a = B.every(function(i, o) {
    r.setStart(t, n), r.setEnd(t, n + i.length);
    var c = r.getBoundingClientRect();
    n += i.length;
    var Q = c.x > s.x || c.y > s.y;
    return s = c, o === 0 ? !0 : Q;
  });
  return e.body.removeChild(A), a;
}, Ro = function() {
  return typeof new Image().crossOrigin < "u";
}, Go = function() {
  return typeof new XMLHttpRequest().responseType == "string";
}, Vo = function(e) {
  var A = new Image(), r = e.createElement("canvas"), t = r.getContext("2d");
  if (!t)
    return !1;
  A.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
  try {
    t.drawImage(A, 0, 0), r.toDataURL();
  } catch {
    return !1;
  }
  return !0;
}, AB = function(e) {
  return e[0] === 0 && e[1] === 255 && e[2] === 0 && e[3] === 255;
}, No = function(e) {
  var A = e.createElement("canvas"), r = 100;
  A.width = r, A.height = r;
  var t = A.getContext("2d");
  if (!t)
    return Promise.reject(!1);
  t.fillStyle = "rgb(0, 255, 0)", t.fillRect(0, 0, r, r);
  var B = new Image(), n = A.toDataURL();
  B.src = n;
  var s = er(r, r, 0, 0, B);
  return t.fillStyle = "red", t.fillRect(0, 0, r, r), eB(s).then(function(a) {
    t.drawImage(a, 0, 0);
    var i = t.getImageData(0, 0, r, r).data;
    t.fillStyle = "red", t.fillRect(0, 0, r, r);
    var o = e.createElement("div");
    return o.style.backgroundImage = "url(" + n + ")", o.style.height = r + "px", AB(i) ? eB(er(r, r, 0, 0, o)) : Promise.reject(!1);
  }).then(function(a) {
    return t.drawImage(a, 0, 0), AB(t.getImageData(0, 0, r, r).data);
  }).catch(function() {
    return !1;
  });
}, er = function(e, A, r, t, B) {
  var n = "http://www.w3.org/2000/svg", s = document.createElementNS(n, "svg"), a = document.createElementNS(n, "foreignObject");
  return s.setAttributeNS(null, "width", e.toString()), s.setAttributeNS(null, "height", A.toString()), a.setAttributeNS(null, "width", "100%"), a.setAttributeNS(null, "height", "100%"), a.setAttributeNS(null, "x", r.toString()), a.setAttributeNS(null, "y", t.toString()), a.setAttributeNS(null, "externalResourcesRequired", "true"), s.appendChild(a), a.appendChild(B), s;
}, eB = function(e) {
  return new Promise(function(A, r) {
    var t = new Image();
    t.onload = function() {
      return A(t);
    }, t.onerror = r, t.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(e));
  });
}, X = {
  get SUPPORT_RANGE_BOUNDS() {
    var e = Mo(document);
    return Object.defineProperty(X, "SUPPORT_RANGE_BOUNDS", { value: e }), e;
  },
  get SUPPORT_WORD_BREAKING() {
    var e = X.SUPPORT_RANGE_BOUNDS && Oo(document);
    return Object.defineProperty(X, "SUPPORT_WORD_BREAKING", { value: e }), e;
  },
  get SUPPORT_SVG_DRAWING() {
    var e = Vo(document);
    return Object.defineProperty(X, "SUPPORT_SVG_DRAWING", { value: e }), e;
  },
  get SUPPORT_FOREIGNOBJECT_DRAWING() {
    var e = typeof Array.from == "function" && typeof window.fetch == "function" ? No(document) : Promise.resolve(!1);
    return Object.defineProperty(X, "SUPPORT_FOREIGNOBJECT_DRAWING", { value: e }), e;
  },
  get SUPPORT_CORS_IMAGES() {
    var e = Ro();
    return Object.defineProperty(X, "SUPPORT_CORS_IMAGES", { value: e }), e;
  },
  get SUPPORT_RESPONSE_TYPE() {
    var e = Go();
    return Object.defineProperty(X, "SUPPORT_RESPONSE_TYPE", { value: e }), e;
  },
  get SUPPORT_CORS_XHR() {
    var e = "withCredentials" in new XMLHttpRequest();
    return Object.defineProperty(X, "SUPPORT_CORS_XHR", { value: e }), e;
  },
  get SUPPORT_NATIVE_TEXT_SEGMENTATION() {
    var e = !!(typeof Intl < "u" && Intl.Segmenter);
    return Object.defineProperty(X, "SUPPORT_NATIVE_TEXT_SEGMENTATION", { value: e }), e;
  }
}, we = (
  /** @class */
  function() {
    function e(A, r) {
      this.text = A, this.bounds = r;
    }
    return e;
  }()
), Xo = function(e, A, r, t) {
  var B = Jo(A, r), n = [], s = 0;
  return B.forEach(function(a) {
    if (r.textDecorationLine.length || a.trim().length > 0)
      if (X.SUPPORT_RANGE_BOUNDS) {
        var i = tB(t, s, a.length).getClientRects();
        if (i.length > 1) {
          var o = gr(a), c = 0;
          o.forEach(function(g) {
            n.push(new we(g, fA.fromDOMRectList(e, tB(t, c + s, g.length).getClientRects()))), c += g.length;
          });
        } else
          n.push(new we(a, fA.fromDOMRectList(e, i)));
      } else {
        var Q = t.splitText(a.length);
        n.push(new we(a, _o(e, t))), t = Q;
      }
    else
      X.SUPPORT_RANGE_BOUNDS || (t = t.splitText(a.length));
    s += a.length;
  }), n;
}, _o = function(e, A) {
  var r = A.ownerDocument;
  if (r) {
    var t = r.createElement("html2canvaswrapper");
    t.appendChild(A.cloneNode(!0));
    var B = A.parentNode;
    if (B) {
      B.replaceChild(t, A);
      var n = st(e, t);
      return t.firstChild && B.replaceChild(t.firstChild, t), n;
    }
  }
  return fA.EMPTY;
}, tB = function(e, A, r) {
  var t = e.ownerDocument;
  if (!t)
    throw new Error("Node has no owner document");
  var B = t.createRange();
  return B.setStart(e, A), B.setEnd(e, A + r), B;
}, gr = function(e) {
  if (X.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
    var A = new Intl.Segmenter(void 0, { granularity: "grapheme" });
    return Array.from(A.segment(e)).map(function(r) {
      return r.segment;
    });
  }
  return To(e);
}, Po = function(e, A) {
  if (X.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
    var r = new Intl.Segmenter(void 0, {
      granularity: "word"
    });
    return Array.from(r.segment(e)).map(function(t) {
      return t.segment;
    });
  }
  return Yo(e, A);
}, Jo = function(e, A) {
  return A.letterSpacing !== 0 ? gr(e) : Po(e, A);
}, ko = [32, 160, 4961, 65792, 65793, 4153, 4241], Yo = function(e, A) {
  for (var r = Fs(e, {
    lineBreak: A.lineBreak,
    wordBreak: A.overflowWrap === "break-word" ? "break-word" : A.wordBreak
  }), t = [], B, n = function() {
    if (B.value) {
      var s = B.value.slice(), a = it(s), i = "";
      a.forEach(function(o) {
        ko.indexOf(o) === -1 ? i += M(o) : (i.length && t.push(i), t.push(M(o)), i = "");
      }), i.length && t.push(i);
    }
  }; !(B = r.next()).done; )
    n();
  return t;
}, Wo = (
  /** @class */
  function() {
    function e(A, r, t) {
      this.text = Zo(r.data, t.textTransform), this.textBounds = Xo(A, this.text, t, r);
    }
    return e;
  }()
), Zo = function(e, A) {
  switch (A) {
    case 1:
      return e.toLowerCase();
    case 3:
      return e.replace(qo, zo);
    case 2:
      return e.toUpperCase();
    default:
      return e;
  }
}, qo = /(^|\s|:|-|\(|\))([a-z])/g, zo = function(e, A, r) {
  return e.length > 0 ? A + r.toUpperCase() : e;
}, $B = (
  /** @class */
  function(e) {
    iA(A, e);
    function A(r, t) {
      var B = e.call(this, r, t) || this;
      return B.src = t.currentSrc || t.src, B.intrinsicWidth = t.naturalWidth, B.intrinsicHeight = t.naturalHeight, B.context.cache.addImage(B.src), B;
    }
    return A;
  }(QA)
), An = (
  /** @class */
  function(e) {
    iA(A, e);
    function A(r, t) {
      var B = e.call(this, r, t) || this;
      return B.canvas = t, B.intrinsicWidth = t.width, B.intrinsicHeight = t.height, B;
    }
    return A;
  }(QA)
), en = (
  /** @class */
  function(e) {
    iA(A, e);
    function A(r, t) {
      var B = e.call(this, r, t) || this, n = new XMLSerializer(), s = st(r, t);
      return t.setAttribute("width", s.width + "px"), t.setAttribute("height", s.height + "px"), B.svg = "data:image/svg+xml," + encodeURIComponent(n.serializeToString(t)), B.intrinsicWidth = t.width.baseVal.value, B.intrinsicHeight = t.height.baseVal.value, B.context.cache.addImage(B.svg), B;
    }
    return A;
  }(QA)
), tn = (
  /** @class */
  function(e) {
    iA(A, e);
    function A(r, t) {
      var B = e.call(this, r, t) || this;
      return B.value = t.value, B;
    }
    return A;
  }(QA)
), tr = (
  /** @class */
  function(e) {
    iA(A, e);
    function A(r, t) {
      var B = e.call(this, r, t) || this;
      return B.start = t.start, B.reversed = typeof t.reversed == "boolean" && t.reversed === !0, B;
    }
    return A;
  }(QA)
), jo = [
  {
    type: 15,
    flags: 0,
    unit: "px",
    number: 3
  }
], $o = [
  {
    type: 16,
    flags: 0,
    number: 50
  }
], Ac = function(e) {
  return e.width > e.height ? new fA(e.left + (e.width - e.height) / 2, e.top, e.height, e.height) : e.width < e.height ? new fA(e.left, e.top + (e.height - e.width) / 2, e.width, e.width) : e;
}, ec = function(e) {
  var A = e.type === tc ? new Array(e.value.length + 1).join("•") : e.value;
  return A.length === 0 ? e.placeholder || "" : A;
}, ze = "checkbox", je = "radio", tc = "password", rB = 707406591, lr = (
  /** @class */
  function(e) {
    iA(A, e);
    function A(r, t) {
      var B = e.call(this, r, t) || this;
      switch (B.type = t.type.toLowerCase(), B.checked = t.checked, B.value = ec(t), (B.type === ze || B.type === je) && (B.styles.backgroundColor = 3739148031, B.styles.borderTopColor = B.styles.borderRightColor = B.styles.borderBottomColor = B.styles.borderLeftColor = 2779096575, B.styles.borderTopWidth = B.styles.borderRightWidth = B.styles.borderBottomWidth = B.styles.borderLeftWidth = 1, B.styles.borderTopStyle = B.styles.borderRightStyle = B.styles.borderBottomStyle = B.styles.borderLeftStyle = 1, B.styles.backgroundClip = [
        0
        /* BORDER_BOX */
      ], B.styles.backgroundOrigin = [
        0
        /* BORDER_BOX */
      ], B.bounds = Ac(B.bounds)), B.type) {
        case ze:
          B.styles.borderTopRightRadius = B.styles.borderTopLeftRadius = B.styles.borderBottomRightRadius = B.styles.borderBottomLeftRadius = jo;
          break;
        case je:
          B.styles.borderTopRightRadius = B.styles.borderTopLeftRadius = B.styles.borderBottomRightRadius = B.styles.borderBottomLeftRadius = $o;
          break;
      }
      return B;
    }
    return A;
  }(QA)
), rn = (
  /** @class */
  function(e) {
    iA(A, e);
    function A(r, t) {
      var B = e.call(this, r, t) || this, n = t.options[t.selectedIndex || 0];
      return B.value = n && n.text || "", B;
    }
    return A;
  }(QA)
), Bn = (
  /** @class */
  function(e) {
    iA(A, e);
    function A(r, t) {
      var B = e.call(this, r, t) || this;
      return B.value = t.value, B;
    }
    return A;
  }(QA)
), nn = (
  /** @class */
  function(e) {
    iA(A, e);
    function A(r, t) {
      var B = e.call(this, r, t) || this;
      B.src = t.src, B.width = parseInt(t.width, 10) || 0, B.height = parseInt(t.height, 10) || 0, B.backgroundColor = B.styles.backgroundColor;
      try {
        if (t.contentWindow && t.contentWindow.document && t.contentWindow.document.documentElement) {
          B.tree = an(r, t.contentWindow.document.documentElement);
          var n = t.contentWindow.document.documentElement ? ge(r, getComputedStyle(t.contentWindow.document.documentElement).backgroundColor) : CA.TRANSPARENT, s = t.contentWindow.document.body ? ge(r, getComputedStyle(t.contentWindow.document.body).backgroundColor) : CA.TRANSPARENT;
          B.backgroundColor = yA(n) ? yA(s) ? B.styles.backgroundColor : s : n;
        }
      } catch {
      }
      return B;
    }
    return A;
  }(QA)
), rc = ["OL", "UL", "MENU"], ke = function(e, A, r, t) {
  for (var B = A.firstChild, n = void 0; B; B = n)
    if (n = B.nextSibling, on(B) && B.data.trim().length > 0)
      r.textNodes.push(new Wo(e, B, r.styles));
    else if (WA(B))
      if (ln(B) && B.assignedNodes)
        B.assignedNodes().forEach(function(a) {
          return ke(e, a, r, t);
        });
      else {
        var s = sn(e, B);
        s.styles.isVisible() && (Bc(B, s, t) ? s.flags |= 4 : nc(s.styles) && (s.flags |= 2), rc.indexOf(B.tagName) !== -1 && (s.flags |= 8), r.elements.push(s), B.slot, B.shadowRoot ? ke(e, B.shadowRoot, s, t) : !$e(B) && !cn(B) && !At(B) && ke(e, B, s, t));
      }
}, sn = function(e, A) {
  return Br(A) ? new $B(e, A) : Qn(A) ? new An(e, A) : cn(A) ? new en(e, A) : sc(A) ? new tn(e, A) : ic(A) ? new tr(e, A) : ac(A) ? new lr(e, A) : At(A) ? new rn(e, A) : $e(A) ? new Bn(e, A) : gn(A) ? new nn(e, A) : new QA(e, A);
}, an = function(e, A) {
  var r = sn(e, A);
  return r.flags |= 4, ke(e, A, r, r), r;
}, Bc = function(e, A, r) {
  return A.styles.isPositionedWithZIndex() || A.styles.opacity < 1 || A.styles.isTransformed() || wr(e) && r.styles.isTransparent();
}, nc = function(e) {
  return e.isPositioned() || e.isFloating();
}, on = function(e) {
  return e.nodeType === Node.TEXT_NODE;
}, WA = function(e) {
  return e.nodeType === Node.ELEMENT_NODE;
}, rr = function(e) {
  return WA(e) && typeof e.style < "u" && !Ye(e);
}, Ye = function(e) {
  return typeof e.className == "object";
}, sc = function(e) {
  return e.tagName === "LI";
}, ic = function(e) {
  return e.tagName === "OL";
}, ac = function(e) {
  return e.tagName === "INPUT";
}, oc = function(e) {
  return e.tagName === "HTML";
}, cn = function(e) {
  return e.tagName === "svg";
}, wr = function(e) {
  return e.tagName === "BODY";
}, Qn = function(e) {
  return e.tagName === "CANVAS";
}, BB = function(e) {
  return e.tagName === "VIDEO";
}, Br = function(e) {
  return e.tagName === "IMG";
}, gn = function(e) {
  return e.tagName === "IFRAME";
}, nB = function(e) {
  return e.tagName === "STYLE";
}, cc = function(e) {
  return e.tagName === "SCRIPT";
}, $e = function(e) {
  return e.tagName === "TEXTAREA";
}, At = function(e) {
  return e.tagName === "SELECT";
}, ln = function(e) {
  return e.tagName === "SLOT";
}, sB = function(e) {
  return e.tagName.indexOf("-") > 0;
}, Qc = (
  /** @class */
  function() {
    function e() {
      this.counters = {};
    }
    return e.prototype.getCounterValue = function(A) {
      var r = this.counters[A];
      return r && r.length ? r[r.length - 1] : 1;
    }, e.prototype.getCounterValues = function(A) {
      var r = this.counters[A];
      return r || [];
    }, e.prototype.pop = function(A) {
      var r = this;
      A.forEach(function(t) {
        return r.counters[t].pop();
      });
    }, e.prototype.parse = function(A) {
      var r = this, t = A.counterIncrement, B = A.counterReset, n = !0;
      t !== null && t.forEach(function(a) {
        var i = r.counters[a.counter];
        i && a.increment !== 0 && (n = !1, i.length || i.push(1), i[Math.max(0, i.length - 1)] += a.increment);
      });
      var s = [];
      return n && B.forEach(function(a) {
        var i = r.counters[a.counter];
        s.push(a.counter), i || (i = r.counters[a.counter] = []), i.push(a.reset);
      }), s;
    }, e;
  }()
), iB = {
  integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
  values: ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
}, aB = {
  integers: [
    9e3,
    8e3,
    7e3,
    6e3,
    5e3,
    4e3,
    3e3,
    2e3,
    1e3,
    900,
    800,
    700,
    600,
    500,
    400,
    300,
    200,
    100,
    90,
    80,
    70,
    60,
    50,
    40,
    30,
    20,
    10,
    9,
    8,
    7,
    6,
    5,
    4,
    3,
    2,
    1
  ],
  values: [
    "Ք",
    "Փ",
    "Ւ",
    "Ց",
    "Ր",
    "Տ",
    "Վ",
    "Ս",
    "Ռ",
    "Ջ",
    "Պ",
    "Չ",
    "Ո",
    "Շ",
    "Ն",
    "Յ",
    "Մ",
    "Ճ",
    "Ղ",
    "Ձ",
    "Հ",
    "Կ",
    "Ծ",
    "Խ",
    "Լ",
    "Ի",
    "Ժ",
    "Թ",
    "Ը",
    "Է",
    "Զ",
    "Ե",
    "Դ",
    "Գ",
    "Բ",
    "Ա"
  ]
}, gc = {
  integers: [
    1e4,
    9e3,
    8e3,
    7e3,
    6e3,
    5e3,
    4e3,
    3e3,
    2e3,
    1e3,
    400,
    300,
    200,
    100,
    90,
    80,
    70,
    60,
    50,
    40,
    30,
    20,
    19,
    18,
    17,
    16,
    15,
    10,
    9,
    8,
    7,
    6,
    5,
    4,
    3,
    2,
    1
  ],
  values: [
    "י׳",
    "ט׳",
    "ח׳",
    "ז׳",
    "ו׳",
    "ה׳",
    "ד׳",
    "ג׳",
    "ב׳",
    "א׳",
    "ת",
    "ש",
    "ר",
    "ק",
    "צ",
    "פ",
    "ע",
    "ס",
    "נ",
    "מ",
    "ל",
    "כ",
    "יט",
    "יח",
    "יז",
    "טז",
    "טו",
    "י",
    "ט",
    "ח",
    "ז",
    "ו",
    "ה",
    "ד",
    "ג",
    "ב",
    "א"
  ]
}, lc = {
  integers: [
    1e4,
    9e3,
    8e3,
    7e3,
    6e3,
    5e3,
    4e3,
    3e3,
    2e3,
    1e3,
    900,
    800,
    700,
    600,
    500,
    400,
    300,
    200,
    100,
    90,
    80,
    70,
    60,
    50,
    40,
    30,
    20,
    10,
    9,
    8,
    7,
    6,
    5,
    4,
    3,
    2,
    1
  ],
  values: [
    "ჵ",
    "ჰ",
    "ჯ",
    "ჴ",
    "ხ",
    "ჭ",
    "წ",
    "ძ",
    "ც",
    "ჩ",
    "შ",
    "ყ",
    "ღ",
    "ქ",
    "ფ",
    "ჳ",
    "ტ",
    "ს",
    "რ",
    "ჟ",
    "პ",
    "ო",
    "ჲ",
    "ნ",
    "მ",
    "ლ",
    "კ",
    "ი",
    "თ",
    "ჱ",
    "ზ",
    "ვ",
    "ე",
    "დ",
    "გ",
    "ბ",
    "ა"
  ]
}, _A = function(e, A, r, t, B, n) {
  return e < A || e > r ? Ue(e, B, n.length > 0) : t.integers.reduce(function(s, a, i) {
    for (; e >= a; )
      e -= a, s += t.values[i];
    return s;
  }, "") + n;
}, wn = function(e, A, r, t) {
  var B = "";
  do
    r || e--, B = t(e) + B, e /= A;
  while (e * A >= A);
  return B;
}, T = function(e, A, r, t, B) {
  var n = r - A + 1;
  return (e < 0 ? "-" : "") + (wn(Math.abs(e), n, t, function(s) {
    return M(Math.floor(s % n) + A);
  }) + B);
}, xA = function(e, A, r) {
  r === void 0 && (r = ". ");
  var t = A.length;
  return wn(Math.abs(e), t, !1, function(B) {
    return A[Math.floor(B % t)];
  }) + r;
}, kA = 1, hA = 2, dA = 4, ce = 8, uA = function(e, A, r, t, B, n) {
  if (e < -9999 || e > 9999)
    return Ue(e, 4, B.length > 0);
  var s = Math.abs(e), a = B;
  if (s === 0)
    return A[0] + a;
  for (var i = 0; s > 0 && i <= 4; i++) {
    var o = s % 10;
    o === 0 && G(n, kA) && a !== "" ? a = A[o] + a : o > 1 || o === 1 && i === 0 || o === 1 && i === 1 && G(n, hA) || o === 1 && i === 1 && G(n, dA) && e > 100 || o === 1 && i > 1 && G(n, ce) ? a = A[o] + (i > 0 ? r[i - 1] : "") + a : o === 1 && i > 0 && (a = r[i - 1] + a), s = Math.floor(s / 10);
  }
  return (e < 0 ? t : "") + a;
}, oB = "十百千萬", cB = "拾佰仟萬", QB = "マイナス", Dt = "마이너스", Ue = function(e, A, r) {
  var t = r ? ". " : "", B = r ? "、" : "", n = r ? ", " : "", s = r ? " " : "";
  switch (A) {
    case 0:
      return "•" + s;
    case 1:
      return "◦" + s;
    case 2:
      return "◾" + s;
    case 5:
      var a = T(e, 48, 57, !0, t);
      return a.length < 4 ? "0" + a : a;
    case 4:
      return xA(e, "〇一二三四五六七八九", B);
    case 6:
      return _A(e, 1, 3999, iB, 3, t).toLowerCase();
    case 7:
      return _A(e, 1, 3999, iB, 3, t);
    case 8:
      return T(e, 945, 969, !1, t);
    case 9:
      return T(e, 97, 122, !1, t);
    case 10:
      return T(e, 65, 90, !1, t);
    case 11:
      return T(e, 1632, 1641, !0, t);
    case 12:
    case 49:
      return _A(e, 1, 9999, aB, 3, t);
    case 35:
      return _A(e, 1, 9999, aB, 3, t).toLowerCase();
    case 13:
      return T(e, 2534, 2543, !0, t);
    case 14:
    case 30:
      return T(e, 6112, 6121, !0, t);
    case 15:
      return xA(e, "子丑寅卯辰巳午未申酉戌亥", B);
    case 16:
      return xA(e, "甲乙丙丁戊己庚辛壬癸", B);
    case 17:
    case 48:
      return uA(e, "零一二三四五六七八九", oB, "負", B, hA | dA | ce);
    case 47:
      return uA(e, "零壹貳參肆伍陸柒捌玖", cB, "負", B, kA | hA | dA | ce);
    case 42:
      return uA(e, "零一二三四五六七八九", oB, "负", B, hA | dA | ce);
    case 41:
      return uA(e, "零壹贰叁肆伍陆柒捌玖", cB, "负", B, kA | hA | dA | ce);
    case 26:
      return uA(e, "〇一二三四五六七八九", "十百千万", QB, B, 0);
    case 25:
      return uA(e, "零壱弐参四伍六七八九", "拾百千万", QB, B, kA | hA | dA);
    case 31:
      return uA(e, "영일이삼사오육칠팔구", "십백천만", Dt, n, kA | hA | dA);
    case 33:
      return uA(e, "零一二三四五六七八九", "十百千萬", Dt, n, 0);
    case 32:
      return uA(e, "零壹貳參四五六七八九", "拾百千", Dt, n, kA | hA | dA);
    case 18:
      return T(e, 2406, 2415, !0, t);
    case 20:
      return _A(e, 1, 19999, lc, 3, t);
    case 21:
      return T(e, 2790, 2799, !0, t);
    case 22:
      return T(e, 2662, 2671, !0, t);
    case 22:
      return _A(e, 1, 10999, gc, 3, t);
    case 23:
      return xA(e, "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");
    case 24:
      return xA(e, "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");
    case 27:
      return T(e, 3302, 3311, !0, t);
    case 28:
      return xA(e, "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン", B);
    case 29:
      return xA(e, "イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス", B);
    case 34:
      return T(e, 3792, 3801, !0, t);
    case 37:
      return T(e, 6160, 6169, !0, t);
    case 38:
      return T(e, 4160, 4169, !0, t);
    case 39:
      return T(e, 2918, 2927, !0, t);
    case 40:
      return T(e, 1776, 1785, !0, t);
    case 43:
      return T(e, 3046, 3055, !0, t);
    case 44:
      return T(e, 3174, 3183, !0, t);
    case 45:
      return T(e, 3664, 3673, !0, t);
    case 46:
      return T(e, 3872, 3881, !0, t);
    case 3:
    default:
      return T(e, 48, 57, !0, t);
  }
}, un = "data-html2canvas-ignore", gB = (
  /** @class */
  function() {
    function e(A, r, t) {
      if (this.context = A, this.options = t, this.scrolledElements = [], this.referenceElement = r, this.counters = new Qc(), this.quoteDepth = 0, !r.ownerDocument)
        throw new Error("Cloned element does not have an owner document");
      this.documentElement = this.cloneNode(r.ownerDocument.documentElement, !1);
    }
    return e.prototype.toIFrame = function(A, r) {
      var t = this, B = wc(A, r);
      if (!B.contentWindow)
        return Promise.reject("Unable to find iframe window");
      var n = A.defaultView.pageXOffset, s = A.defaultView.pageYOffset, a = B.contentWindow, i = a.document, o = fc(B).then(function() {
        return Y(t, void 0, void 0, function() {
          var c, Q;
          return P(this, function(g) {
            switch (g.label) {
              case 0:
                return this.scrolledElements.forEach(dc), a && (a.scrollTo(r.left, r.top), /(iPad|iPhone|iPod)/g.test(navigator.userAgent) && (a.scrollY !== r.top || a.scrollX !== r.left) && (this.context.logger.warn("Unable to restore scroll position for cloned document"), this.context.windowBounds = this.context.windowBounds.add(a.scrollX - r.left, a.scrollY - r.top, 0, 0))), c = this.options.onclone, Q = this.clonedReferenceElement, typeof Q > "u" ? [2, Promise.reject("Error finding the " + this.referenceElement.nodeName + " in the cloned document")] : i.fonts && i.fonts.ready ? [4, i.fonts.ready] : [3, 2];
              case 1:
                g.sent(), g.label = 2;
              case 2:
                return /(AppleWebKit)/g.test(navigator.userAgent) ? [4, Cc(i)] : [3, 4];
              case 3:
                g.sent(), g.label = 4;
              case 4:
                return typeof c == "function" ? [2, Promise.resolve().then(function() {
                  return c(i, Q);
                }).then(function() {
                  return B;
                })] : [2, B];
            }
          });
        });
      });
      return i.open(), i.write(Fc(document.doctype) + "<html></html>"), hc(this.referenceElement.ownerDocument, n, s), i.replaceChild(i.adoptNode(this.documentElement), i.documentElement), i.close(), o;
    }, e.prototype.createElementClone = function(A) {
      if (Ar(
        A,
        2
        /* CLONE */
      ))
        debugger;
      if (Qn(A))
        return this.createCanvasClone(A);
      if (BB(A))
        return this.createVideoClone(A);
      if (nB(A))
        return this.createStyleClone(A);
      var r = A.cloneNode(!1);
      return Br(r) && (Br(A) && A.currentSrc && A.currentSrc !== A.src && (r.src = A.currentSrc, r.srcset = ""), r.loading === "lazy" && (r.loading = "eager")), sB(r) ? this.createCustomElementClone(r) : r;
    }, e.prototype.createCustomElementClone = function(A) {
      var r = document.createElement("html2canvascustomelement");
      return St(A.style, r), r;
    }, e.prototype.createStyleClone = function(A) {
      try {
        var r = A.sheet;
        if (r && r.cssRules) {
          var t = [].slice.call(r.cssRules, 0).reduce(function(n, s) {
            return s && typeof s.cssText == "string" ? n + s.cssText : n;
          }, ""), B = A.cloneNode(!1);
          return B.textContent = t, B;
        }
      } catch (n) {
        if (this.context.logger.error("Unable to access cssRules property", n), n.name !== "SecurityError")
          throw n;
      }
      return A.cloneNode(!1);
    }, e.prototype.createCanvasClone = function(A) {
      var r;
      if (this.options.inlineImages && A.ownerDocument) {
        var t = A.ownerDocument.createElement("img");
        try {
          return t.src = A.toDataURL(), t;
        } catch {
          this.context.logger.info("Unable to inline canvas contents, canvas is tainted", A);
        }
      }
      var B = A.cloneNode(!1);
      try {
        B.width = A.width, B.height = A.height;
        var n = A.getContext("2d"), s = B.getContext("2d");
        if (s)
          if (!this.options.allowTaint && n)
            s.putImageData(n.getImageData(0, 0, A.width, A.height), 0, 0);
          else {
            var a = (r = A.getContext("webgl2")) !== null && r !== void 0 ? r : A.getContext("webgl");
            if (a) {
              var i = a.getContextAttributes();
              (i == null ? void 0 : i.preserveDrawingBuffer) === !1 && this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false", A);
            }
            s.drawImage(A, 0, 0);
          }
        return B;
      } catch {
        this.context.logger.info("Unable to clone canvas as it is tainted", A);
      }
      return B;
    }, e.prototype.createVideoClone = function(A) {
      var r = A.ownerDocument.createElement("canvas");
      r.width = A.offsetWidth, r.height = A.offsetHeight;
      var t = r.getContext("2d");
      try {
        return t && (t.drawImage(A, 0, 0, r.width, r.height), this.options.allowTaint || t.getImageData(0, 0, r.width, r.height)), r;
      } catch {
        this.context.logger.info("Unable to clone video as it is tainted", A);
      }
      var B = A.ownerDocument.createElement("canvas");
      return B.width = A.offsetWidth, B.height = A.offsetHeight, B;
    }, e.prototype.appendChildNode = function(A, r, t) {
      (!WA(r) || !cc(r) && !r.hasAttribute(un) && (typeof this.options.ignoreElements != "function" || !this.options.ignoreElements(r))) && (!this.options.copyStyles || !WA(r) || !nB(r)) && A.appendChild(this.cloneNode(r, t));
    }, e.prototype.cloneChildNodes = function(A, r, t) {
      for (var B = this, n = A.shadowRoot ? A.shadowRoot.firstChild : A.firstChild; n; n = n.nextSibling)
        if (WA(n) && ln(n) && typeof n.assignedNodes == "function") {
          var s = n.assignedNodes();
          s.length && s.forEach(function(a) {
            return B.appendChildNode(r, a, t);
          });
        } else
          this.appendChildNode(r, n, t);
    }, e.prototype.cloneNode = function(A, r) {
      if (on(A))
        return document.createTextNode(A.data);
      if (!A.ownerDocument)
        return A.cloneNode(!1);
      var t = A.ownerDocument.defaultView;
      if (t && WA(A) && (rr(A) || Ye(A))) {
        var B = this.createElementClone(A);
        B.style.transitionProperty = "none";
        var n = t.getComputedStyle(A), s = t.getComputedStyle(A, ":before"), a = t.getComputedStyle(A, ":after");
        this.referenceElement === A && rr(B) && (this.clonedReferenceElement = B), wr(B) && Hc(B);
        var i = this.counters.parse(new _r(this.context, n)), o = this.resolvePseudoContent(A, B, s, ue.BEFORE);
        sB(A) && (r = !0), BB(A) || this.cloneChildNodes(A, B, r), o && B.insertBefore(o, B.firstChild);
        var c = this.resolvePseudoContent(A, B, a, ue.AFTER);
        return c && B.appendChild(c), this.counters.pop(i), (n && (this.options.copyStyles || Ye(A)) && !gn(A) || r) && St(n, B), (A.scrollTop !== 0 || A.scrollLeft !== 0) && this.scrolledElements.push([B, A.scrollLeft, A.scrollTop]), ($e(A) || At(A)) && ($e(B) || At(B)) && (B.value = A.value), B;
      }
      return A.cloneNode(!1);
    }, e.prototype.resolvePseudoContent = function(A, r, t, B) {
      var n = this;
      if (t) {
        var s = t.content, a = r.ownerDocument;
        if (!(!a || !s || s === "none" || s === "-moz-alt-content" || t.display === "none")) {
          this.counters.parse(new _r(this.context, t));
          var i = new no(this.context, t), o = a.createElement("html2canvaspseudoelement");
          St(t, o), i.content.forEach(function(Q) {
            if (Q.type === 0)
              o.appendChild(a.createTextNode(Q.value));
            else if (Q.type === 22) {
              var g = a.createElement("img");
              g.src = Q.value, g.style.opacity = "1", o.appendChild(g);
            } else if (Q.type === 18) {
              if (Q.name === "attr") {
                var C = Q.values.filter(D);
                C.length && o.appendChild(a.createTextNode(A.getAttribute(C[0].value) || ""));
              } else if (Q.name === "counter") {
                var l = Q.values.filter(qA), u = l[0], H = l[1];
                if (u && D(u)) {
                  var h = n.counters.getCounterValue(u.value), F = H && D(H) ? $t.parse(n.context, H.value) : 3;
                  o.appendChild(a.createTextNode(Ue(h, F, !1)));
                }
              } else if (Q.name === "counters") {
                var K = Q.values.filter(qA), u = K[0], d = K[1], H = K[2];
                if (u && D(u)) {
                  var E = n.counters.getCounterValues(u.value), w = H && D(H) ? $t.parse(n.context, H.value) : 3, v = d && d.type === 0 ? d.value : "", I = E.map(function(Z) {
                    return Ue(Z, w, !1);
                  }).join(v);
                  o.appendChild(a.createTextNode(I));
                }
              }
            } else if (Q.type === 20)
              switch (Q.value) {
                case "open-quote":
                  o.appendChild(a.createTextNode(Xr(i.quotes, n.quoteDepth++, !0)));
                  break;
                case "close-quote":
                  o.appendChild(a.createTextNode(Xr(i.quotes, --n.quoteDepth, !1)));
                  break;
                default:
                  o.appendChild(a.createTextNode(Q.value));
              }
          }), o.className = nr + " " + sr;
          var c = B === ue.BEFORE ? " " + nr : " " + sr;
          return Ye(r) ? r.className.baseValue += c : r.className += c, o;
        }
      }
    }, e.destroy = function(A) {
      return A.parentNode ? (A.parentNode.removeChild(A), !0) : !1;
    }, e;
  }()
), ue;
(function(e) {
  e[e.BEFORE = 0] = "BEFORE", e[e.AFTER = 1] = "AFTER";
})(ue || (ue = {}));
var wc = function(e, A) {
  var r = e.createElement("iframe");
  return r.className = "html2canvas-container", r.style.visibility = "hidden", r.style.position = "fixed", r.style.left = "-10000px", r.style.top = "0px", r.style.border = "0", r.width = A.width.toString(), r.height = A.height.toString(), r.scrolling = "no", r.setAttribute(un, "true"), e.body.appendChild(r), r;
}, uc = function(e) {
  return new Promise(function(A) {
    if (e.complete) {
      A();
      return;
    }
    if (!e.src) {
      A();
      return;
    }
    e.onload = A, e.onerror = A;
  });
}, Cc = function(e) {
  return Promise.all([].slice.call(e.images, 0).map(uc));
}, fc = function(e) {
  return new Promise(function(A, r) {
    var t = e.contentWindow;
    if (!t)
      return r("No window assigned for iframe");
    var B = t.document;
    t.onload = e.onload = function() {
      t.onload = e.onload = null;
      var n = setInterval(function() {
        B.body.childNodes.length > 0 && B.readyState === "complete" && (clearInterval(n), A(e));
      }, 50);
    };
  });
}, Uc = [
  "all",
  "d",
  "content"
  // Safari shows pseudoelements if content is set
], St = function(e, A) {
  for (var r = e.length - 1; r >= 0; r--) {
    var t = e.item(r);
    Uc.indexOf(t) === -1 && A.style.setProperty(t, e.getPropertyValue(t));
  }
  return A;
}, Fc = function(e) {
  var A = "";
  return e && (A += "<!DOCTYPE ", e.name && (A += e.name), e.internalSubset && (A += e.internalSubset), e.publicId && (A += '"' + e.publicId + '"'), e.systemId && (A += '"' + e.systemId + '"'), A += ">"), A;
}, hc = function(e, A, r) {
  e && e.defaultView && (A !== e.defaultView.pageXOffset || r !== e.defaultView.pageYOffset) && e.defaultView.scrollTo(A, r);
}, dc = function(e) {
  var A = e[0], r = e[1], t = e[2];
  A.scrollLeft = r, A.scrollTop = t;
}, Ec = ":before", pc = ":after", nr = "___html2canvas___pseudoelement_before", sr = "___html2canvas___pseudoelement_after", lB = `{
    content: "" !important;
    display: none !important;
}`, Hc = function(e) {
  vc(e, "." + nr + Ec + lB + `
         .` + sr + pc + lB);
}, vc = function(e, A) {
  var r = e.ownerDocument;
  if (r) {
    var t = r.createElement("style");
    t.textContent = A, e.appendChild(t);
  }
}, Cn = (
  /** @class */
  function() {
    function e() {
    }
    return e.getOrigin = function(A) {
      var r = e._link;
      return r ? (r.href = A, r.href = r.href, r.protocol + r.hostname + r.port) : "about:blank";
    }, e.isSameOrigin = function(A) {
      return e.getOrigin(A) === e._origin;
    }, e.setContext = function(A) {
      e._link = A.document.createElement("a"), e._origin = e.getOrigin(A.location.href);
    }, e._origin = "about:blank", e;
  }()
), Ic = (
  /** @class */
  function() {
    function e(A, r) {
      this.context = A, this._options = r, this._cache = {};
    }
    return e.prototype.addImage = function(A) {
      var r = Promise.resolve();
      return this.has(A) || (Tt(A) || Lc(A)) && (this._cache[A] = this.loadImage(A)).catch(function() {
      }), r;
    }, e.prototype.match = function(A) {
      return this._cache[A];
    }, e.prototype.loadImage = function(A) {
      return Y(this, void 0, void 0, function() {
        var r, t, B, n, s = this;
        return P(this, function(a) {
          switch (a.label) {
            case 0:
              return r = Cn.isSameOrigin(A), t = !xt(A) && this._options.useCORS === !0 && X.SUPPORT_CORS_IMAGES && !r, B = !xt(A) && !r && !Tt(A) && typeof this._options.proxy == "string" && X.SUPPORT_CORS_XHR && !t, !r && this._options.allowTaint === !1 && !xt(A) && !Tt(A) && !B && !t ? [
                2
                /*return*/
              ] : (n = A, B ? [4, this.proxy(n)] : [3, 2]);
            case 1:
              n = a.sent(), a.label = 2;
            case 2:
              return this.context.logger.debug("Added image " + A.substring(0, 256)), [4, new Promise(function(i, o) {
                var c = new Image();
                c.onload = function() {
                  return i(c);
                }, c.onerror = o, (bc(n) || t) && (c.crossOrigin = "anonymous"), c.src = n, c.complete === !0 && setTimeout(function() {
                  return i(c);
                }, 500), s._options.imageTimeout > 0 && setTimeout(function() {
                  return o("Timed out (" + s._options.imageTimeout + "ms) loading image");
                }, s._options.imageTimeout);
              })];
            case 3:
              return [2, a.sent()];
          }
        });
      });
    }, e.prototype.has = function(A) {
      return typeof this._cache[A] < "u";
    }, e.prototype.keys = function() {
      return Promise.resolve(Object.keys(this._cache));
    }, e.prototype.proxy = function(A) {
      var r = this, t = this._options.proxy;
      if (!t)
        throw new Error("No proxy defined");
      var B = A.substring(0, 256);
      return new Promise(function(n, s) {
        var a = X.SUPPORT_RESPONSE_TYPE ? "blob" : "text", i = new XMLHttpRequest();
        i.onload = function() {
          if (i.status === 200)
            if (a === "text")
              n(i.response);
            else {
              var Q = new FileReader();
              Q.addEventListener("load", function() {
                return n(Q.result);
              }, !1), Q.addEventListener("error", function(g) {
                return s(g);
              }, !1), Q.readAsDataURL(i.response);
            }
          else
            s("Failed to proxy resource " + B + " with status code " + i.status);
        }, i.onerror = s;
        var o = t.indexOf("?") > -1 ? "&" : "?";
        if (i.open("GET", "" + t + o + "url=" + encodeURIComponent(A) + "&responseType=" + a), a !== "text" && i instanceof XMLHttpRequest && (i.responseType = a), r._options.imageTimeout) {
          var c = r._options.imageTimeout;
          i.timeout = c, i.ontimeout = function() {
            return s("Timed out (" + c + "ms) proxying " + B);
          };
        }
        i.send();
      });
    }, e;
  }()
), mc = /^data:image\/svg\+xml/i, yc = /^data:image\/.*;base64,/i, Kc = /^data:image\/.*/i, Lc = function(e) {
  return X.SUPPORT_SVG_DRAWING || !Dc(e);
}, xt = function(e) {
  return Kc.test(e);
}, bc = function(e) {
  return yc.test(e);
}, Tt = function(e) {
  return e.substr(0, 4) === "blob";
}, Dc = function(e) {
  return e.substr(-3).toLowerCase() === "svg" || mc.test(e);
}, f = (
  /** @class */
  function() {
    function e(A, r) {
      this.type = 0, this.x = A, this.y = r;
    }
    return e.prototype.add = function(A, r) {
      return new e(this.x + A, this.y + r);
    }, e;
  }()
), PA = function(e, A, r) {
  return new f(e.x + (A.x - e.x) * r, e.y + (A.y - e.y) * r);
}, Ve = (
  /** @class */
  function() {
    function e(A, r, t, B) {
      this.type = 1, this.start = A, this.startControl = r, this.endControl = t, this.end = B;
    }
    return e.prototype.subdivide = function(A, r) {
      var t = PA(this.start, this.startControl, A), B = PA(this.startControl, this.endControl, A), n = PA(this.endControl, this.end, A), s = PA(t, B, A), a = PA(B, n, A), i = PA(s, a, A);
      return r ? new e(this.start, t, s, i) : new e(i, a, n, this.end);
    }, e.prototype.add = function(A, r) {
      return new e(this.start.add(A, r), this.startControl.add(A, r), this.endControl.add(A, r), this.end.add(A, r));
    }, e.prototype.reverse = function() {
      return new e(this.end, this.endControl, this.startControl, this.start);
    }, e;
  }()
), rA = function(e) {
  return e.type === 1;
}, Sc = (
  /** @class */
  function() {
    function e(A) {
      var r = A.styles, t = A.bounds, B = ae(r.borderTopLeftRadius, t.width, t.height), n = B[0], s = B[1], a = ae(r.borderTopRightRadius, t.width, t.height), i = a[0], o = a[1], c = ae(r.borderBottomRightRadius, t.width, t.height), Q = c[0], g = c[1], C = ae(r.borderBottomLeftRadius, t.width, t.height), l = C[0], u = C[1], H = [];
      H.push((n + i) / t.width), H.push((l + Q) / t.width), H.push((s + u) / t.height), H.push((o + g) / t.height);
      var h = Math.max.apply(Math, H);
      h > 1 && (n /= h, s /= h, i /= h, o /= h, Q /= h, g /= h, l /= h, u /= h);
      var F = t.width - i, K = t.height - g, d = t.width - Q, E = t.height - u, w = r.borderTopWidth, v = r.borderRightWidth, I = r.borderBottomWidth, p = r.borderLeftWidth, O = S(r.paddingTop, A.bounds.width), Z = S(r.paddingRight, A.bounds.width), $ = S(r.paddingBottom, A.bounds.width), b = S(r.paddingLeft, A.bounds.width);
      this.topLeftBorderDoubleOuterBox = n > 0 || s > 0 ? x(t.left + p / 3, t.top + w / 3, n - p / 3, s - w / 3, L.TOP_LEFT) : new f(t.left + p / 3, t.top + w / 3), this.topRightBorderDoubleOuterBox = n > 0 || s > 0 ? x(t.left + F, t.top + w / 3, i - v / 3, o - w / 3, L.TOP_RIGHT) : new f(t.left + t.width - v / 3, t.top + w / 3), this.bottomRightBorderDoubleOuterBox = Q > 0 || g > 0 ? x(t.left + d, t.top + K, Q - v / 3, g - I / 3, L.BOTTOM_RIGHT) : new f(t.left + t.width - v / 3, t.top + t.height - I / 3), this.bottomLeftBorderDoubleOuterBox = l > 0 || u > 0 ? x(t.left + p / 3, t.top + E, l - p / 3, u - I / 3, L.BOTTOM_LEFT) : new f(t.left + p / 3, t.top + t.height - I / 3), this.topLeftBorderDoubleInnerBox = n > 0 || s > 0 ? x(t.left + p * 2 / 3, t.top + w * 2 / 3, n - p * 2 / 3, s - w * 2 / 3, L.TOP_LEFT) : new f(t.left + p * 2 / 3, t.top + w * 2 / 3), this.topRightBorderDoubleInnerBox = n > 0 || s > 0 ? x(t.left + F, t.top + w * 2 / 3, i - v * 2 / 3, o - w * 2 / 3, L.TOP_RIGHT) : new f(t.left + t.width - v * 2 / 3, t.top + w * 2 / 3), this.bottomRightBorderDoubleInnerBox = Q > 0 || g > 0 ? x(t.left + d, t.top + K, Q - v * 2 / 3, g - I * 2 / 3, L.BOTTOM_RIGHT) : new f(t.left + t.width - v * 2 / 3, t.top + t.height - I * 2 / 3), this.bottomLeftBorderDoubleInnerBox = l > 0 || u > 0 ? x(t.left + p * 2 / 3, t.top + E, l - p * 2 / 3, u - I * 2 / 3, L.BOTTOM_LEFT) : new f(t.left + p * 2 / 3, t.top + t.height - I * 2 / 3), this.topLeftBorderStroke = n > 0 || s > 0 ? x(t.left + p / 2, t.top + w / 2, n - p / 2, s - w / 2, L.TOP_LEFT) : new f(t.left + p / 2, t.top + w / 2), this.topRightBorderStroke = n > 0 || s > 0 ? x(t.left + F, t.top + w / 2, i - v / 2, o - w / 2, L.TOP_RIGHT) : new f(t.left + t.width - v / 2, t.top + w / 2), this.bottomRightBorderStroke = Q > 0 || g > 0 ? x(t.left + d, t.top + K, Q - v / 2, g - I / 2, L.BOTTOM_RIGHT) : new f(t.left + t.width - v / 2, t.top + t.height - I / 2), this.bottomLeftBorderStroke = l > 0 || u > 0 ? x(t.left + p / 2, t.top + E, l - p / 2, u - I / 2, L.BOTTOM_LEFT) : new f(t.left + p / 2, t.top + t.height - I / 2), this.topLeftBorderBox = n > 0 || s > 0 ? x(t.left, t.top, n, s, L.TOP_LEFT) : new f(t.left, t.top), this.topRightBorderBox = i > 0 || o > 0 ? x(t.left + F, t.top, i, o, L.TOP_RIGHT) : new f(t.left + t.width, t.top), this.bottomRightBorderBox = Q > 0 || g > 0 ? x(t.left + d, t.top + K, Q, g, L.BOTTOM_RIGHT) : new f(t.left + t.width, t.top + t.height), this.bottomLeftBorderBox = l > 0 || u > 0 ? x(t.left, t.top + E, l, u, L.BOTTOM_LEFT) : new f(t.left, t.top + t.height), this.topLeftPaddingBox = n > 0 || s > 0 ? x(t.left + p, t.top + w, Math.max(0, n - p), Math.max(0, s - w), L.TOP_LEFT) : new f(t.left + p, t.top + w), this.topRightPaddingBox = i > 0 || o > 0 ? x(t.left + Math.min(F, t.width - v), t.top + w, F > t.width + v ? 0 : Math.max(0, i - v), Math.max(0, o - w), L.TOP_RIGHT) : new f(t.left + t.width - v, t.top + w), this.bottomRightPaddingBox = Q > 0 || g > 0 ? x(t.left + Math.min(d, t.width - p), t.top + Math.min(K, t.height - I), Math.max(0, Q - v), Math.max(0, g - I), L.BOTTOM_RIGHT) : new f(t.left + t.width - v, t.top + t.height - I), this.bottomLeftPaddingBox = l > 0 || u > 0 ? x(t.left + p, t.top + Math.min(E, t.height - I), Math.max(0, l - p), Math.max(0, u - I), L.BOTTOM_LEFT) : new f(t.left + p, t.top + t.height - I), this.topLeftContentBox = n > 0 || s > 0 ? x(t.left + p + b, t.top + w + O, Math.max(0, n - (p + b)), Math.max(0, s - (w + O)), L.TOP_LEFT) : new f(t.left + p + b, t.top + w + O), this.topRightContentBox = i > 0 || o > 0 ? x(t.left + Math.min(F, t.width + p + b), t.top + w + O, F > t.width + p + b ? 0 : i - p + b, o - (w + O), L.TOP_RIGHT) : new f(t.left + t.width - (v + Z), t.top + w + O), this.bottomRightContentBox = Q > 0 || g > 0 ? x(t.left + Math.min(d, t.width - (p + b)), t.top + Math.min(K, t.height + w + O), Math.max(0, Q - (v + Z)), g - (I + $), L.BOTTOM_RIGHT) : new f(t.left + t.width - (v + Z), t.top + t.height - (I + $)), this.bottomLeftContentBox = l > 0 || u > 0 ? x(t.left + p + b, t.top + E, Math.max(0, l - (p + b)), u - (I + $), L.BOTTOM_LEFT) : new f(t.left + p + b, t.top + t.height - (I + $));
    }
    return e;
  }()
), L;
(function(e) {
  e[e.TOP_LEFT = 0] = "TOP_LEFT", e[e.TOP_RIGHT = 1] = "TOP_RIGHT", e[e.BOTTOM_RIGHT = 2] = "BOTTOM_RIGHT", e[e.BOTTOM_LEFT = 3] = "BOTTOM_LEFT";
})(L || (L = {}));
var x = function(e, A, r, t, B) {
  var n = 4 * ((Math.sqrt(2) - 1) / 3), s = r * n, a = t * n, i = e + r, o = A + t;
  switch (B) {
    case L.TOP_LEFT:
      return new Ve(new f(e, o), new f(e, o - a), new f(i - s, A), new f(i, A));
    case L.TOP_RIGHT:
      return new Ve(new f(e, A), new f(e + s, A), new f(i, o - a), new f(i, o));
    case L.BOTTOM_RIGHT:
      return new Ve(new f(i, A), new f(i, A + a), new f(e + s, o), new f(e, o));
    case L.BOTTOM_LEFT:
    default:
      return new Ve(new f(i, o), new f(i - s, o), new f(e, A + a), new f(e, A));
  }
}, et = function(e) {
  return [e.topLeftBorderBox, e.topRightBorderBox, e.bottomRightBorderBox, e.bottomLeftBorderBox];
}, xc = function(e) {
  return [
    e.topLeftContentBox,
    e.topRightContentBox,
    e.bottomRightContentBox,
    e.bottomLeftContentBox
  ];
}, tt = function(e) {
  return [
    e.topLeftPaddingBox,
    e.topRightPaddingBox,
    e.bottomRightPaddingBox,
    e.bottomLeftPaddingBox
  ];
}, Tc = (
  /** @class */
  function() {
    function e(A, r, t) {
      this.offsetX = A, this.offsetY = r, this.matrix = t, this.type = 0, this.target = 6;
    }
    return e;
  }()
), Ne = (
  /** @class */
  function() {
    function e(A, r) {
      this.path = A, this.target = r, this.type = 1;
    }
    return e;
  }()
), Mc = (
  /** @class */
  function() {
    function e(A) {
      this.opacity = A, this.type = 2, this.target = 6;
    }
    return e;
  }()
), Oc = function(e) {
  return e.type === 0;
}, fn = function(e) {
  return e.type === 1;
}, Rc = function(e) {
  return e.type === 2;
}, wB = function(e, A) {
  return e.length === A.length ? e.some(function(r, t) {
    return r === A[t];
  }) : !1;
}, Gc = function(e, A, r, t, B) {
  return e.map(function(n, s) {
    switch (s) {
      case 0:
        return n.add(A, r);
      case 1:
        return n.add(A + t, r);
      case 2:
        return n.add(A + t, r + B);
      case 3:
        return n.add(A, r + B);
    }
    return n;
  });
}, Un = (
  /** @class */
  function() {
    function e(A) {
      this.element = A, this.inlineLevel = [], this.nonInlineLevel = [], this.negativeZIndex = [], this.zeroOrAutoZIndexOrTransformedOrOpacity = [], this.positiveZIndex = [], this.nonPositionedFloats = [], this.nonPositionedInlineLevel = [];
    }
    return e;
  }()
), Fn = (
  /** @class */
  function() {
    function e(A, r) {
      if (this.container = A, this.parent = r, this.effects = [], this.curves = new Sc(this.container), this.container.styles.opacity < 1 && this.effects.push(new Mc(this.container.styles.opacity)), this.container.styles.transform !== null) {
        var t = this.container.bounds.left + this.container.styles.transformOrigin[0].number, B = this.container.bounds.top + this.container.styles.transformOrigin[1].number, n = this.container.styles.transform;
        this.effects.push(new Tc(t, B, n));
      }
      if (this.container.styles.overflowX !== 0) {
        var s = et(this.curves), a = tt(this.curves);
        wB(s, a) ? this.effects.push(new Ne(
          s,
          6
          /* CONTENT */
        )) : (this.effects.push(new Ne(
          s,
          2
          /* BACKGROUND_BORDERS */
        )), this.effects.push(new Ne(
          a,
          4
          /* CONTENT */
        )));
      }
    }
    return e.prototype.getEffects = function(A) {
      for (var r = [
        2,
        3
        /* FIXED */
      ].indexOf(this.container.styles.position) === -1, t = this.parent, B = this.effects.slice(0); t; ) {
        var n = t.effects.filter(function(i) {
          return !fn(i);
        });
        if (r || t.container.styles.position !== 0 || !t.parent) {
          if (B.unshift.apply(B, n), r = [
            2,
            3
            /* FIXED */
          ].indexOf(t.container.styles.position) === -1, t.container.styles.overflowX !== 0) {
            var s = et(t.curves), a = tt(t.curves);
            wB(s, a) || B.unshift(new Ne(
              a,
              6
              /* CONTENT */
            ));
          }
        } else
          B.unshift.apply(B, n);
        t = t.parent;
      }
      return B.filter(function(i) {
        return G(i.target, A);
      });
    }, e;
  }()
), ir = function(e, A, r, t) {
  e.container.elements.forEach(function(B) {
    var n = G(
      B.flags,
      4
      /* CREATES_REAL_STACKING_CONTEXT */
    ), s = G(
      B.flags,
      2
      /* CREATES_STACKING_CONTEXT */
    ), a = new Fn(B, e);
    G(
      B.styles.display,
      2048
      /* LIST_ITEM */
    ) && t.push(a);
    var i = G(
      B.flags,
      8
      /* IS_LIST_OWNER */
    ) ? [] : t;
    if (n || s) {
      var o = n || B.styles.isPositioned() ? r : A, c = new Un(a);
      if (B.styles.isPositioned() || B.styles.opacity < 1 || B.styles.isTransformed()) {
        var Q = B.styles.zIndex.order;
        if (Q < 0) {
          var g = 0;
          o.negativeZIndex.some(function(l, u) {
            return Q > l.element.container.styles.zIndex.order ? (g = u, !1) : g > 0;
          }), o.negativeZIndex.splice(g, 0, c);
        } else if (Q > 0) {
          var C = 0;
          o.positiveZIndex.some(function(l, u) {
            return Q >= l.element.container.styles.zIndex.order ? (C = u + 1, !1) : C > 0;
          }), o.positiveZIndex.splice(C, 0, c);
        } else
          o.zeroOrAutoZIndexOrTransformedOrOpacity.push(c);
      } else
        B.styles.isFloating() ? o.nonPositionedFloats.push(c) : o.nonPositionedInlineLevel.push(c);
      ir(a, c, n ? c : r, i);
    } else
      B.styles.isInlineLevel() ? A.inlineLevel.push(a) : A.nonInlineLevel.push(a), ir(a, A, r, i);
    G(
      B.flags,
      8
      /* IS_LIST_OWNER */
    ) && hn(B, i);
  });
}, hn = function(e, A) {
  for (var r = e instanceof tr ? e.start : 1, t = e instanceof tr ? e.reversed : !1, B = 0; B < A.length; B++) {
    var n = A[B];
    n.container instanceof tn && typeof n.container.value == "number" && n.container.value !== 0 && (r = n.container.value), n.listValue = Ue(r, n.container.styles.listStyleType, !0), r += t ? -1 : 1;
  }
}, Vc = function(e) {
  var A = new Fn(e, null), r = new Un(A), t = [];
  return ir(A, r, r, t), hn(A.container, t), r;
}, uB = function(e, A) {
  switch (A) {
    case 0:
      return nA(e.topLeftBorderBox, e.topLeftPaddingBox, e.topRightBorderBox, e.topRightPaddingBox);
    case 1:
      return nA(e.topRightBorderBox, e.topRightPaddingBox, e.bottomRightBorderBox, e.bottomRightPaddingBox);
    case 2:
      return nA(e.bottomRightBorderBox, e.bottomRightPaddingBox, e.bottomLeftBorderBox, e.bottomLeftPaddingBox);
    case 3:
    default:
      return nA(e.bottomLeftBorderBox, e.bottomLeftPaddingBox, e.topLeftBorderBox, e.topLeftPaddingBox);
  }
}, Nc = function(e, A) {
  switch (A) {
    case 0:
      return nA(e.topLeftBorderBox, e.topLeftBorderDoubleOuterBox, e.topRightBorderBox, e.topRightBorderDoubleOuterBox);
    case 1:
      return nA(e.topRightBorderBox, e.topRightBorderDoubleOuterBox, e.bottomRightBorderBox, e.bottomRightBorderDoubleOuterBox);
    case 2:
      return nA(e.bottomRightBorderBox, e.bottomRightBorderDoubleOuterBox, e.bottomLeftBorderBox, e.bottomLeftBorderDoubleOuterBox);
    case 3:
    default:
      return nA(e.bottomLeftBorderBox, e.bottomLeftBorderDoubleOuterBox, e.topLeftBorderBox, e.topLeftBorderDoubleOuterBox);
  }
}, Xc = function(e, A) {
  switch (A) {
    case 0:
      return nA(e.topLeftBorderDoubleInnerBox, e.topLeftPaddingBox, e.topRightBorderDoubleInnerBox, e.topRightPaddingBox);
    case 1:
      return nA(e.topRightBorderDoubleInnerBox, e.topRightPaddingBox, e.bottomRightBorderDoubleInnerBox, e.bottomRightPaddingBox);
    case 2:
      return nA(e.bottomRightBorderDoubleInnerBox, e.bottomRightPaddingBox, e.bottomLeftBorderDoubleInnerBox, e.bottomLeftPaddingBox);
    case 3:
    default:
      return nA(e.bottomLeftBorderDoubleInnerBox, e.bottomLeftPaddingBox, e.topLeftBorderDoubleInnerBox, e.topLeftPaddingBox);
  }
}, _c = function(e, A) {
  switch (A) {
    case 0:
      return Xe(e.topLeftBorderStroke, e.topRightBorderStroke);
    case 1:
      return Xe(e.topRightBorderStroke, e.bottomRightBorderStroke);
    case 2:
      return Xe(e.bottomRightBorderStroke, e.bottomLeftBorderStroke);
    case 3:
    default:
      return Xe(e.bottomLeftBorderStroke, e.topLeftBorderStroke);
  }
}, Xe = function(e, A) {
  var r = [];
  return rA(e) ? r.push(e.subdivide(0.5, !1)) : r.push(e), rA(A) ? r.push(A.subdivide(0.5, !0)) : r.push(A), r;
}, nA = function(e, A, r, t) {
  var B = [];
  return rA(e) ? B.push(e.subdivide(0.5, !1)) : B.push(e), rA(r) ? B.push(r.subdivide(0.5, !0)) : B.push(r), rA(t) ? B.push(t.subdivide(0.5, !0).reverse()) : B.push(t), rA(A) ? B.push(A.subdivide(0.5, !1).reverse()) : B.push(A), B;
}, dn = function(e) {
  var A = e.bounds, r = e.styles;
  return A.add(r.borderLeftWidth, r.borderTopWidth, -(r.borderRightWidth + r.borderLeftWidth), -(r.borderTopWidth + r.borderBottomWidth));
}, rt = function(e) {
  var A = e.styles, r = e.bounds, t = S(A.paddingLeft, r.width), B = S(A.paddingRight, r.width), n = S(A.paddingTop, r.width), s = S(A.paddingBottom, r.width);
  return r.add(t + A.borderLeftWidth, n + A.borderTopWidth, -(A.borderRightWidth + A.borderLeftWidth + t + B), -(A.borderTopWidth + A.borderBottomWidth + n + s));
}, Pc = function(e, A) {
  return e === 0 ? A.bounds : e === 2 ? rt(A) : dn(A);
}, Jc = function(e, A) {
  return e === 0 ? A.bounds : e === 2 ? rt(A) : dn(A);
}, Mt = function(e, A, r) {
  var t = Pc(YA(e.styles.backgroundOrigin, A), e), B = Jc(YA(e.styles.backgroundClip, A), e), n = kc(YA(e.styles.backgroundSize, A), r, t), s = n[0], a = n[1], i = ae(YA(e.styles.backgroundPosition, A), t.width - s, t.height - a), o = Yc(YA(e.styles.backgroundRepeat, A), i, n, t, B), c = Math.round(t.left + i[0]), Q = Math.round(t.top + i[1]);
  return [o, c, Q, s, a];
}, JA = function(e) {
  return D(e) && e.value === ZA.AUTO;
}, _e = function(e) {
  return typeof e == "number";
}, kc = function(e, A, r) {
  var t = A[0], B = A[1], n = A[2], s = e[0], a = e[1];
  if (!s)
    return [0, 0];
  if (R(s) && a && R(a))
    return [S(s, r.width), S(a, r.height)];
  var i = _e(n);
  if (D(s) && (s.value === ZA.CONTAIN || s.value === ZA.COVER)) {
    if (_e(n)) {
      var o = r.width / r.height;
      return o < n != (s.value === ZA.COVER) ? [r.width, r.width / n] : [r.height * n, r.height];
    }
    return [r.width, r.height];
  }
  var c = _e(t), Q = _e(B), g = c || Q;
  if (JA(s) && (!a || JA(a))) {
    if (c && Q)
      return [t, B];
    if (!i && !g)
      return [r.width, r.height];
    if (g && i) {
      var C = c ? t : B * n, l = Q ? B : t / n;
      return [C, l];
    }
    var u = c ? t : r.width, H = Q ? B : r.height;
    return [u, H];
  }
  if (i) {
    var h = 0, F = 0;
    return R(s) ? h = S(s, r.width) : R(a) && (F = S(a, r.height)), JA(s) ? h = F * n : (!a || JA(a)) && (F = h / n), [h, F];
  }
  var K = null, d = null;
  if (R(s) ? K = S(s, r.width) : a && R(a) && (d = S(a, r.height)), K !== null && (!a || JA(a)) && (d = c && Q ? K / t * B : r.height), d !== null && JA(s) && (K = c && Q ? d / B * t : r.width), K !== null && d !== null)
    return [K, d];
  throw new Error("Unable to calculate background-size for element");
}, YA = function(e, A) {
  var r = e[A];
  return typeof r > "u" ? e[0] : r;
}, Yc = function(e, A, r, t, B) {
  var n = A[0], s = A[1], a = r[0], i = r[1];
  switch (e) {
    case 2:
      return [
        new f(Math.round(t.left), Math.round(t.top + s)),
        new f(Math.round(t.left + t.width), Math.round(t.top + s)),
        new f(Math.round(t.left + t.width), Math.round(i + t.top + s)),
        new f(Math.round(t.left), Math.round(i + t.top + s))
      ];
    case 3:
      return [
        new f(Math.round(t.left + n), Math.round(t.top)),
        new f(Math.round(t.left + n + a), Math.round(t.top)),
        new f(Math.round(t.left + n + a), Math.round(t.height + t.top)),
        new f(Math.round(t.left + n), Math.round(t.height + t.top))
      ];
    case 1:
      return [
        new f(Math.round(t.left + n), Math.round(t.top + s)),
        new f(Math.round(t.left + n + a), Math.round(t.top + s)),
        new f(Math.round(t.left + n + a), Math.round(t.top + s + i)),
        new f(Math.round(t.left + n), Math.round(t.top + s + i))
      ];
    default:
      return [
        new f(Math.round(B.left), Math.round(B.top)),
        new f(Math.round(B.left + B.width), Math.round(B.top)),
        new f(Math.round(B.left + B.width), Math.round(B.height + B.top)),
        new f(Math.round(B.left), Math.round(B.height + B.top))
      ];
  }
}, Wc = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", CB = "Hidden Text", Zc = (
  /** @class */
  function() {
    function e(A) {
      this._data = {}, this._document = A;
    }
    return e.prototype.parseMetrics = function(A, r) {
      var t = this._document.createElement("div"), B = this._document.createElement("img"), n = this._document.createElement("span"), s = this._document.body;
      t.style.visibility = "hidden", t.style.fontFamily = A, t.style.fontSize = r, t.style.margin = "0", t.style.padding = "0", t.style.whiteSpace = "nowrap", s.appendChild(t), B.src = Wc, B.width = 1, B.height = 1, B.style.margin = "0", B.style.padding = "0", B.style.verticalAlign = "baseline", n.style.fontFamily = A, n.style.fontSize = r, n.style.margin = "0", n.style.padding = "0", n.appendChild(this._document.createTextNode(CB)), t.appendChild(n), t.appendChild(B);
      var a = B.offsetTop - n.offsetTop + 2;
      t.removeChild(n), t.appendChild(this._document.createTextNode(CB)), t.style.lineHeight = "normal", B.style.verticalAlign = "super";
      var i = B.offsetTop - t.offsetTop + 2;
      return s.removeChild(t), { baseline: a, middle: i };
    }, e.prototype.getMetrics = function(A, r) {
      var t = A + " " + r;
      return typeof this._data[t] > "u" && (this._data[t] = this.parseMetrics(A, r)), this._data[t];
    }, e;
  }()
), En = (
  /** @class */
  function() {
    function e(A, r) {
      this.context = A, this.options = r;
    }
    return e;
  }()
), qc = 1e4, zc = (
  /** @class */
  function(e) {
    iA(A, e);
    function A(r, t) {
      var B = e.call(this, r, t) || this;
      return B._activeEffects = [], B.canvas = t.canvas ? t.canvas : document.createElement("canvas"), B.ctx = B.canvas.getContext("2d"), t.canvas || (B.canvas.width = Math.floor(t.width * t.scale), B.canvas.height = Math.floor(t.height * t.scale), B.canvas.style.width = t.width + "px", B.canvas.style.height = t.height + "px"), B.fontMetrics = new Zc(document), B.ctx.scale(B.options.scale, B.options.scale), B.ctx.translate(-t.x, -t.y), B.ctx.textBaseline = "bottom", B._activeEffects = [], B.context.logger.debug("Canvas renderer initialized (" + t.width + "x" + t.height + ") with scale " + t.scale), B;
    }
    return A.prototype.applyEffects = function(r) {
      for (var t = this; this._activeEffects.length; )
        this.popEffect();
      r.forEach(function(B) {
        return t.applyEffect(B);
      });
    }, A.prototype.applyEffect = function(r) {
      this.ctx.save(), Rc(r) && (this.ctx.globalAlpha = r.opacity), Oc(r) && (this.ctx.translate(r.offsetX, r.offsetY), this.ctx.transform(r.matrix[0], r.matrix[1], r.matrix[2], r.matrix[3], r.matrix[4], r.matrix[5]), this.ctx.translate(-r.offsetX, -r.offsetY)), fn(r) && (this.path(r.path), this.ctx.clip()), this._activeEffects.push(r);
    }, A.prototype.popEffect = function() {
      this._activeEffects.pop(), this.ctx.restore();
    }, A.prototype.renderStack = function(r) {
      return Y(this, void 0, void 0, function() {
        var t;
        return P(this, function(B) {
          switch (B.label) {
            case 0:
              return t = r.element.container.styles, t.isVisible() ? [4, this.renderStackContent(r)] : [3, 2];
            case 1:
              B.sent(), B.label = 2;
            case 2:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, A.prototype.renderNode = function(r) {
      return Y(this, void 0, void 0, function() {
        return P(this, function(t) {
          switch (t.label) {
            case 0:
              if (G(
                r.container.flags,
                16
                /* DEBUG_RENDER */
              ))
                debugger;
              return r.container.styles.isVisible() ? [4, this.renderNodeBackgroundAndBorders(r)] : [3, 3];
            case 1:
              return t.sent(), [4, this.renderNodeContent(r)];
            case 2:
              t.sent(), t.label = 3;
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, A.prototype.renderTextWithLetterSpacing = function(r, t, B) {
      var n = this;
      if (t === 0)
        this.ctx.fillText(r.text, r.bounds.left, r.bounds.top + B);
      else {
        var s = gr(r.text);
        s.reduce(function(a, i) {
          return n.ctx.fillText(i, a, r.bounds.top + B), a + n.ctx.measureText(i).width;
        }, r.bounds.left);
      }
    }, A.prototype.createFontStyle = function(r) {
      var t = r.fontVariant.filter(function(s) {
        return s === "normal" || s === "small-caps";
      }).join(""), B = tQ(r.fontFamily).join(", "), n = he(r.fontSize) ? "" + r.fontSize.number + r.fontSize.unit : r.fontSize.number + "px";
      return [
        [r.fontStyle, t, r.fontWeight, n, B].join(" "),
        B,
        n
      ];
    }, A.prototype.renderTextNode = function(r, t) {
      return Y(this, void 0, void 0, function() {
        var B, n, s, a, i, o, c, Q, g = this;
        return P(this, function(C) {
          return B = this.createFontStyle(t), n = B[0], s = B[1], a = B[2], this.ctx.font = n, this.ctx.direction = t.direction === 1 ? "rtl" : "ltr", this.ctx.textAlign = "left", this.ctx.textBaseline = "alphabetic", i = this.fontMetrics.getMetrics(s, a), o = i.baseline, c = i.middle, Q = t.paintOrder, r.textBounds.forEach(function(l) {
            Q.forEach(function(u) {
              switch (u) {
                case 0:
                  g.ctx.fillStyle = V(t.color), g.renderTextWithLetterSpacing(l, t.letterSpacing, o);
                  var H = t.textShadow;
                  H.length && l.text.trim().length && (H.slice(0).reverse().forEach(function(h) {
                    g.ctx.shadowColor = V(h.color), g.ctx.shadowOffsetX = h.offsetX.number * g.options.scale, g.ctx.shadowOffsetY = h.offsetY.number * g.options.scale, g.ctx.shadowBlur = h.blur.number, g.renderTextWithLetterSpacing(l, t.letterSpacing, o);
                  }), g.ctx.shadowColor = "", g.ctx.shadowOffsetX = 0, g.ctx.shadowOffsetY = 0, g.ctx.shadowBlur = 0), t.textDecorationLine.length && (g.ctx.fillStyle = V(t.textDecorationColor || t.color), t.textDecorationLine.forEach(function(h) {
                    switch (h) {
                      case 1:
                        g.ctx.fillRect(l.bounds.left, Math.round(l.bounds.top + o), l.bounds.width, 1);
                        break;
                      case 2:
                        g.ctx.fillRect(l.bounds.left, Math.round(l.bounds.top), l.bounds.width, 1);
                        break;
                      case 3:
                        g.ctx.fillRect(l.bounds.left, Math.ceil(l.bounds.top + c), l.bounds.width, 1);
                        break;
                    }
                  }));
                  break;
                case 1:
                  t.webkitTextStrokeWidth && l.text.trim().length && (g.ctx.strokeStyle = V(t.webkitTextStrokeColor), g.ctx.lineWidth = t.webkitTextStrokeWidth, g.ctx.lineJoin = window.chrome ? "miter" : "round", g.ctx.strokeText(l.text, l.bounds.left, l.bounds.top + o)), g.ctx.strokeStyle = "", g.ctx.lineWidth = 0, g.ctx.lineJoin = "miter";
                  break;
              }
            });
          }), [
            2
            /*return*/
          ];
        });
      });
    }, A.prototype.renderReplacedElement = function(r, t, B) {
      if (B && r.intrinsicWidth > 0 && r.intrinsicHeight > 0) {
        var n = rt(r), s = tt(t);
        this.path(s), this.ctx.save(), this.ctx.clip(), this.ctx.drawImage(B, 0, 0, r.intrinsicWidth, r.intrinsicHeight, n.left, n.top, n.width, n.height), this.ctx.restore();
      }
    }, A.prototype.renderNodeContent = function(r) {
      return Y(this, void 0, void 0, function() {
        var t, B, n, s, a, i, F, F, o, c, Q, g, d, C, l, E, u, H, h, F, K, d, E;
        return P(this, function(w) {
          switch (w.label) {
            case 0:
              this.applyEffects(r.getEffects(
                4
                /* CONTENT */
              )), t = r.container, B = r.curves, n = t.styles, s = 0, a = t.textNodes, w.label = 1;
            case 1:
              return s < a.length ? (i = a[s], [4, this.renderTextNode(i, n)]) : [3, 4];
            case 2:
              w.sent(), w.label = 3;
            case 3:
              return s++, [3, 1];
            case 4:
              if (!(t instanceof $B))
                return [3, 8];
              w.label = 5;
            case 5:
              return w.trys.push([5, 7, , 8]), [4, this.context.cache.match(t.src)];
            case 6:
              return F = w.sent(), this.renderReplacedElement(t, B, F), [3, 8];
            case 7:
              return w.sent(), this.context.logger.error("Error loading image " + t.src), [3, 8];
            case 8:
              if (t instanceof An && this.renderReplacedElement(t, B, t.canvas), !(t instanceof en))
                return [3, 12];
              w.label = 9;
            case 9:
              return w.trys.push([9, 11, , 12]), [4, this.context.cache.match(t.svg)];
            case 10:
              return F = w.sent(), this.renderReplacedElement(t, B, F), [3, 12];
            case 11:
              return w.sent(), this.context.logger.error("Error loading svg " + t.svg.substring(0, 255)), [3, 12];
            case 12:
              return t instanceof nn && t.tree ? (o = new A(this.context, {
                scale: this.options.scale,
                backgroundColor: t.backgroundColor,
                x: 0,
                y: 0,
                width: t.width,
                height: t.height
              }), [4, o.render(t.tree)]) : [3, 14];
            case 13:
              c = w.sent(), t.width && t.height && this.ctx.drawImage(c, 0, 0, t.width, t.height, t.bounds.left, t.bounds.top, t.bounds.width, t.bounds.height), w.label = 14;
            case 14:
              if (t instanceof lr && (Q = Math.min(t.bounds.width, t.bounds.height), t.type === ze ? t.checked && (this.ctx.save(), this.path([
                new f(t.bounds.left + Q * 0.39363, t.bounds.top + Q * 0.79),
                new f(t.bounds.left + Q * 0.16, t.bounds.top + Q * 0.5549),
                new f(t.bounds.left + Q * 0.27347, t.bounds.top + Q * 0.44071),
                new f(t.bounds.left + Q * 0.39694, t.bounds.top + Q * 0.5649),
                new f(t.bounds.left + Q * 0.72983, t.bounds.top + Q * 0.23),
                new f(t.bounds.left + Q * 0.84, t.bounds.top + Q * 0.34085),
                new f(t.bounds.left + Q * 0.39363, t.bounds.top + Q * 0.79)
              ]), this.ctx.fillStyle = V(rB), this.ctx.fill(), this.ctx.restore()) : t.type === je && t.checked && (this.ctx.save(), this.ctx.beginPath(), this.ctx.arc(t.bounds.left + Q / 2, t.bounds.top + Q / 2, Q / 4, 0, Math.PI * 2, !0), this.ctx.fillStyle = V(rB), this.ctx.fill(), this.ctx.restore())), jc(t) && t.value.length) {
                switch (g = this.createFontStyle(n), d = g[0], C = g[1], l = this.fontMetrics.getMetrics(d, C).baseline, this.ctx.font = d, this.ctx.fillStyle = V(n.color), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = AQ(t.styles.textAlign), E = rt(t), u = 0, t.styles.textAlign) {
                  case 1:
                    u += E.width / 2;
                    break;
                  case 2:
                    u += E.width;
                    break;
                }
                H = E.add(u, 0, 0, -E.height / 2 + 1), this.ctx.save(), this.path([
                  new f(E.left, E.top),
                  new f(E.left + E.width, E.top),
                  new f(E.left + E.width, E.top + E.height),
                  new f(E.left, E.top + E.height)
                ]), this.ctx.clip(), this.renderTextWithLetterSpacing(new we(t.value, H), n.letterSpacing, l), this.ctx.restore(), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = "left";
              }
              if (!G(
                t.styles.display,
                2048
                /* LIST_ITEM */
              ))
                return [3, 20];
              if (t.styles.listStyleImage === null)
                return [3, 19];
              if (h = t.styles.listStyleImage, h.type !== 0)
                return [3, 18];
              F = void 0, K = h.url, w.label = 15;
            case 15:
              return w.trys.push([15, 17, , 18]), [4, this.context.cache.match(K)];
            case 16:
              return F = w.sent(), this.ctx.drawImage(F, t.bounds.left - (F.width + 10), t.bounds.top), [3, 18];
            case 17:
              return w.sent(), this.context.logger.error("Error loading list-style-image " + K), [3, 18];
            case 18:
              return [3, 20];
            case 19:
              r.listValue && t.styles.listStyleType !== -1 && (d = this.createFontStyle(n)[0], this.ctx.font = d, this.ctx.fillStyle = V(n.color), this.ctx.textBaseline = "middle", this.ctx.textAlign = "right", E = new fA(t.bounds.left, t.bounds.top + S(t.styles.paddingTop, t.bounds.width), t.bounds.width, Vr(n.lineHeight, n.fontSize.number) / 2 + 1), this.renderTextWithLetterSpacing(new we(r.listValue, E), n.letterSpacing, Vr(n.lineHeight, n.fontSize.number) / 2 + 2), this.ctx.textBaseline = "bottom", this.ctx.textAlign = "left"), w.label = 20;
            case 20:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, A.prototype.renderStackContent = function(r) {
      return Y(this, void 0, void 0, function() {
        var t, B, h, n, s, h, a, i, h, o, c, h, Q, g, h, C, l, h, u, H, h;
        return P(this, function(F) {
          switch (F.label) {
            case 0:
              if (G(
                r.element.container.flags,
                16
                /* DEBUG_RENDER */
              ))
                debugger;
              return [4, this.renderNodeBackgroundAndBorders(r.element)];
            case 1:
              F.sent(), t = 0, B = r.negativeZIndex, F.label = 2;
            case 2:
              return t < B.length ? (h = B[t], [4, this.renderStack(h)]) : [3, 5];
            case 3:
              F.sent(), F.label = 4;
            case 4:
              return t++, [3, 2];
            case 5:
              return [4, this.renderNodeContent(r.element)];
            case 6:
              F.sent(), n = 0, s = r.nonInlineLevel, F.label = 7;
            case 7:
              return n < s.length ? (h = s[n], [4, this.renderNode(h)]) : [3, 10];
            case 8:
              F.sent(), F.label = 9;
            case 9:
              return n++, [3, 7];
            case 10:
              a = 0, i = r.nonPositionedFloats, F.label = 11;
            case 11:
              return a < i.length ? (h = i[a], [4, this.renderStack(h)]) : [3, 14];
            case 12:
              F.sent(), F.label = 13;
            case 13:
              return a++, [3, 11];
            case 14:
              o = 0, c = r.nonPositionedInlineLevel, F.label = 15;
            case 15:
              return o < c.length ? (h = c[o], [4, this.renderStack(h)]) : [3, 18];
            case 16:
              F.sent(), F.label = 17;
            case 17:
              return o++, [3, 15];
            case 18:
              Q = 0, g = r.inlineLevel, F.label = 19;
            case 19:
              return Q < g.length ? (h = g[Q], [4, this.renderNode(h)]) : [3, 22];
            case 20:
              F.sent(), F.label = 21;
            case 21:
              return Q++, [3, 19];
            case 22:
              C = 0, l = r.zeroOrAutoZIndexOrTransformedOrOpacity, F.label = 23;
            case 23:
              return C < l.length ? (h = l[C], [4, this.renderStack(h)]) : [3, 26];
            case 24:
              F.sent(), F.label = 25;
            case 25:
              return C++, [3, 23];
            case 26:
              u = 0, H = r.positiveZIndex, F.label = 27;
            case 27:
              return u < H.length ? (h = H[u], [4, this.renderStack(h)]) : [3, 30];
            case 28:
              F.sent(), F.label = 29;
            case 29:
              return u++, [3, 27];
            case 30:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, A.prototype.mask = function(r) {
      this.ctx.beginPath(), this.ctx.moveTo(0, 0), this.ctx.lineTo(this.canvas.width, 0), this.ctx.lineTo(this.canvas.width, this.canvas.height), this.ctx.lineTo(0, this.canvas.height), this.ctx.lineTo(0, 0), this.formatPath(r.slice(0).reverse()), this.ctx.closePath();
    }, A.prototype.path = function(r) {
      this.ctx.beginPath(), this.formatPath(r), this.ctx.closePath();
    }, A.prototype.formatPath = function(r) {
      var t = this;
      r.forEach(function(B, n) {
        var s = rA(B) ? B.start : B;
        n === 0 ? t.ctx.moveTo(s.x, s.y) : t.ctx.lineTo(s.x, s.y), rA(B) && t.ctx.bezierCurveTo(B.startControl.x, B.startControl.y, B.endControl.x, B.endControl.y, B.end.x, B.end.y);
      });
    }, A.prototype.renderRepeat = function(r, t, B, n) {
      this.path(r), this.ctx.fillStyle = t, this.ctx.translate(B, n), this.ctx.fill(), this.ctx.translate(-B, -n);
    }, A.prototype.resizeImage = function(r, t, B) {
      var n;
      if (r.width === t && r.height === B)
        return r;
      var s = (n = this.canvas.ownerDocument) !== null && n !== void 0 ? n : document, a = s.createElement("canvas");
      a.width = Math.max(1, t), a.height = Math.max(1, B);
      var i = a.getContext("2d");
      return i.drawImage(r, 0, 0, r.width, r.height, 0, 0, t, B), a;
    }, A.prototype.renderBackgroundImage = function(r) {
      return Y(this, void 0, void 0, function() {
        var t, B, n, s, a, i;
        return P(this, function(o) {
          switch (o.label) {
            case 0:
              t = r.styles.backgroundImage.length - 1, B = function(c) {
                var Q, g, C, O, q, z, b, N, I, l, O, q, z, b, N, u, H, h, F, K, d, E, w, v, I, p, O, Z, $, b, N, UA, q, z, LA, aA, FA, bA, DA, gA, SA, lA;
                return P(this, function(GA) {
                  switch (GA.label) {
                    case 0:
                      if (c.type !== 0)
                        return [3, 5];
                      Q = void 0, g = c.url, GA.label = 1;
                    case 1:
                      return GA.trys.push([1, 3, , 4]), [4, n.context.cache.match(g)];
                    case 2:
                      return Q = GA.sent(), [3, 4];
                    case 3:
                      return GA.sent(), n.context.logger.error("Error loading background-image " + g), [3, 4];
                    case 4:
                      return Q && (C = Mt(r, t, [
                        Q.width,
                        Q.height,
                        Q.width / Q.height
                      ]), O = C[0], q = C[1], z = C[2], b = C[3], N = C[4], I = n.ctx.createPattern(n.resizeImage(Q, b, N), "repeat"), n.renderRepeat(O, I, q, z)), [3, 6];
                    case 5:
                      Mi(c) ? (l = Mt(r, t, [null, null, null]), O = l[0], q = l[1], z = l[2], b = l[3], N = l[4], u = bi(c.angle, b, N), H = u[0], h = u[1], F = u[2], K = u[3], d = u[4], E = document.createElement("canvas"), E.width = b, E.height = N, w = E.getContext("2d"), v = w.createLinearGradient(h, K, F, d), Rr(c.stops, H).forEach(function(jA) {
                        return v.addColorStop(jA.stop, V(jA.color));
                      }), w.fillStyle = v, w.fillRect(0, 0, b, N), b > 0 && N > 0 && (I = n.ctx.createPattern(E, "repeat"), n.renderRepeat(O, I, q, z))) : Oi(c) && (p = Mt(r, t, [
                        null,
                        null,
                        null
                      ]), O = p[0], Z = p[1], $ = p[2], b = p[3], N = p[4], UA = c.position.length === 0 ? [or] : c.position, q = S(UA[0], b), z = S(UA[UA.length - 1], N), LA = Di(c, q, z, b, N), aA = LA[0], FA = LA[1], aA > 0 && FA > 0 && (bA = n.ctx.createRadialGradient(Z + q, $ + z, 0, Z + q, $ + z, aA), Rr(c.stops, aA * 2).forEach(function(jA) {
                        return bA.addColorStop(jA.stop, V(jA.color));
                      }), n.path(O), n.ctx.fillStyle = bA, aA !== FA ? (DA = r.bounds.left + 0.5 * r.bounds.width, gA = r.bounds.top + 0.5 * r.bounds.height, SA = FA / aA, lA = 1 / SA, n.ctx.save(), n.ctx.translate(DA, gA), n.ctx.transform(1, 0, 0, SA, 0, 0), n.ctx.translate(-DA, -gA), n.ctx.fillRect(Z, lA * ($ - gA) + gA, b, N * lA), n.ctx.restore()) : n.ctx.fill())), GA.label = 6;
                    case 6:
                      return t--, [
                        2
                        /*return*/
                      ];
                  }
                });
              }, n = this, s = 0, a = r.styles.backgroundImage.slice(0).reverse(), o.label = 1;
            case 1:
              return s < a.length ? (i = a[s], [5, B(i)]) : [3, 4];
            case 2:
              o.sent(), o.label = 3;
            case 3:
              return s++, [3, 1];
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, A.prototype.renderSolidBorder = function(r, t, B) {
      return Y(this, void 0, void 0, function() {
        return P(this, function(n) {
          return this.path(uB(B, t)), this.ctx.fillStyle = V(r), this.ctx.fill(), [
            2
            /*return*/
          ];
        });
      });
    }, A.prototype.renderDoubleBorder = function(r, t, B, n) {
      return Y(this, void 0, void 0, function() {
        var s, a;
        return P(this, function(i) {
          switch (i.label) {
            case 0:
              return t < 3 ? [4, this.renderSolidBorder(r, B, n)] : [3, 2];
            case 1:
              return i.sent(), [
                2
                /*return*/
              ];
            case 2:
              return s = Nc(n, B), this.path(s), this.ctx.fillStyle = V(r), this.ctx.fill(), a = Xc(n, B), this.path(a), this.ctx.fill(), [
                2
                /*return*/
              ];
          }
        });
      });
    }, A.prototype.renderNodeBackgroundAndBorders = function(r) {
      return Y(this, void 0, void 0, function() {
        var t, B, n, s, a, i, o, c, Q = this;
        return P(this, function(g) {
          switch (g.label) {
            case 0:
              return this.applyEffects(r.getEffects(
                2
                /* BACKGROUND_BORDERS */
              )), t = r.container.styles, B = !yA(t.backgroundColor) || t.backgroundImage.length, n = [
                { style: t.borderTopStyle, color: t.borderTopColor, width: t.borderTopWidth },
                { style: t.borderRightStyle, color: t.borderRightColor, width: t.borderRightWidth },
                { style: t.borderBottomStyle, color: t.borderBottomColor, width: t.borderBottomWidth },
                { style: t.borderLeftStyle, color: t.borderLeftColor, width: t.borderLeftWidth }
              ], s = $c(YA(t.backgroundClip, 0), r.curves), B || t.boxShadow.length ? (this.ctx.save(), this.path(s), this.ctx.clip(), yA(t.backgroundColor) || (this.ctx.fillStyle = V(t.backgroundColor), this.ctx.fill()), [4, this.renderBackgroundImage(r.container)]) : [3, 2];
            case 1:
              g.sent(), this.ctx.restore(), t.boxShadow.slice(0).reverse().forEach(function(C) {
                Q.ctx.save();
                var l = et(r.curves), u = C.inset ? 0 : qc, H = Gc(l, -u + (C.inset ? 1 : -1) * C.spread.number, (C.inset ? 1 : -1) * C.spread.number, C.spread.number * (C.inset ? -2 : 2), C.spread.number * (C.inset ? -2 : 2));
                C.inset ? (Q.path(l), Q.ctx.clip(), Q.mask(H)) : (Q.mask(l), Q.ctx.clip(), Q.path(H)), Q.ctx.shadowOffsetX = C.offsetX.number + u, Q.ctx.shadowOffsetY = C.offsetY.number, Q.ctx.shadowColor = V(C.color), Q.ctx.shadowBlur = C.blur.number, Q.ctx.fillStyle = C.inset ? V(C.color) : "rgba(0,0,0,1)", Q.ctx.fill(), Q.ctx.restore();
              }), g.label = 2;
            case 2:
              a = 0, i = 0, o = n, g.label = 3;
            case 3:
              return i < o.length ? (c = o[i], c.style !== 0 && !yA(c.color) && c.width > 0 ? c.style !== 2 ? [3, 5] : [4, this.renderDashedDottedBorder(
                c.color,
                c.width,
                a,
                r.curves,
                2
                /* DASHED */
              )] : [3, 11]) : [3, 13];
            case 4:
              return g.sent(), [3, 11];
            case 5:
              return c.style !== 3 ? [3, 7] : [4, this.renderDashedDottedBorder(
                c.color,
                c.width,
                a,
                r.curves,
                3
                /* DOTTED */
              )];
            case 6:
              return g.sent(), [3, 11];
            case 7:
              return c.style !== 4 ? [3, 9] : [4, this.renderDoubleBorder(c.color, c.width, a, r.curves)];
            case 8:
              return g.sent(), [3, 11];
            case 9:
              return [4, this.renderSolidBorder(c.color, a, r.curves)];
            case 10:
              g.sent(), g.label = 11;
            case 11:
              a++, g.label = 12;
            case 12:
              return i++, [3, 3];
            case 13:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, A.prototype.renderDashedDottedBorder = function(r, t, B, n, s) {
      return Y(this, void 0, void 0, function() {
        var a, i, o, c, Q, g, C, l, u, H, h, F, K, d, E, w, E, w;
        return P(this, function(v) {
          return this.ctx.save(), a = _c(n, B), i = uB(n, B), s === 2 && (this.path(i), this.ctx.clip()), rA(i[0]) ? (o = i[0].start.x, c = i[0].start.y) : (o = i[0].x, c = i[0].y), rA(i[1]) ? (Q = i[1].end.x, g = i[1].end.y) : (Q = i[1].x, g = i[1].y), B === 0 || B === 2 ? C = Math.abs(o - Q) : C = Math.abs(c - g), this.ctx.beginPath(), s === 3 ? this.formatPath(a) : this.formatPath(i.slice(0, 2)), l = t < 3 ? t * 3 : t * 2, u = t < 3 ? t * 2 : t, s === 3 && (l = t, u = t), H = !0, C <= l * 2 ? H = !1 : C <= l * 2 + u ? (h = C / (2 * l + u), l *= h, u *= h) : (F = Math.floor((C + u) / (l + u)), K = (C - F * l) / (F - 1), d = (C - (F + 1) * l) / F, u = d <= 0 || Math.abs(u - K) < Math.abs(u - d) ? K : d), H && (s === 3 ? this.ctx.setLineDash([0, l + u]) : this.ctx.setLineDash([l, u])), s === 3 ? (this.ctx.lineCap = "round", this.ctx.lineWidth = t) : this.ctx.lineWidth = t * 2 + 1.1, this.ctx.strokeStyle = V(r), this.ctx.stroke(), this.ctx.setLineDash([]), s === 2 && (rA(i[0]) && (E = i[3], w = i[0], this.ctx.beginPath(), this.formatPath([new f(E.end.x, E.end.y), new f(w.start.x, w.start.y)]), this.ctx.stroke()), rA(i[1]) && (E = i[1], w = i[2], this.ctx.beginPath(), this.formatPath([new f(E.end.x, E.end.y), new f(w.start.x, w.start.y)]), this.ctx.stroke())), this.ctx.restore(), [
            2
            /*return*/
          ];
        });
      });
    }, A.prototype.render = function(r) {
      return Y(this, void 0, void 0, function() {
        var t;
        return P(this, function(B) {
          switch (B.label) {
            case 0:
              return this.options.backgroundColor && (this.ctx.fillStyle = V(this.options.backgroundColor), this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height)), t = Vc(r), [4, this.renderStack(t)];
            case 1:
              return B.sent(), this.applyEffects([]), [2, this.canvas];
          }
        });
      });
    }, A;
  }(En)
), jc = function(e) {
  return e instanceof Bn || e instanceof rn ? !0 : e instanceof lr && e.type !== je && e.type !== ze;
}, $c = function(e, A) {
  switch (e) {
    case 0:
      return et(A);
    case 2:
      return xc(A);
    case 1:
    default:
      return tt(A);
  }
}, AQ = function(e) {
  switch (e) {
    case 1:
      return "center";
    case 2:
      return "right";
    case 0:
    default:
      return "left";
  }
}, eQ = ["-apple-system", "system-ui"], tQ = function(e) {
  return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ? e.filter(function(A) {
    return eQ.indexOf(A) === -1;
  }) : e;
}, rQ = (
  /** @class */
  function(e) {
    iA(A, e);
    function A(r, t) {
      var B = e.call(this, r, t) || this;
      return B.canvas = t.canvas ? t.canvas : document.createElement("canvas"), B.ctx = B.canvas.getContext("2d"), B.options = t, B.canvas.width = Math.floor(t.width * t.scale), B.canvas.height = Math.floor(t.height * t.scale), B.canvas.style.width = t.width + "px", B.canvas.style.height = t.height + "px", B.ctx.scale(B.options.scale, B.options.scale), B.ctx.translate(-t.x, -t.y), B.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized (" + t.width + "x" + t.height + " at " + t.x + "," + t.y + ") with scale " + t.scale), B;
    }
    return A.prototype.render = function(r) {
      return Y(this, void 0, void 0, function() {
        var t, B;
        return P(this, function(n) {
          switch (n.label) {
            case 0:
              return t = er(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, r), [4, BQ(t)];
            case 1:
              return B = n.sent(), this.options.backgroundColor && (this.ctx.fillStyle = V(this.options.backgroundColor), this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)), this.ctx.drawImage(B, -this.options.x * this.options.scale, -this.options.y * this.options.scale), [2, this.canvas];
          }
        });
      });
    }, A;
  }(En)
), BQ = function(e) {
  return new Promise(function(A, r) {
    var t = new Image();
    t.onload = function() {
      A(t);
    }, t.onerror = r, t.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(e));
  });
}, nQ = (
  /** @class */
  function() {
    function e(A) {
      var r = A.id, t = A.enabled;
      this.id = r, this.enabled = t, this.start = Date.now();
    }
    return e.prototype.debug = function() {
      for (var A = [], r = 0; r < arguments.length; r++)
        A[r] = arguments[r];
      this.enabled && (typeof window < "u" && window.console && typeof console.debug == "function" ? console.debug.apply(console, de([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A));
    }, e.prototype.getTime = function() {
      return Date.now() - this.start;
    }, e.prototype.info = function() {
      for (var A = [], r = 0; r < arguments.length; r++)
        A[r] = arguments[r];
      this.enabled && typeof window < "u" && window.console && typeof console.info == "function" && console.info.apply(console, de([this.id, this.getTime() + "ms"], A));
    }, e.prototype.warn = function() {
      for (var A = [], r = 0; r < arguments.length; r++)
        A[r] = arguments[r];
      this.enabled && (typeof window < "u" && window.console && typeof console.warn == "function" ? console.warn.apply(console, de([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A));
    }, e.prototype.error = function() {
      for (var A = [], r = 0; r < arguments.length; r++)
        A[r] = arguments[r];
      this.enabled && (typeof window < "u" && window.console && typeof console.error == "function" ? console.error.apply(console, de([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A));
    }, e.instances = {}, e;
  }()
), sQ = (
  /** @class */
  function() {
    function e(A, r) {
      var t;
      this.windowBounds = r, this.instanceName = "#" + e.instanceCount++, this.logger = new nQ({ id: this.instanceName, enabled: A.logging }), this.cache = (t = A.cache) !== null && t !== void 0 ? t : new Ic(this, A);
    }
    return e.instanceCount = 1, e;
  }()
), iQ = function(e, A) {
  return A === void 0 && (A = {}), aQ(e, A);
};
typeof window < "u" && Cn.setContext(window);
var aQ = function(e, A) {
  return Y(void 0, void 0, void 0, function() {
    var r, t, B, n, s, a, i, o, c, Q, g, C, l, u, H, h, F, K, d, E, v, w, v, I, p, O, Z, $, b, N, UA, q, z, LA, aA, FA, bA, DA, gA, SA;
    return P(this, function(lA) {
      switch (lA.label) {
        case 0:
          if (!e || typeof e != "object")
            return [2, Promise.reject("Invalid element provided as first argument")];
          if (r = e.ownerDocument, !r)
            throw new Error("Element is not attached to a Document");
          if (t = r.defaultView, !t)
            throw new Error("Document is not attached to a Window");
          return B = {
            allowTaint: (I = A.allowTaint) !== null && I !== void 0 ? I : !1,
            imageTimeout: (p = A.imageTimeout) !== null && p !== void 0 ? p : 15e3,
            proxy: A.proxy,
            useCORS: (O = A.useCORS) !== null && O !== void 0 ? O : !1
          }, n = Vt({ logging: (Z = A.logging) !== null && Z !== void 0 ? Z : !0, cache: A.cache }, B), s = {
            windowWidth: ($ = A.windowWidth) !== null && $ !== void 0 ? $ : t.innerWidth,
            windowHeight: (b = A.windowHeight) !== null && b !== void 0 ? b : t.innerHeight,
            scrollX: (N = A.scrollX) !== null && N !== void 0 ? N : t.pageXOffset,
            scrollY: (UA = A.scrollY) !== null && UA !== void 0 ? UA : t.pageYOffset
          }, a = new fA(s.scrollX, s.scrollY, s.windowWidth, s.windowHeight), i = new sQ(n, a), o = (q = A.foreignObjectRendering) !== null && q !== void 0 ? q : !1, c = {
            allowTaint: (z = A.allowTaint) !== null && z !== void 0 ? z : !1,
            onclone: A.onclone,
            ignoreElements: A.ignoreElements,
            inlineImages: o,
            copyStyles: o
          }, i.logger.debug("Starting document clone with size " + a.width + "x" + a.height + " scrolled to " + -a.left + "," + -a.top), Q = new gB(i, e, c), g = Q.clonedReferenceElement, g ? [4, Q.toIFrame(r, a)] : [2, Promise.reject("Unable to find element in cloned iframe")];
        case 1:
          return C = lA.sent(), l = wr(g) || oc(g) ? Rn(g.ownerDocument) : st(i, g), u = l.width, H = l.height, h = l.left, F = l.top, K = oQ(i, g, A.backgroundColor), d = {
            canvas: A.canvas,
            backgroundColor: K,
            scale: (aA = (LA = A.scale) !== null && LA !== void 0 ? LA : t.devicePixelRatio) !== null && aA !== void 0 ? aA : 1,
            x: ((FA = A.x) !== null && FA !== void 0 ? FA : 0) + h,
            y: ((bA = A.y) !== null && bA !== void 0 ? bA : 0) + F,
            width: (DA = A.width) !== null && DA !== void 0 ? DA : Math.ceil(u),
            height: (gA = A.height) !== null && gA !== void 0 ? gA : Math.ceil(H)
          }, o ? (i.logger.debug("Document cloned, using foreign object rendering"), v = new rQ(i, d), [4, v.render(g)]) : [3, 3];
        case 2:
          return E = lA.sent(), [3, 5];
        case 3:
          return i.logger.debug("Document cloned, element located at " + h + "," + F + " with size " + u + "x" + H + " using computed rendering"), i.logger.debug("Starting DOM parsing"), w = an(i, g), K === w.styles.backgroundColor && (w.styles.backgroundColor = CA.TRANSPARENT), i.logger.debug("Starting renderer for element at " + d.x + "," + d.y + " with size " + d.width + "x" + d.height), v = new zc(i, d), [4, v.render(w)];
        case 4:
          E = lA.sent(), lA.label = 5;
        case 5:
          return (!((SA = A.removeContainer) !== null && SA !== void 0) || SA) && (gB.destroy(C) || i.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")), i.logger.debug("Finished rendering"), [2, E];
      }
    });
  });
}, oQ = function(e, A, r) {
  var t = A.ownerDocument, B = t.documentElement ? ge(e, getComputedStyle(t.documentElement).backgroundColor) : CA.TRANSPARENT, n = t.body ? ge(e, getComputedStyle(t.body).backgroundColor) : CA.TRANSPARENT, s = typeof r == "string" ? ge(e, r) : r === null ? CA.TRANSPARENT : 4294967295;
  return A === t.documentElement ? yA(B) ? yA(n) ? s : n : B : s;
};
const cQ = Bt({
  name: "ScreenshotUploader",
  setup() {
    const e = eA([]), A = eA(!1), r = eA(!1), t = eA(!1), B = eA(0), n = eA(0), s = eA(0), a = eA(0), i = eA(null), o = Hn(() => ({
      left: `${Math.min(B.value, s.value)}px`,
      top: `${Math.min(n.value, a.value)}px`,
      width: `${Math.abs(s.value - B.value)}px`,
      height: `${Math.abs(a.value - n.value)}px`
    })), c = () => {
      A.value = !0, r.value = !1, B.value = 0, n.value = 0, s.value = 0, a.value = 0, document.addEventListener("mousedown", Q);
    }, Q = (d) => {
      A.value && (r.value = !0, B.value = d.clientX, n.value = d.clientY, document.addEventListener("mousemove", g), document.addEventListener("mouseup", C));
    }, g = (d) => {
      r.value && (s.value = d.clientX, a.value = d.clientY);
    }, C = () => {
      r.value && (r.value = !1, A.value = !1, document.removeEventListener("mousemove", g), document.removeEventListener("mouseup", C), l({
        x: Math.min(B.value, s.value),
        y: Math.min(n.value, a.value),
        width: Math.abs(s.value - B.value),
        height: Math.abs(a.value - n.value)
      }));
    }, l = async (d) => {
      try {
        const E = document.body, v = (await iQ(E, {
          x: d.x,
          y: d.y,
          width: d.width,
          height: d.height,
          useCORS: !0
        })).toDataURL("image/png");
        e.value.push({ preview: v, file: null }), console.log("Screenshot captured successfully.");
      } catch (E) {
        console.error("Error capturing screenshot:", E);
      }
    }, u = () => {
      var d;
      (d = i.value) == null || d.click();
    }, H = (d) => {
      const E = d.target;
      E.files && F(E.files);
    }, h = (d) => {
      var w;
      t.value = !1;
      const E = (w = d.dataTransfer) == null ? void 0 : w.files;
      E && F(E);
    }, F = (d) => {
      for (const E of Array.from(d)) {
        const w = new FileReader();
        w.onload = (v) => {
          var I;
          (I = v.target) != null && I.result && e.value.push({ preview: v.target.result, file: E });
        }, w.readAsDataURL(E);
      }
    };
    return {
      screenshots: e,
      isSelecting: A,
      dragging: r,
      isDragging: t,
      selectionBoxStyle: o,
      startSelecting: c,
      triggerFileInput: u,
      handleFileUpload: H,
      handleDrop: h,
      removeScreenshot: (d) => {
        e.value.splice(d, 1);
      },
      startDrag: Q,
      onDrag: g,
      endDrag: C
    };
  }
});
const QQ = { class: "screenshot-uploader" }, gQ = { key: 0 }, lQ = { key: 1 }, wQ = {
  key: 1,
  class: "screenshot-preview"
}, uQ = { class: "screenshots" }, CQ = ["src"], fQ = ["onClick"];
function UQ(e, A, r, t, B, n) {
  return J(), W("div", QQ, [
    A[12] || (A[12] = y("h3", null, "Upload Screenshots", -1)),
    y("button", {
      type: "button",
      onClick: A[0] || (A[0] = (...s) => e.startSelecting && e.startSelecting(...s)),
      class: "capture-button"
    }, "Capture Screenshot"),
    y("div", {
      class: "drop-zone",
      onDragover: A[2] || (A[2] = re(() => {
      }, ["prevent"])),
      onDragenter: A[3] || (A[3] = re((s) => e.isDragging = !0, ["prevent"])),
      onDragleave: A[4] || (A[4] = re((s) => e.isDragging = !1, ["prevent"])),
      onDrop: A[5] || (A[5] = re((...s) => e.handleDrop && e.handleDrop(...s), ["prevent"]))
    }, [
      e.isDragging ? pA("", !0) : (J(), W("p", gQ, "Drag and drop files here or")),
      e.isDragging ? (J(), W("p", lQ, "Release to upload files")) : pA("", !0),
      y("button", {
        type: "button",
        onClick: A[1] || (A[1] = (...s) => e.triggerFileInput && e.triggerFileInput(...s)),
        class: "upload-button"
      }, "Upload Screenshots")
    ], 32),
    y("input", {
      type: "file",
      ref: "fileInput",
      multiple: "",
      accept: "image/*",
      onChange: A[6] || (A[6] = (...s) => e.handleFileUpload && e.handleFileUpload(...s)),
      style: { display: "none" }
    }, null, 544),
    e.isSelecting ? (J(), W("div", {
      key: 0,
      class: "selection-overlay",
      onMousedown: A[7] || (A[7] = (...s) => e.startDrag && e.startDrag(...s)),
      onMousemove: A[8] || (A[8] = (...s) => e.onDrag && e.onDrag(...s)),
      onMouseup: A[9] || (A[9] = (...s) => e.endDrag && e.endDrag(...s))
    }, [
      e.dragging ? (J(), W("div", {
        key: 0,
        class: "selection-box",
        style: vn(e.selectionBoxStyle)
      }, null, 4)) : pA("", !0)
    ], 32)) : pA("", !0),
    e.screenshots.length ? (J(), W("div", wQ, [
      A[11] || (A[11] = y("h4", null, "Preview:", -1)),
      y("div", uQ, [
        (J(!0), W(fB, null, UB(e.screenshots, (s, a) => (J(), W("div", {
          key: a,
          class: "screenshot-item"
        }, [
          y("img", {
            src: s.preview,
            alt: "Screenshot Preview"
          }, null, 8, CQ),
          y("button", {
            onClick: (i) => e.removeScreenshot(a),
            class: "remove-button"
          }, A[10] || (A[10] = [
            y("svg", {
              fill: "#ffffff",
              height: "16px",
              width: "16px",
              version: "1.1",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 330 330"
            }, [
              y("g", null, [
                y("g", null, [
                  y("path", { d: "M240,121.076H30V275c0,8.284,6.716,15,15,15h60h37.596c19.246,24.348,49.031,40,82.404,40c57.897,0,105-47.103,105-105C330,172.195,290.816,128.377,240,121.076z M225,300c-41.355,0-75-33.645-75-75s33.645-75,75-75s75,33.645,75,75S266.355,300,225,300z" })
                ]),
                y("g", null, [
                  y("path", { d: "M240,90h15c8.284,0,15-6.716,15-15s-6.716-15-15-15h-30h-15V15c0-8.284-6.716-15-15-15H75c-8.284,0-15,6.716-15,15v45H45H15C6.716,60,0,66.716,0,75s6.716,15,15,15h15H240z M90,30h90v30h-15h-60H90V30z" })
                ]),
                y("g", null, [
                  y("path", { d: "M256.819,193.181c-5.857-5.858-15.355-5.858-21.213,0L225,203.787l-10.606-10.606c-5.857-5.858-15.355-5.858-21.213,0c-5.858,5.858-5.858,15.355,0,21.213L203.787,225l-10.606,10.606c-5.858,5.858-5.858,15.355,0,21.213c2.929,2.929,6.768,4.394,10.606,4.394c3.839,0,7.678-1.465,10.607-4.394L225,246.213l10.606,10.606c2.929,2.929,6.768,4.394,10.607,4.394c3.839,0,7.678-1.465,10.606-4.394c5.858-5.858,5.858-15.355,0-21.213L246.213,225l10.606-10.606C262.678,208.535,262.678,199.039,256.819,193.181z" })
                ])
              ])
            ], -1)
          ]), 8, fQ)
        ]))), 128))
      ])
    ])) : pA("", !0)
  ]);
}
const FQ = /* @__PURE__ */ nt(cQ, [["render", UQ], ["__scopeId", "data-v-c1439085"]]), hQ = Bt({
  components: { ElementSelector: On, ScreenshotUploader: FQ },
  setup() {
    const e = eA(!1), A = eA({
      title: "",
      description: "",
      selectedElements: [],
      screenshots: []
    }), r = () => {
      e.value = !1;
    }, t = () => {
      e.value = !0;
    }, B = (i) => {
      A.value.selectedElements = i;
    }, n = (i) => {
      A.value.screenshots = i;
    }, s = () => {
      const i = window.location.href, c = new URLSearchParams(window.location.search).get("idSite");
      A.value.metadata = {
        siteUrl: i,
        idsite: c || "not provided"
      };
    };
    return {
      isVisible: e,
      form: A,
      closeModal: r,
      openModal: t,
      handleElementSelection: B,
      handleScreenshots: n,
      submitBugReport: async () => {
        s();
        try {
          if ((await fetch("https://webhook.site/a5c9a10f-95d1-47f9-bd99-836dae687ec5", {
            method: "POST",
            mode: "no-cors",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(A.value)
          })).ok)
            alert("Bug report submitted successfully!"), r();
          else
            throw new Error("Network response was not ok.");
        } catch (i) {
          alert("An error occurred while submitting the bug report."), console.error("Fetch error:", i);
        }
      }
    };
  }
});
const dQ = {
  key: 0,
  class: "bug-report-modal"
}, EQ = { class: "modal-header" }, pQ = { class: "modal-content" };
function HQ(e, A, r, t, B, n) {
  const s = Ot("ElementSelector"), a = Ot("ScreenshotUploader");
  return J(), In(mn, { name: "slide-in-left" }, {
    default: yn(() => [
      e.isVisible ? (J(), W("div", dQ, [
        y("div", EQ, [
          A[4] || (A[4] = y("h2", null, "Report a Bug", -1)),
          y("button", {
            class: "close-button",
            onClick: A[0] || (A[0] = (...i) => e.closeModal && e.closeModal(...i))
          }, "X")
        ]),
        y("div", pQ, [
          y("form", {
            onSubmit: A[3] || (A[3] = re((...i) => e.submitBugReport && e.submitBugReport(...i), ["prevent"]))
          }, [
            A[5] || (A[5] = y("label", { for: "title" }, "Title:", -1)),
            Cr(y("input", {
              "onUpdate:modelValue": A[1] || (A[1] = (i) => e.form.title = i),
              type: "text",
              id: "title",
              placeholder: "Enter the bug title",
              required: ""
            }, null, 512), [
              [fr, e.form.title]
            ]),
            A[6] || (A[6] = y("label", { for: "description" }, "Description:", -1)),
            Cr(y("textarea", {
              "onUpdate:modelValue": A[2] || (A[2] = (i) => e.form.description = i),
              id: "description",
              placeholder: "Describe the bug in detail",
              required: ""
            }, null, 512), [
              [fr, e.form.description]
            ]),
            Rt(s, { onElementsSelected: e.handleElementSelection }, null, 8, ["onElementsSelected"]),
            Rt(a, { onScreenshotsUploaded: e.handleScreenshots }, null, 8, ["onScreenshotsUploaded"]),
            A[7] || (A[7] = y("button", {
              type: "submit",
              class: "submit-button"
            }, "Submit Bug Report", -1))
          ], 32)
        ])
      ])) : pA("", !0)
    ]),
    _: 1
  });
}
const vQ = /* @__PURE__ */ nt(hQ, [["render", HQ], ["__scopeId", "data-v-e6831c15"]]), IQ = Bt({
  name: "BugReportButton",
  components: {
    BugReportModal: vQ
  },
  setup() {
    const e = eA(null);
    return {
      modalRef: e,
      openBugReportModal: () => {
        var r;
        (r = e.value) == null || r.openModal();
      }
    };
  }
});
function mQ(e, A, r, t, B, n) {
  const s = Ot("BugReportModal");
  return J(), W("div", null, [
    y("button", {
      onClick: A[0] || (A[0] = (...a) => e.openBugReportModal && e.openBugReportModal(...a)),
      class: "bug-report-btn"
    }, A[1] || (A[1] = [
      Kn(`<svg class="bug-icon" fill="#000000" width="15px" height="15px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 432.458 432.458" xml:space="preserve" data-v-2cbc94c8><g id="XMLID_311_" data-v-2cbc94c8><path id="XMLID_835_" d="M322.743,106.629c-2.778-4.518-5.731-8.889-8.873-13.08c-25.777-34.375-60.453-53.307-97.641-53.307\r
            s-71.864,18.932-97.641,53.307c-3.143,4.191-6.095,8.562-8.874,13.08c20.061,31.973,60.275,53.85,106.514,53.85\r
            C262.469,160.479,302.683,138.602,322.743,106.629z" data-v-2cbc94c8></path><path id="XMLID_1453_" d="M417.458,201.755h-65.606c-0.808-12.567-2.625-24.87-5.406-36.742l51.575-51.576\r
            c5.858-5.858,5.858-15.355,0-21.213c-5.857-5.858-15.355-5.858-21.213,0l-25.966,25.966c-7.348,12.845-17.202,24.674-29.365,35.028\r
            c-24.637,20.972-56.246,33.718-90.248,36.621v202.376c31.443-4.39,60.365-22.55,82.641-52.255\r
            c3.907-5.21,7.536-10.687,10.881-16.395l52.058,52.058c2.929,2.929,6.768,4.393,10.607,4.393c3.838,0,7.678-1.465,10.606-4.393\r
            c5.858-5.858,5.858-15.355,0-21.213l-59.579-59.58c7.427-19.594,11.986-40.927,13.41-63.076h65.606c8.284,0,15-6.716,15-15\r
            C432.458,208.471,425.742,201.755,417.458,201.755z" data-v-2cbc94c8></path><path id="XMLID_1457_" d="M201.23,189.84c-34.003-2.903-65.612-15.649-90.249-36.621c-12.163-10.354-22.017-22.183-29.365-35.028\r
            L55.65,92.224c-5.858-5.858-15.356-5.858-21.213,0c-5.858,5.858-5.858,15.355,0,21.213l51.575,51.575\r
            c-2.78,11.873-4.598,24.175-5.406,36.742H15c-8.284,0-15,6.716-15,15c0,8.284,6.716,15,15,15h65.606\r
            c1.424,22.149,5.983,43.482,13.41,63.076l-59.579,59.579c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.858,15.355,5.858,21.213,0\r
            l52.058-52.058c3.345,5.708,6.974,11.185,10.881,16.395c22.274,29.705,51.197,47.866,82.641,52.255V189.84z" data-v-2cbc94c8></path></g></svg> Report Bug `, 2)
    ])),
    Rt(s, { ref: "modalRef" }, null, 512)
  ]);
}
const KQ = /* @__PURE__ */ nt(IQ, [["render", mQ], ["__scopeId", "data-v-2cbc94c8"]]);
export {
  KQ as BugReportButton
};
