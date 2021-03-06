class Router extends Backbone.Router

  routes:
    "hidden": "hide"
    "expanded": "expand"
    "related": "related"
    "tags": "tags"
    "search": "search"
    "search/:query": "searchResult"
    "feedback": "feedback"
    "mini": "mini"
    "*path": "minify"

  initialize: ->
    MyGovBar.page = new MyGovBar.Models.Page()
    Backbone.history.on 'route', @setCurrent
    window.onbeforeunload = ->
      sessionStorage.myGovBarExpanded = Backbone.history.fragment != "mini" and Backbone.history.fragment != "hidden"
      return
      
  mini: ->
    MyGovBar.CrossDomain.send 'mini'
    new MyGovBar.Views.Mini(model: MyGovBar.page).render()
    
  minify: ->
    @navigate 'mini', true
    
  expand: ->
    MyGovBar.CrossDomain.send 'expanded'
    new MyGovBar.Views.Expanded().render()
    @setCurrent()
    
  hide: ->
    MyGovBar.CrossDomain.send 'hidden'
    new MyGovBar.Views.Hidden().render()
  
  tags: ->
    new MyGovBar.Views.Tags(model: MyGovBar.page).render()
    
  related: ->
    new MyGovBar.Views.Related( model: MyGovBar.page).render()
    
  search: ->
    new MyGovBar.Views.Search().render()
    
  searchResult: (query) ->
    collection = new MyGovBar.Collections.SearchResults query: query
    collection.fetch()
    new MyGovBar.Views.SearchResult collection: collection

  feedback: ->
    new MyGovBar.Views.Feedback(model: MyGovBar.page).render()
    
  setCurrent: ->
    tab = Backbone.history.fragment
    tab = "search search-result" if tab.indexOf("search/") != -1
    $('#tabs li.current').removeClass 'current'
    $('#tabs li.' + tab).addClass 'current'
    $('#bar').removeClass MyGovBar.config.tabs.join(" ") + " search-result"
    $('#bar').addClass tab
    
  go: (hash, e) ->
    e.preventDefault() if e?
    @navigate hash, true
    false
    
MyGovBar.router = new Router()