!function(){var t={bodyEl:document.querySelector("body"),btnStart:document.querySelector("[data-start]"),btnStop:document.querySelector("[data-stop]")},n=null;function o(){t.bodyEl.style.backgroundColor="".concat("".concat("#".concat(Math.floor(16777215*Math.random()).toString(16))))}function e(t){t.setAttribute("disabled","true")}function r(t){t.removeAttribute("disabled")}e(t.btnStop),t.btnStart.addEventListener("click",(function(){o(),r(t.btnStop),e(t.btnStart),n=setInterval((function(){o()}),1e3)})),t.btnStop.addEventListener("click",(function(){e(t.btnStop),r(t.btnStart),clearInterval(n)}))}();
//# sourceMappingURL=01-color-switcher.477e31a3.js.map