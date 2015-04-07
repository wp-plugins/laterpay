!function(e){e(function(){function i(){var i={priceInput:e("#lp_js_postPriceInput"),priceTypeInput:e("#lp_js_postPriceTypeInput"),revenueModel:e("#lp_js_postPriceRevenueModel"),categoryInput:e("#lp_js_postDefaultCategoryInput"),priceSection:e("#lp_js_priceType"),pricingTypeButtonGroup:e("#lp_js_priceTypeButtonGroup"),pricingTypeButtons:e(".lp_js_priceTypeButton"),individualPriceButton:e("#lp_js_useIndividualPrice").parent(),categoryPriceSelector:"#lp_js_useCategoryDefaultPrice",categoryPriceButton:e("#lp_js_useCategoryDefaultPrice").parent(),globalPriceButton:e("#lp_js_useGlobalDefaultPrice").parent(),details:e("#lp_js_priceTypeDetails"),detailsSections:e(".lp_js_priceTypeDetailsSection"),individualPriceDetails:e("#lp_js_priceTypeDetailsIndividualPrice"),categoryPriceDetails:e("#lp_js_priceTypeDetailsCategoryDefaultPrice"),categoriesList:e(".lp_js_priceTypeDetailsCategoryDefaultPriceList"),categories:e(".lp_js_priceTypeDetailsCategoryDefaultPriceItem"),dynamicPricingToggle:e("#lp_js_toggleDynamicPricing"),dynamicPricingContainer:"#lp_js_dynamicPricingWidgetContainer",dynamicPricingResetDate:e("#lp_js_resetDynamicPricingStartDate"),expanded:"lp_is-expanded",selected:"lp_is-selected",disabled:"lp_is-disabled",dynamicPricingApplied:"lp_is-withDynamicPricing",selectedCategory:"lp_is-selectedCategory",payPerUse:"ppu",singleSale:"sis"},a=function(){i.pricingTypeButtons.mousedown(function(){t(this)}).click(function(e){e.preventDefault()}),e("#post").submit(function(){v()}),i.priceInput.keyup(P(function(){r(e(this).val())},800)),e("input:radio",i.revenueModel).change(function(){l(i.priceInput.val())}),i.dynamicPricingToggle.mousedown(function(){o()}).click(function(e){e.preventDefault()}),i.dynamicPricingResetDate.mousedown(function(){u(lpVars.postId)}).click(function(e){e.preventDefault()}),e(".categorychecklist input:checkbox").on("change",function(){p()}),i.categoryPriceDetails.on("mousedown","a",function(){d(this)}).on("click","a",function(e){e.preventDefault()})},t=function(a){var t,n,p=e(a),d=p.parent("li"),o=p.attr("id");if(!d.hasClass(i.disabled)&&!d.hasClass(i.selected)){if(e("."+i.selected,i.pricingTypeButtonGroup).removeClass(i.selected),d.addClass(i.selected),i.priceSection.removeClass(i.expanded),i.detailsSections.hide(),"lp_js_useIndividualPrice"===o)i.priceSection.addClass(i.expanded),i.dynamicPricingToggle.show(),i.priceTypeInput.val("individual price"),l(i.priceInput.val()),i.dynamicPricingToggle.text()===lpVars.i18nRemoveDynamicPricing&&(m(),i.individualPriceDetails.show());else if("lp_js_useCategoryDefaultPrice"===o){c();var u=e(".lp_is-selectedCategory a",i.categoriesList);t=u.attr("data-price"),n=u.attr("data-revenue-model"),r(t),s(n,!0),i.priceSection.addClass(i.expanded),i.categoryPriceDetails.show(),i.categories.slideDown(250),i.dynamicPricingToggle.hide(),i.priceTypeInput.val("category default price")}else"lp_js_useGlobalDefaultPrice"===o&&(t=p.attr("data-price"),n=p.attr("data-revenue-model"),r(t),s(n,!0),i.dynamicPricingToggle.hide(),i.priceTypeInput.val("global default price"));"lp_js_useIndividualPrice"!==o||i.dynamicPricingToggle.hasClass(i.dynamicPricingApplied)?(i.dynamicPricingToggle.hasClass(i.dynamicPricingApplied)&&y(),i.priceInput.attr("disabled","disabled")):(i.priceInput.removeAttr("disabled"),setTimeout(function(){i.priceInput.focus()},50))}},r=function(e){var a=l(e);i.priceInput.val(a)},s=function(a,t){e("label",i.revenueModel).removeClass(i.selected),t&&e("input:radio[value!="+a+"]",i.revenueModel).parent("label").addClass(i.disabled),e("input:radio[value="+a+"]",i.revenueModel).prop("checked","checked").parent("label").removeClass(i.disabled).addClass(i.selected)},l=function(e){return e=e.toString().replace(/[^0-9\,\.]/g,""),e="string"==typeof e&&e.indexOf(",")>-1?parseFloat(e.replace(",",".")).toFixed(2):parseFloat(e).toFixed(2),isNaN(e)&&(e=0),e=Math.abs(e),e>lpVars.limits.sis_max?e=lpVars.limits.sis_max:e>0&&e<lpVars.limits.ppu_min&&(e=lpVars.limits.ppu_min),n(e),e=e.toFixed(2),"de_DE"===lpVars.locale&&(e=e.replace(".",",")),e},n=function(a){var t=e("input:radio:checked",i.revenueModel).val(),r=e("input:radio[value="+i.payPerUse+"]",i.revenueModel),s=e("input:radio[value="+i.singleSale+"]",i.revenueModel);0===a||a>=lpVars.limits.ppu_min&&a<lpVars.limits.price_sis_end?r.parent("label").removeClass(i.disabled):r.parent("label").addClass(i.disabled),a>=lpVars.limits.sis_min?s.parent("label").removeClass(i.disabled):s.parent("label").addClass(i.disabled),a>lpVars.limits.ppusis_max&&t===i.payPerUse?s.prop("checked",!0):a<lpVars.limits.sis_min&&t===i.singleSale&&r.prop("checked",!0),e("label",i.revenueModel).removeClass(i.selected),e("input:radio:checked",i.revenueModel).parent("label").addClass(i.selected)},c=function(){var a=i.categoryInput.val(),t=i.categories.first();if(!i.categories.length)return void i.categoryInput.val("");if("undefined"!=typeof a&&e("[data-category="+a+"]",i.categories.parent()).length?e("[data-category="+a+"]",i.categories.parent()).addClass(i.selectedCategory):(t.addClass(i.selectedCategory),i.categoryInput.val(t.data("category"))),i.categoryPriceButton.hasClass(i.selected)){var l=e(".lp_is-selectedCategory a",i.categoriesList),n=l.attr("data-price"),c=l.attr("data-revenue-model");r(n),s(c,!0)}},p=function(){var a,l,n=e("#categorychecklist :checkbox:checked"),c=n.length,p=[],d="";for(a=0;c>a;a++)l=parseInt(n.eq(a).val(),10),p.push(l);e.post(lpVars.ajaxUrl,{action:"laterpay_get_category_prices",form:"laterpay_get_category_prices",category_ids:p},function(a){a&&(a.forEach(function(e){var i=parseFloat(e.category_price).toFixed(2)+" "+lpVars.currency;d+='<li data-category="'+e.category_id+'" class="lp_price-type-categorized__item"><a href="#" data-price="'+e.category_price+'" data-revenue-model="'+e.revenue_model+'"><span>'+i+"</span>"+e.category_name+"</a></li>"}),i.categoriesList.html(d),a.length?(i.categoryPriceButton.removeClass(i.disabled).removeClass(i.selected),i.categories=e("#lp_js_priceTypeDetailsCategoryDefaultPrice li"),t(i.categoryPriceSelector),i.globalPriceButton.addClass(i.disabled)):(i.categoryPriceButton.addClass(i.disabled),i.globalPriceButton.removeClass(i.disabled),i.detailsSections.hide(),i.categoryPriceButton.hasClass(i.selected)&&(e("."+i.selected,i.pricingTypeButtonGroup).removeClass(i.selected),i.priceSection.removeClass(i.expanded),i.globalPriceButton.hasClass(i.disabled)?(i.individualPriceButton.addClass(i.selected),i.priceTypeInput.val("individual price"),i.dynamicPricingToggle.show(),i.priceInput.removeAttr("disabled"),r(0),s(i.payPerUse,!1)):(i.globalPriceButton.addClass(i.selected),i.priceTypeInput.val("global default price"),r(lpVars.globalDefaultPrice),s(e("a",i.globalPriceButton).attr("data-revenue-model"),!0)))))},"json")},d=function(a){var t=e(a),l=t.parent(),n=l.attr("data-category"),c=t.attr("data-price"),p=t.attr("data-revenue-model");i.categories.removeClass(i.selectedCategory),l.addClass(i.selectedCategory),i.categoryInput.val(n),r(c),s(p,!0)},o=function(){i.dynamicPricingToggle.hasClass(i.dynamicPricingApplied)?(y(),i.revenueModel.show()):g()},u=function(i){e.post(lpVars.ajaxUrl,{action:"laterpay_reset_post_publication_date",post_id:i},function(e){e.success?window.location.reload():e.message&&alert(e.message)},"json")},g=function(){m(),i.dynamicPricingToggle.addClass(i.dynamicPricingApplied),i.priceInput.attr("disabled","disabled"),i.individualPriceDetails.slideDown(250),i.priceTypeInput.val("individual price, dynamic"),i.dynamicPricingToggle.text(lpVars.i18nRemoveDynamicPricing).attr("data-icon","e")},y=function(){_(),i.dynamicPricingToggle.removeClass(i.dynamicPricingApplied),i.individualPriceDetails.slideUp(250,function(){e(i.dynamicPricingContainer).empty()}),i.dynamicPricingResetDate.fadeOut(250),i.dynamicPricingToggle.text(lpVars.i18nAddDynamicPricing).attr("data-icon","c"),"individual price, dynamic"===i.priceTypeInput.val()&&(i.priceTypeInput.val("individual price"),i.priceInput.removeAttr("disabled"))},_=function(){e.post(lpVars.ajaxUrl,{action:"laterpay_remove_post_dynamic_pricing",post_id:lpVars.postId},function(e){e.message&&alert(e.message)},"json")},m=function(){e.post(lpVars.ajaxUrl,{action:"laterpay_get_dynamic_pricing_data",post_id:lpVars.postId,post_price:i.priceInput.val()},function(e){if(e){var a=new DynamicPricingWidget(i.dynamicPricingContainer),t=e.values[0].y,r=e.values[3].y,s=0,l=5;window.dynamicPricingWidget=a,i.priceInput.attr("disabled","disabled"),t>lpVars.limits.ppusis_max||r>lpVars.limits.ppusis_max?(l=lpVars.limits.sis_max,s=lpVars.limits.sis_min):t>=lpVars.limits.sis_min||r>=lpVars.limits.sis_min?(l=lpVars.limits.ppusis_max,s=lpVars.limits.ppusis_min):(l=lpVars.limits.ppusis_max,s=lpVars.limits.ppu_min),e.price.pubDays>0&&e.price.pubDays<=30&&a.set_today(e.price.pubDays,e.price.todayPrice),4===e.values.length?a.set_data(e.values).setPrice(s,l,lpVars.globalDefaultPrice).plot():a.set_data(e.values).setPrice(s,l,lpVars.globalDefaultPrice).interpolate("step-before").plot()}},"json")},v=function(){if(i.dynamicPricingToggle.hasClass(i.dynamicPricingApplied)){var a=window.dynamicPricingWidget.get_data();return 4===window.dynamicPricingWidget.get_data().length?(e("input[name=start_price]").val(a[0].y),e("input[name=end_price]").val(a[3].y),e("input[name=change_start_price_after_days]").val(a[1].x),e("input[name=transitional_period_end_after_days]").val(a[2].x),e("input[name=reach_end_price_after_days]").val(a[3].x)):3===window.dynamicPricingWidget.get_data().length&&(e("input[name=start_price]").val(a[0].y),e("input[name=end_price]").val(a[2].y),e("input[name=change_start_price_after_days]").val(a[1].x),e("input[name=transitional_period_end_after_days]").val(0),e("input[name=reach_end_price_after_days]").val(a[2].x)),!0}},P=function(e,i){var a;return function(){var t=this,r=arguments;clearTimeout(a),a=setTimeout(function(){e.apply(t,r)},i)}},f=function(){a(),i.dynamicPricingToggle.hasClass(i.dynamicPricingApplied)&&m()};f()}i()})}(jQuery);