// Typesets every math expression on the page with KaTeX, so math uses the LaTeX fonts.
// The HTML pages and questions.js keep plain text like (101)<sub>2</sub> or 2ⁿ − 1.
// This file finds those expressions when a page opens or the quiz redraws, and renders them.
(function(){
  var SKIP="header.top,footer,script,style,input,select,option,textarea,button,code,svg,.katex,.pill,.n,.mono,.lvtag,.rank,.k,.big";
  var CELL="td,th,.opt,.steps,.ans,.hi,b.g,b.r"; // here a plain number is math too, not just part of a sentence
  var BOLD="b,strong,.hi,.verdict";
  var SUB0="\uE001",SUB1="\uE002",SUP0="\uE003",SUP1="\uE004";

  var SUPS={"⁰":"0","¹":"1","²":"2","³":"3","⁴":"4","⁵":"5","⁶":"6","⁷":"7","⁸":"8","⁹":"9","ⁿ":"n","⁻":"-","ᵏ":"k","⁺":"+"};
  var SUBS={"₀":"0","₁":"1","₂":"2","₃":"3","₄":"4","₅":"5","₆":"6","₇":"7","₈":"8","₉":"9"};
  var SYM={"−":"-","·":"\\cdot ","×":"\\times ","÷":"\\div ","≥":"\\ge ","≤":"\\le ","≠":"\\ne ","≈":"\\approx ",
    "→":"\\rightarrow ","←":"\\leftarrow ","↔":"\\leftrightarrow ","⇒":"\\Rightarrow ","∈":"\\in ","Σ":"\\sum ","⊕":"\\oplus ",
    "⌈":"\\lceil ","⌉":"\\rceil ","…":"\\ldots ","✓":"\\;\\checkmark ","✔":"\\checkmark ","✗":"\\times ","✘":"\\times ",
    "½":"\\tfrac{1}{2}","¼":"\\tfrac{1}{4}","⅛":"\\tfrac{1}{8}","≫":"\\gg ","|":"\\mid ","{":"\\{","}":"\\}","%":"\\%","&":"\\&",
    "#":"\\#","$":"\\$","_":"\\_","@":"\\text{@}","\"":"\\text{\"}","–":"\\text{–}"};
  var OP=/[=≠≥≤<>≈+×÷·⊕→←↔⇒∈Σ√⌈⌉½¼⅛✓✔✘✗−≫]/;
  var ITALIC_CAPS=/[MNPS]/;

  // ---- plain text → TeX ------------------------------------------------------------------
  function tex(s){
    var out="",i=0,m,rest,c;
    while(i<s.length){
      c=s[i]; rest=s.slice(i);
      if(c===SUB0||c===SUP0){
        var end=s.indexOf(c===SUB0?SUB1:SUP1,i);
        out+=(c===SUB0?"_{":"^{")+tex(s.slice(i+1,end))+"}"; i=end+1; continue;
      }
      if(SUPS[c]){var a="";while(SUPS[s[i]]){a+=SUPS[s[i]];i++;} out+="^{"+a+"}"; continue;}
      if(SUBS[c]){var b="";while(SUBS[s[i]]){b+=SUBS[s[i]];i++;} out+="_{"+b+"}"; continue;}
      if(c==="√"&&s[i+1]==="("){
        var d=0,j=i+1; for(;j<s.length;j++){if(s[j]==="(")d++; if(s[j]===")"&&--d===0)break;}
        out+="\\sqrt{"+tex(s.slice(i+2,j))+"}"; i=j+1; continue;
      }
      if(c==="/"&&s[i-1]===" "){out+="\\mathbin{/}";i++;continue;} // spaced out, it separates answers: 13 / \u22125 / \u22122
      if(c==="x"&&s[i+1]==="\u0304"){out+="\\bar{x}";i+=2;continue;}
      if(c==="'"&&s[i+1]==="s"&&s[i-1]===")"){out+="\\text{'s}";i+=2;continue;}
      if(c==="M"&&/^M ?= ?2(?:[\u2070\u00b9\u00b2\u00b3\u2074\u2075\u2076\u2077\u2078\u2079]|\ue003\d)/.test(rest)){out+="\\mathrm{M}";i++;continue;} // the memory unit, not a variable
      var prev=s[i-1]||"";
      if(c==="'"&&!/[0-9A-Za-z)]/.test(prev)&&(m=/^'([^']{1,3})'/.exec(rest))){out+="\\texttt{'"+m[1].replace(/[%&#$_{}]/g,"\\$&")+"'}";i+=m[0].length;continue;}
      if(c==="s"&&prev===")"&&!/[a-z]/.test(s[i+1]||"")){out+="\\text{s}";i++;continue;}
      if(/[0-9A-Za-z]/.test(c)&&!/[0-9A-Za-z]/.test(prev)){
        if(m=/^(\d+|r)'s(?![a-z])/.exec(rest)){out+=m[1]+"\\text{'s}";i+=m[0].length;continue;}
        if(m=/^0x[0-9A-F]+\b/.exec(rest)){out+="\\mathrm{"+m[0]+"}";i+=m[0].length;continue;}
        if(m=/^(\d+(?:\.\d+)?)([KMGT])(?![0-9A-Za-z])/.exec(rest)){out+=m[1]+"\\mathrm{"+m[2]+"}";i+=m[0].length;continue;}
        if(m=/^[0-9A-F]+h(?![0-9A-Za-z])/.exec(rest)){out+="\\mathrm{"+m[0]+"}";i+=m[0].length;continue;}
        if(m=/^\d{1,3}(?:,\d{3})+(?![0-9])/.exec(rest)){out+=m[0].replace(/,/g,"{,}");i+=m[0].length;continue;}
        if(m=/^([bgc])(\d)(?![0-9A-Za-z])/.exec(rest)){out+=m[1]+"_{"+m[2]+"}";i+=m[0].length;continue;}
        if(m=/^log(?![A-Za-z])/.exec(rest)){out+="\\log ";i+=3;continue;}
        if(m=/^(ab|abc|xy)(?![0-9A-Za-z])/.exec(rest)){out+=m[0];i+=m[0].length;continue;}
        if(m=/^(?=[0-9A-Z]*[A-Z])[0-9A-Z]+(?![0-9a-z])/.exec(rest)){
          out+=(m[0].length===1&&ITALIC_CAPS.test(m[0]))?m[0]:"\\mathrm{"+m[0]+"}"; i+=m[0].length; continue;
        }
        if(m=/^[A-Za-z]{2,}/.exec(rest)){out+="\\text{"+m[0]+"}";i+=m[0].length;continue;}
      }
      if(c===" "){
        var k=i;while(s[k]===" ")k++;
        var p=out.length?s[i-1]:"",n=s[k]||"";
        if(k-i>=2) out+="\\quad ";
        else if(/[0-9A-Za-z.⁰¹²³⁴⁵⁶⁷⁸⁹ⁿ₀-₉]/.test(p)&&/[0-9A-Za-z.(]/.test(n)) out+="\\ ";
        i=k; continue;
      }
      out+=SYM[c]!==undefined?SYM[c]:c; i++;
    }
    return out;
  }

  // ---- finding the math inside a sentence ------------------------------------------------
  // References such as "Book 1.12" or "Q24" and code names such as 8421 are words, not numbers.
  var LABEL=/^\d+ · |\b(?:Book|Slides?|slides?|Examples?|Ex|HW|Exam|Final|Finals|Problems?|problems?|Chapter|Question|Pages?|pages?|PAGE|LEVEL|Level|Q|P|p\.)\s*\d[\d.\-–]*(?:(?:, | & | and )\d[\d.\-–]*)*|\b20[12]\d\b|\b84-2-1\b|\b(?:8421|2421|6311|6421)\b/g;
  var WORDS=/^(?:BCD|ACE|ADD|BAD|DEAD|FACE)$/;

  function classify(t,cell){
    // A bracket that opens in one word and closes in another: judge what's inside it
    if(/^\(/.test(t)&&t.indexOf(")")<0) return classify(t.slice(1),cell);
    if(/\)$/.test(t)&&t.indexOf("(")<0) return classify(t.slice(0,-1),cell);
    if(/\)'$/.test(t)&&t.indexOf("(")<0) return classify(t.slice(0,-2),cell);
    if(/^(?:\d+[a-z]?|[a-z]|[()])+$/.test(t)&&/\)\(/.test(t)) return "A";
    if(t==="·") return "T";                    // spaced out, it separates items in a list
    if(/^[\dr]+'s\(.*\)$/.test(t)) return "M";
    if(/^\(?\d+'s$/.test(t)||/^r's$/.test(t)) return "T";
    if(/^\d+\+$/.test(t)) return "T";
    if(/\)'s$/.test(t)&&/[−+]/.test(t)) return "M";
    if(t==="…") return "A";
    if(/^…[−\-]?\d+$|^[−\-]?\d+…$/.test(t)) return "M";
    if(/^'[^']{1,3}'$/.test(t)) return "T";    // a character like 'G' stays text, so its quotes stay straight
    if(t.indexOf(SUB0)>=0||t.indexOf(SUP0)>=0||/[⁰¹²³⁴⁵⁶⁷⁸⁹ⁿ⁻ᵏ₀-₉]/.test(t)) return "M";
    if(/x\u0304/.test(t)) return "M";
    var bare=t.replace(/log/g,"").replace(/\bmod\b/g,"").replace(/\(MSB\)/g,"");
    var wordy=/[a-z]{2,}/.test(bare.replace(/\b(?:ab|abc|xy)\b/g,""))||/[A-Z][a-z]/.test(bare)||/[G-Z]{2,}/.test(bare.replace(/^\(?[0-9A-Z]+\)?$/,""));
    if(wordy&&!/^[^a-z]*[=][^a-z]*$/.test(t)) return "T";
    if(/\d[a-z]+-|-[a-z]/.test(t)) return "T";
    if(OP.test(t)) return "M";
    if(/[0-9A-F]\/[0-9(]|\)\/\d/.test(t)) return "M";
    if(/[0-9A-Z]–[0-9A-Z]/.test(t)) return "M";
    if(/^\(?[01.]{3,}…?\)?$/.test(t)&&/\d/.test(t)) return "M";
    if(/^\(?\d{4,}\)?$/.test(t)) return "M";
    if(/^\(?\d*\.\d+…?\)?$/.test(t)) return "M";
    if(/^\(?\d{1,3}(?:,\d{3})+\)?$/.test(t)) return "M";
    if(/^\(?(?=[0-9A-F.]*\d)(?=[0-9A-F.]*[A-F])[0-9A-F.]+\)?$/.test(t)) return "M";
    if(/^\d+(?:\.\d+)?[KMGT]$/.test(t)) return "M";
    if(/^0x[0-9A-F]+$|^[0-9A-F]+h$/.test(t)) return "M";
    if(/^\(?[rnNMxyzkfg]\)?$/.test(t)||/^(?:ab|abc|xy)$/.test(t)) return "M";
    if(/^\(?[a-z]+\)?'$/.test(t)||/^\d+[rxn]$/.test(t)||/^[bgc]\d$/.test(t)) return "M";
    if(/^[bg]\(.+\)$/.test(t)) return "M";
    if(/^\(?\d+\)?$/.test(t)) return cell?"M":"A";
    if(/^\(?[A-Z]\)?$/.test(t)) return cell?"M":"A";
    if(/^[a-z]$/.test(t)&&t!=="i") return "A";
    if(/^[A-F]{2,}$/.test(t)&&!WORDS.test(t)) return "A";
    if(/^[.|\/?()\[\]\-–]$/.test(t)) return "A";
    return "T";
  }

  // Splits text into pieces: {math:false,text} or {math:true,text}.
  function pieces(text,cell){
    var guard=[],m; LABEL.lastIndex=0;
    while(m=LABEL.exec(text)) guard.push([m.index,m.index+m[0].length]);
    function guarded(at,end){return guard.some(function(g){return at<g[1]&&end>g[0];});}
    var toks=[],re=/\s+|\S+/g;
    while(m=re.exec(text)){
      var w=m[0],at=m.index;
      if(/^\s/.test(w)){toks.push({s:w,k:"S"});continue;}
      if(guarded(at,at+w.length)||/^"/.test(w)){toks.push({s:w,k:"T"});continue;}
      var lit=/^('[^']{1,3}')(=.+)$/.exec(w);
      if(lit){toks.push({s:lit[1],k:"T"});w=lit[2];}
      var nb=/^([nrk])(-(?:bit|digit)s?)([,;:.]*)$/.exec(w);
      if(nb){toks.push({s:nb[1],k:"M"});toks.push({s:nb[2]+nb[3],k:"T"});continue;}
      var tail=/[,;:.!?"]+$/.exec(w),core=w,post="";
      if(tail&&!/^[.…?]+$/.test(w)){core=w.slice(0,tail.index);post=tail[0];}
      toks.push({s:core,k:classify(core,cell)});
      if(post) toks.push({s:post,k:"T"});
    }
    // Keep runs that have real math in them, and drop weak tokens (like a lone 16) from the edges.
    var out=[],i=0;
    function pushText(s){if(!s)return; var l=out[out.length-1]; if(l&&!l.math)l.text+=s; else out.push({math:false,text:s});}
    function isOp(t){return !!t&&(OP.test(t.s)||/^[.|\/…]$/.test(t.s));}
    while(i<toks.length){
      if(toks[i].k==="T"||toks[i].k==="S"){pushText(toks[i].s);i++;continue;}
      var j=i,last=i;
      while(j<toks.length&&toks[j].k!=="T"){if(toks[j].k!=="S")last=j;j++;}
      var run=toks.slice(i,last+1);
      var trail=toks.slice(last+1,j);
      var core2=run.filter(function(t){return t.k!=="S";});
      var a=0,b=core2.length-1;
      while(a<=b&&core2[a].k==="A"&&!isOp(core2[a+1])&&!(core2[a+1]&&/^[01.]{3,}$/.test(core2[a+1].s))) a++;
      while(b>=a&&core2[b].k==="A"&&!isOp(core2[b-1])&&!(core2[b-1]&&/^[01.]{3,}$/.test(core2[b-1].s))) b--;
      var kept=core2.slice(a,b+1);
      if(!kept.some(function(t){return t.k==="M";})){run.concat(trail).forEach(function(t){pushText(t.s);});i=j;continue;}
      var lo=run.indexOf(kept[0]),hi=run.indexOf(kept[kept.length-1]);
      run.slice(0,lo).forEach(function(t){pushText(t.s);});
      var str=run.slice(lo,hi+1).map(function(t){return t.s;}).join("");
      var open=(str.match(/\(/g)||[]).length,shut=(str.match(/\)/g)||[]).length,after="";
      if(open>shut&&str[0]==="("){pushText("(");str=str.slice(1);}
      else if(shut>open&&str[str.length-1]===")"){after=")";str=str.slice(0,-1);}
      out.push({math:true,text:str});
      if(after) pushText(after);
      run.slice(hi+1).concat(trail).forEach(function(t){pushText(t.s);});
      i=j;
    }
    return out;
  }

  function render(texSrc,host,display){
    try{katex.render(texSrc,host,{throwOnError:true,strict:"ignore",output:"html",displayMode:!!display});return true;}
    catch(e){console.error("[math]",texSrc,e.message);return false;}
  }
  function mathSpan(text,bold){
    var sp=document.createElement("span");
    var t=tex(text);
    // An operator at the edge of the math still needs its normal spacing: "9 − each digit"
    if(/^[+−×]\s/.test(text)) t="{}"+t;
    if(/\s[+−×=]$/.test(text)) t+="{}";
    if(!render(bold?"\\boldsymbol{"+t+"}":t,sp)) sp.textContent=text;
    return sp;
  }
  function fill(frag,text,cell,bold){
    var last=null;
    pieces(text,cell).forEach(function(p){
      if(p.math){last=mathSpan(p.text,bold);frag.appendChild(last);return;}
      var t=p.text.split(SUB0).join("").split(SUB1).join("").split(SUP0).join("").split(SUP1).join("");
      var glue=last&&/^[)\],.;:!?']+/.exec(t); // keep closing punctuation on the same line as its math
      if(glue){last.className="nb";last.appendChild(document.createTextNode(glue[0]));t=t.slice(glue[0].length);}
      last=null;
      if(t) frag.appendChild(document.createTextNode(t));
    });
  }

  // ---- .steps blocks: worked examples whose columns must stay lined up ------------------
  var COL=0.66; // width of one source column, in em
  var GCH=1.2; // font-size of a grid digit relative to its row (same as .katex in style.css)
  function gridish(l){return /^\s{2,}\S/.test(l)||/\S\s{2,}\S/.test(l)||/─/.test(l);}
  function weak(l){return /^[+−×÷=]\s/.test(l)||/^[0-9A-F. ]+$/.test(l);}
  function place(row,col,node){node.style.position="absolute";node.style.left=(col*COL)+"em";row.appendChild(node);}
  function chars(row,col,str){
    for(var i=0;i<str.length;i++){
      if(str[i]===" ")continue;
      var c=document.createElement("span");c.className="gch";c.textContent=str[i];
      c.style.width=(COL/GCH)+"em";
      c.style.position="absolute";c.style.left=((col+i)*COL/GCH)+"em";
      row.appendChild(c);
    }
  }
  function gridLine(line,bold){
    var row=document.createElement("div");row.className="gl";
    if(/^[\s─]+$/.test(line)) row.className="gl gr";
    var re=/\S+(?: \S+)*/g,m,DIGS="[0-9A-F.|]+(?: (?:[0-9A-F.|]+|\\)))*";
    while(m=re.exec(line)){
      var run=m[0],col=m.index,lead;
      if(/^─+$/.test(run)){
        var bar=document.createElement("span");bar.className="grule";bar.style.width=(run.length*COL)+"em";place(row,col,bar);continue;
      }
      if(new RegExp("^(?:[+−×÷] )?"+DIGS+"$").test(run)){chars(row,col,run);continue;}
      if(lead=new RegExp("^([a-z]+:?) ("+DIGS+")$").exec(run)){
        var word=document.createElement("span");word.className="grun";word.textContent=lead[1];place(row,col,word);
        chars(row,col+lead[1].length+1,lead[2]);continue;
      }
      if(lead=/^(=\s)?([0-9A-F.|]+(?: [0-9A-F.|]+)*)(\s+→.*)$/.exec(run)){
        var head=(lead[1]||"")+lead[2]; chars(row,col,head);
        var hold=document.createElement("span");hold.className="grun";fill(hold,lead[3].replace(/^\s+/,""),true,bold);place(row,col+head.length+1,hold);continue;
      }
      var box=document.createElement("span");box.className="grun";fill(box,run,true,bold);place(row,col,box);
    }
    return row;
  }
  function renderSteps(el){
    var lines=el.textContent.replace(/\)(\d+|r|BCD)(?=[\s,.:;=)]|$)/gm,")"+SUB0+"$1"+SUB1).split("\n");
    var bold=!!el.closest(BOLD);
    el.textContent="";
    var flags=lines.map(function(l){return gridish(l);});
    var inGrid=lines.map(function(){return false;});
    for(var i=0;i<lines.length;){
      if(!flags[i]&&!weak(lines[i])){i++;continue;}
      var j=i,any=false;
      while(j<lines.length&&(flags[j]||weak(lines[j]))){any=any||flags[j];j++;}
      if(any&&j-i>=2) for(var k=i;k<j;k++) inGrid[k]=true;
      i=j;
    }
    // Capital hex letters are wider than digits, so those blocks get wider columns
    COL=lines.some(function(l,n){return inGrid[n]&&/(?:^|\s)[0-9]*[A-F][0-9A-F]*(?=\s|$)/.test(l);})?0.95:0.66;
    lines.forEach(function(line,n){
      if(inGrid[n]){el.appendChild(gridLine(line,bold));return;}
      var row=document.createElement("div");row.className="sl";
      if(line.trim()==="") row.innerHTML="&nbsp;"; else fill(row,line,true,bold);
      el.appendChild(row);
    });
  }

  // ---- walking the page ------------------------------------------------------------------
  function skipped(n){var e=n.nodeType===1?n:n.parentElement;return !e||!!e.closest(SKIP);}
  function typeset(root){
    if(root.nodeType!==1||skipped(root)) return;
    if(root.matches("[data-tex]")) renderTexBlock(root);
    root.querySelectorAll("[data-tex]").forEach(renderTexBlock);
    Array.prototype.slice.call(root.querySelectorAll("sub,sup")).forEach(function(s){
      if(skipped(s)||s.closest("[data-tex]")) return;
      var o=s.tagName==="SUB"?SUB0:SUP0,c=s.tagName==="SUB"?SUB1:SUP1,p=s.parentNode;
      p.replaceChild(document.createTextNode(o+s.textContent+c),s);p.normalize();
    });
    var steps=root.matches(".steps")?[root]:Array.prototype.slice.call(root.querySelectorAll(".steps"));
    steps.forEach(function(el){if(!skipped(el)&&!el.hasAttribute("data-done")){el.setAttribute("data-done","");renderSteps(el);}});
    var walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,{acceptNode:function(n){
      if(!n.nodeValue.trim()||skipped(n)) return NodeFilter.FILTER_REJECT;
      if(n.parentElement.closest("[data-tex],.steps")) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }}),list=[],n;
    while(n=walker.nextNode()) list.push(n);
    list.forEach(function(node){
      var host=node.parentElement,frag=document.createDocumentFragment();
      fill(frag,node.nodeValue,!!host.closest(CELL),!!host.closest(BOLD));
      host.replaceChild(frag,node);
    });
  }
  function renderTexBlock(el){
    if(el.hasAttribute("data-done")) return;
    el.setAttribute("data-done","");
    render(el.getAttribute("data-tex"),el,true);
  }

  typeset(document.body);
  new MutationObserver(function(muts){
    muts.forEach(function(m){m.addedNodes.forEach(function(a){if(a.nodeType===1&&!a.classList.contains("katex")) typeset(a);});});
  }).observe(document.body,{childList:true,subtree:true});
})();
