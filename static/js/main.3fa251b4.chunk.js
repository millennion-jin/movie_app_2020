(this.webpackJsonpmovie_app_2020=this.webpackJsonpmovie_app_2020||[]).push([[0],{43:function(e,t,s){},44:function(e,t,s){},45:function(e,t,s){"use strict";s.r(t);var a=s(0),n=s(2),r=s.n(n),i=s(13),c=s.n(i),o=s(4),l=s.n(o),m=s(14),d=s(15),j=s(16),u=s(19),v=s(18),p=s(17),b=s.n(p);s(43);var h=function(e){var t=e.year,s=e.title,n=e.summary,r=e.poster,i=e.genres;return Object(a.jsxs)("div",{Name:"movie",children:[Object(a.jsx)("img",{src:r,alt:s,title:s}),Object(a.jsxs)("div",{className:"movie_data",children:[Object(a.jsx)("h3",{className:"movie_title",style:{backgroundColor:"blue"},children:s}),Object(a.jsx)("h5",{className:"movie_year",children:t}),Object(a.jsx)("p",{className:"movie_summary",children:n}),Object(a.jsx)("ul",{className:"genres",children:i.map((function(e,t){return Object(a.jsx)("li",{className:"movie_genre",children:e},t)}))})]})]})},O=(s(44),function(e){Object(u.a)(s,e);var t=Object(v.a)(s);function s(){var e;Object(d.a)(this,s);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={isLoading:!0,movies:[]},e.getMovies=Object(m.a)(l.a.mark((function t(){var s,a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");case 2:s=t.sent,a=s.data.data.movies,e.setState({movies:a,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(j.a)(s,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.movies;return Object(a.jsx)("section",{className:"container",children:t?Object(a.jsx)("div",{className:"loader",children:Object(a.jsx)("span",{className:"loader_text",children:"Loading..."})}):Object(a.jsx)("div",{className:"movies",children:s.map((function(e){return console.log(e),Object(a.jsx)(h,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))})})}}]),s}(r.a.Component));c.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(O,{})}),document.getElementById("apple"))}},[[45,1,2]]]);
//# sourceMappingURL=main.3fa251b4.chunk.js.map