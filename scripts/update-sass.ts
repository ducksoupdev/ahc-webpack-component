import * as childProcess from "child_process";
const exec = childProcess.exec;

let isWin = /^win/.test(process.platform);
if (isWin) {
    exec("powershell.exe scripts/update-node-sass.ps1", (error, stdout, stderr) => {
        if (error !== null) {
            console.log("exec error: " + error);
        }
    });
}
