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


var Brad05Layer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        var title = new cc.LabelTTF("Page3 Test:" + data2, 36);
        title.attr({
            x: cc.winSize.width /2,
            y: cc.winSize.height *9/10
        });
        this.addChild(title);

        this.initMemu();

        return true;
    },

    initMemu: function () {
        var backItem = cc.MenuItemImage.create(
            res.HelloWorld_png,
            res.HelloWorld_png,
            res.HelloWorld_png,
            this.back,
            this
        );

        var nextPage = new cc.MenuItemFont("Goto Page31", this.next, this);

        var menu = new cc.Menu(backItem, nextPage);
        menu.alignItemsVertically()
        this.addChild(menu);
    },
    back: function () {
        cc.log("back");
        cc.director.popScene();
    },

    next: function () {

    }

});

var Brad05Scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new Brad05Layer();
        this.addChild(layer);
    }
});

