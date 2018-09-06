// Learn TypeScript:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html


const {ccclass, property} = cc._decorator;
import click from './click'
@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Prefab)
    co : cc.Prefab = null;

    @property(cc.Node)
    banco : cc.Node = null;

    k = 0;
    
    chuoi = [];
    
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        
    }

    start () {
        var o = 0;
        var kc = 0;
        var y = 21;

        for(var i = 0; i < 18; i++) {
            for(var j = 0; j < 18; j++){
                var nut = cc.instantiate(this.co);
                nut.parent = this.banco;
                nut.getComponent(click).ongnoi = this;
                nut.x = 19 + o + kc;
                nut.y = y;
                o+= nut.width;
                kc+= 6;
                this.chuoi.push(nut);
            }
            y+=6+nut.width;
            o = kc = 0;
        }

        //this.chuoi.reverse();
    }
    stop = true;
    update (dt) {
        if(this.stop) {
            return;
        }
    }
}
