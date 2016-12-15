import * as cp from "cp";
import * as path from "path";
import * as glob from "globby";

if (process.argv.length !== 4) {
    console.error("A source and destination is required!");
} else {
    let files = glob.sync(process.argv[2]);
    files.forEach((file) => {
        cp.sync(file, path.join(process.argv[3], path.basename(file)));
    });
}
