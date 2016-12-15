import * as fs from "fs";
import * as path from "path";
import * as glob from "globby";
import * as CleanCSS from "clean-css";

if (process.argv.length !== 4) {
    console.error("A source and destination is required!");
} else {
    let files = glob.sync(process.argv[2]);
    files.forEach((file) => {
        const source = fs.readFileSync(file, "utf8");
        new CleanCSS().minify(source, function (errors, minified) {
            fs.writeFileSync(path.join(process.argv[3], path.basename(file, ".css") + ".min.css"), minified.styles);
            if (errors) {
                console.error(errors);
            }
        });
    });
}


