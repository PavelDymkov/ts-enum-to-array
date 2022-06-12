import { npmPackagr } from "npm-packagr";
import {
    assets,
    badge,
    BadgeType,
    git,
    npx,
    packageJSON,
    Pipe,
    publish,
    test,
    version,
} from "npm-packagr/pipes";

const { name: commitMessage } = require("./package.json");
const main = "ts-enum-to-array.js";

npmPackagr({
    pipeline: [
        git("commit", commitMessage),

        (context) => npx(`tsc --outDir ${context.packagePath}`)(context),

        ({ packagePath, path, test }) => {
            const mainFile = path`${packagePath}/${main}`;

            if (test("-f", mainFile)) return;

            throw `main file is not exists (${mainFile})`;
        },

        test(),

        badge(BadgeType.Test),
        badge(BadgeType.License),

        assets("LICENSE", "README.md"),

        // increaseVersion(),

        packageJSON((packageJson) => {
            delete packageJson.scripts;
            delete packageJson.devDependencies;

            packageJson.main = main;
        }),

        git("commit", commitMessage),
        git("push"),

        publish({
            login: { account: "paveldymkov", email: "dymkov86@gmail.com" },
        }),
    ],
});

function increaseVersion(): Pipe {
    const pipe = version("patch", {
        commitHooks: false,
        gitTagVersion: false,
    });

    return (context) => {
        pipe(context), pipe(context);
    };
}
