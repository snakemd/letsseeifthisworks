(self.webpackChunk=self.webpackChunk||[]).push([[906],{6564:(t,e,s)=>{"use strict";s.d(e,{Z:()=>f}),s(8010),s(2327),s(9217);const i={methods:{sortName:function(t){return _.orderBy(t.books,(function(t){if(t.name)return t.name}),t.direction)}}},r={methods:{sortIsbns:function(t){return _.orderBy(t.books,(function(e){if(!e.isbns)return null;if("isbn10"===t.sortKey){var s=_.find(e.isbns,["type","ISBN_10"]);return s?""+s.identifier:null}if("isbn13"===t.sortKey){var i=_.find(e.isbns,["type","ISBN_13"]);return i?""+i.identifier:null}}),t.direction)}}};s(1013);const o={methods:{sortTitle:function(t){var e=this;return _.orderBy(t.books,(function(s){var i=s[t.sortKey];return i?"title"===t.sortKey?s.title||s.titleShort:"grid"===e.$store.state.sticky.viewMode&&_.isArray(i)&&_.find(i,"name")?_.map(i,"name").join(", "):i:null}),t.direction)}}},n={methods:{sortAmount:function(t){return _.orderBy(t.books,(function(t){if(t.books)return t.books.length}),t.direction)}}};var a=s(3223);const c={mixins:[a.Z],methods:{sortLength:function(t){var e=this;return _.orderBy(t.books,(function(t){return t.length?e.timeStringToSeconds(t.length):0}),t.direction)}}},l={methods:{sortRatings:function(t){return _.orderBy(t.books,(function(e){if(e[t.sortKey]){var s=e[t.sortKey];return Number(s)}return 0}),t.direction)}}};s(266);const u={mixins:[a.Z],methods:{sortProgress:function(t){var e=this;return _.orderBy(t.books,[function(t){if(t.progress){if("finished"===t.progress.toLowerCase().trim())return 100;if(t.length){var s=e.timeStringToSeconds(t.progress),i=e.timeStringToSeconds(t.length);return(s=i-s)/i*100}return 0}return 0},function(t){return t.length?!e.timeStringToSeconds(t.length):0}],t.direction)}}},h={methods:{sortDateAdded:function(t){return _.orderBy(t.books,(function(t){return t.added}),t.direction)}}},m={methods:{sortFavorites:function(t){return _.orderBy(t.books,(function(t){return t.favorite}),t.direction)}}};s(7471),s(2482);const d={methods:{sortBookNumbers:function(t){var e=this.$route.params.series,s=_.find(this.$store.state.library.series,{asin:e});return _.orderBy(t.books,(function(t){return s.books.indexOf(t.asin)}),t.direction)},sortBookNumbersOriginal:function(t){return _.orderBy(t.books,(function(t){if(_.find(t.series,"bookNumbers")){var e=_.filter(t.series,"bookNumbers");e=_.map(e,"bookNumbers"),e=_.flatten(e),_.isEmpty(e)&&(e=null);var s=_.isArray(e)?e[0]:e,i="string"==typeof s?s.split("-"):[s];return parseFloat(i[0])}return _.find(t.series)?-1:-2}),t.direction)}}},p={methods:{sortReleaseDate:function(t){return _.orderBy(t.books,(function(t){return t.releaseDate?new Date(t.releaseDate.split("-")):new Date("1800","01","01")}),t.direction)}}};s(911);const f={mixins:[i,r,o,n,c,l,u,h,m,d,p,{methods:{sortStringNameProp:function(t){var e=t.sortKey.replace(".name","");return _.orderBy(t.books,(function(t){return t[e]?t[e][0].name.toLowerCase():null}),t.direction)}}}],methods:{filterBooks:function(t){var e=_.filter(this.$store.state.listRenderingOpts.filter,{type:"filterExtras",active:!0}),s=_.filter(this.$store.state.listRenderingOpts.filter,{type:"filter",active:!1});return e||s?_.filter(t,(function(t){return function(t){var i=function(e){if(!e.array.length)return 1===e.key?r:e.prevResult;var s=!1;return _.each(e.array,(function(e){if(s=!!e.condition(t))return!1})),1===e.key?s:2===e.key&&e.prevResult?!s:void 0},r=!1;return r=i({key:1,array:e}),r=i({key:2,array:s,prevResult:r})}(t)})):t},filterBooks2:function(t){var e=_.filter(this.$store.state.listRenderingOpts.filter,{type:"filter",active:!0});return e?_.filter(t,(function(t){var s=!1;return _.each(e,(function(e){if(s=e.condition(t))return!1})),s})):t},sortBooks:function(t){var e=_.find(this.$store.state.listRenderingOpts.sort,(function(t){return!("randomize"!==t.key||!t.active)||!!t.current||void 0}));if(e){var s={books:t,direction:e.active?"desc":"asc",sortKey:e.key};switch(s.sortKey){case"randomize":t=_.shuffle(t);break;case"bookNumbers":s.missingNumber=0,t=this.sortBookNumbersOriginal(s);break;case"seriesOrder":s.missingNumber=0,t=this.sortBookNumbers(s);break;case"added":t=this.sortDateAdded(s);break;case"releaseDate":t=this.sortReleaseDate(s);break;case"authors.name":case"narrators.name":case"publishers.name":t=this.sortStringNameProp(s);break;case"title":case"series":case"format":case"categories":case"isNew":case"language":case"fromPlusCatalog":case"unavailable":case"favorite":case"downloaded":case"storePageMissing":case"storePageChanged":t=this.sortTitle(s);break;case"length":t=this.sortLength(s);break;case"myRating":case"rating":case"ratings":t=this.sortRatings(s);break;case"progress":t=this.sortProgress(s);break;case"favorite":t=this.sortFavorites(s);break;case"name":t=this.sortName(s);break;case"amount":t=this.sortAmount(s);break;case"isbn10":case"isbn13":t=this.sortIsbns(s)}}return t}}}},3223:(t,e,s)=>{"use strict";s.d(e,{Z:()=>i}),s(1203);const i={methods:{timeStringToSeconds:function(t){var e=t.match(/[0-9]+m|[0-9]+ min/),s=t.match(/\d+/g),i={},r=function(t){return 60*+t*60},o=function(t){return 60*+t};return 2===s.length?(i.h=s[0],i.m=s[1],i.numbers=r(i.h)+o(i.m)):e?(i.m=s[0],i.numbers=o(i.m)):(i.h=s[0],i.numbers=r(i.h)),i.numbers}}}},906:(t,e,s)=>{"use strict";s.d(e,{Z:()=>c}),s(1418),s(3238),s(5769),s(4078),s(9217),s(8010),s(3526),s(1013),s(1203),s(911);var i=s(2631);var r=s(810);const o=(0,r.Z)({name:"searchIcons",props:["listName"],data:function(){return{items:[{name:"scope",on:!0,active:!1,icon:"microscope",tooltip:"Change the search scope for more accurate results"},{name:"filter",on:!0,active:!1,icon:"filter",tooltip:"Filter books"},{name:"sort",on:!0,active:!1,icon:"sort",tooltip:"Sort books"}]}},methods:{openSearchOptions:function(t,e){var s=this.listName;this.$emit("update:listName",!1),s!==t.name&&this.$nextTick((function(){this.$emit("update:listName",t.name)}))}}},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"icons"},[s("div",{directives:[{name:"tippy",rawName:"v-tippy"}],staticClass:"icon-wrap",attrs:{content:"Visible books"}},[s("div",{staticClass:"book-in-selection"},[s("div",{staticClass:"inner-wrap"},[t._t("default")],2)])]),t._v(" "),t._l(t.items,(function(e){return s("div",{directives:[{name:"tippy",rawName:"v-tippy"}],key:e.name,staticClass:"icon-wrap",class:{disabled:!e.on},attrs:{content:e.tooltip},on:{click:function(s){return t.openSearchOptions(e,s)}}},["scope"!==e.name&&t.$store.state.listRenderingOpts[e.name].length>0||"scope"===e.name&&t.$store.state.listRenderingOpts[e.name].length>1?s("div",{staticClass:"search-opt-btn",class:{active:t.listName===e.name},attrs:{"data-option":e.name}},[s("font-awesome",{attrs:{fas:"",icon:e.icon}})],1):t._e()])}))],2)}),[],!1,null,"33c21a18",null).exports,n={name:"searchOptions",props:["listName"],components:{listItem:s(8129).Z},data:function(){return{css:{arrow:{left:"0px"},options:{right:"0px"}}}},created:function(){this.optionsList=this.$store.state.listRenderingOpts[this.listName]},mounted:function(){this.repositionSearchOptions(),this.listName&&document.addEventListener("mouseup",this.outsideClick)},beforeDestroy:function(){document.removeEventListener("mouseup",this.outsideClick)},watch:{optionsList:function(){this.repositionSearchOptions()}},methods:{outsideClick:function(t){if(this.listName){var e=t.target.closest("#search-options"),s=t.target.closest(".search-opt-btn");e||s||this.$emit("update:listName",!1)}},repositionSearchOptions:function(){this.$nextTick((function(){var t={};t.el=this.$refs.options,t.width=t.el.offsetWidth,t.left=t.el.offsetLeft;var e={};e.el=document.querySelector("#ale-search > .icons"),e.width=e.el.offsetWidth;var s={};s.el=document.querySelector(".search-opt-btn.active").parentNode,s.width=s.el.offsetWidth,s.left=s.el.offsetLeft,s.middle=e.width-(s.left+s.width/2),t.position=s.middle-t.width/2;var i=s.el.getBoundingClientRect().left+s.width/2+t.width/2-window.innerWidth,r=i>0?i+20:0;this.css.options.right=t.position+r+"px",this.css.arrow.left=t.width/2-10+r+"px"}))}}},a={name:"aleBookdetails",components:{searchIcons:o,searchOptions:(0,r.Z)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"options",class:t.listName+"-options",style:t.css.options,attrs:{id:"search-options"}},[s("div",{staticClass:"search-options-inner-wrap"},[s("div",{staticClass:"search-opts-arrow",style:t.css.arrow}),t._v(" "),s("ul",t._l(t.optionsList,(function(e,i){return"grid"===t.$store.state.sticky.viewMode||"sortValues"!==e.key?s("li",{key:e.key,staticClass:"search-option",class:{extras:e.type&&e.type.match(/extra/i),divider:"divider"===e.type}},["divider"!==e.type?s("listItem",{attrs:{label:e.label,item:e,index:i,currentList:t.optionsList,listName:t.listName}}):t._e()],1):t._e()})),0)])])}),[],!1,null,null,null).exports,viewModeSwitcher:function(){return s.e(961).then(s.bind(s,9947))}},mixins:[s(6564).Z],props:["collectionSource"],data:function(){return{enableZoomTimer:null,fuse:null,fuseOptions:{keys:["title"],location:0,distance:400,threshold:.25,shouldSort:!0,includeScore:!1,includeMatches:!1,useExtendedSearch:!0},listName:!1,waypointOpts:{rootMargin:"-37px"},fixedSearch:!1}},created:function(){this.$store.commit("prop",{key:"collectionSource",value:this.collectionSource});var t=this.$route.query.sort||this.$route.query.filter||this.$route.query.filterExtras,e=_.get(this.$store.state,this.collectionSource);if(t?((this.$route.query.filter||this.$route.query.filterExtras)&&(e=this.filterBooks(e)),this.$route.query.sort&&(e=this.sortBooks(e)),this.$store.commit("prop",{key:"mutatingCollection",value:e})):this.$store.commit("prop",{key:"mutatingCollection",value:this.sortBooks(this.filterBooks(e))}),this.$route.query.search){var s=decodeURIComponent(this.$route.query.search);this.$store.commit("prop",{key:"searchQuery",value:s}),this.fuseOptions.shouldSort=!1,this.search()}},mounted:function(){this.$root.$on("ios-auto-zoom-disable",this.iosAutozoomDisable),this.$refs.aleSearch.addEventListener("touchstart",this.iosAutozoomDisable),this.$root.$on("start-scope",this.scope),this.$root.$on("start-sort",this.sort),this.$root.$on("start-filter",this.filter),this.$root.$on("start-re-render",this.reRender),this.$root.$on("search-focus",this.focusOnSearch),this.$store.commit("prop",{key:"searchMounted",value:!0})},beforeDestroy:function(){this.$store.commit("prop",{key:"searchQuery",value:""}),this.$root.$off("ios-auto-zoom-disable",this.iosAutozoomDisable),this.$refs.aleSearch.removeEventListener("touchstart",this.iosAutozoomDisable),this.$root.$off("start-scope",this.scope),this.$root.$off("start-sort",this.sort),this.$root.$off("start-filter",this.filter),this.$root.$off("start-re-render",this.reRender),this.$root.$off("search-focus",this.focusOnSearch),this.$store.commit("prop",{key:"searchMounted",value:!1})},methods:{scope:function(){this.$root.$emit("book-clicked",{book:null}),this.$store.getters.searchIsActive&&this.search()},filter:function(){this.$root.$emit("book-clicked",{book:null}),this.$store.getters.searchIsActive?(this.$store.commit("prop",{key:"mutatingCollection",value:this.filterBooks(_.get(this.$store.state,this.collectionSource))}),this.search()):this.$store.commit("prop",{key:"mutatingCollection",value:this.sortBooks(this.filterBooks(_.get(this.$store.state,this.collectionSource)))})},sort:function(){this.$root.$emit("book-clicked",{book:null}),this.$store.commit("prop",{key:this.$store.getters.searchIsActive?"searchCollection":"mutatingCollection",value:this.sortBooks(this.$store.getters.collection)})},search:_.debounce((function(t,e){if(this.$root.$emit("book-clicked",{book:null}),t&&(this.fuseOptions.shouldSort=!0,this.$store.commit("prop",{key:"searchQuery",value:t.target.value}),this.$updateQuery({query:"search",value:encodeURIComponent(t.target.value)})),this.fuseOptions.shouldSort&&this.$store.commit("prop",{key:"searchSort",value:this.$store.getters.searchIsActive}),this.$store.getters.searchIsActive){var s=this.modifyQuery(this.$store.state.searchQuery);this.fuseOptions.keys=this.aliciaKeys,this.fuse=new i.Z(this.$store.state.mutatingCollection,this.fuseOptions);var r=this.fuse.search(s);r.length>0&&(r=_.map(r,(function(t){return t.item}))),this.$store.commit("prop",{key:"searchCollection",value:r})}else this.$store.commit("prop",{key:"searchCollection",value:[]})}),270,{leading:!1,trailing:!0}),searchEnterBlur:_.debounce((function(t){this.$refs.searchInput.blur()}),100,{leading:!1,trailing:!0}),restoreOptions:function(){updateListRenderingOpts()},focusOnSearch:function(){scroll({top:0}),this.$refs.searchInput.focus()},scrolling:_.throttle((function(t){!this.fixedSearch&&window.pageYOffset>44?this.fixedSearch=!0:this.fixedSearch&&window.pageYOffset<44&&(this.fixedSearch=!1)}),350),onWaypoint(t){var e=t.going;t.direction,e===this.$waypointMap.GOING_IN?this.fixedSearch=!1:this.fixedSearch=!0},modifyQuery:function(t){var e=t.match(/&/),s=t.match(/ ?and ?/);return e?t+"|"+t.replace("&","and"):s?t+"|"+t.replace("and","&"):t},iosAutozoomDisable:function(){if(document.querySelector(".is-ios")){var t=document.querySelector("head").querySelector("meta[name=viewport]");t.content="width=device-width, initial-scale=1.0, user-scalable=0",clearTimeout(this.enableZoomTimer),this.enableZoomTimer=setTimeout((function(){t.content="width=device-width, initial-scale=1.0, user-scalable=1"}),700)}}},computed:{aliciaKeys:function(){var t=_.filter(this.$store.state.listRenderingOpts.scope,["active",!0]);return _.map(t,(function(t){if(t.active)return t.key}))},placeholder:function(){var t;return"Search: "+(t=this.aliciaKeys,_.map(t,(function(t){return t.replace(".name","")})).join(", "))}}},c=(0,r.Z)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{ref:"searchWrap",class:{"search-fixed":t.fixedSearch},attrs:{id:"ale-search-wrap"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.listName,expression:"listName"}],attrs:{id:"search-dropdown-overlay"}}),t._v(" "),s("div",{ref:"aleSearch",attrs:{id:"ale-search"}},[s("div",{staticClass:"search-wrapper",on:{click:function(e){return t.$refs.searchInput.focus()}}},[s("input",{ref:"searchInput",attrs:{type:"search",placeholder:t.placeholder},domProps:{value:t.$store.state.searchQuery},on:{input:t.search,keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchEnterBlur(e)}}})]),t._v(" "),s("search-icons",{attrs:{"list-name":t.listName},on:{"update:listName":function(e){t.listName=e},"update:list-name":function(e){t.listName=e}}},[t._v(t._s(t.$store.getters.collection.length))]),t._v(" "),t.listName?s("search-options",{attrs:{"list-name":t.listName},on:{"update:listName":function(e){t.listName=e},"update:list-name":function(e){t.listName=e}}}):t._e()],1),t._v(" "),"all-series"!==t.$route.name&&t.$store.state.windowWidth>=450?s("view-mode-switcher"):t._e()],1)])}),[],!1,null,null,null).exports},8129:(t,e,s)=>{"use strict";s.d(e,{Z:()=>r}),s(5699),s(2327),s(8010);const i={name:"sorter",props:["label","currentList","listName","item","index","tippyTop"],data:function(){return{}},computed:{inputVmodel:{get:function(){return this.currentList[this.index].active},set:function(t){var e={listName:this.listName,index:this.index,active:t};this.currentList[this.index].group&&(e.group=!0),this.$store.commit("updateListRenderingOpts",e),this.saveOptions(t),"sortValues"===this.item.key&&this.$root.$emit("book-clicked",{book:null}),"scope"===this.listName?this.$root.$emit("start-scope"):"sort"!==this.listName&&("randomize"!==this.item.key||this.$store.getters.searchIsActive)||"sortValues"===this.item.key?"filter"===this.listName&&this.$root.$emit("start-filter"):(this.$store.commit("prop",{key:"searchSort",value:!1}),this.$root.$emit("start-sort"))}},isActiveSortItem:function(){if("sort"===this.listName){if(!this.$store.state.searchSort)return _.findIndex(this.currentList,"current")===this.index}else if("filter"===this.listName)return _.findIndex(this.currentList,{active:!0,type:"filterExtras"})===this.index}},methods:{filterAmounts:function(){var t=this,e=_.find(this.$store.state.listRenderingOpts.filter,{type:"filterExtras",active:!0});return"filter"===this.item.type?_.filter(_.get(t.$store.state,t.$store.state.collectionSource),(function(s){return(!e||e.condition(s))&&t.item.condition(s)})).length:_.filter(_.get(t.$store.state,t.$store.state.collectionSource),(function(e){return t.item.condition(e)})).length},saveOptions:function(t){"sortValues"===this.item.key?this.$updateQuery({query:this.item.key,value:t}):"sort"===this.item.type?(this.$updateQuery({query:this.item.type,value:this.item.key}),this.$updateQuery({query:"sortDir",value:t?"desc":"asc"})):"filter"===this.listName?("filter"===this.item.type&&this.$updateQuery({query:this.item.type,value:encodeURIComponent(this.$store.getters.filterKeys)}),"filterExtras"===this.item.type&&this.$updateQuery({query:this.item.type,value:encodeURIComponent(this.$store.getters.filterExtrasKeys)})):"scope"===this.listName&&this.$updateQuery({query:this.listName,value:encodeURIComponent(this.$store.getters.scopeKeys)})}}},r=(0,s(810).Z)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"sorter-button-wrapper"},[t.item?s("label",{directives:[{name:"tippy",rawName:"v-tippy",value:{placement:t.tippyTop?"top":"left",flipBehavior:t.tippyTop?["left","right","top","bottom"]:["top","bottom","left","right"]},expression:"{ placement: (tippyTop ? 'top' : 'left'), flipBehavior: (tippyTop ? ['left', 'right', 'top', 'bottom'] : ['top', 'bottom', 'left', 'right']) }"}],staticClass:"sorter-button",attrs:{content:!!t.item.tippy&&t.item.tippy}},[!1===t.label?s("span",{staticClass:"input-label",class:{active:t.isActiveSortItem}},[t._t("default")],2):t._e(),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.inputVmodel,expression:"inputVmodel"}],attrs:{type:"checkbox"},domProps:{value:t.index,checked:Array.isArray(t.inputVmodel)?t._i(t.inputVmodel,t.index)>-1:t.inputVmodel},on:{change:function(e){var s=t.inputVmodel,i=e.target,r=!!i.checked;if(Array.isArray(s)){var o=t.index,n=t._i(s,o);i.checked?n<0&&(t.inputVmodel=s.concat([o])):n>-1&&(t.inputVmodel=s.slice(0,n).concat(s.slice(n+1)))}else t.inputVmodel=r}}}),t._v(" "),"sort"===t.item.type?s("span",{staticClass:"sortbox",class:{active:t.isActiveSortItem}},[s("font-awesome",{attrs:{fas:"",icon:"sort-down"}}),t._v(" "),s("font-awesome",{attrs:{fas:"",icon:"sort-up"}})],1):"filterExtras"!==t.item.type||t.item.forceCheckbox?s("span",{staticClass:"checkbox"},[s("font-awesome",{attrs:{fas:"",icon:"square"}}),t._v(" "),s("font-awesome",{attrs:{fas:"",icon:"check"}})],1):s("span",{staticClass:"radiobutton"},[s("font-awesome",{attrs:{fas:"",icon:"circle"}}),t._v(" "),s("font-awesome",{attrs:{fas:"",icon:"circle"}})],1),t._v(" "),!1!==t.label?s("span",{staticClass:"input-label",class:{active:t.isActiveSortItem}},[t._v("\n      "+t._s(t.item.label||t.item.key.replace(".name",""))+"\n    ")]):t._e(),t._v(" "),"filter"===t.listName?s("span",{staticClass:"books-in-filter"},[t._v("\n      ("+t._s(t.filterAmounts())+")\n    ")]):t._e()]):t._e()])}),[],!1,null,"6948a2ad",null).exports}}]);