!function(t){t(function(){function n(){var n={switchButtonGroup:t(".lp_js_switchButtonGroup"),buttonGroupButtons:".lp_js_buttonGroupButton",buttonGroupHint:".lp_js_buttonGroupHint",selected:"lp_is-selected",showHintOnTrue:"lp_js_showHintOnTrue",ratingsToggle:t("#lp_js_enableRatingsToggle"),ratingsForm:t("#lp_js_laterpayRatingsForm")},o=function(){t(n.switchButtonGroup).change(function(){s(t(this))}),n.ratingsToggle.change(function(){u(n.ratingsForm)})},s=function(o){var s=o.parents("form"),e=1===parseInt(t("input:checked",s).val(),10),i=s.hasClass(n.showHintOnTrue),r=s.find(n.buttonGroupHint),a=i&&e,l=i&&!e;t(n.buttonGroupButtons,s).removeClass(n.selected),o.parent(n.buttonGroupButtons).addClass(n.selected),a?r.velocity("slideDown",{duration:250}):l&&r.velocity("slideUp",{duration:250}),u(s)},u=function(n){t.post(ajaxurl,n.serializeArray(),function(t){setMessage(t)})},e=function(){o()};e()}n()})}(jQuery);