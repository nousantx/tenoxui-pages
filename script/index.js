let MyStyles = {
  ".testimonial-card":
    "fx-300px bg-[about-bg] br-8px p-2rem tc-[dark] display-flex fd-[col] jc-[flex-start] jc-[sb] gap-1rem",

  ".testimonial-card>p": "fs-1rem",
  ".person-name>h4": "fs-1.4rem",
  ".person-name>p": "fs-1rem fw-500",

  body: "bg-[light] w-100% h-mn-100vh tc-[dark]",

  main: "w-100% h-mn-100vh display-flex flex-parent-center fd-[col]",

  section:
    "w-100% w-mx-1000px display-flex fd-[col] flex-parent-center p-2rem gap-1rem",

  p: "fw-500",

  ".ab-box":
    "w-100% bg-[about-bg] tc-[dark] br-1rem w-mx p-2rem display-flex fd-[col] jc-center ai-[flex-start] gap-1rem",

  ".sec-full": "h-mn-100vh",

  a: "tc-[dark]",

  ".btn-primary": "bg-[primary] ph-1rem pv-8px br-3rem fw-600",

  "nav>a": "tc-[sub-dark] fw-500 fs-1.1rem",

  "nav>a.active": "tc-[dark] fw-700 td-underline",

  ".fx-ctr": "display-flex ai-center jc-center",

  ".fx-str": "display-flex flex-parent-[flex-start]",

  ".logo": "display-flex ai-center jc-center gap-8px",

  ".header":
    "position-fixed t-0 l-0 r-0 ph-2rem pv-1rem display-flex flex-parent-center jc-[sb]",

  ".logo-name": "fs-1.2rem",

  ".hero": "fs-3rem",

  ".hero-desc": "fw-500",

  ".flex-wrapper":
    "w-100% display-flex flex-parent-center fx-wrap-wrap ai-stretch gap-2rem",

  ".fx-wrapper-nofull":
    "w-100% display-flex flex-parent-center fx-wrap-wrap ai-[md-full]",

  ".fx-start-col": "display-flex fd-[col] flex-parent-[flex-start]",

  ".feature-desc": "ta-justify",
};

let MyProps = {
  "fx-po": ["justifyContent", "alignItems"],
};

MultiProps(MyProps);
MultiStyles(MyStyles);
TenoxUI();
