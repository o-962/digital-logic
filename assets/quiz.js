(function(){
var app=document.getElementById("app"), KEY="ch1-mastery-v1";
var QB=window.QBANK, LV=window.LEVELS, st=null, timer=null;
function save(){try{localStorage.setItem(KEY,JSON.stringify(st));}catch(e){}}
function load(){try{return JSON.parse(localStorage.getItem(KEY));}catch(e){return null;}}
function shuffle(a){for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var t=a[i];a[i]=a[j];a[j]=t;}return a;}
function byId(id){return QB[id-1];}
function norm(s){return String(s).toUpperCase().replace(/[\s,_()]/g,"").replace(/^\+/,"").replace(/−/g,"-");}
function stripLZ(s){return s.replace(/^0+(?=[0-9A-Z])/,"");}
function isRight(q,ans){
  if(ans===undefined||ans===null||ans==="") return false;
  if(q.t==="mcq") return ans===q.a;
  var u=norm(ans);
  return q.acc.some(function(a){
    var v=norm(a);
    if(u===v) return true;
    if(q.lz&&stripLZ(u)===stripLZ(v)) return true;
    if(q.num&&!isNaN(parseFloat(u))&&/^-?[0-9]*\.?[0-9]+$/.test(u)&&parseFloat(u)===parseFloat(v)) return true;
    return false;
  });
}
var RANKS=[[98,"🐐 GOAT","You've mastered Chapter 1. Nothing in it will surprise you on the exam."],[90,"🧠 Binary Master","Exam-ready. Review the few you missed and you'll be at GOAT."],[75,"⚔️ Binary Warrior","Strong. Look at the levels below 80% and retake."],[60,"🔧 Byte Apprentice","The basics are there. Re-read the pages for your weakest level."],[40,"🔢 Nibble Novice","Go back to the topic pages and the cheat sheet, then retry."],[0,"🥚 Bit Rookie","Start with pages 1–3, then come back. You'll get there."]];
function rank(s){for(var i=0;i<RANKS.length;i++) if(s>=RANKS[i][0]) return RANKS[i];}

function home(){
  clearInterval(timer);
  var saved=load();
  var counts={};QB.forEach(function(q){counts[q.lv]=(counts[q.lv]||0)+1;});
  var h='<p class="pill">'+QB.length+' questions</p><p class="pill">Book · Slides · Past papers · Original</p>';
  h+='<h1>🏆 Chapter 1 Mastery Quiz</h1><p class="lead">Scored from <b>0 to 100</b>. Every question has a full step-by-step solution that shows exactly where you went wrong. Questions come from the slides, the homework, Mano problems 1.1–1.36, First Exam 2017, the finals (bridge questions), and new <span class="hi">GOAT-level</span> questions written for this quiz.</p>';
  if(saved&&saved.order&&!saved.done){h+='<div class="card" style="border-color:var(--accent2)"><b>You have an unfinished attempt</b> ('+Object.keys(saved.ans).length+'/'+saved.order.length+' answered). <div class="row" style="margin-top:8px"><button class="btn warn" id="resume">Resume</button><button class="btn alt" id="discard">Discard</button></div></div>';}
  h+='<h2>1 · Choose the mode</h2><div class="row"><label><input type="radio" name="fb" value="practice" checked> <b>Practice</b>: check each answer and see the solution right away</label></div><div class="row"><label><input type="radio" name="fb" value="exam"> <b>Exam</b>: no feedback until you submit</label></div>';
  h+='<h2>2 · Choose the question set</h2><div class="grid modes">';
  h+='<div class="tile" data-set="all" style="border-color:var(--accent2)"><span class="n">THE FULL GAUNTLET</span><h3>All '+QB.length+' questions</h3><p>Every level, shuffled within each level, warm-up to GOAT.</p></div>';
  h+='<div class="tile" data-set="exam40"><span class="n">EXAM SIMULATION</span><h3>Random 40</h3><p>A random mix from all levels, about one exam\'s worth. Different every time.</p></div>';
  h+='<div class="tile" data-set="past"><span class="n">PAST PAPERS + BOOK</span><h3>Official problems only</h3><p>Questions taken from the exams, slides, homework and book.</p></div>';
  for(var l in LV){h+='<div class="tile" data-set="lv'+l+'"><span class="n"><span class="lvtag lv'+l+'">LEVEL '+l+'</span></span><h3>'+LV[l]+'</h3><p>'+counts[l]+' questions</p></div>';}
  h+='</div><div class="card" style="margin-top:24px"><b>Scoring:</b> every question is worth the same. Score = correct ÷ total × 100. Unanswered counts as wrong. Typed answers ignore spaces and leading zeros where it makes sense. For numbers, type digits only (e.g. <code>-100</code>, <code>38.4</code>, <code>C9.7</code>).<br><b>Ranks:</b> 0 Bit Rookie · 40 Nibble Novice · 60 Byte Apprentice · 75 Binary Warrior · 90 Binary Master · 98 🐐 GOAT</div>';
  app.innerHTML=h;
  if(saved&&saved.order&&!saved.done){document.getElementById("resume").onclick=function(){st=saved;startTimer();show();};document.getElementById("discard").onclick=function(){localStorage.removeItem(KEY);home();};}
  app.querySelectorAll("[data-set]").forEach(function(t){t.onclick=function(){start(t.getAttribute("data-set"),app.querySelector("input[name=fb]:checked").value);};});
}
function start(set,mode){
  var ids=QB.map(function(q){return q.id;}),order=[];
  if(set==="all"){for(var l=1;l<=6;l++) order=order.concat(shuffle(ids.filter(function(i){return byId(i).lv==l;})));}
  else if(set==="exam40"){order=shuffle(ids.slice()).slice(0,40).sort(function(a,b){return byId(a).lv-byId(b).lv;});}
  else if(set==="past"){order=ids.filter(function(i){var s=byId(i).src;return !/^(Master|GOAT|Concept|Overflow|Sign extension|Gray code|Hex arithmetic|Octal arithmetic)$/.test(s);});}
  else {var lv=+set.slice(2);order=shuffle(ids.filter(function(i){return byId(i).lv===lv;}));}
  var perm={};order.forEach(function(i){var q=byId(i);if(q.t==="mcq") perm[i]=shuffle(q.opts.map(function(_,k){return k;}));});
  st={set:set,mode:mode,order:order,perm:perm,ans:{},checked:{},cur:0,t0:Date.now(),elapsed:0,done:false};
  save();startTimer();show();
}
function startTimer(){clearInterval(timer);st._t=Date.now();timer=setInterval(function(){var el=document.getElementById("clock");if(el){el.textContent=fmtT(st.elapsed+(Date.now()-st._t));}},1000);}
function fmtT(ms){var s=Math.floor(ms/1000);return Math.floor(s/60)+":"+("0"+s%60).slice(-2);}
function tick(){st.elapsed+=Date.now()-st._t;st._t=Date.now();}
function show(){
  var i=st.cur, id=st.order[i], q=byId(id), ans=st.ans[id], checked=st.mode==="practice"&&st.checked[id];
  var answered=Object.keys(st.ans).length;
  var h='<div class="qhead"><div><span class="lvtag lv'+q.lv+'">L'+q.lv+' · '+LV[q.lv]+'</span> <span class="pill">'+q.src+'</span></div><div class="mono">Time <span id="clock">'+fmtT(st.elapsed)+'</span> · '+answered+'/'+st.order.length+' answered</div></div>';
  h+='<div class="bar" style="margin:10px 0"><i style="width:'+(100*(i+1)/st.order.length)+'%"></i></div>';
  h+='<div class="card"><div class="mono" style="color:var(--muted)">Question '+(i+1)+' of '+st.order.length+'</div><div class="qtext">'+q.q+'</div>';
  if(q.t==="mcq"){
    st.perm[id].forEach(function(k,pos){
      var cls="opt"; if(ans===k) cls+=" sel";
      if(checked){ if(k===q.a) cls+=" ok"; else if(ans===k) cls+=" no"; }
      h+='<div class="'+cls+'" data-k="'+k+'"><span class="k">'+"abcde"[pos]+')</span><span>'+q.opts[k]+'</span></div>';
    });
  } else {
    h+='<div class="row"><input type="text" id="inp" size="28" autocomplete="off" placeholder="type your answer" value="'+(ans!==undefined?String(ans).replace(/"/g,"&quot;"):"")+'"'+(checked?" disabled":"")+'>'+(q.hint?'<span class="pill">'+q.hint+'</span>':'')+'</div>';
  }
  if(checked){
    var ok=isRight(q,ans);
    h+='<div class="sol"><div class="verdict '+(ok?"g":"r")+'">'+(ok?"✔ Correct!":"✘ Not quite.")+'</div>';
    if(!ok) h+='<p>Correct answer: <b class="hi">'+(q.t==="mcq"?q.opts[q.a]:q.acc[0])+'</b></p>';
    h+='<b>Step-by-step solution</b><div>'+q.sol+'</div></div>';
  }
  h+='</div><div class="row">';
  h+='<button class="btn alt" id="prev"'+(i===0?" disabled":"")+'>← Prev</button>';
  if(st.mode==="practice"&&!checked) h+='<button class="btn warn" id="check">Check answer</button>';
  h+='<button class="btn alt" id="next"'+(i===st.order.length-1?" disabled":"")+'>Next →</button>';
  h+='<span style="flex:1"></span><button class="btn" id="finish">Submit &amp; score</button><button class="btn alt" id="quit">Exit</button></div>';
  h+='<div class="navgrid">';
  st.order.forEach(function(qid,k){var c="";var a=st.ans[qid];if(a!==undefined&&a!==""){c="ans";if(st.mode==="practice"&&st.checked[qid]) c=isRight(byId(qid),a)?"ok":"no";} h+='<button class="'+c+(k===i?" cur":"")+'" data-go="'+k+'">'+(k+1)+'</button>';});
  h+='</div>';
  app.innerHTML=h;
  app.querySelectorAll(".opt").forEach(function(o){o.onclick=function(){if(checked) return; st.ans[id]=+o.getAttribute("data-k");save();show();};});
  var inp=document.getElementById("inp");
  if(inp){inp.oninput=function(){st.ans[id]=inp.value;save();};inp.onkeydown=function(e){if(e.key==="Enter"){st.ans[id]=inp.value; if(st.mode==="practice"&&!checked){st.checked[id]=true;save();show();} else go(1);}}; if(!checked) inp.focus();}
  document.getElementById("prev").onclick=function(){go(-1);};
  document.getElementById("next").onclick=function(){go(1);};
  var c=document.getElementById("check"); if(c) c.onclick=function(){st.checked[id]=true;save();show();};
  document.getElementById("finish").onclick=function(){var un=st.order.length-Object.keys(st.ans).filter(function(k){return st.ans[k]!=="";}).length; if(un>0&&!confirm(un+" question(s) unanswered. They'll count as wrong. Submit anyway?")) return; finish();};
  document.getElementById("quit").onclick=function(){tick();save();clearInterval(timer);home();};
  app.querySelectorAll("[data-go]").forEach(function(b){b.onclick=function(){st.cur=+b.getAttribute("data-go");save();show();};});
}
function go(d){st.cur=Math.max(0,Math.min(st.order.length-1,st.cur+d));save();show();window.scrollTo(0,0);}
function finish(){
  tick();clearInterval(timer);st.done=true;save();
  var tot=st.order.length,cor=0,per={};
  st.order.forEach(function(id){var q=byId(id),ok=isRight(q,st.ans[id]);if(ok)cor++;per[q.lv]=per[q.lv]||[0,0];per[q.lv][1]++;if(ok)per[q.lv][0]++;});
  var score=Math.round(1000*cor/tot)/10, r=rank(score);
  try{var best=JSON.parse(localStorage.getItem(KEY+"-best")||"{}");var k=st.set;if(!best[k]||score>best[k]){best[k]=score;localStorage.setItem(KEY+"-best",JSON.stringify(best));}}catch(e){}
  var h='<h1>Results</h1><div class="card" style="text-align:center"><div class="big '+(score>=75?"g":score>=50?"hi":"r")+'">'+score+'<span style="font-size:1.5rem">/100</span></div><div class="rank">'+r[1]+'</div><p class="lead">'+r[2]+'</p><p class="mono">'+cor+' / '+tot+' correct · time '+fmtT(st.elapsed)+'</p></div>';
  h+='<h2>Breakdown by level</h2>';
  Object.keys(per).sort().forEach(function(l){var p=per[l],pc=Math.round(100*p[0]/p[1]);h+='<div style="margin:10px 0"><div class="row" style="justify-content:space-between"><span><span class="lvtag lv'+l+'">L'+l+'</span> '+LV[l]+'</span><span class="mono">'+p[0]+'/'+p[1]+' · '+pc+'%</span></div><div class="bar"><i style="width:'+pc+'%"></i></div></div>';});
  var weak=Object.keys(per).filter(function(l){return per[l][0]/per[l][1]<0.8;});
  var pages={1:"number-systems.html",2:"conversions.html",3:"arithmetic.html",4:"complements.html",5:"codes.html",6:"cheatsheet.html"};
  if(weak.length) h+='<div class="tip">Review these next: '+weak.map(function(l){return '<a href="'+pages[l]+'">'+LV[l]+'</a>';}).join(", ")+'</div>';
  h+='<div class="row noprint"><button class="btn" id="again">New attempt</button><button class="btn alt" id="wrong">Show only mistakes</button><button class="btn alt" id="allr">Show all</button></div><h2>Full review with solutions</h2><div id="rev"></div>';
  app.innerHTML=h;
  function rev(onlyWrong){
    var out="";
    st.order.forEach(function(id,k){var q=byId(id),a=st.ans[id],ok=isRight(q,a);if(onlyWrong&&ok) return;
      var yours=(a===undefined||a==="")?"<i>no answer</i>":(q.t==="mcq"?q.opts[a]:String(a).replace(/</g,"&lt;"));
      out+='<details class="rev '+(ok?"ok":"no")+'"'+(ok?"":" open")+'><summary>'+(ok?"✔":"✘")+' Q'+(k+1)+' <span class="lvtag lv'+q.lv+'">L'+q.lv+'</span> <span class="pill">'+q.src+'</span></summary><div class="qtext">'+q.q+'</div><p>Your answer: <b class="'+(ok?"g":"r")+'">'+yours+'</b><br>Correct answer: <b class="hi">'+(q.t==="mcq"?q.opts[q.a]:q.acc[0])+'</b></p><div class="sol"><b>Step-by-step solution</b>'+q.sol+'</div></details>';});
    document.getElementById("rev").innerHTML=out||"<p class='g'>No mistakes. 🐐</p>";
  }
  rev(true);
  document.getElementById("wrong").onclick=function(){rev(true);};
  document.getElementById("allr").onclick=function(){rev(false);};
  document.getElementById("again").onclick=function(){localStorage.removeItem(KEY);home();window.scrollTo(0,0);};
  window.scrollTo(0,0);
}
home();
})();
