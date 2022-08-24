import { IS_BROWSER } from "$fresh/runtime.ts";
import { Configuration, setup } from "twind";
import * as colors from "twind/colors";
import typography from "https://esm.sh/@twind/typography@0.0.2";
export * from "twind";

export const config: Configuration = {
  darkMode: "class",
  mode: "silent",
  theme: {
    colors,
    fill: (theme) => theme('colors'),
  },
  plugins: {
    ...typography(),
  },
};
if (IS_BROWSER) setup(config);
