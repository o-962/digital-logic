// Exact base converter (BigInt rationals) with step-by-step output
(function(){
  var DIG="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  function parse(s,b){
    s=s.trim().toUpperCase().replace(/\s+/g,"");
    if(!/^[0-9A-Z]*(\.[0-9A-Z]*)?$/.test(s)||s===""||s===".") throw "Invalid number format";
    var parts=s.split("."),ip=parts[0]||"0",fp=parts[1]||"";
    var B=BigInt(b),num=0n;
    for(var c of ip+fp){var d=DIG.indexOf(c); if(d<0||d>=b) throw "Digit '"+c+"' is not allowed in base "+b+" (digits must be 0…"+DIG[b-1]+")"; num=num*B+BigInt(d);}
    return {num:num,den:B**BigInt(fp.length),ip:ip,fp:fp};
  }
  function decStr(num,den,places){ // decimal string of rational
    var ip=num/den, r=num%den, s=ip.toString();
    if(r===0n) return s; s+=".";
    for(var i=0;i<places&&r!==0n;i++){r*=10n;s+=(r/den).toString();r%=den;}
    return s+(r!==0n?"…":"");
  }
  function convert(str,a,b,places){
    places=places||12;
    var p=parse(str,a), A=BigInt(a), Bb=BigInt(b), out=[];
    var ipv=p.num/p.den, fnum=p.num%p.den, den=p.den;
    // step 1: to decimal
    if(a!==10){
      var terms=[],all=p.ip+p.fp,n=p.ip.length;
      for(var i=0;i<all.length;i++){var pos=n-1-i; if(all[i]!=="0") terms.push(DIG.indexOf(all[i])+"×"+a+"<sup>"+pos+"</sup>");}
      out.push("<b>Step 1: base "+a+" → decimal</b> (Σ digit × base<sup>position</sup>)<div class='steps'>"+(terms.join(" + ")||"0")+"\n= "+decStr(p.num,p.den,15)+"</div>");
    }
    if(b===10){ return {result:decStr(p.num,p.den,15),html:out.join("")}; }
    // integer part
    var html="<b>Step "+(a!==10?2:1)+": integer part "+ipv+" → base "+b+"</b> (divide by "+b+", read remainders bottom → top)<table><tr><th>÷"+b+"</th><th>Quotient</th><th>Remainder</th></tr>";
    var q=ipv,digs="";
    if(q===0n){digs="0";html+="<tr><td>0</td><td>0</td><td>0</td></tr>";}
    while(q>0n){var rr=q%Bb; html+="<tr><td>"+q+" ÷ "+b+"</td><td>"+(q/Bb)+"</td><td>"+DIG[Number(rr)]+"</td></tr>"; digs=DIG[Number(rr)]+digs; q=q/Bb;}
    html+="</table>";
    out.push(html);
    var res=digs;
    if(fnum!==0n){
      var h2="<b>Fraction part "+decStr(fnum,den,15)+" → base "+b+"</b> (multiply by "+b+", read integer parts top → bottom)<table><tr><th>Fraction × "+b+"</th><th>= </th><th>Digit</th></tr>",fd="",f=fnum,k=0;
      while(f!==0n&&k<places){var x=f*Bb, d=x/den; h2+="<tr><td>"+decStr(f,den,10)+" × "+b+"</td><td>"+decStr(x,den,10)+"</td><td>"+DIG[Number(d)]+"</td></tr>"; fd+=DIG[Number(d)]; f=x%den; k++;}
      h2+="</table>"+(f!==0n?"<p>Stopped after "+places+" digits: the fraction doesn't terminate in base "+b+".</p>":"");
      out.push(h2); res+="."+fd+(f!==0n?"…":"");
    }
    return {result:res,html:out.join("")};
  }
  window.BaseConv={convert:convert,parse:parse};
  window.addEventListener("DOMContentLoaded",function(){
    var box=document.getElementById("conv"); if(!box) return;
    function run(){
      var s=document.getElementById("cv-in").value, a=+document.getElementById("cv-a").value, b=+document.getElementById("cv-b").value, o=document.getElementById("cv-out");
      try{var r=convert(s,a,b,12); o.innerHTML="<p style='font-size:1.3em'>("+s.toUpperCase()+")<sub>"+a+"</sub> = <b class='hi'>("+r.result+")<sub>"+b+"</sub></b></p>"+r.html;}
      catch(e){o.innerHTML="<p class='r'>"+e+"</p>";}
    }
    ["cv-in","cv-a","cv-b"].forEach(function(id){document.getElementById(id).addEventListener("input",run);});
    run();
  });
})();
