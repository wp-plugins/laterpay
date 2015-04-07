!function(e){e(function(){function t(){var t,a,s={itemsPerList:10,list:[],intervalToMs:{day:86400,week:604800,"2-weeks":1209600,month:2592e3},xhrRequests:[],configurationSelection:e(".lp_js_selectDashboardInterval, .lp_js_selectRevenueModel"),intervalChoices:e(".lp_js_selectDashboardInterval"),revenueModelChoices:e(".lp_js_selectRevenueModel"),currentInterval:e("#lp_js_displayedInterval"),previousInterval:e("#lp_js_loadPreviousInterval"),nextInterval:e("#lp_js_loadNextInterval"),refreshDashboard:e("#lp_js_refreshDashboard"),dropdown:".lp_js_dropdown",dropdownList:".lp_js_dropdownList",dropdownCurrentItem:".lp_js_dropdownCurrentItem",conversionDiagram:e("#lp_js_conversionDiagram"),salesDiagram:e("#lp_js_salesDiagram"),revenueDiagram:e("#lp_js_revenueDiagram"),colorBackground:"#e3e3e3",colorBackgroundLaterpay:"#50c371",colorBorder:"#ccc",colorTextLighter:"#ababab",totalImpressionsKPI:e("#lp_js_totalImpressions"),avgConversionKPI:e("#lp_js_avgConversion"),newCustomersKPI:e("#lp_js_shareOfNewCustomers"),avgItemsSoldKPI:e("#lp_js_avgItemsSold"),totalItemsSoldKPI:e("#lp_js_totalItemsSold"),avgRevenueKPI:e("#lp_js_avgRevenue"),totalRevenueKPI:e("#lp_js_totalRevenue"),bestConvertingList:e("#lp_js_bestConvertingList"),leastConvertingList:e("#lp_js_leastConvertingList"),bestSellingList:e("#lp_js_bestSellingList"),leastSellingList:e("#lp_js_leastSellingList"),bestGrossingList:e("#lp_js_bestGrossingList"),leastGrossingList:e("#lp_js_leastGrossingList"),toggleItemDetails:".lp_js_toggleItemDetails",expanded:"lp_is-expanded",selected:"lp_is-selected",disabled:"lp_is-disabled"},n={legend:{show:!1},xaxis:{font:{color:s.colorTextLighter,lineHeight:18},labelWidth:20,show:!0},yaxis:{font:{color:s.colorTextLighter},min:0,reserveSpace:!0,ticks:5},series:{shadowSize:0},grid:{borderWidth:{top:0,right:0,bottom:1,left:0},borderColor:s.colorBorder,tickColor:"rgba(247,247,247,0)"}},o=[{color:s.colorBackgroundLaterpay,lines:{fill:!1,gaps:!0,lineWidth:2.5,show:!0},points:{fill:!0,fillColor:s.colorBackgroundLaterpay,lineWidth:0,radius:4,show:!0}}],i=function(){e(s.dropdownCurrentItem).click(function(){e(this).parent(s.dropdown).addClass(s.expanded)}),s.configurationSelection.mousedown(function(){r(e(this))}).click(function(e){e.preventDefault()}),s.nextInterval.mousedown(function(){d()}).click(function(e){e.preventDefault()}),s.previousInterval.mousedown(function(){l()}).click(function(e){e.preventDefault()}),e("body").on("mousedown",s.toggleItemDetails,function(){alert("Toggling post details coming soon")}).on("click",s.toggleItemDetails,function(e){e.preventDefault()})},r=function(e){var t,a,n,o=s.currentInterval.data("startTimestamp"),i=m();if(e.parents(s.dropdown).removeClass(s.expanded).find(s.dropdownCurrentItem).text(e.text()).end().find("."+s.selected).removeClass(s.selected).end().end().addClass(s.selected),n=m(),"day"===i&&"day"!==n){var r=new Date,l=new Date(1e3*o);r.setHours(0,0,0,0),l.setHours(0,0,0,0),r.getTime()===l.getTime()&&(o-=v(i))}t=o+v(n),c(t,n),a=o-v(n),g(a,n),_(o,n),S(!1)},l=function(){var e=s.currentInterval.data("startTimestamp"),t=m(),a=v(t);s.previousInterval.hasClass(s.disabled)||(s.nextInterval.removeClass(s.disabled),e-=a,c(e,t),g(e,t),_(e,t),S(!1))},d=function(){var e,t=s.currentInterval.data("startTimestamp"),a=m(),n=v(a);s.nextInterval.hasClass(s.disabled)||(s.previousInterval.removeClass(s.disabled),t+=n,e=t+n,c(e,a),_(t,a),S(!0))},c=function(e,t){if(u(e)){var a=p(t);s.nextInterval.removeClass(s.disabled).attr({"data-tooltip":a.next})}else s.nextInterval.addClass(s.disabled).removeAttr("data-tooltip")},g=function(e,t){if(u(e)){var a=p(t);s.previousInterval.removeClass(s.disabled).attr({"data-tooltip":a.prev})}else s.previousInterval.addClass(s.disabled).removeAttr("data-tooltip")},u=function(e){var t=new Date,a=s.currentInterval.data("intervalEndTimestamp"),n=new Date(1e3*a),o=new Date(1e3*e),i=m();return"day"!==i&&t.setDate(t.getDate()-1),t.setHours(0,0,0,0),n.setHours(0,0,0,0),o.setHours(0,0,0,0),"day"===i?!(o.getTime()<=n.getTime()||o.getTime()>t.getTime()):!(o.getTime()<=n.getTime()||o.getTime()>=t.getTime())},v=function(e){var t=86400;return"day"===e?t=86400:"week"===e?t=8*t:"2-weeks"===e?t=16*t:"month"===e&&(t=30*t),t},p=function(e){return lpVars.i18n.tooltips[e]?lpVars.i18n.tooltips[e]:!1},m=function(){return s.intervalChoices.parents(s.dropdownList).find("."+s.selected).attr("data-interval")},_=function(e,t){var a,n,o,i,r=s.intervalToMs[t];a=e-r,o=new Date(1e3*e),n=new Date(1e3*a),i="day"===t?"de_DE"===lpVars.locale?o.getDate()+"."+(o.getMonth()+1)+"."+o.getFullYear():o.getFullYear()+"-"+("0"+(o.getMonth()+1)).slice(-2)+"-"+("0"+o.getDate()).slice(-2):"de_DE"===lpVars.locale?n.getDate()+"."+(n.getMonth()+1)+"."+n.getFullYear()+" &ndash; "+o.getDate()+"."+(o.getMonth()+1)+"."+o.getFullYear():n.getFullYear()+"-"+("0"+(n.getMonth()+1)).slice(-2)+"-"+("0"+n.getDate()).slice(-2)+" &ndash; "+o.getFullYear()+"-"+("0"+(o.getMonth()+1)).slice(-2)+"-"+("0"+o.getDate()).slice(-2),s.currentInterval.data("startTimestamp",e).html(i)},f=function(){s.xhrRequests.length<1||(e.each(s.xhrRequests,function(e,t){t&&t.abort()}),s.xhrRequests=[])},h=function(t,a,n){var o,i=m(),r=s.revenueModelChoices.parents(s.dropdownList).find("."+s.selected).attr("data-revenue-model"),l={action:"laterpay_get_dashboard_data",_wpnonce:lpVars.nonces.dashboard,section:t,interval:i,count:s.itemsPerList,refresh:a?1:0,revenue_model:r,start_timestamp:s.currentInterval.data("startTimestamp"),pass_id:n};return e.ajaxSetup({beforeSend:function(e){s.xhrRequests.push(e)},complete:function(e){var t=s.xhrRequests.indexOf(e);t>-1&&s.xhrRequests.splice(t,1)}}),o=e.ajax({url:lpVars.ajaxUrl,async:!0,method:"POST",data:l}),o.done(function(e){e&&!e.success&&setMessage(e.message,e.success)}),o},I=function(o){showLoadingIndicator(s.conversionDiagram),h("converting_items",o).done(function(o){var i=[];for(t=0,a=o.data.y.length;a>t;t++)i.push([t+1,100]);var r={xaxis:{ticks:o.data.x},yaxis:{tickSize:null,max:100}},l=[{data:i,bars:{align:"center",barWidth:.6,fillColor:s.colorBackground,horizontal:!1,lineWidth:0,show:!0}},{data:o.data.y,bars:{align:"center",barWidth:.4,fillColor:s.colorBackgroundLaterpay,horizontal:!1,lineWidth:0,show:!0}}];r=e.extend(!0,{},n,r),e.plot(s.conversionDiagram,l,r)}).always(function(){removeLoadingIndicator(s.conversionDiagram)})},L=function(t){showLoadingIndicator(s.salesDiagram),h("selling_items",t).done(function(t){var a={xaxis:{ticks:t.data.x},yaxis:{max:null}},i=o;a=e.extend(!0,{},n,a),i[0].data=t.data.y,e.plot(s.salesDiagram,i,a)}).always(function(){removeLoadingIndicator(s.salesDiagram)})},b=function(t){showLoadingIndicator(s.revenueDiagram),h("revenue_items",t).done(function(t){var a={xaxis:{ticks:t.data.x},yaxis:{max:null}},i=o;a=e.extend(!0,{},n,a),i[0].data=t.data.y,e.plot(s.revenueDiagram,i,a)}).always(function(){removeLoadingIndicator(s.revenueDiagram)})},w=function(e){showLoadingIndicator(s.bestConvertingList),showLoadingIndicator(s.leastConvertingList),h("most_least_converting_items",e).done(function(e){e.data.most||(e.data.most={}),e.data.least||(e.data.least={}),j(s.bestConvertingList,e.data.most),k(s.bestConvertingList),j(s.leastConvertingList,e.data.least),k(s.leastConvertingList)}).always(function(){removeLoadingIndicator(s.bestConvertingList),removeLoadingIndicator(s.leastConvertingList)})},x=function(e){showLoadingIndicator(s.bestSellingList),showLoadingIndicator(s.leastSellingList),h("most_least_selling_items",e).done(function(e){e.data.most||(e.data.most={}),e.data.least||(e.data.least={}),j(s.bestSellingList,e.data.most),k(s.bestSellingList),j(s.leastSellingList,e.data.least),k(s.leastSellingList)}).always(function(){removeLoadingIndicator(s.bestSellingList),removeLoadingIndicator(s.leastSellingList)})},D=function(e){showLoadingIndicator(s.bestGrossingList),showLoadingIndicator(s.leastGrossingList),h("most_least_revenue_items",e).done(function(e){e.data.most||(e.data.most={}),e.data.least||(e.data.least={}),j(s.bestGrossingList,e.data.most),k(s.bestGrossingList),j(s.leastGrossingList,e.data.least),k(s.leastGrossingList)}).always(function(){removeLoadingIndicator(s.bestGrossingList),removeLoadingIndicator(s.leastGrossingList)})},C=function(e){h("metrics",e).done(function(e){s.totalImpressionsKPI.text(e.data.impressions||0),s.avgConversionKPI.text(e.data.conversion||0),s.newCustomersKPI.text(e.data.new_customers||0),s.avgItemsSoldKPI.text(e.data.avg_items_sold||0),s.totalItemsSoldKPI.text(e.data.total_items_sold||0),s.avgRevenueKPI.text(e.data.avg_purchase||0),s.totalRevenueKPI.text(e.data.total_revenue||0)})},j=function(e,n){if(s.list=[],t=0,a=n?n.length:0,a>0)for(;a>t;t++)s.list.push(y(n[t].post_id,n[t].post_title,n[t].amount,n[t].unit,n[t].sparkline));else s.list=['<dfn class="lp_top-bottom-list__empty-state">'+lpVars.i18n.noData+"</dfn>"];e.html(s.list.join(""))},y=function(e,t,a,s,n){var o=s?a+"<small>"+s+"</small>":a,i="lp_dashboard-data__value";return("%"===s||""===s)&&(i="lp_dashboard-data__value lp_dashboard-data__value--narrow"),'<li class="lp_dashboard-data__item"><span class="lp_js_sparkLine lp_dashboard-data__sparkline">'+n+'</span><strong class="'+i+'">'+o+'</strong><i><a href="#" class="lp_js_toggleItemDetails lp_dashboard-data__link">'+t+"</a></i></li>"},k=function(t){var a=e(".lp_js_sparkLine",t),n=a.first().text().split(",").length;n>8?a.peity("line",{fill:s.colorBackground,height:14,stroke:s.colorBorder,width:34}):a.peity("bar",{fill:function(){return s.colorBorder},gap:1,height:14,width:34})},S=function(e){f(),e=e||!1,w(e),D(e),x(e),I(e),b(e),L(e),C(e)},T=function(){i(),S()};T()}t()})}(jQuery);