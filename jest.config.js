module.exports = {
    moduleFileExtensions: [
        "js"
    ],
    transformIgnorePatterns: [
        "/node_modules/"
    ],
    testMatch: [
        "**/*.test.(js)"
    ],
    moduleDirectories: [
        "node_modules"
    ],
    moduleNameMapper: {
        "^/src/(.*)": "<rootDir>/src/$1"
    },
    "//": "This is to make sure we use our own JSDOM",
    testEnvironment: "node",
    verbose: true
}
