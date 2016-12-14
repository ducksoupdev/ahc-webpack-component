import { Linter } from "tslint";
import * as fs from "fs";
import * as parseArgs from "minimist";
import * as glob from "globby";

let args = parseArgs(process.argv.slice(2), {
    string: ["f"]
});

function readFileSync(file, options) {
    options = options || {};
    if (typeof options === "string") {
        options = {
            encoding: options
        };
    }

    let shouldThrow = "throws" in options ? options.throws : true;
    let content = fs.readFileSync(file, options);

    try {
        return JSON.parse(content, options.reviver);
    } catch (err) {
        if (shouldThrow) {
            err.message = file + ": " + err.message;
            throw err;
        } else {
            return null;
        }
    }
}

let fileOptions = readFileSync("./tslint.json", "utf8");

const options = {
    formatter: "prose",
    rulesDirectory: null,
    formattersDirectory: null,
    fix: false
};

let files = glob.sync(args.f);
files.forEach((file) => {
    const contents = fs.readFileSync(file, "utf8");

    const linter = new Linter(options);
    linter.lint(file, contents, fileOptions);
    const results = linter.getResult();
    if (results.failureCount) console.log(results.output);
});
