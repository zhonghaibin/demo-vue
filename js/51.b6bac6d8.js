"use strict";(self["webpackChunkmm_web"]=self["webpackChunkmm_web"]||[]).push([[51],{69293:function(t,a,e){e.r(a),e.d(a,{default:function(){return B}});var s=function(){var t=this,a=t._self._c;return a("div",{staticClass:"box"},[a("div",{staticClass:"column"},[t._v("商品入库")]),a("Tabs",{attrs:{type:"card"},on:{"on-click":t.handleTabClick},model:{value:t.tab_index,callback:function(a){t.tab_index=a},expression:"tab_index"}},t._l(t.tab_list,(function(e){return a("TabPane",{key:e.id,attrs:{label:e.name,name:e.name}},[t.current(e,"入库明细")?a("PutStockDetailsList"):t._e(),t.current(e,"入库单")?a("PutStockList"):t._e()],1)})),1)],1)},i=[],l=function(){var t=this,a=t._self._c;return a("div",{staticClass:"box"},[a("div",{staticClass:"search"},[a("div",{staticClass:"left"},[a("div",{staticClass:"box"},[a("span",{staticClass:"text"},[t._v("门店")]),a("SelectShop",{on:{"on-select":t.search},model:{value:t.searchData.sid,callback:function(a){t.$set(t.searchData,"sid",a)},expression:"searchData.sid"}})],1),a("div",{staticClass:"box"},[a("span",{staticClass:"text"},[t._v("入库类型")]),a("SelectStockInType",{on:{"on-select":t.search},model:{value:t.searchData.sid,callback:function(a){t.$set(t.searchData,"sid",a)},expression:"searchData.sid"}})],1),a("div",{staticClass:"box"},[a("span",{staticClass:"text"},[t._v("入库时间")]),a("DatePicker",{staticStyle:{width:"200px"},attrs:{format:"yyyy-MM-dd",placeholder:"开始时间-结束时间",transfer:"",type:"datetimerange","value-format":"yyyy-MM-dd"},on:{"on-change":t.changeDatePicker,"on-clear":t.clearDate,"on-open-change":t.changeDatePicker}})],1),a("div",{staticClass:"box"},[a("Input",{staticStyle:{width:"250px"},attrs:{clearable:"","enter-button":"",placeholder:"搜索商品名称/编号",search:""},on:{"on-clear":t.search,"on-search":t.search},model:{value:t.searchData.search,callback:function(a){t.$set(t.searchData,"search",a)},expression:"searchData.search"}})],1)]),a("div",{staticClass:"right"},[a("div",{staticClass:"add-bt"},[t._v("导出")]),a("div",{staticClass:"add-bt"},[t._v("导入入库")]),a("div",{staticClass:"add-bt",on:{click:function(a){return t.showModal("新建入库单","PutStock")}}},[t._v(" 新建入库单 ")])])]),a("div",{staticClass:"list"},[a("vxe-table",{ref:"xTable",attrs:{"cell-style":{textAlign:"center"},"column-config":{resizable:!0},data:t.tableData,"header-align":"center",height:t.tableHeight,loading:t.loading,"row-config":{isHover:!0},size:"small"}},[t._l(t.tableColumns,(function(t,e){return a("vxe-column",{key:e+t.key,attrs:{field:t.key,fixed:t.fixed,"min-width":t.width,"show-overflow":"title",title:t.title}})})),a("vxe-column",{attrs:{title:"操作",width:"120"}},[[a("span",{staticClass:"bt"},[t._v("查看详情")]),a("br"),a("span",{staticClass:"bt"},[t._v("入库撤销")])]],2)],2),a("div",{staticClass:"page"},[a("Page",{attrs:{current:t.searchData.p,"page-size":t.searchData.page,"show-elevator":"","show-sizer":"",size:"small",total:t.searchData.count,transfer:""},on:{"on-change":t.currentPage,"on-page-size-change":t.pageSizeChange}})],1)],1),a("Modal",{attrs:{"footer-hide":!0,scrollable:t.modal.scrollable,styles:t.modal.styles,title:t.modal.title,width:t.modal.width},model:{value:t.modal.show,callback:function(a){t.$set(t.modal,"show",a)},expression:"modal.show"}},[t.modalShow("PutStock")?a("PutStock"):t._e()],1)],1)},c=[],o=function(){var t=this,a=t._self._c;return a("div",{staticClass:"box"},[a("div",{staticClass:"search"},[a("div",{staticClass:"left"},[a("div",{staticClass:"box"},[a("span",{staticClass:"text"},[t._v("仓库/门店")]),a("SelectShop",{on:{"on-select":t.search},model:{value:t.searchData.sid,callback:function(a){t.$set(t.searchData,"sid",a)},expression:"searchData.sid"}})],1),a("div",{staticClass:"box"},[a("span",{staticClass:"text"},[t._v("入库时间")]),a("DatePicker",{staticStyle:{width:"180px"},attrs:{format:"yyyy-MM-dd",placeholder:"开始时间-结束时间",transfer:"",type:"datetimerange","value-format":"yyyy-MM-dd"},on:{"on-change":t.changeDatePicker,"on-clear":t.clearDate,"on-open-change":t.changeDatePicker}})],1),a("div",{staticClass:"box"},[a("span",{staticClass:"text"},[t._v("入库类型")]),a("SelectStockInType",{on:{"on-select":t.search},model:{value:t.searchData.ssid,callback:function(a){t.$set(t.searchData,"ssid",a)},expression:"searchData.ssid"}})],1),a("div",{staticClass:"box"},[a("span",{staticClass:"text"},[t._v("供应商")]),a("SelectSupplier",{on:{"on-select":t.search},model:{value:t.searchData.ssid,callback:function(a){t.$set(t.searchData,"ssid",a)},expression:"searchData.ssid"}})],1),a("div",{staticClass:"box"},[a("span",{staticClass:"text"},[t._v("经办人")]),a("SelectStaff",{model:{value:t.searchData.staff_id,callback:function(a){t.$set(t.searchData,"staff_id",a)},expression:"searchData.staff_id"}})],1)]),a("div",{staticClass:"right"},[a("div",{staticClass:"add-bt",on:{click:function(a){return t.showModal("选择入库商品","GoodsList")}}},[t._v(" 选择入库商品 ")])])]),a("div",{staticClass:"list"},[a("table",[t._m(0),a("tbody",[a("tr",[a("td",[t._v("0")]),a("td",[t._v("￥0")]),a("td",[t._v("￥0")]),a("td",[t._v("0")]),a("td",[a("Input",{attrs:{placeholder:""}})],1),a("td",[t._v("0")]),a("td",[t._v("0")]),a("td",[t._v("0")]),a("td",[t._v("0")]),a("td",[t._v("0")]),a("td",[a("Input",{attrs:{placeholder:""}})],1),t._m(1)]),t._m(2),a("tr",[a("td",{attrs:{colspan:"2"}},[t._v("制单人:郭贝贝")]),a("td",{attrs:{colspan:"10"}},[t._v(" 备注: "),a("Input",{staticStyle:{width:"200px"},attrs:{placeholder:""}})],1)]),t._m(3)])])]),a("Modal",{attrs:{"footer-hide":!0,scrollable:t.modal.scrollable,styles:t.modal.styles,title:t.modal.title,width:t.modal.width},model:{value:t.modal.show,callback:function(a){t.$set(t.modal,"show",a)},expression:"modal.show"}},[t.modalShow("GoodsList")?a("GoodsList"):t._e()],1)],1)},r=[function(){var t=this,a=t._self._c;return a("thead",[a("tr",[a("td",{staticClass:"color"},[t._v("商品编号")]),a("td",{staticClass:"color"},[t._v("商品名称")]),a("td",{staticClass:"color"},[t._v("单位")]),a("td",{staticClass:"color"},[t._v("当前库存")]),a("td",{staticClass:"color",staticStyle:{width:"120px"}},[t._v("入库数量")]),a("td",{staticClass:"color"},[t._v("成本价")]),a("td",{staticClass:"color"},[t._v("成本总额")]),a("td",{staticClass:"color"},[t._v("生产日期")]),a("td",{staticClass:"color"},[t._v("保质期（月）")]),a("td",{staticClass:"color"},[t._v("批号")]),a("td",{staticClass:"color",staticStyle:{width:"140px"}},[t._v("备注")]),a("td",{staticClass:"color"},[t._v("操作")])])])},function(){var t=this,a=t._self._c;return a("td",[a("div",{staticClass:"bt"},[t._v("删除")])])},function(){var t=this,a=t._self._c;return a("tr",[a("td",[t._v("合计")]),a("td"),a("td"),a("td"),a("td"),a("td"),a("td"),a("td"),a("td"),a("td",[t._v("2")]),a("td"),a("td")])},function(){var t=this,a=t._self._c;return a("tr",[a("td"),a("td"),a("td"),a("td"),a("td"),a("td"),a("td"),a("td"),a("td"),a("td",{attrs:{colspan:"3"}},[a("div",{staticClass:"add-bt",staticStyle:{width:"100px",float:"right"}},[t._v("提交")])])])}],n=e(77245),d=e(83368),h=e(25476),u=function(){var t=this,a=t._self._c;return a("content",[a("Select",{style:{width:t.width+"px"},attrs:{clearable:"",filterable:"",loading:t.loading,transfer:""},on:{"on-clear":t.clearValue,"on-select":t.selectValue},model:{value:t.valueData,callback:function(a){t.valueData=a},expression:"valueData"}},[a("div",{attrs:{slot:"empty"},slot:"empty"},[t._v("未找到数据")]),t._l(t.list,(function(e,s){return a("Option",{key:s,attrs:{value:e.id}},[t._v(" "+t._s(e.name)+" ")])}))],2)],1)},v=[],p={props:{value:{type:[String,Number,Array],default:""},width:{type:Number,default:200}},data:function(){return{loading:!1,list:[{id:1,name:"供应商"}],valueData:"",searchData:{}}},watch:{},created(){this.valueData=this.value},methods:{selectValue(t){this.$emit("input",t.value),this.$emit("on-select",t.value)},clearValue(){this.$emit("input",""),this.$emit("on-select","")}}},m=p,f=e(1001),g=(0,f.Z)(m,u,v,!1,null,"68eac2a6",null),_=g.exports,b=function(){var t=this,a=t._self._c;return a("content",[a("Select",{style:{width:t.width+"px"},attrs:{clearable:"",filterable:"",loading:t.loading,transfer:""},on:{"on-clear":t.clearValue,"on-select":t.selectValue},model:{value:t.valueData,callback:function(a){t.valueData=a},expression:"valueData"}},[a("div",{attrs:{slot:"empty"},slot:"empty"},[t._v("未找到数据")]),t._l(t.list,(function(e,s){return a("Option",{key:s,attrs:{value:e.id}},[t._v(" "+t._s(e.name)+" ")])}))],2)],1)},y=[],D={props:{value:{type:[String,Number,Array],default:""},width:{type:Number,default:200}},data:function(){return{loading:!1,list:[{id:1,name:"入库类型"}],valueData:"",searchData:{}}},watch:{},created(){this.valueData=this.value},methods:{selectValue(t){this.$emit("input",t.value),this.$emit("on-select",t.value)},clearValue(){this.$emit("input",""),this.$emit("on-select","")}}},k=D,C=(0,f.Z)(k,b,y,!1,null,"78a753e2",null),w=C.exports,x={name:"PutStock",components:{SelectStockInType:w,SelectSupplier:_,SelectStaff:h.Z,SelectShop:d.Z,GoodsList:n.Z},data:function(){return{modal:{show:!1,title:"",type:!1,width:1e3,scrollable:!0,styles:{top:"50px"}},list:[{info:1}],searchData:{sid:"",staff_id:"",ssid:"",search:"",start:"",end:""}}},computed:{modalShow(){return t=>this.modal.type===t&&this.modal.show}},activated(){},created(){},methods:{showModal(t,a,e={}){console.log(e),this.modal.show=!0,this.modal.title=t,this.modal.type=a,this.modal.width=window.innerWidth-300},clearDate(){this.searchData.start="",this.searchData.end="",this.search()},changeDatePicker:function(t){t&&(this.searchData.start=t[0],this.searchData.end=t[1]),this.search()},currentPage(t){this.searchData.p=t,this.getList()},pageSizeChange(t){this.searchData.page=t,this.search()},search(){this.searchData.p=1,this.getList()}}},S=x,P=(0,f.Z)(S,o,r,!1,null,"1aa04323",null),z=P.exports,H={name:"PutStockDetailsList",components:{SelectStockInType:w,SelectShop:d.Z,PutStock:z},data:function(){return{loading:!1,tableHeight:0,tableData:[{0:"测试测试"}],tableColumns:[{title:"入库单号",key:"0"},{title:"入库时间",key:"1"},{title:"入库仓",key:"2"},{title:"入库类型",key:"3"},{title:"商品分类",key:"4"},{title:"商品名称",key:"5"},{title:"商品编号",key:"6"},{title:"品牌",key:"7"},{title:"入库数量",key:"8"},{title:"生产日期",key:"9"},{title:"保质期",key:"10"},{title:"批号",key:"11"},{title:"制单人",key:"12"}],modal:{show:!1,title:"",type:!1,width:1e3,scrollable:!0,styles:{top:"50px"}},searchData:{sid:"",search:"",start:"",end:"",p:1,page:10,count:0}}},computed:{modalShow(){return t=>this.modal.type===t&&this.modal.show}},activated(){},created(){},mounted(){this.setHeight(),window.onresize=()=>{this.setHeight()}},methods:{setHeight(){this.tableHeight=window.innerHeight-266},showModal(t,a,e={}){console.log(e),this.modal.show=!0,this.modal.title=t,this.modal.type=a,this.modal.width=window.innerWidth-300},clearDate(){this.searchData.start="",this.searchData.end="",this.search()},changeDatePicker:function(t){t&&(this.searchData.start=t[0],this.searchData.end=t[1]),this.search()},currentPage(t){this.searchData.p=t,this.getList()},pageSizeChange(t){this.searchData.page=t,this.search()},search(){this.searchData.p=1,this.getList()},exportDataEvent(){setTimeout((()=>{const t=[];this.$refs.xTable.exportData({filename:"",type:"csv",isHeader:!0,isFooter:!0,data:t})}),100)}}},$=H,M=(0,f.Z)($,l,c,!1,null,"50c02778",null),L=M.exports,T=function(){var t=this,a=t._self._c;return a("div",{staticClass:"box"},[a("div",{staticClass:"search"},[a("div",{staticClass:"left"},[a("div",{staticClass:"box"},[a("span",{staticClass:"text"},[t._v("门店")]),a("SelectShop",{on:{"on-select":t.search},model:{value:t.searchData.sid,callback:function(a){t.$set(t.searchData,"sid",a)},expression:"searchData.sid"}})],1),a("div",{staticClass:"box"},[a("span",{staticClass:"text"},[t._v("入库类型")]),a("SelectStockInType",{on:{"on-select":t.search},model:{value:t.searchData.sid,callback:function(a){t.$set(t.searchData,"sid",a)},expression:"searchData.sid"}})],1),a("div",{staticClass:"box"},[a("span",{staticClass:"text"},[t._v("入库时间")]),a("DatePicker",{staticStyle:{width:"200px"},attrs:{format:"yyyy-MM-dd",placeholder:"开始时间-结束时间",transfer:"",type:"datetimerange","value-format":"yyyy-MM-dd"},on:{"on-change":t.changeDatePicker,"on-clear":t.clearDate,"on-open-change":t.changeDatePicker}})],1),a("div",{staticClass:"box"},[a("Input",{staticStyle:{width:"250px"},attrs:{clearable:"","enter-button":"",placeholder:"搜索商品名称/编号",search:""},on:{"on-clear":t.search,"on-search":t.search},model:{value:t.searchData.search,callback:function(a){t.$set(t.searchData,"search",a)},expression:"searchData.search"}})],1)]),a("div",{staticClass:"right"},[a("div",{staticClass:"add-bt",on:{click:t.exportDataEvent}},[t._v("导出")]),a("div",{staticClass:"add-bt"},[t._v("导入入库")]),a("div",{staticClass:"add-bt",on:{click:function(a){return t.showModal("新建入库单","PutStock")}}},[t._v(" 新建入库单 ")])])]),a("div",{staticClass:"list"},[a("vxe-table",{ref:"xTable",attrs:{"cell-style":{textAlign:"center"},"column-config":{resizable:!0},data:t.tableData,"header-align":"center",height:t.tableHeight,loading:t.loading,"row-config":{isHover:!0},size:"small"}},[t._l(t.tableColumns,(function(t,e){return a("vxe-column",{key:e+t.key,attrs:{field:t.key,fixed:t.fixed,"min-width":t.width,"show-overflow":"title",title:t.title}})})),a("vxe-column",{attrs:{title:"操作",width:"120"}},[[a("span",{staticClass:"bt",on:{click:function(a){return t.showModal("入库详情","PutStockDetails")}}},[t._v(" 查看详情 ")]),a("br"),a("span",{staticClass:"bt"},[t._v("入库撤销")])]],2)],2),a("div",{staticClass:"page"},[a("Page",{attrs:{current:t.searchData.p,"page-size":t.searchData.page,"show-elevator":"","show-sizer":"",size:"small",total:t.searchData.count,transfer:""},on:{"on-change":t.currentPage,"on-page-size-change":t.pageSizeChange}})],1)],1),a("Modal",{attrs:{"footer-hide":!0,scrollable:t.modal.scrollable,styles:t.modal.styles,title:t.modal.title,width:t.modal.width},model:{value:t.modal.show,callback:function(a){t.$set(t.modal,"show",a)},expression:"modal.show"}},[t.modalShow("PutStock")?a("PutStock"):t._e(),t.modalShow("PutStockDetails")?a("PutStockDetails"):t._e()],1)],1)},Z=[],I=function(){var t=this,a=t._self._c;return a("div",{staticClass:"PutStockDetails"},[t._m(0),a("div",{ref:"content",staticClass:"content"},[t._m(1),a("div",{staticClass:"list"},[a("vxe-table",{ref:"xTable",attrs:{"cell-style":{textAlign:"center"},"column-config":{resizable:!0},data:t.tableData,"header-align":"center",height:t.tableHeight,loading:t.loading,"row-config":{isHover:!0},size:"small"}},t._l(t.tableColumns,(function(t,e){return a("vxe-column",{key:e+t.key,attrs:{field:t.key,fixed:t.fixed,"min-width":t.width,"show-overflow":"title",title:t.title}})})),1),a("div",{staticClass:"page"},[a("Page",{attrs:{current:t.searchData.p,"page-size":t.searchData.page,size:"small",total:t.searchData.count,transfer:""},on:{"on-change":t.currentPage,"on-page-size-change":t.pageSizeChange}})],1)],1)]),t._m(2)])},V=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"header"},[a("div",{staticClass:"left"},[a("div",{staticClass:"cell"},[t._v("仓库/门店:惠城总店")]),a("div",{staticClass:"cell"},[t._v("入库单号: RK-2022052200001")]),a("div",{staticClass:"cell"},[t._v("入库类型:入库采购")]),a("div",{staticClass:"cell"},[t._v("经办人:郭贝贝")]),a("div",{staticClass:"cell"},[t._v("备注:")])]),a("div",{staticClass:"right"},[a("div",{staticClass:"add-bt"},[t._v("打印")])])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"list-top"},[a("div",{staticClass:"cell"},[t._v("共2款商品")]),a("div",{staticClass:"cell"},[t._v("合计: ¥1000.00")])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"footer"},[a("div",{staticClass:"cell"},[t._v("注:由采购单CG-2022052200001自动生成的入库单")])])}],A={name:"PutStockDetails",components:{},props:{},data:function(){return{loading:!1,tableHeight:0,tableData:[{0:"测试测试"}],tableColumns:[{title:"商品编号",key:"0"},{title:"商品名称",key:"1"},{title:"单位 ",key:"2"},{title:"成本价",key:"3"},{title:"入库数量",key:"4"},{title:"成本总价",key:"5"},{title:"生产日期",key:"6"},{title:"保质期 ",key:"7"},{title:"批号 ",key:"8"}],searchData:{sid:"",p:"",page:""}}},computed:{},activated(){},created(){},mounted(){this.setHeight()},methods:{currentPage(t){this.searchData.p=t,this.getList()},pageSizeChange(t){this.searchData.page=t,this.search()},search(){},save(){},setHeight(){}}},G=A,N=(0,f.Z)(G,I,V,!1,null,"3306d8c4",null),E=N.exports,O={name:"PutStockList",components:{PutStockDetails:E,SelectStockInType:w,SelectShop:d.Z,PutStock:z},data:function(){return{loading:!1,tableHeight:0,tableData:[{0:"测试测试"}],tableColumns:[{title:"入库单号",key:"0",width:"200px"},{title:"入库时间",key:"1"},{title:"入库仓",key:"2"},{title:"入库类型",key:"3"},{title:"制单人",key:"4"}],modal:{show:!1,title:"",type:!1,width:1e3,scrollable:!0,styles:{top:"50px"}},searchData:{sid:"",search:"",start:"",end:"",p:1,page:10,count:0}}},computed:{modalShow(){return t=>this.modal.type===t&&this.modal.show}},activated(){},created(){},mounted(){this.setHeight(),window.onresize=()=>{this.setHeight()}},methods:{setHeight(){this.tableHeight=window.innerHeight-266},showModal(t,a,e={}){console.log(e),this.modal.show=!0,this.modal.title=t,this.modal.type=a,this.modal.width=window.innerWidth-300},clearDate(){this.searchData.start="",this.searchData.end="",this.search()},changeDatePicker:function(t){t&&(this.searchData.start=t[0],this.searchData.end=t[1]),this.search()},currentPage(t){this.searchData.p=t,this.getList()},pageSizeChange(t){this.searchData.page=t,this.search()},search(){this.searchData.p=1,this.getList()},exportDataEvent(){setTimeout((()=>{const t=[];this.$refs.xTable.exportData({filename:"",type:"csv",isHeader:!0,isFooter:!0,data:t})}),100)}}},W=O,F=(0,f.Z)(W,T,Z,!1,null,"0a2d7a77",null),K=F.exports,R={name:"OutStorage",components:{PutStockDetailsList:L,PutStockList:K},data:function(){return{tab_index:"入库明细",tab_list:[{name:"入库明细",id:1},{name:"入库单",id:2}]}},computed:{current(){return(t,a)=>a===t.name&&this.tab_index===a}},methods:{handleTabClick(t){this.tab_index=t}}},j=R,q=(0,f.Z)(j,s,i,!1,null,"d0532f24",null),B=q.exports}}]);
//# sourceMappingURL=51.b6bac6d8.js.map