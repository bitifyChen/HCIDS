(()=>{"use strict";document.addEventListener("DOMContentLoaded",(function(){var t,e,a,c=document.querySelectorAll(".category ul li");c&&(t=c,e=new URLSearchParams(window.location.search),a=e.get("c"),t.forEach((function(t){var e=t.dataset.filter;"*"!==e||a?e===a?t.classList.add("active"):t.classList.remove("active"):t.classList.add("active")})),t.forEach((function(t){t.addEventListener("click",(function(){var a=t.dataset.filter;"*"===a?e.delete("c"):e.set("c",a),window.location.href="?".concat(e.toString())}))})))}))})();