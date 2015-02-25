!function(e){e(function(){function t(){var t,a,s={itemsPerList:10,list:[],intervalToMs:{day:86400,week:604800,"2-weeks":1209600,month:2592e3},configurationSelection:e(".lp_js_selectDashboardInterval, .lp_js_selectRevenueModel"),intervalChoices:e(".lp_js_selectDashboardInterval"),revenueModelChoices:e(".lp_js_selectRevenueModel"),currentInterval:e("#lp_js_displayedInterval"),previousInterval:e("#lp_js_loadPreviousInterval"),nextInterval:e("#lp_js_loadNextInterval"),refreshDashboard:e("#lp_js_refreshDashboard"),dropdown:".lp_dropdown",dropdownList:".lp_dropdown_list",dropdownCurrentItem:".lp_dropdown_currentItem",conversionDiagram:e("#lp_js_conversionDiagram"),salesDiagram:e("#lp_js_salesDiagram"),revenueDiagram:e("#lp_js_revenueDiagram"),colorBackground:"#e3e3e3",colorBackgroundLaterpay:"#50c371",colorBorder:"#ccc",colorTextLighter:"#ababab",totalImpressionsKPI:e("#lp_js_totalImpressions"),avgConversionKPI:e("#lp_js_avgConversion"),newCustomersKPI:e("#lp_js_shareOfNewCustomers"),avgItemsSoldKPI:e("#lp_js_avg-items-sold"),totalItemsSoldKPI:e("#lp_js_total-items-sold"),avgRevenueKPI:e("#lp_js_avgRevenue"),totalRevenueKPI:e("#lp_js_totalRevenue"),bestConvertingList:e("#lp_js_bestConvertingList"),leastConvertingList:e("#lp_js_leastConvertingList"),bestSellingList:e("#lp_js_bestSellingList"),leastSellingList:e("#lp_js_leastSellingList"),bestGrossingList:e("#lp_js_bestGrossingList"),leastGrossingList:e("#lp_js_leastGrossingList"),toggleItemDetails:".lp_js_toggleItemDetails",viewSelector:e("#lp_js_switchDashboardView"),standardKpiTab:e("#lp_js_standardKpiTab"),timePassesKpiTab:e("#lp_js_timePassesKpiTab"),timepassDiagram:e(".lp_js_timepassDiagram"),expanded:"lp_is-expanded",selected:"lp_is-selected",active:"lp_is-active",delayed:"lp_is-delayed",disabled:"lp_is-disabled"},i={legend:{show:!1},xaxis:{font:{color:s.colorTextLighter,lineHeight:18},labelWidth:20,show:!0},yaxis:{font:{color:s.colorTextLighter},min:0,reserveSpace:!0,ticks:5},series:{shadowSize:0},grid:{borderWidth:{top:0,right:0,bottom:1,left:0},borderColor:s.colorBorder,tickColor:"rgba(247,247,247,0)"}},n=[{color:s.colorBackgroundLaterpay,lines:{fill:!1,gaps:!0,lineWidth:2.5,show:!0},points:{fill:!0,fillColor:s.colorBackgroundLaterpay,lineWidth:0,radius:4,show:!0}}],l=function(){e(s.dropdownCurrentItem).click(function(){e(this).parent(s.dropdown).addClass(s.expanded)}),s.configurationSelection.mousedown(function(){var t,a,i,n=s.currentInterval.data("startTimestamp"),l=v();if(e(this).parents(s.dropdown).removeClass(s.expanded).find(s.dropdownCurrentItem).text(e(this).text()).end().find("."+s.selected).removeClass(s.selected).end().end().addClass(s.selected),i=v(),"day"===l&&"day"!==i){var o=new Date,r=new Date(1e3*n);o.setHours(0,0,0,0),r.setHours(0,0,0,0),o.getTime()===r.getTime()&&(n-=u(l))}t=n+u(i),d(t,i),a=n-u(i),p(a,i),g(n,i),k(!1)}).click(function(e){e.preventDefault()}),s.nextInterval.mousedown(function(){r()}).click(function(e){e.preventDefault()}),s.previousInterval.mousedown(function(){o()}).click(function(e){e.preventDefault()}),e("body").on("mousedown",s.toggleItemDetails,function(){alert("Toggling post details coming soon")}).on("click",s.toggleItemDetails,function(e){e.preventDefault()}),s.viewSelector.mousedown(function(){S(e(this))}).click(function(e){e.preventDefault()})},o=function(){var e=s.currentInterval.data("startTimestamp"),t=v(),a=u(t);s.previousInterval.hasClass(s.disabled)||(s.previousInterval.removeClass(s.disabled),e-=a,d(e,t),p(e,t),g(e,t),k(!1))},r=function(){var e,t=s.currentInterval.data("startTimestamp"),a=v(),i=u(a);s.nextInterval.hasClass(s.disabled)||(s.previousInterval.removeClass(s.disabled),t+=i,e=t+i,d(e,a),g(t,a),k(!0))},d=function(e,t){if(c(e)){var a=m(t);s.nextInterval.removeClass(s.disabled).attr({"data-tooltip":a.next})}else s.nextInterval.addClass(s.disabled).removeAttr("data-tooltip")},p=function(e,t){if(c(e)){var a=m(t);s.previousInterval.removeClass(s.disabled).attr({"data-tooltip":a.prev})}else s.previousInterval.addClass(s.disabled).removeAttr("data-tooltip")},c=function(e){var t=new Date,a=s.currentInterval.data("intervalEndTimestamp"),i=new Date(1e3*a),n=new Date(1e3*e),l=v();return"day"!==l&&t.setDate(t.getDate()-1),t.setHours(0,0,0,0),i.setHours(0,0,0,0),n.setHours(0,0,0,0),"day"===l?!(n.getTime()<=i.getTime()||n.getTime()>t.getTime()):!(n.getTime()<=i.getTime()||n.getTime()>=t.getTime())},u=function(e){var t=86400;return"day"===e?t=86400:"week"===e?t=8*t:"2-weeks"===e?t=16*t:"month"===e&&(t=30*t),t},m=function(e){return lpVars.i18n.tooltips[e]?lpVars.i18n.tooltips[e]:!1},v=function(){return s.intervalChoices.parents(s.dropdownList).find("."+s.selected).attr("data-interval")},g=function(e,t){var a,i,n,l,o=s.intervalToMs[t];a=e-o,n=new Date(1e3*e),i=new Date(1e3*a),l="day"===t?"de_DE"===lpVars.locale?n.getDate()+"."+(n.getMonth()+1)+"."+n.getFullYear():n.getFullYear()+"-"+("0"+(n.getMonth()+1)).slice(-2)+"-"+("0"+n.getDate()).slice(-2):"de_DE"===lpVars.locale?i.getDate()+"."+(i.getMonth()+1)+"."+i.getFullYear()+" &ndash; "+n.getDate()+"."+(n.getMonth()+1)+"."+n.getFullYear():i.getFullYear()+"-"+("0"+(i.getMonth()+1)).slice(-2)+"-"+("0"+i.getDate()).slice(-2)+" &ndash; "+n.getFullYear()+"-"+("0"+(n.getMonth()+1)).slice(-2)+"-"+("0"+n.getDate()).slice(-2),s.currentInterval.data("startTimestamp",e).html(l)},f=function(t,a,i){var n,l=v(),o=s.revenueModelChoices.parents(s.dropdownList).find("."+s.selected).attr("data-revenue-model"),r={action:"laterpay_get_dashboard_data",_wpnonce:lpVars.nonces.dashboard,section:t,interval:l,count:s.itemsPerList,refresh:a?1:0,revenue_model:o,start_timestamp:s.currentInterval.data("startTimestamp"),pass_id:i};return n=e.ajax({url:lpVars.ajaxUrl,async:!0,method:"POST",data:r}),n.done(function(e){e&&!e.success&&setMessage(e.message,e.success)}),n},_=function(e){e.addClass(s.delayed),setTimeout(function(){e.hasClass(s.delayed)&&e.html('<div class="lp_loadingIndicator"></div>')},600)},h=function(e){e.hasClass(s.delayed)?e.removeClass(s.delayed):e.find(".lp_loadingIndicator").remove()},x=function(n){_(s.conversionDiagram),f("converting_items",n).done(function(n){var l=[];for(t=0,a=n.data.y.length;a>t;t++)l.push([t+1,100]);var o={xaxis:{ticks:n.data.x},yaxis:{tickSize:null,max:100}},r=[{data:l,bars:{align:"center",barWidth:.6,fillColor:s.colorBackground,horizontal:!1,lineWidth:0,show:!0}},{data:n.data.y,bars:{align:"center",barWidth:.4,fillColor:s.colorBackgroundLaterpay,horizontal:!1,lineWidth:0,show:!0}}];o=e.extend(!0,{},i,o),e.plot(s.conversionDiagram,r,o)}).always(function(){h(s.conversionDiagram)})},b=function(t){_(s.salesDiagram),f("selling_items",t).done(function(t){var a={xaxis:{ticks:t.data.x},yaxis:{max:null}},l=n;a=e.extend(!0,{},i,a),l[0].data=t.data.y,e.plot(s.salesDiagram,l,a)}).always(function(){h(s.salesDiagram)})},w=function(t){_(s.revenueDiagram),f("revenue_items",t).done(function(t){var a={xaxis:{ticks:t.data.x},yaxis:{max:null}},l=n;a=e.extend(!0,{},i,a),l[0].data=t.data.y,e.plot(s.revenueDiagram,l,a)}).always(function(){h(s.revenueDiagram)})},y=function(e){_(s.bestConvertingList),_(s.leastConvertingList),f("most_least_converting_items",e).done(function(e){e.data.most||(e.data.most={}),e.data.least||(e.data.least={}),C(s.bestConvertingList,e.data.most),j(s.bestConvertingList),C(s.leastConvertingList,e.data.least),j(s.leastConvertingList)}).always(function(){h(s.bestConvertingList),h(s.leastConvertingList)})},I=function(e){_(s.bestSellingList),_(s.leastSellingList),f("most_least_selling_items",e).done(function(e){e.data.most||(e.data.most={}),e.data.least||(e.data.least={}),C(s.bestSellingList,e.data.most),j(s.bestSellingList),C(s.leastSellingList,e.data.least),j(s.leastSellingList)}).always(function(){h(s.bestSellingList),h(s.leastSellingList)})},D=function(e){_(s.bestGrossingList),_(s.leastGrossingList),f("most_least_revenue_items",e).done(function(e){e.data.most||(e.data.most={}),e.data.least||(e.data.least={}),C(s.bestGrossingList,e.data.most),j(s.bestGrossingList),C(s.leastGrossingList,e.data.least),j(s.leastGrossingList)}).always(function(){h(s.bestGrossingList),h(s.leastGrossingList)})},L=function(e){f("metrics",e).done(function(e){s.totalImpressionsKPI.text(e.data.impressions||0),s.avgConversionKPI.text(e.data.conversion||0),s.newCustomersKPI.text(e.data.new_customers||0),s.avgItemsSoldKPI.text(e.data.avg_items_sold||0),s.totalItemsSoldKPI.text(e.data.total_items_sold||0),s.avgRevenueKPI.text(e.data.avg_purchase||0),s.totalRevenueKPI.text(e.data.total_revenue||0)})},C=function(e,i){if(s.list=[],t=0,a=i?i.length:0,a>0)for(;a>t;t++)s.list.push(T(i[t].post_id,i[t].post_title,i[t].amount,i[t].unit,i[t].sparkline));else s.list=['<dfn class="lp_topBottomList__empty-state">'+lpVars.i18n.noData+"</dfn>"];e.html(s.list.join(""))},T=function(e,t,a,s,i){var n=s?a+"<small>"+s+"</small>":a,l="lp_value";return("%"===s||""===s)&&(l="lp_value-narrow"),'<li><span class="lp_sparklineBar">'+i+'</span><strong class="'+l+'">'+n+'</strong><i><a href="#" class="lp_js_toggleItemDetails">'+t+"</a></i></li>"},j=function(t){var a=e(".lp_sparklineBar",t),i=a.first().text().split(",").length;i>8?a.peity("line",{fill:s.colorBackground,height:14,stroke:s.colorBorder,width:34}):a.peity("bar",{fill:function(){return s.colorBorder},gap:1,height:14,width:34})},k=function(e){e=e||!1,y(e),D(e),I(e),x(e),P(!0),w(e),b(e),L(e)},S=function(t){var a=e.parseJSON(t.attr("data")),i=e.trim(t.html());a.view===lpVars.submenu.view.standard?(t.html(a.label),a.view=lpVars.submenu.view.passes,s.standardKpiTab.show(),s.timePassesKpiTab.hide(),a.label=i,t.attr("data",JSON.stringify(a))):a.view===lpVars.submenu.view.passes&&(t.html(a.label),a.view=lpVars.submenu.view.standard,s.timePassesKpiTab.show(),s.standardKpiTab.hide(),a.label=i,t.attr("data",JSON.stringify(a)))},P=function(t){var a=s.timepassDiagram;e.each(s.timepassDiagram,function(n){var l=e(a[n]).data("id");_(e(a[n])),f("time_passes_expiry",t,l).done(function(t){var l=parseInt(lpVars.maxYValue,10),o=Math.max(l,10)+4,r=e(a[n]),d=[{color:s.colorBorder,lineWidth:1,xaxis:{from:3.5,to:3.5}},{color:s.colorBorder,lineWidth:1,xaxis:{from:11.5,to:11.5}},{color:s.colorBorder,lineWidth:2,xaxis:{from:.25,to:3.25},yaxis:{from:o-2,to:o-2}},{color:s.colorBorder,lineWidth:2,xaxis:{from:3.75,to:11.25},yaxis:{from:o-2,to:o-2}}],p={xaxis:{ticks:t.data.x},yaxis:{show:!1,max:o,tickFormatter:function(e){return parseInt(e,10)}},grid:{markings:d}},c=[{data:t.data.y,bars:{align:"center",barWidth:.4,fillColor:s.colorBackgroundLaterpay,horizontal:!1,lineWidth:0,show:!0}}];p=e.extend(!0,{},i,p);var u,m=e.plot(r,c,p),v=0,g=0;for(u=0;5>u;u++)v+=t.data.y[u][1];for(u=5;13>u;u++)g+=t.data.y[u][1];var f=m.pointOffset({x:3.5,y:0}),_='<div class="lp_time-pass-diagram__label" style="left:'+(f.left-30)+'px; top:2px;">'+lpVars.i18n.endingIn+"<br>< 1 "+lpVars.i18n.month+"</div>";r.append(_);var h=m.pointOffset({x:11.5,y:0}),x='<div class="lp_time-pass-diagram__label" style="left:'+(h.left-30)+'px; top:2px;">'+lpVars.i18n.endingIn+"<br>< 3 "+lpVars.i18n.months+"</div>";r.append(x);var b=m.pointOffset({x:13,y:0}),w=m.getCanvas().getContext("2d");b.left+=8,b.top+=4,w.beginPath(),w.moveTo(b.left,b.top),w.lineTo(b.left,b.top-7),w.lineTo(b.left+6,b.top-3.5),w.lineTo(b.left,b.top),w.fillStyle=s.colorBorder,w.fill();var y='<div class="lp_time-pass-diagram__label" style="left:'+(b.left+10)+"px; top:"+b.top+'px;">'+lpVars.i18n.weeksLeft+"</div>";r.append(y);var I=m.pointOffset({x:1.5,y:o-2}),D='<div class="lp_time-pass-diagram__sum" style="left:'+(I.left-30)+"px; top:"+(I.top-14)+'px;">'+v+"</div>";r.append(D);var L=m.pointOffset({x:7.5,y:o-2}),C='<div class="lp_time-pass-diagram__sum" style="left:'+(L.left-30)+"px; top:"+(L.top-14)+'px;">'+g+"</div>";r.append(C)}).always(function(){h(e(a[n]))})})},K=function(){l(),k()};K()}t()})}(jQuery);