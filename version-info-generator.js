/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs");

const ignoredKeys = ["_", "$0", "help", "version"];
const ignoredValues = [null, undefined, ""];

// Helpers
const normalizeKey = key => key.trim().replace("--", "");
const normalizeValue = value => value;
const extendObj = (base, extra) => ({ ...base, ...extra });

// Transforms "key=value" into { key: value }
const unpackArgv = arg => {
  const [key, value] = arg.split("=");
  return { [normalizeKey(key)]: normalizeValue(value) };
};

// Grabs the version number from a package.json file
const getPackageVersion = () => {
  const packageJson = JSON.parse(fs.readFileSync("./package.json"));
  return packageJson ? packageJson.version : "unknown";
};

// Creates the version info object
const generateVersionContent = extraArgs => {
  const baseDict = {
    buildTime: new Date().toISOString(),
    version: getPackageVersion(),
  };

  const extraDict = {};

  Object.keys(extraArgs)
    .filter(
      key =>
        !ignoredKeys.includes(key) && !ignoredValues.includes(extraArgs[key]),
    )
    .forEach(key => (extraDict[key] = extraArgs[key]));

  return JSON.stringify(extendObj(baseDict, extraDict), null, 2);
};

// Main entry point
const main = () => {
  const argv = process.argv.slice(2);
  const args = argv.map(unpackArgv).reduce(extendObj, {});
  const content = generateVersionContent(args);
  console.log(content);
};

// Go, go, go
main();
