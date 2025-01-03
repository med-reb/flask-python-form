! function () {
  function e() {
    const e = Array.from(document.getElementsByClassName("level1_item"));
    const t = Array.from(document.getElementsByClassName("level2_item"));
    const n = Array.from(document.querySelectorAll(".level2_item a.more"));
    const l = document.querySelector(".dropnav");
    if (window.innerWidth <= 992) {
      e.forEach(e => {
        e.addEventListener("mouseenter", e => {
          l.style.width = "auto";
        });
        e.addEventListener("mouseleave", e => {
          l.style.width = "auto";
        });
      });
      n.forEach(e => {
        e.addEventListener("mouseenter", e => {
          l.style.width = "auto";
        });
      });
      t.forEach(e => {
        e.addEventListener("mouseleave", e => {
          l.style.width = "auto";
        });
      });
      if(l) l.addEventListener("mouseleave", e => {
        l.style.width = "auto";
      });
    }
    if (window.innerWidth >= 993) {
      e.forEach(e => {
        e.addEventListener("mouseenter", e => {
          l.style.width = "auto";
        });
        e.addEventListener("mouseleave", e => {
          l.style.width = "auto";
        });
      });
      n.forEach(e => {
        e.addEventListener("mouseenter", e => {
          l.style.width = "93.8%";
        });
      });
      t.forEach(e => {
        e.addEventListener("mouseleave", e => {
          l.style.width = "auto";
        });
      });
      if(l) l.addEventListener("mouseleave", e => {
        l.style.width = "auto";
      });
    }
    if (window.innerWidth >= 1200) {
      e.forEach(e => {
        e.addEventListener("mouseenter", e => {
          l.style.width = "auto";
        });
        e.addEventListener("mouseleave", e => {
          l.style.width = "auto";
        });
      });
      n.forEach(e => {
        e.addEventListener("mouseenter", e => {
          l.style.width = "78.9%";
        });
      });
      t.forEach(e => {
        e.addEventListener("mouseleave", e => {
          l.style.width = "auto";
        });
      });
      if(l) l.addEventListener("mouseleave", e => {
        l.style.width = "auto";
      });
    }
  }


  function t(e, t, n) {
    e && (e.attachEvent ? e.attachEvent("on" + t, n) : e.addEventListener && e.addEventListener(t, n, !1))
  }

  function n() {
    var n = document.documentElement.clientWidth,
      l = document.getElementById("b2c-search-input");
    l && t(l, "keyup", c);
    var o, r = document.querySelector(".b2c-clear-search-close-icon");
    r && t(r, "click", d);
    for (var i = document.querySelectorAll(".first-level, .second-level, .third-level"), m = 0; m < i.length; m++) n < 993 && t(i[m], "click", a);
    window.innerWidth >= 993 && (x ? o = document.querySelector("overlay") : ((o = document.createElement("div")).id = "overlay", o.style.display = "none", document.body.append(o)), document.getElementById("menu-link").addEventListener("click", (function () {
      console.log("window.innerWidth", window.innerWidth), document.querySelector("#menu-link").classList.contains("closing") ? (document.querySelector("#menu-link").classList.remove("closing"), document.querySelector(".dropnav").style.top = "-10000px", document.getElementById("overlay").style.display = "none") : (document.getElementById("overlay").style.display = "block", document.querySelector("#menu-link").classList.add("closing"), document.querySelector(".dropnav").style.top = "0px"), document.getElementById("overlay").addEventListener("click", (function () {
        document.getElementById("overlay").style.display = "none", document.querySelector("#menu-link").classList.remove("closing"), document.querySelector(".dropnav").style.top = "-10000px"
      })), e()
    })), x = !0);
    for (var b = document.querySelectorAll("#b2c-global-header-search-toggle, .b2c-global-header-search-overlay-close"), f = 0; f < b.length; f++) t(b[f], "click", v);
    for (var S = document.querySelectorAll(".b2c-global-header-menu-overlay-close"), q = 0; q < S.length; q++) n >= 993 && t(S[q], "click", h);
    for (var w, L = document.querySelectorAll(".b2c-global-header-menu-level-dropdown"), A = 0; A < L.length; A++) t(L[A], "mouseenter", (function (e) {
      n >= 993 && (w = setTimeout((function () {
        p(e), g(e)
      }), 300))
    })), t(L[A], "mouseleave", (function (e) {
      try {
        clearTimeout(w)
      } catch (e) { }
    })), t(L[A], "click", (function (e) {
      try {
        clearTimeout(w)
      } catch (e) { }
      E(e.target ? e.target : e.srcElement, "active") || (e.preventDefault(), p(e), g(e))
    }));
    var k = document.querySelectorAll(".b2c-global-header-menu-level-last.first-level");
    for (A = 0; A < k.length; A++) t(k[A], "mouseenter", (function (e) {
      n >= 993 && y(e)
    }));
    var W, T = document.querySelectorAll(".b2c-global-header-container");
    for (A = 0; A < T.length; A++) t(T[A], "mouseleave", (function (e) {
      n >= 993 && (W = setTimeout((function () {
        y(e)
      }), 750))
    })), t(T[A], "mouseenter", (function (e) {
      try {
        clearTimeout(W)
      } catch (e) { }
    }));
    if (n < 993) {
      var I = document.querySelectorAll(".b2c-global-header-menu-back-title");
      for (A = 0; A < I.length; A++) t(I[A], "click", u);
      t(document.getElementById("b2c-global-header-menu-toggle"), "click", s), document.querySelector(".b2c-global-header-bar-middle").addEventListener("click", (function (e) {
        e.stopImmediatePropagation(), e.target === e.currentTarget && s(e)
      })), document.querySelector(".b2c-global-header-bar-bottom").addEventListener("click", (function (e) {
        e.stopImmediatePropagation(), e.target === e.currentTarget && s(e)
      })), document.querySelector("body").classList.contains("not-front") && (document.querySelector(".main-container").style.padding = "60px 0 0 0")
    }
    var H = document.querySelectorAll(".b2c-global-header-customerzone");
    if (H.length)
      for (A = H.length - 1; A >= 0; A--) t(H[A], "click", (function () {
        window.innerWidth < 740 && ("e-services-acc-b2c-nt.orange.be" === window.location.hostname ? this.href = "http://e-services-acc-mcz-nt.orange.be/mcz-authentication" : this.href = "http://m.orange.be/mcz-authentication")
      }))
  }

  function l() {
    for (var e = document.querySelectorAll(".first-level"), t = 0; t < e.length; t++) L(e[t], "active");
    "undefined" != typeof activeTab && activeTab > 0 && activeTab < e.length && w(e[activeTab - 1], "active")
  }

  function o() { }

  function c(e) {
    var t = document.querySelectorAll(".b2c-clear-search-close-icon");
    t[0].style.display = "none", (e.target ? e.target : e.srcElement).value && (t[0].style.display = "block")
  }

  function r(e) {
    var t = document.documentElement.clientWidth;
    console.log("document.documentElement.clientWidth", document.documentElement.clientWidth), t < 993 && s(e), t < 993 && (function () {
      for (var e = document.querySelectorAll(".active"), t = document.querySelectorAll(".b2c-global-header-main-menu"), n = [], l = 0; l < e.length; l++) n.push(e[l].getAttribute("data-level"));
      t[0].setAttribute("data-level", Math.max.apply(Math, n))
    }(), E(e.target, "b2c-global-header-menu-level") && e.preventDefault())
  }

  function a(e) {
    var t, n;
    if (E(n = e.target ? e.target : e.srcElement, "b2c-global-header-menu-level")) {
      switch (n.getAttribute("data-level")) {
        case "1":
          t = "first-level";
          break;
        case "2":
          t = "second-level";
          break;
        case "3":
          t = "third-level"
      }
      for (var l = document.querySelectorAll("." + t), o = document.querySelectorAll(".first-level, .second-level, .third-level"), c = 0; c < o.length; c++) L(o[c], "active");
      for (var a = 0; a < l.length; a++) L(l[a].parentNode, "active"), L(l[a], "active"), i();
      w(n, "active"), w(n.parentNode, "active"), r(e)
    }
  }

  function i() {
    var e = document.querySelectorAll(".b2c-global-header-main-menu"),
      t = document.querySelectorAll(".b2c-global-header-bar-middle")[0];
    e[0].setAttribute("data-level", 0), t.scrollTop = 0
  }

  function u(e) {
    var t, n = document.querySelectorAll(".b2c-global-header-main-menu"),
      l = n[0].getAttribute("data-level"),
      o = l - 1;
    switch (l) {
      case "1":
        t = "first-level";
        break;
      case "2":
        t = "second-level";
        break;
      case "3":
        t = "third-level"
    }
    n[0].setAttribute("data-level", o);
    for (var c, r = n[0].querySelectorAll("." + t), a = 0; a < r.length; a++) c = r[a].nextElementSibling || q(r[a]), L(r[a], "active"), L(r[a].parentNode, "active"), c && L(c, "active")
  }

  function s(e) {
    var t = document.querySelector(".b2c-global-header-burger"),
      n = document.querySelectorAll(".b2c-global-header-bar-top"),
      l = document.querySelectorAll(".b2c-global-header-bar-middle"),
      c = document.querySelectorAll(".b2c-global-header-bar-bottom"),
      r = (document.querySelectorAll(".b2c-global-header-search-overlay"), document.body),
      a = document.querySelector(".li_menu_box");
    var d, u, s, m = window.innerHeight,
      v = n[0].clientHeight,
      h = m - v - c[0].clientHeight;
    E(t, "menu-open") ? (u = E(r, "logged-in") ? 96 : 49, d = h + v, s = 2, b(), i(), p(e), f(), L(t, "menu-open"), w(t, "menu-close"), document.querySelector(".b2c-global-header-bar-middle").classList.add("is-open"), document.querySelector(".b2c-global-header-bar-top").classList.add("is-open"), document.querySelector(".b2c-global-header-bar-bottom").classList.add("is-open")) : E(t, "menu-close") && (u = -(h + v), d = -(h + v), s = -1, w(t, "menu-open"), L(t, "menu-close"), i(), document.querySelector(".b2c-global-header-bar-middle").classList.remove("is-open"), document.querySelector(".b2c-global-header-bar-top").classList.remove("is-open"), document.querySelector(".b2c-global-header-bar-bottom").classList.remove("is-open")), S(l[0], {
      top: u + 10 + "px",
      zIndex: s
    }), S(c[0], {
      top: d + "px",
      zIndex: s
    });
    var g = a.closest(".b2c-global-header-bar-middle").offsetHeight,
      y = a.previousElementSibling.offsetHeight;
    console.log(g), console.log(y), a.style.height = g - y - 57 + "px", o()
  }

  function m() {
    var e, t = document.documentElement.clientWidth,
      n = document.querySelector(".b2c-global-header-search-overlay.active"),
      l = document.querySelector(".b2c-global-header-menu-overlay.active"),
      o = document.querySelector(".b2c-global-header-inner-wrapper");
    if (n ? e = n : l && (e = l), t >= 940 && e) {
      var c = (t - o.offsetWidth) / 2;
      S(e, {
        left: -c + "px",
        right: -c + "px"
      })
    } else t < 940 && e && S(e, {
      left: "0px",
      right: "0px"
    })
  }

  function v(e) {
    var t, n;
    n = e.target ? e.target : e.srcElement;
    var l = document.querySelector(".b2c-global-header-search-overlay"),
      o = document.getElementById("b2c-search-input"),
      c = document.documentElement.clientWidth;
    E(n, "search-open") ? (t = c < 940 ? 39 : 71, 1, o.focus(), L(n, "search-open"), L(n, "b2c-global-search"), w(n, "search-close"), w(n, "b2c-global-search-hover"), w(l, "active"), function () {
      var e = document.querySelectorAll(".b2c-global-header-bar-middle"),
        t = document.querySelectorAll(".b2c-global-header-bar-bottom"),
        n = document.querySelectorAll(".menu-close");
      n.length > 0 && (w(n[0], "menu-open"), L(n[0], "menu-close"), S(e[0], {
        top: "-985px"
      }), S(t[0], {
        top: "-485px"
      }))
    }(), f(), p(e), i(), m(), S(l, {
      top: t + "px",
      zIndex: 1
    })) : b()
  }

  function b() {
    var e, t = document.querySelectorAll(".b2c-global-header-search"),
      n = document.querySelectorAll(".b2c-global-header-search-overlay"),
      l = document.getElementById("b2c-search-input"),
      o = document.documentElement.clientWidth;
    E(t[0], "search-close") && (l.blur(), d(), L(t[0], "search-close"), L(t[0], "b2c-global-search-hover"), L(n[0], "active"), w(t[0], "search-open"), w(t[0], "b2c-global-search"), e = o < 940 ? -150 : -110, S(n[0], {
      top: e + "px",
      zIndex: -1
    }))
  }

  function h(e) {
    var t, n = (t = e.target ? e.target : e.srcElement).nextElementSibling || q(t);
    b(), !n || E(n, "active") ? y(e) : g(e)
  }

  function g(e) {
    var t, n = (t = e.target ? e.target : e.srcElement).nextElementSibling || q(t);
    b(), f(), w(n, "active"), w(t, "active"), m()
  }

  function y(e) {
    var t;
    (t = e.target ? e.target : e.srcElement).nextElementSibling || q(t), b(), f(), p(e), l()
  }

  function f() {
    var e = document.querySelectorAll(".b2c-global-header-menu-overlay.active");
    if (e.length > 0)
      for (var t = 0; t < e.length; t++) L(e[t], "active")
  }

  function p(e) {
    var t;
    if (E(t = e.target ? e.target : e.srcElement, "b2c-global-header-menu-overlay-close") || E(t, "search-close") || E(t, "first-level") || E(t, "menu-open"))
      for (var n = document.querySelectorAll(".first-level"), l = 0; l < n.length; l++) L(n[l], "active"), L(n[l].parentNode, "active")
  }

  function S(e, t) {
    for (var n in t) t.hasOwnProperty && !t.hasOwnProperty(n) || (e.style[n] = t[n]);
    return e
  }

  function q(e) {
    if (e.nextElementSibling) return e.nextElementSibling;
    do {
      e = e.nextSibling
    } while (e && 1 !== e.nodeType);
    return e
  }

  function E(e, t) {
    return e.classList ? e.classList.contains(t) : !!e.className.match(new RegExp("(\\s|^)" + t + "(\\s|$)"))
  }

  function w(e, t) {
    e.classList ? e.classList.add(t) : E(e, t) || (e.className += " " + t)
  }

  function L(e, t) {
    if (e.classList) e.classList.remove(t);
    else if (E(e, t)) {
      var n = new RegExp("(\\s|^)" + t + "(\\s|$)");
      e.className = e.className.replace(n, " ")
    }
  }

  function A() {
    if (window.headerActiveSection) {
      var e = document.querySelectorAll(".b2c-global-header-main-menu > li > a.first-level");
      window.headerActiveSection > 0 && window.headerActiveSection <= e.length && w(e[window.headerActiveSection - 1], "active")
    }
  }
  window.onload = function () {
    setTimeout((function () {
      if (document.querySelectorAll(".b2c-global-header-main-menu a.more") &&
        document.querySelectorAll(".b2c-global-header-main-menu a.more").length == 0) {
        return;
      }

      const e = Array.from(document.querySelectorAll(".b2c-global-header-main-menu a.more")),
        t = Array.from(document.querySelectorAll(".b2c-global-header-main-menu-subtitle-back a"));
      window.innerWidth <= 992 && e.forEach(((e, n) => {
        e.addEventListener("click", (l => {
          t[n].innerHTML = e.innerHTML, l.preventDefault()
        }))
      }))
    }), 100);

  }, window.addEventListener("resize", (function () {
    e()
  })), t(window, "DOMContentLoaded", (function () {
    if (document.querySelectorAll(".b2c-global-header-main-menu a.more") &&
      document.querySelectorAll(".b2c-global-header-main-menu a.more").length == 0) {
      return;
    }
    n(), o(), l(), document.querySelectorAll(".b2c-global-header-main-menu a.more").forEach((function (e) {
      e.addEventListener("click", (function (t) {
        t.preventDefault();
        var n = e.parentNode.querySelector("ul"),
          l = e.parentNode.closest(".level1_item");
        n && document.querySelectorAll(".level1_item").forEach((function (e) {
          e === l ? n.classList.add("activeSubMenu") : e.querySelectorAll(".level2, .level3").forEach((function (e) {
            e.classList.remove("activeSubMenu")
          }))
        }))
      }))
    })), document.querySelectorAll(".b2c-global-header-main-menu-subtitle-back a").forEach((function (e) {
      e.addEventListener("click", (function (t) {
        t.preventDefault(), console.log(e), e.closest(".activeSubMenu").classList.remove("activeSubMenu")
      }))
    })), document.querySelector("#menu-link").addEventListener("click", (function () {
      document.querySelector(".b2c-global-header-main-menu").querySelectorAll(".activeSubMenu").forEach((function (e) {
        e.classList.remove("activeSubMenu")
      }))
    })), A(), document.querySelector(".main-container") || (document.querySelector(".b2c-global-header-container ~ div") && w(document.querySelector(".b2c-global-header-container ~ div"), "main-container"), document.querySelector(".page-main") && w(document.querySelector(".page-main"), "main-container"))
  })), t(window, "resize", (function () {
    o(),
      function () {
        if (!document.querySelector(".menu-open")) {
          var e = document.querySelectorAll(".b2c-global-header-bar-top"),
            t = document.querySelectorAll(".b2c-global-header-bar-bottom"),
            n = window.innerHeight,
            l = e[0].clientHeight,
            o = n - l - t[0].clientHeight + l;
          t[0].style.top = o + "px"
        }
      }(), m()
  })), window.initOrangeMosseHeader = function () {
    n(), o(), l(), A()
  };
  var k, x = !1;
  k = 0;
  document.addEventListener("DOMContentLoaded", (function () {
    setTimeout((function () {
      if (document.querySelector(".b2c-global-header-customer-menu li.is-active a")) {
        var e = document.querySelector(".b2c-global-header-customer-menu"),
          t = document.querySelector(".b2c-global-header-customer-menu li.is-active a");
        t.parentNode.classList.add("activeParent"), t.addEventListener("click", (function (t) {
          var n = e.closest(".b2c-global-header-bar-bottom");
          if (window.innerWidth < 993) {
            t.preventDefault();
          }
          e.classList.toggle("is-active"), n.classList.toggle("is-active");
        }))
      }
    }), 100);
  }), !1)
}();
