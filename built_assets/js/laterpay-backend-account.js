!function(e){e(function(){function t(){var t={apiKeyInput:e(".lp_js_validateApiKey"),merchantIdInput:e(".lp_js_validateMerchantId"),apiCredentialsInputs:e(".lp_js_validateApiKey, .lp_js_validateMerchantId"),testMerchantId:e("#lp_js_sandboxMerchantId"),testApiKey:e("#lp_js_sandboxApiKey"),liveMerchantId:e("#lp_js_liveMerchantId"),liveApiKey:e("#lp_js_liveApiKey"),pluginModeIndicator:e("#lp_js_pluginModeIndicator"),pluginModeToggle:e("#lp_js_togglePluginMode"),pluginVisibilitySetting:e("#lp_js_pluginVisibilitySetting"),pluginVisibilityToggle:e("#lp_js_toggleVisibilityInTestMode"),hasInvalidSandboxCredentials:e("#lp_js_hasInvalidSandboxCredentials"),isLive:"lp_is-live",showMerchantContractsButton:e("#lp_js_showMerchantContracts"),throttledFlashMessage:void 0,flashMessageTimeout:800,requestSent:!1},n=function(){t.apiKeyInput.bind("input",function(){var e=this;setTimeout(function(){r(e)},50)}),t.merchantIdInput.bind("input",function(){var e=this;setTimeout(function(){d(e)},50)}),t.pluginModeToggle.change(function(){s()}),t.pluginVisibilityToggle.change(function(){a()}),window.onbeforeunload=function(){u()},t.showMerchantContractsButton.mousedown(function(){c()}).click(function(e){e.preventDefault()})},i=function(){for(var e=0,n=t.apiCredentialsInputs.length;n>e;e++)if(""===t.apiCredentialsInputs.eq(e).val())return void t.apiCredentialsInputs.eq(e).focus()},a=function(){p()?(t.hasInvalidSandboxCredentials.val(1),t.pluginVisibilityToggle.prop("checked",!1),t.testMerchantId.focus(),t.requestSent=!1):t.hasInvalidSandboxCredentials.val(0),o("laterpay_test_mode")},l=function(n){"live"===n?(e("#lp_js_pluginModeIndicator").fadeOut(),e("#lp_js_liveCredentials").addClass(t.isLive)):(e("#lp_js_pluginModeIndicator").fadeIn(),e("#lp_js_liveCredentials").removeClass(t.isLive))},s=function(){var e=t.pluginModeToggle,n=e.prop("checked");p()?(e.prop("checked",!1),t.liveMerchantId.focus(),t.requestSent=!1,t.pluginVisibilitySetting.fadeIn(250)):n?t.pluginVisibilitySetting.fadeOut(250):t.pluginVisibilitySetting.fadeIn(250),o("laterpay_plugin_mode")},o=function(n){t.requestSent||(t.requestSent=!0,e.post(ajaxurl,e("#"+n).serializeArray(),function(e){setMessage(e.message,e.success),l(e.mode)},"json").done(function(){t.requestSent=!1}))},r=function(n){var i=e(n),l=i.parents("form"),r=i.val().trim(),d=32;if(window.clearTimeout(t.throttledFlashMessage),r.length!==i.val().length&&i.val(r),0===r.length||r.length===d)o(l.attr("id"));else{t.throttledFlashMessage=window.setTimeout(function(){setMessage(lpVars.i18nApiKeyInvalid,!1)},t.flashMessageTimeout);var c=t.testApiKey.parents("form").attr("id");l.attr("id")===c&&a()}p()&&s()},d=function(n){var i=e(n),l=i.parents("form"),r=i.val().trim(),d=22;if(window.clearTimeout(t.throttledFlashMessage),r.length!==i.val().length&&i.val(r),0===r.length||r.length===d)o(l.attr("id"));else{t.throttledFlashMessage=window.setTimeout(function(){setMessage(lpVars.i18nMerchantIdInvalid,!1)},t.flashMessageTimeout);var c=t.testMerchantId.parents("form").attr("id");l.attr("id")===c&&a()}p()&&s()},p=function(){return!t.pluginModeToggle.prop("checked")&&(32!==t.testApiKey.val().length||22!==t.testMerchantId.val().length)||t.pluginModeToggle.prop("checked")&&(32!==t.liveApiKey.val().length||22!==t.liveMerchantId.val().length)?!0:!1},c=function(){var n,i,a="https://laterpay.net/terms/index.html?group=merchant-contract",l=parseInt(e(window).height(),10),s=parseInt(e("#wpadminbar").height(),10)+26,o=l-s,r=e('<div id="lp_js_legalDocsIframe" class="lp_legal-docs-iframe" style="height:'+o+'px;"></div>'),d=e("#lp_js_legalDocsIframe");t.showMerchantContractsButton.fadeOut(),0!==e("iframe",d).length&&e("iframe",d).remove(),0===d.length&&e("#lp_js_credentialsHint").after(r.slideDown(400,function(){n=e("#lp_js_legalDocsIframe").offset(),i=n.top-s,e("BODY, HTML").animate({scrollTop:i},400)})),d=e("#lp_js_legalDocsIframe"),d.html('<a href="#" id="lp_js_hideMerchantContracts" class="lp_legal-docs-iframe__close-link">x</a><iframe src="'+a+'" frameborder="0" height="'+o+'" width="100%"></iframe>'),e("#lp_js_hideMerchantContracts",d).bind("click",function(n){e(this).fadeOut().parent("#lp_js_legalDocsIframe").slideUp(400,function(){e(this).remove()}),t.showMerchantContractsButton.fadeIn(),n.preventDefault()})},u=function(){return p()?lpVars.i18nPreventUnload:void 0},g=function(){n(),i()};g()}t()})}(jQuery);