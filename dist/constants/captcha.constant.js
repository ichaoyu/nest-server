"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    CAPTCHA_MERGED_OPTIONS: function() {
        return CAPTCHA_MERGED_OPTIONS;
    },
    CAPTCHA_OPTIONS: function() {
        return CAPTCHA_OPTIONS;
    },
    CAPTCHA_SERVICE: function() {
        return CAPTCHA_SERVICE;
    },
    defaultOptions: function() {
        return defaultOptions;
    },
    letters: function() {
        return letters;
    },
    numbers: function() {
        return numbers;
    }
});
const CAPTCHA_SERVICE = Symbol('CAPTCHA_SERVICE');
const CAPTCHA_OPTIONS = Symbol('CAPTCHA_OPTIONS');
const CAPTCHA_MERGED_OPTIONS = Symbol('CAPTCHA_MERGED_OPTIONS');
const numbers = '0123456789';
/**
 * 小写字母
 */ const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const letters = lowerCaseLetters + lowerCaseLetters.toUpperCase();
const defaultOptions = {
    default: {
        size: 4,
        noise: 1,
        width: 120,
        height: 40
    },
    image: {
        type: 'mixed'
    },
    formula: {},
    text: {},
    expirationTime: 60 * 60 * 1000,
    idPrefix: 'captcha'
};

//# sourceMappingURL=captcha.constant.js.map