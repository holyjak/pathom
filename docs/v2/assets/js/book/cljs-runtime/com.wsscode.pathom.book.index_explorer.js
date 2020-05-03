goog.provide('com.wsscode.pathom.book.index_explorer');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('com.wsscode.common.async_cljs');
goog.require('com.wsscode.pathom.book.app_types');
goog.require('com.wsscode.pathom.book.interactive_parser');
goog.require('com.wsscode.pathom.connect');
goog.require('com.wsscode.pathom.core');
goog.require('com.wsscode.pathom.fulcro.network');
goog.require('com.wsscode.pathom.viz.index_explorer');
goog.require('fulcro.client');
goog.require('fulcro.client.data_fetch');
goog.require('fulcro.client.localized_dom');
goog.require('fulcro.client.mutations');
goog.require('fulcro.client.primitives');
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.book !== 'undefined') && (typeof com.wsscode.pathom.book.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.book.index_explorer.IndexExplorerWrapper !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.book.index_explorer.IndexExplorerWrapper = (function com$wsscode$pathom$book$index_explorer$IndexExplorerWrapper(){
var this__44802__auto__ = this;
React.Component.apply(this__44802__auto__,arguments);

if((!((this__44802__auto__.initLocalState == null)))){
this__44802__auto__.state = this__44802__auto__.initLocalState();
} else {
this__44802__auto__.state = ({});
}

return this__44802__auto__;
});

goog.object.extend(com.wsscode.pathom.book.index_explorer.IndexExplorerWrapper.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.book.index-explorer","IndexExplorerWrapper","com.wsscode.pathom.book.index-explorer/IndexExplorerWrapper",32361961),com.wsscode.pathom.book.index_explorer.IndexExplorerWrapper);

var x52493_52564 = com.wsscode.pathom.book.index_explorer.IndexExplorerWrapper.prototype;
x52493_52564.render = ((function (x52493_52564){
return (function (){
var this__43720__auto__ = this;
var this$ = this__43720__auto__;
var _STAR_reconciler_STAR__orig_val__52495 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__52496 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__52497 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__52498 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__52499 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__52500 = fulcro.client.primitives.get_reconciler(this__43720__auto__);
var _STAR_depth_STAR__temp_val__52501 = (fulcro.client.primitives.depth(this__43720__auto__) + (1));
var _STAR_shared_STAR__temp_val__52502 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__43720__auto__);
var _STAR_instrument_STAR__temp_val__52503 = fulcro.client.primitives.instrument(this__43720__auto__);
var _STAR_parent_STAR__temp_val__52504 = this__43720__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__52500;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__52501;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__52502;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__52503;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__52504;

try{var map__52505 = fulcro.client.primitives.props(this$);
var map__52505__$1 = (((((!((map__52505 == null))))?(((((map__52505.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52505.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52505):map__52505);
var root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52505__$1,new cljs.core.Keyword("ui","root","ui/root",-448656785));
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container",".container",-1441208944),(com.wsscode.pathom.viz.index_explorer.index_explorer.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.viz.index_explorer.index_explorer.cljs$core$IFn$_invoke$arity$1(root) : com.wsscode.pathom.viz.index_explorer.index_explorer.call(null,root))], 0));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__52499;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__52498;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__52497;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__52496;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__52495;
}});})(x52493_52564))
;


com.wsscode.pathom.book.index_explorer.IndexExplorerWrapper.prototype.constructor = com.wsscode.pathom.book.index_explorer.IndexExplorerWrapper;

com.wsscode.pathom.book.index_explorer.IndexExplorerWrapper.prototype.constructor.displayName = "com.wsscode.pathom.book.index-explorer/IndexExplorerWrapper";

com.wsscode.pathom.book.index_explorer.IndexExplorerWrapper.prototype.fulcro$isComponent = true;

var x52508_52565 = com.wsscode.pathom.book.index_explorer.IndexExplorerWrapper;
x52508_52565.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x52508_52565.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x52508_52565){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),"800px",new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null)], null);
});})(x52508_52565))
;

x52508_52565.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x52508_52565){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x52508_52565))
;

x52508_52565.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x52508_52565.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x52508_52565){
return (function (this$,_){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","root","ui/root",-448656785),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),"singleton"], null)], null);
});})(x52508_52565))
;

x52508_52565.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x52508_52565.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x52508_52565){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","root","ui/root",-448656785),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.IndexExplorer)], null)], null);
});})(x52508_52565))
;


