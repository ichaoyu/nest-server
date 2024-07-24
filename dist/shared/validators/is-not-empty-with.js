"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "IsNotEmptyWith", {
    enumerable: true,
    get: function() {
        return IsNotEmptyWith;
    }
});
const _classvalidator = require("class-validator");
function IsNotEmptyWith(property, validationOptions) {
    return (object, propertyName)=>{
        (0, _classvalidator.registerDecorator)({
            name: 'IsNotEmptyWith',
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
                    if ((0, _classvalidator.isNotEmpty)(relatedValue)) {
                        return (0, _classvalidator.isNotEmpty)(value);
                    }
                    return true;
                },
                defaultMessage: (0, _classvalidator.buildMessage)((eachPrefix)=>`${eachPrefix}$property should not empty with $constraint1`, validationOptions)
            }
        });
    };
}

//# sourceMappingURL=is-not-empty-with.js.map