// Copyright 2013 William Malone (www.williammalone.com)
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

(function () {
    // http://paulirish.com/2011/requestanimationframe-for-smart-animating/
    // http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
    // requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
    // MIT license

    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame']
                || window[vendors[x] + 'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function (callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function () {
                callback(currTime + timeToCall);
            },
                    timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };

    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function (id) {
            clearTimeout(id);
        };
}());

function Feliz(peso) {
    if(peso >= 0 && peso <= 11){
    var alfred, alfredImage, canvas;

    function gameLoop() {
        window.requestAnimationFrame(gameLoop);
        alfred.update();
        alfred.render();
    }

    function sprite(options) {
        var that = {},
                frameIndex = 0,
                tickCount = 0,
                ticksPerFrame = options.ticksPerFrame || 0,
                numberOfFrames = options.numberOfFrames || 1;
        
        that.context = options.context;
        that.width = options.width;
        that.height = options.height;
        that.image = options.image;
        that.loop = options.loop;
        
        that.update = function () {
            tickCount += 1;
            if (tickCount > ticksPerFrame) {
                tickCount = 0;
                if (frameIndex < numberOfFrames - 1) {
                    frameIndex += 1;
                } else if (that.loop) {
                    frameIndex = 0;
                }
            }
        };
        that.render = function () {
            // Clear the canvas
            that.context.clearRect(0, 0, that.width, that.height);
            // Draw the animation
            that.context.drawImage(
                    that.image,
                    frameIndex * that.width / numberOfFrames,
                    0,
                    that.width / numberOfFrames,
                    that.height,
                    0,
                    0,
                    that.width / numberOfFrames,
                    that.height);
        };
        return that;
    }
    // Get canvas
    canvas = document.getElementById("alfredAnimation");
    canvas.width = 300;
    canvas.height = 220;
    // Create sprite sheet
    alfredImage = new Image();
    // Create sprite
    alfred = sprite({
        context: canvas.getContext("2d"),
        width: 3300-(300*(11-peso)),
        height: 220,
        image: alfredImage,
        numberOfFrames: peso,
        ticksPerFrame: 1
    });
    // Load sprite sheet
    alfredImage.addEventListener("load", gameLoop);
        alfredImage.src = "images/Feliz.png";
    }
};

