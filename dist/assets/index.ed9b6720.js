const se = function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) s(i);
  new MutationObserver((i) => {
    for (const r of i)
      if (r.type === "childList")
        for (const l of r.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && s(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const r = {};
    return (
      i.integrity && (r.integrity = i.integrity),
      i.referrerpolicy && (r.referrerPolicy = i.referrerpolicy),
      i.crossorigin === "use-credentials"
        ? (r.credentials = "include")
        : i.crossorigin === "anonymous"
        ? (r.credentials = "omit")
        : (r.credentials = "same-origin"),
      r
    );
  }
  function s(i) {
    if (i.ep) return;
    i.ep = !0;
    const r = n(i);
    fetch(i.href, r);
  }
};
se();
function p() {}
function Z(t) {
  return t();
}
function D() {
  return Object.create(null);
}
function F(t) {
  t.forEach(Z);
}
function ie(t) {
  return typeof t == "function";
}
function x(t, e) {
  return t != t
    ? e == e
    : t !== e || (t && typeof t == "object") || typeof t == "function";
}
let W;
function le(t, e) {
  return W || (W = document.createElement("a")), (W.href = e), t === W.href;
}
function re(t) {
  return Object.keys(t).length === 0;
}
function d(t, e) {
  t.appendChild(e);
}
function y(t, e, n) {
  t.insertBefore(e, n || null);
}
function b(t) {
  t.parentNode.removeChild(t);
}
function ee(t, e) {
  for (let n = 0; n < t.length; n += 1) t[n] && t[n].d(e);
}
function m(t) {
  return document.createElement(t);
}
function I(t) {
  return document.createTextNode(t);
}
function _() {
  return I(" ");
}
function ce(t, e, n, s) {
  return t.addEventListener(e, n, s), () => t.removeEventListener(e, n, s);
}
function g(t, e, n) {
  n == null
    ? t.removeAttribute(e)
    : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function oe(t) {
  return Array.from(t.childNodes);
}
let V;
function E(t) {
  V = t;
}
const S = [],
  G = [],
  P = [],
  K = [],
  ae = Promise.resolve();
let R = !1;
function ue() {
  R || ((R = !0), ae.then(te));
}
function N(t) {
  P.push(t);
}
const q = new Set();
let H = 0;
function te() {
  const t = V;
  do {
    for (; H < S.length; ) {
      const e = S[H];
      H++, E(e), fe(e.$$);
    }
    for (E(null), S.length = 0, H = 0; G.length; ) G.pop()();
    for (let e = 0; e < P.length; e += 1) {
      const n = P[e];
      q.has(n) || (q.add(n), n());
    }
    P.length = 0;
  } while (S.length);
  for (; K.length; ) K.pop()();
  (R = !1), q.clear(), E(t);
}
function fe(t) {
  if (t.fragment !== null) {
    t.update(), F(t.before_update);
    const e = t.dirty;
    (t.dirty = [-1]),
      t.fragment && t.fragment.p(t.ctx, e),
      t.after_update.forEach(N);
  }
}
const z = new Set();
let de;
function j(t, e) {
  t && t.i && (z.delete(t), t.i(e));
}
function C(t, e, n, s) {
  if (t && t.o) {
    if (z.has(t)) return;
    z.add(t),
      de.c.push(() => {
        z.delete(t), s && (n && t.d(1), s());
      }),
      t.o(e);
  } else s && s();
}
function L(t) {
  t && t.c();
}
function k(t, e, n, s) {
  const { fragment: i, on_mount: r, on_destroy: l, after_update: v } = t.$$;
  i && i.m(e, n),
    s ||
      N(() => {
        const f = r.map(Z).filter(ie);
        l ? l.push(...f) : F(f), (t.$$.on_mount = []);
      }),
    v.forEach(N);
}
function w(t, e) {
  const n = t.$$;
  n.fragment !== null &&
    (F(n.on_destroy),
    n.fragment && n.fragment.d(e),
    (n.on_destroy = n.fragment = null),
    (n.ctx = []));
}
function he(t, e) {
  t.$$.dirty[0] === -1 && (S.push(t), ue(), t.$$.dirty.fill(0)),
    (t.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
}
function A(t, e, n, s, i, r, l, v = [-1]) {
  const f = V;
  E(t);
  const a = (t.$$ = {
    fragment: null,
    ctx: null,
    props: r,
    update: p,
    not_equal: i,
    bound: D(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (f ? f.$$.context : [])),
    callbacks: D(),
    dirty: v,
    skip_bound: !1,
    root: e.target || f.$$.root,
  });
  l && l(a.root);
  let o = !1;
  if (
    ((a.ctx = n
      ? n(t, e.props || {}, (c, u, ...h) => {
          const $ = h.length ? h[0] : u;
          return (
            a.ctx &&
              i(a.ctx[c], (a.ctx[c] = $)) &&
              (!a.skip_bound && a.bound[c] && a.bound[c]($), o && he(t, c)),
            u
          );
        })
      : []),
    a.update(),
    (o = !0),
    F(a.before_update),
    (a.fragment = s ? s(a.ctx) : !1),
    e.target)
  ) {
    if (e.hydrate) {
      const c = oe(e.target);
      a.fragment && a.fragment.l(c), c.forEach(b);
    } else a.fragment && a.fragment.c();
    e.intro && j(t.$$.fragment),
      k(t, e.target, e.anchor, e.customElement),
      te();
  }
  E(f);
}
class M {
  $destroy() {
    w(this, 1), (this.$destroy = p);
  }
  $on(e, n) {
    const s = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return (
      s.push(n),
      () => {
        const i = s.indexOf(n);
        i !== -1 && s.splice(i, 1);
      }
    );
  }
  $set(e) {
    this.$$set &&
      !re(e) &&
      ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
  }
}
function ve(t) {
  let e;
  return {
    c() {
      (e = m("nav")),
        (e.innerHTML = `<div class="logo svelte-11xmg9m"><a href="/" class="svelte-11xmg9m">Mukul</a></div> 
  <div class="links svelte-11xmg9m"><button class="svelte-11xmg9m"><a href="mailto:muku%6Cve1%40gma%69l.c%6Fm" class="svelte-11xmg9m">Contact Me</a></button></div>`),
        g(e, "class", "svelte-11xmg9m");
    },
    m(n, s) {
      y(n, e, s);
    },
    p,
    i: p,
    o: p,
    d(n) {
      n && b(e);
    },
  };
}
class ge extends M {
  constructor(e) {
    super(), A(this, e, null, ve, x, {});
  }
}
function J(t, e, n) {
  const s = t.slice();
  return (s[4] = e[n].url), (s[6] = n), s;
}
function Q(t) {
  let e,
    n = t[2],
    s = [];
  for (let i = 0; i < n.length; i += 1) s[i] = U(J(t, n, i));
  return {
    c() {
      e = m("div");
      for (let i = 0; i < s.length; i += 1) s[i].c();
      g(e, "class", "header_grid svelte-1lz7wi0");
    },
    m(i, r) {
      y(i, e, r);
      for (let l = 0; l < s.length; l += 1) s[l].m(e, null);
    },
    p(i, r) {
      if (r & 4) {
        n = i[2];
        let l;
        for (l = 0; l < n.length; l += 1) {
          const v = J(i, n, l);
          s[l] ? s[l].p(v, r) : ((s[l] = U(v)), s[l].c(), s[l].m(e, null));
        }
        for (; l < s.length; l += 1) s[l].d(1);
        s.length = n.length;
      }
    },
    d(i) {
      i && b(e), ee(s, i);
    },
  };
}
function U(t) {
  let e, n;
  return {
    c() {
      (e = m("img")),
        g(e, "class", "skill_img svelte-1lz7wi0"),
        le(e.src, (n = t[4])) || g(e, "src", n),
        g(e, "alt", t[4]);
    },
    m(s, i) {
      y(s, e, i);
    },
    p,
    d(s) {
      s && b(e);
    },
  };
}
function me(t) {
  let e, n, s, i, r;
  N(t[3]);
  let l = t[1].show && Q(t);
  return {
    c() {
      (e = m("section")),
        l && l.c(),
        (n = _()),
        (s = m("div")),
        (s.innerHTML =
          '<h1><span class="svelte-1lz7wi0">Hi I&#39;m Mukul</span><span class="green svelte-1lz7wi0">A Software Engineer</span></h1>'),
        g(s, "class", "header_txt svelte-1lz7wi0"),
        g(e, "class", "hero svelte-1lz7wi0");
    },
    m(v, f) {
      y(v, e, f),
        l && l.m(e, null),
        d(e, n),
        d(e, s),
        i || ((r = ce(window, "resize", t[3])), (i = !0));
    },
    p(v, [f]) {
      v[1].show
        ? l
          ? l.p(v, f)
          : ((l = Q(v)), l.c(), l.m(e, n))
        : l && (l.d(1), (l = null));
    },
    i: p,
    o: p,
    d(v) {
      v && b(e), l && l.d(), (i = !1), r();
    },
  };
}
function pe(t, e, n) {
  let s = [
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    },
  ];
  var i,
    r = { show: !1 };
  function l() {
    n(0, (i = window.innerWidth));
  }
  return (
    (t.$$.update = () => {
      t.$$.dirty & 1 &&
        (i < 720 ? n(1, (r.show = !1), r) : n(1, (r.show = !0), r));
    }),
    [i, r, s, l]
  );
}
class _e extends M {
  constructor(e) {
    super(), A(this, e, pe, me, x, {});
  }
}
function X(t, e, n) {
  const s = t.slice();
  return (s[4] = e[n]), (s[6] = n), s;
}
function Y(t) {
  let e,
    n,
    s = t[4] + "",
    i,
    r,
    l,
    v = t[1][t[6]] + "",
    f,
    a,
    o,
    c,
    u,
    h,
    $,
    T,
    B;
  return {
    c() {
      (e = m("div")),
        (n = m("h1")),
        (i = I(s)),
        (r = _()),
        (l = m("h3")),
        (f = I(v)),
        (a = _()),
        (o = m("div")),
        (c = m("a")),
        (u = m("button")),
        (u.innerHTML = '<i class="fa-brands fa-github"></i> Github'),
        (h = _()),
        ($ = m("a")),
        (T = m("button")),
        (T.innerHTML =
          '<i class="fa-solid fa-arrow-up-right-from-square"></i> Live'),
        (B = _()),
        g(n, "class", "svelte-u6fcem"),
        g(l, "class", "svelte-u6fcem"),
        g(u, "class", "svelte-u6fcem"),
        g(c, "href", t[2][t[6]]),
        g(T, "class", "svelte-u6fcem"),
        g($, "href", t[3][t[6]]),
        g(o, "class", "project_btns_grid svelte-u6fcem"),
        g(e, "class", "project svelte-u6fcem");
    },
    m(O, ne) {
      y(O, e, ne),
        d(e, n),
        d(n, i),
        d(e, r),
        d(e, l),
        d(l, f),
        d(e, a),
        d(e, o),
        d(o, c),
        d(c, u),
        d(o, h),
        d(o, $),
        d($, T),
        d(e, B);
    },
    p,
    d(O) {
      O && b(e);
    },
  };
}
function $e(t) {
  let e,
    n,
    s,
    i,
    r,
    l,
    v,
    f,
    a = t[0],
    o = [];
  for (let c = 0; c < a.length; c += 1) o[c] = Y(X(t, a, c));
  return {
    c() {
      (e = m("section")),
        (n = m("div")),
        (s = _()),
        (i = m("h1")),
        (i.textContent = "Projects"),
        (r = _()),
        (l = m("div")),
        (l.innerHTML = `<a href="https://github.com/mukulve"><button class="svelte-u6fcem"><i class="fa-brands fa-github"></i> Github</button></a> 
    <a href="https://codepen.io/mukulve"><button class="svelte-u6fcem"><i class="fa-brands fa-codepen"></i> Codepen</button></a>`),
        (v = _()),
        (f = m("div"));
      for (let c = 0; c < o.length; c += 1) o[c].c();
      g(n, "class", "divider"),
        g(i, "class", "title"),
        g(l, "class", "project_btns svelte-u6fcem"),
        g(f, "class", "project_grid svelte-u6fcem"),
        g(e, "class", "projects svelte-u6fcem");
    },
    m(c, u) {
      y(c, e, u), d(e, n), d(e, s), d(e, i), d(e, r), d(e, l), d(e, v), d(e, f);
      for (let h = 0; h < o.length; h += 1) o[h].m(f, null);
    },
    p(c, [u]) {
      if (u & 15) {
        a = c[0];
        let h;
        for (h = 0; h < a.length; h += 1) {
          const $ = X(c, a, h);
          o[h] ? o[h].p($, u) : ((o[h] = Y($)), o[h].c(), o[h].m(f, null));
        }
        for (; h < o.length; h += 1) o[h].d(1);
        o.length = a.length;
      }
    },
    i: p,
    o: p,
    d(c) {
      c && b(e), ee(o, c);
    },
  };
}
function be(t) {
  var e = [
      "Weather App",
      "Real Time Chat",
      "Music Streaming App",
      "Portfolio",
      "Airticket Search",
      "Calculator",
    ],
    n = [
      "A Weather App Made With Vuejs",
      "A Real Time Chat App Made With Firebase",
      "A Music Streaming Service Made With Vuejs",
      "A Portfolio Made With Sveltekit",
      "Scrapes Airticket Data From The Web And Displays Them",
      "A Calculator Made With Reactjs",
    ],
    s = [
      "https://github.com/mukulve/Weather-App",
      "https://github.com/mukulve/Chat-App",
      "https://github.com/mukulve/Music-Streaming-Service",
      "https://github.com/mukulve/Portfolio",
      "https://github.com/mukulve/Airticket-Search-Engine",
      "https://github.com/mukulve/Calculator",
    ],
    i = [
      "https://weathermv.netlify.app/",
      "https://mukulve.github.io/Chat-App/",
      "https://music-streaming-service.netlify.app/",
      "https://mukulve.netlify.app/",
      "#",
      "https://calculatormv.netlify.app",
    ];
  return [e, n, s, i];
}
class ye extends M {
  constructor(e) {
    super(), A(this, e, be, $e, x, {});
  }
}
function je(t) {
  let e;
  return {
    c() {
      (e = m("section")),
        (e.innerHTML = `<div class="divider"></div> 
  <h1 class="title">Contact Me</h1> 
  <div class="contact_btn svelte-10xnc1s"><button class="svelte-10xnc1s"><a href="mailto:muku%6Cve1%40gma%69l.c%6Fm" class="svelte-10xnc1s">Contact Me</a></button></div>`),
        g(e, "class", "contact svelte-10xnc1s");
    },
    m(n, s) {
      y(n, e, s);
    },
    p,
    i: p,
    o: p,
    d(n) {
      n && b(e);
    },
  };
}
class ke extends M {
  constructor(e) {
    super(), A(this, e, null, je, x, {});
  }
}
function we(t) {
  let e;
  return {
    c() {
      (e = m("footer")),
        (e.innerHTML = "<h4>\xA9 Mukul Verma</h4>"),
        g(e, "class", "svelte-p6vx7");
    },
    m(n, s) {
      y(n, e, s);
    },
    p,
    i: p,
    o: p,
    d(n) {
      n && b(e);
    },
  };
}
class xe extends M {
  constructor(e) {
    super(), A(this, e, null, we, x, {});
  }
}
function Ae(t) {
  let e, n, s, i, r, l, v, f, a, o, c;
  return (
    (n = new ge({})),
    (i = new _e({})),
    (l = new ye({})),
    (f = new ke({})),
    (o = new xe({})),
    {
      c() {
        (e = m("main")),
          L(n.$$.fragment),
          (s = _()),
          L(i.$$.fragment),
          (r = _()),
          L(l.$$.fragment),
          (v = _()),
          L(f.$$.fragment),
          (a = _()),
          L(o.$$.fragment);
      },
      m(u, h) {
        y(u, e, h),
          k(n, e, null),
          d(e, s),
          k(i, e, null),
          d(e, r),
          k(l, e, null),
          d(e, v),
          k(f, e, null),
          d(e, a),
          k(o, e, null),
          (c = !0);
      },
      p,
      i(u) {
        c ||
          (j(n.$$.fragment, u),
          j(i.$$.fragment, u),
          j(l.$$.fragment, u),
          j(f.$$.fragment, u),
          j(o.$$.fragment, u),
          (c = !0));
      },
      o(u) {
        C(n.$$.fragment, u),
          C(i.$$.fragment, u),
          C(l.$$.fragment, u),
          C(f.$$.fragment, u),
          C(o.$$.fragment, u),
          (c = !1);
      },
      d(u) {
        u && b(e), w(n), w(i), w(l), w(f), w(o);
      },
    }
  );
}
class Me extends M {
  constructor(e) {
    super(), A(this, e, null, Ae, x, {});
  }
}
new Me({ target: document.getElementById("app") });
