/* ─── THEME TOKENS ─────────────────────────────────────────────────────────── */
export const themes = {
  dark: {
    bg: "#050507",
    surface: "#0e0e16",
    s2: "#15151f",
    s3: "#1c1c28",
    border: "rgba(255,255,255,0.07)",
    borderH: "rgba(255,255,255,0.15)",
    text: "#eeeef5",
    muted: "#64648a",
    navBg: "rgba(5,5,7,0.88)",
    glass: "rgba(255,255,255,0.04)",
    noise: 0.03,
    gridOp: 0.04,
  },
  light: {
    bg: "#F5F5F5",
    surface: "#ffffff",
    s2: "#ededf7",
    s3: "#e3e3f0",
    border: "rgba(0,0,0,0.08)",
    borderH: "rgba(0,0,0,0.2)",
    text: "#0d0d1a",
    muted: "#7070a0",
    navBg: "rgba(245,245,251,0.9)",
    glass: "rgba(255,255,255,0.75)",
    noise: 0.015,
    gridOp: 0.07,
  },
};

/* ─── GLOBAL CSS COMPONENT ─────────────────────────────────────────────────── */
export function GlobalStyles({ theme: th }) {
  const t = themes[th];
  return (
    <style>{`
    *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
    :root{
      --bg:${t.bg};--sf:${t.surface};--s2:${t.s2};--s3:${t.s3};
      --bd:${t.border};--bdh:${t.borderH};
      --tx:${t.text};--mu:${t.muted};
      --nb:${t.navBg};--gl:${t.glass};
      --bl:#3b82f6;--cy:#06b6d4;--pu:#8b5cf6;--or:#f97316;
      --fd:'Bebas Neue',sans-serif;--fb:'Manrope',sans-serif;
    }
    html{scroll-behavior:smooth}
    body{background:var(--bg);color:var(--tx);font-family:var(--fb);overflow-x:hidden;cursor:none;transition:background .35s,color .35s}
    ::-webkit-scrollbar{width:3px}
    ::-webkit-scrollbar-track{background:var(--bg)}
    ::-webkit-scrollbar-thumb{background:var(--pu);border-radius:2px}

    /* cursor */
    .cur{position:fixed;top:0;left:0;pointer-events:none;z-index:9999}
    .cdot{width:8px;height:8px;background:${th === "dark" ? "#fff" : "#3b82f6"};border-radius:50%;position:fixed;transform:translate(-50%,-50%)}
    .cring{width:36px;height:36px;border:1.5px solid ${th === "dark" ? "rgba(255,255,255,0.5)" : "rgba(59,130,246,0.55)"};border-radius:50%;position:fixed;transform:translate(-50%,-50%);transition:width .25s,height .25s,border-color .25s}
    .cring.big{width:54px;height:54px}

    /* noise */
    .noise{position:fixed;inset:0;pointer-events:none;z-index:1;opacity:${t.noise};
      background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")}

    /* scroll reveals */
    .rv{opacity:0;transform:translateY(32px);transition:opacity .7s ease,transform .7s ease}
    .rv.in{opacity:1;transform:none}
    .rl{opacity:0;transform:translateX(-32px);transition:opacity .7s ease,transform .7s ease}
    .rl.in{opacity:1;transform:none}
    .rr{opacity:0;transform:translateX(32px);transition:opacity .7s ease,transform .7s ease}
    .rr.in{opacity:1;transform:none}

    /* glass */
    .gl{background:var(--gl);backdrop-filter:blur(20px);border:1px solid var(--bd)}

    /* buttons */
    .bp{display:inline-flex;align-items:center;gap:8px;padding:13px 28px;border-radius:5px;
      background:linear-gradient(135deg,var(--bl),var(--pu));color:#fff;
      font-family:var(--fb);font-weight:700;font-size:12px;letter-spacing:1.5px;text-transform:uppercase;
      border:none;cursor:none;transition:transform .2s,box-shadow .2s}
    .bp:hover{transform:translateY(-2px);box-shadow:0 12px 36px rgba(139,92,246,.4)}
    .bo{display:inline-flex;align-items:center;gap:8px;padding:12px 28px;border-radius:5px;
      background:transparent;color:var(--tx);font-family:var(--fb);font-weight:700;
      font-size:12px;letter-spacing:1.5px;text-transform:uppercase;
      border:1.5px solid var(--bd);cursor:none;transition:border-color .2s,background .2s,transform .2s}
    .bo:hover{border-color:var(--cy);background:rgba(6,182,212,.08);transform:translateY(-2px)}

    /* nav */
    nav{position:fixed;top:0;left:0;right:0;z-index:100;transition:background .4s,border-color .4s}
    nav.sc{background:var(--nb);backdrop-filter:blur(24px);border-bottom:1px solid var(--bd)}
    .ni{max-width:1360px;margin:0 auto;padding:0 5%;display:flex;align-items:center;justify-content:space-between;height:68px}
    .nl{font-family:var(--fd);font-size:20px;letter-spacing:3px;cursor:none;
      background:linear-gradient(90deg,var(--cy),var(--pu));-webkit-background-clip:text;-webkit-text-fill-color:transparent}
    .nls{display:flex;align-items:center;gap:30px}
    .nls a{color:var(--mu);font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;
      text-decoration:none;cursor:none;position:relative;transition:color .2s}
    .nls a::after{content:'';position:absolute;bottom:-4px;left:0;width:0;height:1.5px;background:var(--cy);transition:width .28s}
    .nls a:hover{color:var(--tx)}
    .nls a:hover::after{width:100%}
    .nr{display:flex;align-items:center;gap:10px}
    .tb{width:38px;height:38px;border-radius:8px;border:1px solid var(--bd);background:var(--s2);
      color:var(--tx);cursor:none;display:flex;align-items:center;justify-content:center;font-size:15px;
      transition:border-color .2s,background .2s}
    .tb:hover{border-color:var(--bdh);background:var(--s3)}
    .nh{padding:9px 20px;border-radius:4px;background:linear-gradient(135deg,var(--bl),var(--pu));
      color:#fff;font-family:var(--fb);font-weight:700;font-size:11px;letter-spacing:1.5px;
      text-transform:uppercase;border:none;cursor:none;transition:box-shadow .2s,transform .2s}
    .nh:hover{box-shadow:0 8px 24px rgba(139,92,246,.4);transform:translateY(-1px)}

    /* layout */
    .wrap{max-width:1360px;margin:0 auto;padding:0 5%}
    .tag{display:inline-flex;align-items:center;gap:10px;font-size:10px;font-weight:800;
      letter-spacing:3px;text-transform:uppercase;color:var(--cy);margin-bottom:16px}
    .tag::before{content:'';width:22px;height:1.5px;background:var(--cy);flex-shrink:0}
    .h1{font-family:var(--fd);font-size:clamp(42px,5.2vw,80px);line-height:.95;letter-spacing:.5px;color:var(--tx)}
    .gr{background:linear-gradient(135deg,var(--bl),var(--cy),var(--pu));-webkit-background-clip:text;-webkit-text-fill-color:transparent}

    /* hero */
    #hero{min-height:100vh;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden}
    .orb1{position:absolute;width:640px;height:640px;border-radius:50%;background:radial-gradient(circle,rgba(59,130,246,.13),transparent 70%);top:-80px;right:-80px;pointer-events:none}
    .orb2{position:absolute;width:480px;height:480px;border-radius:50%;background:radial-gradient(circle,rgba(139,92,246,.1),transparent 70%);bottom:-60px;left:-60px;pointer-events:none}
    .hgrid{position:absolute;inset:0;opacity:${t.gridOp};
      background-image:linear-gradient(var(--bd) 1px,transparent 1px),linear-gradient(90deg,var(--bd) 1px,transparent 1px);
      background-size:70px 70px;pointer-events:none}
    .hc{position:relative;z-index:2;text-align:center;padding:0 5%}
    .hchip{display:inline-flex;align-items:center;gap:10px;padding:7px 18px;border-radius:100px;
      background:var(--gl);border:1px solid var(--bd);font-size:10px;font-weight:800;
      letter-spacing:2px;text-transform:uppercase;color:var(--cy);margin-bottom:26px;
      animation:fu .75s ease both}
    .hdot{width:6px;height:6px;background:var(--cy);border-radius:50%;animation:bl 2s ease infinite}
    .ht{font-family:var(--fd);font-size:clamp(64px,10.5vw,158px);line-height:.88;animation:fu .8s .08s ease both}
    .hroles{display:flex;align-items:center;justify-content:center;gap:12px;flex-wrap:wrap;margin-top:18px;animation:fu .8s .18s ease both}
    .hpill{display:inline-flex;align-items:center;gap:7px;padding:6px 14px;border-radius:100px;
      background:var(--s2);border:1px solid var(--bd);font-size:11px;font-weight:600;color:var(--mu)}
    .hpilldot{width:5px;height:5px;border-radius:50%;background:var(--cy)}
    .hsub{font-size:clamp(13px,1.3vw,16px);color:var(--mu);max-width:460px;margin:18px auto 0;line-height:1.8;font-weight:400;animation:fu .8s .22s ease both}
    .hbtns{display:flex;gap:12px;justify-content:center;flex-wrap:wrap;margin-top:40px;animation:fu .8s .3s ease both}
    .hscroll{position:absolute;bottom:32px;left:50%;transform:translateX(-50%);
      display:flex;flex-direction:column;align-items:center;gap:9px;
      color:var(--mu);font-size:9px;font-weight:800;letter-spacing:2.5px;text-transform:uppercase;
      animation:fu 1s .5s ease both;cursor:none}
    .sline{width:1.5px;height:40px;background:linear-gradient(to bottom,var(--pu),transparent);animation:pl 2s ease infinite}

    /* about */
    #about{padding:120px 0}
    .ag{display:grid;grid-template-columns:1fr 1fr;gap:68px;align-items:center}
    .aib{aspect-ratio:4/5;max-height:500px;border-radius:8px;overflow:hidden;position:relative;
      background:linear-gradient(135deg,var(--s2),var(--s3));border:1px solid var(--bd);
      display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px}
    .aib::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at 50% 80%,rgba(139,92,246,.15),transparent);pointer-events:none}
    .aimage{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block;z-index:0;transform:scale(1.02);transition:transform .6s}
    .aib::before{z-index:1}
    .aib > *:not(.aimage){position:relative;z-index:2}
    .aib:hover .aimage{transform:scale(1.06)}
    .asil{width:100px;height:100px;border-radius:50%;background:linear-gradient(135deg,var(--bl),var(--pu));opacity:.14}
    .albl{font-size:11px;color:var(--mu);font-weight:600;letter-spacing:1px}
    .abio{font-size:14px;line-height:1.85;color:var(--mu);margin:20px 0 32px}
    .astats{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:40px}
    .asc{padding:18px;border-radius:6px;text-align:center}
    .asn{font-family:var(--fd);font-size:44px;line-height:1;background:linear-gradient(135deg,var(--cy),var(--bl));-webkit-background-clip:text;-webkit-text-fill-color:transparent}
    .asl{font-size:9px;font-weight:800;letter-spacing:1.5px;text-transform:uppercase;color:var(--mu);margin-top:3px}

    /* projects */
    #projects{padding:120px 0}
    .fbar{display:flex;gap:8px;flex-wrap:wrap;margin:40px 0}
    .fb{padding:8px 18px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:1px;
      text-transform:uppercase;border:1.5px solid var(--bd);background:transparent;color:var(--mu);
      cursor:none;transition:all .2s}
    .fb:hover,.fb.on{border-color:var(--bl);color:var(--tx);background:rgba(59,130,246,.1)}
    .pg{display:grid;grid-template-columns:repeat(auto-fill,minmax(340px,1fr));gap:18px}
    .pc{border-radius:8px;overflow:hidden;border:1px solid var(--bd);background:var(--sf);
      cursor:none;transition:transform .3s,box-shadow .3s,border-color .3s}
    .pc:hover{transform:translateY(-7px);box-shadow:0 24px 60px rgba(0,0,0,.14);border-color:var(--bdh)}
    .pth{aspect-ratio:16/9;position:relative;overflow:hidden;display:flex;align-items:center;justify-content:center}
    .pthi{width:100%;height:100%;display:flex;align-items:center;justify-content:center;transition:transform .5s}
    .pc:hover .pthi{transform:scale(1.05)}
    .pov{position:absolute;inset:0;background:rgba(0,0,0,.5);opacity:0;transition:opacity .3s;
      display:flex;align-items:center;justify-content:center}
    .pc:hover .pov{opacity:1}
    .pplay{width:48px;height:48px;border-radius:50%;background:rgba(255,255,255,.15);
      backdrop-filter:blur(10px);border:1.5px solid rgba(255,255,255,.3);
      display:flex;align-items:center;justify-content:center}
    .pb{padding:20px}
    .pcat{font-size:9px;font-weight:800;letter-spacing:2px;text-transform:uppercase;color:var(--cy);margin-bottom:5px}
    .pt{font-size:16px;font-weight:800;margin-bottom:7px;line-height:1.3;color:var(--tx)}
    .pd{font-size:13px;color:var(--mu);line-height:1.65;margin-bottom:13px}
    .ptools{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:16px}
    .ptag{display:inline-flex;align-items:center;gap:5px;padding:3px 9px;border-radius:3px;
      font-size:9px;font-weight:800;letter-spacing:1px;text-transform:uppercase;
      background:var(--s2);color:var(--mu);border:1px solid var(--bd)}
    .plink{display:inline-flex;align-items:center;gap:6px;font-size:10px;font-weight:800;
      letter-spacing:1.5px;text-transform:uppercase;color:var(--bl);text-decoration:none;cursor:none;
      transition:gap .2s,color .2s}
    .plink:hover{gap:10px;color:var(--cy)}

    /* tools */
    #tools{padding:120px 0;background:linear-gradient(180deg,transparent,rgba(59,130,246,.04) 50%,transparent)}
    .tg{display:grid;grid-template-columns:repeat(auto-fill,minmax(185px,1fr));gap:13px;margin-top:52px}
    .tc{padding:22px 18px;border-radius:8px;text-align:center;border:1px solid var(--bd);background:var(--sf);
      cursor:none;transition:transform .3s,border-color .3s,box-shadow .3s}
    .tc:hover{transform:translateY(-5px);border-color:var(--bdh);box-shadow:0 16px 40px rgba(0,0,0,.1)}
    .tiw{width:42px;height:42px;border-radius:10px;margin:0 auto 11px;display:flex;align-items:center;
      justify-content:center;background:var(--s2);border:1px solid var(--bd)}
    .tn{font-size:13px;font-weight:800;margin-bottom:3px;color:var(--tx)}
    .te{font-size:9px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--mu);margin-bottom:13px}
    .bt{width:100%;height:2.5px;background:var(--s3);border-radius:10px;overflow:hidden}
    .bf{height:100%;border-radius:10px;transition:width 1.2s cubic-bezier(.4,0,.2,1)}

    /* services */
    #services{padding:120px 0}
    .sg{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:16px;margin-top:52px}
    .sc2{padding:30px 26px;border-radius:8px;border:1px solid var(--bd);background:var(--sf);cursor:none;
      position:relative;overflow:hidden;transition:transform .3s,border-color .3s}
    .sc2:hover{transform:translateY(-5px);border-color:var(--bdh)}
    .snum{font-family:var(--fd);font-size:56px;line-height:1;position:absolute;top:16px;right:20px;
      color:${th === "dark" ? "rgba(255,255,255,.04)" : "rgba(0,0,0,.05)"}}
    .siw{width:38px;height:38px;border-radius:8px;background:var(--s2);border:1px solid var(--bd);
      display:flex;align-items:center;justify-content:center;margin-bottom:16px}
    .stit{font-size:17px;font-weight:800;margin-bottom:9px;color:var(--tx)}
    .sdesc{font-size:13px;color:var(--mu);line-height:1.7}
    .sgl{position:absolute;bottom:-40px;right:-40px;width:100px;height:100px;border-radius:50%;
      opacity:0;filter:blur(32px);transition:opacity .3s}
    .sc2:hover .sgl{opacity:.22}

    /* contact */
    #contact{padding:120px 0}
    .cg{display:grid;grid-template-columns:1fr 1fr;gap:68px;align-items:start;margin-top:52px}
    .avp{display:inline-flex;align-items:center;gap:8px;padding:6px 15px;border-radius:100px;
      background:rgba(16,185,129,.1);border:1px solid rgba(16,185,129,.2);
      font-size:9px;font-weight:800;letter-spacing:1.5px;text-transform:uppercase;color:#10b981;margin-bottom:24px}
    .avd{width:6px;height:6px;border-radius:50%;background:#10b981;animation:bl 2s ease infinite}
    .cbig{font-family:var(--fd);font-size:clamp(32px,4vw,62px);line-height:1.05;margin-bottom:18px;color:var(--tx)}
    .clist{display:flex;flex-direction:column;gap:12px;margin-top:32px}
    .cl{display:flex;align-items:center;gap:13px;color:var(--mu);text-decoration:none;font-size:13px;font-weight:600;cursor:none;transition:color .2s}
    .cl:hover{color:var(--tx)}
    .ci{width:36px;height:36px;border-radius:8px;background:var(--s2);border:1px solid var(--bd);
      display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0}
    .sr{display:flex;gap:8px;margin-top:26px}
    .sb{width:36px;height:36px;border-radius:8px;border:1px solid var(--bd);background:var(--s2);
      display:flex;align-items:center;justify-content:center;cursor:none;text-decoration:none;
      transition:border-color .2s,background .2s,transform .2s}
    .sb:hover{border-color:var(--bdh);background:var(--s3);transform:translateY(-2px)}
    .fw{background:var(--sf);border:1px solid var(--bd);border-radius:8px;padding:32px}
    .fg{margin-bottom:16px}
    .flbl{display:block;font-size:9px;font-weight:800;letter-spacing:2px;text-transform:uppercase;color:var(--mu);margin-bottom:6px}
    .fi,.fta{width:100%;padding:12px 15px;border-radius:4px;background:var(--s2);border:1.5px solid var(--bd);
      color:var(--tx);font-family:var(--fb);font-size:13px;font-weight:500;transition:border-color .2s;outline:none;resize:none}
    .fi:focus,.fta:focus{border-color:var(--bl)}
    .fi::placeholder,.fta::placeholder{color:var(--mu)}
    .fta{min-height:100px}

    /* footer */
    footer{padding:36px 5%;border-top:1px solid var(--bd)}
    .fin{max-width:1360px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:16px}
    .flogo{font-family:var(--fd);font-size:17px;letter-spacing:3px;background:linear-gradient(90deg,var(--cy),var(--pu));-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:3px}
    .fcp{font-size:11px;color:var(--mu);font-weight:500}
    .fls{display:flex;gap:22px}
    .fls a{font-size:11px;color:var(--mu);text-decoration:none;cursor:none;font-weight:700;letter-spacing:.5px;transition:color .2s}
    .fls a:hover{color:var(--tx)}

    /* keyframes */
    @keyframes fu{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:none}}
    @keyframes bl{0%,100%{opacity:1}50%{opacity:.25}}
    @keyframes pl{0%,100%{transform:scaleY(1);opacity:1}50%{transform:scaleY(.5);opacity:.35}}

    /* responsive */
    @media(max-width:900px){
      .ag,.cg{grid-template-columns:1fr;gap:44px}
      .aib{max-height:280px}
      .pg{grid-template-columns:1fr}
    }
    @media(max-width:768px){
      .nls{display:none}
      .astats{grid-template-columns:repeat(2,1fr)}
      .tg{grid-template-columns:repeat(2,1fr)}
      .sg{grid-template-columns:1fr}
      .fin{flex-direction:column;align-items:flex-start}
      .hbtns{flex-direction:column;align-items:center}
    }
  `}</style>
  );
}
