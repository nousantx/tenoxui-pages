/*!
 * tenoxui v0.4.23
 */
defineProps({
  bdr: ["border"],
});

makeStyles({
  "nav a": "tc-[neutral-200] fs-14px fw-500",
  a: "tc-[neutral-200]",
  ".btn-primary":
    "tn-uppercase bg-[primary-500] tc-[neutral-900] pv-8px ph-1rem fw-700 br-6px fx-ctr gap-8px display-flex flex-parent-center",
  ".btn-primary > *": "tn-none",
  ".watermark":
    "post-fixed b-0 r-0 bg-[trans-bg] ph-1rem pv-8px radius-tl-1rem opa-0.7",
});
