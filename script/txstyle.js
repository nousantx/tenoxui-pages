/*!
 * tenoxui v0.4.23
 */

defineProps({
  dis: ["display"],
  scroll: ["scrollBehavior"],
  "fx-par": ["align-items", "justify-content"],
});

makeStyles({
  ".w-full, .w-mx": "w-100%",
  ".h-full, .h-mx": "h-100%",
  ".grid": "display-grid",
  ".flex, .flex-wrap, .fx-ctr, .fx-center, .fx-str, .fx-start, .fx-end,.edu-card-wrapper":
    "display-flex",
  ".flex-wrap,.edu-card-wrapper": "fx-wrap-wrap",
  ".fx-center,.fx-ctr": "flex-parent-center",
  ".fx-start,.fx-str": "flex-parent-[flex-start]",
  ".fx-end": "flex-parent-[flex-end]",
  ".ai-str, .ai-start": "ai-[flex-start]",
  ".ai-end": "ai-[flex-end]",
  ".ai-ctr": "ai-center",
  ".ai-full, .edu-card-wrapper": "ai-stretch",
  ".jc-str,.justify-start,.js-start": "jc-[flex-start]",
  ".jc-end,.justify-end": "jc-[flex-end]",
  ".jc-ctr,.justify-center": "jc-center",
  ".fd-col, .fd-clm, .fx-clm": "fd-column",
  ".absolute": "position-absolute",
  ".relative": "position-relative",
  ".fixed": "position-fixed",
  ".italic": "text-style-italic",
  ".rounded": "br-50%",
  ".text-center": "ta-center",
  ".nowrap": "white-space-nowrap",
  ".invert": "invert-1",
  ".text-primary": "tc-[primary-500]",
  html: "scroll-smooth",
});

moreColor();
tenoxui();
