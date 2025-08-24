// semantic versioning pada Bun

const appVersion = "1.2.3";

console.info(Bun.semver.satisfies(appVersion, "1.x")); // true
console.info(Bun.semver.satisfies(appVersion, "2.x")); // false
console.info(Bun.semver.satisfies(appVersion, ">=1.0.0")); // true
console.info(Bun.semver.satisfies(appVersion, "<2.0.0")); // true
console.info(Bun.semver.satisfies(appVersion, "^1.1.1")); // true