const { writeTokens } = require("@kickstartds/core/design-tokens");
const primitives = require("../token-primitives.json");

writeTokens(primitives, "tokens");
