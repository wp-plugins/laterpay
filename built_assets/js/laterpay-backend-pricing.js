!function(e){e(function(){function t(){var t={revenueModel:".lp_js_revenueModel",revenueModelLabel:".lp_js_revenueModelLabel",revenueModelLabelDisplay:".lp_js_revenueModelLabelDisplay",revenueModelInput:".lp_js_revenueModelInput",priceInput:".lp_js_priceInput",emptyState:".lp_js_emptyState",purchaseModeForm:e("#lp_js_changePurchaseModeForm"),purchaseModeInput:e(".lp_js_onlyTimePassPurchaseModeInput"),timePassOnlyHideElements:e(".lp_js_hideInTimePassOnlyMode"),globalDefaultPriceForm:e("#lp_js_globalDefaultPriceForm"),globalDefaultPriceInput:e("#lp_js_globalDefaultPriceInput"),globalDefaultPriceDisplay:e("#lp_js_globalDefaultPriceDisplay"),globalDefaultPriceRevenueModelDisplay:e("#lp_js_globalDefaultPriceRevenueModelDisplay"),editGlobalDefaultPrice:e("#lp_js_editGlobalDefaultPrice"),cancelEditingGlobalDefaultPrice:e("#lp_js_cancelEditingGlobalDefaultPrice"),saveGlobalDefaultPrice:e("#lp_js_saveGlobalDefaultPrice"),globalDefaultPriceShowElements:e("#lp_js_globalDefaultPriceShowElements"),globalDefaultPriceEditElements:e("#lp_js_globalDefaultPriceEditElements"),categoryDefaultPrices:e("#lp_js_categoryDefaultPriceList"),addCategory:e("#lp_js_addCategoryDefaultPrice"),categoryDefaultPriceTemplate:e("#lp_js_categoryDefaultPriceTemplate"),categoryDefaultPriceForm:".lp_js_categoryDefaultPriceForm",editCategoryDefaultPrice:".lp_js_editCategoryDefaultPrice",cancelEditingCategoryDefaultPrice:".lp_js_cancelEditingCategoryDefaultPrice",saveCategoryDefaultPrice:".lp_js_saveCategoryDefaultPrice",deleteCategoryDefaultPrice:".lp_js_deleteCategoryDefaultPrice",categoryDefaultPriceShowElements:".lp_js_categoryDefaultPriceShowElements",categoryDefaultPriceEditElements:".lp_js_categoryDefaultPriceEditElements",categoryTitle:".lp_js_categoryDefaultPriceCategoryTitle",categoryDefaultPriceDisplay:".lp_js_categoryDefaultPriceDisplay",selectCategory:".lp_js_selectCategory",categoryDefaultPriceInput:".lp_js_categoryDefaultPriceInput",categoryId:".lp_js_categoryDefaultPriceCategoryId",addTimePass:e("#lp_js_addTimePass"),timePassEditor:e("#lp_js_timePassEditor"),timePassTemplate:e("#lp_js_timePassTemplate"),timePassWrapper:".lp_js_timePassWrapper",timePassFormTemplate:e("#lp_js_timePassFormTemplate"),timePassFormId:"lp_js_timePassForm",timePassForm:".lp_js_timePassEditorForm",timePassDuration:".lp_js_switchTimePassDuration",timePassDurationClass:"lp_js_switchTimePassDuration",timePassPeriod:".lp_js_switchTimePassPeriod",timePassPeriodClass:"lp_js_switchTimePassPeriod",timePassScope:".lp_js_switchTimePassScope",timePassScopeClass:"lp_js_switchTimePassScope",timePassScopeCategory:".lp_js_switchTimePassScopeCategory",timePassScopeCategoryClass:"lp_js_switchTimePassScopeCategory",timePassCategoryId:".lp_js_timePassCategoryId",timePassCategoryWrapper:".lp_js_timePassCategoryWrapper",timePassTitle:".lp_js_timePassTitleInput",timePassTitleClass:"lp_js_timePassTitleInput",timePassPrice:".lp_js_timePassPriceInput",timePassPriceClass:"lp_js_timePassPriceInput",timePassRevenueModel:".lp_js_timePassRevenueModelInput",timePassDescription:".lp_js_timePassDescriptionTextarea",timePassDescriptionClass:"lp_js_timePassDescriptionTextarea",timePassPreviewTitle:".lp_js_timePassPreviewTitle",timePassPreviewDescription:".lp_js_timePassPreviewDescription",timePassPreviewValidity:".lp_js_timePassPreviewValidity",timePassPreviewAccess:".lp_js_timePassPreviewAccess",timePassPreviewPrice:".lp_js_timePassPreviewPrice",timePass:".lp_js_timePass",timePassId:".lp_js_timePassId",landingPageInput:".lp_js_landingPageInput",landingPageSave:"#lp_js_landingPageSave",landingPageForm:e("#lp_js_landingPageForm"),timePassShowElements:".lp_js_saveTimePass, .lp_js_cancelEditingTimePass",timePassEditElements:".lp_js_editTimePass, .lp_js_deleteTimePass",voucherPriceInput:".lp_js_voucherPriceInput",generateVoucherCode:".lp_js_generateVoucherCode",voucherDeleteLink:".lp_js_deleteVoucher",voucherEditor:".lp_js_voucherEditor",voucherHiddenPassId:"#lp_js_timePassEditorHiddenPassId",voucherPlaceholder:".lp_js_voucherPlaceholder",voucherList:".lp_js_voucherList",voucher:".lp_js_voucher",voucherTimesRedeemed:".lp_js_voucherTimesRedeemed",bulkPriceForm:e("#lp_js_bulkPriceEditorForm"),bulkPriceFormHiddenField:e("#lp_js_bulkPriceEditorHiddenFormInput"),bulkPriceOperationIdHiddenField:e("#lp_js_bulkPriceEditorHiddenIdInput"),bulkPriceMessageHiddenField:e("#lp_js_bulkPriceEditorHiddenMessageInput"),bulkPriceAction:e("#lp_js_selectBulkAction"),bulkPriceObjects:e("#lp_js_selectBulkObjects"),bulkPriceObjectsCategory:e("#lp_js_selectBulkObjectsCategory"),bulkPriceObjectsCategoryWithPrice:e("#lp_js_selectBulkObjectsCategoryWithPrice"),bulkPriceChangeAmountPreposition:e("#lp_js_bulkPriceEditorAmountPreposition"),bulkPriceChangeAmount:e("#lp_js_setBulkChangeAmount"),bulkPriceChangeUnit:e("#lp_js_selectBulkChangeUnit"),bulkPriceSubmit:e("#lp_js_applyBulkOperation"),bulkSaveOperationLink:e("#lp_js_saveBulkOperation"),bulkDeleteOperationLink:".lp_js_deleteSavedBulkOperation",bulkApplySavedOperationLink:".lp_js_applySavedBulkOperation",editing:"lp_is-editing",unsaved:"lp_is-unsaved",payPerUse:"ppu",singleSale:"sis",selected:"lp_is-selected",disabled:"lp_is-disabled",hidden:"lp_hidden"},s=function(){e("body").on("change",t.revenueModelInput,function(){i(e(this).parents("form"))}),e("body").on("keyup",t.priceInput,U(function(){i(e(this).parents("form"))},800)),t.purchaseModeInput.on("change",function(){H(t.purchaseModeForm)}),t.editGlobalDefaultPrice.mousedown(function(){l()}).click(function(e){e.preventDefault()}),t.cancelEditingGlobalDefaultPrice.mousedown(function(){r()}).click(function(e){e.preventDefault()}),t.saveGlobalDefaultPrice.mousedown(function(){o()}).click(function(e){e.preventDefault()}),t.addCategory.mousedown(function(){n()}).click(function(e){e.preventDefault()}),e("body").on("click",t.editCategoryDefaultPrice,function(){var s=e(this).parents(t.categoryDefaultPriceForm);c(s)}),e("body").on("click",t.cancelEditingCategoryDefaultPrice,function(){var s=e(this).parents(t.categoryDefaultPriceForm);d(s)}),e("body").on("click",t.saveCategoryDefaultPrice,function(){var s=e(this).parents(t.categoryDefaultPriceForm);u(s)}),e("body").on("click",t.deleteCategoryDefaultPrice,function(){var s=e(this).parents(t.categoryDefaultPriceForm);p(s)}),t.addTimePass.mousedown(function(){_()}).click(function(e){e.preventDefault()}),t.timePassEditor.on("mousedown",".lp_js_editTimePass",function(){v(e(this).parents(t.timePassWrapper))}).on("click",".lp_js_editTimePass",function(e){e.preventDefault()}),t.timePassEditor.on("change",t.timePassRevenueModel,function(){C(e(this).parents("form"))}),t.timePassEditor.on("change",t.timePassDuration,function(){g(e(this).parents(t.timePassWrapper),e(this))}),t.timePassEditor.on("change",t.timePassPeriod,function(){g(e(this).parents(t.timePassWrapper),e(this))}),t.timePassEditor.on("change",t.timePassScope,function(){D(e(this)),g(e(this).parents(t.timePassWrapper),e(this))}),t.timePassEditor.on("change",t.timePassScopeCategory,function(){g(e(this).parents(t.timePassWrapper),e(this))}),t.timePassEditor.on("input",[t.timePassTitle,t.timePassDescription].join(),function(){g(e(this).parents(t.timePassWrapper),e(this))}),t.timePassEditor.on("keyup",t.timePassPrice,U(function(){i(e(this).parents("form"),!1,e(this)),g(e(this).parents(t.timePassWrapper),e(this))},800)),t.timePassEditor.on("click",".lp_js_cancelEditingTimePass",function(s){y(e(this).parents(t.timePassWrapper)),s.preventDefault()}),t.timePassEditor.on("click",".lp_js_saveTimePass",function(s){b(e(this).parents(t.timePassWrapper)),s.preventDefault()}),t.timePassEditor.on("click",".lp_js_deleteTimePass",function(s){j(e(this).parents(t.timePassWrapper)),s.preventDefault()}),t.timePassEditor.on("mousedown",".lp_js_flipTimePass",function(){k(this)}).on("click",".lp_js_flipTimePass",function(e){e.preventDefault()}),t.timePassEditor.on("keyup",t.voucherPriceInput,U(function(){i(e(this).parents("form"),!0,e(this))},800)),t.timePassEditor.on("mousedown",t.generateVoucherCode,function(){E(e(this).parents(t.timePassWrapper))}).on("click",t.generateVoucherCode,function(e){e.preventDefault()}),t.timePassEditor.on("click",t.voucherDeleteLink,function(t){T(e(this).parent()),t.preventDefault()}),t.landingPageForm.on("click",t.landingPageSave,function(e){O(t.landingPageForm),e.preventDefault()}),t.bulkPriceAction.add(t.bulkPriceObjects).on("change",function(){M(t.bulkPriceAction.val(),t.bulkPriceObjects.val())}),t.bulkPriceObjectsCategoryWithPrice.on("change",function(){t.bulkPriceChangeAmountPreposition.text(lpVars.i18n.toCategoryDefaultPrice+" "+t.bulkPriceObjectsCategoryWithPrice.find(":selected").attr("data-price")+" "+lpVars.defaultCurrency)}),t.bulkPriceForm.on("submit",function(e){t.bulkPriceFormHiddenField.val("bulk_price_form"),t.bulkPriceOperationIdHiddenField.val(void 0),t.bulkPriceMessageHiddenField.val(void 0),S(),e.preventDefault()}),t.bulkSaveOperationLink.mousedown(function(){V()}).click(function(e){e.preventDefault()}),e("body").on("mousedown",t.bulkApplySavedOperationLink,function(){L(e(this).parent())}).on("click",t.bulkApplySavedOperationLink,function(e){e.preventDefault()}),e("body").on("mousedown",t.bulkDeleteOperationLink,function(){W(e(this).parent())}).on("click",t.bulkDeleteOperationLink,function(e){e.preventDefault()})},i=function(t,s,i){var l=i?i:e(".lp_number-input",t),r=l.val();return r=r.replace(/[^0-9\,\.]/g,""),r=r.indexOf(",")>-1?parseFloat(r.replace(",",".")).toFixed(2):parseFloat(r).toFixed(2),isNaN(r)&&(r=0),r=Math.abs(r),r>149.99?r=149.99:r>0&&.05>r&&(r=.05),s||a(r,t),r=r.toFixed(2),"de_DE"===lpVars.locale&&(r=r.replace(".",",")),l.val(r),r},a=function(s,i){var a;if(i.hasClass("lp_js_timePassEditorForm")){var l=e(t.timePassRevenueModel,i),r=l.prop("checked");a=r?t.singleSale:t.payPerUse,s>5&&a===t.payPerUse?l.prop("checked",!0):1.49>s&&a===t.singleSale&&l.prop("checked",!1)}else{var o=e(".lp_js_revenueModelInput[value="+t.payPerUse+"]",i),n=e(".lp_js_revenueModelInput[value="+t.singleSale+"]",i);a=e("input:radio:checked",i).val(),0===s||s>=.05&&5>=s?o.removeProp("disabled").parent("label").removeClass(t.disabled):o.prop("disabled","disabled").parent("label").addClass(t.disabled),s>=1.49?n.removeProp("disabled").parent("label").removeClass(t.disabled):n.prop("disabled","disabled").parent("label").addClass(t.disabled),s>5&&a===t.payPerUse?n.prop("checked","checked"):1.49>s&&a===t.singleSale&&o.prop("checked","checked"),e("label",i).removeClass(t.selected),e(".lp_js_revenueModelInput:checked",i).parent("label").addClass(t.selected)}},l=function(){t.globalDefaultPriceShowElements.velocity("slideUp",{duration:250}),t.globalDefaultPriceEditElements.velocity("slideDown",{duration:250,complete:function(){setTimeout(function(){t.globalDefaultPriceInput.val(e.trim(t.globalDefaultPriceDisplay.text())).focus()},50)}}),t.globalDefaultPriceForm.addClass(t.editing)},r=function(){t.globalDefaultPriceShowElements.velocity("slideDown",{duration:250}),t.globalDefaultPriceEditElements.velocity("slideUp",{duration:250}),t.globalDefaultPriceForm.removeClass(t.editing),t.globalDefaultPriceInput.val(t.globalDefaultPriceDisplay.text());var s=t.globalDefaultPriceRevenueModelDisplay.text().toLowerCase();e(t.revenueModelLabel,t.globalDefaultPriceForm).removeClass(t.selected),e(".lp_js_revenueModelInput[value="+s+"]",t.globalDefaultPriceForm).prop("checked","checked").parent("label").addClass(t.selected)},o=function(){var s=i(t.globalDefaultPriceForm);t.globalDefaultPriceInput.val(s),e.post(ajaxurl,t.globalDefaultPriceForm.serializeArray(),function(e){e.success&&(t.globalDefaultPriceDisplay.text(e.price),t.globalDefaultPriceRevenueModelDisplay.text(e.revenue_model)),setMessage(e.message,e.success),r()},"json")},n=function(){t.addCategory.velocity("fadeOut",{duration:250}),e(t.emptyState,t.categoryDefaultPrices).is(":visible")&&e(t.emptyState,t.categoryDefaultPrices).velocity("fadeOut",{duration:400});var s=t.categoryDefaultPriceTemplate.clone().removeAttr("id").insertBefore("#lp_js_categoryDefaultPriceList").velocity("slideDown",{duration:250});c(s)},c=function(s){e(".lp_js_categoryDefaultPriceForm.lp_is-editing").each(function(){d(e(this),!0)}),s.addClass(t.editing),e(t.categoryDefaultPriceShowElements,s).velocity("slideUp",{duration:250}),t.addCategory.velocity("fadeOut",{duration:250}),e(t.categoryDefaultPriceEditElements,s).velocity("slideDown",{duration:250,complete:function(){e(t.categoryDefaultPriceInput,s).focus()}}),f(s,t.selectCategory,"laterpay_get_categories_with_price",m)},u=function(s){var a=i(s);e(t.categoryDefaultPriceInput,s).val(a),e.post(ajaxurl,s.serializeArray(),function(i){i.success&&(e(t.categoryDefaultPriceDisplay,s).text(i.price),e(t.revenueModelLabelDisplay,s).text(i.revenue_model),e(t.categoryDefaultPriceInput,s).val(i.price),e(t.categoryTitle,s).text(i.category),e(t.categoryId,s).val(i.category_id),s.removeClass(t.unsaved)),d(s),setMessage(i.message,i.success)},"json")},d=function(s,i){if(s.removeClass(t.editing),s.hasClass(t.unsaved))s.velocity("slideUp",{duration:250,complete:function(){e(this).remove(),0===e(t.categoryDefaultPriceForm+":visible").length&&e(t.emptyState,t.categoryDefaultPrices).velocity("fadeIn",{duration:400})}});else{e(t.categoryDefaultPriceEditElements,s).velocity("slideUp",{duration:250}),e(t.selectCategory,s).select2("destroy"),e(t.categoryDefaultPriceInput,s).val(e(t.categoryDefaultPriceDisplay,s).text().trim());var a=e(t.revenueModelLabelDisplay,s).text().toLowerCase();e(t.revenueModelLabel,s).removeClass(t.selected),e(".lp_js_revenueModelInput[value="+a+"]",s).prop("checked","checked").parent("label").addClass(t.selected),e(t.categoryDefaultPriceShowElements,s).velocity("slideDown",{duration:250})}i||t.addCategory.velocity("fadeIn",{duration:250,display:"inline-block"})},p=function(s){e("input[name=form]",s).val("price_category_form_delete"),e.post(ajaxurl,s.serializeArray(),function(i){i.success&&s.velocity("slideUp",{duration:250,complete:function(){e(this).remove(),0===e(t.categoryDefaultPriceForm+":visible").length&&e(t.emptyState,t.categoryDefaultPrices).velocity("fadeIn",{duration:400})}}),setMessage(i.message,i.success)},"json")},m=function(t,s){var i=e(s).parent().parent().parent();return e(".lp_js_selectCategory",i).val(t.text),e(".lp_js_categoryDefaultPriceCategoryId",i).val(t.id),t.text},P=function(s,i){var a=e(i).parents("form");return s.id&&e(t.timePassCategoryId,a).val(s.id),e(t.timePassScopeCategory,a).val(s.text),s.text},f=function(t,s,i,a){e(s,t).select2({allowClear:!0,ajax:{url:ajaxurl,data:function(e){return{form:i,term:e,action:"laterpay_pricing"}},results:function(t){var s=[];return e.each(t,function(e){var i=t[e];s.push({id:i.term_id,text:i.name})}),{results:s}},dataType:"json",type:"POST"},initSelection:function(t,s){var a=e(t).val();if(""!==a){var l={text:a};s(l)}else e.post(ajaxurl,{form:i,term:"",action:"laterpay_pricing"},function(e){if(e&&void 0!==e[0]){var t=e[0];s({id:t.term_id,text:t.name})}})},formatResult:function(e){return e.text},formatSelection:a,escapeMarkup:function(e){return e}})},_=function(){t.addTimePass.velocity("fadeOut",{duration:250}),e(t.emptyState,t.timePassEditor).is(":visible")&&e(t.emptyState,t.timePassEditor).velocity("fadeOut",{duration:400}),t.timePassEditor.prepend(t.timePassTemplate.clone().removeAttr("id"));var s=e(".lp_js_timePassWrapper",t.timePassEditor).first();e(t.timePassForm,s).attr("id",t.timePassFormId).addClass(t.unsaved),h(s),s.velocity("slideDown",{duration:250,complete:function(){e(this).removeClass(t.hidden)}}).find(t.timePassForm).velocity("slideDown",{duration:250,complete:function(){e(this).removeClass(t.hidden)}})},v=function(s){var i=t.timePassFormTemplate.clone().attr("id",t.timePassFormId);e(".lp_js_timePassEditorContainer",s).html(i),h(s),e(t.timePassEditElements,s).addClass(t.hidden),e(t.timePassShowElements,s).removeClass(t.hidden),i.removeClass(t.hidden)},h=function(s){var a=s.data("pass-id"),l=lpVars.time_passes_list[a],r=lpVars.vouchers_list[a],o=e(t.timePassRevenueModel,s),n="";if(l){e("input, select, textarea",s).each(function(t,i){n=e(i,s).attr("name"),""!==n&&void 0!==l[n]&&"revenue_model"!==n&&e(i,s).val(l[n])}),i(s.find("form"),!1,e(t.timePassPrice,s)),e(t.voucherPriceInput,s).val(e(t.timePassPrice,s).val()),l.revenue_model===t.singleSale&&o.prop("checked",!0),e(t.timePassCategoryWrapper,s).hide(),f(s,t.timePassScopeCategory,"laterpay_get_categories",P);var c=e(t.timePassScope,s).find("option:selected");"0"!==c.val()&&e(t.timePassCategoryWrapper,s).show(),F(s),r instanceof Object&&e.each(r,function(e,t){w(e,t,s)})}},g=function(s,i){var a=""!==i.val()?i.val():" ";if(i.hasClass(t.timePassDurationClass)||i.hasClass(t.timePassPeriodClass)){var l=e(t.timePassDuration,s).val(),r=e(t.timePassPeriod,s).find("option:selected").text();r=parseInt(l,10)>1?r+"s":r,a=l+" "+r,e(t.timePassPreviewValidity,s).text(a)}else if(i.hasClass(t.timePassScopeClass)||i.hasClass(t.timePassScopeCategoryClass)){var o=e(t.timePassScope,s).find("option:selected");a=o.text(),"0"!==o.val()&&(a+=" "+e(t.timePassScopeCategory,s).val()),e(t.timePassPreviewAccess,s).text(a)}else i.hasClass(t.timePassPriceClass)?(e(".lp_js_purchaseLink",s).html(a+'<small class="lp_purchase-link__currency">'+lpVars.defaultCurrency+"</small>"),e(t.timePassPreviewPrice).text(a+" "+lpVars.defaultCurrency)):i.hasClass(t.timePassTitleClass)?e(t.timePassPreviewTitle,s).text(a):i.hasClass(t.timePassDescriptionClass)&&e(t.timePassPreviewDescription,s).text(a)},y=function(s){var i=s.find(t.timePass).data("pass-id");e(t.timePassForm,s).hasClass(t.unsaved)?s.velocity("fadeOut",{duration:250,complete:function(){e(this).remove(),0===e(t.timePassWrapper+":visible").length&&e(t.emptyState,t.timePassEditor).velocity("fadeIn",{duration:400})}}):e(t.timePassForm,s).velocity("fadeOut",{duration:250,complete:function(){e(this).remove()}}),e(t.timePassEditElements,s).removeClass(t.hidden),e(t.timePassShowElements,s).addClass(t.hidden),F(s),lpVars.vouchers_list[i]instanceof Object&&(e.each(lpVars.vouchers_list[i],function(e,t){I(e,t,s)}),s.find(t.voucherList).show()),t.addTimePass.is(":hidden")&&t.addTimePass.velocity("fadeIn",{duration:250,display:"inline-block"})},b=function(s){e.post(ajaxurl,e(t.timePassForm,s).serializeArray(),function(i){if(i.success){var a=i.data.pass_id;if(lpVars.vouchers_list[a]=i.vouchers,lpVars.time_passes_list[a])lpVars.time_passes_list[a]=i.data,e(".lp_js_timePassPreview",s).html(i.html),e(t.timePassShowElements,s).addClass(t.hidden),e(t.timePassEditElements,s).removeClass(t.hidden),e(t.timePassForm,s).velocity("fadeOut",{duration:250,complete:function(){e(this).remove(),F(s),lpVars.vouchers_list[a]instanceof Object&&(e.each(lpVars.vouchers_list[a],function(e,t){I(e,t,s)}),s.find(t.voucherList).show())}});else{lpVars.time_passes_list[a]=i.data;var l=t.timePassTemplate.clone().removeAttr("id").data("pass-id",a);e(t.timePassId,l).text(a).parent().velocity("fadeIn",{duration:250}),e(".lp_js_timePassPreview",l).html(i.html),e(t.timePassForm,s).remove(),t.timePassEditor.prepend(l),h(l),e(t.timePassShowElements,l).addClass(t.hidden),e(t.timePassEditElements,l).removeClass(t.hidden),s.velocity("fadeOut",{duration:250,complete:function(){e(this).remove(),F(l),lpVars.vouchers_list[a]instanceof Object&&(e.each(lpVars.vouchers_list[a],function(e,t){I(e,t,l)}),l.find(t.voucherList).show()),l.removeClass(t.hidden)}})}}t.addTimePass.is(":hidden")&&t.addTimePass.velocity("fadeIn",{duration:250,display:"inline-block"}),setMessage(i.message,i.success)},"json")},j=function(s){confirm(lpVars.i18n.confirmDeleteTimePass)&&s.velocity("slideUp",{duration:250,begin:function(){e.post(ajaxurl,{action:"laterpay_pricing",form:"time_pass_delete",pass_id:s.data("pass-id")},function(s){s.success?(e(this).remove(),0===e(t.timePassWrapper+":visible").length&&(e(t.emptyState,t.timePassEditor).velocity("fadeIn",{duration:400}),t.purchaseModeInput.prop("checked")&&t.purchaseModeInput.prop("checked",!1).change())):e(this).stop().show(),setMessage(s.message,s.success)},"json")}})},k=function(t){e(t).parents(".lp_time-pass").toggleClass("lp_is-flipped")},D=function(s){var i=e("option:selected",s).val();"0"===i?e(t.timePassCategoryWrapper).hide():e(t.timePassCategoryWrapper).show()},C=function(s){i(s,!1,e(t.timePassPrice,s))},E=function(s){e.post(ajaxurl,{form:"generate_voucher_code",action:"laterpay_pricing",price:s.find(t.voucherPriceInput).val()},function(e){e.success?w(e.code,s.find(t.voucherPriceInput).val(),s):setMessage(e.message,e.success)})},w=function(e,s,i){var a=s+" "+lpVars.defaultCurrency,l='<div class="lp_js_voucher lp_voucher" data-code="'+e+'" style="display:none;"><input type="hidden" name="voucher[]" value="'+e+"|"+s+'"><span class="lp_voucher__code">'+e+'</span> <span class="lp_voucher__code-infos">'+lpVars.i18n.voucherText+" "+a+'</span><a href="#" class="lp_js_deleteVoucher lp_edit-link--bold" data-icon="g"></a></div>';i.find(t.voucherPlaceholder).prepend(l).find("div").first().velocity("slideDown",{duration:250})},I=function(e,s,i){var a=i.data("pass-id"),l=lpVars.vouchers_statistic[a]?lpVars.vouchers_statistic[a]:0,r=s+" "+lpVars.defaultCurrency,o='<div class="lp_js_voucher lp_voucher" data-code="'+e+'"><span class="lp_voucher__code">'+e+'</span><span class="lp_voucher__code-infos">'+lpVars.i18n.voucherText+" "+r+'.<br><span class="lp_js_voucherTimesRedeemed">'+l+"</span> "+lpVars.i18n.timesRedeemed+"</span></div>";i.find(t.voucherList).append(o)},F=function(e){e.find(t.voucher).remove()},T=function(t){t.velocity("slideUp",{duration:250,complete:function(){e(this).remove()}})},O=function(t){e.post(ajaxurl,t.serializeArray(),function(e){setMessage(e)})},S=function(s){e.post(ajaxurl,s||t.bulkPriceForm.serializeArray(),function(e){setMessage(e.message,e.success)},"json")},x=function(s){t.bulkPriceObjects.removeClass(t.disabled).append(e("<option>",{value:"in_category",text:lpVars.inCategoryLabel,selected:!!s}))},M=function(s,i){var a="in_category"===i;switch(t.bulkPriceChangeUnit.find("option").each(function(){"%"===e(this).text()&&e(this).remove()}).end().addClass(t.disabled),t.bulkPriceObjects.find("option").each(function(){"in_category"===e(this).val()&&(e(this).remove(),t.bulkPriceObjects.addClass(t.disabled))}),t.bulkPriceObjectsCategory.prop("disabled",!0).hide(),t.bulkPriceObjectsCategoryWithPrice.prop("disabled",!0).hide(),t.bulkPriceChangeAmountPreposition.hide(),t.bulkPriceChangeAmount.prop("disabled",!0).hide(),t.bulkPriceChangeUnit.prop("disabled",!0).hide(),s){case"set":t.bulkPriceChangeAmountPreposition.show().text(lpVars.i18n.to),t.bulkPriceChangeAmount.prop("disabled",!1).show(),t.bulkPriceChangeUnit.show();break;case"increase":case"reduce":t.bulkPriceChangeAmountPreposition.show().text(lpVars.i18n.by),t.bulkPriceChangeAmount.prop("disabled",!1).show(),t.bulkPriceChangeUnit.prop("disabled",!1).show(),t.bulkPriceChangeUnit.removeClass(t.disabled).append(e("<option>",{value:"percent",text:"%"}));break;case"free":t.bulkPriceObjectsCategory.length&&(x(a),a&&t.bulkPriceObjectsCategory.prop("disabled",!1).show());break;case"reset":t.bulkPriceChangeAmountPreposition.text(lpVars.i18n.toGlobalDefaultPrice+" "+lpVars.globalDefaultPrice+" "+lpVars.defaultCurrency),t.bulkPriceObjectsCategoryWithPrice.length&&(x(a),a&&t.bulkPriceObjectsCategoryWithPrice.prop("disabled",!1).show().change()),t.bulkPriceChangeAmountPreposition.show()}},V=function(){var s=e.trim(t.bulkPriceAction.find("option:selected").val()),i="free"===s?lpVars.i18n.make:t.bulkPriceAction.find("option:selected").text(),a=t.bulkPriceObjects.find("option:selected").text(),l="all"===e.trim(t.bulkPriceObjects.find("option:selected").val())?"":'"'+e.trim(t.bulkPriceObjectsCategory.find("option:selected").text())+'"',r="free"===e.trim(t.bulkPriceAction.find("option:selected").val())?"":t.bulkPriceChangeAmountPreposition.text(),o="free"===e.trim(t.bulkPriceAction.find("option:selected").val())?lpVars.i18n.free:"",n="free"===s||"reset"===s?"":t.bulkPriceChangeAmount.val()+t.bulkPriceChangeUnit.find("option:selected").text(),c=[i,a,l,r,n,o];c=e.trim(c.join(" ").replace(/\s+/g," ")),t.bulkPriceFormHiddenField.val("bulk_price_form_save"),t.bulkPriceOperationIdHiddenField.val(void 0),t.bulkPriceMessageHiddenField.val(c),e.post(ajaxurl,t.bulkPriceForm.serializeArray(),function(e){e.success&&A(e.data.id,e.data.message),setMessage(e.message,e.success)},"json")},A=function(e,s){var i='<p class="lp_bulk-operation" data-value="'+e+'"><a href="#" class="lp_js_deleteSavedBulkOperation lp_edit-link lp_delete-link" data-icon="g">'+lpVars.i18n.delete+'</a><a href="#" class="lp_js_applySavedBulkOperation button button-primary lp_m-l2">'+lpVars.i18n.updatePrices+'</a><span class="lp_bulk-operation__message">'+s+"</span></p>";t.bulkPriceForm.after(i)},L=function(e){t.bulkPriceFormHiddenField.val("bulk_price_form"),t.bulkPriceOperationIdHiddenField.val(e.data("value")),S()},W=function(s){t.bulkPriceFormHiddenField.val("bulk_price_form_delete"),t.bulkPriceOperationIdHiddenField.val(s.data("value")),s.velocity("fadeOut",{duration:250}),e.post(ajaxurl,t.bulkPriceForm.serializeArray(),function(e){e.success?s.remove():s.velocity("fadeIn",{duration:250}),setMessage(e.message,e.success)},"json")},H=function(s){var i=t.purchaseModeInput.is(":checked");i?t.timePassOnlyHideElements.velocity("slideUp",{duration:250}):t.timePassOnlyHideElements.velocity("slideDown",{duration:250}),t.purchaseModeInput.prop("disabled",!0),e.post(ajaxurl,s.serialize(),function(e){e.success||(setMessage(e.message,e.success),t.purchaseModeInput.attr("checked",!1),t.timePassOnlyHideElements.velocity("slideDown",{duration:250})),t.purchaseModeInput.prop("disabled",!1)},"json")},U=function(e,t){var s;return function(){var i=this,a=arguments;clearTimeout(s),s=setTimeout(function(){e.apply(i,a)},t)}},R=function(){s(),t.bulkPriceAction.change()};R()}t()})}(jQuery);