!function(a){a(function(){function o(){var o={timepassDiagram:a(".lp_js_timepassDiagram"),colorBackground:"#e3e3e3",colorBackgroundLaterpay:"#50c371",colorBorder:"#ccc",colorTextLighter:"#ababab"},t={legend:{show:!1},xaxis:{font:{color:o.colorTextLighter,lineHeight:18},show:!0},yaxis:{font:{color:o.colorTextLighter},min:0,reserveSpace:!0,ticks:5},series:{shadowSize:0},grid:{borderWidth:{top:0,right:0,bottom:1,left:0},borderColor:o.colorBorder,tickColor:"rgba(247,247,247,0)"}},e=function(o){var t,e={action:"laterpay_get_time_passes_data",_wpnonce:lpVars.nonces.time_passes,pass_id:o};return t=a.ajax({url:lpVars.ajaxUrl,async:!0,method:"POST",data:e}),t.done(function(a){a&&!a.success&&setMessage(a.message,a.success)}),t},r=function(e,r){var i=parseInt(lpVars.maxYValue,10),s=Math.max(i,10)+4,l=[{color:o.colorBorder,lineWidth:1,xaxis:{from:3.5,to:3.5}},{color:o.colorBorder,lineWidth:1,xaxis:{from:11.5,to:11.5}},{color:o.colorBorder,lineWidth:2,xaxis:{from:.25,to:3.25},yaxis:{from:s-2,to:s-2}},{color:o.colorBorder,lineWidth:2,xaxis:{from:3.75,to:11.25},yaxis:{from:s-2,to:s-2}}],n={xaxis:{ticks:e.data.x},yaxis:{show:!1,max:s,tickFormatter:function(a){return parseInt(a,10)}},grid:{markings:l}},p=[{data:e.data.y,bars:{align:"center",barWidth:.4,fillColor:o.colorBackgroundLaterpay,horizontal:!1,lineWidth:0,show:!0}}];n=a.extend(!0,{},t,n);var d,c=a.plot(r,p,n),f=0,x=0;for(d=0;5>d;d++)f+=e.data.y[d][1];for(d=5;13>d;d++)x+=e.data.y[d][1];var m=c.pointOffset({x:3.5,y:0}),g='<div class="lp_time-pass-diagram__label" style="left:'+(m.left-30)+'px; top:2px;">'+lpVars.i18n.endingIn+"<br>< 1 "+lpVars.i18n.month+"</div>";r.append(g);var v=c.pointOffset({x:11.5,y:0}),h='<div class="lp_time-pass-diagram__label" style="left:'+(v.left-30)+'px; top:2px;">'+lpVars.i18n.endingIn+"<br>< 3 "+lpVars.i18n.months+"</div>";r.append(h);var u=c.pointOffset({x:13,y:0}),y=c.getCanvas().getContext("2d");u.left+=8,u.top+=4,y.beginPath(),y.moveTo(u.left,u.top),y.lineTo(u.left,u.top-7),y.lineTo(u.left+6,u.top-3.5),y.lineTo(u.left,u.top),y.fillStyle=o.colorBorder,y.fill();var _='<div class="lp_time-pass-diagram__label" style="left:'+(u.left+10)+"px; top:"+(u.top-2)+'px;">'+lpVars.i18n.weeksLeft+"</div>";r.append(_);var b=c.pointOffset({x:1.5,y:s-2}),B='<div class="lp_time-pass-diagram__sum" style="left:'+(b.left-30)+"px; top:"+(b.top-14)+'px;">'+f+"</div>";r.append(B);var k=c.pointOffset({x:7.5,y:s-2}),w='<div class="lp_time-pass-diagram__sum" style="left:'+(k.left-30)+"px; top:"+(k.top-14)+'px;">'+x+"</div>";r.append(w)},i=function(){var t=o.timepassDiagram;a.each(o.timepassDiagram,function(o){var i=a(t[o]),s=i.data("id");showLoadingIndicator(i),e(s).done(function(a){r(a,i)}).always(function(){removeLoadingIndicator(i)})})},s=function(){i()};s()}o()})}(jQuery);
//# sourceMappingURL=maps/laterpay-backend-dashboard-timepasses.js.map