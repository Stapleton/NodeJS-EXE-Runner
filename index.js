const children = require("child_process");
const options = require("./launch.json");

children.execFileSync(options.file, options.args, { windowsHide: true });
