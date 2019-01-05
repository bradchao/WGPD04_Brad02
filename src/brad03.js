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


var Brad03Layer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();

        this.initMenu();

        return true;
    },

    initMenu: function () {
        test1 = new cc.MenuItemFont("Test 1", this.doMenu1, this);
        test2 = new cc.MenuItemFont("Test 2", this.doMenu2, this);
        test3 = new cc.MenuItemFont("Test 3", this.doMenu3, this);
        test4 = new cc.MenuItemFont("Test 4", this.doMenu4, this);

        menu = new cc.Menu(test1, test2, test3, test4);
        menu.alignItemsVertically();
        this.addChild(menu);

    },

    doMenu1: function () {
        cc.log("Test1");

        cc.director.pushScene(new Test1Scene())

    },
    doMenu2: function () {
        cc.log("Test2");
    },
    doMenu3: function () {
        cc.log("Test3");
    },
    doMenu4: function () {
        cc.log("Test4");
    },

});

var Brad03Scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new Brad03Layer();
        this.addChild(layer);
    }
});

