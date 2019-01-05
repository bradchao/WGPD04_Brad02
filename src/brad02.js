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


var Brad02Layer = cc.Layer.extend({
    sprite:null,
    drawing: null,
    isDraging: false,
    ctor:function () {
        this._super();

        this.drawing = new cc.DrawNode();
        this.addChild(this.drawing);


        this.setupMouse();

        return true;
    },

    setupMouse: function () {
        cc.eventManager.addListener({
            event: cc.EventListener.MOUSE,
            lastX: -1,
            lastY: -1,
            onMouseDown: function (e) {
                cc.log("Down");
                var target = e.getCurrentTarget();
                target.isDraging = true;

                this.lastX = e.getLocationX();
                this.lastY = e.getLocationY();
            },

            onMouseUp: function (e) {
                cc.log("Up");
                var target = e.getCurrentTarget();
                target.isDraging = false;
            },

            onMouseMove: function (e) {
                var target = e.getCurrentTarget();
                if (target.isDraging){
                    cc.log("Move");
                    var ex = e.getLocationX(), ey = e.getLocationY();

                    target.drawing.drawSegment(
                        cc.p(this.lastX,this.lastY),
                        cc.p(ex,ey),
                        2,
                        cc.color(255,255,0)
                    );
                    this.lastX = ex;
                    this.lastY = ey;
                }
            },
        }, this);
    },
});

var Brad02Scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new Brad02Layer();
        this.addChild(layer);
    }
});

