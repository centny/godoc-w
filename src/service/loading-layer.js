(function(win, doc) {
    win.loadingLayer = (function() {
        if (win.loadingLayer) {
            return win.loadingLayer;
        }

        (function() {
            win.loadingLayerStyleText = [
                '.loading-layer{position:fixed;width:100%;height:100%;top:0;left:0;background:rgba(0,0,0,.3);z-index:999;transition:opacity .1s;}',
                '.loading-circle{position:absolute;left:50%;top:50%;display:block;width:35px;height:35px;margin:-20px 0 0 -20px;}',
                '.loading-circle::before{content:"";position:absolute;left:-5px;top:-5px;display:block;width:100%;height:100%;border:5px solid rgba(0,0,0,.5);border-radius:50%;}',
                '.loading-circle::after{content:"";position:absolute;left:-5px;top:-5px;display:block;width:100%;height:100%;border:5px solid transparent;border-bottom-color:white;border-radius:50%;}',
                '.loading-amit-spin{-webkit-animation:spin .4s linear infinite;-moz-animation:spin .4s linear infinite;-o-animation:spin .4s linear infinite;animation:spin .4s linear infinite;-moz-transition:border .3s;-o-transition:border .3s;transition:border .3s;}',
                '@-webkit-keyframes spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}',
                '@-moz-keyframes spin{0%{-moz-transform:rotate(0);transform:rotate(0)}100%{-moz-transform:rotate(360deg);transform:rotate(360deg)}}',
                '@-o-keyframes spin{0%{-o-transform:rotate(0);transform:rotate(0)}100%{-o-transform:rotate(360deg);transform:rotate(360deg)}}',
                '@keyframes spin{0%{-webkit-transform:rotate(0);-moz-transform:rotate(0);-o-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);-moz-transform:rotate(360deg);-o-transform:rotate(360deg);transform:rotate(360deg)}}'
            ].join('');
            var head = doc.querySelectorAll('head').item(0);
            var style = document.createElement('style');
            style.rel = "stylesheet";
            style.textContent = win.loadingLayerStyleText;
            head.appendChild(style);
        })();

        var Loading = function() {};
        var node = {};
        Loading.fn = Loading.prototype;
        Loading.fn.in = function() {
            if (node.d) {
                return;
            }
            var f = doc.createDocumentFragment();
            node.d = doc.createElement('div');
            node.d.className = 'loading-layer';
            node.i = doc.createElement('span');
            node.i.className = 'loading-circle loading-amit-spin';
            node.d.appendChild(node.i);
            f.appendChild(node.d);
            doc.body.appendChild(f);
        };

        Loading.fn.out = function() {
            if (!node.d) {
                return;
            }
            node.d.style.opacity = 0;
            setTimeout(function() {
                if (!node.d) {
                    return;
                }
                node.d.parentNode.removeChild(node.d);
                delete node.d;
                delete node.i;
            }, 100);
        };
        return new Loading();
    })();
    win.addEventListener("beforeunload", function() {
        this.loadingLayer.out();
    }, false);
})(window, document);