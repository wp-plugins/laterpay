!function(t){t(function(){function e(){var e={postStatisticsPane:t("#lp_js_postStatistics"),postPreviewModeForm:t("#lp_js_postStatistics_pluginPreviewModeForm"),postPreviewModeToggle:t("#lp_js_togglePostPreviewMode"),postPreviewModeInput:t("#lp_js_postPreviewModeInput"),postStatisticsVisibilityForm:t("#lp_js_postStatistics_visibilityForm"),postStatisticsVisibilityToggle:t("#lp_js_togglePostStatisticsVisibility"),postStatisticsVisibilityInput:t("#lp_js_postStatistics_visibilityInput"),timePass:".lp_js_timePass",flipTimePassLink:".lp_js_flipTimePass",timePassPreviewPrice:".lp_js_timePassPreviewPrice",voucherCodeWrapper:"#lp_js_voucherCodeWrapper",voucherCodeInput:".lp_js_voucherCodeInput",voucherRedeemButton:".lp_js_voucherRedeemButton",giftCardRedeemButton:".lp_js_giftCardRedeemButton",giftCardCodeInput:".lp_js_giftCardCodeInput",giftCardWrapper:"#lp_js_giftCardWrapper",giftCardActionsPlaceholder:".lp_js_giftCardActionsPlaceholder",giftsWrapper:t(".lp_js_giftsWrapper"),postContentPlaceholder:t("#lp_js_postContentPlaceholder"),postStatisticsPlaceholder:t("#lp_js_postStatisticsPlaceholder"),postRatingPlaceholder:t("#lp_js_postRatingPlaceholder"),purchaseLink:".lp_js_doPurchase",postRatingForm:t(".lp_js_ratingForm"),postRatingRadio:t("input[type=radio][name=rating_value]"),hidden:"lp_is-hidden",fadingOut:"lp_is-fading-out"},i=function(){e.postStatisticsPane=t("#lp_js_postStatistics"),e.postPreviewModeForm=t("#lp_js_postStatistics_pluginPreviewModeForm"),e.postPreviewModeToggle=t("#lp_js_togglePostPreviewMode"),e.postPreviewModeInput=t("#lp_js_postPreviewModeInput"),e.postStatisticsVisibilityForm=t("#lp_js_postStatistics_visibilityForm"),e.postStatisticsVisibilityToggle=t("#lp_js_togglePostStatisticsVisibility"),e.postStatisticsVisibilityInput=t("#lp_js_postStatistics_visibilityInput")},a=function(){e.postRatingForm=t(".lp_js_ratingForm"),e.postRatingRadio=t("input[type=radio][name=rating_value]")},o=function(){t("body").on("mousedown",e.purchaseLink,function(){y(this)}).on("click",e.purchaseLink,function(t){t.preventDefault()}),t("body").on("click",e.flipTimePassLink,function(){w(this)}).on("click",e.flipTimePassLink,function(t){t.preventDefault()})},s=function(){e.postStatisticsVisibilityToggle.on("mousedown",function(){h()}).on("click",function(t){t.preventDefault()}),e.postPreviewModeToggle.on("change",function(){v()})},n=function(){e.postRatingRadio.on("change",function(){d()})},r=function(){t(e.voucherRedeemButton).on("mousedown",function(){l(t(this).parent(),e.voucherCodeInput,!1)}).on("click",function(t){t.preventDefault()}),t(e.giftCardRedeemButton).on("mousedown",function(){l(t(this).parent(),e.giftCardCodeInput,!0)}).on("click",function(t){t.preventDefault()})},l=function(i,a,o){var s=t(a).val();6===s.length?t.get(lpVars.ajaxUrl,{action:"laterpay_redeem_voucher_code",code:s,nonce:lpVars.nonces.voucher,link:window.location.href,is_gift:o?1:0},function(n){if(n.success)if(o)t("#fakebtn").attr("data-laterpay",n.url),YUI().use("node","node-event-simulate",function(t){t.one("#fakebtn").simulate("click")});else{t(a).val("");var r,l=!1;t(e.timePass).each(function(){if(r=t(this).data("pass-id"),r===n.pass_id){var i=n.price+"<small>"+lpVars.default_currency+"</small>";return t(this).find(e.purchaseLink).attr("data-laterpay",n.url).html(i),t(this).find(e.timePassPreviewPrice).html(i),l=!0,!1}}),l?p(lpVars.i18n.validVoucher,i):p(s+lpVars.i18n.invalidVoucher,i)}else t(a).val(""),p(s+lpVars.i18n.invalidVoucher,i)},"json"):p(lpVars.i18n.codeTooShort)},p=function(e,i){var a=t('<div class="lp_voucherCodeFeedbackMessage" style="display:none;">'+e+"</div>");i.prepend(a),a=t(".lp_voucherCodeFeedbackMessage",i),a.fadeIn(250).click(function(){c(a)}),setTimeout(function(){c(a)},3e3)},c=function(t){t.fadeOut(250,function(){t.unbind().remove()})},d=function(){t.post(lpVars.ajaxUrl,e.postRatingForm.serializeArray(),function(i){i.success&&(t(".lp_rating",e.postRatingForm).addClass(e.fadingOut).html(i.message),setTimeout(function(){e.postRatingForm.fadeOut(400,function(){t(this).remove()})},4e3))},"json")},u=function(){t.get(lpVars.ajaxUrl,{action:"laterpay_post_rating_summary",post_id:lpVars.post_id,nonce:lpVars.nonces.rating},function(t){t&&e.postRatingPlaceholder.html(t)})},_=function(){var i=[],a=e.giftsWrapper;t.each(a,function(e){i.push(t(a[e]).data("id"))}),t.get(lpVars.ajaxUrl,{action:"laterpay_get_gift_card_actions",nonce:lpVars.nonces.gift,pass_id:i,link:window.location.href},function(i){i.data&&(t.each(i.data,function(a){var o=i.data[a],s=t(e.giftCardActionsPlaceholder+"_"+o.id);s.html(o.html),o.buy_more&&t(o.buy_more).appendTo(s.parent()).attr("href",window.location.href)}),V("laterpay_purchased_gift_card"))})},f=function(){t.get(lpVars.ajaxUrl,{action:"laterpay_post_statistic_render",post_id:lpVars.post_id,nonce:lpVars.nonces.statistic},function(t){t&&(e.postStatisticsPlaceholder.before(t).remove(),g())})},g=function(){i(),s(),t(".lp_sparklineBar",e.postStatisticsPane).peity("bar",{delimiter:";",width:182,height:42,gap:1,fill:function(t,e,i){var a=new Date,o=i.length,s="#999";return a.setDate(a.getDate()-(o-e)),e===o-1&&(s="#555"),(0===a.getDay()||6===a.getDay())&&(s="#c1c1c1"),s}}),t(".lp_sparklineBackgroundBar",e.postStatisticsPane).peity("bar",{delimiter:";",width:182,height:42,gap:1,fill:function(){return"#ddd"}})},h=function(){var i=e.postStatisticsPane.hasClass(e.hidden)?"0":"1";e.postStatisticsVisibilityInput.val(i),e.postStatisticsPane.toggleClass(e.hidden),t.post(lpVars.ajaxUrl,e.postStatisticsVisibilityForm.serializeArray())},v=function(){e.postPreviewModeInput.val(e.postPreviewModeToggle.prop("checked")?1:0),t.post(lpVars.ajaxUrl,e.postPreviewModeForm.serializeArray(),function(){window.location.reload()})},m=function(){t.get(lpVars.ajaxUrl,{action:"laterpay_post_load_purchased_content",post_id:lpVars.post_id,is_front:!0,nonce:lpVars.nonces.content},function(t){t&&(e.postContentPlaceholder.html(t),a(),n())})},P=function(){t.post(lpVars.ajaxUrl,{action:"laterpay_post_track_views",post_id:lpVars.post_id,nonce:lpVars.nonces.tracking})},y=function(e){t(e).data("preview-as-visitor")&&!t(e).data("is-in-visible-test-mode")&&alert(lpVars.i18n.alert)},j=function(){lpVars.download_attachment&&(window.location.href=lpVars.download_attachment)},w=function(e){t(e).parents(".lp_timePass").toggleClass("lp_is-flipped")},V=function(t){document.cookie=t+"=; expires=Thu, 01-Jan-70 00:00:01 GMT; path=/"},b=function(){1===e.postContentPlaceholder.length&&(m(),P()),1===e.postStatisticsPlaceholder.length&&f(),1===e.postRatingPlaceholder.length&&u(),e.giftsWrapper.length>=1&&_(),o(),n(),r(),j()};b()}e()})}(jQuery),YUI().use("node","laterpay-dialog","laterpay-iframe","laterpay-easyxdm",function(t){var e={showCloseBtn:!0,canSkipAddToInvoice:!1},i=new t.LaterPay.DialogManager;t.one(t.config.doc).delegate("click",function(t){if(t.preventDefault(),t.currentTarget.getData("preview-as-visitor")&&!t.currentTarget.getData("is-in-visible-test-mode"))alert(lpVars.i18n.alert);else{var a=t.currentTarget.getAttribute("href");t.currentTarget.hasAttribute("data-laterpay")&&(a=t.currentTarget.getAttribute("data-laterpay")),i.openDialog(a,e.showCloseBtn)}},".lp_js_doPurchase")});