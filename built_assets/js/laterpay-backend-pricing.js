!function(e){e(function(){function s(){var s={revenueModel:".lp_js_revenueModel",revenueModelLabel:".lp_js_revenueModel_label",revenueModelLabelDisplay:".lp_js_revenueModel_labelDisplay",revenueModelInput:".lp_js_revenueModel_input",priceInput:".lp_js_priceInput",globalDefaultPriceForm:e("#lp_js_globalDefaultPrice_form"),globalDefaultPriceInput:e("#lp_js_globalDefaultPrice"),globalDefaultPriceDisplay:e("#lp_js_globalDefaultPrice_text"),globalDefaultPriceRevenueModelDisplay:e("#lp_js_globalDefaultPrice_revenueModelLabel"),editGlobalDefaultPrice:e("#lp_js_editGlobalDefaultPrice"),cancelEditingGlobalDefaultPrice:e("#lp_js_cancelEditingGlobalDefaultPrice"),saveGlobalDefaultPrice:e("#lp_js_saveGlobalDefaultPrice"),globalDefaultPriceShowElements:e("#lp_js_globalDefaultPrice_text, #lp_js_editGlobalDefaultPrice,#lp_js_globalDefaultPrice_revenueModelLabel"),globalDefaultPriceEditElements:e("#lp_js_globalDefaultPrice,#lp_js_globalDefaultPrice_revenueModel,#lp_js_cancelEditingGlobalDefaultPrice,#lp_js_saveGlobalDefaultPrice"),categoryDefaultPrices:e("#lp_js_categoryDefaultPrice_list"),addCategory:e("#lp_js_addCategoryDefaultPrice"),categoryDefaultPriceTemplate:e("#lp_js_categoryDefaultPrice_template"),categoryDefaultPriceForm:".lp_js_categoryDefaultPrice_form",editCategoryDefaultPrice:".lp_js_editCategoryDefaultPrice",cancelEditingCategoryDefaultPrice:".lp_js_cancelEditingCategoryDefaultPrice",saveCategoryDefaultPrice:".lp_js_saveCategoryDefaultPrice",deleteCategoryDefaultPrice:".lp_js_deleteCategoryDefaultPrice",categoryDefaultPriceShowElements:".lp_js_categoryDefaultPrice_categoryTitle,.lp_js_revenueModel_labelDisplay,.lp_js_categoryDefaultPrice_display,.lp_js_editCategoryDefaultPrice,.lp_js_deleteCategoryDefaultPrice",categoryDefaultPriceEditElements:".lp_js_categoryDefaultPrice_input,.lp_js_revenueModel,.lp_js_saveCategoryDefaultPrice,.lp_js_cancelEditingCategoryDefaultPrice",categoryTitle:".lp_js_categoryDefaultPrice_categoryTitle",categoryDefaultPriceDisplay:".lp_js_categoryDefaultPrice_display",selectCategory:".lp_js_selectCategory",categoryDefaultPriceInput:".lp_js_categoryDefaultPrice_input",categoryId:".lp_js_categoryDefaultPrice_categoryId",addTimePass:e("#lp_js_addTimePass"),timePassEditor:e(".lp_js_timePassEditor"),timePassTemplate:e("#lp_js_timePassTemplate"),timePassWrapper:".lp_js_timePassWrapper",timePassFormTemplate:e("#lp_js_timePassFormTemplate"),timePassFormId:"lp_js_timePassForm",timePassForm:".lp_js_timePassEditor_form",timePassDuration:".lp_js_switchTimePassDuration",timePassDurationClass:"lp_js_switchTimePassDuration",timePassPeriod:".lp_js_switchTimePassPeriod",timePassPeriodClass:"lp_js_switchTimePassPeriod",timePassScope:".lp_js_switchTimePassScope",timePassScopeClass:"lp_js_switchTimePassScope",timePassScopeCategory:".lp_js_switchTimePassScopeCategory",timePassScopeCategoryClass:"lp_js_switchTimePassScopeCategory",timePassTitle:".lp_js_timePassTitleInput",timePassTitleClass:"lp_js_timePassTitleInput",timePassPrice:".lp_js_timePassPriceInput",timePassPriceClass:"lp_js_timePassPriceInput",timePassRevenueModel:".lp_js_timePassRevenueModelInput",timePassDescription:".lp_js_timePassDescriptionTextarea",timePassDescriptionClass:"lp_js_timePassDescriptionTextarea",timePassPreviewTitle:".lp_js_timePassPreviewTitle",timePassPreviewDescription:".lp_js_timePassPreviewDescription",timePassPreviewValidity:".lp_js_timePassPreviewValidity",timePassPreviewAccess:".lp_js_timePassPreviewAccess",timePassPreviewPrice:".lp_js_timePassPreviewPrice",voucherPriceInput:".lp_js_voucherPriceInput",generateVoucherCode:".lp_js_generateVoucherCode",voucherDeleteLink:".lp_js_deleteVoucher",voucherEditor:".lp_js_voucherEditor",voucherHiddenPassId:"#lp_js_timePassEditor_hiddenPassId",voucherPlaceholder:".lp_js_voucherPlaceholder",voucherList:".lp_js_voucherList",voucher:".lp_js_voucher",voucherTimesRedeemed:".lp_js_voucherTimesRedeemed",bulkPriceForm:e("#lp_js_bulkPriceEditor_form"),bulkPriceFormHiddenField:e("#lp_js_bulkPriceEditor_hiddenFormInput"),bulkPriceOperationIdHiddenField:e("#lp_js_bulkPriceEditor_hiddenIdInput"),bulkPriceMessageHiddenField:e("#lp_js_bulkPriceEditor_hiddenMessageInput"),bulkPriceAction:e("#lp_js_selectBulkAction"),bulkPriceObjects:e("#lp_js_selectBulkObjects"),bulkPriceObjectsCategory:e("#lp_js_selectBulkObjectsCategory"),bulkPriceObjectsCategoryWithPrice:e("#lp_js_selectBulkObjectsCategoryWithPrice"),bulkPriceChangeAmountPreposition:e("#lp_js_bulkPriceEditor_amountPreposition"),bulkPriceChangeAmount:e("#lp_js_setBulkChangeAmount"),bulkPriceChangeUnit:e("#lp_js_selectBulkChangeUnit"),bulkPriceSubmit:e("#lp_js_applyBulkOperation"),bulkSaveOperationLink:e("#lp_js_saveBulkOperation"),bulkDeleteOperationLink:".lp_js_deleteSavedBulkOperation",bulkApplySavedOperationLink:".lp_js_applySavedBulkOperation",defaultCurrencyForm:e("#lp_js_defaultCurrency_form"),defaultCurrency:e("#lp_js_changeDefaultCurrency"),currency:".lp_js_currency",editing:"lp_is-editing",unsaved:"lp_is-unsaved",payPerUse:"ppu",singleSale:"sis",selected:"lp_is-selected",disabled:"lp_is-disabled",hidden:"lp_u_hide"},t=function(){e("body").on("change",s.revenueModelInput,function(){a(e(this).parents("form"))}),e("body").on("keyup",s.priceInput,W(function(){a(e(this).parents("form"))},800)),s.editGlobalDefaultPrice.mousedown(function(){l()}).click(function(e){e.preventDefault()}),s.cancelEditingGlobalDefaultPrice.mousedown(function(){r()}).click(function(e){e.preventDefault()}),s.saveGlobalDefaultPrice.mousedown(function(){o()}).click(function(e){e.preventDefault()}),s.addCategory.mousedown(function(){n()}).click(function(e){e.preventDefault()}),s.categoryDefaultPrices.on("click",s.editCategoryDefaultPrice,function(){var t=e(this).parents(s.categoryDefaultPriceForm);c(t)}),s.categoryDefaultPrices.on("click",s.cancelEditingCategoryDefaultPrice,function(){var t=e(this).parents(s.categoryDefaultPriceForm);p(t)}),s.categoryDefaultPrices.on("click",s.saveCategoryDefaultPrice,function(){var t=e(this).parents(s.categoryDefaultPriceForm);u(t)}),s.categoryDefaultPrices.on("click",s.deleteCategoryDefaultPrice,function(){var t=e(this).parents(s.categoryDefaultPriceForm);d(t)}),s.addTimePass.mousedown(function(){f()}).click(function(e){e.preventDefault()}),s.timePassEditor.on("mousedown",".lp_js_editTimePass",function(){v(e(this).parents(s.timePassWrapper))}).on("click",".lp_js_editTimePass",function(e){e.preventDefault()}),s.timePassEditor.on("change",s.timePassRevenueModel,function(){k(e(this).parents("form"))}),s.timePassEditor.on("change",s.timePassDuration,function(){g(e(this).parents(s.timePassWrapper),e(this))}),s.timePassEditor.on("change",s.timePassPeriod,function(){g(e(this).parents(s.timePassWrapper),e(this))}),s.timePassEditor.on("change",s.timePassScope,function(){C(e(this)),g(e(this).parents(s.timePassWrapper),e(this))}),s.timePassEditor.on("change",s.timePassScopeCategory,function(){g(e(this).parents(s.timePassWrapper),e(this))}),s.timePassEditor.on("input",[s.timePassTitle,s.timePassDescription].join(),function(){g(e(this).parents(s.timePassWrapper),e(this))}),s.timePassEditor.on("keyup",s.timePassPrice,W(function(){a(e(this).parents("form"),!1,e(this)),g(e(this).parents(s.timePassWrapper),e(this))},800)),s.timePassEditor.on("click",".lp_js_cancelEditingTimePass",function(t){b(e(this).parents(s.timePassWrapper)),t.preventDefault()}),s.timePassEditor.on("click",".lp_js_saveTimePass",function(t){j(e(this).parents(s.timePassWrapper)),t.preventDefault()}),s.timePassEditor.on("click",".lp_js_deleteTimePass",function(t){y(e(this).parents(s.timePassWrapper)),t.preventDefault()}),s.timePassEditor.on("mousedown",".lp_js_flipTimePass",function(){D(this)}).on("click",".lp_js_flipTimePass",function(e){e.preventDefault()}),s.timePassEditor.on("keyup",s.voucherPriceInput,W(function(){a(e(this).parents("form"),!0,e(this))},800)),s.timePassEditor.on("mousedown",s.generateVoucherCode,function(){T(e(this).parents(s.timePassWrapper))}).on("click",s.generateVoucherCode,function(e){e.preventDefault()}),s.timePassEditor.on("click",s.voucherDeleteLink,function(s){F(e(this).parent()),s.preventDefault()}),s.bulkPriceAction.add(s.bulkPriceObjects).on("change",function(){M(s.bulkPriceAction.val(),s.bulkPriceObjects.val())}),s.bulkPriceObjectsCategoryWithPrice.on("change",function(){s.bulkPriceChangeAmountPreposition.text(lpVars.i18n.toCategoryDefaultPrice+" "+s.bulkPriceObjectsCategoryWithPrice.find(":selected").attr("data-price")+" "+lpVars.defaultCurrency)}),s.bulkPriceForm.on("submit",function(e){s.bulkPriceFormHiddenField.val("bulk_price_form"),s.bulkPriceOperationIdHiddenField.val(void 0),s.bulkPriceMessageHiddenField.val(void 0),O(),e.preventDefault()}),s.bulkSaveOperationLink.mousedown(function(){S()}).click(function(e){e.preventDefault()}),e("body").on("mousedown",s.bulkApplySavedOperationLink,function(){A(e(this).parent())}).on("click",s.bulkApplySavedOperationLink,function(e){e.preventDefault()}),e("body").on("mousedown",s.bulkDeleteOperationLink,function(){L(e(this).parent())}).on("click",s.bulkDeleteOperationLink,function(e){e.preventDefault()}),s.defaultCurrency.change(function(){m()})},a=function(s,t,a){var l=a?a:e(".lp_numberInput",s),r=l.val();return r=r.replace(/[^0-9\,\.]/g,""),r=r.indexOf(",")>-1?parseFloat(r.replace(",",".")).toFixed(2):parseFloat(r).toFixed(2),isNaN(r)&&(r=0),r=Math.abs(r),t||(r>149.99?r=149.99:r>0&&.05>r&&(r=.05),i(r,s)),r=r.toFixed(2),"de_DE"===lpVars.locale&&(r=r.replace(".",",")),l.val(r),r},i=function(t,a){var i;if(a.hasClass("lp_js_timePassEditor_form")){var l=e(s.timePassRevenueModel,a),r=l.prop("checked");i=r?s.singleSale:s.payPerUse,t>5&&i===s.payPerUse?l.prop("checked",!0):1.49>t&&i===s.singleSale&&l.prop("checked",!1)}else{var o=e(".lp_js_revenueModel_input[value="+s.payPerUse+"]",a),n=e(".lp_js_revenueModel_input[value="+s.singleSale+"]",a);i=e("input:radio:checked",a).val(),0===t||t>=.05&&5>=t?o.removeProp("disabled").parent("label").removeClass(s.disabled):o.prop("disabled","disabled").parent("label").addClass(s.disabled),t>=1.49?n.removeProp("disabled").parent("label").removeClass(s.disabled):n.prop("disabled","disabled").parent("label").addClass(s.disabled),t>5&&i===s.payPerUse?n.prop("checked","checked"):1.49>t&&i===s.singleSale&&o.prop("checked","checked"),e("label",a).removeClass(s.selected),e(".lp_js_revenueModel_input:checked",a).parent("label").addClass(s.selected)}},l=function(){s.globalDefaultPriceShowElements.hide(),s.globalDefaultPriceEditElements.show(0,function(){setTimeout(function(){s.globalDefaultPriceInput.val(s.globalDefaultPriceDisplay.text()).focus()},50)}),s.globalDefaultPriceForm.addClass(s.editing)},r=function(){s.globalDefaultPriceShowElements.show(),s.globalDefaultPriceEditElements.hide(),s.globalDefaultPriceForm.removeClass(s.editing),s.globalDefaultPriceInput.val(s.globalDefaultPriceDisplay.text());var t=s.globalDefaultPriceRevenueModelDisplay.text().toLowerCase();e(s.revenueModelLabel,s.globalDefaultPriceForm).removeClass(s.selected),e(".lp_js_revenueModel_input[value="+t+"]",s.globalDefaultPriceForm).prop("checked","checked").parent("label").addClass(s.selected)},o=function(){var t=a(s.globalDefaultPriceForm);s.globalDefaultPriceInput.val(t),e.post(ajaxurl,s.globalDefaultPriceForm.serializeArray(),function(e){e.success&&(s.globalDefaultPriceDisplay.html(e.laterpay_global_price),s.globalDefaultPriceRevenueModelDisplay.text(e.laterpay_price_revenue_model)),setMessage(e.message,e.success),r()},"json")},n=function(){s.addCategory.fadeOut(250);var e=s.categoryDefaultPriceTemplate.clone().removeAttr("id").appendTo("#lp_js_categoryDefaultPrice_list").fadeIn(250);c(e)},c=function(t){e(".lp_js_categoryDefaultPrice_form.lp_is-editing").each(function(){p(e(this),!0)}),t.addClass(s.editing),e(s.categoryDefaultPriceShowElements,t).hide(),s.addCategory.fadeOut(250),e(s.categoryDefaultPriceEditElements,t).show(),P(t)},u=function(t){var i=a(t);e(s.categoryDefaultPriceInput,t).val(i),e.post(ajaxurl,t.serializeArray(),function(a){a.success&&(e(s.categoryDefaultPriceDisplay,t).text(a.price),e(s.revenueModelLabelDisplay,t).text(a.revenue_model),e(s.categoryDefaultPriceInput,t).val(a.price),e(s.categoryTitle,t).text(a.category),e(s.categoryId,t).val(a.category_id),t.removeClass(s.unsaved)),p(t),setMessage(a.message,a.success)},"json")},p=function(t,a){if(t.removeClass(s.editing),t.hasClass(s.unsaved))t.fadeOut(250,function(){e(this).remove()});else{e(s.categoryDefaultPriceEditElements,t).hide(),e(s.selectCategory,t).select2("destroy"),e(s.categoryDefaultPriceInput,t).val(e(s.categoryDefaultPriceDisplay,t).text());var i=e(s.revenueModelLabelDisplay,t).text().toLowerCase();e(s.revenueModelLabel,t).removeClass(s.selected),e(".lp_js_revenueModel_input[value="+i+"]",t).prop("checked","checked").parent("label").addClass(s.selected),e(s.categoryDefaultPriceShowElements,t).show()}a||s.addCategory.fadeIn(250)},d=function(s){e("input[name=form]",s).val("price_category_form_delete"),e.post(ajaxurl,s.serializeArray(),function(t){t.success&&s.fadeOut(400,function(){e(this).remove()}),setMessage(t.message,t.success)},"json")},_=function(s,t){var a=e(t).parent().parent().parent();return e(".lp_js_selectCategory",a).val(s.text),e(".lp_js_categoryDefaultPrice_categoryId",a).val(s.id),s.text},P=function(t){e(s.selectCategory,t).select2({allowClear:!0,ajax:{url:ajaxurl,data:function(e){return{term:e,action:"laterpay_pricing"}},results:function(s){var t=[];return e.each(s,function(e){var a=s[e];t.push({id:a.term_id,text:a.name})}),{results:t}},dataType:"json"},initSelection:function(s,t){var a=e(s).val();if(""!==a){var i={text:a};t(i)}else e.get(ajaxurl,{term:"",action:"laterpay_pricing"},function(e){if(e&&void 0!==e[0]){var s=e[0];t({text:s.name})}})},formatResult:function(e){return e.text},formatSelection:_,escapeMarkup:function(e){return e}})},m=function(){e.post(ajaxurl,s.defaultCurrencyForm.serializeArray(),function(t){t.success&&e(s.currency).html(t.laterpay_currency),setMessage(t.message,t.success)},"json")},f=function(){s.addTimePass.fadeOut(250),s.timePassEditor.prepend(s.timePassTemplate.clone().removeAttr("id"));var t=e(".lp_js_timePassWrapper",s.timePassEditor).first();e(s.timePassForm,t).attr("id",s.timePassFormId).addClass(s.unsaved),h(t),t.slideDown(250,function(){e(this).removeClass("lp_u_hide")}).find(s.timePassForm).slideDown(250,function(){e(this).removeClass("lp_u_hide")})},v=function(t){var a=s.timePassFormTemplate.clone().attr("id",s.timePassFormId);e(".lp_js_timePass_editorContainer",t).html(a),h(t),e(".lp_js_editTimePass, .lp_js_deleteTimePass",t).addClass("lp_u_hide"),e(".lp_js_saveTimePass, .lp_js_cancelEditingTimePass",t).removeClass("lp_u_hide"),a.removeClass("lp_u_hide")},h=function(t){var i=t.data("pass-id"),l=lpVars.time_passes_list[i],r=lpVars.vouchers_list[i],o=e(s.timePassRevenueModel,t),n="";if(l){e("input, select, textarea",t).each(function(s,t){n=e(t).attr("name"),""!==n&&void 0!==l[n]&&"revenue_model"!==n&&e(t).val(l[n])}),a(t.find("form"),!1,e(s.timePassPrice,t)),e(s.voucherPriceInput,t).val(e(s.timePassPrice,t).val()),l.revenue_model===s.singleSale&&o.prop("checked",!0);var c=e(s.timePassScope,t).find("option:selected");"0"!==c.val()&&e(s.timePassScopeCategory,t).show(),x(t),r instanceof Object&&e.each(r,function(e,s){w(e,s,t)})}},g=function(t,a){var i=""!==a.val()?a.val():" ";if(a.hasClass(s.timePassDurationClass)||a.hasClass(s.timePassPeriodClass)){var l=e(s.timePassDuration,t).val(),r=e(s.timePassPeriod,t).find("option:selected").text();r=parseInt(l,10)>1?r+"s":r,i=l+" "+r,e(s.timePassPreviewValidity,t).text(i)}else if(a.hasClass(s.timePassScopeClass)||a.hasClass(s.timePassScopeCategoryClass)){var o=e(s.timePassScope,t).find("option:selected");i=o.text(),"0"!==o.val()&&(i+=" "+e(s.timePassScopeCategory,t).find("option:selected").text()),e(s.timePassPreviewAccess,t).text(i)}else a.hasClass(s.timePassPriceClass)?(e(".lp_purchaseLink",t).html(i+"<small>"+lpVars.defaultCurrency+"</small>"),e(s.timePassPreviewPrice).text(i+" "+lpVars.defaultCurrency)):a.hasClass(s.timePassTitleClass)?e(s.timePassPreviewTitle,t).text(i):a.hasClass(s.timePassDescriptionClass)&&e(s.timePassPreviewDescription,t).text(i)},b=function(t){t.find(s.voucherList).show(),e(s.timePassForm,t).hasClass(s.unsaved)?t.fadeOut(250,function(){e(this).remove()}):e(s.timePassForm,t).fadeOut(250,function(){e(this).remove()}),e(".lp_js_editTimePass, .lp_js_deleteTimePass",t).removeClass("lp_u_hide"),e(".lp_js_saveTimePass, .lp_js_cancelEditingTimePass",t).addClass("lp_u_hide"),s.addTimePass.is(":hidden")&&s.addTimePass.fadeIn(250)},j=function(t){e.post(ajaxurl,e(s.timePassForm,t).serializeArray(),function(a){if(a.success){var i=a.data.pass_id;if(lpVars.vouchers_list[i]=a.vouchers,x(t),lpVars.vouchers_list[i]instanceof Object&&(e.each(lpVars.vouchers_list[i],function(e,s){E(e,s,t)}),t.find(s.voucherList).show()),lpVars.time_passes_list[i])lpVars.time_passes_list[i]=a.data,e(".lp_js_timePassPreview",t).html(a.html),e(".lp_js_saveTimePass, .lp_js_cancelEditingTimePass",t).addClass("lp_u_hide"),e(".lp_js_editTimePass, .lp_js_deleteTimePass",t).removeClass("lp_u_hide"),e(s.timePassForm,t).fadeOut(250,function(){e(this).remove()});else{lpVars.time_passes_list[i]=a.data;var l=s.timePassTemplate.clone().removeAttr("id").data("pass-id",i);e(".lp_js_timePassPreview",l).html(a.html),e(s.timePassForm,t).remove(),s.addTimePass.after(l),h(l),e(".lp_js_saveTimePass, .lp_js_cancelEditingTimePass",l).addClass("lp_u_hide"),e(".lp_js_editTimePass, .lp_js_deleteTimePass",l).removeClass("lp_u_hide"),t.fadeOut(250,function(){e(this).remove(),l.removeClass("lp_u_hide")})}}s.addTimePass.is(":hidden")&&s.addTimePass.fadeIn(250),setMessage(a.message,a.success)},"json")},y=function(s){confirm(lpVars.i18n.confirmDeleteTimePass)&&s.slideUp({duration:250,start:function(){e.post(ajaxurl,{action:"laterpay_pricing",form:"time_pass_delete",pass_id:s.data("pass-id")},function(s){s.success?e(this).remove():e(this).stop().show(),setMessage(s.message,s.success)},"json")}})},D=function(s){e(s).parents(".lp_timePass").toggleClass("lp_is-flipped")},C=function(t){var a=e("option:selected",t).val();"0"===a?e(s.timePassScopeCategory).hide():e(s.timePassScopeCategory).show()},k=function(t){a(t,!1,e(s.timePassPrice,t))},T=function(t){e.post(ajaxurl,{form:"generate_voucher_code",action:"laterpay_pricing"},function(e){e.success&&w(e.code,t.find(s.voucherPriceInput).val(),t)})},w=function(e,t,a){var i=t+" "+lpVars.defaultCurrency,l='<div class="lp_js_voucher lp_voucherRow" data-code="'+e+'" style="display:none;"><input type="hidden" name="voucher[]" value="'+e+"|"+t+'"><span class="lp_voucherCodeLabel">'+e+'</span><span class="lp_voucherCodeInfos">'+lpVars.i18n.voucherText+" "+i+'</span><a href="#" class="lp_js_deleteVoucher lp_editLink lp_deleteLink" data-icon="g">'+lpVars.i18n.delete+"</a></div>";a.find(s.voucherPlaceholder).prepend(l).find("div").first().slideDown(250)},E=function(e,t,a){var i=a.data("pass-id"),l=lpVars.vouchers_statistic[i]?lpVars.vouchers_statistic[i]:0,r=t+" "+lpVars.defaultCurrency,o='<div class="lp_js_voucher lp_voucherRow" data-code="'+e+'"><span class="lp_voucherCodeInfos">'+lpVars.i18n.voucherText+" "+r+'.<br><span class="lp_js_voucherTimesRedeemed">'+l+"</span>"+lpVars.i18n.timesRedeemed+"</span></div>";a.find(s.voucherList).append(o)},x=function(e){e.find(s.voucher).remove()},F=function(s){s.slideUp(250,function(){e(this).remove()})},O=function(t){e.post(ajaxurl,t||s.bulkPriceForm.serializeArray(),function(e){setMessage(e.message,e.success)},"json")},I=function(t){s.bulkPriceObjects.removeClass(s.disabled).append(e("<option>",{value:"in_category",text:lpVars.inCategoryLabel,selected:!!t}))},M=function(t,a){var i="in_category"===a;switch(s.bulkPriceChangeUnit.find("option").each(function(){"%"===e(this).text()&&e(this).remove()}).end().addClass(s.disabled),s.bulkPriceObjects.find("option").each(function(){"in_category"===e(this).val()&&(e(this).remove(),s.bulkPriceObjects.addClass(s.disabled))}),s.bulkPriceObjectsCategory.prop("disabled",!0).hide(),s.bulkPriceObjectsCategoryWithPrice.prop("disabled",!0).hide(),s.bulkPriceChangeAmountPreposition.hide(),s.bulkPriceChangeAmount.prop("disabled",!0).hide(),s.bulkPriceChangeUnit.prop("disabled",!0).hide(),t){case"set":s.bulkPriceChangeAmountPreposition.show().text(lpVars.i18n.to),s.bulkPriceChangeAmount.prop("disabled",!1).show(),s.bulkPriceChangeUnit.show();break;case"increase":case"reduce":s.bulkPriceChangeAmountPreposition.show().text(lpVars.i18n.by),s.bulkPriceChangeAmount.prop("disabled",!1).show(),s.bulkPriceChangeUnit.prop("disabled",!1).show(),s.bulkPriceChangeUnit.removeClass(s.disabled).append(e("<option>",{value:"percent",text:"%"}));break;case"free":s.bulkPriceObjectsCategory.length&&(I(i),i&&s.bulkPriceObjectsCategory.prop("disabled",!1).show());break;case"reset":s.bulkPriceChangeAmountPreposition.text(lpVars.i18n.toGlobalDefaultPrice+" "+lpVars.globalDefaultPrice+" "+lpVars.defaultCurrency),s.bulkPriceObjectsCategoryWithPrice.length&&(I(i),i&&s.bulkPriceObjectsCategoryWithPrice.prop("disabled",!1).show().change()),s.bulkPriceChangeAmountPreposition.show()}},S=function(){var t=e.trim(s.bulkPriceAction.find("option:selected").val()),a="free"===t?lpVars.i18n.make:s.bulkPriceAction.find("option:selected").text(),i=s.bulkPriceObjects.find("option:selected").text(),l="all"===e.trim(s.bulkPriceObjects.find("option:selected").val())?"":'"'+e.trim(s.bulkPriceObjectsCategory.find("option:selected").text())+'"',r="free"===e.trim(s.bulkPriceAction.find("option:selected").val())?"":s.bulkPriceChangeAmountPreposition.text(),o="free"===e.trim(s.bulkPriceAction.find("option:selected").val())?lpVars.i18n.free:"",n="free"===t||"reset"===t?"":s.bulkPriceChangeAmount.val()+s.bulkPriceChangeUnit.find("option:selected").text(),c=[a,i,l,r,n,o];c=e.trim(c.join(" ").replace(/\s+/g," ")),s.bulkPriceFormHiddenField.val("bulk_price_form_save"),s.bulkPriceOperationIdHiddenField.val(void 0),s.bulkPriceMessageHiddenField.val(c),e.post(ajaxurl,s.bulkPriceForm.serializeArray(),function(e){e.success&&V(e.data.id,e.data.message),setMessage(e.message,e.success)},"json")},V=function(e,t){var a='<p class="lp_bulkOperation" data-value="'+e+'"><a href="#" class="lp_js_deleteSavedBulkOperation lp_editLink lp_deleteLink" data-icon="g">'+lpVars.i18n.delete+'</a><a href="#" class="lp_js_applySavedBulkOperation button button-primary lp_m-l2">'+lpVars.i18n.updatePrices+"</a><span>"+t+"</span></p>";s.bulkPriceForm.after(a)},A=function(e){s.bulkPriceFormHiddenField.val("bulk_price_form"),s.bulkPriceOperationIdHiddenField.val(e.data("value")),O()},L=function(t){s.bulkPriceFormHiddenField.val("bulk_price_form_delete"),s.bulkPriceOperationIdHiddenField.val(t.data("value")),t.fadeOut(250),e.post(ajaxurl,s.bulkPriceForm.serializeArray(),function(e){e.success?t.remove():t.fadeIn(250),setMessage(e.message,e.success)},"json")},W=function(e,s){var t;return function(){var a=this,i=arguments;clearTimeout(t),t=setTimeout(function(){e.apply(a,i)},s)}},R=function(){t(),s.bulkPriceAction.change()};R()}s()})}(jQuery);