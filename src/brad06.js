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


var Brad06Layer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();
        cc.log("ctor");
        var bg = new cc.Sprite(res.bg_jpg, cc.rect(0, 200, 400, 400));
        bg.attr({
            x: cc.winSize.width/2,
            y:cc.winSize.height/2
        });
        bg.scaleX = cc.winSize.width / bg.width;
        bg.scaleY = cc.winSize.height / bg.height;
        this.addChild(bg);

        var title = new cc.LabelTTF("Page 4", "", 36);
        title.attr({
            x: cc.winSize.width/2,
            y: cc.winSize.height*9/10
        });
        title.setColor(cc.color(255,0,0));
        this.addChild(title);

        this.initMenu();

        return true;
    },

    initMenu: function () {
        var backItem = cc.MenuItemImage.create(
            res.back1,
            res.back2,
            res.back1,
            this.back,
            this
        );

        var next1 = new cc.MenuItemFont("Test41", this.next1, this);
        var next2 = new cc.MenuItemFont("Test42", this.next2, this);
        var next3 = new cc.MenuItemFont("Test43", this.next3, this);
        var next4 = new cc.MenuItemFont("Test44", this.next4, this);

        var menu = new cc.Menu(next1, next2, next3, next4,  backItem);
        menu.alignItemsVertically();
        this.addChild(menu);

    },

    back: function () {
        cc.log("back");
        cc.director.popScene();
    },

    next1: function () {
        //cc.director.pushScene(new Brad061Scene());
        cc.director.pushScene(new cc.TransitionFadeTR(3, new Brad061Scene()));
    },

    next2: function () {
        //cc.director.pushScene(new Brad061Scene());
        cc.director.pushScene(new cc.TransitionJumpZoom(3, new Brad061Scene()));
    },

    next3: function () {
        //cc.director.pushScene(new Brad061Scene());
        cc.director.pushScene(new cc.TransitionPageTurn(3, new Brad061Scene()));
    },

    next4: function () {
        //cc.director.pushScene(new Brad061Scene());
        cc.director.pushScene(new cc.TransitionMoveInL(3, new Brad061Scene()));
    },

    onEnter: function () {
        cc.log("onEnter");
    },

    onExitTransitionDidStart: function(){
        cc.log("onExitTransitionDidStart");
    },

    onEnterTransitionDidFinish: function(){
        cc.log("onEnterTransitionDidFinish");
    },

    onExit: function () {
        cc.log("onExit");
    }



});

var Brad06Scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new Brad06Layer();
        this.addChild(layer);
    }
});

