"use strict";
cc._RF.push(module, '47541i/oAdCzJJZ/PlEAhLO', 'click');
// Script/click.ts

// Learn TypeScript:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.htmlS
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.x = null;
        _this.o = null;
        _this.w = null;
        _this.ongnoi = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.click = function () {
        cc.log("vi tri trong mang la " + this.ongnoi.chuoi.indexOf(this.node));
        if (this.getComponent(cc.Sprite).spriteFrame == this.w) {
            if (this.ongnoi.k == 0) {
                this.getComponent(cc.Sprite).spriteFrame = this.o;
                this.ongnoi.k = 1;
            }
            else {
                this.getComponent(cc.Sprite).spriteFrame = this.x;
                this.ongnoi.k = 0;
            }
        }
        if (this.demNgang(this.ongnoi.chuoi.indexOf(this.node)) == 5) {
            if (this.getComponent(cc.Sprite).spriteFrame == this.x) {
                cc.log("x thang!");
            }
            else {
                cc.log("o thang");
            }
        }
    };
    NewClass.prototype.dem = function (n) {
        this.demNgang(n);
    };
    NewClass.prototype.demNgang = function (n) {
        var dem = 1;
        var phai = 1;
        var trai = 1;
        for (var i = n + 1, j = n - 1; i < 324 && j > 0; i++, j--) {
            if (phai == 0 && trai == 0) {
                break;
            }
            if (phai == 1) {
                if (this.ongnoi.chuoi[i].getComponent(cc.Sprite).spriteFrame == this.getComponent(cc.Sprite).spriteFrame) {
                    dem++;
                }
                else {
                    phai = 0;
                }
            }
            if (trai == 1) {
                if (this.ongnoi.chuoi[j].getComponent(cc.Sprite).spriteFrame == this.getComponent(cc.Sprite).spriteFrame) {
                    dem++;
                }
                else {
                    trai = 0;
                }
            }
        }
        return dem;
    };
    NewClass.prototype.demDoc = function (n) {
        var dem = 1;
        var phai = 1;
        var trai = 1;
        for (var i = n + 18, j = n - 18; i < 324 && j > 0; i += 18, j -= 18) {
            if (phai == 0 && trai == 0) {
                break;
            }
            if (phai == 1) {
                if (this.ongnoi.chuoi[i].getComponent(cc.Sprite).spriteFrame == this.getComponent(cc.Sprite).spriteFrame) {
                    dem++;
                }
                else {
                    phai = 0;
                }
            }
            if (trai == 1) {
                if (this.ongnoi.chuoi[j].getComponent(cc.Sprite).spriteFrame == this.getComponent(cc.Sprite).spriteFrame) {
                    dem++;
                }
                else {
                    trai = 0;
                }
            }
        }
        return dem;
    };
    NewClass.prototype.demXienPhai = function (n) {
        var dem = 1;
        var phai = 1;
        var trai = 1;
        for (var i = n + 19, j = n - 19; i < 324 && j > 0; i += 19, j -= 19) {
            if (phai == 0 && trai == 0) {
                break;
            }
            if (phai == 1) {
                if (this.ongnoi.chuoi[i].getComponent(cc.Sprite).spriteFrame == this.getComponent(cc.Sprite).spriteFrame) {
                    dem++;
                }
                else {
                    phai = 0;
                }
            }
            if (trai == 1) {
                if (this.ongnoi.chuoi[j].getComponent(cc.Sprite).spriteFrame == this.getComponent(cc.Sprite).spriteFrame) {
                    dem++;
                }
                else {
                    trai = 0;
                }
            }
        }
        return dem;
    };
    NewClass.prototype.demXienTrai = function (n) {
        var dem = 1;
        var phai = 1;
        var trai = 1;
        for (var i = n + 17, j = n - 17; i < 324 && j > 0; i += 17, j -= 17) {
            if (phai == 0 && trai == 0) {
                break;
            }
            if (phai == 1) {
                if (this.ongnoi.chuoi[i].getComponent(cc.Sprite).spriteFrame == this.getComponent(cc.Sprite).spriteFrame) {
                    dem++;
                }
                else {
                    phai = 0;
                }
            }
            if (trai == 1) {
                if (this.ongnoi.chuoi[j].getComponent(cc.Sprite).spriteFrame == this.getComponent(cc.Sprite).spriteFrame) {
                    dem++;
                }
                else {
                    trai = 0;
                }
            }
        }
        return dem;
    };
    // onLoad () {}
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.update = function (dt) {
    };
    __decorate([
        property(cc.SpriteFrame)
    ], NewClass.prototype, "x", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], NewClass.prototype, "o", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], NewClass.prototype, "w", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();