// Component Imports
import One from "@/components/type/hero/one";
import Two from "@/components/type/hero/two";
import Three from "@/components/type/hero/three";
import Four from "@/components/type/hero/four";

// Component Code Imports
import oneCode from "!!raw-loader!@/components/type/hero/one";
import twoCode from "!!raw-loader!@/components/type/hero/two";
import threeCode from "!!raw-loader!@/components/type/hero/three";
import fourCode from "!!raw-loader!@/components/type/hero/four";

// Component Image Imports
import oneImage from "@/public/example/one.png";
import twoImage from "@/public/example/two.png";
import threeImage from "@/public/example/three.png";
import fourImage from "@/public/example/four.png";

export const components = [
  {
    name: "Hero 001",
    type: "Hero",
    image: oneImage,
    component: One,
    componentCode: oneCode,
    description:
      "This is a test component for the setup of the Craft UI library",
  },
  {
    name: "Hero 002",
    type: "Hero",
    image: twoImage,
    component: Two,
    componentCode: twoCode,
    description:
      "This is a test component for the setup of the Craft UI library",
  },
  {
    name: "Hero 003",
    type: "Hero",
    image: threeImage,
    component: Three,
    componentCode: threeCode,
    description:
      "This is a test component for the setup of the Craft UI library",
  },
  {
    name: "Hero 004",
    type: "Hero",
    image: fourImage,
    component: Four,
    componentCode: fourCode,
    description:
      "This is a test component for the setup of the Craft UI library",
  },
];
