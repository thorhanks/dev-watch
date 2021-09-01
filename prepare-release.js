const Path = require("path");
const { promises: Fs } = require("fs");
const FsExtra = require("fs-extra");

/**
 * Copy all chrom extension source files, that are not part of
 * vue build, into the final release folder.
 */
const source = "./src/extension";
const destination = "./dist";

FsExtra.copy(source, destination)
    .then(() => {
        console.log("COMPLETE: extension files copied to dist");
    })
    .catch((err) => {
        if (err) {
            console.log("An error occured while copying the folder.");
            return console.error(err);
        }
    });
