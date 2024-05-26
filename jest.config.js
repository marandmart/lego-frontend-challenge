export default {
  preset: 'ts-jest',

  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },

  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    "^.+\\.svg$": "jest-transformer-svg",
    '\\.(gif|ttf|eot|svg|png|jpg|jpeg)$': 'jest-transform-stub',

  },

  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  transformIgnorePatterns: [
    'node_modules/(?!@babel/runtime)',
  ],
};
