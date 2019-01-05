/****************************************************************************
 Copyright (c) 2017-2018 Xiamen Yaji Software Co., Ltd.
 
 http://www.cocos2d-x.org
 
 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:
 
 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.
 
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/


var BradLayer = cc.Layer.extend({
    sprite:null,
    sx:null,
    sy:null,
    poker: new Array(52),   // 0, 1, 2, 3, ....
    cards: new Array(new Array(13),new Array(13),
        new Array(13),new Array(13)),               // 各家的牌的值
    players: new Array(new Array(13),new Array(13),
        new Array(13),new Array(13)),               // cc.Sprite
    ctor:function () {
        this._super();

        cc.spriteFrameCache.addSpriteFrames(res.Poker_plist, res.Poker_png);

        this.sprite = new cc.Sprite("#pokers_back.png");
        this.sx = (cc.winSize.width / 13) / (this.sprite.width + 24);
        this.sy = (cc.winSize.height / 4    ) / (this.sprite.height + 48);

        for (j=0; j<this.players.length; j++){
            for (i =0; i<this.players[0].length; i++){
                this.players[j][i] = new cc.Sprite("#pokers_back.png");
                this.players[j][i].x = cc.winSize.width * (i+1) / 14;
                this.players[j][i].y = cc.winSize.height * (j+1) / 5;
                this.players[j][i].setScale(this.sx, this.sy);
                this.addChild(this.players[j][i], 0);
            }
        }

        this.setupMouse(this);

        return true;
    },

    setupMouse: function(layer){
        if ('mouse' in cc.sys.capabilities){
            var myListener = {
                event : cc.EventListener.MOUSE,
                onMouseDown: function (event) {
                    layer.shufflePokers();
                }
            };
            cc.eventManager.addListener(myListener , this);
        }
    },

    shufflePokers: function () {
        // 洗牌 => this.pokers
        for (i=0; i<this.poker.length; i++) this.poker[i] = i;
        shuffle(this.poker);

        for (i=0; i<this.poker.length; i++){
            this.cards[i%4][parseInt(i/4)] = this.poker[i];
        }


        for (j=0; j<this.players.length; j++){
            // 各家理牌
            this.cards[j].sort(function(a,b){return a-b;})
            // 顯示各家的牌
            for (i=0; i<this.players[j].length; i++){
                this.players[j][i].setSpriteFrame(
                    "pokers_" + this.cards[j][i] + ".png"
                );

            }
        }








    },


});

var BradScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new BradLayer();
        this.addChild(layer);
    }
});

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}