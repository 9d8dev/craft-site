// Component Imports
import One from "@/components/type/hero/one";
import Two from "@/components/type/hero/two";
import Three from "@/components/type/hero/three";
import Four from "@/components/type/hero/four";
import Five from "@/components/type/hero/five";
import Six from "./components/type/hero/six";

// Component Code Imports
import oneCode from "!!raw-loader!@/components/type/hero/one";
import twoCode from "!!raw-loader!@/components/type/hero/two";
import threeCode from "!!raw-loader!@/components/type/hero/three";
import fourCode from "!!raw-loader!@/components/type/hero/four";
import fiveCode from "!!raw-loader!@/components/type/hero/five";
import sixCode from "!!raw-loader!@/components/type/hero/six";

// Component Image Imports
import oneImage from "@/public/example/one.png";
import twoImage from "@/public/example/two.png";
import threeImage from "@/public/example/three.png";
import fourImage from "@/public/example/four.png";
import fiveImage from "@/public/example/five.png";
import sixImage from "@/public/example/six.png";

export const components = [
  {
    name: "Hero 001",
    type: "Hero",
    image: oneImage,
    component: One,
    componentCode: oneCode,
  },
  {
    name: "Hero 002",
    type: "Hero",
    image: twoImage,
    component: Two,
    componentCode: twoCode,
  },
  {
    name: "Hero 003",
    type: "Hero",
    image: threeImage,
    component: Three,
    componentCode: threeCode,
  },
  {
    name: "Hero 004",
    type: "Hero",
    image: fourImage,
    component: Four,
    componentCode: fourCode,
  },
  {
    name: "Hero 005",
    type: "Hero",
    image: fiveImage,
    component: Five,
    componentCode: fiveCode,
  },
  {
    name: "Hero 006",
    type: "Hero",
    image: sixImage,
    component: Six,
    componentCode: sixCode,
  },
];
