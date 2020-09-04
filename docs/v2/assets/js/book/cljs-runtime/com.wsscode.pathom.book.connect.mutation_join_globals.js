goog.provide('com.wsscode.pathom.book.connect.mutation_join_globals');
goog.require('cljs.core');
goog.require('com.wsscode.pathom.connect');
goog.require('com.wsscode.pathom.core');
com.wsscode.pathom.book.connect.mutation_join_globals.user_create = com.wsscode.pathom.connect.mutation(new cljs.core.Symbol("com.wsscode.pathom.book.connect.mutation-join-globals","user-create","com.wsscode.pathom.book.connect.mutation-join-globals/user-create",-251760242,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Symbol("user","create","user/create",343682052,null),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","name","user/name",1848814598),new cljs.core.Keyword("user","email","user/email",1419686391)], null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","id","user/id",-1375756663)], null)], null),(function com$wsscode$pathom$book$connect$mutation_join_globals$user_create(p__65069,user){
var map__65073 = p__65069;
var map__65073__$1 = (((((!((map__65073 == null))))?(((((map__65073.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65073.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65073):map__65073);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65073__$1,new cljs.core.Keyword("com.wsscode.pathom.book.connect.mutation-join-globals","db","com.wsscode.pathom.book.connect.mutation-join-globals/db",-1552444373));
var map__65108 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.select_keys(user,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","name","user/name",1848814598),new cljs.core.Keyword("user","email","user/email",1419686391)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("user","id","user/id",-1375756663),cljs.core.random_uuid(),new cljs.core.Keyword("user","created-at","user/created-at",-84598831),(new Date())], null)], 0));
var map__65108__$1 = (((((!((map__65108 == null))))?(((((map__65108.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65108.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65108):map__65108);
var new_user = map__65108__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65108__$1,new cljs.core.Keyword("user","id","user/id",-1375756663));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(db,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"users","users",-713552705),id], null),new_user);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("user","id","user/id",-1375756663),id,new cljs.core.Keyword("app","id-remaps","app/id-remaps",-1924040245),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword("user","id","user/id",-1375756663).cljs$core$IFn$_invoke$arity$1(user),id])], null);
}));
com.wsscode.pathom.book.connect.mutation_join_globals.user_data = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.connect.mutation-join-globals","user-data","com.wsscode.pathom.book.connect.mutation-join-globals/user-data",2035608371,null),(function (){var G__65202 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("user","id","user/id",-1375756663),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","id","user/id",-1375756663),new cljs.core.Keyword("user","name","user/name",1848814598),new cljs.core.Keyword("user","email","user/email",1419686391),new cljs.core.Keyword("user","created-at","user/created-at",-84598831)], null)], null);
return G__65202;

})(),(function com$wsscode$pathom$book$connect$mutation_join_globals$user_data(p__65215,p__65216){
var map__65219 = p__65215;
var map__65219__$1 = (((((!((map__65219 == null))))?(((((map__65219.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65219.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65219):map__65219);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65219__$1,new cljs.core.Keyword("com.wsscode.pathom.book.connect.mutation-join-globals","db","com.wsscode.pathom.book.connect.mutation-join-globals/db",-1552444373));
var map__65221 = p__65216;
var map__65221__$1 = (((((!((map__65221 == null))))?(((((map__65221.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65221.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65221):map__65221);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65221__$1,new cljs.core.Keyword("user","id","user/id",-1375756663));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"users","users",-713552705),id], null));
}));
com.wsscode.pathom.book.connect.mutation_join_globals.all_users = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.connect.mutation-join-globals","all-users","com.wsscode.pathom.book.connect.mutation-join-globals/all-users",-41140119,null),(function (){var G__65302 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("user","all","user/all",885376633),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","id","user/id",-1375756663),new cljs.core.Keyword("user","name","user/name",1848814598),new cljs.core.Keyword("user","email","user/email",1419686391),new cljs.core.Keyword("user","created-at","user/created-at",-84598831)], null)], null)], null)], null);
return G__65302;

})(),(function com$wsscode$pathom$book$connect$mutation_join_globals$all_users(p__65315,_){
var map__65320 = p__65315;
var map__65320__$1 = (((((!((map__65320 == null))))?(((((map__65320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65320.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65320):map__65320);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65320__$1,new cljs.core.Keyword("com.wsscode.pathom.book.connect.mutation-join-globals","db","com.wsscode.pathom.book.connect.mutation-join-globals/db",-1552444373));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("user","all","user/all",885376633),cljs.core.vals(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(db),new cljs.core.Keyword(null,"users","users",-713552705)))], null);
}));
com.wsscode.pathom.book.connect.mutation_join_globals.app_registry = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.book.connect.mutation_join_globals.user_create,com.wsscode.pathom.book.connect.mutation_join_globals.user_data,com.wsscode.pathom.book.connect.mutation_join_globals.all_users], null);
com.wsscode.pathom.book.connect.mutation_join_globals.parser = com.wsscode.pathom.core.parser(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.map_reader,com.wsscode.pathom.connect.reader2,com.wsscode.pathom.connect.open_ident_reader,com.wsscode.pathom.core.env_placeholder_reader], null),new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-join-globals","com.wsscode.pathom.connect/mutation-join-globals",526656997),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","id-remaps","app/id-remaps",-1924040245)], null),new cljs.core.Keyword("com.wsscode.pathom.core","placeholder-prefixes","com.wsscode.pathom.core/placeholder-prefixes",-1362240644),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [">",null], null), null),new cljs.core.Keyword("com.wsscode.pathom.book.connect.mutation-join-globals","db","com.wsscode.pathom.book.connect.mutation-join-globals/db",-1552444373),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY)], null),new cljs.core.Keyword("com.wsscode.pathom.core","mutate","com.wsscode.pathom.core/mutate",-2086097173),com.wsscode.pathom.connect.mutate,new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.connect.connect_plugin.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),com.wsscode.pathom.book.connect.mutation_join_globals.app_registry], null)),com.wsscode.pathom.core.error_handler_plugin,com.wsscode.pathom.core.trace_plugin], null)], null));

//# sourceMappingURL=com.wsscode.pathom.book.connect.mutation_join_globals.js.map