var x52510_52566 = com.wsscode.pathom.book.index_explorer.IndexExplorerWrapper.prototype;
x52510_52566.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x52510_52566.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x52510_52566){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),"800px",new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null)], null);
});})(x52510_52566))
;

x52510_52566.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x52510_52566){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x52510_52566))
;

x52510_52566.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x52510_52566.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x52510_52566){
return (function (this$,_){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","root","ui/root",-448656785),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),"singleton"], null)], null);
});})(x52510_52566))
;

x52510_52566.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x52510_52566.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x52510_52566){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","root","ui/root",-448656785),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.IndexExplorer)], null)], null);
});})(x52510_52566))
;


com.wsscode.pathom.book.index_explorer.IndexExplorerWrapper.cljs$lang$type = true;

com.wsscode.pathom.book.index_explorer.IndexExplorerWrapper.cljs$lang$ctorStr = "com.wsscode.pathom.book.index-explorer/IndexExplorerWrapper";

com.wsscode.pathom.book.index_explorer.IndexExplorerWrapper.cljs$lang$ctorPrWriter = (function (this__44805__auto__,writer__44806__auto__,opt__44807__auto__){
return cljs.core._write(writer__44806__auto__,"com.wsscode.pathom.book.index-explorer/IndexExplorerWrapper");
});
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.book !== 'undefined') && (typeof com.wsscode.pathom.book.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.book.index_explorer.AttributeGraphPanelWrapper !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.book.index_explorer.AttributeGraphPanelWrapper = (function com$wsscode$pathom$book$index_explorer$AttributeGraphPanelWrapper(){
var this__44802__auto__ = this;
React.Component.apply(this__44802__auto__,arguments);

if((!((this__44802__auto__.initLocalState == null)))){
this__44802__auto__.state = this__44802__auto__.initLocalState();
} else {
this__44802__auto__.state = ({});
}

return this__44802__auto__;
});

goog.object.extend(com.wsscode.pathom.book.index_explorer.AttributeGraphPanelWrapper.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.book.index-explorer","AttributeGraphPanelWrapper","com.wsscode.pathom.book.index-explorer/AttributeGraphPanelWrapper",-167480038),com.wsscode.pathom.book.index_explorer.AttributeGraphPanelWrapper);

var x52514_52567 = com.wsscode.pathom.book.index_explorer.AttributeGraphPanelWrapper.prototype;
x52514_52567.render = ((function (x52514_52567){
return (function (){
var this__43720__auto__ = this;
var this$ = this__43720__auto__;
var _STAR_reconciler_STAR__orig_val__52516 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__52517 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__52518 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__52519 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__52520 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__52521 = fulcro.client.primitives.get_reconciler(this__43720__auto__);
var _STAR_depth_STAR__temp_val__52522 = (fulcro.client.primitives.depth(this__43720__auto__) + (1));
var _STAR_shared_STAR__temp_val__52523 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__43720__auto__);
var _STAR_instrument_STAR__temp_val__52524 = fulcro.client.primitives.instrument(this__43720__auto__);
var _STAR_parent_STAR__temp_val__52525 = this__43720__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__52521;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__52522;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__52523;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__52524;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__52525;

try{var map__52527 = fulcro.client.primitives.props(this$);
var map__52527__$1 = (((((!((map__52527 == null))))?(((((map__52527.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52527.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52527):map__52527);
var root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52527__$1,new cljs.core.Keyword("ui","root","ui/root",-448656785));
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52527__$1,new cljs.core.Keyword("com.wsscode.pathom.book.index-explorer","index","com.wsscode.pathom.book.index-explorer/index",-1441726190));
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container",".container",-1441208944),(com.wsscode.pathom.viz.index_explorer.attribute_graph_panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_graph_panel.cljs$core$IFn$_invoke$arity$2(root,index) : com.wsscode.pathom.viz.index_explorer.attribute_graph_panel.call(null,root,index))], 0));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__52520;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__52519;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__52518;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__52517;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__52516;
}});})(x52514_52567))
;


com.wsscode.pathom.book.index_explorer.AttributeGraphPanelWrapper.prototype.constructor = com.wsscode.pathom.book.index_explorer.AttributeGraphPanelWrapper;

com.wsscode.pathom.book.index_explorer.AttributeGraphPanelWrapper.prototype.constructor.displayName = "com.wsscode.pathom.book.index-explorer/AttributeGraphPanelWrapper";

com.wsscode.pathom.book.index_explorer.AttributeGraphPanelWrapper.prototype.fulcro$isComponent = true;

var x52529_52568 = com.wsscode.pathom.book.index_explorer.AttributeGraphPanelWrapper;
x52529_52568.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x52529_52568.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x52529_52568){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),cljs.core.PersistentArrayMap.EMPTY], null)], null);
});})(x52529_52568))
;

