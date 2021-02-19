require("@testing-library/jest-native/extend-expect")

// jest.setup.js
global.self = global
global.window = {}
global.XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest

import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);