// Component Imports
import One from "@/components/type/hero/one";
import Two from "@/components/type/hero/two";
import Three from "@/components/type/hero/three";

// Component Code Imports
import oneCode from "!!raw-loader!@/components/type/hero/one";
import twoCode from "!!raw-loader!@/components/type/hero/two";
import threeCode from "!!raw-loader!@/components/type/hero/three";

export const components = [
  {
    name: "First Component",
    type: "Hero",
    component: One,
    componentCode: oneCode,
    description:
      "This is a test component for the setup of the Craft UI library",
  },
  {
    name: "Second Component",
    type: "Hero",
    component: Two,
    componentCode: twoCode,
    description:
      "This is a test component for the setup of the Craft UI library",
  },
  {
    name: "Third Component",
    type: "Hero",
    component: Three,
    componentCode: threeCode,
    description:
      "This is a test component for the setup of the Craft UI library",
  },
];