x52529_52568.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x52529_52568){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x52529_52568))
;

x52529_52568.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x52529_52568.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x52529_52568){
return (function (this$,p__52530){
var map__52531 = p__52530;
var map__52531__$1 = (((((!((map__52531 == null))))?(((((map__52531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52531.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52531):map__52531);
var data = map__52531__$1;
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52531__$1,new cljs.core.Keyword("com.wsscode.pathom.book.index-explorer","index","com.wsscode.pathom.book.index-explorer/index",-1441726190));
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ui","root","ui/root",-448656785),data,new cljs.core.Keyword("com.wsscode.pathom.book.index-explorer","index","com.wsscode.pathom.book.index-explorer/index",-1441726190),index], null);
});})(x52529_52568))
;

x52529_52568.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x52529_52568.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x52529_52568){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","root","ui/root",-448656785),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.index-explorer","index","com.wsscode.pathom.book.index-explorer/index",-1441726190),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.ResolverIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutations","com.wsscode.pathom.viz.index-explorer/mutations",329050290),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.MutationIndex)], null)], null)], null)], null);
});})(x52529_52568))
;


var x52533_52569 = com.wsscode.pathom.book.index_explorer.AttributeGraphPanelWrapper.prototype;
x52533_52569.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x52533_52569.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x52533_52569){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),cljs.core.PersistentArrayMap.EMPTY], null)], null);
});})(x52533_52569))
;

x52533_52569.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x52533_52569){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x52533_52569))
;

x52533_52569.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x52533_52569.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x52533_52569){
return (function (this$,p__52534){
var map__52535 = p__52534;
var map__52535__$1 = (((((!((map__52535 == null))))?(((((map__52535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52535.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52535):map__52535);
var data = map__52535__$1;
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52535__$1,new cljs.core.Keyword("com.wsscode.pathom.book.index-explorer","index","com.wsscode.pathom.book.index-explorer/index",-1441726190));
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ui","root","ui/root",-448656785),data,new cljs.core.Keyword("com.wsscode.pathom.book.index-explorer","index","com.wsscode.pathom.book.index-explorer/index",-1441726190),index], null);
});})(x52533_52569))
;

x52533_52569.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x52533_52569.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x52533_52569){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","root","ui/root",-448656785),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.index-explorer","index","com.wsscode.pathom.book.index-explorer/index",-1441726190),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.ResolverIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutations","com.wsscode.pathom.viz.index-explorer/mutations",329050290),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.MutationIndex)], null)], null)], null)], null);
});})(x52533_52569))
;


com.wsscode.pathom.book.index_explorer.AttributeGraphPanelWrapper.cljs$lang$type = true;

com.wsscode.pathom.book.index_explorer.AttributeGraphPanelWrapper.cljs$lang$ctorStr = "com.wsscode.pathom.book.index-explorer/AttributeGraphPanelWrapper";

