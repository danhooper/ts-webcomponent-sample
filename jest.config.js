module.exports = {
    globals: {
        "ts-jest": {
            tsConfig: "tsconfig.json"
        }
    },
    moduleFileExtensions: [
        "ts",
        "js"
    ],
    transform: {
        "^.+\\.(js|ts|tsx)$": "ts-jest"
    },
    testMatch: [
        "**/src/**/*.test.(ts|js)"
    ],
    testEnvironment: "jsdom",
    transformIgnorePatterns: [
      "node_modules/(?!(lit-element|lit-html)/)"
    ]
};
