import * as cp from "cp";

if (process.argv.length !== 4) {
    console.error("A source and destination file is required!");
} else {
    cp.sync(process.argv[2], process.argv[3]);
}
