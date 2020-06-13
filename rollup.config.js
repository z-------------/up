export default {
    input: "build/src/cli.js",
    output: {
        file: "up.bundle.js",
        format: "iife",
        name: "up",
        exports: "named",
    },
};
