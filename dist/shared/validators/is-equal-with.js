"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "IsEqualWith", {
    enumerable: true,
    get: function() {
        return IsEqualWith;
    }
});
const _classvalidator = require("class-validator");
function IsEqualWith(property, validationOptions) {
    return (object, propertyName)=>{
        (0, _classvalidator.registerDecorator)({
            name: 'IsEqualWith',
            target: object.constructor,
            propertyName: propertyName,
            constraints: [
                property
            ],
            options: validationOptions,
            validator: {
                validate (value, args) {
                    const [relatedPropertyName] = args.constraints;
                    const relatedValue = args.object[relatedPropertyName];
                    return (0, _classvalidator.equals)(value, relatedValue);
                },
                defaultMessage: (0, _classvalidator.buildMessage)((eachPrefix)=>`${eachPrefix}$property should equal with $constraint1`, validationOptions)
            }
        });
    };
}

//# sourceMappingURL=is-equal-with.js.map