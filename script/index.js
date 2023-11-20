"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 1
var UserEducationEnum;
(function (UserEducationEnum) {
    UserEducationEnum["HIGHER"] = "higher";
    UserEducationEnum["MIDDLE"] = "middle";
    UserEducationEnum["DONT_HAVE"] = "dontHave";
})(UserEducationEnum || (UserEducationEnum = {}));
var userAlex = {
    name: 'Alex',
    age: 25,
    hasJob: true,
    education: UserEducationEnum.HIGHER,
    children: ['qwer', 'asdf'],
    experience: [5, 'Google']
};
var transformUserData = function (user) {
    var name = user.name, age = user.age, hasJob = user.hasJob, education = user.education, children = user.children, _a = user.experience, years = _a[0], job = _a[1];
    return "\n    Name: ".concat(name, "\n    Age: ").concat(age, "\n    Has job: ").concat(hasJob, "\n    Education: ").concat(education, "\n    Children: ").concat(!!children.length ? children.join(', ') : '-', "\n    Experience: worked in ").concat(job, ", ").concat(years, " year(s)\n  ");
};
console.log(transformUserData(userAlex));
//2
var lastIndex = function (str, char) {
    var index = str.lastIndexOf(char);
    return index === -1 ? null : index;
};
var getUsername = function (user) {
    var name = user.name;
    return name;
};
//4
function sealed(constructor) {
    console.log("sealed decorator");
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}
var Car = /** @class */ (function () {
    function Car(brand, color, maxSpeed) {
        this.brand = brand;
        this.color = color;
        this.maxSpeed = maxSpeed;
    }
    Car.prototype.get = function () {
        return this.brand;
    };
    Car.prototype.set = function (speed) {
        return this.maxSpeed += speed;
    };
    Car = __decorate([
        sealed
    ], Car);
    return Car;
}());
var Audi = /** @class */ (function (_super) {
    __extends(Audi, _super);
    function Audi(type, color, maxSpeed) {
        var _this = _super.call(this, 'Audi', color, maxSpeed) || this;
        _this.type = type;
        _this.color = color;
        _this.maxSpeed = maxSpeed;
        _this.type = type;
        return _this;
    }
    Audi.prototype.getFullInfo = function () {
        return "\n      Brand: ".concat(this.brand, ",\n      Type: ").concat(this.type, "\n      Color: ").concat(this.color, "\n      Max speed: ").concat(this.maxSpeed, "\n    ");
    };
    return Audi;
}(Car));