function Enojado(peso) {
    var alfred, alfredImage, canvas;
    function gameLoop() {
        window.requestAnimationFrame(gameLoop);
        alfred.update();
        alfred.render();
    }
    function sprite(options) {
        var that = {},
                frameIndex = 0,
                tickCount = 0,
                ticksPerFrame = options.ticksPerFrame || 0,
                numberOfFrames = options.numberOfFrames || 1;
        
        that.context = options.context;
        that.width = options.width;
        that.height = options.height;
        that.image = options.image;
        that.loop = options.loop;

        that.update = function () {
            tickCount += 1;
            if (tickCount > ticksPerFrame) {
                tickCount = 0;
                if (frameIndex < numberOfFrames - 1) {
                    frameIndex += 1;
                } else if (that.loop) {
                    frameIndex = 0;
                }
            }
        };
        that.render = function () {
            that.context.clearRect(0, 0, that.width, that.height);
            that.context.drawImage(
                    that.image,
                    frameIndex * that.width / numberOfFrames,
                    0,
                    that.width / numberOfFrames,
                    that.height,
                    0,
                    0,
                    that.width / numberOfFrames,
                    that.height);
        };
        return that;
    }
    canvas = document.getElementById("alfredAnimation");
    canvas.width = 300;
    canvas.height = 220;
    alfredImage = new Image();
    alfred = sprite({
        context: canvas.getContext("2d"),
        width: 3300-(300*(11-peso)),
        height: 220,
        image: alfredImage,
        numberOfFrames: peso,
        ticksPerFrame: 1
    });
    alfredImage.addEventListener("load", gameLoop);
        alfredImage.src = "images/Enojado.png";
};
function Sorprendido(peso) {
    var alfred, alfredImage, canvas;
    function gameLoop() {
        window.requestAnimationFrame(gameLoop);
        alfred.update();
        alfred.render();
    }

    function sprite(options) {
        var that = {},
                frameIndex = 0,
                tickCount = 0,
                ticksPerFrame = options.ticksPerFrame || 0,
                numberOfFrames = options.numberOfFrames || 1;
        
        that.context = options.context;
        that.width = options.width;
        that.height = options.height;
        that.image = options.image;
        that.loop = options.loop;

        that.update = function () {
            tickCount += 1;

            if (tickCount > ticksPerFrame) {
                tickCount = 0;
                if (frameIndex < numberOfFrames - 1) {
                    frameIndex += 1;
                } else if (that.loop) {
                    frameIndex = 0;
                }
            }
        };
        that.render = function () {
            that.context.clearRect(0, 0, that.width, that.height);
            that.context.drawImage(
                    that.image,
                    frameIndex * that.width / numberOfFrames,
                    0,
                    that.width / numberOfFrames,
                    that.height,
                    0,
                    0,
                    that.width / numberOfFrames,
                    that.height);
        };
        return that;
    }
    canvas = document.getElementById("alfredAnimation");
    canvas.width = 300;
    canvas.height = 220;
    alfredImage = new Image();
    alfred = sprite({
        context: canvas.getContext("2d"),
        width: 3300-(300*(11-peso)),
        height: 220,
        image: alfredImage,
        numberOfFrames: peso,
        ticksPerFrame: 1
    });
    alfredImage.addEventListener("load", gameLoop);
        alfredImage.src = "images/Sorprendido.png";
};

function Triste(peso) {
    var alfred, alfredImage, canvas;
    function gameLoop() {
        window.requestAnimationFrame(gameLoop);
        alfred.update();
        alfred.render();
    }
    function sprite(options) {

        var that = {},
                frameIndex = 0,
                tickCount = 0,
                ticksPerFrame = options.ticksPerFrame || 0,
                numberOfFrames = options.numberOfFrames || 1;

        that.context = options.context;
        that.width = options.width;
        that.height = options.height;
        that.image = options.image;
        that.loop = options.loop;

        that.update = function () {
            tickCount += 1;
            if (tickCount > ticksPerFrame) {
                tickCount = 0;
                if (frameIndex < numberOfFrames - 1) {
                    frameIndex += 1;
                } else if (that.loop) {
                    frameIndex = 0;
                }
            }
        };
        that.render = function () {
            that.context.clearRect(0, 0, that.width, that.height);
            that.context.drawImage(
                    that.image,
                    frameIndex * that.width / numberOfFrames,
                    0,
                    that.width / numberOfFrames,
                    that.height,
                    0,
                    0,
                    that.width / numberOfFrames,
                    that.height);
        };
        return that;
    }
    canvas = document.getElementById("alfredAnimation");
    canvas.width = 300;
    canvas.height = 220;
    alfredImage = new Image();
    alfred = sprite({
        context: canvas.getContext("2d"),
        width: 3300-(300*(11-peso)),
        height: 220,
        image: alfredImage,
        numberOfFrames: peso,
        ticksPerFrame: 1
    });
    alfredImage.addEventListener("load", gameLoop);
        alfredImage.src = "images/Triste.png";
}

function setEmotion(emocion, peso){
    //emocion = 1 feliz, 2 enojado, 3 sorprendido, 4 triste, 0 neutral.
    //peso = 0 al 11 puede ser asignado como peso.
    if (emocion == 1) {
        Feliz(peso);
    }
    
    if (emocion == 2) {
        Enojado(peso);
    }
    
    if (emocion == 3) {
        Sorprendido(peso);
    }
    
    if (emocion == 4) {
        Triste(peso);
    }
}