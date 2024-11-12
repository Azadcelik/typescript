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
var TakePhoto = /** @class */ (function () {
    function TakePhoto(photoMode, filter, burst) {
        this.photoMode = photoMode;
        this.filter = filter;
        this.burst = burst;
    }
    TakePhoto.prototype.getPicture = function () {
        return 6;
    };
    return TakePhoto;
}());
var InstagramPhoto = /** @class */ (function (_super) {
    __extends(InstagramPhoto, _super);
    function InstagramPhoto(photoMode, filter, burst, newMode) {
        var _this = _super.call(this, photoMode, filter, burst) || this;
        _this.photoMode = photoMode;
        _this.filter = filter;
        _this.burst = burst;
        _this.newMode = newMode;
        return _this;
    }
    InstagramPhoto.prototype.getReels = function () {
        console.log("this is overiding abstract classses abstract method");
    };
    return InstagramPhoto;
}(TakePhoto));
var firstPhoto = new InstagramPhoto("test", "ANOTHERTEST", 5, "123");
console.log(firstPhoto.getPicture());
