(function(){
  var pages=[["index.html","Home"],["number-systems.html","1 Number Systems"],["conversions.html","2 Conversions"],["arithmetic.html","3 Arithmetic"],["complements.html","4 Complements"],["signed.html","5 Signed Numbers"],["codes.html","6 Binary Codes"],["logic.html","7 Binary Logic"],["cheatsheet.html","Cheat Sheet"],["solved.html","Solved Problems"],["quiz.html","🏆 Mastery Quiz"]];
  var here=location.pathname.split("/").pop()||"index.html";
  var h=document.createElement("header");h.className="top";
  var html='<div class="topin"><a class="brand" href="index.html">01<b>Ch1</b> Binary Systems</a><nav class="links">';
  pages.forEach(function(p){html+='<a href="'+p[0]+'"'+(p[0]===here?' class="on"':'')+'>'+p[1]+'</a>';});
  h.innerHTML=html+'</nav></div>';
  document.body.insertBefore(h,document.body.firstChild);
  var i=pages.findIndex(function(p){return p[0]===here;});
  var m=document.querySelector("main");
  if(m&&i>=0&&!m.hasAttribute("data-nopager")){
    var d=document.createElement("div");d.className="pager";
    d.innerHTML=(i>0?'<a class="btn alt" href="'+pages[i-1][0]+'">← '+pages[i-1][1]+'</a>':'<span></span>')+(i<pages.length-1?'<a class="btn" href="'+pages[i+1][0]+'">'+pages[i+1][1]+' →</a>':'');
    m.appendChild(d);
  }
  var f=document.createElement("footer");f.textContent="4241 Digital Logic Design · Chapter 1 Binary Systems · study site";document.body.appendChild(f);
})();
