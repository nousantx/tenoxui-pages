
// See All Classes

console.log(Classes);

// See All Property

console.log(property);

// Tutorial 1 : Make your first custom property

// 1. Add your property

addType("myFirst", ["padding"]);

// 2. Make sure your property combined to remain -
//    property after you initialize it

console.log("Tutorial 2 :", property);

// Tutorial 2 : Make your first styled element

makeStyle(".my-style", "tc-[neutral-100] p-1rem");

// Tutorial 3 : Make multi custom properties

MyProps = {
  dis: ["display"],

  "fx-par": ["align-items", "justify-content"],
};

defineProps(MyProps);

// Tutorial 4 : Make multi custom styles

MyStyles = {
  ".flex": "dis-flex",

  ".fx-ctr": "dis-flex fx-par-center",

  body: "w-100vw h-100svh bg-[neutral-900] dis-flex fx-par-center fd-column p-2rem",

  footer: "w-100% dis-flex fx-par-center p-2rem post-fixed b-0",

  "footer>p": "tc-[accent-400] fs-14px fw-500",
};

makeStyles(MyStyles);

moreColor();
tenoxui();
