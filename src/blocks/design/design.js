window.addEventListener("load",function(){
  (function() {   
    var tabs = function(options) {  
      var el = document.querySelector(options.el);
      var tabNavigationLinks = el.querySelectorAll(options.tabNavigationLinks);
      var tabContentContainers = el.querySelectorAll(options.tabContentContainers);
      var activeIndex = 0;
      var initCalled = false;  
      var init = function() {
        if (!initCalled) {
          initCalled = true;
          el.classList.remove('no-js');          
          for (var i = 0; i < tabNavigationLinks.length; i++) {
            var link = tabNavigationLinks[i];
            handleClick(link, i);
          }
        }
      };
   

      var handleClick = function(link, index) {
        link.addEventListener('click', function(e) {
          e.preventDefault();
          goToTab(index);
        });
      };
   

      var goToTab = function(index) {
        if (index !== activeIndex && index >= 0 && index <= tabNavigationLinks.length) {
          tabNavigationLinks[activeIndex].classList.remove('is-active');
          tabNavigationLinks[index].classList.add('is-active');
          tabContentContainers[activeIndex].classList.remove('is-active');
          tabContentContainers[index].classList.add('is-active');
          activeIndex = index;
        }
      };
   

      return {
        init: init,
        goToTab: goToTab
      };
   
    };
   

    window.tabs = tabs;
   
  })();
let options={
  el:".design",
  tabNavigationLinks:".design__nav__link",
  tabContentContainers:".design__card"
}
let myTabs = tabs(options)
myTabs.init()
myTabs.goToTab()
})