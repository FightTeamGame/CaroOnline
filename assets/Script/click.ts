// Learn TypeScript:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.htmlS
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;
import script from './script';

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.SpriteFrame)
    x : cc.SpriteFrame = null;

    @property(cc.SpriteFrame)
    o : cc.SpriteFrame = null;

    @property(cc.SpriteFrame)
    w : cc.SpriteFrame = null;

    ongnoi:script = null;

    // LIFE-CYCLE CALLBACKS:

    click() {
        cc.log("vi tri trong mang la " + this.ongnoi.chuoi.indexOf(this.node));
        
        if(this.getComponent(cc.Sprite).spriteFrame == this.w) {
            if(this.ongnoi.k == 0) {
                this.getComponent(cc.Sprite).spriteFrame = this.o;
                this.ongnoi.k = 1;
            }
            else {
                this.getComponent(cc.Sprite).spriteFrame = this.x;
                this.ongnoi.k = 0;            }
        }

        if(this.demNgang(this.ongnoi.chuoi.indexOf(this.node)) == 5) {
            if(this.getComponent(cc.Sprite).spriteFrame == this.x) {
                cc.log("x thang!");
            }
            else {
                cc.log("o thang");
            }
        }
    }

    dem(n) {
        this.demNgang(n);
    }

    demNgang(n) {
        
        var dem = 1;
        var phai = 1;
        var trai = 1;

        for(var i = n + 1, j = n - 1; i < 324 && j >0  ; i++, j-- ) {
            if(phai == 0 && trai == 0) {
                break;
            }
            if(phai == 1) {
                if(this.ongnoi.chuoi[i].getComponent(cc.Sprite).spriteFrame == this.getComponent(cc.Sprite).spriteFrame) {
                    dem++;
                }
                else {
                    phai = 0;
                }
            }

            if(trai == 1) {
                if(this.ongnoi.chuoi[j].getComponent(cc.Sprite).spriteFrame == this.getComponent(cc.Sprite).spriteFrame) {
                    dem++;
                }
                else {
                    trai = 0;
                }
            }
        }

        return dem;
    }

    demDoc(n) {
        
        var dem = 1;
        var phai = 1;
        var trai = 1;

        for(var i = n + 18, j = n - 18; i < 324 && j >0  ; i+=18, j-=18 ) {
            if(phai == 0 && trai == 0) {
                break;
            }
            if(phai == 1) {
                if(this.ongnoi.chuoi[i].getComponent(cc.Sprite).spriteFrame == this.getComponent(cc.Sprite).spriteFrame) {
                    dem++;
                }
                else {
                    phai = 0;
                }
            }

            if(trai == 1) {
                if(this.ongnoi.chuoi[j].getComponent(cc.Sprite).spriteFrame == this.getComponent(cc.Sprite).spriteFrame) {
                    dem++;
                }
                else {
                    trai = 0;
                }
            }
        }

        return dem;
    }

    demXienPhai(n) {
        
        var dem = 1;
        var phai = 1;
        var trai = 1;

        for(var i = n + 19, j = n - 19; i < 324 && j >0  ; i+=19, j-=19 ) {
            if(phai == 0 && trai == 0) {
                break;
            }
            if(phai == 1) {
                if(this.ongnoi.chuoi[i].getComponent(cc.Sprite).spriteFrame == this.getComponent(cc.Sprite).spriteFrame) {
                    dem++;
                }
                else {
                    phai = 0;
                }
            }

            if(trai == 1) {
                if(this.ongnoi.chuoi[j].getComponent(cc.Sprite).spriteFrame == this.getComponent(cc.Sprite).spriteFrame) {
                    dem++;
                }
                else {
                    trai = 0;
                }
            }
        }

        return dem;
    }

    demXienTrai(n) {
        
        var dem = 1;
        var phai = 1;
        var trai = 1;

        for(var i = n + 17, j = n - 17; i < 324 && j >0  ; i+=17, j-=17 ) {
            if(phai == 0 && trai == 0) {
                break;
            }
            if(phai == 1) {
                if(this.ongnoi.chuoi[i].getComponent(cc.Sprite).spriteFrame == this.getComponent(cc.Sprite).spriteFrame) {
                    dem++;
                }
                else {
                    phai = 0;
                }
            }

            if(trai == 1) {
                if(this.ongnoi.chuoi[j].getComponent(cc.Sprite).spriteFrame == this.getComponent(cc.Sprite).spriteFrame) {
                    dem++;
                }
                else {
                    trai = 0;
                }
            }
        }

        return dem;
    }

    // onLoad () {}

    start () {

    }

    update (dt) {

    }
}
