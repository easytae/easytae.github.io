Prism.plugins.NormalizeWhitespace.setDefaults({
    'remove-trailing': true,
    'remove-indent': true,
    'left-trim': true,
    'right-trim': true,
    'tabs-to-spaces': 2,
});

window.onload = function(){
    function s(e,t){return Array.prototype.slice.call((t||document).querySelectorAll(e))}
    function u(e){return!!(e&&/pre/i.test(e.nodeName)&&(e.hasAttribute("data-line")||e.id&&Prism.util.isActive(e,i)))}
    function a(e){e()}
    s("pre").filter(u).map((function(e){return Prism.plugins.lineHighlight.highlightLines(e)})).forEach(a);
};

