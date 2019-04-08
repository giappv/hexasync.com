// (function (){
//     var rep = /.*\?.*/,
//         links = document.getElementsByTagName('link'),
//         scripts = document.getElementsByTagName('script'),
//         process_scripts = true;
//     for (var i=0;i<links.length;i++){
//       var link = links[i],
//           href = link.href;
//       if(rep.test(href)){
//         link.href = href+'&date='+Date.now();
//       }
//       else{
//         link.href = href+'?date='+Date.now();
//       }
      

     
//     }
//     if(process_scripts){
//       for (var i=0;i<scripts.length;i++){
//         var script = scripts[i],
//             src = script.src;
//         if(rep.test(src)){
//           script.src = src+'&date='+Date.now();
//         }
//         else{
//           script.src = src+'?date='+Date.now();
//         }
  
//       }
//     }


//     try {
//         var cache = Components.classes["@mozilla.org/netwerk/cache-storage-service;1"].
//           getService(Components.interfaces.nsICacheStorageService);
//         cache.clear();
//     } catch (e) {}
    
//     try {
//     var imageCache = Components.classes["@mozilla.org/image/tools;1"].
//         getService(Components.interfaces.imgITools).
//         getImgCacheForDocument(null);
//     imageCache.clearCache(false);
//     } catch (e) {}

    


    
//   })();



(function (){
  stats = new Stats;
  stats.setMode(0);
  stats.domElement.style.position = 'absolute';
  stats.domElement.style.left = '0px';
  stats.domElement.style.top = '0px';
  document.body.appendChild(stats.domElement);
  count_particles = document.querySelector('.js-count-particles');
  update = function() {
    stats.begin();
    stats.end();
    // if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    //   count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    // }
    requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
})();