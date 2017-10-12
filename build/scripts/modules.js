!function (t, e) {
	function n(t) {
		var e = t.length, n = ue.type(t);
		return ue.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === n || "function" !== n && (0 === e || "number" == typeof e && e > 0 && e - 1 in t)
	}

	function i(t) {
		var e = Te[t] = {};
		return ue.each(t.match(he) || [], function (t, n) {
			e[n] = !0
		}), e
	}

	function s(t, n, i, s) {
		if (ue.acceptData(t)) {
			var o, r, a = ue.expando, l = t.nodeType, c = l ? ue.cache : t, u = l ? t[a] : t[a] && a;
			if (u && c[u] && (s || c[u].data) || i !== e || "string" != typeof n)return u || (u = l ? t[a] = ee.pop() || ue.guid++ : a), c[u] || (c[u] = l ? {} : {toJSON: ue.noop}), ("object" == typeof n || "function" == typeof n) && (s ? c[u] = ue.extend(c[u], n) : c[u].data = ue.extend(c[u].data, n)), r = c[u], s || (r.data || (r.data = {}), r = r.data), i !== e && (r[ue.camelCase(n)] = i), "string" == typeof n ? (o = r[n], null == o && (o = r[ue.camelCase(n)])) : o = r, o
		}
	}

	function o(t, e, n) {
		if (ue.acceptData(t)) {
			var i, s, o = t.nodeType, r = o ? ue.cache : t, l = o ? t[ue.expando] : ue.expando;
			if (r[l]) {
				if (e && (i = n ? r[l] : r[l].data)) {
					ue.isArray(e) ? e = e.concat(ue.map(e, ue.camelCase)) : e in i ? e = [e] : (e = ue.camelCase(e), e = e in i ? [e] : e.split(" ")), s = e.length;
					for (; s--;)delete i[e[s]];
					if (n ? !a(i) : !ue.isEmptyObject(i))return
				}
				(n || (delete r[l].data, a(r[l]))) && (o ? ue.cleanData([t], !0) : ue.support.deleteExpando || r != r.window ? delete r[l] : r[l] = null)
			}
		}
	}

	function r(t, n, i) {
		if (i === e && 1 === t.nodeType) {
			var s = "data-" + n.replace(De, "-$1").toLowerCase();
			if (i = t.getAttribute(s), "string" == typeof i) {
				try {
					i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null : +i + "" === i ? +i : Se.test(i) ? ue.parseJSON(i) : i
				} catch (o) {
				}
				ue.data(t, n, i)
			} else i = e
		}
		return i
	}

	function a(t) {
		var e;
		for (e in t)if (("data" !== e || !ue.isEmptyObject(t[e])) && "toJSON" !== e)return !1;
		return !0
	}

	function l() {
		return !0
	}

	function c() {
		return !1
	}

	function u() {
		try {
			return Q.activeElement
		} catch (t) {
		}
	}

	function d(t, e) {
		do t = t[e]; while (t && 1 !== t.nodeType);
		return t
	}

	function h(t, e, n) {
		if (ue.isFunction(e))return ue.grep(t, function (t, i) {
			return !!e.call(t, i, t) !== n
		});
		if (e.nodeType)return ue.grep(t, function (t) {
			return t === e !== n
		});
		if ("string" == typeof e) {
			if (Ye.test(e))return ue.filter(e, t, n);
			e = ue.filter(e, t)
		}
		return ue.grep(t, function (t) {
			return ue.inArray(t, e) >= 0 !== n
		})
	}

	function p(t) {
		var e = Ue.split("|"), n = t.createDocumentFragment();
		if (n.createElement)for (; e.length;)n.createElement(e.pop());
		return n
	}

	function f(t, e) {
		return ue.nodeName(t, "table") && ue.nodeName(1 === e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
	}

	function g(t) {
		return t.type = (null !== ue.find.attr(t, "type")) + "/" + t.type, t
	}

	function m(t) {
		var e = on.exec(t.type);
		return e ? t.type = e[1] : t.removeAttribute("type"), t
	}

	function y(t, e) {
		for (var n, i = 0; null != (n = t[i]); i++)ue._data(n, "globalEval", !e || ue._data(e[i], "globalEval"))
	}

	function v(t, e) {
		if (1 === e.nodeType && ue.hasData(t)) {
			var n, i, s, o = ue._data(t), r = ue._data(e, o), a = o.events;
			if (a) {
				delete r.handle, r.events = {};
				for (n in a)for (i = 0, s = a[n].length; s > i; i++)ue.event.add(e, n, a[n][i])
			}
			r.data && (r.data = ue.extend({}, r.data))
		}
	}

	function b(t, e) {
		var n, i, s;
		if (1 === e.nodeType) {
			if (n = e.nodeName.toLowerCase(), !ue.support.noCloneEvent && e[ue.expando]) {
				s = ue._data(e);
				for (i in s.events)ue.removeEvent(e, i, s.handle);
				e.removeAttribute(ue.expando)
			}
			"script" === n && e.text !== t.text ? (g(e).text = t.text, m(e)) : "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML), ue.support.html5Clone && t.innerHTML && !ue.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && en.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === n ? e.defaultSelected = e.selected = t.defaultSelected : ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue)
		}
	}

	function _(t, n) {
		var i, s, o = 0,
			r = typeof t.getElementsByTagName !== G ? t.getElementsByTagName(n || "*") : typeof t.querySelectorAll !== G ? t.querySelectorAll(n || "*") : e;
		if (!r)for (r = [], i = t.childNodes || t; null != (s = i[o]); o++)!n || ue.nodeName(s, n) ? r.push(s) : ue.merge(r, _(s, n));
		return n === e || n && ue.nodeName(t, n) ? ue.merge([t], r) : r
	}

	function w(t) {
		en.test(t.type) && (t.defaultChecked = t.checked)
	}

	function x(t, e) {
		if (e in t)return e;
		for (var n = e.charAt(0).toUpperCase() + e.slice(1), i = e, s = Tn.length; s--;)if (e = Tn[s] + n, e in t)return e;
		return i
	}

	function C(t, e) {
		return t = e || t, "none" === ue.css(t, "display") || !ue.contains(t.ownerDocument, t)
	}

	function k(t, e) {
		for (var n, i, s, o = [], r = 0, a = t.length; a > r; r++)i = t[r], i.style && (o[r] = ue._data(i, "olddisplay"), n = i.style.display, e ? (o[r] || "none" !== n || (i.style.display = ""), "" === i.style.display && C(i) && (o[r] = ue._data(i, "olddisplay", E(i.nodeName)))) : o[r] || (s = C(i), (n && "none" !== n || !s) && ue._data(i, "olddisplay", s ? n : ue.css(i, "display"))));
		for (r = 0; a > r; r++)i = t[r], i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? o[r] || "" : "none"));
		return t
	}

	function T(t, e, n) {
		var i = vn.exec(e);
		return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
	}

	function S(t, e, n, i, s) {
		for (var o = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, r = 0; 4 > o; o += 2)"margin" === n && (r += ue.css(t, n + kn[o], !0, s)), i ? ("content" === n && (r -= ue.css(t, "padding" + kn[o], !0, s)), "margin" !== n && (r -= ue.css(t, "border" + kn[o] + "Width", !0, s))) : (r += ue.css(t, "padding" + kn[o], !0, s), "padding" !== n && (r += ue.css(t, "border" + kn[o] + "Width", !0, s)));
		return r
	}

	function D(t, e, n) {
		var i = !0, s = "width" === e ? t.offsetWidth : t.offsetHeight, o = dn(t),
			r = ue.support.boxSizing && "border-box" === ue.css(t, "boxSizing", !1, o);
		if (0 >= s || null == s) {
			if (s = hn(t, e, o), (0 > s || null == s) && (s = t.style[e]), bn.test(s))return s;
			i = r && (ue.support.boxSizingReliable || s === t.style[e]), s = parseFloat(s) || 0
		}
		return s + S(t, e, n || (r ? "border" : "content"), i, o) + "px"
	}

	function E(t) {
		var e = Q, n = wn[t];
		return n || (n = N(t, e), "none" !== n && n || (un = (un || ue("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(e.documentElement), e = (un[0].contentWindow || un[0].contentDocument).document, e.write("<!doctype html><html><body>"), e.close(), n = N(t, e), un.detach()), wn[t] = n), n
	}

	function N(t, e) {
		var n = ue(e.createElement(t)).appendTo(e.body), i = ue.css(n[0], "display");
		return n.remove(), i
	}

	function A(t, e, n, i) {
		var s;
		if (ue.isArray(e)) ue.each(e, function (e, s) {
			n || Dn.test(t) ? i(t, s) : A(t + "[" + ("object" == typeof s ? e : "") + "]", s, n, i)
		}); else if (n || "object" !== ue.type(e)) i(t, e); else for (s in e)A(t + "[" + s + "]", e[s], n, i)
	}

	function M(t) {
		return function (e, n) {
			"string" != typeof e && (n = e, e = "*");
			var i, s = 0, o = e.toLowerCase().match(he) || [];
			if (ue.isFunction(n))for (; i = o[s++];)"+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
		}
	}

	function P(t, e, n, i) {
		function s(a) {
			var l;
			return o[a] = !0, ue.each(t[a] || [], function (t, a) {
				var c = a(e, n, i);
				return "string" != typeof c || r || o[c] ? r ? !(l = c) : void 0 : (e.dataTypes.unshift(c), s(c), !1)
			}), l
		}

		var o = {}, r = t === zn;
		return s(e.dataTypes[0]) || !o["*"] && s("*")
	}

	function I(t, n) {
		var i, s, o = ue.ajaxSettings.flatOptions || {};
		for (s in n)n[s] !== e && ((o[s] ? t : i || (i = {}))[s] = n[s]);
		return i && ue.extend(!0, t, i), t
	}

	function $(t, n, i) {
		for (var s, o, r, a, l = t.contents, c = t.dataTypes; "*" === c[0];)c.shift(), o === e && (o = t.mimeType || n.getResponseHeader("Content-Type"));
		if (o)for (a in l)if (l[a] && l[a].test(o)) {
			c.unshift(a);
			break
		}
		if (c[0] in i) r = c[0]; else {
			for (a in i) {
				if (!c[0] || t.converters[a + " " + c[0]]) {
					r = a;
					break
				}
				s || (s = a)
			}
			r = r || s
		}
		return r ? (r !== c[0] && c.unshift(r), i[r]) : void 0
	}

	function O(t, e, n, i) {
		var s, o, r, a, l, c = {}, u = t.dataTypes.slice();
		if (u[1])for (r in t.converters)c[r.toLowerCase()] = t.converters[r];
		for (o = u.shift(); o;)if (t.responseFields[o] && (n[t.responseFields[o]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = u.shift())if ("*" === o) o = l; else if ("*" !== l && l !== o) {
			if (r = c[l + " " + o] || c["* " + o], !r)for (s in c)if (a = s.split(" "), a[1] === o && (r = c[l + " " + a[0]] || c["* " + a[0]])) {
				r === !0 ? r = c[s] : c[s] !== !0 && (o = a[0], u.unshift(a[1]));
				break
			}
			if (r !== !0)if (r && t["throws"]) e = r(e); else try {
				e = r(e)
			} catch (d) {
				return {state: "parsererror", error: r ? d : "No conversion from " + l + " to " + o}
			}
		}
		return {state: "success", data: e}
	}

	function R() {
		try {
			return new t.XMLHttpRequest
		} catch (e) {
		}
	}

	function L() {
		try {
			return new t.ActiveXObject("Microsoft.XMLHTTP")
		} catch (e) {
		}
	}

	function j() {
		return setTimeout(function () {
			Jn = e
		}), Jn = ue.now()
	}

	function H(t, e, n) {
		for (var i, s = (oi[e] || []).concat(oi["*"]), o = 0, r = s.length; r > o; o++)if (i = s[o].call(n, e, t))return i
	}

	function F(t, e, n) {
		var i, s, o = 0, r = si.length, a = ue.Deferred().always(function () {
			delete l.elem
		}), l = function () {
			if (s)return !1;
			for (var e = Jn || j(), n = Math.max(0, c.startTime + c.duration - e), i = n / c.duration || 0, o = 1 - i, r = 0, l = c.tweens.length; l > r; r++)c.tweens[r].run(o);
			return a.notifyWith(t, [c, o, n]), 1 > o && l ? n : (a.resolveWith(t, [c]), !1)
		}, c = a.promise({
			elem: t,
			props: ue.extend({}, e),
			opts: ue.extend(!0, {specialEasing: {}}, n),
			originalProperties: e,
			originalOptions: n,
			startTime: Jn || j(),
			duration: n.duration,
			tweens: [],
			createTween: function (e, n) {
				var i = ue.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing);
				return c.tweens.push(i), i
			},
			stop: function (e) {
				var n = 0, i = e ? c.tweens.length : 0;
				if (s)return this;
				for (s = !0; i > n; n++)c.tweens[n].run(1);
				return e ? a.resolveWith(t, [c, e]) : a.rejectWith(t, [c, e]), this
			}
		}), u = c.props;
		for (W(u, c.opts.specialEasing); r > o; o++)if (i = si[o].call(c, t, u, c.opts))return i;
		return ue.map(u, H, c), ue.isFunction(c.opts.start) && c.opts.start.call(t, c), ue.fx.timer(ue.extend(l, {
			elem: t,
			anim: c,
			queue: c.opts.queue
		})), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
	}

	function W(t, e) {
		var n, i, s, o, r;
		for (n in t)if (i = ue.camelCase(n), s = e[i], o = t[n], ue.isArray(o) && (s = o[1], o = t[n] = o[0]), n !== i && (t[i] = o, delete t[n]), r = ue.cssHooks[i], r && "expand" in r) {
			o = r.expand(o), delete t[i];
			for (n in o)n in t || (t[n] = o[n], e[n] = s)
		} else e[i] = s
	}

	function Y(t, e, n) {
		var i, s, o, r, a, l, c = this, u = {}, d = t.style, h = t.nodeType && C(t), p = ue._data(t, "fxshow");
		n.queue || (a = ue._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function () {
			a.unqueued || l()
		}), a.unqueued++, c.always(function () {
			c.always(function () {
				a.unqueued--, ue.queue(t, "fx").length || a.empty.fire()
			})
		})), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], "inline" === ue.css(t, "display") && "none" === ue.css(t, "float") && (ue.support.inlineBlockNeedsLayout && "inline" !== E(t.nodeName) ? d.zoom = 1 : d.display = "inline-block")), n.overflow && (d.overflow = "hidden", ue.support.shrinkWrapBlocks || c.always(function () {
			d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
		}));
		for (i in e)if (s = e[i], ei.exec(s)) {
			if (delete e[i], o = o || "toggle" === s, s === (h ? "hide" : "show"))continue;
			u[i] = p && p[i] || ue.style(t, i)
		}
		if (!ue.isEmptyObject(u)) {
			p ? "hidden" in p && (h = p.hidden) : p = ue._data(t, "fxshow", {}), o && (p.hidden = !h), h ? ue(t).show() : c.done(function () {
				ue(t).hide()
			}), c.done(function () {
				var e;
				ue._removeData(t, "fxshow");
				for (e in u)ue.style(t, e, u[e])
			});
			for (i in u)r = H(h ? p[i] : 0, i, c), i in p || (p[i] = r.start, h && (r.end = r.start, r.start = "width" === i || "height" === i ? 1 : 0))
		}
	}

	function q(t, e, n, i, s) {
		return new q.prototype.init(t, e, n, i, s)
	}

	function z(t, e) {
		var n, i = {height: t}, s = 0;
		for (e = e ? 1 : 0; 4 > s; s += 2 - e)n = kn[s], i["margin" + n] = i["padding" + n] = t;
		return e && (i.opacity = i.width = t), i
	}

	function B(t) {
		return ue.isWindow(t) ? t : 9 === t.nodeType ? t.defaultView || t.parentWindow : !1
	}

	var U, V, G = typeof e, K = t.location, Q = t.document, X = Q.documentElement, Z = t.jQuery, J = t.$, te = {},
		ee = [], ne = "1.10.2", ie = ee.concat, se = ee.push, oe = ee.slice, re = ee.indexOf, ae = te.toString,
		le = te.hasOwnProperty, ce = ne.trim, ue = function (t, e) {
			return new ue.fn.init(t, e, V)
		}, de = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, he = /\S+/g, pe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		fe = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, ge = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, me = /^[\],:{}\s]*$/,
		ye = /(?:^|:|,)(?:\s*\[)+/g, ve = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
		be = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, _e = /^-ms-/, we = /-([\da-z])/gi,
		xe = function (t, e) {
			return e.toUpperCase()
		}, Ce = function (t) {
			(Q.addEventListener || "load" === t.type || "complete" === Q.readyState) && (ke(), ue.ready())
		}, ke = function () {
			Q.addEventListener ? (Q.removeEventListener("DOMContentLoaded", Ce, !1), t.removeEventListener("load", Ce, !1)) : (Q.detachEvent("onreadystatechange", Ce), t.detachEvent("onload", Ce))
		};
	ue.fn = ue.prototype = {
		jquery: ne, constructor: ue, init: function (t, n, i) {
			var s, o;
			if (!t)return this;
			if ("string" == typeof t) {
				if (s = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : fe.exec(t), !s || !s[1] && n)return !n || n.jquery ? (n || i).find(t) : this.constructor(n).find(t);
				if (s[1]) {
					if (n = n instanceof ue ? n[0] : n, ue.merge(this, ue.parseHTML(s[1], n && n.nodeType ? n.ownerDocument || n : Q, !0)), ge.test(s[1]) && ue.isPlainObject(n))for (s in n)ue.isFunction(this[s]) ? this[s](n[s]) : this.attr(s, n[s]);
					return this
				}
				if (o = Q.getElementById(s[2]), o && o.parentNode) {
					if (o.id !== s[2])return i.find(t);
					this.length = 1, this[0] = o
				}
				return this.context = Q, this.selector = t, this
			}
			return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : ue.isFunction(t) ? i.ready(t) : (t.selector !== e && (this.selector = t.selector, this.context = t.context), ue.makeArray(t, this))
		}, selector: "", length: 0, toArray: function () {
			return oe.call(this)
		}, get: function (t) {
			return null == t ? this.toArray() : 0 > t ? this[this.length + t] : this[t]
		}, pushStack: function (t) {
			var e = ue.merge(this.constructor(), t);
			return e.prevObject = this, e.context = this.context, e
		}, each: function (t, e) {
			return ue.each(this, t, e)
		}, ready: function (t) {
			return ue.ready.promise().done(t), this
		}, slice: function () {
			return this.pushStack(oe.apply(this, arguments))
		}, first: function () {
			return this.eq(0)
		}, last: function () {
			return this.eq(-1)
		}, eq: function (t) {
			var e = this.length, n = +t + (0 > t ? e : 0);
			return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
		}, map: function (t) {
			return this.pushStack(ue.map(this, function (e, n) {
				return t.call(e, n, e)
			}))
		}, end: function () {
			return this.prevObject || this.constructor(null)
		}, push: se, sort: [].sort, splice: [].splice
	}, ue.fn.init.prototype = ue.fn, ue.extend = ue.fn.extend = function () {
		var t, n, i, s, o, r, a = arguments[0] || {}, l = 1, c = arguments.length, u = !1;
		for ("boolean" == typeof a && (u = a, a = arguments[1] || {}, l = 2), "object" == typeof a || ue.isFunction(a) || (a = {}), c === l && (a = this, --l); c > l; l++)if (null != (o = arguments[l]))for (s in o)t = a[s], i = o[s], a !== i && (u && i && (ue.isPlainObject(i) || (n = ue.isArray(i))) ? (n ? (n = !1, r = t && ue.isArray(t) ? t : []) : r = t && ue.isPlainObject(t) ? t : {}, a[s] = ue.extend(u, r, i)) : i !== e && (a[s] = i));
		return a
	}, ue.extend({
		expando: "jQuery" + (ne + Math.random()).replace(/\D/g, ""), noConflict: function (e) {
			return t.$ === ue && (t.$ = J), e && t.jQuery === ue && (t.jQuery = Z), ue
		}, isReady: !1, readyWait: 1, holdReady: function (t) {
			t ? ue.readyWait++ : ue.ready(!0)
		}, ready: function (t) {
			if (t === !0 ? !--ue.readyWait : !ue.isReady) {
				if (!Q.body)return setTimeout(ue.ready);
				ue.isReady = !0, t !== !0 && --ue.readyWait > 0 || (U.resolveWith(Q, [ue]), ue.fn.trigger && ue(Q).trigger("ready").off("ready"))
			}
		}, isFunction: function (t) {
			return "function" === ue.type(t)
		}, isArray: Array.isArray || function (t) {
			return "array" === ue.type(t)
		}, isWindow: function (t) {
			return null != t && t == t.window
		}, isNumeric: function (t) {
			return !isNaN(parseFloat(t)) && isFinite(t)
		}, type: function (t) {
			return null == t ? String(t) : "object" == typeof t || "function" == typeof t ? te[ae.call(t)] || "object" : typeof t
		}, isPlainObject: function (t) {
			var n;
			if (!t || "object" !== ue.type(t) || t.nodeType || ue.isWindow(t))return !1;
			try {
				if (t.constructor && !le.call(t, "constructor") && !le.call(t.constructor.prototype, "isPrototypeOf"))return !1
			} catch (i) {
				return !1
			}
			if (ue.support.ownLast)for (n in t)return le.call(t, n);
			for (n in t);
			return n === e || le.call(t, n)
		}, isEmptyObject: function (t) {
			var e;
			for (e in t)return !1;
			return !0
		}, error: function (t) {
			throw new Error(t)
		}, parseHTML: function (t, e, n) {
			if (!t || "string" != typeof t)return null;
			"boolean" == typeof e && (n = e, e = !1), e = e || Q;
			var i = ge.exec(t), s = !n && [];
			return i ? [e.createElement(i[1])] : (i = ue.buildFragment([t], e, s), s && ue(s).remove(), ue.merge([], i.childNodes))
		}, parseJSON: function (e) {
			return t.JSON && t.JSON.parse ? t.JSON.parse(e) : null === e ? e : "string" == typeof e && (e = ue.trim(e), e && me.test(e.replace(ve, "@").replace(be, "]").replace(ye, ""))) ? new Function("return " + e)() : (ue.error("Invalid JSON: " + e), void 0)
		}, parseXML: function (n) {
			var i, s;
			if (!n || "string" != typeof n)return null;
			try {
				t.DOMParser ? (s = new DOMParser, i = s.parseFromString(n, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(n))
			} catch (o) {
				i = e
			}
			return i && i.documentElement && !i.getElementsByTagName("parsererror").length || ue.error("Invalid XML: " + n), i
		}, noop: function () {
		}, globalEval: function (e) {
			e && ue.trim(e) && (t.execScript || function (e) {
				t.eval.call(t, e)
			})(e)
		}, camelCase: function (t) {
			return t.replace(_e, "ms-").replace(we, xe)
		}, nodeName: function (t, e) {
			return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
		}, each: function (t, e, i) {
			var s, o = 0, r = t.length, a = n(t);
			if (i) {
				if (a)for (; r > o && (s = e.apply(t[o], i), s !== !1); o++); else for (o in t)if (s = e.apply(t[o], i), s === !1)break
			} else if (a)for (; r > o && (s = e.call(t[o], o, t[o]), s !== !1); o++); else for (o in t)if (s = e.call(t[o], o, t[o]), s === !1)break;
			return t
		}, trim: ce && !ce.call("﻿ ") ? function (t) {
			return null == t ? "" : ce.call(t)
		} : function (t) {
			return null == t ? "" : (t + "").replace(pe, "")
		}, makeArray: function (t, e) {
			var i = e || [];
			return null != t && (n(Object(t)) ? ue.merge(i, "string" == typeof t ? [t] : t) : se.call(i, t)), i
		}, inArray: function (t, e, n) {
			var i;
			if (e) {
				if (re)return re.call(e, t, n);
				for (i = e.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)if (n in e && e[n] === t)return n
			}
			return -1
		}, merge: function (t, n) {
			var i = n.length, s = t.length, o = 0;
			if ("number" == typeof i)for (; i > o; o++)t[s++] = n[o]; else for (; n[o] !== e;)t[s++] = n[o++];
			return t.length = s, t
		}, grep: function (t, e, n) {
			var i, s = [], o = 0, r = t.length;
			for (n = !!n; r > o; o++)i = !!e(t[o], o), n !== i && s.push(t[o]);
			return s
		}, map: function (t, e, i) {
			var s, o = 0, r = t.length, a = n(t), l = [];
			if (a)for (; r > o; o++)s = e(t[o], o, i), null != s && (l[l.length] = s); else for (o in t)s = e(t[o], o, i), null != s && (l[l.length] = s);
			return ie.apply([], l)
		}, guid: 1, proxy: function (t, n) {
			var i, s, o;
			return "string" == typeof n && (o = t[n], n = t, t = o), ue.isFunction(t) ? (i = oe.call(arguments, 2), s = function () {
				return t.apply(n || this, i.concat(oe.call(arguments)))
			}, s.guid = t.guid = t.guid || ue.guid++, s) : e
		}, access: function (t, n, i, s, o, r, a) {
			var l = 0, c = t.length, u = null == i;
			if ("object" === ue.type(i)) {
				o = !0;
				for (l in i)ue.access(t, n, l, i[l], !0, r, a)
			} else if (s !== e && (o = !0, ue.isFunction(s) || (a = !0), u && (a ? (n.call(t, s), n = null) : (u = n, n = function (t, e, n) {
					return u.call(ue(t), n)
				})), n))for (; c > l; l++)n(t[l], i, a ? s : s.call(t[l], l, n(t[l], i)));
			return o ? t : u ? n.call(t) : c ? n(t[0], i) : r
		}, now: function () {
			return (new Date).getTime()
		}, swap: function (t, e, n, i) {
			var s, o, r = {};
			for (o in e)r[o] = t.style[o], t.style[o] = e[o];
			s = n.apply(t, i || []);
			for (o in e)t.style[o] = r[o];
			return s
		}
	}), ue.ready.promise = function (e) {
		if (!U)if (U = ue.Deferred(), "complete" === Q.readyState) setTimeout(ue.ready); else if (Q.addEventListener) Q.addEventListener("DOMContentLoaded", Ce, !1), t.addEventListener("load", Ce, !1); else {
			Q.attachEvent("onreadystatechange", Ce), t.attachEvent("onload", Ce);
			var n = !1;
			try {
				n = null == t.frameElement && Q.documentElement
			} catch (i) {
			}
			n && n.doScroll && !function s() {
				if (!ue.isReady) {
					try {
						n.doScroll("left")
					} catch (t) {
						return setTimeout(s, 50)
					}
					ke(), ue.ready()
				}
			}()
		}
		return U.promise(e)
	}, ue.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (t, e) {
		te["[object " + e + "]"] = e.toLowerCase()
	}), V = ue(Q), function (t, e) {
		function n(t, e, n, i) {
			var s, o, r, a, l, c, u, d, f, g;
			if ((e ? e.ownerDocument || e : F) !== P && M(e), e = e || P, n = n || [], !t || "string" != typeof t)return n;
			if (1 !== (a = e.nodeType) && 9 !== a)return [];
			if ($ && !i) {
				if (s = be.exec(t))if (r = s[1]) {
					if (9 === a) {
						if (o = e.getElementById(r), !o || !o.parentNode)return n;
						if (o.id === r)return n.push(o), n
					} else if (e.ownerDocument && (o = e.ownerDocument.getElementById(r)) && j(e, o) && o.id === r)return n.push(o), n
				} else {
					if (s[2])return te.apply(n, e.getElementsByTagName(t)), n;
					if ((r = s[3]) && C.getElementsByClassName && e.getElementsByClassName)return te.apply(n, e.getElementsByClassName(r)), n
				}
				if (C.qsa && (!O || !O.test(t))) {
					if (d = u = H, f = e, g = 9 === a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
						for (c = h(t), (u = e.getAttribute("id")) ? d = u.replace(xe, "\\$&") : e.setAttribute("id", d), d = "[id='" + d + "'] ", l = c.length; l--;)c[l] = d + p(c[l]);
						f = pe.test(t) && e.parentNode || e, g = c.join(",")
					}
					if (g)try {
						return te.apply(n, f.querySelectorAll(g)), n
					} catch (m) {
					} finally {
						u || e.removeAttribute("id")
					}
				}
			}
			return w(t.replace(ce, "$1"), e, n, i)
		}

		function i() {
			function t(n, i) {
				return e.push(n += " ") > T.cacheLength && delete t[e.shift()], t[n] = i
			}

			var e = [];
			return t
		}

		function s(t) {
			return t[H] = !0, t
		}

		function o(t) {
			var e = P.createElement("div");
			try {
				return !!t(e)
			} catch (n) {
				return !1
			} finally {
				e.parentNode && e.parentNode.removeChild(e), e = null
			}
		}

		function r(t, e) {
			for (var n = t.split("|"), i = t.length; i--;)T.attrHandle[n[i]] = e
		}

		function a(t, e) {
			var n = e && t,
				i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || K) - (~t.sourceIndex || K);
			if (i)return i;
			if (n)for (; n = n.nextSibling;)if (n === e)return -1;
			return t ? 1 : -1
		}

		function l(t) {
			return function (e) {
				var n = e.nodeName.toLowerCase();
				return "input" === n && e.type === t
			}
		}

		function c(t) {
			return function (e) {
				var n = e.nodeName.toLowerCase();
				return ("input" === n || "button" === n) && e.type === t
			}
		}

		function u(t) {
			return s(function (e) {
				return e = +e, s(function (n, i) {
					for (var s, o = t([], n.length, e), r = o.length; r--;)n[s = o[r]] && (n[s] = !(i[s] = n[s]))
				})
			})
		}

		function d() {
		}

		function h(t, e) {
			var i, s, o, r, a, l, c, u = z[t + " "];
			if (u)return e ? 0 : u.slice(0);
			for (a = t, l = [], c = T.preFilter; a;) {
				(!i || (s = de.exec(a))) && (s && (a = a.slice(s[0].length) || a), l.push(o = [])), i = !1, (s = he.exec(a)) && (i = s.shift(), o.push({
					value: i,
					type: s[0].replace(ce, " ")
				}), a = a.slice(i.length));
				for (r in T.filter)!(s = ye[r].exec(a)) || c[r] && !(s = c[r](s)) || (i = s.shift(), o.push({
					value: i,
					type: r,
					matches: s
				}), a = a.slice(i.length));
				if (!i)break
			}
			return e ? a.length : a ? n.error(t) : z(t, l).slice(0)
		}

		function p(t) {
			for (var e = 0, n = t.length, i = ""; n > e; e++)i += t[e].value;
			return i
		}

		function f(t, e, n) {
			var i = e.dir, s = n && "parentNode" === i, o = Y++;
			return e.first ? function (e, n, o) {
				for (; e = e[i];)if (1 === e.nodeType || s)return t(e, n, o)
			} : function (e, n, r) {
				var a, l, c, u = W + " " + o;
				if (r) {
					for (; e = e[i];)if ((1 === e.nodeType || s) && t(e, n, r))return !0
				} else for (; e = e[i];)if (1 === e.nodeType || s)if (c = e[H] || (e[H] = {}), (l = c[i]) && l[0] === u) {
					if ((a = l[1]) === !0 || a === k)return a === !0
				} else if (l = c[i] = [u], l[1] = t(e, n, r) || k, l[1] === !0)return !0
			}
		}

		function g(t) {
			return t.length > 1 ? function (e, n, i) {
				for (var s = t.length; s--;)if (!t[s](e, n, i))return !1;
				return !0
			} : t[0]
		}

		function m(t, e, n, i, s) {
			for (var o, r = [], a = 0, l = t.length, c = null != e; l > a; a++)(o = t[a]) && (!n || n(o, i, s)) && (r.push(o), c && e.push(a));
			return r
		}

		function y(t, e, n, i, o, r) {
			return i && !i[H] && (i = y(i)), o && !o[H] && (o = y(o, r)), s(function (s, r, a, l) {
				var c, u, d, h = [], p = [], f = r.length, g = s || _(e || "*", a.nodeType ? [a] : a, []),
					y = !t || !s && e ? g : m(g, h, t, a, l), v = n ? o || (s ? t : f || i) ? [] : r : y;
				if (n && n(y, v, a, l), i)for (c = m(v, p), i(c, [], a, l), u = c.length; u--;)(d = c[u]) && (v[p[u]] = !(y[p[u]] = d));
				if (s) {
					if (o || t) {
						if (o) {
							for (c = [], u = v.length; u--;)(d = v[u]) && c.push(y[u] = d);
							o(null, v = [], c, l)
						}
						for (u = v.length; u--;)(d = v[u]) && (c = o ? ne.call(s, d) : h[u]) > -1 && (s[c] = !(r[c] = d))
					}
				} else v = m(v === r ? v.splice(f, v.length) : v), o ? o(null, r, v, l) : te.apply(r, v)
			})
		}

		function v(t) {
			for (var e, n, i, s = t.length, o = T.relative[t[0].type], r = o || T.relative[" "], a = o ? 1 : 0, l = f(function (t) {
				return t === e
			}, r, !0), c = f(function (t) {
				return ne.call(e, t) > -1
			}, r, !0), u = [function (t, n, i) {
				return !o && (i || n !== N) || ((e = n).nodeType ? l(t, n, i) : c(t, n, i))
			}]; s > a; a++)if (n = T.relative[t[a].type]) u = [f(g(u), n)]; else {
				if (n = T.filter[t[a].type].apply(null, t[a].matches), n[H]) {
					for (i = ++a; s > i && !T.relative[t[i].type]; i++);
					return y(a > 1 && g(u), a > 1 && p(t.slice(0, a - 1).concat({value: " " === t[a - 2].type ? "*" : ""})).replace(ce, "$1"), n, i > a && v(t.slice(a, i)), s > i && v(t = t.slice(i)), s > i && p(t))
				}
				u.push(n)
			}
			return g(u)
		}

		function b(t, e) {
			var i = 0, o = e.length > 0, r = t.length > 0, a = function (s, a, l, c, u) {
				var d, h, p, f = [], g = 0, y = "0", v = s && [], b = null != u, _ = N,
					w = s || r && T.find.TAG("*", u && a.parentNode || a), x = W += null == _ ? 1 : Math.random() || .1;
				for (b && (N = a !== P && a, k = i); null != (d = w[y]); y++) {
					if (r && d) {
						for (h = 0; p = t[h++];)if (p(d, a, l)) {
							c.push(d);
							break
						}
						b && (W = x, k = ++i)
					}
					o && ((d = !p && d) && g--, s && v.push(d))
				}
				if (g += y, o && y !== g) {
					for (h = 0; p = e[h++];)p(v, f, a, l);
					if (s) {
						if (g > 0)for (; y--;)v[y] || f[y] || (f[y] = Z.call(c));
						f = m(f)
					}
					te.apply(c, f), b && !s && f.length > 0 && g + e.length > 1 && n.uniqueSort(c)
				}
				return b && (W = x, N = _), v
			};
			return o ? s(a) : a
		}

		function _(t, e, i) {
			for (var s = 0, o = e.length; o > s; s++)n(t, e[s], i);
			return i
		}

		function w(t, e, n, i) {
			var s, o, r, a, l, c = h(t);
			if (!i && 1 === c.length) {
				if (o = c[0] = c[0].slice(0), o.length > 2 && "ID" === (r = o[0]).type && C.getById && 9 === e.nodeType && $ && T.relative[o[1].type]) {
					if (e = (T.find.ID(r.matches[0].replace(Ce, ke), e) || [])[0], !e)return n;
					t = t.slice(o.shift().value.length)
				}
				for (s = ye.needsContext.test(t) ? 0 : o.length; s-- && (r = o[s], !T.relative[a = r.type]);)if ((l = T.find[a]) && (i = l(r.matches[0].replace(Ce, ke), pe.test(o[0].type) && e.parentNode || e))) {
					if (o.splice(s, 1), t = i.length && p(o), !t)return te.apply(n, i), n;
					break
				}
			}
			return E(t, c)(i, e, !$, n, pe.test(t)), n
		}

		var x, C, k, T, S, D, E, N, A, M, P, I, $, O, R, L, j, H = "sizzle" + -new Date, F = t.document, W = 0, Y = 0,
			q = i(), z = i(), B = i(), U = !1, V = function (t, e) {
				return t === e ? (U = !0, 0) : 0
			}, G = typeof e, K = 1 << 31, Q = {}.hasOwnProperty, X = [], Z = X.pop, J = X.push, te = X.push, ee = X.slice,
			ne = X.indexOf || function (t) {
					for (var e = 0, n = this.length; n > e; e++)if (this[e] === t)return e;
					return -1
				},
			ie = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
			se = "[\\x20\\t\\r\\n\\f]", oe = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", re = oe.replace("w", "w#"),
			ae = "\\[" + se + "*(" + oe + ")" + se + "*(?:([*^$|!~]?=)" + se + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + re + ")|)|)" + se + "*\\]",
			le = ":(" + oe + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + ae.replace(3, 8) + ")*)|.*)\\)|)",
			ce = new RegExp("^" + se + "+|((?:^|[^\\\\])(?:\\\\.)*)" + se + "+$", "g"),
			de = new RegExp("^" + se + "*," + se + "*"), he = new RegExp("^" + se + "*([>+~]|" + se + ")" + se + "*"),
			pe = new RegExp(se + "*[+~]"), fe = new RegExp("=" + se + "*([^\\]'\"]*)" + se + "*\\]", "g"),
			ge = new RegExp(le), me = new RegExp("^" + re + "$"), ye = {
				ID: new RegExp("^#(" + oe + ")"),
				CLASS: new RegExp("^\\.(" + oe + ")"),
				TAG: new RegExp("^(" + oe.replace("w", "w*") + ")"),
				ATTR: new RegExp("^" + ae),
				PSEUDO: new RegExp("^" + le),
				CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + se + "*(even|odd|(([+-]|)(\\d*)n|)" + se + "*(?:([+-]|)" + se + "*(\\d+)|))" + se + "*\\)|)", "i"),
				bool: new RegExp("^(?:" + ie + ")$", "i"),
				needsContext: new RegExp("^" + se + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + se + "*((?:-\\d)?\\d*)" + se + "*\\)|)(?=[^-]|$)", "i")
			}, ve = /^[^{]+\{\s*\[native \w/, be = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			_e = /^(?:input|select|textarea|button)$/i, we = /^h\d$/i, xe = /'|\\/g,
			Ce = new RegExp("\\\\([\\da-f]{1,6}" + se + "?|(" + se + ")|.)", "ig"), ke = function (t, e, n) {
				var i = "0x" + e - 65536;
				return i !== i || n ? e : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
			};
		try {
			te.apply(X = ee.call(F.childNodes), F.childNodes), X[F.childNodes.length].nodeType
		} catch (Te) {
			te = {
				apply: X.length ? function (t, e) {
					J.apply(t, ee.call(e))
				} : function (t, e) {
					for (var n = t.length, i = 0; t[n++] = e[i++];);
					t.length = n - 1
				}
			}
		}
		D = n.isXML = function (t) {
			var e = t && (t.ownerDocument || t).documentElement;
			return e ? "HTML" !== e.nodeName : !1
		}, C = n.support = {}, M = n.setDocument = function (t) {
			var e = t ? t.ownerDocument || t : F, n = e.defaultView;
			return e !== P && 9 === e.nodeType && e.documentElement ? (P = e, I = e.documentElement, $ = !D(e), n && n.attachEvent && n !== n.top && n.attachEvent("onbeforeunload", function () {
				M()
			}), C.attributes = o(function (t) {
				return t.className = "i", !t.getAttribute("className")
			}), C.getElementsByTagName = o(function (t) {
				return t.appendChild(e.createComment("")), !t.getElementsByTagName("*").length
			}), C.getElementsByClassName = o(function (t) {
				return t.innerHTML = "<div class='a'></div><div class='a i'></div>", t.firstChild.className = "i", 2 === t.getElementsByClassName("i").length
			}), C.getById = o(function (t) {
				return I.appendChild(t).id = H, !e.getElementsByName || !e.getElementsByName(H).length
			}), C.getById ? (T.find.ID = function (t, e) {
				if (typeof e.getElementById !== G && $) {
					var n = e.getElementById(t);
					return n && n.parentNode ? [n] : []
				}
			}, T.filter.ID = function (t) {
				var e = t.replace(Ce, ke);
				return function (t) {
					return t.getAttribute("id") === e
				}
			}) : (delete T.find.ID, T.filter.ID = function (t) {
				var e = t.replace(Ce, ke);
				return function (t) {
					var n = typeof t.getAttributeNode !== G && t.getAttributeNode("id");
					return n && n.value === e
				}
			}), T.find.TAG = C.getElementsByTagName ? function (t, e) {
				return typeof e.getElementsByTagName !== G ? e.getElementsByTagName(t) : void 0
			} : function (t, e) {
				var n, i = [], s = 0, o = e.getElementsByTagName(t);
				if ("*" === t) {
					for (; n = o[s++];)1 === n.nodeType && i.push(n);
					return i
				}
				return o
			}, T.find.CLASS = C.getElementsByClassName && function (t, e) {
					return typeof e.getElementsByClassName !== G && $ ? e.getElementsByClassName(t) : void 0
				}, R = [], O = [], (C.qsa = ve.test(e.querySelectorAll)) && (o(function (t) {
				t.innerHTML = "<select><option selected=''></option></select>", t.querySelectorAll("[selected]").length || O.push("\\[" + se + "*(?:value|" + ie + ")"), t.querySelectorAll(":checked").length || O.push(":checked")
			}), o(function (t) {
				var n = e.createElement("input");
				n.setAttribute("type", "hidden"), t.appendChild(n).setAttribute("t", ""), t.querySelectorAll("[t^='']").length && O.push("[*^$]=" + se + "*(?:''|\"\")"), t.querySelectorAll(":enabled").length || O.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), O.push(",.*:")
			})), (C.matchesSelector = ve.test(L = I.webkitMatchesSelector || I.mozMatchesSelector || I.oMatchesSelector || I.msMatchesSelector)) && o(function (t) {
				C.disconnectedMatch = L.call(t, "div"), L.call(t, "[s!='']:x"), R.push("!=", le)
			}), O = O.length && new RegExp(O.join("|")), R = R.length && new RegExp(R.join("|")), j = ve.test(I.contains) || I.compareDocumentPosition ? function (t, e) {
				var n = 9 === t.nodeType ? t.documentElement : t, i = e && e.parentNode;
				return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
			} : function (t, e) {
				if (e)for (; e = e.parentNode;)if (e === t)return !0;
				return !1
			}, V = I.compareDocumentPosition ? function (t, n) {
				if (t === n)return U = !0, 0;
				var i = n.compareDocumentPosition && t.compareDocumentPosition && t.compareDocumentPosition(n);
				return i ? 1 & i || !C.sortDetached && n.compareDocumentPosition(t) === i ? t === e || j(F, t) ? -1 : n === e || j(F, n) ? 1 : A ? ne.call(A, t) - ne.call(A, n) : 0 : 4 & i ? -1 : 1 : t.compareDocumentPosition ? -1 : 1
			} : function (t, n) {
				var i, s = 0, o = t.parentNode, r = n.parentNode, l = [t], c = [n];
				if (t === n)return U = !0, 0;
				if (!o || !r)return t === e ? -1 : n === e ? 1 : o ? -1 : r ? 1 : A ? ne.call(A, t) - ne.call(A, n) : 0;
				if (o === r)return a(t, n);
				for (i = t; i = i.parentNode;)l.unshift(i);
				for (i = n; i = i.parentNode;)c.unshift(i);
				for (; l[s] === c[s];)s++;
				return s ? a(l[s], c[s]) : l[s] === F ? -1 : c[s] === F ? 1 : 0
			}, e) : P
		}, n.matches = function (t, e) {
			return n(t, null, null, e)
		}, n.matchesSelector = function (t, e) {
			if ((t.ownerDocument || t) !== P && M(t), e = e.replace(fe, "='$1']"), !(!C.matchesSelector || !$ || R && R.test(e) || O && O.test(e)))try {
				var i = L.call(t, e);
				if (i || C.disconnectedMatch || t.document && 11 !== t.document.nodeType)return i
			} catch (s) {
			}
			return n(e, P, null, [t]).length > 0
		}, n.contains = function (t, e) {
			return (t.ownerDocument || t) !== P && M(t), j(t, e)
		}, n.attr = function (t, n) {
			(t.ownerDocument || t) !== P && M(t);
			var i = T.attrHandle[n.toLowerCase()], s = i && Q.call(T.attrHandle, n.toLowerCase()) ? i(t, n, !$) : e;
			return s === e ? C.attributes || !$ ? t.getAttribute(n) : (s = t.getAttributeNode(n)) && s.specified ? s.value : null : s
		}, n.error = function (t) {
			throw new Error("Syntax error, unrecognized expression: " + t)
		}, n.uniqueSort = function (t) {
			var e, n = [], i = 0, s = 0;
			if (U = !C.detectDuplicates, A = !C.sortStable && t.slice(0), t.sort(V), U) {
				for (; e = t[s++];)e === t[s] && (i = n.push(s));
				for (; i--;)t.splice(n[i], 1)
			}
			return t
		}, S = n.getText = function (t) {
			var e, n = "", i = 0, s = t.nodeType;
			if (s) {
				if (1 === s || 9 === s || 11 === s) {
					if ("string" == typeof t.textContent)return t.textContent;
					for (t = t.firstChild; t; t = t.nextSibling)n += S(t)
				} else if (3 === s || 4 === s)return t.nodeValue
			} else for (; e = t[i]; i++)n += S(e);
			return n
		}, T = n.selectors = {
			cacheLength: 50,
			createPseudo: s,
			match: ye,
			attrHandle: {},
			find: {},
			relative: {
				">": {dir: "parentNode", first: !0},
				" ": {dir: "parentNode"},
				"+": {dir: "previousSibling", first: !0},
				"~": {dir: "previousSibling"}
			},
			preFilter: {
				ATTR: function (t) {
					return t[1] = t[1].replace(Ce, ke), t[3] = (t[4] || t[5] || "").replace(Ce, ke), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
				}, CHILD: function (t) {
					return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || n.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && n.error(t[0]), t
				}, PSEUDO: function (t) {
					var n, i = !t[5] && t[2];
					return ye.CHILD.test(t[0]) ? null : (t[3] && t[4] !== e ? t[2] = t[4] : i && ge.test(i) && (n = h(i, !0)) && (n = i.indexOf(")", i.length - n) - i.length) && (t[0] = t[0].slice(0, n), t[2] = i.slice(0, n)), t.slice(0, 3))
				}
			},
			filter: {
				TAG: function (t) {
					var e = t.replace(Ce, ke).toLowerCase();
					return "*" === t ? function () {
						return !0
					} : function (t) {
						return t.nodeName && t.nodeName.toLowerCase() === e
					}
				}, CLASS: function (t) {
					var e = q[t + " "];
					return e || (e = new RegExp("(^|" + se + ")" + t + "(" + se + "|$)")) && q(t, function (t) {
							return e.test("string" == typeof t.className && t.className || typeof t.getAttribute !== G && t.getAttribute("class") || "")
						})
				}, ATTR: function (t, e, i) {
					return function (s) {
						var o = n.attr(s, t);
						return null == o ? "!=" === e : e ? (o += "", "=" === e ? o === i : "!=" === e ? o !== i : "^=" === e ? i && 0 === o.indexOf(i) : "*=" === e ? i && o.indexOf(i) > -1 : "$=" === e ? i && o.slice(-i.length) === i : "~=" === e ? (" " + o + " ").indexOf(i) > -1 : "|=" === e ? o === i || o.slice(0, i.length + 1) === i + "-" : !1) : !0
					}
				}, CHILD: function (t, e, n, i, s) {
					var o = "nth" !== t.slice(0, 3), r = "last" !== t.slice(-4), a = "of-type" === e;
					return 1 === i && 0 === s ? function (t) {
						return !!t.parentNode
					} : function (e, n, l) {
						var c, u, d, h, p, f, g = o !== r ? "nextSibling" : "previousSibling", m = e.parentNode,
							y = a && e.nodeName.toLowerCase(), v = !l && !a;
						if (m) {
							if (o) {
								for (; g;) {
									for (d = e; d = d[g];)if (a ? d.nodeName.toLowerCase() === y : 1 === d.nodeType)return !1;
									f = g = "only" === t && !f && "nextSibling"
								}
								return !0
							}
							if (f = [r ? m.firstChild : m.lastChild], r && v) {
								for (u = m[H] || (m[H] = {}), c = u[t] || [], p = c[0] === W && c[1], h = c[0] === W && c[2], d = p && m.childNodes[p]; d = ++p && d && d[g] || (h = p = 0) || f.pop();)if (1 === d.nodeType && ++h && d === e) {
									u[t] = [W, p, h];
									break
								}
							} else if (v && (c = (e[H] || (e[H] = {}))[t]) && c[0] === W) h = c[1]; else for (; (d = ++p && d && d[g] || (h = p = 0) || f.pop()) && ((a ? d.nodeName.toLowerCase() !== y : 1 !== d.nodeType) || !++h || (v && ((d[H] || (d[H] = {}))[t] = [W, h]), d !== e)););
							return h -= s, h === i || h % i === 0 && h / i >= 0
						}
					}
				}, PSEUDO: function (t, e) {
					var i, o = T.pseudos[t] || T.setFilters[t.toLowerCase()] || n.error("unsupported pseudo: " + t);
					return o[H] ? o(e) : o.length > 1 ? (i = [t, t, "", e], T.setFilters.hasOwnProperty(t.toLowerCase()) ? s(function (t, n) {
						for (var i, s = o(t, e), r = s.length; r--;)i = ne.call(t, s[r]), t[i] = !(n[i] = s[r])
					}) : function (t) {
						return o(t, 0, i)
					}) : o
				}
			},
			pseudos: {
				not: s(function (t) {
					var e = [], n = [], i = E(t.replace(ce, "$1"));
					return i[H] ? s(function (t, e, n, s) {
						for (var o, r = i(t, null, s, []), a = t.length; a--;)(o = r[a]) && (t[a] = !(e[a] = o))
					}) : function (t, s, o) {
						return e[0] = t, i(e, null, o, n), !n.pop()
					}
				}), has: s(function (t) {
					return function (e) {
						return n(t, e).length > 0
					}
				}), contains: s(function (t) {
					return function (e) {
						return (e.textContent || e.innerText || S(e)).indexOf(t) > -1
					}
				}), lang: s(function (t) {
					return me.test(t || "") || n.error("unsupported lang: " + t), t = t.replace(Ce, ke).toLowerCase(), function (e) {
						var n;
						do if (n = $ ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-"); while ((e = e.parentNode) && 1 === e.nodeType);
						return !1
					}
				}), target: function (e) {
					var n = t.location && t.location.hash;
					return n && n.slice(1) === e.id
				}, root: function (t) {
					return t === I
				}, focus: function (t) {
					return t === P.activeElement && (!P.hasFocus || P.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
				}, enabled: function (t) {
					return t.disabled === !1
				}, disabled: function (t) {
					return t.disabled === !0
				}, checked: function (t) {
					var e = t.nodeName.toLowerCase();
					return "input" === e && !!t.checked || "option" === e && !!t.selected
				}, selected: function (t) {
					return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
				}, empty: function (t) {
					for (t = t.firstChild; t; t = t.nextSibling)if (t.nodeName > "@" || 3 === t.nodeType || 4 === t.nodeType)return !1;
					return !0
				}, parent: function (t) {
					return !T.pseudos.empty(t)
				}, header: function (t) {
					return we.test(t.nodeName)
				}, input: function (t) {
					return _e.test(t.nodeName)
				}, button: function (t) {
					var e = t.nodeName.toLowerCase();
					return "input" === e && "button" === t.type || "button" === e
				}, text: function (t) {
					var e;
					return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || e.toLowerCase() === t.type)
				}, first: u(function () {
					return [0]
				}), last: u(function (t, e) {
					return [e - 1]
				}), eq: u(function (t, e, n) {
					return [0 > n ? n + e : n]
				}), even: u(function (t, e) {
					for (var n = 0; e > n; n += 2)t.push(n);
					return t
				}), odd: u(function (t, e) {
					for (var n = 1; e > n; n += 2)t.push(n);
					return t
				}), lt: u(function (t, e, n) {
					for (var i = 0 > n ? n + e : n; --i >= 0;)t.push(i);
					return t
				}), gt: u(function (t, e, n) {
					for (var i = 0 > n ? n + e : n; ++i < e;)t.push(i);
					return t
				})
			}
		}, T.pseudos.nth = T.pseudos.eq;
		for (x in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})T.pseudos[x] = l(x);
		for (x in{submit: !0, reset: !0})T.pseudos[x] = c(x);
		d.prototype = T.filters = T.pseudos, T.setFilters = new d, E = n.compile = function (t, e) {
			var n, i = [], s = [], o = B[t + " "];
			if (!o) {
				for (e || (e = h(t)), n = e.length; n--;)o = v(e[n]), o[H] ? i.push(o) : s.push(o);
				o = B(t, b(s, i))
			}
			return o
		}, C.sortStable = H.split("").sort(V).join("") === H, C.detectDuplicates = U, M(), C.sortDetached = o(function (t) {
			return 1 & t.compareDocumentPosition(P.createElement("div"))
		}), o(function (t) {
			return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
		}) || r("type|href|height|width", function (t, e, n) {
			return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
		}), C.attributes && o(function (t) {
			return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
		}) || r("value", function (t, e, n) {
			return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
		}), o(function (t) {
			return null == t.getAttribute("disabled")
		}) || r(ie, function (t, e, n) {
			var i;
			return n ? void 0 : (i = t.getAttributeNode(e)) && i.specified ? i.value : t[e] === !0 ? e.toLowerCase() : null
		}), ue.find = n, ue.expr = n.selectors, ue.expr[":"] = ue.expr.pseudos, ue.unique = n.uniqueSort, ue.text = n.getText, ue.isXMLDoc = n.isXML, ue.contains = n.contains
	}(t);
	var Te = {};
	ue.Callbacks = function (t) {
		t = "string" == typeof t ? Te[t] || i(t) : ue.extend({}, t);
		var n, s, o, r, a, l, c = [], u = !t.once && [], d = function (e) {
			for (s = t.memory && e, o = !0, a = l || 0, l = 0, r = c.length, n = !0; c && r > a; a++)if (c[a].apply(e[0], e[1]) === !1 && t.stopOnFalse) {
				s = !1;
				break
			}
			n = !1, c && (u ? u.length && d(u.shift()) : s ? c = [] : h.disable())
		}, h = {
			add: function () {
				if (c) {
					var e = c.length;
					!function i(e) {
						ue.each(e, function (e, n) {
							var s = ue.type(n);
							"function" === s ? t.unique && h.has(n) || c.push(n) : n && n.length && "string" !== s && i(n)
						})
					}(arguments), n ? r = c.length : s && (l = e, d(s))
				}
				return this
			}, remove: function () {
				return c && ue.each(arguments, function (t, e) {
					for (var i; (i = ue.inArray(e, c, i)) > -1;)c.splice(i, 1), n && (r >= i && r--, a >= i && a--)
				}), this
			}, has: function (t) {
				return t ? ue.inArray(t, c) > -1 : !(!c || !c.length)
			}, empty: function () {
				return c = [], r = 0, this
			}, disable: function () {
				return c = u = s = e, this
			}, disabled: function () {
				return !c
			}, lock: function () {
				return u = e, s || h.disable(), this
			}, locked: function () {
				return !u
			}, fireWith: function (t, e) {
				return !c || o && !u || (e = e || [], e = [t, e.slice ? e.slice() : e], n ? u.push(e) : d(e)), this
			}, fire: function () {
				return h.fireWith(this, arguments), this
			}, fired: function () {
				return !!o
			}
		};
		return h
	}, ue.extend({
		Deferred: function (t) {
			var e = [["resolve", "done", ue.Callbacks("once memory"), "resolved"], ["reject", "fail", ue.Callbacks("once memory"), "rejected"], ["notify", "progress", ue.Callbacks("memory")]],
				n = "pending", i = {
					state: function () {
						return n
					}, always: function () {
						return s.done(arguments).fail(arguments), this
					}, then: function () {
						var t = arguments;
						return ue.Deferred(function (n) {
							ue.each(e, function (e, o) {
								var r = o[0], a = ue.isFunction(t[e]) && t[e];
								s[o[1]](function () {
									var t = a && a.apply(this, arguments);
									t && ue.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[r + "With"](this === i ? n.promise() : this, a ? [t] : arguments)
								})
							}), t = null
						}).promise()
					}, promise: function (t) {
						return null != t ? ue.extend(t, i) : i
					}
				}, s = {};
			return i.pipe = i.then, ue.each(e, function (t, o) {
				var r = o[2], a = o[3];
				i[o[1]] = r.add, a && r.add(function () {
					n = a
				}, e[1 ^ t][2].disable, e[2][2].lock), s[o[0]] = function () {
					return s[o[0] + "With"](this === s ? i : this, arguments), this
				}, s[o[0] + "With"] = r.fireWith
			}), i.promise(s), t && t.call(s, s), s
		}, when: function (t) {
			var e, n, i, s = 0, o = oe.call(arguments), r = o.length,
				a = 1 !== r || t && ue.isFunction(t.promise) ? r : 0, l = 1 === a ? t : ue.Deferred(),
				c = function (t, n, i) {
					return function (s) {
						n[t] = this, i[t] = arguments.length > 1 ? oe.call(arguments) : s, i === e ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
					}
				};
			if (r > 1)for (e = new Array(r), n = new Array(r), i = new Array(r); r > s; s++)o[s] && ue.isFunction(o[s].promise) ? o[s].promise().done(c(s, i, o)).fail(l.reject).progress(c(s, n, e)) : --a;
			return a || l.resolveWith(i, o), l.promise()
		}
	}), ue.support = function (e) {
		var n, i, s, o, r, a, l, c, u, d = Q.createElement("div");
		if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*") || [], i = d.getElementsByTagName("a")[0], !i || !i.style || !n.length)return e;
		o = Q.createElement("select"), a = o.appendChild(Q.createElement("option")), s = d.getElementsByTagName("input")[0], i.style.cssText = "top:1px;float:left;opacity:.5", e.getSetAttribute = "t" !== d.className, e.leadingWhitespace = 3 === d.firstChild.nodeType, e.tbody = !d.getElementsByTagName("tbody").length, e.htmlSerialize = !!d.getElementsByTagName("link").length, e.style = /top/.test(i.getAttribute("style")), e.hrefNormalized = "/a" === i.getAttribute("href"), e.opacity = /^0.5/.test(i.style.opacity), e.cssFloat = !!i.style.cssFloat, e.checkOn = !!s.value, e.optSelected = a.selected, e.enctype = !!Q.createElement("form").enctype, e.html5Clone = "<:nav></:nav>" !== Q.createElement("nav").cloneNode(!0).outerHTML, e.inlineBlockNeedsLayout = !1, e.shrinkWrapBlocks = !1, e.pixelPosition = !1, e.deleteExpando = !0, e.noCloneEvent = !0, e.reliableMarginRight = !0, e.boxSizingReliable = !0, s.checked = !0, e.noCloneChecked = s.cloneNode(!0).checked, o.disabled = !0, e.optDisabled = !a.disabled;
		try {
			delete d.test
		} catch (h) {
			e.deleteExpando = !1
		}
		s = Q.createElement("input"), s.setAttribute("value", ""), e.input = "" === s.getAttribute("value"), s.value = "t", s.setAttribute("type", "radio"), e.radioValue = "t" === s.value, s.setAttribute("checked", "t"), s.setAttribute("name", "t"), r = Q.createDocumentFragment(), r.appendChild(s), e.appendChecked = s.checked, e.checkClone = r.cloneNode(!0).cloneNode(!0).lastChild.checked, d.attachEvent && (d.attachEvent("onclick", function () {
			e.noCloneEvent = !1
		}), d.cloneNode(!0).click());
		for (u in{
			submit: !0,
			change: !0,
			focusin: !0
		})d.setAttribute(l = "on" + u, "t"), e[u + "Bubbles"] = l in t || d.attributes[l].expando === !1;
		d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", e.clearCloneStyle = "content-box" === d.style.backgroundClip;
		for (u in ue(e))break;
		return e.ownLast = "0" !== u, ue(function () {
			var n, i, s,
				o = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
				r = Q.getElementsByTagName("body")[0];
			r && (n = Q.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", r.appendChild(n).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", s = d.getElementsByTagName("td"), s[0].style.cssText = "padding:0;margin:0;border:0;display:none", c = 0 === s[0].offsetHeight, s[0].style.display = "", s[1].style.display = "none", e.reliableHiddenOffsets = c && 0 === s[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", ue.swap(r, null != r.style.zoom ? {zoom: 1} : {}, function () {
				e.boxSizing = 4 === d.offsetWidth
			}), t.getComputedStyle && (e.pixelPosition = "1%" !== (t.getComputedStyle(d, null) || {}).top, e.boxSizingReliable = "4px" === (t.getComputedStyle(d, null) || {width: "4px"}).width, i = d.appendChild(Q.createElement("div")), i.style.cssText = d.style.cssText = o, i.style.marginRight = i.style.width = "0", d.style.width = "1px", e.reliableMarginRight = !parseFloat((t.getComputedStyle(i, null) || {}).marginRight)), typeof d.style.zoom !== G && (d.innerHTML = "", d.style.cssText = o + "width:1px;padding:1px;display:inline;zoom:1", e.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", e.shrinkWrapBlocks = 3 !== d.offsetWidth, e.inlineBlockNeedsLayout && (r.style.zoom = 1)), r.removeChild(n), n = d = s = i = null)
		}), n = o = r = a = i = s = null, e
	}({});
	var Se = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, De = /([A-Z])/g;
	ue.extend({
		cache: {},
		noData: {applet: !0, embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},
		hasData: function (t) {
			return t = t.nodeType ? ue.cache[t[ue.expando]] : t[ue.expando], !!t && !a(t)
		},
		data: function (t, e, n) {
			return s(t, e, n)
		},
		removeData: function (t, e) {
			return o(t, e)
		},
		_data: function (t, e, n) {
			return s(t, e, n, !0)
		},
		_removeData: function (t, e) {
			return o(t, e, !0)
		},
		acceptData: function (t) {
			if (t.nodeType && 1 !== t.nodeType && 9 !== t.nodeType)return !1;
			var e = t.nodeName && ue.noData[t.nodeName.toLowerCase()];
			return !e || e !== !0 && t.getAttribute("classid") === e
		}
	}), ue.fn.extend({
		data: function (t, n) {
			var i, s, o = null, a = 0, l = this[0];
			if (t === e) {
				if (this.length && (o = ue.data(l), 1 === l.nodeType && !ue._data(l, "parsedAttrs"))) {
					for (i = l.attributes; a < i.length; a++)s = i[a].name, 0 === s.indexOf("data-") && (s = ue.camelCase(s.slice(5)), r(l, s, o[s]));
					ue._data(l, "parsedAttrs", !0)
				}
				return o
			}
			return "object" == typeof t ? this.each(function () {
				ue.data(this, t)
			}) : arguments.length > 1 ? this.each(function () {
				ue.data(this, t, n)
			}) : l ? r(l, t, ue.data(l, t)) : null
		}, removeData: function (t) {
			return this.each(function () {
				ue.removeData(this, t)
			})
		}
	}), ue.extend({
		queue: function (t, e, n) {
			var i;
			return t ? (e = (e || "fx") + "queue", i = ue._data(t, e), n && (!i || ue.isArray(n) ? i = ue._data(t, e, ue.makeArray(n)) : i.push(n)), i || []) : void 0
		}, dequeue: function (t, e) {
			e = e || "fx";
			var n = ue.queue(t, e), i = n.length, s = n.shift(), o = ue._queueHooks(t, e), r = function () {
				ue.dequeue(t, e)
			};
			"inprogress" === s && (s = n.shift(), i--), s && ("fx" === e && n.unshift("inprogress"), delete o.stop, s.call(t, r, o)), !i && o && o.empty.fire()
		}, _queueHooks: function (t, e) {
			var n = e + "queueHooks";
			return ue._data(t, n) || ue._data(t, n, {
					empty: ue.Callbacks("once memory").add(function () {
						ue._removeData(t, e + "queue"), ue._removeData(t, n)
					})
				})
		}
	}), ue.fn.extend({
		queue: function (t, n) {
			var i = 2;
			return "string" != typeof t && (n = t, t = "fx", i--), arguments.length < i ? ue.queue(this[0], t) : n === e ? this : this.each(function () {
				var e = ue.queue(this, t, n);
				ue._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && ue.dequeue(this, t)
			})
		}, dequeue: function (t) {
			return this.each(function () {
				ue.dequeue(this, t)
			})
		}, delay: function (t, e) {
			return t = ue.fx ? ue.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function (e, n) {
				var i = setTimeout(e, t);
				n.stop = function () {
					clearTimeout(i)
				}
			})
		}, clearQueue: function (t) {
			return this.queue(t || "fx", [])
		}, promise: function (t, n) {
			var i, s = 1, o = ue.Deferred(), r = this, a = this.length, l = function () {
				--s || o.resolveWith(r, [r])
			};
			for ("string" != typeof t && (n = t, t = e), t = t || "fx"; a--;)i = ue._data(r[a], t + "queueHooks"), i && i.empty && (s++, i.empty.add(l));
			return l(), o.promise(n)
		}
	});
	var Ee, Ne, Ae = /[\t\r\n\f]/g, Me = /\r/g, Pe = /^(?:input|select|textarea|button|object)$/i, Ie = /^(?:a|area)$/i,
		$e = /^(?:checked|selected)$/i, Oe = ue.support.getSetAttribute, Re = ue.support.input;
	ue.fn.extend({
		attr: function (t, e) {
			return ue.access(this, ue.attr, t, e, arguments.length > 1)
		}, removeAttr: function (t) {
			return this.each(function () {
				ue.removeAttr(this, t)
			})
		}, prop: function (t, e) {
			return ue.access(this, ue.prop, t, e, arguments.length > 1)
		}, removeProp: function (t) {
			return t = ue.propFix[t] || t, this.each(function () {
				try {
					this[t] = e, delete this[t]
				} catch (n) {
				}
			})
		}, addClass: function (t) {
			var e, n, i, s, o, r = 0, a = this.length, l = "string" == typeof t && t;
			if (ue.isFunction(t))return this.each(function (e) {
				ue(this).addClass(t.call(this, e, this.className))
			});
			if (l)for (e = (t || "").match(he) || []; a > r; r++)if (n = this[r], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Ae, " ") : " ")) {
				for (o = 0; s = e[o++];)i.indexOf(" " + s + " ") < 0 && (i += s + " ");
				n.className = ue.trim(i)
			}
			return this
		}, removeClass: function (t) {
			var e, n, i, s, o, r = 0, a = this.length, l = 0 === arguments.length || "string" == typeof t && t;
			if (ue.isFunction(t))return this.each(function (e) {
				ue(this).removeClass(t.call(this, e, this.className))
			});
			if (l)for (e = (t || "").match(he) || []; a > r; r++)if (n = this[r], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Ae, " ") : "")) {
				for (o = 0; s = e[o++];)for (; i.indexOf(" " + s + " ") >= 0;)i = i.replace(" " + s + " ", " ");
				n.className = t ? ue.trim(i) : ""
			}
			return this
		}, toggleClass: function (t, e) {
			var n = typeof t;
			return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : ue.isFunction(t) ? this.each(function (n) {
				ue(this).toggleClass(t.call(this, n, this.className, e), e)
			}) : this.each(function () {
				if ("string" === n)for (var e, i = 0, s = ue(this), o = t.match(he) || []; e = o[i++];)s.hasClass(e) ? s.removeClass(e) : s.addClass(e); else(n === G || "boolean" === n) && (this.className && ue._data(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : ue._data(this, "__className__") || "")
			})
		}, hasClass: function (t) {
			for (var e = " " + t + " ", n = 0, i = this.length; i > n; n++)if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Ae, " ").indexOf(e) >= 0)return !0;
			return !1
		}, val: function (t) {
			var n, i, s, o = this[0];
			{
				if (arguments.length)return s = ue.isFunction(t), this.each(function (n) {
					var o;
					1 === this.nodeType && (o = s ? t.call(this, n, ue(this).val()) : t, null == o ? o = "" : "number" == typeof o ? o += "" : ue.isArray(o) && (o = ue.map(o, function (t) {
							return null == t ? "" : t + ""
						})), i = ue.valHooks[this.type] || ue.valHooks[this.nodeName.toLowerCase()], i && "set" in i && i.set(this, o, "value") !== e || (this.value = o))
				});
				if (o)return i = ue.valHooks[o.type] || ue.valHooks[o.nodeName.toLowerCase()], i && "get" in i && (n = i.get(o, "value")) !== e ? n : (n = o.value, "string" == typeof n ? n.replace(Me, "") : null == n ? "" : n)
			}
		}
	}), ue.extend({
		valHooks: {
			option: {
				get: function (t) {
					var e = ue.find.attr(t, "value");
					return null != e ? e : t.text
				}
			}, select: {
				get: function (t) {
					for (var e, n, i = t.options, s = t.selectedIndex, o = "select-one" === t.type || 0 > s, r = o ? null : [], a = o ? s + 1 : i.length, l = 0 > s ? a : o ? s : 0; a > l; l++)if (n = i[l], !(!n.selected && l !== s || (ue.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && ue.nodeName(n.parentNode, "optgroup"))) {
						if (e = ue(n).val(), o)return e;
						r.push(e)
					}
					return r
				}, set: function (t, e) {
					for (var n, i, s = t.options, o = ue.makeArray(e), r = s.length; r--;)i = s[r], (i.selected = ue.inArray(ue(i).val(), o) >= 0) && (n = !0);
					return n || (t.selectedIndex = -1), o
				}
			}
		}, attr: function (t, n, i) {
			var s, o, r = t.nodeType;
			if (t && 3 !== r && 8 !== r && 2 !== r)return typeof t.getAttribute === G ? ue.prop(t, n, i) : (1 === r && ue.isXMLDoc(t) || (n = n.toLowerCase(), s = ue.attrHooks[n] || (ue.expr.match.bool.test(n) ? Ne : Ee)), i === e ? s && "get" in s && null !== (o = s.get(t, n)) ? o : (o = ue.find.attr(t, n), null == o ? e : o) : null !== i ? s && "set" in s && (o = s.set(t, i, n)) !== e ? o : (t.setAttribute(n, i + ""), i) : (ue.removeAttr(t, n), void 0))
		}, removeAttr: function (t, e) {
			var n, i, s = 0, o = e && e.match(he);
			if (o && 1 === t.nodeType)for (; n = o[s++];)i = ue.propFix[n] || n, ue.expr.match.bool.test(n) ? Re && Oe || !$e.test(n) ? t[i] = !1 : t[ue.camelCase("default-" + n)] = t[i] = !1 : ue.attr(t, n, ""), t.removeAttribute(Oe ? n : i)
		}, attrHooks: {
			type: {
				set: function (t, e) {
					if (!ue.support.radioValue && "radio" === e && ue.nodeName(t, "input")) {
						var n = t.value;
						return t.setAttribute("type", e), n && (t.value = n), e
					}
				}
			}
		}, propFix: {"for": "htmlFor", "class": "className"}, prop: function (t, n, i) {
			var s, o, r, a = t.nodeType;
			if (t && 3 !== a && 8 !== a && 2 !== a)return r = 1 !== a || !ue.isXMLDoc(t), r && (n = ue.propFix[n] || n, o = ue.propHooks[n]), i !== e ? o && "set" in o && (s = o.set(t, i, n)) !== e ? s : t[n] = i : o && "get" in o && null !== (s = o.get(t, n)) ? s : t[n]
		}, propHooks: {
			tabIndex: {
				get: function (t) {
					var e = ue.find.attr(t, "tabindex");
					return e ? parseInt(e, 10) : Pe.test(t.nodeName) || Ie.test(t.nodeName) && t.href ? 0 : -1
				}
			}
		}
	}), Ne = {
		set: function (t, e, n) {
			return e === !1 ? ue.removeAttr(t, n) : Re && Oe || !$e.test(n) ? t.setAttribute(!Oe && ue.propFix[n] || n, n) : t[ue.camelCase("default-" + n)] = t[n] = !0, n
		}
	}, ue.each(ue.expr.match.bool.source.match(/\w+/g), function (t, n) {
		var i = ue.expr.attrHandle[n] || ue.find.attr;
		ue.expr.attrHandle[n] = Re && Oe || !$e.test(n) ? function (t, n, s) {
			var o = ue.expr.attrHandle[n],
				r = s ? e : (ue.expr.attrHandle[n] = e) != i(t, n, s) ? n.toLowerCase() : null;
			return ue.expr.attrHandle[n] = o, r
		} : function (t, n, i) {
			return i ? e : t[ue.camelCase("default-" + n)] ? n.toLowerCase() : null
		}
	}), Re && Oe || (ue.attrHooks.value = {
		set: function (t, e, n) {
			return ue.nodeName(t, "input") ? (t.defaultValue = e, void 0) : Ee && Ee.set(t, e, n)
		}
	}), Oe || (Ee = {
		set: function (t, n, i) {
			var s = t.getAttributeNode(i);
			return s || t.setAttributeNode(s = t.ownerDocument.createAttribute(i)), s.value = n += "", "value" === i || n === t.getAttribute(i) ? n : e
		}
	}, ue.expr.attrHandle.id = ue.expr.attrHandle.name = ue.expr.attrHandle.coords = function (t, n, i) {
		var s;
		return i ? e : (s = t.getAttributeNode(n)) && "" !== s.value ? s.value : null
	}, ue.valHooks.button = {
		get: function (t, n) {
			var i = t.getAttributeNode(n);
			return i && i.specified ? i.value : e
		}, set: Ee.set
	}, ue.attrHooks.contenteditable = {
		set: function (t, e, n) {
			Ee.set(t, "" === e ? !1 : e, n)
		}
	}, ue.each(["width", "height"], function (t, e) {
		ue.attrHooks[e] = {
			set: function (t, n) {
				return "" === n ? (t.setAttribute(e, "auto"), n) : void 0
			}
		}
	})), ue.support.hrefNormalized || ue.each(["href", "src"], function (t, e) {
		ue.propHooks[e] = {
			get: function (t) {
				return t.getAttribute(e, 4)
			}
		}
	}), ue.support.style || (ue.attrHooks.style = {
		get: function (t) {
			return t.style.cssText || e
		}, set: function (t, e) {
			return t.style.cssText = e + ""
		}
	}), ue.support.optSelected || (ue.propHooks.selected = {
		get: function (t) {
			var e = t.parentNode;
			return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
		}
	}), ue.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
		ue.propFix[this.toLowerCase()] = this
	}), ue.support.enctype || (ue.propFix.enctype = "encoding"), ue.each(["radio", "checkbox"], function () {
		ue.valHooks[this] = {
			set: function (t, e) {
				return ue.isArray(e) ? t.checked = ue.inArray(ue(t).val(), e) >= 0 : void 0
			}
		}, ue.support.checkOn || (ue.valHooks[this].get = function (t) {
			return null === t.getAttribute("value") ? "on" : t.value
		})
	});
	var Le = /^(?:input|select|textarea)$/i, je = /^key/, He = /^(?:mouse|contextmenu)|click/,
		Fe = /^(?:focusinfocus|focusoutblur)$/, We = /^([^.]*)(?:\.(.+)|)$/;
	ue.event = {
		global: {},
		add: function (t, n, i, s, o) {
			var r, a, l, c, u, d, h, p, f, g, m, y = ue._data(t);
			if (y) {
				for (i.handler && (c = i, i = c.handler, o = c.selector), i.guid || (i.guid = ue.guid++), (a = y.events) || (a = y.events = {}), (d = y.handle) || (d = y.handle = function (t) {
					return typeof ue === G || t && ue.event.triggered === t.type ? e : ue.event.dispatch.apply(d.elem, arguments)
				}, d.elem = t), n = (n || "").match(he) || [""], l = n.length; l--;)r = We.exec(n[l]) || [], f = m = r[1], g = (r[2] || "").split(".").sort(), f && (u = ue.event.special[f] || {}, f = (o ? u.delegateType : u.bindType) || f, u = ue.event.special[f] || {}, h = ue.extend({
					type: f,
					origType: m,
					data: s,
					handler: i,
					guid: i.guid,
					selector: o,
					needsContext: o && ue.expr.match.needsContext.test(o),
					namespace: g.join(".")
				}, c), (p = a[f]) || (p = a[f] = [], p.delegateCount = 0, u.setup && u.setup.call(t, s, g, d) !== !1 || (t.addEventListener ? t.addEventListener(f, d, !1) : t.attachEvent && t.attachEvent("on" + f, d))), u.add && (u.add.call(t, h), h.handler.guid || (h.handler.guid = i.guid)), o ? p.splice(p.delegateCount++, 0, h) : p.push(h), ue.event.global[f] = !0);
				t = null
			}
		},
		remove: function (t, e, n, i, s) {
			var o, r, a, l, c, u, d, h, p, f, g, m = ue.hasData(t) && ue._data(t);
			if (m && (u = m.events)) {
				for (e = (e || "").match(he) || [""], c = e.length; c--;)if (a = We.exec(e[c]) || [], p = g = a[1], f = (a[2] || "").split(".").sort(), p) {
					for (d = ue.event.special[p] || {}, p = (i ? d.delegateType : d.bindType) || p, h = u[p] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = h.length; o--;)r = h[o], !s && g !== r.origType || n && n.guid !== r.guid || a && !a.test(r.namespace) || i && i !== r.selector && ("**" !== i || !r.selector) || (h.splice(o, 1), r.selector && h.delegateCount--, d.remove && d.remove.call(t, r));
					l && !h.length && (d.teardown && d.teardown.call(t, f, m.handle) !== !1 || ue.removeEvent(t, p, m.handle), delete u[p])
				} else for (p in u)ue.event.remove(t, p + e[c], n, i, !0);
				ue.isEmptyObject(u) && (delete m.handle, ue._removeData(t, "events"))
			}
		},
		trigger: function (n, i, s, o) {
			var r, a, l, c, u, d, h, p = [s || Q], f = le.call(n, "type") ? n.type : n,
				g = le.call(n, "namespace") ? n.namespace.split(".") : [];
			if (l = d = s = s || Q, 3 !== s.nodeType && 8 !== s.nodeType && !Fe.test(f + ue.event.triggered) && (f.indexOf(".") >= 0 && (g = f.split("."), f = g.shift(), g.sort()), a = f.indexOf(":") < 0 && "on" + f, n = n[ue.expando] ? n : new ue.Event(f, "object" == typeof n && n), n.isTrigger = o ? 2 : 3, n.namespace = g.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = e, n.target || (n.target = s), i = null == i ? [n] : ue.makeArray(i, [n]), u = ue.event.special[f] || {}, o || !u.trigger || u.trigger.apply(s, i) !== !1)) {
				if (!o && !u.noBubble && !ue.isWindow(s)) {
					for (c = u.delegateType || f, Fe.test(c + f) || (l = l.parentNode); l; l = l.parentNode)p.push(l), d = l;
					d === (s.ownerDocument || Q) && p.push(d.defaultView || d.parentWindow || t)
				}
				for (h = 0; (l = p[h++]) && !n.isPropagationStopped();)n.type = h > 1 ? c : u.bindType || f, r = (ue._data(l, "events") || {})[n.type] && ue._data(l, "handle"), r && r.apply(l, i), r = a && l[a], r && ue.acceptData(l) && r.apply && r.apply(l, i) === !1 && n.preventDefault();
				if (n.type = f, !o && !n.isDefaultPrevented() && (!u._default || u._default.apply(p.pop(), i) === !1) && ue.acceptData(s) && a && s[f] && !ue.isWindow(s)) {
					d = s[a], d && (s[a] = null), ue.event.triggered = f;
					try {
						s[f]()
					} catch (m) {
					}
					ue.event.triggered = e, d && (s[a] = d)
				}
				return n.result
			}
		},
		dispatch: function (t) {
			t = ue.event.fix(t);
			var n, i, s, o, r, a = [], l = oe.call(arguments), c = (ue._data(this, "events") || {})[t.type] || [],
				u = ue.event.special[t.type] || {};
			if (l[0] = t, t.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, t) !== !1) {
				for (a = ue.event.handlers.call(this, t, c), n = 0; (o = a[n++]) && !t.isPropagationStopped();)for (t.currentTarget = o.elem, r = 0; (s = o.handlers[r++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(s.namespace)) && (t.handleObj = s, t.data = s.data, i = ((ue.event.special[s.origType] || {}).handle || s.handler).apply(o.elem, l), i !== e && (t.result = i) === !1 && (t.preventDefault(), t.stopPropagation()));
				return u.postDispatch && u.postDispatch.call(this, t), t.result
			}
		},
		handlers: function (t, n) {
			var i, s, o, r, a = [], l = n.delegateCount, c = t.target;
			if (l && c.nodeType && (!t.button || "click" !== t.type))for (; c != this; c = c.parentNode || this)if (1 === c.nodeType && (c.disabled !== !0 || "click" !== t.type)) {
				for (o = [], r = 0; l > r; r++)s = n[r], i = s.selector + " ", o[i] === e && (o[i] = s.needsContext ? ue(i, this).index(c) >= 0 : ue.find(i, this, null, [c]).length), o[i] && o.push(s);
				o.length && a.push({elem: c, handlers: o})
			}
			return l < n.length && a.push({elem: this, handlers: n.slice(l)}), a
		},
		fix: function (t) {
			if (t[ue.expando])return t;
			var e, n, i, s = t.type, o = t, r = this.fixHooks[s];
			for (r || (this.fixHooks[s] = r = He.test(s) ? this.mouseHooks : je.test(s) ? this.keyHooks : {}), i = r.props ? this.props.concat(r.props) : this.props, t = new ue.Event(o), e = i.length; e--;)n = i[e], t[n] = o[n];
			return t.target || (t.target = o.srcElement || Q), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, r.filter ? r.filter(t, o) : t
		},
		props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
		fixHooks: {},
		keyHooks: {
			props: "char charCode key keyCode".split(" "), filter: function (t, e) {
				return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
			}
		},
		mouseHooks: {
			props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function (t, n) {
				var i, s, o, r = n.button, a = n.fromElement;
				return null == t.pageX && null != n.clientX && (s = t.target.ownerDocument || Q, o = s.documentElement, i = s.body, t.pageX = n.clientX + (o && o.scrollLeft || i && i.scrollLeft || 0) - (o && o.clientLeft || i && i.clientLeft || 0), t.pageY = n.clientY + (o && o.scrollTop || i && i.scrollTop || 0) - (o && o.clientTop || i && i.clientTop || 0)), !t.relatedTarget && a && (t.relatedTarget = a === t.target ? n.toElement : a), t.which || r === e || (t.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), t
			}
		},
		special: {
			load: {noBubble: !0}, focus: {
				trigger: function () {
					if (this !== u() && this.focus)try {
						return this.focus(), !1
					} catch (t) {
					}
				}, delegateType: "focusin"
			}, blur: {
				trigger: function () {
					return this === u() && this.blur ? (this.blur(), !1) : void 0
				}, delegateType: "focusout"
			}, click: {
				trigger: function () {
					return ue.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
				}, _default: function (t) {
					return ue.nodeName(t.target, "a")
				}
			}, beforeunload: {
				postDispatch: function (t) {
					t.result !== e && (t.originalEvent.returnValue = t.result)
				}
			}
		},
		simulate: function (t, e, n, i) {
			var s = ue.extend(new ue.Event, n, {type: t, isSimulated: !0, originalEvent: {}});
			i ? ue.event.trigger(s, null, e) : ue.event.dispatch.call(e, s), s.isDefaultPrevented() && n.preventDefault()
		}
	}, ue.removeEvent = Q.removeEventListener ? function (t, e, n) {
		t.removeEventListener && t.removeEventListener(e, n, !1)
	} : function (t, e, n) {
		var i = "on" + e;
		t.detachEvent && (typeof t[i] === G && (t[i] = null), t.detachEvent(i, n))
	}, ue.Event = function (t, e) {
		return this instanceof ue.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || t.returnValue === !1 || t.getPreventDefault && t.getPreventDefault() ? l : c) : this.type = t, e && ue.extend(this, e), this.timeStamp = t && t.timeStamp || ue.now(), this[ue.expando] = !0, void 0) : new ue.Event(t, e)
	}, ue.Event.prototype = {
		isDefaultPrevented: c,
		isPropagationStopped: c,
		isImmediatePropagationStopped: c,
		preventDefault: function () {
			var t = this.originalEvent;
			this.isDefaultPrevented = l, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
		},
		stopPropagation: function () {
			var t = this.originalEvent;
			this.isPropagationStopped = l, t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
		},
		stopImmediatePropagation: function () {
			this.isImmediatePropagationStopped = l, this.stopPropagation()
		}
	}, ue.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function (t, e) {
		ue.event.special[t] = {
			delegateType: e, bindType: e, handle: function (t) {
				var n, i = this, s = t.relatedTarget, o = t.handleObj;
				return (!s || s !== i && !ue.contains(i, s)) && (t.type = o.origType, n = o.handler.apply(this, arguments), t.type = e), n
			}
		}
	}), ue.support.submitBubbles || (ue.event.special.submit = {
		setup: function () {
			return ue.nodeName(this, "form") ? !1 : (ue.event.add(this, "click._submit keypress._submit", function (t) {
				var n = t.target, i = ue.nodeName(n, "input") || ue.nodeName(n, "button") ? n.form : e;
				i && !ue._data(i, "submitBubbles") && (ue.event.add(i, "submit._submit", function (t) {
					t._submit_bubble = !0
				}), ue._data(i, "submitBubbles", !0))
			}), void 0)
		}, postDispatch: function (t) {
			t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && ue.event.simulate("submit", this.parentNode, t, !0))
		}, teardown: function () {
			return ue.nodeName(this, "form") ? !1 : (ue.event.remove(this, "._submit"), void 0)
		}
	}), ue.support.changeBubbles || (ue.event.special.change = {
		setup: function () {
			return Le.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ue.event.add(this, "propertychange._change", function (t) {
				"checked" === t.originalEvent.propertyName && (this._just_changed = !0)
			}), ue.event.add(this, "click._change", function (t) {
				this._just_changed && !t.isTrigger && (this._just_changed = !1), ue.event.simulate("change", this, t, !0)
			})), !1) : (ue.event.add(this, "beforeactivate._change", function (t) {
				var e = t.target;
				Le.test(e.nodeName) && !ue._data(e, "changeBubbles") && (ue.event.add(e, "change._change", function (t) {
					!this.parentNode || t.isSimulated || t.isTrigger || ue.event.simulate("change", this.parentNode, t, !0)
				}), ue._data(e, "changeBubbles", !0))
			}), void 0)
		}, handle: function (t) {
			var e = t.target;
			return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
		}, teardown: function () {
			return ue.event.remove(this, "._change"), !Le.test(this.nodeName)
		}
	}), ue.support.focusinBubbles || ue.each({focus: "focusin", blur: "focusout"}, function (t, e) {
		var n = 0, i = function (t) {
			ue.event.simulate(e, t.target, ue.event.fix(t), !0)
		};
		ue.event.special[e] = {
			setup: function () {
				0 === n++ && Q.addEventListener(t, i, !0)
			}, teardown: function () {
				0 === --n && Q.removeEventListener(t, i, !0)
			}
		}
	}), ue.fn.extend({
		on: function (t, n, i, s, o) {
			var r, a;
			if ("object" == typeof t) {
				"string" != typeof n && (i = i || n, n = e);
				for (r in t)this.on(r, n, i, t[r], o);
				return this
			}
			if (null == i && null == s ? (s = n, i = n = e) : null == s && ("string" == typeof n ? (s = i, i = e) : (s = i, i = n, n = e)), s === !1) s = c; else if (!s)return this;
			return 1 === o && (a = s, s = function (t) {
				return ue().off(t), a.apply(this, arguments)
			}, s.guid = a.guid || (a.guid = ue.guid++)), this.each(function () {
				ue.event.add(this, t, s, i, n)
			})
		}, one: function (t, e, n, i) {
			return this.on(t, e, n, i, 1)
		}, off: function (t, n, i) {
			var s, o;
			if (t && t.preventDefault && t.handleObj)return s = t.handleObj, ue(t.delegateTarget).off(s.namespace ? s.origType + "." + s.namespace : s.origType, s.selector, s.handler), this;
			if ("object" == typeof t) {
				for (o in t)this.off(o, n, t[o]);
				return this
			}
			return (n === !1 || "function" == typeof n) && (i = n, n = e), i === !1 && (i = c), this.each(function () {
				ue.event.remove(this, t, i, n)
			})
		}, trigger: function (t, e) {
			return this.each(function () {
				ue.event.trigger(t, e, this)
			})
		}, triggerHandler: function (t, e) {
			var n = this[0];
			return n ? ue.event.trigger(t, e, n, !0) : void 0
		}
	});
	var Ye = /^.[^:#\[\.,]*$/, qe = /^(?:parents|prev(?:Until|All))/, ze = ue.expr.match.needsContext,
		Be = {children: !0, contents: !0, next: !0, prev: !0};
	ue.fn.extend({
		find: function (t) {
			var e, n = [], i = this, s = i.length;
			if ("string" != typeof t)return this.pushStack(ue(t).filter(function () {
				for (e = 0; s > e; e++)if (ue.contains(i[e], this))return !0
			}));
			for (e = 0; s > e; e++)ue.find(t, i[e], n);
			return n = this.pushStack(s > 1 ? ue.unique(n) : n), n.selector = this.selector ? this.selector + " " + t : t, n
		}, has: function (t) {
			var e, n = ue(t, this), i = n.length;
			return this.filter(function () {
				for (e = 0; i > e; e++)if (ue.contains(this, n[e]))return !0
			})
		}, not: function (t) {
			return this.pushStack(h(this, t || [], !0))
		}, filter: function (t) {
			return this.pushStack(h(this, t || [], !1))
		}, is: function (t) {
			return !!h(this, "string" == typeof t && ze.test(t) ? ue(t) : t || [], !1).length
		}, closest: function (t, e) {
			for (var n, i = 0, s = this.length, o = [], r = ze.test(t) || "string" != typeof t ? ue(t, e || this.context) : 0; s > i; i++)for (n = this[i]; n && n !== e; n = n.parentNode)if (n.nodeType < 11 && (r ? r.index(n) > -1 : 1 === n.nodeType && ue.find.matchesSelector(n, t))) {
				n = o.push(n);
				break
			}
			return this.pushStack(o.length > 1 ? ue.unique(o) : o)
		}, index: function (t) {
			return t ? "string" == typeof t ? ue.inArray(this[0], ue(t)) : ue.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		}, add: function (t, e) {
			var n = "string" == typeof t ? ue(t, e) : ue.makeArray(t && t.nodeType ? [t] : t),
				i = ue.merge(this.get(), n);
			return this.pushStack(ue.unique(i))
		}, addBack: function (t) {
			return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
		}
	}), ue.each({
		parent: function (t) {
			var e = t.parentNode;
			return e && 11 !== e.nodeType ? e : null
		}, parents: function (t) {
			return ue.dir(t, "parentNode")
		}, parentsUntil: function (t, e, n) {
			return ue.dir(t, "parentNode", n)
		}, next: function (t) {
			return d(t, "nextSibling")
		}, prev: function (t) {
			return d(t, "previousSibling")
		}, nextAll: function (t) {
			return ue.dir(t, "nextSibling")
		}, prevAll: function (t) {
			return ue.dir(t, "previousSibling")
		}, nextUntil: function (t, e, n) {
			return ue.dir(t, "nextSibling", n)
		}, prevUntil: function (t, e, n) {
			return ue.dir(t, "previousSibling", n)
		}, siblings: function (t) {
			return ue.sibling((t.parentNode || {}).firstChild, t)
		}, children: function (t) {
			return ue.sibling(t.firstChild)
		}, contents: function (t) {
			return ue.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : ue.merge([], t.childNodes)
		}
	}, function (t, e) {
		ue.fn[t] = function (n, i) {
			var s = ue.map(this, e, n);
			return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (s = ue.filter(i, s)), this.length > 1 && (Be[t] || (s = ue.unique(s)), qe.test(t) && (s = s.reverse())), this.pushStack(s)
		}
	}), ue.extend({
		filter: function (t, e, n) {
			var i = e[0];
			return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? ue.find.matchesSelector(i, t) ? [i] : [] : ue.find.matches(t, ue.grep(e, function (t) {
				return 1 === t.nodeType
			}))
		}, dir: function (t, n, i) {
			for (var s = [], o = t[n]; o && 9 !== o.nodeType && (i === e || 1 !== o.nodeType || !ue(o).is(i));)1 === o.nodeType && s.push(o), o = o[n];
			return s
		}, sibling: function (t, e) {
			for (var n = []; t; t = t.nextSibling)1 === t.nodeType && t !== e && n.push(t);
			return n
		}
	});
	var Ue = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
		Ve = / jQuery\d+="(?:null|\d+)"/g, Ge = new RegExp("<(?:" + Ue + ")[\\s/>]", "i"), Ke = /^\s+/,
		Qe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Xe = /<([\w:]+)/,
		Ze = /<tbody/i, Je = /<|&#?\w+;/, tn = /<(?:script|style|link)/i, en = /^(?:checkbox|radio)$/i,
		nn = /checked\s*(?:[^=]|=\s*.checked.)/i, sn = /^$|\/(?:java|ecma)script/i, on = /^true\/(.*)/,
		rn = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, an = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			legend: [1, "<fieldset>", "</fieldset>"],
			area: [1, "<map>", "</map>"],
			param: [1, "<object>", "</object>"],
			thead: [1, "<table>", "</table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: ue.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
		}, ln = p(Q), cn = ln.appendChild(Q.createElement("div"));
	an.optgroup = an.option, an.tbody = an.tfoot = an.colgroup = an.caption = an.thead, an.th = an.td, ue.fn.extend({
		text: function (t) {
			return ue.access(this, function (t) {
				return t === e ? ue.text(this) : this.empty().append((this[0] && this[0].ownerDocument || Q).createTextNode(t))
			}, null, t, arguments.length)
		}, append: function () {
			return this.domManip(arguments, function (t) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var e = f(this, t);
					e.appendChild(t)
				}
			})
		}, prepend: function () {
			return this.domManip(arguments, function (t) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var e = f(this, t);
					e.insertBefore(t, e.firstChild)
				}
			})
		}, before: function () {
			return this.domManip(arguments, function (t) {
				this.parentNode && this.parentNode.insertBefore(t, this)
			})
		}, after: function () {
			return this.domManip(arguments, function (t) {
				this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
			})
		}, remove: function (t, e) {
			for (var n, i = t ? ue.filter(t, this) : this, s = 0; null != (n = i[s]); s++)e || 1 !== n.nodeType || ue.cleanData(_(n)), n.parentNode && (e && ue.contains(n.ownerDocument, n) && y(_(n, "script")), n.parentNode.removeChild(n));
			return this
		}, empty: function () {
			for (var t, e = 0; null != (t = this[e]); e++) {
				for (1 === t.nodeType && ue.cleanData(_(t, !1)); t.firstChild;)t.removeChild(t.firstChild);
				t.options && ue.nodeName(t, "select") && (t.options.length = 0)
			}
			return this
		}, clone: function (t, e) {
			return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function () {
				return ue.clone(this, t, e)
			})
		}, html: function (t) {
			return ue.access(this, function (t) {
				var n = this[0] || {}, i = 0, s = this.length;
				if (t === e)return 1 === n.nodeType ? n.innerHTML.replace(Ve, "") : e;
				if (!("string" != typeof t || tn.test(t) || !ue.support.htmlSerialize && Ge.test(t) || !ue.support.leadingWhitespace && Ke.test(t) || an[(Xe.exec(t) || ["", ""])[1].toLowerCase()])) {
					t = t.replace(Qe, "<$1></$2>");
					try {
						for (; s > i; i++)n = this[i] || {}, 1 === n.nodeType && (ue.cleanData(_(n, !1)), n.innerHTML = t);
						n = 0
					} catch (o) {
					}
				}
				n && this.empty().append(t)
			}, null, t, arguments.length)
		}, replaceWith: function () {
			var t = ue.map(this, function (t) {
				return [t.nextSibling, t.parentNode]
			}), e = 0;
			return this.domManip(arguments, function (n) {
				var i = t[e++], s = t[e++];
				s && (i && i.parentNode !== s && (i = this.nextSibling), ue(this).remove(), s.insertBefore(n, i))
			}, !0), e ? this : this.remove()
		}, detach: function (t) {
			return this.remove(t, !0)
		}, domManip: function (t, e, n) {
			t = ie.apply([], t);
			var i, s, o, r, a, l, c = 0, u = this.length, d = this, h = u - 1, p = t[0], f = ue.isFunction(p);
			if (f || !(1 >= u || "string" != typeof p || ue.support.checkClone) && nn.test(p))return this.each(function (i) {
				var s = d.eq(i);
				f && (t[0] = p.call(this, i, s.html())), s.domManip(t, e, n)
			});
			if (u && (l = ue.buildFragment(t, this[0].ownerDocument, !1, !n && this), i = l.firstChild, 1 === l.childNodes.length && (l = i), i)) {
				for (r = ue.map(_(l, "script"), g), o = r.length; u > c; c++)s = l, c !== h && (s = ue.clone(s, !0, !0), o && ue.merge(r, _(s, "script"))), e.call(this[c], s, c);
				if (o)for (a = r[r.length - 1].ownerDocument, ue.map(r, m), c = 0; o > c; c++)s = r[c], sn.test(s.type || "") && !ue._data(s, "globalEval") && ue.contains(a, s) && (s.src ? ue._evalUrl(s.src) : ue.globalEval((s.text || s.textContent || s.innerHTML || "").replace(rn, "")));
				l = i = null
			}
			return this
		}
	}), ue.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function (t, e) {
		ue.fn[t] = function (t) {
			for (var n, i = 0, s = [], o = ue(t), r = o.length - 1; r >= i; i++)n = i === r ? this : this.clone(!0), ue(o[i])[e](n), se.apply(s, n.get());
			return this.pushStack(s)
		}
	}), ue.extend({
		clone: function (t, e, n) {
			var i, s, o, r, a, l = ue.contains(t.ownerDocument, t);
			if (ue.support.html5Clone || ue.isXMLDoc(t) || !Ge.test("<" + t.nodeName + ">") ? o = t.cloneNode(!0) : (cn.innerHTML = t.outerHTML, cn.removeChild(o = cn.firstChild)), !(ue.support.noCloneEvent && ue.support.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || ue.isXMLDoc(t)))for (i = _(o), a = _(t), r = 0; null != (s = a[r]); ++r)i[r] && b(s, i[r]);
			if (e)if (n)for (a = a || _(t), i = i || _(o), r = 0; null != (s = a[r]); r++)v(s, i[r]); else v(t, o);
			return i = _(o, "script"), i.length > 0 && y(i, !l && _(t, "script")), i = a = s = null, o
		}, buildFragment: function (t, e, n, i) {
			for (var s, o, r, a, l, c, u, d = t.length, h = p(e), f = [], g = 0; d > g; g++)if (o = t[g], o || 0 === o)if ("object" === ue.type(o)) ue.merge(f, o.nodeType ? [o] : o); else if (Je.test(o)) {
				for (a = a || h.appendChild(e.createElement("div")), l = (Xe.exec(o) || ["", ""])[1].toLowerCase(), u = an[l] || an._default, a.innerHTML = u[1] + o.replace(Qe, "<$1></$2>") + u[2], s = u[0]; s--;)a = a.lastChild;
				if (!ue.support.leadingWhitespace && Ke.test(o) && f.push(e.createTextNode(Ke.exec(o)[0])), !ue.support.tbody)for (o = "table" !== l || Ze.test(o) ? "<table>" !== u[1] || Ze.test(o) ? 0 : a : a.firstChild, s = o && o.childNodes.length; s--;)ue.nodeName(c = o.childNodes[s], "tbody") && !c.childNodes.length && o.removeChild(c);
				for (ue.merge(f, a.childNodes), a.textContent = ""; a.firstChild;)a.removeChild(a.firstChild);
				a = h.lastChild
			} else f.push(e.createTextNode(o));
			for (a && h.removeChild(a), ue.support.appendChecked || ue.grep(_(f, "input"), w), g = 0; o = f[g++];)if ((!i || -1 === ue.inArray(o, i)) && (r = ue.contains(o.ownerDocument, o), a = _(h.appendChild(o), "script"), r && y(a), n))for (s = 0; o = a[s++];)sn.test(o.type || "") && n.push(o);
			return a = null, h
		}, cleanData: function (t, e) {
			for (var n, i, s, o, r = 0, a = ue.expando, l = ue.cache, c = ue.support.deleteExpando, u = ue.event.special; null != (n = t[r]); r++)if ((e || ue.acceptData(n)) && (s = n[a], o = s && l[s])) {
				if (o.events)for (i in o.events)u[i] ? ue.event.remove(n, i) : ue.removeEvent(n, i, o.handle);
				l[s] && (delete l[s], c ? delete n[a] : typeof n.removeAttribute !== G ? n.removeAttribute(a) : n[a] = null, ee.push(s))
			}
		}, _evalUrl: function (t) {
			return ue.ajax({url: t, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
		}
	}), ue.fn.extend({
		wrapAll: function (t) {
			if (ue.isFunction(t))return this.each(function (e) {
				ue(this).wrapAll(t.call(this, e))
			});
			if (this[0]) {
				var e = ue(t, this[0].ownerDocument).eq(0).clone(!0);
				this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
					for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;)t = t.firstChild;
					return t
				}).append(this)
			}
			return this
		}, wrapInner: function (t) {
			return ue.isFunction(t) ? this.each(function (e) {
				ue(this).wrapInner(t.call(this, e))
			}) : this.each(function () {
				var e = ue(this), n = e.contents();
				n.length ? n.wrapAll(t) : e.append(t)
			})
		}, wrap: function (t) {
			var e = ue.isFunction(t);
			return this.each(function (n) {
				ue(this).wrapAll(e ? t.call(this, n) : t)
			})
		}, unwrap: function () {
			return this.parent().each(function () {
				ue.nodeName(this, "body") || ue(this).replaceWith(this.childNodes)
			}).end()
		}
	});
	var un, dn, hn, pn = /alpha\([^)]*\)/i, fn = /opacity\s*=\s*([^)]*)/, gn = /^(top|right|bottom|left)$/,
		mn = /^(none|table(?!-c[ea]).+)/, yn = /^margin/, vn = new RegExp("^(" + de + ")(.*)$", "i"),
		bn = new RegExp("^(" + de + ")(?!px)[a-z%]+$", "i"), _n = new RegExp("^([+-])=(" + de + ")", "i"),
		wn = {BODY: "block"}, xn = {position: "absolute", visibility: "hidden", display: "block"},
		Cn = {letterSpacing: 0, fontWeight: 400}, kn = ["Top", "Right", "Bottom", "Left"],
		Tn = ["Webkit", "O", "Moz", "ms"];
	ue.fn.extend({
		css: function (t, n) {
			return ue.access(this, function (t, n, i) {
				var s, o, r = {}, a = 0;
				if (ue.isArray(n)) {
					for (o = dn(t), s = n.length; s > a; a++)r[n[a]] = ue.css(t, n[a], !1, o);
					return r
				}
				return i !== e ? ue.style(t, n, i) : ue.css(t, n)
			}, t, n, arguments.length > 1)
		}, show: function () {
			return k(this, !0)
		}, hide: function () {
			return k(this)
		}, toggle: function (t) {
			return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
				C(this) ? ue(this).show() : ue(this).hide()
			})
		}
	}), ue.extend({
		cssHooks: {
			opacity: {
				get: function (t, e) {
					if (e) {
						var n = hn(t, "opacity");
						return "" === n ? "1" : n
					}
				}
			}
		},
		cssNumber: {
			columnCount: !0,
			fillOpacity: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {"float": ue.support.cssFloat ? "cssFloat" : "styleFloat"},
		style: function (t, n, i, s) {
			if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
				var o, r, a, l = ue.camelCase(n), c = t.style;
				if (n = ue.cssProps[l] || (ue.cssProps[l] = x(c, l)), a = ue.cssHooks[n] || ue.cssHooks[l], i === e)return a && "get" in a && (o = a.get(t, !1, s)) !== e ? o : c[n];
				if (r = typeof i, "string" === r && (o = _n.exec(i)) && (i = (o[1] + 1) * o[2] + parseFloat(ue.css(t, n)), r = "number"), !(null == i || "number" === r && isNaN(i) || ("number" !== r || ue.cssNumber[l] || (i += "px"), ue.support.clearCloneStyle || "" !== i || 0 !== n.indexOf("background") || (c[n] = "inherit"), a && "set" in a && (i = a.set(t, i, s)) === e)))try {
					c[n] = i
				} catch (u) {
				}
			}
		},
		css: function (t, n, i, s) {
			var o, r, a, l = ue.camelCase(n);
			return n = ue.cssProps[l] || (ue.cssProps[l] = x(t.style, l)), a = ue.cssHooks[n] || ue.cssHooks[l], a && "get" in a && (r = a.get(t, !0, i)), r === e && (r = hn(t, n, s)), "normal" === r && n in Cn && (r = Cn[n]), "" === i || i ? (o = parseFloat(r), i === !0 || ue.isNumeric(o) ? o || 0 : r) : r
		}
	}), t.getComputedStyle ? (dn = function (e) {
		return t.getComputedStyle(e, null)
	}, hn = function (t, n, i) {
		var s, o, r, a = i || dn(t), l = a ? a.getPropertyValue(n) || a[n] : e, c = t.style;
		return a && ("" !== l || ue.contains(t.ownerDocument, t) || (l = ue.style(t, n)), bn.test(l) && yn.test(n) && (s = c.width, o = c.minWidth, r = c.maxWidth, c.minWidth = c.maxWidth = c.width = l, l = a.width, c.width = s, c.minWidth = o, c.maxWidth = r)), l
	}) : Q.documentElement.currentStyle && (dn = function (t) {
			return t.currentStyle
		}, hn = function (t, n, i) {
			var s, o, r, a = i || dn(t), l = a ? a[n] : e, c = t.style;
			return null == l && c && c[n] && (l = c[n]), bn.test(l) && !gn.test(n) && (s = c.left, o = t.runtimeStyle, r = o && o.left, r && (o.left = t.currentStyle.left), c.left = "fontSize" === n ? "1em" : l, l = c.pixelLeft + "px", c.left = s, r && (o.left = r)), "" === l ? "auto" : l
		}), ue.each(["height", "width"], function (t, e) {
		ue.cssHooks[e] = {
			get: function (t, n, i) {
				return n ? 0 === t.offsetWidth && mn.test(ue.css(t, "display")) ? ue.swap(t, xn, function () {
					return D(t, e, i)
				}) : D(t, e, i) : void 0
			}, set: function (t, n, i) {
				var s = i && dn(t);
				return T(t, n, i ? S(t, e, i, ue.support.boxSizing && "border-box" === ue.css(t, "boxSizing", !1, s), s) : 0)
			}
		}
	}), ue.support.opacity || (ue.cssHooks.opacity = {
		get: function (t, e) {
			return fn.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
		}, set: function (t, e) {
			var n = t.style, i = t.currentStyle, s = ue.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
				o = i && i.filter || n.filter || "";
			n.zoom = 1, (e >= 1 || "" === e) && "" === ue.trim(o.replace(pn, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === e || i && !i.filter) || (n.filter = pn.test(o) ? o.replace(pn, s) : o + " " + s)
		}
	}), ue(function () {
		ue.support.reliableMarginRight || (ue.cssHooks.marginRight = {
			get: function (t, e) {
				return e ? ue.swap(t, {display: "inline-block"}, hn, [t, "marginRight"]) : void 0
			}
		}), !ue.support.pixelPosition && ue.fn.position && ue.each(["top", "left"], function (t, e) {
			ue.cssHooks[e] = {
				get: function (t, n) {
					return n ? (n = hn(t, e), bn.test(n) ? ue(t).position()[e] + "px" : n) : void 0
				}
			}
		})
	}), ue.expr && ue.expr.filters && (ue.expr.filters.hidden = function (t) {
		return t.offsetWidth <= 0 && t.offsetHeight <= 0 || !ue.support.reliableHiddenOffsets && "none" === (t.style && t.style.display || ue.css(t, "display"))
	}, ue.expr.filters.visible = function (t) {
		return !ue.expr.filters.hidden(t)
	}), ue.each({margin: "", padding: "", border: "Width"}, function (t, e) {
		ue.cssHooks[t + e] = {
			expand: function (n) {
				for (var i = 0, s = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++)s[t + kn[i] + e] = o[i] || o[i - 2] || o[0];
				return s
			}
		}, yn.test(t) || (ue.cssHooks[t + e].set = T)
	});
	var Sn = /%20/g, Dn = /\[\]$/, En = /\r?\n/g, Nn = /^(?:submit|button|image|reset|file)$/i,
		An = /^(?:input|select|textarea|keygen)/i;
	ue.fn.extend({
		serialize: function () {
			return ue.param(this.serializeArray())
		}, serializeArray: function () {
			return this.map(function () {
				var t = ue.prop(this, "elements");
				return t ? ue.makeArray(t) : this
			}).filter(function () {
				var t = this.type;
				return this.name && !ue(this).is(":disabled") && An.test(this.nodeName) && !Nn.test(t) && (this.checked || !en.test(t))
			}).map(function (t, e) {
				var n = ue(this).val();
				return null == n ? null : ue.isArray(n) ? ue.map(n, function (t) {
					return {name: e.name, value: t.replace(En, "\r\n")}
				}) : {name: e.name, value: n.replace(En, "\r\n")}
			}).get()
		}
	}), ue.param = function (t, n) {
		var i, s = [], o = function (t, e) {
			e = ue.isFunction(e) ? e() : null == e ? "" : e, s[s.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
		};
		if (n === e && (n = ue.ajaxSettings && ue.ajaxSettings.traditional), ue.isArray(t) || t.jquery && !ue.isPlainObject(t)) ue.each(t, function () {
			o(this.name, this.value)
		}); else for (i in t)A(i, t[i], n, o);
		return s.join("&").replace(Sn, "+")
	}, ue.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (t, e) {
		ue.fn[e] = function (t, n) {
			return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
		}
	}), ue.fn.extend({
		hover: function (t, e) {
			return this.mouseenter(t).mouseleave(e || t)
		}, bind: function (t, e, n) {
			return this.on(t, null, e, n)
		}, unbind: function (t, e) {
			return this.off(t, null, e)
		}, delegate: function (t, e, n, i) {
			return this.on(e, t, n, i)
		}, undelegate: function (t, e, n) {
			return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
		}
	});
	var Mn, Pn, In = ue.now(), $n = /\?/, On = /#.*$/, Rn = /([?&])_=[^&]*/, Ln = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
		jn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Hn = /^(?:GET|HEAD)$/, Fn = /^\/\//,
		Wn = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, Yn = ue.fn.load, qn = {}, zn = {}, Bn = "*/".concat("*");
	try {
		Pn = K.href
	} catch (Un) {
		Pn = Q.createElement("a"), Pn.href = "", Pn = Pn.href
	}
	Mn = Wn.exec(Pn.toLowerCase()) || [], ue.fn.load = function (t, n, i) {
		if ("string" != typeof t && Yn)return Yn.apply(this, arguments);
		var s, o, r, a = this, l = t.indexOf(" ");
		return l >= 0 && (s = t.slice(l, t.length), t = t.slice(0, l)), ue.isFunction(n) ? (i = n, n = e) : n && "object" == typeof n && (r = "POST"), a.length > 0 && ue.ajax({
			url: t,
			type: r,
			dataType: "html",
			data: n
		}).done(function (t) {
			o = arguments, a.html(s ? ue("<div>").append(ue.parseHTML(t)).find(s) : t)
		}).complete(i && function (t, e) {
				a.each(i, o || [t.responseText, e, t])
			}), this
	}, ue.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
		ue.fn[e] = function (t) {
			return this.on(e, t)
		}
	}), ue.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: Pn,
			type: "GET",
			isLocal: jn.test(Mn[1]),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": Bn,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {xml: /xml/, html: /html/, json: /json/},
			responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
			converters: {"* text": String, "text html": !0, "text json": ue.parseJSON, "text xml": ue.parseXML},
			flatOptions: {url: !0, context: !0}
		},
		ajaxSetup: function (t, e) {
			return e ? I(I(t, ue.ajaxSettings), e) : I(ue.ajaxSettings, t)
		},
		ajaxPrefilter: M(qn),
		ajaxTransport: M(zn),
		ajax: function (t, n) {
			function i(t, n, i, s) {
				var o, d, v, b, w, C = n;
				2 !== _ && (_ = 2, l && clearTimeout(l), u = e, a = s || "", x.readyState = t > 0 ? 4 : 0, o = t >= 200 && 300 > t || 304 === t, i && (b = $(h, x, i)), b = O(h, b, x, o), o ? (h.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (ue.lastModified[r] = w), w = x.getResponseHeader("etag"), w && (ue.etag[r] = w)), 204 === t || "HEAD" === h.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = b.state, d = b.data, v = b.error, o = !v)) : (v = C, (t || !C) && (C = "error", 0 > t && (t = 0))), x.status = t, x.statusText = (n || C) + "", o ? g.resolveWith(p, [d, C, x]) : g.rejectWith(p, [x, C, v]), x.statusCode(y), y = e, c && f.trigger(o ? "ajaxSuccess" : "ajaxError", [x, h, o ? d : v]), m.fireWith(p, [x, C]), c && (f.trigger("ajaxComplete", [x, h]), --ue.active || ue.event.trigger("ajaxStop")))
			}

			"object" == typeof t && (n = t, t = e), n = n || {};
			var s, o, r, a, l, c, u, d, h = ue.ajaxSetup({}, n), p = h.context || h,
				f = h.context && (p.nodeType || p.jquery) ? ue(p) : ue.event, g = ue.Deferred(),
				m = ue.Callbacks("once memory"), y = h.statusCode || {}, v = {}, b = {}, _ = 0, w = "canceled", x = {
					readyState: 0, getResponseHeader: function (t) {
						var e;
						if (2 === _) {
							if (!d)for (d = {}; e = Ln.exec(a);)d[e[1].toLowerCase()] = e[2];
							e = d[t.toLowerCase()]
						}
						return null == e ? null : e
					}, getAllResponseHeaders: function () {
						return 2 === _ ? a : null
					}, setRequestHeader: function (t, e) {
						var n = t.toLowerCase();
						return _ || (t = b[n] = b[n] || t, v[t] = e), this
					}, overrideMimeType: function (t) {
						return _ || (h.mimeType = t), this
					}, statusCode: function (t) {
						var e;
						if (t)if (2 > _)for (e in t)y[e] = [y[e], t[e]]; else x.always(t[x.status]);
						return this
					}, abort: function (t) {
						var e = t || w;
						return u && u.abort(e), i(0, e), this
					}
				};
			if (g.promise(x).complete = m.add, x.success = x.done, x.error = x.fail, h.url = ((t || h.url || Pn) + "").replace(On, "").replace(Fn, Mn[1] + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = ue.trim(h.dataType || "*").toLowerCase().match(he) || [""], null == h.crossDomain && (s = Wn.exec(h.url.toLowerCase()), h.crossDomain = !(!s || s[1] === Mn[1] && s[2] === Mn[2] && (s[3] || ("http:" === s[1] ? "80" : "443")) === (Mn[3] || ("http:" === Mn[1] ? "80" : "443")))), h.data && h.processData && "string" != typeof h.data && (h.data = ue.param(h.data, h.traditional)), P(qn, h, n, x), 2 === _)return x;
			c = h.global, c && 0 === ue.active++ && ue.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Hn.test(h.type), r = h.url, h.hasContent || (h.data && (r = h.url += ($n.test(r) ? "&" : "?") + h.data, delete h.data), h.cache === !1 && (h.url = Rn.test(r) ? r.replace(Rn, "$1_=" + In++) : r + ($n.test(r) ? "&" : "?") + "_=" + In++)), h.ifModified && (ue.lastModified[r] && x.setRequestHeader("If-Modified-Since", ue.lastModified[r]), ue.etag[r] && x.setRequestHeader("If-None-Match", ue.etag[r])), (h.data && h.hasContent && h.contentType !== !1 || n.contentType) && x.setRequestHeader("Content-Type", h.contentType), x.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Bn + "; q=0.01" : "") : h.accepts["*"]);
			for (o in h.headers)x.setRequestHeader(o, h.headers[o]);
			if (h.beforeSend && (h.beforeSend.call(p, x, h) === !1 || 2 === _))return x.abort();
			w = "abort";
			for (o in{success: 1, error: 1, complete: 1})x[o](h[o]);
			if (u = P(zn, h, n, x)) {
				x.readyState = 1, c && f.trigger("ajaxSend", [x, h]), h.async && h.timeout > 0 && (l = setTimeout(function () {
					x.abort("timeout")
				}, h.timeout));
				try {
					_ = 1, u.send(v, i)
				} catch (C) {
					if (!(2 > _))throw C;
					i(-1, C)
				}
			} else i(-1, "No Transport");
			return x
		},
		getJSON: function (t, e, n) {
			return ue.get(t, e, n, "json")
		},
		getScript: function (t, n) {
			return ue.get(t, e, n, "script")
		}
	}), ue.each(["get", "post"], function (t, n) {
		ue[n] = function (t, i, s, o) {
			return ue.isFunction(i) && (o = o || s, s = i, i = e), ue.ajax({
				url: t,
				type: n,
				dataType: o,
				data: i,
				success: s
			})
		}
	}), ue.ajaxSetup({
		accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
		contents: {script: /(?:java|ecma)script/},
		converters: {
			"text script": function (t) {
				return ue.globalEval(t), t
			}
		}
	}), ue.ajaxPrefilter("script", function (t) {
		t.cache === e && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
	}), ue.ajaxTransport("script", function (t) {
		if (t.crossDomain) {
			var n, i = Q.head || ue("head")[0] || Q.documentElement;
			return {
				send: function (e, s) {
					n = Q.createElement("script"), n.async = !0, t.scriptCharset && (n.charset = t.scriptCharset), n.src = t.url, n.onload = n.onreadystatechange = function (t, e) {
						(e || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, e || s(200, "success"))
					}, i.insertBefore(n, i.firstChild)
				}, abort: function () {
					n && n.onload(e, !0)
				}
			}
		}
	});
	var Vn = [], Gn = /(=)\?(?=&|$)|\?\?/;
	ue.ajaxSetup({
		jsonp: "callback", jsonpCallback: function () {
			var t = Vn.pop() || ue.expando + "_" + In++;
			return this[t] = !0, t
		}
	}), ue.ajaxPrefilter("json jsonp", function (n, i, s) {
		var o, r, a,
			l = n.jsonp !== !1 && (Gn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Gn.test(n.data) && "data");
		return l || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = ue.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, l ? n[l] = n[l].replace(Gn, "$1" + o) : n.jsonp !== !1 && (n.url += ($n.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function () {
			return a || ue.error(o + " was not called"), a[0]
		}, n.dataTypes[0] = "json", r = t[o], t[o] = function () {
			a = arguments
		}, s.always(function () {
			t[o] = r, n[o] && (n.jsonpCallback = i.jsonpCallback, Vn.push(o)), a && ue.isFunction(r) && r(a[0]), a = r = e
		}), "script") : void 0
	});
	var Kn, Qn, Xn = 0, Zn = t.ActiveXObject && function () {
			var t;
			for (t in Kn)Kn[t](e, !0)
		};
	ue.ajaxSettings.xhr = t.ActiveXObject ? function () {
		return !this.isLocal && R() || L()
	} : R, Qn = ue.ajaxSettings.xhr(), ue.support.cors = !!Qn && "withCredentials" in Qn, Qn = ue.support.ajax = !!Qn, Qn && ue.ajaxTransport(function (n) {
		if (!n.crossDomain || ue.support.cors) {
			var i;
			return {
				send: function (s, o) {
					var r, a, l = n.xhr();
					if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields)for (a in n.xhrFields)l[a] = n.xhrFields[a];
					n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || s["X-Requested-With"] || (s["X-Requested-With"] = "XMLHttpRequest");
					try {
						for (a in s)l.setRequestHeader(a, s[a])
					} catch (c) {
					}
					l.send(n.hasContent && n.data || null), i = function (t, s) {
						var a, c, u, d;
						try {
							if (i && (s || 4 === l.readyState))if (i = e, r && (l.onreadystatechange = ue.noop, Zn && delete Kn[r]), s) 4 !== l.readyState && l.abort(); else {
								d = {}, a = l.status, c = l.getAllResponseHeaders(), "string" == typeof l.responseText && (d.text = l.responseText);
								try {
									u = l.statusText
								} catch (h) {
									u = ""
								}
								a || !n.isLocal || n.crossDomain ? 1223 === a && (a = 204) : a = d.text ? 200 : 404
							}
						} catch (p) {
							s || o(-1, p)
						}
						d && o(a, u, d, c)
					}, n.async ? 4 === l.readyState ? setTimeout(i) : (r = ++Xn, Zn && (Kn || (Kn = {}, ue(t).unload(Zn)), Kn[r] = i), l.onreadystatechange = i) : i()
				}, abort: function () {
					i && i(e, !0)
				}
			}
		}
	});
	var Jn, ti, ei = /^(?:toggle|show|hide)$/, ni = new RegExp("^(?:([+-])=|)(" + de + ")([a-z%]*)$", "i"),
		ii = /queueHooks$/, si = [Y], oi = {
			"*": [function (t, e) {
				var n = this.createTween(t, e), i = n.cur(), s = ni.exec(e), o = s && s[3] || (ue.cssNumber[t] ? "" : "px"),
					r = (ue.cssNumber[t] || "px" !== o && +i) && ni.exec(ue.css(n.elem, t)), a = 1, l = 20;
				if (r && r[3] !== o) {
					o = o || r[3], s = s || [], r = +i || 1;
					do a = a || ".5", r /= a, ue.style(n.elem, t, r + o); while (a !== (a = n.cur() / i) && 1 !== a && --l)
				}
				return s && (r = n.start = +r || +i || 0, n.unit = o, n.end = s[1] ? r + (s[1] + 1) * s[2] : +s[2]), n
			}]
		};
	ue.Animation = ue.extend(F, {
		tweener: function (t, e) {
			ue.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
			for (var n, i = 0, s = t.length; s > i; i++)n = t[i], oi[n] = oi[n] || [], oi[n].unshift(e)
		}, prefilter: function (t, e) {
			e ? si.unshift(t) : si.push(t)
		}
	}), ue.Tween = q, q.prototype = {
		constructor: q, init: function (t, e, n, i, s, o) {
			this.elem = t, this.prop = n, this.easing = s || "swing", this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = o || (ue.cssNumber[n] ? "" : "px")
		}, cur: function () {
			var t = q.propHooks[this.prop];
			return t && t.get ? t.get(this) : q.propHooks._default.get(this)
		}, run: function (t) {
			var e, n = q.propHooks[this.prop];
			return this.pos = e = this.options.duration ? ue.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : q.propHooks._default.set(this), this
		}
	}, q.prototype.init.prototype = q.prototype, q.propHooks = {
		_default: {
			get: function (t) {
				var e;
				return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = ue.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
			}, set: function (t) {
				ue.fx.step[t.prop] ? ue.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[ue.cssProps[t.prop]] || ue.cssHooks[t.prop]) ? ue.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
			}
		}
	}, q.propHooks.scrollTop = q.propHooks.scrollLeft = {
		set: function (t) {
			t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
		}
	}, ue.each(["toggle", "show", "hide"], function (t, e) {
		var n = ue.fn[e];
		ue.fn[e] = function (t, i, s) {
			return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(z(e, !0), t, i, s)
		}
	}), ue.fn.extend({
		fadeTo: function (t, e, n, i) {
			return this.filter(C).css("opacity", 0).show().end().animate({opacity: e}, t, n, i)
		}, animate: function (t, e, n, i) {
			var s = ue.isEmptyObject(t), o = ue.speed(e, n, i), r = function () {
				var e = F(this, ue.extend({}, t), o);
				(s || ue._data(this, "finish")) && e.stop(!0)
			};
			return r.finish = r, s || o.queue === !1 ? this.each(r) : this.queue(o.queue, r)
		}, stop: function (t, n, i) {
			var s = function (t) {
				var e = t.stop;
				delete t.stop, e(i)
			};
			return "string" != typeof t && (i = n, n = t, t = e), n && t !== !1 && this.queue(t || "fx", []), this.each(function () {
				var e = !0, n = null != t && t + "queueHooks", o = ue.timers, r = ue._data(this);
				if (n) r[n] && r[n].stop && s(r[n]); else for (n in r)r[n] && r[n].stop && ii.test(n) && s(r[n]);
				for (n = o.length; n--;)o[n].elem !== this || null != t && o[n].queue !== t || (o[n].anim.stop(i), e = !1, o.splice(n, 1));
				(e || !i) && ue.dequeue(this, t)
			})
		}, finish: function (t) {
			return t !== !1 && (t = t || "fx"), this.each(function () {
				var e, n = ue._data(this), i = n[t + "queue"], s = n[t + "queueHooks"], o = ue.timers,
					r = i ? i.length : 0;
				for (n.finish = !0, ue.queue(this, t, []), s && s.stop && s.stop.call(this, !0), e = o.length; e--;)o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
				for (e = 0; r > e; e++)i[e] && i[e].finish && i[e].finish.call(this);
				delete n.finish
			})
		}
	}), ue.each({
		slideDown: z("show"),
		slideUp: z("hide"),
		slideToggle: z("toggle"),
		fadeIn: {opacity: "show"},
		fadeOut: {opacity: "hide"},
		fadeToggle: {opacity: "toggle"}
	}, function (t, e) {
		ue.fn[t] = function (t, n, i) {
			return this.animate(e, t, n, i)
		}
	}), ue.speed = function (t, e, n) {
		var i = t && "object" == typeof t ? ue.extend({}, t) : {
			complete: n || !n && e || ue.isFunction(t) && t,
			duration: t,
			easing: n && e || e && !ue.isFunction(e) && e
		};
		return i.duration = ue.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in ue.fx.speeds ? ue.fx.speeds[i.duration] : ue.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function () {
			ue.isFunction(i.old) && i.old.call(this), i.queue && ue.dequeue(this, i.queue)
		}, i
	}, ue.easing = {
		linear: function (t) {
			return t
		}, swing: function (t) {
			return .5 - Math.cos(t * Math.PI) / 2
		}
	}, ue.timers = [], ue.fx = q.prototype.init, ue.fx.tick = function () {
		var t, n = ue.timers, i = 0;
		for (Jn = ue.now(); i < n.length; i++)t = n[i], t() || n[i] !== t || n.splice(i--, 1);
		n.length || ue.fx.stop(), Jn = e
	}, ue.fx.timer = function (t) {
		t() && ue.timers.push(t) && ue.fx.start()
	}, ue.fx.interval = 13, ue.fx.start = function () {
		ti || (ti = setInterval(ue.fx.tick, ue.fx.interval))
	}, ue.fx.stop = function () {
		clearInterval(ti), ti = null
	}, ue.fx.speeds = {
		slow: 600,
		fast: 200,
		_default: 400
	}, ue.fx.step = {}, ue.expr && ue.expr.filters && (ue.expr.filters.animated = function (t) {
		return ue.grep(ue.timers, function (e) {
			return t === e.elem
		}).length
	}), ue.fn.offset = function (t) {
		if (arguments.length)return t === e ? this : this.each(function (e) {
			ue.offset.setOffset(this, t, e)
		});
		var n, i, s = {top: 0, left: 0}, o = this[0], r = o && o.ownerDocument;
		if (r)return n = r.documentElement, ue.contains(n, o) ? (typeof o.getBoundingClientRect !== G && (s = o.getBoundingClientRect()), i = B(r), {
			top: s.top + (i.pageYOffset || n.scrollTop) - (n.clientTop || 0),
			left: s.left + (i.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
		}) : s
	}, ue.offset = {
		setOffset: function (t, e, n) {
			var i = ue.css(t, "position");
			"static" === i && (t.style.position = "relative");
			var s, o, r = ue(t), a = r.offset(), l = ue.css(t, "top"), c = ue.css(t, "left"),
				u = ("absolute" === i || "fixed" === i) && ue.inArray("auto", [l, c]) > -1, d = {}, h = {};
			u ? (h = r.position(), s = h.top, o = h.left) : (s = parseFloat(l) || 0, o = parseFloat(c) || 0), ue.isFunction(e) && (e = e.call(t, n, a)), null != e.top && (d.top = e.top - a.top + s), null != e.left && (d.left = e.left - a.left + o), "using" in e ? e.using.call(t, d) : r.css(d)
		}
	}, ue.fn.extend({
		position: function () {
			if (this[0]) {
				var t, e, n = {top: 0, left: 0}, i = this[0];
				return "fixed" === ue.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), ue.nodeName(t[0], "html") || (n = t.offset()), n.top += ue.css(t[0], "borderTopWidth", !0), n.left += ue.css(t[0], "borderLeftWidth", !0)), {
					top: e.top - n.top - ue.css(i, "marginTop", !0),
					left: e.left - n.left - ue.css(i, "marginLeft", !0)
				}
			}
		}, offsetParent: function () {
			return this.map(function () {
				for (var t = this.offsetParent || X; t && !ue.nodeName(t, "html") && "static" === ue.css(t, "position");)t = t.offsetParent;
				return t || X
			})
		}
	}), ue.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, n) {
		var i = /Y/.test(n);
		ue.fn[t] = function (s) {
			return ue.access(this, function (t, s, o) {
				var r = B(t);
				return o === e ? r ? n in r ? r[n] : r.document.documentElement[s] : t[s] : (r ? r.scrollTo(i ? ue(r).scrollLeft() : o, i ? o : ue(r).scrollTop()) : t[s] = o, void 0)
			}, t, s, arguments.length, null)
		}
	}), ue.each({Height: "height", Width: "width"}, function (t, n) {
		ue.each({padding: "inner" + t, content: n, "": "outer" + t}, function (i, s) {
			ue.fn[s] = function (s, o) {
				var r = arguments.length && (i || "boolean" != typeof s),
					a = i || (s === !0 || o === !0 ? "margin" : "border");
				return ue.access(this, function (n, i, s) {
					var o;
					return ue.isWindow(n) ? n.document.documentElement["client" + t] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + t], o["scroll" + t], n.body["offset" + t], o["offset" + t], o["client" + t])) : s === e ? ue.css(n, i, a) : ue.style(n, i, s, a)
				}, n, r ? s : e, r, null)
			}
		})
	}), ue.fn.size = function () {
		return this.length
	}, ue.fn.andSelf = ue.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = ue : (t.jQuery = t.$ = ue, "function" == typeof define && define.amd && define("jquery", [], function () {
		return ue
	}))
}(window), !function (t) {
	"use strict";
	t.extend({
		tablesorter: new function () {
			function e() {
				var t = arguments[0], e = arguments.length > 1 ? Array.prototype.slice.call(arguments) : t;
				"undefined" != typeof console && "undefined" != typeof console.log ? console[/error/i.test(t) ? "error" : /warn/i.test(t) ? "warn" : "log"](e) : alert(e)
			}

			function n(t, n) {
				e(t + " (" + ((new Date).getTime() - n.getTime()) + "ms)")
			}

			function i(t) {
				for (var e in t)return !1;
				return !0
			}

			function s(e, n, i) {
				if (!n)return "";
				var s, o = e.config, r = o.textExtraction || "", a = "";
				return a = "basic" === r ? t(n).attr(o.textAttribute) || n.textContent || n.innerText || t(n).text() || "" : "function" == typeof r ? r(n, e, i) : "function" == typeof(s = x.getColumnData(e, r, i)) ? s(n, e, i) : n.textContent || n.innerText || t(n).text() || "", t.trim(a)
			}

			function o(n, i, o, r) {
				for (var a, l, c = x.parsers.length, u = !1, d = "", h = !0; "" === d && h;)o++, i[o] ? (u = i[o].cells[r], d = s(n, u, r), l = t(u), n.config.debug && e("Checking if value was empty on row " + o + ", column: " + r + ': "' + d + '"')) : h = !1;
				for (; --c >= 0;)if (a = x.parsers[c], a && "text" !== a.id && a.is && a.is(d, n, u, l))return a;
				return x.getParserById("text")
			}

			function r(t) {
				var i, s, r, a, l, c, u, d, h, p, f = t.config,
					g = f.$tbodies = f.$table.children("tbody:not(." + f.cssInfoBlock + ")"), m = 0, y = "",
					v = g.length;
				if (0 === v)return f.debug ? e("Warning: *Empty table!* Not building a parser cache") : "";
				for (f.debug && (p = new Date, e("Detecting parsers for each column")), s = {
					extractors: [],
					parsers: []
				}; v > m;) {
					if (i = g[m].rows, i[m])for (r = f.columns, a = 0; r > a; a++)l = f.$headers.filter('[data-column="' + a + '"]:last'), c = x.getColumnData(t, f.headers, a), h = x.getParserById(x.getData(l, c, "extractor")), d = x.getParserById(x.getData(l, c, "sorter")), u = "false" === x.getData(l, c, "parser"), f.empties[a] = (x.getData(l, c, "empty") || f.emptyTo || (f.emptyToBottom ? "bottom" : "top")).toLowerCase(), f.strings[a] = (x.getData(l, c, "string") || f.stringTo || "max").toLowerCase(), u && (d = x.getParserById("no-parser")), h || (h = !1), d || (d = o(t, i, -1, a)), f.debug && (y += "column:" + a + "; extractor:" + h.id + "; parser:" + d.id + "; string:" + f.strings[a] + "; empty: " + f.empties[a] + "\n"), s.parsers[a] = d, s.extractors[a] = h;
					m += s.parsers.length ? v : 1
				}
				f.debug && (e(y ? y : "No parsers detected"), n("Completed detecting parsers", p)), f.parsers = s.parsers, f.extractors = s.extractors
			}

			function a(i) {
				var o, r, a, l, c, u, d, h, p, f, g, m, y, v, b = i.config, _ = b.$table.children("tbody"),
					w = b.extractors, C = b.parsers;
				if (b.cache = {}, b.totalRows = 0, !C)return b.debug ? e("Warning: *Empty table!* Not building a cache") : "";
				for (b.debug && (g = new Date), b.showProcessing && x.isProcessing(i, !0), d = 0; d < _.length; d++)if (v = [], o = b.cache[d] = {normalized: []}, !_.eq(d).hasClass(b.cssInfoBlock)) {
					for (m = _[d] && _[d].rows.length || 0, c = 0; m > c; ++c)if (y = {child: []}, h = t(_[d].rows[c]), p = [new Array(b.columns)], f = [], h.hasClass(b.cssChildRow) && 0 !== c) r = o.normalized.length - 1, o.normalized[r][b.columns].$row = o.normalized[r][b.columns].$row.add(h), h.prev().hasClass(b.cssChildRow) || h.prev().addClass(x.css.cssHasChild), y.child[r] = t.trim(h[0].textContent || h[0].innerText || h.text() || ""); else {
						for (y.$row = h, y.order = c, u = 0; u < b.columns; ++u)"undefined" != typeof C[u] ? (r = s(i, h[0].cells[u], u), a = "undefined" == typeof w[u].id ? r : w[u].format(r, i, h[0].cells[u], u), l = "no-parser" === C[u].id ? "" : C[u].format(a, i, h[0].cells[u], u), f.push(b.ignoreCase && "string" == typeof l ? l.toLowerCase() : l), "numeric" === (C[u].type || "").toLowerCase() && (v[u] = Math.max(Math.abs(l) || 0, v[u] || 0))) : b.debug && e("No parser found for cell:", h[0].cells[u], "does it have a header?");
						f[b.columns] = y, o.normalized.push(f)
					}
					o.colMax = v, b.totalRows += o.normalized.length
				}
				b.showProcessing && x.isProcessing(i), b.debug && n("Building cache for " + m + " rows", g)
			}

			function l(e, s) {
				var o, r, a, l, c, u, d, h = e.config, p = h.widgetOptions, f = e.tBodies, g = [], m = h.cache;
				if (i(m))return h.appender ? h.appender(e, g) : e.isUpdating ? h.$table.trigger("updateComplete", e) : "";
				for (h.debug && (d = new Date), u = 0; u < f.length; u++)if (a = t(f[u]), a.length && !a.hasClass(h.cssInfoBlock)) {
					for (l = x.processTbody(e, a, !0), o = m[u].normalized, r = o.length, c = 0; r > c; c++)g.push(o[c][h.columns].$row), h.appender && (!h.pager || h.pager.removeRows && p.pager_removeRows || h.pager.ajax) || l.append(o[c][h.columns].$row);
					x.processTbody(e, l, !1)
				}
				h.appender && h.appender(e, g), h.debug && n("Rebuilt table", d), s || h.appender || x.applyWidget(e), e.isUpdating && h.$table.trigger("updateComplete", e)
			}

			function c(t) {
				return /^d/i.test(t) || 1 === t
			}

			function u(i) {
				var s, o, r, a, l, u, d, p = i.config;
				p.headerList = [], p.headerContent = [], p.debug && (d = new Date), p.columns = x.computeColumnIndex(p.$table.children("thead, tfoot").children("tr")), a = p.cssIcon ? '<i class="' + (p.cssIcon === x.css.icon ? x.css.icon : p.cssIcon + " " + x.css.icon) + '"></i>' : "", p.$headers = t(t.map(t(i).find(p.selectorHeaders), function (e, n) {
					return o = t(e), o.parent().hasClass(p.cssIgnoreRow) ? void 0 : (s = x.getColumnData(i, p.headers, n, !0), p.headerContent[n] = o.html(), "" !== p.headerTemplate && (l = p.headerTemplate.replace(/\{content\}/g, o.html()).replace(/\{icon\}/g, a), p.onRenderTemplate && (r = p.onRenderTemplate.apply(o, [n, l]), r && "string" == typeof r && (l = r)), o.html('<div class="' + x.css.headerIn + '">' + l + "</div>")), p.onRenderHeader && p.onRenderHeader.apply(o, [n, p, p.$table]), e.column = parseInt(o.attr("data-column"), 10), e.order = c(x.getData(o, s, "sortInitialOrder") || p.sortInitialOrder) ? [1, 0, 2] : [0, 1, 2], e.count = -1, e.lockedOrder = !1, u = x.getData(o, s, "lockedOrder") || !1, "undefined" != typeof u && u !== !1 && (e.order = e.lockedOrder = c(u) ? [1, 1, 1] : [0, 0, 0]), o.addClass(x.css.header + " " + p.cssHeader), p.headerList[n] = e, o.parent().addClass(x.css.headerRow + " " + p.cssHeaderRow).attr("role", "row"), p.tabIndex && o.attr("tabindex", 0), e)
				})), t(i).find(p.selectorHeaders).attr({
					scope: "col",
					role: "columnheader"
				}), h(i), p.debug && (n("Built headers:", d), e(p.$headers))
			}

			function d(t, e, n) {
				var i = t.config;
				i.$table.find(i.selectorRemove).remove(), r(t), a(t), _(i.$table, e, n)
			}

			function h(e) {
				var n, i, s, o = e.config;
				o.$headers.each(function (r, a) {
					i = t(a), s = x.getColumnData(e, o.headers, r, !0), n = "false" === x.getData(a, s, "sorter") || "false" === x.getData(a, s, "parser"), a.sortDisabled = n, i[n ? "addClass" : "removeClass"]("sorter-false").attr("aria-disabled", "" + n), e.id && (n ? i.removeAttr("aria-controls") : i.attr("aria-controls", e.id))
				})
			}

			function p(e) {
				var n, i, s, o = e.config, r = o.sortList, a = r.length, l = x.css.sortNone + " " + o.cssNone,
					c = [x.css.sortAsc + " " + o.cssAsc, x.css.sortDesc + " " + o.cssDesc],
					u = [o.cssIconAsc, o.cssIconDesc, o.cssIconNone], d = ["ascending", "descending"],
					h = t(e).find("tfoot tr").children().add(o.$extraHeaders).removeClass(c.join(" "));
				for (o.$headers.removeClass(c.join(" ")).addClass(l).attr("aria-sort", "none").find("." + o.cssIcon).removeClass(u.join(" ")).addClass(u[2]), i = 0; a > i; i++)if (2 !== r[i][1] && (n = o.$headers.not(".sorter-false").filter('[data-column="' + r[i][0] + '"]' + (1 === a ? ":last" : "")), n.length)) {
					for (s = 0; s < n.length; s++)n[s].sortDisabled || n.eq(s).removeClass(l).addClass(c[r[i][1]]).attr("aria-sort", d[r[i][1]]).find("." + o.cssIcon).removeClass(u[2]).addClass(u[r[i][1]]);
					h.length && h.filter('[data-column="' + r[i][0] + '"]').removeClass(l).addClass(c[r[i][1]])
				}
				o.$headers.not(".sorter-false").each(function () {
					var e = t(this), n = this.order[(this.count + 1) % (o.sortReset ? 3 : 2)],
						i = e.text() + ": " + x.language[e.hasClass(x.css.sortAsc) ? "sortAsc" : e.hasClass(x.css.sortDesc) ? "sortDesc" : "sortNone"] + x.language[0 === n ? "nextAsc" : 1 === n ? "nextDesc" : "nextNone"];
					e.attr("aria-label", i)
				})
			}

			function f(e) {
				var n, i, s = e.config;
				s.widthFixed && 0 === s.$table.children("colgroup").length && (n = t("<colgroup>"), i = t(e).width(), t(e.tBodies).not("." + s.cssInfoBlock).find("tr:first").children(":visible").each(function () {
					n.append(t("<col>").css("width", parseInt(t(this).width() / i * 1e3, 10) / 10 + "%"))
				}), s.$table.prepend(n))
			}

			function g(e, n) {
				var i, s, o, r, a, l = e.config, c = n || l.sortList;
				l.sortList = [], t.each(c, function (e, n) {
					if (r = parseInt(n[0], 10), o = l.$headers.filter('[data-column="' + r + '"]:last')[0]) {
						switch (s = ("" + n[1]).match(/^(1|d|s|o|n)/), s = s ? s[0] : "") {
							case"1":
							case"d":
								s = 1;
								break;
							case"s":
								s = a || 0;
								break;
							case"o":
								i = o.order[(a || 0) % (l.sortReset ? 3 : 2)], s = 0 === i ? 1 : 1 === i ? 0 : 2;
								break;
							case"n":
								o.count = o.count + 1, s = o.order[o.count % (l.sortReset ? 3 : 2)];
								break;
							default:
								s = 0
						}
						a = 0 === e ? s : a, i = [r, parseInt(s, 10) || 0], l.sortList.push(i), s = t.inArray(i[1], o.order), o.count = s >= 0 ? s : i[1] % (l.sortReset ? 3 : 2)
					}
				})
			}

			function m(t, e) {
				return t && t[e] ? t[e].type || "" : ""
			}

			function y(e, n, i) {
				if (e.isUpdating)return setTimeout(function () {
					y(e, n, i)
				}, 50);
				var s, o, r, a, c, u = e.config, d = !i[u.sortMultiSortKey], h = u.$table;
				if (h.trigger("sortStart", e), n.count = i[u.sortResetKey] ? 2 : (n.count + 1) % (u.sortReset ? 3 : 2), u.sortRestart && (o = n, u.$headers.each(function () {
						this === o || !d && t(this).is("." + x.css.sortDesc + ",." + x.css.sortAsc) || (this.count = -1)
					})), o = parseInt(t(n).attr("data-column"), 10), d) {
					if (u.sortList = [], null !== u.sortForce)for (s = u.sortForce, r = 0; r < s.length; r++)s[r][0] !== o && u.sortList.push(s[r]);
					if (a = n.order[n.count], 2 > a && (u.sortList.push([o, a]), n.colSpan > 1))for (r = 1; r < n.colSpan; r++)u.sortList.push([o + r, a])
				} else {
					if (u.sortAppend && u.sortList.length > 1)for (r = 0; r < u.sortAppend.length; r++)c = x.isValueInArray(u.sortAppend[r][0], u.sortList), c >= 0 && u.sortList.splice(c, 1);
					if (x.isValueInArray(o, u.sortList) >= 0)for (r = 0; r < u.sortList.length; r++)c = u.sortList[r], a = u.$headers.filter('[data-column="' + c[0] + '"]:last')[0], c[0] === o && (c[1] = a.order[n.count], 2 === c[1] && (u.sortList.splice(r, 1), a.count = -1)); else if (a = n.order[n.count], 2 > a && (u.sortList.push([o, a]), n.colSpan > 1))for (r = 1; r < n.colSpan; r++)u.sortList.push([o + r, a])
				}
				if (null !== u.sortAppend)for (s = u.sortAppend, r = 0; r < s.length; r++)s[r][0] !== o && u.sortList.push(s[r]);
				h.trigger("sortBegin", e), setTimeout(function () {
					p(e), v(e), l(e), h.trigger("sortEnd", e)
				}, 1)
			}

			function v(t) {
				var e, s, o, r, a, l, c, u, d, h, p, f = 0, g = t.config, y = g.textSorter || "", v = g.sortList,
					b = v.length, _ = t.tBodies.length;
				if (!g.serverSideSorting && !i(g.cache)) {
					for (g.debug && (a = new Date), s = 0; _ > s; s++)l = g.cache[s].colMax, c = g.cache[s].normalized, c.sort(function (n, i) {
						for (e = 0; b > e; e++) {
							if (r = v[e][0], u = v[e][1], f = 0 === u, g.sortStable && n[r] === i[r] && 1 === b)return n[g.columns].order - i[g.columns].order;
							if (o = /n/i.test(m(g.parsers, r)), o && g.strings[r] ? (o = "boolean" == typeof g.string[g.strings[r]] ? (f ? 1 : -1) * (g.string[g.strings[r]] ? -1 : 1) : g.strings[r] ? g.string[g.strings[r]] || 0 : 0, d = g.numberSorter ? g.numberSorter(n[r], i[r], f, l[r], t) : x["sortNumeric" + (f ? "Asc" : "Desc")](n[r], i[r], o, l[r], r, t)) : (h = f ? n : i, p = f ? i : n, d = "function" == typeof y ? y(h[r], p[r], f, r, t) : "object" == typeof y && y.hasOwnProperty(r) ? y[r](h[r], p[r], f, r, t) : x["sortNatural" + (f ? "Asc" : "Desc")](n[r], i[r], r, t, g)), d)return d
						}
						return n[g.columns].order - i[g.columns].order
					});
					g.debug && n("Sorting on " + v.toString() + " and dir " + u + " time", a)
				}
			}

			function b(e, n) {
				var i = e[0];
				i.isUpdating && e.trigger("updateComplete", i), t.isFunction(n) && n(e[0])
			}

			function _(t, e, n) {
				var i = t[0].config.sortList;
				e !== !1 && !t[0].isProcessing && i.length ? t.trigger("sorton", [i, function () {
					b(t, n)
				}, !0]) : (b(t, n), x.applyWidget(t[0], !1))
			}

			function w(e) {
				var n = e.config, o = n.$table;
				o.unbind("sortReset update updateRows updateCell updateAll addRows updateComplete sorton appendCache updateCache applyWidgetId applyWidgets refreshWidgets destroy mouseup mouseleave ".split(" ").join(n.namespace + " ")).bind("sortReset" + n.namespace, function (i, s) {
					i.stopPropagation(), n.sortList = [], p(e), v(e), l(e), t.isFunction(s) && s(e)
				}).bind("updateAll" + n.namespace, function (t, i, s) {
					t.stopPropagation(), e.isUpdating = !0, x.refreshWidgets(e, !0, !0), x.restoreHeaders(e), u(e), x.bindEvents(e, n.$headers, !0), w(e), d(e, i, s)
				}).bind("update" + n.namespace + " updateRows" + n.namespace, function (t, n, i) {
					t.stopPropagation(), e.isUpdating = !0, h(e), d(e, n, i)
				}).bind("updateCell" + n.namespace, function (i, r, a, l) {
					i.stopPropagation(), e.isUpdating = !0, o.find(n.selectorRemove).remove();
					var c, u, d, h, p = o.find("tbody"), f = t(r),
						g = p.index(t.fn.closest ? f.closest("tbody") : f.parents("tbody").filter(":first")),
						m = t.fn.closest ? f.closest("tr") : f.parents("tr").filter(":first");
					r = f[0], p.length && g >= 0 && (d = p.eq(g).find("tr").index(m), h = f.index(), n.cache[g].normalized[d][n.columns].$row = m, u = "undefined" == typeof n.extractors[h].id ? s(e, r, h) : n.extractors[h].format(s(e, r, h), e, r, h), c = "no-parser" === n.parsers[h].id ? "" : n.parsers[h].format(u, e, r, h), n.cache[g].normalized[d][h] = n.ignoreCase && "string" == typeof c ? c.toLowerCase() : c, "numeric" === (n.parsers[h].type || "").toLowerCase() && (n.cache[g].colMax[h] = Math.max(Math.abs(c) || 0, n.cache[g].colMax[h] || 0)), _(o, a, l))
				}).bind("addRows" + n.namespace, function (a, l, c, u) {
					if (a.stopPropagation(), e.isUpdating = !0, i(n.cache)) h(e), d(e, c, u); else {
						l = t(l).attr("role", "row");
						var p, f, g, m, y, v, b, w = l.filter("tr").length,
							x = o.find("tbody").index(l.parents("tbody").filter(":first"));
						for (n.parsers && n.parsers.length || r(e), p = 0; w > p; p++) {
							for (g = l[p].cells.length, b = [], v = {
								child: [],
								$row: l.eq(p),
								order: n.cache[x].normalized.length
							}, f = 0; g > f; f++)m = "undefined" == typeof n.extractors[f].id ? s(e, l[p].cells[f], f) : n.extractors[f].format(s(e, l[p].cells[f], f), e, l[p].cells[f], f), y = "no-parser" === n.parsers[f].id ? "" : n.parsers[f].format(m, e, l[p].cells[f], f), b[f] = n.ignoreCase && "string" == typeof y ? y.toLowerCase() : y, "numeric" === (n.parsers[f].type || "").toLowerCase() && (n.cache[x].colMax[f] = Math.max(Math.abs(b[f]) || 0, n.cache[x].colMax[f] || 0));
							b.push(v), n.cache[x].normalized.push(b)
						}
						_(o, c, u)
					}
				}).bind("updateComplete" + n.namespace, function () {
					e.isUpdating = !1
				}).bind("sorton" + n.namespace, function (n, s, r, c) {
					var u = e.config;
					n.stopPropagation(), o.trigger("sortStart", this), g(e, s), p(e), u.delayInit && i(u.cache) && a(e), o.trigger("sortBegin", this), v(e), l(e, c), o.trigger("sortEnd", this), x.applyWidget(e), t.isFunction(r) && r(e)
				}).bind("appendCache" + n.namespace, function (n, i, s) {
					n.stopPropagation(), l(e, s), t.isFunction(i) && i(e)
				}).bind("updateCache" + n.namespace, function (i, s) {
					n.parsers && n.parsers.length || r(e), a(e), t.isFunction(s) && s(e)
				}).bind("applyWidgetId" + n.namespace, function (t, i) {
					t.stopPropagation(), x.getWidgetById(i).format(e, n, n.widgetOptions)
				}).bind("applyWidgets" + n.namespace, function (t, n) {
					t.stopPropagation(), x.applyWidget(e, n)
				}).bind("refreshWidgets" + n.namespace, function (t, n, i) {
					t.stopPropagation(), x.refreshWidgets(e, n, i)
				}).bind("destroy" + n.namespace, function (t, n, i) {
					t.stopPropagation(), x.destroy(e, n, i)
				}).bind("resetToLoadState" + n.namespace, function () {
					x.refreshWidgets(e, !0, !0), n = t.extend(!0, x.defaults, n.originalSettings), e.hasInitialized = !1, x.setup(e, n)
				})
			}

			var x = this;
			x.version = "2.18.4", x.parsers = [], x.widgets = [], x.defaults = {
				theme: "default",
				widthFixed: !1,
				showProcessing: !1,
				headerTemplate: "{content}",
				onRenderTemplate: null,
				onRenderHeader: null,
				cancelSelection: !0,
				tabIndex: !0,
				dateFormat: "mmddyyyy",
				sortMultiSortKey: "shiftKey",
				sortResetKey: "ctrlKey",
				usNumberFormat: !0,
				delayInit: !1,
				serverSideSorting: !1,
				headers: {},
				ignoreCase: !0,
				sortForce: null,
				sortList: [],
				sortAppend: null,
				sortStable: !1,
				sortInitialOrder: "asc",
				sortLocaleCompare: !1,
				sortReset: !1,
				sortRestart: !1,
				emptyTo: "bottom",
				stringTo: "max",
				textExtraction: "basic",
				textAttribute: "data-text",
				textSorter: null,
				numberSorter: null,
				widgets: [],
				widgetOptions: {zebra: ["even", "odd"]},
				initWidgets: !0,
				widgetClass: "widget-{name}",
				initialized: null,
				tableClass: "",
				cssAsc: "",
				cssDesc: "",
				cssNone: "",
				cssHeader: "",
				cssHeaderRow: "",
				cssProcessing: "",
				cssChildRow: "tablesorter-childRow",
				cssIcon: "tablesorter-icon",
				cssIconNone: "",
				cssIconAsc: "",
				cssIconDesc: "",
				cssInfoBlock: "tablesorter-infoOnly",
				cssAllowClicks: "tablesorter-allowClicks",
				cssIgnoreRow: "tablesorter-ignoreRow",
				selectorHeaders: "> thead th, > thead td",
				selectorSort: "th, td",
				selectorRemove: ".remove-me",
				debug: !1,
				headerList: [],
				empties: {},
				strings: {},
				parsers: []
			}, x.css = {
				table: "tablesorter",
				cssHasChild: "tablesorter-hasChildRow",
				childRow: "tablesorter-childRow",
				header: "tablesorter-header",
				headerRow: "tablesorter-headerRow",
				headerIn: "tablesorter-header-inner",
				icon: "tablesorter-icon",
				info: "tablesorter-infoOnly",
				processing: "tablesorter-processing",
				sortAsc: "tablesorter-headerAsc",
				sortDesc: "tablesorter-headerDesc",
				sortNone: "tablesorter-headerUnSorted"
			}, x.language = {
				sortAsc: "Ascending sort applied, ",
				sortDesc: "Descending sort applied, ",
				sortNone: "No sort applied, ",
				nextAsc: "activate to apply an ascending sort",
				nextDesc: "activate to apply a descending sort",
				nextNone: "activate to remove the sort"
			}, x.log = e, x.benchmark = n, x.construct = function (e) {
				return this.each(function () {
					var n = this, i = t.extend(!0, {}, x.defaults, e);
					i.originalSettings = e, !n.hasInitialized && x.buildTable && "TABLE" !== this.tagName ? x.buildTable(n, i) : x.setup(n, i)
				})
			}, x.setup = function (n, i) {
				if (!n || !n.tHead || 0 === n.tBodies.length || n.hasInitialized === !0)return i.debug ? e("ERROR: stopping initialization! No table, thead, tbody or tablesorter has already been initialized") : "";
				var s = "", o = t(n), l = t.metadata;
				n.hasInitialized = !1, n.isProcessing = !0, n.config = i, t.data(n, "tablesorter", i), i.debug && t.data(n, "startoveralltimer", new Date), i.supportsDataObject = function (t) {
					return t[0] = parseInt(t[0], 10), t[0] > 1 || 1 === t[0] && parseInt(t[1], 10) >= 4
				}(t.fn.jquery.split(".")), i.string = {
					max: 1,
					min: -1,
					emptymin: 1,
					emptymax: -1,
					zero: 0,
					none: 0,
					"null": 0,
					top: !0,
					bottom: !1
				}, i.emptyTo = i.emptyTo.toLowerCase(), i.stringTo = i.stringTo.toLowerCase(), /tablesorter\-/.test(o.attr("class")) || (s = "" !== i.theme ? " tablesorter-" + i.theme : ""), i.table = n, i.$table = o.addClass(x.css.table + " " + i.tableClass + s).attr("role", "grid"), i.$headers = o.find(i.selectorHeaders), i.namespace = i.namespace ? "." + i.namespace.replace(/\W/g, "") : ".tablesorter" + Math.random().toString(16).slice(2), i.$table.children().children("tr").attr("role", "row"), i.$tbodies = o.children("tbody:not(." + i.cssInfoBlock + ")").attr({
					"aria-live": "polite",
					"aria-relevant": "all"
				}), i.$table.children("caption").length && (s = i.$table.children("caption")[0], s.id || (s.id = i.namespace.slice(1) + "caption"), i.$table.attr("aria-labelledby", s.id)), i.widgetInit = {}, i.textExtraction = i.$table.attr("data-text-extraction") || i.textExtraction || "basic", u(n), f(n), r(n), i.totalRows = 0, i.delayInit || a(n), x.bindEvents(n, i.$headers, !0), w(n), i.supportsDataObject && "undefined" != typeof o.data().sortlist ? i.sortList = o.data().sortlist : l && o.metadata() && o.metadata().sortlist && (i.sortList = o.metadata().sortlist), x.applyWidget(n, !0), i.sortList.length > 0 ? o.trigger("sorton", [i.sortList, {}, !i.initWidgets, !0]) : (p(n), i.initWidgets && x.applyWidget(n, !1)), i.showProcessing && o.unbind("sortBegin" + i.namespace + " sortEnd" + i.namespace).bind("sortBegin" + i.namespace + " sortEnd" + i.namespace, function (t) {
					clearTimeout(i.processTimer), x.isProcessing(n), "sortBegin" === t.type && (i.processTimer = setTimeout(function () {
						x.isProcessing(n, !0)
					}, 500))
				}), n.hasInitialized = !0, n.isProcessing = !1, i.debug && x.benchmark("Overall initialization time", t.data(n, "startoveralltimer")), o.trigger("tablesorter-initialized", n), "function" == typeof i.initialized && i.initialized(n)
			}, x.getColumnData = function (e, n, i, s, o) {
				if ("undefined" != typeof n && null !== n) {
					e = t(e)[0];
					var r, a, l = e.config, c = o || l.$headers;
					if (n[i])return s ? n[i] : n[c.index(c.filter('[data-column="' + i + '"]:last'))];
					for (a in n)if ("string" == typeof a && (r = c.filter('[data-column="' + i + '"]:last').filter(a).add(c.filter('[data-column="' + i + '"]:last').find(a)), r.length))return n[a]
				}
			}, x.computeColumnIndex = function (e) {
				var n, i, s, o, r, a, l, c, u, d, h, p, f, g = [], m = {}, y = 0;
				for (n = 0; n < e.length; n++)for (l = e[n].cells, i = 0; i < l.length; i++) {
					for (a = l[i], r = t(a), c = a.parentNode.rowIndex, u = c + "-" + r.index(), d = a.rowSpan || 1, h = a.colSpan || 1, "undefined" == typeof g[c] && (g[c] = []), s = 0; s < g[c].length + 1; s++)if ("undefined" == typeof g[c][s]) {
						p = s;
						break
					}
					for (m[u] = p, y = Math.max(p, y), r.attr({"data-column": p}), s = c; c + d > s; s++)for ("undefined" == typeof g[s] && (g[s] = []), f = g[s], o = p; p + h > o; o++)f[o] = "x"
				}
				return y + 1
			}, x.isProcessing = function (e, n, i) {
				e = t(e);
				var s = e[0].config, o = i || e.find("." + x.css.header);
				n ? ("undefined" != typeof i && s.sortList.length > 0 && (o = o.filter(function () {
					return this.sortDisabled ? !1 : x.isValueInArray(parseFloat(t(this).attr("data-column")), s.sortList) >= 0
				})), e.add(o).addClass(x.css.processing + " " + s.cssProcessing)) : e.add(o).removeClass(x.css.processing + " " + s.cssProcessing)
			}, x.processTbody = function (e, n, i) {
				e = t(e)[0];
				var s;
				return i ? (e.isProcessing = !0, n.before('<span class="tablesorter-savemyplace"/>'), s = t.fn.detach ? n.detach() : n.remove()) : (s = t(e).find("span.tablesorter-savemyplace"), n.insertAfter(s), s.remove(), e.isProcessing = !1, void 0)
			}, x.clearTableBody = function (e) {
				t(e)[0].config.$tbodies.children().detach()
			}, x.bindEvents = function (e, n, s) {
				e = t(e)[0];
				var o, r = e.config;
				s !== !0 && (r.$extraHeaders = r.$extraHeaders ? r.$extraHeaders.add(n) : n), n.find(r.selectorSort).add(n.filter(r.selectorSort)).unbind("mousedown mouseup sort keyup ".split(" ").join(r.namespace + " ")).bind("mousedown mouseup sort keyup ".split(" ").join(r.namespace + " "), function (s, l) {
					var c, u = s.type;
					if (!(1 !== (s.which || s.button) && !/sort|keyup/.test(u) || "keyup" === u && 13 !== s.which || "mouseup" === u && l !== !0 && (new Date).getTime() - o > 250)) {
						if ("mousedown" === u)return o = (new Date).getTime(), /(input|select|button|textarea)/i.test(s.target.tagName) || t(s.target).closest("td,th").hasClass(r.cssAllowClicks) ? "" : !r.cancelSelection;
						r.delayInit && i(r.cache) && a(e), c = t.fn.closest ? t(this).closest("th, td")[0] : /TH|TD/.test(this.tagName) ? this : t(this).parents("th, td")[0], c = r.$headers[n.index(c)], c.sortDisabled || y(e, c, s)
					}
				}), r.cancelSelection && n.attr("unselectable", "on").bind("selectstart", !1).css({
					"user-select": "none",
					MozUserSelect: "none"
				})
			}, x.restoreHeaders = function (e) {
				var n = t(e)[0].config;
				n.$table.find(n.selectorHeaders).each(function (e) {
					t(this).find("." + x.css.headerIn).length && t(this).html(n.headerContent[e])
				})
			}, x.destroy = function (e, n, i) {
				if (e = t(e)[0], e.hasInitialized) {
					x.refreshWidgets(e, !0, !0);
					var s = t(e), o = e.config, r = s.find("thead:first"),
						a = r.find("tr." + x.css.headerRow).removeClass(x.css.headerRow + " " + o.cssHeaderRow),
						l = s.find("tfoot:first > tr").children("th, td");
					n === !1 && t.inArray("uitheme", o.widgets) >= 0 && (s.trigger("applyWidgetId", ["uitheme"]), s.trigger("applyWidgetId", ["zebra"])), r.find("tr").not(a).remove(), s.removeData("tablesorter").unbind("sortReset update updateAll updateRows updateCell addRows updateComplete sorton appendCache updateCache applyWidgetId applyWidgets refreshWidgets destroy mouseup mouseleave keypress sortBegin sortEnd resetToLoadState ".split(" ").join(o.namespace + " ")), o.$headers.add(l).removeClass([x.css.header, o.cssHeader, o.cssAsc, o.cssDesc, x.css.sortAsc, x.css.sortDesc, x.css.sortNone].join(" ")).removeAttr("data-column").removeAttr("aria-label").attr("aria-disabled", "true"), a.find(o.selectorSort).unbind("mousedown mouseup keypress ".split(" ").join(o.namespace + " ")), x.restoreHeaders(e), s.toggleClass(x.css.table + " " + o.tableClass + " tablesorter-" + o.theme, n === !1), e.hasInitialized = !1, delete e.config.cache, "function" == typeof i && i(e)
				}
			}, x.regex = {
				chunk: /(^([+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?)?$|^0x[0-9a-f]+$|\d+)/gi,
				chunks: /(^\\0|\\0$)/,
				hex: /^0x[0-9a-f]+$/i
			}, x.sortNatural = function (t, e) {
				if (t === e)return 0;
				var n, i, s, o, r, a, l, c, u = x.regex;
				if (u.hex.test(e)) {
					if (i = parseInt(t.match(u.hex), 16), o = parseInt(e.match(u.hex), 16), o > i)return -1;
					if (i > o)return 1
				}
				for (n = t.replace(u.chunk, "\\0$1\\0").replace(u.chunks, "").split("\\0"), s = e.replace(u.chunk, "\\0$1\\0").replace(u.chunks, "").split("\\0"), c = Math.max(n.length, s.length), l = 0; c > l; l++) {
					if (r = isNaN(n[l]) ? n[l] || 0 : parseFloat(n[l]) || 0, a = isNaN(s[l]) ? s[l] || 0 : parseFloat(s[l]) || 0, isNaN(r) !== isNaN(a))return isNaN(r) ? 1 : -1;
					if (typeof r != typeof a && (r += "", a += ""), a > r)return -1;
					if (r > a)return 1
				}
				return 0
			}, x.sortNaturalAsc = function (t, e, n, i, s) {
				if (t === e)return 0;
				var o = s.string[s.empties[n] || s.emptyTo];
				return "" === t && 0 !== o ? "boolean" == typeof o ? o ? -1 : 1 : -o || -1 : "" === e && 0 !== o ? "boolean" == typeof o ? o ? 1 : -1 : o || 1 : x.sortNatural(t, e)
			}, x.sortNaturalDesc = function (t, e, n, i, s) {
				if (t === e)return 0;
				var o = s.string[s.empties[n] || s.emptyTo];
				return "" === t && 0 !== o ? "boolean" == typeof o ? o ? -1 : 1 : o || 1 : "" === e && 0 !== o ? "boolean" == typeof o ? o ? 1 : -1 : -o || -1 : x.sortNatural(e, t)
			}, x.sortText = function (t, e) {
				return t > e ? 1 : e > t ? -1 : 0
			}, x.getTextValue = function (t, e, n) {
				if (n) {
					var i, s = t ? t.length : 0, o = n + e;
					for (i = 0; s > i; i++)o += t.charCodeAt(i);
					return e * o
				}
				return 0
			}, x.sortNumericAsc = function (t, e, n, i, s, o) {
				if (t === e)return 0;
				var r = o.config, a = r.string[r.empties[s] || r.emptyTo];
				return "" === t && 0 !== a ? "boolean" == typeof a ? a ? -1 : 1 : -a || -1 : "" === e && 0 !== a ? "boolean" == typeof a ? a ? 1 : -1 : a || 1 : (isNaN(t) && (t = x.getTextValue(t, n, i)), isNaN(e) && (e = x.getTextValue(e, n, i)), t - e)
			}, x.sortNumericDesc = function (t, e, n, i, s, o) {
				if (t === e)return 0;
				var r = o.config, a = r.string[r.empties[s] || r.emptyTo];
				return "" === t && 0 !== a ? "boolean" == typeof a ? a ? -1 : 1 : a || 1 : "" === e && 0 !== a ? "boolean" == typeof a ? a ? 1 : -1 : -a || -1 : (isNaN(t) && (t = x.getTextValue(t, n, i)), isNaN(e) && (e = x.getTextValue(e, n, i)), e - t)
			}, x.sortNumeric = function (t, e) {
				return t - e
			}, x.characterEquivalents = {
				a: "áàâãäąå",
				A: "ÁÀÂÃÄĄÅ",
				c: "çćč",
				C: "ÇĆČ",
				e: "éèêëěę",
				E: "ÉÈÊËĚĘ",
				i: "íìİîïı",
				I: "ÍÌİÎÏ",
				o: "óòôõö",
				O: "ÓÒÔÕÖ",
				ss: "ß",
				SS: "ẞ",
				u: "úùûüů",
				U: "ÚÙÛÜŮ"
			}, x.replaceAccents = function (t) {
				var e, n = "[", i = x.characterEquivalents;
				if (!x.characterRegex) {
					x.characterRegexArray = {};
					for (e in i)"string" == typeof e && (n += i[e], x.characterRegexArray[e] = new RegExp("[" + i[e] + "]", "g"));
					x.characterRegex = new RegExp(n + "]")
				}
				if (x.characterRegex.test(t))for (e in i)"string" == typeof e && (t = t.replace(x.characterRegexArray[e], e));
				return t
			}, x.isValueInArray = function (t, e) {
				var n, i = e.length;
				for (n = 0; i > n; n++)if (e[n][0] === t)return n;
				return -1
			}, x.addParser = function (t) {
				var e, n = x.parsers.length, i = !0;
				for (e = 0; n > e; e++)x.parsers[e].id.toLowerCase() === t.id.toLowerCase() && (i = !1);
				i && x.parsers.push(t)
			}, x.getParserById = function (t) {
				if ("false" == t)return !1;
				var e, n = x.parsers.length;
				for (e = 0; n > e; e++)if (x.parsers[e].id.toLowerCase() === t.toString().toLowerCase())return x.parsers[e];
				return !1
			}, x.addWidget = function (t) {
				x.widgets.push(t)
			}, x.hasWidget = function (e, n) {
				return e = t(e), e.length && e[0].config && e[0].config.widgetInit[n] || !1
			}, x.getWidgetById = function (t) {
				var e, n, i = x.widgets.length;
				for (e = 0; i > e; e++)if (n = x.widgets[e], n && n.hasOwnProperty("id") && n.id.toLowerCase() === t.toLowerCase())return n
			}, x.applyWidget = function (e, i) {
				e = t(e)[0];
				var s, o, r, a, l = e.config, c = l.widgetOptions, u = " " + l.table.className + " ", d = [];
				i !== !1 && e.hasInitialized && (e.isApplyingWidgets || e.isUpdating) || (l.debug && (s = new Date), a = new RegExp("\\s" + l.widgetClass.replace(/\{name\}/i, "([\\w-]+)") + "\\s", "g"), u.match(a) && (r = u.match(a), r && t.each(r, function (t, e) {
					l.widgets.push(e.replace(a, "$1"))
				})), l.widgets.length && (e.isApplyingWidgets = !0, l.widgets = t.grep(l.widgets, function (e, n) {
					return t.inArray(e, l.widgets) === n
				}), t.each(l.widgets || [], function (t, e) {
					a = x.getWidgetById(e), a && a.id && (a.priority || (a.priority = 10), d[t] = a)
				}), d.sort(function (t, e) {
					return t.priority < e.priority ? -1 : t.priority === e.priority ? 0 : 1
				}), t.each(d, function (n, s) {
					s && ((i || !l.widgetInit[s.id]) && (l.widgetInit[s.id] = !0, s.hasOwnProperty("options") && (c = e.config.widgetOptions = t.extend(!0, {}, s.options, c)), s.hasOwnProperty("init") && (l.debug && (o = new Date), s.init(e, s, l, c), l.debug && x.benchmark("Initializing " + s.id + " widget", o))), !i && s.hasOwnProperty("format") && (l.debug && (o = new Date), s.format(e, l, c, !1), l.debug && x.benchmark((i ? "Initializing " : "Applying ") + s.id + " widget", o)))
				})), setTimeout(function () {
					e.isApplyingWidgets = !1, t.data(e, "lastWidgetApplication", new Date)
				}, 0), l.debug && (r = l.widgets.length, n("Completed " + (i === !0 ? "initializing " : "applying ") + r + " widget" + (1 !== r ? "s" : ""), s)))
			}, x.refreshWidgets = function (n, i, s) {
				n = t(n)[0];
				var o, r = n.config, a = r.widgets, l = x.widgets, c = l.length;
				for (o = 0; c > o; o++)l[o] && l[o].id && (i || t.inArray(l[o].id, a) < 0) && (r.debug && e('Refeshing widgets: Removing "' + l[o].id + '"'), l[o].hasOwnProperty("remove") && r.widgetInit[l[o].id] && (l[o].remove(n, r, r.widgetOptions), r.widgetInit[l[o].id] = !1));
				s !== !0 && x.applyWidget(n, i)
			}, x.getData = function (e, n, i) {
				var s, o, r = "", a = t(e);
				return a.length ? (s = t.metadata ? a.metadata() : !1, o = " " + (a.attr("class") || ""), "undefined" != typeof a.data(i) || "undefined" != typeof a.data(i.toLowerCase()) ? r += a.data(i) || a.data(i.toLowerCase()) : s && "undefined" != typeof s[i] ? r += s[i] : n && "undefined" != typeof n[i] ? r += n[i] : " " !== o && o.match(" " + i + "-") && (r = o.match(new RegExp("\\s" + i + "-([\\w-]+)"))[1] || ""), t.trim(r)) : ""
			}, x.formatFloat = function (e, n) {
				if ("string" != typeof e || "" === e)return e;
				var i, s = n && n.config ? n.config.usNumberFormat !== !1 : "undefined" != typeof n ? n : !0;
				return e = s ? e.replace(/,/g, "") : e.replace(/[\s|\.]/g, "").replace(/,/g, "."), /^\s*\([.\d]+\)/.test(e) && (e = e.replace(/^\s*\(([.\d]+)\)/, "-$1")), i = parseFloat(e), isNaN(i) ? t.trim(e) : i
			}, x.isDigit = function (t) {
				return isNaN(t) ? /^[\-+(]?\d+[)]?$/.test(t.toString().replace(/[,.'"\s]/g, "")) : !0
			}
		}
	});
	var e = t.tablesorter;
	t.fn.extend({tablesorter: e.construct}), e.addParser({
		id: "no-parser", is: function () {
			return !1
		}, format: function () {
			return ""
		}, type: "text"
	}), e.addParser({
		id: "text", is: function () {
			return !0
		}, format: function (n, i) {
			var s = i.config;
			return n && (n = t.trim(s.ignoreCase ? n.toLocaleLowerCase() : n), n = s.sortLocaleCompare ? e.replaceAccents(n) : n), n
		}, type: "text"
	}), e.addParser({
		id: "digit", is: function (t) {
			return e.isDigit(t)
		}, format: function (n, i) {
			var s = e.formatFloat((n || "").replace(/[^\w,. \-()]/g, ""), i);
			return n && "number" == typeof s ? s : n ? t.trim(n && i.config.ignoreCase ? n.toLocaleLowerCase() : n) : n
		}, type: "numeric"
	}), e.addParser({
		id: "currency", is: function (t) {
			return /^\(?\d+[\u00a3$\u20ac\u00a4\u00a5\u00a2?.]|[\u00a3$\u20ac\u00a4\u00a5\u00a2?.]\d+\)?$/.test((t || "").replace(/[+\-,. ]/g, ""))
		}, format: function (n, i) {
			var s = e.formatFloat((n || "").replace(/[^\w,. \-()]/g, ""), i);
			return n && "number" == typeof s ? s : n ? t.trim(n && i.config.ignoreCase ? n.toLocaleLowerCase() : n) : n
		}, type: "numeric"
	}), e.addParser({
		id: "url", is: function (t) {
			return /^(https?|ftp|file):\/\//.test(t)
		}, format: function (e) {
			return e ? t.trim(e.replace(/(https?|ftp|file):\/\//, "")) : e
		}, parsed: !0, type: "text"
	}), e.addParser({
		id: "isoDate", is: function (t) {
			return /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}/.test(t)
		}, format: function (t) {
			var e = t ? new Date(t.replace(/-/g, "/")) : t;
			return e instanceof Date && isFinite(e) ? e.getTime() : t
		}, type: "numeric"
	}), e.addParser({
		id: "percent", is: function (t) {
			return /(\d\s*?%|%\s*?\d)/.test(t) && t.length < 15
		}, format: function (t, n) {
			return t ? e.formatFloat(t.replace(/%/g, ""), n) : t
		}, type: "numeric"
	}), e.addParser({
		id: "image", is: function (t, e, n, i) {
			return i.find("img").length > 0
		}, format: function (e, n, i) {
			return t(i).find("img").attr(n.config.imgAttr || "alt") || e
		}, parsed: !0, type: "text"
	}), e.addParser({
		id: "usLongDate", is: function (t) {
			return /^[A-Z]{3,10}\.?\s+\d{1,2},?\s+(\d{4})(\s+\d{1,2}:\d{2}(:\d{2})?(\s+[AP]M)?)?$/i.test(t) || /^\d{1,2}\s+[A-Z]{3,10}\s+\d{4}/i.test(t)
		}, format: function (t) {
			var e = t ? new Date(t.replace(/(\S)([AP]M)$/i, "$1 $2")) : t;
			return e instanceof Date && isFinite(e) ? e.getTime() : t
		}, type: "numeric"
	}), e.addParser({
		id: "shortDate", is: function (t) {
			return /(^\d{1,2}[\/\s]\d{1,2}[\/\s]\d{4})|(^\d{4}[\/\s]\d{1,2}[\/\s]\d{1,2})/.test((t || "").replace(/\s+/g, " ").replace(/[\-.,]/g, "/"))
		}, format: function (t, n, i, s) {
			if (t) {
				var o, r, a = n.config, l = a.$headers.filter("[data-column=" + s + "]:last"),
					c = l.length && l[0].dateFormat || e.getData(l, e.getColumnData(n, a.headers, s), "dateFormat") || a.dateFormat;
				return r = t.replace(/\s+/g, " ").replace(/[\-.,]/g, "/"), "mmddyyyy" === c ? r = r.replace(/(\d{1,2})[\/\s](\d{1,2})[\/\s](\d{4})/, "$3/$1/$2") : "ddmmyyyy" === c ? r = r.replace(/(\d{1,2})[\/\s](\d{1,2})[\/\s](\d{4})/, "$3/$2/$1") : "yyyymmdd" === c && (r = r.replace(/(\d{4})[\/\s](\d{1,2})[\/\s](\d{1,2})/, "$1/$2/$3")), o = new Date(r), o instanceof Date && isFinite(o) ? o.getTime() : t
			}
			return t
		}, type: "numeric"
	}), e.addParser({
		id: "time", is: function (t) {
			return /^(([0-2]?\d:[0-5]\d)|([0-1]?\d:[0-5]\d\s?([AP]M)))$/i.test(t)
		}, format: function (t) {
			var e = t ? new Date("2000/01/01 " + t.replace(/(\S)([AP]M)$/i, "$1 $2")) : t;
			return e instanceof Date && isFinite(e) ? e.getTime() : t
		}, type: "numeric"
	}), e.addParser({
		id: "metadata", is: function () {
			return !1
		}, format: function (e, n, i) {
			var s = n.config, o = s.parserMetadataName ? s.parserMetadataName : "sortValue";
			return t(i).metadata()[o]
		}, type: "numeric"
	}), e.addWidget({
		id: "zebra", priority: 90, format: function (e, n, i) {
			var s, o, r, a, l, c, u, d = new RegExp(n.cssChildRow, "i"), h = n.$tbodies;
			for (n.debug && (c = new Date), u = 0; u < h.length; u++)a = 0, s = h.eq(u), o = s.children("tr:visible").not(n.selectorRemove), o.each(function () {
				r = t(this), d.test(this.className) || a++, l = a % 2 === 0, r.removeClass(i.zebra[l ? 1 : 0]).addClass(i.zebra[l ? 0 : 1])
			})
		}, remove: function (t, n, i) {
			var s, o, r = n.$tbodies, a = (i.zebra || ["even", "odd"]).join(" ");
			for (s = 0; s < r.length; s++)o = e.processTbody(t, r.eq(s), !0), o.children().removeClass(a), e.processTbody(t, o, !1)
		}
	})
}(jQuery), !function () {
	var t, e, n, i, s, o = {}.hasOwnProperty, r = function (t, e) {
		function n() {
			this.constructor = t
		}

		for (var i in e)o.call(e, i) && (t[i] = e[i]);
		return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
	};
	i = function () {
		function t() {
			this.options_index = 0, this.parsed = []
		}

		return t.prototype.add_node = function (t) {
			return "OPTGROUP" === t.nodeName.toUpperCase() ? this.add_group(t) : this.add_option(t)
		}, t.prototype.add_group = function (t) {
			var e, n, i, s, o, r;
			for (e = this.parsed.length, this.parsed.push({
				array_index: e,
				group: !0,
				label: this.escapeExpression(t.label),
				children: 0,
				disabled: t.disabled
			}), o = t.childNodes, r = [], i = 0, s = o.length; s > i; i++)n = o[i], r.push(this.add_option(n, e, t.disabled));
			return r
		}, t.prototype.add_option = function (t, e, n) {
			return "OPTION" === t.nodeName.toUpperCase() ? ("" !== t.text ? (null != e && (this.parsed[e].children += 1), this.parsed.push({
				array_index: this.parsed.length,
				options_index: this.options_index,
				value: t.value,
				text: t.text,
				html: t.innerHTML,
				selected: t.selected,
				disabled: n === !0 ? n : t.disabled,
				group_array_index: e,
				classes: t.className,
				style: t.style.cssText
			})) : this.parsed.push({
				array_index: this.parsed.length,
				options_index: this.options_index,
				empty: !0
			}), this.options_index += 1) : void 0
		}, t.prototype.escapeExpression = function (t) {
			var e, n;
			return null == t || t === !1 ? "" : /[\&\<\>\"\'\`]/.test(t) ? (e = {
				"<": "&lt;",
				">": "&gt;",
				'"': "&quot;",
				"'": "&#x27;",
				"`": "&#x60;"
			}, n = /&(?!\w+;)|[\<\>\"\'\`]/g, t.replace(n, function (t) {
				return e[t] || "&amp;"
			})) : t
		}, t
	}(), i.select_to_array = function (t) {
		var e, n, s, o, r;
		for (n = new i, r = t.childNodes, s = 0, o = r.length; o > s; s++)e = r[s], n.add_node(e);
		return n.parsed
	}, e = function () {
		function t(e, n) {
			this.form_field = e, this.options = null != n ? n : {}, t.browser_is_supported() && (this.is_multiple = this.form_field.multiple, this.set_default_text(), this.set_default_values(), this.setup(), this.set_up_html(), this.register_observers())
		}

		return t.prototype.set_default_values = function () {
			var t = this;
			return this.click_test_action = function (e) {
				return t.test_active_click(e)
			}, this.activate_action = function (e) {
				return t.activate_field(e)
			}, this.active_field = !1, this.mouse_on_container = !1, this.results_showing = !1, this.result_highlighted = null, this.allow_single_deselect = null != this.options.allow_single_deselect && null != this.form_field.options[0] && "" === this.form_field.options[0].text ? this.options.allow_single_deselect : !1, this.disable_search_threshold = this.options.disable_search_threshold || 0, this.disable_search = this.options.disable_search || !1, this.enable_split_word_search = null != this.options.enable_split_word_search ? this.options.enable_split_word_search : !0, this.group_search = null != this.options.group_search ? this.options.group_search : !0, this.search_contains = this.options.search_contains || !1, this.single_backstroke_delete = null != this.options.single_backstroke_delete ? this.options.single_backstroke_delete : !0, this.max_selected_options = this.options.max_selected_options || 1 / 0, this.inherit_select_classes = this.options.inherit_select_classes || !1, this.display_selected_options = null != this.options.display_selected_options ? this.options.display_selected_options : !0, this.display_disabled_options = null != this.options.display_disabled_options ? this.options.display_disabled_options : !0
		}, t.prototype.set_default_text = function () {
			return this.default_text = this.form_field.getAttribute("data-placeholder") ? this.form_field.getAttribute("data-placeholder") : this.is_multiple ? this.options.placeholder_text_multiple || this.options.placeholder_text || t.default_multiple_text : this.options.placeholder_text_single || this.options.placeholder_text || t.default_single_text, this.results_none_found = this.form_field.getAttribute("data-no_results_text") || this.options.no_results_text || t.default_no_result_text
		}, t.prototype.mouse_enter = function () {
			return this.mouse_on_container = !0
		}, t.prototype.mouse_leave = function () {
			return this.mouse_on_container = !1
		}, t.prototype.input_focus = function () {
			var t = this;
			if (this.is_multiple) {
				if (!this.active_field)return setTimeout(function () {
					return t.container_mousedown()
				}, 50)
			} else if (!this.active_field)return this.activate_field()
		}, t.prototype.input_blur = function () {
			var t = this;
			return this.mouse_on_container ? void 0 : (this.active_field = !1, setTimeout(function () {
				return t.blur_test()
			}, 100))
		}, t.prototype.results_option_build = function (t) {
			var e, n, i, s, o;
			for (e = "", o = this.results_data, i = 0, s = o.length; s > i; i++)n = o[i], e += n.group ? this.result_add_group(n) : this.result_add_option(n), (null != t ? t.first : void 0) && (n.selected && this.is_multiple ? this.choice_build(n) : n.selected && !this.is_multiple && this.single_set_selected_text(n.text));
			return e
		}, t.prototype.result_add_option = function (t) {
			var e, n;
			return t.search_match ? this.include_option_in_results(t) ? (e = [], t.disabled || t.selected && this.is_multiple || e.push("active-result"), !t.disabled || t.selected && this.is_multiple || e.push("disabled-result"), t.selected && e.push("result-selected"), null != t.group_array_index && e.push("group-option"), "" !== t.classes && e.push(t.classes), n = document.createElement("li"), n.className = e.join(" "), n.style.cssText = t.style, n.setAttribute("data-option-array-index", t.array_index), n.innerHTML = t.search_text, this.outerHTML(n)) : "" : ""
		}, t.prototype.result_add_group = function (t) {
			var e;
			return t.search_match || t.group_match ? t.active_options > 0 ? (e = document.createElement("li"), e.className = "group-result", e.innerHTML = t.search_text, this.outerHTML(e)) : "" : ""
		}, t.prototype.results_update_field = function () {
			return this.set_default_text(), this.is_multiple || this.results_reset_cleanup(), this.result_clear_highlight(), this.results_build(), this.results_showing ? this.winnow_results() : void 0
		}, t.prototype.reset_single_select_options = function () {
			var t, e, n, i, s;
			for (i = this.results_data, s = [], e = 0, n = i.length; n > e; e++)t = i[e], t.selected ? s.push(t.selected = !1) : s.push(void 0);
			return s
		}, t.prototype.results_toggle = function () {
			return this.results_showing ? this.results_hide() : this.results_show()
		}, t.prototype.results_search = function () {
			return this.results_showing ? this.winnow_results() : this.results_show()
		}, t.prototype.winnow_results = function () {
			var t, e, n, i, s, o, r, a, l, c, u, d, h;
			for (this.no_results_clear(), s = 0, r = this.get_search_text(), t = r.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), i = this.search_contains ? "" : "^", n = new RegExp(i + t, "i"), c = new RegExp(t, "i"), h = this.results_data, u = 0, d = h.length; d > u; u++)e = h[u], e.search_match = !1, o = null, this.include_option_in_results(e) && (e.group && (e.group_match = !1, e.active_options = 0), null != e.group_array_index && this.results_data[e.group_array_index] && (o = this.results_data[e.group_array_index], 0 === o.active_options && o.search_match && (s += 1), o.active_options += 1), (!e.group || this.group_search) && (e.search_text = e.group ? e.label : e.html, e.search_match = this.search_string_match(e.search_text, n), e.search_match && !e.group && (s += 1), e.search_match ? (r.length && (a = e.search_text.search(c), l = e.search_text.substr(0, a + r.length) + "</em>" + e.search_text.substr(a + r.length), e.search_text = l.substr(0, a) + "<em>" + l.substr(a)), null != o && (o.group_match = !0)) : null != e.group_array_index && this.results_data[e.group_array_index].search_match && (e.search_match = !0)));
			return this.result_clear_highlight(), 1 > s && r.length ? (this.update_results_content(""), this.no_results(r)) : (this.update_results_content(this.results_option_build()), this.winnow_results_set_highlight())
		}, t.prototype.search_string_match = function (t, e) {
			var n, i, s, o;
			if (e.test(t))return !0;
			if (this.enable_split_word_search && (t.indexOf(" ") >= 0 || 0 === t.indexOf("[")) && (i = t.replace(/\[|\]/g, "").split(" "), i.length))for (s = 0, o = i.length; o > s; s++)if (n = i[s], e.test(n))return !0
		}, t.prototype.choices_count = function () {
			var t, e, n, i;
			if (null != this.selected_option_count)return this.selected_option_count;
			for (this.selected_option_count = 0, i = this.form_field.options, e = 0, n = i.length; n > e; e++)t = i[e], t.selected && (this.selected_option_count += 1);
			return this.selected_option_count
		}, t.prototype.choices_click = function (t) {
			return t.preventDefault(), this.results_showing || this.is_disabled ? void 0 : this.results_show()
		}, t.prototype.keyup_checker = function (t) {
			var e, n;
			switch (e = null != (n = t.which) ? n : t.keyCode, this.search_field_scale(), e) {
				case 8:
					if (this.is_multiple && this.backstroke_length < 1 && this.choices_count() > 0)return this.keydown_backstroke();
					if (!this.pending_backstroke)return this.result_clear_highlight(), this.results_search();
					break;
				case 13:
					if (t.preventDefault(), this.results_showing)return this.result_select(t);
					break;
				case 27:
					return this.results_showing && this.results_hide(), !0;
				case 9:
				case 38:
				case 40:
				case 16:
				case 91:
				case 17:
					break;
				default:
					return this.results_search()
			}
		}, t.prototype.clipboard_event_checker = function () {
			var t = this;
			return setTimeout(function () {
				return t.results_search()
			}, 50)
		}, t.prototype.container_width = function () {
			return null != this.options.width ? this.options.width : "" + this.form_field.offsetWidth + "px"
		}, t.prototype.include_option_in_results = function (t) {
			return this.is_multiple && !this.display_selected_options && t.selected ? !1 : !this.display_disabled_options && t.disabled ? !1 : t.empty ? !1 : !0
		}, t.prototype.search_results_touchstart = function (t) {
			return this.touch_started = !0, this.search_results_mouseover(t)
		}, t.prototype.search_results_touchmove = function (t) {
			return this.touch_started = !1, this.search_results_mouseout(t)
		}, t.prototype.search_results_touchend = function (t) {
			return this.touch_started ? this.search_results_mouseup(t) : void 0
		}, t.prototype.outerHTML = function (t) {
			var e;
			return t.outerHTML ? t.outerHTML : (e = document.createElement("div"), e.appendChild(t), e.innerHTML)
		}, t.browser_is_supported = function () {
			return "Microsoft Internet Explorer" === window.navigator.appName ? document.documentMode >= 8 : /iP(od|hone)/i.test(window.navigator.userAgent) ? !1 : /Android/i.test(window.navigator.userAgent) && /Mobile/i.test(window.navigator.userAgent) ? !1 : !0
		}, t.default_multiple_text = "Select Some Options", t.default_single_text = "Select an Option", t.default_no_result_text = "No results match", t
	}(), t = jQuery, t.fn.extend({
		chosen: function (i) {
			return e.browser_is_supported() ? this.each(function () {
				var e, s;
				e = t(this), s = e.data("chosen"), "destroy" === i && s ? s.destroy() : s || e.data("chosen", new n(this, i))
			}) : this
		}
	}), n = function (e) {
		function n() {
			return s = n.__super__.constructor.apply(this, arguments)
		}

		return r(n, e), n.prototype.setup = function () {
			return this.form_field_jq = t(this.form_field), this.current_selectedIndex = this.form_field.selectedIndex, this.is_rtl = this.form_field_jq.hasClass("chosen-rtl")
		}, n.prototype.set_up_html = function () {
			var e, n;
			return e = ["chosen-container"], e.push("chosen-container-" + (this.is_multiple ? "multi" : "single")), this.inherit_select_classes && this.form_field.className && e.push(this.form_field.className), this.is_rtl && e.push("chosen-rtl"), n = {
				"class": e.join(" "),
				style: "width: " + this.container_width() + ";",
				title: this.form_field.title
			}, this.form_field.id.length && (n.id = this.form_field.id.replace(/[^\w]/g, "_") + "_chosen"), this.container = t("<div />", n), this.is_multiple ? this.container.html('<ul class="chosen-choices"><li class="search-field"><input type="text" value="' + this.default_text + '" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chosen-drop"><ul class="chosen-results"></ul></div>') : this.container.html('<a class="chosen-single chosen-default" tabindex="-1"><span>' + this.default_text + '</span><div><b></b></div></a><div class="chosen-drop"><div class="chosen-search"><input type="text" autocomplete="off" /></div><ul class="chosen-results"></ul></div>'), this.form_field_jq.hide().after(this.container), this.dropdown = this.container.find("div.chosen-drop").first(), this.search_field = this.container.find("input").first(), this.search_results = this.container.find("ul.chosen-results").first(), this.search_field_scale(), this.search_no_results = this.container.find("li.no-results").first(), this.is_multiple ? (this.search_choices = this.container.find("ul.chosen-choices").first(), this.search_container = this.container.find("li.search-field").first()) : (this.search_container = this.container.find("div.chosen-search").first(), this.selected_item = this.container.find(".chosen-single").first()), this.results_build(), this.set_tab_index(), this.set_label_behavior(), this.form_field_jq.trigger("chosen:ready", {chosen: this})
		}, n.prototype.register_observers = function () {
			var t = this;
			return this.container.bind("mousedown.chosen", function (e) {
				t.container_mousedown(e)
			}), this.container.bind("mouseup.chosen", function (e) {
				t.container_mouseup(e)
			}), this.container.bind("mouseenter.chosen", function (e) {
				t.mouse_enter(e)
			}), this.container.bind("mouseleave.chosen", function (e) {
				t.mouse_leave(e)
			}), this.search_results.bind("mouseup.chosen", function (e) {
				t.search_results_mouseup(e)
			}), this.search_results.bind("mouseover.chosen", function (e) {
				t.search_results_mouseover(e)
			}), this.search_results.bind("mouseout.chosen", function (e) {
				t.search_results_mouseout(e)
			}), this.search_results.bind("mousewheel.chosen DOMMouseScroll.chosen", function (e) {
				t.search_results_mousewheel(e)
			}), this.search_results.bind("touchstart.chosen", function (e) {
				t.search_results_touchstart(e)
			}), this.search_results.bind("touchmove.chosen", function (e) {
				t.search_results_touchmove(e)
			}), this.search_results.bind("touchend.chosen", function (e) {
				t.search_results_touchend(e)
			}), this.form_field_jq.bind("chosen:updated.chosen", function (e) {
				t.results_update_field(e)
			}), this.form_field_jq.bind("chosen:activate.chosen", function (e) {
				t.activate_field(e)
			}), this.form_field_jq.bind("chosen:open.chosen", function (e) {
				t.container_mousedown(e)
			}), this.form_field_jq.bind("chosen:close.chosen", function (e) {
				t.input_blur(e)
			}), this.search_field.bind("blur.chosen", function (e) {
				t.input_blur(e)
			}), this.search_field.bind("keyup.chosen", function (e) {
				t.keyup_checker(e)
			}), this.search_field.bind("keydown.chosen", function (e) {
				t.keydown_checker(e)
			}), this.search_field.bind("focus.chosen", function (e) {
				t.input_focus(e)
			}), this.search_field.bind("cut.chosen", function (e) {
				t.clipboard_event_checker(e)
			}), this.search_field.bind("paste.chosen", function (e) {
				t.clipboard_event_checker(e)
			}), this.is_multiple ? this.search_choices.bind("click.chosen", function (e) {
				t.choices_click(e)
			}) : this.container.bind("click.chosen", function (t) {
				t.preventDefault()
			})
		}, n.prototype.destroy = function () {
			return t(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action), this.search_field[0].tabIndex && (this.form_field_jq[0].tabIndex = this.search_field[0].tabIndex), this.container.remove(), this.form_field_jq.removeData("chosen"), this.form_field_jq.show()
		}, n.prototype.search_field_disabled = function () {
			return this.is_disabled = this.form_field_jq[0].disabled, this.is_disabled ? (this.container.addClass("chosen-disabled"), this.search_field[0].disabled = !0, this.is_multiple || this.selected_item.unbind("focus.chosen", this.activate_action), this.close_field()) : (this.container.removeClass("chosen-disabled"), this.search_field[0].disabled = !1, this.is_multiple ? void 0 : this.selected_item.bind("focus.chosen", this.activate_action))
		}, n.prototype.container_mousedown = function (e) {
			return this.is_disabled || (e && "mousedown" === e.type && !this.results_showing && e.preventDefault(), null != e && t(e.target).hasClass("search-choice-close")) ? void 0 : (this.active_field ? this.is_multiple || !e || t(e.target)[0] !== this.selected_item[0] && !t(e.target).parents("a.chosen-single").length || (e.preventDefault(), this.results_toggle()) : (this.is_multiple && this.search_field.val(""), t(this.container[0].ownerDocument).bind("click.chosen", this.click_test_action), this.results_show()), this.activate_field())
		}, n.prototype.container_mouseup = function (t) {
			return "ABBR" !== t.target.nodeName || this.is_disabled ? void 0 : this.results_reset(t)
		}, n.prototype.search_results_mousewheel = function (t) {
			var e;
			return t.originalEvent && (e = -t.originalEvent.wheelDelta || t.originalEvent.detail), null != e ? (t.preventDefault(), "DOMMouseScroll" === t.type && (e = 40 * e), this.search_results.scrollTop(e + this.search_results.scrollTop())) : void 0
		}, n.prototype.blur_test = function () {
			return !this.active_field && this.container.hasClass("chosen-container-active") ? this.close_field() : void 0
		}, n.prototype.close_field = function () {
			return t(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action), this.active_field = !1, this.results_hide(), this.container.removeClass("chosen-container-active"), this.clear_backstroke(), this.show_search_field_default(), this.search_field_scale()
		}, n.prototype.activate_field = function () {
			return this.container.addClass("chosen-container-active"), this.active_field = !0, this.search_field.val(this.search_field.val()), this.search_field.focus()
		}, n.prototype.test_active_click = function (e) {
			var n;
			return n = t(e.target).closest(".chosen-container"), n.length && this.container[0] === n[0] ? this.active_field = !0 : this.close_field()
		}, n.prototype.results_build = function () {
			return this.parsing = !0, this.selected_option_count = null, this.results_data = i.select_to_array(this.form_field), this.is_multiple ? this.search_choices.find("li.search-choice").remove() : this.is_multiple || (this.single_set_selected_text(), this.disable_search || this.form_field.options.length <= this.disable_search_threshold ? (this.search_field[0].readOnly = !0, this.container.addClass("chosen-container-single-nosearch")) : (this.search_field[0].readOnly = !1, this.container.removeClass("chosen-container-single-nosearch"))), this.update_results_content(this.results_option_build({first: !0})), this.search_field_disabled(), this.show_search_field_default(), this.search_field_scale(), this.parsing = !1
		}, n.prototype.result_do_highlight = function (t) {
			var e, n, i, s, o;
			if (t.length) {
				if (this.result_clear_highlight(), this.result_highlight = t, this.result_highlight.addClass("highlighted"), i = parseInt(this.search_results.css("maxHeight"), 10), o = this.search_results.scrollTop(), s = i + o, n = this.result_highlight.position().top + this.search_results.scrollTop(), e = n + this.result_highlight.outerHeight(), e >= s)return this.search_results.scrollTop(e - i > 0 ? e - i : 0);
				if (o > n)return this.search_results.scrollTop(n)
			}
		}, n.prototype.result_clear_highlight = function () {
			return this.result_highlight && this.result_highlight.removeClass("highlighted"), this.result_highlight = null
		}, n.prototype.results_show = function () {
			return this.is_multiple && this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger("chosen:maxselected", {chosen: this}), !1) : (this.container.addClass("chosen-with-drop"), this.results_showing = !0, this.search_field.focus(), this.search_field.val(this.search_field.val()), this.winnow_results(), this.form_field_jq.trigger("chosen:showing_dropdown", {chosen: this}))
		}, n.prototype.update_results_content = function (t) {
			return this.search_results.html(t)
		}, n.prototype.results_hide = function () {
			return this.results_showing && (this.result_clear_highlight(), this.container.removeClass("chosen-with-drop"), this.form_field_jq.trigger("chosen:hiding_dropdown", {chosen: this})), this.results_showing = !1
		}, n.prototype.set_tab_index = function () {
			var t;
			return this.form_field.tabIndex ? (t = this.form_field.tabIndex, this.form_field.tabIndex = -1, this.search_field[0].tabIndex = t) : void 0
		}, n.prototype.set_label_behavior = function () {
			var e = this;
			return this.form_field_label = this.form_field_jq.parents("label"), !this.form_field_label.length && this.form_field.id.length && (this.form_field_label = t("label[for='" + this.form_field.id + "']")), this.form_field_label.length > 0 ? this.form_field_label.bind("click.chosen", function (t) {
				return e.is_multiple ? e.container_mousedown(t) : e.activate_field()
			}) : void 0
		}, n.prototype.show_search_field_default = function () {
			return this.is_multiple && this.choices_count() < 1 && !this.active_field ? (this.search_field.val(this.default_text), this.search_field.addClass("default")) : (this.search_field.val(""), this.search_field.removeClass("default"))
		}, n.prototype.search_results_mouseup = function (e) {
			var n;
			return n = t(e.target).hasClass("active-result") ? t(e.target) : t(e.target).parents(".active-result").first(), n.length ? (this.result_highlight = n, this.result_select(e), this.search_field.focus()) : void 0
		}, n.prototype.search_results_mouseover = function (e) {
			var n;
			return n = t(e.target).hasClass("active-result") ? t(e.target) : t(e.target).parents(".active-result").first(), n ? this.result_do_highlight(n) : void 0
		}, n.prototype.search_results_mouseout = function (e) {
			return t(e.target).hasClass("active-result") ? this.result_clear_highlight() : void 0
		}, n.prototype.choice_build = function (e) {
			var n, i, s = this;
			return n = t("<li />", {"class": "search-choice"}).html("<span>" + e.html + "</span>"), e.disabled ? n.addClass("search-choice-disabled") : (i = t("<a />", {
				"class": "search-choice-close",
				"data-option-array-index": e.array_index
			}), i.bind("click.chosen", function (t) {
				return s.choice_destroy_link_click(t)
			}), n.append(i)), this.search_container.before(n)
		}, n.prototype.choice_destroy_link_click = function (e) {
			return e.preventDefault(), e.stopPropagation(), this.is_disabled ? void 0 : this.choice_destroy(t(e.target))
		}, n.prototype.choice_destroy = function (t) {
			return this.result_deselect(t[0].getAttribute("data-option-array-index")) ? (this.show_search_field_default(), this.is_multiple && this.choices_count() > 0 && this.search_field.val().length < 1 && this.results_hide(), t.parents("li").first().remove(), this.search_field_scale()) : void 0
		}, n.prototype.results_reset = function () {
			return this.reset_single_select_options(), this.form_field.options[0].selected = !0, this.single_set_selected_text(), this.show_search_field_default(), this.results_reset_cleanup(), this.form_field_jq.trigger("change"), this.active_field ? this.results_hide() : void 0
		}, n.prototype.results_reset_cleanup = function () {
			return this.current_selectedIndex = this.form_field.selectedIndex, this.selected_item.find("abbr").remove()
		}, n.prototype.result_select = function (t) {
			var e, n;
			return this.result_highlight ? (e = this.result_highlight, this.result_clear_highlight(), this.is_multiple && this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger("chosen:maxselected", {chosen: this}), !1) : (this.is_multiple ? e.removeClass("active-result") : this.reset_single_select_options(), n = this.results_data[e[0].getAttribute("data-option-array-index")], n.selected = !0, this.form_field.options[n.options_index].selected = !0, this.selected_option_count = null, this.is_multiple ? this.choice_build(n) : this.single_set_selected_text(n.text), (t.metaKey || t.ctrlKey) && this.is_multiple || this.results_hide(), this.search_field.val(""), (this.is_multiple || this.form_field.selectedIndex !== this.current_selectedIndex) && this.form_field_jq.trigger("change", {selected: this.form_field.options[n.options_index].value}), this.current_selectedIndex = this.form_field.selectedIndex, this.search_field_scale())) : void 0
		}, n.prototype.single_set_selected_text = function (t) {
			return null == t && (t = this.default_text), t === this.default_text ? this.selected_item.addClass("chosen-default") : (this.single_deselect_control_build(), this.selected_item.removeClass("chosen-default")), this.selected_item.find("span").text(t)
		}, n.prototype.result_deselect = function (t) {
			var e;
			return e = this.results_data[t], this.form_field.options[e.options_index].disabled ? !1 : (e.selected = !1, this.form_field.options[e.options_index].selected = !1, this.selected_option_count = null, this.result_clear_highlight(), this.results_showing && this.winnow_results(), this.form_field_jq.trigger("change", {deselected: this.form_field.options[e.options_index].value}), this.search_field_scale(), !0)
		}, n.prototype.single_deselect_control_build = function () {
			return this.allow_single_deselect ? (this.selected_item.find("abbr").length || this.selected_item.find("span").first().after('<abbr class="search-choice-close"></abbr>'), this.selected_item.addClass("chosen-single-with-deselect")) : void 0
		}, n.prototype.get_search_text = function () {
			return this.search_field.val() === this.default_text ? "" : t("<div/>").text(t.trim(this.search_field.val())).html()
		}, n.prototype.winnow_results_set_highlight = function () {
			var t, e;
			return e = this.is_multiple ? [] : this.search_results.find(".result-selected.active-result"), t = e.length ? e.first() : this.search_results.find(".active-result").first(), null != t ? this.result_do_highlight(t) : void 0
		}, n.prototype.no_results = function (e) {
			var n;
			return n = t('<li class="no-results">' + this.results_none_found + ' "<span></span>"</li>'), n.find("span").first().html(e), this.search_results.append(n), this.form_field_jq.trigger("chosen:no_results", {chosen: this})
		}, n.prototype.no_results_clear = function () {
			return this.search_results.find(".no-results").remove()
		}, n.prototype.keydown_arrow = function () {
			var t;
			return this.results_showing && this.result_highlight ? (t = this.result_highlight.nextAll("li.active-result").first()) ? this.result_do_highlight(t) : void 0 : this.results_show()
		}, n.prototype.keyup_arrow = function () {
			var t;
			return this.results_showing || this.is_multiple ? this.result_highlight ? (t = this.result_highlight.prevAll("li.active-result"), t.length ? this.result_do_highlight(t.first()) : (this.choices_count() > 0 && this.results_hide(), this.result_clear_highlight())) : void 0 : this.results_show()
		}, n.prototype.keydown_backstroke = function () {
			var t;
			return this.pending_backstroke ? (this.choice_destroy(this.pending_backstroke.find("a").first()), this.clear_backstroke()) : (t = this.search_container.siblings("li.search-choice").last(), t.length && !t.hasClass("search-choice-disabled") ? (this.pending_backstroke = t, this.single_backstroke_delete ? this.keydown_backstroke() : this.pending_backstroke.addClass("search-choice-focus")) : void 0)
		}, n.prototype.clear_backstroke = function () {
			return this.pending_backstroke && this.pending_backstroke.removeClass("search-choice-focus"), this.pending_backstroke = null
		}, n.prototype.keydown_checker = function (t) {
			var e, n;
			switch (e = null != (n = t.which) ? n : t.keyCode, this.search_field_scale(), 8 !== e && this.pending_backstroke && this.clear_backstroke(), e) {
				case 8:
					this.backstroke_length = this.search_field.val().length;
					break;
				case 9:
					this.results_showing && !this.is_multiple && this.result_select(t), this.mouse_on_container = !1;
					break;
				case 13:
					t.preventDefault();
					break;
				case 38:
					t.preventDefault(), this.keyup_arrow();
					break;
				case 40:
					t.preventDefault(), this.keydown_arrow()
			}
		}, n.prototype.search_field_scale = function () {
			var e, n, i, s, o, r, a, l, c;
			if (this.is_multiple) {
				for (i = 0, a = 0, o = "position:absolute; left: -1000px; top: -1000px; display:none;", r = ["font-size", "font-style", "font-weight", "font-family", "line-height", "text-transform", "letter-spacing"], l = 0, c = r.length; c > l; l++)s = r[l], o += s + ":" + this.search_field.css(s) + ";";
				return e = t("<div />", {style: o}), e.text(this.search_field.val()), t("body").append(e), a = e.width() + 25, e.remove(), n = this.container.outerWidth(), a > n - 10 && (a = n - 10), this.search_field.css({width: a + "px"})
			}
		}, n
	}(e)
}.call(this), function (t) {
	var e = function () {
		"use strict";
		return {
			isMsie: function () {
				return /(msie|trident)/i.test(navigator.userAgent) ? navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2] : !1
			}, isBlankString: function (t) {
				return !t || /^\s*$/.test(t)
			}, escapeRegExChars: function (t) {
				return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
			}, isString: function (t) {
				return "string" == typeof t
			}, isNumber: function (t) {
				return "number" == typeof t
			}, isArray: t.isArray, isFunction: t.isFunction, isObject: t.isPlainObject, isUndefined: function (t) {
				return "undefined" == typeof t
			}, toStr: function (t) {
				return e.isUndefined(t) || null === t ? "" : t + ""
			}, bind: t.proxy, each: function (e, n) {
				function i(t, e) {
					return n(e, t)
				}

				t.each(e, i)
			}, map: t.map, filter: t.grep, every: function (e, n) {
				var i = !0;
				return e ? (t.each(e, function (t, s) {
					return (i = n.call(null, s, t, e)) ? void 0 : !1
				}), !!i) : i
			}, some: function (e, n) {
				var i = !1;
				return e ? (t.each(e, function (t, s) {
					return (i = n.call(null, s, t, e)) ? !1 : void 0
				}), !!i) : i
			}, mixin: t.extend, getUniqueId: function () {
				var t = 0;
				return function () {
					return t++
				}
			}(), templatify: function (e) {
				function n() {
					return String(e)
				}

				return t.isFunction(e) ? e : n
			}, defer: function (t) {
				setTimeout(t, 0)
			}, debounce: function (t, e, n) {
				var i, s;
				return function () {
					var o, r, a = this, l = arguments;
					return o = function () {
						i = null, n || (s = t.apply(a, l))
					}, r = n && !i, clearTimeout(i), i = setTimeout(o, e), r && (s = t.apply(a, l)), s
				}
			}, throttle: function (t, e) {
				var n, i, s, o, r, a;
				return r = 0, a = function () {
					r = new Date, s = null, o = t.apply(n, i)
				}, function () {
					var l = new Date, c = e - (l - r);
					return n = this, i = arguments, 0 >= c ? (clearTimeout(s), s = null, r = l, o = t.apply(n, i)) : s || (s = setTimeout(a, c)), o
				}
			}, noop: function () {
			}
		}
	}(), n = "0.10.5", i = function () {
		"use strict";
		function t(t) {
			return t = e.toStr(t), t ? t.split(/\s+/) : []
		}

		function n(t) {
			return t = e.toStr(t), t ? t.split(/\W+/) : []
		}

		function i(t) {
			return function () {
				var n = [].slice.call(arguments, 0);
				return function (i) {
					var s = [];
					return e.each(n, function (n) {
						s = s.concat(t(e.toStr(i[n])))
					}), s
				}
			}
		}

		return {nonword: n, whitespace: t, obj: {nonword: i(n), whitespace: i(t)}}
	}(), s = function () {
		"use strict";
		function n(n) {
			this.maxSize = e.isNumber(n) ? n : 100, this.reset(), this.maxSize <= 0 && (this.set = this.get = t.noop)
		}

		function i() {
			this.head = this.tail = null
		}

		function s(t, e) {
			this.key = t, this.val = e, this.prev = this.next = null
		}

		return e.mixin(n.prototype, {
			set: function (t, e) {
				var n, i = this.list.tail;
				this.size >= this.maxSize && (this.list.remove(i), delete this.hash[i.key]), (n = this.hash[t]) ? (n.val = e, this.list.moveToFront(n)) : (n = new s(t, e), this.list.add(n), this.hash[t] = n, this.size++)
			}, get: function (t) {
				var e = this.hash[t];
				return e ? (this.list.moveToFront(e), e.val) : void 0
			}, reset: function () {
				this.size = 0, this.hash = {}, this.list = new i
			}
		}), e.mixin(i.prototype, {
			add: function (t) {
				this.head && (t.next = this.head, this.head.prev = t), this.head = t, this.tail = this.tail || t
			}, remove: function (t) {
				t.prev ? t.prev.next = t.next : this.head = t.next, t.next ? t.next.prev = t.prev : this.tail = t.prev
			}, moveToFront: function (t) {
				this.remove(t), this.add(t)
			}
		}), n
	}(), o = function () {
		"use strict";
		function t(t) {
			this.prefix = ["__", t, "__"].join(""), this.ttlKey = "__ttl__", this.keyMatcher = new RegExp("^" + e.escapeRegExChars(this.prefix))
		}

		function n() {
			return (new Date).getTime()
		}

		function i(t) {
			return JSON.stringify(e.isUndefined(t) ? null : t)
		}

		function s(t) {
			return JSON.parse(t)
		}

		var o, r;
		try {
			o = window.localStorage, o.setItem("~~~", "!"), o.removeItem("~~~")
		} catch (a) {
			o = null
		}
		return r = o && window.JSON ? {
			_prefix: function (t) {
				return this.prefix + t
			}, _ttlKey: function (t) {
				return this._prefix(t) + this.ttlKey
			}, get: function (t) {
				return this.isExpired(t) && this.remove(t), s(o.getItem(this._prefix(t)))
			}, set: function (t, s, r) {
				return e.isNumber(r) ? o.setItem(this._ttlKey(t), i(n() + r)) : o.removeItem(this._ttlKey(t)), o.setItem(this._prefix(t), i(s))
			}, remove: function (t) {
				return o.removeItem(this._ttlKey(t)), o.removeItem(this._prefix(t)), this
			}, clear: function () {
				var t, e, n = [], i = o.length;
				for (t = 0; i > t; t++)(e = o.key(t)).match(this.keyMatcher) && n.push(e.replace(this.keyMatcher, ""));
				for (t = n.length; t--;)this.remove(n[t]);
				return this
			}, isExpired: function (t) {
				var i = s(o.getItem(this._ttlKey(t)));
				return e.isNumber(i) && n() > i ? !0 : !1
			}
		} : {get: e.noop, set: e.noop, remove: e.noop, clear: e.noop, isExpired: e.noop}, e.mixin(t.prototype, r), t
	}(), r = function () {
		"use strict";
		function n(e) {
			e = e || {}, this.cancelled = !1, this.lastUrl = null, this._send = e.transport ? i(e.transport) : t.ajax, this._get = e.rateLimiter ? e.rateLimiter(this._get) : this._get, this._cache = e.cache === !1 ? new s(0) : l
		}

		function i(n) {
			return function (i, s) {
				function o(t) {
					e.defer(function () {
						a.resolve(t)
					})
				}

				function r(t) {
					e.defer(function () {
						a.reject(t)
					})
				}

				var a = t.Deferred();
				return n(i, s, o, r), a
			}
		}

		var o = 0, r = {}, a = 6, l = new s(10);
		return n.setMaxPendingRequests = function (t) {
			a = t
		}, n.resetCache = function () {
			l.reset()
		}, e.mixin(n.prototype, {
			_get: function (t, e, n) {
				function i(e) {
					n && n(null, e), u._cache.set(t, e)
				}

				function s() {
					n && n(!0)
				}

				function l() {
					o--, delete r[t], u.onDeckRequestArgs && (u._get.apply(u, u.onDeckRequestArgs), u.onDeckRequestArgs = null)
				}

				var c, u = this;
				this.cancelled || t !== this.lastUrl || ((c = r[t]) ? c.done(i).fail(s) : a > o ? (o++, r[t] = this._send(t, e).done(i).fail(s).always(l)) : this.onDeckRequestArgs = [].slice.call(arguments, 0))
			}, get: function (t, n, i) {
				var s;
				return e.isFunction(n) && (i = n, n = {}), this.cancelled = !1, this.lastUrl = t, (s = this._cache.get(t)) ? e.defer(function () {
					i && i(null, s)
				}) : this._get(t, n, i), !!s
			}, cancel: function () {
				this.cancelled = !0
			}
		}), n
	}(), a = function () {
		"use strict";
		function n(e) {
			e = e || {}, e.datumTokenizer && e.queryTokenizer || t.error("datumTokenizer and queryTokenizer are both required"), this.datumTokenizer = e.datumTokenizer, this.queryTokenizer = e.queryTokenizer, this.reset()
		}

		function i(t) {
			return t = e.filter(t, function (t) {
				return !!t
			}), t = e.map(t, function (t) {
				return t.toLowerCase()
			})
		}

		function s() {
			return {ids: [], children: {}}
		}

		function o(t) {
			for (var e = {}, n = [], i = 0, s = t.length; s > i; i++)e[t[i]] || (e[t[i]] = !0, n.push(t[i]));
			return n
		}

		function r(t, e) {
			function n(t, e) {
				return t - e
			}

			var i = 0, s = 0, o = [];
			t = t.sort(n), e = e.sort(n);
			for (var r = t.length, a = e.length; r > i && a > s;)t[i] < e[s] ? i++ : t[i] > e[s] ? s++ : (o.push(t[i]), i++, s++);
			return o
		}

		return e.mixin(n.prototype, {
			bootstrap: function (t) {
				this.datums = t.datums, this.trie = t.trie
			}, add: function (t) {
				var n = this;
				t = e.isArray(t) ? t : [t], e.each(t, function (t) {
					var o, r;
					o = n.datums.push(t) - 1, r = i(n.datumTokenizer(t)), e.each(r, function (t) {
						var e, i, r;
						for (e = n.trie, i = t.split(""); r = i.shift();)e = e.children[r] || (e.children[r] = s()), e.ids.push(o)
					})
				})
			}, get: function (t) {
				var n, s, a = this;
				return n = i(this.queryTokenizer(t)), e.each(n, function (t) {
					var e, n, i, o;
					if (s && 0 === s.length)return !1;
					for (e = a.trie, n = t.split(""); e && (i = n.shift());)e = e.children[i];
					return e && 0 === n.length ? (o = e.ids.slice(0), s = s ? r(s, o) : o, void 0) : (s = [], !1)
				}), s ? e.map(o(s), function (t) {
					return a.datums[t]
				}) : []
			}, reset: function () {
				this.datums = [], this.trie = s()
			}, serialize: function () {
				return {datums: this.datums, trie: this.trie}
			}
		}), n
	}(), l = function () {
		"use strict";
		function i(t) {
			return t.local || null
		}

		function s(i) {
			var s, o;
			return o = {
				url: null,
				thumbprint: "",
				ttl: 864e5,
				filter: null,
				ajax: {}
			}, (s = i.prefetch || null) && (s = e.isString(s) ? {url: s} : s, s = e.mixin(o, s), s.thumbprint = n + s.thumbprint, s.ajax.type = s.ajax.type || "GET", s.ajax.dataType = s.ajax.dataType || "json", !s.url && t.error("prefetch requires url to be set")), s
		}

		function o(n) {
			function i(t) {
				return function (n) {
					return e.debounce(n, t)
				}
			}

			function s(t) {
				return function (n) {
					return e.throttle(n, t)
				}
			}

			var o, r;
			return r = {
				url: null,
				cache: !0,
				wildcard: "%QUERY",
				replace: null,
				rateLimitBy: "debounce",
				rateLimitWait: 300,
				send: null,
				filter: null,
				ajax: {}
			}, (o = n.remote || null) && (o = e.isString(o) ? {url: o} : o, o = e.mixin(r, o), o.rateLimiter = /^throttle$/i.test(o.rateLimitBy) ? s(o.rateLimitWait) : i(o.rateLimitWait), o.ajax.type = o.ajax.type || "GET", o.ajax.dataType = o.ajax.dataType || "json", delete o.rateLimitBy, delete o.rateLimitWait, !o.url && t.error("remote requires url to be set")), o
		}

		return {local: i, prefetch: s, remote: o}
	}();
	!function (n) {
		"use strict";
		function s(e) {
			e && (e.local || e.prefetch || e.remote) || t.error("one of local, prefetch, or remote is required"), this.limit = e.limit || 5, this.sorter = c(e.sorter), this.dupDetector = e.dupDetector || u, this.local = l.local(e), this.prefetch = l.prefetch(e), this.remote = l.remote(e), this.cacheKey = this.prefetch ? this.prefetch.cacheKey || this.prefetch.url : null, this.index = new a({
				datumTokenizer: e.datumTokenizer,
				queryTokenizer: e.queryTokenizer
			}), this.storage = this.cacheKey ? new o(this.cacheKey) : null
		}

		function c(t) {
			function n(e) {
				return e.sort(t)
			}

			function i(t) {
				return t
			}

			return e.isFunction(t) ? n : i
		}

		function u() {
			return !1
		}

		var d, h;
		return d = n.Bloodhound, h = {
			data: "data",
			protocol: "protocol",
			thumbprint: "thumbprint"
		}, n.Bloodhound = s, s.noConflict = function () {
			return n.Bloodhound = d, s
		}, s.tokenizers = i, e.mixin(s.prototype, {
			_loadPrefetch: function (e) {
				function n(t) {
					o.clear(), o.add(e.filter ? e.filter(t) : t), o._saveToStorage(o.index.serialize(), e.thumbprint, e.ttl)
				}

				var i, s, o = this;
				return (i = this._readFromStorage(e.thumbprint)) ? (this.index.bootstrap(i), s = t.Deferred().resolve()) : s = t.ajax(e.url, e.ajax).done(n), s
			}, _getFromRemote: function (t, e) {
				function n(t, n) {
					t ? e([]) : e(o.remote.filter ? o.remote.filter(n) : n)
				}

				var i, s, o = this;
				if (this.transport)return t = t || "", s = encodeURIComponent(t), i = this.remote.replace ? this.remote.replace(this.remote.url, t) : this.remote.url.replace(this.remote.wildcard, s), this.transport.get(i, this.remote.ajax, n)
			}, _cancelLastRemoteRequest: function () {
				this.transport && this.transport.cancel()
			}, _saveToStorage: function (t, e, n) {
				this.storage && (this.storage.set(h.data, t, n), this.storage.set(h.protocol, location.protocol, n), this.storage.set(h.thumbprint, e, n))
			}, _readFromStorage: function (t) {
				var e, n = {};
				return this.storage && (n.data = this.storage.get(h.data), n.protocol = this.storage.get(h.protocol), n.thumbprint = this.storage.get(h.thumbprint)), e = n.thumbprint !== t || n.protocol !== location.protocol, n.data && !e ? n.data : null
			}, _initialize: function () {
				function n() {
					s.add(e.isFunction(o) ? o() : o)
				}

				var i, s = this, o = this.local;
				return i = this.prefetch ? this._loadPrefetch(this.prefetch) : t.Deferred().resolve(), o && i.done(n), this.transport = this.remote ? new r(this.remote) : null, this.initPromise = i.promise()
			}, initialize: function (t) {
				return !this.initPromise || t ? this._initialize() : this.initPromise
			}, add: function (t) {
				this.index.add(t)
			}, get: function (t, n) {
				function i(t) {
					var i = o.slice(0);
					e.each(t, function (t) {
						var n;
						return n = e.some(i, function (e) {
							return s.dupDetector(t, e)
						}), !n && i.push(t), i.length < s.limit
					}), n && n(s.sorter(i))
				}

				var s = this, o = [], r = !1;
				o = this.index.get(t), o = this.sorter(o).slice(0, this.limit), o.length < this.limit ? r = this._getFromRemote(t, i) : this._cancelLastRemoteRequest(), r || (o.length > 0 || !this.transport) && n && n(o)
			}, clear: function () {
				this.index.reset()
			}, clearPrefetchCache: function () {
				this.storage && this.storage.clear()
			}, clearRemoteCache: function () {
				this.transport && r.resetCache()
			}, ttAdapter: function () {
				return e.bind(this.get, this)
			}
		}), s
	}(this);
	var c = function () {
		return {
			wrapper: '<span class="twitter-typeahead"></span>',
			dropdown: '<span class="tt-dropdown-menu"></span>',
			dataset: '<div class="tt-dataset-%CLASS%"></div>',
			suggestions: '<span class="tt-suggestions"></span>',
			suggestion: '<div class="tt-suggestion"></div>'
		}
	}(), u = function () {
		"use strict";
		var t = {
			wrapper: {position: "relative", display: "inline-block"},
			hint: {
				position: "absolute",
				top: "0",
				left: "0",
				borderColor: "transparent",
				boxShadow: "none",
				opacity: "1"
			},
			input: {position: "relative", verticalAlign: "top", backgroundColor: "transparent"},
			inputWithNoHint: {position: "relative", verticalAlign: "top"},
			dropdown: {position: "absolute", top: "100%", left: "0", zIndex: "100", display: "none"},
			suggestions: {display: "block"},
			suggestion: {whiteSpace: "nowrap", cursor: "pointer"},
			suggestionChild: {whiteSpace: "normal"},
			ltr: {left: "0", right: "auto"},
			rtl: {left: "auto", right: " 0"}
		};
		return e.isMsie() && e.mixin(t.input, {backgroundImage: "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)"}), e.isMsie() && e.isMsie() <= 7 && e.mixin(t.input, {marginTop: "-1px"}), t
	}(), d = function () {
		"use strict";
		function n(e) {
			e && e.el || t.error("EventBus initialized without el"), this.$el = t(e.el)
		}

		var i = "typeahead:";
		return e.mixin(n.prototype, {
			trigger: function (t) {
				var e = [].slice.call(arguments, 1);
				this.$el.trigger(i + t, e)
			}
		}), n
	}(), h = function () {
		"use strict";
		function t(t, e, n, i) {
			var s;
			if (!n)return this;
			for (e = e.split(l), n = i ? a(n, i) : n, this._callbacks = this._callbacks || {}; s = e.shift();)this._callbacks[s] = this._callbacks[s] || {
					sync: [],
					async: []
				}, this._callbacks[s][t].push(n);
			return this
		}

		function e(e, n, i) {
			return t.call(this, "async", e, n, i)
		}

		function n(e, n, i) {
			return t.call(this, "sync", e, n, i)
		}

		function i(t) {
			var e;
			if (!this._callbacks)return this;
			for (t = t.split(l); e = t.shift();)delete this._callbacks[e];
			return this
		}

		function s(t) {
			var e, n, i, s, r;
			if (!this._callbacks)return this;
			for (t = t.split(l), i = [].slice.call(arguments, 1); (e = t.shift()) && (n = this._callbacks[e]);)s = o(n.sync, this, [e].concat(i)), r = o(n.async, this, [e].concat(i)), s() && c(r);
			return this
		}

		function o(t, e, n) {
			function i() {
				for (var i, s = 0, o = t.length; !i && o > s; s += 1)i = t[s].apply(e, n) === !1;
				return !i
			}

			return i
		}

		function r() {
			var t;
			return t = window.setImmediate ? function (t) {
				setImmediate(function () {
					t()
				})
			} : function (t) {
				setTimeout(function () {
					t()
				}, 0)
			}
		}

		function a(t, e) {
			return t.bind ? t.bind(e) : function () {
				t.apply(e, [].slice.call(arguments, 0))
			}
		}

		var l = /\s+/, c = r();
		return {onSync: n, onAsync: e, off: i, trigger: s}
	}(), p = function (t) {
		"use strict";
		function n(t, n, i) {
			for (var s, o = [], r = 0, a = t.length; a > r; r++)o.push(e.escapeRegExChars(t[r]));
			return s = i ? "\\b(" + o.join("|") + ")\\b" : "(" + o.join("|") + ")", n ? new RegExp(s) : new RegExp(s, "i")
		}

		var i = {node: null, pattern: null, tagName: "strong", className: null, wordsOnly: !1, caseSensitive: !1};
		return function (s) {
			function o(e) {
				var n, i, o;
				return (n = a.exec(e.data)) && (o = t.createElement(s.tagName), s.className && (o.className = s.className), i = e.splitText(n.index), i.splitText(n[0].length), o.appendChild(i.cloneNode(!0)), e.parentNode.replaceChild(o, i)), !!n
			}

			function r(t, e) {
				for (var n, i = 3, s = 0; s < t.childNodes.length; s++)n = t.childNodes[s], n.nodeType === i ? s += e(n) ? 1 : 0 : r(n, e)
			}

			var a;
			s = e.mixin({}, i, s), s.node && s.pattern && (s.pattern = e.isArray(s.pattern) ? s.pattern : [s.pattern], a = n(s.pattern, s.caseSensitive, s.wordsOnly), r(s.node, o))
		}
	}(window.document), f = function () {
		"use strict";
		function n(n) {
			var s, o, a, l, c = this;
			n = n || {}, n.input || t.error("input is missing"), s = e.bind(this._onBlur, this), o = e.bind(this._onFocus, this), a = e.bind(this._onKeydown, this), l = e.bind(this._onInput, this), this.$hint = t(n.hint), this.$input = t(n.input).on("blur.tt", s).on("focus.tt", o).on("keydown.tt", a), 0 === this.$hint.length && (this.setHint = this.getHint = this.clearHint = this.clearHintIfInvalid = e.noop), e.isMsie() ? this.$input.on("keydown.tt keypress.tt cut.tt paste.tt", function (t) {
				r[t.which || t.keyCode] || e.defer(e.bind(c._onInput, c, t))
			}) : this.$input.on("input.tt", l), this.query = this.$input.val(), this.$overflowHelper = i(this.$input)
		}

		function i(e) {
			return t('<pre aria-hidden="true"></pre>').css({
				position: "absolute",
				visibility: "hidden",
				whiteSpace: "pre",
				fontFamily: e.css("font-family"),
				fontSize: e.css("font-size"),
				fontStyle: e.css("font-style"),
				fontVariant: e.css("font-variant"),
				fontWeight: e.css("font-weight"),
				wordSpacing: e.css("word-spacing"),
				letterSpacing: e.css("letter-spacing"),
				textIndent: e.css("text-indent"),
				textRendering: e.css("text-rendering"),
				textTransform: e.css("text-transform")
			}).insertAfter(e)
		}

		function s(t, e) {
			return n.normalizeQuery(t) === n.normalizeQuery(e)
		}

		function o(t) {
			return t.altKey || t.ctrlKey || t.metaKey || t.shiftKey
		}

		var r;
		return r = {
			9: "tab",
			27: "esc",
			37: "left",
			39: "right",
			13: "enter",
			38: "up",
			40: "down"
		}, n.normalizeQuery = function (t) {
			return (t || "").replace(/^\s*/g, "").replace(/\s{2,}/g, " ")
		}, e.mixin(n.prototype, h, {
			_onBlur: function () {
				this.resetInputValue(), this.trigger("blurred")
			}, _onFocus: function () {
				this.trigger("focused")
			}, _onKeydown: function (t) {
				var e = r[t.which || t.keyCode];
				this._managePreventDefault(e, t), e && this._shouldTrigger(e, t) && this.trigger(e + "Keyed", t)
			}, _onInput: function () {
				this._checkInputValue()
			}, _managePreventDefault: function (t, e) {
				var n, i, s;
				switch (t) {
					case"tab":
						i = this.getHint(), s = this.getInputValue(), n = i && i !== s && !o(e);
						break;
					case"up":
					case"down":
						n = !o(e);
						break;
					default:
						n = !1
				}
				n && e.preventDefault()
			}, _shouldTrigger: function (t, e) {
				var n;
				switch (t) {
					case"tab":
						n = !o(e);
						break;
					default:
						n = !0
				}
				return n
			}, _checkInputValue: function () {
				var t, e, n;
				t = this.getInputValue(), e = s(t, this.query), n = e ? this.query.length !== t.length : !1, this.query = t, e ? n && this.trigger("whitespaceChanged", this.query) : this.trigger("queryChanged", this.query)
			}, focus: function () {
				this.$input.focus()
			}, blur: function () {
				this.$input.blur()
			}, getQuery: function () {
				return this.query
			}, setQuery: function (t) {
				this.query = t
			}, getInputValue: function () {
				return this.$input.val()
			}, setInputValue: function (t, e) {
				this.$input.val(t), e ? this.clearHint() : this._checkInputValue()
			}, resetInputValue: function () {
				this.setInputValue(this.query, !0)
			}, getHint: function () {
				return this.$hint.val()
			}, setHint: function (t) {
				this.$hint.val(t)
			}, clearHint: function () {
				this.setHint("")
			}, clearHintIfInvalid: function () {
				var t, e, n, i;
				t = this.getInputValue(), e = this.getHint(), n = t !== e && 0 === e.indexOf(t), i = "" !== t && n && !this.hasOverflow(), !i && this.clearHint()
			}, getLanguageDirection: function () {
				return (this.$input.css("direction") || "ltr").toLowerCase()
			}, hasOverflow: function () {
				var t = this.$input.width() - 2;
				return this.$overflowHelper.text(this.getInputValue()), this.$overflowHelper.width() >= t
			}, isCursorAtEnd: function () {
				var t, n, i;
				return t = this.$input.val().length, n = this.$input[0].selectionStart, e.isNumber(n) ? n === t : document.selection ? (i = document.selection.createRange(), i.moveStart("character", -t), t === i.text.length) : !0
			}, destroy: function () {
				this.$hint.off(".tt"), this.$input.off(".tt"), this.$hint = this.$input = this.$overflowHelper = null
			}
		}), n
	}(), g = function () {
		"use strict";
		function n(n) {
			n = n || {}, n.templates = n.templates || {}, n.source || t.error("missing source"), n.name && !o(n.name) && t.error("invalid dataset name: " + n.name), this.query = null, this.highlight = !!n.highlight, this.name = n.name || e.getUniqueId(), this.source = n.source, this.displayFn = i(n.display || n.displayKey), this.templates = s(n.templates, this.displayFn), this.$el = t(c.dataset.replace("%CLASS%", this.name))
		}

		function i(t) {
			function n(e) {
				return e[t]
			}

			return t = t || "value", e.isFunction(t) ? t : n
		}

		function s(t, n) {
			function i(t) {
				return "<p>" + n(t) + "</p>"
			}

			return {
				empty: t.empty && e.templatify(t.empty),
				header: t.header && e.templatify(t.header),
				footer: t.footer && e.templatify(t.footer),
				suggestion: t.suggestion || i
			}
		}

		function o(t) {
			return /^[_a-zA-Z0-9-]+$/.test(t)
		}

		var r = "ttDataset", a = "ttValue", l = "ttDatum";
		return n.extractDatasetName = function (e) {
			return t(e).data(r)
		}, n.extractValue = function (e) {
			return t(e).data(a)
		}, n.extractDatum = function (e) {
			return t(e).data(l)
		}, e.mixin(n.prototype, h, {
			_render: function (n, i) {
				function s() {
					return g.templates.empty({query: n, isEmpty: !0})
				}

				function o() {
					function s(e) {
						var n;
						return n = t(c.suggestion).append(g.templates.suggestion(e)).data(r, g.name).data(a, g.displayFn(e)).data(l, e), n.children().each(function () {
							t(this).css(u.suggestionChild)
						}), n
					}

					var o, d;
					return o = t(c.suggestions).css(u.suggestions), d = e.map(i, s), o.append.apply(o, d), g.highlight && p({
						className: "tt-highlight",
						node: o[0],
						pattern: n
					}), o
				}

				function d() {
					return g.templates.header({query: n, isEmpty: !f})
				}

				function h() {
					return g.templates.footer({query: n, isEmpty: !f})
				}

				if (this.$el) {
					var f, g = this;
					this.$el.empty(), f = i && i.length, !f && this.templates.empty ? this.$el.html(s()).prepend(g.templates.header ? d() : null).append(g.templates.footer ? h() : null) : f && this.$el.html(o()).prepend(g.templates.header ? d() : null).append(g.templates.footer ? h() : null), this.trigger("rendered")
				}
			}, getRoot: function () {
				return this.$el
			}, update: function (t) {
				function e(e) {
					n.canceled || t !== n.query || n._render(t, e)
				}

				var n = this;
				this.query = t, this.canceled = !1, this.source(t, e)
			}, cancel: function () {
				this.canceled = !0
			}, clear: function () {
				this.cancel(), this.$el.empty(), this.trigger("rendered")
			}, isEmpty: function () {
				return this.$el.is(":empty")
			}, destroy: function () {
				this.$el = null
			}
		}), n
	}(), m = function () {
		"use strict";
		function n(n) {
			var s, o, r, a = this;
			n = n || {}, n.menu || t.error("menu is required"), this.isOpen = !1, this.isEmpty = !0, this.datasets = e.map(n.datasets, i), s = e.bind(this._onSuggestionClick, this), o = e.bind(this._onSuggestionMouseEnter, this), r = e.bind(this._onSuggestionMouseLeave, this), this.$menu = t(n.menu).on("click.tt", ".tt-suggestion", s).on("mouseenter.tt", ".tt-suggestion", o).on("mouseleave.tt", ".tt-suggestion", r), e.each(this.datasets, function (t) {
				a.$menu.append(t.getRoot()), t.onSync("rendered", a._onRendered, a)
			})
		}

		function i(t) {
			return new g(t)
		}

		return e.mixin(n.prototype, h, {
			_onSuggestionClick: function (e) {
				this.trigger("suggestionClicked", t(e.currentTarget))
			}, _onSuggestionMouseEnter: function (e) {
				this._removeCursor(), this._setCursor(t(e.currentTarget), !0)
			}, _onSuggestionMouseLeave: function () {
				this._removeCursor()
			}, _onRendered: function () {
				function t(t) {
					return t.isEmpty()
				}

				this.isEmpty = e.every(this.datasets, t), this.isEmpty ? this._hide() : this.isOpen && this._show(), this.trigger("datasetRendered")
			}, _hide: function () {
				this.$menu.hide()
			}, _show: function () {
				this.$menu.css("display", "block")
			}, _getSuggestions: function () {
				return this.$menu.find(".tt-suggestion")
			}, _getCursor: function () {
				return this.$menu.find(".tt-cursor").first()
			}, _setCursor: function (t, e) {
				t.first().addClass("tt-cursor"), !e && this.trigger("cursorMoved")
			}, _removeCursor: function () {
				this._getCursor().removeClass("tt-cursor")
			}, _moveCursor: function (t) {
				var e, n, i, s;
				if (this.isOpen) {
					if (n = this._getCursor(), e = this._getSuggestions(), this._removeCursor(), i = e.index(n) + t, i = (i + 1) % (e.length + 1) - 1, -1 === i)return this.trigger("cursorRemoved"), void 0;
					-1 > i && (i = e.length - 1), this._setCursor(s = e.eq(i)), this._ensureVisible(s)
				}
			}, _ensureVisible: function (t) {
				var e, n, i, s;
				e = t.position().top, n = e + t.outerHeight(!0), i = this.$menu.scrollTop(), s = this.$menu.height() + parseInt(this.$menu.css("paddingTop"), 10) + parseInt(this.$menu.css("paddingBottom"), 10), 0 > e ? this.$menu.scrollTop(i + e) : n > s && this.$menu.scrollTop(i + (n - s))
			}, close: function () {
				this.isOpen && (this.isOpen = !1, this._removeCursor(), this._hide(), this.trigger("closed"))
			}, open: function () {
				this.isOpen || (this.isOpen = !0, !this.isEmpty && this._show(), this.trigger("opened"))
			}, setLanguageDirection: function (t) {
				this.$menu.css("ltr" === t ? u.ltr : u.rtl)
			}, moveCursorUp: function () {
				this._moveCursor(-1)
			}, moveCursorDown: function () {
				this._moveCursor(1)
			}, getDatumForSuggestion: function (t) {
				var e = null;
				return t.length && (e = {
					raw: g.extractDatum(t),
					value: g.extractValue(t),
					datasetName: g.extractDatasetName(t)
				}), e
			}, getDatumForCursor: function () {
				return this.getDatumForSuggestion(this._getCursor().first())
			}, getDatumForTopSuggestion: function () {
				return this.getDatumForSuggestion(this._getSuggestions().first())
			}, update: function (t) {
				function n(e) {
					e.update(t)
				}

				e.each(this.datasets, n)
			}, empty: function () {
				function t(t) {
					t.clear()
				}

				e.each(this.datasets, t), this.isEmpty = !0
			}, isVisible: function () {
				return this.isOpen && !this.isEmpty
			}, destroy: function () {
				function t(t) {
					t.destroy()
				}

				this.$menu.off(".tt"), this.$menu = null, e.each(this.datasets, t)
			}
		}), n
	}(), y = function () {
		"use strict";
		function n(n) {
			var s, o, r;
			n = n || {}, n.input || t.error("missing input"), this.isActivated = !1, this.autoselect = !!n.autoselect, this.minLength = e.isNumber(n.minLength) ? n.minLength : 1, this.$node = i(n.input, n.withHint), s = this.$node.find(".tt-dropdown-menu"), o = this.$node.find(".tt-input"), r = this.$node.find(".tt-hint"), o.on("blur.tt", function (t) {
				var n, i, r;
				n = document.activeElement, i = s.is(n), r = s.has(n).length > 0, e.isMsie() && (i || r) && (t.preventDefault(), t.stopImmediatePropagation(), e.defer(function () {
					o.focus()
				}))
			}), s.on("mousedown.tt", function (t) {
				t.preventDefault()
			}), this.eventBus = n.eventBus || new d({el: o}), this.dropdown = new m({
				menu: s,
				datasets: n.datasets
			}).onSync("suggestionClicked", this._onSuggestionClicked, this).onSync("cursorMoved", this._onCursorMoved, this).onSync("cursorRemoved", this._onCursorRemoved, this).onSync("opened", this._onOpened, this).onSync("closed", this._onClosed, this).onAsync("datasetRendered", this._onDatasetRendered, this), this.input = new f({
				input: o,
				hint: r
			}).onSync("focused", this._onFocused, this).onSync("blurred", this._onBlurred, this).onSync("enterKeyed", this._onEnterKeyed, this).onSync("tabKeyed", this._onTabKeyed, this).onSync("escKeyed", this._onEscKeyed, this).onSync("upKeyed", this._onUpKeyed, this).onSync("downKeyed", this._onDownKeyed, this).onSync("leftKeyed", this._onLeftKeyed, this).onSync("rightKeyed", this._onRightKeyed, this).onSync("queryChanged", this._onQueryChanged, this).onSync("whitespaceChanged", this._onWhitespaceChanged, this), this._setLanguageDirection()
		}

		function i(e, n) {
			var i, o, a, l;
			i = t(e), o = t(c.wrapper).css(u.wrapper), a = t(c.dropdown).css(u.dropdown), l = i.clone().css(u.hint).css(s(i)), l.val("").removeData().addClass("tt-hint").removeAttr("id name placeholder required").prop("readonly", !0).attr({
				autocomplete: "off",
				spellcheck: "false",
				tabindex: -1
			}), i.data(r, {
				dir: i.attr("dir"),
				autocomplete: i.attr("autocomplete"),
				spellcheck: i.attr("spellcheck"),
				style: i.attr("style")
			}), i.addClass("tt-input").attr({autocomplete: "off", spellcheck: !1}).css(n ? u.input : u.inputWithNoHint);
			try {
				!i.attr("dir") && i.attr("dir", "auto")
			} catch (d) {
			}
			return i.wrap(o).parent().prepend(n ? l : null).append(a)
		}

		function s(t) {
			return {
				backgroundAttachment: t.css("background-attachment"),
				backgroundClip: t.css("background-clip"),
				backgroundColor: t.css("background-color"),
				backgroundImage: t.css("background-image"),
				backgroundOrigin: t.css("background-origin"),
				backgroundPosition: t.css("background-position"),
				backgroundRepeat: t.css("background-repeat"),
				backgroundSize: t.css("background-size")
			}
		}

		function o(t) {
			var n = t.find(".tt-input");
			e.each(n.data(r), function (t, i) {
				e.isUndefined(t) ? n.removeAttr(i) : n.attr(i, t)
			}), n.detach().removeData(r).removeClass("tt-input").insertAfter(t), t.remove()
		}

		var r = "ttAttrs";
		return e.mixin(n.prototype, {
			_onSuggestionClicked: function (t, e) {
				var n;
				(n = this.dropdown.getDatumForSuggestion(e)) && this._select(n)
			}, _onCursorMoved: function () {
				var t = this.dropdown.getDatumForCursor();
				this.input.setInputValue(t.value, !0), this.eventBus.trigger("cursorchanged", t.raw, t.datasetName)
			}, _onCursorRemoved: function () {
				this.input.resetInputValue(), this._updateHint()
			}, _onDatasetRendered: function () {
				this._updateHint()
			}, _onOpened: function () {
				this._updateHint(), this.eventBus.trigger("opened")
			}, _onClosed: function () {
				this.input.clearHint(), this.eventBus.trigger("closed")
			}, _onFocused: function () {
				this.isActivated = !0, this.dropdown.open()
			}, _onBlurred: function () {
				this.isActivated = !1, this.dropdown.empty(), this.dropdown.close()
			}, _onEnterKeyed: function (t, e) {
				var n, i;
				n = this.dropdown.getDatumForCursor(), i = this.dropdown.getDatumForTopSuggestion(), n ? (this._select(n), e.preventDefault()) : this.autoselect && i && (this._select(i), e.preventDefault())
			}, _onTabKeyed: function (t, e) {
				var n;
				(n = this.dropdown.getDatumForCursor()) ? (this._select(n), e.preventDefault()) : this._autocomplete(!0)
			}, _onEscKeyed: function () {
				this.dropdown.close(), this.input.resetInputValue()
			}, _onUpKeyed: function () {
				var t = this.input.getQuery();
				this.dropdown.isEmpty && t.length >= this.minLength ? this.dropdown.update(t) : this.dropdown.moveCursorUp(), this.dropdown.open()
			}, _onDownKeyed: function () {
				var t = this.input.getQuery();
				this.dropdown.isEmpty && t.length >= this.minLength ? this.dropdown.update(t) : this.dropdown.moveCursorDown(), this.dropdown.open()
			}, _onLeftKeyed: function () {
				"rtl" === this.dir && this._autocomplete()
			}, _onRightKeyed: function () {
				"ltr" === this.dir && this._autocomplete()
			}, _onQueryChanged: function (t, e) {
				this.input.clearHintIfInvalid(), e.length >= this.minLength ? this.dropdown.update(e) : this.dropdown.empty(), this.dropdown.open(), this._setLanguageDirection()
			}, _onWhitespaceChanged: function () {
				this._updateHint(), this.dropdown.open()
			}, _setLanguageDirection: function () {
				var t;
				this.dir !== (t = this.input.getLanguageDirection()) && (this.dir = t, this.$node.css("direction", t), this.dropdown.setLanguageDirection(t))
			}, _updateHint: function () {
				var t, n, i, s, o, r;
				t = this.dropdown.getDatumForTopSuggestion(), t && this.dropdown.isVisible() && !this.input.hasOverflow() ? (n = this.input.getInputValue(), i = f.normalizeQuery(n), s = e.escapeRegExChars(i), o = new RegExp("^(?:" + s + ")(.+$)", "i"), r = o.exec(t.value), r ? this.input.setHint(n + r[1]) : this.input.clearHint()) : this.input.clearHint()
			}, _autocomplete: function (t) {
				var e, n, i, s;
				e = this.input.getHint(), n = this.input.getQuery(), i = t || this.input.isCursorAtEnd(), e && n !== e && i && (s = this.dropdown.getDatumForTopSuggestion(), s && this.input.setInputValue(s.value), this.eventBus.trigger("autocompleted", s.raw, s.datasetName))
			}, _select: function (t) {
				this.input.setQuery(t.value), this.input.setInputValue(t.value, !0), this._setLanguageDirection(), this.eventBus.trigger("selected", t.raw, t.datasetName), this.dropdown.close(), e.defer(e.bind(this.dropdown.empty, this.dropdown))
			}, open: function () {
				this.dropdown.open()
			}, close: function () {
				this.dropdown.close()
			}, setVal: function (t) {
				t = e.toStr(t), this.isActivated ? this.input.setInputValue(t) : (this.input.setQuery(t), this.input.setInputValue(t, !0)), this._setLanguageDirection()
			}, getVal: function () {
				return this.input.getQuery()
			}, destroy: function () {
				this.input.destroy(), this.dropdown.destroy(), o(this.$node), this.$node = null
			}
		}), n
	}();
	!function () {
		"use strict";
		var n, i, s;
		n = t.fn.typeahead, i = "ttTypeahead", s = {
			initialize: function (n, s) {
				function o() {
					var o, r, a = t(this);
					e.each(s, function (t) {
						t.highlight = !!n.highlight
					}), r = new y({
						input: a,
						eventBus: o = new d({el: a}),
						withHint: e.isUndefined(n.hint) ? !0 : !!n.hint,
						minLength: n.minLength,
						autoselect: n.autoselect,
						datasets: s
					}), a.data(i, r)
				}

				return s = e.isArray(s) ? s : [].slice.call(arguments, 1), n = n || {}, this.each(o)
			}, open: function () {
				function e() {
					var e, n = t(this);
					(e = n.data(i)) && e.open()
				}

				return this.each(e)
			}, close: function () {
				function e() {
					var e, n = t(this);
					(e = n.data(i)) && e.close()
				}

				return this.each(e)
			}, val: function (e) {
				function n() {
					var n, s = t(this);
					(n = s.data(i)) && n.setVal(e)
				}

				function s(t) {
					var e, n;
					return (e = t.data(i)) && (n = e.getVal()), n
				}

				return arguments.length ? this.each(n) : s(this.first())
			}, destroy: function () {
				function e() {
					var e, n = t(this);
					(e = n.data(i)) && (e.destroy(), n.removeData(i))
				}

				return this.each(e)
			}
		}, t.fn.typeahead = function (e) {
			var n;
			return s[e] && "initialize" !== e ? (n = this.filter(function () {
				return !!t(this).data(i)
			}), s[e].apply(n, [].slice.call(arguments, 1))) : s.initialize.apply(this, arguments)
		}, t.fn.typeahead.noConflict = function () {
			return t.fn.typeahead = n, this
		}
	}()
}(window.jQuery), +function (t) {
	"use strict";
	function e(e) {
		return this.each(function () {
			var i = t(this), s = i.data("bs.affix"), o = "object" == typeof e && e;
			s || i.data("bs.affix", s = new n(this, o)), "string" == typeof e && s[e]()
		})
	}

	var n = function (e, i) {
		this.options = t.extend({}, n.DEFAULTS, i), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
	};
	n.VERSION = "3.3.6", n.RESET = "affix affix-top affix-bottom", n.DEFAULTS = {
		offset: 0,
		target: window
	}, n.prototype.getState = function (t, e, n, i) {
		var s = this.$target.scrollTop(), o = this.$element.offset(), r = this.$target.height();
		if (null != n && "top" == this.affixed)return n > s ? "top" : !1;
		if ("bottom" == this.affixed)return null != n ? s + this.unpin <= o.top ? !1 : "bottom" : t - i >= s + r ? !1 : "bottom";
		var a = null == this.affixed, l = a ? s : o.top, c = a ? r : e;
		return null != n && n >= s ? "top" : null != i && l + c >= t - i ? "bottom" : !1
	}, n.prototype.getPinnedOffset = function () {
		if (this.pinnedOffset)return this.pinnedOffset;
		this.$element.removeClass(n.RESET).addClass("affix");
		var t = this.$target.scrollTop(), e = this.$element.offset();
		return this.pinnedOffset = e.top - t
	}, n.prototype.checkPositionWithEventLoop = function () {
		setTimeout(t.proxy(this.checkPosition, this), 1)
	}, n.prototype.checkPosition = function () {
		if (this.$element.is(":visible")) {
			var e = this.$element.height(), i = this.options.offset, s = i.top, o = i.bottom,
				r = Math.max(t(document).height(), t(document.body).height());
			"object" != typeof i && (o = s = i), "function" == typeof s && (s = i.top(this.$element)), "function" == typeof o && (o = i.bottom(this.$element));
			var a = this.getState(r, e, s, o);
			if (this.affixed != a) {
				null != this.unpin && this.$element.css("top", "");
				var l = "affix" + (a ? "-" + a : ""), c = t.Event(l + ".bs.affix");
				if (this.$element.trigger(c), c.isDefaultPrevented())return;
				this.affixed = a, this.unpin = "bottom" == a ? this.getPinnedOffset() : null, this.$element.removeClass(n.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
			}
			"bottom" == a && this.$element.offset({top: r - e - o})
		}
	};
	var i = t.fn.affix;
	t.fn.affix = e, t.fn.affix.Constructor = n, t.fn.affix.noConflict = function () {
		return t.fn.affix = i, this
	}, t(window).on("load", function () {
		t('[data-spy="affix"]').each(function () {
			var n = t(this), i = n.data();
			i.offset = i.offset || {}, null != i.offsetBottom && (i.offset.bottom = i.offsetBottom), null != i.offsetTop && (i.offset.top = i.offsetTop), e.call(n, i)
		})
	})
}(jQuery), +function (t) {
	"use strict";
	function e(e) {
		return this.each(function () {
			var n = t(this), s = n.data("bs.alert");
			s || n.data("bs.alert", s = new i(this)), "string" == typeof e && s[e].call(n)
		})
	}

	var n = '[data-dismiss="alert"]', i = function (e) {
		t(e).on("click", n, this.close)
	};
	i.VERSION = "3.3.6", i.TRANSITION_DURATION = 150, i.prototype.close = function (e) {
		function n() {
			r.detach().trigger("closed.bs.alert").remove()
		}

		var s = t(this), o = s.attr("data-target");
		o || (o = s.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, ""));
		var r = t(o);
		e && e.preventDefault(), r.length || (r = s.closest(".alert")), r.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (r.removeClass("in"), t.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n())
	};
	var s = t.fn.alert;
	t.fn.alert = e, t.fn.alert.Constructor = i, t.fn.alert.noConflict = function () {
		return t.fn.alert = s, this
	}, t(document).on("click.bs.alert.data-api", n, i.prototype.close)
}(jQuery), +function (t) {
	"use strict";
	function e(e) {
		return this.each(function () {
			var i = t(this), s = i.data("bs.button"), o = "object" == typeof e && e;
			s || i.data("bs.button", s = new n(this, o)), "toggle" == e ? s.toggle() : e && s.setState(e)
		})
	}

	var n = function (e, i) {
		this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, i), this.isLoading = !1
	};
	n.VERSION = "3.3.6", n.DEFAULTS = {loadingText: "loading..."}, n.prototype.setState = function (e) {
		var n = "disabled", i = this.$element, s = i.is("input") ? "val" : "html", o = i.data();
		e += "Text", null == o.resetText && i.data("resetText", i[s]()), setTimeout(t.proxy(function () {
			i[s](null == o[e] ? this.options[e] : o[e]), "loadingText" == e ? (this.isLoading = !0, i.addClass(n).attr(n, n)) : this.isLoading && (this.isLoading = !1, i.removeClass(n).removeAttr(n))
		}, this), 0)
	}, n.prototype.toggle = function () {
		var t = !0, e = this.$element.closest('[data-toggle="buttons"]');
		if (e.length) {
			var n = this.$element.find("input");
			"radio" == n.prop("type") ? (n.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), n.prop("checked", this.$element.hasClass("active")), t && n.trigger("change")
		} else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
	};
	var i = t.fn.button;
	t.fn.button = e, t.fn.button.Constructor = n, t.fn.button.noConflict = function () {
		return t.fn.button = i, this
	}, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (n) {
		var i = t(n.target);
		i.hasClass("btn") || (i = i.closest(".btn")), e.call(i, "toggle"), t(n.target).is('input[type="radio"]') || t(n.target).is('input[type="checkbox"]') || n.preventDefault()
	}).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (e) {
		t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
	})
}(jQuery), +function (t) {
	"use strict";
	function e(e) {
		return this.each(function () {
			var i = t(this), s = i.data("bs.carousel"),
				o = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e),
				r = "string" == typeof e ? e : o.slide;
			s || i.data("bs.carousel", s = new n(this, o)), "number" == typeof e ? s.to(e) : r ? s[r]() : o.interval && s.pause().cycle()
		})
	}

	var n = function (e, n) {
		this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
	};
	n.VERSION = "3.3.6", n.TRANSITION_DURATION = 600, n.DEFAULTS = {
		interval: 5e3,
		pause: "hover",
		wrap: !0,
		keyboard: !0
	}, n.prototype.keydown = function (t) {
		if (!/input|textarea/i.test(t.target.tagName)) {
			switch (t.which) {
				case 37:
					this.prev();
					break;
				case 39:
					this.next();
					break;
				default:
					return
			}
			t.preventDefault()
		}
	}, n.prototype.cycle = function (e) {
		return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
	}, n.prototype.getItemIndex = function (t) {
		return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
	}, n.prototype.getItemForDirection = function (t, e) {
		var n = this.getItemIndex(e), i = "prev" == t && 0 === n || "next" == t && n == this.$items.length - 1;
		if (i && !this.options.wrap)return e;
		var s = "prev" == t ? -1 : 1, o = (n + s) % this.$items.length;
		return this.$items.eq(o)
	}, n.prototype.to = function (t) {
		var e = this, n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
		return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () {
			e.to(t)
		}) : n == t ? this.pause().cycle() : this.slide(t > n ? "next" : "prev", this.$items.eq(t))
	}, n.prototype.pause = function (e) {
		return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
	}, n.prototype.next = function () {
		return this.sliding ? void 0 : this.slide("next")
	}, n.prototype.prev = function () {
		return this.sliding ? void 0 : this.slide("prev")
	}, n.prototype.slide = function (e, i) {
		var s = this.$element.find(".item.active"), o = i || this.getItemForDirection(e, s), r = this.interval,
			a = "next" == e ? "left" : "right", l = this;
		if (o.hasClass("active"))return this.sliding = !1;
		var c = o[0], u = t.Event("slide.bs.carousel", {relatedTarget: c, direction: a});
		if (this.$element.trigger(u), !u.isDefaultPrevented()) {
			if (this.sliding = !0, r && this.pause(), this.$indicators.length) {
				this.$indicators.find(".active").removeClass("active");
				var d = t(this.$indicators.children()[this.getItemIndex(o)]);
				d && d.addClass("active")
			}
			var h = t.Event("slid.bs.carousel", {relatedTarget: c, direction: a});
			return t.support.transition && this.$element.hasClass("slide") ? (o.addClass(e), o[0].offsetWidth, s.addClass(a), o.addClass(a), s.one("bsTransitionEnd", function () {
				o.removeClass([e, a].join(" ")).addClass("active"), s.removeClass(["active", a].join(" ")), l.sliding = !1, setTimeout(function () {
					l.$element.trigger(h)
				}, 0)
			}).emulateTransitionEnd(n.TRANSITION_DURATION)) : (s.removeClass("active"), o.addClass("active"), this.sliding = !1, this.$element.trigger(h)), r && this.cycle(), this
		}
	};
	var i = t.fn.carousel;
	t.fn.carousel = e, t.fn.carousel.Constructor = n, t.fn.carousel.noConflict = function () {
		return t.fn.carousel = i, this
	};
	var s = function (n) {
		var i, s = t(this), o = t(s.attr("data-target") || (i = s.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
		if (o.hasClass("carousel")) {
			var r = t.extend({}, o.data(), s.data()), a = s.attr("data-slide-to");
			a && (r.interval = !1), e.call(o, r), a && o.data("bs.carousel").to(a), n.preventDefault()
		}
	};
	t(document).on("click.bs.carousel.data-api", "[data-slide]", s).on("click.bs.carousel.data-api", "[data-slide-to]", s), t(window).on("load", function () {
		t('[data-ride="carousel"]').each(function () {
			var n = t(this);
			e.call(n, n.data())
		})
	})
}(jQuery), +function (t) {
	"use strict";
	function e(e) {
		var n, i = e.attr("data-target") || (n = e.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
		return t(i)
	}

	function n(e) {
		return this.each(function () {
			var n = t(this), s = n.data("bs.collapse"),
				o = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e);
			!s && o.toggle && /show|hide/.test(e) && (o.toggle = !1), s || n.data("bs.collapse", s = new i(this, o)), "string" == typeof e && s[e]()
		})
	}

	var i = function (e, n) {
		this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, n), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
	};
	i.VERSION = "3.3.6", i.TRANSITION_DURATION = 350, i.DEFAULTS = {toggle: !0}, i.prototype.dimension = function () {
		var t = this.$element.hasClass("width");
		return t ? "width" : "height"
	}, i.prototype.show = function () {
		if (!this.transitioning && !this.$element.hasClass("in")) {
			var e, s = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
			if (!(s && s.length && (e = s.data("bs.collapse"), e && e.transitioning))) {
				var o = t.Event("show.bs.collapse");
				if (this.$element.trigger(o), !o.isDefaultPrevented()) {
					s && s.length && (n.call(s, "hide"), e || s.data("bs.collapse", null));
					var r = this.dimension();
					this.$element.removeClass("collapse").addClass("collapsing")[r](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
					var a = function () {
						this.$element.removeClass("collapsing").addClass("collapse in")[r](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
					};
					if (!t.support.transition)return a.call(this);
					var l = t.camelCase(["scroll", r].join("-"));
					this.$element.one("bsTransitionEnd", t.proxy(a, this)).emulateTransitionEnd(i.TRANSITION_DURATION)[r](this.$element[0][l])
				}
			}
		}
	}, i.prototype.hide = function () {
		if (!this.transitioning && this.$element.hasClass("in")) {
			var e = t.Event("hide.bs.collapse");
			if (this.$element.trigger(e), !e.isDefaultPrevented()) {
				var n = this.dimension();
				this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
				var s = function () {
					this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
				};
				return t.support.transition ? (this.$element[n](0).one("bsTransitionEnd", t.proxy(s, this)).emulateTransitionEnd(i.TRANSITION_DURATION), void 0) : s.call(this)
			}
		}
	}, i.prototype.toggle = function () {
		this[this.$element.hasClass("in") ? "hide" : "show"]()
	}, i.prototype.getParent = function () {
		return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function (n, i) {
			var s = t(i);
			this.addAriaAndCollapsedClass(e(s), s)
		}, this)).end()
	}, i.prototype.addAriaAndCollapsedClass = function (t, e) {
		var n = t.hasClass("in");
		t.attr("aria-expanded", n), e.toggleClass("collapsed", !n).attr("aria-expanded", n)
	};
	var s = t.fn.collapse;
	t.fn.collapse = n, t.fn.collapse.Constructor = i, t.fn.collapse.noConflict = function () {
		return t.fn.collapse = s, this
	}, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (i) {
		var s = t(this);
		s.attr("data-target") || i.preventDefault();
		var o = e(s), r = o.data("bs.collapse"), a = r ? "toggle" : s.data();
		n.call(o, a)
	})
}(jQuery), +function (t) {
	"use strict";
	function e(e) {
		var n = e.attr("data-target");
		n || (n = e.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
		var i = n && t(n);
		return i && i.length ? i : e.parent()
	}

	function n(n) {
		n && 3 === n.which || (t(s).remove(), t(o).each(function () {
			var i = t(this), s = e(i), o = {relatedTarget: this};
			s.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && t.contains(s[0], n.target) || (s.trigger(n = t.Event("hide.bs.dropdown", o)), n.isDefaultPrevented() || (i.attr("aria-expanded", "false"), s.removeClass("open").trigger(t.Event("hidden.bs.dropdown", o)))))
		}))
	}

	function i(e) {
		return this.each(function () {
			var n = t(this), i = n.data("bs.dropdown");
			i || n.data("bs.dropdown", i = new r(this)), "string" == typeof e && i[e].call(n)
		})
	}

	var s = ".dropdown-backdrop", o = '[data-toggle="dropdown"]', r = function (e) {
		t(e).on("click.bs.dropdown", this.toggle)
	};
	r.VERSION = "3.3.6", r.prototype.toggle = function (i) {
		var s = t(this);
		if (!s.is(".disabled, :disabled")) {
			var o = e(s), r = o.hasClass("open");
			if (n(), !r) {
				"ontouchstart" in document.documentElement && !o.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", n);
				var a = {relatedTarget: this};
				if (o.trigger(i = t.Event("show.bs.dropdown", a)), i.isDefaultPrevented())return;
				s.trigger("focus").attr("aria-expanded", "true"), o.toggleClass("open").trigger(t.Event("shown.bs.dropdown", a))
			}
			return !1
		}
	}, r.prototype.keydown = function (n) {
		if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName)) {
			var i = t(this);
			if (n.preventDefault(), n.stopPropagation(), !i.is(".disabled, :disabled")) {
				var s = e(i), r = s.hasClass("open");
				if (!r && 27 != n.which || r && 27 == n.which)return 27 == n.which && s.find(o).trigger("focus"), i.trigger("click");
				var a = " li:not(.disabled):visible a", l = s.find(".dropdown-menu" + a);
				if (l.length) {
					var c = l.index(n.target);
					38 == n.which && c > 0 && c--, 40 == n.which && c < l.length - 1 && c++, ~c || (c = 0), l.eq(c).trigger("focus")
				}
			}
		}
	};
	var a = t.fn.dropdown;
	t.fn.dropdown = i, t.fn.dropdown.Constructor = r, t.fn.dropdown.noConflict = function () {
		return t.fn.dropdown = a, this
	}, t(document).on("click.bs.dropdown.data-api", n).on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
		t.stopPropagation()
	}).on("click.bs.dropdown.data-api", o, r.prototype.toggle).on("keydown.bs.dropdown.data-api", o, r.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", r.prototype.keydown)
}(jQuery), +function (t) {
	"use strict";
	function e(e, i) {
		return this.each(function () {
			var s = t(this), o = s.data("bs.modal"), r = t.extend({}, n.DEFAULTS, s.data(), "object" == typeof e && e);
			o || s.data("bs.modal", o = new n(this, r)), "string" == typeof e ? o[e](i) : r.show && o.show(i)
		})
	}

	var n = function (e, n) {
		this.options = n, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function () {
			this.$element.trigger("loaded.bs.modal")
		}, this))
	};
	n.VERSION = "3.3.6", n.TRANSITION_DURATION = 300, n.BACKDROP_TRANSITION_DURATION = 150, n.DEFAULTS = {
		backdrop: !0,
		keyboard: !0,
		show: !0
	}, n.prototype.toggle = function (t) {
		return this.isShown ? this.hide() : this.show(t)
	}, n.prototype.show = function (e) {
		var i = this, s = t.Event("show.bs.modal", {relatedTarget: e});
		this.$element.trigger(s), this.isShown || s.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
			i.$element.one("mouseup.dismiss.bs.modal", function (e) {
				t(e.target).is(i.$element) && (i.ignoreBackdropClick = !0)
			})
		}), this.backdrop(function () {
			var s = t.support.transition && i.$element.hasClass("fade");
			i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), i.adjustDialog(), s && i.$element[0].offsetWidth, i.$element.addClass("in"), i.enforceFocus();
			var o = t.Event("shown.bs.modal", {relatedTarget: e});
			s ? i.$dialog.one("bsTransitionEnd", function () {
				i.$element.trigger("focus").trigger(o)
			}).emulateTransitionEnd(n.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(o)
		}))
	}, n.prototype.hide = function (e) {
		e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal())
	}, n.prototype.enforceFocus = function () {
		t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function (t) {
			this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
		}, this))
	}, n.prototype.escape = function () {
		this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function (t) {
			27 == t.which && this.hide()
		}, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
	}, n.prototype.resize = function () {
		this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
	}, n.prototype.hideModal = function () {
		var t = this;
		this.$element.hide(), this.backdrop(function () {
			t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
		})
	}, n.prototype.removeBackdrop = function () {
		this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
	}, n.prototype.backdrop = function (e) {
		var i = this, s = this.$element.hasClass("fade") ? "fade" : "";
		if (this.isShown && this.options.backdrop) {
			var o = t.support.transition && s;
			if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + s).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function (t) {
					return this.ignoreBackdropClick ? (this.ignoreBackdropClick = !1, void 0) : (t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()), void 0)
				}, this)), o && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e)return;
			o ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : e()
		} else if (!this.isShown && this.$backdrop) {
			this.$backdrop.removeClass("in");
			var r = function () {
				i.removeBackdrop(), e && e()
			};
			t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", r).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : r()
		} else e && e()
	}, n.prototype.handleUpdate = function () {
		this.adjustDialog()
	}, n.prototype.adjustDialog = function () {
		var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
		this.$element.css({
			paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
			paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
		})
	}, n.prototype.resetAdjustments = function () {
		this.$element.css({paddingLeft: "", paddingRight: ""})
	}, n.prototype.checkScrollbar = function () {
		var t = window.innerWidth;
		if (!t) {
			var e = document.documentElement.getBoundingClientRect();
			t = e.right - Math.abs(e.left)
		}
		this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
	}, n.prototype.setScrollbar = function () {
		var t = parseInt(this.$body.css("padding-right") || 0, 10);
		this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
	}, n.prototype.resetScrollbar = function () {
		this.$body.css("padding-right", this.originalBodyPad)
	}, n.prototype.measureScrollbar = function () {
		var t = document.createElement("div");
		t.className = "modal-scrollbar-measure", this.$body.append(t);
		var e = t.offsetWidth - t.clientWidth;
		return this.$body[0].removeChild(t), e
	};
	var i = t.fn.modal;
	t.fn.modal = e, t.fn.modal.Constructor = n, t.fn.modal.noConflict = function () {
		return t.fn.modal = i, this
	}, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (n) {
		var i = t(this), s = i.attr("href"), o = t(i.attr("data-target") || s && s.replace(/.*(?=#[^\s]+$)/, "")),
			r = o.data("bs.modal") ? "toggle" : t.extend({remote: !/#/.test(s) && s}, o.data(), i.data());
		i.is("a") && n.preventDefault(), o.one("show.bs.modal", function (t) {
			t.isDefaultPrevented() || o.one("hidden.bs.modal", function () {
				i.is(":visible") && i.trigger("focus")
			})
		}), e.call(o, r, this)
	})
}(jQuery), +function (t) {
	"use strict";
	function e(e) {
		return this.each(function () {
			var i = t(this), s = i.data("bs.tooltip"), o = "object" == typeof e && e;
			(s || !/destroy|hide/.test(e)) && (s || i.data("bs.tooltip", s = new n(this, o)), "string" == typeof e && s[e]())
		})
	}

	var n = function (t, e) {
		this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
	};
	n.VERSION = "3.3.6", n.TRANSITION_DURATION = 150, n.DEFAULTS = {
		animation: !0,
		placement: "top",
		selector: !1,
		template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
		trigger: "hover focus",
		title: "",
		delay: 0,
		html: !1,
		container: !1,
		viewport: {selector: "body", padding: 0}
	}, n.prototype.init = function (e, n, i) {
		if (this.enabled = !0, this.type = e, this.$element = t(n), this.options = this.getOptions(i), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
				click: !1,
				hover: !1,
				focus: !1
			}, this.$element[0] instanceof document.constructor && !this.options.selector)throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
		for (var s = this.options.trigger.split(" "), o = s.length; o--;) {
			var r = s[o];
			if ("click" == r) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this)); else if ("manual" != r) {
				var a = "hover" == r ? "mouseenter" : "focusin", l = "hover" == r ? "mouseleave" : "focusout";
				this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
			}
		}
		this.options.selector ? this._options = t.extend({}, this.options, {
			trigger: "manual",
			selector: ""
		}) : this.fixTitle()
	}, n.prototype.getDefaults = function () {
		return n.DEFAULTS
	}, n.prototype.getOptions = function (e) {
		return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
			show: e.delay,
			hide: e.delay
		}), e
	}, n.prototype.getDelegateOptions = function () {
		var e = {}, n = this.getDefaults();
		return this._options && t.each(this._options, function (t, i) {
			n[t] != i && (e[t] = i)
		}), e
	}, n.prototype.enter = function (e) {
		var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
		return n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusin" == e.type ? "focus" : "hover"] = !0), n.tip().hasClass("in") || "in" == n.hoverState ? (n.hoverState = "in", void 0) : (clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? (n.timeout = setTimeout(function () {
			"in" == n.hoverState && n.show()
		}, n.options.delay.show), void 0) : n.show())
	}, n.prototype.isInStateTrue = function () {
		for (var t in this.inState)if (this.inState[t])return !0;
		return !1
	}, n.prototype.leave = function (e) {
		var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
		return n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusout" == e.type ? "focus" : "hover"] = !1), n.isInStateTrue() ? void 0 : (clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? (n.timeout = setTimeout(function () {
			"out" == n.hoverState && n.hide()
		}, n.options.delay.hide), void 0) : n.hide())
	}, n.prototype.show = function () {
		var e = t.Event("show.bs." + this.type);
		if (this.hasContent() && this.enabled) {
			this.$element.trigger(e);
			var i = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
			if (e.isDefaultPrevented() || !i)return;
			var s = this, o = this.tip(), r = this.getUID(this.type);
			this.setContent(), o.attr("id", r), this.$element.attr("aria-describedby", r), this.options.animation && o.addClass("fade");
			var a = "function" == typeof this.options.placement ? this.options.placement.call(this, o[0], this.$element[0]) : this.options.placement,
				l = /\s?auto?\s?/i, c = l.test(a);
			c && (a = a.replace(l, "") || "top"), o.detach().css({
				top: 0,
				left: 0,
				display: "block"
			}).addClass(a).data("bs." + this.type, this), this.options.container ? o.appendTo(this.options.container) : o.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
			var u = this.getPosition(), d = o[0].offsetWidth, h = o[0].offsetHeight;
			if (c) {
				var p = a, f = this.getPosition(this.$viewport);
				a = "bottom" == a && u.bottom + h > f.bottom ? "top" : "top" == a && u.top - h < f.top ? "bottom" : "right" == a && u.right + d > f.width ? "left" : "left" == a && u.left - d < f.left ? "right" : a, o.removeClass(p).addClass(a)
			}
			var g = this.getCalculatedOffset(a, u, d, h);
			this.applyPlacement(g, a);
			var m = function () {
				var t = s.hoverState;
				s.$element.trigger("shown.bs." + s.type), s.hoverState = null, "out" == t && s.leave(s)
			};
			t.support.transition && this.$tip.hasClass("fade") ? o.one("bsTransitionEnd", m).emulateTransitionEnd(n.TRANSITION_DURATION) : m()
		}
	}, n.prototype.applyPlacement = function (e, n) {
		var i = this.tip(), s = i[0].offsetWidth, o = i[0].offsetHeight, r = parseInt(i.css("margin-top"), 10),
			a = parseInt(i.css("margin-left"), 10);
		isNaN(r) && (r = 0), isNaN(a) && (a = 0), e.top += r, e.left += a, t.offset.setOffset(i[0], t.extend({
			using: function (t) {
				i.css({top: Math.round(t.top), left: Math.round(t.left)})
			}
		}, e), 0), i.addClass("in");
		var l = i[0].offsetWidth, c = i[0].offsetHeight;
		"top" == n && c != o && (e.top = e.top + o - c);
		var u = this.getViewportAdjustedDelta(n, e, l, c);
		u.left ? e.left += u.left : e.top += u.top;
		var d = /top|bottom/.test(n), h = d ? 2 * u.left - s + l : 2 * u.top - o + c,
			p = d ? "offsetWidth" : "offsetHeight";
		i.offset(e), this.replaceArrow(h, i[0][p], d)
	}, n.prototype.replaceArrow = function (t, e, n) {
		this.arrow().css(n ? "left" : "top", 50 * (1 - t / e) + "%").css(n ? "top" : "left", "")
	}, n.prototype.setContent = function () {
		var t = this.tip(), e = this.getTitle();
		t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
	}, n.prototype.hide = function (e) {
		function i() {
			"in" != s.hoverState && o.detach(), s.$element.removeAttr("aria-describedby").trigger("hidden.bs." + s.type), e && e()
		}

		var s = this, o = t(this.$tip), r = t.Event("hide.bs." + this.type);
		return this.$element.trigger(r), r.isDefaultPrevented() ? void 0 : (o.removeClass("in"), t.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i(), this.hoverState = null, this)
	}, n.prototype.fixTitle = function () {
		var t = this.$element;
		(t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
	}, n.prototype.hasContent = function () {
		return this.getTitle()
	}, n.prototype.getPosition = function (e) {
		e = e || this.$element;
		var n = e[0], i = "BODY" == n.tagName, s = n.getBoundingClientRect();
		null == s.width && (s = t.extend({}, s, {width: s.right - s.left, height: s.bottom - s.top}));
		var o = i ? {top: 0, left: 0} : e.offset(),
			r = {scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()},
			a = i ? {width: t(window).width(), height: t(window).height()} : null;
		return t.extend({}, s, r, a, o)
	}, n.prototype.getCalculatedOffset = function (t, e, n, i) {
		return "bottom" == t ? {
			top: e.top + e.height,
			left: e.left + e.width / 2 - n / 2
		} : "top" == t ? {
			top: e.top - i,
			left: e.left + e.width / 2 - n / 2
		} : "left" == t ? {top: e.top + e.height / 2 - i / 2, left: e.left - n} : {
			top: e.top + e.height / 2 - i / 2,
			left: e.left + e.width
		}
	}, n.prototype.getViewportAdjustedDelta = function (t, e, n, i) {
		var s = {top: 0, left: 0};
		if (!this.$viewport)return s;
		var o = this.options.viewport && this.options.viewport.padding || 0, r = this.getPosition(this.$viewport);
		if (/right|left/.test(t)) {
			var a = e.top - o - r.scroll, l = e.top + o - r.scroll + i;
			a < r.top ? s.top = r.top - a : l > r.top + r.height && (s.top = r.top + r.height - l)
		} else {
			var c = e.left - o, u = e.left + o + n;
			c < r.left ? s.left = r.left - c : u > r.right && (s.left = r.left + r.width - u)
		}
		return s
	}, n.prototype.getTitle = function () {
		var t, e = this.$element, n = this.options;
		return t = e.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(e[0]) : n.title)
	}, n.prototype.getUID = function (t) {
		do t += ~~(1e6 * Math.random()); while (document.getElementById(t));
		return t
	}, n.prototype.tip = function () {
		if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length))throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
		return this.$tip
	}, n.prototype.arrow = function () {
		return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
	}, n.prototype.enable = function () {
		this.enabled = !0
	}, n.prototype.disable = function () {
		this.enabled = !1
	}, n.prototype.toggleEnabled = function () {
		this.enabled = !this.enabled
	}, n.prototype.toggle = function (e) {
		var n = this;
		e && (n = t(e.currentTarget).data("bs." + this.type), n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n))), e ? (n.inState.click = !n.inState.click, n.isInStateTrue() ? n.enter(n) : n.leave(n)) : n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
	}, n.prototype.destroy = function () {
		var t = this;
		clearTimeout(this.timeout), this.hide(function () {
			t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null
		})
	};
	var i = t.fn.tooltip;
	t.fn.tooltip = e, t.fn.tooltip.Constructor = n, t.fn.tooltip.noConflict = function () {
		return t.fn.tooltip = i, this
	}
}(jQuery), +function (t) {
	"use strict";
	function e(e) {
		return this.each(function () {
			var i = t(this), s = i.data("bs.popover"), o = "object" == typeof e && e;
			(s || !/destroy|hide/.test(e)) && (s || i.data("bs.popover", s = new n(this, o)), "string" == typeof e && s[e]())
		})
	}

	var n = function (t, e) {
		this.init("popover", t, e)
	};
	if (!t.fn.tooltip)throw new Error("Popover requires tooltip.js");
	n.VERSION = "3.3.6", n.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
		placement: "right",
		trigger: "click",
		content: "",
		template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
	}), n.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), n.prototype.constructor = n, n.prototype.getDefaults = function () {
		return n.DEFAULTS
	}, n.prototype.setContent = function () {
		var t = this.tip(), e = this.getTitle(), n = this.getContent();
		t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
	}, n.prototype.hasContent = function () {
		return this.getTitle() || this.getContent()
	}, n.prototype.getContent = function () {
		var t = this.$element, e = this.options;
		return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
	}, n.prototype.arrow = function () {
		return this.$arrow = this.$arrow || this.tip().find(".arrow")
	};
	var i = t.fn.popover;
	t.fn.popover = e, t.fn.popover.Constructor = n, t.fn.popover.noConflict = function () {
		return t.fn.popover = i, this
	}
}(jQuery), +function (t) {
	"use strict";
	function e(n, i) {
		this.$body = t(document.body), this.$scrollElement = t(n).is(document.body) ? t(window) : t(n), this.options = t.extend({}, e.DEFAULTS, i), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
	}

	function n(n) {
		return this.each(function () {
			var i = t(this), s = i.data("bs.scrollspy"), o = "object" == typeof n && n;
			s || i.data("bs.scrollspy", s = new e(this, o)), "string" == typeof n && s[n]()
		})
	}

	e.VERSION = "3.3.6", e.DEFAULTS = {offset: 10}, e.prototype.getScrollHeight = function () {
		return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
	}, e.prototype.refresh = function () {
		var e = this, n = "offset", i = 0;
		this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (n = "position", i = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
			var e = t(this), s = e.data("target") || e.attr("href"), o = /^#./.test(s) && t(s);
			return o && o.length && o.is(":visible") && [[o[n]().top + i, s]] || null
		}).sort(function (t, e) {
			return t[0] - e[0]
		}).each(function () {
			e.offsets.push(this[0]), e.targets.push(this[1])
		})
	}, e.prototype.process = function () {
		var t, e = this.$scrollElement.scrollTop() + this.options.offset, n = this.getScrollHeight(),
			i = this.options.offset + n - this.$scrollElement.height(), s = this.offsets, o = this.targets,
			r = this.activeTarget;
		if (this.scrollHeight != n && this.refresh(), e >= i)return r != (t = o[o.length - 1]) && this.activate(t);
		if (r && e < s[0])return this.activeTarget = null, this.clear();
		for (t = s.length; t--;)r != o[t] && e >= s[t] && (void 0 === s[t + 1] || e < s[t + 1]) && this.activate(o[t])
	}, e.prototype.activate = function (e) {
		this.activeTarget = e, this.clear();
		var n = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
			i = t(n).parents("li").addClass("active");
		i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy")
	}, e.prototype.clear = function () {
		t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
	};
	var i = t.fn.scrollspy;
	t.fn.scrollspy = n, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function () {
		return t.fn.scrollspy = i, this
	}, t(window).on("load.bs.scrollspy.data-api", function () {
		t('[data-spy="scroll"]').each(function () {
			var e = t(this);
			n.call(e, e.data())
		})
	})
}(jQuery), +function (t) {
	"use strict";
	function e(e) {
		return this.each(function () {
			var i = t(this), s = i.data("bs.tab");
			s || i.data("bs.tab", s = new n(this)), "string" == typeof e && s[e]()
		})
	}

	var n = function (e) {
		this.element = t(e)
	};
	n.VERSION = "3.3.6", n.TRANSITION_DURATION = 150, n.prototype.show = function () {
		var e = this.element, n = e.closest("ul:not(.dropdown-menu)"), i = e.data("target");
		if (i || (i = e.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
			var s = n.find(".active:last a"), o = t.Event("hide.bs.tab", {relatedTarget: e[0]}),
				r = t.Event("show.bs.tab", {relatedTarget: s[0]});
			if (s.trigger(o), e.trigger(r), !r.isDefaultPrevented() && !o.isDefaultPrevented()) {
				var a = t(i);
				this.activate(e.closest("li"), n), this.activate(a, a.parent(), function () {
					s.trigger({type: "hidden.bs.tab", relatedTarget: e[0]}), e.trigger({
						type: "shown.bs.tab",
						relatedTarget: s[0]
					})
				})
			}
		}
	}, n.prototype.activate = function (e, i, s) {
		function o() {
			r.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), a ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), s && s()
		}

		var r = i.find("> .active"),
			a = s && t.support.transition && (r.length && r.hasClass("fade") || !!i.find("> .fade").length);
		r.length && a ? r.one("bsTransitionEnd", o).emulateTransitionEnd(n.TRANSITION_DURATION) : o(), r.removeClass("in")
	};
	var i = t.fn.tab;
	t.fn.tab = e, t.fn.tab.Constructor = n, t.fn.tab.noConflict = function () {
		return t.fn.tab = i, this
	};
	var s = function (n) {
		n.preventDefault(), e.call(t(this), "show")
	};
	t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', s).on("click.bs.tab.data-api", '[data-toggle="pill"]', s)
}(jQuery), +function (t) {
	"use strict";
	function e() {
		var t = document.createElement("bootstrap"), e = {
			WebkitTransition: "webkitTransitionEnd",
			MozTransition: "transitionend",
			OTransition: "oTransitionEnd otransitionend",
			transition: "transitionend"
		};
		for (var n in e)if (void 0 !== t.style[n])return {end: e[n]};
		return !1
	}

	t.fn.emulateTransitionEnd = function (e) {
		var n = !1, i = this;
		t(this).one("bsTransitionEnd", function () {
			n = !0
		});
		var s = function () {
			n || t(i).trigger(t.support.transition.end)
		};
		return setTimeout(s, e), this
	}, t(function () {
		t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
			bindType: t.support.transition.end,
			delegateType: t.support.transition.end,
			handle: function (e) {
				return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
			}
		})
	})
}(jQuery), function (t) {
	"use strict";
	var e = function (t) {
		return (t || "ui-id") + "-" + Math.floor(1e3 * Math.random() + 1)
	}, n = function (e, n, i) {
		var s = (e.attr(n) || "").split(/\s+/), o = t.inArray(i, s);
		-1 !== o && s.splice(o, 1), s = t.trim(s.join(" ")), s ? e.attr(n, s) : e.removeAttr(n)
	};
	t(".alert").attr("role", "alert"), t(".close").removeAttr("aria-hidden").wrapInner('<span aria-hidden="true"></span>').append('<span class="sr-only">Close</span>');
	var i = t.fn.tooltip.Constructor.prototype.show, s = t.fn.tooltip.Constructor.prototype.hide;
	t.fn.tooltip.Constructor.prototype.show = function () {
		i.apply(this, arguments);
		var t = this.tip(), n = t.attr("id") || e("ui-tooltip");
		t.attr({role: "tooltip", id: n}), this.$element.attr("aria-describedby", n)
	}, t.fn.tooltip.Constructor.prototype.hide = function () {
		return s.apply(this, arguments), n(this.$element, "aria-describedby", this.tip().attr("id")), this
	};
	var o = t.fn.popover.Constructor.prototype.setContent, r = t.fn.popover.Constructor.prototype.hide;
	t.fn.popover.Constructor.prototype.setContent = function () {
		o.apply(this, arguments);
		var t = this.tip(), n = t.attr("id") || e("ui-tooltip");
		t.attr({role: "alert", id: n}), this.$element.attr("aria-describedby", n), this.$element.focus()
	}, t.fn.popover.Constructor.prototype.hide = function () {
		return r.apply(this, arguments), n(this.$element, "aria-describedby", this.tip().attr("id")), this
	}, t(".modal-dialog").attr({role: "document"});
	var a = t.fn.modal.Constructor.prototype.hide;
	t.fn.modal.Constructor.prototype.hide = function () {
		var t = this.$element.parent().find('[data-target="#' + this.$element.attr("id") + '"]');
		a.apply(this, arguments), t.focus()
	};
	var l, c = "[data-toggle=dropdown]", u = t(c).parent().find("ul").attr("role", "menu"),
		d = u.find("li").attr("role", "presentation");
	d.find("a").attr({role: "menuitem", tabIndex: "-1"}), t(c).attr({
		"aria-haspopup": "true",
		"aria-expanded": "false"
	}), t(c).parent().on("shown.bs.dropdown", function () {
		l = t(this);
		var e = l.find(c);
		e.attr("aria-expanded", "true")
	}), t(c).parent().on("hidden.bs.dropdown", function () {
		l = t(this);
		var e = l.find(c);
		e.attr("aria-expanded", "false")
	}), t.fn.dropdown.Constructor.prototype.keydown = function (e) {
		var n;
		/(32)/.test(e.keyCode) && (n = t(this).parent(), t(this).trigger("click"), e.preventDefault() && e.stopPropagation())
	};
	var h = t(".nav-tabs, .nav-pills"), p = h.children("li"), f = h.find('[data-toggle="tab"], [data-toggle="pill"]');
	h.attr("role", "tablist"), p.attr("role", "presentation"), f.attr("role", "tab"), f.each(function () {
		var n = t(t(this).attr("href")), i = t(this), s = i.attr("id") || e("ui-tab");
		i.attr("id", s), i.parent().hasClass("active") ? (i.attr({
			tabIndex: "0",
			"aria-selected": "true",
			"aria-controls": i.attr("href").substr(1)
		}), n.attr({role: "tabpanel", "aria-hidden": "false", "aria-labelledby": s})) : (i.attr({
			tabIndex: "-1",
			"aria-selected": "false",
			"aria-controls": i.attr("href").substr(1)
		}), n.attr({role: "tabpanel", "aria-hidden": "true", "aria-labelledby": s}))
	}), t.fn.tab.Constructor.prototype.keydown = function (e) {
		var n, i, s = t(this), o = s.closest("ul[role=tablist] "), r = e.which || e.keyCode;
		if (s = t(this), /(37|38|39|40)/.test(r)) {
			n = o.find("[role=tab]:visible"), i = n.index(n.filter(":focus")), (38 == r || 37 == r) && i--, (39 == r || 40 == r) && i++, 0 > i && (i = n.length - 1), i == n.length && (i = 0);
			var a = n.eq(i);
			"tab" === a.attr("role") && a.focus(), e.preventDefault(), e.stopPropagation()
		}
	}, t(document).on("keydown.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', t.fn.tab.Constructor.prototype.keydown);
	var g = t.fn.tab.Constructor.prototype.activate;
	t.fn.tab.Constructor.prototype.activate = function (t, e) {
		var n = e.find("> .active");
		n.find("[data-toggle=tab], [data-toggle=pill]").attr({
			tabIndex: "-1",
			"aria-selected": !1
		}), n.filter(".tab-pane").attr({"aria-hidden": !0}), g.apply(this, arguments), t.addClass("active"), t.find("[data-toggle=tab], [data-toggle=pill]").attr({
			tabIndex: "0",
			"aria-selected": !0
		}), t.filter(".tab-pane").attr({"aria-hidden": !1})
	};
	var m = t('[data-toggle="collapse"]');
	m.attr({role: "tab", "aria-selected": "false", "aria-expanded": "false"}), m.each(function () {
		var n = t(this), i = n.attr("data-target") ? t(n.attr("data-target")) : t(n.attr("href")),
			s = n.attr("data-parent"), o = s && t(s), r = n.attr("id") || e("ui-collapse");
		t(o).find("div:not(.collapse,.panel-body), h4").attr("role", "presentation"), n.attr("id", r), o && (o.attr({
			role: "tablist",
			"aria-multiselectable": "true"
		}), i.hasClass("in") ? (n.attr({
			"aria-controls": n.attr("href").substr(1),
			"aria-selected": "true",
			"aria-expanded": "true",
			tabindex: "0"
		}), i.attr({
			role: "tabpanel",
			tabindex: "0",
			"aria-labelledby": r,
			"aria-hidden": "false"
		})) : (n.attr({"aria-controls": n.attr("href").substr(1), tabindex: "-1"}), i.attr({
			role: "tabpanel",
			tabindex: "-1",
			"aria-labelledby": r,
			"aria-hidden": "true"
		})))
	});
	var y = t.fn.collapse.Constructor.prototype.toggle;
	t.fn.collapse.Constructor.prototype.toggle = function () {
		var e, n = this.$parent && this.$parent.find('[aria-expanded="true"]');
		if (n) {
			{
				var i, s = n.attr("data-target") || (e = n.attr("href")) && e.replace(/.*(?=#[^\s]+$)/, ""), o = t(s),
					r = this.$element;
				this.$parent
			}
			this.$parent && (i = this.$parent.find('[data-toggle=collapse][href="#' + this.$element.attr("id") + '"]')), y.apply(this, arguments), t.support.transition && this.$element.one(t.support.transition.end, function () {
				n.attr({
					"aria-selected": "false",
					"aria-expanded": "false",
					tabIndex: "-1"
				}), o.attr({"aria-hidden": "true", tabIndex: "-1"}), i.attr({
					"aria-selected": "true",
					"aria-expanded": "true",
					tabIndex: "0"
				}), r.hasClass("in") ? r.attr({
					"aria-hidden": "false",
					tabIndex: "0"
				}) : (i.attr({"aria-selected": "false", "aria-expanded": "false"}), r.attr({
					"aria-hidden": "true",
					tabIndex: "-1"
				}))
			})
		} else y.apply(this, arguments)
	}, t.fn.collapse.Constructor.prototype.keydown = function (e) {
		var n, i, s = t(this), o = s.closest("div[role=tablist] "), r = e.which || e.keyCode;
		s = t(this), /(32|37|38|39|40)/.test(r) && (32 == r && s.click(), n = o.find("[role=tab]"), i = n.index(n.filter(":focus")), (38 == r || 37 == r) && i--, (39 == r || 40 == r) && i++, 0 > i && (i = n.length - 1), i == n.length && (i = 0), n.eq(i).focus(), e.preventDefault(), e.stopPropagation())
	}, t(document).on("keydown.collapse.data-api", '[data-toggle="collapse"]', t.fn.collapse.Constructor.prototype.keydown), t(".carousel").each(function () {
		var e = t(this), n = e.find('[data-slide="prev"]'), i = e.find('[data-slide="next"]'), s = e.find(".item"),
			o = s.parent();
		e.attr({"data-interval": "false", "data-wrap": "false"}), o.attr("role", "listbox"), s.attr("role", "option");
		var r = document.createElement("span");
		r.setAttribute("class", "sr-only"), r.innerHTML = "Previous";
		var a = document.createElement("span");
		a.setAttribute("class", "sr-only"), a.innerHTML = "Next", n.attr("role", "button"), i.attr("role", "button"), n.append(r), i.append(a), s.each(function () {
			var e = t(this);
			e.hasClass("active") ? e.attr({"aria-selected": "true", tabindex: "0"}) : e.attr({
				"aria-selected": "false",
				tabindex: "-1"
			})
		})
	});
	var v = t.fn.carousel.Constructor.prototype.slide;
	t.fn.carousel.Constructor.prototype.slide = function (e, n) {
		var i = this.$element.find(".item.active"), s = n || i[e]();
		v.apply(this, arguments), i.one(t.support.transition.end, function () {
			i.attr({"aria-selected": !1, tabIndex: "-1"}), s.attr({"aria-selected": !0, tabIndex: "0"})
		})
	}, t.fn.carousel.Constructor.prototype.keydown = function (e) {
		var n, i = t(this), s = i.closest("div[role=listbox]"), o = s.find("[role=option]"), r = s.parent(),
			a = e.which || e.keyCode;
		/(37|38|39|40)/.test(a) && (n = o.index(o.filter(".active")), (37 == a || 38 == a) && (r.carousel("prev"), n--, 0 > n ? n = o.length - 1 : i.prev().focus()), (39 == a || 40 == a) && (r.carousel("next"), n++, n == o.length ? n = 0 : i.one(t.support.transition.end, function () {
			i.next().focus()
		})), e.preventDefault(), e.stopPropagation())
	}, t(document).on("keydown.carousel.data-api", "div[role=option]", t.fn.carousel.Constructor.prototype.keydown)
}(jQuery), function (t) {
	"function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}(function (t) {
	function e(e, s) {
		this._name = i, this._defaults = n, this.element = e, this.$element = t(e), this.options = t.extend({}, n, s), this.init()
	}

	var n, i = "drilldown";
	n = {
		event: "click",
		selector: "a",
		speed: 100,
		cssClass: {container: i + "-container", root: i + "-root", sub: i + "-sub", back: i + "-back"}
	}, e.prototype = {
		init: function () {
			var e = this;
			this.history = [], this.css = {
				"float": "left",
				width: null
			}, this.$container = this.$element.find("." + this.options.cssClass.container), this.$element.on(this.options.event, this.options.selector, function (n) {
				e.handleAction.call(e, n, t(this))
			})
		}, handleAction: function (t, e) {
			var n = e.nextAll("." + this.options.cssClass.sub), i = !0;
			n.length ? this.down(n) : e.closest("." + this.options.cssClass.back).length ? this.up() : i = !1, i && "A" === e.prop("tagName") && t.preventDefault()
		}, down: function (t) {
			var e = this;
			t.length && (this.css.width = this.$element.outerWidth(), this.$container.width(2 * this.css.width), t = t.clone(!0).removeClass(this.options.cssClass.sub).addClass(this.options.cssClass.root), this.$container.append(t), this.animateDrilling(-1 * this.css.width, function () {
				var n = t.prev();
				e.history.push(n.detach()), e.restoreState.call(e, t)
			}))
		}, up: function () {
			var t = this, e = this.history.pop();
			this.css.width = this.$element.outerWidth(), this.$container.width(2 * this.css.width), this.$container.prepend(e), this.animateDrilling(0, function () {
				e.next().remove(), t.restoreState.call(t, e)
			})
		}, animateDrilling: function (t, e) {
			var n = this.$container.children("." + this.options.cssClass.root);
			n.css(this.css), n.first().animate({"margin-left": t}, this.options.speed, e)
		}, restoreState: function (t) {
			t.css({"float": "", width: ""}), this.$container.width("auto")
		}
	}, t.fn[i] = function (n) {
		return this.each(function () {
			t.data(this, i) || t.data(this, i, new e(this, n))
		})
	}
}), function (t, e, n, i) {
	var s = function () {
		var s = t(this);
		s[i]() || (s.addClass(e), "password" === s.attr("type") && (s.attr("type", "text"), s.data(e + "-pwd", !0)), s[i](s.attr(n)))
	}, o = function () {
		var s = t(this);
		s.removeClass(e), s.data(e + "-pwd") && s.attr("type", "password"), s[i]() === s.attr(n) && s[i]("")
	}, r = function () {
		t(this).find("[" + n + "]").each(function () {
			t(this).data(e) && o.call(this)
		})
	};
	t.fn.placeholdr = function () {
		n in document.createElement("input") || (t(this).find("[" + n + "]").each(function () {
			var n = t(this);
			n.data(e) || (n.data(e, !0), s.call(this), n.focus(o), n.blur(s))
		}), t(this).find("form").each(function () {
			var n = t(this);
			n.data(e) || (n.data(e, !0), n.submit(r))
		}))
	}, t.fn[i] = t.fn.val, t.fn.val = function (s) {
		var r = t(this);
		return "undefined" === t.type(s) && r.data(e) && r[i]() === r.attr(n) ? "" : ("string" === t.type(s) && o.call(this), t.fn[i].apply(this, arguments))
	}, t(function () {
		t(document).placeholdr()
	}), document.write("<style>.placeholdr{color:#AAA;}</style>")
}(jQuery, "placeholdr", "placeholder", "placeholdrVal"), !function (t) {
	"use strict";
	"function" == typeof define && define.amd ? define(["./blueimp-helper"], t) : (window.blueimp = window.blueimp || {}, window.blueimp.Gallery = t(window.blueimp.helper || window.jQuery))
}(function (t) {
	"use strict";
	function e(t, n) {
		return void 0 === document.body.style.maxHeight ? null : this && this.options === e.prototype.options ? t && t.length ? (this.list = t, this.num = t.length, this.initOptions(n), void this.initialize()) : void this.console.log("blueimp Gallery: No or empty list provided as first argument.", t) : new e(t, n)
	}

	return t.extend(e.prototype, {
		options: {
			container: "#blueimp-gallery",
			slidesContainer: "div",
			titleElement: "h3",
			displayClass: "blueimp-gallery-display",
			controlsClass: "blueimp-gallery-controls",
			singleClass: "blueimp-gallery-single",
			leftEdgeClass: "blueimp-gallery-left",
			rightEdgeClass: "blueimp-gallery-right",
			playingClass: "blueimp-gallery-playing",
			slideClass: "slide",
			slideLoadingClass: "slide-loading",
			slideErrorClass: "slide-error",
			slideContentClass: "slide-content",
			toggleClass: "toggle",
			prevClass: "prev",
			nextClass: "next",
			closeClass: "close",
			playPauseClass: "play-pause",
			typeProperty: "type",
			titleProperty: "title",
			urlProperty: "href",
			displayTransition: !0,
			clearSlides: !0,
			stretchImages: !1,
			toggleControlsOnReturn: !0,
			toggleSlideshowOnSpace: !0,
			enableKeyboardNavigation: !0,
			closeOnEscape: !0,
			closeOnSlideClick: !0,
			closeOnSwipeUpOrDown: !0,
			emulateTouchEvents: !0,
			stopTouchEventsPropagation: !1,
			hidePageScrollbars: !0,
			disableScroll: !0,
			carousel: !1,
			continuous: !0,
			unloadElements: !0,
			startSlideshow: !1,
			slideshowInterval: 5e3,
			index: 0,
			preloadRange: 2,
			transitionSpeed: 400,
			slideshowTransitionSpeed: void 0,
			event: void 0,
			onopen: void 0,
			onopened: void 0,
			onslide: void 0,
			onslideend: void 0,
			onslidecomplete: void 0,
			onclose: void 0,
			onclosed: void 0
		},
		carouselOptions: {
			hidePageScrollbars: !1,
			toggleControlsOnReturn: !1,
			toggleSlideshowOnSpace: !1,
			enableKeyboardNavigation: !1,
			closeOnEscape: !1,
			closeOnSlideClick: !1,
			closeOnSwipeUpOrDown: !1,
			disableScroll: !1,
			startSlideshow: !0
		},
		console: window.console && "function" == typeof window.console.log ? window.console : {
			log: function () {
			}
		},
		support: function (e) {
			var n = {touch: void 0 !== window.ontouchstart || window.DocumentTouch && document instanceof DocumentTouch},
				i = {
					webkitTransition: {end: "webkitTransitionEnd", prefix: "-webkit-"},
					MozTransition: {end: "transitionend", prefix: "-moz-"},
					OTransition: {end: "otransitionend", prefix: "-o-"},
					transition: {end: "transitionend", prefix: ""}
				}, s = function () {
					var t, i, s = n.transition;
					document.body.appendChild(e), s && (t = s.name.slice(0, -9) + "ransform", void 0 !== e.style[t] && (e.style[t] = "translateZ(0)", i = window.getComputedStyle(e).getPropertyValue(s.prefix + "transform"), n.transform = {
						prefix: s.prefix,
						name: t,
						translate: !0,
						translateZ: !!i && "none" !== i
					})), void 0 !== e.style.backgroundSize && (n.backgroundSize = {}, e.style.backgroundSize = "contain", n.backgroundSize.contain = "contain" === window.getComputedStyle(e).getPropertyValue("background-size"), e.style.backgroundSize = "cover", n.backgroundSize.cover = "cover" === window.getComputedStyle(e).getPropertyValue("background-size")), document.body.removeChild(e)
				};
			return function (t, n) {
				var i;
				for (i in n)if (n.hasOwnProperty(i) && void 0 !== e.style[i]) {
					t.transition = n[i], t.transition.name = i;
					break
				}
			}(n, i), document.body ? s() : t(document).on("DOMContentLoaded", s), n
		}(document.createElement("div")),
		requestAnimationFrame: window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame,
		initialize: function () {
			return this.initStartIndex(), this.initWidget() === !1 ? !1 : (this.initEventListeners(), this.onslide(this.index), this.ontransitionend(), void(this.options.startSlideshow && this.play()))
		},
		slide: function (t, e) {
			window.clearTimeout(this.timeout);
			var n, i, s, o = this.index;
			if (o !== t && 1 !== this.num) {
				if (e || (e = this.options.transitionSpeed), this.support.transform) {
					for (this.options.continuous || (t = this.circle(t)), n = Math.abs(o - t) / (o - t), this.options.continuous && (i = n, n = -this.positions[this.circle(t)] / this.slideWidth, n !== i && (t = -n * this.num + t)), s = Math.abs(o - t) - 1; s;)s -= 1, this.move(this.circle((t > o ? t : o) - s - 1), this.slideWidth * n, 0);
					t = this.circle(t), this.move(o, this.slideWidth * n, e), this.move(t, 0, e), this.options.continuous && this.move(this.circle(t - n), -(this.slideWidth * n), 0)
				} else t = this.circle(t), this.animate(o * -this.slideWidth, t * -this.slideWidth, e);
				this.onslide(t)
			}
		},
		getIndex: function () {
			return this.index
		},
		getNumber: function () {
			return this.num
		},
		prev: function () {
			(this.options.continuous || this.index) && this.slide(this.index - 1)
		},
		next: function () {
			(this.options.continuous || this.index < this.num - 1) && this.slide(this.index + 1)
		},
		play: function (t) {
			var e = this;
			window.clearTimeout(this.timeout), this.interval = t || this.options.slideshowInterval, this.elements[this.index] > 1 && (this.timeout = this.setTimeout(!this.requestAnimationFrame && this.slide || function (t, n) {
					e.animationFrameId = e.requestAnimationFrame.call(window, function () {
						e.slide(t, n)
					})
				}, [this.index + 1, this.options.slideshowTransitionSpeed], this.interval)), this.container.addClass(this.options.playingClass)
		},
		pause: function () {
			window.clearTimeout(this.timeout), this.interval = null, this.container.removeClass(this.options.playingClass)
		},
		add: function (t) {
			var e;
			for (t.concat || (t = Array.prototype.slice.call(t)), this.list.concat || (this.list = Array.prototype.slice.call(this.list)), this.list = this.list.concat(t), this.num = this.list.length, this.num > 2 && null === this.options.continuous && (this.options.continuous = !0, this.container.removeClass(this.options.leftEdgeClass)), this.container.removeClass(this.options.rightEdgeClass).removeClass(this.options.singleClass), e = this.num - t.length; e < this.num; e += 1)this.addSlide(e), this.positionSlide(e);
			this.positions.length = this.num, this.initSlides(!0)
		},
		resetSlides: function () {
			this.slidesContainer.empty(), this.unloadAllSlides(), this.slides = []
		},
		handleClose: function () {
			var t = this.options;
			this.destroyEventListeners(), this.pause(), this.container[0].style.display = "none", this.container.removeClass(t.displayClass).removeClass(t.singleClass).removeClass(t.leftEdgeClass).removeClass(t.rightEdgeClass), t.hidePageScrollbars && (document.body.style.overflow = this.bodyOverflowStyle), this.options.clearSlides && this.resetSlides(), this.options.onclosed && this.options.onclosed.call(this)
		},
		close: function () {
			var t = this, e = function (n) {
				n.target === t.container[0] && (t.container.off(t.support.transition.end, e), t.handleClose())
			};
			this.options.onclose && this.options.onclose.call(this), this.support.transition && this.options.displayTransition ? (this.container.on(this.support.transition.end, e), this.container.removeClass(this.options.displayClass)) : this.handleClose()
		},
		circle: function (t) {
			return (this.num + t % this.num) % this.num
		},
		move: function (t, e, n) {
			this.translateX(t, e, n), this.positions[t] = e
		},
		translate: function (t, e, n, i) {
			var s = this.slides[t].style, o = this.support.transition, r = this.support.transform;
			s[o.name + "Duration"] = i + "ms", s[r.name] = "translate(" + e + "px, " + n + "px)" + (r.translateZ ? " translateZ(0)" : "")
		},
		translateX: function (t, e, n) {
			this.translate(t, e, 0, n)
		},
		translateY: function (t, e, n) {
			this.translate(t, 0, e, n)
		},
		animate: function (t, e, n) {
			if (!n)return void(this.slidesContainer[0].style.left = e + "px");
			var i = this, s = (new Date).getTime(), o = window.setInterval(function () {
				var r = (new Date).getTime() - s;
				return r > n ? (i.slidesContainer[0].style.left = e + "px", i.ontransitionend(), void window.clearInterval(o)) : void(i.slidesContainer[0].style.left = (e - t) * (Math.floor(r / n * 100) / 100) + t + "px")
			}, 4)
		},
		preventDefault: function (t) {
			t.preventDefault ? t.preventDefault() : t.returnValue = !1
		},
		stopPropagation: function (t) {
			t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0
		},
		onresize: function () {
			this.initSlides(!0)
		},
		onmousedown: function (t) {
			t.which && 1 === t.which && "VIDEO" !== t.target.nodeName && (t.preventDefault(), (t.originalEvent || t).touches = [{
				pageX: t.pageX,
				pageY: t.pageY
			}], this.ontouchstart(t))
		},
		onmousemove: function (t) {
			this.touchStart && ((t.originalEvent || t).touches = [{
				pageX: t.pageX,
				pageY: t.pageY
			}], this.ontouchmove(t))
		},
		onmouseup: function (t) {
			this.touchStart && (this.ontouchend(t), delete this.touchStart)
		},
		onmouseout: function (e) {
			if (this.touchStart) {
				var n = e.target, i = e.relatedTarget;
				(!i || i !== n && !t.contains(n, i)) && this.onmouseup(e)
			}
		},
		ontouchstart: function (t) {
			this.options.stopTouchEventsPropagation && this.stopPropagation(t);
			var e = (t.originalEvent || t).touches[0];
			this.touchStart = {
				x: e.pageX,
				y: e.pageY,
				time: Date.now()
			}, this.isScrolling = void 0, this.touchDelta = {}
		},
		ontouchmove: function (t) {
			this.options.stopTouchEventsPropagation && this.stopPropagation(t);
			var e, n, i = (t.originalEvent || t).touches[0], s = (t.originalEvent || t).scale, o = this.index;
			if (!(i.length > 1 || s && 1 !== s))if (this.options.disableScroll && t.preventDefault(), this.touchDelta = {
					x: i.pageX - this.touchStart.x,
					y: i.pageY - this.touchStart.y
				}, e = this.touchDelta.x, void 0 === this.isScrolling && (this.isScrolling = this.isScrolling || Math.abs(e) < Math.abs(this.touchDelta.y)), this.isScrolling) this.options.closeOnSwipeUpOrDown && this.translateY(o, this.touchDelta.y + this.positions[o], 0); else for (t.preventDefault(), window.clearTimeout(this.timeout), this.options.continuous ? n = [this.circle(o + 1), o, this.circle(o - 1)] : (this.touchDelta.x = e /= !o && e > 0 || o === this.num - 1 && 0 > e ? Math.abs(e) / this.slideWidth + 1 : 1, n = [o], o && n.push(o - 1), o < this.num - 1 && n.unshift(o + 1)); n.length;)o = n.pop(), this.translateX(o, e + this.positions[o], 0)
		},
		ontouchend: function (t) {
			this.options.stopTouchEventsPropagation && this.stopPropagation(t);
			var e, n, i, s, o, r = this.index, a = this.options.transitionSpeed, l = this.slideWidth,
				c = Number(Date.now() - this.touchStart.time) < 250,
				u = c && Math.abs(this.touchDelta.x) > 20 || Math.abs(this.touchDelta.x) > l / 2,
				d = !r && this.touchDelta.x > 0 || r === this.num - 1 && this.touchDelta.x < 0,
				h = !u && this.options.closeOnSwipeUpOrDown && (c && Math.abs(this.touchDelta.y) > 20 || Math.abs(this.touchDelta.y) > this.slideHeight / 2);
			this.options.continuous && (d = !1), e = this.touchDelta.x < 0 ? -1 : 1, this.isScrolling ? h ? this.close() : this.translateY(r, 0, a) : u && !d ? (n = r + e, i = r - e, s = l * e, o = -l * e, this.options.continuous ? (this.move(this.circle(n), s, 0), this.move(this.circle(r - 2 * e), o, 0)) : n >= 0 && n < this.num && this.move(n, s, 0), this.move(r, this.positions[r] + s, a), this.move(this.circle(i), this.positions[this.circle(i)] + s, a), r = this.circle(i), this.onslide(r)) : this.options.continuous ? (this.move(this.circle(r - 1), -l, a), this.move(r, 0, a), this.move(this.circle(r + 1), l, a)) : (r && this.move(r - 1, -l, a), this.move(r, 0, a), r < this.num - 1 && this.move(r + 1, l, a))
		},
		ontouchcancel: function (t) {
			this.touchStart && (this.ontouchend(t), delete this.touchStart)
		},
		ontransitionend: function (t) {
			var e = this.slides[this.index];
			t && e !== t.target || (this.interval && this.play(), this.setTimeout(this.options.onslideend, [this.index, e]))
		},
		oncomplete: function (e) {
			var n, i = e.target || e.srcElement, s = i && i.parentNode;
			i && s && (n = this.getNodeIndex(s), t(s).removeClass(this.options.slideLoadingClass), "error" === e.type ? (t(s).addClass(this.options.slideErrorClass), this.elements[n] = 3) : this.elements[n] = 2, i.clientHeight > this.container[0].clientHeight && (i.style.maxHeight = this.container[0].clientHeight), this.interval && this.slides[this.index] === s && this.play(), this.setTimeout(this.options.onslidecomplete, [n, s]))
		},
		onload: function (t) {
			this.oncomplete(t)
		},
		onerror: function (t) {
			this.oncomplete(t)
		},
		onkeydown: function (t) {
			switch (t.which || t.keyCode) {
				case 13:
					this.options.toggleControlsOnReturn && (this.preventDefault(t), this.toggleControls());
					break;
				case 27:
					this.options.closeOnEscape && (this.close(), t.stopImmediatePropagation());
					break;
				case 32:
					this.options.toggleSlideshowOnSpace && (this.preventDefault(t), this.toggleSlideshow());
					break;
				case 37:
					this.options.enableKeyboardNavigation && (this.preventDefault(t), this.prev());
					break;
				case 39:
					this.options.enableKeyboardNavigation && (this.preventDefault(t), this.next())
			}
		},
		handleClick: function (e) {
			var n = this.options, i = e.target || e.srcElement, s = i.parentNode, o = function (e) {
				return t(i).hasClass(e) || t(s).hasClass(e)
			};
			o(n.toggleClass) ? (this.preventDefault(e), this.toggleControls()) : o(n.prevClass) ? (this.preventDefault(e), this.prev()) : o(n.nextClass) ? (this.preventDefault(e), this.next()) : o(n.closeClass) ? (this.preventDefault(e), this.close()) : o(n.playPauseClass) ? (this.preventDefault(e), this.toggleSlideshow()) : s === this.slidesContainer[0] ? (this.preventDefault(e), n.closeOnSlideClick ? this.close() : this.toggleControls()) : s.parentNode && s.parentNode === this.slidesContainer[0] && (this.preventDefault(e), this.toggleControls())
		},
		onclick: function (t) {
			return this.options.emulateTouchEvents && this.touchDelta && (Math.abs(this.touchDelta.x) > 20 || Math.abs(this.touchDelta.y) > 20) ? void delete this.touchDelta : this.handleClick(t)
		},
		updateEdgeClasses: function (t) {
			t ? this.container.removeClass(this.options.leftEdgeClass) : this.container.addClass(this.options.leftEdgeClass), t === this.num - 1 ? this.container.addClass(this.options.rightEdgeClass) : this.container.removeClass(this.options.rightEdgeClass)
		},
		handleSlide: function (t) {
			this.options.continuous || this.updateEdgeClasses(t), this.loadElements(t), this.options.unloadElements && this.unloadElements(t), this.setTitle(t)
		},
		onslide: function (t) {
			this.index = t, this.handleSlide(t), this.setTimeout(this.options.onslide, [t, this.slides[t]])
		},
		setTitle: function (t) {
			var e = this.slides[t].firstChild.title, n = this.titleElement;
			n.length && (this.titleElement.empty(), e && n[0].appendChild(document.createTextNode(e)))
		},
		setTimeout: function (t, e, n) {
			var i = this;
			return t && window.setTimeout(function () {
					t.apply(i, e || [])
				}, n || 0)
		},
		imageFactory: function (e, n) {
			var i, s, o, r = this, a = this.imagePrototype.cloneNode(!1), l = e, c = this.options.stretchImages,
				u = function (e) {
					if (!i) {
						if (e = {type: e.type, target: s}, !s.parentNode)return r.setTimeout(u, [e]);
						i = !0, t(a).off("load error", u), c && "load" === e.type && (s.style.background = 'url("' + l + '") center no-repeat', s.style.backgroundSize = c), n(e)
					}
				};
			return "string" != typeof l && (l = this.getItemProperty(e, this.options.urlProperty), o = this.getItemProperty(e, this.options.titleProperty)), c === !0 && (c = "contain"), c = this.support.backgroundSize && this.support.backgroundSize[c] && c, c ? s = this.elementPrototype.cloneNode(!1) : (s = a, a.draggable = !1), o && (s.title = o), t(a).on("load error", u), a.src = l, s
		},
		createElement: function (e, n) {
			var i = e && this.getItemProperty(e, this.options.typeProperty),
				s = i && this[i.split("/")[0] + "Factory"] || this.imageFactory, o = e && s.call(this, e, n);
			return o || (o = this.elementPrototype.cloneNode(!1), this.setTimeout(n, [{
				type: "error",
				target: o
			}])), t(o).addClass(this.options.slideContentClass), o
		},
		loadElement: function (e) {
			this.elements[e] || (this.slides[e].firstChild ? this.elements[e] = t(this.slides[e]).hasClass(this.options.slideErrorClass) ? 3 : 2 : (this.elements[e] = 1, t(this.slides[e]).addClass(this.options.slideLoadingClass), this.slides[e].appendChild(this.createElement(this.list[e], this.proxyListener))))
		},
		loadElements: function (t) {
			var e, n = Math.min(this.num, 2 * this.options.preloadRange + 1), i = t;
			for (e = 0; n > e; e += 1)i += e * (e % 2 === 0 ? -1 : 1), i = this.circle(i), this.loadElement(i)
		},
		unloadElements: function (t) {
			var e, n;
			for (e in this.elements)this.elements.hasOwnProperty(e) && (n = Math.abs(t - e), n > this.options.preloadRange && n + this.options.preloadRange < this.num && (this.unloadSlide(e), delete this.elements[e]))
		},
		addSlide: function (t) {
			var e = this.slidePrototype.cloneNode(!1);
			e.setAttribute("data-index", t), this.slidesContainer[0].appendChild(e), this.slides.push(e)
		},
		positionSlide: function (t) {
			var e = this.slides[t];
			e.style.width = this.slideWidth + "px", this.support.transform && (e.style.left = t * -this.slideWidth + "px", this.move(t, this.index > t ? -this.slideWidth : this.index < t ? this.slideWidth : 0, 0))
		},
		initSlides: function (e) {
			var n, i;
			for (e || (this.positions = [], this.positions.length = this.num, this.elements = {}, this.imagePrototype = document.createElement("img"), this.elementPrototype = document.createElement("div"), this.slidePrototype = document.createElement("div"), t(this.slidePrototype).addClass(this.options.slideClass), this.slides = this.slidesContainer[0].children, n = this.options.clearSlides || this.slides.length !== this.num), this.slideWidth = this.container[0].offsetWidth, this.slideHeight = this.container[0].offsetHeight, this.slidesContainer[0].style.width = this.num * this.slideWidth + "px", n && this.resetSlides(), i = 0; i < this.num; i += 1)n && this.addSlide(i), this.positionSlide(i);
			this.options.continuous && this.support.transform && (this.move(this.circle(this.index - 1), -this.slideWidth, 0), this.move(this.circle(this.index + 1), this.slideWidth, 0)), this.support.transform || (this.slidesContainer[0].style.left = this.index * -this.slideWidth + "px")
		},
		unloadSlide: function (t) {
			var e, n;
			e = this.slides[t], n = e.firstChild, null !== n && e.removeChild(n)
		},
		unloadAllSlides: function () {
			var t, e;
			for (t = 0, e = this.slides.length; e > t; t++)this.unloadSlide(t)
		},
		toggleControls: function () {
			var t = this.options.controlsClass;
			this.container.hasClass(t) ? this.container.removeClass(t) : this.container.addClass(t)
		},
		toggleSlideshow: function () {
			this.interval ? this.pause() : this.play()
		},
		getNodeIndex: function (t) {
			return parseInt(t.getAttribute("data-index"), 10)
		},
		getNestedProperty: function (t, e) {
			return e.replace(/\[(?:'([^']+)'|"([^"]+)"|(\d+))\]|(?:(?:^|\.)([^\.\[]+))/g, function (e, n, i, s, o) {
				var r = o || n || i || s && parseInt(s, 10);
				e && t && (t = t[r])
			}), t
		},
		getDataProperty: function (e, n) {
			if (e.getAttribute) {
				var i = e.getAttribute("data-" + n.replace(/([A-Z])/g, "-$1").toLowerCase());
				if ("string" == typeof i) {
					if (/^(true|false|null|-?\d+(\.\d+)?|\{[\s\S]*\}|\[[\s\S]*\])$/.test(i))try {
						return t.parseJSON(i)
					} catch (s) {
					}
					return i
				}
			}
		},
		getItemProperty: function (t, e) {
			var n = t[e];
			return void 0 === n && (n = this.getDataProperty(t, e), void 0 === n && (n = this.getNestedProperty(t, e))), n
		},
		initStartIndex: function () {
			var t, e = this.options.index, n = this.options.urlProperty;
			if (e && "number" != typeof e)for (t = 0; t < this.num; t += 1)if (this.list[t] === e || this.getItemProperty(this.list[t], n) === this.getItemProperty(e, n)) {
				e = t;
				break
			}
			this.index = this.circle(parseInt(e, 10) || 0)
		},
		initEventListeners: function () {
			var e = this, n = this.slidesContainer, i = function (t) {
				var n = e.support.transition && e.support.transition.end === t.type ? "transitionend" : t.type;
				e["on" + n](t)
			};
			t(window).on("resize", i), t(document.body).on("keydown", i), this.container.on("click", i), this.support.touch ? n.on("touchstart touchmove touchend touchcancel", i) : this.options.emulateTouchEvents && this.support.transition && n.on("mousedown mousemove mouseup mouseout", i), this.support.transition && n.on(this.support.transition.end, i), this.proxyListener = i
		},
		destroyEventListeners: function () {
			var e = this.slidesContainer, n = this.proxyListener;
			t(window).off("resize", n), t(document.body).off("keydown", n), this.container.off("click", n), this.support.touch ? e.off("touchstart touchmove touchend touchcancel", n) : this.options.emulateTouchEvents && this.support.transition && e.off("mousedown mousemove mouseup mouseout", n), this.support.transition && e.off(this.support.transition.end, n)
		},
		handleOpen: function () {
			this.options.onopened && this.options.onopened.call(this)
		},
		initWidget: function () {
			var e = this, n = function (t) {
				t.target === e.container[0] && (e.container.off(e.support.transition.end, n), e.handleOpen())
			};
			return this.container = t(this.options.container), this.container.length ? (this.slidesContainer = this.container.find(this.options.slidesContainer).first(), this.slidesContainer.length ? (this.titleElement = this.container.find(this.options.titleElement).first(), 1 === this.num && this.container.addClass(this.options.singleClass), this.options.onopen && this.options.onopen.call(this), this.support.transition && this.options.displayTransition ? this.container.on(this.support.transition.end, n) : this.handleOpen(), this.options.hidePageScrollbars && (this.bodyOverflowStyle = document.body.style.overflow, document.body.style.overflow = "hidden"), this.container[0].style.display = "block", this.initSlides(), void this.container.addClass(this.options.displayClass)) : (this.console.log("blueimp Gallery: Slides container not found.", this.options.slidesContainer), !1)) : (this.console.log("blueimp Gallery: Widget container not found.", this.options.container), !1)
		},
		initOptions: function (e) {
			this.options = t.extend({}, this.options), (e && e.carousel || this.options.carousel && (!e || e.carousel !== !1)) && t.extend(this.options, this.carouselOptions), t.extend(this.options, e), this.num < 3 && (this.options.continuous = this.options.continuous ? null : !1), this.support.transition || (this.options.emulateTouchEvents = !1), this.options.event && this.preventDefault(this.options.event)
		}
	}), e
}), function (t) {
	"use strict";
	"function" == typeof define && define.amd ? define(["./blueimp-helper", "./blueimp-gallery"], t) : t(window.blueimp.helper || window.jQuery, window.blueimp.Gallery)
}(function (t, e) {
	"use strict";
	t.extend(e.prototype.options, {fullScreen: !1});
	var n = e.prototype.initialize, i = e.prototype.close;
	return t.extend(e.prototype, {
		getFullScreenElement: function () {
			return document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement
		}, requestFullScreen: function (t) {
			t.requestFullscreen ? t.requestFullscreen() : t.webkitRequestFullscreen ? t.webkitRequestFullscreen() : t.mozRequestFullScreen ? t.mozRequestFullScreen() : t.msRequestFullscreen && t.msRequestFullscreen()
		}, exitFullScreen: function () {
			document.exitFullscreen ? document.exitFullscreen() : document.webkitCancelFullScreen ? document.webkitCancelFullScreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen()
		}, initialize: function () {
			n.call(this), this.options.fullScreen && !this.getFullScreenElement() && this.requestFullScreen(this.container[0])
		}, close: function () {
			this.getFullScreenElement() === this.container[0] && this.exitFullScreen(), i.call(this)
		}
	}), e
}), function (t) {
	"use strict";
	"function" == typeof define && define.amd ? define(["./blueimp-helper", "./blueimp-gallery"], t) : t(window.blueimp.helper || window.jQuery, window.blueimp.Gallery)
}(function (t, e) {
	"use strict";
	t.extend(e.prototype.options, {
		indicatorContainer: "ol",
		activeIndicatorClass: "active",
		thumbnailProperty: "thumbnail",
		thumbnailIndicators: !0
	});
	var n = e.prototype.initSlides, i = e.prototype.addSlide, s = e.prototype.resetSlides, o = e.prototype.handleClick,
		r = e.prototype.handleSlide, a = e.prototype.handleClose;
	return t.extend(e.prototype, {
		createIndicator: function (e) {
			var n, i, s = this.indicatorPrototype.cloneNode(!1),
				o = this.getItemProperty(e, this.options.titleProperty), r = this.options.thumbnailProperty;
			return this.options.thumbnailIndicators && (i = e.getElementsByTagName && t(e).find("img")[0], i ? n = i.src : r && (n = this.getItemProperty(e, r)), n && (s.style.backgroundImage = 'url("' + n + '")')), o && (s.title = o), s
		}, addIndicator: function (t) {
			if (this.indicatorContainer.length) {
				var e = this.createIndicator(this.list[t]);
				e.setAttribute("data-index", t), this.indicatorContainer[0].appendChild(e), this.indicators.push(e)
			}
		}, setActiveIndicator: function (e) {
			this.indicators && (this.activeIndicator && this.activeIndicator.removeClass(this.options.activeIndicatorClass), this.activeIndicator = t(this.indicators[e]), this.activeIndicator.addClass(this.options.activeIndicatorClass))
		}, initSlides: function (t) {
			t || (this.indicatorContainer = this.container.find(this.options.indicatorContainer), this.indicatorContainer.length && (this.indicatorPrototype = document.createElement("li"), this.indicators = this.indicatorContainer[0].children)), n.call(this, t)
		}, addSlide: function (t) {
			i.call(this, t), this.addIndicator(t)
		}, resetSlides: function () {
			s.call(this), this.indicatorContainer.empty(), this.indicators = []
		}, handleClick: function (t) {
			var e = t.target || t.srcElement, n = e.parentNode;
			if (n === this.indicatorContainer[0]) this.preventDefault(t), this.slide(this.getNodeIndex(e)); else {
				if (n.parentNode !== this.indicatorContainer[0])return o.call(this, t);
				this.preventDefault(t), this.slide(this.getNodeIndex(n))
			}
		}, handleSlide: function (t) {
			r.call(this, t), this.setActiveIndicator(t)
		}, handleClose: function () {
			this.activeIndicator && this.activeIndicator.removeClass(this.options.activeIndicatorClass), a.call(this)
		}
	}), e
}), function (t) {
	"use strict";
	"function" == typeof define && define.amd ? define(["./blueimp-helper", "./blueimp-gallery"], t) : t(window.blueimp.helper || window.jQuery, window.blueimp.Gallery)
}(function (t, e) {
	"use strict";
	t.extend(e.prototype.options, {
		videoContentClass: "video-content",
		videoLoadingClass: "video-loading",
		videoPlayingClass: "video-playing",
		videoPosterProperty: "poster",
		videoSourcesProperty: "sources"
	});
	var n = e.prototype.handleSlide;
	return t.extend(e.prototype, {
		handleSlide: function (t) {
			n.call(this, t), this.playingVideo && this.playingVideo.pause()
		}, videoFactory: function (e, n, i) {
			var s, o, r, a, l, c = this, u = this.options, d = this.elementPrototype.cloneNode(!1), h = t(d),
				p = [{type: "error", target: d}], f = i || document.createElement("video"),
				g = this.getItemProperty(e, u.urlProperty), m = this.getItemProperty(e, u.typeProperty),
				y = this.getItemProperty(e, u.titleProperty), v = this.getItemProperty(e, u.videoPosterProperty),
				b = this.getItemProperty(e, u.videoSourcesProperty);
			if (h.addClass(u.videoContentClass), y && (d.title = y), f.canPlayType)if (g && m && f.canPlayType(m)) f.src = g; else for (; b && b.length;)if (o = b.shift(), g = this.getItemProperty(o, u.urlProperty), m = this.getItemProperty(o, u.typeProperty), g && m && f.canPlayType(m)) {
				f.src = g;
				break
			}
			return v && (f.poster = v, s = this.imagePrototype.cloneNode(!1), t(s).addClass(u.toggleClass), s.src = v, s.draggable = !1, d.appendChild(s)), r = document.createElement("a"), r.setAttribute("target", "_blank"), i || r.setAttribute("download", y), r.href = g, f.src && (f.controls = !0, (i || t(f)).on("error", function () {
				c.setTimeout(n, p)
			}).on("pause", function () {
				a = !1, h.removeClass(c.options.videoLoadingClass).removeClass(c.options.videoPlayingClass), l && c.container.addClass(c.options.controlsClass), delete c.playingVideo, c.interval && c.play()
			}).on("playing", function () {
				a = !1, h.removeClass(c.options.videoLoadingClass).addClass(c.options.videoPlayingClass), c.container.hasClass(c.options.controlsClass) ? (l = !0, c.container.removeClass(c.options.controlsClass)) : l = !1
			}).on("play", function () {
				window.clearTimeout(c.timeout), a = !0, h.addClass(c.options.videoLoadingClass), c.playingVideo = f
			}), t(r).on("click", function (t) {
				c.preventDefault(t), a ? f.pause() : f.play()
			}), d.appendChild(i && i.element || f)), d.appendChild(r), this.setTimeout(n, [{
				type: "load",
				target: d
			}]), d
		}
	}), e
}), function (t) {
	"use strict";
	"function" == typeof define && define.amd ? define(["./blueimp-helper", "./blueimp-gallery-video"], t) : t(window.blueimp.helper || window.jQuery, window.blueimp.Gallery)
}(function (t, e) {
	"use strict";
	if (!window.postMessage)return e;
	t.extend(e.prototype.options, {
		vimeoVideoIdProperty: "vimeo",
		vimeoPlayerUrl: "//player.vimeo.com/video/VIDEO_ID?api=1&player_id=PLAYER_ID",
		vimeoPlayerIdPrefix: "vimeo-player-",
		vimeoClickToPlay: !0
	});
	var n = e.prototype.textFactory || e.prototype.imageFactory, i = function (t, e, n, i) {
		this.url = t, this.videoId = e, this.playerId = n, this.clickToPlay = i, this.element = document.createElement("div"), this.listeners = {}
	}, s = 0;
	return t.extend(i.prototype, {
		canPlayType: function () {
			return !0
		}, on: function (t, e) {
			return this.listeners[t] = e, this
		}, loadAPI: function () {
			for (var e, n, i = this, s = "//" + ("https" === location.protocol ? "secure-" : "") + "a.vimeocdn.com/js/froogaloop2.min.js", o = document.getElementsByTagName("script"), r = o.length, a = function () {
				!n && i.playOnReady && i.play(), n = !0
			}; r;)if (r -= 1, o[r].src === s) {
				e = o[r];
				break
			}
			e || (e = document.createElement("script"), e.src = s), t(e).on("load", a), o[0].parentNode.insertBefore(e, o[0]), /loaded|complete/.test(e.readyState) && a()
		}, onReady: function () {
			var t = this;
			this.ready = !0, this.player.addEvent("play", function () {
				t.hasPlayed = !0, t.onPlaying()
			}), this.player.addEvent("pause", function () {
				t.onPause()
			}), this.player.addEvent("finish", function () {
				t.onPause()
			}), this.playOnReady && this.play()
		}, onPlaying: function () {
			this.playStatus < 2 && (this.listeners.playing(), this.playStatus = 2)
		}, onPause: function () {
			this.listeners.pause(), delete this.playStatus
		}, insertIframe: function () {
			var t = document.createElement("iframe");
			t.src = this.url.replace("VIDEO_ID", this.videoId).replace("PLAYER_ID", this.playerId), t.id = this.playerId, this.element.parentNode.replaceChild(t, this.element), this.element = t
		}, play: function () {
			var t = this;
			this.playStatus || (this.listeners.play(), this.playStatus = 1), this.ready ? !this.hasPlayed && (this.clickToPlay || window.navigator && /iP(hone|od|ad)/.test(window.navigator.platform)) ? this.onPlaying() : this.player.api("play") : (this.playOnReady = !0, window.$f ? this.player || (this.insertIframe(), this.player = $f(this.element), this.player.addEvent("ready", function () {
					t.onReady()
				})) : this.loadAPI())
		}, pause: function () {
			this.ready ? this.player.api("pause") : this.playStatus && (delete this.playOnReady, this.listeners.pause(), delete this.playStatus)
		}
	}), t.extend(e.prototype, {
		VimeoPlayer: i, textFactory: function (t, e) {
			var o = this.options, r = this.getItemProperty(t, o.vimeoVideoIdProperty);
			return r ? (void 0 === this.getItemProperty(t, o.urlProperty) && (t[o.urlProperty] = "//vimeo.com/" + r), s += 1, this.videoFactory(t, e, new i(o.vimeoPlayerUrl, r, o.vimeoPlayerIdPrefix + s, o.vimeoClickToPlay))) : n.call(this, t, e)
		}
	}), e
}), function (t) {
	"use strict";
	"function" == typeof define && define.amd ? define(["./blueimp-helper", "./blueimp-gallery-video"], t) : t(window.blueimp.helper || window.jQuery, window.blueimp.Gallery)
}(function (t, e) {
	"use strict";
	if (!window.postMessage)return e;
	t.extend(e.prototype.options, {
		youTubeVideoIdProperty: "youtube",
		youTubePlayerVars: {wmode: "transparent"},
		youTubeClickToPlay: !0
	});
	var n = e.prototype.textFactory || e.prototype.imageFactory, i = function (t, e, n) {
		this.videoId = t, this.playerVars = e, this.clickToPlay = n, this.element = document.createElement("div"), this.listeners = {}
	};
	return t.extend(i.prototype, {
		canPlayType: function () {
			return !0
		}, on: function (t, e) {
			return this.listeners[t] = e, this
		}, loadAPI: function () {
			var t, e = this, n = window.onYouTubeIframeAPIReady, i = "//www.youtube.com/iframe_api",
				s = document.getElementsByTagName("script"), o = s.length;
			for (window.onYouTubeIframeAPIReady = function () {
				n && n.apply(this), e.playOnReady && e.play()
			}; o;)if (o -= 1, s[o].src === i)return;
			t = document.createElement("script"), t.src = i, s[0].parentNode.insertBefore(t, s[0])
		}, onReady: function () {
			this.ready = !0, this.playOnReady && this.play()
		}, onPlaying: function () {
			this.playStatus < 2 && (this.listeners.playing(), this.playStatus = 2)
		}, onPause: function () {
			e.prototype.setTimeout.call(this, this.checkSeek, null, 2e3)
		}, checkSeek: function () {
			(this.stateChange === YT.PlayerState.PAUSED || this.stateChange === YT.PlayerState.ENDED) && (this.listeners.pause(), delete this.playStatus)
		}, onStateChange: function (t) {
			switch (t.data) {
				case YT.PlayerState.PLAYING:
					this.hasPlayed = !0, this.onPlaying();
					break;
				case YT.PlayerState.PAUSED:
				case YT.PlayerState.ENDED:
					this.onPause()
			}
			this.stateChange = t.data
		}, onError: function (t) {
			this.listeners.error(t)
		}, play: function () {
			var t = this;
			this.playStatus || (this.listeners.play(), this.playStatus = 1), this.ready ? !this.hasPlayed && (this.clickToPlay || window.navigator && /iP(hone|od|ad)/.test(window.navigator.platform)) ? this.onPlaying() : this.player.playVideo() : (this.playOnReady = !0, window.YT && YT.Player ? this.player || (this.player = new YT.Player(this.element, {
					videoId: this.videoId,
					playerVars: this.playerVars,
					events: {
						onReady: function () {
							t.onReady()
						}, onStateChange: function (e) {
							t.onStateChange(e)
						}, onError: function (e) {
							t.onError(e)
						}
					}
				})) : this.loadAPI())
		}, pause: function () {
			this.ready ? this.player.pauseVideo() : this.playStatus && (delete this.playOnReady, this.listeners.pause(), delete this.playStatus)
		}
	}), t.extend(e.prototype, {
		YouTubePlayer: i, textFactory: function (t, e) {
			var s = this.options, o = this.getItemProperty(t, s.youTubeVideoIdProperty);
			return o ? (void 0 === this.getItemProperty(t, s.urlProperty) && (t[s.urlProperty] = "//www.youtube.com/watch?v=" + o), void 0 === this.getItemProperty(t, s.videoPosterProperty) && (t[s.videoPosterProperty] = "//img.youtube.com/vi/" + o + "/maxresdefault.jpg"), this.videoFactory(t, e, new i(o, s.youTubePlayerVars, s.youTubeClickToPlay))) : n.call(this, t, e)
		}
	}), e
}), function (t) {
	"use strict";
	"function" == typeof define && define.amd ? define(["jquery", "./blueimp-gallery"], t) : t(window.jQuery, window.blueimp.Gallery)
}(function (t, e) {
	"use strict";
	t(document).on("click", "[data-gallery]", function (n) {
		var i = t(this).data("gallery"), s = t(i), o = s.length && s || t(e.prototype.options.container), r = {
			onopen: function () {
				o.data("gallery", this).trigger("open")
			}, onopened: function () {
				o.trigger("opened")
			}, onslide: function () {
				o.trigger("slide", arguments)
			}, onslideend: function () {
				o.trigger("slideend", arguments)
			}, onslidecomplete: function () {
				o.trigger("slidecomplete", arguments)
			}, onclose: function () {
				o.trigger("close")
			}, onclosed: function () {
				o.trigger("closed").removeData("gallery")
			}
		}, a = t.extend(o.data(), {container: o[0], index: this, event: n}, r), l = t('[data-gallery="' + i + '"]');
		return a.filter && (l = l.filter(a.filter)), new e(l, a)
	})
}), !function (t) {
	"use strict";
	"function" == typeof define && define.amd ? define(["jquery", "./blueimp-gallery"], t) : t(window.jQuery, window.blueimp.Gallery)
}(function (t, e) {
	"use strict";
	t.extend(e.prototype.options, {useBootstrapModal: !0});
	var n = e.prototype.close, i = e.prototype.imageFactory, s = e.prototype.videoFactory, o = e.prototype.textFactory;
	t.extend(e.prototype, {
		modalFactory: function (t, e, n, i) {
			if (!this.options.useBootstrapModal || n)return i.call(this, t, e, n);
			var s = this, o = this.container.children(".modal"), r = o.clone().show().on("click", function (t) {
				(t.target === r[0] || t.target === r.children()[0]) && (t.preventDefault(), t.stopPropagation(), s.close())
			}), a = i.call(this, t, function (t) {
				e({type: t.type, target: r[0]}), r.addClass("in")
			}, n);
			return r.find(".modal-title").text(a.title || String.fromCharCode(160)), r.find(".modal-body").append(a), r[0]
		}, imageFactory: function (t, e, n) {
			return this.modalFactory(t, e, n, i)
		}, videoFactory: function (t, e, n) {
			return this.modalFactory(t, e, n, s)
		}, textFactory: function (t, e, n) {
			return this.modalFactory(t, e, n, o)
		}, close: function () {
			this.container.find(".modal").removeClass("in"), n.call(this)
		}
	})
}), function (t, e) {
	"object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.moment = e()
}(this, function () {
	"use strict";
	function t() {
		return ps.apply(null, arguments)
	}

	function e(t) {
		ps = t
	}

	function n(t) {
		return t instanceof Array || "[object Array]" === Object.prototype.toString.call(t)
	}

	function i(t) {
		return "[object Object]" === Object.prototype.toString.call(t)
	}

	function s(t) {
		var e;
		for (e in t)return !1;
		return !0
	}

	function o(t) {
		return t instanceof Date || "[object Date]" === Object.prototype.toString.call(t)
	}

	function r(t, e) {
		var n, i = [];
		for (n = 0; n < t.length; ++n)i.push(e(t[n], n));
		return i
	}

	function a(t, e) {
		return Object.prototype.hasOwnProperty.call(t, e)
	}

	function l(t, e) {
		for (var n in e)a(e, n) && (t[n] = e[n]);
		return a(e, "toString") && (t.toString = e.toString), a(e, "valueOf") && (t.valueOf = e.valueOf), t
	}

	function c(t, e, n, i) {
		return yn(t, e, n, i, !0).utc()
	}

	function u() {
		return {
			empty: !1,
			unusedTokens: [],
			unusedInput: [],
			overflow: -2,
			charsLeftOver: 0,
			nullInput: !1,
			invalidMonth: null,
			invalidFormat: !1,
			userInvalidated: !1,
			iso: !1,
			parsedDateParts: [],
			meridiem: null
		}
	}

	function d(t) {
		return null == t._pf && (t._pf = u()), t._pf
	}

	function h(t) {
		if (null == t._isValid) {
			var e = d(t), n = fs.call(e.parsedDateParts, function (t) {
				return null != t
			});
			t._isValid = !isNaN(t._d.getTime()) && e.overflow < 0 && !e.empty && !e.invalidMonth && !e.invalidWeekday && !e.nullInput && !e.invalidFormat && !e.userInvalidated && (!e.meridiem || e.meridiem && n), t._strict && (t._isValid = t._isValid && 0 === e.charsLeftOver && 0 === e.unusedTokens.length && void 0 === e.bigHour)
		}
		return t._isValid
	}

	function p(t) {
		var e = c(0 / 0);
		return null != t ? l(d(e), t) : d(e).userInvalidated = !0, e
	}

	function f(t) {
		return void 0 === t
	}

	function g(t, e) {
		var n, i, s;
		if (f(e._isAMomentObject) || (t._isAMomentObject = e._isAMomentObject), f(e._i) || (t._i = e._i), f(e._f) || (t._f = e._f), f(e._l) || (t._l = e._l), f(e._strict) || (t._strict = e._strict), f(e._tzm) || (t._tzm = e._tzm), f(e._isUTC) || (t._isUTC = e._isUTC), f(e._offset) || (t._offset = e._offset), f(e._pf) || (t._pf = d(e)), f(e._locale) || (t._locale = e._locale), gs.length > 0)for (n in gs)i = gs[n], s = e[i], f(s) || (t[i] = s);
		return t
	}

	function m(e) {
		g(this, e), this._d = new Date(null != e._d ? e._d.getTime() : 0 / 0), ms === !1 && (ms = !0, t.updateOffset(this), ms = !1)
	}

	function y(t) {
		return t instanceof m || null != t && null != t._isAMomentObject
	}

	function v(t) {
		return 0 > t ? Math.ceil(t) || 0 : Math.floor(t)
	}

	function b(t) {
		var e = +t, n = 0;
		return 0 !== e && isFinite(e) && (n = v(e)), n
	}

	function _(t, e, n) {
		var i, s = Math.min(t.length, e.length), o = Math.abs(t.length - e.length), r = 0;
		for (i = 0; s > i; i++)(n && t[i] !== e[i] || !n && b(t[i]) !== b(e[i])) && r++;
		return r + o
	}

	function w(e) {
		t.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
	}

	function x(e, n) {
		var i = !0;
		return l(function () {
			return null != t.deprecationHandler && t.deprecationHandler(null, e), i && (w(e + "\nArguments: " + Array.prototype.slice.call(arguments).join(", ") + "\n" + (new Error).stack), i = !1), n.apply(this, arguments)
		}, n)
	}

	function C(e, n) {
		null != t.deprecationHandler && t.deprecationHandler(e, n), ys[e] || (w(n), ys[e] = !0)
	}

	function k(t) {
		return t instanceof Function || "[object Function]" === Object.prototype.toString.call(t)
	}

	function T(t) {
		var e, n;
		for (n in t)e = t[n], k(e) ? this[n] = e : this["_" + n] = e;
		this._config = t, this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
	}

	function S(t, e) {
		var n, s = l({}, t);
		for (n in e)a(e, n) && (i(t[n]) && i(e[n]) ? (s[n] = {}, l(s[n], t[n]), l(s[n], e[n])) : null != e[n] ? s[n] = e[n] : delete s[n]);
		for (n in t)a(t, n) && !a(e, n) && i(t[n]) && (s[n] = l({}, s[n]));
		return s
	}

	function D(t) {
		null != t && this.set(t)
	}

	function E(t, e, n) {
		var i = this._calendar[t] || this._calendar.sameElse;
		return k(i) ? i.call(e, n) : i
	}

	function N(t) {
		var e = this._longDateFormat[t], n = this._longDateFormat[t.toUpperCase()];
		return e || !n ? e : (this._longDateFormat[t] = n.replace(/MMMM|MM|DD|dddd/g, function (t) {
			return t.slice(1)
		}), this._longDateFormat[t])
	}

	function A() {
		return this._invalidDate
	}

	function M(t) {
		return this._ordinal.replace("%d", t)
	}

	function P(t, e, n, i) {
		var s = this._relativeTime[n];
		return k(s) ? s(t, e, n, i) : s.replace(/%d/i, t)
	}

	function I(t, e) {
		var n = this._relativeTime[t > 0 ? "future" : "past"];
		return k(n) ? n(e) : n.replace(/%s/i, e)
	}

	function $(t, e) {
		var n = t.toLowerCase();
		Ss[n] = Ss[n + "s"] = Ss[e] = t
	}

	function O(t) {
		return "string" == typeof t ? Ss[t] || Ss[t.toLowerCase()] : void 0
	}

	function R(t) {
		var e, n, i = {};
		for (n in t)a(t, n) && (e = O(n), e && (i[e] = t[n]));
		return i
	}

	function L(t, e) {
		Ds[t] = e
	}

	function j(t) {
		var e = [];
		for (var n in t)e.push({unit: n, priority: Ds[n]});
		return e.sort(function (t, e) {
			return t.priority - e.priority
		}), e
	}

	function H(e, n) {
		return function (i) {
			return null != i ? (W(this, e, i), t.updateOffset(this, n), this) : F(this, e)
		}
	}

	function F(t, e) {
		return t.isValid() ? t._d["get" + (t._isUTC ? "UTC" : "") + e]() : 0 / 0
	}

	function W(t, e, n) {
		t.isValid() && t._d["set" + (t._isUTC ? "UTC" : "") + e](n)
	}

	function Y(t) {
		return t = O(t), k(this[t]) ? this[t]() : this
	}

	function q(t, e) {
		if ("object" == typeof t) {
			t = R(t);
			for (var n = j(t), i = 0; i < n.length; i++)this[n[i].unit](t[n[i].unit])
		} else if (t = O(t), k(this[t]))return this[t](e);
		return this
	}

	function z(t, e, n) {
		var i = "" + Math.abs(t), s = e - i.length, o = t >= 0;
		return (o ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, s)).toString().substr(1) + i
	}

	function B(t, e, n, i) {
		var s = i;
		"string" == typeof i && (s = function () {
			return this[i]()
		}), t && (Ms[t] = s), e && (Ms[e[0]] = function () {
			return z(s.apply(this, arguments), e[1], e[2])
		}), n && (Ms[n] = function () {
			return this.localeData().ordinal(s.apply(this, arguments), t)
		})
	}

	function U(t) {
		return t.match(/\[[\s\S]/) ? t.replace(/^\[|\]$/g, "") : t.replace(/\\/g, "")
	}

	function V(t) {
		var e, n, i = t.match(Es);
		for (e = 0, n = i.length; n > e; e++)i[e] = Ms[i[e]] ? Ms[i[e]] : U(i[e]);
		return function (e) {
			var s, o = "";
			for (s = 0; n > s; s++)o += i[s] instanceof Function ? i[s].call(e, t) : i[s];
			return o
		}
	}

	function G(t, e) {
		return t.isValid() ? (e = K(e, t.localeData()), As[e] = As[e] || V(e), As[e](t)) : t.localeData().invalidDate()
	}

	function K(t, e) {
		function n(t) {
			return e.longDateFormat(t) || t
		}

		var i = 5;
		for (Ns.lastIndex = 0; i >= 0 && Ns.test(t);)t = t.replace(Ns, n), Ns.lastIndex = 0, i -= 1;
		return t
	}

	function Q(t, e, n) {
		Ks[t] = k(e) ? e : function (t) {
			return t && n ? n : e
		}
	}

	function X(t, e) {
		return a(Ks, t) ? Ks[t](e._strict, e._locale) : new RegExp(Z(t))
	}

	function Z(t) {
		return J(t.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (t, e, n, i, s) {
			return e || n || i || s
		}))
	}

	function J(t) {
		return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
	}

	function te(t, e) {
		var n, i = e;
		for ("string" == typeof t && (t = [t]), "number" == typeof e && (i = function (t, n) {
			n[e] = b(t)
		}), n = 0; n < t.length; n++)Qs[t[n]] = i
	}

	function ee(t, e) {
		te(t, function (t, n, i, s) {
			i._w = i._w || {}, e(t, i._w, i, s)
		})
	}

	function ne(t, e, n) {
		null != e && a(Qs, t) && Qs[t](e, n._a, n, t)
	}

	function ie(t, e) {
		return new Date(Date.UTC(t, e + 1, 0)).getUTCDate()
	}

	function se(t, e) {
		return n(this._months) ? this._months[t.month()] : this._months[(this._months.isFormat || ro).test(e) ? "format" : "standalone"][t.month()]
	}

	function oe(t, e) {
		return n(this._monthsShort) ? this._monthsShort[t.month()] : this._monthsShort[ro.test(e) ? "format" : "standalone"][t.month()]
	}

	function re(t, e, n) {
		var i, s, o, r = t.toLocaleLowerCase();
		if (!this._monthsParse)for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], i = 0; 12 > i; ++i)o = c([2e3, i]), this._shortMonthsParse[i] = this.monthsShort(o, "").toLocaleLowerCase(), this._longMonthsParse[i] = this.months(o, "").toLocaleLowerCase();
		return n ? "MMM" === e ? (s = bs.call(this._shortMonthsParse, r), -1 !== s ? s : null) : (s = bs.call(this._longMonthsParse, r), -1 !== s ? s : null) : "MMM" === e ? (s = bs.call(this._shortMonthsParse, r), -1 !== s ? s : (s = bs.call(this._longMonthsParse, r), -1 !== s ? s : null)) : (s = bs.call(this._longMonthsParse, r), -1 !== s ? s : (s = bs.call(this._shortMonthsParse, r), -1 !== s ? s : null))
	}

	function ae(t, e, n) {
		var i, s, o;
		if (this._monthsParseExact)return re.call(this, t, e, n);
		for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), i = 0; 12 > i; i++) {
			if (s = c([2e3, i]), n && !this._longMonthsParse[i] && (this._longMonthsParse[i] = new RegExp("^" + this.months(s, "").replace(".", "") + "$", "i"), this._shortMonthsParse[i] = new RegExp("^" + this.monthsShort(s, "").replace(".", "") + "$", "i")), n || this._monthsParse[i] || (o = "^" + this.months(s, "") + "|^" + this.monthsShort(s, ""), this._monthsParse[i] = new RegExp(o.replace(".", ""), "i")), n && "MMMM" === e && this._longMonthsParse[i].test(t))return i;
			if (n && "MMM" === e && this._shortMonthsParse[i].test(t))return i;
			if (!n && this._monthsParse[i].test(t))return i
		}
	}

	function le(t, e) {
		var n;
		if (!t.isValid())return t;
		if ("string" == typeof e)if (/^\d+$/.test(e)) e = b(e); else if (e = t.localeData().monthsParse(e), "number" != typeof e)return t;
		return n = Math.min(t.date(), ie(t.year(), e)), t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, n), t
	}

	function ce(e) {
		return null != e ? (le(this, e), t.updateOffset(this, !0), this) : F(this, "Month")
	}

	function ue() {
		return ie(this.year(), this.month())
	}

	function de(t) {
		return this._monthsParseExact ? (a(this, "_monthsRegex") || pe.call(this), t ? this._monthsShortStrictRegex : this._monthsShortRegex) : (a(this, "_monthsShortRegex") || (this._monthsShortRegex = co), this._monthsShortStrictRegex && t ? this._monthsShortStrictRegex : this._monthsShortRegex)
	}

	function he(t) {
		return this._monthsParseExact ? (a(this, "_monthsRegex") || pe.call(this), t ? this._monthsStrictRegex : this._monthsRegex) : (a(this, "_monthsRegex") || (this._monthsRegex = uo), this._monthsStrictRegex && t ? this._monthsStrictRegex : this._monthsRegex)
	}

	function pe() {
		function t(t, e) {
			return e.length - t.length
		}

		var e, n, i = [], s = [], o = [];
		for (e = 0; 12 > e; e++)n = c([2e3, e]), i.push(this.monthsShort(n, "")), s.push(this.months(n, "")), o.push(this.months(n, "")), o.push(this.monthsShort(n, ""));
		for (i.sort(t), s.sort(t), o.sort(t), e = 0; 12 > e; e++)i[e] = J(i[e]), s[e] = J(s[e]);
		for (e = 0; 24 > e; e++)o[e] = J(o[e]);
		this._monthsRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + i.join("|") + ")", "i")
	}

	function fe(t) {
		return ge(t) ? 366 : 365
	}

	function ge(t) {
		return t % 4 === 0 && t % 100 !== 0 || t % 400 === 0
	}

	function me() {
		return ge(this.year())
	}

	function ye(t, e, n, i, s, o, r) {
		var a = new Date(t, e, n, i, s, o, r);
		return 100 > t && t >= 0 && isFinite(a.getFullYear()) && a.setFullYear(t), a
	}

	function ve(t) {
		var e = new Date(Date.UTC.apply(null, arguments));
		return 100 > t && t >= 0 && isFinite(e.getUTCFullYear()) && e.setUTCFullYear(t), e
	}

	function be(t, e, n) {
		var i = 7 + e - n, s = (7 + ve(t, 0, i).getUTCDay() - e) % 7;
		return -s + i - 1
	}

	function _e(t, e, n, i, s) {
		var o, r, a = (7 + n - i) % 7, l = be(t, i, s), c = 1 + 7 * (e - 1) + a + l;
		return 0 >= c ? (o = t - 1, r = fe(o) + c) : c > fe(t) ? (o = t + 1, r = c - fe(t)) : (o = t, r = c), {
			year: o,
			dayOfYear: r
		}
	}

	function we(t, e, n) {
		var i, s, o = be(t.year(), e, n), r = Math.floor((t.dayOfYear() - o - 1) / 7) + 1;
		return 1 > r ? (s = t.year() - 1, i = r + xe(s, e, n)) : r > xe(t.year(), e, n) ? (i = r - xe(t.year(), e, n), s = t.year() + 1) : (s = t.year(), i = r), {
			week: i,
			year: s
		}
	}

	function xe(t, e, n) {
		var i = be(t, e, n), s = be(t + 1, e, n);
		return (fe(t) - i + s) / 7
	}

	function Ce(t) {
		return we(t, this._week.dow, this._week.doy).week
	}

	function ke() {
		return this._week.dow
	}

	function Te() {
		return this._week.doy
	}

	function Se(t) {
		var e = this.localeData().week(this);
		return null == t ? e : this.add(7 * (t - e), "d")
	}

	function De(t) {
		var e = we(this, 1, 4).week;
		return null == t ? e : this.add(7 * (t - e), "d")
	}

	function Ee(t, e) {
		return "string" != typeof t ? t : isNaN(t) ? (t = e.weekdaysParse(t), "number" == typeof t ? t : null) : parseInt(t, 10)
	}

	function Ne(t, e) {
		return "string" == typeof t ? e.weekdaysParse(t) % 7 || 7 : isNaN(t) ? null : t
	}

	function Ae(t, e) {
		return n(this._weekdays) ? this._weekdays[t.day()] : this._weekdays[this._weekdays.isFormat.test(e) ? "format" : "standalone"][t.day()]
	}

	function Me(t) {
		return this._weekdaysShort[t.day()]
	}

	function Pe(t) {
		return this._weekdaysMin[t.day()]
	}

	function Ie(t, e, n) {
		var i, s, o, r = t.toLocaleLowerCase();
		if (!this._weekdaysParse)for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], i = 0; 7 > i; ++i)o = c([2e3, 1]).day(i), this._minWeekdaysParse[i] = this.weekdaysMin(o, "").toLocaleLowerCase(), this._shortWeekdaysParse[i] = this.weekdaysShort(o, "").toLocaleLowerCase(), this._weekdaysParse[i] = this.weekdays(o, "").toLocaleLowerCase();
		return n ? "dddd" === e ? (s = bs.call(this._weekdaysParse, r), -1 !== s ? s : null) : "ddd" === e ? (s = bs.call(this._shortWeekdaysParse, r), -1 !== s ? s : null) : (s = bs.call(this._minWeekdaysParse, r), -1 !== s ? s : null) : "dddd" === e ? (s = bs.call(this._weekdaysParse, r), -1 !== s ? s : (s = bs.call(this._shortWeekdaysParse, r), -1 !== s ? s : (s = bs.call(this._minWeekdaysParse, r), -1 !== s ? s : null))) : "ddd" === e ? (s = bs.call(this._shortWeekdaysParse, r), -1 !== s ? s : (s = bs.call(this._weekdaysParse, r), -1 !== s ? s : (s = bs.call(this._minWeekdaysParse, r), -1 !== s ? s : null))) : (s = bs.call(this._minWeekdaysParse, r), -1 !== s ? s : (s = bs.call(this._weekdaysParse, r), -1 !== s ? s : (s = bs.call(this._shortWeekdaysParse, r), -1 !== s ? s : null)))
	}

	function $e(t, e, n) {
		var i, s, o;
		if (this._weekdaysParseExact)return Ie.call(this, t, e, n);
		for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), i = 0; 7 > i; i++) {
			if (s = c([2e3, 1]).day(i), n && !this._fullWeekdaysParse[i] && (this._fullWeekdaysParse[i] = new RegExp("^" + this.weekdays(s, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[i] = new RegExp("^" + this.weekdaysShort(s, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[i] = new RegExp("^" + this.weekdaysMin(s, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[i] || (o = "^" + this.weekdays(s, "") + "|^" + this.weekdaysShort(s, "") + "|^" + this.weekdaysMin(s, ""), this._weekdaysParse[i] = new RegExp(o.replace(".", ""), "i")), n && "dddd" === e && this._fullWeekdaysParse[i].test(t))return i;
			if (n && "ddd" === e && this._shortWeekdaysParse[i].test(t))return i;
			if (n && "dd" === e && this._minWeekdaysParse[i].test(t))return i;
			if (!n && this._weekdaysParse[i].test(t))return i
		}
	}

	function Oe(t) {
		if (!this.isValid())return null != t ? this : 0 / 0;
		var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
		return null != t ? (t = Ee(t, this.localeData()), this.add(t - e, "d")) : e
	}

	function Re(t) {
		if (!this.isValid())return null != t ? this : 0 / 0;
		var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
		return null == t ? e : this.add(t - e, "d")
	}

	function Le(t) {
		if (!this.isValid())return null != t ? this : 0 / 0;
		if (null != t) {
			var e = Ne(t, this.localeData());
			return this.day(this.day() % 7 ? e : e - 7)
		}
		return this.day() || 7
	}

	function je(t) {
		return this._weekdaysParseExact ? (a(this, "_weekdaysRegex") || We.call(this), t ? this._weekdaysStrictRegex : this._weekdaysRegex) : (a(this, "_weekdaysRegex") || (this._weekdaysRegex = yo), this._weekdaysStrictRegex && t ? this._weekdaysStrictRegex : this._weekdaysRegex)
	}

	function He(t) {
		return this._weekdaysParseExact ? (a(this, "_weekdaysRegex") || We.call(this), t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (a(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = vo), this._weekdaysShortStrictRegex && t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
	}

	function Fe(t) {
		return this._weekdaysParseExact ? (a(this, "_weekdaysRegex") || We.call(this), t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (a(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = bo), this._weekdaysMinStrictRegex && t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
	}

	function We() {
		function t(t, e) {
			return e.length - t.length
		}

		var e, n, i, s, o, r = [], a = [], l = [], u = [];
		for (e = 0; 7 > e; e++)n = c([2e3, 1]).day(e), i = this.weekdaysMin(n, ""), s = this.weekdaysShort(n, ""), o = this.weekdays(n, ""), r.push(i), a.push(s), l.push(o), u.push(i), u.push(s), u.push(o);
		for (r.sort(t), a.sort(t), l.sort(t), u.sort(t), e = 0; 7 > e; e++)a[e] = J(a[e]), l[e] = J(l[e]), u[e] = J(u[e]);
		this._weekdaysRegex = new RegExp("^(" + u.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + r.join("|") + ")", "i")
	}

	function Ye() {
		return this.hours() % 12 || 12
	}

	function qe() {
		return this.hours() || 24
	}

	function ze(t, e) {
		B(t, 0, 0, function () {
			return this.localeData().meridiem(this.hours(), this.minutes(), e)
		})
	}

	function Be(t, e) {
		return e._meridiemParse
	}

	function Ue(t) {
		return "p" === (t + "").toLowerCase().charAt(0)
	}

	function Ve(t, e, n) {
		return t > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
	}

	function Ge(t) {
		return t ? t.toLowerCase().replace("_", "-") : t
	}

	function Ke(t) {
		for (var e, n, i, s, o = 0; o < t.length;) {
			for (s = Ge(t[o]).split("-"), e = s.length, n = Ge(t[o + 1]), n = n ? n.split("-") : null; e > 0;) {
				if (i = Qe(s.slice(0, e).join("-")))return i;
				if (n && n.length >= e && _(s, n, !0) >= e - 1)break;
				e--
			}
			o++
		}
		return null
	}

	function Qe(t) {
		var e = null;
		if (!ko[t] && "undefined" != typeof module && module && module.exports)try {
			e = _o._abbr, require("./locale/" + t), Xe(e)
		} catch (n) {
		}
		return ko[t]
	}

	function Xe(t, e) {
		var n;
		return t && (n = f(e) ? tn(t) : Ze(t, e), n && (_o = n)), _o._abbr
	}

	function Ze(t, e) {
		if (null !== e) {
			var n = Co;
			return e.abbr = t, null != ko[t] ? (C("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), n = ko[t]._config) : null != e.parentLocale && (null != ko[e.parentLocale] ? n = ko[e.parentLocale]._config : C("parentLocaleUndefined", "specified parentLocale is not defined yet. See http://momentjs.com/guides/#/warnings/parent-locale/")), ko[t] = new D(S(n, e)), Xe(t), ko[t]
		}
		return delete ko[t], null
	}

	function Je(t, e) {
		if (null != e) {
			var n, i = Co;
			null != ko[t] && (i = ko[t]._config), e = S(i, e), n = new D(e), n.parentLocale = ko[t], ko[t] = n, Xe(t)
		} else null != ko[t] && (null != ko[t].parentLocale ? ko[t] = ko[t].parentLocale : null != ko[t] && delete ko[t]);
		return ko[t]
	}

	function tn(t) {
		var e;
		if (t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t)return _o;
		if (!n(t)) {
			if (e = Qe(t))return e;
			t = [t]
		}
		return Ke(t)
	}

	function en() {
		return vs(ko)
	}

	function nn(t) {
		var e, n = t._a;
		return n && -2 === d(t).overflow && (e = n[Zs] < 0 || n[Zs] > 11 ? Zs : n[Js] < 1 || n[Js] > ie(n[Xs], n[Zs]) ? Js : n[to] < 0 || n[to] > 24 || 24 === n[to] && (0 !== n[eo] || 0 !== n[no] || 0 !== n[io]) ? to : n[eo] < 0 || n[eo] > 59 ? eo : n[no] < 0 || n[no] > 59 ? no : n[io] < 0 || n[io] > 999 ? io : -1, d(t)._overflowDayOfYear && (Xs > e || e > Js) && (e = Js), d(t)._overflowWeeks && -1 === e && (e = so), d(t)._overflowWeekday && -1 === e && (e = oo), d(t).overflow = e), t
	}

	function sn(t) {
		var e, n, i, s, o, r, a = t._i, l = To.exec(a) || So.exec(a);
		if (l) {
			for (d(t).iso = !0, e = 0, n = Eo.length; n > e; e++)if (Eo[e][1].exec(l[1])) {
				s = Eo[e][0], i = Eo[e][2] !== !1;
				break
			}
			if (null == s)return t._isValid = !1, void 0;
			if (l[3]) {
				for (e = 0, n = No.length; n > e; e++)if (No[e][1].exec(l[3])) {
					o = (l[2] || " ") + No[e][0];
					break
				}
				if (null == o)return t._isValid = !1, void 0
			}
			if (!i && null != o)return t._isValid = !1, void 0;
			if (l[4]) {
				if (!Do.exec(l[4]))return t._isValid = !1, void 0;
				r = "Z"
			}
			t._f = s + (o || "") + (r || ""), un(t)
		} else t._isValid = !1
	}

	function on(e) {
		var n = Ao.exec(e._i);
		return null !== n ? (e._d = new Date(+n[1]), void 0) : (sn(e), e._isValid === !1 && (delete e._isValid, t.createFromInputFallback(e)), void 0)
	}

	function rn(t, e, n) {
		return null != t ? t : null != e ? e : n
	}

	function an(e) {
		var n = new Date(t.now());
		return e._useUTC ? [n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate()] : [n.getFullYear(), n.getMonth(), n.getDate()]
	}

	function ln(t) {
		var e, n, i, s, o = [];
		if (!t._d) {
			for (i = an(t), t._w && null == t._a[Js] && null == t._a[Zs] && cn(t), t._dayOfYear && (s = rn(t._a[Xs], i[Xs]), t._dayOfYear > fe(s) && (d(t)._overflowDayOfYear = !0), n = ve(s, 0, t._dayOfYear), t._a[Zs] = n.getUTCMonth(), t._a[Js] = n.getUTCDate()), e = 0; 3 > e && null == t._a[e]; ++e)t._a[e] = o[e] = i[e];
			for (; 7 > e; e++)t._a[e] = o[e] = null == t._a[e] ? 2 === e ? 1 : 0 : t._a[e];
			24 === t._a[to] && 0 === t._a[eo] && 0 === t._a[no] && 0 === t._a[io] && (t._nextDay = !0, t._a[to] = 0), t._d = (t._useUTC ? ve : ye).apply(null, o), null != t._tzm && t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), t._nextDay && (t._a[to] = 24)
		}
	}

	function cn(t) {
		var e, n, i, s, o, r, a, l;
		e = t._w, null != e.GG || null != e.W || null != e.E ? (o = 1, r = 4, n = rn(e.GG, t._a[Xs], we(vn(), 1, 4).year), i = rn(e.W, 1), s = rn(e.E, 1), (1 > s || s > 7) && (l = !0)) : (o = t._locale._week.dow, r = t._locale._week.doy, n = rn(e.gg, t._a[Xs], we(vn(), o, r).year), i = rn(e.w, 1), null != e.d ? (s = e.d, (0 > s || s > 6) && (l = !0)) : null != e.e ? (s = e.e + o, (e.e < 0 || e.e > 6) && (l = !0)) : s = o), 1 > i || i > xe(n, o, r) ? d(t)._overflowWeeks = !0 : null != l ? d(t)._overflowWeekday = !0 : (a = _e(n, i, s, o, r), t._a[Xs] = a.year, t._dayOfYear = a.dayOfYear)
	}

	function un(e) {
		if (e._f === t.ISO_8601)return sn(e), void 0;
		e._a = [], d(e).empty = !0;
		var n, i, s, o, r, a = "" + e._i, l = a.length, c = 0;
		for (s = K(e._f, e._locale).match(Es) || [], n = 0; n < s.length; n++)o = s[n], i = (a.match(X(o, e)) || [])[0], i && (r = a.substr(0, a.indexOf(i)), r.length > 0 && d(e).unusedInput.push(r), a = a.slice(a.indexOf(i) + i.length), c += i.length), Ms[o] ? (i ? d(e).empty = !1 : d(e).unusedTokens.push(o), ne(o, i, e)) : e._strict && !i && d(e).unusedTokens.push(o);
		d(e).charsLeftOver = l - c, a.length > 0 && d(e).unusedInput.push(a), e._a[to] <= 12 && d(e).bigHour === !0 && e._a[to] > 0 && (d(e).bigHour = void 0), d(e).parsedDateParts = e._a.slice(0), d(e).meridiem = e._meridiem, e._a[to] = dn(e._locale, e._a[to], e._meridiem), ln(e), nn(e)
	}

	function dn(t, e, n) {
		var i;
		return null == n ? e : null != t.meridiemHour ? t.meridiemHour(e, n) : null != t.isPM ? (i = t.isPM(n), i && 12 > e && (e += 12), i || 12 !== e || (e = 0), e) : e
	}

	function hn(t) {
		var e, n, i, s, o;
		if (0 === t._f.length)return d(t).invalidFormat = !0, t._d = new Date(0 / 0), void 0;
		for (s = 0; s < t._f.length; s++)o = 0, e = g({}, t), null != t._useUTC && (e._useUTC = t._useUTC), e._f = t._f[s], un(e), h(e) && (o += d(e).charsLeftOver, o += 10 * d(e).unusedTokens.length, d(e).score = o, (null == i || i > o) && (i = o, n = e));
		l(t, n || e)
	}

	function pn(t) {
		if (!t._d) {
			var e = R(t._i);
			t._a = r([e.year, e.month, e.day || e.date, e.hour, e.minute, e.second, e.millisecond], function (t) {
				return t && parseInt(t, 10)
			}), ln(t)
		}
	}

	function fn(t) {
		var e = new m(nn(gn(t)));
		return e._nextDay && (e.add(1, "d"), e._nextDay = void 0), e
	}

	function gn(t) {
		var e = t._i, i = t._f;
		return t._locale = t._locale || tn(t._l), null === e || void 0 === i && "" === e ? p({nullInput: !0}) : ("string" == typeof e && (t._i = e = t._locale.preparse(e)), y(e) ? new m(nn(e)) : (n(i) ? hn(t) : o(e) ? t._d = e : i ? un(t) : mn(t), h(t) || (t._d = null), t))
	}

	function mn(e) {
		var i = e._i;
		void 0 === i ? e._d = new Date(t.now()) : o(i) ? e._d = new Date(i.valueOf()) : "string" == typeof i ? on(e) : n(i) ? (e._a = r(i.slice(0), function (t) {
			return parseInt(t, 10)
		}), ln(e)) : "object" == typeof i ? pn(e) : "number" == typeof i ? e._d = new Date(i) : t.createFromInputFallback(e)
	}

	function yn(t, e, o, r, a) {
		var l = {};
		return "boolean" == typeof o && (r = o, o = void 0), (i(t) && s(t) || n(t) && 0 === t.length) && (t = void 0), l._isAMomentObject = !0, l._useUTC = l._isUTC = a, l._l = o, l._i = t, l._f = e, l._strict = r, fn(l)
	}

	function vn(t, e, n, i) {
		return yn(t, e, n, i, !1)
	}

	function bn(t, e) {
		var i, s;
		if (1 === e.length && n(e[0]) && (e = e[0]), !e.length)return vn();
		for (i = e[0], s = 1; s < e.length; ++s)(!e[s].isValid() || e[s][t](i)) && (i = e[s]);
		return i
	}

	function _n() {
		var t = [].slice.call(arguments, 0);
		return bn("isBefore", t)
	}

	function wn() {
		var t = [].slice.call(arguments, 0);
		return bn("isAfter", t)
	}

	function xn(t) {
		var e = R(t), n = e.year || 0, i = e.quarter || 0, s = e.month || 0, o = e.week || 0, r = e.day || 0,
			a = e.hour || 0, l = e.minute || 0, c = e.second || 0, u = e.millisecond || 0;
		this._milliseconds = +u + 1e3 * c + 6e4 * l + 1e3 * a * 60 * 60, this._days = +r + 7 * o, this._months = +s + 3 * i + 12 * n, this._data = {}, this._locale = tn(), this._bubble()
	}

	function Cn(t) {
		return t instanceof xn
	}

	function kn(t, e) {
		B(t, 0, 0, function () {
			var t = this.utcOffset(), n = "+";
			return 0 > t && (t = -t, n = "-"), n + z(~~(t / 60), 2) + e + z(~~t % 60, 2)
		})
	}

	function Tn(t, e) {
		var n = (e || "").match(t) || [], i = n[n.length - 1] || [], s = (i + "").match($o) || ["-", 0, 0],
			o = +(60 * s[1]) + b(s[2]);
		return "+" === s[0] ? o : -o
	}

	function Sn(e, n) {
		var i, s;
		return n._isUTC ? (i = n.clone(), s = (y(e) || o(e) ? e.valueOf() : vn(e).valueOf()) - i.valueOf(), i._d.setTime(i._d.valueOf() + s), t.updateOffset(i, !1), i) : vn(e).local()
	}

	function Dn(t) {
		return 15 * -Math.round(t._d.getTimezoneOffset() / 15)
	}

	function En(e, n) {
		var i, s = this._offset || 0;
		return this.isValid() ? null != e ? ("string" == typeof e ? e = Tn(Us, e) : Math.abs(e) < 16 && (e = 60 * e), !this._isUTC && n && (i = Dn(this)), this._offset = e, this._isUTC = !0, null != i && this.add(i, "m"), s !== e && (!n || this._changeInProgress ? Bn(this, Hn(e - s, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, t.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? s : Dn(this) : null != e ? this : 0 / 0
	}

	function Nn(t, e) {
		return null != t ? ("string" != typeof t && (t = -t), this.utcOffset(t, e), this) : -this.utcOffset()
	}

	function An(t) {
		return this.utcOffset(0, t)
	}

	function Mn(t) {
		return this._isUTC && (this.utcOffset(0, t), this._isUTC = !1, t && this.subtract(Dn(this), "m")), this
	}

	function Pn() {
		return this._tzm ? this.utcOffset(this._tzm) : "string" == typeof this._i && this.utcOffset(Tn(Bs, this._i)), this
	}

	function In(t) {
		return this.isValid() ? (t = t ? vn(t).utcOffset() : 0, (this.utcOffset() - t) % 60 === 0) : !1
	}

	function $n() {
		return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
	}

	function On() {
		if (!f(this._isDSTShifted))return this._isDSTShifted;
		var t = {};
		if (g(t, this), t = gn(t), t._a) {
			var e = t._isUTC ? c(t._a) : vn(t._a);
			this._isDSTShifted = this.isValid() && _(t._a, e.toArray()) > 0
		} else this._isDSTShifted = !1;
		return this._isDSTShifted
	}

	function Rn() {
		return this.isValid() ? !this._isUTC : !1
	}

	function Ln() {
		return this.isValid() ? this._isUTC : !1
	}

	function jn() {
		return this.isValid() ? this._isUTC && 0 === this._offset : !1
	}

	function Hn(t, e) {
		var n, i, s, o = t, r = null;
		return Cn(t) ? o = {
			ms: t._milliseconds,
			d: t._days,
			M: t._months
		} : "number" == typeof t ? (o = {}, e ? o[e] = t : o.milliseconds = t) : (r = Oo.exec(t)) ? (n = "-" === r[1] ? -1 : 1, o = {
			y: 0,
			d: b(r[Js]) * n,
			h: b(r[to]) * n,
			m: b(r[eo]) * n,
			s: b(r[no]) * n,
			ms: b(r[io]) * n
		}) : (r = Ro.exec(t)) ? (n = "-" === r[1] ? -1 : 1, o = {
			y: Fn(r[2], n),
			M: Fn(r[3], n),
			w: Fn(r[4], n),
			d: Fn(r[5], n),
			h: Fn(r[6], n),
			m: Fn(r[7], n),
			s: Fn(r[8], n)
		}) : null == o ? o = {} : "object" == typeof o && ("from" in o || "to" in o) && (s = Yn(vn(o.from), vn(o.to)), o = {}, o.ms = s.milliseconds, o.M = s.months), i = new xn(o), Cn(t) && a(t, "_locale") && (i._locale = t._locale), i
	}

	function Fn(t, e) {
		var n = t && parseFloat(t.replace(",", "."));
		return (isNaN(n) ? 0 : n) * e
	}

	function Wn(t, e) {
		var n = {milliseconds: 0, months: 0};
		return n.months = e.month() - t.month() + 12 * (e.year() - t.year()), t.clone().add(n.months, "M").isAfter(e) && --n.months, n.milliseconds = +e - +t.clone().add(n.months, "M"), n
	}

	function Yn(t, e) {
		var n;
		return t.isValid() && e.isValid() ? (e = Sn(e, t), t.isBefore(e) ? n = Wn(t, e) : (n = Wn(e, t), n.milliseconds = -n.milliseconds, n.months = -n.months), n) : {
			milliseconds: 0,
			months: 0
		}
	}

	function qn(t) {
		return 0 > t ? -1 * Math.round(-1 * t) : Math.round(t)
	}

	function zn(t, e) {
		return function (n, i) {
			var s, o;
			return null === i || isNaN(+i) || (C(e, "moment()." + e + "(period, number) is deprecated. Please use moment()." + e + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), o = n, n = i, i = o), n = "string" == typeof n ? +n : n, s = Hn(n, i), Bn(this, s, t), this
		}
	}

	function Bn(e, n, i, s) {
		var o = n._milliseconds, r = qn(n._days), a = qn(n._months);
		e.isValid() && (s = null == s ? !0 : s, o && e._d.setTime(e._d.valueOf() + o * i), r && W(e, "Date", F(e, "Date") + r * i), a && le(e, F(e, "Month") + a * i), s && t.updateOffset(e, r || a))
	}

	function Un(t, e) {
		var n = t.diff(e, "days", !0);
		return -6 > n ? "sameElse" : -1 > n ? "lastWeek" : 0 > n ? "lastDay" : 1 > n ? "sameDay" : 2 > n ? "nextDay" : 7 > n ? "nextWeek" : "sameElse"
	}

	function Vn(e, n) {
		var i = e || vn(), s = Sn(i, this).startOf("day"), o = t.calendarFormat(this, s) || "sameElse",
			r = n && (k(n[o]) ? n[o].call(this, i) : n[o]);
		return this.format(r || this.localeData().calendar(o, this, vn(i)))
	}

	function Gn() {
		return new m(this)
	}

	function Kn(t, e) {
		var n = y(t) ? t : vn(t);
		return this.isValid() && n.isValid() ? (e = O(f(e) ? "millisecond" : e), "millisecond" === e ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(e).valueOf()) : !1
	}

	function Qn(t, e) {
		var n = y(t) ? t : vn(t);
		return this.isValid() && n.isValid() ? (e = O(f(e) ? "millisecond" : e), "millisecond" === e ? this.valueOf() < n.valueOf() : this.clone().endOf(e).valueOf() < n.valueOf()) : !1
	}

	function Xn(t, e, n, i) {
		return i = i || "()", ("(" === i[0] ? this.isAfter(t, n) : !this.isBefore(t, n)) && (")" === i[1] ? this.isBefore(e, n) : !this.isAfter(e, n))
	}

	function Zn(t, e) {
		var n, i = y(t) ? t : vn(t);
		return this.isValid() && i.isValid() ? (e = O(e || "millisecond"), "millisecond" === e ? this.valueOf() === i.valueOf() : (n = i.valueOf(), this.clone().startOf(e).valueOf() <= n && n <= this.clone().endOf(e).valueOf())) : !1
	}

	function Jn(t, e) {
		return this.isSame(t, e) || this.isAfter(t, e)
	}

	function ti(t, e) {
		return this.isSame(t, e) || this.isBefore(t, e)
	}

	function ei(t, e, n) {
		var i, s, o, r;
		return this.isValid() ? (i = Sn(t, this), i.isValid() ? (s = 6e4 * (i.utcOffset() - this.utcOffset()), e = O(e), "year" === e || "month" === e || "quarter" === e ? (r = ni(this, i), "quarter" === e ? r /= 3 : "year" === e && (r /= 12)) : (o = this - i, r = "second" === e ? o / 1e3 : "minute" === e ? o / 6e4 : "hour" === e ? o / 36e5 : "day" === e ? (o - s) / 864e5 : "week" === e ? (o - s) / 6048e5 : o), n ? r : v(r)) : 0 / 0) : 0 / 0
	}

	function ni(t, e) {
		var n, i, s = 12 * (e.year() - t.year()) + (e.month() - t.month()), o = t.clone().add(s, "months");
		return 0 > e - o ? (n = t.clone().add(s - 1, "months"), i = (e - o) / (o - n)) : (n = t.clone().add(s + 1, "months"), i = (e - o) / (n - o)), -(s + i) || 0
	}

	function ii() {
		return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
	}

	function si() {
		var t = this.clone().utc();
		return 0 < t.year() && t.year() <= 9999 ? k(Date.prototype.toISOString) ? this.toDate().toISOString() : G(t, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : G(t, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
	}

	function oi(e) {
		e || (e = this.isUtc() ? t.defaultFormatUtc : t.defaultFormat);
		var n = G(this, e);
		return this.localeData().postformat(n)
	}

	function ri(t, e) {
		return this.isValid() && (y(t) && t.isValid() || vn(t).isValid()) ? Hn({
			to: this,
			from: t
		}).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
	}

	function ai(t) {
		return this.from(vn(), t)
	}

	function li(t, e) {
		return this.isValid() && (y(t) && t.isValid() || vn(t).isValid()) ? Hn({
			from: this,
			to: t
		}).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
	}

	function ci(t) {
		return this.to(vn(), t)
	}

	function ui(t) {
		var e;
		return void 0 === t ? this._locale._abbr : (e = tn(t), null != e && (this._locale = e), this)
	}

	function di() {
		return this._locale
	}

	function hi(t) {
		switch (t = O(t)) {
			case"year":
				this.month(0);
			case"quarter":
			case"month":
				this.date(1);
			case"week":
			case"isoWeek":
			case"day":
			case"date":
				this.hours(0);
			case"hour":
				this.minutes(0);
			case"minute":
				this.seconds(0);
			case"second":
				this.milliseconds(0)
		}
		return "week" === t && this.weekday(0), "isoWeek" === t && this.isoWeekday(1), "quarter" === t && this.month(3 * Math.floor(this.month() / 3)), this
	}

	function pi(t) {
		return t = O(t), void 0 === t || "millisecond" === t ? this : ("date" === t && (t = "day"), this.startOf(t).add(1, "isoWeek" === t ? "week" : t).subtract(1, "ms"))
	}

	function fi() {
		return this._d.valueOf() - 6e4 * (this._offset || 0)
	}

	function gi() {
		return Math.floor(this.valueOf() / 1e3)
	}

	function mi() {
		return new Date(this.valueOf())
	}

	function yi() {
		var t = this;
		return [t.year(), t.month(), t.date(), t.hour(), t.minute(), t.second(), t.millisecond()]
	}

	function vi() {
		var t = this;
		return {
			years: t.year(),
			months: t.month(),
			date: t.date(),
			hours: t.hours(),
			minutes: t.minutes(),
			seconds: t.seconds(),
			milliseconds: t.milliseconds()
		}
	}

	function bi() {
		return this.isValid() ? this.toISOString() : null
	}

	function _i() {
		return h(this)
	}

	function wi() {
		return l({}, d(this))
	}

	function xi() {
		return d(this).overflow
	}

	function Ci() {
		return {input: this._i, format: this._f, locale: this._locale, isUTC: this._isUTC, strict: this._strict}
	}

	function ki(t, e) {
		B(0, [t, t.length], 0, e)
	}

	function Ti(t) {
		return Ni.call(this, t, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
	}

	function Si(t) {
		return Ni.call(this, t, this.isoWeek(), this.isoWeekday(), 1, 4)
	}

	function Di() {
		return xe(this.year(), 1, 4)
	}

	function Ei() {
		var t = this.localeData()._week;
		return xe(this.year(), t.dow, t.doy)
	}

	function Ni(t, e, n, i, s) {
		var o;
		return null == t ? we(this, i, s).year : (o = xe(t, i, s), e > o && (e = o), Ai.call(this, t, e, n, i, s))
	}

	function Ai(t, e, n, i, s) {
		var o = _e(t, e, n, i, s), r = ve(o.year, 0, o.dayOfYear);
		return this.year(r.getUTCFullYear()), this.month(r.getUTCMonth()), this.date(r.getUTCDate()), this
	}

	function Mi(t) {
		return null == t ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (t - 1) + this.month() % 3)
	}

	function Pi(t) {
		var e = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
		return null == t ? e : this.add(t - e, "d")
	}

	function Ii(t, e) {
		e[io] = b(1e3 * ("0." + t))
	}

	function $i() {
		return this._isUTC ? "UTC" : ""
	}

	function Oi() {
		return this._isUTC ? "Coordinated Universal Time" : ""
	}

	function Ri(t) {
		return vn(1e3 * t)
	}

	function Li() {
		return vn.apply(null, arguments).parseZone()
	}

	function ji(t) {
		return t
	}

	function Hi(t, e, n, i) {
		var s = tn(), o = c().set(i, e);
		return s[n](o, t)
	}

	function Fi(t, e, n) {
		if ("number" == typeof t && (e = t, t = void 0), t = t || "", null != e)return Hi(t, e, n, "month");
		var i, s = [];
		for (i = 0; 12 > i; i++)s[i] = Hi(t, i, n, "month");
		return s
	}

	function Wi(t, e, n, i) {
		"boolean" == typeof t ? ("number" == typeof e && (n = e, e = void 0), e = e || "") : (e = t, n = e, t = !1, "number" == typeof e && (n = e, e = void 0), e = e || "");
		var s = tn(), o = t ? s._week.dow : 0;
		if (null != n)return Hi(e, (n + o) % 7, i, "day");
		var r, a = [];
		for (r = 0; 7 > r; r++)a[r] = Hi(e, (r + o) % 7, i, "day");
		return a
	}

	function Yi(t, e) {
		return Fi(t, e, "months")
	}

	function qi(t, e) {
		return Fi(t, e, "monthsShort")
	}

	function zi(t, e, n) {
		return Wi(t, e, n, "weekdays")
	}

	function Bi(t, e, n) {
		return Wi(t, e, n, "weekdaysShort")
	}

	function Ui(t, e, n) {
		return Wi(t, e, n, "weekdaysMin")
	}

	function Vi() {
		var t = this._data;
		return this._milliseconds = Go(this._milliseconds), this._days = Go(this._days), this._months = Go(this._months), t.milliseconds = Go(t.milliseconds), t.seconds = Go(t.seconds), t.minutes = Go(t.minutes), t.hours = Go(t.hours), t.months = Go(t.months), t.years = Go(t.years), this
	}

	function Gi(t, e, n, i) {
		var s = Hn(e, n);
		return t._milliseconds += i * s._milliseconds, t._days += i * s._days, t._months += i * s._months, t._bubble()
	}

	function Ki(t, e) {
		return Gi(this, t, e, 1)
	}

	function Qi(t, e) {
		return Gi(this, t, e, -1)
	}

	function Xi(t) {
		return 0 > t ? Math.floor(t) : Math.ceil(t)
	}

	function Zi() {
		var t, e, n, i, s, o = this._milliseconds, r = this._days, a = this._months, l = this._data;
		return o >= 0 && r >= 0 && a >= 0 || 0 >= o && 0 >= r && 0 >= a || (o += 864e5 * Xi(ts(a) + r), r = 0, a = 0), l.milliseconds = o % 1e3, t = v(o / 1e3), l.seconds = t % 60, e = v(t / 60), l.minutes = e % 60, n = v(e / 60), l.hours = n % 24, r += v(n / 24), s = v(Ji(r)), a += s, r -= Xi(ts(s)), i = v(a / 12), a %= 12, l.days = r, l.months = a, l.years = i, this
	}

	function Ji(t) {
		return 4800 * t / 146097
	}

	function ts(t) {
		return 146097 * t / 4800
	}

	function es(t) {
		var e, n, i = this._milliseconds;
		if (t = O(t), "month" === t || "year" === t)return e = this._days + i / 864e5, n = this._months + Ji(e), "month" === t ? n : n / 12;
		switch (e = this._days + Math.round(ts(this._months)), t) {
			case"week":
				return e / 7 + i / 6048e5;
			case"day":
				return e + i / 864e5;
			case"hour":
				return 24 * e + i / 36e5;
			case"minute":
				return 1440 * e + i / 6e4;
			case"second":
				return 86400 * e + i / 1e3;
			case"millisecond":
				return Math.floor(864e5 * e) + i;
			default:
				throw new Error("Unknown unit " + t)
		}
	}

	function ns() {
		return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * b(this._months / 12)
	}

	function is(t) {
		return function () {
			return this.as(t)
		}
	}

	function ss(t) {
		return t = O(t), this[t + "s"]()
	}

	function os(t) {
		return function () {
			return this._data[t]
		}
	}

	function rs() {
		return v(this.days() / 7)
	}

	function as(t, e, n, i, s) {
		return s.relativeTime(e || 1, !!n, t, i)
	}

	function ls(t, e, n) {
		var i = Hn(t).abs(), s = ur(i.as("s")), o = ur(i.as("m")), r = ur(i.as("h")), a = ur(i.as("d")),
			l = ur(i.as("M")), c = ur(i.as("y")),
			u = s < dr.s && ["s", s] || 1 >= o && ["m"] || o < dr.m && ["mm", o] || 1 >= r && ["h"] || r < dr.h && ["hh", r] || 1 >= a && ["d"] || a < dr.d && ["dd", a] || 1 >= l && ["M"] || l < dr.M && ["MM", l] || 1 >= c && ["y"] || ["yy", c];
		return u[2] = e, u[3] = +t > 0, u[4] = n, as.apply(null, u)
	}

	function cs(t) {
		return void 0 === t ? ur : "function" == typeof t ? (ur = t, !0) : !1
	}

	function us(t, e) {
		return void 0 === dr[t] ? !1 : void 0 === e ? dr[t] : (dr[t] = e, !0)
	}

	function ds(t) {
		var e = this.localeData(), n = ls(this, !t, e);
		return t && (n = e.pastFuture(+this, n)), e.postformat(n)
	}

	function hs() {
		var t, e, n, i = hr(this._milliseconds) / 1e3, s = hr(this._days), o = hr(this._months);
		t = v(i / 60), e = v(t / 60), i %= 60, t %= 60, n = v(o / 12), o %= 12;
		var r = n, a = o, l = s, c = e, u = t, d = i, h = this.asSeconds();
		return h ? (0 > h ? "-" : "") + "P" + (r ? r + "Y" : "") + (a ? a + "M" : "") + (l ? l + "D" : "") + (c || u || d ? "T" : "") + (c ? c + "H" : "") + (u ? u + "M" : "") + (d ? d + "S" : "") : "P0D"
	}

	var ps, fs;
	fs = Array.prototype.some ? Array.prototype.some : function (t) {
		for (var e = Object(this), n = e.length >>> 0, i = 0; n > i; i++)if (i in e && t.call(this, e[i], i, e))return !0;
		return !1
	};
	var gs = t.momentProperties = [], ms = !1, ys = {};
	t.suppressDeprecationWarnings = !1, t.deprecationHandler = null;
	var vs;
	vs = Object.keys ? Object.keys : function (t) {
		var e, n = [];
		for (e in t)a(t, e) && n.push(e);
		return n
	};
	var bs, _s = {
			sameDay: "[Today at] LT",
			nextDay: "[Tomorrow at] LT",
			nextWeek: "dddd [at] LT",
			lastDay: "[Yesterday at] LT",
			lastWeek: "[Last] dddd [at] LT",
			sameElse: "L"
		}, ws = {
			LTS: "h:mm:ss A",
			LT: "h:mm A",
			L: "MM/DD/YYYY",
			LL: "MMMM D, YYYY",
			LLL: "MMMM D, YYYY h:mm A",
			LLLL: "dddd, MMMM D, YYYY h:mm A"
		}, xs = "Invalid date", Cs = "%d", ks = /\d{1,2}/, Ts = {
			future: "in %s",
			past: "%s ago",
			s: "a few seconds",
			m: "a minute",
			mm: "%d minutes",
			h: "an hour",
			hh: "%d hours",
			d: "a day",
			dd: "%d days",
			M: "a month",
			MM: "%d months",
			y: "a year",
			yy: "%d years"
		}, Ss = {}, Ds = {},
		Es = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
		Ns = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, As = {}, Ms = {}, Ps = /\d/, Is = /\d\d/, $s = /\d{3}/,
		Os = /\d{4}/, Rs = /[+-]?\d{6}/, Ls = /\d\d?/, js = /\d\d\d\d?/, Hs = /\d\d\d\d\d\d?/, Fs = /\d{1,3}/,
		Ws = /\d{1,4}/, Ys = /[+-]?\d{1,6}/, qs = /\d+/, zs = /[+-]?\d+/, Bs = /Z|[+-]\d\d:?\d\d/gi,
		Us = /Z|[+-]\d\d(?::?\d\d)?/gi, Vs = /[+-]?\d+(\.\d{1,3})?/,
		Gs = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
		Ks = {}, Qs = {}, Xs = 0, Zs = 1, Js = 2, to = 3, eo = 4, no = 5, io = 6, so = 7, oo = 8;
	bs = Array.prototype.indexOf ? Array.prototype.indexOf : function (t) {
		var e;
		for (e = 0; e < this.length; ++e)if (this[e] === t)return e;
		return -1
	}, B("M", ["MM", 2], "Mo", function () {
		return this.month() + 1
	}), B("MMM", 0, 0, function (t) {
		return this.localeData().monthsShort(this, t)
	}), B("MMMM", 0, 0, function (t) {
		return this.localeData().months(this, t)
	}), $("month", "M"), L("month", 8), Q("M", Ls), Q("MM", Ls, Is), Q("MMM", function (t, e) {
		return e.monthsShortRegex(t)
	}), Q("MMMM", function (t, e) {
		return e.monthsRegex(t)
	}), te(["M", "MM"], function (t, e) {
		e[Zs] = b(t) - 1
	}), te(["MMM", "MMMM"], function (t, e, n, i) {
		var s = n._locale.monthsParse(t, i, n._strict);
		null != s ? e[Zs] = s : d(n).invalidMonth = t
	});
	var ro = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/,
		ao = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
		lo = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), co = Gs, uo = Gs;
	B("Y", 0, 0, function () {
		var t = this.year();
		return 9999 >= t ? "" + t : "+" + t
	}), B(0, ["YY", 2], 0, function () {
		return this.year() % 100
	}), B(0, ["YYYY", 4], 0, "year"), B(0, ["YYYYY", 5], 0, "year"), B(0, ["YYYYYY", 6, !0], 0, "year"), $("year", "y"), L("year", 1), Q("Y", zs), Q("YY", Ls, Is), Q("YYYY", Ws, Os), Q("YYYYY", Ys, Rs), Q("YYYYYY", Ys, Rs), te(["YYYYY", "YYYYYY"], Xs), te("YYYY", function (e, n) {
		n[Xs] = 2 === e.length ? t.parseTwoDigitYear(e) : b(e)
	}), te("YY", function (e, n) {
		n[Xs] = t.parseTwoDigitYear(e)
	}), te("Y", function (t, e) {
		e[Xs] = parseInt(t, 10)
	}), t.parseTwoDigitYear = function (t) {
		return b(t) + (b(t) > 68 ? 1900 : 2e3)
	};
	var ho = H("FullYear", !0);
	B("w", ["ww", 2], "wo", "week"), B("W", ["WW", 2], "Wo", "isoWeek"), $("week", "w"), $("isoWeek", "W"), L("week", 5), L("isoWeek", 5), Q("w", Ls), Q("ww", Ls, Is), Q("W", Ls), Q("WW", Ls, Is), ee(["w", "ww", "W", "WW"], function (t, e, n, i) {
		e[i.substr(0, 1)] = b(t)
	});
	var po = {dow: 0, doy: 6};
	B("d", 0, "do", "day"), B("dd", 0, 0, function (t) {
		return this.localeData().weekdaysMin(this, t)
	}), B("ddd", 0, 0, function (t) {
		return this.localeData().weekdaysShort(this, t)
	}), B("dddd", 0, 0, function (t) {
		return this.localeData().weekdays(this, t)
	}), B("e", 0, 0, "weekday"), B("E", 0, 0, "isoWeekday"), $("day", "d"), $("weekday", "e"), $("isoWeekday", "E"), L("day", 11), L("weekday", 11), L("isoWeekday", 11), Q("d", Ls), Q("e", Ls), Q("E", Ls), Q("dd", function (t, e) {
		return e.weekdaysMinRegex(t)
	}), Q("ddd", function (t, e) {
		return e.weekdaysShortRegex(t)
	}), Q("dddd", function (t, e) {
		return e.weekdaysRegex(t)
	}), ee(["dd", "ddd", "dddd"], function (t, e, n, i) {
		var s = n._locale.weekdaysParse(t, i, n._strict);
		null != s ? e.d = s : d(n).invalidWeekday = t
	}), ee(["d", "e", "E"], function (t, e, n, i) {
		e[i] = b(t)
	});
	var fo = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
		go = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), mo = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), yo = Gs, vo = Gs,
		bo = Gs;
	B("H", ["HH", 2], 0, "hour"), B("h", ["hh", 2], 0, Ye), B("k", ["kk", 2], 0, qe), B("hmm", 0, 0, function () {
		return "" + Ye.apply(this) + z(this.minutes(), 2)
	}), B("hmmss", 0, 0, function () {
		return "" + Ye.apply(this) + z(this.minutes(), 2) + z(this.seconds(), 2)
	}), B("Hmm", 0, 0, function () {
		return "" + this.hours() + z(this.minutes(), 2)
	}), B("Hmmss", 0, 0, function () {
		return "" + this.hours() + z(this.minutes(), 2) + z(this.seconds(), 2)
	}), ze("a", !0), ze("A", !1), $("hour", "h"), L("hour", 13), Q("a", Be), Q("A", Be), Q("H", Ls), Q("h", Ls), Q("HH", Ls, Is), Q("hh", Ls, Is), Q("hmm", js), Q("hmmss", Hs), Q("Hmm", js), Q("Hmmss", Hs), te(["H", "HH"], to), te(["a", "A"], function (t, e, n) {
		n._isPm = n._locale.isPM(t), n._meridiem = t
	}), te(["h", "hh"], function (t, e, n) {
		e[to] = b(t), d(n).bigHour = !0
	}), te("hmm", function (t, e, n) {
		var i = t.length - 2;
		e[to] = b(t.substr(0, i)), e[eo] = b(t.substr(i)), d(n).bigHour = !0
	}), te("hmmss", function (t, e, n) {
		var i = t.length - 4, s = t.length - 2;
		e[to] = b(t.substr(0, i)), e[eo] = b(t.substr(i, 2)), e[no] = b(t.substr(s)), d(n).bigHour = !0
	}), te("Hmm", function (t, e) {
		var n = t.length - 2;
		e[to] = b(t.substr(0, n)), e[eo] = b(t.substr(n))
	}), te("Hmmss", function (t, e) {
		var n = t.length - 4, i = t.length - 2;
		e[to] = b(t.substr(0, n)), e[eo] = b(t.substr(n, 2)), e[no] = b(t.substr(i))
	});
	var _o, wo = /[ap]\.?m?\.?/i, xo = H("Hours", !0), Co = {
			calendar: _s,
			longDateFormat: ws,
			invalidDate: xs,
			ordinal: Cs,
			ordinalParse: ks,
			relativeTime: Ts,
			months: ao,
			monthsShort: lo,
			week: po,
			weekdays: fo,
			weekdaysMin: mo,
			weekdaysShort: go,
			meridiemParse: wo
		}, ko = {},
		To = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,
		So = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,
		Do = /Z|[+-]\d\d(?::?\d\d)?/,
		Eo = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/]],
		No = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]],
		Ao = /^\/?Date\((\-?\d+)/i;
	t.createFromInputFallback = x("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function (t) {
		t._d = new Date(t._i + (t._useUTC ? " UTC" : ""))
	}), t.ISO_8601 = function () {
	};
	var Mo = x("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
			var t = vn.apply(null, arguments);
			return this.isValid() && t.isValid() ? this > t ? this : t : p()
		}),
		Po = x("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
			var t = vn.apply(null, arguments);
			return this.isValid() && t.isValid() ? t > this ? this : t : p()
		}), Io = function () {
			return Date.now ? Date.now() : +new Date
		};
	kn("Z", ":"), kn("ZZ", ""), Q("Z", Us), Q("ZZ", Us), te(["Z", "ZZ"], function (t, e, n) {
		n._useUTC = !0, n._tzm = Tn(Us, t)
	});
	var $o = /([\+\-]|\d\d)/gi;
	t.updateOffset = function () {
	};
	var Oo = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?\d*)?$/,
		Ro = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;
	Hn.fn = xn.prototype;
	var Lo = zn(1, "add"), jo = zn(-1, "subtract");
	t.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", t.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
	var Ho = x("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (t) {
		return void 0 === t ? this.localeData() : this.locale(t)
	});
	B(0, ["gg", 2], 0, function () {
		return this.weekYear() % 100
	}), B(0, ["GG", 2], 0, function () {
		return this.isoWeekYear() % 100
	}), ki("gggg", "weekYear"), ki("ggggg", "weekYear"), ki("GGGG", "isoWeekYear"), ki("GGGGG", "isoWeekYear"), $("weekYear", "gg"), $("isoWeekYear", "GG"), L("weekYear", 1), L("isoWeekYear", 1), Q("G", zs), Q("g", zs), Q("GG", Ls, Is), Q("gg", Ls, Is), Q("GGGG", Ws, Os), Q("gggg", Ws, Os), Q("GGGGG", Ys, Rs), Q("ggggg", Ys, Rs), ee(["gggg", "ggggg", "GGGG", "GGGGG"], function (t, e, n, i) {
		e[i.substr(0, 2)] = b(t)
	}), ee(["gg", "GG"], function (e, n, i, s) {
		n[s] = t.parseTwoDigitYear(e)
	}), B("Q", 0, "Qo", "quarter"), $("quarter", "Q"), L("quarter", 7), Q("Q", Ps), te("Q", function (t, e) {
		e[Zs] = 3 * (b(t) - 1)
	}), B("D", ["DD", 2], "Do", "date"), $("date", "D"), L("date", 9), Q("D", Ls), Q("DD", Ls, Is), Q("Do", function (t, e) {
		return t ? e._ordinalParse : e._ordinalParseLenient
	}), te(["D", "DD"], Js), te("Do", function (t, e) {
		e[Js] = b(t.match(Ls)[0], 10)
	});
	var Fo = H("Date", !0);
	B("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), $("dayOfYear", "DDD"), L("dayOfYear", 4), Q("DDD", Fs), Q("DDDD", $s), te(["DDD", "DDDD"], function (t, e, n) {
		n._dayOfYear = b(t)
	}), B("m", ["mm", 2], 0, "minute"), $("minute", "m"), L("minute", 14), Q("m", Ls), Q("mm", Ls, Is), te(["m", "mm"], eo);
	var Wo = H("Minutes", !1);
	B("s", ["ss", 2], 0, "second"), $("second", "s"), L("second", 15), Q("s", Ls), Q("ss", Ls, Is), te(["s", "ss"], no);
	var Yo = H("Seconds", !1);
	B("S", 0, 0, function () {
		return ~~(this.millisecond() / 100)
	}), B(0, ["SS", 2], 0, function () {
		return ~~(this.millisecond() / 10)
	}), B(0, ["SSS", 3], 0, "millisecond"), B(0, ["SSSS", 4], 0, function () {
		return 10 * this.millisecond()
	}), B(0, ["SSSSS", 5], 0, function () {
		return 100 * this.millisecond()
	}), B(0, ["SSSSSS", 6], 0, function () {
		return 1e3 * this.millisecond()
	}), B(0, ["SSSSSSS", 7], 0, function () {
		return 1e4 * this.millisecond()
	}), B(0, ["SSSSSSSS", 8], 0, function () {
		return 1e5 * this.millisecond()
	}), B(0, ["SSSSSSSSS", 9], 0, function () {
		return 1e6 * this.millisecond()
	}), $("millisecond", "ms"), L("millisecond", 16), Q("S", Fs, Ps), Q("SS", Fs, Is), Q("SSS", Fs, $s);
	var qo;
	for (qo = "SSSS"; qo.length <= 9; qo += "S")Q(qo, qs);
	for (qo = "S"; qo.length <= 9; qo += "S")te(qo, Ii);
	var zo = H("Milliseconds", !1);
	B("z", 0, 0, "zoneAbbr"), B("zz", 0, 0, "zoneName");
	var Bo = m.prototype;
	Bo.add = Lo, Bo.calendar = Vn, Bo.clone = Gn, Bo.diff = ei, Bo.endOf = pi, Bo.format = oi, Bo.from = ri, Bo.fromNow = ai, Bo.to = li, Bo.toNow = ci, Bo.get = Y, Bo.invalidAt = xi, Bo.isAfter = Kn, Bo.isBefore = Qn, Bo.isBetween = Xn, Bo.isSame = Zn, Bo.isSameOrAfter = Jn, Bo.isSameOrBefore = ti, Bo.isValid = _i, Bo.lang = Ho, Bo.locale = ui, Bo.localeData = di, Bo.max = Po, Bo.min = Mo, Bo.parsingFlags = wi, Bo.set = q, Bo.startOf = hi, Bo.subtract = jo, Bo.toArray = yi, Bo.toObject = vi, Bo.toDate = mi, Bo.toISOString = si, Bo.toJSON = bi, Bo.toString = ii, Bo.unix = gi, Bo.valueOf = fi, Bo.creationData = Ci, Bo.year = ho, Bo.isLeapYear = me, Bo.weekYear = Ti, Bo.isoWeekYear = Si, Bo.quarter = Bo.quarters = Mi, Bo.month = ce, Bo.daysInMonth = ue, Bo.week = Bo.weeks = Se, Bo.isoWeek = Bo.isoWeeks = De, Bo.weeksInYear = Ei, Bo.isoWeeksInYear = Di, Bo.date = Fo, Bo.day = Bo.days = Oe, Bo.weekday = Re, Bo.isoWeekday = Le, Bo.dayOfYear = Pi, Bo.hour = Bo.hours = xo, Bo.minute = Bo.minutes = Wo, Bo.second = Bo.seconds = Yo, Bo.millisecond = Bo.milliseconds = zo, Bo.utcOffset = En, Bo.utc = An, Bo.local = Mn, Bo.parseZone = Pn, Bo.hasAlignedHourOffset = In, Bo.isDST = $n, Bo.isLocal = Rn, Bo.isUtcOffset = Ln, Bo.isUtc = jn, Bo.isUTC = jn, Bo.zoneAbbr = $i, Bo.zoneName = Oi, Bo.dates = x("dates accessor is deprecated. Use date instead.", Fo), Bo.months = x("months accessor is deprecated. Use month instead", ce), Bo.years = x("years accessor is deprecated. Use year instead", ho), Bo.zone = x("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", Nn), Bo.isDSTShifted = x("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", On);
	var Uo = Bo, Vo = D.prototype;
	Vo.calendar = E, Vo.longDateFormat = N, Vo.invalidDate = A, Vo.ordinal = M, Vo.preparse = ji, Vo.postformat = ji, Vo.relativeTime = P, Vo.pastFuture = I, Vo.set = T, Vo.months = se, Vo.monthsShort = oe, Vo.monthsParse = ae, Vo.monthsRegex = he, Vo.monthsShortRegex = de, Vo.week = Ce, Vo.firstDayOfYear = Te, Vo.firstDayOfWeek = ke, Vo.weekdays = Ae, Vo.weekdaysMin = Pe, Vo.weekdaysShort = Me, Vo.weekdaysParse = $e, Vo.weekdaysRegex = je, Vo.weekdaysShortRegex = He, Vo.weekdaysMinRegex = Fe, Vo.isPM = Ue, Vo.meridiem = Ve, Xe("en", {
		ordinalParse: /\d{1,2}(th|st|nd|rd)/,
		ordinal: function (t) {
			var e = t % 10, n = 1 === b(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th";
			return t + n
		}
	}), t.lang = x("moment.lang is deprecated. Use moment.locale instead.", Xe), t.langData = x("moment.langData is deprecated. Use moment.localeData instead.", tn);
	var Go = Math.abs, Ko = is("ms"), Qo = is("s"), Xo = is("m"), Zo = is("h"), Jo = is("d"), tr = is("w"),
		er = is("M"), nr = is("y"), ir = os("milliseconds"), sr = os("seconds"), or = os("minutes"), rr = os("hours"),
		ar = os("days"), lr = os("months"), cr = os("years"), ur = Math.round, dr = {s: 45, m: 45, h: 22, d: 26, M: 11},
		hr = Math.abs, pr = xn.prototype;
	pr.abs = Vi, pr.add = Ki, pr.subtract = Qi, pr.as = es, pr.asMilliseconds = Ko, pr.asSeconds = Qo, pr.asMinutes = Xo, pr.asHours = Zo, pr.asDays = Jo, pr.asWeeks = tr, pr.asMonths = er, pr.asYears = nr, pr.valueOf = ns, pr._bubble = Zi, pr.get = ss, pr.milliseconds = ir, pr.seconds = sr, pr.minutes = or, pr.hours = rr, pr.days = ar, pr.weeks = rs, pr.months = lr, pr.years = cr, pr.humanize = ds, pr.toISOString = hs, pr.toString = hs, pr.toJSON = hs, pr.locale = ui, pr.localeData = di, pr.toIsoString = x("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", hs), pr.lang = Ho, B("X", 0, 0, "unix"), B("x", 0, 0, "valueOf"), Q("x", zs), Q("X", Vs), te("X", function (t, e, n) {
		n._d = new Date(1e3 * parseFloat(t, 10))
	}), te("x", function (t, e, n) {
		n._d = new Date(b(t))
	}), t.version = "2.14.1", e(vn), t.fn = Uo, t.min = _n, t.max = wn, t.now = Io, t.utc = c, t.unix = Ri, t.months = Yi, t.isDate = o, t.locale = Xe, t.invalid = p, t.duration = Hn, t.isMoment = y, t.weekdays = zi, t.parseZone = Li, t.localeData = tn, t.isDuration = Cn, t.monthsShort = qi, t.weekdaysMin = Ui, t.defineLocale = Ze, t.updateLocale = Je, t.locales = en, t.weekdaysShort = Bi, t.normalizeUnits = O, t.relativeTimeRounding = cs, t.relativeTimeThreshold = us, t.calendarFormat = Un, t.prototype = Uo;
	var fr = t;
	return fr
}), function (t, e, n, i) {
	"use strict";
	var s = n("html"), o = n(t), r = n(e), a = n.fancybox = function () {
		a.open.apply(this, arguments)
	}, l = navigator.userAgent.match(/msie/i), c = null, u = e.createTouch !== i, d = function (t) {
		return t && t.hasOwnProperty && t instanceof n
	}, h = function (t) {
		return t && "string" === n.type(t)
	}, p = function (t) {
		return h(t) && t.indexOf("%") > 0
	}, f = function (t) {
		return t && !(t.style.overflow && "hidden" === t.style.overflow) && (t.clientWidth && t.scrollWidth > t.clientWidth || t.clientHeight && t.scrollHeight > t.clientHeight)
	}, g = function (t, e) {
		var n = parseInt(t, 10) || 0;
		return e && p(t) && (n = a.getViewport()[e] / 100 * n), Math.ceil(n)
	}, m = function (t, e) {
		return g(t, e) + "px"
	};
	n.extend(a, {
		version: "2.1.5",
		defaults: {
			padding: 15,
			margin: 20,
			width: 800,
			height: 600,
			minWidth: 100,
			minHeight: 100,
			maxWidth: 9999,
			maxHeight: 9999,
			pixelRatio: 1,
			autoSize: !0,
			autoHeight: !1,
			autoWidth: !1,
			autoResize: !0,
			autoCenter: !u,
			fitToView: !0,
			aspectRatio: !1,
			topRatio: .5,
			leftRatio: .5,
			scrolling: "auto",
			wrapCSS: "",
			arrows: !0,
			closeBtn: !0,
			closeClick: !1,
			nextClick: !1,
			mouseWheel: !0,
			autoPlay: !1,
			playSpeed: 3e3,
			preload: 3,
			modal: !1,
			loop: !0,
			ajax: {dataType: "html", headers: {"X-fancyBox": !0}},
			iframe: {scrolling: "auto", preload: !0},
			swf: {wmode: "transparent", allowfullscreen: "true", allowscriptaccess: "always"},
			keys: {
				next: {13: "left", 34: "up", 39: "left", 40: "up"},
				prev: {8: "right", 33: "down", 37: "right", 38: "down"},
				close: [27],
				play: [32],
				toggle: [70]
			},
			direction: {next: "left", prev: "right"},
			scrollOutside: !0,
			index: 0,
			type: null,
			href: null,
			content: null,
			title: null,
			tpl: {
				wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
				image: '<img class="fancybox-image" src="{href}" alt="" />',
				iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (l ? ' allowtransparency="true"' : "") + "></iframe>",
				error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
				closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
				next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
				prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
			},
			openEffect: "fade",
			openSpeed: 250,
			openEasing: "swing",
			openOpacity: !0,
			openMethod: "zoomIn",
			closeEffect: "fade",
			closeSpeed: 250,
			closeEasing: "swing",
			closeOpacity: !0,
			closeMethod: "zoomOut",
			nextEffect: "elastic",
			nextSpeed: 250,
			nextEasing: "swing",
			nextMethod: "changeIn",
			prevEffect: "elastic",
			prevSpeed: 250,
			prevEasing: "swing",
			prevMethod: "changeOut",
			helpers: {overlay: !0, title: !0},
			onCancel: n.noop,
			beforeLoad: n.noop,
			afterLoad: n.noop,
			beforeShow: n.noop,
			afterShow: n.noop,
			beforeChange: n.noop,
			beforeClose: n.noop,
			afterClose: n.noop
		},
		group: {},
		opts: {},
		previous: null,
		coming: null,
		current: null,
		isActive: !1,
		isOpen: !1,
		isOpened: !1,
		wrap: null,
		skin: null,
		outer: null,
		inner: null,
		player: {timer: null, isActive: !1},
		ajaxLoad: null,
		imgPreload: null,
		transitions: {},
		helpers: {},
		open: function (t, e) {
			return t && (n.isPlainObject(e) || (e = {}), !1 !== a.close(!0)) ? (n.isArray(t) || (t = d(t) ? n(t).get() : [t]), n.each(t, function (s, o) {
				var r, l, c, u, p, f, g, m = {};
				"object" === n.type(o) && (o.nodeType && (o = n(o)), d(o) ? (m = {
					href: o.data("fancybox-href") || o.attr("href"),
					title: o.data("fancybox-title") || o.attr("title"),
					isDom: !0,
					element: o
				}, n.metadata && n.extend(!0, m, o.metadata())) : m = o), r = e.href || m.href || (h(o) ? o : null), l = e.title !== i ? e.title : m.title || "", c = e.content || m.content, u = c ? "html" : e.type || m.type, !u && m.isDom && (u = o.data("fancybox-type"), u || (p = o.prop("class").match(/fancybox\.(\w+)/), u = p ? p[1] : null)), h(r) && (u || (a.isImage(r) ? u = "image" : a.isSWF(r) ? u = "swf" : "#" === r.charAt(0) ? u = "inline" : h(o) && (u = "html", c = o)), "ajax" === u && (f = r.split(/\s+/, 2), r = f.shift(), g = f.shift())), c || ("inline" === u ? r ? c = n(h(r) ? r.replace(/.*(?=#[^\s]+$)/, "") : r) : m.isDom && (c = o) : "html" === u ? c = r : u || r || !m.isDom || (u = "inline", c = o)), n.extend(m, {
					href: r,
					type: u,
					content: c,
					title: l,
					selector: g
				}), t[s] = m
			}), a.opts = n.extend(!0, {}, a.defaults, e), e.keys !== i && (a.opts.keys = e.keys ? n.extend({}, a.defaults.keys, e.keys) : !1), a.group = t, a._start(a.opts.index)) : void 0
		},
		cancel: function () {
			var t = a.coming;
			t && !1 !== a.trigger("onCancel") && (a.hideLoading(), a.ajaxLoad && a.ajaxLoad.abort(), a.ajaxLoad = null, a.imgPreload && (a.imgPreload.onload = a.imgPreload.onerror = null), t.wrap && t.wrap.stop(!0, !0).trigger("onReset").remove(), a.coming = null, a.current || a._afterZoomOut(t))
		},
		close: function (t) {
			a.cancel(), !1 !== a.trigger("beforeClose") && (a.unbindEvents(), a.isActive && (a.isOpen && t !== !0 ? (a.isOpen = a.isOpened = !1, a.isClosing = !0, n(".fancybox-item, .fancybox-nav").remove(), a.wrap.stop(!0, !0).removeClass("fancybox-opened"), a.transitions[a.current.closeMethod]()) : (n(".fancybox-wrap").stop(!0).trigger("onReset").remove(), a._afterZoomOut())))
		},
		play: function (t) {
			var e = function () {
				clearTimeout(a.player.timer)
			}, n = function () {
				e(), a.current && a.player.isActive && (a.player.timer = setTimeout(a.next, a.current.playSpeed))
			}, i = function () {
				e(), r.unbind(".player"), a.player.isActive = !1, a.trigger("onPlayEnd")
			}, s = function () {
				a.current && (a.current.loop || a.current.index < a.group.length - 1) && (a.player.isActive = !0, r.bind({
					"onCancel.player beforeClose.player": i,
					"onUpdate.player": n,
					"beforeLoad.player": e
				}), n(), a.trigger("onPlayStart"))
			};
			t === !0 || !a.player.isActive && t !== !1 ? s() : i()
		},
		next: function (t) {
			var e = a.current;
			e && (h(t) || (t = e.direction.next), a.jumpto(e.index + 1, t, "next"))
		},
		prev: function (t) {
			var e = a.current;
			e && (h(t) || (t = e.direction.prev), a.jumpto(e.index - 1, t, "prev"))
		},
		jumpto: function (t, e, n) {
			var s = a.current;
			s && (t = g(t), a.direction = e || s.direction[t >= s.index ? "next" : "prev"], a.router = n || "jumpto", s.loop && (0 > t && (t = s.group.length + t % s.group.length), t %= s.group.length), s.group[t] !== i && (a.cancel(), a._start(t)))
		},
		reposition: function (t, e) {
			var i, s = a.current, o = s ? s.wrap : null;
			o && (i = a._getPosition(e), t && "scroll" === t.type ? (delete i.position, o.stop(!0, !0).animate(i, 200)) : (o.css(i), s.pos = n.extend({}, s.dim, i)))
		},
		update: function (t) {
			var e = t && t.type, n = !e || "orientationchange" === e;
			n && (clearTimeout(c), c = null), a.isOpen && !c && (c = setTimeout(function () {
				var i = a.current;
				i && !a.isClosing && (a.wrap.removeClass("fancybox-tmp"), (n || "load" === e || "resize" === e && i.autoResize) && a._setDimension(), "scroll" === e && i.canShrink || a.reposition(t), a.trigger("onUpdate"), c = null)
			}, n && !u ? 0 : 300))
		},
		toggle: function (t) {
			a.isOpen && (a.current.fitToView = "boolean" === n.type(t) ? t : !a.current.fitToView, u && (a.wrap.removeAttr("style").addClass("fancybox-tmp"), a.trigger("onUpdate")), a.update())
		},
		hideLoading: function () {
			r.unbind(".loading"), n("#fancybox-loading").remove()
		},
		showLoading: function () {
			var t, e;
			a.hideLoading(), t = n('<div id="fancybox-loading"><div></div></div>').click(a.cancel).appendTo("body"), r.bind("keydown.loading", function (t) {
				27 === (t.which || t.keyCode) && (t.preventDefault(), a.cancel())
			}), a.defaults.fixed || (e = a.getViewport(), t.css({
				position: "absolute",
				top: .5 * e.h + e.y,
				left: .5 * e.w + e.x
			}))
		},
		getViewport: function () {
			var e = a.current && a.current.locked || !1, n = {x: o.scrollLeft(), y: o.scrollTop()};
			return e ? (n.w = e[0].clientWidth, n.h = e[0].clientHeight) : (n.w = u && t.innerWidth ? t.innerWidth : o.width(), n.h = u && t.innerHeight ? t.innerHeight : o.height()), n
		},
		unbindEvents: function () {
			a.wrap && d(a.wrap) && a.wrap.unbind(".fb"), r.unbind(".fb"), o.unbind(".fb")
		},
		bindEvents: function () {
			var t, e = a.current;
			e && (o.bind("orientationchange.fb" + (u ? "" : " resize.fb") + (e.autoCenter && !e.locked ? " scroll.fb" : ""), a.update), t = e.keys, t && r.bind("keydown.fb", function (s) {
				var o = s.which || s.keyCode, r = s.target || s.srcElement;
				return 27 === o && a.coming ? !1 : (s.ctrlKey || s.altKey || s.shiftKey || s.metaKey || r && (r.type || n(r).is("[contenteditable]")) || n.each(t, function (t, r) {
					return e.group.length > 1 && r[o] !== i ? (a[t](r[o]), s.preventDefault(), !1) : n.inArray(o, r) > -1 ? (a[t](), s.preventDefault(), !1) : void 0
				}), void 0)
			}), n.fn.mousewheel && e.mouseWheel && a.wrap.bind("mousewheel.fb", function (t, i, s, o) {
				for (var r = t.target || null, l = n(r), c = !1; l.length && !(c || l.is(".fancybox-skin") || l.is(".fancybox-wrap"));)c = f(l[0]), l = n(l).parent();
				0 === i || c || a.group.length > 1 && !e.canShrink && (o > 0 || s > 0 ? a.prev(o > 0 ? "down" : "left") : (0 > o || 0 > s) && a.next(0 > o ? "up" : "right"), t.preventDefault())
			}))
		},
		trigger: function (t, e) {
			var i, s = e || a.coming || a.current;
			if (s) {
				if (n.isFunction(s[t]) && (i = s[t].apply(s, Array.prototype.slice.call(arguments, 1))), i === !1)return !1;
				s.helpers && n.each(s.helpers, function (e, i) {
					i && a.helpers[e] && n.isFunction(a.helpers[e][t]) && a.helpers[e][t](n.extend(!0, {}, a.helpers[e].defaults, i), s)
				}), r.trigger(t)
			}
		},
		isImage: function (t) {
			return h(t) && t.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)
		},
		isSWF: function (t) {
			return h(t) && t.match(/\.(swf)((\?|#).*)?$/i)
		},
		_start: function (t) {
			var e, i, s, o, r, l = {};
			if (t = g(t), e = a.group[t] || null, !e)return !1;
			if (l = n.extend(!0, {}, a.opts, e), o = l.margin, r = l.padding, "number" === n.type(o) && (l.margin = [o, o, o, o]), "number" === n.type(r) && (l.padding = [r, r, r, r]), l.modal && n.extend(!0, l, {
					closeBtn: !1,
					closeClick: !1,
					nextClick: !1,
					arrows: !1,
					mouseWheel: !1,
					keys: null,
					helpers: {overlay: {closeClick: !1}}
				}), l.autoSize && (l.autoWidth = l.autoHeight = !0), "auto" === l.width && (l.autoWidth = !0), "auto" === l.height && (l.autoHeight = !0), l.group = a.group, l.index = t, a.coming = l, !1 === a.trigger("beforeLoad"))return a.coming = null, void 0;
			if (s = l.type, i = l.href, !s)return a.coming = null, a.current && a.router && "jumpto" !== a.router ? (a.current.index = t, a[a.router](a.direction)) : !1;
			if (a.isActive = !0, ("image" === s || "swf" === s) && (l.autoHeight = l.autoWidth = !1, l.scrolling = "visible"), "image" === s && (l.aspectRatio = !0), "iframe" === s && u && (l.scrolling = "scroll"), l.wrap = n(l.tpl.wrap).addClass("fancybox-" + (u ? "mobile" : "desktop") + " fancybox-type-" + s + " fancybox-tmp " + l.wrapCSS).appendTo(l.parent || "body"), n.extend(l, {
					skin: n(".fancybox-skin", l.wrap),
					outer: n(".fancybox-outer", l.wrap),
					inner: n(".fancybox-inner", l.wrap)
				}), n.each(["Top", "Right", "Bottom", "Left"], function (t, e) {
					l.skin.css("padding" + e, m(l.padding[t]))
				}), a.trigger("onReady"), "inline" === s || "html" === s) {
				if (!l.content || !l.content.length)return a._error("content")
			} else if (!i)return a._error("href");
			"image" === s ? a._loadImage() : "ajax" === s ? a._loadAjax() : "iframe" === s ? a._loadIframe() : a._afterLoad()
		},
		_error: function (t) {
			n.extend(a.coming, {
				type: "html",
				autoWidth: !0,
				autoHeight: !0,
				minWidth: 0,
				minHeight: 0,
				scrolling: "no",
				hasError: t,
				content: a.coming.tpl.error
			}), a._afterLoad()
		},
		_loadImage: function () {
			var t = a.imgPreload = new Image;
			t.onload = function () {
				this.onload = this.onerror = null, a.coming.width = this.width / a.opts.pixelRatio, a.coming.height = this.height / a.opts.pixelRatio, a._afterLoad()
			}, t.onerror = function () {
				this.onload = this.onerror = null, a._error("image")
			}, t.src = a.coming.href, t.complete !== !0 && a.showLoading()
		},
		_loadAjax: function () {
			var t = a.coming;
			a.showLoading(), a.ajaxLoad = n.ajax(n.extend({}, t.ajax, {
				url: t.href, error: function (t, e) {
					a.coming && "abort" !== e ? a._error("ajax", t) : a.hideLoading()
				}, success: function (e, n) {
					"success" === n && (t.content = e, a._afterLoad())
				}
			}))
		},
		_loadIframe: function () {
			var t = a.coming,
				e = n(t.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", u ? "auto" : t.iframe.scrolling).attr("src", t.href);
			n(t.wrap).bind("onReset", function () {
				try {
					n(this).find("iframe").hide().attr("src", "//about:blank").end().empty()
				} catch (t) {
				}
			}), t.iframe.preload && (a.showLoading(), e.one("load", function () {
				n(this).data("ready", 1), u || n(this).bind("load.fb", a.update), n(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(), a._afterLoad()
			})), t.content = e.appendTo(t.inner), t.iframe.preload || a._afterLoad()
		},
		_preloadImages: function () {
			var t, e, n = a.group, i = a.current, s = n.length, o = i.preload ? Math.min(i.preload, s - 1) : 0;
			for (e = 1; o >= e; e += 1)t = n[(i.index + e) % s], "image" === t.type && t.href && ((new Image).src = t.href)
		},
		_afterLoad: function () {
			var t, e, i, s, o, r, l = a.coming, c = a.current, u = "fancybox-placeholder";
			if (a.hideLoading(), l && a.isActive !== !1) {
				if (!1 === a.trigger("afterLoad", l, c))return l.wrap.stop(!0).trigger("onReset").remove(), a.coming = null, void 0;
				switch (c && (a.trigger("beforeChange", c), c.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()), a.unbindEvents(), t = l, e = l.content, i = l.type, s = l.scrolling, n.extend(a, {
					wrap: t.wrap,
					skin: t.skin,
					outer: t.outer,
					inner: t.inner,
					current: t,
					previous: c
				}), o = t.href, i) {
					case"inline":
					case"ajax":
					case"html":
						t.selector ? e = n("<div>").html(e).find(t.selector) : d(e) && (e.data(u) || e.data(u, n('<div class="' + u + '"></div>').insertAfter(e).hide()), e = e.show().detach(), t.wrap.bind("onReset", function () {
								n(this).find(e).length && e.hide().replaceAll(e.data(u)).data(u, !1)
							}));
						break;
					case"image":
						e = t.tpl.image.replace("{href}", o);
						break;
					case"swf":
						e = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + o + '"></param>', r = "", n.each(t.swf, function (t, n) {
							e += '<param name="' + t + '" value="' + n + '"></param>', r += " " + t + '="' + n + '"'
						}), e += '<embed src="' + o + '" type="application/x-shockwave-flash" width="100%" height="100%"' + r + "></embed></object>"
				}
				d(e) && e.parent().is(t.inner) || t.inner.append(e), a.trigger("beforeShow"), t.inner.css("overflow", "yes" === s ? "scroll" : "no" === s ? "hidden" : s), a._setDimension(), a.reposition(), a.isOpen = !1, a.coming = null, a.bindEvents(), a.isOpened ? c.prevMethod && a.transitions[c.prevMethod]() : n(".fancybox-wrap").not(t.wrap).stop(!0).trigger("onReset").remove(), a.transitions[a.isOpened ? t.nextMethod : t.openMethod](), a._preloadImages()
			}
		},
		_setDimension: function () {
			var t, e, i, s, o, r, l, c, u, d, h, f, y, v, b, _ = a.getViewport(), w = 0, x = !1, C = !1, k = a.wrap,
				T = a.skin, S = a.inner, D = a.current, E = D.width, N = D.height, A = D.minWidth, M = D.minHeight,
				P = D.maxWidth, I = D.maxHeight, $ = D.scrolling, O = D.scrollOutside ? D.scrollbarWidth : 0,
				R = D.margin, L = g(R[1] + R[3]), j = g(R[0] + R[2]);
			if (k.add(T).add(S).width("auto").height("auto").removeClass("fancybox-tmp"), t = g(T.outerWidth(!0) - T.width()), e = g(T.outerHeight(!0) - T.height()), i = L + t, s = j + e, o = p(E) ? (_.w - i) * g(E) / 100 : E, r = p(N) ? (_.h - s) * g(N) / 100 : N, "iframe" === D.type) {
				if (v = D.content, D.autoHeight && 1 === v.data("ready"))try {
					v[0].contentWindow.document.location && (S.width(o).height(9999), b = v.contents().find("body"), O && b.css("overflow-x", "hidden"), r = b.outerHeight(!0))
				} catch (H) {
				}
			} else(D.autoWidth || D.autoHeight) && (S.addClass("fancybox-tmp"), D.autoWidth || S.width(o), D.autoHeight || S.height(r), D.autoWidth && (o = S.width()), D.autoHeight && (r = S.height()), S.removeClass("fancybox-tmp"));
			if (E = g(o), N = g(r), u = o / r, A = g(p(A) ? g(A, "w") - i : A), P = g(p(P) ? g(P, "w") - i : P), M = g(p(M) ? g(M, "h") - s : M), I = g(p(I) ? g(I, "h") - s : I), l = P, c = I, D.fitToView && (P = Math.min(_.w - i, P), I = Math.min(_.h - s, I)), f = _.w - L, y = _.h - j, D.aspectRatio ? (E > P && (E = P, N = g(E / u)), N > I && (N = I, E = g(N * u)), A > E && (E = A, N = g(E / u)), M > N && (N = M, E = g(N * u))) : (E = Math.max(A, Math.min(E, P)), D.autoHeight && "iframe" !== D.type && (S.width(E), N = S.height()), N = Math.max(M, Math.min(N, I))), D.fitToView)if (S.width(E).height(N), k.width(E + t), d = k.width(), h = k.height(), D.aspectRatio)for (; (d > f || h > y) && E > A && N > M && !(w++ > 19);)N = Math.max(M, Math.min(I, N - 10)), E = g(N * u), A > E && (E = A, N = g(E / u)), E > P && (E = P, N = g(E / u)), S.width(E).height(N), k.width(E + t), d = k.width(), h = k.height(); else E = Math.max(A, Math.min(E, E - (d - f))), N = Math.max(M, Math.min(N, N - (h - y)));
			O && "auto" === $ && r > N && f > E + t + O && (E += O), S.width(E).height(N), k.width(E + t), d = k.width(), h = k.height(), x = (d > f || h > y) && E > A && N > M, C = D.aspectRatio ? l > E && c > N && o > E && r > N : (l > E || c > N) && (o > E || r > N), n.extend(D, {
				dim: {
					width: m(d),
					height: m(h)
				},
				origWidth: o,
				origHeight: r,
				canShrink: x,
				canExpand: C,
				wPadding: t,
				hPadding: e,
				wrapSpace: h - T.outerHeight(!0),
				skinSpace: T.height() - N
			}), !v && D.autoHeight && N > M && I > N && !C && S.height("auto")
		},
		_getPosition: function (t) {
			var e = a.current, n = a.getViewport(), i = e.margin, s = a.wrap.width() + i[1] + i[3],
				o = a.wrap.height() + i[0] + i[2], r = {position: "absolute", top: i[0], left: i[3]};
			return e.autoCenter && e.fixed && !t && o <= n.h && s <= n.w ? r.position = "fixed" : e.locked || (r.top += n.y, r.left += n.x), r.top = m(Math.max(r.top, r.top + (n.h - o) * e.topRatio)), r.left = m(Math.max(r.left, r.left + (n.w - s) * e.leftRatio)), r
		},
		_afterZoomIn: function () {
			var t = a.current;
			t && (a.isOpen = a.isOpened = !0, a.wrap.css("overflow", "visible").addClass("fancybox-opened"), a.update(), (t.closeClick || t.nextClick && a.group.length > 1) && a.inner.css("cursor", "pointer").bind("click.fb", function (e) {
				n(e.target).is("a") || n(e.target).parent().is("a") || (e.preventDefault(), a[t.closeClick ? "close" : "next"]())
			}), t.closeBtn && n(t.tpl.closeBtn).appendTo(a.skin).bind("click.fb", function (t) {
				t.preventDefault(), a.close()
			}), t.arrows && a.group.length > 1 && ((t.loop || t.index > 0) && n(t.tpl.prev).appendTo(a.outer).bind("click.fb", a.prev), (t.loop || t.index < a.group.length - 1) && n(t.tpl.next).appendTo(a.outer).bind("click.fb", a.next)), a.trigger("afterShow"), t.loop || t.index !== t.group.length - 1 ? a.opts.autoPlay && !a.player.isActive && (a.opts.autoPlay = !1, a.play()) : a.play(!1))
		},
		_afterZoomOut: function (t) {
			t = t || a.current, n(".fancybox-wrap").trigger("onReset").remove(), n.extend(a, {
				group: {},
				opts: {},
				router: !1,
				current: null,
				isActive: !1,
				isOpened: !1,
				isOpen: !1,
				isClosing: !1,
				wrap: null,
				skin: null,
				outer: null,
				inner: null
			}), a.trigger("afterClose", t)
		}
	}), a.transitions = {
		getOrigPosition: function () {
			var t = a.current, e = t.element, n = t.orig, i = {}, s = 50, o = 50, r = t.hPadding, l = t.wPadding,
				c = a.getViewport();
			return !n && t.isDom && e.is(":visible") && (n = e.find("img:first"), n.length || (n = e)), d(n) ? (i = n.offset(), n.is("img") && (s = n.outerWidth(), o = n.outerHeight())) : (i.top = c.y + (c.h - o) * t.topRatio, i.left = c.x + (c.w - s) * t.leftRatio), ("fixed" === a.wrap.css("position") || t.locked) && (i.top -= c.y, i.left -= c.x), i = {
				top: m(i.top - r * t.topRatio),
				left: m(i.left - l * t.leftRatio),
				width: m(s + l),
				height: m(o + r)
			}
		}, step: function (t, e) {
			var n, i, s, o = e.prop, r = a.current, l = r.wrapSpace, c = r.skinSpace;
			("width" === o || "height" === o) && (n = e.end === e.start ? 1 : (t - e.start) / (e.end - e.start), a.isClosing && (n = 1 - n), i = "width" === o ? r.wPadding : r.hPadding, s = t - i, a.skin[o](g("width" === o ? s : s - l * n)), a.inner[o](g("width" === o ? s : s - l * n - c * n)))
		}, zoomIn: function () {
			var t = a.current, e = t.pos, i = t.openEffect, s = "elastic" === i, o = n.extend({opacity: 1}, e);
			delete o.position, s ? (e = this.getOrigPosition(), t.openOpacity && (e.opacity = .1)) : "fade" === i && (e.opacity = .1), a.wrap.css(e).animate(o, {
				duration: "none" === i ? 0 : t.openSpeed,
				easing: t.openEasing,
				step: s ? this.step : null,
				complete: a._afterZoomIn
			})
		}, zoomOut: function () {
			var t = a.current, e = t.closeEffect, n = "elastic" === e, i = {opacity: .1};
			n && (i = this.getOrigPosition(), t.closeOpacity && (i.opacity = .1)), a.wrap.animate(i, {
				duration: "none" === e ? 0 : t.closeSpeed,
				easing: t.closeEasing,
				step: n ? this.step : null,
				complete: a._afterZoomOut
			})
		}, changeIn: function () {
			var t, e = a.current, n = e.nextEffect, i = e.pos, s = {opacity: 1}, o = a.direction, r = 200;
			i.opacity = .1, "elastic" === n && (t = "down" === o || "up" === o ? "top" : "left", "down" === o || "right" === o ? (i[t] = m(g(i[t]) - r), s[t] = "+=" + r + "px") : (i[t] = m(g(i[t]) + r), s[t] = "-=" + r + "px")), "none" === n ? a._afterZoomIn() : a.wrap.css(i).animate(s, {
				duration: e.nextSpeed,
				easing: e.nextEasing,
				complete: a._afterZoomIn
			})
		}, changeOut: function () {
			var t = a.previous, e = t.prevEffect, i = {opacity: .1}, s = a.direction, o = 200;
			"elastic" === e && (i["down" === s || "up" === s ? "top" : "left"] = ("up" === s || "left" === s ? "-" : "+") + "=" + o + "px"), t.wrap.animate(i, {
				duration: "none" === e ? 0 : t.prevSpeed,
				easing: t.prevEasing,
				complete: function () {
					n(this).trigger("onReset").remove()
				}
			})
		}
	}, a.helpers.overlay = {
		defaults: {closeClick: !0, speedOut: 200, showEarly: !0, css: {}, locked: !u, fixed: !0},
		overlay: null,
		fixed: !1,
		el: n("html"),
		create: function (t) {
			t = n.extend({}, this.defaults, t), this.overlay && this.close(), this.overlay = n('<div class="fancybox-overlay"></div>').appendTo(a.coming ? a.coming.parent : t.parent), this.fixed = !1, t.fixed && a.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed = !0)
		},
		open: function (t) {
			var e = this;
			t = n.extend({}, this.defaults, t), this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(t), this.fixed || (o.bind("resize.overlay", n.proxy(this.update, this)), this.update()), t.closeClick && this.overlay.bind("click.overlay", function (t) {
				return n(t.target).hasClass("fancybox-overlay") ? (a.isActive ? a.close() : e.close(), !1) : void 0
			}), this.overlay.css(t.css).show()
		},
		close: function () {
			var t, e;
			o.unbind("resize.overlay"), this.el.hasClass("fancybox-lock") && (n(".fancybox-margin").removeClass("fancybox-margin"), t = o.scrollTop(), e = o.scrollLeft(), this.el.removeClass("fancybox-lock"), o.scrollTop(t).scrollLeft(e)), n(".fancybox-overlay").remove().hide(), n.extend(this, {
				overlay: null,
				fixed: !1
			})
		},
		update: function () {
			var t, n = "100%";
			this.overlay.width(n).height("100%"), l ? (t = Math.max(e.documentElement.offsetWidth, e.body.offsetWidth), r.width() > t && (n = r.width())) : r.width() > o.width() && (n = r.width()), this.overlay.width(n).height(r.height())
		},
		onReady: function (t, e) {
			var i = this.overlay;
			n(".fancybox-overlay").stop(!0, !0), i || this.create(t), t.locked && this.fixed && e.fixed && (i || (this.margin = r.height() > o.height() ? n("html").css("margin-right").replace("px", "") : !1), e.locked = this.overlay.append(e.wrap), e.fixed = !1), t.showEarly === !0 && this.beforeShow.apply(this, arguments)
		},
		beforeShow: function (t, e) {
			var i, s;
			e.locked && (this.margin !== !1 && (n("*").filter(function () {
				return "fixed" === n(this).css("position") && !n(this).hasClass("fancybox-overlay") && !n(this).hasClass("fancybox-wrap")
			}).addClass("fancybox-margin"), this.el.addClass("fancybox-margin")), i = o.scrollTop(), s = o.scrollLeft(), this.el.addClass("fancybox-lock"), o.scrollTop(i).scrollLeft(s)), this.open(t)
		},
		onUpdate: function () {
			this.fixed || this.update()
		},
		afterClose: function (t) {
			this.overlay && !a.coming && this.overlay.fadeOut(t.speedOut, n.proxy(this.close, this))
		}
	}, a.helpers.title = {
		defaults: {type: "float", position: "bottom"}, beforeShow: function (t) {
			var e, i, s = a.current, o = s.title, r = t.type;
			if (n.isFunction(o) && (o = o.call(s.element, s)), h(o) && "" !== n.trim(o)) {
				switch (e = n('<div class="fancybox-title fancybox-title-' + r + '-wrap">' + o + "</div>"), r) {
					case"inside":
						i = a.skin;
						break;
					case"outside":
						i = a.wrap;
						break;
					case"over":
						i = a.inner;
						break;
					default:
						i = a.skin, e.appendTo("body"), l && e.width(e.width()), e.wrapInner('<span class="child"></span>'), a.current.margin[2] += Math.abs(g(e.css("margin-bottom")))
				}
				e["top" === t.position ? "prependTo" : "appendTo"](i)
			}
		}
	}, n.fn.fancybox = function (t) {
		var e, i = n(this), s = this.selector || "", o = function (o) {
			var r, l, c = n(this).blur(), u = e;
			o.ctrlKey || o.altKey || o.shiftKey || o.metaKey || c.is(".fancybox-wrap") || (r = t.groupAttr || "data-fancybox-group", l = c.attr(r), l || (r = "rel", l = c.get(0)[r]), l && "" !== l && "nofollow" !== l && (c = s.length ? n(s) : i, c = c.filter("[" + r + '="' + l + '"]'), u = c.index(this)), t.index = u, a.open(c, t) !== !1 && o.preventDefault())
		};
		return t = t || {}, e = t.index || 0, s && t.live !== !1 ? r.undelegate(s, "click.fb-start").delegate(s + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", o) : i.unbind("click.fb-start").bind("click.fb-start", o), this.filter("[data-fancybox-start=1]").trigger("click"), this
	}, r.ready(function () {
		var e, o;
		n.scrollbarWidth === i && (n.scrollbarWidth = function () {
			var t = n('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),
				e = t.children(), i = e.innerWidth() - e.height(99).innerWidth();
			return t.remove(), i
		}), n.support.fixedPosition === i && (n.support.fixedPosition = function () {
			var t = n('<div style="position:fixed;top:20px;"></div>').appendTo("body"),
				e = 20 === t[0].offsetTop || 15 === t[0].offsetTop;
			return t.remove(), e
		}()), n.extend(a.defaults, {
			scrollbarWidth: n.scrollbarWidth(),
			fixed: n.support.fixedPosition,
			parent: n("body")
		}), e = n(t).width(), s.addClass("fancybox-lock-test"), o = n(t).width(), s.removeClass("fancybox-lock-test"), n("<style type='text/css'>.fancybox-margin{margin-right:" + (o - e) + "px;}</style>").appendTo("head")
	})
}(window, document, jQuery), function (t) {
	t.fn.rwdImageMaps = function () {
		var e = this, n = function () {
			e.each(function () {
				if ("undefined" != typeof t(this).attr("usemap")) {
					var e = this, n = t(e);
					t("<img />").load(function () {
						var e = "width", i = "height", s = n.attr(e), o = n.attr(i);
						if (!s || !o) {
							var r = new Image;
							r.src = n.attr("src"), s || (s = r.width), o || (o = r.height)
						}
						var a = n.width() / 100, l = n.height() / 100, c = n.attr("usemap").replace("#", ""),
							u = "coords";
						t('map[name="' + c + '"]').find("area").each(function () {
							var e = t(this);
							e.data(u) || e.data(u, e.attr(u));
							for (var n = e.data(u).split(","), i = new Array(n.length), r = 0; r < i.length; ++r)i[r] = r % 2 === 0 ? parseInt(n[r] / s * 100 * a) : parseInt(n[r] / o * 100 * l);
							e.attr(u, i.toString())
						})
					}).attr("src", n.attr("src"))
				}
			})
		};
		return t(window).resize(n).trigger("resize"), this
	}
}(jQuery), function (t, e) {
	"use strict";
	var n;
	if ("object" == typeof exports) {
		try {
			n = require("moment")
		} catch (i) {
		}
		module.exports = e(n)
	} else"function" == typeof define && define.amd ? define(function (t) {
		var i = "moment";
		try {
			n = t(i)
		} catch (s) {
		}
		return e(n)
	}) : t.Pikaday = e(t.moment)
}(this, function (t) {
	"use strict";
	var e = "function" == typeof t, n = !!window.addEventListener, i = window.document, s = window.setTimeout,
		o = function (t, e, i, s) {
			n ? t.addEventListener(e, i, !!s) : t.attachEvent("on" + e, i)
		}, r = function (t, e, i, s) {
			n ? t.removeEventListener(e, i, !!s) : t.detachEvent("on" + e, i)
		}, a = function (t, e, n) {
			var s;
			i.createEvent ? (s = i.createEvent("HTMLEvents"), s.initEvent(e, !0, !1), s = b(s, n), t.dispatchEvent(s)) : i.createEventObject && (s = i.createEventObject(), s = b(s, n), t.fireEvent("on" + e, s))
		}, l = function (t) {
			return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
		}, c = function (t, e) {
			return -1 !== (" " + t.className + " ").indexOf(" " + e + " ")
		}, u = function (t, e) {
			c(t, e) || (t.className = "" === t.className ? e : t.className + " " + e)
		}, d = function (t, e) {
			t.className = l((" " + t.className + " ").replace(" " + e + " ", " "))
		}, h = function (t) {
			return /Array/.test(Object.prototype.toString.call(t))
		}, p = function (t) {
			return /Date/.test(Object.prototype.toString.call(t)) && !isNaN(t.getTime())
		}, f = function (t) {
			var e = t.getDay();
			return 0 === e || 6 === e
		}, g = function (t) {
			return t % 4 === 0 && t % 100 !== 0 || t % 400 === 0
		}, m = function (t, e) {
			return [31, g(t) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][e]
		}, y = function (t) {
			p(t) && t.setHours(0, 0, 0, 0)
		}, v = function (t, e) {
			return t.getTime() === e.getTime()
		}, b = function (t, e, n) {
			var i, s;
			for (i in e)s = void 0 !== t[i], s && "object" == typeof e[i] && null !== e[i] && void 0 === e[i].nodeName ? p(e[i]) ? n && (t[i] = new Date(e[i].getTime())) : h(e[i]) ? n && (t[i] = e[i].slice(0)) : t[i] = b({}, e[i], n) : (n || !s) && (t[i] = e[i]);
			return t
		}, _ = function (t) {
			return t.month < 0 && (t.year -= Math.ceil(Math.abs(t.month) / 12), t.month += 12), t.month > 11 && (t.year += Math.floor(Math.abs(t.month) / 12), t.month -= 12), t
		}, w = {
			field: null,
			bound: void 0,
			position: "bottom left",
			reposition: !0,
			format: "YYYY-MM-DD",
			defaultDate: null,
			setDefaultDate: !1,
			firstDay: 0,
			minDate: null,
			maxDate: null,
			yearRange: 10,
			showWeekNumber: !1,
			minYear: 0,
			maxYear: 9999,
			minMonth: void 0,
			maxMonth: void 0,
			startRange: null,
			endRange: null,
			isRTL: !1,
			yearSuffix: "",
			showMonthAfterYear: !1,
			numberOfMonths: 1,
			mainCalendar: "left",
			container: void 0,
			i18n: {
				previousMonth: "Previous Month",
				nextMonth: "Next Month",
				months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
				weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
				weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
			},
			theme: null,
			onSelect: null,
			onOpen: null,
			onClose: null,
			onDraw: null
		}, x = function (t, e, n) {
			for (e += t.firstDay; e >= 7;)e -= 7;
			return n ? t.i18n.weekdaysShort[e] : t.i18n.weekdays[e]
		}, C = function (t) {
			if (t.isEmpty)return '<td class="is-empty"></td>';
			var e = [];
			return t.isDisabled && e.push("is-disabled"), t.isToday && e.push("is-today"), t.isSelected && e.push("is-selected"), t.isInRange && e.push("is-inrange"), t.isStartRange && e.push("is-startrange"), t.isEndRange && e.push("is-endrange"), '<td data-day="' + t.day + '" class="' + e.join(" ") + '"><button class="pika-button pika-day" type="button" data-pika-year="' + t.year + '" data-pika-month="' + t.month + '" data-pika-day="' + t.day + '">' + t.day + "</button></td>"
		}, k = function (t, e, n) {
			var i = new Date(n, 0, 1), s = Math.ceil(((new Date(n, e, t) - i) / 864e5 + i.getDay() + 1) / 7);
			return '<td class="pika-week">' + s + "</td>"
		}, T = function (t, e) {
			return "<tr>" + (e ? t.reverse() : t).join("") + "</tr>"
		}, S = function (t) {
			return "<tbody>" + t.join("") + "</tbody>"
		}, D = function (t) {
			var e, n = [];
			for (t.showWeekNumber && n.push("<th></th>"), e = 0; 7 > e; e++)n.push('<th scope="col"><abbr title="' + x(t, e) + '">' + x(t, e, !0) + "</abbr></th>");
			return "<thead>" + (t.isRTL ? n.reverse() : n).join("") + "</thead>"
		}, E = function (t, e, n, i, s) {
			var o, r, a, l, c, u = t._o, d = n === u.minYear, p = n === u.maxYear, f = '<div class="pika-title">', g = !0,
				m = !0;
			for (a = [], o = 0; 12 > o; o++)a.push('<option value="' + (n === s ? o - e : 12 + o - e) + '"' + (o === i ? " selected" : "") + (d && o < u.minMonth || p && o > u.maxMonth ? "disabled" : "") + ">" + u.i18n.months[o] + "</option>");
			for (l = '<div class="pika-label">' + u.i18n.months[i] + '<select class="pika-select pika-select-month" tabindex="-1">' + a.join("") + "</select></div>", h(u.yearRange) ? (o = u.yearRange[0], r = u.yearRange[1] + 1) : (o = n - u.yearRange, r = 1 + n + u.yearRange), a = []; r > o && o <= u.maxYear; o++)o >= u.minYear && a.push('<option value="' + o + '"' + (o === n ? " selected" : "") + ">" + o + "</option>");
			return c = '<div class="pika-label">' + n + u.yearSuffix + '<select class="pika-select pika-select-year" tabindex="-1">' + a.join("") + "</select></div>", f += u.showMonthAfterYear ? c + l : l + c, d && (0 === i || u.minMonth >= i) && (g = !1), p && (11 === i || u.maxMonth <= i) && (m = !1), 0 === e && (f += '<button class="pika-prev' + (g ? "" : " is-disabled") + '" type="button">' + u.i18n.previousMonth + "</button>"), e === t._o.numberOfMonths - 1 && (f += '<button class="pika-next' + (m ? "" : " is-disabled") + '" type="button">' + u.i18n.nextMonth + "</button>"), f += "</div>"
		}, N = function (t, e) {
			return '<table cellpadding="0" cellspacing="0" class="pika-table">' + D(t) + S(e) + "</table>"
		}, A = function (r) {
			var a = this, l = a.config(r);
			a._onMouseDown = function (t) {
				if (a._v) {
					t = t || window.event;
					var e = t.target || t.srcElement;
					if (e)if (c(e, "is-disabled") || (c(e, "pika-button") && !c(e, "is-empty") ? (a.setDate(new Date(e.getAttribute("data-pika-year"), e.getAttribute("data-pika-month"), e.getAttribute("data-pika-day"))), l.bound && s(function () {
							a.hide(), l.field && l.field.blur()
						}, 100)) : c(e, "pika-prev") ? a.prevMonth() : c(e, "pika-next") && a.nextMonth()), c(e, "pika-select")) a._c = !0; else {
						if (!t.preventDefault)return t.returnValue = !1, !1;
						t.preventDefault()
					}
				}
			}, a._onChange = function (t) {
				t = t || window.event;
				var e = t.target || t.srcElement;
				e && (c(e, "pika-select-month") ? a.gotoMonth(e.value) : c(e, "pika-select-year") && a.gotoYear(e.value))
			}, a._onInputChange = function (n) {
				var i;
				n.firedBy !== a && (e ? (i = t(l.field.value, l.format), i = i && i.isValid() ? i.toDate() : null) : i = new Date(Date.parse(l.field.value)), p(i) && a.setDate(i), a._v || a.show())
			}, a._onInputFocus = function () {
				a.show()
			}, a._onInputClick = function () {
				a.show()
			}, a._onInputBlur = function () {
				var t = i.activeElement;
				do if (c(t, "pika-single"))return; while (t = t.parentNode);
				a._c || (a._b = s(function () {
					a.hide()
				}, 50)), a._c = !1
			}, a._onClick = function (t) {
				t = t || window.event;
				var e = t.target || t.srcElement, i = e;
				if (e) {
					!n && c(e, "pika-select") && (e.onchange || (e.setAttribute("onchange", "return;"), o(e, "change", a._onChange)));
					do if (c(i, "pika-single") || i === l.trigger)return; while (i = i.parentNode);
					a._v && e !== l.trigger && i !== l.trigger && a.hide()
				}
			}, a.el = i.createElement("div"), a.el.className = "pika-single" + (l.isRTL ? " is-rtl" : "") + (l.theme ? " " + l.theme : ""), o(a.el, "mousedown", a._onMouseDown, !0), o(a.el, "touchend", a._onMouseDown, !0), o(a.el, "change", a._onChange), l.field && (l.container ? l.container.appendChild(a.el) : l.bound ? i.body.appendChild(a.el) : l.field.parentNode.insertBefore(a.el, l.field.nextSibling), o(l.field, "change", a._onInputChange), l.defaultDate || (l.defaultDate = e && l.field.value ? t(l.field.value, l.format).toDate() : new Date(Date.parse(l.field.value)), l.setDefaultDate = !0));
			var u = l.defaultDate;
			p(u) ? l.setDefaultDate ? a.setDate(u, !0) : a.gotoDate(u) : a.gotoDate(new Date), l.bound ? (this.hide(), a.el.className += " is-bound", o(l.trigger, "click", a._onInputClick), o(l.trigger, "focus", a._onInputFocus), o(l.trigger, "blur", a._onInputBlur)) : this.show()
		};
	return A.prototype = {
		config: function (t) {
			this._o || (this._o = b({}, w, !0));
			var e = b(this._o, t, !0);
			e.isRTL = !!e.isRTL, e.field = e.field && e.field.nodeName ? e.field : null, e.theme = "string" == typeof e.theme && e.theme ? e.theme : null, e.bound = !!(void 0 !== e.bound ? e.field && e.bound : e.field), e.trigger = e.trigger && e.trigger.nodeName ? e.trigger : e.field, e.disableWeekends = !!e.disableWeekends, e.disableDayFn = "function" == typeof e.disableDayFn ? e.disableDayFn : null;
			var n = parseInt(e.numberOfMonths, 10) || 1;
			if (e.numberOfMonths = n > 4 ? 4 : n, p(e.minDate) || (e.minDate = !1), p(e.maxDate) || (e.maxDate = !1), e.minDate && e.maxDate && e.maxDate < e.minDate && (e.maxDate = e.minDate = !1), e.minDate && this.setMinDate(e.minDate), e.maxDate && this.setMaxDate(e.maxDate), h(e.yearRange)) {
				var i = (new Date).getFullYear() - 10;
				e.yearRange[0] = parseInt(e.yearRange[0], 10) || i, e.yearRange[1] = parseInt(e.yearRange[1], 10) || i
			} else e.yearRange = Math.abs(parseInt(e.yearRange, 10)) || w.yearRange, e.yearRange > 100 && (e.yearRange = 100);
			return e
		}, toString: function (n) {
			return p(this._d) ? e ? t(this._d).format(n || this._o.format) : this._d.toDateString() : ""
		}, getMoment: function () {
			return e ? t(this._d) : null
		}, setMoment: function (n, i) {
			e && t.isMoment(n) && this.setDate(n.toDate(), i)
		}, getDate: function () {
			return p(this._d) ? new Date(this._d.getTime()) : null
		}, setDate: function (t, e) {
			if (!t)return this._d = null, this._o.field && (this._o.field.value = "", a(this._o.field, "change", {firedBy: this})), this.draw();
			if ("string" == typeof t && (t = new Date(Date.parse(t))), p(t)) {
				var n = this._o.minDate, i = this._o.maxDate;
				p(n) && n > t ? t = n : p(i) && t > i && (t = i), this._d = new Date(t.getTime()), y(this._d), this.gotoDate(this._d), this._o.field && (this._o.field.value = this.toString(), a(this._o.field, "change", {firedBy: this})), e || "function" != typeof this._o.onSelect || this._o.onSelect.call(this, this.getDate())
			}
		}, gotoDate: function (t) {
			var e = !0;
			if (p(t)) {
				if (this.calendars) {
					var n = new Date(this.calendars[0].year, this.calendars[0].month, 1),
						i = new Date(this.calendars[this.calendars.length - 1].year, this.calendars[this.calendars.length - 1].month, 1),
						s = t.getTime();
					i.setMonth(i.getMonth() + 1), i.setDate(i.getDate() - 1), e = s < n.getTime() || i.getTime() < s
				}
				e && (this.calendars = [{
					month: t.getMonth(),
					year: t.getFullYear()
				}], "right" === this._o.mainCalendar && (this.calendars[0].month += 1 - this._o.numberOfMonths)), this.adjustCalendars()
			}
		}, adjustCalendars: function () {
			this.calendars[0] = _(this.calendars[0]);
			for (var t = 1; t < this._o.numberOfMonths; t++)this.calendars[t] = _({
				month: this.calendars[0].month + t,
				year: this.calendars[0].year
			});
			this.draw()
		}, gotoToday: function () {
			this.gotoDate(new Date)
		}, gotoMonth: function (t) {
			isNaN(t) || (this.calendars[0].month = parseInt(t, 10), this.adjustCalendars())
		}, nextMonth: function () {
			this.calendars[0].month++, this.adjustCalendars()
		}, prevMonth: function () {
			this.calendars[0].month--, this.adjustCalendars()
		}, gotoYear: function (t) {
			isNaN(t) || (this.calendars[0].year = parseInt(t, 10), this.adjustCalendars())
		}, setMinDate: function (t) {
			y(t), this._o.minDate = t, this._o.minYear = t.getFullYear(), this._o.minMonth = t.getMonth(), this.draw()
		}, setMaxDate: function (t) {
			y(t), this._o.maxDate = t, this._o.maxYear = t.getFullYear(), this._o.maxMonth = t.getMonth(), this.draw()
		}, setStartRange: function (t) {
			this._o.startRange = t
		}, setEndRange: function (t) {
			this._o.endRange = t
		}, draw: function (t) {
			if (this._v || t) {
				var e = this._o, n = e.minYear, i = e.maxYear, o = e.minMonth, r = e.maxMonth, a = "";
				this._y <= n && (this._y = n, !isNaN(o) && this._m < o && (this._m = o)), this._y >= i && (this._y = i, !isNaN(r) && this._m > r && (this._m = r));
				for (var l = 0; l < e.numberOfMonths; l++)a += '<div class="pika-lendar">' + E(this, l, this.calendars[l].year, this.calendars[l].month, this.calendars[0].year) + this.render(this.calendars[l].year, this.calendars[l].month) + "</div>";
				if (this.el.innerHTML = a, e.bound && "hidden" !== e.field.type && s(function () {
						e.trigger.focus()
					}, 1), "function" == typeof this._o.onDraw) {
					var c = this;
					s(function () {
						c._o.onDraw.call(c)
					}, 0)
				}
			}
		}, adjustPosition: function () {
			var t, e, n, s, o, r, a, l, c, u;
			if (!this._o.container) {
				if (this.el.style.position = "absolute", t = this._o.trigger, e = t, n = this.el.offsetWidth, s = this.el.offsetHeight, o = window.innerWidth || i.documentElement.clientWidth, r = window.innerHeight || i.documentElement.clientHeight, a = window.pageYOffset || i.body.scrollTop || i.documentElement.scrollTop, "function" == typeof t.getBoundingClientRect) u = t.getBoundingClientRect(), l = u.left + window.pageXOffset, c = u.bottom + window.pageYOffset; else for (l = e.offsetLeft, c = e.offsetTop + e.offsetHeight; e = e.offsetParent;)l += e.offsetLeft, c += e.offsetTop;
				(this._o.reposition && l + n > o || this._o.position.indexOf("right") > -1 && l - n + t.offsetWidth > 0) && (l = l - n + t.offsetWidth), (this._o.reposition && c + s > r + a || this._o.position.indexOf("top") > -1 && c - s - t.offsetHeight > 0) && (c = c - s - t.offsetHeight), this.el.style.left = l + "px", this.el.style.top = c + "px"
			}
		}, render: function (t, e) {
			var n = this._o, i = new Date, s = m(t, e), o = new Date(t, e, 1).getDay(), r = [], a = [];
			y(i), n.firstDay > 0 && (o -= n.firstDay, 0 > o && (o += 7));
			for (var l = s + o, c = l; c > 7;)c -= 7;
			l += 7 - c;
			for (var u = 0, d = 0; l > u; u++) {
				var h = new Date(t, e, 1 + (u - o)), g = p(this._d) ? v(h, this._d) : !1, b = v(h, i),
					_ = o > u || u >= s + o, w = n.startRange && v(n.startRange, h), x = n.endRange && v(n.endRange, h),
					S = n.startRange && n.endRange && n.startRange < h && h < n.endRange,
					D = n.minDate && h < n.minDate || n.maxDate && h > n.maxDate || n.disableWeekends && f(h) || n.disableDayFn && n.disableDayFn(h),
					E = {
						day: 1 + (u - o),
						month: e,
						year: t,
						isSelected: g,
						isToday: b,
						isDisabled: D,
						isEmpty: _,
						isStartRange: w,
						isEndRange: x,
						isInRange: S
					};
				a.push(C(E)), 7 === ++d && (n.showWeekNumber && a.unshift(k(u - o, e, t)), r.push(T(a, n.isRTL)), a = [], d = 0)
			}
			return N(n, r)
		}, isVisible: function () {
			return this._v
		}, show: function () {
			this._v || (d(this.el, "is-hidden"), this._v = !0, this.draw(), this._o.bound && (o(i, "click", this._onClick), this.adjustPosition()), "function" == typeof this._o.onOpen && this._o.onOpen.call(this))
		}, hide: function () {
			var t = this._v;
			t !== !1 && (this._o.bound && r(i, "click", this._onClick), this.el.style.position = "static", this.el.style.left = "auto", this.el.style.top = "auto", u(this.el, "is-hidden"), this._v = !1, void 0 !== t && "function" == typeof this._o.onClose && this._o.onClose.call(this))
		}, destroy: function () {
			this.hide(), r(this.el, "mousedown", this._onMouseDown, !0), r(this.el, "touchend", this._onMouseDown, !0), r(this.el, "change", this._onChange), this._o.field && (r(this._o.field, "change", this._onInputChange), this._o.bound && (r(this._o.trigger, "click", this._onInputClick), r(this._o.trigger, "focus", this._onInputFocus), r(this._o.trigger, "blur", this._onInputBlur))), this.el.parentNode && this.el.parentNode.removeChild(this.el)
		}
	}, A
});
/* ==========================================================
 * treecrumb.js
 * Change icon class to change the caret direction
 *
 * Author: Yann Gouffon, yann@antistatique.net
 * Date:   2014-05-01 11:11:33
 *
 * Copyright 2014 Federal Chancellery of Switzerland
 * Licensed under MIT
 ========================================================== */

(function ($) {
	'use strict';

	/**
	 * ws_embed module implementation.
	 *
	 * @author  <>
	 * @namespace Tc.Module
	 * @class ws_embed
	 * @extends Tc.Module
	 */
		//Tc.Module.Ws_composed_gallery = Tc.Module.extend({
	var Ws_composed_gallery = {


			/*init: function($ctx, sandbox, modId) {
			 this._super($ctx, sandbox, modId);
			 },*/

			aria: function () {

				var lightbox = $("#ariaGallery").ariaLightbox({
					imageArray: "a.thumbnail-aria",
					altText: function () {
						// $(this) is the triggered element (in this case the link element)
						return $(this).find("img").attr("alt");
					},
					descText: function () {
						return $(this).find("img").attr("title");
					},
					useDimmer: true,
					pos: "auto",
					titleText: function () {
						return $(this).find("img").attr("alt");
					},
					em: false
				});
			},

			/*
			 *
			 * MODIMPL-110
			 * get MQ-content set by CSS
			 *
			 *
			 * */
			getBreakPoint: function () {

				var breakpointValue = window.getComputedStyle(document.querySelector('body'), ':before').getPropertyValue('content').replace(/\"/g, '');
				return breakpointValue;

			},

			thumbnailResolution: function (container) {
				var that = this;
				var thmbs = $(container).find("img[data-src]")

				if (that.getBreakPoint() === 'smartphone' && thmbs.length > 0) {
					thmbs.each(function (i, v) {
						v.src = v.getAttribute('data-src');
					});
					$(container).addClass('bigthumbs');
				}
			},

			waitAndCallThumbnailResolution: function (container, callback) {
				var moddynContainers = container,
					thresCounter = 0;
				for (var i = 0; i < moddynContainers.length; i++) {

					// is moddynamic-content-loading DONE ? && has this moddynamic-container not been thumbnailed yet
					if (moddynContainers[i].className.indexOf('done') > -1 && moddynContainers[i].className.indexOf('bigthumbs') === -1) {
						Ws_composed_gallery.thumbnailResolution(moddynContainers[i]);
						thresCounter += 1;
					}
				}
				if (moddynContainers.length === thresCounter) {
					callback();
				}
			},

			on: function () {

				var mod = $('.mod.mod-ws_composed_gallery');


				mod.find('.fancybox-buttons')
					.fancybox({
						type: 'image',
						closeBtn: true,
						arrows: true,
						nextClick: true,

						helpers: {
							title: {
								type: 'inside'
							},
							media: {},
							buttons: {}
						},

						afterLoad: function () {
							var titleStr = '';
							titleStr = $('.js-detail-link' + $(this.element).data('id')).html();

							titleStr = titleStr
								.replace('##pos##', (this.index + 1))
								.replace('##length##', this.group.length)
								.replace('##title##', this.title || '')
								.replace('##url##', $(this.element).data('detail-url') || '');

							this.title = titleStr;
						}
					});

			},

			after: function () {


				ellipsis();

				$(window).resize(function () {
					clearTimeout(rto);
					var rto = window.setTimeout(function () {
						ellipsis(true);
					}, 500);
				});

				function ellipsis(resized) {
					var $figcaption = $('.mod-ws_composed_gallery figcaption');


					if ($figcaption) {
						$figcaption.each(function (i, v) {
							var figc = $(v),
								ellipsis = '...',
								fcontent = figc.text(),
								ftitle = figc.attr('text-save'),
								figcWdth = parseInt(figc.width()),
								figcHgt = parseInt(figc.height()),
								figcLh = parseFloat(figc.css('lineHeight')),
								length = (figcWdth < 100) ? 45 : 53;

							if (resized) {
								figc.removeClass('height');
								figc.text(ftitle);
								figcLh = parseFloat(figc.css('lineHeight'));
								figcHgt = parseInt(figc.height());
								fcontent = ftitle;
							} else {
								figc.attr('text-save', fcontent);
							}

							if (figcHgt > Math.ceil(figcLh * 4)) {
								//figc.text(fcontent.substr(0,length).replace(ellipsis,'')+ellipsis);
								figc.html('<h5>' + fcontent.substr(0, length).replace(ellipsis, '') + ellipsis + '</h5>');
							} else {
								//figc.text(fcontent);
								figc.html('<h5>' + fcontent + '</h5>');
							}

							figc.addClass('height');
						});
					}
				}

			}
		};


	var dyni = setInterval(function () {
		var moddyn = document.getElementsByClassName('mod-dynamic')[0];
		if (moddyn) {

			if (moddyn.className.indexOf(' done') > 0) {
				Ws_composed_gallery.on();
				clearInterval(dyni);
			}
		}
	}, 100);

	Ws_composed_gallery.after();

	// start interval that listens to mod-dynamic to be loaded
	if (document.getElementsByClassName('mod-dynamic').length) {
		var moddynI = window.setInterval(function () {

			Ws_composed_gallery.waitAndCallThumbnailResolution(document.getElementsByClassName('mod-dynamic'), function () {
				window.clearInterval(moddynI);
			});
		}, 10);
	}


})(jQuery);

/* ==========================================================
 * autocomplete.js
 * Deal with the Typeahead.js/Bloodhound library to build the search field autocomplete
 *
 * Author: Yann, yann@antistatique.net
 * Date:   2014-05-01 14:23:18
 *
 * Copyright 2014 Federal Chancellery of Switzerland
 * Licensed under MIT
 ========================================================== */

(function ($, data) {
	'use strict';

	var $searchFields = $('.form-search .search-field');
	if (data) {
		// Init the Bloodhound suggestion engine
		var bloodhound = new Bloodhound({
			datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
			queryTokenizer: Bloodhound.tokenizers.whitespace,
			local: $.map(data, function (state) {
				return {value: state};
			})
		});
		bloodhound.initialize();

		// Init Typeahead on search-fields
		$searchFields.typeahead({
				hint: true,
				highlight: true,
				minLength: 1
			},
			{
				name: 'search',
				displayKey: 'value',
				source: bloodhound.ttAdapter()
			});
	}

	var strBtnLabel = $searchFields.attr('placeholder');
	// Insert the icons
	$searchFields.after('<span class="icon icon--close" data-form-search-clear></span>');

	$('.form-search').append('<button class="icon icon--search icon--before"><span class="sr-only">' + strBtnLabel + '</span></button>');

	$('body').on('click', '[data-form-search-clear]', function () {
		$('#search-field').val('').focus(); // clear search field and refocus it
	});

})(jQuery, (typeof searchData === 'undefined' ? false : searchData));

/* ==========================================================
 * carousel.js
 * Carousel helper
 *
 * Author: Yann, yann@antistatique.net
 * Date:   2014-05-15 13:55:53
 *
 * Copyright 2014 Federal Chancellery of Switzerland
 * Licensed under MIT
 ========================================================== */

(function ($) {
	'use strict';

	$(window).load(function () {
		carouselInit(jQuery);
	});

	// slideshow counter
	var slideshow_total = 0;
	$('.carousel-slideshow').each(function (i, v) {
		slideshow_total = $(v).find('.item').length;
		$(v).find('.carousel-total').text(slideshow_total);
	});

	$('.carousel-slideshow').on('slid.bs.carousel', function () {

		var $carousel = $(this),
			$controls = $carousel.find('.carousel-controls'),
			$actItem = $carousel.find('.carousel-inner .item.active');

		if ($actItem.nextAll().length === 0) {
			$controls.find('.right').addClass('disabled').attr('aria-disabled', 'true');
		} else {
			$controls.find('.right').removeClass('disabled').attr('aria-disabled', 'false');
		}

		if ($actItem.prevAll().length === 0) {
			$controls.find('.left').addClass('disabled').attr('aria-disabled', 'true');
		} else {
			$controls.find('.left').removeClass('disabled').attr('aria-disabled', 'false');
		}

		$(this).find('.carousel-total').text(slideshow_total);

		var carouselData = $carousel.data('bs.carousel');
		var currentIndex = carouselData.getItemIndex(carouselData.$element.find('.item.active'));
		var total = carouselData.$items.length;

		var text = (currentIndex + 1);

		$carousel.find('.carousel-index').text(text);
		$carousel.find('.carousel-total').text(total);
		disableControl($carousel);

	});

})(jQuery);

function carouselInit($) {
	'use strict';

	var $carousel = $('.carousel:not(.carousel-slideshow)');

	$('.carousel .item:first-child').addClass('first');
	$('.carousel .item:last-child').addClass('last');

	$('.carousel').each(function () {
		disableControl($(this));
	});

	if ($carousel) {
		$carousel.each(function () {
			var biggestHeight = 0,
				titleHeight = $(this).find('h3:first-child').height(),
				imgHeight = $(this).find('.carousel-img').height();

			$(this).find('.carousel-indicators').css('top', titleHeight + imgHeight + 40);
			$(this).find('.carousel-control').css('top', titleHeight + imgHeight + 50);

			$(this).find('.item').each(function () {
				if ($(this).height() >= biggestHeight) {
					biggestHeight = $(this).height();
				}
			});
			$(this).find('.item').height(biggestHeight);
		});
	}
}

function disableControl(element) {
	'use strict';

	if (element.find('.first').hasClass('active')) {
		element.find('.left').addClass('disabled').attr('aria-disabled', 'true');
	} else {
		element.find('.left').removeClass('disabled').attr('aria-disabled', 'false');
	}
	if (element.find('.last').hasClass('active')) {
		element.find('.right').addClass('disabled').attr('aria-disabled', 'true');
	} else {
		element.find('.right').removeClass('disabled').attr('aria-disabled', 'false');
	}
}

/* ==========================================================
 * collapse.js
 * Add class when nav collapse is open
 *
 * Author: Yann, yann@antistatique.net
 * Date:   2014-05-06
 *
 * Copyright 2014 Federal Chancellery of Switzerland
 * Licensed under MIT
 ========================================================== */

(function ($) {
	'use strict';

	// Normal Collapse
	$('.collapse:not(tbody)').on('show.bs.collapse', function () {
		$(this)
			.prev()
			.addClass('active icon--root')
			.removeClass('icon--greater')
			.attr({
				'aria-selected': 'true',
				'aria-expanded': 'true'
			});
	});
	$('.collapse:not(tbody)').on('hide.bs.collapse', function () {
		$(this)
			.prev()
			.removeClass('active icon--root')
			.addClass('icon--greater')
			.attr({
				'aria-selected': 'false',
				'aria-expanded': 'false'
			});
	});

	// Table Collapse

	$('tbody.collapse').on('show.bs.collapse', function () {
		$(this)
			.prev().find('[data-toggle=collapse]')
			.addClass('active')
			.attr({
				'aria-selected': 'true',
				'aria-expanded': 'true'
			});
	});
	$('tbody.collapse').on('hide.bs.collapse', function () {
		$(this)
			.prev().find('[data-toggle=collapse]')
			.removeClass('active')
			.attr({
				'aria-selected': 'false',
				'aria-expanded': 'false'
			});
	});

})(jQuery);

/* ==========================================================
 * datepicker.js
 *
 * Author: Lars Kadner, namics
 * Date:   2014-04-30 10:20:33
 ========================================================== */


/* ==========================================================
 *
 * define language packs for pikaday globaly
 *
 ========================================================== */

(function ($) {
	'use strict';

	var locales = {
		'en': {
			previousMonth: 'Previous Month',
			nextMonth: 'Next Month',
			months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
			weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
			weekdaysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
		},
		'de': {
			previousMonth: 'Vorheriger Monat',
			nextMonth: 'Nächster Monat',
			months: ["Januar", "Februar", "M&auml;rz", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
			weekdays: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
			weekdaysShort: ["So.", "Mo.", "Di.", "Mi.", "Do.", "Fr.", "Sa."]
		},
		'fr': {
			previousMonth: 'Pr&eacute;c&eacute;dent',
			nextMonth: 'Suivant',
			months: ['janvier', 'f&eacute;vrier', 'mars', 'avril', 'mai', 'juin', 'juillet', 'ao&ucirc;t', 'septembre', 'octobre', 'novembre', 'd&eacute;cembre'],
			weekdays: ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'],
			weekdaysShort: ['dim.', 'lun.', 'mar.', 'mer.', 'jeu.', 'ven.', 'sam.']
		},
		'it': {
			previousMonth: '&#x3C;Prec',
			nextMonth: 'Succ&#x3E;',
			months: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
			weekdays: ['Domenica', 'Luned&igrave;', 'Marted&igrave;', 'Mercoled&igrave;', 'Gioved&igrave;', 'Venerd&igrave;', 'Sabato'],
			weekdaysShort: ['Dom', 'Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab']
		}
	};

	var standardFormat = 'DD.MM.YYYY';

	var datefields = $('input.datumfeld, .js-datepicker, .js-datepicker-to, .js-datepicker-from'),
		curLang = $('html').attr('lang') || 'en';


	datefields.each(function () {
		var fieldFormat = $(this).data('format') || standardFormat;
		$(this).attr('title', 'Format ' + fieldFormat.toLowerCase());
		var picker = new Pikaday({
			field: $(this)[0],
			i18n: locales[curLang],
			format: fieldFormat
		});
		$(this).data('picker-instance');
	});

})(jQuery);

/* ==========================================================
 * drilldown.js
 * Drilldown plugin scripts. For page-list-nav element
 *
 * Author: Toni Fisler, toni@antistatique.net
 * Date:   2014-05-30 09:02:09
 *
 * Copyright 2014 Federal Chancellery of Switzerland
 * Licensed under MIT
 ========================================================== */

(function ($) {
	'use strict';

	var options = {
		event: 'click', // * View note below
		selector: 'a',  // * View note below
		speed: 100,
		cssClass: {
			container: 'drilldown-container',
			root: 'nav-page-list',
			sub: 'drilldown-sub',
			back: 'drilldown-back'
		}
	};

	$('.drilldown').drilldown(options);

})(jQuery);

/* ==========================================================
 * expandable.js
 * Scripts handling expandable text that gets trunkated in the beginning and can be expanded by clicking on a used defined expand text
 *
 * Author: Stefan Baur, stefan.baur@namics.com
 *
 ========================================================== */

(function ($) {
	'use strict';


	$(document).ready(function () {
		$('.js-expandable').each(function (e, i) {
			var $this = $(this),
				ellipsis = $this.data('expandable-ellipsis') || '...',
				prefix = $this.data('expandable-ellipsis-prefix') || '',
				lines = parseInt($this.data('expandable-lines') || 3);

			makeExpandable($this, ellipsis, prefix, lines);
		});

	});

	function makeExpandable($el, ellipsis, prefix, lines) {
		var height = linesToHeight($el, lines),
			oldStyle = $el.attr('style');

		$el.show().dotdotdot({
			ellipsis: prefix,
			wrap: 'word',
			fallbackToLetter: true,
			height: height,
			after: $('<a href="" class="expandableClickHandler">' + ellipsis + '</a>'),
			callback: function (isTruncated, orgContent) {
				$('.expandableClickHandler', $el).on('click', function (ev) {
					ev.preventDefault();
					$el.trigger("destroy.dot");
					$el.attr('style', oldStyle).show(300);
				});
			}

		});

	}

	function linesToHeight($el, lines) {
		var lineheight = parseInt($el.css('line-height'), 10);
		return lineheight * lines;
	}

})(jQuery);

/* ==========================================================
 * global-nav.js
 * Global Navigation syripts
 *
 * Author: Toni Fisler, toni@antistatique.net
 * Date:   2014-05-27 16:36:15
 *
 * Copyright 2014 Federal Chancellery of Switzerland
 * Licensed under MIT
 ========================================================== */

(function ($) {
	'use strict';

// Handle scroll to position nav as fixed

	var top = 36;

	$(window).scroll(function () {

		var y = $(this).scrollTop();

		if (y >= top) {
			if (!$('.nav-mobile').hasClass('fixed')) {
				$('.nav-mobile').addClass('fixed')
					.after('<div class="nav-mobile-spacer" id="spacer" style="height:36px;"></div>');
			}
		}
		else {
			if ($('.nav-mobile').hasClass('fixed')) {
				$('.nav-mobile').removeClass('fixed');
				$('#spacer').remove();
			}
		}

	});
})(jQuery);

// run image map resizer on all images usig a map

'use strict';

(function ($) {
	$(function () {
		$('img[usemap]').rwdImageMaps();
	});
}(jQuery));

/* ==========================================================
 * subnavigation.js
 * Sub-navigation scripts, handles mainly how the nav-page-list behaves on small
 * screens
 *
 * Author: Toni Fisler, toni@antistatique.net
 * Date:   2014-09-24 10:18:19
 *
 * Copyright 2014 Federal Chancellery of Switzerland
 * Licensed under MIT
 ========================================================== */
(function ($) {
	'use strict';

	var Indicator_table = {

		/* init: function($ctx, sandbox, modId) {
		 this._super($ctx, sandbox, modId);

		 },*/

		on: function (elm) {

			var $ctx = $(elm),
				mod = this;

			mod.checkRecentIcon();
			var sortTables = $ctx.find('.table-sort');
			sortTables.each(function (i, v) {
				mod.removeEmptyCells(v);
			});


		},

		after: function () {
		},

		checkRecentIcon: function () {
			var mod = this,
				$ctx = $(mod);

			$ctx.find("[data-recent-until]").each(function () {
				var $icon = $(this),
					$span = $(this).siblings('span'),
					recentDate = $icon.data('recent-until'),
					d = new Date(),
					currentDate = d.getTime();

				if (recentDate.length !== 0) {
					if (currentDate > recentDate) {
						$icon.remove();
						$span.remove();
					}
				}
			});
		},

		removeEmptyCells: function (table) {

			var $table = $(table),
				$thead = $table.find('thead'),
				$tbody = $table.find('tbody'),
				thToRemove = '', tdToRemove = '',
				emptyCells = new Array(0);

			for (var i = 1; i < $tbody.find('tr:nth(0) td').length + 1; i++) {
				emptyCells[i] = true;
			}

			$tbody.find('td').each(function () {

				var $this = $(this);
				if ($this.html().trim().length === 0 && emptyCells[$this.index()]) {
					emptyCells[$this.index()] = true;
				} else {
					emptyCells[$this.index()] = false;
				}
			});

			//for (var x in emptyCells) {
			for (var x = 1; x < emptyCells.length + 1; x++) {
				if (emptyCells[x]) {
					thToRemove += 'th:nth-child(' + (parseInt(x, 10) + 1) + '),';
					tdToRemove += 'td:nth-child(' + (parseInt(x, 10) + 1) + '),';
				}
			}

			$thead.find(thToRemove.slice(0, -1)).remove();
			$tbody.find(tdToRemove.slice(0, -1)).remove();
		}
	};

	$('.mod.mod-indicator_table').each(function (i, v) {
		Indicator_table.on(v);
	});


}(jQuery));
/* ==========================================================
 * drilldown.js
 * Drilldown plugin scripts. For page-list-nav element
 *
 * Author: Toni Fisler, toni@antistatique.net
 * Date:   2014-05-30 09:02:09
 *
 * Copyright 2014 Federal Chancellery of Switzerland
 * Licensed under MIT
 ========================================================== */

(function ($) {
	'use strict';

	var bindKeyboardToLightBoxNavi = function () {


		$(document).keydown(function (e) {

			var keycode = e.keyCode;

			if ($('.modal-dialog').is(':visible')) {

				var visibleDialog = $('.modal-dialog:visible');

				if (keycode == 37) { //this is left keyboard button
					visibleDialog.find('a.left').trigger('click'); //trigger the left button click
				}

				if (keycode == 39) { //this is right keboard button
					visibleDialog.find('a.right').trigger('click'); //trigger the right button click
				}

			}


		});

	};

	//bindKeyboardToLightBoxNavi();

})(jQuery);

// OUTLINE.JS
// https://github.com/lindsayevans/outline.js
//
// Based on http://www.paciellogroup.com/blog/2012/04/how-to-remove-css-outlines-in-an-accessible-manner/
//
// Hide outline on mouse interactions
// Show it on keyboard interactions
(function (doc) {

	'use strict';

	var styleElement = doc.createElement('STYLE'),
		domEvents = 'addEventListener' in doc,
		addListener = function (type, callback) {
			// Basic cross-browser event handling
			if (domEvents) {
				doc.addEventListener(type, callback);
			} else {
				doc.attachEvent('on' + type, callback);
			}
		},
		setCSS = function (cssText) {
			!!styleElement.styleSheet ? styleElement.styleSheet.cssText = cssText : styleElement.innerHTML = cssText;
		};

	doc.getElementsByTagName('HEAD')[0].appendChild(styleElement);

	// Using mousedown instead of mouseover, so that previously focused elements don't lose focus ring on mouse move
	addListener('mousedown', function () {
		setCSS('.chosen-container-active .chosen-single,:focus{outline:0!important}::-moz-focus-inner,.chosen-container-active .chosen-single{border:0!important}');
	});
	addListener('mousemove', function () {
		setCSS('.chosen-container-active .chosen-single:focus,:focus{outline:0!important}::-moz-focus-inner,.chosen-container-active .chosen-single:focus {border:0!important}');
	});

	addListener('keydown', function () {
		setCSS('');
	});


})(document);

/* ==========================================================
 * print.js
 * Add print preview windows
 *
 * Author: Yann, yann@antistatique.net
 * Date: 2015-02-02
 *
 * Copyright 2014 Federal Chancellery of Switzerland
 * Licensed under MIT
 ========================================================== */

(function ($) {
	'use strict';

	var $body = $('body'),
		$printContainer = null,
		$textAreas = $('#content textarea'),
		nonPrintElements = $body.find('.nav-mobile, textarea, .drilldown, .nav-main, .header-separator, .nav-service, .nav-lang, .form-search, .yamm--select, header, footer, .alert, .icon--print, .social-sharing, .nav-process, .carousel-indicators, .carousel-control, .breadcrumb, .pagination-container');

// Initialization
	$.fn.printPreview = function () {
		return this;
	};


	$.printPreview = {

		printPreview: function (element) {
			var $body = $('body'),
				$container = $('.container-main'),
				footnoteLinks = "",
				linksIndex = 0;

			$printContainer = $('<div class="container container-main print-element"></div>');

			// ##1
			nonPrintElements.hide();

			// if an element is passed, we want it to be the only thing to print out
			// ##2
			if (element) {
				element = $('[data-print=' + element + ']').clone(); // clone to fix issue with IE render
				var header = $('header').clone(), // clone to fix issue with IE render
					title = element.attr('data-title') ? '<h1>' + element.attr('data-title') + '</h1>' : '';
				$printContainer.html('').append(title, element);
				$printContainer.insertBefore($container);
				$container.hide();
			}

			// ##3
			$body.addClass('print-preview');

			// ##4

			var $printSettings = $('<div class="row" id="print-settings">' +
				'<div class="col-sm-12">' +
				'<nav class="pagination-container clearfix">' +
				'<span class="pull-left">' +
				'<input type="checkbox" id="footnote-links">&nbsp;&nbsp;' +
				'<label for="footnote-links">Links as footnotes</label>' +
				'</span>' +
				'<ul class="pull-right">' +
				'<li>' +
				'<button id="print-button" title="print" class="btn"><span class="icon icon--print"></span></button>' +
				'&nbsp;&nbsp;' +
				'<button id="close-button" title="close" class="btn btn-secondary"><span class="icon icon--close"></span></button>' +
				'</li>' +
				'</ul>' +
				'</nav>' +
				'</div>' +
				'</div>');
			$container.prepend($printSettings);
			(element) ? $printContainer.prepend($printSettings) : null;

			$('#print-button').click(function () {
				$.printPreview.printProcess();
			});

			$('#close-button').click(function () {
				$.printPreview.printClose();
			});

			// ##5
			$('a').not('.access-keys a').each(function () {
				var target = $(this).attr('href');
				target = String(target);

				if (target !== "undefined" && target.indexOf("http") === 0) {
					linksIndex++;
					footnoteLinks += '<li>' + target + '</li>';
					$('<sup class="link-ref print-only">(' + linksIndex + ')</sup>').insertAfter(this);
				}
			});

			// ##6
			$('#footnote-links').change(function () {
				if (this.checked) {
					$container.append('<div id="footnote-links-wrapper" class="row footnote-links-wrapper">' +
						'<div class="col-sm-12">' +
						'<h3>Page Links</h3><hr>' +
						'<ol>' +
						footnoteLinks +
						'</ol>' +
						'</div>' +
						'</div>');
					$body.addClass('print-footnotes');
				} else {
					$('#footnote-links-wrapper').remove();
					$body.removeClass('print-footnotes');
				}
			});

			// ##7
			$textAreas.each(function () {
				$('<div class="textarea-style print-only">' + $(this).val() + '</div>').insertBefore($(this));
			});
		},

		printProcess: function () {
			window.print();
		},

		printClose: function () {
			// instead of reload page
			// remove checkbox "Links as Footnotes" inkl Linklist
			// kill ##4 and ##6
			$('#print-settings, #footnote-links-wrapper').remove();

			// toggle print-preview-class
			// kill ##3
			$body.removeClass('print-preview');

			// remove link-index-elements
			// kill ##5 and ##7
			$body.find('.print-only').remove();

			// remove print container if elements are passed to print-funtion
			// kill ##2
			$printContainer.remove();

			// unhide elements ,
			// dont use .hide because this effects an unwanted display:block on onload-hidden elements or inline-block-elements
			// kill ##1
			$('.container-main').css('display', '');
			nonPrintElements.css('display', '');
		}

	};

})(jQuery);

/* ==========================================================
 * rich-menu.js
 * Add overlay when openning a rich yamm menu and define open/close events
 *
 * Author: Yann Gouffon, yann@antistatique.net
 * Date:   2014-04-30 11:48:48
 *
 * Copyright 2014 Federal Chancellery of Switzerland
 * Licensed under MIT
 =========================================================== */

(function ($) {
	'use strict';

	// Keep jQuery object in variables
	var $yamm = $('.yamm'),
		$yammClose = $('.yamm-close, .yamm-close-bottom'),
		$dropdown = $('.yamm .dropdown'),
		$dropdownToggle = $('.yamm .dropdown-toggle');

	// Toggle dropdown and fix z-index errors
	$yamm.each(function () {
		var $that = $(this);
		$that.on('click', '.dropdown-toggle', function () {
			if (!$(this).parent().hasClass('open')) {
				var dropdownHeight = $(window).height() - 49;
				$that.find('.drilldown-container').height(dropdownHeight);
			}
		});
	});

	$dropdownToggle.on('click', function () {
		$(this).parents($dropdown).trigger('get.hidden');
	});

	$dropdown.on({
		"shown.bs.dropdown": function () {
			this.closable = false;
		},
		"get.hidden": function () {
			this.closable = true;
		}
	});

	$('.dropdown').on('show.bs.dropdown', function () {
		$dropdown.removeClass('open');
		$yamm.removeClass('nav-open');
		$(this).parents($yamm).addClass('nav-open');
	});

	$dropdown.on('hide.bs.dropdown', function () {
		// only remove the nav-open class if effectively closing dropdown
		if (this.closable) {
			$yamm.removeClass('nav-open');
		}
		return this.closable;
	});

	$(document).on('click', function (e) {
		// hide dropdown if dropdown is open and target is not in dropdown
		if ($('.dropdown.open').length > 0 && $(e.target).parents('.dropdown').length === 0) {
			$('.dropdown.open .dropdown-toggle').trigger('click');
		}
	});

	// Trigger close yamm menu
	$dropdown.each(function () {
		var $that = $(this);
		$that.find($yammClose).click(function (e) {
			e.preventDefault();
			$that.find($dropdownToggle).trigger("click");
		});
	});

})(jQuery);

/* ==========================================================
 * select.js
 * Scripts handling `select` elements
 *
 * Author: Toni Fisler, toni@antistatique.net
 * Date:   2014-04-30 10:20:33
 *
 * Copyright 2014 Federal Chancellery of Switzerland
 * Licensed under MIT
 ========================================================== */

(function ($) {
	'use strict';

	$(document).ready(function () {
		$('select').chosen({
			disable_search_threshold: 10
		});
	});

})(jQuery);

/* ==========================================================
 * shame.js
 * DOM rewritting on mobile, issue #160
 *
 * Author: Yann, yann@antistatique.net
 * Date:   2014-06-18 15:57:23
 *
 * Copyright 2014 Federal Chancellery of Switzerland
 * Licensed under MIT
 ========================================================== */

(function ($) {
	'use strict';

	$(document).ready(function () {
		var id;
		var isCarouselified = false;
		var isCollapsified = false;
		carouselify();
		collapsify();

		$(window).resize(function () {
			clearTimeout(id);
			id = setTimeout(resizeLauncher, 500);
		});

		function resizeLauncher() {
			carouselify();
			collapsify();
		}

		function carouselify() {
			var $tabFocus = $('.tab-focus'),
				focusIndex = 0;

			if ($tabFocus && $(window).width() <= 767 && !isCarouselified) {
				isCarouselified = true;

				$tabFocus.each(function () {
					var $that = $(this),
						itemIndex = -1;

					focusIndex += 1;

					$that.attr('id', 'tab-focus-' + focusIndex);
					$that.next('.nav-tabs').hide();
					// Prevent those mobile-only carousels from riding automatically by setting interval to 0
					$that.addClass('carousel slide').removeClass('tab-content tab-border').attr('data-interval', 0);
					$that.wrapInner('<div class="carousel-inner"></div>');
					$that.prepend('<ol class="carousel-indicators"></ol>');

					$that.find('.tab-pane').each(function () {
						itemIndex += 1;
						$(this).removeClass('tab-pane in active').addClass('item');
						$that.find('.carousel-indicators').append('<li data-target="#tab-focus-' + focusIndex + '" data-slide-to="' + itemIndex + '"></li>');
					});
					$that.find('.item:first').addClass('active');
					$that.find('.carousel-indicators li:first-child').addClass('active');

					$that.append('<a class="left carousel-control icon icon--before icon--less" href="#tab-focus-' + focusIndex + '" data-slide="prev"></a><a class="right carousel-control icon icon--before icon--greater" href="#tab-focus-' + focusIndex + '" data-slide="next"></a>');
				});
			}
			else if ($tabFocus && $(window).width() > 767 && isCarouselified) {
				isCarouselified = false;

				$tabFocus.each(function () {
					var $that = $(this);

					focusIndex -= 1;
					$that.attr('id', '');
					$that.next('.nav-tabs-focus').css('display', 'flex'); // we can't use .show() because it should be a flex wrapper
					$that.removeClass('carousel slide').addClass('tab-content tab-border');
					$that.find('ol.carousel-indicators').remove();

					$that.find('.item').each(function () {
						$(this).addClass('tab-pane').removeClass('item');
						$(this).css('height', 'auto');
					});
					$that.find('.tab-pane:first-child').addClass('active in');

					if ($that.find('.tab-pane').parent().hasClass('carousel-inner')) {
						$that.find('.tab-pane').unwrap();
					}

					$that.find('.carousel-control').remove();
				});
			}
		}

		function collapsify() {
			var $navTab = $('.nav-tabs:not(.focus)'),
				$collapsify = $('.collapsify'),
				linkIndex = 0;

			if ($navTab && $(window).width() <= 767 && !isCollapsified) {
				isCollapsified = true;

				$navTab.not('.tab-focus').each(function () {
					var $that = $(this);

					$that.removeClass('nav-tabs').addClass('collapsify');
					$that.next('.tab-content').hide();

					$that.find('a').each(function () {
						var $target = $(this).attr('href');
						linkIndex += 1;
						$(this).unwrap();
						$('<div class="collapse" id="collapse-' + linkIndex + '">' + $($target).html() + '</div>').insertAfter(this);
						$(this).attr('data-toggle', 'collapse');
						$(this).attr('data-target', '#collapse-' + linkIndex);
						$(this).addClass('collapse-closed');
						$(this).click(function () {
							$(this).toggleClass('collapse-closed');
						});
					});
					//$that.find('a:first-child').removeClass('collapse-closed').next('.collapse').addClass('in');
				});
			}
			else if ($collapsify && $(window).width() > 767 && isCollapsified) {
				isCollapsified = false;

				$collapsify.each(function () {
					var $that = $(this);

					$that.addClass('nav-tabs').removeClass('collapsify');
					$that.next('.tab-content').show();

					$that.find('a').each(function () {
						linkIndex -= 1;
						$(this).wrap('<li></li>');
						$(this).parent().next('.collapse').remove();
						$(this).attr('data-toggle', 'tab');
						$(this).attr('data-target', '');
						$(this).removeClass('collapse-closed');
					});

					$that.find('li a').each(function () {
						var $tabTarget = $(this).attr('href');
						if ($($tabTarget).hasClass('active')) {
							$(this).parent().addClass('active');
						}
					});
				});
			}
		}
	});

})(jQuery);

/* ==========================================================
 * subnavigation.js
 * Sub-navigation scripts, handles mainly how the nav-page-list behaves on small
 * screens
 *
 * Author: Toni Fisler, toni@antistatique.net
 * Date:   2014-09-24 10:18:19
 *
 * Copyright 2014 Federal Chancellery of Switzerland
 * Licensed under MIT
 ========================================================== */

(function ($) {
	'use strict';

	subNavInit(jQuery);
	$(window).resize(function () {
		subNavInit(jQuery);
	});

	$('a[href=#collapseSubNav]').on('click', function () {
		$(this).attr('aria-expanded', ($(this).attr('aria-expanded') === 'true' ? 'false' : 'true'));
	});

})(jQuery);

function subNavInit($) {
	'use strict';

	var $drilldown = $('.drilldown[class*=col-]');

	if ($(window).width() <= 767 && !$drilldown.hasClass('collapse-enabled')) {
		$drilldown
			.addClass('collapse-enabled')
			.find('.drilldown-container')
			.addClass('collapse')
			.attr('id', 'collapseSubNav');
	} else if ($(window).width() > 767 && $drilldown.hasClass('collapse-enabled')) {
		$drilldown
			.removeClass('collapse-enabled')
			.find('.drilldown-container')
			.removeClass('collapse in')
			.attr('id', '')
			.css({
				'height': 'auto'
			});
	}
}

/* ==========================================================
 * tablesorter.js
 * Control tablesort from markup
 *
 * Author: Simon Perdrisat, simon@antistatique.net
 * Date:   2014-05-01 11:11:33
 *
 * Copyright 2014 Federal Chancellery of Switzerland
 * Licensed under MIT
 ========================================================== */


(function ($) {
	'use strict';

	$('.table-sort').tablesorter();

})(jQuery);

/* ==========================================================
 * tabs.js
 * JS for the tabs and tab-focus elements
 *
 * Copyright 2014 Federal Chancellery of Switzerland
 * Licensed under MIT
 ========================================================== */

(function ($) {
	'use strict';

	/**
	 * @constructor
	 * @param {Object} domNode
	 */
	function TabFocus(element) {
		this.$wrapper = $(element).parent();
		this.domNodes = '.tab-focus, .nav-tabs-focus';
		this.delay = $(element).data('interval') || 0;
		this.playing = null;
		this.interval = null;

		this.$wrapper
			.on('click', '.nav-tabs-focus', function () {
				this.pause(null, true);
			}.bind(this))
			.on('click', '.tab-focus-control', function () {
				if (this.playing) {
					this.pause(null, true);
				} else {
					this.play(null, true);
				}
			}.bind(this));

		this.play(null, true);
	}

	TabFocus.prototype = {
		addListeners: function () {
			this.$wrapper
				.on('mouseenter.tabfocus focus.tabfocus', this.domNodes, this.pause.bind(this))
				.on('mouseleave.tabfocus blur.tabfocus', this.domNodes, this.play.bind(this));
		},

		removeListeners: function () {
			this.$wrapper
				.off('mouseenter.tabfocus focus.tabfocus', this.domNodes)
				.off('mouseleave.tabfocus blur.tabfocus', this.domNodes);
		},

		play: function (event, startListening) {
			if (this.interval) {
				clearInterval(this.interval);
			}
			if (this.delay > 0) {
				this.interval = setInterval(this.slide.bind(this), this.delay);
			}

			if (startListening) {
				this.playing = true;
				this.addListeners();
				this.$wrapper.find('.tab-focus-control .icon').removeClass('icon--play').addClass('icon--pause');
			}
		},

		pause: function (event, stopListening) {
			clearInterval(this.interval);

			if (stopListening) {
				this.playing = false;
				this.removeListeners();
				this.$wrapper.find('.tab-focus-control .icon').removeClass('icon--pause').addClass('icon--play');
			}
		},

		slide: function () {
			var $nav = this.$wrapper.find('.nav-tabs-focus');

			// If the nav is hidden, it means the focus has been changed for a carousel (mobile)
			// We don’t want to slide automatically anymore
			if ($nav.is(':hidden')) {
				return this.pause(null, true);
			}

			if ($nav.find('> li').length) {
				var tabs = this.$wrapper.find('.nav-tabs-focus > li'),
					activeTab = tabs.filter('.active'),
					nextTab = activeTab.next('li'),
					newTab = nextTab.length ? nextTab.find('a') : tabs.eq(0).find('a');

				newTab.tab('show');
			}
		}
	};

	$.fn.tabFocus = function () {
		return this.each(function () {
			if (!$.data(this, 'TabFocus')) {
				$.data(this, 'TabFocus', new TabFocus(this));
			}
		});
	};

	$('.tab-focus').tabFocus();

})(jQuery);

/* ==========================================================
 * treecrumb.js
 * Change icon class to change the caret direction
 *
 * Author: Yann Gouffon, yann@antistatique.net
 * Date:   2014-05-01 11:11:33
 *
 * Copyright 2014 Federal Chancellery of Switzerland
 * Licensed under MIT
 ========================================================== */

(function ($) {
	'use strict';

	$('.treecrumb').each(function () {
		var $that = $(this);
		$that.on('hide.bs.dropdown', function () {
			$that.find('.dropdown-toggle span').removeClass('icon--bottom');
			$that.find('.dropdown-toggle span').addClass('icon--right');
		});
		$that.on('show.bs.dropdown', function (e) {
			var target = e.relatedTarget;
			$that.find('.dropdown-toggle span').removeClass('icon--bottom');
			$that.find('.dropdown-toggle span').addClass('icon--right');
			$(target).find('span').removeClass('icon--right');
			$(target).find('span').addClass('icon--bottom');
		});
	});

})(jQuery);

/**
 * Terrific JavaScript Framework v2.0.1
 * http://terrifically.org
 *
 * Copyright 2012, Remo Brunschwiler
 * MIT Licensed.
 *
 * Date: Mon, 10 Sep 2012 13:44:44 GMT
 *
 *
 * Includes:
 * Simple JavaScript Inheritance
 * By John Resig http://ejohn.org/
 * MIT Licensed.
 *
 * @module Tc
 *
 */
var Tc = Tc || {};

/*
 * The base library object.
 */
Tc.$ = $;
//Tc.$ = jQuery;// magnolia stk uses jQuery

/*
 * Simple JavaScript Inheritance
 * By John Resig http://ejohn.org/
 * MIT Licensed.
 */
(function () {
	var initializing = false, fnTest = /xyz/.test(function () {
		xyz;
	}) ? /\b_super\b/ : /.*/;

	// The base Class implementation (does nothing)
	this.Class = function () {
	};

	// Create a new Class that inherits from this class
	Class.extend = function (prop) {
		var _super = this.prototype;

		// Instantiate a base class (but only create the instance,
		// don't run the init constructor)
		initializing = true;
		var prototype = new this();
		initializing = false;

		// Copy the properties over onto the new prototype
		for (var name in prop) {
			// Check if we're overwriting an existing function
			prototype[name] = typeof prop[name] == "function" &&
			typeof _super[name] == "function" &&
			fnTest.test(prop[name]) ? (function (name, fn) {
				return function () {
					var tmp = this._super;

					// Add a new ._super() method that is the same method
					// but on the super-class
					this._super = _super[name];

					// The method only need to be bound temporarily, so we
					// remove it when we're done executing
					var ret = fn.apply(this, arguments);
					this._super = tmp;

					return ret;
				};
			})(name, prop[name]) : prop[name];
		}

		// The dummy class constructor
		function Class() {
			// All construction is actually done in the init method
			if (!initializing && this.init) {
				this.init.apply(this, arguments);
			}
		}

		// Populate our constructed prototype object
		Class.prototype = prototype;

		// Enforce the constructor to be what we expect
		Class.constructor = Class;

		// And make this class extendable
		Class.extend = arguments.callee;

		return Class;
	};
})();

/**
 * Contains the application base config.
 * The base config can be extended or overwritten either via
 * new Application ($ctx, config) during bootstrapping the application or via
 * overriding the Tc.Config object in your project.
 *
 * @author Remo Brunschwiler
 * @namespace Tc
 * @class Config
 * @static
 */
Tc.Config = {
	/**
	 * The paths for the different types of dependencies.
	 *
	 * @property dependencies
	 * @type Object
	 */
	dependencies: {
		css: '/css/dependencies',
		js: '/js/dependencies'
	}
};

(function ($) {
	"use strict";

	/**
	 * Responsible for application-wide issues such as the creation of modules and establishing connections between them.
	 *
	 * @author Remo Brunschwiler
	 * @namespace Tc
	 * @class Application
	 */
	Tc.Application = Class.extend({

		/**
		 * Initializes the application.
		 *
		 * @method init
		 * @constructor
		 * @param {jQuery} $ctx
		 *      The jQuery context
		 * @param {Object} config
		 *      The configuration
		 */
		init: function ($ctx, config) {
			/**
			 * The configuration.
			 *
			 * @property config
			 * @type Object
			 */
			this.config = $.extend(Tc.Config, config);

			/**
			 * The jQuery context.
			 *
			 * @property $ctx
			 * @type jQuery
			 */
			this.$ctx = $ctx || $('body');

			/**
			 * Contains references to all modules on the page. This can, for
			 * example, be useful when there are interactions between Flash
			 * objects and Javascript.
			 *
			 * @property modules
			 * @type Array
			 */
			this.modules = [];

			/**
			 * Contains references to all connectors on the page.
			 *
			 * @property connectors
			 * @type Object
			 */
			this.connectors = {};

			/**
			 * The sandbox to get the resources from
			 * This sandbox is shared between all modules.
			 *
			 * @property sandbox
			 * @type Sandbox
			 */
			this.sandbox = new Tc.Sandbox(this, this.config);
		},

		/**
		 * Register modules withing scope
		 * Automatically registers all modules within the scope,
		 * as long as the modules use the OOCSS naming conventions.
		 *
		 * @method registerModules
		 * @param {jQuery} $ctx
		 *      The jQuery context
		 * @return {Array}
		 *      A list containing the references of the registered modules
		 */
		registerModules: function ($ctx) {
			var self = this,
				modules = [],
				stringUtils = Tc.Utils.String;

			$ctx = $ctx || this.$ctx;

			$ctx.find('.mod:not([data-ignore="true"])').each(function () {
				var $this = $(this),
					classes = $this.attr('class').split(' ');

				/*
				 * A module can have several different classes and data attributes.
				 * See below for possible values.
				 */

				/*
				 * @config .mod
				 *
				 * Indicates that it is a base module, this is the default and
				 * no JavaScript needs to be involved. It must occur excactly
				 * once.
				 */

				/*
				 * @config .mod{moduleName} || .mod-{module-name}
				 *
				 * Indicates that it is a module of type basic, which is
				 * derived from the base module. It can occur at most
				 * once. Example: .modBasic || .mod-basic
				 */

				/*
				 * @config .skin{moduleName}{skinName} || .skin-{module-name}-{skin-name}
				 *
				 * Indicates that the module basic has the submarine skin. It
				 * will be decorated by the skin JS (if it exists). It can occur
				 * arbitrarily. Example: .skinBasicSubmarine || .skin-basic-submarine
				 */

				/*
				 * @config data-connectors
				 *
				 * A module can have a comma-separated list of data connectors.
				 * The list contains the IDs of the connectors in the following
				 * schema: {connectorType}-{connectorId}
				 *
				 * {connectorType} is optional. If only the {connectorId} is given, the
				 * default connector is instantiated.
				 *
				 * The example MasterSlave-Navigation decodes to: type =
				 * MasterSlave, id = Navigation. This instantiates the MasterSlave
				 * connector (as mediator) with the connector id Navigation.
				 * The connector id is used to chain the appropriate (the ones with the same id)
				 * modules together and to improve the reusability of the connector.
				 * It can contain multiple connector ids (e.g. 1,2,MasterSlave-Navigation).
				 */

				if (classes.length > 1) {
					var modName,
						skins = [],
						connectors = [],
						dataConnectors;

					for (var i = 0, len = classes.length; i < len; i++) {
						var part = $.trim(classes[i]);

						// do nothing for empty parts
						if (part) {
							// convert to camel if necessary
							if (part.indexOf('-') > -1) {
								part = stringUtils.toCamel(part);
							}

							if (part.indexOf('mod') === 0 && part.length > 3) {
								modName = part.substr(3);
							}
							else if (part.indexOf('skin') === 0) {
								// Remove the mod name part from the skin name
								skins.push(part.substr(4).replace(modName, ''));
							}
						}
					}

					/*
					 * This needs to be done via attr() instead of data().
					 * As data() cast a single number-only connector to an integer, the split will fail.
					 */
					dataConnectors = $this.attr('data-connectors');

					if (dataConnectors) {
						connectors = dataConnectors.split(',');
						for (var i = 0, len = connectors.length; i < len; i++) {
							var connector = $.trim(connectors[i]);
							// do nothing for empty connectors
							if (connector) {
								connectors[i] = connector;
							}
						}
					}

					if (modName && Tc.Module[modName]) {
						modules.push(self.registerModule($this, modName, skins, connectors));
					}
				}
			});

			return modules;
		},

		/**
		 * Unregisters the modules given by the module instances.
		 *
		 * @method unregisterModule
		 * @param {Array} modules
		 *      A list containting the module instances to unregister
		 */
		unregisterModules: function (modules) {
			var connectors = this.connectors;

			modules = modules || this.modules;

			if (modules === this.modules) {
				// Clear everything if the arrays are equal
				this.connectors = [];
				this.modules = [];
			}
			else {
				// Unregister the given modules
				for (var i = 0, len = modules.length; i < len; i++) {
					var module = modules[i],
						index;

					// Delete the references in the connectors
					for (var connectorId in connectors) {
						if (connectors.hasOwnProperty(connectorId)) {
							connectors[connectorId].unregisterComponent(module);
						}
					}

					// Delete the module instance itself
					index = $.inArray(module, this.modules);
					if (index > -1) {
						delete this.modules[index];
					}
				}
			}
		},

		/**
		 * Starts (intializes) the registered modules.
		 *
		 * @method start
		 * @param {Array} modules
		 *      A list of the modules to start
		 */
		start: function (modules) {
			modules = modules || this.modules;

			// Start the modules
			for (var i = 0, len = modules.length; i < len; i++) {
				modules[i].start();
			}
		},

		/**
		 * Stops the registered modules.
		 *
		 * @method stop
		 * @param {Array} modules
		 *      A list containting the module instances to stop
		 */
		stop: function (modules) {
			modules = modules || this.modules;

			// Stop the modules
			for (var i = 0, len = modules.length; i < len; i++) {
				modules[i].stop();
			}
		},

		/**
		 * Registers a module.
		 *
		 * @method registerModule
		 * @param {jQuery} $node
		 *      The module node
		 * @param {String} modName
		 *      The module name. It must match the class name of the module
		 * @param {Array} skins
		 *      A list of skin names. Each entry must match a class name of a skin
		 * @param {Array} connectors
		 *      A list of connectors identifiers (e.g. MasterSlave-Navigation)
		 *      Schema: {connectorName}-{connectorId}
		 * @return {Module}
		 *      The reference to the registered module
		 */
		registerModule: function ($node, modName, skins, connectors) {
			var modules = this.modules;

			modName = modName || undefined;
			skins = skins || [];
			connectors = connectors || [];

			if (modName && Tc.Module[modName]) {
				// Generate a unique ID for every module
				var id = modules.length;
				$node.data('id', id);

				// Instantiate module
				modules[id] = new Tc.Module[modName]($node, this.sandbox, id);

				// Decorate it
				for (var i = 0, len = skins.length; i < len; i++) {
					var skinName = skins[i];

					if (Tc.Module[modName][skinName]) {
						modules[id] = modules[id].getDecoratedModule(modName, skinName);
					}
				}

				// Register connections
				for (var i = 0, len = connectors.length; i < len; i++) {
					this.registerConnection(connectors[i], modules[id]);
				}

				return modules[id];
			}

			return null;
		},

		/**
		 * Registers a connection between a module and a connector.
		 *
		 * @method registerConnection
		 * @param {String} connector
		 *      The full connector name (e.g. MasterSlave-Navigation)
		 * @param {Module} component
		 *      The module instance
		 */
		registerConnection: function (connector, component) {
			connector = $.trim(connector);

			var parts = connector.split('-'),
				connectorType,
				connectorId,
				identifier;

			if (parts.length === 1) {
				// default connector
				identifier = connectorId = parts[0];
			}
			else if (parts.length === 2) {
				// a specific connector type is given
				connectorType = parts[0];
				connectorId = parts[1];
				identifier = connectorType + connectorId;
			}

			if (identifier) {
				var connectors = this.connectors;

				if (!connectors[identifier]) {
					// Instantiate the appropriate connector if it does not exist yet
					if (!connectorType) {
						connectors[identifier] = new Tc.Connector(connectorId);
					}
					else if (Tc.Connector[connectorType]) {
						connectors[identifier] = new Tc.Connector[connectorType](connectorId);
					}
				}

				if (connectors[identifier]) {
					/*
					 * The connector observes the component and attaches it as
					 * an observer.
					 */
					component.attachConnector(connectors[identifier]);

					/*
					 * The component wants to be informed over state changes.
					 * It registers it as connector member.
					 */
					connectors[identifier].registerComponent(component);
				}
			}
		},

		/**
		 * Unregisters a module from a connector.
		 *
		 * @method unregisterConnection
		 * @param {String} connectorId
		 *      The connector channel id (e.g. 2)
		 * @param {Module} component
		 *      The module instance
		 */
		unregisterConnection: function (connectorId, component) {
			var connector = this.connectors[connectorId];

			// Delete the references in the connector and the module
			if (connector) {
				connector.unregisterComponent(component);
				component.detachConnector(connector);
			}
		}
	});
})(Tc.$);

(function ($) {
	"use strict";

	/**
	 * The sandbox is used as a central point to get resources from, grant
	 * permissions, etc.  It is shared between all modules.
	 *
	 * @author Remo Brunschwiler
	 * @namespace Tc
	 * @class Sandbox
	 */
	Tc.Sandbox = Class.extend({

		/**
		 * Initializes the Sandbox.
		 *
		 * @method init
		 * @constructor
		 * @param {Applicaton} application
		 *      The application reference
		 * @param {Object} config
		 *      The configuration
		 */
		init: function (application, config) {

			/**
			 * The application
			 *
			 * @property application
			 * @type Application
			 */
			this.application = application;

			/**
			 * The configuration.
			 *
			 * @property config
			 * @type Object
			 */
			this.config = config;

			/**
			 * Contains the 'after' hook module callbacks.
			 *
			 * @property afterCallbacks
			 * @type Array
			 */
			this.afterCallbacks = [];
		},

		/**
		 * Adds (register and start) all modules in the given context scope.
		 *
		 * @method addModules
		 * @param {jQuery} $ctx
		 *      The jQuery context
		 * @return {Array}
		 *      A list containing the references of the registered modules
		 */
		addModules: function ($ctx) {
			var modules = [],
				application = this.application;

			if ($ctx) {
				// Register modules
				modules = application.registerModules($ctx);

				// Start modules
				application.start(modules);
			}

			return modules;
		},

		/**
		 * Removes a module by module instances.
		 * This stops and unregisters a module through a module instance.
		 *
		 * @method removeModules
		 * @param {Array} modules
		 *      A list containting the module instances to remove
		 */
		removeModules: function (modules) {
			var application = this.application;

			if (modules) {
				// Stop modules
				application.stop(modules);

				// Unregister modules
				application.unregisterModules(modules);
			}
		},

		/**
		 * Subscribes a module to a connector.
		 *
		 * @method subscribe
		 * @param {String} connector The full connector name (e.g. MasterSlave-Navigation)
		 * @param {Module} module The module instance
		 */
		subscribe: function (connector, module) {
			var application = this.application;

			if (module instanceof Tc.Module && connector) {
				// explicitly cast connector to string
				connector = connector + '';
				application.registerConnection(connector, module);
			}
		},

		/**
		 * Unsubscribes a module from a connector.
		 *
		 * @method unsubscribe
		 * @param {String} connectorId The connector channel id (e.g. 2 or Navigation)
		 * @param {Module} module The module instance
		 */
		unsubscribe: function (connectorId, module) {
			var application = this.application;

			if (module instanceof Tc.Module && connectorId) {
				// explicitly cast connector id to string
				connectorId = connectorId + '';
				application.unregisterConnection(connectorId, module);
			}
		},

		/**
		 * Gets the appropriate module for the given ID.
		 *
		 * @method getModuleById
		 * @param {int} id
		 *      The module ID
		 * @return {Module}
		 *      The appropriate module
		 */
		getModuleById: function (id) {
			var application = this.application;

			if (application.modules[id] !== undefined) {
				return application.modules[id];
			}
			else {
				throw new Error('the module with the id ' + id +
					' does not exist');
			}
		},

		/**
		 * Gets the application config.
		 *
		 * @method getConfig
		 * @return {Object}
		 *      The configuration object
		 */
		getConfig: function () {
			return this.config;
		},

		/**
		 * Gets an application config param.
		 *
		 * @method getConfigParam
		 * @param {String} name
		 *      The param name
		 * @return {mixed}
		 *      The appropriate configuration param
		 */
		getConfigParam: function (name) {
			var config = this.config;

			if (config[name] !== undefined) {
				return config[name];
			}
			else {
				throw new Error('the config param ' + name + ' does not exist');
			}
		},

		/**
		 * Collects the module status messages and handles the callbacks.
		 * This means that it is ready for the 'after' hook.
		 *
		 * @method ready
		 * @param {Function} callback
		 *      The 'after' hook module callback
		 */
		ready: function (callback) {
			var afterCallbacks = this.afterCallbacks;

			// Add the callback to the stack
			afterCallbacks.push(callback);

			// Check whether all modules are ready for the 'after' hook
			if (this.application.modules.length === afterCallbacks.length) {
				for (var i = 0; i < afterCallbacks.length; i++) {
					var afterCallback = afterCallbacks[i];

					if (typeof afterCallback === "function") {
						// make sure the callback is only executed once (and is not called during addModules)
						delete afterCallbacks[i];
						afterCallback();
					}
				}
			}
		}
	});
})(Tc.$);

(function ($) {
	"use strict";

	/**
	 * Base class for the different modules.
	 *
	 * @author Remo Brunschwiler
	 * @namespace Tc
	 * @class Module
	 */
	Tc.Module = Class.extend({

		/**
		 * Initializes the Module.
		 *
		 * @method init
		 * @constructor
		 * @param {jQuery} $ctx
		 *      The jQuery context
		 * @param {Sandbox} sandbox
		 *      The sandbox to get the resources from
		 * @param {String} id
		 *      The Unique module ID
		 */
		init: function ($ctx, sandbox, id) {
			/**
			 * Contains the module context.
			 *
			 * @property $ctx
			 * @type jQuery
			 */
			this.$ctx = $ctx;

			/**
			 * Contains the unique module ID.
			 *
			 * @property id
			 * @type String
			 */
			this.id = id;

			/**
			 * Contains the attached connectors.
			 *
			 * @property connectors
			 * @type Object
			 */
			this.connectors = {};

			/**
			 * The sandbox to get the resources from.
			 *
			 * @property sandbox
			 * @type Sandbox
			 */
			this.sandbox = sandbox;
		},

		/**
		 * Template method to start (i.e. init) the module.
		 * This method provides hook functions which can be overridden
		 * by the individual instance.
		 *
		 * @method start
		 */
		start: function () {
			var self = this;

			// Call the hook method from the individual instance and provide the appropriate callback
			if (this.on) {
				this.on(function () {
					self.initAfter();
				});
			}
		},

		/**
		 * Template method to stop the module.
		 *
		 * @method stop
		 */
		stop: function () {
			var $ctx = this.$ctx;

			// Remove all bound events and associated jQuery data
			$('*', $ctx).unbind().removeData();
			$ctx.unbind().removeData();
		},


		/**
		 * Initialization callback.
		 *
		 * @method initAfter
		 * @protected
		 */
		initAfter: function () {
			var self = this;

			this.sandbox.ready(function () {
				/*
				 * Call the 'after' hook method from the individual instance
				 */
				if (self.after) {
					self.after();
				}
			});
		},

		/**
		 * Notifies all attached connectors about changes.
		 *
		 * @method fire
		 * @param {String} state The new state
		 * @param {Object} data The data to provide to your connected modules (optional)
		 * @param {Array} channels  A list containting the channel ids to send the event to (optional)
		 * @param {Function} defaultAction The default action to perform (optinal)
		 */
		fire: function (state, data, channels, defaultAction) {
			var self = this,
				connectors = this.connectors,
				shouldBeCalled = true;  // indicates whether the default handler should be called

			// validate params
			if (channels == null && defaultAction == null) {
				// Max. 2 params
				if (typeof data === 'function') {
					// (state, defaultAction)
					defaultAction = data;
					data = undefined;
				}
				else if ($.isArray(data)) {
					// (state, channels)
					channels = data;
					data = undefined;
				}
			}
			else if (defaultAction == null) {
				// 2-3 params
				if (typeof channels === 'function') {
					// (state, data, defaultAction)
					defaultAction = channels;
					channels = undefined;
				}

				if ($.isArray(data)) {
					// (state, channels, defaultAction)
					channels = data;
					data = undefined;
				}
			}

			state = Tc.Utils.String.capitalize(state);
			data = data || {};
			channels = channels || Object.keys(connectors);

			for (var i = 0, len = channels.length; i < len; i++) {
				var connectorId = channels[i];
				if (connectors.hasOwnProperty(connectorId)) {
					var connector = connectors[connectorId],
						proceed = connector.notify(self, 'on' + state, data) || false;

					if (!proceed) {
						shouldBeCalled = false;
					}

				} else {
					throw new Error('the module #' + self.id + ' is not connected to connector ' + connectorId);
				}
			}

			// Execute default action unless a veto is provided
			if (shouldBeCalled) {
				if (typeof defaultAction === 'function') {
					defaultAction();
				}
			}
		},

		/**
		 * Attaches a connector (observer).
		 *
		 * @method attachConnector
		 * @param {Connector} connector
		 *      The connector to attach
		 */
		attachConnector: function (connector) {
			this.connectors[connector.connectorId] = connector;
		},

		/**
		 * Detaches a connector (observer).
		 *
		 * @method detachConnector
		 * @param {Connector} connector The connector to detach
		 */
		detachConnector: function (connector) {
			delete this.connectors[connector.connectorId];
		},

		/**
		 * Decorates itself with the given skin.
		 *
		 * @method getDecoratedModule
		 * @param {String} module The name of the module
		 * @param {String} skin The name of the skin
		 * @return {Module} The decorated module
		 */
		getDecoratedModule: function (module, skin) {
			if (Tc.Module[module][skin]) {
				var Decorator = Tc.Module[module][skin];

				/*
				 * Sets the prototype object to the module.
				 * So the "non-decorated" functions will be called on the module
				 * without implementing the whole module interface.
				 */
				Decorator.prototype = this;
				Decorator.prototype.constructor = Tc.Module[module][skin];

				return new Decorator(this);
			}

			return null;
		}
	});
})(Tc.$);

(function ($) {
	"use strict";

	/**
	 * Base class for the different connectors.
	 *
	 * @author Remo Brunschwiler
	 * @namespace Tc
	 * @class Connector
	 */
	Tc.Connector = Class.extend({

		/**
		 * Initializes the Connector.
		 *
		 * @method init
		 * @constructor
		 * @param {String} connectorId
		 *      The unique connector ID
		 */
		init: function (connectorId) {
			this.connectorId = connectorId;
			this.components = {};
		},

		/**
		 * Registers a component.
		 *
		 * @method registerComponent
		 * @param {Module} component
		 *      The module to register
		 */
		registerComponent: function (component) {
			this.components[component.id] = {
				'component': component
			};
		},

		/**
		 * Unregisters a component.
		 *
		 * @method unregisterComponent
		 * @param {Module} component
		 *      The module to unregister
		 */
		unregisterComponent: function (component) {
			var components = this.components;

			if (components[component.id]) {
				delete components[component.id];
			}
		},

		/**
		 * Notifies all registered components about a state change
		 * This can be be overriden in the specific connectors.
		 *
		 * @method notify
		 * @param {Module} origin
		 *      The module that sends the state change
		 * @param {String} state
		 *      The component's state
		 * @param {Object} data
		 *      Contains the state relevant data (if any)
		 * @return {boolean}
		 *      Indicates whether the default action should be excuted or not
		 */
		notify: function (origin, state, data, callback) {
			/*
			 * Gives the components the ability to prevent the default- and
			 * after action from the events by returning false in the
			 * on {Event}-Handler.
			 */
			var proceed = true,
				components = this.components;

			for (var id in components) {
				if (components.hasOwnProperty(id)) {
					var component = components[id].component;
					if (component !== origin && component[state]) {
						if (component[state](data) === false) {
							proceed = false;
						}
					}
				}
			}

			return proceed;
		}
	});
})(Tc.$);

/*
 * Contains utility functions for several tasks.
 */
Tc.Utils = {};

// Helper
if (!Object.keys) {
	Object.keys = function (obj) {
		var keys = [], k;
		for (k in obj) {
			if (Object.prototype.hasOwnProperty.call(obj, k)) {
				keys.push(k);
			}
		}
		return keys;
	};
}
/**
 * Contains utility functions for string concerning tasks.
 *
 * @author Remo Brunschwiler
 * @namespace Tc
 * @class Utils.String
 * @static
 */
(function ($) {
	"use strict";

	Tc.Utils.String = {
		/**
		 * Capitalizes the first letter of the given string.
		 *
		 * @method capitalize
		 * @param {String} str
		 *      The original string
		 * @return {String}
		 *      The capitalized string
		 */
		capitalize: function (str) {
			// Capitalize the first letter
			return str.substr(0, 1).toUpperCase().concat(str.substr(1));
		},

		/**
		 * Camelizes the given string.
		 *
		 * @method toCamel
		 * @param {String} str
		 *      The original string
		 * @return {String}
		 *      The camelized string
		 */
		toCamel: function (str) {
			return str.replace(/(\-[A-Za-z])/g, function ($1) {
				return $1.toUpperCase().replace('-', '');
			});
		}
	};
})(Tc.$);


/**
 * https://github.com/MarcDiethelm/terrificjs-extensions
 * Adds some sugar and enhancements to @brunschgi's excellent Terrificjs frontend framework.
 * @file terrificjs-extensions.js
 * @license MIT
 * @copyright 2014 Marc Diethelm
 */

(function ($) {

	'use strict';


	/**
	 * Select elements in the module context. Usage: this.$(selector)
	 * @author Marc Diethelm <marc.diethelm@namics.com>
	 * @param {String} selector
	 * @returns {Object} - jQuery collection
	 */
	Tc.Module.prototype.$ = function $$(selector) {
		return this.$ctx.find(selector);
	};


	/**
	 * Deprecated. Use Tc.Module.prototype.$
	 * Select elements in the module context. Usage: this.$$(selector)
	 * @deprecated Use Tc.Module.prototype.$
	 * @see Tc.Module.prototype.$
	 * @author Marc Diethelm <marc.diethelm@namics.com>
	 * @param {String} selector
	 * @returns {Object} - jQuery collection
	 */
	Tc.Module.prototype.$$ = Tc.Module.prototype.$;

	/**
	 * Bind methods to Terrific module context. Usage: this.bindAll(funcName [,funcName...])
	 * Inspired by Underscore's bindAll. http://underscorejs.org/#bindAll
	 * @author Marc Diethelm <marc.diethelm@namics.com>
	 * @author Simon Harte <simon.harte@namics.com>
	 * @param {...String} methods - Names of methods each as a param.
	 * @returns {Module} - Returns the module instance for chaining.
	 */
	Tc.Module.prototype.bindAll = function bindAll(methods) {
		var i = 0,
			args = arguments,
			argLen = args.length,
			methodName
		;

		for (i; i < argLen; i++) {
			methodName = args[i];
			if (typeof this[methodName] === 'function') {
				this[methodName] = $.proxy(this, methodName);
			} else if (typeof methodName === 'string') {
				throw new TypeError('bindAll: Tc.Module.' + this.getName() + '.' + methodName + ' is not a function');
			} else {
				throw new TypeError('Arguments to bindAll must be strings');
			}
		}

		return this;
	};

	/**
	 * Get the name of the Terrific module
	 * @author Remo Brunschwiler <remo.brunschwiler@namics.com>
	 * @author Mathias Hayoz <mathias.hayoz@namics.com>
	 * @returns {String} - Module name
	 */
	Tc.Module.prototype.getName = function getName() {
		var property;
		if (!this._modName) {
			for (property in Tc.Module) {
				if (Tc.Module.hasOwnProperty(property) && property !== 'constructor' && this instanceof Tc.Module[property]) {
					this._modName = property;
					break;
				}
			}
		}

		return this._modName;
	};

	/**
	 * Simplify connector channel subscription. Usage: this.subscribe(channelName [,channelName...])
	 *
	 * Because the second parameter to sandbox.subscribe (this) is often forgotten.
	 * Additionally this method allows connecting to multiple channels at once.
	 * @author Simon Harte <simon.harte@namics.com>
	 * @param {...String} channels - Connector channels to subscribe to
	 * @returns {Module} - Returns the module instance for chaining
	 */
	Tc.Module.prototype.subscribe = function subscribe(channels) {
		var i = 0,
			args = arguments,
			argLen = args.length,
			channelName
		;

		for (i; i < argLen; i++) {
			channelName = args[i];
			this.sandbox.subscribe(channelName, this);
		}

		return this;
	};

	var tplCache = {};
	/**
	 * Micro-templating for modules. Extrapolates {{= foo }} variables in strings from data.
	 * This function is a remix of
	 * - Simple JavaScript Templating – John Resig - http://ejohn.org/ - MIT Licensed
	 * - https://gist.github.com/topliceanu/1537847
	 * - http://weblog.west-wind.com/posts/2008/Oct/13/Client-Templating-with-jQuery
	 * This code incorporates a fix for single-quote usage.
	 * @author Marc Diethelm <marc.diethelm@namics.com>
	 * @param {String} str - Template
	 * @param {Object} [data] - Optional, renders template immediately if present. Data to use as the template context for variable extrapolation.
	 * @returns {Function|String} - Template function, to render template with data, or if data was supplied already the rendered template.
	 */
	Tc.Module.prototype.template = function template(str, data) {

		// Figure out if we're getting a template, or if we need to
		// load the template - and be sure to cache the result.
		var fn = !/\W/.test(str) ?
			tplCache[str] = tplCache[str] ||
				template(document.getElementById(str).innerHTML) :
			// Generate a reusable function that will serve as a template
			// generator (and which will be cached).
			/*jshint -W054, -W014 */
			new Function("obj",
				"var p=[],print=function(){p.push.apply(p,arguments);};" +
				// Introduce the data as local variables using with(){}
				"with(obj){p.push('" +
				// Convert the template into pure JavaScript
				str.replace(/[\r\t\n]/g, " ")
					.replace(/'(?=[^%]*\}\}>)/g, "\t")
					.split("'").join("\\'")
					.split("\t").join("'")
					.replace(/\{\{=(.+?)\}\}/g, "',$1,'")
					.split("{{").join("');")
					.split("}}").join("p.push('")
				+ "');}return p.join('');");
		/*jshint +W054, +W014 */
		// Provide some basic currying to the user
		return data ? fn(data) : fn;
	};

})(Tc.$);

(function ($) {
	$(document).ready(function () {
		var application = new Tc.Application($('html'), {});
		application.registerModules();
		application.start();
	});
})(Tc.$);
var Utils = {
	TcSandbox: null
};

/* Called on click of submit button before validation starts */
function BIT_beforeValidateForm(form) {
	if (typeof BIT_ETRACKER !== "undefined") {
		BIT_ETRACKER.trackFormSubmit($(form));
	}
}

/* Called if validation was successful before form is submitted */
function BIT_beforeSubmitForm(form) {
	localStorage.basket = window.location.href;
	if (typeof BIT_ETRACKER !== "undefined") {
		BIT_ETRACKER.trackFormSuccess($(form));
	}
}

/* Called if validation of form failed */
function BIT_validationFailed(form) {
	if (typeof BIT_ETRACKER !== "undefined") {
		BIT_ETRACKER.trackFormError($(form));
	}
}
(function ($) {

	'use strict';
	/**
	 *
	 * @static
	 * @namespace Tc.Utils
	 * @class Lib
	 */
	Tc.Utils.Lib = {
		/**
		 * Initializes Datepicker
		 *
		 * @method initDatepicker
		 * @param {Object} $ctx   $context in which datepickers should be loaded
		 * @return {void}
		 */
		initDatepicker: function ($ctx) {
			$ctx.find('input[type=date]').each(function (index, element) {
				var $el = $(element);
				var $clone;
				if ($el.is(':not(.has-datepicker, .is-datepicker)')) {
					$clone = $el.clone(false);
					$clone.removeAttr('name id value')
						.data('ref', $el.attr('id'))
						.addClass('is-datepicker')
						.datepicker({
							format: 'dd.mm.yyyy',
							autoclose: true,
							weekStart: 1,
							todayHighlight: true,
							language: $('html').attr('lang') || 'en'
						})
						.on('changeDate', function (ev) {
							var $el = $(ev.currentTarget),
								$ref = $('#' + $el.data('ref')),
								date = Tc.Utils.Lib.convertSwissDatetoDate($el.val()),
								originalValue;
							/*
							 tried to fix CNGIMPL-1979, does not work correctly yet, because it prevents ALL user inputs
							 if(isNaN(date.valueOf())){
							 originalValue = $ref[0].getAttribute('value');
							 $ref.val(originalValue);
							 $el.val(Tc.Utils.Lib.formatSwissDate(Tc.Utils.Lib.convertISOtoDate(originalValue)));
							 }else{
							 $ref.val(Tc.Utils.Lib.formatISODate(ev.date));
							 }
							 */
							$ref.val(Tc.Utils.Lib.formatISODate(ev.date));
						})
						.datepicker('setDate', Tc.Utils.Lib.convertISOtoDate($el.val()));
					$el.addClass('has-datepicker')
						.hide()
						.after($clone);
				}
			});
		},

		formatISODate: function (date) {
			return date.getFullYear() + '-' + Tc.Utils.Lib.formatTwoDigit(date.getMonth() + 1) + '-' + Tc.Utils.Lib.formatTwoDigit(date.getDate());
		},

		formatSwissDate: function (date) {
			return Tc.Utils.Lib.formatTwoDigit(date.getDate()) + '.' + Tc.Utils.Lib.formatTwoDigit(date.getMonth() + 1) + '.' + date.getFullYear();
		},

		convertISOtoDate: function (iso) {
			var arr = iso.split('-');
			return new Date(arr[0], arr[1] - 1, arr[2]);
		},

		convertSwissDatetoDate: function (swissDate) {
			var arr = swissDate.split('.');
			return new Date(arr[2], arr[1] - 1, arr[0]);
		},

		formatTwoDigit: function (num) {
			return num < 10 ? '0' + num : num;
		},

		/* ******** */
		/* Glossary */
		/* ******** */
		initGlossary: function ($ctx) {
			var dataUrl = $('body').data('glossary');
			if (dataUrl) {
				if ($ctx === undefined) {
					$ctx = $('.js-glossary-context').find('.mod-text p, .mod-teaser p, .mod-textimage p, .mod-table p');
				}
				$.getJSON(dataUrl, function (data) {
					Tc.Utils.Lib.parseGlossaryJson(data, $ctx)
				});
			}

		},
		parseGlossaryJson: function (data, $ctx) {
			Tc.Utils.Lib.glossaryData = data;
			$ctx.each(Tc.Utils.Lib.replaceGlossaryItems);
		},
		replaceGlossaryItems: function (index, element) {
			var $element = $(element)
				, entry
				, textnodes = Tc.Utils.Lib.getTextNodesIn($element[0], false, ['abbr'])
				, curNode
				, curHtml
				, parentNode
				, resultNodes
			;

			for (var k = 0; k < textnodes.length; k++) {
				curNode = textnodes[k];
				curHtml = textnodes[k].textContent;
				parentNode = curNode.parentNode;

				for (var i = 0; i < Tc.Utils.Lib.glossaryData.length; i++) {
					entry = Tc.Utils.Lib.glossaryData[i];
					curHtml = curHtml.replace(new RegExp('\\b(' + entry.title.trim() + ')\\b', 'ig'), '<abbr title=\"' + entry.definition.trim() + '\">$1</abbr>');
				}
				resultNodes = $('<span>' + curHtml + '</span>').contents(); //need to place this in some kind of element in order to have valid nodes
				for (var m = 0; m < resultNodes.length; m++) {
					parentNode.insertBefore(resultNodes[m], curNode);
				}
				parentNode.removeChild(curNode);
			}
		},
		/**
		 * Function to find all textnodes in given html-element, optionaly excluding given nodenames
		 *
		 * @method _getTextNodesIn
		 * @param {Object} node                     plain HTML-Object
		 * @param {Boolean} includeWhitespaceNodes  flag if whitespace nodes should be includes
		 * @param {Array} excludeNodes              Array of lowercase node names to exclude
		 * @return {Array} textnodes
		 */
		getTextNodesIn: function (node, includeWhitespaceNodes, excludeNodes) {
			var textNodes = [], nonWhitespaceMatcher = /\S/;
			if (excludeNodes === undefined) excludeNodes = [];

			function getTextNodes(node, excludeNodes) {
				if (node.nodeType == 3) {
					if (includeWhitespaceNodes || nonWhitespaceMatcher.test(node.nodeValue)) {
						textNodes.push(node);
					}
				} else {
					//only move on if tag is not listed in excludeNodes
					if (excludeNodes.indexOf(node.nodeName.toLocaleLowerCase()) === -1) {
						for (var i = 0, len = node.childNodes.length; i < len; ++i) {
							getTextNodes(node.childNodes[i], excludeNodes);
						}
					}
				}
			}

			getTextNodes(node, excludeNodes);
			return textNodes;
		},


		/* ********** */
		/* Validation */
		/* ********** */
		/**
		 * Initialises jQuery Validation Plugin with several custom validation methods.
		 * * .js-usepattern will trigger evaluation of pattern-attribute (class is set automatically if pattern-attribute is present)
		 * * .js-validgroup will check if all group members .js-group-element (wrapped in .js-group with data-group="NAME") are valid
		 *
		 * @method initValidation
		 * @param {Object}  jQuery-Object of form
		 * @return {Object} validator
		 */
		initValidation: function ($form) {
			$.validator.addMethod('required', function (value, element) {
				if (value === false) {
					value = '';
				}
				var valid = value.length > 0;
				if (valid) {
					$(element).closest('.form-group').removeClass('has-warning');
				} else {
					$(element).closest('.form-group').addClass('has-warning');
				}
				return valid;
			}, 'field is required');

			$.validator.addMethod('js-usepattern', function (value, element) {
				if (value === false) {
					value = '';
				}
				var valid = (value.search(new RegExp($(element).attr('pattern'), $(element).data('pattern-modifier') || 'i')) !== -1);
				if (valid) {
					$(element).closest('.form-group').removeClass('has-warning');
				} else {
					$(element).closest('.form-group').addClass('has-warning');
				}
				return valid;
			}, 'pattern not valid');

			$.validator.addMethod('js-validgroup', function (value, element) {
				var valid = true,
					filled = 0,
					$elements = $(element).closest('.js-group').find('.js-group-element');
				$elements.each(function () {
					var $curEl = $(this),
						pattern = $curEl.attr('pattern'),
						val = $curEl.val();
					if (val.length > 0) {
						filled += 1;
					}
					if (pattern) {
						if (val.search(new RegExp(pattern)) === -1) {
							valid = false;
							return false;
						}
					}
				});
				if (valid) {
					$elements.removeClass('error');
				}
				if (valid && filled > 0 && filled !== $elements.length) {
					valid = false;
				}
				return valid;
			}, 'group invalid');

			/* groups */
			var config = {groups: {}};
			$form.find('.js-group').each(function () {
				var $curEl = $(this);
				$curEl.find('.js-group-element').each(function () {
					config.groups[$curEl.data('group')] += ' ' + $(this).attr('name');
				});
			});

			$form.find('input[pattern]').each(function () {
				$(this).addClass('js-usepattern');
			});

			return $form.validate($.extend(true, config, {
				ignore: ":hidden, .js-disable-validation",
				errorElement: 'span',
				errorClass: 'error',
				onfocusout: false,
				errorPlacement: function ($error, $element) {
					$error.addClass('help-block');
					$element.parent().append($error);
				},
				showErrors: function (map, list) {
					var i;
					for (i = 0; i < list.length; i += 1) {
						list[i].message = $(list[i].element).data('validationtext') || list[i].message;
					}
					this.defaultShowErrors(list);
				},
				rules: {},
				groups: {}
			}));
		},

		getFileSize: function (uploadField) {
			var _this = this,
				$field = $(uploadField);

			if ($field.attr('type') != "file") {
				return -1;
			}


			if (uploadField.files) { // file api available
				if (uploadField.files.length > 0) { // file selected
					return uploadField.files[0].size;
				}
				else {
					return 0;
				}
			}
			else {
				return -1;
			}
		},

		validateUploadField: function (uploadField, maxSizeAll, maxSizeSingle, message) {
			var _this = this,
				$field = $(uploadField),
				$form = $field.parents('form'),
				formId = $form.attr('id'),
				$allUploads = $form.find("input[type='file']"),
				myFileSize,
				totalFileSize = 0;

			if ($field.attr('type') != "file") {
				return true;
			}

			myFileSize = _this.getFileSize(uploadField);
			$allUploads.each(function (index, element) {
				totalFileSize += _this.getFileSize(element);
			});

			if (myFileSize > maxSizeSingle || totalFileSize > maxSizeAll) {
				cq5forms_showMsg(formId, $field.attr('name'), message);
				return false;
			}

			return true;

		},

		/**
		 * see https://www.creativejuiz.fr/blog/en/javascript-en/read-url-get-parameters-with-javascript
		 * @param paramName the param to read from the url
		 */
		getUrlParameter: function (paramName) {
			var vars = {};
			window.location.href.replace(location.hash, '').replace(
				/[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
				function (m, key, value) { // callback
					vars[key] = value !== undefined ? value : '';
				}
			);

			if (paramName) {
				return vars[paramName] ? vars[paramName] : null;
			}
			return vars;
		}


	};
})(Tc.$);

(function ($) {

	'use strict';
	/**
	 *
	 * @static
	 * @namespace Tc.Utils
	 * @class EqualHeight
	 */
	Tc.Utils.EqualHeight = {
		$equals: $(),
		/* public methods */
		addElements: function ($elements) {
			Tc.Utils.EqualHeight.$equals = Tc.Utils.EqualHeight.$equals.add($elements);
		},

		set: function () {
			Tc.Utils.EqualHeight.$equals
			/*.filter(':not([data-equalheight-exclude*='+Tc.Utils.Responsive.getCurrentBPName()+'])')*/
				.each(Tc.Utils.EqualHeight.setHeights);
		},

		reset: function () {
			Tc.Utils.EqualHeight.$equals
			/*.filter('[data-equalheight-exclude*='+Tc.Utils.Responsive.getCurrentBPName()+']')*/
				.each(Tc.Utils.EqualHeight.resetHeights);
		},
		/* internal methods, only used by this utils */
		getMaxHeight: function ($items) {
			var i = 0,
				max = 0,
				currHeight;
			for (i; i < $items.length; i += 1) {
				currHeight = $items.eq(i).height();
				max = currHeight > max ? currHeight : max;
			}
			return max;
		},

		setHeights: function (index, item) {
			var $item = $(item),
				elements = Tc.Utils.EqualHeight.getEqualHeightElements($item),
				i,
				$curEl;
			$item.removeClass('equalheight-ready');
			for (i = 0; i < elements.length; i += 1) {
				$curEl = elements[i];
				$curEl.height('');
				$curEl.height(Tc.Utils.EqualHeight.getMaxHeight($curEl));
			}
			$item.addClass('equalheight-ready');
		},

		resetHeights: function (index, item) {
			var $item = $(item),
				elements = Tc.Utils.EqualHeight.getEqualHeightElements($item),
				i,
				$curEl;
			$item.removeClass('equalheight-ready');
			for (i = 0; i < elements.length; i += 1) {
				$curEl = elements[i];
				$curEl.height('');
			}
		},

		getElementsPerLine: function ($container) {
			var $childs = $container.children(),
				lines = [],
				$el,
				curOffset,
				curLineIndex = 0;
			$childs.each(function (i, el) {
				$el = $(el);
				if (i === 0) {
					lines[curLineIndex] = $();
					curOffset = $el.offset().top;
				} else if ($el.offset().top !== curOffset) {
					curLineIndex += 1;
					lines[curLineIndex] = $();
					curOffset = $el.offset().top;
				}
				lines[curLineIndex] = lines[curLineIndex].add($el);
			});
			return lines;
		},

		getEqualHeightElements: function ($container) {
			var group = $container.data('equalheight-group'),
				$elements;
			if (group) {
				$elements = $container.find('.js-equalheight-element[data-equalheight-group=' + group + ']');
			} else if ($container.is('[data-equal-height-elements="true"]')) {
				$elements = $container.find('.js-equalheight-element');
			} else if ($container.is('[data-equal-height-selector]')) {
				$elements = $container.find($container.data('equal-height-selector'));
			} else {
				$elements = $container.children();
			}

			if ($container.data('equalheight-line')) {
				return this.getElementsPerLine($elements);
			}

			return [$elements];
		}
	};
})(Tc.$);

(function ($) {
	'use strict';
	/**
	 *
	 * @static
	 * @namespace Tc.Utils
	 * @class Extensions
	 */
	Tc.Utils.Extensions = {
		isMobileDevice: function () {
			if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
				return true;
			}
			return false;
		}
	};
})(Tc.$);

/*!
 * jQuery Validation Plugin v1.13.1
 *
 * http://jqueryvalidation.org/
 *
 * Copyright (c) 2014 Jörn Zaefferer
 * Released under the MIT license
 */
(function (factory) {
	if (typeof define === "function" && define.amd) {
		define(["jquery"], factory);
	} else {
		factory(jQuery);
	}
}(function ($) {

	$.extend($.fn, {
		// http://jqueryvalidation.org/validate/
		validate: function (options) {

			// if nothing is selected, return nothing; can't chain anyway
			if (!this.length) {
				if (options && options.debug && window.console) {
					console.warn("Nothing selected, can't validate, returning nothing.");
				}
				return;
			}

			// check if a validator for this form was already created
			var validator = $.data(this[0], "validator");
			if (validator) {
				return validator;
			}

			// Add novalidate tag if HTML5.
			this.attr("novalidate", "novalidate");

			validator = new $.validator(options, this[0]);
			$.data(this[0], "validator", validator);

			if (validator.settings.onsubmit) {

				this.validateDelegate(":submit", "click", function (event) {
					if (validator.settings.submitHandler) {
						validator.submitButton = event.target;
					}
					// allow suppressing validation by adding a cancel class to the submit button
					if ($(event.target).hasClass("cancel")) {
						validator.cancelSubmit = true;
					}

					// allow suppressing validation by adding the html5 formnovalidate attribute to the submit button
					if ($(event.target).attr("formnovalidate") !== undefined) {
						validator.cancelSubmit = true;
					}
				});

				// validate the form on submit
				this.submit(function (event) {
					if (validator.settings.debug) {
						// prevent form submit to be able to see console output
						event.preventDefault();
					}
					function handle() {
						var hidden, result;
						if (validator.settings.submitHandler) {
							if (validator.submitButton) {
								// insert a hidden input as a replacement for the missing submit button
								hidden = $("<input type='hidden'/>")
									.attr("name", validator.submitButton.name)
									.val($(validator.submitButton).val())
									.appendTo(validator.currentForm);
							}
							result = validator.settings.submitHandler.call(validator, validator.currentForm, event);
							if (validator.submitButton) {
								// and clean up afterwards; thanks to no-block-scope, hidden can be referenced
								hidden.remove();
							}
							if (result !== undefined) {
								return result;
							}
							return false;
						}
						return true;
					}

					// prevent submit for invalid forms or custom submit handlers
					if (validator.cancelSubmit) {
						validator.cancelSubmit = false;
						return handle();
					}
					if (validator.form()) {
						if (validator.pendingRequest) {
							validator.formSubmitted = true;
							return false;
						}
						return handle();
					} else {
						validator.focusInvalid();
						return false;
					}
				});
			}

			return validator;
		},
		// http://jqueryvalidation.org/valid/
		valid: function () {
			var valid, validator;

			if ($(this[0]).is("form")) {
				valid = this.validate().form();
			} else {
				valid = true;
				validator = $(this[0].form).validate();
				this.each(function () {
					valid = validator.element(this) && valid;
				});
			}
			return valid;
		},
		// attributes: space separated list of attributes to retrieve and remove
		removeAttrs: function (attributes) {
			var result = {},
				$element = this;
			$.each(attributes.split(/\s/), function (index, value) {
				result[value] = $element.attr(value);
				$element.removeAttr(value);
			});
			return result;
		},
		// http://jqueryvalidation.org/rules/
		rules: function (command, argument) {
			var element = this[0],
				settings, staticRules, existingRules, data, param, filtered;

			if (command) {
				settings = $.data(element.form, "validator").settings;
				staticRules = settings.rules;
				existingRules = $.validator.staticRules(element);
				switch (command) {
					case "add":
						$.extend(existingRules, $.validator.normalizeRule(argument));
						// remove messages from rules, but allow them to be set separately
						delete existingRules.messages;
						staticRules[element.name] = existingRules;
						if (argument.messages) {
							settings.messages[element.name] = $.extend(settings.messages[element.name], argument.messages);
						}
						break;
					case "remove":
						if (!argument) {
							delete staticRules[element.name];
							return existingRules;
						}
						filtered = {};
						$.each(argument.split(/\s/), function (index, method) {
							filtered[method] = existingRules[method];
							delete existingRules[method];
							if (method === "required") {
								$(element).removeAttr("aria-required");
							}
						});
						return filtered;
				}
			}

			data = $.validator.normalizeRules(
				$.extend(
					{},
					$.validator.classRules(element),
					$.validator.attributeRules(element),
					$.validator.dataRules(element),
					$.validator.staticRules(element)
				), element);

			// make sure required is at front
			if (data.required) {
				param = data.required;
				delete data.required;
				data = $.extend({required: param}, data);
				$(element).attr("aria-required", "true");
			}

			// make sure remote is at back
			if (data.remote) {
				param = data.remote;
				delete data.remote;
				data = $.extend(data, {remote: param});
			}

			return data;
		}
	});

// Custom selectors
	$.extend($.expr[":"], {
		// http://jqueryvalidation.org/blank-selector/
		blank: function (a) {
			return !$.trim("" + $(a).val());
		},
		// http://jqueryvalidation.org/filled-selector/
		filled: function (a) {
			return !!$.trim("" + $(a).val());
		},
		// http://jqueryvalidation.org/unchecked-selector/
		unchecked: function (a) {
			return !$(a).prop("checked");
		}
	});

// constructor for validator
	$.validator = function (options, form) {
		this.settings = $.extend(true, {}, $.validator.defaults, options);
		this.currentForm = form;
		this.init();
	};

// http://jqueryvalidation.org/jQuery.validator.format/
	$.validator.format = function (source, params) {
		if (arguments.length === 1) {
			return function () {
				var args = $.makeArray(arguments);
				args.unshift(source);
				return $.validator.format.apply(this, args);
			};
		}
		if (arguments.length > 2 && params.constructor !== Array) {
			params = $.makeArray(arguments).slice(1);
		}
		if (params.constructor !== Array) {
			params = [params];
		}
		$.each(params, function (i, n) {
			source = source.replace(new RegExp("\\{" + i + "\\}", "g"), function () {
				return n;
			});
		});
		return source;
	};

	$.extend($.validator, {

		defaults: {
			messages: {},
			groups: {},
			rules: {},
			errorClass: "error",
			validClass: "valid",
			errorElement: "label",
			focusCleanup: false,
			focusInvalid: true,
			errorContainer: $([]),
			errorLabelContainer: $([]),
			onsubmit: true,
			ignore: ":hidden",
			ignoreTitle: false,
			onfocusin: function (element) {
				this.lastActive = element;

				// Hide error label and remove error class on focus if enabled
				if (this.settings.focusCleanup) {
					if (this.settings.unhighlight) {
						this.settings.unhighlight.call(this, element, this.settings.errorClass, this.settings.validClass);
					}
					this.hideThese(this.errorsFor(element));
				}
			},
			onfocusout: function (element) {
				if (!this.checkable(element) && ( element.name in this.submitted || !this.optional(element) )) {
					this.element(element);
				}
			},
			onkeyup: function (element, event) {
				if (event.which === 9 && this.elementValue(element) === "") {
					return;
				} else if (element.name in this.submitted || element === this.lastElement) {
					this.element(element);
				}
			},
			onclick: function (element) {
				// click on selects, radiobuttons and checkboxes
				if (element.name in this.submitted) {
					this.element(element);

					// or option elements, check parent select in that case
				} else if (element.parentNode.name in this.submitted) {
					this.element(element.parentNode);
				}
			},
			highlight: function (element, errorClass, validClass) {
				if (element.type === "radio") {
					this.findByName(element.name).addClass(errorClass).removeClass(validClass);
				} else {
					$(element).addClass(errorClass).removeClass(validClass);
				}
			},
			unhighlight: function (element, errorClass, validClass) {
				if (element.type === "radio") {
					this.findByName(element.name).removeClass(errorClass).addClass(validClass);
				} else {
					$(element).removeClass(errorClass).addClass(validClass);
				}
			}
		},

		// http://jqueryvalidation.org/jQuery.validator.setDefaults/
		setDefaults: function (settings) {
			$.extend($.validator.defaults, settings);
		},

		messages: {
			required: "This field is required.",
			remote: "Please fix this field.",
			email: "Please enter a valid email address.",
			url: "Please enter a valid URL.",
			date: "Please enter a valid date.",
			dateISO: "Please enter a valid date ( ISO ).",
			number: "Please enter a valid number.",
			digits: "Please enter only digits.",
			creditcard: "Please enter a valid credit card number.",
			equalTo: "Please enter the same value again.",
			maxlength: $.validator.format("Please enter no more than {0} characters."),
			minlength: $.validator.format("Please enter at least {0} characters."),
			rangelength: $.validator.format("Please enter a value between {0} and {1} characters long."),
			range: $.validator.format("Please enter a value between {0} and {1}."),
			max: $.validator.format("Please enter a value less than or equal to {0}."),
			min: $.validator.format("Please enter a value greater than or equal to {0}.")
		},

		autoCreateRanges: false,

		prototype: {

			init: function () {
				this.labelContainer = $(this.settings.errorLabelContainer);
				this.errorContext = this.labelContainer.length && this.labelContainer || $(this.currentForm);
				this.containers = $(this.settings.errorContainer).add(this.settings.errorLabelContainer);
				this.submitted = {};
				this.valueCache = {};
				this.pendingRequest = 0;
				this.pending = {};
				this.invalid = {};
				this.reset();

				var groups = ( this.groups = {} ),
					rules;
				$.each(this.settings.groups, function (key, value) {
					if (typeof value === "string") {
						value = value.split(/\s/);
					}
					$.each(value, function (index, name) {
						groups[name] = key;
					});
				});
				rules = this.settings.rules;
				$.each(rules, function (key, value) {
					rules[key] = $.validator.normalizeRule(value);
				});

				function delegate(event) {
					var validator = $.data(this[0].form, "validator"),
						eventType = "on" + event.type.replace(/^validate/, ""),
						settings = validator.settings;
					if (settings[eventType] && !this.is(settings.ignore)) {
						settings[eventType].call(validator, this[0], event);
					}
				}

				$(this.currentForm)
					.validateDelegate(":text, [type='password'], [type='file'], select, textarea, " +
						"[type='number'], [type='search'] ,[type='tel'], [type='url'], " +
						"[type='email'], [type='datetime'], [type='date'], [type='month'], " +
						"[type='week'], [type='time'], [type='datetime-local'], " +
						"[type='range'], [type='color'], [type='radio'], [type='checkbox']",
						"focusin focusout keyup", delegate)
					// Support: Chrome, oldIE
					// "select" is provided as event.target when clicking a option
					.validateDelegate("select, option, [type='radio'], [type='checkbox']", "click", delegate);

				if (this.settings.invalidHandler) {
					$(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler);
				}

				// Add aria-required to any Static/Data/Class required fields before first validation
				// Screen readers require this attribute to be present before the initial submission http://www.w3.org/TR/WCAG-TECHS/ARIA2.html
				$(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true");
			},

			// http://jqueryvalidation.org/Validator.form/
			form: function () {
				this.checkForm();
				$.extend(this.submitted, this.errorMap);
				this.invalid = $.extend({}, this.errorMap);
				if (!this.valid()) {
					$(this.currentForm).triggerHandler("invalid-form", [this]);
				}
				this.showErrors();
				return this.valid();
			},

			checkForm: function () {
				this.prepareForm();
				for (var i = 0, elements = ( this.currentElements = this.elements() ); elements[i]; i++) {
					this.check(elements[i]);
				}
				return this.valid();
			},

			// http://jqueryvalidation.org/Validator.element/
			element: function (element) {
				var cleanElement = this.clean(element),
					checkElement = this.validationTargetFor(cleanElement),
					result = true;

				this.lastElement = checkElement;

				if (checkElement === undefined) {
					delete this.invalid[cleanElement.name];
				} else {
					this.prepareElement(checkElement);
					this.currentElements = $(checkElement);

					result = this.check(checkElement) !== false;
					if (result) {
						delete this.invalid[checkElement.name];
					} else {
						this.invalid[checkElement.name] = true;
					}
				}
				// Add aria-invalid status for screen readers
				$(element).attr("aria-invalid", !result);

				if (!this.numberOfInvalids()) {
					// Hide error containers on last error
					this.toHide = this.toHide.add(this.containers);
				}
				this.showErrors();
				return result;
			},

			// http://jqueryvalidation.org/Validator.showErrors/
			showErrors: function (errors) {
				if (errors) {
					// add items to error list and map
					$.extend(this.errorMap, errors);
					this.errorList = [];
					for (var name in errors) {
						this.errorList.push({
							message: errors[name],
							element: this.findByName(name)[0]
						});
					}
					// remove items from success list
					this.successList = $.grep(this.successList, function (element) {
						return !( element.name in errors );
					});
				}
				if (this.settings.showErrors) {
					this.settings.showErrors.call(this, this.errorMap, this.errorList);
				} else {
					this.defaultShowErrors();
				}
			},

			// http://jqueryvalidation.org/Validator.resetForm/
			resetForm: function () {
				if ($.fn.resetForm) {
					$(this.currentForm).resetForm();
				}
				this.submitted = {};
				this.lastElement = null;
				this.prepareForm();
				this.hideErrors();
				this.elements()
					.removeClass(this.settings.errorClass)
					.removeData("previousValue")
					.removeAttr("aria-invalid");
			},

			numberOfInvalids: function () {
				return this.objectLength(this.invalid);
			},

			objectLength: function (obj) {
				/* jshint unused: false */
				var count = 0,
					i;
				for (i in obj) {
					count++;
				}
				return count;
			},

			hideErrors: function () {
				this.hideThese(this.toHide);
			},

			hideThese: function (errors) {
				errors.not(this.containers).text("");
				this.addWrapper(errors).hide();
			},

			valid: function () {
				return this.size() === 0;
			},

			size: function () {
				return this.errorList.length;
			},

			focusInvalid: function () {
				if (this.settings.focusInvalid) {
					try {
						$(this.findLastActive() || this.errorList.length && this.errorList[0].element || [])
							.filter(":visible")
							.focus()
							// manually trigger focusin event; without it, focusin handler isn't called, findLastActive won't have anything to find
							.trigger("focusin");
					} catch (e) {
						// ignore IE throwing errors when focusing hidden elements
					}
				}
			},

			findLastActive: function () {
				var lastActive = this.lastActive;
				return lastActive && $.grep(this.errorList, function (n) {
						return n.element.name === lastActive.name;
					}).length === 1 && lastActive;
			},

			elements: function () {
				var validator = this,
					rulesCache = {};

				// select all valid inputs inside the form (no submit or reset buttons)
				return $(this.currentForm)
					.find("input, select, textarea")
					.not(":submit, :reset, :image, [disabled], [readonly]")
					.not(this.settings.ignore)
					.filter(function () {
						if (!this.name && validator.settings.debug && window.console) {
							console.error("%o has no name assigned", this);
						}

						// select only the first element for each name, and only those with rules specified
						if (this.name in rulesCache || !validator.objectLength($(this).rules())) {
							return false;
						}

						rulesCache[this.name] = true;
						return true;
					});
			},

			clean: function (selector) {
				return $(selector)[0];
			},

			errors: function () {
				var errorClass = this.settings.errorClass.split(" ").join(".");
				return $(this.settings.errorElement + "." + errorClass, this.errorContext);
			},

			reset: function () {
				this.successList = [];
				this.errorList = [];
				this.errorMap = {};
				this.toShow = $([]);
				this.toHide = $([]);
				this.currentElements = $([]);
			},

			prepareForm: function () {
				this.reset();
				this.toHide = this.errors().add(this.containers);
			},

			prepareElement: function (element) {
				this.reset();
				this.toHide = this.errorsFor(element);
			},

			elementValue: function (element) {
				var val,
					$element = $(element),
					type = element.type;

				if (type === "radio" || type === "checkbox") {
					return $("input[name='" + element.name + "']:checked").val();
				} else if (type === "number" && typeof element.validity !== "undefined") {
					return element.validity.badInput ? false : $element.val();
				}

				val = $element.val();
				if (typeof val === "string") {
					return val.replace(/\r/g, "");
				}
				return val;
			},

			check: function (element) {
				element = this.validationTargetFor(this.clean(element));

				var rules = $(element).rules(),
					rulesCount = $.map(rules, function (n, i) {
						return i;
					}).length,
					dependencyMismatch = false,
					val = this.elementValue(element),
					result, method, rule;

				for (method in rules) {
					rule = {method: method, parameters: rules[method]};
					try {

						result = $.validator.methods[method].call(this, val, element, rule.parameters);

						// if a method indicates that the field is optional and therefore valid,
						// don't mark it as valid when there are no other rules
						if (result === "dependency-mismatch" && rulesCount === 1) {
							dependencyMismatch = true;
							continue;
						}
						dependencyMismatch = false;

						if (result === "pending") {
							this.toHide = this.toHide.not(this.errorsFor(element));
							return;
						}

						if (!result) {
							this.formatAndAdd(element, rule);
							return false;
						}
					} catch (e) {
						if (this.settings.debug && window.console) {
							console.log("Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.", e);
						}
						throw e;
					}
				}
				if (dependencyMismatch) {
					return;
				}
				if (this.objectLength(rules)) {
					this.successList.push(element);
				}
				return true;
			},

			// return the custom message for the given element and validation method
			// specified in the element's HTML5 data attribute
			// return the generic message if present and no method specific message is present
			customDataMessage: function (element, method) {
				return $(element).data("msg" + method.charAt(0).toUpperCase() +
						method.substring(1).toLowerCase()) || $(element).data("msg");
			},

			// return the custom message for the given element name and validation method
			customMessage: function (name, method) {
				var m = this.settings.messages[name];
				return m && ( m.constructor === String ? m : m[method]);
			},

			// return the first defined argument, allowing empty strings
			findDefined: function () {
				for (var i = 0; i < arguments.length; i++) {
					if (arguments[i] !== undefined) {
						return arguments[i];
					}
				}
				return undefined;
			},

			defaultMessage: function (element, method) {
				return this.findDefined(
					this.customMessage(element.name, method),
					this.customDataMessage(element, method),
					// title is never undefined, so handle empty string as undefined
					!this.settings.ignoreTitle && element.title || undefined,
					$.validator.messages[method],
					"<strong>Warning: No message defined for " + element.name + "</strong>"
				);
			},

			formatAndAdd: function (element, rule) {
				var message = this.defaultMessage(element, rule.method),
					theregex = /\$?\{(\d+)\}/g;
				if (typeof message === "function") {
					message = message.call(this, rule.parameters, element);
				} else if (theregex.test(message)) {
					message = $.validator.format(message.replace(theregex, "{$1}"), rule.parameters);
				}
				this.errorList.push({
					message: message,
					element: element,
					method: rule.method
				});

				this.errorMap[element.name] = message;
				this.submitted[element.name] = message;
			},

			addWrapper: function (toToggle) {
				if (this.settings.wrapper) {
					toToggle = toToggle.add(toToggle.parent(this.settings.wrapper));
				}
				return toToggle;
			},

			defaultShowErrors: function () {
				var i, elements, error;
				for (i = 0; this.errorList[i]; i++) {
					error = this.errorList[i];
					if (this.settings.highlight) {
						this.settings.highlight.call(this, error.element, this.settings.errorClass, this.settings.validClass);
					}
					this.showLabel(error.element, error.message);
				}
				if (this.errorList.length) {
					this.toShow = this.toShow.add(this.containers);
				}
				if (this.settings.success) {
					for (i = 0; this.successList[i]; i++) {
						this.showLabel(this.successList[i]);
					}
				}
				if (this.settings.unhighlight) {
					for (i = 0, elements = this.validElements(); elements[i]; i++) {
						this.settings.unhighlight.call(this, elements[i], this.settings.errorClass, this.settings.validClass);
					}
				}
				this.toHide = this.toHide.not(this.toShow);
				this.hideErrors();
				this.addWrapper(this.toShow).show();
			},

			validElements: function () {
				return this.currentElements.not(this.invalidElements());
			},

			invalidElements: function () {
				return $(this.errorList).map(function () {
					return this.element;
				});
			},

			showLabel: function (element, message) {
				var place, group, errorID,
					error = this.errorsFor(element),
					elementID = this.idOrName(element),
					describedBy = $(element).attr("aria-describedby");
				if (error.length) {
					// refresh error/success class
					error.removeClass(this.settings.validClass).addClass(this.settings.errorClass);
					// replace message on existing label
					error.html(message);
				} else {
					// create error element
					error = $("<" + this.settings.errorElement + ">")
						.attr("id", elementID + "-error")
						.addClass(this.settings.errorClass)
						.html(message || "");

					// Maintain reference to the element to be placed into the DOM
					place = error;
					if (this.settings.wrapper) {
						// make sure the element is visible, even in IE
						// actually showing the wrapped element is handled elsewhere
						place = error.hide().show().wrap("<" + this.settings.wrapper + "/>").parent();
					}
					if (this.labelContainer.length) {
						this.labelContainer.append(place);
					} else if (this.settings.errorPlacement) {
						this.settings.errorPlacement(place, $(element));
					} else {
						place.insertAfter(element);
					}

					// Link error back to the element
					if (error.is("label")) {
						// If the error is a label, then associate using 'for'
						error.attr("for", elementID);
					} else if (error.parents("label[for='" + elementID + "']").length === 0) {
						// If the element is not a child of an associated label, then it's necessary
						// to explicitly apply aria-describedby

						errorID = error.attr("id").replace(/(:|\.|\[|\])/g, "\\$1");
						// Respect existing non-error aria-describedby
						if (!describedBy) {
							describedBy = errorID;
						} else if (!describedBy.match(new RegExp("\\b" + errorID + "\\b"))) {
							// Add to end of list if not already present
							describedBy += " " + errorID;
						}
						$(element).attr("aria-describedby", describedBy);

						// If this element is grouped, then assign to all elements in the same group
						group = this.groups[element.name];
						if (group) {
							$.each(this.groups, function (name, testgroup) {
								if (testgroup === group) {
									$("[name='" + name + "']", this.currentForm)
										.attr("aria-describedby", error.attr("id"));
								}
							});
						}
					}
				}
				if (!message && this.settings.success) {
					error.text("");
					if (typeof this.settings.success === "string") {
						error.addClass(this.settings.success);
					} else {
						this.settings.success(error, element);
					}
				}
				this.toShow = this.toShow.add(error);
			},

			errorsFor: function (element) {
				var name = this.idOrName(element),
					describer = $(element).attr("aria-describedby"),
					selector = "label[for='" + name + "'], label[for='" + name + "'] *";

				// aria-describedby should directly reference the error element
				if (describer) {
					selector = selector + ", #" + describer.replace(/\s+/g, ", #");
				}
				return this
					.errors()
					.filter(selector);
			},

			idOrName: function (element) {
				return this.groups[element.name] || ( this.checkable(element) ? element.name : element.id || element.name );
			},

			validationTargetFor: function (element) {

				// If radio/checkbox, validate first element in group instead
				if (this.checkable(element)) {
					element = this.findByName(element.name);
				}

				// Always apply ignore filter
				return $(element).not(this.settings.ignore)[0];
			},

			checkable: function (element) {
				return ( /radio|checkbox/i ).test(element.type);
			},

			findByName: function (name) {
				return $(this.currentForm).find("[name='" + name + "']");
			},

			getLength: function (value, element) {
				switch (element.nodeName.toLowerCase()) {
					case "select":
						return $("option:selected", element).length;
					case "input":
						if (this.checkable(element)) {
							return this.findByName(element.name).filter(":checked").length;
						}
				}
				return value.length;
			},

			depend: function (param, element) {
				return this.dependTypes[typeof param] ? this.dependTypes[typeof param](param, element) : true;
			},

			dependTypes: {
				"boolean": function (param) {
					return param;
				},
				"string": function (param, element) {
					return !!$(param, element.form).length;
				},
				"function": function (param, element) {
					return param(element);
				}
			},

			optional: function (element) {
				var val = this.elementValue(element);
				return !$.validator.methods.required.call(this, val, element) && "dependency-mismatch";
			},

			startRequest: function (element) {
				if (!this.pending[element.name]) {
					this.pendingRequest++;
					this.pending[element.name] = true;
				}
			},

			stopRequest: function (element, valid) {
				this.pendingRequest--;
				// sometimes synchronization fails, make sure pendingRequest is never < 0
				if (this.pendingRequest < 0) {
					this.pendingRequest = 0;
				}
				delete this.pending[element.name];
				if (valid && this.pendingRequest === 0 && this.formSubmitted && this.form()) {
					$(this.currentForm).submit();
					this.formSubmitted = false;
				} else if (!valid && this.pendingRequest === 0 && this.formSubmitted) {
					$(this.currentForm).triggerHandler("invalid-form", [this]);
					this.formSubmitted = false;
				}
			},

			previousValue: function (element) {
				return $.data(element, "previousValue") || $.data(element, "previousValue", {
						old: null,
						valid: true,
						message: this.defaultMessage(element, "remote")
					});
			}

		},

		classRuleSettings: {
			required: {required: true},
			email: {email: true},
			url: {url: true},
			date: {date: true},
			dateISO: {dateISO: true},
			number: {number: true},
			digits: {digits: true},
			creditcard: {creditcard: true}
		},

		addClassRules: function (className, rules) {
			if (className.constructor === String) {
				this.classRuleSettings[className] = rules;
			} else {
				$.extend(this.classRuleSettings, className);
			}
		},

		classRules: function (element) {
			var rules = {},
				classes = $(element).attr("class");

			if (classes) {
				$.each(classes.split(" "), function () {
					if (this in $.validator.classRuleSettings) {
						$.extend(rules, $.validator.classRuleSettings[this]);
					}
				});
			}
			return rules;
		},

		attributeRules: function (element) {
			var rules = {},
				$element = $(element),
				type = element.getAttribute("type"),
				method, value;

			for (method in $.validator.methods) {

				// support for <input required> in both html5 and older browsers
				if (method === "required") {
					value = element.getAttribute(method);
					// Some browsers return an empty string for the required attribute
					// and non-HTML5 browsers might have required="" markup
					if (value === "") {
						value = true;
					}
					// force non-HTML5 browsers to return bool
					value = !!value;
				} else {
					value = $element.attr(method);
				}

				// convert the value to a number for number inputs, and for text for backwards compability
				// allows type="date" and others to be compared as strings
				if (/min|max/.test(method) && ( type === null || /number|range|text/.test(type) )) {
					value = Number(value);
				}

				if (value || value === 0) {
					rules[method] = value;
				} else if (type === method && type !== "range") {
					// exception: the jquery validate 'range' method
					// does not test for the html5 'range' type
					rules[method] = true;
				}
			}

			// maxlength may be returned as -1, 2147483647 ( IE ) and 524288 ( safari ) for text inputs
			if (rules.maxlength && /-1|2147483647|524288/.test(rules.maxlength)) {
				delete rules.maxlength;
			}

			return rules;
		},

		dataRules: function (element) {
			var method, value,
				rules = {}, $element = $(element);
			for (method in $.validator.methods) {
				value = $element.data("rule" + method.charAt(0).toUpperCase() + method.substring(1).toLowerCase());
				if (value !== undefined) {
					rules[method] = value;
				}
			}
			return rules;
		},

		staticRules: function (element) {
			var rules = {},
				validator = $.data(element.form, "validator");

			if (validator.settings.rules) {
				rules = $.validator.normalizeRule(validator.settings.rules[element.name]) || {};
			}
			return rules;
		},

		normalizeRules: function (rules, element) {
			// handle dependency check
			$.each(rules, function (prop, val) {
				// ignore rule when param is explicitly false, eg. required:false
				if (val === false) {
					delete rules[prop];
					return;
				}
				if (val.param || val.depends) {
					var keepRule = true;
					switch (typeof val.depends) {
						case "string":
							keepRule = !!$(val.depends, element.form).length;
							break;
						case "function":
							keepRule = val.depends.call(element, element);
							break;
					}
					if (keepRule) {
						rules[prop] = val.param !== undefined ? val.param : true;
					} else {
						delete rules[prop];
					}
				}
			});

			// evaluate parameters
			$.each(rules, function (rule, parameter) {
				rules[rule] = $.isFunction(parameter) ? parameter(element) : parameter;
			});

			// clean number parameters
			$.each(["minlength", "maxlength"], function () {
				if (rules[this]) {
					rules[this] = Number(rules[this]);
				}
			});
			$.each(["rangelength", "range"], function () {
				var parts;
				if (rules[this]) {
					if ($.isArray(rules[this])) {
						rules[this] = [Number(rules[this][0]), Number(rules[this][1])];
					} else if (typeof rules[this] === "string") {
						parts = rules[this].replace(/[\[\]]/g, "").split(/[\s,]+/);
						rules[this] = [Number(parts[0]), Number(parts[1])];
					}
				}
			});

			if ($.validator.autoCreateRanges) {
				// auto-create ranges
				if (rules.min != null && rules.max != null) {
					rules.range = [rules.min, rules.max];
					delete rules.min;
					delete rules.max;
				}
				if (rules.minlength != null && rules.maxlength != null) {
					rules.rangelength = [rules.minlength, rules.maxlength];
					delete rules.minlength;
					delete rules.maxlength;
				}
			}

			return rules;
		},

		// Converts a simple string to a {string: true} rule, e.g., "required" to {required:true}
		normalizeRule: function (data) {
			if (typeof data === "string") {
				var transformed = {};
				$.each(data.split(/\s/), function () {
					transformed[this] = true;
				});
				data = transformed;
			}
			return data;
		},

		// http://jqueryvalidation.org/jQuery.validator.addMethod/
		addMethod: function (name, method, message) {
			$.validator.methods[name] = method;
			$.validator.messages[name] = message !== undefined ? message : $.validator.messages[name];
			if (method.length < 3) {
				$.validator.addClassRules(name, $.validator.normalizeRule(name));
			}
		},

		methods: {

			// http://jqueryvalidation.org/required-method/
			required: function (value, element, param) {
				// check if dependency is met
				if (!this.depend(param, element)) {
					return "dependency-mismatch";
				}
				if (element.nodeName.toLowerCase() === "select") {
					// could be an array for select-multiple or a string, both are fine this way
					var val = $(element).val();
					return val && val.length > 0;
				}
				if (this.checkable(element)) {
					return this.getLength(value, element) > 0;
				}
				return $.trim(value).length > 0;
			},

			// http://jqueryvalidation.org/email-method/
			email: function (value, element) {
				// From http://www.whatwg.org/specs/web-apps/current-work/multipage/states-of-the-type-attribute.html#e-mail-state-%28type=email%29
				// Retrieved 2014-01-14
				// If you have a problem with this implementation, report a bug against the above spec
				// Or use custom methods to implement your own email validation
				return this.optional(element) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value);
			},

			// http://jqueryvalidation.org/url-method/
			url: function (value, element) {
				// contributed by Scott Gonzalez: http://projects.scottsplayground.com/iri/
				return this.optional(element) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value);
			},

			// http://jqueryvalidation.org/date-method/
			date: function (value, element) {
				return this.optional(element) || !/Invalid|NaN/.test(new Date(value).toString());
			},

			// http://jqueryvalidation.org/dateISO-method/
			dateISO: function (value, element) {
				return this.optional(element) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value);
			},

			// http://jqueryvalidation.org/number-method/
			number: function (value, element) {
				return this.optional(element) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value);
			},

			// http://jqueryvalidation.org/digits-method/
			digits: function (value, element) {
				return this.optional(element) || /^\d+$/.test(value);
			},

			// http://jqueryvalidation.org/creditcard-method/
			// based on http://en.wikipedia.org/wiki/Luhn/
			creditcard: function (value, element) {
				if (this.optional(element)) {
					return "dependency-mismatch";
				}
				// accept only spaces, digits and dashes
				if (/[^0-9 \-]+/.test(value)) {
					return false;
				}
				var nCheck = 0,
					nDigit = 0,
					bEven = false,
					n, cDigit;

				value = value.replace(/\D/g, "");

				// Basing min and max length on
				// http://developer.ean.com/general_info/Valid_Credit_Card_Types
				if (value.length < 13 || value.length > 19) {
					return false;
				}

				for (n = value.length - 1; n >= 0; n--) {
					cDigit = value.charAt(n);
					nDigit = parseInt(cDigit, 10);
					if (bEven) {
						if (( nDigit *= 2 ) > 9) {
							nDigit -= 9;
						}
					}
					nCheck += nDigit;
					bEven = !bEven;
				}

				return ( nCheck % 10 ) === 0;
			},

			// http://jqueryvalidation.org/minlength-method/
			minlength: function (value, element, param) {
				var length = $.isArray(value) ? value.length : this.getLength(value, element);
				return this.optional(element) || length >= param;
			},

			// http://jqueryvalidation.org/maxlength-method/
			maxlength: function (value, element, param) {
				var length = $.isArray(value) ? value.length : this.getLength(value, element);
				return this.optional(element) || length <= param;
			},

			// http://jqueryvalidation.org/rangelength-method/
			rangelength: function (value, element, param) {
				var length = $.isArray(value) ? value.length : this.getLength(value, element);
				return this.optional(element) || ( length >= param[0] && length <= param[1] );
			},

			// http://jqueryvalidation.org/min-method/
			min: function (value, element, param) {
				return this.optional(element) || value >= param;
			},

			// http://jqueryvalidation.org/max-method/
			max: function (value, element, param) {
				return this.optional(element) || value <= param;
			},

			// http://jqueryvalidation.org/range-method/
			range: function (value, element, param) {
				return this.optional(element) || ( value >= param[0] && value <= param[1] );
			},

			// http://jqueryvalidation.org/equalTo-method/
			equalTo: function (value, element, param) {
				// bind to the blur event of the target in order to revalidate whenever the target field is updated
				// TODO find a way to bind the event just once, avoiding the unbind-rebind overhead
				var target = $(param);
				if (this.settings.onfocusout) {
					target.unbind(".validate-equalTo").bind("blur.validate-equalTo", function () {
						$(element).valid();
					});
				}
				return value === target.val();
			},

			// http://jqueryvalidation.org/remote-method/
			remote: function (value, element, param) {
				if (this.optional(element)) {
					return "dependency-mismatch";
				}

				var previous = this.previousValue(element),
					validator, data;

				if (!this.settings.messages[element.name]) {
					this.settings.messages[element.name] = {};
				}
				previous.originalMessage = this.settings.messages[element.name].remote;
				this.settings.messages[element.name].remote = previous.message;

				param = typeof param === "string" && {url: param} || param;

				if (previous.old === value) {
					return previous.valid;
				}

				previous.old = value;
				validator = this;
				this.startRequest(element);
				data = {};
				data[element.name] = value;
				$.ajax($.extend(true, {
					url: param,
					mode: "abort",
					port: "validate" + element.name,
					dataType: "json",
					data: data,
					context: validator.currentForm,
					success: function (response) {
						var valid = response === true || response === "true",
							errors, message, submitted;

						validator.settings.messages[element.name].remote = previous.originalMessage;
						if (valid) {
							submitted = validator.formSubmitted;
							validator.prepareElement(element);
							validator.formSubmitted = submitted;
							validator.successList.push(element);
							delete validator.invalid[element.name];
							validator.showErrors();
						} else {
							errors = {};
							message = response || validator.defaultMessage(element, "remote");
							errors[element.name] = previous.message = $.isFunction(message) ? message(value) : message;
							validator.invalid[element.name] = true;
							validator.showErrors(errors);
						}
						previous.valid = valid;
						validator.stopRequest(element, valid);
					}
				}, param));
				return "pending";
			}

		}

	});

	$.format = function deprecated() {
		throw "$.format has been deprecated. Please use $.validator.format instead.";
	};

// ajax mode: abort
// usage: $.ajax({ mode: "abort"[, port: "uniqueport"]});
// if mode:"abort" is used, the previous request on that port (port can be undefined) is aborted via XMLHttpRequest.abort()

	var pendingRequests = {},
		ajax;
// Use a prefilter if available (1.5+)
	if ($.ajaxPrefilter) {
		$.ajaxPrefilter(function (settings, _, xhr) {
			var port = settings.port;
			if (settings.mode === "abort") {
				if (pendingRequests[port]) {
					pendingRequests[port].abort();
				}
				pendingRequests[port] = xhr;
			}
		});
	} else {
		// Proxy ajax
		ajax = $.ajax;
		$.ajax = function (settings) {
			var mode = ( "mode" in settings ? settings : $.ajaxSettings ).mode,
				port = ( "port" in settings ? settings : $.ajaxSettings ).port;
			if (mode === "abort") {
				if (pendingRequests[port]) {
					pendingRequests[port].abort();
				}
				pendingRequests[port] = ajax.apply(this, arguments);
				return pendingRequests[port];
			}
			return ajax.apply(this, arguments);
		};
	}

// provides delegate(type: String, delegate: Selector, handler: Callback) plugin for easier event delegation
// handler is only called when $(event.target).is(delegate), in the scope of the jquery-object for event.target

	$.extend($.fn, {
		validateDelegate: function (delegate, type, handler) {
			return this.bind(type, function (event) {
				var target = $(event.target);
				if (target.is(delegate)) {
					return handler.apply(target, arguments);
				}
			});
		}
	});

}));
/* Modernizr 2.8.3 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-inputtypes-load
 */
;window.Modernizr = function (a, b, c) {
	function u(a) {
		i.cssText = a
	}

	function v(a, b) {
		return u(prefixes.join(a + ";") + (b || ""))
	}

	function w(a, b) {
		return typeof a === b
	}

	function x(a, b) {
		return !!~("" + a).indexOf(b)
	}

	function y(a, b, d) {
		for (var e in a) {
			var f = b[a[e]];
			if (f !== c)return d === !1 ? a[e] : w(f, "function") ? f.bind(d || b) : f
		}
		return !1
	}

	function z() {
		e.inputtypes = function (a) {
			for (var d = 0, e, g, h, i = a.length; d < i; d++)j.setAttribute("type", g = a[d]), e = j.type !== "text", e && (j.value = k, j.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(g) && j.style.WebkitAppearance !== c ? (f.appendChild(j), h = b.defaultView, e = h.getComputedStyle && h.getComputedStyle(j, null).WebkitAppearance !== "textfield" && j.offsetHeight !== 0, f.removeChild(j)) : /^(search|tel)$/.test(g) || (/^(url|email)$/.test(g) ? e = j.checkValidity && j.checkValidity() === !1 : e = j.value != k)), n[a[d]] = !!e;
			return n
		}("search tel url email datetime date month week time datetime-local number range color".split(" "))
	}

	var d = "2.8.3", e = {}, f = b.documentElement, g = "modernizr", h = b.createElement(g), i = h.style,
		j = b.createElement("input"), k = ":)", l = {}.toString, m = {}, n = {}, o = {}, p = [], q = p.slice, r,
		s = {}.hasOwnProperty, t;
	!w(s, "undefined") && !w(s.call, "undefined") ? t = function (a, b) {
		return s.call(a, b)
	} : t = function (a, b) {
		return b in a && w(a.constructor.prototype[b], "undefined")
	}, Function.prototype.bind || (Function.prototype.bind = function (b) {
		var c = this;
		if (typeof c != "function")throw new TypeError;
		var d = q.call(arguments, 1), e = function () {
			if (this instanceof e) {
				var a = function () {
				};
				a.prototype = c.prototype;
				var f = new a, g = c.apply(f, d.concat(q.call(arguments)));
				return Object(g) === g ? g : f
			}
			return c.apply(b, d.concat(q.call(arguments)))
		};
		return e
	});
	for (var A in m)t(m, A) && (r = A.toLowerCase(), e[r] = m[A](), p.push((e[r] ? "" : "no-") + r));
	return e.input || z(), e.addTest = function (a, b) {
		if (typeof a == "object")for (var d in a)t(a, d) && e.addTest(d, a[d]); else {
			a = a.toLowerCase();
			if (e[a] !== c)return e;
			b = typeof b == "function" ? b() : b, typeof enableClasses != "undefined" && enableClasses && (f.className += " " + (b ? "" : "no-") + a), e[a] = b
		}
		return e
	}, u(""), h = j = null, e._version = d, e
}(this, this.document), function (a, b, c) {
	function d(a) {
		return "[object Function]" == o.call(a)
	}

	function e(a) {
		return "string" == typeof a
	}

	function f() {
	}

	function g(a) {
		return !a || "loaded" == a || "complete" == a || "uninitialized" == a
	}

	function h() {
		var a = p.shift();
		q = 1, a ? a.t ? m(function () {
			("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
		}, 0) : (a(), h()) : q = 0
	}

	function i(a, c, d, e, f, i, j) {
		function k(b) {
			if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
				"img" != a && m(function () {
					t.removeChild(l)
				}, 50);
				for (var d in y[c])y[c].hasOwnProperty(d) && y[c][d].onload()
			}
		}

		var j = j || B.errorTimeout, l = b.createElement(a), o = 0, r = 0, u = {t: d, s: c, e: f, a: i, x: j};
		1 === y[c] && (r = 1, y[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function () {
			k.call(this, r)
		}, p.splice(e, 0, u), "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l))
	}

	function j(a, b, c, d, f) {
		return q = 0, b = b || "j", e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this
	}

	function k() {
		var a = B;
		return a.loader = {load: j, i: 0}, a
	}

	var l = b.documentElement, m = a.setTimeout, n = b.getElementsByTagName("script")[0], o = {}.toString, p = [],
		q = 0, r = "MozAppearance" in l.style, s = r && !!b.createRange().compareNode, t = s ? l : n.parentNode,
		l = a.opera && "[object Opera]" == o.call(a.opera), l = !!b.attachEvent && !l,
		u = r ? "object" : l ? "script" : "img", v = l ? "script" : u, w = Array.isArray || function (a) {
				return "[object Array]" == o.call(a)
			}, x = [], y = {}, z = {
			timeout: function (a, b) {
				return b.length && (a.timeout = b[0]), a
			}
		}, A, B;
	B = function (a) {
		function b(a) {
			var a = a.split("!"), b = x.length, c = a.pop(), d = a.length, c = {url: c, origUrl: c, prefixes: a}, e, f,
				g;
			for (f = 0; f < d; f++)g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g));
			for (f = 0; f < b; f++)c = x[f](c);
			return c
		}

		function g(a, e, f, g, h) {
			var i = b(a), j = i.autoCallback;
			i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function () {
				k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2
			})))
		}

		function h(a, b) {
			function c(a, c) {
				if (a) {
					if (e(a)) c || (j = function () {
						var a = [].slice.call(arguments);
						k.apply(this, a), l()
					}), g(a, j, b, 0, h); else if (Object(a) === a)for (n in m = function () {
						var b = 0, c;
						for (c in a)a.hasOwnProperty(c) && b++;
						return b
					}(), a)a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function () {
						var a = [].slice.call(arguments);
						k.apply(this, a), l()
					} : j[n] = function (a) {
						return function () {
							var b = [].slice.call(arguments);
							a && a.apply(this, b), l()
						}
					}(k[n])), g(a[n], j, b, n, h))
				} else!c && l()
			}

			var h = !!a.test, i = a.load || a.both, j = a.callback || f, k = j, l = a.complete || f, m, n;
			c(h ? a.yep : a.nope, !!i), i && c(i)
		}

		var i, j, l = this.yepnope.loader;
		if (e(a)) g(a, 0, l, 0); else if (w(a))for (i = 0; i < a.length; i++)j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l); else Object(a) === a && h(a, l)
	}, B.addPrefix = function (a, b) {
		z[a] = b
	}, B.addFilter = function (a) {
		x.push(a)
	}, B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function () {
		b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete"
	}, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function (a, c, d, e, i, j) {
		var k = b.createElement("script"), l, o, e = e || B.errorTimeout;
		k.src = a;
		for (o in d)k.setAttribute(o, d[o]);
		c = j ? h : c || f, k.onreadystatechange = k.onload = function () {
			!l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null)
		}, m(function () {
			l || (l = 1, c(1))
		}, e), i ? k.onload() : n.parentNode.insertBefore(k, n)
	}, a.yepnope.injectCss = function (a, c, d, e, g, i) {
		var e = b.createElement("link"), j, c = i ? h : c || f;
		e.href = a, e.rel = "stylesheet", e.type = "text/css";
		for (j in d)e.setAttribute(j, d[j]);
		g || (n.parentNode.insertBefore(e, n), m(c, 0))
	}
}(this, document), Modernizr.load = function () {
	yepnope.apply(window, [].slice.call(arguments, 0))
};
/*!
 * imagesLoaded PACKAGED v3.1.8
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

(function () {
	function e() {
	}

	function t(e, t) {
		for (var n = e.length; n--;)if (e[n].listener === t)return n;
		return -1
	}

	function n(e) {
		return function () {
			return this[e].apply(this, arguments)
		}
	}

	var i = e.prototype, r = this, o = r.EventEmitter;
	i.getListeners = function (e) {
		var t, n, i = this._getEvents();
		if ("object" == typeof e) {
			t = {};
			for (n in i)i.hasOwnProperty(n) && e.test(n) && (t[n] = i[n])
		} else t = i[e] || (i[e] = []);
		return t
	}, i.flattenListeners = function (e) {
		var t, n = [];
		for (t = 0; e.length > t; t += 1)n.push(e[t].listener);
		return n
	}, i.getListenersAsObject = function (e) {
		var t, n = this.getListeners(e);
		return n instanceof Array && (t = {}, t[e] = n), t || n
	}, i.addListener = function (e, n) {
		var i, r = this.getListenersAsObject(e), o = "object" == typeof n;
		for (i in r)r.hasOwnProperty(i) && -1 === t(r[i], n) && r[i].push(o ? n : {listener: n, once: !1});
		return this
	}, i.on = n("addListener"), i.addOnceListener = function (e, t) {
		return this.addListener(e, {listener: t, once: !0})
	}, i.once = n("addOnceListener"), i.defineEvent = function (e) {
		return this.getListeners(e), this
	}, i.defineEvents = function (e) {
		for (var t = 0; e.length > t; t += 1)this.defineEvent(e[t]);
		return this
	}, i.removeListener = function (e, n) {
		var i, r, o = this.getListenersAsObject(e);
		for (r in o)o.hasOwnProperty(r) && (i = t(o[r], n), -1 !== i && o[r].splice(i, 1));
		return this
	}, i.off = n("removeListener"), i.addListeners = function (e, t) {
		return this.manipulateListeners(!1, e, t)
	}, i.removeListeners = function (e, t) {
		return this.manipulateListeners(!0, e, t)
	}, i.manipulateListeners = function (e, t, n) {
		var i, r, o = e ? this.removeListener : this.addListener, s = e ? this.removeListeners : this.addListeners;
		if ("object" != typeof t || t instanceof RegExp)for (i = n.length; i--;)o.call(this, t, n[i]); else for (i in t)t.hasOwnProperty(i) && (r = t[i]) && ("function" == typeof r ? o.call(this, i, r) : s.call(this, i, r));
		return this
	}, i.removeEvent = function (e) {
		var t, n = typeof e, i = this._getEvents();
		if ("string" === n) delete i[e]; else if ("object" === n)for (t in i)i.hasOwnProperty(t) && e.test(t) && delete i[t]; else delete this._events;
		return this
	}, i.removeAllListeners = n("removeEvent"), i.emitEvent = function (e, t) {
		var n, i, r, o, s = this.getListenersAsObject(e);
		for (r in s)if (s.hasOwnProperty(r))for (i = s[r].length; i--;)n = s[r][i], n.once === !0 && this.removeListener(e, n.listener), o = n.listener.apply(this, t || []), o === this._getOnceReturnValue() && this.removeListener(e, n.listener);
		return this
	}, i.trigger = n("emitEvent"), i.emit = function (e) {
		var t = Array.prototype.slice.call(arguments, 1);
		return this.emitEvent(e, t)
	}, i.setOnceReturnValue = function (e) {
		return this._onceReturnValue = e, this
	}, i._getOnceReturnValue = function () {
		return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
	}, i._getEvents = function () {
		return this._events || (this._events = {})
	}, e.noConflict = function () {
		return r.EventEmitter = o, e
	}, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function () {
		return e
	}) : "object" == typeof module && module.exports ? module.exports = e : this.EventEmitter = e
}).call(this), function (e) {
	function t(t) {
		var n = e.event;
		return n.target = n.target || n.srcElement || t, n
	}

	var n = document.documentElement, i = function () {
	};
	n.addEventListener ? i = function (e, t, n) {
		e.addEventListener(t, n, !1)
	} : n.attachEvent && (i = function (e, n, i) {
			e[n + i] = i.handleEvent ? function () {
				var n = t(e);
				i.handleEvent.call(i, n)
			} : function () {
				var n = t(e);
				i.call(e, n)
			}, e.attachEvent("on" + n, e[n + i])
		});
	var r = function () {
	};
	n.removeEventListener ? r = function (e, t, n) {
		e.removeEventListener(t, n, !1)
	} : n.detachEvent && (r = function (e, t, n) {
			e.detachEvent("on" + t, e[t + n]);
			try {
				delete e[t + n]
			} catch (i) {
				e[t + n] = void 0
			}
		});
	var o = {bind: i, unbind: r};
	"function" == typeof define && define.amd ? define("eventie/eventie", o) : e.eventie = o
}(this), function (e, t) {
	"function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function (n, i) {
		return t(e, n, i)
	}) : "object" == typeof exports ? module.exports = t(e, require("wolfy87-eventemitter"), require("eventie")) : e.imagesLoaded = t(e, e.EventEmitter, e.eventie)
}(window, function (e, t, n) {
	function i(e, t) {
		for (var n in t)e[n] = t[n];
		return e
	}

	function r(e) {
		return "[object Array]" === d.call(e)
	}

	function o(e) {
		var t = [];
		if (r(e)) t = e; else if ("number" == typeof e.length)for (var n = 0, i = e.length; i > n; n++)t.push(e[n]); else t.push(e);
		return t
	}

	function s(e, t, n) {
		if (!(this instanceof s))return new s(e, t);
		"string" == typeof e && (e = document.querySelectorAll(e)), this.elements = o(e), this.options = i({}, this.options), "function" == typeof t ? n = t : i(this.options, t), n && this.on("always", n), this.getImages(), a && (this.jqDeferred = new a.Deferred);
		var r = this;
		setTimeout(function () {
			r.check()
		})
	}

	function f(e) {
		this.img = e
	}

	function c(e) {
		this.src = e, v[e] = this
	}

	var a = e.jQuery, u = e.console, h = u !== void 0, d = Object.prototype.toString;
	s.prototype = new t, s.prototype.options = {}, s.prototype.getImages = function () {
		this.images = [];
		for (var e = 0, t = this.elements.length; t > e; e++) {
			var n = this.elements[e];
			"IMG" === n.nodeName && this.addImage(n);
			var i = n.nodeType;
			if (i && (1 === i || 9 === i || 11 === i))for (var r = n.querySelectorAll("img"), o = 0, s = r.length; s > o; o++) {
				var f = r[o];
				this.addImage(f)
			}
		}
	}, s.prototype.addImage = function (e) {
		var t = new f(e);
		this.images.push(t)
	}, s.prototype.check = function () {
		function e(e, r) {
			return t.options.debug && h && u.log("confirm", e, r), t.progress(e), n++, n === i && t.complete(), !0
		}

		var t = this, n = 0, i = this.images.length;
		if (this.hasAnyBroken = !1, !i)return this.complete(), void 0;
		for (var r = 0; i > r; r++) {
			var o = this.images[r];
			o.on("confirm", e), o.check()
		}
	}, s.prototype.progress = function (e) {
		this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded;
		var t = this;
		setTimeout(function () {
			t.emit("progress", t, e), t.jqDeferred && t.jqDeferred.notify && t.jqDeferred.notify(t, e)
		})
	}, s.prototype.complete = function () {
		var e = this.hasAnyBroken ? "fail" : "done";
		this.isComplete = !0;
		var t = this;
		setTimeout(function () {
			if (t.emit(e, t), t.emit("always", t), t.jqDeferred) {
				var n = t.hasAnyBroken ? "reject" : "resolve";
				t.jqDeferred[n](t)
			}
		})
	}, a && (a.fn.imagesLoaded = function (e, t) {
		var n = new s(this, e, t);
		return n.jqDeferred.promise(a(this))
	}), f.prototype = new t, f.prototype.check = function () {
		var e = v[this.img.src] || new c(this.img.src);
		if (e.isConfirmed)return this.confirm(e.isLoaded, "cached was confirmed"), void 0;
		if (this.img.complete && void 0 !== this.img.naturalWidth)return this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), void 0;
		var t = this;
		e.on("confirm", function (e, n) {
			return t.confirm(e.isLoaded, n), !0
		}), e.check()
	}, f.prototype.confirm = function (e, t) {
		this.isLoaded = e, this.emit("confirm", this, t)
	};
	var v = {};
	return c.prototype = new t, c.prototype.check = function () {
		if (!this.isChecked) {
			var e = new Image;
			n.bind(e, "load", this), n.bind(e, "error", this), e.src = this.src, this.isChecked = !0
		}
	}, c.prototype.handleEvent = function (e) {
		var t = "on" + e.type;
		this[t] && this[t](e)
	}, c.prototype.onload = function (e) {
		this.confirm(!0, "onload"), this.unbindProxyEvents(e)
	}, c.prototype.onerror = function (e) {
		this.confirm(!1, "onerror"), this.unbindProxyEvents(e)
	}, c.prototype.confirm = function (e, t) {
		this.isConfirmed = !0, this.isLoaded = e, this.emit("confirm", this, t)
	}, c.prototype.unbindProxyEvents = function (e) {
		n.unbind(e.target, "load", this), n.unbind(e.target, "error", this)
	}, s
});
/*
 * jQuery throttle / debounce - v1.1 - 3/7/2010
 * http://benalman.com/projects/jquery-throttle-debounce-plugin/
 *
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function (b, c) {
	var $ = b.jQuery || b.Cowboy || (b.Cowboy = {}), a;
	$.throttle = a = function (e, f, j, i) {
		var h, d = 0;
		if (typeof f !== "boolean") {
			i = j;
			j = f;
			f = c
		}
		function g() {
			var o = this, m = +new Date() - d, n = arguments;

			function l() {
				d = +new Date();
				j.apply(o, n)
			}

			function k() {
				h = c
			}

			if (i && !h) {
				l()
			}
			h && clearTimeout(h);
			if (i === c && m > e) {
				l()
			} else {
				if (f !== true) {
					h = setTimeout(i ? k : l, i === c ? e - m : e)
				}
			}
		}

		if ($.guid) {
			g.guid = j.guid = j.guid || $.guid++
		}
		return g
	};
	$.debounce = function (d, e, f) {
		return f === c ? a(d, e, false) : a(d, f, e !== false)
	}
})(this);
/*
 *	jQuery dotdotdot 1.7.2
 *
 *	Copyright (c) Fred Heusschen
 *	www.frebsite.nl
 *
 *	Plugin website:
 *	dotdotdot.frebsite.nl
 *
 *	Licensed under the MIT license.
 *	http://en.wikipedia.org/wiki/MIT_License
 */
!function (t, e) {
	function n(t, e, n) {
		var r = t.children(), o = !1;
		t.empty();
		for (var i = 0, d = r.length; d > i; i++) {
			var l = r.eq(i);
			if (t.append(l), n && t.append(n), a(t, e)) {
				l.remove(), o = !0;
				break
			}
			n && n.detach()
		}
		return o
	}

	function r(e, n, i, d, l) {
		var s = !1,
			c = "a table, thead, tbody, tfoot, tr, col, colgroup, object, embed, param, ol, ul, dl, blockquote, select, optgroup, option, textarea, script, style",
			u = "script, .dotdotdot-keep";
		return e.contents().detach().each(function () {
			var f = this, h = t(f);
			if ("undefined" == typeof f || 3 == f.nodeType && 0 == t.trim(f.data).length)return !0;
			if (h.is(u)) e.append(h); else {
				if (s)return !0;
				e.append(h), !l || h.is(d.after) || h.find(d.after).length || e[e.is(c) ? "after" : "append"](l), a(i, d) && (s = 3 == f.nodeType ? o(h, n, i, d, l) : r(h, n, i, d, l), s || (h.detach(), s = !0)), s || l && l.detach()
			}
		}), s
	}

	function o(e, n, r, o, d) {
		var c = e[0];
		if (!c)return !1;
		var f = s(c), h = -1 !== f.indexOf(" ") ? " " : "　", p = "letter" == o.wrap ? "" : h, g = f.split(p), v = -1,
			w = -1, b = 0, y = g.length - 1;
		for (o.fallbackToLetter && 0 == b && 0 == y && (p = "", g = f.split(p), y = g.length - 1); y >= b && (0 != b || 0 != y);) {
			var m = Math.floor((b + y) / 2);
			if (m == w)break;
			w = m, l(c, g.slice(0, w + 1).join(p) + o.ellipsis), a(r, o) ? (y = w, o.fallbackToLetter && 0 == b && 0 == y && (p = "", g = g[0].split(p), v = -1, w = -1, b = 0, y = g.length - 1)) : (v = w, b = w)
		}
		if (-1 == v || 1 == g.length && 0 == g[0].length) {
			var x = e.parent();
			e.detach();
			var T = d && d.closest(x).length ? d.length : 0;
			x.contents().length > T ? c = u(x.contents().eq(-1 - T), n) : (c = u(x, n, !0), T || x.detach()), c && (f = i(s(c), o), l(c, f), T && d && t(c).parent().append(d))
		} else f = i(g.slice(0, v + 1).join(p), o), l(c, f);
		return !0
	}

	function a(t, e) {
		return t.innerHeight() > e.maxHeight
	}

	function i(e, n) {
		for (; t.inArray(e.slice(-1), n.lastCharacter.remove) > -1;)e = e.slice(0, -1);
		return t.inArray(e.slice(-1), n.lastCharacter.noEllipsis) < 0 && (e += n.ellipsis), e
	}

	function d(t) {
		return {width: t.innerWidth(), height: t.innerHeight()}
	}

	function l(t, e) {
		t.innerText ? t.innerText = e : t.nodeValue ? t.nodeValue = e : t.textContent && (t.textContent = e)
	}

	function s(t) {
		return t.innerText ? t.innerText : t.nodeValue ? t.nodeValue : t.textContent ? t.textContent : ""
	}

	function c(t) {
		do t = t.previousSibling; while (t && 1 !== t.nodeType && 3 !== t.nodeType);
		return t
	}

	function u(e, n, r) {
		var o, a = e && e[0];
		if (a) {
			if (!r) {
				if (3 === a.nodeType)return a;
				if (t.trim(e.text()))return u(e.contents().last(), n)
			}
			for (o = c(a); !o;) {
				if (e = e.parent(), e.is(n) || !e.length)return !1;
				o = c(e[0])
			}
			if (o)return u(t(o), n)
		}
		return !1
	}

	function f(e, n) {
		return e ? "string" == typeof e ? (e = t(e, n), e.length ? e : !1) : e.jquery ? e : !1 : !1
	}

	function h(t) {
		for (var e = t.parent().innerHeight() - t.position().top, n = ["paddingTop", "paddingBottom"], r = 0, o = n.length; o > r; r++) {
			var a = parseInt(t.css(n[r]), 10);
			isNaN(a) && (a = 0), e -= a
		}
		return e
	}

	if (!t.fn.dotdotdot) {
		t.fn.dotdotdot = function (e) {
			if (0 == this.length)return t.fn.dotdotdot.debug('No element found for "' + this.selector + '".'), this;
			if (this.length > 1)return this.each(function () {
				t(this).dotdotdot(e)
			});
			var o = this;
			o.data("dotdotdot") && o.trigger("destroy.dot"), o.data("dotdotdot-style", o.attr("style") || ""), o.css("word-wrap", "break-word"), "nowrap" === o.css("white-space") && o.css("white-space", "normal"), o.bind_events = function () {
				return o.bind("update.dot", function (e, d) {
					e.preventDefault(), e.stopPropagation(), l.maxHeight = "number" == typeof l.height ? l.height : h(o), l.maxHeight += l.tolerance, "undefined" != typeof d && (("string" == typeof d || d instanceof HTMLElement) && (d = t("<div />").append(d).contents()), d instanceof t && (i = d)), g = o.wrapInner('<div class="dotdotdot" />').children(), g.contents().detach().end().append(i.clone(!0)).find("br").replaceWith("  <br />  ").end().css({
						height: "auto",
						width: "auto",
						border: "none",
						padding: 0,
						margin: 0
					});
					var c = !1, u = !1;
					return s.afterElement && (c = s.afterElement.clone(!0), c.show(), s.afterElement.detach()), a(g, l) && (u = "children" == l.wrap ? n(g, l, c) : r(g, o, g, l, c)), g.replaceWith(g.contents()), g = null, t.isFunction(l.callback) && l.callback.call(o[0], u, i), s.isTruncated = u, u
				}).bind("isTruncated.dot", function (t, e) {
					return t.preventDefault(), t.stopPropagation(), "function" == typeof e && e.call(o[0], s.isTruncated), s.isTruncated
				}).bind("originalContent.dot", function (t, e) {
					return t.preventDefault(), t.stopPropagation(), "function" == typeof e && e.call(o[0], i), i
				}).bind("destroy.dot", function (t) {
					t.preventDefault(), t.stopPropagation(), o.unwatch().unbind_events().contents().detach().end().append(i).attr("style", o.data("dotdotdot-style") || "").data("dotdotdot", !1)
				}), o
			}, o.unbind_events = function () {
				return o.unbind(".dot"), o
			}, o.watch = function () {
				if (o.unwatch(), "window" == l.watch) {
					var e = t(window), n = e.width(), r = e.height();
					e.bind("resize.dot" + s.dotId, function () {
						n == e.width() && r == e.height() && l.windowResizeFix || (n = e.width(), r = e.height(), u && clearInterval(u), u = setTimeout(function () {
							o.trigger("update.dot")
						}, 100))
					})
				} else c = d(o), u = setInterval(function () {
					if (o.is(":visible")) {
						var t = d(o);
						(c.width != t.width || c.height != t.height) && (o.trigger("update.dot"), c = t)
					}
				}, 500);
				return o
			}, o.unwatch = function () {
				return t(window).unbind("resize.dot" + s.dotId), u && clearInterval(u), o
			};
			var i = o.contents(), l = t.extend(!0, {}, t.fn.dotdotdot.defaults, e), s = {}, c = {}, u = null, g = null;
			return l.lastCharacter.remove instanceof Array || (l.lastCharacter.remove = t.fn.dotdotdot.defaultArrays.lastCharacter.remove), l.lastCharacter.noEllipsis instanceof Array || (l.lastCharacter.noEllipsis = t.fn.dotdotdot.defaultArrays.lastCharacter.noEllipsis), s.afterElement = f(l.after, o), s.isTruncated = !1, s.dotId = p++, o.data("dotdotdot", !0).bind_events().trigger("update.dot"), l.watch && o.watch(), o
		}, t.fn.dotdotdot.defaults = {
			ellipsis: "... ",
			wrap: "word",
			fallbackToLetter: !0,
			lastCharacter: {},
			tolerance: 0,
			callback: null,
			after: null,
			height: null,
			watch: !1,
			windowResizeFix: !0
		}, t.fn.dotdotdot.defaultArrays = {
			lastCharacter: {
				remove: [" ", "　", ",", ";", ".", "!", "?"],
				noEllipsis: []
			}
		}, t.fn.dotdotdot.debug = function () {
		};
		var p = 1, g = t.fn.html;
		t.fn.html = function (n) {
			return n != e && !t.isFunction(n) && this.data("dotdotdot") ? this.trigger("update", [n]) : g.apply(this, arguments)
		};
		var v = t.fn.text;
		t.fn.text = function (n) {
			return n != e && !t.isFunction(n) && this.data("dotdotdot") ? (n = t("<div />").text(n).html(), this.trigger("update", [n])) : v.apply(this, arguments)
		}
	}
}(jQuery);
/*
 * jQuery Clipboard :: Fork of zClip :: Uses ZeroClipboard v1.3.2
 *
 * https://github.com/valeriansaliou/jquery.clipboard
 * http://www.steamdev.com/zclip/
 *
 * Copyright 2014, Valerian Saliou
 * Copyright 2011, SteamDev
 *
 * Released under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Version: v1.4
 * Date: Fri Oct 3, 2014
 */
/* Component: jQuery Clipboard */
(function ($) {
	var $clip = null;
	var $is_loaded = false;
	$.fn.clipboard = function (params) {
		if ((typeof params == 'object' && !params.length) || (typeof params == 'undefined')) {
			var settings = $.extend({
				path: 'jquery.clipboard.swf',
				copy: null,
				beforeCopy: null,
				afterCopy: null,
				clickAfter: true
			}, (params || {}));
			return this.each(function () {
				var o = $(this);
				if (o.is(':visible') && (typeof settings.copy == 'string' || $.isFunction(settings.copy))) {
					if ($.isFunction(settings.copy)) {
						o.bind('Clipboard_copy', settings.copy);
					}
					if ($.isFunction(settings.beforeCopy)) {
						o.bind('Clipboard_beforeCopy', settings.beforeCopy);
					}
					if ($.isFunction(settings.afterCopy)) {
						o.bind('Clipboard_afterCopy', settings.afterCopy);
					}
					if ($clip === null) {
						ZeroClipboard.config({
							moviePath: settings.path,
							trustedDomains: '*',
							hoverClass: 'hover',
							activeClass: 'active'
						});
						$clip = new ZeroClipboard(null);
						$clip.on('load', function (client) {
							client.on('mouseover', function (client) {
								$(this).trigger('mouseenter');
							});
							client.on('mouseout', function (client) {
								$(this).trigger('mouseleave');
							});
							client.on('mousedown', function (client) {
								$(this).trigger('mousedown');
								if (!$.isFunction(settings.copy)) {
									client.setText(settings.copy);
								} else {
									client.setText($(this).triggerHandler('Clipboard_copy'));
								}
								if ($.isFunction(settings.beforeCopy)) {
									$(this).trigger('Clipboard_beforeCopy');
								}
							});
							client.on('complete', function (client, args) {
								if ($.isFunction(settings.afterCopy)) {
									$(this).trigger('Clipboard_afterCopy');
								} else {
									$(this).removeClass('hover');
								}
								if (settings.clickAfter) {
									$(this).trigger('click');
								}
							});
						});
					}
					$clip.clip([o[0]]);
				}
			});
		}
	};
})(jQuery);
/* Component: ZeroClipboard */
/*!
 * ZeroClipboard
 * The ZeroClipboard library provides an easy way to copy text to the clipboard using an invisible Adobe Flash movie and a JavaScript interface.
 * Copyright (c) 2014 Jon Rohan, James M. Greene
 * Licensed MIT
 * http://zeroclipboard.org/
 * v1.3.2
 */
(function () {
	"use strict";
	var currentElement;
	var flashState = {
		bridge: null,
		version: "0.0.0",
		disabled: null,
		outdated: null,
		ready: null
	};
	var _clipData = {};
	var clientIdCounter = 0;
	var _clientMeta = {};
	var elementIdCounter = 0;
	var _elementMeta = {};
	var _amdModuleId = null;
	var _cjsModuleId = null;
	var _swfPath = function () {
		var i, jsDir, tmpJsPath, jsPath, swfPath = "ZeroClipboard.swf";
		if (document.currentScript && (jsPath = document.currentScript.src)) {
		} else {
			var scripts = document.getElementsByTagName("script");
			if ("readyState" in scripts[0]) {
				for (i = scripts.length; i--;) {
					if (scripts[i].readyState === "interactive" && (jsPath = scripts[i].src)) {
						break;
					}
				}
			} else if (document.readyState === "loading") {
				jsPath = scripts[scripts.length - 1].src;
			} else {
				for (i = scripts.length; i--;) {
					tmpJsPath = scripts[i].src;
					if (!tmpJsPath) {
						jsDir = null;
						break;
					}
					tmpJsPath = tmpJsPath.split("#")[0].split("?")[0];
					tmpJsPath = tmpJsPath.slice(0, tmpJsPath.lastIndexOf("/") + 1);
					if (jsDir === null) {
						jsDir = tmpJsPath;
					} else if (jsDir !== tmpJsPath) {
						jsDir = null;
						break;
					}
				}
				if (jsDir !== null) {
					jsPath = jsDir;
				}
			}
		}
		if (jsPath) {
			jsPath = jsPath.split("#")[0].split("?")[0];
			swfPath = jsPath.slice(0, jsPath.lastIndexOf("/") + 1) + swfPath;
		}
		return swfPath;
	}();
	var _camelizeCssPropName = function () {
		var matcherRegex = /\-([a-z])/g, replacerFn = function (match, group) {
			return group.toUpperCase();
		};
		return function (prop) {
			return prop.replace(matcherRegex, replacerFn);
		};
	}();
	var _getStyle = function (el, prop) {
		var value, camelProp, tagName, possiblePointers, i, len;
		if (window.getComputedStyle) {
			value = window.getComputedStyle(el, null).getPropertyValue(prop);
		} else {
			camelProp = _camelizeCssPropName(prop);
			if (el.currentStyle) {
				value = el.currentStyle[camelProp];
			} else {
				value = el.style[camelProp];
			}
		}
		if (prop === "cursor") {
			if (!value || value === "auto") {
				tagName = el.tagName.toLowerCase();
				if (tagName === "a") {
					return "pointer";
				}
			}
		}
		return value;
	};
	var _elementMouseOver = function (event) {
		if (!event) {
			event = window.event;
		}
		var target;
		if (this !== window) {
			target = this;
		} else if (event.target) {
			target = event.target;
		} else if (event.srcElement) {
			target = event.srcElement;
		}
		ZeroClipboard.activate(target);
	};
	var _addEventHandler = function (element, method, func) {
		if (!element || element.nodeType !== 1) {
			return;
		}
		if (element.addEventListener) {
			element.addEventListener(method, func, false);
		} else if (element.attachEvent) {
			element.attachEvent("on" + method, func);
		}
	};
	var _removeEventHandler = function (element, method, func) {
		if (!element || element.nodeType !== 1) {
			return;
		}
		if (element.removeEventListener) {
			element.removeEventListener(method, func, false);
		} else if (element.detachEvent) {
			element.detachEvent("on" + method, func);
		}
	};
	var _addClass = function (element, value) {
		if (!element || element.nodeType !== 1) {
			return element;
		}
		if (element.classList) {
			if (!element.classList.contains(value)) {
				element.classList.add(value);
			}
			return element;
		}
		if (value && typeof value === "string") {
			var classNames = (value || "").split(/\s+/);
			if (element.nodeType === 1) {
				if (!element.className) {
					element.className = value;
				} else {
					var className = " " + element.className + " ", setClass = element.className;
					for (var c = 0, cl = classNames.length; c < cl; c++) {
						if (className.indexOf(" " + classNames[c] + " ") < 0) {
							setClass += " " + classNames[c];
						}
					}
					element.className = setClass.replace(/^\s+|\s+$/g, "");
				}
			}
		}
		return element;
	};
	var _removeClass = function (element, value) {
		if (!element || element.nodeType !== 1) {
			return element;
		}
		if (element.classList) {
			if (element.classList.contains(value)) {
				element.classList.remove(value);
			}
			return element;
		}
		if (value && typeof value === "string" || value === undefined) {
			var classNames = (value || "").split(/\s+/);
			if (element.nodeType === 1 && element.className) {
				if (value) {
					var className = (" " + element.className + " ").replace(/[\n\t]/g, " ");
					for (var c = 0, cl = classNames.length; c < cl; c++) {
						className = className.replace(" " + classNames[c] + " ", " ");
					}
					element.className = className.replace(/^\s+|\s+$/g, "");
				} else {
					element.className = "";
				}
			}
		}
		return element;
	};
	var _getZoomFactor = function () {
		var rect, physicalWidth, logicalWidth, zoomFactor = 1;
		if (typeof document.body.getBoundingClientRect === "function") {
			rect = document.body.getBoundingClientRect();
			physicalWidth = rect.right - rect.left;
			logicalWidth = document.body.offsetWidth;
			zoomFactor = Math.round(physicalWidth / logicalWidth * 100) / 100;
		}
		return zoomFactor;
	};
	var _getDOMObjectPosition = function (obj, defaultZIndex) {
		var info = {
			left: 0,
			top: 0,
			width: 0,
			height: 0,
			zIndex: _getSafeZIndex(defaultZIndex) - 1
		};
		if (obj.getBoundingClientRect) {
			var rect = obj.getBoundingClientRect();
			var pageXOffset, pageYOffset, zoomFactor;
			if ("pageXOffset" in window && "pageYOffset" in window) {
				pageXOffset = window.pageXOffset;
				pageYOffset = window.pageYOffset;
			} else {
				zoomFactor = _getZoomFactor();
				pageXOffset = Math.round(document.documentElement.scrollLeft / zoomFactor);
				pageYOffset = Math.round(document.documentElement.scrollTop / zoomFactor);
			}
			var leftBorderWidth = document.documentElement.clientLeft || 0;
			var topBorderWidth = document.documentElement.clientTop || 0;
			info.left = rect.left + pageXOffset - leftBorderWidth;
			info.top = rect.top + pageYOffset - topBorderWidth;
			info.width = "width" in rect ? rect.width : rect.right - rect.left;
			info.height = "height" in rect ? rect.height : rect.bottom - rect.top;
		}
		return info;
	};
	var _cacheBust = function (path, options) {
		var cacheBust = options === null || options && options.cacheBust === true && options.useNoCache === true;
		if (cacheBust) {
			return (path.indexOf("?") === -1 ? "?" : "&") + "noCache=" + new Date().getTime();
		} else {
			return "";
		}
	};
	var _vars = function (options) {
		var i, len, domain, str = [], domains = [], trustedOriginsExpanded = [];
		if (options.trustedOrigins) {
			if (typeof options.trustedOrigins === "string") {
				domains.push(options.trustedOrigins);
			} else if (typeof options.trustedOrigins === "object" && "length" in options.trustedOrigins) {
				domains = domains.concat(options.trustedOrigins);
			}
		}
		if (options.trustedDomains) {
			if (typeof options.trustedDomains === "string") {
				domains.push(options.trustedDomains);
			} else if (typeof options.trustedDomains === "object" && "length" in options.trustedDomains) {
				domains = domains.concat(options.trustedDomains);
			}
		}
		if (domains.length) {
			for (i = 0, len = domains.length; i < len; i++) {
				if (domains.hasOwnProperty(i) && domains[i] && typeof domains[i] === "string") {
					domain = _extractDomain(domains[i]);
					if (!domain) {
						continue;
					}
					if (domain === "*") {
						trustedOriginsExpanded = [domain];
						break;
					}
					trustedOriginsExpanded.push.apply(trustedOriginsExpanded, [domain, "//" + domain, window.location.protocol + "//" + domain]);
				}
			}
		}
		if (trustedOriginsExpanded.length) {
			str.push("trustedOrigins=" + encodeURIComponent(trustedOriginsExpanded.join(",")));
		}
		if (typeof options.jsModuleId === "string" && options.jsModuleId) {
			str.push("jsModuleId=" + encodeURIComponent(options.jsModuleId));
		}
		return str.join("&");
	};
	var _inArray = function (elem, array, fromIndex) {
		if (typeof array.indexOf === "function") {
			return array.indexOf(elem, fromIndex);
		}
		var i, len = array.length;
		if (typeof fromIndex === "undefined") {
			fromIndex = 0;
		} else if (fromIndex < 0) {
			fromIndex = len + fromIndex;
		}
		for (i = fromIndex; i < len; i++) {
			if (array.hasOwnProperty(i) && array[i] === elem) {
				return i;
			}
		}
		return -1;
	};
	var _prepClip = function (elements) {
		if (typeof elements === "string") throw new TypeError("ZeroClipboard doesn't accept query strings.");
		if (!elements.length) return [elements];
		return elements;
	};
	var _dispatchCallback = function (func, context, args, async) {
		if (async) {
			window.setTimeout(function () {
				func.apply(context, args);
			}, 0);
		} else {
			func.apply(context, args);
		}
	};
	var _getSafeZIndex = function (val) {
		var zIndex, tmp;
		if (val) {
			if (typeof val === "number" && val > 0) {
				zIndex = val;
			} else if (typeof val === "string" && (tmp = parseInt(val, 10)) && !isNaN(tmp) && tmp > 0) {
				zIndex = tmp;
			}
		}
		if (!zIndex) {
			if (typeof _globalConfig.zIndex === "number" && _globalConfig.zIndex > 0) {
				zIndex = _globalConfig.zIndex;
			} else if (typeof _globalConfig.zIndex === "string" && (tmp = parseInt(_globalConfig.zIndex, 10)) && !isNaN(tmp) && tmp > 0) {
				zIndex = tmp;
			}
		}
		return zIndex || 0;
	};
	var _deprecationWarning = function (deprecatedApiName, debugEnabled) {
		if (deprecatedApiName && debugEnabled !== false && typeof console !== "undefined" && console && (console.warn || console.log)) {
			var deprecationWarning = "`" + deprecatedApiName + "` is deprecated. See docs for more info:\n" + " https://github.com/zeroclipboard/zeroclipboard/blob/master/docs/instructions.md#deprecations";
			if (console.warn) {
				console.warn(deprecationWarning);
			} else {
				console.log(deprecationWarning);
			}
		}
	};
	var _extend = function () {
		var i, len, arg, prop, src, copy, target = arguments[0] || {};
		for (i = 1, len = arguments.length; i < len; i++) {
			if ((arg = arguments[i]) !== null) {
				for (prop in arg) {
					if (arg.hasOwnProperty(prop)) {
						src = target[prop];
						copy = arg[prop];
						if (target === copy) {
							continue;
						}
						if (copy !== undefined) {
							target[prop] = copy;
						}
					}
				}
			}
		}
		return target;
	};
	var _extractDomain = function (originOrUrl) {
		if (originOrUrl === null || originOrUrl === "") {
			return null;
		}
		originOrUrl = originOrUrl.replace(/^\s+|\s+$/g, "");
		if (originOrUrl === "") {
			return null;
		}
		var protocolIndex = originOrUrl.indexOf("//");
		originOrUrl = protocolIndex === -1 ? originOrUrl : originOrUrl.slice(protocolIndex + 2);
		var pathIndex = originOrUrl.indexOf("/");
		originOrUrl = pathIndex === -1 ? originOrUrl : protocolIndex === -1 || pathIndex === 0 ? null : originOrUrl.slice(0, pathIndex);
		if (originOrUrl && originOrUrl.slice(-4).toLowerCase() === ".swf") {
			return null;
		}
		return originOrUrl || null;
	};
	var _determineScriptAccess = function () {
		var _extractAllDomains = function (origins, resultsArray) {
			var i, len, tmp;
			if (origins !== null && resultsArray[0] !== "*") {
				if (typeof origins === "string") {
					origins = [origins];
				}
				if (typeof origins === "object" && "length" in origins) {
					for (i = 0, len = origins.length; i < len; i++) {
						if (origins.hasOwnProperty(i)) {
							tmp = _extractDomain(origins[i]);
							if (tmp) {
								if (tmp === "*") {
									resultsArray.length = 0;
									resultsArray.push("*");
									break;
								}
								if (_inArray(tmp, resultsArray) === -1) {
									resultsArray.push(tmp);
								}
							}
						}
					}
				}
			}
		};
		var _accessLevelLookup = {
			always: "always",
			samedomain: "sameDomain",
			never: "never"
		};
		return function (currentDomain, configOptions) {
			var asaLower, allowScriptAccess = configOptions.allowScriptAccess;
			if (typeof allowScriptAccess === "string" && (asaLower = allowScriptAccess.toLowerCase()) && /^always|samedomain|never$/.test(asaLower)) {
				return _accessLevelLookup[asaLower];
			}
			var swfDomain = _extractDomain(configOptions.moviePath);
			if (swfDomain === null) {
				swfDomain = currentDomain;
			}
			var trustedDomains = [];
			_extractAllDomains(configOptions.trustedOrigins, trustedDomains);
			_extractAllDomains(configOptions.trustedDomains, trustedDomains);
			var len = trustedDomains.length;
			if (len > 0) {
				if (len === 1 && trustedDomains[0] === "*") {
					return "always";
				}
				if (_inArray(currentDomain, trustedDomains) !== -1) {
					if (len === 1 && currentDomain === swfDomain) {
						return "sameDomain";
					}
					return "always";
				}
			}
			return "never";
		};
	}();
	var _objectKeys = function (obj) {
		if (obj === null) {
			return [];
		}
		if (Object.keys) {
			return Object.keys(obj);
		}
		var keys = [];
		for (var prop in obj) {
			if (obj.hasOwnProperty(prop)) {
				keys.push(prop);
			}
		}
		return keys;
	};
	var _deleteOwnProperties = function (obj) {
		if (obj) {
			for (var prop in obj) {
				if (obj.hasOwnProperty(prop)) {
					delete obj[prop];
				}
			}
		}
		return obj;
	};
	var _detectFlashSupport = function () {
		var hasFlash = false;
		if (typeof flashState.disabled === "boolean") {
			hasFlash = flashState.disabled === false;
		} else {
			if (typeof ActiveXObject === "function") {
				try {
					if (new ActiveXObject("ShockwaveFlash.ShockwaveFlash")) {
						hasFlash = true;
					}
				} catch (error) {
				}
			}
			if (!hasFlash && navigator.mimeTypes["application/x-shockwave-flash"]) {
				hasFlash = true;
			}
		}
		return hasFlash;
	};

	function _parseFlashVersion(flashVersion) {
		return flashVersion.replace(/,/g, ".").replace(/[^0-9\.]/g, "");
	}

	function _isFlashVersionSupported(flashVersion) {
		return parseFloat(_parseFlashVersion(flashVersion)) >= 10;
	}

	var ZeroClipboard = function (elements, options) {
		if (!(this instanceof ZeroClipboard)) {
			return new ZeroClipboard(elements, options);
		}
		this.id = "" + clientIdCounter++;
		_clientMeta[this.id] = {
			instance: this,
			elements: [],
			handlers: {}
		};
		if (elements) {
			this.clip(elements);
		}
		if (typeof options !== "undefined") {
			_deprecationWarning("new ZeroClipboard(elements, options)", _globalConfig.debug);
			ZeroClipboard.config(options);
		}
		this.options = ZeroClipboard.config();
		if (typeof flashState.disabled !== "boolean") {
			flashState.disabled = !_detectFlashSupport();
		}
		if (flashState.disabled === false && flashState.outdated !== true) {
			if (flashState.bridge === null) {
				flashState.outdated = false;
				flashState.ready = false;
				_bridge();
			}
		}
	};
	ZeroClipboard.prototype.setText = function (newText) {
		if (newText && newText !== "") {
			_clipData["text/plain"] = newText;
			if (flashState.ready === true && flashState.bridge) {
				flashState.bridge.setText(newText);
			} else {
			}
		}
		return this;
	};
	ZeroClipboard.prototype.setSize = function (width, height) {
		if (flashState.ready === true && flashState.bridge) {
			flashState.bridge.setSize(width, height);
		} else {
		}
		return this;
	};
	var _setHandCursor = function (enabled) {
		if (flashState.ready === true && flashState.bridge) {
			flashState.bridge.setHandCursor(enabled);
		} else {
		}
	};
	ZeroClipboard.prototype.destroy = function () {
		this.unclip();
		this.off();
		delete _clientMeta[this.id];
	};
	var _getAllClients = function () {
		var i, len, client, clients = [], clientIds = _objectKeys(_clientMeta);
		for (i = 0, len = clientIds.length; i < len; i++) {
			client = _clientMeta[clientIds[i]].instance;
			if (client && client instanceof ZeroClipboard) {
				clients.push(client);
			}
		}
		return clients;
	};
	ZeroClipboard.version = "1.3.2";
	var _globalConfig = {
		swfPath: _swfPath,
		trustedDomains: window.location.host ? [window.location.host] : [],
		cacheBust: true,
		forceHandCursor: false,
		zIndex: 999999999,
		debug: true,
		title: null,
		autoActivate: true
	};
	ZeroClipboard.config = function (options) {
		if (typeof options === "object" && options !== null) {
			_extend(_globalConfig, options);
		}
		if (typeof options === "string" && options) {
			if (_globalConfig.hasOwnProperty(options)) {
				return _globalConfig[options];
			}
			return;
		}
		var copy = {};
		for (var prop in _globalConfig) {
			if (_globalConfig.hasOwnProperty(prop)) {
				if (typeof _globalConfig[prop] === "object" && _globalConfig[prop] !== null) {
					if ("length" in _globalConfig[prop]) {
						copy[prop] = _globalConfig[prop].slice(0);
					} else {
						copy[prop] = _extend({}, _globalConfig[prop]);
					}
				} else {
					copy[prop] = _globalConfig[prop];
				}
			}
		}
		return copy;
	};
	ZeroClipboard.destroy = function () {
		ZeroClipboard.deactivate();
		for (var clientId in _clientMeta) {
			if (_clientMeta.hasOwnProperty(clientId) && _clientMeta[clientId]) {
				var client = _clientMeta[clientId].instance;
				if (client && typeof client.destroy === "function") {
					client.destroy();
				}
			}
		}
		var htmlBridge = _getHtmlBridge(flashState.bridge);
		if (htmlBridge && htmlBridge.parentNode) {
			htmlBridge.parentNode.removeChild(htmlBridge);
			flashState.ready = null;
			flashState.bridge = null;
		}
	};
	ZeroClipboard.activate = function (element) {
		if (currentElement) {
			_removeClass(currentElement, _globalConfig.hoverClass);
			_removeClass(currentElement, _globalConfig.activeClass);
		}
		currentElement = element;
		_addClass(element, _globalConfig.hoverClass);
		_reposition();
		var newTitle = _globalConfig.title || element.getAttribute("title");
		if (newTitle) {
			var htmlBridge = _getHtmlBridge(flashState.bridge);
			if (htmlBridge) {
				htmlBridge.setAttribute("title", newTitle);
			}
		}
		var useHandCursor = _globalConfig.forceHandCursor === true || _getStyle(element, "cursor") === "pointer";
		_setHandCursor(useHandCursor);
	};
	ZeroClipboard.deactivate = function () {
		var htmlBridge = _getHtmlBridge(flashState.bridge);
		if (htmlBridge) {
			htmlBridge.style.left = "0px";
			htmlBridge.style.top = "-9999px";
			htmlBridge.removeAttribute("title");
		}
		if (currentElement) {
			_removeClass(currentElement, _globalConfig.hoverClass);
			_removeClass(currentElement, _globalConfig.activeClass);
			currentElement = null;
		}
	};
	var _bridge = function () {
		var flashBridge, len;
		var container = document.getElementById("global-zeroclipboard-html-bridge");
		if (!container) {
			var opts = ZeroClipboard.config();
			opts.jsModuleId = typeof _amdModuleId === "string" && _amdModuleId || typeof _cjsModuleId === "string" && _cjsModuleId || null;
			var allowScriptAccess = _determineScriptAccess(window.location.host, _globalConfig);
			var flashvars = _vars(opts);
			var swfUrl = _globalConfig.moviePath + _cacheBust(_globalConfig.moviePath, _globalConfig);
			var html = ' <object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="global-zeroclipboard-flash-bridge" width="100%" height="100%"> <param name="movie" value="' + swfUrl + '"/> <param name="allowScriptAccess" value="' + allowScriptAccess + '"/> <param name="scale" value="exactfit"/> <param name="loop" value="false"/> <param name="menu" value="false"/> <param name="quality" value="best" /> <param name="bgcolor" value="#ffffff"/> <param name="wmode" value="transparent"/> <param name="flashvars" value="' + flashvars + '"/> <embed src="' + swfUrl + '" loop="false" menu="false" quality="best" bgcolor="#ffffff" width="100%" height="100%" name="global-zeroclipboard-flash-bridge" allowScriptAccess="' + allowScriptAccess + '" allowFullScreen="false" type="application/x-shockwave-flash" wmode="transparent" pluginspage="http://www.macromedia.com/go/getflashplayer" flashvars="' + flashvars + '" scale="exactfit"> </embed> </object>';
			container = document.createElement("div");
			container.id = "global-zeroclipboard-html-bridge";
			container.setAttribute("class", "global-zeroclipboard-container");
			container.style.position = "absolute";
			container.style.left = "0px";
			container.style.top = "-9999px";
			container.style.width = "15px";
			container.style.height = "15px";
			container.style.zIndex = "" + _getSafeZIndex(_globalConfig.zIndex);
			document.body.appendChild(container);
			container.innerHTML = html;
		}
		flashBridge = document["global-zeroclipboard-flash-bridge"];
		if (flashBridge && (len = flashBridge.length)) {
			flashBridge = flashBridge[len - 1];
		}
		flashState.bridge = flashBridge || container.children[0].lastElementChild;
	};
	var _getHtmlBridge = function (flashBridge) {
		var isFlashElement = /^OBJECT|EMBED$/;
		var htmlBridge = flashBridge && flashBridge.parentNode;
		while (htmlBridge && isFlashElement.test(htmlBridge.nodeName) && htmlBridge.parentNode) {
			htmlBridge = htmlBridge.parentNode;
		}
		return htmlBridge || null;
	};
	var _reposition = function () {
		if (currentElement) {
			var pos = _getDOMObjectPosition(currentElement, _globalConfig.zIndex);
			var htmlBridge = _getHtmlBridge(flashState.bridge);
			if (htmlBridge) {
				htmlBridge.style.top = pos.top + "px";
				htmlBridge.style.left = pos.left + "px";
				htmlBridge.style.width = pos.width + "px";
				htmlBridge.style.height = pos.height + "px";
				htmlBridge.style.zIndex = pos.zIndex + 1;
			}
			if (flashState.ready === true && flashState.bridge) {
				flashState.bridge.setSize(pos.width, pos.height);
			}
		}
		return this;
	};
	ZeroClipboard.prototype.on = function (eventName, func) {
		var i, len, events, added = {}, handlers = _clientMeta[this.id] && _clientMeta[this.id].handlers;
		if (typeof eventName === "string" && eventName) {
			events = eventName.toLowerCase().split(/\s+/);
		} else if (typeof eventName === "object" && eventName && typeof func === "undefined") {
			for (i in eventName) {
				if (eventName.hasOwnProperty(i) && typeof i === "string" && i && typeof eventName[i] === "function") {
					this.on(i, eventName[i]);
				}
			}
		}
		if (events && events.length) {
			for (i = 0, len = events.length; i < len; i++) {
				eventName = events[i].replace(/^on/, "");
				added[eventName] = true;
				if (!handlers[eventName]) {
					handlers[eventName] = [];
				}
				handlers[eventName].push(func);
			}
			if (added.noflash && flashState.disabled) {
				_receiveEvent.call(this, "noflash", {});
			}
			if (added.wrongflash && flashState.outdated) {
				_receiveEvent.call(this, "wrongflash", {
					flashVersion: flashState.version
				});
			}
			if (added.load && flashState.ready) {
				_receiveEvent.call(this, "load", {
					flashVersion: flashState.version
				});
			}
		}
		return this;
	};
	ZeroClipboard.prototype.off = function (eventName, func) {
		var i, len, foundIndex, events, perEventHandlers,
			handlers = _clientMeta[this.id] && _clientMeta[this.id].handlers;
		if (arguments.length === 0) {
			events = _objectKeys(handlers);
		} else if (typeof eventName === "string" && eventName) {
			events = eventName.split(/\s+/);
		} else if (typeof eventName === "object" && eventName && typeof func === "undefined") {
			for (i in eventName) {
				if (eventName.hasOwnProperty(i) && typeof i === "string" && i && typeof eventName[i] === "function") {
					this.off(i, eventName[i]);
				}
			}
		}
		if (events && events.length) {
			for (i = 0, len = events.length; i < len; i++) {
				eventName = events[i].toLowerCase().replace(/^on/, "");
				perEventHandlers = handlers[eventName];
				if (perEventHandlers && perEventHandlers.length) {
					if (func) {
						foundIndex = _inArray(func, perEventHandlers);
						while (foundIndex !== -1) {
							perEventHandlers.splice(foundIndex, 1);
							foundIndex = _inArray(func, perEventHandlers, foundIndex);
						}
					} else {
						handlers[eventName].length = 0;
					}
				}
			}
		}
		return this;
	};
	ZeroClipboard.prototype.handlers = function (eventName) {
		var prop, copy = null, handlers = _clientMeta[this.id] && _clientMeta[this.id].handlers;
		if (handlers) {
			if (typeof eventName === "string" && eventName) {
				return handlers[eventName] ? handlers[eventName].slice(0) : null;
			}
			copy = {};
			for (prop in handlers) {
				if (handlers.hasOwnProperty(prop) && handlers[prop]) {
					copy[prop] = handlers[prop].slice(0);
				}
			}
		}
		return copy;
	};
	var _dispatchClientCallbacks = function (eventName, context, args, async) {
		var handlers = _clientMeta[this.id] && _clientMeta[this.id].handlers[eventName];
		if (handlers && handlers.length) {
			var i, len, func, originalContext = context || this;
			for (i = 0, len = handlers.length; i < len; i++) {
				func = handlers[i];
				context = originalContext;
				if (typeof func === "string" && typeof window[func] === "function") {
					func = window[func];
				}
				if (typeof func === "object" && func && typeof func.handleEvent === "function") {
					context = func;
					func = func.handleEvent;
				}
				if (typeof func === "function") {
					_dispatchCallback(func, context, args, async);
				}
			}
		}
		return this;
	};
	ZeroClipboard.prototype.clip = function (elements) {
		elements = _prepClip(elements);
		for (var i = 0; i < elements.length; i++) {
			if (elements.hasOwnProperty(i) && elements[i] && elements[i].nodeType === 1) {
				if (!elements[i].zcClippingId) {
					elements[i].zcClippingId = "zcClippingId_" + elementIdCounter++;
					_elementMeta[elements[i].zcClippingId] = [this.id];
					if (_globalConfig.autoActivate === true) {
						_addEventHandler(elements[i], "mouseover", _elementMouseOver);
					}
				} else if (_inArray(this.id, _elementMeta[elements[i].zcClippingId]) === -1) {
					_elementMeta[elements[i].zcClippingId].push(this.id);
				}
				var clippedElements = _clientMeta[this.id].elements;
				if (_inArray(elements[i], clippedElements) === -1) {
					clippedElements.push(elements[i]);
				}
			}
		}
		return this;
	};
	ZeroClipboard.prototype.unclip = function (elements) {
		var meta = _clientMeta[this.id];
		if (meta) {
			var clippedElements = meta.elements;
			var arrayIndex;
			if (typeof elements === "undefined") {
				elements = clippedElements.slice(0);
			} else {
				elements = _prepClip(elements);
			}
			for (var i = elements.length; i--;) {
				if (elements.hasOwnProperty(i) && elements[i] && elements[i].nodeType === 1) {
					arrayIndex = 0;
					while ((arrayIndex = _inArray(elements[i], clippedElements, arrayIndex)) !== -1) {
						clippedElements.splice(arrayIndex, 1);
					}
					var clientIds = _elementMeta[elements[i].zcClippingId];
					if (clientIds) {
						arrayIndex = 0;
						while ((arrayIndex = _inArray(this.id, clientIds, arrayIndex)) !== -1) {
							clientIds.splice(arrayIndex, 1);
						}
						if (clientIds.length === 0) {
							if (_globalConfig.autoActivate === true) {
								_removeEventHandler(elements[i], "mouseover", _elementMouseOver);
							}
							delete elements[i].zcClippingId;
						}
					}
				}
			}
		}
		return this;
	};
	ZeroClipboard.prototype.elements = function () {
		var meta = _clientMeta[this.id];
		return meta && meta.elements ? meta.elements.slice(0) : [];
	};
	var _getAllClientsClippedToElement = function (element) {
		var elementMetaId, clientIds, i, len, client, clients = [];
		if (element && element.nodeType === 1 && (elementMetaId = element.zcClippingId) && _elementMeta.hasOwnProperty(elementMetaId)) {
			clientIds = _elementMeta[elementMetaId];
			if (clientIds && clientIds.length) {
				for (i = 0, len = clientIds.length; i < len; i++) {
					client = _clientMeta[clientIds[i]].instance;
					if (client && client instanceof ZeroClipboard) {
						clients.push(client);
					}
				}
			}
		}
		return clients;
	};
	_globalConfig.hoverClass = "zeroclipboard-is-hover";
	_globalConfig.activeClass = "zeroclipboard-is-active";
	_globalConfig.trustedOrigins = null;
	_globalConfig.allowScriptAccess = null;
	_globalConfig.useNoCache = true;
	_globalConfig.moviePath = "ZeroClipboard.swf";
	ZeroClipboard.detectFlashSupport = function () {
		_deprecationWarning("ZeroClipboard.detectFlashSupport", _globalConfig.debug);
		return _detectFlashSupport();
	};
	ZeroClipboard.dispatch = function (eventName, args) {
		if (typeof eventName === "string" && eventName) {
			var cleanEventName = eventName.toLowerCase().replace(/^on/, "");
			if (cleanEventName) {
				var clients = currentElement ? _getAllClientsClippedToElement(currentElement) : _getAllClients();
				for (var i = 0, len = clients.length; i < len; i++) {
					_receiveEvent.call(clients[i], cleanEventName, args);
				}
			}
		}
	};
	ZeroClipboard.prototype.setHandCursor = function (enabled) {
		_deprecationWarning("ZeroClipboard.prototype.setHandCursor", _globalConfig.debug);
		enabled = typeof enabled === "boolean" ? enabled : !!enabled;
		_setHandCursor(enabled);
		_globalConfig.forceHandCursor = enabled;
		return this;
	};
	ZeroClipboard.prototype.reposition = function () {
		_deprecationWarning("ZeroClipboard.prototype.reposition", _globalConfig.debug);
		return _reposition();
	};
	ZeroClipboard.prototype.receiveEvent = function (eventName, args) {
		_deprecationWarning("ZeroClipboard.prototype.receiveEvent", _globalConfig.debug);
		if (typeof eventName === "string" && eventName) {
			var cleanEventName = eventName.toLowerCase().replace(/^on/, "");
			if (cleanEventName) {
				_receiveEvent.call(this, cleanEventName, args);
			}
		}
	};
	ZeroClipboard.prototype.setCurrent = function (element) {
		_deprecationWarning("ZeroClipboard.prototype.setCurrent", _globalConfig.debug);
		ZeroClipboard.activate(element);
		return this;
	};
	ZeroClipboard.prototype.resetBridge = function () {
		_deprecationWarning("ZeroClipboard.prototype.resetBridge", _globalConfig.debug);
		ZeroClipboard.deactivate();
		return this;
	};
	ZeroClipboard.prototype.setTitle = function (newTitle) {
		_deprecationWarning("ZeroClipboard.prototype.setTitle", _globalConfig.debug);
		newTitle = newTitle || _globalConfig.title || currentElement && currentElement.getAttribute("title");
		if (newTitle) {
			var htmlBridge = _getHtmlBridge(flashState.bridge);
			if (htmlBridge) {
				htmlBridge.setAttribute("title", newTitle);
			}
		}
		return this;
	};
	ZeroClipboard.setDefaults = function (options) {
		_deprecationWarning("ZeroClipboard.setDefaults", _globalConfig.debug);
		ZeroClipboard.config(options);
	};
	ZeroClipboard.prototype.addEventListener = function (eventName, func) {
		_deprecationWarning("ZeroClipboard.prototype.addEventListener", _globalConfig.debug);
		return this.on(eventName, func);
	};
	ZeroClipboard.prototype.removeEventListener = function (eventName, func) {
		_deprecationWarning("ZeroClipboard.prototype.removeEventListener", _globalConfig.debug);
		return this.off(eventName, func);
	};
	ZeroClipboard.prototype.ready = function () {
		_deprecationWarning("ZeroClipboard.prototype.ready", _globalConfig.debug);
		return flashState.ready === true;
	};
	var _receiveEvent = function (eventName, args) {
		eventName = eventName.toLowerCase().replace(/^on/, "");
		var cleanVersion = args && args.flashVersion && _parseFlashVersion(args.flashVersion) || null;
		var element = currentElement;
		var performCallbackAsync = true;
		switch (eventName) {
			case "load":
				if (cleanVersion) {
					if (!_isFlashVersionSupported(cleanVersion)) {
						_receiveEvent.call(this, "onWrongFlash", {
							flashVersion: cleanVersion
						});
						return;
					}
					flashState.outdated = false;
					flashState.ready = true;
					flashState.version = cleanVersion;
				}
				break;
			case "wrongflash":
				if (cleanVersion && !_isFlashVersionSupported(cleanVersion)) {
					flashState.outdated = true;
					flashState.ready = false;
					flashState.version = cleanVersion;
				}
				break;
			case "mouseover":
				_addClass(element, _globalConfig.hoverClass);
				break;
			case "mouseout":
				if (_globalConfig.autoActivate === true) {
					ZeroClipboard.deactivate();
				}
				break;
			case "mousedown":
				_addClass(element, _globalConfig.activeClass);
				break;
			case "mouseup":
				_removeClass(element, _globalConfig.activeClass);
				break;
			case "datarequested":
				var targetId = element.getAttribute("data-clipboard-target"),
					targetEl = !targetId ? null : document.getElementById(targetId);
				if (targetEl) {
					var textContent = targetEl.value || targetEl.textContent || targetEl.innerText;
					if (textContent) {
						this.setText(textContent);
					}
				} else {
					var defaultText = element.getAttribute("data-clipboard-text");
					if (defaultText) {
						this.setText(defaultText);
					}
				}
				performCallbackAsync = false;
				break;
			case "complete":
				_deleteOwnProperties(_clipData);
				break;
		}
		var context = element;
		var eventArgs = [this, args];
		return _dispatchClientCallbacks.call(this, eventName, context, eventArgs, performCallbackAsync);
	};
	if (typeof define === "function" && define.amd) {
		define(["require", "exports", "module"], function (require, exports, module) {
			_amdModuleId = module && module.id || null;
			return ZeroClipboard;
		});
	} else if (typeof module === "object" && module && typeof module.exports === "object" && module.exports) {
		_cjsModuleId = module.id || null;
		module.exports = ZeroClipboard;
	} else {
		window.ZeroClipboard = ZeroClipboard;
	}
})();
/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. Dual MIT/BSD license */

window.matchMedia || (window.matchMedia = function () {
	"use strict";

	// For browsers that support matchMedium api such as IE 9 and webkit
	var styleMedia = (window.styleMedia || window.media);

	// For those that don't support matchMedium
	if (!styleMedia) {
		var style = document.createElement('style'),
			script = document.getElementsByTagName('script')[0],
			info = null;

		style.type = 'text/css';
		style.id = 'matchmediajs-test';

		script.parentNode.insertBefore(style, script);

		// 'style.currentStyle' is used by IE <= 8 and 'window.getComputedStyle' for all other browsers
		info = ('getComputedStyle' in window) && window.getComputedStyle(style, null) || style.currentStyle;

		styleMedia = {
			matchMedium: function (media) {
				var text = '@media ' + media + '{ #matchmediajs-test { width: 1px; } }';

				// 'style.styleSheet' is used by IE <= 8 and 'style.textContent' for all other browsers
				if (style.styleSheet) {
					style.styleSheet.cssText = text;
				} else {
					style.textContent = text;
				}

				// Test if media query is true or false
				return info.width === '1px';
			}
		};
	}

	return function (media) {
		return {
			matches: styleMedia.matchMedium(media || 'all'),
			media: media || 'all'
		};
	};
}());

/*! matchMedia() polyfill addListener/removeListener extension. Author & copyright (c) 2012: Scott Jehl. Dual MIT/BSD license */
(function () {
	// Bail out for browsers that have addListener support
	if (window.matchMedia && window.matchMedia('all').addListener) {
		return false;
	}

	var localMatchMedia = window.matchMedia,
		hasMediaQueries = localMatchMedia('only all').matches,
		isListening = false,
		timeoutID = 0,    // setTimeout for debouncing 'handleChange'
		queries = [],   // Contains each 'mql' and associated 'listeners' if 'addListener' is used
		handleChange = function (evt) {
			// Debounce
			clearTimeout(timeoutID);

			timeoutID = setTimeout(function () {
				for (var i = 0, il = queries.length; i < il; i++) {
					var mql = queries[i].mql,
						listeners = queries[i].listeners || [],
						matches = localMatchMedia(mql.media).matches;

					// Update mql.matches value and call listeners
					// Fire listeners only if transitioning to or from matched state
					if (matches !== mql.matches) {
						mql.matches = matches;

						for (var j = 0, jl = listeners.length; j < jl; j++) {
							listeners[j].call(window, mql);
						}
					}
				}
			}, 30);
		};

	window.matchMedia = function (media) {
		var mql = localMatchMedia(media),
			listeners = [],
			index = 0;

		mql.addListener = function (listener) {
			// Changes would not occur to css media type so return now (Affects IE <= 8)
			if (!hasMediaQueries) {
				return;
			}

			// Set up 'resize' listener for browsers that support CSS3 media queries (Not for IE <= 8)
			// There should only ever be 1 resize listener running for performance
			if (!isListening) {
				isListening = true;
				window.addEventListener('resize', handleChange, true);
			}

			// Push object only if it has not been pushed already
			if (index === 0) {
				index = queries.push({
					mql: mql,
					listeners: listeners
				});
			}

			listeners.push(listener);
		};

		mql.removeListener = function (listener) {
			for (var i = 0, il = listeners.length; i < il; i++) {
				if (listeners[i] === listener) {
					listeners.splice(i, 1);
				}
			}
		};

		return mql;
	};
}());

(function ($) {
	"use strict";
	/**
	 * Layout module implementation.
	 * https://gitlab.namics.com/snippets/2
	 *
	 * @author  <>
	 * @namespace Tc.Module
	 * @class Layout
	 * @extends Tc.Module
	 */
	Tc.Module.Layout = Tc.Module.extend({

		init: function ($ctx, sandbox, modId) {
			this._super($ctx, sandbox, modId);
		},

		on: function (callback) {
			this.bindAll(
				"_onResizeDebounced"
			);
			this.$body = $("body");
			Utils.TcSandbox = this.sandbox;
			if (localStorage.basket && localStorage.basket !== window.location.href) {
				if (localStorage.orderForm) {
					localStorage.removeItem("orderForm");
				}
				localStorage.removeItem("basket");
			}
			$('html').removeClass("no-js").addClass("js");
			$.fn.extend({
				scrollToMe: function () {
					var offset = $(this).offset().top;
					$('html, body').animate({scrollTop: offset}, 500);
				}
			});
			this._loadDatepicker();
			this._setResizeListener();
			callback(); // !do not remove
		},

		after: function () {
			Tc.Utils.Lib.initGlossary();
			Tc.Utils.EqualHeight.addElements(this.$$('.js-equalheight'));
		},

		_loadDatepicker: function () {
			var $ctx = this.$ctx;
			Modernizr.load({
				test: Modernizr.inputtypes.date,
				nope: [
					'/etc/designs/core/frontend/assets/js/dynamic/libraries/bootstrap-datepicker.js',
					'/etc/designs/core/frontend/assets/js/dynamic/libraries/bootstrap-datepicker.languages.js',
					'/etc/designs/core/frontend/assets/css/dynamic/libraries/datepicker.css'
				],
				complete: function () {
					if (!Modernizr.inputtypes.date) {
						Tc.Utils.Lib.initDatepicker($ctx);
					}
				}
			});
		},

		_setResizeListener: function () {
			var _this = this;
			$(window).on("resize viewportchange", $.debounce(200, _this._onResizeDebounced));
		},

		_onResizeDebounced: function () {
			if (!this.$body.hasClass('cq-wcm-edit')) {
				Tc.Utils.EqualHeight.set();
			}
		}
	});
}(Tc.$));


(function ($) {
	"use strict";
	/**
	 * Accordion module implementation.
	 * https://gitlab.namics.com/snippets/2
	 *
	 * @author  <>
	 * @namespace Tc.Module
	 * @class Accordion
	 * @extends Tc.Module
	 */
	Tc.Module.Accordion = Tc.Module.extend({

		init: function ($ctx, sandbox, modId) {
			this._super($ctx, sandbox, modId);

		},

		on: function (callback) {
			var _this = this
				, autoCollapse = $('> div', _this.$ctx).data('auto-collapse')
				, firstElementOpen = $('> div', _this.$ctx).data('first-element-open')
				, $collapsedElmt = $("a.collapsed", _this.$ctx)
			;

			if (firstElementOpen) {
				$collapsedElmt.first().click();
			}

			if (autoCollapse) {
				$collapsedElmt.unbind('click').on('click', function (e) {
					var evt = $(e.target);

					if (!evt.hasClass('active')) {
						_this.$ctx.find('a.active').click();
					}
				});
			}

			callback(); // !do not remove
		},

		after: function () {
			var _this = this;

		}

	});
}(Tc.$));

(function ($) {
	"use strict";
	/**
	 * Database module implementation.
	 * https://gitlab.namics.com/snippets/2
	 *
	 * @author ewessolek <elena.wessolek@namics.com>
	 * @author sbaur <stefan.baur@namics.com>
	 * @namespace Tc.Module
	 * @class Database
	 * @extends Tc.Module
	 */
	Tc.Module.Database = Tc.Module.extend({

		init: function ($ctx, sandbox, modId) {
			this._super($ctx, sandbox, modId);
		},

		on: function (callback) {
			var _this = this;

			_this.initDatabaseFilter();

			callback(); // !do not remove
		},

		initDatabaseFilter: function () {
			var _this = this,
				$ctx = _this.$ctx;

			_this.$form = $ctx.find('.js-database-form');

			// form submit
			_this.$form.on('submit', function (e) {
				e.preventDefault();
				_this.submitForm();
			});
		},

		initDetails: function () {
			var _this = this,
				$ctx = _this.$ctx,
				$result = $ctx.find('.js-database-result'),
				$detailLink = $result.find('a');

			// show details
			$detailLink.on('click', function (e) {
				e.preventDefault();
				var target = $(e.currentTarget),
					dataUrl = target.attr('href');

				_this.loadDetails(dataUrl, $result);
			});
		},

		loadDetails: function (dataUrl, $result) {
			var _this = this,
				$ctx = _this.$ctx;

			$result.addClass('loading');

			$.ajax({
				type: 'GET',
				url: dataUrl,
				success: function (data) {
					$result.html(data).removeClass('loading');

					// go back to database
					$ctx.on('click', '.js-database-link', function () {
						_this.submitForm();
					});
				}
			});
		},

		submitForm: function () {
			var _this = this,
				attributes = _this.$form.length !== null ? 'pageIndex=' + 0 + '&' + _this.$form.serialize() : 'pageIndex=' + 0;

			this.fire('loadContent', {attributes: attributes});
		},

		onContentDone: function () {
			var _this = this;

			_this.initDetails();
		}
	});
}(Tc.$));

(function ($) {
	"use strict";
	/**
	 * Deleteresource module implementation.
	 *
	 * @author sbaur <stefan.baur@namics.com>
	 * @namespace Tc.Module
	 * @class Deleteresource
	 * @extends Tc.Module
	 */
	Tc.Module.Deleteresource = Tc.Module.extend({

		on: function (callback) {
			var $this = this,
				path = this.$ctx.data('delete-path');
			this.$resultContainer = this.$ctx.find('.result').find('.alert');

			$this.updateBodyHeight();

			$(window).load(function () {
				window.setTimeout(function () {
					if (path) {
						$this.askForDeletion(path);
					} else {
						$this.showResult('alert-danger', 'core.pages.deleteresource.message.notfound');
					}
				}, 500);
			});
			callback(); // !do not remove
		},

		askForDeletion: function (path) {
			var $this = this;
			CQ.Ext.Msg.show({
				"title": CQ.I18n.getMessage("core.pages.deleteresource.title"),
				"msg": CQ.I18n.getMessage("core.pages.deleteresource.message.confirmdeletion"),
				"buttons": CQ.Ext.Msg.YESNO,
				"icon": CQ.Ext.MessageBox.QUESTION,
				"fn": function (btnId) {
					if (btnId == "yes") {
						$this.sendDeleteRequest(path)
					} else if (btnId == "no") {
						$this.showResult('alert-warning', 'core.pages.deleteresource.message.cancel');
					}
				},
				"scope": this
			});
		},

		sendDeleteRequest: function (path) {
			var $this = this;
			var data = {
				"path": path,
				"_charset_": "utf-8",
				"cmd": "deletePage",
				"force": false
			};
			$.ajax({
				url: "/bin/wcmcommand",
				type: "POST",
				dataType: "html",
				data: data
			}).done(function (data, textStatus, jqXHR) {
				var message = $this.getMessage(data);
				if (message.indexOf('null') == 0) {
					$this.showResult('alert-danger', 'core.pages.deleteresource.message.error', 'core.pages.deleteresource.message.notfound');
					console.log(data);
				} else {
					$this.showResult('alert-success', 'core.pages.deleteresource.message.success', message);
				}
			}).fail(function (jqXHR, textStatus, errorThrown) {
				var message = $this.getMessage(jqXHR.responseText);
				$this.showResult('alert-danger', 'core.pages.deleteresource.message.error', message);
				console.log(jqXHR.responseText);
			});
		},

		getMessage: function (result) {
			return $(result).find('#Message').html();
		},

		updateBodyHeight: function () {
			var docHeight = $(document).height(),
				$body = $('body');
			if ($body.height() < docHeight) {
				$body.height(docHeight);
			}
		},

		showResult: function (type, message, details) {
			var $this = this,
				i18nMessage = '<p><strong>' + CQ.I18n.getMessage(message) + '</strong></p>',
				detailsMessage = '';
			if (details) {
				detailsMessage = '<p>' + CQ.I18n.getMessage(details) + '</p>'
			}
			$this.$resultContainer.removeClass().addClass('alert').addClass(type).html(i18nMessage + detailsMessage);
		}
	});
}(Tc.$));

(function ($) {
	"use strict";
	/**
	 * Contactbox module implementation.
	 * https://gitlab.namics.com/snippets/2
	 *
	 * @author  <>
	 * @namespace Tc.Module
	 * @class Contactbox
	 * @extends Tc.Module
	 */
	Tc.Module.Contactbox = Tc.Module.extend({
		on: function (callback) {
			this.bindAll(
				'onClickPrint'
			);
			this.$$('.js-print-contact').on('click', this.onClickPrint);
			callback(); // !do not remove
		},

		onClickPrint: function (ev) {
			ev.preventDefault();

			function printMarkup(data) {
				var windowContent = '<html><head><title>Kontakt</title>'
					+ '<link rel="stylesheet" href="/etc/designs/core/frontend/modules.css" type="text/css" />'
					+ '</head><body>'
					+ data
					+ '</body></html>';

				return windowContent;
			}

			function Popup(data) {
				if (navigator.userAgent.search(/Windows/) > 0) {
					var printWin = window.open('', '', 'height=800,width=1000');
					printWin.document.open();
					printWin.document.write(printMarkup(data));
					printWin.document.close();
					printWin.focus();
					printWin.print();
					printWin.close();
				} else {
					var mywindow = window.open('', '', 'height=800,width=1000');
					mywindow.document.write('<html><head><title>Kontakt</title>');
					mywindow.document.write('<link rel="stylesheet" href="/etc/designs/core/frontend/modules.css" type="text/css" />');
					mywindow.document.write('</head><body>');
					mywindow.document.write(data);
					mywindow.document.write('</body></html>');
					setTimeout(function () {
						mywindow.print();
						mywindow.close();
					}, 100);
				}
				return true;
			}

			var printContent = this.$$('#contact').html();
			var $contactMap = this.$$("#map");
			if ($contactMap.length) {
				var mapTitleHtml = $contactMap.find("h3").html() || "";
				var $mapImage = $contactMap.find("img").closest('p');
				var mapImageHtml = $mapImage.length ? $mapImage.get(0).outerHTML : "";
				printContent = printContent + mapTitleHtml + mapImageHtml;
			}

			new Popup(printContent);
		}
	});
}(Tc.$));
(function ($) {
	"use strict";
	/**
	 * Backtooverview
	 * https://gitlab.namics.com/snippets/2
	 *
	 * @author  <>
	 * @namespace Tc.Module
	 * @class Backtooverview
	 * @extends Tc.Module
	 */
	Tc.Module.Backtooverview = Tc.Module.extend({

		init: function ($ctx, sandbox, modId) {
			this._super($ctx, sandbox, modId);

		},

		on: function (callback) {
			var _this = this;

			_this.setReferrerToBackButton();

			callback(); // !do not remove
		},

		setReferrerToBackButton: function () {

			var _this = this,
				$ctx = _this.$ctx,
				backLink = $ctx.find('a'),
				hostPath = location.protocol + '//' + location.host,
				backLinkPath = backLink.eq(0).attr('href'),
				newBackPath = document.referrer.replace(hostPath, '');

			if (document.referrer.indexOf(backLinkPath) > -1) {
				backLink.each(function (i, v) {
					$(v).attr('href', backLinkPath + newBackPath.replace(backLinkPath, '').replace('/content?', '?'));
				});

			}
		},

		after: function () {
			var _this = this;
		}

	});
}(Tc.$));
(function ($) {
	"use strict";
	/**
	 * Tabs module implementation.
	 * https://gitlab.namics.com/snippets/2
	 *
	 * @author  <>
	 * @namespace Tc.Module
	 * @class Tabs
	 * @extends Tc.Module
	 */
	Tc.Module.Tabs = Tc.Module.extend({

		init: function ($ctx, sandbox, modId) {
			this._super($ctx, sandbox, modId);
		},

		on: function (callback) {
			var _this = this;

			callback(); // !do not remove
		},

		after: function () {
			var _this = this;

			//check if cq editmode class is available
			if ($("body").hasClass("skin-layout-editmode")) {
				//_this._initEditModeTabs();
			}

		},
		_initEditModeTabs: function () {
			var _this = this;
			$(".tabs-list a", _this.$ctx).first().addClass("current");
			$(".tabbody", _this.$ctx).first().addClass("current");
			$(".tabs-list a", _this.$ctx).click(function (event) {

				var contentId = $(this).attr("href");
				// remove all current classes from tabbody
				$(".tabbody", _this.$ctx).each(function () {
					$(this).removeClass("current");
				});
				// add current class toactive tab
				$(contentId, _this.$ctx).next(".tabbody").addClass("current");
			});
			//Trigger click on first tab navigation link
		}


	});
}(Tc.$));

(function ($) {
	"use strict";
	/**
	 * Themes module implementation.
	 * https://gitlab.namics.com/snippets/2
	 *
	 * @author  <>
	 * @namespace Tc.Module
	 * @class Themes
	 * @extends Tc.Module
	 */
	Tc.Module.Themes = Tc.Module.extend({

		init: function ($ctx, sandbox, modId) {
			this._super($ctx, sandbox, modId);

		},

		on: function (callback) {
			var _this = this;
			callback(); // !do not remove

			$(".tabs-list a", _this.$ctx).click(function (event) {
				$('.enhanced_select_scroll.is_open').removeClass('is_open').hide().click();
			});

			// Trigger tab when themes select field open
			$(".yamm--select").on("show.bs.dropdown", function () {
				$('li:not(.disabled) a[data-toggle="tab"]:first', _this.$ctx).tab('show').trigger('show.bs.tab');
			});
			_this._initTabEvents();
			_this._initSelectEvents();

		},

		after: function () {
			var _this = this;
		},
		_initTabEvents: function () {
			var _this = this;

			$('a[data-toggle="tab"]', _this.$ctx).unbind('show.bs.tab').on('show.bs.tab', function (e) {
				var url = $(e.target).data("url")
					, tabId = $(e.target).attr("href");
				url = url || "";

				if ($("body").hasClass("skin-layout-author")) {
					url += url.indexOf('?') == -1 ? "?wcmmode=disabled" : "&wcmmode=disabled";
				}

				//console.log("e.target: ", e.target); // newly activated tab
				//console.log("e.relatedTarget: ", e.relatedTarget); // previous active tab

				//check if content is already loaded
				if ($(tabId).children().length === 0) {
					var modules = [];
					$(tabId).addClass("loading");
					$.ajax(url)
						.done(function (data) {
							//alert( "success" );
							$(tabId).html(data);
							modules = _this.sandbox.addModules($(tabId));
							_this._initTabEvents();
							_this._initSelectEvents();

							if (window.BIT_ETRACKER) {
								BIT_ETRACKER.addEvents(_this.$ctx);
							}
						})
						.fail(function () {
							//alert( "error" );
						})
						.always(function () {
							//alert( "complete" );
							$(tabId).removeClass("loading");
						});
				}
			});
		},
		_initSelectEvents: function () {
			var _this = this
				, $select = $("select", _this.$ctx);
			$select.chosen({
				disable_search_threshold: 10
			});
			$select.unbind('change').change(function () {
				var url = $("option:selected", this).val();
				url = url || "";
				if ($("body").hasClass("skin-layout-author")) {
					url += url.indexOf('?') == -1 ? "?wcmmode=disabled" : "&wcmmode=disabled";
				}
				var modules = [];
				var $dContent = $(".tab-pane:visible", _this.$ctx).find(".dynamic-content");
				$dContent.addClass("loading");
				$.ajax(url)
					.done(function (data) {
						//alert( "success" );
						$dContent.html(data);
						modules = _this.sandbox.addModules($dContent);
					})
					.fail(function () {
						//alert( "error" );
					})
					.always(function () {
						//alert( "complete" );
						$dContent.removeClass("loading");
					});
			});

		}

	});
}(Tc.$));
(function ($) {
	"use strict";
	/**
	 * Form module implementation.
	 * https://gitlab.namics.com/snippets/2
	 *
	 * @author  <>
	 * @namespace Tc.Module
	 * @class Form
	 * @extends Tc.Module
	 */
	Tc.Module.Form = Tc.Module.extend({

		init: function ($ctx, sandbox, modId) {
			this._super($ctx, sandbox, modId);


		},

		on: function (callback) {
			var _this = this;
			_this.bindAll(
				"_formatErrors"
			);

			_this._checkForErrors();
			callback(); // !do not remove
		},

		after: function () {
			var _this = this;
		},

		_checkForErrors: function () {
			var _this = this,
				$errors = this.$$('.form_error');
			if ($errors.length) {
				$errors.each(_this._formatErrors);
			}
		},

		_formatErrors: function (i, el) {
			var _this = this;

			$(el).closest(".form-group").addClass("has-warning");
			if (i === 0) {
				_this._focusError(el)
			}
		},

		_focusError: function (el) {
			$(el).closest(".form-group").find('input,select').focus();
		}

	});
}(Tc.$));

(function ($) {
	"use strict";
	/**
	 * Teaserfocus module implementation.
	 * https://gitlab.namics.com/snippets/2
	 *
	 * @author tmay <thomas.may@namics.com>
	 * @namespace Tc.Module
	 * @class Teaserfocus
	 * @extends Tc.Module
	 */
	Tc.Module.Teaserfocus = Tc.Module.extend({

		init: function ($ctx, sandbox, modId) {
			this._super($ctx, sandbox, modId);

		},

		on: function (callback) {
			var $contentContainer = this.$$('.tab-content'),
				$tabContainer = this.$$('.nav-tabs');
			if ($contentContainer && $contentContainer.length && $tabContainer && $tabContainer.length) {
				if ($contentContainer.offset().top === $tabContainer.offset().top) {
					$tabContainer.addClass('js-equalheight-element');
				}
				Tc.Utils.EqualHeight.addElements(this.$$('.js-tab-equalheight'));
				this.$ctx.imagesLoaded(this.setTabHeight);
			}
			callback(); // !do not remove
		},

		after: function () {
		},

		setTabHeight: function () {
			Tc.Utils.EqualHeight.set();
		}
	});
}(Tc.$));

(function ($) {
	"use strict";
	/**
	 * Mainnavigation module implementation.
	 * https://gitlab.namics.com/snippets/2
	 *
	 * @author  <>
	 * @namespace Tc.Module
	 * @class Mainnavigation
	 * @extends Tc.Module
	 */
	Tc.Module.Mainnavigation = Tc.Module.extend({

		init: function ($ctx, sandbox, modId) {
			this._super($ctx, sandbox, modId);


		},

		on: function (callback) {
			var _this = this;

			//load flyout content a bit after the page was loaded
			setTimeout(function () {
				_this.loadFlyoutContent();
			}, 100);

			callback(); // !do not remove
		},

		after: function () {

		},
		/**
		 * on page load, trigger ajax requests to fetch the flyout content and prepare the html structure
		 * on click, initialize the modules through the sandbox
		 */
		loadFlyoutContent: function () {
			var _this = this;
			$("li.dropdown", this.$ctx).each(function () {
				var $li = $(this),
					$a = $li.children("a.dropdown-toggle").first(),
					dataUrl = $a.data("url") || "",
					$container = $("ul.dropdown-menu > li > div.yamm-content > div.row > div.main-column", $li);

				if (dataUrl && $container.children().length === 0) {
					var $fluidContainer = _this.$ctx.find('.container-fluid'),
						loadingClass = 'loading',
						initializedClass = 'initialized';

					if ($("body").hasClass("skin-layout-author")) {
						dataUrl += dataUrl.indexOf('?') == -1 ? "?wcmmode=disabled" : "&wcmmode=disabled";
					}

					$fluidContainer.addClass(loadingClass);

					$.ajax({
						type: "GET",
						url: dataUrl,
						success: function (data) {
							//store ajax content into the correct position
							$container.html(data);

							//wait for click to trigger modules sandbox init
							$li.on('click', function () {
								if (!$container.hasClass(initializedClass)) {
									$container.addClass(initializedClass);

									//wait for the menu to open, then init modules
									setTimeout(function () {
										$fluidContainer.removeClass(loadingClass);
										_this.sandbox.addModules($container);

										if (window.BIT_ETRACKER) {
											BIT_ETRACKER.addEvents(_this.$ctx);
										}

									}, 0);

								}
							});

						},
						error: function () {
							$fluidContainer.removeClass(loadingClass);
						}
					});
				}
			});
		}
	});
}(Tc.$));

(function ($) {
	"use strict";
	/**
	 * FormWebcode module implementation.
	 * https://gitlab.namics.com/snippets/2
	 *
	 * @author  <>
	 * @namespace Tc.Module
	 * @class FormWebcode
	 * @extends Tc.Module
	 */
	Tc.Module.FormWebcode = Tc.Module.extend({

		init: function ($ctx, sandbox, modId) {
			this._super($ctx, sandbox, modId);
		},

		on: function (callback) {
			this.bindAll(
				"onFormSubmit"
			);
			this.$$("form").on("submit", this.onFormSubmit);
			callback(); // !do not remove
		},

		after: function () {

		},

		onFormSubmit: function (ev) {
			var _this = this,
				$body = $("body"),
				$form = $(ev.currentTarget),
				formData = $form.serialize(),
				formError = $form.data("error"),
				url = $form.attr("action") + "?" + formData;
			ev.preventDefault();
			_this.showError("", $form);
			$.ajax({
				url: url + ($body.is(".cq-wcm-edit") || $body.is(".cq-wcm-preview") ? "&wcmmode=disabled" : ""),
				type: 'GET',
				beforeSend: function (xhr) {
					xhr.overrideMimeType('text/plain; charset=UTF-8');
				},
				success: function () {
					$("p.error", _this.$ctx).remove();
					window.location = url;
				},
				error: function () {
					_this.showError(formError, $form);
				}
			});
		},

		showError: function (formError, $form) {
			var _this = this;

			if ($("p.error", _this.$ctx).length !== 0) {
				$("p.error", _this.$ctx).html(formError);
			}
			else {
				$form.after("<p class='error'>" + formError + "</p>");
			}
		}


	});
}(Tc.$));

(function ($) {
	"use strict";
	/**
	 * OneLineForm module implementation.
	 * https://gitlab.namics.com/snippets/2
	 *
	 * @author sbartels <sebastian.bartels@namics.com>
	 * @contributors tmay <thomas.may@namics.com>
	 * @namespace Tc.Module
	 * @class OneLineForm
	 * @extends Tc.Module
	 */
	Tc.Module.OneLineForm = Tc.Module.extend({
		init: function ($ctx, sandbox, modId) {
			this._super($ctx, sandbox, modId);
		},

		on: function (callback) {
			this.bindAll(
				"onSubmitForm",
				"onChangeQuantity"
			);
			this.initForm();
			callback(); // !do not remove
		},
		initForm: function () {
			if ($("html").hasClass("no-localstorage")) {
				this.$$(".js-form-group").html(this.template(this.$$("#onelineform-error-template").html(), {"error": "no-cookie"}));
			} else {
				this.$quantity = this.$$(".js-quantity");
				this.sandbox.subscribe("Basket", this);
				this.$quantity.val(this.$quantity.attr("min"));
				this.$quantity.on("change", this.onChangeQuantity).trigger("change");
				this.$$(".js-one-line-form").on("submit", this.onSubmitForm);
			}
		},
		onSubmitForm: function (ev) {
			ev.preventDefault();
			this.amountValidation();
			if (!$(ev.currentTarget).is(":disabled")) {
				this.saveDataStorage();
				this.fire("ShowDataStorage");
			}
		},
		onChangeQuantity: function (ev) {
			this.amount = parseInt($(ev.currentTarget).val());
			this.amountValidation();
		},
		amountValidation: function () {
			var minAmount = parseInt(this.$quantity.attr("min"), 10)
				, maxAmount = parseInt(this.$quantity.attr("max"), 10)
			;

			if (this.amount < minAmount && this.amount < maxAmount) {
				this.$$(".js-error-container").html(this.template(this.$$("#onelineform-error-template").html(), {"error": "min"}));
				this.$$("#submit").prop("disabled", true);
			} else if (this.amount > maxAmount) {
				this.$$(".js-error-container").html(this.template(this.$$("#onelineform-error-template").html(), {"error": "max"}));
				this.$$("#submit").prop("disabled", true);
			} else {
				this.$$(".js-error-container").empty();
				this.$$("#submit").prop("disabled", false);
			}
		},
		saveDataStorage: function () {
			// Find Product Text for the Storage and add to a Array
			var product = this.$$("input[name='productTitle']").val()
				, productIntern = this.$$("input[name='productId']").val()
				, orderForm = JSON.parse(localStorage.getItem("orderForm")) || []
				, isProcuctInList = false
				, i
			;

			for (i = 0; i < orderForm.length; i++) {
				// Check if current product already is in order list
				if (orderForm[i].productId === productIntern) {
					orderForm[i].quantity = parseInt(orderForm[i].quantity) + parseInt(this.amount);
					isProcuctInList = true;
					break;
				}
			}
			// Add the product as new item if it is not in list
			if (!isProcuctInList) {
				orderForm.push({
					"id": (orderForm.length + 1),
					"productTitle": product,
					"productId": productIntern,
					quantity: this.amount
				});
			}

			// Read Localstorage with key orderForm
			localStorage.orderForm = JSON.stringify(orderForm);
		},
		after: function () {
		}
	});
}(Tc.$));

(function ($) {
	"use strict";
	/**
	 * Basket module implementation.
	 * https://gitlab.namics.com/snippets/2
	 *
	 * @author sbartels <sebastian.bartels@namics.com>
	 * @namespace Tc.Module
	 * @class Basket
	 * @extends Tc.Module
	 */
	Tc.Module.Basket = Tc.Module.extend({

		init: function ($ctx, sandbox, modId) {
			this._super($ctx, sandbox, modId);
		},

		on: function (callback) {
			// Trigger Connect
			this.sandbox.subscribe("Basket", this);
			this.isBasket();
			this.showDataStorage();
			this.deleteDataStorage();
			this.showBasketLink();
			callback(); // !do not remove
		},
		isBasket: function () {
			if ($(".mod-orderform").length && !this.$ctx.parent().hasClass("mod-orderform")) {
				this.$ctx.hide();
			}
			if (this.$ctx.parent().hasClass("mod-orderform")) {
				this.$ctx.parent(".mod-orderform").parents("form").submit(function () {
					localStorage.basket = window.location.href;
				});
			}
		},
		onShowDataStorage: function () {
			this.showDataStorage();
			this.showBasketLink();
		},
		showDataStorage: function () {
			var dataStorage = localStorage.orderForm
				, data
			;
			if (dataStorage) {
				data = {
					"data": $.parseJSON(localStorage.getItem("orderForm"))
				};
				this.$ctx.find('.js-order-list').html(this.template(this.$ctx.find('#order-list-template').html(), data));
			}
			this.writeGenericField();
		},
		writeGenericField: function () {
			var mod = this
				, xallAttributes = ""
				, $el
			;
			if (mod.$ctx.parent().hasClass("mod-orderform")) {
				$(".order-list input[name^='order_']", mod.$ctx).each(function (i, el) {
					$el = $(el);
					xallAttributes += $el.attr("name") + "=" + $el.attr("value") + ",";
				});
				xallAttributes = xallAttributes.slice(0, -1);
				if ($("input.orderform-input", mod.$ctx).length) {
					$("input.orderform-input", mod.$ctx).val(xallAttributes);
				} else {
					mod.$ctx.append("<input name='orderform' class='orderform-input' type='hidden' value='" + xallAttributes + "'>");
				}
			}
		},
		showBasketLink: function () {
			var mod = this
				, basketLink = $(".basket-link", mod.$ctx)
				, error = $(".error.empty", mod.$ctx)
			;
			if ($(".order-list", mod.$ctx).find("li").length) {
				if (mod.$ctx.parent().hasClass("mod-orderform")) {
					mod.$ctx.show();
				} else if (!$(".mod-orderform").length) {
					mod.$ctx.show();
				}
				basketLink.show();
				if (mod.$ctx.parent().hasClass("mod-orderform")) {
					error.hide();
				}
			} else {
				basketLink.hide();
				if (mod.$ctx.parent().hasClass("mod-orderform")) {
					error.show();
				} else {
					mod.$ctx.hide();
				}
			}
		},
		deleteDataStorage: function () {
			var mod = this
				, i
				, domId
				, json
				, $el
			;
			$(".order-list", mod.$ctx).on("click", ".storage-delete", function (e) {
				e.preventDefault();
				$el = $(this);
				domId = $el.closest("li").attr("id");
				json = JSON.parse(localStorage.orderForm);
				$el.closest("li").remove();

				for (i = 0; i < json.length; i++) {
					if (json[i].id === parseInt(domId)) {
						json.splice(i, 1);
					}
				}
				localStorage.orderForm = JSON.stringify(json);
				mod.showBasketLink();
				mod.writeGenericField();
			});

		},
		after: function () {
		}
	});
}(Tc.$));
(function ($) {
	"use strict";
	/**
	 * Externalcontent module implementation.
	 * https://gitlab.namics.com/snippets/2
	 *
	 * @author  <>
	 * @namespace Tc.Module
	 * @class Externalcontent
	 * @extends Tc.Module
	 */
	Tc.Module.Externalcontent = Tc.Module.extend({

		init: function ($ctx, sandbox, modId) {
			this._super($ctx, sandbox, modId);


		},

		on: function (callback) {
			var _this = this,
				$ctx = _this.$ctx;


			callback(); // !do not remove
		},

		after: function () {
			var _this = this;
			_this.dataUrl = $(".content", _this.$ctx).data("url");
			_this.loadContent(_this.dataUrl);

		},
		loadContent: function (url, attributes, type) {
			url = url || "";
			var _this = this,
				aUrl = attributes !== undefined && attributes !== null ? url + attributes : url;

			type = type !== undefined ? type : "GET";

			if ($("body").hasClass("skin-layout-author")) {
				aUrl += aUrl.indexOf('?') == -1 ? "?wcmmode=disabled" : "&wcmmode=disabled";
			}

			if (aUrl) {
				$.ajax({
					type: type,
					url: aUrl
				}).done(function (data) {
					$(".content", _this.$ctx).html(data);
					_this._bindClickEvents();
				});
			}

		},
		_bindClickEvents: function () {
			var _this = this;
			$("a", _this.$ctx).unbind("click").on("click", function (event) {
				var url = $(this).attr("href");
				//only load normal links via ajax. let downloads through
				if (_this.isNormalLink(url) && !$(this).is('[download]')) {
					_this.loadContent(url);
					event.preventDefault();
				}
			});
			$("form", _this.$ctx).unbind("submit").on("submit", function (event) {
				var method = $(this).attr("method");
				var url = $(this).attr("action")
					, parameter = $(this).serialize();
				_this.loadContent(url + "?" + parameter, null, method);
				event.preventDefault();
			});
		},
		stringContains: function (str, search) {
			return str.indexOf(search) !== -1;
		},
		stringContainsAny: function (str, strArray) {
			for (var i = 0; i < strArray.length; i++) {
				if (this.stringContains(str, strArray[i])) {
					return true;
				}
			}
			return false;
		},
		stringEndsWith: function (str, suffix) {
			return str.indexOf(suffix, str.length - suffix.length) !== -1;
		},
		isNormalLink: function (url) {
			return this.stringEndsWith(url, ".html");
		}
	});
}(Tc.$));

(function ($) {
	"use strict";
	/**
	 * Search module implementation.
	 * https://gitlab.namics.com/snippets/2
	 *
	 * @author  <>
	 * @namespace Tc.Module
	 * @class Search
	 * @extends Tc.Module
	 */
	Tc.Module.Search = Tc.Module.extend({

		init: function ($ctx, sandbox, modId) {
			var _this = this;
			this._super($ctx, sandbox, modId);

			this.$searchbox = $("form.search-box", _this.$ctx);
			this.dataUrl = this.$searchbox.data("url");
			this.content = this.$searchbox.data("content");
			this.documents = this.$searchbox.data("documents");
			this.validationMsg = "";
			this.minLength = 0;

			// add jquery rule for detecting double whitespaces
			// prevents user from using whitespaces to make an empty search
			jQuery.validator.addMethod("noDoubleSpace", function (value, element) {
				return value.indexOf("  ") < 0;
			});
		},

		on: function (callback) {
			var _this = this;
			_this._readHash();

			_this.$searchbox.submit(function (event) {
				event.preventDefault();
			});

			callback(); // !do not remove
		},

		after: function () {
			var _this = this;
			_this._initValidation();
			_this._setCurrentDate();
			//$( ".form", _this.$ctx).submit();

		},

		buildQueryUrl: function (searchGetParam, content, dataUrl) {
			return dataUrl + "." + content + ".html?_charset_=UTF-8&search=" + encodeURIComponent(searchGetParam);
		},

		startAjaxRequest: function (type) {
			var _this = this;
			var search = $("#inputSearch", _this.$ctx).val();
			$(_this.$ctx).addClass("loading");
			$('#totalResults', _this.$ctx).html("0");
			$("#contentPagesDynamicContent, #documentsDynamicContent", _this.$ctx).addClass("loading");
			$.when(
				$.get(this.buildQueryUrl(search, _this.content, _this.dataUrl), function (data) {
					$("#contentPagesDynamicContent", _this.$ctx).html(data).removeClass("loading");
				}),
				$.get(this.buildQueryUrl(search, _this.documents, _this.dataUrl), function (data) {
					$("#documentsDynamicContent", _this.$ctx).html(data).removeClass("loading");
				})
			).then(function () {
				_this._resetFilter();
				_this._initPagination();
				_this._initFilter();
				_this._writeHash(search);
				_this._countTotalResults();
				$(_this.$ctx).removeClass("loading");
				$("#searchResults", _this.$ctx).show();
				if (window.BIT_ETRACKER && BIT_ETRACKER.trackSearch) {
					BIT_ETRACKER.trackSearch(_this.$ctx);
				}
			});
		},

		loadPage: function (page, type, attributes) {
			var _this = this
				,
				search = $(".tab-pane.active .dynamic-content input[name='search']").val() || $("#inputSearch", _this.$ctx).val()
				, nAttributes = attributes !== undefined ? "&" + attributes : ""
			;

			var paginationPortion = "&page=" + page + nAttributes;

			if (type === 'contentPages') {
				$("#contentPagesDynamicContent", _this.$ctx).addClass("loading");
				$.get(this.buildQueryUrl(search, _this.content, _this.dataUrl) + paginationPortion, function (data) {
					$("#contentPagesDynamicContent", _this.$ctx).html(data).removeClass("loading");
					_this._initPagination();
					_this._initFilter();
					_this._countTotalResults();
				});
			}
			if (type === 'documentsPages') {
				$("#documentsDynamicContent", _this.$ctx).addClass("loading");
				$.get(this.buildQueryUrl(search, _this.documents, _this.dataUrl) + paginationPortion, function (data) {
					$("#documentsDynamicContent", _this.$ctx).html(data).removeClass("loading");
					_this._initPagination();
					_this._initFilter();
					_this._countTotalResults();
				});
			}
		},

		_initValidation: function () {

			var _this = this;
			var search = $("form #inputSearch", _this.$ctx);
			_this.validationMsg = search.data("message");
			_this.minLength = search.data("minlength");

			$("form", _this.$ctx).validate({
				errorContainer: "#errorMessage",
				errorLabelContainer: "#errorMessage ul",
				wrapper: "li",
				submitHandler: function (form) {
					_this.startAjaxRequest(0, '');
				},
				rules: {
					searchField: {
						noDoubleSpace: true,
						required: true,
						minlength: _this.minLength
					}
				},
				messages: {
					searchField: {
						noDoubleSpace: _this.validationMsg,
						required: _this.validationMsg,
						minlength: _this.validationMsg
					}
				}
			});
		},
		_initFilter: function () {
			var _this = this;
			$(".search-filter-form button", _this.$ctx).unbind("click").on("click", function (event) {
				var loadPage = 0
					, type = $(this).closest(".tab-pane").attr("id")
					, attributes = $(this).closest(".search-filter-form").serialize()
				;

				if (type === undefined) {
					var dynamicType = $(this).closest(".search-filter-form").attr("id");
					if (dynamicType === "pagesForm") {
						type = "contentPages";
					}
					if (dynamicType === "documentsForm") {
						type = "documentsPages";
					}
				}
				_this.loadPage(loadPage, type, attributes);
				event.preventDefault();
			});

		},
		_initPagination: function () {
			var _this = this;
			$(".pagination li:not(.active) a", _this.$ctx).unbind("click").on("click", function (event) {
				var loadPage = $(this).data("loadpage")
					, type = $(this).closest(".tab-pane").attr("id");

				if (type === undefined) {
					var dynamicType = $(this).closest(".dynamic-content").attr("id");
					if (dynamicType === "contentPagesDynamicContent") {
						type = "contentPages";
					}
					if (dynamicType === "documentsDynamicContent") {
						type = "documentsPages";
					}
				}
				_this.hiddenAttributes = "";
				$(this).closest(".tab-pane").find("input[type=hidden]").each(function () {
					_this.hiddenAttributes += ($(this).attr("name") + "=" + $(this).attr("value") + "&");
				});
				$(this).closest(".collapse").find("input[type=hidden]").each(function () {
					_this.hiddenAttributes += ($(this).attr("name") + "=" + $(this).attr("value") + "&");
				});
				_this.hiddenAttributes = _this.hiddenAttributes.slice(0, -1);
				var attributes = _this.hiddenAttributes !== undefined || _this.hiddenAttributes !== "" ? _this.hiddenAttributes : undefined;
				_this.loadPage(loadPage, type, attributes);
				event.preventDefault();
			});
		},
		_writeHash: function (searchString) {
			var encodeSearchString = encodeURIComponent(searchString);
			if (window.location.hash !== encodeSearchString) {
				window.location.hash = encodeSearchString;
			}
		},
		_readHash: function () {
			var _this = this
				, searchString = window.location.hash.replace("#", "")
				, decodeSearchString = decodeURIComponent(searchString)
			;

			if (decodeSearchString && decodeSearchString !== "contentPages" && decodeSearchString !== "documentsPages") {
				var url = _this.dataUrl + ".results.html?_charset_=UTF-8&search=" + decodeSearchString;
				$.get(url, function () {
					$("#inputSearch", _this.$ctx).val(decodeSearchString);
					_this.$searchbox.submit();
				});
			}
		},
		_setCurrentDate: function () {
			var _this = this
				, today = new Date()
				, dd = today.getDate()
				, mm = today.getMonth() + 1 //January is 0!
				, yyyy = today.getFullYear();

			if (dd < 10) {
				dd = '0' + dd;
			}

			if (mm < 10) {
				mm = '0' + mm;
			}

			today = yyyy + "-" + mm + "-" + dd;
			$("#newsForm input[name=endDate]", _this.$ctx).val(today);
		},
		_countTotalResults: function () {
			var _this = this
				, totalResults = 0;
			$(".dynamic-content .pg-bottom", _this.$ctx).each(function () {
				totalResults += $(this).data("results");
			});
			if ($(document).width() < "768") {
				totalResults = 0;
				$(".nav.collapsify .dynamic-content .pg-bottom", _this.$ctx).each(function () {
					totalResults += $(this).data("results");
				});
			}
			$("#totalResults", _this.$ctx).html(totalResults);
		},
		_resetFilter: function () {
			var _this = this
				, $startDate = $("#newsForm input[name=startDate]", _this.$ctx)
				, $datepicker = $("#newsForm input[name=startDate]", _this.$ctx).next(".is-datepicker");
			$(".search-filter-form", _this.$ctx).each(function () {
				$("input[type='radio']", this).first().trigger("click");
			});
			$startDate.val($startDate.data("initial-value"));
			//is datepicker plugin in use (firefox/internet explorer)
			if ($datepicker.length !== 0) {
				$datepicker.datepicker('setDates', new Date($startDate.data("initial-value")));
			}
			_this._setCurrentDate();
			$(".nav-tabs li:first a", _this.$ctx).trigger("click");
		}

	});
}(Tc.$));

(function ($) {
	"use strict";
	/**
	 * Slideshow module implementation.
	 * https://gitlab.namics.com/snippets/2
	 *
	 * @author  tmay <thomas.may@namics.com>
	 * @namespace Tc.Module
	 * @class Slideshow
	 * @extends Tc.Module
	 */
	Tc.Module.Slideshow = Tc.Module.extend({

		init: function ($ctx, sandbox, modId) {
			this._super($ctx, sandbox, modId);
		},

		on: function (callback) {
			this.setSlideshowOptions(this.$$(".carousel"));
			callback(); // !do not remove
		},

		after: function () {

		},

		setSlideshowOptions: function ($el) {
			$el.carousel({
				interval: $el.data("time")
			});
		}

	});
}(Tc.$));
(function ($) {
	"use strict";
	/**
	 * Gallery module implementation.
	 * https://gitlab.namics.com/snippets/2
	 *
	 * @author  <>
	 * @namespace Tc.Module
	 * @class Imagegallery
	 * @extends Tc.Module
	 */
	Tc.Module.Imagegallery = Tc.Module.extend({

		init: function ($ctx, sandbox, modId) {
			this._super($ctx, sandbox, modId);

		},

		on: function (callback) {
			/*this.bindAll(
			 "_positionMagnifier"
			 );*/
			var _this = this;
			this.images = [];
			this.activeImage = -1;
			this.activeURL = null;
			this.prevImage = null;
			this.nextImage = null;

			this.preload = {};

			//DOM ELEMENTS
			this.$singleContainer = $(".single-view", this.$ctx);
			this.$prevPager = $(".pager_prev a", _this.$singleContainer);
			this.$nextPager = $(".pager_next a", _this.$singleContainer);
			this.$image = $("img", _this.$singleContainer);
			this.$description = $(".description", _this.$singleContainer);
			this.$closer = $("a.close-sv", _this.$singleContainer);

			_this._initGallery();

			callback(); // !do not remove
		},

		after: function () {
			var _this = this;
			//$(window).on("resize", $.debounce(200, _this._positionMagnifier));
		},

		_initGallery: function () {
			var _this = this;
			_this._linkMapper();
			//_this._positionMagnifier();
			_this._lightboxNavigation();
			//_this.$ctx.imagesLoaded(_this._positionMagnifier);
		},
		_lightboxNavigation: function () {
			var _this = this;
			$(".pagination .disabled a", _this.$ctx).click(function (e) {
				e.preventDefault();
			});
			$(".modal .carousel-control", _this.$ctx).click(function (e) {
				var currentIndex = $(this).closest(".col-sm-3").index()
					, imagesCount = $(this).closest(".row").children(".col-sm-3").length
					, isLeft = $(this).hasClass("left")
					, isRight = $(this).hasClass("right")
					, newIndex
					, $currentModal = $(this).closest(".modal")
					, parentWrapper
				;
				if (isLeft) {
					//current image = first image?
					if (currentIndex === 0) {
						newIndex = imagesCount - 1;
					} else {
						newIndex = currentIndex - 1;
					}

				} else if (isRight) {
					//current image last image?
					if (currentIndex + 1 === imagesCount) {
						newIndex = 0;
					} else {
						newIndex = currentIndex + 1;
					}
				}
				$currentModal.removeClass("fade").modal('hide').addClass("fade");
				parentWrapper = $(".gallery-view .col-sm-3", _this.$ctx).get(newIndex);
				$(parentWrapper).find(".modal").removeClass("fade").modal('show').addClass("fade");


				e.preventDefault();
			});

		},
		_positionMagnifier: function () {
			this.$$(".thumbnail").each(function () {
				var $img = $("img", this),
					$icon = $(".fa.fa-search", this),
					$figure = $("figure", this),
					bottom = $figure.height() - $img.height(),
					right = $figure.width() - $img.width();

				if ($icon.length) {
					if (bottom !== 0) {
						bottom = (bottom / 2) - 1;
					}
					if (right !== 0) {
						right = (right / 2) - 1;
					}
					$icon.css({
						bottom: bottom,
						right: right
					});
				}
			});
		},

		_linkMapper: function () {
			var _this = this
				, $galleryEl = $(".gallery-single", _this.$ctx)
			;

			$galleryEl.each(function () {
				var $modal = $(this).siblings(".modal")
					, description = $(".modal-body .lbContent", $modal).html()
					, link = $modal.find("img").attr("src")
					, title = $modal.find(".modal-title").html()
					, alt = $modal.find("img").attr("alt")
				;
				_this.images.push([link, title, description, alt]);
			});

			$galleryEl.unbind("click").click(function (e) {
				var elementIndex = $galleryEl.index(this);
				return _this.changeImage(elementIndex);
				e.preventDefault();
			});
		},
		changeImage: function (imageIndex) {
			var _this = this;
			if (imageIndex >= 0) {
				_this.activeImage = imageIndex;
				_this.activeURL = _this.images[_this.activeImage][0];
				_this.prevImage = (_this.activeImage || 0) - 1;
				_this.nextImage = ((_this.activeImage + 1) % _this.images.length) || -1;

				_this.preload = new Image();
				_this.preload.onload = _this._adjustMarkup();
				_this.preload.src = _this.activeURL;

			}

			return false;
		},
		next: function () {
			return this.changeImage(this.nextImage);
		},
		prev: function () {
			return this.changeImage(this.prevImage);
		},
		close: function () {
			var _this = this;
			if ($(_this.$ctx).hasClass("detail-view")) {
				$(_this.$ctx).removeClass("detail-view");
//				_this.$ctx.height("auto");
			}
		},

		_adjustMarkup: function () {

//			this.$ctx.height("auto");

			var _this = this
				, el = _this.images[_this.activeImage]
				, singleViewHeight = _this.$singleContainer.height()
				, headline = el[1] !== undefined ? "<h3>" + el[1] + "</h3>" : ""
			;
//			_this.$ctx.height(singleViewHeight);
			_this.$image.attr("src", _this.activeURL).attr("alt", el[3]);
			_this.$description.html(headline).append(el[2]);

			if (_this.prevImage === -1) {
				_this.$prevPager.parent("li").hide();
			} else {
				_this.$prevPager.parent("li").show();
			}
			if (_this.nextImage === -1) {
				_this.$nextPager.parent("li").hide();
			} else {
				_this.$nextPager.parent("li").show();
			}
			_this.$prevPager.unbind("click").click(function () {
				return _this.prev();
			});
			_this.$nextPager.unbind("click").click(function () {
				return _this.next();
			});
			_this.$closer.unbind("click").click(function (event) {
				_this.close();
				event.preventDefault();
			});

			if (!$(_this.$ctx).hasClass("detail-view")) {
				$(_this.$ctx).addClass("detail-view");
			}

		}

	});
}(Tc.$));
(function ($) {
	"use strict";
	/**
	 * Searchfield module implementation.
	 * https://gitlab.namics.com/snippets/2
	 *
	 * @author  <>
	 * @namespace Tc.Module
	 * @class Searchfield
	 * @extends Tc.Module
	 */
	Tc.Module.Searchfield = Tc.Module.extend({

		init: function ($ctx, sandbox, modId) {
			this._super($ctx, sandbox, modId);

		},

		on: function (callback) {
			var _this = this;
			this.$$('.form-search .search-field').typeahead('destroy');
			$("form", _this.$ctx).submit(function (event) {
				var actionUrl = $("form", _this.$ctx).attr("action")
					, searchString = $("input[name='query']", _this.$ctx).val()
					, encodeSearchString = encodeURIComponent(searchString)
				;
				if ($(".mod-search").length !== 0) {
					$(".mod-search #inputSearch").val(searchString).focus();
					$(".mod-search form").submit();
					if ($(".nav-mobile").hasClass("nav-open")) {
						$("#search-field-mobile").closest(".nav-mobile-menu.dropdown-toggle").click();
					}
				} else {
					window.location = actionUrl + "#" + encodeSearchString;
				}
				event.preventDefault();
			});
			callback(); // !do not remove
		},

		after: function () {
			var _this = this;
		}

	});
}(Tc.$));
(function ($) {
	"use strict";
	/**
	 * Dynamic module implementation.
	 * https://gitlab.namics.com/snippets/2
	 *
	 * @author  <>
	 * @namespace Tc.Module
	 * @class Dynamic
	 * @extends Tc.Module
	 */
	Tc.Module.Dynamic = Tc.Module.extend({

		freshPageLoad: false,
		$dynForm: $('#content form').eq(0),

		init: function ($ctx, sandbox, modId) {
			this._super($ctx, sandbox, modId);

			this.bindAll(
				'contentLoaded',
				'onPaginationClick'
			);


			this.currentWindow = this.getCurrentWindow();
			this.dataUrl = null;
			// offer helper
			this.initUrlParamHelper();
			this.getQueryVars();

		},

		getCurrentWindow: function () {

			if (window.location.href.indexOf('cf#') > -1 && document.getElementById('cq-cf-frame')) {
				return document.getElementById('cq-cf-frame').contentWindow
			} else {
				return window;
			}

		},

		getQueryVars: function () {

			var that = this,
				$ctx = that.$ctx,
				urlParamData = null,
				valueArray = new Array,
				formValueFromUrl = '';

			that.$dynForm.find('.form-group input[data-url-param]:visible, .form-group select[data-url-param]').each(function (i, v) {
				valueArray.length = 0;
				urlParamData = $(v).data('urlParam');

				if (urlParamData !== undefined && $.urlParam(urlParamData) !== '') {
					formValueFromUrl = that._decodingValue($.urlParam(urlParamData));
					if (v.nodeName === 'SELECT') {
						if (v.multiple) {
							$(v).val(formValueFromUrl.split(','));
						} else {
							$(v).val(formValueFromUrl);
						}
						$(v).trigger("chosen:updated");

					} else {
						// value to simple field
						$(v).val(formValueFromUrl);
					}

				}

			});


		},
		initUrlParamHelper: function () {

			var that = this;

			// offer url-param-return
			$.urlParam = function (name, url) {
				if (!url) {
					url = that.currentWindow.location.href;
				}
				var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(url);
				if (!results) {
					return '';
				}
				return results[1] || undefined;
			}
		},

		on: function (callback) {
			var _this = this;
			callback(); // !do not remove
		},

		after: function () {
			this.dataUrl = this.$ctx.data("url");

			if (this.$ctx.data("initialload") !== 0) {
				// page allready loaded, only call data-url
				this.loadContent(this.dataUrl, null, true);
			} else {
				// run initial methodes
				this._initEvents();
			}
			$(window).trigger("resize");
		},


		// replacestate of history , add url-variables without reloading the page
		// MODIMPL-114
		updateUrl: function (newHtml) {
			var that = this,
				$addParams = $(newHtml).find('.add-param'),
				urlParamName = '', urlParamValue = '',
				authorModeString = 'wcmmode',
				arrQueryString = new Array();

			if ($.urlParam(authorModeString)) {
				arrQueryString.push('wcmmode=disabled')
			}

			$addParams.each(function (i, v) {

				urlParamName = $(v).data('urlParam');
				urlParamValue = '';

				if (urlParamName) {
					if ($.urlParam(urlParamName) && that.freshPageLoad) {
						urlParamValue = $.urlParam(urlParamName);
					}
					else {
						if ($(v).val().length > 0)
							urlParamValue = that._encodingValue($(v).val());
					}

					if (urlParamValue.length > 0) {
						arrQueryString.push(urlParamName + '=' + urlParamValue);
					}

				}
			});

			that._replaceStateHelper(arrQueryString);

		},

		_decodingValue: function (decodeString) {
			var decodedString = '';
			decodedString = decodeURIComponent(decodeString);
			return decodedString
		},

		_encodingValue: function (encodeString) {
			var encodedString = '';
			encodedString = encodeURIComponent(encodeString);
			return encodedString
		},

		_replaceStateHelper: function (rsQueryArray) {
			var _rsFilename = location.pathname.substring(location.pathname.lastIndexOf('/') + 1),
				_rsQueryArray = rsQueryArray.join('&') || '';

			if (_rsQueryArray.length > 0) {
				history.replaceState({}, '', _rsFilename + '?' + _rsQueryArray);
			}
		},

		_initEvents: function () {
			this.$ctx.addClass("done");
			this._initPagination();
		},

		loadContent: function (url, attributes, pageload) {
			var that = this,
				qsAttributes = that.checkQueryStrings() || '',
				fromAttributesCharset = '_charset_=UTF-8&';


			url = url || "";

			that.freshPageLoad = pageload;

			url = url.replace("{currentPath}", that.currentWindow.location.pathname + that.currentWindow.location.search);

			if ($("body").hasClass("skin-layout-author")) {
				url += url.indexOf('?') == -1 ? "?wcmmode=disabled" : "&wcmmode=disabled";

				if (that.freshPageLoad) {
					url += '&' + fromAttributesCharset + qsAttributes;
				}
			} else {
				if (that.freshPageLoad) {
					url += '?' + fromAttributesCharset + qsAttributes;
				}
			}


			this.$ctx.removeClass("done").addClass("loading");
			$.ajax({
				type: "GET",
				url: url,
				data: attributes,
				success: this.contentLoaded
			});
		},

		onLoadContent: function (param) {
			var that = this;

			if (param.url === undefined) {
				param.url = this.dataUrl;
			}
			// form post
			this.loadContent(param.url, param.attributes, false);
		},

		contentLoaded: function (data) {
			this.$ctx.html(data);
			this._initEvents();
			this.fire('contentDone');
			this.updateUrl(data);
			this.$ctx.removeClass("loading");
			this.sandbox.addModules(this.$ctx);
		},

		_initPagination: function () {
			this.$$("ul.pagination li:not(.active) a").off("click.pagination").on("click.pagination", this.onPaginationClick);
		},

		onPaginationClick: function (ev) {
			ev.preventDefault();
			var loadPage = $(ev.currentTarget).data("loadpage"), // 1
				$addParams = this.$$('.add-param'), //
				// CNGIMPL-2943 - performance issue call paging without url-variable to enable caching
				attributes = ($addParams.length !== null && $addParams.length > 0) ? "pageIndex=" + loadPage + "&" + $addParams.serialize() : "",
				replaceddataUrl = decodeURI(this.dataUrl).replace("{}", loadPage);

			this.loadContent(replaceddataUrl, attributes, false);
		},

		checkQueryStrings: function () {
			var that = this,
				docLocSearch = that.currentWindow.location.search,
				queryString = docLocSearch.replace('?', ''),
				strKeyValue = null,
				formFieldName = '',
				returnString = '';

			var querystringKeyValueArray = queryString.split('&');
			for (var iq = 0; iq < querystringKeyValueArray.length; iq++) {
				strKeyValue = querystringKeyValueArray[iq];
				querystringKeyValueArray[iq] = strKeyValue.split('=');

				if (that.$dynForm.find("[data-url-param='" + querystringKeyValueArray[iq][0] + "']").length > 0) {

					formFieldName = that.$dynForm.find("[data-url-param='" + querystringKeyValueArray[iq][0] + "']").attr('name');
					returnString += '&' + formFieldName + '=' + querystringKeyValueArray[iq][1];
				}
			}

			return returnString.substring(1);

		}

	});
}(Tc.$));
(function ($) {
	"use strict";
	/**
	 * Nsbabonnement module implementation.
	 *
	 * @author  <>
	 * @namespace Tc.Module
	 * @class Nsbabonnement
	 * @extends Tc.Module
	 */
	Tc.Module.Nsbabonnement = Tc.Module.extend({

		init: function ($ctx, sandbox, modId) {
			this._super($ctx, sandbox, modId);
		},

		on: function (callback) {
			Tc.Utils.Lib.initValidation(this.$$('form'));
			callback(); // !do not remove
		},

		after: function () {

		}
	});
}(Tc.$));

(function ($) {
	"use strict";
	/**
	 * Nsbnewslist module implementation.
	 * https://gitlab.namics.com/snippets/2
	 *
	 * @author  <>
	 * @namespace Tc.Module
	 * @class Nsbnewslist
	 * @extends Tc.Module
	 */
	Tc.Module.Nsbnewslist = Tc.Module.extend({

		init: function ($ctx, sandbox, modId) {
			this._super($ctx, sandbox, modId);
		},

		on: function (callback) {
			var _this = this;
			_this.bindAll(
				"_onSubmit",
				"onNewsFilterSubmit"
			);
			callback(); // !do not remove
		},

		after: function () {
			var _this = this;
			_this._initNewsFilter();
			_this._setEnddate();
			_this.$$("form").on("submit", _this._onSubmit);
		},

		_setEnddate: function () {
			var _this = this,
				date = new Date(),
				enddate = date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2);

			if ($("input[name='endDate']", _this.$ctx).attr("value") === '') {
				$("input[name='endDate']", _this.$ctx).attr("value", enddate);
			}
		},

		_initNewsFilter: function () {
			this.$$("#newsFilter").on('submit', this.onNewsFilterSubmit);
		},

		onNewsFilterSubmit: function (ev) {
			ev.preventDefault();
			var $newsFilter = $(ev.currentTarget),
				attributes = $newsFilter.length !== null ? "pageIndex=" + 0 + "&" + $newsFilter.serialize() : "pageIndex=" + 0;
			this.fire('loadContent', {attributes: attributes});
		},


		_onSubmit: function () {
			var _this = this,
				submit = true,
				$datepicker = _this.$$(".is-datepicker"),
				$el;
			if ($datepicker.length) {
				$datepicker.each(function (i, el) {
					$el = $(el);
					if (!$el.val()) {
						submit = false;
						$el.focus();
					}
					return false;
				});
			}
			return submit;
		}

	});
}(Tc.$));
(function ($) {
	"use strict";
	/**
	 * Teaserlist module implementation.
	 * https://gitlab.namics.com/snippets/2
	 *
	 * @author  <>
	 * @namespace Tc.Module
	 * @class Teaserlist
	 * @extends Tc.Module
	 */
	Tc.Module.Teaserlist = Tc.Module.extend({
		on: function (callback) {
			var _this = this;

			_this._loadDots();
			$(window).on("viewportchange", $.debounce(500, function (e) {
				_this._loadDots(true);
			}));


			//this causes those callbacks to be executed in the scope of the module, not the scope of the bound element
			_this.bindAll(
				"_onReset",
				"onSearchFormSubmit"
			);

			callback(); // !do not remove
		},

		after: function () {
			this.$$("#teaserlist-form").on('submit', this.onSearchFormSubmit);
			this.$$("button[type='reset']").on("click", this._onReset);
			this.$$('.chosen-container').width('100%');
		},

		_onReset: function (ev) {
			var _this = this;
			setTimeout(function () {
				if (_this.$('.pagination').size() == 0) {
					window.location.assign(window.location.pathname);
				} else {
					_this.$('.tags').trigger('chosen:updated');
					_this.$('.child-tags').trigger('chosen:updated');
				}
			}, 10);
		},

		onSearchFormSubmit: function (ev) {
			var usePaging = this.$ctx.data('paging-enabled');
			if (usePaging) {
				ev.preventDefault();
				var $searchForm = $(ev.currentTarget),
					attributes = $searchForm.length !== null ? "pageIndex=" + 0 + "&" + $searchForm.serialize() : "pageIndex=" + 0;
				this.fire('loadContent', {attributes: attributes});
			}
		},

		_loadDots: function (isInitialized) {

			var to = null;
			var _this = this,
				$ctx = _this.$ctx,
				$teaser = $ctx.find('.wrapper');

			// if function is called the first time and any teaser contains an
			// image wait until all images are fully loaded, then call function again
			// with flag isInitialized
			if (!isInitialized) {
				var $images = $ctx.find(".row").find("img");
				if ($images.length) {
					$images.load(function () {
//						if(to != null) {
//							clearTimeout(to);
//							to = null;

						setTimeout(_this._loadDots(true), 100);
//							_this._loadDots(true);
//						}
					});

					// execute dotdotdot function after 1500 ms if image load event fails
//					to = setTimeout(function() {_this._loadDots(true);}, 1500);
					return;
				}
			}

			// skip dotdot if there are images with height 0
			$.each($ctx.find(".row").find("img"), function () {
				if ($(this).height() == 0) {
					return;
				}
			});

			// reset timeout function
//			to = null;
			var execDot = false;

			// find all teaser within a row and set the height to lowest height
			$ctx.find(".row").each(function () {
				var $this = $(this);
				var minHeight = 1000;
				var $teaser = $this.find(".mod-teaser");
				var minimumHeight = 0;
				if ($teaser.length) {
					$teaser.each(function () {
						var $this = $(this);
						minHeight = Math.min(minHeight, $this.height());
						minimumHeight = Math.max(minimumHeight, $this.find("img").height());
						var $img = $this.find("img");
						if ($img.length && $img.height() == 0) {
							//minimumHeight = Math.max (minimumHeight, 71);
							return;
						}
						var $wrapper = $this.find(".wrapper");
						if ($wrapper.length) {
							execDot = true;
							var textMinHeight = $wrapper.position().top + Math.min(71, $wrapper.height() + 5);
							minimumHeight = Math.max(minimumHeight, textMinHeight);
						}

						minHeight = Math.max(minHeight, minimumHeight);
					});
				}
				$this.find(".wrapper").each(function () {
					var $this = $(this);
					$this.css("height", minHeight - $this.position().top);
				});
			});

			// execute elipsis function
			if (execDot) {
				$teaser.dotdotdot({
					elipsis: '... ',
					wrap: 'word',
					fallbackToLetter: true
				});
			}


			if ($ctx.parents("ul.dropdown-menu").length) {
				$ctx.find(".row").each(function () {
					var $this = $(this);
					var height = $this.height();
					$this.children().css("height", height);
				});
			}
		}
	});
}(Tc.$));

(function ($) {
	"use strict";
	/**
	 * Login module implementation.
	 *
	 * @author  <>
	 * @namespace Tc.Module
	 * @class Nsbabonnement
	 * @extends Tc.Module
	 */
	Tc.Module.Login = Tc.Module.extend({

		init: function ($ctx, sandbox, modId) {
			this._super($ctx, sandbox, modId);
		},

		on: function (callback) {
			Tc.Utils.Lib.initValidation(this.$$('form'));
			callback(); // !do not remove
		},

		after: function () {

		}
	});
}(Tc.$));

(function ($) {
	"use strict";
	/**
	 * Video module implementation.
	 *
	 * @author
	 * @namespace Tc.Module
	 * @class Video
	 * @extends Tc.Module
	 */
	Tc.Module.Video = Tc.Module.extend({

		init: function ($ctx, sandbox, modId) {
			this._super($ctx, sandbox, modId);

		},

		on: function (callback) {
			var $iframe = this.$ctx.find("iframe");
			$iframe.css("height", $iframe.width() * 9 / 16);

			$(window).on("resize viewportchange", function () {
				$iframe.css("height", $iframe.width() * 9 / 16);
			});

			callback(); // !do not remove
		},

		after: function () {
		}
	});
}(Tc.$));

(function ($) {
	"use strict";
	/**
	 * Linklist module implementation.
	 *
	 * @author  <>
	 * @namespace Tc.Module
	 * @class Linklist
	 * @extends Tc.Module
	 */
	Tc.Module.Linklist = Tc.Module.extend({
		on: function (callback) {
			var _this = this,
				$ctx = _this.$ctx;

			$ctx.on('change', '.js-linklist-select', function () {
				var opt = $(this).find(':selected'),
					url = opt.data('url') || '',
					target = opt.data('target') || '_blank';

				if (url) {
					if (Tc.Utils.Extensions && Tc.Utils.Extensions.isMobileDevice()) {
						window.location.href = url; // fix for mobile devices
					}
					else {
						window.open(url, target);
					}
				}
			});

			callback(); // !do not remove
		}
	});
}(Tc.$));

(function ($) {
	"use strict";
	/**
	 * Twitterstream module implementation.
	 * https://gitlab.namics.com/snippets/2
	 *
	 * @author  <>
	 * @namespace Tc.Module
	 * @class Twitterstream
	 * @extends Tc.Module
	 */
	Tc.Module.Twitterstream = Tc.Module.extend({
		on: function (callback) {
			var _this = this,
				$ctx = _this.$ctx;

			_this._loadTweets();
			_this._refreshTweets();

			callback(); // !do not remove
		},

		_loadTweets: function () {
			var _this = this,
				$ctx = _this.$ctx,
				$timeline = $('.js-twitter-timeline', $ctx),
				$url = $timeline.data('url');
			$url = $url || "";

			if ($("body").hasClass("skin-layout-author")) {
				$url += $url.indexOf('?') == -1 ? "?wcmmode=disabled" : "&wcmmode=disabled";
			}

			// Load HTML of tweets
			$.ajax({
				type: 'GET',
				url: $url
			}).done(function (data) {
				if ($timeline.html() !== data) {
					$timeline.html(data);
					if (window.BIT_ETRACKER) {
						BIT_ETRACKER.addEvents($ctx);
					}
				}
			});
		},

		_refreshTweets: function () {
			var _this = this,
				$ctx = _this.$ctx,
				$interval = $('.js-twitter-timeline', $ctx).data('time-interval') || 300000;

			// Refresh tweets every 5 minutes
			setInterval(function () {
				_this._loadTweets();
			}, $interval);
		}

	});
}(Tc.$));
(function ($) {
	"use strict";
	/**
	 * Iframe module implementation.
	 * https://gitlab.namics.com/snippets/2
	 *
	 * @author Elena Wessolek <elena.wessolek@namics.com>
	 * @contributors Thomas May <thomas.may@namics.com>
	 * @namespace Tc.Module
	 * @class Iframe
	 * @extends Tc.Module
	 */
	Tc.Module.Iframe = Tc.Module.extend({
		on: function (callback) {
			this.bindAll(
				"setCustomHeight"
			);

			$(window).on("load resize", $.debounce(200, this.setCustomHeight));

			callback(); // !do not remove
		},

		setCustomHeight: function (ev) {
			var $win = $(ev.currentTarget),
				$iframe = this.$$("iframe"),
				heightDesktop = $iframe.data("custom-height-desktop"),
				heightTablet = $iframe.data("custom-height-tablet"),
				heightPhone = $iframe.data("custom-height-phone");

			if (heightDesktop && $win.width() >= 992) {
				$iframe.height(heightDesktop);
			} else if (heightTablet && $win.width() >= 767 && $win.width() <= 991) {
				$iframe.height(heightTablet);
			} else if (heightPhone && $win.width() <= 767) {
				$iframe.height(heightPhone);
			}
		}

	});
}(Tc.$));
(function ($) {
	"use strict";
	/**
	 * Eventlist module implementation.
	 * https://gitlab.namics.com/snippets/2
	 *
	 * @author Dino Ziermann <dino.ziermann@namics.com>
	 * @namespace Tc.Module
	 * @class Eventlist
	 * @extends Tc.Module
	 */
	Tc.Module.Eventlist = Tc.Module.extend({

		init: function ($ctx, sandbox, modId) {
			this._super($ctx, sandbox, modId);
			this.bindAll(
				"onSubmit"
			);
		},

		on: function (callback) {
			this.$$("#eventsFilter").on("submit", this.onSubmit);
			callback(); // !do not remove
		},

		onSubmit: function (ev) {
			ev.preventDefault();
			var $eventsFilter = $(ev.currentTarget),
				attributes = $eventsFilter.serialize();
			this.fire('loadContent', {attributes: attributes});
		},

		after: function () {
		}

	});
}(Tc.$));
(function ($) {
	"use strict";
	/**
	 * Singlepageapplication module implementation copied from the Iframe module
	 * https://gitlab.namics.com/snippets/2
	 *
	 * @author Raphael Hänni <raphael.haenni@bit.admin.ch>
	 * @contributors Matthias Schwarz <matthias.schwarz@bit.admin.ch>
	 * @contributors Elena Wessolek <elena.wessolek@namics.com>
	 * @contributors Thomas May <thomas.may@namics.com>
	 * @contributors Stefan Baur <sbaur@namics.com>
	 * @namespace Tc.Module
	 * @class Singlepageapplication
	 * @extends Tc.Module
	 */
	Tc.Module.Singlepageapplication = Tc.Module.extend(
		{

			DEBUG: Tc.Utils.Lib.getUrlParameter("debugSinglePageApplication") == "true",

			UNDEFINED_CUSTOM_HEIGHT: -1, // Pseudo Constant

			on: function (callback) {
				this.$window = $(window);
				this.$iframe = this.$("iframe");

				this.bindAll(
					"updateIframeHeight"
				);

				callback(); // !do not remove
			},

			after: function () {
				//initially set iframe height to 0
				this.$iframe.height(0);
				this.updateIframeHeight();

				this.$window.on("resize", $.debounce(200, this.updateIframeHeight));
				this.$iframe.on("load", this.updateIframeHeight);
			},

			updateIframeHeight: function (event) {
				this.log("updateIframeHeight - event", event);

				var height = this.determineCustomHeight();

				this.log("updateIframeHeight - custom height", height);

				if (height == this.UNDEFINED_CUSTOM_HEIGHT) {
					height = this.calculateIframeContentHeight();
					this.log("updateIframeHeight - calculated height", height);
				}

				this.log("updateIframeHeight - final height", height);

				this.$iframe.height(height);
			},

			calculateIframeContentHeight: function () {
				var content = this.$iframe.contents(),
					contentHeight = 0;

				try {
					contentHeight = content.height();
				}
				catch (err) {
					this.log("calculateIframeContentHeight - Could not calculate height due to error: ", err.message);
				}

				this.log("calculateIframeContentHeight - content", content);
				this.log("calculateIframeContentHeight - contentHeight", contentHeight);

				return contentHeight;
			},

			determineCustomHeight: function () {
				var windowWidth = this.$window.width(),
					heightDesktop = parseInt(this.$iframe.data('custom-height-desktop'), 10),
					heightTablet = parseInt(this.$iframe.data('custom-height-tablet'), 10),
					heightPhone = parseInt(this.$iframe.data('custom-height-phone'), 10),
					height = this.UNDEFINED_CUSTOM_HEIGHT;

				this.log("determineCustomHeight - windowWidth", windowWidth);
				this.log("determineCustomHeight - heightDesktop", heightDesktop);
				this.log("determineCustomHeight - heightTablet", heightTablet);
				this.log("determineCustomHeight - heightPhone", heightPhone);

				if (heightDesktop && windowWidth >= 992) {
					height = heightDesktop;
				}
				else if (heightTablet && windowWidth >= 767 && windowWidth <= 991) {
					height = heightTablet;
				}
				else if (heightPhone && windowWidth <= 767) {
					height = heightPhone;
				}

				this.log("determineCustomHeight - height", height);

				return height;
			},

			log: function () {
				if (window.console) {
					if (this.DEBUG) {
						console.log.apply(console, arguments);
					}
				}
			}

		});
}(Tc.$));

(function ($) {
	"use strict";
	/**
	 * The Joblist modules fetches a joblist page from jobs.admin.ch
	 *
	 * @author Matthias Schwarz <matthias.schwarz@bit.admin.ch>
	 * @namespace Tc.Module
	 * @class Joblist
	 * @extends Tc.Module
	 */
	Tc.Module.Joblist = Tc.Module.extend(
		{
			DEBUG: Tc.Utils.Lib.getUrlParameter("debugJoblistApplication") == "true",

			gotSizeFromFrame: false,
			lastFrameHeight: 0,

			init: function ($ctx, sandbox, modId) {
				this._super($ctx, sandbox, modId);
			},

			on: function (callback) {

				var _this = this;
				var $ctx = _this.$ctx;

				this.$window = $(window);
				this.$div = this.$("div.jobListContent");
				this.$iframe;
				this.$outerIframe;

				this.bindAll(
					"loadContentToDiv", "useIframe", "messageListener", "sendGetSizeRequest", "updateIframeHeight", "log"
				);
				this.authorMode = this.$div.hasClass("authorMode");
				this.ajaxMode = this.$div.hasClass("ajaxMode");
				this.gotSizeFromFrame = false;

				callback(); // !do not remove
			},

			after: function () {

				if (this.ajaxMode) {
					var dataUrl = this.$div.data('url');
					this.loadContentToDiv(dataUrl, this.$div[0]);
				} else {
					this.useIframe()
				}
				this.log("at the end of after()");
			},

			loadContentToDiv: function (url, targetElement) {

				url = url || "";
				var _this = this;
				var _targetElement = targetElement; // we need a var for the closure

				if (url) {
					$.ajax({
						type: 'GET',
						url: url

					}).done(function (data) {

						var extractBody = /^[\s\S]*<body>([\s\S]+)<\/body>[\s\S]*$/;
						var match = extractBody.exec(data);

						// we skip documents with head but without resp. with an empty body
						if (match || data.indexOf('<head>') == -1) {
							var jobListDom = match ? $(match[1]) : $(data);
							jobListDom.find('script').remove();
							jobListDom.appendTo(_targetElement);
						} else {
							_this.log("loadContentToDiv(): skipping response from " + url + " because we got a head without a body!");
						}

					}).error(function (func, errorState, errorThrown) {

						_this.useIframe();
					})
				}
			},

			useIframe: function () {

				if (this.authorMode && typeof window.parent.postMessage === "function") {

					this.log("use an iframe with postMessage communication to display the joblist");

					var iframeScript =
						"<script>\n" +
						"var frameId = '';\n" +

						"function sendReadyMessage() {\n" +
						"	window.parent.postMessage('frameContentReady', '*');\n" +
						"   setIframeHeight('innerIframe');\n" +
						"}\n" +

						"function getDocHeight(doc) {\n" +
						"    doc = doc || document;\n" +
						"    // stackoverflow.com/questions/1145850/\n" +
						"    var body = doc.body, html = doc.documentElement;\n" +
						"    var height = Math.max( body.scrollHeight, body.offsetHeight, \n" +
						"        html.clientHeight, html.scrollHeight, html.offsetHeight );\n" +
						"    return height;\n" +
						"}\n" +

						"function setIframeHeight(id) {\n" +
						"    var ifrm = document.getElementById(id);\n" +
						"    var doc = (ifrm.contentDocument != undefined)? ifrm.contentDocument : ifrm.contentWindow.document;\n" +
						"    ifrm.style.visibility = 'hidden';\n" +
						"    ifrm.style.height = '10px'; // reset to minimal height ...\n" +
						"    // IE opt. for bing/msn needs a bit added or scrollbar appears\n" +
						"    var height = getDocHeight( doc ) + 4 + 'px';" +
						"    ifrm.style.height = height;\n" +
						"    ifrm.style.visibility = 'visible';\n" +
						"    if (frameId != '') {\n" +
						"	 	window.parent.postMessage('joblist-height:'+frameId+'='+height, '*');\n" +
						"    }\n" +
						"}\n" +

						"function answerSizeRequest(event) {\n" +
						"    if (event.data.indexOf('jobListSizeRequest:') == 0) {\n" +
						"	    frameId = event.data.replace('jobListSizeRequest:','');\n" +
						"	    setIframeHeight('innerIframe');\n" +
						"    }\n" +
						"}\n" +

						"window.addEventListener('message',function (event) {answerSizeRequest(event);});\n" +
						"window.addEventListener('resize',function () {setIframeHeight('innerIframe');});\n" +

						"window.setTimeout(function() {document.domain = 'admin.ch';}, 10);\n" +
						"</script>";

					var html = '<body style="margin: 0; border: 0; padding: 0;">' + iframeScript +
						'<iframe onload="sendReadyMessage();" ' +
						'id="innerIframe" ' +
						'style="margin: 0; border: 0; padding: 0; width: 100%" ' +
						'height="20" src="' + this.$div.data('url') + '"/>' +
						'</body>';

					var iframe = document.createElement('iframe');
					iframe.height = 20;
					iframe.id = "author-outer-iframe-" + this.$div[0].id.replace(/^.*[^0-9]([0-9]+)$/, '$1');
					this.log('outer iframe id: ' + iframe.id);

					this.$div[0].appendChild(iframe);
					iframe.contentWindow.document.open();
					iframe.contentWindow.document.write(html);
					iframe.contentWindow.document.close();

					this.$outerIframe = $("#" + iframe.id);
					this.$outerIframe.css('border', 0).css('padding', 0).css('margin', 0).css('width', '100%');
					$(window).on("message", this.messageListener);
					this.sendGetSizeRequest();

				} else { // we running on a publish instance

					this.log("use an iframe with document.domain='admin.ch' to display the joblist");

					var idNumber = this.$div[0].id.replace(/^.*[^0-9]([0-9]+)$/, '$1');
					try {
						var iframeId = "generated-iframe-" + idNumber;
						this.$iframe = this.$div.append("<iframe id='" + iframeId + "'/>");

						this.$iframe = $("#" + iframeId);
						this.$iframe.attr('height', 10).attr('scrolling', 'no').attr('src', this.$div.data('url'));
						this.$iframe.css('width', '100%').css('border', 0).css('padding', 0).css('margin', 0);

						document.domain = 'admin.ch';
						this.$window.on("resize", $.debounce(200, this.updateIframeHeight));
						this.$iframe.on("load", this.updateIframeHeight);
						this.updateIframeHeight();

					} catch (err) { // we provide a link, if iframes are not supported by the browser

						var linkHref = this.$div.data('url');
						var linkText = $('#joblist-title-' + idNumber).text();
						linkText = linkText ? linkText : linkHref;
						this.$div.append("<a href='" + linkHref + "'>" + linkText + '</a>');
					}
				}
			},

			sendGetSizeRequest: function () {

				if (!this.gotSizeFromFrame) {
					this.$outerIframe[0].contentWindow.postMessage("jobListSizeRequest:" + this.$div[0].id, "*");
				}
			},

			messageListener: function (event) {

				var message = event.originalEvent.data;

				if (message.indexOf("frameContentReady") == 0) {

					this.sendGetSizeRequest();

				} else if (message.indexOf("joblist-height:") == 0) {

					// we exspect messages as: joblist-height:<frame-id>:<height>. Example: joblist-height:joblist-frame-2452593=185

					var splitMessage = /^joblist-height:([^=]+)=([0-9.px]+)$/;
					var match = splitMessage.exec(message);
					if (match) {
						if (match[1] == this.$div[0].id) {
							var height = match[2];
							this.log("messageListener() height from iframe message: " + height);
							this.gotSizeFromFrame = true;
							if (this.lastFrameHeight != height) {
								this.$outerIframe.height(height);
								this.lastFrameHeight = height;
							}
						}
					} else {
						console.log("messageListener(): can NOT parse joblist-height message due to invalid message format. Message: " + message);
					}
				} else {
					this.log("messageListener(): skipping message due to unknown message format. Message: " + message);
				}
			},

			updateIframeHeight: function (event) {

				try {
					var height = this.$iframe.contents().height();
					this.log("updateIframeHeight - setting height " + height);
					this.$iframe.height(height);
				}
				catch (err) {
					this.log("updateIframeHeight - Could not determine height due to error: " + err.message);
				}
			},

			log: function () {
				if (window.console) {
					if (this.DEBUG) {
						console.log.apply(console, arguments);
					}
				}
			}
		});
}(Tc.$));

