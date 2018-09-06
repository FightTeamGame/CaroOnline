"use strict";
cc._RF.push(module, '8752c8/VwROPZ9AF0JKh8Cu', 'script');
// Script/script.ts

// Learn TypeScript:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var click_1 = require("./click");
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.co = null;
        _this.banco = null;
        _this.k = 0;
        _this.chuoi = [];
        _this.stop = true;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
    };
    NewClass.prototype.start = function () {
        var o = 0;
        var kc = 0;
        var y = 21;
        for (var i = 0; i < 18; i++) {
            for (var j = 0; j < 18; j++) {
                var nut = cc.instantiate(this.co);
                nut.parent = this.banco;
                nut.getComponent(click_1.default).ongnoi = this;
                nut.x = 19 + o + kc;
                nut.y = y;
                o += nut.width;
                kc += 6;
                this.chuoi.push(nut);
            }
            y += 6 + nut.width;
            o = kc = 0;
        }
        //this.chuoi.reverse();
    };
    NewClass.prototype.update = function (dt) {
        if (this.stop) {
            return;
        }
    };
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "co", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "banco", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();