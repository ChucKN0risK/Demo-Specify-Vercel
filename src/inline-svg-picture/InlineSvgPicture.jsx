import { PictureContext } from "@kickstartds/base/lib/picture";
import { createElement } from "react";

const InlineSvgPicture = ({ src }) => createElement(src);

export const InlineSvgPictureProvider = (props) => (
  <PictureContext.Provider {...props} value={InlineSvgPicture} />
);