com.wsscode.pathom.book.index_explorer.AttributeGraphPanelWrapper.cljs$lang$ctorPrWriter = (function (this__44805__auto__,writer__44806__auto__,opt__44807__auto__){
return cljs.core._write(writer__44806__auto__,"com.wsscode.pathom.book.index-explorer/AttributeGraphPanelWrapper");
});
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.wsscode.pathom.book.index-explorer","force-refresh","com.wsscode.pathom.book.index-explorer/force-refresh",-1309472747,null),(function (fulcro_incoming_env,_,___$1){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__52537 = fulcro_incoming_env;
var map__52537__$1 = (((((!((map__52537 == null))))?(((((map__52537.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52537.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52537):map__52537);
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52537__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__52537,map__52537__$1,reconciler){
return (function (){
return setTimeout(((function (map__52537,map__52537__$1,reconciler){
return (function (){
return fulcro.client.primitives.force_root_render_BANG_(reconciler);
});})(map__52537,map__52537__$1,reconciler))
,(300));
});})(map__52537,map__52537__$1,reconciler))
], null);
})()], 0));
}));
com.wsscode.pathom.book.index_explorer.index_resolver = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.index-explorer","index-resolver","com.wsscode.pathom.book.index-explorer/index-resolver",-1178259525,null),(function (){var G__52540 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","index","com.wsscode.pathom.viz.index-explorer/index",-1539481252)], null)], null);
return G__52540;

})(),(function com$wsscode$pathom$book$index_explorer$index_resolver(p__52541,_){
var map__52542 = p__52541;
var map__52542__$1 = (((((!((map__52542 == null))))?(((((map__52542.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52542.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52542):map__52542);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52542__$1,new cljs.core.Keyword("com.wsscode.pathom.book.index-explorer","indexes","com.wsscode.pathom.book.index-explorer/indexes",1553238160));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","index","com.wsscode.pathom.viz.index-explorer/index",-1539481252),indexes], null);
}));
com.wsscode.pathom.book.index_explorer.parser = com.wsscode.pathom.core.parser(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.map_reader,com.wsscode.pathom.connect.reader2,com.wsscode.pathom.connect.open_ident_reader], null)], null),new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.connect.connect_plugin.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.book.index_explorer.index_resolver], null)], null)),com.wsscode.pathom.core.error_handler_plugin,com.wsscode.pathom.core.elide_special_outputs_plugin], null)], null));
com.wsscode.pathom.book.index_explorer.index_parsers = (function com$wsscode$pathom$book$index_explorer$index_parsers(resolvers){
return (function (env,tx){
return com.wsscode.pathom.book.index_explorer.parser(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.book.index-explorer","indexes","com.wsscode.pathom.book.index-explorer/indexes",1553238160),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__52544_SHARP_,p2__52545_SHARP_){
return com.wsscode.pathom.connect.add.cljs$core$IFn$_invoke$arity$3(p1__52544_SHARP_,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(p2__52545_SHARP_),p2__52545_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,resolvers)),tx);
});
});
com.wsscode.pathom.book.index_explorer.parsers = com.wsscode.pathom.book.interactive_parser.parsers;
com.wsscode.pathom.book.app_types.register_app("index-explorer",(function (p__52548){
var map__52549 = p__52548;
var map__52549__$1 = (((((!((map__52549 == null))))?(((((map__52549.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52549.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52549):map__52549);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52549__$1,new cljs.core.Keyword("com.wsscode.pathom.book.app-types","node","com.wsscode.pathom.book.app-types/node",-1702617550));
var parser_name = node.getAttribute("data-parser");
var map__52551 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.book.index_explorer.parsers,parser_name);
var map__52551__$1 = (((((!((map__52551 == null))))?(((((map__52551.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52551.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52551):map__52551);
var iparser = map__52551__$1;
var parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52551__$1,new cljs.core.Keyword("com.wsscode.pathom.book.interactive-parser","parser","com.wsscode.pathom.book.interactive-parser/parser",-1029277043));
var app_id = ["index-explorer-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(parser_name)].join('');
if(cljs.core.truth_(iparser)){
} else {
throw (new Error(["Assert failed: ",["parser ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(parser_name)," not found"].join(''),"\n","iparser"].join('')));
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.book.app-types","app","com.wsscode.pathom.book.app-types/app",1458541137),fulcro.client.make_fulcro_client.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fulcro.client.primitives.get_initial_state(com.wsscode.pathom.book.index_explorer.IndexExplorerWrapper,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword("fulcro.inspect.core","app-id","fulcro.inspect.core/app-id",-1444290233),app_id),new cljs.core.Keyword(null,"client-did-mount","client-did-mount",-958324226),((function (parser_name,map__52551,map__52551__$1,iparser,parser,app_id,map__52549,map__52549__$1,node){
return (function (p1__52547_SHARP_){
return fulcro.client.data_fetch.load.cljs$core$IFn$_invoke$arity$4(p1__52547_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),"singleton"], null),com.wsscode.pathom.viz.index_explorer.IndexExplorer,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"refresh","refresh",1947415525),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","root","ui/root",-448656785)], null),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","root","ui/root",-448656785)], null),new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705),new cljs.core.Symbol("com.wsscode.pathom.book.index-explorer","force-refresh","com.wsscode.pathom.book.index-explorer/force-refresh",-1309472747,null)], null));
});})(parser_name,map__52551,map__52551__$1,iparser,parser,app_id,map__52549,map__52549__$1,node))
,new cljs.core.Keyword(null,"networking","networking",586110628),com.wsscode.pathom.fulcro.network.pathom_remote(parser)], null)),new cljs.core.Keyword("com.wsscode.pathom.book.app-types","root","com.wsscode.pathom.book.app-types/root",773902039),com.wsscode.pathom.book.index_explorer.IndexExplorerWrapper], null);
}));
com.wsscode.pathom.book.index_explorer.prepare_index = (function com$wsscode$pathom$book$index_explorer$prepare_index(registry){
var _LT__GT_ = com.wsscode.pathom.connect.register(cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__52553_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__52553_SHARP_,new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772),(function (_,___$1){
return null;
}));
}),registry));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(com.wsscode.pathom.viz.index_explorer.process_index(_LT__GT_),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","index","com.wsscode.pathom.viz.index-explorer/index",-1539481252),_LT__GT_);
});
com.wsscode.pathom.book.index_explorer.graph_demos = new cljs.core.PersistentArrayMap(null, 7, ["index-explorer.user",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.index-explorer","index","com.wsscode.pathom.book.index-explorer/index",-1441726190),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Symbol(null,"user-by-id","user-by-id",-1086259110,null),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("user","id","user/id",-1375756663),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","name","user/name",1848814598)], null)], null)], null)], null),"index-explorer.user2",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.index-explorer","index","com.wsscode.pathom.book.index-explorer/index",-1441726190),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Symbol(null,"user-by-id","user-by-id",-1086259110,null),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("user","id","user/id",-1375756663),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","name","user/name",1848814598),new cljs.core.Keyword("user","email","user/email",1419686391),new cljs.core.Keyword("user","dob","user/dob",1342185100),new cljs.core.Keyword("twitter","url","twitter/url",1507397577)], null)], null)], null)], null),"index-explorer.user3",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.index-explorer","index","com.wsscode.pathom.book.index-explorer/index",-1441726190),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Symbol(null,"user-by-id","user-by-id",-1086259110,null),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("user","id","user/id",-1375756663),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","name","user/name",1848814598),new cljs.core.Keyword("user","email","user/email",1419686391),new cljs.core.Keyword("user","dob","user/dob",1342185100),new cljs.core.Keyword("twitter","url","twitter/url",1507397577)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Symbol(null,"user-by-email","user-by-email",-1947157909,null),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("user","email","user/email",1419686391),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","name","user/name",1848814598),new cljs.core.Keyword("user","id","user/id",-1375756663),new cljs.core.Keyword("user","dob","user/dob",1342185100),new cljs.core.Keyword("twitter","url","twitter/url",1507397577)], null)], null)], null)], null),"index-explorer.user4",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.index-explorer","index","com.wsscode.pathom.book.index-explorer/index",-1441726190),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Symbol(null,"user-by-id","user-by-id",-1086259110,null),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("user","id","user/id",-1375756663),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","name","user/name",1848814598),new cljs.core.Keyword("user","email","user/email",1419686391),new cljs.core.Keyword("user","dob","user/dob",1342185100),new cljs.core.Keyword("twitter","url","twitter/url",1507397577)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Symbol(null,"user-by-email","user-by-email",-1947157909,null),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("user","email","user/email",1419686391),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","name","user/name",1848814598),new cljs.core.Keyword("user","id","user/id",-1375756663),new cljs.core.Keyword("user","dob","user/dob",1342185100),new cljs.core.Keyword("twitter","url","twitter/url",1507397577)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Symbol(null,"user-groups","user-groups",375605073,null),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("user","id","user/id",-1375756663),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("user","groups","user/groups",-134476593),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("group","id","group/id",-1281514539),new cljs.core.Keyword("group","name","group/name",1606764202)], null)], null)], null)], null)], null)], null),"index-explorer.sizes",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.index-explorer","index","com.wsscode.pathom.book.index-explorer/index",-1441726190),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Symbol(null,"user-by-id","user-by-id",-1086259110,null),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("user","id","user/id",-1375756663),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","name","user/name",1848814598),new cljs.core.Keyword("user","email","user/email",1419686391),new cljs.core.Keyword("user","dob","user/dob",1342185100),new cljs.core.Keyword("twitter","url","twitter/url",1507397577),new cljs.core.Keyword("youtube","url","youtube/url",1566478425),new cljs.core.Keyword("linked-in","url","linked-in/url",873923375),new cljs.core.Keyword("user","attr1","user/attr1",1213087561),new cljs.core.Keyword("user","attr2","user/attr2",-646622559),new cljs.core.Keyword("user","attr3","user/attr3",-1529784800),new cljs.core.Keyword("user","attr4","user/attr4",-873990096),new cljs.core.Keyword("user","attr5","user/attr5",1753202591)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Symbol(null,"email-by-twitter","email-by-twitter",-2097022841,null),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("twitter","url","twitter/url",1507397577),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","email","user/email",1419686391)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Symbol(null,"email-by-youtube","email-by-youtube",-1260939918,null),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("youtube","url","youtube/url",1566478425),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","email","user/email",1419686391)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Symbol(null,"email-by-linkedin","email-by-linkedin",1145966233,null),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("linked-in","url","linked-in/url",873923375),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","email","user/email",1419686391)], null)], null)], null)], null),"index-explorer.groups",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.index-explorer","index","com.wsscode.pathom.book.index-explorer/index",-1441726190),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Symbol(null,"user-by-id","user-by-id",-1086259110,null),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("github.repository","owner","github.repository/owner",1288983924),null,new cljs.core.Keyword("github.repository","name","github.repository/name",1240527476),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("github.repository","id","github.repository/id",21190655),new cljs.core.Keyword("github.repository","url","github.repository/url",881596427),new cljs.core.Keyword("github.repository","name-with-owner","github.repository/name-with-owner",682905354)], null)], null)], null)], null),"index-explorer.globals",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.index-explorer","index","com.wsscode.pathom.book.index-explorer/index",-1441726190),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Symbol(null,"time","time",-1268547887,null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("time","now","time/now",-1654036502)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Symbol(null,"pi","pi",176774184,null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("math","pi","math/pi",-1460298023)], null)], null)], null)], null)], null);
com.wsscode.pathom.book.index_explorer.parse_attribute = (function com$wsscode$pathom$book$index_explorer$parse_attribute(str){
if(clojure.string.starts_with_QMARK_(str,"#")){
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(str);
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(str);
}
});
com.wsscode.pathom.book.app_types.register_app("index-explorer-attr-graph",(function (p__52557){
var map__52559 = p__52557;
var map__52559__$1 = (((((!((map__52559 == null))))?(((((map__52559.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52559.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52559):map__52559);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52559__$1,new cljs.core.Keyword("com.wsscode.pathom.book.app-types","node","com.wsscode.pathom.book.app-types/node",-1702617550));
var index_group = node.getAttribute("data-index-group");
var attribute = com.wsscode.pathom.book.index_explorer.parse_attribute(node.getAttribute("data-attribute"));
var map__52561 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.book.index_explorer.graph_demos,index_group);
var map__52561__$1 = (((((!((map__52561 == null))))?(((((map__52561.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52561.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52561):map__52561);
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52561__$1,new cljs.core.Keyword("com.wsscode.pathom.book.index-explorer","index","com.wsscode.pathom.book.index-explorer/index",-1441726190));
var app_id = ["attribute-graph-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index_group)].join('');
if(cljs.core.truth_(index)){
} else {
throw (new Error(["Assert failed: ",["no index found for group  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index_group)].join(''),"\n","index"].join('')));
}

var index__$1 = com.wsscode.pathom.book.index_explorer.prepare_index(index);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.book.app-types","app","com.wsscode.pathom.book.app-types/app",1458541137),fulcro.client.make_fulcro_client.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fulcro.client.primitives.get_initial_state(com.wsscode.pathom.book.index_explorer.AttributeGraphPanelWrapper,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attribute,new cljs.core.Keyword("com.wsscode.pathom.book.index-explorer","index","com.wsscode.pathom.book.index-explorer/index",-1441726190),index__$1], null)),new cljs.core.Keyword("fulcro.inspect.core","app-id","fulcro.inspect.core/app-id",-1444290233),app_id),new cljs.core.Keyword(null,"networking","networking",586110628),com.wsscode.pathom.fulcro.network.pathom_remote(com.wsscode.pathom.book.index_explorer.parser)], null)),new cljs.core.Keyword("com.wsscode.pathom.book.app-types","root","com.wsscode.pathom.book.app-types/root",773902039),com.wsscode.pathom.book.index_explorer.AttributeGraphPanelWrapper], null);
}));

//# sourceMappingURL=com.wsscode.pathom.book.index_explorer.js.map
