/*!
 * tenoxui v0.4.23
 */
defineProps({
  bdr: ["border"],
});

makeStyles({
  "nav a": "tc-[neutral-200] fs-14px fw-500",
  a: "tc-[neutral-300]",
  p: "fw-600",
  ".btn-primary":
    "tn-uppercase bg-[primary-500] tc-[neutral-900] pv-8px ph-1rem fw-700 br-6px fx-ctr gap-8px display-flex flex-parent-center",
  ".btn-primary > *": "tn-none",
  // Footer Links
  "footer ul li": "mt-8px tc-[neutral-300]",
});
