(()=>{"use strict";document.addEventListener("DOMContentLoaded",(function(){var t=document.querySelectorAll(".category ul li");t&&function(t){var e,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=t,n=new URLSearchParams(window.location.search);e=n.get("c"),a.forEach((function(t){var c=t.dataset.filter;"*"!==c||e?c===e?t.classList.add("active"):t.classList.remove("active"):t.classList.add("active")})),a.forEach((function(t){t.addEventListener("click",(function(){var e=t.dataset.filter;n.delete("p"),"*"===e?n.delete("c"):n.set("c",e),window.location.href="?".concat(n.toString()).concat(c?"#".concat(c):"")}))}))}(t,"main")}))})();