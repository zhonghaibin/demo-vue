"use strict";(self["webpackChunkmm_web"]=self["webpackChunkmm_web"]||[]).push([[193],{83368:function(t,e,a){a.d(e,{Z:function(){return d}});var s=function(){var t=this,e=t._self._c;return e("content",[e("Select",{style:{width:t.width+"px"},attrs:{clearable:"",filterable:"",loading:t.loading,transfer:""},on:{"on-clear":t.clearValue,"on-select":t.selectValue},model:{value:t.valueData,callback:function(e){t.valueData=e},expression:"valueData"}},[e("div",{attrs:{slot:"empty"},slot:"empty"},[t._v("未找到数据")]),t._l(t.list,(function(a,s){return e("Option",{key:s,attrs:{value:a.id}},[t._v(" "+t._s(a.name)+" ")])}))],2)],1)},i=[],r=a(48803),n={props:{value:{type:[String,Number,Array],default:""},search:{type:Object,default:()=>({p:1,page:1e3,search:""})},width:{type:Number,default:200}},data:function(){return{loading:!1,list:[],valueData:"",searchData:{}}},watch:{},created(){this.valueData=this.value,this.getList()},methods:{selectValue(t){this.$emit("input",t.value),this.$emit("on-select",t.value)},clearValue(){this.$emit("input",""),this.$emit("on-select","")},async getList(){this.loading=!0;const{data:t}=await(0,r.IU)(this.searchData);this.loading=!1,this.list=t.list}}},o=n,c=a(1001),l=(0,c.Z)(o,s,i,!1,null,"91b31ca6",null),d=l.exports},95193:function(t,e,a){a.r(e),a.d(e,{default:function(){return Y}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"box"},[e("div",{staticClass:"column"},[t._v("目标管理")]),e("Tabs",{attrs:{type:"card"},on:{"on-click":t.handleTabClick},model:{value:t.tab_index,callback:function(e){t.tab_index=e},expression:"tab_index"}},t._l(t.tab_list,(function(a){return e("TabPane",{key:a.id,attrs:{label:a.name,name:a.name}},[t.current(a,"门店业绩目标")?e("StoreTargetList"):t._e(),t.current(a,"员工业绩目标")?e("StaffTargetList"):t._e()],1)})),1)],1)},i=[],r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"StoreTargetList"},[e("div",{staticClass:"search"},[e("div",{staticClass:"left"},[e("div",{staticClass:"box"},[e("span",{staticClass:"text"},[t._v("时间")]),e("DatePicker",{staticStyle:{width:"200px"},attrs:{format:"yyyy-MM-dd",placeholder:"开始时间-结束时间",transfer:"",type:"datetimerange","value-format":"yyyy-MM-dd"},on:{"on-change":t.changeDatePicker,"on-clear":t.clearDate,"on-open-change":t.changeDatePicker}})],1),e("div",{staticClass:"box"},[e("span",{staticClass:"text"},[t._v("门店")]),e("SelectShop",{on:{"on-select":t.search},model:{value:t.searchData.sid,callback:function(e){t.$set(t.searchData,"sid",e)},expression:"searchData.sid"}})],1)]),t._m(0)]),e("div",{ref:"content",staticClass:"content"},[e("div",{staticClass:"left"},[t._m(1),e("div",{staticClass:"cell"},[e("div",{staticClass:"title"},[t._v("年度累计完成业绩:")]),e("div",{staticClass:"money"},[t._v("￥43000000.00")]),e("div",{staticClass:"circle"},[e("i-circle",{attrs:{percent:80,"stroke-color":"#f46b53","stroke-width":10,"trail-width":10}},[e("span",{staticStyle:{"font-size":"24px"}},[t._v("80%")])])],1)])]),e("div",{staticClass:"right"},[e("div",{staticClass:"list"},[e("div",{staticClass:"cell"},[e("div",{staticClass:"title"},[e("div",{staticClass:"l"},[t._v("2021/01")]),e("div",{staticClass:"r"},[e("Checkbox")],1)]),e("div",{staticClass:"box"},[t._m(2),e("div",{staticClass:"data",staticStyle:{display:"block"}},[t._m(3),e("div",{staticClass:"row"},[e("Progress",{attrs:{percent:25,"stroke-color":"#bb2465","stroke-width":6}})],1),t._m(4),t._m(5),t._m(6),e("div",{staticClass:"row"},[e("div",{staticClass:"l",staticStyle:{flex:"1"}}),e("div",{staticClass:"r",staticStyle:{color:"#1298e6",cursor:"pointer"},on:{click:function(e){return t.showModal("目标详情","StoreTargetDetails")}}},[t._v(" 详情> ")])])]),e("div",{staticClass:"set",staticStyle:{display:"none"}},[t._m(7),e("div",{staticClass:"foot"},[e("div",{staticClass:"add-bt",staticStyle:{margin:"0 auto"},on:{click:function(e){return t.showModal("设置目标","StoreTarget")}}},[t._v(" 设置 ")])])])])]),e("div",{staticClass:"cell"},[e("div",{staticClass:"title"},[e("div",{staticClass:"l"},[t._v("2021/01")]),e("div",{staticClass:"r"},[e("Checkbox")],1)]),e("div",{staticClass:"box"},[t._m(8),e("div",{staticClass:"data",staticStyle:{display:"none"}},[t._m(9),e("div",{staticClass:"row"},[e("Progress",{attrs:{percent:25,"stroke-color":"#bb2465","stroke-width":6}})],1),t._m(10),t._m(11),t._m(12),e("div",{staticClass:"row"},[e("div",{staticClass:"l",staticStyle:{flex:"1"}}),e("div",{staticClass:"r",staticStyle:{color:"#1298e6",cursor:"pointer"},on:{click:function(e){return t.showModal("目标详情","StoreTargetDetails")}}},[t._v(" 详情> ")])])]),e("div",{staticClass:"set",staticStyle:{display:"block"}},[t._m(13),e("div",{staticClass:"foot"},[e("div",{staticClass:"add-bt",staticStyle:{margin:"0 auto"},on:{click:function(e){return t.showModal("设置目标","StoreTarget")}}},[t._v(" 设置 ")])])])])])])])]),e("Modal",{attrs:{"footer-hide":!0,title:t.modal.title,width:t.modal.width},model:{value:t.modal.show,callback:function(e){t.$set(t.modal,"show",e)},expression:"modal.show"}},[t.modalShow("StoreTarget")?e("StoreTarget"):t._e(),t.modalShow("StoreTargetDetails")?e("StoreTargetDetails"):t._e()],1)],1)},n=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"right"},[e("div",{staticClass:"add-bt"},[t._v("批量清空")]),e("div",{staticClass:"add-bt"},[t._v("导出")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"cell"},[e("div",{staticClass:"title"},[t._v("年度目标(月目标累加):")]),e("div",{staticClass:"money"},[t._v("￥43000000.00")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},[e("div",{staticClass:"l color"},[t._v("本月门店业绩目标")]),e("div",{staticClass:"r"})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},[e("div",{staticClass:"l"},[t._v("¥100,000.00")]),e("div",{staticClass:"r"})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},[e("div",{staticClass:"l color"},[t._v("已完成:")]),e("div",{staticClass:"r color1"},[t._v("¥60,000.00")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},[e("div",{staticClass:"l color"},[t._v("完成率:")]),e("div",{staticClass:"r color1"},[t._v("60%")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},[e("div",{staticClass:"l color"},[t._v("应完成:")]),e("div",{staticClass:"r color1"},[t._v("100%")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},[e("div",{staticClass:"l color1"},[t._v("未设置目标")]),e("div",{staticClass:"r"})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},[e("div",{staticClass:"l color"},[t._v("本月门店业绩目标")]),e("div",{staticClass:"r"})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},[e("div",{staticClass:"l"},[t._v("¥100,000.00")]),e("div",{staticClass:"r"})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},[e("div",{staticClass:"l color"},[t._v("已完成:")]),e("div",{staticClass:"r color1"},[t._v("¥60,000.00")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},[e("div",{staticClass:"l color"},[t._v("完成率:")]),e("div",{staticClass:"r color1"},[t._v("60%")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},[e("div",{staticClass:"l color"},[t._v("应完成:")]),e("div",{staticClass:"r color1"},[t._v("100%")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},[e("div",{staticClass:"l color1"},[t._v("未设置目标")]),e("div",{staticClass:"r"})])}],o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"StoreTarget"},[e("div",{staticClass:"content"},[t._m(0),e("div",{staticClass:"row"},[t._m(1),e("div",{staticClass:"right"},[e("Input",{staticStyle:{width:"200px"}},[e("span",{attrs:{slot:"append"},slot:"append"},[t._v("元")])])],1)]),e("div",{staticClass:"box"},[e("div",{staticClass:"header"},[t._v("目标分解")]),t._l(t.list,(function(a,s){return e("div",{key:s,staticClass:"cell"},[e("div",{staticClass:"row"},[e("div",{staticClass:"left"},[e("div",[t._v("阶段"+t._s(s+1)+",周期：")])]),e("div",{staticClass:"right"},[e("DatePicker",{staticStyle:{width:"200px"},attrs:{format:"yyyy-MM-dd",placeholder:"开始时间-结束时间",transfer:"",type:"datetimerange","value-format":"yyyy-MM-dd"},on:{"on-change":t.changeDatePicker,"on-clear":t.clearDate,"on-open-change":t.changeDatePicker}})],1),e("div",{staticClass:"right"},[e("Icon",0===s?{staticClass:"dot",attrs:{type:"md-add"},on:{click:t.add}}:{staticClass:"dot",attrs:{type:"ios-trash"},on:{click:function(e){return t.delRow(s)}}})],1)]),e("div",{staticClass:"row"},[e("div",{staticClass:"left"},[e("div",[t._v("阶段"+t._s(s+1)+",目标：")])]),e("div",{staticClass:"right"},[e("Input",{staticStyle:{width:"200px"}},[e("span",{attrs:{slot:"append"},slot:"append"},[t._v("%")])])],1),t._m(2,!0)])])}))],2)]),e("div",{staticClass:"footer"},[e("div",{staticClass:"bt",on:{click:t.save}},[t._v("保存")])])])},c=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},[e("div",{staticClass:"left"},[e("div",[t._v("门店：")])]),e("div",{staticClass:"right"},[t._v("惠城总店")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"left"},[e("div",[t._v("2021年1月业绩目标：")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"right"},[e("span",{staticClass:"color"},[t._v("目标：5000")])])}],l={name:"StoreTarget",data:function(){return{list:[{}],cityList:[{value:"New York",label:"New York"}],model1:"",formData:{vid:""},searchData:{start:"",end:""},loading:!1}},created(){},methods:{clearDate(){this.searchData.start="",this.searchData.end=""},changeDatePicker:function(t){t&&(this.searchData.start=t[0],this.searchData.end=t[1])},delRow(t){this.list.splice(t,1)},add(){this.list.push({})},save(){this.formData.data=this.list}}},d=l,u=a(1001),v=(0,u.Z)(d,o,c,!1,null,"72f11492",null),h=v.exports,f=function(){var t=this,e=t._self._c;return e("div",{staticClass:"StoreTargetDetails"},[e("div",{staticClass:"content"},[t._m(0),t._m(1),e("div",{staticClass:"box"},[e("div",{staticClass:"header"},[t._v("目标分解")]),t._l(t.list,(function(a,s){return e("div",{key:s,staticClass:"cell"},[e("div",{staticClass:"row"},[e("div",{staticClass:"left"},[e("div",[t._v("阶段"+t._s(s+1)+",周期：")])]),e("div",{staticClass:"right"},[t._v("2022-5-1-2022-5-15")])]),e("div",{staticClass:"row"},[e("div",{staticClass:"left"},[e("div",[t._v("阶段"+t._s(s+1)+",目标：")])]),t._m(2,!0)]),t._m(3,!0),t._m(4,!0)])}))],2)]),e("div",{staticClass:"footer"},[e("div",{staticClass:"bt",on:{click:t.save}},[t._v("保存")])])])},m=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},[e("div",{staticClass:"left"},[e("div",[t._v("门店：")])]),e("div",{staticClass:"right"},[t._v("惠城总店")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},[e("div",{staticClass:"left"},[e("div",[t._v("2021年1月业绩目标：")])]),e("div",{staticClass:"right"},[t._v("10000元")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"right"},[t._v(" 50% "),e("span",{staticClass:"color"},[t._v("目标：50000.00")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},[e("div",{staticClass:"left"},[e("div",[t._v("已完成：")])]),e("div",{staticClass:"right"},[t._v("50%")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},[e("div",{staticClass:"left"},[e("div",[t._v("完成率：")])]),e("div",{staticClass:"right"},[t._v("50%")])])}],_={name:"StoreTargetDetails",data:function(){return{list:[{},{}],cityList:[{value:"New York",label:"New York"}],model1:"",formData:{vid:""},searchData:{start:"",end:""},loading:!1}},created(){},methods:{save(){this.formData.data=this.list}}},p=_,C=(0,u.Z)(p,f,m,!1,null,"df20fc8a",null),g=C.exports,w=a(83368),y={name:"StoreTargetList",components:{SelectShop:w.Z,StoreTarget:h,StoreTargetDetails:g},data:function(){return{modal:{show:!1,title:"",type:!1,width:600},searchData:{sid:"",start:"",end:""}}},computed:{modalShow(){return t=>this.modal.type===t&&this.modal.show}},activated(){},created(){},mounted(){this.setHeight(),window.onresize=()=>{this.setHeight()}},methods:{setHeight(){let t=window.innerHeight-220;this.$refs.content.style.minHeight=t+"px"},clearDate(){this.searchData.start="",this.searchData.end="",this.search()},changeDatePicker:function(t){t&&(this.searchData.start=t[0],this.searchData.end=t[1])},currentPage(t){this.searchData.p=t,this.getList()},pageSizeChange(t){this.searchData.page=t,this.search()},showModal(t,e,a={}){console.log(a),this.modal.show=!0,this.modal.title=t,this.modal.type=e},search(){},save(){}}},b=y,D=(0,u.Z)(b,r,n,!1,null,"7402efc5",null),k=D.exports,Z=function(){var t=this,e=t._self._c;return e("div",{staticClass:"StaffTargetList"},[e("div",{staticClass:"search"},[e("div",{staticClass:"left"},[e("div",{staticClass:"box"},[e("span",{staticClass:"text"},[t._v("时间")]),e("DatePicker",{staticStyle:{width:"200px"},attrs:{format:"yyyy-MM-dd",placeholder:"开始时间-结束时间",transfer:"",type:"datetimerange","value-format":"yyyy-MM-dd"},on:{"on-change":t.changeDatePicker,"on-clear":t.clearDate,"on-open-change":t.changeDatePicker}})],1),e("div",{staticClass:"box"},[e("span",{staticClass:"text"},[t._v("门店")]),e("SelectShop",{on:{"on-select":t.search},model:{value:t.searchData.sid,callback:function(e){t.$set(t.searchData,"sid",e)},expression:"searchData.sid"}})],1)]),e("div",{staticClass:"right"},[e("div",{staticClass:"add-bt"},[t._v("批量清空")]),e("div",{staticClass:"add-bt",on:{click:t.exportDataEvent}},[t._v("导出")]),e("div",{staticClass:"add-bt"},[t._v("设置显示员工")])])]),e("div",{ref:"content",staticClass:"content"},[e("div",{staticClass:"left"},[t._m(0),t._m(1),e("div",{staticClass:"cell"},[e("div",{staticClass:"title"},[t._v("已设员工累计完成业绩:")]),e("div",{staticClass:"money"},[t._v("￥43000000.00")]),e("div",{staticClass:"circle"},[e("i-circle",{attrs:{percent:80,"stroke-color":"#f46b53","stroke-width":10,"trail-width":10}},[e("span",{staticStyle:{"font-size":"24px"}},[t._v("80%")])])],1)])]),e("div",{staticClass:"right"},[e("div",{staticClass:"list"},[e("vxe-table",{ref:"xTable",attrs:{"cell-style":{textAlign:"center"},"column-config":{resizable:!0},data:t.tableData,"header-align":"center",height:t.tableHeight,loading:t.loading,"row-config":{isHover:!0},size:"small"}},[t._l(t.tableColumns,(function(t,a){return e("vxe-column",{key:a+t.key,attrs:{field:t.key,fixed:t.fixed,"min-width":t.width,"show-overflow":"title",title:t.title}})})),e("vxe-column",{attrs:{title:"操作",width:"120"}},[[e("span",{staticClass:"bt",on:{click:function(e){return t.showModal("编辑目标","StaffTarget")}}},[t._v(" 编辑目标 ")]),e("br"),e("span",{staticClass:"bt"},[t._v("详情")])]],2)],2),e("div",{staticClass:"page"},[e("Page",{attrs:{current:t.searchData.p,"page-size":t.searchData.page,"show-elevator":"","show-sizer":"",size:"small",total:t.searchData.count},on:{"on-change":t.currentPage,"on-page-size-change":t.pageSizeChange}})],1)],1)])]),e("Modal",{attrs:{"footer-hide":!0,title:t.modal.title,width:t.modal.width},model:{value:t.modal.show,callback:function(e){t.$set(t.modal,"show",e)},expression:"modal.show"}},[t.modalShow("StaffTarget")?e("StaffTarget"):t._e()],1)],1)},N=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"cell"},[e("div",{staticClass:"title"},[t._v("门店月度业绩目标:")]),e("div",{staticClass:"money"},[t._v("￥43000000.00")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"cell"},[e("div",{staticClass:"title"},[t._v("已设员工业绩目标合计:")]),e("div",{staticClass:"money"},[t._v("￥43000000.00")])])}],x=function(){var t=this,e=t._self._c;return e("div",{staticClass:"StaffTarget"},[e("div",{staticClass:"content"},[t._m(0),t._m(1),e("div",{staticClass:"box"},[e("div",{staticClass:"header"},[t._v("目标分解")]),t._l(t.list,(function(a,s){return e("div",{key:s,staticClass:"cell"},[e("div",{staticClass:"row"},[e("div",{staticClass:"left"},[e("div",[t._v("阶段"+t._s(s+1)+",周期：")])]),e("div",{staticClass:"right"},[e("DatePicker",{staticStyle:{width:"200px"},attrs:{format:"yyyy-MM-dd",placeholder:"开始时间-结束时间",transfer:"",type:"datetimerange","value-format":"yyyy-MM-dd"},on:{"on-change":t.changeDatePicker,"on-clear":t.clearDate,"on-open-change":t.changeDatePicker}})],1),e("div",{staticClass:"right"},[e("Icon",0===s?{staticClass:"dot",attrs:{type:"md-add"},on:{click:t.add}}:{staticClass:"dot",attrs:{type:"ios-trash"},on:{click:function(e){return t.delRow(s)}}})],1)]),e("div",{staticClass:"row"},[e("div",{staticClass:"left"},[e("div",[t._v("阶段"+t._s(s+1)+",目标：")])]),e("div",{staticClass:"right"},[e("Input",{staticStyle:{width:"200px"}},[e("span",{attrs:{slot:"append"},slot:"append"},[t._v("%")])])],1),t._m(2,!0)])])}))],2)]),e("div",{staticClass:"footer"},[e("div",{staticClass:"bt",on:{click:t.save}},[t._v("保存")])])])},S=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},[e("div",{staticClass:"left"},[e("div",[t._v("门店：")])]),e("div",{staticClass:"right"},[t._v("惠城总店")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},[e("div",{staticClass:"left"},[e("div",[t._v("员工：")])]),e("div",{staticClass:"right"},[t._v("郭贝贝")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"right"},[e("span",{staticClass:"color"},[t._v("目标：5000")])])}],T={name:"StaffTarget",data:function(){return{list:[{}],cityList:[{value:"New York",label:"New York"}],model1:"",formData:{vid:""},searchData:{start:"",end:""},loading:!1}},created(){},methods:{clearDate(){this.searchData.start="",this.searchData.end=""},changeDatePicker:function(t){t&&(this.searchData.start=t[0],this.searchData.end=t[1])},delRow(t){this.list.splice(t,1)},add(){this.list.push({})},save(){this.formData.data=this.list}}},M=T,P=(0,u.Z)(M,x,S,!1,null,"b1fd9a56",null),L=P.exports,H={name:"StaffTargetList",components:{SelectShop:w.Z,StaffTarget:L},data:function(){return{loading:!1,tableHeight:0,tableData:[{0:"测试测试"}],tableColumns:[{title:"员工",key:"0"},{title:"业绩目标",key:"1"},{title:"已完成业绩",key:"2"},{title:"业绩完成进度",key:"3"},{title:"当前应完成",key:"4"},{title:"排名",key:"5"}],modal:{show:!1,title:"",type:!1,width:600},searchData:{sid:"",start:"",end:""}}},computed:{modalShow(){return t=>this.modal.type===t&&this.modal.show}},activated(){},created(){},mounted(){this.setHeight(),window.onresize=()=>{this.setHeight()}},methods:{setHeight(){this.tableHeight=window.innerHeight-300},clearDate(){this.searchData.start="",this.searchData.end="",this.search()},changeDatePicker:function(t){t&&(this.searchData.start=t[0],this.searchData.end=t[1])},currentPage(t){this.searchData.p=t,this.getList()},pageSizeChange(t){this.searchData.page=t,this.search()},showModal(t,e,a={}){console.log(a),this.modal.show=!0,this.modal.title=t,this.modal.type=e},search(){},save(){},exportDataEvent(){setTimeout((()=>{const t=[];this.$refs.xTable.exportData({filename:"",type:"csv",isHeader:!0,isFooter:!0,data:t})}),100)}}},R=H,z=(0,u.Z)(R,Z,N,!1,null,"28e97b07",null),V=z.exports,$={name:"Target",components:{StoreTargetList:k,StaffTargetList:V},data:function(){return{tab_index:"门店业绩目标",tab_list:[{name:"门店业绩目标",id:1},{name:"门店耗卡目标",id:2},{name:"门店客流目标",id:3},{name:"门店客次目标",id:4},{name:"门店客数目标",id:5},{name:"员工业绩目标",id:6},{name:"员工耗卡目标",id:7},{name:"员工客流目标",id:8},{name:"员工客次目标",id:9},{name:"员工客数目标",id:10}]}},computed:{current(){return(t,e)=>e===t.name&&this.tab_index===e}},methods:{handleTabClick(t){this.tab_index=t}}},I=$,W=(0,u.Z)(I,s,i,!1,null,"7b4a6d23",null),Y=W.exports},48803:function(t,e,a){a.d(e,{$R:function(){return at},C5:function(){return w},CL:function(){return $},D1:function(){return u},Ei:function(){return J},Es:function(){return E},F7:function(){return o},FS:function(){return ht},GH:function(){return rt},HW:function(){return i},I2:function(){return R},IF:function(){return O},IU:function(){return K},JF:function(){return et},KW:function(){return d},L5:function(){return ot},Li:function(){return _},NJ:function(){return p},NM:function(){return G},OI:function(){return T},OO:function(){return z},PR:function(){return X},Sy:function(){return F},T9:function(){return q},Tw:function(){return f},Ue:function(){return r},W0:function(){return c},W8:function(){return v},WU:function(){return vt},XM:function(){return W},ZT:function(){return j},_S:function(){return lt},aG:function(){return nt},am:function(){return h},bE:function(){return N},be:function(){return tt},by:function(){return st},d$:function(){return B},d1:function(){return V},d9:function(){return Y},dS:function(){return m},dZ:function(){return k},dh:function(){return I},es:function(){return y},iH:function(){return Z},jn:function(){return U},kh:function(){return Q},kt:function(){return A},mG:function(){return C},o8:function(){return g},oP:function(){return L},oX:function(){return l},od:function(){return D},oh:function(){return H},p2:function(){return b},qM:function(){return ut},rP:function(){return it},rb:function(){return dt},sN:function(){return ct},tR:function(){return x},x5:function(){return n},y0:function(){return P},y4:function(){return S},yT:function(){return M}});var s=a(7852);function i(t){return(0,s.Z)({url:"/Newuser/vip/type",method:"get",params:t})}function r(t){return(0,s.Z)({url:"/Newuser/vip/source",method:"get",params:t})}function n(t){return(0,s.Z)({url:"/Newuser/vip/index",method:"get",params:t})}function o(t){return(0,s.Z)({url:"/Newuser/vip/index_total",method:"get",params:t})}function c(t){return(0,s.Z)({url:"/Newuser/vip/details",method:"get",params:t})}function l(t){return(0,s.Z)({url:"/Newuser/vip/visit_list",method:"get",params:t})}function d(t){return(0,s.Z)({url:"/Newuser/WxMrke/index2",method:"get",params:t})}function u(t){return(0,s.Z)({url:"/Newuser/combo/vip_card",method:"get",params:t})}function v(t){return(0,s.Z)({url:"/Newuser/combo/vip_card_details",method:"get",params:t})}function h(t){return(0,s.Z)({url:"/Newuser/combo/order_info",method:"get",params:t})}function f(t){return(0,s.Z)({url:"/Newuser/combo/vip_card_remarks",method:"get",params:t})}function m(t){return(0,s.Z)({url:"/Newuser/combo/vip_card_remarks_add",method:"post",data:t})}function _(t){return(0,s.Z)({url:"/Newuser/combo/vip_card_remarks_del",method:"post",data:t})}function p(t){return(0,s.Z)({url:"/Newuser/vip/tags",method:"get",params:t})}function C(t){return(0,s.Z)({url:"/Newuser/vip/add_tags",method:"post",data:t})}function g(t){return(0,s.Z)({url:"/Newuser/setting/tags_type_list",method:"get",params:t})}function w(t){return(0,s.Z)({url:"/Newuser/vip/info",method:"get",params:t})}function y(t){return(0,s.Z)({url:"/Newuser/goods/deposit",method:"get",params:t})}function b(t){return(0,s.Z)({url:"/Newuser/goods/deposit_log",method:"get",params:t})}function D(t){return(0,s.Z)({url:"/Newuser/goods/index",method:"get",params:t})}function k(t){return(0,s.Z)({url:"/Newuser/goods/deposit_add",method:"post",data:t})}function Z(t){return(0,s.Z)({url:"/Newuser/goods/deposit_act",method:"post",data:t})}function N(t){return(0,s.Z)({url:"Newuser/vip/files",method:"get",params:t})}function x(t){return(0,s.Z)({url:"Newuser/vip/files_act",method:"post",data:t})}function S(t){return(0,s.Z)({url:"Newuser/vip/files_del",method:"get",params:t})}function T(t){return(0,s.Z)({url:"Newuser/Vip/from_boss_total",method:"get",params:t})}function M(t){return(0,s.Z)({url:"Newuser/Vip/from_boss",method:"get",params:t})}function P(t){return(0,s.Z)({url:"Newuser/vip/lower_del",method:"post",data:t})}function L(t){return(0,s.Z)({url:"Newuser/rec/commission_total",method:"get",params:t})}function H(t){return(0,s.Z)({url:"Newuser/rec/commission",method:"get",params:t})}function R(t){return(0,s.Z)({url:"Newuser/vip/visit_act",method:"post",data:t})}function z(t){return(0,s.Z)({url:"Newuser/vip/visit_del",method:"post",data:t})}function V(t){return(0,s.Z)({url:"Newuser/staff/index",method:"get",params:t})}function $(t){return(0,s.Z)({url:"Newuser/VipRecord/warning_list",method:"get",params:t})}function I(t){return(0,s.Z)({url:"Newuser/VipRecord/warning_act",method:"post",data:t})}function W(t){return(0,s.Z)({url:"Newuser/VipRecord/warning_cancel",method:"post",data:t})}function Y(t){return(0,s.Z)({url:"Newuser/VipRecord/warning_status",method:"post",data:t})}function E(t){return(0,s.Z)({url:"Newuser/rec/capital",method:"get",params:t})}function F(t){return(0,s.Z)({url:"Newuser/vip/give_list",method:"get",params:t})}function O(t){return(0,s.Z)({url:"Newuser/integral/index",method:"get",params:t})}function U(t){return(0,s.Z)({url:"Newuser/VipRecord/add",method:"post",data:t})}function G(t){return(0,s.Z)({url:"Newuser/VipRecord/index",method:"get",params:t})}function j(t){return(0,s.Z)({url:"Newuser/VipRecord/del",method:"post",data:t})}function A(t){return(0,s.Z)({url:"Newuser/gift/index",method:"get",params:t})}function J(t){return(0,s.Z)({url:"Newuser/integral/buy",method:"post",data:t})}function X(t){return(0,s.Z)({url:"Newuser/integral/edit",method:"post",data:t})}function q(t){return(0,s.Z)({url:"Newuser/vip/transfer_shop",method:"post",data:t})}function K(t){return(0,s.Z)({url:"Newuser/main/shop_list",method:"get",params:t})}function B(t){return(0,s.Z)({url:"/Newuser/vip/add",method:"post",data:t})}function Q(t){return(0,s.Z)({url:"/Newuser/vip/edit",method:"post",data:t})}function tt(t){return(0,s.Z)({url:"Newuser/vip/check_tel",method:"get",params:t})}function et(t){return(0,s.Z)({url:"/Newuser/vip/update_vip_id",method:"post",data:t})}function at(t){return(0,s.Z)({url:"Newuser/Cashier/warning",method:"get",params:t})}function st(t){return(0,s.Z)({url:"Newuser/remind/log1",method:"get",params:t})}function it(t){return(0,s.Z)({url:"Newuser/service/type",method:"get",params:t})}function rt(t){return(0,s.Z)({url:"/Newuser/Remind/index",method:"get",params:t})}function nt(t){return(0,s.Z)({url:"/Newuser/remind/act_log",method:"get",params:t})}function ot(t){return(0,s.Z)({url:"/Newuser/remind/log_details",method:"get",params:t})}function ct(t){return(0,s.Z)({url:"Newuser/remind/act",method:"post",data:t})}function lt(t){return(0,s.Z)({url:"Newuser/Remind/edit",method:"post",data:t})}function dt(t){return(0,s.Z)({url:"Newuser/Remind/del",method:"post",data:t})}function ut(t){return(0,s.Z)({url:"Newuser/service/index",method:"get",params:t})}function vt(t){return(0,s.Z)({url:"Newuser/staff/staff_log",method:"get",params:t})}function ht(t){return(0,s.Z)({url:"Newuser/vip/update_type",method:"post",data:t})}}}]);
//# sourceMappingURL=193.8d421c91.js.map