var FtpDeploy = require("ftp-deploy");
var ftpDeploy = new FtpDeploy();

var config = {
    user: "devhugoregadas",
    // Password optional, prompted if none given
    password: "password",
    host: "https://foodely.web.app",
    port: 21,
    localRoot: __dirname + "/dist/foodely",
    remoteRoot: "/public_html",
    // include: ["*", "**/*"],      // this would upload everything except dot files
    include: ["*", "**/*", ".*"],
    // e.g. exclude sourcemaps, and ALL files in node_modules (including dot files)
    exclude: ["dist/**/*.map", "node_modules/**", "node_modules/**/.*", ".git/**"],
    // delete ALL existing files at destination before uploading, if true
    deleteRemote: false,
    forcePasv: true
};
 
ftpDeploy
  .deploy(config)
  .then(res => console.log("finished:", res))
  .catch(err => console.log(err));