!function(e){e(function(){function t(){var t={apiKeyInput:e(".lp_js_validateApiKey"),merchantIdInput:e(".lp_js_validateMerchantId"),apiCredentialsInputs:e(".lp_js_validateApiKey, .lp_js_validateMerchantId"),testMerchantId:e("#lp_js_sandboxMerchantId"),testApiKey:e("#lp_js_sandboxApiKey"),liveMerchantId:e("#lp_js_liveMerchantId"),liveApiKey:e("#lp_js_liveApiKey"),pluginModeIndicator:e("#lp_js_pluginModeIndicator"),pluginModeToggle:e("#lp_js_togglePluginMode"),pluginVisibilitySetting:e("#lp_js_pluginVisibilitySetting"),pluginVisibilityToggle:e("#lp_js_toggleVisibilityInTestMode"),hasInvalidSandboxCredentials:e("#lp_js_hasInvalidSandboxCredentials"),isLive:"lp_is-live",navigation:e(".lp_navigation"),showMerchantContractsButton:e("#lp_js_showMerchantContracts"),apiCredentials:e("#lp_js_apiCredentialsSection"),requestSent:!1},i=function(){t.apiKeyInput.bind("input",function(){var e=this;setTimeout(function(){r(e)},50)}),t.merchantIdInput.bind("input",function(){var e=this;setTimeout(function(){d(e)},50)}),t.pluginModeToggle.change(function(){o()}),t.pluginVisibilityToggle.change(function(){a()}),window.onbeforeunload=function(){u()},t.showMerchantContractsButton.mousedown(function(){p()}).click(function(e){e.preventDefault()})},n=function(){for(var e=0,i=t.apiCredentialsInputs.length;i>e;e++)if(""===t.apiCredentialsInputs.eq(e).val())return void t.apiCredentialsInputs.eq(e).focus()},a=function(){c()?(t.hasInvalidSandboxCredentials.val(1),t.pluginVisibilityToggle.prop("checked",!1),t.testMerchantId.focus(),t.showMerchantContractsButton.velocity("fadeIn",{duration:250}),t.requestSent=!1):t.hasInvalidSandboxCredentials.val(0),s("laterpay_test_mode")},l=function(i){"live"===i?(e("#lp_js_pluginModeIndicator").velocity("fadeOut",{duration:250}),e("#lp_js_liveCredentials").addClass(t.isLive)):(e("#lp_js_pluginModeIndicator").velocity("fadeIn",{duration:250}),e("#lp_js_liveCredentials").removeClass(t.isLive))},o=function(){var e=t.pluginModeToggle,i=e.prop("checked");c()?(e.prop("checked",!1),t.liveMerchantId.focus(),t.requestSent=!1,t.pluginVisibilitySetting.velocity("fadeIn",{duration:250,display:"inline-block"})):i?(t.pluginVisibilitySetting.velocity("fadeOut",{duration:250}),t.showMerchantContractsButton.velocity("fadeOut",{duration:250})):t.pluginVisibilitySetting.velocity("fadeIn",{duration:250,display:"inline-block"}),s("laterpay_plugin_mode")},s=function(i){t.requestSent||(t.requestSent=!0,e.post(ajaxurl,e("#"+i).serializeArray(),function(e){t.navigation.showMessage(e),l(e.mode)},"json").done(function(){t.requestSent=!1}))},r=function(i){var n=e(i),l=n.parents("form"),r=n.val().trim(),d=32;if(r.length!==n.val().length&&n.val(r),0===r.length||r.length===d)s(l.attr("id"));else{t.navigation.showMessage(lpVars.i18nApiKeyInvalid,!1);var p=t.testApiKey.parents("form").attr("id");l.attr("id")===p&&a()}c()&&o()},d=function(i){var n=e(i),l=n.parents("form"),r=n.val().trim(),d=22;if(r.length!==n.val().length&&n.val(r),0===r.length||r.length===d)s(l.attr("id"));else{t.navigation.showMessage(lpVars.i18nMerchantIdInvalid,!1);var p=t.testMerchantId.parents("form").attr("id");l.attr("id")===p&&a()}c()&&o()},c=function(){var e=32!==t.liveApiKey.val().length||22!==t.liveMerchantId.val().length;return t.pluginModeToggle.prop("checked")&&e},p=function(){var i,n,a="https://laterpay.net/terms/index.html?group=merchant-contract",l=parseInt(e(window).height(),10),o=parseInt(e("#wpadminbar").height(),10)+26,s=l-o,r=e('<div id="lp_js_legalDocsIframe" class="lp_legal-docs-iframe" style="height:'+s+'px;"></div>'),d=e("#lp_js_legalDocsIframe");t.showMerchantContractsButton.velocity("fadeOut",{duration:250}),0!==e("iframe",d).length&&e("iframe",d).remove(),0===d.length&&t.apiCredentials.after(r.velocity("slideDown",{duration:400,easing:"ease-out",complete:function(){i=e("#lp_js_legalDocsIframe").offset(),n=i.top-o,e("BODY, HTML").velocity("scroll",{duration:400,easing:"ease-out",offset:n})}})),d=e("#lp_js_legalDocsIframe"),d.html('<a href="#" id="lp_js_hideMerchantContracts" class="lp_legal-docs-iframe__close-link">x</a><iframe src="'+a+'" frameborder="0" height="'+s+'" width="100%"></iframe>'),e("#lp_js_hideMerchantContracts",d).bind("mousedown",function(){e(this).velocity("fadeOut",{duration:200}).parent("#lp_js_legalDocsIframe").velocity("slideUp",{duration:400,easing:"ease-out",complete:function(){e(this).remove()}}),t.showMerchantContractsButton.velocity("fadeIn",{duration:250,delay:250,display:"inline-block"})}).bind("click",function(e){e.preventDefault()})},u=function(){return c()?lpVars.i18nPreventUnload:void 0},g=function(){i(),n()};g()}t()})}(jQuery);