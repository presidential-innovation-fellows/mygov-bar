/*! MyGovBar — 0.0.2 — 2013-01-04 16:23 */
this.JST=this.JST||{},this.JST.feedback=function(obj){var __p="";with(obj||{})__p+='<div class="rating">\n\n  <h3>Was this page helpful?</h3>\n  <div id="stars">\n    <input name="rating" type="radio" class="star" value="1"/>\n    <input name="rating" type="radio" class="star" value="2"/>\n    <input name="rating" type="radio" class="star" value="3"/>\n    <input name="rating" type="radio" class="star" value="4"/>\n    <input name="rating" type="radio" class="star" value="5"/>\n  </div>\n\n</div>\n \n<div class="comments">\n\n    <div class="feeback" id="comment_submitted">\n       Thanks for the feedback! We\'ve got your comment.\n    </div>\n\n<form id="feedback">\n\n    <h3>Give us your thoughts</h3>\n    <textarea id="comment" name="comment" style="width: 100%;"></textarea>\n    <input type="submit" class="btn" value="Send" />\n\n</form>\n\n</div>\n';return __p},this.JST.notifications=function(obj){var __p="";with(obj||{})__p+="";return __p},this.JST.related=function(obj){var __p="";with(obj||{})__p+='<ul class="content-links"> \n  ',_.each(related,function(e){__p+='\n    <li id="related-'+e.id+'"><a class="title" href="'+e.url+'" target="_blank">'+e.title+'\n    <span class="domain">'+e.domain.hostname.replace("www.","")+"</span></a>\n    </li>\n  "}),__p+="\n</ul>";return __p},this.JST.search=function(obj){var __p="";with(obj||{})__p+='<form id="search" method="get" action="http://search.usa.gov/search?affiliate='+MyGovBar.config.search_affiliate+'&" target="_blank" >\n  <label for"search_query">Search</label> <input type="search" name="query" placeholder="Search the Federal Government" id="search_query" />\n  <input type="submit" value="search" class="btn" />\n</form>';return __p},this.JST.search_result=function(obj){var __p="";with(obj||{})__p+='<h3>Results for "'+query+'"</h3>\n<ul class="results">\n',results.forEach(function(e){__p+='\n  <li class="result">\n    <a class="title" href="'+e.unescapedUrl+'">'+e.title+'</a>\n    <span class="excerpt">'+e.content+'</span>\n    <span class="url">'+e.unescapedURL+"</span>\n  </li>\n"}),__p+='\n</ul>\n<a href="http://search.usa.gov/search?affiliate='+MyGovBar.config.search_affiliate+"&query="+query+'" class="more-link" target="_blank">More results</a>';return __p},this.JST.tags=function(obj){var __p="";with(obj||{})__p+='<div class="tags">\n\n<h3>Tag this page</h3>\n<p class="info">(Help make this page more findable for all)</p>\n<ul>\n  ',_.each(tags,function(e){__p+='\n    <li class="tag" id="tag-'+e.id+'">'+e.name+"</li>\n  "}),__p+='\n  <li>\n</ul>\n<form id="tag_form">\n  <textarea id="tag_list" placeholder="Tag this page..." row="1"></textarea>\n</form>\n\n</div>';return __p};