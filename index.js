const children = require("child_process");
const options = require("./launch.json");

process.chdir(options.dir);
children.execFile(options.file, options.args, {
    cwd: options.dir,
    windowsHide: false,
});
