!function(){var t={bodyEl:document.querySelector("body"),btnStart:document.querySelector("[data-start]"),btnStop:document.querySelector("[data-stop]")},e=null;function n(){t.bodyEl.style.backgroundColor="".concat("".concat("#".concat(Math.floor(16777215*Math.random()).toString(16))))}t.btnStart.addEventListener("click",(function(){t.btnStart.setAttribute("disabled","true"),n(),e=setInterval((function(){n()}),1e3)})),t.btnStop.addEventListener("click",(function(){clearInterval(e),t.btnStart.removeAttribute("disabled")}))}();
//# sourceMappingURL=01-color-switcher.ad21966c.js.map